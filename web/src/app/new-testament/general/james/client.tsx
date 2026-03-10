'use client';
import Link from 'next/link';
import SpeakButton from '@/components/SpeakButton';
import { useState } from 'react';

const sections = [
    {
      title_zh: '试炼与智慧：信心的炼净',
      title_en: 'Trials and Wisdom: The Purifying of Faith',
      content_zh: `雅各书以一个出人意料的劝勉开始：要以试炼为大喜乐。这不是受苦主义，而是对试炼本质的深刻认识。

"我的弟兄们，你们落在百般试炼中，都要以为大喜乐；因为知道你们的信心经过试验，就生忍耐。但忍耐也当成功，使你们成全、完备，毫无缺欠。"（雅各书 1:2-4）

"My brethren, count it all joy when ye fall into divers temptations; Knowing this, that the trying of your faith worketh patience. But let patience have her perfect work, that ye may be perfect and entire, wanting nothing." (James 1:2-4, KJV)

试炼的目的是"生忍耐"，忍耐的目的是"成全、完备"。这是神对信徒的心意：借着苦难塑造完全的品格。雅各接着说，在试炼中缺乏智慧的，可以向神祈求，"神是厚赐与众人，也不斥责人的"（1:5）。面对试炼的智慧，不是靠人的聪明，而是来自神的恩赐。`,
      content_en: `James opens with a surprising exhortation: count trials as great joy. This is not masochism but a profound understanding of what trials truly are.

"My brethren, count it all joy when ye fall into divers temptations; Knowing this, that the trying of your faith worketh patience. But let patience have her perfect work, that ye may be perfect and entire, wanting nothing." (James 1:2-4, KJV)

Trials produce patience; patience produces perfection and completeness. This is God's intention for believers: to shape complete character through suffering. James continues: those who lack wisdom in trials may ask God, who "giveth to all men liberally, and upbraideth not' (1:5). Wisdom in the face of trials comes not from human cleverness but from God's gracious gift.`
    },
    {
      title_zh: '信心与行为：真信心必结出果子',
      title_en: 'Faith and Works: True Faith Bears Fruit',
      content_zh: `雅各书最著名也最容易被误解的段落，是关于信心与行为的关系。马丁·路德曾称雅各书为"稻草的书信"，但这是误解了雅各的意思。

"我的弟兄们，若有人说自己有信心，却没有行为，有什么益处呢？这信心能救他吗？……这样，信心若没有行为就是死的。"（雅各书 2:14,17）

"What doth it profit, my brethren, though a man say he hath faith, and have not works? can faith save him? … Even so faith, if it hath not works, is dead, being alone." (James 2:14,17, KJV)

雅各攻击的不是保罗所说"因信称义"的信心，而是"口头信心"——只是说说而已、没有生命改变的虚假信心。保罗说我们靠信心得救，雅各说真信心会结出行为。两人说的不是矛盾，而是同一真理的两面：真正的信心必然产生行为，而没有行为的"信心"根本不是真信心。亚伯拉罕"信心是与他的行为并行，而且信心因着行为才得成全"（2:22）——信心和行为是合一的，不可分割。`,
      content_en: `The most famous and most easily misunderstood passage in James concerns the relationship between faith and works. Martin Luther once called James "an epistle of straw," but this misread James's intention.

"What doth it profit, my brethren, though a man say he hath faith, and have not works? can faith save him? … Even so faith, if it hath not works, is dead, being alone." (James 2:14,17, KJV)

James is not attacking the justifying faith Paul spoke of, but "verbal faith' — a false faith that consists only of words without life transformation. Paul says we are saved through faith; James says true faith produces works. The two are not contradictory but two sides of the same truth: genuine faith inevitably produces works, and "faith' without works is simply not true faith. Abraham's "faith wrought with his works, and by works was faith made perfect' (2:22) — faith and works are unified, inseparable.`
    },
    {
      title_zh: '舌头的力量与从上头来的智慧',
      title_en: 'The Power of the Tongue and Wisdom from Above',
      content_zh: `雅各书第三章用大量篇幅论及舌头——这小小的器官却有巨大的力量，可以建造也可以摧毁。

"这样，舌头在百体里也是最小的，却能说大话。看哪，最小的火能点着最大的树林。舌头就是火，在我们百体中，舌头是个罪恶的世界，能污秽全身，也能把生命的轮子点起来，并且是从地狱里点着的。"（雅各书 3:5-6）

"Even so the tongue is a little member, and boasteth great things. Behold, how great a matter a little fire kindleth! And the tongue is a fire, a world of iniquity: so is the tongue among our members, that it defileth the whole body, and setteth on fire the course of nature; and it is set on fire of hell." (James 3:5-6, KJV)

舌头能用来"颂赞那为主、为父的神，又用它来咒诅那照着　神形像被造的人"（3:9）——同一个舌头，可以赞美神，也可以伤害人。雅各指出，真正的解决之道不是靠自己控制舌头（"没有人能制伏这舌头"，3:8），而是靠"从上头来的智慧"——这智慧是"纯洁的、和平的、温良的、柔顺的，满有怜悯、多结善果，没有偏见，没有假冒"（3:17）。`,
      content_en: `James chapter 3 devotes considerable space to the tongue — this small organ with tremendous power, capable of both building up and tearing down.

"Even so the tongue is a little member, and boasteth great things. Behold, how great a matter a little fire kindleth! And the tongue is a fire, a world of iniquity: so is the tongue among our members, that it defileth the whole body, and setteth on fire the course of nature; and it is set on fire of hell." (James 3:5-6, KJV)

The tongue is used "therewith bless we God, even the Father; and therewith curse we men, which are made after the similitude of God' (3:9) — the same tongue can praise God and wound people. James notes the true solution is not self-control of the tongue ("no man can tame the tongue," 3:8), but "wisdom from above' — wisdom that is "first pure, then peaceable, gentle, and easy to be intreated, full of mercy and good fruits, without partiality, and without hypocrisy' (3:17).`
    }
  ];

const overview = {
  zh: `雅各书是新约最早期的书信之一，作者是主的兄弟雅各，写给流散在外的犹太基督徒。这封书信极具实践性，被比作新约的箴言书，着重论述信仰如何落实在日常生活中：如何面对试炼、如何对待穷人、信心与行为的关系、控制舌头、谦卑、祷告的力量。改革宗传统认为雅各书与保罗书信不冲突——两人强调的是信仰的不同方面。`,
  en: `James is one of the earliest New Testament letters, written by James the brother of the Lord to Jewish Christians scattered abroad. This intensely practical letter is often compared to the New Testament Proverbs, emphasizing how faith is lived out in daily life: handling trials, treating the poor, the relationship of faith and works, controlling the tongue, humility, and the power of prayer. The Reformed tradition holds that James does not contradict Paul — the two emphasize different aspects of the same faith.`,
};

const outline = [
  ["1章", `试炼、智慧与真道的实行者`, "Ch. 1", `Trials, Wisdom, and Doers of the Word`],
  ["2章", `不偏待人与信心行为的关系`, "Ch. 2", `Impartiality and the Relationship of Faith and Works`],
  ["3章", `舌头的制服与从上头来的智慧`, "Ch. 3", `Taming the Tongue and Wisdom from Above`],
  ["4章", `争战的根源与谦卑顺服神`, "Ch. 4", `The Root of Conflict and Humble Submission to God`],
  ["5章", `警告富人、忍耐苦难与祷告的力量`, "Ch. 5", `Warning to the Rich, Patience in Suffering, and the Power of Prayer`],
];

const keyVerse = {
  zh: `"这样，信心若没有行为就是死的。"（雅各书 2:17）`,
  en: `"Even so faith, if it hath not works, is dead, being alone." (James 2:17, KJV)`,
};

const info = { nameZh: `雅各书`, nameEn: `James`, author: `主的兄弟雅各`, date: `约公元45-49年`, chapters: `5章`, backHref: `/new-testament/general`, backLabel: `普通书信`, bibleId: `JAS` };

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
