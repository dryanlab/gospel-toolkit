interface Scripture { ref_zh: string; ref_en: string; text_zh: string; text_en: string; }
interface BilingualText { zh: string; en: string; }
interface DevotionalUnit { scripture: Scripture; reflection: BilingualText; question: BilingualText; prayer: BilingualText; }
interface AltarTheme { id: string; name_zh: string; name_en: string; icon: string; devotionals: DevotionalUnit[]; hymnKeywords: string[]; }

export const themesA1: AltarTheme[] = [
  {
    id: 'faith',
    name_zh: '信心',
    name_en: 'Faith',
    icon: '⛰️',
    hymnKeywords: ['信心', '信靠', 'faith', 'trust'],
    devotionals: [
      {
        scripture: {
          ref_zh: '来11:1',
          ref_en: 'Hebrews 11:1',
          text_zh: '信就是所望之事的实底，是未见之事的确据。',
          text_en: 'Now faith is the assurance of things hoped for, the conviction of things not seen.',
        },
        reflection: {
          zh: '希伯来书的作者为信心下了一个定义：信心不是模糊的盼望，而是一种实实在在的确据。我们虽然看不见神的应许完全成就，但信心让我们像已经拥有一样站立得稳。',
          en: 'The author of Hebrews defines faith not as vague hope, but as concrete assurance. Though we cannot yet see God\'s promises fully realized, faith enables us to stand firm as though we already possess them.',
        },
        question: {
          zh: '在你生活中，有哪些"未见之事"是你正凭信心等候的？这节经文如何坚固你的盼望？',
          en: 'What "things not seen" are you currently waiting for by faith? How does this verse strengthen your hope?',
        },
        prayer: {
          zh: '主啊，感谢你赐下信心，使我对所盼望的事有实底，对未见的事有确据。求你加增我的信心，使我在看不见的时候仍然坚定倚靠你。奉主耶稣的名祷告，阿们。',
          en: 'Lord, thank You for the gift of faith that gives assurance to my hopes and conviction about what I cannot see. Increase my faith so that I may trust You firmly even when I cannot see. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '来11:6',
          ref_en: 'Hebrews 11:6',
          text_zh: '人非有信，就不能得神的喜悦；因为到神面前来的人，必须信有神，且信他赏赐那寻求他的人。',
          text_en: 'And without faith it is impossible to please him, for whoever would draw near to God must believe that he exists and that he rewards those who seek him.',
        },
        reflection: {
          zh: '这节经文告诉我们，信心是亲近神的门槛。神不仅要我们相信他存在，更要我们相信他是赏赐寻求他之人的神。信心不是一种冒险，而是对一位信实之神的回应。',
          en: 'This verse tells us that faith is the threshold for drawing near to God. He wants us not only to believe He exists, but to trust that He rewards those who earnestly seek Him. Faith is not a gamble—it is a response to a faithful God.',
        },
        question: {
          zh: '你是否真的相信神会赏赐寻求他的人？这样的确信如何影响你每天寻求神的动力？',
          en: 'Do you truly believe God rewards those who seek Him? How does this conviction affect your daily motivation to seek God?',
        },
        prayer: {
          zh: '天父，我渴望得你的喜悦。我相信你是存在的，也相信你赏赐那寻求你的人。求你帮助我更殷勤地寻求你，使我的信心讨你喜悦。奉主耶稣的名祷告，阿们。',
          en: 'Heavenly Father, I long to please You. I believe You exist and that You reward those who seek You. Help me to seek You more diligently, so that my faith may be pleasing in Your sight. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '罗10:17',
          ref_en: 'Romans 10:17',
          text_zh: '可见信道是从听道来的，听道是从基督的话来的。',
          text_en: 'So faith comes from hearing, and hearing through the word of Christ.',
        },
        reflection: {
          zh: '保罗清楚指出信心的来源——不是靠自己努力产生，而是从听神的话而来。当我们打开圣经、聆听讲道、默想基督的话语时，信心就在我们里面生长。',
          en: 'Paul clearly identifies the source of faith—it does not come from our own effort but from hearing God\'s Word. As we open Scripture, listen to preaching, and meditate on Christ\'s words, faith grows within us.',
        },
        question: {
          zh: '你每天有花时间聆听神的话吗？根据罗马书10:17，你可以怎样调整生活来更多领受神的道？',
          en: 'Do you spend time daily hearing God\'s Word? Based on Romans 10:17, how might you adjust your life to receive more of God\'s Word?',
        },
        prayer: {
          zh: '主耶稣，感谢你的话语是信心的源头。求你赐我渴慕你话语的心，使我天天听道、读经，让信心在我里面不断增长。奉主耶稣的名祷告，阿们。',
          en: 'Lord Jesus, thank You that Your Word is the source of faith. Give me a hunger for Your Word, that I may hear and read it daily, and that faith may continually grow within me. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '可9:24',
          ref_en: 'Mark 9:24',
          text_zh: '孩子的父亲立时喊着说："我信！但我信不足，求主帮助！"',
          text_en: 'Immediately the father of the child cried out and said, "I believe; help my unbelief!"',
        },
        reflection: {
          zh: '这位父亲的呼喊是何等真实——他承认自己有信心，却也坦诚信心不足。耶稣没有因他的软弱而拒绝他，反而医治了他的孩子。我们也可以带着不完全的信心来到主面前，求他帮助。',
          en: 'This father\'s cry is so honest—he acknowledges his faith yet confesses its inadequacy. Jesus did not reject him for his weakness but healed his child. We too can come to the Lord with imperfect faith and ask Him to help.',
        },
        question: {
          zh: '你是否有过"信，但信不足"的经历？这位父亲的祷告如何鼓励你在软弱中仍然来到耶稣面前？',
          en: 'Have you experienced believing yet struggling with unbelief? How does this father\'s prayer encourage you to come to Jesus even in weakness?',
        },
        prayer: {
          zh: '主啊，我信！但我信不足，求你帮助我。感谢你不嫌弃我微小的信心，求你使我的信心日渐增长，更深地经历你的大能。奉主耶稣的名祷告，阿们。',
          en: 'Lord, I believe; help my unbelief! Thank You for not despising my small faith. Cause my faith to grow day by day so that I may experience Your power more deeply. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '弗2:8-9',
          ref_en: 'Ephesians 2:8-9',
          text_zh: '你们得救是本乎恩，也因着信；这并不是出于自己，乃是神所赐的；也不是出于行为，免得有人自夸。',
          text_en: 'For by grace you have been saved through faith. And this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
        },
        reflection: {
          zh: '救恩是恩典加上信心，二者都是神的礼物。我们无法靠好行为赚取救恩，这除去了一切自夸的根据。信心本身也是神所赐的，使我们在感恩中谦卑领受。',
          en: 'Salvation comes by grace through faith, and both are God\'s gift. We cannot earn salvation through good works—this removes all grounds for boasting. Even faith itself is God\'s gift, leading us to receive it with grateful humility.',
        },
        question: {
          zh: '你是否有时候觉得需要靠自己的表现来赢得神的爱？以弗所书2:8-9如何纠正这种想法？',
          en: 'Do you sometimes feel you need to earn God\'s love through performance? How does Ephesians 2:8-9 correct that thinking?',
        },
        prayer: {
          zh: '恩慈的父，感谢你的救恩完全是出于恩典，借着信心领受，不是出于我的行为。求你帮助我放下自义，单单倚靠你的恩典而活。奉主耶稣的名祷告，阿们。',
          en: 'Gracious Father, thank You that salvation is entirely by grace through faith, not by my works. Help me lay down self-righteousness and live solely by Your grace. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '哈2:4',
          ref_en: 'Habakkuk 2:4',
          text_zh: '迦勒底人自高自大，心不正直；惟义人因信得生。',
          text_en: 'Behold, his soul is puffed up; it is not upright within him, but the righteous shall live by his faith.',
        },
        reflection: {
          zh: '先知哈巴谷在困惑中等候神的回答，神告诉他：骄傲的人终必败落，但义人要因信心而存活。信心不只是一时的决定，而是一种持续的生活方式——因信而活。',
          en: 'The prophet Habakkuk waited on God in confusion, and God answered: the proud will fall, but the righteous shall live by faith. Faith is not a one-time decision but a continual way of life—living by faith.',
        },
        question: {
          zh: '"因信得生"对你的日常生活意味着什么？你如何在工作、家庭和决策中实践因信而活？',
          en: 'What does "living by faith" mean for your daily life? How do you practice living by faith in work, family, and decisions?',
        },
        prayer: {
          zh: '主啊，我不愿做自高自大、心不正直的人。求你帮助我做一个因信得生的义人，在每一天的生活中凭信心行走，而不是凭眼见。奉主耶稣的名祷告，阿们。',
          en: 'Lord, I do not want to be proud and crooked in heart. Help me to be righteous and live by faith, walking by trust and not by sight in every area of my daily life. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '加2:20',
          ref_en: 'Galatians 2:20',
          text_zh: '我已经与基督同钉十字架，现在活着的不再是我，乃是基督在我里面活着；并且我如今在肉身活着，是因信神的儿子而活，他是爱我，为我舍己。',
          text_en: 'I have been crucified with Christ. It is no longer I who live, but Christ who lives in me. And the life I now live in the flesh I live by faith in the Son of God, who loved me and gave himself for me.',
        },
        reflection: {
          zh: '保罗宣告他的旧我已经与基督同钉十字架，如今是基督在他里面活着。这种因信而活的生命，根基在于基督的爱和舍己。信心不是抽象的概念，而是对那位爱我、为我舍己之主的回应。',
          en: 'Paul declares his old self has been crucified with Christ, and now Christ lives in him. This life of faith is rooted in Christ\'s love and self-sacrifice. Faith is not abstract—it is a response to the Lord who loved me and gave Himself for me.',
        },
        question: {
          zh: '你如何理解"现在活着的不再是我，乃是基督在我里面活着"？这对你每天的选择有什么影响？',
          en: 'How do you understand "it is no longer I who live, but Christ who lives in me"? How does this affect your daily choices?',
        },
        prayer: {
          zh: '主耶稣，感谢你爱我、为我舍己。我愿意与你同钉十字架，让你在我里面活着。求你帮助我每天因信你而活，让你的生命从我身上彰显出来。奉主耶稣的名祷告，阿们。',
          en: 'Lord Jesus, thank You for loving me and giving Yourself for me. I am willing to be crucified with You and let You live in me. Help me to live by faith in You each day, that Your life may be displayed through me. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '彼前1:8-9',
          ref_en: '1 Peter 1:8-9',
          text_zh: '你们虽然没有见过他，却是爱他；如今虽不得看见，却因信他就有说不出来、满有荣光的大喜乐，并且得着你们信心的果效，就是灵魂的救恩。',
          text_en: 'Though you have not seen him, you love him. Though you do not now see him, you believe in him and rejoice with joy that is inexpressible and filled with glory, obtaining the outcome of your faith, the salvation of your souls.',
        },
        reflection: {
          zh: '彼得写信给那些从未见过耶稣却深深爱他的信徒。信心带来的不是苦涩的等待，而是说不出来、满有荣光的大喜乐。信心的最终果效，就是灵魂的救恩。',
          en: 'Peter writes to believers who have never seen Jesus yet love Him deeply. Faith produces not bitter waiting but inexpressible, glorious joy. The ultimate outcome of faith is the salvation of our souls.',
        },
        question: {
          zh: '你虽然没有亲眼见过耶稣，却爱他吗？信心带给你的喜乐是怎样的？',
          en: 'Though you have never seen Jesus, do you love Him? What kind of joy has faith brought you?',
        },
        prayer: {
          zh: '主耶稣，我虽然没有见过你，却是爱你。感谢你赐给我因信而来的大喜乐。求你坚固我的信心，直到我得着信心的果效——灵魂的救恩。奉主耶稣的名祷告，阿们。',
          en: 'Lord Jesus, though I have not seen You, I love You. Thank You for the inexpressible joy that comes through faith. Strengthen my faith until I obtain its outcome—the salvation of my soul. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '来12:2',
          ref_en: 'Hebrews 12:2',
          text_zh: '仰望为我们信心创始成终的耶稣。他因那摆在前面的喜乐，就轻看羞辱，忍受了十字架的苦难，便坐在神宝座的右边。',
          text_en: 'looking to Jesus, the founder and perfecter of our faith, who for the joy that was set before him endured the cross, despising the shame, and is seated at the right hand of the throne of God.',
        },
        reflection: {
          zh: '耶稣是我们信心的创始者和成终者——信心从他开始，也由他来完成。他为了前面的喜乐忍受了十字架。当我们信心软弱时，不要看环境，要仰望耶稣。',
          en: 'Jesus is both the founder and perfecter of our faith—faith begins with Him and is completed by Him. He endured the cross for the joy set before Him. When our faith wavers, we must look not at circumstances but at Jesus.',
        },
        question: {
          zh: '当你信心软弱时，你通常把目光放在哪里？这节经文如何帮助你把焦点转向耶稣？',
          en: 'When your faith is weak, where do you usually fix your gaze? How does this verse help you redirect your focus to Jesus?',
        },
        prayer: {
          zh: '主耶稣，你是我信心的创始成终者。当我软弱时，求你帮助我仰望你，效法你为喜乐忍受十字架的榜样，在信心的道路上奔跑到底。奉主耶稣的名祷告，阿们。',
          en: 'Lord Jesus, You are the founder and perfecter of my faith. When I am weak, help me to look to You and follow Your example of enduring the cross for joy, running the race of faith to the end. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '创15:6',
          ref_en: 'Genesis 15:6',
          text_zh: '亚伯兰信耶和华，耶和华就以此为他的义。',
          text_en: 'And he believed the LORD, and he counted it to him as righteousness.',
        },
        reflection: {
          zh: '亚伯拉罕在年老无子的时候，神应许他的后裔如天上的星那样多。他相信了神，神就以他的信心算为义。信心不是完美的行为，而是对神应许的信靠。',
          en: 'When Abraham was old and childless, God promised him descendants as numerous as the stars. He believed God, and God counted his faith as righteousness. Faith is not perfect performance but trust in God\'s promises.',
        },
        question: {
          zh: '亚伯拉罕在看似不可能的处境中选择相信神。你生活中有哪些"不可能"的事需要凭信心交托给神？',
          en: 'Abraham chose to believe God in a seemingly impossible situation. What "impossibilities" in your life need to be entrusted to God by faith?',
        },
        prayer: {
          zh: '耶和华啊，你是守约施慈爱的神。如同亚伯拉罕信你而被算为义，我也愿意全心信靠你的应许，即使在看似不可能的时候。求你加增我的信心。奉主耶稣的名祷告，阿们。',
          en: 'LORD, You are a covenant-keeping God of steadfast love. Just as Abraham believed You and it was counted as righteousness, I too choose to trust Your promises even when they seem impossible. Increase my faith. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '太17:20',
          ref_en: 'Matthew 17:20',
          text_zh: '耶稣说："是因你们的信心小。我实在告诉你们，你们若有信心像一粒芥菜种，就是对这座山说：\\\'你从这边挪到那边\\\'，它也必挪去；并且你们没有一件不能做的事了。"',
          text_en: 'He said to them, "Because of your little faith. For truly, I say to you, if you have faith like a grain of mustard seed, you will say to this mountain, \'Move from here to there,\' and it will move, and nothing will be impossible for you."',
        },
        reflection: {
          zh: '耶稣用芥菜种的比喻告诉门徒：信心的关键不在于大小，而在于对象。即使像一粒芥菜种那么小的信心，只要放在全能的神身上，就能移山。',
          en: 'Jesus uses the mustard seed metaphor to show the disciples that what matters is not the size of faith but its object. Even faith as small as a mustard seed, placed in an almighty God, can move mountains.',
        },
        question: {
          zh: '你生命中有哪座"山"需要被挪去？耶稣的话如何鼓励你即使信心微小也要信靠神？',
          en: 'What "mountain" in your life needs to be moved? How do Jesus\' words encourage you to trust God even with small faith?',
        },
        prayer: {
          zh: '主耶稣，我的信心虽然像一粒芥菜种那么小，但你说这样的信心就足以移山。求你帮助我不看自己信心的大小，而是仰望你的全能。奉主耶稣的名祷告，阿们。',
          en: 'Lord Jesus, my faith may be as small as a mustard seed, but You said such faith is enough to move mountains. Help me not to measure my faith but to look to Your almighty power. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '弗6:16',
          ref_en: 'Ephesians 6:16',
          text_zh: '此外，又拿着信德当作藤牌，可以灭尽那恶者一切的火箭。',
          text_en: 'In all circumstances take up the shield of faith, with which you can extinguish all the flaming darts of the evil one.',
        },
        reflection: {
          zh: '在属灵争战中，信心就像一面盾牌，可以灭尽仇敌射来的火箭——怀疑、惧怕、试探和谎言。信心不是被动的，而是需要我们主动拿起来使用的武器。',
          en: 'In spiritual warfare, faith is like a shield that extinguishes all the enemy\'s flaming darts—doubt, fear, temptation, and lies. Faith is not passive; it is a weapon we must actively take up and use.',
        },
        question: {
          zh: '你最近遇到过哪些属灵的"火箭"（怀疑、惧怕、试探）？你如何拿起信心的藤牌来抵挡？',
          en: 'What spiritual "flaming darts" (doubt, fear, temptation) have you faced recently? How can you take up the shield of faith to resist them?',
        },
        prayer: {
          zh: '全能的神，感谢你赐下信心作为我的藤牌。求你帮助我在每一场属灵争战中，都拿起信德的藤牌，灭尽那恶者一切的火箭。奉主耶稣的名祷告，阿们。',
          en: 'Almighty God, thank You for giving me faith as my shield. Help me in every spiritual battle to take up the shield of faith and extinguish all the flaming darts of the evil one. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '雅2:17',
          ref_en: 'James 2:17',
          text_zh: '这样，信心若没有行为就是死的。',
          text_en: 'So also faith by itself, if it does not have works, is dead.',
        },
        reflection: {
          zh: '雅各提醒我们，真正的信心不是停留在口头上的，而是会自然产生行动。没有行为的信心是死的——不是说行为能救我们，而是说活的信心必然带出行动的果子。',
          en: 'James reminds us that genuine faith is not merely verbal—it naturally produces action. Faith without works is dead—not because works save us, but because living faith inevitably bears the fruit of action.',
        },
        question: {
          zh: '你的信心是否有行为来印证？有哪些具体的行动可以让你的信心变得更加活泼？',
          en: 'Is your faith backed by works? What specific actions could make your faith more vibrant and alive?',
        },
        prayer: {
          zh: '主啊，我不愿我的信心是死的。求你帮助我不单单口里说信，更在生活中用行为来彰显活泼的信心，使人看见你的荣耀。奉主耶稣的名祷告，阿们。',
          en: 'Lord, I do not want my faith to be dead. Help me not only to profess faith with my mouth but to demonstrate living faith through my actions, so that others may see Your glory. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '彼前1:7',
          ref_en: '1 Peter 1:7',
          text_zh: '叫你们的信心既被试验，就比那被火试验仍然能坏的金子更显宝贵，可以在耶稣基督显现的时候，得着称赞、荣耀、尊贵。',
          text_en: 'so that the tested genuineness of your faith—more precious than gold that perishes though it is tested by fire—may be found to result in praise and glory and honor at the revelation of Jesus Christ.',
        },
        reflection: {
          zh: '经过试炼的信心比金子更宝贵。金子会朽坏，但经过火炼的信心却存到永远。试炼不是要摧毁我们的信心，而是要炼净它，使它在耶稣再来时得着称赞和荣耀。',
          en: 'Tested faith is more precious than gold. Gold perishes, but faith refined by fire endures forever. Trials do not aim to destroy our faith but to purify it, so it may result in praise and glory when Jesus is revealed.',
        },
        question: {
          zh: '你正在经历怎样的信心试炼？彼得前书1:7如何帮助你从永恒的角度看待这些试炼？',
          en: 'What trials of faith are you facing? How does 1 Peter 1:7 help you view these trials from an eternal perspective?',
        },
        prayer: {
          zh: '主啊，感谢你借着试炼炼净我的信心，使它比金子更宝贵。求你帮助我在试炼中站立得稳，等候那在耶稣基督显现时得着称赞、荣耀、尊贵的日子。奉主耶稣的名祷告，阿们。',
          en: 'Lord, thank You for refining my faith through trials, making it more precious than gold. Help me stand firm in trials, looking forward to the day when tested faith results in praise, glory, and honor at Jesus Christ\'s revelation. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '林后5:7',
          ref_en: '2 Corinthians 5:7',
          text_zh: '因我们行事为人是凭着信心，不是凭着眼见。',
          text_en: 'for we walk by faith, not by sight.',
        },
        reflection: {
          zh: '保罗简洁有力地宣告了基督徒生活的原则：凭信心行走，不凭眼见。这世界教导我们"眼见为实"，但信心呼召我们信靠那位看不见的神，而不是被眼前的环境所左右。',
          en: 'Paul declares the principle of Christian living with powerful simplicity: we walk by faith, not by sight. The world teaches "seeing is believing," but faith calls us to trust the unseen God rather than be controlled by visible circumstances.',
        },
        question: {
          zh: '在你的生活中，有哪些时候你更倾向于凭眼见而不是凭信心？你如何操练凭信心行走？',
          en: 'In what areas of your life do you tend to walk by sight rather than by faith? How can you practice walking by faith?',
        },
        prayer: {
          zh: '主啊，求你帮助我凭信心行事，不凭眼见。当环境令我恐惧或疑惑时，愿我的眼目定睛在你身上，信靠你的带领超过自己的判断。奉主耶稣的名祷告，阿们。',
          en: 'Lord, help me to walk by faith, not by sight. When circumstances bring fear or doubt, may my eyes be fixed on You, trusting Your leading above my own judgment. In Jesus\' name, amen.',
        },
      },
    ],
  },
  {
    id: 'prayer',
    name_zh: '祷告',
    name_en: 'Prayer',
    icon: '🙏',
    hymnKeywords: ['祷告', '祈求', 'prayer', 'pray'],
    devotionals: [
      {
        scripture: {
          ref_zh: '太6:9-10',
          ref_en: 'Matthew 6:9-10',
          text_zh: '所以，你们祷告要这样说："我们在天上的父，愿人都尊你的名为圣。愿你的国降临。愿你的旨意行在地上，如同行在天上。"',
          text_en: '"Pray then like this: \'Our Father in heaven, hallowed be your name. Your kingdom come, your will be done, on earth as it is in heaven.\'"',
        },
        reflection: {
          zh: '主祷文的开头教导我们，祷告首先不是向神要东西，而是尊崇神的名、渴望神的国度降临、顺服神的旨意。祷告的优先次序是以神为中心，而不是以自我为中心。',
          en: 'The opening of the Lord\'s Prayer teaches us that prayer is first about honoring God\'s name, longing for His kingdom, and submitting to His will—not about asking for things. Prayer\'s priority is God-centered, not self-centered.',
        },
        question: {
          zh: '你的祷告通常以什么开始？主祷文如何调整你祷告的优先次序？',
          en: 'What do your prayers usually begin with? How does the Lord\'s Prayer reshape your prayer priorities?',
        },
        prayer: {
          zh: '我们在天上的父，愿人都尊你的名为圣。愿你的国降临，愿你的旨意行在地上如同行在天上。主啊，帮助我的祷告以你的荣耀为首要。奉主耶稣的名祷告，阿们。',
          en: 'Our Father in heaven, hallowed be Your name. Your kingdom come, Your will be done, on earth as it is in heaven. Lord, help my prayers to put Your glory first. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '太6:11-13',
          ref_en: 'Matthew 6:11-13',
          text_zh: '"我们日用的饮食，今日赐给我们。免我们的债，如同我们免了人的债。不叫我们遇见试探，救我们脱离凶恶。"',
          text_en: '"Give us this day our daily bread, and forgive us our debts, as we also have forgiven our debtors. And lead us not into temptation, but deliver us from evil."',
        },
        reflection: {
          zh: '主祷文的后半部分涵盖了我们一切的需要：日用的供应、罪的赦免和属灵的保护。耶稣教导我们可以坦然地将这些需要带到天父面前，同时也提醒我们要饶恕别人。',
          en: 'The second half of the Lord\'s Prayer covers all our needs: daily provision, forgiveness of sins, and spiritual protection. Jesus teaches us to bring these needs boldly to the Father while reminding us to forgive others.',
        },
        question: {
          zh: '日用饮食、赦免和保护——这三方面中，哪一方面你最需要在祷告中更多交托给神？',
          en: 'Daily provision, forgiveness, and protection—which of these three do you most need to entrust to God in prayer?',
        },
        prayer: {
          zh: '天父，求你赐给我们日用的饮食。赦免我们的罪，如同我们饶恕得罪我们的人。不叫我们遇见试探，救我们脱离凶恶。奉主耶稣的名祷告，阿们。',
          en: 'Heavenly Father, give us this day our daily bread. Forgive our sins as we forgive those who sin against us. Lead us not into temptation but deliver us from evil. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '帖前5:17',
          ref_en: '1 Thessalonians 5:17',
          text_zh: '不住地祷告。',
          text_en: 'pray without ceasing,',
        },
        reflection: {
          zh: '短短四个字，却包含了极深的属灵操练。不住地祷告不是说我们要24小时跪着，而是保持一颗时刻与神连接的心——无论做什么，都在与神对话。',
          en: 'Just three words in English, yet they contain a profound spiritual discipline. Praying without ceasing doesn\'t mean kneeling 24 hours a day but maintaining a heart constantly connected to God—conversing with Him in everything we do.',
        },
        question: {
          zh: '你如何在忙碌的日常生活中实践"不住地祷告"？有哪些方法可以帮助你保持与神的连接？',
          en: 'How can you practice "praying without ceasing" in your busy daily life? What methods help you stay connected with God?',
        },
        prayer: {
          zh: '主啊，求你帮助我操练不住地祷告，使我的心时刻与你相连。无论我在做什么，愿我都在与你对话，活在你的同在中。奉主耶稣的名祷告，阿们。',
          en: 'Lord, help me to practice praying without ceasing, keeping my heart always connected to You. Whatever I am doing, may I be in conversation with You, living in Your presence. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '腓4:6-7',
          ref_en: 'Philippians 4:6-7',
          text_zh: '应当一无挂虑，凡事借着祷告、祈求和感谢，将你们所要的告诉神。神所赐出人意外的平安，必在基督耶稣里保守你们的心怀意念。',
          text_en: 'do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God. And the peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus.',
        },
        reflection: {
          zh: '保罗给出了对抗焦虑的良方：不是压抑忧虑，而是借着祷告、祈求和感谢把一切告诉神。结果是什么？神所赐出人意外的平安会保守我们的心怀意念。',
          en: 'Paul prescribes the antidote to anxiety: not suppressing worry, but telling God everything through prayer, supplication, and thanksgiving. The result? God\'s peace, surpassing all understanding, will guard our hearts and minds.',
        },
        question: {
          zh: '你目前最大的挂虑是什么？你愿意现在就借着祷告和感谢，把它交给神吗？',
          en: 'What is your greatest anxiety right now? Are you willing to hand it to God through prayer and thanksgiving right now?',
        },
        prayer: {
          zh: '天父，我把一切挂虑卸给你。求你赐我出人意外的平安，在基督耶稣里保守我的心怀意念。我感谢你，因为你掌管一切。奉主耶稣的名祷告，阿们。',
          en: 'Heavenly Father, I cast all my anxieties on You. Grant me Your peace that surpasses all understanding, and guard my heart and mind in Christ Jesus. I thank You, for You are in control. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '雅5:16',
          ref_en: 'James 5:16',
          text_zh: '所以你们要彼此认罪，互相代求，使你们可以得医治。义人祈祷所发的力量是大有功效的。',
          text_en: 'Therefore, confess your sins to one another and pray for one another, that you may be healed. The prayer of a righteous person has great power as it is working.',
        },
        reflection: {
          zh: '雅各鼓励信徒彼此认罪、互相代求。祷告不是独行侠的操练，而是群体中的属灵纽带。义人的祷告大有能力，因为它不是凭人的力量，而是连接了神的大能。',
          en: 'James encourages believers to confess sins and pray for one another. Prayer is not a solo exercise but a spiritual bond within community. The prayer of a righteous person has great power because it connects not to human strength but to God\'s might.',
        },
        question: {
          zh: '你有没有可以彼此认罪、互相代求的属灵同伴？你如何看待"义人祈祷所发的力量是大有功效的"这句话？',
          en: 'Do you have spiritual companions with whom you can confess sins and pray? How do you view the statement that "the prayer of a righteous person has great power"?',
        },
        prayer: {
          zh: '主啊，感谢你应许义人的祷告大有功效。求你帮助我活出公义的生活，也赐我属灵的同伴可以彼此代求，经历祷告的大能。奉主耶稣的名祷告，阿们。',
          en: 'Lord, thank You for promising that the prayer of the righteous is powerful. Help me live righteously and give me spiritual companions to pray for one another, that we may experience the power of prayer. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '耶33:3',
          ref_en: 'Jeremiah 33:3',
          text_zh: '你求告我，我就应允你，并将你所不知道、又大又难的事指示你。',
          text_en: '"Call to me and I will answer you, and will tell you great and hidden things that you have not known."',
        },
        reflection: {
          zh: '神亲自邀请我们来求告他，并且应许要回应我们。不仅如此，他还要将我们所不知道的、又大又难的事向我们显明。祷告打开了通往神奥秘启示的大门。',
          en: 'God Himself invites us to call upon Him and promises to answer. Moreover, He will reveal great and hidden things we have not known. Prayer opens the door to God\'s mysterious revelations.',
        },
        question: {
          zh: '你是否曾经在祷告中经历神向你显明"又大又难的事"？这个应许如何激励你更多祷告？',
          en: 'Have you ever experienced God revealing "great and hidden things" through prayer? How does this promise motivate you to pray more?',
        },
        prayer: {
          zh: '耶和华啊，我求告你，求你应允我。求你将我所不知道的、又大又难的事指示我，使我更认识你的作为和旨意。奉主耶稣的名祷告，阿们。',
          en: 'LORD, I call to You; please answer me. Show me great and hidden things that I have not known, that I may know Your works and Your will more deeply. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '约15:7',
          ref_en: 'John 15:7',
          text_zh: '你们若常在我里面，我的话也常在你们里面；凡你们所愿意的，祈求就给你们成就。',
          text_en: '"If you abide in me, and my words abide in you, ask whatever you wish, and it will be done for you."',
        },
        reflection: {
          zh: '耶稣应许祈求必蒙成就，但前提是"常在我里面，我的话也常在你们里面"。当我们住在基督里、被他的话语充满时，我们的愿望就会与神的心意对齐，祷告自然蒙应允。',
          en: 'Jesus promises that our requests will be granted, but the condition is abiding in Him and His words abiding in us. When we dwell in Christ and are filled with His Word, our desires align with God\'s will, and prayer is naturally answered.',
        },
        question: {
          zh: '"常在主里面"对你来说意味着什么？你的祷告是否反映了与主亲密的关系？',
          en: 'What does "abiding in the Lord" mean to you? Do your prayers reflect an intimate relationship with Christ?',
        },
        prayer: {
          zh: '主耶稣，我愿意常在你里面，也愿你的话常在我里面。求你塑造我的心意，使我所愿意的与你的旨意一致，使我的祷告蒙你悦纳。奉主耶稣的名祷告，阿们。',
          en: 'Lord Jesus, I want to abide in You, and I want Your words to abide in me. Shape my desires to align with Your will, so that my prayers may be pleasing to You. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '罗8:26',
          ref_en: 'Romans 8:26',
          text_zh: '况且，我们的软弱有圣灵帮助；我们本不晓得当怎样祷告，只是圣灵亲自用说不出来的叹息替我们祷告。',
          text_en: 'Likewise the Spirit helps us in our weakness. For we do not know what to pray for as we ought, but the Spirit himself intercedes for us with groanings too deep for words.',
        },
        reflection: {
          zh: '我们常常不知道该怎么祷告，但这不是祷告的阻碍。圣灵亲自帮助我们的软弱，用说不出来的叹息为我们代求。即使我们词穷，圣灵也能将我们心中的呼求带到父面前。',
          en: 'We often don\'t know how to pray, but this is no barrier. The Spirit Himself helps our weakness, interceding with groans beyond words. Even when we are speechless, the Spirit carries our heart\'s cry before the Father.',
        },
        question: {
          zh: '你是否有过不知道怎么祷告的时刻？知道圣灵在为你代求，这给你带来怎样的安慰？',
          en: 'Have you ever been at a loss for how to pray? How does knowing the Spirit intercedes for you bring comfort?',
        },
        prayer: {
          zh: '圣灵啊，感谢你在我软弱不知如何祷告时，亲自用说不出来的叹息为我代求。求你继续在我里面祷告，将我的需要带到天父面前。奉主耶稣的名祷告，阿们。',
          en: 'Holy Spirit, thank You for interceding for me with groanings too deep for words when I am weak and don\'t know how to pray. Continue to pray within me and bring my needs before the Father. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '诗145:18',
          ref_en: 'Psalm 145:18',
          text_zh: '凡求告耶和华的，就是诚心求告他的，耶和华便与他们相近。',
          text_en: 'The LORD is near to all who call on him, to all who call on him in truth.',
        },
        reflection: {
          zh: '诗人宣告一个美好的真理：当我们诚心求告耶和华时，他便与我们相近。祷告不是喊向虚空，而是向一位愿意亲近我们的神说话。关键在于"诚心"——真诚、不虚假地来到他面前。',
          en: 'The psalmist declares a beautiful truth: when we call on the LORD in truth, He draws near. Prayer is not shouting into the void but speaking to a God who desires to be close. The key is "in truth"—coming before Him sincerely and genuinely.',
        },
        question: {
          zh: '你的祷告是否出于诚心？有什么拦阻你在祷告中对神全然真诚？',
          en: 'Are your prayers truly sincere? What prevents you from being completely honest with God in prayer?',
        },
        prayer: {
          zh: '耶和华啊，我诚心求告你，求你与我相近。除去我一切的虚假和伪装，使我在你面前坦然无惧，以真诚的心来到你面前。奉主耶稣的名祷告，阿们。',
          en: 'LORD, I call on You in truth; draw near to me. Remove all pretense and masks, that I may come before You boldly and sincerely. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '太7:7-8',
          ref_en: 'Matthew 7:7-8',
          text_zh: '"你们祈求，就给你们；寻找，就寻见；叩门，就给你们开门。因为凡祈求的，就得着；寻找的，就寻见；叩门的，就给他开门。"',
          text_en: '"Ask, and it will be given to you; seek, and you will find; knock, and it will be opened to you. For everyone who asks receives, and the one who seeks finds, and to the one who knocks it will be opened."',
        },
        reflection: {
          zh: '耶稣用三个递进的动作——祈求、寻找、叩门——鼓励我们在祷告中要积极主动、坚持不懈。神不是勉强回应我们，而是乐意向每一个祈求的人敞开。',
          en: 'Jesus uses three escalating actions—ask, seek, knock—to encourage us to be proactive and persistent in prayer. God does not respond reluctantly but gladly opens to everyone who asks.',
        },
        question: {
          zh: '祈求、寻找、叩门——这三个层次的祷告中，你目前在哪个阶段？你是否需要更加恒切？',
          en: 'Ask, seek, knock—which level of prayer are you at? Do you need to be more persistent?',
        },
        prayer: {
          zh: '主耶稣，我向你祈求，求你赐给我；我寻找你，求你让我寻见；我叩门，求你为我开门。感谢你应许凡祈求的就得着。奉主耶稣的名祷告，阿们。',
          en: 'Lord Jesus, I ask—please give; I seek—let me find; I knock—please open the door. Thank You for promising that everyone who asks receives. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '太6:6',
          ref_en: 'Matthew 6:6',
          text_zh: '你祷告的时候，要进你的内屋，关上门，祷告你在暗中的父，你父在暗中察看，必然报答你。',
          text_en: '"But when you pray, go into your room and shut the door and pray to your Father who is in secret. And your Father who sees in secret will reward you."',
        },
        reflection: {
          zh: '耶稣教导我们，祷告不是做给人看的表演，而是与天父之间私密的对话。进入内屋、关上门，意味着除去一切外在的干扰和虚荣，在暗中与神真实相遇。',
          en: 'Jesus teaches that prayer is not a performance for others but a private conversation with the Father. Going into your room and shutting the door means removing all distractions and vanity to meet God genuinely in secret.',
        },
        question: {
          zh: '你有固定的"内屋"时间来单独与神亲近吗？什么阻碍你建立这样的习惯？',
          en: 'Do you have a regular "inner room" time to be alone with God? What hinders you from establishing this habit?',
        },
        prayer: {
          zh: '天父，求你帮助我建立与你单独相处的祷告生活。我愿意进入内屋、关上门，在暗中与你相遇。感谢你在暗中察看，必然报答。奉主耶稣的名祷告，阿们。',
          en: 'Heavenly Father, help me to build a prayer life of being alone with You. I will enter my room, shut the door, and meet You in secret. Thank You for seeing in secret and rewarding. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '路18:1',
          ref_en: 'Luke 18:1',
          text_zh: '耶稣设一个比喻，是要人常常祷告，不可灰心。',
          text_en: 'And he told them a parable to the effect that they ought always to pray and not lose heart.',
        },
        reflection: {
          zh: '耶稣特意设了一个比喻来教导门徒：要常常祷告，不可灰心。祷告最大的敌人不是忙碌，而是灰心。当祷告似乎没有回应时，耶稣鼓励我们坚持不放弃。',
          en: 'Jesus deliberately told a parable to teach His disciples to always pray and not lose heart. The greatest enemy of prayer is not busyness but discouragement. When prayers seem unanswered, Jesus encourages us to persist.',
        },
        question: {
          zh: '你有没有因为祷告久未蒙应允而灰心的经历？耶稣的教导如何激励你继续祷告？',
          en: 'Have you ever been discouraged because prayers seemed unanswered for a long time? How does Jesus\' teaching motivate you to keep praying?',
        },
        prayer: {
          zh: '主耶稣，求你帮助我常常祷告，不可灰心。即使暂时看不到回应，我仍要坚持祷告，因为你是信实的神，必在最好的时候回应我。奉主耶稣的名祷告，阿们。',
          en: 'Lord Jesus, help me to always pray and not lose heart. Even when I see no answer yet, I will persist in prayer, for You are a faithful God who answers at the perfect time. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '太18:19-20',
          ref_en: 'Matthew 18:19-20',
          text_zh: '"我又告诉你们：若是你们中间有两个人在地上同心合意地求什么事，我在天上的父必为他们成全。因为无论在哪里，有两三个人奉我的名聚会，那里就有我在他们中间。"',
          text_en: '"Again I say to you, if two of you agree on earth about anything they ask, it will be done for them by my Father in heaven. For where two or three are gathered in my name, there am I among them."',
        },
        reflection: {
          zh: '耶稣特别强调同心合意祷告的力量。两三个人奉主的名聚集，主就在他们中间。这不只是关于人数，更是关于合一——当信徒同心祷告时，天父必垂听。',
          en: 'Jesus especially emphasizes the power of united prayer. Where two or three gather in His name, He is among them. This is not just about numbers but about unity—when believers pray in agreement, the Father listens.',
        },
        question: {
          zh: '你有没有同心祷告的伙伴？你如何在家庭或教会中建立同心祷告的习惯？',
          en: 'Do you have prayer partners who pray in agreement with you? How can you build a habit of united prayer in your family or church?',
        },
        prayer: {
          zh: '主耶稣，感谢你应许当两三个人奉你的名聚集时，你就在我们中间。求你赐给我同心祷告的伙伴，使我们一起经历天父的成全。奉主耶稣的名祷告，阿们。',
          en: 'Lord Jesus, thank You for promising to be among us when two or three gather in Your name. Give me prayer partners so we may together experience the Father\'s answered prayers. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '太5:44',
          ref_en: 'Matthew 5:44',
          text_zh: '只是我告诉你们：要爱你们的仇敌，为那逼迫你们的祷告。',
          text_en: '"But I say to you, Love your enemies and pray for those who persecute you,"',
        },
        reflection: {
          zh: '耶稣给了一个最具挑战性的祷告命令：为仇敌和逼迫者祷告。这违反人的本能，但正是在为仇敌祷告的过程中，我们的心被转化，变得更像基督。',
          en: 'Jesus gives one of the most challenging prayer commands: pray for enemies and persecutors. This goes against human instinct, yet it is precisely in praying for enemies that our hearts are transformed to become more like Christ.',
        },
        question: {
          zh: '有没有人是你很难为之祷告的？耶稣的命令如何挑战你去为那些伤害你的人祈祷？',
          en: 'Is there someone you find hard to pray for? How does Jesus\' command challenge you to pray for those who have hurt you?',
        },
        prayer: {
          zh: '主耶稣，你在十字架上为钉你的人祷告，求你帮助我也能为那些伤害我、逼迫我的人祷告。改变我的心，使我能以爱回应仇恨。奉主耶稣的名祷告，阿们。',
          en: 'Lord Jesus, You prayed for those who crucified You. Help me also to pray for those who hurt and persecute me. Transform my heart so I may respond to hatred with love. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '弗6:18',
          ref_en: 'Ephesians 6:18',
          text_zh: '靠着圣灵，随时多方祷告祈求，并要在此警醒不倦，为众圣徒祈求。',
          text_en: 'praying at all times in the Spirit, with all prayer and supplication. To that end, keep alert with all perseverance, making supplication for all the saints,',
        },
        reflection: {
          zh: '保罗在描述属灵军装之后，以祷告作为总结。靠着圣灵、随时多方、警醒不倦、为众圣徒——这四个要素描绘了祷告生活的全貌：依靠圣灵的能力，在各种时间和方式中，持续不断地为神的百姓代求。',
          en: 'After describing spiritual armor, Paul concludes with prayer. In the Spirit, at all times, with perseverance, for all the saints—these four elements paint the full picture of a prayer life: relying on the Spirit\'s power, in all times and ways, persistently interceding for God\'s people.',
        },
        question: {
          zh: '你的祷告生活是否包含"靠圣灵、随时、多方、为众圣徒"这四个方面？哪一方面你需要加强？',
          en: 'Does your prayer life include these four aspects: in the Spirit, at all times, in various ways, and for all the saints? Which area needs strengthening?',
        },
        prayer: {
          zh: '圣灵啊，帮助我靠着你随时多方祷告祈求。使我警醒不倦，不只为自己祷告，也为众圣徒代求。愿我的祷告生活成为属灵争战中强有力的武器。奉主耶稣的名祷告，阿们。',
          en: 'Holy Spirit, help me to pray at all times in all ways through Your power. Keep me alert and persevering, praying not only for myself but for all the saints. May my prayer life be a mighty weapon in spiritual warfare. In Jesus\' name, amen.',
        },
      },
    ],
  },
];
