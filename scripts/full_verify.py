#!/usr/bin/env python3
"""
威斯敏斯特大小要理问答全面核对脚本
对比现有数据与标准版本（OPC英文、林格尼尔中文）
"""

import json
import re
from difflib import SequenceMatcher

DATA = "/Users/suyan/clawd/projects/gospel-app/web/src/data"

def normalize(s):
    """标准化文本用于比较"""
    s = s.strip()
    s = re.sub(r'\s+', ' ', s)
    # 移除脚注数字
    s = re.sub(r'[1-9][0-9]?(?=[；。，、]|$|\s)', '', s)
    s = s.replace('\u201c', '"').replace('\u201d', '"')
    s = s.replace('\u2018', "'").replace('\u2019', "'")
    return s

def similarity(a, b):
    return SequenceMatcher(None, normalize(a), normalize(b)).ratio()

def extract_q_text(q_str):
    """移除问题前缀"""
    q = re.sub(r'^问\s*\d+\s*[：:]\s*', '', q_str)
    q = re.sub(r'^Q\.\s*\d+\.\s*', '', q)
    return q.strip()

def extract_a_text(a_str):
    """移除答案前缀"""
    a = re.sub(r'^答\s*[：:]\s*', '', a_str)
    return a.strip()

print("=" * 80)
print("威斯敏斯特大小要理问答核对报告")
print("=" * 80)

# ========== 加载数据 ==========
wsc = json.load(open(f"{DATA}/catechism_wsc.json"))
wlc = json.load(open(f"{DATA}/catechism_wlc.json"))
wsc_std_zh = json.load(open(f"{DATA}/wsc_ligonier_standard.json"))
opc_en = json.load(open(f"{DATA}/opc_en.json"))

print(f"\n📊 数据统计：")
print(f"  - 小要理问答 (WSC): {len(wsc)} 条")
print(f"  - 大要理问答 (WLC): {len(wlc)} 条")
print(f"  - WSC中文标准 (林格尼尔): {len(wsc_std_zh)} 条")
print(f"  - WLC英文标准 (OPC): {len(opc_en)} 条")

# ========== WSC 中文核对 ==========
print("\n" + "=" * 80)
print("【小要理问答 WSC - 中文核对】(林格尼尔标准)")
print("=" * 80)

wsc_zh_issues = []
for std in wsc_std_zh:
    num = std["num"]
    cur = next((q for q in wsc if q["number"] == num), None)
    if not cur:
        wsc_zh_issues.append(f"❌ 第{num}题：缺失！")
        continue
    
    cur_q = extract_q_text(cur.get("question_zh", ""))
    cur_a = extract_a_text(cur.get("answer_zh", ""))
    
    q_sim = similarity(std["q"], cur_q)
    a_sim = similarity(std["a"], cur_a)
    
    if q_sim < 0.90:
        wsc_zh_issues.append(f"⚠️ 第{num}题 问题差异 ({q_sim:.0%})")
    if a_sim < 0.90:
        wsc_zh_issues.append(f"⚠️ 第{num}题 答案差异 ({a_sim:.0%})")

if wsc_zh_issues:
    print(f"\n发现 {len(wsc_zh_issues)} 处差异：")
    for issue in wsc_zh_issues[:10]:
        print(f"  {issue}")
    if len(wsc_zh_issues) > 10:
        print(f"  ... 还有 {len(wsc_zh_issues) - 10} 处")
else:
    print("\n✅ WSC中文：与林格尼尔标准完全匹配！")

# ========== WLC 英文核对 ==========
print("\n" + "=" * 80)
print("【大要理问答 WLC - 英文核对】(OPC标准)")
print("=" * 80)

wlc_en_issues = []
for num_str, std in opc_en.items():
    num = int(num_str)
    cur = next((q for q in wlc if q["number"] == num), None)
    if not cur:
        wlc_en_issues.append(f"❌ Q{num}：缺失！")
        continue
    
    cur_q = cur.get("question_en", "")
    cur_a = cur.get("answer_en", "")
    
    q_sim = similarity(std["q"], cur_q)
    a_sim = similarity(std["a"], cur_a)
    
    if q_sim < 0.98:
        wlc_en_issues.append(f"⚠️ Q{num} Question ({q_sim:.0%})")
    if a_sim < 0.98:
        wlc_en_issues.append(f"⚠️ Q{num} Answer ({a_sim:.0%})")

if wlc_en_issues:
    print(f"\n发现 {len(wlc_en_issues)} 处差异：")
    for issue in wlc_en_issues[:10]:
        print(f"  {issue}")
else:
    print("\n✅ WLC英文：与OPC标准完全匹配！")

# ========== 抽查几个关键问答 ==========
print("\n" + "=" * 80)
print("【关键问答抽查】")
print("=" * 80)

key_questions = [1, 21, 33, 107]  # 开篇、救赎主、恩典之约、主祷文

print("\n📖 WSC 关键问答：")
for num in key_questions[:2]:
    q = next((x for x in wsc if x["number"] == num), None)
    if q:
        print(f"\n  Q{num}: {q.get('question_zh', '')[:50]}...")
        print(f"  A{num}: {q.get('answer_zh', '')[:60]}...")

print("\n📖 WLC 关键问答：")
for num in [1, 196]:
    q = next((x for x in wlc if x["number"] == num), None)
    if q:
        print(f"\n  Q{num} (EN): {q.get('question_en', '')[:60]}...")
        print(f"  Q{num} (ZH): {q.get('question_zh', '')[:50]}...")

# ========== 总结 ==========
print("\n" + "=" * 80)
print("📋 核对总结")
print("=" * 80)

total_issues = len(wsc_zh_issues) + len(wlc_en_issues)
if total_issues == 0:
    print("\n🎉 全部通过！大小要理问答数据与标准版本一致。")
else:
    print(f"\n⚠️ 发现 {total_issues} 处需要关注的差异。")
    print("  注：差异可能是格式/标点导致，不一定是内容错误。")

print("\n📝 WLC中文版待核对：林格尼尔标准版已从网页抓取，需保存后核对。")
print("=" * 80)
