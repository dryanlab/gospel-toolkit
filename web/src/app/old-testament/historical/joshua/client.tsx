'use client';
import Link from 'next/link';
import SpeakButton from '@/components/SpeakButton';
import { useState } from 'react';

const sections = [
  {
    title_zh: `一、约旦河的过渡——新领袖与新时代（1-5章）`,
    title_en: `I. Crossing the Jordan — New Leader, New Era (Ch. 1–5)`,
    content_zh: `摩西死后，神将领导权交给约书亚，并三次重申同一命令："你当刚强壮胆"（1:6,7,9）。这不是军事建议，而是信仰宣告——刚强的根基不在于军力，而在于"耶和华你的神与你同在"（1:9）。约书亚记与申命记的衔接完美：摩西死了，但神的话和神的同在没有改变。

喇合的故事（2章）是全书第一个惊喜。这位耶利哥的妓女藏匿以色列探子，因信心宣告："耶和华你们的神，他是上天下地的神"（2:11）。她将朱红线绑在窗口作为得救的记号——这根红绳预表基督的血。希伯来书11:31和雅各书2:25都将喇合列为信心的英雄。

约旦河分开（3-4章）呼应红海分开——以色列神的拯救方式不变。祭司抬着约柜站在约旦河中，河水向上立起，百姓从干地过去。十二块纪念石立在吉甲，提醒后代"耶和华你们的神……在你们过去之前，使约旦河的水在你们面前干了"（4:23）。

第五章在攻打迦南前，以色列人先行割礼（旷野漂流的那代人都没有受割礼），守逾越节，吃迦南地的出产——吗哪就此停止。这一系列仪式宣告：以色列作为约的子民正式进入迦南，旷野时代结束了。`,
    content_en: `After Moses' death, God transferred leadership to Joshua with the same command repeated three times: "Be strong and of a good courage" (1:6,7,9). This was not military advice but a declaration of faith — the foundation of courage is not military strength but "the LORD thy God is with thee whithersoever thou goest" (1:9). The transition from Deuteronomy to Joshua is seamless: Moses died, but God's word and God's presence remained.

Rahab's story (ch. 2) is the book's first surprise. This prostitute of Jericho hid the Israelite spies and declared in faith: "the LORD your God, he is God in heaven above, and in earth beneath" (2:11). She tied a scarlet thread in her window as the sign of salvation — this red cord foreshadows the blood of Christ. Both Hebrews 11:31 and James 2:25 list Rahab as a hero of faith.

The parting of the Jordan (ch. 3–4) echoes the parting of the Red Sea — God's pattern of salvation remains unchanged. Priests carrying the ark stood in the Jordan; the waters rose up in a heap and the people crossed on dry ground. Twelve memorial stones set up at Gilgal would remind future generations that "the LORD your God dried up the waters of Jordan from before you, until ye were passed over" (4:23).

In chapter 5, before attacking Canaan, Israel first circumcised the men (the wilderness generation had not been circumcised), kept the Passover, and ate the produce of the land — and manna ceased. This series of rituals declared: Israel as the covenant people formally enters Canaan; the wilderness era has ended.`,
  },
  {
    title_zh: `二、征服南北迦南（6-12章）`,
    title_en: `II. Conquest of Southern and Northern Canaan (Ch. 6–12)`,
    content_zh: `耶利哥城的陷落（6章）是约书亚记最著名的故事。神的战法不是军事常规：每天绕城一圈，七天，最后一天绕七圈，然后吹角呐喊。城墙塌陷，只有喇合一家得救。这场战役教导：属神的战争靠的是顺服，不是战术。

艾城的失败（7章）令人警醒。亚干私藏战利品，以色列人第一次吃了败仗。约书亚伏地哀嚎，神说："以色列犯了罪……所以以色列人在仇敌面前站立不住"（7:11-12）。约的团契性在这里清晰可见——一人之罪，全体受罚。亚干和全家被石头打死，一堆石头立在亚割谷作为记念，警戒众人：以圣战之物为利的，必受审判。

第八章艾城最终被攻占，约书亚在以巴路山建坛献祭，照着摩西所写将律法抄在石头上，向全民宣读祝福和咒诅——这是进入应许之地后第一件重要的约的仪式。

基遍人的诡计（9章）提醒我们"没有求问耶和华"（9:14）的后果。以色列领袖凭肉眼判断草率立约，后来无法悔改，只能让基遍人永远作"劈柴挑水"之人。南方联盟（10章）和北方联盟（11章）的战役以以色列的胜利告终，第十二章列出约书亚所击杀的三十一个王。`,
    content_en: `The fall of Jericho (ch. 6) is the most famous story in Joshua. God's battle plan was anything but conventional: march around the city once a day for seven days, seven times on the seventh day, then blow the trumpets and shout. The wall collapsed; only Rahab's family was saved. This battle teaches that God's warfare depends on obedience, not tactics.

The defeat at Ai (ch. 7) is sobering. Achan secretly kept plunder from Jericho; Israel suffered its first defeat. Joshua fell on his face in anguish; God said: "Israel hath sinned... therefore the children of Israel could not stand before their enemies" (7:11–12). The corporate nature of the covenant is unmistakable — one man's sin, corporate punishment. Achan and his entire household were stoned to death; a heap of stones in the Valley of Achor served as a permanent warning: those who take devoted things for gain will face judgment.

In chapter 8, Ai was finally captured; Joshua built an altar on Mount Ebal, copied the law on stones as Moses had commanded, and read to the entire nation the blessings and curses — the first important covenant ceremony after entering the Promised Land.

The Gibeonite deception (ch. 9) warns of the consequences of "asked not counsel at the mouth of the LORD" (9:14). Israel's leaders judged by appearances and rashly made a treaty; unable to undo it, they were bound to make the Gibeonites permanent "hewers of wood and drawers of water." The southern coalition (ch. 10) and northern coalition (ch. 11) campaigns ended in Israel's victory; chapter 12 lists the thirty-one kings Joshua defeated.`,
  },
  {
    title_zh: `三、分地与未竟之功（13-21章）`,
    title_en: `III. Division of the Land and Unfinished Business (Ch. 13–21)`,
    content_zh: `第十三章开篇令人意外："约书亚年纪老迈了，还有许多地尚未得着"（13:1）。征服不是一次完成的，每个支派仍需继续争战，驱逐自己分得地界内的迦南人。神吩咐先分地，再让各支派自己争战得地——这是信心的挑战：先接受应许，再靠信心支取。

迦勒的信心（14章）是历史书中最感人的片段之一。八十五岁的迦勒来到约书亚面前说："摩西那日怎样对我说，照着我脚所踏之地，要归我和我的子孙为业，直到永远……耶和华说的话叫我今日仍然强壮……我如今还是强壮，像摩西打发我去那天一样"（14:10-11）。迦勒要求分给他最难攻取的希伯仑——有亚衲族人的大城。这就是信心：四十五年后仍在支取同一个应许。

利未人的城邑（21章）体现了神对祭司的供应。利未人无分土地，却分散居住在各支派中，教导百姓律法。逃城（20章）制度的细节令人想起基督：误杀人者可以逃到逃城，等候大祭司死亡，然后可以自由归家——基督就是我们的大祭司，因祂的死，我们得以永远自由。`,
    content_en: `Chapter 13 opens with a surprising statement: "Now Joshua was old and stricken in years; and there remaineth yet very much land to be possessed" (13:1). The conquest was not completed in one campaign; each tribe still needed to drive out the Canaanites within their own allotted territory. God commanded the land to be divided first, then each tribe would fight to possess it — a challenge of faith: receive the promise first, then take hold of it by faith.

Caleb's faith (ch. 14) is one of the most moving passages in the historical books. Eighty-five-year-old Caleb came to Joshua and said: "As the LORD said unto me, so he sware... to give that land whereto my feet have trodden... the LORD hath kept me alive, as he said, these forty and five years... and now, lo, I am this day fourscore and five years old. As yet I am as strong this day as I was in the day that Moses sent me" (14:10–11). Caleb requested the most difficult territory to take — Hebron, a great city of the Anakim. That is faith: forty-five years later, still claiming the same promise.

The cities of the Levites (ch. 21) illustrated God's provision for the priests. The Levites received no territorial allotment but were distributed among all the tribes to teach the people the law. The cities of refuge (ch. 20) in their details remind us of Christ: one who killed accidentally could flee to a city of refuge until the death of the high priest, after which he could return home freely — Christ is our great High Priest, and through His death we are forever set free.`,
  },
  {
    title_zh: `四、约书亚的告别讲道与立约（22-24章）`,
    title_en: `IV. Joshua's Farewell Address and the Covenant at Shechem (Ch. 22–24)`,
    content_zh: `约书亚与摩西一样，在生命终结时召集百姓，重申约的责任。第二十二章河东两个半支派回家，他们在约旦河边建造一座坛，险些引发内战——直到他们解释这是"见证之坛"，不是祭祀之坛，危机才化解。

第二十三章是约书亚的第一篇告别讲道，语气迫切："你们要刚强，谨守遵行摩西律法书上所写的一切话……不可偏左偏右"（23:6）。他警戒百姓不可与剩余的迦南人通婚、不可事奉他们的神，并预告如果以色列违约，必被驱逐出这地——这个预言在列王纪和历代志中一一应验。

第二十四章是以色列历史上著名的示剑之约更新仪式。约书亚重述神从亚伯拉罕到出埃及的救赎历史，然后发出呼召："你们今日要拣选所要事奉的……至于我和我家，我们必定事奉耶和华"（24:15）。百姓三次回应"我们必事奉耶和华"，立约立石为证。

约书亚一百一十岁去世，约瑟的骸骨埋葬在示剑（约瑟在创世记50章曾吩咐以色列人将他的骸骨带出埃及）——救赎历史的循环在这里完美闭合。`,
    content_en: `Like Moses, Joshua at the end of his life assembled the people to reaffirm covenant responsibilities. In chapter 22, the two and a half eastern tribes returned home; they built an altar by the Jordan, nearly causing a civil war — until they explained it was a "witness altar," not a sacrificial altar, and the crisis was defused.

Chapter 23 is Joshua's first farewell address, urgent in tone: "Be ye therefore very courageous to keep and to do all that is written in the book of the law of Moses, that ye turn not aside therefrom to the right hand or to the left" (23:6). He warned against intermarrying with the remaining Canaanites and serving their gods, and prophesied that if Israel broke the covenant, they would be expelled from the land — a prophecy fulfilled chapter by chapter in Kings and Chronicles.

Chapter 24 records the famous covenant renewal ceremony at Shechem. Joshua recounted God's redemptive history from Abraham through the Exodus, then issued the call: "Choose you this day whom ye will serve... but as for me and my house, we will serve the LORD" (24:15). The people responded three times "we will serve the LORD"; a covenant was made and a stone set as witness.

Joshua died at 110; Joseph's bones were buried at Shechem (Joseph had charged Israel in Genesis 50 to carry his bones out of Egypt) — the cycle of redemptive history closes perfectly here.`,
  },
];

const overview = {
  zh: `约书亚记是摩西五经的续篇，也是旧约历史书的开端。全书24章记载以色列人在约书亚带领下征服迦南、分配土地、立约更新的历史，时间跨度约二十五年。

约书亚记的神学核心是"应许的应验"：神对亚伯拉罕的应许终于开始兑现。但这不意味着征服一帆风顺——艾城的失败、基遍人的诡计，都提醒我们约的双方责任。改革宗神学特别重视约书亚记中的"圣战"（herem）神学：迦南人的被灭绝不是以色列的种族主义，而是神对罪恶的审判，并且圣战在基督里已经终结——基督是最终的约书亚（两人名字在希伯来文中相同，意为"耶和华拯救"），祂的征战是十字架上的属灵征战。`,
  en: `Joshua is the continuation of the Pentateuch and the beginning of the Old Testament historical books. Its 24 chapters record Israel's conquest of Canaan under Joshua, the division of the land, and the renewal of the covenant, spanning roughly twenty-five years.

The theological core of Joshua is "promise fulfilled": God's promises to Abraham begin to be realized. But this does not mean the conquest was smooth — the defeat at Ai and the Gibeonite deception both remind us of the covenant's mutual obligations. Reformed theology particularly emphasizes the "holy war" (herem) theology in Joshua: the destruction of the Canaanites was not Israelite racism but God's judgment on sin, and holy war has reached its end in Christ — Christ is the ultimate Joshua (the two names are identical in Hebrew, meaning "the LORD saves"), and His warfare was the spiritual battle of the cross.`,
};

const outline = [
  ["1章", "约书亚受命与神的应许", "Ch. 1", "Joshua's Commission"],
  ["2章", "探子与喇合", "Ch. 2", "Spies and Rahab"],
  ["3-4章", "过约旦河与纪念石", "Ch. 3–4", "Crossing the Jordan"],
  ["5章", "割礼、逾越节与吗哪停止", "Ch. 5", "Circumcision and Passover"],
  ["6章", "耶利哥城的陷落", "Ch. 6", "Fall of Jericho"],
  ["7章", "亚干的罪与艾城之败", "Ch. 7", "Achan's Sin; Defeat at Ai"],
  ["8章", "攻取艾城与以巴路山立约", "Ch. 8", "Capture of Ai; Covenant at Ebal"],
  ["9章", "基遍人的诡计", "Ch. 9", "The Gibeonite Deception"],
  ["10章", "南方联盟战役", "Ch. 10", "Southern Campaign"],
  ["11-12章", "北方联盟战役与胜利总结", "Ch. 11–12", "Northern Campaign; Summary"],
  ["13-14章", "分地与迦勒的信心", "Ch. 13–14", "Land Division; Caleb's Faith"],
  ["15-19章", "各支派分地", "Ch. 15–19", "Tribal Allotments"],
  ["20章", "逃城", "Ch. 20", "Cities of Refuge"],
  ["21章", "利未人的城邑", "Ch. 21", "Levitical Cities"],
  ["22章", "河东两支派归家", "Ch. 22", "Eastern Tribes Return Home"],
  ["23章", "约书亚的告别讲道", "Ch. 23", "Joshua's Farewell Address"],
  ["24章", "示剑立约与约书亚之死", "Ch. 24", "Covenant at Shechem; Joshua Dies"],
];

const keyVerse = {
  zh: `"至于我和我家，我们必定事奉耶和华。"（约书亚记 24:15）`,
  en: `"But as for me and my house, we will serve the LORD." (Joshua 24:15)`,
};

const info = { nameZh: `约书亚记`, nameEn: `Joshua`, author: `约书亚 (Joshua)`, date: `约公元前1406-1380年`, chapters: `24章`, backHref: `/old-testament/historical`, backLabel: `历史书`, bibleId: `JOS` };

export default function BookGuide() {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link href={info.backHref} className="inline-flex items-center gap-1 text-sm text-[var(--color-accent)] hover:underline mb-6">← {info.backLabel}</Link>
      <div className="text-center mb-10"><span className="text-5xl mb-4 block">📖</span><h1 className="font-serif-cn text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-2">{info.nameZh}导读</h1><p className="text-base text-[var(--color-text-secondary)] italic mb-4">A Guide to the Book of {info.nameEn}</p><div className="flex justify-center gap-4 text-xs text-[var(--color-text-secondary)]"><span>✍️ 作者：{info.author}</span><span>📅 {info.date}</span><span>📄 {info.chapters}</span></div></div>
      <div className="mb-10 p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)]"><h2 className="font-serif-cn text-lg font-bold text-[var(--color-text)] mb-3">📋 全书概览</h2><div className="flex items-start gap-2 mb-3"><SpeakButton text={overview.zh} lang="zh" /><p className="text-sm text-[var(--color-text)] leading-relaxed font-serif-cn">{overview.zh}</p></div><div className="flex items-start gap-2"><SpeakButton text={overview.en} lang="en" /><p className="text-xs text-[var(--color-text-secondary)] italic leading-relaxed">{overview.en}</p></div></div>
      <div className="mb-10 p-5 rounded-xl bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border border-amber-200 dark:border-amber-800"><p className="text-sm font-bold text-amber-800 dark:text-amber-300 mb-1">🔑 金句 Key Verse</p><p className="font-serif-cn text-base text-[var(--color-text)] font-bold leading-relaxed">{keyVerse.zh}</p><p className="text-sm text-[var(--color-text-secondary)] italic mt-1">{keyVerse.en}</p></div>
      <div className="mb-6"><h2 className="font-serif-cn text-xl font-bold text-[var(--color-text)] mb-1">📚 分段导读</h2><p className="text-xs text-[var(--color-text-secondary)] italic mb-4">Section-by-Section Guide</p></div>
      <div className="space-y-4">{sections.map((sec, i) => (<div key={i} className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] overflow-hidden"><button onClick={() => setExpandedIdx(expandedIdx === i ? null : i)} className="w-full flex items-center justify-between px-6 py-4 text-left cursor-pointer hover:bg-[var(--color-accent)]/5 transition-colors"><div><h3 className="font-serif-cn text-base font-bold text-[var(--color-text)]">{sec.title_zh}</h3><p className="text-xs text-[var(--color-text-secondary)] italic">{sec.title_en}</p></div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-5 h-5 text-[var(--color-text-secondary)] transition-transform ${expandedIdx === i ? 'rotate-180' : ''}`}><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" /></svg></button>{expandedIdx === i && (<div className="px-6 pb-5 border-t border-[var(--color-border)]"><div className="flex items-start gap-2 mt-4 mb-4"><SpeakButton text={sec.content_zh} lang="zh" /><p className="text-sm text-[var(--color-text)] leading-relaxed font-serif-cn whitespace-pre-line">{sec.content_zh}</p></div><div className="flex items-start gap-2"><SpeakButton text={sec.content_en} lang="en" /><p className="text-xs text-[var(--color-text-secondary)] italic leading-relaxed whitespace-pre-line">{sec.content_en}</p></div></div>)}</div>))}</div>
      <div className="mt-10 p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)]"><h2 className="font-serif-cn text-lg font-bold text-[var(--color-text)] mb-4">🗂️ 章节大纲</h2>{(() => { const half = Math.ceil(outline.length / 2); const col1 = outline.slice(0, half); const col2 = outline.slice(half); const renderItem = ([zh, desc, chEn, descEn]: string[], i: number) => (<div key={i} className="py-1.5 border-b border-[var(--color-border)]/30 last:border-b-0"><div className="flex items-baseline gap-2"><span className="font-bold text-[var(--color-accent)] min-w-[65px] shrink-0">{zh}</span><span className="text-[var(--color-text)]">{desc}</span></div><div className="flex items-baseline gap-2 mt-0.5"><span className="text-[var(--color-text-secondary)] text-xs italic min-w-[65px] shrink-0">{chEn}</span><span className="text-[var(--color-text-secondary)] text-xs italic">{descEn}</span></div></div>); return (<div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 text-sm"><div>{col1.map((item, i) => renderItem(item, i))}</div><div>{col2.map((item, i) => renderItem(item, i + half))}</div></div>); })()}</div>
      <div className="mt-8 text-center"><Link href={`/bible/${info.bibleId}`} className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--color-accent)] text-white font-bold hover:opacity-90 transition-opacity">📖 阅读{info.nameZh} Read {info.nameEn}</Link></div>
    </div>
  );
}