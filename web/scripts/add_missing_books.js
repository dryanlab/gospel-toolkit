const fs = require('fs');
const path = require('path');

const booksPath = path.join(__dirname, '../src/data/books.json');
const books = JSON.parse(fs.readFileSync(booksPath, 'utf8'));

// Fix book-003 epub filename
const book003 = books.find(b => b.id === 'book-003');
if (book003) {
  book003.epub_filename = 'book-003.epub';
  book003.full_epub_filename = 'book-003.epub';
}

// Fix book-032, 091, 145, 319 epub filenames
['book-032', 'book-091', 'book-145', 'book-319'].forEach(id => {
  const book = books.find(b => b.id === id);
  if (book) {
    book.full_epub_filename = `${id}-full.epub`;
  }
});

// Add missing books 324-328
const newBooks = [
  {
    id: 'book-324',
    author_zh: '奥古斯丁',
    author_en: 'Augustine of Hippo',
    title_zh: '忏悔录',
    title_en: 'Confessions',
    summary_zh: '奥古斯丁最著名的自传体著作，记录他从迷失到归向上帝的心路历程。全书以祷告形式写成，真诚剖析罪性、恩典与信仰，探讨记忆、时间与永恒等哲学议题。这部作品开创了西方自传文学传统，也是认识奥古斯丁神学思想的必读之作。',
    summary_en: "Augustine's most famous autobiographical work, recording his journey from sin to faith. Written as a prayer, it honestly examines sin, grace, and faith, while exploring memory, time, and eternity. A foundational work of Western autobiography and essential for understanding Augustinian theology.",
    category: '古典著作',
    recommend_for: ['初信者', '神学生', '牧师'],
    tags: ['古典著作', '灵修', '自传'],
    epub_filename: null,
    summary_epub_filename: null,
    full_epub_filename: 'book-324-full.epub'
  },
  {
    id: 'book-325',
    author_zh: '奥古斯丁',
    author_en: 'Augustine of Hippo',
    title_zh: '上帝之城（全两卷）',
    title_en: 'The City of God (Complete)',
    summary_zh: '奥古斯丁最宏大的神学著作，写于罗马陷落之后。全书对比上帝之城与地上之城，阐述基督教的历史观、政治观和末世观。这部作品深刻影响了西方政治哲学和神学思想，是理解基督教与世俗社会关系的奠基之作。',
    summary_en: "Augustine's most monumental theological work, written after the fall of Rome. It contrasts the City of God with the earthly city, expounding the Christian view of history, politics, and eschatology.",
    category: '古典著作',
    recommend_for: ['神学生', '牧师', '历史爱好者'],
    tags: ['古典著作', '系统神学', '历史神学'],
    epub_filename: null,
    summary_epub_filename: null,
    full_epub_filename: 'book-325-full.epub',
    full_epub_volumes: [
      {label: '上卷 Volume I', filename: 'book-325-full.epub'},
      {label: '下卷 Volume II', filename: 'book-325-vol2-full.epub'}
    ]
  },
  {
    id: 'book-326',
    author_zh: '约翰·班扬',
    author_en: 'John Bunyan',
    title_zh: '天路历程',
    title_en: "The Pilgrim's Progress",
    summary_zh: '基督教文学史上最伟大的寓言小说，讲述基督徒从灭亡城前往天国的朝圣之旅。班扬以生动的人物和场景描绘信仰生活的挣扎与得胜，书中的灰心沼、虚荣集市、疑惑堡等意象深入人心，影响了无数信徒的灵命成长。',
    summary_en: "The greatest allegorical novel in Christian literature, depicting a pilgrim's journey from the City of Destruction to the Celestial City. Bunyan's vivid characters and scenes portray the struggles and triumphs of faith.",
    category: '古典著作',
    recommend_for: ['初信者', '慕道友', '青少年'],
    tags: ['古典著作', '寓言', '灵修'],
    epub_filename: null,
    summary_epub_filename: null,
    full_epub_filename: 'book-326-full.epub'
  },
  {
    id: 'book-327',
    author_zh: '约拿单·爱德华兹',
    author_en: 'Jonathan Edwards',
    title_zh: '爱德华兹讲道集',
    title_en: 'Selected Sermons of Jonathan Edwards',
    summary_zh: '美国大觉醒运动最重要的布道家约拿单·爱德华兹的讲道精选，包括震撼人心的《落在愤怒之神手中的罪人》等名篇。爱德华兹用生动的比喻警告听众悔改的紧迫性，这些讲道引发了大规模的属灵复兴，至今仍是理解改革宗觉醒传统的重要文献。',
    summary_en: "Selected sermons from Jonathan Edwards, the most influential preacher of the American Great Awakening, including the famous 'Sinners in the Hands of an Angry God'. These sermons sparked widespread spiritual revival.",
    category: '讲道',
    recommend_for: ['慕道友', '初信者', '牧师'],
    tags: ['讲道', '大觉醒', '改革宗'],
    epub_filename: null,
    summary_epub_filename: null,
    full_epub_filename: 'book-327-full.epub'
  },
  {
    id: 'book-328',
    author_zh: '马丁·路德',
    author_en: 'Martin Luther',
    title_zh: '九十五条论纲',
    title_en: 'The Ninety-Five Theses',
    summary_zh: '1517年路德张贴在威登堡教堂门上的论纲，引发了宗教改革运动。路德质疑赎罪券的神学根基，强调真悔改与信心的重要性。这份简短但革命性的文件改变了西方教会和文明的走向。',
    summary_en: "Luther's theses posted on the Wittenberg church door in 1517, sparking the Protestant Reformation. Luther challenged the theological basis of indulgences, emphasizing true repentance and faith.",
    category: '教会历史',
    recommend_for: ['神学生', '牧师', '历史爱好者'],
    tags: ['宗教改革', '教会历史', '路德'],
    epub_filename: null,
    summary_epub_filename: null,
    full_epub_filename: 'book-328-full.epub'
  }
];

// Add new books
books.push(...newBooks);

fs.writeFileSync(booksPath, JSON.stringify(books, null, 2));
console.log(`Updated books.json: ${books.length} books total`);
console.log('Added: book-324 to book-328');
console.log('Fixed: book-003, book-032, book-091, book-145, book-319 epub filenames');
