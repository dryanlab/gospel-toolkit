interface Scripture { ref_zh: string; ref_en: string; text_zh: string; text_en: string; }
interface BilingualText { zh: string; en: string; }
interface DevotionalUnit { scripture: Scripture; reflection: BilingualText; question: BilingualText; prayer: BilingualText; }
interface AltarTheme { id: string; name_zh: string; name_en: string; icon: string; devotionals: DevotionalUnit[]; hymnKeywords: string[]; }

export const themesB9: AltarTheme[] = [
  {
    id: 'sermon',
    name_zh: '登山宝训',
    name_en: 'Sermon on the Mount',
    icon: '🏔️',
    hymnKeywords: ['天国', '八福', 'blessed', 'kingdom'],
    devotionals: [
      {
        scripture: {
          ref_zh: '太5:3',
          ref_en: 'Matthew 5:3',
          text_zh: '虚心的人有福了，因为天国是他们的。',
          text_en: 'Blessed are the poor in spirit, for theirs is the kingdom of heaven.',
        },
        reflection: {
          zh: '虚心不是软弱，而是认识到自己在神面前的不足。当我们承认自己灵里贫乏时，才会真正渴慕神的同在。天国的门向谦卑的人敞开。',
          en: 'Being poor in spirit is not weakness but recognizing our insufficiency before God. When we acknowledge our spiritual poverty, we truly hunger for God\'s presence. The kingdom of heaven opens to the humble.',
        },
        question: {
          zh: '你在生活中哪些方面需要放下骄傲，承认自己需要神的帮助？',
          en: 'In what areas of your life do you need to let go of pride and admit your need for God\'s help?',
        },
        prayer: {
          zh: '天父，求你赐我一颗虚心的心，让我不依靠自己的聪明，而是完全倚靠你。愿你的国降临在我的生命中。阿们。',
          en: 'Heavenly Father, give me a humble spirit. Help me not rely on my own understanding but depend fully on You. May Your kingdom come in my life. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '太5:4',
          ref_en: 'Matthew 5:4',
          text_zh: '哀恸的人有福了，因为他们必得安慰。',
          text_en: 'Blessed are those who mourn, for they shall be comforted.',
        },
        reflection: {
          zh: '哀恸不仅是为失去而悲伤，更是为罪恶和这个破碎世界而忧伤。神应许亲自安慰那些为义而哀恸的人，祂的安慰远超人间的一切慰藉。',
          en: 'Mourning is not only grief over loss but sorrow over sin and a broken world. God promises to personally comfort those who mourn for righteousness—His comfort far surpasses any earthly consolation.',
        },
        question: {
          zh: '你是否曾经历过在悲伤中感受到神特别的安慰？那是怎样的经历？',
          en: 'Have you ever experienced God\'s special comfort in the midst of sorrow? What was that like?',
        },
        prayer: {
          zh: '主啊，当我为这世界的苦难和自己的罪而哀恸时，求你用你的慈爱安慰我，让我在眼泪中看见你的盼望。阿们。',
          en: 'Lord, when I mourn over the suffering of this world and my own sin, comfort me with Your loving-kindness. Let me see Your hope through my tears. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '太5:5',
          ref_en: 'Matthew 5:5',
          text_zh: '温柔的人有福了，因为他们必承受地土。',
          text_en: 'Blessed are the meek, for they shall inherit the earth.',
        },
        reflection: {
          zh: '温柔是受控制的力量，是在有能力反击时选择恩慈。耶稣本身就是温柔的典范——祂有天上地下所有的权柄，却为我们甘愿受苦。温柔的人最终将承受一切。',
          en: 'Meekness is strength under control—choosing grace when you have the power to retaliate. Jesus exemplified meekness: He held all authority yet willingly suffered for us. The meek will ultimately inherit everything.',
        },
        question: {
          zh: '在面对冲突或不公平时，你如何操练温柔而不是以牙还牙？',
          en: 'When facing conflict or injustice, how can you practice meekness rather than retaliation?',
        },
        prayer: {
          zh: '主耶稣，你是温柔谦卑的王，求你帮助我学习你的样式，在有力量时选择恩慈，在被冒犯时选择饶恕。阿们。',
          en: 'Lord Jesus, You are the gentle and humble King. Help me learn from You—to choose grace when I have power and forgiveness when offended. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '太5:6',
          ref_en: 'Matthew 5:6',
          text_zh: '饥渴慕义的人有福了，因为他们必得饱足。',
          text_en: 'Blessed are those who hunger and thirst for righteousness, for they shall be satisfied.',
        },
        reflection: {
          zh: '饥渴慕义描述的是一种强烈的渴望，如同身体对食物和水的需要一样迫切。当我们以追求神的公义为人生最大的渴望时，神应许必使我们满足。',
          en: 'Hungering and thirsting for righteousness describes an intense longing, as urgent as the body\'s need for food and water. When pursuing God\'s righteousness becomes our deepest desire, God promises full satisfaction.',
        },
        question: {
          zh: '你对神的公义的渴慕，是否像对食物和水的需要那样迫切？什么在分散你的渴慕？',
          en: 'Is your longing for God\'s righteousness as urgent as your need for food and water? What distracts you from this hunger?',
        },
        prayer: {
          zh: '天父，求你在我心里激起对公义的饥渴，让我不再满足于世界的虚假满足，而是单单寻求你的国和你的义。阿们。',
          en: 'Heavenly Father, stir up in my heart a hunger for righteousness. Let me no longer settle for the world\'s false satisfaction but seek only Your kingdom and Your righteousness. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '太5:7',
          ref_en: 'Matthew 5:7',
          text_zh: '怜恤人的人有福了，因为他们必蒙怜恤。',
          text_en: 'Blessed are the merciful, for they shall receive mercy.',
        },
        reflection: {
          zh: '怜恤是看见别人的痛苦并采取行动帮助。神先向我们施了无限的怜悯，我们也当如此待人。施怜悯的人不是在积攒功德，而是在活出已经领受的恩典。',
          en: 'Mercy sees another\'s pain and acts to help. God first showed us infinite mercy; we should do likewise. The merciful are not earning merit but living out the grace already received.',
        },
        question: {
          zh: '你身边有谁正需要你的怜恤和帮助？你可以怎样具体地行动？',
          en: 'Who around you needs your mercy and help right now? How can you take concrete action?',
        },
        prayer: {
          zh: '慈悲的天父，感谢你向我施怜悯。求你给我一颗怜恤人的心，让我看见周围人的需要，并愿意伸出援手。阿们。',
          en: 'Merciful Father, thank You for showing me mercy. Give me a compassionate heart to see the needs around me and willingness to reach out. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '太5:8',
          ref_en: 'Matthew 5:8',
          text_zh: '清心的人有福了，因为他们必得见神。',
          text_en: 'Blessed are the pure in heart, for they shall see God.',
        },
        reflection: {
          zh: '清心意味着内心没有分裂的忠诚——全心全意专注于神。只有当我们的心被洁净、被单一的热情所驱动时，才能真正看见神在我们生命中的作为。',
          en: 'Purity of heart means undivided loyalty—wholehearted focus on God. Only when our hearts are cleansed and driven by a single passion can we truly see God at work in our lives.',
        },
        question: {
          zh: '你的心是否有分裂的忠诚？有什么事物在与神争夺你心中首位的位置？',
          en: 'Does your heart have divided loyalties? What competes with God for first place in your heart?',
        },
        prayer: {
          zh: '主啊，求你鉴察我的心，除去一切不洁和偶像，使我成为清心的人，好让我能更清楚地看见你。阿们。',
          en: 'Lord, search my heart and remove all impurity and idols. Make me pure in heart so I may see You more clearly. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '太5:9',
          ref_en: 'Matthew 5:9',
          text_zh: '使人和睦的人有福了，因为他们必称为神的儿子。',
          text_en: 'Blessed are the peacemakers, for they shall be called sons of God.',
        },
        reflection: {
          zh: '使人和睦不是回避冲突，而是积极地在关系中带来和好。神自己是最伟大的和平使者——祂差遣耶稣使我们与神和好。当我们效法祂促进和平时，就彰显了神儿女的身份。',
          en: 'Peacemaking is not conflict avoidance but actively bringing reconciliation. God is the ultimate peacemaker—He sent Jesus to reconcile us. When we follow His example and promote peace, we reveal our identity as God\'s children.',
        },
        question: {
          zh: '在你的家庭、职场或教会中，有没有需要你主动促进和好的关系？',
          en: 'In your family, workplace, or church, is there a relationship where you need to actively pursue reconciliation?',
        },
        prayer: {
          zh: '和平的君王，求你使我成为和平之子，在冲突中带来和好，在分裂中带来合一，让人因此认出我是你的儿女。阿们。',
          en: 'Prince of Peace, make me a child of peace. Help me bring reconciliation amid conflict and unity amid division, so others may recognize me as Your child. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '太5:10-12',
          ref_en: 'Matthew 5:10-12',
          text_zh: '为义受逼迫的人有福了，因为天国是他们的。人若因我辱骂你们，逼迫你们，捏造各样坏话毁谤你们，你们就有福了。应当欢喜快乐，因为你们在天上的赏赐是大的。',
          text_en: 'Blessed are those who are persecuted for righteousness\' sake, for theirs is the kingdom of heaven. Blessed are you when others revile you and persecute you and utter all kinds of evil against you falsely on my account. Rejoice and be glad, for your reward is great in heaven.',
        },
        reflection: {
          zh: '为义受苦不是咒诅而是祝福。历史上无数圣徒在逼迫中反而经历了更深的喜乐和更大的信心。因为我们的赏赐不在地上，而在天上。',
          en: 'Suffering for righteousness is not a curse but a blessing. Countless saints throughout history found deeper joy and greater faith through persecution, for our reward is not on earth but in heaven.',
        },
        question: {
          zh: '你是否曾因信仰而受到嘲笑或压力？你如何在其中保持喜乐？',
          en: 'Have you ever faced ridicule or pressure because of your faith? How did you maintain joy through it?',
        },
        prayer: {
          zh: '主啊，当我因你的名受苦时，求你帮助我不灰心丧志，而是因天上的赏赐而欢喜快乐。坚固我的信心，使我至死忠心。阿们。',
          en: 'Lord, when I suffer for Your name, help me not lose heart but rejoice in the heavenly reward. Strengthen my faith and keep me faithful to the end. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '太5:13',
          ref_en: 'Matthew 5:13',
          text_zh: '你们是世上的盐。盐若失了味，怎能叫它再咸呢？以后无用，不过丢在外面，被人践踏了。',
          text_en: 'You are the salt of the earth, but if salt has lost its taste, how shall its saltiness be restored? It is no longer good for anything except to be thrown out and trampled under people\'s feet.',
        },
        reflection: {
          zh: '盐能防腐、调味、洁净。基督徒在世界中就当如盐一般——防止道德败坏，给生活带来美好的味道。但盐若失了味就毫无价值，我们的生命也必须保持属灵的活力。',
          en: 'Salt preserves, flavors, and purifies. Christians should be like salt in the world—preventing moral decay and bringing goodness to life. But salt that loses its flavor is worthless; our lives must maintain spiritual vitality.',
        },
        question: {
          zh: '你的生命在哪些方面正在发挥"盐"的作用？有没有"失味"的危险？',
          en: 'In what ways is your life functioning as "salt"? Is there a danger of losing your saltiness?',
        },
        prayer: {
          zh: '主啊，求你保守我生命中的"咸味"不失去，让我在所处的环境中成为防腐剂和调味品，为你的名发出馨香。阿们。',
          en: 'Lord, preserve the "saltiness" in my life. Let me be a preservative and seasoning in my environment, giving off a pleasing fragrance for Your name. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '太5:14-16',
          ref_en: 'Matthew 5:14-16',
          text_zh: '你们是世上的光。城造在山上，是不能隐藏的。人点灯，不放在斗底下，是放在灯台上，就照亮一家的人。你们的光也当这样照在人前，叫他们看见你们的好行为，便将荣耀归给你们在天上的父。',
          text_en: 'You are the light of the world. A city set on a hill cannot be hidden. Nor do people light a lamp and put it under a basket, but on a stand, and it gives light to all in the house. In the same way, let your light shine before others, so that they may see your good works and give glory to your Father who is in heaven.',
        },
        reflection: {
          zh: '光的本性就是照耀。基督徒不应隐藏信仰，而要通过好行为让人看见神的荣耀。注意，目的不是让人赞美我们，而是将荣耀归给天父。',
          en: 'Light\'s nature is to shine. Christians should not hide their faith but let others see God\'s glory through good deeds. Note: the goal is not to receive praise ourselves but to direct glory to the Father.',
        },
        question: {
          zh: '你的信仰之光是在明处照耀还是被隐藏了？如何能让更多人通过你的生命看见神？',
          en: 'Is your light of faith shining openly or hidden? How can more people see God through your life?',
        },
        prayer: {
          zh: '天父，求你帮助我不将信仰之光隐藏，而是勇敢地照亮周围的黑暗，让人看见你的美善，将荣耀归给你。阿们。',
          en: 'Heavenly Father, help me not hide my light of faith but courageously shine into the darkness around me, so others may see Your goodness and glorify You. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '太6:25-27',
          ref_en: 'Matthew 6:25-27',
          text_zh: '所以我告诉你们，不要为生命忧虑吃什么，喝什么，为身体忧虑穿什么。生命不胜于饮食吗？身体不胜于衣裳吗？你们看那天上的飞鸟，也不种，也不收，也不积蓄在仓里，你们的天父尚且养活它。你们不比飞鸟贵重得多吗？你们哪一个能用思虑使寿数多加一刻呢？',
          text_en: 'Therefore I tell you, do not be anxious about your life, what you will eat or what you will drink, nor about your body, what you will put on. Is not life more than food, and the body more than clothing? Look at the birds of the air: they neither sow nor reap nor gather into barns, and yet your heavenly Father feeds them. Are you not of more value than they? And which of you by being anxious can add a single hour to his span of life?',
        },
        reflection: {
          zh: '忧虑是对神供应能力的不信任。耶稣用飞鸟的比喻提醒我们：如果天父连飞鸟都养活，何况祂所爱的儿女呢？忧虑不能改变任何事，但信靠可以改变一切。',
          en: 'Anxiety is distrust in God\'s provision. Jesus uses birds to remind us: if the Father feeds even birds, how much more His beloved children? Worry changes nothing, but trust changes everything.',
        },
        question: {
          zh: '你目前最大的忧虑是什么？你愿意将它交托给天父吗？',
          en: 'What is your greatest worry right now? Are you willing to entrust it to the Father?',
        },
        prayer: {
          zh: '天父，我将一切忧虑卸给你，因为你顾念我。帮助我像飞鸟一样信靠你的供应，不再被忧虑捆绑。阿们。',
          en: 'Heavenly Father, I cast all my anxieties on You, for You care for me. Help me trust Your provision like the birds and no longer be bound by worry. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '太6:33',
          ref_en: 'Matthew 6:33',
          text_zh: '你们要先求他的国和他的义，这些东西都要加给你们了。',
          text_en: 'But seek first the kingdom of God and his righteousness, and all these things will be added to you.',
        },
        reflection: {
          zh: '这是耶稣给门徒的人生优先级排序：神的国和神的义必须放在首位。当我们把次序摆对时，神应许会照顾我们一切的需要。问题不在于我们需不需要这些东西，而在于什么排在第一位。',
          en: 'Jesus sets the priority for His disciples: God\'s kingdom and righteousness must come first. When we get the order right, God promises to take care of all our needs. The question is not whether we need things, but what comes first.',
        },
        question: {
          zh: '在你每天的时间和精力分配中，神的国和义是否真的排在第一位？',
          en: 'In your daily allocation of time and energy, does God\'s kingdom and righteousness truly come first?',
        },
        prayer: {
          zh: '主啊，帮助我每天先寻求你的国和你的义，信靠你会供应我一切所需。重新调整我的优先次序，让你居首位。阿们。',
          en: 'Lord, help me seek Your kingdom and righteousness first each day, trusting You to supply all I need. Realign my priorities and take first place. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '太7:1-2',
          ref_en: 'Matthew 7:1-2',
          text_zh: '你们不要论断人，免得你们被论断。因为你们怎样论断人，也必怎样被论断；你们用什么量器量给人，也必用什么量器量给你们。',
          text_en: 'Judge not, that you be not judged. For with the judgment you pronounce you will be judged, and with the measure you use it will be measured to you.',
        },
        reflection: {
          zh: '论断不是指分辨是非，而是以自义的态度定罪他人。耶稣提醒我们：我们对待别人的方式，就是神对待我们的标准。与其论断别人的缺点，不如先检视自己的内心。',
          en: 'Judging here is not discernment but condemning others with a self-righteous attitude. Jesus reminds us: the standard we apply to others is the standard God applies to us. Rather than judging others\' faults, examine our own hearts first.',
        },
        question: {
          zh: '你是否有习惯性论断某些人？你可以怎样用恩典代替论断？',
          en: 'Do you habitually judge certain people? How can you replace judgment with grace?',
        },
        prayer: {
          zh: '主啊，求你除去我论断人的习惯，给我一双看见恩典的眼睛。让我先省察自己，再以爱心和谦卑对待他人。阿们。',
          en: 'Lord, remove my habit of judging others. Give me eyes that see grace. Let me examine myself first and treat others with love and humility. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '太7:12',
          ref_en: 'Matthew 7:12',
          text_zh: '所以，无论何事，你们愿意人怎样待你们，你们也要怎样待人，因为这就是律法和先知的道理。',
          text_en: 'So whatever you wish that others would do to you, do also to them, for this is the Law and the Prophets.',
        },
        reflection: {
          zh: '这条"金律"概括了整本旧约律法的精髓。它不是被动的"不要伤害人"，而是主动的"积极善待人"。如果每个人都活出这条原则，世界将会何等不同。',
          en: 'This "Golden Rule" summarizes the essence of the Old Testament law. It is not passive—"do no harm"—but active—"do good." If everyone lived by this principle, how different the world would be.',
        },
        question: {
          zh: '今天你可以主动做一件事来善待他人，就像你希望别人善待你一样吗？',
          en: 'Can you proactively do one thing today to treat someone the way you wish to be treated?',
        },
        prayer: {
          zh: '主啊，帮助我不仅消极地避免伤害人，更积极地善待每一个人。让金律成为我待人处事的准则。阿们。',
          en: 'Lord, help me not merely avoid harming others but actively do good to everyone. Let the Golden Rule be my standard in all relationships. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '太7:24-25',
          ref_en: 'Matthew 7:24-25',
          text_zh: '所以，凡听见我这话就去行的，好比一个聪明人，把房子盖在磐石上。雨淋，水冲，风吹，撞着那房子，房子总不倒塌，因为根基立在磐石上。',
          text_en: 'Everyone then who hears these words of mine and does them will be like a wise man who built his house on the rock. And the rain fell, and the floods came, and the winds blew and beat on that house, but it did not fall, because it had been founded on the rock.',
        },
        reflection: {
          zh: '登山宝训的结语提醒我们：听道必须行道。信仰不是理论知识，而是生命实践。那些将耶稣的话付诸行动的人，就像建在磐石上的房子，无论遭遇什么风浪都能站立得稳。',
          en: 'The conclusion of the Sermon on the Mount reminds us: hearing must lead to doing. Faith is not theoretical knowledge but lived practice. Those who put Jesus\' words into action are like a house built on rock—standing firm through every storm.',
        },
        question: {
          zh: '回顾登山宝训的教导，哪一条是你最需要从"听"转化为"行"的？',
          en: 'Looking back at the Sermon on the Mount, which teaching do you most need to move from "hearing" to "doing"?',
        },
        prayer: {
          zh: '主耶稣，帮助我不做听道忘道的人，而是将你的话语建造在我生命的根基上。让我的生命经得起风雨的考验，因为根基是你。阿们。',
          en: 'Lord Jesus, help me not be a hearer who forgets but one who builds Your words into my life\'s foundation. Let my life withstand every storm, for my foundation is You. Amen.',
        },
      },
    ],
  },
  {
    id: 'i-am',
    name_zh: '约翰福音"我是"',
    name_en: 'I Am Sayings of Jesus',
    icon: '🍞',
    hymnKeywords: ['耶稣', '我是', 'Jesus', 'I am'],
    devotionals: [
      {
        scripture: {
          ref_zh: '约1:14',
          ref_en: 'John 1:14',
          text_zh: '道成了肉身，住在我们中间，充充满满地有恩典，有真理。我们也见过他的荣光，正是父独生子的荣光。',
          text_en: 'And the Word became flesh and dwelt among us, and we have seen his glory, glory as of the only Son from the Father, full of grace and truth.',
        },
        reflection: {
          zh: '永恒的道成为有血有肉的人，住在我们中间。这是神最大的谦卑，也是最大的爱——祂不是远远地观望，而是亲自进入我们的世界，充满恩典和真理。',
          en: 'The eternal Word became flesh and blood, dwelling among us. This is God\'s greatest humility and love—He did not watch from afar but entered our world personally, full of grace and truth.',
        },
        question: {
          zh: '"道成肉身"对你的日常生活意味着什么？神的同在如何改变你面对困难的方式？',
          en: 'What does the "Word made flesh" mean for your daily life? How does God\'s presence change how you face difficulties?',
        },
        prayer: {
          zh: '主耶稣，感谢你道成肉身来到我们中间。你充满恩典和真理，求你住在我的心里，让我每天经历你的同在。阿们。',
          en: 'Lord Jesus, thank You for becoming flesh and dwelling among us. You are full of grace and truth. Dwell in my heart and let me experience Your presence daily. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '约1:29',
          ref_en: 'John 1:29',
          text_zh: '次日，约翰看见耶稣来到他那里，就说："看哪，神的羔羊，除去世人罪孽的。"',
          text_en: 'The next day he saw Jesus coming toward him, and said, "Behold, the Lamb of God, who takes away the sin of the world!"',
        },
        reflection: {
          zh: '施洗约翰一语道出了耶稣来到世间的核心使命——作为神的羔羊，为全人类的罪献上自己。旧约中无数的羔羊献祭都指向这一位终极的羔羊。',
          en: 'John the Baptist declared Jesus\' core mission—to be the Lamb of God, offering Himself for all humanity\'s sin. Every lamb sacrifice in the Old Testament pointed to this ultimate Lamb.',
        },
        question: {
          zh: '耶稣作为"神的羔羊"为你承担了罪的代价，这对你意味着什么？',
          en: 'What does it mean to you that Jesus, as the "Lamb of God," bore the price of your sin?',
        },
        prayer: {
          zh: '神的羔羊，感谢你为我的罪而牺牲。你的宝血洗净了我一切的不义。帮助我活出感恩的生命来回应你的大爱。阿们。',
          en: 'Lamb of God, thank You for sacrificing Yourself for my sin. Your precious blood cleanses all my unrighteousness. Help me live a grateful life in response to Your great love. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '约3:3',
          ref_en: 'John 3:3',
          text_zh: '耶稣回答说："我实实在在地告诉你：人若不重生，就不能见神的国。"',
          text_en: 'Jesus answered him, "Truly, truly, I say to you, unless one is born again he cannot see the kingdom of God."',
        },
        reflection: {
          zh: '重生不是道德改善或宗教行为，而是从圣灵而来的全新生命。尼哥底母虽然是宗教领袖，却仍然需要重生。没有人可以靠自己的努力进入神的国。',
          en: 'Being born again is not moral improvement or religious activity but entirely new life from the Holy Spirit. Nicodemus was a religious leader yet still needed rebirth. No one can enter God\'s kingdom by their own effort.',
        },
        question: {
          zh: '你是否已经经历了重生？你的生命是否有从圣灵而来的更新和改变？',
          en: 'Have you experienced being born again? Has your life shown renewal and transformation from the Holy Spirit?',
        },
        prayer: {
          zh: '主啊，感谢你赐下重生的恩典。求圣灵继续更新我的生命，使我不断成长，越来越像你。阿们。',
          en: 'Lord, thank You for the grace of new birth. May the Holy Spirit continue to renew my life, helping me grow and become more like You. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '约4:13-14',
          ref_en: 'John 4:13-14',
          text_zh: '耶稣回答说："凡喝这水的，还要再渴；人若喝我所赐的水，就永远不渴。我所赐的水要在他里头成为泉源，直涌到永生。"',
          text_en: 'Jesus said to her, "Everyone who drinks of this water will be thirsty again, but whoever drinks of the water that I will give him will never be thirsty again. The water that I will give him will become in him a spring of water welling up to eternal life."',
        },
        reflection: {
          zh: '世界上一切的满足都是暂时的——喝了还要再渴。但耶稣所赐的活水能从心底涌出，带来永恒的满足。这活水就是圣灵的内住，源源不断地供应生命。',
          en: 'Every worldly satisfaction is temporary—drink and you thirst again. But the living water Jesus gives springs up from within, bringing eternal satisfaction. This living water is the indwelling Spirit, endlessly supplying life.',
        },
        question: {
          zh: '你是否还在追求世界的"水"来满足内心的渴望？耶稣的活水如何改变了你的渴求？',
          en: 'Are you still chasing the world\'s "water" to satisfy your inner longing? How has Jesus\' living water changed your desires?',
        },
        prayer: {
          zh: '主耶稣，我渴望你所赐的活水。求你的灵在我心中成为泉源，使我不再从世界寻找满足，而是在你里面得到永恒的饱足。阿们。',
          en: 'Lord Jesus, I long for Your living water. Let Your Spirit become a spring within me, so I no longer seek satisfaction in the world but find eternal fulfillment in You. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '约6:35',
          ref_en: 'John 6:35',
          text_zh: '耶稣说："我就是生命的粮，到我这里来的，必定不饿；信我的，永远不渴。"',
          text_en: 'Jesus said to them, "I am the bread of life; whoever comes to me shall not hunger, and whoever believes in me shall never thirst."',
        },
        reflection: {
          zh: '耶稣宣告自己是生命的粮——不是暂时填饱肚子的食物，而是供应灵魂永恒需要的粮食。来到耶稣面前的人不再饥饿，信靠祂的人永远不渴。祂是我们生命的根本满足。',
          en: 'Jesus declares Himself the bread of life—not temporary food for the stomach but bread that satisfies the soul\'s eternal need. Those who come to Jesus will never hunger; those who believe will never thirst. He is our life\'s fundamental satisfaction.',
        },
        question: {
          zh: '你每天是否在耶稣这"生命的粮"中得到喂养？你如何保持这种灵里的饱足？',
          en: 'Are you nourished daily by Jesus, the "bread of life"? How do you maintain this spiritual satisfaction?',
        },
        prayer: {
          zh: '生命的粮，我到你面前来寻求饱足。你是满足我一切渴望的那一位，求你每天用你的话语和同在喂养我。阿们。',
          en: 'Bread of Life, I come to You seeking satisfaction. You are the one who fulfills all my longings. Feed me daily with Your word and presence. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '约8:12',
          ref_en: 'John 8:12',
          text_zh: '耶稣又对众人说："我是世界的光。跟从我的，就不在黑暗里走，必要得着生命的光。"',
          text_en: 'Again Jesus spoke to them, saying, "I am the light of the world. Whoever follows me will not walk in darkness, but will have the light of life."',
        },
        reflection: {
          zh: '在一个充满迷茫和黑暗的世界中，耶稣宣告自己是唯一的光源。跟从祂的人不会迷失在黑暗中，因为祂的光照亮前方的道路，也照亮我们内心的幽暗。',
          en: 'In a world full of confusion and darkness, Jesus declares Himself the only source of light. Those who follow Him will not be lost in darkness, for His light illuminates the path ahead and the darkness within.',
        },
        question: {
          zh: '你生命中有哪些"黑暗"的角落需要耶稣的光来照亮？',
          en: 'What "dark" corners of your life need the light of Jesus to shine upon them?',
        },
        prayer: {
          zh: '世界的光啊，求你照亮我生命中每一个黑暗的角落。帮助我跟从你，行在光明中，不再被黑暗所胜。阿们。',
          en: 'Light of the World, shine into every dark corner of my life. Help me follow You, walk in the light, and no longer be overcome by darkness. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '约8:32',
          ref_en: 'John 8:32',
          text_zh: '你们必晓得真理，真理必叫你们得以自由。',
          text_en: 'And you will know the truth, and the truth will set you free.',
        },
        reflection: {
          zh: '真正的自由不是随心所欲，而是被真理释放。世界提供虚假的自由，最终导致捆绑；但耶稣的真理打破罪的锁链，带来真正的自由——从罪的权势、恐惧和谎言中释放。',
          en: 'True freedom is not doing whatever you want but being liberated by truth. The world offers false freedom that leads to bondage; Jesus\' truth breaks sin\'s chains and brings true freedom—release from sin\'s power, fear, and lies.',
        },
        question: {
          zh: '你生命中有哪些谎言或捆绑需要被神的真理释放？',
          en: 'What lies or bondages in your life need to be set free by God\'s truth?',
        },
        prayer: {
          zh: '主耶稣，你就是真理。求你的真理释放我脱离一切谎言和捆绑，让我在你里面享受真正的自由。阿们。',
          en: 'Lord Jesus, You are the Truth. Let Your truth set me free from all lies and bondage, and let me enjoy true freedom in You. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '约10:9',
          ref_en: 'John 10:9',
          text_zh: '我就是门，凡从我进来的，必然得救，并且出入得草吃。',
          text_en: 'I am the door. If anyone enters by me, he will be saved and will go in and out and find pasture.',
        },
        reflection: {
          zh: '耶稣是唯一通往神的门。通过祂，我们得着救恩、自由和丰盛。这扇门向所有人敞开，但必须通过耶稣才能进入。祂既是进入安全之处的通道，也是通往丰盛生活的出口。',
          en: 'Jesus is the only door to God. Through Him we receive salvation, freedom, and abundance. This door is open to all, but only through Jesus can we enter. He is both the passage to safety and the gateway to abundant life.',
        },
        question: {
          zh: '你是否已经通过耶稣这扇"门"进入了与神的关系？你在其中经历了怎样的丰盛？',
          en: 'Have you entered into a relationship with God through Jesus, the "door"? What abundance have you experienced?',
        },
        prayer: {
          zh: '主耶稣，感谢你作为那扇门向我敞开。我从你进来，得着救恩和丰盛的生命。求你帮助我也引导他人走进这扇门。阿们。',
          en: 'Lord Jesus, thank You for being the open door. Through You I receive salvation and abundant life. Help me guide others through this door as well. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '约10:11',
          ref_en: 'John 10:11',
          text_zh: '我是好牧人，好牧人为羊舍命。',
          text_en: 'I am the good shepherd. The good shepherd lays down his life for the sheep.',
        },
        reflection: {
          zh: '好牧人与雇工的区别在于：好牧人愿意为羊舍命。耶稣不只是管理者，祂是甘愿为我们付出一切的牧者。祂认识每一只羊，关心每一个需要，甚至愿意牺牲自己的生命。',
          en: 'The difference between the good shepherd and a hired hand is this: the good shepherd lays down his life for the sheep. Jesus is not merely a manager but a shepherd willing to give everything. He knows each sheep, cares for every need, and willingly sacrifices His own life.',
        },
        question: {
          zh: '你是否真正感受到耶稣作为好牧人对你个人的爱和关怀？',
          en: 'Do you truly sense Jesus\' personal love and care for you as the Good Shepherd?',
        },
        prayer: {
          zh: '好牧人，感谢你为我舍命。你认识我，关心我的每一个需要。帮助我听你的声音，跟随你的引导，安息在你的看顾之下。阿们。',
          en: 'Good Shepherd, thank You for laying down Your life for me. You know me and care for my every need. Help me hear Your voice, follow Your lead, and rest in Your care. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '约11:25-26',
          ref_en: 'John 11:25-26',
          text_zh: '耶稣对她说："复活在我，生命也在我。信我的人，虽然死了，也必复活。凡活着信我的人必永远不死。你信这话吗？"',
          text_en: 'Jesus said to her, "I am the resurrection and the life. Whoever believes in me, though he die, yet shall he live, and everyone who lives and believes in me shall never die. Do you believe this?"',
        },
        reflection: {
          zh: '在拉撒路的坟墓前，耶稣做出了最震撼的宣告：祂本身就是复活和生命。死亡不是终点，因为信祂的人虽然经历肉体的死亡，却必得着永远的生命。这是基督信仰最核心的盼望。',
          en: 'Before Lazarus\' tomb, Jesus made the most staggering declaration: He Himself is the resurrection and the life. Death is not the end, for those who believe, though they die physically, will live forever. This is the core hope of the Christian faith.',
        },
        question: {
          zh: '面对死亡和失去，你是否真正相信耶稣就是复活和生命？这信念如何影响你面对生死的态度？',
          en: 'Facing death and loss, do you truly believe Jesus is the resurrection and the life? How does this belief shape your attitude toward life and death?',
        },
        prayer: {
          zh: '复活的主，你胜过了死亡，赐给我永生的盼望。帮助我在面对生死时不惧怕，因为我知道在你里面有复活的生命。阿们。',
          en: 'Risen Lord, You have conquered death and given me the hope of eternal life. Help me face life and death without fear, for I know in You there is resurrection life. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '约13:14-15',
          ref_en: 'John 13:14-15',
          text_zh: '我是你们的主，你们的夫子，尚且洗你们的脚，你们也当彼此洗脚。我给你们作了榜样，叫你们照着我向你们所作的去作。',
          text_en: 'If I then, your Lord and Teacher, have washed your feet, you also ought to wash one another\'s feet. For I have given you an example, that you also should do just as I have done to you.',
        },
        reflection: {
          zh: '万王之王跪下来洗门徒的脚——这是颠覆性的领导模式。耶稣用行动教导我们：真正的伟大不在于被人服侍，而在于服侍他人。祂给我们留下了谦卑服侍的榜样。',
          en: 'The King of kings knelt to wash His disciples\' feet—a revolutionary model of leadership. Jesus taught through action: true greatness lies not in being served but in serving others. He left us an example of humble service.',
        },
        question: {
          zh: '你愿意放下身段，像耶稣一样谦卑地服侍身边的人吗？可以从什么具体行动开始？',
          en: 'Are you willing to humble yourself and serve those around you as Jesus did? What specific action can you start with?',
        },
        prayer: {
          zh: '主耶稣，你是我的主和夫子，却甘愿为我洗脚。求你给我一颗仆人的心，让我效法你的榜样，甘心乐意地服侍他人。阿们。',
          en: 'Lord Jesus, You are my Lord and Teacher, yet You willingly washed my feet. Give me a servant\'s heart. Let me follow Your example and joyfully serve others. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '约14:6',
          ref_en: 'John 14:6',
          text_zh: '耶稣说："我就是道路、真理、生命；若不藉着我，没有人能到父那里去。"',
          text_en: 'Jesus said to him, "I am the way, and the truth, and the life. No one comes to the Father except through me."',
        },
        reflection: {
          zh: '这是耶稣最明确的自我宣告之一：祂不仅指向道路，祂就是道路；祂不仅教导真理，祂就是真理；祂不仅赐下生命，祂就是生命。到天父那里去的唯一途径就是通过耶稣。',
          en: 'This is one of Jesus\' clearest self-declarations: He doesn\'t just point to the way—He is the way; He doesn\'t just teach truth—He is the truth; He doesn\'t just give life—He is the life. The only way to the Father is through Jesus.',
        },
        question: {
          zh: '耶稣说祂是唯一的道路，这对你的信仰和你与他人分享福音有什么影响？',
          en: 'Jesus says He is the only way. How does this affect your faith and how you share the gospel with others?',
        },
        prayer: {
          zh: '主耶稣，你是道路、真理、生命。感谢你为我开了通往天父的路。帮助我紧紧跟随你，也帮助我勇敢地与人分享这唯一的道路。阿们。',
          en: 'Lord Jesus, You are the way, the truth, and the life. Thank You for opening the way to the Father. Help me follow You closely and boldly share this one way with others. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '约15:1,5',
          ref_en: 'John 15:1, 5',
          text_zh: '我是真葡萄树，我父是栽培的人。我是葡萄树，你们是枝子；常在我里面的，我也常在他里面，这人就多结果子；因为离了我，你们就不能作什么。',
          text_en: 'I am the true vine, and my Father is the vinedresser. I am the vine; you are the branches. Whoever abides in me and I in him, he it is that bears much fruit, for apart from me you can do nothing.',
        },
        reflection: {
          zh: '枝子离了葡萄树就无法存活，更不能结果子。耶稣用这个比喻说明与祂保持亲密关系的重要性——常在祂里面，让祂的生命汁液流淌在我们里面，自然就会结出丰盛的果子。',
          en: 'A branch cannot survive apart from the vine, let alone bear fruit. Jesus uses this metaphor to show the importance of an intimate relationship with Him—abide in Him, let His life flow through us, and we will naturally bear abundant fruit.',
        },
        question: {
          zh: '你与耶稣的关系是否像枝子连于葡萄树那样紧密？你如何操练"常在主里面"？',
          en: 'Is your relationship with Jesus as close as a branch connected to the vine? How do you practice "abiding in Him"?',
        },
        prayer: {
          zh: '真葡萄树，我愿意常在你里面，让你的生命在我里面流淌。离了你我什么都不能做，求你帮助我紧紧连于你，结出丰盛的果子。阿们。',
          en: 'True Vine, I desire to abide in You and let Your life flow through me. Apart from You I can do nothing. Help me stay closely connected and bear abundant fruit. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '约14:27',
          ref_en: 'John 14:27',
          text_zh: '我留下平安给你们，我将我的平安赐给你们。我所赐的，不像世人所赐的；你们心里不要忧愁，也不要胆怯。',
          text_en: 'Peace I leave with you; my peace I give to you. Not as the world gives do I give to you. Let not your hearts be troubled, neither let them be afraid.',
        },
        reflection: {
          zh: '耶稣的平安与世界给的平安完全不同。世界的平安取决于环境，但耶稣的平安超越环境——即使在风暴中也能安然。这平安是祂亲自留给门徒的遗产，也是给我们的礼物。',
          en: 'Jesus\' peace is entirely different from the world\'s peace. The world\'s peace depends on circumstances, but Jesus\' peace transcends them—calm even in the storm. This peace is His personal legacy to His disciples and His gift to us.',
        },
        question: {
          zh: '你目前的生活中，哪些方面最需要耶稣所赐的平安？',
          en: 'In what areas of your current life do you most need the peace Jesus gives?',
        },
        prayer: {
          zh: '平安的主，感谢你将你的平安赐给我。在这动荡不安的世界中，帮助我的心不忧愁也不胆怯，因为你的平安超越一切环境。阿们。',
          en: 'Lord of Peace, thank You for giving me Your peace. In this turbulent world, help my heart not be troubled or afraid, for Your peace surpasses all circumstances. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '约16:33',
          ref_en: 'John 16:33',
          text_zh: '我将这些事告诉你们，是要叫你们在我里面有平安。在世上你们有苦难，但你们可以放心，我已经胜了世界。',
          text_en: 'I have said these things to you, that in me you may have peace. In the world you will have tribulation. But take heart; I have overcome the world.',
        },
        reflection: {
          zh: '耶稣没有应许我们在世上不会有苦难，但祂应许了两件事：在祂里面有平安，以及祂已经胜了世界。苦难是暂时的现实，但得胜是永恒的事实。我们可以放心，因为结局已定。',
          en: 'Jesus did not promise we would have no tribulation in this world, but He promised two things: peace in Him, and that He has overcome the world. Tribulation is a temporary reality, but victory is an eternal fact. We can take heart because the outcome is settled.',
        },
        question: {
          zh: '面对当前的困难和挑战，"我已经胜了世界"这句话给你带来怎样的安慰和力量？',
          en: 'Facing your current difficulties and challenges, what comfort and strength does "I have overcome the world" bring you?',
        },
        prayer: {
          zh: '得胜的主，感谢你已经胜了世界！虽然我在世上会遇到苦难，但我在你里面有平安。帮助我靠着你的得胜，勇敢面对每一天。阿们。',
          en: 'Victorious Lord, thank You for overcoming the world! Though I will face tribulation, in You I have peace. Help me face each day boldly through Your victory. Amen.',
        },
      },
    ],
  },
];
