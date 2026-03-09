interface Scripture { ref_zh: string; ref_en: string; text_zh: string; text_en: string; }
interface BilingualText { zh: string; en: string; }
interface DevotionalUnit { scripture: Scripture; reflection: BilingualText; question: BilingualText; prayer: BilingualText; }
interface AltarTheme { id: string; name_zh: string; name_en: string; icon: string; devotionals: DevotionalUnit[]; hymnKeywords: string[]; }

export const themesB5: AltarTheme[] = [
  {
    id: 'heroes',
    name_zh: '旧约英雄',
    name_en: 'Old Testament Heroes',
    icon: '🏔️',
    hymnKeywords: ['信心', '勇气', 'hero', 'courage'],
    devotionals: [
      {
        scripture: {
          ref_zh: '创6:22',
          ref_en: 'Genesis 6:22',
          text_zh: '挪亚就这样行。凡神所吩咐的，他都照样行了。',
          text_en: 'Thus did Noah; according to all that God commanded him, so did he.',
        },
        reflection: {
          zh: '挪亚身处一个败坏的世代，却选择完全顺服神的吩咐。建造方舟需要数十年的坚持，面对周围人的嘲笑和不解，挪亚仍然忠心到底。他的顺服不是一时冲动，而是持续不断的行动。',
          en: 'Noah lived in a corrupt generation yet chose complete obedience to God\'s command. Building the ark required decades of perseverance amid ridicule and misunderstanding. His obedience was not a momentary impulse but sustained, faithful action.',
        },
        question: {
          zh: '在别人不理解甚至嘲笑的时候，你如何坚持做神要你做的事？',
          en: 'How do you persevere in doing what God asks when others don\'t understand or even mock you?',
        },
        prayer: {
          zh: '主啊，求你赐我像挪亚一样的信心，在这弯曲悖谬的世代中仍然顺服你的话语，不随波逐流，忠心到底。阿们。',
          en: 'Lord, grant me faith like Noah\'s — to obey Your word in a crooked generation, to stand firm against the current, and to remain faithful to the end. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '创12:1-4',
          ref_en: 'Genesis 12:1-4',
          text_zh: '耶和华对亚伯兰说："你要离开本地、本族、父家，往我所要指示你的地去。我必叫你成为大国。我必赐福给你，叫你的名为大；你也要叫别人得福。为你祝福的，我必赐福与他；那咒诅你的，我必咒诅他。地上的万族都要因你得福。"亚伯兰就照着耶和华的吩咐去了；罗得也和他同去。亚伯兰出哈兰的时候年七十五岁。',
          text_en: 'Now the LORD had said unto Abram, Get thee out of thy country, and from thy kindred, and from thy father’s house, unto a land that I will shew thee: And I will make of thee a great nation, and I will bless thee, and make thy name great; and thou shalt be a blessing: And I will bless them that bless thee, and curse him that curseth thee: and in thee shall all families of the earth be blessed. So Abram departed, as the LORD had spoken unto him; and Lot went with him: and Abram was seventy and five years old when he departed out of Haran.',
        },
        reflection: {
          zh: '亚伯拉罕在七十五岁高龄时，离开了熟悉的家乡，前往一个未知的地方。他不知道目的地在哪里，却凭信心踏出了第一步。信心不是看见才相信，而是相信才看见。',
          en: 'At seventy-five, Abraham left everything familiar for an unknown destination. He didn\'t know where he was going, yet he took the first step in faith. Faith is not seeing and then believing — it is believing and then seeing.',
        },
        question: {
          zh: '神是否在呼召你离开某个舒适区？你愿意凭信心踏出那一步吗？',
          en: 'Is God calling you to leave a comfort zone? Are you willing to take that step of faith?',
        },
        prayer: {
          zh: '天父，感谢你呼召亚伯拉罕，也呼召我。求你赐我勇气离开舒适区，跟随你的引导，进入你为我预备的应许之地。阿们。',
          en: 'Father, thank You for calling Abraham and for calling me. Give me courage to leave my comfort zone, follow Your leading, and enter the promised land You have prepared. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '创22:1-2,12',
          ref_en: 'Genesis 22:1-2,12',
          text_zh: '这些事以后，神要试验亚伯拉罕，就呼叫他说："亚伯拉罕！"他说："我在这里。"神说："你带着你的儿子，就是你独生的儿子，你所爱的以撒，往摩利亚地去，在我所要指示你的山上，把他献为燔祭。"天使说："你不可在这童子身上下手，一点不可害他！现在我知道你是敬畏神的了，因为你没有将你的儿子，就是你独生的儿子，留下不给我。"',
          text_en: 'And it came to pass after these things, that God did tempt Abraham, and said unto him, Abraham: and he said, Behold, here I am. And he said, Take now thy son, thine only son Isaac, whom thou lovest, and get thee into the land of Moriah; and offer him there for a burnt offering upon one of the mountains which I will tell thee of.',
        },
        reflection: {
          zh: '亚伯拉罕面对的是一个看似不可能的试验——献上等候了二十五年才得到的儿子。但他相信神的信实超过自己的理解。真正的敬畏神，是愿意把最宝贵的放在祭坛上。',
          en: 'Abraham faced a seemingly impossible test — to offer the son he waited twenty-five years to receive. Yet he trusted God\'s faithfulness beyond his own understanding. True reverence for God means placing our most precious treasures on the altar.',
        },
        question: {
          zh: '你生命中最难交托给神的是什么？你愿意把它放在祭坛上吗？',
          en: 'What is hardest for you to surrender to God? Are you willing to place it on the altar?',
        },
        prayer: {
          zh: '主啊，你是耶和华以勒——预备的神。帮助我像亚伯拉罕一样信靠你，愿意将最宝贵的交在你手中，因为你的预备永远超过我的想象。阿们。',
          en: 'Lord, You are Jehovah Jireh — the God who provides. Help me trust You like Abraham, willing to surrender my most precious things, for Your provision always exceeds my imagination. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '创39:20-21',
          ref_en: 'Genesis 39:20-21',
          text_zh: '把约瑟下在监里，就是王的囚犯被囚的地方。于是约瑟在那里坐监。但耶和华与约瑟同在，向他施恩，使他在司狱的眼前蒙恩。',
          text_en: 'And Joseph’s master took him, and put him into the prison, a place where the king’s prisoners were bound: and he was there in the prison. But the LORD was with Joseph, and shewed him mercy, and gave him favour in the sight of the keeper of the prison.',
        },
        reflection: {
          zh: '约瑟被冤枉入狱，处境看似绝望。但"耶和华与约瑟同在"这句话改变了一切。即便在最黑暗的环境中，神的同在仍然是真实的，祂的恩典足以翻转任何困境。',
          en: 'Joseph was wrongly imprisoned — a seemingly hopeless situation. Yet "the LORD was with Joseph" changed everything. Even in the darkest circumstances, God\'s presence is real, and His grace is sufficient to turn any situation around.',
        },
        question: {
          zh: '当你遭遇不公或陷入困境时，你是否仍然相信神与你同在？',
          en: 'When you face injustice or hardship, do you still believe God is with you?',
        },
        prayer: {
          zh: '主啊，感谢你在约瑟最黑暗的日子里与他同在。求你也在我的困境中让我经历你的同在和恩典，使我即便在监牢中也能蒙恩。阿们。',
          en: 'Lord, thank You for being with Joseph in his darkest days. Let me also experience Your presence and grace in my trials, finding favor even in the prison. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '创50:19-20',
          ref_en: 'Genesis 50:19-20',
          text_zh: '约瑟对他们说："不要害怕，我岂能代替神呢？从前你们的意思是要害我，但神的意思原是好的，要保全许多人的性命，成就今日的光景。"',
          text_en: 'And Joseph said unto them, Fear not: for am I in the place of God? But as for you, ye thought evil against me; but God meant it unto good, to bring to pass, as it is this day, to save much people alive.',
        },
        reflection: {
          zh: '约瑟经历了被卖、被冤枉、被遗忘，但他最终看到了神在一切苦难背后的美好旨意。饶恕不是因为对方值得，而是因为我们看见了神更大的计划。',
          en: 'Joseph endured being sold, falsely accused, and forgotten, yet he ultimately saw God\'s good purpose behind all the suffering. Forgiveness comes not because others deserve it, but because we see God\'s greater plan.',
        },
        question: {
          zh: '回顾你的人生，你能看到神如何把"坏事"变成"好事"吗？',
          en: 'Looking back on your life, can you see how God turned something bad into something good?',
        },
        prayer: {
          zh: '天父，帮助我像约瑟一样，用信心的眼光看待生命中的苦难，相信你的意思原是好的。赐我饶恕的心，释放一切的苦毒。阿们。',
          en: 'Father, help me see suffering through eyes of faith like Joseph, trusting that You mean it for good. Grant me a forgiving heart and release me from all bitterness. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '出2:3-6',
          ref_en: 'Exodus 2:3-6',
          text_zh: '后来不能再藏，就取了一个蒲草箱，抹上石漆和石油，将孩子放在里头，把箱子搁在河边的芦荻中。孩子的姐姐远远站着，要知道他究竟怎么样。法老的女儿来到河边洗澡，她的使女们在河边行走。她看见箱子在芦荻中，就打发一个婢女拿来。她打开箱子，看见那孩子。孩子哭了，她就可怜他，说："这是希伯来人的一个孩子。"',
          text_en: 'And when she could not longer hide him, she took for him an ark of bulrushes, and daubed it with slime and with pitch, and put the child therein; and she laid it in the flags by the river’s brink. And his sister stood afar off, to wit what would be done to him. And the daughter of Pharaoh came down to wash herself at the river; and her maidens walked along by the river’s side; and when she saw the ark among the flags, she sent her maid to fetch it. And when she had opened it, she saw the child: and, behold, the babe wept. And she had compassion on him, and said, This is one of the Hebrews’ children.',
        },
        reflection: {
          zh: '摩西的母亲约基别在绝望中做了一件凭信心的事——把孩子交托在神的手中。一个蒲草箱承载着一位母亲的信心和一个民族的盼望。神用最意想不到的方式保护了这个孩子。',
          en: 'Moses\' mother Jochebed did something extraordinary in desperation — she entrusted her child to God\'s hands. A simple basket carried a mother\'s faith and a nation\'s hope. God protected the child in the most unexpected way.',
        },
        question: {
          zh: '当你无能为力时，你是否愿意把你最爱的人交托在神的手中？',
          en: 'When you feel powerless, are you willing to entrust those you love most into God\'s hands?',
        },
        prayer: {
          zh: '主啊，当我无能为力的时候，求你帮助我像约基别一样凭信心把所爱的人交在你手中。你的保守超过我一切的努力。阿们。',
          en: 'Lord, when I am powerless, help me entrust my loved ones to You in faith as Jochebed did. Your protection surpasses all my efforts. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '出3:4-6',
          ref_en: 'Exodus 3:4-6',
          text_zh: '耶和华神见他过去要看，就从荆棘里呼叫说："摩西！摩西！"他说："我在这里。"神说："不要近前来。当把你脚上的鞋脱下来，因为你所站之地是圣地。"又说："我是你父亲的神，是亚伯拉罕的神，以撒的神，雅各的神。"摩西蒙上脸，因为怕看神。',
          text_en: 'And when the LORD saw that he turned aside to see, God called unto him out of the midst of the bush, and said, Moses, Moses. And he said, Here am I. And he said, Draw not nigh hither: put off thy shoes from off thy feet, for the place whereon thou standest is holy ground. Moreover he said, I am the God of thy father, the God of Abraham, the God of Isaac, and the God of Jacob. And Moses hid his face; for he was afraid to look upon God.',
        },
        reflection: {
          zh: '摩西在旷野牧羊四十年后，神从燃烧的荆棘中呼召他。神的呼召常常出现在我们最意想不到的时候和地方。一片普通的荒野因为神的同在而成为圣地。',
          en: 'After forty years of shepherding in the wilderness, God called Moses from a burning bush. God\'s call often comes at the most unexpected times and places. Ordinary ground becomes holy because of God\'s presence.',
        },
        question: {
          zh: '你是否在生命的"旷野"中等候神的呼召？你是否留意到身边燃烧的荆棘？',
          en: 'Are you waiting in a "wilderness" season for God\'s call? Have you noticed the burning bushes around you?',
        },
        prayer: {
          zh: '主啊，求你打开我的眼睛，在日常生活中看到你的同在。帮助我像摩西一样回应说："我在这里。"愿我随时预备好被你差遣。阿们。',
          en: 'Lord, open my eyes to see Your presence in daily life. Help me respond like Moses: "Here I am." May I always be ready to be sent by You. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '出14:21-22',
          ref_en: 'Exodus 14:21-22',
          text_zh: '摩西向海伸杖，耶和华便用大东风，使海水一夜退去，水便分开，海就成了干地。以色列人下海中走干地，水在他们的左右作了墙垣。',
          text_en: 'And Moses stretched out his hand over the sea; and the LORD caused the sea to go back by a strong east wind all that night, and made the sea dry land, and the waters were divided. And the children of Israel went into the midst of the sea upon the dry ground: and the waters were a wall unto them on their right hand, and on their left.',
        },
        reflection: {
          zh: '前有红海，后有追兵，以色列人陷入绝境。但神开辟了一条人无法想象的道路。当我们面对不可能的困境时，神能在绝处开路，在旷野开江河。',
          en: 'The Red Sea ahead, the Egyptian army behind — Israel was trapped. But God opened a path beyond human imagination. When we face impossible situations, God can make a way where there seems to be no way.',
        },
        question: {
          zh: '你现在面对的"红海"是什么？你相信神能为你开一条出路吗？',
          en: 'What is the "Red Sea" you\'re facing now? Do you believe God can open a way for you?',
        },
        prayer: {
          zh: '全能的神，你是分开红海的神，没有任何困难能拦阻你的大能。求你在我前面开路，让我经历你奇妙的拯救。阿们。',
          en: 'Almighty God, You parted the Red Sea — no difficulty can hinder Your power. Open a way before me and let me experience Your miraculous deliverance. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '书1:9',
          ref_en: 'Joshua 1:9',
          text_zh: '我岂没有吩咐你吗？你当刚强壮胆！不要惧怕，也不要惊惶，因为你无论往哪里去，耶和华你的神必与你同在。',
          text_en: 'Have not I commanded thee? Be strong and of a good courage; be not afraid, neither be thou dismayed: for the LORD thy God is with thee whithersoever thou goest.',
        },
        reflection: {
          zh: '约书亚接替摩西的重任，面对的是强大的迦南人和未知的挑战。神三次对他说"刚强壮胆"，因为勇气不是来自自己的能力，而是来自神的同在。',
          en: 'Joshua took over from Moses, facing powerful Canaanites and unknown challenges. God told him three times to "be strong and courageous" — because courage comes not from our own ability but from God\'s presence.',
        },
        question: {
          zh: '你在哪些事上需要"刚强壮胆"？神同在的应许如何改变你的恐惧？',
          en: 'In what areas do you need to "be strong and courageous"? How does God\'s promise of presence change your fears?',
        },
        prayer: {
          zh: '主啊，感谢你应许与我同在。当我面对未知和挑战时，求你赐我刚强壮胆的心，因为有你同行，我就不惧怕。阿们。',
          en: 'Lord, thank You for promising to be with me. When I face the unknown and challenges, grant me a strong and courageous heart, for with You by my side, I will not fear. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '士7:7',
          ref_en: 'Judges 7:7',
          text_zh: '耶和华对基甸说："我要用这舔水的三百人拯救你们，将米甸人交在你手中。其余的人都可以各归各处去。"',
          text_en: 'And the LORD said unto Gideon, By the three hundred men that lapped will I save you, and deliver the Midianites into thine hand: and let all the other people go every man unto his place.',
        },
        reflection: {
          zh: '神将基甸的军队从三万二千人减到三百人，不是削弱以色列的力量，而是要彰显祂自己的大能。神不需要人多势众，祂要的是合用的器皿。少，在神的手中就是多。',
          en: 'God reduced Gideon\'s army from 32,000 to 300 — not to weaken Israel but to display His own power. God doesn\'t need large numbers; He wants willing vessels. Little in God\'s hands becomes much.',
        },
        question: {
          zh: '你是否觉得自己资源太少、能力不够？神如何使用"少"来成就"多"？',
          en: 'Do you feel you have too few resources or too little ability? How does God use "little" to accomplish "much"?',
        },
        prayer: {
          zh: '主啊，我虽然渺小软弱，但你能用三百人胜过千军万马。求你使用我这不配的器皿，在我的软弱上彰显你的大能。阿们。',
          en: 'Lord, though I am small and weak, You can overcome vast armies with just three hundred. Use this unworthy vessel and display Your power through my weakness. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '得1:16-17',
          ref_en: 'Ruth 1:16-17',
          text_zh: '路得说："不要催我回去不跟随你。你往哪里去，我也往那里去；你在哪里住宿，我也在那里住宿；你的国就是我的国，你的神就是我的神。你在哪里死，我也在那里死，也葬在那里。除非死能使你我相离，不然，愿耶和华重重地降罚与我。"',
          text_en: 'And Ruth said, Intreat me not to leave thee, or to return from following after thee: for whither thou goest, I will go; and where thou lodgest, I will lodge: thy people shall be my people, and thy God my God: Where thou diest, will I die, and there will I be buried: the LORD do so to me, and more also, if ought but death part thee and me.',
        },
        reflection: {
          zh: '路得是一个外邦女子，她放弃了回到自己家乡的安逸，选择跟随婆婆拿俄米和拿俄米的神。她的忠诚和委身不仅改变了自己的命运，也使她成为大卫王的曾祖母，进入弥赛亚的家谱。',
          en: 'Ruth, a foreign woman, gave up the comfort of returning home to follow her mother-in-law Naomi and Naomi\'s God. Her loyalty and commitment not only changed her own destiny but placed her in the lineage of King David and the Messiah.',
        },
        question: {
          zh: '路得的忠诚和委身如何激励你对神和对身边的人更加忠心？',
          en: 'How does Ruth\'s loyalty and commitment inspire you to be more faithful to God and to those around you?',
        },
        prayer: {
          zh: '主啊，求你赐我像路得一样的忠心和委身。无论环境如何，我愿跟随你到底，因为你的国就是我的国，你的神就是我的神。阿们。',
          en: 'Lord, grant me faithfulness and commitment like Ruth\'s. No matter the circumstances, I will follow You to the end, for Your people are my people and Your God is my God. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '撒上3:9-10',
          ref_en: '1 Samuel 3:9-10',
          text_zh: '因此以利对撒母耳说："你仍去睡吧；若再呼唤你，你就说：\u2018耶和华啊，请说，仆人敬听。\u2019"撒母耳就去，仍睡在原处。耶和华又来站着，像前三次呼唤说："撒母耳啊！撒母耳啊！"撒母耳回答说："请说，仆人敬听。"',
          text_en: 'Therefore Eli said unto Samuel, Go, lie down: and it shall be, if he call thee, that thou shalt say, Speak, LORD; for thy servant heareth. So Samuel went and lay down in his place. And the LORD came, and stood, and called as at other times, Samuel, Samuel. Then Samuel answered, Speak; for thy servant heareth.',
        },
        reflection: {
          zh: '少年撒母耳还不认识神的声音，但他有一颗愿意聆听的心。"请说，仆人敬听"是我们每天灵修时最美好的祷告。神今天仍然在说话，问题是我们是否在聆听。',
          en: 'Young Samuel did not yet recognize God\'s voice, but he had a heart willing to listen. "Speak, for your servant hears" is the most beautiful prayer for our daily devotions. God still speaks today — the question is whether we are listening.',
        },
        question: {
          zh: '你每天有安静在神面前聆听祂声音的时间吗？你如何分辨神的声音？',
          en: 'Do you set aside quiet time each day to listen to God\'s voice? How do you discern His voice?',
        },
        prayer: {
          zh: '主啊，请说，仆人敬听。求你帮助我安静下来，在你的话语中听到你的声音，并且有勇气顺服你所说的一切。阿们。',
          en: 'Lord, speak, for Your servant hears. Help me be still, hear Your voice in Your Word, and have the courage to obey all that You say. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '撒上17:45-47',
          ref_en: '1 Samuel 17:45-47',
          text_zh: '大卫对非利士人说："你来攻击我，是靠着刀枪和铜戟；我来攻击你，是靠着万军之耶和华的名，就是你所怒骂带领以色列军队的神。今日耶和华必将你交在我手里。我必杀你，斩你的头……使普天下的人都知道以色列中有神；又使这众人知道耶和华使人得胜，不是用刀用枪，因为争战的胜败全在乎耶和华。"',
          text_en: 'Then said David to the Philistine, Thou comest to me with a sword, and with a spear, and with a shield: but I come to thee in the name of the LORD of hosts, the God of the armies of Israel, whom thou hast defied. This day will the LORD deliver thee into mine hand; and I will smite thee, and take thine head from thee; and I will give the carcases of the host of the Philistines this day unto the fowls of the air, and to the wild beasts of the earth; that all the earth may know that there is a God in Israel. And all this assembly shall know that the LORD saveth not with sword and spear: for the battle is the LORD’s, and he will give you into our hands.',
        },
        reflection: {
          zh: '少年大卫面对巨人歌利亚，没有依靠刀枪铠甲，而是凭着对神的信心。他知道争战的胜败不在乎武器的优劣，而在乎神。面对生命中的"巨人"，我们也需要这样的信心。',
          en: 'Young David faced the giant Goliath without sword or armor, relying on faith in God. He knew the battle\'s outcome depended not on weapons but on God. When facing the "giants" in our lives, we need this same faith.',
        },
        question: {
          zh: '你生命中的"歌利亚"是什么？你靠什么力量去面对它？',
          en: 'What is the "Goliath" in your life? What power are you relying on to face it?',
        },
        prayer: {
          zh: '万军之耶和华啊，争战的胜败全在乎你。我不靠刀枪，不靠势力，单单依靠你的名。求你帮助我胜过生命中一切的巨人。阿们。',
          en: 'LORD of hosts, the battle is Yours. I rely not on weapons or might but on Your name alone. Help me overcome every giant in my life. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '王上18:38-39',
          ref_en: '1 Kings 18:38-39',
          text_zh: '于是，耶和华降下火来，烧尽燔祭、木柴、石头、尘土，又烧干沟里的水。众民看见了，就俯伏在地，说："耶和华是神！耶和华是神！"',
          text_en: 'Then the fire of the LORD fell, and consumed the burnt sacrifice, and the wood, and the stones, and the dust, and licked up the water that was in the trench. And when all the people saw it, they fell on their faces: and they said, The LORD, he is the God; the LORD, he is the God.',
        },
        reflection: {
          zh: '以利亚在迦密山上独自面对四百五十个巴力先知。他没有退缩，因为他知道自己所事奉的神是又真又活的。当神从天降火时，真假立判。在一个充满假神和偶像的时代，我们需要以利亚的勇气来为真理站立。',
          en: 'Elijah stood alone on Mount Carmel against 450 prophets of Baal. He did not retreat because he knew the God he served was true and living. When fire fell from heaven, truth was revealed. In an age of false gods and idols, we need Elijah\'s courage to stand for truth.',
        },
        question: {
          zh: '在你的生活中，有哪些"巴力"在与真神争夺你的心？你愿意为真理勇敢站立吗？',
          en: 'What "Baals" in your life compete with the true God for your heart? Will you stand boldly for the truth?',
        },
        prayer: {
          zh: '耶和华是神！求你降下圣灵的火，烧尽我生命中一切的偶像和假神。赐我以利亚的勇气，在这个世代为你的真理作见证。阿们。',
          en: 'The LORD, He is God! Send the fire of Your Spirit to consume every idol and false god in my life. Grant me Elijah\'s courage to witness for Your truth in this generation. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '但6:22-23',
          ref_en: 'Daniel 6:22-23',
          text_zh: '我的神差遣使者封住狮子的口，叫狮子不伤我；因我在神面前无辜，我在王面前也没有行过亏损的事。"王就甚喜乐，吩咐人将但以理从坑里系上来。于是但以理从坑里被系上来，身上毫无伤损，因为信靠他的神。',
          text_en: 'My God hath sent his angel, and hath shut the lions’ mouths, that they have not hurt me: forasmuch as before him innocency was found in me; and also before thee, O king, have I done no hurt. Then was the king exceeding glad for him, and commanded that they should take Daniel up out of the den. So Daniel was taken up out of the den, and no manner of hurt was found upon him, because he believed in his God.',
        },
        reflection: {
          zh: '但以理宁可被扔进狮子坑，也不愿停止祷告。他的忠心不是在平顺时才有的，而是在生死关头仍然不妥协。神封住了狮子的口，保护了信靠祂的人。忠心到底的人，必经历神信实的保守。',
          en: 'Daniel chose the lions\' den rather than stop praying. His faithfulness was not only in easy times but held firm at the point of life and death. God shut the lions\' mouths and protected the one who trusted Him. Those faithful to the end will experience God\'s faithful protection.',
        },
        question: {
          zh: '如果坚持信仰会让你付出代价，你愿意像但以理一样不妥协吗？',
          en: 'If holding to your faith costs you something, would you refuse to compromise like Daniel?',
        },
        prayer: {
          zh: '主啊，求你赐我但以理的忠心，即使面对狮子坑也不停止祷告，不停止敬拜。你是封住狮子口的神，我信靠你的保护。阿们。',
          en: 'Lord, grant me Daniel\'s faithfulness — never ceasing to pray or worship even before the lions\' den. You are the God who shuts lions\' mouths, and I trust in Your protection. Amen.',
        },
      },
    ],
  },
  {
    id: 'cross',
    name_zh: '十架之路',
    name_en: 'Way of the Cross',
    icon: '✝️',
    hymnKeywords: ['十架', '受难', 'cross', 'passion'],
    devotionals: [
      {
        scripture: {
          ref_zh: '太21:9',
          ref_en: 'Matthew 21:9',
          text_zh: '前行后随的众人喊着说："和散那归于大卫的子孙！奉主名来的是应当称颂的！高高在上和散那！"',
          text_en: 'And the multitudes that went before, and that followed, cried, saying, Hosanna to the son of David: Blessed is he that cometh in the name of the Lord; Hosanna in the highest.',
        },
        reflection: {
          zh: '耶稣骑驴进入耶路撒冷，众人欢呼迎接。然而几天后，同样的群众将高喊"钉他十字架"。人的热情转瞬即逝，但耶稣进城的脚步坚定不移，因为祂知道自己要成就的使命。',
          en: 'Jesus entered Jerusalem on a donkey to shouts of praise. Yet days later, the same crowd would cry "Crucify him!" Human enthusiasm is fleeting, but Jesus\' steps into the city were unwavering — He knew the mission He came to fulfill.',
        },
        question: {
          zh: '你对耶稣的热心是一时的还是持久的？如何保持信仰的恒心？',
          en: 'Is your devotion to Jesus momentary or enduring? How do you maintain perseverance in faith?',
        },
        prayer: {
          zh: '主耶稣，我要用恒久的信心而非一时的热情来跟随你。求你坚固我的心，使我不随众人摇摆，而是始终忠心跟随你。阿们。',
          en: 'Lord Jesus, I want to follow You with enduring faith, not fleeting enthusiasm. Strengthen my heart so I do not waver with the crowd but remain faithfully following You. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '太21:12-13',
          ref_en: 'Matthew 21:12-13',
          text_zh: '耶稣进了神的殿，赶出殿里一切做买卖的人，推倒兑换银钱之人的桌子和卖鸽子之人的凳子，对他们说："经上记着说：\u2018我的殿必称为祷告的殿\u2019，你们倒使它成为贼窝了。"',
          text_en: 'And Jesus went into the temple of God, and cast out all them that sold and bought in the temple, and overthrew the tables of the moneychangers, and the seats of them that sold doves, And said unto them, It is written, My house shall be called the house of prayer; but ye have made it a den of thieves.',
        },
        reflection: {
          zh: '耶稣洁净圣殿，显示了祂对敬拜纯洁的热心。神的殿应当是祷告的地方，而非交易的场所。同样，我们的心灵也是圣灵的殿，需要时常被主洁净。',
          en: 'Jesus cleansed the temple, showing His zeal for pure worship. God\'s house should be a place of prayer, not commerce. Likewise, our hearts — temples of the Holy Spirit — need to be regularly cleansed by the Lord.',
        },
        question: {
          zh: '你的心灵中是否有需要被主"洁净"的东西？哪些事物占据了本该属于祷告和敬拜的位置？',
          en: 'Is there something in your heart that needs the Lord\'s "cleansing"? What has occupied the place that belongs to prayer and worship?',
        },
        prayer: {
          zh: '主耶稣，求你洁净我心灵的殿。除去一切不洁的思想和动机，使我的心成为你祷告的殿、敬拜的居所。阿们。',
          en: 'Lord Jesus, cleanse the temple of my heart. Remove every impure thought and motive, and make my heart a house of prayer and a dwelling of worship. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '太26:6-7,12-13',
          ref_en: 'Matthew 26:6-7,12-13',
          text_zh: '耶稣在伯大尼长大麻风的西门家里，有一个女人拿着一玉瓶极贵的香膏来，趁耶稣坐席的时候，浇在他的头上。她将这香膏浇在我身上，是为我安葬做的。我实在告诉你们：普天之下，无论在什么地方传这福音，也要述说这女人所行的，作个纪念。',
          text_en: 'Now when Jesus was in Bethany, in the house of Simon the leper, There came unto him a woman having an alabaster box of very precious ointment, and poured it on his head, as he sat at meat.',
        },
        reflection: {
          zh: '这位女人将最贵重的香膏倾倒在耶稣身上，不顾旁人的批评。她的行动是对耶稣全然的爱和奉献。耶稣看重的不是礼物的价值，而是背后那颗毫无保留的心。',
          en: 'This woman poured her most precious ointment on Jesus, ignoring the criticism of others. Her act was one of complete love and devotion. Jesus valued not the gift\'s price but the unreserved heart behind it.',
        },
        question: {
          zh: '你愿意为主献上什么"极贵的香膏"？你是否愿意不顾代价和别人的眼光来爱祂？',
          en: 'What "precious ointment" are you willing to offer the Lord? Are you willing to love Him regardless of the cost or others\' opinions?',
        },
        prayer: {
          zh: '主耶稣，我愿像那位女人一样，将最好的献给你。求你帮助我不计较代价，不在乎别人的眼光，只单纯地爱你、敬拜你。阿们。',
          en: 'Lord Jesus, I want to offer You my best like that woman. Help me not count the cost or care about others\' opinions, but simply love and worship You. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '路22:19-20',
          ref_en: 'Luke 22:19-20',
          text_zh: '又拿起饼来，祝谢了，就擘开，递给他们，说："这是我的身体，为你们舍的，你们也应当如此行，为的是记念我。"饭后也照样拿起杯来，说："这杯是用我血所立的新约，是为你们流出来的。"',
          text_en: 'And he took bread, and gave thanks, and brake it, and gave unto them, saying, This is my body which is given for you: this do in remembrance of me. Likewise also the cup after supper, saying, This cup is the new testament in my blood, which is shed for you.',
        },
        reflection: {
          zh: '最后的晚餐上，耶稣设立了圣餐，用饼和杯象征祂即将为我们破碎的身体和流出的宝血。每一次圣餐都是一次记念——记念那份无条件的爱和永恒的新约。',
          en: 'At the Last Supper, Jesus instituted communion, using bread and cup to symbolize His body broken and blood shed for us. Every communion is an act of remembrance — remembering that unconditional love and the eternal new covenant.',
        },
        question: {
          zh: '你上一次领受圣餐时，心中有怎样的感动？你如何在日常生活中"记念"主的牺牲？',
          en: 'What moved you when you last took communion? How do you "remember" the Lord\'s sacrifice in daily life?',
        },
        prayer: {
          zh: '主耶稣，感谢你为我舍身流血，与我立下新约。每一次我擘饼举杯，愿我的心被你的爱深深触动，永不忘记十架的代价。阿们。',
          en: 'Lord Jesus, thank You for giving Your body and blood and making a new covenant with me. Every time I break bread and lift the cup, may my heart be deeply moved by Your love, never forgetting the cost of the cross. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '约13:34-35',
          ref_en: 'John 13:34-35',
          text_zh: '我赐给你们一条新命令，乃是叫你们彼此相爱；我怎样爱你们，你们也要怎样相爱。你们若有彼此相爱的心，众人因此就认出你们是我的门徒了。',
          text_en: 'A new commandment I give unto you, That ye love one another; as I have loved you, that ye also love one another. By this shall all men know that ye are my disciples, if ye have love one to another.',
        },
        reflection: {
          zh: '在被卖的那一夜，耶稣不是谈论复仇或自保，而是赐下爱的命令。基督徒最显著的标志不是教义或仪式，而是彼此相爱。这种爱不是出于人的本性，而是效法基督舍己之爱。',
          en: 'On the night He was betrayed, Jesus spoke not of revenge or self-preservation but gave a command to love. The most distinctive mark of Christians is not doctrine or ritual but mutual love — a love not from human nature but modeled after Christ\'s self-giving love.',
        },
        question: {
          zh: '你身边的人能从你的行为中认出你是基督的门徒吗？你如何实践"彼此相爱"？',
          en: 'Can those around you recognize you as Christ\'s disciple by your actions? How do you practice "loving one another"?',
        },
        prayer: {
          zh: '主耶稣，你用生命示范了什么是爱。求你帮助我效法你的爱，真诚地爱弟兄姐妹，使众人因我们的爱认出我们是你的门徒。阿们。',
          en: 'Lord Jesus, You demonstrated love with Your life. Help me imitate Your love, genuinely loving brothers and sisters, so that all may know we are Your disciples by our love. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '约15:5',
          ref_en: 'John 15:5',
          text_zh: '我是葡萄树，你们是枝子；常在我里面的，我也常在他里面，这人就多结果子；因为离了我，你们就不能做什么。',
          text_en: 'I am the vine, ye are the branches: He that abideth in me, and I in him, the same bringeth forth much fruit: for without me ye can do nothing.',
        },
        reflection: {
          zh: '枝子离了葡萄树就会枯干。耶稣在走向十字架前教导门徒最重要的功课：与祂保持连接。一切属灵的果子都源于我们与基督的关系，而非我们自己的努力。',
          en: 'A branch cut from the vine withers. Before going to the cross, Jesus taught His disciples the most vital lesson: stay connected to Him. All spiritual fruit flows from our relationship with Christ, not our own effort.',
        },
        question: {
          zh: '你与主的关系是紧密相连还是若即若离？你如何"常在"主里面？',
          en: 'Is your relationship with the Lord closely connected or distant? How do you "abide" in Him?',
        },
        prayer: {
          zh: '主耶稣，你是真葡萄树，我是枝子。求你帮助我时刻与你连接，在你里面生根建造，结出丰盛的果子荣耀你。阿们。',
          en: 'Lord Jesus, You are the true vine and I am a branch. Help me stay connected to You always, rooted and built up in You, bearing abundant fruit for Your glory. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '太26:39',
          ref_en: 'Matthew 26:39',
          text_zh: '他就稍往前走，俯伏在地，祷告说："我父啊，倘若可行，求你叫这杯离开我；然而，不要照我的意思，只要照你的意思。"',
          text_en: 'And he went a little farther, and fell on his face, and prayed, saying, O my Father, if it be possible, let this cup pass from me: nevertheless not as I will, but as thou wilt.',
        },
        reflection: {
          zh: '在客西马尼园，耶稣经历了极大的痛苦挣扎。祂是完全的人，也感受恐惧和痛苦。但祂的祷告是"不要照我的意思，只要照你的意思"。这是最高层次的顺服——不是没有挣扎，而是在挣扎中仍然选择神的旨意。',
          en: 'In Gethsemane, Jesus experienced intense anguish. Fully human, He felt fear and pain. Yet His prayer was "not as I will, but as You will." This is the highest form of obedience — not the absence of struggle, but choosing God\'s will in the midst of struggle.',
        },
        question: {
          zh: '你在祷告中是否能说"不要照我的意思，只要照你的意思"？这对你来说最难的部分是什么？',
          en: 'Can you pray "not my will, but Yours"? What is the hardest part of that surrender for you?',
        },
        prayer: {
          zh: '天父，求你帮助我像耶稣一样祷告："不要照我的意思，只要照你的意思。"即使前方是十字架，我也愿意顺服你的旨意。阿们。',
          en: 'Father, help me pray as Jesus did: "Not my will, but Yours." Even if the cross lies ahead, I choose to submit to Your will. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '太26:49-50',
          ref_en: 'Matthew 26:49-50',
          text_zh: '犹大随即到耶稣跟前，说："请拉比安"，就与他亲嘴。耶稣对他说："朋友，你来要做的事，就做吧。"于是那些人上前，下手拿住耶稣。',
          text_en: 'And forthwith he came to Jesus, and said, Hail, master; and kissed him. And Jesus said unto him, Friend, wherefore art thou come? Then came they, and laid hands on Jesus, and took him.',
        },
        reflection: {
          zh: '犹大用亲嘴——一个亲密的动作——来出卖耶稣。背叛往往来自最亲近的人，伤害也最深。但耶稣仍然称犹大为"朋友"。即使面对最痛的背叛，耶稣也没有用仇恨回应。',
          en: 'Judas betrayed Jesus with a kiss — an intimate gesture. Betrayal often comes from those closest to us and cuts deepest. Yet Jesus still called Judas "friend." Even facing the deepest betrayal, Jesus did not respond with hatred.',
        },
        question: {
          zh: '你曾被亲近的人伤害或背叛吗？耶稣的回应如何帮助你面对这样的经历？',
          en: 'Have you been hurt or betrayed by someone close? How does Jesus\' response help you face such experiences?',
        },
        prayer: {
          zh: '主耶稣，你经历了最亲密之人的背叛，却仍以恩慈相待。求你医治我因背叛受到的伤痛，帮助我用你的爱去饶恕伤害我的人。阿们。',
          en: 'Lord Jesus, You endured betrayal from someone closest to You yet responded with grace. Heal my wounds from betrayal and help me forgive those who hurt me with Your love. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '路22:61-62',
          ref_en: 'Luke 22:61-62',
          text_zh: '主转过身来看彼得，彼得便想起主对他所说的话："今日鸡叫以先，你要三次不认我。"他就出去痛哭。',
          text_en: 'And the Lord turned, and looked upon Peter. And Peter remembered the word of the Lord, how he had said unto him, Before the cock crow, thou shalt deny me thrice. And Peter went out, and wept bitterly.',
        },
        reflection: {
          zh: '彼得曾信誓旦旦说即使丧命也不会否认主，却在压力下三次不认耶稣。当耶稣转身看他的那一刻，不是责备的眼神，而是充满怜悯和爱。彼得的痛哭是真实悔改的开始，而耶稣的目光是恩典的起点。',
          en: 'Peter had vowed to die before denying Jesus, yet under pressure he denied Him three times. When Jesus turned and looked at him, it was not a gaze of condemnation but of mercy and love. Peter\'s bitter weeping was the beginning of true repentance, and Jesus\' gaze was the starting point of grace.',
        },
        question: {
          zh: '你有过在关键时刻软弱跌倒的经历吗？你是否相信耶稣的目光中仍有恩典？',
          en: 'Have you stumbled in a critical moment? Do you believe there is still grace in Jesus\' gaze?',
        },
        prayer: {
          zh: '主耶稣，我像彼得一样常常软弱，常常失信。但你的目光中没有定罪，只有怜悯。求你的恩典托住我，使我在跌倒后重新站起来。阿们。',
          en: 'Lord Jesus, like Peter I am often weak and faithless. But Your gaze holds no condemnation, only mercy. Let Your grace sustain me and help me rise again after every fall. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '约18:37-38',
          ref_en: 'John 18:37-38',
          text_zh: '彼拉多就对他说："这样，你是王吗？"耶稣回答说："你说我是王。我为此而生，也为此来到世间，特为给真理作见证。凡属真理的人就听我的话。"彼拉多说："真理是什么呢？"',
          text_en: 'Pilate therefore said unto him, Art thou a king then? Jesus answered, Thou sayest that I am a king. To this end was I born, and for this cause came I into the world, that I should bear witness unto the truth. Every one that is of the truth heareth my voice. Pilate saith unto him, What is truth? And when he had said this, he went out again unto the Jews, and saith unto them, I find in him no fault at all.',
        },
        reflection: {
          zh: '彼拉多的问题"真理是什么"至今仍在回响。讽刺的是，真理就站在他面前，他却视而不见。耶稣就是真理的化身，祂来到世间就是为真理作见证。在一个相对主义盛行的时代，我们需要认定耶稣就是唯一的真理。',
          en: 'Pilate\'s question "What is truth?" still echoes today. Ironically, Truth was standing right before him, yet he could not see it. Jesus is truth incarnate, come to bear witness to the truth. In an age of relativism, we must affirm that Jesus is the only truth.',
        },
        question: {
          zh: '在这个众说纷纭的时代，你如何持守真理？耶稣的话语在你的生命中有怎样的权柄？',
          en: 'In this age of many voices, how do you hold to the truth? What authority does Jesus\' word have in your life?',
        },
        prayer: {
          zh: '主耶稣，你就是道路、真理、生命。在这个混乱的世代中，求你帮助我持守你的真理，不被世界的声音迷惑，忠心为真理作见证。阿们。',
          en: 'Lord Jesus, You are the way, the truth, and the life. In this confusing age, help me hold fast to Your truth, undistracted by the world\'s voices, faithfully witnessing to the truth. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '路23:33-34',
          ref_en: 'Luke 23:33-34',
          text_zh: '到了一个地方，名叫髑髅地，就在那里把耶稣钉在十字架上，又钉了两个犯人：一个在左边，一个在右边。当下耶稣说："父啊，赦免他们！因为他们所做的，他们不晓得。"',
          text_en: 'And when they were come to the place, which is called Calvary, there they crucified him, and the malefactors, one on the right hand, and the other on the left. Then said Jesus, Father, forgive them; for they know not what they do. And they parted his raiment, and cast lots.',
        },
        reflection: {
          zh: '在极度痛苦中，耶稣说出的第一句话不是咒诅，不是呼救，而是为钉祂的人祈求赦免。这是人类历史上最伟大的饶恕。十字架上的爱超越了一切仇恨和罪恶。',
          en: 'In extreme agony, Jesus\' first words were not curses or cries for help but a prayer of forgiveness for His crucifiers. This is the greatest act of forgiveness in human history. The love on the cross transcends all hatred and sin.',
        },
        question: {
          zh: '你心中是否有不愿饶恕的人？十字架上耶稣的饶恕如何激励你？',
          en: 'Is there someone you are unwilling to forgive? How does Jesus\' forgiveness on the cross inspire you?',
        },
        prayer: {
          zh: '主耶稣，你在十字架上为罪人代求，饶恕了钉你的人。求你也赐我饶恕的力量，释放我心中的苦毒，以你的爱来回应伤害。阿们。',
          en: 'Lord Jesus, on the cross You interceded for sinners and forgave Your crucifiers. Grant me the power to forgive, release bitterness from my heart, and respond to hurt with Your love. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '约19:30',
          ref_en: 'John 19:30',
          text_zh: '耶稣尝了那醋，就说："成了！"便低下头，将灵魂交付神了。',
          text_en: 'When Jesus therefore had received the vinegar, he said, It is finished: and he bowed his head, and gave up the ghost.',
        },
        reflection: {
          zh: '"成了"——这不是失败者的叹息，而是得胜者的宣告。耶稣完成了父神交给祂的救赎大工。罪的刑罚已经付清，死亡的权势已经被打破。我们不需要再做什么来赚取救恩，因为耶稣已经说了"成了"。',
          en: '"It is finished" — not the sigh of defeat but the declaration of victory. Jesus completed the work of redemption the Father gave Him. The penalty of sin is paid; the power of death is broken. We need do nothing more to earn salvation, for Jesus has said, "It is finished."',
        },
        question: {
          zh: '你是否仍在试图用自己的行为来赚取神的接纳？"成了"这句话对你意味着什么？',
          en: 'Are you still trying to earn God\'s acceptance through your own works? What does "It is finished" mean to you?',
        },
        prayer: {
          zh: '主耶稣，感谢你在十字架上宣告"成了"。救赎的工作已经完成，我不再需要靠自己的行为来获取恩典。我安息在你完全的救赎里。阿们。',
          en: 'Lord Jesus, thank You for declaring "It is finished" on the cross. The work of redemption is complete; I no longer need to earn grace by my own works. I rest in Your perfect salvation. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '太27:59-60',
          ref_en: 'Matthew 27:59-60',
          text_zh: '约瑟取了身体，用干净细麻布裹好，安放在自己的新坟墓里，就是他凿在磐石里的。他又把大石头滚到墓门口，就去了。',
          text_en: 'And when Joseph had taken the body, he wrapped it in a clean linen cloth, And laid it in his own new tomb, which he had hewn out in the rock: and he rolled a great stone to the door of the sepulchre, and departed.',
        },
        reflection: {
          zh: '亚利马太的约瑟冒着巨大的风险，公开表明自己是耶稣的门徒。他将自己的新坟墓献给了主。有时候，跟随耶稣需要在最黑暗的时刻站出来，付上代价。安静的忠心同样伟大。',
          en: 'Joseph of Arimathea took a great risk by publicly identifying as Jesus\' disciple. He gave his own new tomb to the Lord. Sometimes following Jesus requires stepping forward in the darkest hour and paying a cost. Quiet faithfulness is equally great.',
        },
        question: {
          zh: '你是否愿意在别人都退缩的时候为主站出来？你能献上什么给主？',
          en: 'Are you willing to stand for the Lord when everyone else shrinks back? What can you offer to Him?',
        },
        prayer: {
          zh: '主啊，求你赐我像约瑟一样的勇气，在别人退缩时为你站出来。我愿将我最好的献给你，不计代价地跟随你。阿们。',
          en: 'Lord, grant me courage like Joseph\'s — to stand for You when others withdraw. I offer You my best and follow You regardless of the cost. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '太28:5-6',
          ref_en: 'Matthew 28:5-6',
          text_zh: '天使对妇女说："不要害怕！我知道你们是寻找那钉十字架的耶稣。他不在这里，照他所说的，已经复活了。你们来看安放主的地方。"',
          text_en: 'And the angel answered and said unto the women, Fear not ye: for I know that ye seek Jesus, which was crucified. He is not here: for he is risen, as he said. Come, see the place where the Lord lay.',
        },
        reflection: {
          zh: '"他不在这里，已经复活了！"这是人类历史上最震撼的消息。空坟墓证明了耶稣胜过了死亡。十字架不是故事的结局，复活才是！因为祂活着，我们也有了永恒的盼望。',
          en: '"He is not here, for He has risen!" This is the most earth-shaking news in human history. The empty tomb proves Jesus conquered death. The cross is not the end of the story — the resurrection is! Because He lives, we too have eternal hope.',
        },
        question: {
          zh: '复活的信息如何改变了你对死亡和苦难的看法？',
          en: 'How has the message of the resurrection changed your view of death and suffering?',
        },
        prayer: {
          zh: '复活的主啊，你已经胜过了死亡！因为你活着，我可以面对明天；因为你复活，我不再惧怕。愿复活的大能充满我的生命。阿们。',
          en: 'Risen Lord, You have conquered death! Because You live, I can face tomorrow; because You rose, I no longer fear. May the power of the resurrection fill my life. Amen.',
        },
      },
      {
        scripture: {
          ref_zh: '太28:18-20',
          ref_en: 'Matthew 28:18-20',
          text_zh: '耶稣进前来，对他们说："天上地下所有的权柄都赐给我了。所以，你们要去，使万民作我的门徒，奉父、子、圣灵的名给他们施洗。凡我所吩咐你们的，都教训他们遵守，我就常与你们同在，直到世界的末了。"',
          text_en: 'And Jesus came and spake unto them, saying, All power is given unto me in heaven and in earth. Go ye therefore, and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost: Teaching them to observe all things whatsoever I have commanded you: and, lo, I am with you alway, even unto the end of the world. Amen.',
        },
        reflection: {
          zh: '十架之路的终点不是死亡，而是大使命的起点。复活的主将天上地下所有的权柄赐给了我们，差遣我们去使万民作祂的门徒。祂应许与我们同在，直到世界的末了。这是我们信仰的使命和盼望。',
          en: 'The way of the cross does not end at death but begins the Great Commission. The risen Lord, with all authority in heaven and on earth, sends us to make disciples of all nations. He promises to be with us to the very end of the age. This is the mission and hope of our faith.',
        },
        question: {
          zh: '你如何回应耶稣的大使命？在你的日常生活中，你怎样"使人作主的门徒"？',
          en: 'How do you respond to Jesus\' Great Commission? How do you "make disciples" in your daily life?',
        },
        prayer: {
          zh: '主耶稣，感谢你将大使命托付给我们，并应许与我们同在。求你赐我勇气和智慧去传扬福音，使万民作你的门徒，直到你再来的日子。阿们。',
          en: 'Lord Jesus, thank You for entrusting the Great Commission to us and promising to be with us. Grant me courage and wisdom to proclaim the gospel and make disciples of all nations until You come again. Amen.',
        },
      },
    ],
  },
];
