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
    title_zh: `二、卷二至卷三：群体的敬拜与历史反思（42-89篇）`,
    title_en: `II. Books II–III: Corporate Worship and Historical Reflection (Ps. 42–89)`,
    content_zh: `卷二（42-72篇）和卷三（73-89篇）从个人转向群体。可拉后裔的诗篇（42-49篇）表达了对圣殿和神同在的渴慕——"我的心渴想神，就是永生神；我几时得朝见神呢？"（42:2）

诗篇51篇是大卫犯罪后写下的忏悔诗，是旧约中最深刻的悔改祷告："神啊，求你为我造清洁的心，使我里面重新有正直的灵"（51:10）。大卫不仅承认行为的罪，更认识到罪性的深层问题："我是在罪孽里生的，在我母亲怀胎的时候就有了罪"（51:5）。

卷三最引人注目的是亚萨的诗篇73篇——他看见恶人亨通就几乎跌倒，"等我进了神的圣所，思想他们的结局"（73:17）才恍然大悟。这篇诗诚实地面对信仰中"恶人为何亨通"的困惑，最终在神的同在中找到答案。

诗篇89篇以大卫之约的赞美开始，却以被弃绝的哀歌结束——"你厌恶了与仆人所立的约，将他的冠冕践踏于地"（89:39）。卷三在黑暗中结束，但这恰恰为卷四"耶和华作王"的宣告做了铺垫。`,
    content_en: `Books II (Ps. 42–72) and III (Ps. 73–89) shift from individual to corporate. The psalms of the Sons of Korah (Ps. 42–49) express longing for the temple and God's presence — "My soul thirsteth for God, for the living God: when shall I come and appear before God?" (42:2).

Psalm 51 is David's penitential psalm after his sin, the Old Testament's most profound prayer of repentance: "Create in me a clean heart, O God; and renew a right spirit within me" (51:10). David confessed not only behavioral sin but the deeper problem of sinful nature: "Behold, I was shapen in iniquity; and in sin did my mother conceive me" (51:5).

Book III's most striking is Asaph's Psalm 73 — he nearly stumbled seeing the wicked prosper, "until I went into the sanctuary of God; then understood I their end" (73:17). This psalm honestly faces faith's perplexity over the prosperity of the wicked, ultimately finding its answer in God's presence.

Psalm 89 begins with praise for the Davidic Covenant but ends with a lament of rejection — "Thou hast made void the covenant of thy servant" (89:39). Book III closes in darkness, yet this sets the stage for Book IV's declaration: "The LORD reigneth."`,
  },
  {
    title_zh: `三、卷四至卷五：耶和华作王与大哈利路（90-150篇）`,
    title_en: `III. Books IV–V: The LORD Reigns and the Great Hallel (Ps. 90–150)`,
    content_zh: `卷四（90-106篇）以摩西的祷告开始："主啊，你世世代代作我们的居所"（90:1）。在大卫之约看似失败的背景下，诗人将目光转向更古老、更根本的真理——神自己就是祂百姓的居所。

"耶和华作王"的主题在诗篇93-100篇中反复出现，宣告无论地上的王如何失败，耶和华仍然在宝座上。诗篇100篇的欢呼是这组诗的高潮："普天下当向耶和华欢呼！你们当乐意侍奉耶和华，当来向他歌唱"（100:1-2）。

卷五（107-150篇）包含了上行之诗（120-134篇，朝圣者上耶路撒冷途中吟唱）和大哈利路（146-150篇）。诗篇119篇是全诗篇最长的一篇（176节），也是圣经最长的一章——整篇赞美神的话语，每八节以一个希伯来字母开始。

诗篇最后以五首"哈利路亚"诗结束（146-150篇），每一篇都以"你们要赞美耶和华"开始和结束。最后一节是整部诗篇的总结："凡有气息的都要赞美耶和华！你们要赞美耶和华！"（150:6）。从诗篇1篇的个人默想到诗篇150篇的宇宙赞美——这就是诗篇的旅程：一切受造物都当赞美造物主。`,
    content_en: `Book IV (Ps. 90–106) opens with Moses' prayer: "Lord, thou hast been our dwelling place in all generations" (90:1). Against the backdrop of the Davidic Covenant's apparent failure, the psalmist turns to an older, more fundamental truth — God Himself is His people's dwelling place.

The theme "The LORD reigneth" resounds through Psalms 93–100, declaring that however earthly kings fail, the LORD remains on His throne. Psalm 100 is the climax of this group: "Make a joyful noise unto the LORD, all ye lands. Serve the LORD with gladness: come before his presence with singing" (100:1–2).

Book V (Ps. 107–150) contains the Songs of Ascent (Ps. 120–134, sung by pilgrims ascending to Jerusalem) and the Great Hallel (Ps. 146–150). Psalm 119 is the Psalter's longest (176 verses) and the Bible's longest chapter — an entire poem praising God's Word, every eight verses beginning with a successive Hebrew letter.

The Psalter concludes with five "Hallelujah" psalms (146–150), each beginning and ending with "Praise ye the LORD." The final verse summarizes the entire Psalter: "Let every thing that hath breath praise the LORD. Praise ye the LORD" (150:6). From Psalm 1's personal meditation to Psalm 150's cosmic praise — this is the Psalter's journey: all creation praising the Creator.`,
  },
  {
    title_zh: `四、弥赛亚诗篇：基督的影子贯穿始终`,
    title_en: `IV. Messianic Psalms: The Shadow of Christ Throughout`,
    content_zh: `诗篇是新约引用最多的旧约书卷，其中弥赛亚诗篇尤其重要——它们在大卫时代写成，却精确预言了基督的降生、受苦、复活和统治。

诗篇2篇宣告弥赛亚的王权："你是我的儿子，我今日生你。你求我，我就将列国赐你为基业"（2:7-8）。使徒们在使徒行传4:25-26引用此篇，指向基督。

诗篇22篇是十字架的预言——写于钉十字架刑罚发明前约一千年。"我的神，我的神，为什么离弃我？"（22:1）是耶稣在十字架上的呼喊。"他们扎了我的手、我的脚"（22:16）、"他们分我的外衣，为我的里衣拈阄"（22:18）——一一应验在各各他。

诗篇110篇是新约引用最多的旧约经文之一："耶和华对我主说：你坐在我的右边，等我使你仇敌作你的脚凳"（110:1）。耶稣引用此篇证明弥赛亚不仅是大卫的子孙，更是大卫的主（马太福音22:44）。"你是照着麦基洗德的等次永远为祭司"（110:4）——希伯来书详细论述了基督按麦基洗德等次永远作大祭司的教义。

诗篇16:10"你必不将我的灵魂撇在阴间"，被彼得在五旬节讲道中引用，证明基督的复活（使徒行传2:27）。诗篇118:22"匠人所弃的石头已成了房角的头块石头"，耶稣亲自引用，指向自己被弃绝又被高举（马太福音21:42）。弥赛亚诗篇证明：整部旧约都在见证基督。`,
    content_en: `Psalms is the Old Testament book most quoted in the New Testament, and the messianic psalms are especially significant — written in David's time, they precisely prophesy Christ's birth, suffering, resurrection, and reign.

Psalm 2 declares the Messiah's kingship: "Thou art my Son; this day have I begotten thee. Ask of me, and I shall give thee the heathen for thine inheritance" (2:7-8). The apostles cited this psalm in Acts 4:25-26, pointing to Christ.

Psalm 22 is a prophecy of the cross — written approximately a thousand years before crucifixion was invented as a form of execution. "My God, my God, why hast thou forsaken me?" (22:1) was Jesus' cry on the cross. "They pierced my hands and my feet" (22:16), "They part my garments among them, and cast lots upon my vesture" (22:18) — all fulfilled at Calvary.

Psalm 110 is one of the most frequently cited Old Testament texts in the New Testament: "The LORD said unto my Lord, Sit thou at my right hand, until I make thine enemies thy footstool" (110:1). Jesus cited this psalm to prove the Messiah is not only David's son but David's Lord (Matthew 22:44). "Thou art a priest for ever after the order of Melchizedek" (110:4) — Hebrews expounds in detail the doctrine of Christ as eternal high priest after the order of Melchizedek.

Psalm 16:10, "thou wilt not leave my soul in hell," was cited by Peter at Pentecost to prove Christ's resurrection (Acts 2:27). Psalm 118:22, "The stone which the builders refused is become the head stone of the corner," was quoted by Jesus Himself, pointing to His own rejection and exaltation (Matthew 21:42). The messianic psalms prove: the entire Old Testament bears witness to Christ.`,
  },
  {
    title_zh: `五、诗篇在基督徒灵修中的地位`,
    title_en: `V. The Place of the Psalms in Christian Devotion`,
    content_zh: `诗篇自古以来就是基督徒灵修的核心。初代教会将诗篇作为日常祷告和敬拜的基础；修道院传统中，修士们每周诵读全部150篇；改革宗传统更是推崇诗篇颂唱（Psalm singing）。加尔文称诗篇为"灵魂的解剖学"——因为它真实地展现了信徒在神面前的一切情感。

诗篇教导我们如何祷告。赞美诗篇（如103、145-150篇）教我们在一切环境中赞美神；哀歌诗篇（如13、22、88篇）教我们在痛苦中向神倾诉而不是压抑情感；忏悔诗篇（如32、51篇）教我们在罪中悔改；感恩诗篇（如30、116篇）教我们记念神的恩典；咒诅诗篇（如35、109篇）教我们将公义的诉求交给审判的神。

韦敏斯德小要理问答第98问："祷告是什么？"答："祷告是奉基督的名，向神倾心吐意，承认我们的罪，感谢地求他的恩典。"诗篇正是这一切的范本。

路德说："诗篇是一本小圣经。"它浓缩了全部圣经的教义，以祷告和赞美的形式呈现。无论你在信仰的哪个阶段——初信的喜乐、试炼中的挣扎、黑夜中的等候、得胜后的赞美——诗篇都有一篇为你预备的话语。`,
    content_en: `The Psalms have been central to Christian devotion since antiquity. The early church used the Psalms as the foundation for daily prayer and worship; in the monastic tradition, monks recited all 150 psalms weekly; the Reformed tradition especially championed psalm singing. Calvin called the Psalms "an anatomy of all the parts of the soul" — because they truthfully display every emotion of the believer before God.

The Psalms teach us how to pray. Praise psalms (e.g., 103, 145-150) teach us to praise God in all circumstances; lament psalms (e.g., 13, 22, 88) teach us to pour out our pain to God rather than suppress our emotions; penitential psalms (e.g., 32, 51) teach us repentance in sin; thanksgiving psalms (e.g., 30, 116) teach us to remember God's grace; imprecatory psalms (e.g., 35, 109) teach us to entrust our cry for justice to the God who judges righteously.

WSC Q98: "What is prayer?" A: "Prayer is an offering up of our desires unto God, for things agreeable to His will, in the name of Christ, with confession of our sins, and thankful acknowledgment of His mercies." The Psalms are the template for all of this.

Luther said: "The Psalms are a little Bible." They condense all biblical doctrine, presented in the form of prayer and praise. Whatever stage of faith you are in — the joy of new belief, the struggle of trials, the waiting in the dark night, the praise after victory — the Psalms have a word prepared for you.`,
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

const keyVerse = {
  zh: `"耶和华是我的牧者，我必不至缺乏。"（诗篇 23:1）`,
  en: `"The LORD is my shepherd; I shall not want." (Psalm 23:1)`,
};

const info = { nameZh: `诗篇`, nameEn: `Psalms`, author: `大卫、亚萨、可拉后裔、摩西等`, date: `约公元前1410-450年`, chapters: `150篇`, backHref: `/old-testament/poetry`, backLabel: `诗歌智慧书`, bibleId: `PSA` };

export default function BookGuide() {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link href={info.backHref} className="inline-flex items-center gap-1 text-sm text-[var(--color-accent)] hover:underline mb-6">← {info.backLabel}</Link>
      <div className="text-center mb-10"><span className="text-5xl mb-4 block">📖</span><h1 className="font-serif-cn text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-2">{info.nameZh}导读</h1><p className="text-base text-[var(--color-text-secondary)] italic mb-4">A Guide to {info.nameEn}</p><div className="flex justify-center gap-4 text-xs text-[var(--color-text-secondary)]"><span>✍️ 作者：{info.author}</span><span>📅 {info.date}</span><span>📄 {info.chapters}</span></div></div>
      <div className="mb-10 p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)]"><h2 className="font-serif-cn text-lg font-bold text-[var(--color-text)] mb-3">📋 全书概览</h2><div className="flex items-start gap-2 mb-3"><SpeakButton text={overview.zh} lang="zh" /><p className="text-sm text-[var(--color-text)] leading-relaxed font-serif-cn">{overview.zh}</p></div><div className="flex items-start gap-2"><SpeakButton text={overview.en} lang="en" /><p className="text-xs text-[var(--color-text-secondary)] italic leading-relaxed">{overview.en}</p></div></div>
      <div className="mb-10 p-5 rounded-xl bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border border-amber-200 dark:border-amber-800"><p className="text-sm font-bold text-amber-800 dark:text-amber-300 mb-1">🔑 金句 Key Verse</p><p className="font-serif-cn text-base text-[var(--color-text)] font-bold leading-relaxed">{keyVerse.zh}</p><p className="text-sm text-[var(--color-text-secondary)] italic mt-1">{keyVerse.en}</p></div>
      <div className="mb-6"><h2 className="font-serif-cn text-xl font-bold text-[var(--color-text)] mb-1">📚 分段导读</h2><p className="text-xs text-[var(--color-text-secondary)] italic mb-4">Section-by-Section Guide</p></div>
      <div className="space-y-4">{sections.map((sec, i) => (<div key={i} className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] overflow-hidden"><button onClick={() => setExpandedIdx(expandedIdx === i ? null : i)} className="w-full flex items-center justify-between px-6 py-4 text-left cursor-pointer hover:bg-[var(--color-accent)]/5 transition-colors"><div><h3 className="font-serif-cn text-base font-bold text-[var(--color-text)]">{sec.title_zh}</h3><p className="text-xs text-[var(--color-text-secondary)] italic">{sec.title_en}</p></div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-5 h-5 text-[var(--color-text-secondary)] transition-transform ${expandedIdx === i ? 'rotate-180' : ''}`}><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" /></svg></button>{expandedIdx === i && (<div className="px-6 pb-5 border-t border-[var(--color-border)]"><div className="flex items-start gap-2 mt-4 mb-4"><SpeakButton text={sec.content_zh} lang="zh" /><p className="text-sm text-[var(--color-text)] leading-relaxed font-serif-cn whitespace-pre-line">{sec.content_zh}</p></div><div className="flex items-start gap-2"><SpeakButton text={sec.content_en} lang="en" /><p className="text-xs text-[var(--color-text-secondary)] italic leading-relaxed whitespace-pre-line">{sec.content_en}</p></div></div>)}</div>))}</div>
      <div className="mt-10 p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)]"><h2 className="font-serif-cn text-lg font-bold text-[var(--color-text)] mb-4">🗂️ 章节大纲</h2>{(() => { const half = Math.ceil(outline.length / 2); const col1 = outline.slice(0, half); const col2 = outline.slice(half); const renderItem = ([zh, desc, chEn, descEn]: string[], i: number) => (<div key={i} className="py-1.5 border-b border-[var(--color-border)]/30 last:border-b-0"><div className="flex items-baseline gap-2"><span className="font-bold text-[var(--color-accent)] min-w-[65px] shrink-0">{zh}</span><span className="text-[var(--color-text)]">{desc}</span></div><div className="flex items-baseline gap-2 mt-0.5"><span className="text-[var(--color-text-secondary)] text-xs italic min-w-[65px] shrink-0">{chEn}</span><span className="text-[var(--color-text-secondary)] text-xs italic">{descEn}</span></div></div>); return (<div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 text-sm"><div>{col1.map((item, i) => renderItem(item, i))}</div><div>{col2.map((item, i) => renderItem(item, i + half))}</div></div>); })()}</div>
      <div className="mt-8 text-center"><Link href={`/bible/${info.bibleId}`} className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--color-accent)] text-white font-bold hover:opacity-90 transition-opacity">📖 阅读{info.nameZh} Read {info.nameEn}</Link></div>
    </div>
  );
}