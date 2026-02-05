const fs = require('fs');
const path = require('path');

const booksPath = path.join(__dirname, '../src/data/books.json');
const books = JSON.parse(fs.readFileSync(booksPath, 'utf8'));

// 修复有epub的书籍的summary
const fixes = {
  'book-319': {
    summary_zh: '美国心理学家威廉·詹姆斯的经典之作，从实证心理学角度研究宗教经验的各种形式及其心理功能。作者分析了皈依、神秘主义、圣徒特质等现象，探讨它们的心理特征及对人类行为的影响。虽然詹姆斯采用实用主义而非神学进路，但他细致的观察和深刻的分析对理解宗教的心理层面具有持久价值。此书开创了宗教心理学研究，影响深远。',
    summary_en: "American psychologist William James's classic work studying various forms and psychological functions of religious experience from an empirical perspective. He analyzes phenomena like conversion, mysticism, and saintliness, exploring their psychological characteristics and effects on human behavior. Though James adopts a pragmatic rather than theological approach, his careful observation and insightful analysis have enduring value for understanding religion's psychological dimensions."
  },
  'book-008': {
    summary_zh: '路易斯深入探讨四种爱的本质：亲情、友情、爱情和神圣之爱。他分析每种爱的美善与危险——任何自然之爱若被绝对化，都会变成偶像和暴君。唯有神圣之爱才能净化和成全其他三种爱。本书兼具文学之美与神学之深。',
  }
};

let fixedCount = 0;
books.forEach(book => {
  if (fixes[book.id]) {
    Object.assign(book, fixes[book.id]);
    fixedCount++;
    console.log(`Fixed: ${book.id} - ${book.title_zh}`);
  }
});

fs.writeFileSync(booksPath, JSON.stringify(books, null, 2));
console.log(`\nTotal fixed: ${fixedCount} books`);
