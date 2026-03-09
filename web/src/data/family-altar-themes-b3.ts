interface Scripture { ref_zh: string; ref_en: string; text_zh: string; text_en: string; }
interface BilingualText { zh: string; en: string; }
interface DevotionalUnit { scripture: Scripture; reflection: BilingualText; question: BilingualText; prayer: BilingualText; }
interface AltarTheme { id: string; name_zh: string; name_en: string; icon: string; devotionals: DevotionalUnit[]; hymnKeywords: string[]; }

export const themesB3: AltarTheme[] = [
  {
    id: 'acts',
    name_zh: '使徒行传',
    name_en: 'Acts of the Apostles',
    icon: '🔥',
    hymnKeywords: ['圣灵', '教会', 'Spirit', 'church'],
    devotionals: [
      {
        scripture: {
          ref_zh: '徒1:4-5',
          ref_en: 'Acts 1:4-5',
          text_zh: '耶稣和他们聚集的时候，嘱咐他们说："不要离开耶路撒冷，要等候父所应许的，就是你们听见我说过的。约翰是用水施洗，但不多几日，你们要受圣灵的洗。"',
          text_en: 'And, being assembled together with them, commanded them that they should not depart from Jerusalem, but wait for the promise of the Father, which, saith he, ye have heard of me. For John truly baptized with water; but ye shall be baptized with the Holy Ghost not many days hence.',
        },
        reflection: {
          zh: '耶稣升天前最后的嘱咐不是去做什么，而是等候。等候圣灵的能力是服事的前提。我们常常急于行动，却忘了先在神面前安静领受。',
          en: 'Jesus\' final instruction before ascending was not to go do something, but to wait. Waiting for the Spirit\'s power is a prerequisite for service. We often rush to act but forget to first quietly receive from God.',
        },
        question: {
          zh: '你是否愿意在行动之前先安静等候神的引导和能力？',
          en: 'Are you willing to wait quietly for God\'s guidance and power before rushing into action?',
        },
        prayer: {
          zh: '主啊，教导我学习等候。不凭自己的力量行事，而是先被祢的灵充满，再去完成祢的使命。奉主耶稣的名祷告，阿们。',
          en: 'Lord, teach me to wait. Help me not to act in my own strength, but to be filled with Your Spirit first before carrying out Your mission. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '徒1:8',
          ref_en: 'Acts 1:8',
          text_zh: '但圣灵降临在你们身上，你们就必得着能力，并要在耶路撒冷、犹太全地和撒玛利亚，直到地极，作我的见证。',
          text_en: 'But ye shall receive power, after that the Holy Ghost is come upon you: and ye shall be witnesses unto me both in Jerusalem, and in all Judaea, and in Samaria, and unto the uttermost part of the earth.',
        },
        reflection: {
          zh: '见证的能力不是来自学问或口才，而是来自圣灵。福音的传播从身边开始，逐渐扩展到地极。每个信徒都是基督的见证人。',
          en: 'The power to witness comes not from learning or eloquence, but from the Holy Spirit. The gospel spreads from our immediate surroundings to the ends of the earth. Every believer is a witness of Christ.',
        },
        question: {
          zh: '在你的"耶路撒冷"——你的家庭、职场和社区中，你如何为主作见证？',
          en: 'In your "Jerusalem" — your family, workplace, and community — how do you bear witness for the Lord?',
        },
        prayer: {
          zh: '圣灵啊，求祢降临在我身上，赐我勇气和能力，从我身边的人开始，为主作美好的见证。奉主耶稣的名祷告，阿们。',
          en: 'Holy Spirit, come upon me. Grant me courage and power to be a faithful witness for the Lord, starting with those around me. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '徒2:1-4',
          ref_en: 'Acts 2:1-4',
          text_zh: '五旬节到了，门徒都聚集在一处。忽然，从天上有响声下来，好像一阵大风吹过，充满了他们所坐的屋子；又有舌头如火焰显现出来，分开落在他们各人头上。他们就都被圣灵充满，按着圣灵所赐的口才说起别国的话来。',
          text_en: 'And when the day of Pentecost was fully come, they were all with one accord in one place. And suddenly there came a sound from heaven as of a rushing mighty wind, and it filled all the house where they were sitting. And there appeared unto them cloven tongues like as of fire, and it sat upon each of them. And they were all filled with the Holy Ghost, and began to speak with other tongues, as the Spirit gave them utterance.',
        },
        reflection: {
          zh: '五旬节是教会诞生的日子。圣灵如风如火降临，充满每一个信徒。这不是少数人的特权，而是每个跟随者的恩赐。合一的聚集带来圣灵大能的浇灌。',
          en: 'Pentecost marks the birth of the Church. The Spirit descended like wind and fire, filling every believer. This was not the privilege of a few but a gift for every follower. United gathering brought the outpouring of the Spirit\'s power.',
        },
        question: {
          zh: '你渴望被圣灵充满吗？你是否愿意与弟兄姐妹同心合意地祷告等候？',
          en: 'Do you long to be filled with the Holy Spirit? Are you willing to pray and wait in unity with your brothers and sisters?',
        },
        prayer: {
          zh: '主啊，求祢的圣灵如同五旬节一样充满我们。让我们在合一中经历祢的大能，被祢的火焰点燃，为祢发光。奉主耶稣的名祷告，阿们。',
          en: 'Lord, fill us with Your Holy Spirit as at Pentecost. Let us experience Your power in unity, be ignited by Your fire, and shine for You. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '徒2:38-39',
          ref_en: 'Acts 2:38-39',
          text_zh: '彼得说："你们各人要悔改，奉耶稣基督的名受洗，叫你们的罪得赦，就必领受所赐的圣灵；因为这应许是给你们和你们的儿女，并一切在远方的人，就是主我们神所召来的。"',
          text_en: 'Then Peter said unto them, Repent, and be baptized every one of you in the name of Jesus Christ for the remission of sins, and ye shall receive the gift of the Holy Ghost. For the promise is unto you, and to your children, and to all that are afar off, even as many as the LORD our God shall call.',
        },
        reflection: {
          zh: '悔改与领受圣灵紧密相连。这应许不仅给当时的人，也给我们和我们的儿女。神的恩典跨越时代和地域，临到一切被祂呼召的人。',
          en: 'Repentance and receiving the Holy Spirit are closely linked. This promise is not only for those present then, but for us and our children. God\'s grace spans generations and geography, reaching all whom He calls.',
        },
        question: {
          zh: '你是否为你的家人和后代祈求过圣灵的应许？这应许如何影响你对信仰传承的看法？',
          en: 'Have you prayed for the promise of the Holy Spirit for your family and descendants? How does this promise shape your view of passing on the faith?',
        },
        prayer: {
          zh: '感谢主，祢的应许是给我们和我们的儿女的。求祢的圣灵充满我的家庭，让信仰一代一代传承下去。奉主耶稣的名祷告，阿们。',
          en: 'Thank You, Lord, that Your promise is for us and our children. Fill my family with Your Holy Spirit and let the faith be passed down from generation to generation. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '徒2:42',
          ref_en: 'Acts 2:42',
          text_zh: '都恒心遵守使徒的教训，彼此交接，擘饼，祈祷。',
          text_en: 'And they continued stedfastly in the apostles’ doctrine and fellowship, and in breaking of bread, and in prayers.',
        },
        reflection: {
          zh: '初代教会的四大支柱：教导、团契、擘饼、祷告。这不是偶尔为之，而是恒心持守。健康的教会生活需要这四样均衡发展。',
          en: 'The four pillars of the early church: teaching, fellowship, breaking of bread, and prayer. These were not occasional activities but devoted practices. A healthy church life requires balanced development of all four.',
        },
        question: {
          zh: '在这四个方面中，你的教会生活最缺乏哪一项？你可以如何加强它？',
          en: 'Which of these four areas is most lacking in your church life? How can you strengthen it?',
        },
        prayer: {
          zh: '主啊，帮助我恒心遵守祢的教训，珍惜与弟兄姐妹的团契，忠心参与擘饼和祷告。让我在教会中成长，也帮助教会成长。奉主耶稣的名祷告，阿们。',
          en: 'Lord, help me to devote myself to Your teaching, cherish fellowship with brothers and sisters, and faithfully participate in communion and prayer. Let me grow in the church and help the church grow. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '徒2:44-47',
          ref_en: 'Acts 2:44-47',
          text_zh: '信的人都在一处，凡物公用，并且卖了田产、家业，照各人所需用的分给各人。他们天天同心合意恒切地在殿里，且在家中擘饼，存着欢喜、诚实的心用饭，赞美神，得众民的喜爱。主将得救的人天天加给他们。',
          text_en: 'And all that believed were together, and had all things common; And sold their possessions and goods, and parted them to all men, as every man had need. And they, continuing daily with one accord in the temple, and breaking bread from house to house, did eat their meat with gladness and singleness of heart, Praising God, and having favour with all the people. And the Lord added to the church daily such as should be saved.',
        },
        reflection: {
          zh: '初代教会的美好见证：慷慨分享、同心敬拜、喜乐生活。这样的群体自然吸引人归向基督。教会增长不是靠策略，而是靠活出基督的爱。',
          en: 'The beautiful witness of the early church: generous sharing, united worship, joyful living. Such a community naturally draws people to Christ. Church growth comes not from strategies but from living out Christ\'s love.',
        },
        question: {
          zh: '你的教会或小组在哪些方面体现了初代教会的精神？哪些方面还需要成长？',
          en: 'In what ways does your church or small group reflect the spirit of the early church? Where is there still room to grow?',
        },
        prayer: {
          zh: '主啊，让我们的教会像初代教会一样充满爱和喜乐，彼此分享、同心敬拜。愿祢将得救的人天天加给我们。奉主耶稣的名祷告，阿们。',
          en: 'Lord, let our church be like the early church — full of love and joy, sharing with one another, worshiping in unity. Add to our number daily those who are being saved. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '徒3:6-8',
          ref_en: 'Acts 3:6-8',
          text_zh: '彼得说："金银我都没有，只把我所有的给你：我奉拿撒勒人耶稣基督的名，叫你起来行走！"于是拉着他的右手，扶他起来；他的脚和踝子骨立刻健壮了，就跳起来，站着，又行走，同他们进了殿，走着，跳着，赞美神。',
          text_en: 'Then Peter said, Silver and gold have I none; but such as I have give I thee: In the name of Jesus Christ of Nazareth rise up and walk. And he took him by the right hand, and lifted him up: and immediately his feet and ankle bones received strength. And he leaping up stood, and walked, and entered with them into the temple, walking, and leaping, and praising God.',
        },
        reflection: {
          zh: '彼得没有金银，却有比金银更宝贵的——耶稣基督的名。真正的帮助不一定是物质上的，而是将人引向基督的大能。我们所拥有的最大财富就是福音。',
          en: 'Peter had no silver or gold, but he had something far more precious — the name of Jesus Christ. True help is not always material; it is leading people to the power of Christ. The greatest treasure we possess is the gospel.',
        },
        question: {
          zh: '你身边有没有需要帮助的人？你能给他们最好的礼物是什么？',
          en: 'Is there someone around you who needs help? What is the best gift you can offer them?',
        },
        prayer: {
          zh: '主啊，虽然我的物质有限，但我有祢的名。求祢使用我，将祢的大能和福音带给身边有需要的人。奉主耶稣的名祷告，阿们。',
          en: 'Lord, though my material resources are limited, I have Your name. Use me to bring Your power and gospel to those in need around me. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '徒5:29',
          ref_en: 'Acts 5:29',
          text_zh: '彼得和众使徒回答说："顺从神，不顺从人，是应当的。"',
          text_en: 'Then Peter and the other apostles answered and said, We ought to obey God rather than men.',
        },
        reflection: {
          zh: '当人的命令与神的旨意冲突时，使徒选择顺从神。这需要极大的勇气，因为可能面对逼迫。但对神的忠心高于一切人间权柄。',
          en: 'When human commands conflicted with God\'s will, the apostles chose to obey God. This required great courage, as it could lead to persecution. But faithfulness to God is above all earthly authority.',
        },
        question: {
          zh: '你是否曾面临过信仰与世俗压力的冲突？你是如何选择的？',
          en: 'Have you ever faced a conflict between your faith and worldly pressure? How did you choose?',
        },
        prayer: {
          zh: '主啊，赐我勇气在任何环境中都以祢的旨意为首。当世界的声音与祢的话语冲突时，帮助我坚定地选择顺从祢。奉主耶稣的名祷告，阿们。',
          en: 'Lord, give me courage to put Your will first in every situation. When the world\'s voice conflicts with Your Word, help me to firmly choose obedience to You. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '徒7:59-60',
          ref_en: 'Acts 7:59-60',
          text_zh: '他们正用石头打的时候，司提反呼吁主说："求主耶稣接收我的灵魂！"又跪下大声喊着说："主啊，不要将这罪归于他们！"说了这话，就睡了。',
          text_en: 'And they stoned Stephen, calling upon God, and saying, Lord Jesus, receive my spirit. And he kneeled down, and cried with a loud voice, Lord, lay not this sin to their charge. And when he had said this, he fell asleep.',
        },
        reflection: {
          zh: '司提反是第一位殉道者。在死亡面前，他效法基督为逼迫他的人祷告。这种饶恕的力量超越了死亡的恐惧，彰显了基督生命的真实。',
          en: 'Stephen was the first martyr. Facing death, he followed Christ\'s example by praying for his persecutors. This power of forgiveness transcends the fear of death and reveals the reality of Christ\'s life within.',
        },
        question: {
          zh: '司提反在极端处境中仍能饶恕。你是否有一些还没有放下的怨恨需要交给主？',
          en: 'Stephen could forgive even in the most extreme circumstances. Is there resentment you haven\'t let go of that you need to surrender to the Lord?',
        },
        prayer: {
          zh: '主啊，求祢赐我像司提反一样饶恕的心。帮助我放下一切怨恨，甚至能为伤害我的人祝福。奉主耶稣的名祷告，阿们。',
          en: 'Lord, grant me a forgiving heart like Stephen\'s. Help me release all resentment and even bless those who hurt me. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '徒8:30-35',
          ref_en: 'Acts 8:30-35',
          text_zh: '腓利就跑到太监那里，听见他念先知以赛亚的书，便问他说："你所念的，你明白吗？"他说："没有人指教我，怎能明白呢？"于是请腓利上车，与他同坐。他所念的那段经，说："他像羊被牵到宰杀之地，又像羊羔在剪毛的人手下无声，他也是这样不开口。他卑微的时候，人不按公义审判他。谁能述说他的世代？因为他的生命从地上夺去。"太监对腓利说："请问，先知说这话是指着谁？是指着自己呢？是指着别人呢？"腓利就开口从这经上起，对他传讲耶稣。',
          text_en: 'And Philip ran thither to him, and heard him read the prophet Esaias, and said, Understandest thou what thou readest? And he said, How can I, except some man should guide me? And he desired Philip that he would come up and sit with him. The place of the scripture which he read was this, He was led as a sheep to the slaughter; and like a lamb dumb before his shearer, so opened he not his mouth: In his humiliation his judgment was taken away: and who shall declare his generation? for his life is taken from the earth. And the eunuch answered Philip, and said, I pray thee, of whom speaketh the prophet this? of himself, or of some other man? Then Philip opened his mouth, and began at the same scripture, and preached unto him Jesus.',
        },
        reflection: {
          zh: '腓利顺服圣灵的引导，抓住机会向渴慕真理的人传讲耶稣。福音的传播常常始于一个简单的问题和一颗愿意聆听的心。',
          en: 'Philip obeyed the Spirit\'s leading and seized the opportunity to share Jesus with someone hungry for truth. Gospel sharing often begins with a simple question and a willing heart to listen.',
        },
        question: {
          zh: '你身边是否有正在寻求真理的人？你愿意像腓利一样主动走近他们吗？',
          en: 'Is there someone around you who is seeking truth? Are you willing to approach them like Philip did?',
        },
        prayer: {
          zh: '主啊，让我对圣灵的引导敏感，愿意把握每一个传福音的机会。赐我智慧和勇气，从圣经出发向人讲明耶稣。奉主耶稣的名祷告，阿们。',
          en: 'Lord, make me sensitive to the Spirit\'s leading and willing to seize every opportunity to share the gospel. Give me wisdom and courage to explain Jesus from Scripture. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '徒9:3-6',
          ref_en: 'Acts 9:3-6',
          text_zh: '扫罗行路，将到大马士革，忽然从天上发光，四面照着他；他就仆倒在地，听见有声音对他说："扫罗！扫罗！你为什么逼迫我？"他说："主啊，你是谁？"主说："我就是你所逼迫的耶稣。起来！进城去，你所当做的事，必有人告诉你。"',
          text_en: 'And as he journeyed, he came near Damascus: and suddenly there shined round about him a light from heaven: And he fell to the earth, and heard a voice saying unto him, Saul, Saul, why persecutest thou me? And he said, Who art thou, Lord? And the Lord said, I am Jesus whom thou persecutest: it is hard for thee to kick against the pricks. And he trembling and astonished said, Lord, what wilt thou have me to do? And the Lord said unto him, Arise, and go into the city, and it shall be told thee what thou must do.',
        },
        reflection: {
          zh: '逼迫教会的扫罗被主的光照耀，生命彻底翻转。没有人坏到神不能拯救，也没有人顽固到神不能改变。大马士革之路提醒我们，神的恩典无限。',
          en: 'Saul, the persecutor of the church, was struck by the Lord\'s light and his life was completely transformed. No one is too bad for God to save, and no one too stubborn for God to change. The Damascus road reminds us that God\'s grace is limitless.',
        },
        question: {
          zh: '你是否曾经历过生命中的"大马士革之路"时刻？神如何改变了你？',
          en: 'Have you ever experienced a "Damascus road" moment in your life? How has God changed you?',
        },
        prayer: {
          zh: '主啊，感谢祢的光照亮我的生命，改变了我的方向。求祢也照亮那些还在黑暗中的人，让他们经历祢翻转生命的大能。奉主耶稣的名祷告，阿们。',
          en: 'Lord, thank You for shining Your light into my life and changing my direction. Shine Your light on those still in darkness and let them experience Your life-transforming power. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '徒10:34-35',
          ref_en: 'Acts 10:34-35',
          text_zh: '彼得就开口说："我真看出神是不偏待人的。原来各国中，那敬畏主、行义的人都为主所悦纳。"',
          text_en: 'Then Peter opened his mouth, and said, Of a truth I perceive that God is no respecter of persons: But in every nation he that feareth him, and worketh righteousness, is accepted with him.',
        },
        reflection: {
          zh: '神不偏待人——这是彼得在哥尼流家中领悟的重大真理。福音打破一切种族、文化和阶层的界限。我们不应该用人的标准来限定神的恩典。',
          en: 'God shows no partiality — this was the great truth Peter grasped in Cornelius\' house. The gospel breaks all barriers of race, culture, and class. We should not limit God\'s grace by human standards.',
        },
        question: {
          zh: '你心中是否对某些人群有偏见？神的不偏待如何挑战你的态度？',
          en: 'Do you hold prejudice toward certain groups of people? How does God\'s impartiality challenge your attitude?',
        },
        prayer: {
          zh: '主啊，求祢除去我心中的偏见和骄傲。帮助我像祢一样看待每一个人，不以外貌、种族或地位取人。奉主耶稣的名祷告，阿们。',
          en: 'Lord, remove prejudice and pride from my heart. Help me see every person as You do, without regard to appearance, race, or status. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '徒13:2-3',
          ref_en: 'Acts 13:2-3',
          text_zh: '他们事奉主、禁食的时候，圣灵说："要为我分派巴拿巴和扫罗，去做我召他们所做的工。"于是禁食祷告，按手在他们头上，就打发他们去了。',
          text_en: 'As they ministered to the Lord, and fasted, the Holy Ghost said, Separate me Barnabas and Saul for the work whereunto I have called them. And when they had fasted and prayed, and laid their hands on them, they sent them away.',
        },
        reflection: {
          zh: '宣教的差派始于敬拜和禁食。圣灵在教会同心寻求中启示祂的旨意。差传不是个人英雄主义，而是教会顺服圣灵的集体行动。',
          en: 'The missionary commission began with worship and fasting. The Holy Spirit revealed His will as the church sought Him together. Missions is not individual heroism but the church\'s collective obedience to the Spirit.',
        },
        question: {
          zh: '你的教会在差传事工上是否有同心祷告和寻求圣灵引导的文化？',
          en: 'Does your church have a culture of united prayer and seeking the Spirit\'s guidance in missions?',
        },
        prayer: {
          zh: '主啊，求祢在我们教会中兴起敬拜和禁食祷告的氛围。让圣灵自由运行，分派工人进入祢的禾场。奉主耶稣的名祷告，阿们。',
          en: 'Lord, raise up a spirit of worship and fasting prayer in our church. Let the Holy Spirit move freely to set apart workers for Your harvest field. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '徒16:30-31',
          ref_en: 'Acts 16:30-31',
          text_zh: '又领他们出来，说："二位先生，我当怎样行才可以得救？"他们说："当信主耶稣，你和你一家都必得救。"',
          text_en: 'And brought them out, and said, Sirs, what must I do to be saved? And they said, Believe on the Lord Jesus Christ, and thou shalt be saved, and thy house.',
        },
        reflection: {
          zh: '救恩的核心简单而有力：信主耶稣。这个应许不仅是个人的，也延伸到全家。禁卒一家信主的故事鼓励我们为全家的救恩祷告。',
          en: 'The core of salvation is simple yet powerful: believe in the Lord Jesus. This promise is not only personal but extends to the whole household. The jailer\'s family story encourages us to pray for the salvation of our entire family.',
        },
        question: {
          zh: '你的家人中还有谁尚未信主？你愿意持续为他们的救恩祷告吗？',
          en: 'Who in your family has not yet believed? Are you willing to persistently pray for their salvation?',
        },
        prayer: {
          zh: '主啊，我相信祢的应许——我和我一家都必得救。求祢拯救我家中每一个人，让全家都归向祢。奉主耶稣的名祷告，阿们。',
          en: 'Lord, I believe Your promise — I and my household will be saved. Save every member of my family and bring them all to You. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '徒17:24-28',
          ref_en: 'Acts 17:24-28',
          text_zh: '创造宇宙和其中万物的神，既是天地的主，就不住人手所造的殿，也不用人手服侍，好像缺少什么；自己倒将生命、气息、万物赐给万人。他从一本造出万族的人，住在全地上，并且预先定准他们的年限和所住的疆界，要叫他们寻求神，或者可以揣摩而得；其实他离我们各人不远，我们生活、动作、存留都在乎他。',
          text_en: 'God that made the world and all things therein, seeing that he is Lord of heaven and earth, dwelleth not in temples made with hands; Neither is worshipped with men’s hands, as though he needed any thing, seeing he giveth to all life, and breath, and all things; And hath made of one blood all nations of men for to dwell on all the face of the earth, and hath determined the times before appointed, and the bounds of their habitation; That they should seek the Lord, if haply they might feel after him, and find him, though he be not far from every one of us: For in him we live, and move, and have our being; as certain also of your own poets have said, For we are also his offspring.',
        },
        reflection: {
          zh: '保罗在雅典用智慧向外邦人传道。神不住在殿中，祂是赐生命气息的主。我们生活、动作、存留都在乎祂。认识这位神不需要走很远，因为祂离我们不远。',
          en: 'Paul wisely preached to the Gentiles in Athens. God does not dwell in temples; He is the Lord who gives life and breath. In Him we live and move and have our being. Knowing this God does not require a long journey, for He is not far from each of us.',
        },
        question: {
          zh: '"我们生活、动作、存留都在乎他"——这句话如何改变你对日常生活的看法？',
          en: '"In him we live and move and have our being" — how does this truth change your perspective on daily life?',
        },
        prayer: {
          zh: '主啊，祢是创造万物的神，我的生命气息都是祢所赐。感谢祢离我不远，在祢里面我生活、动作、存留。愿我每天都活在对祢的认知中。奉主耶稣的名祷告，阿们。',
          en: 'Lord, You are the God who created all things; my life and breath are gifts from You. Thank You for being near. In You I live and move and have my being. May I live each day aware of You. In Jesus\' name, amen.',
        },
      },
    ],
  },
  {
    id: 'wisdom',
    name_zh: '智慧与生活',
    name_en: 'Wisdom & Daily Life',
    icon: '💡',
    hymnKeywords: ['智慧', '箴言', 'wisdom', 'proverb'],
    devotionals: [
      {
        scripture: {
          ref_zh: '箴1:7',
          ref_en: 'Proverbs 1:7',
          text_zh: '敬畏耶和华是知识的开端；愚妄人藐视智慧和训诲。',
          text_en: 'The fear of the LORD is the beginning of knowledge: but fools despise wisdom and instruction.',
        },
        reflection: {
          zh: '一切真正的智慧始于敬畏神。世界追求知识却不认识赐知识的主，这是最大的愚昧。敬畏不是恐惧，而是对神的尊崇和顺服。',
          en: 'All true wisdom begins with fearing God. The world pursues knowledge but does not know the Lord who gives it — this is the greatest folly. Fear is not terror but reverence and submission to God.',
        },
        question: {
          zh: '在你追求知识和成长的过程中，敬畏神处于什么位置？',
          en: 'Where does the fear of God stand in your pursuit of knowledge and growth?',
        },
        prayer: {
          zh: '主啊，教导我以敬畏祢为一切的起点。不让世界的智慧取代祢的真理，而是在谦卑中寻求祢。奉主耶稣的名祷告，阿们。',
          en: 'Lord, teach me to make reverence for You the starting point of everything. Don\'t let worldly wisdom replace Your truth, but let me seek You in humility. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '箴3:5-6',
          ref_en: 'Proverbs 3:5-6',
          text_zh: '你要专心仰赖耶和华，不可倚靠自己的聪明，在你一切所行的事上都要认定他，他必指引你的路。',
          text_en: 'Trust in the LORD with all thine heart; and lean not unto thine own understanding. In all thy ways acknowledge him, and he shall direct thy paths.',
        },
        reflection: {
          zh: '专心仰赖神意味着放下对自己判断力的过度自信。在每一件事上认定神——不只是大事，也包括日常小事。当我们这样做时，神应许引导我们的道路。',
          en: 'Trusting God wholeheartedly means releasing overconfidence in our own judgment. Acknowledge God in everything — not just big decisions but daily details. When we do, God promises to direct our paths.',
        },
        question: {
          zh: '有哪些生活领域你还在倚靠自己的聪明，而没有认定神？',
          en: 'In what areas of life are you still leaning on your own understanding instead of acknowledging God?',
        },
        prayer: {
          zh: '主啊，我愿意专心仰赖祢，不倚靠自己的聪明。在我一切所行的事上，我认定祢。求祢指引我前面的路。奉主耶稣的名祷告，阿们。',
          en: 'Lord, I choose to trust You with all my heart and not lean on my own understanding. In all my ways I acknowledge You. Please direct my paths. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '箴3:13-15',
          ref_en: 'Proverbs 3:13-15',
          text_zh: '得智慧、得聪明的，这人便为有福。因为得智慧胜过得银子，其利益强如精金，比珍珠宝贵，你一切所喜爱的都不足与比较。',
          text_en: 'Happy is the man that findeth wisdom, and the man that getteth understanding. For the merchandise of it is better than the merchandise of silver, and the gain thereof than fine gold. She is more precious than rubies: and all the things thou canst desire are not to be compared unto her.',
        },
        reflection: {
          zh: '智慧比金银珍珠更宝贵。世人追逐物质财富，却忽略了真正使人有福的智慧。神的智慧带来永恒的利益，远超世间一切所喜爱的。',
          en: 'Wisdom is more precious than silver, gold, or jewels. The world chases material wealth but neglects the wisdom that truly blesses. God\'s wisdom yields eternal gain, surpassing everything the world desires.',
        },
        question: {
          zh: '你的日常生活中，追求智慧和追求物质财富哪个占比更大？',
          en: 'In your daily life, do you spend more effort pursuing wisdom or material wealth?',
        },
        prayer: {
          zh: '主啊，帮助我看重智慧胜过财富。让我每天渴慕祢的话语，在其中得着比精金更宝贵的智慧。奉主耶稣的名祷告，阿们。',
          en: 'Lord, help me value wisdom above wealth. Let me hunger daily for Your Word and find in it wisdom more precious than fine gold. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '箴4:23',
          ref_en: 'Proverbs 4:23',
          text_zh: '你要保守你心，胜过保守一切，因为一生的果效，是由心发出。',
          text_en: 'Keep thy heart with all diligence; for out of it are the issues of life.',
        },
        reflection: {
          zh: '心是生命的源头。我们花大量精力保护外在的东西——财产、形象、健康——却常常忽略内心。心中所存的决定了生活的方向和品质。',
          en: 'The heart is the wellspring of life. We spend great effort protecting external things — possessions, image, health — yet often neglect the heart. What the heart harbors determines the direction and quality of life.',
        },
        question: {
          zh: '你最近在用什么"喂养"你的心？那些内容是否帮助你更靠近神？',
          en: 'What have you been "feeding" your heart with recently? Is that content drawing you closer to God?',
        },
        prayer: {
          zh: '主啊，帮助我保守我的心。除去其中的杂质和污秽，用祢的话语和圣灵充满它，让一切美善的果效从中流出。奉主耶稣的名祷告，阿们。',
          en: 'Lord, help me guard my heart. Remove its impurities and fill it with Your Word and Spirit, so that all good fruit may flow from it. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '箴6:6-8',
          ref_en: 'Proverbs 6:6-8',
          text_zh: '懒惰人哪，你去察看蚂蚁的动作，就可得智慧。蚂蚁没有元帅，没有官长，没有君王，尚且在夏天预备食物，在收割时聚敛粮食。',
          text_en: 'Go to the ant, thou sluggard; consider her ways, and be wise: Which having no guide, overseer, or ruler, Provideth her meat in the summer, and gathereth her food in the harvest.',
        },
        reflection: {
          zh: '蚂蚁不需要别人监督就勤劳工作，为未来做准备。殷勤和自律是智慧的标志。我们不应该等到危机来临才开始行动，而要在平安时就做好预备。',
          en: 'Ants work diligently without anyone supervising them, preparing for the future. Diligence and self-discipline are marks of wisdom. We should not wait for a crisis to act but prepare during times of peace.',
        },
        question: {
          zh: '你在属灵生命和日常生活中，是否有像蚂蚁一样殷勤预备的习惯？',
          en: 'Do you have habits of diligent preparation in your spiritual life and daily routine, like the ant?',
        },
        prayer: {
          zh: '主啊，除去我的懒惰和拖延。赐我像蚂蚁一样殷勤的心，在每一天忠心做好祢所托付的事，为未来做好预备。奉主耶稣的名祷告，阿们。',
          en: 'Lord, remove laziness and procrastination from me. Give me diligence like the ant, faithfully completing what You entrust to me each day and preparing for the future. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '箴18:21',
          ref_en: 'Proverbs 18:21',
          text_zh: '生死在舌头的权下，喜爱它的，必吃它所结的果子。',
          text_en: 'Death and life are in the power of the tongue: and they that love it shall eat the fruit thereof.',
        },
        reflection: {
          zh: '言语拥有巨大的力量——可以带来生命，也可以带来死亡。一句鼓励的话能改变人的一天，一句恶言也能摧毁一段关系。我们要为自己所说的每一句话负责。',
          en: 'Words hold tremendous power — they can bring life or death. A word of encouragement can change someone\'s day; a harsh word can destroy a relationship. We are responsible for every word we speak.',
        },
        question: {
          zh: '回想今天你说过的话，哪些带来了生命？哪些可能带来了伤害？',
          en: 'Looking back at what you said today, which words brought life? Which may have caused harm?',
        },
        prayer: {
          zh: '主啊，掌管我的口舌。让我的言语成为生命和祝福的泉源，而不是伤害和死亡的工具。奉主耶稣的名祷告，阿们。',
          en: 'Lord, take control of my tongue. Let my words be a source of life and blessing, not a tool of harm and death. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '箴15:1',
          ref_en: 'Proverbs 15:1',
          text_zh: '回答柔和，使怒消退；言语暴戾，触动怒气。',
          text_en: 'A soft answer turneth away wrath: but grievous words stir up anger.',
        },
        reflection: {
          zh: '在冲突中，柔和的回应能化解怒气，而暴戾的言语只会火上浇油。智慧不在于赢得争论，而在于化解矛盾、建立和平。',
          en: 'In conflict, a gentle response defuses anger, while harsh words only add fuel to the fire. Wisdom is not about winning arguments but about resolving conflicts and building peace.',
        },
        question: {
          zh: '当别人激怒你时，你通常的第一反应是柔和还是暴戾？如何改变？',
          en: 'When someone provokes you, is your first response typically gentle or harsh? How can you change?',
        },
        prayer: {
          zh: '主啊，在冲突来临时赐我柔和的心和智慧的言语。帮助我不以怒气回应怒气，而是用温柔化解矛盾。奉主耶稣的名祷告，阿们。',
          en: 'Lord, when conflict comes, give me a gentle heart and wise words. Help me not respond to anger with anger but to resolve conflicts with gentleness. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '箴16:9',
          ref_en: 'Proverbs 16:9',
          text_zh: '人心筹算自己的道路，惟耶和华指引他的脚步。',
          text_en: 'A man’s heart deviseth his way: but the LORD directeth his steps.',
        },
        reflection: {
          zh: '计划是好的，但最终掌管方向的是神。我们可以筹算，但要把结果交托给主。这不是叫我们不计划，而是在计划中保持对神的敞开和顺服。',
          en: 'Planning is good, but God ultimately directs our course. We can plan, but we must entrust the results to the Lord. This doesn\'t mean we stop planning, but that we remain open and submitted to God within our plans.',
        },
        question: {
          zh: '你最近的人生计划中，是否有为神的引导留出空间？',
          en: 'In your recent life plans, have you left room for God\'s guidance?',
        },
        prayer: {
          zh: '主啊，我把我的计划和道路都交在祢手中。求祢指引我的脚步，让我走在祢为我预备的路上。奉主耶稣的名祷告，阿们。',
          en: 'Lord, I place my plans and paths in Your hands. Direct my steps and lead me on the path You have prepared for me. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '箴22:1',
          ref_en: 'Proverbs 22:1',
          text_zh: '美名胜过大财；恩宠强如金银。',
          text_en: 'A GOOD name is rather to be chosen than great riches, and loving favour rather than silver and gold.',
        },
        reflection: {
          zh: '在追求成功的时代，品格比财富更重要。美名是长年累月忠心正直的结果，不是一朝一夕能建立的，却可能因一时的过错而毁于一旦。',
          en: 'In an age obsessed with success, character matters more than wealth. A good name is the fruit of years of faithfulness and integrity — it cannot be built overnight but can be destroyed by a single misstep.',
        },
        question: {
          zh: '如果让你在财富和好名声之间选择，你会选哪个？你的生活方式反映了什么？',
          en: 'If you had to choose between wealth and a good reputation, which would you pick? What does your lifestyle reflect?',
        },
        prayer: {
          zh: '主啊，帮助我看重品格和美名胜过财富。让我在小事上忠心，在人前人后都活出正直。奉主耶稣的名祷告，阿们。',
          en: 'Lord, help me value character and a good name above riches. Let me be faithful in small things and live with integrity both publicly and privately. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '箴22:6',
          ref_en: 'Proverbs 22:6',
          text_zh: '教养孩童，使他走当行的道，就是到老他也不偏离。',
          text_en: 'Train up a child in the way he should go: and when he is old, he will not depart from it.',
        },
        reflection: {
          zh: '教养孩童是一项长期投资。在孩子年幼时建立的信仰根基，会影响他们一生。父母是孩子最重要的属灵导师，家庭是最早的教会。',
          en: 'Training children is a long-term investment. The foundation of faith built in childhood will influence their entire lives. Parents are a child\'s most important spiritual mentors, and the family is the earliest church.',
        },
        question: {
          zh: '你在培养下一代的信仰方面做了哪些努力？还有哪些可以改善的地方？',
          en: 'What efforts have you made in nurturing the next generation\'s faith? Where is there room for improvement?',
        },
        prayer: {
          zh: '主啊，赐我智慧来教养儿女走当行的道。让信仰的种子在他们心中深深扎根，一生都不偏离祢。奉主耶稣的名祷告，阿们。',
          en: 'Lord, give me wisdom to train children in the way they should go. Let the seeds of faith take deep root in their hearts so they never depart from You. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '箴27:17',
          ref_en: 'Proverbs 27:17',
          text_zh: '铁磨铁，磨出刃来；朋友相感，也是如此。',
          text_en: 'Iron sharpeneth iron; so a man sharpeneth the countenance of his friend.',
        },
        reflection: {
          zh: '好的友谊像铁磨铁一样，虽然过程中有摩擦，但结果是彼此更加锋利。我们需要能够坦诚相待、互相激励成长的属灵伙伴。',
          en: 'Good friendship is like iron sharpening iron — the process involves friction, but the result is mutual sharpening. We need spiritual companions who can be honest with us and encourage mutual growth.',
        },
        question: {
          zh: '你生命中有没有一位"铁磨铁"的属灵伙伴？如果没有，你愿意寻找吗？',
          en: 'Do you have an "iron sharpening iron" spiritual partner in your life? If not, are you willing to seek one?',
        },
        prayer: {
          zh: '主啊，感谢祢赐下属灵同伴。帮助我在友谊中既能给予也能接受建设性的磨炼，让我们彼此成长，越来越像基督。奉主耶稣的名祷告，阿们。',
          en: 'Lord, thank You for spiritual companions. Help me both give and receive constructive sharpening in friendship, so we may grow together and become more like Christ. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '箴28:13',
          ref_en: 'Proverbs 28:13',
          text_zh: '遮掩自己罪过的，必不亨通；承认离弃罪过的，必蒙怜恤。',
          text_en: 'He that covereth his sins shall not prosper: but whoso confesseth and forsaketh them shall have mercy.',
        },
        reflection: {
          zh: '隐藏罪不会让它消失，只会让它在暗处发酵。真正的自由来自坦诚的认罪和彻底的离弃。神的怜悯等候每一个愿意悔改的人。',
          en: 'Hiding sin does not make it disappear; it only festers in the dark. True freedom comes from honest confession and complete forsaking. God\'s mercy awaits everyone willing to repent.',
        },
        question: {
          zh: '有没有什么罪或软弱是你一直在隐藏的？你愿意今天就向神坦诚吗？',
          en: 'Is there a sin or weakness you have been hiding? Are you willing to be honest with God today?',
        },
        prayer: {
          zh: '主啊，我不再遮掩自己的罪过。我向祢坦白承认，并求祢帮助我彻底离弃。感谢祢的怜悯和赦免。奉主耶稣的名祷告，阿们。',
          en: 'Lord, I will no longer conceal my transgressions. I confess them to You and ask for help to forsake them completely. Thank You for Your mercy and forgiveness. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '雅1:5',
          ref_en: 'James 1:5',
          text_zh: '你们中间若有缺少智慧的，应当求那厚赐与众人、也不斥责人的神，主就必赐给他。',
          text_en: 'If any of you lack wisdom, let him ask of God, that giveth to all men liberally, and upbraideth not; and it shall be given him.',
        },
        reflection: {
          zh: '缺乏智慧不是羞耻，不求智慧才是。神乐意厚赐智慧，而且不会因我们的无知而斥责我们。只要凭信心求，祂就必赐下。',
          en: 'Lacking wisdom is no shame; failing to ask for it is. God delights in giving wisdom generously and will not rebuke us for our ignorance. If we ask in faith, He will give it.',
        },
        question: {
          zh: '你最近在什么事情上需要从神而来的智慧？你有向祂求吗？',
          en: 'What situation in your life right now requires wisdom from God? Have you asked Him for it?',
        },
        prayer: {
          zh: '主啊，我承认自己缺乏智慧。我凭信心来到祢面前求。感谢祢应许厚赐智慧，也不斥责我。求祢赐我面对每一天所需的智慧。奉主耶稣的名祷告，阿们。',
          en: 'Lord, I admit I lack wisdom. I come to You in faith and ask. Thank You for promising to give generously without reproach. Grant me the wisdom I need for each day. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '雅3:17',
          ref_en: 'James 3:17',
          text_zh: '惟独从上头来的智慧，先是清洁，后是和平、温良、柔顺，满有怜悯、多结善果，没有偏见，没有假冒。',
          text_en: 'But the wisdom that is from above is first pure, then peaceable, gentle, and easy to be intreated, full of mercy and good fruits, without partiality, and without hypocrisy.',
        },
        reflection: {
          zh: '从神来的智慧有明确的特征：清洁、和平、温良、柔顺、满有怜悯。这与世俗的聪明截然不同。我们可以用这些标准来检验自己的决定是否出于神的智慧。',
          en: 'Wisdom from God has clear characteristics: purity, peace, gentleness, reasonableness, mercy. This is vastly different from worldly cleverness. We can use these markers to test whether our decisions come from God\'s wisdom.',
        },
        question: {
          zh: '用雅各书3:17的标准来衡量，你最近的一个重要决定是出于属天的智慧还是属世的聪明？',
          en: 'Measured by James 3:17, was a recent important decision of yours guided by heavenly wisdom or worldly cleverness?',
        },
        prayer: {
          zh: '主啊，求祢赐我从上头来的智慧。让我的生活充满清洁、和平、温良和怜悯，结出丰盛的善果。奉主耶稣的名祷告，阿们。',
          en: 'Lord, grant me wisdom from above. Let my life be filled with purity, peace, gentleness, and mercy, bearing abundant good fruit. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '箴31:30',
          ref_en: 'Proverbs 31:30',
          text_zh: '艳丽是虚假的，美容是虚浮的；惟敬畏耶和华的妇女必得称赞。',
          text_en: 'Favour is deceitful, and beauty is vain: but a woman that feareth the LORD, she shall be praised.',
        },
        reflection: {
          zh: '外表的美丽会随时间褪去，但敬畏神的生命会越来越荣美。这个原则不只适用于女性，也适用于每一个人。真正值得称赞的不是外在条件，而是内在的敬虔。',
          en: 'Outward beauty fades with time, but a life that fears God grows ever more beautiful. This principle applies not only to women but to everyone. What truly deserves praise is not external appearance but inner godliness.',
        },
        question: {
          zh: '你更看重外在的吸引力还是内在的敬虔？你对美的标准是否合乎圣经？',
          en: 'Do you value outward attractiveness or inner godliness more? Are your standards of beauty aligned with Scripture?',
        },
        prayer: {
          zh: '主啊，帮助我不被世界虚浮的标准所迷惑。让我看重敬畏祢的生命，追求内在的美善，活出真正值得称赞的品格。奉主耶稣的名祷告，阿们。',
          en: 'Lord, help me not be deceived by the world\'s vain standards. Let me value a God-fearing life, pursue inner goodness, and live out a character truly worthy of praise. In Jesus\' name, amen.',
        },
      },
    ],
  },
];
