#!/usr/bin/env node
// Step 1: Extract all unique books from apologetics + qa, compare with existing 11

const fs = require('fs');
const path = require('path');
const dataDir = path.join(__dirname, '..', 'src', 'data');

const books = JSON.parse(fs.readFileSync(path.join(dataDir, 'books.json'), 'utf8'));
const apol = JSON.parse(fs.readFileSync(path.join(dataDir, 'apologetics.json'), 'utf8'));
const qa = JSON.parse(fs.readFileSync(path.join(dataDir, 'qa_questions.json'), 'utf8'));

function isNonBook(text) {
  return /\.org|\.com|Answering-Islam/.test(text);
}

// Strip chapter references
function stripCh(title) {
  return title
    .replace(/\s*Ch\.\s*\d+[-–]?\d*/gi, '')
    .replace(/\s*Book\s+\d+,?\s*/gi, '')
    .replace(/\s*\(.*?\)\s*$/, '') // trailing (Author)
    .replace(/\s*,\s*$/, '')
    .trim();
}

// Parse apologetics format: "Author, 'Title'" or "Author, 'Title Ch.X'"
function parseApol(text) {
  const m = text.match(/^(.+?),\s*'(.+?)'\s*$/);
  if (!m) return null;
  return { author: m[1].trim(), title: stripCh(m[2].trim()) };
}

// Parse QA format: "Title Ch.X (Author)" or "Title (Author)"
function parseQA(text) {
  // Try with parenthesized author
  const m = text.match(/^(.+?)\s*\(([^)]+)\)\s*$/);
  if (m) return { title: stripCh(m[1].trim()), author: m[2].trim() };
  // Fallback: just a title
  return { title: stripCh(text), author: '' };
}

// Normalize for dedup
function normKey(title) {
  return title.toLowerCase().replace(/[^a-z0-9]/g, '');
}

// Existing books index
const existingKeys = new Map();
books.forEach(b => {
  existingKeys.set(normKey(b.title_en), { id: b.id, title_en: b.title_en, title_zh: b.title_zh, author_en: b.author_en });
});

// Collect all
const bookMap = new Map(); // normKey -> { author, title, sourceCount, sampleSources[] }
const skipped = [];

function addBook(author, title, sourceText) {
  const key = normKey(title);
  if (!key) return;
  if (!bookMap.has(key)) {
    bookMap.set(key, { author, title, sourceCount: 1, sampleSources: [sourceText] });
  } else {
    const e = bookMap.get(key);
    e.sourceCount++;
    if (e.sampleSources.length < 3) e.sampleSources.push(sourceText);
    if (!e.author && author) e.author = author;
  }
}

// Process apologetics
apol.forEach(a => a.recommended_resources.forEach(text => {
  if (isNonBook(text)) { skipped.push(text); return; }
  const p = parseApol(text);
  if (!p) { skipped.push(text); return; }
  addBook(p.author, p.title, text);
}));

// Process QA
qa.forEach(q => q.related_readings.forEach(text => {
  if (isNonBook(text)) { skipped.push(text); return; }
  const p = parseQA(text);
  if (!p) { skipped.push(text); return; }
  addBook(p.author, p.title, text);
}));

// Match against existing
const matchedExisting = [];
const newBooks = [];

bookMap.forEach((info, key) => {
  let matched = existingKeys.get(key);
  if (!matched) {
    for (const [ek, ev] of existingKeys.entries()) {
      if (key.includes(ek) || ek.includes(key)) { matched = ev; break; }
    }
  }
  if (matched) {
    matchedExisting.push({ ...info, existingId: matched.id, existingTitle: matched.title_en });
  } else {
    newBooks.push(info);
  }
});

newBooks.sort((a, b) => a.title.localeCompare(b.title));

// Output
const output = [];
output.push(`=== STEP 1: 书库扩充分析 ===`);
output.push(``);
output.push(`护教学推荐资源条数: ${apol.reduce((n, a) => n + a.recommended_resources.length, 0)}`);
output.push(`福音问答推荐阅读条数: ${qa.reduce((n, q) => n + q.related_readings.length, 0)}`);
output.push(`去重后唯一书名: ${bookMap.size}`);
output.push(`匹配到现有11本书: ${matchedExisting.length}`);
output.push(`需要新增的书: ${newBooks.length}`);
output.push(`跳过的非书籍: ${skipped.length}`);
output.push('');

output.push('=== 匹配到现有书库的 ===');
matchedExisting.forEach(m => {
  output.push(`  ✓ ${m.existingId} "${m.existingTitle}" ← 引用${m.sourceCount}次`);
});
output.push('');

output.push('=== 跳过的非书籍条目 ===');
skipped.forEach(s => output.push(`  ✗ ${s}`));
output.push('');

output.push(`=== 需要新增的书（共${newBooks.length}本）===`);
newBooks.forEach((b, i) => {
  const id = `book-${String(i + 12).padStart(3, '0')}`;
  output.push(`  ${id}: ${b.author}, "${b.title}" [引用${b.sourceCount}次]`);
  // show sample source for debugging
  output.push(`         样本: ${b.sampleSources[0]}`);
});

const outText = output.join('\n');
fs.writeFileSync('/tmp/new_books_list.txt', outText, 'utf8');
console.log(outText);
