'use client';
import Link from 'next/link';
import SpeakButton from '@/components/SpeakButton';
import { useState } from 'react';

const sections = [
  {
    title_zh: `一、弥赛亚的降临与预备（1-4章）`,
    title_en: `I. The Coming and Preparation of the Messiah (Ch. 1-4)`,
    content_zh: `马太福音以家谱开始——从亚伯拉罕到大卫到基督（1:1-17），这不是枯燥的名单，而是救赎历史的脉络。马太精心安排了三个十四代（亚伯拉罕到大卫、大卫到被掳、被掳到基督），将以色列全部历史指向一个终点：耶稣基督。家谱中出现了四位女性——他玛、喇合、路得、拔示巴——她们都有"不寻常"的故事，暗示恩典从一开始就超越了人的预期。

童年叙事（2章）充满了旧约的回响：东方博士朝拜呼应以赛亚书60章的预言；逃往埃及应验何西阿书11:1"我从埃及召出我的儿子"；希律的屠杀应验耶利米书31:15拉结的哭声。马太反复使用"应验"一词（全书超过十次），向犹太读者证明：旧约一切预言都在这个人身上汇聚。

施洗约翰出现在旷野，呼喊"天国近了，你们应当悔改"（3:2）——他是以赛亚所预言"在旷野预备耶和华的路"的那位（赛40:3）。耶稣的洗礼揭示了三位一体的荣耀：子受洗，灵降临如鸽子，父的声音从天上说"这是我的爱子，我所喜悦的"（3:17）。旷野试探（4:1-11）中，耶稣以三次"经上记着说"胜过撒但——他在亚当失败的地方得胜了，在以色列四十年旷野跌倒的地方站立了。`,
    content_en: `Matthew opens with a genealogy — from Abraham through David to Christ (1:1-17). This is not a dry list but the thread of redemptive history. Matthew carefully arranges three sets of fourteen generations (Abraham to David, David to the exile, exile to Christ), pointing all of Israel's history toward one destination: Jesus Christ. Four women appear in the genealogy — Tamar, Rahab, Ruth, Bathsheba — each with an "unusual" story, suggesting that grace has always exceeded human expectation.

The infancy narrative (ch. 2) resounds with Old Testament echoes: the Magi's worship echoes Isaiah 60; the flight to Egypt fulfills Hosea 11:1, "Out of Egypt have I called my son"; Herod's massacre fulfills Jeremiah 31:15, Rachel weeping for her children. Matthew repeatedly uses "that it might be fulfilled" (over ten times in the book), demonstrating to Jewish readers: every Old Testament prophecy converges in this one person.

John the Baptist appears in the wilderness, crying "Repent: for the kingdom of heaven is at hand" (3:2) — he is the one prophesied by Isaiah, "The voice of one crying in the wilderness, Prepare ye the way of the Lord" (Isa. 40:3). Jesus' baptism reveals Trinitarian glory: the Son is baptized, the Spirit descends as a dove, the Father's voice from heaven declares, "This is my beloved Son, in whom I am well pleased" (3:17). In the wilderness temptation (4:1-11), Jesus overcomes Satan with three "It is written" — He triumphed where Adam failed, and stood where Israel fell during forty years in the wilderness.`,
  },
  {
    title_zh: `二、天国宪章：登山宝训（5-7章）`,
    title_en: `II. The Charter of the Kingdom: The Sermon on the Mount (Ch. 5-7)`,
    content_zh: `登山宝训是马太福音五大讲论中的第一篇，也是最著名的。耶稣上了山（呼应摩西在西奈山颁布律法），坐下教训门徒——这位新的摩西带来的不是石版上的律法，而是写在心上的天国宪章。

八福（5:3-12）颠覆了世人的价值观：虚心的、哀恸的、温柔的、饥渴慕义的才是有福的。世界追求强势、快乐、自信、满足；天国却说软弱、忧伤、谦卑、渴慕才是蒙福的记号。"你们是世上的盐……你们是世上的光"（5:13-14）——天国子民在世上有防腐和照明的双重使命。

"莫想我来要废掉律法和先知；我来不是要废掉，乃是要成全"（5:17）。耶稣将律法的要求从外在的行为深入到内心的动机——不仅不可杀人，连恨人也是犯了杀人的罪；不仅不可奸淫，连动淫念也是犯罪。"你们的义若不胜于文士和法利赛人的义，断不能进天国"（5:20）。这不是更高的道德标准让人绝望，而是逼人认识到：靠自己的义永远不够，唯有靠基督成全的义才能进天国。

主祷文（6:9-13）是祷告的模范，浓缩了天国子民与天父的关系——"我们在天上的父"确立了关系，"愿人都尊你的名为圣"确立了优先，"免我们的债，如同我们免了人的债"将恩典与饶恕联系在一起。韦敏斯德小要理问答第99问就以主祷文为整个祷告教导的框架。

宝训以两条路、两种果树、两个根基的比喻作结（7:13-27），将听道与行道区分开来。"所以凡听见我这话就去行的，好比一个聪明人，把房子盖在磐石上"（7:24）——天国的教导不是供人欣赏的理论，而是要活出来的生命。`,
    content_en: `The Sermon on the Mount is the first and most famous of Matthew's five great discourses. Jesus went up on a mountain (echoing Moses at Sinai receiving the Law), sat down, and taught His disciples — this new Moses brings not law on stone tablets but the charter of the Kingdom written on the heart.

The Beatitudes (5:3-12) overturn worldly values: the poor in spirit, mourners, meek, and those hungering for righteousness are the blessed. The world pursues strength, happiness, confidence, and satisfaction; the Kingdom says weakness, sorrow, humility, and longing are the marks of blessing. "Ye are the salt of the earth... Ye are the light of the world" (5:13-14) — Kingdom citizens have a dual mission of preservation and illumination.

"Think not that I am come to destroy the law, or the prophets: I am not come to destroy, but to fulfil" (5:17). Jesus deepened the Law's demands from outward action to inward motive — not only shalt thou not kill, but anger itself is the sin of murder; not only no adultery, but lustful intent is sin. "Except your righteousness shall exceed the righteousness of the scribes and Pharisees, ye shall in no case enter into the kingdom of heaven" (5:20). This is not a higher moral standard designed to drive people to despair, but to compel recognition that one's own righteousness is never enough — only the righteousness fulfilled by Christ grants entry into the Kingdom.

The Lord's Prayer (6:9-13) is the model of prayer, distilling the relationship between Kingdom citizens and the heavenly Father — "Our Father which art in heaven" establishes the relationship, "Hallowed be thy name" establishes the priority, "Forgive us our debts, as we forgive our debtors" links grace and forgiveness. WSC Q99 uses the Lord's Prayer as the framework for all instruction on prayer.

The Sermon concludes with the parables of two roads, two trees, and two foundations (7:13-27), distinguishing hearing from doing. "Therefore whosoever heareth these sayings of mine, and doeth them, I will liken him unto a wise man, which built his house upon a rock" (7:24) — the Kingdom's teaching is not theory to admire but life to be lived.`,
  },
  {
    title_zh: `三、天国之王的权柄与天国的比喻（8-13章）`,
    title_en: `III. The King's Authority and the Parables of the Kingdom (Ch. 8-13)`,
    content_zh: `登山宝训之后，马太以十个神迹（8-9章）展示天国之王的权柄不只在言语上，更在行动上——医治大麻风（8:1-4）、百夫长仆人的远程医治（8:5-13）、平静风和海（8:23-27）、赶出格拉森的群鬼（8:28-34）、瘫子的罪得赦免（9:1-8）、使睚鲁女儿复活（9:18-26）。耶稣同时拥有胜过疾病、自然、魔鬼和死亡的权柄——这是只有神才有的权柄。

百夫长的信心尤其令耶稣惊叹："这么大的信心，就是在以色列中，我也没有遇见过"（8:10）。一个外邦军官的信心超过了以色列人——天国的大门已经向万民敞开。

差遣十二门徒（10章）是权柄的延伸。"你们白白地得来，也要白白地舍去"（10:8）。但差遣也意味着逼迫："我差你们去，如同羊进入狼群"（10:16）。在人看来福音的扩展是软弱的——没有军队，没有金银，只有十二个普通人带着一个信息。但这就是天国的方式。

第11-12章记录了对耶稣日益增长的反对。施洗约翰在监狱中发出疑问"那将要来的是你吗？"（11:3），法利赛人指控耶稣靠鬼王赶鬼（12:24）。面对拒绝，耶稣说了新约中最温柔的邀请之一："凡劳苦担重担的人，可以到我这里来，我就使你们得安息"（11:28）。天国向聪明通达人隐藏，却向婴孩显出来（11:25）——这是恩典的主权。

天国的比喻（13章）是马太五大讲论的第三篇。耶稣用七个比喻揭示天国的奥秘：撒种的比喻（13:3-9）说明人心对福音的不同回应；稗子的比喻（13:24-30）说明天国与世界在末日之前并存；芥菜种（13:31-32）和面酵（13:33）说明天国从微小开始却终必充满全地。"天国好像宝贝藏在地里……又好像买卖人寻找好珠子"（13:44-46）——天国值得人变卖一切去换取。`,
    content_en: `After the Sermon on the Mount, Matthew presents ten miracles (ch. 8-9), demonstrating that the King's authority lies not only in words but in deeds — cleansing a leper (8:1-4), healing the centurion's servant remotely (8:5-13), calming the wind and sea (8:23-27), casting out the legion of demons at Gadara (8:28-34), forgiving and healing the paralytic (9:1-8), raising Jairus' daughter (9:18-26). Jesus simultaneously holds authority over disease, nature, demons, and death — authority that belongs to God alone.

The centurion's faith especially amazed Jesus: "I have not found so great faith, no, not in Israel" (8:10). A Gentile soldier's faith surpassed Israel's — the Kingdom's gates were already opening to all nations.

Sending the twelve (ch. 10) extends His authority. "Freely ye have received, freely give" (10:8). But sending also means persecution: "I send you forth as sheep in the midst of wolves" (10:16). Humanly speaking, the gospel's expansion appears weak — no armies, no silver or gold, only twelve ordinary men carrying a message. But this is the Kingdom's way.

Chapters 11-12 record mounting opposition to Jesus. John the Baptist questions from prison, "Art thou he that should come?" (11:3); the Pharisees accuse Jesus of casting out demons by Beelzebub (12:24). Facing rejection, Jesus issues one of the New Testament's tenderest invitations: "Come unto me, all ye that labour and are heavy laden, and I will give you rest" (11:28). The Kingdom is hidden from the wise and revealed to babes (11:25) — this is the sovereignty of grace.

The Kingdom parables (ch. 13) form Matthew's third great discourse. Jesus uses seven parables to unveil the Kingdom's mysteries: the sower (13:3-9) illustrates different heart responses to the gospel; the tares (13:24-30) show the Kingdom and the world coexisting until the end; the mustard seed (13:31-32) and the leaven (13:33) show the Kingdom beginning small yet ultimately filling the earth. "The kingdom of heaven is like unto treasure hid in a field... like unto a merchant man, seeking goodly pearls" (13:44-46) — the Kingdom is worth selling everything to obtain.`,
  },
  {
    title_zh: `四、门训与教会：走向耶路撒冷（14-20章）`,
    title_en: `IV. Discipleship and the Church: The Journey to Jerusalem (Ch. 14-20)`,
    content_zh: `彼得的认信是马太福音的转折点："你是基督，是永生神的儿子"（16:16）。耶稣回应："你是彼得，我要把我的教会建造在这磐石上"（16:18）。这是"教会"（ekklesia）一词在福音书中首次出现。改革宗的理解是：教会建造在彼得所认信的真理——基督是永生神的儿子——这块磐石上，而非建造在彼得个人身上。

从彼得认信起，耶稣开始第一次预言受难（16:21）。彼得立刻拦阻，耶稣严厉地说"撒但，退我后边去吧"（16:23）——同一个彼得，前一刻领受天父的启示，后一刻成了撒但的器皿。这提醒我们：最属灵的时刻之后，往往紧跟最大的试探。

登山变像（17章）是门徒信心的坚固。摩西和以利亚代表律法和先知，都在耶稣面前退场；天父的声音重申"这是我的爱子……你们要听他"（17:5）。旧约的一切都指向他，也都在他里面成全。

第18章的教会讲论是五大讲论的第四篇——不是关于教会的行政管理，而是关于教会生活的核心品格：谦卑（"你们若不回转，变成小孩子的样式，断不得进天国"18:3）、挽回（"若是你的弟兄得罪你，你就去……指出他的错来"18:15）、饶恕（不是七次，乃是"七十个七次"18:22）。不饶恕人的恶仆比喻（18:23-35）警告：被饶恕一千万银子之债的人若不肯饶恕别人一百银子，天父也必不饶恕他。这不是赚取恩典的条件，而是真正经历恩典的人必然的回应。`,
    content_en: `Peter's confession is the turning point of Matthew: "Thou art the Christ, the Son of the living God" (16:16). Jesus responds: "Thou art Peter, and upon this rock I will build my church" (16:18). This is the first occurrence of "church" (ekklesia) in the Gospels. The Reformed understanding is that the church is built on the rock of Peter's confession — that Christ is the Son of the living God — not on Peter personally.

From this confession onward, Jesus begins His first passion prediction (16:21). Peter immediately rebukes Him, and Jesus sternly replies, "Get thee behind me, Satan" (16:23) — the same Peter who one moment received the Father's revelation becomes Satan's instrument the next. This reminds us: the most spiritual moments are often followed by the greatest temptations.

The Transfiguration (ch. 17) strengthens the disciples' faith. Moses and Elijah, representing the Law and the Prophets, recede before Jesus; the Father's voice reaffirms, "This is my beloved Son... hear ye him" (17:5). All of the Old Testament points to Him and finds its fulfillment in Him.

The Church Discourse in chapter 18 is the fourth of the five great discourses — not about church administration but about the core character of church life: humility ("Except ye be converted, and become as little children, ye shall not enter into the kingdom of heaven," 18:3), restoration ("If thy brother shall trespass against thee, go and tell him his fault," 18:15), and forgiveness (not seven times but "seventy times seven," 18:22). The parable of the unforgiving servant (18:23-35) warns: one forgiven ten thousand talents who refuses to forgive a hundred pence will not be forgiven by the heavenly Father. This is not a condition for earning grace but the inevitable response of one who has truly experienced grace.`,
  },
  {
    title_zh: `五、最后一周：冲突与橄榄山讲论（21-25章）`,
    title_en: `V. The Final Week: Conflict and the Olivet Discourse (Ch. 21-25)`,
    content_zh: `耶稣骑驴进耶路撒冷（21:1-11），应验撒迦利亚书9:9"看哪，你的王来到你这里，是温柔的，又骑着驴"。群众高呼"和散那归于大卫的子孙"——但几天后同样的群众将高喊"钉他十字架"。人群的善变暴露了人心的本相。

洁净圣殿（21:12-17）是王对宗教腐败的审判。紧接着是一系列的论战：法利赛人试探纳税问题、撒都该人试探复活问题、律法师试探最大的诫命。耶稣以凶恶园户的比喻（21:33-46）宣告：天国要从犹太领袖手中夺去，赐给能结果子的百姓。第23章的七祸（"你们这假冒为善的文士和法利赛人有祸了！"）是耶稣公开事工中最严厉的话，揭露了宗教伪善的七个面向。

橄榄山讲论（24-25章）是五大讲论的第五篇，也是最后一篇。门徒问"什么时候有这些事？你降临和世界的末了有什么预兆呢？"（24:3）。耶稣的回答交织了耶路撒冷毁灭（主后70年应验）和末日再来的预言。核心信息不是计算日期，而是"你们也要预备"（24:44）。

十个童女的比喻（25:1-13）呼召警醒——恩典不能借用，信仰必须是自己的。才干的比喻（25:14-30）要求忠心——神按各人的才干托付，按忠心奖赏。绵羊山羊的审判（25:31-46）揭示了终极的标准："这些事你们既做在我这弟兄中一个最小的身上，就是做在我身上了"（25:40）。信仰不是口头的认信，而是在最卑微的人身上活出来的爱。`,
    content_en: `Jesus enters Jerusalem riding on a donkey (21:1-11), fulfilling Zechariah 9:9: "Behold, thy King cometh unto thee, meek, and sitting upon an ass." The crowds shout, "Hosanna to the Son of David" — but days later the same crowds will cry, "Crucify him." The crowd's fickleness exposes the human heart.

The cleansing of the Temple (21:12-17) is the King's judgment on religious corruption. A series of confrontations follows: the Pharisees test Him on taxes, the Sadducees on the resurrection, a lawyer on the greatest commandment. Jesus declares through the parable of the wicked tenants (21:33-46) that the Kingdom will be taken from Israel's leaders and given to a people producing its fruit. The seven woes of chapter 23 ("Woe unto you, scribes and Pharisees, hypocrites!") are Jesus' sternest words in His public ministry, exposing seven facets of religious hypocrisy.

The Olivet Discourse (ch. 24-25) is the fifth and final great discourse. The disciples ask, "When shall these things be? and what shall be the sign of thy coming, and of the end of the world?" (24:3). Jesus' answer interweaves the prophecy of Jerusalem's destruction (fulfilled in AD 70) with the prophecy of His final return. The core message is not date-setting but "Therefore be ye also ready" (24:44).

The parable of the ten virgins (25:1-13) calls for watchfulness — grace cannot be borrowed; faith must be one's own. The parable of the talents (25:14-30) demands faithfulness — God entrusts according to ability and rewards according to faithfulness. The sheep and goats judgment (25:31-46) reveals the ultimate standard: "Inasmuch as ye have done it unto one of the least of these my brethren, ye have done it unto me" (25:40). Faith is not verbal confession but love lived out toward the lowliest.`,
  },
  {
    title_zh: `六、十字架与大使命：天国之王的得胜（26-28章）`,
    title_en: `VI. The Cross and the Great Commission: The King's Victory (Ch. 26-28)`,
    content_zh: `马太福音的高潮是天国之王走向十字架。最后的晚餐上耶稣设立了新约的圣餐："这是我立约的血，为多人流出来，使罪得赦"（26:28）。逾越节的羔羊终于得到了完全的应验——从此以后，旧约的献祭制度不再需要了。

客西马尼园中耶稣祷告说"我父啊，倘若可行，求你叫这杯离开我。然而，不要照我的意思，只要照你的意思"（26:39）。这不是软弱，而是完全的人性在面对神圣审判时的真实挣扎，以及完全的顺服对完全的恐惧的胜利。犹大以亲嘴出卖、彼得三次不认主、门徒全部逃散——人在最关键的时刻全部失败了，但神的计划没有失败。

十字架上从午正到申初遍地黑暗（27:45），耶稣喊着说"以利，以利，拉马撒巴各大尼？就是说：我的神，我的神，为什么离弃我？"（27:46，引用诗篇22:1）。这是代赎的核心：无罪的基督承担了我们的罪，经历了与父隔绝的痛苦——这是地狱的实质。圣殿幔子从上到下裂为两半（27:51），宣告通往至圣所的路永远打开了。

复活不是附录，而是王权的最终确认。"天上地下所有的权柄都赐给我了。所以，你们要去，使万民作我的门徒，奉父、子、圣灵的名给他们施洗，凡我所吩咐你们的，都教训他们遵守。我就常与你们同在，直到世界的末了"（28:18-20）。大使命包含四个要素：权柄（天上地下）、使命（使万民作门徒）、方式（施洗与教导）、应许（常与你们同在）。天国不局限于以色列——万民都被呼召进入。马太福音以"以马内利"（神与我们同在，1:23）开始，以"我就常与你们同在"结束——首尾呼应，基督的同在贯穿始终。`,
    content_en: `The climax of Matthew is the King of Heaven going to the cross. At the Last Supper, Jesus institutes the new covenant in the Lord's Supper: "This is my blood of the new testament, which is shed for many for the remission of sins" (26:28). The Passover lamb finally receives its complete fulfillment — henceforth the Old Testament sacrificial system is no longer needed.

In Gethsemane, Jesus prays, "O my Father, if it be possible, let this cup pass from me: nevertheless not as I will, but as thou wilt" (26:39). This is not weakness but true humanity's genuine struggle before divine judgment, and perfect obedience's victory over perfect dread. Judas betrays with a kiss, Peter denies three times, all disciples flee — at the most critical moment, every human failed, but God's plan did not fail.

On the cross, from the sixth to the ninth hour darkness covered the land (27:45), and Jesus cried, "Eli, Eli, lama sabachthani? that is to say, My God, my God, why hast thou forsaken me?" (27:46, quoting Psalm 22:1). This is the heart of substitutionary atonement: the sinless Christ bore our sins and experienced separation from the Father — the essence of hell. The temple veil was torn from top to bottom (27:51), declaring the way into the Holy of Holies forever opened.

The resurrection is not an appendix but the ultimate confirmation of kingship. "All power is given unto me in heaven and in earth. Go ye therefore, and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost: Teaching them to observe all things whatsoever I have commanded you: and, lo, I am with you alway, even unto the end of the world" (28:18-20). The Great Commission contains four elements: authority (heaven and earth), mission (make disciples of all nations), method (baptizing and teaching), and promise (I am with you always). The Kingdom is not limited to Israel — all nations are called. Matthew begins with "Emmanuel" (God with us, 1:23) and ends with "I am with you always" — an inclusio: Christ's presence runs from beginning to end.`,
  },
]

const overview = {
  zh: `马太福音（28章）是新约的第一卷书，由税吏出身的使徒马太所写，主要面向犹太读者。全书的核心主题是：耶稣就是旧约预言的弥赛亚，天国的君王。

马太福音包含五大讲论——登山宝训（5-7章）、差遣讲论（10章）、天国比喻（13章）、教会讲论（18章）和末世讲论（24-25章）——对应摩西五经，暗示耶稣是比摩西更大的那一位。"应验"一词在马太福音中出现超过十次，每次都将耶稣的生平事件连接回旧约预言。`,
  en: `Matthew (28 chapters) is the New Testament's first book, written by the apostle Matthew (a former tax collector), primarily for Jewish readers. Its core theme: Jesus is the Messiah prophesied in the Old Testament, the King of the Kingdom.

Matthew contains five great discourses — Sermon on the Mount (ch. 5–7), Mission Discourse (ch. 10), Kingdom Parables (ch. 13), Church Discourse (ch. 18), and Olivet Discourse (ch. 24–25) — paralleling the Pentateuch, implying Jesus is greater than Moses. "Fulfilled" appears over ten times, each connecting Jesus' life events back to Old Testament prophecy.`,
};

const outline = [
  ["1-2章", "降生与童年", "Ch. 1–2", "Birth and Childhood"],
  ["3-4章", "洗礼与试探", "Ch. 3–4", "Baptism and Temptation"],
  ["5-7章", "登山宝训", "Ch. 5–7", "Sermon on the Mount"],
  ["8-9章", "十个神迹", "Ch. 8–9", "Ten Miracles"],
  ["10章", "差遣十二门徒", "Ch. 10", "Commissioning the Twelve"],
  ["11-12章", "反对与争论", "Ch. 11–12", "Opposition and Controversy"],
  ["13章", "天国的比喻", "Ch. 13", "Parables of the Kingdom"],
  ["14-17章", "门徒训练", "Ch. 14–17", "Discipleship Training"],
  ["18章", "教会生活讲论", "Ch. 18", "Discourse on Church Life"],
  ["19-23章", "进入耶路撒冷", "Ch. 19–23", "Journey to Jerusalem"],
  ["24-25章", "末世讲论", "Ch. 24–25", "Olivet Discourse"],
  ["26-28章", "受难与复活", "Ch. 26–28", "Passion and Resurrection"],
];

const theology = {
  title_zh: `核心神学：耶稣是应许的弥赛亚君王`,
  title_en: `Core Theology: Jesus Is the Promised Messianic King`,
  content_zh: `马太福音是旧约与新约之间的桥梁，它的第一句话就将基督锚定在旧约的应许中："亚伯拉罕的后裔、大卫的子孙耶稣基督的家谱"（1:1）。

第一，旧约预言的应验。马太反复使用"这是要应验先知的话"（1:22, 2:15, 2:17, 2:23, 4:14, 8:17, 12:17, 13:35, 21:4, 27:9）——至少引用旧约超过六十次。耶稣不是横空出世的新教主，而是千年预言的成全者。从童女怀孕（赛7:14）、伯利恒降生（弥5:2）、逃往埃及（何11:1），到骑驴进城（亚9:9）、被卖三十块银子（亚11:12-13）——每一个细节都在旧约中预先写好。马太要告诉犹太读者：你们等待的那一位已经来了。

第二，天国的福音。马太福音是"天国的福音"——"天国"一词出现三十多次。登山宝训（5-7章）是天国子民的宪章：八福宣告了天国的价值观（与世界完全相反）；"你们是世上的盐……世上的光"（5:13-14）宣告了天国子民在世界中的使命。耶稣不是废掉律法，而是成全律法——"莫想我来要废掉律法和先知；我来不是要废掉，乃是要成全"（5:17）。

第三，十字架与大使命。马太福音的高潮是十字架和复活。"百夫长和一同看守耶稣的人看见地震并所经历的事，就极其害怕，说：'这真是神的儿子了！'"（27:54）——连异教徒的罗马军官都承认了真理。复活之后，耶稣颁布了大使命："所以，你们要去使万民作我的门徒，奉父、子、圣灵的名给他们施洗。凡我所吩咐你们的，都教训他们遵守"（28:19-20）。福音从犹太人扩展到万民——这是亚伯拉罕之约的最终实现："地上万族都要因你得福"（创12:3）。

第四，以马内利的应许。马太福音以"以马内利"开始（1:23"神与我们同在"），以"我就常与你们同在，直到世界的末了"（28:20）结束。整卷福音被这个应许包裹——无论在什么处境中，基督与祂的子民同在。`,
  content_en: `Matthew is the bridge between the Old and New Testaments; its very first sentence anchors Christ in Old Testament promise: "The book of the generation of Jesus Christ, the son of David, the son of Abraham" (1:1).

First, the fulfillment of Old Testament prophecy. Matthew repeatedly uses "that it might be fulfilled which was spoken of the Lord by the prophet" (1:22, 2:15, 2:17, 2:23, 4:14, 8:17, 12:17, 13:35, 21:4, 27:9) — citing the Old Testament over sixty times. Jesus is not a new religious founder appearing from nowhere but the fulfiller of a thousand years of prophecy. From the virgin conception (Isa 7:14), birth in Bethlehem (Mic 5:2), flight to Egypt (Hos 11:1), to riding on a donkey (Zech 9:9) and betrayal for thirty pieces of silver (Zech 11:12-13) — every detail was pre-written in the Old Testament. Matthew tells his Jewish readers: the One you have been waiting for has come.

Second, the gospel of the kingdom. Matthew is the gospel of "the kingdom of heaven" — the phrase appears over thirty times. The Sermon on the Mount (ch. 5-7) is the charter of kingdom citizens: the Beatitudes declare kingdom values (completely opposite to the world's); "Ye are the salt of the earth... the light of the world" (5:13-14) declares kingdom citizens' mission in the world. Jesus did not abolish the law but fulfilled it — "Think not that I am come to destroy the law, or the prophets: I am not come to destroy, but to fulfil" (5:17).

Third, the cross and the Great Commission. Matthew's climax is the cross and resurrection. "Now when the centurion, and they that were with him, watching Jesus, saw the earthquake, and those things that were done, they feared greatly, saying, Truly this was the Son of God" (27:54) — even a pagan Roman officer acknowledged the truth. After the resurrection, Jesus issued the Great Commission: "Go ye therefore, and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost: Teaching them to observe all things whatsoever I have commanded you" (28:19-20). The gospel expands from Jews to all nations — the ultimate fulfillment of the Abrahamic covenant: "in thee shall all families of the earth be blessed" (Gen 12:3).

Fourth, the promise of Immanuel. Matthew begins with "Emmanuel... God with us" (1:23) and ends with "lo, I am with you alway, even unto the end of the world" (28:20). The entire Gospel is enveloped in this promise — in every circumstance, Christ is present with His people.`,
};

const keyVerse = {
  zh: `"所以，你们要去，使万民作我的门徒，奉父、子、圣灵的名给他们施洗。凡我所吩咐你们的，都教训他们遵守，我就常与你们同在，直到世界的末了。"（马太福音 28:19-20）`,
  en: `"Go ye therefore, and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost: Teaching them to observe all things whatsoever I have commanded you: and, lo, I am with you alway, even unto the end of the world." (Matthew 28:19–20)`,
};

const info = { nameZh: `马太福音`, nameEn: `Matthew`, author: `使徒马太`, date: `约公元50-70年`, chapters: `28章`, backHref: `/new-testament/gospels`, backLabel: `四福音书`, bibleId: `MAT` };


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