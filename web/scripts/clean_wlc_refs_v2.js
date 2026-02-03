#!/usr/bin/env node
/**
 * Clean trailing scripture references from answer_zh field in WLC data
 * More conservative approach: only remove trailing refs that are clearly separable
 */

const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../src/data/catechism_wlc.json');
const backupPath = dataPath + '.before_ref_cleanup';
const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

// Backup first
fs.writeFileSync(backupPath, JSON.stringify(data, null, 2));
console.log(`Backed up to ${backupPath}`);

// Pattern for abbreviated scripture refs
// Format: 书名 + 章:节 (Chinese numerals or Arabic)
// Examples: 罗十一36  诗七三25-26  林前十31  太廿八19
const bookAbbrevs = [
  '创', '出', '利', '民', '申', '书', '士', '得', '撒上', '撒下', '王上', '王下',
  '代上', '代下', '拉', '尼', '斯', '伯', '诗', '箴', '传', '歌', '赛', '耶',
  '哀', '结', '但', '何', '珥', '摩', '俄', '拿', '弥', '鸿', '哈', '番', '该',
  '亚', '玛', '太', '可', '路', '约', '徒', '罗', '林前', '林后', '加', '弗',
  '腓', '西', '帖前', '帖后', '提前', '提后', '多', '门', '来', '雅', '彼前',
  '彼后', '约壹', '约贰', '约叁', '犹', '启', '來', '約壹', '約貳', '約叁'
];

// Match a single ref: book + chapter:verse (with optional verse range)
// Chapter/verse can be Chinese numerals or Arabic numbers
const chVerse = '[一二三四五六七八九十百廿卅\\d]+(?:[:\\-–—、至][一二三四五六七八九十百廿卅\\d]+)*';
const bookPattern = bookAbbrevs.join('|');
const singleRef = `(?:${bookPattern})${chVerse}`;

// Match multiple refs at end: separated by ；;，,、。spaces
// Must end with 。 or be at string end
const trailingRefsPattern = new RegExp(
  `\\s+((?:${singleRef})(?:[；;，,、。\\s]+(?:${singleRef}))*[。]?)\\s*$`
);

let changed = 0;
const changes = [];

data.forEach((item, idx) => {
  const original = item.answer_zh;
  if (!original) return;
  
  // Skip if answer is very short or mainly refs (like Q3, Q36)
  // Check if there's substantial non-ref content first
  const nonRefContent = original.replace(trailingRefsPattern, '').trim();
  if (nonRefContent.length < 15) {
    return; // Answer is mostly refs, keep as-is
  }
  
  const match = original.match(trailingRefsPattern);
  if (match) {
    const cleaned = original.replace(trailingRefsPattern, '').trim();
    
    // Sanity check: cleaned should still be meaningful
    if (cleaned.length >= 15 && !cleaned.endsWith('答：')) {
      changes.push({
        num: item.number,
        before: original.slice(-80),
        after: cleaned.slice(-80),
        removed: match[1]
      });
      item.answer_zh = cleaned;
      changed++;
    }
  }
});

console.log('\n=== Changes Preview ===\n');
changes.forEach(c => {
  console.log(`Q${c.num}:`);
  console.log(`  REMOVED: ${c.removed}`);
  console.log(`  ENDS WITH: ...${c.after.slice(-50)}`);
  console.log('');
});

console.log(`\nTotal to change: ${changed} / ${data.length}`);
console.log('\nWriting changes...');

// Write back
fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), 'utf-8');
console.log('Done! Saved to', dataPath);
