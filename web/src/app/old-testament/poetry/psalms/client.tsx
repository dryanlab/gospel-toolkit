'use client';
import Link from 'next/link';
import SpeakButton from '@/components/SpeakButton';
import { useState } from 'react';

const sections = [
  {
    title_zh: `一、卷一：个人的祷告与赞美（1-41篇）`,
    title_en: `I. Book I: Personal Prayers and Praise (Ps. 1–41)`,
    content_zh: `诗篇第一篇是整部诗篇的序言和钥匙——"不从恶人的计谋，不站罪人的道路，不坐亵慢人的座位，惟喜爱耶和华的律法，昼夜思想"（1:1-2）。这不是三件事，而是一个渐进的过程：从"经过"到"停留"到"坐下"，罪的吸引总是从偶然接触开始。与之对比的是义人——像栽在溪水旁的树，"按时候结果子，叶子也不枯干"（1:3）。

第二篇是弥赛亚诗篇的开端："你是我的儿子，我今日生你"（2:7）——新约多次引用此节指向基督（徒13:33，来1:5）。诗篇2篇与诗篇1篇共同构成整部诗篇的导论：义人的道路与弥赛亚的国度。

卷一以大卫的诗为主，充满了个人在苦难中的呐喊和信靠。诗篇23篇"耶和华是我的牧者，我必不至缺乏"是全世界最广为人知的经文之一。诗篇22篇以"我的神，我的神！为什么离弃我？"开始——这正是基督在十字架上的呼喊（太27:46）。这篇诗对十字架场景的描写惊人地详细：被扎的手脚（22:16）、被分的外衣（22:18）、被嗤笑的话语（22:7-8）——写于钉十字架刑罚发明之前约一千年。`,
    content_en: `Psalm 1 is the preface and key to the entire Psalter — "Blessed is the man that walketh not in the counsel of the ungodly, nor standeth in the way of sinners, nor sitteth in the seat of the scornful. But his delight is in the law of the LORD; and in his law doth he meditate day and night" (1:1–2). This is not three separate actions but a gradual progression: from passing through to standing still to sitting down — sin's allure always begins with casual contact. In contrast, the righteous are "like a tree planted by the rivers of water, that bringeth forth his fruit in his season; his leaf also shall not wither" (1:3).

Psalm 2 inaugurates the messianic psalms: "Thou art my Son; this day have I begotten thee" (2:7) — cited repeatedly in the New Testament as pointing to Christ (Acts 13:33, Heb 1:5). Psalms 1 and 2 together form the introduction to the entire Psalter: the way of the righteous and the kingdom of the Messiah.

Book I is dominated by David's psalms, filled with personal cries in suffering and trust. Psalm 23 — "The LORD is my shepherd; I shall not want" — is among the most widely known scriptures in the world. Psalm 22 opens with "My God, my God, why hast thou forsaken me?" — the very cry of Christ on the cross (Matt 27:46). Its description of crucifixion is astonishingly detailed: pierced hands and feet (22:16), divided garments (22:18), mocking words (22:7–8) — written approximately a thousand years before crucifixion was invented.`,
  },
  {
    title_zh: `二、卷二：可拉后裔与大卫的诗（42-72篇）`,
    title_en: `II. Book II: The Sons of Korah and David (Ps. 42–72)`,
    content_zh: `卷二（42-72篇）从个人转向群体敬拜。可拉后裔的诗篇（42-49篇）表达了对圣殿和神同在的渴慕——"我的心渴想神，就是永生神；我几时得朝见神呢？"（42:2）。诗篇46篇是改教运动的灵感之源："神是我们的避难所，是我们的力量，是我们在患难中随时的帮助"（46:1）——路德据此写下《坚固保障》。

诗篇51篇是大卫犯罪后写下的忏悔诗，是旧约中最深刻的悔改祷告："神啊，求你为我造清洁的心，使我里面重新有正直的灵"（51:10）。大卫不仅承认行为的罪，更认识到罪性的深层问题："我是在罪孽里生的，在我母亲怀胎的时候就有了罪"（51:5）。改革宗原罪教义的旧约根基正在这里。

诗篇45篇是弥赛亚的婚礼诗——"你的宝座是永永远远的；你的国权是正直的"（45:6），希伯来书1:8引用此节证明基督的神性。诗篇72篇是所罗门的诗，描绘理想君王的统治："他要执掌权柄，从这海直到那海，从大河直到地极"（72:8）——这远超所罗门的版图，指向弥赛亚的国度。

卷二以"耶西的儿子大卫的祈祷完毕"（72:20）作结，标志着大卫诗篇的主体结束。`,
    content_en: `Book II (Ps. 42-72) shifts from the individual to corporate worship. The psalms of the Sons of Korah (Ps. 42-49) express longing for the temple and God's presence — "My soul thirsteth for God, for the living God: when shall I come and appear before God?" (42:2). Psalm 46 inspired the Reformation: "God is our refuge and strength, a very present help in trouble" (46:1) — Luther wrote "A Mighty Fortress" from this psalm.

Psalm 51 is David's penitential psalm after his sin, the Old Testament's most profound prayer of repentance: "Create in me a clean heart, O God; and renew a right spirit within me" (51:10). David confessed not only behavioral sin but the deeper problem of sinful nature: "Behold, I was shapen in iniquity; and in sin did my mother conceive me" (51:5). The Reformed doctrine of original sin finds its Old Testament foundation here.

Psalm 45 is the Messiah's wedding psalm — "Thy throne, O God, is for ever and ever: the sceptre of thy kingdom is a right sceptre" (45:6); Hebrews 1:8 cites this verse to prove Christ's deity. Psalm 72, Solomon's psalm, depicts the ideal king's reign: "He shall have dominion also from sea to sea, and from the river unto the ends of the earth" (72:8) — far surpassing Solomon's territory, pointing to the Messiah's kingdom.

Book II closes with "The prayers of David the son of Jesse are ended" (72:20), marking the conclusion of the main Davidic collection.`,
  },
  {
    title_zh: `三、卷三：亚萨的诗与信仰的危机（73-89篇）`,
    title_en: `III. Book III: Asaph's Psalms and the Crisis of Faith (Ps. 73–89)`,
    content_zh: `卷三（73-89篇）以亚萨的诗为主体，开篇的诗篇73篇是全诗篇中最坦诚面对信仰危机的一篇。亚萨坦言自己因看见恶人亨通而几乎跌倒："我的脚几乎失闪；我的脚险些滑跌"（73:2）。恶人"不受苦楚"、"凡事顺利"（73:4-5），义人却"终日遭灾难"（73:14）——这公平吗？

转折出现在73:17："等我进了神的圣所，思想他们的结局。"在神的光中看问题，一切都改变了。恶人的亨通是暂时的幻象，"你实在把他们安在滑地，使他们掉在沉沦之中"（73:18）。但最美的不是恶人的下场，而是义人与神的关系："然而，我常与你同在；你搀着我的右手"（73:23）。

诗篇74和79篇哀叹圣殿被毁——这可能反映了巴比伦入侵的创伤。"神啊，你为何永远丢弃我们呢？"（74:1）。诗篇78篇是一首历史回顾诗，从出埃及到大卫，提醒百姓神在历史中的信实与管教。

卷三以诗篇89篇结束——一首关于大卫之约看似破裂的哀歌："你却丢掉弃绝，向你的受膏者发怒"（89:38）。卷三结束在黑暗中，但这正是为卷四（"耶和华作王"）的盼望做预备。`,
    content_en: `Book III (Ps. 73-89) is dominated by Asaph's psalms, opening with Psalm 73 — the Psalter's most candid confrontation with a crisis of faith. Asaph confesses he nearly stumbled upon seeing the wicked prosper: "My feet were almost gone; my steps had well nigh slipped" (73:2). The wicked have "no bands in their death" and are "not in trouble as other men" (73:4-5), while the righteous are "plagued all the day long" (73:14) — is this fair?

The turning point comes at 73:17: "Until I went into the sanctuary of God; then understood I their end." Seeing things in God's light changes everything. The prosperity of the wicked is a temporary illusion — "Surely thou didst set them in slippery places: thou castedst them down into destruction" (73:18). But the greatest revelation is not the wicked's fate but the righteous person's relationship with God: "Nevertheless I am continually with thee: thou hast holden me by my right hand" (73:23).

Psalms 74 and 79 lament the destruction of the temple — possibly reflecting the trauma of Babylon's invasion. "O God, why hast thou cast us off for ever?" (74:1). Psalm 78 is a historical review from the Exodus to David, reminding the people of God's faithfulness and discipline throughout history.

Book III ends with Psalm 89 — a lament over the Davidic covenant's apparent collapse: "But thou hast cast off and abhorred, thou hast been wroth with thine anointed" (89:38). Book III closes in darkness, but this prepares for Book IV's hope ("The LORD reigneth").`,
  },
  {
    title_zh: `四、卷四：耶和华作王——超越大卫之约的盼望（90-106篇）`,
    title_en: `IV. Book IV: The LORD Reigns — Hope Beyond the Davidic Covenant (Ps. 90–106)`,
    content_zh: `卷四（90-106篇）以摩西的祷告开始："主啊，你世世代代作我们的居所"（90:1）。在卷三以大卫之约的"失败"收尾之后，卷四将目光转向更古老、更根本的真理——在大卫之前，在王国之前，神自己就是祂百姓的居所。

"耶和华作王"的主题在诗篇93-100篇中反复出现，宣告无论地上的王如何失败，耶和华仍然坐在宝座上。"耶和华作王！祂以威严为衣穿上"（93:1）；"全地都要向耶和华歌唱！天天传扬祂的救恩"（96:2）。诗篇100篇的欢呼是这组诗的高潮："普天下当向耶和华欢呼！你们当乐意侍奉耶和华，当来向祂歌唱"（100:1-2）。

诗篇103篇是全诗篇中最温柔的赞美诗之一："耶和华有怜悯，有恩典，不轻易发怒，且有丰盛的慈爱"（103:8）。"天离地何等的高，祂的慈爱向敬畏祂的人也是何等的大"（103:11）。"父亲怎样怜恤他的儿女，耶和华也怎样怜恤敬畏祂的人"（103:13）——这不是一位遥远的审判者，而是一位慈父。

诗篇104篇赞美创造之工，105-106篇回顾救赎历史（出埃及与旷野）。卷四以赞美和历史的双重锚定，告诉在被掳中绝望的百姓：你们的盼望不在大卫的宝座上，而在永恒的耶和华身上。`,
    content_en: `Book IV (Ps. 90-106) opens with Moses' prayer: "Lord, thou hast been our dwelling place in all generations" (90:1). After Book III ended with the Davidic covenant's apparent "failure," Book IV turns to an older, more fundamental truth — before David, before the kingdom, God Himself was His people's dwelling place.

The theme "The LORD reigneth" resounds through Psalms 93-100, declaring that however earthly kings fail, the LORD remains on His throne. "The LORD reigneth, he is clothed with majesty" (93:1); "Sing unto the LORD, all the earth; shew forth his salvation from day to day" (96:2). Psalm 100 is this group's climax: "Make a joyful noise unto the LORD, all ye lands. Serve the LORD with gladness: come before his presence with singing" (100:1-2).

Psalm 103 is one of the Psalter's tenderest hymns: "The LORD is merciful and gracious, slow to anger, and plenteous in mercy" (103:8). "For as the heaven is high above the earth, so great is his mercy toward them that fear him" (103:11). "Like as a father pitieth his children, so the LORD pitieth them that fear him" (103:13) — this is not a distant judge but a tender Father.

Psalm 104 praises creation; Psalms 105-106 review redemptive history (Exodus and wilderness). Book IV, anchored in praise and history, tells the despairing exiles: your hope rests not on David's throne but on the eternal LORD.`,
  },
  {
    title_zh: `五、卷五：感恩、上行与大哈利路（107-150篇）`,
    title_en: `V. Book V: Thanksgiving, Ascent, and the Great Hallel (Ps. 107–150)`,
    content_zh: `卷五（107-150篇）是诗篇的终章，从感恩走向宇宙性的赞美。

诗篇107篇以"你们要称谢耶和华，因祂本为善"开始，描绘了四种困境中蒙拯救的人——旷野中迷路的、坐在黑暗中的、因犯罪受苦的、在海上遭风暴的。每一组都呼喊"他们在苦难中哀求耶和华，祂从他们的祸患中拯救他们"——神是一切困境中的拯救者。

上行之诗（120-134篇）是朝圣者上耶路撒冷途中吟唱的诗歌。从远方的哀叹（120篇"我寄居在米设"）到抵达圣殿的喜乐（134篇"站在耶和华殿中的"）——这是一趟从流浪到归家的旅程。诗篇121篇是其中最安慰人的："我要向山举目……我的帮助从造天地的耶和华而来"（121:1-2）。

诗篇119篇是全诗篇最长的一篇（176节），整篇赞美神的话语。每八节以一个希伯来字母开始，表达了对神律法的热爱："你的话是我脚前的灯，是我路上的光"（119:105）。

诗篇以五首"哈利路亚"诗结束（146-150篇），每一篇都以"你们要赞美耶和华"开始和结束。最后一节是整部诗篇的总结："凡有气息的都要赞美耶和华！你们要赞美耶和华！"（150:6）。从诗篇1篇的个人默想到诗篇150篇的宇宙赞美——这就是诗篇的旅程。`,
    content_en: `Book V (Ps. 107-150) is the Psalter's finale, moving from thanksgiving to cosmic praise.

Psalm 107 opens with "O give thanks unto the LORD, for he is good," portraying four groups delivered from distress — wanderers in the desert, prisoners in darkness, those suffering for sin, and sailors in storms. Each group cried "unto the LORD in their trouble, and he delivered them out of their distresses" — God rescues from every extremity.

The Songs of Ascent (Ps. 120-134) were sung by pilgrims ascending to Jerusalem. From distant lament (Ps. 120, "Woe is me, that I sojourn in Mesech") to the joy of arriving at the temple (Ps. 134, "ye that by night stand in the house of the LORD") — this is a journey from exile to homecoming. Psalm 121 is among the most comforting: "I will lift up mine eyes unto the hills... My help cometh from the LORD, which made heaven and earth" (121:1-2).

Psalm 119 is the Psalter's longest (176 verses), entirely devoted to praising God's Word. Every eight verses begin with a successive Hebrew letter, expressing love for God's law: "Thy word is a lamp unto my feet, and a light unto my path" (119:105).

The Psalter concludes with five "Hallelujah" psalms (146-150), each beginning and ending with "Praise ye the LORD." The final verse summarizes the entire Psalter: "Let every thing that hath breath praise the LORD. Praise ye the LORD" (150:6). From Psalm 1's personal meditation to Psalm 150's cosmic praise — this is the Psalter's journey.`,
  },
];

const overview = {
  zh: `诗篇是旧约中最长的书卷，包含150篇诗歌，分为五卷（对应摩西五经）：卷一（1-41）、卷二（42-72）、卷三（73-89）、卷四（90-106）、卷五（107-150）。诗篇涵盖了人类情感的全部光谱——赞美、哀哭、忏悔、感恩、愤怒、盼望、敬畏。

诗篇不仅是以色列的"诗歌集"，更是圣殿敬拜的"诗歌本"。大卫写了约73篇，其余作者包括亚萨、可拉后裔、摩西、所罗门等。诗篇是新约引用最多的旧约书卷——耶稣自己也反复引用诗篇，特别是弥赛亚诗篇（2、22、110等）。诗篇教导我们如何向神说话：用诚实的心，用一切的情感。`,
  en: `Psalms is the longest book of the Old Testament, containing 150 poems divided into five books (mirroring the Pentateuch): Book I (1–41), Book II (42–72), Book III (73–89), Book IV (90–106), and Book V (107–150). The Psalms encompass the full spectrum of human emotion — praise, weeping, penitence, thanksgiving, anger, hope, and awe.

The Psalms served not only as Israel's "poetry anthology" but as the "hymnal" for temple worship. David wrote approximately 73; other authors include Asaph, the Sons of Korah, Moses, and Solomon. Psalms is the Old Testament book most frequently quoted in the New Testament — Jesus Himself repeatedly cited the Psalms, especially the messianic psalms (2, 22, 110, etc.). The Psalms teach us how to speak to God: with an honest heart, with every emotion.`,
};

const outline = [
  ["卷一 1-41篇", "大卫的祷告与赞美", "Book I: Ps. 1–41", "David's Prayers and Praise"],
  ["卷二 42-72篇", "可拉后裔与大卫的诗", "Book II: Ps. 42–72", "Korah and David"],
  ["卷三 73-89篇", "亚萨的诗与历史反思", "Book III: Ps. 73–89", "Asaph; Historical Reflection"],
  ["卷四 90-106篇", "耶和华作王", "Book IV: Ps. 90–106", "The LORD Reigns"],
  ["卷五 107-150篇", "感恩、上行与哈利路", "Book V: Ps. 107–150", "Thanks, Ascent, Hallel"],
  ["弥赛亚诗篇", "2, 22, 45, 72, 110篇等", "Messianic Psalms", "Ps. 2, 22, 45, 72, 110, etc."],
  ["忏悔诗篇", "6, 32, 38, 51, 102, 130, 143篇", "Penitential Psalms", "Ps. 6, 32, 38, 51, 102, 130, 143"],
  ["上行之诗", "120-134篇", "Songs of Ascent", "Ps. 120–134"],
  ["大哈利路", "146-150篇", "Great Hallel", "Ps. 146–150"],
];

const theology = {
  title_zh: `核心神学：以色列的祷告与敬拜之书`,
  title_en: `Core Theology: Israel's Book of Prayer and Worship`,
  content_zh: `诗篇是圣经中最被广泛诵读的书卷，被称为"圣经中的圣经"。路德说诗篇是"整本圣经的缩影"，加尔文称它为"灵魂的解剖学"——因为它展现了信徒在神面前一切真实的情感。

第一，弥赛亚诗篇——指向基督的预言。诗篇中有大量直接指向基督的预言：第2篇"你是我的儿子，我今日生你"（2:7，徒13:33引用指向基督的复活）；第22篇"我的神，我的神，为什么离弃我？"（22:1，耶稣在十字架上的呼喊）；第110篇"耶和华对我主说：你坐在我的右边"（110:1，新约引用最多的旧约经文）；第16篇"你必不将我的灵魂撇在阴间"（16:10，彼得在五旬节引用指向基督的复活）。耶稣自己说"诗篇上所记的，凡指着我的话都必须应验"（路24:44）。

第二，哀歌——诚实的信仰。诗篇中约有三分之一是哀歌（如诗13、22、42、88篇），表达了痛苦、困惑、甚至对神的质疑。这教导我们：信仰不是假装一切都好，而是在最真实的情感中转向神。诗篇88篇是全诗篇中最黑暗的——从头到尾没有一丝光明，以"黑暗成了我最亲密的朋友"结尾。但它仍然是一首"祷告"——即使在绝望中，诗人仍在对神说话。这就是信仰：不是没有黑暗，而是在黑暗中仍然呼求神。

第三，律法诗——以神的话语为乐。诗篇1篇和119篇是律法诗的代表。"惟喜爱耶和华的律法，昼夜思想，这人便为有福"（1:2）。诗篇119篇是全圣经最长的一章，176节全部在颂赞神的话语。改革宗传统特别强调"唯独圣经"（Sola Scriptura），诗篇119篇是这个信念最热情的表达——神的话语不是沉重的负担，而是"我脚前的灯，路上的光"（119:105），是"比蜜甘甜"（119:103）的喜乐之源。

第四，诗篇作为教会的祷告书。改革宗传统有悠久的"唱诗篇"（psalmody）传统。诗篇涵盖了信徒生命中的所有处境：喜乐与悲伤、感恩与忏悔、赞美与哀叹、个人与群体。无论你在什么境况中，诗篇都有一首为你预备的祷告。`,
  content_en: `The Psalms are the most widely read book of the Bible, called "the Bible within the Bible." Luther said the Psalms are "a summary of the entire Bible"; Calvin called them "the anatomy of the soul" — for they display every authentic emotion a believer experiences before God.

First, Messianic psalms — prophecies pointing to Christ. The Psalms contain numerous direct prophecies of Christ: Psalm 2, "Thou art my Son; this day have I begotten thee" (2:7; Acts 13:33 applies this to Christ's resurrection); Psalm 22, "My God, my God, why hast thou forsaken me?" (22:1, Jesus's cry on the cross); Psalm 110, "The LORD said unto my Lord, Sit thou at my right hand" (110:1, the Old Testament verse most quoted in the New Testament); Psalm 16, "thou wilt not leave my soul in hell" (16:10, Peter cited this at Pentecost pointing to Christ's resurrection). Jesus Himself said "all things must be fulfilled, which were written in... the psalms, concerning me" (Luke 24:44).

Second, laments — honest faith. Approximately one-third of the Psalms are laments (e.g., Ps 13, 22, 42, 88), expressing pain, confusion, and even questioning of God. This teaches us: faith is not pretending everything is fine but turning to God with our most authentic emotions. Psalm 88 is the darkest in the entire Psalter — from beginning to end there is not a single ray of light, ending with "darkness is my closest friend." Yet it is still a "prayer" — even in despair, the psalmist is still speaking to God. This is faith: not the absence of darkness, but crying out to God within the darkness.

Third, Torah psalms — delighting in God's Word. Psalms 1 and 119 represent the Torah psalms. "His delight is in the law of the LORD; and in his law doth he meditate day and night" (1:2). Psalm 119, the longest chapter in the Bible, devotes all 176 verses to celebrating God's Word. The Reformed tradition particularly emphasizes Sola Scriptura; Psalm 119 is the most passionate expression of this conviction — God's Word is not a heavy burden but "a lamp unto my feet, and a light unto my path" (119:105), a source of joy "sweeter than honey" (119:103).

Fourth, the Psalms as the church's prayer book. The Reformed tradition has a long history of psalmody. The Psalms cover every circumstance of the believer's life: joy and sorrow, thanksgiving and confession, praise and lament, individual and communal. Whatever your situation, the Psalms have a prayer prepared for you.`,
};

const keyVerse = {
  zh: `"耶和华是我的牧者，我必不至缺乏。"（诗篇 23:1）`,
  en: `"The LORD is my shepherd; I shall not want." (Psalm 23:1)`,
};

const info = { nameZh: `诗篇`, nameEn: `Psalms`, author: `大卫、亚萨、可拉后裔、摩西等`, date: `约公元前1410-450年`, chapters: `150篇`, backHref: `/old-testament/poetry`, backLabel: `诗歌智慧书`, bibleId: `PSA` };


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