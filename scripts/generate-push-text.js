#!/usr/bin/env node
// Generate personalized Telegram push text from website data
// Usage: node generate-push-text.js <reading|letter|altar> [args]

const fs = require('fs');
const PROJECT = '/Users/suyan/agents/shared/projects/gospel-app';

function getToday() {
  return new Date().toLocaleDateString('en-CA', {timeZone:'America/New_York'});
}

function getDow() {
  return new Date().getDay(); // 0=Sun
}

function generateReading() {
  const src = fs.readFileSync(`${PROJECT}/web/src/data/readings.ts`, 'utf8');
  const today = getToday();
  // Support both `readings.push({` and `[{ ... }, { ... }]` array formats
  let blocks = src.split('readings.push({').slice(1);
  if (blocks.length === 0) {
    // Array format: split on `  {` (object start in array)
    blocks = src.split(/\n\s*\{(?=\s*\n?\s*book:)/).slice(1);
  }
  
  for (const b of blocks) {
    const pd = b.match(/publishDate:\s*'([^']+)'/);
    if (!pd || pd[1] !== today) continue;
    
    const ch = b.match(/chapter:\s*(\d+)/)?.[1];
    const book = b.match(/book:\s*'([^']+)'/)?.[1] || '创世记';
    const bookEn = b.match(/bookEn:\s*'([^']+)'/)?.[1] || 'Genesis';
    const title = b.match(/title:\s*'([^']+)'/)?.[1];
    const titleEn = b.match(/titleEn:\s*'([^']+)'/)?.[1];
    const scripture = b.match(/scripture:\s*'([^']+)'/)?.[1];
    
    // Map book to URL path
    const bookPathMap = {
      '创世记': 'genesis', '出埃及记': 'exodus', '利未记': 'leviticus',
      '民数记': 'numbers', '申命记': 'deuteronomy',
      '约翰福音': 'john', '使徒行传': 'acts', '罗马书': 'romans',
      '诗篇': 'psalms', '箴言': 'proverbs',
    };
    const bookPath = bookPathMap[book] || book.toLowerCase();
    
    // Detect psalm/proverb for different emoji and formatting
    const isPsalm = book === '诗篇';
    const isProverb = book === '箴言';
    const isSundayReading = isPsalm || isProverb;
    
    // Teaser: first 2 meaningful sentences
    const cm = b.match(/content_zh:\s*`([\s\S]{0,800})/);
    let teaser = '';
    if (cm) {
      const cleaned = cm[1].replace(/[#*`\n]+/g, ' ').replace(/\s+/g, ' ').trim();
      const sentences = cleaned.split(/[。！？]/).filter(s => s.trim().length > 8);
      teaser = sentences.slice(0, 2).join('。') + '。';
      if (teaser.length > 120) teaser = teaser.substring(0, 117) + '…';
    }
    
    // Key verse: look for \u201c...\u201d (Chinese curly quotes) in content
    const contentMatch = b.match(/content_zh:\s*`([\s\S]*?)`,?\s*content_en/);
    let keyVerse = '';
    if (contentMatch) {
      const content = contentMatch[1];
      // Try both curly and straight quotes
      // Pattern: "quote"（reference）
      const quoteRe = /["“]([^"”]{10,80})["”][（(]([^）)]+)[）)]/g;
      const allQuotes = [...content.matchAll(quoteRe)];
      // Prefer quotes containing 耶和华 or 神说
      const lordQ = allQuotes.find(q => /耶和华|神说|神对/.test(q[1]));
      if (lordQ) {
        keyVerse = `"${lordQ[1]}"（${lordQ[2]}）`;
      } else if (allQuotes.length > 0) {
        keyVerse = `"${allQuotes[0][1]}"（${allQuotes[0][2]}）`;
      } else {
        // Fallback: first quoted text without reference
        const simpleQ = content.match(/["“]([^"”]{15,60})["”]/);
        if (simpleQ) keyVerse = `"${simpleQ[1]}"`;
      }
    }
    
    const dow = getDow();
    const greetings = [
      '主日平安！愿今天的灵修预备你的心。',
      '新的一周，让我们从神的话语开始。',
      '愿今天的经文成为你脚前的灯。',
      '一周过半，在神的话语中重新得力。',
      '安静下来，聆听神在这段经文中的声音。',
      '以神的话语结束这一周的劳碌。',
      '安息日的平安，愿全家在主里得安息。',
    ];
    
    let msg = '';
    if (isSundayReading) {
      const emoji = isPsalm ? '🎵' : '📜';
      const header = isPsalm ? '主日诗篇 · Sunday Psalm' : '主日箴言 · Sunday Proverb';
      const chLabel = isPsalm ? `诗篇 第${ch}篇` : `箴言 第${ch}章`;
      const chLabelEn = isPsalm ? `Psalm ${ch}` : `Proverbs ${ch}`;
      msg = `${emoji} <b>${header}</b>\n\n`;
      msg += `📕 <b>${chLabel} · ${title}</b>\n`;
      msg += `<i>${chLabelEn} · ${titleEn}</i>\n\n`;
      if (teaser) msg += `💡 ${teaser}\n\n`;
      if (keyVerse) msg += `📜 <i>${keyVerse}</i>\n\n`;
      msg += `✨ 主日平安！愿今天的灵修预备你的心。\n\n`;
    } else {
      msg = `📖 <b>圣徒伴读 · Daily Reading</b>\n\n`;
      msg += `📕 <b>${book} 第${ch}章 · ${title}</b>\n`;
      msg += `<i>${bookEn} ${ch} · ${titleEn}</i>\n\n`;
      if (teaser) msg += `💡 ${teaser}\n\n`;
      if (keyVerse) msg += `📜 <i>${keyVerse}</i>\n\n`;
      msg += `✨ ${greetings[dow]}\n\n`;
    }
    msg += `🔗 <a href="https://rockoftruth.net/readings/${bookPath}?ch=${ch}">阅读全文 Read more →</a>\n\n`;
    msg += `—— 真理磐石 Rock of Truth`;
    
    const url = `https://rockoftruth.net/readings/${bookPath}?ch=${ch}`;
    console.log(JSON.stringify({text: msg, url}));
    return;
  }
  
  console.error('No reading found for ' + today);
  process.exit(1);
}

function generateLetter(id) {
  const src = fs.readFileSync(`${PROJECT}/web/src/data/letters.ts`, 'utf8');
  
  // Auto-detect today's letter if no id provided
  if (!id) {
    const today = getToday();
    const dateRe = /id:\s*'([^']+)'[\s\S]*?date:\s*'([^']+)'/g;
    let m;
    while ((m = dateRe.exec(src)) !== null) {
      if (m[2] === today) { id = m[1]; break; }
    }
    if (!id) { console.error('No letter for today:', today); process.exit(1); }
  }
  
  // Find letter by id
  const re = new RegExp(`id:\\s*'${id}'`);
  const idx = src.search(re);
  if (idx === -1) { console.error('Letter not found: ' + id); process.exit(1); }
  
  const block = src.substring(idx, idx + 3000);
  const f = (key) => {
    const m = block.match(new RegExp(`${key}:\\s*'([^']*)'`));
    return m ? m[1] : '';
  };
  
  const title_zh = f('title_zh');
  const title_en = f('title_en');
  const author = f('author');
  const authorEn = f('author_en');
  const scripture = f('scripture');
  const summary_zh = f('summary_zh');
  const authorBio = f('author_bio');
  
  // Get first quote from content
  const contentMatch = block.match(/content_zh:\s*`([\s\S]{0,1000})/);
  let openingHook = '';
  if (contentMatch) {
    const content = contentMatch[1];
    // First sentence as hook
    const firstSentences = content.replace(/[#*`]/g, '').trim().split(/[。！？]/);
    if (firstSentences[0] && firstSentences[0].length > 10) {
      openingHook = firstSentences[0] + '。';
    }
  }
  
  let msg = `✉️ <b>圣徒来信 · Saint's Letter</b>\n\n`;
  msg += `📜 <b>${title_zh}</b>\n`;
  msg += `<i>${title_en}</i>\n\n`;
  msg += `✍️ ${author} ${authorEn}\n`;
  if (authorBio) msg += `<i>${authorBio.substring(0, 60)}</i>\n\n`;
  if (openingHook) msg += `💬 "${openingHook}"\n\n`;
  msg += `📖 ${scripture}\n\n`;
  msg += `${summary_zh}\n\n`;
  msg += `🔗 <a href="https://rockoftruth.net/letters/${id}">阅读全文 Read more →</a>\n\n`;
  msg += `—— 真理磐石 Rock of Truth`;
  
  const url = `https://rockoftruth.net/letters/${id}`;
  console.log(JSON.stringify({text: msg, url}));
}

function generateAltar() {
  const today = getToday();
  const dow = getDow();
  
  // Read theme names from data file
  const dataSrc = fs.readFileSync(`${PROJECT}/web/src/data/family-altar-data.ts`, 'utf8');
  const themeMatches = [...dataSrc.matchAll(/name_zh:\s*'([^']+)'[\s\S]*?name_en:\s*'([^']+)'/g)];
  const themes = themeMatches.map(m => ({zh: m[1], en: m[2]}));
  
  // Calculate theme index (same algorithm as website)
  const [y,m,d] = today.split('-').map(Number);
  const epochStart = new Date(2026, 0, 1);
  const todayDate = new Date(y, m-1, d);
  const daysSinceEpoch = Math.floor((todayDate - epochStart) / 86400000);
  const themeIndex = Math.floor(daysSinceEpoch / 15) % (themes.length || 1);
  const dayInTheme = (daysSinceEpoch % 15) + 1;
  
  const theme = themes[themeIndex] || {zh: '信心', en: 'Faith'};
  
  // Try to extract today's scripture from theme data
  // Theme files are named family-altar-themes-a1.ts, b1.ts, etc.
  // Too complex to parse directly; use theme name as the main draw
  
  const greetings = [
    '主日的清晨，全家一起到神面前。☀️',
    '新的一周开始了，带着家人一起亲近神。🌅',
    '与家人围坐，在神的话语中开始新的一天。📖',
    '一周过半，让全家在主里重新得力。💪',
    '与孩子一起读经、祷告、唱诗。🎵',
    '以感恩的心预备安息，全家一起灵修。🙏',
    '安息日的平安！全家在主的同在中歇息。🕊️',
  ];
  
  let msg = `🕯️ <b>家庭祭坛 · Family Altar</b>\n\n`;
  msg += `📅 ${today}\n\n`;
  msg += `🎯 本期主题：<b>${theme.zh}</b> · <i>${theme.en}</i>\n`;
  msg += `📆 第${dayInTheme}天（共15天）\n\n`;
  msg += `${greetings[dow]}\n\n`;
  msg += `📖 经文 · 💭 默想 · ❓ 讨论 · 🙏 祷告 · 🎵 诗歌 · 📗 要理问答\n\n`;
  msg += `🔗 <a href="https://rockoftruth.net/family-altar">开始今日灵修 →</a>\n\n`;
  msg += `—— 真理磐石 Rock of Truth`;
  
  console.log(JSON.stringify({text: msg}));
}

// Main
const type = process.argv[2];
switch (type) {
  case 'reading': generateReading(); break;
  case 'letter': generateLetter(process.argv[3]); break;
  case 'altar': generateAltar(); break;
  default:
    console.error('Usage: node generate-push-text.js <reading|letter|altar> [id]');
    process.exit(1);
}
