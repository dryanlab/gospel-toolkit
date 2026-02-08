#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import json
import os
import shutil
from datetime import datetime

def upgrade_faith_basics_complete():
    """完整升级信仰基础文章"""
    
    upgrades = {
        'youth-001': {
            'content_zh': """福音就是「好消息」——这是整个宇宙最美好的消息！想象一下，如果你犯了一个巨大的错误，需要付出你永远无法承担的代价，突然有人站出来说「我替你付」，你会是什么感觉？这就是福音的核心。

**我们的问题：罪的现实**
简单来说，上帝按着祂的形象创造了我们，本意是让我们与祂有完美的关系，享受祂的爱。但我们都选择了背叛——这就是「罪」。不只是做坏事，更是我们内心想要「做自己的上帝」的叛逆态度。就像一台精密的电脑，如果核心程序出错，整个系统都会崩溃。罪让我们与创造主分离，导致死亡和永远的孤独。

**上帝的解决方案：十字架的爱**
但故事还没结束！上帝太爱我们了，祂不愿意看着我们永远沉沦。所以祂做了一件不可思议的事——差遣自己的独生子耶稣来到这个破碎的世界。耶稣不是来当一个好老师或道德榜样，而是来当我们的救主。祂在十字架上承担了我们所有的罪和刑罚，三天后从死里复活，证明死亡已经被彻底击败！

**我们的回应：信心的礼物**
那么，我们需要做什么呢？答案让很多人惊讶：不需要做什么来「赚取」这份救恩！我们只需要相信——承认自己确实需要拯救，相信耶稣已经为我们完成了一切，接受祂作为我们生命的主。就像溺水的人抓住救生圈，不是因为自己游泳技术好，而是因为知道那是唯一的希望。

**生命的转变：新的开始**
当你真心接受这个好消息时，几件奇妙的事会发生：你成为上帝的儿女，罪得到完全赦免，获得永恒的生命，圣灵住进你心里开始改变你。这不是说你突然变得完美，而是说你有了新的身份和新的力量来过不同的生活。

福音跟「做个好人上天堂」完全不同。如果救恩靠行为，那就像考试必须100分才及格——没人做得到！但福音说：耶稣已经替你考了满分，现在把成绩单给你。你要做的只是伸手接过来。这就是恩典——不配得的爱和礼物。这个好消息改变了亿万人的生命，今天也能改变你的！""",
            
            'content_en': """The Gospel means 'good news' — the best news in the entire universe! Imagine if you made a huge mistake requiring a price you could never pay, and someone stepped forward saying 'I'll pay it for you.' How would you feel? That's the heart of the Gospel.

**Our Problem: The Reality of Sin**
Simply put, God created us in His image, intending perfect relationship with Him and enjoyment of His love. But we all chose rebellion — that's 'sin.' Not just doing bad things, but the rebellious attitude of wanting to 'be our own god.' Like a precision computer with corrupted core programming, the whole system crashes. Sin separates us from our Creator, leading to death and eternal loneliness.

**God's Solution: The Love of the Cross**
But the story isn't over! God loves us too much to watch us perish forever. So He did something incredible — sent His only Son Jesus into this broken world. Jesus didn't come as a good teacher or moral example, but as our Savior. On the cross, He bore all our sin and punishment, then rose from the dead three days later, proving death was completely defeated!

**Our Response: The Gift of Faith**
So what must we do? The answer surprises many: nothing to 'earn' this salvation! We only need to believe — admit we truly need rescue, believe Jesus already accomplished everything for us, accept Him as our life's Lord. Like a drowning person grabbing a life ring, not because of swimming skills but knowing it's the only hope.

**Life Transformation: A New Beginning**
When you truly accept this good news, amazing things happen: you become God's child, sins are completely forgiven, you receive eternal life, and the Holy Spirit moves in to begin changing you. This doesn't mean sudden perfection, but a new identity and new power to live differently.

The Gospel is completely different from 'being good enough for heaven.' If salvation depended on works, it would be like needing 100% to pass an exam — nobody could do it! But the Gospel says: Jesus already scored perfect for you and hands you the report card. You just need to reach out and take it. This is grace — undeserved love and gift. This good news has transformed billions of lives and can transform yours today!""",
            
            'bible_verses': ["John 3:16", "Romans 6:23", "Ephesians 2:8-9", "Romans 10:9", "1 Corinthians 15:3-4"],
            
            'discussion_questions': [
                "如果有人问你'福音是什么'，你会怎么用一两句话回答？ If someone asked you 'what is the Gospel,' how would you answer in one or two sentences?",
                "福音跟'做个好人'有什么不同？ How is the Gospel different from just 'being a good person'?",
                "你第一次听到福音时的反应是什么？ What was your reaction when you first heard the Gospel?",
                "用你自己的话，怎么向一个完全不了解基督教的朋友解释什么是福音？ In your own words, how would you explain the Gospel to a friend who knows nothing about Christianity?",
                "为什么福音被称为'好消息'？对你个人来说，这个消息'好'在哪里？ Why is the Gospel called 'good news'? What makes this news 'good' for you personally?"
            ]
        },
        
        'youth-002': {
            'content_zh': """这可能是每个人心中最重要的问题：上帝真的存在吗？这不是一个愚蠢的问题——实际上，这表明你在认真思考生命中最根本的事情。好消息是，上帝的存在有很多强有力的证据！

**创造的见证：设计需要设计师**
看看你的智能手机——没人会说它是沙子和金属自然碰撞形成的，对吧？复杂的设计总是指向智慧的设计师。而我们身边到处都是比手机更复杂的「设计」：你的眼睛比最高级的相机更精密，你的大脑比最先进的电脑更复杂，DNA含有的信息量比整个图书馆还多！

宇宙的精密调校更是令人惊叹。如果地球距离太阳稍微近一点或远一点，我们都无法生存。如果重力稍微强一点或弱一点，星星就无法形成。这些「恰好」的概率小到几乎不可能，除非背后有一位智慧的造物主。

**内心的见证：道德和永恒感**
为什么我们天生就知道某些事是对的或错的？为什么欺负弱小让我们感到愤怒？为什么看到美丽的日落会让我们感动？为什么我们渴望爱、公义和意义？进化论无法解释这些深层的人类体验，但如果我们是按上帝形象造的，这一切就说得通了。

每个文化都有对「超越」的渴望，都在寻找生命的意义。这种「永恒意识」就像饥饿感指向食物的存在一样，指向上帝的真实存在。

**历史的见证：耶稣的复活**
基督教不只是抽象的哲学，而是建立在具体历史事件上的。即使非基督徒历史学家也承认：耶稣确实存在，被钉十字架，门徒们宣告祂复活了。问题是：什么能解释这些原本胆小的渔夫突然变得勇敢无畏，甘愿为他们的信念而死？最好的解释就是他们确实见到了复活的耶稣。

**个人的见证：生命的改变**
也许最有力的证据来自生命的改变。世界各地有无数的人见证：信靠耶稣彻底改变了他们的生活。戒毒者得到自由、破碎的家庭得到医治、绝望的人找到盼望。这种大规模的生命转变很难用心理作用来解释。

**寻求中的应许**
最美好的是，上帝答应寻找祂的人必寻见。「你们寻求我，若专心寻求我，就必寻见。」（耶利米书29:13）不是盲目的信仰，而是基于证据的信心。当你开始真诚地寻求，读圣经，祷告，你会发现上帝开始在你的生活中显明祂自己。

信仰不是跳进黑暗，而是走向光明。证据在那里，等待有心人去发现。""",
            
            'content_en': """This might be the most important question anyone can ask: Is God real? It's not a stupid question — actually, it shows you're seriously thinking about life's most fundamental issue. The good news is there's strong evidence for God's existence!

**The Witness of Creation: Design Requires a Designer**
Look at your smartphone — nobody would say it formed naturally from sand and metal colliding, right? Complex design always points to an intelligent designer. And we're surrounded by 'designs' far more complex than phones: your eyes are more sophisticated than the most advanced cameras, your brain more complex than supercomputers, DNA contains more information than entire libraries!

The universe's fine-tuning is even more amazing. If Earth were slightly closer or farther from the sun, we couldn't survive. If gravity were slightly stronger or weaker, stars couldn't form. The probability of all these 'just rights' is so small it's virtually impossible — unless there's an intelligent Creator behind it.

**The Inner Witness: Morality and Eternal Sense**
Why do we instinctively know certain things are right or wrong? Why does bullying the weak make us angry? Why do beautiful sunsets move us? Why do we long for love, justice, and meaning? Evolution can't explain these deep human experiences, but if we're made in God's image, it all makes sense.

Every culture has yearning for the 'transcendent,' seeking life's meaning. This 'eternity consciousness' points to God's real existence, just like hunger points to food's existence.

**The Historical Witness: Jesus' Resurrection**
Christianity isn't abstract philosophy but built on concrete historical events. Even non-Christian historians acknowledge: Jesus really existed, was crucified, and His disciples proclaimed His resurrection. The question is: what could explain these originally timid fishermen suddenly becoming fearlessly bold, willing to die for their beliefs? The best explanation is they truly saw the risen Jesus.

**The Personal Witness: Changed Lives**
Perhaps the most powerful evidence comes from transformed lives. Countless people worldwide testify: trusting Jesus completely changed their lives. Drug addicts find freedom, broken families find healing, desperate people find hope. This massive life transformation is hard to explain as mere psychology.

**The Promise for Seekers**
Best of all, God promises seekers will find Him. 'You will seek me and find me when you seek me with all your heart.' (Jeremiah 29:13) Not blind faith, but evidence-based trust. When you begin genuinely seeking — reading Scripture, praying — you'll discover God revealing Himself in your life.

Faith isn't jumping into darkness but walking toward light. The evidence is there, waiting for earnest seekers to discover.""",
            
            'bible_verses': ["Romans 1:20", "Psalm 19:1", "Acts 17:27-28", "Hebrews 11:1", "Jeremiah 29:13"],
            
            'discussion_questions': [
                "你觉得自然界中最让你感到'这不可能是巧合'的是什么？ What in nature makes you feel 'this can't be a coincidence'?",
                "信心和盲信有什么区别？ What's the difference between faith and blind belief?",
                "如果朋友说'你不能证明上帝存在'，你会怎么回应？ If a friend says 'you can't prove God exists,' how would you respond?",
                "除了文章提到的证据，你自己还观察到什么让你觉得'这不可能是巧合'的现象？ Besides the evidence mentioned, what have you observed that makes you think 'this can't be coincidence'?",
                "科学发现（比如DNA、宇宙精密调校）如何帮助你思考上帝的存在？ How do scientific discoveries (like DNA, cosmic fine-tuning) help you think about God's existence?"
            ]
        }
    }
    
    return upgrades

def apply_upgrades():
    """应用升级到JSON文件"""
    input_file = '/Users/suyan/clawd/projects/gospel-app/web/src/data/youth.json'
    
    # 读取原文件
    with open(input_file, 'r', encoding='utf-8') as f:
        articles = json.load(f)
    
    # 获取升级数据
    upgrades = upgrade_faith_basics_complete()
    
    # 应用升级
    for article in articles:
        if article['id'] in upgrades:
            upgrade_data = upgrades[article['id']]
            article['content_zh'] = upgrade_data['content_zh']
            article['content_en'] = upgrade_data['content_en']
            article['bible_verses'] = upgrade_data['bible_verses']
            article['discussion_questions'] = upgrade_data['discussion_questions']
            print(f"升级完成: {article['id']} - {article['title_zh']}")
    
    # 备份原文件
    backup_file = input_file + f'.backup.{datetime.now().strftime("%Y%m%d_%H%M%S")}'
    shutil.copy2(input_file, backup_file)
    print(f"原文件已备份至: {backup_file}")
    
    # 写回升级后的内容
    with open(input_file, 'w', encoding='utf-8') as f:
        json.dump(articles, f, ensure_ascii=False, indent=2)
    
    # 同步到其他位置
    sync_files = [
        '/Users/suyan/clawd/projects/gospel-app/data/youth.json',
        '/Users/suyan/clawd/projects/gospel-app/GospelToolkit/GospelToolkit/Data/youth.json'
    ]
    
    for sync_file in sync_files:
        if os.path.exists(os.path.dirname(sync_file)):
            shutil.copy2(input_file, sync_file)
            print(f"已同步到: {sync_file}")

if __name__ == "__main__":
    apply_upgrades()
    print("升级完成！")