#!/usr/bin/env python3
import json
from pathlib import Path

def process_first_batch():
    books_file = Path('/Users/suyan/clawd/projects/gospel-app/web/src/data/books.json')
    
    # 读取JSON文件
    with open(books_file, 'r', encoding='utf-8') as f:
        books = json.load(f)
    
    # 第一批10本书的summary
    summaries = {
        "book-200": {
            "summary_zh": "迈克尔·布朗博士的护教学巨作，五卷本系统性回应犹太人对耶稣基督教信仰的反对意见。全书涵盖圣经预言、历史考证、神学论证和实践问题四个层面，以严谨的学术态度和丰富的拉比文献知识，逐一拆解从古至今犹太教对基督教的核心质疑。作者既深谙犹太传统，又坚持福音真理，为基督徒提供了与犹太朋友对话的重要资源。",
            "summary_en": "Dr. Michael Brown's monumental apologetic work in five volumes, systematically addressing Jewish objections to faith in Jesus Christ. The work covers biblical prophecy, historical evidence, theological arguments, and practical issues, dismantling core Jewish critiques of Christianity with rigorous scholarship and extensive knowledge of rabbinic literature. Brown combines deep understanding of Jewish tradition with unwavering commitment to gospel truth, providing Christians essential resources for dialogue with Jewish friends."
        },
        "book-201": {
            "summary_zh": "迈克尔·布朗对当代灵恩运动中极端现象的深度反思和批判。书名取自犹太教传统中对'奇异火'的警告，作者以其在灵恩运动中的亲身经历，冷静分析运动中的健康与病态表现。他既不否定圣灵恩赐的真实性，也不回避运动中的偏差和危险，呼吁信徒在追求属灵恩赐时保持圣经的平衡和智慧。",
            "summary_en": "Michael Brown's profound reflection and critique of extreme phenomena in the contemporary charismatic movement. Taking its title from the Jewish warning against 'strange fire,' the author draws on his personal experience within the movement to analyze both healthy and pathological expressions. Brown neither denies the reality of spiritual gifts nor avoids the movement's deviations and dangers, calling believers to maintain biblical balance and wisdom in pursuing spiritual gifts."
        },
        "book-202": {
            "summary_zh": "迈克尔·巴特勒对先验论证的详细阐述，这是范蒂尔护教学传统的重要发展。该论证主张，上帝的存在是一切知识、逻辑和道德的必要前提；没有上帝作为超验基础，人类的理性活动本身就是不可能的。巴特勒以哲学的严谨性展示了基督教世界观的独特认识论地位，对当代护教学具有重要影响。",
            "summary_en": "Michael Butler's detailed exposition of the transcendental argument, an important development in the Van Tilian apologetic tradition. This argument maintains that God's existence is the necessary prerequisite for all knowledge, logic, and morality; without God as the transcendent foundation, human rational activity itself would be impossible. Butler demonstrates with philosophical rigor the unique epistemological status of the Christian worldview, significantly influencing contemporary apologetics."
        },
        "book-203": {
            "summary_zh": "迈克尔·格林对早期教会福音传播历史的经典研究。作者深入分析了使徒时代至君士坦丁时期基督教的传播策略、方法和动力，揭示了早期信徒如何在逼迫中持守信仰并有效地传扬福音。本书不仅是优秀的历史研究，也为当代教会的布道和宣教提供了宝贵的借鉴和启发。",
            "summary_en": "Michael Green's classic study of evangelism in the early church from the apostolic era to Constantine. The author analyzes in depth the strategies, methods, and dynamics of Christian expansion, revealing how early believers maintained faith under persecution while effectively spreading the gospel. This work serves not only as excellent historical scholarship but also provides valuable insights and inspiration for contemporary preaching and missions."
        },
        "book-204": {
            "summary_zh": "迈克尔·克鲁格对圣经正典形成的重要学术贡献。面对后现代学者对正典权威性的质疑，克鲁格从历史、神学和文学角度重新审视正典形成过程，论证新约正典的形成并非任意的人为构建，而是基于早期教会对使徒权威和神圣启示的认知。本书为圣经权威性提供了坚实的学术根基。",
            "summary_en": "Michael Kruger's important scholarly contribution to understanding biblical canon formation. Addressing postmodern scholars' challenges to canonical authority, Kruger reexamines the canon formation process from historical, theological, and literary perspectives, arguing that the New Testament canon was not an arbitrary human construction but based on the early church's recognition of apostolic authority and divine revelation. The work provides solid academic foundation for biblical authority."
        },
        "book-205": {
            "summary_zh": "克鲁格进一步探讨正典问题的续作，专注于回应当代圣经批评学对正典可靠性的挑战。作者运用最新的古代文献研究成果，系统分析早期基督教对圣经书卷的接受标准和认定过程。本书深化了对正典权威性的理解，为护教学提供了重要的学术资源。",
            "summary_en": "Kruger's follow-up work further exploring canonical issues, focusing on responding to contemporary biblical criticism's challenges to canonical reliability. The author employs the latest findings in ancient literature research to systematically analyze early Christianity's standards for accepting biblical books and the recognition process. This work deepens understanding of canonical authority and provides important scholarly resources for apologetics."
        },
        "book-206": {
            "summary_zh": "迈克尔·诺瓦克的开创性著作，从基督教神学角度为自由市场经济进行深度辩护。诺瓦克论证民主资本主义制度与基督教价值观的根本兼容性，强调该制度对人类尊严、创造力和社会正义的促进作用。本书对政治神学和基督教社会伦理产生重要影响，成为讨论信仰与经济制度关系的经典文献。",
            "summary_en": "Michael Novak's groundbreaking work providing theological defense of free market economics from a Christian perspective. Novak argues for the fundamental compatibility of democratic capitalism with Christian values, emphasizing this system's promotion of human dignity, creativity, and social justice. The book significantly influenced political theology and Christian social ethics, becoming a classic reference for discussing the relationship between faith and economic systems."
        },
        "book-207": {
            "summary_zh": "迈克尔·里夫斯以其独特的神学敏锐性和牧者心肠，为三位一体教义注入新的活力。本书不是枯燥的教义论述，而是热忱邀请读者进入三一上帝的奇妙奥秘中。里夫斯展示了三位一体如何成为基督徒生活和敬拜的中心，以及这一教义如何为信徒带来深刻的喜乐和满足。",
            "summary_en": "Michael Reeves brings fresh vitality to the doctrine of the Trinity with his unique theological insight and pastoral heart. This book is not a dry doctrinal treatise but a passionate invitation to enter the wonderful mystery of the Triune God. Reeves demonstrates how the Trinity becomes central to Christian life and worship, and how this doctrine brings profound joy and satisfaction to believers."
        },
        "book-208": {
            "summary_zh": "迈克尔·威廉斯对改革宗神学传统的深刻阐释，以'诅咒传到何处'这一圣经主题为线索，系统展现了从创造到新天新地的救赎历史全貌。威廉斯以其扎实的圣经神学功底，将复杂的神学概念转化为生动的叙事，帮助读者理解上帝在历史中的救赎计划和基督工作的宇宙性意义。",
            "summary_en": "Michael Williams' profound exposition of the Reformed theological tradition, using the biblical theme 'far as the curse is found' as a thread to systematically present the full scope of redemptive history from creation to the new heavens and earth. With solid biblical-theological grounding, Williams transforms complex theological concepts into vivid narrative, helping readers understand God's redemptive plan in history and the cosmic significance of Christ's work."
        },
        "book-209": {
            "summary_zh": "米洛斯拉夫·沃尔夫作为杰出的基督教神学家，以其在宗教对话领域的丰富经验，深度探讨基督徒应当如何理解和回应伊斯兰教。本书既不是简单的比较宗教学研究，也不是对抗性的辩论，而是在尊重差异的基础上寻求对话的可能性，为当代基督教与伊斯兰教的关系提供了重要的神学思考。",
            "summary_en": "Miroslav Volf, as a distinguished Christian theologian with extensive experience in religious dialogue, deeply explores how Christians should understand and respond to Islam. This book is neither simple comparative religious studies nor confrontational debate, but seeks possibilities for dialogue while respecting differences, providing important theological reflection for contemporary Christian-Islamic relations."
        }
    }
    
    # 更新对应的书籍
    for book in books:
        if book['id'] in summaries:
            book['summary_zh'] = summaries[book['id']]['summary_zh']
            book['summary_en'] = summaries[book['id']]['summary_en']
    
    # 写回文件
    with open(books_file, 'w', encoding='utf-8') as f:
        json.dump(books, f, ensure_ascii=False, indent=2)
    
    print("第一批10本书的summary已添加完成！")
    print("已处理的书籍：book-200 到 book-209")

if __name__ == "__main__":
    process_first_batch()