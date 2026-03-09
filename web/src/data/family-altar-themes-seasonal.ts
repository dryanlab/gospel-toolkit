interface Scripture { ref_zh: string; ref_en: string; text_zh: string; text_en: string; }
interface BilingualText { zh: string; en: string; }
interface DevotionalUnit { scripture: Scripture; reflection: BilingualText; question: BilingualText; prayer: BilingualText; }
interface AltarTheme { id: string; name_zh: string; name_en: string; icon: string; devotionals: DevotionalUnit[]; hymnKeywords: string[]; }

export const themesSeasonal: AltarTheme[] = [
  {
    id: 'passion',
    name_zh: '受难周',
    name_en: 'Passion Week',
    icon: '✝️',
    hymnKeywords: ['十架', '受难', 'cross', 'passion'],
    devotionals: [
      {
        scripture: {
          ref_zh: '马太福音 21:8-9',
          ref_en: 'Matthew 21:8-9',
          text_zh: '众人多半把衣服铺在路上，还有人砍下树枝来铺在路上。前行后随的众人喊着说："和散那归于大卫的子孙！奉主名来的是应当称颂的！高高在上和散那！"',
          text_en: 'And a very great multitude spread their garments in the way; others cut down branches from the trees, and strawed them in the way. And the multitudes that went before, and that followed, cried, saying, Hosanna to the son of David: Blessed is he that cometh in the name of the Lord; Hosanna in the highest.',
        },
        reflection: {
          zh: '棕枝主日，耶稣骑着驴驹进入耶路撒冷，众人夹道欢迎。然而同一群人，几天后却喊"钉他十字架"。人心是多么善变！但耶稣知道前面等待祂的是什么，依然选择走向十字架。祂的爱不受人心冷暖的影响。',
          en: 'On Palm Sunday, Jesus rode into Jerusalem on a donkey as crowds welcomed Him. Yet the same crowd would shout "Crucify Him" days later. How fickle is the human heart! But Jesus knew what awaited Him and still chose the path to the cross. His love is not swayed by the fickleness of human hearts.',
        },
        question: {
          zh: '你对耶稣的热心是否也会随环境而改变？如何在困难中持守对主的忠心？',
          en: 'Does your enthusiasm for Jesus change with circumstances? How can you remain faithful to the Lord in difficult times?',
        },
        prayer: {
          zh: '主耶稣，祢明知前方是十字架，仍然义无反顾地走进耶路撒冷。求祢帮助我们不做善变的跟随者，而是在任何环境中都忠心跟随祢。奉主耶稣的名祷告，阿们。',
          en: 'Lord Jesus, You knew the cross awaited You yet still resolutely entered Jerusalem. Help us not be fickle followers but remain faithful in all circumstances. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '约翰福音 13:4-5',
          ref_en: 'John 13:4-5',
          text_zh: '就离席站起来，脱了衣服，拿一条手巾束腰，随后把水倒在盆里，就洗门徒的脚，并用自己所束的手巾擦干。',
          text_en: 'He riseth from supper, and laid aside his garments; and took a towel, and girded himself. After that he poureth water into a bason, and began to wash the disciples’ feet, and to wipe them with the towel wherewith he was girded.',
        },
        reflection: {
          zh: '万王之王弯腰为门徒洗脚，这是何等惊人的画面！在那个时代，洗脚是最卑微的仆人才做的事。耶稣用行动教导门徒：真正的伟大不在于被人服事，而在于服事人。祂为我们树立了谦卑服事的终极榜样。',
          en: 'The King of kings stooped to wash His disciples\' feet — what an astonishing scene! In that era, foot-washing was the task of the lowliest servant. Jesus taught His disciples through action: true greatness is not in being served but in serving. He set the ultimate example of humble service.',
        },
        question: {
          zh: '你愿意放下身段去服事别人吗？在家庭中，你可以如何效法耶稣谦卑服事的榜样？',
          en: 'Are you willing to humble yourself to serve others? In your family, how can you follow Jesus\' example of humble service?',
        },
        prayer: {
          zh: '主耶稣，祢是万王之王，却甘愿跪下为门徒洗脚。求祢赐给我们谦卑的心，让我们甘心乐意地服事家人和身边的人。奉主耶稣的名祷告，阿们。',
          en: 'Lord Jesus, You are King of kings yet willingly knelt to wash Your disciples\' feet. Give us humble hearts, willing to joyfully serve our families and those around us. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '路加福音 22:19-20',
          ref_en: 'Luke 22:19-20',
          text_zh: '又拿起饼来，祝谢了，就擘开，递给他们，说："这是我的身体，为你们舍的，你们也应当如此行，为的是记念我。"饭后也照样拿起杯来，说："这杯是用我血所立的新约，是为你们流出来的。"',
          text_en: 'And he took bread, and gave thanks, and brake it, and gave unto them, saying, This is my body which is given for you: this do in remembrance of me. Likewise also the cup after supper, saying, This cup is the new testament in my blood, which is shed for you.',
        },
        reflection: {
          zh: '最后的晚餐是耶稣设立圣餐的时刻。饼代表祂为我们破碎的身体，杯代表祂为我们流出的血。每次领圣餐，我们都在记念主的死，宣告祂的爱，期盼祂的再来。这不只是仪式，更是与基督亲密相交的时刻。',
          en: 'The Last Supper is when Jesus instituted communion. The bread represents His body broken for us; the cup represents His blood shed for us. Each time we take communion, we remember the Lord\'s death, proclaim His love, and anticipate His return. This is not merely a ritual but an intimate moment of fellowship with Christ.',
        },
        question: {
          zh: '你上一次领圣餐时，心中有什么感受？"为的是记念我"对你意味着什么？',
          en: 'What did you feel the last time you took communion? What does "do this in remembrance of me" mean to you?',
        },
        prayer: {
          zh: '主耶稣，感谢祢为我们舍身流血，设立新约。每次我们擘饼举杯，求祢帮助我们真实地记念祢的牺牲，更深地经历祢的爱。奉主耶稣的名祷告，阿们。',
          en: 'Lord Jesus, thank You for giving Your body and blood to establish the new covenant. Each time we break bread and lift the cup, help us truly remember Your sacrifice and experience Your love more deeply. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '马太福音 26:38-39',
          ref_en: 'Matthew 26:38-39',
          text_zh: '便对他们说："我心里甚是忧伤，几乎要死；你们在这里等候，和我一同警醒。"他就稍往前走，俯伏在地，祷告说："我父啊，倘若可行，求你叫这杯离开我。然而，不要照我的意思，只要照你的意思。"',
          text_en: 'Then saith he unto them, My soul is exceeding sorrowful, even unto death: tarry ye here, and watch with me. And he went a little farther, and fell on his face, and prayed, saying, O my Father, if it be possible, let this cup pass from me: nevertheless not as I will, but as thou wilt.',
        },
        reflection: {
          zh: '客西马尼园的祷告让我们看到耶稣完全的人性——祂真实地经历了恐惧和忧伤。"这杯"是指神对罪的忿怒，耶稣将要代替我们承担。然而祂的祷告以"不要照我的意思，只要照你的意思"结束。这是完全的顺服，是信心最高的表达。',
          en: 'Jesus\' prayer in Gethsemane reveals His full humanity — He genuinely experienced fear and sorrow. "This cup" refers to God\'s wrath against sin that Jesus would bear on our behalf. Yet His prayer ends with "not as I will, but as you will." This is complete surrender — the highest expression of faith.',
        },
        question: {
          zh: '当你面对极大的困难时，你能像耶稣一样祷告"不要照我的意思，只要照你的意思"吗？',
          en: 'When facing great difficulty, can you pray like Jesus: "not as I will, but as you will"?',
        },
        prayer: {
          zh: '天父，主耶稣在最深的痛苦中仍然顺服祢的旨意。当我们面对人生的苦杯时，求祢帮助我们也能说"不要照我的意思，只要照你的意思"。奉主耶稣的名祷告，阿们。',
          en: 'Father, Lord Jesus submitted to Your will even in deepest anguish. When we face life\'s bitter cups, help us also say "not as I will, but as You will." In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '马太福音 26:49-50',
          ref_en: 'Matthew 26:49-50',
          text_zh: '犹大随即到耶稣跟前，说："请拉比安"，就与他亲嘴。耶稣对他说："朋友，你来要做的事，就做吧。"',
          text_en: 'And forthwith he came to Jesus, and said, Hail, master; and kissed him. And Jesus said unto him, Friend, wherefore art thou come? Then came they, and laid hands on Jesus, and took him.',
        },
        reflection: {
          zh: '犹大用亲嘴——这个表示亲密和爱的动作——来出卖耶稣。最亲近的人的背叛是最深的伤害。但耶稣仍然称犹大为"朋友"。即使在被出卖的时刻，耶稣依然给犹大悔改的机会。祂对罪人的爱，连背叛都无法夺去。',
          en: 'Judas used a kiss — a gesture of intimacy and love — to betray Jesus. Betrayal by someone closest causes the deepest wound. Yet Jesus still called Judas "friend." Even at the moment of betrayal, Jesus offered Judas a chance to repent. His love for sinners cannot be taken away, not even by betrayal.',
        },
        question: {
          zh: '你是否经历过被亲近的人伤害或背叛？耶稣的回应如何帮助你面对这样的经历？',
          en: 'Have you experienced hurt or betrayal from someone close? How does Jesus\' response help you face such experiences?',
        },
        prayer: {
          zh: '主耶稣，祢承受了最亲近之人的背叛，却仍以恩慈回应。当我们被人伤害时，求祢帮助我们效法祢的榜样，以爱回应伤害。奉主耶稣的名祷告，阿们。',
          en: 'Lord Jesus, You endured betrayal from those closest to You yet responded with grace. When we are hurt by others, help us follow Your example and respond to hurt with love. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '马太福音 27:22-24',
          ref_en: 'Matthew 27:22-24',
          text_zh: '彼拉多说："这样，那称为基督的耶稣，我怎么办他呢？"他们都说："把他钉十字架！"巡抚说："为什么呢？他做了什么恶事呢？"他们便极力地喊着说："把他钉十字架！"彼拉多见说也无济于事，反要生乱，就拿水在众人面前洗手，说："流这义人的血，罪不在我，你们承当吧。"',
          text_en: 'Pilate saith unto them, What shall I do then with Jesus which is called Christ? They all say unto him, Let him be crucified. And the governor said, Why, what evil hath he done? But they cried out the more, saying, Let him be crucified. When Pilate saw that he could prevail nothing, but that rather a tumult was made, he took water, and washed his hands before the multitude, saying, I am innocent of the blood of this just person: see ye to it.',
        },
        reflection: {
          zh: '彼拉多明知耶稣是无罪的，却因惧怕众人而妥协。洗手并不能洗去他的责任。在真理面前，沉默和回避就是同谋。我们每个人都面临类似的选择：是站在真理一边，还是向压力妥协？',
          en: 'Pilate knew Jesus was innocent yet compromised out of fear of the crowd. Washing his hands could not wash away his responsibility. Before truth, silence and avoidance make us accomplices. Each of us faces a similar choice: stand with truth, or compromise under pressure?',
        },
        question: {
          zh: '你是否曾因为害怕别人的看法而不敢为真理发声？如何在压力面前坚守信仰？',
          en: 'Have you ever been afraid to speak up for truth because of what others might think? How do you stand firm in faith under pressure?',
        },
        prayer: {
          zh: '主啊，求祢赐给我们勇气，在这个世代为真理站立。不要让我们像彼拉多一样因惧怕而妥协，而是给我们胆量为祢作见证。奉主耶稣的名祷告，阿们。',
          en: 'Lord, give us courage to stand for truth in this generation. Don\'t let us compromise like Pilate out of fear, but give us boldness to witness for You. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '以赛亚书 53:5',
          ref_en: 'Isaiah 53:5',
          text_zh: '哪知他为我们的过犯受害，为我们的罪孽压伤。因他受的刑罚，我们得平安；因他受的鞭伤，我们得医治。',
          text_en: 'But he was wounded for our transgressions, he was bruised for our iniquities: the chastisement of our peace was upon him; and with his stripes we are healed.',
        },
        reflection: {
          zh: '以赛亚书53章是旧约中最清晰的十字架预言，写于耶稣降生前七百年。每一个"我们"和"他"的对比都令人震撼：我们的过犯——他受害；我们的罪孽——他压伤；我们得平安——因他受刑罚。十字架的本质就是替代：无罪的代替有罪的。',
          en: 'Isaiah 53 is the clearest Old Testament prophecy of the cross, written 700 years before Jesus\' birth. Every contrast between "our" and "his" is stunning: our transgressions — he was pierced; our iniquities — he was crushed; we receive peace — through his punishment. The essence of the cross is substitution: the sinless One taking the place of sinners.',
        },
        question: {
          zh: '"因他受的鞭伤，我们得医治"——这句话对你个人意味着什么？你心中有什么伤需要主来医治？',
          en: '"With his wounds we are healed" — what does this mean to you personally? What wounds in your heart need the Lord\'s healing?',
        },
        prayer: {
          zh: '主耶稣，祢为我们的过犯受害，为我们的罪孽压伤。我们本不配得，但祢甘愿替代我们。感谢祢的鞭伤带给我们医治，祢的刑罚带给我们平安。奉主耶稣的名祷告，阿们。',
          en: 'Lord Jesus, You were pierced for our transgressions and crushed for our iniquities. We did not deserve it, but You willingly took our place. Thank You that Your wounds bring us healing and Your punishment brings us peace. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '马可福音 15:33-34',
          ref_en: 'Mark 15:33-34',
          text_zh: '从午正到申初，遍地都黑暗了。申初的时候，耶稣大声喊着说："以罗伊！以罗伊！拉马撒巴各大尼？"翻出来就是："我的神！我的神！为什么离弃我？"',
          text_en: 'And when the sixth hour was come, there was darkness over the whole land until the ninth hour. And at the ninth hour Jesus cried with a loud voice, saying, Eloi, Eloi, lama sabachthani? which is, being interpreted, My God, my God, why hast thou forsaken me?',
        },
        reflection: {
          zh: '这是整本圣经中最沉重的一句话。圣父与圣子之间永恒的团契在这一刻断裂了——因为耶稣担当了我们的罪。遍地的黑暗是外在的记号，内在的黑暗更加深沉。耶稣经历了被神离弃的痛苦，好叫我们永远不再被神离弃。',
          en: 'This is the most weighty sentence in all of Scripture. The eternal fellowship between Father and Son was severed in this moment — because Jesus bore our sin. The darkness over the land was an outward sign; the inner darkness was far deeper. Jesus experienced the agony of being forsaken by God so that we would never be forsaken.',
        },
        question: {
          zh: '你是否经历过感觉神不在身边的时刻？知道耶稣为你经历了被神离弃，这如何安慰你？',
          en: 'Have you experienced moments when God felt absent? How does knowing Jesus endured being forsaken by God for you bring comfort?',
        },
        prayer: {
          zh: '主耶稣，祢在十字架上经历了被父离弃的极深痛苦，为的是让我们永远不被离弃。感谢祢为我们承受了这一切。当我们感到孤独时，提醒我们祢永远与我们同在。奉主耶稣的名祷告，阿们。',
          en: 'Lord Jesus, You endured the deepest agony of being forsaken by the Father so we would never be forsaken. Thank You for bearing all this for us. When we feel alone, remind us You are always with us. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '路加福音 23:34',
          ref_en: 'Luke 23:34',
          text_zh: '当下耶稣说："父啊！赦免他们；因为他们所做的，他们不晓得。"',
          text_en: 'Then said Jesus, Father, forgive them; for they know not what they do. And they parted his raiment, and cast lots.',
        },
        reflection: {
          zh: '在十字架上极度的痛苦中，耶稣开口说的第一句话不是咒诅，不是求救，而是为钉祂的人祷告。这就是十字架的爱——不是爱那些可爱的人，而是爱那些正在伤害你的人。这样的饶恕超越了人的能力，只有从神而来的爱才能做到。',
          en: 'In the extreme agony of the cross, Jesus\' first words were not a curse or a cry for help, but a prayer for those crucifying Him. This is the love of the cross — not loving those who are lovable, but loving those who are hurting you. Such forgiveness exceeds human ability; only love from God can accomplish this.',
        },
        question: {
          zh: '耶稣为伤害祂的人祷告。有没有什么人是你觉得很难饶恕的？你能为他们祷告吗？',
          en: 'Jesus prayed for those who hurt Him. Is there someone you find very hard to forgive? Can you pray for them?',
        },
        prayer: {
          zh: '主耶稣，祢在十字架上为仇敌祷告，这样的爱我们做不到，但祢能。求祢把这样的爱放在我们心里，帮助我们饶恕那些伤害过我们的人。奉主耶稣的名祷告，阿们。',
          en: 'Lord Jesus, You prayed for Your enemies on the cross — a love we cannot achieve, but You can. Place this love in our hearts and help us forgive those who have hurt us. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '路加福音 23:42-43',
          ref_en: 'Luke 23:42-43',
          text_zh: '就说："耶稣啊，你得国降临的时候，求你记念我！"耶稣对他说："我实在告诉你，今日你要同我在乐园里了。"',
          text_en: 'And he said unto Jesus, Lord, remember me when thou comest into thy kingdom. And Jesus said unto him, Verily I say unto thee, To day shalt thou be with me in paradise.',
        },
        reflection: {
          zh: '十字架上的强盗是恩典最有力的见证。他没有受洗，没有行过善事，没有时间"改过自新"，只是在生命的最后一刻信靠了耶稣。耶稣的回应何等宝贵："今日你要同我在乐园里了。"救恩从来不是靠我们赚取的，而是白白赐给信靠之人的礼物。',
          en: 'The thief on the cross is the most powerful testimony of grace. He was not baptized, had done no good works, had no time to "reform" — he simply trusted Jesus in his final moment. Jesus\' response is precious: "Today you will be with me in paradise." Salvation is never earned; it is a free gift to all who believe.',
        },
        question: {
          zh: '十字架上的强盗告诉我们，什么时候信主都不算晚。你身边有谁需要听到这样的恩典信息？',
          en: 'The thief on the cross shows it\'s never too late to believe. Who around you needs to hear this message of grace?',
        },
        prayer: {
          zh: '主耶稣，感谢祢的恩典如此浩大，即使在十字架上也能拯救信靠祢的人。求祢帮助我们把这恩典的好消息传给身边的人，让更多人认识祢。奉主耶稣的名祷告，阿们。',
          en: 'Lord Jesus, thank You that Your grace is so great it can save even on the cross. Help us share this good news of grace with those around us, that more may know You. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '约翰福音 19:28-30',
          ref_en: 'John 19:28-30',
          text_zh: '这事以后，耶稣知道各样的事已经成了，为要使经上的话应验，就说："我渴了。"……耶稣尝了那醋，就说："成了！"便低下头，将灵魂交付神了。',
          text_en: 'After this, Jesus knowing that all things were now accomplished, that the scripture might be fulfilled, saith, I thirst. Now there was set a vessel full of vinegar: and they filled a spunge with vinegar, and put it upon hyssop, and put it to his mouth. When Jesus therefore had received the vinegar, he said, It is finished: and he bowed his head, and gave up the ghost.',
        },
        reflection: {
          zh: '"成了！"这一个字（希腊文tetelestai）是整个救赎历史的高潮。它的意思是"完全偿清了"。耶稣不是说"我完了"，而是说"完成了"。罪债已清，救恩已成，再没有什么需要我们添加的。我们的得救不是靠信心加行为，而是单单靠基督在十字架上已经完成的工作。',
          en: '"It is finished!" This single word (Greek: tetelestai) is the climax of redemption history. It means "paid in full." Jesus did not say "I am finished" but "It is accomplished." The debt of sin is cleared, salvation is complete — there is nothing for us to add. Our salvation rests not on faith plus works, but solely on Christ\'s finished work on the cross.',
        },
        question: {
          zh: '"成了"意味着救恩已经完成。你是否还在试图靠自己的努力来赢得神的接纳？',
          en: '"It is finished" means salvation is complete. Are you still trying to earn God\'s acceptance through your own efforts?',
        },
        prayer: {
          zh: '主耶稣，感谢祢在十字架上说了"成了"。救恩已经完成，罪债已经偿清。帮助我们不再靠自己的行为，而是完全安息在祢已成就的工作上。奉主耶稣的名祷告，阿们。',
          en: 'Lord Jesus, thank You for saying "It is finished" on the cross. Salvation is complete and the debt is paid. Help us rest not in our own works but fully in Your finished work. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '马太福音 27:51-54',
          ref_en: 'Matthew 27:51-54',
          text_zh: '忽然，殿里的幔子从上到下裂为两半，地也震动，磐石也崩裂……百夫长和一同看守耶稣的人看见地震并所经历的事，就极其害怕，说："这真是神的儿子了！"',
          text_en: 'And, behold, the veil of the temple was rent in twain from the top to the bottom; and the earth did quake, and the rocks rent; And the graves were opened; and many bodies of the saints which slept arose, And came out of the graves after his resurrection, and went into the holy city, and appeared unto many. Now when the centurion, and they that were with him, watching Jesus, saw the earthquake, and those things that were done, they feared greatly, saying, Truly this was the Son of God.',
        },
        reflection: {
          zh: '殿里的幔子从上到下裂开——注意是"从上到下"，这不是人手所为，而是神亲自撕裂的。这幔子原来隔开圣所和至圣所，象征人与神之间的阻隔。幔子裂开意味着通往神面前的路已经打开，每个信靠基督的人都可以坦然无惧地来到神面前。',
          en: 'The temple curtain was torn from top to bottom — note "from top to bottom," not by human hands but by God Himself. This curtain separated the Holy Place from the Most Holy, symbolizing the barrier between humanity and God. Its tearing means the way to God is now open — every believer in Christ can come boldly before God.',
        },
        question: {
          zh: '殿里幔子裂开意味着你可以直接来到神面前。你是否充分享受了这个特权？',
          en: 'The torn curtain means you can come directly before God. Are you fully enjoying this privilege?',
        },
        prayer: {
          zh: '天父，感谢祢借着基督的死撕裂了幔子，打开了通往祢面前的路。我们不再需要中间人，可以坦然无惧地来到祢的施恩座前。求祢帮助我们珍惜这宝贵的特权。奉主耶稣的名祷告，阿们。',
          en: 'Father, thank You for tearing the curtain through Christ\'s death and opening the way to You. We no longer need a mediator and can come boldly to Your throne of grace. Help us treasure this precious privilege. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '约翰福音 19:38-40',
          ref_en: 'John 19:38-40',
          text_zh: '这些事以后，有亚利马太人约瑟，是耶稣的门徒，只因怕犹太人，就暗暗地作门徒。他来求彼拉多，要把耶稣的身体领去。彼拉多允准，他就把耶稣的身体领去了。又有尼哥底母……带着没药和沉香约有一百斤前来。',
          text_en: 'And after this Joseph of Arimathaea, being a disciple of Jesus, but secretly for fear of the Jews, besought Pilate that he might take away the body of Jesus: and Pilate gave him leave. He came therefore, and took the body of Jesus. And there came also Nicodemus, which at the first came to Jesus by night, and brought a mixture of myrrh and aloes, about an hundred pound weight. Then took they the body of Jesus, and wound it in linen clothes with the spices, as the manner of the Jews is to bury.',
        },
        reflection: {
          zh: '约瑟和尼哥底母是"暗暗的门徒"——一个因惧怕而秘密跟随，一个只敢夜里来找耶稣。但在耶稣最需要人站出来的时刻，当其他门徒都逃走时，反而是这两个胆小的人勇敢地站了出来。十字架改变了他们。有时候，信心在最黑暗的时刻反而最明亮。',
          en: 'Joseph and Nicodemus were "secret disciples" — one followed secretly out of fear, the other came to Jesus only at night. But at the moment when Jesus most needed someone to step forward, when other disciples had fled, these two timid men bravely emerged. The cross changed them. Sometimes faith shines brightest in the darkest hour.',
        },
        question: {
          zh: '你是否也是一个"暗暗的门徒"？十字架的爱是否激励你更勇敢地表明信仰？',
          en: 'Are you also a "secret disciple"? Does the love of the cross inspire you to be bolder in expressing your faith?',
        },
        prayer: {
          zh: '主啊，求祢帮助我们不做暗暗的门徒。十字架的爱如此伟大，值得我们勇敢地宣告。赐给我们约瑟和尼哥底母一样的勇气，在关键时刻为祢站出来。奉主耶稣的名祷告，阿们。',
          en: 'Lord, help us not be secret disciples. The love of the cross is so great that it deserves our bold proclamation. Give us courage like Joseph and Nicodemus to stand up for You at the crucial moment. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '彼得前书 2:24',
          ref_en: '1 Peter 2:24',
          text_zh: '他被挂在木头上，亲身担当了我们的罪，使我们既然在罪上死，就得以在义上活。因他受的鞭伤，你们便得了医治。',
          text_en: 'Who his own self bare our sins in his own body on the tree, that we, being dead to sins, should live unto righteousness: by whose stripes ye were healed.',
        },
        reflection: {
          zh: '彼得曾三次不认主，他比任何人都更深地体会十字架恩典的宝贵。"亲身担当"——耶稣不是远远地替我们安排救恩，而是亲自上了十字架。十字架的目的不只是赦免我们的罪，更是让我们"在义上活"——活出新生命。恩典不是让我们继续犯罪的许可证，而是改变生命的力量。',
          en: 'Peter, who denied the Lord three times, understood the preciousness of cross-borne grace more deeply than anyone. "He himself bore" — Jesus did not arrange salvation from afar but personally went to the cross. The purpose of the cross is not only to forgive our sins but to enable us to "live to righteousness" — to live new lives. Grace is not a license to sin but the power to transform.',
        },
        question: {
          zh: '十字架不只赦免罪，更给我们活出新生命的力量。你的生命因十字架发生了什么改变？',
          en: 'The cross not only forgives sin but empowers us to live new lives. How has the cross changed your life?',
        },
        prayer: {
          zh: '主耶稣，感谢祢亲身担当了我们的罪。求祢帮助我们不只享受赦免的恩典，更活出十字架改变生命的大能，在义上活，荣耀祢的名。奉主耶稣的名祷告，阿们。',
          en: 'Lord Jesus, thank You for bearing our sins in Your own body. Help us not only enjoy the grace of forgiveness but live out the transforming power of the cross — living in righteousness and glorifying Your name. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '希伯来书 12:2',
          ref_en: 'Hebrews 12:2',
          text_zh: '仰望为我们信心创始成终的耶稣。他因那摆在前面的喜乐，就轻看羞辱，忍受了十字架的苦难，便坐在神宝座的右边。',
          text_en: 'Looking unto Jesus the author and finisher of our faith; who for the joy that was set before him endured the cross, despising the shame, and is set down at the right hand of the throne of God.',
        },
        reflection: {
          zh: '耶稣忍受十字架不是因为祂喜欢受苦，而是因为"那摆在前面的喜乐"。这喜乐是什么？是我们！是你和我得赎回归神的喜乐。祂看见了十字架那一边的荣耀——千千万万被拯救的灵魂与祂永远同在。如今祂已坐在神宝座的右边，受难已过，荣耀永在。',
          en: 'Jesus endured the cross not because He enjoyed suffering, but because of "the joy set before Him." What was this joy? Us! The joy of you and me being redeemed and brought back to God. He saw the glory beyond the cross — countless saved souls with Him forever. Now He is seated at God\'s right hand. The suffering is past; the glory is eternal.',
        },
        question: {
          zh: '知道耶稣是因为你的缘故而忍受十字架，这如何影响你对祂的爱和感恩？',
          en: 'Knowing Jesus endured the cross for your sake, how does this affect your love and gratitude toward Him?',
        },
        prayer: {
          zh: '主耶稣，祢因那摆在前面的喜乐忍受了十字架。而那喜乐竟然包括我们！何等不可思议的爱！求祢帮助我们时时仰望祢，在人生的艰难中效法祢忍耐到底。奉主耶稣的名祷告，阿们。',
          en: 'Lord Jesus, You endured the cross for the joy set before You — and that joy includes us! What incredible love! Help us always look to You and follow Your example of endurance through life\'s difficulties. In Jesus\' name, amen.',
        },
      },
    ],
  },
  {
    id: 'resurrection',
    name_zh: '复活节',
    name_en: 'Easter & Resurrection',
    icon: '🌅',
    hymnKeywords: ['复活', '得胜', 'resurrection', 'risen'],
    devotionals: [
      {
        scripture: {
          ref_zh: '马太福音 28:5-6',
          ref_en: 'Matthew 28:5-6',
          text_zh: '天使对妇女说："不要害怕！我知道你们是寻找那钉十字架的耶稣。他不在这里，照他所说的，已经复活了。你们来看安放主的地方。"',
          text_en: 'And the angel answered and said unto the women, Fear not ye: for I know that ye seek Jesus, which was crucified. He is not here: for he is risen, as he said. Come, see the place where the Lord lay.',
        },
        reflection: {
          zh: '"他不在这里，已经复活了"——这是人类历史上最伟大的宣告。坟墓空了！死亡被打败了！如果耶稣没有复活，我们的信就是徒然的。但祂确实复活了，正如祂所预言的。复活不只是一个历史事件，更是我们信仰的根基和盼望的源头。',
          en: '"He is not here, for he has risen" — this is the greatest announcement in human history. The tomb is empty! Death is defeated! If Jesus had not risen, our faith would be in vain. But He truly rose, just as He foretold. The resurrection is not merely a historical event but the foundation of our faith and the source of our hope.',
        },
        question: {
          zh: '复活节对你意味着什么？耶稣的复活如何影响你面对死亡和困难的态度？',
          en: 'What does Easter mean to you? How does Jesus\' resurrection affect your attitude toward death and hardship?',
        },
        prayer: {
          zh: '主耶稣，祢已经复活了！死亡不能拘禁祢，坟墓不能关住祢。因为祢活着，我们也将要活着。感谢祢赐给我们复活的盼望和永生的确据。奉主耶稣的名祷告，阿们。',
          en: 'Lord Jesus, You are risen! Death could not hold You; the grave could not keep You. Because You live, we also shall live. Thank You for the hope of resurrection and the assurance of eternal life. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '约翰福音 20:15-16',
          ref_en: 'John 20:15-16',
          text_zh: '耶稣问她说："妇人，为什么哭？你找谁？"马利亚以为是看园的，就对他说："先生，若是你把他移了去，请告诉我，你把他放在哪里，我便去取他。"耶稣说："马利亚。"马利亚就转过来，用希伯来话对他说："拉波尼！"',
          text_en: 'Jesus saith unto her, Woman, why weepest thou? whom seekest thou? She, supposing him to be the gardener, saith unto him, Sir, if thou have borne him hence, tell me where thou hast laid him, and I will take him away. Jesus saith unto her, Mary. She turned herself, and saith unto him, Rabboni; which is to say, Master.',
        },
        reflection: {
          zh: '复活的主第一个显现给抹大拉的马利亚——一个曾被七个鬼附的女人。耶稣只说了一个字："马利亚"，她就认出了祂。好牧人按名字呼唤祂的羊。耶稣复活后第一件事不是彰显权能，而是安慰一个哭泣的人。祂的温柔令人动容。',
          en: 'The risen Lord first appeared to Mary Magdalene — a woman once possessed by seven demons. Jesus spoke just one word: "Mary," and she recognized Him. The Good Shepherd calls His sheep by name. After resurrection, Jesus\' first act was not to display power but to comfort a weeping person. His tenderness is deeply moving.',
        },
        question: {
          zh: '耶稣认识你的名字，知道你的眼泪。你是否在最伤心的时刻听到过主温柔的呼唤？',
          en: 'Jesus knows your name and sees your tears. Have you heard the Lord\'s gentle call in your saddest moments?',
        },
        prayer: {
          zh: '主耶稣，祢呼唤马利亚的名字，也呼唤我们的名字。感谢祢在我们最软弱的时刻来安慰我们。求祢让我们的耳朵敏锐，能听见祢温柔的声音。奉主耶稣的名祷告，阿们。',
          en: 'Lord Jesus, You called Mary\'s name and You call ours. Thank You for comforting us in our weakest moments. Make our ears sensitive to hear Your gentle voice. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '路加福音 24:30-32',
          ref_en: 'Luke 24:30-32',
          text_zh: '到了坐席的时候，耶稣拿起饼来，祝谢了，擘开，递给他们。他们的眼睛明亮了，这才认出他来。忽然耶稣不见了。他们彼此说："在路上他和我们说话、给我们讲解圣经的时候，我们的心岂不是火热的吗？"',
          text_en: 'And it came to pass, as he sat at meat with them, he took bread, and blessed it, and brake, and gave to them. And their eyes were opened, and they knew him; and he vanished out of their sight. And they said one to another, Did not our heart burn within us, while he talked with us by the way, and while he opened to us the scriptures?',
        },
        reflection: {
          zh: '以马忤斯路上的两个门徒，心里愁闷灰心，复活的耶稣亲自走近他们，为他们讲解圣经。当祂擘饼时，他们的眼睛就明亮了。注意：是圣经使他们的心火热，是擘饼使他们认出主来。读经和圣餐——这两样至今仍是我们认识基督的主要途径。',
          en: 'Two disciples on the Emmaus road were downcast and discouraged. The risen Jesus Himself drew near and explained the Scriptures to them. When He broke bread, their eyes were opened. Note: Scripture made their hearts burn; breaking bread revealed the Lord. Bible reading and communion — these two remain our primary ways of knowing Christ today.',
        },
        question: {
          zh: '你读圣经时，心是否"火热"？如何让每日读经成为遇见复活主的时刻？',
          en: 'Does your heart "burn" when you read Scripture? How can daily Bible reading become a moment of encountering the risen Lord?',
        },
        prayer: {
          zh: '主耶稣，求祢像在以马忤斯路上一样，亲自为我们讲解圣经，让我们的心重新火热起来。打开我们的眼睛，在祢的话语中认出祢来。奉主耶稣的名祷告，阿们。',
          en: 'Lord Jesus, as on the Emmaus road, personally open the Scriptures to us and set our hearts ablaze again. Open our eyes to recognize You in Your Word. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '约翰福音 20:27-28',
          ref_en: 'John 20:27-28',
          text_zh: '就对多马说："伸过你的指头来，摸我的手；伸出你的手来，探入我的肋旁。不要疑惑，总要信。"多马说："我的主！我的神！"',
          text_en: 'Then saith he to Thomas, Reach hither thy finger, and behold my hands; and reach hither thy hand, and thrust it into my side: and be not faithless, but believing. And Thomas answered and said unto him, My LORD and my God.',
        },
        reflection: {
          zh: '多马常被称为"怀疑的多马"，但耶稣没有责备他，而是满足了他的需要。耶稣理解我们的软弱和怀疑。注意多马看见复活主后的回应："我的主！我的神！"——这是福音书中最完整的信仰告白。有时候怀疑是通往更深信心的必经之路。',
          en: 'Thomas is often called "doubting Thomas," but Jesus did not rebuke him — He met his need. Jesus understands our weakness and doubt. Note Thomas\' response upon seeing the risen Lord: "My Lord and my God!" — the fullest confession of faith in the Gospels. Sometimes doubt is a necessary path to deeper faith.',
        },
        question: {
          zh: '你是否有过信仰上的怀疑？多马的经历如何鼓励你在疑惑中继续寻求？',
          en: 'Have you had doubts in your faith? How does Thomas\' experience encourage you to keep seeking amid uncertainty?',
        },
        prayer: {
          zh: '主耶稣，感谢祢不嫌弃我们的怀疑和软弱。求祢像对待多马一样对待我们，在疑惑中引导我们进入更深的信心，直到我们也能说"我的主！我的神！"奉主耶稣的名祷告，阿们。',
          en: 'Lord Jesus, thank You for not despising our doubts and weakness. Treat us as You treated Thomas — guide us through doubt into deeper faith until we too can say "My Lord and my God!" In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '约翰福音 21:15-17',
          ref_en: 'John 21:15-17',
          text_zh: '耶稣对西门彼得说："约翰的儿子西门，你爱我比这些更深吗？"彼得说："主啊，是的，你知道我爱你。"耶稣对他说："你喂养我的小羊。"',
          text_en: 'So when they had dined, Jesus saith to Simon Peter, Simon, son of Jonas, lovest thou me more than these? He saith unto him, Yea, Lord; thou knowest that I love thee. He saith unto him, Feed my lambs. He saith to him again the second time, Simon, son of Jonas, lovest thou me? He saith unto him, Yea, Lord; thou knowest that I love thee. He saith unto him, Feed my sheep. He saith unto him the third time, Simon, son of Jonas, lovest thou me? Peter was grieved because he said unto him the third time, Lovest thou me? And he said unto him, Lord, thou knowest all things; thou knowest that I love thee. Jesus saith unto him, Feed my sheep.',
        },
        reflection: {
          zh: '彼得三次不认主，复活的耶稣三次问他"你爱我吗"——不是为了羞辱他，而是为了恢复他。每一次回答都医治一次否认的伤口。耶稣不只饶恕彼得，还重新委派他"喂养我的羊"。复活的主不放弃失败的人，反而给他们新的使命。',
          en: 'Peter denied Jesus three times; the risen Jesus asked him three times "Do you love me?" — not to shame him but to restore him. Each answer healed one denial wound. Jesus not only forgave Peter but recommissioned him: "Feed my sheep." The risen Lord does not abandon those who fail but gives them new purpose.',
        },
        question: {
          zh: '你是否因为曾经的失败而觉得神不会再用你了？彼得的恢复给你什么鼓励？',
          en: 'Do you feel God can no longer use you because of past failures? What encouragement does Peter\'s restoration give you?',
        },
        prayer: {
          zh: '主耶稣，感谢祢不放弃失败的人。祢恢复了彼得，也要恢复我们。求祢医治我们过去失败的伤口，重新赐给我们服事祢的使命和力量。奉主耶稣的名祷告，阿们。',
          en: 'Lord Jesus, thank You for not abandoning those who fail. You restored Peter and will restore us. Heal the wounds of our past failures and renew our mission and strength to serve You. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '哥林多前书 15:3-5',
          ref_en: '1 Corinthians 15:3-5',
          text_zh: '我当日所领受又传给你们的：第一，就是基督照圣经所说，为我们的罪死了，而且埋葬了；又照圣经所说，第三天复活了，并且显给矶法看，然后显给十二使徒看。',
          text_en: 'For I delivered unto you first of all that which I also received, how that Christ died for our sins according to the scriptures; And that he was buried, and that he rose again the third day according to the scriptures: And that he was seen of Cephas, then of the twelve:',
        },
        reflection: {
          zh: '保罗把福音浓缩为最核心的内容：基督死了、埋葬了、复活了、显现了。这不是神话传说，而是有众多目击证人的历史事件。"照圣经所说"出现两次，强调这一切都在神的计划之中。福音不复杂——它的核心就是基督的死与复活。',
          en: 'Paul distills the gospel to its core: Christ died, was buried, was raised, and appeared. This is not myth but a historical event with many eyewitnesses. "In accordance with the Scriptures" appears twice, emphasizing all this was part of God\'s plan. The gospel is not complicated — its core is Christ\'s death and resurrection.',
        },
        question: {
          zh: '如果有人问你"福音是什么"，你能用一两句话说清楚吗？试试看。',
          en: 'If someone asked you "What is the gospel?", could you explain it in one or two sentences? Try it.',
        },
        prayer: {
          zh: '天父，感谢祢赐给我们如此清晰的福音：基督为我们死了，又复活了。求祢帮助我们把这最重要的信息牢记在心，也能清楚地传讲给别人。奉主耶稣的名祷告，阿们。',
          en: 'Father, thank You for such a clear gospel: Christ died for us and rose again. Help us keep this most important message in our hearts and proclaim it clearly to others. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '哥林多前书 15:20-22',
          ref_en: '1 Corinthians 15:20-22',
          text_zh: '但基督已经从死里复活，成为睡了之人初熟的果子。死既是因一人而来，死人复活也是因一人而来。在亚当里众人都死了；照样，在基督里众人也都要复活。',
          text_en: 'But now is Christ risen from the dead, and become the firstfruits of them that slept. For since by man came death, by man came also the resurrection of the dead. For as in Adam all die, even so in Christ shall all be made alive.',
        },
        reflection: {
          zh: '基督的复活不是孤立事件，而是"初熟的果子"——预示着更大的丰收。祂的复活保证了所有信祂之人将来的复活。在亚当里，我们继承了死亡；在基督里，我们继承了生命。这就是福音的大能：死亡不是终点，而是通往永生的门。',
          en: 'Christ\'s resurrection is not an isolated event but "the firstfruits" — a preview of a greater harvest. His resurrection guarantees the future resurrection of all who believe. In Adam, we inherit death; in Christ, we inherit life. This is the power of the gospel: death is not the end but the door to eternal life.',
        },
        question: {
          zh: '知道你将来也会复活，这如何改变你看待今生苦难和死亡的方式？',
          en: 'Knowing you too will be resurrected, how does this change your perspective on suffering and death in this life?',
        },
        prayer: {
          zh: '主啊，感谢祢的复活是初熟的果子，保证了我们将来也要复活。在基督里，死亡已失去毒钩，坟墓已失去得胜。求祢帮助我们活在复活的盼望中。奉主耶稣的名祷告，阿们。',
          en: 'Lord, thank You that Your resurrection as firstfruits guarantees ours. In Christ, death has lost its sting and the grave its victory. Help us live in the hope of resurrection. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '罗马书 6:4-5',
          ref_en: 'Romans 6:4-5',
          text_zh: '所以，我们借着洗礼归入死，和他一同埋葬，原是叫我们一举一动有新生的样式，像基督借着父的荣耀从死里复活一样。我们若在他死的形状上与他联合，也要在他复活的形状上与他联合。',
          text_en: 'Therefore we are buried with him by baptism into death: that like as Christ was raised up from the dead by the glory of the Father, even so we also should walk in newness of life. For if we have been planted together in the likeness of his death, we shall be also in the likeness of his resurrection:',
        },
        reflection: {
          zh: '复活不只是未来的盼望，更是现在的实际。我们与基督同死同复活，意味着旧的生命已经过去，新的生命已经开始。"一举一动有新生的样式"——复活的能力不只改变我们死后的去处，更改变我们现在的生活方式。',
          en: 'Resurrection is not only a future hope but a present reality. Being united with Christ in death and resurrection means the old life has passed and new life has begun. "Walk in newness of life" — resurrection power changes not only our destination after death but our way of living now.',
        },
        question: {
          zh: '你的日常生活是否活出了"新生的样式"？哪些方面还需要经历复活的更新？',
          en: 'Does your daily life reflect "newness of life"? What areas still need the renewal of resurrection?',
        },
        prayer: {
          zh: '主啊，我们已经与基督同死同复活。求祢帮助我们活出新生命的样式，脱去旧人，穿上新人。让复活的大能在我们日常生活中彰显出来。奉主耶稣的名祷告，阿们。',
          en: 'Lord, we have died and risen with Christ. Help us live out the new life, putting off the old self and putting on the new. Let resurrection power be manifest in our daily lives. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '启示录 1:17-18',
          ref_en: 'Revelation 1:17-18',
          text_zh: '他用右手按着我说："不要惧怕！我是首先的，我是末后的，又是那存活的；我曾死过，现在又活了，直活到永永远远；并且拿着死亡和阴间的钥匙。"',
          text_en: 'And when I saw him, I fell at his feet as dead. And he laid his right hand upon me, saying unto me, Fear not; I am the first and the last: I am he that liveth, and was dead; and, behold, I am alive for evermore, Amen; and have the keys of hell and of death.',
        },
        reflection: {
          zh: '复活的基督拿着死亡和阴间的钥匙——祂是死亡的主人，不是死亡的受害者。因此祂说"不要惧怕"。无论我们面对什么——疾病、失去、甚至死亡本身——掌管这一切的是那位爱我们、为我们死而复活的主。祂活着，直到永永远远。',
          en: 'The risen Christ holds the keys of Death and Hades — He is the master of death, not its victim. Therefore He says "Fear not." Whatever we face — illness, loss, even death itself — the One who controls it all is the Lord who loves us and died and rose for us. He lives forever and ever.',
        },
        question: {
          zh: '你最害怕的是什么？知道复活的基督拿着死亡的钥匙，这如何帮助你面对恐惧？',
          en: 'What do you fear most? How does knowing the risen Christ holds the keys of Death help you face your fears?',
        },
        prayer: {
          zh: '主耶稣，祢曾死过，现在又活了，直活到永永远远。祢拿着死亡和阴间的钥匙，一切都在祢手中。我们不再惧怕，因为祢是我们的主。奉主耶稣的名祷告，阿们。',
          en: 'Lord Jesus, You died and are alive forevermore. You hold the keys of Death and Hades; everything is in Your hands. We fear no more, for You are our Lord. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '哥林多前书 15:55-57',
          ref_en: '1 Corinthians 15:55-57',
          text_zh: '"死啊！你得胜的权势在哪里？死啊！你的毒钩在哪里？"死的毒钩就是罪，罪的权势就是律法。感谢神，使我们借着我们的主耶稣基督得胜。',
          text_en: 'O death, where is thy sting? O grave, where is thy victory? The sting of death is sin; and the strength of sin is the law. But thanks be to God, which giveth us the victory through our Lord Jesus Christ.',
        },
        reflection: {
          zh: '这是保罗对死亡的嘲讽！死亡曾是人类最大的恐惧和仇敌，但因着基督的复活，死亡的毒钩已被拔去。罪使死亡可怕，但基督已经胜过罪；律法定人有罪，但基督已经满足了律法的要求。得胜不是靠我们，而是借着主耶稣基督。',
          en: 'This is Paul\'s taunt against death! Death was humanity\'s greatest fear and enemy, but through Christ\'s resurrection, death\'s sting has been removed. Sin makes death fearful, but Christ has conquered sin; the law condemns, but Christ has fulfilled its demands. Victory is not ours to achieve but comes through our Lord Jesus Christ.',
        },
        question: {
          zh: '你是否还惧怕死亡？基督的复活如何帮助你以得胜的心态面对人生的终点？',
          en: 'Do you still fear death? How does Christ\'s resurrection help you face life\'s end with a victorious mindset?',
        },
        prayer: {
          zh: '感谢神，使我们借着主耶稣基督得胜！死啊，你的毒钩在哪里？因着基督的复活，我们不再惧怕死亡。求祢帮助我们活出得胜的生命。奉主耶稣的名祷告，阿们。',
          en: 'Thanks be to God who gives us victory through our Lord Jesus Christ! O death, where is your sting? Through Christ\'s resurrection, we no longer fear death. Help us live victorious lives. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '腓立比书 3:10-11',
          ref_en: 'Philippians 3:10-11',
          text_zh: '使我认识基督，晓得他复活的大能，并且晓得和他一同受苦，效法他的死，或者我也得以从死里复活。',
          text_en: 'That I may know him, and the power of his resurrection, and the fellowship of his sufferings, being made conformable unto his death; If by any means I might attain unto the resurrection of the dead.',
        },
        reflection: {
          zh: '保罗的人生目标不是成功、财富或名声，而是"认识基督"。注意他把"复活的大能"和"一同受苦"放在一起——复活的能力不是让我们逃避苦难，而是让我们在苦难中有力量。真正认识基督意味着经历祂的全部：祂的能力和祂的苦难。',
          en: 'Paul\'s life goal was not success, wealth, or fame but "to know Christ." Notice he links "the power of his resurrection" with "sharing his sufferings" — resurrection power is not for escaping suffering but for having strength within it. Truly knowing Christ means experiencing all of Him: His power and His suffering.',
        },
        question: {
          zh: '你渴望认识基督到什么程度？你是否愿意为认识祂而付代价？',
          en: 'How deeply do you desire to know Christ? Are you willing to pay the cost of knowing Him?',
        },
        prayer: {
          zh: '主啊，我们渴望更深地认识祢。不只认识祢复活的大能，也愿意与祢一同受苦。求祢帮助我们在顺境和逆境中都经历祢、认识祢。奉主耶稣的名祷告，阿们。',
          en: 'Lord, we long to know You more deeply — not only Your resurrection power but sharing in Your sufferings. Help us experience and know You in prosperity and adversity alike. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '帖撒罗尼迦前书 4:13-14',
          ref_en: '1 Thessalonians 4:13-14',
          text_zh: '论到睡了的人，我们不愿意弟兄们不知道，恐怕你们忧伤，像那些没有指望的人一样。我们若信耶稣死而复活了，那已经在耶稣里睡了的人，神也必将他们与耶稣一同带来。',
          text_en: 'But I would not have you to be ignorant, brethren, concerning them which are asleep, that ye sorrow not, even as others which have no hope. For if we believe that Jesus died and rose again, even so them also which sleep in Jesus will God bring with him.',
        },
        reflection: {
          zh: '基督徒也会面对亲人的离世，也会悲伤。但我们的悲伤不同于没有盼望之人的悲伤。因为耶稣复活了，所有在基督里死去的人也必复活。死亡不是永别，而是暂时的分离。有一天，我们将在主里重聚，永不再分离。',
          en: 'Christians also face the loss of loved ones and grieve. But our grief differs from those without hope. Because Jesus rose, all who died in Christ will also rise. Death is not a final goodbye but a temporary separation. One day, we will reunite in the Lord, never to part again.',
        },
        question: {
          zh: '你是否失去过亲爱的人？复活的盼望如何安慰你的悲伤？',
          en: 'Have you lost someone dear? How does the hope of resurrection comfort your grief?',
        },
        prayer: {
          zh: '主啊，感谢祢赐给我们盼望。我们不是像没有指望的人一样忧伤，因为我们知道在基督里睡了的人必要复活。求祢安慰每一个失去亲人的心，让复活的盼望成为我们的力量。奉主耶稣的名祷告，阿们。',
          en: 'Lord, thank You for giving us hope. We do not grieve as those without hope, for we know that those who sleep in Christ will rise. Comfort every heart that has lost a loved one, and let resurrection hope be our strength. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '使徒行传 1:8-9',
          ref_en: 'Acts 1:8-9',
          text_zh: '但圣灵降临在你们身上，你们就必得着能力，并要在耶路撒冷、犹太全地和撒玛利亚，直到地极，作我的见证。说了这话，他们正看的时候，他就被取上升，有一朵云彩把他接去，便看不见他了。',
          text_en: 'But ye shall receive power, after that the Holy Ghost is come upon you: and ye shall be witnesses unto me both in Jerusalem, and in all Judaea, and in Samaria, and unto the uttermost part of the earth. And when he had spoken these things, while they beheld, he was taken up; and a cloud received him out of their sight.',
        },
        reflection: {
          zh: '复活的主升天前留下的不是一个结束，而是一个开始。祂差派门徒去"直到地极"作见证，并应许圣灵的能力。两千年来，福音从耶路撒冷传到世界每个角落，正是这个使命的延续。今天，我们就是"地极"的见证人。',
          en: 'The risen Lord\'s ascension was not an ending but a beginning. He commissioned His disciples to witness "to the end of the earth" and promised the Holy Spirit\'s power. For two thousand years, the gospel has spread from Jerusalem to every corner of the world — a continuation of this mission. Today, we are witnesses at "the end of the earth."',
        },
        question: {
          zh: '你如何在自己的生活圈子里为复活的基督作见证？',
          en: 'How can you witness for the risen Christ in your own circle of life?',
        },
        prayer: {
          zh: '主耶稣，祢升天前赐给我们大使命。求祢的圣灵充满我们，给我们能力和勇气，在我们所在的地方——家庭、学校、职场——为祢作美好的见证。奉主耶稣的名祷告，阿们。',
          en: 'Lord Jesus, You gave us the Great Commission before Your ascension. Fill us with Your Holy Spirit, giving us power and courage to witness for You wherever we are — at home, school, and work. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '启示录 21:4-5',
          ref_en: 'Revelation 21:4-5',
          text_zh: '神要擦去他们一切的眼泪；不再有死亡，也不再有悲哀、哭号、疼痛，因为以前的事都过去了。坐宝座的说："看哪，我将一切都更新了！"',
          text_en: 'And God shall wipe away all tears from their eyes; and there shall be no more death, neither sorrow, nor crying, neither shall there be any more pain: for the former things are passed away. And he that sat upon the throne said, Behold, I make all things new. And he said unto me, Write: for these words are true and faithful.',
        },
        reflection: {
          zh: '复活的终极盼望不只是我们个人从死里复活，而是整个创造的更新。神要擦去一切眼泪——不再有死亡、悲哀、哭号、疼痛。"我将一切都更新了"——这是基督复活所开启的新创造的最终完成。我们现在经历的一切苦难都是暂时的，那永恒的荣耀正在前方等待我们。',
          en: 'The ultimate hope of resurrection is not just our personal rising from the dead but the renewal of all creation. God will wipe away every tear — no more death, mourning, crying, or pain. "I am making all things new" — this is the final completion of the new creation inaugurated by Christ\'s resurrection. All our present sufferings are temporary; eternal glory awaits us ahead.',
        },
        question: {
          zh: '想象一个没有眼泪、没有死亡、没有痛苦的世界。这样的盼望如何帮助你面对今天的困难？',
          en: 'Imagine a world with no tears, no death, no pain. How does this hope help you face today\'s difficulties?',
        },
        prayer: {
          zh: '天父，感谢祢应许将一切都更新。我们等候那一天：不再有死亡，不再有眼泪，不再有痛苦。求祢帮助我们在盼望中忍耐，在等候中喜乐，直到祢再来的日子。奉主耶稣的名祷告，阿们。',
          en: 'Father, thank You for promising to make all things new. We await that day: no more death, no more tears, no more pain. Help us endure in hope and rejoice in waiting until the day You return. In Jesus\' name, amen.',
        },
      },
    ],
  },
];
