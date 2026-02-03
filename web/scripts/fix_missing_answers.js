#!/usr/bin/env node
/**
 * Fix WLC answers that are only scripture refs by using Ligonier source
 */

const fs = require('fs');
const path = require('path');

const wlcPath = path.join(__dirname, '../src/data/catechism_wlc.json');
const ligPath = path.join(__dirname, '../src/data/ligonier_wlc_zh_full.json');

const wlc = JSON.parse(fs.readFileSync(wlcPath, 'utf-8'));
const lig = JSON.parse(fs.readFileSync(ligPath, 'utf-8'));

// Build Ligonier lookup by number
const ligMap = {};
lig.forEach(item => {
  ligMap[item.num] = item;
});

// Pattern to detect answer that is only scripture refs
// Should start with 答： followed by abbreviated book names and chapter:verse
const bookAbbrevs = [
  '创', '出', '利', '民', '申', '书', '士', '得', '撒上', '撒下', '王上', '王下',
  '代上', '代下', '拉', '尼', '斯', '伯', '诗', '箴', '传', '歌', '赛', '耶',
  '哀', '结', '但', '何', '珥', '摩', '俄', '拿', '弥', '鸿', '哈', '番', '该',
  '亚', '玛', '太', '可', '路', '约', '徒', '罗', '林前', '林后', '加', '弗',
  '腓', '西', '帖前', '帖后', '提前', '提后', '多', '门', '来', '雅', '彼前',
  '彼后', '约壹', '约贰', '约叁', '犹', '启', '來', '約壹', '約貳', '約叁'
];

function isOnlyRefs(answer) {
  // Remove "答：" prefix and check if remaining is only refs
  const content = answer.replace(/^答[：:]?\s*/, '');
  
  // If it's short and starts with a book abbreviation, likely only refs
  const startsWithBook = bookAbbrevs.some(b => content.startsWith(b));
  
  // Check if there's minimal actual text (< 10 Chinese characters that aren't refs)
  // A proper answer should have at least some prose
  const withoutRefs = content.replace(/[提彼弗赛加罗太约徒林创出诗来腓雅结王撒代申耶但西门启书犹何珥摩俄拿弥鸿哈番该亚玛伯斯尼拉哀歌箴传利民士得请参考][一二三四五六七八九十百廿卅\d\-–—,，.。;；、:\s]+/g, '');
  
  // If after removing refs there's very little left, it's only refs
  return startsWithBook && withoutRefs.length < 15;
}

let fixed = 0;
const changes = [];

wlc.forEach((item, idx) => {
  const ligItem = ligMap[item.number];
  if (!ligItem) return;
  
  if (isOnlyRefs(item.answer_zh)) {
    const newAnswer = `答：${ligItem.a}`;
    changes.push({
      num: item.number,
      old: item.answer_zh.slice(0, 60) + '...',
      new: newAnswer.slice(0, 60) + '...'
    });
    item.answer_zh = newAnswer;
    fixed++;
  }
});

console.log('=== Fixes ===\n');
changes.forEach(c => {
  console.log(`Q${c.num}:`);
  console.log(`  OLD: ${c.old}`);
  console.log(`  NEW: ${c.new}`);
  console.log('');
});

console.log(`\nTotal fixed: ${fixed} / ${wlc.length}`);

// Write back
fs.writeFileSync(wlcPath, JSON.stringify(wlc, null, 2), 'utf-8');
console.log('Saved!');
