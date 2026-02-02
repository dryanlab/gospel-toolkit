import json

questions = [
{
"id":"wlc_001","catechism":"westminster_larger","number":1,
"question_en":"What is the chief and highest end of man?",
"question_zh":"人最重要、最崇高的目的是什么？",
"answer_en":"Man's chief and highest end is to glorify God, and fully to enjoy him forever.",
"answer_zh":"人最重要、最崇高的目的就是荣耀神，永远完全以祂为乐。",
"proof_texts":["Romans 11:36","1 Corinthians 10:31","Psalm 73:24-28"],
"notes_en":"This opening question establishes the fundamental purpose of human existence: to glorify God and enjoy Him eternally.",
"notes_zh":"这一开篇问题确立了人类存在的根本目的：荣耀神，永远以祂为乐。"
},
{
"id":"wlc_002","catechism":"westminster_larger","number":2,
"question_en":"How doth it appear that there is a God?",
"question_zh":"神的存在是如何显明的？",
"answer_en":"The very light of nature in man, and the works of God, declare plainly that there is a God; but his Word and Spirit only do sufficiently and effectually reveal him unto men for their salvation.",
"answer_zh":"人里面的自然之光和神的作为都清楚地宣告神的存在；但唯有祂的话语和圣灵才能充分有效地向人启示祂，使人得救。",
"proof_texts":["Romans 1:19-20","Psalm 19:1-3","Acts 17:28","1 Corinthians 2:9-10"],
"notes_en":"General revelation shows God exists, but special revelation through Word and Spirit is needed for saving knowledge.",
"notes_zh":"普遍启示显明神的存在，但要获得救恩的知识，需要借着话语和圣灵的特殊启示。"
},
{
"id":"wlc_003","catechism":"westminster_larger","number":3,
"question_en":"What is the Word of God?",
"question_zh":"什么是神的话语？",
"answer_en":"The Holy Scriptures of the Old and New Testament are the Word of God, the only rule of faith and obedience.",
"answer_zh":"新旧约圣经就是神的话语，是信仰和行为的唯一准则。",
"proof_texts":["2 Timothy 3:16","2 Peter 1:19-21","Isaiah 8:20"],
"notes_en":"Scripture alone is the authoritative Word of God, serving as the only infallible rule for what we believe and how we live.",
"notes_zh":"唯独圣经是神权威的话语，是我们信仰和生活唯一无误的准则。"
},
{
"id":"wlc_004","catechism":"westminster_larger","number":4,
"question_en":"How doth it appear that the Scriptures are the Word of God?",
"question_zh":"如何证明圣经是神的话语？",
"answer_en":"The Scriptures manifest themselves to be the Word of God, by their majesty and purity; by the consent of all the parts, and the scope of the whole, which is to give all glory to God; by their light and power to convince and convert sinners, to comfort and build up believers unto salvation: but the Spirit of God bearing witness by and with the Scriptures in the heart of man, is alone able fully to persuade it that they are the very Word of God.",
"answer_zh":"圣经以其庄严与纯洁，各部分的一致性，以及全书以将一切荣耀归给神为宗旨，并以其光照和能力使罪人知罪归正，安慰并建立信徒以致得救，来证明自己是神的话语；但唯有神的灵在人心中借着圣经并与圣经一同作见证，才能完全说服人相信圣经确实是神的话语。",
"proof_texts":["1 Corinthians 2:6-7","Psalm 119:18,129","Acts 10:43","John 16:13-14","1 John 2:20,27"],
"notes_en":"While many evidences point to Scripture's divine origin, ultimately only the internal testimony of the Holy Spirit can fully persuade the heart.",
"notes_zh":"虽然有许多证据指向圣经的神圣来源，但最终只有圣灵内在的见证才能完全说服人心。"
},
{
"id":"wlc_005","catechism":"westminster_larger","number":5,
"question_en":"What do the Scriptures principally teach?",
"question_zh":"圣经主要教导什么？",
"answer_en":"The Scriptures principally teach, what man is to believe concerning God, and what duty God requires of man.",
"answer_zh":"圣经主要教导人当信关于神的事，以及神要求人当尽的本分。",
"proof_texts":["2 Timothy 1:13","2 Timothy 3:15-16","Micah 6:8"],
"notes_en":"The entire Bible can be summarized under two headings: what we believe (doctrine) and what we do (duty).",
"notes_zh":"整本圣经可以概括为两个方面：我们当信什么（教义）和我们当行什么（本分）。"
},
{
"id":"wlc_006","catechism":"westminster_larger","number":6,
"question_en":"What do the Scriptures make known of God?",
"question_zh":"关于神，圣经教导我们认识什么？",
"answer_en":"The Scriptures make known what God is, the persons in the Godhead, his decrees, and the execution of his decrees.",
"answer_zh":"圣经教导我们认识神是怎样的，神的位格，祂的预旨，以及祂预旨的执行。",
"proof_texts":["Hebrews 11:6","1 John 5:7","Acts 15:14-15,18","Ephesians 1:11"],
"notes_en":"Scripture reveals God's nature, the Trinity, His eternal decrees, and how those decrees unfold in creation and redemption.",
"notes_zh":"圣经启示神的本性、三位一体、祂永恒的预旨，以及这些预旨如何在创造和救赎中展开。"
},
{
"id":"wlc_007","catechism":"westminster_larger","number":7,
"question_en":"What is God?",
"question_zh":"神是怎样的？",
"answer_en":"God is a Spirit, in and of himself infinite in being, glory, blessedness, and perfection; all-sufficient, eternal, unchangeable, incomprehensible, everywhere present, almighty, knowing all things, most wise, most holy, most just, most merciful and gracious, long-suffering, and abundant in goodness and truth.",
"answer_zh":"神是个灵，其存有、荣耀、福乐和完美都是无限的；祂是自存自足的，永恒的，不变的，不可测度的，无处不在的，全能的，全知的，最有智慧的，最圣洁的，最公义的，最有怜悯和恩慈的，恒久忍耐的，充满良善和信实的。",
"proof_texts":["John 4:24","Exodus 3:14","Psalm 115:2-3","1 Timothy 6:15","Exodus 34:6-7"],
"notes_en":"This majestic description of God's attributes reminds us that He is infinitely beyond our comprehension yet has revealed Himself to us.",
"notes_zh":"对神属性的这一庄严描述提醒我们，祂无限超越我们的理解，却已向我们启示了自己。"
},
{
"id":"wlc_008","catechism":"westminster_larger","number":8,
"question_en":"Are there more Gods than one?",
"question_zh":"神是否不止一位？",
"answer_en":"There is but one only, the living and true God.",
"answer_zh":"只有一位又真又活的神。",
"proof_texts":["Deuteronomy 6:4","1 Corinthians 8:4,6","Jeremiah 10:10"],
"notes_en":"Monotheism is a foundational truth: there is only one living and true God.",
"notes_zh":"一神论是基要真理：只有一位又真又活的神。"
},
{
"id":"wlc_009","catechism":"westminster_larger","number":9,
"question_en":"How many persons are there in the Godhead?",
"question_zh":"神有几个位格？",
"answer_en":"There be three persons in the Godhead, the Father, the Son, and the Holy Ghost; and these three are one true, eternal God, the same in substance, equal in power and glory; although distinguished by their personal properties.",
"answer_zh":"神有三个位格，就是圣父、圣子、圣灵；这三位是一位真实、永恒的神，同质、同权、同荣，但以其位格属性而有分别。",
"proof_texts":["Matthew 28:19","2 Corinthians 13:14","John 10:30","Philippians 2:6"],
"notes_en":"The doctrine of the Trinity confesses one God in three persons, equal in essence yet distinct in their personal relations.",
"notes_zh":"三位一体教义承认一位神有三个位格，本质相同但位格关系有别。"
},
{
"id":"wlc_010","catechism":"westminster_larger","number":10,
"question_en":"What are the personal properties of the three persons in the Godhead?",
"question_zh":"神的三个位格各有什么位格属性？",
"answer_en":"It is proper to the Father to beget the Son, and to the Son to be begotten of the Father, and to the Holy Ghost to proceed from the Father and the Son from all eternity.",
"answer_zh":"圣父的位格属性在于从永恒中生圣子，圣子的位格属性在于从永恒中为圣父所生，圣灵的位格属性在于从永恒中从圣父和圣子而出。",
"proof_texts":["Hebrews 1:5-6","John 1:14,18","John 15:26","Galatians 4:6"],
"notes_en":"The three persons are distinguished by their eternal relations: the Father begets, the Son is begotten, and the Spirit proceeds.",
"notes_zh":"三个位格以其永恒关系来区分：圣父生，圣子受生，圣灵发出。"
},
{
"id":"wlc_011","catechism":"westminster_larger","number":11,
"question_en":"How doth it appear that the Son and the Holy Ghost are God equal with the Father?",
"question_zh":"如何证明圣子和圣灵是与圣父同等的神？",
"answer_en":"The Scriptures manifest that the Son and the Holy Ghost are God equal with the Father, ascribing unto them such names, attributes, works, and worship, as are proper to God only.",
"answer_zh":"圣经将只有神才配有的名字、属性、作为和敬拜归给圣子和圣灵，以此证明圣子和圣灵是与圣父同等的神。",
"proof_texts":["Isaiah 6:3,5,8 cf. John 12:41 and Acts 28:25","1 John 5:20","Acts 5:3-4","Matthew 28:19"],
"notes_en":"The full deity of the Son and Spirit is proven by Scripture ascribing to them divine names, attributes, works, and worship.",
"notes_zh":"圣经将神的名字、属性、作为和敬拜归给圣子和圣灵，证明祂们完全的神性。"
},
{
"id":"wlc_012","catechism":"westminster_larger","number":12,
"question_en":"What are the decrees of God?",
"question_zh":"什么是神的预旨？",
"answer_en":"God's decrees are the wise, free, and holy acts of the counsel of his will, whereby, from all eternity, he hath, for his own glory, unchangeably foreordained whatsoever comes to pass in time, especially concerning angels and men.",
"answer_zh":"神的预旨是祂按自己旨意的筹算所定的智慧、自由、圣洁的作为，从永恒中为了自己的荣耀，不变地预定了在时间中所发生的一切事，特别是关于天使和世人的。",
"proof_texts":["Ephesians 1:11","Romans 9:14-15,18","Ephesians 1:4","Romans 9:22-23"],
"notes_en":"God's eternal decrees encompass all events, flowing from His wise, free, and holy counsel for His own glory.",
"notes_zh":"神的永恒预旨涵盖一切事件，出自祂智慧、自由、圣洁的旨意，为了祂自己的荣耀。"
},
{
"id":"wlc_013","catechism":"westminster_larger","number":13,
"question_en":"What hath God especially decreed concerning angels and men?",
"question_zh":"关于天使和世人，神特别预定了什么？",
"answer_en":"God, by an eternal and immutable decree, out of his mere love, for the praise of his glorious grace, to be manifested in due time, hath elected some angels to glory; and in Christ hath chosen some men to eternal life, and the means thereof: and also, according to his sovereign power, and the unsearchable counsel of his own will (whereby he extendeth or withholdeth favor as he pleaseth), hath passed by and foreordained the rest to dishonor and wrath, to be for their sin inflicted, to the praise of the glory of his justice.",
"answer_zh":"神以永恒、不变的预旨，出于祂白白的爱，为了赞美祂荣耀的恩典，在适当的时候显明出来，已经拣选了一些天使得荣耀；并且在基督里拣选了一些人得永生，也预定了使他们得永生的途径。同时，按照祂主权的能力和祂自己旨意不可测度的筹算（祂随己意施恩或不施恩），越过其余的，预定他们因自己的罪受羞辱和忿怒，好彰显祂公义的荣耀。",
"proof_texts":["1 Timothy 5:21","Ephesians 1:4-6","Romans 9:17-18,21-22","Jude 1:4"],
"notes_en":"God has sovereignly elected some to glory and passed by others, all for the display of His grace and justice.",
"notes_zh":"神主权地拣选一些人得荣耀，越过其余的人，都是为了彰显祂的恩典和公义。"
},
{
"id":"wlc_014","catechism":"westminster_larger","number":14,
"question_en":"How doth God execute his decrees?",
"question_zh":"神如何执行祂的预旨？",
"answer_en":"God executeth his decrees in the works of creation and providence, according to his infallible foreknowledge, and the free and immutable counsel of his own will.",
"answer_zh":"神按照祂无误的预知和祂自己旨意自由、不变的筹算，在创造和护理之工中执行祂的预旨。",
"proof_texts":["Ephesians 1:11","Acts 4:27-28","Psalm 148:8","Daniel 4:35"],
"notes_en":"God carries out His eternal plan through the works of creation and providence.",
"notes_zh":"神通过创造和护理之工来执行祂的永恒计划。"
},
{
"id":"wlc_015","catechism":"westminster_larger","number":15,
"question_en":"What is the work of creation?",
"question_zh":"什么是创造之工？",
"answer_en":"The work of creation is that wherein God did in the beginning, by the word of his power, make of nothing the world, and all things therein, for himself, within the space of six days, and all very good.",
"answer_zh":"创造之工是指神在起初用祂大能的话语，在六日之内，从无中造出世界和其中的万物，都是为了祂自己，而且一切都甚好。",
"proof_texts":["Genesis 1:1-31","Hebrews 11:3","Proverbs 16:4","Colossians 1:16"],
"notes_en":"God created everything from nothing by His powerful word in six days, and declared it all very good.",
"notes_zh":"神用祂大能的话语在六日之内从无中创造了万物，宣告一切都甚好。"
},
{
"id":"wlc_016","catechism":"westminster_larger","number":16,
"question_en":"How did God create angels?",
"question_zh":"神是如何创造天使的？",
"answer_en":"God created all the angels spirits, immortal, holy, excelling in knowledge, mighty in power, to execute his commandments, and to praise his name, yet subject to change.",
"answer_zh":"神将一切天使造成灵体，不朽、圣洁、知识超群、能力强大，执行祂的命令，赞美祂的名；但他们也是可变的。",
"proof_texts":["Colossians 1:16","Psalm 104:4","Matthew 22:30","2 Peter 2:4","Psalm 103:20-21"],
"notes_en":"Angels are powerful spiritual beings created holy but with the possibility of falling, as some did.",
"notes_zh":"天使是大能的灵体，被造时是圣洁的，但有堕落的可能，正如一些天使已经堕落了。"
},
{
"id":"wlc_017","catechism":"westminster_larger","number":17,
"question_en":"How did God create man?",
"question_zh":"神是如何创造人的？",
"answer_en":"After God had made all other creatures, he created man male and female; formed the body of the man of the dust of the ground, and the woman of the rib of the man, endued them with living, reasonable, and immortal souls; made them after his own image, in knowledge, righteousness, and holiness; having the law of God written in their hearts, and power to fulfill it, and dominion over the creatures; yet subject to fall.",
"answer_zh":"神造了其他一切受造物之后，造了人，有男有女；用地上的尘土造了男人的身体，用男人的肋骨造了女人，赋予他们活的、有理性的、不朽的灵魂；按照自己的形像造他们，有知识、公义和圣洁；使他们心里有神的律法，有能力遵行，又有管理万物的权柄；但他们也是可能堕落的。",
"proof_texts":["Genesis 1:27","Genesis 2:7,22","Genesis 1:28","Ecclesiastes 7:29","Colossians 3:10","Ephesians 4:24"],
"notes_en":"Humanity was created in God's image with true knowledge, righteousness, and holiness, yet with the possibility of falling.",
"notes_zh":"人按照神的形像被造，有真知识、公义和圣洁，但也有堕落的可能。"
},
{
"id":"wlc_018","catechism":"westminster_larger","number":18,
"question_en":"What are God's works of providence?",
"question_zh":"什么是神的护理之工？",
"answer_en":"God's works of providence are his most holy, wise, and powerful preserving and governing all his creatures; ordering them, and all their actions, to his own glory.",
"answer_zh":"神的护理之工是指祂以最圣洁、最智慧、最大能的方式保守和管理祂一切受造物，安排他们和他们一切的行动，使之成就祂自己的荣耀。",
"proof_texts":["Psalm 145:17","Psalm 104:24","Hebrews 1:3","Matthew 10:29-31","Ephesians 1:11"],
"notes_en":"Providence means God continually upholds, directs, and governs all creatures and events for His glory.",
"notes_zh":"护理是指神持续地托住、引导和管理一切受造物和事件，为了祂的荣耀。"
},
{
"id":"wlc_019","catechism":"westminster_larger","number":19,
"question_en":"What is God's providence towards the angels?",
"question_zh":"神对天使的护理是什么？",
"answer_en":"God by his providence permitted some of the angels, willfully and irrecoverably, to fall into sin and damnation, limiting and ordering that, and all their sins, to his own glory; and established the rest in holiness and happiness, employing them all, at his pleasure, in the administrations of his power, mercy, and justice.",
"answer_zh":"神借着祂的护理，容许一些天使自愿地、不可挽回地堕入罪和咒诅中，限制和安排他们以及他们一切的罪，好成就祂自己的荣耀；又坚立其余的天使在圣洁和幸福中，随自己的美意使用他们来执行祂的能力、怜悯和公义。",
"proof_texts":["Jude 1:6","2 Peter 2:4","Hebrews 1:14","Mark 8:38","1 Timothy 5:21"],
"notes_en":"God's providence over angels includes permitting some to fall and confirming others in holiness for His service.",
"notes_zh":"神对天使的护理包括容许一些堕落，又坚立其余的在圣洁中为祂效力。"
},
{
"id":"wlc_020","catechism":"westminster_larger","number":20,
"question_en":"What was the providence of God toward man in the estate in which he was created?",
"question_zh":"神对被造时的人的护理是什么？",
"answer_en":"The providence of God toward man in the estate in which he was created, was the placing him in the garden of Eden, appointing him to dress it, giving him liberty to eat of the fruit of the earth; putting the creatures under his dominion, and ordaining marriage for his help; affording him communion with himself; instituting the Sabbath; entering into a covenant of life with him, upon condition of personal, perfect, and perpetual obedience, of which the tree of life was a pledge; and forbidding to eat of the tree of the knowledge of good and evil, upon the pain of death.",
"answer_zh":"神对被造时的人的护理，是将他安置在伊甸园中，派他修理看守，准他自由吃地上各样的果子，使万物服在他的管辖之下，设立婚姻来帮助他；赐他与自己交通的福分；设立安息日；与他立生命之约，以他个人完全、持续的顺服为条件，生命树就是这约的质证；又禁止他吃分别善恶树的果子，违背的刑罚是死。",
"proof_texts":["Genesis 2:8,15-17","Genesis 1:28","Genesis 2:18","Genesis 2:3","Galatians 3:12","Romans 10:5"],
"notes_en":"God placed Adam under a covenant of works, promising life for perfect obedience and threatening death for disobedience.",
"notes_zh":"神将亚当置于行为之约下，以完全的顺服为生命的条件，以违背为死亡的刑罚。"
},
{
"id":"wlc_021","catechism":"westminster_larger","number":21,
"question_en":"Did man continue in that estate wherein God at first created him?",
"question_zh":"人是否仍然保持在神起初造他时的状况中？",
"answer_en":"Our first parents being left to the freedom of their own will, through the temptation of Satan, transgressed the commandment of God in eating the forbidden fruit; and thereby fell from the estate of innocency wherein they were created.",
"answer_zh":"我们的始祖被任凭自己意志的自由，受魔鬼的试探，违背了神的命令，吃了禁果；因此从他们被造时的无罪状态中堕落了。",
"proof_texts":["Genesis 3:6-8,13","Ecclesiastes 7:29","2 Corinthians 11:3"],
"notes_en":"Adam and Eve, though created good, freely chose to disobey God and fell from their original innocence.",
"notes_zh":"亚当和夏娃虽然被造时是好的，却自由选择违背神，从原初的无罪状态堕落了。"
},
{
"id":"wlc_022","catechism":"westminster_larger","number":22,
"question_en":"Did all mankind fall in that first transgression?",
"question_zh":"全人类都在始祖的第一次犯罪中堕落了吗？",
"answer_en":"The covenant being made with Adam as a public person, not for himself only, but for his posterity, all mankind descending from him by ordinary generation, sinned in him, and fell with him in that first transgression.",
"answer_zh":"这约既是与亚当作为公众代表人所立的，不仅是为他自己，也是为他的后裔，所以凡按常例从他而生的全人类，都在他里面犯了罪，都与他一同在那第一次的犯罪中堕落了。",
"proof_texts":["Acts 17:26","Romans 5:12-20","1 Corinthians 15:21-22"],
"notes_en":"Adam acted as the federal head of all humanity, so his sin and fall are imputed to all his descendants.",
"notes_zh":"亚当作为全人类的盟约代表，他的罪和堕落归算给他所有的后裔。"
},
{
"id":"wlc_023","catechism":"westminster_larger","number":23,
"question_en":"Into what estate did the fall bring mankind?",
"question_zh":"堕落使人类陷入了怎样的境况？",
"answer_en":"The fall brought mankind into an estate of sin and misery.",
"answer_zh":"堕落使人类陷入了罪恶和愁苦的境况中。",
"proof_texts":["Romans 5:12","Romans 3:23","Genesis 3:16-19"],
"notes_en":"The fall plunged all humanity into a state of sin and misery from which we cannot deliver ourselves.",
"notes_zh":"堕落使全人类陷入罪恶和愁苦的境况中，我们无法自救。"
},
{
"id":"wlc_024","catechism":"westminster_larger","number":24,
"question_en":"What is sin?",
"question_zh":"什么是罪？",
"answer_en":"Sin is any want of conformity unto, or transgression of, any law of God, given as a rule to the reasonable creature.",
"answer_zh":"罪是不遵守或违犯神赐给理性受造物作为准则的律法。",
"proof_texts":["1 John 3:4","Romans 3:20","James 2:10","Galatians 3:10,12"],
"notes_en":"Sin is defined as any failure to conform to or any transgression of God's law.",
"notes_zh":"罪的定义是不遵守或违犯神的律法。"
},
{
"id":"wlc_025","catechism":"westminster_larger","number":25,
"question_en":"Wherein consisteth the sinfulness of that estate whereinto man fell?",
"question_zh":"人所堕入的罪恶境况何在？",
"answer_en":"The sinfulness of that estate whereinto man fell, consisteth in the guilt of Adam's first sin, the want of that righteousness wherein he was created, and the corruption of his nature, whereby he is utterly indisposed, disabled, and made opposite unto all that is spiritually good, and wholly inclined to all evil, and that continually; which is commonly called original sin, and from which do proceed all actual transgressions.",
"answer_zh":"人所堕入的罪恶境况在于亚当第一次犯罪的罪咎，在他被造时所有的公义的丧失，以及本性的败坏，由此他完全不能行、不会行、也厌恶一切属灵的善，全然倾向于一切罪恶，而且不断如此；这通常被称为原罪，一切实际的罪行都是从原罪而来的。",
"proof_texts":["Romans 5:12,19","Romans 3:10-19","Ephesians 2:1-3","James 1:14-15","Romans 7:18"],
"notes_en":"Original sin includes Adam's guilt imputed to us, loss of original righteousness, and total corruption of our nature.",
"notes_zh":"原罪包括亚当的罪咎归算给我们、原始公义的丧失，以及我们本性的全然败坏。"
},
{
"id":"wlc_026","catechism":"westminster_larger","number":26,
"question_en":"How is original sin conveyed from our first parents unto their posterity?",
"question_zh":"原罪是如何从我们的始祖传给后裔的？",
"answer_en":"Original sin is conveyed from our first parents unto their posterity by natural generation, so as all that proceed from them in that way are conceived and born in sin.",
"answer_zh":"原罪借着自然的生育从我们的始祖传给后裔，以致凡从他们按此方式所生的，都是在罪中受孕、在罪中出生的。",
"proof_texts":["Psalm 51:5","Job 14:4","John 3:6","Romans 5:12"],
"notes_en":"Original sin passes to all through natural generation; every person is conceived and born in sin.",
"notes_zh":"原罪通过自然生育传给所有人；每个人都是在罪中受孕和出生的。"
},
{
"id":"wlc_027","catechism":"westminster_larger","number":27,
"question_en":"What misery did the fall bring upon mankind?",
"question_zh":"堕落给人类带来了什么愁苦？",
"answer_en":"The fall brought upon mankind the loss of communion with God, his displeasure and curse; so as we are by nature children of wrath, bond slaves to Satan, and justly liable to all punishments in this world, and that which is to come.",
"answer_zh":"堕落使人类失去与神的交通，遭受祂的不悦和咒诅；以致我们生来就是可怒之子，是撒但的奴隶，理当受今世和来世的一切刑罚。",
"proof_texts":["Genesis 3:8,10,24","Ephesians 2:2-3","2 Timothy 2:26","Romans 6:23","Matthew 25:41,46"],
"notes_en":"The fall resulted in spiritual death, bondage to Satan, and liability to both temporal and eternal punishment.",
"notes_zh":"堕落导致灵性的死亡、受撒但的捆绑，以及今世和永恒的刑罚。"
},
{
"id":"wlc_028","catechism":"westminster_larger","number":28,
"question_en":"What are the punishments of sin in this world?",
"question_zh":"今世罪的刑罚是什么？",
"answer_en":"The punishments of sin in this world are either inward, as blindness of mind, a reprobate sense, strong delusions, hardness of heart, horror of conscience, and vile affections; or outward, as the curse of God upon the creatures for our sakes, and all other evils that befall us in our bodies, names, estates, relations, and employments; together with death itself.",
"answer_zh":"今世罪的刑罚有内在的，如心智的瞎眼、邪僻的心思、强烈的迷惑、心里刚硬、良心的恐惧和卑劣的私欲；也有外在的，如神因我们的缘故降在受造物身上的咒诅，以及我们在身体、名誉、财产、关系和工作上所遭遇的一切患难，还有死亡本身。",
"proof_texts":["Ephesians 4:18","Romans 1:28","2 Thessalonians 2:11","Romans 1:26","Genesis 3:17","Romans 6:21,23"],
"notes_en":"Sin brings both inward miseries of soul and outward afflictions in this present life, culminating in death.",
"notes_zh":"罪在今世带来灵魂内在的愁苦和外在的苦难，以死亡为终点。"
},
{
"id":"wlc_029","catechism":"westminster_larger","number":29,
"question_en":"What are the punishments of sin in the world to come?",
"question_zh":"来世罪的刑罚是什么？",
"answer_en":"The punishments of sin in the world to come, are everlasting separation from the comfortable presence of God, and most grievous torments in soul and body, without intermission, in hell fire forever.",
"answer_zh":"来世罪的刑罚是永远与神安慰人的同在隔绝，在地狱之火中身体和灵魂遭受最惨烈的痛苦，永无止息。",
"proof_texts":["2 Thessalonians 1:9","Mark 9:43-44,48","Luke 16:24","Matthew 25:41,46"],
"notes_en":"The eternal punishment of sin is everlasting separation from God and unceasing torment in hell.",
"notes_zh":"罪的永恒刑罚是永远与神隔绝，在地狱中受无尽的痛苦。"
},
{
"id":"wlc_030","catechism":"westminster_larger","number":30,
"question_en":"Doth God leave all mankind to perish in the estate of sin and misery?",
"question_zh":"神是否任凭全人类在罪恶和愁苦中灭亡？",
"answer_en":"God doth not leave all mankind to perish in the estate of sin and misery, into which they fell by the breach of the first covenant, commonly called the covenant of works; but of his mere love and mercy delivereth his elect out of it, and bringeth them into an estate of salvation by the second covenant, commonly called the covenant of grace.",
"answer_zh":"神并非任凭全人类在因违背第一个约（通常称为行为之约）而陷入的罪恶和愁苦中灭亡，而是出于祂白白的爱和怜悯，将祂的选民从中拯救出来，借第二个约（通常称为恩典之约）带领他们进入得救的境况。",
"proof_texts":["1 Thessalonians 5:9","Titus 3:4-7","Titus 1:2","Romans 3:20-22","Acts 13:48"],
"notes_en":"God graciously delivers His elect from sin and misery through the covenant of grace.",
"notes_zh":"神恩慈地借恩典之约将祂的选民从罪恶和愁苦中拯救出来。"
},
{
"id":"wlc_031","catechism":"westminster_larger","number":31,
"question_en":"With whom was the covenant of grace made?",
"question_zh":"恩典之约是与谁立的？",
"answer_en":"The covenant of grace was made with Christ as the second Adam, and in him with all the elect as his seed.",
"answer_zh":"恩典之约是与基督作为第二个亚当立的，在基督里与所有选民作为祂的后裔立的。",
"proof_texts":["Galatians 3:16","Romans 5:15-21","Isaiah 53:10-11"],
"notes_en":"Christ is the mediator and head of the covenant of grace, representing all the elect as the second Adam.",
"notes_zh":"基督是恩典之约的中保和元首，作为第二个亚当代表所有选民。"
},
{
"id":"wlc_032","catechism":"westminster_larger","number":32,
"question_en":"How is the grace of God manifested in the second covenant?",
"question_zh":"神的恩典在第二个约中如何彰显？",
"answer_en":"The grace of God is manifested in the second covenant, in that he freely provideth and offereth to sinners a Mediator, and life and salvation by him; and requiring faith as the condition to interest them in him, promiseth and giveth his Holy Spirit to all his elect, to work in them that faith, with all other saving graces; and to enable them unto all holy obedience, as the evidence of the truth of their faith and thankfulness to God, and as the way which he hath appointed them to salvation.",
"answer_zh":"神的恩典在第二个约中如此彰显：祂白白地为罪人预备并提供一位中保，以及借着中保而来的生命和救恩；以信心为使他们有份于中保的条件，应许并将祂的圣灵赐给所有选民，在他们里面产生信心和其他一切救恩之恩典；并使他们能够行一切圣洁的顺服，作为他们信心的真实和对神感恩的明证，也作为神所指定的他们到达救恩的道路。",
"proof_texts":["Genesis 3:15","Isaiah 55:4-5","John 3:16","Galatians 3:13-14","2 Corinthians 4:13","Ephesians 2:8-10"],
"notes_en":"In the covenant of grace, God freely provides a Mediator, grants faith by His Spirit, and enables holy obedience.",
"notes_zh":"在恩典之约中，神白白地提供中保，借圣灵赐下信心，并使人能行圣洁的顺服。"
},
{
"id":"wlc_033","catechism":"westminster_larger","number":33,
"question_en":"Was the covenant of grace always administered after one and the same manner?",
"question_zh":"恩典之约是否一直以同一方式施行？",
"answer_en":"The covenant of grace was not always administered after the same manner, but the administrations of it under the Old Testament were different from those under the New.",
"answer_zh":"恩典之约并非一直以同一方式施行，它在旧约时代的施行方式与新约时代不同。",
"proof_texts":["2 Corinthians 3:6-9","Hebrews 1:1-2","Galatians 3:23-24"],
"notes_en":"Though the covenant of grace is one in substance, its administration differed between the Old and New Testaments.",
"notes_zh":"恩典之约虽然本质上是一个，但在新旧约时代的施行方式不同。"
},
{
"id":"wlc_034","catechism":"westminster_larger","number":34,
"question_en":"How was the covenant of grace administered under the Old Testament?",
"question_zh":"恩典之约在旧约时代是如何施行的？",
"answer_en":"The covenant of grace was administered under the Old Testament, by promises, prophecies, sacrifices, circumcision, the passover, and other types and ordinances, which did all foresignify Christ then to come, and were for that time sufficient to build up the elect in faith in the promised Messiah, by whom they then had full remission of sin, and eternal salvation.",
"answer_zh":"恩典之约在旧约时代借着应许、预言、祭祀、割礼、逾越节和其他预表与典章来施行，这一切都预示将要来的基督，在当时足以建立选民对所应许之弥赛亚的信心，他们借着弥赛亚得到了完全的赦罪和永远的救恩。",
"proof_texts":["Romans 15:8","Acts 3:20,24","Hebrews 10:1","Romans 4:11","1 Corinthians 5:7","Hebrews 8-10"],
"notes_en":"Under the Old Testament, the covenant of grace operated through types, shadows, and promises pointing to Christ.",
"notes_zh":"在旧约时代，恩典之约通过指向基督的预表、影子和应许来施行。"
},
{
"id":"wlc_035","catechism":"westminster_larger","number":35,
"question_en":"How is the covenant of grace administered under the New Testament?",
"question_zh":"恩典之约在新约时代是如何施行的？",
"answer_en":"Under the New Testament, when Christ the substance was exhibited, the same covenant of grace was and still is to be administered in the preaching of the Word, and the administration of the sacraments of Baptism and the Lord's Supper; in which grace and salvation are held forth in more fullness, evidence, and efficacy, to all nations.",
"answer_zh":"在新约时代，当基督这一实体已经显现，同一恩典之约过去是、现在仍然是借着传讲圣道和施行洗礼与主餐两个圣礼来施行；其中恩典和救恩以更大的丰富、明确和功效向万国彰显。",
"proof_texts":["Mark 16:15","Matthew 28:19-20","2 Corinthians 3:6-18","Hebrews 8:6,10-11"],
"notes_en":"Under the New Testament, the covenant of grace is administered through preaching and the sacraments with greater clarity and power.",
"notes_zh":"在新约时代，恩典之约通过传道和圣礼以更大的清晰和能力来施行。"
},
{
"id":"wlc_036","catechism":"westminster_larger","number":36,
"question_en":"Who is the Mediator of the covenant of grace?",
"question_zh":"谁是恩典之约的中保？",
"answer_en":"The only Mediator of the covenant of grace is the Lord Jesus Christ, who, being the eternal Son of God, of one substance and equal with the Father, in the fullness of time became man, and so was and continues to be God and man, in two entire distinct natures, and one person, forever.",
"answer_zh":"恩典之约的唯一中保是主耶稣基督，祂是永恒的神子，与父同质同等，在日期满足的时候成为人，因此祂过去是、现在仍然是神又是人，具有两个完整而不同的性情，合为一个位格，直到永远。",
"proof_texts":["1 Timothy 2:5","John 1:1,14","John 10:30","Philippians 2:6","Galatians 4:4","Hebrews 7:24-25"],
"notes_en":"Jesus Christ alone is the Mediator, being truly God and truly man in one person forever.",
"notes_zh":"唯独耶稣基督是中保，祂是真神又是真人，合为一个位格，直到永远。"
},
{
"id":"wlc_037","catechism":"westminster_larger","number":37,
"question_en":"How did Christ, being the Son of God, become man?",
"question_zh":"基督身为神子，如何成为人？",
"answer_en":"Christ the Son of God became man, by taking to himself a true body, and a reasonable soul, being conceived by the power of the Holy Ghost in the womb of the virgin Mary, of her substance, and born of her, yet without sin.",
"answer_zh":"基督，神的儿子，取了真实的身体和理性的灵魂，借圣灵的大能在童贞女马利亚的腹中受孕，取了她的实质，由她而生，但没有罪，如此成为人。",
"proof_texts":["John 1:14","Matthew 1:18,20","Luke 1:27,31,35","Hebrews 4:15","Hebrews 7:26"],
"notes_en":"The incarnation: the eternal Son took a real human nature, conceived by the Holy Spirit, born of the virgin Mary, without sin.",
"notes_zh":"道成肉身：永恒的圣子取了真实的人性，由圣灵感孕，由童贞女马利亚所生，没有罪。"
},
{
"id":"wlc_038","catechism":"westminster_larger","number":38,
"question_en":"Why was it requisite that the Mediator should be God?",
"question_zh":"为什么中保必须是神？",
"answer_en":"It was requisite that the Mediator should be God, that he might sustain and keep the human nature from sinking under the infinite wrath of God, and the power of death, give worth and efficacy to his sufferings, obedience, and intercession; and to satisfy God's justice, procure his favor, purchase a peculiar people, give his Spirit to them, conquer all their enemies, and bring them to everlasting salvation.",
"answer_zh":"中保必须是神，好使祂能支撑人性，不至于在神无限的忿怒和死亡的权势下沉沦；使祂的受苦、顺服和代求有价值和功效；满足神的公义，取得神的恩惠，买赎一群特殊的百姓，将祂的灵赐给他们，征服他们一切的仇敌，带领他们进入永远的救恩。",
"proof_texts":["Acts 2:24-25","Romans 1:4","Romans 3:24-26","Hebrews 9:14","Acts 20:28","Hebrews 7:25-27"],
"notes_en":"Only a divine Mediator could bear infinite wrath, give infinite value to His work, and accomplish eternal redemption.",
"notes_zh":"唯有神性的中保才能承担无限的忿怒，赋予祂的工作无限的价值，成就永恒的救赎。"
},
{
"id":"wlc_039","catechism":"westminster_larger","number":39,
"question_en":"Why was it requisite that the Mediator should be man?",
"question_zh":"为什么中保必须是人？",
"answer_en":"It was requisite that the Mediator should be man, that he might advance our nature, perform obedience to the law, suffer and make intercession for us in our nature, have a fellow feeling of our infirmities; that we might receive the adoption of sons, and have comfort and access with boldness unto the throne of grace.",
"answer_zh":"中保必须是人，好使祂能提升我们的本性，在我们的本性中遵守律法、为我们受苦并代求，同情我们的软弱；使我们能得儿子的名分，坦然无惧地来到施恩的宝座前得安慰。",
"proof_texts":["Hebrews 2:16","Galatians 4:4","Hebrews 2:14","Hebrews 4:15","Galatians 4:5","Hebrews 4:16"],
"notes_en":"A human Mediator was needed to obey the law, suffer, and sympathize with us in our own nature.",
"notes_zh":"需要一位人性的中保在我们的本性中遵守律法、受苦，并同情我们。"
},
{
"id":"wlc_040","catechism":"westminster_larger","number":40,
"question_en":"Why was it requisite that the Mediator should be God and man in one person?",
"question_zh":"为什么中保必须是神人合一？",
"answer_en":"It was requisite that the Mediator, who was to reconcile God and man, should himself be both God and man, and this in one person, that the proper works of each nature might be accepted of God for us, and relied on by us, as the works of the whole person.",
"answer_zh":"中保既要使神与人和好，祂自己就必须既是神又是人，而且是在一个位格中，好使每一个性情的正当作为可以被神为我们所悦纳，也被我们所信靠，都作为整个位格的作为。",
"proof_texts":["Matthew 1:21,23","Matthew 3:17","Hebrews 9:14","1 Peter 2:6"],
"notes_en":"The unity of Christ's person ensures that the works of both natures are the works of one Mediator, accepted by God and trusted by us.",
"notes_zh":"基督位格的合一确保两性的作为都是同一位中保的作为，被神悦纳，被我们信靠。"
},
{
"id":"wlc_041","catechism":"westminster_larger","number":41,
"question_en":"Why was our Mediator called Jesus?",
"question_zh":"为什么我们的中保被称为耶稣？",
"answer_en":"Our Mediator was called Jesus, because he saveth his people from their sins.",
"answer_zh":"我们的中保被称为耶稣，因为祂将自己的百姓从罪恶中拯救出来。",
"proof_texts":["Matthew 1:21","Acts 4:12"],
"notes_en":"The name Jesus means 'Savior,' reflecting His mission to save His people from their sins.",
"notes_zh":"耶稣这个名字意为'救主'，反映了祂拯救百姓脱离罪恶的使命。"
},
{
"id":"wlc_042","catechism":"westminster_larger","number":42,
"question_en":"Why was our Mediator called Christ?",
"question_zh":"为什么我们的中保被称为基督？",
"answer_en":"Our Mediator was called Christ, because he was anointed with the Holy Ghost above measure, and so set apart, and fully furnished with all authority and ability, to execute the offices of prophet, priest, and king of his church, in the estate both of his humiliation and exaltation.",
"answer_zh":"我们的中保被称为基督，因为祂被圣灵无限地膏抹，因此被分别出来，并完全具备了一切权柄和能力，在祂降卑和升高的状态中，执行祂教会的先知、祭司和君王的职分。",
"proof_texts":["John 3:34","Psalm 2:6","Luke 4:18,21","Acts 3:21-22","Hebrews 5:5-7"],
"notes_en":"Christ means 'Anointed One,' set apart by the Spirit to serve as Prophet, Priest, and King.",
"notes_zh":"基督意为'受膏者'，被圣灵分别出来作先知、祭司和君王。"
},
{
"id":"wlc_043","catechism":"westminster_larger","number":43,
"question_en":"How doth Christ execute the office of a prophet?",
"question_zh":"基督如何执行先知的职分？",
"answer_en":"Christ executeth the office of a prophet, in his revealing to the church, in all ages, by his Spirit and Word, in divers ways of administration, the whole will of God, in all things concerning their edification and salvation.",
"answer_zh":"基督执行先知的职分，是在各世代中，借着祂的灵和话语，以不同的方式，向教会启示神在有关他们的造就和救恩的一切事上的全部旨意。",
"proof_texts":["John 1:18","1 Peter 1:10-12","John 15:15","John 20:31","Ephesians 4:11-13"],
"notes_en":"As Prophet, Christ reveals God's whole will to His church in every age through His Word and Spirit.",
"notes_zh":"作为先知，基督在各世代借着祂的道和灵向教会启示神的全部旨意。"
},
{
"id":"wlc_044","catechism":"westminster_larger","number":44,
"question_en":"How doth Christ execute the office of a priest?",
"question_zh":"基督如何执行祭司的职分？",
"answer_en":"Christ executeth the office of a priest, in his once offering himself a sacrifice without spot to God, to be a reconciliation for the sins of the people; and in making continual intercession for them.",
"answer_zh":"基督执行祭司的职分，是将自己作为无瑕疵的祭物一次献给神，为百姓的罪作挽回祭，并且不断地为他们代求。",
"proof_texts":["Hebrews 9:14,28","Hebrews 2:17","Hebrews 7:25"],
"notes_en":"As Priest, Christ offered Himself once for all as a sacrifice and continually intercedes for His people.",
"notes_zh":"作为祭司，基督将自己一次献上为祭，并持续为祂的百姓代求。"
},
{
"id":"wlc_045","catechism":"westminster_larger","number":45,
"question_en":"How doth Christ execute the office of a king?",
"question_zh":"基督如何执行君王的职分？",
"answer_en":"Christ executeth the office of a king, in calling out of the world a people to himself, and giving them officers, laws, and censures, by which he visibly governs them; in bestowing saving grace upon his elect, rewarding their obedience, and correcting them for their sins, preserving and supporting them under all their temptations and sufferings, restraining and overcoming all their enemies, and powerfully ordering all things for his own glory, and their good; and also in taking vengeance on the rest, who know not God, and obey not the gospel.",
"answer_zh":"基督执行君王的职分，是从世界中召出一群百姓归向自己，赐给他们治理者、律法和惩戒，借此有形地管理他们；将救恩之恩赐给祂的选民，赏赐他们的顺服，管教他们的罪，在一切试探和苦难中保守和扶持他们，抑制和征服他们一切的仇敌，大能地安排万事为了祂自己的荣耀和他们的益处；并且报应其余不认识神和不服从福音之人。",
"proof_texts":["Acts 15:14-16","Isaiah 33:22","Ephesians 4:11-12","Matthew 18:17-18","Acts 5:31","Revelation 22:12","Revelation 2:10","Romans 8:28","2 Thessalonians 1:8-9"],
"notes_en":"As King, Christ governs His church, bestows grace, overcomes enemies, and will judge the disobedient.",
"notes_zh":"作为君王，基督管理祂的教会，赐下恩典，胜过仇敌，审判悖逆之人。"
},
{
"id":"wlc_046","catechism":"westminster_larger","number":46,
"question_en":"What was the estate of Christ's humiliation?",
"question_zh":"基督降卑的状态是什么？",
"answer_en":"The estate of Christ's humiliation was that low condition, wherein he for our sakes, emptying himself of his glory, took upon him the form of a servant, in his conception, birth, life, death, and after his death, until his resurrection.",
"answer_zh":"基督降卑的状态是指祂为我们的缘故，倒空自己的荣耀，取了奴仆的形像，在祂的受孕、出生、一生、受死，以及死后直到复活的那卑微状况。",
"proof_texts":["Philippians 2:6-8","Luke 1:31","2 Corinthians 8:9","Acts 2:24"],
"notes_en":"Christ's humiliation spans from His conception to His resurrection, during which He emptied Himself of His glory.",
"notes_zh":"基督的降卑从祂受孕到复活，在此期间祂倒空了自己的荣耀。"
},
{
"id":"wlc_047","catechism":"westminster_larger","number":47,
"question_en":"How did Christ humble himself in his conception and birth?",
"question_zh":"基督在受孕和出生时如何降卑自己？",
"answer_en":"Christ humbled himself in his conception and birth, in that, being from all eternity the Son of God, in the bosom of the Father, he was pleased in the fullness of time to become the son of man, made of a woman of low estate, and to be born of her; with divers circumstances of more than ordinary abasement.",
"answer_zh":"基督在受孕和出生时降卑自己，因为祂从永远就是神的儿子，在父的怀中，却在日期满足的时候甘愿成为人子，由一个卑微的女子所造，从她而生；伴随种种超乎寻常的卑微境况。",
"proof_texts":["John 1:14,18","Galatians 4:4","Luke 2:7","Luke 1:27","Luke 2:7"],
"notes_en":"The eternal Son willingly took on human nature, born in humble circumstances from a lowly woman.",
"notes_zh":"永恒的圣子甘愿取了人性，由卑微的女子在简陋的环境中出生。"
},
{
"id":"wlc_048","catechism":"westminster_larger","number":48,
"question_en":"How did Christ humble himself in his life?",
"question_zh":"基督在一生中如何降卑自己？",
"answer_en":"Christ humbled himself in his life, by subjecting himself to the law, which he perfectly fulfilled; and by conflicting with the indignities of the world, temptations of Satan, and infirmities in his flesh, whether common to the nature of man, or particularly accompanying that his low condition.",
"answer_zh":"基督在祂的一生中降卑自己，使自己服在律法之下，完全遵行了律法；并且忍受世界的羞辱、撒但的试探和肉身的软弱，无论是人性通常所有的，还是特别伴随祂卑微处境的。",
"proof_texts":["Galatians 4:4","Matthew 5:17","Isaiah 52:14","Hebrews 2:18","Hebrews 4:15","Isaiah 53:2-3"],
"notes_en":"Throughout His life, Christ perfectly obeyed the law while enduring worldly indignities, temptations, and human infirmities.",
"notes_zh":"在一生中，基督完全遵守律法，同时忍受世界的羞辱、试探和人性的软弱。"
},
{
"id":"wlc_049","catechism":"westminster_larger","number":49,
"question_en":"How did Christ humble himself in his death?",
"question_zh":"基督在受死时如何降卑自己？",
"answer_en":"Christ humbled himself in his death, in that having been betrayed by Judas, forsaken by his disciples, scorned and rejected by the world, condemned by Pilate, and tormented by his persecutors; having also conflicted with the terrors of death, and the powers of darkness, felt and borne the weight of God's wrath, he laid down his life an offering for sin, enduring the painful, shameful, and cursed death of the cross.",
"answer_zh":"基督在受死时降卑自己，因为祂被犹大出卖，被门徒离弃，被世人藐视弃绝，被彼拉多定罪，被逼迫祂的人折磨；又经历了死亡的恐怖和黑暗的权势，感受并承担了神忿怒的重压，将自己的生命作为赎罪祭献上，忍受了十字架上痛苦、羞辱、被咒诅的死。",
"proof_texts":["Matthew 27:4","Matthew 26:56","Isaiah 53:2-3","Matthew 27:26","Luke 22:44","Matthew 27:46","Philippians 2:8","Galatians 3:13"],
"notes_en":"Christ's death was the lowest point of His humiliation, bearing God's wrath and dying a cursed death on the cross.",
"notes_zh":"基督的死是祂降卑的最低点，承担了神的忿怒，死在十字架上被咒诅的死。"
},
{
"id":"wlc_050","catechism":"westminster_larger","number":50,
"question_en":"Wherein consisted Christ's humiliation after his death?",
"question_zh":"基督死后的降卑何在？",
"answer_en":"Christ's humiliation after his death consisted in his being buried, and continuing in the state of the dead, and under the power of death till the third day; which hath been otherwise expressed in these words, He descended into hell.",
"answer_zh":"基督死后的降卑在于祂被埋葬，继续处于死亡的状态，在死亡的权势之下直到第三天；这也用这些话来表达：祂降在阴间。",
"proof_texts":["1 Corinthians 15:3-4","Psalm 16:10","Acts 2:24-27,31","Matthew 12:40"],
"notes_en":"After death, Christ remained under the power of death until the third day, which is expressed as His descent into hell.",
"notes_zh":"死后，基督继续在死亡的权势之下直到第三天，这被表述为祂降在阴间。"
}
]

import json
with open('/tmp/wlc_batch1.json', 'w', encoding='utf-8') as f:
    json.dump(questions, f, ensure_ascii=False, indent=2)
print(f"Batch 1: {len(questions)} questions written")
