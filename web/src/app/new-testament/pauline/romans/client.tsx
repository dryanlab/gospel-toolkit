'use client';
import Link from 'next/link';
import SpeakButton from '@/components/SpeakButton';
import { useState } from 'react';

const sections = [
  {
    title_zh: `一、人类的罪与神的义（1-4章）`,
    title_en: `I. Human Sin and God's Righteousness (Ch. 1-4)`,
    content_zh: `罗马书以保罗最系统的神学论述开始。"义人必因信得生"（1:17）是全书的钥节。保罗首先证明全人类都在罪中——外邦人虽有良心的见证却故意犯罪（1:18-32），犹太人虽有律法却同样违犯（2:17-29）。"没有义人，连一个也没有"（3:10）——这是全人类的光景。

在彻底的绝望中福音的亮光出现："如今，神的义在律法以外已经显明出来……就是神的义，因信耶稣基督加给一切相信的人"（3:21-22）。称义不是靠行为赚取的，而是白白的恩典（3:24）。亚伯拉罕是信心的榜样——他"因信称义"远在律法颁布之前（4:3）。`,
    content_en: `Romans opens with Paul's most systematic theological argument. "The just shall live by faith" (1:17) is the key verse. Paul first proves all humanity is under sin -- Gentiles sinned despite the witness of conscience (1:18-32), Jews sinned despite possessing the law (2:17-29). "There is none righteous, no, not one" (3:10) -- this is the human condition.

In utter despair the gospel light appears: "Now the righteousness of God without the law is manifested... the righteousness of God which is by faith of Jesus Christ unto all and upon all them that believe" (3:21-22). Justification is not earned by works but is a free gift of grace (3:24). Abraham is the model of faith -- he was "justified by faith" long before the law was given (4:3).`,
  },
  {
    title_zh: `二、在基督里的新生命（5-8章）`,
    title_en: `II. New Life in Christ (Ch. 5-8)`,
    content_zh: `"我们既因信称义，就藉着我们的主耶稣基督得与神相和"（5:1）。称义带来和平——与神和好的平安。亚当与基督的对比（5:12-21）是保罗神学的核心：在亚当里众人都死了，在基督里众人都活了。

第6-7章回答一个关键问题：既然恩典够用，我们可以继续犯罪吗？"断乎不可！"（6:2）。受洗归入基督就是与他同死同活——旧人被钉了，新人活着。保罗坦诚自己的挣扎："立志为善由得我，只是行出来由不得我"（7:18）。这是每个信徒的真实经历。

第8章是罗马书的高峰——"如今，那些在基督耶稣里的就不定罪了"（8:1）。圣灵的内住、得儿子的名分、万事互相效力、基督的爱——没有什么能使我们与基督的爱隔绝（8:38-39）。这是全圣经最令人安慰的应许。`,
    content_en: `"Being justified by faith, we have peace with God through our Lord Jesus Christ" (5:1). Justification brings peace -- reconciliation with God. The Adam-Christ contrast (5:12-21) is central to Paul's theology: in Adam all die, in Christ all are made alive.

Chapters 6-7 answer a critical question: if grace abounds, may we continue in sin? "God forbid" (6:2). Baptism into Christ means dying and rising with Him -- the old man is crucified, the new lives. Paul honestly confesses his struggle: "To will is present with me; but how to perform that which is good I find not" (7:18). This is every believer's true experience.

Chapter 8 is Romans' summit -- "There is therefore now no condemnation to them which are in Christ Jesus" (8:1). The Spirit's indwelling, adoption as sons, all things working together for good, Christ's love -- nothing can separate us from the love of Christ (8:38-39). This is Scripture's most comforting promise.`,
  },
  {
    title_zh: `三、以色列的过去、现在与将来（9-11章）`,
    title_en: `III. Israel's Past, Present, and Future (Ch. 9-11)`,
    content_zh: `罗马书9-11章是保罗对以色列命运的沉痛思考。他为同胞"心里伤痛，是大有忧愁"（9:2），甚至愿意自己被诅咒来换取他们的得救（9:3）。

神的拣选是主权的——"要怜悯谁就怜悯谁"（9:18）。但以色列被暂时丢弃不是终局："等到外邦人的数目添满了，于是以色列全家都要得救"（11:25-26）。神的计划比人能理解的更大。

保罗以赞美结束这段沉思："深哉，神丰富的智慧和知识！他的判断何其难测！他的踪迹何其难寻！"（11:33）这不是回避问题，而是在神的奥秘面前谦卑敬拜。`,
    content_en: `Romans 9-11 is Paul's anguished reflection on Israel's fate. He has "great heaviness and continual sorrow" for his kinsmen (9:2), even wishing himself accursed for their sake (9:3).

God's election is sovereign -- "He will have mercy on whom he will have mercy" (9:18). But Israel's present rejection is not final: "when the fulness of the Gentiles be come in... all Israel shall be saved" (11:25-26). God's plan is greater than human comprehension.

Paul concludes with worship: "O the depth of the riches both of the wisdom and knowledge of God! how unsearchable are his judgments, and his ways past finding out!" (11:33). This is not evasion but humble worship before divine mystery.`,
  },
  {
    title_zh: `四、因信称义的生活实践（12-16章）`,
    title_en: `IV. Living Out Justification by Faith (Ch. 12-16)`,
    content_zh: `"所以弟兄们，我以神的慈悲劝你们，将身体献上，当作活祭"（12:1）——这个"所以"连接了前11章的教义与实践。因信称义不是抽象的神学，而是整个生活的改变。

保罗论述了基督徒与政府的关系（13章）、良心自由与彼此接纳（14章）、犹太人与外邦人在基督里的合一（15章）。在强者与弱者的争论中，原则是爱："我们坚固的人应该担代不坚固人的软弱，不求自己的喜悦"（15:1）。

16章的问安名单展现了初代教会的多元面貌——男女、犹太人外邦人、奴隶自由人，都在基督里成为一家。"愿赐平安的神快快将撒但践踏在你们脚下"（16:20）——胜利是确定的。`,
    content_en: `"I beseech you therefore, brethren, by the mercies of God, that ye present your bodies a living sacrifice" (12:1) -- this "therefore" connects doctrine (ch. 1-11) to practice. Justification by faith is not abstract theology but the transformation of all of life.

Paul addresses Christians and government (ch. 13), freedom of conscience and mutual acceptance (ch. 14), and Jewish-Gentile unity in Christ (ch. 15). In the dispute between strong and weak, the principle is love: "We then that are strong ought to bear the infirmities of the weak, and not to please ourselves" (15:1).

The greetings in chapter 16 reveal the early church's diversity -- men and women, Jews and Gentiles, slaves and free, all one family in Christ. "The God of peace shall bruise Satan under your feet shortly" (16:20) -- victory is certain.`,
  },
]

const overview = {
  zh: `罗马书（16章）是保罗写给罗马教会的书信（约公元57年），公认为圣经中最系统的神学著作。马丁路德在罗马书中发现了"因信称义"的真理，引发了十六世纪的宗教改革；约翰卫斯理读罗马书时心里"奇异地暖热起来"，成为循道宗运动的起点。

全书论证的逻辑链条：所有人都是罪人（1-3章）→ 称义唯靠信心（3-5章）→ 圣化：在基督里的新生命（6-8章）→ 神的主权与以色列的将来（9-11章）→ 圣徒生活的实践（12-16章）。`,
  en: `Romans (16 chapters) is Paul's letter to the Roman church (c. AD 57), widely recognized as Scripture's most systematic theological work. Martin Luther discovered "justification by faith" in Romans, sparking the sixteenth-century Reformation; John Wesley's heart was "strangely warmed" reading Romans, launching the Methodist movement.

The book's logical chain: all are sinners (ch. 1–3) → justification by faith alone (ch. 3–5) → sanctification: new life in Christ (ch. 6–8) → God's sovereignty and Israel's future (ch. 9–11) → the saints' practical life (ch. 12–16).`,
};

const outline = [
  ["1:1-17", "福音的主题", "1:1–17", "Theme of the Gospel"],
  ["1:18-3:20", "全人类的罪与审判", "1:18–3:20", "Sin and Judgment of All Mankind"],
  ["3:21-5:21", "因信称义", "3:21–5:21", "Justification by Faith"],
  ["6-8章", "圣化与在基督里的生命", "Ch. 6–8", "Sanctification and Life in Christ"],
  ["9-11章", "以色列与神的主权", "Ch. 9–11", "Israel and God's Sovereignty"],
  ["12-16章", "圣徒的实践生活", "Ch. 12–16", "Practical Life of the Saints"],
];

const keyVerse = {
  zh: `"如今，那些在基督耶稣里的就不定罪了。"（罗马书 8:1）`,
  en: `"There is therefore now no condemnation to them which are in Christ Jesus." (Romans 8:1)`,
};

const info = { nameZh: `罗马书`, nameEn: `Romans`, author: `使徒保罗`, date: `约公元57年`, chapters: `16章`, backHref: `/new-testament/pauline`, backLabel: `保罗书信`, bibleId: `ROM` };

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