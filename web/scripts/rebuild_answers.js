#!/usr/bin/env node
/**
 * Rebuild all answer_zh from Ligonier source data
 * Remove trailing superscript numbers but keep them inline
 */

const fs = require('fs');
const path = require('path');

const wlcPath = path.join(__dirname, '../src/data/catechism_wlc.json');
const ligPath = path.join(__dirname, '../src/data/ligonier_wlc_zh_full.json');

const wlc = JSON.parse(fs.readFileSync(wlcPath, 'utf-8'));
const lig = JSON.parse(fs.readFileSync(ligPath, 'utf-8'));

// Build lookup
const ligMap = {};
lig.forEach(l => { ligMap[l.num] = l.a; });

let updated = 0;

wlc.forEach(item => {
  if (ligMap[item.number]) {
    const newAnswer = '答：' + ligMap[item.number];
    if (item.answer_zh !== newAnswer) {
      console.log(`Q${item.number}:`);
      console.log(`  OLD: ${item.answer_zh.slice(0, 60)}...`);
      console.log(`  NEW: ${newAnswer.slice(0, 60)}...`);
      console.log('');
      item.answer_zh = newAnswer;
      updated++;
    }
  }
});

console.log(`\nUpdated: ${updated} / ${wlc.length}`);

fs.writeFileSync(wlcPath, JSON.stringify(wlc, null, 2));
console.log('Saved!');
