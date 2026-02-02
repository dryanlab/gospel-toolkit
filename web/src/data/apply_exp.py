# -*- coding: utf-8 -*-
"""Apply expansions from expansions.json to apologetics.json."""
import json

with open('apologetics.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

with open('expansions.json', 'r', encoding='utf-8') as f:
    expansions = json.load(f)

for item in data:
    if item['id'] in expansions:
        exp = expansions[item['id']]
        if 'core_argument_zh' in exp:
            item['core_argument_zh'] = exp['core_argument_zh']
        if 'core_argument_en' in exp:
            item['core_argument_en'] = exp['core_argument_en']

with open('apologetics.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

# Verify
still_short = 0
for item in data:
    zh_len = len(item.get('core_argument_zh', ''))
    if zh_len < 400:
        print(f"  {item['id']}: zh={zh_len}")
        still_short += 1
print(f"\nArticles still short: {still_short}")
print(f"Total: {len(data)}")
