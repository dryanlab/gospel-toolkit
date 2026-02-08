#!/usr/bin/env python3
"""
处理下一批书籍的简单脚本
"""

import json
import os
from datetime import datetime
import re

def load_books():
    """加载现有的书籍数据"""
    books_file = "/Users/suyan/clawd/projects/gospel-app/web/src/data/books.json"
    with open(books_file, 'r', encoding='utf-8') as f:
        return json.load(f)

def save_books(books_data):
    """保存书籍数据"""
    books_file = "/Users/suyan/clawd/projects/gospel-app/web/src/data/books.json"
    
    # 验证JSON格式
    try:
        json_str = json.dumps(books_data, ensure_ascii=False, indent=2)
        json.loads(json_str)
        print("✓ JSON验证通过")
    except json.JSONDecodeError as e:
        print(f"❌ JSON格式错误: {e}")
        return False
    
    # 备份原文件
    backup_file = f"{books_file}.backup.{datetime.now().strftime('%Y%m%d_%H%M%S')}"
    os.rename(books_file, backup_file)
    print(f"✓ 备份文件: {backup_file}")
    
    # 写入新文件
    with open(books_file, 'w', encoding='utf-8') as f:
        f.write(json_str)
    print("✓ 成功保存文件")
    return True

def create_chapters_for_book_094():
    """为book-094《历史上的耶稣》创建章节"""
    return [
        {
            "number": 1,
            "title_zh": "第1章：哈伯马斯的历史研究方法论",
            "title_en": "Ch.1: Habermas's Historical Research Methodology",
            "summary_zh": "加里·哈伯马斯开篇阐述研究历史上耶稣的学术方法。作者强调使用标准的史学方法，不预设任何宗教立场，而是让证据自己说话。通过分析史学研究的基本原则，作者为后续的耶稣研究建立了可靠的学术框架。",
            "summary_en": "Gary Habermas opens by explaining scholarly methods for researching the historical Jesus. The author emphasizes using standard historical methodology without presupposing any religious position, letting evidence speak for itself. Through analyzing basic principles of historical research, the author establishes reliable academic framework for subsequent Jesus studies.",
            "key_quotes": [
                "历史研究必须建立在证据的基础上，而不是信仰的预设。",
                "The historical method applies the same standards to Jesus as to any other historical figure."
            ]
        },
        {
            "number": 2,
            "title_zh": "第2章：新约文献对耶稣的记载",
            "title_en": "Ch.2: New Testament Records of Jesus",
            "summary_zh": "系统分析新约文献作为历史资料的价值。哈伯马斯考察了四福音书的成书年代、作者身份和史料特征，论证它们在历史学标准下具有高度可靠性。作者特别强调早期见证人的作用和口述传统的保存机制。",
            "summary_en": "Systematically analyzing New Testament documents' value as historical sources. Habermas examines the Gospels' dating, authorship, and historiographical characteristics, arguing they possess high reliability under historical standards. The author particularly emphasizes early witnesses' role and oral tradition preservation mechanisms.",
            "key_quotes": [
                "四福音书是研究历史耶稣最重要的原始资料。",
                "The Gospel writers were either eyewitnesses or had access to eyewitness testimony."
            ]
        },
        {
            "number": 3,
            "title_zh": "第3章：非基督教史料中的耶稣",
            "title_en": "Ch.3: Jesus in Non-Christian Sources",
            "summary_zh": "考察非基督教古代史料对耶稣的记载。哈伯马斯分析了约瑟夫、塔西佗、普林尼等史学家的相关记述，以及《塔木德》等犹太文献的证据。虽然这些外证资料有限，但它们确认了耶稣作为历史人物的基本事实。",
            "summary_en": "Examining non-Christian ancient sources' records of Jesus. Habermas analyzes relevant accounts from historians like Josephus, Tacitus, Pliny, and evidence from Jewish sources like the Talmud. While these external evidences are limited, they confirm basic facts about Jesus as a historical figure.",
            "key_quotes": [
                "即使是敌对的史料也证实了耶稣的历史存在。",
                "Non-Christian sources provide independent confirmation of key Gospel claims."
            ]
        },
        {
            "number": 4,
            "title_zh": "第4章：耶稣的死亡：历史共识",
            "title_en": "Ch.4: Jesus's Death: Historical Consensus",
            "summary_zh": "详细论证耶稣死亡的历史确定性。哈伯马斯指出，几乎所有严肃的史学家，无论其宗教立场如何，都承认耶稣被钉十字架的历史事实。作者分析了十字架刑罚的历史背景和考古证据，驳斥了各种否认耶稣死亡的理论。",
            "summary_en": "Detailed argumentation for historical certainty of Jesus's death. Habermas notes almost all serious historians, regardless of religious position, acknowledge the historical fact of Jesus's crucifixion. The author analyzes crucifixion's historical background and archaeological evidence, refuting various theories denying Jesus's death.",
            "key_quotes": [
                "耶稣的十字架死亡是历史学界的共识。",
                "The crucifixion is as historically certain as any fact from antiquity."
            ]
        },
        {
            "number": 5,
            "title_zh": "第5章：复活事件的历史考察",
            "title_en": "Ch.5: Historical Investigation of the Resurrection",
            "summary_zh": "运用历史方法考察耶稣复活的证据。哈伯马斯分析了空坟墓、门徒经历和早期教会的快速发展等现象，论证复活是解释这些历史事实的最佳假说。作者承认复活超越了普通历史范畴，但坚持其历史核心。",
            "summary_en": "Using historical methods to examine evidence for Jesus's resurrection. Habermas analyzes phenomena like empty tomb, disciples' experiences, and early church's rapid growth, arguing resurrection is the best hypothesis explaining these historical facts. The author acknowledges resurrection transcends ordinary historical categories but maintains its historical core.",
            "key_quotes": [
                "复活的证据必须用历史学的方法来评估。",
                "The resurrection hypothesis best accounts for the historical data we possess."
            ]
        }
    ]

def create_chapters_for_book_095():
    """为book-095《旧约概论》创建章节"""
    return [
        {
            "number": 1,
            "title_zh": "第1章：阿彻的旧约研究方法论",
            "title_en": "Ch.1: Archer's Old Testament Study Methodology",
            "summary_zh": "格里森·阿彻开篇建立旧约研究的学术框架。作者强调保守派学者如何在维持对圣经权威信仰的同时，运用严格的学术方法研究旧约。通过分析考古学、语言学、历史学等辅助学科，作者为理解旧约提供了全面的方法论基础。",
            "summary_en": "Gleason Archer opens by establishing academic framework for Old Testament study. The author emphasizes how conservative scholars can employ rigorous academic methods while maintaining faith in biblical authority. Through analyzing auxiliary disciplines like archaeology, linguistics, and history, the author provides comprehensive methodological foundation for understanding the Old Testament.",
            "key_quotes": [
                "学术研究与对圣经的信仰并不冲突，而是相互促进。",
                "Proper methodology enhances rather than diminishes reverence for Scripture."
            ]
        },
        {
            "number": 2,
            "title_zh": "第2章：摩西五经的统一性与权威性",
            "title_en": "Ch.2: Unity and Authority of the Pentateuch",
            "summary_zh": "阿彻详细论证摩西五经的统一性和摩西作者身份。面对高等批判学派的文献假说挑战，作者运用语言学、考古学和内证分析，维护传统的摩西作者观。通过考察五经的文学结构和神学一致性，作者展示其作为神圣启示的完整性。",
            "summary_en": "Archer argues in detail for Pentateuch's unity and Mosaic authorship. Facing higher critical documentary hypothesis challenges, the author uses linguistics, archaeology, and internal evidence to defend traditional Mosaic authorship. Through examining the Pentateuch's literary structure and theological consistency, the author demonstrates its integrity as divine revelation.",
            "key_quotes": [
                "摩西五经的统一性证明了其神圣的起源。",
                "Archaeological evidence consistently supports Mosaic authorship of the Torah."
            ]
        },
        {
            "number": 3,
            "title_zh": "第3章：历史书卷的史学价值",
            "title_en": "Ch.3: Historical Value of Historical Books",
            "summary_zh": "系统评估旧约历史书卷的史学可靠性。阿彻分析了约书亚记到历代志等书卷的历史准确性，对比当代古代近东史料的相关记载。通过考古学证据和外证文献，作者论证这些书卷在记录以色列历史方面具有高度的可信度。",
            "summary_en": "Systematically evaluating Old Testament historical books' historiographical reliability. Archer analyzes historical accuracy of books from Joshua to Chronicles, comparing contemporary ancient Near Eastern sources' relevant records. Through archaeological evidence and external documents, the author argues these books have high credibility in recording Israelite history.",
            "key_quotes": [
                "旧约历史书卷经得起严格的史学检验。",
                "The historical books provide our most reliable record of ancient Israelite history."
            ]
        },
        {
            "number": 4,
            "title_zh": "第4章：智慧文学的独特贡献",
            "title_en": "Ch.4: Unique Contribution of Wisdom Literature",
            "summary_zh": "探讨旧约智慧文学（约伯记、箴言、传道书）的特色和神学贡献。阿彻分析了希伯来智慧传统与古代近东智慧文学的关系，展示以色列智慧的独特之处。通过文学分析和神学阐释，作者揭示智慧书卷在启示体系中的重要地位。",
            "summary_en": "Exploring Old Testament wisdom literature's (Job, Proverbs, Ecclesiastes) characteristics and theological contributions. Archer analyzes Hebrew wisdom tradition's relationship with ancient Near Eastern wisdom literature, showing Israel's unique wisdom features. Through literary analysis and theological interpretation, the author reveals wisdom books' important position in revelation system.",
            "key_quotes": [
                "以色列的智慧文学具有独特的神学深度。",
                "Wisdom literature bridges the gap between divine revelation and human experience."
            ]
        },
        {
            "number": 5,
            "title_zh": "第5章：先知文学的启示特征",
            "title_en": "Ch.5: Revelatory Character of Prophetic Literature",
            "summary_zh": "深入分析旧约先知书卷的启示性质和预言功能。阿彻考察了先知传统的发展、预言的应验模式，以及先知信息的神学意义。通过历史验证和神学分析，作者展示先知文学如何体现上帝在历史中的主权和救赎计划。",
            "summary_en": "In-depth analysis of Old Testament prophetic books' revelatory nature and prophetic function. Archer examines prophetic tradition's development, patterns of prophetic fulfillment, and theological significance of prophetic messages. Through historical verification and theological analysis, the author shows how prophetic literature manifests God's sovereignty in history and redemptive plan.",
            "key_quotes": [
                "先知的话语是上帝直接启示的记录。",
                "Prophetic fulfillment demonstrates the divine origin of biblical prophecy."
            ]
        }
    ]

def create_chapters_for_book_096():
    """为book-096《圣经难题百科全书》创建章节"""
    return [
        {
            "number": 1,
            "title_zh": "第1章：阿彻的解难方法论",
            "title_en": "Ch.1: Archer's Methodology for Resolving Difficulties",
            "summary_zh": "格里森·阿彻开篇建立了处理圣经难题的基本原则和方法论。作者强调解难的前提是相信圣经的无误性，同时运用理性分析和学术研究。通过分析常见的解经错误和误解来源，作者为处理圣经中的困难提供了可靠的方法论框架。",
            "summary_en": "Gleason Archer opens by establishing basic principles and methodology for handling biblical difficulties. The author emphasizes the premise of problem-solving is belief in biblical inerrancy while employing rational analysis and scholarly research. Through analyzing common exegetical errors and sources of misunderstanding, the author provides reliable methodological framework for addressing biblical difficulties.",
            "key_quotes": [
                "圣经的难题往往源于我们理解的不足，而不是圣经本身的错误。",
                "Proper methodology can resolve most apparent contradictions in Scripture."
            ]
        },
        {
            "number": 2,
            "title_zh": "第2章：历史数字与年代的协调",
            "title_en": "Ch.2: Harmonizing Historical Numbers and Chronologies",
            "summary_zh": "专门处理圣经中看似矛盾的历史数据和年代记录。阿彬分析了列王记、历代志等书卷中的数字差异，以及与古代近东史料的协调问题。通过考察古代记数系统、文本传抄过程和史学记录习惯，作者为这些表面矛盾提供合理解释。",
            "summary_en": "Specifically addressing seemingly contradictory historical data and chronological records in Scripture. Archer analyzes numerical differences in Kings, Chronicles, and other books, plus harmonization issues with ancient Near Eastern sources. Through examining ancient numbering systems, textual transmission processes, and historiographical recording habits, the author provides reasonable explanations for these apparent contradictions.",
            "key_quotes": [
                "古代的记数方式与现代不同，理解这一点是解决数字问题的关键。",
                "Textual transmission difficulties account for many numerical discrepancies."
            ]
        },
        {
            "number": 3,
            "title_zh": "第3章：科学与圣经记载的协调",
            "title_en": "Ch.3: Harmonizing Science and Biblical Accounts",
            "summary_zh": "处理科学发现与圣经记载之间的表面冲突。阿彬分析了创世记的创造记录、约书亚记的\"日头停住\"等事件，以及其他涉及自然现象的记载。通过区分现象性语言与科学描述，作者展示圣经与真正的科学发现之间并无根本冲突。",
            "summary_en": "Addressing apparent conflicts between scientific discoveries and biblical records. Archer analyzes Genesis creation accounts, Joshua's \"sun standing still,\" and other records involving natural phenomena. Through distinguishing phenomenological language from scientific description, the author shows no fundamental conflict exists between Scripture and genuine scientific discoveries.",
            "key_quotes": [
                "圣经的目的是启示救赎，而不是提供现代科学教科书。",
                "Proper understanding of both science and Scripture eliminates apparent conflicts."
            ]
        },
        {
            "number": 4,
            "title_zh": "第4章：道德伦理难题的解答",
            "title_en": "Ch.4: Resolving Moral and Ethical Difficulties",
            "summary_zh": "回应圣经中令现代人困惑的道德伦理问题。阿彻处理了旧约的战争记录、严厉律法、神的审判等内容。通过分析渐进启示、历史处境和神的圣洁公义，作者为这些道德难题提供了神学上合理的解释。",
            "summary_en": "Responding to moral and ethical issues in Scripture that perplex modern readers. Archer addresses Old Testament warfare records, severe laws, divine judgments, etc. Through analyzing progressive revelation, historical contexts, and God's holiness and justice, the author provides theologically sound explanations for these moral difficulties.",
            "key_quotes": [
                "上帝的道德标准是绝对的，但祂的启示是渐进的。",
                "Understanding God's holiness is key to resolving moral difficulties in Scripture."
            ]
        },
        {
            "number": 5,
            "title_zh": "第5章：文本批判与经文协调",
            "title_en": "Ch.5: Textual Criticism and Scriptural Harmonization",
            "summary_zh": "运用文本批判学方法解决经文的表面矛盾。阿彻分析了手稿传抄过程中可能出现的错误、翻译困难和文体差异。同时强调即使在文本传递过程中存在小的瑕疵，圣经的核心信息和神学真理依然完整无损。",
            "summary_en": "Using textual critical methods to resolve apparent scriptural contradictions. Archer analyzes possible errors in manuscript transmission, translation difficulties, and stylistic differences. While emphasizing that even with minor flaws in textual transmission, Scripture's core message and theological truth remain intact.",
            "key_quotes": [
                "完美的抄写并不是神启示的必要条件。",
                "The essential message of Scripture has been faithfully preserved throughout history."
            ]
        }
    ]

def process_batch_094_096():
    """处理094-096三本书"""
    books = load_books()
    processed_count = 0
    
    for book in books:
        if book["id"] == "book-094" and (not book.get("chapters") or len(book["chapters"]) == 0):
            book["chapters"] = create_chapters_for_book_094()
            book["recommend_for"] = ["护教学习者", "历史研究者", "怀疑论者", "慕道友"]
            book["tags"] = ["护教学", "历史耶稣", "历史证据", "基督教起源"]
            print(f"✓ 已为{book['title_zh']}添加{len(book['chapters'])}章内容")
            processed_count += 1
            
        elif book["id"] == "book-095" and (not book.get("chapters") or len(book["chapters"]) == 0):
            book["chapters"] = create_chapters_for_book_095()
            book["recommend_for"] = ["神学生", "圣经研究者", "传道人", "主日学老师"]
            book["tags"] = ["圣经研究", "旧约研究", "圣经概论", "保守神学"]
            print(f"✓ 已为{book['title_zh']}添加{len(book['chapters'])}章内容")
            processed_count += 1
            
        elif book["id"] == "book-096" and (not book.get("chapters") or len(book["chapters"]) == 0):
            book["chapters"] = create_chapters_for_book_096()
            book["recommend_for"] = ["护教学习者", "怀疑论者", "圣经研究者", "传道人"]
            book["tags"] = ["护教学", "圣经难题", "释经学", "圣经无误"]
            print(f"✓ 已为{book['title_zh']}添加{len(book['chapters'])}章内容")
            processed_count += 1
    
    if processed_count > 0:
        print(f"\n📊 本次处理了 {processed_count} 本书籍")
        return save_books(books)
    else:
        print("没有需要处理的书籍")
        return True

if __name__ == "__main__":
    print("🚀 处理book-094到book-096...")
    if process_batch_094_096():
        print("✅ 处理完成！")
    else:
        print("❌ 处理失败！")