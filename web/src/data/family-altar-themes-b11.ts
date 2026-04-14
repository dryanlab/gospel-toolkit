interface Scripture { ref_zh: string; ref_en: string; text_zh: string; text_en: string; }
interface BilingualText { zh: string; en: string; }
interface DevotionalUnit { scripture: Scripture; reflection: BilingualText; question: BilingualText; prayer: BilingualText; }
interface AltarTheme { id: string; name_zh: string; name_en: string; icon: string; devotionals: DevotionalUnit[]; hymnKeywords: string[]; }

export const themesB11: AltarTheme[] = [
  {
    id: `exodus`,
    name_zh: `出埃及记`,
    name_en: `Exodus Journey`,
    icon: `🌊`,
    hymnKeywords: ['拯救', '自由', 'deliver', 'freedom'],
    devotionals: [
      {
        scripture: {
          ref_zh: `出埃及记 2:23-25`,
          ref_en: `Exodus 2:23-25`,
          text_zh: `过了多年，埃及王死了。以色列人因做苦工，就叹息哀求，他们的哀声达于神。神听见他们的哀声，就记念他与亚伯拉罕、以撒、雅各所立的约。神看顾以色列人，也知道他们的苦情。`,
          text_en: `During those many days the king of Egypt died, and the people of Israel groaned because of their slavery and cried out for help. Their cry for rescue from slavery came up to God. And God heard their groaning, and God remembered his covenant with Abraham, with Isaac, and with Jacob. God saw the people of Israel, and God knew.`,
        },
        reflection: {
          zh: `神并非不知道我们的痛苦。当以色列人在苦难中呼求时，神听见、记念、看顾、知道。这四个动词表明神全然关注祂子民的苦难。在我们最深的痛苦中，神从未离开。`,
          en: `God is never unaware of our suffering. When Israel cried out, God heard, remembered, saw, and knew. These four verbs show God's total attentiveness to His people's pain. In our deepest anguish, God has never left.`,
        },
        question: {
          zh: `你是否正经历一段漫长的等待？你相信神听见了你的呼求吗？`,
          en: `Are you going through a long season of waiting? Do you believe God hears your cry?`,
        },
        prayer: {
          zh: `主啊，感谢你从不忘记你的子民。即使在漫长的等待中，你仍然听见我们的呼求。求你帮助我信靠你的时间表。奉主耶稣的名祷告，阿们。`,
          en: `Lord, thank You for never forgetting Your people. Even in long seasons of waiting, You still hear our cries. Help me trust Your timing. In Jesus' name, amen.`,
        },
      },
      {
        scripture: {
          ref_zh: `出埃及记 3:5-6`,
          ref_en: `Exodus 3:5-6`,
          text_zh: `神说："不要近前来，当把你脚上的鞋脱下来，因为你所站之地是圣地。"又说："我是你父亲的神，是亚伯拉罕的神，以撒的神，雅各的神。"摩西蒙上脸，因为怕看神。`,
          text_en: `Then he said, "Do not come near; take your sandals off your feet, for the place on which you are standing is holy ground." And he said, "I am the God of your father, the God of Abraham, the God of Isaac, and the God of Jacob." And Moses hid his face, for he was afraid to look at God.`,
        },
        reflection: {
          zh: `圣洁的神主动向摩西显现。脱鞋象征敬畏与顺服。神不仅是宇宙的主宰，更是我们列祖的神：祂是与人立约、进入关系的神。敬畏是亲近神的起点。`,
          en: `The holy God took the initiative to reveal Himself to Moses. Removing sandals symbolizes reverence and submission. God is not only the sovereign of the universe but the God of our fathers, a covenant-making, relationship-entering God. Reverence is the starting point of drawing near.`,
        },
        question: {
          zh: `你在日常生活中如何保持对神的敬畏？`,
          en: `How do you maintain reverence for God in your daily life?`,
        },
        prayer: {
          zh: `圣洁的神，求你帮助我在你面前存敬畏的心。让我知道每一次与你相遇的时刻都是神圣的。奉主耶稣的名祷告，阿们。`,
          en: `Holy God, help me hold reverence before You. Let me recognize that every encounter with You is sacred. In Jesus' name, amen.`,
        },
      },
      {
        scripture: {
          ref_zh: `出埃及记 3:14`,
          ref_en: `Exodus 3:14`,
          text_zh: `神对摩西说："我是自有永有的。"又说："你要对以色列人这样说：'那自有的打发我到你们这里来。'"`,
          text_en: `God said to Moses, "I AM WHO I AM." And he said, "Say this to the people of Israel: 'I AM has sent me to you.'"`,
        },
        reflection: {
          zh: `"我是自有永有的"，这是神最根本的自我启示。祂不依赖任何受造物而存在，祂是一切存在的根源。当我们感到无力时，这位"自有永有"的神是我们最坚固的磐石。`,
          en: `"I AM WHO I AM", this is God's most fundamental self-revelation. He depends on nothing created for His existence; He is the source of all being. When we feel powerless, this self-existent God is our firmest rock.`,
        },
        question: {
          zh: `神的"自有永有"对你面对不确定的未来有什么安慰？`,
          en: `How does God's self-existence comfort you when facing an uncertain future?`,
        },
        prayer: {
          zh: `永恒的神，你是昔在、今在、以后永在的主。当我面对不确定的明天，求你提醒我，你永远不改变。奉主耶稣的名祷告，阿们。`,
          en: `Eternal God, You are the One who was, who is, and who is to come. When I face uncertain tomorrows, remind me that You never change. In Jesus' name, amen.`,
        },
      },
      {
        scripture: {
          ref_zh: `出埃及记 5:1`,
          ref_en: `Exodus 5:1`,
          text_zh: `后来摩西、亚伦去对法老说："耶和华以色列的神这样说：'容我的百姓去，在旷野向我守节。'"`,
          text_en: `Afterward Moses and Aaron went and said to Pharaoh, "Thus says the LORD, the God of Israel, 'Let my people go, that they may hold a feast to me in the wilderness.'"`,
        },
        reflection: {
          zh: `神差遣摩西向世上最大的权势发出挑战。"容我的百姓去"不只是政治解放的宣言，更是属灵释放的呼声。神要祂的子民脱离奴役，自由地敬拜祂。今天，神同样呼召我们从罪的捆绑中得释放。`,
          en: `God sent Moses to challenge the greatest power on earth. "Let my people go" is not merely a political declaration but a cry for spiritual liberation. God wants His people free from slavery to worship Him. Today, God likewise calls us to be freed from the bondage of sin.`,
        },
        question: {
          zh: `在你的生命中，有什么"法老"拦阻你自由地敬拜神？`,
          en: `What "Pharaoh" in your life hinders you from worshiping God freely?`,
        },
        prayer: {
          zh: `全能的神，你是释放被掳之人的神。求你打破一切在我生命中捆绑我的锁链，让我可以自由地来到你面前敬拜你。奉主耶稣的名祷告，阿们。`,
          en: `Almighty God, You are the one who sets captives free. Break every chain that binds me so I may freely come before You in worship. In Jesus' name, amen.`,
        },
      },
      {
        scripture: {
          ref_zh: `出埃及记 12:13`,
          ref_en: `Exodus 12:13`,
          text_zh: `这血要在你们所住的房屋上作记号，我一见这血，就越过你们去。我击杀埃及地头生的时候，灾殃必不临到你们身上灭你们。`,
          text_en: `The blood shall be a sign for you, on the houses where you are. And when I see the blood, I will pass over you, and no plague will befall you to destroy you, when I strike the land of Egypt.`,
        },
        reflection: {
          zh: `逾越节的羔羊预表了基督。不是以色列人的好行为，而是羔羊的血使他们得救。同样，我们的得救不在于自己的义，乃在于基督宝血的遮盖。这是恩典最清晰的图画。`,
          en: `The Passover lamb foreshadowed Christ. It was not Israel's good behavior but the lamb's blood that saved them. Likewise, our salvation rests not on our own righteousness but on the covering of Christ's precious blood. This is grace in its clearest picture.`,
        },
        question: {
          zh: `你是否真正安息在基督宝血的遮盖之下，而非依靠自己的行为？`,
          en: `Are you truly resting under the covering of Christ's blood rather than relying on your own works?`,
        },
        prayer: {
          zh: `感谢主耶稣，你就是神的羔羊，为我们的罪被杀。感谢你的宝血遮盖了我们一切的过犯。我要安息在你的恩典中。奉主耶稣的名祷告，阿们。`,
          en: `Thank You, Lord Jesus, the Lamb of God, slain for our sins. Thank You that Your precious blood covers all our transgressions. I rest in Your grace. In Jesus' name, amen.`,
        },
      },
      {
        scripture: {
          ref_zh: `出埃及记 14:21-22`,
          ref_en: `Exodus 14:21-22`,
          text_zh: `摩西向海伸杖，耶和华便用大东风，使海水一夜退去，水便分开，海就成了干地。以色列人下海中走干地，水在他们的左右作了墙垣。`,
          text_en: `Then Moses stretched out his hand over the sea, and the LORD drove the sea back by a strong east wind all night and made the sea dry land, and the waters were divided. And the people of Israel went into the midst of the sea on dry ground, the waters being a wall to them on their right hand and on their left.`,
        },
        reflection: {
          zh: `红海分开是信心最伟大的一刻。前有大海，后有追兵，看似绝路，神却开出一条从未有过的路。神专门在不可能中彰显祂的大能。你眼前的"红海"，正是神要显大能的地方。`,
          en: `The parting of the Red Sea is one of faith's greatest moments. The sea ahead, the army behind, a dead end, yet God opened a way that never existed. God specializes in the impossible. Your "Red Sea" is precisely where God wants to display His power.`,
        },
        question: {
          zh: `你目前面对什么看似不可能的困境？你能信靠神为你开路吗？`,
          en: `What seemingly impossible situation do you face? Can you trust God to make a way?`,
        },
        prayer: {
          zh: `主啊，你是分开红海的神，没有任何困难能拦阻你的计划。求你在我面前开路，让我经历你超自然的大能。奉主耶稣的名祷告，阿们。`,
          en: `Lord, You are the God who parted the Red Sea; no difficulty can hinder Your plans. Make a way before me and let me experience Your supernatural power. In Jesus' name, amen.`,
        },
      },
      {
        scripture: {
          ref_zh: `出埃及记 15:1-2`,
          ref_en: `Exodus 15:1-2`,
          text_zh: `那时，摩西和以色列人向耶和华唱歌说："我要向耶和华歌唱，因他大大战胜，将马和骑马的投在海中。耶和华是我的力量、我的诗歌，也成了我的拯救。这是我的神，我要赞美他；是我父亲的神，我要尊崇他。"`,
          text_en: `Then Moses and the people of Israel sang this song to the LORD, saying, "I will sing to the LORD, for he has triumphed gloriously; the horse and his rider he has thrown into the sea. The LORD is my strength and my song, and he has become my salvation; this is my God, and I will praise him, my father's God, and I will exalt him."`,
        },
        reflection: {
          zh: `经历拯救之后，自然的回应就是敬拜。摩西之歌不是出于义务，而是源于对神大能作为的感恩。当我们回顾神在生命中的作为，赞美就会从心底涌流。`,
          en: `After experiencing deliverance, the natural response is worship. The song of Moses was not from obligation but from gratitude for God's mighty acts. When we look back at God's work in our lives, praise will overflow from our hearts.`,
        },
        question: {
          zh: `回顾你的人生，有哪些神拯救你的经历值得你献上感恩的歌？`,
          en: `Looking back on your life, what experiences of God's deliverance deserve a song of thanksgiving?`,
        },
        prayer: {
          zh: `主啊，你是我的力量、我的诗歌、我的拯救。我要向你歌唱，因你为我行了大事。求你让赞美常在我口中。奉主耶稣的名祷告，阿们。`,
          en: `Lord, You are my strength, my song, and my salvation. I will sing to You, for You have done great things for me. Let praise always be on my lips. In Jesus' name, amen.`,
        },
      },
      {
        scripture: {
          ref_zh: `出埃及记 16:4`,
          ref_en: `Exodus 16:4`,
          text_zh: `耶和华对摩西说："我要将粮食从天降给你们。百姓可以出去，每天收每天的份，我好试验他们遵不遵我的法度。"`,
          text_en: `Then the LORD said to Moses, "Behold, I am about to rain bread from heaven for you, and the people shall go out and gather a day's portion every day, that I may test them, whether they will walk in my law or not."`,
        },
        reflection: {
          zh: `吗哪是每日的供应，不多不少，刚好够用。神要以色列人学习每天依靠祂。这正是主祷文"我们日用的饮食，今日赐给我们"的旧约根基。信靠神的供应，是每天的功课。`,
          en: `Manna was daily provision, not too much, not too little, just enough. God wanted Israel to learn daily dependence on Him. This is the Old Testament foundation for "Give us this day our daily bread." Trusting God's provision is a daily lesson.`,
        },
        question: {
          zh: `你是否愿意每天依靠神的供应，而非囤积自己的安全感？`,
          en: `Are you willing to depend on God's provision daily rather than hoarding your own sense of security?`,
        },
        prayer: {
          zh: `供应的神，感谢你每日的恩典够我用。帮助我不为明天忧虑，而是每天信靠你的信实供应。奉主耶稣的名祷告，阿们。`,
          en: `God of provision, thank You that Your daily grace is sufficient for me. Help me not worry about tomorrow but trust Your faithful provision each day. In Jesus' name, amen.`,
        },
      },
      {
        scripture: {
          ref_zh: `出埃及记 17:6`,
          ref_en: `Exodus 17:6`,
          text_zh: `我必在何烈的磐石那里站在你面前，你要击打磐石，从磐石里必有水流出来，使百姓可以喝。摩西就在以色列的长老眼前这样行了。`,
          text_en: `"Behold, I will stand before you there on the rock at Horeb, and you shall strike the rock, and water shall come out of it, and the people will drink." And Moses did so, in the sight of the elders of Israel.`,
        },
        reflection: {
          zh: `磐石被击打，活水涌流。保罗告诉我们"那磐石就是基督"（林前10:4）。基督在十架上被击打，生命的活水便从祂流出，使一切信靠祂的人得着永生。`,
          en: `The rock was struck and living water gushed forth. Paul tells us "the Rock was Christ" (1 Cor 10:4). Christ was struck on the cross, and living water flowed from Him, giving eternal life to all who trust in Him.`,
        },
        question: {
          zh: `你是否每天从基督这磐石中汲取生命的活水？`,
          en: `Are you drawing living water from Christ the Rock every day?`,
        },
        prayer: {
          zh: `主耶稣，你是被击打的磐石，从你流出生命的活水。求你让我每天来到你面前，饮于你的恩典，永远不再干渴。奉主耶稣的名祷告，阿们。`,
          en: `Lord Jesus, You are the smitten Rock from whom living water flows. Let me come to You daily, drink of Your grace, and never thirst again. In Jesus' name, amen.`,
        },
      },
      {
        scripture: {
          ref_zh: `出埃及记 20:1-3`,
          ref_en: `Exodus 20:1-3`,
          text_zh: `神吩咐这一切的话说："我是耶和华你的神，曾将你从埃及地为奴之家领出来。除了我以外，你不可有别的神。"`,
          text_en: `And God spoke all these words, saying, "I am the LORD your God, who brought you out of the land of Egypt, out of the house of slavery. You shall have no other gods before me."`,
        },
        reflection: {
          zh: `十诫的根基是恩典："我曾将你领出来"。神先拯救，后颁布律法。顺服不是得救的条件，而是对恩典的回应。因为神先爱了我们，我们才甘心将祂放在生命的首位。`,
          en: `The foundation of the Ten Commandments is grace: "who brought you out." God saved first, then gave the law. Obedience is not a condition for salvation but a response to grace. Because God loved us first, we willingly place Him first in our lives.`,
        },
        question: {
          zh: `在你的生活中，有没有什么人或事物取代了神的首位？`,
          en: `Is there anything or anyone in your life that has taken God's first place?`,
        },
        prayer: {
          zh: `主啊，你是拯救我的神，配得一切尊荣。求你光照我，除去生命中一切的偶像，让你永远居首位。奉主耶稣的名祷告，阿们。`,
          en: `Lord, You are the God who saved me and are worthy of all honor. Shine Your light on me, remove every idol, and reign supreme in my life forever. In Jesus' name, amen.`,
        },
      },
      {
        scripture: {
          ref_zh: `出埃及记 20:3-5`,
          ref_en: `Exodus 20:3-5`,
          text_zh: `除了我以外，你不可有别的神。不可为自己雕刻偶像，也不可作什么形像，仿佛上天、下地和地底下、水中的百物。不可跪拜那些像，也不可侍奉它，因为我耶和华你的神，是忌邪的神。`,
          text_en: `"You shall have no other gods before me. You shall not make for yourself a carved image, or any likeness of anything that is in heaven above, or that is in the earth beneath, or that is in the water under the earth. You shall not bow down to them or serve them, for I the LORD your God am a jealous God."`,
        },
        reflection: {
          zh: `神是"忌邪的神"，这不是人性的嫉妒，而是圣洁之爱的热忱。正如丈夫对妻子的爱不容第三者介入，神对我们的爱是专一而火热的。任何取代神位置的事物，都是我们心中的偶像。`,
          en: `God is a "jealous God", not with petty envy but with the zeal of holy love. Just as a husband's love permits no rival, God's love for us is exclusive and fervent. Anything that displaces God is an idol of the heart.`,
        },
        question: {
          zh: `现代生活中有哪些隐性的偶像容易占据我们的心？`,
          en: `What hidden idols in modern life easily capture our hearts?`,
        },
        prayer: {
          zh: `忌邪的神，感谢你以火热的爱爱我。求你帮助我辨认生命中隐藏的偶像，单单敬拜你。奉主耶稣的名祷告，阿们。`,
          en: `Jealous God, thank You for loving me with fervent love. Help me identify hidden idols in my life and worship You alone. In Jesus' name, amen.`,
        },
      },
      {
        scripture: {
          ref_zh: `出埃及记 32:7-8`,
          ref_en: `Exodus 32:7-8`,
          text_zh: `耶和华吩咐摩西说："下去吧，因为你的百姓，就是你从埃及地领出来的，已经败坏了。他们快快偏离了我所吩咐的道，为自己铸了一只牛犊，向它下拜献祭，说：'以色列啊，这是领你出埃及地的神。'"`,
          text_en: `And the LORD said to Moses, "Go down, for your people, whom you brought up out of the land of Egypt, have corrupted themselves. They have turned aside quickly out of the way that I commanded them. They have made for themselves a golden calf and have worshiped it and sacrificed to it and said, 'These are your gods, O Israel, who brought you up out of the land of Egypt!'"`,
        },
        reflection: {
          zh: `以色列人"快快偏离"了神的道。人心是何等善变！刚经历了红海的神迹，转眼就铸造金牛犊。这提醒我们，属灵的警醒不是一时的，而是一生的功课。`,
          en: `Israel "turned aside quickly" from God's way. How fickle is the human heart! Fresh from the Red Sea miracle, they soon cast a golden calf. This reminds us that spiritual vigilance is not momentary but a lifelong discipline.`,
        },
        question: {
          zh: `你有没有在经历神恩典之后，很快又回到老路上？`,
          en: `Have you ever quickly returned to old ways after experiencing God's grace?`,
        },
        prayer: {
          zh: `主啊，求你保守我的心不偏离你。当我被试探要转向偶像时，求你的圣灵提醒我、拉住我。奉主耶稣的名祷告，阿们。`,
          en: `Lord, guard my heart from turning away from You. When I am tempted to turn to idols, let Your Holy Spirit remind me and hold me fast. In Jesus' name, amen.`,
        },
      },
      {
        scripture: {
          ref_zh: `出埃及记 33:18-19, 34:6`,
          ref_en: `Exodus 33:18-19, 34:6`,
          text_zh: `摩西说："求你显出你的荣耀给我看。"耶和华说："我要显我一切的恩慈，在你面前经过，宣告我的名。"耶和华在他面前宣告说："耶和华，耶和华，是有怜悯、有恩典的神，不轻易发怒，并有丰盛的慈爱和诚实。"`,
          text_en: `Moses said, "Please show me your glory." And he said, "I will make all my goodness pass before you and will proclaim before you my name 'The LORD.'" The LORD passed before him and proclaimed, "The LORD, the LORD, a God merciful and gracious, slow to anger, and abounding in steadfast love and faithfulness."`,
        },
        reflection: {
          zh: `当摩西求看神的荣耀时，神所启示的是祂的品格：怜悯、恩典、忍耐、慈爱、诚实。神最大的荣耀不在于祂的能力，而在于祂的恩慈。认识神的性情，是信仰最深的根基。`,
          en: `When Moses asked to see God's glory, God revealed His character, mercy, grace, patience, steadfast love, faithfulness. God's greatest glory is not His power but His goodness. Knowing God's nature is the deepest foundation of faith.`,
        },
        question: {
          zh: `在这些属性中，哪一个对你此刻最有意义？为什么？`,
          en: `Which of these attributes is most meaningful to you right now? Why?`,
        },
        prayer: {
          zh: `满有恩慈的神，感谢你向我显明你的性情。你是怜悯、恩典、慈爱的神。求你让我更深地认识你，一生活在你的荣耀中。奉主耶稣的名祷告，阿们。`,
          en: `Gracious God, thank You for revealing Your nature to me. You are merciful, gracious, and abounding in love. Let me know You more deeply and live in Your glory all my days. In Jesus' name, amen.`,
        },
      },
      {
        scripture: {
          ref_zh: `出埃及记 40:34`,
          ref_en: `Exodus 40:34`,
          text_zh: `当时，云彩遮盖会幕，耶和华的荣光就充满了帐幕。`,
          text_en: `Then the cloud covered the tent of meeting, and the glory of the LORD filled the tabernacle.`,
        },
        reflection: {
          zh: `当帐幕按照神的心意建造完成后，神的荣光便充满其中。神渴望与祂的百姓同住。今天，我们就是神的殿（林前6:19）。当我们按着神的旨意生活，祂的荣耀也会充满我们的生命。`,
          en: `When the tabernacle was completed according to God's design, His glory filled it. God longs to dwell with His people. Today, we are God's temple (1 Cor 6:19). When we live according to His will, His glory fills our lives too.`,
        },
        question: {
          zh: `你的生命是否成为神荣耀居住的殿？有什么需要清理的地方？`,
          en: `Is your life a temple where God's glory dwells? Is there anything that needs to be cleaned out?`,
        },
        prayer: {
          zh: `荣耀的主，求你的荣光充满我的生命，如同充满帐幕一样。洁净我，使我成为你合用的器皿。奉主耶稣的名祷告，阿们。`,
          en: `Glorious Lord, fill my life with Your glory as You filled the tabernacle. Cleanse me and make me a vessel fit for Your use. In Jesus' name, amen.`,
        },
      },
      {
        scripture: {
          ref_zh: `出埃及记 33:14`,
          ref_en: `Exodus 33:14`,
          text_zh: `耶和华说："我必亲自和你同去，使你得安息。"`,
          text_en: `And he said, "My presence will go with you, and I will give you rest."`,
        },
        reflection: {
          zh: `这是整本出埃及记中最温柔的应许之一。前方的旷野道路漫长而未知，但神应许祂亲自同行，并赐下安息。我们人生的旷野旅程也是如此，重要的不是道路的难易，而是谁与我们同行。`,
          en: `This is one of the tenderest promises in Exodus. The wilderness road ahead was long and unknown, but God promised His personal presence and rest. So it is with our life's wilderness journey, what matters is not how hard the road is, but who walks with us.`,
        },
        question: {
          zh: `你是否在忙碌和焦虑中忘记了神同在的应许？如何重新进入祂的安息？`,
          en: `Have you forgotten God's promise of presence amid busyness and anxiety? How can you re-enter His rest?`,
        },
        prayer: {
          zh: `亲爱的主，感谢你应许与我同行，赐我安息。无论前路如何，有你同在就够了。求你让我在你的同在中找到真正的平安。奉主耶稣的名祷告，阿们。`,
          en: `Dear Lord, thank You for promising to go with me and give me rest. No matter what lies ahead, Your presence is enough. Let me find true peace in Your presence. In Jesus' name, amen.`,
        },
      },
    ],
  },
  {
    id: `ephesians`,
    name_zh: `以弗所书`,
    name_en: `Ephesians`,
    icon: `📩`,
    hymnKeywords: ['恩典', '教会', 'grace', 'church'],
    devotionals: [
      {
        scripture: {
          ref_zh: `以弗所书 1:3`,
          ref_en: `Ephesians 1:3`,
          text_zh: `愿颂赞归与我们主耶稣基督的父神，他在基督里曾赐给我们天上各样属灵的福气。`,
          text_en: `Blessed be the God and Father of our Lord Jesus Christ, who has blessed us in Christ with every spiritual blessing in the heavenly places,`,
        },
        reflection: {
          zh: `"天上各样属灵的福气"已经赐给了我们，不是将来时，而是过去时。在基督里，我们已经拥有一切所需。我们不是乞丐在恳求，而是儿女在领受。`,
          en: `"Every spiritual blessing" has already been given to us, past tense, not future. In Christ, we already possess all we need. We are not beggars pleading but children receiving.`,
        },
        question: {
          zh: `你是否活在"已经蒙福"的确信中，还是总觉得自己缺乏？`,
          en: `Are you living in the assurance of being "already blessed," or do you always feel lacking?`,
        },
        prayer: {
          zh: `天父，感谢你在基督里已经赐给我天上各样属灵的福气。求你开我的眼睛，让我看见我在基督里何等丰富。奉主耶稣的名祷告，阿们。`,
          en: `Father, thank You for blessing me in Christ with every spiritual blessing. Open my eyes to see how rich I am in Christ. In Jesus' name, amen.`,
        },
      },
      {
        scripture: {
          ref_zh: `以弗所书 1:4-5`,
          ref_en: `Ephesians 1:4-5`,
          text_zh: `就如神从创立世界以前，在基督里拣选了我们，使我们在他面前成为圣洁，无有瑕疵。又因爱我们，就按着自己意旨所喜悦的，预定我们藉着耶稣基督得儿子的名分。`,
          text_en: `even as he chose us in him before the foundation of the world, that we should be holy and blameless before him. In love he predestined us for adoption to himself as sons through Jesus Christ, according to the purpose of his will,`,
        },
        reflection: {
          zh: `在创立世界以前，神已经拣选了你。这不是后来的补救计划，而是永恒的爱意。你不是偶然的存在，而是神在永恒中早已深爱的儿女。这样的爱，足以胜过一切自我怀疑。`,
          en: `Before the foundation of the world, God chose you. This is not a backup plan but an eternal love. You are not an accident but a child whom God loved from eternity. Such love is enough to overcome every self-doubt.`,
        },
        question: {
          zh: `知道自己是神在永恒中拣选的，这如何改变你看自己的眼光？`,
          en: `How does knowing you were chosen by God from eternity change how you see yourself?`,
        },
        prayer: {
          zh: `天父，感谢你在创世以前就拣选了我，又赐我儿女的名分。帮助我活出被拣选、被深爱之人的身份。奉主耶稣的名祷告，阿们。`,
          en: `Father, thank You for choosing me before creation and granting me adoption as Your child. Help me live out this identity of being chosen and deeply loved. In Jesus' name, amen.`,
        },
      },
      {
        scripture: {
          ref_zh: `以弗所书 1:13-14`,
          ref_en: `Ephesians 1:13-14`,
          text_zh: `你们既听见真理的道，就是那叫你们得救的福音，也信了基督，既然信他，就受了所应许的圣灵为印记。这圣灵是我们得基业的凭据，直等到神之民被赎，使他的荣耀得着称赞。`,
          text_en: `In him you also, when you heard the word of truth, the gospel of your salvation, and believed in him, were sealed with the promised Holy Spirit, who is the guarantee of our inheritance until we acquire possession of it, to the praise of his glory.`,
        },
        reflection: {
          zh: `圣灵是我们的"印记"和"凭据"。印记代表所有权，我们属于神；凭据代表保证，神必完成祂开始的工作。圣灵住在我们里面，就是神永不撤回之爱的明证。`,
          en: `The Holy Spirit is our "seal" and "guarantee." The seal represents ownership, we belong to God; the guarantee represents assurance, God will finish what He started. The Spirit dwelling in us is proof of God's irrevocable love.`,
        },
        question: {
          zh: `你是否意识到圣灵住在你里面，作为神对你永恒应许的保证？`,
          en: `Are you aware that the Holy Spirit dwells in you as the guarantee of God's eternal promise?`,
        },
        prayer: {
          zh: `天父，感谢你赐下圣灵作为我得救的印记和基业的凭据。求圣灵每天提醒我，我是属你的，你必完成你在我身上的工作。奉主耶稣的名祷告，阿们。`,
          en: `Father, thank You for giving the Holy Spirit as the seal of my salvation and the guarantee of my inheritance. Let the Spirit remind me daily that I am Yours and You will complete Your work in me. In Jesus' name, amen.`,
        },
      },
      {
        scripture: {
          ref_zh: `以弗所书 1:7-8`,
          ref_en: `Ephesians 1:7-8`,
          text_zh: `我们藉这爱子的血得蒙救赎，过犯得以赦免，乃是照他丰富的恩典。这恩典是神用诸般智慧聪明，充充足足赏给我们的。`,
          text_en: `In him we have redemption through his blood, the forgiveness of our trespasses, according to the riches of his grace, which he lavished upon us, in all wisdom and insight,`,
        },
        reflection: {
          zh: `神的恩典不是勉强给出的，而是"充充足足赏给我们的"。"充充足足"表明神的恩典是慷慨的、丰盛的、毫无保留的。你永远不需要担心神的恩典会耗尽。`,
          en: `God's grace is not reluctantly given but "lavished upon us." "Lavished" means God's grace is generous, abundant, and unreserved. You never need to worry that God's grace will run out.`,
        },
        question: {
          zh: `你是否常常觉得自己配不上神的恩典？这段经文如何回应你的感受？`,
          en: `Do you often feel unworthy of God's grace? How does this passage respond to that feeling?`,
        },
        prayer: {
          zh: `恩典的神，感谢你将丰富的恩典充充足足地赏给我。我不配，但你的爱不按我的配得，乃按你的丰富。我感恩领受。奉主耶稣的名祷告，阿们。`,
          en: `God of grace, thank You for lavishing Your rich grace upon me. I am unworthy, yet Your love is measured not by my merit but by Your riches. I receive with gratitude. In Jesus' name, amen.`,
        },
      },
      {
        scripture: {
          ref_zh: `以弗所书 2:1, 4-5`,
          ref_en: `Ephesians 2:1, 4-5`,
          text_zh: `你们死在过犯罪恶之中，他叫你们活过来。……然而神既有丰富的怜悯，因他爱我们的大爱，当我们死在过犯中的时候，便叫我们与基督一同活过来（你们得救是本乎恩）。`,
          text_en: `And you were dead in the trespasses and sins... But God, being rich in mercy, because of the great love with which he loved us, even when we were dead in our trespasses, made us alive together with Christ, by grace you have been saved, `,
        },
        reflection: {
          zh: `"然而神"，这是圣经中最美的转折。我们曾经死在罪中，毫无自救的能力。但神的怜悯和大爱介入了，使我们与基督一同活过来。恩典不是我们努力的结果，而是神主动的拯救。`,
          en: `"But God", these may be the most beautiful two words in Scripture. We were dead in sin, utterly unable to save ourselves. But God's mercy and great love intervened, making us alive with Christ. Grace is not the result of our effort but God's initiative.`,
        },
        question: {
          zh: `回想你信主前后的改变，"然而神"在你的故事中扮演了什么角色？`,
          en: `Reflecting on your life before and after faith, what role does "But God" play in your story?`,
        },
        prayer: {
          zh: `满有怜悯的神，感谢你在我还死在罪中的时候就爱了我，叫我与基督一同活过来。这全是恩典！我要一生感恩。奉主耶稣的名祷告，阿们。`,
          en: `Merciful God, thank You for loving me while I was still dead in sin and making me alive with Christ. It is all grace! I will be grateful all my life. In Jesus' name, amen.`,
        },
      },
      {
        scripture: {
          ref_zh: `以弗所书 2:8-9`,
          ref_en: `Ephesians 2:8-9`,
          text_zh: `你们得救是本乎恩，也因着信。这并不是出于自己，乃是神所赐的；也不是出于行为，免得有人自夸。`,
          text_en: `For by grace you have been saved through faith. And this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.`,
        },
        reflection: {
          zh: `恩典加信心，减去行为，等于救恩。这是基督教福音最核心的公式。救恩是礼物，不是工资，不是奖赏。当我们明白这一点，骄傲就无立足之地，感恩就充满心间。`,
          en: `Grace plus faith, minus works, equals salvation. This is the core equation of the Christian gospel. Salvation is a gift, not wages, not a reward. When we grasp this, pride has no foothold and gratitude fills the heart.`,
        },
        question: {
          zh: `你是否在不知不觉中试图用好行为来"赚取"神的恩典？`,
          en: `Are you unconsciously trying to "earn" God's grace through good works?`,
        },
        prayer: {
          zh: `恩典的主，感谢你白白赐下救恩。我放下一切自夸，单单感恩领受你的礼物。求你帮助我活在恩典中，而非律法的压力下。奉主耶稣的名祷告，阿们。`,
          en: `Lord of grace, thank You for the free gift of salvation. I lay down all boasting and simply receive Your gift with thanks. Help me live in grace, not under the pressure of law. In Jesus' name, amen.`,
        },
      },
      {
        scripture: {
          ref_zh: `以弗所书 2:10`,
          ref_en: `Ephesians 2:10`,
          text_zh: `我们原是他的工作，在基督耶稣里造成的，为要叫我们行善，就是神所预备叫我们行的。`,
          text_en: `For we are his workmanship, created in Christ Jesus for good works, which God prepared beforehand, that we should walk in them.`,
        },
        reflection: {
          zh: `我们不是靠行为得救，但我们是为行善而被造。善行不是救恩的原因，而是救恩的果实。神早已为你预备了专属的使命，你是祂的杰作，被造来完成独特的美好计划。`,
          en: `We are not saved by works, but we are created for good works. Good works are not the cause of salvation but its fruit. God has already prepared a unique mission for you, you are His masterpiece, created to fulfill a beautiful plan.`,
        },
        question: {
          zh: `你认为神为你预备了什么样的善工？你正在行走其中吗？`,
          en: `What good works do you think God has prepared for you? Are you walking in them?`,
        },
        prayer: {
          zh: `创造主，感谢你说我是你的工作、你的杰作。求你引导我进入你为我预备的善工，结出恩典的果子。奉主耶稣的名祷告，阿们。`,
          en: `Creator, thank You for calling me Your workmanship, Your masterpiece. Guide me into the good works You prepared for me, bearing fruit of grace. In Jesus' name, amen.`,
        },
      },
      {
        scripture: {
          ref_zh: `以弗所书 2:13`,
          ref_en: `Ephesians 2:13`,
          text_zh: `你们从前远离神的人，如今却在基督耶稣里，靠着他的血，已经得亲近了。`,
          text_en: `But now in Christ Jesus you who once were far off have been brought near by the blood of Christ.`,
        },
        reflection: {
          zh: `"从前远离"到"如今亲近"，这是福音带来的根本改变。基督的血拆除了一切隔断的墙，使我们这些原本与神隔绝的人可以坦然无惧地来到祂面前。`,
          en: `"Once far off" to "brought near", this is the fundamental change the gospel brings. Christ's blood demolished every dividing wall, allowing us who were once separated from God to come boldly before Him.`,
        },
        question: {
          zh: `你是否真的感受到自己被带到了神面前？什么时候你最感到与神亲近？`,
          en: `Do you truly feel you have been brought near to God? When do you feel closest to Him?`,
        },
        prayer: {
          zh: `亲爱的主，感谢你靠基督的血使我这远离的人得以亲近。我不再是局外人，而是你家里的人。求你让我时时享受与你的亲密关系。奉主耶稣的名祷告，阿们。`,
          en: `Dear Lord, thank You for bringing me near through Christ's blood. I am no longer an outsider but a member of Your household. Let me continually enjoy intimacy with You. In Jesus' name, amen.`,
        },
      },
      {
        scripture: {
          ref_zh: `以弗所书 4:4-6`,
          ref_en: `Ephesians 4:4-6`,
          text_zh: `身体只有一个，圣灵只有一个，正如你们蒙召，同有一个指望。一主，一信，一洗，一神，就是众人的父，超乎众人之上，贯乎众人之中，也住在众人之内。`,
          text_en: `There is one body and one Spirit, just as you were called to the one hope that belongs to your call, one Lord, one faith, one baptism, one God and Father of all, who is over all and through all and in all.`,
        },
        reflection: {
          zh: `七个"一"构成教会合一的根基。我们的合一不是建立在相同的性格或偏好上，而是建立在共同的信仰、共同的主、共同的圣灵上。教会的多元中有真正的合一。`,
          en: `Seven "ones" form the foundation of church unity. Our unity is not built on shared personality or preference but on a common faith, common Lord, and common Spirit. In the church's diversity there is genuine unity.`,
        },
        question: {
          zh: `你如何在教会的多元中追求真正的合一？`,
          en: `How do you pursue genuine unity amid the church's diversity?`,
        },
        prayer: {
          zh: `合一的主，感谢你呼召我们进入一个身体。帮助我们在差异中彼此接纳，在基督里持守合一。奉主耶稣的名祷告，阿们。`,
          en: `Lord of unity, thank You for calling us into one body. Help us accept one another amid differences and maintain unity in Christ. In Jesus' name, amen.`,
        },
      },
      {
        scripture: {
          ref_zh: `以弗所书 4:15`,
          ref_en: `Ephesians 4:15`,
          text_zh: `惟用爱心说诚实话，凡事长进，连于元首基督。`,
          text_en: `Rather, speaking the truth in love, we are to grow up in every way into him who is the head, into Christ,`,
        },
        reflection: {
          zh: `真理没有爱是残忍的，爱没有真理是软弱的。"用爱心说诚实话"是成熟基督徒的标志。我们既不回避真理，也不缺乏温柔，在两者的平衡中一同长进。`,
          en: `Truth without love is harsh; love without truth is weak. "Speaking the truth in love" is the mark of a mature Christian. We neither avoid truth nor lack tenderness, growing together in the balance of both.`,
        },
        question: {
          zh: `你更倾向于直言不讳还是回避冲突？如何在真理和爱心之间找到平衡？`,
          en: `Do you tend toward bluntness or conflict avoidance? How do you find balance between truth and love?`,
        },
        prayer: {
          zh: `主啊，求你赐我勇气说诚实话，也赐我智慧用爱心说。让我在真理和恩典中长进，越来越像基督。奉主耶稣的名祷告，阿们。`,
          en: `Lord, give me courage to speak truth and wisdom to speak it in love. Let me grow in truth and grace, becoming more like Christ. In Jesus' name, amen.`,
        },
      },
      {
        scripture: {
          ref_zh: `以弗所书 4:22-24`,
          ref_en: `Ephesians 4:22-24`,
          text_zh: `就要脱去你们从前行为上的旧人，这旧人是因私欲的迷惑渐渐变坏的。又要将你们的心志改换一新，并且穿上新人，这新人是照着神的形像造的，有真理的仁义和圣洁。`,
          text_en: `to put off your old self, which belongs to your former manner of life and is corrupt through deceitful desires, and to be renewed in the spirit of your minds, and to put on the new self, created after the likeness of God in true righteousness and holiness.`,
        },
        reflection: {
          zh: `脱去旧人，穿上新人，这是每天的操练。如同换衣服一样，我们要主动脱去旧习惯、旧思维，穿上神所赐的新生命。改变从"心志改换一新"开始，由内而外。`,
          en: `Putting off the old self and putting on the new, this is a daily practice. Like changing clothes, we actively shed old habits and mindsets and clothe ourselves in the new life God gives. Change starts with "renewed minds," from the inside out.`,
        },
        question: {
          zh: `你生命中有哪些"旧人"的习惯需要脱去？你愿意让神更新你的心志吗？`,
          en: `What "old self" habits in your life need to be put off? Are you willing to let God renew your mind?`,
        },
        prayer: {
          zh: `更新的主，求你帮助我脱去旧人的败坏，穿上新人的圣洁。改换我的心志，使我越来越像你。奉主耶稣的名祷告，阿们。`,
          en: `Renewing Lord, help me put off the corruption of the old self and put on the holiness of the new. Renew my mind so I become more like You. In Jesus' name, amen.`,
        },
      },
      {
        scripture: {
          ref_zh: `以弗所书 5:1-2`,
          ref_en: `Ephesians 5:1-2`,
          text_zh: `所以你们该效法神，好像蒙慈爱的儿女一样。也要凭爱心行事，正如基督爱我们，为我们舍了自己，当作馨香的供物和祭物献与神。`,
          text_en: `Therefore be imitators of God, as beloved children. And walk in love, as Christ loved us and gave himself up for us, a fragrant offering and sacrifice to God.`,
        },
        reflection: {
          zh: `"效法神"听起来是不可能的任务，但保罗给了关键线索："好像蒙慈爱的儿女。"孩子自然地模仿父亲，不是出于压力，而是出于爱。当我们深知自己是蒙爱的，效法就变得自然。`,
          en: `"Imitate God" sounds impossible, but Paul gives the key: "as beloved children." Children naturally mimic their father, not from pressure but from love. When we truly know we are loved, imitation becomes natural.`,
        },
        question: {
          zh: `你今天可以用什么具体方式"凭爱心行事"来效法基督？`,
          en: `In what specific way can you "walk in love" today to imitate Christ?`,
        },
        prayer: {
          zh: `亲爱的天父，我是你蒙爱的儿女。帮助我效法你，凭爱心行事，像基督为我舍己一样去爱身边的人。奉主耶稣的名祷告，阿们。`,
          en: `Dear Father, I am Your beloved child. Help me imitate You, walk in love, and love those around me as Christ gave Himself for me. In Jesus' name, amen.`,
        },
      },
      {
        scripture: {
          ref_zh: `以弗所书 5:25`,
          ref_en: `Ephesians 5:25`,
          text_zh: `你们作丈夫的，要爱你们的妻子，正如基督爱教会，为教会舍己。`,
          text_en: `Husbands, love your wives, as Christ loved the church and gave himself up for her,`,
        },
        reflection: {
          zh: `基督对教会的爱是牺牲的、主动的、无条件的。这个标准对丈夫来说看似高不可攀，但这正是福音的力量，不是靠自己的力量去爱，而是被基督的爱充满后自然流溢出来。`,
          en: `Christ's love for the church is sacrificial, initiating, and unconditional. This standard seems impossibly high for husbands, but this is the power of the gospel, not loving by our own strength but overflowing naturally when filled with Christ's love.`,
        },
        question: {
          zh: `基督舍己的爱如何成为你人际关系的榜样？`,
          en: `How does Christ's self-giving love serve as a model for your relationships?`,
        },
        prayer: {
          zh: `主耶稣，你为教会舍己的爱是我们最高的榜样。求你将这样的爱浇灌在我心中，使我也能舍己地去爱。奉主耶稣的名祷告，阿们。`,
          en: `Lord Jesus, Your self-giving love for the church is our highest example. Pour this love into my heart so I too can love sacrificially. In Jesus' name, amen.`,
        },
      },
      {
        scripture: {
          ref_zh: `以弗所书 6:1-3`,
          ref_en: `Ephesians 6:1-3`,
          text_zh: `你们作儿女的，要在主里听从父母，这是理所当然的。"要孝敬父母，使你得福，在世长寿。"这是第一条带应许的诫命。`,
          text_en: `Children, obey your parents in the Lord, for this is right. "Honor your father and mother" (this is the first commandment with a promise), "that it may go well with you and that you may live long in the land."`,
        },
        reflection: {
          zh: `孝敬父母是第一条带应许的诫命。"在主里听从"表明顺服的根基是信仰，不是盲从。家庭秩序反映了神的秩序，在爱中有权柄，在权柄中有爱。`,
          en: `Honoring parents is the first commandment with a promise. "In the Lord" shows that obedience is rooted in faith, not blind compliance. Family order reflects God's order, authority in love, and love in authority.`,
        },
        question: {
          zh: `你如何在日常生活中实践孝敬父母？如何向下一代传递这个价值？`,
          en: `How do you practice honoring your parents in daily life? How do you pass this value to the next generation?`,
        },
        prayer: {
          zh: `天父，感谢你赐给我父母。帮助我在主里孝敬他们，也帮助我在家中建立合你心意的秩序。奉主耶稣的名祷告，阿们。`,
          en: `Father, thank You for giving me parents. Help me honor them in the Lord and establish godly order in my home. In Jesus' name, amen.`,
        },
      },
      {
        scripture: {
          ref_zh: `以弗所书 6:10-11`,
          ref_en: `Ephesians 6:10-11`,
          text_zh: `我还有末了的话：你们要靠着主，倚赖他的大能大力，作刚强的人。要穿戴神所赐的全副军装，就能抵挡魔鬼的诡计。`,
          text_en: `Finally, be strong in the Lord and in the strength of his might. Put on the whole armor of God, that you may be able to stand against the schemes of the devil.`,
        },
        reflection: {
          zh: `基督徒的生活是一场属灵争战。保罗提醒我们，力量不是来自自己，而是来自主的大能。穿戴全副军装不是一次性的行为，而是每天的预备。靠自己我们必败无疑，靠主我们稳站得胜。`,
          en: `The Christian life is a spiritual battle. Paul reminds us that strength comes not from ourselves but from the Lord's might. Putting on the full armor is not a one-time act but daily preparation. On our own we will surely fall; in the Lord we stand victorious.`,
        },
        question: {
          zh: `你每天是否穿戴神的全副军装来面对属灵争战？哪一件军装你最需要加强？`,
          en: `Do you put on God's full armor daily to face spiritual battles? Which piece do you most need to strengthen?`,
        },
        prayer: {
          zh: `全能的主，求你赐我力量靠你刚强。帮助我每天穿戴你的全副军装，抵挡仇敌的一切诡计，在你里面站立得稳。奉主耶稣的名祷告，阿们。`,
          en: `Almighty Lord, grant me strength to be strong in You. Help me put on Your full armor daily, resist every scheme of the enemy, and stand firm in You. In Jesus' name, amen.`,
        },
      },
    ],
  },
];
