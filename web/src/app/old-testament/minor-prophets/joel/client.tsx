'use client';
import Link from 'next/link';
import SpeakButton from '@/components/SpeakButton';
import { useState } from 'react';

const sections = [
  {
    title_zh: `一、蝗灾——从自然灾害到属灵警醒（1章）`,
    title_en: `I. The Locust Plague — From Natural Disaster to Spiritual Awakening (Ch. 1)`,
    content_zh: `约珥书以一场空前的蝗灾开始。四种蝗虫接连吞噬一切——"剪虫剩下的，蝗虫来吃；蝗虫剩下的，蝻子来吃；蝻子剩下的，蚂蚱来吃"（1:4）。田野荒芜，葡萄树枯干，无花果树凋残。

约珥呼吁全民哀哭禁食——不仅是农民，也包括祭司和醉酒的人。这场蝗灾不只是自然灾害，更是神审判的预尝——"耶和华的日子临近了，这日来到，好像毁灭从全能者来到"（1:15）。约珥把眼前的灾难提升到末世的高度——每一次局部的审判都是最终审判的预演。`,
    content_en: `Joel opens with an unprecedented locust plague. Four types of locusts devour everything in succession — "That which the palmerworm hath left hath the locust eaten; and that which the locust hath left hath the cankerworm eaten; and that which the cankerworm hath left hath the caterpiller eaten" (1:4). Fields laid waste, vines dried up, fig trees withered.

Joel calls the entire nation to weep and fast — not only farmers but priests and drunkards alike. This plague is not merely natural disaster but a foretaste of God's judgment — "for the day of the LORD is at hand, and as a destruction from the Almighty shall it come" (1:15). Joel elevates the present disaster to an eschatological level — every partial judgment is a rehearsal of the final one.`,
  },
  {
    title_zh: `二、悔改的呼召与圣灵的浇灌（2章）`,
    title_en: `II. Call to Repentance and the Outpouring of the Spirit (Ch. 2)`,
    content_zh: `第二章前半段将蝗灾的意象扩展为末日军队的入侵——"他们如马兵，就是这样奔跑"（2:4概意）。号角在锡安吹响，"耶和华的日子"临近。

然后是全书最核心的呼召："耶和华说：虽然如此，你们应当禁食、哭泣、悲哀，一心归向我。你们要撕裂心肠，不撕裂衣服。归向耶和华你们的神；因为他有恩典，有怜悯，不轻易发怒，有丰盛的慈爱，并且后悔不降所说的灾"（2:12-13）。"撕裂心肠，不撕裂衣服"——神要的不是外在的宗教仪式，而是内心真实的悔改。

第二章后半段是恢复的应许——神必赶走蝗虫，恢复荒年所吃的。然后是旧约中最伟大的圣灵预言："以后，我要将我的灵浇灌凡有血气的。你们的儿女要说预言；你们的老年人要做异梦，少年人要见异象"（2:28）。彼得在五旬节讲道中引用此段（徒2:16-21），宣告这预言在圣灵降临时应验了。`,
    content_en: `The first half of chapter 2 expands the locust imagery into an apocalyptic army invasion — "the appearance of them is as the appearance of horses; and as horsemen, so shall they run" (2:4). The trumpet sounds in Zion; "the day of the LORD" draws near.

Then comes the book's central call: "Therefore also now, saith the LORD, turn ye even to me with all your heart, and with fasting, and with weeping, and with mourning: And rend your heart, and not your garments, and turn unto the LORD your God: for he is gracious and merciful, slow to anger, and of great kindness, and repenteth him of the evil" (2:12–13). "Rend your heart, and not your garments" — God desires not outward religious ritual but genuine inward repentance.

The latter half promises restoration — God will drive away the locusts, restoring the years they consumed. Then comes the Old Testament's greatest prophecy of the Spirit: "And it shall come to pass afterward, that I will pour out my spirit upon all flesh; and your sons and your daughters shall prophesy, your old men shall dream dreams, your young men shall see visions" (2:28). Peter cited this passage at Pentecost (Acts 2:16–21), declaring it fulfilled at the Spirit's coming.`,
  },
  {
    title_zh: `三、耶和华的日子——审判与救恩（3章）`,
    title_en: `III. The Day of the LORD — Judgment and Salvation (Ch. 3)`,
    content_zh: `第三章（希伯来文圣经的第四章）将视野从以色列扩展到万国。神要在"约沙法谷"审判列国——约沙法的意思是"耶和华审判"。"万民都当兴起，上到约沙法谷；因为我必坐在那里，审判四围的列国"（3:12）。

著名的"将犁头打成刀剑，将镰刀打成戈矛"（3:10）与以赛亚书2:4和弥迦书4:3正好相反——以赛亚和弥迦说末日要将刀剑打成犁头，约珥说在最后审判之前列国要准备战争。两种说法不矛盾：约珥描述的是审判前的战争动员，以赛亚和弥迦描述的是审判后的永远和平。

全书以荣耀的应许结束："到那日，大山要滴甜酒；小山要流奶子……耶和华住在锡安"（3:18-21概意）。约珥书虽然只有三章，却涵盖了从蝗灾到末世、从悔改到圣灵浇灌、从审判到新天新地的完整救赎图景。`,
    content_en: `Chapter 3 (chapter 4 in the Hebrew Bible) expands the horizon from Israel to all nations. God will judge the nations in the "valley of Jehoshaphat" — Jehoshaphat means "the LORD judges." "Let the heathen be wakened, and come up to the valley of Jehoshaphat: for there will I sit to judge all the heathen round about" (3:12).

The famous "Beat your plowshares into swords, and your pruninghooks into spears" (3:10) is the reverse of Isaiah 2:4 and Micah 4:3 — Isaiah and Micah say in the last day swords shall be beaten into plowshares, while Joel says before the final judgment nations must prepare for war. The two are not contradictory: Joel describes pre-judgment military mobilization; Isaiah and Micah describe post-judgment eternal peace.

The book concludes with glorious promise: "And it shall come to pass in that day, that the mountains shall drop down new wine, and the hills shall flow with milk... the LORD dwelleth in Zion" (3:18, 21). Though only three chapters, Joel encompasses from locust plague to eschaton, from repentance to Spirit's outpouring, from judgment to new creation — a complete redemptive panorama.`,
  },
];

const overview = {
  zh: `约珥书是小先知书中最短的书卷之一（3章），写作日期有争议（从公元前9世纪到4世纪都有学者主张），但信息永不过时。全书以一场蝗灾为起点，将读者从眼前的灾难引向末世的审判和盼望。

约珥书的三大主题是：耶和华的日子（审判）、悔改的呼召（撕裂心肠）、圣灵的浇灌（恢复与更新）。这三个主题构成了一个完整的神学结构——审判不是神的最终目的，呼召悔改是通向恩典的桥梁，而圣灵的浇灌是恢复的保证。`,
  en: `Joel is one of the shortest Minor Prophets (3 chapters), with disputed dating (scholars argue anywhere from 9th to 4th century BC), but its message is timeless. Beginning with a locust plague, it leads readers from present disaster to eschatological judgment and hope.

Joel's three great themes are: the Day of the LORD (judgment), the call to repentance (rend your heart), and the outpouring of the Spirit (restoration and renewal). These form a complete theological structure — judgment is not God's final purpose, the call to repent bridges to grace, and the Spirit's outpouring guarantees restoration.`,
};

const outline = [
  ["1章", "蝗灾与哀哭的呼召", "Ch. 1", "Locust Plague; Call to Lament"],
  ["2:1-17", "耶和华的日子与悔改呼召", "Ch. 2:1–17", "Day of the LORD; Call to Repent"],
  ["2:18-32", "恢复应许与圣灵浇灌", "Ch. 2:18–32", "Restoration; Spirit Outpoured"],
  ["3章", "列国审判与锡安的荣耀", "Ch. 3", "Nations Judged; Zion Glorified"],
];

const keyVerse = {
  zh: `"以后，我要将我的灵浇灌凡有血气的。你们的儿女要说预言；你们的老年人要做异梦，少年人要见异象。"（约珥书 2:28）`,
  en: `"And it shall come to pass afterward, that I will pour out my spirit upon all flesh; and your sons and your daughters shall prophesy, your old men shall dream dreams, your young men shall see visions." (Joel 2:28)`,
};

const info = { nameZh: `约珥书`, nameEn: `Joel`, author: `约珥`, date: `日期有争议`, chapters: `3章`, backHref: `/old-testament/minor-prophets`, backLabel: `小先知书`, bibleId: `JOL` };

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