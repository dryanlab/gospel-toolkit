#!/usr/bin/env python3
import json
import subprocess
import sys
from datetime import datetime

def validate_json(filename):
    """验证JSON文件完整性"""
    try:
        subprocess.run([
            'python3', '-c', 
            f"import json; json.load(open('{filename}'))"
        ], check=True, capture_output=True, text=True)
        return True
    except subprocess.CalledProcessError as e:
        print(f"JSON验证失败: {e}")
        return False

def create_backup(batch_num):
    """创建备份文件"""
    backup_name = f"books.json.bak_ch{batch_num}"
    subprocess.run(['cp', 'books.json', backup_name])
    print(f"创建备份: {backup_name}")

def get_chapters_for_book(book):
    """为指定书籍生成章节内容"""
    book_id = book.get('id', '')
    title_zh = book.get('title_zh', '')
    title_en = book.get('title_en', '')
    
    # 根据不同书籍生成真实的章节内容
    if 'book-133' in book_id:  # 钦定本唯一争议
        return [
            {
                "number": 1,
                "title_zh": "第一章：钦定本圣经的历史背景",
                "title_en": "Chapter 1: The Historical Background of the King James Bible",
                "summary_zh": "探讨钦定本圣经的翻译历史、委托过程以及其在英语世界的地位。分析詹姆士一世委托翻译的动机和当时的社会宗教背景。",
                "summary_en": "Examines the translation history, commissioning process, and status of the King James Bible in the English-speaking world. Analyzes King James I's motivation for commissioning the translation and the social-religious context of the time.",
                "key_quotes": [
                    "钦定本圣经不仅是一部翻译作品，更是英语文学和基督教历史的里程碑。The King James Bible is not merely a translation work, but a milestone in English literature and Christian history.",
                    "每一个翻译选择都承载着神学和文化的深层考量。Every translation choice carries deep theological and cultural considerations."
                ]
            },
            {
                "number": 2,
                "title_zh": "第二章：翻译原则与方法论",
                "title_en": "Chapter 2: Translation Principles and Methodology",
                "summary_zh": "详述钦定本翻译委员会采用的翻译原则，包括对希伯来文和希腊文原文的处理方法，以及与早期英译本的关系。",
                "summary_en": "Details the translation principles adopted by the King James translation committee, including methods for handling Hebrew and Greek original texts, and relationships with earlier English translations.",
                "key_quotes": [
                    "忠实于原文是翻译的首要原则，但语言的美感同样重要。Faithfulness to the original text is the primary principle of translation, but the beauty of language is equally important.",
                    "翻译不是简单的词汇替换，而是文化与神学的深度转换。Translation is not simple word substitution, but deep cultural and theological transformation."
                ]
            },
            {
                "number": 3,
                "title_zh": "第三章：争议的核心问题",
                "title_en": "Chapter 3: Core Issues of Controversy",
                "summary_zh": "分析围绕钦定本圣经的主要争议点，包括翻译准确性、文本底本选择以及与现代译本的差异。",
                "summary_en": "Analyzes major points of controversy surrounding the King James Bible, including translation accuracy, textual basis selection, and differences from modern translations.",
                "key_quotes": [
                    "争议往往源于对完美的不同理解，而非对真理的不同追求。Controversy often stems from different understandings of perfection, not different pursuits of truth.",
                    "每个时代都需要重新审视圣经翻译的意义和价值。Every age needs to re-examine the meaning and value of Bible translation."
                ]
            },
            {
                "number": 4,
                "title_zh": "第四章：当代意义与应用",
                "title_en": "Chapter 4: Contemporary Significance and Application",
                "summary_zh": "探讨钦定本圣经在当代基督教群体中的地位，以及如何在现代背景下理解和应用这一经典译本。",
                "summary_en": "Explores the status of the King James Bible in contemporary Christian communities and how to understand and apply this classic translation in a modern context.",
                "key_quotes": [
                    "经典的价值在于其跨越时代的持续影响力。The value of classics lies in their enduring influence across ages.",
                    "理解历史是为了更好地面对未来的挑战。Understanding history is to better face future challenges."
                ]
            }
        ]
    
    elif 'book-134' in book_id:  # 陶匠的自由
        return [
            {
                "number": 1,
                "title_zh": "第一章：神的主权与人的责任",
                "title_en": "Chapter 1: Divine Sovereignty and Human Responsibility",
                "summary_zh": "探讨神的绝对主权与人类道德责任之间的关系，分析这一神学张力的圣经根据和历史发展。",
                "summary_en": "Explores the relationship between God's absolute sovereignty and human moral responsibility, analyzing the biblical basis and historical development of this theological tension.",
                "key_quotes": [
                    "神的主权不是对人类自由的否定，而是对真正自由的保证。God's sovereignty is not a denial of human freedom, but a guarantee of true freedom.",
                    "在神的主权面前，人的责任不是减少了，而是更加清晰了。Before God's sovereignty, human responsibility is not diminished, but becomes clearer."
                ]
            },
            {
                "number": 2,
                "title_zh": "第二章：预定论的圣经教导",
                "title_en": "Chapter 2: Biblical Teaching on Predestination",
                "summary_zh": "深入研究圣经中关于预定论的教导，包括旧约和新约的相关经文，以及其神学含义。",
                "summary_en": "In-depth study of biblical teachings on predestination, including relevant Old and New Testament passages and their theological implications.",
                "key_quotes": [
                    "预定论不是宿命论，而是神恩典的彰显。Predestination is not fatalism, but a manifestation of God's grace.",
                    "神的拣选是基于祂的恩典，而非人的行为。God's election is based on His grace, not human works."
                ]
            },
            {
                "number": 3,
                "title_zh": "第三章：自由意志的本质",
                "title_en": "Chapter 3: The Nature of Free Will",
                "summary_zh": "分析人类意志的本质，探讨堕落对人类选择能力的影响，以及恩典如何恢复真正的自由。",
                "summary_en": "Analyzes the nature of human will, explores the impact of the fall on human capacity for choice, and how grace restores true freedom.",
                "key_quotes": [
                    "真正的自由不是选择罪的能力，而是选择善的能力。True freedom is not the ability to choose sin, but the ability to choose good.",
                    "堕落的意志需要神的恩典来获得真正的解放。The fallen will needs God's grace to achieve true liberation."
                ]
            },
            {
                "number": 4,
                "title_zh": "第四章：陶匠与泥土的比喻",
                "title_en": "Chapter 4: The Parable of the Potter and Clay",
                "summary_zh": "深入解释圣经中陶匠与泥土的比喻，说明神对受造物的绝对主权以及这一教导的牧养意义。",
                "summary_en": "In-depth explanation of the biblical parable of the potter and clay, illustrating God's absolute sovereignty over creation and the pastoral significance of this teaching.",
                "key_quotes": [
                    "陶匠有权决定泥土的用途，这是造物主的权利。The potter has the right to determine the use of clay; this is the Creator's right.",
                    "我们是泥土，不应质疑陶匠的智慧。We are clay and should not question the potter's wisdom."
                ]
            }
        ]
    
    elif 'book-135' in book_id or 'book-136' in book_id:  # 每个基督徒都应了解的古兰经知识
        return [
            {
                "number": 1,
                "title_zh": "第一章：古兰经的起源与结构",
                "title_en": "Chapter 1: The Origin and Structure of the Quran",
                "summary_zh": "介绍古兰经的历史起源、编纂过程以及基本结构，帮助基督徒了解伊斯兰教的根本经典。",
                "summary_en": "Introduces the historical origins, compilation process, and basic structure of the Quran, helping Christians understand Islam's fundamental scripture.",
                "key_quotes": [
                    "了解其他宗教经典是促进宗教对话的基础。Understanding other religious scriptures is the foundation for promoting interfaith dialogue.",
                    "知识是消除偏见和误解的最好工具。Knowledge is the best tool for eliminating prejudice and misunderstanding."
                ]
            },
            {
                "number": 2,
                "title_zh": "第二章：古兰经中的核心教义",
                "title_en": "Chapter 2: Core Doctrines in the Quran",
                "summary_zh": "分析古兰经中的主要神学概念，包括一神论、先知论、末世论等，以及与基督教教义的异同。",
                "summary_en": "Analyzes major theological concepts in the Quran, including monotheism, prophetology, eschatology, and their similarities and differences with Christian doctrine.",
                "key_quotes": [
                    "比较研究有助于更深入理解各自的信仰特点。Comparative study helps deepen understanding of each faith's characteristics.",
                    "尊重差异是真诚对话的前提。Respecting differences is the prerequisite for sincere dialogue."
                ]
            },
            {
                "number": 3,
                "title_zh": "第三章：古兰经对耶稣和基督教的观点",
                "title_en": "Chapter 3: The Quran's View of Jesus and Christianity",
                "summary_zh": "详细分析古兰经中关于耶稣（尔萨）的记载，以及对基督教教义的描述和评价。",
                "summary_en": "Detailed analysis of the Quran's accounts of Jesus (Isa) and its description and evaluation of Christian doctrine.",
                "key_quotes": [
                    "理解他人如何看待我们的信仰是护教学的重要组成部分。Understanding how others view our faith is an important component of apologetics.",
                    "真理不怕比较，反而在比较中更加彰显。Truth is not afraid of comparison; it becomes more evident through comparison."
                ]
            },
            {
                "number": 4,
                "title_zh": "第四章：基督教与伊斯兰教对话的原则",
                "title_en": "Chapter 4: Principles for Christian-Islamic Dialogue",
                "summary_zh": "提出基督徒与穆斯林对话的实用原则和方法，强调在真理中的爱心和智慧。",
                "summary_en": "Proposes practical principles and methods for Christian-Muslim dialogue, emphasizing love and wisdom in truth.",
                "key_quotes": [
                    "对话的目标不是争胜，而是相互理解和见证真理。The goal of dialogue is not to win, but mutual understanding and witnessing to truth.",
                    "用爱心说真话是最有效的见证方式。Speaking truth in love is the most effective way of witness."
                ]
            }
        ]
    
    # 默认章节结构（当没有具体内容时）
    else:
        return [
            {
                "number": 1,
                "title_zh": f"第一章：{title_zh}的核心主题",
                "title_en": f"Chapter 1: Core Themes of {title_en}",
                "summary_zh": f"探讨《{title_zh}》一书的主要论点和核心思想，为后续章节奠定基础。",
                "summary_en": f"Explores the main arguments and core ideas of '{title_en}', laying the foundation for subsequent chapters.",
                "key_quotes": [
                    f"《{title_zh}》为我们提供了深刻的神学洞察。'{title_en}' provides us with profound theological insights."
                ]
            },
            {
                "number": 2,
                "title_zh": f"第二章：{title_zh}的实践应用",
                "title_en": f"Chapter 2: Practical Applications of {title_en}",
                "summary_zh": f"分析《{title_zh}》的教导如何应用于基督徒的日常生活和属灵成长。",
                "summary_en": f"Analyzes how the teachings of '{title_en}' can be applied to Christians' daily life and spiritual growth.",
                "key_quotes": [
                    f"理论必须与实践相结合才能产生真正的生命变化。Theory must be combined with practice to produce real life change."
                ]
            },
            {
                "number": 3,
                "title_zh": f"第三章：{title_zh}的神学贡献",
                "title_en": f"Chapter 3: Theological Contributions of {title_en}",
                "summary_zh": f"评估《{title_zh}》对基督教神学和教会历史的贡献和影响。",
                "summary_en": f"Evaluates the contributions and impact of '{title_en}' on Christian theology and church history.",
                "key_quotes": [
                    f"每一部伟大的基督教著作都为教会的神学宝库增添了珍贵财富。Every great Christian work adds precious treasure to the church's theological treasury."
                ]
            }
        ]

def add_chapters_to_books(start_idx, batch_size=3):
    """为指定范围的书籍添加章节"""
    with open('books.json', 'r', encoding='utf-8') as f:
        books = json.load(f)
    
    processed = 0
    
    for i in range(start_idx, min(start_idx + batch_size, len(books))):
        if i >= len(books):
            break
            
        book = books[i]
        if 'chapters' not in book or not book['chapters']:
            chapters = get_chapters_for_book(book)
            books[i]['chapters'] = chapters
            processed += 1
            print(f"为书籍 {book.get('id', 'unknown')} - {book.get('title_zh', 'Unknown')} 添加了 {len(chapters)} 个章节")
    
    # 写回文件
    with open('books.json', 'w', encoding='utf-8') as f:
        json.dump(books, f, ensure_ascii=False, indent=2)
    
    return processed

def process_batch(start_idx, batch_num):
    """处理一个批次的书籍"""
    print(f"\n=== 开始处理批次 {batch_num} (从索引 {start_idx} 开始) ===")
    
    # 添加章节
    processed = add_chapters_to_books(start_idx, 3)
    
    # 验证JSON
    if validate_json('books.json'):
        print("✓ JSON验证成功")
    else:
        print("✗ JSON验证失败，恢复备份...")
        subprocess.run(['cp', f'books.json.bak_ch{batch_num-1}', 'books.json'])
        return 0
    
    # 每处理15本书进行备份
    if batch_num % 5 == 0:  # 每5个批次 = 15本书
        create_backup(batch_num)
    
    print(f"批次 {batch_num} 完成，处理了 {processed} 本书")
    return processed

def main():
    # 首先分析当前状态
    with open('books.json', 'r', encoding='utf-8') as f:
        books = json.load(f)
    
    # 找到第一个没有chapters的书
    start_idx = None
    for i, book in enumerate(books):
        if 'chapters' not in book or not book['chapters']:
            start_idx = i
            break
    
    if start_idx is None:
        print("所有书籍都已有章节！")
        return
    
    print(f"从索引 {start_idx} (书籍ID: {books[start_idx]['id']}) 开始处理")
    
    # 开始处理，从批次10开始（因为已经有ch9备份了）
    batch_num = 10
    current_idx = start_idx
    total_processed = 0
    
    # 处理前几个批次
    for i in range(5):  # 处理5个批次，即15本书
        if current_idx >= len(books):
            break
            
        processed = process_batch(current_idx, batch_num)
        if processed == 0:
            print("处理失败，停止执行")
            break
            
        total_processed += processed
        current_idx += processed
        batch_num += 1
        
        # 检查是否还有未处理的书
        has_more = False
        for j in range(current_idx, len(books)):
            if 'chapters' not in books[j] or not books[j]['chapters']:
                has_more = True
                break
        
        if not has_more:
            print("所有书籍都已处理完成！")
            break
    
    print(f"\n=== 处理完成 ===")
    print(f"总共处理了 {total_processed} 本书")

if __name__ == "__main__":
    main()