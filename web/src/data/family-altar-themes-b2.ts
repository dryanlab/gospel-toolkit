interface Scripture { ref_zh: string; ref_en: string; text_zh: string; text_en: string; }
interface BilingualText { zh: string; en: string; }
interface DevotionalUnit { scripture: Scripture; reflection: BilingualText; question: BilingualText; prayer: BilingualText; }
interface AltarTheme { id: string; name_zh: string; name_en: string; icon: string; devotionals: DevotionalUnit[]; hymnKeywords: string[]; }

export const themesB2: AltarTheme[] = [
  {
    id: 'parables',
    name_zh: '耶稣的比喻',
    name_en: 'Parables of Jesus',
    icon: '📖',
    hymnKeywords: ['比喻', '天国', 'parable', 'kingdom'],
    devotionals: [
      {
        scripture: {
          ref_zh: '马太福音 13:3-4',
          ref_en: 'Matthew 13:3-4',
          text_zh: '他用比喻对他们讲许多道理，说："有一个撒种的出去撒种。撒的时候，有落在路旁的，飞鸟来吃尽了。"',
          text_en: 'And he spake many things unto them in parables, saying, Behold, a sower went forth to sow; And when he sowed, some seeds fell by the way side, and the fowls came and devoured them up:',
        },
        reflection: {
          zh: '撒种的比喻提醒我们，神的道如同种子，需要落在好土里才能结实。路旁的土代表心硬的人，听了道却不明白，仇敌就把所撒的夺去了。我们当省察自己的心田，是否预备好接受神话语的栽种。',
          en: 'The Parable of the Sower reminds us that God\'s Word is like seed that needs good soil to bear fruit. The path represents hard hearts — those who hear the Word but do not understand, and the evil one snatches away what was sown. Let us examine our hearts: are they prepared to receive the planting of God\'s Word?',
        },
        question: {
          zh: '你觉得自己的心田现在更像哪种土壤？你可以做什么来预备自己的心更好地接受神的话语？',
          en: 'Which type of soil best describes your heart right now? What can you do to prepare your heart to better receive God\'s Word?',
        },
        prayer: {
          zh: '天父，求祢软化我们刚硬的心，除去一切拦阻我们领受祢话语的石头和荆棘。让我们的心成为好土，使祢的道在我们里面扎根、生长、结出丰盛的果实。奉主耶稣的名祷告，阿们。',
          en: 'Heavenly Father, soften our hard hearts and remove every stone and thorn that hinders us from receiving Your Word. Make our hearts good soil, that Your Word may take root, grow, and bear abundant fruit in us. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '马太福音 13:31-32',
          ref_en: 'Matthew 13:31-32',
          text_zh: '他又设个比喻对他们说："天国好像一粒芥菜种，有人拿去种在田里。这原是百种里最小的，等到长起来，却比各样的菜都大，且成了树，天上的飞鸟来宿在它的枝上。"',
          text_en: 'Another parable put he forth unto them, saying, The kingdom of heaven is like to a grain of mustard seed, which a man took, and sowed in his field: Which indeed is the least of all seeds: but when it is grown, it is the greatest among herbs, and becometh a tree, so that the birds of the air come and lodge in the branches thereof.',
        },
        reflection: {
          zh: '芥菜种的比喻让我们看到天国的奥秘：它起初看似微不足道，却有着不可阻挡的生长力量。基督的教会从十二个门徒开始，如今遍布全球。信心也是如此，即使小如芥菜种，在神的手中也能成就大事。',
          en: 'The Parable of the Mustard Seed reveals the mystery of God\'s kingdom: it starts seemingly insignificant, yet possesses unstoppable growing power. Christ\'s church began with twelve disciples and now spans the globe. Faith works the same way — even faith as small as a mustard seed can accomplish great things in God\'s hands.',
        },
        question: {
          zh: '你是否曾因为觉得自己的信心太小而气馁？芥菜种的比喻如何鼓励你？',
          en: 'Have you ever been discouraged because you felt your faith was too small? How does the Parable of the Mustard Seed encourage you?',
        },
        prayer: {
          zh: '主啊，感谢祢让天国如芥菜种般在这世上生长。我们的信心虽然微小，求祢浇灌培植，使它不断成长。愿祢的国度在我们的家庭和社区中扩展。奉主耶稣的名祷告，阿们。',
          en: 'Lord, thank You for growing Your kingdom like a mustard seed in this world. Though our faith is small, water and nurture it so it continues to grow. May Your kingdom expand in our families and communities. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '马太福音 13:44',
          ref_en: 'Matthew 13:44',
          text_zh: '天国好像宝贝藏在地里，人遇见了就把它藏起来，欢欢喜喜地去变卖一切所有的，买这块地。',
          text_en: 'Again, the kingdom of heaven is like unto treasure hid in a field; the which when a man hath found, he hideth, and for joy thereof goeth and selleth all that he hath, and buyeth that field.',
        },
        reflection: {
          zh: '天国的价值远超世上一切。这个人发现宝贝后，不是勉强、不是被迫，而是"欢欢喜喜地"变卖一切。当我们真正认识基督的宝贵，放下世界的事就不再是牺牲，而是喜乐的交换——用短暂的换永恒的。',
          en: 'The kingdom of heaven far surpasses everything in this world. When this man found the treasure, he was not reluctant or forced — he went "in his joy" and sold everything. When we truly know the preciousness of Christ, letting go of worldly things is no longer sacrifice but a joyful exchange — trading the temporary for the eternal.',
        },
        question: {
          zh: '在你心中，天国的价值是否超过世上的一切？有什么是你还不愿意为基督放下的？',
          en: 'In your heart, does the kingdom of heaven surpass everything in this world? Is there anything you are still unwilling to let go of for Christ?',
        },
        prayer: {
          zh: '主耶稣，祢就是那隐藏的至宝。求祢开我们的灵眼，让我们真正看见天国的价值，甘心乐意地将一切摆上，来换取那存到永远的福分。奉主耶稣的名祷告，阿们。',
          en: 'Lord Jesus, You are the hidden treasure. Open our spiritual eyes to truly see the value of Your kingdom, that we may willingly offer everything for the blessings that last forever. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '路加福音 15:4-6',
          ref_en: 'Luke 15:4-6',
          text_zh: '你们中间，谁有一百只羊失去一只，不把这九十九只撇在旷野，去找那失去的羊，直到找着呢？找着了，就欢欢喜喜地扛在肩上，回到家里，就请朋友邻舍来，对他们说："我失去的羊已经找着了，你们和我一同欢喜吧！"',
          text_en: 'What man of you, having an hundred sheep, if he lose one of them, doth not leave the ninety and nine in the wilderness, and go after that which is lost, until he find it? And when he hath found it, he layeth it on his shoulders, rejoicing. And when he cometh home, he calleth together his friends and neighbours, saying unto them, Rejoice with me; for I have found my sheep which was lost.',
        },
        reflection: {
          zh: '好牧人不惜撇下九十九只，去寻找那一只迷失的羊。这就是神对罪人的爱——不是等你回来，而是主动来寻找你。祂不嫌弃你走得多远，找到你之后还欢欢喜喜地扛在肩上。每一个灵魂在神眼中都无比宝贵。',
          en: 'The Good Shepherd leaves the ninety-nine to search for the one lost sheep. This is God\'s love for sinners — He doesn\'t wait for you to return but actively comes to find you. No matter how far you\'ve wandered, He rejoices and carries you on His shoulders. Every soul is infinitely precious in God\'s eyes.',
        },
        question: {
          zh: '你是否经历过神在你迷失时来寻找你？你身边是否有"迷失的羊"需要你为他们祷告？',
          en: 'Have you experienced God seeking you when you were lost? Is there a "lost sheep" around you that you need to pray for?',
        },
        prayer: {
          zh: '慈爱的牧者，感谢祢不放弃任何一只迷失的羊。我们曾经都是那走迷的羊，是祢把我们找回来。求祢也使用我们去关心身边迷失的人，将祢寻找的爱传递出去。奉主耶稣的名祷告，阿们。',
          en: 'Loving Shepherd, thank You for never giving up on any lost sheep. We were all once wandering sheep, and You brought us back. Use us to care for the lost around us and share Your seeking love. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '路加福音 15:20-24',
          ref_en: 'Luke 15:20-24',
          text_zh: '于是起来，往他父亲那里去。相离还远，他父亲看见，就动了慈心，跑去抱着他的颈项，连连与他亲嘴。……父亲吩咐仆人说：\'把那上好的袍子快拿出来给他穿，把戒指戴在他指头上，把鞋穿在他脚上，……我们可以快乐。\'',
          text_en: 'And he arose, and came to his father. But when he was yet a great way off, his father saw him, and had compassion, and ran, and fell on his neck, and kissed him. And the son said unto him, Father, I have sinned against heaven, and in thy sight, and am no more worthy to be called thy son. But the father said to his servants, Bring forth the best robe, and put it on him; and put a ring on his hand, and shoes on his feet: And bring hither the fatted calf, and kill it; and let us eat, and be merry: For this my son was dead, and is alive again; he was lost, and is found. And they began to be merry.',
        },
        reflection: {
          zh: '浪子回头的比喻是福音最美的图画之一。父亲没有等浪子走到跟前才接纳他，而是"相离还远"就跑过去拥抱。袍子代表尊荣，戒指代表权柄，鞋子代表儿子的身份。无论我们曾经如何远离神，祂总是张开双臂等待我们回家。',
          en: 'The Parable of the Prodigal Son is one of the most beautiful pictures of the gospel. The father didn\'t wait for the son to reach him — he saw him "a long way off" and ran to embrace him. The robe represents honor, the ring represents authority, the shoes represent sonship. No matter how far we\'ve strayed from God, He always stands with open arms waiting for us to come home.',
        },
        question: {
          zh: '你是否曾像浪子一样远离天父？回到神面前时，你经历了怎样的接纳和恩典？',
          en: 'Have you ever wandered far from the Father like the prodigal son? When you returned to God, what acceptance and grace did you experience?',
        },
        prayer: {
          zh: '慈爱的天父，感谢祢永远不放弃我们，即使我们像浪子一样远离了祢。祢的慈爱长阔高深，祢的恩典永远够用。求祢帮助我们时常回到祢面前，享受祢儿女的福分。奉主耶稣的名祷告，阿们。',
          en: 'Loving Father, thank You for never giving up on us, even when we wander far like the prodigal son. Your love is immeasurable and Your grace is always sufficient. Help us continually return to You and enjoy the blessings of being Your children. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '马太福音 25:35-36',
          ref_en: 'Matthew 25:35-36',
          text_zh: '因为我饿了，你们给我吃；渴了，你们给我喝；我作客旅，你们留我住；我赤身露体，你们给我穿；我病了，你们看顾我；我在监里，你们来看我。',
          text_en: 'For I was an hungred, and ye gave me meat: I was thirsty, and ye gave me drink: I was a stranger, and ye took me in: Naked, and ye clothed me: I was sick, and ye visited me: I was in prison, and ye came unto me.',
        },
        reflection: {
          zh: '绵羊和山羊的比喻告诉我们，真正的信心必然带出行动。服事最小的弟兄姐妹，就是服事基督自己。信仰不只在教堂里，更在日常生活的每一个怜悯行动中。我们对有需要之人的态度，反映了我们与基督的关系。',
          en: 'The Parable of the Sheep and Goats teaches that genuine faith inevitably produces action. Serving the least of Christ\'s brothers and sisters is serving Christ Himself. Faith is not confined to the church building — it lives in every act of mercy in daily life. Our attitude toward those in need reflects our relationship with Christ.',
        },
        question: {
          zh: '最近有没有什么具体的方式，你可以服事身边有需要的人？你如何在日常生活中活出信仰？',
          en: 'Is there a specific way you can serve someone in need around you recently? How do you live out your faith in daily life?',
        },
        prayer: {
          zh: '主耶稣，求祢给我们一颗敏锐的心，看见身边有需要的人。帮助我们不只是口头上说爱，更用实际的行动来服事祢、服事人。愿我们的信心在爱的行动中被人看见。奉主耶稣的名祷告，阿们。',
          en: 'Lord Jesus, give us sensitive hearts to see those in need around us. Help us not just speak of love but serve You and others through concrete actions. May our faith be seen through our deeds of love. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '马太福音 18:23-27',
          ref_en: 'Matthew 18:23-27',
          text_zh: '天国好像一个王要和他仆人算账。才算的时候，有人带了一个欠一千万银子的来。因为他没有什么偿还之物，主人吩咐把他和他妻子儿女，并一切所有的都卖了偿还。那仆人就俯伏拜他，说：\'主啊，宽容我，将来我都要还清。\'那仆人的主人就动了慈心，把他释放了，并且免了他的债。',
          text_en: 'Therefore is the kingdom of heaven likened unto a certain king, which would take account of his servants. And when he had begun to reckon, one was brought unto him, which owed him ten thousand talents. But forasmuch as he had not to pay, his lord commanded him to be sold, and his wife, and children, and all that he had, and payment to be made. The servant therefore fell down, and worshipped him, saying, Lord, have patience with me, and I will pay thee all. Then the lord of that servant was moved with compassion, and loosed him, and forgave him the debt.',
        },
        reflection: {
          zh: '一千万银子是天文数字，一个人一辈子也还不清。这正是我们在神面前的光景——罪债之大，远超我们偿还的能力。但主人"动了慈心"，完全免了他的债。这就是恩典！然而比喻继续说，那仆人却不肯免同伴的小债。领受了大恩典的人，岂不应当也以恩典待人吗？',
          en: 'Ten thousand talents was an astronomical sum — impossible to repay in a lifetime. This is our condition before God — our debt of sin far exceeds our ability to pay. But the master "out of pity" forgave the entire debt. This is grace! Yet the parable continues: that servant refused to forgive his fellow servant\'s small debt. Should not those who have received great grace also extend grace to others?',
        },
        question: {
          zh: '你是否有不愿饶恕的人或事？想想神免了你多大的债，这如何帮助你去饶恕别人？',
          en: 'Is there someone or something you are unwilling to forgive? Considering how great a debt God has forgiven you, how does this help you forgive others?',
        },
        prayer: {
          zh: '恩慈的主，祢免了我们无法偿还的罪债，这何等大的恩典！求祢帮助我们也以恩慈待人，饶恕那些得罪我们的人，正如祢饶恕了我们一样。奉主耶稣的名祷告，阿们。',
          en: 'Gracious Lord, You forgave our unpayable debt of sin — what amazing grace! Help us extend grace to others and forgive those who wrong us, just as You have forgiven us. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '马太福音 25:1-4',
          ref_en: 'Matthew 25:1-4',
          text_zh: '那时，天国好比十个童女拿着灯出去迎接新郎。其中有五个是愚拙的，五个是聪明的。愚拙的拿着灯，却不预备油；聪明的拿着灯，又预备油在器皿里。',
          text_en: 'Then shall the kingdom of heaven be likened unto ten virgins, which took their lamps, and went forth to meet the bridegroom. And five of them were wise, and five were foolish. They that were foolish took their lamps, and took no oil with them: But the wise took oil in their vessels with their lamps.',
        },
        reflection: {
          zh: '十个童女的比喻警醒我们要时刻预备迎接主的再来。灯代表外在的信仰表现，油代表内在真实的属灵生命。聪明与愚拙的区别不在于灯，而在于油。外表的宗教形式不够，我们需要真实的、内在的与基督的关系。',
          en: 'The Parable of the Ten Virgins warns us to always be prepared for the Lord\'s return. The lamps represent outward religious appearance, while the oil represents genuine inner spiritual life. The difference between wise and foolish is not the lamp but the oil. Outward religious form is not enough — we need a real, inner relationship with Christ.',
        },
        question: {
          zh: '如果主今天就回来，你预备好了吗？你的信仰是外在的形式，还是内在真实的生命？',
          en: 'If the Lord returned today, would you be ready? Is your faith an outward form or a genuine inner life?',
        },
        prayer: {
          zh: '主耶稣，求祢帮助我们做聪明的童女，时刻预备好迎接祢的再来。不要让我们只有外在的宗教形式，而是赐给我们真实的属灵生命和与祢亲密的关系。奉主耶稣的名祷告，阿们。',
          en: 'Lord Jesus, help us be like the wise virgins, always prepared for Your return. Don\'t let us settle for outward religious form, but grant us genuine spiritual life and an intimate relationship with You. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '马太福音 25:14-15',
          ref_en: 'Matthew 25:14-15',
          text_zh: '天国又好比一个人要往外国去，就叫了仆人来，把他的家业交给他们，按着各人的才干，给他们银子，一个给了五千，一个给了二千，一个给了一千，就往外国去了。',
          text_en: 'For the kingdom of heaven is as a man travelling into a far country, who called his own servants, and delivered unto them his goods. And unto one he gave five talents, to another two, and to another one; to every man according to his several ability; and straightway took his journey.',
        },
        reflection: {
          zh: '按才受托的比喻教导我们，神给每个人不同的恩赐和机会，但都期望我们忠心地使用。神不是按结果的大小来衡量，而是按忠心的程度。五千和二千的仆人得到同样的称赞："好！你这又良善又忠心的仆人。"关键不在于你有多少，而在于你是否忠心。',
          en: 'The Parable of the Talents teaches that God gives different gifts and opportunities to each person but expects faithful stewardship from all. God does not measure by the size of results but by the degree of faithfulness. The servants with five and two talents received the same commendation: "Well done, good and faithful servant." What matters is not how much you have, but whether you are faithful.',
        },
        question: {
          zh: '神给了你哪些才干和恩赐？你是否在忠心地使用它们来荣耀神、服事人？',
          en: 'What talents and gifts has God given you? Are you faithfully using them to glorify God and serve others?',
        },
        prayer: {
          zh: '主啊，感谢祢按着祢的智慧赐给我们各样的恩赐。求祢帮助我们不埋没祢所给的，而是忠心地使用每一个才干来服事祢。愿我们将来能听到祢说："好！你这又良善又忠心的仆人。"奉主耶稣的名祷告，阿们。',
          en: 'Lord, thank You for wisely giving us various gifts. Help us not bury what You\'ve given but faithfully use every talent to serve You. May we one day hear You say, "Well done, good and faithful servant." In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '路加福音 10:30-34',
          ref_en: 'Luke 10:30-34',
          text_zh: '有一个人从耶路撒冷下耶利哥去，落在强盗手中。他们剥去他的衣裳，把他打个半死，就丢下他走了。……惟有一个撒玛利亚人行路来到那里，看见他就动了慈心，上前用油和酒倒在他的伤处，包裹好了，扶他骑上自己的牲口，带到店里去照应他。',
          text_en: 'And Jesus answering said, A certain man went down from Jerusalem to Jericho, and fell among thieves, which stripped him of his raiment, and wounded him, and departed, leaving him half dead. And by chance there came down a certain priest that way: and when he saw him, he passed by on the other side. And likewise a Levite, when he was at the place, came and looked on him, and passed by on the other side. But a certain Samaritan, as he journeyed, came where he was: and when he saw him, he had compassion on him, And went to him, and bound up his wounds, pouring in oil and wine, and set him on his own beast, and brought him to an inn, and took care of him.',
        },
        reflection: {
          zh: '好撒玛利亚人的比喻打破了所有的偏见和界限。祭司和利未人是宗教领袖，却视而不见；反倒是被犹太人鄙视的撒玛利亚人伸出了援手。真正的爱邻舍不分民族、阶层、背景，是看见需要就行动的慈心。耶稣自己就是那位真正的好撒玛利亚人，来到我们这些伤痕累累的罪人身边。',
          en: 'The Good Samaritan breaks through all prejudice and boundaries. The priest and Levite were religious leaders who passed by, but the Samaritan — despised by Jews — was the one who helped. True love for neighbor knows no ethnicity, class, or background — it is compassion that sees need and acts. Jesus Himself is the true Good Samaritan who came to us, wounded sinners.',
        },
        question: {
          zh: '你生活中是否有像"落在强盗手中"一样需要帮助的人？你是像祭司利未人一样路过，还是愿意像撒玛利亚人一样停下来？',
          en: 'Is there someone in your life who, like the man who fell among robbers, needs help? Do you pass by like the priest and Levite, or are you willing to stop like the Samaritan?',
        },
        prayer: {
          zh: '主耶稣，祢是我们的好撒玛利亚人，在我们伤痕累累时来医治我们。求祢赐给我们祢一样的慈心，不因偏见而冷漠，而是看见需要就伸出援手。奉主耶稣的名祷告，阿们。',
          en: 'Lord Jesus, You are our Good Samaritan who came to heal us when we were wounded. Give us Your same compassion — not cold indifference from prejudice, but hands that reach out when they see need. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '路加福音 18:10-14',
          ref_en: 'Luke 18:10-14',
          text_zh: '说："有两个人上殿里去祷告，一个是法利赛人，一个是税吏。法利赛人站着，自言自语地祷告说：\'神啊，我感谢你，我不像别人……\'那税吏远远地站着，连举目望天也不敢，只捶着胸说：\'神啊，开恩可怜我这个罪人！\'我告诉你们，这人回家去比那人倒算为义了。"',
          text_en: 'Two men went up into the temple to pray; the one a Pharisee, and the other a publican. The Pharisee stood and prayed thus with himself, God, I thank thee, that I am not as other men are, extortioners, unjust, adulterers, or even as this publican. I fast twice in the week, I give tithes of all that I possess. And the publican, standing afar off, would not lift up so much as his eyes unto heaven, but smote upon his breast, saying, God be merciful to me a sinner. I tell you, this man went down to his house justified rather than the other: for every one that exalteth himself shall be abased; and he that humbleth himself shall be exalted.',
        },
        reflection: {
          zh: '法利赛人和税吏的祷告形成鲜明对比。法利赛人的"祷告"其实是在神面前的自我表扬；税吏的祷告虽然简短，却充满了真实的悔罪和对神怜悯的渴求。神所看重的不是华丽的言辞，而是谦卑痛悔的心。到神面前来，我们唯一的资格就是承认自己是罪人。',
          en: 'The prayers of the Pharisee and tax collector stand in stark contrast. The Pharisee\'s "prayer" was really self-congratulation before God; the tax collector\'s prayer, though brief, was filled with genuine repentance and longing for God\'s mercy. God values not eloquent words but a humble and contrite heart. Our only qualification to come before God is acknowledging that we are sinners.',
        },
        question: {
          zh: '你的祷告更像法利赛人还是税吏？你是否有时在信仰中产生自义的心态？',
          en: 'Does your prayer life look more like the Pharisee\'s or the tax collector\'s? Do you sometimes develop a self-righteous attitude in your faith?',
        },
        prayer: {
          zh: '神啊，开恩可怜我们这些罪人！求祢除去我们心中一切的骄傲和自义，让我们常存谦卑痛悔的心来到祢面前。不是靠我们的好行为，乃是靠祢的怜悯。奉主耶稣的名祷告，阿们。',
          en: 'God, be merciful to us sinners! Remove all pride and self-righteousness from our hearts. Let us always come before You with humble and contrite hearts — not relying on our good works, but on Your mercy. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '马太福音 7:24-25',
          ref_en: 'Matthew 7:24-25',
          text_zh: '所以，凡听见我这话就去行的，好比一个聪明人，把房子盖在磐石上。雨淋，水冲，风吹，撞着那房子，房子总不倒塌，因为根基立在磐石上。',
          text_en: 'Therefore whosoever heareth these sayings of mine, and doeth them, I will liken him unto a wise man, which built his house upon a rock: And the rain descended, and the floods came, and the winds blew, and beat upon that house; and it fell not: for it was founded upon a rock.',
        },
        reflection: {
          zh: '两种根基的比喻是登山宝训的总结。听道而行道，就是把生命建造在磐石上；听道而不行道，就是建在沙土上。人生的风雨总会来到——疾病、失业、关系破裂、至亲离世。能不能站立得住，取决于你的根基是什么。真理磐石就是基督和祂的话语。',
          en: 'The Parable of the Two Foundations concludes the Sermon on the Mount. Hearing and doing the Word is building on rock; hearing without doing is building on sand. Life\'s storms will come — illness, job loss, broken relationships, loss of loved ones. Whether you stand depends on your foundation. The Rock of Truth is Christ and His Word.',
        },
        question: {
          zh: '你的人生根基是建在什么上面？当风雨来临时，什么是你不动摇的依靠？',
          en: 'What is your life built upon? When storms come, what is your unshakable foundation?',
        },
        prayer: {
          zh: '主啊，求祢帮助我们不只是听道，更要行道。让我们把生命的根基牢牢地建立在祢的磐石上，这样无论什么风雨临到，我们都能靠祢站立得稳。奉主耶稣的名祷告，阿们。',
          en: 'Lord, help us not only hear Your Word but also do it. Let us build our lives firmly on Your rock, so that no matter what storms come, we can stand firm in You. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '路加福音 14:16-20',
          ref_en: 'Luke 14:16-20',
          text_zh: '耶稣对他说："有一人摆设大筵席，请了许多客。到了坐席的时候，打发仆人去对所请的人说：\'请来吧，样样都齐备了。\'众人一口同音地推辞。头一个说：\'我买了一块地，必须去看看，请你准我辞了。\'",',
          text_en: 'Then said he unto him, A certain man made a great supper, and bade many: And sent his servant at supper time to say to them that were bidden, Come; for all things are now ready. And they all with one consent began to make excuse. The first said unto him, I have bought a piece of ground, and I must needs go and see it: I pray thee have me excused. And another said, I have bought five yoke of oxen, and I go to prove them: I pray thee have me excused. And another said, I have married a wife, and therefore I cannot come.',
        },
        reflection: {
          zh: '大筵席的比喻揭示了一个令人心痛的事实：神的恩典白白赐给人，人却因为各种理由推辞。买地、试牛、娶妻——这些本身不是坏事，但当它们成为拒绝神邀请的借口时，就成了偶像。神的筵席已经备好，样样齐备，问题从来不是神预备得不够，而是我们是否愿意来。',
          en: 'The Parable of the Great Banquet reveals a heartbreaking truth: God offers His grace freely, yet people decline for various reasons. Buying a field, testing oxen, getting married — none of these are bad things, but when they become excuses to reject God\'s invitation, they become idols. God\'s banquet is ready with everything prepared. The problem is never that God hasn\'t prepared enough, but whether we are willing to come.',
        },
        question: {
          zh: '你生活中有什么事情正在成为你回应神呼召的借口？你是否把某些事看得比神的邀请更重要？',
          en: 'What in your life might be becoming an excuse for not responding to God\'s call? Are there things you prioritize above God\'s invitation?',
        },
        prayer: {
          zh: '主啊，感谢祢为我们预备了丰盛的恩典筵席。求祢除去我们一切的借口和拦阻，让我们欢喜快乐地回应祢的邀请。不要让世上的事成为我们的偶像，拦阻我们来到祢面前。奉主耶稣的名祷告，阿们。',
          en: 'Lord, thank You for preparing a rich banquet of grace for us. Remove every excuse and obstacle from our hearts so we may joyfully respond to Your invitation. Don\'t let worldly things become idols that keep us from You. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '马太福音 13:47-48',
          ref_en: 'Matthew 13:47-48',
          text_zh: '天国又好像网撒在海里，聚拢各样水族。网既满了，人就拉上岸来；坐下，拣好的收在器具里，将不好的丢弃了。',
          text_en: 'Again, the kingdom of heaven is like unto a net, that was cast into the sea, and gathered of every kind: Which, when it was full, they drew to shore, and sat down, and gathered the good into vessels, but cast the bad away.',
        },
        reflection: {
          zh: '撒网的比喻提醒我们，教会在地上是可见的混合体——好鱼和坏鱼共存于网中。最终的分别不是人做的，而是在末日由天使来执行。这给我们两个提醒：第一，不要因为教会中有假冒伪善的人就离开教会；第二，要省察自己到底是哪一种鱼。',
          en: 'The Parable of the Net reminds us that the visible church on earth is a mixed body — good and bad fish coexist in the net. The final separation is not done by humans but by angels at the end of the age. This gives us two reminders: first, don\'t leave the church because of hypocrites; second, examine yourself to see which kind of fish you are.',
        },
        question: {
          zh: '你如何看待教会中不完美的地方？这个比喻如何帮助你理解教会的本质和你在其中的角色？',
          en: 'How do you view imperfections in the church? How does this parable help you understand the nature of the church and your role in it?',
        },
        prayer: {
          zh: '主啊，感谢祢建立教会作为祢子民聚集的地方。帮助我们不因教会的不完美而灰心，也求祢常常光照我们，让我们省察自己的信心是否真实。愿我们在末日被收在祢的器具里。奉主耶稣的名祷告，阿们。',
          en: 'Lord, thank You for establishing the church as a gathering place for Your people. Help us not be discouraged by the church\'s imperfections, and constantly search our hearts to examine whether our faith is genuine. May we be gathered into Your containers on the last day. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '路加福音 12:16-21',
          ref_en: 'Luke 12:16-21',
          text_zh: '就用比喻对他们说："有一个财主田产丰盛，自己心里思想说：\'我的出产没有地方收藏，怎么办呢？\'又说：\'我要这么办：要把我的仓房拆了，另盖更大的……然后要对我的灵魂说：灵魂哪，你有许多财物积存，可作多年的费用，只管安安逸逸地吃喝快乐吧！\'神却对他说：\'无知的人哪，今夜必要你的灵魂，你所预备的要归谁呢？\'"',
          text_en: 'And he spake a parable unto them, saying, The ground of a certain rich man brought forth plentifully: And he thought within himself, saying, What shall I do, because I have no room where to bestow my fruits? And he said, This will I do: I will pull down my barns, and build greater; and there will I bestow all my fruits and my goods. And I will say to my soul, Soul, thou hast much goods laid up for many years; take thine ease, eat, drink, and be merry. But God said unto him, Thou fool, this night thy soul shall be required of thee: then whose shall those things be, which thou hast provided? So is he that layeth up treasure for himself, and is not rich toward God.',
        },
        reflection: {
          zh: '无知财主的比喻是对物质主义最严厉的警告。这个人不是因为有钱而被称为无知，而是因为他把一切盼望都放在财物上，却不顾自己灵魂的归宿。"今夜必要你的灵魂"——生命的脆弱超乎我们的想象。在神面前富足，远比在世上富足更重要。',
          en: 'The Parable of the Rich Fool is the sternest warning against materialism. This man was not called a fool for being rich, but for placing all his hope in wealth while ignoring the destiny of his soul. "This night your soul is required of you" — life is more fragile than we imagine. Being rich toward God is far more important than being rich in this world.',
        },
        question: {
          zh: '如果神今晚就要你的灵魂，你预备好了吗？你在"向神富足"上有怎样的追求？',
          en: 'If God required your soul tonight, would you be ready? How are you pursuing being "rich toward God"?',
        },
        prayer: {
          zh: '主啊，求祢帮助我们不做无知的财主，把盼望放在会朽坏的财物上。教导我们数算自己的日子，好叫我们得着智慧的心。让我们积攒财宝在天上，在祢面前做一个富足的人。奉主耶稣的名祷告，阿们。',
          en: 'Lord, help us not be like the rich fool, placing our hope in perishable wealth. Teach us to number our days that we may gain a heart of wisdom. Let us store up treasures in heaven and be rich toward You. In Jesus\' name, amen.',
        },
      },
    ],
  },
];
