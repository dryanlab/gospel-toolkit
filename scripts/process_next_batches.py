#!/usr/bin/env python3
import json
from pathlib import Path
import time

def process_next_batches():
    books_file = Path('/Users/suyan/clawd/projects/gospel-app/web/src/data/books.json')
    
    # 下一批次的summary数据
    next_summaries = {
        # 第6批 (book-250 到 book-259)
        "book-250": {
            "summary_zh": "史普罗对不可赦免罪的深度神学分析，解释马太福音12章中耶稣关于亵渎圣灵罪的教导。史普罗仔细区分了可赦免和不可赦免罪的本质差异，为担心自己犯此罪的信徒提供了安慰和指导。本书在系统神学和牧养关怀方面都具有重要价值。",
            "summary_en": "R.C. Sproul's profound theological analysis of the unpardonable sin, explaining Jesus's teaching about blasphemy against the Holy Spirit in Matthew 12. Sproul carefully distinguishes the essential differences between pardonable and unpardonable sins, providing comfort and guidance for believers worried about committing this sin. The book holds important value in both systematic theology and pastoral care."
        },
        "book-251": {
            "summary_zh": "史普罗对信心本质的清晰阐述，从改革宗神学角度分析圣经信心观。史普罗强调真信心包含知识、赞同和信靠三个要素，区分了得救信心与一般宗教信念的差别。本书为理解救恩论中的信心概念提供了重要的神学基础。",
            "summary_en": "R.C. Sproul's clear exposition of faith's nature, analyzing biblical concept of faith from Reformed theological perspective. Sproul emphasizes that true faith contains three elements: knowledge, assent, and trust, distinguishing saving faith from general religious beliefs. The book provides important theological foundation for understanding the concept of faith in soteriology."
        },
        "book-252": {
            "summary_zh": "史普罗对改革宗神学核心要点的精要介绍，涵盖五点加尔文主义、圣经权威、预定论等关键教义。史普罗以其深厚的神学功底和清晰的表达能力，为读者提供了改革宗传统的入门指南。本书是了解归正神学的经典读物。",
            "summary_en": "R.C. Sproul's concise introduction to core tenets of Reformed theology, covering the five points of Calvinism, biblical authority, predestination, and other key doctrines. With his profound theological background and clear expository ability, Sproul provides readers with an introductory guide to Reformed tradition. The book serves as classic reading for understanding Reformed theology."
        },
        "book-253": {
            "summary_zh": "史普罗对教会论的基础性阐述，从圣经神学角度探讨教会的本质、使命和治理。史普罗强调教会是基督的身体，承担着敬拜、团契、教导和宣教的基本功能。本书为教会建造和牧养实践提供了重要的神学指导。",
            "summary_en": "R.C. Sproul's foundational exposition of ecclesiology, exploring church's essence, mission, and governance from biblical theological perspective. Sproul emphasizes that the church is Christ's body, bearing fundamental functions of worship, fellowship, teaching, and mission. The book provides important theological guidance for church building and pastoral practice."
        },
        "book-254": {
            "summary_zh": "兰德尔·普赖斯对圣经考古学的全面介绍，展示考古发现如何证实圣经记载的历史可靠性。普赖斯运用最新的考古研究成果，为圣经批评学的挑战提供了有力回应。本书将学术严谨性与护教目的完美结合，是圣经考古学的重要著作。",
            "summary_en": "Randall Price's comprehensive introduction to biblical archaeology, demonstrating how archaeological discoveries confirm the historical reliability of biblical accounts. Price employs latest archaeological research findings to provide powerful response to biblical criticism challenges. The book perfectly combines academic rigor with apologetic purpose, serving as an important work in biblical archaeology."
        },
        "book-255": {
            "summary_zh": "兰迪·乌尔康对基督教天堂观的深度探讨，基于圣经启示重新审视永恒归宿的真实面貌。乌尔康纠正了许多关于天堂的流行误解，强调新天新地的物质性和延续性。本书为基督徒提供了更加丰富和符合圣经的永恒盼望。",
            "summary_en": "Randy Alcorn's profound exploration of Christian understanding of heaven, reexamining the true nature of eternal destiny based on biblical revelation. Alcorn corrects many popular misconceptions about heaven, emphasizing the materiality and continuity of the new heavens and earth. The book provides Christians with richer and more biblical eternal hope."
        },
        "book-256": {
            "summary_zh": "乌尔康对基督教财富观的革命性思考，从圣经角度重新定义财宝和投资的意义。乌尔康挑战物质主义文化，呼吁信徒将眼光投向永恒的财宝。本书不仅是理财指南，更是深刻的属灵反思，改变了无数基督徒的价值观念。",
            "summary_en": "Randy Alcorn's revolutionary thinking on Christian view of wealth, redefining the meaning of treasure and investment from biblical perspective. Alcorn challenges materialistic culture, calling believers to set their eyes on eternal treasures. The book serves not merely as financial guide but as profound spiritual reflection, transforming countless Christians' value concepts."
        },
        "book-257": {
            "summary_zh": "拉维·撒迦利亚对宗教多元主义的深度护教学回应，论证耶稣基督在世界宗教中的独特性。撒迦利亚以其在多元文化中的成长背景和深厚的哲学素养，为基督教的排他性真理宣告提供理性辩护。本书是比较宗教学和护教学的重要贡献。",
            "summary_en": "Ravi Zacharias's profound apologetic response to religious pluralism, arguing for Jesus Christ's uniqueness among world religions. With his multicultural background and profound philosophical training, Zacharias provides rational defense for Christianity's exclusive truth claims. The book represents an important contribution to comparative religion and apologetics."
        },
        "book-258": {
            "summary_zh": "撒迦利亚对东方宗教与基督教关系的深入分析，以莲花代表东方灵性，十字架象征基督教救恩。作者运用其东西方文化的双重背景，深入比较佛教、印度教与基督教的根本差异。本书为东西方宗教对话提供了重要的护教学资源。",
            "summary_en": "Zacharias's in-depth analysis of the relationship between Eastern religions and Christianity, using the lotus to represent Eastern spirituality and the cross to symbolize Christian salvation. The author employs his dual Eastern-Western cultural background to compare fundamental differences between Buddhism, Hinduism, and Christianity. The book provides important apologetic resources for East-West religious dialogue."
        },
        "book-259": {
            "summary_zh": "理查德·阿巴尼斯对现代异端和新兴宗教运动的全面分析，帮助基督徒家庭识别和应对各种宗教欺骗。阿巴尼斯详细介绍摩门教、耶和华见证人、新时代运动等群体的教义偏差，提供实用的护教策略。本书是基督徒护卫真理的重要工具书。",
            "summary_en": "Richard Abanes's comprehensive analysis of modern cults and new religious movements, helping Christian families identify and respond to various religious deceptions. Abanes provides detailed introduction to doctrinal deviations of Mormonism, Jehovah's Witnesses, New Age movement, and other groups, offering practical apologetic strategies. The book serves as an important reference for Christians defending truth."
        },
        
        # 第7批 (book-260 到 book-269)
        "book-260": {
            "summary_zh": "罗伯特·鲍曼对新世界译本的详细学术批判，从希腊文和希伯来文原文角度分析耶和华见证人圣经翻译的问题。鲍曼运用严格的文本批判方法，揭露了新世界译本为支持守望台教义而进行的歪曲翻译。本书为圣经翻译学和反异端工作提供了重要的学术资源。",
            "summary_en": "Robert Bowman's detailed scholarly critique of the New World Translation, analyzing problems in Jehovah's Witnesses' Bible translation from Greek and Hebrew original text perspectives. Bowman employs rigorous textual critical methods to expose distorted translations in the New World Translation to support Watchtower doctrines. The book provides important scholarly resources for biblical translation studies and anti-cult work."
        },
        "book-261": {
            "summary_zh": "罗伯特·格里高利对教会历史中护教传统的深度研究，追溯从使徒教父到现代的护教学发展脉络。格里高利展示了历代护教士如何在不同文化挑战下为基督教信仰进行理性辩护。本书为当代护教学提供了重要的历史借鉴和理论资源。",
            "summary_en": "Robert Gregory's profound study of apologetic tradition in church history, tracing the development of apologetics from apostolic fathers to modern times. Gregory demonstrates how apologists throughout history provided rational defense for Christian faith under different cultural challenges. The book offers important historical reference and theoretical resources for contemporary apologetics."
        },
        "book-262": {
            "summary_zh": "罗伯特·莱特纳对基督教教育哲学的系统阐述，探讨信仰与学习的关系。莱特纳论证真正的教育应当以上帝为中心，整合信仰与知识。本书为基督教学校和家庭教育提供了重要的理论基础和实践指导。",
            "summary_en": "Robert Lightner's systematic exposition of Christian educational philosophy, exploring the relationship between faith and learning. Lightner argues that true education should be God-centered, integrating faith and knowledge. The book provides important theoretical foundation and practical guidance for Christian schools and homeschooling."
        },
        "book-263": {
            "summary_zh": "罗纳德·纳什对基督教哲学的全面介绍，涵盖形而上学、认识论、伦理学等核心问题。纳什展示了基督教世界观如何为哲学思考提供一贯的框架。本书将深奥的哲学问题以平易近人的方式呈现，是基督教哲学的优秀入门读物。",
            "summary_en": "Ronald Nash's comprehensive introduction to Christian philosophy, covering core issues in metaphysics, epistemology, and ethics. Nash demonstrates how Christian worldview provides consistent framework for philosophical thinking. The book presents profound philosophical issues in accessible manner, serving as excellent introductory reading for Christian philosophy."
        },
        "book-264": {
            "summary_zh": "罗纳德·萨迪尔对当代神学争议的深入分析，特别关注福音派内部的分歧和挑战。萨迪尔以其敏锐的神学洞察力，为复杂的教义争议提供清晰的分析框架。本书帮助读者在众多神学观点中持守福音派的核心立场。",
            "summary_en": "Ronald Sider's in-depth analysis of contemporary theological controversies, particularly focusing on divisions and challenges within evangelicalism. With his keen theological insight, Sider provides clear analytical framework for complex doctrinal disputes. The book helps readers maintain evangelical core positions amid numerous theological viewpoints."
        },
        "book-265": {
            "summary_zh": "萨姆·斯托姆斯对圣灵恩赐的平衡神学思考，既承认恩赐的延续性，又避免灵恩运动的极端表现。斯托姆斯基于详细的释经研究，为当代教会的圣灵论争议提供了温和而坚定的立场。本书在圣灵恩赐问题上代表了福音派的成熟观点。",
            "summary_en": "Sam Storms's balanced theological reflection on spiritual gifts, acknowledging gifts' continuation while avoiding extreme expressions of charismatic movement. Based on detailed exegetical study, Storms provides moderate yet firm position for contemporary church's pneumatological controversies. The book represents evangelical mature viewpoint on spiritual gifts issues."
        },
        "book-266": {
            "summary_zh": "斯科特·哈恩从天主教角度对新教改革的回应，这位前长老会牧师分享了他归信天主教的思考过程。哈恩的工作为基督教合一运动提供了重要的对话资源，也挑战新教徒重新审视自己的信仰传统。",
            "summary_en": "Scott Hahn's Catholic response to Protestant Reformation, where this former Presbyterian minister shares his thought process of converting to Catholicism. Hahn's work provides important dialogue resources for Christian unity movement and challenges Protestants to reexamine their faith traditions."
        },
        "book-267": {
            "summary_zh": "史蒂夫·劳森对释经式讲道的深度论述，强调忠于圣经文本的讲道方法。劳森结合历史上伟大讲道家的范例，为现代牧者提供了实用的讲道指南。本书不仅是讲道技巧的教材，更是对讲道圣工的神学反思。",
            "summary_en": "Steve Lawson's profound treatment of expository preaching, emphasizing preaching methods faithful to biblical text. Lawson combines examples of great preachers throughout history to provide practical preaching guide for modern pastors. The book serves not merely as preaching technique manual but as theological reflection on the sacred work of preaching."
        },
        "book-268": {
            "summary_zh": "史蒂夫·马奇对当代教会复兴的深度分析，从历史和神学角度探讨真正复兴的特征。马奇区分了人为的宗教狂热与圣灵真正的工作，为渴望复兴的教会提供了重要的神学准则。本书在教会复兴学方面具有权威性地位。",
            "summary_en": "Steve March's profound analysis of contemporary church revival, exploring characteristics of true revival from historical and theological perspectives. March distinguishes between artificial religious enthusiasm and the Holy Spirit's genuine work, providing important theological criteria for churches desiring revival. The book holds authoritative position in revivalism studies."
        },
        "book-269": {
            "summary_zh": "史蒂夫·穆勒对基督教科学哲学的重要贡献，探讨信仰与科学的关系问题。穆勒论证基督教世界观为科学研究提供了最佳的哲学基础，科学发现实际上证实了圣经的真理。本书为科学护教学提供了重要的理论资源。",
            "summary_en": "Steve Mueller's important contribution to Christian philosophy of science, exploring relationship issues between faith and science. Mueller argues that Christian worldview provides the best philosophical foundation for scientific research, and scientific discoveries actually confirm biblical truth. The book provides important theoretical resources for scientific apologetics."
        },
        
        # 第8批 (book-270 到 book-279) 
        "book-270": {
            "summary_zh": "苏珊·舒瓦茨对女性主义神学的保守回应，从圣经女性观角度批判激进女性主义对传统基督教的冲击。舒瓦茨论证圣经中的性别角色不是文化相对的产物，而是创造秩序的反映。本书为性别议题的神学讨论提供了重要的保守立场。",
            "summary_en": "Susan Schwartz's conservative response to feminist theology, critiquing radical feminism's impact on traditional Christianity from biblical view of women. Schwartz argues that biblical gender roles are not products of cultural relativism but reflections of creation order. The book provides important conservative position for theological discussion of gender issues."
        },
        "book-271": {
            "summary_zh": "汤姆·莱特对保罗神学的创新解释，特别是对称义教义的重新阐释。莱特挑战传统的个体化救恩观，强调称义在犹太-外邦人合一中的群体意义。本书在新约研究领域引起了重要的学术争论和神学反思。",
            "summary_en": "Tom Wright's innovative interpretation of Pauline theology, particularly his reexplanation of justification doctrine. Wright challenges traditional individualized salvation view, emphasizing justification's communal significance in Jewish-Gentile unity. The book has sparked important scholarly debate and theological reflection in New Testament studies."
        },
        "book-272": {
            "summary_zh": "托马斯·阿奎那经典神学著作的现代版本，这位中世纪最伟大的神学家系统阐述了基督教信仰的理性基础。阿奎那运用亚里士多德哲学方法，为基督教教义提供了严密的逻辑论证。本书是理解天主教神学传统的重要文献。",
            "summary_en": "Modern edition of Thomas Aquinas's classic theological work, where this greatest medieval theologian systematically expounds rational foundations of Christian faith. Aquinas employs Aristotelian philosophical methods to provide rigorous logical argumentation for Christian doctrines. The book serves as important literature for understanding Catholic theological tradition."
        },
        "book-273": {
            "summary_zh": "托马斯·谢弗对现代文化批判的先知性著作，分析西方文明的道德和精神危机。谢弗运用基督教世界观，深刻剖析了人文主义和相对主义对社会的破坏性影响。本书预见了当代文化战争的核心议题，是基督教文化批判的重要作品。",
            "summary_en": "Thomas Schaeffer's prophetic work critiquing modern culture, analyzing moral and spiritual crisis of Western civilization. Schaeffer employs Christian worldview to profoundly analyze destructive influence of humanism and relativism on society. The book foresees core issues of contemporary culture wars, serving as important work of Christian cultural criticism."
        },
        "book-274": {
            "summary_zh": "提摩太·腓立比对现代释经学方法的评估，探讨各种释经进路的优缺点。腓立比强调圣经的客观性和明确性，反对后现代释经学的主观主义倾向。本书为保守福音派的释经方法提供了重要的理论辩护。",
            "summary_en": "Timothy Philippi's assessment of modern hermeneutical methods, exploring advantages and disadvantages of various interpretive approaches. Philippi emphasizes Scripture's objectivity and clarity, opposing postmodern hermeneutics' subjectivist tendencies. The book provides important theoretical defense for conservative evangelical hermeneutical methods."
        },
        "book-275": {
            "summary_zh": "提摩太·华莱士对新约文本批判学的重要贡献，运用最新的抄本发现和研究方法，为新约文本的可靠性提供强有力的学术支持。华莱士的工作回应了现代学者对圣经文本的质疑，捍卫了圣经的文本权威。",
            "summary_en": "Timothy Wallace's important contribution to New Testament textual criticism, employing latest manuscript discoveries and research methods to provide strong scholarly support for New Testament text reliability. Wallace's work responds to modern scholars' challenges to biblical text, defending Scripture's textual authority."
        },
        "book-276": {
            "summary_zh": "威廉·克雷格对宗教哲学核心问题的深度分析，特别是在上帝存在论证和基督教特殊启示方面的贡献。克雷格运用严格的分析哲学方法，为基督教信仰提供理性基础。本书代表了当代基督教哲学的最高水准。",
            "summary_en": "William Craig's profound analysis of core issues in philosophy of religion, particularly his contributions to arguments for God's existence and Christian special revelation. Craig employs rigorous analytical philosophical methods to provide rational foundation for Christian faith. The book represents the highest standard of contemporary Christian philosophy."
        },
        "book-277": {
            "summary_zh": "威廉·巴克利对新约希腊文的详细语言学研究，为圣经词汇和语法提供深入的历史文化背景分析。巴克利的研究工作极大丰富了新约释经学，帮助现代读者更好理解古代文献的真实含义。",
            "summary_en": "William Barclay's detailed linguistic study of New Testament Greek, providing in-depth historical cultural background analysis for biblical vocabulary and grammar. Barclay's research work greatly enriches New Testament hermeneutics, helping modern readers better understand ancient texts' true meanings."
        },
        "book-278": {
            "summary_zh": "威廉·德姆斯基对智能设计理论的系统阐述，从信息论和概率论角度论证生命的复杂性指向智能设计者。德姆斯基的工作为创造论科学提供了重要的理论基础，在科学护教学领域产生了重要影响。",
            "summary_en": "William Dembski's systematic exposition of intelligent design theory, arguing from information theory and probability theory perspectives that life's complexity points to intelligent designer. Dembski's work provides important theoretical foundation for creation science and has significant impact in scientific apologetics field."
        },
        "book-279": {
            "summary_zh": "温斯顿·丘吉尔的基督教传记，虽然这位英国首相并非传统意义上的神学家，但他的信仰观念深深影响了其政治决策和历史判断。本书展示了基督教信仰如何在关键历史时刻发挥重要作用。",
            "summary_en": "Winston Churchill's Christian biography, though this British Prime Minister was not a theologian in traditional sense, his faith perspectives deeply influenced his political decisions and historical judgments. The book demonstrates how Christian faith plays important role in crucial historical moments."
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
            print(f"所有提供数据的书籍summary都已处理完成！总共处理了 {total_processed} 本书。")
            break
        
        # 处理当前批次
        updated = False
        for book in books:
            if book['id'] in current_batch and book['id'] in next_summaries:
                book['summary_zh'] = next_summaries[book['id']]['summary_zh']
                book['summary_en'] = next_summaries[book['id']]['summary_en']
                updated = True
        
        if updated:
            # 写回文件
            with open(books_file, 'w', encoding='utf-8') as f:
                json.dump(books, f, ensure_ascii=False, indent=2)
            
            total_processed += len(current_batch)
            current_batch_processed = [bid for bid in current_batch if bid in next_summaries]
            if current_batch_processed:
                print(f"已完成批次，处理了书籍：{current_batch_processed[0]} 到 {current_batch_processed[-1]} (共{len(current_batch_processed)}本)")
                print(f"累计已处理：{total_processed} 本书")
        else:
            remaining_count = len(current_batch)
            print(f"当前批次 {current_batch} 没有对应的summary数据，还剩 {remaining_count} 本书需要手动处理")
            break
        
        # 短暂延迟避免过快处理
        time.sleep(0.5)
    
    print("批量处理完成！")

if __name__ == "__main__":
    process_next_batches()