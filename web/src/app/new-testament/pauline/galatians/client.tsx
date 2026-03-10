'use client';
import Link from 'next/link';
import SpeakButton from '@/components/SpeakButton';
import { useState } from 'react';

const sections = [
  {
    title_zh: `一、惟独信心：保罗的护道（1-2章）`,
    title_en: `I. Faith Alone: Paul's Defense (Ch. 1-2)`,
    content_zh: `加拉太书以保罗最激烈的开篇之一开始——没有通常的感谢，而是立刻斥责："我希奇你们这么快离开那借着基督之恩召你们的，去从别的福音"（1:6）。"别的福音"根本不是福音，因为它在恩典之上加了人的功劳。

保罗的权柄来自启示，不来自人（1:11-12）。他的归信历史证明他的福音不是从人领受的。安提阿对抗彼得的事件（2:11-14）是全书最戏剧性的场面——保罗当面抵挡彼得，因为彼得的行为与福音真理不合。职位高不能使错误变成正确。

"我已经与基督同钉十字架，现在活着的不再是我，乃是基督在我里面活着"（2:20）——这是加拉太书的心脏，也是基督徒身份认同的最深定义。`,
    content_en: `Galatians opens with one of Paul's most forceful beginnings -- no usual thanksgiving but immediate rebuke: "I marvel that ye are so soon removed from him that called you into the grace of Christ unto another gospel" (1:6). The "other gospel" is no gospel at all, for it adds human merit to grace.

Paul's authority comes from revelation, not from men (1:11-12). His conversion history proves his gospel was not received from humans. The Antioch confrontation with Peter (2:11-14) is the book's most dramatic scene -- Paul opposed Peter to his face because Peter's conduct contradicted the truth of the gospel. High office cannot make error right.

"I am crucified with Christ: nevertheless I live; yet not I, but Christ liveth in me" (2:20) -- this is Galatians' heart and the deepest definition of Christian identity.`,
  },
  {
    title_zh: `二、亚伯拉罕与律法：恩典的逻辑（3-4章）`,
    title_en: `II. Abraham and the Law: The Logic of Grace (Ch. 3-4)`,
    content_zh: `保罗用亚伯拉罕来驳斥"因律法称义"的错误。亚伯拉罕因信称义（3:6），时间远在律法颁布之前（430年）。律法不能废除在前的约（3:17），恩典先于律法，恩典也优于律法。

"这样，律法是我们训蒙的师傅，引我们到基督那里，使我们因信称义"（3:24）。律法不是救恩之道，而是让人认识罪的镜子，引人来到基督面前。"但这因信得救的理既然来到，我们从此就不在师傅的手下了"（3:25）。

第4章用两个母亲的比喻来结束——夏甲（律法之约）与撒拉（恩典之约）。信徒"不是使女的儿女，乃是自主妇人的儿女"（4:31）——我们是自由的，不是奴仆。这自由不是放纵肉体的借口，而是圣灵工作的空间。`,
    content_en: `Paul uses Abraham to refute "justification by law." Abraham was justified by faith (3:6), four hundred and thirty years before the law was given. The law cannot annul the prior covenant (3:17); grace precedes the law and surpasses it.

"Wherefore the law was our schoolmaster to bring us unto Christ, that we might be justified by faith" (3:24). The law is not the way of salvation but a mirror revealing sin, directing us to Christ. "But after that faith is come, we are no longer under a schoolmaster" (3:25).

Chapter 4 concludes with the allegory of two mothers -- Hagar (covenant of law) and Sarah (covenant of grace). Believers are "not children of the bondwoman, but of the free" (4:31) -- we are free, not enslaved. This freedom is not license for the flesh but space for the Spirit to work.`,
  },
  {
    title_zh: `三、基督的自由与圣灵的果子（5:1-6:10）`,
    title_en: `III. Freedom in Christ and the Fruit of the Spirit (5:1-6:10)`,
    content_zh: `"基督释放了我们，叫我们得以自由，所以要站立得稳，不要再被奴仆的轭挟制"（5:1）——这是全书的实践命令。自由不是放纵，而是靠圣灵生活、用爱心服事彼此（5:13）。

肉体的情欲与圣灵的果子（5:19-23）形成鲜明对比。肉体结出的是败坏，圣灵结出的是"仁爱、喜乐、和平、忍耐、恩慈、良善、信实、温柔、节制"（5:22-23）。这些果子不靠努力获得，而是圣灵内住的自然结果。

"你们不要灰心行善，若不丧志，到了时候就要收成"（6:9）。加拉太书的实践部分不是律法主义，而是在圣灵里的自由生活——背负彼此的重担（6:2），在善事上"向众人作工，向信徒一家的人更当这样"（6:10）。`,
    content_en: `"Stand fast therefore in the liberty wherewith Christ hath made us free, and be not entangled again with the yoke of bondage" (5:1) -- this is the book's practical command. Freedom is not license but living by the Spirit and serving one another in love (5:13).

The works of the flesh and the fruit of the Spirit (5:19-23) form a stark contrast. Flesh produces corruption; the Spirit produces "love, joy, peace, longsuffering, gentleness, goodness, faith, meekness, temperance" (5:22-23). These fruits are not achieved by effort but are the natural result of the Spirit's indwelling.

"Let us not be weary in well doing: for in due season we shall reap, if we faint not" (6:9). Galatians' practical section is not legalism but free life in the Spirit -- bearing one another's burdens (6:2), doing good to all, "especially unto them who are of the household of faith" (6:10).`,
  },
  {
    title_zh: `四、十字架是唯一的夸口（6:11-18）`,
    title_en: `IV. The Cross Alone Is Our Boast (6:11-18)`,
    content_zh: `保罗亲自执笔（通常由他人代写），以大字写成结语——这显示了这段话的分量。假教师"要强迫你们受割礼，无非是怕自己为基督的十字架受逼迫"（6:12）。他们用割礼来自夸，用外在的记号来换取社会的接纳。

保罗的宣告与此截然不同："我断不以别的夸口，只夸我们主耶稣基督的十字架；因这十字架，就我而论，世界已经钉在十字架上了；就世界而论，我已经钉在十字架上了"（6:14）。十字架不只是救恩的记号，更是与世界彻底切割的界线。

"因为受割礼不受割礼都无关紧要，要紧的就是作新造的人"（6:15）——外在宗教仪式的有无不是关键，在基督里的新生命才是关键。这是加拉太书留给我们的最终总结，也是福音的精髓。`,
    content_en: `Paul writes the closing in his own hand (he normally dictated) in large letters -- showing the weight of these words. The false teachers compelled circumcision "only lest they should suffer persecution for the cross of Christ" (6:12). They boasted in circumcision to gain social acceptance through external signs.

Paul's declaration is entirely different: "God forbid that I should glory, save in the cross of our Lord Jesus Christ, by whom the world is crucified unto me, and I unto the world" (6:14). The cross is not merely the sign of salvation but the line of radical separation from the world.

"For in Christ Jesus neither circumcision availeth any thing, nor uncircumcision, but a new creature" (6:15) -- the presence or absence of external religious rites is not the issue; new life in Christ is. This is Galatians' final summary and the essence of the gospel.`,
  },
]

const overview = {
  zh: `加拉太书（6章）是保罗最激烈的书信（约公元49年），为因信称义的真理而战。加拉太教会受到犹太化教师的影响，要求外邦信徒受割礼守律法才能得救。保罗以严厉的语气驳斥这种"别的福音"，宣告唯独因信基督称义。全书分为三部分：个人辩护（1-2章）、神学论证（3-4章）、实践应用（5-6章）。"我已经与基督同钉十字架"（2:20）和"圣灵的果子"（5:22-23）是其中最著名的经文。`,
  en: `Galatians (6 chapters) is Paul's most forceful epistle (c. AD 49), battling for the truth of justification by faith. The Galatian churches had been influenced by Judaizers who demanded that Gentile believers be circumcised and keep the law for salvation. Paul vehemently refutes this 'other gospel,' declaring justification by faith in Christ alone. The book divides into three sections: personal defense (ch. 1-2), theological argument (ch. 3-4), and practical application (ch. 5-6). 'I am crucified with Christ' (2:20) and 'the fruit of the Spirit' (5:22-23) are its most famous verses.`,
};

const outline = [
  ["1章", `使徒的呼召与福音的纯正`, "Ch. 1", `Apostolic Calling and the Purity of the Gospel`],
  ["2章", `使徒权柄与称义的原则`, "Ch. 2", `Apostolic Authority and the Principle of Justification`],
  ["3章", `亚伯拉罕与律法的功用`, "Ch. 3", `Abraham and the Function of the Law`],
  ["4章", `儿子的名分与自由`, "Ch. 4", `Sonship and Freedom`],
  ["5章", `圣灵的自由与果子`, "Ch. 5", `Freedom and Fruit of the Spirit`],
  ["6章", `新造的人与十字架`, "Ch. 6", `The New Creature and the Cross`]
];

const keyVerse = {
  zh: `"基督释放了我们，叫我们得以自由。所以要站立得稳，不要再被奴仆的轭挟制。"（加拉太书 5:1）`,
  en: `"Stand fast therefore in the liberty wherewith Christ hath made us free, and be not entangled again with the yoke of bondage." (Galatians 5:1)`,
};

const info = { nameZh: `加拉太书`, nameEn: `Galatians`, author: `使徒保罗`, date: `约公元49年`, chapters: `6章`, backHref: `/new-testament/pauline`, backLabel: `保罗书信`, bibleId: `GAL` };

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