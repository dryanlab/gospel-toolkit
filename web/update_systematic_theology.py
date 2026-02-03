#!/usr/bin/env python3
"""Update systematic theology books with summaries and chapters."""
import json

# Load books
with open('src/data/books.json', 'r', encoding='utf-8') as f:
    books = json.load(f)

# Book data keyed by id
book_data = {

"book-013": {
    "summary_zh": "艾伦·雅各布斯以跨学科视角追溯'原罪'概念的思想史，从奥古斯丁到现代文学与政治思想，探讨人类为何倾向于作恶这一古老问题。本书不仅梳理了基督教神学中原罪教义的发展脉络，还将其置于文学、哲学和社会科学的广阔背景下重新审视。雅各布斯以生动的笔触论证，原罪教义虽然令人不快，却是理解人性最深刻、最诚实的框架之一。",
    "summary_en": "Alan Jacobs traces the intellectual history of original sin across disciplines—from Augustine to modern literature and political thought—examining why humans tend toward evil. The book surveys the development of the doctrine within Christian theology while situating it in the broader context of literature, philosophy, and social science. Jacobs argues compellingly that original sin, however uncomfortable, remains one of the most profound and honest frameworks for understanding human nature.",
    "tags": ["原罪", "人性论", "思想史", "跨学科"],
    "recommend_for": "进深者/学者/神学生",
    "chapters": [
        {"number": 1, "title_zh": "原罪的故事", "title_en": "The Story of Original Sin", "summary_zh": "介绍原罪教义的圣经根源和早期教会的理解。", "summary_en": "Introduces the biblical roots of original sin and the early church's understanding.", "key_quotes": ["'原罪是一面镜子，迫使我们直面自身不愿承认的真相。' / 'Original sin is a mirror that forces us to confront truths about ourselves we would rather not acknowledge.'"]},
        {"number": 2, "title_zh": "奥古斯丁与伯拉纠", "title_en": "Augustine and Pelagius", "summary_zh": "详述奥古斯丁与伯拉纠之间关于人类意志与恩典的经典论战。", "summary_en": "Details the classic debate between Augustine and Pelagius over human will and grace.", "key_quotes": ["'奥古斯丁坚持认为，离了上帝的恩典，人连向善的意愿都无法产生。' / 'Augustine insisted that without God's grace, humans cannot even will the good.'"]},
        {"number": 3, "title_zh": "伯拉纠主义的复兴", "title_en": "The Return of Pelagianism", "summary_zh": "追溯启蒙运动以来对人性乐观主义的回归及其后果。", "summary_en": "Traces the return of optimism about human nature from the Enlightenment onward and its consequences.", "key_quotes": ["'每一代人都以新的方式重新发明伯拉纠主义。' / 'Every generation reinvents Pelagianism in new ways.'"]},
        {"number": 4, "title_zh": "文学中的原罪", "title_en": "Original Sin in Literature", "summary_zh": "通过文学作品考察作家如何呈现人类的堕落本性。", "summary_en": "Examines how writers have portrayed humanity's fallen nature through literary works.", "key_quotes": ["'伟大的文学之所以伟大，正因为它不回避人性的黑暗。' / 'Great literature is great precisely because it does not flinch from the darkness in human nature.'"]},
        {"number": 5, "title_zh": "教义的辩护", "title_en": "A Defense of the Doctrine", "summary_zh": "为原罪教义的合理性与解释力进行辩护。", "summary_en": "Defends the reasonableness and explanatory power of the doctrine of original sin.", "key_quotes": ["'原罪教义是唯一可以被经验验证的基督教教义。' / 'Original sin is the only Christian doctrine that can be empirically verified.'"]}
    ]
},

"book-026": {
    "summary_zh": "安瑟伦的这部经典以对话形式探讨道成肉身与十字架救赎的必要性，被誉为赎罪论的里程碑之作。他以严密的逻辑论证：人类的罪亏欠了上帝无限的尊荣，唯有一位既是完全的人又是完全的神者才能偿还这笔债务。本书奠定了'满足说'赎罪论的基础，深刻影响了西方神学的发展方向。",
    "summary_en": "Anselm's classic work explores the necessity of the Incarnation and the Cross in dialogue form, regarded as a landmark in atonement theology. He argues with rigorous logic that human sin incurs an infinite debt to God's honor, payable only by one who is both fully human and fully divine. This book laid the foundation for the 'satisfaction' theory of atonement and profoundly shaped Western theological development.",
    "tags": ["赎罪论", "道成肉身", "中世纪神学", "经典"],
    "recommend_for": "进深者/神学生/学者",
    "chapters": [
        {"number": 1, "title_zh": "罪为何必须被偿还", "title_en": "Why Sin Must Be Repaid", "summary_zh": "论证罪亏缺了上帝的荣耀，必须得到补偿。", "summary_en": "Argues that sin dishonors God and must be compensated.", "key_quotes": ["'你还没有考虑到罪的严重性。' / 'You have not yet considered the gravity of sin.'"]},
        {"number": 2, "title_zh": "人无法自救", "title_en": "Humanity Cannot Save Itself", "summary_zh": "论证有限的人无法偿还亏欠无限上帝的债务。", "summary_en": "Argues that finite humans cannot repay the debt owed to the infinite God.", "key_quotes": ["'即便人能创造所有的世界，也不足以补偿一个罪。' / 'Even if man could create all worlds, it would not suffice to compensate for one sin.'"]},
        {"number": 3, "title_zh": "唯有神人能拯救", "title_en": "Only the God-Man Can Save", "summary_zh": "论证只有既是神又是人的基督才能满足上帝公义的要求。", "summary_en": "Argues that only Christ, who is both God and man, can satisfy God's justice.", "key_quotes": ["'必须有人偿还，但唯有上帝能够偿还，因此必须有一位神人。' / 'It is necessary for a man to make the payment, but only God can make it; therefore a God-man is required.'"]}
    ]
},

"book-028": {
    "summary_zh": "乌克玛全面阐述'上帝的形象'这一贯穿圣经的核心主题，从创造到终末论系统论述人作为神的形象承载者的意义。本书整合了结构性、功能性和关系性三种进路来理解神的形象，并探讨堕落如何扭曲以及基督如何恢复这一形象。学术严谨又不失牧养关怀，是研究基督教人论的标杆之作。",
    "summary_en": "Hoekema comprehensively expounds the biblical theme of the 'image of God,' systematically tracing its meaning from creation to eschatology. The book integrates structural, functional, and relational approaches to understanding the image of God, and explores how the Fall distorted and Christ restores this image. Academically rigorous yet pastorally sensitive, it is a benchmark work in Christian anthropology.",
    "tags": ["人论", "神的形象", "创造论", "基督论"],
    "recommend_for": "进深者/神学生/牧者",
    "chapters": [
        {"number": 1, "title_zh": "神的形象的圣经教导", "title_en": "The Biblical Teaching on the Image of God", "summary_zh": "系统梳理旧约和新约中关于神形象的经文。", "summary_en": "Systematically surveys Old and New Testament passages on the image of God.", "key_quotes": ["'人是按照上帝的形象被造的——这是圣经对人最基本的宣告。' / 'That man was created in the image of God is the most basic biblical declaration about humanity.'"]},
        {"number": 2, "title_zh": "罪对神形象的影响", "title_en": "The Effects of Sin on the Image", "summary_zh": "探讨堕落如何扭曲但未完全毁灭人里面神的形象。", "summary_en": "Explores how the Fall distorted but did not completely destroy the image of God in humanity.", "key_quotes": ["'罪严重损伤了神的形象，但并未将其彻底消灭。' / 'Sin has seriously damaged the image of God but has not totally annihilated it.'"]},
        {"number": 3, "title_zh": "基督里形象的更新", "title_en": "The Renewal of the Image in Christ", "summary_zh": "阐述基督如何作为完美的神的形象恢复信徒的人性。", "summary_en": "Explains how Christ, as the perfect image of God, restores believers' humanity.", "key_quotes": ["'基督是那看不见之上帝的完美形象，也是我们更新的样板。' / 'Christ is the perfect image of the invisible God and the pattern for our renewal.'"]},
        {"number": 4, "title_zh": "人的全人观", "title_en": "The Whole Person", "summary_zh": "探讨身体与灵魂的关系，批评二元论的极端。", "summary_en": "Discusses the relationship between body and soul and critiques extreme dualism.", "key_quotes": ["'圣经从不将人视为灵魂暂居的躯壳，而是身心合一的整体。' / 'The Bible never views man as a soul temporarily housed in a body, but as a body-soul unity.'"]},
        {"number": 5, "title_zh": "终末的完全恢复", "title_en": "The Final Restoration", "summary_zh": "展望信徒在荣耀中完全恢复神的形象。", "summary_en": "Looks forward to the full restoration of God's image in believers at glorification.", "key_quotes": ["'我们将要像他，因为我们必要看见他的真体。' / 'We shall be like him, for we shall see him as he is.'"]}
    ]
},

"book-040": {
    "summary_zh": "卡尔·楚曼从历史和神学的角度论证信经与信条在教会生活中的不可或缺性。他指出，即便声称'无信条'的教会实际上也有自己的信仰准则，而历史信条为教会提供了教义边界、牧养工具和跨时代的信仰纽带。本书简明有力，回应了当代教会中轻视信条传统的趋势。",
    "summary_en": "Carl Trueman argues from historical and theological perspectives for the indispensability of creeds and confessions in church life. He points out that even 'no-creed' churches effectively have their own standards of belief, and that historic confessions provide doctrinal boundaries, pastoral tools, and cross-generational bonds of faith. Concise and compelling, this book responds to the contemporary trend of dismissing confessional traditions.",
    "tags": ["信条", "教会论", "历史神学", "改革宗"],
    "recommend_for": "初信者/进深者/牧者",
    "chapters": [
        {"number": 1, "title_zh": "信条的历史起源", "title_en": "The Historical Origins of Creeds", "summary_zh": "追溯早期教会制定信条的背景和动因。", "summary_en": "Traces the context and motivations behind the early church's formulation of creeds.", "key_quotes": ["'教会从第一天起就是一个认信的群体。' / 'The church from day one was a confessing community.'"]},
        {"number": 2, "title_zh": "无信条教会的矛盾", "title_en": "The Contradiction of No-Creed Churches", "summary_zh": "指出声称无信条的立场本身就是一种信条。", "summary_en": "Points out that claiming no creed is itself a creedal statement.", "key_quotes": ["'\"无信条，唯独圣经\"这句话本身就是一个信条。' / 'The statement \"No creed but the Bible\" is itself a creed.'"]},
        {"number": 3, "title_zh": "信条的教牧功能", "title_en": "The Pastoral Function of Confessions", "summary_zh": "论述信条在教导、纪律和牧养中的实际作用。", "summary_en": "Discusses the practical role of confessions in teaching, discipline, and pastoral care.", "key_quotes": ["'信条不是束缚良心的锁链，而是引导信仰的地图。' / 'Confessions are not chains that bind the conscience, but maps that guide faith.'"]}
    ]
},

"book-044": {
    "summary_zh": "摩根和彼得森编辑的这部论文集汇集多位学者的视角，系统探讨圣经中关于地狱和永刑的教导。各章从旧约、新约、历史神学和系统神学等角度论证地狱教义的圣经基础和神学意义，同时回应了普救论和灵魂消灭论的挑战。本书以学术严谨性捍卫了传统正统的地狱观。",
    "summary_en": "This essay collection edited by Morgan and Peterson gathers multiple scholars' perspectives to systematically examine biblical teaching on hell and eternal punishment. Chapters argue for the biblical basis and theological significance of the doctrine of hell from Old Testament, New Testament, historical, and systematic theological angles, while responding to universalist and annihilationist challenges. The book defends the traditional orthodox view of hell with academic rigor.",
    "tags": ["地狱", "末世论", "永刑", "护教"],
    "recommend_for": "进深者/神学生/牧者",
    "chapters": [
        {"number": 1, "title_zh": "旧约中的地狱", "title_en": "Hell in the Old Testament", "summary_zh": "考察旧约经文对死后审判和刑罚的教导。", "summary_en": "Examines Old Testament teaching on judgment and punishment after death.", "key_quotes": ["'旧约虽然较少直接论及地狱，但审判的主题贯穿始终。' / 'Though the Old Testament speaks less directly of hell, the theme of judgment pervades it.'"]},
        {"number": 2, "title_zh": "耶稣论地狱", "title_en": "Jesus on Hell", "summary_zh": "分析耶稣关于地狱最多最严厉的教导。", "summary_en": "Analyzes Jesus' frequent and severe teachings about hell.", "key_quotes": ["'在圣经中，论到地狱最多的不是别人，正是耶稣自己。' / 'In the Bible, the one who speaks most about hell is none other than Jesus himself.'"]},
        {"number": 3, "title_zh": "回应灵魂消灭论", "title_en": "Responding to Annihilationism", "summary_zh": "批评灵魂消灭论的圣经和逻辑基础。", "summary_en": "Critiques the biblical and logical foundations of annihilationism.", "key_quotes": ["'永刑的教义虽然令人不安，却是圣经清楚的教导。' / 'The doctrine of eternal punishment, however unsettling, is the clear teaching of Scripture.'"]},
        {"number": 4, "title_zh": "地狱与上帝的公义", "title_en": "Hell and God's Justice", "summary_zh": "论证地狱如何彰显上帝的圣洁与公义。", "summary_en": "Argues how hell manifests God's holiness and justice.", "key_quotes": ["'否认地狱不是彰显了上帝的爱，而是削弱了上帝的圣洁。' / 'Denying hell does not magnify God's love but diminishes God's holiness.'"]}
    ]
},

"book-045": {
    "summary_zh": "克里斯托弗·赖特坦诚面对信仰中令人困惑的上帝形象——发怒的、沉默的、审判的上帝——帮助读者诚实地与这些难题摔跤。本书不回避旧约中上帝命令战争、容许苦难等棘手经文，而是将它们放在整本圣经救赎叙事的大框架中重新理解。赖特的写作兼具学术深度和牧者心肠，是面对信仰疑难的诚实之作。",
    "summary_en": "Christopher Wright honestly confronts the troubling portraits of God—wrathful, silent, judging—helping readers wrestle with these difficulties with integrity. The book does not avoid difficult Old Testament texts about God commanding war or permitting suffering, but reframes them within the grand redemptive narrative of Scripture. Wright's writing combines academic depth with pastoral heart, offering an honest engagement with faith's hard questions.",
    "tags": ["旧约伦理", "苦难", "上帝的属性", "护教"],
    "recommend_for": "进深者/慕道友/牧者",
    "chapters": [
        {"number": 1, "title_zh": "我不理解的上帝", "title_en": "The God I Don't Understand", "summary_zh": "坦承信仰中真实存在的困惑和挣扎。", "summary_en": "Honestly acknowledges real confusion and struggles in faith.", "key_quotes": ["'承认不理解上帝，本身就是信仰的一种表达。' / 'Admitting we don't understand God is itself an expression of faith.'"]},
        {"number": 2, "title_zh": "邪恶与苦难之谜", "title_en": "The Mystery of Evil and Suffering", "summary_zh": "探讨上帝为何容许邪恶和苦难的古老难题。", "summary_en": "Explores the ancient question of why God permits evil and suffering.", "key_quotes": ["'圣经没有给出苦难的哲学答案，而是给出了一位受苦的上帝。' / 'The Bible does not give a philosophical answer to suffering, but a suffering God.'"]},
        {"number": 3, "title_zh": "上帝与迦南的审判", "title_en": "God and the Judgment of Canaan", "summary_zh": "处理旧约中上帝命令消灭迦南人的争议经文。", "summary_en": "Addresses controversial Old Testament texts about God's command to destroy the Canaanites.", "key_quotes": ["'我们必须在整本圣经的叙事中理解这些经文，而非孤立地阅读。' / 'We must understand these texts within the whole narrative of Scripture, not read them in isolation.'"]},
        {"number": 4, "title_zh": "十字架与上帝的公义", "title_en": "The Cross and God's Justice", "summary_zh": "论证十字架是理解上帝公义与慈爱的核心钥匙。", "summary_en": "Argues that the Cross is the central key to understanding God's justice and love.", "key_quotes": ["'十字架是上帝对邪恶最终极的回应。' / 'The Cross is God's ultimate response to evil.'"]}
    ]
},

"book-046": {
    "summary_zh": "科林·冈顿从三位一体的角度重新审视创造论，批判了西方神学传统中对创造教义的忽视和扭曲。他论证三一上帝的位格关系为理解受造世界的秩序、多样性和目的性提供了独特的框架。本书在当代系统神学领域具有重要影响，是三一论与创造论交叉研究的开创性之作。",
    "summary_en": "Colin Gunton reexamines the doctrine of creation from a Trinitarian perspective, critiquing the neglect and distortion of creation theology in the Western tradition. He argues that the personal relations within the Trinity provide a unique framework for understanding the order, diversity, and purposefulness of the created world. This book has significantly influenced contemporary systematic theology as a pioneering work at the intersection of Trinitarian and creation theology.",
    "tags": ["三位一体", "创造论", "当代神学", "系统神学"],
    "recommend_for": "学者/神学生",
    "chapters": [
        {"number": 1, "title_zh": "创造教义的失落", "title_en": "The Loss of the Doctrine of Creation", "summary_zh": "分析西方神学如何逐渐忽视创造教义。", "summary_en": "Analyzes how Western theology gradually neglected the doctrine of creation.", "key_quotes": ["'创造教义的衰微与三位一体教义的弱化密不可分。' / 'The decline of creation theology is inseparable from the weakening of Trinitarian doctrine.'"]},
        {"number": 2, "title_zh": "三一上帝与创造行动", "title_en": "The Triune God and the Act of Creation", "summary_zh": "论证创造是三一上帝共同的自由行动。", "summary_en": "Argues that creation is the free act of the triune God together.", "key_quotes": ["'创造不是神性的溢出，而是三一上帝自由的爱的行动。' / 'Creation is not an overflow of the divine being, but a free act of the triune God's love.'"]},
        {"number": 3, "title_zh": "受造世界的秩序与自由", "title_en": "Order and Freedom in the Created World", "summary_zh": "探讨三一关系如何映射在受造界的结构中。", "summary_en": "Explores how Trinitarian relations are reflected in the structure of the created world.", "key_quotes": ["'受造世界的多样性与统一性反映了三位一体的丰富。' / 'The diversity and unity of the created world reflect the richness of the Trinity.'"]}
    ]
},

"book-049": {
    "summary_zh": "普兰丁格以优美的神学散文简明扼要地阐述了罪的本质，指出罪是对上帝所设计的'应然'（shalom）的破坏。他追溯罪如何扭曲个人、社会和文化的各个层面，揭示了人类问题的根源不在环境或制度，而在于心灵深处对上帝旨意的偏离。本书语言优雅、思想深邃，是理解基督教罪论的精彩入门。",
    "summary_en": "Plantinga eloquently and concisely expounds the nature of sin as the vandalism of God's intended shalom—the way things are supposed to be. He traces how sin distorts every dimension of personal, social, and cultural life, revealing that the root of human problems lies not in environment or systems but in the heart's departure from God's will. Elegantly written and profoundly thoughtful, it is a superb introduction to the Christian doctrine of sin.",
    "tags": ["罪论", "沙龙", "人性论", "神学散文"],
    "recommend_for": "慕道友/初信者/进深者",
    "chapters": [
        {"number": 1, "title_zh": "万物本应如此", "title_en": "The Way Things Are Supposed to Be", "summary_zh": "描绘上帝所设计的和平（shalom）秩序。", "summary_en": "Depicts the peace (shalom) order God designed.", "key_quotes": ["'上帝所造的世界是一个万物各居其位、和谐共融的世界。' / 'The world God made is one where everything is in its proper place, harmoniously interwoven.'"]},
        {"number": 2, "title_zh": "罪的蔓延", "title_en": "The Pervasiveness of Sin", "summary_zh": "展示罪如何渗透到生活的方方面面。", "summary_en": "Shows how sin permeates every area of life.", "key_quotes": ["'罪是对shalom的蓄意破坏——是对不该如此之事的执迷。' / 'Sin is the willful destruction of shalom—a fixation on what ought not to be.'"]},
        {"number": 3, "title_zh": "罪的寄生性", "title_en": "The Parasitic Nature of Sin", "summary_zh": "论证罪没有独立存在的本体，只是对善的扭曲和寄生。", "summary_en": "Argues that sin has no independent ontological existence but is a distortion of and parasite on the good.", "key_quotes": ["'罪从不创造，只会腐蚀；它寄生在上帝的良善之上。' / 'Sin never creates; it only corrupts. It is parasitic on God's goodness.'"]},
        {"number": 4, "title_zh": "灵性腐败的面具", "title_en": "The Masks of Spiritual Corruption", "summary_zh": "揭示罪如何伪装自己、欺骗人心。", "summary_en": "Reveals how sin disguises itself and deceives the human heart.", "key_quotes": ["'罪最危险的能力之一就是让人对自己的罪浑然不觉。' / 'One of sin's most dangerous powers is to make us oblivious to our own sinfulness.'"]}
    ]
},

"book-056": {
    "summary_zh": "卡森以严谨的释经功力阐述耶稣基督作为'神的儿子'这一称号的丰富含义。本书追溯这一称号在旧约、两约之间文献和新约中的发展脉络，揭示其弥赛亚性、神性和救赎论的多重维度。卡森既回应了自由派对基督神性的质疑，又纠正了福音派中对这一称号的肤浅理解。",
    "summary_en": "Carson expounds with rigorous exegetical skill the rich meaning of the title 'Son of God' as applied to Jesus Christ. The book traces the development of this title through the Old Testament, intertestamental literature, and New Testament, revealing its messianic, divine, and soteriological dimensions. Carson responds both to liberal challenges to Christ's deity and to superficial evangelical understandings of this title.",
    "tags": ["基督论", "释经", "神的儿子", "新约神学"],
    "recommend_for": "进深者/神学生/牧者",
    "chapters": [
        {"number": 1, "title_zh": "旧约中'神的儿子'的背景", "title_en": "The Old Testament Background of 'Son of God'", "summary_zh": "考察旧约中以色列、君王和天使被称为'神的儿子'的用法。", "summary_en": "Examines Old Testament usage of 'son of God' for Israel, kings, and angels.", "key_quotes": ["'旧约为新约中\"神的儿子\"这一称号奠定了深厚的基础。' / 'The Old Testament lays a deep foundation for the New Testament title \"Son of God.\"'"]},
        {"number": 2, "title_zh": "福音书中的神之子", "title_en": "The Son of God in the Gospels", "summary_zh": "分析四福音如何呈现耶稣作为神独生子的身份。", "summary_en": "Analyzes how the four Gospels present Jesus as God's unique Son.", "key_quotes": ["'耶稣不仅仅是一位特别的人——他是独一无二的、永恒的神之子。' / 'Jesus is not merely a special man—he is the unique, eternal Son of God.'"]},
        {"number": 3, "title_zh": "保罗书信中的基督论", "title_en": "Christology in Paul's Letters", "summary_zh": "探讨保罗如何理解和教导基督的神子身份。", "summary_en": "Explores how Paul understood and taught Christ's identity as the Son of God.", "key_quotes": ["'保罗对基督神子身份的认信，根植于他在大马士革路上的相遇。' / 'Paul's confession of Christ as Son of God is rooted in his encounter on the Damascus road.'"]}
    ]
},

"book-060": {
    "summary_zh": "卡森深入分析圣经中关于上帝之爱的多维教导，纠正了当代文化和教会中将上帝之爱简单化、感性化的倾向。他区分了上帝之爱的五个不同层面——上帝内在三一之爱、对世界的普遍之爱、对堕落世界的拯救之爱、对选民特殊的爱、以及有条件的爱——论证这些层面必须整合理解。本书是关于上帝属性的重要神学著作。",
    "summary_en": "Carson deeply analyzes the multidimensional biblical teaching on God's love, correcting the contemporary cultural and ecclesiastical tendency to oversimplify and sentimentalize it. He distinguishes five aspects of God's love—the intra-Trinitarian love, God's providential love for the world, His salvific love for the fallen world, His particular love for the elect, and His conditional love—arguing these must be understood integrally. This is an important theological work on the attributes of God.",
    "tags": ["上帝的属性", "上帝的爱", "系统神学", "释经"],
    "recommend_for": "进深者/牧者/神学生",
    "chapters": [
        {"number": 1, "title_zh": "当代文化中上帝之爱的扭曲", "title_en": "Distortions of God's Love in Contemporary Culture", "summary_zh": "揭示当今对上帝之爱的各种误解。", "summary_en": "Reveals various contemporary misunderstandings of God's love.", "key_quotes": ["'如果上帝被简化为'爱'，那么每一个'困难'的教义都会被边缘化。' / 'If God is reduced to love, then every \"difficult\" doctrine gets marginalized.'"]},
        {"number": 2, "title_zh": "上帝之爱的五个层面", "title_en": "Five Aspects of God's Love", "summary_zh": "系统区分圣经中上帝之爱的不同维度。", "summary_en": "Systematically distinguishes different dimensions of God's love in Scripture.", "key_quotes": ["'圣经中上帝之爱的丰富远非一句\"上帝爱你\"所能概括。' / 'The richness of God's love in Scripture far exceeds a simple \"God loves you.\"'"]},
        {"number": 3, "title_zh": "上帝的爱与上帝的主权", "title_en": "God's Love and God's Sovereignty", "summary_zh": "探讨上帝的爱与拣选、主权如何和谐共存。", "summary_en": "Explores how God's love harmonizes with election and sovereignty.", "key_quotes": ["'上帝之爱绝不与他的圣洁、公义和主权相矛盾。' / 'God's love never contradicts His holiness, justice, and sovereignty.'"]}
    ]
},

"book-069": {
    "summary_zh": "本书以清晰系统的方式阐述改革宗神学的五大核心教义——全然败坏、无条件拣选、有限救赎、不可抗拒的恩典和圣徒的坚忍（TULIP）。作者不仅解释每一要点的圣经根据，还回应了常见的反对意见，并附有大量经文索引。本书是了解加尔文主义救恩论最经典、最实用的入门指南之一。",
    "summary_en": "This book clearly and systematically expounds the five core doctrines of Reformed theology—Total Depravity, Unconditional Election, Limited Atonement, Irresistible Grace, and Perseverance of the Saints (TULIP). The authors explain the biblical basis for each point, respond to common objections, and include extensive Scripture indexes. It is one of the most classic and practical introductory guides to Calvinist soteriology.",
    "tags": ["TULIP", "改革宗", "救恩论", "加尔文主义"],
    "recommend_for": "初信者/进深者/神学生",
    "chapters": [
        {"number": 1, "title_zh": "全然败坏", "title_en": "Total Depravity", "summary_zh": "论证人在每一方面都被罪污染，无力自救。", "summary_en": "Argues that every aspect of humanity is tainted by sin, unable to save itself.", "key_quotes": ["'全然败坏不是说人坏到了极点，而是说罪影响了人的每一部分。' / 'Total depravity does not mean people are as bad as possible, but that sin affects every part of the person.'"]},
        {"number": 2, "title_zh": "无条件拣选", "title_en": "Unconditional Election", "summary_zh": "阐述上帝的拣选不基于人的任何条件或功德。", "summary_en": "Explains that God's election is not based on any human condition or merit.", "key_quotes": ["'上帝拣选我们不是因为我们信了，而是为了使我们能信。' / 'God chose us not because we believed, but in order that we might believe.'"]},
        {"number": 3, "title_zh": "有限救赎", "title_en": "Limited Atonement", "summary_zh": "论证基督的救赎有其特定的目的和对象。", "summary_en": "Argues that Christ's atonement has a specific purpose and intended recipients.", "key_quotes": ["'问题不在于基督之血的充分性，而在于其目的性。' / 'The question is not about the sufficiency of Christ's blood, but about its intended purpose.'"]},
        {"number": 4, "title_zh": "不可抗拒的恩典", "title_en": "Irresistible Grace", "summary_zh": "阐述上帝的有效呼召必然带来罪人的悔改信主。", "summary_en": "Explains that God's effectual calling inevitably brings about the sinner's repentance and faith.", "key_quotes": ["'不可抗拒的恩典不是强迫，而是上帝改变了我们的心，使我们甘愿来到他面前。' / 'Irresistible grace is not coercion, but God changing our hearts so we willingly come to Him.'"]},
        {"number": 5, "title_zh": "圣徒的坚忍", "title_en": "Perseverance of the Saints", "summary_zh": "论证真信徒必然在信仰中坚忍到底。", "summary_en": "Argues that true believers will certainly persevere in faith to the end.", "key_quotes": ["'坚忍不是靠我们抓住上帝，而是上帝抓住了我们。' / 'Perseverance is not about us holding on to God, but God holding on to us.'"]}
    ]
},

"book-074": {
    "summary_zh": "唐纳德·麦克劳德以清晰的神学分析深入探讨基督的位格——即基督的神人二性如何在一个位格中联合。本书系统处理了迦克墩定义的核心内容，回应了从早期异端到现代基督论的各种挑战，并将教义思考与敬拜生活紧密结合。是研究基督论不可多得的佳作。",
    "summary_en": "Donald Macleod offers clear theological analysis of the person of Christ—how His divine and human natures unite in one person. The book systematically treats the core of the Chalcedonian Definition, responds to challenges from early heresies to modern Christology, and closely connects doctrinal reflection with worship. An invaluable work for the study of Christology.",
    "tags": ["基督论", "道成肉身", "迦克墩", "神人二性"],
    "recommend_for": "进深者/神学生/学者",
    "chapters": [
        {"number": 1, "title_zh": "神成了人", "title_en": "God Became Man", "summary_zh": "阐述道成肉身的基本教义及其重要性。", "summary_en": "Expounds the basic doctrine of the Incarnation and its significance.", "key_quotes": ["'道成肉身不是上帝穿上了人的外衣，而是上帝真正成为了人。' / 'The Incarnation is not God wearing a human disguise, but God truly becoming man.'"]},
        {"number": 2, "title_zh": "基督的神性", "title_en": "The Deity of Christ", "summary_zh": "从圣经和神学论证基督完全的神性。", "summary_en": "Argues for Christ's full deity from Scripture and theology.", "key_quotes": ["'否认基督的神性就是否认基督教信仰的根基。' / 'To deny Christ's deity is to deny the very foundation of the Christian faith.'"]},
        {"number": 3, "title_zh": "基督的人性", "title_en": "The Humanity of Christ", "summary_zh": "强调基督具有完全的、真实的人性。", "summary_en": "Emphasizes that Christ possesses full, genuine humanity.", "key_quotes": ["'基督不仅是完全的神，也是完全的人——他经历饥渴、疲倦和试探。' / 'Christ is not only fully God but fully man—He experienced hunger, weariness, and temptation.'"]},
        {"number": 4, "title_zh": "二性一位格", "title_en": "Two Natures, One Person", "summary_zh": "解释迦克墩信经关于基督二性联合的教导。", "summary_en": "Explains the Chalcedonian teaching on the union of Christ's two natures.", "key_quotes": ["'二性不混合、不改变、不分割、不分离——这是信仰的奥秘。' / 'Two natures without confusion, change, division, or separation—this is the mystery of faith.'"]},
        {"number": 5, "title_zh": "基督的虚己", "title_en": "The Kenosis of Christ", "summary_zh": "探讨腓立比书二章中基督虚己的含义。", "summary_en": "Explores the meaning of Christ's kenosis in Philippians 2.", "key_quotes": ["'虚己不是放弃神性，而是取了奴仆的形象。' / 'Kenosis is not the abandonment of deity, but taking the form of a servant.'"]}
    ]
},

"book-079": {
    "summary_zh": "欧文·卢策以通俗易懂的方式探讨撒但、邪恶和灵界争战的圣经教导，回应了当代人对魔鬼既过度迷信又全然忽视的两种极端。本书系统考察了撒但的起源、堕落、策略和最终命运，同时强调基督已经在十字架上决定性地胜过了一切邪恶势力。既有神学深度又具实践指导意义。",
    "summary_en": "Erwin Lutzer explores in accessible language the biblical teaching on Satan, evil, and spiritual warfare, addressing the twin contemporary extremes of superstitious fascination and outright dismissal of the devil. The book systematically examines Satan's origin, fall, strategies, and ultimate destiny, while emphasizing that Christ has decisively triumphed over all evil powers at the Cross. Theologically substantial yet practically oriented.",
    "tags": ["撒但", "灵界争战", "邪恶", "基督的得胜"],
    "recommend_for": "初信者/进深者",
    "chapters": [
        {"number": 1, "title_zh": "撒但的起源与堕落", "title_en": "Satan's Origin and Fall", "summary_zh": "考察圣经关于撒但起源和堕落的教导。", "summary_en": "Examines the biblical teaching on Satan's origin and fall.", "key_quotes": ["'撒但不是上帝的对立面——他只是一个受造物，一个堕落的天使。' / 'Satan is not God's opposite—he is merely a creature, a fallen angel.'"]},
        {"number": 2, "title_zh": "撒但的策略", "title_en": "Satan's Strategies", "summary_zh": "分析撒但欺骗和引诱人的主要手段。", "summary_en": "Analyzes Satan's primary means of deception and temptation.", "key_quotes": ["'撒但最大的诡计就是让人相信他不存在。' / 'Satan's greatest trick is to make people believe he does not exist.'"]},
        {"number": 3, "title_zh": "十字架的决定性胜利", "title_en": "The Decisive Victory of the Cross", "summary_zh": "论证基督在十字架上已经彻底击败撒但。", "summary_en": "Argues that Christ has thoroughly defeated Satan at the Cross.", "key_quotes": ["'十字架不是撒但的胜利，而是他最终的审判。' / 'The Cross is not Satan's victory but his final judgment.'"]},
        {"number": 4, "title_zh": "撒但的最终命运", "title_en": "Satan's Final Destiny", "summary_zh": "展望启示录中撒但的最终审判和毁灭。", "summary_en": "Looks forward to Satan's final judgment and destruction in Revelation.", "key_quotes": ["'撒但的结局已被定好——他将被扔进火湖，直到永永远远。' / 'Satan's end is already determined—he will be cast into the lake of fire forever and ever.'"]}
    ]
},

"book-089": {
    "summary_zh": "弗雷德·桑德斯以生动的神学写作重新唤起读者对三位一体教义的热情，论证三一论不是抽象的神学推理，而是福音的核心和基督徒生活的根基。本书从救恩经历出发引导读者进入三一上帝的深处，展示了父差遣子、子顺服父、圣灵将父子之爱浇灌在信徒心中的荣美图景。",
    "summary_en": "Fred Sanders revives enthusiasm for the doctrine of the Trinity through vivid theological writing, arguing that Trinitarian theology is not abstract speculation but the heart of the gospel and the foundation of Christian life. Starting from the experience of salvation, the book guides readers into the depths of the triune God, displaying the glorious picture of the Father sending the Son, the Son obeying the Father, and the Spirit pouring the love of Father and Son into believers' hearts.",
    "tags": ["三位一体", "福音", "灵修神学", "系统神学"],
    "recommend_for": "初信者/进深者/牧者",
    "chapters": [
        {"number": 1, "title_zh": "三一论为何重要", "title_en": "Why the Trinity Matters", "summary_zh": "论证三位一体不是可有可无的教义，而是基督教信仰的核心。", "summary_en": "Argues that the Trinity is not optional but central to the Christian faith.", "key_quotes": ["'三位一体不是信仰的附录，而是信仰本身。' / 'The Trinity is not an appendix to the faith, but the faith itself.'"]},
        {"number": 2, "title_zh": "福音中的三一上帝", "title_en": "The Triune God in the Gospel", "summary_zh": "展示救恩的每一步都是三一上帝的共同工作。", "summary_en": "Shows that every step of salvation is the cooperative work of the triune God.", "key_quotes": ["'福音就是三位一体的上帝走进我们的生命。' / 'The gospel is the triune God entering our lives.'"]},
        {"number": 3, "title_zh": "圣灵——被遗忘的位格", "title_en": "The Holy Spirit—The Forgotten Person", "summary_zh": "呼吁重新关注圣灵在三一工作中的角色。", "summary_en": "Calls for renewed attention to the Spirit's role in Trinitarian work.", "key_quotes": ["'圣灵不是一种力量，而是一个位格——他使我们与基督联合。' / 'The Spirit is not a force but a person—He unites us with Christ.'"]}
    ]
},

"book-106": {
    "summary_zh": "巴尔塔萨以其恢弘的神学美学视角探讨基督荣耀的主题，将神学与美学、哲学深度融合。本书是其神学美学系列的重要组成部分，论证上帝的荣耀在基督的道成肉身、受难和复活中达到最高峰的彰显。巴尔塔萨的写作博大精深，是二十世纪天主教系统神学最具影响力的作品之一。",
    "summary_en": "Balthasar explores the theme of Christ's glory through his grand theological aesthetics, deeply integrating theology with aesthetics and philosophy. As a key part of his theological aesthetics series, the book argues that God's glory reaches its supreme manifestation in Christ's incarnation, passion, and resurrection. Balthasar's writing is sweeping and profound, making it one of the most influential works of twentieth-century Catholic systematic theology.",
    "tags": ["神学美学", "基督的荣耀", "天主教神学", "道成肉身"],
    "recommend_for": "学者/神学生",
    "chapters": [
        {"number": 1, "title_zh": "荣耀的神学", "title_en": "A Theology of Glory", "summary_zh": "奠定以荣耀为核心的神学美学方法论。", "summary_en": "Establishes a theological aesthetic methodology centered on glory.", "key_quotes": ["'美是通往真理的途径，而上帝的荣耀是一切美的源头。' / 'Beauty is the path to truth, and God's glory is the source of all beauty.'"]},
        {"number": 2, "title_zh": "十字架上的荣耀", "title_en": "Glory on the Cross", "summary_zh": "论证上帝的荣耀在十字架的软弱中彰显到极致。", "summary_en": "Argues that God's glory is most fully revealed in the weakness of the Cross.", "key_quotes": ["'十字架看似羞辱的顶点，实则是荣耀的巅峰。' / 'The Cross seems the summit of shame but is in truth the pinnacle of glory.'"]},
        {"number": 3, "title_zh": "复活与荣耀的完满", "title_en": "Resurrection and the Fullness of Glory", "summary_zh": "展望复活如何揭示十字架荣耀的终极意义。", "summary_en": "Shows how the Resurrection reveals the ultimate meaning of the Cross's glory.", "key_quotes": ["'复活不是对十字架的否定，而是对十字架荣耀的最终确认。' / 'The Resurrection is not a negation of the Cross but the ultimate confirmation of its glory.'"]}
    ]
},

"book-109": {
    "summary_zh": "亨利·安斯加·凯利以历史和文学的方法追溯'撒但'概念在基督教传统中的演变历程。他从旧约中'敌对者'的角色出发，经由两约之间文献和新约，一直追踪到中世纪和现代文学中的魔鬼形象。本书挑战了许多流行的撒但观念，提供了一个严谨的历史批判视角。",
    "summary_en": "Henry Ansgar Kelly traces the evolution of the concept of 'Satan' in the Christian tradition using historical and literary methods. Starting from the 'adversary' role in the Old Testament, through intertestamental literature and the New Testament, to medieval and modern literary depictions of the devil. The book challenges many popular notions about Satan and provides a rigorous historical-critical perspective.",
    "tags": ["撒但", "思想史", "历史批判", "圣经研究"],
    "recommend_for": "学者/神学生",
    "chapters": [
        {"number": 1, "title_zh": "旧约中的撒但", "title_en": "Satan in the Old Testament", "summary_zh": "考察旧约中'撒但'作为天庭中的控告者角色。", "summary_en": "Examines the role of 'Satan' as accuser in the heavenly court in the Old Testament.", "key_quotes": ["'在旧约中，撒但最初不是上帝的敌人，而是天庭中的检察官。' / 'In the Old Testament, Satan was originally not God's enemy but a prosecutor in the heavenly court.'"]},
        {"number": 2, "title_zh": "两约之间的魔鬼观念", "title_en": "The Devil in Intertestamental Literature", "summary_zh": "追溯两约之间文献中撒但形象的戏剧性变化。", "summary_en": "Traces the dramatic transformation of Satan's image in intertestamental literature.", "key_quotes": ["'在两约之间的时期，撒但从天庭官员变成了宇宙级的邪恶对手。' / 'In the intertestamental period, Satan transformed from a heavenly official into a cosmic adversary of evil.'"]},
        {"number": 3, "title_zh": "新约与早期教会的魔鬼论", "title_en": "The Devil in the New Testament and Early Church", "summary_zh": "分析新约和早期教父如何理解撒但的角色。", "summary_en": "Analyzes how the New Testament and early Church Fathers understood Satan's role.", "key_quotes": ["'新约对撒但的描绘远比流行文化中的形象更加复杂和多层次。' / 'The New Testament's portrayal of Satan is far more complex and nuanced than popular culture suggests.'"]}
    ]
},

"book-111": {
    "summary_zh": "休·汤姆森·科尔从改革宗视角系统论述洗礼和圣餐两大圣礼的神学意义与实践。本书在历史神学的框架中比较了天主教、路德宗和改革宗的圣礼观，特别强调圣礼作为恩典的记号和印证在基督徒生活中的重要地位。学术扎实，适合深入了解圣礼神学。",
    "summary_en": "Hugh Thomson Kerr systematically discusses the theological significance and practice of the two sacraments—baptism and the Lord's Supper—from a Reformed perspective. Within a historical theological framework, the book compares Catholic, Lutheran, and Reformed views of the sacraments, emphasizing their importance as signs and seals of grace in the Christian life. Academically solid, suitable for in-depth study of sacramental theology.",
    "tags": ["圣礼", "洗礼", "圣餐", "改革宗"],
    "recommend_for": "进深者/神学生/牧者",
    "chapters": [
        {"number": 1, "title_zh": "圣礼的性质", "title_en": "The Nature of the Sacraments", "summary_zh": "界定圣礼的定义、数量和神学基础。", "summary_en": "Defines the sacraments, their number, and theological foundation.", "key_quotes": ["'圣礼是可见的话语——上帝用物质的记号向我们传递属灵的恩典。' / 'Sacraments are the visible Word—God conveys spiritual grace to us through material signs.'"]},
        {"number": 2, "title_zh": "洗礼的意义", "title_en": "The Meaning of Baptism", "summary_zh": "阐述洗礼作为与基督联合、罪得洁净的记号。", "summary_en": "Expounds baptism as a sign of union with Christ and cleansing from sin.", "key_quotes": ["'洗礼不是使我们成为基督徒，而是宣告上帝已经在基督里接纳了我们。' / 'Baptism does not make us Christians, but declares that God has already received us in Christ.'"]},
        {"number": 3, "title_zh": "圣餐的神学", "title_en": "The Theology of the Lord's Supper", "summary_zh": "比较不同传统对基督在圣餐中临在方式的理解。", "summary_en": "Compares different traditions' understanding of Christ's presence in the Supper.", "key_quotes": ["'在圣餐中，我们不只是记念基督，更是借着信心真实地领受他。' / 'In the Supper, we do not merely remember Christ but truly receive Him by faith.'"]}
    ]
},

"book-124": {
    "summary_zh": "詹姆斯·博伊斯以清晰易懂的方式系统阐述改革宗恩典教义的五大要点，每一要点都辅以丰富的圣经论据和生动的例证。本书不仅是教义的阐述，更是对上帝恩典之伟大的赞美和敬拜。博伊斯的写作兼具牧者的热情和学者的严谨，是了解改革宗救恩论的绝佳读物。",
    "summary_en": "James Boice clearly and accessibly expounds the five points of Reformed grace, supporting each with rich biblical evidence and vivid illustrations. This book is not merely doctrinal exposition but a celebration and worship of the greatness of God's grace. Boice combines pastoral passion with scholarly rigor, making it an excellent resource for understanding Reformed soteriology.",
    "tags": ["恩典", "改革宗", "TULIP", "救恩论"],
    "recommend_for": "初信者/进深者/牧者",
    "chapters": [
        {"number": 1, "title_zh": "恩典的根基", "title_en": "The Foundation of Grace", "summary_zh": "论述恩典在改革宗神学中的核心地位。", "summary_en": "Discusses the central place of grace in Reformed theology.", "key_quotes": ["'恩典之所以是恩典，正因为它完全出于上帝，与人的功德无关。' / 'Grace is grace precisely because it comes entirely from God, apart from human merit.'"]},
        {"number": 2, "title_zh": "全然败坏与人的无能", "title_en": "Total Depravity and Human Inability", "summary_zh": "阐述人在罪中完全无力自救。", "summary_en": "Explains humanity's complete inability to save itself in sin.", "key_quotes": ["'人最大的问题不是不知道上帝，而是不愿意寻求上帝。' / 'Man's greatest problem is not ignorance of God but unwillingness to seek God.'"]},
        {"number": 3, "title_zh": "不可抗拒的恩典", "title_en": "Irresistible Grace", "summary_zh": "论证上帝的恩典有效地呼召并更新选民的心。", "summary_en": "Argues that God's grace effectually calls and renews the hearts of the elect.", "key_quotes": ["'不可抗拒的恩典不是压倒人的意志，而是释放人被罪捆绑的意志。' / 'Irresistible grace does not override the will but liberates the will from bondage to sin.'"]}
    ]
},

"book-125": {
    "summary_zh": "布坎南的这部经典著作被誉为称义教义最全面的单卷论述之一。他从历史和圣经两条线索入手，详细追溯称义教义从使徒时代到宗教改革的发展脉络，然后系统阐述因信称义的圣经基础。本书以深厚的学术功底捍卫了新教的核心教义，至今仍被广泛引用。",
    "summary_en": "Buchanan's classic work is regarded as one of the most comprehensive single-volume treatments of the doctrine of justification. He traces the doctrine's development from the apostolic age through the Reformation along both historical and biblical lines, then systematically expounds the scriptural basis for justification by faith. With deep scholarship, the book defends the core Protestant doctrine and remains widely cited today.",
    "tags": ["称义", "因信称义", "宗教改革", "历史神学"],
    "recommend_for": "进深者/神学生/学者",
    "chapters": [
        {"number": 1, "title_zh": "称义教义的历史", "title_en": "The History of Justification", "summary_zh": "追溯称义教义在教会历史中的发展演变。", "summary_en": "Traces the development of justification doctrine through church history.", "key_quotes": ["'称义教义是教会站立或跌倒所在的教义。' / 'Justification is the doctrine by which the church stands or falls.'"]},
        {"number": 2, "title_zh": "称义的圣经基础", "title_en": "The Biblical Basis of Justification", "summary_zh": "系统考察旧约和新约中称义的教导。", "summary_en": "Systematically examines the teaching on justification in both Testaments.", "key_quotes": ["'称义不是使人成为义人，而是宣告罪人在基督里被算为义。' / 'Justification is not making a person righteous, but declaring a sinner righteous in Christ.'"]},
        {"number": 3, "title_zh": "因信称义与善行", "title_en": "Justification by Faith and Good Works", "summary_zh": "澄清信心与行为在称义中的正确关系。", "summary_en": "Clarifies the proper relationship between faith and works in justification.", "key_quotes": ["'我们因信称义，不是因为信心本身有什么功德，而是因为信心紧握基督。' / 'We are justified by faith not because faith has any merit, but because faith lays hold of Christ.'"]}
    ]
},

"book-131": {
    "summary_zh": "詹姆斯·怀特以严谨的论证捍卫'唯独圣经'（Sola Scriptura）的改教原则，回应来自天主教和东正教对这一教义的各种质疑。本书详细区分了唯独圣经与'唯有圣经'（Solo Scriptura）的差异，论证圣经的自证性、充分性和最高权威性。是理解新教圣经观的重要护教之作。",
    "summary_en": "James White rigorously defends the Reformation principle of Sola Scriptura against various Catholic and Eastern Orthodox challenges. The book carefully distinguishes Sola Scriptura from Solo Scriptura, arguing for Scripture's self-authentication, sufficiency, and supreme authority. An important apologetic work for understanding the Protestant view of Scripture.",
    "tags": ["唯独圣经", "圣经论", "护教", "宗教改革"],
    "recommend_for": "进深者/牧者/神学生",
    "chapters": [
        {"number": 1, "title_zh": "什么是唯独圣经", "title_en": "What Is Sola Scriptura?", "summary_zh": "准确定义唯独圣经的含义，澄清常见误解。", "summary_en": "Precisely defines Sola Scriptura and clarifies common misunderstandings.", "key_quotes": ["'唯独圣经不是说圣经是唯一的权威，而是说圣经是最高的权威。' / 'Sola Scriptura does not mean Scripture is the only authority, but the highest authority.'"]},
        {"number": 2, "title_zh": "圣经的充分性", "title_en": "The Sufficiency of Scripture", "summary_zh": "论证圣经在信仰和实践上的充分性。", "summary_en": "Argues for the sufficiency of Scripture in matters of faith and practice.", "key_quotes": ["'圣经的充分性意味着我们不需要额外的启示来认识上帝的旨意。' / 'The sufficiency of Scripture means we do not need additional revelation to know God's will.'"]},
        {"number": 3, "title_zh": "回应天主教的挑战", "title_en": "Responding to Catholic Challenges", "summary_zh": "回应天主教关于传统与教会权威的论证。", "summary_en": "Responds to Catholic arguments about tradition and church authority.", "key_quotes": ["'传统必须受圣经的检验，而非圣经受传统的检验。' / 'Tradition must be tested by Scripture, not Scripture by tradition.'"]}
    ]
},

"book-132": {
    "summary_zh": "詹姆斯·怀特针对当代教会中三位一体教义被忽视的现状，重新阐述这一核心信仰的圣经基础和实践意义。本书系统回应了反三一论（如耶和华见证人、一神论）的挑战，以清晰的论证展示三位一体如何从圣经经文中自然浮现。兼具护教性和教导性，是关于三一论的出色入门书。",
    "summary_en": "James White addresses the neglect of Trinitarian doctrine in the contemporary church, restating its biblical foundations and practical significance. The book systematically responds to anti-Trinitarian challenges (such as Jehovah's Witnesses and Unitarianism), clearly demonstrating how the Trinity naturally emerges from biblical texts. Both apologetic and didactic, it is an excellent introduction to Trinitarian theology.",
    "tags": ["三位一体", "护教", "圣经论证", "异端回应"],
    "recommend_for": "初信者/进深者/牧者",
    "chapters": [
        {"number": 1, "title_zh": "三位一体为何重要", "title_en": "Why the Trinity Matters", "summary_zh": "论证三位一体不是抽象教义，而是基督教信仰的根基。", "summary_en": "Argues that the Trinity is not abstract doctrine but the foundation of Christian faith.", "key_quotes": ["'三位一体不是教会发明的理论，而是圣经启示的真理。' / 'The Trinity is not a theory invented by the church, but a truth revealed in Scripture.'"]},
        {"number": 2, "title_zh": "圣经中的三一证据", "title_en": "Biblical Evidence for the Trinity", "summary_zh": "系统梳理支持三位一体的关键经文。", "summary_en": "Systematically surveys key texts supporting the Trinity.", "key_quotes": ["'三位一体的教义不是建立在一两节经文上，而是建立在圣经整体的见证上。' / 'The doctrine of the Trinity rests not on one or two verses but on the total witness of Scripture.'"]},
        {"number": 3, "title_zh": "回应反三一论", "title_en": "Responding to Anti-Trinitarianism", "summary_zh": "回应耶和华见证人等对三位一体教义的攻击。", "summary_en": "Responds to attacks on Trinitarian doctrine by Jehovah's Witnesses and others.", "key_quotes": ["'每一个反三一论的立场最终都不得不曲解圣经的明确教导。' / 'Every anti-Trinitarian position ultimately must distort the clear teaching of Scripture.'"]}
    ]
},

"book-143": {
    "summary_zh": "约翰·班扬以自传体的方式讲述他从极度的罪疚感到经历上帝丰盛恩典的心灵历程。这部清教徒灵修经典真实记录了一个罪人在律法的定罪和福音的安慰之间剧烈挣扎的过程，最终在基督里找到完全的赦免和平安。班扬朴素有力的文字至今仍能深深触动读者的心灵。",
    "summary_en": "John Bunyan narrates in autobiographical style his spiritual journey from extreme guilt to experiencing God's abundant grace. This Puritan devotional classic honestly records a sinner's intense struggle between the condemnation of the law and the comfort of the gospel, ultimately finding complete forgiveness and peace in Christ. Bunyan's simple yet powerful prose continues to deeply move readers today.",
    "tags": ["恩典", "清教徒", "灵修", "自传"],
    "recommend_for": "初信者/进深者",
    "chapters": [
        {"number": 1, "title_zh": "罪中的挣扎", "title_en": "Struggling in Sin", "summary_zh": "描述班扬早年的罪疚感和灵里的黑暗。", "summary_en": "Describes Bunyan's early guilt and spiritual darkness.", "key_quotes": ["'我是罪人中的罪魁，但基督来到世间，正是为了拯救罪人。' / 'I am the chief of sinners, but Christ came into the world to save sinners.'"]},
        {"number": 2, "title_zh": "律法的定罪", "title_en": "The Condemnation of the Law", "summary_zh": "讲述律法如何揭示罪的深重并将人逼到绝望。", "summary_en": "Tells how the law reveals the depth of sin and drives one to despair.", "key_quotes": ["'律法将我击倒在地，使我再无自义可言。' / 'The law struck me down and left me with no self-righteousness to speak of.'"]},
        {"number": 3, "title_zh": "恩典的浇灌", "title_en": "The Outpouring of Grace", "summary_zh": "描述班扬最终经历福音恩典释放的喜乐。", "summary_en": "Describes Bunyan's final experience of the liberating joy of gospel grace.", "key_quotes": ["'恩典何等丰盛！它不仅赦免了我的罪，更赐给我基督的义。' / 'How abundant is grace! It not only pardoned my sin but gave me the righteousness of Christ.'"]}
    ]
},

"book-147": {
    "summary_zh": "约翰·弗雷姆从改革宗认识论出发，系统探讨人如何认识上帝的知识。他提出了著名的'三重视角'（规范性、处境性、存在性），论证所有真知识都涉及上帝律法的权威、受造世界的事实和人的主观经验三个维度的互动。本书是弗雷姆'神学主权'系列的第一卷，对改革宗认识论有深远影响。",
    "summary_en": "John Frame systematically explores how humans know God from a Reformed epistemological standpoint. He introduces his famous 'triperspectival' approach (normative, situational, existential), arguing that all true knowledge involves the interaction of divine law's authority, created reality's facts, and human subjective experience. This first volume in Frame's 'Lordship' series has profoundly influenced Reformed epistemology.",
    "tags": ["认识论", "三重视角", "改革宗", "上帝的主权"],
    "recommend_for": "学者/神学生",
    "chapters": [
        {"number": 1, "title_zh": "知识与上帝的主权", "title_en": "Knowledge and God's Lordship", "summary_zh": "论证一切真知识都以上帝的主权为前提。", "summary_en": "Argues that all true knowledge presupposes God's lordship.", "key_quotes": ["'没有上帝，我们无法认识任何事物；有了上帝，我们能认识一切当认识的。' / 'Without God we can know nothing; with God we can know everything we need to know.'"]},
        {"number": 2, "title_zh": "三重视角", "title_en": "Triperspectivalism", "summary_zh": "介绍规范性、处境性和存在性三个认识视角。", "summary_en": "Introduces the normative, situational, and existential perspectives of knowing.", "key_quotes": ["'每一个视角都包含了其他两个视角——它们不可分割。' / 'Each perspective contains the other two—they are inseparable.'"]},
        {"number": 3, "title_zh": "圣经的认识论权威", "title_en": "The Epistemological Authority of Scripture", "summary_zh": "论证圣经在认识论上的最高权威地位。", "summary_en": "Argues for Scripture's supreme epistemological authority.", "key_quotes": ["'圣经不仅是真理的来源之一，更是判断一切真理的最高标准。' / 'Scripture is not merely one source of truth but the supreme standard by which all truth is judged.'"]}
    ]
},

"book-148": {
    "summary_zh": "弗雷姆在其'神学主权'系列第四卷中系统论述上帝话语（圣经）的本质、权威和充分性。本书从上帝话语的多种形式——旨令性话语、个人性话语和处境性话语——展开论述，强调上帝通过话语施行统治、建立关系和引导子民。是当代改革宗圣经论最重要的系统著作之一。",
    "summary_en": "In the fourth volume of his 'Lordship' series, Frame systematically discusses the nature, authority, and sufficiency of God's Word (Scripture). The book unfolds from the multiple forms of God's Word—decretive, preceptive, and personal—emphasizing how God rules, establishes relationships, and guides His people through His Word. One of the most important contemporary Reformed systematic works on the doctrine of Scripture.",
    "tags": ["圣经论", "上帝的话语", "改革宗", "上帝的主权"],
    "recommend_for": "神学生/学者/牧者",
    "chapters": [
        {"number": 1, "title_zh": "上帝的话语与上帝的主权", "title_en": "God's Word and God's Lordship", "summary_zh": "论证上帝的话语是他主权的表达和施行方式。", "summary_en": "Argues that God's Word is the expression and exercise of His lordship.", "key_quotes": ["'上帝说话就是上帝行动——他的话语带着他的全部权柄。' / 'When God speaks, God acts—His Word carries His full authority.'"]},
        {"number": 2, "title_zh": "圣经的必要性与充分性", "title_en": "The Necessity and Sufficiency of Scripture", "summary_zh": "阐述为什么我们需要圣经，以及圣经如何满足信仰的需要。", "summary_en": "Explains why we need Scripture and how it meets the needs of faith.", "key_quotes": ["'圣经的充分性不是说圣经包含一切知识，而是说它包含我们得救和敬虔生活所需的一切。' / 'Scripture's sufficiency does not mean it contains all knowledge, but all we need for salvation and godly living.'"]},
        {"number": 3, "title_zh": "圣经的明晰性", "title_en": "The Clarity of Scripture", "summary_zh": "论证圣经的核心信息对普通信徒是可理解的。", "summary_en": "Argues that Scripture's central message is understandable to ordinary believers.", "key_quotes": ["'圣经的明晰性不意味着一切都容易理解，而是救恩的核心信息清楚明了。' / 'Scripture's clarity does not mean everything is easy to understand, but that the core message of salvation is plain.'"]}
    ]
},

"book-155": {
    "summary_zh": "约翰·麦克阿瑟针对许多基督徒面临的'我是否真的得救了？'这一困扰，从圣经角度系统论述得救确据的教义。本书区分了真假信心的标志，指出真正的得救确据不是来自一次的决志经历，而是来自持续的生命果实和圣灵的内在见证。是关于救恩确据的实用牧养之作。",
    "summary_en": "John MacArthur addresses the common Christian concern 'Am I truly saved?' by systematically expounding the doctrine of assurance of salvation from Scripture. The book distinguishes marks of true and false faith, pointing out that genuine assurance comes not from a one-time decision but from ongoing fruit of life and the Spirit's internal witness. A practical pastoral work on the assurance of salvation.",
    "tags": ["救恩确据", "信心", "成圣", "牧养"],
    "recommend_for": "初信者/进深者/牧者",
    "chapters": [
        {"number": 1, "title_zh": "你能确知得救吗？", "title_en": "Can You Be Sure You Are Saved?", "summary_zh": "论证得救确据既是可能的也是必要的。", "summary_en": "Argues that assurance of salvation is both possible and necessary.", "key_quotes": ["'上帝不希望他的儿女在不确定中度日——他要我们知道自己已经得救。' / 'God does not want His children to live in uncertainty—He wants us to know we are saved.'"]},
        {"number": 2, "title_zh": "真假信心的区别", "title_en": "The Difference Between True and False Faith", "summary_zh": "指出并非所有自称信主的人都是真信徒。", "summary_en": "Points out that not all who claim faith are true believers.", "key_quotes": ["'真信心必然结出果子——不结果子的信心不是真信心。' / 'True faith inevitably bears fruit—fruitless faith is not true faith.'"]},
        {"number": 3, "title_zh": "圣灵的见证", "title_en": "The Witness of the Spirit", "summary_zh": "阐述圣灵如何在信徒心中作得救的见证。", "summary_en": "Explains how the Holy Spirit bears witness to salvation in believers' hearts.", "key_quotes": ["'圣灵与我们的心同证我们是上帝的儿女。' / 'The Spirit Himself bears witness with our spirit that we are children of God.'"]}
    ]
},

"book-157": {
    "summary_zh": "约翰·慕理以扎实的圣经释经论述洗礼的神学意义，特别为婴儿洗礼进行改革宗立场的辩护。他从恩典之约的连续性出发，论证信徒的子女应当接受洗礼的记号，如同旧约中亚伯拉罕之约中的割礼一样。本书论证严密、释经精细，是改革宗洗礼观的经典辩护之作。",
    "summary_en": "John Murray discusses the theological significance of baptism with solid biblical exegesis, particularly defending infant baptism from a Reformed position. Starting from the continuity of the covenant of grace, he argues that the children of believers should receive the sign of baptism, just as circumcision was given under Abraham's covenant. The book's argumentation is tight and its exegesis precise, making it a classic defense of the Reformed view of baptism.",
    "tags": ["洗礼", "婴儿洗礼", "恩典之约", "改革宗"],
    "recommend_for": "进深者/神学生/牧者",
    "chapters": [
        {"number": 1, "title_zh": "洗礼的意义", "title_en": "The Meaning of Baptism", "summary_zh": "阐述洗礼作为与基督联合和洁净的记号。", "summary_en": "Expounds baptism as a sign of union with Christ and cleansing.", "key_quotes": ["'洗礼所象征的不亚于与基督的死和复活联合。' / 'What baptism signifies is nothing less than union with Christ in His death and resurrection.'"]},
        {"number": 2, "title_zh": "约的连续性与婴儿洗礼", "title_en": "Covenant Continuity and Infant Baptism", "summary_zh": "论证恩典之约的连续性要求信徒的子女受洗。", "summary_en": "Argues that covenant continuity requires the children of believers to be baptized.", "key_quotes": ["'新约没有废除恩典之约对信徒子女的应许，而是将其扩展了。' / 'The New Testament did not revoke the covenant promise to believers' children but expanded it.'"]},
        {"number": 3, "title_zh": "洗礼的模式", "title_en": "The Mode of Baptism", "summary_zh": "探讨洒水礼与浸礼的圣经根据。", "summary_en": "Examines the biblical basis for sprinkling versus immersion.", "key_quotes": ["'洗礼的本质在于其象征意义，而非水的数量。' / 'The essence of baptism lies in its symbolic significance, not the quantity of water.'"]}
    ]
},

"book-158": {
    "summary_zh": "约翰·慕理以精炼而深刻的笔触阐述救赎的各个环节——拣选、呼召、重生、称义、成圣和荣耀——展示上帝救赎计划的完整链条。本书以'金链'（罗马书八章）为框架，论证救恩的每一个环节都出于上帝恩典的主权作为，彼此相连、不可断裂。是改革宗救恩论的必读经典。",
    "summary_en": "John Murray expounds with refined and profound insight each link of redemption—election, calling, regeneration, justification, sanctification, and glorification—displaying the complete chain of God's redemptive plan. Using the 'golden chain' (Romans 8) as framework, the book argues that every aspect of salvation is a sovereign act of God's grace, interconnected and unbreakable. A must-read classic of Reformed soteriology.",
    "tags": ["救恩论", "恩典", "改革宗", "金链"],
    "recommend_for": "进深者/神学生/牧者",
    "chapters": [
        {"number": 1, "title_zh": "有效的呼召", "title_en": "Effectual Calling", "summary_zh": "论述上帝有效的呼召如何确保罪人的悔改。", "summary_en": "Discusses how God's effectual calling ensures the sinner's repentance.", "key_quotes": ["'有效的呼召不是一个建议，而是一道创造性的命令——它创造了它所要求的回应。' / 'Effectual calling is not a suggestion but a creative command—it creates the response it demands.'"]},
        {"number": 2, "title_zh": "称义", "title_en": "Justification", "summary_zh": "系统阐述因信称义的教义核心。", "summary_en": "Systematically expounds the doctrinal core of justification by faith.", "key_quotes": ["'称义是一次性的宣判行动，而非渐进的过程。' / 'Justification is a once-for-all declarative act, not a progressive process.'"]},
        {"number": 3, "title_zh": "成圣", "title_en": "Sanctification", "summary_zh": "探讨信徒在恩典中逐渐被更新为基督形象的过程。", "summary_en": "Explores the process by which believers are progressively renewed into Christ's image by grace.", "key_quotes": ["'成圣是上帝在我们里面所开始的善工，他必成全这工。' / 'Sanctification is the good work God has begun in us, and He will bring it to completion.'"]},
        {"number": 4, "title_zh": "坚忍与荣耀", "title_en": "Perseverance and Glorification", "summary_zh": "论证真信徒必然坚忍到底并最终得荣耀。", "summary_en": "Argues that true believers will certainly persevere to the end and be glorified.", "key_quotes": ["'上帝所预定的人，他必叫他们得荣耀——这链条没有断环。' / 'Those whom God predestined He will also glorify—there is no broken link in this chain.'"]}
    ]
},

"book-159": {
    "summary_zh": "约翰·慕理深入探讨原罪教义中一个核心却常被忽视的问题：亚当的罪如何归算到他的后裔身上？本书以精密的释经和神学论证，阐明亚当作为人类的盟约代表，他的第一次犯罪被归算给全人类，构成所有人定罪的基础。这一教义对理解罗马书第五章和整个救恩论至关重要。",
    "summary_en": "John Murray deeply explores a core but often overlooked issue in the doctrine of original sin: how is Adam's sin imputed to his posterity? Through precise exegesis and theological argumentation, the book explains that as humanity's covenant representative, Adam's first sin is imputed to all people, constituting the basis of universal condemnation. This doctrine is crucial for understanding Romans 5 and soteriology as a whole.",
    "tags": ["原罪", "归算", "亚当", "约神学"],
    "recommend_for": "神学生/学者",
    "chapters": [
        {"number": 1, "title_zh": "罗马书五章12-21节的释经", "title_en": "Exegesis of Romans 5:12-21", "summary_zh": "详细释经保罗关于亚当与基督对比的核心经文。", "summary_en": "Detailed exegesis of Paul's core text on the Adam-Christ parallel.", "key_quotes": ["'因一人的悖逆，众人成为罪人——这不是比喻，而是实际的归算。' / 'By one man's disobedience, many were made sinners—this is not metaphor but actual imputation.'"]},
        {"number": 2, "title_zh": "盟约代表与归算", "title_en": "Federal Headship and Imputation", "summary_zh": "论证亚当作为盟约代表的角色及归算的合理性。", "summary_en": "Argues for Adam's role as federal head and the legitimacy of imputation.", "key_quotes": ["'亚当不仅是人类的始祖，更是全人类的盟约代表。' / 'Adam is not merely the ancestor of humanity but the covenant representative of all people.'"]},
        {"number": 3, "title_zh": "亚当与基督的对照", "title_en": "Adam and Christ Contrasted", "summary_zh": "展示亚当的罪归算与基督义的归算之间的平行结构。", "summary_en": "Shows the parallel structure between the imputation of Adam's sin and Christ's righteousness.", "key_quotes": ["'正如亚当的罪被归算给我们，基督的义也照样被归算给信他的人。' / 'Just as Adam's sin is imputed to us, so Christ's righteousness is imputed to those who believe in Him.'"]}
    ]
},

"book-161": {
    "summary_zh": "约翰·欧文的这部鸿篇巨制系统论证了'有限救赎'（或'确定救赎'）的教义：基督的死是为了特定地、有效地拯救父所赐给他的人。欧文以三段论式的严密逻辑和大量圣经论据，回应了普遍救赎论的各种形式。本书被公认为改革宗赎罪论最深刻、最具影响力的论著。",
    "summary_en": "John Owen's magnum opus systematically argues for the doctrine of 'limited atonement' (or 'definite atonement'): Christ's death specifically and effectually saves those given to Him by the Father. Owen employs rigorous syllogistic logic and extensive biblical evidence to respond to various forms of universal atonement. This book is widely recognized as the most profound and influential treatise on Reformed atonement theology.",
    "tags": ["有限救赎", "赎罪论", "清教徒", "改革宗"],
    "recommend_for": "进深者/神学生/学者",
    "chapters": [
        {"number": 1, "title_zh": "基督之死的目的", "title_en": "The Purpose of Christ's Death", "summary_zh": "论证基督之死有特定的救赎目的和对象。", "summary_en": "Argues that Christ's death has a specific redemptive purpose and intended recipients.", "key_quotes": ["'基督为谁死？他是否为所有人的罪而死，还是为特定之人的罪？' / 'For whom did Christ die? Did He die for the sins of all or for the sins of specific persons?'"]},
        {"number": 2, "title_zh": "三重两难", "title_en": "The Trilemma", "summary_zh": "提出著名的三重两难论证：基督要么为所有人的所有罪而死，要么为所有人的部分罪而死，要么为部分人的所有罪而死。", "summary_en": "Presents the famous trilemma: Christ died either for all sins of all people, some sins of all people, or all sins of some people.", "key_quotes": ["'如果基督为所有人的所有罪而死，为何不是所有人都得救？' / 'If Christ died for all the sins of all people, why are not all saved?'"]},
        {"number": 3, "title_zh": "圣经论据", "title_en": "Biblical Arguments", "summary_zh": "汇集支持确定救赎的关键经文论证。", "summary_en": "Gathers key scriptural arguments supporting definite atonement.", "key_quotes": ["'好牧人为羊舍命——注意，是为羊，不是为山羊。' / 'The good shepherd lays down his life for the sheep—note, for the sheep, not for the goats.'"]}
    ]
},

"book-162": {
    "summary_zh": "约翰·欧文的这篇经典论文深入探讨信徒如何靠着圣灵治死内心的罪。他以罗马书八章13节为出发点，揭示罪在信徒生命中的顽固性和欺骗性，并提供了治死罪的具体方法：认识罪的严重性、不与罪妥协、依靠圣灵的能力。本书是清教徒成圣神学的巅峰之作，至今仍被广泛推荐。",
    "summary_en": "John Owen's classic treatise deeply explores how believers mortify indwelling sin by the Holy Spirit. Starting from Romans 8:13, he reveals the stubbornness and deceitfulness of sin in the believer's life and provides practical methods for mortification: recognizing sin's seriousness, never compromising with sin, and relying on the Spirit's power. A pinnacle of Puritan sanctification theology, still widely recommended today.",
    "tags": ["治死罪", "成圣", "清教徒", "圣灵"],
    "recommend_for": "进深者/牧者",
    "chapters": [
        {"number": 1, "title_zh": "治死罪的必要性", "title_en": "The Necessity of Mortification", "summary_zh": "论证信徒必须持续与内心的罪争战。", "summary_en": "Argues that believers must continually wage war against indwelling sin.", "key_quotes": ["'不治死罪，罪就治死你——没有中间地带。' / 'Be killing sin, or it will be killing you—there is no middle ground.'"]},
        {"number": 2, "title_zh": "罪的本质与欺骗", "title_en": "The Nature and Deceitfulness of Sin", "summary_zh": "揭示内住之罪的顽固性和欺骗策略。", "summary_en": "Reveals the stubbornness and deceptive strategies of indwelling sin.", "key_quotes": ["'罪总是在追求最坏的结果，即使在最好的人身上也是如此。' / 'Sin always aims at the utmost, even in the best of men.'"]},
        {"number": 3, "title_zh": "靠圣灵治死罪", "title_en": "Mortification by the Spirit", "summary_zh": "阐述唯有依靠圣灵的能力才能真正治死罪。", "summary_en": "Explains that only through the Spirit's power can sin be truly mortified.", "key_quotes": ["'治死罪是圣灵独特的工作——我们的努力若不靠圣灵便毫无果效。' / 'Mortification is the peculiar work of the Spirit—our efforts without the Spirit are utterly fruitless.'"]}
    ]
},

"book-163": {
    "summary_zh": "约翰·欧文以系统的神学论证和丰富的圣经依据捍卫圣徒坚忍的教义：真正蒙恩得救的信徒不会也不可能最终从恩典中失落。他从上帝的拣选、基督的代祷、圣灵的保守和新约的应许等多个角度论证了这一安慰人心的真理。本书是改革宗坚忍教义最权威的古典论述之一。",
    "summary_en": "John Owen defends the doctrine of the perseverance of the saints with systematic theological argumentation and rich biblical evidence: truly regenerate believers neither will nor can ultimately fall from grace. He argues from God's election, Christ's intercession, the Spirit's preservation, and new covenant promises. This book is one of the most authoritative classical expositions of the Reformed doctrine of perseverance.",
    "tags": ["圣徒坚忍", "救恩保障", "改革宗", "清教徒"],
    "recommend_for": "进深者/神学生/牧者",
    "chapters": [
        {"number": 1, "title_zh": "教义的圣经基础", "title_en": "The Biblical Foundation of the Doctrine", "summary_zh": "汇集支持圣徒坚忍的关键圣经经文。", "summary_en": "Gathers key biblical texts supporting the perseverance of the saints.", "key_quotes": ["'谁能使我们与基督的爱隔绝呢？' / 'Who shall separate us from the love of Christ?'"]},
        {"number": 2, "title_zh": "上帝拣选的不变性", "title_en": "The Immutability of God's Election", "summary_zh": "论证上帝的拣选是永恒不变的，因此选民不会失落。", "summary_en": "Argues that God's election is eternally immutable, so the elect cannot be lost.", "key_quotes": ["'上帝不拣选会失落的人——他的拣选本身就保证了他们的坚忍。' / 'God does not elect those who will be lost—His very election guarantees their perseverance.'"]},
        {"number": 3, "title_zh": "基督的代祷与保守", "title_en": "Christ's Intercession and Preservation", "summary_zh": "阐述基督持续的代祷如何确保信徒不至失落。", "summary_en": "Explains how Christ's ongoing intercession ensures believers will not be lost.", "key_quotes": ["'基督长远活着为我们代求——这代求永不失败。' / 'Christ ever lives to make intercession for us—this intercession never fails.'"]}
    ]
},

"book-167": {
    "summary_zh": "约翰·派博在本书中以热情洋溢的笔触论证上帝是一位在自身荣耀和子民喜乐中找到至高满足的上帝。他以'基督徒享乐主义'的框架阐述：上帝追求自己的荣耀与上帝追求我们的喜乐并不矛盾，因为'上帝在我们最以他为乐的时候最得荣耀'。本书挑战了功利主义和义务主义的敬拜观，呼唤信徒在神里面找到至深的喜乐。",
    "summary_en": "John Piper passionately argues that God is one who finds supreme satisfaction in His own glory and His people's joy. Using the framework of 'Christian hedonism,' he explains that God's pursuit of His own glory and His pursuit of our joy are not contradictory, because 'God is most glorified in us when we are most satisfied in Him.' The book challenges utilitarian and duty-based views of worship, calling believers to find their deepest joy in God.",
    "tags": ["基督徒享乐主义", "上帝的荣耀", "喜乐", "敬拜"],
    "recommend_for": "初信者/进深者/牧者",
    "chapters": [
        {"number": 1, "title_zh": "上帝至高的喜乐", "title_en": "The Happiness of God", "summary_zh": "论证上帝本身是一位至福的、喜乐的上帝。", "summary_en": "Argues that God Himself is a blessed, joyful God.", "key_quotes": ["'上帝在自己里面拥有无穷的喜乐——这是他一切作为的根基。' / 'God has infinite joy in Himself—this is the foundation of everything He does.'"]},
        {"number": 2, "title_zh": "基督徒享乐主义", "title_en": "Christian Hedonism", "summary_zh": "提出并解释'上帝在我们最以他为乐的时候最得荣耀'这一核心主张。", "summary_en": "Presents and explains the core claim that 'God is most glorified in us when we are most satisfied in Him.'", "key_quotes": ["'上帝在我们最以他为乐的时候最得荣耀。' / 'God is most glorified in us when we are most satisfied in Him.'"]},
        {"number": 3, "title_zh": "以神为乐的生活", "title_en": "Living for God's Joy", "summary_zh": "探讨基督徒享乐主义如何改变祷告、传福音和受苦的态度。", "summary_en": "Explores how Christian hedonism transforms attitudes toward prayer, evangelism, and suffering.", "key_quotes": ["'传教士的呼召不是放弃快乐，而是在上帝里面追求更大的快乐。' / 'The missionary's call is not to give up happiness, but to pursue greater happiness in God.'"]}
    ]
},

"book-173": {
    "summary_zh": "爱德华兹以严密的哲学推理和深厚的圣经神学回应当时对原罪教义的攻击，论证人类堕落后的罪性是一个不可否认的事实。他从亚当与后裔之间的盟约关系出发，阐明罪的普遍性和归算的合理性。本书是十八世纪新英格兰神学的代表作，对改革宗罪论有深远影响。",
    "summary_en": "Edwards responds to contemporary attacks on the doctrine of original sin with rigorous philosophical reasoning and deep biblical theology, arguing that humanity's sinful nature after the Fall is an undeniable reality. Starting from the covenant relationship between Adam and his posterity, he demonstrates the universality of sin and the reasonableness of imputation. A representative work of eighteenth-century New England theology with lasting influence on Reformed hamartiology.",
    "tags": ["原罪", "罪论", "爱德华兹", "改革宗"],
    "recommend_for": "学者/神学生",
    "chapters": [
        {"number": 1, "title_zh": "罪的普遍性之证据", "title_en": "Evidence of the Universality of Sin", "summary_zh": "从经验和历史论证所有人都是罪人。", "summary_en": "Argues from experience and history that all people are sinners.", "key_quotes": ["'环顾人类历史，罪的普遍性是一个无法回避的事实。' / 'Surveying human history, the universality of sin is an inescapable fact.'"]},
        {"number": 2, "title_zh": "罪的归算与亚当的代表性", "title_en": "The Imputation of Sin and Adam's Representation", "summary_zh": "论证亚当的罪如何正当地归算给他的后裔。", "summary_en": "Argues how Adam's sin is justly imputed to his posterity.", "key_quotes": ["'上帝将亚当和他的后裔视为一个整体——因此亚当的罪就是我们的罪。' / 'God treats Adam and his posterity as one—therefore Adam's sin is our sin.'"]},
        {"number": 3, "title_zh": "人性的败坏", "title_en": "The Corruption of Human Nature", "summary_zh": "阐述堕落后人性在每一方面的腐败。", "summary_en": "Expounds the corruption of human nature in every aspect after the Fall.", "key_quotes": ["'人的败坏不是轻微的瑕疵，而是深入骨髓的全面腐化。' / 'Human corruption is not a minor blemish but a thoroughgoing depravity reaching to the core.'"]}
    ]
},

"book-181": {
    "summary_zh": "凯斯·马西森系统考察了圣餐教义在教会历史中的发展，特别聚焦于改革宗对基督在圣餐中真实临在的理解。本书梳理了从早期教父到宗教改革各主要立场的演变，并为加尔文的圣餐观——基督借圣灵在圣餐中真实临在——进行了有力的辩护。是了解改革宗圣餐神学的重要参考书。",
    "summary_en": "Keith Mathison systematically surveys the development of eucharistic doctrine through church history, focusing on the Reformed understanding of Christ's real presence in the Supper. The book traces the evolution from early church fathers through the major Reformation positions and offers a strong defense of Calvin's view—Christ's real presence in the Supper through the Holy Spirit. An important reference for understanding Reformed eucharistic theology.",
    "tags": ["圣餐", "改革宗", "基督的临在", "历史神学"],
    "recommend_for": "进深者/神学生/牧者",
    "chapters": [
        {"number": 1, "title_zh": "早期教会的圣餐观", "title_en": "The Eucharist in the Early Church", "summary_zh": "考察早期教父对圣餐的理解。", "summary_en": "Examines the early Church Fathers' understanding of the Eucharist.", "key_quotes": ["'早期教会一致认为基督在圣餐中真实临在，尽管对方式有不同看法。' / 'The early church unanimously held that Christ is truly present in the Supper, though differing on the manner.'"]},
        {"number": 2, "title_zh": "宗教改革的圣餐论争", "title_en": "The Eucharistic Controversies of the Reformation", "summary_zh": "分析路德、慈运理和加尔文在圣餐上的分歧。", "summary_en": "Analyzes the disagreements between Luther, Zwingli, and Calvin on the Supper.", "key_quotes": ["'加尔文的圣餐观是一条中间路线——既非路德的实体临在，也非慈运理的纯粹象征。' / 'Calvin's view is a middle way—neither Luther's bodily presence nor Zwingli's mere symbolism.'"]},
        {"number": 3, "title_zh": "基督借圣灵的临在", "title_en": "Christ's Presence Through the Spirit", "summary_zh": "阐述加尔文关于基督借圣灵在圣餐中真实临在的教导。", "summary_en": "Expounds Calvin's teaching on Christ's real presence in the Supper through the Spirit.", "key_quotes": ["'虽然基督的身体在天上，但圣灵将他的生命赐给我们——这是真实的临在。' / 'Though Christ's body is in heaven, the Spirit imparts His life to us—this is a real presence.'"]}
    ]
},

"book-182": {
    "summary_zh": "本书是凯斯·马西森对加尔文圣餐教义更聚焦的研究，深入加尔文本人的著作和思想脉络，重新呈现这位改教家对主的晚餐的丰富理解。马西森论证加尔文的圣餐观——信徒借着圣灵在圣餐中真实地领受基督——远比通常被归结的'属灵临在'更加深刻和丰富。",
    "summary_en": "This book is Mathison's more focused study on Calvin's eucharistic doctrine, delving into Calvin's own writings and intellectual context to re-present the Reformer's rich understanding of the Lord's Supper. Mathison argues that Calvin's view—believers truly receive Christ in the Supper through the Spirit—is far more profound and rich than the 'spiritual presence' label usually attributed to it.",
    "tags": ["加尔文", "圣餐", "改革宗", "历史神学"],
    "recommend_for": "神学生/学者",
    "chapters": [
        {"number": 1, "title_zh": "加尔文的圣餐神学", "title_en": "Calvin's Eucharistic Theology", "summary_zh": "系统呈现加尔文关于主的晚餐的核心教导。", "summary_en": "Systematically presents Calvin's core teaching on the Lord's Supper.", "key_quotes": ["'加尔文视圣餐为上帝恩典最宝贵的管道之一。' / 'Calvin regarded the Supper as one of God's most precious channels of grace.'"]},
        {"number": 2, "title_zh": "加尔文与同时代的论争", "title_en": "Calvin and His Contemporary Debates", "summary_zh": "考察加尔文如何回应路德宗和慈运理派的挑战。", "summary_en": "Examines how Calvin responded to Lutheran and Zwinglian challenges.", "key_quotes": ["'加尔文同时反对将圣餐简化为纯粹的象征和将基督囚禁在饼和杯中。' / 'Calvin opposed both reducing the Supper to mere symbolism and confining Christ to the bread and cup.'"]},
        {"number": 3, "title_zh": "重拾加尔文的遗产", "title_en": "Recovering Calvin's Legacy", "summary_zh": "呼吁当代改革宗教会重新认识和实践加尔文的圣餐教导。", "summary_en": "Calls on contemporary Reformed churches to rediscover and practice Calvin's eucharistic teaching.", "key_quotes": ["'我们若忽视圣餐，就是忽视上帝赐给教会最宝贵的恩典途径之一。' / 'To neglect the Supper is to neglect one of God's most precious means of grace given to the church.'"]}
    ]
},

"book-183": {
    "summary_zh": "基思·马西森回顾和辨析'唯独圣经'原则在教会历史中的各种理解形态，区分改教家们的'唯独圣经'（承认圣经为最高权威同时尊重教会传统的辅助角色）与后来的'唯有圣经'（完全拒绝传统的个人主义解经）。本书为当代关于圣经权威的争论提供了重要的历史视角和神学框架。",
    "summary_en": "Keith Mathison surveys and analyzes the various shapes of the Sola Scriptura principle through church history, distinguishing the Reformers' Sola Scriptura (affirming Scripture as highest authority while respecting tradition's auxiliary role) from later Solo Scriptura (individualistic interpretation rejecting all tradition). The book provides an important historical perspective and theological framework for contemporary debates on biblical authority.",
    "tags": ["唯独圣经", "圣经权威", "教会传统", "宗教改革"],
    "recommend_for": "进深者/神学生/牧者",
    "chapters": [
        {"number": 1, "title_zh": "早期教会与圣经权威", "title_en": "The Early Church and Biblical Authority", "summary_zh": "考察早期教父如何看待圣经与传统的关系。", "summary_en": "Examines how early Church Fathers viewed the relationship between Scripture and tradition.", "key_quotes": ["'早期教父视圣经为最高权威，但从未脱离教会传统的解经语境。' / 'The early Fathers viewed Scripture as supreme authority, but never apart from the interpretive context of church tradition.'"]},
        {"number": 2, "title_zh": "改教家的唯独圣经", "title_en": "The Reformers' Sola Scriptura", "summary_zh": "阐述路德和加尔文如何理解圣经的独一最高权威。", "summary_en": "Explains how Luther and Calvin understood Scripture's unique supreme authority.", "key_quotes": ["'改教家们不是反传统，而是将传统置于圣经权威之下。' / 'The Reformers were not anti-tradition but placed tradition under scriptural authority.'"]},
        {"number": 3, "title_zh": "唯独圣经与唯有圣经的区别", "title_en": "Sola Scriptura vs. Solo Scriptura", "summary_zh": "区分改教原则与后来个人主义解经的变异形态。", "summary_en": "Distinguishes the Reformation principle from its later individualist mutation.", "key_quotes": ["'唯有圣经的结果不是更忠于圣经，而是解经的混乱。' / 'The result of Solo Scriptura is not greater faithfulness to Scripture but interpretive chaos.'"]}
    ]
},

"book-190": {
    "summary_zh": "金·里德尔巴格为无千禧年论（即'已然-未然'末世论）进行了清晰有力的辩护。他论证启示录二十章的'千年'应当象征性地理解为基督在十字架与再来之间统治的整个时期，而非字面上未来的一千年。本书回应了时代论前千禧年论和后千禧年论的立场，以改革宗释经原则重新解读末世经文。",
    "summary_en": "Kim Riddlebarger offers a clear and compelling defense of amillennialism (the 'already-not yet' eschatology). He argues that the 'millennium' of Revelation 20 should be understood symbolically as the entire period of Christ's reign between the Cross and His return, not a literal future thousand years. The book responds to dispensational premillennialism and postmillennialism, reinterpreting eschatological texts with Reformed hermeneutical principles.",
    "tags": ["无千禧年论", "末世论", "启示录", "改革宗"],
    "recommend_for": "进深者/神学生/牧者",
    "chapters": [
        {"number": 1, "title_zh": "千禧年观的历史", "title_en": "A History of Millennial Views", "summary_zh": "概述教会历史中各种千禧年观的发展。", "summary_en": "Surveys the development of various millennial views through church history.", "key_quotes": ["'无千禧年论不是一种新发明——它是最古老的千禧年解释之一。' / 'Amillennialism is not a new invention—it is one of the oldest millennial interpretations.'"]},
        {"number": 2, "title_zh": "启示录二十章的解释", "title_en": "The Interpretation of Revelation 20", "summary_zh": "系统释经启示录二十章中的千年统治。", "summary_en": "Systematically interprets the millennial reign in Revelation 20.", "key_quotes": ["'千年是象征性的数字，代表基督从复活到再来的整个统治时期。' / 'The thousand years is a symbolic number representing Christ's entire reign from resurrection to return.'"]},
        {"number": 3, "title_zh": "已然与未然", "title_en": "The Already and the Not Yet", "summary_zh": "阐述末世已经在基督里开始但尚未完全实现的张力。", "summary_en": "Explains the tension between what has already begun in Christ and what is not yet fully realized.", "key_quotes": ["'我们活在两个时代的交汇处——国度已经临到，但尚未完全显现。' / 'We live at the intersection of two ages—the kingdom has come, but is not yet fully manifest.'"]}
    ]
},

"book-195": {
    "summary_zh": "马丁·路德的这部论战性著作是对伊拉斯谟《论自由意志》的强力回应，也是宗教改革最重要的神学文献之一。路德以激烈的笔触论证：在得救的事上，人的意志完全被罪捆绑，无力自行归向上帝，唯独上帝的恩典能释放和更新人的意志。本书深刻影响了改革宗和路德宗的救恩论发展。",
    "summary_en": "Luther's polemical work is a powerful response to Erasmus's On Free Will and one of the Reformation's most important theological documents. Luther argues forcefully that in matters of salvation, the human will is completely bound by sin, incapable of turning to God on its own—only God's grace can liberate and renew the will. This book profoundly influenced the development of Reformed and Lutheran soteriology.",
    "tags": ["意志的捆绑", "恩典", "宗教改革", "救恩论"],
    "recommend_for": "进深者/神学生/学者",
    "chapters": [
        {"number": 1, "title_zh": "与伊拉斯谟的论战", "title_en": "The Debate with Erasmus", "summary_zh": "交代论战背景，回应伊拉斯谟对自由意志的辩护。", "summary_en": "Sets the context of the debate and responds to Erasmus's defense of free will.", "key_quotes": ["'你和其他人不同，你击中了问题的核心——这确实是关键所在。' / 'You alone, unlike all others, have hit upon the central issue—this is indeed the crux of the matter.'"]},
        {"number": 2, "title_zh": "人的意志在罪中的捆绑", "title_en": "The Bondage of the Will in Sin", "summary_zh": "系统论证堕落后人的意志完全被罪辖制。", "summary_en": "Systematically argues that after the Fall, the human will is completely enslaved to sin.", "key_quotes": ["'人的意志如同一匹被骑的马——不是上帝骑着它，就是魔鬼骑着它。' / 'The human will is like a horse being ridden—either God rides it, or the devil rides it.'"]},
        {"number": 3, "title_zh": "上帝主权的恩典", "title_en": "The Sovereign Grace of God", "summary_zh": "论证唯独上帝的恩典能释放被捆绑的意志。", "summary_en": "Argues that God's grace alone can liberate the bound will.", "key_quotes": ["'如果我们相信基督以他的血救赎了人，我们就必须承认整个人都失丧了。' / 'If we believe that Christ redeemed men by His blood, we are forced to confess that all of man was lost.'"]}
    ]
},

"book-196": {
    "summary_zh": "迈克尔·艾伦全面梳理成圣教义的圣经基础、历史发展和当代意义。本书从三位一体的视角展开，强调成圣是父、子、圣灵共同的工作，不仅是道德提升，更是在基督里全人的更新。艾伦与不同神学传统对话，为改革宗成圣观提供了清晰而平衡的当代表述。",
    "summary_en": "Michael Allen comprehensively surveys the biblical foundations, historical development, and contemporary significance of the doctrine of sanctification. From a Trinitarian perspective, the book emphasizes that sanctification is the cooperative work of Father, Son, and Holy Spirit—not merely moral improvement but the renewal of the whole person in Christ. Allen engages with different theological traditions, offering a clear and balanced contemporary statement of the Reformed view of sanctification.",
    "tags": ["成圣", "三位一体", "改革宗", "基督徒生活"],
    "recommend_for": "进深者/神学生/牧者",
    "chapters": [
        {"number": 1, "title_zh": "成圣的三一基础", "title_en": "The Trinitarian Basis of Sanctification", "summary_zh": "论证成圣是三一上帝共同参与的恩典工作。", "summary_en": "Argues that sanctification is a gracious work involving the entire Trinity.", "key_quotes": ["'成圣不只是圣灵的工作——它是三一上帝共同的计划和行动。' / 'Sanctification is not merely the Spirit's work—it is the plan and action of the triune God.'"]},
        {"number": 2, "title_zh": "与基督联合与成圣", "title_en": "Union with Christ and Sanctification", "summary_zh": "阐述与基督联合如何成为成圣的根基。", "summary_en": "Explains how union with Christ is the foundation of sanctification.", "key_quotes": ["'一切成圣的恩典都流自与基督的联合——离了他，我们什么也不能做。' / 'All sanctifying grace flows from union with Christ—apart from Him we can do nothing.'"]},
        {"number": 3, "title_zh": "成圣与基督徒生活", "title_en": "Sanctification and the Christian Life", "summary_zh": "探讨成圣教义对日常基督徒生活的实际含义。", "summary_en": "Explores the practical implications of sanctification for daily Christian life.", "key_quotes": ["'成圣不是逃离世界，而是在世界中活出基督的样式。' / 'Sanctification is not fleeing the world but living out Christ's likeness in the world.'"]}
    ]
},

"book-207": {
    "summary_zh": "迈克尔·里夫斯以温暖而富有感染力的文字引导读者进入三位一体教义的核心——上帝从永恒中就是一位充满喜乐和爱的上帝。本书从父对子的永恒之爱出发，展示这种爱如何借着圣灵溢流到创造、救赎和信徒的生命中。里夫斯成功地将最深奥的教义变成了最动人的灵修读物。",
    "summary_en": "Michael Reeves guides readers with warm, contagious prose into the heart of the Trinity—God who from all eternity is full of joy and love. Starting from the Father's eternal love for the Son, the book shows how this love overflows through the Spirit into creation, redemption, and believers' lives. Reeves brilliantly transforms the most profound doctrine into the most moving devotional reading.",
    "tags": ["三位一体", "喜乐", "灵修", "上帝的爱"],
    "recommend_for": "慕道友/初信者/进深者",
    "chapters": [
        {"number": 1, "title_zh": "父对子的爱", "title_en": "The Father's Love for the Son", "summary_zh": "从三一上帝内在的爱关系开始论述。", "summary_en": "Begins with the internal love relationship within the triune God.", "key_quotes": ["'上帝不是从创造才开始去爱——他从永恒就是爱，因为他是三位一体的。' / 'God did not begin to love at creation—He has been love from eternity, because He is Trinity.'"]},
        {"number": 2, "title_zh": "创造：爱的溢流", "title_en": "Creation: The Overflow of Love", "summary_zh": "论证创造是三一上帝之爱向外溢流的结果。", "summary_en": "Argues that creation is the overflow of the triune God's love.", "key_quotes": ["'上帝创造世界不是因为孤独，而是因为他的爱太丰盛了。' / 'God did not create the world out of loneliness, but because His love is so abundant.'"]},
        {"number": 3, "title_zh": "救赎：爱的高峰", "title_en": "Redemption: The Climax of Love", "summary_zh": "展示三一之爱如何在十字架上达到顶峰。", "summary_en": "Shows how Trinitarian love reaches its climax at the Cross.", "key_quotes": ["'十字架是三一上帝之爱最极致的彰显——父差子，子顺服，圣灵赐下力量。' / 'The Cross is the supreme display of Trinitarian love—the Father sends, the Son obeys, the Spirit empowers.'"]}
    ]
},

"book-208": {
    "summary_zh": "迈克尔·威廉斯以生动的叙事风格重新讲述圣经的整体故事线——从创造到新创造——并将其置于改革宗约神学的框架中理解。本书展示圣经不是一本道德故事集，而是一个完整的、以基督为中心的救赎叙事。威廉斯的写作既有学术深度又通俗易读，帮助读者把握圣经的宏大图景。",
    "summary_en": "Michael Williams retells the Bible's overarching storyline—from creation to new creation—in vivid narrative style, framing it within Reformed covenant theology. The book demonstrates that the Bible is not a collection of moral tales but a complete, Christ-centered redemptive narrative. Williams combines scholarly depth with accessible writing, helping readers grasp the Bible's grand picture.",
    "tags": ["圣经叙事", "约神学", "救赎历史", "改革宗"],
    "recommend_for": "初信者/进深者",
    "chapters": [
        {"number": 1, "title_zh": "创造与约", "title_en": "Creation and Covenant", "summary_zh": "讲述上帝创造世界并与人立约的起始。", "summary_en": "Tells of God's creation of the world and His covenant with humanity.", "key_quotes": ["'圣经从第一页起就不只是历史——它是一个爱的盟约故事。' / 'From its first page, the Bible is not just history—it is a covenant love story.'"]},
        {"number": 2, "title_zh": "堕落与应许", "title_en": "Fall and Promise", "summary_zh": "描述人类的堕落和上帝救赎应许的开启。", "summary_en": "Describes humanity's fall and the opening of God's redemptive promise.", "key_quotes": ["'堕落不是故事的结束，而是恩典故事的开始。' / 'The Fall is not the end of the story but the beginning of the story of grace.'"]},
        {"number": 3, "title_zh": "基督——故事的中心", "title_en": "Christ—The Center of the Story", "summary_zh": "展示整本圣经如何指向基督。", "summary_en": "Shows how the entire Bible points to Christ.", "key_quotes": ["'圣经的每一页都在低声呼喊：基督来了，基督来了。' / 'Every page of the Bible whispers: Christ is coming, Christ is coming.'"]},
        {"number": 4, "title_zh": "新创造", "title_en": "New Creation", "summary_zh": "展望上帝救赎故事的终极完成。", "summary_en": "Looks forward to the ultimate completion of God's redemptive story.", "key_quotes": ["'结局不是逃离这个世界，而是上帝更新这个世界。' / 'The ending is not escape from this world, but God's renewal of this world.'"]}
    ]
}

}
