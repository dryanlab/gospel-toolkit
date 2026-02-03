#!/usr/bin/env python3
import json

def debug_grudem():
    with open('books.json', 'r', encoding='utf-8') as f:
        books = json.load(f)
    
    for book in books:
        if book.get('id') == 'book-311':
            print("找到 book-311:")
            print(f"Keys: {list(book.keys())}")
            print(f"Title ZH: {book.get('title_zh')}")
            print(f"Title EN: {book.get('title_en')}")
            print(f"Author ZH: {book.get('author_zh')}")
            print(f"Author EN: {book.get('author_en')}")
            
            if 'chapters' in book:
                print(f"Chapters count: {len(book['chapters'])}")
                print("First 3 chapters:")
                for i, ch in enumerate(book['chapters'][:3]):
                    print(f"  Ch{ch.get('number', i+1)}: {ch.get('title_zh', 'No title_zh')}")
            else:
                print("No 'chapters' key found")
                
            return book
    
    print("book-311 not found")
    return None

if __name__ == "__main__":
    debug_grudem()