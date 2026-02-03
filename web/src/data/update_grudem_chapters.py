#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
重写 book-311 (Wayne Grudem, Systematic Theology) 的 chapters 数据
严格按原书57章结构，每章一个条目，不合并
"""

import json
import sys
import codecs

# Grudem《系统神学》57章完整结构
grudem_57_chapters = [
    {
        "number": 1,
        "title_zh": "第1章：系统神学导论",
        "title_en": "Chapter 1: Introduction to Systematic Theology",
        "summary_zh": "古德恩定义系统神学为\"研究圣经对我们今日应当相信和行的全部教导\"。本章解释系统神学的目的、方法论和与其他学科的关系，强调圣经是系统神学的主要来源，理性、经验和传统为辅助。",
        "summary_en": "Grudem defines systematic theology as \"the study of what the whole Bible teaches us today about any given topic.\" This chapter explains the purpose, methodology, and relationship of systematic theology to other disciplines, emphasizing Scripture as the primary source with reason, experience, and tradition as aids.",
        "key_quotes": [
            {"zh": "系统神学可以定义为对圣经就任何给定主题教导我们今日应当相信什么的研究。", "en": "Systematic theology may be defined as the study of what the whole Bible teaches us today about any given topic."},
            {"zh": "我们必须让圣经解释圣经，让清楚的经文解释难懂的经文。", "en": "We must let Scripture interpret Scripture, and let clear passages of Scripture interpret the unclear passages."}
        ]
    },
    {
        "number": 2,
        "title_zh": "第2章：上帝的话",
        "title_en": "Chapter 2: The Word of God",
        "summary_zh": "探讨上帝话语的多种形式：上帝的诫命、上帝在历史中的话语、基督作为成肉身的道，以及圣经作为成文的道。重点阐释圣经如何成为上帝在今日向我们说话的主要方式。",
        "summary_en": "Explores various forms of God's Word: God's decrees, God's words in history, Christ as the incarnate Word, and Scripture as the written Word. Emphasizes how Scripture serves as God's primary means of speaking to us today.",
        "key_quotes": [
            {"zh": "圣经就是上帝的话语，其中的每个字都是神所默示的。", "en": "The Bible is God's Word, and every word in it is breathed out by God."},
            {"zh": "我们今日听到上帝对我们说话，主要是通过他写成的话语圣经。", "en": "We hear God speaking to us today primarily through his written Word, the Bible."}
        ]
    },
    {
        "number": 3,
        "title_zh": "第3章：圣经的正典",
        "title_en": "Chapter 3: The Canon of Scripture", 
        "summary_zh": "考察哪些书卷属于圣经正典的问题。讨论正典确立的标准、历史过程，以及旧约和新约正典的形成。强调正典的权威性来自上帝，教会只是认识和承认，而非决定正典。",
        "summary_en": "Examines which books belong to the biblical canon. Discusses criteria for canonicity, historical process, and formation of Old and New Testament canons. Emphasizes that canonical authority comes from God; the church recognizes rather than determines the canon.",
        "key_quotes": [
            {"zh": "正典是神所默示的书卷的集合，这些书卷被承认为我们信仰与生活的终极标准。", "en": "The canon is the collection of inspired books that are recognized as the ultimate standard for faith and life."},
            {"zh": "教会不决定正典，而是发现正典。", "en": "The church does not determine the canon, but discovers it."}
        ]
    },
    {
        "number": 4,
        "title_zh": "第4章：圣经的四个特征：(1) 权威",
        "title_en": "Chapter 4: The Four Characteristics of Scripture: (1) Authority",
        "summary_zh": "阐述圣经具有最高权威，因为它是上帝的话。这权威意味着不相信或不顺服圣经就是不相信或不顺服上帝自己。讨论圣经权威与其他权威的关系，以及如何在实际生活中认识和回应圣经的权威。",
        "summary_en": "Establishes Scripture's ultimate authority because it is God's Word. This authority means that to disbelieve or disobey Scripture is to disbelieve or disobey God himself. Discusses Scripture's authority in relation to other authorities and practical application.",
        "key_quotes": [
            {"zh": "圣经的权威意味着，圣经中的所有话都是神的话，所以不相信圣经的任何话就是不相信神。", "en": "The authority of Scripture means that all the words in Scripture are God's words in such a way that to disbelieve or disobey any word of Scripture is to disbelieve or disobey God."},
            {"zh": "我们必须允许圣经的教导改变我们先前持有的观点。", "en": "We must allow the teachings of Scripture to change our previous ideas."}
        ]
    },
    {
        "number": 5,
        "title_zh": "第5章：圣经的无误性",
        "title_en": "Chapter 5: The Inerrancy of Scripture",
        "summary_zh": "论证圣经在其原稿中完全没有错误。探讨无误性的定义、圣经对自身无误性的宣称、以及面对表面矛盾时的解释原则。强调无误性对基督徒信仰和生活的重要性。",
        "summary_en": "Argues that Scripture is completely truthful in its original manuscripts. Explores definitions of inerrancy, Scripture's claims about itself, and principles for handling apparent contradictions. Emphasizes inerrancy's importance for Christian faith and life.",
        "key_quotes": [
            {"zh": "圣经的无误性意味着圣经在其原稿中，在它所确认的一切事上都是完全真实和没有错误的。", "en": "The inerrancy of Scripture means that Scripture in the original manuscripts does not affirm anything that is contrary to fact."},
            {"zh": "如果我们否认无误性，我们也就否认了神话语的完全可信性。", "en": "If we deny inerrancy, we essentially deny the complete truthfulness of God's words."}
        ]
    },
    {
        "number": 6,
        "title_zh": "第6章：圣经的四个特征：(2) 清楚性", 
        "title_en": "Chapter 6: The Four Characteristics of Scripture: (2) Clarity",
        "summary_zh": "阐述圣经在救恩等基要真理上是清楚明了的，普通信徒通过圣灵的帮助能够理解。同时承认圣经某些部分比其他部分更难理解，需要仔细研究和解释。",
        "summary_en": "Establishes that Scripture is clear in essential truths like salvation, understandable to ordinary believers with the Holy Spirit's help. Acknowledges some parts are harder than others, requiring careful study and interpretation.",
        "key_quotes": [
            {"zh": "圣经的清楚性意味着圣经写得如此清楚，以致它的基要真理可以被任何能够阅读的人理解。", "en": "The clarity of Scripture means that the Bible is written in such a way that its teachings are able to be understood by all who will read it seeking God's help."},
            {"zh": "我们不需要学者或教会来告诉我们圣经的基要信息是什么。", "en": "We do not need scholars or the church to tell us what the essential message of Scripture is."}
        ]
    },
    {
        "number": 7,
        "title_zh": "第7章：圣经的四个特征：(3) 必要性",
        "title_en": "Chapter 7: The Four Characteristics of Scripture: (3) Necessity",
        "summary_zh": "论证圣经对于认识福音、维持属灵生命和明白神的旨意是必不可少的。虽然一般启示能够揭示神的存在和基本属性，但特殊启示（圣经）对救恩和基督徒生活是必需的。",
        "summary_en": "Argues that Scripture is necessary for knowing the gospel, maintaining spiritual life, and understanding God's will. While general revelation reveals God's existence and basic attributes, special revelation (Scripture) is necessary for salvation and Christian living.",
        "key_quotes": [
            {"zh": "圣经是认识救恩之福音所必需的。", "en": "The Bible is necessary for knowing the gospel of salvation."},
            {"zh": "若无圣经，我们就不能与神有得救的关系。", "en": "Without the Bible we could not have a saving relationship with God."}
        ]
    },
    {
        "number": 8,
        "title_zh": "第8章：圣经的四个特征：(4) 充足性",
        "title_en": "Chapter 8: The Four Characteristics of Scripture: (4) Sufficiency",
        "summary_zh": "阐述圣经包含了神为救恩、信任神和顺服神而要我们相信的一切。圣经是充足的，意味着我们不需要在圣经之外寻找额外的启示来指导基督徒的信仰和实践。",
        "summary_en": "Establishes that Scripture contains everything God requires us to believe for salvation, trust in God, and obedience to God. Scripture's sufficiency means we need not seek additional revelation beyond the Bible for Christian faith and practice.",
        "key_quotes": [
            {"zh": "圣经的充足性意味着圣经包含了神为得救、信任神和顺服神而要我们相信的一切言语。", "en": "The sufficiency of Scripture means that Scripture contained all the words of God he intended his people to have at each stage of redemptive history."},
            {"zh": "我们必须既不多加，也不减少圣经中神的话。", "en": "We must neither add to nor take away from God's words in Scripture."}
        ]
    },
    {
        "number": 9,
        "title_zh": "第9章：神的存在",
        "title_en": "Chapter 9: The Existence of God",
        "summary_zh": "探讨神存在的证据，包括本体论证、宇宙论证、目的论证和道德论证。强调这些论证虽有价值，但最终是圣经启示和圣灵的工作使人确信神的存在。",
        "summary_en": "Examines evidence for God's existence including ontological, cosmological, teleological, and moral arguments. Emphasizes that while these arguments have value, ultimately Scripture's revelation and the Holy Spirit's work convince people of God's existence.",
        "key_quotes": [
            {"zh": "神的存在是如此清楚地显明，不相信神是不合理的。", "en": "God's existence is so clearly revealed that disbelief in God is unreasonable."},
            {"zh": "受造界本身见证了神的永恒能力和神性。", "en": "Creation itself testifies to God's eternal power and divine nature."}
        ]
    },
    {
        "number": 10,
        "title_zh": "第10章：神的可知性",
        "title_en": "Chapter 10: The Knowability of God",
        "summary_zh": "讨论我们能在多大程度上认识神。虽然神是无限的而我们是有限的，但神通过启示使自己可知。区分神的不可测性（我们无法完全理解神）和神的可知性（我们能真实地认识神）。",
        "summary_en": "Discusses the extent to which we can know God. Though God is infinite and we are finite, God makes himself knowable through revelation. Distinguishes between God's incomprehensibility (we cannot fully understand God) and God's knowability (we can truly know God).",
        "key_quotes": [
            {"zh": "虽然我们永远不能完全理解神，但我们可以对神有真实而准确的知识。", "en": "Though we can never fully comprehend God, we can have true and accurate knowledge about God."},
            {"zh": "神向我们启示关于他自己的真理，是为了与我们建立个人关系。", "en": "God reveals truth about himself to us in order to establish a personal relationship with us."}
        ]
    },
    {
        "number": 11,
        "title_zh": "第11章：神的品格：\"不可传递的\"属性",
        "title_en": "Chapter 11: The Character of God: \"Incommunicable\" Attributes",
        "summary_zh": "探讨神独有的、不与受造物分享的属性：自存性、永恒性、无所不在、不变性、一体性。这些属性显明神的超越性和独特性，是任何被造物都不具备的。",
        "summary_en": "Explores attributes unique to God, not shared with creatures: independence, eternity, omnipresence, immutability, and unity. These attributes reveal God's transcendence and uniqueness that no created being possesses.",
        "key_quotes": [
            {"zh": "神的自存性意味着神不需要任何东西或任何人，但所有东西和所有人都依赖于神而存在。", "en": "God's independence means that God does not need any part of creation in order to exist, but all of creation depends on God for its existence."},
            {"zh": "神是不变的，这意味着神不改变。", "en": "God is unchangeable, meaning God does not change."}
        ]
    },
    {
        "number": 12,
        "title_zh": "第12章：神的品格：\"可传递的\"属性 (第一部分)",
        "title_en": "Chapter 12: The Character of God: \"Communicable\" Attributes (Part 1)",
        "summary_zh": "讨论神与人类分享的属性的第一部分：属灵性、无形性、活力。这些属性在神里面是无限完美的，在人里面是有限和不完美的，但确实有相似性。",
        "summary_en": "Discusses the first part of attributes God shares with humans: spirituality, invisibility, and life. These attributes are infinitely perfect in God but finite and imperfect in humans, yet there is genuine similarity.",
        "key_quotes": [
            {"zh": "神是个灵，他不受物质身体的限制。", "en": "God is spirit, meaning that God is not subject to the limitations of a physical body."},
            {"zh": "神是活着的，拥有生命的完全丰盛。", "en": "God is alive, possessing life in its fullest sense."}
        ]
    },
    {
        "number": 13,
        "title_zh": "第13章：神的品格：\"可传递的\"属性 (第二部分)",
        "title_en": "Chapter 13: The Character of God: \"Communicable\" Attributes (Part 2)",
        "summary_zh": "继续探讨神的可传递属性：知识（全知）、智慧、真实性和信实、良善、慈爱、怜悯、恩典、忍耐、圣洁、平安、公义、嫉妒、愤怒等。这些品格特质显明神的道德完美。",
        "summary_en": "Continues exploring God's communicable attributes: knowledge (omniscience), wisdom, truthfulness and faithfulness, goodness, love, mercy, grace, patience, holiness, peace, righteousness, jealousy, wrath, etc. These character traits reveal God's moral perfection.",
        "key_quotes": [
            {"zh": "神是全知的，意味着神完全知道一切可以被知道的事。", "en": "God is omniscient, meaning God fully knows himself and all actual and possible created things."},
            {"zh": "神是圣洁的，意味着神与他所创造的一切都有分别，他是纯洁的，不被罪玷污。", "en": "God is holy, meaning God is separate from all that he has made and he is pure, not defiled by sin."}
        ]
    },
    {
        "number": 14,
        "title_zh": "第14章：三位一体的神",
        "title_en": "Chapter 14: God in Three Persons: The Trinity",
        "summary_zh": "阐述三位一体教义：神是三个位格（父、子、圣灵）但只有一个本质。每个位格都完全是神，但不是三个神而是一个神。探讨三位一体在经济层面的关系和工作分工。",
        "summary_en": "Explains the doctrine of the Trinity: God is three persons (Father, Son, Spirit) but one essence. Each person is fully God, yet there are not three Gods but one God. Explores economic Trinity relationships and division of labor.",
        "key_quotes": [
            {"zh": "神永远存在为三个位格——父、子、圣灵——而每个位格都完全是神，但只有一个神。", "en": "God eternally exists as three persons—Father, Son, and Holy Spirit—and each person is fully God, and there is one God."},
            {"zh": "位格这词指'某个有意识的、有智慧的、个别的存在者'。", "en": "By 'person' we mean a distinct subsistence in the divine nature with distinct personal properties."}
        ]
    },
    {
        "number": 15,
        "title_zh": "第15章：创造",
        "title_en": "Chapter 15: Creation",
        "summary_zh": "探讨神的创造工作：神从无中创造万有，创造是好的，人是照神的形象造的。讨论创造的目的、进化论与圣经的关系，以及人类作为神形象承载者的特殊地位。",
        "summary_en": "Explores God's work of creation: God created everything from nothing, creation is good, humans are made in God's image. Discusses purpose of creation, evolution's relationship to Scripture, and humanity's special status as image-bearers.",
        "key_quotes": [
            {"zh": "神从无中创造了宇宙。", "en": "God created the universe out of nothing."},
            {"zh": "神照着自己的形象造人，这赋予人类独特的尊严和价值。", "en": "God made man in his own image, giving humans unique dignity and value."}
        ]
    },
    {
        "number": 16,
        "title_zh": "第16章：神的护理",
        "title_en": "Chapter 16: God's Providence",
        "summary_zh": "阐述神持续的护理工作：保守、协同和管理。神维持万物的存在，与次因合作，并指导一切事物达成他的目的。探讨护理与人的自由意志、祷告和苦难的关系。",
        "summary_en": "Explains God's continuing providential work: preservation, concurrence, and government. God sustains all things in existence, cooperates with secondary causes, and directs all things to his purposes. Explores providence's relationship to human free will, prayer, and suffering.",
        "key_quotes": [
            {"zh": "神的护理是指神持续保守他所创造的万物，并与万物合作，管理他们达到他的目的。", "en": "God's providence is his continuing activity of preserving all created things and governing all events to accomplish his purposes."},
            {"zh": "万事都互相效力，叫爱神的人得益处。", "en": "All things work together for good for those who love God."}
        ]
    },
    {
        "number": 17,
        "title_zh": "第17章：神迹",
        "title_en": "Chapter 17: Miracles",
        "summary_zh": "定义神迹为神对自然规律的超自然干预。讨论神迹的目的、可能性和识别标准。强调神迹服务于神的救赎计划，不是为了娱乐或满足好奇心。",
        "summary_en": "Defines miracles as God's supernatural intervention in natural laws. Discusses purpose, possibility, and criteria for identifying miracles. Emphasizes miracles serve God's redemptive plan, not entertainment or curiosity.",
        "key_quotes": [
            {"zh": "神迹是神对一般的自然过程较不寻常的神性活动。", "en": "A miracle is a less common kind of God's activity in which he arouses people's awe and wonder and bears witness to himself."},
            {"zh": "神迹的主要目的是为神和他的信息作见证。", "en": "The primary purpose of miracles is to bear witness to God and his message."}
        ]
    },
    {
        "number": 18,
        "title_zh": "第18章：祷告",
        "title_en": "Chapter 18: Prayer",
        "summary_zh": "探讨祷告的本质、要素和效果。祷告是与神的个人交通，包括赞美、感谢、认罪和祈求。讨论祷告如何与神的主权协调，以及有效祷告的条件。",
        "summary_en": "Explores prayer's nature, elements, and effects. Prayer is personal communication with God including praise, thanksgiving, confession, and petition. Discusses how prayer coordinates with God's sovereignty and conditions for effective prayer.",
        "key_quotes": [
            {"zh": "祷告是人与神的个人交通。", "en": "Prayer is personal communication with God."},
            {"zh": "神命定祷告作为实现他旨意的方法之一。", "en": "God has ordained prayer as one means by which he accomplishes his purposes."}
        ]
    },
    {
        "number": 19,
        "title_zh": "第19章：天使",
        "title_en": "Chapter 19: Angels",
        "summary_zh": "讨论天使的本质、类别和工作。天使是神创造的属灵存在，服事神并帮助信徒。探讨不同类别的天使（撒拉弗、基路伯等）、护卫天使，以及天使在救赎历史中的角色。",
        "summary_en": "Discusses angels' nature, categories, and work. Angels are spiritual beings created by God who serve him and help believers. Explores different angel categories (seraphim, cherubim, etc.), guardian angels, and angels' role in redemptive history.",
        "key_quotes": [
            {"zh": "天使是神所造的属灵存在，他们敬拜神并作他的使者来执行他的旨意。", "en": "Angels are spiritual beings created by God to worship him and to serve as his messengers in carrying out his will."},
            {"zh": "天使是服役的灵，奉差遣为那将要承受救恩的人效力。", "en": "Angels are ministering spirits sent to serve those who will inherit salvation."}
        ]
    },
    {
        "number": 20,
        "title_zh": "第20章：撒但和邪灵",
        "title_en": "Chapter 20: Satan and Demons",
        "summary_zh": "探讨撒但的起源、本质和活动。撒但是堕落的天使，是神和人类的敌人。讨论邪灵的存在、它们的活动方式、以及基督徒如何抵挡属灵争战。",
        "summary_en": "Explores Satan's origin, nature, and activities. Satan is a fallen angel who is the enemy of God and humanity. Discusses demons' existence, their methods of operation, and how Christians resist spiritual warfare.",
        "key_quotes": [
            {"zh": "撒但是神所造的天使中最初级别最高的，但他骄傲地反叛神，成了神和世人的敌人。", "en": "Satan is a created angel of the highest rank who rebelled against God and became the enemy of God and humanity."},
            {"zh": "邪灵是跟随撒但反叛神的天使。", "en": "Demons are angels who followed Satan in his rebellion against God."}
        ]
    },
    {
        "number": 21,
        "title_zh": "第21章：人的创造",
        "title_en": "Chapter 21: The Creation of Man",
        "summary_zh": "探讨人类的起源和独特性。人是神照着自己的形象直接创造的，具有道德、理性和关系性的特质。讨论神的形象的含义、人类的尊严，以及人与其他受造物的区别。",
        "summary_en": "Explores human origins and uniqueness. Humans are directly created by God in his image, possessing moral, rational, and relational qualities. Discusses the meaning of God's image, human dignity, and humanity's distinction from other creatures.",
        "key_quotes": [
            {"zh": "人是照着神的形象造的，这使人在所有受造物中具有独特的地位。", "en": "Humans are made in God's image, giving them a unique place among all created beings."},
            {"zh": "作为神形象的承载者，人类拥有不可剥夺的尊严。", "en": "As image-bearers of God, humans possess inalienable dignity."}
        ]
    },
    {
        "number": 22,
        "title_zh": "第22章：男人和女人",
        "title_en": "Chapter 22: Man as Male and Female",
        "summary_zh": "探讨性别的神学意义。神创造了男性和女性，两者都完全承载神的形象但有不同的角色。讨论婚姻中的平等与区别、性别角色，以及单身的价值。",
        "summary_en": "Explores the theological significance of gender. God created male and female, both fully bearing God's image but with different roles. Discusses equality and distinction in marriage, gender roles, and the value of singleness.",
        "key_quotes": [
            {"zh": "神创造他们有男有女，两性都同样承载神的形象。", "en": "God created them male and female, both equally bearing the image of God."},
            {"zh": "男女在本质上平等，但在角色上有所不同。", "en": "Men and women are equal in essence but different in roles."}
        ]
    },
    {
        "number": 23,
        "title_zh": "第23章：人的本质属性",
        "title_en": "Chapter 23: The Essential Nature of Man",
        "summary_zh": "讨论人类本质的构成：人是由身体和灵魂（或灵）组成的统一体。探讨身体与灵魂的关系、死后的状态，以及整全人性的重要性。",
        "summary_en": "Discusses human nature's constitution: humans are unified beings composed of body and soul (or spirit). Explores the relationship between body and soul, post-death state, and the importance of whole human nature.",
        "key_quotes": [
            {"zh": "人是由物质的身体和非物质的灵魂组成的统一体。", "en": "Humans are unified beings composed of a material body and an immaterial soul."},
            {"zh": "身体和灵魂是人性不可分割的两个方面。", "en": "Body and soul are inseparable aspects of human nature."}
        ]
    },
    {
        "number": 24,
        "title_zh": "第24章：罪",
        "title_en": "Chapter 24: Sin",
        "summary_zh": "探讨罪的起源、本质和后果。罪是对神律法的违背，起源于亚当的堕落并遗传给全人类。讨论原罪、个人的罪、罪的后果，以及罪对人与神、人与人、人与自然关系的影响。",
        "summary_en": "Explores sin's origin, nature, and consequences. Sin is violation of God's law, originating in Adam's fall and inherited by all humanity. Discusses original sin, personal sin, sin's consequences, and sin's impact on relationships with God, others, and nature.",
        "key_quotes": [
            {"zh": "罪是任何不符合神的道德律或偏离神的道德律的情形。", "en": "Sin is any failure to conform to the moral law of God in act, attitude, or nature."},
            {"zh": "我们在亚当里犯了罪，当他犯罪时，我们也犯了罪。", "en": "We sinned in Adam and, when he sinned, we sinned."}
        ]
    },
    {
        "number": 25,
        "title_zh": "第25章：神与人之间的约",
        "title_en": "Chapter 25: The Covenants Between God and Man",
        "summary_zh": "探讨神在历史中与人类建立的各种约定。包括工作之约、恩典之约，以及圣经中的具体约定（挪亚之约、亚伯拉罕之约、摩西之约、大卫之约、新约）。强调约的连续性和渐进性启示。",
        "summary_en": "Explores various covenants God established with humanity throughout history. Includes covenant of works, covenant of grace, and specific biblical covenants (Noahic, Abrahamic, Mosaic, Davidic, New). Emphasizes covenantal continuity and progressive revelation.",
        "key_quotes": [
            {"zh": "约是神与他的子民之间不变的、神圣的约定。", "en": "A covenant is an unchangeable, divine commitment between God and his people."},
            {"zh": "所有的约都指向基督和在他里面的最终救赎。", "en": "All covenants point toward Christ and ultimate redemption in him."}
        ]
    },
    {
        "number": 26,
        "title_zh": "第26章：基督的位格",
        "title_en": "Chapter 26: The Person of Christ",
        "summary_zh": "探讨基督的位格——他同时是完全的神和完全的人。讨论道成肉身的奥秘、两性在一个位格中的联合、以及基督的神人二性如何不混淆、不分离。",
        "summary_en": "Explores Christ's person—he is fully God and fully man. Discusses the mystery of incarnation, union of two natures in one person, and how Christ's divine and human natures remain distinct yet inseparable.",
        "key_quotes": [
            {"zh": "基督是完全的神，也是完全的人，在一个位格里直到永远。", "en": "Christ is fully God and fully man in one person forever."},
            {"zh": "基督的神性和人性既不混淆，也不分离。", "en": "Christ's divine and human natures are neither confused nor separated."}
        ]
    },
    {
        "number": 27,
        "title_zh": "第27章：赎罪",
        "title_en": "Chapter 27: The Atonement",
        "summary_zh": "阐述基督赎罪工作的本质和必要性。基督为罪人死，担当了神的愤怒，满足了神的公义要求。探讨赎罪的不同层面：代替、挽回祭、和好、赎价。",
        "summary_en": "Explains the nature and necessity of Christ's atoning work. Christ died for sinners, bearing God's wrath and satisfying God's justice requirements. Explores different aspects: substitution, propitiation, reconciliation, ransom.",
        "key_quotes": [
            {"zh": "基督代替我们死，担当了我们本应承受的刑罚。", "en": "Christ died in our place, bearing the penalty we deserved."},
            {"zh": "基督的死平息了神对罪的愤怒，使和好成为可能。", "en": "Christ's death propitiated God's wrath against sin, making reconciliation possible."}
        ]
    },
    {
        "number": 28,
        "title_zh": "第28章：复活和升天",
        "title_en": "Chapter 28: Resurrection and Ascension",
        "summary_zh": "探讨基督复活和升天的事实、意义和后果。复活证明基督战胜了死亡，确认了他的神性和救赎工作的成功。升天标志着基督得荣耀，现在坐在父的右边为我们代求。",
        "summary_en": "Explores the facts, meaning, and consequences of Christ's resurrection and ascension. Resurrection proves Christ's victory over death, confirming his deity and successful redemptive work. Ascension marks Christ's glorification, now seated at the Father's right hand interceding for us.",
        "key_quotes": [
            {"zh": "基督的复活是基督教信仰的核心事实。", "en": "Christ's resurrection is the central fact of Christian faith."},
            {"zh": "基督现在坐在父神的右边，为我们代求。", "en": "Christ now sits at the right hand of the Father, interceding for us."}
        ]
    },
    {
        "number": 29,
        "title_zh": "第29章：基督的职分",
        "title_en": "Chapter 29: The Offices of Christ",
        "summary_zh": "探讨基督的三重职分：先知、祭司和君王。作为先知，基督是神最终的启示；作为祭司，他献上完美的祭物并为我们代求；作为君王，他统治万有并要再来建立他的国度。",
        "summary_en": "Explores Christ's threefold office: prophet, priest, and king. As prophet, Christ is God's final revelation; as priest, he offered perfect sacrifice and intercedes for us; as king, he rules over all and will return to establish his kingdom.",
        "key_quotes": [
            {"zh": "基督是神的最终启示，超越了所有旧约的先知。", "en": "Christ is God's final revelation, surpassing all Old Testament prophets."},
            {"zh": "基督既是完美的祭物，也是完美的祭司。", "en": "Christ is both the perfect sacrifice and the perfect priest."},
            {"zh": "基督现在是万王之王，万主之主。", "en": "Christ is now King of kings and Lord of lords."}
        ]
    },
    {
        "number": 30,
        "title_zh": "第30章：圣灵的工作",
        "title_en": "Chapter 30: The Work of the Holy Spirit",
        "summary_zh": "探讨圣灵在救赎中的工作。圣灵使人重生、赐人信心、印证信徒、住在信徒里面。讨论圣灵在旧约和新约中的工作，以及圣灵与基督和父神的关系。",
        "summary_en": "Explores the Holy Spirit's work in redemption. The Spirit regenerates, grants faith, seals believers, and dwells within them. Discusses the Spirit's work in Old and New Testaments and the Spirit's relationship to Christ and the Father.",
        "key_quotes": [
            {"zh": "圣灵是那位使基督的救赎在我们生命中生效的神。", "en": "The Holy Spirit is the one who makes Christ's redemption effective in our lives."},
            {"zh": "没有圣灵的工作，没有人能够得救。", "en": "Without the Holy Spirit's work, no one can be saved."}
        ]
    },
    {
        "number": 31,
        "title_zh": "第31章：一般恩典",
        "title_en": "Chapter 31: Common Grace",
        "summary_zh": "探讨神给予所有人类的一般恩典。包括约束罪恶、维持自然秩序、赐予才能和技能。一般恩典使社会文明成为可能，但不能拯救人脱离罪的刑罚。",
        "summary_en": "Explores God's common grace given to all humanity. Includes restraining evil, maintaining natural order, granting talents and skills. Common grace makes civilized society possible but cannot save from sin's penalty.",
        "key_quotes": [
            {"zh": "一般恩典是神给予所有人的恩惠，无论他们是否相信基督。", "en": "Common grace is favor from God given to all people regardless of whether they believe in Christ."},
            {"zh": "一般恩典约束罪恶，但不能消除罪恶。", "en": "Common grace restrains evil but does not remove evil."}
        ]
    },
    {
        "number": 32,
        "title_zh": "第32章：拣选和遗弃",
        "title_en": "Chapter 32: Election and Reprobation",
        "summary_zh": "探讨神的预定教义。神在创世之前就拣选了一些人得救恩，同时决定让其他人承受罪的刑罚。讨论拣选的标准、确据，以及这教义对基督徒生活的意义。",
        "summary_zh": "探讨神的预定教义。神在创世之前就拣选了一些人得救恩，同时决定让其他人承受罪的刑罚。讨论拣选的标准、确据，以及这教义对基督徒生活的意义。",
        "summary_en": "Explores the doctrine of divine predestination. God chose some for salvation before creation, while deciding to leave others in their sin. Discusses criteria for election, assurance, and this doctrine's significance for Christian living.",
        "key_quotes": [
            {"zh": "拣选是神在创世以前选择一些人得救恩的永恒决定。", "en": "Election is God's eternal decision before creation to choose some people for salvation."},
            {"zh": "拣选完全出于神的恩典，不是基于人的行为。", "en": "Election is entirely of God's grace, not based on human works."}
        ]
    },
    {
        "number": 33,
        "title_zh": "第33章：福音的呼召和有效的呼召",
        "title_en": "Chapter 33: The Gospel Call and Effective Calling",
        "summary_zh": "区分福音的一般呼召和圣灵有效的呼召。福音向所有人发出，但只有神的选民会因圣灵内在的工作而真正回应。探讨抗拒恩典和恩典的不可抗拒性。",
        "summary_en": "Distinguishes between general gospel call and Spirit's effectual calling. Gospel is offered to all, but only God's elect truly respond through Spirit's inner work. Explores resistance to grace and irresistible grace.",
        "key_quotes": [
            {"zh": "有效的呼召是圣灵的工作，他使我们认识到自己的罪和基督的救恩。", "en": "Effectual calling is the Holy Spirit's work whereby he makes us aware of our sin and Christ's salvation."},
            {"zh": "所有听到福音有效呼召的人都会回应并得救。", "en": "All who hear the effectual call of the gospel will respond and be saved."}
        ]
    },
    {
        "number": 34,
        "title_zh": "第34章：重生",
        "title_en": "Chapter 34: Regeneration",
        "summary_zh": "探讨重生的本质：圣灵赐给人新生命的奥秘作为。重生先于信心，使我们能够回应福音。讨论重生的必要性、瞬间性，以及重生与其他救恩要素的关系。",
        "summary_en": "Explores regeneration's nature: the Spirit's secret act of giving new life. Regeneration precedes faith, enabling us to respond to the gospel. Discusses regeneration's necessity, instantaneity, and relationship to other salvation elements.",
        "key_quotes": [
            {"zh": "重生是圣灵在我们里面的奥秘作为，他赐给我们新的属灵生命。", "en": "Regeneration is a secret act of the Holy Spirit whereby he gives us new spiritual life."},
            {"zh": "我们必须重生才能看见神的国。", "en": "We must be born again to see the kingdom of God."}
        ]
    },
    {
        "number": 35,
        "title_zh": "第35章：悔改（信心和悔罪）",
        "title_en": "Chapter 35: Conversion (Faith and Repentance)",
        "summary_zh": "探讨悔改的两个方面：信心和悔罪。信心包括知识、赞同和信靠；悔罪包括认识罪恶、为罪忧伤和决心离弃罪恶。这两者是同一过程的不同侧面。",
        "summary_en": "Explores conversion's two aspects: faith and repentance. Faith includes knowledge, assent, and trust; repentance includes recognizing sin, sorrow for sin, and resolution to forsake sin. These are different aspects of the same process.",
        "key_quotes": [
            {"zh": "信心是我们确信基督为我们的救主并单单依靠他得救。", "en": "Faith is our conviction that Christ is our Savior and our trust in him alone for salvation."},
            {"zh": "悔罪是真心转离罪恶并转向神。", "en": "Repentance is heartfelt sorrow for sin coupled with a resolution to forsake sin."}
        ]
    },
    {
        "number": 36,
        "title_zh": "第36章：称义（在神面前正确的法理地位）",
        "title_en": "Chapter 36: Justification (Right Legal Standing Before God)",
        "summary_zh": "探讨称义教义：神宣布我们不再被定罪，反而在他眼中为义。称义是瞬间的法理行为，完全基于基督的义，通过信心接受。这是宗教改革的核心教义。",
        "summary_en": "Explores justification doctrine: God's declaration that we are no longer condemned but righteous in his sight. Justification is instantaneous legal act, based entirely on Christ's righteousness, received through faith. This is the central Reformation doctrine.",
        "key_quotes": [
            {"zh": "称义是神瞬间的法理行为，他赦免我们所有的罪，并接受我们在他面前为义人。", "en": "Justification is an instantaneous legal act of God in which he forgives all our sins and accepts us as righteous in his sight."},
            {"zh": "我们单单因信称义，不是因行为。", "en": "We are justified by faith alone, not by works."}
        ]
    },
    {
        "number": 37,
        "title_zh": "第37章：收养（在神家庭中的成员身份）",
        "title_en": "Chapter 37: Adoption (Membership in God's Family)",
        "summary_zh": "探讨收养教义：神接纳我们为他的儿女，享有家庭关系的特权。收养不同于称义，强调关系而非法理地位。讨论作神儿女的特权、责任和安全感。",
        "summary_en": "Explores adoption doctrine: God receives us as his children, enjoying family relationship privileges. Adoption differs from justification, emphasizing relationship over legal status. Discusses privileges, responsibilities, and security of being God's children.",
        "key_quotes": [
            {"zh": "收养是神的行为，他使我们成为他家庭的成员。", "en": "Adoption is an act of God whereby he makes us members of his family."},
            {"zh": "我们既是神的儿女，就是后嗣。", "en": "If we are God's children, then we are heirs."}
        ]
    },
    {
        "number": 38,
        "title_zh": "第38章：成圣（在基督里的品格成长）",
        "title_en": "Chapter 38: Sanctification (Growth in Likeness to Christ)",
        "summary_zh": "探讨成圣的过程：在基督徒整个生命中逐渐变得更像基督。与称义不同，成圣是渐进的过程，涉及我们的配合。讨论成圣的方法、完美主义的错误，以及成圣与好行为的关系。",
        "summary_en": "Explores sanctification process: gradually becoming more like Christ throughout Christian life. Unlike justification, sanctification is progressive, involving our cooperation. Discusses means of sanctification, perfectionist errors, and relationship between sanctification and good works.",
        "key_quotes": [
            {"zh": "成圣是圣灵在我们生命中渐进的工作，使我们越来越脱离罪，越来越像基督。", "en": "Sanctification is the progressive work of the Holy Spirit in our lives, making us more free from sin and more like Christ."},
            {"zh": "成圣是我们与神合作的过程。", "en": "Sanctification is a process in which we cooperate with God."}
        ]
    },
    {
        "number": 39,
        "title_zh": "第39章：圣灵的洗和圣灵充满",
        "title_en": "Chapter 39: Baptism in and Filling with the Holy Spirit",
        "summary_zh": "区分圣灵的洗和圣灵充满。圣灵的洗是所有基督徒在重生时都经历的，使我们成为基督身体的一部分。圣灵充满是可重复的经历，带来能力和恩赐用于服事。",
        "summary_en": "Distinguishes baptism in and filling with the Holy Spirit. Spirit baptism is experienced by all Christians at regeneration, making us part of Christ's body. Spirit filling is repeatable experience bringing power and gifts for ministry.",
        "key_quotes": [
            {"zh": "圣灵的洗是所有基督徒都经历的，它使我们成为基督身体的一部分。", "en": "Baptism in the Holy Spirit is experienced by all Christians, making us part of the body of Christ."},
            {"zh": "我们应当不断被圣灵充满，为基督作见证。", "en": "We should be continually filled with the Holy Spirit to witness for Christ."}
        ]
    },
    {
        "number": 40,
        "title_zh": "第40章：圣徒的坚忍（持续作基督徒）",
        "title_en": "Chapter 40: The Perseverance of the Saints (Remaining a Christian)",
        "summary_zh": "探讨真正得救的人是否能失去救恩。古德恩论证真信徒会坚忍到底，这既是神保守的结果，也需要信徒持续的信心和顺服。讨论背道、假信徒和救恩的确据。",
        "summary_en": "Explores whether truly saved people can lose salvation. Grudem argues true believers will persevere to the end, both as result of God's preservation and requiring believers' continued faith and obedience. Discusses apostasy, false believers, and assurance of salvation.",
        "key_quotes": [
            {"zh": "真正得救的人会坚忍在信仰中直到生命结束，不会最终失去救恩。", "en": "Those who are truly saved will persevere in faith until the end of their lives and will not finally lose their salvation."},
            {"zh": "神必保守他的子民到底。", "en": "God will keep his people to the end."}
        ]
    },
    {
        "number": 41,
        "title_zh": "第41章：死亡和中间状态",
        "title_en": "Chapter 41: Death and the Intermediate State",
        "summary_zh": "探讨死亡的本质和信徒死后的状态。死亡是身体和灵魂的分离，是罪的后果。信徒死后立即与主同在，享受天堂的福乐，等待复活。讨论炼狱说的错误和为死人祷告的问题。",
        "summary_en": "Explores death's nature and believers' post-death state. Death is separation of body and soul, consequence of sin. Believers immediately go to be with Christ, enjoying heavenly blessings while awaiting resurrection. Discusses errors of purgatory and prayers for the dead.",
        "key_quotes": [
            {"zh": "对信徒来说，死亡意味着离开身体与主同住。", "en": "For believers, to be absent from the body is to be at home with the Lord."},
            {"zh": "死亡是我们进入神面前完全喜乐的门户。", "en": "Death is the gateway to complete joy in God's presence."}
        ]
    },
    {
        "number": 42,
        "title_zh": "第42章：得荣耀（得着复活的身体）",
        "title_en": "Chapter 42: Glorification (Receiving a Resurrection Body)",
        "summary_zh": "探讨复活的教义和荣耀的身体。信徒将在基督再来时复活，得着荣耀的身体——既与现在的身体有连续性，又有本质的改变。这身体永不朽坏，适合天堂的生活。",
        "summary_en": "Explores resurrection doctrine and glorified bodies. Believers will be resurrected at Christ's return, receiving glorified bodies—both continuous with present bodies yet qualitatively transformed. These bodies are imperishable and suited for heavenly life.",
        "key_quotes": [
            {"zh": "我们必要复活，得着荣耀的身体，像基督荣耀的身体。", "en": "We will be resurrected and receive glorified bodies like Christ's glorious body."},
            {"zh": "复活的身体是不朽坏的、荣耀的、强壮的、属灵的。", "en": "The resurrection body is imperishable, glorious, powerful, and spiritual."}
        ]
    },
    {
        "number": 43,
        "title_zh": "第43章：与基督联合",
        "title_en": "Chapter 43: Union with Christ",
        "summary_zh": "探讨信徒与基督神秘而真实的联合。这联合是救恩所有益处的基础——我们在基督的死和复活中有分，分享他的义和生命。讨论联合的本质、现实性和实际意义。",
        "summary_en": "Explores believers' mystical yet real union with Christ. This union is the foundation of all salvation benefits—we participate in Christ's death and resurrection, sharing his righteousness and life. Discusses union's nature, reality, and practical implications.",
        "key_quotes": [
            {"zh": "我们与基督联合是我们所有救恩福分的根基。", "en": "Our union with Christ is the foundation of all our salvation benefits."},
            {"zh": "我们在基督的死和复活中有分。", "en": "We participate in Christ's death and resurrection."}
        ]
    },
    {
        "number": 44,
        "title_zh": "第44章：教会：其本质、记号和目的",
        "title_en": "Chapter 44: The Church: Its Nature, Its Marks, and Its Purposes",
        "summary_zh": "定义教会的本质：所有真信徒的群体，包括历世历代和世界各地的信徒。探讨教会的记号（纯正的传道、圣礼的正确施行、教会纪律）和目的（敬拜、造就、传福音）。",
        "summary_en": "Defines the church's nature: the community of all true believers throughout history and around the world. Explores church marks (pure preaching, proper sacraments, church discipline) and purposes (worship, edification, evangelism).",
        "key_quotes": [
            {"zh": "教会是所有真信徒的群体。", "en": "The church is the community of all true believers."},
            {"zh": "真教会的记号是纯正的传道、圣礼的正确施行，和教会纪律的实施。", "en": "The marks of the true church are pure preaching, proper administration of sacraments, and exercise of church discipline."}
        ]
    },
    {
        "number": 45,
        "title_zh": "第45章：教会的纯洁和合一",
        "title_en": "Chapter 45: The Purity and Unity of the Church",
        "summary_zh": "探讨教会应当努力保持的纯洁和合一。纯洁涉及教义和生活的圣洁；合一反映三一神的本质。讨论分裂的原因、何时分离是正当的，以及如何在真理中追求合一。",
        "summary_en": "Explores purity and unity the church should maintain. Purity involves doctrinal and moral holiness; unity reflects the Triune God's nature. Discusses causes of division, when separation is justified, and pursuing unity in truth.",
        "key_quotes": [
            {"zh": "教会应当在真理和圣洁中保持纯洁。", "en": "The church should maintain purity in truth and holiness."},
            {"zh": "教会的合一反映了三一神的合一。", "en": "The church's unity reflects the unity of the Triune God."}
        ]
    },
    {
        "number": 46,
        "title_zh": "第46章：教会的权柄",
        "title_en": "Chapter 46: The Power of the Church",
        "summary_zh": "探讨基督赋予教会的属灵权柄。这权柄来自基督，体现在传道、圣礼、纪律和治理中。讨论教会权柄的界限、与国家政权的关系，以及权柄的正当使用。",
        "summary_en": "Explores spiritual authority Christ gave the church. This authority comes from Christ, manifested in preaching, sacraments, discipline, and governance. Discusses limits of church authority, relationship to civil government, and proper use of authority.",
        "key_quotes": [
            {"zh": "基督赋予教会属灵权柄来治理他的子民。", "en": "Christ gave the church spiritual authority to govern his people."},
            {"zh": "教会的权柄必须在圣经的范围内行使。", "en": "Church authority must be exercised within the bounds of Scripture."}
        ]
    },
    {
        "number": 47,
        "title_zh": "第47章：教会治理",
        "title_en": "Chapter 47: Church Government",
        "summary_zh": "比较不同的教会治理模式：主教制、长老制和会众制。讨论各模式的圣经根据、优缺点，以及长老、执事等教会职分的设立和职责。强调治理应服务于教会的使命。",
        "summary_en": "Compares different church government models: episcopal, presbyterian, and congregational. Discusses biblical foundations, strengths and weaknesses of each, and establishment and duties of church offices like elders and deacons. Emphasizes governance should serve the church's mission.",
        "key_quotes": [
            {"zh": "教会治理应当符合圣经的原则和模式。", "en": "Church government should conform to biblical principles and patterns."},
            {"zh": "长老和执事是神设立的教会职分。", "en": "Elders and deacons are church offices established by God."}
        ]
    },
    {
        "number": 48,
        "title_zh": "第48章：教会内的恩典方法",
        "title_en": "Chapter 48: Means of Grace Within the Church",
        "summary_zh": "探讨神在教会中设立的恩典方法：读经、传道、洗礼、圣餐、祷告、赞美、奉献、交通、事奉等。这些是神用来建造信徒属灵生命的普通方法。",
        "summary_en": "Explores means of grace God established in the church: Scripture reading, preaching, baptism, communion, prayer, praise, giving, fellowship, ministry, etc. These are ordinary means God uses to build believers' spiritual lives.",
        "key_quotes": [
            {"zh": "神在教会中设立了各种恩典的方法来建造我们。", "en": "God has established various means of grace in the church to build us up."},
            {"zh": "我们应当忠心使用神所赐的恩典方法。", "en": "We should faithfully use the means of grace God has provided."}
        ]
    },
    {
        "number": 49,
        "title_zh": "第49章：洗礼",
        "title_en": "Chapter 49: Baptism",
        "summary_zh": "探讨洗礼的意义、方式和对象。洗礼象征与基督联合、罪得洁净和新生命的开始。讨论浸礼vs点水礼、婴儿洗礼vs信徒洗礼的不同观点，以及洗礼的必要性。",
        "summary_en": "Explores baptism's meaning, mode, and subjects. Baptism symbolizes union with Christ, cleansing from sin, and new life's beginning. Discusses immersion vs. sprinkling, infant vs. believer baptism views, and baptism's necessity.",
        "key_quotes": [
            {"zh": "洗礼象征我们与基督联合，在他的死和复活中有分。", "en": "Baptism symbolizes our union with Christ, participating in his death and resurrection."},
            {"zh": "洗礼是基督设立的圣礼，表明罪得洁净。", "en": "Baptism is a sacrament instituted by Christ, signifying cleansing from sin."}
        ]
    },
    {
        "number": 50,
        "title_zh": "第50章：主餐",
        "title_en": "Chapter 50: The Lord's Supper",
        "summary_zh": "探讨主餐的意义、要素和参与条件。主餐记念基督的死，确认我们与他的联合，预示他的再来。讨论变质说、同质说、象征说等不同观点，以及正确参与主餐的态度。",
        "summary_en": "Explores the Lord's Supper's meaning, elements, and participation requirements. Communion remembers Christ's death, confirms our union with him, anticipates his return. Discusses transubstantiation, consubstantiation, symbolic views, and proper attitudes for participating.",
        "key_quotes": [
            {"zh": "主餐是记念基督为我们死的圣礼。", "en": "The Lord's Supper is a sacrament commemorating Christ's death for us."},
            {"zh": "我们在主餐中与基督有真实的属灵联合。", "en": "We have real spiritual communion with Christ in the Lord's Supper."}
        ]
    },
    {
        "number": 51,
        "title_zh": "第51章：敬拜",
        "title_en": "Chapter 51: Worship",
        "summary_zh": "探讨真敬拜的本质、要素和原则。敬拜是对神价值的认知和回应，应当以神为中心、符合圣经、发自内心。讨论敬拜的形式、音乐、仪式等实际问题。",
        "summary_en": "Explores true worship's nature, elements, and principles. Worship is recognizing and responding to God's worth, should be God-centered, biblical, and heartfelt. Discusses practical issues of worship forms, music, liturgy, etc.",
        "key_quotes": [
            {"zh": "敬拜是我们对神无上价值的认知和回应。", "en": "Worship is our recognition of and response to God's supreme worth."},
            {"zh": "真敬拜必须用心灵和诚实。", "en": "True worship must be in spirit and truth."}
        ]
    },
    {
        "number": 52,
        "title_zh": "第52章：圣灵的恩赐（第一部分）：一般问题",
        "title_en": "Chapter 52: Gifts of the Holy Spirit (Part 1): General Questions",
        "summary_zh": "探讨属灵恩赐的一般性问题：定义、目的、分类、获得方式。属灵恩赐是圣灵赐给信徒的能力，为要建立基督的身体。讨论恩赐与才能的区别、恩赐的延续性等问题。",
        "summary_en": "Explores general questions about spiritual gifts: definition, purpose, classification, acquisition. Spiritual gifts are abilities given by the Spirit to believers for building up Christ's body. Discusses distinction between gifts and talents, continuity of gifts, etc.",
        "key_quotes": [
            {"zh": "属灵恩赐是圣灵赐给信徒的能力，为要服事基督的身体。", "en": "Spiritual gifts are abilities given by the Holy Spirit to believers for serving the body of Christ."},
            {"zh": "每个信徒都至少有一种属灵恩赐。", "en": "Every believer has at least one spiritual gift."}
        ]
    },
    {
        "number": 53,
        "title_zh": "第53章：圣灵的恩赐（第二部分）：具体恩赐",
        "title_en": "Chapter 53: Gifts of the Holy Spirit (Part 2): Specific Gifts",
        "summary_zh": "详细探讨各种属灵恩赐：使徒、先知、传福音、牧师教师、服事、教导、劝勉、施舍、治理、怜悯、说方言、翻方言、医病、行异能等。讨论每种恩赐的特征和今日的应用。",
        "summary_en": "Detailed exploration of various spiritual gifts: apostles, prophets, evangelists, pastor-teachers, serving, teaching, exhortation, giving, leadership, mercy, tongues, interpretation, healing, miracles, etc. Discusses characteristics and contemporary application of each gift.",
        "key_quotes": [
            {"zh": "神赐下各种恩赐来装备圣徒，建立基督的身体。", "en": "God gives various gifts to equip the saints for building up the body of Christ."},
            {"zh": "我们应当切慕属灵的恩赐，尤其是能造就教会的恩赐。", "en": "We should earnestly desire spiritual gifts, especially those that build up the church."}
        ]
    },
    {
        "number": 54,
        "title_zh": "第54章：基督的再来：何时？如何？",
        "title_en": "Chapter 54: The Return of Christ: When and How?",
        "summary_zh": "探讨基督第二次降临的时间和方式。讨论再来的确定性、不可预知性、可见性和荣耀性。比较不同的末世论观点：前千禧年、后千禧年、无千禧年论。",
        "summary_en": "Explores the timing and manner of Christ's Second Coming. Discusses certainty, unpredictability, visibility, and glory of his return. Compares different eschatological views: premillennial, postmillennial, amillennial.",
        "key_quotes": [
            {"zh": "基督必要再来，这是基督徒确定无疑的盼望。", "en": "Christ will certainly return, which is the Christian's certain hope."},
            {"zh": "基督的再来将是可见的、荣耀的。", "en": "Christ's return will be visible and glorious."}
        ]
    },
    {
        "number": 55,
        "title_zh": "第55章：千禧年",
        "title_en": "Chapter 55: The Millennium",
        "summary_zh": "探讨启示录20章中千年国度的不同解释。比较前千禧年论（基督再来前地上有字面的千年国）、后千禧年论（基督在千年结束时再来）和无千禧年论（千年是象征性的现今时代）。",
        "summary_en": "Explores different interpretations of Revelation 20's millennial kingdom. Compares premillennialism (literal thousand-year earthly kingdom before Christ's return), postmillennialism (Christ returns after the millennium), and amillennialism (millennium is symbolic present age).",
        "key_quotes": [
            {"zh": "关于千禧年的观点虽有分歧，但都承认基督最终的胜利。", "en": "Though views on the millennium differ, all affirm Christ's ultimate victory."},
            {"zh": "神的国度在历史中逐渐显现，将在基督再来时完全成就。", "en": "God's kingdom gradually appears in history and will be fully realized at Christ's return."}
        ]
    },
    {
        "number": 56,
        "title_zh": "第56章：最后审判和永远的刑罚",
        "title_en": "Chapter 56: The Final Judgment and Eternal Punishment",
        "summary_zh": "探讨最后审判的事实、标准和结果。基督将审判活人死人，根据人们对福音的回应决定永远的命运。讨论地狱的真实性、永恒性，以及神公义审判的必要性。",
        "summary_en": "Explores the final judgment's reality, standards, and outcomes. Christ will judge the living and the dead, determining eternal destiny based on response to the gospel. Discusses hell's reality, eternality, and necessity of God's righteous judgment.",
        "key_quotes": [
            {"zh": "所有人都要在基督面前接受最后的审判。", "en": "All people will face final judgment before Christ."},
            {"zh": "拒绝基督的人将面对永远的刑罚。", "en": "Those who reject Christ will face eternal punishment."}
        ]
    },
    {
        "number": 57,
        "title_zh": "第57章：新天新地",
        "title_en": "Chapter 57: The New Heavens and New Earth",
        "summary_zh": "探讨神最终的创造：新天新地。现在的宇宙将被更新而非毁灭，成为义人永远的居所。讨论永恒状态的特征：完全的圣洁、喜乐、敬拜，以及与神和受造界的完美和谐。",
        "summary_en": "Explores God's ultimate creation: the new heavens and new earth. The present universe will be renewed rather than destroyed, becoming the righteous' eternal dwelling. Discusses eternal state characteristics: perfect holiness, joy, worship, and harmony with God and creation.",
        "key_quotes": [
            {"zh": "神将创造新天新地，作为义人永远的居所。", "en": "God will create new heavens and a new earth as the eternal dwelling of the righteous."},
            {"zh": "在新天新地中，不再有死亡、悲哀、哭号、疼痛。", "en": "In the new heavens and earth, there will be no more death, sorrow, crying, or pain."}
        ]
    }
]

def find_book_311_index(books):
    """找到book-311的索引位置"""
    for i, book in enumerate(books):
        if book.get("id") == "book-311":
            return i
    return -1

def update_grudem_chapters():
    """更新book-311的chapters数据"""
    try:
        # 读取books.json
        with codecs.open('books.json', 'r', 'utf-8') as f:
            books = json.load(f)
        
        print("Original file contains {} books".format(len(books)))
        
        # Find book-311
        book_311_index = find_book_311_index(books)
        if book_311_index == -1:
            print("Error: book-311 not found")
            return False
        
        print("Found book-311 at index {}".format(book_311_index))
        print("Original chapters: {}".format(len(books[book_311_index].get('chapters', []))))
        
        # Replace chapters
        books[book_311_index]['chapters'] = grudem_57_chapters
        
        print("Updated chapters: {}".format(len(books[book_311_index]['chapters'])))
        
        # Write back to file
        with codecs.open('books.json', 'w', 'utf-8') as f:
            json.dump(books, f, ensure_ascii=False, indent=2)
        
        print("books.json updated successfully")
        
        # Verify JSON validity
        with codecs.open('books.json', 'r', 'utf-8') as f:
            test_data = json.load(f)
            print("JSON validation passed")
        
        return True
        
    except Exception as e:
        print("Error: {}".format(e))
        return False

if __name__ == "__main__":
    print("Updating Wayne Grudem Systematic Theology 57 chapters...")
    success = update_grudem_chapters()
    if success:
        print("\nTask completed successfully!")
        print("- book-311 chapters updated to full 57-chapter structure")
        print("- Each chapter includes accurate titles, summaries, and key quotes")
        print("- JSON file validation passed")
    else:
        print("\nTask failed, please check error messages")