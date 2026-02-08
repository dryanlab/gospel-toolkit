import { readFileSync, writeFileSync } from 'fs';

// ===== PARSE ENGLISH FROM OPC =====
const enText = readFileSync('/Users/suyan/clawd/tmp_en_raw.txt', 'utf-8');
const enResults = [];
const enParts = enText.split(/(?=\nQ\. \d+\.)/);
for (const part of enParts) {
  const qMatch = part.match(/Q\. (\d+)\. (.+?)(?:\n|$)/);
  if (!qMatch) continue;
  const num = parseInt(qMatch[1]);
  const question = qMatch[2].trim();
  const aMatch = part.match(/\nA\. ([\s\S]+?)(?=\n\nQ\. \d+\.|$)/);
  if (!aMatch) continue;
  let answer = aMatch[1].trim();
  // Remove section headers that might be embedded
  answer = answer.replace(/\n\n(?:HAVING SEEN|WHAT MAN OUGHT)[^\n]*/g, '').trim();
  enResults.push({ num, question, answer });
}
console.log(`EN: ${enResults.length} questions`);

// ===== PARSE CHINESE FROM LIGONIER =====
const zhText = readFileSync('/Users/suyan/clawd/tmp_zh_raw.txt', 'utf-8');
const zhResults = [];

// Split by question markers
const zhParts = zhText.split(/(?=\n问\d+：)/);
for (const part of zhParts) {
  const qMatch = part.match(/问(\d+)：(.+?)(?:\n|$)/);
  if (!qMatch) continue;
  const num = parseInt(qMatch[1]);
  const question = qMatch[2].trim();
  
  const aMatch = part.match(/\n答[：:][\s]*([\s\S]+)/);
  if (!aMatch) { console.log(`ZH: No answer for Q${num}`); continue; }
  
  let answerBlock = aMatch[1];
  
  // Split into lines
  const lines = answerBlock.split('\n');
  const cleanLines = [];
  let hitFooter = false;
  
  for (const line of lines) {
    const t = line.trim();
    if (!t) continue;
    if (hitFooter) continue;
    
    // Stop at footer
    if (t.startsWith('—') || t.startsWith('*本資源') || t.startsWith('採購') || 
        t === '信经信条') { hitFooter = true; continue; }
    
    // Check if this is a scripture reference line (footnotes)
    // Scripture refs are lines of ONLY book+chapter:verse references separated by 。；、
    // They contain Chinese book abbreviations followed by numbers
    if (isScriptureRefLine(t)) continue;
    
    cleanLines.push(t);
  }
  
  let answer = cleanLines.join('\n').trim();
  // Remove trailing scripture refs that might be on the last line
  // (sometimes the last paragraph ends with refs on same line)
  
  zhResults.push({ num, question, answer });
}

function isScriptureRefLine(line) {
  // A scripture reference line consists entirely of references like:
  // 罗十一36；林前十31。诗七三25-26。
  // Pattern: Chinese book name + chapter/verse numbers + punctuation
  
  const bookNames = ['创','出','利','民','申','书','士','得','撒上','撒下','王上','王下',
    '代上','代下','拉','尼','斯','伯','诗','箴','传','歌','赛','耶','哀','结','但',
    '何','珥','摩','俄','拿','弥','鸿','哈','番','该','亚','玛','太','可','路','约',
    '徒','罗','林前','林后','加','弗','腓','西','帖前','帖后','提前','提后','多','门',
    '来','雅','彼前','彼后','约壹','约贰','约参','犹','启','请参考'];
  
  // Remove the line content that matches scripture references
  let remaining = line;
  
  // Remove known patterns: bookName + numbers + punctuation
  const refPattern = new RegExp(
    '(?:〔[^〕]+〕|请参考)?\\s*(?:' + bookNames.join('|') + ')' +
    '[\\d一二三四五六七八九十廿卅百○～]+(?:[：:][\\d一二三四五六七八九十廿卅百○、-]+)*' +
    '(?:他的血岂不更能洗净你们的心)?',
    'g'
  );
  
  remaining = remaining.replace(refPattern, '');
  // Remove punctuation and whitespace
  remaining = remaining.replace(/[；。，、\s\-（）\(\)「」\d]/g, '');
  // Remove "标题是" phrases
  remaining = remaining.replace(/标题是安息日的诗歌/g, '');
  
  // If almost nothing remains, it's a scripture ref line
  return remaining.length <= 3 && line.length > 3;
}

console.log(`ZH: ${zhResults.length} questions`);

// Check missing
for (let i = 1; i <= 196; i++) {
  if (!enResults.find(r => r.num === i)) console.log(`Missing EN Q${i}`);
  if (!zhResults.find(r => r.num === i)) console.log(`Missing ZH Q${i}`);
}

// ===== UPDATE JSON =====
const jsonPath = '/Users/suyan/clawd/projects/gospel-app/web/src/data/catechism_wlc.json';
const data = JSON.parse(readFileSync(jsonPath, 'utf-8'));

const enMap = new Map(enResults.map(r => [r.num, r]));
const zhMap = new Map(zhResults.map(r => [r.num, r]));

let count = 0;
for (const item of data) {
  const num = item.number;
  const en = enMap.get(num);
  const zh = zhMap.get(num);
  
  if (en) {
    item.question_en = `Q. ${num}. ${en.question}`;
    item.answer_en = `A. ${en.answer}`;
  }
  if (zh) {
    item.question_zh = `问${num}：${zh.question}`;
    item.answer_zh = `答：${zh.answer}`;
    count++;
  }
}

console.log(`Updated ${count} items`);
writeFileSync(jsonPath, JSON.stringify(data, null, 2) + '\n');
console.log('Written');

// Spot check
for (const n of [1, 50, 100, 150, 196]) {
  const item = data.find(i => i.number === n);
  console.log(`\n=== Q${n} ===`);
  console.log(`Q_en: ${item.question_en?.substring(0, 100)}`);
  console.log(`A_en: ${item.answer_en?.substring(0, 100)}`);
  console.log(`Q_zh: ${item.question_zh?.substring(0, 100)}`);
  console.log(`A_zh: ${item.answer_zh?.substring(0, 100)}`);
}
