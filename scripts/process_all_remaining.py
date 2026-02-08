#!/usr/bin/env python3
import json
from pathlib import Path
import time

def process_all_remaining():
    books_file = Path('/Users/suyan/clawd/projects/gospel-app/web/src/data/books.json')
    
    # 所有剩余批次的summary数据
    all_summaries = {
        # 第3批 (book-220 到 book-229)
        "book-220": {
            "summary_zh": "南希·皮尔西对基督教世界观的系统阐述，强调基督教不仅是个人信仰，更是一套完整的真理体系。皮尔西展示了基督教如何在科学、艺术、文化、政治等各个领域提供独特且一贯的视角。本书为基督徒在世俗化社会中思考和行动提供了重要的思想框架，是世界观教育的经典教材。",
            "summary_en": "Nancy Pearcey's systematic exposition of Christian worldview, emphasizing that Christianity is not merely personal faith but a complete truth system. Pearcey demonstrates how Christianity provides unique and consistent perspectives in science, art, culture, politics, and other spheres. The book provides important intellectual framework for Christians thinking and acting in secularized society, serving as classic material for worldview education."
        },
        "book-221": {
            "summary_zh": "诺曼·盖斯勒的护教学百科全书，涵盖基督教护教学的各个方面，从哲学论证到历史证据，从科学问题到伦理挑战。这部巨著不仅系统整理了护教学的经典议题，也回应了当代学术界和流行文化对基督教的最新挑战。本书是护教学研究和实践的重要参考工具。",
            "summary_en": "Norman Geisler's encyclopedia of Christian apologetics, covering all aspects from philosophical arguments to historical evidence, from scientific issues to ethical challenges. This monumental work not only systematically organizes classic apologetic topics but also responds to latest challenges to Christianity from contemporary academia and popular culture. The book serves as an important reference tool for apologetic research and practice."
        },
        "book-222": {
            "summary_zh": "盖斯勒与萨利布合著的伊斯兰教护教学回应，针对穆斯林对基督教信仰的常见反对意见提供系统性答辩。作者们结合深厚的伊斯兰学识和基督教神学训练，在尊重伊斯兰传统的前提下，为基督教信仰提供理性辩护。本书是基督教与伊斯兰教对话领域的重要学术贡献。",
            "summary_en": "Geisler and Saleeb's collaborative response to Islamic apologetics, providing systematic answers to common Muslim objections to Christian faith. The authors combine profound Islamic scholarship with Christian theological training to offer rational defense of Christianity while respecting Islamic tradition. The book represents an important scholarly contribution to Christian-Islamic dialogue."
        },
        "book-223": {
            "summary_zh": "盖斯勒与豪合作的圣经疑难解答大全，系统处理旧约和新约中的各种疑难问题，包括历史矛盾、科学冲突、道德争议等。作者们运用解经学原理、历史考古发现和语言学分析，为看似难以调和的问题提供合理解释。本书是圣经研究和护教学的重要工具书。",
            "summary_en": "Geisler and Howe's comprehensive guide to biblical difficulties, systematically addressing various challenging issues in the Old and New Testaments, including historical contradictions, scientific conflicts, and moral controversies. The authors employ hermeneutical principles, historical archaeological discoveries, and linguistic analysis to provide reasonable explanations for seemingly irreconcilable problems. The book serves as an important reference for biblical studies and apologetics."
        },
        "book-224": {
            "summary_zh": "盖斯勒与尼克斯的圣经概论经典教材，全面介绍圣经的形成历史、正典确立过程、文本传承和翻译历史。本书结合最新的考古发现和文献研究成果，为圣经的可靠性和权威性提供坚实的学术基础。作为神学教育的标准教材，本书培养了无数圣经学者和牧者。",
            "summary_en": "Geisler and Nix's classic textbook on general introduction to the Bible, comprehensively covering biblical formation history, canonical establishment process, textual transmission, and translation history. The book combines latest archaeological discoveries and documentary research findings to provide solid academic foundation for biblical reliability and authority. As standard material for theological education, this book has trained countless biblical scholars and pastors."
        },
        "book-225": {
            "summary_zh": "诺曼·马尔科姆对安瑟伦本体论论证的深度分析，这是分析哲学传统中对中世纪神学论证的重要研究。马尔科姆重新审视安瑟伦的论证结构，特别是其逻辑形式和哲学前提，为理解上帝存在论证的哲学维度提供了重要洞察。本书在宗教哲学领域具有重要学术价值。",
            "summary_en": "Norman Malcolm's profound analysis of Anselm's ontological arguments, representing important research on medieval theological arguments within the analytic philosophical tradition. Malcolm reexamines the structure of Anselm's arguments, particularly their logical form and philosophical presuppositions, providing important insights for understanding the philosophical dimensions of arguments for God's existence. The book holds significant academic value in religious philosophy."
        },
        "book-226": {
            "summary_zh": "奥利弗·奥多诺万对变性问题的基督教伦理学思考，从神学人类学角度探讨性别认同和婚姻关系的本质。奥多诺万运用深厚的道德神学传统，在尊重人格尊严的前提下，为当代性别议题提供基督教视角的深度分析。本书在基督教伦理学领域具有重要的理论和实践意义。",
            "summary_en": "Oliver O'Donovan's Christian ethical reflection on transsexualism, exploring the essence of gender identity and marriage relationships from theological anthropological perspective. O'Donovan employs profound moral theological tradition to provide deep Christian analysis of contemporary gender issues while respecting human dignity. The book holds important theoretical and practical significance in Christian ethics."
        },
        "book-227": {
            "summary_zh": "乌斯·乾纳思对基督徒人生呼召的深度思考，探讨工作、事业和人生目标在基督教信仰中的意义。乾纳思超越了世俗的成功观念，从神学角度重新定义了人生的价值和目的。本书帮助信徒在现代社会中找到信仰与工作的平衡点，是基督徒生活实践的重要指南。",
            "summary_en": "Os Guinness's profound reflection on Christian life calling, exploring the meaning of work, career, and life goals within Christian faith. Guinness transcends secular notions of success to redefine life's value and purpose from theological perspective. The book helps believers find balance between faith and work in modern society, serving as an important guide for Christian living practice."
        },
        "book-228": {
            "summary_zh": "帕特里克·施赖纳对基督升天教义的深入研究，这一常被忽视的基督论主题在作者笔下得到系统阐释。施赖纳论证升天不仅是复活的延续，更是基督君王身份的确立和圣灵降临的前提。本书恢复了升天教义在基督教神学中的重要地位，为全备的基督论提供了重要补充。",
            "summary_en": "Patrick Schreiner's in-depth study of Christ's ascension doctrine, a often-neglected christological theme that receives systematic exposition under the author's treatment. Schreiner argues that ascension is not merely continuation of resurrection but establishment of Christ's kingship and prerequisite for the Spirit's coming. The book restores ascension doctrine's important position in Christian theology, providing important supplement to complete Christology."
        },
        "book-229": {
            "summary_zh": "帕特里克·谢里探讨圣灵与美学关系的创新神学研究。谢里从圣灵论出发，分析基督教美学的神学基础，论证真理、善良与美丽的内在统一。本书为基督教艺术理论和美学哲学提供了重要的神学资源，拓展了系统神学的研究领域。",
            "summary_en": "Patrick Sherry's innovative theological research exploring the relationship between Spirit and aesthetics. Starting from pneumatology, Sherry analyzes the theological foundation of Christian aesthetics, arguing for the intrinsic unity of truth, goodness, and beauty. The book provides important theological resources for Christian art theory and aesthetic philosophy, expanding the research domain of systematic theology."
        },
        
        # 第4批 (book-230 到 book-239)
        "book-230": {
            "summary_zh": "保罗·科潘对旧约上帝形象的护教学辩护，回应现代批评者对圣经中上帝道德属性的质疑。科潘深入分析古代近东文化背景，解释看似残酷的圣经叙事的真实意义。本书运用历史批判方法和道德哲学，为上帝的良善和公义提供理性论证，是旧约护教学的重要贡献。",
            "summary_en": "Paul Copan's apologetic defense of the Old Testament God's image, responding to modern critics' challenges to God's moral attributes in Scripture. Copan analyzes ancient Near Eastern cultural background in depth to explain the true meaning of seemingly harsh biblical narratives. The book employs historical-critical methods and moral philosophy to provide rational arguments for God's goodness and justice, representing an important contribution to Old Testament apologetics."
        },
        "book-231": {
            "summary_zh": "科潘与弗拉纳根合作深入研究旧约中的'灭绝令'问题，这是当代护教学面临的最大挑战之一。作者们从语言学、考古学和神学多个角度，重新解释这些争议性经文的历史背景和神学意义。本书为理解上帝的圣洁与慈爱提供了重要的解经学资源。",
            "summary_en": "Copan and Flannagan's collaborative in-depth study of the 'genocide commands' in the Old Testament, one of the greatest challenges facing contemporary apologetics. The authors reinterpret the historical background and theological significance of these controversial passages from linguistic, archaeological, and theological perspectives. The book provides important exegetical resources for understanding God's holiness and mercy."
        },
        "book-232": {
            "summary_zh": "保罗·费内尔对世俗人文主义的基督教批判，分析人文主义思想的历史演变和哲学问题。费内尔论证人文主义虽然强调人的尊严和价值，但缺乏超越性的根基，最终导向相对主义和虚无主义。本书为基督教人类学提供了重要的文化批判视角。",
            "summary_en": "Paul Vitz's Christian critique of secular humanism, analyzing the historical evolution and philosophical problems of humanistic thought. Vitz argues that while humanism emphasizes human dignity and worth, it lacks transcendent foundation, ultimately leading to relativism and nihilism. The book provides important cultural critical perspective for Christian anthropology."
        },
        "book-233": {
            "summary_zh": "保罗·约翰逊对现代知识分子的深度分析，揭露启蒙运动以来西方思想家的道德缺陷和理论矛盾。约翰逊通过具体案例，展示了脱离基督教价值观的理性主义如何导致思想与生活的分裂。本书为理解现代文化危机提供了重要的历史视角。",
            "summary_en": "Paul Johnson's profound analysis of modern intellectuals, exposing the moral flaws and theoretical contradictions of Western thinkers since the Enlightenment. Through specific cases, Johnson demonstrates how rationalism divorced from Christian values leads to separation between thought and life. The book provides important historical perspective for understanding modern cultural crisis."
        },
        "book-234": {
            "summary_zh": "彼得·克里夫特对现代文化中虚无主义和相对主义的诊断，从基督教哲学角度分析当代精神危机的根源。克里夫特论证只有在绝对真理的基础上，人类才能找到生存的意义和道德的根基。本书为后现代处境中的信仰生活提供了重要的哲学反思。",
            "summary_en": "Peter Kreeft's diagnosis of nihilism and relativism in modern culture, analyzing the roots of contemporary spiritual crisis from Christian philosophical perspective. Kreeft argues that only on the foundation of absolute truth can humanity find meaning for existence and moral foundation. The book provides important philosophical reflection for faith life in postmodern context."
        },
        "book-235": {
            "summary_zh": "彼得·恩斯对圣经诠释的创新思考，主张基督教释经学应当拥抱多元化和语境化的解读方法。恩斯认为圣经的人文特征并不削弱其神圣权威，反而彰显了上帝道成肉身的救赎方式。本书在保守派和自由派之间寻求释经学的第三条路。",
            "summary_en": "Peter Enns's innovative thinking on biblical interpretation, advocating that Christian hermeneutics should embrace pluralistic and contextualized reading methods. Enns argues that Scripture's human characteristics do not diminish its divine authority but rather manifest God's incarnational redemptive approach. The book seeks a third way in hermeneutics between conservative and liberal positions."
        },
        "book-236": {
            "summary_zh": "彼得·希克斯对基督教末世论的现代阐释，特别关注'已然未然'的张力如何影响基督徒的现世生活。希克斯论证正确的末世观念能够为信徒提供盼望和动力，同时避免极端的逃世主义或乐观主义。本书为基督徒在世生活提供了重要的神学指导。",
            "summary_en": "Peter Hicks's modern exposition of Christian eschatology, particularly focusing on how the 'already-not yet' tension affects Christians' present life. Hicks argues that proper eschatological understanding provides believers with hope and motivation while avoiding extreme escapism or optimism. The book provides important theological guidance for Christians' life in this world."
        },
        "book-237": {
            "summary_zh": "菲利普·莱肯对讲道学的全面论述，强调释经式讲道在教会生活中的核心地位。莱肯结合深厚的改革宗传统和现代沟通理论，为牧者提供了实用的讲道指南。本书不仅是技巧性的教材，更是对讲道神学基础的深度反思。",
            "summary_en": "Philip Ryken's comprehensive treatment of homiletics, emphasizing the central position of expository preaching in church life. Ryken combines profound Reformed tradition with modern communication theory to provide practical preaching guide for pastors. The book serves not merely as technical manual but as profound reflection on the theological foundation of preaching."
        },
        "book-238": {
            "summary_zh": "菲利普·詹金斯对全球基督教发展趋势的重要研究，预测并分析21世纪基督教的地理重心转移。詹金斯指出南半球教会的兴起将重塑基督教的神学面貌和社会影响。本书为理解当代基督教的全球化特征提供了重要的社会学视角。",
            "summary_en": "Philip Jenkins's important study of global Christianity development trends, predicting and analyzing the geographical shift of Christianity's center in the 21st century. Jenkins points out that the rise of Southern Hemisphere churches will reshape Christianity's theological landscape and social influence. The book provides important sociological perspective for understanding contemporary Christianity's globalization characteristics."
        },
        "book-239": {
            "summary_zh": "菲利普·扬西对怀疑与信仰关系的深度探讨，以其个人的信仰历程为背景，诚实面对基督教信仰中的困难问题。扬西展示了怀疑可以成为信仰成长的催化剂，而非信仰的敌人。本书为在后现代文化中挣扎的信徒提供了重要的心灵资源。",
            "summary_en": "Philip Yancey's profound exploration of the relationship between doubt and faith, using his personal faith journey as background to honestly confront difficult questions in Christian belief. Yancey demonstrates that doubt can become a catalyst for faith growth rather than faith's enemy. The book provides important spiritual resources for believers struggling in postmodern culture."
        },
        
        # 第5批 (book-240 到 book-249)  
        "book-240": {
            "summary_zh": "约翰·雀伯的复数制教会论，挑战传统的单一制教会模式，倡导基于新约圣经的多元化教会治理结构。雀伯论证长老制既保持教会的合一，又尊重地方教会的自主性，是最符合圣经原则的教会体制。本书为教会治理实践提供了重要的圣经神学基础。",
            "summary_en": "John Ziesler's plural eldership ecclesiology, challenging traditional single-elder church models and advocating pluralistic church governance structure based on New Testament Scripture. Ziesler argues that presbyterian polity maintains church unity while respecting local church autonomy, representing the most biblical church system. The book provides important biblical-theological foundation for church governance practice."
        },
        "book-241": {
            "summary_zh": "理查德·伯奇德对圣经权威论的系统阐述，在后现代文化挑战下重申圣经的无误性和充分性。伯奇德运用最新的释经学理论和护教学论证，为圣经权威提供坚实的理论基础。本书是保守派圣经观的重要理论贡献。",
            "summary_en": "Richard Puckett's systematic exposition of biblical authority, reaffirming Scripture's inerrancy and sufficiency amid postmodern cultural challenges. Puckett employs latest hermeneutical theories and apologetic arguments to provide solid theoretical foundation for biblical authority. The book represents an important theoretical contribution to conservative biblical views."
        },
        "book-242": {
            "summary_zh": "理查德·普拉特对旧约释经学的创新贡献，强调历史文化背景在理解古代文献中的重要作用。普拉特结合考古学发现和古代近东研究成果，为旧约释经提供了更加丰富的文化视角。本书为圣经研究的历史批判方法提供了建设性的发展。",
            "summary_en": "Richard Pratt's innovative contribution to Old Testament hermeneutics, emphasizing the important role of historical cultural background in understanding ancient texts. Pratt combines archaeological discoveries with ancient Near Eastern research findings to provide richer cultural perspective for Old Testament interpretation. The book offers constructive development for historical-critical methods in biblical studies."
        },
        "book-243": {
            "summary_zh": "理查德·斯文伯恩运用分析哲学方法为基督教信仰提供理性辩护，特别是在概率论和认识论方面的贡献。斯文伯恩论证基督教信仰在理性审查下是可信的，甚至是最可能为真的世界观。本书代表了当代宗教哲学的最高水准。",
            "summary_en": "Richard Swinburne's rational defense of Christian faith using analytical philosophical methods, particularly his contributions in probability theory and epistemology. Swinburne argues that Christian belief is credible under rational scrutiny and even the most likely true worldview. The book represents the highest standard of contemporary religious philosophy."
        },
        "book-244": {
            "summary_zh": "理查德·海斯对新约伦理学的重要研究，探讨早期基督教道德教导的圣经基础和现代应用。海斯运用叙事批判和正典阅读方法，为当代道德争议提供圣经神学的指导原则。本书在新约伦理学领域具有权威性地位。",
            "summary_en": "Richard Hays's important study of New Testament ethics, exploring biblical foundations and modern applications of early Christian moral teachings. Hays employs narrative criticism and canonical reading methods to provide biblical-theological guiding principles for contemporary moral controversies. The book holds authoritative position in New Testament ethics."
        },
        "book-245": {
            "summary_zh": "理查德·凯勒对改革宗神学传统的现代阐释，特别关注加尔文主义在当代文化中的相关性和适应性。凯勒展示了改革宗神学如何为现代信徒的信仰和生活提供指导，同时回应后现代思想的挑战。本书为改革宗传统的当代发展提供了重要思路。",
            "summary_en": "Richard Kuyper's modern exposition of Reformed theological tradition, particularly focusing on Calvinism's relevance and adaptability in contemporary culture. Kuyper demonstrates how Reformed theology provides guidance for modern believers' faith and life while responding to postmodern challenges. The book provides important direction for contemporary development of Reformed tradition."
        },
        "book-246": {
            "summary_zh": "理查德·米德尔顿对圣经世界观的后现代阐释，探讨圣经叙事如何塑造基督徒的身份认同和社会实践。米德尔顿强调圣经不仅是教义来源，更是基督教群体的身份叙事。本书为后现代处境中的圣经诠释提供了重要的叙事神学资源。",
            "summary_en": "Richard Middleton's postmodern exposition of biblical worldview, exploring how biblical narrative shapes Christian identity and social practice. Middleton emphasizes that Scripture serves not merely as doctrinal source but as identity narrative for Christian community. The book provides important narrative theological resources for biblical interpretation in postmodern context."
        },
        "book-247": {
            "summary_zh": "罗杰·尼科尔对归正神学的系统介绍，涵盖改革宗信仰的历史发展、核心教义和现代应用。尼科尔以其深厚的神学素养和牧者心肠，为读者提供了归正传统的全面导览。本书是了解改革宗神学的重要入门读物。",
            "summary_en": "Roger Nicole's systematic introduction to Reformed theology, covering historical development, core doctrines, and modern applications of Reformed faith. With his profound theological background and pastoral heart, Nicole provides readers comprehensive guide to Reformed tradition. The book serves as important introductory reading for understanding Reformed theology."
        },
        "book-248": {
            "summary_zh": "罗素·摩尔对基督教政治伦理的深度思考，探讨教会在公共领域中的角色和责任。摩尔既反对政教合一的神权主义，也批评完全政教分离的世俗主义，寻求教会参与社会的第三条道路。本书为基督徒的政治参与提供了重要的神学指导。",
            "summary_en": "Russell Moore's profound reflection on Christian political ethics, exploring the church's role and responsibility in public sphere. Moore opposes both theocratic caesaropapism and complete church-state separation secularism, seeking a third way for church's social engagement. The book provides important theological guidance for Christians' political participation."
        },
        "book-249": {
            "summary_zh": "萨拉·萨默斯对女性主义神学的批判性分析，从保守福音派立场回应女性主义对传统基督教的挑战。萨默斯论证圣经中的男女角色分工并不意味着价值高低，而是反映创造秩序的美善。本书为性别议题的神学讨论提供了重要参考。",
            "summary_en": "Sarah Summers's critical analysis of feminist theology, responding to feminism's challenges to traditional Christianity from conservative evangelical position. Summers argues that biblical gender role differentiation doesn't imply value hierarchy but reflects the goodness of creation order. The book provides important reference for theological discussion of gender issues."
        }
    }
    
    batch_size = 10
    total_processed = 0
    
    while True:
        # 读取JSON文件
        with open(books_file, 'r', encoding='utf-8') as f:
            books = json.load(f)
        
        # 找到下一批需要处理的书籍
        current_batch = []
        for book in books:
            try:
                book_num = int(book['id'].replace('book-', ''))
                if book_num >= 200 and (not book.get('summary_zh') or not book.get('summary_en')):
                    current_batch.append(book['id'])
                    if len(current_batch) >= batch_size:
                        break
            except (ValueError, KeyError):
                continue
        
        if not current_batch:
            print(f"所有书籍的summary都已处理完成！总共处理了 {total_processed} 本书。")
            break
        
        # 处理当前批次
        updated = False
        for book in books:
            if book['id'] in current_batch and book['id'] in all_summaries:
                book['summary_zh'] = all_summaries[book['id']]['summary_zh']
                book['summary_en'] = all_summaries[book['id']]['summary_en']
                updated = True
        
        if updated:
            # 写回文件
            with open(books_file, 'w', encoding='utf-8') as f:
                json.dump(books, f, ensure_ascii=False, indent=2)
            
            total_processed += len(current_batch)
            print(f"已完成第{total_processed//batch_size}批次，处理了书籍：{current_batch[0]} 到 {current_batch[-1]} (共{len(current_batch)}本)")
            print(f"累计已处理：{total_processed} 本书")
        else:
            print(f"当前批次 {current_batch} 没有对应的summary数据，跳过...")
            break
        
        # 短暂延迟避免过快处理
        time.sleep(0.5)
    
    print("批量处理完成！")

if __name__ == "__main__":
    process_all_remaining()