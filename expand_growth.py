#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import json

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

def add_growth_content(data, start_id):
    """Add 10 growth entries"""
    
    growth_entries = [
        {
            "title_zh": "情绪管理：在基督里的内心平静",
            "title_en": "Emotional Management: Inner Peace in Christ",
            "content_zh": "青少年时期情绪起伏很大，这很正常但也很痛苦。愤怒、悲伤、恐惧、兴奋...都是上帝给我们的礼物，但需要智慧管理。首先，承认情绪的存在，不要压抑。诗篇显示我们可以向上帝表达任何情绪，甚至愤怒和困惑。其次，找到情绪背后的原因。愤怒常常来自受伤，恐惧来自不安全感。第三，学会暂停。冲动时数到十，祷告求上帝的平静。'人的怒气并不成就上帝的义。'第四，寻找健康的出口：运动、音乐、写日记、与信任的人谈话。第五，记住你的身份：你是被爱的，有价值的，情绪不能定义你。第六，在困难情绪中寻求上帝。祂理解你的感受，因为耶稣也经历过人类的各种情绪。",
            "content_en": "Teenage emotions are intense — normal but painful. Anger, sadness, fear, excitement... all are God's gifts but need wise management. First, acknowledge emotions' existence, don't suppress. Psalms show we can express any emotion to God, even anger and confusion. Second, find the cause behind emotions. Anger often comes from hurt, fear from insecurity. Third, learn to pause. When impulsive, count to ten, pray for God's calm. 'Human anger does not accomplish God's righteousness.' Fourth, find healthy outlets: exercise, music, journaling, talking with trusted people. Fifth, remember your identity: you're loved, valuable, emotions don't define you. Sixth, seek God in difficult emotions. He understands your feelings because Jesus also experienced all human emotions.",
            "bible_verses": ["Psalm 34:18", "James 1:19-20", "Philippians 4:6-7", "Hebrews 4:15"],
            "discussion_questions": [
                "你最难管理的情绪是什么？What emotion is hardest for you to manage?",
                "情绪低落时你如何寻求上帝？How do you seek God when emotionally down?",
                "健康表达情绪和有害表达有什么区别？What's the difference between healthy and harmful emotional expression?"
            ],
            "tags": ["emotions", "mental-health", "self-control"]
        },
        {
            "title_zh": "身份认同：我是谁？",
            "title_en": "Identity: Who Am I?",
            "content_zh": "青少年最大的问题之一是'我是谁？'社会告诉你：你是你的成绩、外表、受欢迎程度、才能。但上帝说：你的身份比这些深刻得多。首先，你是上帝按祂形象造的，有divine DNA。无论你觉得自己多么平凡，你都带着造物主的印记。其次，如果你信了基督，你是上帝的儿女、基督的朋友、圣灵的殿堂。这些不会因为你的表现而改变。第三，你有unique的calling和恩赐。上帝造你不是为了成为别人，而是成为最好的你自己。第四，你的价值不需要证明。耶稣在十字架上已经宣告了你的worth。第五，identity crisis是成长的一部分，不要害怕探索。但要在圣经的根基上建造身份，而不是在shifting sand上。",
            "content_en": "One of teenagers' biggest questions is 'Who am I?' Society tells you: you're your grades, appearance, popularity, talents. But God says: your identity is much deeper. First, you're made in God's image, carrying divine DNA. No matter how ordinary you feel, you bear the Creator's mark. Second, if you've believed in Christ, you're God's child, Christ's friend, the Holy Spirit's temple. These don't change based on your performance. Third, you have unique calling and gifts. God made you not to become someone else but the best version of yourself. Fourth, your value doesn't need proving. Jesus declared your worth on the cross. Fifth, identity crisis is part of growing up — don't fear exploring. But build identity on Scripture's foundation, not shifting sand.",
            "bible_verses": ["Genesis 1:27", "1 John 3:1", "Psalm 139:13-14", "Ephesians 2:10"],
            "discussion_questions": [
                "什么factors最影响你的自我认知？What factors most influence your self-perception?",
                "作为上帝的儿女意味着什么？What does it mean to be God's child?",
                "如何在peer pressure中保持真实的自己？How do you stay true to yourself under peer pressure?"
            ],
            "tags": ["identity", "self-worth", "god's-image"]
        },
        {
            "title_zh": "恋爱观：在爱情中荣耀上帝",
            "title_en": "Dating Perspective: Glorifying God in Romance",
            "content_zh": "青少年对恋爱充满好奇和渴望，这很自然——上帝创造了attraction和love的能力。但文化给我们错误的恋爱观：以自我为中心、以physical pleasure为目标、casual relationships。基督徒的恋爱观不同。首先，目的不只是happiness而是holiness。好的relationship帮助我们更像基督。其次，纯洁很重要。身体的intimacy是上帝给婚姻的礼物，提前享用会带来伤害。第三，智慧选择。不要只看外表或感觉，要看character：对方爱上帝吗？有integrity吗？会成为good spouse和parent吗？第四，involve parents和信任的导师。Love is blind，需要智慧的eyes帮助看清。第五，如果还没ready，wait。Single season可以用来service、成长、prepare。上帝的timing总是最好的。",
            "content_en": "Teenagers are naturally curious about and long for romance — God created our capacity for attraction and love. But culture gives wrong dating perspectives: self-centered, physical pleasure focused, casual relationships. Christian dating perspective is different. First, the goal isn't just happiness but holiness. Good relationships help us become more like Christ. Second, purity matters. Physical intimacy is God's gift for marriage — enjoying it early brings harm. Third, choose wisely. Don't just look at appearance or feelings, look at character: does this person love God? Have integrity? Would they make a good spouse and parent? Fourth, involve parents and trusted mentors. Love is blind, needs wise eyes to help see clearly. Fifth, if you're not ready, wait. Single season can be used for service, growth, preparation. God's timing is always best.",
            "bible_verses": ["1 Corinthians 13:4-7", "2 Timothy 2:22", "Proverbs 31:30", "Ecclesiastes 3:1"],
            "discussion_questions": [
                "基督徒的恋爱观与世俗恋爱观有什么不同？How does Christian dating differ from secular dating?",
                "如何在relationship中保持purity？How do you maintain purity in relationships?",
                "single生活有什么好处？What are the benefits of single life?"
            ],
            "tags": ["dating", "purity", "relationships"]
        },
        {
            "title_zh": "与父母关系：在成长中honor parents",
            "title_en": "Parent Relationship: Honoring Parents While Growing",
            "content_zh": "青少年与父母的关系often很复杂：你想要independence，他们worried about你的safety。你觉得他们outdated，他们觉得你rebellious。但上帝说'当孝敬父母'，这是有应许的诫命。怎样在成长中honor parents？首先，理解他们的心：大多数时候restrictions来自love而非control。他们曾经也是teenager，知道可能的dangers。其次，沟通而非rebellion。告诉他们你的想法，听他们的concerns，一起找compromise。第三，earn trust through小事的faithfulness。准时回家、诚实告知whereabouts、responsible behavior都会增加freedom。第四，为specific issues祷告。有些conflicts可能有deeper spiritual roots。第五，即使disagree也要respectful。不要用harsh words或slam doors。第六，记住这是temporary phase。有一天你会感谢他们的guidance。",
            "content_en": "Teenage-parent relationships are often complex: you want independence, they worry about your safety. You think they're outdated, they think you're rebellious. But God says 'honor your parents' — this is a commandment with promise. How to honor parents while growing? First, understand their heart: most restrictions come from love not control. They were once teenagers too, know potential dangers. Second, communicate rather than rebel. Tell them your thoughts, hear their concerns, find compromise together. Third, earn trust through faithfulness in small things. Coming home on time, honestly sharing whereabouts, responsible behavior all increase freedom. Fourth, pray about specific issues. Some conflicts might have deeper spiritual roots. Fifth, be respectful even when disagreeing. Don't use harsh words or slam doors. Sixth, remember this is a temporary phase. Someday you'll thank them for their guidance.",
            "bible_verses": ["Ephesians 6:1-3", "Proverbs 1:8-9", "Luke 2:51", "Colossians 3:20"],
            "discussion_questions": [
                "与父母最常争论的话题是什么？What do you most often argue with parents about?",
                "如何在obedience和independence之间平衡？How do you balance obedience and independence?",
                "父母的哪些教导你现在更能理解了？What parental teachings do you better understand now?"
            ],
            "tags": ["family", "honor-parents", "growing-up"]
        },
        {
            "title_zh": "孤独感：在独处中遇见上帝",
            "title_en": "Loneliness: Meeting God in Solitude",
            "content_zh": "现代社会paradox：我们比以往更connected，却也更lonely。青少年particularly容易感到孤独，特别是在social media时代看到别人seemingly perfect lives。但loneliness不一定是坏事，it can drive us closer to God。首先，区分solitude和loneliness。Solitude是选择独处，loneliness是感觉被isolation。Jesus经常寻求solitude与Father communion。其次，用lonely时间亲近上帝。读经、祷告、worship、reflection。上帝说'我总不撇下你，也不丢弃你。'第三，honest about your feelings。告诉上帝你的loneliness，祂理解并care。第四，reach out to others。有时候helping others可以heal our own loneliness。第五，join community。参加church youth group、volunteer activities、hobby groups。True friendship takes time to build。第六，remember loneliness is temporary，但与上帝的relationship是eternal。",
            "content_en": "Modern society's paradox: we're more connected than ever yet also more lonely. Teenagers are particularly prone to loneliness, especially in the social media age seeing others' seemingly perfect lives. But loneliness isn't necessarily bad — it can drive us closer to God. First, distinguish solitude from loneliness. Solitude is choosing to be alone, loneliness is feeling isolated. Jesus often sought solitude for communion with the Father. Second, use lonely times to draw near God. Bible reading, prayer, worship, reflection. God says 'I will never leave you nor forsake you.' Third, be honest about your feelings. Tell God about your loneliness — He understands and cares. Fourth, reach out to others. Sometimes helping others heals our own loneliness. Fifth, join community. Participate in church youth groups, volunteer activities, hobby groups. True friendship takes time to build. Sixth, remember loneliness is temporary, but relationship with God is eternal.",
            "bible_verses": ["Hebrews 13:5", "Psalm 25:16", "Matthew 28:20", "Ecclesiastes 4:12"],
            "discussion_questions": [
                "你最孤独的时候是什么时候？When do you feel most lonely?",
                "独处和孤独有什么区别？What's the difference between solitude and loneliness?",
                "如何在孤独中经历上帝的陪伴？How do you experience God's companionship in loneliness?"
            ],
            "tags": ["loneliness", "solitude", "god's-presence"]
        },
        {
            "title_zh": "自我形象：上帝眼中的美丽",
            "title_en": "Self-Image: Beauty in God's Eyes",
            "content_zh": "社会对beauty的定义constantly changing and mostly impossible：perfect skin、certain body shape、expensive clothes、flawless appearance。这导致很多青少年对自己的外表不满。但上帝的perspective完全不同。首先，真正的美丽来自内心。'人是看外貌，耶和华是看内心。'Character、kindness、integrity比physical appearance更持久更有价值。其次，你是unique masterpiece。上帝没有造两个identical的人，你的appearance也是祂unique design的一部分。第三，body是圣灵的殿，要care for it但不要obsess over it。健康比perfect更重要。第四，不要让外表成为identity的foundation。你的worth不取决于mirror中的reflection。第五，focus on what your body can do而非它看起来怎样：thinking、serving、loving、creating。第六，remember aging是natural process，inner beauty随着wisdom和grace增长。",
            "content_en": "Society's definition of beauty is constantly changing and mostly impossible: perfect skin, certain body shapes, expensive clothes, flawless appearance. This makes many teenagers dissatisfied with their looks. But God's perspective is completely different. First, true beauty comes from within. 'Man looks at the outward appearance, but the Lord looks at the heart.' Character, kindness, integrity are more lasting and valuable than physical appearance. Second, you're a unique masterpiece. God made no two identical people — your appearance is part of His unique design. Third, the body is the Holy Spirit's temple — care for it but don't obsess. Health is more important than perfection. Fourth, don't make appearance your identity's foundation. Your worth doesn't depend on the mirror's reflection. Fifth, focus on what your body can do rather than how it looks: thinking, serving, loving, creating. Sixth, remember aging is natural — inner beauty grows with wisdom and grace.",
            "bible_verses": ["1 Samuel 16:7", "1 Peter 3:3-4", "Psalm 139:14", "1 Corinthians 6:19-20"],
            "discussion_questions": [
                "什么影响了你对自己外表的看法？What influences your view of your own appearance?",
                "内在美和外在美哪个更重要？Which is more important: inner or outer beauty?",
                "如何帮助朋友建立健康的自我形象？How can you help friends build healthy self-image?"
            ],
            "tags": ["self-image", "beauty", "body-image"]
        },
        {
            "title_zh": "手机游戏成瘾：在娱乐中保持平衡",
            "title_en": "Phone Gaming Addiction: Balance in Entertainment",
            "content_zh": "手机和游戏是现代生活的一部分，但容易变成addiction，偷走我们的时间、attention、relationships。如何保持健康平衡？首先，honest evaluation：你每天花多少时间在screen上？这些时间可以用来做什么其他有意义的事？其次，设定boundaries。Use app timers、phone-free meals、designated study times。Technology应该服务我们，而非控制我们。第三，find alternative activities：outdoor sports、reading、music、art、face-to-face socializing。Real world experiences比virtual world更fulfilling。第四，understand游戏设计的psychology：它们designed to be addictive，知道这一点可以帮助抵抗。第五，accountability。与朋友或家人分享your goals，互相鼓励。第六，用technology服务上帝：listen to sermons、read Bible apps、Christian podcasts、online worship。关键不是complete avoidance而是wise stewardship。",
            "content_en": "Phones and games are part of modern life but easily become addictions, stealing our time, attention, relationships. How to maintain healthy balance? First, honest evaluation: how much time do you spend on screens daily? What other meaningful things could this time be used for? Second, set boundaries. Use app timers, phone-free meals, designated study times. Technology should serve us, not control us. Third, find alternative activities: outdoor sports, reading, music, art, face-to-face socializing. Real world experiences are more fulfilling than virtual ones. Fourth, understand gaming psychology: they're designed to be addictive — knowing this helps resist. Fifth, accountability. Share your goals with friends or family, encourage each other. Sixth, use technology to serve God: listen to sermons, Bible apps, Christian podcasts, online worship. The key isn't complete avoidance but wise stewardship.",
            "bible_verses": ["1 Corinthians 6:12", "Ephesians 5:15-16", "1 Corinthians 10:23-24", "Philippians 4:8"],
            "discussion_questions": [
                "你觉得自己有手机或游戏瘾吗？Do you think you're addicted to phones or games?",
                "technology如何帮助你的信仰成长？How does technology help your faith grow?",
                "如何向沉迷游戏的朋友传达关心？How do you express concern to friends addicted to gaming?"
            ],
            "tags": ["addiction", "technology", "balance"]
        },
        {
            "title_zh": "抑郁焦虑：在黑暗中寻找希望",
            "title_en": "Depression & Anxiety: Finding Hope in Darkness",
            "content_zh": "抑郁和焦虑在青少年中increasingly common，这是serious mental health issues，不是spiritual weakness。如果你正在经历，知道这些：首先，这不是你的错，也不表示lack of faith。许多圣经人物包括大卫、以利亚都经历过深度despair。其次，寻求专业帮助很重要：counselors、therapists、必要时medication。上帝通过medical professionals工作。第三，maintain spiritual disciplines即使感觉困难：读诗篇中的lament、简单祷告、听worship music。不要期待immediate fix，but stay connected to God。第四，tell trusted adults：parents、youth pastors、school counselors。不要suffer in silence。第五，记住feelings不是facts。Depression说'nothing will get better'，但这是lie。第六，如果有self-harm thoughts，immediately seek help。你的life有value，上帝有plans for your future。",
            "content_en": "Depression and anxiety are increasingly common among teenagers — serious mental health issues, not spiritual weakness. If you're experiencing these, know this: First, it's not your fault, doesn't indicate lack of faith. Many biblical figures including David and Elijah experienced deep despair. Second, seeking professional help is important: counselors, therapists, medication when necessary. God works through medical professionals. Third, maintain spiritual disciplines even when difficult: read lament psalms, simple prayers, worship music. Don't expect immediate fix but stay connected to God. Fourth, tell trusted adults: parents, youth pastors, school counselors. Don't suffer in silence. Fifth, remember feelings aren't facts. Depression says 'nothing will get better' but that's a lie. Sixth, if you have self-harm thoughts, immediately seek help. Your life has value, God has plans for your future.",
            "bible_verses": ["Psalm 34:18", "Jeremiah 29:11", "Isaiah 41:10", "2 Corinthians 1:3-4"],
            "discussion_questions": [
                "为什么mental health对基督徒来说也很重要？Why is mental health important for Christians too?",
                "困难时期上帝感觉很遥远，这正常吗？Is it normal for God to feel distant during difficult times?",
                "如何帮助有mental health struggles的朋友？How can you help friends with mental health struggles?"
            ],
            "tags": ["mental-health", "depression", "hope"]
        },
        {
            "title_zh": "性与纯洁：上帝对sexuality的设计",
            "title_en": "Sex & Purity: God's Design for Sexuality",
            "content_zh": "Sexuality是上帝beautiful creation的一部分，但文化给了我们distorted view：过早sexualization、casualness、pornography。上帝的设计更beautiful。首先，sex不是dirty，而是sacred，是上帝给marriage的gift。它表达love、creates intimacy、brings forth life。其次，purity不是outdated concept，而是protection。Sexual intimacy creates powerful bonds；casual sex破坏了这种bond的special nature。第三，struggle with sexual desires是normal。Puberty带来strong urges，这是natural，但需要wise management。第四，pornography特别harmful：it objectifies people、creates unrealistic expectations、can become addictive。如果你struggle，寻求help。第五，set boundaries：避免tempting situations、accountability partners、focus your mind on good things。第六，remember grace：如果你've made mistakes，上帝的forgiveness是complete。Purity可以restored，future不会因past而damaged。",
            "content_en": "Sexuality is part of God's beautiful creation, but culture gives us distorted views: premature sexualization, casualness, pornography. God's design is more beautiful. First, sex isn't dirty but sacred — God's gift to marriage. It expresses love, creates intimacy, brings forth life. Second, purity isn't an outdated concept but protection. Sexual intimacy creates powerful bonds; casual sex destroys this bond's special nature. Third, struggling with sexual desires is normal. Puberty brings strong urges — this is natural but needs wise management. Fourth, pornography is particularly harmful: objectifies people, creates unrealistic expectations, can become addictive. If you struggle, seek help. Fifth, set boundaries: avoid tempting situations, accountability partners, focus your mind on good things. Sixth, remember grace: if you've made mistakes, God's forgiveness is complete. Purity can be restored, future isn't damaged by past.",
            "bible_verses": ["1 Corinthians 6:18-20", "1 Thessalonians 4:3-5", "Matthew 5:8", "1 John 1:9"],
            "discussion_questions": [
                "为什么上帝设计sex只在marriage中？Why did God design sex only for marriage?",
                "如何在sexualized culture中保持purity？How do you maintain purity in a sexualized culture?",
                "sexual mistakes之后如何经历上帝的forgiveness？How do you experience God's forgiveness after sexual mistakes?"
            ],
            "tags": ["sexuality", "purity", "boundaries"]
        },
        {
            "title_zh": "做决定的智慧：在选择中寻求引导",
            "title_en": "Decision-Making Wisdom: Seeking Guidance in Choices",
            "content_zh": "青少年时期要做很多重要决定：朋友、课程、activities、college、career、relationships。每个选择都会影响未来。如何做wise decisions？首先，祷告求wisdom。James说'你们中间若有缺少智慧的，应当求那厚赐与众人也不斥责人的上帝。'其次，搜集information。了解options、consequences、long-term effects。Wisdom需要facts做foundation。第三，寻求council from wise people：parents、mentors、experienced friends。'不先商议，所谋无效；谋士众多，所谋乃成。'第四，考虑biblical principles：这个choice会honor God吗？会help or harm others？会build character还是compromise values？第五，考虑peace factor。上帝的guidance通常带来内心平静，即使path challenging。第六，remember no decision is completely irreversible。即使make mistakes，上帝可以redeem and redirect。",
            "content_en": "Teenage years involve many important decisions: friends, courses, activities, college, career, relationships. Each choice affects the future. How to make wise decisions? First, pray for wisdom. James says 'If any of you lacks wisdom, ask God, who gives generously to all without finding fault.' Second, gather information. Understand options, consequences, long-term effects. Wisdom needs facts as foundation. Third, seek counsel from wise people: parents, mentors, experienced friends. 'Plans fail for lack of counsel, but with many advisers they succeed.' Fourth, consider biblical principles: will this choice honor God? Help or harm others? Build character or compromise values? Fifth, consider the peace factor. God's guidance usually brings inner peace, even if the path is challenging. Sixth, remember no decision is completely irreversible. Even if you make mistakes, God can redeem and redirect.",
            "bible_verses": ["James 1:5", "Proverbs 15:22", "Proverbs 3:5-6", "Romans 8:28"],
            "discussion_questions": [
                "你做重大决定时的process是什么？What's your process for making major decisions?",
                "如何区分自己的想法和上帝的引导？How do you distinguish your own thoughts from God's guidance?",
                "做错决定后如何处理？How do you handle it when you make wrong decisions?"
            ],
            "tags": ["decision-making", "wisdom", "guidance"]
        }
    ]
    
    current_id = start_id
    for entry in growth_entries:
        new_entry = {
            "id": f"youth-{current_id:03d}",
            "section": "growth",
            "category": "成长挑战",
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
    
    # Add growth content
    updated_data, next_id = add_growth_content(data, start_id)
    
    # Save updated data
    with open('data/youth.json', 'w', encoding='utf-8') as f:
        json.dump(updated_data, f, ensure_ascii=False, indent=2)
    
    print(f"Added 10 growth entries. Next ID: youth-{next_id:03d}")
    print(f"Total entries: {len(updated_data)}")

if __name__ == "__main__":
    main()