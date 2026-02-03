#!/usr/bin/env python3
import json

def check_progress():
    with open('books.json', 'r', encoding='utf-8') as f:
        books = json.load(f)
    
    books_with_chapters = 0
    last_with_chapters = 0
    
    for i, book in enumerate(books):
        if 'chapters' in book and book['chapters']:
            books_with_chapters += 1
            last_with_chapters = i + 1
        else:
            print(f"第{i+1}本书 '{book.get('title_zh', 'Unknown')}' 没有章节")
            if i >= 157:  # 从第158本开始
                break
    
    print(f"总共有{books_with_chapters}本书已有章节")
    print(f"最后一本有章节的书是第{last_with_chapters}本")
    
    # 查看第158本书开始的几本
    print("\n从第158本书开始的书目：")
    for i in range(157, min(162, len(books))):
        book = books[i]
        has_chapters = 'chapters' in book and book['chapters']
        print(f"第{i+1}本: {book.get('title_zh', 'Unknown')} - {'有chapters' if has_chapters else '无chapters'}")

if __name__ == "__main__":
    check_progress()