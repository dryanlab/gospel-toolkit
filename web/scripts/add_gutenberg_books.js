const fs = require('fs');
const path = require('path');

const booksPath = path.join(__dirname, '../src/data/books.json');
const books = JSON.parse(fs.readFileSync(booksPath, 'utf8'));

const maxId = Math.max(...books.map(b => parseInt(b.id.replace('book-', ''))));
let nextId = maxId + 1;

const newBooks = [
  {
    id: `book-${String(nextId++).padStart(3, '0')}`,
    author_zh: '慕安德烈',
    author_en: 'Andrew Murray',
    title_zh: '完全的降服',
    title_en: 'Absolute Surrender',
    summary_zh: '南非牧师慕安德烈关于完全顺服基督的经典讲道集。他以深刻的属灵洞见，教导信徒如何将生命的每个层面都交托给主，经历圣灵充满的能力。这部著作对全球灵恩运动和圣洁运动产生了深远影响。',
    summary_en: "South African pastor Andrew Murray's classic addresses on complete surrender to Christ. He teaches believers how to yield every area of life to the Lord and experience the power of Spirit-filled living.",
    category: '灵修',
    recommend_for: ['追求灵命成长者', '牧师', '门徒训练者'],
    tags: ['灵修', '圣洁运动', '顺服'],
    epub_filename: null,
    summary_epub_filename: null,
    full_epub_filename: 'murray_absolute_surrender.epub'
  },
  {
    id: `book-${String(nextId++).padStart(3, '0')}`,
    author_zh: '慕安德烈',
    author_en: 'Andrew Murray',
    title_zh: '谦卑',
    title_en: 'Humility: The Beauty of Holiness',
    summary_zh: '慕安德烈论谦卑的经典之作。他深入探讨谦卑作为基督徒生命根基的重要性，指出骄傲是一切罪的根源，而谦卑是所有美德的源泉。这本小书帮助无数信徒认识到真正的属灵生命始于在神面前的谦卑。',
    summary_en: "Murray's classic work on humility as the foundation of Christian life. He explores how pride is the root of all sin and humility the source of all virtue, helping believers understand that true spiritual life begins with humility before God.",
    category: '灵修',
    recommend_for: ['追求灵命成长者', '教会领袖', '神学生'],
    tags: ['灵修', '品格塑造', '属灵生命'],
    epub_filename: null,
    summary_epub_filename: null,
    full_epub_filename: 'murray_humility.epub'
  },
  {
    id: `book-${String(nextId++).padStart(3, '0')}`,
    author_zh: '约翰·班扬',
    author_en: 'John Bunyan',
    title_zh: '丰盛的恩典',
    title_en: 'Grace Abounding to the Chief of Sinners',
    summary_zh: '《天路历程》作者班扬的属灵自传，记录他从罪人到蒙恩得救的心路历程。他坦诚地描述了自己与罪恶和疑惑的挣扎，以及神丰盛恩典如何最终得胜。这部感人至深的见证鼓励了无数在信仰道路上挣扎的灵魂。',
    summary_en: "The spiritual autobiography of Pilgrim's Progress author Bunyan, recording his journey from sinner to saved. He honestly describes his struggles with sin and doubt, and how God's abundant grace ultimately triumphed.",
    category: '见证',
    recommend_for: ['慕道友', '初信者', '在信仰中挣扎者'],
    tags: ['见证', '自传', '恩典'],
    epub_filename: null,
    summary_epub_filename: null,
    full_epub_filename: 'bunyan_grace_abounding.epub'
  },
  {
    id: `book-${String(nextId++).padStart(3, '0')}`,
    author_zh: '司布真',
    author_en: 'Charles Spurgeon',
    title_zh: '进入窄门',
    title_en: 'Around the Wicket Gate',
    summary_zh: '"讲道王子"司布真写给慕道友的福音小册子，用平易近人的语言解释如何相信耶稣基督。他以牧者的心肠，温柔而清晰地引导寻求者跨过信心的门槛，进入救恩的确据。',
    summary_en: "The 'Prince of Preachers' Spurgeon's gospel booklet for seekers, explaining in accessible language how to believe in Jesus Christ. With pastoral warmth, he gently and clearly guides seekers across the threshold of faith into assurance of salvation.",
    category: '福音',
    recommend_for: ['慕道友', '初信者', '传福音者'],
    tags: ['福音', '救恩', '信心'],
    epub_filename: null,
    summary_epub_filename: null,
    full_epub_filename: 'spurgeon_wicket_gate.epub'
  }
];

books.push(...newBooks);

fs.writeFileSync(booksPath, JSON.stringify(books, null, 2));
console.log(`Updated books.json: ${books.length} books total`);
console.log(`Added ${newBooks.length} new books: book-${maxId + 1} to book-${nextId - 1}`);
