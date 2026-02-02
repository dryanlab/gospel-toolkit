#!/usr/bin/env python3
"""Build the final apologetics.json by merging new articles and fixing formatting."""
import json
import re
import sys

def load_json(path):
    with open(path, 'r', encoding='utf-8') as f:
        return json.load(f)

def fix_bible_verse(v):
    """Convert any bible verse format to English-only reference."""
    # Map of Chinese book names to English
    book_map = {
        '创世记': 'Genesis', '出埃及记': 'Exodus', '利未记': 'Leviticus',
        '民数记': 'Numbers', '申命记': 'Deuteronomy', '约书亚记': 'Joshua',
        '士师记': 'Judges', '路得记': 'Ruth', '撒母耳记上': '1 Samuel',
        '撒母耳记下': '2 Samuel', '列王纪上': '1 Kings', '列王纪下': '2 Kings',
        '历代志上': '1 Chronicles', '历代志下': '2 Chronicles', '以斯拉记': 'Ezra',
        '尼希米记': 'Nehemiah', '以斯帖记': 'Esther', '约伯记': 'Job',
        '诗篇': 'Psalm', '箴言': 'Proverbs', '传道书': 'Ecclesiastes',
        '雅歌': 'Song of Solomon', '以赛亚书': 'Isaiah', '耶利米书': 'Jeremiah',
        '耶利米哀歌': 'Lamentations', '以西结书': 'Ezekiel', '但以理书': 'Daniel',
        '何西阿书': 'Hosea', '约珥书': 'Joel', '阿摩司书': 'Amos',
        '俄巴底亚书': 'Obadiah', '约拿书': 'Jonah', '弥迦书': 'Micah',
        '那鸿书': 'Nahum', '哈巴谷书': 'Habakkuk', '西番雅书': 'Zephaniah',
        '哈该书': 'Haggai', '撒迦利亚书': 'Zechariah', '玛拉基书': 'Malachi',
        '马太福音': 'Matthew', '马可福音': 'Mark', '路加福音': 'Luke',
        '约翰福音': 'John', '使徒行传': 'Acts', '罗马书': 'Romans',
        '哥林多前书': '1 Corinthians', '哥林多后书': '2 Corinthians',
        '加拉太书': 'Galatians', '以弗所书': 'Ephesians', '腓立比书': 'Philippians',
        '歌罗西书': 'Colossians', '帖撒罗尼迦前书': '1 Thessalonians',
        '帖撒罗尼迦后书': '2 Thessalonians', '提摩太前书': '1 Timothy',
        '提摩太后书': '2 Timothy', '提多书': 'Titus', '腓利门书': 'Philemon',
        '希伯来书': 'Hebrews', '雅各书': 'James', '彼得前书': '1 Peter',
        '彼得后书': '2 Peter', '约翰一书': '1 John', '约翰二书': '2 John',
        '约翰三书': '3 John', '犹大书': 'Jude', '启示录': 'Revelation',
    }
    
    # If it's already just English reference like "Romans 1:20", keep it
    # Pattern: starts with English book name and has chapter:verse
    english_ref_pattern = re.compile(r'^[1-3]?\s*[A-Z][a-z]+')
    
    # Handle "中文 X:Y / English X:Y" format
    if '/' in v:
        parts = v.split('/')
        english_part = parts[-1].strip()
        # Check if the english part looks like a valid reference
        if english_ref_pattern.match(english_part):
            return english_part
    
    # Handle "English X:Y 中文X:Y" or "中文X:Y" formats
    # First check if it starts with English
    if english_ref_pattern.match(v.strip()):
        # Extract just the English reference (up to the chapter:verse)
        # Remove any Chinese text that follows
        cleaned = re.sub(r'[\u4e00-\u9fff].*$', '', v).strip()
        if cleaned and re.search(r'\d+:\d+', cleaned):
            return cleaned
        # If the whole thing is English, return as-is
        if not re.search(r'[\u4e00-\u9fff]', v):
            return v.strip()
    
    # Handle Chinese-only format "中文书名 X:Y"
    for zh, en in sorted(book_map.items(), key=lambda x: -len(x[0])):
        if zh in v:
            # Extract chapter:verse
            nums = re.search(r'(\d+:\d+(?:-\d+)?)', v)
            if nums:
                return f"{en} {nums.group(1)}"
    
    # Handle format with long text after reference (from apol-new files)
    # e.g. "出埃及记 3:14 上帝对摩西说..."
    for zh, en in sorted(book_map.items(), key=lambda x: -len(x[0])):
        if v.startswith(zh):
            nums = re.search(r'(\d+:\d+(?:-\d+)?)', v)
            if nums:
                return f"{en} {nums.group(1)}"
    
    # Handle "诗篇119:160 - ..." format
    for zh, en in sorted(book_map.items(), key=lambda x: -len(x[0])):
        if v.startswith(zh):
            nums = re.search(r'(\d+:\d+(?:-\d+)?)', v)
            if nums:
                return f"{en} {nums.group(1)}"
    
    # Handle already-correct English refs with extra text
    # e.g. "Acts 17:22-31 - 保罗在雅典..."
    m = re.match(r'([1-3]?\s*[A-Za-z]+\s+\d+:\d+(?:-\d+)?)', v)
    if m:
        return m.group(1).strip()
    
    # Pluralize Psalms if needed
    v_clean = v.replace('Psalms', 'Psalm')
    
    return v.strip()

def fix_objections(objections):
    """Ensure all objections have objection_zh, objection_en, response_zh, response_en."""
    fixed = []
    for obj in objections:
        if 'objection_zh' in obj and 'objection_en' in obj and 'response_zh' in obj and 'response_en' in obj:
            fixed.append(obj)
        elif 'objection' in obj and 'response' in obj:
            # Old format - need to determine language
            objection_text = obj['objection']
            response_text = obj['response']
            # Check if it's Chinese
            has_chinese = bool(re.search(r'[\u4e00-\u9fff]', objection_text))
            if has_chinese:
                fixed.append({
                    'objection_zh': objection_text,
                    'objection_en': '',  # Will need manual fill
                    'response_zh': response_text,
                    'response_en': ''   # Will need manual fill
                })
            else:
                fixed.append({
                    'objection_zh': '',
                    'objection_en': objection_text,
                    'response_zh': '',
                    'response_en': response_text
                })
        else:
            fixed.append(obj)
    return fixed

def main():
    base_path = '/Users/suyan/clawd/projects/gospel-app/web/src/data'
    
    # Load files
    current = load_json(f'{base_path}/apologetics.json')
    new_foundations = load_json(f'{base_path}/apol-new/foundations.json')
    new_presup = load_json(f'{base_path}/apol-new/presuppositional.json')
    new_gospel = load_json(f'{base_path}/apol-new/gospel-evidence.json')
    
    # Build lookup maps
    new_items = {}
    for item in new_foundations + new_presup:
        new_items[item['id']] = item
    
    # IDs to replace
    replace_ids = set([
        'ath-012', 'ath-013', 'ath-014', 'ath-015', 'ath-016',
        'pre-001', 'pre-002', 'pre-003', 'pre-004', 'pre-005', 'pre-006'
    ])
    
    # Process current items
    result = []
    gospel_evidence_inserted = False
    
    for item in current:
        item_id = item['id']
        
        if item_id in replace_ids and item_id in new_items:
            # Replace with new version
            item = new_items[item_id]
        
        # Fix bible verses
        if 'bible_verses' in item:
            item['bible_verses'] = [fix_bible_verse(v) for v in item['bible_verses']]
            # Deduplicate
            seen = set()
            deduped = []
            for v in item['bible_verses']:
                normalized = v.strip()
                if normalized not in seen:
                    seen.add(normalized)
                    deduped.append(normalized)
            item['bible_verses'] = deduped
        
        # Fix objections format
        if 'common_objections' in item:
            item['common_objections'] = fix_objections(item['common_objections'])
        
        result.append(item)
        
        # After the last gospel-evidence item (cults-005), insert new ge items
        if item_id == 'cults-005' and not gospel_evidence_inserted:
            for ge_item in new_gospel:
                # Fix bible verses in new items too
                if 'bible_verses' in ge_item:
                    ge_item['bible_verses'] = [fix_bible_verse(v) for v in ge_item['bible_verses']]
                result.append(ge_item)
            gospel_evidence_inserted = True
    
    # If gospel-evidence items weren't inserted (cults-005 not found), append at end
    if not gospel_evidence_inserted:
        for ge_item in new_gospel:
            if 'bible_verses' in ge_item:
                ge_item['bible_verses'] = [fix_bible_verse(v) for v in ge_item['bible_verses']]
            result.append(ge_item)
    
    # Write result
    output_path = f'{base_path}/apologetics.json'
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(result, f, ensure_ascii=False, indent=2)
    
    # Print stats
    print(f"Total items: {len(result)}")
    sections = {}
    for item in result:
        s = item.get('section', 'unknown')
        sections[s] = sections.get(s, 0) + 1
    for s, c in sorted(sections.items()):
        print(f"  {s}: {c}")
    
    # Check for issues
    issues = []
    for item in result:
        # Check objection format
        for obj in item.get('common_objections', []):
            if 'objection_zh' not in obj or 'response_en' not in obj:
                issues.append(f"{item['id']}: objection missing zh/en fields")
                break
            if not obj.get('objection_en') or not obj.get('response_en'):
                issues.append(f"{item['id']}: objection has empty en fields")
                break
        # Check bible verses for Chinese
        for v in item.get('bible_verses', []):
            if re.search(r'[\u4e00-\u9fff]', v):
                issues.append(f"{item['id']}: bible verse still has Chinese: {v[:50]}")
                break
    
    if issues:
        print(f"\nIssues found ({len(issues)}):")
        for i in issues:
            print(f"  - {i}")
    else:
        print("\nNo formatting issues found!")

if __name__ == '__main__':
    main()
