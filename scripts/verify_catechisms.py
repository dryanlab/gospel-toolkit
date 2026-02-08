#!/usr/bin/env python3
"""核对大小要理问答：对比现有JSON与标准版本"""

import json
import re
import sys
from difflib import SequenceMatcher

DATA = "/Users/suyan/clawd/projects/gospel-app/web/src/data"

def normalize(s):
    """Normalize whitespace and punctuation for comparison"""
    s = s.strip()
    s = re.sub(r'\s+', ' ', s)
    # normalize quotes
    s = s.replace('\u201c', '"').replace('\u201d', '"').replace('\u2018', "'").replace('\u2019', "'")
    return s

def similarity(a, b):
    return SequenceMatcher(None, a, b).ratio()

def extract_q_text(q_str):
    """Remove leading '问X：' or 'Q. X.' prefix"""
    q = re.sub(r'^问\s*\d+\s*[：:]\s*', '', q_str)
    q = re.sub(r'^Q\.\s*\d+\.\s*', '', q)
    return q.strip()

def extract_a_text(a_str):
    """Remove leading '答：' prefix"""
    a = re.sub(r'^答\s*[：:]\s*', '', a_str)
    return a.strip()

print("=" * 70)
print("威斯敏斯特要理问答核对报告")
print("=" * 70)

# ========== WSC ==========
print("\n" + "=" * 70)
print("【小要理问答 WSC】")
print("=" * 70)

wsc = json.load(open(f"{DATA}/catechism_wsc.json"))
wsc_std_zh = json.load(open(f"{DATA}/wsc_ligonier_standard.json"))

print(f"现有数据：{len(wsc)} 条")
print(f"中文标准（林格尼尔）：{len(wsc_std_zh)} 条")

# WSC Chinese check
zh_diffs = []
for std in wsc_std_zh:
    num = std["num"]
    cur = next((q for q in wsc if q["number"] == num), None)
    if not cur:
        zh_diffs.append(f"  ❌ 第{num}题：现有数据中缺失！")
        continue
    
    std_q = normalize(std["q"])
    std_a = normalize(std["a"])
    cur_q = normalize(extract_q_text(cur.get("question_zh", "")))
    cur_a = normalize(extract_a_text(cur.get("answer_zh", "")))
    
    q_sim = similarity(std_q, cur_q)
    a_sim = similarity(std_a, cur_a)
    
    if q_sim < 0.95:
        zh_diffs.append(f"  ⚠️ 第{num}题 问题不匹配 (相似度{q_sim:.1%})")
        zh_diffs.append(f"    标准：{std_q[:80]}")
        zh_diffs.append(f"    现有：{cur_q[:80]}")
    if a_sim < 0.95:
        zh_diffs.append(f"  ⚠️ 第{num}题 答案不匹配 (相似度{a_sim:.1%})")
        zh_diffs.append(f"    标准：{std_a[:80]}")
        zh_diffs.append(f"    现有：{cur_a[:80]}")

if zh_diffs:
    print(f"\n📝 WSC中文差异 ({len([d for d in zh_diffs if d.startswith('  ⚠')])} 处)：")
    for d in zh_diffs:
        print(d)
else:
    print("\n✅ WSC中文：全部匹配！")

# WSC doesn't have a separate English standard file, skip for now
# We'll check OPC for WLC English

# ========== WLC ==========
print("\n" + "=" * 70)
print("【大要理问答 WLC】")
print("=" * 70)

wlc = json.load(open(f"{DATA}/catechism_wlc.json"))
opc_en = json.load(open(f"{DATA}/opc_en.json"))

print(f"现有数据：{len(wlc)} 条")
print(f"英文标准（OPC）：{len(opc_en)} 条")

# WLC English check
en_diffs = []
for num_str, std in opc_en.items():
    num = int(num_str)
    cur = next((q for q in wlc if q["number"] == num), None)
    if not cur:
        en_diffs.append(f"  ❌ Q{num}：现有数据中缺失！")
        continue
    
    std_q = normalize(std["q"])
    std_a = normalize(std["a"])
    cur_q = normalize(cur.get("question_en", ""))
    cur_a = normalize(cur.get("answer_en", ""))
    
    q_sim = similarity(std_q, cur_q)
    a_sim = similarity(std_a, cur_a)
    
    if q_sim < 0.98:
        en_diffs.append(f"  ⚠️ Q{num} Question mismatch ({q_sim:.1%})")
        en_diffs.append(f"    OPC: {std_q[:100]}")
        en_diffs.append(f"    Cur: {cur_q[:100]}")
    if a_sim < 0.98:
        en_diffs.append(f"  ⚠️ Q{num} Answer mismatch ({a_sim:.1%})")
        en_diffs.append(f"    OPC: {std_a[:100]}")
        en_diffs.append(f"    Cur: {cur_a[:100]}")

if en_diffs:
    print(f"\n📝 WLC英文差异 ({len([d for d in en_diffs if d.startswith('  ⚠')])} 处)：")
    for d in en_diffs:
        print(d)
else:
    print("\n✅ WLC英文：全部与OPC标准匹配！")

# WLC Chinese - need to fetch Ligonier first
print("\n📝 WLC中文：林格尼尔标准版尚未抓取，需要先获取")

print("\n" + "=" * 70)
print("核对完成")
print("=" * 70)
