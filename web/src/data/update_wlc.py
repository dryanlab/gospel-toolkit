#!/usr/bin/env python3
"""Update WLC JSON with Ligonier Chinese standard and OPC English standard."""
import json, re, sys

# Load current JSON
with open('catechism_wlc.json', 'r') as f:
    data = json.load(f)

# Load OPC English
with open('opc_en.json', 'r') as f:
    opc_en = json.load(f)

# Parse Ligonier Chinese from the extracted text files
# We'll read from stdin or a file
zh_data = {}

def parse_zh_chunk(text):
    """Parse Chinese data from |||  delimited format."""
    entries = text.strip().split('\n===\n')
    for entry in entries:
        parts = entry.strip().split('|||')
        if len(parts) == 3:
            num = int(parts[0].strip())
            q = parts[1].strip()
            a = parts[2].strip()
            zh_data[num] = {'q': q, 'a': a}

# Read all chunk files
for i in range(4):
    fname = f'zh_chunk_{i}.txt'
    try:
        with open(fname, 'r') as f:
            parse_zh_chunk(f.read())
    except FileNotFoundError:
        pass

print(f"Loaded {len(zh_data)} Chinese entries")
print(f"Loaded {len(opc_en)} English entries")

# Now update the JSON
changes_zh = 0
changes_en = 0
issues = []

for item in data:
    num = item['number']
    
    # Update Chinese
    if num in zh_data:
        new_q_zh = zh_data[num]['q']
        new_a_zh = zh_data[num]['a']
        
        if item['question_zh'] != new_q_zh:
            print(f"Q{num} zh question changed:")
            print(f"  OLD: {item['question_zh'][:80]}")
            print(f"  NEW: {new_q_zh[:80]}")
            item['question_zh'] = new_q_zh
            changes_zh += 1
        
        if item['answer_zh'] != new_a_zh:
            # Don't print full answers, just note the change
            old_len = len(item['answer_zh'])
            new_len = len(new_a_zh)
            print(f"Q{num} zh answer changed (old:{old_len} new:{new_len})")
            item['answer_zh'] = new_a_zh
            changes_zh += 1
    else:
        issues.append(f"Q{num}: no Chinese data found")
    
    # Update English
    snum = str(num)
    if snum in opc_en:
        new_q_en = opc_en[snum]['q']
        new_a_en = opc_en[snum]['a']
        
        if item['question_en'] != new_q_en:
            print(f"Q{num} en question changed:")
            print(f"  OLD: {item['question_en'][:80]}")
            print(f"  NEW: {new_q_en[:80]}")
            item['question_en'] = new_q_en
            changes_en += 1
        
        if item['answer_en'] != new_a_en:
            old_len = len(item['answer_en'])
            new_len = len(new_a_en)
            print(f"Q{num} en answer changed (old:{old_len} new:{new_len})")
            item['answer_en'] = new_a_en
            changes_en += 1
    else:
        issues.append(f"Q{num}: no English data found")

# Write output
with open('catechism_wlc.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print(f"\n=== SUMMARY ===")
print(f"Chinese fields changed: {changes_zh}")
print(f"English fields changed: {changes_en}")
print(f"Total changes: {changes_zh + changes_en}")
if issues:
    print(f"Issues: {issues}")
print("Done!")
