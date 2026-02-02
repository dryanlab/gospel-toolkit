#!/usr/bin/env python3
"""Apply expansions from expansions.json to apologetics.json."""
import json

path = '/Users/suyan/clawd/projects/gospel-app/web/src/data/apologetics.json'
exp_path = '/Users/suyan/clawd/projects/gospel-app/web/src/data/expansions.json'

with open(path, 'r', encoding='utf-8') as f:
    data = json.load(f)

with open(exp_path, 'r', encoding='utf-8') as f:
    expansions = json.load(f)

for item in data:
    if item['id'] in expansions:
        exp = expansions[item['id']]
        if 'core_argument_zh' in exp:
            item['core_argument_zh'] = exp['core_argument_zh']
        if 'core_argument_en' in exp:
            item['core_argument_en'] = exp['core_argument_en']
        if 'extra_objections' in exp:
            item['common_objections'].extend(exp['extra_objections'])

with open(path, 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

# Verify
for item in data:
    zh_len = len(item.get('core_argument_zh', ''))
    obj_count = len(item.get('common_objections', []))
    needs = []
    if zh_len < 400:
        needs.append(f'short_zh({zh_len})')
    if obj_count < 3:
        needs.append(f'few_obj({obj_count})')
    if needs:
        print(f'  {item["id"]}: {" | ".join(needs)}')

print("Done.")
