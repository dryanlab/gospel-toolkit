# -*- coding: utf-8 -*-
"""Convert the Python dict in expand_cores.py to JSON by parsing it as text."""
import json
import re

with open('expand_cores.py', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract dict text
start = content.find('expansions = {') + len('expansions = ')
end = content.find('\n# Apply expansions')
dict_text = content[start:end].strip()

# Remove trailing comma before closing braces (Python allows, JSON doesn't)
# Also need to handle Python's \n in strings being literal in the file

# The trick: the Python file has valid Python string literals with Chinese.
# Python 3.12 parser rejects them in source, but we can use ast.literal_eval
# after converting to a format it can handle.

# Actually, let's try a completely different approach:
# Use Node.js to parse it as JavaScript (which handles Unicode fine)

# Or even simpler: manually convert Python dict syntax to JSON
# Python dict -> JSON: True->true, False->false, None->null, single quotes->double quotes
# In our case, all strings use double quotes already

# The dict_text is already almost valid JSON
# Main differences: trailing commas and Python comments

# Remove Python comments (lines starting with #)
lines = dict_text.split('\n')
clean_lines = []
for line in lines:
    stripped = line.strip()
    if stripped.startswith('#'):
        continue
    # Remove inline comments
    # Be careful not to remove # inside strings
    clean_lines.append(line)

clean_text = '\n'.join(clean_lines)

# Remove trailing commas before } or ]
clean_text = re.sub(r',(\s*[}\]])', r'\1', clean_text)

# Try parsing as JSON
try:
    result = json.loads(clean_text)
    with open('expansions.json', 'w', encoding='utf-8') as f:
        json.dump(result, f, ensure_ascii=False, indent=2)
    print(f"Success! Written {len(result)} expansions")
except json.JSONDecodeError as e:
    print(f"JSON parse error: {e}")
    # Show context around error
    pos = e.pos
    print(f"Around position {pos}:")
    print(clean_text[max(0,pos-100):pos+100])
