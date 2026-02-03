#!/usr/bin/env python3
import json
import sys

def analyze_books():
    try:
        with open('/Users/suyan/clawd/projects/gospel-app/web/src/data/books.json', 'r', encoding='utf-8') as f:
            books = json.load(f)
        
        total_books = len(books)
        books_with_chapters = 0
        books_without_chapters = []
        
        for i, book in enumerate(books):
            if 'chapters' in book and book['chapters']:
                books_with_chapters += 1
            else:
                books_without_chapters.append((i, book.get('id', 'unknown'), book.get('title_zh', 'Unknown Title')))
        
        print(f"总书籍数: {total_books}")
        print(f"已有chapters的书籍数: {books_with_chapters}")
        print(f"没有chapters的书籍数: {len(books_without_chapters)}")
        print(f"进度: {books_with_chapters}/{total_books} ({books_with_chapters/total_books*100:.1f}%)")
        
        print("\n前10本没有chapters的书籍:")
        for i, (idx, book_id, title) in enumerate(books_without_chapters[:10]):
            print(f"{i+1}. Index {idx}: ID={book_id}, Title={title}")
        
        return books_without_chapters
    
    except Exception as e:
        print(f"错误: {e}")
        return []

if __name__ == "__main__":
    analyze_books()