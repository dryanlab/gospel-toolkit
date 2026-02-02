# -*- coding: utf-8 -*-
"""Add third objections to articles that only have 2."""
import json

path = 'apologetics.json'
with open(path, 'r', encoding='utf-8') as f:
    data = json.load(f)

third_objections = {
    "ath-004": {
        "objection_zh": "精细调节可能只是观察选择效应——如果宇宙不适合观察者，就不会有人观察。",
        "objection_en": "Fine-tuning may simply be an observational selection effect — no observers in non-life-permitting universes.",
        "response_zh": "观察选择效应并不解释精细调节，只是重述了它。约翰·莱斯利的行刑队类比很有力：如果50名神枪手全部射偏你活了下来，说'如果他们没射偏我就不会在这里'虽然正确，但没有解释为什么他们全部射偏。你仍然需要解释——要么有人安排（设计），要么是极不可能的巧合。同理，'如果宇宙不适合生命我们就不会在这里'并不能解释为什么宇宙恰好如此精确地适合生命。精细调节的问题不是关于我们是否存在，而是关于为什么存在条件如此精确。",
        "response_en": "The observational selection effect doesn't explain fine-tuning; it merely restates it. John Leslie's firing squad analogy is compelling: if 50 marksmen all miss and you survive, saying 'if they hadn't missed I wouldn't be here thinking about it' is true but doesn't explain WHY they all missed. You need an explanation — either someone arranged it (design) or astronomically unlikely coincidence. Similarly, 'if the universe weren't life-permitting we wouldn't be here' doesn't explain why the universe happens to be so precisely tuned. The question isn't about whether we exist, but why the conditions for existence are so extraordinarily precise."
    },
    "islam-001": {
        "objection_zh": "也许篡改发生在穆罕默德之后，而不是之前。",
        "objection_en": "Perhaps the corruption happened after Muhammad, not before.",
        "response_zh": "这个说法缺乏任何历史证据。我们拥有的圣经手稿远早于穆罕默德时代——死海古卷（公元前2世纪至公元1世纪）、抄本（如4世纪的西奈抄本和梵蒂冈抄本）——它们与我们今天的圣经在文本上基本一致。如果篡改发生在穆罕默德之后，需要一个不可能的全球性阴谋：同时修改分散在从英国到埃塞俄比亚、从叙利亚到印度的数千份手稿，而且不留下任何证据。这比复活本身更难以置信。",
        "response_en": "This claim lacks any historical evidence. Biblical manuscripts far predate Muhammad — the Dead Sea Scrolls (2nd century BC to 1st century AD), codices like the 4th-century Codex Sinaiticus and Vaticanus — are textually consistent with today's Bible. Post-Muhammad corruption would require an impossible global conspiracy: simultaneously altering thousands of manuscripts scattered from Britain to Ethiopia, Syria to India, leaving no evidence. This is more incredible than the resurrection itself."
    },
    "islam-003": {
        "objection_zh": "上帝是全能的，为什么不能直接赦免罪而不需要牺牲？",
        "objection_en": "God is omnipotent — why can't He simply forgive sin without sacrifice?",
        "response_zh": "这个问题低估了上帝公义的严肃性。如果一个法官对严重罪行说'我赦免你，不需要任何代价'，这不是仁慈，而是不公义。上帝既是慈爱的也是公义的。十字架同时满足了这两个属性：上帝的公义通过刑罚得到满足，上帝的慈爱通过祂自己承受刑罚得以彰显。正如罗马书3:26所说，上帝'自己为义，也称信耶稣的人为义'。恩典不是忽视公义，而是上帝亲自满足了公义的要求。",
        "response_en": "This underestimates the seriousness of God's justice. If a judge tells a serious criminal 'I forgive you, no penalty needed,' that's not mercy but injustice. God is both loving and just. The Cross satisfies both simultaneously: God's justice is met through punishment, God's love is displayed through bearing that punishment Himself. As Romans 3:26 states, God is 'just and the justifier of the one who has faith in Jesus.' Grace doesn't ignore justice — God Himself satisfied justice's demands."
    },
    "buddhism-001": {
        "objection_zh": "基督教的上帝也无法被感官证实，与佛教的非人格实在一样不可验证。",
        "objection_en": "The Christian God also cannot be verified by the senses, just as unverifiable as Buddhism's impersonal reality.",
        "response_zh": "基督教的独特之处在于上帝主动向人启示自己。道成肉身（约翰福音1:14）意味着上帝进入了可感知的历史——耶稣基督是可以被看见、听见、触摸的（约翰一书1:1）。复活提供了可验证的历史证据。佛教的终极实在（涅槃/空性）在原则上不可被经验验证，而基督教的上帝选择在历史中以可验证的方式行动。此外，一位有位格的上帝可以建立关系、回应祷告、改变生命——这些都是可以在经验中观察到的。",
        "response_en": "Christianity's uniqueness is that God actively reveals Himself. The Incarnation (John 1:14) means God entered perceptible history — Jesus Christ could be seen, heard, and touched (1 John 1:1). The resurrection provides verifiable historical evidence. Buddhism's ultimate reality (Nirvana/Sunyata) is in principle empirically unverifiable, while Christianity's God chose to act within history in verifiable ways. Furthermore, a personal God can build relationships, answer prayer, and transform lives — all observable in experience."
    },
    "cults-001": {
        "objection_zh": "耶和华见证人也做了很多善事——探访病人、传讲圣经，怎么能说他们是异端？",
        "objection_en": "Jehovah's Witnesses do many good things — visiting the sick, preaching the Bible. How can they be called heretical?",
        "response_zh": "善行不能作为教义正确性的检验标准。耶稣在马太福音7:22-23中警告说，有人会奉他的名行许多善事，但他会说'我从来不认识你们'。核心问题不是行为，而是关于基督身份的真理。如果耶稣不是上帝而只是被造的天使长，那么基督教的整个救赎体系就崩溃了——因为只有上帝才能为全人类的罪提供足够的赎价。耶和华见证人否认基督的神性，这不是次要分歧，而是触及了福音的核心。",
        "response_en": "Good deeds cannot serve as a test for doctrinal correctness. Jesus warned in Matthew 7:22-23 that some will do many good deeds in His name, yet He will say 'I never knew you.' The core issue is not behavior but truth about Christ's identity. If Jesus is not God but merely a created archangel, the entire Christian redemption system collapses — because only God can provide sufficient atonement for all humanity's sin. JW's denial of Christ's deity is not a secondary disagreement but strikes at the Gospel's core."
    },
    "cults-002": {
        "objection_zh": "摩门教也信耶稣基督，教义上的差异只是不同的解读。",
        "objection_en": "Mormons also believe in Jesus Christ; doctrinal differences are just different interpretations.",
        "response_zh": "名字相同不代表信仰内容相同。摩门教的'耶稣'是灵世界中众多灵子女之一，与撒旦是'灵兄弟'；正统基督教的耶稣是永恒的上帝、万物的创造者。摩门教的'上帝'曾经是另一个星球上的凡人，通过进步成为神；圣经的上帝是从亘古到永远、自有永有的。这不是'不同解读'——这是根本不同的信仰体系使用了相同的词汇。正如使徒保罗警告的'另一个福音'（加拉太书1:8），改变了核心教义就不再是同一个信仰。",
        "response_en": "Same names don't mean same beliefs. Mormonism's 'Jesus' is one of many spirit children in the pre-existence, a 'spirit brother' of Satan; orthodox Christianity's Jesus is the eternal God, Creator of all things. Mormonism's 'God' was once a mortal man on another planet who progressed to godhood; the biblical God is from everlasting to everlasting, self-existent. This isn't a 'different interpretation' — it's a fundamentally different belief system using the same vocabulary. As Paul warned about 'another gospel' (Galatians 1:8), changing core doctrines means it's no longer the same faith."
    },
    "cults-003": {
        "objection_zh": "也许上帝确实可以通过不同的方式再次向人类启示自己。",
        "objection_en": "Perhaps God can indeed reveal Himself to humanity again in different ways.",
        "response_zh": "上帝当然可以向人说话——通过祷告、圣灵的引导、传讲的道。但'新的道成肉身'完全不同于持续的启示。圣经明确教导基督的道成肉身和赎罪是'一次永远'的事件（希伯来书9:28, 10:12）。基督再来的方式也已被清楚启示：不是秘密的再次道成肉身，而是驾云降临，众目要看见他（启示录1:7，使徒行传1:11）。任何声称基督已经秘密来到的说法都直接违背了耶稣自己的警告（马太福音24:23-27）。持续启示和新的道成肉身是完全不同的概念。",
        "response_en": "God certainly can speak to people — through prayer, the Holy Spirit's guidance, preaching. But a 'new incarnation' is entirely different from ongoing revelation. Scripture clearly teaches Christ's incarnation and atonement were 'once for all' events (Hebrews 9:28, 10:12). Christ's return is clearly revealed: not a secret re-incarnation but a visible descent on clouds, every eye seeing Him (Revelation 1:7, Acts 1:11). Any claim that Christ has already come secretly directly contradicts Jesus' own warning (Matthew 24:23-27). Ongoing revelation and a new incarnation are completely different concepts."
    },
    "sec-003": {
        "objection_zh": "基督教对女性的态度一直是压迫性的。",
        "objection_en": "Christianity has always been oppressive toward women.",
        "response_zh": "这是对历史的严重简化。耶稣在第一世纪极端父权制的文化中以革命性的方式对待女性：他公开与女性交谈（约翰福音4章）、有女性门徒（路加福音8:1-3）、让女性成为复活的首批见证人（在当时文化中女性证词不被法庭接受）。早期教会中女性担任重要角色：百基拉是教师，非比是执事。历史上，基督教推动了女性教育、妇女医院的建立和反对杀婴陋习。圣经教导丈夫要'爱妻子，正如基督爱教会'（以弗所书5:25），这在古代世界是革命性的要求——要求丈夫为妻子牺牲自己。",
        "response_en": "This seriously oversimplifies history. Jesus treated women revolutionarily within first-century patriarchal culture: He spoke publicly with women (John 4), had female disciples (Luke 8:1-3), and made women the first resurrection witnesses (when women's testimony was inadmissible in court). Early church women held important roles: Priscilla was a teacher, Phoebe a deacon. Historically, Christianity drove women's education, women's hospitals, and opposition to infanticide. Scripture teaches husbands to 'love your wives as Christ loved the church' (Ephesians 5:25) — a revolutionary demand in the ancient world, requiring husbands to sacrifice themselves for their wives."
    },
    "ath-007": {
        "objection_zh": "给予足够时间，随机过程可以产生任何复杂信息。",
        "objection_en": "Given enough time, random processes can produce any complex information.",
        "response_zh": "这个'无限猴子'论证忽略了概率资源的限制。宇宙中所有粒子（约10^80个）在宇宙全部年龄（约10^17秒）内以最快速率随机组合，总共只能产生约10^140次组合。但获得一个功能蛋白质所需的特定氨基酸序列概率约为10^74分之一，获得完整的最低必需蛋白质组的概率远超这个极限。威廉·邓布斯基称之为'普遍概率界限'——超出此界限的概率事件即使有宇宙全部的时间和资源也不可能发生。时间不是万能的。",
        "response_en": "This 'infinite monkeys' argument ignores probabilistic resource limits. All particles in the universe (~10^80) across its entire age (~10^17 seconds) at the fastest rate yield only ~10^140 total combinations. But a single functional protein's specific amino acid sequence has probability roughly 1 in 10^74, and a complete minimal protein set far exceeds this limit. William Dembski calls this the 'universal probability bound' — events beyond this threshold cannot occur even given the universe's entire time and resources. Time is not omnipotent."
    },
    "ath-009": {
        "objection_zh": "进化可以解释我们的道德直觉，不需要上帝。",
        "objection_en": "Evolution can explain our moral intuitions without needing God.",
        "response_zh": "进化可以解释我们为什么会有某些道德感受，但不能证明这些感受反映了客观真理。如果道德直觉只是进化为生存而赋予我们的心理倾向，那么我们没有理由信任这些直觉是客观正确的。进化给了我们相信道德的倾向，但没有给这种信念提供真理保证。唯有上帝才能同时解释道德直觉的存在和它们的客观有效性。正如C.S.路易斯所论证的，我们对道德的认知不是进化的意外产物，而是造物主在我们心中留下的印记。",
        "response_en": "Evolution can explain why we have certain moral feelings but cannot validate them as objectively true. If moral intuitions are merely psychological dispositions evolution gave us for survival, we have no reason to trust them as objectively correct. Evolution gives the disposition to believe in morality but provides no truth-guarantee. Only God can simultaneously explain moral intuitions' existence and their objective validity. As C.S. Lewis argued, our moral awareness is not an accidental evolutionary byproduct but the Creator's imprint upon our hearts."
    },
    "islam-004": {
        "objection_zh": "也许犹大或其他人被变成耶稣的样子替他受死。",
        "objection_en": "Perhaps Judas or someone else was made to look like Jesus and died in his place.",
        "response_zh": "替身理论面临无法克服的困难：（1）耶稣的母亲马利亚和亲密门徒就在十字架下，不可能认不出自己的儿子；（2）罗马士兵是专业刽子手，不会在重要处决中弄错对象；（3）如果上帝让无辜者替耶稣受死，这是欺骗行为，与上帝的诚实本性矛盾；（4）这个理论没有任何早期历史证据，是600年后的追溯性声明。更重要的是，所有最早的历史来源——包括敌对的来源——都一致确认耶稣本人被钉十字架。",
        "response_en": "The substitution theory faces insurmountable difficulties: (1) Jesus' mother Mary and close disciples were at the cross — they couldn't fail to recognize their son; (2) Roman soldiers were professional executioners who wouldn't mistake identity in an important execution; (3) If God let an innocent person die by deception, this contradicts God's truthful nature; (4) This theory has zero early historical evidence — it's a retroactive claim 600 years later. More importantly, all earliest historical sources — including hostile ones — unanimously confirm Jesus himself was crucified."
    },
    "islam-006": {
        "objection_zh": "也许圣经和古兰经描述的是同一个耶稣的不同方面。",
        "objection_en": "Perhaps the Bible and Quran describe different aspects of the same Jesus.",
        "response_zh": "这在逻辑上不可能。圣经说耶稣是上帝的儿子，古兰经明确否认（4:171）。圣经说耶稣死在十字架上，古兰经否认（4:157）。圣经说耶稣复活了，古兰经没有记载。这些不是同一事物的'不同方面'——它们是相互矛盾的事实主张。两个互相矛盾的陈述不可能同时为真。问题不在于调和，而在于哪个来源更可靠——距离事件20-60年的多位目击者记载，还是距离事件600年的单一来源。",
        "response_en": "This is logically impossible. The Bible says Jesus is the Son of God; the Quran explicitly denies this (4:171). The Bible says Jesus died on the cross; the Quran denies it (4:157). The Bible says Jesus rose again; the Quran doesn't record this. These aren't 'different aspects' of the same thing — they are contradictory factual claims. Two contradictory statements cannot both be true. The question isn't harmonization but which source is more reliable — multiple eyewitness accounts 20-60 years from the events, or a single source 600 years later."
    },
    "islam-007": {
        "objection_zh": "古兰经通过口头传承完美保存，比书面传承更可靠。",
        "objection_en": "The Quran was perfectly preserved through oral transmission, more reliable than written transmission.",
        "response_zh": "口头传承的可靠性取决于传承链的完整性和一致性。但早期伊斯兰文献本身记载了口传版本之间的差异——这正是奥斯曼需要标准化的原因。伊本·马斯欧德（穆罕默德推荐的古兰经权威之一）拥有与奥斯曼版不同的版本，少了两章，却多了一些内容。此外，2015年发现的伯明翰古兰经手稿的碳-14测定可能早于穆罕默德的传统年代。更重要的是，我们不应该把口传和书面对立起来——圣经同时拥有大量书面手稿证据和持续的教会礼仪使用传统。",
        "response_en": "Oral transmission's reliability depends on the chain's integrity and consistency. But early Islamic sources themselves record differences between oral versions — precisely why Uthman needed standardization. Ibn Masud (one of Muhammad's recommended Quran authorities) had a version differing from Uthman's, lacking two surahs yet containing additional material. Furthermore, the Birmingham Quran manuscript's carbon-14 dating (2015) potentially predates Muhammad's traditional timeline. More importantly, we shouldn't oppose oral and written — the Bible possesses both massive written manuscript evidence and continuous liturgical usage tradition."
    },
    "buddhism-006": {
        "objection_zh": "佛教的正念修行已被科学证明有益于心理健康。",
        "objection_en": "Buddhist mindfulness practices have been scientifically proven beneficial for mental health.",
        "response_zh": "正念冥想的心理益处确实有科学支持——减压、情绪调节等。但这不能证明佛教的形而上学主张是真的。许多技术可以减轻压力（运动、音乐、良好的社交关系），这不等于它们背后的世界观是正确的。基督教也有默想和祷告的悠久传统，同样有心理益处。更重要的是，心理健康不是人生的终极问题——真正的问题是：什么是真实的？人类苦难的根源是什么？是否有永恒的盼望？对这些终极问题的回答，决定了我们对苦难的理解和应对方式。",
        "response_en": "Mindfulness meditation's psychological benefits are indeed scientifically supported — stress reduction, emotional regulation, etc. But this doesn't validate Buddhism's metaphysical claims. Many techniques reduce stress (exercise, music, good social relationships) without validating their underlying worldview. Christianity also has a long tradition of contemplation and prayer with similar psychological benefits. More importantly, mental health isn't life's ultimate question — the real questions are: What is real? What is the root of human suffering? Is there eternal hope? The answers to these ultimate questions determine how we understand and respond to suffering."
    },
    "sec-004": {
        "objection_zh": "如果没有绝对真理，至少可以有实用性的共识。",
        "objection_en": "Even without absolute truth, we can at least have practical consensus.",
        "response_zh": "实用主义共识确实可以在日常生活中运作，但它无法回答为什么我们'应该'遵守这些共识。如果道德只是实用协议，那么当违反协议对个人更有利时（比如你能确定不会被抓住），为什么还要遵守？实用主义也无法谴责那些成功建立了'不同共识'的社会——如果纳粹德国的多数人同意犹太人应被消灭，实用主义无法说这个'共识'是错误的。此外，'我们应该追求实用共识'本身就是一个关于道德义务的声明，预设了某种客观的'应该'——这恰恰是相对主义否认存在的东西。",
        "response_en": "Pragmatic consensus can work in daily life, but it cannot answer WHY we 'should' follow these agreements. If morality is merely practical agreement, why obey when violating it benefits you personally (say, when you won't get caught)? Pragmatism also cannot condemn societies that established 'different consensus' — if Nazi Germany's majority agreed Jews should be eliminated, pragmatism cannot call this 'consensus' wrong. Moreover, 'We should pursue practical consensus' is itself a moral obligation claim, presupposing some objective 'should' — precisely what relativism denies exists."
    },
    "sec-005": {
        "objection_zh": "联合国人权宣言不需要上帝就建立了人权。",
        "objection_en": "The UN Declaration of Human Rights established rights without God.",
        "response_zh": "联合国人权宣言是一个重要的文件，但它声明权利的存在，并没有解释权利的基础。宣言开头说人权是'固有的'和'不可剥夺的'——但为什么？如果人类只是进化的偶然产物，'固有'权利从何而来？历史上，参与起草宣言的许多人（如查尔斯·马利克和雅克·马里坦）深受基督教人权观的影响。马里坦明确表示，虽然不同信仰的人可以在人权的实践内容上达成一致，但'询问为什么'时他们会给出不同的答案。基督教的答案——人按上帝形象被造——提供了最坚实的基础。",
        "response_en": "The UN Declaration is important, but it declares rights' existence without explaining their foundation. The preamble calls human rights 'inherent' and 'inalienable' — but why? If humans are merely accidental evolutionary products, where do 'inherent' rights come from? Historically, many drafters (like Charles Malik and Jacques Maritain) were deeply influenced by Christian human rights thought. Maritain explicitly noted that while people of different faiths could agree on rights' practical content, 'asking why' would yield different answers. Christianity's answer — humans made in God's image — provides the most solid foundation."
    },
    "sec-006": {
        "objection_zh": "许多人没有宗教信仰也活得很有意义。",
        "objection_en": "Many people live meaningful lives without religious faith.",
        "response_zh": "问题不是无信仰者能否感受到意义——当然可以。问题是这种意义在他们的世界观中是否有客观基础。如果宇宙根本上是无目的的，那你赋予自己的意义只是主观偏好——和别人选择追求权力或享乐同样'有意义'。你无法说你的选择比别人的更有价值。此外，即使在个人层面感受到意义，在宇宙尺度上一切终将归于虚无——太阳会熄灭，人类会灭绝，宇宙会热寂。在这个框架下，最终来说什么都不重要。但我们心中对永恒意义的渴望如此强烈——这种渴望本身就是线索。",
        "response_en": "The question isn't whether non-believers can feel meaning — of course they can. The question is whether this meaning has objective grounding in their worldview. If the universe is fundamentally purposeless, self-assigned meaning is merely subjective preference — equally 'meaningful' as someone choosing power or hedonism. You can't claim your choice is more valuable. Moreover, even personally felt meaning ultimately amounts to nothing at cosmic scale — the sun will die, humanity will go extinct, the universe will reach heat death. In this framework, ultimately nothing matters. Yet our deep longing for eternal meaning is itself a clue."
    },
    "sec-007": {
        "objection_zh": "科学方法是自我纠正的，这使它比宗教更可靠。",
        "objection_en": "Science is self-correcting, making it more reliable than religion.",
        "response_zh": "科学方法的自我纠正确实是其巨大优势——在其适当领域内。但'自我纠正'预设了若干非科学的前提：自然规律的一致性（为什么自然规律在未来仍然有效？），逻辑法则的有效性（科学推理依赖逻辑，但逻辑不是科学发现），以及人类理性的可靠性（为什么信任我们大脑产生的结论？）。这些前提都无法被科学方法本身证明。此外，科学的'自我纠正'功能恰恰暗示了一个超越科学的真理标准——科学向着更准确的方向'进步'，预设了一个客观真理作为衡量标准。这与基督教的认识论完全一致：上帝创造了有序的宇宙，赋予人类理性去探索它。",
        "response_en": "Science's self-correcting nature is indeed a great strength — within its proper domain. But 'self-correction' presupposes several non-scientific premises: the uniformity of nature (why should natural laws hold in the future?), the validity of logical laws (scientific reasoning depends on logic, but logic isn't a scientific discovery), and the reliability of human reason (why trust our brains' conclusions?). None of these can be proven by science itself. Moreover, science's 'self-correcting' function implies a truth standard beyond science — science 'progresses' toward greater accuracy, presupposing objective truth as a benchmark. This is fully consistent with Christian epistemology: God created an orderly universe and endowed humans with reason to explore it."
    },
    "cults-004": {
        "objection_zh": "每个教会都有自己的解释，谁来决定哪个是正统的？",
        "objection_en": "Every church has its own interpretation — who decides which is orthodox?",
        "response_zh": "正统不是由某个特定教会决定的，而是由两千年来教会对圣经一致性的理解来定义的。使徒信经和尼西亚信经代表了基督教在最核心教义上的普世共识——基督的完全神性与人性、三位一体、因信称义等。几乎所有主要基督教传统（天主教、东正教、新教）都接受这些核心教义。邪教的特征恰恰在于它们偏离了这些被广泛接受的核心教义。辨别邪教不需要一个不可错误的人类权威——只需要忠实地回到圣经本身，并参考两千年的解经传统。",
        "response_en": "Orthodoxy isn't determined by any particular church but defined by two millennia of the church's consistent understanding of Scripture. The Apostles' Creed and Nicene Creed represent Christianity's ecumenical consensus on core doctrines — Christ's full deity and humanity, the Trinity, justification by faith. Nearly all major Christian traditions (Catholic, Orthodox, Protestant) accept these core doctrines. Cults are characterized precisely by departing from these widely accepted core doctrines. Discerning cults doesn't require an infallible human authority — only faithful return to Scripture itself, informed by two thousand years of interpretive tradition."
    },
    "cults-006": {
        "objection_zh": "唯独圣经是路德发明的，早期教会并不相信。",
        "objection_en": "Sola Scriptura was invented by Luther; the early church didn't believe it.",
        "response_zh": "唯独圣经的术语确实是在改革运动中明确表述的，但其实质内容在早期教会中已有深厚根基。早期教父如阿塔纳修、奥古斯丁、区利罗都以圣经为检验教义的最终标准。奥古斯丁明确说：'除了那些被称为正典的圣经之外，我不应该给予其他任何作者如此的敬重。'阿塔纳修在反对阿里乌异端时，一贯诉诸圣经而非教会传统作为最终权威。改革者不是发明了新原则，而是在教会传统偏离圣经时，恢复了早期教会的实践。",
        "response_en": "Sola Scriptura's terminology was explicitly formulated during the Reformation, but its substance was deeply rooted in the early church. Church Fathers like Athanasius, Augustine, and Cyril used Scripture as the ultimate doctrinal test. Augustine explicitly stated: 'I should not give such honor to any other author except to those called canonical Scriptures.' Athanasius, opposing Arian heresy, consistently appealed to Scripture rather than church tradition as final authority. The Reformers didn't invent a new principle but restored early church practice when church tradition had deviated from Scripture."
    },
}

# Apply to data
for item in data:
    if item['id'] in third_objections:
        item['common_objections'].append(third_objections[item['id']])

with open(path, 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

# Verify
remaining = 0
for item in data:
    if len(item.get('common_objections', [])) < 3:
        print(f"  {item['id']}: still has {len(item['common_objections'])} objections")
        remaining += 1

print(f"\nArticles still needing objections: {remaining}")
print(f"Total articles: {len(data)}")
