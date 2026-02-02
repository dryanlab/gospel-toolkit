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

def add_bible_guide_content(data, start_id):
    """Add 19 bible-guide entries"""
    
    bible_guide_entries = [
        {
            "title_zh": "创世记导读：一切的开始",
            "title_en": "Genesis Guide: Where It All Begins",
            "content_zh": "创世记是圣经的第一卷书，讲述了宇宙、人类和救赎计划的开始。前11章是'史前史'：上帝创造天地万物，人类犯罪堕落，洪水审判，巴别塔事件。这些故事回答了人生的大问题：我从哪里来？为什么世界有苦难？从12章开始进入'历史'：上帝呼召亚伯拉罕，应许他的后裔要成为大国，万国要因他得福。然后是以撒、雅各（后来改名以色列），最后是约瑟的故事——展示上帝如何化咒诅为祝福。关键主题包括：上帝的主权、人的责任、罪的后果、恩典的应许。这本书为整本圣经奠定基础，显明上帝拯救计划的开端。每个故事都指向最终的救主耶稣基督。",
            "content_en": "Genesis is the Bible's first book, telling the story of the universe, humanity, and God's rescue plan beginning. Chapters 1-11 are 'prehistoric': God creates everything, humans sin and fall, the flood judgment, and Tower of Babel. These stories answer life's big questions: Where did I come from? Why is there suffering? From chapter 12, it enters 'history': God calls Abraham, promising his descendants will become a great nation and all nations will be blessed through him. Then comes Isaac, Jacob (later renamed Israel), and finally Joseph's story — showing how God turns curses into blessings. Key themes include: God's sovereignty, human responsibility, sin's consequences, grace's promises. This book lays the foundation for the entire Bible, revealing the beginning of God's rescue plan. Every story points to the ultimate Savior, Jesus Christ.",
            "bible_verses": ["Genesis 1:1", "Genesis 3:15", "Genesis 12:1-3", "Genesis 50:20"],
            "discussion_questions": [
                "创世记中哪个人物最让你有共鸣？为什么？Which character in Genesis do you relate to most? Why?",
                "上帝的形象'意味着什么？What does it mean to be made 'in God's image'?",
                "约瑟的故事如何显示上帝的主权？How does Joseph's story show God's sovereignty?"
            ],
            "tags": ["genesis", "creation", "bible-study"]
        },
        {
            "title_zh": "出埃及记导读：救赎的故事",
            "title_en": "Exodus Guide: The Redemption Story",
            "content_zh": "出埃及记是一个关于救赎的史诗故事！以色列人在埃及做了400年奴隶，上帝兴起摩西拯救他们。十灾显示上帝胜过法老和埃及的假神，逾越节羔羊预表基督的牺牲。红海分开显示上帝的大能拯救。在西奈山，上帝颁布律法（包括十诫），建立与以色列的约。金牛犊事件显示人心的悖逆，但上帝仍然怜悯。会幕的建造说明上帝想要住在人中间。这整个故事预表我们的救赎：我们都是罪的奴隶，上帝通过耶稣拯救我们，给我们新的法律（爱神爱人），要永远与我们同在。出埃及不只是历史事件，更是每个基督徒经历的属灵真实：从黑暗进入光明，从奴役得到自由。",
            "content_en": "Exodus is an epic story about redemption! The Israelites were slaves in Egypt for 400 years, and God raised up Moses to rescue them. The ten plagues show God's victory over Pharaoh and Egypt's false gods. The Passover lamb foreshadows Christ's sacrifice. The Red Sea parting shows God's mighty deliverance. At Mount Sinai, God gives the law (including the Ten Commandments) and establishes a covenant with Israel. The golden calf incident shows human rebellion, but God remains merciful. Building the tabernacle shows God wants to dwell among people. This whole story foreshadows our redemption: we're all slaves to sin, God rescues us through Jesus, gives us new law (love God and others), and wants to be with us forever. Exodus isn't just history — it's spiritual reality every Christian experiences: from darkness to light, from slavery to freedom.",
            "bible_verses": ["Exodus 12:13", "Exodus 14:13-14", "Exodus 20:1-17", "Exodus 25:8"],
            "discussion_questions": [
                "出埃及的故事如何反映你自己的救赎经历？How does the Exodus story reflect your own redemption experience?",
                "为什么上帝要用这么多神迹拯救以色列人？Why did God use so many miracles to rescue Israel?",
                "律法的目的是什么？不只是规则吗？What's the purpose of the law? Isn't it just rules?"
            ],
            "tags": ["exodus", "redemption", "moses"]
        },
        {
            "title_zh": "诗篇导读：心灵的歌声",
            "title_en": "Psalms Guide: Songs of the Soul",
            "content_zh": "诗篇是圣经中的歌本和祷告册，150篇诗歌表达了人类各种情感：喜乐、感恩、恐惧、愤怒、困惑、希望。大卫写了其中很多篇，但也有其他作者。这些不是'属灵正确'的表面文字，而是真实、原始的情感表达。你会看到诗人对敌人生气，对上帝困惑，在绝望中哭泣，也在得胜中歌唱。关键信息是：你可以把任何情感带到上帝面前！祂不怕你的愤怒、疑惑或眼泪。诗篇教我们如何诚实地祷告，如何在困难中信靠上帝，如何赞美敬拜。很多诗篇也预言弥赛亚，耶稣经常引用诗篇。读诗篇时，找找自己的情感共鸣，然后学习诗人如何把这些情感带到上帝面前。",
            "content_en": "Psalms is the Bible's songbook and prayer book — 150 songs expressing every human emotion: joy, gratitude, fear, anger, confusion, hope. David wrote many, but there were other authors too. These aren't 'spiritually correct' surface words, but real, raw emotional expressions. You'll see psalmists angry at enemies, confused with God, crying in despair, and singing in victory. The key message: you can bring any emotion to God! He's not afraid of your anger, doubts, or tears. Psalms teach us how to pray honestly, how to trust God in difficulties, how to praise and worship. Many psalms also prophesy about the Messiah — Jesus often quoted Psalms. When reading Psalms, find your emotional connection, then learn how the psalmist brought those feelings to God.",
            "bible_verses": ["Psalm 23", "Psalm 51:10", "Psalm 139:23-24", "Psalm 1:1-3"],
            "discussion_questions": [
                "你最喜欢哪一篇诗篇？为什么？What's your favorite psalm? Why?",
                "诗篇如何帮助你更诚实地祷告？How do psalms help you pray more honestly?",
                "困难时期哪些诗篇最能安慰你？Which psalms comfort you most during difficult times?"
            ],
            "tags": ["psalms", "prayer", "worship"]
        },
        {
            "title_zh": "箴言导读：生活的智慧",
            "title_en": "Proverbs Guide: Wisdom for Living",
            "content_zh": "箴言是实用的生活手册，充满了智慧的短句和原则。主要作者是所罗门，最有智慧的王。这不是承诺书——不是说'如果你这样做，一定会发生那样的结果'，而是一般原则：通常情况下什么是明智的。核心主题是'敬畏耶和华是智慧的开端'。书中涵盖各个生活领域：金钱管理、朋友关系、工作伦理、言语的力量、性纯洁、酒精、骄傲vs谦卑等。箴言特别警告几种人：愚昧人（拒绝智慧）、懒惰人、骄傲人、好争吵的人。它赞扬勤劳、谦卑、诚实、慷慨。对青少年特别有用，因为这个阶段要做很多重要决定。读箴言的最好方法是一天读一章（31章对应一个月），慢慢消化其中的智慧。",
            "content_en": "Proverbs is a practical life manual, packed with wise sayings and principles. The main author is Solomon, the wisest king. It's not a promise book — not saying 'if you do this, that will definitely happen' — but general principles: what's usually wise. The core theme is 'the fear of the LORD is the beginning of wisdom.' It covers every area of life: money management, friendships, work ethics, power of words, sexual purity, alcohol, pride vs. humility, etc. Proverbs especially warns against several types of people: fools (who reject wisdom), lazy people, proud people, quarrelsome people. It praises hard work, humility, honesty, generosity. Especially useful for teenagers because this stage involves many important decisions. The best way to read Proverbs is one chapter a day (31 chapters for one month), slowly digesting the wisdom.",
            "bible_verses": ["Proverbs 1:7", "Proverbs 3:5-6", "Proverbs 27:17", "Proverbs 31:10"],
            "discussion_questions": [
                "箴言中哪句话最挑战你？Which verse in Proverbs challenges you most?",
                "青少年最需要箴言中的哪种智慧？What wisdom from Proverbs do teenagers need most?",
                "你如何区分'一般原则'和'绝对承诺'？How do you distinguish between 'general principles' and 'absolute promises'?"
            ],
            "tags": ["proverbs", "wisdom", "practical-living"]
        },
        {
            "title_zh": "马太福音导读：王的福音",
            "title_en": "Matthew Guide: The Gospel of the King",
            "content_zh": "马太福音是写给犹太人的，要证明耶稣就是他们等候的弥赛亚王。从家谱开始，显示耶稣是大卫的后裔。博士来朝拜显示祂是万国的王。登山宝训（第5-7章）展示天国的伦理：八福、主祷文、金律等。马太特别强调耶稣的教导，记录了很多比喻。第13章的天国比喻解释上帝的国度如何运作。耶稣行神迹证明祂的权柄，但宗教领袖拒绝接受祂。最后，这位王被钉十字架，但第三天复活，证明祂真是上帝的儿子。大使命结束全书：门徒要去使万民作祂的门徒。马太想告诉读者：耶稣不只是一个好老师，祂是王，配得我们的顺服和敬拜。今天祂仍然是王，要求我们的全心跟随。",
            "content_en": "Matthew's Gospel was written for Jews to prove that Jesus is the Messiah King they were waiting for. Starting with the genealogy, it shows Jesus is David's descendant. The wise men's worship shows He's King of all nations. The Sermon on the Mount (chapters 5-7) reveals kingdom ethics: Beatitudes, Lord's Prayer, Golden Rule, etc. Matthew especially emphasizes Jesus' teaching, recording many parables. Chapter 13's kingdom parables explain how God's kingdom operates. Jesus performs miracles proving His authority, but religious leaders reject Him. Finally, this King is crucified but rises on the third day, proving He's truly God's Son. The Great Commission ends the book: disciples must go make disciples of all nations. Matthew wants to tell readers: Jesus isn't just a good teacher, He's King, deserving our obedience and worship. Today He's still King, demanding our wholehearted following.",
            "bible_verses": ["Matthew 1:1", "Matthew 5:3-12", "Matthew 16:16", "Matthew 28:18-20"],
            "discussion_questions": [
                "耶稣作为王对你的日常生活意味着什么？What does Jesus as King mean for your daily life?",
                "登山宝训中哪个教导最挑战你？Which teaching in the Sermon on the Mount challenges you most?",
                "你如何向朋友解释耶稣是王？How would you explain to friends that Jesus is King?"
            ],
            "tags": ["matthew", "jesus-king", "gospel"]
        },
        {
            "title_zh": "罗马书导读：救恩的逻辑",
            "title_en": "Romans Guide: The Logic of Salvation",
            "content_zh": "罗马书是保罗写给罗马教会的，被称为'信仰的GPS'，系统地解释基督教核心真理。前三章描述人类的困境：所有人都犯了罪，无人能靠自己的行为得救。第4章用亚伯拉罕做例子，说明自古以来都是因信称义。第5章对比亚当和基督：亚当带来死亡，基督带来生命。第6-8章解释重生的生活：我们向罪死了，靠圣灵生活，不再被定罪。第9-11章讨论以色列的命运。最后几章讲实际的基督徒生活。核心信息是因信称义：我们不是因为好行为被上帝接纳，而是因为相信耶稣基督。这恩典是白给的礼物，但它改变我们，让我们想要顺服上帝。罗马书回答了最深刻的问题：如何与圣洁的上帝建立关系？",
            "content_en": "Romans is Paul's letter to the Roman church, called 'faith's GPS,' systematically explaining Christianity's core truths. The first three chapters describe humanity's predicament: all have sinned, no one can be saved by their own works. Chapter 4 uses Abraham as an example, showing salvation has always been by faith alone. Chapter 5 contrasts Adam and Christ: Adam brought death, Christ brought life. Chapters 6-8 explain reborn life: we died to sin, live by the Spirit, and are no longer condemned. Chapters 9-11 discuss Israel's fate. The final chapters cover practical Christian living. The core message is justification by faith: we're not accepted by God because of good works, but because we believe in Jesus Christ. This grace is a free gift, but it transforms us, making us want to obey God. Romans answers the deepest question: how can we have a relationship with a holy God?",
            "bible_verses": ["Romans 1:16-17", "Romans 3:23", "Romans 6:23", "Romans 8:1"],
            "discussion_questions": [
                "因信称义如何改变你看自己的方式？How does justification by faith change how you see yourself?",
                "为什么保罗花这么多时间论证人人都有罪？Why does Paul spend so much time proving everyone has sinned?",
                "第8章'不被定罪'对你意味着什么？What does 'no condemnation' in chapter 8 mean to you?"
            ],
            "tags": ["romans", "salvation", "justification"]
        },
        {
            "title_zh": "约翰福音导读：相信耶稣",
            "title_en": "John's Gospel: Believe in Jesus",
            "content_zh": "约翰福音与其他三卷福音书不同，更像是一个法庭辩论，要证明耶稣是上帝的儿子。约翰选择了七个神迹（称为'神迹'而不是'奇事'）和七个'我是'宣告来证明耶稣的神性。'我是生命的粮'、'我是世界的光'、'我是好牧人'、'我是复活和生命'等，都在宣告祂的神圣身份。第3章的尼哥底母、第4章的撒玛利亚妇人、第9章的盲人，都显示人需要属灵的重生。约翰特别强调'相信'这个词出现98次。目的很清楚：'记这些事要叫你们信耶稣是基督，是上帝的儿子，并且叫你们信了祂，就可以因祂的名得生命。'这是一卷传福音的书，也是一卷坚固信心的书。",
            "content_en": "John's Gospel is different from the other three, more like a courtroom argument proving Jesus is God's Son. John selected seven miracles (called 'signs' rather than 'wonders') and seven 'I am' statements to prove Jesus' deity. 'I am the bread of life,' 'I am the light of the world,' 'I am the good shepherd,' 'I am the resurrection and the life,' etc., all declare His divine identity. Chapter 3's Nicodemus, chapter 4's Samaritan woman, chapter 9's blind man all show humanity's need for spiritual rebirth. John especially emphasizes 'believe' — the word appears 98 times. The purpose is clear: 'These are written that you may believe that Jesus is the Christ, the Son of God, and that by believing you may have life in his name.' This is both an evangelistic book and a faith-strengthening book.",
            "bible_verses": ["John 1:1", "John 3:16", "John 14:6", "John 20:30-31"],
            "discussion_questions": [
                "七个'我是'宣告中哪个最触动你？Which of the seven 'I am' statements touches you most?",
                "约翰为什么这么强调'相信'？Why does John emphasize 'believe' so much?",
                "如何向朋友解释耶稣的神性？How would you explain Jesus' deity to friends?"
            ],
            "tags": ["john", "deity-of-christ", "believe"]
        }
    ]
    
    # Continue with more entries...
    bible_guide_entries_2 = [
        {
            "title_zh": "使徒行传导读：教会的诞生",
            "title_en": "Acts Guide: The Church Is Born",
            "content_zh": "使徒行传是教会历史的开篇，记录了从耶稣升天到保罗在罗马传道约30年的历史。圣灵在五旬节降临，门徒得着能力为耶稣作见证。彼得讲道，三千人信主，教会诞生了。初期教会的特点：恒心遵守使徒的教训，彼此交接，擘饼，祈祷。司提反成为第一个殉道者，扫罗（后来的保罗）迫害教会。但迫害反而让福音传到更远的地方。保罗三次宣教旅程，建立了许多教会，福音从耶路撒冷传到地极。关键主题：圣灵的能力、勇敢的见证、教会的增长、福音的普世性。这本书让我们看到初期基督徒如何生活，如何面对逼迫，如何传福音。今天我们也需要同样的圣灵充满和传福音的心志。",
            "content_en": "Acts is the opening chapter of church history, recording about 30 years from Jesus' ascension to Paul's ministry in Rome. The Holy Spirit came at Pentecost, empowering disciples to witness for Jesus. Peter preached, 3000 believed, and the church was born. Early church characteristics: devoted to apostles' teaching, fellowship, breaking bread, prayer. Stephen became the first martyr, Saul (later Paul) persecuted the church. But persecution actually spread the Gospel further. Paul's three missionary journeys established many churches, taking the Gospel from Jerusalem to the ends of the earth. Key themes: Holy Spirit's power, bold witnessing, church growth, Gospel's universality. This book shows us how early Christians lived, faced persecution, and evangelized. Today we need the same Holy Spirit filling and evangelistic heart.",
            "bible_verses": ["Acts 1:8", "Acts 2:42", "Acts 4:12", "Acts 16:31"],
            "discussion_questions": [
                "初期教会的哪个特点最吸引你？What early church characteristic attracts you most?",
                "为什么逼迫反而帮助福音传播？Why did persecution actually help Gospel spread?",
                "今天我们如何像使徒那样勇敢见证？How can we witness boldly like the apostles today?"
            ],
            "tags": ["acts", "church-history", "holy-spirit"]
        },
        {
            "title_zh": "哥林多前书导读：教会问题解答",
            "title_en": "1 Corinthians Guide: Church Problems Solved",
            "content_zh": "哥林多教会有很多问题：分党结派、道德败坏、混乱的敬拜、对复活的怀疑等。保罗逐一解决这些问题，给我们看到如何处理教会冲突。关键章节包括：第1章论分党（高举人而不是基督）、第6章论身体的圣洁、第8章论基督徒的自由与爱心、第11章论敬拜秩序、第12-14章论属灵恩赐（要追求爱，不是炫耀）、第13章是著名的'爱的篇章'、第15章详细论证复活的真实性和重要性。保罗的方法是回到福音基础，用爱心说诚实话。他不回避问题，但总是指向基督。这本书教导我们：教会不是完美的人聚集的地方，而是不完美的人一起学习跟随基督的地方。关键是谦卑、爱心，和以基督为中心。",
            "content_en": "The Corinthian church had many problems: divisions, moral corruption, chaotic worship, doubts about resurrection, etc. Paul addresses each issue, showing us how to handle church conflicts. Key chapters include: chapter 1 on divisions (elevating people rather than Christ), chapter 6 on bodily holiness, chapter 8 on Christian freedom and love, chapter 11 on worship order, chapters 12-14 on spiritual gifts (pursue love, not showing off), chapter 13 is the famous 'love chapter,' chapter 15 thoroughly proves resurrection's reality and importance. Paul's method is returning to Gospel foundations, speaking truth in love. He doesn't avoid problems but always points to Christ. This book teaches us: church isn't where perfect people gather, but where imperfect people learn to follow Christ together. The key is humility, love, and being Christ-centered.",
            "bible_verses": ["1 Corinthians 1:10", "1 Corinthians 6:19-20", "1 Corinthians 13:1-3", "1 Corinthians 15:3-4"],
            "discussion_questions": [
                "哥林多教会的哪个问题在今天的教会也存在？Which Corinthian church problem exists in churches today?",
                "第13章的爱如何解决教会冲突？How does chapter 13's love solve church conflicts?",
                "属灵恩赐的目的是什么？What's the purpose of spiritual gifts?"
            ],
            "tags": ["1-corinthians", "church-problems", "love"]
        },
        {
            "title_zh": "以弗所书导读：在基督里的丰盛",
            "title_en": "Ephesians Guide: Riches in Christ",
            "content_zh": "以弗所书是保罗在监狱里写的，被称为'基督徒的最高峰'。前三章讲我们在基督里拥有的属灵祝福：被拣选、被收养、被救赎、被印证。第1章是三位一体的颂赞：圣父拣选、圣子救赎、圣灵印证。第2章描述从死在过犯中到与基督同复活，从外邦人到上帝家里的人。第3章保罗为教会祷告，求上帝开启心灵的眼睛。后三章讲实际生活：教会的合一、新人的生活、家庭关系、属灵争战。第6章的全副军装教导我们如何对抗撒但。整本书的主题是'在基督里'（出现160多次）。我们的身份、能力、盼望都在基督里。这不是理论，而要活出来：谦卑相爱、圣洁生活、面对争战。",
            "content_en": "Ephesians was written by Paul from prison, called 'the Christian's Mount Everest.' The first three chapters describe our spiritual blessings in Christ: chosen, adopted, redeemed, sealed. Chapter 1 is Trinitarian praise: Father chooses, Son redeems, Spirit seals. Chapter 2 describes the journey from dead in trespasses to raised with Christ, from Gentiles to God's household. Chapter 3 has Paul's prayer for the church, asking God to open spiritual eyes. The last three chapters cover practical living: church unity, new life, family relationships, spiritual warfare. Chapter 6's armor teaches us how to fight Satan. The book's theme is 'in Christ' (appearing 160+ times). Our identity, power, hope are all in Christ. This isn't theory but must be lived out: humble love, holy living, facing warfare.",
            "bible_verses": ["Ephesians 1:3", "Ephesians 2:8-10", "Ephesians 4:1", "Ephesians 6:11"],
            "discussion_questions": [
                "'在基督里'对你的身份认知有什么影响？How does being 'in Christ' affect your identity?",
                "属灵争战在青少年生活中如何体现？How does spiritual warfare manifest in teenage life?",
                "教会合一为什么这么重要？Why is church unity so important?"
            ],
            "tags": ["ephesians", "in-christ", "spiritual-warfare"]
        },
        {
            "title_zh": "腓立比书导读：在基督里的喜乐",
            "title_en": "Philippians Guide: Joy in Christ",
            "content_zh": "腓立比书是保罗的'喜乐书信'，虽然在监狱里写的，却充满了喜乐。第1章说活着就是基督，死了就有益处。第2章有著名的基督论：耶稣本有上帝的形象，却虚己成为人，死在十字架上，因此上帝将祂升为至高。我们也要有这种谦卑的心。第3章保罗分享见证：他过去以为有益的，现在因基督都当作有损的。认识基督是至宝，其他都是粪土。第4章教导知足：靠着那加给我力量的，凡事都能做。'应当一无挂虑'，要将一切忧虑卸给上帝。关键信息：喜乐不依赖环境，而依赖基督。真正的满足来自认识基督，不是得到东西。基督徒应该是最快乐的人，因为我们有永恒的盼望。",
            "content_en": "Philippians is Paul's 'joy epistle,' written from prison yet full of joy. Chapter 1 says to live is Christ, to die is gain. Chapter 2 has the famous Christology: Jesus, being in God's form, emptied Himself to become human and died on the cross, therefore God exalted Him to the highest. We should have this humble mind too. Chapter 3 shares Paul's testimony: what he once thought beneficial, he now counts as loss for Christ. Knowing Christ is supreme value, everything else is garbage. Chapter 4 teaches contentment: 'I can do all things through him who strengthens me.' 'Be anxious for nothing,' cast all worries to God. Key message: joy doesn't depend on circumstances but on Christ. True satisfaction comes from knowing Christ, not getting things. Christians should be the happiest people because we have eternal hope.",
            "bible_verses": ["Philippians 1:21", "Philippians 2:5-8", "Philippians 3:7-8", "Philippians 4:13"],
            "discussion_questions": [
                "在困难中如何保持喜乐？How can we maintain joy during difficulties?",
                "基督的谦卑对你有什么挑战？How does Christ's humility challenge you?",
                "什么是真正的知足？What is true contentment?"
            ],
            "tags": ["philippians", "joy", "contentment"]
        }
    ]
    
    # Add remaining entries for other Bible books...
    bible_guide_entries_3 = [
        {
            "title_zh": "加拉太书导读：自由的福音",
            "title_en": "Galatians Guide: The Gospel of Freedom",
            "content_zh": "加拉太书被称为'基督徒自由的大宪章'。加拉太教会被假教师误导，以为除了信耶稣还要遵守犹太律法才能得救。保罗非常愤怒，说如果有人传别的福音，就应当被咒诅。第2章记录保罗当面抵挡彼得，因为彼得的行为否认了因信称义的真理。第3章论证律法的目的是把我们引到基督那里，现在基督来了，我们就不在律法之下了。第4章说我们不再是奴仆，而是儿子。第5章强调基督释放了我们，叫我们得自由，但不要用自由当作放纵情欲的机会。第6章教导互相担当重担。关键信息：救恩完全是恩典，不需要加上任何行为。我们得了自由，但要用自由彼此服事。律法主义和放纵主义都是错误的。",
            "content_en": "Galatians is called 'the Magna Carta of Christian freedom.' The Galatian churches were misled by false teachers who said they needed to follow Jewish law in addition to believing in Jesus for salvation. Paul is furious, saying if anyone preaches a different gospel, they should be cursed. Chapter 2 records Paul confronting Peter face-to-face because Peter's behavior denied the truth of justification by faith. Chapter 3 argues that the law's purpose was to bring us to Christ — now that Christ has come, we're no longer under law. Chapter 4 says we're no longer slaves but sons. Chapter 5 emphasizes that Christ freed us for freedom, but don't use freedom as an opportunity for the flesh. Chapter 6 teaches bearing one another's burdens. Key message: salvation is entirely by grace, no works needed. We have freedom but should use it to serve each other. Both legalism and licentiousness are wrong.",
            "bible_verses": ["Galatians 2:20", "Galatians 3:24", "Galatians 5:1", "Galatians 6:2"],
            "discussion_questions": [
                "基督徒的自由包括什么？不包括什么？What does Christian freedom include? What doesn't it include?",
                "为什么律法主义这么有吸引力？Why is legalism so attractive?",
                "如何平衡自由与责任？How do we balance freedom and responsibility?"
            ],
            "tags": ["galatians", "freedom", "grace"]
        },
        {
            "title_zh": "歌罗西书导读：基督的至上性",
            "title_en": "Colossians Guide: Christ's Supremacy",
            "content_zh": "歌罗西教会面临错误教导，有人说基督不够，还需要别的。保罗写信纠正，强调基督的绝对至上性。第1章说基督是'那不能看见之上帝的像'，是'首生的，在一切被造的以先'，'万有都是靠祂造的，又是为祂造的'。祂在凡事上居首位。第2章警告不要被哲学和虚空的妄言欺骗，在基督里面有神本性一切的丰盛。不要让人因着律法条文论断你们。第3章教导新生活：脱去旧人，穿上新人；治死地上的肢体；以基督的话丰丰富富存在心里。第4章论到各种关系中的基督徒品格。核心信息：基督足够了！祂是万有的主，我们在祂里面已经完全了。不需要什么'基督加上别的东西'。",
            "content_en": "The Colossian church faced false teaching — some said Christ wasn't enough, they needed other things too. Paul wrote to correct this, emphasizing Christ's absolute supremacy. Chapter 1 says Christ is 'the image of the invisible God,' 'the firstborn over all creation,' 'all things were created through him and for him.' He has supremacy over everything. Chapter 2 warns against being deceived by philosophy and empty deception — in Christ dwells all the fullness of deity bodily. Don't let anyone judge you by legal requirements. Chapter 3 teaches new life: put off the old self, put on the new; put to death earthly members; let Christ's word dwell richly. Chapter 4 covers Christian character in various relationships. Core message: Christ is enough! He's Lord of all, and we're complete in Him. No need for 'Christ plus something else.'",
            "bible_verses": ["Colossians 1:15-17", "Colossians 2:9-10", "Colossians 3:1-3", "Colossians 3:16"],
            "discussion_questions": [
                "今天什么东西试图与基督竞争首位？What tries to compete with Christ for first place today?",
                "基督的至上性如何影响你的日常决定？How does Christ's supremacy affect your daily decisions?",
                "'在基督里完全'对你意味着什么？What does being 'complete in Christ' mean to you?"
            ],
            "tags": ["colossians", "supremacy-of-christ", "complete"]
        },
        {
            "title_zh": "提摩太前书导读：教会生活指南",
            "title_en": "1 Timothy Guide: Church Life Manual",
            "content_zh": "提摩太前书是保罗写给年轻同工提摩太的教牧书信，指导如何管理教会。第1章警告异端教导，强调律法的正当用途。第2章论祷告和女性在教会中的角色。第3章详细说明监督（长老）和执事的资格——重点是品格，不是能力。第4章预言末世必有人离弃真道，要在敬虔上操练自己。第5章论如何对待不同年龄段的信徒，寡妇的照顾，长老的尊重。第6章警告贪财的危险，要知足，要追求敬虔。给提摩太个人的劝勉：不要因为年轻被人轻看，要在言语、行为、爱心、信心、清洁上都作信徒的榜样。这本书对今天的年轻基督徒特别有价值，教导如何在教会中服侍，如何过敬虔的生活。",
            "content_en": "1 Timothy is a pastoral epistle Paul wrote to young coworker Timothy, guiding church management. Chapter 1 warns against false teaching, emphasizes proper use of law. Chapter 2 discusses prayer and women's role in church. Chapter 3 details qualifications for overseers (elders) and deacons — emphasis on character, not ability. Chapter 4 prophesies that in later times some will depart from faith, encourages training in godliness. Chapter 5 covers how to treat different age groups, caring for widows, respecting elders. Chapter 6 warns against love of money, encourages contentment and pursuing godliness. Personal advice to Timothy: don't let anyone despise your youth, be an example in speech, conduct, love, faith, and purity. This book is especially valuable for young Christians today, teaching how to serve in church and live godly lives.",
            "bible_verses": ["1 Timothy 3:16", "1 Timothy 4:12", "1 Timothy 6:6", "1 Timothy 6:10"],
            "discussion_questions": [
                "年轻人在教会中可以怎样服侍？How can young people serve in church?",
                "什么是真正的敬虔？What is true godliness?",
                "如何平衡谦卑与做榜样？How do we balance humility with being an example?"
            ],
            "tags": ["1-timothy", "church-leadership", "youth-example"]
        },
        {
            "title_zh": "提摩太后书导读：最后的嘱托",
            "title_en": "2 Timothy Guide: Final Charge",
            "content_zh": "提摩太后书是保罗的遗言，在即将殉道前写给提摩太。第1章鼓励提摩太不要以福音为耻，要为福音受苦。第2章用士兵、运动员、农夫的比喻说明事奉的品格：专心、守规、勤劳。'你要和我同受苦难，好像基督耶稣的精兵。'第3章预言末世的危险：人专顾自己、贪爱钱财、自夸、狂傲等。但圣经都是上帝所默示的，有教训、督责、使人归正、教导人学义的功用。第4章是著名的嘱托：'务要传道，无论得时不得时，总要专心，并用百般的忍耐，各样的教训责备人、警戒人、劝勉人。'保罗说自己'那美好的仗我已经打过了，当跑的路我已经跑尽了，所信的道我已经守住了'。这是为主而活的典范。",
            "content_en": "2 Timothy is Paul's last will, written to Timothy before martyrdom. Chapter 1 encourages Timothy not to be ashamed of the Gospel but to suffer for it. Chapter 2 uses analogies of soldier, athlete, farmer to describe ministry character: dedication, rule-keeping, hard work. 'Share in suffering as a good soldier of Christ Jesus.' Chapter 3 prophesies end-time dangers: people lovers of self, money, boastful, arrogant, etc. But all Scripture is God-breathed, useful for teaching, rebuking, correcting, training in righteousness. Chapter 4 contains the famous charge: 'Preach the word; be ready in season and out of season; reprove, rebuke, exhort, with complete patience and teaching.' Paul says he has 'fought the good fight, finished the race, kept the faith.' This is the model of living for the Lord.",
            "bible_verses": ["2 Timothy 1:7", "2 Timothy 2:3", "2 Timothy 3:16-17", "2 Timothy 4:7"],
            "discussion_questions": [
                "面对困难时你如何不以福音为耻？How do you not be ashamed of the Gospel when facing difficulties?",
                "圣经在你生活中的作用是什么？What role does Scripture play in your life?",
                "你希望在生命终点时能说什么？What do you hope to say at the end of your life?"
            ],
            "tags": ["2-timothy", "perseverance", "scripture"]
        },
        {
            "title_zh": "希伯来书导读：基督更美的约",
            "title_en": "Hebrews Guide: Christ's Better Covenant",
            "content_zh": "希伯来书写给想要回到犹太教的基督徒，论证基督和新约胜过旧约的一切。第1章：基督比天使更尊贵，祂是上帝的儿子。第3-4章：基督比摩西更大，祂带来真正的安息。第5-7章：基督是更美的大祭司，不是按亚伦的等次，而是按麦基洗德的等次，永远为祭司。第8-10章：基督献上更美的祭，用自己的血立了新约，一次永远除掉罪。第11章：信心的见证人，历数旧约圣徒的信心榜样。第12章：仰望耶稣，为了前面的喜乐，忍受十字架的苦难。第13章：实际的劝勉。关键信息：不要回头！基督已经成就了完美的救恩，旧约只是影儿，基督是实体。我们有更美的指望，更美的祭司，更美的祭物，更美的约。",
            "content_en": "Hebrews was written to Christians tempted to return to Judaism, arguing that Christ and the new covenant surpass everything in the old. Chapter 1: Christ is superior to angels, He's God's Son. Chapters 3-4: Christ is greater than Moses, He brings true rest. Chapters 5-7: Christ is a better high priest, not according to Aaron's order but Melchizedek's, priest forever. Chapters 8-10: Christ offered a better sacrifice, established a new covenant with His own blood, removed sin once for all. Chapter 11: witnesses of faith, listing Old Testament examples. Chapter 12: looking to Jesus who endured the cross for the joy set before Him. Chapter 13: practical exhortations. Key message: don't go back! Christ has accomplished perfect salvation. The old covenant was shadow, Christ is reality. We have better hope, better priest, better sacrifice, better covenant.",
            "bible_verses": ["Hebrews 1:1-2", "Hebrews 4:14-16", "Hebrews 9:12", "Hebrews 12:1-2"],
            "discussion_questions": [
                "为什么基督比旧约制度更好？Why is Christ better than the Old Testament system?",
                "第11章的信心英雄如何鼓励你？How do the faith heroes in chapter 11 encourage you?",
                "什么会让你想要'回头'？What might tempt you to 'go back'?"
            ],
            "tags": ["hebrews", "better-covenant", "perseverance"]
        },
        {
            "title_zh": "启示录导读：最终的胜利",
            "title_en": "Revelation Guide: Ultimate Victory",
            "content_zh": "启示录是约翰在拔摩岛上得到的异象，充满象征性语言，但核心信息很清楚：耶稣基督是历史的主宰，祂必得胜。第1-3章：复活的基督向七个教会说话，每个教会都有不同的问题和劝勉。第4-5章：天上的敬拜，羔羊配得荣耀。第6-19章：审判的异象，七印、七号、七碗，描述末日的灾难和上帝对罪恶的审判。但这不是恐怖故事，而是给受苦的教会安慰：上帝在掌权，祂会为圣徒伸冤。第20章：千禧年和最后审判。第21-22章：新天新地，圣城新耶路撒冷，上帝与人同住，不再有死亡、悲哀、哭号、疼痛。这是我们最终的盼望。启示录告诉我们：无论现在多么黑暗，基督已经得胜了，我们站在胜利者的一边。",
            "content_en": "Revelation is John's vision on Patmos, full of symbolic language, but the core message is clear: Jesus Christ is history's Lord and will be victorious. Chapters 1-3: the risen Christ speaks to seven churches, each with different problems and encouragements. Chapters 4-5: heavenly worship, the Lamb is worthy of glory. Chapters 6-19: visions of judgment — seven seals, trumpets, bowls describing end-time calamities and God's judgment on evil. But this isn't a horror story — it's comfort for the suffering church: God reigns and will vindicate His saints. Chapter 20: millennium and final judgment. Chapters 21-22: new heaven and earth, holy city New Jerusalem, God dwelling with people, no more death, mourning, crying, pain. This is our ultimate hope. Revelation tells us: no matter how dark now, Christ has already won, we're on the winning side.",
            "bible_verses": ["Revelation 1:8", "Revelation 5:9-10", "Revelation 21:3-4", "Revelation 22:20"],
            "discussion_questions": [
                "启示录中的象征如何帮助我们理解属灵真理？How do Revelation's symbols help us understand spiritual truths?",
                "面对苦难时，最终胜利的盼望如何安慰你？How does hope of ultimate victory comfort you during suffering?",
                "新天新地与现在的世界有什么不同？How will the new heaven and earth be different from now?"
            ],
            "tags": ["revelation", "victory", "new-creation"]
        }
    ]
    
    # Combine all entries
    all_entries = bible_guide_entries + bible_guide_entries_2 + bible_guide_entries_3
    
    current_id = start_id
    for entry in all_entries:
        new_entry = {
            "id": f"youth-{current_id:03d}",
            "section": "bible-guide",
            "category": "圣经导读",
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
    
    # Add bible-guide content
    updated_data, next_id = add_bible_guide_content(data, start_id)
    
    # Save updated data
    with open('data/youth.json', 'w', encoding='utf-8') as f:
        json.dump(updated_data, f, ensure_ascii=False, indent=2)
    
    print(f"Added 19 bible-guide entries. Next ID: youth-{next_id:03d}")
    print(f"Total entries: {len(updated_data)}")

if __name__ == "__main__":
    main()