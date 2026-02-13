interface Scripture { ref_zh: string; ref_en: string; text_zh: string; text_en: string; }
interface BilingualText { zh: string; en: string; }
interface DevotionalUnit { scripture: Scripture; reflection: BilingualText; question: BilingualText; prayer: BilingualText; }
interface AltarTheme { id: string; name_zh: string; name_en: string; icon: string; devotionals: DevotionalUnit[]; hymnKeywords: string[]; }

export const themesB13: AltarTheme[] = [
  {
    id: 'advent',
    name_zh: '圣诞与道成肉身',
    name_en: 'Advent & Incarnation',
    icon: '⭐',
    hymnKeywords: ['圣诞', '降生', 'Christmas', 'Immanuel'],
    devotionals: [
      {
        scripture: {
          ref_zh: '创世记 3:15',
          ref_en: 'Genesis 3:15',
          text_zh: '我又要叫你和女人彼此为仇；你的后裔和女人的后裔也彼此为仇。女人的后裔要伤你的头；你要伤他的脚跟。',
          text_en: 'I will put enmity between you and the woman, and between your offspring and her offspring; he shall bruise your head, and you shall bruise his heel.',
        },
        reflection: {
          zh: '这是圣经中第一个关于救主的应许，被称为"原始福音"。在人类堕落的那一刻，神已经预备了拯救的计划。女人的后裔——耶稣基督——将彻底击败撒但的权势。道成肉身的计划从创世之初就已定下。',
          en: 'This is the first messianic promise in Scripture, called the "protoevangelium." At the very moment of humanity\'s fall, God already had a plan of salvation. The offspring of the woman—Jesus Christ—would decisively crush Satan\'s power. The plan of incarnation was set from the very beginning.',
        },
        question: {
          zh: '神在人犯罪后立刻赐下应许，这告诉我们神是怎样的一位神？',
          en: 'What does it tell us about God that He gave a promise of redemption immediately after humanity sinned?',
        },
        prayer: {
          zh: '天父，感谢祢在我们还未认识祢时，就已经为我们预备了救恩。祢的爱从起初就不曾改变。求祢帮助我们在这个圣诞季节，更深地认识祢奇妙的救赎计划。奉耶稣的名祷告，阿们。',
          en: 'Heavenly Father, thank You for preparing salvation for us even before we knew You. Your love has never changed from the beginning. Help us in this Advent season to understand more deeply Your wonderful plan of redemption. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '民数记 24:17',
          ref_en: 'Numbers 24:17',
          text_zh: '我看他却不在现时；我望他却不在近日。有星要出于雅各，有杖要兴于以色列，必打破摩押的四角，毁坏扰乱之子。',
          text_en: 'I see him, but not now; I behold him, but not near: a star shall come out of Jacob, and a scepter shall rise out of Israel; it shall crush the forehead of Moab and break down all the sons of Sheth.',
        },
        reflection: {
          zh: '外邦先知巴兰虽被雇来咒诅以色列，却在圣灵的感动下说出了弥赛亚的预言。那颗出于雅各的星，预指着伯利恒之星和君王耶稣的降临。神的计划不受任何人的阻挡，连仇敌也要为祂的旨意效力。',
          en: 'Balaam, a pagan prophet hired to curse Israel, was moved by the Spirit to prophesy about the Messiah. The star out of Jacob foreshadowed the Star of Bethlehem and the coming of King Jesus. God\'s plan cannot be thwarted—even enemies serve His purposes.',
        },
        question: {
          zh: '神使用巴兰这位外邦先知来传递弥赛亚的预言，这对我们理解神的主权有什么启示？',
          en: 'What does God\'s use of Balaam, a pagan prophet, to deliver a messianic prophecy teach us about His sovereignty?',
        },
        prayer: {
          zh: '主啊，祢是掌管万有的神，没有任何势力能阻挡祢的计划。感谢祢差遣那颗明亮的晨星——耶稣基督——来照亮我们的生命。愿我们在祂的光中行走，直到永远。奉耶稣的名祷告，阿们。',
          en: 'Lord, You are sovereign over all, and no power can hinder Your plan. Thank You for sending that bright Morning Star—Jesus Christ—to illuminate our lives. May we walk in His light forever. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '以赛亚书 7:14',
          ref_en: 'Isaiah 7:14',
          text_zh: '因此，主自己要给你们一个兆头，必有童女怀孕生子，给他起名叫以马内利。',
          text_en: 'Therefore the Lord himself will give you a sign. Behold, the virgin shall conceive and bear a son, and shall call his name Immanuel.',
        },
        reflection: {
          zh: '"以马内利"意为"神与我们同在"。这是圣诞最核心的信息：神不是远在天边，而是亲自来到我们中间。童女怀孕是超自然的神迹，显明耶稣既是完全的神，又是完全的人。道成肉身是神最深的俯就和最大的爱。',
          en: '"Immanuel" means "God with us." This is the heart of Christmas: God is not distant but comes to dwell among us. The virgin birth is a supernatural sign revealing that Jesus is fully God and fully man. The incarnation is God\'s deepest condescension and greatest love.',
        },
        question: {
          zh: '"以马内利——神与我们同在"这个名字，在你目前的生活处境中有什么特别的意义？',
          en: 'What special meaning does the name "Immanuel—God with us" hold for your current life situation?',
        },
        prayer: {
          zh: '以马内利的神，感谢祢不是遥不可及的神，而是亲自来到我们中间，与我们同在。在孤单的时候，祢是我们的陪伴；在困难的时候，祢是我们的力量。愿我们时刻意识到祢的同在。奉耶稣的名祷告，阿们。',
          en: 'God of Immanuel, thank You for not being a distant God but for coming to dwell among us. In loneliness, You are our companion; in difficulty, You are our strength. May we be ever aware of Your presence. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '以赛亚书 9:6',
          ref_en: 'Isaiah 9:6',
          text_zh: '因有一婴孩为我们而生，有一子赐给我们，政权必担在他的肩头上。他名称为奇妙策士、全能的神、永在的父、和平的君。',
          text_en: 'For to us a child is born, to us a son is given; and the government shall be upon his shoulder, and his name shall be called Wonderful Counselor, Mighty God, Everlasting Father, Prince of Peace.',
        },
        reflection: {
          zh: '这节经文揭示了道成肉身的奥秘：一个婴孩，却担当着全能神的名号。祂是奇妙策士，赐我们智慧；是全能的神，有无限权能；是永在的父，永远看顾我们；是和平的君，赐下真正的平安。马槽中的婴孩就是宇宙的君王。',
          en: 'This verse reveals the mystery of the incarnation: a child, yet bearing the titles of Almighty God. He is Wonderful Counselor, giving us wisdom; Mighty God, possessing infinite power; Everlasting Father, caring for us forever; Prince of Peace, granting true peace. The baby in the manger is the King of the universe.',
        },
        question: {
          zh: '奇妙策士、全能的神、永在的父、和平的君——这四个名称中，哪一个最触动你现在的心？为什么？',
          en: 'Wonderful Counselor, Mighty God, Everlasting Father, Prince of Peace—which of these four titles speaks most to your heart right now, and why?',
        },
        prayer: {
          zh: '奇妙的主，祢是我们的策士、全能的神、永在的父、和平的君。我们将一切忧虑和重担交给祢，因为祢的肩头能担当一切。求祢的平安充满我们的心和家庭。奉耶稣的名祷告，阿们。',
          en: 'Wonderful Lord, You are our Counselor, Mighty God, Everlasting Father, and Prince of Peace. We cast all our anxieties and burdens upon You, for Your shoulders can bear all things. Fill our hearts and homes with Your peace. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '弥迦书 5:2',
          ref_en: 'Micah 5:2',
          text_zh: '伯利恒以法他啊，你在犹大诸城中为小，将来必有一位从你那里出来，在以色列中为我作掌权的；他的根源从亘古、从太初就有。',
          text_en: 'But you, O Bethlehem Ephrathah, who are too little to be among the clans of Judah, from you shall come forth for me one who is to be ruler in Israel, whose coming forth is from of old, from ancient days.',
        },
        reflection: {
          zh: '神选择了小小的伯利恒，而不是荣耀的耶路撒冷，作为弥赛亚的诞生地。这正是神做事的方式——祂拣选卑微的，使强壮的羞愧。然而这位从小城出来的，祂的根源却是从亘古太初就有的永恒之神。',
          en: 'God chose tiny Bethlehem, not glorious Jerusalem, as the Messiah\'s birthplace. This is God\'s way—He chooses the lowly to shame the strong. Yet the one coming from this small town has origins from of old, from ancient days—the eternal God Himself.',
        },
        question: {
          zh: '神选择在小城伯利恒成就大事，这对我们看待自己的"渺小"有什么鼓励？',
          en: 'How does God\'s choice to accomplish great things through tiny Bethlehem encourage us when we feel insignificant?',
        },
        prayer: {
          zh: '主啊，祢不轻看卑微的地方和卑微的人。祢在伯利恒成就了最伟大的事，也能在我们微小的生命中彰显祢的荣耀。求祢使用我们，不论我们看自己多么渺小。奉耶稣的名祷告，阿们。',
          en: 'Lord, You do not despise the lowly. You accomplished the greatest event in Bethlehem and can display Your glory through our small lives. Use us, no matter how insignificant we may feel. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '路加福音 1:30-33',
          ref_en: 'Luke 1:30-33',
          text_zh: '天使对她说："马利亚，不要怕！你在神面前已经蒙恩了。你要怀孕生子，可以给他起名叫耶稣。他要为大，称为至高者的儿子；主神要把他祖大卫的位给他。他要作雅各家的王，直到永远；他的国也没有穷尽。"',
          text_en: 'And the angel said to her, "Do not be afraid, Mary, for you have found favor with God. And behold, you will conceive in your womb and bear a son, and you shall call his name Jesus. He will be great and will be called the Son of the Most High. And the Lord God will give to him the throne of his father David, and he will reign over the house of Jacob forever, and of his kingdom there will be no end."',
        },
        reflection: {
          zh: '天使向马利亚宣告的信息，将旧约所有的弥赛亚应许汇聚在一起：大卫的后裔、至高者的儿子、永远的君王。"耶稣"这个名字的意思是"耶和华拯救"。神拣选了一个普通的少女来参与祂最伟大的计划，这也提醒我们：神的恩典总是出人意料。',
          en: 'The angel\'s announcement to Mary brings together all the Old Testament messianic promises: David\'s descendant, Son of the Most High, eternal King. The name "Jesus" means "the LORD saves." God chose an ordinary young woman for His greatest plan, reminding us that God\'s grace always surprises.',
        },
        question: {
          zh: '马利亚是一个平凡的少女，却被神拣选承担如此重大的使命。神有没有在你生命中做过出乎你意料的事？',
          en: 'Mary was an ordinary young woman chosen for an extraordinary mission. Has God ever done something unexpected in your life?',
        },
        prayer: {
          zh: '天父，感谢祢拣选平凡的人来成就祢不平凡的计划。感谢祢赐下耶稣——祢的拯救。求祢给我们马利亚那样顺服的心，甘心成为祢手中的器皿。奉耶稣的名祷告，阿们。',
          en: 'Heavenly Father, thank You for choosing ordinary people for Your extraordinary plans. Thank You for giving us Jesus—Your salvation. Grant us Mary\'s obedient heart, willing to be instruments in Your hands. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '路加福音 1:46-49',
          ref_en: 'Luke 1:46-49',
          text_zh: '马利亚说："我心尊主为大，我灵以神我的救主为乐；因为他顾念他使女的卑微。从今以后，万代要称我有福。那有权能的，为我成就了大事，他的名为圣。"',
          text_en: 'And Mary said, "My soul magnifies the Lord, and my spirit rejoices in God my Savior, for he has looked on the humble estate of his servant. For behold, from now on all generations will call me blessed. For he who is mighty has done great things for me, and holy is his name."',
        },
        reflection: {
          zh: '马利亚的尊主颂是圣经中最美的赞美诗之一。她没有因被拣选而骄傲，而是深深地敬拜神。她认识到自己的卑微，也认识到神的伟大。真正的敬拜始于认识自己的渺小和神的无限恩典。圣诞的喜乐源于对神救恩的感恩。',
          en: 'Mary\'s Magnificat is one of the most beautiful hymns in Scripture. She did not boast of being chosen but worshiped God deeply. She recognized her own lowliness and God\'s greatness. True worship begins with recognizing our smallness and God\'s infinite grace. Christmas joy flows from gratitude for God\'s salvation.',
        },
        question: {
          zh: '马利亚说"那有权能的，为我成就了大事"。回顾你的生命，神为你成就了哪些大事？',
          en: '"He who is mighty has done great things for me," Mary said. Looking back on your life, what great things has God done for you?',
        },
        prayer: {
          zh: '主啊，我们的心也要尊祢为大，我们的灵也要以祢为乐！祢顾念我们的卑微，为我们成就了大事。愿我们一生都以感恩的心来赞美祢。祢的名为圣，配得一切荣耀。奉耶稣的名祷告，阿们。',
          en: 'Lord, our souls magnify You, and our spirits rejoice in You! You have looked upon our humble state and done great things for us. May we praise You with grateful hearts all our lives. Holy is Your name, worthy of all glory. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '马太福音 1:20-23',
          ref_en: 'Matthew 1:20-23',
          text_zh: '正思念这事的时候，有主的使者向他梦中显现，说："大卫的子孙约瑟，不要怕，只管娶过你的妻子马利亚来，因她所怀的孕是从圣灵来的。她将要生一个儿子，你要给他起名叫耶稣，因他要将自己的百姓从罪恶里救出来。"这一切的事成就，是要应验主藉先知所说的话，说："必有童女怀孕生子，人要称他的名为以马内利。"',
          text_en: 'But as he considered these things, behold, an angel of the Lord appeared to him in a dream, saying, "Joseph, son of David, do not fear to take Mary as your wife, for that which is conceived in her is from the Holy Spirit. She will bear a son, and you shall call his name Jesus, for he will save his people from their sins." All this took place to fulfill what the Lord had spoken by the prophet: "Behold, the virgin shall conceive and bear a son, and they shall call his name Immanuel."',
        },
        reflection: {
          zh: '约瑟面临艰难的抉择，但天使的话语给了他信心和方向。"耶稣"这个名字揭示了道成肉身的核心目的——将百姓从罪恶里救出来。马太特别指出这应验了以赛亚的预言，说明神的应许从不落空。约瑟的顺服也是圣诞故事中不可或缺的一部分。',
          en: 'Joseph faced a difficult decision, but the angel\'s words gave him faith and direction. The name "Jesus" reveals the core purpose of the incarnation—to save His people from their sins. Matthew points out that this fulfilled Isaiah\'s prophecy, showing that God\'s promises never fail. Joseph\'s obedience is an essential part of the Christmas story.',
        },
        question: {
          zh: '约瑟在困惑和压力中选择了顺服神。当你面对不理解的处境时，你如何信靠神的带领？',
          en: 'Joseph chose to obey God amid confusion and pressure. How do you trust God\'s leading when you face situations you don\'t understand?',
        },
        prayer: {
          zh: '主啊，求祢赐给我们约瑟那样的信心和顺服。当我们面对不明白的事情时，帮助我们信靠祢的话语和应许。感谢祢差遣耶稣来拯救我们脱离罪恶，这是最美好的圣诞礼物。奉耶稣的名祷告，阿们。',
          en: 'Lord, grant us faith and obedience like Joseph\'s. When we face things we don\'t understand, help us trust Your Word and promises. Thank You for sending Jesus to save us from our sins—the most wonderful Christmas gift. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '路加福音 2:6-7',
          ref_en: 'Luke 2:6-7',
          text_zh: '他们在那里的时候，马利亚的产期到了，就生了头胎的儿子，用布包起来，放在马槽里，因为客店里没有地方。',
          text_en: 'And while they were there, the time came for her to give birth. And she gave birth to her firstborn son and wrapped him in swaddling cloths and laid him in a manger, because there was no place for them in the inn.',
        },
        reflection: {
          zh: '宇宙的创造者降生在最卑微的环境中——没有宫殿，没有皇室的接待，只有一个马槽。"客店里没有地方"不仅是历史事实，也是属灵的写照：这个世界常常没有给耶稣留下位置。然而神的荣耀恰恰在卑微中彰显，这就是道成肉身的奇妙。',
          en: 'The Creator of the universe was born in the humblest circumstances—no palace, no royal reception, just a manger. "No place in the inn" is not only historical fact but a spiritual picture: the world often has no room for Jesus. Yet God\'s glory shines precisely in humility—this is the wonder of the incarnation.',
        },
        question: {
          zh: '在你的生活中，你有没有给耶稣留下足够的"位置"？什么占据了祂应有的空间？',
          en: 'In your life, have you made enough room for Jesus? What has taken up the space that belongs to Him?',
        },
        prayer: {
          zh: '主耶稣，祢虽是万王之王，却甘愿降生在马槽中。求祢光照我们的心，让我们为祢腾出最重要的位置。不要让世上的忙碌和追求挤走了祢。我们的心愿意成为祢的居所。奉耶稣的名祷告，阿们。',
          en: 'Lord Jesus, though You are King of kings, You willingly were born in a manger. Shine Your light on our hearts and help us make room for You in the most important place. Don\'t let the busyness and pursuits of this world crowd You out. Our hearts are willing to be Your dwelling place. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '路加福音 2:10-11',
          ref_en: 'Luke 2:10-11',
          text_zh: '那天使对他们说："不要惧怕！我报给你们大喜的信息，是关乎万民的。因今天在大卫的城里，为你们生了救主，就是主基督。"',
          text_en: 'And the angel said to them, "Fear not, for behold, I bring you good news of great joy that will be for all the people. For unto you is born this day in the city of David a Savior, who is Christ the Lord."',
        },
        reflection: {
          zh: '天使把这"大喜的信息"首先报给了卑微的牧羊人，而不是宗教领袖或政治权贵。这福音是"关乎万民的"——不分贫富、不分种族、不分地位。救主、基督、主——三个称号概括了耶稣的身份：祂拯救我们、被神膏立、掌管一切。',
          en: 'The angel delivered this "good news of great joy" first to humble shepherds, not religious leaders or political elites. This gospel is "for all the people"—regardless of wealth, race, or status. Savior, Christ, Lord—three titles summarize who Jesus is: He saves us, is anointed by God, and reigns over all.',
        },
        question: {
          zh: '天使说这好消息是"关乎万民的"。你身边有谁还没有听到这个大喜的信息？',
          en: 'The angel said this good news is "for all the people." Who around you has not yet heard this news of great joy?',
        },
        prayer: {
          zh: '主啊，感谢祢赐下这大喜的信息！耶稣是我们的救主、基督、我们的主。求祢帮助我们不把这好消息藏在心里，而是勇敢地与身边的人分享。愿万民都认识祢的救恩。奉耶稣的名祷告，阿们。',
          en: 'Lord, thank You for this good news of great joy! Jesus is our Savior, Christ, and Lord. Help us not to keep this good news to ourselves but to share it boldly with those around us. May all people come to know Your salvation. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '路加福音 2:14',
          ref_en: 'Luke 2:14',
          text_zh: '在至高之处荣耀归与神！在地上平安归与他所喜悦的人！',
          text_en: 'Glory to God in the highest, and on earth peace among those with whom he is pleased!',
        },
        reflection: {
          zh: '天使军团的颂歌将天上与地上连在一起。耶稣的降生同时带来了两件事：神在至高处得荣耀，人在地上得平安。这平安不是世界给的暂时安逸，而是神与人之间关系的和好。因着道成肉身，天地之间的鸿沟被桥梁所填平。',
          en: 'The angelic choir\'s song connects heaven and earth. Jesus\' birth accomplishes two things simultaneously: God is glorified in the highest, and people receive peace on earth. This peace is not the temporary comfort the world gives but the reconciliation of the relationship between God and humanity. Through the incarnation, the chasm between heaven and earth is bridged.',
        },
        question: {
          zh: '耶稣带来的"平安"与世界所追求的"平安"有什么不同？你经历过这种从神而来的平安吗？',
          en: 'How is the "peace" Jesus brings different from the "peace" the world pursues? Have you experienced this peace from God?',
        },
        prayer: {
          zh: '荣耀的神，天使为祢的降生歌唱，我们也要加入这赞美的行列！感谢祢藉着耶稣赐给我们真正的平安——与祢和好的平安。愿这平安充满我们的心，也从我们流向周围的人。奉耶稣的名祷告，阿们。',
          en: 'Glorious God, the angels sang at Your birth, and we join in their praise! Thank You for granting us true peace through Jesus—the peace of reconciliation with You. May this peace fill our hearts and flow from us to those around us. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '马太福音 2:10-11',
          ref_en: 'Matthew 2:10-11',
          text_zh: '他们看见那星，就大大地欢喜；进了房子，看见小孩子和他母亲马利亚，就俯伏拜那小孩子，揭开宝盒，拿黄金、乳香、没药为礼物献给他。',
          text_en: 'When they saw the star, they rejoiced exceedingly with great joy. And going into the house, they saw the child with Mary his mother, and they fell down and worshiped him. Then, opening their treasures, they offered him gifts, gold and frankincense and myrrh.',
        },
        reflection: {
          zh: '博士们不远千里来朝拜婴孩耶稣，献上最珍贵的礼物。黄金象征君王的身份，乳香象征祭司的职分，没药预表祂将来的受苦与死亡。真正的敬拜总是伴随着代价——付出时间、旅程和最好的礼物。圣诞的本质就是敬拜那位道成肉身的王。',
          en: 'The wise men traveled great distances to worship the baby Jesus, offering their most precious gifts. Gold symbolizes His kingship, frankincense His priestly role, and myrrh foreshadows His suffering and death. True worship always involves cost—time, journey, and our best gifts. The essence of Christmas is worshiping the incarnate King.',
        },
        question: {
          zh: '博士们献上了他们最宝贵的礼物。你愿意在这个圣诞季节，将什么"最好的"献给耶稣？',
          en: 'The wise men offered their most precious gifts. What "best" are you willing to offer Jesus this Christmas season?',
        },
        prayer: {
          zh: '主耶稣，我们也像博士一样来到祢面前敬拜祢。我们愿意将最好的献给祢——我们的时间、才能、财物，以及我们整个的心。祢配得一切的尊崇和赞美。奉耶稣的名祷告，阿们。',
          en: 'Lord Jesus, like the wise men, we come before You to worship. We offer You our best—our time, talents, resources, and our whole hearts. You are worthy of all honor and praise. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '约翰福音 1:14',
          ref_en: 'John 1:14',
          text_zh: '道成了肉身，住在我们中间，充充满满地有恩典有真理。我们也见过他的荣光，正是父独生子的荣光。',
          text_en: 'And the Word became flesh and dwelt among us, and we have seen his glory, glory as of the only Son from the Father, full of grace and truth.',
        },
        reflection: {
          zh: '这是整本圣经对道成肉身最精炼的表达。"道"就是神自己，祂"成了肉身"——永恒进入时间，无限进入有限，荣耀进入卑微。"住在我们中间"原文有"支搭帐幕"之意，如同旧约神的帐幕在以色列人中间。祂充满恩典和真理，使我们得见神的荣光。',
          en: 'This is Scripture\'s most concise expression of the incarnation. The "Word" is God Himself who "became flesh"—eternity entering time, the infinite entering the finite, glory entering humility. "Dwelt among us" literally means "tabernacled," like God\'s tabernacle among Israel. Full of grace and truth, He reveals God\'s glory to us.',
        },
        question: {
          zh: '"充充满满地有恩典有真理"——在你的信仰经历中，你更多经历到的是神的恩典还是真理？如何在两者中保持平衡？',
          en: '"Full of grace and truth"—in your faith journey, have you experienced more of God\'s grace or His truth? How do you maintain balance between the two?',
        },
        prayer: {
          zh: '奇妙的主，祢是太初的道，竟愿意成为肉身住在我们中间。祢充充满满地有恩典有真理，我们渴望更多见到祢的荣光。求祢的恩典和真理充满我们的生命和家庭。奉耶稣的名祷告，阿们。',
          en: 'Wondrous Lord, You are the Word from the beginning, yet You chose to become flesh and dwell among us. You are full of grace and truth, and we long to see more of Your glory. Fill our lives and families with Your grace and truth. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '加拉太书 4:4-5',
          ref_en: 'Galatians 4:4-5',
          text_zh: '及至时候满足，神就差遣他的儿子，为女子所生，且生在律法以下，要把律法以下的人赎出来，叫我们得着儿子的名分。',
          text_en: 'But when the fullness of time had come, God sent forth his Son, born of woman, born under the law, to redeem those who were under the law, so that we might receive adoption as sons.',
        },
        reflection: {
          zh: '"时候满足"说明道成肉身不是偶然，而是神在历史中精确计划的时刻。神的儿子"为女子所生"——完全进入人类的处境；"生在律法以下"——完全承受律法的要求。目的是双重的：把我们从律法的咒诅中赎出来，并赐给我们儿子的名分。圣诞是一个领养的故事——我们被接纳进入神的家。',
          en: '"The fullness of time" shows the incarnation was not accidental but God\'s precisely planned moment in history. God\'s Son was "born of woman"—fully entering the human condition; "born under the law"—fully bearing the law\'s demands. The purpose is twofold: to redeem us from the law\'s curse and to grant us adoption as sons. Christmas is an adoption story—we are welcomed into God\'s family.',
        },
        question: {
          zh: '"得着儿子的名分"意味着我们不再是奴仆，而是神家里的儿女。这个身份如何改变你看待自己的方式？',
          en: '"Adoption as sons" means we are no longer slaves but children in God\'s family. How does this identity change the way you see yourself?',
        },
        prayer: {
          zh: '阿爸父，感谢祢在最完美的时刻差遣了祢的儿子，将我们从罪的捆绑中赎出来，赐给我们儿女的名分。我们不再是奴仆，而是祢所爱的儿女。帮助我们活出这尊贵的身份。奉耶稣的名祷告，阿们。',
          en: 'Abba Father, thank You for sending Your Son at the perfect time to redeem us from bondage and grant us adoption as children. We are no longer slaves but Your beloved children. Help us live out this glorious identity. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '腓立比书 2:9-11',
          ref_en: 'Philippians 2:9-11',
          text_zh: '所以神将他升为至高，又赐给他那超乎万名之上的名，叫一切在天上的、地上的和地底下的，因耶稣的名无不屈膝，无不口称耶稣基督为主，使荣耀归与父神。',
          text_en: 'Therefore God has highly exalted him and bestowed on him the name that is above every name, so that at the name of Jesus every knee should bow, in heaven and on earth and under the earth, and every tongue confess that Jesus Christ is Lord, to the glory of God the Father.',
        },
        reflection: {
          zh: '道成肉身的故事不止于马槽和十字架，更通向荣耀的高升。那位甘愿降卑的基督，如今被神升为至高。有一天，万膝都要向祂跪拜，万口都要承认祂是主。圣诞提醒我们：马槽中的婴孩是宇宙的主宰，值得我们毕生的敬拜和跟随。',
          en: 'The story of the incarnation does not end at the manger or the cross but leads to glorious exaltation. The Christ who willingly humbled Himself is now exalted to the highest place. One day every knee will bow and every tongue confess that He is Lord. Christmas reminds us: the baby in the manger is the Lord of the universe, worthy of our lifelong worship and devotion.',
        },
        question: {
          zh: '从马槽到宝座，耶稣走过了一条先降卑后升高的道路。这对我们跟随主的道路有什么启示？',
          en: 'From manger to throne, Jesus walked a path of humiliation before exaltation. What does this teach us about following the Lord?',
        },
        prayer: {
          zh: '至高的主耶稣基督，祢的名超乎万名之上！我们屈膝在祢面前，口称祢为主。感谢祢从天上的宝座降临到地上的马槽，又从十字架升到荣耀的宝座。愿一切荣耀归与父神。我们愿意一生敬拜祢、跟随祢。奉耶稣的名祷告，阿们。',
          en: 'Most exalted Lord Jesus Christ, Your name is above every name! We bow our knees before You and confess You as Lord. Thank You for descending from heaven\'s throne to earth\'s manger and ascending from the cross to the throne of glory. To God the Father be all glory. We will worship and follow You all our lives. In Jesus\' name, amen.',
        },
      },
    ],
  },
];
