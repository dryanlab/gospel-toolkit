#!/usr/bin/env python3
"""
威斯敏斯特大小要理问答校对脚本
- WLC英文: 对比OPC标准
- WSC中文: 对比林格尼尔标准
- WLC中文: 需要先抓取林格尼尔完整版
"""

import json
import re
from difflib import SequenceMatcher, unified_diff
from pathlib import Path

DATA_DIR = Path("/Users/suyan/clawd/projects/gospel-app/web/src/data")

def normalize(s):
    """标准化文本以便比较"""
    if not s:
        return ""
    s = s.strip()
    s = re.sub(r'\s+', ' ', s)
    # 标准化引号
    s = s.replace('\u201c', '"').replace('\u201d', '"')
    s = s.replace('\u2018', "'").replace('\u2019', "'")
    # 移除常见的中文标点差异
    s = s.replace('；', ';').replace('：', ':').replace('，', ',')
    return s

def similarity(a, b):
    """计算相似度"""
    return SequenceMatcher(None, normalize(a), normalize(b)).ratio()

def extract_q_prefix(s, lang='en'):
    """移除问题前缀"""
    if not s:
        return ""
    if lang == 'zh':
        s = re.sub(r'^问\s*\d+\s*[：:]\s*', '', s)
    else:
        s = re.sub(r'^Q\.\s*\d+\.\s*', '', s)
    return s.strip()

def extract_a_prefix(s, lang='en'):
    """移除答案前缀"""
    if not s:
        return ""
    if lang == 'zh':
        s = re.sub(r'^答\s*[：:]\s*', '', s)
    else:
        s = re.sub(r'^A\.\s*', '', s)
    return s.strip()

def compare_texts(std, cur, num, field, threshold=0.95):
    """比较两个文本，返回差异报告"""
    std_norm = normalize(std)
    cur_norm = normalize(cur)
    
    if std_norm == cur_norm:
        return None  # 完全匹配
    
    sim = similarity(std, cur)
    if sim >= threshold:
        return None  # 相似度足够高
    
    return {
        'num': num,
        'field': field,
        'similarity': sim,
        'standard': std[:200] + ('...' if len(std) > 200 else ''),
        'current': cur[:200] + ('...' if len(cur) > 200 else ''),
        'std_full': std,
        'cur_full': cur
    }

def proofread_wlc_english():
    """校对WLC英文 vs OPC标准"""
    print("\n" + "=" * 70)
    print("【大要理问答 WLC - 英文校对】")
    print("对比: 现有数据 vs OPC官方标准")
    print("=" * 70)
    
    wlc = json.load(open(DATA_DIR / "catechism_wlc.json"))
    opc = json.load(open(DATA_DIR / "opc_en.json"))
    
    print(f"现有WLC: {len(wlc)} 条")
    print(f"OPC标准: {len(opc)} 条")
    
    diffs = []
    for num_str, std in opc.items():
        num = int(num_str)
        cur = next((q for q in wlc if q.get("number") == num), None)
        
        if not cur:
            diffs.append({'num': num, 'field': 'missing', 'error': '现有数据中缺失'})
            continue
        
        # 比较问题
        std_q = std.get('q', '')
        cur_q = cur.get('question_en', '') or cur.get('question', '')
        q_diff = compare_texts(std_q, cur_q, num, 'question')
        if q_diff:
            diffs.append(q_diff)
        
        # 比较答案
        std_a = std.get('a', '')
        cur_a = cur.get('answer_en', '') or cur.get('answer', '')
        a_diff = compare_texts(std_a, cur_a, num, 'answer')
        if a_diff:
            diffs.append(a_diff)
    
    return diffs

def proofread_wsc_chinese():
    """校对WSC中文 vs 林格尼尔标准"""
    print("\n" + "=" * 70)
    print("【小要理问答 WSC - 中文校对】")
    print("对比: 现有数据 vs 林格尼尔中文标准")
    print("=" * 70)
    
    wsc = json.load(open(DATA_DIR / "catechism_wsc.json"))
    ligonier = json.load(open(DATA_DIR / "wsc_ligonier_standard.json"))
    
    print(f"现有WSC: {len(wsc)} 条")
    print(f"林格尼尔标准: {len(ligonier)} 条")
    
    diffs = []
    for std in ligonier:
        num = std.get('num')
        cur = next((q for q in wsc if q.get("number") == num), None)
        
        if not cur:
            diffs.append({'num': num, 'field': 'missing', 'error': '现有数据中缺失'})
            continue
        
        # 比较问题（移除前缀）
        std_q = extract_q_prefix(std.get('q', ''), 'zh')
        cur_q = extract_q_prefix(cur.get('question_zh', ''), 'zh')
        q_diff = compare_texts(std_q, cur_q, num, 'question_zh', threshold=0.90)
        if q_diff:
            diffs.append(q_diff)
        
        # 比较答案（移除前缀和经文引用）
        std_a = std.get('a', '')
        cur_a = extract_a_prefix(cur.get('answer_zh', ''), 'zh')
        # 移除经文引用（如 "罗十一36；林前十31"）
        std_a_clean = re.sub(r'\d+。.*$', '', std_a).strip()
        a_diff = compare_texts(std_a_clean, cur_a, num, 'answer_zh', threshold=0.90)
        if a_diff:
            diffs.append(a_diff)
    
    return diffs

def print_diff_report(diffs, title):
    """打印差异报告"""
    if not diffs:
        print(f"\n✅ {title}: 全部匹配！无差异。")
        return
    
    print(f"\n📝 {title}: 发现 {len(diffs)} 处差异")
    print("-" * 60)
    
    for d in diffs[:20]:  # 最多显示20条
        if d.get('error'):
            print(f"  ❌ 第{d['num']}题: {d['error']}")
        else:
            print(f"  ⚠️ 第{d['num']}题 {d['field']} (相似度 {d['similarity']:.1%})")
            print(f"     标准: {d['standard']}")
            print(f"     现有: {d['current']}")
            print()
    
    if len(diffs) > 20:
        print(f"  ... 还有 {len(diffs) - 20} 处差异未显示")

def save_diff_report(diffs, filename):
    """保存差异报告到文件"""
    output_path = Path("/Users/suyan/clawd") / filename
    
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(f"# 差异报告\n")
        f.write(f"发现 {len(diffs)} 处差异\n\n")
        
        for d in diffs:
            if d.get('error'):
                f.write(f"## 第{d['num']}题\n")
                f.write(f"错误: {d['error']}\n\n")
            else:
                f.write(f"## 第{d['num']}题 - {d['field']}\n")
                f.write(f"相似度: {d['similarity']:.1%}\n\n")
                f.write(f"**标准版:**\n{d['std_full']}\n\n")
                f.write(f"**现有版:**\n{d['cur_full']}\n\n")
                f.write("---\n\n")
    
    print(f"详细报告已保存到: {output_path}")

def main():
    print("=" * 70)
    print("威斯敏斯特要理问答校对工具")
    print("=" * 70)
    
    # 1. WLC英文校对
    wlc_en_diffs = proofread_wlc_english()
    print_diff_report(wlc_en_diffs, "WLC英文")
    if wlc_en_diffs:
        save_diff_report(wlc_en_diffs, "wlc_english_diff_report.md")
    
    # 2. WSC中文校对
    wsc_zh_diffs = proofread_wsc_chinese()
    print_diff_report(wsc_zh_diffs, "WSC中文")
    if wsc_zh_diffs:
        save_diff_report(wsc_zh_diffs, "wsc_chinese_diff_report.md")
    
    # 3. WLC中文 - 需要林格尼尔完整数据
    print("\n" + "=" * 70)
    print("【大要理问答 WLC - 中文校对】")
    print("⚠️ 林格尼尔WLC中文标准版数据不完整（只有3条样本）")
    print("需要先从林格尼尔网站抓取完整的196条中文标准版")
    print("林格尼尔WLC中文链接: https://zh.ligonier.org/westminster-larger-catechism")
    print("=" * 70)
    
    print("\n" + "=" * 70)
    print("校对完成")
    print("=" * 70)

if __name__ == "__main__":
    main()
