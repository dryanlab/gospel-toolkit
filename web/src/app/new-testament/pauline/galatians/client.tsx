'use client';
import Link from 'next/link';
import SpeakButton from '@/components/SpeakButton';
import { useState } from 'react';

const sections = [
  {
    title_zh: `一、惟独信心：保罗的护道（1-2章）`,
    title_en: `I. Faith Alone: Paul's Defense (Ch. 1-2)`,
    content_zh: `加拉太书以保罗最激烈的开篇开始——其他书信都有感恩的话，加拉太书没有。保罗直接斥责："我希奇你们这么快离开那借着基督之恩召你们的，去从别的福音。那并不是福音，不过有些人搅扰你们，要把基督的福音更改了"（1:6-7）。他甚至说"若有人传福音给你们，与你们所领受的不同，他就应当被咒诅"（1:9）——保罗重复了两遍，可见事态的严重。在恩典之上加人的功劳，不是"更完整的福音"，而是"别的福音"——根本不是福音。

保罗用自传来证明他的福音不是从人领受的："弟兄们，我告诉你们，我素来所传的福音不是出于人的意思。因为我不是从人领受的，也不是人教导我的，乃是从耶稣基督启示来的"（1:11-12）。他曾是极端的犹太教徒，比同辈更热心逼迫教会——直到神把他的儿子"启示在我心里"（1:16）。归信后他没有上耶路撒冷去向使徒学习，而是到阿拉伯去——他的福音直接来自基督的启示。

第2章安提阿对抗彼得的事件（2:11-14）是全书最戏剧性的场面。彼得原先与外邦人一同吃饭，但"从雅各那里来的人"到了以后，他因怕割礼派就退去、与外邦人隔开。保罗"当面抵挡他，因他有可责之处"（2:11）。即使是彼得这样的大使徒，在福音真理面前也没有豁免权。职位高不能使错误变成正确——这是改革宗"唯独圣经"原则的实践典范。

"我已经与基督同钉十字架，现在活着的不再是我，乃是基督在我里面活着；并且我如今在肉身活着，是因信神的儿子而活；他是爱我，为我舍己"（2:20）——这是加拉太书的心脏，也是基督徒身份认同的最深定义。"不再是我"——旧人已死；"基督在我里面活着"——新生命的来源不在自己里面，而在基督里面。`,
    content_en: `Galatians opens with Paul's most forceful beginning — while other epistles include thanksgiving, Galatians has none. Paul launches straight into rebuke: "I marvel that ye are so soon removed from him that called you into the grace of Christ unto another gospel: Which is not another; but there be some that trouble you, and would pervert the gospel of Christ" (1:6-7). He even says, "If any man preach any other gospel unto you than that ye have received, let him be accursed" (1:9) — Paul repeats this twice, showing the gravity of the situation. Adding human merit to grace is not a "more complete gospel" but "another gospel" — no gospel at all.

Paul uses autobiography to prove his gospel was not received from man: "But I certify you, brethren, that the gospel which was preached of me is not after man. For I neither received it of man, neither was I taught it, but by the revelation of Jesus Christ" (1:11-12). He was once an extreme Judaizer, persecuting the church more zealously than his peers — until God "reveal his Son in me" (1:16). After conversion he did not go to Jerusalem to learn from the apostles but to Arabia — his gospel came directly from Christ's revelation.

The Antioch confrontation with Peter in chapter 2 (2:11-14) is the book's most dramatic scene. Peter had been eating with Gentiles, but when "certain came from James," he withdrew and separated himself, fearing the circumcision party. Paul "withstood him to the face, because he was to be blamed" (2:11). Even an apostle like Peter has no immunity before gospel truth. High office cannot make error right — this is a practical demonstration of the Reformed principle of Sola Scriptura.

"I am crucified with Christ: nevertheless I live; yet not I, but Christ liveth in me: and the life which I now live in the flesh I live by the faith of the Son of God, who loved me, and gave himself for me" (2:20) — this is Galatians' heart and the deepest definition of Christian identity. "Not I" — the old self has died; "Christ liveth in me" — the source of new life is not within ourselves but in Christ.`,
  },
  {
    title_zh: `二、亚伯拉罕与律法：恩典的逻辑（3-4章）`,
    title_en: `II. Abraham and the Law: The Logic of Grace (Ch. 3-4)`,
    content_zh: `第3章保罗从经验和圣经两方面论证恩典。先问加拉太人："你们受了圣灵，是因行律法呢？是因听信福音呢？你们既靠圣灵入门，如今还靠肉身成全吗？"（3:2-3）——你们当初信主时圣灵降在你们身上，不是因为你们守了律法，而是因为你们信了福音。

然后引用亚伯拉罕为圣经依据："正如亚伯拉罕信神，这就算为他的义"（3:6，引创15:6）。亚伯拉罕因信称义，时间远在律法颁布之前430年（3:17）。应许之约在前，律法在后——后来的律法不能废除先前的约。恩典先于律法，恩典也优于律法。

那律法有什么用呢？"律法是为过犯添上的"（3:19）——律法使罪显明，让人认识自己的绝望处境。"这样，律法是我们训蒙的师傅，引我们到基督那里，使我们因信称义"（3:24）。"师傅"（paidagogos）在希腊-罗马社会是带孩子上学的仆人——律法不是目的地，而是引路人；基督才是目的地。"但这因信得救的理既然来到，我们从此就不在师傅的手下了"（3:25）。

3:28是教会历史上最革命性的宣言之一："并不分犹太人、希腊人，自主的、为奴的，或男或女，因为你们在基督耶稣里都成为一了。"在基督里，一切种族、社会地位和性别的隔墙都被拆毁——不是消除差异，而是在基督里成为一体。

第4章用两个母亲的寓意来总结——夏甲代表西奈山律法之约（产生奴隶），撒拉代表应许之约（产生自由人）。"弟兄们，我们是凭着应许作儿女，如同以撒一样"（4:28）。信徒"不是使女的儿女，乃是自主妇人的儿女"（4:31）——我们是自由的，不是奴仆。`,
    content_en: `In chapter 3, Paul argues from both experience and Scripture. He first asks the Galatians: "Received ye the Spirit by the works of the law, or by the hearing of faith? Are ye so foolish? having begun in the Spirit, are ye now made perfect by the flesh?" (3:2-3) — when you first believed, the Spirit came upon you not because you kept the law but because you believed the gospel.

Then he cites Abraham as scriptural proof: "Even as Abraham believed God, and it was accounted to him for righteousness" (3:6, citing Gen. 15:6). Abraham was justified by faith 430 years before the law was given (3:17). The covenant of promise came first, the law came later — the later law cannot annul the prior covenant. Grace precedes the law and surpasses it.

What then is the law's purpose? "It was added because of transgressions" (3:19) — the law makes sin manifest, revealing humanity's desperate condition. "Wherefore the law was our schoolmaster to bring us unto Christ, that we might be justified by faith" (3:24). "Schoolmaster" (paidagogos) in Greco-Roman society was a servant who escorted children to school — the law is not the destination but the guide; Christ is the destination. "But after that faith is come, we are no longer under a schoolmaster" (3:25).

3:28 is one of church history's most revolutionary declarations: "There is neither Jew nor Greek, there is neither bond nor free, there is neither male nor female: for ye are all one in Christ Jesus." In Christ, all walls of race, social status, and gender are demolished — not eliminating differences but becoming one body in Christ.

Chapter 4 summarizes with the allegory of two mothers — Hagar represents the Sinai law covenant (producing slaves), Sarah represents the covenant of promise (producing free people). "Now we, brethren, as Isaac was, are the children of promise" (4:28). Believers are "not children of the bondwoman, but of the free" (4:31) — we are free, not enslaved.`,
  },
  {
    title_zh: `三、基督的自由与圣灵的果子（5:1-6:10）`,
    title_en: `III. Freedom in Christ and the Fruit of the Spirit (5:1-6:10)`,
    content_zh: `"基督释放了我们，叫我们得以自由。所以要站立得稳，不要再被奴仆的轭挟制"（5:1）——这是全书的实践高峰。但保罗立刻澄清自由不是放纵："弟兄们，你们蒙召是要得自由，只是不可将你们的自由当作放纵情欲的机会，总要用爱心互相服事"（5:13）。基督徒的自由有两个方向：向上，从律法的咒诅中释放；向前，进入爱心服事的生活。

然后保罗描绘了基督徒内心的争战："情欲和圣灵相争，圣灵和情欲相争，这两个是彼此相敌"（5:17）。他列出"情欲的事"——奸淫、污秽、邪荡、拜偶像、邪术、仇恨、争竞、嫉妒……（5:19-21），又列出圣灵的果子："仁爱、喜乐、和平、忍耐、恩慈、良善、信实、温柔、节制"（5:22-23）。注意是"果子"（单数）不是"果子们"——九种品质是同一个圣灵结出的一个整体的果子，不可分割。这些不是靠人努力修炼出来的美德，而是圣灵内住的自然结果——如同树结果子，不是果子自己长出来的，而是树的生命使然。

6:1-10的实践教导包括：温柔地挽回犯了过错的人（6:1）、互相担当重担（6:2）、在供给教导的人一切需用上有份（6:6）。"人种的是什么，收的也是什么。顺着情欲撒种的，必从情欲收败坏；顺着圣灵撒种的，必从圣灵收永生"（6:7-8）。"我们行善，不可丧志；若不灰心，到了时候就要收成"（6:9）。`,
    content_en: `"Stand fast therefore in the liberty wherewith Christ hath made us free, and be not entangled again with the yoke of bondage" (5:1) — this is the book's practical climax. But Paul immediately clarifies that freedom is not license: "For, brethren, ye have been called unto liberty; only use not liberty for an occasion to the flesh, but by love serve one another" (5:13). Christian freedom has two directions: upward, release from the law's curse; forward, into a life of loving service.

Paul then describes the Christian's inner battle: "For the flesh lusteth against the Spirit, and the Spirit against the flesh: and these are contrary the one to the other" (5:17). He lists "the works of the flesh" — adultery, fornication, uncleanness, idolatry, witchcraft, hatred, strife, jealousy... (5:19-21), then the fruit of the Spirit: "love, joy, peace, longsuffering, gentleness, goodness, faith, meekness, temperance" (5:22-23). Note "fruit" (singular) not "fruits" — the nine qualities are one unified fruit produced by the one Spirit, inseparable. These are not virtues cultivated by human effort but the natural result of the Spirit's indwelling — as a tree bears fruit not by the fruit's own exertion but by the tree's life within.

The practical teaching of 6:1-10 includes: gently restoring those caught in sin (6:1), bearing one another's burdens (6:2), sharing with those who teach in all good things (6:6). "Be not deceived; God is not mocked: for whatsoever a man soweth, that shall he also reap. For he that soweth to his flesh shall of the flesh reap corruption; but he that soweth to the Spirit shall of the Spirit reap life everlasting" (6:7-8). "And let us not be weary in well doing: for in due season we shall reap, if we faint not" (6:9).`,
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