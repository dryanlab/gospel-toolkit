interface Scripture { ref_zh: string; ref_en: string; text_zh: string; text_en: string; }
interface BilingualText { zh: string; en: string; }
interface DevotionalUnit { scripture: Scripture; reflection: BilingualText; question: BilingualText; prayer: BilingualText; }
interface AltarTheme { id: string; name_zh: string; name_en: string; icon: string; devotionals: DevotionalUnit[]; hymnKeywords: string[]; }

export const themesB1: AltarTheme[] = [
  {
    id: 'creation',
    name_zh: '创造与神的属性',
    name_en: 'Creation & God\'s Attributes',
    icon: '🌍',
    hymnKeywords: ['创造', '全能', 'creation', 'almighty'],
    devotionals: [
      {
        scripture: {
          ref_zh: '创世记 1:1',
          ref_en: 'Genesis 1:1',
          text_zh: '起初，神创造天地。',
          text_en: 'In the beginning God created the heaven and the earth.',
        },
        reflection: {
          zh: '圣经的第一句话就宣告了一个伟大的真理：神是万有的源头。"起初"说明神在时间之前就已存在；"创造"表明祂拥有无限的能力；"天地"涵盖了一切受造之物。这位创造天地的神，也是我们的天父。',
          en: 'The very first sentence of the Bible declares a profound truth: God is the source of all things. "In the beginning" tells us God existed before time itself; "created" reveals His limitless power; "the heavens and the earth" encompasses all of creation. This God who created heaven and earth is also our heavenly Father.',
        },
        question: {
          zh: '当你仰望星空或欣赏大自然时，你是否感受到造物主的伟大？这如何影响你对神的信心？',
          en: 'When you gaze at the stars or enjoy nature, do you sense the greatness of the Creator? How does this strengthen your faith in God?',
        },
        prayer: {
          zh: '创造天地的主，感谢祢从无到有地创造了这奇妙的世界。求祢开我们的眼睛，让我们在受造之物中看见祢的荣耀和大能。奉主耶稣的名祷告，阿们。',
          en: 'Lord, Creator of heaven and earth, thank You for bringing this wonderful world into existence from nothing. Open our eyes to see Your glory and power in all of creation. In Jesus\' name we pray, Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '创世记 1:3-4',
          ref_en: 'Genesis 1:3-4',
          text_zh: '神说："要有光"，就有了光。神看光是好的，就把光暗分开了。',
          text_en: 'And God said, Let there be light: and there was light. And God saw the light, that it was good: and God divided the light from the darkness.',
        },
        reflection: {
          zh: '神用话语创造了光，彰显了祂话语的大能。祂只需说一句，光便存在。神也将光暗分开，表明祂是秩序的神。在我们生命中，神的话语同样能驱散黑暗，带来光明与盼望。',
          en: 'God created light by His word, demonstrating the power of His speech. He merely spoke, and light came into existence. He also separated light from darkness, showing He is a God of order. In our lives, God\'s word can likewise dispel darkness and bring light and hope.',
        },
        question: {
          zh: '你生命中有哪些"黑暗"需要神的光来照亮？你愿意让神的话语进入那些地方吗？',
          en: 'What areas of "darkness" in your life need God\'s light? Are you willing to let God\'s word enter those places?',
        },
        prayer: {
          zh: '全能的神，祢说有光就有了光。求祢的话语也照进我们心中的黑暗，赐给我们智慧和方向。愿祢的光引导我们的脚步。奉主耶稣的名祷告，阿们。',
          en: 'Almighty God, You spoke and light appeared. Let Your word also shine into the darkness of our hearts, granting us wisdom and direction. May Your light guide our steps. In Jesus\' name we pray, Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '创世记 1:27',
          ref_en: 'Genesis 1:27',
          text_zh: '神就照着自己的形像造人，乃是照着他的形像造男造女。',
          text_en: 'So God created man in his own image, in the image of God created he him; male and female created he them.',
        },
        reflection: {
          zh: '人是按照神的形像被造的，这赋予了每一个人无比的尊严和价值。不论年龄、种族、地位，每个人都承载着神的形像。这也意味着我们被造是为了反映神的荣耀，与祂建立亲密的关系。',
          en: 'Humans were created in God\'s image, giving every person immeasurable dignity and worth. Regardless of age, race, or status, every person bears God\'s image. This also means we were created to reflect God\'s glory and to have an intimate relationship with Him.',
        },
        question: {
          zh: '知道自己是按神的形像被造的，这如何改变你看待自己和他人的方式？',
          en: 'How does knowing you are made in God\'s image change the way you see yourself and others?',
        },
        prayer: {
          zh: '亲爱的天父，感谢祢按照祢的形像造了我们，赐给我们尊贵的身份。求祢帮助我们也以祢的眼光去看每一个人，尊重和爱护祢所创造的生命。奉主耶稣的名祷告，阿们。',
          en: 'Dear heavenly Father, thank You for creating us in Your image and giving us a precious identity. Help us to see every person through Your eyes, respecting and caring for the lives You have created. In Jesus\' name we pray, Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '创世记 1:31',
          ref_en: 'Genesis 1:31',
          text_zh: '神看着一切所造的都甚好。有晚上，有早晨，是第六日。',
          text_en: 'And God saw every thing that he had made, and, behold, it was very good. And the evening and the morning were the sixth day.',
        },
        reflection: {
          zh: '神审视祂一切的创造，宣告"甚好"。这不仅是"好"，而是"甚好"——完美无瑕。神的创造反映了祂的智慧与美善。虽然罪进入了世界，但神对祂创造的心意始终是美好的，祂也在基督里使万物更新。',
          en: 'God surveyed all He had made and declared it "very good" — not merely good, but very good, perfect and flawless. God\'s creation reflects His wisdom and goodness. Though sin entered the world, God\'s intention for His creation remains beautiful, and He is making all things new in Christ.',
        },
        question: {
          zh: '你是否曾因生活的困难而忘记神创造的美好？今天你能在哪里重新发现神"甚好"的创造？',
          en: 'Have life\'s difficulties ever caused you to forget the goodness of God\'s creation? Where can you rediscover God\'s "very good" creation today?',
        },
        prayer: {
          zh: '美善的神，祢所造的一切都甚好。即使这个世界被罪所玷污，我们仍然相信祢美好的心意。求祢帮助我们在日常生活中看见祢的美善，并为此感恩。奉主耶稣的名祷告，阿们。',
          en: 'Good and gracious God, everything You made is very good. Even though this world is marred by sin, we still trust in Your good intentions. Help us see Your goodness in daily life and give thanks for it. In Jesus\' name we pray, Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '创世记 2:2-3',
          ref_en: 'Genesis 2:2-3',
          text_zh: '到第七日，神造物的工已经完毕，就在第七日歇了他一切的工，安息了。神赐福给第七日，定为圣日，因为在这日神歇了他一切创造的工，就安息了。',
          text_en: 'And on the seventh day God ended his work which he had made; and he rested on the seventh day from all his work which he had made. And God blessed the seventh day, and sanctified it: because that in it he had rested from all his work which God created and made.',
        },
        reflection: {
          zh: '神并非因疲倦而安息，乃是因工作完毕而安息。祂设立安息日，为人类立下了工作与休息的节奏。安息不是懒惰，而是信靠——相信神掌管一切，我们不需要不停地忙碌。在基督里，我们找到了真正的安息。',
          en: 'God did not rest because He was tired, but because His work was complete. He established the Sabbath, setting a rhythm of work and rest for humanity. Rest is not laziness but trust — trusting that God is in control and we don\'t need to be constantly busy. In Christ, we find true rest.',
        },
        question: {
          zh: '你的生活中有足够的安息吗？什么拦阻你停下来，安静在神面前？',
          en: 'Do you have enough rest in your life? What prevents you from stopping and being still before God?',
        },
        prayer: {
          zh: '赐安息的主，感谢祢不仅创造了工作，也创造了安息。求祢帮助我们学会放下忙碌，在祢面前安静，享受祢所赐的平安与更新。奉主耶稣的名祷告，阿们。',
          en: 'Lord of rest, thank You for creating not only work but also rest. Help us learn to set aside our busyness, be still before You, and enjoy the peace and renewal You give. In Jesus\' name we pray, Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '诗篇 19:1',
          ref_en: 'Psalm 19:1',
          text_zh: '诸天述说神的荣耀，穹苍传扬他的手段。',
          text_en: 'The heavens declare the glory of God; and the firmament sheweth his handywork.',
        },
        reflection: {
          zh: '大自然是神荣耀的无声见证。日出日落、星辰运转、四季更替，无不在诉说创造主的伟大。这是一种不需要语言的启示，超越文化和国界，向所有人宣告：有一位伟大的神。',
          en: 'Nature is a silent witness to God\'s glory. Sunrise and sunset, orbiting stars, changing seasons — all declare the greatness of the Creator. This is a revelation that needs no words, transcending culture and borders, proclaiming to all: there is a great God.',
        },
        question: {
          zh: '大自然中的哪些景象最能让你感受到神的荣耀？你多久没有停下来欣赏神的创造了？',
          en: 'What scenes in nature most help you sense God\'s glory? How long has it been since you paused to appreciate God\'s creation?',
        },
        prayer: {
          zh: '荣耀的神，诸天都在述说祢的荣耀。求祢赐给我们一双敏锐的眼睛，在日常生活中看见祢创造的奇妙，并因此更加认识祢、赞美祢。奉主耶稣的名祷告，阿们。',
          en: 'Glorious God, the heavens declare Your glory. Give us keen eyes to see the wonder of Your creation in daily life, and through it to know You more and praise You. In Jesus\' name we pray, Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '约伯记 38:4',
          ref_en: 'Job 38:4',
          text_zh: '我立大地根基的时候，你在哪里呢？你若有聪明，只管说吧！',
          text_en: 'Where wast thou when I laid the foundations of the earth? declare, if thou hast understanding.',
        },
        reflection: {
          zh: '当约伯在苦难中质疑神时，神以一连串的反问回应他。这不是冷漠的责备，而是温柔的提醒：神的智慧和能力远超人的理解。当我们面对无法理解的处境时，我们可以选择信靠那位立大地根基的神。',
          en: 'When Job questioned God in his suffering, God responded with a series of rhetorical questions. This was not cold rebuke but a gentle reminder: God\'s wisdom and power far exceed human understanding. When we face situations beyond our comprehension, we can choose to trust the One who laid the earth\'s foundation.',
        },
        question: {
          zh: '你是否曾在困难中质问神"为什么"？神的这个反问如何帮助你调整对祂的态度？',
          en: 'Have you ever questioned God with "why" during hardship? How does God\'s rhetorical question help you adjust your attitude toward Him?',
        },
        prayer: {
          zh: '全知全能的主，祢立大地的根基，祢的智慧无法测度。当我们不理解祢的作为时，求祢帮助我们谦卑下来，信靠祢的主权和美意。奉主耶稣的名祷告，阿们。',
          en: 'All-knowing and almighty Lord, You laid the foundation of the earth; Your wisdom is beyond measure. When we don\'t understand Your ways, help us humble ourselves and trust Your sovereignty and good purposes. In Jesus\' name we pray, Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '以赛亚书 40:12',
          ref_en: 'Isaiah 40:12',
          text_zh: '谁曾用手心量诸水，用手虎口量苍天，用升斗盛大地的尘土，用秤称山岭，用天平平冈陵呢？',
          text_en: 'Who hath measured the waters in the hollow of his hand, and meted out heaven with the span, and comprehended the dust of the earth in a measure, and weighed the mountains in scales, and the hills in a balance?',
        },
        reflection: {
          zh: '先知以赛亚用一系列壮丽的画面描绘神的伟大。浩瀚的海洋在神手中不过是手心的水，广阔的苍天不过是手虎口的宽度。这位无限伟大的神，却愿意亲近渺小的我们，这是何等的恩典。',
          en: 'The prophet Isaiah uses a series of magnificent images to portray God\'s greatness. The vast oceans are but water in the hollow of His hand; the expanse of the heavens is merely the span of His fingers. That this infinitely great God chooses to draw near to us — how amazing is His grace.',
        },
        question: {
          zh: '当你感到自己的问题很大时，想想这位用手心量诸水的神——你的问题在祂面前有多大？',
          en: 'When your problems feel overwhelming, consider this God who measures the oceans in His hand — how big are your problems before Him?',
        },
        prayer: {
          zh: '伟大的神，祢用手心量诸水，用手虎口量苍天。在祢面前，没有任何事情太大或太难。求祢帮助我们以信心的眼光看待生活中的挑战。奉主耶稣的名祷告，阿们。',
          en: 'Great God, You measure the waters in the hollow of Your hand and mark off the heavens with a span. Nothing is too big or too hard before You. Help us view life\'s challenges through eyes of faith. In Jesus\' name we pray, Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '诗篇 90:2',
          ref_en: 'Psalm 90:2',
          text_zh: '诸山未曾生出，地与世界你未曾造成，从亘古到永远，你是神！',
          text_en: 'Before the mountains were brought forth, or ever thou hadst formed the earth and the world, even from everlasting to everlasting, thou art God.',
        },
        reflection: {
          zh: '神是永恒的——祂没有开始，也没有终结。在山岳形成之前，在世界被造之前，神就已经存在。这意味着祂不受时间限制，祂的应许永不过期，祂的爱永不改变。我们短暂的人生，锚定在这位永恒的神里面。',
          en: 'God is eternal — He has no beginning and no end. Before the mountains were formed, before the world was made, God already existed. This means He is not bound by time, His promises never expire, and His love never changes. Our brief lives are anchored in this eternal God.',
        },
        question: {
          zh: '知道神是从亘古到永远的神，这如何影响你面对人生短暂和不确定性的态度？',
          en: 'How does knowing God is from everlasting to everlasting affect your attitude toward life\'s brevity and uncertainty?',
        },
        prayer: {
          zh: '永恒的神，从亘古到永远，祢是神。我们的年日如飞而去，但祢永不改变。求祢帮助我们将短暂的人生交在祢永恒的手中，活出有意义的每一天。奉主耶稣的名祷告，阿们。',
          en: 'Eternal God, from everlasting to everlasting, You are God. Our days fly by, but You never change. Help us place our brief lives in Your eternal hands and live each day with purpose. In Jesus\' name we pray, Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '约翰福音 4:24',
          ref_en: 'John 4:24',
          text_zh: '神是个灵，所以拜他的，必须用心灵和诚实拜他。',
          text_en: 'God is a Spirit: and they that worship him must worship him in spirit and in truth.',
        },
        reflection: {
          zh: '耶稣向撒玛利亚妇人启示了敬拜的真谛：神是灵，不受任何地点或形式的限制。真正的敬拜不在于外在的仪式，而在于内心的真诚与圣灵的引导。无论在哪里，我们都可以用心灵和诚实来敬拜这位灵的神。',
          en: 'Jesus revealed the essence of worship to the Samaritan woman: God is spirit, not limited by any place or form. True worship is not about outward ritual but about inner sincerity and the Holy Spirit\'s leading. Wherever we are, we can worship this spiritual God in spirit and truth.',
        },
        question: {
          zh: '你的敬拜是否流于形式？如何在日常生活中操练"用心灵和诚实"来敬拜神？',
          en: 'Has your worship become merely routine? How can you practice worshiping God "in spirit and truth" in everyday life?',
        },
        prayer: {
          zh: '圣灵的神，祢是灵，超越一切物质和形式。求祢的圣灵充满我们，使我们的敬拜不流于表面，而是从心灵深处发出真诚的赞美和感恩。奉主耶稣的名祷告，阿们。',
          en: 'God of Spirit, You are spirit, transcending all matter and form. Fill us with Your Holy Spirit so that our worship is not superficial but rises from the depths of our hearts in genuine praise and thanksgiving. In Jesus\' name we pray, Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '诗篇 139:1-4',
          ref_en: 'Psalm 139:1-4',
          text_zh: '耶和华啊，你已经鉴察我，认识我。我坐下，我起来，你都晓得，你从远处知道我的意念。我行路，我躺卧，你都细察，你也深知我一切所行的。耶和华啊，我舌头上的话，你没有一句不知道的。',
          text_en: 'O LORD, thou hast searched me, and known me. Thou knowest my downsitting and mine uprising, thou understandest my thought afar off. Thou compassest my path and my lying down, and art acquainted with all my ways. For there is not a word in my tongue, but, lo, O LORD, thou knowest it altogether.',
        },
        reflection: {
          zh: '神对我们的认识是全面而深入的——祂知道我们的一举一动、每个意念、甚至尚未出口的话。这不是令人恐惧的监视，而是深情的关注。神完全认识我们，却依然爱我们，这就是无条件的爱。',
          en: 'God\'s knowledge of us is comprehensive and deep — He knows our every action, every thought, even words not yet spoken. This is not frightening surveillance but loving attention. God knows us completely and still loves us — that is unconditional love.',
        },
        question: {
          zh: '知道神完全了解你的一切（包括你的软弱和隐藏的想法），你有什么感受？是安慰还是不安？',
          en: 'How do you feel knowing God completely understands everything about you, including your weaknesses and hidden thoughts? Is it comforting or unsettling?',
        },
        prayer: {
          zh: '无所不知的主，祢鉴察我、认识我，我的一切在祢面前毫无隐藏。感谢祢即使完全了解我，仍然爱我、接纳我。求祢帮助我坦然地活在祢面前。奉主耶稣的名祷告，阿们。',
          en: 'All-knowing Lord, You have searched me and known me; nothing is hidden from You. Thank You that even though You know me completely, You still love and accept me. Help me live openly before You. In Jesus\' name we pray, Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '诗篇 139:7-10',
          ref_en: 'Psalm 139:7-10',
          text_zh: '我往哪里去躲避你的灵？我往哪里逃躲避你的面？我若升到天上，你在那里；我若在阴间下榻，你也在那里。我若展开清晨的翅膀，飞到海极居住，就是在那里，你的手必引导我，你的右手也必扶持我。',
          text_en: 'Whither shall I go from thy spirit? or whither shall I flee from thy presence? If I ascend up into heaven, thou art there: if I make my bed in hell, behold, thou art there. If I take the wings of the morning, and dwell in the uttermost parts of the sea; Even there shall thy hand lead me, and thy right hand shall hold me.',
        },
        reflection: {
          zh: '神无处不在——无论天上、阴间、海极，都有祂的同在。这对信靠祂的人是极大的安慰：没有任何地方、任何处境能使我们与神隔绝。无论我们走到哪里，神的手必引导我们，祂的右手必扶持我们。',
          en: 'God is omnipresent — whether in heaven, Sheol, or the farthest sea, He is there. For those who trust Him, this is immense comfort: no place, no circumstance can separate us from God. Wherever we go, His hand will lead us and His right hand will hold us.',
        },
        question: {
          zh: '你是否曾感到神离你很远？这段经文如何提醒你神一直都在？',
          en: 'Have you ever felt that God was far away? How does this passage remind you that God is always there?',
        },
        prayer: {
          zh: '无处不在的神，感谢祢的同在覆盖天上、地下、海极。无论我们身在何处，祢的手必引导我们，祢的右手必扶持我们。求祢让我们时刻意识到祢的同在。奉主耶稣的名祷告，阿们。',
          en: 'Omnipresent God, thank You that Your presence covers heaven, earth, and the farthest seas. Wherever we are, Your hand leads us and Your right hand holds us. Help us be ever aware of Your presence. In Jesus\' name we pray, Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '约翰一书 1:5',
          ref_en: '1 John 1:5',
          text_zh: '神就是光，在他毫无黑暗。这是我们从主所听见，又报给你们的信息。',
          text_en: 'This then is the message which we have heard of him, and declare unto you, that God is light, and in him is no darkness at all.',
        },
        reflection: {
          zh: '"神就是光"——这不仅描述神的一个属性，更是对祂本质的宣告。光代表圣洁、真理和公义。在神里面毫无黑暗，意味着祂完全纯洁，没有任何罪恶或虚假。当我们亲近这位光的神，我们的生命也被光照和洁净。',
          en: '"God is light" — this is not merely describing one of God\'s attributes but declaring His very essence. Light represents holiness, truth, and righteousness. That there is no darkness in Him means He is completely pure, with no sin or falsehood. As we draw near to this God of light, our lives are also illuminated and purified.',
        },
        question: {
          zh: '如果神是光、在祂毫无黑暗，我们应该如何面对自己生命中的"黑暗面"？',
          en: 'If God is light and in Him there is no darkness at all, how should we deal with the "dark areas" in our own lives?',
        },
        prayer: {
          zh: '圣洁的神，祢就是光，在祢毫无黑暗。求祢的光照进我们的内心，显明一切需要悔改和更新的地方。愿我们行在光中，如同祢在光中一样。奉主耶稣的名祷告，阿们。',
          en: 'Holy God, You are light, and in You there is no darkness at all. Let Your light shine into our hearts, revealing all that needs repentance and renewal. May we walk in the light, as You are in the light. In Jesus\' name we pray, Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '出埃及记 34:6-7',
          ref_en: 'Exodus 34:6-7',
          text_zh: '耶和华在他面前宣告说："耶和华，耶和华，是有怜悯、有恩典的神，不轻易发怒，并有丰盛的慈爱和诚实。为千万人存留慈爱，赦免罪孽、过犯和罪恶，万不以有罪的为无罪，必追讨他的罪，自父及子，直到三四代。"',
          text_en: 'And the LORD passed by before him, and proclaimed, The LORD, The LORD God, merciful and gracious, longsuffering, and abundant in goodness and truth, Keeping mercy for thousands, forgiving iniquity and transgression and sin, and that will by no means clear the guilty; visiting the iniquity of the fathers upon the children, and upon the children’s children, unto the third and to the fourth generation.',
        },
        reflection: {
          zh: '这段经文被称为神的"自我介绍"，是旧约中对神属性最完整的宣告之一。神既有怜悯恩典，又公义信实。祂不轻易发怒，慈爱丰盛，但也不以有罪为无罪。这位神完美地平衡了爱与公义，最终在十字架上将两者完全彰显。',
          en: 'This passage is known as God\'s "self-introduction," one of the most complete declarations of His character in the Old Testament. God is both merciful and gracious, yet just and faithful. He is slow to anger, abounding in love, yet will not clear the guilty. This God perfectly balances love and justice, ultimately displaying both fully at the cross.',
        },
        question: {
          zh: '神的怜悯和公义如何在你的生命经历中同时彰显？你更需要经历祂的哪一面？',
          en: 'How have God\'s mercy and justice both been displayed in your life experience? Which aspect do you need to experience more?',
        },
        prayer: {
          zh: '有怜悯有恩典的主，感谢祢向我们启示祢自己。祢不轻易发怒，有丰盛的慈爱和诚实。求祢的怜悯覆盖我们的过犯，祢的公义引导我们走正路。奉主耶稣的名祷告，阿们。',
          en: 'Merciful and gracious Lord, thank You for revealing Yourself to us. You are slow to anger, abounding in steadfast love and faithfulness. May Your mercy cover our transgressions and Your justice guide us in the right path. In Jesus\' name we pray, Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '罗马书 11:33',
          ref_en: 'Romans 11:33',
          text_zh: '深哉，神丰富的智慧和知识！他的判断何其难测！他的踪迹何其难寻！',
          text_en: 'O the depth of the riches both of the wisdom and knowledge of God! how unsearchable are his judgments, and his ways past finding out!',
        },
        reflection: {
          zh: '使徒保罗在论述了神伟大的救赎计划后，不禁发出这样的赞叹。神的智慧和知识是如此深邃丰富，人的理性无法完全测透。这不是让我们放弃认识神，而是在认识的过程中始终保持谦卑和敬畏，因为我们所敬拜的神永远超越我们的理解。',
          en: 'After expounding God\'s great plan of redemption, the apostle Paul burst into this exclamation. God\'s wisdom and knowledge are so deep and rich that human reason cannot fully fathom them. This does not mean we give up knowing God, but that we remain humble and reverent in the process, for the God we worship forever exceeds our understanding.',
        },
        question: {
          zh: '面对信仰中不能完全理解的奥秘，你是选择信靠还是怀疑？为什么？',
          en: 'When you encounter mysteries of faith that you cannot fully understand, do you choose trust or doubt? Why?',
        },
        prayer: {
          zh: '智慧无穷的神，祢的丰富、智慧和知识何其深！我们有限的头脑无法测透祢的奥秘，但我们愿意在敬畏中继续认识祢。求祢赐给我们谦卑的心，在不明白的时候仍然信靠祢。奉主耶稣的名祷告，阿们。',
          en: 'God of infinite wisdom, oh the depth of Your riches, wisdom, and knowledge! Our finite minds cannot fathom Your mysteries, but we desire to continue knowing You in reverence. Grant us humble hearts to trust You even when we don\'t understand. In Jesus\' name we pray, Amen.',
        },
      },
    ],
  },
];
