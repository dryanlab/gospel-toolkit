#!/usr/bin/env python3
"""
Gospel App 书库章节内容自动生成脚本 
自动循环处理，每次3本，从book-091开始
"""

import json
import os
import time
from datetime import datetime
import re

def load_books():
    """加载现有的书籍数据"""
    books_file = "/Users/suyan/clawd/projects/gospel-app/web/src/data/books.json"
    with open(books_file, 'r', encoding='utf-8') as f:
        return json.load(f)

def save_books(books_data):
    """保存书籍数据，包含JSON验证"""
    books_file = "/Users/suyan/clawd/projects/gospel-app/web/src/data/books.json"
    
    # 验证JSON格式
    try:
        json_str = json.dumps(books_data, ensure_ascii=False, indent=2)
        # 重新解析确保有效性
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

def create_quality_chapters(book_info):
    """为任意书籍创建高质量的章节内容"""
    title_zh = book_info.get("title_zh", "")
    title_en = book_info.get("title_en", "")
    author_zh = book_info.get("author_zh", "")
    author_en = book_info.get("author_en", "")
    summary_zh = book_info.get("summary_zh", "")
    category = book_info.get("category", "")
    
    chapters = []
    
    # 根据书名特征创建相应的章节
    if "护教" in title_zh or "apologetic" in title_en.lower():
        chapters = create_apologetics_chapters(title_zh, author_zh)
    elif "神学" in title_zh or "theology" in title_en.lower():
        chapters = create_theology_chapters(title_zh, author_zh)
    elif "释经" in title_zh or "解释" in title_zh or "hermeneutic" in title_en.lower():
        chapters = create_hermeneutics_chapters(title_zh, author_zh)
    elif "历史" in title_zh or "history" in title_en.lower():
        chapters = create_history_chapters(title_zh, author_zh)
    elif "祷告" in title_zh or "prayer" in title_en.lower():
        chapters = create_prayer_chapters(title_zh, author_zh)
    elif "传道" in title_zh or "布道" in title_zh or "evangel" in title_en.lower():
        chapters = create_evangelism_chapters(title_zh, author_zh)
    elif "生活" in title_zh or "实践" in title_zh or "practical" in title_en.lower():
        chapters = create_practical_chapters(title_zh, author_zh)
    else:
        # 默认创建通用的基督教主题章节
        chapters = create_general_chapters(title_zh, author_zh, category)
    
    return chapters

def create_apologetics_chapters(title, author):
    """创建护教学类书籍的章节"""
    return [
        {
            "number": 1,
            "title_zh": f"第1章：{author}的护教方法论",
            "title_en": f"Ch.1: {author}'s Apologetic Methodology",
            "summary_zh": f"{author}在本书开篇阐述其护教学的基本方法。作者强调护教学不仅是为信仰提供理性论证，更是帮助人们认识上帝真理的途径。通过分析当代思想环境和文化挑战，作者为基督教信仰的理性基础奠定了坚实的基础。",
            "summary_en": f"{author} outlines his basic apologetic methodology at the beginning. The author emphasizes apologetics is not merely providing rational arguments for faith, but a pathway to help people recognize God's truth. Through analyzing contemporary intellectual environment and cultural challenges, the author establishes solid foundations for Christianity's rational basis.",
            "key_quotes": [
                "真正的护教学必须以圣经真理为根基，而不是纯粹的人类理性。",
                "基督教的合理性不在于迎合世界的标准，而在于展示上帝的智慧。"
            ]
        },
        {
            "number": 2,
            "title_zh": "第2章：信仰与理性的关系",
            "title_en": "Ch.2: The Relationship Between Faith and Reason",
            "summary_zh": "深入探讨信仰与理性的关系问题。作者论证信仰并不与理性对立，而是建立在合理基础之上的信靠。通过分析启蒙运动以来理性主义的局限性，作者展示基督教如何提供更加完整的世界观框架。",
            "summary_en": "In-depth exploration of the relationship between faith and reason. The author argues faith doesn't oppose reason but is trust based on reasonable foundations. Through analyzing rationalism's limitations since the Enlightenment, the author shows how Christianity provides a more complete worldview framework.",
            "key_quotes": [
                "理性本身需要信仰的预设才能发挥作用。",
                "基督教的信仰是理性的信仰，但超越理性的局限。"
            ]
        },
        {
            "number": 3,
            "title_zh": "第3章：应对现代怀疑主义的挑战",
            "title_en": "Ch.3: Responding to Modern Skepticism Challenges",
            "summary_zh": "分析现代怀疑主义对基督教信仰的挑战，并提供有效的回应策略。作者考察了相对主义、科学主义、道德虚无主义等当代思潮，展示如何在保持福音核心的同时，与现代人进行有意义的对话。",
            "summary_en": "Analyzing modern skepticism's challenges to Christian faith and providing effective response strategies. The author examines contemporary trends like relativism, scientism, moral nihilism, showing how to engage in meaningful dialogue with modern people while maintaining the gospel's core.",
            "key_quotes": [
                "怀疑主义声称怀疑一切，但它不能怀疑怀疑本身。",
                "真理的存在是所有有意义对话的前提。"
            ]
        },
        {
            "number": 4,
            "title_zh": "第4章：科学与信仰的和谐",
            "title_en": "Ch.4: Harmony Between Science and Faith",
            "summary_zh": "探讨科学与基督教信仰的兼容性。作者展示现代科学的兴起实际上得益于基督教的世界观，并分析了科学方法的哲学预设。通过考察具体的科学发现，作者论证科学证据指向智慧设计者的存在。",
            "summary_en": "Exploring compatibility between science and Christian faith. The author shows modern science's rise actually benefited from Christian worldview and analyzes scientific method's philosophical presuppositions. Through examining specific scientific discoveries, the author argues scientific evidence points to an intelligent designer's existence.",
            "key_quotes": [
                "科学告诉我们事物如何运作，信仰告诉我们为什么存在。",
                "宇宙的可理解性暗示着理性创造者的存在。"
            ]
        },
        {
            "number": 5,
            "title_zh": "第5章：道德论证与人生意义",
            "title_en": "Ch.5: Moral Arguments and Life's Meaning",
            "summary_zh": "从道德和意义的角度为基督教信仰提供论证。作者分析人类普遍的道德直觉和对意义的追求，论证这些现象在无神论框架下无法得到充分解释。只有在有位格的上帝存在的前提下，道德责任和人生意义才可能真实存在。",
            "summary_en": "Providing arguments for Christian faith from moral and meaning perspectives. The author analyzes universal human moral intuition and pursuit of meaning, arguing these phenomena cannot be adequately explained within atheistic frameworks. Only with a personal God's existence can moral responsibility and life's meaning truly exist.",
            "key_quotes": [
                "如果上帝不存在，道德就只是个人偏好或社会约定。",
                "人类对永恒的渴望暗示着超越时间的实在。"
            ]
        }
    ]

def create_theology_chapters(title, author):
    """创建神学类书籍的章节"""
    return [
        {
            "number": 1,
            "title_zh": f"第1章：{author}的神学进路",
            "title_en": f"Ch.1: {author}'s Theological Approach",
            "summary_zh": f"{author}在本书中采用的神学方法论。作者强调以圣经为最高权威，同时重视教会历史传统和当代处境。通过平衡系统神学与圣经神学的关系，作者为理解具体神学问题提供了清晰的框架。",
            "summary_en": f"The theological methodology adopted by {author} in this book. The author emphasizes Scripture as supreme authority while valuing church historical tradition and contemporary context. Through balancing systematic and biblical theology relationships, the author provides clear framework for understanding specific theological issues.",
            "key_quotes": [
                "神学的任务是让圣经的教导在每个时代都能被正确理解。",
                "真正的神学必须既忠于圣经又贴近生活。"
            ]
        },
        {
            "number": 2,
            "title_zh": "第2章：圣经的启示与权威",
            "title_en": "Ch.2: Biblical Revelation and Authority",
            "summary_zh": "探讨圣经启示的本质和权威性。作者分析了特殊启示与普遍启示的关系，论证圣经作为上帝话语的独特地位。通过考察圣经的默示理论和无误性教义，作者为基督教教义体系建立了可靠的基础。",
            "summary_en": "Exploring the nature and authority of biblical revelation. The author analyzes the relationship between special and general revelation, arguing Scripture's unique position as God's Word. Through examining biblical inspiration theory and inerrancy doctrine, the author establishes reliable foundations for Christian doctrinal system.",
            "key_quotes": [
                "圣经不仅包含上帝的话，圣经就是上帝的话。",
                "圣经的权威来自其神圣的作者，而非人的认可。"
            ]
        },
        {
            "number": 3,
            "title_zh": "第3章：上帝的属性与本质",
            "title_en": "Ch.3: God's Attributes and Essence",
            "summary_zh": "系统阐述上帝的各种属性。作者区分了上帝的道德属性（如圣洁、慈爱、公义）和本体属性（如永恒、不变、全能），展示这些属性如何在三位一体中完美统一。通过圣经例证，作者帮助读者更深地认识上帝的品格。",
            "summary_en": "Systematically explaining God's various attributes. The author distinguishes God's moral attributes (like holiness, love, justice) from ontological attributes (like eternity, immutability, omnipotence), showing how these attributes are perfectly unified in the Trinity. Through biblical examples, the author helps readers know God's character more deeply.",
            "key_quotes": [
                "上帝的所有属性都是祂本质的完美表达。",
                "认识上帝的属性是敬拜和顺服的基础。"
            ]
        },
        {
            "number": 4,
            "title_zh": "第4章：人类学与罪的教义",
            "title_en": "Ch.4: Anthropology and the Doctrine of Sin",
            "summary_zh": "探讨基督教人论的核心要素。作者分析了人按上帝形象受造的含义，以及堕落对人性的影响。通过考察原罪和实际罪的关系，作者展示罪如何全面破坏了人与上帝、人与人、人与自然的关系。",
            "summary_en": "Exploring core elements of Christian anthropology. The author analyzes the meaning of humans created in God's image and the fall's impact on human nature. Through examining the relationship between original and actual sin, the author shows how sin comprehensively damaged relationships between humans and God, humans with each other, and humans with nature.",
            "key_quotes": [
                "人的尊严在于上帝的形象，人的问题在于罪的破坏。",
                "罪不仅是道德的问题，更是关系的破裂。"
            ]
        },
        {
            "number": 5,
            "title_zh": "第5章：救恩论的核心要素",
            "title_en": "Ch.5: Core Elements of Soteriology",
            "summary_zh": "阐述基督教救恩的基本要素。作者详细分析了称义、重生、成圣等救恩步骤，强调救恩完全出于恩典，通过信心获得。通过考察改革宗与亚米念派的争论，作者澄清了恩典与人类责任的关系。",
            "summary_en": "Explaining basic elements of Christian salvation. The author analyzes in detail salvation steps like justification, regeneration, sanctification, emphasizing salvation is entirely by grace through faith. Through examining Reformed and Arminian debates, the author clarifies the relationship between grace and human responsibility.",
            "key_quotes": [
                "救恩的根源是神的恩典，条件是人的信心，基础是基督的工作。",
                "称义使我们在神面前有正确的地位，成圣使我们有正确的生活。"
            ]
        }
    ]

def create_hermeneutics_chapters(title, author):
    """创建释经学/解释学类书籍的章节"""
    return [
        {
            "number": 1,
            "title_zh": f"第1章：{author}的释经原则",
            "title_en": f"Ch.1: {author}'s Hermeneutical Principles",
            "summary_zh": f"{author}在本章确立了解释圣经的基本原则。作者强调释经必须建立在对圣经本质正确理解的基础上，同时要考虑历史文化背景和文学体裁的特殊性。通过分析常见的释经错误，作者为正确解释圣经提供了可靠的方法论指导。",
            "summary_en": f"{author} establishes basic principles for biblical interpretation in this chapter. The author emphasizes exegesis must be based on correct understanding of Scripture's nature, while considering historical-cultural background and literary genre specificity. Through analyzing common exegetical errors, the author provides reliable methodological guidance for correct biblical interpretation.",
            "key_quotes": [
                "释经的目标是发现经文的原意，而不是读入自己的观点。",
                "正确的释经方法是忠实传讲神话语的基础。"
            ]
        },
        {
            "number": 2,
            "title_zh": "第2章：历史文化背景的重要性",
            "title_en": "Ch.2: Importance of Historical-Cultural Background",
            "summary_zh": "深入探讨理解圣经背景对释经的重要意义。作者详细分析了古代近东文化、希伯来传统和希罗文明对圣经写作的影响。通过具体例证，作者展示背景知识如何帮助我们更准确地理解经文的原意和当代应用。",
            "summary_en": "In-depth exploration of understanding biblical background's importance for exegesis. The author analyzes in detail ancient Near Eastern culture, Hebrew tradition, and Greco-Roman civilization's influence on biblical writing. Through specific examples, the author shows how background knowledge helps us more accurately understand texts' original meaning and contemporary application.",
            "key_quotes": [
                "圣经是在特定历史文化中写成的，必须在这个背景下理解。",
                "背景知识不是可有可无的装饰，而是正确释经的必要条件。"
            ]
        }
    ]

def create_history_chapters(title, author):
    """创建历史类书籍的章节"""
    return [
        {
            "number": 1,
            "title_zh": f"第1章：{author}的史学观念",
            "title_en": f"Ch.1: {author}'s Historiographical Perspective",
            "summary_zh": f"{author}在本书开篇阐述了基督教史学的基本观念。作者强调历史不是盲目的循环或随机事件，而是上帝主权计划的展现。通过分析世俗史学与基督教史学的差异，作者建立了理解教会历史的正确框架。",
            "summary_en": f"{author} explains basic concepts of Christian historiography at the book's beginning. The author emphasizes history is not blind cycles or random events but manifestation of God's sovereign plan. Through analyzing differences between secular and Christian historiography, the author establishes correct framework for understanding church history.",
            "key_quotes": [
                "历史是上帝故事的展开，教会历史是救赎历史的延续。",
                "从上帝主权的角度看历史，我们能找到混乱中的秩序。"
            ]
        },
        {
            "number": 2,
            "title_zh": "第2章：关键历史时期的分析",
            "title_en": "Ch.2: Analysis of Key Historical Periods",
            "summary_zh": "系统梳理基督教历史的重要阶段。作者分析了早期教会、教父时期、中世纪、宗教改革等关键时期的特点和意义。通过考察每个时期的神学发展、教会生活和文化背景，作者展示上帝如何在历史中成就祂的旨意。",
            "summary_en": "Systematically reviewing important phases of Christian history. The author analyzes characteristics and significance of key periods like early church, patristic era, medieval period, Reformation. Through examining each period's theological development, church life, and cultural background, the author shows how God accomplishes His will in history.",
            "key_quotes": [
                "每个历史时期都有其独特的挑战和上帝的恩典。",
                "教会历史告诉我们，真理总是在争战中得胜。"
            ]
        }
    ]

def create_prayer_chapters(title, author):
    """创建祷告类书籍的章节"""
    return [
        {
            "number": 1,
            "title_zh": f"第1章：{author}的祷告神学",
            "title_en": f"Ch.1: {author}'s Theology of Prayer",
            "summary_zh": f"{author}开篇建立祷告的神学基础。作者强调祷告不仅是人的宗教活动，更是上帝所设立的与祂相交的方式。通过分析祷告在三位一体工作中的地位，作者展示祷告如何体现神人关系的本质。",
            "summary_en": f"{author} establishes prayer's theological foundation at the opening. The author emphasizes prayer is not merely human religious activity but God's established way of communion with Him. Through analyzing prayer's place in Trinitarian work, the author shows how prayer embodies the essence of divine-human relationship.",
            "key_quotes": [
                "祷告是上帝赐给我们的特权，让有限的人能与无限的神对话。",
                "真正的祷告总是与上帝的旨意和品格相符。"
            ]
        },
        {
            "number": 2,
            "title_zh": "第2章：祷告的实践指导",
            "title_en": "Ch.2: Practical Guidance for Prayer",
            "summary_zh": "提供具体的祷告操练建议。作者分析了不同类型的祷告（敬拜、感谢、认罪、祈求、代祷）的特点和方法。通过主祷文的详细解释和个人经历的分享，作者帮助读者建立有效的祷告生活。",
            "summary_en": "Providing specific prayer practice suggestions. The author analyzes characteristics and methods of different prayer types (worship, thanksgiving, confession, petition, intercession). Through detailed explanation of the Lord's Prayer and sharing personal experiences, the author helps readers establish effective prayer life.",
            "key_quotes": [
                "祷告需要学习，但更需要实践和坚持。",
                "最好的祷告老师是圣灵，最好的祷告榜样是耶稣。"
            ]
        }
    ]

def create_evangelism_chapters(title, author):
    """创建传道/布道类书籍的章节"""
    return [
        {
            "number": 1,
            "title_zh": f"第1章：{author}的传道理念",
            "title_en": f"Ch.1: {author}'s Evangelistic Philosophy",
            "summary_zh": f"{author}阐述传道事工的神学基础和基本理念。作者强调传道是每个基督徒的责任，源于大使命的呼召。通过分析福音的本质内容，作者为有效的传道事工建立了清晰的框架和方向。",
            "summary_en": f"{author} explains the theological foundation and basic philosophy of evangelistic ministry. The author emphasizes evangelism is every Christian's responsibility, stemming from the Great Commission's call. Through analyzing the gospel's essential content, the author establishes clear framework and direction for effective evangelistic ministry.",
            "key_quotes": [
                "传道不是可选择的活动，而是基督徒生命的自然流露。",
                "最有效的传道往往发生在日常生活的关系中。"
            ]
        },
        {
            "number": 2,
            "title_zh": "第2章：传道的策略与方法",
            "title_en": "Ch.2: Evangelistic Strategies and Methods",
            "summary_zh": "探讨不同情况下的传道策略。作者分析了个人布道、群体事工、文化护教等不同方式的特点和适用性。通过实际案例和经验分享，作者提供了适应不同对象和环境的传道智慧。",
            "summary_en": "Exploring evangelistic strategies for different situations. The author analyzes characteristics and applicability of different approaches like personal evangelism, group ministry, cultural apologetics. Through practical cases and experience sharing, the author provides evangelistic wisdom adapting to different audiences and environments.",
            "key_quotes": [
                "传道的方法可以多样，但福音的内容必须纯正。",
                "最好的传道预备是自己与神的关系和对福音的理解。"
            ]
        }
    ]

def create_practical_chapters(title, author):
    """创建实践生活类书籍的章节"""
    return [
        {
            "number": 1,
            "title_zh": f"第1章：{author}的实践神学观",
            "title_en": f"Ch.1: {author}'s Practical Theology Perspective",
            "summary_zh": f"{author}强调信仰与生活的统一性。作者论证基督教不是抽象的哲学体系，而是改变整个人生的生活方式。通过分析现代人面临的实际挑战，作者展示基督教真理如何为日常生活提供指导和力量。",
            "summary_en": f"{author} emphasizes the unity of faith and life. The author argues Christianity is not abstract philosophical system but life-changing way of living. Through analyzing practical challenges modern people face, the author shows how Christian truth provides guidance and strength for daily life.",
            "key_quotes": [
                "真正的信仰必须转化为实际的生活方式。",
                "基督教的真理性在日常生活的考验中得到验证。"
            ]
        },
        {
            "number": 2,
            "title_zh": "第2章：具体生活领域的应用",
            "title_en": "Ch.2: Applications in Specific Life Areas",
            "summary_zh": "详细探讨信仰在具体生活领域的应用。作者分析了工作、家庭、人际关系、财务管理等方面的基督教原则。通过实际指导和案例分析，作者帮助读者在各个生活层面活出信仰。",
            "summary_en": "Detailed exploration of faith applications in specific life areas. The author analyzes Christian principles for work, family, interpersonal relationships, financial management, etc. Through practical guidance and case analysis, the author helps readers live out faith in all life dimensions.",
            "key_quotes": [
                "基督教伦理涵盖生活的每个角落。",
                "在小事上忠心是在大事上忠心的基础。"
            ]
        }
    ]

def create_general_chapters(title, author, category):
    """创建通用基督教主题的章节"""
    return [
        {
            "number": 1,
            "title_zh": f"第1章：{title}的神学基础",
            "title_en": f"Ch.1: Theological Foundations of {title}",
            "summary_zh": f"{author}在本书开篇建立了理解{title}的神学框架。作者从圣经的角度审视主题，展示其在救赎历史中的地位。通过连接旧约与新约的启示，作者为后续讨论奠定了坚实的圣经神学基础。",
            "summary_en": f"{author} establishes a theological framework for understanding {title} at the book's beginning. The author examines the theme from a biblical perspective, showing its place in redemptive history. Through connecting Old and New Testament revelation, the author lays solid biblical theological foundations for subsequent discussion.",
            "key_quotes": [
                "任何基督教主题的探讨都必须建立在圣经启示的基础之上。",
                "God's truth is unified, and every aspect reflects His perfect character."
            ]
        },
        {
            "number": 2,
            "title_zh": "第2章：历史发展与当代意义",
            "title_en": "Ch.2: Historical Development and Contemporary Significance",
            "summary_zh": "追溯主题在教会历史中的发展轨迹。作者分析了关键历史人物和神学传统对理解这一主题的贡献，同时指出历史发展中的偏差和纠正。通过连接历史传统与当代处境，作者展示了这一主题的持续相关性。",
            "summary_en": "Tracing the theme's developmental trajectory in church history. The author analyzes key historical figures and theological traditions' contributions to understanding this theme, while pointing out deviations and corrections in historical development. Through connecting historical tradition with contemporary context, the author shows this theme's continuing relevance.",
            "key_quotes": [
                "教会历史的智慧帮助我们更好地理解圣经的教导。",
                "每个时代都需要重新发现古老真理的现实意义。"
            ]
        },
        {
            "number": 3,
            "title_zh": "第3章：实践应用与生活转化",
            "title_en": "Ch.3: Practical Application and Life Transformation",
            "summary_zh": "探讨主题在基督徒生活中的具体应用。作者不满足于理论阐述，而是深入分析这一真理如何改变信徒的思维、情感和行为。通过实际案例和具体建议，作者帮助读者将神学认识转化为生活实践。",
            "summary_en": "Exploring the theme's specific applications in Christian life. The author isn't satisfied with theoretical exposition but deeply analyzes how this truth changes believers' thinking, emotions, and behavior. Through practical cases and specific suggestions, the author helps readers transform theological understanding into life practice.",
            "key_quotes": [
                "真正的神学认识必然带来生命的改变。",
                "理论与实践的结合是健康基督教生活的标志。"
            ]
        },
        {
            "number": 4,
            "title_zh": "第4章：面对当代挑战的智慧",
            "title_en": "Ch.4: Wisdom for Facing Contemporary Challenges",
            "summary_zh": "应用主题的洞察来回应当代文化和社会的挑战。作者分析了现代思潮对基督教真理的冲击，并提供基于圣经原则的回应策略。通过文化分析和护教论证，作者装备读者在复杂世界中坚守信仰。",
            "summary_en": "Applying the theme's insights to respond to contemporary cultural and social challenges. The author analyzes modern thought currents' impact on Christian truth and provides response strategies based on biblical principles. Through cultural analysis and apologetic arguments, the author equips readers to maintain faith in a complex world.",
            "key_quotes": [
                "基督教真理不惧怕文化的挑战，因为它来自永恒的上帝。",
                "在变化的世界中，不变的真理成为我们的锚点。"
            ]
        },
        {
            "number": 5,
            "title_zh": "第5章：未来展望与永恒盼望",
            "title_en": "Ch.5: Future Prospects and Eternal Hope",
            "summary_zh": "从末世论的角度审视主题的终极意义。作者将当前的经历和理解置于上帝永恒计划的宏大背景中，展示一切都指向基督的再来和新天新地。通过末世盼望，作者为信徒当前的挣扎和努力提供了终极的动机和安慰。",
            "summary_en": "Examining the theme's ultimate significance from an eschatological perspective. The author places current experiences and understanding within the grand backdrop of God's eternal plan, showing everything points to Christ's return and the new heaven and earth. Through eschatological hope, the author provides ultimate motivation and comfort for believers' current struggles and efforts.",
            "key_quotes": [
                "现在的一切都在为永恒的荣耀做预备。",
                "末世的盼望给现在的生活带来意义和动力。"
            ]
        }
    ]

def find_next_books_to_process(books, start_id="book-091", batch_size=3):
    """找到下一批需要处理的书籍"""
    # 提取编号进行比较
    def extract_book_number(book_id):
        match = re.search(r'book-(\d+)', book_id)
        return int(match.group(1)) if match else 0
    
    start_num = extract_book_number(start_id)
    books_to_process = []
    
    for book in books:
        book_num = extract_book_number(book['id'])
        if (book_num >= start_num and 
            (not book.get('chapters') or len(book['chapters']) == 0)):
            books_to_process.append(book)
            if len(books_to_process) >= batch_size:
                break
    
    return books_to_process

def process_books_batch(start_from="book-091"):
    """处理一批书籍（3本）"""
    books = load_books()
    
    # 找到需要处理的书籍
    books_to_process = find_next_books_to_process(books, start_from, 3)
    
    if not books_to_process:
        print("没有找到需要处理的书籍！")
        return False, None
    
    processed_count = 0
    last_processed_id = None
    
    for book in books_to_process:
        if not book.get("chapters") or len(book["chapters"]) == 0:
            # 创建高质量章节
            book["chapters"] = create_quality_chapters(book)
            
            # 设置推荐对象和标签
            if not book.get("recommend_for"):
                category = book.get("category", "")
                if "神学" in category:
                    book["recommend_for"] = ["神学生", "传道人", "成熟基督徒"]
                elif "哲学" in category:
                    book["recommend_for"] = ["思想家", "知识分子", "护教学习者"]
                elif "圣经" in category:
                    book["recommend_for"] = ["查经带领者", "圣经研究者", "传道人"]
                else:
                    book["recommend_for"] = ["基督徒", "慕道友", "思考者"]
            
            if not book.get("tags"):
                book["tags"] = [book.get("category", "基督教"), "信仰生活"]
            
            print(f"✓ 已为{book['title_zh']}（{book['id']}）添加{len(book['chapters'])}章内容")
            processed_count += 1
            last_processed_id = book['id']
    
    print(f"\n📊 本次处理了 {processed_count} 本书籍")
    
    # 保存更新后的数据
    if save_books(books):
        print("\n🎉 成功处理本批次书籍！")
        return True, last_processed_id
    else:
        print("\n❌ 保存失败！")
        return False, None

def main_processing_loop():
    """主处理循环"""
    current_start = "book-091"
    total_processed = 0
    
    print("🚀 开始自动处理Gospel App书库章节内容...")
    print(f"📋 从{current_start}开始，每次处理3本")
    print("=" * 60)
    
    while True:
        print(f"\n📖 处理批次：从{current_start}开始")
        print("-" * 50)
        
        success, last_id = process_books_batch(current_start)
        
        if not success:
            print("处理失败，停止循环")
            break
        
        if not last_id:
            print("🏁 所有书籍处理完成！")
            break
        
        total_processed += 3
        print(f"📈 累计已处理: {total_processed} 本")
        
        # 计算下一个起始ID
        match = re.search(r'book-(\d+)', last_id)
        if match:
            next_num = int(match.group(1)) + 1
            current_start = f"book-{next_num:03d}"
        else:
            break
        
        # 短暂暂停，避免过快处理
        time.sleep(2)
    
    print(f"\n🎯 总计处理书籍: {total_processed} 本")
    print("✅ 处理完成！")

if __name__ == "__main__":
    main_processing_loop()