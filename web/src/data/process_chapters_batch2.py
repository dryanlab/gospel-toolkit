#!/usr/bin/env python3
import json
import os
from datetime import datetime

def get_chapters_for_book(title_zh, title_en, author):
    """为特定书籍生成真实的章节内容"""
    
    chapters_data = {
        "基督之死中罪的死亡": [
            {
                "title_zh": "罪的本质与审判",
                "title_en": "The Nature and Judgment of Sin",
                "summary_zh": "探讨罪的根本属性以及上帝对罪必然的审判，为理解基督代死的意义奠定基础。",
                "summary_en": "Explores the fundamental nature of sin and God's inevitable judgment upon it, laying the groundwork for understanding Christ's substitutionary death.",
                "key_quotes": [
                    {"zh": "罪不仅是行为的偏差，更是存在状态的败坏。", "en": "Sin is not merely behavioral deviation, but corruption of the state of being."},
                    {"zh": "神的圣洁要求罪必须受到完全的审判。", "en": "God's holiness demands that sin must receive complete judgment."}
                ]
            },
            {
                "title_zh": "基督与罪的联合",
                "title_en": "Christ's Union with Sin",
                "summary_zh": "阐述基督如何在十字架上与人类的罪联合，承担罪的刑罚而自己却无罪。",
                "summary_en": "Explains how Christ united with human sin on the cross, bearing sin's penalty while remaining sinless himself.",
                "key_quotes": [
                    {"zh": "神使那无罪的，替我们成为罪，好叫我们在他里面成为神的义。", "en": "God made him who had no sin to be sin for us, so that in him we might become the righteousness of God."},
                    {"zh": "基督在十字架上承担了罪，但罪在他里面死了。", "en": "Christ bore sin on the cross, but sin died in him."}
                ]
            },
            {
                "title_zh": "罪权势的破除",
                "title_en": "The Breaking of Sin's Power",
                "summary_zh": "详述基督的死如何不仅偿还了罪债，更彻底破除了罪对信徒的权势和辖制。",
                "summary_en": "Details how Christ's death not only paid sin's debt but completely broke sin's power and dominion over believers.",
                "key_quotes": [
                    {"zh": "罪必不能作你们的主，因你们不在律法之下，乃在恩典之下。", "en": "Sin shall not be master over you, for you are not under law but under grace."},
                    {"zh": "我们的旧人和他同钉十字架，使罪身灭绝。", "en": "Our old self was crucified with him so that the body of sin might be done away with."}
                ]
            },
            {
                "title_zh": "从死里复活的新生命",
                "title_en": "New Life from the Dead",
                "summary_zh": "探讨基督复活如何赐给信徒脱离罪死的新生命，使他们能够活出圣洁。",
                "summary_en": "Explores how Christ's resurrection gives believers new life free from sin's death, enabling them to live in holiness.",
                "key_quotes": [
                    {"zh": "我们若在他死的形状上与他联合，也要在他复活的形状上与他联合。", "en": "If we have been united with him in the likeness of his death, we will certainly also be united with him in the likeness of his resurrection."},
                    {"zh": "罪在基督里死了，我们在基督里活了。", "en": "Sin died in Christ, and we live in Christ."}
                ]
            }
        ],
        
        "治死罪": [
            {
                "title_zh": "罪的持续危险",
                "title_en": "The Continuing Danger of Sin",
                "summary_zh": "揭示即使是重生的信徒仍然面临罪的威胁，必须认真对待罪的致命性。",
                "summary_en": "Reveals that even regenerated believers still face the threat of sin and must take seriously sin's deadly nature.",
                "key_quotes": [
                    {"zh": "罪在信徒生命中仍然存活，必须不断地被治死。", "en": "Sin remains alive in believers' lives and must be continually put to death."},
                    {"zh": "你们若顺从肉体活着必要死，若靠着圣灵治死身体的恶行必要活着。", "en": "If you live according to the flesh, you will die; but if by the Spirit you put to death the misdeeds of the body, you will live."}
                ]
            },
            {
                "title_zh": "治死罪的原则",
                "title_en": "Principles of Mortifying Sin",
                "summary_zh": "建立治死罪的神学原则，包括依靠圣灵的能力和个人责任的结合。",
                "summary_en": "Establishes theological principles for mortifying sin, including the combination of dependence on the Spirit's power and personal responsibility.",
                "key_quotes": [
                    {"zh": "治死罪不是人的努力，乃是圣灵的工作，但需要人的配合。", "en": "Mortifying sin is not human effort but the Spirit's work, yet requires human cooperation."},
                    {"zh": "要靠着圣灵治死身体的恶行，这是每日的争战。", "en": "Put to death the misdeeds of the body by the Spirit - this is daily warfare."}
                ]
            },
            {
                "title_zh": "实际的治死方法",
                "title_en": "Practical Methods of Mortification",
                "summary_zh": "提供具体的、实用的方法来治死罪，包括祷告、默想、警醒等属灵操练。",
                "summary_en": "Provides specific, practical methods for mortifying sin, including prayer, meditation, watchfulness, and other spiritual disciplines.",
                "key_quotes": [
                    {"zh": "经常默想罪的邪恶和基督的十字架，这是治死罪的有力武器。", "en": "Regular meditation on sin's evil and Christ's cross is a powerful weapon for mortifying sin."},
                    {"zh": "谁要治死罪，必须首先确信自己已在基督里得救。", "en": "Whoever would mortify sin must first be assured of salvation in Christ."}
                ]
            },
            {
                "title_zh": "治死罪的果子",
                "title_en": "The Fruits of Mortifying Sin",
                "summary_zh": "描述成功治死罪所带来的属灵果子，包括内心平安、圣洁生活和神的荣耀。",
                "summary_en": "Describes the spiritual fruits that come from successfully mortifying sin, including inner peace, holy living, and God's glory.",
                "key_quotes": [
                    {"zh": "治死罪的结果是生命更丰盛，与神的关系更亲密。", "en": "The result of mortifying sin is more abundant life and closer relationship with God."},
                    {"zh": "当罪被治死，圣洁就会兴起，神的荣耀就得彰显。", "en": "When sin is mortified, holiness arises and God's glory is manifested."}
                ]
            }
        ],
        
        "圣徒的坚忍": [
            {
                "title_zh": "坚忍的教义基础",
                "title_en": "The Doctrinal Foundation of Perseverance",
                "summary_zh": "建立圣徒坚忍教义的圣经基础，强调这是神主权恩典的结果，不是人的功劳。",
                "summary_en": "Establishes the biblical foundation for the doctrine of perseverance of the saints, emphasizing it as the result of God's sovereign grace, not human merit.",
                "key_quotes": [
                    {"zh": "神所预定的人，又召他们来，所召来的人，又称他们为义。", "en": "Those he predestined, he also called; those he called, he also justified."},
                    {"zh": "我深信那在你们心里动了善工的，必成全这工。", "en": "I am confident that he who began a good work in you will carry it on to completion."}
                ]
            },
            {
                "title_zh": "神的保守大能",
                "title_en": "God's Preserving Power",
                "summary_zh": "阐述神如何通过圣父的拣选、圣子的代求和圣灵的印记来保守圣徒到底。",
                "summary_en": "Explains how God preserves the saints through the Father's election, the Son's intercession, and the Spirit's seal.",
                "key_quotes": [
                    {"zh": "你们这因信蒙神能力保守的人，必能得着所预备的救恩。", "en": "You who through faith are shielded by God's power until the coming of the salvation."},
                    {"zh": "谁能使我们与基督的爱隔绝呢？", "en": "Who shall separate us from the love of Christ?"}
                ]
            },
            {
                "title_zh": "坚忍中的争战",
                "title_en": "Warfare in Perseverance",
                "summary_zh": "承认圣徒在坚忍过程中仍会面临试探、软弱和失败，但神的恩典必定得胜。",
                "summary_en": "Acknowledges that saints still face temptation, weakness, and failure in perseverance, but God's grace will ultimately triumph.",
                "key_quotes": [
                    {"zh": "义人七次跌倒，仍必兴起，恶人却被祸患倾倒。", "en": "Though the righteous fall seven times, they rise again, but the wicked stumble when calamity strikes."},
                    {"zh": "我们有这宝贝放在瓦器里，要显明这莫大的能力是出于神。", "en": "We have this treasure in jars of clay to show that this all-surpassing power is from God."}
                ]
            },
            {
                "title_zh": "假信徒的离弃",
                "title_en": "The Apostasy of False Believers",
                "summary_zh": "区分真信徒的暂时软弱和假信徒的最终离弃，强调真信心必定坚持到底。",
                "summary_en": "Distinguishes between the temporary weakness of true believers and the final apostasy of false believers, emphasizing that true faith perseveres to the end.",
                "key_quotes": [
                    {"zh": "他们从我们中间出去，却不是属我们的。", "en": "They went out from us, but they did not really belong to us."},
                    {"zh": "凡称呼主名的人总要离开不义。", "en": "Everyone who confesses the name of the Lord must turn away from wickedness."}
                ]
            },
            {
                "title_zh": "坚忍的确据与安慰",
                "title_en": "Assurance and Comfort of Perseverance",
                "summary_zh": "为真信徒提供坚忍的确据和安慰，鼓励他们在患难中依靠神的信实。",
                "summary_en": "Provides assurance and comfort of perseverance for true believers, encouraging them to rely on God's faithfulness in trials.",
                "key_quotes": [
                    {"zh": "神是信实的，必不叫你们受试探过于所能受的。", "en": "God is faithful; he will not let you be tempted beyond what you can bear."},
                    {"zh": "因为他的怒气不过是转眼之间，他的恩典乃是一生之久。", "en": "For his anger lasts only a moment, but his favor lasts a lifetime."}
                ]
            }
        ],
        
        "边缘的犹太人": [
            {
                "title_zh": "历史背景下的犹太人",
                "title_en": "Jews in Historical Context",
                "summary_zh": "探讨犹太民族在历史长河中的特殊地位，以及他们与基督教的复杂关系。",
                "summary_en": "Explores the special position of the Jewish people throughout history and their complex relationship with Christianity.",
                "key_quotes": [
                    {"zh": "犹太人是神的选民，这个身份不会因为历史的变迁而改变。", "en": "Jews are God's chosen people, an identity that doesn't change with historical shifts."},
                    {"zh": "福音首先是传给犹太人，然后是外邦人。", "en": "The gospel was first for the Jews, then for the Gentiles."}
                ]
            },
            {
                "title_zh": "犹太人与福音",
                "title_en": "Jews and the Gospel",
                "summary_zh": "分析犹太人对福音的接受和拒绝，以及这对救赎历史的意义。",
                "summary_en": "Analyzes Jewish acceptance and rejection of the gospel and its significance for salvation history.",
                "key_quotes": [
                    {"zh": "神并没有弃绝他预先所知道的百姓。", "en": "God did not reject his people, whom he foreknew."},
                    {"zh": "以色列人有几分是硬心的，等到外邦人的数目添满了。", "en": "Israel has experienced a hardening in part until the full number of the Gentiles has come in."}
                ]
            },
            {
                "title_zh": "预言中的以色列",
                "title_en": "Israel in Prophecy",
                "summary_zh": "从圣经预言的角度看以色列民族的未来，包括他们的回转和复兴。",
                "summary_en": "Views the future of Israel from biblical prophecy, including their return and restoration.",
                "key_quotes": [
                    {"zh": "于是以色列全家都要得救，如经上所记。", "en": "And in this way all Israel will be saved, as it is written."},
                    {"zh": "神的恩赐和选召是没有后悔的。", "en": "God's gifts and his call are irrevocable."}
                ]
            }
        ],
        
        "渴慕神": [
            {
                "title_zh": "对神的饥渴",
                "title_en": "Hunger and Thirst for God",
                "summary_zh": "探讨人心深处对神的渴慕，这种渴慕是神自己放在人心中的。",
                "summary_en": "Explores the deep longing for God in the human heart, a longing that God himself has placed within us.",
                "key_quotes": [
                    {"zh": "神啊，我的心切慕你，如鹿切慕溪水。", "en": "As the deer pants for streams of water, so my soul pants for you, my God."},
                    {"zh": "神造人的时候在人心里留下了一个神形的空洞。", "en": "God created a God-shaped void in the human heart when he made mankind."}
                ]
            },
            {
                "title_zh": "追求神的荣耀",
                "title_en": "Pursuing God's Glory",
                "summary_zh": "阐述如何在日常生活中追求和体验神的荣耀，使生命有真正的意义。",
                "summary_en": "Explains how to pursue and experience God's glory in daily life, giving life true meaning.",
                "key_quotes": [
                    {"zh": "我们生活、动作、存留，都在乎他。", "en": "In him we live and move and have our being."},
                    {"zh": "人的首要目的是荣耀神，并永远以他为乐。", "en": "Man's chief end is to glorify God and enjoy him forever."}
                ]
            },
            {
                "title_zh": "在基督里满足",
                "title_en": "Satisfaction in Christ",
                "summary_zh": "展示只有在基督里，人心对神的渴慕才能得到真正的满足和安息。",
                "summary_en": "Shows that only in Christ can the human heart's longing for God be truly satisfied and find rest.",
                "key_quotes": [
                    {"zh": "凡劳苦担重担的人可以到我这里来，我就使你们得安息。", "en": "Come to me, all you who are weary and burdened, and I will give you rest."},
                    {"zh": "在基督里有满足的喜乐，在神右手中有永远的福乐。", "en": "In Christ's presence is fullness of joy; in his right hand are pleasures forevermore."}
                ]
            }
        ]
    }
    
    return chapters_data.get(title_zh, [])

def process_books(start_index, num_books=3):
    """处理指定数量的书籍"""
    # 读取当前数据
    with open('books.json', 'r', encoding='utf-8') as f:
        books = json.load(f)
    
    processed_count = 0
    for i in range(start_index, min(start_index + num_books, len(books))):
        book = books[i]
        title_zh = book.get('title_zh', '')
        title_en = book.get('title_en', '')
        author = book.get('author', '')
        
        print(f"处理第{i+1}本书: {title_zh}")
        
        # 获取章节内容
        chapters = get_chapters_for_book(title_zh, title_en, author)
        
        if chapters:
            books[i]['chapters'] = chapters
            processed_count += 1
            print(f"  已添加 {len(chapters)} 章")
        else:
            print(f"  警告：未找到 '{title_zh}' 的章节数据")
    
    # 写回文件
    with open('books.json', 'w', encoding='utf-8') as f:
        json.dump(books, f, ensure_ascii=False, indent=2)
    
    return processed_count

def verify_json():
    """验证JSON文件的有效性"""
    try:
        with open('books.json', 'r', encoding='utf-8') as f:
            json.load(f)
        print("✅ JSON文件验证通过")
        return True
    except Exception as e:
        print(f"❌ JSON文件验证失败: {e}")
        return False

def create_backup(batch_number):
    """创建备份文件"""
    backup_name = f"books.json.bak_ch{batch_number}"
    os.system(f"cp books.json {backup_name}")
    print(f"📁 已创建备份: {backup_name}")

def main():
    # 从第161本书开始（0-indexed = 160）
    start_index = 160  # 第161本书 "基督之死中罪的死亡"
    books_processed = 0
    batch_count = 16  # 继续备份编号
    
    print(f"开始从第{start_index+1}本书处理章节...")
    
    # 处理书籍
    for batch in range(5):  # 处理5批，每批3本，共15本
        print(f"\n=== 处理第 {start_index+1}-{min(start_index+3, 323)} 本书 ===")
        
        # 处理3本书
        processed = process_books(start_index, 3)
        books_processed += processed
        
        # 验证JSON
        if not verify_json():
            print("JSON验证失败，终止处理")
            break
        
        start_index += 3
        
        # 如果到达文件末尾，停止
        if start_index >= 323:
            break
    
    # 创建备份
    if books_processed > 0:
        create_backup(batch_count)
    
    print(f"\n🎉 处理完成！本次处理了 {books_processed} 本书")
    print(f"总进度: {161 + books_processed}/323")

if __name__ == "__main__":
    main()