#!/usr/bin/env python3
import json

def update_summaries():
    # 读取JSON文件
    with open('/Users/suyan/clawd/projects/gospel-app/web/src/data/books.json', 'r', encoding='utf-8') as f:
        books = json.load(f)
    
    # 定义要更新的书籍及其summary
    summaries = {
        'book-190': {
            'summary_zh': '改革宗学者金·里德尔巴格（Kim Riddlebarger）为无千禧年论提供的系统神学辩护。作者通过详细的圣经解经和历史神学分析，论证无千禧年论是最符合圣经教导的末世论立场。全书批判了前千禧年论和后千禧年论的解经基础，特别强调启示录20章应当以象征性而非字面意思来理解。里德尔巴格论证说基督的千年统治并非未来的地上王国，而是从十字架到再来期间的属灵统治。这部著作为改革宗传统的末世论提供了重要的学术支持。',
            'summary_en': 'Reformed scholar Kim Riddlebarger\'s systematic theological defense of amillennialism. Through detailed biblical exegesis and historical-theological analysis, the author argues that amillennialism is the most biblically consistent eschatological position. The book critiques exegetical foundations of premillennialism and postmillennialism, particularly emphasizing that Revelation 20 should be understood symbolically rather than literally. Riddlebarger argues that Christ\'s thousand-year reign is not a future earthly kingdom but spiritual rule from the cross to the second coming. This work provides important scholarly support for Reformed eschatological tradition.'
        },
        'book-191': {
            'summary_zh': '宣教学巨匠莱斯利·纽比金（Lesslie Newbigin）关于在多元文化社会中传播福音的深刻反思。作者以丰富的宣教经验和神学洞察，分析了基督教在后现代、多元化社会中面临的挑战与机遇。全书探讨了绝对真理与相对主义、福音的普世性与文化特殊性、教会的见证与社会参与等核心议题。纽比金特别强调福音不仅是个人救恩的信息，更是对整个文化和社会的挑战与更新。这部著作对理解当代宣教学和文化参与神学具有深远影响。',
            'summary_en': 'Missiological giant Lesslie Newbigin\'s profound reflection on communicating the gospel in pluralistic society. With rich missionary experience and theological insight, the author analyzes challenges and opportunities Christianity faces in postmodern, pluralistic society. The book explores core issues including absolute truth versus relativism, gospel universality versus cultural particularity, and church witness versus social engagement. Newbigin particularly emphasizes that the gospel is not only personal salvation message but also challenge and renewal for entire culture and society. This work has profound influence on understanding contemporary missiology and cultural engagement theology.'
        },
        'book-192': {
            'summary_zh': '马克·狄马可（Mark Dever）提出的健康教会评估标准，成为当代教会复兴运动的重要指南。作者从圣经神学角度归纳出九个健康教会的基本标志：解经式讲道、合乎圣经的神学、合乎圣经的福音理解、正确的悔改归信观、合乎圣经的传福音、合乎圣经的教会成员制、合乎圣经的教会纪律、关心门训和成长、合乎圣经的教会领袖制。狄马可以简洁明了的方式，为教会健康提供了实用的诊断工具，深刻影响了北美和世界各地的教会复兴运动。',
            'summary_en': 'Mark Dever\'s healthy church assessment criteria, becoming an important guide for contemporary church revitalization movements. From biblical-theological perspective, the author identifies nine basic marks of healthy churches: expositional preaching, biblical theology, biblical understanding of the gospel, biblical understanding of conversion, biblical evangelism, biblical church membership, biblical church discipline, concern for discipleship and growth, and biblical church leadership. With clear, accessible approach, Dever provides practical diagnostic tools for church health, profoundly influencing church revitalization movements in North America and worldwide.'
        },
        'book-193': {
            'summary_zh': '狄马可关于教会群体生活吸引力的深入思考。作者论证说健康的基督教群体本身就是最有力的福音见证，能够在世俗社会中发出独特的光芒。全书分析了什么样的教会群体能够真正"令人信服"——不是靠世俗的成功标准，而是靠属灵的真实性、爱的关系、和福音的大能。狄马可特别强调教会的反主流文化特征反而是其吸引力的源泉，因为它展现了神国与世界的根本不同。这部作品为教会如何在后基督教文化中保持见证力提供了重要指导。',
            'summary_en': 'Dever\'s profound reflection on the attractiveness of church community life. The author argues that healthy Christian community itself is the most powerful gospel witness, capable of shining unique light in secular society. The book analyzes what kind of church community can truly be "compelling"—not through worldly success standards but through spiritual authenticity, loving relationships, and gospel power. Dever particularly emphasizes that church\'s countercultural characteristics are actually the source of its attractiveness, demonstrating fundamental differences between God\'s kingdom and the world. This work provides important guidance for how churches maintain witness power in post-Christian culture.'
        },
        'book-194': {
            'summary_zh': '马克·琼斯（Mark Jones）关于认识基督的神学灵修著作。作者以改革宗神学传统为根基，深入探讨了基督的位格与工作，帮助信徒建立对救主更深刻的认识。全书结合系统神学的准确性与敬虔文学的温暖，分析了基督的神人二性、先知祭司君王职分、以及他在信徒生命中的持续工作。琼斯特别强调认识基督不仅是头脑的知识，更是心灵的相交和生命的变化。这部作品为改革宗传统的基督论研究和灵修实践提供了宝贵的资源。',
            'summary_en': 'Mark Jones\' theological-devotional work on knowing Christ. Grounded in Reformed theological tradition, the author deeply explores Christ\'s person and work, helping believers develop deeper knowledge of their Savior. The book combines systematic theology\'s precision with devotional literature\'s warmth, analyzing Christ\'s divine-human natures, prophetic-priestly-kingly offices, and his continuing work in believers\' lives. Jones particularly emphasizes that knowing Christ involves not merely intellectual knowledge but heart communion and life transformation. This work provides valuable resource for Reformed christological studies and devotional practice.'
        },
        'book-195': {
            'summary_zh': '马丁·路德（Martin Luther）回应伊拉斯谟《论自由意志》的宗教改革经典论战文献。路德以强烈的语言和深刻的神学论证，维护了恩典独作的核心教义，强调堕落后的人类意志在救恩问题上完全无能。全书不仅是神学争辩，更是对人类本性、神的主权、救恩本质等根本问题的深度探讨。路德的论证直接影响了后来的改革宗神学发展，特别是在预定论和恩典教义方面。这部著作被认为是理解宗教改革神学精髓的必读文献，展现了路德思想的成熟和深度。',
            'summary_en': 'Martin Luther\'s response to Erasmus\' "On Free Will," a classic Reformation theological debate document. With passionate language and profound theological argumentation, Luther defends the core doctrine of grace alone, emphasizing fallen humanity\'s complete inability regarding salvation. The book is not merely theological debate but profound exploration of fundamental questions about human nature, God\'s sovereignty, and salvation\'s essence. Luther\'s argumentation directly influenced subsequent Reformed theological development, particularly in predestination and grace doctrines. This work is considered essential reading for understanding Reformation theology\'s essence, demonstrating Luther\'s thought\'s maturity and depth.'
        },
        'book-196': {
            'summary_zh': '迈克尔·艾伦（Michael Allen）的当代成圣论研究，为这一古老教义提供了新的神学洞察。作者结合历史神学、圣经神学和系统神学的方法，重新审视了成圣在基督教教义体系中的地位和意义。全书特别关注成圣与称义的关系、圣灵在成圣中的工作、以及成圣的渐进性与完全性问题。艾伦以学术严谨性和牧会关怀相结合的方式，为当代信徒理解成圣的复杂性提供了平衡而深刻的指导。这是一部代表当代改革宗成圣论发展水平的重要学术作品。',
            'summary_en': 'Michael Allen\'s contemporary study of sanctification doctrine, providing fresh theological insights for this ancient teaching. Combining historical theology, biblical theology, and systematic theology methods, the author re-examines sanctification\'s position and significance within Christian doctrinal system. The book particularly focuses on sanctification-justification relationships, the Holy Spirit\'s sanctifying work, and issues of sanctification\'s progressiveness versus completeness. Allen combines scholarly rigor with pastoral concern to provide balanced, profound guidance for contemporary believers understanding sanctification\'s complexity. This represents important scholarly work reflecting contemporary Reformed sanctification doctrine development levels.'
        },
        'book-197': {
            'summary_zh': '生物化学家迈克尔·贝希（Michael Behe）挑战达尔文进化论的开创性科学著作。贝希提出了"不可简化的复杂性"概念，论证许多生物系统如细菌鞭毛、血液凝固机制等，由于其复杂的相互依存关系，无法通过渐进的自然选择过程产生。作者从分子生物学的角度，为智能设计论提供了科学论据，引起了科学界和哲学界的激烈争论。虽然贝希的观点备受争议，但他开创了从生物化学角度质疑达尔文主义的新路径，对科学与信仰的对话产生了重要影响。',
            'summary_en': 'Biochemist Michael Behe\'s groundbreaking scientific work challenging Darwinian evolution. Behe proposes the concept of "irreducible complexity," arguing that many biological systems like bacterial flagella and blood clotting mechanisms cannot arise through gradual natural selection due to their complex interdependencies. From molecular biology perspective, the author provides scientific arguments for intelligent design, sparking intense debate in scientific and philosophical communities. Though Behe\'s views are highly controversial, he pioneered new pathways for questioning Darwinism from biochemical perspective, significantly impacting science-faith dialogue.'
        },
        'book-198': {
            'summary_zh': '迈克尔·布朗（Michael Brown）关于圣经天使教义的系统研究。作者通过详细的圣经解经，澄清了关于天使本质、职责、等级等方面的各种误解和迷信。全书从旧约到新约，全面梳理了圣经中关于天使的启示，包括堕落天使、撒旦、魔鬼等黑暗势力的真相。布朗特别强调要以圣经为准绳，避免过度神秘化或过度理性化的极端。这部著作为信徒提供了关于属灵世界的平衡而准确的认识，有助于建立健康的属灵观。',
            'summary_en': 'Michael Brown\'s systematic study of biblical angelology. Through detailed biblical exegesis, the author clarifies various misunderstandings and superstitions about angels\' nature, duties, and hierarchy. From Old to New Testament, the book comprehensively traces biblical revelation about angels, including fallen angels, Satan, and demonic dark forces. Brown particularly emphasizes using Scripture as standard, avoiding extremes of over-mystification or over-rationalization. This work provides believers with balanced, accurate understanding of the spiritual world, helping establish healthy spiritual perspectives.'
        },
        'book-199': {
            'summary_zh': '犹太裔基督徒学者迈克尔·布朗回应犹太人对耶稣和基督教常见反对意见的护教学著作。作者以深厚的希伯来文和犹太文化背景，从旧约预言、拉比传统、历史证据等多个角度，为耶稣的弥赛亚身份提供辩护。全书特别关注犹太人对耶稣的神性、童女生子、代赎死亡、以及基督教背离犹太教等问题的质疑。布朗以学者的严谨和传道人的热情，为犹太-基督教对话提供了重要的护教资源，对理解早期基督教与犹太教的关系具有重要价值。',
            'summary_en': 'Jewish-Christian scholar Michael Brown\'s apologetic work responding to common Jewish objections to Jesus and Christianity. With deep Hebrew and Jewish cultural background, the author defends Jesus\' messianic identity from multiple angles including Old Testament prophecy, rabbinic tradition, and historical evidence. The book particularly addresses Jewish challenges to Jesus\' divinity, virgin birth, substitutionary death, and Christianity\'s departure from Judaism. With scholarly rigor and evangelistic passion, Brown provides important apologetic resources for Jewish-Christian dialogue, offering significant value for understanding early Christianity\'s relationship with Judaism.'
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
    
    print(f"Successfully updated {updated_count} books (book-190 to book-199)")

if __name__ == "__main__":
    update_summaries()