# -*- coding: utf-8 -*-
"""Build expansions.json by reading expand_cores.py content and converting."""
import json
import re

# Read the python file as raw text
with open('expand_cores.py', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Find line numbers for the expansions dict
start_line = None
end_line = None
for i, line in enumerate(lines):
    if line.strip().startswith('expansions = {'):
        start_line = i
    if line.strip() == '# Apply expansions':
        end_line = i
        break

if start_line is None or end_line is None:
    print("Could not find expansions dict boundaries")
    exit(1)

# Extract dict content
dict_lines = lines[start_line:end_line]
dict_text = ''.join(dict_lines)

# Remove 'expansions = ' prefix 
dict_text = dict_text.replace('expansions = ', '', 1)

# The text is valid Python dict syntax with Chinese chars.
# The issue is Python 3.12 on macOS won't parse Chinese punctuation in source.
# Solution: use eval with compile in utf-8 mode
code = compile('result = ' + dict_text, '<string>', 'exec')
ns = {}
exec(code, ns)
expansions = ns['result']

with open('expansions.json', 'w', encoding='utf-8') as f:
    json.dump(expansions, f, ensure_ascii=False, indent=2)

print(f"Written {len(expansions)} expansions")
