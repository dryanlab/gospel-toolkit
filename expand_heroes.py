#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
扩充 Gospel App 青少年专区 - Heroes 类别
"""

import json
import os

def load_existing_data():
    """加载现有数据"""
    with open('data/youth.json', 'r', encoding='utf-8') as f:
        return json.load(f)

def create_heroes_content():
    """创建信仰英雄内容"""
    heroes_data = [
        {
            "id": "youth-093",
            "category": "信仰英雄",
            "section": "heroes",
            "title_zh": "马丁·路德 - 改教先锋",
            "title_en": "Martin Luther - Pioneer of Reformation",
            "content_zh": "马丁·路德（1483-1546）是个德国修道士，他改变了整个基督教历史！当时的教会出了很多问题，比如卖赎罪券（花钱买救恩）。路德很生气，在1517年把《九十五条论纲》贴到教堂门上，公开质疑这些错误。他告诉大家：救恩是上帝白白给的礼物，不能用钱买！我们因信称义，不是靠行为。虽然被教皇开除，还差点被处死，但路德没有退缩。他翻译了德文圣经，让普通人都能读懂上帝的话。路德的勇气提醒我们：当真理受到威胁时，我们要勇敢站出来，哪怕全世界都反对我们。有时候一个人坚持真理，就能改变世界！",
            "content_en": "Martin Luther (1483-1546) was a German monk who changed all of Christian history! The church had serious problems back then, like selling indulgences (basically buying salvation with money). Luther got really upset and in 1517, he nailed his 95 Theses to a church door, publicly questioning these errors. He told everyone: salvation is God's free gift - you can't buy it! We're justified by faith, not by works. Even though he was excommunicated and almost executed, Luther didn't back down. He translated the Bible into German so ordinary people could read God's Word. Luther's courage reminds us: when truth is under attack, we need to stand up bravely, even if the whole world is against us. Sometimes one person standing for truth can change the world!",
            "bible_verses": [
                "Romans 1:17",
                "Ephesians 2:8-9",
                "Galatians 2:16"
            ],
            "discussion_questions": [
                "如果你生活在路德的时代，你会支持他吗？为什么？ If you lived in Luther's time, would you have supported him? Why?",
                "今天的教会是否也有需要改革的地方？ Are there areas in today's church that need reform?",
                "你有勇气为真理站立吗，即使代价很大？ Do you have the courage to stand for truth, even when the cost is high?"
            ],
            "tags": [
                "heroes",
                "reformation",
                "courage",
                "truth"
            ]
        },
        {
            "id": "youth-094",
            "category": "信仰英雄",
            "section": "heroes", 
            "title_zh": "约翰·加尔文 - 神学巨匠",
            "title_en": "John Calvin - Theological Giant",
            "content_zh": "约翰·加尔文（1509-1564）是法国改教家，虽然比路德年轻，但影响力一样大！他26岁时写了《基督教要义》，成为改革宗神学的经典。加尔文强调上帝的主权：上帝掌管一切，包括我们的救恩。他教导说，我们得救完全是因为上帝的恩典和拣选，不是因为我们有多好。在日内瓦，加尔文建立了以圣经为中心的教会和社会。他重视教育、关心穷人、建立了日内瓦学院（现在的日内瓦大学）。虽然有人觉得他太严格，但加尔文深深爱上帝，用一生传扬上帝的荣耀。他提醒我们：学习神学不是为了炫耀知识，而是为了更好地认识上帝，过荣耀祂的生活。",
            "content_en": "John Calvin (1509-1564) was a French reformer who, though younger than Luther, had equal impact! At 26, he wrote 'Institutes of the Christian Religion,' which became a classic of Reformed theology. Calvin emphasized God's sovereignty: God controls everything, including our salvation. He taught that we're saved entirely by God's grace and election, not because we're good enough. In Geneva, Calvin established a church and society centered on Scripture. He valued education, cared for the poor, and founded Geneva Academy (now University of Geneva). Though some thought he was too strict, Calvin deeply loved God and spent his life proclaiming God's glory. He reminds us: we study theology not to show off knowledge, but to better know God and live for His glory.",
            "bible_verses": [
                "Ephesians 1:4-5",
                "Romans 8:29-30",
                "1 Corinthians 10:31"
            ],
            "discussion_questions": [
                "上帝的主权对你来说意味着什么？ What does God's sovereignty mean to you?",
                "我们如何平衡学习神学与实际生活？ How do we balance studying theology with practical living?",
                "加尔文注重教育，今天的基督徒如何看待学习？ Calvin valued education - how should Christians view learning today?"
            ],
            "tags": [
                "heroes", 
                "theology",
                "sovereignty",
                "education"
            ]
        },
        {
            "id": "youth-095", 
            "category": "信仰英雄",
            "section": "heroes",
            "title_zh": "威廉·威伯福斯 - 废奴斗士",
            "title_en": "William Wilberforce - Anti-Slavery Crusader", 
            "content_zh": "威廉·威伯福斯（1759-1833）是英国政治家，用一生与奴隶制度斗争！在18-19世纪，奴隶贸易带来巨大利润，很多人支持。但威伯福斯信主后，深信每个人都是按上帝形象造的，奴役他人是严重的罪。他在议会里一次次提出废除奴隶贸易的法案，连续失败了18年！很多人嘲笑他，说他是理想主义者。但威伯福斯没有放弃，他知道这是上帝交给他的使命。1807年，英国终于通过了废除奴隶贸易法。1833年，在威伯福斯去世前三天，英帝国全面废除奴隶制。他的坚持拯救了无数黑人的生命！威伯福斯告诉我们：即使全世界都反对，我们也要为正义而战。",
            "content_en": "William Wilberforce (1759-1833) was a British politician who spent his life fighting slavery! In the 18th-19th centuries, the slave trade was hugely profitable and widely supported. But after becoming a Christian, Wilberforce deeply believed that every person is made in God's image, and enslaving others is a serious sin. He repeatedly introduced bills in Parliament to abolish the slave trade, failing for 18 straight years! Many people mocked him, calling him an idealist. But Wilberforce didn't give up - he knew this was the mission God had given him. In 1807, Britain finally passed the Abolition of the Slave Trade Act. In 1833, just three days before Wilberforce's death, slavery was abolished throughout the British Empire. His persistence saved countless Black lives! Wilberforce shows us: even when the whole world opposes us, we must fight for justice.",
            "bible_verses": [
                "Genesis 1:27",
                "Galatians 3:28", 
                "Micah 6:8"
            ],
            "discussion_questions": [
                "今天还有哪些'奴隶制'需要我们去对抗？ What forms of 'slavery' exist today that we should oppose?",
                "如何在不公义的社会中坚持做对的事？ How can we keep doing right in an unjust society?",
                "基督徒应该如何参与社会正义？ How should Christians engage in social justice?"
            ],
            "tags": [
                "heroes",
                "justice", 
                "perseverance",
                "social reform"
            ]
        },
        {
            "id": "youth-096",
            "category": "信仰英雄", 
            "section": "heroes",
            "title_zh": "戴德生 - 内地会之父",
            "title_en": "Hudson Taylor - Father of China Inland Mission",
            "content_zh": "戴德生（1832-1905）是英国宣教士，被称为'内地会之父'。21岁时他就到中国传教，发现沿海城市已有很多宣教士，但内陆亿万中国人还没听过福音！他决定进入内地，穿中国服装、留中国发型，完全融入中国文化。很多外国人觉得他疯了，但戴德生说：'如果我有一千磅英镑，中国可以全部支取；如果我有一千条性命，决不留下一条不给中国。'他建立了内地会，派遣了800多名宣教士深入中国内地。虽然面对疾病、动乱、亲人离世的痛苦，戴德生从未退缩。他的信心口号是：'神的工作，按神的方法去做，绝不缺少神的供应。'戴德生让我们看到：真正的爱是愿意付出一切代价。",
            "content_en": "Hudson Taylor (1832-1905) was a British missionary called the 'Father of the China Inland Mission.' At 21, he went to China and discovered that while coastal cities had many missionaries, millions in inland China had never heard the Gospel! He decided to go inland, wearing Chinese clothes and hairstyle, fully immersing in Chinese culture. Many foreigners thought he was crazy, but Taylor said: 'If I had a thousand pounds, China should have it all; if I had a thousand lives, China should have them all.' He founded the China Inland Mission, sending over 800 missionaries deep into inland China. Despite facing disease, unrest, and the death of loved ones, Taylor never retreated. His faith motto was: 'God's work, done in God's way, will never lack God's supply.' Taylor shows us: true love is willing to pay any price.",
            "bible_verses": [
                "Matthew 28:19-20", 
                "Romans 10:14-15",
                "Philippians 2:17"
            ],
            "discussion_questions": [
                "什么阻止了你分享福音？ What prevents you from sharing the Gospel?",
                "戴德生为了宣教付出了巨大代价，值得吗？ Taylor paid a huge price for missions - was it worth it?", 
                "今天的年轻人如何参与大使命？ How can young people today participate in the Great Commission?"
            ],
            "tags": [
                "heroes",
                "missions",
                "sacrifice", 
                "cultural adaptation"
            ]
        },
        {
            "id": "youth-097",
            "category": "信仰英雄",
            "section": "heroes",
            "title_zh": "马丁·路德·金 - 民权领袖", 
            "title_en": "Martin Luther King Jr. - Civil Rights Leader",
            "content_zh": "马丁·路德·金博士（1929-1968）是美国民权运动领袖，也是浸信会牧师。在种族隔离的年代，黑人受到严重歧视，但金博士坚信上帝创造的人人平等。他用非暴力抵抗的方式争取民权，组织了蒙哥马利巴士抵制运动。1963年，他在华盛顿发表了著名的《我有一个梦想》演讲，感动了全世界。金博士常说：'黑暗无法驱除黑暗，只有光明可以；仇恨无法驱除仇恨，只有爱可以。'虽然经常被逮捕、威胁，甚至最后被暗杀，但他始终坚持用爱对抗恨，用和平对抗暴力。金博士向我们展示：基督徒应该为正义发声，但要用上帝的方式——爱与和平。",
            "content_en": "Dr. Martin Luther King Jr. (1929-1968) was an American civil rights leader and Baptist minister. During the era of racial segregation, Black people faced serious discrimination, but Dr. King firmly believed in the equality of all people created by God. He used nonviolent resistance to fight for civil rights, organizing the Montgomery Bus Boycott. In 1963, he delivered his famous 'I Have a Dream' speech in Washington, moving the whole world. Dr. King often said: 'Darkness cannot drive out darkness; only light can. Hate cannot drive out hate; only love can.' Though frequently arrested, threatened, and eventually assassinated, he always insisted on meeting hate with love, violence with peace. Dr. King shows us: Christians should speak up for justice, but in God's way - with love and peace.",
            "bible_verses": [
                "Acts 17:26",
                "1 John 4:20-21", 
                "Matthew 5:44"
            ],
            "discussion_questions": [
                "今天还存在哪些形式的种族歧视？ What forms of racial discrimination still exist today?",
                "如何在不公正面前选择爱而不是仇恨？ How can we choose love over hate when facing injustice?",
                "基督徒如何为边缘化群体发声？ How should Christians speak up for marginalized groups?"
            ],
            "tags": [
                "heroes",
                "civil rights",
                "nonviolence",
                "equality"
            ]
        },
        {
            "id": "youth-098",
            "category": "信仰英雄", 
            "section": "heroes",
            "title_zh": "潘霍华 - 殉道神学家",
            "title_en": "Dietrich Bonhoeffer - Martyred Theologian",
            "content_zh": "迪特里希·潘霍华（1906-1945）是德国牧师和神学家，在纳粹时期勇敢反抗希特勒！当德国教会向纳粹屈服时，潘霍华帮助建立了'认信教会'，拒绝反犹太主义。他本来可以在美国安全地教书，但1939年选择回到德国，说：'如果我不和德国人民共同承担这个时代的苦难，我就没有资格参与战后重建工作。'潘霍华写了《门徒的代价》，强调'便宜的恩典'是教会的敌人——真正跟随基督需要付出代价。1943年他因参与反纳粹活动被逮捕，1945年在集中营被处死，年仅39岁。潘霍华告诉我们：有时候做基督徒意味着要反抗邪恶的政府，为真理付出生命的代价。",
            "content_en": "Dietrich Bonhoeffer (1906-1945) was a German pastor and theologian who courageously opposed Hitler during Nazi rule! When the German church surrendered to the Nazis, Bonhoeffer helped establish the 'Confessing Church,' rejecting anti-Semitism. He could have stayed safely teaching in America, but in 1939 chose to return to Germany, saying: 'If I don't share in Germany's suffering during this time, I have no right to participate in reconstruction afterward.' Bonhoeffer wrote 'The Cost of Discipleship,' emphasizing that 'cheap grace' is the enemy of the church - truly following Christ requires paying a price. In 1943 he was arrested for anti-Nazi activities and executed in a concentration camp in 1945, at only 39 years old. Bonhoeffer shows us: sometimes being a Christian means opposing evil government and paying with your life for truth.",
            "bible_verses": [
                "Luke 9:23",
                "Acts 5:29", 
                "Revelation 12:11"
            ],
            "discussion_questions": [
                "什么时候基督徒应该反抗政府？ When should Christians resist government?",
                "潘霍华选择回德国是明智的吗？ Was Bonhoeffer wise to return to Germany?",
                "'便宜的恩典'今天在哪里存在？ Where does 'cheap grace' exist today?"
            ],
            "tags": [
                "heroes",
                "martyrdom", 
                "resistance",
                "costly grace"
            ]
        },
        {
            "id": "youth-099",
            "category": "信仰英雄",
            "section": "heroes", 
            "title_zh": "奥古斯丁 - 恩典博士",
            "title_en": "Augustine - Doctor of Grace",
            "content_zh": "奥古斯丁（354-430）是早期教会最重要的神学家之一！他年轻时生活放荡，追求哲学和享乐，妈妈莫妮卡为他流了无数眼泪，不停为他祷告。32岁时，奥古斯丁在花园里听到小孩唱'拿起来读'，于是打开圣经读罗马书13:13-14，当场被圣灵感动信主！他写了《忏悔录》，坦诚分享自己的罪和神的恩典，成为历史上第一本属灵自传。奥古斯丁强调原罪和恩典的教义，反对伯拉纠异端，影响了后来的改教运动。他的名言'我们的心如不安息在你里面，便不会安宁'激励了无数人。奥古斯丁证明：没有人坏到上帝不能拯救，母亲的祷告有巨大的力量！",
            "content_en": "Augustine (354-430) was one of the most important theologians in the early church! In his youth, he lived wildly, pursuing philosophy and pleasure, while his mother Monica shed countless tears and prayed constantly for him. At 32, Augustine heard a child singing 'take up and read' in a garden, so he opened his Bible to Romans 13:13-14 and was immediately moved by the Holy Spirit to believe! He wrote 'Confessions,' honestly sharing his sins and God's grace, creating history's first spiritual autobiography. Augustine emphasized the doctrines of original sin and grace, opposing the Pelagian heresy and influencing the later Reformation. His famous quote 'Our hearts are restless until they rest in You' has inspired countless people. Augustine proves: no one is too bad for God to save, and a mother's prayers have tremendous power!",
            "bible_verses": [
                "Romans 13:13-14",
                "Ephesians 2:1-5",
                "Psalm 51:5"
            ],
            "discussion_questions": [
                "奥古斯丁从放荡到圣徒的转变给你什么启发？ What does Augustine's transformation from wild living to sainthood teach you?",
                "为什么母亲的祷告如此重要？ Why are a mother's prayers so important?",
                "你如何理解'原罪'的概念？ How do you understand the concept of 'original sin'?"
            ],
            "tags": [
                "heroes", 
                "conversion",
                "grace",
                "prayer"
            ]
        },
        {
            "id": "youth-100",
            "category": "信仰英雄",
            "section": "heroes",
            "title_zh": "约翰·卫斯理 - 循道宗之父", 
            "title_en": "John Wesley - Father of Methodism",
            "content_zh": "约翰·卫斯理（1703-1791）是英国传道人，循道宗（卫理公会）创始人！他从小在敬虔家庭长大，但直到34岁才真正经历重生。1738年5月24日晚上，在伦敦阿尔德斯门街聚会上，听到有人读路德对罗马书的注释，卫斯理说：'我感到心中奇妙地温暖起来。'从此他成为火热的传道人！当时英国教会很冷淡，卫斯理开始在野外布道，走遍英伦三岛传福音。他一生骑马24万英里，讲道4万次，平均每天讲道3次！卫斯理强调个人与上帝的关系、圣洁生活，还关心社会问题，反对奴隶制，帮助穷人。他说：'世界就是我的教区。'卫斯理提醒我们：基督徒要有火热的心和实际的行动！",
            "content_en": "John Wesley (1703-1791) was a British preacher and founder of Methodism! He grew up in a pious family but didn't truly experience new birth until age 34. On the evening of May 24, 1738, at a meeting on Aldersgate Street in London, hearing someone read Luther's commentary on Romans, Wesley said: 'I felt my heart strangely warmed.' From then on he became a fiery preacher! When the English church was cold, Wesley began open-air preaching, traveling throughout Britain sharing the Gospel. In his lifetime he rode 240,000 miles on horseback, preached 40,000 sermons - an average of 3 sermons per day! Wesley emphasized personal relationship with God and holy living, while also caring about social issues, opposing slavery and helping the poor. He said: 'The world is my parish.' Wesley reminds us: Christians need both a warm heart and practical action!",
            "bible_verses": [
                "Romans 1:16",
                "Luke 24:32",
                "James 2:17"
            ],
            "discussion_questions": [
                "什么是'心中奇妙温暖'的体验？ What is the experience of 'heart strangely warmed'?",
                "如何平衡个人信仰与社会关怀？ How do we balance personal faith with social concern?",
                "今天的基督徒如何效法卫斯理的热忱？ How can Christians today imitate Wesley's zeal?"
            ],
            "tags": [
                "heroes",
                "revival",
                "evangelism", 
                "social concern"
            ]
        },
        {
            "id": "youth-101",
            "category": "信仰英雄",
            "section": "heroes",
            "title_zh": "乔治·慕勒 - 信心之父",
            "title_en": "George Müller - Man of Faith", 
            "content_zh": "乔治·慕勒（1805-1898）是德国人，在英国建立孤儿院，被称为'信心之父'！他年轻时是个小偷和赌徒，但信主后生命彻底改变。慕勒在英国布里斯托建立了5个孤儿院，照顾超过1万名孤儿，但他从不募款，只凭祷告仰望上帝供应！有一次孤儿院没有食物，孩子们坐在空桌子前感谢上帝，结果面包师送来新鲜面包，牛奶车又坏在门口！慕勒一生记录了5万个具体的祷告蒙应允，从小事（遗失的钥匙）到大事（几万英镑的需要）。他还支持了许多宣教士，分发了近300万本圣经。慕勒告诉我们：上帝真的听祷告，只要我们凭信心求，没有什么需要是太小或太大的！",
            "content_en": "George Müller (1805-1898) was a German who established orphanages in England and was called the 'Man of Faith'! In his youth he was a thief and gambler, but after believing in Christ his life was completely transformed. Müller built 5 orphanages in Bristol, England, caring for over 10,000 orphans, but he never fundraised - only prayed and trusted God for provision! Once when the orphanage had no food, the children sat at empty tables thanking God, then a baker delivered fresh bread and a milk cart broke down right at their door! Müller recorded 50,000 specific answered prayers throughout his life, from small things (lost keys) to big needs (tens of thousands of pounds). He also supported many missionaries and distributed nearly 3 million Bibles. Müller shows us: God really hears prayer, and when we ask in faith, no need is too small or too big!",
            "bible_verses": [
                "Philippians 4:19",
                "Matthew 7:7-8",
                "Hebrews 11:6"
            ],
            "discussion_questions": [
                "为什么慕勒不募款，只祷告？ Why did Müller only pray instead of fundraising?",
                "你相信今天上帝还会这样供应吗？ Do you believe God still provides this way today?", 
                "如何培养像慕勒一样的信心？ How can we develop faith like Müller's?"
            ],
            "tags": [
                "heroes",
                "faith",
                "prayer",
                "provision"
            ]
        },
        {
            "id": "youth-102",
            "category": "信仰英雄",
            "section": "heroes",
            "title_zh": "大卫·李文斯顿 - 非洲之光",
            "title_en": "David Livingstone - Light of Africa", 
            "content_zh": "大卫·李文斯顿（1813-1873）是苏格兰宣教士和探险家，被称为'非洲之光'！他原本想去中国宣教，但因为鸦片战争只好改去非洲。李文斯顿不只传福音，还是医生、地理学家，致力于消除奴隶贸易。他深入非洲内陆30年，发现了维多利亚瀑布，绘制了非洲地图，为后来的宣教士铺路。虽然面对疾病、部族冲突、妻子去世的痛苦，李文斯顿从未放弃。他说：'我愿意去任何地方，只要是向前走。'1873年，他跪在非洲的小屋里祷告时去世，心脏被埋在非洲，身体运回英国。非洲人说：'他的心留在我们这里。'李文斯顿证明：真正的宣教士不只传道，更要爱当地人民，为他们的福祉献出一切！",
            "content_en": "David Livingstone (1813-1873) was a Scottish missionary and explorer known as the 'Light of Africa'! He originally wanted to go to China as a missionary, but due to the Opium War he went to Africa instead. Livingstone didn't just preach the Gospel - he was also a doctor and geographer, working to eliminate the slave trade. He spent 30 years deep in inland Africa, discovered Victoria Falls, mapped Africa, and paved the way for future missionaries. Despite facing disease, tribal conflicts, and the pain of his wife's death, Livingstone never gave up. He said: 'I am prepared to go anywhere, provided it be forward.' In 1873, he died while praying in a small African hut; his heart was buried in Africa while his body was taken back to England. The Africans said: 'His heart remains with us.' Livingstone proves: true missionaries don't just preach, they love the local people and give everything for their welfare!",
            "bible_verses": [
                "Matthew 28:19",
                "Mark 16:15", 
                "1 Corinthians 9:22"
            ],
            "discussion_questions": [
                "李文斯顿为什么要做医生和探险家，不只做传道人？ Why did Livingstone work as doctor and explorer, not just preacher?",
                "宣教士如何平衡传福音与社会服务？ How do missionaries balance evangelism with social service?",
                "'心留在非洲'对你有什么启发？ What does 'heart remaining in Africa' inspire in you?"
            ],
            "tags": [
                "heroes", 
                "missions",
                "exploration",
                "holistic ministry"
            ]
        },
        {
            "id": "youth-103", 
            "category": "信仰英雄",
            "section": "heroes",
            "title_zh": "王明道 - 中国教会柱石",
            "title_en": "Wang Mingdao - Pillar of Chinese Church",
            "content_zh": "王明道（1900-1991）是中国著名传道人，被誉为'中国教会的柱石'！他生于北京，从小在困苦中长大，但立志做传道人。王明道强调'重生'和'圣洁'，反对当时教会的自由主义神学。他在北京建立了基督徒会堂，坚持完全自立，不接受外国差会资助。抗日战争期间，他拒绝与日本人合作。建国后，他反对'三自'运动，坚持教会独立，因此在1955年被捕，坐了22年监狱！虽然在极大压力下曾短暂妥协，但很快悔改，选择重新入狱。王明道说：'我们的神乃是烈火。'他用一生证明：宁可坐监牢，也不能背叛信仰！他的勇气激励了无数中国基督徒在逼迫中站稳。",
            "content_en": "Wang Mingdao (1900-1991) was a famous Chinese preacher known as the 'Pillar of the Chinese Church'! Born in Beijing, he grew up in hardship but determined to become a preacher. Wang emphasized 'rebirth' and 'holiness,' opposing the liberal theology in churches at that time. He established the Christian Tabernacle in Beijing, insisting on complete independence without foreign mission support. During the Anti-Japanese War, he refused to cooperate with the Japanese. After 1949, he opposed the 'Three-Self' movement and insisted on church independence, so he was arrested in 1955 and imprisoned for 22 years! Though he briefly compromised under extreme pressure, he quickly repented and chose to return to prison. Wang said: 'Our God is a consuming fire.' He proved with his life: better to sit in prison than betray faith! His courage inspired countless Chinese Christians to stand firm under persecution.",
            "bible_verses": [
                "Hebrews 12:29",
                "Acts 5:29",
                "2 Timothy 2:12"
            ],
            "discussion_questions": [
                "王明道选择坐监牢而不妥协，你怎么看？ What do you think of Wang's choice to be imprisoned rather than compromise?",
                "今天的基督徒如何面对信仰与政治的冲突？ How should Christians today handle conflicts between faith and politics?",
                "什么时候应该顺服政府，什么时候应该抗议？ When should we obey government, and when should we resist?"
            ],
            "tags": [
                "heroes",
                "Chinese church",
                "persecution", 
                "integrity"
            ]
        },
        {
            "id": "youth-104",
            "category": "信仰英雄", 
            "section": "heroes",
            "title_zh": "宋尚节 - 中华奋兴家",
            "title_en": "John Sung - Chinese Revivalist",
            "content_zh": "宋尚节（1901-1944）是中国著名奋兴布道家，被称为'中华奋兴家'！他原本是化学博士，在美国拿到学位后却听到上帝呼召要传道。宋尚节烧掉了文凭，全心投入传道工作。他讲道非常有能力，经常用比喻和戏剧化的动作，让听众印象深刻。宋尚节走遍中国各地，也去东南亚华人教会布道，每到一处都带来大复兴！他强调认罪悔改，很多人听道后痛哭流涕，生命彻底改变。虽然只活了43岁，但他15年的传道生涯影响了几十万华人基督徒。宋尚节常说：'我不过是上帝手中的一根火柴，点燃了就要为主发光发热。'他用短暂但炽热的一生告诉我们：不在乎活得多久，而在乎活得有没有意义！",
            "content_en": "John Sung (1901-1944) was a famous Chinese revivalist preacher known as the 'Chinese Revivalist'! He originally earned a PhD in chemistry, but after receiving his degree in America, he heard God's call to preach. Sung burned his diploma and devoted himself wholeheartedly to preaching. His sermons were incredibly powerful, often using analogies and dramatic gestures that left deep impressions on listeners. Sung traveled throughout China and preached in Southeast Asian Chinese churches, bringing great revival wherever he went! He emphasized confession and repentance; many people wept bitterly after hearing him and were completely transformed. Though he only lived 43 years, his 15-year preaching ministry influenced hundreds of thousands of Chinese Christians. Sung often said: 'I'm just a match in God's hand - once lit, I must shine and burn for the Lord.' Through his brief but blazing life, he shows us: it's not about how long you live, but whether your life has meaning!",
            "bible_verses": [
                "2 Timothy 4:2",
                "Acts 2:37",
                "Matthew 5:16"
            ],
            "discussion_questions": [
                "宋尚节放弃博士学位去传道，值得吗？ Was Sung wise to give up his PhD to preach?",
                "什么样的讲道最能感动人心？ What kind of preaching most touches people's hearts?",
                "如何像宋尚节一样为主'发光发热'？ How can we 'shine and burn' for the Lord like Sung?"
            ],
            "tags": [
                "heroes",
                "revival", 
                "preaching",
                "sacrifice"
            ]
        },
        {
            "id": "youth-105",
            "category": "信仰英雄",
            "section": "heroes", 
            "title_zh": "倪柝声 - 地方教会创始人",
            "title_en": "Watchman Nee - Founder of Local Church Movement",
            "content_zh": "倪柝声（1903-1972）是中国教会领袖，地方教会（聚会所）创始人！他从小聪明好学，17岁信主后开始热心传道。倪柝声强调教会的'地方性'，认为每个地方只应该有一个教会，不应该有宗派分裂。他写了很多属灵著作，《正常的基督徒生活》、《属灵人》等至今仍广受欢迎。倪柝声重视信徒的属灵生命，教导'魂与灵'的分别，强调十字架的功课和基督的内住。1952年他被政府逮捕，在监狱中度过最后20年。虽然长期被监禁，但他从未背叛信仰。去世时，狱友在他枕头下发现纸条：'基督是神的儿子，为人赎罪而死，三日复活，这是宇宙间最大的事实。我信基督而死。倪柝声。'他的坚持激励了无数中国基督徒！",
            "content_en": "Watchman Nee (1903-1972) was a Chinese church leader and founder of the Local Church movement! He was bright from childhood, and after believing at 17, began preaching enthusiastically. Nee emphasized church 'locality,' believing there should be only one church per location without denominational divisions. He wrote many spiritual books; 'The Normal Christian Life' and 'The Spiritual Man' remain popular today. Nee valued believers' spiritual life, teaching the distinction between 'soul and spirit' and emphasizing the lesson of the cross and Christ's indwelling. In 1952 he was arrested by the government and spent his last 20 years in prison. Though imprisoned long-term, he never betrayed his faith. When he died, fellow inmates found a note under his pillow: 'Christ is the Son of God who died for the redemption of sinners and resurrected after three days. This is the most important fact in the universe. I believe in Christ unto death. Watchman Nee.' His perseverance inspired countless Chinese Christians!",
            "bible_verses": [
                "Hebrews 4:12",
                "Galatians 2:20",
                "2 Timothy 4:7"
            ],
            "discussion_questions": [
                "倪柝声对教会'地方性'的观点你怎么看？ What do you think of Nee's view on church 'locality'?",
                "他在监狱中20年还坚持信仰说明什么？ What does his 20-year faithfulness in prison show?",
                "今天的基督徒如何学习他的属灵功课？ How can Christians today learn from his spiritual lessons?"
            ],
            "tags": [
                "heroes",
                "Chinese church",
                "persecution",
                "spirituality"
            ]
        },
        {
            "id": "youth-106",
            "category": "信仰英雄",
            "section": "heroes", 
            "title_zh": "苏格兰殉道者 - 为信仰而死",
            "title_en": "Scottish Martyrs - Dying for Faith",
            "content_zh": "在16-17世纪的苏格兰，许多基督徒为了保卫改革宗信仰而殉道！当时英格兰国王想要控制苏格兰教会，强迫他们接受主教制度和英式礼仪，但许多苏格兰人坚持长老制和简朴敬拜。1638年，无数苏格兰人签署了《全国誓约》，宣誓保卫真正的信仰。政府开始残酷镇压，这就是'杀戮时代'（1680-1688）。很多信徒在荒野中秘密聚会，被称为'野战聚会'。政府军追捕他们，发现后就处死。18岁的玛格丽特·威尔逊和13岁的玛格丽特·麦克拉克伦因为拒绝承认国王是教会元首，被绑在柱子上，潮水涨起时淹死。她们临死前还在唱赞美诗！这些殉道者提醒我们：有些原则比生命更重要，真理值得我们付出一切代价！",
            "content_en": "In 16th-17th century Scotland, many Christians died as martyrs defending Reformed faith! The English kings wanted to control the Scottish church, forcing them to accept episcopacy and Anglican liturgy, but many Scots insisted on presbyterianism and simple worship. In 1638, countless Scots signed the National Covenant, vowing to defend true faith. The government began brutal suppression in what's called the 'Killing Times' (1680-1688). Many believers held secret meetings in the wilderness, called 'conventicles.' Government troops hunted them down and executed those caught. Margaret Wilson, 18, and Margaret McLauchlan, 13, were tied to stakes and drowned by rising tide for refusing to acknowledge the king as head of the church. Even as they died, they sang hymns! These martyrs remind us: some principles are more important than life, and truth is worth paying any price!",
            "bible_verses": [
                "Revelation 12:11",
                "Matthew 10:28",
                "Acts 7:59-60"
            ],
            "discussion_questions": [
                "为什么苏格兰人宁死也不接受主教制？ Why did Scots prefer death over accepting episcopacy?",
                "你认为有什么信仰原则值得殉道？ What faith principles do you think are worth dying for?",
                "今天的基督徒如何纪念这些殉道者？ How should Christians today commemorate these martyrs?"
            ],
            "tags": [
                "heroes",
                "martyrdom", 
                "Scotland",
                "religious freedom"
            ]
        },
        {
            "id": "youth-107",
            "category": "信仰英雄",
            "section": "heroes",
            "title_zh": "早期教会殉道者 - 血染的见证",
            "title_en": "Early Church Martyrs - Blood-Stained Witnesses", 
            "content_zh": "早期教会的殉道者们用鲜血为基督作见证！司提反是第一个殉道者，被乱石打死时还为仇敌祷告。罗马皇帝尼禄残酷迫害基督徒，把他们钉十字架、喂狮子、做成火把照明！但基督徒们宁死不屈。青年殉道者波利卡普86岁时被烧死，他说：'86年来基督从未亏待我，我怎能亵渎拯救我的王？'14岁的阿格尼丝被斩首前说：'我在这世界是客旅，但在天国是公主。'布兰迪娜（女奴）在斗兽场被折磨整天，反复说：'我是基督徒，我们无恶行。'她的勇敢连刽子手都震撼！这些殉道者的血成了教会的种子，他们的勇气吸引更多人信主。殉道者们告诉我们：当我们真正知道天国的价值，地上的苦难就算不得什么了！",
            "content_en": "Early church martyrs witnessed for Christ with their blood! Stephen was the first martyr, praying for his enemies even as he was stoned to death. Emperor Nero cruelly persecuted Christians, crucifying them, feeding them to lions, and using them as human torches for lighting! But Christians refused to deny their faith. Young martyr Polycarp said at 86 when about to be burned: 'For 86 years Christ has never wronged me, so how can I blaspheme my Savior King?' 14-year-old Agnes said before being beheaded: 'I am a stranger in this world, but a princess in heaven.' Blandina (a slave girl) was tortured all day in the arena, repeatedly saying: 'I am a Christian; we do no evil.' Her courage shocked even the executioners! The blood of these martyrs became the seed of the church; their courage attracted more people to believe. The martyrs tell us: when we truly know heaven's value, earthly suffering counts for nothing!",
            "bible_verses": [
                "Acts 7:59-60", 
                "Revelation 2:10",
                "Romans 8:18"
            ],
            "discussion_questions": [
                "为什么殉道者们能如此勇敢面对死亡？ Why could martyrs face death so courageously?",
                "他们的见证今天对我们有什么意义？ What meaning does their witness have for us today?",
                "如何在小的试炼中培养殉道者的勇气？ How can we develop martyrs' courage through small trials?"
            ],
            "tags": [
                "heroes",
                "martyrdom",
                "early church", 
                "persecution"
            ]
        }
    ]
    
    return heroes_data

def update_youth_json():
    """更新youth.json文件"""
    print("正在加载现有数据...")
    existing_data = load_existing_data()
    
    print("正在生成Heroes类别内容...")
    heroes_data = create_heroes_content()
    
    # 合并数据
    updated_data = existing_data + heroes_data
    
    # 保存更新后的数据
    print("正在保存更新后的数据...")
    with open('data/youth.json', 'w', encoding='utf-8') as f:
        json.dump(updated_data, f, ensure_ascii=False, indent=2)
    
    # 统计信息
    categories = {}
    for item in updated_data:
        section = item['section']
        categories[section] = categories.get(section, 0) + 1
    
    print(f"\n✅ 更新完成！")
    print(f"总条数: {len(updated_data)}")
    print("各类别分布:")
    for section, count in sorted(categories.items()):
        print(f"  {section}: {count}")
    
    return updated_data

def copy_to_web_and_build():
    """复制到web目录并build"""
    import shutil
    
    print("\n正在复制到web/src/data/youth.json...")
    shutil.copy('data/youth.json', 'web/src/data/youth.json')
    print("✅ 复制完成！")
    
    print("\n正在测试build...")
    os.chdir('web')
    result = os.system('npx next build')
    
    if result == 0:
        print("✅ Build成功！")
    else:
        print("❌ Build失败，请检查错误！")
        return False
    
    os.chdir('..')
    return True

if __name__ == "__main__":
    # 更新数据
    updated_data = update_youth_json()
    
    # 复制到web并build
    if copy_to_web_and_build():
        print(f"\n🎉 任务完成！Gospel App 青少年专区现在有 {len(updated_data)} 条内容")
        print("📝 已添加15条Heroes类别内容")
        print("🚀 Build测试通过，准备就绪（但未部署）")
    else:
        print("\n⚠️ Build测试失败，请检查代码")