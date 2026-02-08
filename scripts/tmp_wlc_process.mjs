import { readFileSync, writeFileSync } from 'fs';

// Parse Chinese text from Ligonier
const zhText = readFileSync('/Users/suyan/clawd/tmp_zh_raw.txt', 'utf-8');

function parseZh(text) {
  const results = [];
  // Split by 问N：
  const parts = text.split(/(?=问\d+：)/);
  for (const part of parts) {
    const qMatch = part.match(/^问(\d+)：(.+?)(?:\n|$)/);
    if (!qMatch) continue;
    const num = parseInt(qMatch[1]);
    const question = qMatch[2].trim();
    
    // Find answer
    const aMatch = part.match(/\n答[：:](.+)/s);
    if (!aMatch) { console.log(`No answer for Q${num}`); continue; }
    
    let answer = aMatch[1].trim();
    
    // Split into lines and remove footnote lines
    const lines = answer.split('\n');
    const cleanLines = [];
    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed) continue;
      
      // Skip footnote reference lines (like "罗十一36；林前十31。诗七三25-26。")
      // These lines start with Chinese book abbreviation or are pure scripture refs
      // Pattern: starts with scripture refs, no question/answer markers
      if (/^[\u4e00-\u9fff]/.test(trimmed) && !trimmed.startsWith('（') && !trimmed.startsWith('问')) {
        // Check if it looks like a scripture reference line
        // Scripture refs contain patterns like 书名+数字+冒号/章+数字
        // e.g. "罗十一36；林前十31。"
        const isScriptureRef = /^[（\u4e00-\u9fff]+[\d一二三四五六七八九十廿卅百]+/.test(trimmed) &&
          /[；。，、]/.test(trimmed) &&
          !trimmed.includes('答') &&
          !trimmed.includes('就是') &&
          !trimmed.includes('因为') &&
          !trimmed.includes('我们') &&
          !trimmed.includes('神') &&  // too aggressive, need better detection
          trimmed.length < 300;
        
        // Better approach: check if line is ONLY scripture references
        // Scripture refs look like: 书名+章节+[；。，、-]
        const scripturePattern = /^[\s]*(?:〔[^〕]+〕[、；。]?\s*)?(?:(?:创|出|利|民|申|书|士|得|撒上|撒下|王上|王下|代上|代下|拉|尼|斯|伯|诗|箴|传|歌|赛|耶|哀|结|但|何|珥|摩|俄|拿|弥|鸿|哈|番|该|亚|玛|太|可|路|约|徒|罗|林前|林后|加|弗|腓|西|帖前|帖后|提前|提后|多|门|来|雅|彼前|彼后|约壹|约贰|约参|犹|启|请参考)[\d一二三四五六七八九十廿卅百○]+[^\n；。]*[；。，、\s]?\s*)+$/;
        
        if (scripturePattern.test(trimmed)) {
          continue; // Skip scripture reference line
        }
      }
      
      // Also skip lines that start with "— 出处" or after
      if (trimmed.startsWith('—') || trimmed.startsWith('*本') || trimmed.startsWith('採購')) break;
      if (trimmed === '信经信条' || trimmed.startsWith('韦敏斯德') || trimmed.startsWith('多特') || 
          trimmed.startsWith('海德堡') || trimmed.startsWith('比利时') || trimmed.startsWith('迦克墩') ||
          trimmed.startsWith('亚他那修') || trimmed.startsWith('使徒') || trimmed.startsWith('尼西亚')) break;
      
      cleanLines.push(trimmed);
    }
    
    answer = cleanLines.join('\n').trim();
    results.push({ num, question_zh: question, answer_zh: answer });
  }
  return results;
}

// Parse English text from OPC
const enText = readFileSync('/Users/suyan/clawd/tmp_en_raw.txt', 'utf-8');

function parseEn(text) {
  const results = [];
  const parts = text.split(/(?=Q\. \d+\.)/);
  for (const part of parts) {
    const qMatch = part.match(/^Q\. (\d+)\. (.+?)(?:\n|$)/);
    if (!qMatch) continue;
    const num = parseInt(qMatch[1]);
    const question = qMatch[2].trim();
    
    const aMatch = part.match(/\nA\. (.+)/s);
    if (!aMatch) { console.log(`No EN answer for Q${num}`); continue; }
    
    let answer = aMatch[1].trim();
    // Remove section headers
    answer = answer.replace(/\n\nHAVING SEEN WHAT THE SCRIPTURES.*/s, '').trim();
    answer = answer.replace(/\n\nWHAT MAN OUGHT TO BELIEVE.*/s, '').trim();
    
    results.push({ num, question_en: question, answer_en: answer });
  }
  return results;
}

const zhData = parseZh(zhText);
const enData = parseEn(enText);

console.log(`Parsed ${zhData.length} Chinese questions`);
console.log(`Parsed ${enData.length} English questions`);

// Check which are missing
const zhNums = new Set(zhData.map(d => d.num));
const enNums = new Set(enData.map(d => d.num));
for (let i = 1; i <= 196; i++) {
  if (!zhNums.has(i)) console.log(`Missing ZH Q${i}`);
  if (!enNums.has(i)) console.log(`Missing EN Q${i}`);
}

// Load existing JSON
const jsonPath = '/Users/suyan/clawd/projects/gospel-app/web/src/data/catechism_wlc.json';
const existing = JSON.parse(readFileSync(jsonPath, 'utf-8'));

console.log(`Existing JSON has ${existing.length} items`);

// Build lookup maps
const zhMap = new Map(zhData.map(d => [d.num, d]));
const enMap = new Map(enData.map(d => [d.num, d]));

// Replace
let replaced = 0;
for (const item of existing) {
  const num = item.number;
  const zh = zhMap.get(num);
  const en = enMap.get(num);
  
  if (zh) {
    item.question_zh = `问${num}：${zh.question_zh}`;
    item.answer_zh = `答：${zh.answer_zh}`;
    replaced++;
  } else {
    console.log(`No ZH data for Q${num}`);
  }
  
  if (en) {
    item.question_en = `Q. ${num}. ${en.question_en}`;
    item.answer_en = `A. ${en.answer_en}`;
  } else {
    console.log(`No EN data for Q${num}`);
  }
}

console.log(`Replaced ${replaced} items`);

// Write back
writeFileSync(jsonPath, JSON.stringify(existing, null, 2) + '\n', 'utf-8');
console.log('Written to JSON file');

// Spot check
for (const qn of [1, 50, 100, 150, 196]) {
  const item = existing.find(i => i.number === qn);
  if (item) {
    console.log(`\n=== Q${qn} ===`);
    console.log(`EN Q: ${item.question_en.substring(0, 100)}...`);
    console.log(`EN A: ${item.answer_en.substring(0, 100)}...`);
    console.log(`ZH Q: ${item.question_zh.substring(0, 100)}...`);
    console.log(`ZH A: ${item.answer_zh.substring(0, 100)}...`);
  }
}
