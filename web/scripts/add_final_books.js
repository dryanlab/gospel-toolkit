const fs = require('fs');
const path = require('path');

const booksPath = path.join(__dirname, '../src/data/books.json');
const books = JSON.parse(fs.readFileSync(booksPath, 'utf8'));

const maxId = Math.max(...books.map(b => parseInt(b.id.replace('book-', ''))));
let nextId = maxId + 1;

const newBooks = [
  {
    id: `book-${String(nextId++).padStart(3, '0')}`,
    author_zh: '慕迪',
    author_en: 'D.L. Moody',
    title_zh: '隐秘的能力',
    title_en: 'Secret Power',
    summary_zh: '著名布道家慕迪论圣灵的经典之作。他以平实的语言解释圣灵在基督徒生命和事奉中的重要角色，教导信徒如何倚靠圣灵的能力过得胜的生活并有效地事奉神。这本书对后来的灵恩运动和福音派复兴产生了深远影响。',
    summary_en: "Renowned evangelist Moody's classic on the Holy Spirit. In plain language, he explains the Spirit's vital role in Christian life and ministry, teaching believers how to rely on the Spirit's power for victorious living and effective service.",
    category: '灵修',
    recommend_for: ['追求灵命成长者', '事奉者', '牧师'],
    tags: ['圣灵', '灵修', '福音派'],
    epub_filename: null,
    summary_epub_filename: null,
    full_epub_filename: 'moody_secret_power.epub'
  },
  {
    id: `book-${String(nextId++).padStart(3, '0')}`,
    author_zh: '大德兰',
    author_en: 'Teresa of Ávila',
    title_zh: '圣女大德兰自传',
    title_en: 'The Life of St. Teresa of Jesus',
    summary_zh: '16世纪西班牙神秘主义者大德兰的自传，记录她从普通修女到经历深刻神秘经验的属灵旅程。她坦诚地描述了祷告的不同阶段、神秘异象，以及创立加尔默罗改革会的历程。这部著作是基督教神秘主义传统的重要文献。',
    summary_en: "The autobiography of 16th-century Spanish mystic Teresa of Ávila, recording her spiritual journey from ordinary nun to profound mystical experiences. She candidly describes stages of prayer, mystical visions, and founding the Discalced Carmelites.",
    category: '灵修',
    recommend_for: ['灵修传统爱好者', '神学生', '追求深度祷告者'],
    tags: ['灵修', '神秘主义', '自传'],
    epub_filename: null,
    summary_epub_filename: null,
    full_epub_filename: 'teresa_life.epub'
  },
  {
    id: `book-${String(nextId++).padStart(3, '0')}`,
    author_zh: '戴德生',
    author_en: 'Hudson Taylor',
    title_zh: '回顾',
    title_en: 'A Retrospect',
    summary_zh: '中国内地会创办人戴德生的自传性回忆录，记录他蒙召到中国宣教的历程和早年的信心经历。他分享了神如何信实地供应他的需要，以及他学习完全信靠神的功课。这本书激励了无数人投身宣教事工。',
    summary_en: "Autobiographical memoir of China Inland Mission founder Hudson Taylor, recording his calling to China and early experiences of faith. He shares how God faithfully supplied his needs and lessons in learning to fully trust God.",
    category: '见证',
    recommend_for: ['对宣教有负担者', '追求信心生活者', '青年基督徒'],
    tags: ['见证', '宣教', '信心'],
    epub_filename: null,
    summary_epub_filename: null,
    full_epub_filename: 'taylor_retrospect.epub'
  }
];

books.push(...newBooks);

fs.writeFileSync(booksPath, JSON.stringify(books, null, 2));
console.log(`Updated books.json: ${books.length} books total`);
console.log(`Added ${newBooks.length} new books: book-${maxId + 1} to book-${nextId - 1}`);

// Count books with full_epub_filename
const readableCount = books.filter(b => b.full_epub_filename).length;
console.log(`Total readable books: ${readableCount}`);
