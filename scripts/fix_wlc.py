#!/usr/bin/env python3
"""
Replace WLC catechism_wlc.json with standard Chinese (Ligonier) and English (OPC) versions.
"""
import json, re, sys, shutil
from pathlib import Path
from urllib.request import urlopen, Request
from html.parser import HTMLParser

DATA_DIR = Path(__file__).parent.parent / "web" / "src" / "data"
JSON_FILE = DATA_DIR / "catechism_wlc.json"
BACKUP_FILE = DATA_DIR / "catechism_wlc.json.bak_standard_v3"

# --- Step 1: Fetch and parse Chinese from Ligonier ---
def fetch_chinese():
    """Fetch WLC Chinese from Ligonier website."""
    url = "https://zh.ligonier.org/resources/creeds-and-confessions/westminster-larger-catechism/"
    req = Request(url, headers={"User-Agent": "Mozilla/5.0"})
    
    try:
        html = urlopen(req, timeout=30).read().decode("utf-8")
    except Exception as e:
        print(f"Cannot fetch Ligonier page: {e}")
        print("Trying local file...")
        local = Path(__file__).parent / "ligonier_wlc.html"
        if local.exists():
            html = local.read_text()
        else:
            sys.exit(1)
    
    # Strip HTML tags, keep text
    class TextExtractor(HTMLParser):
        def __init__(self):
            super().__init__()
            self.text = []
            self.skip = False
            self.in_sup = False
        def handle_starttag(self, tag, attrs):
            if tag in ('script', 'style', 'nav', 'footer', 'header'):
                self.skip = True
            if tag == 'sup':
                self.in_sup = True
        def handle_endtag(self, tag):
            if tag in ('script', 'style', 'nav', 'footer', 'header'):
                self.skip = False
            if tag == 'sup':
                self.in_sup = False
            if tag in ('p', 'div', 'br', 'tr', 'td', 'li', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'):
                self.text.append('\n')
        def handle_data(self, data):
            if not self.skip and not self.in_sup:
                self.text.append(data)
    
    extractor = TextExtractor()
    extractor.feed(html)
    text = ''.join(extractor.text)
    
    # Parse questions and answers
    # Split by 问N：pattern
    parts = re.split(r'(问\d+\s*：)', text)
    
    questions = {}
    i = 1
    while i < len(parts):
        q_marker = parts[i]  # e.g. "问1："
        num = int(re.search(r'\d+', q_marker).group())
        content = parts[i+1] if i+1 < len(parts) else ""
        
        # Split into question and answer by "答："
        qa_split = content.split('答：', 1)
        if len(qa_split) == 2:
            q_text = qa_split[0].strip()
            a_text = qa_split[1].strip()
            
            # Clean up question
            q_text = re.sub(r'\n+', ' ', q_text).strip()
            q_text = re.sub(r'\s+', ' ', q_text)
            
            # Clean answer: remove footnote lines
            # Footnote lines look like: "1 罗十一36；林前十31。2 诗七三25-26。"
            # or: "罗十一36；林前十31。诗七三25-26。" (after superscripts removed)
            lines = a_text.split('\n')
            clean_lines = []
            for line in lines:
                line = line.strip()
                if not line:
                    continue
                # Skip footnote lines: start with number + Chinese book name
                # Pattern: starts with a digit followed by space and Chinese char (book reference)
                if re.match(r'^\d+\s*[\u4e00-\u9fff]', line):
                    # Check if it looks like a footnote (contains 。and ；)
                    if '。' in line or '；' in line:
                        # But some answers start with numbers too, check more carefully
                        # Footnote lines are typically short references
                        # If line has 问 marker, it's not a footnote
                        if '问' not in line and '答' not in line:
                            continue
                # Also skip lines that are pure references without leading numbers
                # (after sup removal, refs might look like: 罗十一36；林前十31。诗七三25-26。)
                if re.match(r'^[\u4e00-\u9fff]+[\u4e00-\u9fff\d\uff1b\u3001\u3002\uff0c\s；、，。请参考〔〕～]+$', line):
                    if len(line) < 200 and ('；' in line or '。' in line) and '答' not in line:
                        # Likely a reference line
                        continue
                clean_lines.append(line)
            
            a_text = ' '.join(clean_lines)
            a_text = re.sub(r'\s+', ' ', a_text).strip()
            
            # Remove any remaining superscript unicode chars
            a_text = re.sub(r'[\u00b9\u00b2\u00b3\u2070-\u2079\u2080-\u2089]+', '', a_text)
            q_text = re.sub(r'[\u00b9\u00b2\u00b3\u2070-\u2079\u2080-\u2089]+', '', q_text)
            
            questions[num] = {
                'question_zh': f'问{num}：{q_text}',
                'answer_zh': f'答：{a_text}'
            }
        
        i += 2
    
    return questions

# --- Step 2: Fetch and parse English from OPC ---
def fetch_english():
    """Fetch WLC English from OPC website."""
    url = "https://opc.org/lc.html"
    req = Request(url, headers={"User-Agent": "Mozilla/5.0"})
    
    try:
        html = urlopen(req, timeout=30).read().decode("utf-8")
    except Exception as e:
        print(f"Cannot fetch OPC page: {e}")
        return None
    
    # Extract text
    class TextExtractor(HTMLParser):
        def __init__(self):
            super().__init__()
            self.text = []
            self.skip = False
        def handle_starttag(self, tag, attrs):
            if tag in ('script', 'style'):
                self.skip = True
        def handle_endtag(self, tag):
            if tag in ('script', 'style'):
                self.skip = False
            if tag in ('p', 'div', 'br', 'tr', 'li'):
                self.text.append('\n')
        def handle_data(self, data):
            if not self.skip:
                self.text.append(data)
    
    extractor = TextExtractor()
    extractor.feed(html)
    text = ''.join(extractor.text)
    
    # Parse Q&A pattern: "Q. 1." or "Q1." followed by text, then "A." followed by answer
    questions = {}
    
    # Try pattern: Q. N. question \n A. answer
    pattern = r'Q\.\s*(\d+)\.\s*(.*?)(?=\nA\.)\nA\.\s*(.*?)(?=Q\.\s*\d+\.|$)'
    matches = re.findall(pattern, text, re.DOTALL)
    
    if not matches:
        # Try alternative pattern
        pattern = r'Q(\d+)\.\s*(.*?)A\.\s*(.*?)(?=Q\d+\.|$)'
        matches = re.findall(pattern, text, re.DOTALL)
    
    for m in matches:
        num = int(m[0])
        q = re.sub(r'\s+', ' ', m[1]).strip()
        a = re.sub(r'\s+', ' ', m[2]).strip()
        questions[num] = {
            'question': q,
            'answer': a
        }
    
    return questions

# --- Step 3: Update JSON ---
def main():
    print("=== WLC Standard Version Replacement ===\n")
    
    # Backup
    print(f"1. Backing up to {BACKUP_FILE.name}...")
    shutil.copy2(JSON_FILE, BACKUP_FILE)
    
    # Load current data
    with open(JSON_FILE, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    print(f"   Loaded {len(data)} questions from JSON.\n")
    
    # Fetch Chinese
    print("2. Fetching Chinese standard version from Ligonier...")
    zh = fetch_chinese()
    print(f"   Got {len(zh)} Chinese questions.\n")
    
    # Fetch English
    print("3. Fetching English standard version from OPC...")
    en = fetch_english()
    if en:
        print(f"   Got {len(en)} English questions.\n")
    else:
        print("   Failed to fetch English. Will only update Chinese.\n")
    
    # Update
    print("4. Replacing...")
    zh_updated = 0
    en_updated = 0
    missing_zh = []
    missing_en = []
    
    for item in data:
        raw_id = item.get('id') or item.get('number') or ''
        num_match = re.search(r'\d+', str(raw_id))
        if not num_match:
            continue
        num = int(num_match.group())
        
        if num in zh:
            item['question_zh'] = zh[num]['question_zh']
            item['answer_zh'] = zh[num]['answer_zh']
            zh_updated += 1
        else:
            missing_zh.append(num)
        
        if en and num in en:
            item['question'] = en[num]['question']
            item['answer'] = en[num]['answer']
            en_updated += 1
        elif en:
            missing_en.append(num)
    
    print(f"   Chinese: {zh_updated}/196 updated")
    if missing_zh:
        print(f"   Missing Chinese: {missing_zh}")
    print(f"   English: {en_updated}/196 updated")
    if missing_en:
        print(f"   Missing English: {missing_en}")
    
    # Write
    print("\n5. Writing JSON...")
    with open(JSON_FILE, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    
    # Verify
    print("\n6. Verification:")
    with open(JSON_FILE, 'r', encoding='utf-8') as f:
        verify = json.load(f)
    print(f"   JSON valid: {len(verify)} questions")
    
    # Spot check
    for check_num in [1, 50, 100, 150, 196]:
        for item in verify:
            nm = re.search(r'\d+', str(item.get('id') or item.get('number', '')))
            n = int(nm.group()) if nm else 0
            if n == check_num:
                print(f"\n   Q{check_num} ZH: {item.get('question_zh', 'N/A')[:60]}...")
                print(f"   Q{check_num} EN: {item.get('question', 'N/A')[:60]}...")
                break
    
    print("\n=== Done! ===")

if __name__ == '__main__':
    main()
