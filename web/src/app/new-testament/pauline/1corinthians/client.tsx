'use client';
import Link from 'next/link';
import SpeakButton from '@/components/SpeakButton';
import { useState } from 'react';

const sections = [
  {
    title_zh: `一、教会的纷争与十字架的智慧（1-4章）`,
    title_en: `I. Church Divisions and the Wisdom of the Cross (Ch. 1-4)`,
    content_zh: `哥林多教会的首要问题是分裂——"我是属保罗的、我是属亚波罗的、我是属矶法的"（1:12）。保罗的回应不是调解派系，而是指向十字架："十字架的道理，在那灭亡的人为愚拙；在我们得救的人，却为神的大能"（1:18）。

世人的智慧找不到神，因为"神的愚拙总比人智慧，神的软弱总比人强壮"（1:25）。哥林多人追求哲学辩才，保罗却只传"耶稣基督并他钉十字架"（2:2）。教会的根基只能是基督（3:11），不是任何人。

保罗自比为"基督的执事，为神奥秘事的管家"（4:1），不求人的夸奖，只求忠心。这是对所有教会领袖的提醒。`,
    content_en: `Corinth's foremost problem was division -- "I am of Paul; and I of Apollos; and I of Cephas" (1:12). Paul's response is not mediating factions but pointing to the cross: "The preaching of the cross is to them that perish foolishness; but unto us which are saved it is the power of God" (1:18).

Worldly wisdom cannot find God, for "the foolishness of God is wiser than men; and the weakness of God is stronger than men" (1:25). Corinthians pursued philosophical eloquence; Paul preached only "Jesus Christ, and him crucified" (2:2). The church's only foundation is Christ (3:11), not any man.

Paul calls himself "ministers of Christ, and stewards of the mysteries of God" (4:1), seeking not man's praise but faithfulness. This is a reminder for all church leaders.`,
  },
  {
    title_zh: `二、圣洁的生活与教会纪律（5-10章）`,
    title_en: `II. Holy Living and Church Discipline (Ch. 5-10)`,
    content_zh: `保罗处理了一系列实际问题：教会中的淫乱（5章）、弟兄之间的诉讼（6章）、婚姻问题（7章）、祭偶像之物（8-10章）。

核心原则是："岂不知你们的身子就是圣灵的殿吗？"（6:19）基督徒的身体属于主，不属于自己。"你们是重价买来的，所以要在你们的身子上荣耀神"（6:20）。

关于祭偶像之物（8-10章），保罗提出了"爱的自由"原则。我虽然有自由吃一切食物，但若使弟兄跌倒就不吃。"凡事都可行，但不都有益处；凡事都可行，但不都造就人"（10:23）。自由的目的是造就，不是自我满足。`,
    content_en: `Paul addresses a series of practical issues: sexual immorality in the church (ch. 5), lawsuits between believers (ch. 6), marriage questions (ch. 7), food offered to idols (ch. 8-10).

The core principle: "Know ye not that your body is the temple of the Holy Ghost?" (6:19). The Christian's body belongs to the Lord, not to oneself. "Ye are bought with a price: therefore glorify God in your body" (6:20).

Regarding food offered to idols (ch. 8-10), Paul introduces the principle of "love's freedom." Though free to eat all things, he would not eat if it caused a brother to stumble. "All things are lawful for me, but all things are not expedient: all things are lawful for me, but all things edify not" (10:23). Freedom's purpose is edification, not self-indulgence.`,
  },
  {
    title_zh: `三、敬拜秩序与属灵恩赐（11-14章）`,
    title_en: `III. Order of Worship and Spiritual Gifts (Ch. 11-14)`,
    content_zh: `保罗论述了敬拜聚会的秩序——主的晚餐（11:23-34）必须以自省和敬畏的心领受，不可随意。"因为人吃喝，若不分辨是主的身体，就是吃喝自己的罪了"（11:29）。

属灵恩赐（12章）是多样而合一的。"恩赐原有分别，圣灵却是一位"（12:4）。身体的比喻（12:12-27）教导：没有一个肢体可以对另一个说"我用不着你"。教会的合一不是整齐划一，而是各尽其职、彼此相顾。

第13章——"爱的颂歌"——夹在属灵恩赐的讨论中。"我若能说万人的方言，并天使的话语，却没有爱，我就成了鸣的锣、响的钹一般"（13:1）。"如今常存的有信，有望，有爱；这三样，其中最大的是爱"（13:13）。恩赐会过去，爱永远长存。`,
    content_en: `Paul addresses the order of worship -- the Lord's Supper (11:23-34) must be received with self-examination and reverence. "He that eateth and drinketh unworthily, eateth and drinketh damnation to himself, not discerning the Lord's body" (11:29).

Spiritual gifts (ch. 12) are diverse yet unified. "There are diversities of gifts, but the same Spirit" (12:4). The body metaphor (12:12-27) teaches: no member can say to another "I have no need of thee." The church's unity is not uniformity but each member functioning and caring for the others.

Chapter 13 -- the "hymn to love" -- is placed amid the gifts discussion. "Though I speak with the tongues of men and of angels, and have not charity, I am become as sounding brass, or a tinkling cymbal" (13:1). "Now abideth faith, hope, charity, these three; but the greatest of these is charity" (13:13). Gifts pass away; love endures forever.`,
  },
  {
    title_zh: `四、复活的盼望与最后的劝勉（15-16章）`,
    title_en: `IV. The Hope of Resurrection and Final Exhortations (Ch. 15-16)`,
    content_zh: `第15章是新约对复活最完整的教导。保罗以福音的事实开始——基督死了、埋了、复活了（15:3-4），有超过五百人亲眼见过（15:6）。"若基督没有复活，你们的信便是徒然"（15:17）。基督复活是整个信仰的基础。

"死人复活也是这样：所种的是必朽坏的，复活的是不朽坏的"（15:42）。复活身体的奥秘："所种的是血气的身体，复活的是灵性的身体"（15:44）。最后的胜利宣告："死啊！你得胜的权势在哪里？死啊！你的毒钩在哪里？"（15:55）

最后一章的实际劝勉——捐项的安排（16:1-4）和同工的推荐——提醒我们：伟大的神学必须落实在日常生活中。"你们务要警醒，在真道上站立得稳，要作大丈夫，要刚强"（16:13）。`,
    content_en: `Chapter 15 contains the New Testament's most complete teaching on resurrection. Paul begins with gospel facts -- Christ died, was buried, rose again (15:3-4), witnessed by over five hundred (15:6). "If Christ be not raised, your faith is vain" (15:17). Christ's resurrection is the entire foundation of faith.

"So also is the resurrection of the dead. It is sown in corruption; it is raised in incorruption" (15:42). The mystery of the resurrection body: "It is sown a natural body; it is raised a spiritual body" (15:44). The final cry of triumph: "O death, where is thy sting? O grave, where is thy victory?" (15:55).

The final chapter's practical exhortations -- the collection (16:1-4) and commendation of co-workers -- remind us: great theology must be lived out daily. "Watch ye, stand fast in the faith, quit you like men, be strong" (16:13).`,
  },
]

const overview = {
  zh: `哥林多前书（16章）是保罗写给一个问题重重的教会的信（约公元55年）。哥林多是繁华的商业城市，教会深受世俗文化影响——分裂、淫乱、诉讼、偶像崇拜。保罗逐一回应这些问题，同时教导了关于主的晚餐、属灵恩赐、爱和复活的深刻真理。这封信展示了福音如何应用于教会生活的每一个层面。第13章的"爱的颂歌"和第15章的复活教导是全书最著名的段落。`,
  en: `1 Corinthians (16 chapters) is Paul's letter to a deeply troubled church (c. AD 55). Corinth was a prosperous commercial city, and its church was heavily influenced by secular culture -- divisions, immorality, lawsuits, idolatry. Paul addresses each issue while teaching profound truths about the Lord's Supper, spiritual gifts, love, and resurrection. This letter demonstrates how the gospel applies to every dimension of church life. The 'hymn to love' in chapter 13 and the resurrection teaching in chapter 15 are the book's most famous passages.`,
};

const outline = [
  ["1-4章", `分裂与十字架的智慧`, "Ch. 1-4", `Divisions and the Wisdom of the Cross`],
  ["5-6章", `教会纪律与圣洁`, "Ch. 5-6", `Church Discipline and Holiness`],
  ["7章", `婚姻与独身`, "Ch. 7", `Marriage and Celibacy`],
  ["8-10章", `祭偶像之物与自由`, "Ch. 8-10", `Food Offered to Idols and Freedom`],
  ["11章", `敬拜秩序与主的晚餐`, "Ch. 11", `Order of Worship and the Lord's Supper`],
  ["12-14章", `属灵恩赐与爱的颂歌`, "Ch. 12-14", `Spiritual Gifts and the Hymn to Love`],
  ["15章", `复活的盼望`, "Ch. 15", `The Hope of Resurrection`],
  ["16章", `捐项与问安`, "Ch. 16", `The Collection and Greetings`]
];

const keyVerse = {
  zh: `"如今常存的有信，有望，有爱，这三样，其中最大的是爱。"（哥林多前书 13:13）`,
  en: `"And now abideth faith, hope, charity, these three; but the greatest of these is charity." (1 Corinthians 13:13)`,
};

const info = { nameZh: `哥林多前书`, nameEn: `1 Corinthians`, author: `使徒保罗`, date: `约公元55年`, chapters: `16章`, backHref: `/new-testament/pauline`, backLabel: `保罗书信`, bibleId: `1CO` };

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