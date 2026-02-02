# -*- coding: utf-8 -*-
"""Read expand_cores.py as text, extract the dict, write as JSON."""
import ast
import json
import re

# Read the file
with open('expand_cores.py', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract the dict portion between "expansions = {" and the line before "# Apply expansions"
start = content.find('expansions = {')
end = content.find('\n# Apply expansions')
dict_text = content[start:end].strip()

# We can't use ast.literal_eval directly on this because it's assignment
# Instead, exec the dict portion
local_vars = {}
exec(dict_text, {}, local_vars)
expansions = local_vars['expansions']

# Write as JSON
with open('expansions.json', 'w', encoding='utf-8') as f:
    json.dump(expansions, f, ensure_ascii=False, indent=2)

print(f"Written {len(expansions)} expansions to expansions.json")
