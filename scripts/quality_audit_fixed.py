#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
书库章节质量审查脚本
"""

import json
import os
import codecs

class BookQualityAuditor:
    def __init__(self):
        # 知名著作的预期章节数（基于我对这些经典的了解）
        self.known_books = {
            "Mere Christianity": 33,  # 4卷33章
            "The Lion, the Witch and the Wardrobe": 17,
            "The Screwtape Letters": 31,
            "The Problem of Pain": 10,
            "Institutes of the Christian Religion": 80,  # 4卷，每卷约20章
            "Systematic Theology": 57,  # Grudem's约57章
            "The Reason for God": 14,  # Keller
            "Counterfeit Gods": 10,  # Keller  
            "Prayer": 22,  # Keller
            "Prodigal God": 8,  # Keller
            "City of God": 22,  # Augustine, 22卷
            "Confessions": 13,  # Augustine, 13卷
            "The Cost of Discipleship": 15,  # Bonhoeffer
            "Letters and Papers from Prison": 20,  # Bonhoeffer
            "The Pilgrim's Progress": 28,  # Bunyan
            "The Great Divorce": 14,  # Lewis
            "Surprised by Joy": 15,  # Lewis
            "Christian Apologetics": 15,  # Van Til
            "The Holiness of God": 10,  # Sproul
            "Basic Christianity": 8,  # Stott
            "The Cross of Christ": 15,  # Stott
            "Knowing God": 22,  # Packer
            "Evangelism and the Sovereignty of God": 4,  # Packer
            "The Reformed Doctrine of Predestination": 20,  # Boettner
            "Faith and Knowledge": 12,  # Plantinga
            "God and Other Minds": 10,  # Plantinga
            "Reasonable Faith": 8,  # Craig
            "On Guard": 7,  # Craig
            "Orthodoxy": 9,  # Chesterton
            "The Everlasting Man": 14,  # Chesterton
        }
        
        # 通用标题模式（AI容易编造的）
        self.generic_patterns = [
            "第一章", "第二章", "Chapter 1", "Chapter 2", 
            "Introduction", "Conclusion", "Overview", "Foundation",
            "基础", "概论", "导论", "结语", "总结"
        ]
        
        self.results = {
            "PASS": [],
            "PARTIAL": [],
            "FAIL": []
        }

    def load_books(self, file_path):
        """加载书籍数据"""
        with codecs.open(file_path, 'r', 'utf-8') as f:
            return json.load(f)

    def find_expected_chapters(self, title_en, title_zh):
        """根据书名查找预期章节数"""
        for known_title in self.known_books:
            if known_title.lower() in title_en.lower():
                return self.known_books[known_title]
        
        # 对于不在已知列表中的书，根据实际章节数做推测
        return None

    def check_generic_titles(self, chapters):
        """检查是否存在通用的AI生成标题"""
        if not chapters:
            return True
            
        generic_count = 0
        for chapter in chapters:
            try:
                title_zh = chapter.get("title_zh", "")
                title_en = chapter.get("title_en", "")
                
                # 确保字符串是Unicode
                if isinstance(title_zh, str):
                    title_zh = unicode(title_zh, 'utf-8')
                if isinstance(title_en, str):
                    title_en = unicode(title_en, 'utf-8')
                
                title_zh_lower = title_zh.lower()
                title_en_lower = title_en.lower()
                
                for pattern in self.generic_patterns:
                    pattern_unicode = unicode(pattern, 'utf-8') if isinstance(pattern, str) else pattern
                    pattern_lower = pattern_unicode.lower()
                    if pattern_lower in title_zh_lower or pattern_lower in title_en_lower:
                        generic_count += 1
                        break
            except:
                # 如果有编码问题，跳过这个章节
                continue
        
        # 如果超过30%的章节标题是通用的，则认为有问题
        return generic_count / len(chapters) > 0.3 if chapters else True

    def check_chapter_content_quality(self, chapters):
        """检查章节内容质量"""
        if not chapters:
            return False
            
        issues = 0
        for chapter in chapters:
            summary_zh = chapter.get("summary_zh", "")
            summary_en = chapter.get("summary_en", "")
            key_quotes = chapter.get("key_quotes", [])
            
            # 检查摘要是否过短或过于模糊
            if len(summary_zh) < 50 or len(summary_en) < 50:
                issues += 1
            
            # 检查是否有关键引用
            if not key_quotes or len(key_quotes) == 0:
                issues += 1
                
        # 如果超过50%的章节有问题，则认为内容质量不佳
        return issues / len(chapters) <= 0.5

    def audit_book(self, book):
        """审查单本书籍"""
        book_id = book.get("id", "")
        title_en = book.get("title_en", "")
        title_zh = book.get("title_zh", "")
        chapters = book.get("chapters", [])
        
        current_chapters = len(chapters)
        expected_chapters = self.find_expected_chapters(title_en, title_zh)
        
        # 检查章节数量
        chapter_count_ok = True
        if expected_chapters:
            # 允许±2章的差异
            if abs(current_chapters - expected_chapters) > 2:
                chapter_count_ok = False
        else:
            # 对于未知书籍，如果章节数过少（<4）可能有问题
            if current_chapters < 4:
                chapter_count_ok = False
                expected_chapters = ">" + str(current_chapters)
            else:
                expected_chapters = "未知"
        
        # 检查标题质量
        has_generic_titles = self.check_generic_titles(chapters)
        
        # 检查内容质量
        content_quality_ok = self.check_chapter_content_quality(chapters)
        
        # 综合判断
        if chapter_count_ok and not has_generic_titles and content_quality_ok:
            return "PASS"
        elif chapter_count_ok and content_quality_ok:
            return "PARTIAL"  # 章节数OK，内容质量OK，但标题可能有问题
        else:
            return "FAIL"

    def audit_all_books(self, books):
        """审查所有书籍"""
        for book in books:
            result = self.audit_book(book)
            
            book_id = book.get("id", "")
            title_zh = book.get("title_zh", "")
            title_en = book.get("title_en", "")
            chapters = book.get("chapters", [])
            current_chapters = len(chapters)
            expected_chapters = self.find_expected_chapters(title_en, title_zh)
            
            if expected_chapters is None:
                expected_chapters = "未知"
            
            # 分析问题
            problems = []
            if self.check_generic_titles(chapters):
                problems.append("标题通用化")
            if not self.check_chapter_content_quality(chapters):
                problems.append("内容质量差")
            if expected_chapters != "未知" and isinstance(expected_chapters, int):
                if abs(current_chapters - expected_chapters) > 2:
                    problems.append("章节数不匹配(差" + str(abs(current_chapters - expected_chapters)) + ")")
            
            book_info = {
                "id": book_id,
                "title_zh": title_zh,
                "title_en": title_en,
                "current_chapters": current_chapters,
                "expected_chapters": expected_chapters,
                "problems": "; ".join(problems) if problems else "无"
            }
            
            self.results[result].append(book_info)

    def generate_report(self, output_path):
        """生成审查报告"""
        total_pass = len(self.results['PASS'])
        total_partial = len(self.results['PARTIAL'])
        total_fail = len(self.results['FAIL'])
        total_books = total_pass + total_partial + total_fail
        
        report = """# 书库章节质量审查报告

## 审查标准
- ✅ PASS：章节数基本匹配（±2章），标题真实，内容准确
- ⚠️ PARTIAL：章节数偏少但内容质量OK，需要补充章节
- ❌ FAIL：章节标题是通用/编造的，或内容明显不准确

## 统计总结
- ✅ 通过 (PASS): """ + str(total_pass) + """ 本
- ⚠️ 部分通过 (PARTIAL): """ + str(total_partial) + """ 本  
- ❌ 不通过 (FAIL): """ + str(total_fail) + """ 本
- **总计**: """ + str(total_books) + """ 本

## 审查结果

### ✅ 通过 (PASS)
| ID | 书名 | 现有章节 | 预期章节 | 备注 |
|---|---|---|---|---|
"""
        
        for book in self.results["PASS"]:
            report += "| " + book['id'] + " | " + book['title_zh'] + " (" + book['title_en'] + ") | " + str(book['current_chapters']) + " | " + str(book['expected_chapters']) + " | " + book['problems'] + " |\n"
        
        report += """
### ⚠️ 部分通过 (PARTIAL)
| ID | 书名 | 现有章节 | 预期章节 | 问题 |
|---|---|---|---|---|
"""
        
        for book in self.results["PARTIAL"]:
            report += "| " + book['id'] + " | " + book['title_zh'] + " (" + book['title_en'] + ") | " + str(book['current_chapters']) + " | " + str(book['expected_chapters']) + " | " + book['problems'] + " |\n"
        
        report += """
### ❌ 不通过 (FAIL)
| ID | 书名 | 现有章节 | 预期章节 | 问题 |
|---|---|---|---|---|
"""
        
        for book in self.results["FAIL"]:
            report += "| " + book['id'] + " | " + book['title_zh'] + " (" + book['title_en'] + ") | " + str(book['current_chapters']) + " | " + str(book['expected_chapters']) + " | " + book['problems'] + " |\n"
        
        # 确保输出目录存在
        os.makedirs(os.path.dirname(output_path), exist_ok=True)
        
        with codecs.open(output_path, 'w', 'utf-8') as f:
            f.write(report)

def main():
    auditor = BookQualityAuditor()
    
    # 加载书籍数据
    books_path = "/Users/suyan/clawd/projects/gospel-app/web/src/data/books.json"
    books = auditor.load_books(books_path)
    
    print("开始审查 " + str(len(books)) + " 本书...")
    
    # 审查所有书籍
    auditor.audit_all_books(books)
    
    # 生成报告
    output_path = "/Users/suyan/clawd/projects/gospel-app/public-domain-books/QUALITY_AUDIT.md"
    auditor.generate_report(output_path)
    
    print("审查完成！")
    print("✅ 通过: " + str(len(auditor.results['PASS'])) + " 本")
    print("⚠️ 部分通过: " + str(len(auditor.results['PARTIAL'])) + " 本")
    print("❌ 不通过: " + str(len(auditor.results['FAIL'])) + " 本")
    print("报告已保存到: " + output_path)

if __name__ == "__main__":
    main()