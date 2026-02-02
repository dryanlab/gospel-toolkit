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

def add_faith_science_content(data, start_id):
    """Add 12 faith-science entries"""
    
    faith_science_entries = [
        {
            "title_zh": "基督教与科学：伙伴还是敌人？",
            "title_en": "Christianity & Science: Partners or Enemies?",
            "content_zh": "很多人认为信仰和科学互相冲突，但历史告诉我们不同的故事。许多伟大科学家都是基督徒：牛顿、开普勒、法拉第、孟德尔、巴斯德等。为什么？因为基督教worldview其实promote科学研究。首先，上帝创造了orderly universe，所以我们可以通过观察和实验discover规律。如果世界是random，科学就不可能。其次，人类按上帝形象造，有理性思考能力，可以understand创造。第三，'治理这地'的命令包括了解自然界。但要记住科学的limitation：科学告诉我们'怎么'，但不能告诉我们'为什么'和'应该'。科学research natural world，但不能回答meaning、purpose、morality的问题。最重要的：科学和信仰不是competing for same territory，而是complementary ways理解上帝的创造。",
            "content_en": "Many think faith and science conflict, but history tells a different story. Many great scientists were Christians: Newton, Kepler, Faraday, Mendel, Pasteur, etc. Why? Because the Christian worldview actually promotes scientific research. First, God created an orderly universe, so we can discover laws through observation and experiment. If the world were random, science would be impossible. Second, humans are made in God's image with rational thinking ability to understand creation. Third, the command to 'subdue the earth' includes understanding nature. But remember science's limitations: science tells us 'how' but can't tell us 'why' or 'should.' Science researches the natural world but can't answer questions of meaning, purpose, morality. Most importantly: science and faith aren't competing for the same territory but are complementary ways of understanding God's creation.",
            "bible_verses": ["Genesis 1:28", "Psalm 19:1", "Romans 1:20", "Colossians 1:16-17"],
            "discussion_questions": [
                "为什么有些人认为科学和信仰冲突？Why do some think science and faith conflict?",
                "科学如何增强你对上帝的认识？How does science enhance your knowledge of God?",
                "基督徒科学家的motivation与非基督徒有何不同？How might Christian scientists' motivations differ from non-Christians'?"
            ],
            "tags": ["science-faith", "apologetics", "worldview"]
        },
        {
            "title_zh": "创造vs进化：理解起源的争论",
            "title_en": "Creation vs Evolution: Understanding Origins Debate",
            "content_zh": "创造和进化的争论很complex，基督徒内部也有不同观点。重要的是understand不同perspectives而非simply dismiss。首先，区分operational science和historical science。我们可以重复实验research现在的processes，但不能time travel验证过去。其次，认识不同的creation观点：年轻地球创造论、老地球创造论、theistic evolution等。都affirm上帝是ultimate creator，但对'如何'和'何时'有不同理解。第三，关键问题不是earth的年龄，而是universe的meaning。Random chance能产生complexity和beauty吗？Life有purpose吗？第四，无论你持哪种观点，要humble。我们都是finite beings trying理解infinite God的work。第五，focus on common ground：上帝是creator，人类special，life有meaning。这些比technical details更重要。",
            "content_en": "The creation vs evolution debate is complex, with different views even among Christians. Important to understand different perspectives rather than simply dismiss. First, distinguish operational science from historical science. We can repeat experiments to research current processes, but can't time travel to verify the past. Second, recognize different creation views: young earth creationism, old earth creationism, theistic evolution, etc. All affirm God as ultimate creator but differ on 'how' and 'when.' Third, the key issue isn't earth's age but the universe's meaning. Can random chance produce complexity and beauty? Does life have purpose? Fourth, whatever view you hold, be humble. We're all finite beings trying to understand infinite God's work. Fifth, focus on common ground: God is creator, humans are special, life has meaning. These matter more than technical details.",
            "bible_verses": ["Genesis 1:1", "John 1:3", "Hebrews 11:3", "Isaiah 55:8-9"],
            "discussion_questions": [
                "这个争论为什么对基督徒很重要？Why is this debate important to Christians?",
                "你如何回应atheist朋友的进化论challenge？How would you respond to an atheist friend's evolution challenge?",
                "不同的creation观点如何影响我们的faith？How do different creation views affect our faith?"
            ],
            "tags": ["creation", "evolution", "origins"]
        },
        {
            "title_zh": "大爆炸与创世记：科学发现神的荣耀",
            "title_en": "Big Bang & Genesis: Science Revealing God's Glory",
            "content_zh": "Big Bang theory听起来和创世记冲突，其实不然。这个理论说universe有beginning，这其实支持圣经！在20世纪前，大多数科学家认为universe是eternal，但Big Bang显示时间、空间、matter都有starting point。这remarkably consistent with Genesis 1:1'起初上帝创造天地'。首先，'无中生有'曾经被科学家嘲笑，现在却是established science。什么能从nothing创造something？只有all-powerful God。其次，universe的fine-tuning amazing：physical constants如果稍微不同，life就不可能存在。这看起来像intelligent design而非accident。第三，universe的order和beauty显示creator的character。从galaxies的spiral到DNA的structure，处处显明上帝的智慧。科学不是上帝的enemy，而是discovering祂creation的magnificence的tool。",
            "content_en": "Big Bang theory sounds like it conflicts with Genesis, but actually doesn't. This theory says the universe has a beginning, which actually supports the Bible! Before the 20th century, most scientists thought the universe was eternal, but Big Bang shows time, space, matter all have a starting point. This is remarkably consistent with Genesis 1:1 'In the beginning God created the heavens and the earth.' First, 'creation from nothing' was once mocked by scientists, now it's established science. What can create something from nothing? Only an all-powerful God. Second, the universe's fine-tuning is amazing: if physical constants were slightly different, life would be impossible. This looks like intelligent design, not accident. Third, the universe's order and beauty reveal the creator's character. From galaxies' spirals to DNA's structure, everywhere shows God's wisdom. Science isn't God's enemy but a tool for discovering His creation's magnificence.",
            "bible_verses": ["Genesis 1:1", "Hebrews 11:3", "Psalm 8:3-4", "Romans 1:20"],
            "discussion_questions": [
                "Big Bang theory如何支持而非反驳创造？How does Big Bang theory support rather than refute creation?",
                "universe的fine-tuning说明了什么？What does the universe's fine-tuning suggest?",
                "科学发现如何增强你的worship？How do scientific discoveries enhance your worship?"
            ],
            "tags": ["big-bang", "cosmology", "fine-tuning"]
        },
        {
            "title_zh": "恐龙与圣经：古代世界的奥秘",
            "title_en": "Dinosaurs & Bible: Mysteries of the Ancient World",
            "content_zh": "恐龙是小孩最喜欢的话题之一，但也带来questions：圣经为什么没有明确mention dinosaurs？它们如何fit into biblical timeline？首先，'dinosaur'这个词1842年才invented，圣经时代的人用其他词describe large creatures：'behemoth'、'leviathan'等可能指某些大型动物。其次，fossil record显示大多数dinosaurs在human history前extinction，但这不contradicts圣经。Genesis的focus是God与humanity的relationship，不是complete natural history。第三，无论dinosaurs何时exist，它们都是上帝amazing creation的part。想象T-Rex的power、Brontosaurus的size、Triceratops的unique design！第四，extinction提醒我们world is fallen，death entered through sin。但也显示上帝creation的diversity和creativity。第五，我们可能永远不会know all the details，但可以marvel at God's incredible imagination和power。",
            "content_en": "Dinosaurs are among kids' favorite topics but also raise questions: why doesn't the Bible clearly mention dinosaurs? How do they fit into biblical timeline? First, 'dinosaur' was only invented in 1842 — biblical people used other words to describe large creatures: 'behemoth,' 'leviathan,' etc. might refer to certain large animals. Second, fossil records show most dinosaurs went extinct before human history, but this doesn't contradict the Bible. Genesis focuses on God's relationship with humanity, not complete natural history. Third, whenever dinosaurs existed, they were part of God's amazing creation. Imagine T-Rex's power, Brontosaurus's size, Triceratops's unique design! Fourth, extinction reminds us the world is fallen, death entered through sin. But also shows God's creation's diversity and creativity. Fifth, we may never know all the details, but can marvel at God's incredible imagination and power.",
            "bible_verses": ["Job 40:15-24", "Genesis 1:21", "Psalm 104:25-26", "Isaiah 27:1"],
            "discussion_questions": [
                "恐龙的存在如何显明上帝的creativity？How does dinosaurs' existence show God's creativity?",
                "为什么上帝允许extinction发生？Why does God allow extinctions to happen?",
                "古代世界的mysteries如何增强你的wonder感？How do ancient world mysteries enhance your sense of wonder?"
            ],
            "tags": ["dinosaurs", "ancient-world", "creation"]
        },
        {
            "title_zh": "科学家基督徒：信仰激发的探索",
            "title_en": "Christian Scientists: Faith-Inspired Exploration",
            "content_zh": "历史上许多breakthrough scientific discoveries来自committed Christians。为什么？因为相信orderly Creator的人naturally想understand祂的creation。牛顿说他的laws是'thinking God's thoughts after Him'。现代也有许多outstanding Christian scientists：Francis Collins（Human Genome Project director）、John Polkinghorne（theoretical physicist）等。他们的faith如何影响research？首先，gives sense of purpose：不只是satisfy curiosity，而是revealing God's glory。其次，provides ethical framework：science应该serve humanity，reflect God's love。第三，offers humility：recognizing我们knowledge is limited，God的ways更高。第四，motivates excellence：'无论做什么，都要从心里做，像是给主做的。'第五，connects awe with worship：每个discovery都可能lead to praise。如果你对science感兴趣，consider it as potential calling to serve God through understanding His creation。",
            "content_en": "Many breakthrough scientific discoveries throughout history came from committed Christians. Why? Because those believing in an orderly Creator naturally want to understand His creation. Newton said his laws were 'thinking God's thoughts after Him.' Today there are many outstanding Christian scientists: Francis Collins (Human Genome Project director), John Polkinghorne (theoretical physicist), etc. How does their faith influence research? First, gives sense of purpose: not just satisfying curiosity but revealing God's glory. Second, provides ethical framework: science should serve humanity, reflect God's love. Third, offers humility: recognizing our knowledge is limited, God's ways are higher. Fourth, motivates excellence: 'Whatever you do, work at it with all your heart, as working for the Lord.' Fifth, connects awe with worship: every discovery can lead to praise. If you're interested in science, consider it as potential calling to serve God through understanding His creation.",
            "bible_verses": ["Colossians 3:23", "Psalm 111:2", "Proverbs 25:2", "1 Corinthians 4:7"],
            "discussion_questions": [
                "基督徒科学家的motivation与others有何不同？How might Christian scientists' motivations differ from others?",
                "science研究如何成为worship的form？How can scientific research become a form of worship?",
                "你会考虑science career作为serving God的方式吗？Would you consider a science career as a way of serving God?"
            ],
            "tags": ["christian-scientists", "calling", "purpose"]
        },
        {
            "title_zh": "AI与灵魂：人类独特性的思考",
            "title_en": "AI & Soul: Reflecting on Human Uniqueness",
            "content_zh": "人工智能发展迅速，能写文章、绘画、下棋、甚至创作音乐。这是否意味着humans没有special？不！首先，AI能模仿intelligence，但缺乏consciousness。它能process information，但不能experience meaning、love、beauty。其次，humans有moral capacity。我们知道对错，能做ethical choices。AI只能follow programming，不能真正understand morality。第三，我们有spiritual dimension。能与上帝relationship，experience worship、prayer、guilt、forgiveness。这些不只是brain chemistry，而是soul的reality。第四，creativity不只是combine existing elements，而是reflect God's image in us。真正的art comes from heart，not algorithm。第五，即使AI变得更sophisticated，它仍然是tool，而humans是created beings with eternal destiny。我们的value不来自our abilities，而是God's love。Technology应该serve humanity，而非replace。",
            "content_en": "AI develops rapidly, capable of writing, drawing, chess, even composing music. Does this mean humans aren't special? No! First, AI can mimic intelligence but lacks consciousness. It can process information but can't experience meaning, love, beauty. Second, humans have moral capacity. We know right from wrong, can make ethical choices. AI only follows programming, can't truly understand morality. Third, we have spiritual dimension — can relationship with God, experience worship, prayer, guilt, forgiveness. These aren't just brain chemistry but soul's reality. Fourth, creativity isn't just combining existing elements but reflects God's image in us. True art comes from heart, not algorithms. Fifth, even if AI becomes more sophisticated, it remains a tool while humans are created beings with eternal destiny. Our value doesn't come from our abilities but God's love. Technology should serve humanity, not replace it.",
            "bible_verses": ["Genesis 1:27", "Genesis 2:7", "Ecclesiastes 3:11", "1 Corinthians 2:11"],
            "discussion_questions": [
                "什么使人类与AI fundamentally不同？What makes humans fundamentally different from AI?",
                "AI的发展如何影响你对human uniqueness的理解？How does AI development affect your understanding of human uniqueness?",
                "technology时代如何保持humanity？How do we preserve humanity in the technology age?"
            ],
            "tags": ["artificial-intelligence", "human-uniqueness", "soul"]
        }
    ]
    
    # Continue adding the rest of faith-science and then devotion entries...
    faith_science_entries_2 = [
        {
            "title_zh": "环保管家职分：照顾上帝的创造",
            "title_en": "Environmental Stewardship: Caring for God's Creation",
            "content_zh": "Climate change和environmental issues是当今重要话题。基督徒应该关心吗？绝对！上帝给人类'治理这地'的mandate，包括care for creation。首先，earth是上帝的，我们是stewards。'地和其中所充满的都属耶和华。'我们要responsible management，不是exploitation。其次，environmental problems往往hurt the poor most。作为Christ followers，我们要关心justice。第三，creation本身declare God's glory。当我们protect biodiversity、reduce pollution、conserve resources，我们helping preserve这个witness。但要balanced approach：不把nature当作god worship，也不ignore our responsibility。第四，practical actions：reduce waste、recycle、use energy wisely、support sustainable practices。第五，这也是love neighbor的way：future generations deserves clean environment。第六，记住最终hope不是save planet而是new creation，但这不免除current responsibility。",
            "content_en": "Climate change and environmental issues are important topics today. Should Christians care? Absolutely! God gave humans the mandate to 'subdue the earth,' including caring for creation. First, earth belongs to God, we are stewards. 'The earth is the Lord's, and everything in it.' We need responsible management, not exploitation. Second, environmental problems often hurt the poor most. As Christ followers, we must care about justice. Third, creation itself declares God's glory. When we protect biodiversity, reduce pollution, conserve resources, we're helping preserve this witness. But need balanced approach: don't worship nature as god, don't ignore our responsibility either. Fourth, practical actions: reduce waste, recycle, use energy wisely, support sustainable practices. Fifth, this is also a way of loving neighbors: future generations deserve clean environment. Sixth, remember ultimate hope isn't saving the planet but new creation, but this doesn't excuse current responsibility.",
            "bible_verses": ["Genesis 1:28", "Psalm 24:1", "Romans 8:19-22", "Revelation 21:1"],
            "discussion_questions": [
                "基督徒为什么要关心environmental issues？Why should Christians care about environmental issues?",
                "如何平衡human needs与environmental protection？How do we balance human needs with environmental protection?",
                "你在日常生活中实践哪些environmental stewardship？What environmental stewardship do you practice in daily life?"
            ],
            "tags": ["environment", "stewardship", "creation-care"]
        },
        {
            "title_zh": "宇宙精密调校：设计的指纹",
            "title_en": "Cosmic Fine-Tuning: Fingerprints of Design",
            "content_zh": "Universe的fundamental constants precision令人amazed。如果gravity稍微强一点，stars会太快burn out；稍微弱一点，never form。如果nuclear forces不同，atoms不能stable exist。如果cosmological constant different，universe会太快expand或collapse。这些parameters必须exactly right才能support life。Probability是astronomical small！这pure coincidence吗？Many scientists认为这指向intelligent design。首先，fine-tuning不只一个parameter，而是multiple independent variables同时precise。Like winning lottery many times in row。其次，multiverse theory试图explain这个phenomenon，但自己needs explanation且not verifiable。第三，simplest explanation常常是correct：universe appears designed because it is designed。第四，这strengthens biblical teaching：上帝'用祂的智慧立地，用聪明定天。'Fine-tuning不是proof但是powerful evidence pointing toward Creator。",
            "content_en": "The precision of fundamental constants in the universe is amazing. If gravity were slightly stronger, stars would burn out too fast; slightly weaker, they'd never form. If nuclear forces were different, atoms couldn't stably exist. If cosmological constant differed, universe would expand or collapse too quickly. These parameters must be exactly right to support life. The probability is astronomically small! Is this pure coincidence? Many scientists think this points to intelligent design. First, fine-tuning isn't just one parameter but multiple independent variables simultaneously precise — like winning the lottery many times in a row. Second, multiverse theory tries to explain this phenomenon but itself needs explanation and isn't verifiable. Third, the simplest explanation is often correct: universe appears designed because it is designed. Fourth, this strengthens biblical teaching: God 'founded the earth by his wisdom and stretched out the heavens by his understanding.' Fine-tuning isn't proof but powerful evidence pointing toward Creator.",
            "bible_verses": ["Jeremiah 10:12", "Isaiah 40:26", "Psalm 19:1", "Hebrews 3:4"],
            "discussion_questions": [
                "fine-tuning的发现如何影响你的faith？How does fine-tuning discovery affect your faith?",
                "为什么有些科学家resist design interpretation？Why do some scientists resist design interpretation?",
                "这个evidence如何帮助你与skeptical friends对话？How does this evidence help conversations with skeptical friends?"
            ],
            "tags": ["fine-tuning", "design", "cosmology"]
        },
        {
            "title_zh": "DNA设计论证：生命的密码",
            "title_en": "DNA Design Argument: The Code of Life",
            "content_zh": "DNA被称为life的blueprint，contains incredible amount of information。一个human cell的DNA如果printed out会填满thousands of books！这information哪里来的？Information theory告诉我们：information总是来自intelligent source。从来没有seen random processes产生complex specified information。首先，DNA不只是chemistry；它carries semantic information，like computer code。Code需要coder。其次，genetic code是universal，所有living things用相同的基本system。这suggests common designer而非independent evolution。第三，DNA的error-correction mechanisms amazing，比human-made systems更sophisticated。第四，information storage density unprecedented：gram of DNA可以store几乎所有人类knowledge。第五，这不是'God of gaps'argument，而是positive evidence。我们know from experience information来自mind，DNA's information complexity points toward divine mind。Molecular biology越发展，design inference越强。",
            "content_en": "DNA is called life's blueprint, containing incredible amounts of information. A human cell's DNA if printed out would fill thousands of books! Where does this information come from? Information theory tells us: information always comes from intelligent sources. We've never seen random processes produce complex specified information. First, DNA isn't just chemistry; it carries semantic information like computer code. Code requires a coder. Second, the genetic code is universal — all living things use the same basic system. This suggests common designer rather than independent evolution. Third, DNA's error-correction mechanisms are amazing, more sophisticated than human-made systems. Fourth, information storage density is unprecedented: a gram of DNA could store almost all human knowledge. Fifth, this isn't 'God of gaps' argument but positive evidence. We know from experience information comes from mind — DNA's information complexity points toward divine mind. The more molecular biology develops, the stronger the design inference becomes.",
            "bible_verses": ["Psalm 139:13-16", "Jeremiah 1:5", "Genesis 1:11", "1 Corinthians 15:38"],
            "discussion_questions": [
                "DNA的complexity如何指向intelligent design？How does DNA's complexity point to intelligent design?",
                "Information theory为什么relevant to origins discussion？Why is information theory relevant to origins discussion?",
                "这个evidence如何strengthen你的faith？How does this evidence strengthen your faith?"
            ],
            "tags": ["DNA", "information", "molecular-biology"]
        },
        {
            "title_zh": "奇迹可能吗？自然律与神的作为",
            "title_en": "Are Miracles Possible? Natural Laws & God's Actions",
            "content_zh": "Scientific age让一些人认为miracles impossible，因为会violate natural laws。但这reasoning flawed。首先，natural laws是descriptions，不是prescriptions。它们describe上帝how normally operates，不是limit what祂can do。就像authors有right改变story的rules。其次，miracles不是破坏laws，而是higher power的intervention。当你lift a ball，你不'违反'gravity，而是apply greater force。第三，如果God exists且created natural laws，祂certainly能supersede them for specific purposes。第四，miracles的purpose不是show off，而是reveal God's character和advance祂的plan。耶稣的miracles都had compassionate purpose。第五，science can study natural regularities，但不能rule out supernatural intervention。That would be methodological overreach。第六，历史evidence for miracles（especially Resurrection）should be evaluated on historical grounds，不是a priori dismissed because of scientific worldview。",
            "content_en": "The scientific age makes some think miracles impossible because they would violate natural laws. But this reasoning is flawed. First, natural laws are descriptions, not prescriptions. They describe how God normally operates, not limits on what He can do — like authors having the right to change story rules. Second, miracles don't break laws but involve higher power's intervention. When you lift a ball, you don't 'violate' gravity but apply greater force. Third, if God exists and created natural laws, He certainly can supersede them for specific purposes. Fourth, miracles' purpose isn't showing off but revealing God's character and advancing His plan. Jesus' miracles all had compassionate purpose. Fifth, science can study natural regularities but can't rule out supernatural intervention — that would be methodological overreach. Sixth, historical evidence for miracles (especially Resurrection) should be evaluated on historical grounds, not a priori dismissed because of scientific worldview.",
            "bible_verses": ["Matthew 19:26", "Jeremiah 32:17", "John 20:30-31", "Hebrews 2:4"],
            "discussion_questions": [
                "为什么有些人认为miracles与science冲突？Why do some think miracles conflict with science?",
                "你如何向skeptical朋友explain miracle的可能性？How would you explain miracles' possibility to skeptical friends?",
                "miracles在你的faith中扮演什么角色？What role do miracles play in your faith?"
            ],
            "tags": ["miracles", "natural-laws", "supernatural"]
        },
        {
            "title_zh": "科学的局限：方法与边界",
            "title_en": "Science's Limitations: Methods & Boundaries",
            "content_zh": "Science是powerful tool，但有important limitations。Understanding这些boundaries帮助我们proper perspective。首先，science只能study material世界的measurable aspects。不能research love、meaning、purpose、beauty的deeper significance。其次，science describes 'how'但不能answer 'why'。为什么universe exists？为什么有consciousness？这些超出scientific method。第三，science based on methodological assumptions：naturalism、uniformity、rationality。这些assumptions themselves不能被science prove。第四，historical science（about past）与operational science（about present）different。我们不能repeat origin events。第五，science constantly changes。Today's theories可能tomorrow被revised。这doesn't make science wrong，但shows它's provisional。第六，moral questions超出science scope。Science能tell us how to clone，但不能tell us whether should。最重要：science不是only way of knowledge。Direct experience、logic、revelation也是valid sources。",
            "content_en": "Science is a powerful tool but has important limitations. Understanding these boundaries helps us keep proper perspective. First, science can only study measurable aspects of the material world — can't research the deeper significance of love, meaning, purpose, beauty. Second, science describes 'how' but can't answer 'why.' Why does universe exist? Why is there consciousness? These exceed scientific method. Third, science is based on methodological assumptions: naturalism, uniformity, rationality. These assumptions themselves can't be proven by science. Fourth, historical science (about past) differs from operational science (about present). We can't repeat origin events. Fifth, science constantly changes. Today's theories might be revised tomorrow. This doesn't make science wrong but shows it's provisional. Sixth, moral questions exceed science's scope. Science can tell us how to clone but not whether we should. Most importantly: science isn't the only way of knowledge. Direct experience, logic, revelation are also valid sources.",
            "bible_verses": ["1 Corinthians 8:2", "Isaiah 55:8-9", "Job 26:14", "Deuteronomy 29:29"],
            "discussion_questions": [
                "science不能回答的重要问题有哪些？What important questions can't science answer?",
                "为什么understanding科学的limitations很重要？Why is understanding science's limitations important?",
                "如何保持对science的appreciation同时recognize其boundaries？How do we maintain appreciation for science while recognizing its boundaries?"
            ],
            "tags": ["limitations", "methodology", "epistemology"]
        },
        {
            "title_zh": "信仰与理性：和谐的伙伴",
            "title_en": "Faith & Reason: Harmonious Partners",
            "content_zh": "Popular culture常常portray faith与reason as enemies：'blind faith' versus 'objective reason'。但这false dichotomy。Biblical faith从来不是unreasoned。首先，faith不是相信impossible，而是trust in trustworthy God based on good evidence。Abraham看stars时，他看到God's promise的evidence。其次，reason本身requires faith assumptions：logic的reliability、senses的general trustworthiness、uniformity of nature。Pure empiricism是self-refuting。第三，最伟大的rational thinkers many were believers：Augustine、Aquinas、Descartes、Newton、Leibniz等。Faith actually motivated their rational inquiry。第四，reason可以support faith：cosmological arguments、design arguments、historical evidence for Resurrection等。第五，但reason有limits。不是everything可以被完全prove或understand。最深的truths often exceed pure rational analysis。第六，在real life，我们constantly act on faith：trusting friends、believing in love、hoping for future。Faith是normal part of human experience。",
            "content_en": "Popular culture often portrays faith and reason as enemies: 'blind faith' versus 'objective reason.' But this is false dichotomy. Biblical faith was never unreasoned. First, faith isn't believing the impossible but trusting trustworthy God based on good evidence. When Abraham looked at stars, he saw evidence of God's promise. Second, reason itself requires faith assumptions: logic's reliability, senses' general trustworthiness, uniformity of nature. Pure empiricism is self-refuting. Third, the greatest rational thinkers many were believers: Augustine, Aquinas, Descartes, Newton, Leibniz, etc. Faith actually motivated their rational inquiry. Fourth, reason can support faith: cosmological arguments, design arguments, historical evidence for Resurrection, etc. Fifth, but reason has limits. Not everything can be completely proven or understood. Deepest truths often exceed pure rational analysis. Sixth, in real life, we constantly act on faith: trusting friends, believing in love, hoping for future. Faith is normal part of human experience.",
            "bible_verses": ["Isaiah 1:18", "1 Peter 3:15", "Romans 1:20", "Hebrews 11:1"],
            "discussion_questions": [
                "faith和reason如何互相support？How do faith and reason support each other?",
                "你的信仰中有哪些rational elements？What rational elements are in your faith?",
                "如何回应'基督徒只有blind faith'的指控？How do you respond to accusations of 'Christians only having blind faith'?"
            ],
            "tags": ["faith-reason", "apologetics", "rational-faith"]
        }
    ]
    
    # Combine all faith-science entries
    all_faith_science = faith_science_entries + faith_science_entries_2
    
    current_id = start_id
    for entry in all_faith_science:
        new_entry = {
            "id": f"youth-{current_id:03d}",
            "section": "faith-science",
            "category": "信仰与科学",
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

def add_devotion_content(data, start_id):
    """Add 12 devotion entries"""
    
    devotion_entries = [
        {
            "title_zh": "如何祷告入门：与天父的对话",
            "title_en": "Prayer Basics: Conversation with Heavenly Father",
            "content_zh": "祷告是基督徒life最重要但也最challenging的discipline之一。很多人不知道如何开始。祷告其实很简单：just talking to God！首先，找个quiet place和time。不需要special位置，but避免distractions helps。其次，start with简单acknowledgment：'上帝，我想和祢说话。'不需要fancy words。第三，be honest about your feelings：兴奋、担心、感恩、困惑，all okay。God已经knows anyway。第四，listen不只是speak。祷告后spend some time quietly，let God's Spirit speak to your heart。第五，use ACTS structure帮助：Adoration（praise），Confession（admit sins），Thanksgiving（gratitude），Supplication（requests）。第六，don't worry about时间长短。五分钟sincere prayer胜过半小时empty words。第七，expect God to answer，但记住祂的timeline和方式may不同于your expectations。",
            "content_en": "Prayer is one of Christianity's most important yet challenging disciplines. Many don't know how to start. Prayer is actually simple: just talking to God! First, find a quiet place and time. No special location needed, but avoiding distractions helps. Second, start with simple acknowledgment: 'God, I want to talk to You.' No fancy words needed. Third, be honest about your feelings: excitement, worry, gratitude, confusion — all okay. God knows anyway. Fourth, listen don't just speak. After praying, spend time quietly, let God's Spirit speak to your heart. Fifth, use ACTS structure to help: Adoration (praise), Confession (admit sins), Thanksgiving (gratitude), Supplication (requests). Sixth, don't worry about time length. Five minutes sincere prayer beats half hour of empty words. Seventh, expect God to answer but remember His timeline and methods may differ from your expectations.",
            "bible_verses": ["Matthew 6:6", "Philippians 4:6-7", "1 Thessalonians 5:17", "James 4:8"],
            "discussion_questions": [
                "什么阻止你更多地祷告？What keeps you from praying more?",
                "你最meaningful的祷告经历是什么？What's your most meaningful prayer experience?",
                "如何know上帝在回应你的祷告？How do you know God is answering your prayers?"
            ],
            "tags": ["prayer", "conversation", "basics"]
        },
        {
            "title_zh": "ACTS祷告法：结构化的敬拜",
            "title_en": "ACTS Prayer Method: Structured Worship",
            "content_zh": "ACTS是helpful framework for balanced prayer life。A-C-T-S四个elements确保我们的祷告not just asking for things。A-Adoration：开始时praise God for祂是谁。祂的holiness、love、wisdom、power。这shifts our focus from ourselves to God。例如：'上帝，祢是wonderful creator...' C-Confession：honestly admit our sins。不是feeling guilty，而是清理relationship。'我今天impatient了，请forgive me。' T-Thanksgiving：感谢specific blessings。不只大事，小事也important：health、family、food、friendship。gratitude changes our心态。S-Supplication：最后才requests。为自己和others pray：needs、guidance、healing、salvation。这个order important：first focus on God，then ourselves。不一定每次prayers都需要four parts，但regularly including all四个helps balanced spiritual life。记住：God喜欢variety，don't让ACTS变成rigid formula。",
            "content_en": "ACTS is a helpful framework for balanced prayer life. A-C-T-S four elements ensure our prayers aren't just asking for things. A-Adoration: start by praising God for who He is — His holiness, love, wisdom, power. This shifts focus from ourselves to God. Example: 'God, You are wonderful creator...' C-Confession: honestly admit our sins. Not about feeling guilty but cleaning relationship. 'I was impatient today, please forgive me.' T-Thanksgiving: thank for specific blessings. Not just big things, small things matter: health, family, food, friendship. Gratitude changes our mindset. S-Supplication: requests last. Pray for self and others: needs, guidance, healing, salvation. This order is important: first focus on God, then ourselves. Not every prayer needs all four parts, but regularly including all four helps balanced spiritual life. Remember: God enjoys variety, don't let ACTS become rigid formula.",
            "bible_verses": ["Psalm 95:1-2", "1 John 1:9", "1 Thessalonians 5:18", "1 Timothy 2:1"],
            "discussion_questions": [
                "ACTS的哪个部分对你most challenging？Which part of ACTS is most challenging for you?",
                "这个structure如何改变你的prayer life？How does this structure change your prayer life?",
                "你prefer structure还是spontaneous prayer？Do you prefer structured or spontaneous prayer?"
            ],
            "tags": ["ACTS", "prayer-structure", "worship"]
        },
        {
            "title_zh": "归纳法读经：深入神的话语",
            "title_en": "Inductive Bible Study: Diving Deep into God's Word",
            "content_zh": "读圣经不只是读文字，而是discovering God wants tell us什么。归纳法helping us dig deeper。三个步骤：Observation（观察）、Interpretation（解释）、Application（应用）。Observation：仔细看text says什么。Who、what、when、where、why？注意repeated words、contrasts、comparisons、lists。例如读Psalm 23，注意'shepherd'metaphor throughout。Interpretation：这passage means什么？考虑historical context、文化背景、literary genre。使用cross-references查看other scriptures。例如'祂使我躺卧在青草地上'means God provides peace and rest。Application：这对my life means什么？不只是knowledge而是transformation。'我如何需要God's rest in my busy life？'Tools that help：study Bible、concordance、commentaries，但primary focus应该是text itself。Start with shorter passages，gradually build skill。最重要：pray for Holy Spirit's illumination before reading。",
            "content_en": "Reading the Bible isn't just reading words but discovering what God wants to tell us. Inductive method helps us dig deeper. Three steps: Observation, Interpretation, Application. Observation: carefully see what text says. Who, what, when, where, why? Notice repeated words, contrasts, comparisons, lists. Example reading Psalm 23, notice 'shepherd' metaphor throughout. Interpretation: what does this passage mean? Consider historical context, cultural background, literary genre. Use cross-references to check other scriptures. Example: 'He makes me lie down in green pastures' means God provides peace and rest. Application: what does this mean for my life? Not just knowledge but transformation. 'How do I need God's rest in my busy life?' Tools that help: study Bible, concordance, commentaries, but primary focus should be text itself. Start with shorter passages, gradually build skill. Most important: pray for Holy Spirit's illumination before reading.",
            "bible_verses": ["2 Timothy 3:16-17", "Psalm 119:105", "John 16:13", "Acts 17:11"],
            "discussion_questions": [
                "你通常如何approach reading圣经？How do you usually approach reading the Bible?",
                "哪个step（观察、解释、应用）对你most difficult？Which step (observation, interpretation, application) is most difficult for you?",
                "最近哪段经文particularly spoke to you？Which passage recently particularly spoke to you?"
            ],
            "tags": ["bible-study", "inductive-method", "hermeneutics"]
        },
        {
            "title_zh": "属灵日记：记录信仰旅程",
            "title_en": "Spiritual Journaling: Recording Faith Journey",
            "content_zh": "记录spiritual journey helps us see God's faithfulness over time。不需要是good writer，just honest reflection。几个approaches：Prayer journal：写下prayer requests和God's answers。看到patterns in God's faithfulness encouraging。Gratitude journal：每天记录感恩的things。Research shows gratitude improves mental health。Bible study notes：记录insights from scripture reading。Questions、observations、applications。回头看时often find deeper meaning。Life reflections：God在daily events中如何work？Challenges如何helping you grow？字数不重要，consistency更important。Maybe just few sentences each day。找个special notebook或use phone app。不要worry about perfect grammar或spelling。这是between you and God。Benefits包括：better prayer life，increased gratitude，spiritual growth tracking，stress relief，deeper self-awareness。Remember：this private conversation with God，不是为了show others。Be completely honest about struggles、doubts、joys。",
            "content_en": "Recording your spiritual journey helps us see God's faithfulness over time. Don't need to be good writer, just honest reflection. Several approaches: Prayer journal: write down prayer requests and God's answers. Seeing patterns in God's faithfulness is encouraging. Gratitude journal: daily record thankful things. Research shows gratitude improves mental health. Bible study notes: record insights from scripture reading — questions, observations, applications. Looking back often finds deeper meaning. Life reflections: how is God working in daily events? How are challenges helping you grow? Word count doesn't matter, consistency is more important. Maybe just few sentences each day. Find special notebook or use phone app. Don't worry about perfect grammar or spelling. This is between you and God. Benefits include: better prayer life, increased gratitude, spiritual growth tracking, stress relief, deeper self-awareness. Remember: this is private conversation with God, not to show others. Be completely honest about struggles, doubts, joys.",
            "bible_verses": ["Habakkuk 2:2", "Psalm 77:11", "Luke 2:19", "Malachi 3:16"],
            "discussion_questions": [
                "你曾经keep any kind of journal吗？Have you ever kept any kind of journal?",
                "记录spiritual thoughts的idea appeals to you吗？Does the idea of recording spiritual thoughts appeal to you?",
                "如何开始simple journaling practice？How would you start a simple journaling practice?"
            ],
            "tags": ["journaling", "spiritual-growth", "reflection"]
        },
        {
            "title_zh": "默想经文：深度思考神的话",
            "title_en": "Scripture Meditation: Deep Thinking on God's Word",
            "content_zh": "现代世界full of distractions，我们lost art of deep thinking。Scripture meditation是antidote。不同于Eastern meditation（empty mind），Christian meditation fills mind with God's truth。How to meditate：选择short passage，maybe single verse。慢慢读several times，注意每个word。问questions：这说明God什么？对我means什么？如何应用？Let words sink deep。可能spend 10-15 minutes在一个verse。例如Psalm 23:1 'The Lord is my shepherd'。Think about shepherd's role：protection、guidance、provision。God如何在你life中做这些？Memorization helps：当verse在memory，可以随时meditate。Walking或其他simple activities时perfect time。Benefits包括：reduced anxiety，deeper biblical understanding，stronger faith，closer relationship with God。不要rush process。Let Holy Spirit guide thoughts。Some passages particularly good for meditation：Psalms，Proverbs，Jesus' words，Paul's prayers。Start with familiar verses，gradually explore new ones。",
            "content_en": "Modern world is full of distractions, we've lost the art of deep thinking. Scripture meditation is the antidote. Unlike Eastern meditation (empty mind), Christian meditation fills mind with God's truth. How to meditate: choose short passage, maybe single verse. Read slowly several times, notice every word. Ask questions: what does this reveal about God? What does it mean for me? How to apply? Let words sink deep. Maybe spend 10-15 minutes on one verse. Example Psalm 23:1 'The Lord is my shepherd.' Think about shepherd's role: protection, guidance, provision. How does God do these in your life? Memorization helps: when verse is in memory, can meditate anytime. Walking or other simple activities are perfect time. Benefits include: reduced anxiety, deeper biblical understanding, stronger faith, closer relationship with God. Don't rush process. Let Holy Spirit guide thoughts. Some passages particularly good for meditation: Psalms, Proverbs, Jesus' words, Paul's prayers. Start with familiar verses, gradually explore new ones.",
            "bible_verses": ["Psalm 1:2-3", "Joshua 1:8", "Psalm 119:15", "Philippians 4:8"],
            "discussion_questions": [
                "你的mind通常多busy？How busy is your mind usually?",
                "什么helps you slow down and focus？What helps you slow down and focus?",
                "哪个Bible verse你'd like to meditate on？Which Bible verse would you like to meditate on?"
            ],
            "tags": ["meditation", "contemplation", "deep-thinking"]
        },
        {
            "title_zh": "赞美敬拜：心灵的回应",
            "title_en": "Praise & Worship: Heart's Response",
            "content_zh": "Worship不只是Sunday morning activity，而是lifestyle of recognizing God's worth。可以through music、但also words、actions、attitudes。Music worship：唱歌是powerful way express love to God。不需要good voice，God cares about heart。可以sing along with recorded music或create your own。Lyrics important：choose songs that biblical and meaningful。Word worship：speaking praise，reading Psalms aloud，creating your own prayers of appreciation。Life worship：'所以弟兄们，我以上帝的慈悲劝你们，将身体献上，当作活祭...这是你们理所当然的事奉。'Everything我们做可以成为worship when done for God's glory。Private worship建立foundation for corporate worship。When we come to church already having worshipped during week，group experience更rich。Don't worry about emotions：worship不依赖feelings，而是choice to honor God regardless心情如何。",
            "content_en": "Worship isn't just Sunday morning activity but lifestyle of recognizing God's worth. Can be through music, but also words, actions, attitudes. Music worship: singing is powerful way to express love to God. Don't need good voice, God cares about heart. Can sing along with recorded music or create your own. Lyrics important: choose songs that are biblical and meaningful. Word worship: speaking praise, reading Psalms aloud, creating your own prayers of appreciation. Life worship: 'Therefore, I urge you, brothers and sisters, in view of God's mercy, to offer your bodies as a living sacrifice... this is your true and proper worship.' Everything we do can become worship when done for God's glory. Private worship builds foundation for corporate worship. When we come to church already having worshipped during week, group experience is richer. Don't worry about emotions: worship doesn't depend on feelings but choice to honor God regardless of how we feel.",
            "bible_verses": ["Psalm 95:1-2", "Romans 12:1", "Psalm 150", "John 4:23-24"],
            "discussion_questions": [
                "你最enjoy的worship形式是什么？What form of worship do you most enjoy?",
                "如何在daily life中practice worship？How can you practice worship in daily life?",
                "music在你的worship中扮演什么角色？What role does music play in your worship?"
            ],
            "tags": ["worship", "praise", "lifestyle"]
        }
    ]
    
    # Add more devotion entries
    devotion_entries_2 = [
        {
            "title_zh": "认罪悔改操练：保持心灵洁净",
            "title_en": "Confession & Repentance: Keeping Heart Clean",
            "content_zh": "认罪不是dwelling on guilt，而是cleaning relationship with God。Regular confession keeps short accounts with God，prevents bitterness buildup。Daily examination：end of day时review：我今天在哪些方面miss mark？Pride、impatience、selfishness、negative thoughts？不要obsess，just honestly acknowledge。Specific confession：'I'm sorry I'm sinful'太general。Better：'God，我今天对妹妹mean，请forgive my patience。'这helps understand patterns。Genuine repentance means turning away，不只是feeling sorry。Ask God for strength to change。Remember forgiveness：'我们若认自己的罪，上帝是信实的，是公义的，必要赦免我们的罪，洗净我们一切的不义。'Confession to others：sometimes需要向人道歉，不只向God。但be wise about details，目的是restoration不是causing more hurt。Freedom：regular confession brings incredible freedom from guilt and shame。我们clean before God！",
            "content_en": "Confession isn't dwelling on guilt but cleaning relationship with God. Regular confession keeps short accounts with God, prevents bitterness buildup. Daily examination: end of day review: where did I miss the mark today? Pride, impatience, selfishness, negative thoughts? Don't obsess, just honestly acknowledge. Specific confession: 'I'm sorry I'm sinful' is too general. Better: 'God, I was mean to my sister today, please forgive my impatience.' This helps understand patterns. Genuine repentance means turning away, not just feeling sorry. Ask God for strength to change. Remember forgiveness: 'If we confess our sins, he is faithful and just to forgive our sins and cleanse us from all unrighteousness.' Confession to others: sometimes need to apologize to people, not just God. But be wise about details — goal is restoration not causing more hurt. Freedom: regular confession brings incredible freedom from guilt and shame. We're clean before God!",
            "bible_verses": ["1 John 1:9", "Psalm 32:1-5", "James 5:16", "Proverbs 28:13"],
            "discussion_questions": [
                "认罪对你来说difficult还是freeing？Is confession difficult or freeing for you?",
                "如何区分healthy conviction和unhealthy guilt？How do you distinguish healthy conviction from unhealthy guilt?",
                "什么helps you remember God's complete forgiveness？What helps you remember God's complete forgiveness?"
            ],
            "tags": ["confession", "repentance", "forgiveness"]
        },
        {
            "title_zh": "禁食入门：属灵的焦点",
            "title_en": "Fasting Basics: Spiritual Focus",
            "content_zh": "禁食是biblical discipline often misunderstood。不是about earning God's favor或punishment，而是creating space for spiritual focus。Types of fasting：complete fast（water only），partial fast（certain foods），digital fast（technology）。Start small：maybe skip one meal and spend that time in prayer。Purpose：不是impress God而是humble ourselves，remove distractions，increase spiritual sensitivity。Benefits：clearer thinking，increased prayer focus，greater appreciation for God's provision，solidarity with the poor。When to fast：facing major decisions，seeking breakthrough in prayer，preparing for important spiritual events。Safety：consult doctor if health issues，pregnant women shouldn't fast，not about weight loss。Spiritual focus：当stomach growls，remember why you're fasting，pray instead of thinking about food。Break fast gently with light food。Most important：don't tell everyone you're fasting（Matthew 6），between you and God。",
            "content_en": "Fasting is a biblical discipline often misunderstood. It's not about earning God's favor or punishment but creating space for spiritual focus. Types of fasting: complete fast (water only), partial fast (certain foods), digital fast (technology). Start small: maybe skip one meal and spend that time in prayer. Purpose: not to impress God but humble ourselves, remove distractions, increase spiritual sensitivity. Benefits: clearer thinking, increased prayer focus, greater appreciation for God's provision, solidarity with the poor. When to fast: facing major decisions, seeking breakthrough in prayer, preparing for important spiritual events. Safety: consult doctor if health issues, pregnant women shouldn't fast, not about weight loss. Spiritual focus: when stomach growls, remember why you're fasting, pray instead of thinking about food. Break fast gently with light food. Most important: don't tell everyone you're fasting (Matthew 6) — between you and God.",
            "bible_verses": ["Matthew 6:16-18", "Joel 2:12", "Acts 14:23", "Isaiah 58:6"],
            "discussion_questions": [
                "你对fasting的first impression是什么？What's your first impression of fasting?",
                "除了food，还有什么你可能need to 'fast' from？Besides food, what else might you need to 'fast' from?",
                "fasting如何help你更focus on God？How might fasting help you focus more on God?"
            ],
            "tags": ["fasting", "spiritual-discipline", "focus"]
        },
        {
            "title_zh": "安息日意义：在忙碌中寻求休息",
            "title_en": "Sabbath Meaning: Finding Rest in Busyness",
            "content_zh": "安息日不只是Old Testament rule，而是God给human flourishing的gift。现代culture promotes constant activity，但God designed us for rhythm of work and rest。Sabbath principles：cease from work，focus on relationship with God，enjoy God's creation，spend time with family and community。不是about legalistic rules，而是setting aside time每week for spiritual renewal。可能是Sunday，也可能other day depending circumstance。Activities that fit：worship，prayer，Bible study，nature walks，meaningful conversations，creative hobbies，helping others。Avoid：paid work，stressful activities，excessive shopping，homework if possible。Benefits：physical rest，emotional renewal，spiritual refocus，better perspective on life，modeling healthy lifestyle for others。Challenge：our culture doesn't support this，要intentionally plan。Start gradually：maybe 3-4 hours每week dedicated to rest and God。记住：this is gift not burden，designed to refresh us for coming week。",
            "content_en": "Sabbath isn't just Old Testament rule but God's gift for human flourishing. Modern culture promotes constant activity, but God designed us for rhythm of work and rest. Sabbath principles: cease from work, focus on relationship with God, enjoy God's creation, spend time with family and community. Not about legalistic rules but setting aside time each week for spiritual renewal. Might be Sunday or other day depending circumstance. Activities that fit: worship, prayer, Bible study, nature walks, meaningful conversations, creative hobbies, helping others. Avoid: paid work, stressful activities, excessive shopping, homework if possible. Benefits: physical rest, emotional renewal, spiritual refocus, better perspective on life, modeling healthy lifestyle for others. Challenge: our culture doesn't support this, must intentionally plan. Start gradually: maybe 3-4 hours each week dedicated to rest and God. Remember: this is gift not burden, designed to refresh us for coming week.",
            "bible_verses": ["Genesis 2:2-3", "Exodus 20:8-11", "Mark 2:27", "Matthew 11:28-30"],
            "discussion_questions": [
                "你的typical week有真正的rest time吗？Does your typical week have true rest time?",
                "什么activities最refresh you spiritually？What activities most refresh you spiritually?",
                "如何在busy schedule中make room for Sabbath？How can you make room for Sabbath in busy schedule?"
            ],
            "tags": ["sabbath", "rest", "rhythm"]
        },
        {
            "title_zh": "与神独处：静默中的相遇",
            "title_en": "Solitude with God: Encounters in Silence",
            "content_zh": "Jesus经常withdraw to quiet places to pray。在noisy world，我们也需要solitude with God。不是loneliness，而是choosing to be alone with God。Benefits：escape distractions，hear God's voice more clearly，process emotions，gain perspective，recharge spiritually。How to practice：find quiet location，turn off devices，start with short periods（maybe 10-15 minutes），gradually increase。What to do：sit quietly，read small Bible passage slowly，pray conversationally，listen for God's voice，simply enjoy God's presence。可能feel uncomfortable initially—我们so used to noise。That's normal。Thoughts will wander，gently bring focus back to God。不需要have profound experience每次，just being available to God important。Best times：early morning before day gets busy，evening when things quiet down，during lunch break if possible。Regular solitude helps develop听到God's voice的ability，increases peace，strengthens relationship with God。",
            "content_en": "Jesus often withdrew to quiet places to pray. In our noisy world, we also need solitude with God. Not loneliness but choosing to be alone with God. Benefits: escape distractions, hear God's voice more clearly, process emotions, gain perspective, recharge spiritually. How to practice: find quiet location, turn off devices, start with short periods (maybe 10-15 minutes), gradually increase. What to do: sit quietly, read small Bible passage slowly, pray conversationally, listen for God's voice, simply enjoy God's presence. Might feel uncomfortable initially — we're so used to noise. That's normal. Thoughts will wander, gently bring focus back to God. Don't need profound experience each time, just being available to God is important. Best times: early morning before day gets busy, evening when things quiet down, during lunch break if possible. Regular solitude helps develop ability to hear God's voice, increases peace, strengthens relationship with God.",
            "bible_verses": ["Mark 1:35", "Luke 5:16", "Matthew 14:23", "Psalm 46:10"],
            "discussion_questions": [
                "你comfortable with silence吗？Are you comfortable with silence?",
                "什么makes it hard for you to find quiet time？What makes it hard for you to find quiet time?",
                "你曾经在solitude中experience God's presence吗？Have you ever experienced God's presence in solitude?"
            ],
            "tags": ["solitude", "silence", "listening"]
        },
        {
            "title_zh": "困难中祷告：在风暴中寻求神",
            "title_en": "Prayer in Difficulties: Seeking God in Storms",
            "content_zh": "困难times常常是我们most meaningful prayer experiences。Pain has way of focusing attention on what really matters。困难中的祷告不同于casual requests，it comes from deeper place of need。Types of difficult circumstances：health problems，family conflicts，academic struggles，financial stress，loneliness，uncertainty about future。How to pray during difficulties：be completely honest with God about your feelings，不要pretend everything okay。God can handle your anger、fear、confusion。Use Psalms as model—David expressed every emotion。Ask specific questions：'God，where are You？' 'Why is this happening？' 'How long must I wait？'Remember God's character：祂是loving，faithful，present even when feels distant。Pray for strength to endure，wisdom to respond well，eyes to see祂的work even in pain。Pray for others facing similar struggles。困难can increase compassion。Most important：don't stop praying even when God feels silent。Sometimes testing our persistence。",
            "content_en": "Difficult times often are our most meaningful prayer experiences. Pain has a way of focusing attention on what really matters. Prayer in difficulties differs from casual requests — it comes from deeper place of need. Types of difficult circumstances: health problems, family conflicts, academic struggles, financial stress, loneliness, uncertainty about future. How to pray during difficulties: be completely honest with God about your feelings, don't pretend everything's okay. God can handle your anger, fear, confusion. Use Psalms as model — David expressed every emotion. Ask specific questions: 'God, where are You?' 'Why is this happening?' 'How long must I wait?' Remember God's character: He's loving, faithful, present even when feels distant. Pray for strength to endure, wisdom to respond well, eyes to see His work even in pain. Pray for others facing similar struggles. Difficulties can increase compassion. Most important: don't stop praying even when God feels silent. Sometimes He's testing our persistence.",
            "bible_verses": ["Psalm 34:18", "Romans 8:26", "2 Corinthians 12:8-9", "Philippians 4:19"],
            "discussion_questions": [
                "困难如何change your prayer life？How do difficulties change your prayer life?",
                "你在困难中feel God's presence吗？Do you feel God's presence during difficulties?",
                "什么helps you continue praying when things are hard？What helps you continue praying when things are hard?"
            ],
            "tags": ["prayer", "difficulties", "perseverance"]
        },
        {
            "title_zh": "为他人代祷：爱心的延伸",
            "title_en": "Intercessory Prayer: Extension of Love",
            "content_zh": "为others代祷是love的powerful expression。当我们pray for someone，我们joining God's heart for that person。Who to pray for：family members，friends，classmates，teachers，church leaders，government officials，missionaries，persecuted Christians，non-believers。What to pray for：salvation for non-believers，spiritual growth for believers，wisdom for leaders，healing for sick，comfort for grieving，provision for needy，protection for vulnerable。How to organize：keep prayer list，update regularly，pray systematically（Monday for family，Tuesday for friends，etc.），share prayer requests with others。Commitment：consistent intercession requires discipline，but builds compassion and faith。Answered prayers encourage continued praying。When you see God work in response to your prayers for others，it strengthens belief in prayer power。Special focus：pray for enemies or difficult people—Jesus commanded this，it softens our hearts toward them。Remember confidentiality：if someone shares prayer request，keep it private unless they say okay to share。",
            "content_en": "Praying for others is a powerful expression of love. When we pray for someone, we're joining God's heart for that person. Who to pray for: family members, friends, classmates, teachers, church leaders, government officials, missionaries, persecuted Christians, non-believers. What to pray for: salvation for non-believers, spiritual growth for believers, wisdom for leaders, healing for sick, comfort for grieving, provision for needy, protection for vulnerable. How to organize: keep prayer list, update regularly, pray systematically (Monday for family, Tuesday for friends, etc.), share prayer requests with others. Commitment: consistent intercession requires discipline but builds compassion and faith. Answered prayers encourage continued praying. When you see God work in response to your prayers for others, it strengthens belief in prayer's power. Special focus: pray for enemies or difficult people — Jesus commanded this, it softens our hearts toward them. Remember confidentiality: if someone shares prayer request, keep it private unless they say okay to share.",
            "bible_verses": ["1 Timothy 2:1", "James 5:16", "Ephesians 6:18", "Matthew 5:44"],
            "discussion_questions": [
                "你regularly为哪些人pray？Who do you regularly pray for?",
                "为difficult people祷告如何affect your relationship with them？How does praying for difficult people affect your relationship with them?",
                "你如何remember to pray consistently for others？How do you remember to pray consistently for others?"
            ],
            "tags": ["intercession", "love", "others"]
        }
    ]
    
    # Combine all devotion entries
    all_devotion = devotion_entries + devotion_entries_2
    
    current_id = start_id
    for entry in all_devotion:
        new_entry = {
            "id": f"youth-{current_id:03d}",
            "section": "devotion",
            "category": "灵修操练",
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
    
    # Add faith-science content
    updated_data, next_id = add_faith_science_content(data, start_id)
    print(f"Added faith-science entries. Next ID: youth-{next_id:03d}")
    
    # Add devotion content
    updated_data, next_id = add_devotion_content(updated_data, next_id)
    print(f"Added devotion entries. Next ID: youth-{next_id:03d}")
    
    # Save updated data
    with open('data/youth.json', 'w', encoding='utf-8') as f:
        json.dump(updated_data, f, ensure_ascii=False, indent=2)
    
    print(f"Total entries: {len(updated_data)}")

if __name__ == "__main__":
    main()