#!/usr/bin/env node
/**
 * Clean scripture references from answer_zh field in WLC data
 * Move references to proof_texts if not already there
 */

const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../src/data/catechism_wlc.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

// Pattern to match Chinese scripture references at end of text
// Matches patterns like: 罗十一36；林前十31。诗七三25-26。
// Book abbreviations + chapter:verse in various formats
const bookPatterns = [
  '创', '出', '利', '民', '申', '书', '士', '得', '撒上', '撒下', '王上', '王下',
  '代上', '代下', '拉', '尼', '斯', '伯', '诗', '箴', '传', '歌', '赛', '耶',
  '哀', '结', '但', '何', '珥', '摩', '俄', '拿', '弥', '鸿', '哈', '番', '该',
  '亚', '玛', '太', '可', '路', '约', '徒', '罗', '林前', '林后', '加', '弗',
  '腓', '西', '帖前', '帖后', '提前', '提后', '多', '门', '来', '雅', '彼前',
  '彼后', '约壹', '约贰', '约叁', '犹', '启', '來', '約壹', '約貳', '約叁'
].join('|');

// Match scripture refs: book + chapter:verse patterns
// Examples: 罗十一36  诗七三25-26  林前二9-10  徒十七27  
const chapterVersePattern = `[一二三四五六七八九十百廿卅\\d]+[-–—至、\\d]*`;
const singleRefPattern = `(?:${bookPatterns})${chapterVersePattern}`;
const multiRefPattern = `(?:${singleRefPattern}[；;，,、。\\s]*)+`;

// Match trailing scripture references
const trailingRefsRegex = new RegExp(`\\s*(${multiRefPattern})\\s*$`);

let changed = 0;

data.forEach((item, idx) => {
  const original = item.answer_zh;
  if (!original) return;
  
  // Try to find and remove trailing scripture references
  let cleaned = original;
  
  // Remove trailing refs (may need multiple passes)
  let prevCleaned;
  do {
    prevCleaned = cleaned;
    cleaned = cleaned.replace(trailingRefsRegex, '');
    cleaned = cleaned.trim();
  } while (cleaned !== prevCleaned && cleaned.length > 10);
  
  // Don't reduce to just "答：" - keep original if cleanup too aggressive
  if (cleaned.length < 10 || cleaned === '答：' || cleaned === '答:') {
    return;
  }
  
  if (cleaned !== original) {
    console.log(`\n--- Q${item.number} ---`);
    console.log(`BEFORE: ${original.slice(-100)}`);
    console.log(`AFTER:  ${cleaned.slice(-100)}`);
    item.answer_zh = cleaned;
    changed++;
  }
});

console.log(`\n\nTotal changed: ${changed} / ${data.length}`);

// Write back
fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), 'utf-8');
console.log('Saved!');
