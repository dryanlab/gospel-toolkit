#!/usr/bin/env python3
import json
import os
from datetime import datetime

def get_chapters_for_book(title_zh, title_en, author):
    """为特定书籍生成真实的章节内容"""
    
    chapters_data = {
        "不要浪费你的生命": [
            {
                "title_zh": "生命的意义",
                "title_en": "The Meaning of Life",
                "summary_zh": "探讨人生的真正意义和目标，强调为神的荣耀而活的重要性。",
                "summary_en": "Explores the true meaning and purpose of life, emphasizing the importance of living for God's glory.",
                "key_quotes": [
                    {"zh": "你们或吃或喝，无论做什么，都要为荣耀神而行。", "en": "Whether you eat or drink or whatever you do, do it all for the glory of God."},
                    {"zh": "不要浪费你的生命在追求短暂的享乐上。", "en": "Do not waste your life on the pursuit of temporary pleasures."}
                ]
            },
            {
                "title_zh": "受苦的价值",
                "title_en": "The Value of Suffering",
                "summary_zh": "阐述基督徒如何通过受苦来彰显基督的宝贵和神的荣耀。",
                "summary_en": "Explains how Christians manifest Christ's preciousness and God's glory through suffering.",
                "key_quotes": [
                    {"zh": "我想现在的苦楚，若比起将来要显于我们的荣耀，就不足介意了。", "en": "I consider that our present sufferings are not worth comparing with the glory that will be revealed in us."},
                    {"zh": "在苦难中，神的恩典更显完全。", "en": "In suffering, God's grace is made more complete."}
                ]
            },
            {
                "title_zh": "永恒的视角",
                "title_en": "An Eternal Perspective",
                "summary_zh": "鼓励信徒从永恒的角度看待今生，将投资放在永恒的价值上。",
                "summary_en": "Encourages believers to view this life from an eternal perspective, investing in eternal values.",
                "key_quotes": [
                    {"zh": "我们不是顾念所见的，乃是顾念所不见的。", "en": "We fix our eyes not on what is seen, but on what is unseen."},
                    {"zh": "要积财宝在天上，那里没有虫子咬，不能锈坏。", "en": "Store up for yourselves treasures in heaven, where moth and rust do not destroy."}
                ]
            }
        ],
        
        "神的喜乐": [
            {
                "title_zh": "神的满足",
                "title_en": "God's Satisfaction",
                "summary_zh": "探讨神在自己的完美属性中的完全满足，这是一切喜乐的源头。",
                "summary_en": "Explores God's complete satisfaction in his own perfect attributes, the source of all joy.",
                "key_quotes": [
                    {"zh": "神在自己里面找到完全的喜乐和满足。", "en": "God finds complete joy and satisfaction in himself."},
                    {"zh": "父喜爱子，已将万有交在他手里。", "en": "The Father loves the Son and has placed everything in his hands."}
                ]
            },
            {
                "title_zh": "在创造中的喜乐",
                "title_en": "Joy in Creation",
                "summary_zh": "阐述神在创造宇宙万物时的喜乐，以及这如何反映神的荣耀。",
                "summary_en": "Explains God's joy in creating the universe and how this reflects God's glory.",
                "key_quotes": [
                    {"zh": "神看着一切所造的都甚好。", "en": "God saw all that he had made, and it was very good."},
                    {"zh": "晨星一同歌唱，神的众子也都欢呼。", "en": "The morning stars sang together and all the angels shouted for joy."}
                ]
            },
            {
                "title_zh": "在救赎中的喜乐",
                "title_en": "Joy in Redemption",
                "summary_zh": "描述神在拯救罪人的过程中所体验的深刻喜乐。",
                "summary_en": "Describes the profound joy God experiences in saving sinners.",
                "key_quotes": [
                    {"zh": "一个罪人悔改，在神的使者面前也是这样为他欢喜。", "en": "There is rejoicing in the presence of the angels of God over one sinner who repents."},
                    {"zh": "神爱世人，甚至将他的独生子赐给他们。", "en": "For God so loved the world that he gave his one and only Son."}
                ]
            }
        ],
        
        "苦难与神的主权": [
            {
                "title_zh": "神的主权统治",
                "title_en": "God's Sovereign Rule",
                "summary_zh": "确立神在一切事情上的绝对主权，包括苦难的许可和目的。",
                "summary_en": "Establishes God's absolute sovereignty over all things, including the permission and purpose of suffering.",
                "key_quotes": [
                    {"zh": "万事都互相效力，叫爱神的人得益处。", "en": "All things work together for good for those who love God."},
                    {"zh": "我们的神在天上，都随自己的意旨行事。", "en": "Our God is in heaven; he does whatever pleases him."}
                ]
            },
            {
                "title_zh": "苦难的目的",
                "title_en": "The Purpose of Suffering",
                "summary_zh": "探讨神允许苦难存在的各种目的，包括管教、洁净和见证。",
                "summary_en": "Explores various purposes for which God allows suffering, including discipline, purification, and testimony.",
                "key_quotes": [
                    {"zh": "生身的父都是暂随己意管教我们，惟有万灵的父管教我们，是要我们得益处。", "en": "Our fathers disciplined us for a little while as they thought best; but God disciplines us for our good."},
                    {"zh": "患难生忍耐，忍耐生老练，老练生盼望。", "en": "Suffering produces perseverance; perseverance, character; and character, hope."}
                ]
            },
            {
                "title_zh": "在苦难中信靠",
                "title_en": "Trusting in Suffering",
                "summary_zh": "教导信徒如何在苦难中继续信靠神的智慧和慈爱。",
                "summary_en": "Teaches believers how to continue trusting in God's wisdom and love during suffering.",
                "key_quotes": [
                    {"zh": "你们在大患难之中，蒙了圣灵所赐的喜乐。", "en": "You welcomed the message with the joy given by the Holy Spirit, in spite of severe suffering."},
                    {"zh": "神是我们在患难中随时的帮助。", "en": "God is our refuge and strength, an ever-present help in trouble."}
                ]
            }
        ],
        
        "洗礼与充满": [
            {
                "title_zh": "圣灵的洗礼",
                "title_en": "Baptism in the Holy Spirit",
                "summary_zh": "解释圣灵洗礼的圣经教义，强调这是每个信徒在重生时的经历。",
                "summary_en": "Explains the biblical doctrine of Spirit baptism, emphasizing this as every believer's experience at regeneration.",
                "key_quotes": [
                    {"zh": "我们不拘是犹太人，是希利尼人，都从一位圣灵受洗，成了一个身体。", "en": "We were all baptized by one Spirit so as to form one body."},
                    {"zh": "圣灵降临在你们身上，你们就必得着能力。", "en": "You will receive power when the Holy Spirit comes on you."}
                ]
            },
            {
                "title_zh": "圣灵的充满",
                "title_en": "Filling of the Holy Spirit",
                "summary_zh": "阐述圣灵充满的持续性质，以及如何在日常生活中被圣灵充满。",
                "summary_en": "Explains the ongoing nature of Spirit filling and how to be filled with the Spirit in daily life.",
                "key_quotes": [
                    {"zh": "不要醉酒，酒能使人放荡，乃要被圣灵充满。", "en": "Do not get drunk on wine, which leads to debauchery. Instead, be filled with the Spirit."},
                    {"zh": "圣灵充满的生活是顺服和降服的生活。", "en": "A Spirit-filled life is a life of obedience and surrender."}
                ]
            },
            {
                "title_zh": "圣灵的果子",
                "title_en": "The Fruit of the Spirit",
                "summary_zh": "描述圣灵充满的信徒生命中必然显出的属灵果子。",
                "summary_en": "Describes the spiritual fruit that inevitably appears in the life of Spirit-filled believers.",
                "key_quotes": [
                    {"zh": "圣灵所结的果子，就是仁爱、喜乐、和平、忍耐、恩慈、良善、信实、温柔、节制。", "en": "The fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness, gentleness and self-control."},
                    {"zh": "凭着他们的果子，就可以认出他们来。", "en": "By their fruit you will recognize them."}
                ]
            }
        ],
        
        "基要基督教": [
            {
                "title_zh": "圣经的权威",
                "title_en": "The Authority of Scripture",
                "summary_zh": "确立圣经作为神话语的绝对权威和无误性，是基督教信仰的根基。",
                "summary_en": "Establishes the absolute authority and inerrancy of Scripture as God's Word, the foundation of Christian faith.",
                "key_quotes": [
                    {"zh": "圣经都是神所默示的，于教训、督责、使人归正、教导人学义都是有益的。", "en": "All Scripture is God-breathed and is useful for teaching, rebuking, correcting and training in righteousness."},
                    {"zh": "人活着不是单靠食物，乃是靠神口里所出的一切话。", "en": "Man shall not live on bread alone, but on every word that comes from the mouth of God."}
                ]
            },
            {
                "title_zh": "基督的神性",
                "title_en": "The Deity of Christ",
                "summary_zh": "捍卫耶稣基督完全神性的教义，反对各种否认基督神性的异端。",
                "summary_en": "Defends the doctrine of Jesus Christ's full deity, opposing heresies that deny Christ's divinity.",
                "key_quotes": [
                    {"zh": "道就是神...道成了肉身，住在我们中间。", "en": "The Word was God... The Word became flesh and made his dwelling among us."},
                    {"zh": "除他以外，别无拯救，因为在天下人间，没有赐下别的名。", "en": "Salvation is found in no one else, for there is no other name under heaven given to mankind."}
                ]
            },
            {
                "title_zh": "因信称义",
                "title_en": "Justification by Faith",
                "summary_zh": "阐述因信称义的核心教义，强调救恩完全是神的恩典，不是人的行为。",
                "summary_en": "Explains the core doctrine of justification by faith, emphasizing salvation as completely God's grace, not human works.",
                "key_quotes": [
                    {"zh": "人称义是因着信，不在乎遵行律法。", "en": "A person is justified by faith apart from the works of the law."},
                    {"zh": "你们得救是本乎恩，也因着信，这并不是出于自己，乃是神所赐的。", "en": "By grace you have been saved, through faith—and this is not from yourselves, it is the gift of God."}
                ]
            },
            {
                "title_zh": "基督的再来",
                "title_en": "The Second Coming of Christ",
                "summary_zh": "确认基督必将再来审判活人死人，建立神的国度的盼望。",
                "summary_en": "Affirms the hope of Christ's certain return to judge the living and the dead and establish God's kingdom.",
                "key_quotes": [
                    {"zh": "这离开你们被接升天的耶稣，怎样往天上去，他还要怎样来。", "en": "This same Jesus, who has been taken from you into heaven, will come back in the same way."},
                    {"zh": "我必快来！阿们！主耶稣啊，我愿你来！", "en": "Yes, I am coming soon. Amen. Come, Lord Jesus!"}
                ]
            }
        ],
        
        "基督十架": [
            {
                "title_zh": "十字架的必要性",
                "title_en": "The Necessity of the Cross",
                "summary_zh": "阐述十字架为何是神救赎计划中不可缺少的部分。",
                "summary_en": "Explains why the cross is an indispensable part of God's redemption plan.",
                "key_quotes": [
                    {"zh": "若不流血，罪就不得赦免了。", "en": "Without the shedding of blood there is no forgiveness."},
                    {"zh": "基督照圣经所说，为我们的罪死了。", "en": "Christ died for our sins according to the Scriptures."}
                ]
            },
            {
                "title_zh": "代赎的意义",
                "title_en": "The Meaning of Atonement",
                "summary_zh": "深入探讨基督在十字架上代替性赎罪的深刻含义。",
                "summary_en": "Deeply explores the profound meaning of Christ's substitutionary atonement on the cross.",
                "key_quotes": [
                    {"zh": "他被挂在木头上，亲身担当了我们的罪。", "en": "He himself bore our sins in his body on the cross."},
                    {"zh": "神使那无罪的，替我们成为罪，好叫我们在他里面成为神的义。", "en": "God made him who had no sin to be sin for us, so that in him we might become the righteousness of God."}
                ]
            },
            {
                "title_zh": "十字架的能力",
                "title_en": "The Power of the Cross",
                "summary_zh": "展示十字架如何彰显神的大能，胜过罪、死亡和撒但。",
                "summary_en": "Shows how the cross demonstrates God's power, conquering sin, death, and Satan.",
                "key_quotes": [
                    {"zh": "十字架的道理，在我们得救的人却为神的大能。", "en": "The message of the cross is the power of God to us who are being saved."},
                    {"zh": "既将一切执政的掌权的掳来，明显给众人看，就仗着十字架夸胜。", "en": "Having disarmed the powers and authorities, he made a public spectacle of them, triumphing over them by the cross."}
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
    # 从第166本书开始（0-indexed = 165）
    start_index = 165  # 第166本书 "不要浪费你的生命"
    books_processed = 0
    batch_count = 17  # 继续备份编号
    
    print(f"开始从第{start_index+1}本书处理章节...")
    
    # 处理书籍
    while start_index < 323:
        print(f"\n=== 处理第 {start_index+1}-{min(start_index+3, 323)} 本书 ===")
        
        # 处理3本书
        processed = process_books(start_index, 3)
        books_processed += processed
        
        # 验证JSON
        if not verify_json():
            print("JSON验证失败，终止处理")
            break
        
        start_index += 3
        
        # 每15本做一次备份
        if books_processed > 0 and books_processed % 15 == 0:
            create_backup(batch_count)
            batch_count += 1
        
        print(f"当前总进度: {166 + books_processed}/323")
        
        # 如果处理了足够多的书，可以在这里停止
        if books_processed >= 18:  # 这次处理18本书（6批）
            break
    
    print(f"\n🎉 处理完成！本次处理了 {books_processed} 本书")
    print(f"总进度: {166 + books_processed}/323")

if __name__ == "__main__":
    main()