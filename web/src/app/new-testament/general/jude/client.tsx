'use client';
import Link from 'next/link';
import SpeakButton from '@/components/SpeakButton';
import { useState } from 'react';

const sections = [
    {
      title_zh: '一、为真道竭力争辩与历史的鉴戒（1-16节）',
      title_en: `I. Earnestly Contend for the Faith`,
      content_zh: `犹大原本想写一封关于救恩的积极书信，但紧急的处境迫使他改变计划——假教师已经偷偷混入教会。

"亲爱的弟兄啊，我想尽心写信给你们，论我们同得救恩的时候，就不得不写信劝你们，要为从前一次交付圣徒的真道竭力地争辩。因为有些人偷着进来，就是自古被定受刑罚的，是不虔诚的，将我们神的恩变作放纵情欲的机会，并且不认独一的主宰——我们主耶稣基督。"（犹大书 1:3-4）

"从前一次交付圣徒的真道"——这里的"一次"表明使徒信仰是完整的、不可添加的。真道已经交付了，我们的任务不是发明新教义，而是"竭力争辩"——守护这信仰的纯正。假教师的特征是"将神的恩变作放纵情欲的机会"——他们以恩典为借口犯罪，这是对恩典最大的侮辱。`,
      content_en: `Jude originally intended to write a positive letter about salvation, but the urgency of the situation forced him to change plans — false teachers had already crept into the church.

"Beloved, when I gave all diligence to write unto you of the common salvation, it was needful for me to write unto you, and exhort you that ye should earnestly contend for the faith which was once delivered unto the saints. For there are certain men crept in unawares, who were before of old ordained to this condemnation, ungodly men, turning the grace of our God into lasciviousness, and denying the only Lord God, and our Lord Jesus Christ." (Jude 1:3-4, KJV)

"The faith which was once delivered unto the saints' — the word "once' indicates that the apostolic faith is complete and cannot be added to. The faith has been delivered; our task is not to invent new doctrines but to "earnestly contend' — to guard the purity of this faith. The hallmark of false teachers is "turning the grace of our God into lasciviousness' — using grace as an excuse for sin, which is the greatest insult to grace.`
    },
    {
      title_zh: `二、在至圣的真道上建造自己（17-25节）`,
      title_en: `III. Building Yourselves Up in the Most Holy Faith`,
      content_zh: `犹大不只警告假教师，也积极指导信徒如何在险恶的属灵环境中站立得稳：

"亲爱的弟兄啊，你们却要在至圣的真道上造就自己，在圣灵里祷告，保守自己常在神的爱中，仰望我们主耶稣基督的怜悯，直到永生。"（犹大书 1:20-21）

犹大给出四个要素：（1）在真道上建造——扎根于纯正的教义；（2）在圣灵里祷告——不是形式化的祷告，而是被圣灵引导的祷告；（3）保守自己在神的爱中——持续活在神的爱里，不偏离；（4）仰望基督的怜悯——盼望最终的救赎。注意这里暗含三位一体的结构：圣灵、神（父）、主耶稣基督各有其工作。

犹大还教导如何对待不同程度的迷失者："有些人你们要从火中抢出来，搭救他们；有些人你们要存惧怕的心怜悯他们，连那被情欲沾染的衣服也当厌恶"（1:23）。这里的智慧在于：怜悯是必须的，但要带着分辨和警惕，免得自己也被沾染。`,
      content_en: `Jude does not only warn about false teachers but actively instructs believers on how to stand firm in a perilous spiritual environment:

"But ye, beloved, building up yourselves on your most holy faith, praying in the Holy Ghost, Keep yourselves in the love of God, looking for the mercy of our Lord Jesus Christ unto eternal life." (Jude 1:20-21, KJV)

Jude gives four elements: (1) building on the faith — rooting oneself in sound doctrine; (2) praying in the Holy Ghost — not formulaic prayer but prayer guided by the Spirit; (3) keeping oneself in the love of God — continually living in God's love without deviation; (4) looking for Christ's mercy — anticipating final redemption. Note the implicit Trinitarian structure: the Holy Spirit, God (the Father), and the Lord Jesus Christ each has His work.

Jude also teaches how to treat those who have gone astray in varying degrees: "And of some have compassion, making a difference: And others save with fear, pulling them out of the fire; hating even the garment spotted by the flesh" (1:22-23). The wisdom here is: compassion is necessary, but with discernment and vigilance, lest one also become contaminated.`
    },
];

const overview = {
  zh: `犹大书虽然只有25节，却是新约中对假教师最激烈的攻击之一。作者犹大是主耶稣的兄弟、雅各的弟兄，他原本计划写一封关于救恩的信，但假教师的入侵迫使他改变计划。全书的核心信息是：假教师的审判是确定的，信徒要为真道竭力争辩。书信以新约最伟大的祝祷之一收尾——神能保守我们不失脚，叫我们欢喜见主。`,
  en: `Though only 25 verses long, Jude is one of the most intense attacks on false teachers in the New Testament. The author Jude, brother of the Lord Jesus and brother of James, originally planned to write about salvation, but the invasion of false teachers forced him to change plans. The core message: judgment of false teachers is certain, and believers must earnestly contend for the faith. The letter closes with one of the greatest benedictions in the New Testament — God is able to keep us from falling and present us before His glory with exceeding joy.`,
};

const theology = {
  title_zh: `核心神学：为真道竭力争辩`,
  title_en: `Core Theology: Contending Earnestly for the Faith`,
  content_zh: `犹大书只有25节，却发出了新约中对假教师最严厉的警告。

第一，为真道竭力争辩。"要为从前一次交付圣徒的真道竭力地争辩"（3节）。"从前一次交付"表明真道不是不断进化的——使徒的教导已经完备，不需要新的启示来补充或修改。教会的使命不是发明新真理，而是守护已有的真理。

第二，假教师的严厉审判。犹大用三个旧约的例子警告假教师的下场：不信的以色列人倒在旷野（5节）、犯罪的天使被永远拘留（6节）、所多玛蛾摩拉遭受永火（7节）。"他们有祸了！因为走了该隐的道路，又为利往巴兰的错谬里直奔，并在可拉的背叛中灭亡了"（11节）。假教师的特征是：以敬虔为得利的门路、利用恩典放纵情欲、不尊重属灵权柄。

第三，保守自己在神的爱中。"亲爱的弟兄啊，你们要在至圣的真道上造就自己，在圣灵里祷告，保守自己常在神的爱中"（20-21节）。犹大书的结尾不是恐惧，而是确信："那能保守你们不失脚，叫你们无瑕无疵、欢欢喜喜站在祂荣耀之前的，就是独一的神——我们的救主"（24节）。最终保守我们的不是我们自己的警醒，而是神的大能。`,
  content_en: `Jude has only 25 verses, yet it contains the New Testament's most severe warning against false teachers.

First, contend earnestly for the faith. "Ye should earnestly contend for the faith which was once delivered unto the saints" (v. 3). "Once delivered" indicates the faith is not continuously evolving — apostolic teaching is complete, requiring no new revelation to supplement or amend it. The church's mission is not to invent new truth but to guard the truth already given.

Second, the severe judgment of false teachers. Jude warns with three Old Testament examples of false teachers' fate: unbelieving Israelites fallen in the wilderness (v. 5), angels who sinned kept in eternal chains (v. 6), Sodom and Gomorrah suffering eternal fire (v. 7). "Woe unto them! for they have gone in the way of Cain, and ran greedily after the error of Balaam for reward, and perished in the gainsaying of Core" (v. 11). False teachers' characteristics: using godliness as a means of gain, turning grace into license, and despising spiritual authority.

Third, keep yourselves in the love of God. "But ye, beloved, building up yourselves on your most holy faith, praying in the Holy Ghost, Keep yourselves in the love of God" (vv. 20-21). Jude's conclusion is not fear but assurance: "Now unto him that is able to keep you from falling, and to present you faultless before the presence of his glory with exceeding joy" (v. 24). What ultimately keeps us is not our own vigilance but God's power.`,
};

const keyVerse = {
  zh: `"那能保守你们不失脚、叫你们无瑕无疵、欢欢喜喜站在他荣耀之前的我们的救主——独一的神。"（犹大书 1:24）`,
  en: `"Now unto him that is able to keep you from falling, and to present you faultless before the presence of his glory with exceeding joy." (Jude 1:24, KJV)`,
};

const outline = [[`1-2节`,`问安与祝福`,`vv. 1-2`,`Greeting and Blessing`],[`3-4节`,`为真道争辩的呼吁`,`vv. 3-4`,`Call to Contend for the Faith`],[`5-16节`,`假教师的审判`,`vv. 5-16`,`Judgment on False Teachers`],[`17-23节`,`信徒当如何自处`,`vv. 17-23`,`How Believers Should Respond`],[`24-25节`,`伟大的祝祷`,`vv. 24-25`,`The Great Doxology`]];

const info = { nameZh: `犹大书`, nameEn: `Jude`, author: `主的兄弟犹大`, date: `约公元65-80年`, chapters: `1章`, backHref: `/new-testament/general`, backLabel: `普通书信`, bibleId: `JDE` };


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
