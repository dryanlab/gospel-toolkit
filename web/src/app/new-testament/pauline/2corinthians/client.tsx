'use client';
import Link from 'next/link';
import SpeakButton from '@/components/SpeakButton';
import { useState } from 'react';

const sections = [
  {
    title_zh: `一、苦难中的安慰与新约的职事（1-5章）`,
    title_en: `I. Comfort in Suffering and the Ministry of the New Covenant (Ch. 1-5)`,
    content_zh: `保罗以安慰开始——"我们在一切患难中，他就安慰我们，叫我们能用神所赐的安慰去安慰那遭各样患难的人"（1:4）。安慰不是为了享受，而是为了转给别人。保罗的苦难如此深重，"连活命的指望都绝了"（1:8），但正是在绝望中他学会了不靠自己。

新约的职事远超过旧约："那字句是叫人死，精意是叫人活"（3:6）。摩西的帕子在基督里被除去了。"我们众人既然敞着脸得以看见主的荣光，好像从镜子里返照，就变成主的形状"（3:18）。

"我们有这宝贝放在瓦器里"（4:7）——保罗的软弱不是障碍，而是神能力的容器。"我们这至暂至轻的苦楚，要为我们成就极重无比、永远的荣耀"（4:17）。`,
    content_en: `Paul begins with comfort -- "Who comforteth us in all our tribulation, that we may be able to comfort them which are in any trouble, by the comfort wherewith we ourselves are comforted of God" (1:4). Comfort is not for enjoyment but for passing on. Paul's suffering was so severe he "despaired even of life" (1:8), but in despair he learned to rely not on himself.

The new covenant ministry far surpasses the old: "The letter killeth, but the spirit giveth life" (3:6). Moses' veil is removed in Christ. "We all, with open face beholding as in a glass the glory of the Lord, are changed into the same image" (3:18).

"We have this treasure in earthen vessels" (4:7) -- Paul's weakness is not an obstacle but a vessel for God's power. "Our light affliction, which is but for a moment, worketh for us a far more exceeding and eternal weight of glory" (4:17).`,
  },
  {
    title_zh: `二、和好的使命与圣洁的生活（5:11-7章）`,
    title_en: `II. The Ministry of Reconciliation and Holy Living (5:11-Ch. 7)`,
    content_zh: `"若有人在基督里，他就是新造的人，旧事已过，都变成新的了"（5:17）——这是哥林多后书最著名的经文之一。新造的人有新的使命："神……将劝人与他和好的职分赐给我们"（5:18）。每个基督徒都是"基督的使者"（5:20）。

保罗劝勉信徒过分别为圣的生活："你们和不信的原不相配"（6:14）。这不是要与世隔绝，而是保持信仰的纯洁。"亲爱的弟兄啊，我们既有这等应许，就当洁净自己，除去身体、灵魂一切的污秽，敬畏神，得以成圣"（7:1）。

第7章保罗为哥林多人的悔改而喜乐——"依着神的意思忧愁，就生出没有后悔的懊悔来，以致得救"（7:10）。真正的悔改不是自怜，是生命的转向。`,
    content_en: `"If any man be in Christ, he is a new creature: old things are passed away; behold, all things are become new" (5:17) -- one of 2 Corinthians' most famous verses. The new creature has a new mission: God "hath given to us the ministry of reconciliation" (5:18). Every Christian is an "ambassador for Christ" (5:20).

Paul urges believers to live in holiness: "Be ye not unequally yoked together with unbelievers" (6:14). This is not isolation from the world but preservation of faith's purity. "Having therefore these promises, dearly beloved, let us cleanse ourselves from all filthiness of the flesh and spirit, perfecting holiness in the fear of God" (7:1).

In chapter 7 Paul rejoices over the Corinthians' repentance -- "Godly sorrow worketh repentance to salvation not to be repented of" (7:10). True repentance is not self-pity but a turning of life.`,
  },
  {
    title_zh: `三、甘心乐意的奉献（8-9章）`,
    title_en: `III. Cheerful and Generous Giving (Ch. 8-9)`,
    content_zh: `第8-9章是圣经中关于奉献最完整的教导。保罗以马其顿教会为榜样——他们在极穷之间仍格外喜乐，甘心乐意地捐助（8:2-3）。奉献的根基不是富足，而是恩典。

核心原则是："各人要随本心所酌定的，不要作难，不要勉强，因为捐得乐意的人是神所喜爱的"（9:7）。奉献不是律法的要求，而是恩典的回应。当我们认识到基督"本来富足，却为你们成了贫穷，叫你们因他的贫穷，可以成为富足"（8:9），奉献就成为自然的感恩行动。

保罗应许："神能将各样的恩惠多多地加给你们，使你们凡事常常充足，能多行各样善事"（9:8）。慷慨不会使人贫穷，因为神是一切恩惠的源头。`,
    content_en: `Chapters 8-9 contain the Bible's most complete teaching on giving. Paul holds up the Macedonian churches as an example -- in deep poverty they overflowed with joy and gave willingly (8:2-3). The foundation of giving is not wealth but grace.

The core principle: "Every man according as he purposeth in his heart, so let him give; not grudgingly, or of necessity: for God loveth a cheerful giver" (9:7). Giving is not a legal requirement but a response to grace. When we recognize that Christ "though he was rich, yet for your sakes he became poor, that ye through his poverty might be rich" (8:9), giving becomes a natural act of gratitude.

Paul promises: "God is able to make all grace abound toward you; that ye, always having all sufficiency in all things, may abound to every good work" (9:8). Generosity does not impoverish, for God is the source of all grace.`,
  },
  {
    title_zh: `四、保罗的使徒权柄与十字架的大能（10-13章）`,
    title_en: `IV. Paul's Apostolic Authority and the Power of the Cross (Ch. 10-13)`,
    content_zh: `哥林多后书最后四章是保罗最激烈的自我辩护。假使徒质疑他的权柄，他却以软弱为夸口。"他对我说：'我的恩典够你用的，因为我的能力是在人的软弱上显得完全。'"（12:9）这句话颠覆了世界的价值观。

保罗的"愚妄自夸"（11章）以反讽方式揭露假使徒的虚伪。他列举受苦经历——被打、被石头打、遭船难、受饥渴——这些才是真使徒的凭据。被提到第三层天的奥秘经历（12:2-4），他不以为荣；身上的刺，他反以为神的恩典。

最后的劝勉极其严肃："你们总要自己省察有信心没有，也要自己试验"（13:5）。真信仰不在口头，在于生命中有基督的实际。`,
    content_en: `The final four chapters contain Paul's most intense self-defense. False apostles questioned his authority, yet he boasts in weakness. "He said unto me, My grace is sufficient for thee: for my strength is made perfect in weakness" (12:9). This overturns the world's values.

Paul's "foolish boasting" (ch. 11) ironically exposes false apostles' hypocrisy. He lists his sufferings -- beatings, stoning, shipwreck, hunger and thirst -- these are the true marks of an apostle. The mystery of being caught up to the third heaven (12:2-4) he does not glory in; the thorn in the flesh he counts as God's grace.

The final exhortation is sobering: "Examine yourselves, whether ye be in the faith; prove your own selves" (13:5). True faith is not in words but in the reality of Christ living in us.`,
  },
]

const overview = {
  zh: `哥林多后书（13章）是保罗最私密、最情感化的书信（约公元55-56年）。保罗在其中辩护自己的使徒职分，揭露假教师，并最深刻地阐述了十字架的神学——神的能力在人的软弱上显得完全。

这封信的核心悖论是：真正的属灵权柄不在于强大的外表，而在于甘愿为基督受苦的软弱。"瓦器里的宝贝"（4:7）和"我什么时候软弱，什么时候就刚强了"（12:10）是基督教最独特的力量观。`,
  en: `2 Corinthians (13 chapters) is Paul's most personal, emotional letter (c. AD 55–56). Paul defends his apostleship, exposes false teachers, and profoundly articulates cross theology — God's power made perfect in weakness.

The letter's core paradox: true spiritual authority lies not in outward strength but in willingness to suffer for Christ. "Treasure in earthen vessels" (4:7) and "when I am weak, then am I strong" (12:10) represent Christianity's most distinctive view of power.`,
};

const outline = [
  ["1-2章", "患难中的安慰与赦免", "Ch. 1–2", "Comfort in Affliction; Forgiveness"],
  ["3-5章", "新约的职事与永恒盼望", "Ch. 3–5", "New Covenant Ministry; Eternal Hope"],
  ["6-7章", "分别为圣与和好", "Ch. 6–7", "Separation and Reconciliation"],
  ["8-9章", "捐献的原则", "Ch. 8–9", "Principles of Giving"],
  ["10-13章", "使徒权柄与软弱中的刚强", "Ch. 10–13", "Apostolic Authority; Strength in Weakness"],
];

const keyVerse = {
  zh: `"他对我说："我的恩典够你用的，因为我的能力是在人的软弱上显得完全。"所以，我更喜欢夸自己的软弱，好叫基督的能力覆庇我。"（哥林多后书 12:9）`,
  en: `"And he said unto me, My grace is sufficient for thee: for my strength is made perfect in weakness. Most gladly therefore will I rather glory in my infirmities, that the power of Christ may rest upon me." (2 Corinthians 12:9)`,
};

const info = { nameZh: `哥林多后书`, nameEn: `2 Corinthians`, author: `使徒保罗`, date: `约公元55-56年`, chapters: `13章`, backHref: `/new-testament/pauline`, backLabel: `保罗书信`, bibleId: `2CO` };

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