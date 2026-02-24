#!/usr/bin/env node
/**
 * Generate podcast audio from readings/letters using local TTS server
 * Usage: node generate-podcast.js --type reading --book genesis --chapter 1
 *        node generate-podcast.js --type letter --id zacchaeus-tree
 *        node generate-podcast.js --type altar --day 1
 * 
 * Requires: TTS server running on localhost:3000
 * Output: ../podcast/ directory
 */

const fs = require('fs');
const path = require('path');
const http = require('http');

const TTS_URL = 'http://localhost:3000';
const PODCAST_DIR = path.join(__dirname, '..', 'podcast');
const WEB_DIR = path.join(__dirname, '..', 'web');

// Ensure podcast dir exists
if (!fs.existsSync(PODCAST_DIR)) fs.mkdirSync(PODCAST_DIR, { recursive: true });

async function tts(text, lang = 'zh') {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify({ text, lang });
    const req = http.request(TTS_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(data) },
    }, (res) => {
      const chunks = [];
      res.on('data', c => chunks.push(c));
      res.on('end', () => {
        if (res.statusCode === 200) resolve(Buffer.concat(chunks));
        else reject(new Error(`TTS error ${res.statusCode}`));
      });
    });
    req.on('error', reject);
    req.write(data);
    req.end();
  });
}

async function generateReadingAudio(book, chapter) {
  // Load readings data
  const dataPath = path.join(WEB_DIR, 'src', 'data', 'readings.ts');
  const dataContent = fs.readFileSync(dataPath, 'utf8');
  
  // Extract the specific chapter content
  const chapterNum = parseInt(chapter);
  const regex = new RegExp(`book:\\s*'[^']*',\\s*bookEn:\\s*'${book}'[^}]*chapter:\\s*${chapterNum}[\\s\\S]*?content_zh:\\s*\`([\\s\\S]*?)\``, 'i');
  
  // Simpler approach: find the chapter and extract content_zh
  const entries = dataContent.split(/\{\s*book:/);
  let content_zh = '';
  let title = '';
  
  for (const entry of entries) {
    if (entry.includes(`chapter: ${chapterNum}`) && entry.toLowerCase().includes(book.toLowerCase())) {
      const titleMatch = entry.match(/title:\s*'([^']+)'/);
      if (titleMatch) title = titleMatch[1];
      
      const contentMatch = entry.match(/content_zh:\s*`([\s\S]*?)`/);
      if (contentMatch) content_zh = contentMatch[1];
      break;
    }
  }
  
  if (!content_zh) {
    console.error(`Chapter not found: ${book} ${chapter}`);
    process.exit(1);
  }
  
  // Clean markdown for TTS
  const cleanText = cleanForTTS(content_zh);
  
  // Add intro
  const bookZh = book === 'Genesis' ? '创世记' : book;
  const introText = `圣徒伴读。${bookZh}第${chapterNum}章。${title}。`;
  const fullText = introText + cleanText;
  
  console.log(`Generating audio for ${bookZh} Chapter ${chapterNum}: ${title}`);
  console.log(`Text length: ${fullText.length} chars`);
  
  // Split into chunks if too long (TTS max ~5000 chars per request for quality)
  const chunks = splitText(fullText, 4000);
  const audioBuffers = [];
  
  for (let i = 0; i < chunks.length; i++) {
    console.log(`  Generating chunk ${i + 1}/${chunks.length} (${chunks[i].length} chars)...`);
    const audio = await tts(chunks[i], 'zh');
    audioBuffers.push(audio);
  }
  
  // Concatenate MP3 buffers (simple concat works for MP3)
  const combined = Buffer.concat(audioBuffers);
  const filename = `reading-${book.toLowerCase()}-ch${chapterNum}.mp3`;
  const outputPath = path.join(PODCAST_DIR, filename);
  fs.writeFileSync(outputPath, combined);
  
  console.log(`✅ Saved: ${outputPath} (${(combined.length / 1024 / 1024).toFixed(1)} MB)`);
  return outputPath;
}

async function generateLetterAudio(letterId) {
  const dataPath = path.join(WEB_DIR, 'src', 'data', 'letters.ts');
  const dataContent = fs.readFileSync(dataPath, 'utf8');
  
  // Find the letter
  const letterStart = dataContent.indexOf(`id: '${letterId}'`);
  if (letterStart < 0) {
    console.error(`Letter not found: ${letterId}`);
    process.exit(1);
  }
  
  // Extract fields
  const section = dataContent.substring(letterStart, letterStart + 50000);
  const titleMatch = section.match(/title_zh:\s*'([^']+)'/);
  const authorMatch = section.match(/author:\s*'([^']+)'/);
  const contentMatch = section.match(/content_zh:\s*`([\s\S]*?)`/);
  
  if (!contentMatch) {
    console.error(`Content not found for letter: ${letterId}`);
    process.exit(1);
  }
  
  const title = titleMatch ? titleMatch[1] : letterId;
  const author = authorMatch ? authorMatch[1] : '';
  const content_zh = contentMatch[1];
  
  const cleanText = cleanForTTS(content_zh);
  const introText = `圣徒来信。${author}。${title}。`;
  const fullText = introText + cleanText;
  
  console.log(`Generating audio for letter: ${title} by ${author}`);
  console.log(`Text length: ${fullText.length} chars`);
  
  const chunks = splitText(fullText, 4000);
  const audioBuffers = [];
  
  for (let i = 0; i < chunks.length; i++) {
    console.log(`  Generating chunk ${i + 1}/${chunks.length} (${chunks[i].length} chars)...`);
    const audio = await tts(chunks[i], 'zh');
    audioBuffers.push(audio);
  }
  
  const combined = Buffer.concat(audioBuffers);
  const filename = `letter-${letterId}.mp3`;
  const outputPath = path.join(PODCAST_DIR, filename);
  fs.writeFileSync(outputPath, combined);
  
  console.log(`✅ Saved: ${outputPath} (${(combined.length / 1024 / 1024).toFixed(1)} MB)`);
  return outputPath;
}

function cleanForTTS(text) {
  return text
    .replace(/##\s*/g, '') // remove markdown headers
    .replace(/\*\*/g, '')  // remove bold
    .replace(/\*/g, '')    // remove italic
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // links to text
    .replace(/`[^`]+`/g, '') // remove code
    .replace(/>\s*/g, '')  // remove blockquote markers
    .replace(/\n{3,}/g, '\n\n') // reduce multiple newlines
    .replace(/\n/g, '。') // newlines to pauses
    .replace(/。{2,}/g, '。') // reduce multiple periods
    .trim();
}

function splitText(text, maxLen) {
  if (text.length <= maxLen) return [text];
  
  const chunks = [];
  let remaining = text;
  
  while (remaining.length > maxLen) {
    // Find a good split point (sentence end)
    let splitAt = remaining.lastIndexOf('。', maxLen);
    if (splitAt < maxLen * 0.5) splitAt = remaining.lastIndexOf('，', maxLen);
    if (splitAt < maxLen * 0.5) splitAt = maxLen;
    
    chunks.push(remaining.substring(0, splitAt + 1));
    remaining = remaining.substring(splitAt + 1);
  }
  if (remaining) chunks.push(remaining);
  
  return chunks;
}

// Parse CLI args
const args = process.argv.slice(2);
const getArg = (name) => {
  const idx = args.indexOf(`--${name}`);
  return idx >= 0 ? args[idx + 1] : null;
};

const type = getArg('type') || 'reading';

(async () => {
  try {
    if (type === 'reading') {
      const book = getArg('book') || 'Genesis';
      const chapter = getArg('chapter') || '1';
      await generateReadingAudio(book, chapter);
    } else if (type === 'letter') {
      const id = getArg('id');
      if (!id) { console.error('--id required for letter type'); process.exit(1); }
      await generateLetterAudio(id);
    } else if (type === 'batch-readings') {
      // Generate all available readings
      const book = getArg('book') || 'Genesis';
      const startCh = parseInt(getArg('start') || '1');
      const endCh = parseInt(getArg('end') || '10');
      for (let ch = startCh; ch <= endCh; ch++) {
        try {
          await generateReadingAudio(book, ch.toString());
        } catch (e) {
          console.error(`  ❌ Chapter ${ch}: ${e.message}`);
        }
      }
    } else {
      console.error(`Unknown type: ${type}`);
      process.exit(1);
    }
  } catch (e) {
    console.error('Error:', e.message);
    process.exit(1);
  }
})();
