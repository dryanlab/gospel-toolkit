#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
威斯敏斯特大要理问答更新脚本
用于从权威源更新标准译本
"""

import json
import re

def parse_opc_text(text):
    """
    解析OPC网站的威斯敏斯特大要理问答文本
    """
    # 移除多余的换行和空格
    text = re.sub(r'\n\s*\n', '\n\n', text)
    
    # 找到所有问答对的模式
    qa_pattern = r'Q\.\s*(\d+)\.\s*(.*?)\n\nA\.\s*(.*?)(?=\n\nQ\.\s*\d+|\n\n[A-Z][^.]*\n\n|\Z)'
    matches = re.finditer(qa_pattern, text, re.DOTALL | re.MULTILINE)
    
    result = []
    for match in matches:
        question_num = int(match.group(1))
        question_text = match.group(2).strip()
        answer_text = match.group(3).strip()
        
        # 清理文本，移除多余的空格和换行
        question_text = re.sub(r'\s+', ' ', question_text)
        answer_text = re.sub(r'\s+', ' ', answer_text)
        
        result.append({
            'number': question_num,
            'question': question_text,
            'answer': answer_text
        })
    
    return result

def load_current_data(file_path):
    """加载当前的JSON数据"""
    with open(file_path, 'r', encoding='utf-8') as f:
        return json.load(f)

def save_updated_data(file_path, data):
    """保存更新后的JSON数据"""
    with open(file_path, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

def update_english_questions(current_data, opc_data):
    """
    更新英文问答
    """
    changes = []
    opc_dict = {item['number']: item for item in opc_data}
    
    for item in current_data:
        question_num = item['number']
        if question_num in opc_dict:
            opc_item = opc_dict[question_num]
            
            # 检查英文问题是否需要更新
            if item['question_en'] != opc_item['question']:
                changes.append("Q{}: Updated English question".format(question_num))
                item['question_en'] = opc_item['question']
            
            # 检查英文答案是否需要更新
            if item['answer_en'] != opc_item['answer']:
                changes.append("Q{}: Updated English answer".format(question_num))
                item['answer_en'] = opc_item['answer']
    
    return changes

if __name__ == "__main__":
    # 测试脚本
    sample_text = """
    Q. 1. What is the chief and highest end of man?

    A. Man's chief and highest end is to glorify God, and fully to enjoy him forever.

    Q. 2. How doth it appear that there is a God?

    A. The very light of nature in man, and the works of God, declare plainly that there is a God; but his word and Spirit only do sufficiently and effectually reveal him unto men for their salvation.
    """
    
    parsed = parse_opc_text(sample_text)
    print("测试解析结果:")
    for item in parsed:
        print("Q{}: {}...".format(item['number'], item['question'][:50]))
        print("A{}: {}...".format(item['number'], item['answer'][:50]))
        print()