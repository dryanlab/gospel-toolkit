#!/usr/bin/env python3
"""
Download more public domain Christian books from various sources
"""

import os
import urllib.request
import urllib.error
import time
from pathlib import Path

# Set working directory
os.chdir('/Users/suyan/clawd/projects/gospel-app/public-domain-books')

# More books to download - focusing on available ones
MORE_BOOKS = [
    # Anselm's Cur Deus Homo - different ID
    {"title": "anselm-cur-deus-homo", "source": "gutenberg", "id": "2568", "author": "Anselm"},
    
    # John Owen works from different sources
    {"title": "owen-death-of-death", "source": "gutenberg", "id": "58655", "author": "Owen"},
    {"title": "owen-sanctification", "source": "gutenberg", "id": "58656", "author": "Owen"},
    {"title": "owen-perseverance", "source": "gutenberg", "id": "58657", "author": "Owen"},
    
    # Thomas Watson works
    {"title": "watson-repentance", "source": "gutenberg", "id": "58659", "author": "Watson"},
    {"title": "watson-lords-supper", "source": "gutenberg", "id": "58658", "author": "Watson"},
    
    # William Ames
    {"title": "ames-marrow", "source": "gutenberg", "id": "45464", "author": "Ames"},
    
    # Alternative archive links
    {"title": "edersheim-life-times", "source": "archive",
     "url": "https://archive.org/download/lifetimesofjesust00ederiala/lifetimesofjesust00ederiala.epub",
     "author": "Edersheim"},
    
    # Gurnall from different source
    {"title": "gurnall-armour", "source": "archive",
     "url": "https://archive.org/download/christianincompl00gurn/christianincompl00gurn.epub",
     "author": "Gurnall"},
    
    # Kuyper
    {"title": "kuyper-poverty", "source": "archive",
     "url": "https://archive.org/download/problemofpovert00kuyp/problemofpovert00kuyp.epub",
     "author": "Kuyper"},
]

def download_from_gutenberg(book_id, filename):
    """Download epub from Project Gutenberg"""
    urls = [
        f"https://www.gutenberg.org/ebooks/{book_id}.epub.noimages",
        f"https://www.gutenberg.org/ebooks/{book_id}.epub",
        f"https://www.gutenberg.org/files/{book_id}/{book_id}.epub",
        f"https://www.gutenberg.org/cache/epub/{book_id}/pg{book_id}.epub"
    ]
    
    for url in urls:
        try:
            print(f"Trying: {url}")
            with urllib.request.urlopen(url, timeout=30) as response:
                content = response.read()
                if len(content) > 1000:
                    # Check if it's actually an epub
                    if content.startswith(b'PK') or b'application/epub' in content[:1000]:
                        with open(f"{filename}.epub", 'wb') as f:
                            f.write(content)
                        print(f"✅ Downloaded {filename}.epub ({len(content)} bytes)")
                        return True
                    else:
                        print(f"❌ Not a valid epub file")
                else:
                    print(f"❌ File too small: {len(content)}")
        except urllib.error.HTTPError as e:
            print(f"❌ HTTP Error {e.code}: {e.reason}")
        except Exception as e:
            print(f"❌ Error: {e}")
    
    return False

def download_direct_url(url, filename):
    """Download from direct URL"""
    try:
        print(f"Downloading: {url}")
        with urllib.request.urlopen(url, timeout=30) as response:
            content = response.read()
            if len(content) > 1000:
                # Check if it's valid
                if content.startswith(b'PK') or content.startswith(b'<!DOCTYPE html'):
                    # Even if HTML, save it for potential conversion
                    with open(f"{filename}.epub", 'wb') as f:
                        f.write(content)
                    print(f"✅ Downloaded {filename}.epub ({len(content)} bytes)")
                    return True
            else:
                print(f"❌ File too small: {len(content)}")
    except urllib.error.HTTPError as e:
        print(f"❌ HTTP Error {e.code}: {e.reason}")
    except Exception as e:
        print(f"❌ Error: {e}")
    
    return False

def main():
    print("📚 Downloading more public domain Christian books...")
    print(f"Working directory: {os.getcwd()}")
    
    successful = []
    failed = []
    
    for book in MORE_BOOKS:
        print(f"\n📖 Processing: {book['title']} by {book['author']}")
        
        # Skip if already exists
        epub_path = f"{book['title']}.epub"
        if os.path.exists(epub_path):
            print(f"⏭️  Already exists: {epub_path}")
            continue
        
        success = False
        
        if book["source"] == "gutenberg":
            success = download_from_gutenberg(book["id"], book["title"])
        else:
            success = download_direct_url(book["url"], book["title"])
        
        if success:
            successful.append(book)
        else:
            failed.append(book)
        
        time.sleep(1)  # Be polite
    
    print(f"\n📊 Summary:")
    print(f"✅ Successful: {len(successful)}")
    print(f"❌ Failed: {len(failed)}")
    
    for book in successful:
        print(f"  ✅ {book['title']} by {book['author']}")
    
    for book in failed:
        print(f"  ❌ {book['title']} by {book['author']}")

if __name__ == "__main__":
    main()