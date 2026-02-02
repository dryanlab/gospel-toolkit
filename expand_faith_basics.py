#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import json
import os

def load_current_data():
    """Load current youth.json data"""
    with open('data/youth.json', 'r', encoding='utf-8') as f:
        return json.load(f)

def get_next_id(data):
    """Find the next available youth ID"""
    max_id = 0
    for item in data:
        if item['id'].startswith('youth-'):
            num = int(item['id'].split('-')[1])
            max_id = max(max_id, num)
    return max_id + 1

def add_faith_basics_content(data, start_id):
    """Add 6 faith-basics entries"""
    
    faith_basics_entries = [
        {
            "title_zh": "三位一体：一个上帝，三个位格",
            "title_en": "The Trinity: One God, Three Persons",
            "content_zh": "三位一体听起来很复杂，但其实是基督教最美丽的真理之一。上帝是独一的，但以三个位格存在：圣父、圣子（耶稣）、圣灵。不是三个神，而是一个上帝的三种'存在方式'。想象一下：水可以是冰、液体、蒸汽，本质都是H2O。圣父创造了我们，圣子拯救了我们，圣灵住在我们里面。三个位格完全相等，但工作不同。当你祷告时，你向圣父祷告，因着耶稣的名，靠着圣灵的帮助。这意味着你和上帝的关系不是冰冷的，而是充满爱的关系——上帝本身就是爱的共同体！这个真理让我们知道，上帝理解关系、理解团体，因为祂自己就是完美的关系。",
            "content_en": "The Trinity sounds complex, but it's actually one of Christianity's most beautiful truths. God is one, but exists as three persons: Father, Son (Jesus), and Holy Spirit. Not three gods, but three 'ways of being' of one God. Think of it like water: it can be ice, liquid, or steam — all H2O. The Father created us, the Son saved us, the Spirit lives in us. All three persons are completely equal but have different roles. When you pray, you pray to the Father, in Jesus' name, with the Spirit's help. This means your relationship with God isn't cold — it's relational, because God Himself is a loving community! This truth shows us that God understands relationships and community because He IS perfect relationship. It's not just theological facts — it's about knowing that the God who loves you is deeply relational.",
            "bible_verses": ["Matthew 28:19", "2 Corinthians 13:14", "John 14:16-17", "Genesis 1:26"],
            "discussion_questions": [
                "用你自己的话解释三位一体。How would you explain the Trinity in your own words?",
                "知道上帝是关系性的对你的祷告生活有什么影响？How does knowing God is relational affect your prayer life?",
                "为什么三位一体不是'三个神'？Why isn't the Trinity 'three gods'?"
            ],
            "tags": ["trinity", "theology", "faith-basics"]
        },
        {
            "title_zh": "祷告入门：和上帝说话",
            "title_en": "Prayer Basics: Talking with God",
            "content_zh": "祷告不是什么神秘的仪式，就是和上帝说话！想象你在和最好的朋友聊天。上帝想听你的心声——你的担心、兴奋、困惑、感谢。不需要用'古典'的语言，说'你'而不是'祢'完全没问题。四个基本要素记住ACTS：Adoration（赞美）—告诉上帝祂有多棒；Confession（认罪）—诚实地承认错误；Thanksgiving（感谢）—为祂的恩典感恩；Supplication（祈求）—把需要告诉祂。但记住，祷告不是自动售货机，投币就出货。上帝有时说'是'，有时说'不'，有时说'等等'。关键是建立关系，不是得到想要的东西。最重要的：大声祷告还是默祷都行，长的短的都行，正式的随意的都行。",
            "content_en": "Prayer isn't some mysterious ritual — it's just talking with God! Imagine chatting with your best friend. God wants to hear your heart — your worries, excitement, confusion, gratitude. You don't need 'ancient' language; saying 'you' instead of 'thee' is totally fine. Remember ACTS: Adoration (tell God how awesome He is), Confession (honestly admit mistakes), Thanksgiving (thank Him for His grace), Supplication (tell Him your needs). But remember, prayer isn't a vending machine where you insert requests and get results. God sometimes says 'yes,' sometimes 'no,' sometimes 'wait.' The point is building relationship, not getting what you want. Most importantly: pray out loud or silently, long or short, formal or casual — it all works.",
            "bible_verses": ["Matthew 6:9-13", "1 Thessalonians 5:17", "Philippians 4:6-7", "Luke 11:1-4"],
            "discussion_questions": [
                "什么阻止你更多地祷告？What keeps you from praying more?",
                "你觉得上帝真的在听你祷告吗？为什么？Do you feel like God actually hears your prayers? Why?",
                "分享一次你觉得上帝回应了你祷告的经历。Share a time you felt God answered your prayers."
            ],
            "tags": ["prayer", "relationship", "faith-basics"]
        },
        {
            "title_zh": "教会为什么重要？",
            "title_en": "Why Does Church Matter?",
            "content_zh": "有些人说'我可以自己信上帝，不需要教会'。但圣经说基督徒的生活是团体的生活！教会不是建筑物，而是一群跟随耶稣的人聚在一起敬拜、学习、互相关心。为什么重要？首先，我们需要彼此。当你软弱时，别人可以为你祷告、鼓励你。其次，我们一起敬拜时，体验到上帝的同在更丰富。第三，年长的基督徒可以教导年轻的，传承智慧。第四，教会一起做事工，服侍社区，单独一个人做不到。是的，教会里有不完美的人（包括你自己！），但这正是我们学习饶恕、谦卑和爱的地方。不要期待完美的教会——如果你找到了，一旦你加入就不再完美了！找一个传讲圣经、充满爱心、帮助你成长的教会。",
            "content_en": "Some people say 'I can believe in God on my own, I don't need church.' But the Bible shows that Christian life is community life! Church isn't a building — it's a group of Jesus-followers gathering to worship, learn, and care for each other. Why does it matter? First, we need each other. When you're weak, others pray and encourage you. Second, when we worship together, we experience God's presence more richly. Third, older Christians teach younger ones, passing down wisdom. Fourth, churches do ministry together that individuals can't do alone. Yes, churches have imperfect people (including you!), but that's exactly where we learn forgiveness, humility, and love. Don't expect a perfect church — if you find one, it won't be perfect once you join! Find a church that preaches the Bible, shows love, and helps you grow.",
            "bible_verses": ["Hebrews 10:24-25", "1 Corinthians 12:12-27", "Acts 2:42-47", "Ephesians 4:11-16"],
            "discussion_questions": [
                "你对教会有什么好的或坏的经历？What good or bad experiences have you had with church?",
                "基督徒可以'单干'吗？为什么？Can Christians 'go it alone'? Why or why not?",
                "你觉得什么样的教会最能帮助年轻人成长？What kind of church best helps young people grow?"
            ],
            "tags": ["church", "community", "faith-basics"]
        },
        {
            "title_zh": "洗礼和圣餐的意义",
            "title_en": "The Meaning of Baptism and Communion",
            "content_zh": "洗礼和圣餐是耶稣给教会的两个'圣礼'——特别的象征行为。洗礼像是公开宣布：'我跟随耶稣了！'被水淹没象征着旧的罪性生命死了，从水中出来象征着在基督里的新生命开始。这不是得救的必要条件，而是顺服的表达。圣餐（主餐）是用面包和葡萄汁记念耶稣的死。面包代表祂破碎的身体，葡萄汁代表祂为我们流的血。每次领圣餐，我们都在说：'耶稣，谢谢祢为我死了，我依靠祢。'这也提醒我们，所有基督徒都是一家人，一起分享同一个救恩。洗礼通常只做一次，圣餐经常做。都是上帝恩典的可见记号，帮助我们的信心更具体。",
            "content_en": "Baptism and communion are two 'sacraments' Jesus gave the church — special symbolic actions. Baptism is like publicly announcing: 'I'm following Jesus!' Being submerged in water symbolizes that your old sinful life has died, and coming up from water symbolizes your new life in Christ beginning. It's not required for salvation, but it's an expression of obedience. Communion (the Lord's Supper) uses bread and grape juice to remember Jesus' death. Bread represents His broken body, grape juice represents His blood shed for us. Every time we take communion, we're saying: 'Jesus, thank You for dying for me, I'm depending on You.' It also reminds us that all Christians are family, sharing the same salvation. Baptism is usually done once, communion regularly. Both are visible signs of God's grace, helping make our faith more concrete.",
            "bible_verses": ["Matthew 28:19", "Romans 6:3-4", "1 Corinthians 11:23-26", "Acts 8:36-39"],
            "discussion_questions": [
                "如果还没受洗，你准备好了吗？为什么？If you haven't been baptized, are you ready? Why?",
                "领圣餐时你通常想什么？What do you usually think about during communion?",
                "这两个圣礼如何帮助你记住福音？How do these two sacraments help you remember the Gospel?"
            ],
            "tags": ["baptism", "communion", "sacraments"]
        },
        {
            "title_zh": "十诫简明版：上帝的智慧指南",
            "title_en": "Ten Commandments Simplified: God's Wisdom Guide",
            "content_zh": "十诫不是上帝想控制你的清单，而是爱的指导！前四条关于爱上帝：(1)只敬拜真神，不拜偶像（包括金钱、名声）；(2)不乱用上帝的名；(3)守安息日，定期休息敬拜；(4)不造偶像崇拜。后六条关于爱人：(5)孝敬父母；(6)不杀人（包括仇恨）；(7)不奸淫（婚姻的神圣）；(8)不偷盗；(9)不作假见证（说谎）；(10)不贪心别人的东西。这些不是得救的条件——我们靠恩典得救。但它们显示了上帝设计的美好生活方式。当我们照这样生活，我们更快乐，关系更好，社会更和谐。十诫像护栏，保护我们不掉进痛苦的深渊。耶稣把它们总结为：尽心爱上帝，爱人如己。",
            "content_en": "The Ten Commandments aren't God's control list — they're guidelines of love! First four are about loving God: (1) worship only the true God, no idols (including money, fame); (2) don't misuse God's name; (3) keep the Sabbath, regularly rest and worship; (4) don't make idols to worship. Last six are about loving people: (5) honor your parents; (6) don't murder (including hatred); (7) don't commit adultery (marriage is sacred); (8) don't steal; (9) don't lie; (10) don't covet what others have. These aren't conditions for salvation — we're saved by grace. But they show God's design for flourishing life. When we live this way, we're happier, relationships are better, society is healthier. The commandments are like guardrails, protecting us from falling into painful ditches. Jesus summarized them: love God with all your heart, love others as yourself.",
            "bible_verses": ["Exodus 20:1-17", "Matthew 22:37-39", "Romans 13:9-10", "Galatians 5:14"],
            "discussion_questions": [
                "哪一条诫命对青少年最难遵守？Which commandment is hardest for teenagers to follow?",
                "十诫如何保护我们，而不是限制我们？How do the commandments protect rather than restrict us?",
                "你觉得哪一条诫命最容易被误解？Which commandment do you think is most misunderstood?"
            ],
            "tags": ["ten-commandments", "law", "ethics"]
        },
        {
            "title_zh": "恩典vs行为：我们如何被接纳？",
            "title_en": "Grace vs. Works: How Are We Accepted?",
            "content_zh": "这是基督教最核心的区别：我们不是因为'够好'而被上帝接纳，而是因为恩典！很多宗教说'做好事，上天堂'，但基督教说'相信耶稣，被拯救'。为什么？因为即使我们最好的行为也不完美，我们永远达不到上帝的完美标准。就像考试要100分才及格，我们最多考98分——还是不够。但耶稣考了满分，然后把祂的成绩单给了我们！所以我们做好事不是为了得救，而是因为已经得救了，出于感恩。就像收到礼物后给朋友写感谢信——不是为了得到礼物，而是因为已经收到了。这不意味着行为不重要，而是说行为是结果，不是原因。这给我们巨大的安全感和动力去爱别人。",
            "content_en": "This is Christianity's core distinction: we're not accepted by God because we're 'good enough,' but because of grace! Many religions say 'do good, go to heaven,' but Christianity says 'believe in Jesus, be saved.' Why? Because even our best actions are imperfect — we can never meet God's perfect standard. It's like a test where you need 100% to pass, and we get 98% at most — still not enough. But Jesus got perfect scores and gave us His report card! So we do good things not to earn salvation, but because we're already saved, out of gratitude. It's like writing a thank-you note after receiving a gift — not to get the gift, but because you already received it. This doesn't mean actions don't matter — they're the result, not the cause. This gives us huge security and motivation to love others.",
            "bible_verses": ["Ephesians 2:8-9", "Titus 3:5", "Romans 3:23-24", "James 2:17"],
            "discussion_questions": [
                "为什么'做好人上天堂'这个想法有问题？Why is the idea of 'being good to go to heaven' problematic?",
                "既然靠恩典得救，为什么还要做好事？If we're saved by grace, why do good works matter?",
                "怎么向朋友解释'不是靠行为得救'？How would you explain 'not saved by works' to a friend?"
            ],
            "tags": ["grace", "works", "salvation"]
        }
    ]
    
    current_id = start_id
    for entry in faith_basics_entries:
        new_entry = {
            "id": f"youth-{current_id:03d}",
            "section": "faith-basics",
            "category": "信仰基础",
            "title_zh": entry["title_zh"],
            "title_en": entry["title_en"],
            "content_zh": entry["content_zh"],
            "content_en": entry["content_en"],
            "bible_verses": entry["bible_verses"],
            "discussion_questions": entry["discussion_questions"],
            "tags": entry["tags"]
        }
        data.append(new_entry)
        current_id += 1
    
    return data, current_id

def main():
    # Load current data
    data = load_current_data()
    
    # Get starting ID
    start_id = get_next_id(data)
    print(f"Starting with ID: youth-{start_id:03d}")
    
    # Add faith-basics content
    updated_data, next_id = add_faith_basics_content(data, start_id)
    
    # Save updated data
    with open('data/youth.json', 'w', encoding='utf-8') as f:
        json.dump(updated_data, f, ensure_ascii=False, indent=2)
    
    print(f"Added 6 faith-basics entries. Next ID: youth-{next_id:03d}")
    print(f"Total entries: {len(updated_data)}")

if __name__ == "__main__":
    main()