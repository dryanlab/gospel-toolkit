#!/usr/bin/env python3
import json
import time
import sys
from pathlib import Path

def find_books_needing_summaries(books, start_id=200):
    """找到需要添加summary的书籍"""
    books_needing_summary = []
    for book in books:
        try:
            book_num = int(book['id'].replace('book-', ''))
            if book_num >= start_id and (not book.get('summary_zh') or not book.get('summary_en')):
                books_needing_summary.append(book)
        except (ValueError, KeyError):
            continue
    return books_needing_summary

def write_summary(book, summary_zh, summary_en):
    """为书籍添加summary"""
    book['summary_zh'] = summary_zh
    book['summary_en'] = summary_en
    return book

def process_batch():
    """处理一批书籍"""
    books_file = Path('/Users/suyan/clawd/projects/gospel-app/web/src/data/books.json')
    
    # 读取JSON文件
    with open(books_file, 'r', encoding='utf-8') as f:
        books = json.load(f)
    
    # 找到需要处理的书籍
    books_needing_summary = find_books_needing_summaries(books)
    
    if not books_needing_summary:
        print("没有找到需要处理的书籍")
        return False
        
    # 取前10本
    batch_books = books_needing_summary[:10]
    print(f"找到 {len(books_needing_summary)} 本书需要处理summary，本批处理 {len(batch_books)} 本：")
    
    for i, book in enumerate(batch_books):
        print(f"{i+1}. {book['title_zh']} ({book['author_zh']})")
    
    return batch_books

if __name__ == "__main__":
    batch = process_batch()
    if batch:
        print("请为上述书籍手动添加summary...")
    else:
        print("处理完成！")