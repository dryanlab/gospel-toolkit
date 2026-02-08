#!/usr/bin/env python3
import json

def update_summaries():
    # 读取JSON文件
    with open('/Users/suyan/clawd/projects/gospel-app/web/src/data/books.json', 'r', encoding='utf-8') as f:
        books = json.load(f)
    
    # 定义要更新的书籍及其summary
    summaries = {
        'book-160': {
            'summary_zh': '清教徒神学巨匠约翰·欧文（John Owen）关于成圣教义的权威性著作。作者以深厚的圣经解经和精确的神学论证，阐释了信徒在救恩中渐进成圣的过程。全书深入分析了成圣与称义的关系、圣灵在成圣中的工作、以及信徒在与罪争战中的责任。欧文特别强调成圣既是神的工作，也需要信徒的努力配合，展现了改革宗"恩典独作与人的责任"并存的深刻神学智慧。这部17世纪的神学经典至今仍是研究成圣教义的最重要文献之一。',
            'summary_en': 'Puritan theological giant John Owen\'s authoritative work on the doctrine of sanctification. Through profound biblical exegesis and precise theological argumentation, the author explicates the progressive sanctification process in salvation. The book deeply analyzes the relationship between sanctification and justification, the Holy Spirit\'s work in sanctification, and believers\' responsibility in warfare against sin. Owen particularly emphasizes that sanctification is both God\'s work and requires believers\' active cooperation, demonstrating profound theological wisdom of Reformed "grace alone with human responsibility." This 17th-century theological classic remains one of the most important documents for studying sanctification doctrine.'
        },
        'book-161': {
            'summary_zh': '欧文最著名的神学巨著，对限定救赎（特定救赎）教义的经典阐述。作者以无与伦比的逻辑严密性和圣经根据，论证基督的死只为选民而献，驳斥了普世救赎论的各种观点。全书标题本身就是神学立论：在基督的死中，罪已经死亡，因此不存在基督为之而死却仍然沉沦的人。欧文的论证深刻影响了改革宗救赎论的发展，被誉为限定救赎教义最重要的学术辩护。这部作品代表了清教徒神学思辨的最高水准。',
            'summary_en': 'Owen\'s most famous theological masterpiece, the classic exposition of limited atonement (particular redemption) doctrine. With unparalleled logical rigor and biblical foundation, the author argues that Christ\'s death was offered only for the elect, refuting various universalist views. The book\'s title itself embodies the theological argument: in Christ\'s death, sin has died, therefore no one for whom Christ died can perish. Owen\'s argumentation profoundly influenced Reformed soteriology development and is hailed as limited atonement doctrine\'s most important scholarly defense. This work represents the pinnacle of Puritan theological speculation.'
        },
        'book-162': {
            'summary_zh': '欧文关于基督徒灵性争战的实践神学经典。基于罗马书8章13节"你们若靠着圣灵治死身体的恶行，必要活着"，作者详细阐述了信徒如何在日常生活中与罪恶争战。全书结合深度神学洞察与具体实践指导，分析了罪的本质、圣灵的能力、以及信徒在成圣过程中的主动责任。欧文特别强调"治死罪"不是靠律法主义的外在努力，而是依靠圣灵的内在更新。这部著作为后世敬虔传统奠定了重要的理论基础。',
            'summary_en': 'Owen\'s practical theological classic on Christian spiritual warfare. Based on Romans 8:13 "if by the Spirit you put to death the deeds of the body, you will live," the author thoroughly expounds how believers wage war against sin in daily life. Combining profound theological insight with concrete practical guidance, the book analyzes sin\'s nature, the Spirit\'s power, and believers\' active responsibility in sanctification. Owen particularly emphasizes that "mortifying sin" relies not on legalistic external effort but on the Spirit\'s internal renewal. This work laid crucial theoretical foundation for subsequent piety traditions.'
        },
        'book-163': {
            'summary_zh': '欧文为改革宗"圣徒永蒙保守"教义提供的系统神学辩护。作者通过详尽的圣经解经和严密的逻辑论证，阐述真正重生的信徒必然会在信仰中坚持到底。全书回应了亚米念派关于信徒可能失去救恩的观点，论证神的拣选、基督的代赎、圣灵的印记都确保了选民的最终得救。欧文特别强调坚忍不是信徒自己的能力，而是三一神恩典的保守。这部著作在改革宗救恩确据神学中占据核心地位，为无数信徒提供了坚固的盼望根基。',
            'summary_en': 'Owen\'s systematic theological defense of the Reformed doctrine of "perseverance of the saints." Through exhaustive biblical exegesis and rigorous logical argumentation, the author demonstrates that genuinely regenerated believers will necessarily persevere in faith to the end. The book responds to Arminian views that believers can lose salvation, arguing that God\'s election, Christ\'s atonement, and the Spirit\'s seal all ensure the elect\'s ultimate salvation. Owen particularly emphasizes that perseverance is not believers\' own ability but the Triune God\'s gracious preservation. This work occupies central position in Reformed assurance theology, providing solid foundation of hope for countless believers.'
        },
        'book-164': {
            'summary_zh': '约翰·P·迈尔（John P. Meier）的历史耶稣研究巨著，代表了当代新约学术研究的最高水准。作者运用历史批判方法，致力于重构"真实的历史耶稣"而非信仰的基督。全书多卷本结构，详细分析了耶稣的生平、教导、神迹等各个方面，力图从历史学角度还原一个犹太背景下的"边缘人"耶稣形象。迈尔的研究方法虽然引起争议，但其学术严谨性和史料掌握的全面性赢得了广泛认可。这部作品对理解当代历史耶稣研究的趋向具有重要意义。',
            'summary_en': 'John P. Meier\'s magnum opus on historical Jesus research, representing the highest level of contemporary New Testament scholarship. Using historical-critical methodology, the author seeks to reconstruct the "real historical Jesus" rather than the Christ of faith. The multi-volume work thoroughly analyzes Jesus\' life, teachings, miracles, and other aspects, attempting to historically reconstruct a "marginal" Jewish figure. Though Meier\'s methodology is controversial, his scholarly rigor and comprehensive grasp of sources have won widespread recognition. This work is crucial for understanding contemporary trends in historical Jesus studies.'
        },
        'book-165': {
            'summary_zh': '约翰·派博（John Piper）最具影响力的代表作，提出了"基督教享乐主义"的革命性神学观念。作者论证神最终的目的是他自己的荣耀，而人最大的满足也在于享受神和他的荣耀。这种"上帝为了神的荣耀"与"人为了满足而寻求神"的统一，解决了传统神学中的张力。派博以丰富的圣经根据和深刻的神学洞察，展现了敬虔生活的喜乐本质。全书彻底改变了许多基督徒对敬虔和快乐关系的理解，成为当代福音派灵修神学的重要里程碑。',
            'summary_en': 'John Piper\'s most influential work, proposing the revolutionary theological concept of "Christian hedonism." The author argues that God\'s ultimate purpose is His own glory, while humanity\'s greatest satisfaction lies in enjoying God and His glory. This unity of "God for God\'s glory" and "humans seeking God for satisfaction" resolves traditional theological tensions. With rich biblical foundation and profound theological insight, Piper demonstrates the joyful essence of godly living. The book fundamentally changed many Christians\' understanding of the relationship between piety and happiness, becoming an important milestone in contemporary evangelical spirituality.'
        },
        'book-166': {
            'summary_zh': '派博激励基督徒过有意义人生的经典作品。作者以"神被高举，人得满足"为核心理念，挑战现代文化中的消费主义和个人主义人生观。全书呼吁信徒不要把生命浪费在暂时的快乐和物质追求上，而要投身于神的荣耀和他人的福祉。派博结合圣经教导和宣教实践，展现了以神为中心的人生哲学如何带来真正的意义和满足。这部作品特别激励年轻基督徒思考生命的终极目标，在当代基督教青年事工中产生了深远影响。',
            'summary_en': 'Piper\'s classic work motivating Christians to live meaningful lives. With the core concept of "God being glorified and humanity satisfied," the author challenges modern culture\'s consumerism and individualistic worldview. The book calls believers not to waste their lives on temporary pleasures and material pursuits but to invest in God\'s glory and others\' welfare. Combining biblical teaching with missionary practice, Piper demonstrates how God-centered life philosophy brings genuine meaning and satisfaction. This work particularly inspires young Christians to consider life\'s ultimate goals, having profound influence in contemporary Christian youth ministry.'
        },
        'book-167': {
            'summary_zh': '派博探讨神属性的系统神学著作，专注于神的"喜乐"这一常被忽略的属性。作者从圣经各卷书中梳理神在创造、救赎、审判中所显明的喜乐，论证神的喜乐是他一切作为的根本动机。全书深入分析了神因他的荣耀而喜乐、因选民而喜乐、因圣子而喜乐等主题，为理解神的内在生命提供了新的视角。派博特别强调认识神的喜乐对信徒灵性生活的重要性，展现了神学研究的敬虔意义。这是一部将严谨神学与生命应用完美结合的佳作。',
            'summary_en': 'Piper\'s systematic theological work exploring God\'s attributes, focusing on God\'s often-overlooked attribute of "pleasure." The author traces God\'s pleasure manifested in creation, redemption, and judgment throughout Scripture, arguing that God\'s pleasure is the fundamental motivation for all His works. The book deeply analyzes themes including God\'s pleasure in His glory, in the elect, and in the Son, providing fresh perspective for understanding God\'s inner life. Piper particularly emphasizes the importance of knowing God\'s pleasure for believers\' spiritual lives, demonstrating theology\'s devotional significance. This masterfully combines rigorous theology with life application.'
        },
        'book-168': {
            'summary_zh': '派博与泰勒合编的苦难神学文集，汇集了多位改革宗学者对苦难问题的深度思考。全书从神的主权、人的责任、基督的受苦、圣徒的盼望等多个角度，为理解苦难提供了全面的神学框架。各章作者结合圣经神学、系统神学与实践神学，回应了现代人面对苦难时的困惑与挑战。这部文集特别强调苦难在神主权计划中的意义，以及它对信徒属灵成长的价值，为受苦的圣徒提供了坚实的神学安慰和盼望根基。',
            'summary_en': 'A theological anthology on suffering co-edited by Piper and Taylor, gathering profound reflections from multiple Reformed scholars on the problem of suffering. The book provides comprehensive theological framework for understanding suffering from perspectives of God\'s sovereignty, human responsibility, Christ\'s sufferings, and saints\' hope. Contributing authors combine biblical theology, systematic theology, and practical theology to address modern confusion and challenges regarding suffering. This collection particularly emphasizes suffering\'s significance in God\'s sovereign plan and its value for believers\' spiritual growth, providing solid theological comfort and hope foundation for suffering saints.'
        },
        'book-169': {
            'summary_zh': '约翰·斯托得（John Stott）关于圣灵洗礼和充满的平衡神学论述。作者以温和但坚定的语调，回应了灵恩运动对圣灵工作的理解，提出了更加符合圣经的观点。全书分析了水洗与灵洗的关系、一次性充满与持续充满的区别、以及圣灵果子与恩赐的优先次序。斯托得特别强调每个真信徒在归信时都已经受了圣灵的洗，不需要寻求"第二次祝福"，但应当持续被圣灵充满。这部作品为福音派教会提供了处理灵恩争议的智慧指导。',
            'summary_en': 'John Stott\'s balanced theological treatment of Spirit baptism and fullness. With gentle but firm tone, the author responds to charismatic movement\'s understanding of the Spirit\'s work, proposing more biblically consistent views. The book analyzes relationships between water and Spirit baptism, distinctions between one-time and continuous filling, and priority order between Spirit fruit and gifts. Stott particularly emphasizes that every genuine believer has been baptized by the Spirit at conversion and need not seek a "second blessing," but should continuously be filled with the Spirit. This work provides wise guidance for evangelical churches handling charismatic controversies.'
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
    
    print(f"Successfully updated {updated_count} books (book-160 to book-169)")

if __name__ == "__main__":
    update_summaries()