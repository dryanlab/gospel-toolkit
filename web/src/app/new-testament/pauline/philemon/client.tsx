'use client';
import Link from 'next/link';
import SpeakButton from '@/components/SpeakButton';
import { useState } from 'react';

const sections = [
    {
      title_zh: '一、腓利门的信心与爱心：福音果子的见证',
      title_en: `I. Philemon's Faith and Love: Testimony of the Gospel's Fruit`,
      content_zh: `保罗在开篇就为腓利门的信心和爱心感恩，这不是客套，而是为后面的请求铺设神学基础。

"我祷告的时候提到你，常为你感谢我的神。因听说你的爱心并你向主耶稣和众圣徒的信心。愿你与人所同有的信心显出功效，使人知道你们各样善事都是为基督做的。"（腓利门书 1:4-6）

"I thank my God, making mention of thee always in my prayers, Hearing of thy love and faith, which thou hast toward the Lord Jesus, and toward all saints; That the communication of thy faith may become effectual by the acknowledging of every good thing which is in you in Christ Jesus." (Philemon 1:4-6, KJV)

保罗提到腓利门的"爱心"和"信心"——这两个词的顺序在原文中是交叉排列（chiasm）：信心向着主耶稣，爱心向着众圣徒。信心的对象是基督，爱心的流向是弟兄。保罗祷告他的信心"显出功效"——信心不是抽象的教义，而是在具体行动中彰显的。接下来保罗要求腓利门做的事（饶恕并接纳逃跑的奴隶阿尼西母），正是这信心"显出功效"的最大考验。

腓利门家中有教会聚会（1:2"在你家的教会"），说明他是歌罗西教会的核心成员，家境富裕到可以拥有奴隶并提供聚会场所。保罗称他为"同工"——不是雇主与雇员的关系，而是福音里的同工关系。`,
      content_en: `Paul opens by giving thanks for Philemon's faith and love — not mere courtesy but laying the theological foundation for his coming request.

"I thank my God, making mention of thee always in my prayers, Hearing of thy love and faith, which thou hast toward the Lord Jesus, and toward all saints; That the communication of thy faith may become effectual by the acknowledging of every good thing which is in you in Christ Jesus." (Philemon 1:4-6, KJV)

Paul mentions Philemon's "love" and "faith" — the order in the Greek forms a chiasm: faith toward the Lord Jesus, love toward all the saints. The object of faith is Christ; the direction of love is toward the brethren. Paul prays that his faith may "become effectual' — faith is not abstract doctrine but is manifested in concrete action. What Paul is about to ask Philemon to do (forgive and receive his runaway slave Onesimus) is precisely the greatest test of this faith becoming "effectual.'

Philemon had a church meeting in his house (1:2, "the church in thy house"), indicating he was a core member of the Colossian church, wealthy enough to own slaves and provide a meeting place. Paul calls him a "fellowlabourer' — not an employer-employee relationship but a co-worker relationship in the gospel.`
    },
    {
      title_zh: `二、爱心的恳求：不是命令，乃是请求`,
      title_en: `II. An Appeal of Love: Not a Command but a Request`,
      content_zh: `腓利门书只有一章25节，是保罗最短的书信，却蕴含着福音最深刻的应用。阿尼西母是腓利门的奴隶，他偷了主人的财物逃跑，在罗马遇见了囚犯保罗，信了主。保罗现在把他送回去，同时写信请求腓利门饶恕并接纳他。

"我虽然靠着基督能放胆吩咐你合宜的事，然而像我这有年纪的保罗，现在又是为基督耶稣被囚的，宁可凭着爱心求你。就是为我在捆锁中所生的儿子阿尼西母求你。"（腓利门书 1:8-10）

"Wherefore, though I might be much bold in Christ to enjoin thee that which is convenient, Yet for love's sake I rather beseech thee, being such an one as Paul the aged, and now also a prisoner of Jesus Christ: I beseech thee for my son Onesimus, whom I have begotten in my bonds." (Philemon 1:8-10, KJV)

保罗有使徒的权柄可以"命令"腓利门，但他选择"凭着爱心求"。这就是福音的方式——不是强迫，而是爱的感化。保罗称阿尼西母为"我在捆锁中所生的儿子"，一个逃跑的奴隶在福音里成了使徒的儿子。`,
      content_en: `Philemon has only one chapter of 25 verses — Paul's shortest letter — yet it contains the gospel's most profound application. Onesimus was Philemon's slave who stole from his master and fled. In Rome he met the imprisoned Paul and came to faith. Paul now sends him back, writing to request Philemon's forgiveness and acceptance.

"Wherefore, though I might be much bold in Christ to enjoin thee that which is convenient, Yet for love's sake I rather beseech thee, being such an one as Paul the aged, and now also a prisoner of Jesus Christ: I beseech thee for my son Onesimus, whom I have begotten in my bonds." (Philemon 1:8-10, KJV)

Paul had apostolic authority to "command' Philemon, but chose to "beseech for love's sake." This is the gospel's way — not coercion but the persuasion of love. Paul called Onesimus "my son whom I have begotten in my bonds' — a runaway slave became an apostle's son through the gospel.`
    },
    {
      title_zh: `三、福音如何改变社会关系`,
      title_en: `III. How the Gospel Transforms Social Relationships`,
      content_zh: `保罗对腓利门的请求揭示了福音改变社会关系的方式——不是外在的革命，而是内在的更新。

"他暂时离开你，或者是叫你永远得着他——不再是奴仆，乃是高过奴仆，是亲爱的兄弟。在我实在是如此，何况在你呢！这也不拘是按肉体说，是按主说。"（腓利门书 1:15-16）

"For perhaps he therefore departed for a season, that thou shouldest receive him for ever; Not now as a servant, but above a servant, a brother beloved, specially to me, but how much more unto thee, both in the flesh, and in the Lord?" (Philemon 1:15-16, KJV)

"不再是奴仆，乃是亲爱的兄弟"——这是福音带来的身份革命。在基督里，主人和奴隶成了弟兄。保罗没有直接呼吁废除奴隶制，但他种下了一颗种子：当主人真正将奴隶视为"亲爱的兄弟"时，奴隶制的根基就被瓦解了。福音改变世界的方式不是自上而下的政治革命，而是自内而外的生命更新。`,
      content_en: `Paul's request to Philemon reveals how the gospel transforms social relationships — not through outward revolution but inward renewal.

"For perhaps he therefore departed for a season, that thou shouldest receive him for ever; Not now as a servant, but above a servant, a brother beloved, specially to me, but how much more unto thee, both in the flesh, and in the Lord?" (Philemon 1:15-16, KJV)

"Not now as a servant, but above a servant, a brother beloved' — this is the identity revolution the gospel brings. In Christ, master and slave become brothers. Paul did not directly call for the abolition of slavery, but he planted a seed: when a master truly regards his slave as "a brother beloved," the foundation of slavery crumbles. The gospel changes the world not through top-down political revolution but through inside-out life transformation.`
    },
    {
      title_zh: `四、基督的代替：福音的缩影`,
      title_en: `IV. Christ's Substitution: The Gospel in Miniature`,
      content_zh: `腓利门书最感人的一节，也是福音代替原理的最佳写照。

"他若亏负你，或欠你什么，都归在我的帐上。我保罗亲笔写的，我必偿还。"（腓利门书 1:18-19）

"If he hath wronged thee, or oweth thee ought, put that on mine account; I Paul have written it with mine own hand, I will repay it." (Philemon 1:18-19, KJV)

"都归在我的帐上"——这正是基督在十字架上为我们所做的。我们亏欠了神，我们的罪债无法偿还，但基督说："都归在我的帐上。"保罗效法基督，愿意为阿尼西母承担一切债务。这就是福音的核心：代替。无罪的替有罪的受刑，富足的替贫穷的偿债，义者替不义者而死。

这封小小的书信，是整个福音的缩影：一个有罪的奴隶（我们），一位代求的中保（基督），一位公义却满有恩慈的主人（天父）。阿尼西母的故事，就是每一个蒙恩罪人的故事。`,
      content_en: `The most moving verse in Philemon is also the finest portrait of the gospel's principle of substitution.

"If he hath wronged thee, or oweth thee ought, put that on mine account; I Paul have written it with mine own hand, I will repay it." (Philemon 1:18-19, KJV)

"Put that on mine account' — this is exactly what Christ did for us on the cross. We owed God a debt we could never repay, but Christ said: "Put that on mine account." Paul imitated Christ, willing to bear all of Onesimus's debts. This is the heart of the gospel: substitution. The sinless suffers for the sinful, the rich pays for the poor, the righteous dies for the unrighteous.

This small letter is the gospel in miniature: a guilty slave (us), an interceding mediator (Christ), and a just yet gracious master (the Father). The story of Onesimus is the story of every sinner saved by grace.`
    }
  ];

const overview = {
  zh: `腓利门书是新约最短的书信之一，却被称为"福音的缩影"。腓利门是歌罗西教会的富有信徒，他的奴隶阿尼西母偷窃逃跑后在罗马信主，保罗写信请求腓利门饶恕并接纳阿尼西母为弟兄。这封私人信件展示了福音如何改变人与人的关系——从主仆变为弟兄，并生动呈现了基督代替的救赎原理。`,
  en: `Philemon is one of the shortest letters in the New Testament, yet it has been called "the gospel in miniature." Philemon was a wealthy believer in the Colossian church whose slave Onesimus stole from him and fled. After coming to faith in Rome, Paul wrote requesting Philemon to forgive and receive Onesimus as a brother. This personal letter demonstrates how the gospel transforms human relationships — from master-slave to brothers — and vividly presents the principle of Christ's substitutionary redemption.`,
};

const keyVerse = {
  zh: `"他若亏负你，或欠你什么，都归在我的帐上。"（腓利门书 1:18）`,
  en: `"If he hath wronged thee, or oweth thee ought, put that on mine account." (Philemon 1:18, KJV)`,
};

const outline = [[`1-3节`,`问安：恩惠与平安`,`vv. 1-3`,`Greeting: Grace and Peace`],[`4-7节`,`称赞腓利门的爱心与信心`,`vv. 4-7`,`Praise for Philemon's Love and Faith`],[`8-16节`,`为阿尼西母求情`,`vv. 8-16`,`Appeal for Onesimus`],[`17-21节`,`保罗的担保与信任`,`vv. 17-21`,`Paul's Guarantee and Trust`],[`22-25节`,`结语与祝福`,`vv. 22-25`,`Closing and Blessing`]];

const info = { nameZh: `腓利门书`, nameEn: `Philemon`, author: `使徒保罗`, date: `约公元60-62年`, chapters: `1章`, backHref: `/new-testament/pauline`, backLabel: `保罗书信`, bibleId: `PHM` };

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
