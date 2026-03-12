'use client';
import Link from 'next/link';
import SpeakButton from '@/components/SpeakButton';
import { useState } from 'react';

const sections = [
    {
      title_zh: '一、持守纯正的道：抵挡异端（1章）',
      title_en: `I. Holding Fast Sound Doctrine: Resisting Heresy`,
      content_zh: `保罗留下提摩太在以弗所牧养教会，自己则去了马其顿。以弗所教会面临严重的异端威胁——有人传讲荒渺无凭的话语和无穷的家谱，偏离了信仰的核心。

"我往马其顿去的时候，曾劝你仍住在以弗所，好嘱咐那几个人不可传异教，也不可听从荒渺无凭的话语和无穷的家谱；这等事只生辩论，并不发明神在信上所立的章程。但命令的总归就是爱；这爱是从清洁的心和无亏的良心，无伪的信心生出来的。"（提摩太前书 1:3-5）

"命令的总归就是爱"——纯正的教义最终要结出爱的果子。如果一个人的神学越来越精确，行为却越来越缺乏爱心，那他的神学一定出了问题。保罗自己就是活生生的见证：他原是逼迫教会的罪魁，却蒙了主的怜悯，"在罪人中我是个罪魁。然而，我蒙了怜悯"（1:15-16）。这恩典改变了他，也要改变每一个归信的人。`,
      content_en: `Paul left Timothy in Ephesus to shepherd the church while he went to Macedonia. The Ephesian church faced serious heretical threats — some were teaching myths and endless genealogies, departing from the core of faith.

"As I besought thee to abide still at Ephesus, when I went into Macedonia, that thou mightest charge some that they teach no other doctrine, Neither give heed to fables and endless genealogies, which minister questions, rather than godly edifying which is in faith: so do. Now the end of the commandment is charity out of a pure heart, and of a good conscience, and of faith unfeigned." (1 Timothy 1:3-5, KJV)

"The end of the commandment is charity' — sound doctrine must ultimately bear the fruit of love. If a person's theology grows ever more precise while their behavior grows ever more loveless, something is wrong with their theology. Paul himself was a living testimony: he was formerly the chief of sinners who persecuted the church, yet received the Lord's mercy — "sinners; of whom I am chief. Howbeit for this cause I obtained mercy' (1:15-16). This grace transformed him and will transform everyone who comes to faith.`
    },
    {
      title_zh: '二、教会的秩序与治理（2-3章）',
      title_en: `II. Church Order and Governance`,
      content_zh: `提摩太前书被称为"教牧书信"之一，因为它详细论述了教会的组织和治理。保罗给出了监督（长老）和执事的资格标准。

"人若想要得监督的职分，就是羡慕善工。作监督的，必须无可指责，只作一个妇人的丈夫，有节制，自守，端正，乐意接待远人，善于教导；不因酒滋事，不打人，只要温和，不争竞，不贪财。"（提摩太前书 3:1-3）

注意保罗的标准：不是才华、学历或口才，而是品格。"无可指责"是总原则，其余都是具体展开。教会的领袖首先是品格的榜样，然后才是恩赐的运用。保罗更指出，监督"好好管理自己的家"（3:4）是管理教会的前提——一个在家庭中失败的人，如何能牧养神的教会？`,
      content_en: `First Timothy is called one of the "Pastoral Epistles' because it deals extensively with church organization and governance. Paul set forth the qualifications for overseers (elders) and deacons.

"This is a true saying, If a man desire the office of a bishop, he desireth a good work. A bishop then must be blameless, the husband of one wife, vigilant, sober, of good behaviour, given to hospitality, apt to teach; Not given to wine, no striker, not greedy of filthy lucre; but patient, not a brawler, not covetous." (1 Timothy 3:1-3, KJV)

Notice Paul's criteria: not talent, education, or eloquence, but character. "Blameless' is the overarching principle; the rest are specific elaborations. Church leaders must first be examples of character, then exercisers of gifts. Paul further notes that an overseer who "ruleth well his own house' (3:4) is a prerequisite for managing the church — how can someone who has failed at home shepherd God's church?`
    },
    {
      title_zh: '三、牧者的操练与敬虔的秘诀（4-6章）',
      title_en: `III. Pastoral Discipline and the Secret of Godliness (Ch. 4–6)`,
      content_zh: `保罗对年轻的提摩太有特别的劝勉："不可叫人小看你年轻，总要在言语、行为、爱心、信心、清洁上，都作信徒的榜样"（4:12）。年轻不是软弱的借口，反而要在各方面成为榜样。"要以宣读、劝勉、教导为念"（4:13），"要谨慎自己和自己的教训"（4:16）——牧者的生命和教导必须一致。

第5章论到教会中不同群体的牧养：对待年长者如父母，年幼者如弟兄姐妹（5:1-2）；教会当善待真正有需要的寡妇（5:3-16）；善于管理的长老当"加倍地敬奉他"（5:17）；指控长老必须有凭有据——"控告长老的呈子，非有两三个见证就不要收"（5:19）。

第6章发出最强烈的警告："贪财是万恶之根。有人贪恋钱财，就被引诱离了真道"（6:10）。保罗不是说钱是罪，而是说对钱的爱会腐蚀信仰。"敬虔加上知足的心便是大利了"（6:6）——这才是真正的财富。

结尾的命令是："你这属神的人要逃避这些事，追求公义、敬虔、信心、爱心、忍耐、温柔。你要为真道打那美好的仗"（6:11-12）。提摩太前书为每一位传道人和信徒提供了在教会中事奉的完整蓝图。`,
      content_en: `Paul had special exhortation for young Timothy: "Let no man despise thy youth; but be thou an example of the believers, in word, in conversation, in charity, in spirit, in faith, in purity" (4:12). Youth is no excuse for weakness; rather, one should be an example in every area. "Give attendance to reading, to exhortation, to doctrine" (4:13), and "take heed unto thyself, and unto the doctrine" (4:16) — a pastor's life and teaching must be consistent.

Chapter 5 addresses pastoral care for different groups: treat elders as parents, younger members as siblings (5:1-2); the church should care for widows truly in need (5:3-16); elders who rule well should be counted "worthy of double honour" (5:17); accusations against elders require evidence — "against an elder receive not an accusation, but before two or three witnesses" (5:19).

Chapter 6 issues the strongest warning: "The love of money is the root of all evil: which while some coveted after, they have erred from the faith" (6:10). Paul is not saying money is sin but that love of money corrodes faith. "Godliness with contentment is great gain" (6:6) — this is true wealth.

The closing command: "But thou, O man of God, flee these things; and follow after righteousness, godliness, faith, love, patience, meekness. Fight the good fight of faith" (6:11-12). 1 Timothy provides a complete blueprint for ministry in the church for every pastor and believer.`
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

const theology = {
  title_zh: `核心神学：教会治理与敬虔的奥秘`,
  title_en: `Core Theology: Church Government and the Mystery of Godliness`,
  content_zh: `提摩太前书是保罗写给年轻牧者提摩太的教牧指南，核心关注教会的秩序和纯正的教义。

第一，敬虔的奥秘。"大哉，敬虔的奥秘！无人不以为然：就是神在肉身显现，被圣灵称义，被天使看见，被传于外邦，被世人信服，被接在荣耀里"（3:16）。这六句话是早期教会的信仰告白——简洁而完整地概括了基督的道成肉身、复活、升天和福音的传播。

第二，教会领袖的标准。监督（长老）和执事的资格（3:1-13）不是以恩赐或才能为首要标准，而是以品格为标准——"必须无可指责"（3:2）。教会领袖首先是品格的榜样，其次才是能力的展现。"不可叫人小看你年轻，总要在言语、行为、爱心、信心、清洁上，都作信徒的榜样"（4:12）。

第三，纯正的教义与假教师。"圣灵明说，在后来的时候，必有人离弃真道，听从那引诱人的邪灵和鬼魔的道理"（4:1）。保罗命令提摩太"要为从前一次交付圣徒的真道竭力地争辩"——不是与人争论不休，而是忠心地教导和持守纯正的福音。`,
  content_en: `1 Timothy is Paul's pastoral guide for the young pastor Timothy, focusing on church order and sound doctrine.

First, the mystery of godliness. "And without controversy great is the mystery of godliness: God was manifest in the flesh, justified in the Spirit, seen of angels, preached unto the Gentiles, believed on in the world, received up into glory" (3:16). These six clauses form an early church confession — concisely and completely summarizing Christ's incarnation, resurrection, ascension, and the gospel's spread.

Second, standards for church leaders. The qualifications for overseers (elders) and deacons (3:1-13) prioritize character over gifts or ability — "A bishop then must be blameless" (3:2). Church leaders are first exemplars of character, then demonstrations of competence. "Let no man despise thy youth; but be thou an example of the believers, in word, in conversation, in charity, in spirit, in faith, in purity" (4:12).

Third, sound doctrine and false teachers. "Now the Spirit speaketh expressly, that in the latter times some shall depart from the faith, giving heed to seducing spirits, and doctrines of devils" (4:1). Paul commands Timothy to contend earnestly for the faith once delivered to the saints — not quarreling endlessly but faithfully teaching and upholding the pure gospel.`,
};

const keyVerse = {
  zh: `"大哉，敬虔的奥秘，无人不以为然！就是神在肉身显现，被圣灵称义，被天使看见，被传于外邦，被世人信服，被接在荣耀里。"（提摩太前书 3:16）`,
  en: `"And without controversy great is the mystery of godliness: God was manifest in the flesh, justified in the Spirit, seen of angels, preached unto the Gentiles, believed on in the world, received up into glory." (1 Timothy 3:16, KJV)`,
};

const info = { nameZh: `提摩太前书`, nameEn: `1 Timothy`, author: `使徒保罗`, date: `约公元62-64年`, chapters: `6章`, backHref: `/new-testament/pauline`, backLabel: `保罗书信`, bibleId: `1TI` };


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
