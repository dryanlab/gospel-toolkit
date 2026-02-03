#!/usr/bin/env node
/**
 * Manually fix specific answers that were missed
 */

const fs = require('fs');
const path = require('path');

const wlcPath = path.join(__dirname, '../src/data/catechism_wlc.json');
const ligPath = path.join(__dirname, '../src/data/ligonier_wlc_zh_full.json');

const wlc = JSON.parse(fs.readFileSync(wlcPath, 'utf-8'));
const lig = JSON.parse(fs.readFileSync(ligPath, 'utf-8'));

// Build Ligonier lookup
const ligMap = {};
lig.forEach(item => { ligMap[item.num] = item; });

// Manually check which still have only refs
const toFix = [];
wlc.forEach(item => {
  const answer = item.answer_zh;
  // If answer starts with "答：" followed by scripture abbreviation
  if (/^答[：:]\s*[提彼弗赛加罗太约徒林创出诗来腓雅结王撒代申耶但西门启书犹何珥摩俄拿弥鸿哈番该亚玛伯斯尼拉哀歌箴传利民士得][一二三四五六七八九十百廿卅\d]/.test(answer)) {
    toFix.push(item.number);
  }
});

console.log('Need to fix:', toFix);

// Fix them
toFix.forEach(num => {
  const idx = wlc.findIndex(w => w.number === num);
  if (idx >= 0 && ligMap[num]) {
    console.log(`\nQ${num}:`);
    console.log(`  OLD: ${wlc[idx].answer_zh.slice(0, 60)}...`);
    wlc[idx].answer_zh = `答：${ligMap[num].a}`;
    console.log(`  NEW: ${wlc[idx].answer_zh.slice(0, 60)}...`);
  }
});

fs.writeFileSync(wlcPath, JSON.stringify(wlc, null, 2), 'utf-8');
console.log('\nSaved!');
