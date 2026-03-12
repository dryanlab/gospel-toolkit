'use client';
import Link from 'next/link';
import SpeakButton from '@/components/SpeakButton';
import { useState } from 'react';

const sections = [
  {
    title_zh: `一、审判与圣洁：耶路撒冷的控诉（1-12章）`,
    title_en: `I. Judgment and Holiness: The Indictment of Jerusalem (Ch. 1-12)`,
    content_zh: `以赛亚书开篇是一场法庭审判——天和地是见证人，神控告自己的子民："天哪，要听！地啊，侧耳而听！因为耶和华说：我养育儿女，将他们养大，他们竟悖逆我"（1:2）。以色列被称为"所多玛的官长"、"蛾摩拉的百姓"（1:10）——这是何等沉痛的控告！他们的礼仪宗教已经变成了虚假的外壳："你们所献的许多祭物与我何益呢？公绵羊的燔祭和肥畜的脂油，我已经够了"（1:11）。

然而审判中有恩典的邀请："你们的罪虽像朱红，必变成雪白；虽红如丹颜，必白如羊毛"（1:18）。神的审判不是要毁灭，而是要洁净——"我必反手加在你身上，炼尽你的渣滓，除净你的杂质"（1:25）。

第6章是以赛亚蒙召的异象——"当乌西雅王崩的那年，我见主坐在高高的宝座上"（6:1）。人间的王死了，天上的王却永远坐在宝座上。撒拉弗呼喊："圣哉！圣哉！圣哉！万军之耶和华；他的荣光充满全地！"（6:3）以赛亚看见神的圣洁，立刻认识到自己的污秽："祸哉！我灭亡了！因为我是嘴唇不洁的人"（6:5）。神用坛上的炭沾他的口，洁净他的罪，然后差他去传讲难以接受的信息——"你们听是要听见，却不明白；看是要看见，却不晓得"（6:9）。

第7章包含了最著名的弥赛亚预言："因此，主自己要给你们一个兆头，必有童女怀孕生子，给他起名叫以马内利"（7:14）。马太福音1:23引用此经文指向基督的降生。第9章和第11章进一步展开："因有一婴孩为我们而生；有一子赐给我们……他名称为奇妙策士、全能的神、永在的父、和平的君"（9:6）。"从耶西的本必发一条；从他根生的枝子必结果实"（11:1）——弥赛亚从大卫的后裔而出，在他的统治下"豺狼必与绵羊羔同居"（11:6）。`,
    content_en: `Isaiah opens with a courtroom scene — heaven and earth are witnesses, as God indicts His people: "Hear, O heavens, and give ear, O earth: for the LORD hath spoken, I have nourished and brought up children, and they have rebelled against me" (1:2). Israel is called "rulers of Sodom" and "people of Gomorrah" (1:10) — what a grievous accusation! Their religious ritual had become an empty shell: "To what purpose is the multitude of your sacrifices unto me? saith the LORD: I am full of the burnt offerings of rams, and the fat of fed beasts" (1:11).

Yet amid judgment comes a gracious invitation: "Though your sins be as scarlet, they shall be as white as snow; though they be red like crimson, they shall be as wool" (1:18). God's judgment aims not at destruction but at cleansing — "I will turn my hand upon thee, and purely purge away thy dross, and take away all thy tin" (1:25).

Chapter 6 is Isaiah's call vision — "In the year that king Uzziah died I saw also the Lord sitting upon a throne, high and lifted up" (6:1). The earthly king died; the heavenly King sits on His throne forever. Seraphim cried, "Holy, holy, holy, is the LORD of hosts: the whole earth is full of his glory" (6:3). Confronted with God's holiness, Isaiah recognized his own uncleanness: "Woe is me! for I am undone; because I am a man of unclean lips" (6:5). God cleansed him with a coal from the altar and sent him to preach an unwelcome message — "Hear ye indeed, but understand not; and see ye indeed, but perceive not" (6:9).

Chapter 7 contains the most famous messianic prophecy: "Therefore the Lord himself shall give you a sign; Behold, a virgin shall conceive, and bear a son, and shall call his name Immanuel" (7:14). Matthew 1:23 cites this as fulfilled in Christ's birth. Chapters 9 and 11 expand further: "For unto us a child is born, unto us a son is given... and his name shall be called Wonderful, Counsellor, The mighty God, The everlasting Father, The Prince of Peace" (9:6). "And there shall come forth a rod out of the stem of Jesse, and a Branch shall grow out of his roots" (11:1) — the Messiah from David's line, under whose reign "the wolf also shall dwell with the lamb" (11:6).`,
  },
  {
    title_zh: `二、列国的审判与锡安的盼望（13-27章）`,
    title_en: `II. Oracles Against the Nations and Hope for Zion (Ch. 13-27)`,
    content_zh: `以赛亚书13-27章是针对列国的预言——巴比伦（13-14章）、摩押（15-16章）、大马色（17章）、埃及（19章）等。神不只是以色列的神，而是掌管万国历史的主宰。

"如今我起来，如今我挺身，如今我显出威严"（33:10）——神在历史中行动，列国的骄傲都要被打倒。巴比伦的王因骄傲宣告被逐出（14:12-15），"你心里曾说：我要升到天上；我要高举我的宝座在神众星以上"——这段话历代被解读为撒但堕落的描写。

第25-27章转为终末盼望——"在这山上，万军之耶和华必为万民用肥甘设摆筵席……他已经吞灭死亡直到永远"（25:6-8）。死亡将被吞灭的应许，保罗在哥林多前书15:54引用，指向基督的复活。`,
    content_en: `Isaiah 13-27 contains oracles against the nations -- Babylon (ch. 13-14), Moab (ch. 15-16), Damascus (ch. 17), Egypt (ch. 19), and others. God is not merely Israel's deity but the sovereign Lord of all nations' history.

"Now will I rise, saith the LORD; now will I be exalted; now will I lift up myself" (33:10) -- God acts in history; all national pride will be brought low. Babylon's king, because of pride, is declared fallen (14:12-15): "For thou hast said in thine heart, I will ascend into heaven, I will exalt my throne above the stars of God" -- historically interpreted as depicting Satan's fall.

Chapters 25-27 turn to eschatological hope: "In this mountain shall the LORD of hosts make unto all people a feast of fat things... He will swallow up death in victory" (25:6-8). Paul quotes this promise in 1 Corinthians 15:54, pointing to Christ's resurrection.`,
  },
  {
    title_zh: `三、希西家时代的危机与信心（28-39章）`,
    title_en: `III. Crisis and Faith in Hezekiah's Day (Ch. 28-39)`,
    content_zh: `以赛亚书28-35章包含六个"祸哉"（28:1, 29:1, 29:15, 30:1, 31:1, 33:1），指向各种错误：倚靠人的聪明（28章）、形式宗教（29章）、倚靠埃及（30-31章）。

36-39章是历史叙事——亚述王西拿基立围攻耶路撒冷，希西家王求告耶和华，神差遣天使一夜灭了亚述军185,000人（37:36）。这是全书神迹护理的明证。

然而39章记载了希西家的失败：他把宫中宝藏全部显给巴比伦使者看，以赛亚预言巴比伦将来必要夺走这一切。希西家的回应令人震惊："这是耶和华说的好话"（39:8）——他只满足于自己在世时的太平，不顾后代。以赛亚书的前半部（1-39章）以此作结，预备读者进入40-66章的安慰与盼望。`,
    content_en: `Isaiah 28-35 contains six "woes" (28:1, 29:1, 29:15, 30:1, 31:1, 33:1) addressing various failures: trusting human wisdom (ch. 28), formalistic religion (ch. 29), relying on Egypt (ch. 30-31).

Chapters 36-39 are historical narrative -- Assyrian king Sennacherib besieged Jerusalem; King Hezekiah cried to the LORD; God sent an angel who struck down 185,000 Assyrian troops in one night (37:36). This is the book's clearest demonstration of miraculous providence.

Yet chapter 39 records Hezekiah's failure: he showed all his palace treasures to Babylonian envoys; Isaiah prophesied Babylon would one day take it all. Hezekiah's response is startling: "Good is the word of the LORD which thou hast spoken" (39:8) -- content with peace in his own lifetime, unconcerned for his descendants. Isaiah's first half (ch. 1-39) ends here, preparing readers for the comfort and hope of ch. 40-66.`,
  },
  {
    title_zh: `四、神的安慰与受苦的仆人（40-55章）`,
    title_en: `IV. God's Comfort and the Suffering Servant (Ch. 40-55)`,
    content_zh: `"你们的神说：你们要安慰，安慰我的百姓"（40:1）——以赛亚书第二部分（40-55章）被称为"安慰之书"，语调从审判转为安慰。"你们要向耶路撒冷说安慰的话，又向他宣告说，他争战的日子已满了；他的罪孽赦免了"（40:2）。

40:3-5宣告一条旷野中的道路要被修直——施洗约翰引用此处指向自己为基督预备道路的使命（太3:3）。40章以永恒的应许结束："但那等候耶和华的必重新得力。他们必如鹰展翅上腾；他们奔跑却不困倦，行走却不疲乏"（40:31）。

这一部分最核心的是四首"仆人之歌"，逐步揭示弥赛亚的身份和使命。第一首（42:1-9）：仆人是神所拣选的，"他不喧嚷，不扬声"，温柔地带来公义。第二首（49:1-7）：仆人的使命不限于以色列，"我还要使你作外邦人的光，叫你施行我的救恩，直到地极"（49:6）。第三首（50:4-11）：仆人甘愿受苦，"人打我的背，我任他打；人拔我腮颊的胡须，我由他拔"（50:6）。

第四首（52:13-53:12）是全书的绝对高峰，也是旧约最清晰的十字架预言——在基督受难700年前写成：

"他诚然担当我们的忧患，背负我们的痛苦……他为我们的过犯受害，为我们的罪孽压伤。因他受的刑罚，我们得平安；因他受的鞭伤，我们得医治。我们都如羊走迷；各人偏行己路；耶和华使我们众人的罪孽都归在他身上"（53:4-6）。

"他被欺压，在受苦的时候却不开口；他像羊羔被牵到宰杀之地，又像羊在剪毛的人手下无声，他也是这样不开口"（53:7）——这正是耶稣在彼拉多面前沉默的预言（太27:14）。"耶和华却定意将他压伤，使他受痛苦。耶和华以他为赎罪祭"（53:10）——十字架不是意外，不是人的计划的胜利，而是神永恒定旨中的"赎罪祭"。韦敏斯德信条第十一章"论称义"正是以基督代替性赎罪为根基。`,
    content_en: `"Comfort ye, comfort ye my people, saith your God" (40:1) — Isaiah's second section (ch. 40-55), called "the Book of Comfort," shifts from judgment to consolation. "Speak ye comfortably to Jerusalem, and cry unto her, that her warfare is accomplished, that her iniquity is pardoned" (40:2).

40:3-5 announces a road to be made straight in the wilderness — John the Baptist cited this as his mission of preparing the way for Christ (Matt. 3:3). Chapter 40 closes with an eternal promise: "But they that wait upon the LORD shall renew their strength; they shall mount up with wings as eagles; they shall run, and not be weary; and they shall walk, and not faint" (40:31).

The core of this section is the four "Servant Songs," progressively revealing the Messiah's identity and mission. The first (42:1-9): the servant is God's chosen, "He shall not cry, nor lift up," gently bringing justice. The second (49:1-7): the servant's mission extends beyond Israel — "I will also give thee for a light to the Gentiles, that thou mayest be my salvation unto the end of the earth" (49:6). The third (50:4-11): the servant willingly suffers — "I gave my back to the smiters, and my cheeks to them that plucked off the hair" (50:6).

The fourth (52:13-53:12) is the book's absolute summit and the Old Testament's clearest prophecy of the cross — written 700 years before Christ's passion:

"Surely he hath borne our griefs, and carried our sorrows... But he was wounded for our transgressions, he was bruised for our iniquities: the chastisement of our peace was upon him; and with his stripes we are healed. All we like sheep have gone astray; we have turned every one to his own way; and the LORD hath laid on him the iniquity of us all." (Isaiah 53:4-6, KJV)

"He was oppressed, and he was afflicted, yet he opened not his mouth: he is brought as a lamb to the slaughter, and as a sheep before her shearers is dumb, so he openeth not his mouth" (53:7) — this is the very prophecy of Jesus' silence before Pilate (Matt. 27:14). "Yet it pleased the LORD to bruise him; he hath put him to grief: when thou shalt make his soul an offering for sin" (53:10) — the cross was not an accident, not the triumph of human schemes, but the "offering for sin" in God's eternal decree. Westminster Confession chapter 11, "Of Justification," is grounded in Christ's substitutionary atonement.`,
  },
  {
    title_zh: `五、归回的应许与新天新地（56-66章）`,
    title_en: `V. The Promise of Return and the New Heaven and Earth (Ch. 56-66)`,
    content_zh: `以赛亚书最后十一章将视野拉到终末和全地。第61章是耶稣在拿撒勒会堂宣读的经文："主的灵在我身上，因为他用膏膏我，叫我传福音给贫穷的人"（61:1；路加福音4:18）。耶稣宣告："今天这经应验在你们耳中了"——他就是那位受膏者。

以赛亚的终末异象是神要"创造新天新地"（65:17）——"从前的事不再被记念，也不再追想"。新耶路撒冷充满欢乐，哭泣和哀嚎不再有（65:19）。这是启示录新耶路撒冷异象的源头。

全书以庄严的双重结局结束：敬拜神的万民（66:23）与悖逆者的永远刑罚（66:24）。以赛亚书的信息是：神的圣洁要求审判，神的慈爱提供救恩，二者在基督十字架上相遇。`,
    content_en: `The final eleven chapters extend the vision to eternity and all the earth. Chapter 61 is the passage Jesus read in the Nazareth synagogue: "The Spirit of the Lord GOD is upon me; because the LORD hath anointed me to preach good tidings unto the meek" (61:1; Luke 4:18). Jesus declared: "This day is this scripture fulfilled in your ears" -- He is the anointed one.

Isaiah's eschatological vision is that God will "create new heavens and a new earth" (65:17) -- "the former shall not be remembered, nor come into mind." The New Jerusalem will be full of joy; crying and weeping will be no more (65:19). This is the source of Revelation's New Jerusalem vision.

The book ends with a solemn dual conclusion: all nations worshipping God (66:23) and the eternal punishment of the rebellious (66:24). Isaiah's message: God's holiness demands judgment; God's love provides salvation; both meet at the cross of Christ.`,
  },
]

const overview = {
  zh: `以赛亚书是旧约最长的先知书（66章），被称为"旧约的福音书"。先知以赛亚在犹大国乌西雅、约坦、亚哈斯、希西家四王时期（约公元前740-680年）事奉。全书结构常被比作圣经本身：前39章（如旧约39卷）以审判为主，后27章（如新约27卷）以安慰和救赎为主。

以赛亚书的核心是弥赛亚的应许——从以马内利的预言（7:14）到受苦仆人之歌（52:13-53:12），再到新天新地的异象（65-66章）。以赛亚书教导我们：审判不是神的最终目的，救赎才是。`,
  en: `Isaiah is the longest prophetic book (66 chapters), often called "the Gospel of the Old Testament." The prophet Isaiah served during the reigns of four Judean kings — Uzziah, Jotham, Ahaz, and Hezekiah (c. 740–680 BC). The book's structure is often compared to the Bible itself: the first 39 chapters (like the OT's 39 books) emphasize judgment; the last 27 (like the NT's 27 books) emphasize comfort and redemption.

Isaiah's core is the messianic promise — from the Immanuel prophecy (7:14) to the Suffering Servant Songs (52:13–53:12) to the vision of new heavens and new earth (ch. 65–66). Isaiah teaches: judgment is not God's final purpose; redemption is.`,
};

const outline = [
  ["1-5章", "犹大的控诉与审判", "Ch. 1–5", "Indictment of Judah"],
  ["6章", "以赛亚蒙召", "Ch. 6", "Isaiah's Commission"],
  ["7-12章", "以马内利预言与弥赛亚", "Ch. 7–12", "Immanuel; Messianic Prophecies"],
  ["13-23章", "列国的审判", "Ch. 13–23", "Oracles Against Nations"],
  ["24-27章", "以赛亚启示录", "Ch. 24–27", "Isaiah's Apocalypse"],
  ["28-35章", "祸与福交替", "Ch. 28–35", "Woes and Blessings"],
  ["36-39章", "历史叙事：希西家", "Ch. 36–39", "Historical: Hezekiah"],
  ["40-48章", "安慰与独一的神", "Ch. 40–48", "Comfort; The One God"],
  ["49-55章", "受苦的仆人", "Ch. 49–55", "The Suffering Servant"],
  ["56-66章", "末世荣耀与新天新地", "Ch. 56–66", "Future Glory; New Creation"],
];

const theology = {
  title_zh: `核心神学：受苦的仆人与新天新地`,
  title_en: `Core Theology: The Suffering Servant and the New Creation`,
  content_zh: `以赛亚书被称为"旧约中的福音书"，它对弥赛亚的预言之详尽、之清晰，在旧约中无出其右。

第一，神的圣洁与人的罪。以赛亚蒙召的异象（6章）奠定了全书的神学基调："圣哉！圣哉！圣哉！万军之耶和华"（6:3）。三重"圣哉"是希伯来文的最高级表达——神的圣洁是无限的、绝对的、不可妥协的。面对这圣洁，先知的反应是"祸哉！我灭亡了"（6:5）——真正认识神的圣洁，必然带来对自身罪性的深刻意识。改革宗神学强调：认识神（theologia）与认识自己（anthropologia）是不可分割的——加尔文《基督教要义》开篇即论此理。

第二，受苦的仆人——十字架的预言。以赛亚书52:13-53:12是全旧约最重要的弥赛亚预言。"祂为我们的过犯受害，为我们的罪孽压伤。因祂受的刑罚，我们得平安；因祂受的鞭伤，我们得医治"（53:5）。"耶和华使我们众人的罪孽都归在祂身上"（53:6）——这是替代性赎罪（penal substitutionary atonement）最清晰的旧约表述。祂"像羊被牵到宰杀之地"（53:7），预言基督默然承受十字架的苦难。使徒行传8章太监正在读这段经文时，腓利从耶稣的事迹给他解释——以赛亚书53章是通往福音的最直接的旧约通道。

第三，以马内利——神与我们同在。"必有童女怀孕生子，给祂起名叫以马内利"（7:14）。马太福音1:23直接引用这段经文指向基督的降生。"以马内利"的意思是"神与我们同在"——这不仅是一个名字，更是整个救赎历史的主题：从伊甸园的同行、会幕的同住、道成肉身的同在，到新天新地中"神的帐幕在人间，祂要与人同住"（启21:3）。

第四，新天新地的盼望。"看哪，我造新天新地"（65:17）。以赛亚书的结尾不停留在审判，而是展望终末的荣耀——"豺狼必与绵羊羔同居……在我圣山的遍处，这一切都不伤人，不害物"（11:6-9）。这是对创世记堕落的终极翻转：被咒诅的受造界将被完全更新。启示录21-22章直接呼应以赛亚的新天新地异象。`,
  content_en: `Isaiah is called "the Gospel in the Old Testament" — its messianic prophecies are unparalleled in detail and clarity throughout the Old Testament.

First, God's holiness and human sin. Isaiah's calling vision (ch. 6) sets the theological tone for the entire book: "Holy, holy, holy, is the LORD of hosts" (6:3). The threefold "holy" is the Hebrew superlative — God's holiness is infinite, absolute, and uncompromising. Before this holiness, the prophet's response was "Woe is me! for I am undone" (6:5) — truly knowing God's holiness necessarily produces a deep awareness of one's own sinfulness. Reformed theology emphasizes that the knowledge of God (theologia) and the knowledge of self (anthropologia) are inseparable — Calvin opens his Institutes with precisely this principle.

Second, the Suffering Servant — the prophecy of the cross. Isaiah 52:13–53:12 is the most important messianic prophecy in the entire Old Testament. "He was wounded for our transgressions, he was bruised for our iniquities: the chastisement of our peace was upon him; and with his stripes we are healed" (53:5). "The LORD hath laid on him the iniquity of us all" (53:6) — this is the clearest Old Testament statement of penal substitutionary atonement. He was "brought as a lamb to the slaughter" (53:7), prophesying Christ's silent endurance of the cross. In Acts 8, the Ethiopian eunuch was reading this very passage when Philip explained it through the story of Jesus — Isaiah 53 is the most direct Old Testament gateway to the gospel.

Third, Immanuel — God with us. "Behold, a virgin shall conceive, and bear a son, and shall call his name Immanuel" (7:14). Matthew 1:23 directly cites this verse pointing to Christ's birth. "Immanuel" means "God with us" — not merely a name but the theme of the entire history of redemption: from walking in Eden, to dwelling in the tabernacle, to the incarnation, to the new creation where "the tabernacle of God is with men, and he will dwell with them" (Rev 21:3).

Fourth, the hope of the new creation. "Behold, I create new heavens and a new earth" (65:17). Isaiah's conclusion does not rest in judgment but looks forward to eschatological glory — "The wolf also shall dwell with the lamb... they shall not hurt nor destroy in all my holy mountain" (11:6-9). This is the ultimate reversal of the fall in Genesis: the cursed creation will be fully renewed. Revelation 21-22 directly echoes Isaiah's vision of the new heavens and new earth.`,
};

const keyVerse = {
  zh: `"他为我们的过犯受害，为我们的罪孽压伤。因他受的刑罚，我们得平安；因他受的鞭伤，我们得医治。"（以赛亚书 53:5）`,
  en: `"But he was wounded for our transgressions, he was bruised for our iniquities: the chastisement of our peace was upon him; and with his stripes we are healed." (Isaiah 53:5)`,
};

const info = { nameZh: `以赛亚书`, nameEn: `Isaiah`, author: `以赛亚`, date: `约公元前740-680年`, chapters: `66章`, backHref: `/old-testament/major-prophets`, backLabel: `大先知书`, bibleId: `ISA` };


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