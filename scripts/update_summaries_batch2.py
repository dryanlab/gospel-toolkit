#!/usr/bin/env python3
import json

def update_summaries():
    # 读取JSON文件
    with open('/Users/suyan/clawd/projects/gospel-app/web/src/data/books.json', 'r', encoding='utf-8') as f:
        books = json.load(f)
    
    # 定义要更新的书籍及其summary
    summaries = {
        'book-150': {
            'summary_zh': '约翰·基尔纳（John Kilner）从基督教伦理学角度深入探讨人的尊严这一根本议题。作者以圣经人类学为基础，分析了人按神形像被造的深刻含义，并回应现代生物伦理学中关于人的价值与尊严的争议。全书涵盖堕胎、安乐死、基因工程、人工生殖等当代伦理难题，为基督徒在复杂的道德议题中提供了清晰的圣经指导。基尔纳特别强调每个人无论健康状况如何都具有不可侵犯的内在尊严，这一观点对当代医疗伦理具有重要指导意义。',
            'summary_en': 'John Kilner profoundly explores the fundamental issue of human dignity from a Christian ethical perspective. Grounding his analysis in biblical anthropology, the author examines the profound implications of humanity being made in God\'s image and responds to contemporary bioethical debates about human value and dignity. The book addresses modern ethical dilemmas including abortion, euthanasia, genetic engineering, and assisted reproduction, providing clear biblical guidance for Christians navigating complex moral issues. Kilner particularly emphasizes that every person possesses inviolable inherent dignity regardless of health status—a perspective crucial for contemporary medical ethics.'
        },
        'book-151': {
            'summary_zh': '牛津数学家约翰·列诺克斯（John Lennox）对人工智能时代人类未来的基督教反思。作者以奥威尔《1984》为起点，探讨人工智能、大数据监控、生物技术等新兴技术对人类自由、尊严与信仰的冲击。列诺克斯从基督教世界观出发，分析了技术进步与人文价值的关系，警告过度技术依赖可能带来的"数字极权主义"风险。全书结合哲学思辨与实践关切，为基督徒在技术革命时代如何持守信仰、维护人性尊严提供了深刻的思考框架。',
            'summary_en': 'Oxford mathematician John Lennox\'s Christian reflection on humanity\'s future in the age of artificial intelligence. Beginning with Orwell\'s "1984," the author explores how emerging technologies like AI, big data surveillance, and biotechnology impact human freedom, dignity, and faith. From a Christian worldview perspective, Lennox analyzes the relationship between technological progress and humanistic values, warning of "digital totalitarianism" risks from excessive technological dependence. Combining philosophical speculation with practical concerns, the book provides Christians with a profound framework for maintaining faith and defending human dignity during the technological revolution.'
        },
        'book-152': {
            'summary_zh': '列诺克斯针对科学主义意识形态的简明有力回击。作者以科学哲学的深度和护教学的锐度，拆解了"科学能解释一切"的流行迷思。全书从科学方法论的局限性出发，论证科学虽然在物理世界的研究中极其重要，却无法回答意义、道德、目的等终极人生问题。列诺克斯特别强调科学与信仰的互补性而非对立性，展现了基督教信仰如何为科学研究提供更深层的意义框架。这是一部简洁但深刻的科学与信仰关系入门书。',
            'summary_en': 'Lennox\'s concise yet powerful response to scientistic ideology. With philosophical depth and apologetic sharpness, the author dismantles the popular myth that "science can explain everything." Beginning from scientific methodology\'s limitations, the book demonstrates that while science is extremely important for studying the physical world, it cannot answer ultimate questions of meaning, morality, and purpose. Lennox particularly emphasizes the complementarity rather than opposition between science and faith, showing how Christian belief provides deeper meaning frameworks for scientific research. This is a concise but profound introduction to science-faith relationships.'
        },
        'book-153': {
            'summary_zh': '列诺克斯的护教学经典，全面回应新无神论对基督教信仰的挑战。作者以专业数学家的严谨逻辑和深厚的哲学素养，逐一拆解道金斯、霍金等人的反宗教论证。全书涵盖宇宙起源、进化论、设计论、意识问题等科学与信仰的核心争议，为有神论提供了坚实的理性基础。列诺克斯特别强调科学的发展历史本身证明了基督教世界观的合理性，许多科学先驱都是虔诚的基督徒。这部著作是当代科学护教学的重要里程碑。',
            'summary_en': 'Lennox\'s apologetic masterpiece comprehensively responding to New Atheist challenges against Christian faith. With professional mathematician\'s rigorous logic and profound philosophical training, the author systematically dismantles anti-religious arguments from Dawkins, Hawking, and others. The book covers core science-faith controversies including cosmic origins, evolution, design arguments, and consciousness problems, providing solid rational foundation for theism. Lennox particularly emphasizes that science\'s historical development itself validates Christian worldview reasonableness, as many scientific pioneers were devout Christians. This work represents a major milestone in contemporary scientific apologetics.'
        },
        'book-154': {
            'summary_zh': '列诺克斯关于科学与信仰关系的综合性论述，为两者的和谐共存提供了系统的理论框架。作者从科学史、科学哲学和神学的多重视角，论证基督教信仰不仅与科学兼容，更为科学研究提供了重要的动力和意义。全书分析了伽利略事件、达尔文理论等历史争议的真相，揭示了所谓"科学与宗教战争"的神话本质。列诺克斯特别强调许多现代科学基本假设——如自然界的理性可理解性——实际上源于基督教的神学传统，为两者关系提供了全新的理解视角。',
            'summary_en': 'Lennox\'s comprehensive treatment of science-faith relationships, providing systematic theoretical framework for their harmonious coexistence. From multiple perspectives of scientific history, philosophy of science, and theology, the author demonstrates that Christian faith is not only compatible with science but provides crucial motivation and meaning for scientific research. The book analyzes historical controversies like the Galileo affair and Darwinian theory, revealing the mythical nature of the supposed "warfare between science and religion." Lennox particularly emphasizes that many basic assumptions of modern science—such as nature\'s rational intelligibility—actually originate from Christian theological tradition, offering fresh perspective on their relationship.'
        },
        'book-155': {
            'summary_zh': '约翰·麦克阿瑟（John MacArthur）关于救恩确据的系统神学著作。作者基于改革宗神学传统，深入阐释圣经中关于救恩永恒保障的教导，回应信徒在得救确据上的疑惑与担忧。全书结合详细的圣经解经与牧会经验，分析了真假信心的区别、成圣与称义的关系、以及圣灵在信徒生命中的印证工作。麦克阿瑟特别强调得救的确据不建立在感觉或行为表现上，而基于神在基督里不变的应许。这是一部帮助信徒建立稳固救恩确据的实用神学作品。',
            'summary_en': 'John MacArthur\'s systematic theological work on assurance of salvation. Grounded in Reformed theological tradition, the author thoroughly expounds biblical teaching on eternal security of salvation, addressing believers\' doubts and concerns about their salvation assurance. Combining detailed biblical exegesis with pastoral experience, the book analyzes distinctions between genuine and false faith, relationships between sanctification and justification, and the Holy Spirit\'s witnessing work in believers\' lives. MacArthur particularly emphasizes that salvation assurance is not based on feelings or behavioral performance but on God\'s unchanging promises in Christ. This is a practical theological work helping believers establish solid salvation assurance.'
        },
        'book-156': {
            'summary_zh': '麦克阿瑟对灵恩运动的系统批判，从圣经神学角度分析现代灵恩现象的问题。作者认为当代灵恩运动中的许多现象——方言、神迹医治、预言等——偏离了圣经的教导，甚至带有异端性质。全书以详细的圣经解经为基础，论证超自然恩赐在使徒时代之后已经停止，现代教会应当专注于圣经的权威和福音的传讲。麦克阿瑟的观点虽然争议很大，但代表了改革宗和基要派对灵恩运动的经典批判立场，对理解当代基督教内部神学争议具有重要价值。',
            'summary_en': 'MacArthur\'s systematic critique of the charismatic movement, analyzing problems with modern charismatic phenomena from a biblical-theological perspective. The author argues that many contemporary charismatic phenomena—tongues, miraculous healing, prophecy—deviate from biblical teaching and even possess heretical characteristics. Based on detailed biblical exegesis, the book argues that supernatural gifts ceased after the apostolic era, and the modern church should focus on Scripture\'s authority and gospel proclamation. Though highly controversial, MacArthur\'s position represents classic Reformed and fundamentalist critique of the charismatic movement, valuable for understanding contemporary theological disputes within Christianity.'
        },
        'book-157': {
            'summary_zh': '改革宗神学家约翰·慕理（John Murray）关于基督徒洗礼的经典专著。作者以严谨的圣经解经方法，深入分析新约中关于洗礼的各段经文，论证婴儿洗礼的圣经基础和神学合理性。慕理特别从圣约神学的角度阐释洗礼的意义，强调洗礼作为新约印记延续了旧约割礼的属灵含义。全书回应了浸信会等反对婴儿洗礼的观点，为改革宗和长老会的洗礼实践提供了坚实的神学基础。这是改革宗圣礼神学研究中不可忽视的重要学术贡献。',
            'summary_en': 'Reformed theologian John Murray\'s classic monograph on Christian baptism. Through rigorous biblical exegetical methods, the author thoroughly analyzes New Testament passages about baptism, demonstrating the biblical foundation and theological reasonableness of infant baptism. Murray particularly explicates baptism\'s meaning from a covenantal theological perspective, emphasizing baptism as a New Covenant sign continuing the spiritual significance of Old Testament circumcision. The book responds to Baptist and other anti-paedobaptist positions, providing solid theological foundation for Reformed and Presbyterian baptismal practice. This represents a crucial scholarly contribution to Reformed sacramental theology that cannot be overlooked.'
        },
        'book-158': {
            'summary_zh': '慕理关于救赎论的不朽经典，系统阐述基督救赎工作的完成与应用。作者以"客观救赎"与"主观救赎"的框架，深入分析基督的救赎工作如何在历史中完成，又如何在个人生命中应用。全书涵盖代赎、称义、重生、成圣、得荣等救恩的各个层面，展现了改革宗救赎神学的精深内涵。慕理特别强调救恩的客观性与主观性、一次性与过程性的平衡，为理解基督教救恩论提供了清晰而全面的神学框架。这部著作被公认为20世纪最重要的救赎论研究之一。',
            'summary_en': 'Murray\'s immortal classic on soteriology, systematically expounding the accomplishment and application of Christ\'s redemptive work. Using the framework of "objective redemption" and "subjective redemption," the author deeply analyzes how Christ\'s redemptive work was accomplished in history and applied in individual lives. The book covers all aspects of salvation including atonement, justification, regeneration, sanctification, and glorification, demonstrating Reformed soteriology\'s profound content. Murray particularly emphasizes the balance between salvation\'s objectivity and subjectivity, its definitiveness and processual nature, providing clear and comprehensive theological framework for understanding Christian doctrine of salvation. This work is recognized as one of the most important soteriological studies of the 20th century.'
        },
        'book-159': {
            'summary_zh': '慕理对亚当原罪归算问题的精深神学研究，探讨人类如何承担始祖亚当犯罪的后果。作者以详细的圣经解经，特别是对罗马书5章12-21节的深度分析，论证了亚当作为人类联邦元首的神学概念。全书讨论了原罪传承的方式、罪责归算的公义性、以及基督作为第二亚当的救赎意义。慕理的观点在改革宗传统中具有权威性，为理解人类堕落的性质和救赎的必要性提供了深刻的神学洞察。这是研究原罪教义和联邦神学不可缺少的重要学术文献。',
            'summary_en': 'Murray\'s profound theological study of the imputation of Adam\'s sin, exploring how humanity bears the consequences of the first father\'s transgression. Through detailed biblical exegesis, particularly in-depth analysis of Romans 5:12-21, the author demonstrates the theological concept of Adam as humanity\'s federal head. The book discusses the manner of original sin transmission, the justice of guilt imputation, and Christ\'s redemptive significance as the second Adam. Murray\'s position holds authority within Reformed tradition, providing profound theological insight for understanding the nature of human fall and salvation\'s necessity. This is an indispensable scholarly document for studying original sin doctrine and federal theology.'
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
    
    print(f"Successfully updated {updated_count} books (book-150 to book-159)")

if __name__ == "__main__":
    update_summaries()