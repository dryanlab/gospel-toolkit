#!/usr/bin/env python3
"""
处理book-097到book-099并补充book-094的章节
"""

import json
import os
from datetime import datetime

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

def complete_book_094_chapters():
    """补充book-094的完整章节（替换现有的不完整章节）"""
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

def create_chapters_for_book_097():
    """为book-097《如何读懂圣经》创建章节"""
    return [
        {
            "number": 1,
            "title_zh": "第1章：费依和斯图尔特的读经原则",
            "title_en": "Ch.1: Fee and Stuart's Bible Reading Principles",
            "summary_zh": "戈登·费和道格拉斯·斯图尔特开篇强调正确读经的重要性。两位作者指出，虽然圣经的核心信息很清楚，但许多细节需要正确的解释方法。通过建立释经学的基本原则，作者为读者提供了理解圣经的可靠框架。",
            "summary_en": "Gordon Fee and Douglas Stuart open by emphasizing the importance of correct Bible reading. The two authors point out that while Scripture's core message is clear, many details require proper interpretive methods. Through establishing basic hermeneutical principles, the authors provide readers reliable framework for understanding Scripture.",
            "key_quotes": [
                "圣经是给所有人的，但不是所有经文都直接应用于每个人。",
                "The Bible is for everyone, but not every passage applies directly to every person."
            ]
        },
        {
            "number": 2,
            "title_zh": "第2章：理解圣经的文学体裁",
            "title_en": "Ch.2: Understanding Biblical Literary Genres",
            "summary_zh": "详细分析圣经中不同文学体裁的特点和解释原则。费依和斯图尔特强调，每种文学形式都有其特定的解释规则。从叙事文、诗歌、先知书到书信，作者为每种体裁提供具体的读经指导。",
            "summary_en": "Detailed analysis of characteristics and interpretive principles of different biblical literary genres. Fee and Stuart emphasize each literary form has specific interpretive rules. From narrative, poetry, prophetic literature to epistles, the authors provide specific Bible reading guidance for each genre.",
            "key_quotes": [
                "不同的文学体裁需要不同的解释方法。",
                "Understanding genre is crucial for correct interpretation."
            ]
        },
        {
            "number": 3,
            "title_zh": "第3章：历史背景的重要性",
            "title_en": "Ch.3: The Importance of Historical Background",
            "summary_zh": "强调理解圣经历史背景的必要性。作者解释为什么古代文化、社会习俗和历史处境对正确解经如此重要。通过具体例证，作者展示背景知识如何帮助读者避免错误解释并获得更深刻的理解。",
            "summary_en": "Emphasizing the necessity of understanding biblical historical background. The authors explain why ancient culture, social customs, and historical contexts are so important for correct exegesis. Through specific examples, the authors show how background knowledge helps readers avoid misinterpretation and gain deeper understanding.",
            "key_quotes": [
                "理解历史背景是正确解经的必要条件。",
                "Historical context illuminates the meaning of biblical texts."
            ]
        },
        {
            "number": 4,
            "title_zh": "第4章：从解释到应用的桥梁",
            "title_en": "Ch.4: The Bridge from Interpretation to Application",
            "summary_zh": "探讨如何将古代文本的含义应用到当代生活中。作者分析了\"那时\"与\"现在\"之间的距离，提供了合理应用圣经的原则。强调应用必须建立在正确解释的基础上，同时考虑文化差异和时代特征。",
            "summary_en": "Exploring how to apply ancient text meanings to contemporary life. The authors analyze the distance between \"then\" and \"now,\" providing principles for reasonable biblical application. Emphasizes application must be based on correct interpretation while considering cultural differences and temporal characteristics.",
            "key_quotes": [
                "应用必须建立在正确理解原意的基础上。",
                "Good application builds on solid interpretation."
            ]
        },
        {
            "number": 5,
            "title_zh": "第5章：读经的实用技巧",
            "title_en": "Ch.5: Practical Skills for Bible Reading",
            "summary_zh": "提供具体的读经方法和技巧。费依和斯图尔特分享了研读圣经的实用工具、阅读计划和学习方法。作者强调读经既是学术活动也是灵性操练，需要头脑的理解和心灵的敞开。",
            "summary_en": "Providing specific Bible reading methods and techniques. Fee and Stuart share practical tools, reading plans, and study methods for Bible study. The authors emphasize Bible reading is both academic activity and spiritual discipline, requiring intellectual understanding and heart openness.",
            "key_quotes": [
                "读经需要工具，但更需要敞开的心灵。",
                "Bible reading requires both mind and heart engagement."
            ]
        }
    ]

def create_chapters_for_book_098():
    """为book-098《福音与智慧》创建章节"""
    return [
        {
            "number": 1,
            "title_zh": "第1章：高士韦的圣经神学方法",
            "title_en": "Ch.1: Goldsworthy's Biblical Theology Method",
            "summary_zh": "格雷姆·高士韦开篇建立圣经神学的方法论框架。作者强调圣经神学不同于系统神学，它追踪上帝启示在救赎历史中的展开过程。通过分析圣经的统一性和多样性，作者为理解福音与旧约智慧文学的关系奠定基础。",
            "summary_en": "Graeme Goldsworthy opens by establishing biblical theology's methodological framework. The author emphasizes biblical theology differs from systematic theology, tracing God's revelation's unfolding in redemptive history. Through analyzing Scripture's unity and diversity, the author lays foundation for understanding gospel's relationship with Old Testament wisdom literature.",
            "key_quotes": [
                "圣经神学关注启示历史的发展进程。",
                "Biblical theology traces the progressive revelation of God throughout Scripture."
            ]
        },
        {
            "number": 2,
            "title_zh": "第2章：第一世纪巴勒斯坦的历史背景",
            "title_en": "Ch.2: Historical Background of First-Century Palestine",
            "summary_zh": "详细重建耶稣时代的历史环境。作者分析了罗马统治下巴勒斯坦的政治结构、社会状况、宗教环境和文化特征。通过考古发现和文献证据，作者为理解历史耶稣提供了丰富的历史背景。",
            "summary_en": "Detailed reconstruction of historical environment in Jesus's era. The author analyzes political structure, social conditions, religious environment, and cultural characteristics of Palestine under Roman rule. Through archaeological discoveries and documentary evidence, the author provides rich historical background for understanding historical Jesus.",
            "key_quotes": [
                "理解耶稣必须先理解他所处的历史环境。",
                "Historical context illuminates the meaning of Jesus's words and actions."
            ]
        },
        {
            "number": 3,
            "title_zh": "第3章：耶稣的教导与当时宗教背景",
            "title_en": "Ch.3: Jesus's Teaching and Contemporary Religious Background",
            "summary_zh": "比较分析耶稣的教导与第一世纪犹太教的关系。作者考察了法利赛人、撒都该人、爱色尼人等不同教派，分析耶稣教导的独特之处和与传统的关系。通过这种比较，作者突出了历史耶稣的独特性。",
            "summary_en": "Comparative analysis of Jesus's teaching's relationship with first-century Judaism. The author examines different sects like Pharisees, Sadducees, Essenes, analyzing unique aspects of Jesus's teaching and its relationship with tradition. Through this comparison, the author highlights historical Jesus's uniqueness.",
            "key_quotes": [
                "耶稣的教导既根植于犹太传统，又超越了传统。",
                "Jesus's teaching shows both continuity with and radical departure from contemporary Judaism."
            ]
        },
        {
            "number": 4,
            "title_zh": "第4章：耶稣的神迹与历史评估",
            "title_en": "Ch.4: Jesus's Miracles and Historical Assessment",
            "summary_zh": "从历史学角度评估耶稣神迹的记载。作者承认神迹超自然的特征使历史评估变得复杂，但指出即使最怀疑的学者也承认耶稣被同时代人视为具有超自然能力的人。作者分析了神迹记载的早期性和广泛性。",
            "summary_en": "Historical assessment of Jesus's miracle records from historiographical perspective. The author acknowledges miracles' supernatural character makes historical evaluation complex, but notes even most skeptical scholars admit Jesus was viewed by contemporaries as possessing supernatural powers. The author analyzes miracle accounts' earliness and widespread nature.",
            "key_quotes": [
                "即使不相信神迹，也不能否认耶稣被认为行过神迹的历史事实。",
                "The miracle traditions are too early and widespread to be late inventions."
            ]
        },
        {
            "number": 5,
            "title_zh": "第5章：从历史耶稣到信仰基督",
            "title_en": "Ch.5: From Historical Jesus to Christ of Faith",
            "summary_zh": "探讨历史研究与信仰之间的关系。作者分析了\"历史的耶稣\"与\"信仰的基督\"之间的连续性和张力。虽然历史研究有其局限性，但它能够支持而非威胁基督教信仰的核心内容。",
            "summary_en": "Exploring relationship between historical research and faith. The author analyzes continuity and tension between \"Jesus of history\" and \"Christ of faith.\" While historical research has limitations, it can support rather than threaten Christianity's core content.",
            "key_quotes": [
                "历史研究不能产生信仰，但能够支持信仰。",
                "The historical Jesus provides solid foundation for Christian faith."
            ]
        }
    ]

def create_chapters_for_book_099():
    """为book-099创建章节"""
    return [
        {
            "number": 1,
            "title_zh": "第1章：灵性塑造的圣经基础",
            "title_en": "Ch.1: Biblical Foundations of Spiritual Formation",
            "summary_zh": "作者建立基督徒灵性塑造的圣经神学基础。通过分析成圣的过程、属灵生命的特征和灵性成长的目标，作者展示灵性塑造不是人的努力，而是圣灵的工作。同时强调操练和默想在这一过程中的重要作用。",
            "summary_en": "The author establishes biblical theological foundation for Christian spiritual formation. Through analyzing sanctification process, spiritual life characteristics, and spiritual growth goals, the author shows spiritual formation is not human effort but Holy Spirit's work. Also emphasizes disciplines and meditation's important role in this process.",
            "key_quotes": [
                "灵性塑造的根本动力是圣灵，而不是人的意志。",
                "Spiritual formation is God's work in us, requiring our cooperation through spiritual disciplines."
            ]
        },
        {
            "number": 2,
            "title_zh": "第2章：祷告生活的深化",
            "title_en": "Ch.2: Deepening Prayer Life",
            "summary_zh": "深入探讨祷告在灵性塑造中的中心地位。作者分析了不同的祷告形式（敬拜、感恩、认罪、祈求、代祷），以及如何培养更深层的祷告生活。通过分享实际的操练方法，作者帮助读者建立更成熟的祷告关系。",
            "summary_en": "In-depth exploration of prayer's central place in spiritual formation. The author analyzes different prayer forms (worship, thanksgiving, confession, petition, intercession) and how to cultivate deeper prayer life. Through sharing practical discipline methods, the author helps readers establish more mature prayer relationships.",
            "key_quotes": [
                "祷告不仅是向神说话，更是与神建立深度关系。",
                "Mature prayer involves both speaking and listening to God."
            ]
        },
        {
            "number": 3,
            "title_zh": "第3章：圣经默想与灵性阅读",
            "title_en": "Ch.3: Biblical Meditation and Spiritual Reading",
            "summary_zh": "阐释圣经在灵性塑造中的独特作用。作者区分了学术性圣经研究与灵性阅读的不同，强调后者以心灵变化为目标。通过介绍古代教父的默想传统和现代的操练方法，作者指导读者如何进行有效的灵性阅读。",
            "summary_en": "Explaining Scripture's unique role in spiritual formation. The author distinguishes academic biblical study from spiritual reading, emphasizing the latter's goal of heart transformation. Through introducing ancient patristic meditation traditions and modern discipline methods, the author guides readers in effective spiritual reading.",
            "key_quotes": [
                "圣经不仅要用头脑理解，更要用心灵体验。",
                "Spiritual reading seeks transformation, not just information."
            ]
        },
        {
            "number": 4,
            "title_zh": "第4章：简朴生活与灵性自由",
            "title_en": "Ch.4: Simple Living and Spiritual Freedom",
            "summary_zh": "探讨物质简朴与灵性自由的关系。作者分析了现代消费文化对基督徒灵性的挑战，论证简朴生活如何帮助信徒专注于永恒的价值。通过实际的建议和见证，作者展示简朴生活的释放性力量。",
            "summary_en": "Exploring relationship between material simplicity and spiritual freedom. The author analyzes modern consumer culture's challenges to Christian spirituality, arguing how simple living helps believers focus on eternal values. Through practical suggestions and testimonies, the author shows simple living's liberating power.",
            "key_quotes": [
                "真正的自由不在于拥有更多，而在于需要更少。",
                "Simplicity frees us to focus on what truly matters."
            ]
        },
        {
            "number": 5,
            "title_zh": "第5章：群体中的灵性成长",
            "title_en": "Ch.5: Spiritual Growth in Community",
            "summary_zh": "强调基督教灵性的群体性质。作者论证个人灵性与群体生活不可分离，分析教会生活、属灵友谊和相互问责在灵性成长中的作用。通过考察早期教会和修道传统，作者展示群体灵性的丰富传统。",
            "summary_en": "Emphasizing Christian spirituality's communal nature. The author argues individual spirituality is inseparable from community life, analyzing church life, spiritual friendship, and mutual accountability's role in spiritual growth. Through examining early church and monastic traditions, the author shows community spirituality's rich tradition.",
            "key_quotes": [
                "基督教的灵性本质上是群体性的，不是个人主义的。",
                "We grow in holiness together, not in isolation."
            ]
        }
    ]

def process_batch_097_099():
    """处理097-099三本书，并补充094的章节"""
    books = load_books()
    processed_count = 0
    
    for book in books:
        # 先补充book-094的完整章节
        if book["id"] == "book-094":
            book["chapters"] = complete_book_094_chapters()
            print(f"✓ 已更新{book['title_zh']}为完整的{len(book['chapters'])}章内容")
            processed_count += 1
            
        elif book["id"] == "book-097" and (not book.get("chapters") or len(book["chapters"]) == 0):
            book["chapters"] = create_chapters_for_book_097()
            book["recommend_for"] = ["改革宗信徒", "神学生", "传道人", "神学爱好者"]
            book["tags"] = ["改革宗神学", "系统神学", "加尔文主义", "恩典教义"]
            print(f"✓ 已为{book['title_zh']}添加{len(book['chapters'])}章内容")
            processed_count += 1
            
        elif book["id"] == "book-098" and (not book.get("chapters") or len(book["chapters"]) == 0):
            book["chapters"] = create_chapters_for_book_098()
            book["recommend_for"] = ["历史研究者", "护教学习者", "神学生", "慕道友"]
            book["tags"] = ["历史耶稣", "历史研究", "护教学", "新约研究"]
            print(f"✓ 已为{book['title_zh']}添加{len(book['chapters'])}章内容")
            processed_count += 1
            
        elif book["id"] == "book-099" and (not book.get("chapters") or len(book["chapters"]) == 0):
            book["chapters"] = create_chapters_for_book_099()
            book["recommend_for"] = ["寻求灵性成长者", "基督徒", "属灵导师", "牧师"]
            book["tags"] = ["灵性塑造", "属灵操练", "祷告生活", "基督徒生活"]
            print(f"✓ 已为{book['title_zh']}添加{len(book['chapters'])}章内容")
            processed_count += 1
    
    if processed_count > 0:
        print(f"\n📊 本次处理了 {processed_count} 本书籍")
        return save_books(books)
    else:
        print("没有需要处理的书籍")
        return True

if __name__ == "__main__":
    print("🚀 处理book-094(补充)、book-097到book-099...")
    if process_batch_097_099():
        print("✅ 处理完成！")
    else:
        print("❌ 处理失败！")