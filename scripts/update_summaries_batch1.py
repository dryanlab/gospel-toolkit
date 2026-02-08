#!/usr/bin/env python3
import json

def update_summaries():
    # 读取JSON文件
    with open('/Users/suyan/clawd/projects/gospel-app/web/src/data/books.json', 'r', encoding='utf-8') as f:
        books = json.load(f)
    
    # 定义要更新的书籍及其summary
    summaries = {
        'book-140': {
            'summary_zh': '毕乐哲（Jerry Bridges）的经典灵修作品，深度探讨在苦难与不确定的环境中如何信靠神的主权与慈爱。作者从圣经神学的角度阐释了神的品格——他的智慧、公义、慈爱与信实——为信徒建立稳固的信心根基。全书结合丰富的圣经经文和实际生活案例，帮助读者理解苦难的意义，学习在试炼中依然持守对神良善旨意的信靠。这是一部帮助信徒在风暴中寻找安息的实用神学作品。',
            'summary_en': 'Jerry Bridges\' classic devotional work profoundly explores trusting in God\'s sovereignty and love amid suffering and uncertainty. The author expounds God\'s character—His wisdom, justice, love, and faithfulness—from a biblical-theological perspective, establishing a solid foundation for believers\' faith. Combining rich scriptural passages with practical life examples, the book helps readers understand the meaning of suffering and learn to maintain trust in God\'s good purposes through trials. This is a practical theological work that helps believers find rest in the storm.'
        },
        'book-141': {
            'summary_zh': '改革宗神学家乔尔·毕克（Joel Beeke）论述基督徒如何在世俗化的文化中过得胜的生活。作者基于约翰一书5章4节"凡从神生的，就胜过世界"的主题，深入分析了世界、肉体、魔鬼三重敌人对信徒的挑战。全书以扎实的改革宗神学为根基，结合清教徒传统的敬虔实践，为现代信徒提供了抵挡世俗诱惑、持守圣洁生活的具体指导。这是一部融合深度神学与实用灵修的优秀作品。',
            'summary_en': 'Reformed theologian Joel Beeke examines how Christians can live victorious lives in a secularized culture. Based on 1 John 5:4 "everyone born of God overcomes the world," the author deeply analyzes the threefold challenge of the world, the flesh, and the devil against believers. Grounded in solid Reformed theology and combined with Puritan traditions of piety, the book provides modern believers with concrete guidance for resisting worldly temptations and maintaining holy living. This is an excellent work that integrates profound theology with practical spirituality.'
        },
        'book-142': {
            'summary_zh': '班扬（John Bunyan）的自传性灵修作品，记录了作者从罪人到圣徒的属灵历程。全书以第一人称的坦诚叙述，详细描述了班扬内心的挣扎、疑惑、绝望，以及最终经历神恩典拯救的过程。作者毫不掩饰地展现了人性的软弱与神恩典的丰盛，为后世信徒提供了宝贵的属灵见证。这部作品不仅是个人见证，更是对救赎神学深度体验的文学化表达，展现了改革宗恩典神学的实际果效。',
            'summary_en': 'Bunyan\'s autobiographical spiritual work chronicles the author\'s journey from sinner to saint. Through candid first-person narrative, the book details Bunyan\'s inner struggles, doubts, despair, and ultimate experience of God\'s saving grace. The author unflinchingly reveals human weakness and the abundance of divine grace, providing valuable spiritual testimony for future believers. This work is not only personal testimony but also a literary expression of deep experiential theology of redemption, demonstrating the practical effects of Reformed grace theology.'
        },
        'book-143': {
            'summary_zh': '班扬《天路历程》作者的完整自传，原名《罪魁得恩记》，是英国文学史上最重要的属灵自传之一。作者以神学深度和文学技巧，详细记录了自己从童年到信主的完整属灵旅程，包括内心的恐惧、律法主义的捆绑、以及最终在基督里得着自由的经历。这部作品不仅展现了改革宗救赎论的个人实践，更成为后世研究清教徒灵修传统的重要文献，深刻影响了英语世界的基督教文学传统。',
            'summary_en': 'The complete autobiography of Bunyan, author of "Pilgrim\'s Progress," originally titled "Grace Abounding to the Chief of Sinners," is one of the most important spiritual autobiographies in English literary history. With theological depth and literary skill, the author records his complete spiritual journey from childhood to conversion, including inner fears, legalistic bondage, and ultimate freedom found in Christ. This work not only demonstrates personal practice of Reformed soteriology but also became crucial documentation for studying Puritan spiritual traditions, profoundly influencing Christian literary tradition in the English-speaking world.'
        },
        'book-144': {
            'summary_zh': '约翰·库珀（John Cooper）对灵魂与身体关系的系统哲学神学研究，回应现代神学中"整体人论"与传统"二元论"的争议。作者以扎实的哲学论证和圣经解经，为传统的身体-灵魂二元论进行辩护，同时探讨了死后状态、复活盼望与永恒生命的神学意涵。全书结合古典哲学、现代哲学心灵理论与圣经神学，为理解人的本质和永恒命运提供了深刻的学术视角。这是当代基督教人类学研究中的重要学术贡献。',
            'summary_en': 'John Cooper\'s systematic philosophical-theological study of soul-body relationships, addressing the modern theological debate between "holistic anthropology" and traditional "dualism." The author defends traditional body-soul dualism through rigorous philosophical argument and biblical exegesis, while exploring theological implications of intermediate state, resurrection hope, and eternal life. Combining classical philosophy, modern philosophy of mind, and biblical theology, the book provides profound academic perspective for understanding human nature and eternal destiny. This represents an important scholarly contribution to contemporary Christian anthropological studies.'
        },
        'book-145': {
            'summary_zh': '福克斯（John Foxe）的不朽经典，详细记录了从早期教会到16世纪宗教改革期间基督徒殉道者的事迹。这部作品不仅是教会历史的珍贵文献，更是见证信仰力量的伟大著作。福克斯以严谨的史学态度收集整理了大量殉道者的故事，展现了他们为真理而舍生的勇气和信念。全书特别关注英国宗教改革期间新教徒的受迫害经历，成为新教教会历史记忆的重要组成部分，深刻影响了后世基督徒的信仰认知和殉道观念。',
            'summary_en': 'John Foxe\'s immortal classic meticulously chronicles Christian martyrs from the early church through the 16th-century Reformation period. This work serves not only as precious church historical documentation but also as a great testament to the power of faith. Foxe compiled extensive martyrs\' accounts with rigorous historical scholarship, demonstrating their courage and conviction in sacrificing their lives for truth. The book particularly focuses on Protestant persecution during the English Reformation, becoming a crucial component of Protestant church historical memory and profoundly influencing subsequent Christian understanding of faith and martyrdom.'
        },
        'book-146': {
            'summary_zh': '改革宗护教学家约翰·弗雷姆（John Frame）的护教学巨著，建立在前提主义护教学方法论基础上。作者强调护教学的目的不是证明上帝的存在，而是荣耀上帝，并呈现基督教世界观的内在一致性。全书批判了传统证据主义护教学，主张从圣经的权威性出发进行护教，展现了范·蒂尔护教学派的成熟理论。弗雷姆特别关注护教学的神学基础和实践方法，为改革宗护教学提供了系统的理论框架和具体的应用指导。',
            'summary_en': 'Reformed apologist John Frame\'s masterwork in apologetics, grounded in presuppositionalist methodology. The author emphasizes that apologetics\' purpose is not to prove God\'s existence but to glorify God and demonstrate Christianity\'s internal coherence. The book critiques traditional evidentialist apologetics, advocating defense from biblical authority and showcasing mature Van Tillian apologetic theory. Frame particularly addresses apologetics\' theological foundations and practical methods, providing systematic theoretical framework and concrete application guidance for Reformed apologetics.'
        },
        'book-147': {
            'summary_zh': '约翰·弗雷姆系统神学三部曲的首部，深入探讨认识论在基督教神学中的核心地位。作者从改革宗前提主义立场出发，分析了知识的本质、启示的权威性、以及人类认知的局限性与可能性。全书批判了启蒙运动以来的理性主义认识论，提出以神为中心的认识论框架，强调圣经启示在一切知识中的最终权威。这部作品为当代改革宗认识论提供了重要的理论基础，是研究基督教认识论不可忽视的学术著作。',
            'summary_en': 'The first volume of John Frame\'s systematic theology trilogy, profoundly examining epistemology\'s central role in Christian theology. From a Reformed presuppositionalist stance, the author analyzes knowledge\'s nature, revelation\'s authority, and human cognition\'s limitations and possibilities. The book critiques rationalist epistemology since the Enlightenment, proposing a God-centered epistemological framework that emphasizes Scripture\'s ultimate authority in all knowledge. This work provides crucial theoretical foundation for contemporary Reformed epistemology and is an indispensable scholarly work for studying Christian epistemology.'
        },
        'book-148': {
            'summary_zh': '弗雷姆系统神学三部曲的第二部，专门论述神话语的启示、默示、无误性与权威性等核心议题。作者从改革宗正统立场为圣经的神圣权威进行深度辩护，回应现代圣经批判学的挑战。全书结合系统神学、释经学与护教学的方法，为圣经论提供了全面而精确的神学阐释。弗雷姆特别强调神话语在信仰与生活中的实际功用，展现了改革宗圣经观的丰富内涵和实践意义，是当代福音派圣经论研究的重要参考著作。',
            'summary_en': 'The second volume of Frame\'s systematic theology trilogy, addressing core issues of God\'s Word including revelation, inspiration, inerrancy, and authority. From a Reformed orthodox position, the author provides profound defense of Scripture\'s divine authority, responding to modern biblical critical challenges. Combining systematic theology, hermeneutics, and apologetic methods, the book offers comprehensive and precise theological interpretation of Scripture doctrine. Frame particularly emphasizes God\'s Word\'s practical function in faith and life, demonstrating Reformed biblical perspective\'s rich content and practical significance as an important reference for contemporary evangelical biblical studies.'
        },
        'book-149': {
            'summary_zh': '南非学者约翰·吉尔克里斯特（John Gilchrist）从护教学角度比较研究《古兰经》与历史上的耶稣。作者以严谨的学术方法分析了伊斯兰教经典中对耶稣的描述，与新约圣经及历史证据进行对比研究。全书不仅揭示了两个宗教传统在基督论上的根本差异，更为基督徒与穆斯林的对话提供了重要的学术基础。吉尔克里斯特以尊重但坚定的态度，为基督教的历史真实性和神学正确性进行辩护，是伊斯兰-基督教比较研究领域的重要学术贡献。',
            'summary_en': 'South African scholar John Gilchrist\'s apologetic comparative study of the Quran and the historical Jesus. The author rigorously analyzes Islamic scriptures\' descriptions of Jesus, comparing them with New Testament texts and historical evidence. The book not only reveals fundamental christological differences between two religious traditions but also provides important scholarly foundation for Christian-Muslim dialogue. With respectful yet firm approach, Gilchrist defends Christianity\'s historical authenticity and theological correctness, representing significant academic contribution to Islamic-Christian comparative studies.'
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
    
    print(f"Successfully updated {updated_count} books (book-140 to book-149)")

if __name__ == "__main__":
    update_summaries()