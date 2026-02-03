#!/usr/bin/env python3
"""
Download public domain Christian books from various sources
"""

import os
import urllib.request
import urllib.error
import time
from pathlib import Path

# Set working directory
os.chdir('/Users/suyan/clawd/projects/gospel-app/public-domain-books')

# Known Project Gutenberg IDs and other sources
BOOKS = [
    # Project Gutenberg books
    {"title": "anselm-proslogion", "source": "gutenberg", "id": "2568", "author": "Anselm"},
    {"title": "calvin-institutes", "source": "gutenberg", "id": "50040", "author": "Calvin"},
    {"title": "owen-mortification-sin", "source": "gutenberg", "id": "58654", "author": "Owen"},
    {"title": "edwards-original-sin", "source": "gutenberg", "id": "57317", "author": "Edwards"},
    
    # Internet Archive direct links
    {"title": "luther-bondage-will", "source": "archive", 
     "url": "https://archive.org/download/thebondageofthew00luthrich/thebondageofthew00luthrich.epub", 
     "author": "Luther"},
    {"title": "edersheim-life-times", "source": "archive",
     "url": "https://archive.org/download/lifetimesofjesus01ederiala/lifetimesofjesus01ederiala.epub",
     "author": "Edersheim"},
    
    # Alternative sources to try
    {"title": "gurnall-complete-armour", "source": "ccel", 
     "url": "https://www.ccel.org/ccel/gurnall/armour", "author": "Gurnall"},
]

def download_from_gutenberg(book_id, filename):
    """Download epub from Project Gutenberg"""
    # Try different epub formats
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
                    # Check if it's actually an epub (not HTML error page)
                    if content.startswith(b'PK') or b'application/epub' in content[:1000]:
                        with open(f"{filename}.epub", 'wb') as f:
                            f.write(content)
                        print(f"✅ Downloaded {filename}.epub ({len(content)} bytes)")
                        return True
                    else:
                        print(f"❌ Not a valid epub file (HTML error page)")
                else:
                    print(f"❌ Failed: size {len(content)}")
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
                with open(f"{filename}.epub", 'wb') as f:
                    f.write(content)
                print(f"✅ Downloaded {filename}.epub ({len(content)} bytes)")
                return True
            else:
                print(f"❌ Failed: size {len(content)}")
    except Exception as e:
        print(f"❌ Error: {e}")
    
    return False

def main():
    """Main download function"""
    print("📚 Starting download of public domain Christian books...")
    print(f"Working directory: {os.getcwd()}")
    
    successful_downloads = []
    failed_downloads = []
    
    for book in BOOKS:
        print(f"\n📖 Processing: {book['title']} by {book['author']}")
        
        # Skip if already exists
        epub_path = f"{book['title']}.epub"
        if os.path.exists(epub_path):
            print(f"⏭️  Already exists: {epub_path}")
            continue
        
        success = False
        
        if book["source"] == "gutenberg":
            success = download_from_gutenberg(book["id"], book["title"])
        elif book["source"] == "archive" or book["source"] == "ccel":
            success = download_direct_url(book["url"], book["title"])
        
        if success:
            successful_downloads.append(book)
        else:
            failed_downloads.append(book)
        
        # Be polite to servers
        time.sleep(1)
    
    print(f"\n📊 Summary:")
    print(f"✅ Successful: {len(successful_downloads)}")
    print(f"❌ Failed: {len(failed_downloads)}")
    
    if successful_downloads:
        print(f"\n✅ Successfully downloaded:")
        for book in successful_downloads:
            print(f"  - {book['title']} by {book['author']}")
    
    if failed_downloads:
        print(f"\n❌ Failed to download:")
        for book in failed_downloads:
            print(f"  - {book['title']} by {book['author']}")

if __name__ == "__main__":
    main()