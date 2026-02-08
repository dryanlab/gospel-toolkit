#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import json
import os
import shutil
from datetime import datetime

def apply_upgrades():
    """应用升级到JSON文件"""
    input_file = '/Users/suyan/clawd/projects/gospel-app/web/src/data/youth.json'
    
    # 读取原文件
    with open(input_file, 'r', encoding='utf-8') as f:
        articles = json.load(f)
    
    # 升级数据
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
        }
    }
    
    # 应用升级
    upgraded_count = 0
    for article in articles:
        if article['id'] in upgrades:
            upgrade_data = upgrades[article['id']]
            article['content_zh'] = upgrade_data['content_zh']
            article['content_en'] = upgrade_data['content_en']
            article['bible_verses'] = upgrade_data['bible_verses']
            article['discussion_questions'] = upgrade_data['discussion_questions']
            upgraded_count += 1
            print(f"升级完成: {article['id']}")
    
    print(f"总共升级了 {upgraded_count} 篇文章")
    
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