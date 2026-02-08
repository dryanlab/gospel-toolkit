#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
威斯敏斯特大要理问答中文标准译本处理脚本
用于处理林格尼尔标准中文译本并更新JSON文件
"""

import json
import re

def clean_chinese_text(text):
    """清理中文文本，移除脚注和略解"""
    # 移除脚注数字（上标）
    text = re.sub(r'[①②③④⑤⑥⑦⑧⑨⑩⑪⑫⑬⑭⑮⑯⑰⑱⑲⑳]', '', text)
    text = re.sub(r'[\d+]+', '', text)
    
    # 移除"略解"部分（通常在答案后面）
    text = re.sub(r'略解[：:].+', '', text)
    text = re.sub(r'\[略解\].*', '', text)
    
    # 清理多余的空白字符
    text = re.sub(r'\s+', ' ', text).strip()
    
    return text

def parse_chinese_wlc_text(text):
    """解析中文威斯敏斯特大要理问答文本"""
    questions = {}
    
    # 常见的问答分隔模式
    patterns = [
        # 问1. ... 答1. ... 
        r'问(\d+)[．.]([^答]+)答\1[．.]([^问]+?)(?=问\d+|$)',
        # Q1. ... A1. ...
        r'Q(\d+)[．.]([^A]+)A\1[．.]([^Q]+?)(?=Q\d+|$)',
        # 1. ... 答: ...
        r'(\d+)[．.]([^答]+)答[：:]([^1-9]+?)(?=\d+[．.]|$)',
        # 其他可能的格式
        r'(\d+)、([^答]+?)答：([^1-9]+?)(?=\d+、|$)'
    ]
    
    for pattern in patterns:
        matches = re.finditer(pattern, text, re.DOTALL)
        for match in matches:
            number = int(match.group(1))
            question = clean_chinese_text(match.group(2))
            answer = clean_chinese_text(match.group(3))
            
            if question and answer:  # 确保不是空的
                questions[number] = {
                    'question': question,
                    'answer': answer
                }
    
    return questions

def update_chinese_in_json(json_file_path, chinese_questions):
    """更新JSON文件中的中文问答"""
    
    # 加载现有JSON数据
    with open(json_file_path, 'r') as f:
        data = json.load(f)
    
    updates = []
    for item in data:
        number = item['number']
        if number in chinese_questions:
            chinese_q = chinese_questions[number]
            
            # 更新中文问题
            if item['question_zh'] != chinese_q['question']:
                updates.append({
                    'number': number,
                    'type': 'question_zh',
                    'old': item['question_zh'],
                    'new': chinese_q['question']
                })
                item['question_zh'] = chinese_q['question']
            
            # 更新中文答案
            if item['answer_zh'] != chinese_q['answer']:
                updates.append({
                    'number': number,
                    'type': 'answer_zh',
                    'old': item['answer_zh'],
                    'new': chinese_q['answer']
                })
                item['answer_zh'] = chinese_q['answer']
    
    return data, updates

def generate_chinese_report(updates, total_found):
    """生成中文更新报告"""
    report = "# Westminster Larger Catechism Chinese Update Report\n\n"
    report += "Update time: {}\n".format(__import__('datetime').datetime.now().strftime('%Y-%m-%d %H:%M:%S'))
    report += "Questions found in input: {}\n".format(total_found)
    report += "Total updates: {}\n\n".format(len(updates))
    
    if not updates:
        report += "No updates needed. All Chinese Q&A match the provided standard version.\n"
        return report
    
    for update in updates:
        report += "## Q{} - {} Update\n\n".format(update['number'], update['type'])
        report += "**Old version:**\n{}\n\n".format(update['old'])
        report += "**New version:**\n{}\n\n".format(update['new'])
        report += "---\n\n"
    
    return report

def process_chinese_text_file(text_file_path, json_file_path):
    """处理中文文本文件并更新JSON"""
    
    print("Reading Chinese text from: {}".format(text_file_path))
    
    # 读取中文文本
    with open(text_file_path, 'r') as f:
        chinese_text = f.read()
    
    # 解析中文问答
    chinese_questions = parse_chinese_wlc_text(chinese_text)
    print("Found {} Chinese Q&A pairs".format(len(chinese_questions)))
    
    if len(chinese_questions) == 0:
        print("ERROR: No questions found in the text. Please check the format.")
        return False
    
    # 显示找到的问答范围
    if chinese_questions:
        min_q = min(chinese_questions.keys())
        max_q = max(chinese_questions.keys())
        print("Question range: Q{} - Q{}".format(min_q, max_q))
    
    # 更新JSON
    updated_data, updates = update_chinese_in_json(json_file_path, chinese_questions)
    
    # 生成报告
    report = generate_chinese_report(updates, len(chinese_questions))
    
    # 保存报告
    with open("/Users/suyan/clawd/wlc_chinese_update_report.md", 'w') as f:
        f.write(report)
    
    print("Update report saved to: /Users/suyan/clawd/wlc_chinese_update_report.md")
    
    if updates:
        # 创建备份
        backup_file = json_file_path + ".backup_before_chinese_update"
        with open(backup_file, 'w') as f:
            with open(json_file_path, 'r') as orig:
                f.write(orig.read())
        
        print("Created backup: {}".format(backup_file))
        
        # 保存更新后的数据
        with open(json_file_path, 'w') as f:
            json.dump(updated_data, f, indent=2)
        
        print("JSON file updated")
        print("Found and updated {} differences".format(len(updates)))
    else:
        print("No updates needed")
    
    return True

if __name__ == "__main__":
    import sys
    
    if len(sys.argv) != 2:
        print("Usage: python process_chinese_wlc.py <chinese_text_file>")
        print("Example: python process_chinese_wlc.py ligonier_chinese.txt")
        sys.exit(1)
    
    chinese_text_file = sys.argv[1]
    json_file = "/Users/suyan/clawd/projects/gospel-app/web/src/data/catechism_wlc.json"
    
    try:
        success = process_chinese_text_file(chinese_text_file, json_file)
        if success:
            print("\nChinese update process completed successfully!")
        else:
            print("\nChinese update process failed.")
            sys.exit(1)
            
    except Exception as e:
        print("Error during processing: {}".format(str(e)))
        sys.exit(1)