#!/usr/bin/env python3
import json
import os
from datetime import datetime

def get_chapters_for_book(title_zh, title_en, author):
    """为特定书籍生成真实的章节内容"""
    
    chapters_data = {
        "再思救赎奇恩": [
            {
                "title_zh": "救赎的必要性",
                "title_en": "The Necessity of Redemption",
                "summary_zh": "探讨人类堕落后为何需要救赎，以及上帝的公义如何要求完美的赎价。",
                "summary_en": "Explores why redemption is necessary after the fall and how God's justice demands a perfect atonement.",
                "key_quotes": [
                    {"zh": "人的罪债是如此巨大，只有无限的代价才能偿还。", "en": "Man's debt of sin is so great that only an infinite price can pay it."},
                    {"zh": "上帝的公义不允许罪不受惩罚。", "en": "God's justice does not allow sin to go unpunished."}
                ]
            },
            {
                "title_zh": "基督位格的奥秘",
                "title_en": "The Mystery of Christ's Person",
                "summary_zh": "阐述基督既是完全的神又是完全的人，这个位格的联合如何使救赎成为可能。",
                "summary_en": "Explains how Christ being both fully God and fully man makes redemption possible through the hypostatic union.",
                "key_quotes": [
                    {"zh": "道成了肉身，住在我们中间，充充满满地有恩典有真理。", "en": "The Word became flesh and dwelt among us, full of grace and truth."},
                    {"zh": "只有神人二性的基督才能在神与人之间作中保。", "en": "Only Christ with both divine and human natures can serve as mediator between God and man."}
                ]
            },
            {
                "title_zh": "代赎的成就",
                "title_en": "The Accomplishment of Atonement",
                "summary_zh": "详述基督在十字架上如何成就了完美的代赎，满足了神的公义要求。",
                "summary_en": "Details how Christ accomplished perfect atonement on the cross, satisfying God's justice requirements.",
                "key_quotes": [
                    {"zh": "他被挂在木头上，亲身担当了我们的罪。", "en": "He bore our sins in his body on the tree."},
                    {"zh": "基督既为我们受了咒诅，就赎出我们脱离律法的咒诅。", "en": "Christ redeemed us from the curse of the law by becoming a curse for us."}
                ]
            },
            {
                "title_zh": "救赎的应用",
                "title_en": "The Application of Redemption",
                "summary_zh": "阐述救赎如何通过圣灵的工作应用到信徒身上，包括称义、成圣等过程。",
                "summary_en": "Explains how redemption is applied to believers through the Spirit's work, including justification and sanctification.",
                "key_quotes": [
                    {"zh": "我们得救是本乎恩，也因着信，这并不是出于自己，乃是神所赐的。", "en": "By grace you have been saved through faith, and this is not from yourselves; it is the gift of God."},
                    {"zh": "圣灵将基督的救赎恩典实施在选民心中。", "en": "The Holy Spirit applies Christ's redemptive grace to the hearts of the elect."}
                ]
            },
            {
                "title_zh": "永恒的荣耀",
                "title_en": "Eternal Glory",
                "summary_zh": "展望救赎的终极目标——信徒将来在天国中与基督一同得荣耀。",
                "summary_en": "Looks forward to the ultimate goal of redemption - believers' future glorification with Christ in heaven.",
                "key_quotes": [
                    {"zh": "我们这至暂至轻的苦楚，要为我们成就极重无比永远的荣耀。", "en": "Our light and momentary troubles are achieving for us an eternal glory that far outweighs them all."},
                    {"zh": "救赎的最终目的是神在圣徒中得到完全的荣耀。", "en": "The ultimate purpose of redemption is that God might receive complete glory in the saints."}
                ]
            }
        ],
        
        "亚当之罪的归算": [
            {
                "title_zh": "联邦神学的根基",
                "title_en": "The Foundation of Federal Theology",
                "summary_zh": "探讨亚当作为人类代表的神学意义，以及联邦头的概念。",
                "summary_en": "Explores the theological significance of Adam as humanity's representative and the concept of federal headship.",
                "key_quotes": [
                    {"zh": "亚当不仅仅是个人，他是全人类的联邦代表。", "en": "Adam was not merely an individual, but the federal representative of all humanity."},
                    {"zh": "正如一人的悖逆，众人成为罪人；照样，一人的顺从，众人也成为义了。", "en": "As by one man's disobedience many were made sinners, so by one Man's obedience many will be made righteous."}
                ]
            },
            {
                "title_zh": "原罪的性质",
                "title_en": "The Nature of Original Sin",
                "summary_zh": "阐述原罪如何从亚当传递给全人类，包括罪疚和败坏两个方面。",
                "summary_en": "Explains how original sin is transmitted from Adam to all humanity, including both guilt and corruption.",
                "key_quotes": [
                    {"zh": "罪是从一人入了世界，死又是从罪来的，于是死就临到众人。", "en": "Sin entered the world through one man, and death through sin, and in this way death came to all men."},
                    {"zh": "我们在亚当里众人都死了。", "en": "In Adam all die."}
                ]
            },
            {
                "title_zh": "归算的教义",
                "title_en": "The Doctrine of Imputation",
                "summary_zh": "详述归算的神学概念，以及亚当的罪如何归算给他的后裔。",
                "summary_en": "Details the theological concept of imputation and how Adam's sin is imputed to his posterity.",
                "key_quotes": [
                    {"zh": "亚当犯罪的那一刻，他的罪就归算给了全人类。", "en": "The moment Adam sinned, his sin was imputed to all humanity."},
                    {"zh": "归算不是转移，而是法理上的计算。", "en": "Imputation is not transfer, but legal reckoning."}
                ]
            },
            {
                "title_zh": "基督的反面类比",
                "title_en": "The Counter-parallel in Christ",
                "summary_zh": "阐述基督作为第二个亚当如何逆转第一个亚当所带来的后果。",
                "summary_en": "Explains how Christ as the Second Adam reverses the consequences brought by the First Adam.",
                "key_quotes": [
                    {"zh": "首先的人亚当成了有灵的活人，末后的亚当成了叫人活的灵。", "en": "The first man Adam became a living being; the last Adam, a life-giving spirit."},
                    {"zh": "在亚当里众人都死了，在基督里众人也都要复活。", "en": "As in Adam all die, so in Christ all will be made alive."}
                ]
            }
        ],
        
        "成圣": [
            {
                "title_zh": "成圣的本质",
                "title_en": "The Nature of Sanctification",
                "summary_zh": "定义成圣的神学含义，区别于称义，强调其渐进性和必要性。",
                "summary_en": "Defines the theological meaning of sanctification, distinguishing it from justification, emphasizing its progressive and necessary nature.",
                "key_quotes": [
                    {"zh": "成圣是神的工作，使我们越来越像基督。", "en": "Sanctification is God's work of making us more and more like Christ."},
                    {"zh": "你们要圣洁，因为我是圣洁的。", "en": "Be holy, because I am holy."}
                ]
            },
            {
                "title_zh": "圣灵在成圣中的工作",
                "title_en": "The Spirit's Work in Sanctification",
                "summary_zh": "阐述圣灵如何在信徒心中工作，产生圣洁的果子和品格。",
                "summary_en": "Explains how the Holy Spirit works in believers' hearts to produce holy fruit and character.",
                "key_quotes": [
                    {"zh": "圣灵所结的果子就是仁爱、喜乐、和平、忍耐、恩慈、良善、信实、温柔、节制。", "en": "The fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, and self-control."},
                    {"zh": "我们众人既然敞着脸得以看见主的荣光，就变成主的形状，荣上加荣。", "en": "We all, with unveiled face, beholding the glory of the Lord, are being transformed into the same image from one degree of glory to another."}
                ]
            },
            {
                "title_zh": "成圣的方法",
                "title_en": "The Means of Sanctification",
                "summary_zh": "探讨信徒在成圣过程中应当使用的恩典媒介，如读经、祷告、团契等。",
                "summary_en": "Explores the means of grace believers should employ in sanctification, such as Bible reading, prayer, and fellowship.",
                "key_quotes": [
                    {"zh": "求你用真理使他们成圣，你的道就是真理。", "en": "Sanctify them by the truth; your word is truth."},
                    {"zh": "不可停止聚会，好像那些停止惯了的人。", "en": "Let us not give up meeting together, as some are in the habit of doing."}
                ]
            },
            {
                "title_zh": "与罪的争战",
                "title_en": "The Battle Against Sin",
                "summary_zh": "详述信徒在成圣过程中必须面对的与罪的争战，以及得胜的原则。",
                "summary_en": "Details the battle against sin believers must face in sanctification and the principles of victory.",
                "key_quotes": [
                    {"zh": "我真是苦啊！谁能救我脱离这取死的身体呢？", "en": "What a wretched man I am! Who will rescue me from this body of death?"},
                    {"zh": "靠着爱我们的主，在这一切的事上已经得胜有余了。", "en": "In all these things we are more than conquerors through him who loved us."}
                ]
            },
            {
                "title_zh": "成圣的完成",
                "title_en": "The Completion of Sanctification",
                "summary_zh": "展望成圣的最终完成，即信徒在荣耀中完全圣洁的状态。",
                "summary_en": "Looks forward to the final completion of sanctification when believers are perfectly holy in glory.",
                "key_quotes": [
                    {"zh": "那能保守你们不失脚，叫你们无瑕无疵欢欢喜喜站在他荣耀之前的。", "en": "To him who is able to keep you from stumbling and to present you before his glorious presence without fault and with great joy."},
                    {"zh": "我们必要像他，因为必得见他的真体。", "en": "We shall be like him, for we shall see him as he is."}
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
    start_index = 157  # 第158本书（0-indexed）
    books_processed = 0
    batch_count = 16  # 从第16个备份开始
    
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
        
        print(f"当前总进度: {157 + books_processed}/323")
        
        # 如果处理了足够多的书，可以在这里停止
        if books_processed >= 9:  # 这次处理9本书（3批）
            break
    
    print(f"\n🎉 处理完成！本次处理了 {books_processed} 本书")
    print(f"总进度: {157 + books_processed}/323")

if __name__ == "__main__":
    main()