const fs = require('fs');

// 读取books.json文件
const booksData = JSON.parse(fs.readFileSync('./books.json', 'utf8'));

// 需要修复的书ID列表
const bookIds = [];
for (let i = 299; i <= 323; i++) {
    bookIds.push(`book-${i}`);
}

// 翻译函数 - 将英文summary翻译为纯正中文
function translateToChineseSummary(englishSummary, bookTitle) {
    // 这里我会手动提供每本书的翻译
    const translations = {
        "book-299": "凯勒在这个版本的《为何是上帝》中，保持了核心护教学论证的基础，同时更加注重对现代怀疑主义深层根源的分析。他不仅回应了理性层面的质疑，更深入探讨了后现代文化中怀疑的存在性和情感层面。他特别关注现代人在意义、身份和群体方面的深层需求，论证基督教信仰如何提供更令人满意的答案。这部作品体现了凯勒成熟的思考和对当代文化的深刻理解，为搭建桥梁式的护教学提供了优秀范例。",
        
        "book-300": "凯勒在这个扩展版本中，更全面地处理了苦难这一人类存在的核心议题，整合了哲学、心理学和神学的多重视角。他不仅分析了不同文化和宗教传统如何理解苦难，更重要的是探讨了基督教独特的苦难神学——十字架如何重新定义了苦难的意义。凯勒特别关注实践层面的牧养智慧，为正在经历痛苦的人提供具体的属灵资源，并强调群体支持的重要性。这部作品是凯勒牧养事工和理性深度的完美结合。",
        
        "book-301": "肯尼迪作为圣经考古学家，在此书中运用最新的考古发现为圣经的历史可靠性提供了令人信服的证据。他详细介绍了近年来中东地区的重要考古发现，包括古代铭文、陶器、建筑遗迹等，展示它们如何印证圣经记述的准确性。肯尼迪特别关注那些曾经被批评学者质疑的圣经记载，通过考古数据的支持为圣经辩护。这部作品为护教学和圣经研究的对话提供了重要的实证基础，对增强信仰和学术可信度都具有重要价值。",
        
        "book-302": "历史学家霍兰德在这部雄心勃勃的作品中论证了一个革命性观点：现代西方文明的核心价值观——人权、平等、同情心——实际上源自基督教传统，而非希腊罗马古典文化。他追溯了从古代到现代的思想史，展示基督教如何根本性地改变了人类的道德想象。霍兰德特别分析了看似世俗的现代理念如何在深层次上植根于基督教假设，即使在后基督教社会中依然如此。这部作品对理解西方文明的基督教根基具有深刻意义。",
        
        "book-303": "朗曼和里德这两位旧约学者在此书中深入探讨了圣经中"上帝是战士"这一争议主题。他们运用严谨的释经方法分析了旧约中的战争主题，特别是神圣战争的神学意义，以及这些概念如何在新约中得到转化和成就。作者们特别关注如何在维护圣经权威的同时，正确解释这些困难经文，避免简单的字面主义，也拒绝自由派的寓言化。这部作品为理解圣经冲突神学和属灵争战提供了平衡的学术视角。"
    };
    
    return translations[bookId] || englishSummary;
}

// 修复summary_zh的函数
function fixSummaries(startIndex = 0, endIndex = 4) {
    const targetBooks = bookIds.slice(startIndex, endIndex + 1);
    
    targetBooks.forEach(bookId => {
        const book = booksData.find(b => b.id === bookId);
        if (book && book.summary_en) {
            const originalSummary = book.summary_zh;
            const newSummary = translateToChineseSummary(book.summary_en, book.title_zh);
            
            // 更新summary_zh
            book.summary_zh = newSummary;
            
            console.log(`修复了 ${bookId}: ${book.title_zh}`);
            console.log(`原文: ${originalSummary.substring(0, 50)}...`);
            console.log(`新文: ${newSummary.substring(0, 50)}...`);
            console.log('---');
        }
    });
}

module.exports = { booksData, fixSummaries, bookIds };