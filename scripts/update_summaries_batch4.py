#!/usr/bin/env python3
import json

def update_summaries():
    # 读取JSON文件
    with open('/Users/suyan/clawd/projects/gospel-app/web/src/data/books.json', 'r', encoding='utf-8') as f:
        books = json.load(f)
    
    # 定义要更新的书籍及其summary
    summaries = {
        'book-170': {
            'summary_zh': '约翰·斯托得（John Stott）为初信者和慕道友撰写的基督教信仰入门经典。作者以清晰简洁的语言，系统介绍了基督教信仰的核心内容：人的困境、神的解决方案、基督的身份与工作、以及基督徒生活的基本要素。全书避免了复杂的神学术语，却不失深度和准确性，特别适合知识分子和初学者。斯托得以牧者的心肠和学者的严谨，为读者提供了理解基督教信仰的坚实基础，使这部作品成为福音派教会布道和门训的重要工具书。',
            'summary_en': 'John Stott\'s classic introduction to Christian faith for new believers and seekers. With clear, concise language, the author systematically presents Christianity\'s core content: humanity\'s predicament, God\'s solution, Christ\'s identity and work, and basic elements of Christian living. The book avoids complex theological terminology while maintaining depth and accuracy, particularly suitable for intellectuals and beginners. With pastoral heart and scholarly rigor, Stott provides readers solid foundation for understanding Christian faith, making this work an important tool for evangelical churches\' evangelism and discipleship.'
        },
        'book-171': {
            'summary_zh': '斯托得关于十字架神学的里程碑式著作，被誉为20世纪最重要的十字架研究之一。作者从多个角度深入探讨基督十字架的意义：历史事件、神学教义、个人经历和社会影响。全书结合圣经解经、历史研究、系统神学与实践神学，全面阐释了代赎、和解、救赎等核心概念。斯托得特别强调十字架不仅解决个人罪的问题，更是神与世界和好的基础，为基督徒的社会参与提供了神学动力。这部著作深刻影响了当代福音派的十字架神学理解。',
            'summary_en': 'Stott\'s milestone work on theology of the cross, hailed as one of the 20th century\'s most important cross studies. The author deeply explores the cross\'s meaning from multiple angles: historical event, theological doctrine, personal experience, and social impact. Combining biblical exegesis, historical research, systematic theology, and practical theology, the book comprehensively explicates core concepts of substitution, reconciliation, and redemption. Stott particularly emphasizes that the cross not only solves individual sin problems but is the foundation for God\'s reconciliation with the world, providing theological motivation for Christian social engagement. This work profoundly influenced contemporary evangelical understanding of cross theology.'
        },
        'book-172': {
            'summary_zh': '爱德华兹（Jonathan Edwards）的哲学神学杰作，被誉为美国哲学史上最重要的著作之一。作者以严密的逻辑论证和深刻的哲学洞察，为加尔文主义的预定论提供了意志自由方面的哲学基础。全书分析了自由意志的本质、道德责任的根据、以及神的主权与人的责任之间的关系。爱德华兹巧妙地论证了真正的自由不在于选择的能力，而在于按照最强烈的倾向行动的能力。这部著作在哲学史上产生了深远影响，至今仍是讨论自由意志问题的重要文献。',
            'summary_en': 'Jonathan Edwards\' philosophical-theological masterpiece, hailed as one of the most important works in American philosophical history. With rigorous logical argumentation and profound philosophical insight, the author provides philosophical foundation for Calvinist predestination regarding free will. The book analyzes free will\'s nature, grounds for moral responsibility, and relationships between God\'s sovereignty and human responsibility. Edwards brilliantly argues that true freedom lies not in ability to choose but in ability to act according to strongest inclinations. This work has had profound influence in philosophical history and remains important literature for discussing free will problems.'
        },
        'book-173': {
            'summary_zh': '爱德华兹对原罪教义的系统哲学神学论证，回应18世纪理性主义对传统原罪观的挑战。作者结合圣经解经、哲学论证和经验观察，为亚当犯罪后人类本性的败坏提供了深刻的理论分析。全书探讨了罪的起源、本质、传承方式，以及它对人类理性、意志、情感的全面影响。爱德华兹特别强调原罪不仅是行为的败坏，更是本性的败坏，这种败坏使人无法靠自己的力量与神和好。这部著作为改革宗原罪论提供了重要的哲学辩护。',
            'summary_en': 'Edwards\' systematic philosophical-theological argumentation for original sin doctrine, responding to 18th-century rationalist challenges to traditional views of original sin. Combining biblical exegesis, philosophical argumentation, and empirical observation, the author provides profound theoretical analysis of human nature\'s corruption following Adam\'s sin. The book explores sin\'s origin, essence, transmission mode, and comprehensive impact on human reason, will, and emotions. Edwards particularly emphasizes that original sin is not merely behavioral corruption but nature\'s corruption, making humans unable to reconcile with God through their own power. This work provides important philosophical defense for Reformed original sin doctrine.'
        },
        'book-174': {
            'summary_zh': '乔纳森·李曼（Jonathan Leeman）关于教会纪律的权威性现代研究。作者从圣经神学和实践神学的双重视角，为当代教会重新审视教会纪律的重要性提供了系统的指导。全书分析了教会纪律的圣经根据、神学原理、实施步骤以及牧会智慧。李曼特别强调教会纪律的目的不是惩罚，而是恢复和保护——恢复犯罪的肢体，保护教会的圣洁。作者以温柔而坚定的语调，帮助现代教会在宽容与纯洁之间找到圣经的平衡，是当代教会治理研究的重要贡献。',
            'summary_en': 'Jonathan Leeman\'s authoritative modern study on church discipline. From dual perspectives of biblical theology and practical theology, the author provides systematic guidance for contemporary churches to re-examine church discipline\'s importance. The book analyzes church discipline\'s biblical basis, theological principles, implementation steps, and pastoral wisdom. Leeman particularly emphasizes that church discipline\'s purpose is not punishment but restoration and protection—restoring sinning members and protecting church holiness. With gentle yet firm tone, the author helps modern churches find biblical balance between tolerance and purity, representing important contribution to contemporary church governance studies.'
        },
        'book-175': {
            'summary_zh': '分子生物学家乔纳森·韦尔斯（Jonathan Wells）对达尔文进化论经典证据的科学批判。作者以专业的生物学知识，逐一分析了教科书中用来支持进化论的"偶像"——米勒实验、胚胎学证据、始祖鸟化石等，揭示了这些"证据"的科学问题和误导性。全书不是从宗教立场而是从科学方法论角度，质疑进化论作为唯一解释生命起源理论的垄断地位。韦尔斯的批判引起了科学界的激烈争议，但也促进了对进化论证据更严谨的科学审视。',
            'summary_en': 'Molecular biologist Jonathan Wells\' scientific critique of classic evidences for Darwinian evolution. With professional biological knowledge, the author systematically analyzes textbook "icons" supporting evolution—Miller\'s experiment, embryological evidence, Archaeopteryx fossils, etc.—revealing scientific problems and misleading aspects of these "evidences." The book questions evolution\'s monopolistic status as the sole theory explaining life\'s origin, not from religious standpoint but from scientific methodological perspective. Wells\' critique sparked intense scientific controversy while promoting more rigorous scientific examination of evolutionary evidence.'
        },
        'book-176': {
            'summary_zh': '教宗本笃十六世（约瑟夫·拉辛格）从天主教神学角度撰写的耶稣传记，试图弥合历史研究与信仰宣告之间的鸿沟。作者既运用现代圣经学的研究方法，又坚持传统教会对基督的信仰告白，呈现了一个既有历史真实性又有神学深度的耶稣形象。全书特别关注耶稣的教导、神迹、受难与复活，展现了基督论的深刻内涵。虽然这是天主教学者的作品，但其学术严谨性和神学洞察力也为新教读者提供了宝贵的参考，是当代基督论研究的重要贡献。',
            'summary_en': 'Pope Benedict XVI\'s (Joseph Ratzinger) biography of Jesus from Catholic theological perspective, attempting to bridge the gap between historical research and faith confession. The author employs modern biblical scholarship methods while maintaining traditional church christological confessions, presenting a Jesus both historically authentic and theologically profound. The book particularly focuses on Jesus\' teachings, miracles, passion, and resurrection, demonstrating christology\'s profound content. Though written by a Catholic scholar, its scholarly rigor and theological insight provide valuable reference for Protestant readers, representing important contribution to contemporary christological studies.'
        },
        'book-177': {
            'summary_zh': '约什·麦道卫（Josh McDowell）的护教学经典，为基督教信仰的历史真实性提供大量证据。作者从历史学、考古学、法学等多个角度，论证圣经的可靠性、耶稣的神性、复活的真实性等核心信仰。全书汇集了丰富的学术资料和专家证言，以法庭辩论的方式为基督教信仰进行系统辩护。麦道卫特别强调基督教不是盲信，而是建立在坚实历史证据基础上的理性信仰。这部著作虽然方法论上有争议，但在福音派护教学传统中占有重要地位。',
            'summary_en': 'Josh McDowell\'s apologetic classic providing extensive evidence for Christianity\'s historical authenticity. From perspectives of history, archaeology, law, and more, the author demonstrates Scripture\'s reliability, Jesus\' deity, resurrection\'s reality, and other core beliefs. The book compiles rich academic materials and expert testimonies, systematically defending Christian faith in courtroom debate style. McDowell particularly emphasizes that Christianity is not blind faith but rational faith based on solid historical evidence. Though methodologically controversial, this work holds important position in evangelical apologetic tradition.'
        },
        'book-178': {
            'summary_zh': '约书亚·拉斯穆森（Joshua Rasmussen）运用现代分析哲学方法为神存在论证的精深哲学著作。作者通过严密的逻辑分析和概念澄清，论证宇宙中必须存在一个必然存在的实体作为一切偶然存在者的最终根基。全书结合形而上学、模态逻辑、科学哲学等多个领域，为古典的本体论论证提供了全新的当代版本。拉斯穆森特别运用现代可能世界语义学和因果原理，构建了严谨的哲学论证体系。这部著作代表了当代分析哲学传统中上帝存在论证的最新发展。',
            'summary_en': 'Joshua Rasmussen\'s profound philosophical work using modern analytic philosophical methods for arguments for God\'s existence. Through rigorous logical analysis and conceptual clarification, the author argues that the universe must contain a necessarily existing entity as ultimate foundation for all contingent beings. Combining metaphysics, modal logic, philosophy of science, and more, the book provides fresh contemporary version of classical ontological arguments. Rasmussen particularly employs modern possible-world semantics and causal principles to construct rigorous philosophical argumentation system. This work represents latest developments in arguments for God\'s existence within contemporary analytic philosophical tradition.'
        },
        'book-179': {
            'summary_zh': 'K.斯科特·奥利芬特（K. Scott Oliphint）承继范·蒂尔传统的改革宗护教学著作。作者以圣约神学为基础，发展了"圣约护教学"的方法论，强调护教学必须以圣经启示为前提，而不能依赖中性的理性。全书批判了古典护教学和证据主义护教学的哲学基础，主张真正的护教学应当展现基督教世界观的内在一致性和解释力。奥利芬特特别强调护教学的目标不是说服不信者，而是为信仰提供理性的辩护，荣耀神的真理。这部著作为前提主义护教学提供了更加系统和平衡的理论框架。',
            'summary_en': 'K. Scott Oliphint\'s Reformed apologetic work continuing Van Til tradition. Based on covenantal theology, the author develops "covenantal apologetics" methodology, emphasizing that apologetics must presuppose biblical revelation rather than relying on neutral reason. The book critiques philosophical foundations of classical and evidentialist apologetics, arguing that true apologetics should demonstrate Christianity\'s internal coherence and explanatory power. Oliphint particularly emphasizes that apologetics\' goal is not persuading unbelievers but providing rational defense for faith, glorifying God\'s truth. This work provides more systematic and balanced theoretical framework for presuppositionalist apologetics.'
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
    
    print(f"Successfully updated {updated_count} books (book-170 to book-179)")

if __name__ == "__main__":
    update_summaries()