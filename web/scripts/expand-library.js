#!/usr/bin/env node
// Script to expand books.json and add book_id links to resources

const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'src', 'data');
const books = JSON.parse(fs.readFileSync(path.join(dataDir, 'books.json'), 'utf8'));
const apol = JSON.parse(fs.readFileSync(path.join(dataDir, 'apologetics.json'), 'utf8'));
const qa = JSON.parse(fs.readFileSync(path.join(dataDir, 'qa_questions.json'), 'utf8'));

// Parse a resource string into { author_zh, author_en, title_zh, title_en, originalText }
function parseResource(text) {
  // Skip non-book resources
  if (text.includes('.org') || text.includes('.com') || text.includes('资源') || text.includes('研究所') || 
      text.includes('信经') || text.includes('信条') || text.includes('教理问答') || text.includes('宣言') ||
      text.includes('音频') || text.includes('异端辨别') || text.includes('한국')) {
    return null;
  }
  
  // Remove chapter references
  let clean = text
    .replace(/第\d+[-–]\d+章/g, '')
    .replace(/第\d+章/g, '')
    .replace(/卷[一二三四]第\d+[-–]?\d*章?/g, '')
    .replace(/卷[一二三四]/g, '')
    .replace(/前言/g, '')
    .replace(/\s*Ch\.\s*\d+[-–]?\d*/gi, '')
    .replace(/\s*Book\s+\d+,?\s*/gi, '')
    .replace(/\s*III\.\d+/g, '')
    .replace(/\s*I\.\d+/g, '')
    .replace(/\s*,\s*$/, '')
    .replace(/\s+/g, ' ')
    .trim();

  // Try to parse: "中文作者，《中文书名》；English Author, *English Title*"
  let author_zh = '', title_zh = '', author_en = '', title_en = '';
  
  // Extract Chinese title
  const zhTitleMatch = clean.match(/《([^》]+)》/);
  if (zhTitleMatch) title_zh = zhTitleMatch[1].trim();
  
  // Extract English title
  const enTitleMatch = clean.match(/\*([^*]+)\*/);
  if (enTitleMatch) title_en = enTitleMatch[1].trim();
  
  // Extract Chinese author (before 《 or ，)
  const zhAuthorMatch = clean.match(/^([^，《；]+)[，,]/);
  if (zhAuthorMatch) author_zh = zhAuthorMatch[1].trim();
  
  // Extract English author
  const enPart = clean.split('；')[1] || clean.split(';')[1] || '';
  const enAuthorMatch = enPart.match(/^\s*([^,*]+),/);
  if (enAuthorMatch) author_en = enAuthorMatch[1].trim();
  
  // Also try patterns like "F.F. Bruce, 《...》；F.F. Bruce, *...*"
  if (!author_zh && !author_en) {
    const simpleMatch = clean.match(/^([^，,]+)[，,]\s*《/);
    if (simpleMatch) author_zh = simpleMatch[1].trim();
  }
  
  if (!title_en && !title_zh) return null;
  
  return { author_zh, author_en, title_zh, title_en };
}

// Normalize title for matching
function normTitle(t) {
  return t.toLowerCase()
    .replace(/[^a-z0-9\u4e00-\u9fff]/g, '')
    .trim();
}

// Build existing book index
const existingByEnTitle = {};
const existingByZhTitle = {};
books.forEach(b => {
  if (b.title_en) existingByEnTitle[normTitle(b.title_en)] = b.id;
  if (b.title_zh) existingByZhTitle[normTitle(b.title_zh)] = b.id;
});

// Collect all resources
const allResources = [];
apol.forEach(a => a.recommended_resources.forEach(r => allResources.push(r)));
qa.forEach(q => q.related_readings.forEach(r => allResources.push(r)));

// Parse and deduplicate
const bookMap = new Map(); // normKey -> parsed info
const resourceToBookKey = new Map(); // originalText -> normKey

allResources.forEach(text => {
  const parsed = parseResource(text);
  if (!parsed) {
    resourceToBookKey.set(text, null);
    return;
  }
  
  const key = normTitle(parsed.title_en || parsed.title_zh);
  if (!key) {
    resourceToBookKey.set(text, null);
    return;
  }
  
  resourceToBookKey.set(text, key);
  
  if (!bookMap.has(key)) {
    bookMap.set(key, parsed);
  } else {
    // Merge: fill in missing fields
    const existing = bookMap.get(key);
    if (!existing.author_zh && parsed.author_zh) existing.author_zh = parsed.author_zh;
    if (!existing.author_en && parsed.author_en) existing.author_en = parsed.author_en;
    if (!existing.title_zh && parsed.title_zh) existing.title_zh = parsed.title_zh;
    if (!existing.title_en && parsed.title_en) existing.title_en = parsed.title_en;
  }
});

// Match to existing books or create new ones
const keyToBookId = new Map();
let nextId = 12;

// First, map existing books
bookMap.forEach((info, key) => {
  const existingId = existingByEnTitle[key] || existingByZhTitle[key];
  if (existingId) {
    keyToBookId.set(key, existingId);
  }
});

// Also check partial matches for existing books
bookMap.forEach((info, key) => {
  if (keyToBookId.has(key)) return;
  
  // Try matching by normalized English title substring
  for (const [ek, eid] of Object.entries(existingByEnTitle)) {
    if (key.includes(ek) || ek.includes(key)) {
      keyToBookId.set(key, eid);
      return;
    }
  }
  for (const [zk, zid] of Object.entries(existingByZhTitle)) {
    if (key.includes(zk) || zk.includes(key)) {
      keyToBookId.set(key, zid);
      return;
    }
  }
});

// Generate summaries and metadata for new books
function generateBookMeta(info) {
  const { author_en, title_en, title_zh } = info;
  const a = (author_en || '').toLowerCase();
  const t = (title_en || title_zh || '').toLowerCase();
  
  let tags = [];
  let recommend_for = [];
  let summary_zh = '';
  let summary_en = '';
  
  // Categorize based on content
  if (t.includes('apologet') || t.includes('defending') || t.includes('on guard') || t.includes('reasonable faith')) {
    tags.push('护教'); recommend_for.push('慕道友', '初信者');
    summary_zh = `${info.author_zh || info.author_en}的护教学著作，为基督教信仰提供理性辩护。`;
    summary_en = `An apologetics work by ${info.author_en || info.author_zh} providing rational defense of the Christian faith.`;
  } else if (t.includes('trinity') || t.includes('三位一体')) {
    tags.push('三位一体', '神学'); recommend_for.push('进深者', '学者');
    summary_zh = `关于三位一体教义的深入探讨。`;
    summary_en = `An in-depth exploration of the doctrine of the Trinity.`;
  } else if (t.includes('resurrection') || t.includes('复活')) {
    tags.push('复活', '护教'); recommend_for.push('慕道友', '进深者');
    summary_zh = `关于耶稣复活的历史证据和神学意义的著作。`;
    summary_en = `A work on the historical evidence and theological significance of Jesus's resurrection.`;
  } else if (t.includes('islam') || t.includes('quran') || t.includes('allah') || t.includes('muslim')) {
    tags.push('伊斯兰', '比较宗教'); recommend_for.push('进深者', '牧者');
    summary_zh = `关于基督教与伊斯兰教对话的著作。`;
    summary_en = `A work on Christian-Islamic dialogue and engagement.`;
  } else if (t.includes('cult') || t.includes('异端') || t.includes('mormon') || t.includes('jehovah')) {
    tags.push('异端辨别'); recommend_for.push('牧者', '进深者');
    summary_zh = `关于识别和回应异端的著作。`;
    summary_en = `A work on identifying and responding to cults and heresies.`;
  } else if (t.includes('science') || t.includes('evolution') || t.includes('darwin') || t.includes('cell') || t.includes('cosmos')) {
    tags.push('科学与信仰'); recommend_for.push('慕道友', '学者');
    summary_zh = `探讨科学与基督教信仰关系的著作。`;
    summary_en = `A work exploring the relationship between science and Christian faith.`;
  } else if (t.includes('suffering') || t.includes('pain') || t.includes('evil') || t.includes('苦难') || t.includes('痛苦')) {
    tags.push('苦难', '护教'); recommend_for.push('慕道友', '初信者');
    summary_zh = `关于苦难问题与基督教信仰回应的著作。`;
    summary_en = `A work addressing the problem of suffering from a Christian perspective.`;
  } else if (t.includes('systematic theology') || t.includes('系统神学')) {
    tags.push('系统神学'); recommend_for.push('进深者', '学者');
    summary_zh = `系统神学的全面阐述。`;
    summary_en = `A comprehensive treatment of systematic theology.`;
  } else if (t.includes('gospel') || t.includes('cross') || t.includes('十字架') || t.includes('福音') || t.includes('justif') || t.includes('faith alone')) {
    tags.push('福音', '救恩'); recommend_for.push('初信者', '进深者');
    summary_zh = `关于福音和救恩教义的著作。`;
    summary_en = `A work on the gospel and the doctrine of salvation.`;
  } else if (t.includes('church') || t.includes('教会')) {
    tags.push('教会'); recommend_for.push('初信者', '牧者');
    summary_zh = `关于教会生活和教会论的著作。`;
    summary_en = `A work on church life and ecclesiology.`;
  } else if (t.includes('holy spirit') || t.includes('圣灵') || t.includes('spirit')) {
    tags.push('圣灵', '神学'); recommend_for.push('初信者', '进深者');
    summary_zh = `关于圣灵工作和教义的著作。`;
    summary_en = `A work on the person and work of the Holy Spirit.`;
  } else if (t.includes('holiness') || t.includes('sanctif') || t.includes('sin') || t.includes('圣洁')) {
    tags.push('圣洁', '成圣'); recommend_for.push('初信者', '进深者');
    summary_zh = `关于圣洁生活和成圣的著作。`;
    summary_en = `A work on holiness and sanctification.`;
  } else if (t.includes('predest') || t.includes('chosen') || t.includes('election') || t.includes('calvinism') || t.includes('reformed')) {
    tags.push('改革宗', '预定论'); recommend_for.push('进深者', '学者');
    summary_zh = `关于改革宗神学和预定论的著作。`;
    summary_en = `A work on Reformed theology and predestination.`;
  } else if (t.includes('scripture') || t.includes('bible') || t.includes('canon') || t.includes('inerran') || t.includes('圣经') || t.includes('manuscript')) {
    tags.push('圣经', '圣经可靠性'); recommend_for.push('初信者', '进深者');
    summary_zh = `关于圣经的权威性和可靠性的著作。`;
    summary_en = `A work on the authority and reliability of Scripture.`;
  } else if (t.includes('prayer') || t.includes('祷告')) {
    tags.push('祷告', '灵修'); recommend_for.push('初信者', '进深者');
    summary_zh = `关于祷告生活的著作。`;
    summary_en = `A work on the practice of prayer.`;
  } else if (t.includes('heaven') || t.includes('hope') || t.includes('eschatol') || t.includes('天堂') || t.includes('盼望')) {
    tags.push('末世论', '盼望'); recommend_for.push('初信者', '进深者');
    summary_zh = `关于基督徒终极盼望和末世论的著作。`;
    summary_en = `A work on Christian hope and eschatology.`;
  } else if (t.includes('christ') || t.includes('incarnat') || t.includes('基督') || t.includes('person of')) {
    tags.push('基督论'); recommend_for.push('进深者', '学者');
    summary_zh = `关于基督的位格和工作的著作。`;
    summary_en = `A work on the person and work of Christ.`;
  } else if (t.includes('consciousness') || t.includes('mind') || t.includes('soul') || t.includes('灵魂')) {
    tags.push('哲学', '护教'); recommend_for.push('学者');
    summary_zh = `探讨心灵、意识与基督教世界观的著作。`;
    summary_en = `A work exploring mind, consciousness, and the Christian worldview.`;
  } else if (t.includes('moral') || t.includes('justice') || t.includes('ethic') || t.includes('公义')) {
    tags.push('伦理', '社会公义'); recommend_for.push('进深者');
    summary_zh = `关于基督教伦理和社会公义的著作。`;
    summary_en = `A work on Christian ethics and social justice.`;
  } else if (t.includes('pluralism') || t.includes('religions') || t.includes('多元')) {
    tags.push('比较宗教', '护教'); recommend_for.push('进深者');
    summary_zh = `关于宗教多元主义和基督教独特性的著作。`;
    summary_en = `A work on religious pluralism and the uniqueness of Christianity.`;
  } else {
    tags.push('神学'); recommend_for.push('进深者');
    summary_zh = `${info.author_zh || info.author_en}的著作。`;
    summary_en = `A work by ${info.author_en || info.author_zh}.`;
  }
  
  return { tags, recommend_for: [...new Set(recommend_for)], summary_zh, summary_en };
}

// Create new book entries
const newBooks = [];
bookMap.forEach((info, key) => {
  if (keyToBookId.has(key)) return; // Already exists
  
  const id = `book-${String(nextId).padStart(3, '0')}`;
  nextId++;
  keyToBookId.set(key, id);
  
  const meta = generateBookMeta(info);
  
  newBooks.push({
    id,
    author_zh: info.author_zh || info.author_en || '',
    author_en: info.author_en || info.author_zh || '',
    title_zh: info.title_zh || info.title_en || '',
    title_en: info.title_en || info.title_zh || '',
    summary_zh: meta.summary_zh,
    summary_en: meta.summary_en,
    chapters: [],
    recommend_for: meta.recommend_for,
    tags: meta.tags,
    epub_filename: null,
    summary_epub_filename: null,
    full_epub_filename: null
  });
});

// Write expanded books.json
const allBooks = [...books, ...newBooks];
fs.writeFileSync(path.join(dataDir, 'books.json'), JSON.stringify(allBooks, null, 2) + '\n', 'utf8');
console.log(`Books: ${books.length} existing + ${newBooks.length} new = ${allBooks.length} total`);

// Build resource text -> book_id mapping
function getBookIdForResource(text) {
  const key = resourceToBookKey.get(text);
  if (!key) return null;
  return keyToBookId.get(key) || null;
}

// Update apologetics.json - change recommended_resources to objects
apol.forEach(a => {
  a.recommended_resources = a.recommended_resources.map(r => {
    const bookId = getBookIdForResource(r);
    return { text: r, book_id: bookId };
  });
});
fs.writeFileSync(path.join(dataDir, 'apologetics.json'), JSON.stringify(apol, null, 2) + '\n', 'utf8');
console.log('Updated apologetics.json');

// Update qa_questions.json - change related_readings to objects
qa.forEach(q => {
  q.related_readings = q.related_readings.map(r => {
    const bookId = getBookIdForResource(r);
    return { text: r, book_id: bookId };
  });
});
fs.writeFileSync(path.join(dataDir, 'qa_questions.json'), JSON.stringify(qa, null, 2) + '\n', 'utf8');
console.log('Updated qa_questions.json');

// Print stats
let linked = 0, unlinked = 0;
allResources.forEach(r => {
  if (getBookIdForResource(r)) linked++;
  else unlinked++;
});
console.log(`Resources: ${linked} linked, ${unlinked} not linked (non-books/websites/confessions)`);
