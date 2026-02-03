#!/usr/bin/env python3
"""Fix WSC English with OPC standard version."""
import json, re, shutil
from pathlib import Path
from urllib.request import urlopen, Request
from html.parser import HTMLParser

DATA_DIR = Path(__file__).parent.parent / "web" / "src" / "data"
JSON_FILE = DATA_DIR / "catechism_wsc.json"
BACKUP = DATA_DIR / "catechism_wsc.json.bak_en_fix"

class TextExtractor(HTMLParser):
    def __init__(self):
        super().__init__()
        self.text = []
        self.skip = False
    def handle_starttag(self, tag, attrs):
        if tag in ('script','style'): self.skip = True
    def handle_endtag(self, tag):
        if tag in ('script','style'): self.skip = False
        if tag in ('p','div','br','tr','li'): self.text.append('\n')
    def handle_data(self, data):
        if not self.skip: self.text.append(data)

print("1. Fetching OPC WSC...")
req = Request("https://opc.org/sc.html", headers={"User-Agent": "Mozilla/5.0"})
html = urlopen(req, timeout=30).read().decode("utf-8")
e = TextExtractor()
e.feed(html)
text = ''.join(e.text)

opc = {}
for m in re.finditer(r'Q\.\s*(\d+)\.\s*(.*?)(?=\nA\.)\nA\.\s*(.*?)(?=Q\.\s*\d+\.|$)', text, re.DOTALL):
    num = int(m.group(1))
    q = re.sub(r'\s+', ' ', m.group(2)).strip()
    a = re.sub(r'\s+', ' ', m.group(3)).strip()
    opc[num] = (q, a)
print(f"   Got {len(opc)} questions")

print("2. Backup & load JSON...")
shutil.copy2(JSON_FILE, BACKUP)
with open(JSON_FILE, 'r', encoding='utf-8') as f:
    data = json.load(f)

print("3. Replacing English...")
updated = 0
for item in data:
    nm = re.search(r'\d+', str(item.get('id', '')))
    if not nm: continue
    num = int(nm.group())
    if num in opc:
        item['question'] = opc[num][0]
        item['answer'] = opc[num][1]
        updated += 1

print(f"   {updated}/{len(data)} updated")

print("4. Writing...")
with open(JSON_FILE, 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

# Spot check
with open(JSON_FILE, 'r', encoding='utf-8') as f:
    v = json.load(f)
for item in v:
    nm = re.search(r'\d+', str(item.get('id', '')))
    if nm and int(nm.group()) == 1:
        print(f"\n   Q1 EN: {item['question'][:60]}")
        print(f"   A1 EN: {item['answer'][:60]}")
        break

print("\nDone! ✅")
