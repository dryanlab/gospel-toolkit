'use client';
import Link from 'next/link';
import SpeakButton from '@/components/SpeakButton';
import { useState } from 'react';

const sections = [
    {
      title_zh: '持守纯正的道：抵挡异端',
      title_en: 'Holding Fast Sound Doctrine: Resisting Heresy',
      content_zh: `保罗留下提摩太在以弗所牧养教会，自己则去了马其顿。以弗所教会面临严重的异端威胁——有人传讲荒渺无凭的话语和无穷的家谱，偏离了信仰的核心。

"我往马其顿去的时候，曾劝你仍住在以弗所，好嘱咐那几个人不可传异教，也不可听从荒渺无凭的话语和无穷的家谱；这等事只生辩论，并不发明神在信上所立的章程。但命令的总归就是爱；这爱是从清洁的心和无亏的良心，无伪的信心生出来的。"（提摩太前书 1:3-5）

"As I besought thee to abide still at Ephesus, when I went into Macedonia, that thou mightest charge some that they teach no other doctrine, Neither give heed to fables and endless genealogies, which minister questions, rather than godly edifying which is in faith: so do. Now the end of the commandment is charity out of a pure heart, and of a good conscience, and of faith unfeigned." (1 Timothy 1:3-5, KJV)

"命令的总归就是爱"——纯正的教义最终要结出爱的果子。如果一个人的神学越来越精确，行为却越来越缺乏爱心，那他的神学一定出了问题。保罗自己就是活生生的见证：他原是逼迫教会的罪魁，却蒙了主的怜悯，"在罪人中我是个罪魁。然而，我蒙了怜悯"（1:15-16）。这恩典改变了他，也要改变每一个归信的人。`,
      content_en: `Paul left Timothy in Ephesus to shepherd the church while he went to Macedonia. The Ephesian church faced serious heretical threats — some were teaching myths and endless genealogies, departing from the core of faith.

"As I besought thee to abide still at Ephesus, when I went into Macedonia, that thou mightest charge some that they teach no other doctrine, Neither give heed to fables and endless genealogies, which minister questions, rather than godly edifying which is in faith: so do. Now the end of the commandment is charity out of a pure heart, and of a good conscience, and of faith unfeigned." (1 Timothy 1:3-5, KJV)

"The end of the commandment is charity' — sound doctrine must ultimately bear the fruit of love. If a person's theology grows ever more precise while their behavior grows ever more loveless, something is wrong with their theology. Paul himself was a living testimony: he was formerly the chief of sinners who persecuted the church, yet received the Lord's mercy — "sinners; of whom I am chief. Howbeit for this cause I obtained mercy' (1:15-16). This grace transformed him and will transform everyone who comes to faith.`
    },
    {
      title_zh: '教会的秩序与治理',
      title_en: 'Church Order and Governance',
      content_zh: `提摩太前书被称为"教牧书信"之一，因为它详细论述了教会的组织和治理。保罗给出了监督（长老）和执事的资格标准。

"人若想要得监督的职分，就是羡慕善工。作监督的，必须无可指责，只作一个妇人的丈夫，有节制，自守，端正，乐意接待远人，善于教导；不因酒滋事，不打人，只要温和，不争竞，不贪财。"（提摩太前书 3:1-3）

"This is a true saying, If a man desire the office of a bishop, he desireth a good work. A bishop then must be blameless, the husband of one wife, vigilant, sober, of good behaviour, given to hospitality, apt to teach; Not given to wine, no striker, not greedy of filthy lucre; but patient, not a brawler, not covetous." (1 Timothy 3:1-3, KJV)

注意保罗的标准：不是才华、学历或口才，而是品格。"无可指责"是总原则，其余都是具体展开。教会的领袖首先是品格的榜样，然后才是恩赐的运用。保罗更指出，监督"好好管理自己的家"（3:4）是管理教会的前提——一个在家庭中失败的人，如何能牧养神的教会？`,
      content_en: `First Timothy is called one of the "Pastoral Epistles' because it deals extensively with church organization and governance. Paul set forth the qualifications for overseers (elders) and deacons.

"This is a true saying, If a man desire the office of a bishop, he desireth a good work. A bishop then must be blameless, the husband of one wife, vigilant, sober, of good behaviour, given to hospitality, apt to teach; Not given to wine, no striker, not greedy of filthy lucre; but patient, not a brawler, not covetous." (1 Timothy 3:1-3, KJV)

Notice Paul's criteria: not talent, education, or eloquence, but character. "Blameless' is the overarching principle; the rest are specific elaborations. Church leaders must first be examples of character, then exercisers of gifts. Paul further notes that an overseer who "ruleth well his own house' (3:4) is a prerequisite for managing the church — how can someone who has failed at home shepherd God's church?`
    },
    {
      title_zh: '敬虔的奥秘与年轻牧者的操练',
      title_en: 'The Mystery of Godliness and the Young Pastor\'s Discipline',
      content_zh: `保罗在书信中间插入了一段伟大的基督颂歌，揭示了"敬虔的奥秘"。

"大哉，敬虔的奥秘，无人不以为然！就是神在肉身显现，被圣灵称义，被天使看见，被传于外邦，被世人信服，被接在荣耀里。"（提摩太前书 3:16）

"And without controversy great is the mystery of godliness: God was manifest in the flesh, justified in the Spirit, seen of angels, preached unto the Gentiles, believed on in the world, received up into glory." (1 Timothy 3:16, KJV)

六行诗句，概括了基督救赎的全部历程——道成肉身、复活称义、天使敬拜、福音广传、万民归信、升天得荣。这就是教会信仰的根基和内容。

保罗对年轻的提摩太有特别的劝勉："不可叫人小看你年轻，总要在言语、行为、爱心、信心、清洁上，都作信徒的榜样"（4:12）。年轻不是软弱的借口，反而要在各方面成为榜样。保罗还嘱咐他"要以宣读、劝勉、教导为念"（4:13），"要谨慎自己和自己的教训"（4:16）。牧者的生命和教导必须一致。`,
      content_en: `In the middle of the letter, Paul inserted a great hymn to Christ, revealing "the mystery of godliness."

"And without controversy great is the mystery of godliness: God was manifest in the flesh, justified in the Spirit, seen of angels, preached unto the Gentiles, believed on in the world, received up into glory." (1 Timothy 3:16, KJV)

Six lines summarizing the entire course of Christ's redemption — incarnation, resurrection-vindication, angelic worship, global proclamation, worldwide belief, and ascension to glory. This is the foundation and content of the church's faith.

Paul had special exhortation for young Timothy: "Let no man despise thy youth; but be thou an example of the believers, in word, in conversation, in charity, in spirit, in faith, in purity' (4:12). Youth is no excuse for weakness; rather, one should be an example in every area. Paul further charged him to "give attendance to reading, to exhortation, to doctrine' (4:13) and to "take heed unto thyself, and unto the doctrine' (4:16). A pastor's life and teaching must be consistent.`
    }
  ,
  {
    title_zh: `四、教会纪律与敬虔的秘诀（4-6章）`,
    title_en: `IV. Church Discipline and the Secret of Godliness (Ch. 4-6)`,
    content_zh: `书信后半部保罗给提摩太个人的劝勉更加具体。"你要在言语、行为、爱心、信心、清洁上，都作信徒的榜样"（4:12）——年轻不是软弱的借口，而是更当加倍儆醒自守。

保罗论到教会中的寡妇、长老、仆人（5-6章），展现了初代教会的社会结构。服侍不是抽象的，而是关于真实的人和真实的需要。

最强烈的警告在第6章："贪财是万恶之根"（6:10）。保罗不是说钱是罪，而是说对钱的爱会腐蚀信仰。"敬虔加上知足的心便是大利了"（6:6）——这才是真正的财富。

结尾的命令是："你这属神的人要逃避这些事，追求公义、敬虔、信心、爱心、忍耐、温柔"（6:11）。提摩太前书为每一位传道人和信徒提供了在教会中事奉的完整蓝图。`,
    content_en: `The letter's second half contains Paul's more personal exhortations to Timothy. "Be thou an example of the believers, in word, in conversation, in charity, in spirit, in faith, in purity" (4:12) -- youth is no excuse for weakness; it demands all the more vigilance.

Paul addresses widows, elders, and servants in the church (ch. 5-6), revealing the early church's social structure. Ministry is not abstract but about real people with real needs.

The strongest warning comes in chapter 6: "The love of money is the root of all evil" (6:10). Paul is not saying money is sin but that love of money corrodes faith. "Godliness with contentment is great gain" (6:6) -- this is true wealth.

The closing command: "But thou, O man of God, flee these things; and follow after righteousness, godliness, faith, love, patience, meekness" (6:11). 1 Timothy provides a complete blueprint for ministry in the church for every pastor and believer.`,
  }
  ];

const overview = {
  zh: `提摩太前书是保罗写给他属灵儿子提摩太的私人书信，也是教会治理的重要指南。提摩太年轻却担任以弗所教会的牧养重任，保罗在信中教导他如何抵挡异端、建立教会秩序、牧养不同群体，并在个人生命中持守敬虔。这封书信被称为"教牧书信"之一，与提摩太后书和提多书一起构成教会领袖的必读经典。`,
  en: `First Timothy is Paul's personal letter to his spiritual son Timothy, as well as an important guide for church governance. Though young, Timothy bore the weighty responsibility of shepherding the Ephesian church. Paul taught him how to resist heresy, establish church order, pastor various groups, and maintain personal godliness. Known as one of the "Pastoral Epistles," it forms essential reading for church leaders alongside Second Timothy and Titus.`,
};

const outline = [
  ["1章", `保罗的嘱托与恩典的见证`, "Ch. 1", `Paul's Charge and Testimony of Grace`],
  ["2章", `公祷与男女的角色`, "Ch. 2", `Public Prayer and Gender Roles`],
  ["3章", `监督与执事的资格`, "Ch. 3", `Qualifications for Overseers and Deacons`],
  ["4章", `抵挡异端与牧者的操练`, "Ch. 4", `Resisting Heresy and Pastoral Discipline`],
  ["5章", `教会中各群体的牧养`, "Ch. 5", `Pastoral Care for Various Groups`],
  ["6章", `敬虔加知足与美好的仗`, "Ch. 6", `Godliness with Contentment and the Good Fight`],
];

const keyVerse = {
  zh: `"大哉，敬虔的奥秘，无人不以为然！就是神在肉身显现，被圣灵称义，被天使看见，被传于外邦，被世人信服，被接在荣耀里。"（提摩太前书 3:16）`,
  en: `"And without controversy great is the mystery of godliness: God was manifest in the flesh, justified in the Spirit, seen of angels, preached unto the Gentiles, believed on in the world, received up into glory." (1 Timothy 3:16, KJV)`,
};

const info = { nameZh: `提摩太前书`, nameEn: `1 Timothy`, author: `使徒保罗`, date: `约公元62-64年`, chapters: `6章`, backHref: `/new-testament/pauline`, backLabel: `保罗书信`, bibleId: `1TI` };

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
