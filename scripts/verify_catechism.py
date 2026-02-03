#!/usr/bin/env python3
"""Verify WSC and WLC against Ligonier (Chinese) and OPC (English) standard versions."""
import json, re, sys
from pathlib import Path
from urllib.request import urlopen, Request
from html.parser import HTMLParser

DATA_DIR = Path(__file__).parent.parent / "web" / "src" / "data"

class TextExtractor(HTMLParser):
    def __init__(self, strip_sup=True):
        super().__init__()
        self.text = []
        self.skip = False
        self.in_sup = False
        self.strip_sup = strip_sup
    def handle_starttag(self, tag, attrs):
        if tag in ('script','style','nav','footer','header'): self.skip = True
        if tag == 'sup': self.in_sup = True
    def handle_endtag(self, tag):
        if tag in ('script','style','nav','footer','header'): self.skip = False
        if tag == 'sup': self.in_sup = False
        if tag in ('p','div','br','tr','td','li','h1','h2','h3','h4','h5','h6'): self.text.append('\n')
    def handle_data(self, data):
        if not self.skip and not (self.strip_sup and self.in_sup):
            self.text.append(data)

def fetch_text(url):
    req = Request(url, headers={"User-Agent": "Mozilla/5.0"})
    html = urlopen(req, timeout=30).read().decode("utf-8")
    e = TextExtractor()
    e.feed(html)
    return ''.join(e.text)

def parse_chinese(text):
    """Parse 问N：... 答：... format"""
    parts = re.split(r'(问\d+\s*：)', text)
    qs = {}
    i = 1
    while i < len(parts):
        num = int(re.search(r'\d+', parts[i]).group())
        content = parts[i+1] if i+1 < len(parts) else ""
        qa = content.split('答：', 1)
        if len(qa) == 2:
            q = re.sub(r'\s+', ' ', qa[0]).strip()
            # Clean answer: remove footnote lines
            lines = qa[1].split('\n')
            clean = []
            for l in lines:
                l = l.strip()
                if not l: continue
                if re.match(r'^\d+\s*[\u4e00-\u9fff]', l) and ('。' in l or '；' in l) and '问' not in l and '答' not in l:
                    continue
                if re.match(r'^[\u4e00-\u9fff]+[\u4e00-\u9fff\d\uff1b\u3001\u3002\uff0c\s；、，。请参考〔〕～]+$', l) and len(l) < 200 and ('；' in l or '。' in l) and '答' not in l:
                    continue
                clean.append(l)
            a = re.sub(r'\s+', ' ', ' '.join(clean)).strip()
            a = re.sub(r'[\u00b9\u00b2\u00b3\u2070-\u2079]+', '', a)
            q = re.sub(r'[\u00b9\u00b2\u00b3\u2070-\u2079]+', '', q)
            qs[num] = (q, a)
        i += 2
    return qs

def parse_opc(text, is_wsc=False):
    """Parse OPC Q&A format"""
    qs = {}
    # OPC format: Q. N. question \n A. answer
    pattern = r'Q\.\s*(\d+)\.\s*(.*?)(?=\nA\.)\nA\.\s*(.*?)(?=Q\.\s*\d+\.|$)'
    for m in re.finditer(pattern, text, re.DOTALL):
        num = int(m.group(1))
        q = re.sub(r'\s+', ' ', m.group(2)).strip()
        a = re.sub(r'\s+', ' ', m.group(3)).strip()
        qs[num] = (q, a)
    return qs

def normalize(s):
    """Normalize for comparison"""
    s = re.sub(r'\s+', ' ', s).strip()
    s = re.sub(r'[\u00b9\u00b2\u00b3\u2070-\u2079\u2080-\u2089]+', '', s)
    return s

def compare(label, json_data, standard, id_prefix, is_zh=True):
    """Compare JSON data against standard, return issues."""
    issues = []
    q_key = 'question_zh' if is_zh else 'question'
    a_key = 'answer_zh' if is_zh else 'answer'
    
    for item in json_data:
        raw_id = str(item.get('id', ''))
        nm = re.search(r'\d+', raw_id)
        if not nm: continue
        num = int(nm.group())
        
        if num not in standard:
            issues.append(f"  Q{num}: NOT IN STANDARD SOURCE")
            continue
        
        std_q, std_a = standard[num]
        
        json_q = item.get(q_key, '')
        json_a = item.get(a_key, '')
        
        # Extract just the question text (remove 问N： or Q. N. prefix)
        if is_zh:
            json_q_text = re.sub(r'^问\d+\s*：\s*', '', json_q)
            json_a_text = re.sub(r'^答\s*：\s*', '', json_a)
        else:
            json_q_text = json_q
            json_a_text = json_a
        
        nj_q = normalize(json_q_text)
        ns_q = normalize(std_q)
        nj_a = normalize(json_a_text)
        ns_a = normalize(std_a)
        
        if nj_q != ns_q:
            # Check if it's just minor whitespace
            if nj_q.replace(' ', '') != ns_q.replace(' ', ''):
                issues.append(f"  Q{num} QUESTION MISMATCH:")
                issues.append(f"    JSON: {nj_q[:80]}...")
                issues.append(f"    STD:  {ns_q[:80]}...")
        
        if nj_a != ns_a:
            if nj_a.replace(' ', '') != ns_a.replace(' ', ''):
                issues.append(f"  Q{num} ANSWER MISMATCH:")
                issues.append(f"    JSON: {nj_a[:80]}...")
                issues.append(f"    STD:  {ns_a[:80]}...")
    
    return issues

def main():
    print("=" * 60)
    print("CATECHISM VERIFICATION REPORT")
    print("=" * 60)
    
    # --- WSC ---
    print("\n📖 WESTMINSTER SHORTER CATECHISM (WSC)")
    print("-" * 40)
    
    wsc_file = DATA_DIR / "catechism_wsc.json"
    with open(wsc_file, 'r', encoding='utf-8') as f:
        wsc_data = json.load(f)
    print(f"JSON: {len(wsc_data)} questions")
    
    # WSC Chinese
    print("\nFetching WSC Chinese (Ligonier)...")
    wsc_zh_text = fetch_text("https://zh.ligonier.org/resources/creeds-and-confessions/westminster-shorter-catechism/")
    wsc_zh = parse_chinese(wsc_zh_text)
    print(f"Standard: {len(wsc_zh)} questions")
    
    issues = compare("WSC-ZH", wsc_data, wsc_zh, "wsc", is_zh=True)
    if issues:
        print(f"\n⚠️  WSC Chinese: {len(issues)} issues:")
        for i in issues[:20]:
            print(i)
        if len(issues) > 20:
            print(f"  ... and {len(issues)-20} more")
    else:
        print("✅ WSC Chinese: ALL MATCH")
    
    # WSC English
    print("\nFetching WSC English (OPC)...")
    wsc_en_text = fetch_text("https://opc.org/sc.html")
    wsc_en = parse_opc(wsc_en_text, is_wsc=True)
    print(f"Standard: {len(wsc_en)} questions")
    
    issues = compare("WSC-EN", wsc_data, wsc_en, "wsc", is_zh=False)
    if issues:
        print(f"\n⚠️  WSC English: {len(issues)} issues:")
        for i in issues[:20]:
            print(i)
        if len(issues) > 20:
            print(f"  ... and {len(issues)-20} more")
    else:
        print("✅ WSC English: ALL MATCH")
    
    # --- WLC ---
    print("\n\n📖 WESTMINSTER LARGER CATECHISM (WLC)")
    print("-" * 40)
    
    wlc_file = DATA_DIR / "catechism_wlc.json"
    with open(wlc_file, 'r', encoding='utf-8') as f:
        wlc_data = json.load(f)
    print(f"JSON: {len(wlc_data)} questions")
    
    # WLC Chinese
    print("\nFetching WLC Chinese (Ligonier)...")
    wlc_zh_text = fetch_text("https://zh.ligonier.org/resources/creeds-and-confessions/westminster-larger-catechism/")
    wlc_zh = parse_chinese(wlc_zh_text)
    print(f"Standard: {len(wlc_zh)} questions")
    
    issues = compare("WLC-ZH", wlc_data, wlc_zh, "wlc", is_zh=True)
    if issues:
        print(f"\n⚠️  WLC Chinese: {len(issues)} issues:")
        for i in issues[:30]:
            print(i)
        if len(issues) > 30:
            print(f"  ... and {len(issues)-30} more")
    else:
        print("✅ WLC Chinese: ALL MATCH")
    
    # WLC English
    print("\nFetching WLC English (OPC)...")
    wlc_en_text = fetch_text("https://opc.org/lc.html")
    wlc_en = parse_opc(wlc_en_text)
    print(f"Standard: {len(wlc_en)} questions")
    
    issues = compare("WLC-EN", wlc_data, wlc_en, "wlc", is_zh=False)
    if issues:
        print(f"\n⚠️  WLC English: {len(issues)} issues:")
        for i in issues[:30]:
            print(i)
        if len(issues) > 30:
            print(f"  ... and {len(issues)-30} more")
    else:
        print("✅ WLC English: ALL MATCH")
    
    print("\n" + "=" * 60)
    print("VERIFICATION COMPLETE")
    print("=" * 60)

if __name__ == '__main__':
    main()
