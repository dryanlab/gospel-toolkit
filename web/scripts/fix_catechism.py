#!/usr/bin/env python3
"""
校对WSC和WLC要理问答，用标准版本替换
英文来源：OPC opc.org
中文来源：需要手动提供（林格尼尔403）
"""

import json
import re
import urllib.request
from html.parser import HTMLParser
from pathlib import Path

DATA_DIR = Path(__file__).parent.parent / "src" / "data"

class TextExtractor(HTMLParser):
    def __init__(self):
        super().__init__()
        self.text = []
        self.in_script = False
        self.in_style = False
    
    def handle_starttag(self, tag, attrs):
        if tag == 'script':
            self.in_script = True
        elif tag == 'style':
            self.in_style = True
    
    def handle_endtag(self, tag):
        if tag == 'script':
            self.in_script = False
        elif tag == 'style':
            self.in_style = False
    
    def handle_data(self, data):
        if not self.in_script and not self.in_style:
            self.text.append(data)
    
    def get_text(self):
        return ' '.join(self.text)

def fetch_url(url):
    """抓取URL内容"""
    print(f"  Fetching {url}...")
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'})
    with urllib.request.urlopen(req, timeout=30) as resp:
        return resp.read().decode('utf-8')

def html_to_text(html):
    """HTML转纯文本"""
    parser = TextExtractor()
    parser.feed(html)
    return parser.get_text()

def fetch_opc_wsc_en():
    """抓取OPC小要理英文"""
    url = "https://opc.org/sc.html"
    html = fetch_url(url)
    text = html_to_text(html)
    
    questions = {}
    # OPC格式: Q. 1. What is... A. ...
    pattern = r'Q\.\s*(\d+)\.\s*(.+?)\s*A\.\s*(.+?)(?=Q\.\s*\d+\.|$)'
    matches = re.findall(pattern, text, re.DOTALL)
    
    for num, q, a in matches:
        q = re.sub(r'\s+', ' ', q).strip()
        a = re.sub(r'\s+', ' ', a).strip()
        # 用wsc_001格式
        key = f"wsc_{int(num):03d}"
        questions[key] = {
            'question': q,
            'answer': a
        }
    
    print(f"    Found {len(questions)} questions")
    return questions

def fetch_opc_wlc_en():
    """抓取OPC大要理英文"""
    url = "https://opc.org/lc.html"
    html = fetch_url(url)
    text = html_to_text(html)
    
    questions = {}
    pattern = r'Q\.\s*(\d+)\.\s*(.+?)\s*A\.\s*(.+?)(?=Q\.\s*\d+\.|$)'
    matches = re.findall(pattern, text, re.DOTALL)
    
    for num, q, a in matches:
        q = re.sub(r'\s+', ' ', q).strip()
        a = re.sub(r'\s+', ' ', a).strip()
        key = f"wlc_{int(num):03d}"
        questions[key] = {
            'question': q,
            'answer': a
        }
    
    print(f"    Found {len(questions)} questions")
    return questions

def normalize_text(text):
    """标准化文本用于比较"""
    if not text:
        return ""
    text = re.sub(r'\s+', ' ', text)
    text = text.strip()
    return text

def update_catechism_english(json_file, en_data, name):
    """只更新英文"""
    print(f"\nUpdating {name} English...")
    
    # 备份
    backup_file = json_file.with_suffix('.json.bak_en')
    with open(json_file, 'r', encoding='utf-8') as f:
        original = json.load(f)
    with open(backup_file, 'w', encoding='utf-8') as f:
        json.dump(original, f, ensure_ascii=False, indent=2)
    print(f"  Backup saved to {backup_file.name}")
    
    changes = {'en_q': 0, 'en_a': 0}
    details = []
    
    for item in original:
        item_id = item['id']
        
        if item_id in en_data:
            std = en_data[item_id]
            
            old_q = normalize_text(item.get('question_en', ''))
            new_q = normalize_text(std['question'])
            if old_q != new_q:
                details.append(f"  {item_id} Q: '{old_q[:50]}...' → '{new_q[:50]}...'")
                item['question_en'] = std['question']
                changes['en_q'] += 1
            
            old_a = normalize_text(item.get('answer_en', ''))
            new_a = normalize_text(std['answer'])
            if old_a != new_a:
                details.append(f"  {item_id} A: (changed)")
                item['answer_en'] = std['answer']
                changes['en_a'] += 1
    
    # 保存
    with open(json_file, 'w', encoding='utf-8') as f:
        json.dump(original, f, ensure_ascii=False, indent=2)
    
    print(f"  Changes: q={changes['en_q']}, a={changes['en_a']}")
    if details and len(details) <= 20:
        for d in details:
            print(d)
    elif details:
        print(f"  (showing first 10 of {len(details)} changes)")
        for d in details[:10]:
            print(d)
    
    return changes

def main():
    print("=" * 60)
    print("要理问答英文校对脚本 (OPC标准版)")
    print("=" * 60)
    
    # 抓取OPC英文
    print("\n[1/3] Fetching OPC English versions...")
    
    try:
        wsc_en = fetch_opc_wsc_en()
        wlc_en = fetch_opc_wlc_en()
    except Exception as e:
        print(f"Error fetching data: {e}")
        import traceback
        traceback.print_exc()
        return
    
    # 验证数量
    print("\n[2/3] Validating counts...")
    if len(wsc_en) != 107:
        print(f"  ❌ WSC English has {len(wsc_en)} questions, expected 107")
    else:
        print(f"  ✓ WSC English: 107 questions")
    
    if len(wlc_en) != 196:
        print(f"  ❌ WLC English has {len(wlc_en)} questions, expected 196")
    else:
        print(f"  ✓ WLC English: 196 questions")
    
    # 更新文件
    print("\n[3/3] Updating English...")
    wsc_file = DATA_DIR / "catechism_wsc.json"
    wlc_file = DATA_DIR / "catechism_wlc.json"
    
    wsc_changes = update_catechism_english(wsc_file, wsc_en, "WSC")
    wlc_changes = update_catechism_english(wlc_file, wlc_en, "WLC")
    
    # 汇总
    print("\n" + "=" * 60)
    print("Summary")
    print("=" * 60)
    total = sum(wsc_changes.values()) + sum(wlc_changes.values())
    print(f"Total English changes: {total}")
    print(f"  WSC: q={wsc_changes['en_q']}, a={wsc_changes['en_a']}")
    print(f"  WLC: q={wlc_changes['en_q']}, a={wlc_changes['en_a']}")
    print("\n✅ English done! Backups saved as .bak_en files.")
    print("\n⚠️  Chinese needs manual update (Ligonier blocks automated access)")

if __name__ == "__main__":
    main()
