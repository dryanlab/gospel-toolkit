// Family Altar (家庭祭坛) — 主题数据
// 8个主题，每个含多个灵修单元（经文+默想+问题+祷告一体化）

export interface Scripture {
  ref_zh: string;
  ref_en: string;
  text_zh: string;
  text_en: string;
}

export interface BilingualText {
  zh: string;
  en: string;
}

export interface DevotionalUnit {
  scripture: Scripture;
  reflection: BilingualText;
  question: BilingualText;
  prayer: BilingualText;
}

export interface AltarTheme {
  id: string;
  name_zh: string;
  name_en: string;
  icon: string;
  devotionals: DevotionalUnit[];
  hymnKeywords: string[];
}

export const themes: AltarTheme[] = [
  {
    id: 'faith',
    name_zh: '信心',
    name_en: 'Faith',
    icon: '⛰️',
    devotionals: [
      {
        scripture: {
          ref_zh: '希伯来书 11:1',
          ref_en: 'Hebrews 11:1',
          text_zh: '信就是所望之事的实底，是未见之事的确据。',
          text_en: 'Now faith is the assurance of things hoped for, the conviction of things not seen.',
        },
        reflection: {
          zh: '这节经文告诉我们，信心不是凭感觉，而是扎根在神话语的应许上。"实底"和"确据"说明信心是实实在在的——即使看不见，我们仍然可以确信神的应许必然成就。',
          en: 'This verse tells us that faith is not based on feelings, but rooted in the promises of God\'s Word. "Assurance" and "conviction" show that faith is real and substantial — even when we cannot see, we can be certain God\'s promises will come true.',
        },
        question: {
          zh: '希伯来书说信心是"未见之事的确据"。你生活中有哪些事是你虽然看不见、但仍然相信神在掌管的？',
          en: 'Hebrews says faith is "the conviction of things not seen." What are some things in your life that you cannot see but still trust God is in control of?',
        },
        prayer: {
          zh: '天父，感谢你赐给我们信心——所望之事的实底、未见之事的确据。即使前路看不清楚，帮助我们仍然坚信你的应许。奉耶稣的名祷告，阿们。',
          en: 'Heavenly Father, thank You for giving us faith — the assurance of things hoped for, the conviction of things not seen. Even when the road ahead is unclear, help us hold firm to Your promises. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '希伯来书 11:6',
          ref_en: 'Hebrews 11:6',
          text_zh: '人非有信，就不能得神的喜悦；因为到神面前来的人，必须信有神，且信他赏赐那寻求他的人。',
          text_en: 'And without faith it is impossible to please him, for whoever would draw near to God must believe that he exists and that he rewards those who seek him.',
        },
        reflection: {
          zh: '这节经文清楚地说，没有信心就不能讨神喜悦。但好消息是：神赏赐那寻求他的人。信心的第一步很简单——相信神存在，并且他在乎我们的寻求。',
          en: 'This verse makes it clear: without faith it is impossible to please God. But the good news is that God rewards those who seek Him. The first step of faith is simple — believe God exists and that He cares when we seek Him.',
        },
        question: {
          zh: '经文说神"赏赐那寻求他的人"。你在寻求神的过程中，经历过什么样的"赏赐"？',
          en: 'The verse says God "rewards those who seek him." What kind of "rewards" have you experienced in seeking God?',
        },
        prayer: {
          zh: '主啊，我们渴望讨你的喜悦。帮助我们殷勤寻求你，因为你应许赏赐那寻求你的人。增添我们的信心，让我们更深地认识你。阿们。',
          en: 'Lord, we long to please You. Help us seek You diligently, for You promise to reward those who seek You. Increase our faith and let us know You more deeply. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '罗马书 10:17',
          ref_en: 'Romans 10:17',
          text_zh: '可见信道是从听道来的，听道是从基督的话来的。',
          text_en: 'So faith comes from hearing, and hearing through the word of Christ.',
        },
        reflection: {
          zh: '保罗告诉我们信心的来源——听神的话语。信心不是凭空产生的，而是当我们读经、听道、默想基督的话语时，圣灵在我们心中生发出来的。这就是为什么家庭灵修如此重要。',
          en: 'Paul tells us the source of faith — hearing God\'s Word. Faith doesn\'t come from nowhere; it is produced by the Holy Spirit as we read Scripture, hear preaching, and meditate on Christ\'s words. This is why family devotions are so important.',
        },
        question: {
          zh: '既然"信道是从听道来的"，我们的家庭可以怎样更多地一起聆听和学习神的话语？',
          en: 'Since "faith comes from hearing," how can our family listen to and learn God\'s Word together more often?',
        },
        prayer: {
          zh: '天父，感谢你借着你的话语赐给我们信心。求你帮助我们全家养成每天读经的习惯，让信心从你的话语中不断成长。奉耶稣的名祷告，阿们。',
          en: 'Heavenly Father, thank You for giving us faith through Your Word. Help our whole family build a daily Bible-reading habit so our faith may continually grow from hearing Your Word. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '马可福音 9:24',
          ref_en: 'Mark 9:24',
          text_zh: '孩子的父亲立时喊着说："我信！但我信不足，求主帮助。"',
          text_en: 'Immediately the father of the child cried out and said, "I believe; help my unbelief!"',
        },
        reflection: {
          zh: '这位父亲的呼喊是最真实的信心祷告之一。他承认自己信心不足，但他仍然来到耶稣面前求助。信心并不需要完美才有效——真正的信心是带着我们的软弱来到主面前。',
          en: 'This father\'s cry is one of the most honest prayers of faith. He admitted his faith was insufficient, yet he still came to Jesus for help. Faith doesn\'t need to be perfect to be effective — true faith brings our weakness to the Lord.',
        },
        question: {
          zh: '"我信！但我信不足，求主帮助。"你有没有过类似的经历——信心和怀疑同时存在？你当时怎么做的？',
          en: '"I believe; help my unbelief!" Have you ever experienced faith and doubt at the same time? What did you do?',
        },
        prayer: {
          zh: '主啊，我们信！但我们信不足，求你帮助！愿我们的信心不是建立在自己的能力上，而是建立在你不变的信实上。阿们。',
          en: 'Lord, we believe; help our unbelief! May our faith be built not on our own ability, but on Your unchanging faithfulness. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '以弗所书 2:8-9',
          ref_en: 'Ephesians 2:8–9',
          text_zh: '你们得救是本乎恩，也因着信；这并不是出于自己，乃是神所赐的；也不是出于行为，免得有人自夸。',
          text_en: 'For by grace you have been saved through faith. And this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
        },
        reflection: {
          zh: '真正的信心是神赐给我们的礼物，不是我们自己努力产生的。保罗强调"不是出于行为，免得有人自夸"——救恩完全是恩典，信心本身也是恩赐。这让我们谦卑，也让我们安心。',
          en: 'True faith is a gift from God, not something we produce by our own effort. Paul emphasizes "not a result of works, so that no one may boast" — salvation is entirely by grace, and faith itself is a gift. This humbles us and gives us assurance.',
        },
        question: {
          zh: '以弗所书说信心是"神所赐的"礼物。这如何改变你对自己得救的理解？',
          en: 'Ephesians says faith is "the gift of God." How does this change your understanding of your own salvation?',
        },
        prayer: {
          zh: '天父，感谢你赐给我们信心的礼物。我们得救本乎恩、因着信，这完全是出于你。帮助我们不倚靠自己的行为，只信靠你的恩典。阿们。',
          en: 'Father, thank You for the gift of faith. We are saved by grace through faith, and this is entirely from You. Help us not rely on our own works, but trust only in Your grace. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '哈巴谷书 2:4',
          ref_en: 'Habakkuk 2:4',
          text_zh: '迦勒底人自高自大，心不正直；惟义人因信得生。',
          text_en: 'Behold, his soul is puffed up; it is not upright within him, but the righteous shall live by his faith.',
        },
        reflection: {
          zh: '"义人因信得生"是整本圣经中最有力量的宣告之一，后来被保罗在罗马书和加拉太书中反复引用。信心不只是得救的那一刻，更是每天生活的方式——我们靠信心活每一天。',
          en: '"The righteous shall live by his faith" is one of the most powerful declarations in all of Scripture, later quoted by Paul in Romans and Galatians. Faith is not just for the moment of salvation, but a way of daily living — we live by faith every day.',
        },
        question: {
          zh: '"义人因信得生"——"因信得生"对你的日常生活意味着什么？你怎样在每一天中"凭信心而活"？',
          en: '"The righteous shall live by his faith" — what does "living by faith" mean for your daily life? How do you "live by faith" each day?',
        },
        prayer: {
          zh: '主啊，你说义人因信得生。帮助我们不只在困难时才凭信心，而是每一天、每一刻都靠信心来生活。阿们。',
          en: 'Lord, You say the righteous shall live by faith. Help us live by faith not only in times of trouble, but every day and every moment. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '加拉太书 2:20',
          ref_en: 'Galatians 2:20',
          text_zh: '我已经与基督同钉十字架，现在活着的不再是我，乃是基督在我里面活着；并且我如今在肉身活着，是因信神的儿子而活，他是爱我，为我舍己。',
          text_en: 'I have been crucified with Christ. It is no longer I who live, but Christ who lives in me. And the life I now live in the flesh I live by faith in the Son of God, who loved me and gave himself for me.',
        },
        reflection: {
          zh: '保罗说"活着的不再是我，乃是基督在我里面活着"。信心的生活不是靠自己的意志力，而是让基督在我们里面活出他的生命。那位"爱我、为我舍己"的主，正住在我们心中。',
          en: 'Paul says "it is no longer I who live, but Christ who lives in me." The life of faith is not about our willpower, but letting Christ live His life through us. The One who "loved me and gave himself for me" now dwells in our hearts.',
        },
        question: {
          zh: '保罗说"活着的不再是我，乃是基督在我里面活着"。你觉得这在实际生活中是什么样子的？',
          en: 'Paul says "it is no longer I who live, but Christ who lives in me." What do you think this looks like in practical daily life?',
        },
        prayer: {
          zh: '主耶稣，感谢你爱我们、为我们舍己。帮助我们每天活出"不再是我，乃是基督在我里面活"的生命，因信你而活。阿们。',
          en: 'Lord Jesus, thank You for loving us and giving Yourself for us. Help us live each day so that it is no longer we who live, but Christ who lives in us, living by faith in You. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '彼得前书 1:8-9',
          ref_en: '1 Peter 1:8–9',
          text_zh: '你们虽然没有见过他，却是爱他；如今虽不得看见，却因信他就有说不出来、满有荣光的大喜乐，并且得着你们信心的果效，就是灵魂的救恩。',
          text_en: 'Though you have not seen him, you love him. Though you do not now see him, you believe in him and rejoice with joy that is inexpressible and filled with glory, obtaining the outcome of your faith, the salvation of your souls.',
        },
        reflection: {
          zh: '彼得描绘了信心带来的奇妙果实：虽然没有亲眼见过耶稣，我们却爱他；虽然看不见他，我们却因信而有"说不出来、满有荣光的大喜乐"。信心的最终果效就是灵魂的救恩。',
          en: 'Peter describes the wonderful fruit of faith: though we have not seen Jesus, we love Him; though we cannot see Him, we rejoice with "joy that is inexpressible and filled with glory." The ultimate outcome of faith is the salvation of our souls.',
        },
        question: {
          zh: '彼得说信心带来"说不出来、满有荣光的大喜乐"。你有没有经历过这种因信而来的深层喜乐？',
          en: 'Peter says faith brings "joy that is inexpressible and filled with glory." Have you ever experienced this deep joy that comes from faith?',
        },
        prayer: {
          zh: '天父，虽然我们没有见过主耶稣，却因信他而爱他。感谢你赐给我们说不出来、满有荣光的大喜乐，并且得着信心的果效——灵魂的救恩。阿们。',
          en: 'Father, though we have not seen the Lord Jesus, we love Him through faith. Thank You for giving us joy that is inexpressible and filled with glory, and for the outcome of our faith — the salvation of our souls. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '希伯来书 12:2',
          ref_en: 'Hebrews 12:2',
          text_zh: '仰望为我们信心创始成终的耶稣。他因那摆在前面的喜乐，就轻看羞辱，忍受了十字架的苦难，便坐在神宝座的右边。',
          text_en: 'Looking to Jesus, the founder and perfecter of our faith, who for the joy that was set before him endured the cross, despising the shame, and is seated at the right hand of the throne of God.',
        },
        reflection: {
          zh: '耶稣是我们信心的"创始成终者"——信心从他开始，也在他里面完成。当我们仰望耶稣如何为了前面的喜乐忍受十字架，我们就有力量在自己的困难中坚持下去。',
          en: 'Jesus is the "founder and perfecter" of our faith — faith begins with Him and is completed in Him. When we look to how Jesus endured the cross for the joy set before Him, we find strength to persevere in our own difficulties.',
        },
        question: {
          zh: '经文说耶稣"因那摆在前面的喜乐"忍受了十字架。你在信仰的道路上，什么"摆在前面的喜乐"帮助你坚持下去？',
          en: 'The verse says Jesus "for the joy set before him endured the cross." What "joy set before you" helps you persevere on your faith journey?',
        },
        prayer: {
          zh: '主耶稣，你是我们信心的创始成终者。帮助我们定睛仰望你，效法你的榜样，因那摆在前面的喜乐而坚忍到底。阿们。',
          en: 'Lord Jesus, You are the founder and perfecter of our faith. Help us fix our eyes on You, follow Your example, and endure to the end for the joy set before us. Amen.',
        },
      },
    ],
    hymnKeywords: ['信心', '信靠', 'faith', 'trust'],
  },
  {
    id: 'prayer',
    name_zh: '祷告',
    name_en: 'Prayer',
    icon: '🙏',
    devotionals: [
      {
        scripture: {
          ref_zh: '腓立比书 4:6-7',
          ref_en: 'Philippians 4:6–7',
          text_zh: '应当一无挂虑，只要凡事借着祷告、祈求和感谢，将你们所要的告诉神。神所赐出人意外的平安，必在基督耶稣里保守你们的心怀意念。',
          text_en: 'Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God. And the peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus.',
        },
        reflection: {
          zh: '保罗告诉我们对付忧虑的秘诀：祷告。"一无挂虑"不是靠意志力，而是靠祷告把一切交给神。当我们借着祷告、祈求和感谢将事情告诉神，他"出人意外的平安"就保守我们。',
          en: 'Paul tells us the secret to overcoming anxiety: prayer. "Do not be anxious" is not achieved by willpower, but by surrendering everything to God in prayer. When we bring our requests with thanksgiving, His peace "which surpasses all understanding" guards us.',
        },
        question: {
          zh: '保罗说"应当一无挂虑"，但我们常常做不到。你最近有什么挂虑？你愿意在祷告中把它交给神吗？',
          en: 'Paul says "do not be anxious about anything," but we often struggle with this. What are you anxious about lately? Are you willing to hand it to God in prayer?',
        },
        prayer: {
          zh: '天父，我们把所有的挂虑都交给你。求你赐给我们出人意外的平安，在基督耶稣里保守我们的心怀意念。帮助我们凡事祷告，不再忧虑。阿们。',
          en: 'Heavenly Father, we lay all our anxieties before You. Grant us the peace that surpasses all understanding, guarding our hearts and minds in Christ Jesus. Help us pray about everything and worry about nothing. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '帖撒罗尼迦前书 5:17',
          ref_en: '1 Thessalonians 5:17',
          text_zh: '不住地祷告。',
          text_en: 'Pray without ceasing.',
        },
        reflection: {
          zh: '"不住地祷告"——这三个字虽短，却意义深远。祷告是属灵的呼吸，正如身体不能停止呼吸，我们的灵也需要不住地与神交通。这不是说每分钟都跪着祷告，而是随时保持与神对话的心态。',
          en: '"Pray without ceasing" — these few words are short but profound. Prayer is spiritual breathing; just as the body cannot stop breathing, our spirit needs constant communion with God. This doesn\'t mean kneeling every minute, but maintaining a constant attitude of conversation with God.',
        },
        question: {
          zh: '"不住地祷告"在实际生活中是什么样子的？你觉得怎样才能在忙碌中也保持与神的交通？',
          en: 'What does "pray without ceasing" look like in daily life? How can you maintain communion with God even when busy?',
        },
        prayer: {
          zh: '主啊，教导我们不住地祷告。帮助我们无论在家、在学校、在工作中，都保持与你交通的心。愿祷告成为我们的呼吸。阿们。',
          en: 'Lord, teach us to pray without ceasing. Help us maintain communion with You at home, at school, at work — wherever we are. May prayer become our very breath. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '马太福音 6:9-13',
          ref_en: 'Matthew 6:9–13',
          text_zh: '所以，你们祷告要这样说：我们在天上的父，愿人都尊你的名为圣。愿你的国降临。愿你的旨意行在地上，如同行在天上。我们日用的饮食，今日赐给我们。免我们的债，如同我们免了人的债。不叫我们遇见试探，救我们脱离凶恶。因为国度、权柄、荣耀，全是你的，直到永远。阿们。',
          text_en: 'Pray then like this: "Our Father in heaven, hallowed be your name. Your kingdom come, your will be done, on earth as it is in heaven. Give us this day our daily bread, and forgive us our debts, as we also have forgiven our debtors. And lead us not into temptation, but deliver us from evil."',
        },
        reflection: {
          zh: '主祷文教导我们先求神的国和神的义——"愿你的名为圣、愿你的国降临、愿你的旨意成就"，然后才为自己的需要祈求。这提醒我们祷告的优先次序：先仰望神，再带出我们的需要。',
          en: 'The Lord\'s Prayer teaches us to seek God\'s kingdom first — "hallowed be your name, your kingdom come, your will be done" — before praying for our own needs. This reminds us of the right priority in prayer: look up to God first, then bring our needs.',
        },
        question: {
          zh: '主祷文的哪一句对你最有意义？为什么？你觉得耶稣为什么先教我们求"愿你的国降临"而不是先求自己的需要？',
          en: 'Which part of the Lord\'s Prayer is most meaningful to you? Why? Why do you think Jesus teaches us to pray "Your kingdom come" before our own needs?',
        },
        prayer: {
          zh: '我们在天上的父，愿人都尊你的名为圣。愿你的国降临在我们家中。愿你的旨意行在我们生活中，如同行在天上。赐给我们今日所需，帮助我们彼此饶恕。阿们。',
          en: 'Our Father in heaven, hallowed be Your name. May Your kingdom come in our home. May Your will be done in our lives, as it is in heaven. Give us what we need today and help us forgive one another. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '雅各书 5:16',
          ref_en: 'James 5:16',
          text_zh: '所以你们要彼此认罪，互相代求，使你们可以得医治。义人祈祷所发的力量是大有功效的。',
          text_en: 'Therefore, confess your sins to one another and pray for one another, that you may be healed. The prayer of a righteous person has great power as it is working.',
        },
        reflection: {
          zh: '雅各提醒我们祷告的两个重要层面：彼此认罪和互相代求。家庭是最好的操练场——当我们坦诚地在家人面前认罪并彼此代祷时，医治和恢复就临到。"义人祈祷所发的力量是大有功效的"——这激励我们要殷勤祷告。',
          en: 'James reminds us of two important aspects of prayer: confessing sins to one another and praying for each other. The family is the best place to practice this. When we honestly confess before family and pray for one another, healing comes. "The prayer of a righteous person has great power" — this motivates us to pray diligently.',
        },
        question: {
          zh: '雅各说"义人祈祷所发的力量是大有功效的"。你有没有见证过祷告带来的大能？可以分享一下吗？',
          en: 'James says "the prayer of a righteous person has great power." Have you witnessed the power of prayer? Can you share an experience?',
        },
        prayer: {
          zh: '天父，帮助我们成为彼此认罪、互相代求的家庭。感谢你应许义人的祷告大有功效。求你使我们的祷告生活更加火热。阿们。',
          en: 'Father, help us be a family that confesses sins to one another and prays for each other. Thank You for promising that the prayer of the righteous has great power. Make our prayer lives more fervent. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '耶利米书 33:3',
          ref_en: 'Jeremiah 33:3',
          text_zh: '你求告我，我就应允你，并将你所不知道、又大又难的事指示你。',
          text_en: 'Call to me and I will answer you, and will tell you great and hidden things that you have not known.',
        },
        reflection: {
          zh: '神亲自邀请我们"求告他"，并且应许他必应允，还要指示我们"又大又难的事"。这是何等美好的应许！我们的神不是遥远沉默的神，而是乐意回应我们祷告、启示奥秘事的神。',
          en: 'God Himself invites us to "call to Him" and promises He will answer, even revealing "great and hidden things." What a wonderful promise! Our God is not distant or silent, but one who delights in answering prayer and revealing mysteries.',
        },
        question: {
          zh: '神说"你求告我，我就应允你"。你觉得神的"应允"一定是照我们想要的方式吗？神怎样回应你的祷告？',
          en: 'God says "Call to me and I will answer you." Do you think God always answers the way we want? How has God responded to your prayers?',
        },
        prayer: {
          zh: '主啊，感谢你邀请我们求告你、并且应许必要应允。求你向我们显明又大又难的事，开我们的眼睛看见你的作为。阿们。',
          en: 'Lord, thank You for inviting us to call on You and promising to answer. Reveal to us great and hidden things; open our eyes to see Your mighty works. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '约翰福音 15:7',
          ref_en: 'John 15:7',
          text_zh: '你们若常在我里面，我的话也常在你们里面；凡你们所愿意的，祈求就给你们成就。',
          text_en: 'If you abide in me, and my words abide in you, ask whatever you wish, and it will be done for you.',
        },
        reflection: {
          zh: '耶稣的应许有一个条件："常在我里面，我的话也常在你们里面"。当我们与基督有亲密的关系、被他的话语充满时，我们的愿望就会渐渐与神的旨意对齐，祷告自然就蒙应允。',
          en: 'Jesus\' promise has a condition: "abide in me, and my words abide in you." When we have an intimate relationship with Christ and are filled with His Word, our desires gradually align with God\'s will, and our prayers are naturally answered.',
        },
        question: {
          zh: '耶稣说"你们若常在我里面"才能祈求得着。你觉得"常在基督里面"是什么意思？我们怎样才能更多地住在基督里？',
          en: 'Jesus says "if you abide in me" then you can ask and receive. What does "abiding in Christ" mean to you? How can we abide in Him more?',
        },
        prayer: {
          zh: '主耶稣，帮助我们常在你里面，让你的话也常在我们里面。愿我们的心愿与你的旨意对齐，使我们的祷告蒙你喜悦和成就。阿们。',
          en: 'Lord Jesus, help us abide in You and let Your words abide in us. May our desires align with Your will, so our prayers please You and are fulfilled. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '罗马书 8:26',
          ref_en: 'Romans 8:26',
          text_zh: '况且，我们的软弱有圣灵帮助；我们本不晓得当怎样祷告，只是圣灵亲自用说不出来的叹息替我们祷告。',
          text_en: 'Likewise the Spirit helps us in our weakness. For we do not know what to pray for as we ought, but the Spirit himself intercedes for us with groanings too deep for words.',
        },
        reflection: {
          zh: '即使我们不知道如何祷告，圣灵也会帮助我们。多么安慰！我们不需要担心祷告的话语不够完美——圣灵亲自用说不出来的叹息替我们在父面前代求。',
          en: 'Even when we don\'t know how to pray, the Holy Spirit helps us. How comforting! We don\'t need to worry about having the perfect words — the Spirit Himself intercedes for us with groanings too deep for words before the Father.',
        },
        question: {
          zh: '经文说我们"不晓得当怎样祷告"，但圣灵会帮助我们。你在祷告中有没有经历过"说不出话"的时刻？那时候你怎么做的？',
          en: 'The verse says we "do not know what to pray for," but the Spirit helps us. Have you experienced moments when you couldn\'t find words in prayer? What did you do?',
        },
        prayer: {
          zh: '圣灵，感谢你在我们软弱时帮助我们祷告。当我们不知道如何开口时，求你用说不出来的叹息替我们代求。阿们。',
          en: 'Holy Spirit, thank You for helping us pray in our weakness. When we cannot find the words, intercede for us with groanings too deep for words. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '诗篇 145:18',
          ref_en: 'Psalm 145:18',
          text_zh: '凡求告耶和华的，就是诚心求告他的，耶和华便与他们相近。',
          text_en: 'The Lord is near to all who call on him, to all who call on him in truth.',
        },
        reflection: {
          zh: '诗人告诉我们一个美好的真理：神与求告他的人相近。条件只有一个——"诚心"。不需要华丽的措辞、不需要特别的地点、不需要完美的姿势，只要诚心呼求，神就在我们身边。',
          en: 'The psalmist tells us a beautiful truth: the Lord is near to all who call on Him. The only condition is "in truth." No fancy words, special location, or perfect posture needed — just call on Him sincerely, and He is near.',
        },
        question: {
          zh: '诗篇说"诚心求告他的，耶和华便与他们相近"。你在祷告中有没有特别感受到神同在的时刻？',
          en: 'The Psalm says "The Lord is near to all who call on him in truth." Have you had moments in prayer when you especially felt God\'s presence?',
        },
        prayer: {
          zh: '耶和华我们的神，感谢你与诚心求告你的人相近。求你帮助我们以诚实的心来到你面前，享受你亲密的同在。阿们。',
          en: 'Lord our God, thank You for being near to all who call on You in truth. Help us come before You with honest hearts and enjoy Your intimate presence. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '马太福音 7:7',
          ref_en: 'Matthew 7:7',
          text_zh: '你们祈求，就给你们；寻找，就寻见；叩门，就给你们开门。',
          text_en: 'Ask, and it will be given to you; seek, and you will find; knock, and it will be opened to you.',
        },
        reflection: {
          zh: '耶稣用三个递进的动词——祈求、寻找、叩门——鼓励我们在祷告中要恒切。每一个动作都比前一个更加积极主动，表明神喜悦我们殷勤、持久、热切地祷告。',
          en: 'Jesus uses three progressive verbs — ask, seek, knock — to encourage persistence in prayer. Each action is more active than the last, showing that God delights in our diligent, persistent, and fervent prayer.',
        },
        question: {
          zh: '耶稣说"祈求就给你们，寻找就寻见，叩门就给你们开门"。你觉得这三个层次有什么不同？我们家可以一起为哪些事情"叩门"？',
          en: 'Jesus says "ask… seek… knock." What do you think is the difference between these three levels? What can our family "knock" on the door together for?',
        },
        prayer: {
          zh: '主耶稣，感谢你鼓励我们祈求、寻找、叩门。帮助我们不灰心、不放弃，坚持祷告直到看见你的回应。阿们。',
          en: 'Lord Jesus, thank You for encouraging us to ask, seek, and knock. Help us not lose heart or give up, but persist in prayer until we see Your answer. Amen.',
        },
      },
    ],
    hymnKeywords: ['祷告', '祈求', 'prayer', 'pray'],
  },
  {
    id: 'gratitude',
    name_zh: '感恩',
    name_en: 'Gratitude',
    icon: '🌻',
    devotionals: [
      {
        scripture: {
          ref_zh: '帖撒罗尼迦前书 5:18',
          ref_en: '1 Thessalonians 5:18',
          text_zh: '凡事谢恩，因为这是神在基督耶稣里向你们所定的旨意。',
          text_en: 'Give thanks in all circumstances; for this is the will of God in Christ Jesus for you.',
        },
        reflection: {
          zh: '神命令我们"凡事谢恩"——不是为所有事谢恩，而是在所有环境中谢恩。这是神在基督耶稣里向我们所定的旨意。即使在困难中，我们仍然可以感恩，因为神掌管一切。',
          en: 'God commands us to "give thanks in all circumstances" — not for everything, but in every situation. This is God\'s will for us in Christ Jesus. Even in difficulty, we can give thanks because God is sovereign over all.',
        },
        question: {
          zh: '经文说"凡事谢恩"是神的旨意。在困难中感恩为什么这么难？我们可以怎样操练？',
          en: 'The verse says giving thanks in all circumstances is God\'s will. Why is it so hard to be thankful during hardship? How can we practice it?',
        },
        prayer: {
          zh: '天父，你的旨意是让我们凡事谢恩。求你帮助我们即使在困难中也能感恩，因为你掌管一切。奉耶稣的名祷告，阿们。',
          en: 'Heavenly Father, Your will is that we give thanks in all circumstances. Help us be thankful even in difficulty, for You are sovereign over all. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '诗篇 100:4',
          ref_en: 'Psalm 100:4',
          text_zh: '当称谢进入他的门，当赞美进入他的院；当感谢他，称颂他的名。',
          text_en: 'Enter his gates with thanksgiving, and his courts with praise! Give thanks to him; bless his name!',
        },
        reflection: {
          zh: '诗人教导我们来到神面前的方式——带着感谢和赞美。感恩是敬拜的大门，当我们用感谢的心进入神的同在时，我们的心就预备好领受他更多的恩典。',
          en: 'The psalmist teaches us how to approach God — with thanksgiving and praise. Gratitude is the gateway to worship; when we enter God\'s presence with thankful hearts, we are prepared to receive more of His grace.',
        },
        question: {
          zh: '诗篇说要"称谢进入他的门，赞美进入他的院"。你在敬拜前会先数算恩典吗？试着说出今天三件感恩的事。',
          en: 'The Psalm says to "enter his gates with thanksgiving." Do you count your blessings before worship? Try naming three things you\'re thankful for today.',
        },
        prayer: {
          zh: '主啊，我们带着感谢进入你的门，带着赞美进入你的院。我们感谢你、称颂你的名，因为你本为善。阿们。',
          en: 'Lord, we enter Your gates with thanksgiving and Your courts with praise. We give thanks to You and bless Your name, for You are good. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '诗篇 107:1',
          ref_en: 'Psalm 107:1',
          text_zh: '你们要称谢耶和华，因他本为善，他的慈爱永远长存。',
          text_en: 'Oh give thanks to the Lord, for he is good, for his steadfast love endures forever!',
        },
        reflection: {
          zh: '感恩的根基不是我们的环境好不好，而是神"本为善"。他的慈爱"永远长存"——昨天、今天、明天都一样。当我们记住神的本性，感恩就自然涌流。',
          en: 'The foundation of gratitude is not whether our circumstances are good, but that God "is good." His steadfast love "endures forever" — yesterday, today, and tomorrow. When we remember God\'s nature, thankfulness flows naturally.',
        },
        question: {
          zh: '"他的慈爱永远长存"——你能分享一个你经历到神不变慈爱的故事吗？',
          en: '"His steadfast love endures forever" — can you share a story of experiencing God\'s unchanging love?',
        },
        prayer: {
          zh: '耶和华啊，你本为善，你的慈爱永远长存！我们要称谢你，因为你的恩典从不断绝。阿们。',
          en: 'O Lord, You are good, and Your steadfast love endures forever! We give You thanks, for Your grace never ceases. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '歌罗西书 3:15',
          ref_en: 'Colossians 3:15',
          text_zh: '又要叫基督的平安在你们心里作主，你们也为此蒙召，归为一体；且要存感谢的心。',
          text_en: 'And let the peace of Christ rule in your hearts, to which indeed you were called in one body. And be thankful.',
        },
        reflection: {
          zh: '保罗把"基督的平安"和"感谢的心"连在一起。当基督的平安在我们心中作主时，感恩就是自然的回应。感恩的心能抵抗苦毒、嫉妒和不满。',
          en: 'Paul connects "the peace of Christ" with being thankful. When Christ\'s peace rules in our hearts, gratitude is the natural response. A grateful heart fights bitterness, envy, and discontent.',
        },
        question: {
          zh: '保罗说让基督的平安在心里"作主"，并且要存感谢的心。当你心中缺乏平安的时候，感恩会怎样帮助你？',
          en: 'Paul says to let Christ\'s peace "rule" in your hearts and be thankful. When you lack peace, how does gratitude help you?',
        },
        prayer: {
          zh: '主耶稣，求你的平安在我们心里作主。帮助我们存感谢的心，在一切事上经历你的平安。阿们。',
          en: 'Lord Jesus, let Your peace rule in our hearts. Help us be thankful and experience Your peace in all things. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '诗篇 136:1',
          ref_en: 'Psalm 136:1',
          text_zh: '你们要称谢耶和华，因他本为善，他的慈爱永远长存。',
          text_en: 'Give thanks to the Lord, for he is good, for his steadfast love endures forever.',
        },
        reflection: {
          zh: '诗篇136篇每一节都重复"他的慈爱永远长存"——共26次。这种重复不是啰嗦，而是在帮助我们把感恩刻在心上。反复数算恩典，是建立感恩习惯的好方法。',
          en: 'Psalm 136 repeats "his steadfast love endures forever" in every verse — 26 times. This repetition is not redundancy but helps engrave gratitude in our hearts. Repeatedly counting blessings is a great way to build a habit of thankfulness.',
        },
        question: {
          zh: '诗篇136篇重复了26次"他的慈爱永远长存"。你能效法这个模式，说出几件事然后加上"因他的慈爱永远长存"吗？',
          en: 'Psalm 136 repeats "his steadfast love endures forever" 26 times. Can you follow this pattern and name a few blessings followed by "for his steadfast love endures forever"?',
        },
        prayer: {
          zh: '天父，你的慈爱永远长存！感谢你赐给我们生命——因你的慈爱永远长存。感谢你赐给我们家人——因你的慈爱永远长存。感谢你赐给我们救恩——因你的慈爱永远长存。阿们。',
          en: 'Father, Your steadfast love endures forever! Thank You for life — for Your steadfast love endures forever. Thank You for family — for Your steadfast love endures forever. Thank You for salvation — for Your steadfast love endures forever. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '歌罗西书 3:17',
          ref_en: 'Colossians 3:17',
          text_zh: '无论做什么，或说话、或行事，都要奉主耶稣的名，借着他感谢父神。',
          text_en: 'And whatever you do, in word or deed, do everything in the name of the Lord Jesus, giving thanks to God the Father through him.',
        },
        reflection: {
          zh: '"无论做什么"——感恩不只是在特别的时刻，而是贯穿生活的每一个层面。无论说话还是行事，都可以成为感恩的机会。这意味着感恩是一种生活态度，而不仅是偶尔的表达。',
          en: '"Whatever you do" — gratitude is not just for special moments, but permeates every aspect of life. Whether in word or deed, everything can become an occasion for thanks. Gratitude is a way of life, not just an occasional expression.',
        },
        question: {
          zh: '保罗说无论做什么都要"借着基督感谢父神"。你今天做的哪些事可以成为感恩的机会？',
          en: 'Paul says whatever you do, give thanks to God through Christ. Which things you did today can become opportunities for gratitude?',
        },
        prayer: {
          zh: '天父，帮助我们无论做什么——说话或行事——都奉主耶稣的名，借着他感谢你。愿感恩成为我们生活的态度。阿们。',
          en: 'Father, help us in whatever we do — in word or deed — to do it in the name of the Lord Jesus, giving thanks to You through Him. May gratitude become our way of life. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '诗篇 103:2',
          ref_en: 'Psalm 103:2',
          text_zh: '我的心哪，你要称颂耶和华！不可忘记他的一切恩惠。',
          text_en: 'Bless the Lord, O my soul, and forget not all his benefits.',
        },
        reflection: {
          zh: '大卫对自己的灵魂说话："不可忘记他的一切恩惠"。我们很容易忘记神的恩典，所以需要刻意提醒自己。每天花几分钟回顾神的恩典，是建立感恩习惯的好方法。',
          en: 'David speaks to his own soul: "forget not all his benefits." We easily forget God\'s grace, so we need to intentionally remind ourselves. Spending a few minutes each day reviewing God\'s blessings is a great way to build a habit of gratitude.',
        },
        question: {
          zh: '大卫说"不可忘记他的一切恩惠"。你觉得我们最容易忘记哪些恩典？怎样才能更好地记住？',
          en: 'David says "forget not all his benefits." What blessings are we most likely to forget? How can we remember them better?',
        },
        prayer: {
          zh: '我的心哪，要称颂耶和华！天父，帮助我们不忘记你的一切恩惠。求你赐给我们感恩的眼睛，看见每天生活中你丰富的恩典。阿们。',
          en: 'Bless the Lord, O my soul! Father, help us forget not all Your benefits. Give us eyes of gratitude to see Your abundant grace in our daily lives. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '腓立比书 4:6',
          ref_en: 'Philippians 4:6',
          text_zh: '应当一无挂虑，只要凡事借着祷告、祈求和感谢，将你们所要的告诉神。',
          text_en: 'Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God.',
        },
        reflection: {
          zh: '注意保罗把"感谢"与"祷告、祈求"放在一起。感恩不是在祷告蒙应允之后才有的，而是在祈求的同时就带着感恩。当我们一边求一边谢，忧虑就退去，信心就增长。',
          en: 'Notice Paul places "thanksgiving" alongside "prayer and supplication." Gratitude doesn\'t come only after prayers are answered — it accompanies our requests. When we ask and thank at the same time, anxiety retreats and faith grows.',
        },
        question: {
          zh: '保罗说祷告时要带着"感谢"。你平时祷告时，祈求多还是感谢多？怎样能在祈求中也加入感恩？',
          en: 'Paul says to pray "with thanksgiving." When you pray, do you ask more or thank more? How can you include gratitude in your requests?',
        },
        prayer: {
          zh: '天父，我们不要挂虑，而是凡事借着祷告、祈求和感谢来到你面前。感谢你过去的信实，我们也信靠你未来的供应。阿们。',
          en: 'Father, we choose not to be anxious, but to come before You in prayer, supplication, and thanksgiving. Thank You for Your past faithfulness; we trust You for the future. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '诗篇 95:2',
          ref_en: 'Psalm 95:2',
          text_zh: '我们要来感谢他，用诗歌向他欢呼。',
          text_en: 'Let us come into his presence with thanksgiving; let us make a joyful noise to him with songs of praise!',
        },
        reflection: {
          zh: '诗人邀请我们"用诗歌向他欢呼"——感恩不只是安静的内心活动，也可以是大声歌唱、欢呼赞美。一家人一起唱诗赞美神，是表达感恩的美好方式。',
          en: 'The psalmist invites us to "make a joyful noise with songs of praise" — gratitude is not just a quiet inner activity, but can also be loud singing and joyful praise. Singing together as a family is a wonderful way to express thankfulness.',
        },
        question: {
          zh: '诗篇邀请我们"用诗歌向神欢呼"。你最喜欢的一首感恩诗歌是什么？为什么？',
          en: 'The Psalm invites us to "make a joyful noise with songs of praise." What is your favorite hymn of thanksgiving? Why?',
        },
        prayer: {
          zh: '主啊，我们要来感谢你，用诗歌向你欢呼！愿我们的家充满赞美和感恩的声音。阿们。',
          en: 'Lord, we come into Your presence with thanksgiving and make a joyful noise to You with songs of praise! May our home be filled with sounds of praise and gratitude. Amen.',
        },
      },
    ],
    hymnKeywords: ['感恩', '称谢', 'thanks', 'grateful'],
  },
  {
    id: 'gods-love',
    name_zh: '神的爱',
    name_en: "God's Love",
    icon: '❤️',
    devotionals: [
      {
        scripture: {
          ref_zh: '约翰福音 3:16',
          ref_en: 'John 3:16',
          text_zh: '神爱世人，甚至将他的独生子赐给他们，叫一切信他的，不至灭亡，反得永生。',
          text_en: 'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
        },
        reflection: {
          zh: '这可能是圣经中最著名的一节经文。"甚至"这个词显出神的爱的极致——他把最宝贵的独生子赐给我们。神的爱不是空洞的口号，而是以基督的十字架为代价的实际行动。',
          en: 'This is perhaps the most famous verse in the Bible. The word "so" reveals the extremity of God\'s love — He gave His most precious only Son. God\'s love is not an empty slogan, but an action that cost the cross of Christ.',
        },
        question: {
          zh: '约翰福音3:16说神"甚至将他的独生子赐给"我们。你认为这节经文中哪个词最打动你？为什么？',
          en: 'John 3:16 says God "gave his only Son." Which word in this verse strikes you the most? Why?',
        },
        prayer: {
          zh: '天父，感谢你爱世人，甚至将你的独生子赐给我们，叫我们不至灭亡，反得永生。这是何等的大爱！帮助我们每天活在这爱中。阿们。',
          en: 'Heavenly Father, thank You for so loving the world that You gave Your only Son, that we may not perish but have eternal life. What great love! Help us live in this love daily. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '罗马书 8:38-39',
          ref_en: 'Romans 8:38–39',
          text_zh: '因为我深信无论是死，是生，是天使，是掌权的，是有能的，是现在的事，是将来的事，是高处的，是低处的，是别的受造之物，都不能叫我们与神的爱隔绝；这爱是在我们的主基督耶稣里的。',
          text_en: 'For I am sure that neither death nor life, nor angels nor rulers, nor things present nor things to come, nor powers, nor height nor depth, nor anything else in all creation, will be able to separate us from the love of God in Christ Jesus our Lord.',
        },
        reflection: {
          zh: '保罗列出了一切可能威胁我们的力量——死、生、天使、掌权的、现在的事、将来的事——没有任何一样能使我们与神的爱隔绝！这是何等大的安慰。无论我们经历什么，神的爱永不改变。',
          en: 'Paul lists every force that could threaten us — death, life, angels, rulers, things present, things to come — and none of them can separate us from God\'s love! What great comfort. No matter what we face, God\'s love never changes.',
        },
        question: {
          zh: '保罗列出了许多不能使我们与神的爱隔绝的事物。你生活中有什么事曾让你觉得与神的爱隔绝了？这节经文如何安慰你？',
          en: 'Paul lists many things that cannot separate us from God\'s love. Has anything in your life made you feel separated from God\'s love? How does this verse comfort you?',
        },
        prayer: {
          zh: '天父，感谢你！无论是死是生、是现在的事还是将来的事，都不能使我们与你的爱隔绝。帮助我们安息在这不可动摇的爱中。阿们。',
          en: 'Father, thank You! Neither death nor life, neither present nor future, can separate us from Your love. Help us rest in this unshakable love. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '约翰一书 4:19',
          ref_en: '1 John 4:19',
          text_zh: '我们爱，因为神先爱我们。',
          text_en: 'We love because he first loved us.',
        },
        reflection: {
          zh: '这简短的一句话揭示了爱的源头：我们能爱人，是因为神先爱了我们。神的爱是一切爱的起点和动力。我们不需要等到自己"学会爱"才去爱——只需要领受神的爱，然后自然地流出。',
          en: 'This short verse reveals the source of love: we can love because God first loved us. God\'s love is the starting point and motivation of all love. We don\'t need to "learn to love" first — just receive God\'s love and let it flow naturally.',
        },
        question: {
          zh: '"我们爱，因为神先爱我们。"这句话如何影响你对家人的爱？你今天可以用什么具体方式向家人表达爱？',
          en: '"We love because he first loved us." How does this change how you love your family? What specific way can you show love to your family today?',
        },
        prayer: {
          zh: '天父，感谢你先爱了我们。因着你的爱，我们也能彼此相爱。帮助我们把从你领受的爱传递给身边的人。阿们。',
          en: 'Father, thank You for loving us first. Because of Your love, we can love one another. Help us pass on the love we receive from You to those around us. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '约翰一书 4:9-10',
          ref_en: '1 John 4:9–10',
          text_zh: '神差他独生子到世间来，使我们借着他得生，神爱我们的心在此就显明了。不是我们爱神，乃是神爱我们，差他的儿子为我们的罪作了挽回祭，这就是爱了。',
          text_en: 'In this the love of God was made manifest among us, that God sent his only Son into the world, so that we might live through him. In this is love, not that we have loved God but that he loved us and sent his Son to be the propitiation for our sins.',
        },
        reflection: {
          zh: '神的爱不是抽象的概念——它通过差遣独生子"具体地显明"出来。爱的定义不是我们怎样爱神，而是神怎样先爱了我们：差遣他的儿子为我们的罪作了挽回祭。这是爱的最高定义。',
          en: 'God\'s love is not abstract — it was "made manifest" concretely by sending His only Son. Love is defined not by how we love God, but by how God first loved us: sending His Son as the propitiation for our sins. This is the ultimate definition of love.',
        },
        question: {
          zh: '经文说"不是我们爱神，乃是神爱我们"。神的爱和人的爱有什么不同？',
          en: 'The verse says "not that we have loved God but that he loved us." How is God\'s love different from human love?',
        },
        prayer: {
          zh: '天父，你的爱在此就显明了——你差遣你的独生子为我们的罪作了挽回祭。这就是爱。帮助我们永远不忘记这恩典。阿们。',
          en: 'Father, Your love was made manifest — You sent Your only Son to be the propitiation for our sins. This is love. Help us never forget this grace. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '罗马书 5:8',
          ref_en: 'Romans 5:8',
          text_zh: '惟有基督在我们还作罪人的时候为我们死，神的爱就在此向我们显明了。',
          text_en: 'But God shows his love for us in that while we were still sinners, Christ died for us.',
        },
        reflection: {
          zh: '神的爱不是因为我们可爱才爱我们——"在我们还作罪人的时候"基督就为我们死了。这意味着神的爱不取决于我们的表现，而取决于他的本性。他就是爱。',
          en: 'God\'s love is not because we are lovable — "while we were still sinners" Christ died for us. This means God\'s love does not depend on our performance, but on His nature. He is love.',
        },
        question: {
          zh: '经文说基督"在我们还作罪人的时候"为我们死。这种无条件的爱对你的生活有什么影响？',
          en: 'The verse says Christ died for us "while we were still sinners." How does this unconditional love impact your life?',
        },
        prayer: {
          zh: '天父，当我们还作罪人的时候，你就差基督为我们而死。你的爱不取决于我们的好坏，而是出于你的本性。感谢你这不可测度的爱。阿们。',
          en: 'Father, while we were still sinners, You sent Christ to die for us. Your love doesn\'t depend on our goodness, but on Your nature. Thank You for this immeasurable love. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '以弗所书 2:4-5',
          ref_en: 'Ephesians 2:4–5',
          text_zh: '然而神既有丰富的怜悯，因他爱我们的大爱，当我们死在过犯中的时候，便叫我们与基督一同活过来（你们得救是本乎恩）。',
          text_en: 'But God, being rich in mercy, because of the great love with which he loved us, even when we were dead in our trespasses, made us alive together with Christ—by grace you have been saved.',
        },
        reflection: {
          zh: '"然而神"——这两个字改变了一切。我们死在过犯中，本无盼望，"然而神"因他丰富的怜悯和大爱，叫我们与基督一同活过来。从死到活的改变，完全是恩典。',
          en: '"But God" — these two words change everything. We were dead in trespasses with no hope, "but God," because of His rich mercy and great love, made us alive with Christ. The change from death to life is entirely by grace.',
        },
        question: {
          zh: '经文说我们"死在过犯中"的时候，神让我们"与基督一同活过来"。你的生命中有没有经历过从"死"到"活"的改变？',
          en: 'The verse says when we were "dead in trespasses," God "made us alive together with Christ." Have you experienced a change from "death" to "life"?',
        },
        prayer: {
          zh: '天父，感谢你丰富的怜悯和大爱。当我们死在过犯中时，你叫我们与基督一同活过来。这完全是你的恩典。阿们。',
          en: 'Father, thank You for Your rich mercy and great love. When we were dead in trespasses, You made us alive with Christ. This is entirely by Your grace. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '耶利米书 31:3',
          ref_en: 'Jeremiah 31:3',
          text_zh: '古时耶和华向以色列显现，说："我以永远的爱爱你，因此我以慈爱吸引你。"',
          text_en: 'The Lord appeared to him from far away. I have loved you with an everlasting love; therefore I have continued my faithfulness to you.',
        },
        reflection: {
          zh: '神的爱是"永远的爱"——没有开始，没有结束，不会因为我们的表现而增减。他"以慈爱吸引"我们，不是用恐惧，不是用强迫，而是用温柔的爱。',
          en: 'God\'s love is "everlasting" — it has no beginning and no end, and doesn\'t increase or decrease based on our performance. He draws us with "faithfulness," not fear or coercion, but gentle love.',
        },
        question: {
          zh: '神说"我以永远的爱爱你"。"永远的爱"和我们日常经历的人间之爱有什么不同？',
          en: 'God says "I have loved you with an everlasting love." How is "everlasting love" different from the human love we experience daily?',
        },
        prayer: {
          zh: '主啊，感谢你以永远的爱爱我们，以慈爱吸引我们。你的爱没有尽头。帮助我们安息在你永恒不变的爱中。阿们。',
          en: 'Lord, thank You for loving us with an everlasting love and drawing us with faithfulness. Your love has no end. Help us rest in Your eternal, unchanging love. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '诗篇 103:11',
          ref_en: 'Psalm 103:11',
          text_zh: '天离地何等的高，他的慈爱向敬畏他的人也是何等的大。',
          text_en: 'For as high as the heavens are above the earth, so great is his steadfast love toward those who fear him.',
        },
        reflection: {
          zh: '大卫用天和地之间无法测量的距离来形容神慈爱的广大。我们永远无法测量神的爱有多大——它超过我们所能想象的。这份爱是给"敬畏他的人"的。',
          en: 'David uses the immeasurable distance between heaven and earth to describe the vastness of God\'s love. We can never measure how great God\'s love is — it surpasses all imagination. This love is for "those who fear him."',
        },
        question: {
          zh: '"天离地何等的高，他的慈爱也何等的大。"你曾在什么时刻特别感受到神的慈爱比天还高？',
          en: '"As high as the heavens are above the earth, so great is his steadfast love." When have you especially felt God\'s love is higher than the heavens?',
        },
        prayer: {
          zh: '天父，你的慈爱比天还高！我们虽然渺小，你的爱却广大无边。帮助我们敬畏你，也享受你何等大的慈爱。阿们。',
          en: 'Father, Your steadfast love is higher than the heavens! Though we are small, Your love is vast beyond measure. Help us fear You and enjoy Your great steadfast love. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '西番雅书 3:17',
          ref_en: 'Zephaniah 3:17',
          text_zh: '耶和华你的神是施行拯救、大有能力的主。他在你中间必因你欢欣喜乐，默然爱你，且因你喜乐而欢呼。',
          text_en: 'The Lord your God is in your midst, a mighty one who will save; he will rejoice over you with gladness; he will quiet you by his love; he will exult over you with loud singing.',
        },
        reflection: {
          zh: '这是圣经中最温柔的画面之一：全能的神因我们"欢欣喜乐"，他"默然爱"我们（如同母亲抱着孩子安静的爱），并"因你喜乐而欢呼"——神竟然为我们歌唱！',
          en: 'This is one of the tenderest images in the Bible: Almighty God "rejoices over you with gladness," He "quiets you by his love" (like a mother silently holding her child), and "exults over you with loud singing" — God sings over us!',
        },
        question: {
          zh: '西番雅书说神会"因你喜乐而欢呼"——神竟然为你歌唱！这让你对神的爱有什么新的认识？',
          en: 'Zephaniah says God "will exult over you with loud singing" — God sings over you! What new understanding of God\'s love does this give you?',
        },
        prayer: {
          zh: '主啊，你不仅爱我们，你还因我们欢欣喜乐、默然爱我们、因我们而欢呼歌唱。这爱何等奇妙！求你用你的爱安静我们的心。阿们。',
          en: 'Lord, You not only love us — You rejoice over us with gladness, quiet us by Your love, and exult over us with singing. What wondrous love! Quiet our hearts with Your love. Amen.',
        },
      },
    ],
    hymnKeywords: ['爱', '慈爱', 'love', 'grace'],
  },
  {
    id: 'holiness',
    name_zh: '圣洁',
    name_en: 'Holiness',
    icon: '✨',
    devotionals: [
      {
        scripture: {
          ref_zh: '彼得前书 1:15-16',
          ref_en: '1 Peter 1:15–16',
          text_zh: '那召你们的既是圣洁，你们在一切所行的事上也要圣洁。因为经上记着说："你们要圣洁，因为我是圣洁的。"',
          text_en: 'But as he who called you is holy, you also be holy in all your conduct, since it is written, "You shall be holy, for I am holy."',
        },
        reflection: {
          zh: '彼得引用利未记的话："你们要圣洁，因为我是圣洁的。"我们追求圣洁的原因不是为了赚取神的爱，而是因为那召我们的神是圣洁的——我们渴望像他。',
          en: 'Peter quotes Leviticus: "You shall be holy, for I am holy." We pursue holiness not to earn God\'s love, but because the God who called us is holy — we desire to be like Him.',
        },
        question: {
          zh: '彼得说要"在一切所行的事上"圣洁。你觉得在哪些日常行为上最需要追求圣洁？',
          en: 'Peter says to be holy "in all your conduct." In which daily behaviors do you most need to pursue holiness?',
        },
        prayer: {
          zh: '天父，你是圣洁的神，你呼召我们在一切所行的事上也要圣洁。帮助我们效法你，在生活的每个层面追求圣洁。阿们。',
          en: 'Heavenly Father, You are holy, and You call us to be holy in all our conduct. Help us imitate You and pursue holiness in every area of life. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '希伯来书 12:14',
          ref_en: 'Hebrews 12:14',
          text_zh: '你们要追求与众人和睦，并要追求圣洁，非圣洁没有人能见主。',
          text_en: 'Strive for peace with everyone, and for the holiness without which no one will see the Lord.',
        },
        reflection: {
          zh: '希伯来书的作者把"和睦"与"圣洁"并列——追求圣洁不是独善其身，也包括与人和睦相处。"非圣洁没有人能见主"——这是严肃的提醒，也是恩典的呼召。',
          en: 'The author of Hebrews places "peace" alongside "holiness" — pursuing holiness is not about isolating ourselves, but also living at peace with others. "Without holiness no one will see the Lord" is both a solemn reminder and a gracious call.',
        },
        question: {
          zh: '经文说"非圣洁没有人能见主"。这句话对你来说是压力还是动力？为什么？',
          en: 'The verse says "without holiness no one will see the Lord." Does this feel like pressure or motivation to you? Why?',
        },
        prayer: {
          zh: '主啊，我们要追求与众人和睦，也追求圣洁，因为非圣洁没有人能见你。求你赐我们渴慕圣洁的心。阿们。',
          en: 'Lord, we strive for peace with everyone and for holiness, for without it no one will see You. Give us hearts that long for holiness. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '帖撒罗尼迦前书 4:7',
          ref_en: '1 Thessalonians 4:7',
          text_zh: '神召我们，本不是要我们沾染污秽，乃是要我们成为圣洁。',
          text_en: 'For God has not called us for impurity, but in holiness.',
        },
        reflection: {
          zh: '保罗清楚地指出神呼召的目的——不是沾染污秽，乃是成为圣洁。在一个不重视圣洁的世代，我们需要记住我们被召的身份和目的。',
          en: 'Paul clearly states God\'s calling — not for impurity, but for holiness. In an age that does not value holiness, we need to remember our identity and purpose as those who are called.',
        },
        question: {
          zh: '保罗说神召我们"成为圣洁"，不是"沾染污秽"。在今天的文化中，你觉得什么是基督徒最需要警醒的"污秽"？',
          en: 'Paul says God called us "in holiness," not "for impurity." In today\'s culture, what "impurities" do you think Christians most need to be vigilant about?',
        },
        prayer: {
          zh: '天父，你召我们不是要沾染污秽，乃是要成为圣洁。帮助我们远离一切不合你心意的事，活出圣洁的生命。阿们。',
          en: 'Father, You called us not for impurity but in holiness. Help us turn from everything that displeases You and live holy lives. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '罗马书 12:1',
          ref_en: 'Romans 12:1',
          text_zh: '所以弟兄们，我以神的慈悲劝你们，将身体献上，当作活祭，是圣洁的，是神所喜悦的，你们如此事奉，乃是理所当然的。',
          text_en: 'I appeal to you therefore, brothers, by the mercies of God, to present your bodies as a living sacrifice, holy and acceptable to God, which is your spiritual worship.',
        },
        reflection: {
          zh: '保罗"以神的慈悲"劝我们——追求圣洁的动力不是恐惧，而是回应神的慈悲。将身体献上当作"活祭"意味着我们每天的生活就是敬拜，而圣洁使这祭物蒙神喜悦。',
          en: 'Paul appeals "by the mercies of God" — the motivation for holiness is not fear but responding to God\'s mercy. Presenting our bodies as "living sacrifices" means our daily lives are worship, and holiness makes this offering pleasing to God.',
        },
        question: {
          zh: '保罗说将身体献上当作"活祭"，是"理所当然"的事奉。你觉得"活祭"在日常生活中是什么样子的？',
          en: 'Paul says presenting our bodies as "living sacrifices" is our "spiritual worship." What does being a "living sacrifice" look like in daily life?',
        },
        prayer: {
          zh: '天父，因你的慈悲，我们愿意将身体献上，当作活祭，是圣洁的、你所喜悦的。这是我们理所当然的事奉。阿们。',
          en: 'Father, by Your mercies, we present our bodies as living sacrifices, holy and acceptable to You, which is our spiritual worship. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '诗篇 51:10',
          ref_en: 'Psalm 51:10',
          text_zh: '神啊，求你为我造清洁的心，使我里面重新有正直的灵。',
          text_en: 'Create in me a clean heart, O God, and renew a right spirit within me.',
        },
        reflection: {
          zh: '大卫犯罪后的祷告——他知道自己无法靠意志力让心变清洁，所以求神"造"清洁的心。圣洁始于内心的更新，这是神的工作，也需要我们诚实地来到他面前。',
          en: 'David\'s prayer after his sin — he knew he couldn\'t make his heart clean by willpower, so he asked God to "create" a clean heart. Holiness begins with inner renewal, which is God\'s work, but requires our honest coming before Him.',
        },
        question: {
          zh: '大卫求神"为我造清洁的心"。你有没有一些内心的挣扎想要交给神，求他更新？',
          en: 'David asks God to "create in me a clean heart." Are there inner struggles you want to give to God and ask Him to renew?',
        },
        prayer: {
          zh: '神啊，求你为我们造清洁的心，使我们里面重新有正直的灵。洁净我们的心思意念，使我们从里到外都讨你喜悦。阿们。',
          en: 'Create in us clean hearts, O God, and renew right spirits within us. Cleanse our thoughts and make us pleasing to You from the inside out. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '哥林多后书 7:1',
          ref_en: '2 Corinthians 7:1',
          text_zh: '亲爱的弟兄啊，我们既有这等应许，就当洁净自己，除去身体、灵魂一切的污秽，敬畏神，得以成圣。',
          text_en: 'Since we have these promises, beloved, let us cleanse ourselves from every defilement of body and spirit, bringing holiness to completion in the fear of God.',
        },
        reflection: {
          zh: '追求圣洁需要主动的行动——"洁净自己"，"除去一切的污秽"。成圣是一生的过程，需要圣灵的帮助，也需要我们"敬畏神"地积极配合。',
          en: 'Pursuing holiness requires active effort — "cleanse ourselves," "from every defilement." Sanctification is a lifelong process that needs the Holy Spirit\'s help and our active cooperation "in the fear of God."',
        },
        question: {
          zh: '经文说要"除去身体、灵魂一切的污秽"。你觉得"身体的污秽"和"灵魂的污秽"分别指什么？',
          en: 'The verse says to cleanse ourselves "from every defilement of body and spirit." What do you think "defilement of body" and "defilement of spirit" refer to?',
        },
        prayer: {
          zh: '主啊，我们既有你美好的应许，就愿意洁净自己，除去一切的污秽。帮助我们在敬畏中得以成圣。阿们。',
          en: 'Lord, since we have Your wonderful promises, we choose to cleanse ourselves from every defilement. Help us bring holiness to completion in the fear of God. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '以赛亚书 6:3',
          ref_en: 'Isaiah 6:3',
          text_zh: '彼此呼喊说："圣哉！圣哉！圣哉！万军之耶和华，他的荣光充满全地！"',
          text_en: 'And one called to another and said: "Holy, holy, holy is the Lord of hosts; the whole earth is full of his glory!"',
        },
        reflection: {
          zh: '天使三次呼喊"圣哉"——神的圣洁是无限的、完全的、超越一切的。以赛亚看见这异象后说"祸哉！我灭亡了！"因为在绝对圣洁面前，我们认识到自己的不洁。但神用坛上的火炭洁净了他。',
          en: 'The angels cry "Holy" three times — God\'s holiness is infinite, perfect, and transcendent. When Isaiah saw this vision, he cried "Woe is me! I am undone!" — in the presence of absolute holiness, we see our own uncleanness. But God cleansed him with a coal from the altar.',
        },
        question: {
          zh: '天使呼喊"圣哉！圣哉！圣哉！"你对神的圣洁有什么感受？是敬畏、害怕、还是渴慕？',
          en: 'The angels cry "Holy, holy, holy!" What do you feel about God\'s holiness? Awe, fear, or longing?',
        },
        prayer: {
          zh: '圣哉！圣哉！圣哉！万军之耶和华，你的荣光充满全地！我们敬拜你，渴望在你的圣洁中更深认识你。阿们。',
          en: 'Holy, holy, holy is the Lord of hosts; the whole earth is full of Your glory! We worship You and long to know You more deeply in Your holiness. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '以弗所书 4:24',
          ref_en: 'Ephesians 4:24',
          text_zh: '并且穿上新人，这新人是照着神的形像造的，有真理的仁义和圣洁。',
          text_en: 'And to put on the new self, created after the likeness of God in true righteousness and holiness.',
        },
        reflection: {
          zh: '"穿上新人"——追求圣洁就像换上新衣服。这新人是"照着神的形像造的"，具有"真理的仁义和圣洁"。在基督里，我们已经是新造的人，现在要活出这个新身份。',
          en: '"Put on the new self" — pursuing holiness is like putting on new clothes. This new self is "created after the likeness of God in true righteousness and holiness." In Christ, we are already new creations; now we must live out this new identity.',
        },
        question: {
          zh: '保罗说要"穿上新人"。你觉得在你生命中，有什么"旧人"的习惯需要脱去，什么"新人"的品格需要穿上？',
          en: 'Paul says to "put on the new self." What "old self" habits do you need to take off, and what "new self" qualities do you need to put on?',
        },
        prayer: {
          zh: '天父，帮助我们脱去旧人，穿上新人——这新人是照着你的形像造的，有真理的仁义和圣洁。阿们。',
          en: 'Father, help us put off the old self and put on the new self, created after Your likeness in true righteousness and holiness. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '马太福音 5:8',
          ref_en: 'Matthew 5:8',
          text_zh: '清心的人有福了，因为他们必得见神。',
          text_en: 'Blessed are the pure in heart, for they shall see God.',
        },
        reflection: {
          zh: '耶稣说"清心的人有福了"——"清心"不只是外在行为的洁净，更是内心动机的纯净。这样的人"必得见神"——圣洁的生命带来与神更亲密的关系和更清晰地看见他。',
          en: 'Jesus says "Blessed are the pure in heart" — purity of heart is not just outward behavior but inner purity of motive. Such people "shall see God" — a holy life brings a more intimate relationship with God and a clearer vision of Him.',
        },
        question: {
          zh: '耶稣说"清心的人有福了，因为他们必得见神"。你觉得"清心"和"见神"之间有什么关系？',
          en: 'Jesus says "Blessed are the pure in heart, for they shall see God." What do you think is the connection between purity of heart and seeing God?',
        },
        prayer: {
          zh: '主耶稣，你说清心的人有福了，因为他们必得见神。求你洁净我们的心，使我们能更清楚地看见你、认识你。阿们。',
          en: 'Lord Jesus, You say blessed are the pure in heart, for they shall see God. Purify our hearts so we may see You and know You more clearly. Amen.',
        },
      },
    ],
    hymnKeywords: ['圣洁', '洁净', 'holy', 'pure'],
  },
  {
    id: 'hope',
    name_zh: '盼望',
    name_en: 'Hope',
    icon: '🌅',
    devotionals: [
      {
        scripture: {
          ref_zh: '罗马书 15:13',
          ref_en: 'Romans 15:13',
          text_zh: '但愿使人有盼望的神，因信将诸般的喜乐、平安充满你们的心，使你们借着圣灵的能力大有盼望。',
          text_en: 'May the God of hope fill you with all joy and peace in believing, so that by the power of the Holy Spirit you may abound in hope.',
        },
        reflection: {
          zh: '保罗称神为"使人有盼望的神"——盼望不是来自我们的乐观，而是来自神自己。他应许"因信"将喜乐和平安充满我们，并借着圣灵的能力使我们"大有盼望"。',
          en: 'Paul calls God "the God of hope" — hope doesn\'t come from our optimism, but from God Himself. He promises to fill us with joy and peace "in believing," and by the Holy Spirit\'s power make us "abound in hope."',
        },
        question: {
          zh: '保罗说神要"因信将喜乐、平安充满你们的心"。你觉得"信"和"喜乐平安"之间有什么关系？',
          en: 'Paul says God fills us with joy and peace "in believing." What is the connection between believing and joy and peace?',
        },
        prayer: {
          zh: '使人有盼望的神啊，求你因信将诸般的喜乐、平安充满我们的心，使我们借着圣灵的能力大有盼望。阿们。',
          en: 'God of hope, fill us with all joy and peace in believing, so that by the power of the Holy Spirit we may abound in hope. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '耶利米书 29:11',
          ref_en: 'Jeremiah 29:11',
          text_zh: '耶和华说：我知道我向你们所怀的意念，是赐平安的意念，不是降灾祸的意念，要叫你们末后有指望。',
          text_en: 'For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope.',
        },
        reflection: {
          zh: '即使以色列民在被掳的困境中，神仍然向他们宣告：我对你们的计划是赐平安、不是降灾祸。这提醒我们：无论我们现在处在什么环境，神对我们的心意始终是好的。',
          en: 'Even when Israel was in exile, God declared: My plans for you are for welfare, not for evil. This reminds us that no matter our current circumstances, God\'s intentions for us are always good.',
        },
        question: {
          zh: '神说"我知道我向你们所怀的意念，是赐平安的意念"。在你觉得前路不明的时候，这节经文给你什么安慰？',
          en: 'God says "I know the plans I have for you, plans for welfare." When the road ahead seems unclear, what comfort does this verse give you?',
        },
        prayer: {
          zh: '天父，感谢你向我们所怀的意念是赐平安的、不是降灾祸的，要叫我们末后有指望。帮助我们信靠你的美好计划。阿们。',
          en: 'Father, thank You that Your plans for us are for welfare and not for evil, to give us a future and a hope. Help us trust Your good plans. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '罗马书 8:28',
          ref_en: 'Romans 8:28',
          text_zh: '我们晓得万事都互相效力，叫爱神的人得益处，就是按他旨意被召的人。',
          text_en: 'And we know that for those who love God all things work together for good, for those who are called according to his purpose.',
        },
        reflection: {
          zh: '"万事互相效力"不是说所有的事都是好事，而是说神能让所有的事——包括苦难和挫折——共同产生美好的结果。这给了我们面对任何处境的盼望。',
          en: '"All things work together for good" doesn\'t mean everything is good, but that God can cause all things — including suffering and setbacks — to produce good results together. This gives us hope in any situation.',
        },
        question: {
          zh: '"万事都互相效力"——你有没有一件事当时觉得不好，但后来看到了神的美好旨意？',
          en: '"All things work together for good" — have you experienced something that seemed bad at the time but later revealed God\'s good purpose?',
        },
        prayer: {
          zh: '天父，感谢你使万事互相效力，叫爱你的人得益处。即使我们现在不明白，我们相信你的旨意总是美善的。阿们。',
          en: 'Father, thank You for working all things together for good for those who love You. Even when we don\'t understand, we trust Your purposes are always good. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '彼得前书 1:3',
          ref_en: '1 Peter 1:3',
          text_zh: '愿颂赞归与我们主耶稣基督的父神！他曾照自己的大怜悯，借耶稣基督从死里复活，重生了我们，叫我们有活泼的盼望。',
          text_en: 'Blessed be the God and Father of our Lord Jesus Christ! According to his great mercy, he has caused us to be born again to a living hope through the resurrection of Jesus Christ from the dead.',
        },
        reflection: {
          zh: '我们的盼望是"活泼的盼望"——不是死气沉沉的期待，而是因为耶稣已经从死里复活而充满生命力。耶稣的复活是我们盼望的根基：因为他活着，我们知道最终的结局是好的。',
          en: 'Our hope is a "living hope" — not a lifeless expectation, but one full of vitality because Jesus has risen from the dead. The resurrection is the foundation of our hope: because He lives, we know the final outcome is good.',
        },
        question: {
          zh: '彼得说借着耶稣的复活我们有"活泼的盼望"。耶稣的复活对你个人来说意味着什么？',
          en: 'Peter says through Jesus\' resurrection we have "a living hope." What does Jesus\' resurrection mean to you personally?',
        },
        prayer: {
          zh: '天父，感谢你借耶稣基督从死里复活，赐给我们活泼的盼望！愿这盼望成为我们每天生活的动力。阿们。',
          en: 'Father, thank You for giving us a living hope through the resurrection of Jesus Christ! May this hope be our daily motivation. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '诗篇 42:5',
          ref_en: 'Psalm 42:5',
          text_zh: '我的心哪，你为何忧闷？为何在我里面烦躁？应当仰望神，因他笑脸帮助我，我还要称赞他。',
          text_en: 'Why are you cast down, O my soul, and why are you in turmoil within me? Hope in God; for I shall again praise him, my salvation.',
        },
        reflection: {
          zh: '诗人对自己的灵魂说话——质问自己为什么忧闷、烦躁，然后吩咐自己"仰望神"。当我们情绪低落时，我们可以效法诗人，用神的真理对自己的灵魂说话，而不是听从情绪。',
          en: 'The psalmist speaks to his own soul — questioning why he is cast down and in turmoil, then commanding himself to "hope in God." When we\'re down, we can follow the psalmist\'s example: speak God\'s truth to our souls instead of listening to our emotions.',
        },
        question: {
          zh: '诗人对自己说"应当仰望神"。你在忧闷的时候会怎样提醒自己仰望神？',
          en: 'The psalmist tells himself to "hope in God." When you feel downcast, how do you remind yourself to hope in God?',
        },
        prayer: {
          zh: '主啊，当我们的心忧闷烦躁时，帮助我们仰望你。你是我们的帮助和拯救，我们还要称赞你。阿们。',
          en: 'Lord, when our hearts are cast down and in turmoil, help us hope in You. You are our help and our salvation; we shall again praise You. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '以赛亚书 40:31',
          ref_en: 'Isaiah 40:31',
          text_zh: '但那等候耶和华的，必从新得力。他们必如鹰展翅上腾，他们奔跑却不困倦，行走却不疲乏。',
          text_en: 'But they who wait for the Lord shall renew their strength; they shall mount up with wings like eagles; they shall run and not be weary; they shall walk and not faint.',
        },
        reflection: {
          zh: '等候耶和华不是消极地等待，而是积极地信靠。神应许等候他的人"必从新得力"——不是靠自己的力量，而是从神那里得着超自然的力量，如鹰展翅上腾。',
          en: 'Waiting on the Lord is not passive waiting, but active trust. God promises those who wait on Him shall "renew their strength" — not by their own power, but supernatural strength from God, mounting up with wings like eagles.',
        },
        question: {
          zh: '"等候耶和华的必从新得力"——你现在是否在等候什么？等候的过程中你如何保持盼望？',
          en: '"Those who wait for the Lord shall renew their strength" — are you waiting for something right now? How do you maintain hope while waiting?',
        },
        prayer: {
          zh: '主啊，帮助我们等候你，从你那里重新得力。愿我们如鹰展翅上腾，奔跑不困倦，行走不疲乏。阿们。',
          en: 'Lord, help us wait on You and renew our strength. May we mount up with wings like eagles, run and not be weary, walk and not faint. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '启示录 21:4',
          ref_en: 'Revelation 21:4',
          text_zh: '神要擦去他们一切的眼泪，不再有死亡，也不再有悲哀、哭号、疼痛，因为以前的事都过去了。',
          text_en: 'He will wipe away every tear from their eyes, and death shall be no more, neither shall there be mourning, nor crying, nor pain anymore, for the former things have passed away.',
        },
        reflection: {
          zh: '这是圣经中最美的应许之一：有一天，神将擦去一切眼泪，不再有死亡、悲哀、哭号和疼痛。"以前的事都过去了"——这个终极的盼望使我们今天就能带着喜乐生活。',
          en: 'This is one of the most beautiful promises in the Bible: one day, God will wipe away every tear, and there will be no more death, mourning, crying, or pain. "The former things have passed away" — this ultimate hope enables us to live with joy today.',
        },
        question: {
          zh: '启示录应许"不再有死亡、悲哀、哭号、疼痛"。想到天堂的应许，你最期待什么？',
          en: 'Revelation promises "no more death, mourning, crying, or pain." When you think of heaven, what do you look forward to most?',
        },
        prayer: {
          zh: '天父，感谢你应许有一天要擦去我们一切的眼泪。不再有死亡、悲哀和疼痛。这盼望使我们今天就有喜乐。阿们。',
          en: 'Father, thank You for promising to wipe away every tear. No more death, mourning, or pain. This hope gives us joy even today. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '希伯来书 6:19',
          ref_en: 'Hebrews 6:19',
          text_zh: '我们有这指望，如同灵魂的锚，又坚固、又牢靠，且通入幔内。',
          text_en: 'We have this as a sure and steadfast anchor of the soul, a hope that enters into the inner place behind the curtain.',
        },
        reflection: {
          zh: '盼望如同"灵魂的锚"——在人生的风暴中使我们稳固。这个锚不是固定在海底，而是"通入幔内"——固定在神的至圣所里，是"又坚固、又牢靠"的。',
          en: 'Hope is like "an anchor of the soul" — keeping us steady in life\'s storms. This anchor is not fixed to the seabed, but "enters into the inner place behind the curtain" — anchored in God\'s holy of holies, "sure and steadfast."',
        },
        question: {
          zh: '经文把盼望比作"灵魂的锚"。在你人生的风暴中，什么是让你稳固不动摇的"锚"？',
          en: 'The verse compares hope to "an anchor of the soul." In your life\'s storms, what serves as the "anchor" that keeps you steady?',
        },
        prayer: {
          zh: '主啊，感谢你赐给我们这又坚固、又牢靠的盼望，如同灵魂的锚。在一切风浪中保守我们稳固在你里面。阿们。',
          en: 'Lord, thank You for this sure and steadfast hope, an anchor of the soul. Keep us steady in You through every storm. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '哥林多前书 15:58',
          ref_en: '1 Corinthians 15:58',
          text_zh: '所以，我亲爱的弟兄们，你们务要坚固，不可摇动，常常竭力多做主工，因为知道你们的劳苦，在主里面不是徒然的。',
          text_en: 'Therefore, my beloved brothers, be steadfast, immovable, always abounding in the work of the Lord, knowing that in the Lord your labor is not in vain.',
        },
        reflection: {
          zh: '保罗在讲完复活的盼望之后说这话——因为有复活的盼望，我们今天的劳苦"在主里面不是徒然的"。盼望不是让我们消极等待，而是给我们动力"竭力多做主工"。',
          en: 'Paul says this after teaching about the resurrection hope — because of this hope, our labor today "is not in vain" in the Lord. Hope doesn\'t make us passive, but motivates us to "abound in the work of the Lord."',
        },
        question: {
          zh: '保罗说"你们的劳苦在主里面不是徒然的"。你最近为主做的什么事让你觉得特别有意义？',
          en: 'Paul says "your labor is not in vain in the Lord." What have you done for the Lord recently that feels especially meaningful?',
        },
        prayer: {
          zh: '天父，因为知道我们的劳苦在主里面不是徒然的，帮助我们坚固不摇动，常常竭力多做主工。阿们。',
          en: 'Father, knowing our labor is not in vain in the Lord, help us be steadfast, immovable, always abounding in the work of the Lord. Amen.',
        },
      },
    ],
    hymnKeywords: ['盼望', '指望', 'hope', 'wait'],
  },
  {
    id: 'family',
    name_zh: '家庭',
    name_en: 'Family',
    icon: '👨‍👩‍👧‍👦',
    devotionals: [
      {
        scripture: {
          ref_zh: '申命记 6:6-7',
          ref_en: 'Deuteronomy 6:6–7',
          text_zh: '我今日所吩咐你的话都要记在心上，也要殷勤教训你的儿女，无论你坐在家里，行在路上，躺下，起来，都要谈论。',
          text_en: 'And these words that I command you today shall be on your heart. You shall teach them diligently to your children, and shall talk of them when you sit in your house, and when you walk by the way, and when you lie down, and when you rise.',
        },
        reflection: {
          zh: '"殷勤教训你的儿女"意味着信仰不只是周日的事，而是融入每天的生活——坐在家里、行在路上、躺下、起来，都要谈论神的话。家庭灵修正是实践这段经文的美好方式。',
          en: '"Teach them diligently to your children" means faith is not just a Sunday activity, but woven into daily life — sitting at home, walking along the road, lying down, and getting up. Family devotions are a wonderful way to practice this verse.',
        },
        question: {
          zh: '摩西说要在"坐在家里、行在路上、躺下、起来"时都谈论神的话。我们的家庭可以怎样在日常生活中更多地谈论神？',
          en: 'Moses says to talk about God\'s words "when you sit, walk, lie down, and rise." How can our family talk about God more in our daily routines?',
        },
        prayer: {
          zh: '天父，帮助我们把你的话记在心上，殷勤教训我们的儿女。无论坐下、起来、出去、回来，都让我们谈论你的美善。阿们。',
          en: 'Father, help us keep Your words on our hearts and teach them diligently to our children. Whether sitting, rising, going out, or coming home, let us speak of Your goodness. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '诗篇 127:3',
          ref_en: 'Psalm 127:3',
          text_zh: '儿女是耶和华所赐的产业，所怀的胎是他所给的赏赐。',
          text_en: 'Behold, children are a heritage from the Lord, the fruit of the womb a reward.',
        },
        reflection: {
          zh: '儿女是"耶和华所赐的产业"——不是我们的负担，而是神托付的宝贵礼物和责任。当我们以这样的眼光看待儿女，养育的辛苦就变成了感恩的服事。',
          en: 'Children are "a heritage from the Lord" — not our burden, but a precious gift and responsibility entrusted by God. When we view children this way, the hard work of parenting becomes grateful service.',
        },
        question: {
          zh: '诗篇说"儿女是耶和华所赐的产业"。你觉得把儿女看作"神的产业"而不是"我的孩子"，会怎样改变你的养育态度？',
          en: 'The Psalm says "children are a heritage from the Lord." How might viewing children as "God\'s heritage" rather than "my kids" change your parenting attitude?',
        },
        prayer: {
          zh: '天父，感谢你赐给我们儿女——他们是你的产业和赏赐。帮助我们做忠心的管家，按你的心意养育他们。阿们。',
          en: 'Father, thank You for giving us children — they are Your heritage and reward. Help us be faithful stewards, raising them according to Your will. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '箴言 22:6',
          ref_en: 'Proverbs 22:6',
          text_zh: '教养孩童，使他走当行的道，就是到老他也不偏离。',
          text_en: 'Train up a child in the way he should go; even when he is old he will not depart from it.',
        },
        reflection: {
          zh: '这句箴言给父母一个美好的应许和责任：用心教养孩子走正道，这影响是一生之久的。"教养"不只是说教，更是以身作则、耐心陪伴和充满爱的引导。',
          en: 'This proverb gives parents a beautiful promise and responsibility: diligently train a child in the right way, and the impact lasts a lifetime. "Training" is not just lecturing, but leading by example, patient companionship, and loving guidance.',
        },
        question: {
          zh: '"教养孩童，使他走当行的道"——你觉得"当行的道"是什么？父母怎样才能有效地教养孩子？',
          en: '"Train up a child in the way he should go" — what do you think "the way he should go" means? How can parents effectively train their children?',
        },
        prayer: {
          zh: '主啊，赐我们智慧来教养儿女走当行的道。愿你的真理从小扎根在他们心中，到老也不偏离。阿们。',
          en: 'Lord, give us wisdom to train our children in the way they should go. May Your truth take root in their hearts from youth, so they will not depart from it even in old age. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '以弗所书 6:1-4',
          ref_en: 'Ephesians 6:1–4',
          text_zh: '你们作儿女的，要在主里听从父母，这是理所当然的。"要孝敬父母，使你得福，在世长寿。"这是第一条带应许的诫命。你们作父亲的，不要惹儿女的气，只要照着主的教训和警戒养育他们。',
          text_en: 'Children, obey your parents in the Lord, for this is right. "Honor your father and mother" (this is the first commandment with a promise), "that it may go well with you and that you may live long in the land." Fathers, do not provoke your children to anger, but bring them up in the discipline and instruction of the Lord.',
        },
        reflection: {
          zh: '保罗对儿女和父母都有话说：儿女要孝敬听从，父母不要惹儿女的气。这是双向的关系——儿女尊敬父母，父母也尊重儿女。"照着主的教训和警戒养育"是关键。',
          en: 'Paul speaks to both children and parents: children should obey and honor, parents should not provoke to anger. This is a two-way relationship — children respect parents, and parents respect children. "Discipline and instruction of the Lord" is key.',
        },
        question: {
          zh: '保罗说父母"不要惹儿女的气"。你觉得什么样的行为会"惹儿女的气"？怎样才能避免？',
          en: 'Paul says parents should "not provoke your children to anger." What kind of behavior provokes children? How can we avoid it?',
        },
        prayer: {
          zh: '天父，帮助我们的儿女在主里孝敬听从父母，也帮助做父母的不惹儿女的气，照着你的教训和警戒养育他们。阿们。',
          en: 'Father, help our children obey and honor their parents in the Lord. Help us as parents not provoke them to anger, but bring them up in Your discipline and instruction. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '约书亚记 24:15',
          ref_en: 'Joshua 24:15',
          text_zh: '至于我和我家，我们必定事奉耶和华。',
          text_en: 'But as for me and my house, we will serve the Lord.',
        },
        reflection: {
          zh: '约书亚的宣告"至于我和我家，我们必定事奉耶和华"提醒我们，信仰是一个家庭性的决定和委身。这不是强迫，而是作为一家之主带领全家归向神的勇敢宣告。',
          en: 'Joshua\'s declaration "as for me and my house, we will serve the Lord" reminds us that faith is a family commitment. This is not coercion, but a bold declaration by a family leader to direct the whole household toward God.',
        },
        question: {
          zh: '"至于我和我家，我们必定事奉耶和华"——对你来说，全家"事奉耶和华"具体意味着什么？',
          en: '"As for me and my house, we will serve the Lord" — what does it specifically mean for your whole family to "serve the Lord"?',
        },
        prayer: {
          zh: '主啊，我们宣告：至于我和我家，我们必定事奉你。求你帮助我们全家同心合意地服事你、跟随你。阿们。',
          en: 'Lord, we declare: as for us and our house, we will serve You. Help our whole family serve and follow You with one heart. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '歌罗西书 3:13-14',
          ref_en: 'Colossians 3:13–14',
          text_zh: '倘若这人与那人有嫌隙，总要彼此包容，彼此饶恕；主怎样饶恕了你们，你们也要怎样饶恕人。在这一切之外，要存着爱心，爱心就是联络全德的。',
          text_en: 'Bearing with one another and, if one has a complaint against another, forgiving each other; as the Lord has forgiven you, so you also must forgive. And above all these put on love, which binds everything together in perfect harmony.',
        },
        reflection: {
          zh: '家庭中最需要的就是包容和饶恕。保罗的标准是"主怎样饶恕了你们，你们也要怎样饶恕人"。在这一切之上是爱——爱是将一切美德联结在一起的纽带。',
          en: 'What families need most is patience and forgiveness. Paul\'s standard is "as the Lord has forgiven you, so you also must forgive." Above all is love — love binds everything together in perfect harmony.',
        },
        question: {
          zh: '保罗说要像主饶恕我们一样饶恕人。在家庭中，你觉得哪方面需要更多的饶恕和包容？',
          en: 'Paul says to forgive as the Lord forgave you. In what areas does your family need more forgiveness and patience?',
        },
        prayer: {
          zh: '天父，帮助我们彼此包容、彼此饶恕，像你饶恕了我们一样。愿爱成为我们家庭的纽带，联络全德。阿们。',
          en: 'Father, help us bear with one another and forgive each other, as You have forgiven us. May love bind our family together in perfect harmony. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '箴言 17:6',
          ref_en: 'Proverbs 17:6',
          text_zh: '子孙为老人的冠冕，父亲是儿女的荣耀。',
          text_en: 'Grandchildren are the crown of the aged, and the glory of children is their fathers.',
        },
        reflection: {
          zh: '这句简短的箴言描绘了美好的家庭关系：老人以子孙为冠冕，儿女以父亲为荣耀。代际之间的尊重和喜乐是神设计家庭的一部分。',
          en: 'This short proverb paints a picture of beautiful family relationships: grandparents are crowned by grandchildren, and children glory in their parents. Intergenerational respect and joy are part of God\'s design for the family.',
        },
        question: {
          zh: '"子孙为老人的冠冕，父亲是儿女的荣耀。"你怎样向长辈表达尊敬？你希望成为儿女怎样的"荣耀"？',
          en: '"Grandchildren are the crown of the aged, and the glory of children is their fathers." How do you show respect to elders? What kind of "glory" do you want to be for your children?',
        },
        prayer: {
          zh: '天父，感谢你赐给我们几代人之间的美好关系。帮助我们尊敬长辈，也成为下一代的荣耀和榜样。阿们。',
          en: 'Father, thank You for the beautiful relationships across generations. Help us honor our elders and be a source of glory and example for the next generation. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '诗篇 128:3',
          ref_en: 'Psalm 128:3',
          text_zh: '你妻子在你的内室，好像多结果子的葡萄树；你儿女围绕你的桌子，好像橄榄栽子。',
          text_en: 'Your wife will be like a fruitful vine within your house; your children will be like olive shoots around your table.',
        },
        reflection: {
          zh: '诗人用美丽的农业意象描绘蒙福的家庭：妻子如多结果子的葡萄树，儿女如橄榄栽子围绕桌子。这幅画面提醒我们珍惜一家人围坐在一起的时光。',
          en: 'The psalmist uses beautiful agricultural imagery to depict a blessed family: a wife like a fruitful vine, children like olive shoots around the table. This image reminds us to cherish the time when our family gathers together.',
        },
        question: {
          zh: '诗篇描绘了一家人围绕桌子的温馨画面。你最珍惜家人在一起的什么时刻？',
          en: 'The Psalm paints a warm picture of a family gathered around the table. What moments with your family do you cherish most?',
        },
        prayer: {
          zh: '天父，感谢你赐给我们家人围坐一起的福分。愿我们的家如葡萄树多结果子，如橄榄栽子生机勃勃。阿们。',
          en: 'Father, thank You for the blessing of family gathered together. May our home be like a fruitful vine and our children like olive shoots, full of life. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '箴言 31:28',
          ref_en: 'Proverbs 31:28',
          text_zh: '她的儿女起来称她有福，她的丈夫也称赞她。',
          text_en: 'Her children rise up and call her blessed; her husband also, and he praises her.',
        },
        reflection: {
          zh: '箴言31章描绘了一位被家人称赞的母亲。儿女和丈夫不是把她当作理所当然，而是起来称她有福、称赞她。在家庭中彼此肯定和感恩是何等重要！',
          en: 'Proverbs 31 describes a mother praised by her family. Her children and husband don\'t take her for granted but rise up to call her blessed and praise her. How important it is to affirm and appreciate each other in the family!',
        },
        question: {
          zh: '经文说"她的儿女起来称她有福"。你今天可以用什么方式向家中的母亲或父亲表达感谢和称赞？',
          en: 'The verse says "her children rise up and call her blessed." How can you express appreciation and praise to your mother or father today?',
        },
        prayer: {
          zh: '天父，感谢你赐给我们家中的每一位成员。帮助我们学会彼此称赞、彼此鼓励，不把家人的付出当作理所当然。阿们。',
          en: 'Father, thank You for every member of our family. Help us learn to praise and encourage one another, never taking each other\'s contributions for granted. Amen.',
        },
      },
    ],
    hymnKeywords: ['家庭', '家', 'family', 'home'],
  },
  {
    id: 'service',
    name_zh: '服事',
    name_en: 'Service',
    icon: '🤲',
    devotionals: [
      {
        scripture: {
          ref_zh: '马可福音 10:45',
          ref_en: 'Mark 10:45',
          text_zh: '因为人子来，并不是要受人的服事，乃是要服事人，并且要舍命作多人的赎价。',
          text_en: 'For even the Son of Man came not to be served but to serve, and to give his life as a ransom for many.',
        },
        reflection: {
          zh: '耶稣——万王之王——来到世上不是要受人服事，而是要服事人，甚至舍命作赎价。如果我们的主都这样谦卑地服事，我们怎能不效法他呢？',
          en: 'Jesus — the King of kings — came not to be served but to serve, even giving His life as a ransom. If our Lord served so humbly, how can we not follow His example?',
        },
        question: {
          zh: '耶稣说他来"不是要受人的服事，乃是要服事人"。这对你理解"伟大"和"成功"有什么影响？',
          en: 'Jesus says He came "not to be served but to serve." How does this affect your understanding of "greatness" and "success"?',
        },
        prayer: {
          zh: '主耶稣，你来不是要受人服事，乃是要服事人，并且舍命。帮助我们效法你，甘心乐意地服事人。阿们。',
          en: 'Lord Jesus, You came not to be served but to serve, and to give Your life. Help us follow Your example and serve others willingly. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '加拉太书 5:13',
          ref_en: 'Galatians 5:13',
          text_zh: '弟兄们，你们蒙召是要得自由，只是不可将你们的自由当作放纵情欲的机会，总要用爱心互相服事。',
          text_en: 'For you were called to freedom, brothers. Only do not use your freedom as an opportunity for the flesh, but through love serve one another.',
        },
        reflection: {
          zh: '保罗说自由的目的不是放纵自己，而是"用爱心互相服事"。真正的自由不是随心所欲，而是有能力去爱和服事别人。',
          en: 'Paul says the purpose of freedom is not self-indulgence but to "through love serve one another." True freedom is not doing whatever we want, but having the ability to love and serve others.',
        },
        question: {
          zh: '保罗说我们蒙召得自由是要"用爱心互相服事"。你觉得"自由"和"服事"矛盾吗？为什么？',
          en: 'Paul says we were called to freedom to "through love serve one another." Do you think "freedom" and "service" contradict each other? Why or why not?',
        },
        prayer: {
          zh: '天父，感谢你赐给我们在基督里的自由。帮助我们不把自由当作放纵的机会，而是用爱心互相服事。阿们。',
          en: 'Father, thank You for the freedom we have in Christ. Help us not use it for self-indulgence but through love serve one another. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '彼得前书 4:10',
          ref_en: '1 Peter 4:10',
          text_zh: '各人要照所得的恩赐彼此服事，作神百般恩赐的好管家。',
          text_en: 'As each has received a gift, use it to serve one another, as good stewards of God\'s varied grace.',
        },
        reflection: {
          zh: '每个基督徒都有从神领受的恩赐，这些恩赐不是为自己，而是为了"彼此服事"。我们是"神百般恩赐的好管家"——恩赐是神的，我们只是管理者。',
          en: 'Every Christian has gifts received from God, and these gifts are not for ourselves but for "serving one another." We are "good stewards of God\'s varied grace" — the gifts are God\'s; we are merely stewards.',
        },
        question: {
          zh: '彼得说要"照所得的恩赐彼此服事"。你觉得神给了你什么恩赐？你可以怎样用来服事他人？',
          en: 'Peter says to use our gifts to "serve one another." What gifts do you think God has given you? How can you use them to serve others?',
        },
        prayer: {
          zh: '天父，帮助我们发现你赐给我们的恩赐，并忠心地使用它们来彼此服事，作你百般恩赐的好管家。阿们。',
          en: 'Father, help us discover the gifts You\'ve given us and faithfully use them to serve one another, as good stewards of Your varied grace. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '马太福音 25:40',
          ref_en: 'Matthew 25:40',
          text_zh: '王要回答说："我实在告诉你们：这些事你们既做在我这弟兄中一个最小的身上，就是做在我身上了。"',
          text_en: 'And the King will answer them, "Truly, I say to you, as you did it to one of the least of these my brothers, you did it to me."',
        },
        reflection: {
          zh: '耶稣说服事"最小的弟兄"就是做在他身上。服事不一定是做大事——一杯水、一个微笑、一句鼓励的话，做在最卑微的人身上，就是服事了主自己。',
          en: 'Jesus says serving "the least of these" is serving Him. Service doesn\'t have to be grand — a cup of water, a smile, a word of encouragement, done to the humblest person, is done to the Lord Himself.',
        },
        question: {
          zh: '耶稣说"做在最小的弟兄身上，就是做在我身上了"。你身边有谁是你可以去服事的"最小的弟兄"？',
          en: 'Jesus says "as you did it to one of the least of these, you did it to me." Who around you could be "the least of these" that you can serve?',
        },
        prayer: {
          zh: '主耶稣，帮助我们看见身边"最小的弟兄"的需要，并用你的爱去服事他们。因为做在他们身上，就是做在你身上。阿们。',
          en: 'Lord Jesus, help us see the needs of "the least of these" around us and serve them with Your love. For what we do for them, we do for You. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '约翰福音 13:14-15',
          ref_en: 'John 13:14–15',
          text_zh: '我是你们的主，你们的夫子，尚且洗你们的脚，你们也当彼此洗脚。我给你们作了榜样，叫你们照着我向你们所做的去做。',
          text_en: 'If I then, your Lord and Teacher, have washed your feet, you also ought to wash one another\'s feet. For I have given you an example, that you also should do just as I have done to you.',
        },
        reflection: {
          zh: '耶稣——主和夫子——亲自为门徒洗脚，然后说"我给你们作了榜样"。洗脚是当时最卑微的服事，耶稣以此教导我们：真正的服事从谦卑开始。',
          en: 'Jesus — Lord and Teacher — washed His disciples\' feet and said "I have given you an example." Foot-washing was the lowliest task, and Jesus uses it to teach that true service begins with humility.',
        },
        question: {
          zh: '耶稣洗门徒的脚给了你什么启发？在我们家庭中，"洗脚"式的服事可能是什么样子的？',
          en: 'What does Jesus washing the disciples\' feet teach you? In our family, what might "foot-washing" style service look like?',
        },
        prayer: {
          zh: '主耶稣，你为门徒洗脚，给我们作了谦卑服事的榜样。帮助我们在家中也彼此洗脚——甘心做最卑微的服事。阿们。',
          en: 'Lord Jesus, You washed Your disciples\' feet and set an example of humble service. Help us wash one another\'s feet at home — willingly doing the lowliest tasks. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '歌罗西书 3:23-24',
          ref_en: 'Colossians 3:23–24',
          text_zh: '无论做什么，都要从心里做，像是给主做的，不是给人做的。因你们知道从主那里必得着基业为赏赐。你们所事奉的乃是主基督。',
          text_en: 'Whatever you do, work heartily, as for the Lord and not for men, knowing that from the Lord you will receive the inheritance as your reward. You are serving the Lord Christ.',
        },
        reflection: {
          zh: '"像是给主做的，不是给人做的"——这个原则使最平凡的服事也变得有永恒的意义。无论是洗碗、打扫还是工作，都可以成为对主的敬拜。',
          en: '"As for the Lord and not for men" — this principle gives eternal significance to even the most ordinary service. Whether washing dishes, cleaning, or working, everything can become worship to the Lord.',
        },
        question: {
          zh: '"像是给主做的"这句话怎样改变你对日常家务和工作的态度？',
          en: 'How does "as for the Lord" change your attitude toward daily chores and work?',
        },
        prayer: {
          zh: '天父，无论我们做什么，帮助我们从心里做，像是给你做的。愿我们的一切服事都荣耀主基督。阿们。',
          en: 'Father, whatever we do, help us work heartily as for You. May all our service glorify the Lord Christ. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '以弗所书 2:10',
          ref_en: 'Ephesians 2:10',
          text_zh: '我们原是他的工作，在基督耶稣里造成的，为要叫我们行善，就是神所预备叫我们行的。',
          text_en: 'For we are his workmanship, created in Christ Jesus for good works, which God prepared beforehand, that we should walk in them.',
        },
        reflection: {
          zh: '我们是"神的工作"——杰作！而且我们被造有一个目的："行善"。更奇妙的是，这些善行是"神所预备"的——神已经为我们每个人安排了独特的服事机会。',
          en: 'We are "God\'s workmanship" — His masterpiece! And we were created for a purpose: "good works." Even more amazingly, these good works were "prepared beforehand" — God has already arranged unique service opportunities for each of us.',
        },
        question: {
          zh: '以弗所书说我们是"神的工作"，被造为了"行善"。你觉得神为你预备了什么样的"善行"？',
          en: 'Ephesians says we are "God\'s workmanship, created for good works." What "good works" do you think God has prepared for you?',
        },
        prayer: {
          zh: '天父，感谢你造我们为你的杰作，为我们预备了善行。帮助我们看见并行在你为我们预备的服事中。阿们。',
          en: 'Father, thank You for creating us as Your workmanship and preparing good works for us. Help us see and walk in the service You\'ve prepared. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '罗马书 12:11',
          ref_en: 'Romans 12:11',
          text_zh: '殷勤不可懒惰。要心里火热，常常服事主。',
          text_en: 'Do not be slothful in zeal, be fervent in spirit, serve the Lord.',
        },
        reflection: {
          zh: '保罗用三个短句勉励我们：殷勤不懒惰、心里火热、常常服事主。服事不是偶尔的热心，而是持之以恒的火热。让圣灵点燃我们心中服事的火焰。',
          en: 'Paul uses three short phrases to encourage us: not slothful in zeal, fervent in spirit, serving the Lord. Service is not occasional enthusiasm, but consistent fervency. Let the Holy Spirit ignite the flame of service in our hearts.',
        },
        question: {
          zh: '保罗说"殷勤不可懒惰，心里火热，常常服事主"。你怎样保持服事的热情，不至于倦怠？',
          en: 'Paul says "not slothful in zeal, fervent in spirit, serve the Lord." How do you maintain your passion for serving and avoid burnout?',
        },
        prayer: {
          zh: '圣灵，求你激励我们殷勤不懒惰，心里火热，常常服事主。不让我们的热情冷却，而是越烧越旺。阿们。',
          en: 'Holy Spirit, stir us to not be slothful in zeal, to be fervent in spirit, and always serve the Lord. Don\'t let our passion cool, but burn ever brighter. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '腓立比书 2:3-4',
          ref_en: 'Philippians 2:3–4',
          text_zh: '凡事不可结党，不可贪图虚浮的荣耀；只要存心谦卑，各人看别人比自己强。各人不要单顾自己的事，也要顾别人的事。',
          text_en: 'Do nothing from selfish ambition or conceit, but in humility count others more significant than yourselves. Let each of you look not only to his own interests, but also to the interests of others.',
        },
        reflection: {
          zh: '服事的心态是"看别人比自己强"、"顾别人的事"。保罗紧接着就用基督的虚己为榜样。真正的服事来自谦卑——不是贬低自己，而是提升对他人的关注。',
          en: 'The attitude of service is "count others more significant" and "look to the interests of others." Paul immediately follows with Christ\'s self-emptying as an example. True service comes from humility — not putting ourselves down, but lifting our attention to others.',
        },
        question: {
          zh: '保罗说"各人看别人比自己强"。这在实际生活中是什么意思？你怎样"顾别人的事"？',
          en: 'Paul says "count others more significant than yourselves." What does this mean practically? How do you "look to the interests of others"?',
        },
        prayer: {
          zh: '主啊，帮助我们存心谦卑，看别人比自己强。不要只顾自己的事，也顾别人的事。使我们成为服事人的家庭。阿们。',
          en: 'Lord, help us in humility count others more significant than ourselves. May we look not only to our own interests but also to the interests of others. Make us a serving family. Amen.',
        },
      },
    ],
    hymnKeywords: ['服事', '事奉', 'serve', 'service'],
  },
];

// 30条谢饭祷告
export const mealPrayers: BilingualText[] = [
  { zh: '天父，感谢你赐给我们今天的饮食。求你祝福这食物，也祝福预备食物的人。奉耶稣的名祷告，阿们。', en: 'Heavenly Father, thank You for today\'s food. Bless this meal and those who prepared it. In Jesus\' name, amen.' },
  { zh: '主啊，感谢你每日的供应。你是信实的神，从不缺少。奉耶稣的名祷告，阿们。', en: 'Lord, thank You for Your daily provision. You are a faithful God who never fails. In Jesus\' name, amen.' },
  { zh: '天父，我们为这丰盛的食物感谢你。求你也喂养我们的灵魂，使我们靠你的话语而活。阿们。', en: 'Father, we thank You for this abundant food. Feed our souls also, that we may live by Your Word. Amen.' },
  { zh: '主耶稣，你是生命的粮。感谢你不仅供应我们身体的需要，更赐给我们永生的盼望。阿们。', en: 'Lord Jesus, You are the bread of life. Thank You for providing not only for our bodies but giving us the hope of eternal life. Amen.' },
  { zh: '天父，感谢你使我们全家能坐在一起用餐。求你保守我们的身体健康，心灵强壮。阿们。', en: 'Father, thank You for our family being able to share this meal together. Keep us healthy in body and strong in spirit. Amen.' },
  { zh: '感谢慈爱的天父赐下这顿饭。愿我们吃了得力量，好好服事你。奉耶稣的名祷告，阿们。', en: 'Thank You, loving Father, for this meal. May we eat and gain strength to serve You well. In Jesus\' name, amen.' },
  { zh: '主啊，世上还有许多人饥饿缺乏。我们为你的供应感恩，也求你怜悯那些缺乏的人。阿们。', en: 'Lord, many in this world go hungry. We thank You for Your provision and ask You to have mercy on those in need. Amen.' },
  { zh: '天父，愿这顿饭成为我们家庭团契的时光。求你帮助我们在餐桌上也彼此相爱、分享喜乐。阿们。', en: 'Father, may this meal be a time of family fellowship. Help us love one another and share joy at this table. Amen.' },
  { zh: '感谢天父从天降下各样美善的恩赐。这食物是你恩典的明证。奉耶稣的名祷告，阿们。', en: 'Thank You, Father, for every good and perfect gift from above. This food is evidence of Your grace. In Jesus\' name, amen.' },
  { zh: '主啊，感谢你应许我们日用的饮食今日赐给我们。你从不失信。阿们。', en: 'Lord, thank You for promising to give us our daily bread. You never break Your promises. Amen.' },
  { zh: '天父，感谢你用各样的食物养育我们。愿我们因着身体得饱足，更加有力量荣耀你。阿们。', en: 'Father, thank You for nourishing us with all kinds of food. May our bodies be satisfied so we can better glorify You. Amen.' },
  { zh: '主啊，你张手就使有生气的都随愿饱足。感谢你对我们的眷顾。奉耶稣的名祷告，阿们。', en: 'Lord, You open Your hand and satisfy the desire of every living thing. Thank You for Your care for us. In Jesus\' name, amen.' },
  { zh: '天父，感谢你让我们不缺吃穿。求你帮助我们做好管家，也与他人分享你的恩赐。阿们。', en: 'Father, thank You that we lack neither food nor clothing. Help us be good stewards and share Your gifts with others. Amen.' },
  { zh: '主啊，五千人吃饱的神迹提醒我们，在你没有难成的事。感谢你供应我们一切所需。阿们。', en: 'Lord, the miracle of feeding the five thousand reminds us that nothing is impossible for You. Thank You for supplying all our needs. Amen.' },
  { zh: '天父，感谢你赐下食物使我们的心欢喜。愿我们用欢喜的心领受，并以感恩回报。阿们。', en: 'Father, thank You for food that gladdens our hearts. May we receive it with joyful hearts and respond with gratitude. Amen.' },
  { zh: '感谢主赐下这顿饭。愿我们在吃的时候也思想你的恩典，并为明天的需要信靠你。阿们。', en: 'Thank You, Lord, for this meal. As we eat, may we think of Your grace and trust You for tomorrow\'s needs. Amen.' },
  { zh: '天父，感谢你是全家人的供应者。愿你的恩典如这食物一样充足，永不断绝。阿们。', en: 'Father, thank You for being our family\'s provider. May Your grace be as abundant as this food, never ceasing. Amen.' },
  { zh: '主耶稣，你曾在以马忤斯路上与门徒擘饼。求你也在这餐桌上与我们同在。阿们。', en: 'Lord Jesus, You broke bread with the disciples at Emmaus. Be present with us at this table too. Amen.' },
  { zh: '天父，你用吗哪喂养旷野中的以色列人，今天你也照样供应我们。你的信实何等伟大！阿们。', en: 'Father, You fed Israel with manna in the wilderness, and You provide for us in the same way today. How great is Your faithfulness! Amen.' },
  { zh: '主啊，这饭菜虽然简单，但你的恩典丰富。帮助我们学会在小事上感恩。阿们。', en: 'Lord, though this meal is simple, Your grace is abundant. Help us learn to be thankful in small things. Amen.' },
  { zh: '天父，感谢你让我们今天能吃饱。求你也填满我们灵魂的饥渴，以你的话语和圣灵。阿们。', en: 'Father, thank You for satisfying our hunger today. Fill the hunger of our souls too, with Your Word and Spirit. Amen.' },
  { zh: '主啊，每一餐都提醒我们完全依赖你。离了你，我们什么都不能做。感谢你的供应。阿们。', en: 'Lord, every meal reminds us of our total dependence on You. Apart from You we can do nothing. Thank You for Your provision. Amen.' },
  { zh: '天父，你使五谷丰登、百果累累。感谢你创造的丰富和大地的出产。奉耶稣的名祷告，阿们。', en: 'Father, You make grain grow and fruit abound. Thank You for the richness of creation and the produce of the earth. In Jesus\' name, amen.' },
  { zh: '主啊，我们不是单靠食物活着，乃是靠你口里所出的一切话。求你也用你的话语喂养我们。阿们。', en: 'Lord, we do not live by bread alone, but by every word that comes from Your mouth. Feed us with Your Word too. Amen.' },
  { zh: '天父，感谢你的恩典够我们用的。无论丰富或缺乏，我们都要感谢你。阿们。', en: 'Father, thank You that Your grace is sufficient for us. Whether in plenty or in want, we give You thanks. Amen.' },
  { zh: '感谢主在新的一天赐给我们力量和食物。愿我们今天所做的一切都荣耀你。阿们。', en: 'Thank You, Lord, for strength and food for this new day. May everything we do today glorify You. Amen.' },
  { zh: '主啊，感谢你的慈爱每早晨都是新的。你的信实极其广大。奉耶稣的名祷告，阿们。', en: 'Lord, thank You that Your mercies are new every morning. Great is Your faithfulness. In Jesus\' name, amen.' },
  { zh: '天父，这食物是你手所赐。愿我们享用时也思想你对我们永恒的爱和计划。阿们。', en: 'Father, this food comes from Your hand. As we enjoy it, may we also reflect on Your eternal love and purposes for us. Amen.' },
  { zh: '主啊，感谢你不仅赐给我们食物，还赐给我们彼此。愿这餐桌上充满爱、笑声和你的平安。阿们。', en: 'Lord, thank You for giving us not only food, but each other. May this table be filled with love, laughter, and Your peace. Amen.' },
  { zh: '天父，愿我们因这食物得力量，出去做你的工。一切感谢、荣耀都归给你！阿们。', en: 'Father, may this food give us strength to go and do Your work. All thanks and glory be to You! Amen.' },
];