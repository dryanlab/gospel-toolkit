interface Scripture { ref_zh: string; ref_en: string; text_zh: string; text_en: string; }
interface BilingualText { zh: string; en: string; }
interface DevotionalUnit { scripture: Scripture; reflection: BilingualText; question: BilingualText; prayer: BilingualText; }
interface AltarTheme { id: string; name_zh: string; name_en: string; icon: string; devotionals: DevotionalUnit[]; hymnKeywords: string[]; }

export const themesA3: AltarTheme[] = [
  {
    id: 'gratitude',
    name_zh: '感恩',
    name_en: 'Gratitude',
    icon: '🌻',
    hymnKeywords: ['感恩', '称谢', 'thanks', 'grateful'],
    devotionals: [
      {
        scripture: {
          ref_zh: '帖撒罗尼迦前书 5:18',
          ref_en: '1 Thessalonians 5:18',
          text_zh: '凡事谢恩，因为这是神在基督耶稣里向你们所定的旨意。',
          text_en: 'In every thing give thanks: for this is the will of God in Christ Jesus concerning you.',
        },
        reflection: {
          zh: '保罗告诉我们，凡事谢恩不是一个建议，而是神的旨意。即便在困难中，感恩也是神对我们的心意，因为祂在基督耶稣里已经为我们成就了一切。',
          en: 'Paul tells us that giving thanks in all circumstances is not a suggestion but God\'s will. Even in hardship, gratitude is God\'s desire for us because He has already accomplished everything for us in Christ Jesus.',
        },
        question: {
          zh: '在你目前的处境中，有什么是你可以为之感恩的？"凡事谢恩"对你来说最大的挑战是什么？',
          en: 'What in your current circumstances can you give thanks for? What is the greatest challenge for you in "giving thanks in all circumstances"?',
        },
        prayer: {
          zh: '主啊，感谢你教导我们凡事谢恩。求你帮助我在顺境和逆境中都能看见你的恩典，以感恩的心回应你的旨意。奉主耶稣的名祷告，阿们。',
          en: 'Lord, thank You for teaching us to give thanks in all circumstances. Help me to see Your grace in both good times and hard times, and to respond to Your will with a thankful heart. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '诗篇 100:4',
          ref_en: 'Psalm 100:4',
          text_zh: '当称谢进入他的门，当赞美进入他的院；当感谢他，称颂他的名。',
          text_en: 'Enter into his gates with thanksgiving, and into his courts with praise: be thankful unto him, and bless his name.',
        },
        reflection: {
          zh: '诗人邀请我们以感谢和赞美来到神的面前。感恩是我们进入神同在的钥匙，当我们称谢祂的名，我们的心就被引向敬拜。',
          en: 'The psalmist invites us to come before God with thanksgiving and praise. Gratitude is the key to entering God\'s presence—when we bless His name, our hearts are drawn into worship.',
        },
        question: {
          zh: '你通常以什么样的态度来到神面前？感谢和赞美如何改变你亲近神的方式？',
          en: 'What attitude do you usually bring when coming before God? How might thanksgiving and praise change the way you draw near to Him?',
        },
        prayer: {
          zh: '天父，我要称谢进入你的门，赞美进入你的院。感谢你容许我来到你面前。求你帮助我每天以感恩的心开始敬拜。奉主耶稣的名祷告，阿们。',
          en: 'Heavenly Father, I enter Your gates with thanksgiving and Your courts with praise. Thank You for allowing me into Your presence. Help me begin each day of worship with a grateful heart. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '诗篇 107:1',
          ref_en: 'Psalm 107:1',
          text_zh: '你们要称谢耶和华，因他本为善，他的慈爱永远长存！',
          text_en: 'O give thanks unto the LORD, for he is good: for his mercy endureth for ever.',
        },
        reflection: {
          zh: '感恩的根基在于神的本性——祂本为善，祂的慈爱永远长存。我们的感恩不是基于环境，而是基于神永不改变的良善和慈爱。',
          en: 'The foundation of gratitude lies in God\'s nature—He is good, and His steadfast love endures forever. Our thankfulness is not based on circumstances but on God\'s unchanging goodness and love.',
        },
        question: {
          zh: '回想你的人生，神的慈爱在哪些时刻显得格外真实？"他的慈爱永远长存"这句话如何坚固你的信心？',
          en: 'Looking back on your life, when has God\'s steadfast love felt especially real? How does "his steadfast love endures forever" strengthen your faith?',
        },
        prayer: {
          zh: '耶和华啊，我要称谢你，因你本为善！你的慈爱永远长存，从不改变。求你帮助我定睛在你的良善上，而不是环境的起伏。奉主耶稣的名祷告，阿们。',
          en: 'LORD, I give thanks to You, for You are good! Your steadfast love endures forever and never changes. Help me fix my eyes on Your goodness rather than on changing circumstances. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '歌罗西书 3:15',
          ref_en: 'Colossians 3:15',
          text_zh: '又要叫基督的平安在你们心里做主，你们也为此蒙召，归为一体；且要存感谢的心。',
          text_en: 'And let the peace of God rule in your hearts, to the which also ye are called in one body; and be ye thankful.',
        },
        reflection: {
          zh: '保罗将基督的平安与感恩联系在一起。当基督的平安做主，感恩自然流露；当我们存感谢的心，平安也更深地扎根在我们里面。',
          en: 'Paul links the peace of Christ with thankfulness. When Christ\'s peace rules, gratitude flows naturally; and when we cultivate thankfulness, peace takes deeper root within us.',
        },
        question: {
          zh: '基督的平安如何影响你的感恩之心？在你感到缺乏平安的时候，刻意感恩能否帮助你重新得着平安？',
          en: 'How does the peace of Christ influence your gratitude? When you lack peace, can intentional thankfulness help you regain it?',
        },
        prayer: {
          zh: '主耶稣，求你的平安在我心里做主。帮助我存感谢的心面对每一天，让平安与感恩一同充满我的生命。奉主耶稣的名祷告，阿们。',
          en: 'Lord Jesus, let Your peace rule in my heart. Help me face each day with a thankful heart, and fill my life with both peace and gratitude. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '诗篇 136:1',
          ref_en: 'Psalm 136:1',
          text_zh: '你们要称谢耶和华，因他本为善，他的慈爱永远长存。',
          text_en: 'O give thanks unto the LORD; for he is good: for his mercy endureth for ever.',
        },
        reflection: {
          zh: '诗篇136篇每一节都重复"他的慈爱永远长存"，提醒我们感恩不是一次性的，而是持续不断的回应。神的慈爱贯穿历史，也贯穿我们的一生。',
          en: 'Psalm 136 repeats "his steadfast love endures forever" in every verse, reminding us that gratitude is not a one-time act but a continual response. God\'s steadfast love runs through all of history and all of our lives.',
        },
        question: {
          zh: '诗篇136篇反复强调神的慈爱永远长存。你能列举生活中哪些事情体现了神持续不断的慈爱？',
          en: 'Psalm 136 repeatedly emphasizes that God\'s steadfast love endures forever. Can you list things in your life that reflect God\'s ongoing steadfast love?',
        },
        prayer: {
          zh: '主啊，你的慈爱永远长存！从我出生到今天，你的爱从未离开。我要不断称谢你，因为你的良善贯穿我生命的每一天。奉主耶稣的名祷告，阿们。',
          en: 'Lord, Your steadfast love endures forever! From the day I was born until now, Your love has never left me. I will continually give thanks, for Your goodness runs through every day of my life. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '歌罗西书 3:17',
          ref_en: 'Colossians 3:17',
          text_zh: '无论做什么，或说话、或行事，都要奉主耶稣的名，藉着他感谢父神。',
          text_en: 'And whatsoever ye do in word or deed, do all in the name of the Lord Jesus, giving thanks to God and the Father by him.',
        },
        reflection: {
          zh: '保罗教导我们，感恩不只是祷告时的事，而是贯穿一切言行的态度。无论说话或行事，都要藉着耶稣感谢父神，让感恩成为生活的底色。',
          en: 'Paul teaches that gratitude is not limited to prayer time but pervades all our words and deeds. Whatever we say or do, we give thanks to God the Father through Jesus, making gratitude the backdrop of our lives.',
        },
        question: {
          zh: '你如何在日常的言语和行为中活出感恩？有哪些具体的方式可以让你"藉着耶稣感谢父神"？',
          en: 'How can you live out gratitude in your everyday words and actions? What specific ways can you "give thanks to God the Father through Jesus"?',
        },
        prayer: {
          zh: '天父，求你帮助我无论做什么，说话或行事，都奉主耶稣的名，藉着祂感谢你。让感恩成为我生命中最自然的表达。奉主耶稣的名祷告，阿们。',
          en: 'Heavenly Father, help me in whatever I do, in word or deed, to do it in the name of the Lord Jesus, giving thanks to You through Him. Let gratitude become the most natural expression of my life. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '诗篇 103:2',
          ref_en: 'Psalm 103:2',
          text_zh: '我的心哪，你要称颂耶和华，不可忘记他的一切恩惠。',
          text_en: 'Bless the LORD, O my soul, and forget not all his benefits:',
        },
        reflection: {
          zh: '大卫提醒自己的心不可忘记神的一切恩惠。人很容易遗忘恩典，所以我们需要刻意地数算、记念神的恩惠，让感恩成为一种操练。',
          en: 'David reminds his own soul not to forget all God\'s benefits. We easily forget grace, so we must intentionally count and remember God\'s blessings, making gratitude a spiritual discipline.',
        },
        question: {
          zh: '你是否曾经忘记了神的恩惠？今天你能数算出哪些神给你的恩惠？',
          en: 'Have you ever forgotten God\'s benefits? What blessings from God can you count today?',
        },
        prayer: {
          zh: '我的心哪，你要称颂耶和华！主啊，求你帮助我不忘记你的一切恩惠。让我常常数算你的恩典，以感恩的心称颂你。奉主耶稣的名祷告，阿们。',
          en: 'Bless the LORD, O my soul! Lord, help me never forget all Your benefits. Let me continually count Your blessings and praise You with a grateful heart. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '腓立比书 4:6',
          ref_en: 'Philippians 4:6',
          text_zh: '应当一无挂虑，只要凡事藉着祷告、祈求和感谢，将你们所要的告诉神。',
          text_en: 'Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God.',
        },
        reflection: {
          zh: '保罗将感谢与祷告、祈求并列，教导我们在向神求告的同时要带着感恩。感恩是胜过忧虑的良药——当我们感谢神已经做的，就能信靠祂将要做的。',
          en: 'Paul places thanksgiving alongside prayer and supplication, teaching us to bring our requests to God with gratitude. Thankfulness is the antidote to anxiety—when we thank God for what He has done, we can trust Him for what He will do.',
        },
        question: {
          zh: '当你忧虑时，感恩如何帮助你将重担交给神？你能否在祈求的同时也数算神过去的恩典？',
          en: 'When you are anxious, how does gratitude help you hand your burdens to God? Can you count God\'s past blessings even as you bring your requests?',
        },
        prayer: {
          zh: '主啊，求你帮助我一无挂虑，凡事藉着祷告、祈求和感谢将我所要的告诉你。感谢你过去的信实，我相信你必继续引领我。奉主耶稣的名祷告，阿们。',
          en: 'Lord, help me not be anxious about anything, but in everything by prayer and supplication with thanksgiving make my requests known to You. Thank You for Your past faithfulness; I trust You will continue to lead me. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '诗篇 95:2',
          ref_en: 'Psalm 95:2',
          text_zh: '我们要来感谢他，用诗歌向他欢呼。',
          text_en: 'Let us come before his presence with thanksgiving, and make a joyful noise unto him with psalms.',
        },
        reflection: {
          zh: '诗人呼召我们以感谢和诗歌来到神面前。感恩不只是安静的默想，也可以用欢呼和歌唱来表达。喜乐的敬拜源于感恩的心。',
          en: 'The psalmist calls us to come before God with thanksgiving and songs of praise. Gratitude is not only quiet reflection—it can be expressed in joyful noise and singing. Joyful worship flows from a thankful heart.',
        },
        question: {
          zh: '你喜欢用什么方式表达对神的感恩？诗歌和欢呼如何丰富你的感恩生活？',
          en: 'How do you like to express your gratitude to God? How do songs and joyful praise enrich your life of thanksgiving?',
        },
        prayer: {
          zh: '主啊，我要来感谢你，用诗歌向你欢呼！求你赐我喜乐的心，让我的敬拜充满感恩和赞美。奉主耶稣的名祷告，阿们。',
          en: 'Lord, I come into Your presence with thanksgiving and make a joyful noise to You with songs of praise! Give me a joyful heart and fill my worship with gratitude and praise. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '雅各书 1:17',
          ref_en: 'James 1:17',
          text_zh: '各样美善的恩赐和各样全备的赏赐都是从上头来的，从众光之父那里降下来的，在他并没有改变，也没有转动的影儿。',
          text_en: 'Every good gift and every perfect gift is from above, and cometh down from the Father of lights, with whom is no variableness, neither shadow of turning.',
        },
        reflection: {
          zh: '雅各提醒我们，一切美善的恩赐都从天父而来。认识到每一个好处的源头是神，我们就不会将恩典视为理所当然，而是以感恩回应。',
          en: 'James reminds us that every good and perfect gift comes from the Father above. Recognizing God as the source of every blessing keeps us from taking grace for granted and moves us to respond with gratitude.',
        },
        question: {
          zh: '你生活中有哪些美善的恩赐是你可能忽略了的？知道这一切都从天父而来，如何改变你的心态？',
          en: 'What good gifts in your life might you have overlooked? How does knowing they all come from the Father change your perspective?',
        },
        prayer: {
          zh: '众光之父啊，感谢你赐下各样美善的恩赐和全备的赏赐。你永不改变，你的恩典每天都是新的。求你开我的眼，看见你丰富的供应。奉主耶稣的名祷告，阿们。',
          en: 'Father of lights, thank You for every good and perfect gift that comes from You. You never change, and Your grace is new every day. Open my eyes to see Your abundant provision. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '歌罗西书 2:7',
          ref_en: 'Colossians 2:7',
          text_zh: '在他里面生根建造，信心坚固，正如你们所领的教训，感谢的心也更增长了。',
          text_en: 'Rooted and built up in him, and stablished in the faith, as ye have been taught, abounding therein with thanksgiving.',
        },
        reflection: {
          zh: '保罗指出，当我们在基督里生根建造、信心坚固时，感恩的心也会自然增长。感恩是属灵成熟的标志——我们越认识基督，就越充满感谢。',
          en: 'Paul points out that as we are rooted and built up in Christ with firm faith, thanksgiving naturally abounds. Gratitude is a mark of spiritual maturity—the more we know Christ, the more thankful we become.',
        },
        question: {
          zh: '你觉得自己在基督里的根基是否稳固？你的感恩之心是否随着信心的成长而增长？',
          en: 'Do you feel your roots in Christ are firm? Has your thankfulness grown as your faith has matured?',
        },
        prayer: {
          zh: '主啊，求你帮助我在你里面生根建造，信心坚固。愿我的感恩之心随着我对你的认识不断增长，使我的生命满溢感谢。奉主耶稣的名祷告，阿们。',
          en: 'Lord, help me be rooted and built up in You with firm faith. May my thankfulness grow as I know You more, and may my life abound in thanksgiving. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '诗篇 69:30',
          ref_en: 'Psalm 69:30',
          text_zh: '我要以诗歌赞美神的名，以感谢称他为大。',
          text_en: 'I will praise the name of God with a song, and will magnify him with thanksgiving.',
        },
        reflection: {
          zh: '大卫在苦难中选择以诗歌和感谢赞美神。即使处境艰难，感恩的赞美能使神的名被尊为大，也能转化我们的心境。',
          en: 'David chooses to praise God with song and thanksgiving even in suffering. Even in difficult circumstances, thankful praise magnifies God\'s name and transforms our inner state.',
        },
        question: {
          zh: '你是否曾在困难中用感恩和诗歌来赞美神？那样的经历如何改变了你？',
          en: 'Have you ever praised God with thanksgiving and song in the midst of difficulty? How did that experience change you?',
        },
        prayer: {
          zh: '主啊，我要以诗歌赞美你的名，以感谢称你为大。即使在困难中，求你帮助我仍然选择感恩的赞美。奉主耶稣的名祷告，阿们。',
          en: 'Lord, I will praise Your name with a song and magnify You with thanksgiving. Even in difficulty, help me still choose thankful praise. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '提摩太前书 4:4-5',
          ref_en: '1 Timothy 4:4-5',
          text_zh: '凡神所造的物都是好的，若感谢着领受，就没有一样可弃的，都因神的道和人的祈求成为圣洁了。',
          text_en: 'For every creature of God is good, and nothing to be refused, if it be received with thanksgiving: For it is sanctified by the word of God and prayer.',
        },
        reflection: {
          zh: '保罗教导我们，神所造的一切都是好的，关键在于我们是否以感恩的心领受。感恩的态度使日常生活中的一切——食物、工作、关系——都成为圣洁。',
          en: 'Paul teaches that everything God created is good; the key is whether we receive it with thanksgiving. A grateful attitude sanctifies everything in daily life—food, work, relationships—making them holy.',
        },
        question: {
          zh: '你是否以感恩的心领受神赐给你的日常事物？感恩如何使平凡的事物变得神圣？',
          en: 'Do you receive God\'s everyday gifts with thanksgiving? How does gratitude make ordinary things sacred?',
        },
        prayer: {
          zh: '天父，感谢你所造的一切都是好的。帮助我以感恩的心领受每一样恩赐，让我的生活因感恩和祈求而成为圣洁。奉主耶稣的名祷告，阿们。',
          en: 'Heavenly Father, thank You that everything You created is good. Help me receive every gift with thanksgiving, and let my life be made holy through gratitude and prayer. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '以弗所书 5:20',
          ref_en: 'Ephesians 5:20',
          text_zh: '凡事要奉我们主耶稣基督的名常常感谢父神。',
          text_en: 'Giving thanks always for all things unto God and the Father in the name of our Lord Jesus Christ;',
        },
        reflection: {
          zh: '保罗呼召我们"常常"和"凡事"感谢父神。这不是偶尔的感恩，而是持续不断的生活方式——奉耶稣基督的名，在一切事上感谢天父。',
          en: 'Paul calls us to give thanks "always" and "for everything" to God the Father. This is not occasional gratitude but a continual way of life—giving thanks in all things in the name of our Lord Jesus Christ.',
        },
        question: {
          zh: '"常常感谢"和"凡事感谢"对你来说意味着什么？你如何在日常生活中实践这种持续的感恩？',
          en: 'What does it mean to you to give thanks "always" and "for everything"? How can you practice this continual gratitude in daily life?',
        },
        prayer: {
          zh: '父神啊，我要奉主耶稣基督的名常常感谢你。无论遇到什么，求你帮助我凡事感恩，让感谢成为我生命的呼吸。奉主耶稣的名祷告，阿们。',
          en: 'God the Father, I give thanks to You always in the name of our Lord Jesus Christ. Whatever I face, help me give thanks for everything, making gratitude the very breath of my life. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '希伯来书 13:15',
          ref_en: 'Hebrews 13:15',
          text_zh: '我们应当靠着耶稣，常常以颂赞为祭献给神，这就是那承认主名之人嘴唇的果子。',
          text_en: 'By him therefore let us offer the sacrifice of praise to God continually, that is, the fruit of our lips giving thanks to his name.',
        },
        reflection: {
          zh: '希伯来书将感恩的赞美比作献给神的祭。靠着耶稣，我们不再需要牲畜为祭，而是以嘴唇的果子——感恩与颂赞——来敬拜神。这是新约信徒最美的祭。',
          en: 'Hebrews compares thankful praise to a sacrifice offered to God. Through Jesus, we no longer need animal sacrifices but worship God with the fruit of our lips—gratitude and praise. This is the most beautiful offering of New Testament believers.',
        },
        question: {
          zh: '你如何理解"以颂赞为祭"？在什么时候赞美对你来说最像一种牺牲？',
          en: 'How do you understand "a sacrifice of praise"? When does praise feel most like a sacrifice to you?',
        },
        prayer: {
          zh: '主啊，我要靠着耶稣常常以颂赞为祭献给你。求你帮助我的嘴唇结出感恩的果子，承认你的名，荣耀你的圣名。奉主耶稣的名祷告，阿们。',
          en: 'Lord, through Jesus I continually offer up a sacrifice of praise to You. Help the fruit of my lips acknowledge Your name and glorify You. In Jesus\' name, amen.',
        },
      },
    ],
  },
  {
    id: 'gods-love',
    name_zh: '神的爱',
    name_en: 'God\'s Love',
    icon: '❤️',
    hymnKeywords: ['爱', '慈爱', 'love', 'grace'],
    devotionals: [
      {
        scripture: {
          ref_zh: '约翰福音 3:16',
          ref_en: 'John 3:16',
          text_zh: '神爱世人，甚至将他的独生子赐给他们，叫一切信他的，不至灭亡，反得永生。',
          text_en: 'For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.',
        },
        reflection: {
          zh: '这是圣经中最著名的经文之一，揭示了神爱的深度——祂将独生子赐给我们。神的爱不是抽象的概念，而是以耶稣基督的生命为代价的具体行动。',
          en: 'This is one of the most famous verses in Scripture, revealing the depth of God\'s love—He gave His only Son for us. God\'s love is not an abstract concept but a concrete action that cost the life of Jesus Christ.',
        },
        question: {
          zh: '"神爱世人，甚至将他的独生子赐给他们"——这句话对你个人意味着什么？你如何回应如此大的爱？',
          en: '"God so loved the world, that he gave his only Son"—what does this mean to you personally? How do you respond to such great love?',
        },
        prayer: {
          zh: '天父，感谢你爱世人，甚至将你的独生子赐给我们。这份爱超过我所能理解的。求你帮助我深深领受这份爱，并将它分享给周围的人。奉主耶稣的名祷告，阿们。',
          en: 'Heavenly Father, thank You for loving the world so much that You gave Your only Son. This love surpasses my understanding. Help me receive it deeply and share it with those around me. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '罗马书 8:38-39',
          ref_en: 'Romans 8:38-39',
          text_zh: '因为我深信无论是死，是生，是天使，是掌权的，是有能的，是现在的事，是将来的事，是高处的，是低处的，是别的受造之物，都不能叫我们与神的爱隔绝；这爱是在我们的主基督耶稣里的。',
          text_en: 'For I am persuaded, that neither death, nor life, nor angels, nor principalities, nor powers, nor things present, nor things to come, Nor height, nor depth, nor any other creature, shall be able to separate us from the love of God, which is in Christ Jesus our Lord.',
        },
        reflection: {
          zh: '保罗列举了一切可能的力量——死亡、生命、天使、掌权者——没有任何事物能使我们与神在基督里的爱隔绝。这是何等坚定不移的爱！',
          en: 'Paul lists every conceivable power—death, life, angels, rulers—and declares that nothing can separate us from God\'s love in Christ. What unshakable, immovable love this is!',
        },
        question: {
          zh: '你是否曾感觉与神的爱隔绝？这段经文如何回应你的恐惧和疑虑？',
          en: 'Have you ever felt separated from God\'s love? How does this passage address your fears and doubts?',
        },
        prayer: {
          zh: '主啊，感谢你，没有任何事物能叫我与你的爱隔绝。无论是死是生，是现在是将来，你的爱在基督耶稣里永远不变。求你坚固我的信心。奉主耶稣的名祷告，阿们。',
          en: 'Lord, thank You that nothing can separate me from Your love. Whether death or life, present or future, Your love in Christ Jesus never changes. Strengthen my faith in this truth. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '约翰一书 4:19',
          ref_en: '1 John 4:19',
          text_zh: '我们爱，因为神先爱我们。',
          text_en: 'We love him, because he first loved us.',
        },
        reflection: {
          zh: '约翰揭示了爱的源头——不是我们先爱神，而是神先爱我们。我们一切爱的能力都源于神主动的、先行的爱。',
          en: 'John reveals the source of love—not that we loved God first, but that He first loved us. All our capacity to love originates from God\'s initiative, His preemptive love.',
        },
        question: {
          zh: '知道"神先爱我们"如何改变你爱人的方式？你如何在日常生活中传递神先行的爱？',
          en: 'How does knowing "he first loved us" change the way you love others? How can you pass on God\'s preemptive love in daily life?',
        },
        prayer: {
          zh: '天父，感谢你先爱了我们。你的爱是一切爱的源头。求你帮助我因着你的爱去爱身边的人，让你的爱透过我流淌出去。奉主耶稣的名祷告，阿们。',
          en: 'Heavenly Father, thank You for loving us first. Your love is the source of all love. Help me love those around me because of Your love, and let Your love flow through me. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '约翰一书 4:9-10',
          ref_en: '1 John 4:9-10',
          text_zh: '神差他独生子到世间来，使我们藉着他得生，神爱我们的心在此就显明了。不是我们爱神，乃是神爱我们，差他的儿子为我们的罪作了挽回祭，这就是爱了。',
          text_en: 'In this was manifested the love of God toward us, because that God sent his only begotten Son into the world, that we might live through him. Herein is love, not that we loved God, but that he loved us, and sent his Son to be the propitiation for our sins.',
        },
        reflection: {
          zh: '神的爱不是空洞的话语，而是藉着差遣独生子为我们的罪作挽回祭显明出来的。这就是爱的定义——不是我们爱神，而是神主动爱我们。',
          en: 'God\'s love is not empty words but was made manifest by sending His only Son as the propitiation for our sins. This is the definition of love—not that we loved God, but that He loved us first.',
        },
        question: {
          zh: '约翰说"这就是爱了"——神差祂的儿子为我们的罪作挽回祭。这个爱的定义如何挑战你对爱的理解？',
          en: 'John says "this is love"—God sent His Son as the propitiation for our sins. How does this definition of love challenge your understanding of love?',
        },
        prayer: {
          zh: '主啊，感谢你差遣独生子到世间来，为我们的罪作了挽回祭。这就是爱！求你帮助我深深领受这份爱，也活出这份爱。奉主耶稣的名祷告，阿们。',
          en: 'Lord, thank You for sending Your only Son into the world to be the propitiation for our sins. This is love! Help me receive this love deeply and live it out. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '罗马书 5:8',
          ref_en: 'Romans 5:8',
          text_zh: '惟有基督在我们还作罪人的时候为我们死，神的爱就在此向我们显明了。',
          text_en: 'But God commendeth his love toward us, in that, while we were yet sinners, Christ died for us.',
        },
        reflection: {
          zh: '神的爱最惊人之处在于——祂不是等我们变好了才爱我们，而是在我们还作罪人的时候，基督就为我们死了。这是无条件的、主动的爱。',
          en: 'The most astonishing aspect of God\'s love is this: He did not wait for us to become good before loving us. While we were still sinners, Christ died for us. This is unconditional, proactive love.',
        },
        question: {
          zh: '"在我们还作罪人的时候"——这个时间点为什么如此重要？神的爱不附带条件，这如何影响你看待自己和他人？',
          en: '"While we were still sinners"—why is this timing so significant? How does God\'s unconditional love affect how you see yourself and others?',
        },
        prayer: {
          zh: '天父，感谢你在我还作罪人的时候就差基督为我死。你的爱不附带条件，不等我变好。求你帮助我以同样无条件的爱去对待身边的人。奉主耶稣的名祷告，阿们。',
          en: 'Heavenly Father, thank You for showing Your love by sending Christ to die for me while I was still a sinner. Your love has no conditions. Help me extend the same unconditional love to others. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '以弗所书 2:4-5',
          ref_en: 'Ephesians 2:4-5',
          text_zh: '然而神既有丰富的怜悯，因他爱我们的大爱，当我们死在过犯中的时候，便叫我们与基督一同活过来（你们得救是本乎恩）。',
          text_en: 'But God, who is rich in mercy, for his great love wherewith he loved us, Even when we were dead in sins, hath quickened us together with Christ, (by grace ye are saved;)',
        },
        reflection: {
          zh: '保罗描绘了我们属灵的真实光景——死在过犯中。然而神因着祂丰富的怜悯和大爱，叫我们与基督一同活过来。从死到生，全是恩典。',
          en: 'Paul paints our true spiritual condition—dead in trespasses. Yet God, rich in mercy and great love, made us alive together with Christ. From death to life—all by grace.',
        },
        question: {
          zh: '从"死在过犯中"到"与基督一同活过来"，这个转变全因神的大爱。你如何经历了这份使人活过来的爱？',
          en: 'The transformation from "dead in trespasses" to "alive together with Christ" is entirely because of God\'s great love. How have you experienced this life-giving love?',
        },
        prayer: {
          zh: '主啊，感谢你丰富的怜悯和大爱。当我死在过犯中的时候，你叫我与基督一同活过来。这救恩全是本乎恩。我要永远感谢你。奉主耶稣的名祷告，阿们。',
          en: 'Lord, thank You for Your rich mercy and great love. When I was dead in my trespasses, You made me alive together with Christ. This salvation is by grace alone. I will thank You forever. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '耶利米书 31:3',
          ref_en: 'Jeremiah 31:3',
          text_zh: '古时耶和华向以色列显现，说："我以永远的爱爱你，因此我以慈爱吸引你。"',
          text_en: 'The LORD hath appeared of old unto me, saying, Yea, I have loved thee with an everlasting love: therefore with lovingkindness have I drawn thee.',
        },
        reflection: {
          zh: '神对祂子民的爱是"永远的爱"——没有起点，没有终点。祂以慈爱吸引我们，不是强迫，而是温柔地引领。这份永远的爱是我们最深的安全感。',
          en: 'God\'s love for His people is "everlasting love"—without beginning or end. He draws us with faithfulness, not by force but by gentle leading. This everlasting love is our deepest security.',
        },
        question: {
          zh: '你如何感受到神以慈爱吸引你？"永远的爱"这个概念如何影响你对未来的盼望？',
          en: 'How have you felt God drawing you with His faithfulness? How does the concept of "everlasting love" shape your hope for the future?',
        },
        prayer: {
          zh: '耶和华啊，感谢你以永远的爱爱我，以慈爱吸引我。你的爱没有尽头，永不改变。求你继续以你的爱引领我的一生。奉主耶稣的名祷告，阿们。',
          en: 'LORD, thank You for loving me with an everlasting love and drawing me with Your faithfulness. Your love has no end and never changes. Continue to lead my life with Your love. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '诗篇 103:11',
          ref_en: 'Psalm 103:11',
          text_zh: '天离地何等的高，他的慈爱向敬畏他的人也是何等的大。',
          text_en: 'For as the heaven is high above the earth, so great is his mercy toward them that fear him.',
        },
        reflection: {
          zh: '大卫用天与地之间无法丈量的距离来形容神慈爱的广大。神对敬畏祂之人的爱，超越一切衡量和想象。',
          en: 'David uses the immeasurable distance between heaven and earth to describe the vastness of God\'s steadfast love. God\'s love for those who fear Him surpasses all measurement and imagination.',
        },
        question: {
          zh: '天离地何等的高——你能想象神的慈爱有多大吗？这份超越想象的爱如何给你安慰和力量？',
          en: 'As high as the heavens are above the earth—can you imagine how great God\'s love is? How does this love beyond imagination give you comfort and strength?',
        },
        prayer: {
          zh: '主啊，你的慈爱何等浩大，如天离地那样高！我虽不能完全理解，但我深深感恩。求你帮助我敬畏你，住在你广大的慈爱中。奉主耶稣的名祷告，阿们。',
          en: 'Lord, Your steadfast love is so great—as high as the heavens are above the earth! Though I cannot fully comprehend it, I am deeply grateful. Help me fear You and dwell in Your vast love. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '西番雅书 3:17',
          ref_en: 'Zephaniah 3:17',
          text_zh: '耶和华你的神是施行拯救、大有能力的主，他在你中间必因你欢欣喜乐，默然爱你，且因你喜乐而欢呼。',
          text_en: 'The LORD thy God in the midst of thee is mighty; he will save, he will rejoice over thee with joy; he will rest in his love, he will joy over thee with singing.',
        },
        reflection: {
          zh: '这节经文描绘了一幅令人惊叹的画面——全能的神因我们欢欣喜乐，默然爱我们，甚至因我们欢呼歌唱。神不是冷漠的旁观者，而是一位对祂儿女充满热情之爱的父。',
          en: 'This verse paints an astonishing picture—the Almighty God rejoices over us with gladness, quiets us with His love, and even exults over us with loud singing. God is not a distant observer but a Father overflowing with passionate love for His children.',
        },
        question: {
          zh: '你能想象神因你而欢呼歌唱吗？这幅画面如何改变你对神的认识？',
          en: 'Can you imagine God singing joyfully over you? How does this picture change your understanding of God?',
        },
        prayer: {
          zh: '天父，感谢你在我中间，因我欢欣喜乐，默然爱我，因我而欢呼。这份爱太奇妙了！求你帮助我安息在你的爱中。奉主耶稣的名祷告，阿们。',
          en: 'Heavenly Father, thank You for being in my midst, rejoicing over me with gladness, quieting me with Your love, and exulting over me with singing. This love is too wonderful! Help me rest in Your love. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '哥林多前书 13:4-7',
          ref_en: '1 Corinthians 13:4-7',
          text_zh: '爱是恒久忍耐，又有恩慈；爱是不嫉妒，爱是不自夸，不张狂，不做害羞的事，不求自己的益处，不轻易发怒，不计算人的恶，不喜欢不义，只喜欢真理；凡事包容，凡事相信，凡事盼望，凡事忍耐。',
          text_en: 'Charity suffereth long, and is kind; charity envieth not; charity vaunteth not itself, is not puffed up, Doth not behave itself unseemly, seeketh not her own, is not easily provoked, thinketh no evil; Rejoiceth not in iniquity, but rejoiceth in the truth; Beareth all things, believeth all things, hopeth all things, endureth all things.',
        },
        reflection: {
          zh: '这段经文是爱的完美画像，也是神之爱的写照。神对我们恒久忍耐、满有恩慈、凡事包容、凡事盼望。当我们读到这些描述，看见的正是神爱我们的方式。',
          en: 'This passage is the perfect portrait of love and a picture of God\'s love for us. God is patient and kind toward us, bears all things, hopes all things. When we read these descriptions, we see exactly how God loves us.',
        },
        question: {
          zh: '将这段经文中的"爱"替换成"神"来读——你对神的爱有什么新的认识？你如何将这种爱活出来？',
          en: 'Read this passage replacing "love" with "God"—what new insight do you gain about God\'s love? How can you live out this kind of love?',
        },
        prayer: {
          zh: '主啊，感谢你的爱是恒久忍耐、又有恩慈的。你不轻易发怒，不计算我的恶，凡事包容、凡事盼望。求你帮助我效法你的爱去爱人。奉主耶稣的名祷告，阿们。',
          en: 'Lord, thank You that Your love is patient and kind. You are not irritable or resentful; You bear all things and hope all things. Help me imitate Your love in loving others. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '约翰福音 15:13',
          ref_en: 'John 15:13',
          text_zh: '人为朋友舍命，人的爱心没有比这个大的。',
          text_en: 'Greater love hath no man than this, that a man lay down his life for his friends.',
        },
        reflection: {
          zh: '耶稣说最大的爱是为朋友舍命——而祂自己正是这样做了。十字架是爱的最高表达，耶稣为我们付出了最大的代价。',
          en: 'Jesus says the greatest love is to lay down one\'s life for friends—and He Himself did exactly that. The cross is the ultimate expression of love; Jesus paid the highest price for us.',
        },
        question: {
          zh: '耶稣为你舍命，这是最大的爱。你如何回应这份舍命的爱？你愿意为他人付出什么样的代价？',
          en: 'Jesus laid down His life for you—the greatest love. How do you respond to this sacrificial love? What are you willing to sacrifice for others?',
        },
        prayer: {
          zh: '主耶稣，感谢你为我舍命，这是人间最大的爱。求你帮助我以舍己的心去爱人，效法你牺牲的榜样。奉主耶稣的名祷告，阿们。',
          en: 'Lord Jesus, thank You for laying down Your life for me—the greatest love of all. Help me love others with a selfless heart, following Your example of sacrifice. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '约翰一书 4:10',
          ref_en: '1 John 4:10',
          text_zh: '不是我们爱神，乃是神爱我们，差他的儿子为我们的罪作了挽回祭，这就是爱了。',
          text_en: 'Herein is love, not that we loved God, but that he loved us, and sent his Son to be the propitiation for our sins.',
        },
        reflection: {
          zh: '约翰再次强调爱的本质：不在于我们对神的爱，而在于神对我们的爱。祂差遣儿子作挽回祭，主动解决了我们罪的问题。爱的主动权永远在神那里。',
          en: 'John again emphasizes the essence of love: it is not about our love for God but His love for us. He sent His Son as the propitiation, proactively solving our sin problem. The initiative of love always belongs to God.',
        },
        question: {
          zh: '为什么约翰一再强调"不是我们爱神，乃是神爱我们"？这个顺序为什么如此重要？',
          en: 'Why does John repeatedly stress "not that we have loved God but that he loved us"? Why is this order so important?',
        },
        prayer: {
          zh: '主啊，感谢你主动爱我们，差你的儿子为我们的罪作了挽回祭。这就是爱了！求你帮助我永远记得爱的源头是你。奉主耶稣的名祷告，阿们。',
          en: 'Lord, thank You for taking the initiative to love us and sending Your Son to be the propitiation for our sins. This is love! Help me always remember that the source of love is You. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '约翰一书 3:1',
          ref_en: '1 John 3:1',
          text_zh: '你看父赐给我们是何等的慈爱，使我们得称为神的儿女；我们也真是他的儿女。世人所以不认识我们，是因未曾认识他。',
          text_en: 'Behold, what manner of love the Father hath bestowed upon us, that we should be called the sons of God: therefore the world knoweth us not, because it knew him not.',
        },
        reflection: {
          zh: '约翰惊叹父神赐给我们的慈爱——使我们得称为神的儿女！这不只是一个称号，而是真实的身份。我们真是神的儿女，这是何等尊贵的爱。',
          en: 'John marvels at the love the Father has given us—that we should be called children of God! This is not just a title but a real identity. We truly are God\'s children—what a precious love.',
        },
        question: {
          zh: '你是否真正意识到自己是"神的儿女"？这个身份如何影响你的自我认识和日常生活？',
          en: 'Do you truly realize you are a "child of God"? How does this identity affect your self-understanding and daily life?',
        },
        prayer: {
          zh: '天父，感谢你赐给我们何等的慈爱，使我得称为你的儿女。我真是你的孩子！求你帮助我活出这个尊贵的身份，彰显你的爱。奉主耶稣的名祷告，阿们。',
          en: 'Heavenly Father, thank You for the kind of love You have given, that I should be called Your child. I truly am Your child! Help me live out this precious identity and reflect Your love. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '以弗所书 3:17-19',
          ref_en: 'Ephesians 3:17-19',
          text_zh: '使基督因你们的信住在你们心里，叫你们的爱心有根有基，能以和众圣徒一同明白基督的爱是何等长阔高深；并知道这爱是过于人所能测度的，便叫神一切所充满的充满了你们。',
          text_en: 'That Christ may dwell in your hearts by faith; that ye, being rooted and grounded in love, May be able to comprehend with all saints what is the breadth, and length, and depth, and height; And to know the love of Christ, which passeth knowledge, that ye might be filled with all the fulness of God.',
        },
        reflection: {
          zh: '保罗为信徒祷告，求他们能明白基督的爱是何等长阔高深——这爱过于人所能测度。当我们被这爱充满，就被神一切的丰盛所充满。',
          en: 'Paul prays for believers to comprehend the breadth, length, height, and depth of Christ\'s love—a love that surpasses knowledge. When we are filled with this love, we are filled with all the fullness of God.',
        },
        question: {
          zh: '基督的爱是何等长阔高深——你在哪个维度上最需要更深的体验？这份"过于人所能测度"的爱如何改变你？',
          en: 'The love of Christ has breadth, length, height, and depth—in which dimension do you most need a deeper experience? How does this love that "surpasses knowledge" change you?',
        },
        prayer: {
          zh: '主啊，求你使基督因信住在我心里，叫我的爱心有根有基。求你帮助我明白基督的爱是何等长阔高深，虽过于人所能测度，却真实地充满我。奉主耶稣的名祷告，阿们。',
          en: 'Lord, let Christ dwell in my heart through faith, rooted and grounded in love. Help me comprehend the breadth, length, height, and depth of Christ\'s love, and though it surpasses knowledge, let it truly fill me. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '约翰一书 4:8',
          ref_en: '1 John 4:8',
          text_zh: '没有爱心的，就不认识神，因为神就是爱。',
          text_en: 'He that loveth not knoweth not God; for God is love.',
        },
        reflection: {
          zh: '约翰做出了圣经中最深刻的宣告之一——"神就是爱"。爱不只是神的属性之一，而是神的本质。认识神，就是认识爱；经历爱，就是经历神。',
          en: 'John makes one of the most profound declarations in Scripture—"God is love." Love is not just one of God\'s attributes but His very essence. To know God is to know love; to experience love is to experience God.',
        },
        question: {
          zh: '"神就是爱"——这句话如何塑造你对神的整体认识？如果神的本质就是爱，这对你的生活意味着什么？',
          en: '"God is love"—how does this shape your overall understanding of God? If God\'s very nature is love, what does this mean for your life?',
        },
        prayer: {
          zh: '主啊，你就是爱！你的本质就是爱。求你帮助我更深地认识你，也更深地活在爱中。愿我因认识你而成为一个有爱的人。奉主耶稣的名祷告，阿们。',
          en: 'Lord, You are love! Love is Your very nature. Help me know You more deeply and live more fully in love. May knowing You make me a person of love. In Jesus\' name, amen.',
        },
      },
    ],
  },
];
