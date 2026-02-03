#!/usr/bin/env python3
"""
从Ligonier文本文件中提取WLC中文问答，更新JSON
用法：python3 update_wlc_from_text.py < wlc_ligonier.txt
"""

import json
import re
import sys
from pathlib import Path

DATA_DIR = Path(__file__).parent.parent / "src" / "data"

def parse_ligonier_text(text):
    """解析林格尼尔格式的要理问答文本"""
    questions = {}
    
    # 正则：问N：... 答：...（到下一个问或文末）
    # 注意：答案后面有经文引用（数字+书卷名），需要去掉
    pattern = r'问(\d+)[：:]\s*(.+?)\s*答[：:]\s*(.+?)(?=\n问\d+[：:]|\n— 出处|$)'
    
    matches = re.findall(pattern, text, re.DOTALL)
    
    for num_str, question, answer in matches:
        num = int(num_str)
        # 清理问题文本
        q = re.sub(r'\s+', ' ', question).strip()
        
        # 清理答案：去掉经文引用（数字上标和书卷章节）
        # 经文格式如：1 罗十一36；林前十31。2 诗七三25-26。
        a = answer
        # 去掉末尾的经文引用块（通常是 \n\n1 书卷...）
        a = re.sub(r'\n+\d+\s*[一-龥]+[一-龥\d\-；、。：]+(?:\d+\s*[一-龥]+[一-龥\d\-；、。：]+)*\s*$', '', a)
        # 去掉文中的上标数字
        a = re.sub(r'\d+(?=\s*[，。；])', '', a)
        a = re.sub(r'\s+', ' ', a).strip()
        
        key = f"wlc_{num:03d}"
        questions[key] = {
            'question': q,
            'answer': a
        }
    
    return questions

def update_json(json_file, zh_data):
    """更新WLC JSON文件的中文"""
    print(f"Updating {json_file.name}...")
    
    # 备份
    backup_file = json_file.with_suffix('.json.bak_zh')
    with open(json_file, 'r', encoding='utf-8') as f:
        original = json.load(f)
    with open(backup_file, 'w', encoding='utf-8') as f:
        json.dump(original, f, ensure_ascii=False, indent=2)
    print(f"  Backup saved to {backup_file.name}")
    
    changes = {'q': 0, 'a': 0}
    
    for item in original:
        item_id = item['id']
        if item_id in zh_data:
            std = zh_data[item_id]
            
            # 比较并更新问题
            old_q = item.get('question_zh', '').strip()
            new_q = std['question']
            if old_q != new_q:
                item['question_zh'] = new_q
                changes['q'] += 1
            
            # 比较并更新答案
            old_a = item.get('answer_zh', '').strip()
            new_a = std['answer']
            if old_a != new_a:
                item['answer_zh'] = new_a
                changes['a'] += 1
    
    # 保存
    with open(json_file, 'w', encoding='utf-8') as f:
        json.dump(original, f, ensure_ascii=False, indent=2)
    
    print(f"  Changes: questions={changes['q']}, answers={changes['a']}")
    return changes

def main():
    if len(sys.argv) > 1:
        with open(sys.argv[1], 'r', encoding='utf-8') as f:
            text = f.read()
    else:
        print("Reading from stdin...")
        text = sys.stdin.read()
    
    print(f"Input text length: {len(text)} chars")
    
    # 解析
    zh_data = parse_ligonier_text(text)
    print(f"Parsed {len(zh_data)} questions")
    
    if len(zh_data) < 190:
        print("WARNING: Expected 196 questions, got fewer. Check input.")
    
    # 更新JSON
    wlc_file = DATA_DIR / "catechism_wlc.json"
    changes = update_json(wlc_file, zh_data)
    
    print(f"\nDone! Total changes: q={changes['q']}, a={changes['a']}")

if __name__ == "__main__":
    main()
