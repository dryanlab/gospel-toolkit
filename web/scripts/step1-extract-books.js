#!/usr/bin/env node
// Step 1: Extract unique books, deduplicate, classify, compare with existing 11

const fs = require('fs');
const path = require('path');
const dataDir = path.join(__dirname, '..', 'src', 'data');

const books = JSON.parse(fs.readFileSync(path.join(dataDir, 'books.json'), 'utf8'));
const apol = JSON.parse(fs.readFileSync(path.join(dataDir, 'apologetics.json'), 'utf8'));
const qa = JSON.parse(fs.readFileSync(path.join(dataDir, 'qa_questions.json'), 'utf8'));

// ===== SKIP LIST: non-books =====
const skipPatterns = [
  /\.org|\.com/i,
  /Answering-Islam/,
  /Chinese Church Heresy/i,
  /Korea Christian Heresy/i,
  /한국/,
  /Ancestor Practices in Asian/i,
  /Chicago Statement/i,
  /Heidelberg Catechism/i,
  /Westminster Confession/i,
  /Westminster Shorter Catechism/i,
  /Chalcedonian Definition/i,
  /\(audio\)/i,
  /Zondervan Guide/i,
  /5 vol/i,
  /chapters on baptism/i,
];
function shouldSkip(text) {
  return skipPatterns.some(p => p.test(text));
}

// ===== MERGE MAP: normalize titles that are the same book =====
const mergeMap = {
  'graceabounding': 'graceaboundingtothechieofsinners',
  'givenforyou': 'givenforyoureclaimingcalvinsdoctrineofthelordsupper',
  'thenewtestamentdocuments': 'thenewtestamentdocumentsaretheyreliable',
  'thesoul': 'thesoulhowweknowitsreal',
  'showingthespirit': 'showingthespiritathologicalexpositionof1corinthians1214',
  // Chosen by God chapter refs should map to the main book
  'totaldepravity': '__SKIP__', // it's a chapter of Chosen by God
};

// Strip chapter/section references
function stripCh(title) {
  return title
    .replace(/\s*Ch\.\s*\d+[-–]?\d*/gi, '')
    .replace(/\s*Book\s+\d+,?\s*/gi, '')
    .replace(/\s*III\.\d+/gi, '')
    .replace(/\s*I\.\d+/gi, '')
    .replace(/\s*\(.*?\)\s*$/g, '')
    .replace(/\s*,\s*$/, '')
    .trim();
}

function normKey(title) {
  let k = title.toLowerCase().replace(/[^a-z0-9]/g, '');
  return mergeMap[k] || k;
}

// ===== PARSE FORMATS =====
// Apol format: "Author, 'Title'" or "Author, 'Title (subtitle)'"
function parseApol(text) {
  const m = text.match(/^(.+?),\s*'(.+?)'\s*$/);
  if (!m) return null;
  return { author: m[1].trim(), title: stripCh(m[2].trim()) };
}
// QA format: "Title Ch.X (Author)" or "Title (Author)"
function parseQA(text) {
  const m = text.match(/^(.+?)\s*\(([^)]+)\)\s*$/);
  if (m) return { title: stripCh(m[1].trim()), author: m[2].trim() };
  return { title: stripCh(text), author: '' };
}
// Some apol resources use mixed format (Chinese+English with 《》)
function parseMixed(text) {
  const enTitle = (text.match(/\(([^)]+)\)/) || [])[1] || '';
  const zhTitle = (text.match(/《([^》]+)》/) || [])[1] || '';
  const author = (text.match(/^([^，,《]+)[，,]/) || [])[1]?.trim() || '';
  if (enTitle || zhTitle) return { author, title: stripCh(enTitle || zhTitle), zhTitle };
  return null;
}

// ===== CLASSIFY by title/author keywords =====
function classify(title, author) {
  const t = (title || '').toLowerCase();
  const a = (author || '').toLowerCase();

  // Cult discernment
  if (/kingdom of the cults|mormon|jehovah|shincheonji|eastern lightning|four major cults|letters to a mormon|unification church/.test(t))
    return 'cult-discernment';
  if (/cults|new religious movements|heresy/.test(t)) return 'cult-discernment';

  // Comparative Religion / Islam
  if (/quran|qur'an|allah|islam|muslim|seeking allah|lotus and the cross/.test(t)) return 'comparative-religion';
  if (/among other gods|pluralist society|religious diversity|religious pluralism|pluralism/.test(t)) return 'comparative-religion';
  if (/unexpected way.*buddhism/.test(t)) return 'comparative-religion';
  if (/their rock is not like/.test(t)) return 'comparative-religion';

  // Science & Faith
  if (/darwin|evolution|icons of evolution|black box|signature in the cell|god hypothesis|creator and the cosmos/.test(t)) return 'science-faith';
  if (/science and (religion|faith)|god's undertaker|can science explain|not a chance|language of god/.test(t)) return 'science-faith';
  if (/mind and cosmos|conscious mind|emergent self|emperor's new mind|artificial intelligence|2084|age of ai|digital world/.test(t)) return 'science-faith';
  if (/fine-tuning/.test(t)) return 'science-faith';

  // Philosophy
  if (/cosmological argument|sufficient reason|proslogion|anselm|ontological|metaphysics|territories of human reason/.test(t)) return 'philosophy';
  if (/god, freedom, and evil|against materialism|warranted christian belief|where the conflict|dangerous idea|recalcitrant imago/.test(t)) return 'philosophy';
  if (/transcendental argument|presuppositional|van til|covenantal apologetics|defense of the faith|christian theory of knowledge/.test(t)) return 'philosophy';
  if (/truth decay|relativism|universe next door|worldview|escape from reason|he is there/.test(t)) return 'philosophy';
  if (/perceiving god|varieties of religious|evidential force|beauty and being just/.test(t)) return 'philosophy';
  if (/orthodoxy/.test(t) && /chesterton/.test(a)) return 'philosophy';

  // Apologetics (general)
  if (/apologet|reasonable faith|on guard|defending your faith|always ready|tactics|evidence that demands/.test(t)) return 'apologetics';
  if (/case for christ|case for the resurrection|historical jesus|marginal jew|resurrection of the son/.test(t)) return 'apologetics';
  if (/jesus and the eyewitness|jesus and his world|jesus as god|putting jesus in his place/.test(t)) return 'apologetics';
  if (/historical reliability|can we trust the gospels|new testament documents/.test(t)) return 'apologetics';
  if (/atheist delusions|making sense of god|reason for god/.test(t)) return 'apologetics';
  if (/answering (islam|jewish)/.test(t)) return 'apologetics';
  if (/god's philosophers|rise of christianity|dominion|how christianity changed/.test(t)) return 'apologetics';
  if (/paul the convert|road from damascus/.test(t)) return 'apologetics';
  if (/strobel|habermas/.test(a)) return 'apologetics';
  if (/baker encyclopedia of christian apologetics/.test(t)) return 'apologetics';

  // Biblical Studies (canon, manuscripts, hermeneutics, commentaries, prophecy)
  if (/canon|inerrancy|scripture alone|textual criticism|manuscripts|bible difficulties|god's word/.test(t)) return 'biblical-studies';
  if (/new testament documents|how to read the bible|king james|word of god|taking god at his word/.test(t)) return 'biblical-studies';
  if (/book of the acts|revelation \(becnt\)|revelation$/.test(t)) return 'biblical-studies';
  if (/gospel and wisdom|missing gospels|survey of old testament|stones cry out|unearthing the bible/.test(t)) return 'biblical-studies';
  if (/book that made your world/.test(t)) return 'biblical-studies';
  if (/messiah in the old testament|science speaks|encyclopedia of biblical prophecy/.test(t)) return 'biblical-studies';
  if (/blasphemy and exaltation/.test(t)) return 'biblical-studies';

  // Systematic Theology (Trinity, Christology, pneumatology, soteriology, eschatology, anthropology)
  if (/trinity|three-personal|triune|deep things of god|delighting in the trinity/.test(t)) return 'systematic-theology';
  if (/person of christ|incarnat|god the son|knowing christ|son of god$|jesus the son/.test(t)) return 'systematic-theology';
  if (/holy spirit|mystery of the holy spirit|showing the spirit|baptism and fullness|keep in step/.test(t)) return 'systematic-theology';
  if (/miraculous gifts|practicing the power|strange fire|playing with holy fire|spiritual gifts/.test(t)) return 'systematic-theology';
  if (/systematic theology/.test(t)) return 'systematic-theology';
  if (/chosen by god|predest|election|doctrines of grace|five points|potter's freedom|bondage of the will|freedom of the will/.test(t)) return 'systematic-theology';
  if (/justifi|faith alone|whole christ|imputation|redemption accomplished|getting the gospel right/.test(t)) return 'systematic-theology';
  if (/original sin|not the way it's supposed|created in god's image|adam and eve really/.test(t)) return 'systematic-theology';
  if (/atonement|cross of christ|death of death|cur deus homo|basic christianity/.test(t)) return 'systematic-theology';
  if (/heaven$|bible and the future|surprised by hope|amillennialism|more than conquerors|triumph of the lamb/.test(t)) return 'systematic-theology';
  if (/hell on trial|hell under fire|between death/.test(t)) return 'systematic-theology';
  if (/ascension|angels$|angels:/.test(t)) return 'systematic-theology';
  if (/what is (reformed|faith|the church)/.test(t)) return 'systematic-theology';
  if (/creedal imperative|why we're protestant/.test(t)) return 'systematic-theology';
  if (/soul|body, soul|consciousness/.test(t)) return 'systematic-theology';
  if (/prodigal god|what is the gospel|saving faith/.test(t)) return 'systematic-theology';
  if (/holiness of god|screwtape|mere christianity|problem of pain|miracles$|great divorce|abolition of man/.test(t)) return 'systematic-theology';
  if (/religion and creation/.test(t)) return 'systematic-theology';
  if (/unpardonable sin/.test(t)) return 'systematic-theology';
  if (/knowing god/.test(t)) return 'systematic-theology';
  if (/difficult doctrine of the love/.test(t)) return 'systematic-theology';

  // Christian Living (prayer, sanctification, discipleship, church life, spiritual warfare)
  if (/prayer|call to spiritual reformation/.test(t)) return 'christian-living';
  if (/sanctification|mortification|hole in our holiness|overcoming the world|discipline of grace|transforming grace|grace unknown/.test(t)) return 'christian-living';
  if (/life together|trellis and the vine|compelling community|nine marks|church discipline|why we love the church/.test(t)) return 'christian-living';
  if (/spiritual warfare|christian in complete armour|god's devil|satan/.test(t)) return 'christian-living';
  if (/when god doesn't make sense|trusting god|walking with god through pain|how long, o lord|suffering and the sovereignty/.test(t)) return 'christian-living';
  if (/desiring god|don't waste|pleasures of god|freedom of self|counterfeit gods|we become what we worship/.test(t)) return 'christian-living';
  if (/foxe's book of martyrs|insanity of god|cost of discipleship/.test(t)) return 'christian-living';
  if (/grace abounding|repentance|saved without a doubt/.test(t)) return 'christian-living';
  if (/lord's supper|given for you|christian baptism|christian sacraments/.test(t)) return 'christian-living';
  if (/art of dying/.test(t)) return 'christian-living';
  if (/call$/.test(t) && /guinness/.test(a)) return 'christian-living';
  if (/what's so amazing about grace/.test(t)) return 'christian-living';
  if (/every good endeavor|business for the glory/.test(t)) return 'christian-living';
  if (/evangelism and the sovereignty|evangelism in the early|reaching the chinese/.test(t)) return 'christian-living';

  // Ethics & Culture
  if (/justice|generous|moral monster|genocide|poverty|transgender|embodied|when harry became sally/.test(t)) return 'ethics-culture';
  if (/glory of the lord|spirit and beauty|history of beauty/.test(t)) return 'ethics-culture';
  if (/christianity and classical culture|myth of religious violence|god's battalions/.test(t)) return 'ethics-culture';
  if (/spirit of democratic capitalism|dignity of man/.test(t)) return 'ethics-culture';
  if (/consequences of ideas|who's afraid of postmodernism|gagging of god/.test(t)) return 'ethics-culture';
  if (/god i don't understand/.test(t)) return 'ethics-culture';
  if (/pensees/.test(t)) return 'philosophy';

  // Church History
  if (/evangelicalism divided|god is a warrior|marrow of theology/.test(t)) return 'church-history';
  if (/simply jesus|paul: a biography/.test(t)) return 'biblical-studies';
  if (/assurance of salvation/.test(t)) return 'systematic-theology';

  return 'other';
}

// ===== CATEGORY LABELS =====
const categoryLabels = {
  'apologetics': { zh: '护教学', en: 'Apologetics', icon: '🛡️' },
  'systematic-theology': { zh: '系统神学', en: 'Systematic Theology', icon: '📐' },
  'biblical-studies': { zh: '圣经研究', en: 'Biblical Studies', icon: '📖' },
  'christian-living': { zh: '基督徒生活', en: 'Christian Living', icon: '🌱' },
  'philosophy': { zh: '哲学', en: 'Philosophy', icon: '🧠' },
  'science-faith': { zh: '科学与信仰', en: 'Science & Faith', icon: '🔬' },
  'comparative-religion': { zh: '比较宗教', en: 'Comparative Religion', icon: '🌍' },
  'cult-discernment': { zh: '异端辨别', en: 'Cult Discernment', icon: '⚠️' },
  'ethics-culture': { zh: '伦理与文化', en: 'Ethics & Culture', icon: '⚖️' },
  'church-history': { zh: '教会历史', en: 'Church History', icon: '🏛️' },
  'other': { zh: '其他', en: 'Other', icon: '📚' },
};

// ===== EXISTING BOOKS INDEX =====
const existingKeys = new Map();
books.forEach(b => {
  existingKeys.set(normKey(b.title_en), { id: b.id, title_en: b.title_en, title_zh: b.title_zh });
});

// ===== COLLECT & DEDUP =====
const bookMap = new Map();
const skipped = [];

function addBook(author, title, sourceText) {
  const key = normKey(title);
  if (!key || key === '__SKIP__') return;
  if (!bookMap.has(key)) {
    bookMap.set(key, { author, title, sourceCount: 1, samples: [sourceText] });
  } else {
    const e = bookMap.get(key);
    e.sourceCount++;
    if (e.samples.length < 3) e.samples.push(sourceText);
    if (!e.author && author) e.author = author;
    // prefer longer title
    if (title.length > e.title.length) e.title = title;
  }
}

apol.forEach(a => a.recommended_resources.forEach(text => {
  if (shouldSkip(text)) { skipped.push(text); return; }
  // Try standard apol format first
  let p = parseApol(text);
  if (!p) p = parseMixed(text);
  if (!p) { skipped.push(text); return; }
  addBook(p.author, p.title, text);
}));

qa.forEach(q => q.related_readings.forEach(text => {
  if (shouldSkip(text)) { skipped.push(text); return; }
  let p = parseQA(text);
  if (!p) p = parseMixed(text);
  if (!p) { skipped.push(text); return; }
  addBook(p.author, p.title, text);
}));

// ===== MATCH VS EXISTING =====
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
    const cat = classify(info.title, info.author);
    newBooks.push({ ...info, category: cat });
  }
});

newBooks.sort((a, b) => {
  if (a.category !== b.category) return a.category.localeCompare(b.category);
  return a.title.localeCompare(b.title);
});

// ===== OUTPUT =====
const out = [];
out.push(`=== STEP 1: 书库扩充分析（含分类）===`);
out.push(``);
out.push(`护教学推荐资源: ${apol.reduce((n, a) => n + a.recommended_resources.length, 0)} 条`);
out.push(`福音问答推荐阅读: ${qa.reduce((n, q) => n + q.related_readings.length, 0)} 条`);
out.push(`去重后唯一书名: ${bookMap.size}`);
out.push(`匹配到现有书库: ${matchedExisting.length} 条引用`);
out.push(`需要新增: ${newBooks.length} 本`);
out.push(`跳过非书籍: ${skipped.length} 条`);
out.push('');

// Category distribution
const catCount = {};
newBooks.forEach(b => { catCount[b.category] = (catCount[b.category] || 0) + 1; });
out.push('=== 分类分布 ===');
Object.entries(catCount).sort((a, b) => b[1] - a[1]).forEach(([cat, count]) => {
  const label = categoryLabels[cat];
  out.push(`  ${label.icon} ${label.zh} (${label.en}): ${count}本`);
});
out.push('');

out.push('=== 匹配到现有书库 ===');
matchedExisting.forEach(m => {
  out.push(`  ✓ ${m.existingId} "${m.existingTitle}" ← 引用${m.sourceCount}次`);
});
out.push('');

out.push('=== 跳过的非书籍 ===');
skipped.forEach(s => out.push(`  ✗ ${s}`));
out.push('');

// By category
let nextId = 12;
out.push(`=== 需要新增的书（共${newBooks.length}本，按分类）===`);
let lastCat = '';
newBooks.forEach((b) => {
  const id = `book-${String(nextId).padStart(3, '0')}`;
  nextId++;
  if (b.category !== lastCat) {
    const label = categoryLabels[b.category];
    out.push('');
    out.push(`--- ${label.icon} ${label.zh} (${label.en}) ---`);
    lastCat = b.category;
  }
  out.push(`  ${id}: ${b.author || '(unknown)'} — "${b.title}" [引用${b.sourceCount}次] [${b.category}]`);
});

const outText = out.join('\n');
fs.writeFileSync('/tmp/new_books_list.txt', outText, 'utf8');
console.log(outText);
