'use client';
import Link from 'next/link';
import SpeakButton from '@/components/SpeakButton';
import { useState } from 'react';

const sections = [
  {
    title_zh: `一、序言：士师时代的悲剧循环（1-3章上）`,
    title_en: `I. Prologue: The Tragic Cycle of the Judges Era (Ch. 1–3a)`,
    content_zh: `士师记的开头令人沮丧。约书亚死后，以色列各支派未能完全驱逐迦南人，与他们共处，最终与他们通婚、拜他们的神。这违背了神的命令，也种下了日后所有悲剧的种子。

第二章揭示了士师记的"神学公式"，也是全书的结构骨架：以色列悖逆→神将他们交在仇敌手中→百姓哀嚎→神兴起士师拯救→士师在世期间百姓得安息→士师死后百姓再度悖逆。这个循环重复七次，螺旋式下降，越来越堕落。

这个循环不只是历史记录，更是人心的写照。约翰加尔文说："人的心是制造偶像的工厂。"士师记用七个循环展示：没有神的律法更新人心，外部的拯救只是暂时的。`,
    content_en: `Judges opens with a dispiriting account. After Joshua's death, Israel's tribes failed to fully drive out the Canaanites, lived among them, intermarried with them, and worshipped their gods. This violated God's command and planted the seeds of every tragedy that followed.

Chapter 2 reveals the book's "theological formula" — the structural backbone of the entire book: Israel rebels → God delivers them to their enemies → the people cry out → God raises up a judge to deliver them → rest during the judge's lifetime → after the judge's death, rebellion again. This cycle repeats seven times, spiraling downward into increasing degradation.

This cycle is not merely a historical record but a portrait of the human heart. John Calvin said: "The human heart is a perpetual idol factory." Judges uses seven cycles to demonstrate: without God's law renewing the heart, outward deliverance is only temporary.`,
  },
  {
    title_zh: `二、主要士师——从俄陀聂到参孙（3下-16章）`,
    title_en: `II. Major Judges — From Othniel to Samson (Ch. 3b–16)`,
    content_zh: `六位"大士师"中，每一位都有其独特的故事和神学意义。

**俄陀聂**（3章）是"理想士师"的典范，简洁而完整地展示了士师循环。**以笏**（3章）是左撒人，用左手制成暗器刺杀摩押王以革伦——神选用世人轻视的人成就大事。

**底波拉**（4-5章）是唯一的女士师，也是先知。她召唤巴拉出战，对不肯单独出战的巴拉说："这次得胜的荣耀不归给你"——果然，最终杀死西西拉的是雅亿（一位女子），她用帐篷橛子打进西西拉头颅。希伯来书11:32将巴拉列为信心英雄，但故事清楚表明：荣耀归于愿意顺服的女性。

**基甸**（6-8章）的故事最长。神用一支三百人的小队和陶罐、火把、角声打败十三万五千米甸大军。"耶和华是你们的平安"（6:24）是基甸给祭坛起的名，呼应耶稣是我们的平安。但基甸晚年铸造以弗得，引导以色列人拜偶像，他的儿子亚比米勒更成为以色列第一个暴君。

**耶弗他**（11-12章）的悲剧在于轻率许愿——"你若将亚扪人交在我手中，我从亚扪那里平平安安回来，无论什么人，先从我家门出来迎接我，就必归耶和华，我也必将他献上为燔祭"。回家时第一个出来迎接他的是他唯一的女儿。这段叙事至今争议不断，但核心教训清晰：不可轻率许愿。

**参孙**（13-16章）是最矛盾的士师。他被圣灵充满、力大无比，却软弱于情欲；他毁坏婚姻、毁坏约定，却在生命最后时刻呼求神、完成使命。参孙的一生是恩典与软弱并存的缩影——神用破碎的器皿成就祂的旨意。`,
    content_en: `Among the six "major judges," each has a unique story and theological significance.

**Othniel** (ch. 3) is the paradigmatic "ideal judge," presenting the cycle briefly and completely. **Ehud** (ch. 3) was left-handed and made a hidden weapon to assassinate Eglon king of Moab — God uses those despised by the world to accomplish great things.

**Deborah** (ch. 4–5) was the only female judge and a prophetess. She summoned Barak to battle; when Barak refused to go without her, she told him: "the honour shall not be thine" — and indeed, the one who finally killed Sisera was Jael (a woman), who drove a tent peg through Sisera's head. Hebrews 11:32 lists Barak as a hero of faith, but the story makes clear: glory goes to the women who were willing to act.

**Gideon** (ch. 6–8) has the longest account. God used 300 men with clay jars, torches, and trumpets to defeat 135,000 Midianites. "The LORD is peace" (6:24) — the name Gideon gave the altar — echoes Jesus as our peace. Yet in his later years Gideon made an ephod that led Israel into idolatry, and his son Abimelech became Israel's first tyrant.

**Jephthah** (ch. 11–12) is the story of a reckless vow: "If thou shalt without fail deliver the children of Ammon into mine hands, Then it shall be, that whatsoever cometh forth of the doors of my house to meet me... shall surely be the LORD's, and I will offer it up for a burnt offering." His only daughter was first to meet him at his return. This narrative remains debated, but the lesson is clear: do not make rash vows.

**Samson** (ch. 13–16) is the most contradictory judge. Filled with the Spirit, possessing supernatural strength, yet weak before lust; destroying marriages and breaking vows, yet in his final moment crying out to God and completing his mission. Samson's life epitomizes grace and weakness coexisting — God accomplishes His purposes through broken vessels.`,
  },
  {
    title_zh: `三、双重附录——以色列的道德深渊（17-21章）`,
    title_en: `III. Double Appendix — Israel's Moral Abyss (Ch. 17–21)`,
    content_zh: `士师记最后五章不是按时间顺序，而是两个揭示以色列属灵状态的附录，它们可能发生在士师时代早期。

**米迦的神像和但支派的离道**（17-18章）：米迦偷了母亲的银子，后来归还，母亲用部分银子铸造神像，米迦将这位利未人雇为私人祭司，认为"耶和华必赐福给我"——拜偶像与拜耶和华混合。但支派的人后来强抢了这个利未人和神像，在但设立偶像崇拜。整段叙事的结语揭示根本问题："那时，以色列中没有王，各人任意而行"（17:6，21:25）。

**利未人的妾与便雅悯支派的战争**（19-21章）：这是整本圣经最黑暗的叙事之一。一个利未人的妾在基比亚被歹徒轮奸致死，利未人将她的尸体切成十二块分送以色列各支派。这引发内战，便雅悯支派几乎被灭绝。全书以无比的悲哀收尾——以色列已经堕落到与所多玛无异的地步。

这两个附录的结语是相同的："那时，以色列中没有王，各人任意而行"——这是对君王制度的期待，为撒母耳记的君王时代埋下伏笔。`,
    content_en: `The final five chapters of Judges are not in chronological order but are two appendices revealing Israel's spiritual condition, likely occurring early in the judges period.

**Micah's idols and the tribe of Dan's apostasy** (ch. 17–18): Micah stole silver from his mother, later returned it, and she used part of it to cast idols. Micah hired a Levite as his personal priest, convinced that "the LORD will do me good" — idolatry mixed with worship of the LORD. The tribe of Dan later seized this Levite and the idols, establishing idol worship at Dan. The refrain of this section reveals the root problem: "In those days there was no king in Israel, but every man did that which was right in his own eyes" (17:6; 21:25).

**The Levite's concubine and the war against Benjamin** (ch. 19–21): this is one of the darkest narratives in all of Scripture. A Levite's concubine was gang-raped to death by wicked men in Gibeah; the Levite cut her body into twelve pieces and sent them throughout Israel. This triggered a civil war that nearly annihilated the tribe of Benjamin. The book ends in profound sorrow — Israel has sunk to the level of Sodom.

Both appendices share the same refrain: "In those days there was no king in Israel: every man did that which was right in his own eyes" — an anticipation of the monarchy, paving the way for the age of kings in Samuel.`,
  },

{
    title_zh: `四、基甸：最小的成为大能勇士（6-8章）`,
    title_en: `IV. Gideon: The Least Becomes a Mighty Warrior (Ch. 6-8)`,
    content_zh: `基甸的故事是士师记最详尽的叙事之一。天使称他为"大能的勇士"（6:12）时，他正在酒醡里躲避米甸人打麦子——讽刺而又恩典。神选择最软弱的人来彰显最大的能力。

神把基甸的军队从32,000人减到300人（7:2-7），目的只有一个："免得以色列人向我夸大，说：是我们自己的手救了我们"（7:2）。300人手持火把和空瓶，夜间呐喊——米甸大军自相残杀。胜利不属于人的力量，属于耶和华。

然而基甸晚年的失败同样发人深省。他用战利品制造了一个以弗得，"后来以色列人拜那以弗得行了邪淫"（8:27）。英雄不能承受荣耀的重量，这是整个士师记反复出现的悲剧主题。`,
    content_en: `Gideon's story is one of Judges' most detailed narratives. When the angel called him "thou mighty man of valour" (6:12), he was threshing wheat in a winepress, hiding from the Midianites -- ironic yet gracious. God chooses the weakest to display the greatest power.

God reduced Gideon's army from 32,000 to 300 (7:2-7) for one purpose: "lest Israel vaunt themselves against me, saying, Mine own hand hath saved me" (7:2). Three hundred men with torches and empty pitchers shouted in the night -- the Midianite host destroyed itself. Victory belongs not to human strength but to the LORD.

Yet Gideon's later failure is equally sobering. He made an ephod from the spoil, and "all Israel went thither a whoring after it" (8:27). Heroes cannot bear the weight of glory -- this is the recurring tragic theme of the entire book of Judges.`,
  }
,
{
    title_zh: `五、参孙与士师记的终曲：没有王的混乱（13-21章）`,
    title_en: `V. Samson and Judges' Finale: Chaos Without a King (Ch. 13-21)`,
    content_zh: `参孙（13-16章）是最矛盾的士师——拥有超自然的力量却在情欲面前毫无抵抗力。他一生的模式是：倚靠神时大有能力，倚靠自己时惨遭失败。大利拉不是他失败的原因，而是他内心早已偏离的外在表现。

参孙最后的祷告——"求你赐我这一次的力量"（16:28）——是悲壮的悔改。他在死时所杀的比活着所杀的还多（16:30）。这不是英雄的传奇，而是悲剧的高潮。

士师记最后五章（17-21章）是全书最黑暗的部分——但的偶像崇拜（17-18章）、基比亚的暴行（19章）、支派间的战争（20-21章）。全书以重复的判词结束："那时以色列中没有王，各人任意而行"（21:25）。没有敬虔的权柄，人心就走向彻底的败坏。士师记为王国的来临预备了舞台——以色列需要一位真正的王。`,
    content_en: `Samson (ch. 13-16) is the most contradictory judge -- supernatural strength yet zero resistance to lust. His life pattern: mighty when relying on God, utterly defeated when relying on himself. Delilah was not the cause of his failure but the outward expression of a heart already turned aside.

Samson's final prayer -- "strengthen me, I pray thee, only this once" (16:28) -- is a tragic repentance. He killed more in his death than in his life (16:30). This is not heroic legend but tragic climax.

The final five chapters (17-21) are the book's darkest -- Dan's idolatry (ch. 17-18), the atrocity at Gibeah (ch. 19), intertribal war (ch. 20-21). The book ends with a repeated verdict: "In those days there was no king in Israel: every man did that which was right in his own eyes" (21:25). Without godly authority, the human heart descends into total corruption. Judges sets the stage for the coming kingdom -- Israel needs a true King.`,
  }
];

const overview = {
  zh: `士师记记载了从约书亚到撒母耳之间约三百五十年的历史（约公元前1380-1050年）。这是以色列历史上最黑暗的时期之一，整本书围绕一个反复出现的悲剧循环：背道→审判→哭求→拯救→安息→再度背道。

士师记的神学意义不在于歌颂英雄，而在于揭示人类的无能和对神的需要。每一位士师都有严重的软弱，没有一位能真正拯救以色列，解决以色列的根本问题——悖逆的心。这为将来的王国预备，最终指向基督——唯一能真正拯救祂子民的"士师"。`,
  en: `Judges records roughly 350 years of history between Joshua and Samuel (c. 1380–1050 BC). It is one of the darkest periods in Israel's history, the entire book revolving around a repeated tragic cycle: apostasy → judgment → crying out → deliverance → rest → apostasy again.

The theological significance of Judges is not in celebrating heroes but in exposing human inability and the need for God. Every judge had serious weaknesses; none could truly deliver Israel or solve its root problem — the rebellious heart. This prepares for the coming kingdom and ultimately points to Christ — the one true "Judge" who can genuinely save His people.`,
};

const outline = [
  ["1-2章", "征服的失败与背道的模式", "Ch. 1–2", "Incomplete Conquest; Pattern of Apostasy"],
  ["3章上", "序言与第一位士师俄陀聂", "Ch. 3a", "Prologue; Othniel"],
  ["3章下", "以笏和珊迦", "Ch. 3b", "Ehud and Shamgar"],
  ["4-5章", "底波拉和巴拉", "Ch. 4–5", "Deborah and Barak"],
  ["6-8章", "基甸", "Ch. 6–8", "Gideon"],
  ["9章", "亚比米勒的暴政", "Ch. 9", "Abimelech's Tyranny"],
  ["10-12章", "陀拉、睚珥、耶弗他、以比赞、以伦、押顿", "Ch. 10–12", "Tola, Jair, Jephthah, Ibzan, Elon, Abdon"],
  ["13-16章", "参孙", "Ch. 13–16", "Samson"],
  ["17-18章", "米迦的神像与但支派", "Ch. 17–18", "Micah's Idols and the Danites"],
  ["19-21章", "利未人的妾与便雅悯战争", "Ch. 19–21", "Levite's Concubine; War on Benjamin"],
];

const keyVerse = {
  zh: `"那时，以色列中没有王，各人任意而行。"（士师记 21:25）`,
  en: `"In those days there was no king in Israel: every man did that which was right in his own eyes." (Judges 21:25)`,
};

const info = { nameZh: `士师记`, nameEn: `Judges`, author: `撒母耳（传统）`, date: `约公元前1380-1050年`, chapters: `21章`, backHref: `/old-testament/historical`, backLabel: `历史书`, bibleId: `JDG` };

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