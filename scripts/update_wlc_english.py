#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
威斯敏斯特大要理问答英文版本更新脚本
基于OPC标准文本更新英文问答
"""

import json
import re

# OPC标准英文文本 (从web_fetch获得)
OPC_TEXT = """
Q. 1. What is the chief and highest end of man?

A. Man's chief and highest end is to glorify God, and fully to enjoy him forever.

Q. 2. How doth it appear that there is a God?

A. The very light of nature in man, and the works of God, declare plainly that there is a God; but his word and Spirit only do sufficiently and effectually reveal him unto men for their salvation.

Q. 3. What is the Word of God?

A. The Holy Scriptures of the Old and New Testament are the Word of God, the only rule of faith and obedience.

Q. 4. How doth it appear that the Scriptures are the Word of God?

A. The Scriptures manifest themselves to be the Word of God, by their majesty and purity; by the consent of all the parts, and the scope of the whole, which is to give all glory to God; by their light and power to convince and convert sinners, to comfort and build up believers unto salvation: but the Spirit of God bearing witness by and with the Scriptures in the heart of man, is alone able fully to persuade it that they are the very Word of God.

Q. 5. What do the Scriptures principally teach?

A. The Scriptures principally teach what man is to believe concerning God, and what duty God requires of man.

Q. 6. What do the Scriptures make known of God?

A. The Scriptures make known what God is, the persons in the Godhead, his decrees, and the execution of his decrees.

Q. 7. What is God?

A. God is a Spirit, in and of himself infinite in being, glory, blessedness, and perfection; all-sufficient, eternal, unchangeable, incomprehensible, everywhere present, almighty, knowing all things, most wise, most holy, most just, most merciful and gracious, longsuffering, and abundant in goodness and truth.

Q. 8. Are there more Gods than one?

A. There is but one only, the living and true God.

Q. 9. How many persons are there in the Godhead?

A. There be three persons in the Godhead, the Father, the Son, and the Holy Ghost; and these three are one true, eternal God, the same in substance, equal in power and glory; although distinguished by their personal properties.

Q. 10. What are the personal properties of the three persons in the Godhead?

A. It is proper to the Father to beget the Son, and to the Son to be begotten of the Father, and to the Holy Ghost to proceed from the Father and the Son from all eternity.
"""

def parse_opc_questions(text):
    """解析OPC文本中的问答"""
    questions = {}
    
    # 找到所有问答对
    pattern = r'Q\.\s*(\d+)\.\s*(.*?)\n\nA\.\s*(.*?)(?=\n\nQ\.\s*\d+|\Z)'
    matches = re.finditer(pattern, text, re.DOTALL)
    
    for match in matches:
        number = int(match.group(1))
        question = match.group(2).strip()
        answer = match.group(3).strip()
        
        # 清理文本
        question = re.sub(r'\s+', ' ', question)
        answer = re.sub(r'\s+', ' ', answer)
        
        questions[number] = {
            'question': question,
            'answer': answer
        }
    
    return questions

def compare_and_update(json_file_path):
    """比较并更新JSON文件中的英文问答"""
    
    # 解析OPC文本
    opc_questions = parse_opc_questions(OPC_TEXT)
    print("从OPC文本中解析到 {} 个问答".format(len(opc_questions)))
    
    # 加载现有JSON数据
    with open(json_file_path, 'r') as f:
        data = json.load(f)
    
    print("JSON文件中共有 {} 个问答".format(len(data)))
    
    # 比较和更新
    updates = []
    for item in data:
        number = item['number']
        if number in opc_questions:
            opc_q = opc_questions[number]
            
            # 比较问题
            if item['question_en'] != opc_q['question']:
                updates.append({
                    'number': number,
                    'type': 'question',
                    'old': item['question_en'],
                    'new': opc_q['question']
                })
                item['question_en'] = opc_q['question']
            
            # 比较答案
            if item['answer_en'] != opc_q['answer']:
                updates.append({
                    'number': number,
                    'type': 'answer', 
                    'old': item['answer_en'],
                    'new': opc_q['answer']
                })
                item['answer_en'] = opc_q['answer']
    
    return data, updates

def generate_report(updates):
    """生成更新报告"""
    report = "# Westminster Larger Catechism English Update Report\n\n"
    report += "Update time: {}\n".format(__import__('datetime').datetime.now().strftime('%Y-%m-%d %H:%M:%S'))
    report += "Total updates: {}\n\n".format(len(updates))
    
    if not updates:
        report += "No updates needed. All English Q&A match OPC standard version.\n"
        return report
    
    for update in updates:
        report += "## Q{} - {} Update\n\n".format(update['number'], update['type'])
        report += "**Old version:**\n{}\n\n".format(update['old'].encode('ascii', 'ignore').decode('ascii'))
        report += "**New version:**\n{}\n\n".format(update['new'].encode('ascii', 'ignore').decode('ascii'))
        report += "---\n\n"
    
    return report

if __name__ == "__main__":
    import sys
    
    json_file = "/Users/suyan/clawd/projects/gospel-app/web/src/data/catechism_wlc.json"
    
    print("开始更新威斯敏斯特大要理问答英文版本...")
    print("使用OPC标准文本...")
    
    try:
        # 执行比较和更新
        updated_data, updates = compare_and_update(json_file)
        
        # 生成报告
        report = generate_report(updates)
        
        # 保存报告
        with open("/Users/suyan/clawd/wlc_english_update_report.md", 'w') as f:
            f.write(report)
        
        print("更新报告已保存到: /Users/suyan/clawd/wlc_english_update_report.md")
        
        if updates:
            # 保存更新后的数据
            backup_file = json_file + ".backup_before_english_update"
            with open(backup_file, 'w') as f:
                with open(json_file, 'r') as orig:
                    f.write(orig.read())
            
            print("已创建额外备份: {}".format(backup_file))
            
            with open(json_file, 'w') as f:
                json.dump(updated_data, f, indent=2)
            
            print("JSON文件已更新")
            print("发现并更新了 {} 处差异".format(len(updates)))
        else:
            print("没有发现需要更新的内容")
        
    except Exception as e:
        print("更新过程中出现错误: {}".format(str(e)))
        sys.exit(1)