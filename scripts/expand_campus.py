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

def add_campus_content(data, start_id):
    """Add 9 campus entries"""
    
    campus_entries = [
        {
            "title_zh": "面对嘲笑：如何回应信仰质疑",
            "title_en": "Facing Mockery: Responding to Faith Challenges",
            "content_zh": "在学校里因为信仰被嘲笑是很痛苦的经历。同学可能说你'迷信'、'落伍'，或者问一些故意刁难的问题。首先，记住耶稣也被嘲笑过，使徒们也被人认为是'疯子'。这证明你在走正确的路。其次，不要用愤怒回应愤怒，而要'用温柔敬畏的心回答各人'。有时候沉默是最好的回应，有时候可以简单说明你的立场。第三，找到支持你的朋友和导师，不要独自承受。第四，为嘲笑你的人祷告，这能软化你的心。第五，装备自己，学习如何回答常见问题。记住，他们嘲笑的不是你，而是你所信的。要为能够分享基督的苦难而感恩，但也要智慧地选择战斗。不是每个辩论都值得参与。",
            "content_en": "Being mocked at school for your faith is painful. Classmates might call you 'superstitious,' 'backward,' or ask deliberately difficult questions. First, remember Jesus was also mocked, and the apostles were thought 'crazy.' This proves you're on the right path. Second, don't respond to anger with anger, but 'answer each person with gentleness and respect.' Sometimes silence is the best response, sometimes you can simply state your position. Third, find supportive friends and mentors — don't bear this alone. Fourth, pray for those who mock you; this will soften your heart. Fifth, equip yourself to answer common questions. Remember, they're not mocking you but what you believe. Be grateful to share in Christ's sufferings, but also wisely choose your battles. Not every argument is worth engaging.",
            "bible_verses": ["1 Peter 3:15", "Matthew 5:11-12", "2 Timothy 3:12", "Luke 6:22"],
            "discussion_questions": [
                "你曾经因为信仰被嘲笑过吗？感觉如何？Have you been mocked for your faith? How did it feel?",
                "什么时候应该为信仰'战斗'，什么时候应该沉默？When should you 'fight' for faith, when stay silent?",
                "如何为嘲笑你的人祷告？How do you pray for those who mock you?"
            ],
            "tags": ["persecution", "campus-life", "apologetics"]
        },
        {
            "title_zh": "考试压力：在学业中信靠上帝",
            "title_en": "Test Pressure: Trusting God in Academics",
            "content_zh": "考试压力是青少年生活的重要部分，特别是面对升学考试。作为基督徒，你有独特的优势：知道自己的身份不是由成绩决定的。首先，做好你的本分：认真学习，合理规划，寻求帮助。上帝要我们尽力，但不要为此焦虑。'应当一无挂虑，只要凡事藉着祷告、祈求和感谢，将你们所要的告诉上帝。'其次，记住上帝对你的计划比你想象的更美好。一次考试失败不会毁掉你的人生。第三，在压力中更加依靠上帝。祷告不是迷信，而是与造物主对话。第四，帮助其他同学，分享你平安的秘诀。第五，保持属灵操练，不要因为学习忙就忽略了读经祷告。平衡很重要：努力学习，但不要让学业成为偶像。",
            "content_en": "Test pressure is a major part of teenage life, especially facing entrance exams. As a Christian, you have unique advantages: knowing your identity isn't determined by grades. First, do your part: study hard, plan wisely, seek help. God wants our best effort but not anxiety. 'Be anxious for nothing, but in everything by prayer and supplication with thanksgiving, let your requests be made known to God.' Second, remember God's plan for you is better than you imagine. One test failure won't ruin your life. Third, depend more on God during pressure. Prayer isn't superstition but conversation with the Creator. Fourth, help other classmates, share your secret of peace. Fifth, maintain spiritual disciplines — don't neglect Bible reading and prayer because you're busy studying. Balance is key: work hard but don't make academics an idol.",
            "bible_verses": ["Philippians 4:6-7", "Proverbs 16:3", "Matthew 6:26", "Colossians 3:23"],
            "discussion_questions": [
                "学业压力如何影响你的信仰生活？How does academic pressure affect your faith life?",
                "如何平衡努力学习与信靠上帝？How do you balance hard work and trusting God?",
                "你会为考试祷告吗？如何祷告？Do you pray about exams? How do you pray?"
            ],
            "tags": ["stress", "academic-pressure", "trust"]
        },
        {
            "title_zh": "社交媒体智慧：数字时代的见证",
            "title_en": "Social Media Wisdom: Digital Age Witness",
            "content_zh": "社交媒体是现代青少年生活的重要部分，也是见证的新平台。但它也充满陷阱。首先，内容要荣耀上帝。发布前问自己：这会让人更认识基督吗？避免抱怨、炫耀、传谣言。'污秽的言语一句不可出口，只要随事说造就人的好话。'其次，时间管理。社交媒体容易成瘾，偷走我们与上帝和真实人际关系的时间。设定界限，定期'禁食'。第三，不要与网络上的争论，特别是关于政治或争议话题。更多时候应该私下对话而不是公开辩论。第四，用它传播正能量：分享恩典见证、鼓励话语、有意义的内容。第五，保护隐私，不要分享过于个人的信息。记住：网络留痕永远存在，今天发的内容十年后还可能被看到。",
            "content_en": "Social media is a huge part of modern teenage life and a new platform for witness, but it's full of traps. First, content should glorify God. Ask before posting: will this help people know Christ better? Avoid complaining, showing off, spreading rumors. 'Let no unwholesome word proceed from your mouth, but only what builds others up.' Second, time management. Social media is addictive, stealing time from God and real relationships. Set boundaries, regularly 'fast.' Third, don't engage in online arguments, especially politics or controversial topics. More often we should have private conversations rather than public debates. Fourth, use it to spread positivity: share grace testimonies, encouraging words, meaningful content. Fifth, protect privacy, don't share overly personal information. Remember: the internet leaves permanent traces — what you post today might be seen ten years from now.",
            "bible_verses": ["Ephesians 4:29", "1 Corinthians 10:31", "Proverbs 27:14", "Matthew 5:16"],
            "discussion_questions": [
                "社交媒体如何影响你的自我形象？How does social media affect your self-image?",
                "在网上分享信仰时你有什么顾虑？What concerns do you have sharing faith online?",
                "如何在网络上做光做盐？How can you be salt and light online?"
            ],
            "tags": ["social-media", "digital-witness", "boundaries"]
        },
        {
            "title_zh": "选择朋友：属灵影响力",
            "title_en": "Choosing Friends: Spiritual Influence",
            "content_zh": "朋友的影响力巨大，特别是在青少年时期。圣经说'滥交是败坏善行'，但也说要'爱众人'。如何平衡？首先，区分密友和普通朋友。密友应该是支持你信仰成长的人，即使不是基督徒，至少要尊重你的信仰。普通朋友可以包括各种人，这是传福音的机会。其次，不要为了受欢迎而妥协原则。真正的朋友会接受真实的你，包括你的信仰。第三，主动寻找基督徒朋友，参加青年聚会、查经小组。属灵友谊会帮助你成长。第四，对非基督徒朋友要有智慧：参与健康的活动，避免试探的场合，做好见证。第五，记住你也在影响别人。问问自己：我是帮助朋友更接近上帝，还是更远离上帝？",
            "content_en": "Friends have huge influence, especially during teenage years. The Bible says 'bad company corrupts good character,' but also to 'love everyone.' How to balance? First, distinguish close friends from casual friends. Close friends should support your faith growth — even if not Christians, they should at least respect your faith. Casual friends can include various people as evangelism opportunities. Second, don't compromise principles to be popular. Real friends accept the real you, including your faith. Third, actively seek Christian friends — join youth groups, Bible studies. Spiritual friendships help you grow. Fourth, be wise with non-Christian friends: participate in healthy activities, avoid tempting situations, be a good witness. Fifth, remember you're also influencing others. Ask yourself: am I helping friends move closer to or further from God?",
            "bible_verses": ["1 Corinthians 15:33", "Proverbs 27:17", "John 13:35", "2 Corinthians 6:14"],
            "discussion_questions": [
                "你的密友支持还是阻碍你的信仰？Do your close friends support or hinder your faith?",
                "如何与非基督徒朋友保持友谊又不妥协信仰？How do you maintain friendships with non-Christians without compromising faith?",
                "你觉得自己对朋友有什么属灵影响？What spiritual influence do you think you have on friends?"
            ],
            "tags": ["friendship", "influence", "evangelism"]
        },
        {
            "title_zh": "校园霸凌：在困难中寻求帮助",
            "title_en": "School Bullying: Seeking Help in Difficulties",
            "content_zh": "校园霸凌是严重问题，不仅是身体伤害，更是情感创伤。如果你正在经历霸凌，首先知道：这不是你的错，上帝爱你，祂看见你的痛苦。其次，立即寻求帮助：告诉父母、老师、学校counselor。不要试图独自承担，上帝通过人来帮助我们。第三，为伤害你的人祷告，这不意味着要继续被欺负，而是为了保护你的心不被仇恨腐蚀。第四，记录事件的时间、地点、witnesses，这对解决问题很重要。第五，如果你看到别人被霸凌，要勇敢站出来或寻求帮助。沉默有时候就是帮凶。第六，记住你的身份：你是上帝的儿女，有无限的价值。霸凌者的话不能定义你。如果有自杀想法，立即寻求专业帮助。",
            "content_en": "School bullying is a serious problem, not just physical harm but emotional trauma. If you're being bullied, first know: it's not your fault, God loves you and sees your pain. Second, immediately seek help: tell parents, teachers, school counselors. Don't try to handle it alone — God helps us through people. Third, pray for those hurting you; this doesn't mean continue being bullied, but protects your heart from being corroded by hatred. Fourth, document incidents — time, place, witnesses — this is important for resolution. Fifth, if you see others being bullied, bravely step up or seek help. Sometimes silence makes us accomplices. Sixth, remember your identity: you're God's child with infinite value. Bullies' words can't define you. If you have suicidal thoughts, immediately seek professional help.",
            "bible_verses": ["Psalm 34:18", "Isaiah 41:10", "Romans 8:38-39", "Proverbs 31:8-9"],
            "discussion_questions": [
                "为什么校园霸凌这么普遍？Why is school bullying so common?",
                "如何帮助被霸凌的同学？How can you help bullied classmates?",
                "面对霸凌时，饶恕和保护自己如何平衡？How do you balance forgiveness and self-protection when facing bullying?"
            ],
            "tags": ["bullying", "help-seeking", "identity"]
        },
        {
            "title_zh": "向同学传福音：自然的见证",
            "title_en": "Evangelizing Classmates: Natural Witness",
            "content_zh": "向同学传福音常常让人紧张，怕被拒绝或损害友谊。但福音本来就是好消息，应该自然地分享。首先，最好的传福音是活出基督的样式：诚实、善良、有爱心、可靠。让人好奇你为什么不同。其次，建立真诚的友谊。不要把人只看作'传福音对象'，要真心关心他们。第三，分享而不是争论。说出上帝在你生命中的作为，个人见证比神学辩论更有力。第四，邀请参加活动：青年聚会、圣诞晚会、summer camp等。在轻松环境中接触福音更容易。第五，为他们祷告。圣灵的工作比你的口才更重要。第六，不要强迫或施压。播种、浇灌是我们的责任，叫它生长的是上帝。接受拒绝，继续做朋友。有些人需要很长时间才会相信，要有耐心。",
            "content_en": "Evangelizing classmates often makes people nervous, fearing rejection or damaged friendships. But the Gospel is good news and should be shared naturally. First, the best evangelism is living like Christ: honest, kind, loving, reliable. Make people curious why you're different. Second, build genuine friendships. Don't see people only as 'evangelism targets' but truly care for them. Third, share rather than argue. Tell what God has done in your life — personal testimony is more powerful than theological debates. Fourth, invite to activities: youth groups, Christmas parties, summer camps. It's easier to encounter the Gospel in relaxed environments. Fifth, pray for them. The Holy Spirit's work is more important than your eloquence. Sixth, don't force or pressure. Planting and watering is our responsibility, making it grow is God's. Accept rejection, continue being friends. Some people need a long time to believe — be patient.",
            "bible_verses": ["1 Peter 3:15", "Matthew 5:16", "1 Corinthians 3:6", "Colossians 4:5-6"],
            "discussion_questions": [
                "你觉得向同学传福音最大的障碍是什么？What do you think is the biggest obstacle to evangelizing classmates?",
                "分享见证和争论教义有什么区别？What's the difference between sharing testimony and arguing doctrine?",
                "如何在不伤害友谊的前提下分享信仰？How do you share faith without damaging friendships?"
            ],
            "tags": ["evangelism", "testimony", "friendship-evangelism"]
        },
        {
            "title_zh": "时间管理：在忙碌中亲近上帝",
            "title_en": "Time Management: Drawing Near to God When Busy",
            "content_zh": "青少年生活很忙：学校、作业、考试、课外活动、社交...很容易忽略与上帝的关系。但忙碌不是借口，而是更需要上帝的时候。首先，优先次序：上帝第一，但这不意味着每天必须花两小时读经祷告。质量比数量重要。每天即使15分钟与上帝独处也比一周一次长时间更好。其次，利用碎片时间：走路时听赞美诗，等车时默想经文，睡前感恩祷告。第三，计划安息：即使很忙，也要有定期休息和敬拜的时间。上帝命令安息日不是为了限制我们，而是保护我们。第四，在学习中寻求上帝：做作业前祷告求智慧，考试前求平安，学习时思考上帝的创造。第五，与其他基督徒一起学习，互相鼓励，分享代祷。",
            "content_en": "Teenage life is busy: school, homework, tests, extracurriculars, socializing... It's easy to neglect relationship with God. But busyness isn't an excuse — it's when we need God most. First, priorities: God first, but this doesn't mean spending two hours daily in Bible study and prayer. Quality matters more than quantity. Even 15 minutes daily with God is better than once-weekly long sessions. Second, use fragments of time: listen to praise music while walking, meditate on verses while waiting, pray gratefully before sleep. Third, plan rest: even when busy, have regular times for rest and worship. God commanded the Sabbath not to restrict but protect us. Fourth, seek God in studies: pray for wisdom before homework, peace before tests, think about God's creation while learning. Fifth, study with other Christians, encourage each other, share prayer requests.",
            "bible_verses": ["Psalm 46:10", "Matthew 6:33", "Ecclesiastes 3:1", "Mark 6:31"],
            "discussion_questions": [
                "忙碌时你如何保持与上帝的关系？How do you maintain relationship with God when busy?",
                "什么活动经常挤占你的灵修时间？What activities often crowd out your devotional time?",
                "如何在学习中经历上帝的同在？How do you experience God's presence while studying?"
            ],
            "tags": ["time-management", "devotion", "priorities"]
        },
        {
            "title_zh": "学业信仰平衡：全人的成长",
            "title_en": "Balancing Studies and Faith: Whole Person Growth",
            "content_zh": "有些人认为信仰和学业是冲突的，其实不然。上帝要我们在各方面都成长，包括智力。'你要专心仰赖耶和华，不可依靠自己的聪明。'这不是反智主义，而是谦卑的学习态度。首先，学习是对上帝创造的探索，无论数学、科学、文学、历史，都能显明上帝的荣耀和智慧。其次，excellence不是perfectionism。上帝要我们尽力，但不是要我们完美。好成绩是恩典，坏成绩不是咒诅。第三，学习技能也是服侍的装备。未来无论做什么工作，都可以荣耀上帝、服侍他人。第四，在困难学科中学习坚持，在容易学科中学习谦卑。品格的培养比知识的积累更重要。第五，用所学的知识帮助别人，分享上帝给你的恩赐。",
            "content_en": "Some think faith and studies conflict — not true. God wants us to grow in all areas, including intellectually. 'Trust in the Lord with all your heart and do not depend on your own understanding.' This isn't anti-intellectualism but a humble learning attitude. First, learning explores God's creation — whether math, science, literature, history, all can show God's glory and wisdom. Second, excellence isn't perfectionism. God wants our best effort but not perfection. Good grades are grace, bad grades aren't curses. Third, learning skills equips us for service. Whatever career you pursue can glorify God and serve others. Fourth, learn perseverance in difficult subjects, humility in easy ones. Character development matters more than knowledge accumulation. Fifth, use your learning to help others, share the gifts God gave you.",
            "bible_verses": ["Proverbs 3:5-6", "1 Corinthians 10:31", "Daniel 1:17", "Luke 2:52"],
            "discussion_questions": [
                "你觉得哪些学科最能显明上帝的荣耀？Which subjects most reveal God's glory to you?",
                "如何在学业竞争中保持基督徒品格？How do you maintain Christian character in academic competition?",
                "学习困难时你如何寻求上帝的帮助？How do you seek God's help when struggling with studies?"
            ],
            "tags": ["academic-faith-balance", "whole-person-growth", "excellence"]
        },
        {
            "title_zh": "毕业方向：寻求上帝的引导",
            "title_en": "Graduation Direction: Seeking God's Guidance",
            "content_zh": "选专业、选学校、选career path是人生重大决定，会影响未来很多年。作为基督徒，你有特殊优势：可以寻求创造主的引导。首先，祷告求智慧，但也要行动。上帝通常在我们走路时引导方向，而不是在我们停止时显明整个地图。其次，了解自己：恩赐、兴趣、性格、passion。上帝给每个人不同的设计，找到最符合你设计的道路。第三，咨询智慧的advisors：父母、老师、pastors、学长学姐。'不先商议，所谋无效；谋士众多，所谋乃成。'第四，考虑如何服侍上帝和他人。不一定要当传道人，任何职业都可以荣耀上帝。第五，peace是重要指标。上帝的引导通常伴随着内心的平安，即使道路充满挑战。第六，保持开放：计划可能会改变，上帝的道路高过我们的道路。",
            "content_en": "Choosing majors, schools, career paths are major life decisions affecting many years ahead. As Christians, you have special advantage: seeking the Creator's guidance. First, pray for wisdom but also take action. God usually guides our direction while we're walking, not reveals the entire map while we're stopped. Second, understand yourself: gifts, interests, personality, passions. God designed everyone differently — find the path that best fits your design. Third, consult wise advisors: parents, teachers, pastors, older students. 'Plans fail for lack of counsel, but with many advisers they succeed.' Fourth, consider how to serve God and others. You don't have to become a pastor — any profession can glorify God. Fifth, peace is an important indicator. God's guidance usually comes with inner peace, even if the path is challenging. Sixth, stay open: plans might change, God's ways are higher than ours.",
            "bible_verses": ["Proverbs 16:9", "Jeremiah 29:11", "Proverbs 15:22", "Isaiah 55:8-9"],
            "discussion_questions": [
                "你对未来有什么梦想？如何为此祷告？What dreams do you have for the future? How do you pray about them?",
                "如何区分自己的想法和上帝的引导？How do you distinguish your own thoughts from God's guidance?",
                "什么factors在你的decision-making中最重要？What factors are most important in your decision-making?"
            ],
            "tags": ["guidance", "career-planning", "god's-will"]
        }
    ]
    
    current_id = start_id
    for entry in campus_entries:
        new_entry = {
            "id": f"youth-{current_id:03d}",
            "section": "campus",
            "category": "校园生活",
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
    
    # Add campus content
    updated_data, next_id = add_campus_content(data, start_id)
    
    # Save updated data
    with open('data/youth.json', 'w', encoding='utf-8') as f:
        json.dump(updated_data, f, ensure_ascii=False, indent=2)
    
    print(f"Added 9 campus entries. Next ID: youth-{next_id:03d}")
    print(f"Total entries: {len(updated_data)}")

if __name__ == "__main__":
    main()