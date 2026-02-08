#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import json
import os
import shutil
from datetime import datetime

def upgrade_youth_articles():
    """升级青少年文章的深度内容"""
    
    # 读取原文件
    input_file = '/Users/suyan/clawd/projects/gospel-app/web/src/data/youth.json'
    
    with open(input_file, 'r', encoding='utf-8') as f:
        articles = json.load(f)
    
    # 需要升级的 sections
    target_sections = ['faith-basics', 'campus', 'growth']
    
    upgraded_count = 0
    
    for article in articles:
        if article.get('section') in target_sections:
            print(f"升级文章: {article['id']} - {article['title_zh']}")
            
            # 升级 faith-basics 文章
            if article['section'] == 'faith-basics':
                article = upgrade_faith_basics_article(article)
            
            # 升级 campus 文章
            elif article['section'] == 'campus':
                article = upgrade_campus_article(article)
            
            # 升级 growth 文章
            elif article['section'] == 'growth':
                article = upgrade_growth_article(article)
            
            upgraded_count += 1
    
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
    
    return articles

def upgrade_faith_basics_article(article):
    """升级信仰基础类文章"""
    article_id = article['id']
    
    # 根据文章ID进行具体升级
    if article_id == 'youth-001':  # 福音是什么？
        article['content_zh'] = """福音就是「好消息」——这是整个宇宙最美好的消息！想象一下，如果你犯了一个巨大的错误，需要付出你永远无法承担的代价，突然有人站出来说「我替你付」，你会是什么感觉？这就是福音的核心。

**我们的问题：罪的现实**
简单来说，上帝按着祂的形象创造了我们，本意是让我们与祂有完美的关系，享受祂的爱。但我们都选择了背叛——这就是「罪」。不只是做坏事，更是我们内心想要「做自己的上帝」的叛逆态度。就像一台精密的电脑，如果核心程序出错，整个系统都会崩溃。罪让我们与创造主分离，导致死亡和永远的孤独。

**上帝的解决方案：十字架的爱**
但故事还没结束！上帝太爱我们了，祂不愿意看着我们永远沉沦。所以祂做了一件不可思议的事——差遣自己的独生子耶稣来到这个破碎的世界。耶稣不是来当一个好老师或道德榜样，而是来当我们的救主。祂在十字架上承担了我们所有的罪和刑罚，三天后从死里复活，证明死亡已经被彻底击败！

**我们的回应：信心的礼物**
那么，我们需要做什么呢？答案让很多人惊讶：不需要做什么来「赚取」这份救恩！我们只需要相信——承认自己确实需要拯救，相信耶稣已经为我们完成了一切，接受祂作为我们生命的主。就像溺水的人抓住救生圈，不是因为自己游泳技术好，而是因为知道那是唯一的希望。

**生命的转变：新的开始**
当你真心接受这个好消息时，几件奇妙的事会发生：你成为上帝的儿女，罪得到完全赦免，获得永恒的生命，圣灵住进你心里开始改变你。这不是说你突然变得完美，而是说你有了新的身份和新的力量来过不同的生活。

福音跟「做个好人上天堂」完全不同。如果救恩靠行为，那就像考试必须100分才及格——没人做得到！但福音说：耶稣已经替你考了满分，现在把成绩单给你。你要做的只是伸手接过来。这就是恩典——不配得的爱和礼物。这个好消息改变了亿万人的生命，今天也能改变你的！"""

        article['content_en'] = """The Gospel means 'good news' — the best news in the entire universe! Imagine if you made a huge mistake requiring a price you could never pay, and someone stepped forward saying 'I'll pay it for you.' How would you feel? That's the heart of the Gospel.

**Our Problem: The Reality of Sin**
Simply put, God created us in His image, intending perfect relationship with Him and enjoyment of His love. But we all chose rebellion — that's 'sin.' Not just doing bad things, but the rebellious attitude of wanting to 'be our own god.' Like a precision computer with corrupted core programming, the whole system crashes. Sin separates us from our Creator, leading to death and eternal loneliness.

**God's Solution: The Love of the Cross**
But the story isn't over! God loves us too much to watch us perish forever. So He did something incredible — sent His only Son Jesus into this broken world. Jesus didn't come as a good teacher or moral example, but as our Savior. On the cross, He bore all our sin and punishment, then rose from the dead three days later, proving death was completely defeated!

**Our Response: The Gift of Faith**
So what must we do? The answer surprises many: nothing to 'earn' this salvation! We only need to believe — admit we truly need rescue, believe Jesus already accomplished everything for us, accept Him as our life's Lord. Like a drowning person grabbing a life ring, not because of swimming skills but knowing it's the only hope.

**Life Transformation: A New Beginning**
When you truly accept this good news, amazing things happen: you become God's child, sins are completely forgiven, you receive eternal life, and the Holy Spirit moves in to begin changing you. This doesn't mean sudden perfection, but a new identity and new power to live differently.

The Gospel is completely different from 'being good enough for heaven.' If salvation depended on works, it would be like needing 100% to pass an exam — nobody could do it! But the Gospel says: Jesus already scored perfect for you and hands you the report card. You just need to reach out and take it. This is grace — undeserved love and gift. This good news has transformed billions of lives and can transform yours today!"""

        # 确保有足够的圣经经节
        if len(article['bible_verses']) < 3:
            article['bible_verses'].extend(['1 Corinthians 15:3-4', 'Titus 3:4-7'])

        # 确保有足够的讨论问题
        if len(article['discussion_questions']) < 5:
            article['discussion_questions'].extend([
                "用你自己的话，怎么向一个完全不了解基督教的朋友解释什么是福音？ In your own words, how would you explain the Gospel to a friend who knows nothing about Christianity?",
                "为什么福音被称为'好消息'？对你个人来说，这个消息'好'在哪里？ Why is the Gospel called 'good news'? What makes this news 'good' for you personally?"
            ])

    elif article_id == 'youth-002':  # 我怎么知道上帝是真的？
        article['content_zh'] = """这可能是每个人心中最重要的问题：上帝真的存在吗？这不是一个愚蠢的问题——实际上，这表明你在认真思考生命中最根本的事情。好消息是，上帝的存在有很多强有力的证据！

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

信仰不是跳进黑暗，而是走向光明。证据在那里，等待有心人去发现。"""

        article['content_en'] = """This might be the most important question anyone can ask: Is God real? It's not a stupid question — actually, it shows you're seriously thinking about life's most fundamental issue. The good news is there's strong evidence for God's existence!

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

Faith isn't jumping into darkness but walking toward light. The evidence is there, waiting for earnest seekers to discover."""

        # 补充圣经章节
        article['bible_verses'].extend(['Jeremiah 29:13', 'Acts 17:26-27'])

        # 补充讨论问题
        article['discussion_questions'].extend([
            "除了文章提到的证据，你自己还观察到什么让你觉得'这不可能是巧合'的现象？ Besides the evidence mentioned, what have you observed that makes you think 'this can't be coincidence'?",
            "科学发现（比如DNA、宇宙精密调校）如何帮助你思考上帝的存在？ How do scientific discoveries (like DNA, cosmic fine-tuning) help you think about God's existence?"
        ])

    # 继续处理其他 faith-basics 文章...
    elif article_id == 'youth-003':  # 为什么耶稣要死在十字架上？
        article['content_zh'] = """十字架——这个古代最残酷的刑具，为什么成了基督教的标志？为什么全能的上帝要让祂的独生子死在这样痛苦的地方？这个问题的答案揭示了宇宙中最深刻的爱和最完美的公义。

**理解问题的严重性：罪的工价**
想象你欠了一笔巨债——不是几万块，而是几千亿，你永远还不起的那种债务。这就是罪在上帝面前的状况。圣经说「罪的工价乃是死」（罗马书6:23），这里的「死」不仅仅是身体的死亡，更是与圣洁上帝永远的分离。

上帝不能简单地「算了」或者「眼开眼闭」，因为祂是绝对公义的。就像一个公正的法官不能对犯罪视而不见一样，上帝的公义要求罪必须被审判。如果上帝不管罪，那祂就不是公义的；如果祂管罪，那我们就都完了。这就是人类面临的终极困境。

**神性的解决方案：代替的恩典**
但这时候，发生了历史上最伟大的「交换」。耶稣——无罪的上帝之子——主动要求承担我们的刑罚。不是被迫的，而是出于爱的选择。祂对天父说：「让我去，让我代替他们承担后果。」

在十字架上，耶稣不只是承受了物理上的痛苦（虽然钉十字架确实是极其残酷的），更重要的是，祂承受了我们应该承受的属灵惩罚——与天父分离的痛苦。当祂呼喊「我的上帝！我的上帝！为什么离弃我？」时，祂正在经历我们本应经历的属灵死亡。

**完美的替代：为什么是耶稣？**
为什么必须是耶稣来做这件事？首先，只有无罪的人才能代替有罪的人。如果耶稣自己有罪，祂就需要为自己的罪而死。其次，只有无限的生命（神的生命）才能承担无限的刑罚。一个普通人的死亡只能为自己赎罪，但耶稣作为神-人，祂的死亡具有无限的价值，足以拯救所有相信的人。

**爱的最大彰显**
有人问：「为什么上帝不直接赦免我们？」答案在于上帝的属性必须和谐：祂既是爱也是公义。十字架展现了这种完美的平衡——公义得到满足（罪被惩罚了），爱也彰显出来（上帝付出了代价）。

耶稣说：「人为朋友舍命，人的爱心没有比这个大的。」但耶稣不仅仅为朋友而死，祂还为敌人而死——包括那些钉祂十字架的人。这就是「当我们还作罪人的时候，基督就为我们死」（罗马书5:8）的含义。

**个人的应用：这对你意味着什么**
十字架不是一个历史传说，而是关于你个人的好消息。这意味着：上帝知道你所有的错误、失败和罪，但祂爱你到愿意为此付出最大的代价。你不需要证明自己配得这份爱——事实上，你根本不配得，但这就是恩典的美妙之处。

当你理解十字架的爱，它会彻底改变你对自己和对他人的看法。你会知道自己有无限的价值（因为上帝愿意为你死），同时也会谦卑（因为你确实需要拯救）。"""

        article['content_en'] = """The cross — this most brutal ancient execution device — why did it become Christianity's symbol? Why would almighty God allow His only Son to die in such agony? The answer reveals the universe's deepest love and most perfect justice.

**Understanding the Problem's Severity: Sin's Wages**
Imagine owing massive debt — not thousands, but billions you could never repay. That's sin's status before God. The Bible says 'the wages of sin is death' (Romans 6:23), where 'death' means not just physical death but eternal separation from holy God.

God can't simply 'forget it' or 'look the other way' because He is absolutely just. Like a righteous judge can't ignore crime, God's justice demands sin be judged. If God ignores sin, He isn't just; if He judges it, we're all doomed. This is humanity's ultimate dilemma.

**The Divine Solution: Substitutional Grace**
But then occurred history's greatest 'exchange.' Jesus — the sinless Son of God — voluntarily chose to bear our punishment. Not forced, but chosen from love. He told the Father: 'Let me go, let me take their consequences.'

On the cross, Jesus suffered not just physical agony (though crucifixion was extremely brutal), but more importantly, the spiritual punishment we deserved — separation from the Father. When He cried 'My God! My God! Why have you forsaken me?' He was experiencing the spiritual death we should have faced.

**Perfect Substitute: Why Jesus?**
Why must it be Jesus? First, only the sinless can substitute for the sinful. If Jesus had sin, He'd need to die for His own. Second, only infinite life (God's life) can bear infinite punishment. An ordinary person's death could only atone for themselves, but Jesus as God-man had death of infinite value, sufficient to save all believers.

**Love's Greatest Display**
Someone asks: 'Why didn't God just forgive us directly?' The answer lies in God's harmonious attributes: He is both love and justice. The cross shows perfect balance — justice satisfied (sin was punished), love displayed (God paid the price).

Jesus said: 'Greater love has no one than this, that someone lay down his life for his friends.' But Jesus died not just for friends but enemies — including those who crucified Him. This is what 'while we were still sinners, Christ died for us' (Romans 5:8) means.

**Personal Application: What This Means for You**
The cross isn't historical legend but personal good news about you. It means: God knows all your mistakes, failures, and sins, yet loves you enough to pay the ultimate price. You don't need to prove you deserve this love — in fact, you don't deserve it, but that's grace's beauty.

Understanding the cross's love completely changes how you see yourself and others. You'll know your infinite worth (God was willing to die for you) while remaining humble (you truly needed saving)."""

        # 确保有足够的圣经经节
        article['bible_verses'].extend(['1 Peter 3:18', 'Galatians 3:13'])

        # 补充讨论问题
        article['discussion_questions'].extend([
            "有人说'我不需要耶稣为我死，我可以靠自己的努力得到上帝的接纳'，你会怎么回应？ Someone says 'I don't need Jesus to die for me, I can earn God's acceptance through my own efforts.' How would you respond?",
            "十字架如何同时显示了上帝的公义和慈爱？ How does the cross simultaneously show God's justice and mercy?"
        ])

    return article

def upgrade_campus_article(article):
    """升级校园生活类文章"""
    article_id = article['id']
    
    if article_id == 'youth-006':  # 同学嘲笑我的信仰怎么办？
        article['content_zh'] = """当同学因为你的信仰而嘲笑你时，那种感觉就像心被刺了一刀。这种痛苦是真实的，而且你不是第一个经历这种事的人——从耶稣时代到今天，基督徒一直面临这样的挑战。

**理解背后的原因**
首先，要明白人们嘲笑基督教信仰的几个原因：有些人因为无知而误解，觉得基督教是迷信；有些人因为以前被「基督徒」伤害过而产生反感；有些人因为福音挑战了他们的生活方式而感到不舒服；还有些人其实内心好奇，但用嘲笑来掩饰自己的软弱。

理解这些原因不是为了原谅他们的行为，而是帮助你用正确的心态来回应。很多时候，他们攻击的不是你这个人，而是你所代表的信仰和价值观。

**耶稣的榜样和应许**
耶稣在马太福音5:11-12中说：「人若因我辱骂你们，逼迫你们，捏造各样坏话毁谤你们，你们就有福了！应当欢喜快乐，因为你们在天上的赏赐是大的。在你们以前的先知也是这样受过逼迫。」

这不是说我们要去找麻烦，而是说当我们因为正确的理由（信仰）而受苦时，我们在属灵上是有福的。连完美的耶稣都被人嘲笑、辱骂、最终钉十字架，我们还指望什么呢？

**实际的应对策略**
1. **保持冷静，不要情绪化反应**：当有人嘲笑你的信仰时，深吸一口气。愤怒的回击只会让情况变得更糟，也会损害你作为基督徒的见证。

2. **用温柔回应**：彼得前书3:15教导我们「要以温柔、敬畏的心回答各人」。你可以说：「我理解你的观点，但这个信仰对我很重要。我愿意分享，如果你真的想了解的话。」

3. **选择你的战斗**：不是每一次嘲笑都值得回应。有时候，沉默是最好的回答。有时候，一个平静的解释就足够了。学会分辨什么时候该说话，什么时候该保持安静。

4. **活出你的信仰**：最有力的回应不是言语，而是行动。当你在困难中展现平安，在被伤害时展现饶恕，在压力下展现诚实，这比一千句争论更有说服力。

5. **寻找支持群体**：不要独自承受这些压力。和你的青少年团契、基督徒朋友分享你的经历，让他们为你祷告和支持你。有时候，一个拥抱比一篇道理更有用。

**化嘲笑为机会**
有些最美好的福音分享机会来自于最初的嘲笑。当你用出人意料的温柔和智慧回应时，很多人会开始好奇：「为什么这个人这么不一样？」这就给你创造了分享信仰的机会。

记住，早期教会在罗马帝国受到严重逼迫，但正是基督徒在苦难中展现的爱心和坚韧，最终征服了整个帝国。你的温柔回应可能就是某个人认识基督的第一步。

**为嘲笑你的人祷告**
耶稣说要为那些逼迫我们的人祷告。这不容易，但很重要。当你为嘲笑你的同学祷告时，几件事会发生：你的怒气会减少，你的心会软化，你会开始看到他们不是敌人而是需要救恩的人。

**记住你的身份**
最重要的是，记住你是谁。你是上帝的儿女，被祂深深爱着。同学的话语不能改变这个事实。他们的认可或否定不能定义你的价值——只有上帝的爱能定义你。"""

        article['content_en'] = """When classmates mock your faith, it feels like a knife to the heart. This pain is real, and you're not the first to experience this — Christians have faced such challenges from Jesus' time until today.

**Understanding the Reasons Behind It**
First, understand why people mock Christian faith: some from ignorance, thinking Christianity is superstition; some from being hurt by 'Christians' before; some because the Gospel challenges their lifestyle; others are actually curious but use mockery to hide their vulnerability.

Understanding these reasons isn't to excuse their behavior but to help you respond correctly. Often, they're attacking not you personally but the faith and values you represent.

**Jesus' Example and Promise**
Jesus said in Matthew 5:11-12: 'Blessed are you when people revile you and persecute you and utter all kinds of evil against you falsely on my account. Rejoice and be glad, for your reward is great in heaven, for so they persecuted the prophets who were before you.'

This doesn't mean we should seek trouble, but when we suffer for the right reason (faith), we are spiritually blessed. Even perfect Jesus was mocked, insulted, and ultimately crucified — what should we expect?

**Practical Response Strategies**
1. **Stay calm, don't react emotionally**: When someone mocks your faith, take a deep breath. Angry retaliation only makes things worse and damages your Christian witness.

2. **Respond with gentleness**: 1 Peter 3:15 teaches us to 'answer each person with gentleness and respect.' You could say: 'I understand your perspective, but this faith is important to me. I'm willing to share if you really want to understand.'

3. **Choose your battles**: Not every mockery deserves a response. Sometimes silence is the best answer. Sometimes a calm explanation suffices. Learn to discern when to speak and when to stay quiet.

4. **Live out your faith**: The most powerful response isn't words but actions. When you show peace in difficulties, forgiveness when hurt, honesty under pressure, it's more persuasive than a thousand arguments.

5. **Find a support group**: Don't bear this pressure alone. Share your experiences with your youth group and Christian friends, let them pray for and support you. Sometimes a hug is more helpful than a sermon.

**Turning Mockery into Opportunity**
Some of the most beautiful Gospel-sharing opportunities arise from initial mockery. When you respond with unexpected gentleness and wisdom, many begin wondering: 'Why is this person so different?' This creates opportunities to share your faith.

Remember, the early church faced severe persecution in the Roman Empire, but it was Christians' love and perseverance in suffering that ultimately won the empire. Your gentle response might be someone's first step toward knowing Christ.

**Pray for Those Who Mock You**
Jesus said to pray for those who persecute us. This isn't easy but important. When you pray for classmates who mock you, several things happen: your anger decreases, your heart softens, you begin seeing them not as enemies but as people needing salvation.

**Remember Your Identity**
Most importantly, remember who you are. You are God's child, deeply loved by Him. Classmates' words can't change this fact. Their approval or rejection can't define your worth — only God's love can define you."""

        # 补充圣经经节和讨论问题
        article['bible_verses'].extend(['Matthew 5:44', 'Acts 7:60'])
        article['discussion_questions'].extend([
            "你觉得在什么情况下应该为信仰'据理力争'，什么时候应该保持沉默？ When do you think you should 'stand your ground' for faith, and when should you stay silent?",
            "如何在坚持信仰的同时避免显得'自义'或'优越'？ How can you hold firm to your faith while avoiding appearing 'self-righteous' or 'superior'?"
        ])

    return article

def upgrade_growth_article(article):
    """升级成长挑战类文章"""
    article_id = article['id']
    
    if article_id == 'youth-011':  # 我总是犯同样的罪怎么办？
        article['content_zh'] = """「我又犯了同样的错误...」如果你曾经这样想过，欢迎加入人类俱乐部！连使徒保罗都在罗马书7章中承认：「我所愿意的善，我反不做；我所不愿意的恶，我倒去做。」如果连这位伟大的使徒都有这种挣扎，我们就更不应该感到绝望。

**理解挣扎的普遍性**
首先，要明白在基督徒生命中与罪争战是完全正常的。成圣（变得更像基督）是一个过程，不是一夜之间的奇迹。就像学骑自行车一样，你会跌倒很多次才能熟练。属灵成长也是如此——有进步，也有退步，但总体趋势应该是向上的。

很多青少年基督徒感到沮丧，因为他们期待信主后就不再犯罪了。但实际上，信主后你可能会更敏感地意识到自己的罪，因为圣灵在你心中工作，提醒你什么是对错。这种意识其实是成长的标志，不是退步的证明。

**识别模式和触发点**
要胜过重复的罪，首先需要了解它。问自己几个问题：
- 我通常在什么情况下会犯这个罪？（无聊、愤怒、孤独、压力大？）
- 什么环境或人会成为「触发器」？
- 这个罪满足了我什么心理需要？（安全感、掌控感、快感？）

比如，如果你的问题是上网看不合适的内容，触发点可能是深夜独处、考试压力、或感到孤独。理解这些模式帮助你制定具体的对策。

**具体的战胜策略**
1. **诚实认罪，具体悔改**：不要笼统地说「主啊，赦免我的罪」，要具体承认你做了什么。约翰一书1:9承诺，如果我们认自己的罪，神是信实的，必要赦免我们的罪。

2. **改变环境**：如果某个地方或情况总是让你跌倒，要勇敢地做出改变。删除手机上的某些APP，换个路线回家避开诱惑的地方，调整作息时间等等。

3. **建立新习惯**：nature abhors a vacuum（大自然不允许真空存在）。不要只是停止坏习惯，要用好习惯来取代它。如果你的问题是晚上刷短视频到很晚，就制定一个晚上读经或听赞美诗的新习惯。

4. **找问责伙伴**：选择一个你信任的属灵成熟的朋友，定期见面分享你的挣扎和进步。知道有人会问你「这星期怎么样？」会帮助你更加谨慎。

5. **依靠圣灵的力量**：加拉太书5:16说「你们当顺着圣灵而行，就不放纵肉体的情欲了」。每天祷告求圣灵给你力量胜过诱惑，在诱惑来临时立刻呼求主的帮助。

**恩典中的成长**
记住，神的恩典不仅仅赦免你的罪，也给你力量胜过罪。你不是靠意志力单打独斗，而是有全能的神在帮助你。当你跌倒时，不要陷在羞耻中无法自拔，而要快速回到神面前，接受祂的赦免和洁净。

哥林多后书12:9中，保罗学到了一个重要功课：「祂对我说：『我的恩典够你用的，因为我的能力是在人的软弱上显得完全。』」有时候，神允许我们继续挣扎，是为了让我们更深地依靠祂，而不是依靠自己。

**庆祝小胜利**
不要忽略进步，即使很小。如果你以前每天都犯某个罪，现在一周只犯一次，这就是显著的进步！感谢神的帮助，这会鼓励你继续前进。

最重要的是，永远不要放弃。成圣是一生的旅程，不是短跑比赛。神对你有耐心，你对自己也要有耐心。每一次的失败都是学习的机会，每一次的悔改都让你更靠近神的心。"""

        article['content_en'] = """'I did it again...' If you've ever thought this, welcome to the human club! Even the Apostle Paul admitted in Romans 7: 'I do not do the good I want to do, but the evil I do not want to do — this I keep on doing.' If even this great apostle had this struggle, we shouldn't despair.

**Understanding the Universal Struggle**
First, understand that battling sin in Christian life is completely normal. Sanctification (becoming more like Christ) is a process, not an overnight miracle. Like learning to ride a bike, you'll fall many times before becoming skilled. Spiritual growth is similar — progress and setbacks, but the overall trend should be upward.

Many teenage Christians feel frustrated because they expect to stop sinning after believing. Actually, after conversion you might become more aware of your sin because the Holy Spirit works in your heart, reminding you of right and wrong. This awareness is actually a sign of growth, not regression.

**Identifying Patterns and Triggers**
To overcome repetitive sin, first understand it. Ask yourself:
- When do I usually commit this sin? (Bored, angry, lonely, stressed?)
- What environments or people become 'triggers'?
- What psychological need does this sin meet? (Security, control, pleasure?)

For example, if your issue is viewing inappropriate content online, triggers might be late nights alone, exam pressure, or loneliness. Understanding these patterns helps you develop specific countermeasures.

**Specific Victory Strategies**
1. **Honest confession, specific repentance**: Don't generically say 'Lord, forgive my sins' — specifically admit what you did. 1 John 1:9 promises if we confess our sins, God is faithful to forgive.

2. **Change environment**: If certain places or situations always cause you to stumble, bravely make changes. Delete certain phone apps, take different routes home avoiding tempting places, adjust schedules.

3. **Build new habits**: Nature abhors a vacuum. Don't just stop bad habits — replace them with good ones. If your problem is scrolling videos late at night, establish new habits of evening Bible reading or worship music.

4. **Find accountability partners**: Choose a trusted, spiritually mature friend for regular meetings sharing struggles and progress. Knowing someone will ask 'How was this week?' helps you stay careful.

5. **Depend on the Spirit's power**: Galatians 5:16 says 'Walk by the Spirit, and you will not gratify the desires of the flesh.' Daily pray for the Spirit's strength to overcome temptation; immediately call for the Lord's help when temptation comes.

**Growing in Grace**
Remember, God's grace doesn't just forgive your sin but gives you power to overcome it. You're not fighting alone through willpower but have almighty God helping you. When you fall, don't wallow in shame but quickly return to God, accepting His forgiveness and cleansing.

In 2 Corinthians 12:9, Paul learned an important lesson: 'He said to me: My grace is sufficient for you, for my power is made perfect in weakness.' Sometimes God allows continued struggle to make us depend more deeply on Him, not ourselves.

**Celebrate Small Victories**
Don't ignore progress, however small. If you used to sin daily and now only weekly, that's significant progress! Thank God for His help — this encourages continued growth.

Most importantly, never give up. Sanctification is a lifelong journey, not a sprint. God is patient with you; be patient with yourself. Every failure is a learning opportunity, every repentance draws you closer to God's heart."""

        # 补充圣经经节和讨论问题
        article['bible_verses'].extend(['Philippians 1:6', 'Psalm 51:10'])
        article['discussion_questions'].extend([
            "你觉得为什么上帝不直接拿走我们犯罪的能力，而是让我们在过程中挣扎成长？ Why do you think God doesn't simply remove our ability to sin, but lets us struggle and grow through the process?",
            "分享一个你在某个坏习惯上取得进步的经历，是什么帮助了你？ Share about progress you've made with a bad habit — what helped you?"
        ])

    return article

if __name__ == "__main__":
    upgraded_articles = upgrade_youth_articles()
    print("升级完成！")