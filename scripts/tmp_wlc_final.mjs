import { readFileSync, writeFileSync, copyFileSync } from 'fs';

// Step 1: Parse English text
const enText = readFileSync('tmp_en_raw.txt', 'utf8');
const enQuestions = {};
const enParts = enText.split(/(?=Q\. \d+\.)/);
for (const part of enParts) {
  const qm = part.match(/^Q\. (\d+)\.\s+(.+?)(?:\n|$)/);
  if (!qm) continue;
  const num = parseInt(qm[1]);
  const q = qm[2].trim();
  const am = part.match(/\nA\.\s+([\s\S]*)/);
  if (!am) continue;
  const a = am[1].trim();
  enQuestions[num] = { q: `Q. ${num}. ${q}`, a: `A. ${a}` };
}
console.log('English questions parsed:', Object.keys(enQuestions).length);

// Step 2: Parse Chinese JSON (inline from browser results)
const zhBatch1 = JSON.parse(readFileSync('tmp_zh_batch1_inline.json', 'utf8'));
const zhBatch2 = JSON.parse(readFileSync('tmp_zh_batch2_inline.json', 'utf8'));
const zhBatch3 = JSON.parse(readFileSync('tmp_zh_batch3_inline.json', 'utf8'));
const zhBatch4 = JSON.parse(readFileSync('tmp_zh_batch4_inline.json', 'utf8'));
const zhAll = [...zhBatch1, ...zhBatch2, ...zhBatch3, ...zhBatch4];
console.log('Chinese questions parsed:', zhAll.length);

// Build ZH lookup
const zhQuestions = {};
for (const item of zhAll) {
  // Clean scripture references from answers
  let answer = item.a;
  // Remove lines that are purely scripture references
  const lines = answer.split('\n');
  const cleanLines = [];
  const bookNames = '创|出|利|民|申|书|士|得|撒上|撒下|王上|王下|代上|代下|拉|尼|斯|伯|诗|箴|传|歌|赛|耶|哀|结|但|何|珥|摩|俄|拿|弥|鸿|哈|番|该|亚|玛|太|可|路|约|徒|罗|林前|林后|加|弗|腓|西|帖前|帖后|提前|提后|多|门|来|雅|彼前|彼后|约壹|约贰|约参|犹|启|请参考';
  const refLineRe = new RegExp(`^\\s*(?:〔[^〕]+〕\\s*)?(?:${bookNames})[\\d一二三四五六七八九十廿卅百○～]+`);
  
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    // Check if line starts with scripture reference
    if (refLineRe.test(trimmed)) {
      // Check if line has substantial non-reference content
      let cleaned = trimmed;
      // Remove all scripture references
      const refPattern = new RegExp(`(?:〔[^〕]+〕|请参考\\s*)?(?:${bookNames})[\\d一二三四五六七八九十廿卅百○～]+(?:[：:][\\d一二三四五六七八九十廿卅百○、\\-]+)*(?:他的血岂不更能洗净你们的心)?`, 'g');
      cleaned = cleaned.replace(refPattern, '');
      cleaned = cleaned.replace(/[；。，、\s\-（）()\d「」]/g, '');
      cleaned = cleaned.replace(/标题是安息日的诗歌/g, '');
      if (cleaned.length <= 5) continue; // Pure reference line
    }
    cleanLines.push(trimmed);
  }
  
  const cleanAnswer = cleanLines.join('\n');
  zhQuestions[item.num] = { 
    q: `问${item.num}：${item.q}`, 
    a: `答：${cleanAnswer}` 
  };
}

// Step 3: Backup and update JSON
const srcPath = '/Users/suyan/clawd/projects/gospel-app/web/src/data/catechism_wlc.json';
const bakPath = srcPath + '.bak_standard_v3';
copyFileSync(srcPath, bakPath);
console.log('Backup created:', bakPath);

const data = JSON.parse(readFileSync(srcPath, 'utf8'));
let updated = 0;
let missing_en = [];
let missing_zh = [];

for (const item of data) {
  const num = item.id;
  if (enQuestions[num]) {
    item.question = enQuestions[num].q;
    item.answer = enQuestions[num].a;
  } else {
    missing_en.push(num);
  }
  if (zhQuestions[num]) {
    item.question_zh = zhQuestions[num].q;
    item.answer_zh = zhQuestions[num].a;
  } else {
    missing_zh.push(num);
  }
  updated++;
}

console.log('Updated:', updated, 'items');
if (missing_en.length) console.log('Missing EN:', missing_en);
if (missing_zh.length) console.log('Missing ZH:', missing_zh);

writeFileSync(srcPath, JSON.stringify(data, null, 2));
console.log('Written to:', srcPath);

// Verify
const verify = JSON.parse(readFileSync(srcPath, 'utf8'));
console.log('\n=== Verification ===');
for (const num of [1, 50, 100, 150, 196]) {
  const item = verify.find(i => i.id === num);
  if (item) {
    console.log(`\nQ${num} EN: ${item.question.substring(0, 80)}...`);
    console.log(`Q${num} ZH: ${item.question_zh.substring(0, 80)}...`);
    console.log(`A${num} EN: ${item.answer.substring(0, 80)}...`);
    console.log(`A${num} ZH: ${item.answer_zh.substring(0, 80)}...`);
  }
}
