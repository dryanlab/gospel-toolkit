'use client';
import Link from 'next/link';
import SpeakButton from '@/components/SpeakButton';
import { useState } from 'react';

const sections = [
  {
    title_zh: `一、五旬节：教会的诞生（1-2章）`,
    title_en: `I. Pentecost: The Birth of the Church (Ch. 1-2)`,
    content_zh: `使徒行传以耶稣升天前最后的命令开始："但圣灵降临在你们身上，你们就必得着能力，并要在耶路撒冷、犹太全地，和撒玛利亚，直到地极，作我的见证"（1:8）。这节经文是全书的大纲——地理上从耶路撒冷到罗马，神学上从犹太人到外邦人，动力上从人的软弱到圣灵的大能。

五旬节圣灵降临（2章）是教会历史的起点。"忽然，从天上有响声下来，好像一阵大风吹过……又有舌头如火焰显现出来，分开落在他们各人头上"（2:2-3）。风和火都是旧约中神同在的记号。"他们就都被圣灵充满，按着圣灵所赐的口才说起别国的话来"（2:4）——巴别塔的咒诅在这里被逆转了：人类因骄傲而被分散的语言，如今因圣灵而重新合一。

彼得的五旬节讲道（2:14-41）是使徒行传中最重要的一篇。这个三次不认主的渔夫，如今站在耶路撒冷的人群面前大有能力地宣讲：耶稣被交在人手里被钉十字架是"按着神的定旨先见"（2:23），神已经叫他从死里复活（2:24），大卫在诗篇中预言了基督的复活（2:25-31），耶稣已经被高举到神的右边（2:33）。他的呼召直截了当："你们各人要悔改，奉耶稣基督的名受洗，叫你们的罪得赦，就必领受所赐的圣灵"（2:38）。三千人悔改受洗。

初代教会的生活画面（2:42-47）成为历代教会的典范："都恒心遵守使徒的教训，彼此交接，擘饼，祈祷。"四个要素：教导、团契、圣餐、祷告——这不是可选的附加项目，而是教会生活的四根柱子。"信的人都在一处，凡物公用"（2:44）——这不是政治上的共产主义，而是福音改变人心后自然流露的慷慨。`,
    content_en: `Acts opens with Jesus' final command before His ascension: "But ye shall receive power, after that the Holy Ghost is come upon you: and ye shall be witnesses unto me both in Jerusalem, and in all Judaea, and in Samaria, and unto the uttermost part of the earth" (1:8). This verse is the book's outline — geographically from Jerusalem to Rome, theologically from Jews to Gentiles, dynamically from human weakness to the Spirit's power.

The descent of the Holy Spirit at Pentecost (ch. 2) is the starting point of church history. "And suddenly there came a sound from heaven as of a rushing mighty wind... And there appeared unto them cloven tongues like as of fire, and it sat upon each of them" (2:2-3). Wind and fire are both Old Testament signs of God's presence. "And they were all filled with the Holy Ghost, and began to speak with other tongues, as the Spirit gave them utterance" (2:4) — the curse of Babel is here reversed: languages scattered by human pride are reunited by the Holy Spirit.

Peter's Pentecost sermon (2:14-41) is the most important in Acts. The fisherman who denied Christ three times now stands before the Jerusalem crowd and preaches with power: Jesus was delivered to be crucified "by the determinate counsel and foreknowledge of God" (2:23), God raised Him from the dead (2:24), David prophesied Christ's resurrection in the Psalms (2:25-31), Jesus has been exalted to God's right hand (2:33). His call is direct: "Repent, and be baptized every one of you in the name of Jesus Christ for the remission of sins, and ye shall receive the gift of the Holy Ghost" (2:38). Three thousand repented and were baptized.

The portrait of the early church (2:42-47) has been the model for churches in every age: "And they continued stedfastly in the apostles' doctrine and fellowship, and in breaking of bread, and in prayers." Four elements: teaching, fellowship, the Lord's Supper, and prayer — not optional extras but the four pillars of church life. "And all that believed were together, and had all things common" (2:44) — not political communism but the natural generosity that flows from hearts transformed by the gospel.`,
  },
  {
    title_zh: `二、耶路撒冷教会的试炼与司提反殉道（3-7章）`,
    title_en: `II. Trials of the Jerusalem Church and Stephen's Martyrdom (Ch. 3-7)`,
    content_zh: `教会的成长立刻招来了两种攻击：外部的逼迫和内部的罪。彼得医治美门口的瘫子（3章）后被抓到公会受审，他和约翰的回答斩钉截铁："顺从神，不顺从人，是应当的"（5:29）。公会的人看出他们"原是没有学问的小民"，就希奇他们的胆量，"又认明他们是跟过耶稣的"（4:13）——跟过耶稣，这就是胆量的来源。

内部的危机同样严峻。亚拿尼亚和撒非喇欺哄圣灵，当场死亡（5:1-11）——这不是神不讲恩典，而是初代教会必须建立的警戒：在圣灵的时代，虚伪是致命的。

选立七个执事（6:1-7）显示教会在增长中面对的行政挑战——希腊化犹太人（说希腊语的散居犹太人）和希伯来犹太人（说亚拉姆语的本地犹太人）之间的张力。使徒的决定是：我们专心"以祈祷、传道为事"（6:4），让被圣灵充满的人管理饭食。教会的优先次序永远是：话语的服事第一。

司提反是七个执事之一，"满得恩惠、能力，在民间行了大奇事和神迹"（6:8）。他在公会前的长篇讲道（7:2-53）是使徒行传中最长的一篇，从亚伯拉罕讲到摩西讲到所罗门，核心论点是：以色列人历来抵挡圣灵——从旷野拜金牛犊到杀害先知到如今杀害"那义者"。"你们这硬着颈项、心与耳未受割礼的人，常时抗拒圣灵！"（7:51）

他们用石头打死司提反。临死前"他跪下大声喊着说：主啊，不要将这罪归于他们！"（7:60）——像极了十字架上的耶稣。路加特别记下："打死他的人把衣裳放在一个少年人名叫扫罗的脚前"（7:58）——这个扫罗就是后来的保罗。司提反的殉道看似终结，实则是福音突破耶路撒冷、走向全世界的起点。`,
    content_en: `The church's growth immediately drew two kinds of attack: external persecution and internal sin. After Peter healed the lame man at the Beautiful Gate (ch. 3) and was brought before the Sanhedrin, his and John's answer was resolute: "We ought to obey God rather than men" (5:29). The council members saw they were "unlearned and ignorant men" and "marvelled; and they took knowledge of them, that they had been with Jesus" (4:13) — having been with Jesus: this was the source of their boldness.

Internal crises were equally severe. Ananias and Sapphira lied to the Holy Spirit and died on the spot (5:1-11) — not that God withholds grace, but the early church needed this warning: in the age of the Spirit, hypocrisy is fatal.

The appointment of seven deacons (6:1-7) shows the administrative challenges of a growing church — tension between Hellenistic Jews (Greek-speaking Diaspora Jews) and Hebraic Jews (Aramaic-speaking local Jews). The apostles decided: we will devote ourselves to "prayer, and to the ministry of the word" (6:4), letting Spirit-filled men manage the daily distribution. The church's priority is always: the ministry of the Word first.

Stephen, one of the seven, was "full of faith and power, did great wonders and miracles among the people" (6:8). His lengthy speech before the Sanhedrin (7:2-53) is Acts' longest, tracing from Abraham through Moses to Solomon, its central argument being: Israel has always resisted the Holy Spirit — from worshipping the golden calf in the wilderness to killing the prophets to now murdering "the Just One." "Ye stiffnecked and uncircumcised in heart and ears, ye do always resist the Holy Ghost" (7:51).

They stoned Stephen to death. In his final moments "he kneeled down, and cried with a loud voice, Lord, lay not this sin to their charge" (7:60) — echoing Jesus on the cross. Luke specifically notes: "the witnesses laid down their clothes at a young man's feet, whose name was Saul" (7:58) — this Saul is the future Paul. Stephen's martyrdom appears to be an end but is in fact the beginning of the gospel breaking beyond Jerusalem to the whole world.`,
  },
  {
    title_zh: `三、福音突破藩篱：从撒玛利亚到外邦人（8-12章）`,
    title_en: `III. The Gospel Breaks Barriers: From Samaria to the Gentiles (Ch. 8-12)`,
    content_zh: `司提反殉道引发了大逼迫，信徒四散——"那些分散的人往各处去传道"（8:4）。逼迫不是福音的终结，而是福音扩展的手段。腓利把福音带到撒玛利亚（8:5），1:8的第二环应验了。

埃塞俄比亚太监的故事（8:26-39）充满了神的主导权。圣灵引导腓利到旷野的路上，太监正在读以赛亚书53章却不明白。腓利"就从这经上起，对他传讲耶稣"（8:35）——整本旧约都指向基督。太监信而受洗，"欢欢喜喜地走路"——一个非洲官员带着福音回到了非洲。

保罗在大马色路上的归信（9章）是教会历史最重大的转折之一。"扫罗，扫罗！你为什么逼迫我？"（9:4）——注意耶稣说的是"逼迫我"而不是"逼迫我的教会"。基督与教会的联合如此真实，逼迫信徒就是逼迫基督自己。那个呼吸威吓凶杀之气的法利赛人，三天之后变成了"在各会堂里宣传耶稣，说他是神的儿子"（9:20）的使徒。只有神的恩典能解释这种转变。

然而使徒行传最具神学突破性的事件是彼得在哥尼流家的经历（10章）。神三次降下异象教导彼得"神所洁净的，你不可当作俗物"（10:15）。当彼得在哥尼流家传讲福音时，"圣灵降在一切听道的人身上"（10:44）——犹太信徒惊讶："圣灵的恩赐也浇在外邦人身上了"（10:45）。这是教会历史的分水岭：救恩不是犹太人的专利，而是给万民的。安提阿的信徒第一次被称为"基督徒"（11:26）——在这个外邦城市，一个新的身份诞生了。`,
    content_en: `Stephen's martyrdom triggered widespread persecution, and believers scattered — "they that were scattered abroad went every where preaching the word" (8:4). Persecution is not the end of the gospel but the means of its expansion. Philip brought the gospel to Samaria (8:5); the second ring of 1:8 was fulfilled.

The Ethiopian eunuch's story (8:26-39) is full of God's initiative. The Spirit directed Philip to a desert road where the eunuch was reading Isaiah 53 but did not understand. Philip "began at the same scripture, and preached unto him Jesus" (8:35) — all of the Old Testament points to Christ. The eunuch believed and was baptized, and "went on his way rejoicing" — an African official carried the gospel back to Africa.

Paul's conversion on the Damascus road (ch. 9) is one of church history's most momentous turning points. "Saul, Saul, why persecutest thou me?" (9:4) — note Jesus says "persecute me," not "my church." The union between Christ and His church is so real that persecuting believers is persecuting Christ Himself. The Pharisee who breathed threats and slaughter, three days later "preached Christ in the synagogues, that he is the Son of God" (9:20). Only divine grace can explain such transformation.

Yet Acts' most theologically groundbreaking event is Peter's experience at Cornelius' house (ch. 10). God sent a vision three times teaching Peter, "What God hath cleansed, that call not thou common" (10:15). While Peter preached the gospel in Cornelius' house, "the Holy Ghost fell on all them which heard the word" (10:44) — the Jewish believers were astonished: "on the Gentiles also was poured out the gift of the Holy Ghost" (10:45). This is the watershed of church history: salvation is not a Jewish exclusive but is for all peoples. The believers in Antioch were first called "Christians" (11:26) — in this Gentile city, a new identity was born.`,
  },
  {
    title_zh: `四、保罗的宣教旅程：从亚洲到欧洲（13-21章）`,
    title_en: `IV. Paul's Missionary Journeys: From Asia to Europe (Ch. 13-21)`,
    content_zh: `安提阿教会在祷告中"圣灵说：要为我分派巴拿巴和扫罗，去做我召他们所做的工"（13:2）。宣教不是人的计划，而是圣灵的差遣。三次宣教旅程把福音从叙利亚带到小亚细亚、马其顿、希腊，最终指向罗马。

第一次旅程（13-14章）建立了一个重要模式：保罗先进会堂向犹太人传道，被拒绝后转向外邦人。彼西底安提阿的讲道（13:16-41）是保罗宣教讲道的典范——从旧约历史讲到基督的死和复活。当犹太人弃绝福音时，保罗和巴拿巴说了一句划时代的话："我们转向外邦人去！"（13:46）

耶路撒冷大会（15章）是初代教会最关键的决定：外邦信徒不需要受割礼和遵守摩西律法才能得救。"我们得救乃是因主耶稣的恩，和他们一样"（15:11）。这不是废掉律法，而是确认：得救唯独靠恩典、唯独藉着信心。

第二次旅程（15:36-18:22）是最具戏剧性的。"圣灵既然禁止他们在亚细亚讲道"（16:6），又有马其顿人在异象中呼唤"请你过到马其顿来帮助我们"（16:9）——福音由此进入欧洲。腓立比的吕底亚（16:14）是欧洲的第一个信徒；腓立比的禁卒在地震后问出全圣经最关键的问题："我当怎样行才可以得救？"保罗的回答简洁而完全："当信主耶稣，你和你一家都必得救"（16:30-31）。

雅典的亚略巴古讲道（17:22-31）是基督教护教学的经典。保罗不是简单地引用圣经（雅典人不认识圣经），而是从"未识之神"的祭坛出发，用希腊人能理解的方式阐述独一真神和基督的复活。他引用了希腊诗人的话（"我们也是他所生的"，17:28），建立共同基础后指向基督。

以弗所的告别讲话（20:17-38）是保罗最感人的牧者宣言："我凡事给你们作榜样，叫你们知道应当这样劳苦，扶助软弱的人，又当记念主耶稣的话，说：施比受更为有福"（20:35）。这最后一句主的话不见于四福音书——保罗保存了一个未被记录的耶稣传统。`,
    content_en: `The Antioch church was praying when "the Holy Ghost said, Separate me Barnabas and Saul for the work whereunto I have called them" (13:2). Mission is not human planning but the Spirit's sending. Three missionary journeys carried the gospel from Syria to Asia Minor, Macedonia, Greece, and ultimately toward Rome.

The first journey (ch. 13-14) established a key pattern: Paul first entered the synagogue to preach to Jews; when rejected, he turned to the Gentiles. The sermon at Pisidian Antioch (13:16-41) is a model of Pauline missionary preaching — from Old Testament history to Christ's death and resurrection. When the Jews rejected the gospel, Paul and Barnabas made an epoch-making declaration: "Lo, we turn to the Gentiles" (13:46).

The Jerusalem Council (ch. 15) was the early church's most critical decision: Gentile believers need not be circumcised or keep the Mosaic law to be saved. "We believe that through the grace of the Lord Jesus Christ we shall be saved, even as they" (15:11). This did not abolish the law but confirmed: salvation is by grace alone, through faith alone.

The second journey (15:36-18:22) was the most dramatic. "The Holy Ghost suffered them not" to preach in Asia (16:6), and a man of Macedonia appeared in a vision saying, "Come over into Macedonia, and help us" (16:9) — the gospel thus entered Europe. Lydia of Philippi (16:14) was Europe's first convert; the Philippian jailer, after the earthquake, asked the most pivotal question in all Scripture: "What must I do to be saved?" Paul's answer was concise and complete: "Believe on the Lord Jesus Christ, and thou shalt be saved, and thy house" (16:30-31).

The Areopagus sermon in Athens (17:22-31) is a classic of Christian apologetics. Paul did not simply quote Scripture (Athenians did not know it) but began with the "unknown god" altar, presenting the one true God and Christ's resurrection in terms Greeks could understand. He quoted Greek poets ("For we are also his offspring," 17:28), establishing common ground before pointing to Christ.

The Ephesus farewell (20:17-38) is Paul's most moving pastoral declaration: "I have shewed you all things, how that so labouring ye ought to support the weak, and to remember the words of the Lord Jesus, how he said, It is more blessed to give than to receive" (20:35). This last saying of Jesus is not found in the four Gospels — Paul preserved an unrecorded tradition of Jesus.`,
  },
  {
    title_zh: `五、被捕、审判与抵达罗马：福音不被捆绑（22-28章）`,
    title_en: `V. Arrest, Trials, and Arrival in Rome: The Gospel Unbound (Ch. 22-28)`,
    content_zh: `保罗在耶路撒冷圣殿被犹太人抓住，从此开始了一系列的审判（22-26章）。但路加想让读者看见的是：每一次审判都成为传福音的机会。在千夫长面前、在公会面前、在巡抚腓力斯面前、在非斯都面前、在亚基帕王面前——保罗每次都在讲述基督。福音不怕公开审查，反而在审判中更加彰显。

保罗在腓力斯面前"讲论公义、节制和将来的审判"，腓力斯"甚觉恐惧"（24:25）——他知道这是真的，却不愿意回应。他把保罗关了两年，"指望保罗送他银钱"（24:26）——政治的算计扼杀了属灵的觉醒。

保罗向亚基帕王的辩词（26章）是全书最高潮的讲道。他讲述自己从逼迫者变为传道人的经历，最后直接向王发出挑战："亚基帕王啊，你信先知吗？我知道你是信的"（26:27）。亚基帕的回应令人心碎："你想少微一劝，便叫我作基督徒啊"（26:28）——他理解了福音，承认了先知，却在最后一步退缩了。保罗的回答充满恩典："无论是少劝是多劝，我向神所求的，不但你一个人，就是今天一切听我的，都要像我一样"（26:29）。

最后的航行和船难（27章）是路加笔下最精彩的叙事之一。十四天的暴风、276人在绝望中等死。保罗在这时站出来："众位可以放心，你们的性命一个也不失丧……因我所属所侍奉的神，他的使者昨夜站在我旁边"（27:22-23）。神的应许比地中海的风暴更可靠。

使徒行传以一个开放的结尾收束：保罗在罗马"放胆传讲神国的道，将主耶稣基督的事教导人，并没有人禁止"（28:31）。最后一个词"没有人禁止"（akolutos）在希腊原文中尤其有力——福音可以被人拒绝，使徒可以被囚禁，但神的道不被捆绑。使徒行传没有真正的结局，因为圣灵的工作仍在继续——每一代教会都是使徒行传的续篇。`,
    content_en: `Paul was seized by Jews in the Jerusalem temple, beginning a series of trials (ch. 22-26). But Luke wants readers to see: every trial became an opportunity for the gospel. Before the commander, before the Sanhedrin, before Governor Felix, before Festus, before King Agrippa — Paul proclaimed Christ at every hearing. The gospel does not fear public scrutiny; it shines brighter through trial.

Before Felix, Paul "reasoned of righteousness, temperance, and judgment to come" and Felix "trembled" (24:25) — he knew it was true but refused to respond. He kept Paul imprisoned for two years, "hoping that money should have been given him of Paul" (24:26) — political calculation strangled spiritual awakening.

Paul's defense before King Agrippa (ch. 26) is the book's climactic sermon. He recounted his transformation from persecutor to preacher, then challenged the king directly: "King Agrippa, believest thou the prophets? I know that thou believest" (26:27). Agrippa's response is heartbreaking: "Almost thou persuadest me to be a Christian" (26:28) — he understood the gospel, acknowledged the prophets, yet drew back at the final step. Paul's reply is full of grace: "I would to God, that not only thou, but also all that hear me this day, were both almost, and altogether such as I am" (26:29).

The final voyage and shipwreck (ch. 27) is one of Luke's most brilliant narratives. Fourteen days of tempest, 276 souls despairing of life. Paul stood up: "Be of good cheer: for there shall be no loss of any man's life among you... For there stood by me this night the angel of God, whose I am, and whom I serve" (27:22-23). God's promise is more reliable than any Mediterranean storm.

Acts closes with an open ending: Paul in Rome "preaching the kingdom of God, and teaching those things which concern the Lord Jesus Christ, with all confidence, no man forbidding him" (28:31). The final word "unhindered" (akolutos) is especially powerful in the Greek — the gospel may be rejected, the apostle imprisoned, but the word of God is not bound. Acts has no real conclusion because the Spirit's work continues — every generation of the church writes a new chapter of Acts.`,
  },
]

const overview = {
  zh: `使徒行传（28章）是路加的第二卷书，记载了从五旬节到保罗抵达罗马（约公元30-62年）的教会历史。全书的结构按照耶稣的命令展开："在耶路撒冷、犹太全地，和撒玛利亚，直到地极，作我的见证"（1:8）。

圣灵是全书真正的主角。从圣灵降临（2章）到圣灵推进每一个重大突破，使徒行传教导：教会的增长不靠人的策略，乃靠神的灵。`,
  en: `Acts (28 chapters) is Luke's second volume, recording church history from Pentecost to Paul's arrival in Rome (c. AD 30–62). The structure follows Jesus' commission: "ye shall be witnesses unto me both in Jerusalem, and in all Judaea, and in Samaria, and unto the uttermost part of the earth" (1:8).

The Holy Spirit is the book's true protagonist. From Pentecost (ch. 2) through every major breakthrough, Acts teaches: church growth depends not on human strategy but on God's Spirit.`,
};

const outline = [
  ["1-2章", "升天、五旬节、教会诞生", "Ch. 1–2", "Ascension, Pentecost, Church Birth"],
  ["3-7章", "耶路撒冷教会与司提反殉道", "Ch. 3–7", "Jerusalem Church; Stephen's Martyrdom"],
  ["8-9章", "撒玛利亚与保罗归信", "Ch. 8–9", "Samaria and Paul's Conversion"],
  ["10-12章", "外邦人进入教会", "Ch. 10–12", "Gentiles Enter the Church"],
  ["13-15章", "第一次行程与耶路撒冷大会", "Ch. 13–15", "First Journey and Jerusalem Council"],
  ["16-18章", "第二次行程：腓立比、雅典、哥林多", "Ch. 16–18", "Second Journey"],
  ["19-21章", "第三次行程与回耶路撒冷", "Ch. 19–21", "Third Journey"],
  ["22-28章", "被捕、审判、航行罗马", "Ch. 22–28", "Arrest, Trials, Voyage to Rome"],
];

const theology = {
  title_zh: `核心神学：圣灵降临与教会的诞生`,
  title_en: `Core Theology: The Descent of the Spirit and the Birth of the Church`,
  content_zh: `使徒行传是路加福音的续集，记载了从耶稣升天到保罗在罗马传道的约三十年历史。它的真正主角不是使徒，而是圣灵。

第一，五旬节——教会的诞生日。"五旬节到了，门徒都聚集在一处。忽然，从天上有响声下来，好像一阵大风吹过……他们就都被圣灵充满"（2:1-4）。五旬节不是一次超自然的奇观，而是新约时代的开端——圣灵不再只临到少数先知和君王，而是浇灌在所有信徒身上。彼得引用约珥书2:28-32解释这一事件："在末后的日子，我要将我的灵浇灌凡有血气的。"教会不是人的组织，而是圣灵的创造。

第二，福音从耶路撒冷到地极。"但圣灵降临在你们身上，你们就必得着能力，并要在耶路撒冷、犹太全地和撒马利亚，直到地极，作我的见证"（1:8）——这节经文是全书的大纲。使徒行传记载了福音跨越三道巨大的屏障：从犹太人到撒马利亚人（8章）、从撒马利亚人到外邦人（10章哥尼流）、从近东到欧洲（16章腓立比）。每一次跨越都是圣灵主动推动的——不是人的计划，而是神的引导。

第三，苦难中的见证。"见证"（μάρτυς，martys）一词后来演变为"殉道者"——因为作见证常常意味着付出生命的代价。司提反是第一位殉道者（7章），他在被石头打死时说"主啊，不要将这罪归于他们"（7:60），呼应了耶稣十字架上的祷告。保罗被石头打、被鞭打、被下监——"我们进入神的国，必须经历许多艰难"（14:22）。使徒行传不是一本成功神学的教科书，而是一部苦难中得胜的见证录。

第四，教会的合一与争论。使徒行传如实记载了早期教会内部的张力——耶路撒冷大会（15章）关于外邦信徒是否需要受割礼的辩论、保罗和巴拿巴因马可而分手（15:39）、犹太基督徒与外邦基督徒之间的文化冲突。教会从一开始就不是完美的——但圣灵在不完美的人中间工作，带领教会在真理中不断成长。`,
  content_en: `Acts is the sequel to Luke's Gospel, recording approximately thirty years from Jesus's ascension to Paul's preaching in Rome. Its true protagonist is not the apostles but the Holy Spirit.

First, Pentecost — the birthday of the church. "And when the day of Pentecost was fully come, they were all with one accord in one place. And suddenly there came a sound from heaven as of a rushing mighty wind... And they were all filled with the Holy Ghost" (2:1-4). Pentecost was not a supernatural spectacle but the inauguration of the New Testament era — the Spirit was no longer limited to a few prophets and kings but poured out on all believers. Peter quoted Joel 2:28-32 to explain: "And it shall come to pass in the last days, saith God, I will pour out of my Spirit upon all flesh." The church is not a human organization but a creation of the Holy Spirit.

Second, the gospel from Jerusalem to the ends of the earth. "But ye shall receive power, after that the Holy Ghost is come upon you: and ye shall be witnesses unto me both in Jerusalem, and in all Judaea, and in Samaria, and unto the uttermost part of the earth" (1:8) — this verse is the book's outline. Acts records the gospel crossing three enormous barriers: from Jews to Samaritans (ch. 8), from Samaritans to Gentiles (ch. 10, Cornelius), from the Near East to Europe (ch. 16, Philippi). Every crossing was initiated by the Holy Spirit — not human planning but divine guidance.

Third, witness through suffering. The word "witness" (μάρτυς, martys) later evolved into "martyr" — because bearing witness often meant paying with one's life. Stephen was the first martyr (ch. 7), saying as he was stoned, "Lord, lay not this sin to their charge" (7:60), echoing Jesus's prayer on the cross. Paul was stoned, beaten, imprisoned — "we must through much tribulation enter into the kingdom of God" (14:22). Acts is not a textbook of prosperity theology but a record of victory through suffering.

Fourth, the church's unity and disputes. Acts honestly records early church tensions — the Jerusalem Council (ch. 15) debating whether Gentile converts needed circumcision, Paul and Barnabas parting ways over Mark (15:39), cultural conflicts between Jewish and Gentile Christians. The church was never perfect from the start — but the Spirit worked among imperfect people, leading the church to grow continually in truth.`,
};

const keyVerse = {
  zh: `"但圣灵降临在你们身上，你们就必得着能力，并要在耶路撒冷、犹太全地，和撒玛利亚，直到地极，作我的见证。"（使徒行传 1:8）`,
  en: `"But ye shall receive power, after that the Holy Ghost is come upon you: and ye shall be witnesses unto me both in Jerusalem, and in all Judaea, and in Samaria, and unto the uttermost part of the earth." (Acts 1:8)`,
};

const info = { nameZh: `使徒行传`, nameEn: `Acts`, author: `路加医生`, date: `约公元62-80年`, chapters: `28章`, backHref: `/new-testament/gospels`, backLabel: `四福音书与历史`, bibleId: `ACT` };


function renderText(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

export default function BookGuide() {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link href={info.backHref} className="inline-flex items-center gap-1 text-sm text-[var(--color-accent)] hover:underline mb-6">← {info.backLabel}</Link>
      <div className="text-center mb-10"><span className="text-5xl mb-4 block">📖</span><h1 className="font-serif-cn text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-2">{info.nameZh}导读</h1><p className="text-base text-[var(--color-text-secondary)] italic mb-4">A Guide to {info.nameEn}</p><div className="flex justify-center gap-4 text-xs text-[var(--color-text-secondary)]"><span>✍️ 作者：{info.author}</span><span>📅 {info.date}</span><span>📄 {info.chapters}</span></div></div>
      <div className="mb-10 p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)]"><h2 className="font-serif-cn text-lg font-bold text-[var(--color-text)] mb-3">📋 全书概览</h2><div className="flex items-start gap-2 mb-3"><SpeakButton text={overview.zh} lang="zh" /><p className="text-sm text-[var(--color-text)] leading-relaxed font-serif-cn">{renderText(overview.zh)}</p></div><div className="flex items-start gap-2"><SpeakButton text={overview.en} lang="en" /><p className="text-xs text-[var(--color-text-secondary)] italic leading-relaxed">{renderText(overview.en)}</p></div></div>
      <div className="mb-10 p-5 rounded-xl bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border border-amber-200 dark:border-amber-800"><p className="text-sm font-bold text-amber-800 dark:text-amber-300 mb-1">🔑 金句 Key Verse</p><p className="font-serif-cn text-base text-[var(--color-text)] font-bold leading-relaxed">{keyVerse.zh}</p><p className="text-sm text-[var(--color-text-secondary)] italic mt-1">{keyVerse.en}</p></div>
      <div className="mb-6"><h2 className="font-serif-cn text-xl font-bold text-[var(--color-text)] mb-1">📚 分段导读</h2><p className="text-xs text-[var(--color-text-secondary)] italic mb-4">Section-by-Section Guide</p></div>
      <div className="space-y-4">{sections.map((sec, i) => (<div key={i} className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] overflow-hidden"><button onClick={() => setExpandedIdx(expandedIdx === i ? null : i)} className="w-full flex items-center justify-between px-6 py-4 text-left cursor-pointer hover:bg-[var(--color-accent)]/5 transition-colors"><div><h3 className="font-serif-cn text-base font-bold text-[var(--color-text)]">{sec.title_zh}</h3><p className="text-xs text-[var(--color-text-secondary)] italic">{sec.title_en}</p></div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-5 h-5 text-[var(--color-text-secondary)] transition-transform ${expandedIdx === i ? 'rotate-180' : ''}`}><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" /></svg></button>{expandedIdx === i && (<div className="px-6 pb-5 border-t border-[var(--color-border)]"><div className="flex items-start gap-2 mt-4 mb-4"><SpeakButton text={sec.content_zh} lang="zh" /><p className="text-sm text-[var(--color-text)] leading-relaxed font-serif-cn whitespace-pre-line">{renderText(sec.content_zh)}</p></div><div className="flex items-start gap-2"><SpeakButton text={sec.content_en} lang="en" /><p className="text-xs text-[var(--color-text-secondary)] italic leading-relaxed whitespace-pre-line">{renderText(sec.content_en)}</p></div></div>)}</div>))}</div>
      <div className="mt-10 p-6 rounded-2xl border border-amber-200 dark:border-amber-800 bg-gradient-to-br from-amber-50/50 to-orange-50/50 dark:from-amber-900/10 dark:to-orange-900/10"><h2 className="font-serif-cn text-lg font-bold text-[var(--color-text)] mb-1">⛪ {theology.title_zh}</h2><p className="text-xs text-[var(--color-text-secondary)] italic mb-4">{theology.title_en}</p><div className="flex items-start gap-2 mb-4"><SpeakButton text={theology.content_zh} lang="zh" /><p className="text-sm text-[var(--color-text)] leading-relaxed font-serif-cn whitespace-pre-line">{renderText(theology.content_zh)}</p></div><div className="flex items-start gap-2"><SpeakButton text={theology.content_en} lang="en" /><p className="text-xs text-[var(--color-text-secondary)] italic leading-relaxed whitespace-pre-line">{renderText(theology.content_en)}</p></div></div>
      <div className="mt-10 p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)]"><h2 className="font-serif-cn text-lg font-bold text-[var(--color-text)] mb-4">🗂️ 章节大纲</h2>{(() => { const half = Math.ceil(outline.length / 2); const col1 = outline.slice(0, half); const col2 = outline.slice(half); const renderItem = ([zh, desc, chEn, descEn]: string[], i: number) => (<div key={i} className="py-1.5 border-b border-[var(--color-border)]/30 last:border-b-0"><div className="flex items-baseline gap-2"><span className="font-bold text-[var(--color-accent)] min-w-[65px] shrink-0">{zh}</span><span className="text-[var(--color-text)]">{desc}</span></div><div className="flex items-baseline gap-2 mt-0.5"><span className="text-[var(--color-text-secondary)] text-xs italic min-w-[65px] shrink-0">{chEn}</span><span className="text-[var(--color-text-secondary)] text-xs italic">{descEn}</span></div></div>); return (<div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 text-sm"><div>{col1.map((item, i) => renderItem(item, i))}</div><div>{col2.map((item, i) => renderItem(item, i + half))}</div></div>); })()}</div>
      <div className="mt-8 text-center"><Link href={`/bible/${info.bibleId}`} className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--color-accent)] text-white font-bold hover:opacity-90 transition-opacity">📖 阅读{info.nameZh} Read {info.nameEn}</Link></div>
    </div>
  );
}