#!/usr/bin/env python3
"""
Replace em dashes (—) with context-appropriate punctuation.
Avoids AI-style em dash overuse.

Rules:
  Chinese (——):
    ——" / ——「 / ——《    → ：X  (introducing a quote)
    "—— / 」——           → X，  (after a closing quote)
    **bold**——            → ：   (after bold heading)
    ——  before enumeration → ：  (、within 15 chars, same clause)
    ——  default           → ，
  English (—):
    **bold**—             → :
    —"                    → : "  (introducing a quote)
    "—                    → ,"
    —  default            → ,
"""

import re
import sys
import os


def replace_emdash_chinese(text):
    """Replace —— (double em dash) in Chinese text using position-based logic."""
    # Process from right to left to preserve positions
    i = len(text) - 1
    while i >= 1:
        # Find ——
        if text[i] == '—' and text[i-1] == '—':
            start = i - 1  # position of first —
            end = i + 1    # position after second —

            char_before = text[start-1] if start > 0 else ''
            char_after = text[end] if end < len(text) else ''
            text_after = text[end:end+20] if end < len(text) else ''
            text_before_20 = text[max(0, start-20):start]

            replacement = '，'  # default

            # Rule 1: Before a quote mark → ：
            if char_after in '"\u201c「《\u2018':
                replacement = '：'

            # Rule 2: After a closing quote → ，
            elif char_before in '"\u201d」》\u2019':
                replacement = '，'

            # Rule 3: After **bold** → ：
            elif text_before_20.rstrip().endswith('**'):
                replacement = '：'

            # Rule 4: Before enumeration (、within 15 chars, before sentence-ender)
            # BUT NOT if text starts with a conjunction (而是/但是/不是/却/就是/也/又/才/则)
            else:
                conjunctions = ('而是', '但是', '不是', '却', '就是', '也', '又', '才', '则',
                                '但', '就', '因为', '所以', '这', '那', '只是', '乃是')
                starts_with_conj = any(text_after.startswith(c) for c in conjunctions)
                if not starts_with_conj:
                    idx_enum = text_after.find('、')
                    idx_end = len(text_after)
                    for ch in '。！？\n':
                        pos = text_after.find(ch)
                        if 0 <= pos < idx_end:
                            idx_end = pos
                    if 0 <= idx_enum < idx_end and idx_enum < 15:
                        replacement = '：'

            text = text[:start] + replacement + text[end:]
            i = start - 1
        else:
            i -= 1

    return text


def replace_emdash_english(text):
    """Replace remaining single — (English context)."""
    # Process from right to left
    i = len(text) - 1
    while i >= 0:
        if text[i] == '—':
            start = i
            end = i + 1

            char_before = text[start-1] if start > 0 else ''
            char_after = text[end] if end < len(text) else ''
            text_before_20 = text[max(0, start-20):start]

            replacement = ', '  # default

            # Rule 1: After **bold** → :
            if text_before_20.rstrip().endswith('**'):
                replacement = ': '

            # Rule 2: Before a quote → :
            elif char_after in '"\u201c':
                replacement = ': '

            # Rule 3: After a closing quote → ,
            elif char_before in '"\u201d':
                replacement = ', '

            # Handle spacing: avoid double spaces
            # If there's already a space after, don't add another
            if end < len(text) and text[end] == ' ' and replacement.endswith(' '):
                replacement = replacement.rstrip()

            # If there's a space before, remove it for clean join
            if start > 0 and text[start-1] == ' ':
                start -= 1

            text = text[:start] + replacement + text[end:]
            i = start - 1
        else:
            i -= 1

    return text


def process_line(line):
    """Process a single line, handling mixed Chinese/English."""
    if '—' not in line:
        return line

    # Step 1: Replace Chinese —— patterns first
    result = replace_emdash_chinese(line)

    # Step 2: Replace remaining single — (English context)
    if '—' in result:
        result = replace_emdash_english(result)

    return result


def process_file(filepath):
    """Process a single file."""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    if '—' not in content:
        return 0

    lines = content.split('\n')
    new_lines = []
    changes = 0

    for line in lines:
        new_line = process_line(line)
        if new_line != line:
            changes += 1
        new_lines.append(new_line)

    new_content = '\n'.join(new_lines)

    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)

    return changes


def main():
    if len(sys.argv) < 2:
        print("Usage: fix-emdash.py <file_or_dir> [...]")
        sys.exit(1)

    total_changes = 0
    total_files = 0

    for path in sys.argv[1:]:
        if os.path.isfile(path):
            changes = process_file(path)
            if changes > 0:
                print(f"  {path}: {changes} lines changed")
                total_changes += changes
                total_files += 1
        elif os.path.isdir(path):
            for root, dirs, files in os.walk(path):
                if any(skip in root for skip in ['backup', '.next', 'node_modules', 'out', 'out_old']):
                    continue
                for fname in sorted(files):
                    if fname.endswith(('.md', '.ts', '.tsx')):
                        fpath = os.path.join(root, fname)
                        changes = process_file(fpath)
                        if changes > 0:
                            print(f"  {fpath}: {changes} lines changed")
                            total_changes += changes
                            total_files += 1

    print(f"\nTotal: {total_changes} lines changed in {total_files} files")


if __name__ == '__main__':
    main()
