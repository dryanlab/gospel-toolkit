interface Scripture { ref_zh: string; ref_en: string; text_zh: string; text_en: string; }
interface BilingualText { zh: string; en: string; }
interface DevotionalUnit { scripture: Scripture; reflection: BilingualText; question: BilingualText; prayer: BilingualText; }
interface AltarTheme { id: string; name_zh: string; name_en: string; icon: string; devotionals: DevotionalUnit[]; hymnKeywords: string[]; }

export const themesB7: AltarTheme[] = [
  {
    id: 'spirit',
    name_zh: '圣灵的工作',
    name_en: 'Work of the Holy Spirit',
    icon: '🕊️',
    hymnKeywords: ['圣灵', '保惠师', 'Spirit', 'Comforter'],
    devotionals: [
      {
        scripture: {
          ref_zh: '创世记 1:2',
          ref_en: 'Genesis 1:2',
          text_zh: '地是空虚混沌，渊面黑暗；神的灵运行在水面上。',
          text_en: 'The earth was without form and void, and darkness was over the face of the deep. And the Spirit of God was hovering over the face of the waters.',
        },
        reflection: {
          zh: '在创造之初，圣灵就参与了神的创造工作。在混沌与黑暗中，神的灵运行带来秩序与生命。今天，圣灵同样在我们生命中的混乱里运行，带来更新与盼望。',
          en: 'From the very beginning of creation, the Holy Spirit was actively involved in God\'s creative work. In chaos and darkness, the Spirit of God moved to bring order and life. Today, the Spirit moves in the chaos of our lives to bring renewal and hope.',
        },
        question: {
          zh: '你生命中有哪些"混沌"的领域需要圣灵来运行和更新？',
          en: 'What areas of chaos in your life need the Holy Spirit to move and bring renewal?',
        },
        prayer: {
          zh: '创造的主，感谢祢的灵从起初就运行在万物之上。求圣灵也运行在我生命的每一个角落，将混乱变为秩序，将黑暗化为光明。奉主耶稣的名祷告，阿们。',
          en: 'Creator God, thank You that Your Spirit has been moving over all things from the beginning. May the Holy Spirit move in every corner of my life, turning chaos into order and darkness into light. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '路加福音 4:18-19',
          ref_en: 'Luke 4:18-19',
          text_zh: '主的灵在我身上，因为他用膏膏我，叫我传福音给贫穷的人；差遣我报告：被掳的得释放，瞎眼的得看见，叫那受压制的得自由，报告神悦纳人的禧年。',
          text_en: '"The Spirit of the Lord is upon me, because he has anointed me to proclaim good news to the poor. He has sent me to proclaim liberty to the captives and recovering of sight to the blind, to set at liberty those who are oppressed, to proclaim the year of the Lord\'s favor."',
        },
        reflection: {
          zh: '耶稣宣告圣灵膏抹祂来完成救赎使命。圣灵不仅赋予能力，更赋予使命。当我们被圣灵充满，我们也被差遣去服事那些贫穷、被掳、瞎眼和受压制的人。',
          en: 'Jesus declared that the Spirit anointed Him to fulfill His redemptive mission. The Spirit not only empowers but also commissions. When we are filled with the Spirit, we too are sent to serve the poor, the captive, the blind, and the oppressed.',
        },
        question: {
          zh: '圣灵膏抹你去完成什么使命？你身边有哪些需要福音释放的人？',
          en: 'What mission has the Spirit anointed you for? Who around you needs the liberating power of the gospel?',
        },
        prayer: {
          zh: '主耶稣，感谢祢被圣灵膏抹来拯救我们。求祢也用圣灵膏抹我，使我能传福音给贫穷的人，使被掳的得释放。愿我成为祢恩典的管道。奉主名祷告，阿们。',
          en: 'Lord Jesus, thank You for being anointed by the Spirit to save us. Anoint me also with Your Spirit so I may proclaim good news to the poor and liberty to the captives. May I be a channel of Your grace. In Your name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '约翰福音 3:5-6',
          ref_en: 'John 3:5-6',
          text_zh: '耶稣说："我实实在在地告诉你，人若不是从水和圣灵生的，就不能进神的国。从肉身生的就是肉身；从灵生的就是灵。"',
          text_en: 'Jesus answered, "Truly, truly, I say to you, unless one is born of water and the Spirit, he cannot enter the kingdom of God. That which is born of the flesh is flesh, and that which is born of the Spirit is spirit."',
        },
        reflection: {
          zh: '圣灵使人重生，这是进入神国的唯一道路。肉身的生命有限且短暂，唯有从圣灵而生的新生命才能进入永恒。重生不是人的努力，而是圣灵的超然工作。',
          en: 'The Holy Spirit brings about new birth — the only way to enter God\'s kingdom. Fleshly life is limited and temporary; only the new life born of the Spirit can enter eternity. Rebirth is not human effort but the supernatural work of the Spirit.',
        },
        question: {
          zh: '你是否经历过圣灵带来的重生？这个经历如何改变了你的生命？',
          en: 'Have you experienced the new birth brought by the Holy Spirit? How has this experience transformed your life?',
        },
        prayer: {
          zh: '天父，感谢祢差遣圣灵使我重生，赐给我新的生命。求祢帮助我每天活在圣灵的大能中，不靠肉体，而靠祢的灵。奉主耶稣的名祷告，阿们。',
          en: 'Heavenly Father, thank You for sending the Holy Spirit to give me new birth and new life. Help me live each day in the power of the Spirit, not by the flesh but by Your Spirit. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '约翰福音 14:16-17',
          ref_en: 'John 14:16-17',
          text_zh: '我要求父，父就另外赐给你们一位保惠师，叫他永远与你们同在，就是真理的圣灵，乃世人不能接受的；因为不见他，也不认识他。你们却认识他，因他常与你们同在，也要在你们里面。',
          text_en: '"And I will ask the Father, and he will give you another Helper, to be with you forever, even the Spirit of truth, whom the world cannot receive, because it neither sees him nor knows him. You know him, for he dwells with you and will be in you."',
        },
        reflection: {
          zh: '耶稣应许赐下圣灵作为保惠师——帮助者、安慰者、辩护者。圣灵不是暂时的访客，而是永远与我们同在的伙伴。祂住在我们里面，使我们永不孤单。',
          en: 'Jesus promised the Holy Spirit as our Helper — comforter, counselor, advocate. The Spirit is not a temporary visitor but an eternal companion. He dwells within us so we are never alone.',
        },
        question: {
          zh: '你在日常生活中如何经历圣灵作为保惠师的同在与帮助？',
          en: 'How do you experience the Holy Spirit\'s presence and help as your Comforter in daily life?',
        },
        prayer: {
          zh: '感谢主耶稣为我们求父赐下保惠师圣灵。感谢圣灵永远与我同在，住在我里面。求祢帮助我更多地意识到祢的同在，倚靠祢的帮助度过每一天。奉主名祷告，阿们。',
          en: 'Thank You, Lord Jesus, for asking the Father to send the Helper. Thank You, Holy Spirit, for being with me forever and dwelling in me. Help me be more aware of Your presence and rely on Your help each day. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '约翰福音 14:26',
          ref_en: 'John 14:26',
          text_zh: '但保惠师，就是父因我的名所要差来的圣灵，他要将一切的事指教你们，并且要叫你们想起我对你们所说的一切话。',
          text_en: '"But the Helper, the Holy Spirit, whom the Father will send in my name, he will teach you all things and bring to your remembrance all that I have said to you."',
        },
        reflection: {
          zh: '圣灵是我们的教师，祂引导我们明白真理，帮助我们记起主的话语。当我们读经祷告时，圣灵在我们心中光照、启示，使神的话语活泼有力地对我们说话。',
          en: 'The Holy Spirit is our teacher, guiding us into truth and helping us remember the Lord\'s words. When we read Scripture and pray, the Spirit illuminates and reveals, making God\'s Word come alive and speak powerfully to us.',
        },
        question: {
          zh: '你是否有过圣灵提醒你某段经文或主的话语的经历？那是怎样的感受？',
          en: 'Have you ever experienced the Spirit bringing a Scripture or word of the Lord to your mind? What was that like?',
        },
        prayer: {
          zh: '天父，感谢祢因主耶稣的名差来圣灵作我的老师。求圣灵将一切的事指教我，使我想起主的话语，行在真理之中。奉主耶稣的名祷告，阿们。',
          en: 'Heavenly Father, thank You for sending the Holy Spirit in Jesus\' name to be my teacher. May the Spirit teach me all things and bring to my remembrance the words of Jesus, that I may walk in truth. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '约翰福音 15:26',
          ref_en: 'John 15:26',
          text_zh: '但我要从父那里差保惠师来，就是从父出来真理的圣灵；他来了，就要为我作见证。',
          text_en: '"But when the Helper comes, whom I will send to you from the Father, the Spirit of truth, who proceeds from the Father, he will bear witness about me."',
        },
        reflection: {
          zh: '圣灵的核心工作之一是为耶稣作见证。圣灵不荣耀自己，而是将人引向基督。当我们被圣灵充满，我们也会自然地为主作见证，因为圣灵在我们心中激发对基督的爱与认识。',
          en: 'One of the Spirit\'s core works is to bear witness about Jesus. The Spirit does not glorify Himself but leads people to Christ. When we are filled with the Spirit, we naturally testify about the Lord, for the Spirit stirs up love for and knowledge of Christ in our hearts.',
        },
        question: {
          zh: '圣灵如何帮助你更深认识耶稣？你如何靠着圣灵为主作见证？',
          en: 'How has the Spirit helped you know Jesus more deeply? How do you bear witness to Christ through the Spirit?',
        },
        prayer: {
          zh: '主耶稣，感谢祢差遣真理的圣灵来为祢作见证。求圣灵帮助我更深认识祢，也赐我勇气和智慧为祢作美好的见证。奉主名祷告，阿们。',
          en: 'Lord Jesus, thank You for sending the Spirit of truth to bear witness about You. May the Spirit help me know You more deeply and give me courage and wisdom to be a faithful witness. In Your name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '约翰福音 16:8',
          ref_en: 'John 16:8',
          text_zh: '他既来了，就要叫世人为罪、为义、为审判，自己责备自己。',
          text_en: '"And when he comes, he will convict the world concerning sin and righteousness and judgment."',
        },
        reflection: {
          zh: '圣灵使人知罪，这不是定罪，而是出于爱的光照。圣灵让我们看到自己的罪，也看到基督的义和审判的真实，从而引导我们悔改归向神。',
          en: 'The Spirit convicts of sin — not to condemn, but to illuminate with love. The Spirit shows us our sin, Christ\'s righteousness, and the reality of judgment, leading us to repentance and back to God.',
        },
        question: {
          zh: '你是否经历过圣灵在你心中的光照和责备？你如何回应？',
          en: 'Have you experienced the Spirit\'s conviction and illumination in your heart? How did you respond?',
        },
        prayer: {
          zh: '圣灵，感谢祢在我心中光照，使我看见自己的罪。求祢继续引导我悔改，帮助我追求公义，活在祢的真理中。奉主耶稣的名祷告，阿们。',
          en: 'Holy Spirit, thank You for illuminating my heart and showing me my sin. Continue to lead me to repentance, help me pursue righteousness, and live in Your truth. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '约翰福音 16:13',
          ref_en: 'John 16:13',
          text_zh: '只等真理的圣灵来了，他要引导你们明白一切的真理；因为他不是凭自己说的，乃是把他所听见的都说出来，并要把将来的事告诉你们。',
          text_en: '"When the Spirit of truth comes, he will guide you into all the truth, for he will not speak on his own authority, but whatever he hears he will speak, and he will declare to you the things that are to come."',
        },
        reflection: {
          zh: '圣灵引导我们进入一切的真理。在这个充满各种声音和观点的世代，我们需要圣灵的引导来分辨真假，认识神的心意。圣灵不凭自己说话，而是传达父神的旨意。',
          en: 'The Spirit guides us into all truth. In an age filled with competing voices and opinions, we need the Spirit\'s guidance to discern truth from falsehood and know God\'s will. The Spirit does not speak on His own but communicates the Father\'s will.',
        },
        question: {
          zh: '在面对重大决定时，你如何寻求圣灵的引导来明白真理？',
          en: 'When facing major decisions, how do you seek the Spirit\'s guidance to understand the truth?',
        },
        prayer: {
          zh: '真理的圣灵，求祢引导我明白一切的真理。在这混乱的世代中，帮助我分辨真伪，跟随祢的带领。将父的旨意向我显明，使我行在祢的道路中。奉主名祷告，阿们。',
          en: 'Spirit of truth, guide me into all truth. In this confusing age, help me discern what is true and follow Your leading. Reveal the Father\'s will to me so I may walk in Your ways. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '使徒行传 2:2-4',
          ref_en: 'Acts 2:2-4',
          text_zh: '忽然，从天上有响声下来，好像一阵大风吹过，充满了他们所坐的屋子；又有舌头如火焰显现出来，分开落在他们各人头上。他们就都被圣灵充满，按着圣灵所赐的口才说起别国的话来。',
          text_en: 'And suddenly there came from heaven a sound like a mighty rushing wind, and it filled the entire house where they were sitting. And divided tongues as of fire appeared to them and rested on each one of them. And they were all filled with the Holy Spirit and began to speak in other tongues as the Spirit gave them utterance.',
        },
        reflection: {
          zh: '五旬节圣灵降临，教会由此诞生。圣灵如风不可阻挡，如火炼净人心。被圣灵充满的门徒得着能力，用各种语言传讲神的大作为。圣灵的能力今天仍然在工作。',
          en: 'At Pentecost the Spirit descended and the Church was born. The Spirit came like an unstoppable wind and purifying fire. The disciples, filled with the Spirit, received power to declare God\'s mighty works in many languages. The Spirit\'s power is still at work today.',
        },
        question: {
          zh: '你渴望被圣灵充满吗？你期待圣灵的能力在你生命中带来什么改变？',
          en: 'Do you long to be filled with the Holy Spirit? What changes do you hope the Spirit\'s power will bring in your life?',
        },
        prayer: {
          zh: '天父，感谢祢在五旬节赐下圣灵。求祢也用圣灵充满我，赐我能力为祢作见证。愿圣灵的火炼净我的心，圣灵的风推动我前行。奉主耶稣的名祷告，阿们。',
          en: 'Heavenly Father, thank You for pouring out the Spirit at Pentecost. Fill me also with Your Holy Spirit and empower me to witness for You. May the Spirit\'s fire purify my heart and the Spirit\'s wind propel me forward. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '加拉太书 5:22-23',
          ref_en: 'Galatians 5:22-23',
          text_zh: '圣灵所结的果子，就是仁爱、喜乐、和平、忍耐、恩慈、良善、信实、温柔、节制。这样的事没有律法禁止。',
          text_en: 'But the fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control; against such things there is no law.',
        },
        reflection: {
          zh: '圣灵在信徒生命中结出美好的果子。这九样品格不是靠人努力，而是圣灵在我们里面工作的自然结果。当我们顺服圣灵，这些果子就会在我们生命中逐渐成熟。',
          en: 'The Spirit produces beautiful fruit in the believer\'s life. These nine qualities are not achieved by human effort but are the natural result of the Spirit working within us. As we yield to the Spirit, this fruit gradually ripens in our lives.',
        },
        question: {
          zh: '圣灵的九种果子中，哪一种是你最需要成长的？你打算如何配合圣灵的工作？',
          en: 'Which of the nine fruits of the Spirit do you most need to grow in? How will you cooperate with the Spirit\'s work?',
        },
        prayer: {
          zh: '圣灵，求祢在我生命中结出仁爱、喜乐、和平、忍耐、恩慈、良善、信实、温柔、节制的果子。帮助我每天顺服祢的带领，使我的生命彰显基督的馨香。奉主名祷告，阿们。',
          en: 'Holy Spirit, produce in my life the fruit of love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, and self-control. Help me yield to Your leading daily so my life reflects the fragrance of Christ. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '罗马书 8:14',
          ref_en: 'Romans 8:14',
          text_zh: '因为凡被神的灵引导的，都是神的儿子。',
          text_en: 'For all who are led by the Spirit of God are sons of God.',
        },
        reflection: {
          zh: '被圣灵引导是神儿女的标志。圣灵不仅赐我们重生的生命，更在日常生活中引导我们的脚步。跟随圣灵的引导，就是活出神儿女的身份和尊贵。',
          en: 'Being led by the Spirit is the mark of God\'s children. The Spirit not only gives us new birth but guides our steps in daily life. Following the Spirit\'s leading means living out our identity and dignity as children of God.',
        },
        question: {
          zh: '你在生活中如何辨别圣灵的引导？有哪些实际的操练可以帮助你更好地跟随圣灵？',
          en: 'How do you discern the Spirit\'s leading in your life? What practical disciplines help you follow the Spirit more closely?',
        },
        prayer: {
          zh: '天父，感谢祢赐下圣灵引导我，使我确知自己是祢的儿女。求祢帮助我敏锐于圣灵的带领，不随从肉体的私欲，而是跟随祢的灵行事。奉主耶稣的名祷告，阿们。',
          en: 'Heavenly Father, thank You for giving the Spirit to lead me and assure me I am Your child. Help me be sensitive to the Spirit\'s leading, not following the desires of the flesh but walking by Your Spirit. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '罗马书 8:26-27',
          ref_en: 'Romans 8:26-27',
          text_zh: '况且我们的软弱有圣灵帮助，我们本不晓得当怎样祷告，只是圣灵亲自用说不出来的叹息替我们祷告。鉴察人心的，晓得圣灵的意思，因为圣灵照着神的旨意替圣徒祈求。',
          text_en: 'Likewise the Spirit helps us in our weakness. For we do not know what to pray for as we ought, but the Spirit himself intercedes for us with groanings too deep for words. And he who searches hearts knows what is the mind of the Spirit, because the Spirit intercedes for the saints according to the will of God.',
        },
        reflection: {
          zh: '我们常常不知道如何祷告，但圣灵帮助我们的软弱，为我们代求。这是何等大的安慰——即使在我们最无助的时刻，圣灵也在照着神的旨意为我们祈求。',
          en: 'We often don\'t know how to pray, but the Spirit helps us in our weakness and intercedes for us. What great comfort — even in our most helpless moments, the Spirit intercedes for us according to God\'s will.',
        },
        question: {
          zh: '当你不知道如何祷告时，你是否相信圣灵在替你代求？这如何改变你的祷告生活？',
          en: 'When you don\'t know how to pray, do you trust the Spirit is interceding for you? How does this change your prayer life?',
        },
        prayer: {
          zh: '圣灵，感谢祢帮助我的软弱，在我不晓得如何祷告时替我代求。求祢继续照着父的旨意为我祈求，使我的生命合乎神的心意。奉主耶稣的名祷告，阿们。',
          en: 'Holy Spirit, thank You for helping me in my weakness and interceding when I don\'t know how to pray. Continue to intercede for me according to the Father\'s will, that my life may align with God\'s purposes. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '哥林多前书 3:16',
          ref_en: '1 Corinthians 3:16',
          text_zh: '岂不知你们是神的殿，神的灵住在你们里头吗？',
          text_en: 'Do you not know that you are God\'s temple and that God\'s Spirit dwells in you?',
        },
        reflection: {
          zh: '信徒的身体是圣灵的殿。神不再住在人手所造的殿中，而是住在祂儿女的心里。这个真理提醒我们要以圣洁和敬畏的态度对待自己的身心灵，因为我们是至高神的居所。',
          en: 'The believer\'s body is the temple of the Holy Spirit. God no longer dwells in temples made by human hands but in the hearts of His children. This truth reminds us to treat our body, mind, and spirit with holiness and reverence, for we are the dwelling place of the Most High.',
        },
        question: {
          zh: '知道自己是神的殿，这如何影响你对待自己身体和生活方式的态度？',
          en: 'Knowing you are God\'s temple, how does this affect the way you treat your body and lifestyle?',
        },
        prayer: {
          zh: '天父，感谢祢的灵住在我里面，使我成为祢的殿。求祢帮助我保守自己的身心灵圣洁，配得上作祢的居所。愿我的生命荣耀祢的名。奉主耶稣的名祷告，阿们。',
          en: 'Heavenly Father, thank You that Your Spirit dwells in me, making me Your temple. Help me keep my body, mind, and spirit holy, worthy of being Your dwelling place. May my life glorify Your name. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '以弗所书 1:13-14',
          ref_en: 'Ephesians 1:13-14',
          text_zh: '你们既听见真理的道，就是那叫你们得救的福音，也信了基督，既然信他，就受了所应许的圣灵为印记。这圣灵是我们得基业的凭据，直等到神之民被赎，使他的荣耀得着称赞。',
          text_en: 'In him you also, when you heard the word of truth, the gospel of your salvation, and believed in him, were sealed with the promised Holy Spirit, who is the guarantee of our inheritance until we acquire possession of it, to the praise of his glory.',
        },
        reflection: {
          zh: '圣灵是我们得救的印记和得基业的凭据。就像印章代表所有权和保护，圣灵的印记表明我们属于神，我们的救恩有永恒的保障。圣灵是天国产业的预付款，保证将来的完全救赎。',
          en: 'The Holy Spirit is the seal of our salvation and the guarantee of our inheritance. Like a seal signifying ownership and protection, the Spirit\'s seal shows we belong to God and our salvation is eternally secure. The Spirit is the down payment of our heavenly inheritance, guaranteeing our full redemption.',
        },
        question: {
          zh: '圣灵作为得基业的凭据，如何给你面对未来的信心和盼望？',
          en: 'How does the Spirit as the guarantee of your inheritance give you confidence and hope for the future?',
        },
        prayer: {
          zh: '天父，感谢祢用圣灵为印记，确认我属于祢。感谢圣灵作为我得基业的凭据，使我对永恒的盼望充满确信。愿我的生命使祢的荣耀得着称赞。奉主耶稣的名祷告，阿们。',
          en: 'Heavenly Father, thank You for sealing me with the Holy Spirit, confirming I belong to You. Thank You that the Spirit is the guarantee of my inheritance, filling me with confident hope for eternity. May my life be to the praise of Your glory. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '帖撒罗尼迦前书 5:19',
          ref_en: '1 Thessalonians 5:19',
          text_zh: '不要消灭圣灵的感动。',
          text_en: 'Do not quench the Spirit.',
        },
        reflection: {
          zh: '圣灵如火焰在我们心中燃烧，我们可以选择顺服让火焰旺盛，也可以抗拒使之消灭。消灭圣灵的感动就是忽略、压制或拒绝圣灵在我们心中的工作。让我们敞开心来回应圣灵的每一个感动。',
          en: 'The Spirit burns like a flame in our hearts. We can choose to obey and fan the flame, or resist and quench it. To quench the Spirit is to ignore, suppress, or reject the Spirit\'s work in our hearts. Let us open our hearts to respond to every prompting of the Spirit.',
        },
        question: {
          zh: '在你的生活中，有哪些事情可能在消灭圣灵的感动？你如何保持对圣灵的敏锐？',
          en: 'What things in your life might be quenching the Spirit? How can you remain sensitive to the Spirit\'s promptings?',
        },
        prayer: {
          zh: '圣灵，求祢赦免我曾消灭祢感动的时刻。帮助我敏锐于祢的声音，勇敢地回应祢的带领。愿祢的火焰在我心中永不熄灭，使我的生命成为祢燃烧的器皿。奉主耶稣的名祷告，阿们。',
          en: 'Holy Spirit, forgive me for the times I have quenched Your promptings. Help me be sensitive to Your voice and courageous in responding to Your leading. May Your flame never be extinguished in my heart; make my life a vessel ablaze for You. In Jesus\' name, amen.',
        },
      },
    ],
  },
  {
    id: 'psalms',
    name_zh: '诗篇之旅',
    name_en: 'Journey through Psalms',
    icon: '📜',
    hymnKeywords: ['诗篇', '赞美', 'psalm', 'praise'],
    devotionals: [
      {
        scripture: {
          ref_zh: '诗篇 1:1-3',
          ref_en: 'Psalm 1:1-3',
          text_zh: '不从恶人的计谋，不站罪人的道路，不坐亵慢人的座位，惟喜爱耶和华的律法，昼夜思想，这人便为有福！他要像一棵树栽在溪水旁，按时候结果子，叶子也不枯干。凡他所做的尽都顺利。',
          text_en: 'Blessed is the man who walks not in the counsel of the wicked, nor stands in the way of sinners, nor sits in the seat of scoffers; but his delight is in the law of the Lord, and on his law he meditates day and night. He is like a tree planted by streams of water that yields its fruit in its season, and its leaf does not wither. In all that he does, he prospers.',
        },
        reflection: {
          zh: '诗篇以"有福"开篇，为整本诗篇定下基调。真正的福气不在于外在环境，而在于与神话语的关系。昼夜思想神律法的人如同栽在溪水旁的树，根基稳固，生命丰盛。',
          en: 'The Psalms open with "blessed," setting the tone for the entire book. True blessedness is not about circumstances but about our relationship with God\'s Word. The one who meditates on God\'s law day and night is like a tree by streams of water — deeply rooted and abundantly fruitful.',
        },
        question: {
          zh: '你是否有每天昼夜思想神话语的习惯？什么阻碍了你更深地扎根于神的话语？',
          en: 'Do you have a habit of meditating on God\'s Word day and night? What hinders you from being more deeply rooted in Scripture?',
        },
        prayer: {
          zh: '天父，求祢使我喜爱祢的律法，昼夜思想。愿我像栽在溪水旁的树，深深扎根于祢的话语，按时结出美好的果子。奉主耶稣的名祷告，阿们。',
          en: 'Heavenly Father, make me delight in Your law and meditate on it day and night. May I be like a tree planted by streams of water, deeply rooted in Your Word, bearing fruit in season. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '诗篇 23:1-3',
          ref_en: 'Psalm 23:1-3',
          text_zh: '耶和华是我的牧者，我必不至缺乏。他使我躺卧在青草地上，领我在可安歇的水边。他使我的灵魂苏醒，为自己的名引导我走义路。',
          text_en: 'The Lord is my shepherd; I shall not want. He makes me lie down in green pastures. He leads me beside still waters. He restores my soul. He leads me in paths of righteousness for his name\'s sake.',
        },
        reflection: {
          zh: '这是最广为人知的诗篇。大卫以牧人与羊的关系来描绘神与我们的关系。好牧人供应一切所需，带来安息与恢复，引导我们走正路。在祂的看顾下，我们什么都不缺。',
          en: 'This is the most beloved psalm. David uses the shepherd-sheep relationship to portray God\'s care for us. The Good Shepherd provides all we need, brings rest and restoration, and guides us in right paths. Under His care, we lack nothing.',
        },
        question: {
          zh: '在你生命的哪些方面，你需要经历神作为好牧人的供应和引导？',
          en: 'In what areas of your life do you need to experience God\'s provision and guidance as the Good Shepherd?',
        },
        prayer: {
          zh: '耶和华我的牧者，感谢祢使我不至缺乏。求祢使我的灵魂苏醒，领我在可安歇的水边，为祢的名引导我走义路。奉主耶稣的名祷告，阿们。',
          en: 'Lord, my Shepherd, thank You that I shall not want. Restore my soul, lead me beside still waters, and guide me in paths of righteousness for Your name\'s sake. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '诗篇 46:1-2',
          ref_en: 'Psalm 46:1-2',
          text_zh: '神是我们的避难所，是我们的力量，是我们在患难中随时的帮助。所以，地虽改变，山虽摇动到海心，',
          text_en: 'God is our refuge and strength, a very present help in trouble. Therefore we will not fear though the earth gives way, though the mountains be moved into the heart of the sea.',
        },
        reflection: {
          zh: '当世界动摇时，神是我们不动摇的避难所。这首诗篇教导我们：真正的安全不在于环境的稳定，而在于神的同在。即使天翻地覆，有神作我们的避难所和力量，我们就不必惧怕。',
          en: 'When the world shakes, God is our unshakable refuge. This psalm teaches that true security is not in stable circumstances but in God\'s presence. Even when everything falls apart, with God as our refuge and strength, we need not fear.',
        },
        question: {
          zh: '当你面对生活中的"地震"时，你是否第一时间跑向神这个避难所？',
          en: 'When you face life\'s "earthquakes," is God your first refuge?',
        },
        prayer: {
          zh: '全能的神，祢是我的避难所和力量，是我在患难中随时的帮助。即使世界动摇，我也不惧怕，因为祢与我同在。求祢坚固我的信心，使我安息在祢的保护中。奉主名祷告，阿们。',
          en: 'Almighty God, You are my refuge and strength, a very present help in trouble. Even when the world shakes, I will not fear, for You are with me. Strengthen my faith and let me rest in Your protection. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '诗篇 51:1-2',
          ref_en: 'Psalm 51:1-2',
          text_zh: '神啊，求你按你的慈爱怜恤我！按你丰盛的慈悲涂抹我的过犯！求你将我的罪孽洗除净尽，并洁除我的罪！',
          text_en: 'Have mercy on me, O God, according to your steadfast love; according to your abundant mercy blot out my transgressions. Wash me thoroughly from my iniquity, and cleanse me from my sin!',
        },
        reflection: {
          zh: '大卫犯罪后的悔改祷告是历史上最深刻的认罪之一。他不找借口，不推卸责任，而是直接呼求神的怜悯。真正的悔改是基于对神慈爱的认识——知道祂愿意赦免并洁净我们。',
          en: 'David\'s prayer of repentance after his sin is one of history\'s most profound confessions. He makes no excuses and shifts no blame but cries out directly for God\'s mercy. True repentance is rooted in knowing God\'s steadfast love — knowing He is willing to forgive and cleanse us.',
        },
        question: {
          zh: '你是否有需要向神认的罪？你是否相信神丰盛的慈悲足以涂抹你一切的过犯？',
          en: 'Is there sin you need to confess to God? Do you believe His abundant mercy is sufficient to blot out all your transgressions?',
        },
        prayer: {
          zh: '神啊，求祢按祢的慈爱怜恤我，按祢丰盛的慈悲涂抹我的过犯。将我的罪孽洗除净尽，为我造清洁的心。奉主耶稣的名祷告，阿们。',
          en: 'Have mercy on me, O God, according to Your steadfast love. Blot out my transgressions, wash me thoroughly from my iniquity, and create in me a clean heart. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '诗篇 42:1-2',
          ref_en: 'Psalm 42:1-2',
          text_zh: '神啊，我的心切慕你，如鹿切慕溪水。我的心渴想神，就是永生神；我几时得朝见神呢？',
          text_en: 'As a deer pants for flowing streams, so pants my soul for you, O God. My soul thirsts for God, for the living God. When shall I come and appear before God?',
        },
        reflection: {
          zh: '诗人用干渴的鹿来描绘灵魂对神的渴慕。在灵里干旱的时期，我们最需要的不是更多活动或娱乐，而是对永生神的渴慕。这种渴慕本身就是神在我们心中工作的证据。',
          en: 'The psalmist uses a thirsty deer to depict the soul\'s longing for God. In spiritually dry seasons, what we need most is not more activity or entertainment but a thirst for the living God. This very longing is evidence of God\'s work in our hearts.',
        },
        question: {
          zh: '你的心是否像鹿切慕溪水一样渴慕神？如何在忙碌中保持对神的渴慕？',
          en: 'Does your soul pant for God like a deer for flowing streams? How do you maintain your thirst for God amid busyness?',
        },
        prayer: {
          zh: '永生神，我的心切慕祢如鹿切慕溪水。在我灵里干旱的时候，求祢用祢的同在满足我。使我对祢的渴慕永不止息，直到面对面见祢。奉主耶稣的名祷告，阿们。',
          en: 'Living God, my soul pants for You as a deer pants for flowing streams. In my dry seasons, satisfy me with Your presence. May my thirst for You never cease until I see You face to face. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '诗篇 91:1-2',
          ref_en: 'Psalm 91:1-2',
          text_zh: '住在至高者隐密处的，必住在全能者的荫下。我要论到耶和华说：他是我的避难所，是我的山寨，是我的神，是我所倚靠的。',
          text_en: 'He who dwells in the shelter of the Most High will abide in the shadow of the Almighty. I will say to the Lord, "My refuge and my fortress, my God, in whom I trust."',
        },
        reflection: {
          zh: '住在至高者隐密处意味着与神保持亲密的关系。在神的荫下，我们得到全方位的保护。诗人不仅认识神的保护，更宣告信靠——"祂是我的避难所，我的山寨，我所倚靠的。"',
          en: 'Dwelling in the shelter of the Most High means maintaining an intimate relationship with God. Under His shadow we receive complete protection. The psalmist not only knows God\'s protection but declares trust — "My refuge and fortress, my God, in whom I trust."',
        },
        question: {
          zh: '你是否住在至高者的隐密处？什么使你离开了神的荫庇？',
          en: 'Are you dwelling in the shelter of the Most High? What has drawn you away from God\'s protective shadow?',
        },
        prayer: {
          zh: '至高的神，祢是我的避难所和山寨，是我所倚靠的。求祢帮助我住在祢的隐密处，安息在全能者的荫下。在一切危险和试探中，祢是我的保护。奉主耶稣的名祷告，阿们。',
          en: 'Most High God, You are my refuge and fortress, in whom I trust. Help me dwell in Your shelter and rest in the shadow of the Almighty. In every danger and temptation, You are my protection. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '诗篇 103:1-3',
          ref_en: 'Psalm 103:1-3',
          text_zh: '我的心哪，你要称颂耶和华！凡在我里面的，也要称颂他的圣名！我的心哪，你要称颂耶和华！不可忘记他的一切恩惠！他赦免你的一切罪孽，医治你的一切疾病。',
          text_en: 'Bless the Lord, O my soul, and all that is within me, bless his holy name! Bless the Lord, O my soul, and forget not all his benefits, who forgives all your iniquity, who heals all your diseases.',
        },
        reflection: {
          zh: '大卫提醒自己的灵魂要赞美神，不可忘记神的恩惠。感恩是对抗遗忘的武器。神赦免我们的罪、医治我们的疾病，这些恩典太多太大，我们不应视为理所当然。',
          en: 'David reminds his own soul to praise God and not forget His benefits. Gratitude is the weapon against forgetfulness. God forgives our sins and heals our diseases — these graces are too great and too many to take for granted.',
        },
        question: {
          zh: '你最近是否忘记了神的某些恩惠？花一点时间数算神的恩典。',
          en: 'Have you recently forgotten some of God\'s benefits? Take a moment to count His blessings.',
        },
        prayer: {
          zh: '我的心哪，要称颂耶和华！主啊，我不忘记祢一切的恩惠。感谢祢赦免我的罪孽，医治我的疾病。凡在我里面的都要赞美祢的圣名！奉主耶稣的名祷告，阿们。',
          en: 'Bless the Lord, O my soul! Lord, I will not forget all Your benefits. Thank You for forgiving my iniquity and healing my diseases. All that is within me, bless Your holy name! In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '诗篇 139:1-4',
          ref_en: 'Psalm 139:1-4',
          text_zh: '耶和华啊，你已经鉴察我，认识我。我坐下，我起来，你都晓得；你从远处知道我的意念。我行路，我躺卧，你都细察；你也深知我一切所行的。耶和华啊，我舌头上的话，你没有一句不知道的。',
          text_en: 'O Lord, you have searched me and known me! You know when I sit down and when I rise up; you discern my thoughts from afar. You search out my path and my lying down and are acquainted with all my ways. Even before a word is on my tongue, behold, O Lord, you know it altogether.',
        },
        reflection: {
          zh: '神对我们的认识超乎想象的深入和全面。祂知道我们的一举一动、一思一念，甚至我们话未出口祂就已经知道。这种被完全认识不是可怕的，而是被完全接纳和深爱的确据。',
          en: 'God knows us more deeply and thoroughly than we can imagine. He knows our every move, every thought, even our words before we speak them. Being fully known is not frightening but is the assurance of being fully accepted and deeply loved.',
        },
        question: {
          zh: '被神完全认识让你感到安慰还是不安？为什么？',
          en: 'Does being fully known by God bring you comfort or unease? Why?',
        },
        prayer: {
          zh: '耶和华，祢已经鉴察我、认识我。感谢祢如此深入地了解我，却依然爱我、接纳我。求祢鉴察我，知道我的心思，看在我里面有什么恶行没有，引导我走永生的道路。奉主名祷告，阿们。',
          en: 'O Lord, You have searched me and known me. Thank You for knowing me so deeply yet still loving and accepting me. Search me, know my thoughts, see if there is any offensive way in me, and lead me in the way everlasting. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '诗篇 137:1, 4',
          ref_en: 'Psalm 137:1, 4',
          text_zh: '我们曾在巴比伦的河边坐下，一追想锡安就哭了。我们怎能在外邦唱耶和华的歌呢？',
          text_en: 'By the waters of Babylon, there we sat down and wept, when we remembered Zion. How shall we sing the Lord\'s song in a foreign land?',
        },
        reflection: {
          zh: '被掳到巴比伦的以色列人经历了深深的失落和哀伤。在异乡追想家园，他们唱不出赞美的歌。这首诗篇诚实地表达了信仰中的痛苦——有时我们在困境中确实难以歌唱，但这并不意味着信心的失败。',
          en: 'The Israelites in Babylonian exile experienced profound loss and grief. Remembering home in a foreign land, they could not sing praise. This psalm honestly expresses the pain within faith — sometimes we truly cannot sing in hardship, but this does not mean failure of faith.',
        },
        question: {
          zh: '你是否正处于一个难以歌唱的人生季节？如何在困境中持守对神的信靠？',
          en: 'Are you in a season where it\'s hard to sing? How do you maintain trust in God during difficult times?',
        },
        prayer: {
          zh: '主啊，当我在困难中唱不出歌来时，求祢怜悯我。祢明白我的眼泪和叹息。即使在异乡，即使在困境中，求祢不要让我忘记祢的应许和祢的家。奉主耶稣的名祷告，阿们。',
          en: 'Lord, when I cannot sing in my difficulty, have mercy on me. You understand my tears and sighs. Even in a foreign land, even in hardship, do not let me forget Your promises and Your home. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '诗篇 119:105',
          ref_en: 'Psalm 119:105',
          text_zh: '你的话是我脚前的灯，是我路上的光。',
          text_en: 'Your word is a lamp to my feet and a light to my path.',
        },
        reflection: {
          zh: '神的话语如同灯光照亮我们前行的道路。注意这里说的是"脚前"的灯——不是照亮整条路，而是照亮下一步。信心的行走就是一步一步跟随神话语的光。',
          en: 'God\'s Word is like a lamp illuminating our path. Notice it says "a lamp to my feet" — not lighting the entire road but the next step. Walking by faith means following the light of God\'s Word one step at a time.',
        },
        question: {
          zh: '你是否在等神照亮整条路才肯迈步？还是愿意信靠祂一步一步地前行？',
          en: 'Are you waiting for God to light the whole path before you move? Or are you willing to trust Him step by step?',
        },
        prayer: {
          zh: '主啊，感谢祢的话语是我脚前的灯、路上的光。帮助我每天借着祢的话语看清下一步，凭信心跟随祢的带领。愿祢的话语引导我一生的道路。奉主耶稣的名祷告，阿们。',
          en: 'Lord, thank You that Your Word is a lamp to my feet and a light to my path. Help me see the next step through Your Word each day and follow Your leading by faith. May Your Word guide my path all my life. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '诗篇 19:1-2',
          ref_en: 'Psalm 19:1-2',
          text_zh: '诸天述说神的荣耀；穹苍传扬他的手段。这日到那日发出言语；这夜到那夜传出知识。',
          text_en: 'The heavens declare the glory of God, and the sky above proclaims his handiwork. Day to day pours out speech, and night to night reveals knowledge.',
        },
        reflection: {
          zh: '整个宇宙都在述说神的荣耀。创造本身就是一部无声却有力的见证。当我们仰望星空、欣赏日落，我们看到的不仅是自然现象，更是创造主的手笔和荣耀的彰显。',
          en: 'The entire universe declares God\'s glory. Creation itself is a silent yet powerful testimony. When we gaze at the stars or admire a sunset, we see not merely natural phenomena but the handiwork and glory of the Creator.',
        },
        question: {
          zh: '你最近一次被神的创造所震撼是什么时候？花时间观看天空，聆听创造的述说。',
          en: 'When were you last awed by God\'s creation? Take time to look at the sky and listen to what creation declares.',
        },
        prayer: {
          zh: '荣耀的神，诸天述说祢的荣耀，穹苍传扬祢的手段。打开我的眼睛，使我在祢的创造中看见祢的伟大和美善。愿我的口也述说祢的荣耀。奉主耶稣的名祷告，阿们。',
          en: 'Glorious God, the heavens declare Your glory and the skies proclaim Your handiwork. Open my eyes to see Your greatness and goodness in creation. May my mouth also declare Your glory. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '诗篇 122:1',
          ref_en: 'Psalm 122:1',
          text_zh: '人对我说："我们往耶和华的殿去"，我就欢喜。',
          text_en: 'I was glad when they said to me, "Let us go to the house of the Lord!"',
        },
        reflection: {
          zh: '去敬拜神不是义务，而是喜乐。诗人听到邀请去圣殿敬拜时充满了欢喜。当我们真正认识神的美善，敬拜就不再是负担，而成为我们最大的喜乐和渴望。',
          en: 'Going to worship God is not a duty but a joy. The psalmist was filled with gladness at the invitation to worship at the temple. When we truly know God\'s goodness, worship is no longer a burden but our greatest joy and desire.',
        },
        question: {
          zh: '你去教会敬拜时的心态是怎样的？是义务还是喜乐？如何重燃敬拜的热情？',
          en: 'What is your attitude when going to worship? Duty or joy? How can you rekindle your passion for worship?',
        },
        prayer: {
          zh: '主啊，求祢使我像诗人一样，一听到"我们往耶和华的殿去"就满心欢喜。除去我心中对敬拜的倦怠，重新燃起对祢的渴慕和敬拜的热情。奉主耶稣的名祷告，阿们。',
          en: 'Lord, make me like the psalmist — glad when called to go to Your house. Remove any weariness in my heart toward worship and rekindle my longing and passion for You. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '诗篇 127:1',
          ref_en: 'Psalm 127:1',
          text_zh: '若不是耶和华建造房屋，建造的人就枉然劳力；若不是耶和华看守城池，看守的人就枉然警醒。',
          text_en: 'Unless the Lord builds the house, those who build it labor in vain. Unless the Lord watches over the city, the watchman stays awake in vain.',
        },
        reflection: {
          zh: '一切人的努力若没有神的同在和祝福，都是徒劳。这不是说我们不需要工作，而是提醒我们工作的根基必须是神。无论是建造家庭、事业还是教会，都需要先求神的参与。',
          en: 'All human effort without God\'s presence and blessing is in vain. This doesn\'t mean we shouldn\'t work, but reminds us that God must be our foundation. Whether building a family, career, or church, we must first seek God\'s involvement.',
        },
        question: {
          zh: '你正在"建造"什么？你是否邀请了神来参与和主导？',
          en: 'What are you "building"? Have you invited God to participate and lead?',
        },
        prayer: {
          zh: '主啊，若不是祢建造，我一切的努力都是枉然。求祢成为我家庭、工作和服事的根基。我邀请祢来建造、来看守，使我所做的一切都在祢的祝福之下。奉主耶稣的名祷告，阿们。',
          en: 'Lord, unless You build, all my efforts are in vain. Be the foundation of my family, work, and service. I invite You to build and watch over all I do, that everything may be under Your blessing. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '诗篇 130:1-2',
          ref_en: 'Psalm 130:1-2',
          text_zh: '耶和华啊，我从深处向你求告！主啊，求你听我的声音！愿你侧耳听我恳求的声音！',
          text_en: 'Out of the depths I cry to you, O Lord! O Lord, hear my voice! Let your ears be attentive to the voice of my pleas for mercy!',
        },
        reflection: {
          zh: '"深处"代表人生的最低谷——罪的深渊、苦难的深处、绝望的底层。但正是在深处，诗人向神呼求。最深的痛苦可以成为最深祷告的起点。神的耳朵总是侧向那些从深处呼求的人。',
          en: '"The depths" represent life\'s lowest valleys — the pit of sin, the depths of suffering, the bottom of despair. Yet from the depths, the psalmist cries to God. The deepest pain can become the starting point of the deepest prayer. God\'s ears are always attentive to those who cry from the depths.',
        },
        question: {
          zh: '你是否正处于人生的"深处"？你是否愿意从那里向神发出真实的呼求？',
          en: 'Are you in the "depths" of life right now? Are you willing to cry out to God from that place?',
        },
        prayer: {
          zh: '耶和华啊，我从深处向祢求告！求祢听我的声音，侧耳听我恳求的声音。在我最黑暗的时刻，祢是我唯一的盼望。求祢从深处拯救我，将我带到光明之中。奉主耶稣的名祷告，阿们。',
          en: 'Out of the depths I cry to You, O Lord! Hear my voice; let Your ears be attentive to my pleas for mercy. In my darkest moments, You are my only hope. Rescue me from the depths and bring me into the light. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '诗篇 150:6',
          ref_en: 'Psalm 150:6',
          text_zh: '凡有气息的都要赞美耶和华！你们要赞美耶和华！',
          text_en: 'Let everything that has breath praise the Lord! Praise the Lord!',
        },
        reflection: {
          zh: '诗篇以赞美开始，也以赞美结束。最后这句是对一切有生命之物的呼召——只要你还有一口气息，就要赞美耶和华。赞美不需要等到一切完美，赞美就是我们存在的目的。',
          en: 'The Psalms begin with praise and end with praise. This final verse is a call to every living thing — as long as you have breath, praise the Lord. Praise doesn\'t wait until everything is perfect; praise is the very purpose of our existence.',
        },
        question: {
          zh: '你今天有哪些理由可以赞美神？即使在困难中，你能否找到赞美的理由？',
          en: 'What reasons do you have to praise God today? Even in difficulty, can you find reasons to praise?',
        },
        prayer: {
          zh: '耶和华啊，凡有气息的都要赞美祢！我今天要用我的气息来赞美祢。无论顺境逆境，祢都配得一切的赞美和荣耀。哈利路亚！奉主耶稣的名祷告，阿们。',
          en: 'Lord, let everything that has breath praise You! Today I will use my breath to praise You. In good times and hard times, You are worthy of all praise and glory. Hallelujah! In Jesus\' name, amen.',
        },
      },
    ],
  },
];
