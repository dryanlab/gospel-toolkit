#!/usr/bin/env python3
import json
from pathlib import Path

def process_second_batch():
    books_file = Path('/Users/suyan/clawd/projects/gospel-app/web/src/data/books.json')
    
    # 读取JSON文件
    with open(books_file, 'r', encoding='utf-8') as f:
        books = json.load(f)
    
    # 第二批10本书的summary
    summaries = {
        "book-210": {
            "summary_zh": "穆雷·哈里斯对耶稣神性教义的详细研究，基于严谨的新约释经学分析，系统论证耶稣在新约圣经中的神性表述。哈里斯仔细考查每一处相关经文的语言学、历史背景和神学含义，回应了现代学者对耶稣神性的质疑。本书为基督论提供了坚实的圣经基础，是研究耶稣神性的重要学术资源。",
            "summary_en": "Murray Harris's detailed study of the doctrine of Christ's divinity, based on rigorous New Testament exegetical analysis, systematically demonstrating Jesus's divine expressions in the New Testament. Harris carefully examines the linguistic, historical, and theological implications of every relevant passage, responding to modern scholars' challenges to Christ's divinity. The book provides solid biblical foundation for Christology and serves as an important scholarly resource for studying Jesus's divinity."
        },
        "book-211": {
            "summary_zh": "N.T.赖特以其在保罗研究领域的权威地位，为这位使徒提供了全面而深刻的传记。赖特运用最新的历史考古发现和对第一世纪犹太-希腊文化背景的深入理解，重构了保罗的思想世界和宣教历程。本书超越传统的教义式解读，将保罗置于其历史文化语境中，揭示了这位使徒的革命性贡献和持久影响。",
            "summary_en": "N.T. Wright, with his authoritative position in Pauline studies, provides a comprehensive and profound biography of this apostle. Wright employs the latest historical archaeological discoveries and deep understanding of first-century Jewish-Hellenistic cultural background to reconstruct Paul's intellectual world and missionary journey. The book transcends traditional doctrinal interpretation, placing Paul in his historical cultural context to reveal this apostle's revolutionary contribution and lasting impact."
        },
        "book-212": {
            "summary_zh": "赖特以其独特的第三次任务视角，为读者呈现一个既忠于历史又富有现代意义的耶稣形象。作者避免了自由派神学的历史怀疑主义和保守派的非历史化倾向，运用严格的历史批判方法，在第一世纪犹太背景下重新理解耶稣的身份和使命。本书为耶稣研究提供了重要的方法论突破。",
            "summary_en": "Wright presents readers with a Jesus who is both historically faithful and modernly relevant through his unique 'Third Quest' perspective. The author avoids both liberal theology's historical skepticism and conservative tendencies toward dehistoricization, employing rigorous historical-critical methods to reunderstand Jesus's identity and mission within first-century Jewish context. The book provides important methodological breakthrough for Jesus research."
        },
        "book-213": {
            "summary_zh": "赖特对基督教复活盼望的深度神学阐释，挑战了流行文化中对天堂的肤浅理解。作者基于圣经神学，论证基督教的终极盼望不是脱离物质世界的灵魂不朽，而是身体复活和新天新地的完全更新。本书重新定义了死亡、复活和永恒的意义，为基督徒提供了更加丰富和符合圣经的末世观。",
            "summary_en": "Wright's profound theological exposition of Christian resurrection hope, challenging popular culture's shallow understanding of heaven. Based on biblical theology, the author argues that Christianity's ultimate hope is not the soul's immortality apart from the material world, but bodily resurrection and complete renewal of new heavens and earth. The book redefines the meaning of death, resurrection, and eternity, providing Christians with a richer and more biblical eschatological vision."
        },
        "book-214": {
            "summary_zh": "赖特对耶稣复活的历史性和神学意义的权威性研究。作者运用严格的历史方法，考察复活事件的历史证据，同时探讨复活在早期基督教神学形成中的核心作用。赖特既回应了现代学者对复活历史性的挑战，也阐释了复活事件对基督教信仰和实践的深远影响。本书被誉为复活研究的里程碑著作。",
            "summary_en": "Wright's authoritative study of the historicity and theological significance of Jesus's resurrection. The author employs rigorous historical methods to examine historical evidence of the resurrection event while exploring resurrection's central role in early Christian theological formation. Wright both responds to modern scholars' challenges to resurrection's historicity and explicates the resurrection event's profound impact on Christian faith and practice. The book is hailed as a milestone work in resurrection studies."
        },
        "book-215": {
            "summary_zh": "纳比尔·乔瑞希以其穆斯林背景和归信基督教的亲身经历，深入比较伊斯兰教和基督教对上帝本性的不同理解。作者不仅从教义层面分析两种信仰的根本分歧，更以其护教学训练，为基督徒与穆斯林对话提供了重要的神学资源。本书体现了理性论证与个人见证的完美结合。",
            "summary_en": "Nabeel Qureshi, with his Muslim background and personal experience of converting to Christianity, deeply compares Islamic and Christian understandings of God's nature. The author not only analyzes fundamental differences between the two faiths at the doctrinal level but also provides important theological resources for Christian-Muslim dialogue through his apologetic training. The book represents a perfect combination of rational argumentation and personal testimony."
        },
        "book-216": {
            "summary_zh": "乔瑞希的自传性护教作品，记录了一个虔诚穆斯林寻求真理并最终归信基督教的心路历程。作者以其深厚的伊斯兰学识和严谨的学术态度，诚实面对两种信仰传统的核心差异，特别是在历史证据和神学逻辑方面的辨析。本书既是个人见证，也是重要的比较宗教学研究。",
            "summary_en": "Qureshi's autobiographical apologetic work, documenting a devout Muslim's journey of seeking truth and ultimately converting to Christianity. With his profound Islamic scholarship and rigorous academic attitude, the author honestly confronts core differences between the two faith traditions, particularly analysis of historical evidence and theological logic. The book serves as both personal testimony and important comparative religious study."
        },
        "book-217": {
            "summary_zh": "内特·皮科维奇对新教信仰原则的系统阐述，回应当代天主教护教学对新教改革的挑战。作者从圣经权威、因信称义、唯独基督等核心教义出发，论证新教改革的神学正当性和历史必要性。本书为新教信徒提供了与天主教对话的重要神学资源，深化了对改革遗产的理解。",
            "summary_en": "Nate Pickowicz's systematic exposition of Protestant faith principles, responding to contemporary Catholic apologetic challenges to Protestant Reformation. Starting from core doctrines of biblical authority, justification by faith alone, and Christ alone, the author argues for the theological legitimacy and historical necessity of Protestant Reformation. The book provides important theological resources for Protestant believers' dialogue with Catholics and deepens understanding of the Reformation heritage."
        },
        "book-218": {
            "summary_zh": "尼古拉斯·沃尔特斯多夫对公义概念的深度哲学分析，将基督教正义观与当代政治哲学和法学理论进行对话。作者从圣经神学出发，发展出一套系统的基督教公义理论，涵盖权利、责任、惩罚和修复等层面。本书为基督教参与社会正义讨论提供了重要的理论基础。",
            "summary_en": "Nicholas Wolterstorff's profound philosophical analysis of the concept of justice, engaging Christian understanding of justice with contemporary political philosophy and legal theory. Starting from biblical theology, the author develops a systematic Christian theory of justice covering rights, responsibilities, punishment, and restoration. The book provides important theoretical foundation for Christian participation in social justice discussions."
        },
        "book-219": {
            "summary_zh": "尼克·里普肯对宣教事工的深刻反思，基于在伊斯兰世界多年的宣教经验，探讨在逼迫中持守信仰和传扬福音的挑战与机遇。作者质疑西方教会的'安全宣教'模式，呼吁信徒预备为主受苦，以十字架的疯狂回应世界的智慧。本书为当代宣教学提供了重要的实践神学思考。",
            "summary_en": "Nik Ripken's profound reflection on missionary work, based on years of experience in the Islamic world, exploring challenges and opportunities of maintaining faith and spreading the gospel under persecution. The author questions Western churches' 'safe missions' model, calling believers to prepare for suffering for the Lord, responding to worldly wisdom with the madness of the cross. The book provides important practical theological reflection for contemporary missiology."
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
    
    print("第二批10本书的summary已添加完成！")
    print("已处理的书籍：book-210 到 book-219")

if __name__ == "__main__":
    process_second_batch()