#!/usr/bin/env python3
import json

def update_summaries():
    # 读取JSON文件
    with open('/Users/suyan/clawd/projects/gospel-app/web/src/data/books.json', 'r', encoding='utf-8') as f:
        books = json.load(f)
    
    # 定义要更新的书籍及其summary
    summaries = {
        'book-180': {
            'summary_zh': 'K.斯科特·奥利芬特编辑的改革宗称义论文集，汇集了当代改革宗学者对称义教义的深入研究。全书从历史神学、圣经神学、系统神学等多个角度，阐释称义在基督救赎工作中的核心地位。各章作者特别回应了现代"保罗新观"对传统称义教义的挑战，为路德-加尔文传统的因信称义提供了坚实的学术辩护。这部文集展现了改革宗学者如何在当代神学对话中坚持和发展传统的称义论，是研究改革宗救赎论不可忽视的重要学术资源。',
            'summary_en': 'A Reformed justification anthology edited by K. Scott Oliphint, gathering contemporary Reformed scholars\' in-depth studies of justification doctrine. From perspectives of historical theology, biblical theology, systematic theology, and more, the book explicates justification\'s central position in Christ\'s redemptive work. Contributing authors particularly respond to modern "New Paul Perspective" challenges to traditional justification doctrine, providing solid scholarly defense for Luther-Calvin tradition of justification by faith. This collection demonstrates how Reformed scholars maintain and develop traditional justification doctrine in contemporary theological dialogue, representing indispensable scholarly resource for studying Reformed soteriology.'
        },
        'book-181': {
            'summary_zh': '凯斯·马西森（Keith Mathison）关于圣餐神学的系统研究，为改革宗圣餐观提供深度的神学阐释。作者追溯了从早期教会到宗教改革期间圣餐教义的历史发展，特别分析了加尔文圣餐神学的独特贡献。全书深入探讨了圣餐中基督真实临在的方式、圣餐与救恩的关系、以及圣餐在教会生活中的中心作用。马西森特别强调圣餐不仅是记念仪式，更是信徒与基督联合的实际途径。这部著作为当代改革宗教会重新认识圣餐的重要性提供了宝贵的神学资源。',
            'summary_en': 'Keith Mathison\'s systematic study of eucharistic theology, providing profound theological interpretation of Reformed sacramental views. The author traces historical development of eucharistic doctrine from early church through Reformation, particularly analyzing Calvin\'s unique contributions to sacramental theology. The book deeply explores modes of Christ\'s real presence in the Lord\'s Supper, relationships between sacrament and salvation, and the sacrament\'s central role in church life. Mathison particularly emphasizes that the Lord\'s Supper is not merely commemorative ritual but actual means of believers\' union with Christ. This work provides valuable theological resource for contemporary Reformed churches to rediscover the sacrament\'s importance.'
        },
        'book-182': {
            'summary_zh': '马西森专门研究加尔文圣餐教义的专著，致力于恢复改革宗传统中圣餐神学的丰富内涵。作者通过详细的历史研究和神学分析，展现了加尔文如何在天主教变质说和路德派共存说之间开辟第三条道路。全书特别强调加尔文的圣餐观既避免了物质化的错误，又保持了基督真实临在的奥秘。马西森论证说加尔文的圣餐神学为现代改革宗教会提供了更加平衡和圣经化的理解，有助于纠正当代新教对圣餐重要性的轻视。这是一部重要的历史神学研究。',
            'summary_en': 'Mathison\'s specialized monograph on Calvin\'s doctrine of the Lord\'s Supper, dedicated to recovering rich content of sacramental theology within Reformed tradition. Through detailed historical research and theological analysis, the author demonstrates how Calvin charted a third way between Catholic transubstantiation and Lutheran consubstantiation. The book particularly emphasizes how Calvin\'s sacramental view avoided materialistic errors while maintaining the mystery of Christ\'s real presence. Mathison argues that Calvin\'s eucharistic theology provides contemporary Reformed churches with more balanced and biblical understanding, helping correct modern Protestant neglect of the sacrament\'s importance. This represents important historical-theological research.'
        },
        'book-183': {
            'summary_zh': '马西森对"唯独圣经"原则的深入神学研究，回应天主教和东正教对新教圣经观的批评。作者通过历史分析和神学论证，阐释了宗教改革"唯独圣经"原则的真正含义，区分了圣经作为唯一的不谬权威与圣经作为唯一的权威来源之间的差别。全书批判了某些新教极端派对"唯独圣经"的误解，同时为圣经的最高权威性提供了坚实的辩护。马西森特别强调教会传统在解释圣经中的辅助作用，为改革宗教会在圣经与传统关系上提供了平衡的观点。',
            'summary_en': 'Mathison\'s in-depth theological study of the "sola scriptura" principle, responding to Catholic and Orthodox critiques of Protestant biblical views. Through historical analysis and theological argumentation, the author explicates the true meaning of Reformation "sola scriptura," distinguishing between Scripture as the only infallible authority and Scripture as the only source of authority. The book critiques certain Protestant extremist misunderstandings of "sola scriptura" while providing solid defense for Scripture\'s supreme authority. Mathison particularly emphasizes church tradition\'s auxiliary role in biblical interpretation, providing balanced perspective for Reformed churches on Scripture-tradition relationships.'
        },
        'book-184': {
            'summary_zh': '基思·斯莫尔（Keith Small）从文本批判学角度研究《古兰经》文本历史的学术著作。作者运用现代文本批判方法，分析了《古兰经》文本传承过程中的各种问题，包括早期手稿的差异、编纂过程的复杂性、以及不同版本之间的变化。这部研究以严谨的学术方法，为基督徒学者了解伊斯兰经典的文本问题提供了重要参考。虽然主题敏感，但斯莫尔以客观的学术态度进行研究，为伊斯兰-基督教学术对话贡献了有价值的文本批判研究成果。',
            'summary_en': 'Keith Small\'s scholarly work studying Quranic textual history from textual-critical perspective. Using modern textual-critical methods, the author analyzes various problems in Quranic textual transmission, including early manuscript variations, compilation process complexity, and changes between different versions. This research provides important reference for Christian scholars understanding textual issues of Islamic scripture through rigorous academic methodology. Though addressing sensitive topics, Small conducts research with objective scholarly attitude, contributing valuable textual-critical research to Islamic-Christian academic dialogue.'
        },
        'book-185': {
            'summary_zh': '基思·沃德（Keith Ward）从哲学神学角度探讨宗教与创造关系的学术著作。作者以开放的对话精神，分析了不同宗教传统对创造问题的理解，包括基督教、伊斯兰教、印度教、佛教等。全书结合现代科学发现和哲学思辨，探讨了神圣与宇宙关系的各种模式。沃德特别关注宗教思想如何回应现代宇宙学和进化生物学的挑战，为宗教与科学对话提供了富有洞察力的哲学反思。这部作品代表了当代宗教哲学在处理传统信仰与现代知识关系上的重要尝试。',
            'summary_en': 'Keith Ward\'s scholarly work exploring religion-creation relationships from philosophical-theological perspective. With open dialogical spirit, the author analyzes different religious traditions\' understanding of creation, including Christianity, Islam, Hinduism, Buddhism, and others. Combining modern scientific discoveries with philosophical speculation, the book explores various modes of divine-cosmic relationships. Ward particularly focuses on how religious thought responds to challenges from modern cosmology and evolutionary biology, providing insightful philosophical reflection for religion-science dialogue. This work represents important contemporary religious philosophy attempt at addressing traditional faith-modern knowledge relationships.'
        },
        'book-186': {
            'summary_zh': '考古学家肯尼斯·基钦（Kenneth Kitchen）为旧约历史可靠性提供的权威学术辩护。作者以数十年的古代近东研究经验，从考古学、历史学、语言学等多个角度，为旧约记录的历史真实性提供了大量证据。全书涵盖了从亚伯拉罕到以斯拉时期的历史，详细分析了旧约记述与古代近东文献、考古发现的关系。基钦特别回应了现代圣经批判学对旧约历史性的质疑，展现了保守派圣经学者在历史证据方面的深厚功底。这是捍卫旧约历史可靠性的重要学术成果。',
            'summary_en': 'Archaeologist Kenneth Kitchen\'s authoritative scholarly defense of Old Testament historical reliability. With decades of ancient Near Eastern research experience, the author provides extensive evidence for Old Testament historical authenticity from archaeological, historical, linguistic, and other perspectives. The book covers history from Abraham through Ezra period, thoroughly analyzing relationships between Old Testament accounts and ancient Near Eastern documents and archaeological discoveries. Kitchen particularly responds to modern biblical criticism\'s questioning of Old Testament historicity, demonstrating conservative biblical scholars\' profound foundation in historical evidence. This represents important scholarly achievement in defending Old Testament historical reliability.'
        },
        'book-187': {
            'summary_zh': '年轻改革宗牧师凯文·德扬（Kevin DeYoung）关于圣经权威性的通俗神学著作。作者以简洁明快的文风，为普通信徒阐释圣经的神性、权威性、充分性和清晰性等核心教义。全书回应了当代文化对圣经权威的质疑，为福音派圣经观提供了清晰的辩护。德扬特别强调相信圣经不是盲从，而是基于圣经自我见证的理性信靠。这部作品以牧者的心肠和神学家的准确性，帮助平信徒建立对神话语的坚定信心，是当代福音派圣经论的重要普及读物。',
            'summary_en': 'Young Reformed pastor Kevin DeYoung\'s popular theological work on biblical authority. With concise, clear style, the author explicates core doctrines of Scripture\'s divinity, authority, sufficiency, and clarity for ordinary believers. The book responds to contemporary cultural questioning of biblical authority, providing clear defense for evangelical biblical views. DeYoung particularly emphasizes that believing Scripture is not blind submission but rational trust based on Scripture\'s self-testimony. This work combines pastoral heart with theological precision to help laypeople establish firm confidence in God\'s Word, representing important evangelical biblical doctrine popularization.'
        },
        'book-188': {
            'summary_zh': '德扬对当代基督徒圣洁生活缺失的诊断和呼召。作者以敏锐的牧会观察，指出现代教会在追求恩典的同时往往忽略了圣洁的要求，造成了信徒属灵生命的"破口"。全书结合圣经教导和实际牧会经验，分析了恩典与律法、自由与责任、称义与成圣之间的平衡关系。德扬特别强调真正的恩典必然产生圣洁的果子，呼吁信徒在享受救恩确据的同时，也要认真对待成圣的责任。这是一部平衡恩典与圣洁的重要牧会著作。',
            'summary_en': 'DeYoung\'s diagnosis and call regarding contemporary Christians\' lack of holy living. With keen pastoral observation, the author points out that modern churches often neglect holiness requirements while pursuing grace, creating "holes" in believers\' spiritual lives. Combining biblical teaching with practical pastoral experience, the book analyzes balanced relationships between grace and law, freedom and responsibility, justification and sanctification. DeYoung particularly emphasizes that genuine grace necessarily produces holy fruit, calling believers to take sanctification responsibility seriously while enjoying salvation assurance. This represents important pastoral work balancing grace and holiness.'
        },
        'book-189': {
            'summary_zh': '德扬为传统教会制度进行的热情辩护，回应当代"去教会化"基督教的趋势。作者分析了现代基督徒离开传统教会的各种原因——教会的虚伪、传统的束缚、个人的自由等——并逐一提供了圣经化的回应。全书强调教会不是人的发明，而是基督建立的神圣机构，信徒不能脱离教会而独自成圣。德扬以年轻牧者的活力和改革宗的坚持，为教会的重要性提供了有力的神学论证。这部作品对于理解当代教会论争议和加强教会归属感具有重要价值。',
            'summary_en': 'DeYoung\'s passionate defense of traditional church institution, responding to contemporary "dechurched" Christianity trends. The author analyzes various reasons why modern Christians leave traditional churches—church hypocrisy, traditional constraints, personal freedom—and provides biblical responses to each. The book emphasizes that church is not human invention but sacred institution established by Christ, and believers cannot be sanctified apart from church fellowship. With young pastor\'s vitality and Reformed persistence, DeYoung provides powerful theological argumentation for church importance. This work has significant value for understanding contemporary ecclesiological controversies and strengthening church belonging.'
        }
    }
    
    # 更新书籍summary
    updated_count = 0
    for book in books:
        if book['id'] in summaries:
            book['summary_zh'] = summaries[book['id']]['summary_zh']
            book['summary_en'] = summaries[book['id']]['summary_en']
            updated_count += 1
            print(f"Updated {book['id']}: {book['title_zh']}")
    
    # 写回文件
    with open('/Users/suyan/clawd/projects/gospel-app/web/src/data/books.json', 'w', encoding='utf-8') as f:
        json.dump(books, f, ensure_ascii=False, indent=2)
    
    print(f"Successfully updated {updated_count} books (book-180 to book-189)")

if __name__ == "__main__":
    update_summaries()