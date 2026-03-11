'use client';
import Link from 'next/link';
import SpeakButton from '@/components/SpeakButton';
import { useState } from 'react';

const sections = [
    {
      title_zh: '为真道竭力争辩',
      title_en: 'Earnestly Contend for the Faith',
      content_zh: `犹大原本想写一封关于救恩的积极书信，但紧急的处境迫使他改变计划——假教师已经偷偷混入教会。

"亲爱的弟兄啊，我想尽心写信给你们，论我们同得救恩的时候，就不得不写信劝你们，要为从前一次交付圣徒的真道竭力地争辩。因为有些人偷着进来，就是自古被定受刑罚的，是不虔诚的，将我们神的恩变作放纵情欲的机会，并且不认独一的主宰——我们主耶稣基督。"（犹大书 1:3-4）

"Beloved, when I gave all diligence to write unto you of the common salvation, it was needful for me to write unto you, and exhort you that ye should earnestly contend for the faith which was once delivered unto the saints. For there are certain men crept in unawares, who were before of old ordained to this condemnation, ungodly men, turning the grace of our God into lasciviousness, and denying the only Lord God, and our Lord Jesus Christ." (Jude 1:3-4, KJV)

"从前一次交付圣徒的真道"——这里的"一次"表明使徒信仰是完整的、不可添加的。真道已经交付了，我们的任务不是发明新教义，而是"竭力争辩"——守护这信仰的纯正。假教师的特征是"将神的恩变作放纵情欲的机会"——他们以恩典为借口犯罪，这是对恩典最大的侮辱。`,
      content_en: `Jude originally intended to write a positive letter about salvation, but the urgency of the situation forced him to change plans — false teachers had already crept into the church.

"Beloved, when I gave all diligence to write unto you of the common salvation, it was needful for me to write unto you, and exhort you that ye should earnestly contend for the faith which was once delivered unto the saints. For there are certain men crept in unawares, who were before of old ordained to this condemnation, ungodly men, turning the grace of our God into lasciviousness, and denying the only Lord God, and our Lord Jesus Christ." (Jude 1:3-4, KJV)

"The faith which was once delivered unto the saints' — the word "once' indicates that the apostolic faith is complete and cannot be added to. The faith has been delivered; our task is not to invent new doctrines but to "earnestly contend' — to guard the purity of this faith. The hallmark of false teachers is "turning the grace of our God into lasciviousness' — using grace as an excuse for sin, which is the greatest insult to grace.`
    },
    {
      title_zh: '历史的鉴戒与审判的确据',
      title_en: 'Historical Warnings and the Certainty of Judgment',
      content_zh: `犹大用三个旧约例子警告假教师必受审判：以色列人出埃及后在旷野不信（1:5）、堕落的天使（1:6）、所多玛和蛾摩拉（1:7）。这些都是历史上的实际事件，证明神必审判不虔不义的人。

犹大还引用了该隐、巴兰和可拉的例子："他们走了该隐的道路，又为利往巴兰的错谬里直奔，并在可拉的背叛中灭亡了"（1:11）。该隐代表嫉妒与暴力，巴兰代表贪财的假先知，可拉代表对合法权柄的背叛——假教师的行为就是这三者的结合。

犹大用极生动的比喻描述他们："这样的人在你们的爱席上与你们同吃的时候，正是礁石；他们作牧人，只知喂养自己，无所惧怕；是没有雨的云彩，被风飘荡；是秋天没有果子的树，死而又死，连根被拔出来；是海里的狂浪，涌出自己可耻的沫子来；是流荡的星，有墨黑的幽暗为他们永远存留。"（犹大书 1:12-13）`,
      content_en: `Jude uses three Old Testament examples to warn that false teachers will certainly be judged: the Israelites who believed not after leaving Egypt (1:5), fallen angels (1:6), and Sodom and Gomorrah (1:7). These are actual historical events proving God will judge the ungodly and unrighteous.

Jude also cites Cain, Balaam, and Korah: "Woe unto them! for they have gone in the way of Cain, and ran greedily after the error of Balaam for reward, and perished in the gainsaying of Core' (1:11). Cain represents jealousy and violence, Balaam represents the false prophet motivated by greed, and Korah represents rebellion against legitimate authority — the behavior of false teachers is a combination of all three.

Jude describes them with vivid imagery: "These are spots in your feasts of charity, when they feast with you, feeding themselves without fear: clouds they are without water, carried about of winds; trees whose fruit withereth, without fruit, twice dead, plucked up by the roots; Raging waves of the sea, foaming out their own shame; wandering stars, to whom is reserved the blackness of darkness for ever." (Jude 1:12-13)`
    },
    {
      title_zh: '宝贵的祝祷：保守你们不失脚',
      title_en: 'The Precious Benediction: Keeping You from Falling',
      content_zh: `犹大书以新约中最伟大的祝祷之一结束。在警告了这么多假教师的危险之后，犹大最后将读者的目光转向那位能保守我们的神。

"那能保守你们不失脚、叫你们无瑕无疵、欢欢喜喜站在他荣耀之前的我们的救主——独一的神，愿荣耀、威严、能力、权柄，因我们的主耶稣基督归与他，从万古以前并现今，直到永永远远。阿们！"（犹大书 1:24-25）

"Now unto him that is able to keep you from falling, and to present you faultless before the presence of his glory with exceeding joy, To the only wise God our Saviour, be glory and majesty, dominion and power, both now and ever. Amen." (Jude 1:24-25, KJV)

"保守你们不失脚"——在假教师横行、信仰受威胁的时代，最终的保障不是我们自己的警觉，而是神的保守。他不只保守我们不跌倒，更要叫我们"无瑕无疵、欢欢喜喜"地站在他面前。那日不是战战兢兢地见主，而是欢欢喜喜地见主。这是何等大的恩典！`,
      content_en: `Jude concludes with one of the greatest benedictions in the New Testament. After warning at length about false teachers, Jude finally turns readers' gaze to the God who is able to keep us.

"Now unto him that is able to keep you from falling, and to present you faultless before the presence of his glory with exceeding joy, To the only wise God our Saviour, be glory and majesty, dominion and power, both now and ever. Amen." (Jude 1:24-25, KJV)

"Able to keep you from falling' — in an age when false teachers run rampant and faith is threatened, our ultimate security is not our own vigilance but God's keeping. He not only keeps us from stumbling but will present us "faultless before the presence of his glory with exceeding joy." That day will not be one of trembling before the Lord, but of exceeding joy in His presence. What an extraordinary grace!`
    }
  ];

const overview = {
  zh: `犹大书虽然只有25节，却是新约中对假教师最激烈的攻击之一。作者犹大是主耶稣的兄弟、雅各的弟兄，他原本计划写一封关于救恩的信，但假教师的入侵迫使他改变计划。全书的核心信息是：假教师的审判是确定的，信徒要为真道竭力争辩。书信以新约最伟大的祝祷之一收尾——神能保守我们不失脚，叫我们欢喜见主。`,
  en: `Though only 25 verses long, Jude is one of the most intense attacks on false teachers in the New Testament. The author Jude, brother of the Lord Jesus and brother of James, originally planned to write about salvation, but the invasion of false teachers forced him to change plans. The core message: judgment of false teachers is certain, and believers must earnestly contend for the faith. The letter closes with one of the greatest benedictions in the New Testament — God is able to keep us from falling and present us before His glory with exceeding joy.`,
};

const keyVerse = {
  zh: `"那能保守你们不失脚、叫你们无瑕无疵、欢欢喜喜站在他荣耀之前的我们的救主——独一的神。"（犹大书 1:24）`,
  en: `"Now unto him that is able to keep you from falling, and to present you faultless before the presence of his glory with exceeding joy." (Jude 1:24, KJV)`,
};

const outline = [[`1-2节`,`问安与祝福`,`vv. 1-2`,`Greeting and Blessing`],[`3-4节`,`为真道争辩的呼吁`,`vv. 3-4`,`Call to Contend for the Faith`],[`5-16节`,`假教师的审判`,`vv. 5-16`,`Judgment on False Teachers`],[`17-23节`,`信徒当如何自处`,`vv. 17-23`,`How Believers Should Respond`],[`24-25节`,`伟大的祝祷`,`vv. 24-25`,`The Great Doxology`]];

const info = { nameZh: `犹大书`, nameEn: `Jude`, author: `主的兄弟犹大`, date: `约公元65-80年`, chapters: `1章`, backHref: `/new-testament/general`, backLabel: `普通书信`, bibleId: `JUD` };

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
