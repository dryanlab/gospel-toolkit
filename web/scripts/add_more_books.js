const fs = require('fs');
const path = require('path');

const booksPath = path.join(__dirname, '../src/data/books.json');
const books = JSON.parse(fs.readFileSync(booksPath, 'utf8'));

// Find max book id
const maxId = Math.max(...books.map(b => parseInt(b.id.replace('book-', ''))));
let nextId = maxId + 1;

const newBooks = [
  {
    id: `book-${String(nextId++).padStart(3, '0')}`,
    author_zh: '托马斯·肯培',
    author_en: 'Thomas à Kempis',
    title_zh: '效法基督',
    title_en: 'The Imitation of Christ',
    summary_zh: '中世纪最广泛阅读的灵修经典，仅次于圣经。肯培以简洁深刻的文字，教导信徒如何在日常生活中效法基督，追求内在的属灵生命。全书强调谦卑、舍己、祷告和与神亲密的关系，数百年来滋养了无数基督徒的灵命。',
    summary_en: "The most widely read devotional work after the Bible. Kempis teaches believers how to imitate Christ in daily life, emphasizing humility, self-denial, prayer, and intimacy with God.",
    category: '灵修',
    recommend_for: ['初信者', '追求灵命成长者', '修道传统爱好者'],
    tags: ['灵修', '古典著作', '中世纪'],
    epub_filename: null,
    summary_epub_filename: null,
    full_epub_filename: 'kempis_imitation.epub'
  },
  {
    id: `book-${String(nextId++).padStart(3, '0')}`,
    author_zh: '劳伦斯弟兄',
    author_en: 'Brother Lawrence',
    title_zh: '与神同在的操练',
    title_en: 'The Practice of the Presence of God',
    summary_zh: '17世纪修道士劳伦斯弟兄关于祷告和灵修的教导。他在修道院厨房的平凡工作中，学会了时刻与神同在的秘诀。这本小书以书信和对话的形式，教导信徒如何在日常生活的每一刻都意识到神的同在。',
    summary_en: "17th-century monk Brother Lawrence shares his secret of constant communion with God amid ordinary kitchen work. This small book teaches how to practice God's presence in every moment of daily life.",
    category: '灵修',
    recommend_for: ['追求灵命成长者', '忙碌的基督徒', '祷告操练者'],
    tags: ['灵修', '祷告', '古典著作'],
    epub_filename: null,
    summary_epub_filename: null,
    full_epub_filename: 'lawrence_presence.epub'
  },
  {
    id: `book-${String(nextId++).padStart(3, '0')}`,
    author_zh: '威廉·威伯福斯',
    author_en: 'William Wilberforce',
    title_zh: '真正的基督教',
    title_en: 'A Practical View of Christianity',
    summary_zh: '废奴运动领袖威伯福斯的信仰宣言。他批评当时英国上流社会名义上的基督教，呼吁回归真实、有改变生命力量的福音信仰。这部著作激励了19世纪的福音派复兴和社会改革运动。',
    summary_en: "Abolitionist leader Wilberforce's faith manifesto, critiquing nominal Christianity in British high society and calling for authentic, life-transforming faith. It inspired 19th-century evangelical revival and social reform.",
    category: '基督徒生活',
    recommend_for: ['社会关怀者', '历史爱好者', '追求信仰实践者'],
    tags: ['基督徒生活', '社会改革', '福音派'],
    epub_filename: null,
    summary_epub_filename: null,
    full_epub_filename: 'wilberforce_practical.epub'
  },
  {
    id: `book-${String(nextId++).padStart(3, '0')}`,
    author_zh: '约瑟夫斯',
    author_en: 'Flavius Josephus',
    title_zh: '犹太古史',
    title_en: 'Antiquities of the Jews',
    summary_zh: '一世纪犹太历史学家约瑟夫斯的巨著，记录从创世到公元66年的犹太民族历史。这部著作是了解两约之间历史和新约时代背景的重要资料，也为圣经历史提供了珍贵的外部佐证。',
    summary_en: "First-century Jewish historian Josephus chronicles Jewish history from creation to AD 66. Essential for understanding the intertestamental period and New Testament background, providing valuable external evidence for biblical history.",
    category: '历史',
    recommend_for: ['圣经研究者', '历史爱好者', '神学生'],
    tags: ['历史', '犹太研究', '圣经背景'],
    epub_filename: null,
    summary_epub_filename: null,
    full_epub_filename: 'josephus_antiquities.epub'
  },
  {
    id: `book-${String(nextId++).padStart(3, '0')}`,
    author_zh: '约瑟夫斯',
    author_en: 'Flavius Josephus',
    title_zh: '犹太战争',
    title_en: 'The Wars of the Jews',
    summary_zh: '约瑟夫斯亲历并记录的公元66-73年犹太人反抗罗马帝国的战争史，包括耶路撒冷圣殿被毁的详细记载。这是理解主后70年圣殿被毁这一圣经预言应验的第一手史料。',
    summary_en: "Josephus's firsthand account of the Jewish revolt against Rome (AD 66-73), including the destruction of Jerusalem's Temple. Primary source for understanding the fulfillment of biblical prophecy regarding the Temple's destruction in AD 70.",
    category: '历史',
    recommend_for: ['圣经研究者', '历史爱好者', '末世论研究者'],
    tags: ['历史', '犹太研究', '圣经预言'],
    epub_filename: null,
    summary_epub_filename: null,
    full_epub_filename: 'josephus_wars.epub'
  }
];

books.push(...newBooks);

fs.writeFileSync(booksPath, JSON.stringify(books, null, 2));
console.log(`Updated books.json: ${books.length} books total`);
console.log(`Added ${newBooks.length} new books: book-${maxId + 1} to book-${nextId - 1}`);
