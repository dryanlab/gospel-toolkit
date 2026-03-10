'use client';
import Link from 'next/link';
import SpeakButton from '@/components/SpeakButton';
import { useState } from 'react';

const sections = [
  {
    title_zh: `一、所罗门的荣耀与智慧（1-10章）`,
    title_en: `I. Solomon's Glory and Wisdom (Ch. 1–10)`,
    content_zh: `列王纪上以大卫年老衰迈开始。亚多尼雅企图夺位，但先知拿单和拔示巴促成所罗门按照神的旨意继位（1章）。大卫临终嘱咐所罗门要刚强壮胆，遵守耶和华的律法（2:1-4）。

所罗门在基遍献祭时，神在梦中向他显现，问他想要什么。所罗门没有求富贵寿命，而是求"辨别是非的智慧"（3:9）。神因此赐他无比的智慧，加上他没有求的富足和尊荣。两个妇人争孩子的审判（3:16-28）成为所罗门智慧的经典案例。

圣殿的建造（5-8章）是全书前半部的高潮。所罗门用七年建造了这座辉煌的殿宇。献殿祷告（8章）是旧约最伟大的公祷之一，所罗门在其中预见了以色列未来的犯罪、被掳和悔改，祈求神垂听"求你在天上你的居所垂听，垂听而赦免"（8:30）。

示巴女王的来访（10章）见证了所罗门荣耀的顶峰："你的智慧和你的福分越过我所听见的风声"（10:7）。然而这一切辉煌都将因所罗门后来的堕落而蒙上阴影。`,
    content_en: `1 Kings opens with David old and feeble. Adonijah attempted to seize the throne, but the prophet Nathan and Bathsheba ensured Solomon's succession according to God's will (ch. 1). David's final charge to Solomon was to be strong, courageous, and obedient to the law of the LORD (2:1–4).

When Solomon sacrificed at Gibeon, God appeared to him in a dream and asked what he desired. Solomon asked not for riches or long life but for "an understanding heart to judge thy people" (3:9). God therefore gave him unparalleled wisdom, plus the riches and honor he had not asked for. The judgment of the two mothers disputing a child (3:16–28) became the classic illustration of Solomon's wisdom.

The building of the temple (ch. 5–8) is the climax of the first half. Solomon spent seven years constructing this magnificent edifice. The dedicatory prayer (ch. 8) is one of the greatest public prayers in the Old Testament; Solomon foresaw Israel's future sin, exile, and repentance, pleading that God would "hear thou in heaven thy dwelling place, and forgive" (8:30).

The visit of the Queen of Sheba (ch. 10) witnessed the zenith of Solomon's glory: "thy wisdom and prosperity exceedeth the fame which I heard" (10:7). Yet all this splendor would be overshadowed by Solomon's later apostasy.`,
  },
  {
    title_zh: `二、所罗门的堕落与王国分裂（11-12章）`,
    title_en: `II. Solomon's Apostasy and the Kingdom Divided (Ch. 11–12)`,
    content_zh: `第十一章是所罗门一生最大的悲剧。"所罗门年老的时候，他的妃嫔诱惑他的心去随从别神"（11:4）。他为摩押的基抹和亚扪的摩洛筑了邱坛。最有智慧的人做了最愚蠢的事——这警告我们，恩赐不等于恩典，知识不等于敬虔。

神兴起三个仇敌对抗所罗门（11:14-40），其中耶罗波安将成为北国的王。先知亚希雅将自己的新衣撕成十二片，给耶罗波安十片，预言王国的分裂。

所罗门死后，他的儿子罗波安拒绝减轻百姓的重担，用狂妄的话回答："我的小拇指头比我父亲的腰还粗"（12:10）。十个支派由此脱离大卫家，北国以色列在耶罗波安的带领下独立。这次分裂是神对所罗门犯罪的审判，却也照着先知的预言成就。

耶罗波安在但和伯特利设立金牛犊，说："以色列人哪，你们上耶路撒冷去实在是难，这就是领你们出埃及地的神"（12:28）——重演了出埃及记32章金牛犊的罪。这成了北国永远的罪根。`,
    content_en: `Chapter 11 is the greatest tragedy of Solomon's life. "When Solomon was old, his wives turned away his heart after other gods" (11:4). He built high places for Chemosh of Moab and Molech of Ammon. The wisest man did the most foolish thing — a warning that gifts are not grace, and knowledge is not godliness.

God raised up three adversaries against Solomon (11:14–40); among them Jeroboam would become king of the northern kingdom. The prophet Ahijah tore his new garment into twelve pieces and gave Jeroboam ten, prophesying the division of the kingdom.

After Solomon's death, his son Rehoboam refused to lighten the people's burdens, answering arrogantly: "My little finger shall be thicker than my father's loins' (12:10). Ten tribes broke away from the house of David; the northern kingdom of Israel became independent under Jeroboam. This division was God's judgment on Solomon's sin, yet fulfilled according to prophetic word.

Jeroboam set up golden calves at Dan and Bethel, saying: "It is too much for you to go up to Jerusalem: behold thy gods, O Israel, which brought thee up out of the land of Egypt" (12:28) — a replay of the golden calf sin of Exodus 32. This became the perpetual root sin of the northern kingdom.`,
  },
  {
    title_zh: `三、以利亚——与巴力争战的先知（17-22章）`,
    title_en: `III. Elijah — The Prophet Who Contended with Baal (Ch. 17–22)`,
    content_zh: `以利亚是旧约中最伟大的先知之一，他突然出现在经文中，没有家谱介绍——"基列寄居的提斯比人以利亚"（17:1）。他宣告旱灾审判亚哈王和耶洗别推行的巴力崇拜。

迦密山之战（18章）是旧约最戏剧性的场面之一。以利亚独自面对八百五十位巴力和亚舍拉的先知。"你们心持两意要到几时呢？若耶和华是神，就当顺从耶和华；若巴力是神，就当顺从巴力"（18:21）。他挑战百姓不要在两者之间犹疑不决。最终耶和华降火烧尽燔祭和坛上的水，百姓俯伏说"耶和华是神！耶和华是神！"

然而迦密山大胜之后，以利亚在耶洗别的威胁下逃入旷野，在罗腾树下求死（19章）。神没有责备他，而是用食物供养他，带他到何烈山。在何烈山上，神不在大风、地震、火中——"火后有微小的声音"（19:12）。神常常不在轰轰烈烈中显现，而在安静中向人说话。

亚哈王因贪图拿伯的葡萄园，容许耶洗别设计害死拿伯（21章）。以利亚宣告了对亚哈家的审判："狗在何处舔拿伯的血，也必在何处舔你的血"（21:19）。亚哈暂时悔改，神推迟了审判；但这审判终必在他儿子约兰的日子应验。`,
    content_en: `Elijah is one of the greatest prophets of the Old Testament, appearing suddenly without genealogical introduction — "Elijah the Tishbite, who was of the inhabitants of Gilead" (17:1). He pronounced drought as judgment on King Ahab and Jezebel's promotion of Baal worship.

The contest on Mount Carmel (ch. 18) is one of the most dramatic scenes in the Old Testament. Elijah stood alone against 850 prophets of Baal and Asherah. "How long halt ye between two opinions? if the LORD be God, follow him: but if Baal, then follow him" (18:21). He challenged the people to stop wavering. The LORD sent fire that consumed the burnt offering and even the water on the altar; the people fell prostrate: "The LORD, he is the God; the LORD, he is the God!"

Yet after the great victory on Carmel, Elijah fled into the wilderness under Jezebel's threat, sitting under a juniper tree and asking to die (ch. 19). God did not rebuke him but sustained him with food and brought him to Horeb. On Horeb, God was not in the great wind, the earthquake, or the fire — "and after the fire a still small voice" (19:12). God often reveals Himself not in the spectacular but in the quiet.

King Ahab coveted Naboth's vineyard and allowed Jezebel to engineer Naboth's murder (ch. 21). Elijah pronounced judgment on Ahab's house: "In the place where dogs licked the blood of Naboth shall dogs lick thy blood, even thine" (21:19). Ahab temporarily repented and God delayed the judgment; but it would surely be fulfilled in the days of his son Joram.`,
  },

{
    title_zh: `四、以利亚与以利沙：先知对抗王权（17-22章）`,
    title_en: `IV. Elijah and Elisha: Prophets Against Royal Power (Ch. 17-22)`,
    content_zh: `列王纪上的后半部被先知以利亚所主导。迦密山上的对决（18章）是旧约最戏剧性的场面之一——以利亚独自面对450个巴力先知，"耶和华是神"的火从天降下（18:38），百姓俯伏说："耶和华是神！耶和华是神！"

然而在大胜之后，以利亚竟然因耶洗别的威胁逃到旷野，求死说"耶和华啊，罢了！求你取我的性命"（19:4）。信心的高峰后紧跟灵性的低谷——这是许多事奉者的真实经历。神没有责备他，而是用"微小的声音"（19:12）来恢复他。

亚哈王夺取拿伯的葡萄园（21章）是王权腐败的极端案例。以利亚宣告审判——"狗在何处舔拿伯的血，也必在何处舔你的血"（21:19）。先知的职分就是对权力说真话，不管代价如何。`,
    content_en: `The latter half of 1 Kings is dominated by the prophet Elijah. The confrontation on Mount Carmel (ch. 18) is one of the Old Testament's most dramatic scenes -- Elijah alone against 450 prophets of Baal; "the fire of the LORD fell" (18:38), and the people fell on their faces: "The LORD, he is the God!"

Yet after this great victory, Elijah fled to the wilderness because of Jezebel's threat, praying for death: "It is enough; now, O LORD, take away my life" (19:4). A spiritual valley immediately following a peak of faith -- this is the real experience of many servants of God. The LORD did not rebuke him but restored him with "a still small voice" (19:12).

Ahab's seizure of Naboth's vineyard (ch. 21) is an extreme case of royal corruption. Elijah pronounced judgment: "In the place where dogs licked the blood of Naboth shall dogs lick thy blood, even thine" (21:19). The prophet's calling is to speak truth to power, regardless of cost.`,
  }
,
{
    title_zh: `五、所罗门的兴衰：智慧不能代替顺服（1-11章）`,
    title_en: `V. Solomon's Rise and Fall: Wisdom Cannot Substitute for Obedience (Ch. 1-11)`,
    content_zh: `所罗门向神求智慧而非富贵（3:9-12），神大悦并加赐他一切。他建造了辉煌的圣殿（6-7章），献殿祷告（8章）是旧约最伟大的公祷之一。然而这一切荣耀的背后，衰败的种子已经播下。

"所罗门王在法老的女儿之外，又宠爱许多外邦女子"（11:1），她们"引诱他的心去随从别神"（11:4）。最智慧的人犯了最愚昧的罪——不是不知道对错，而是明知故犯。智慧是恩赐，顺服是选择；恩赐不能代替选择。

所罗门的失败导致了王国的分裂（12章）。耶罗波安的金牛犊（12:28-29）——"以色列人哪，你们上耶路撒冷去实在是难，这就是领你们出埃及地的神"——成为北国永远的罪。列王纪上教导：属灵的遗产不能被继承，每一代人都必须自己选择顺服。`,
    content_en: `Solomon asked God for wisdom rather than riches (3:9-12); God was pleased and added everything else. He built the magnificent temple (ch. 6-7); the dedication prayer (ch. 8) is one of the Old Testament's greatest public prayers. Yet behind all this glory, seeds of decay were already sown.

"King Solomon loved many strange women" besides Pharaoh's daughter (11:1), and they "turned away his heart after other gods" (11:4). The wisest man committed the most foolish sin -- not from ignorance but deliberate choice. Wisdom is a gift; obedience is a choice. Gifts cannot substitute for choices.

Solomon's failure led to the kingdom's division (ch. 12). Jeroboam's golden calves (12:28-29) -- "It is too much for you to go up to Jerusalem: behold thy gods, O Israel, which brought thee up out of the land of Egypt" -- became the northern kingdom's perpetual sin. 1 Kings teaches: spiritual heritage cannot be inherited; each generation must choose obedience for itself.`,
  }
];

const overview = {
  zh: `列王纪上记载了以色列从所罗门的辉煌到王国分裂、再到以利亚时代的历史。全书涵盖约120年（公元前970-850年），核心人物是所罗门、罗波安/耶罗波安，以及先知以利亚。

全书22章可分为三大段：所罗门的王朝（1-11章）、王国分裂与早期诸王（12-16章）、以利亚的事工（17-22章）。列王纪上的核心主题是：忠于约的王蒙福，背约的王遭审判。圣殿的建造是神与人同在的高峰，金牛犊的设立则是离弃的开始。`,
  en: `1 Kings records Israel's history from Solomon's splendor through the kingdom's division to the era of Elijah, covering approximately 120 years (c. 970–850 BC). The central figures are Solomon, Rehoboam/Jeroboam, and the prophet Elijah.

Its 22 chapters divide into three sections: Solomon's reign (ch. 1–11), the divided kingdom and early kings (ch. 12–16), and Elijah's ministry (ch. 17–22). The core theme is: kings faithful to the covenant are blessed; those who break it face judgment. The temple's construction represents the pinnacle of God's dwelling with His people; the golden calves mark the beginning of departure.`,
};

const outline = [
  ["1-2章", "所罗门继位与大卫遗训", "Ch. 1–2", "Solomon's Succession; David's Charge"],
  ["3-4章", "所罗门求智慧", "Ch. 3–4", "Solomon's Wisdom"],
  ["5-7章", "圣殿建造", "Ch. 5–7", "Building the Temple"],
  ["8章", "献殿祷告", "Ch. 8", "Dedicatory Prayer"],
  ["9-10章", "神的应许与示巴女王", "Ch. 9–10", "God's Promise; Queen of Sheba"],
  ["11章", "所罗门的堕落", "Ch. 11", "Solomon's Apostasy"],
  ["12章", "王国分裂", "Ch. 12", "The Kingdom Divided"],
  ["13-14章", "神人与先知的警告", "Ch. 13–14", "Warnings from Men of God"],
  ["15-16章", "南北诸王", "Ch. 15–16", "Kings of Judah and Israel"],
  ["17章", "以利亚与旱灾", "Ch. 17", "Elijah and the Drought"],
  ["18章", "迦密山之战", "Ch. 18", "Contest on Mount Carmel"],
  ["19章", "何烈山的微小声音", "Ch. 19", "The Still Small Voice at Horeb"],
  ["20-21章", "亚哈与拿伯的葡萄园", "Ch. 20–21", "Ahab; Naboth's Vineyard"],
  ["22章", "亚哈阵亡", "Ch. 22", "Ahab's Death"],
];

const keyVerse = {
  zh: `"所以求你赐我智慧，可以判断你的民，能辨别是非。不然，谁能判断这众多的民呢？"（列王纪上 3:9）`,
  en: `"Give therefore thy servant an understanding heart to judge thy people, that I may discern between good and bad: for who is able to judge this thy so great a people?" (1 Kings 3:9)`,
};

const info = { nameZh: `列王纪上`, nameEn: `1 Kings`, author: `传统认为耶利米`, date: `约公元前970-850年`, chapters: `22章`, backHref: `/old-testament/historical`, backLabel: `历史书`, bibleId: `1KI` };

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