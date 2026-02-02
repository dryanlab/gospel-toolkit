# -*- coding: utf-8 -*-
"""Extract expansions dict from expand_cores.py by treating strings properly."""
import json
import re

with open('expand_cores.py', 'r', encoding='utf-8') as f:
    content = f.read()

# Find the dict content between 'expansions = {' and '# Apply expansions'
start = content.find('expansions = {') + len('expansions = ')
end = content.find('\n# Apply expansions')
dict_text = content[start:end].strip()

# The issue is Chinese fullwidth punctuation in Python string literals.
# We need to convert the content to proper escaped strings.
# Alternative: just write the file as JSON directly by replacing the quotes appropriately

# Actually, let's try a different approach: use raw string processing
# to extract the key-value pairs as-is and build JSON

# Simplest fix: encode all non-ASCII chars as unicode escapes before exec
encoded = ''
for ch in dict_text:
    if ord(ch) > 127:
        encoded += '\\u{:04x}'.format(ord(ch))
    else:
        encoded += ch

local_vars = {}
exec('expansions = ' + encoded, {}, local_vars)
expansions = local_vars['expansions']

with open('expansions.json', 'w', encoding='utf-8') as f:
    json.dump(expansions, f, ensure_ascii=False, indent=2)

print(f"Written {len(expansions)} expansions to expansions.json")
