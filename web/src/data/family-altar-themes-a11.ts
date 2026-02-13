interface Scripture { ref_zh: string; ref_en: string; text_zh: string; text_en: string; }
interface BilingualText { zh: string; en: string; }
interface DevotionalUnit { scripture: Scripture; reflection: BilingualText; question: BilingualText; prayer: BilingualText; }
interface AltarTheme { id: string; name_zh: string; name_en: string; icon: string; devotionals: DevotionalUnit[]; hymnKeywords: string[]; }

export const themesA11: AltarTheme[] = [
  {
    id: 'obedience',
    name_zh: '顺服',
    name_en: 'Obedience',
    icon: '🛤️',
    hymnKeywords: ['顺服', '遵行', 'obey', 'follow'],
    devotionals: [
      {
        scripture: {
          ref_zh: '撒母耳记上 15:22',
          ref_en: '1 Samuel 15:22',
          text_zh: '撒母耳说：耶和华喜悦燔祭和平安祭，岂如喜悦人听从他的话呢？听命胜于献祭；顺从胜于公羊的脂油。',
          text_en: 'And Samuel said, "Has the LORD as great delight in burnt offerings and sacrifices, as in obeying the voice of the LORD? Behold, to obey is better than sacrifice, and to listen than the fat of rams."',
        },
        reflection: {
          zh: '撒母耳清楚地告诉扫罗，神最看重的不是外在的宗教仪式，而是内心真实的顺服。听命胜于献祭，提醒我们不要用忙碌的服事来代替对神话语的遵行。',
          en: 'Samuel made it clear to Saul that God values heartfelt obedience above outward religious ritual. "To obey is better than sacrifice" reminds us never to substitute busy service for true compliance with God\'s word.',
        },
        question: {
          zh: '在你的信仰生活中，是否有用"献祭"（忙碌的服事）来代替"听命"（顺服神的话）的时候？',
          en: 'In your faith journey, have there been times when you substituted "sacrifice" (busy service) for "obedience" (following God\'s word)?',
        },
        prayer: {
          zh: '主啊，求你帮助我明白听命胜于献祭的真理，让我不只是外在忙碌地服事，而是从心里真实地顺服你的话语。奉主耶稣的名祷告，阿们。',
          en: 'Lord, help me understand the truth that obedience is better than sacrifice. Let me not merely be busy in outward service, but truly obey Your word from the heart. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '约翰福音 14:15',
          ref_en: 'John 14:15',
          text_zh: '你们若爱我，就必遵守我的命令。',
          text_en: '"If you love me, you will keep my commandments."',
        },
        reflection: {
          zh: '耶稣将爱与顺服紧密地连结在一起。遵守主的命令不是出于被迫或恐惧，而是出于对主真实的爱。爱是顺服的动力，顺服是爱的表达。',
          en: 'Jesus tightly links love and obedience. Keeping His commandments is not driven by compulsion or fear, but by genuine love for Him. Love motivates obedience, and obedience expresses love.',
        },
        question: {
          zh: '你平时遵行神的命令，更多是出于爱还是出于责任感？如何让爱成为你顺服的真正动力？',
          en: 'When you follow God\'s commands, is it more out of love or a sense of duty? How can love become the true motivation for your obedience?',
        },
        prayer: {
          zh: '主耶稣，求你加增我对你的爱，使我遵守你的命令不是出于勉强，而是因为深深爱你。让我的顺服成为爱的自然流露。奉主耶稣的名祷告，阿们。',
          en: 'Lord Jesus, increase my love for You so that I keep Your commandments not out of compulsion but out of deep love. Let my obedience flow naturally from love. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '雅各书 1:22',
          ref_en: 'James 1:22',
          text_zh: '只是你们要行道，不要单单听道，自己欺哄自己。',
          text_en: 'But be doers of the word, and not hearers only, deceiving yourselves.',
        },
        reflection: {
          zh: '雅各警告我们，听道而不行道等于自欺。真正的顺服不是停留在知识层面，而是将所听到的神的话语付诸实践，在日常生活中活出来。',
          en: 'James warns that hearing the word without doing it is self-deception. True obedience goes beyond head knowledge—it puts God\'s word into practice in everyday life.',
        },
        question: {
          zh: '最近你听到的哪一段神的话语还没有付诸行动？今天可以怎样开始"行道"？',
          en: 'Which passage of God\'s word have you heard recently but not yet acted upon? How can you start being a "doer" today?',
        },
        prayer: {
          zh: '天父，求你不让我只做听道的人，而是做行道的人。帮助我将你的话语切实地活在每一天的生活中，不自欺欺人。奉主耶稣的名祷告，阿们。',
          en: 'Heavenly Father, do not let me be a hearer only, but a doer of Your word. Help me live out Your truth practically every day and not deceive myself. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '路加福音 11:28',
          ref_en: 'Luke 11:28',
          text_zh: '耶稣说：是，却还不如听神之道而遵守的人有福。',
          text_en: 'But he said, "Blessed rather are those who hear the word of God and keep it!"',
        },
        reflection: {
          zh: '耶稣指出，真正的福分不在于外在的身份或关系，而在于听神的道并遵守。顺服神话语的人才是真正蒙福的人，这种福分超越一切世俗的羡慕。',
          en: 'Jesus points out that true blessedness lies not in outward status or relationships but in hearing God\'s word and keeping it. Those who obey His word are truly blessed—a blessing surpassing all earthly envy.',
        },
        question: {
          zh: '你是否相信顺服神的话语会带来真正的福分？在哪些方面你经历过"听道而遵守"带来的祝福？',
          en: 'Do you believe obeying God\'s word brings true blessing? In what areas have you experienced the blessedness of hearing and keeping His word?',
        },
        prayer: {
          zh: '主耶稣，感谢你应许听道而遵守的人有福。求你帮助我渴慕并遵行你的话语，使我经历你所赐真正的福分。奉主耶稣的名祷告，阿们。',
          en: 'Lord Jesus, thank You for the promise that those who hear and keep Your word are blessed. Help me long for and obey Your word so I may experience Your true blessing. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '诗篇 119:97',
          ref_en: 'Psalm 119:97',
          text_zh: '我何等爱慕你的律法，终日不住地思想。',
          text_en: 'Oh how I love your law! It is my meditation all the day.',
        },
        reflection: {
          zh: '诗人对神律法的爱慕不是短暂的热情，而是终日不住地思想。真正的顺服源于对神话语的热爱，当我们爱慕神的律法时，遵行就成为喜乐而非重担。',
          en: 'The psalmist\'s love for God\'s law is not fleeting passion but all-day meditation. True obedience springs from loving God\'s word; when we delight in His law, obeying becomes joy rather than burden.',
        },
        question: {
          zh: '你对神话语的态度是爱慕还是觉得枯燥？如何培养"终日思想"神律法的习惯？',
          en: 'Is your attitude toward God\'s word one of delight or dryness? How can you cultivate the habit of meditating on His law "all the day"?',
        },
        prayer: {
          zh: '主啊，求你将爱慕你律法的心放在我里面，让我终日思想你的话语，以遵行你的旨意为喜乐，而不是视之为重担。奉主耶稣的名祷告，阿们。',
          en: 'Lord, place in me a heart that loves Your law. Let me meditate on Your word all day long and find joy—not burden—in doing Your will. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '马太福音 28:19-20',
          ref_en: 'Matthew 28:19-20',
          text_zh: '所以，你们要去，使万民作我的门徒，奉父、子、圣灵的名给他们施洗。凡我所吩咐你们的，都教训他们遵守，我就常与你们同在，直到世界的末了。',
          text_en: '"Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, teaching them to observe all that I have commanded you. And behold, I am with you always, to the end of the age."',
        },
        reflection: {
          zh: '大使命不仅是传福音，更是教导人遵守主所吩咐的一切。顺服的生命是门徒训练的核心，而主应许与顺服祂命令的人同在，直到世界的末了。',
          en: 'The Great Commission is not only about evangelism but about teaching people to observe all Christ commanded. An obedient life is the heart of discipleship, and the Lord promises His presence with those who obey, to the end of the age.',
        },
        question: {
          zh: '你在遵行主所吩咐的"一切"命令上，是否有选择性地顺服？哪些方面需要更完全的遵行？',
          en: 'Are you selective about which of the Lord\'s commands you obey? In which areas do you need more complete obedience?',
        },
        prayer: {
          zh: '主耶稣，感谢你应许常与我们同在。求你帮助我不选择性地顺服，而是遵行你所吩咐的一切，经历你同在的真实。奉主耶稣的名祷告，阿们。',
          en: 'Lord Jesus, thank You for promising to be with us always. Help me not to be selective in my obedience but to observe all You have commanded, experiencing the reality of Your presence. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '腓立比书 2:8',
          ref_en: 'Philippians 2:8',
          text_zh: '既有人的样子，就自己卑微，存心顺服，以至于死，且死在十字架上。',
          text_en: 'And being found in human form, he humbled himself by becoming obedient to the point of death, even death on a cross.',
        },
        reflection: {
          zh: '基督的顺服是最彻底的顺服——以至于死，且死在十字架上。祂的榜样告诉我们，真正的顺服需要谦卑和舍己，即使代价极大也不退缩。',
          en: 'Christ\'s obedience was the most radical kind—obedient to the point of death on a cross. His example shows that true obedience requires humility and self-denial, without shrinking back even at the greatest cost.',
        },
        question: {
          zh: '基督顺服至死的榜样如何激励你在困难中仍然顺服神？你愿意为顺服神付上什么代价？',
          en: 'How does Christ\'s obedience unto death inspire you to remain obedient amid difficulty? What cost are you willing to pay to obey God?',
        },
        prayer: {
          zh: '主耶稣，感谢你为我存心顺服，以至于死在十字架上。求你赐我谦卑和舍己的心，效法你的榜样，在任何处境中都甘心顺服天父。奉主耶稣的名祷告，阿们。',
          en: 'Lord Jesus, thank You for humbling Yourself and becoming obedient to death on the cross for me. Grant me humility and self-denial to follow Your example and willingly obey the Father in every circumstance. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '希伯来书 11:8',
          ref_en: 'Hebrews 11:8',
          text_zh: '亚伯拉罕因着信，蒙召的时候就遵命出去，往将来要得为业的地方去；出去的时候，还不知往哪里去。',
          text_en: 'By faith Abraham obeyed when he was called to go out to a place that he was to receive as an inheritance. And he went out, not knowing where he was going.',
        },
        reflection: {
          zh: '亚伯拉罕的顺服是信心的顺服——他还不知往哪里去，就遵命出发了。顺服常常意味着在不确定中信靠神，凭信心而非凭眼见踏出每一步。',
          en: 'Abraham\'s obedience was faith-driven—he obeyed and set out without knowing where he was going. Obedience often means trusting God amid uncertainty, walking by faith and not by sight.',
        },
        question: {
          zh: '你是否愿意像亚伯拉罕一样，在还不清楚前方道路时就凭信心顺服神的呼召？',
          en: 'Are you willing, like Abraham, to obey God\'s call by faith even when the road ahead is unclear?',
        },
        prayer: {
          zh: '天父，求你赐我像亚伯拉罕一样的信心，即使不知前方道路，也愿意凭信心遵命出去。帮助我信靠你的引领，勇敢踏出顺服的每一步。奉主耶稣的名祷告，阿们。',
          en: 'Heavenly Father, give me faith like Abraham\'s—willing to obey and go out even when I don\'t know the way. Help me trust Your leading and bravely take each step of obedience. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '申命记 10:12-13',
          ref_en: 'Deuteronomy 10:12-13',
          text_zh: '以色列啊，现在耶和华你神向你所要的是什么呢？只要你敬畏耶和华你的神，遵行他的道，爱他，尽心尽性侍奉他，遵守他的诫命律例，就是我今日所吩咐你的，为要叫你得福。',
          text_en: '"And now, Israel, what does the LORD your God require of you, but to fear the LORD your God, to walk in all his ways, to love him, to serve the LORD your God with all your heart and with all your soul, and to keep the commandments and statutes of the LORD, which I am commanding you today for your good?"',
        },
        reflection: {
          zh: '神向祂子民所要的并不复杂：敬畏、遵行、爱祂、侍奉祂、遵守诫命。而且这一切是"为要叫你得福"——神的命令不是为了辖制我们，而是为了我们的好处。',
          en: 'What God requires is not complicated: fear Him, walk in His ways, love Him, serve Him, keep His commands. And all this is "for your good"—God\'s commands are not to control us but for our benefit.',
        },
        question: {
          zh: '你是否认为神的诫命是为了你的好处？在哪些方面你经历过遵行神命令所带来的福分？',
          en: 'Do you see God\'s commands as being for your good? In what ways have you experienced blessing from obeying His commandments?',
        },
        prayer: {
          zh: '主啊，感谢你的诫命是为了叫我得福。求你帮助我敬畏你、遵行你的道、爱你并尽心侍奉你，经历顺服所带来的丰盛祝福。奉主耶稣的名祷告，阿们。',
          en: 'Lord, thank You that Your commands are for my good. Help me fear You, walk in Your ways, love You, and serve You wholeheartedly, experiencing the abundant blessings of obedience. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '约翰福音 15:10',
          ref_en: 'John 15:10',
          text_zh: '你们若遵守我的命令，就常在我的爱里，正如我遵守了我父的命令，常在他的爱里。',
          text_en: '"If you keep my commandments, you will abide in my love, just as I have kept my Father\'s commandments and abide in his love."',
        },
        reflection: {
          zh: '耶稣揭示了顺服与爱的深层关系：遵守主的命令使我们常在祂的爱里。顺服不是失去自由，而是进入更深的爱的关系中，正如耶稣与天父的关系。',
          en: 'Jesus reveals the deep connection between obedience and love: keeping His commands lets us abide in His love. Obedience is not losing freedom but entering a deeper relationship of love, just as Jesus abides in the Father\'s love.',
        },
        question: {
          zh: '你是否经历过因顺服而更深地感受到主的爱？"常在主爱里"对你意味着什么？',
          en: 'Have you experienced a deeper sense of the Lord\'s love through obedience? What does "abiding in His love" mean to you?',
        },
        prayer: {
          zh: '主耶稣，我渴望常在你的爱里。求你帮助我遵守你的命令，使我与你的关系更加亲密，在顺服中经历你深厚的爱。奉主耶稣的名祷告，阿们。',
          en: 'Lord Jesus, I long to abide in Your love. Help me keep Your commandments so my relationship with You deepens and I experience Your profound love through obedience. In Jesus\' name, amen.',
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
          zh: '神的话语如灯照亮我们脚前的路，指引我们每一步。顺服神的话语不是盲目的跟从，而是在光中行走，让神的真理照亮我们人生的方向。',
          en: 'God\'s word is a lamp lighting the path before us, guiding every step. Obeying His word is not blind following but walking in light, letting His truth illuminate our life\'s direction.',
        },
        question: {
          zh: '在你面临抉择时，是否习惯以神的话语作为"脚前的灯"来引导你的决定？',
          en: 'When facing decisions, do you habitually use God\'s word as a "lamp to your feet" to guide your choices?',
        },
        prayer: {
          zh: '主啊，感谢你的话语是我脚前的灯、路上的光。求你帮助我在每个抉择中都以你的话语为指引，顺服你所照亮的道路。奉主耶稣的名祷告，阿们。',
          en: 'Lord, thank You that Your word is a lamp to my feet and a light to my path. Help me let Your word guide every decision and obediently follow the path You illuminate. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '马太福音 7:13-14',
          ref_en: 'Matthew 7:13-14',
          text_zh: '你们要进窄门。因为引到灭亡，那门是宽的，路是大的，进去的人也多；引到永生，那门是窄的，路是小的，找着的人也少。',
          text_en: '"Enter by the narrow gate. For the gate is wide and the way is easy that leads to destruction, and those who enter by it are many. For the gate is narrow and the way is hard that leads to life, and those who find it are few."',
        },
        reflection: {
          zh: '耶稣呼召我们走窄路、进窄门。顺服神的道路往往不是容易的路，但这条窄路引向永生。选择顺服就是选择走一条人少但通向生命的道路。',
          en: 'Jesus calls us to the narrow gate and the hard way. The path of obedience is often not the easy path, but this narrow way leads to life. Choosing obedience means choosing a less-traveled road that leads to life.',
        },
        question: {
          zh: '在信仰生活中，你是否有因为"路太窄"而选择了宽门大路的时候？如何坚持走窄路？',
          en: 'In your faith life, have you ever chosen the wide gate because the narrow way seemed too hard? How can you persevere on the narrow path?',
        },
        prayer: {
          zh: '主耶稣，求你赐我勇气和力量选择窄门窄路，即使这条路不容易，也不随从世界走宽大的路。帮助我坚定地顺服你，走向永生。奉主耶稣的名祷告，阿们。',
          en: 'Lord Jesus, give me courage and strength to choose the narrow gate, even when it\'s difficult, and not follow the wide way of the world. Help me steadfastly obey You on the path to life. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '路加福音 9:23',
          ref_en: 'Luke 9:23',
          text_zh: '耶稣又对众人说：若有人要跟从我，就当舍己，天天背起他的十字架来跟从我。',
          text_en: 'And he said to all, "If anyone would come after me, let him deny himself and take up his cross daily and follow me."',
        },
        reflection: {
          zh: '跟从耶稣的代价是舍己和天天背十字架。顺服不是偶尔的决定，而是每天的选择——每天放下自己的意愿，背起十字架跟随主。',
          en: 'Following Jesus costs self-denial and daily cross-bearing. Obedience is not an occasional decision but a daily choice—laying down our own will each day and taking up our cross to follow Him.',
        },
        question: {
          zh: '"天天背起十字架"对你来说意味着什么？今天你需要在哪件事上舍己来顺服主？',
          en: 'What does "taking up your cross daily" mean for you? In what area do you need to deny yourself today to obey the Lord?',
        },
        prayer: {
          zh: '主耶稣，求你帮助我天天舍己，背起我的十字架来跟从你。不让我的意愿拦阻我顺服你的带领，而是每天重新委身于你。奉主耶稣的名祷告，阿们。',
          en: 'Lord Jesus, help me deny myself daily and take up my cross to follow You. Don\'t let my own will hinder me from obeying Your leading; let me recommit to You each day. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '撒母耳记上 3:10',
          ref_en: '1 Samuel 3:10',
          text_zh: '耶和华又来站着，像前三次呼唤说：撒母耳啊！撒母耳啊！撒母耳回答说：请说，仆人敬听！',
          text_en: 'And the LORD came and stood, calling as at other times, "Samuel! Samuel!" And Samuel said, "Speak, for your servant hears."',
        },
        reflection: {
          zh: '年幼的撒母耳以"请说，仆人敬听"回应神的呼召，展现了顺服的第一步：聆听。在行动之前，我们需要先安静下来，留心听神的声音，预备好顺服的心。',
          en: 'Young Samuel responded to God\'s call with "Speak, for your servant hears," showing obedience\'s first step: listening. Before acting, we must quiet ourselves, listen for God\'s voice, and prepare hearts ready to obey.',
        },
        question: {
          zh: '你是否有"仆人敬听"的态度？在忙碌中你如何安静下来聆听神对你说话？',
          en: 'Do you have the attitude of "your servant hears"? How do you quiet yourself amid busyness to listen to God speaking to you?',
        },
        prayer: {
          zh: '主啊，求你帮助我像撒母耳一样说"请说，仆人敬听"。让我在忙碌中安静下来，留心聆听你的声音，并预备好顺服的心来回应你。奉主耶稣的名祷告，阿们。',
          en: 'Lord, help me say like Samuel, "Speak, for your servant hears." Let me quiet myself amid busyness, listen attentively for Your voice, and prepare an obedient heart to respond. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '希伯来书 5:8',
          ref_en: 'Hebrews 5:8',
          text_zh: '他虽然为儿子，还是因所受的苦难学了顺从。',
          text_en: 'Although he was a son, he learned obedience through what he suffered.',
        },
        reflection: {
          zh: '连神的儿子耶稣都是藉着苦难学习顺从，何况我们呢？苦难不是神的惩罚，而是塑造我们顺服品格的学校。在受苦中学习顺从，是属灵生命成熟的标志。',
          en: 'Even God\'s Son Jesus learned obedience through suffering—how much more must we? Suffering is not God\'s punishment but a school shaping our character of obedience. Learning to obey through hardship is a mark of spiritual maturity.',
        },
        question: {
          zh: '你是否能从过去经历的苦难中看到神在教导你学习顺从？苦难如何塑造了你的顺服？',
          en: 'Can you see how God used past suffering to teach you obedience? How has hardship shaped your submission to Him?',
        },
        prayer: {
          zh: '主耶稣，你虽是神的儿子，还因苦难学了顺从。求你帮助我在苦难中不抱怨，而是学习顺服，让试炼成为塑造我品格的器皿。奉主耶稣的名祷告，阿们。',
          en: 'Lord Jesus, though You were the Son, You learned obedience through suffering. Help me not to complain in hardship but to learn submission, letting trials shape my character. In Jesus\' name, amen.',
        },
      },
    ],
  },
  {
    id: 'evangelism',
    name_zh: '传福音',
    name_en: 'Evangelism',
    icon: '📢',
    hymnKeywords: ['福音', '使命', 'gospel', 'mission'],
    devotionals: [
      {
        scripture: {
          ref_zh: '马太福音 28:19-20',
          ref_en: 'Matthew 28:19-20',
          text_zh: '所以，你们要去，使万民作我的门徒，奉父、子、圣灵的名给他们施洗。凡我所吩咐你们的，都教训他们遵守，我就常与你们同在，直到世界的末了。',
          text_en: '"Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, teaching them to observe all that I have commanded you. And behold, I am with you always, to the end of the age."',
        },
        reflection: {
          zh: '大使命是主耶稣升天前给每一个门徒的命令，不只是牧师和宣教士的责任。"使万民作门徒"是我们每个基督徒的使命，而主应许祂的同在是我们传福音最大的保障。',
          en: 'The Great Commission is Christ\'s command to every disciple, not just pastors and missionaries. "Make disciples of all nations" is every Christian\'s mission, and the Lord\'s promised presence is our greatest assurance in evangelism.',
        },
        question: {
          zh: '你是否认为传福音只是牧师和宣教士的事？大使命如何与你个人的生活相关？',
          en: 'Do you think evangelism is only for pastors and missionaries? How does the Great Commission relate to your personal life?',
        },
        prayer: {
          zh: '主耶稣，感谢你将大使命托付给每一个跟随你的人。求你帮助我在日常生活中忠心地使人作你的门徒，靠着你同在的应许勇敢前行。奉主耶稣的名祷告，阿们。',
          en: 'Lord Jesus, thank You for entrusting the Great Commission to everyone who follows You. Help me faithfully make disciples in daily life, going forward boldly on the strength of Your promised presence. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '使徒行传 1:8',
          ref_en: 'Acts 1:8',
          text_zh: '但圣灵降临在你们身上，你们就必得着能力，并要在耶路撒冷、犹太全地和撒马利亚，直到地极，作我的见证。',
          text_en: '"But you will receive power when the Holy Spirit has come upon you, and you will be my witnesses in Jerusalem and in all Judea and Samaria, and to the end of the earth."',
        },
        reflection: {
          zh: '传福音的能力不是来自我们自己，而是来自圣灵。从耶路撒冷到地极，主为我们设定了由近及远的见证范围。我们需要先在身边作见证，然后逐步扩展到更远的地方。',
          en: 'The power for evangelism comes not from ourselves but from the Holy Spirit. From Jerusalem to the ends of the earth, the Lord sets a near-to-far scope. We start witnessing nearby and gradually extend further.',
        },
        question: {
          zh: '你的"耶路撒冷"（最近的传福音禾场）是哪里？你是否依靠圣灵的能力来为主作见证？',
          en: 'Where is your "Jerusalem" (nearest mission field)? Are you relying on the Holy Spirit\'s power to witness for the Lord?',
        },
        prayer: {
          zh: '圣灵啊，求你降临在我身上，赐我能力为主作见证。从我的家庭、职场到更远的地方，帮助我忠心地传扬福音，直到地极。奉主耶稣的名祷告，阿们。',
          en: 'Holy Spirit, come upon me and grant me power to witness for the Lord. From my family and workplace to places far beyond, help me faithfully proclaim the gospel to the ends of the earth. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '罗马书 10:14-15',
          ref_en: 'Romans 10:14-15',
          text_zh: '然而，人未曾信他，怎能求他呢？未曾听见他，怎能信他呢？没有传道的，怎能听见呢？若没有奉差遣，怎能传道呢？如经上所记：报福音、传喜信的人，他们的脚踪何等佳美！',
          text_en: 'How then will they call on him in whom they have not believed? And how are they to believe in him of whom they have never heard? And how are they to hear without someone preaching? And how are they to preach unless they are sent? As it is written, "How beautiful are the feet of those who preach the good news!"',
        },
        reflection: {
          zh: '保罗以一连串的反问揭示了传福音的迫切性：人若没有听见，就不能信。传福音的人是信与不信之间的桥梁，报福音之人的脚踪何等佳美！',
          en: 'Paul\'s chain of rhetorical questions reveals the urgency of evangelism: people cannot believe if they have not heard. The evangelist is the bridge between belief and unbelief—how beautiful are the feet of those who bring good news!',
        },
        question: {
          zh: '在你身边有谁还没有听过福音？你愿意成为那个"报福音、传喜信"的人吗？',
          en: 'Who around you has not yet heard the gospel? Are you willing to be the one who brings good news?',
        },
        prayer: {
          zh: '主啊，求你让我看见身边还没有听过福音之人的需要，赐我勇气和热情成为报福音传喜信的人，使我的脚踪在你眼中看为佳美。奉主耶稣的名祷告，阿们。',
          en: 'Lord, help me see the needs of those around me who have not heard the gospel. Give me courage and passion to be one who brings good news, making my footsteps beautiful in Your sight. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '罗马书 1:16',
          ref_en: 'Romans 1:16',
          text_zh: '我不以福音为耻；这福音本是神的大能，要救一切相信的，先是犹太人，后是希腊人。',
          text_en: 'For I am not ashamed of the gospel, for it is the power of God for salvation to everyone who believes, to the Jew first and also to the Greek.',
        },
        reflection: {
          zh: '保罗宣告他不以福音为耻，因为福音是神的大能。我们传福音时不必胆怯或羞愧，因为我们所传的不是人的道理，而是拯救灵魂的神的大能。',
          en: 'Paul declares he is not ashamed of the gospel because it is the power of God for salvation. We need not be timid or ashamed in evangelism, for what we proclaim is not human philosophy but God\'s saving power.',
        },
        question: {
          zh: '你曾否因为怕被人嘲笑或拒绝而不敢传福音？如何才能像保罗一样"不以福音为耻"？',
          en: 'Have you ever been afraid to share the gospel for fear of ridicule or rejection? How can you be "not ashamed of the gospel" like Paul?',
        },
        prayer: {
          zh: '主啊，求你除去我传福音时的胆怯和羞耻感，让我像保罗一样不以福音为耻，因为福音本是你拯救世人的大能。奉主耶稣的名祷告，阿们。',
          en: 'Lord, remove my timidity and shame in sharing the gospel. Let me be unashamed like Paul, for the gospel is Your power for salvation. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '彼得前书 3:15',
          ref_en: '1 Peter 3:15',
          text_zh: '只要心里尊主基督为圣。有人问你们心中盼望的缘由，就要常作准备，以温柔、敬畏的心回答各人。',
          text_en: 'But in your hearts honor Christ the Lord as holy, always being prepared to make a defense to anyone who asks you for a reason for the hope that is in you; yet do it with gentleness and respect.',
        },
        reflection: {
          zh: '彼得提醒我们传福音需要两个预备：内心尊主为圣，并且随时准备好为信仰作见证。同时，传福音的态度也很重要——以温柔和敬畏的心回答，而非争辩和论断。',
          en: 'Peter reminds us evangelism requires two preparations: honoring Christ as holy in our hearts and always being ready to give an answer for our hope. The manner matters too—respond with gentleness and respect, not argument and judgment.',
        },
        question: {
          zh: '如果有人今天问你为什么信耶稣，你准备好怎样回答了吗？你能用温柔敬畏的态度分享你的信仰吗？',
          en: 'If someone asked you today why you believe in Jesus, would you be ready to answer? Can you share your faith with gentleness and respect?',
        },
        prayer: {
          zh: '主啊，帮助我心里常尊你为圣，随时准备好为我心中的盼望作出回答。赐我温柔和敬畏的态度，让人在我的回答中看见你的爱。奉主耶稣的名祷告，阿们。',
          en: 'Lord, help me always honor You as holy in my heart and be ready to give an answer for the hope within me. Grant me gentleness and respect so others see Your love in my response. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '哥林多前书 3:9',
          ref_en: '1 Corinthians 3:9',
          text_zh: '因为我们是与神同工的；你们是神所耕种的田地，所建造的房屋。',
          text_en: 'For we are God\'s fellow workers. You are God\'s field, God\'s building.',
        },
        reflection: {
          zh: '传福音是与神同工的荣耀特权。我们不是独自劳力，而是与全能的神一起做工。神的子民是祂所耕种的田地、所建造的房屋，而我们有幸参与其中。',
          en: 'Evangelism is the glorious privilege of being God\'s fellow workers. We do not labor alone but work alongside Almighty God. His people are His field and building, and we have the honor of participating in His work.',
        },
        question: {
          zh: '"与神同工"这个身份如何改变你对传福音的看法？知道神与你同工，是否减轻了你的压力？',
          en: 'How does being "God\'s fellow workers" change your view of evangelism? Does knowing God works alongside you relieve some pressure?',
        },
        prayer: {
          zh: '天父，感谢你让我有与你同工的荣耀。帮助我忠心地在你的田地上耕种，在你的工程中建造，知道一切成果都出于你的大能。奉主耶稣的名祷告，阿们。',
          en: 'Heavenly Father, thank You for the glory of being Your fellow worker. Help me faithfully cultivate Your field and build in Your project, knowing all fruit comes from Your power. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '马太福音 5:14-16',
          ref_en: 'Matthew 5:14-16',
          text_zh: '你们是世上的光。城造在山上，是不能隐藏的。人点灯，不放在斗底下，是放在灯台上，就照亮一家的人。你们的光也当这样照在人前，叫他们看见你们的好行为，便将荣耀归给你们在天上的父。',
          text_en: '"You are the light of the world. A city set on a hill cannot be hidden. Nor do people light a lamp and put it under a basket, but on a stand, and it gives light to all in the house. In the same way, let your light shine before others, so that they may see your good works and give glory to your Father who is in heaven."',
        },
        reflection: {
          zh: '耶稣说我们是世上的光，光是不能隐藏的。传福音不只是用口说，更是用生命发光。我们的好行为能让人看见神的荣耀，这本身就是最有力的见证。',
          en: 'Jesus says we are the light of the world—light cannot be hidden. Evangelism is not only spoken words but a life that shines. Our good works display God\'s glory, and that itself is the most powerful witness.',
        },
        question: {
          zh: '你的生活是否像"放在灯台上的灯"一样照亮周围的人？你的好行为是否能引人归荣耀给天父？',
          en: 'Does your life shine like "a lamp on a stand" for those around you? Do your good works lead others to glorify your heavenly Father?',
        },
        prayer: {
          zh: '主耶稣，你说我是世上的光。求你帮助我不把光藏在斗底下，而是放在灯台上照亮周围的人，让他们因看见好行为而将荣耀归给天父。奉主耶稣的名祷告，阿们。',
          en: 'Lord Jesus, You say I am the light of the world. Help me not hide my light under a basket but set it on a stand to shine for others, that they may see good works and glorify the Father in heaven. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '哥林多前书 9:16',
          ref_en: '1 Corinthians 9:16',
          text_zh: '我传福音原没有可夸的，因为我是不得已的。若不传福音，我便有祸了。',
          text_en: 'For if I preach the gospel, that gives me no ground for boasting. For necessity is laid upon me. Woe to me if I do not preach the gospel!',
        },
        reflection: {
          zh: '保罗传福音不是为了自夸，而是出于一种神圣的"不得已"——他深知福音的宝贵和失丧灵魂的危险，传福音是他无法推卸的责任和燃烧的使命感。',
          en: 'Paul preached not to boast but from a holy compulsion—he deeply knew the preciousness of the gospel and the peril of lost souls. Evangelism was an irresistible responsibility and burning sense of mission.',
        },
        question: {
          zh: '你是否也有保罗那样"若不传福音，便有祸了"的紧迫感？是什么拦阻了你传福音的热情？',
          en: 'Do you share Paul\'s urgency of "woe to me if I do not preach the gospel"? What hinders your passion for evangelism?',
        },
        prayer: {
          zh: '主啊，求你将传福音的紧迫感和使命感放在我心中，像保罗一样看传福音为不得已的责任。除去一切拦阻我传福音的障碍。奉主耶稣的名祷告，阿们。',
          en: 'Lord, place in my heart the urgency and sense of mission for evangelism, like Paul who saw it as a divine necessity. Remove every obstacle that hinders me from preaching the gospel. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '哥林多后书 5:20',
          ref_en: '2 Corinthians 5:20',
          text_zh: '所以，我们作基督的使者，就好像神藉我们劝你们一般。我们替基督求你们与神和好。',
          text_en: 'Therefore, we are ambassadors for Christ, God making his appeal through us. We implore you on behalf of Christ, be reconciled to God.',
        },
        reflection: {
          zh: '我们是基督的使者，代表天国向世人发出和好的邀请。传福音就是替基督恳求人们与神和好，这是何等荣耀又神圣的角色和使命！',
          en: 'We are ambassadors for Christ, representing heaven\'s invitation of reconciliation to the world. Evangelism is imploring people on Christ\'s behalf to be reconciled to God—what a glorious and sacred role!',
        },
        question: {
          zh: '作为"基督的使者"，你如何在日常生活中代表基督向人发出与神和好的邀请？',
          en: 'As an "ambassador for Christ," how do you represent Christ in daily life and invite others to be reconciled to God?',
        },
        prayer: {
          zh: '主啊，感谢你让我作基督的使者。求你帮助我忠心地代表你，向身边的人发出与神和好的邀请，让更多人因此归向你。奉主耶稣的名祷告，阿们。',
          en: 'Lord, thank You for making me an ambassador for Christ. Help me faithfully represent You and extend the invitation of reconciliation to those around me, that more may turn to You. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '诗篇 126:5-6',
          ref_en: 'Psalm 126:5-6',
          text_zh: '流泪撒种的，必欢呼收割！那带种流泪出去的，必要欢欢乐乐地带禾捆回来！',
          text_en: 'Those who sow in tears shall reap with shouts of joy! He who goes out weeping, bearing the seed for sowing, shall come home with shouts of joy, bringing his sheaves with him.',
        },
        reflection: {
          zh: '传福音的过程中可能会有眼泪——被拒绝的泪、为灵魂忧伤的泪。但神应许流泪撒种的必欢呼收割，我们的付出和眼泪不会徒然，终必结出丰盛的果实。',
          en: 'Evangelism may involve tears—tears of rejection, tears of sorrow for souls. But God promises that those who sow in tears will reap with joy. Our labor and tears will not be in vain; they will bear abundant fruit.',
        },
        question: {
          zh: '你是否曾在传福音中经历"流泪撒种"的时刻？神的应许如何鼓励你继续坚持？',
          en: 'Have you experienced "sowing in tears" in evangelism? How does God\'s promise of joyful reaping encourage you to persevere?',
        },
        prayer: {
          zh: '主啊，当我在传福音中流泪时，求你坚固我的信心，相信你的应许——流泪撒种的必欢呼收割。帮助我不灰心，持续为灵魂撒种。奉主耶稣的名祷告，阿们。',
          en: 'Lord, when I weep in evangelism, strengthen my faith in Your promise—those who sow in tears shall reap with joy. Help me not lose heart but keep sowing seeds for souls. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '哥林多前书 3:6-7',
          ref_en: '1 Corinthians 3:6-7',
          text_zh: '我栽种了，亚波罗浇灌了，惟有神叫他生长。可见栽种的算不得什么，浇灌的也算不得什么，只在那叫他生长的神。',
          text_en: 'I planted, Apollos watered, but God gave the growth. So neither he who plants nor he who waters is anything, but only God who gives the growth.',
        },
        reflection: {
          zh: '保罗提醒我们，传福音是团队合作，而最终使人生命成长的是神自己。我们不必因为没有立即看到果效而灰心，因为栽种和浇灌都是不可缺少的，但叫人生长的是神。',
          en: 'Paul reminds us that evangelism is teamwork, and ultimately God alone gives growth. We need not be discouraged if we don\'t see immediate results—planting and watering are both essential, but God gives the increase.',
        },
        question: {
          zh: '你是否因为没有看到传福音的"即时果效"而灰心？如何在"栽种"和"浇灌"的角色中忠心？',
          en: 'Have you been discouraged by not seeing immediate results in evangelism? How can you be faithful in your role of "planting" or "watering"?',
        },
        prayer: {
          zh: '主啊，帮助我在传福音时忠心地栽种和浇灌，不因缺乏即时果效而灰心，因为我知道唯有你能叫人的生命生长。奉主耶稣的名祷告，阿们。',
          en: 'Lord, help me faithfully plant and water in evangelism without discouragement over lack of immediate results, for I know only You can give growth. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '帖撒罗尼迦前书 2:4',
          ref_en: '1 Thessalonians 2:4',
          text_zh: '但神既然验中了我们，把福音托付我们，我们就照样讲，不是要讨人喜欢，乃是要讨那察验我们心的神喜欢。',
          text_en: 'But just as we have been approved by God to be entrusted with the gospel, so we speak, not to please man, but to please God who tests our hearts.',
        },
        reflection: {
          zh: '保罗传福音的动机是讨神喜欢而非讨人喜欢。福音是神托付给我们的宝贵使命，我们传讲时当忠于真理，不因迎合人意而妥协福音的信息。',
          en: 'Paul\'s motive in evangelism was to please God, not people. The gospel is a precious trust from God; when we proclaim it, we must be faithful to the truth without compromising the message to please others.',
        },
        question: {
          zh: '你在分享福音时，是否曾因为怕得罪人而淡化或改变福音的信息？如何平衡温柔与忠于真理？',
          en: 'Have you ever diluted or altered the gospel message to avoid offending others? How do you balance gentleness with faithfulness to the truth?',
        },
        prayer: {
          zh: '主啊，你将福音托付了我，求你帮助我忠心地传讲，不讨人的喜欢，乃讨你的喜欢。赐我智慧在温柔中持守真理。奉主耶稣的名祷告，阿们。',
          en: 'Lord, You have entrusted the gospel to me. Help me proclaim it faithfully, seeking to please You rather than people. Grant me wisdom to hold fast to truth with gentleness. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '提摩太后书 4:2',
          ref_en: '2 Timothy 4:2',
          text_zh: '务要传道，无论得时不得时，总要专心；并用百般的忍耐，各样的教训，责备人、警戒人、劝勉人。',
          text_en: 'Preach the word; be ready in season and out of season; reprove, rebuke, and exhort, with complete patience and teaching.',
        },
        reflection: {
          zh: '保罗嘱咐提摩太"无论得时不得时"都要传道。传福音不分时机，不看环境，总要专心预备。同时要用百般忍耐和各样教训，既有责备警戒，也有劝勉鼓励。',
          en: 'Paul charges Timothy to preach "in season and out of season." Evangelism does not depend on favorable timing or circumstances—always be ready. Do so with complete patience and teaching, including reproof, rebuke, and encouragement.',
        },
        question: {
          zh: '你在传福音时是否只选择"得时"的时候？如何预备自己在"不得时"也能忠心传道？',
          en: 'Do you only share the gospel when it feels convenient? How can you prepare yourself to faithfully preach even when it\'s "out of season"?',
        },
        prayer: {
          zh: '主啊，帮助我无论得时不得时都专心传道。赐我百般的忍耐和智慧，用你的话语责备、警戒、劝勉人，使人归向你。奉主耶稣的名祷告，阿们。',
          en: 'Lord, help me be ready to preach in season and out of season. Grant me complete patience and wisdom to reprove, rebuke, and encourage with Your word, drawing people to You. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '以弗所书 6:19',
          ref_en: 'Ephesians 6:19',
          text_zh: '也为我祈求，使我得着口才，能以放胆开口讲明福音的奥秘。',
          text_en: 'And also for me, that words may be given to me in opening my mouth boldly to proclaim the mystery of the gospel.',
        },
        reflection: {
          zh: '连使徒保罗都需要弟兄姐妹为他祷告，使他有口才和胆量传福音。传福音需要祷告的支持——既为自己祷告求胆量，也为同行的肢体代祷，彼此扶持。',
          en: 'Even the apostle Paul needed prayer from fellow believers for boldness and words in evangelism. Sharing the gospel requires prayer support—praying for our own courage and interceding for fellow believers.',
        },
        question: {
          zh: '你是否常为自己和其他传福音的肢体祷告，求神赐下口才和胆量？你可以为谁代祷？',
          en: 'Do you regularly pray for yourself and other evangelists, asking God for boldness and the right words? Whom can you intercede for?',
        },
        prayer: {
          zh: '主啊，求你赐我口才和胆量，能放胆开口讲明福音的奥秘。也求你赐福每一个传福音的肢体，使我们彼此代祷、一起同工。奉主耶稣的名祷告，阿们。',
          en: 'Lord, give me words and boldness to proclaim the mystery of the gospel openly. Bless every brother and sister who evangelizes; let us intercede for one another and labor together. In Jesus\' name, amen.',
        },
      },
      {
        scripture: {
          ref_zh: '马太福音 9:37-38',
          ref_en: 'Matthew 9:37-38',
          text_zh: '于是对门徒说：要收的庄稼多，做工的人少。所以，你们当求庄稼的主打发工人出去收他的庄稼。',
          text_en: 'Then he said to his disciples, "The harvest is plentiful, but the laborers are few; therefore pray earnestly to the Lord of the harvest to send out laborers into his harvest."',
        },
        reflection: {
          zh: '耶稣看到庄稼已熟，做工的人却少，心中充满怜悯。祂教导门徒首先要祷告——求庄稼的主差派工人。传福音始于祷告，也需要更多工人起来回应呼召。',
          en: 'Jesus saw the plentiful harvest with few laborers and was filled with compassion. He taught the disciples to pray first—asking the Lord of the harvest to send workers. Evangelism begins with prayer and needs more workers to rise and answer the call.',
        },
        question: {
          zh: '你是否看到身边"庄稼已熟"的福音需要？你愿意成为那个被差派出去的工人吗？',
          en: 'Do you see the ripe harvest around you? Are you willing to be one of the workers sent into the harvest?',
        },
        prayer: {
          zh: '主啊，庄稼多，工人少。求你打发更多工人出去收你的庄稼，也求你差遣我。帮助我看见身边灵魂的需要，甘心乐意地参与你的收割。奉主耶稣的名祷告，阿们。',
          en: 'Lord, the harvest is plentiful but the laborers are few. Send out more workers into Your harvest, and send me too. Help me see the needs of souls around me and joyfully participate in Your harvest. In Jesus\' name, amen.',
        },
      },
    ],
  },
];
