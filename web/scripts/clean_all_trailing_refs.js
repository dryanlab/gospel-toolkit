#!/usr/bin/env node
/**
 * Aggressively clean ALL trailing scripture references from answer_zh
 */

const fs = require('fs');
const path = require('path');

const wlcPath = path.join(__dirname, '../src/data/catechism_wlc.json');
const wlc = JSON.parse(fs.readFileSync(wlcPath, 'utf-8'));

// All book abbreviations
const books = '创|出|利|民|申|书|士|得|撒上|撒下|王上|王下|代上|代下|拉|尼|斯|伯|诗|箴|传|歌|赛|耶|哀|结|但|何|珥|摩|俄|拿|弥|鸿|哈|番|该|亚|玛|太|可|路|约|徒|罗|林前|林后|加|弗|腓|西|帖前|帖后|提前|提后|多|门|来|雅|彼前|彼后|约壹|约贰|约叁|犹|启|來|請參考|请参考';

// Chapter:verse pattern (Chinese/Arabic numerals with ranges)
const cv = '[一二三四五六七八九十百廿卅\\d]+(?:[：:][一二三四五六七八九十百廿卅\\d]+)?(?:[－\\-–—、至][一二三四五六七八九十百廿卅\\d]+)*';

// Single reference pattern
const singleRef = `(?:${books})${cv}`;

// Multiple refs separated by delimiters, at end of string
const trailingPattern = new RegExp(
  `\\s*((?:${singleRef})(?:[；;，,、。\\s]+(?:${singleRef}))*[。]?)\\s*$`
);

let changed = 0;

wlc.forEach((item, idx) => {
  let answer = item.answer_zh;
  if (!answer) return;
  
  let prevAnswer;
  let iterations = 0;
  
  // Keep stripping trailing refs until none left
  do {
    prevAnswer = answer;
    answer = answer.replace(trailingPattern, '').trim();
    iterations++;
  } while (answer !== prevAnswer && answer.length > 15 && iterations < 10);
  
  // Only update if changed and result is meaningful
  if (answer !== item.answer_zh && answer.length >= 15 && !answer.endsWith('答：')) {
    console.log(`Q${item.number}:`);
    console.log(`  BEFORE: ...${item.answer_zh.slice(-60)}`);
    console.log(`  AFTER:  ...${answer.slice(-60)}`);
    console.log('');
    item.answer_zh = answer;
    changed++;
  }
});

console.log(`\nTotal changed: ${changed} / ${wlc.length}`);

fs.writeFileSync(wlcPath, JSON.stringify(wlc, null, 2), 'utf-8');
console.log('Saved!');
