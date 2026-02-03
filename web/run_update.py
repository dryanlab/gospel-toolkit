#!/usr/bin/env python3
"""Execute the update of systematic theology books."""
import json
import sys
sys.path.insert(0, '.')

# Import book data from both files
# We'll exec them to get the data
book_data = {}

with open('update_systematic_theology.py', 'r') as f:
    content = f.read()
# Extract book_data dict
exec_globals = {}
exec(content, exec_globals)
if 'book_data' in exec_globals:
    book_data.update(exec_globals['book_data'])

with open('update_st_part2.py', 'r') as f:
    content = f.read()
exec_globals2 = {}
exec(content, exec_globals2)
if 'book_data_part2' in exec_globals2:
    book_data.update(exec_globals2['book_data_part2'])

print(f"Total book data entries: {len(book_data)}")

# Load books.json
with open('src/data/books.json', 'r', encoding='utf-8') as f:
    books = json.load(f)

updated = 0
skipped = []
for book in books:
    bid = book.get('id', '')
    if bid in book_data:
        data = book_data[bid]
        book['summary_zh'] = data['summary_zh']
        book['summary_en'] = data['summary_en']
        book['tags'] = data['tags']
        book['recommend_for'] = data['recommend_for']
        book['chapters'] = data['chapters']
        updated += 1

# Check which systematic theology books were NOT updated
st_books = [b for b in books if b.get('category') == '系统神学']
for b in st_books:
    if b['id'] not in book_data and not b.get('summary_zh'):
        skipped.append(f"{b['id']} | {b.get('title_zh','')}")

print(f"Updated: {updated}")
if skipped:
    print(f"SKIPPED (no data): {len(skipped)}")
    for s in skipped:
        print(f"  {s}")

# Write back
with open('src/data/books.json', 'w', encoding='utf-8') as f:
    json.dump(books, f, ensure_ascii=False, indent=2)

print("books.json written successfully!")
