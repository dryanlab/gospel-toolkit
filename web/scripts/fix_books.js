const fs = require('fs');
const path = require('path');

const booksPath = path.join(__dirname, '../src/data/books.json');
const books = JSON.parse(fs.readFileSync(booksPath, 'utf8'));

books.forEach(book => {
  if (book.id === 'book-325') {
    book.title_zh = '上帝之城（全两卷）';
    book.title_en = 'The City of God (Complete)';
    book.full_epub_volumes = [
      {label: '上卷 Volume I', filename: 'book-325-full.epub'},
      {label: '下卷 Volume II', filename: 'book-325-vol2-full.epub'}
    ];
  }
  if (book.id === 'book-327') {
    book.title_zh = '爱德华兹讲道集';
    book.title_en = 'Selected Sermons of Jonathan Edwards';
    book.summary_zh = '美国大觉醒运动最重要的布道家约拿单·爱德华兹的讲道精选，包括震撼人心的《落在愤怒之神手中的罪人》等名篇。爱德华兹用生动的比喻警告听众悔改的紧迫性，这些讲道引发了大规模的属灵复兴，至今仍是理解改革宗觉醒传统的重要文献。';
    book.summary_en = "Selected sermons from Jonathan Edwards, the most influential preacher of the American Great Awakening, including the famous 'Sinners in the Hands of an Angry God'. These sermons sparked widespread spiritual revival and remain essential for understanding the Reformed awakening tradition.";
  }
});

fs.writeFileSync(booksPath, JSON.stringify(books, null, 2));
console.log('Updated books.json');
console.log('book-325:', books.find(b => b.id === 'book-325').title_zh);
console.log('book-327:', books.find(b => b.id === 'book-327').title_zh);
