#!/usr/bin/env python3
"""Generate expansions.json with expanded content for all articles needing it."""
import json

# Read current data to get existing content
with open('apologetics.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

current = {item['id']: item for item in data}
expansions = {}

# Helper to check if expansion needed
def needs_expansion(item_id):
    item = current[item_id]
    zh_len = len(item.get('core_argument_zh', ''))
    obj_count = len(item.get('common_objections', []))
    return zh_len < 400 or obj_count < 3

# Write expansions to file
with open('expansions.json', 'w', encoding='utf-8') as f:
    json.dump(expansions, f, ensure_ascii=False, indent=2)

# Just print what needs work
for item in data:
    if needs_expansion(item['id']):
        zh = len(item.get('core_argument_zh',''))
        obj = len(item.get('common_objections',[]))
        print(f"{item['id']}: zh={zh}, obj={obj}")

print(f"\nTotal needing expansion: {sum(1 for i in data if needs_expansion(i['id']))}")
