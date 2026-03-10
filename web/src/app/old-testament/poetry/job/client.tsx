'use client';
import Link from 'next/link';
import SpeakButton from '@/components/SpeakButton';
import { useState } from 'react';

const sections = [
  {
    title_zh: `一、天上的法庭与地上的苦难（1-2章）`,
    title_en: `I. The Heavenly Court and Earthly Suffering (Ch. 1-2)`,
    content_zh: `约伯记以一个震撼人心的序幕开始——天上的法庭。撒但在神面前控告约伯："约伯敬畏神岂是无故呢？"（1:9）他的论点是：约伯爱神是因为有回报。神允许撒但试验约伯，以此驳斥这个控告。

在极短的时间里，约伯失去了财产、儿女，最后连健康也失去了（1-2章）。他的妻子建议他"弃掉神，死了吧"（2:9）。约伯的回应是全书最有力的信仰宣告之一："我们从神手里得福，难道不也受祸吗？"（2:10）"赏赐的是耶和华，收取的也是耶和华。耶和华的名是应当称颂的"（1:21）。

这个序幕让读者看见了约伯所看不见的——他的苦难不是神的惩罚，而是神信任他的证明。苦难中最难的，是不知道原因。`,
    content_en: `Job opens with a stunning prologue -- the heavenly court. Satan accused Job before God: "Doth Job fear God for nought?" (1:9). His argument: Job loves God for profit. God permitted Satan to test Job to refute this accusation.

In rapid succession Job lost his possessions, children, and finally his health (ch. 1-2). His wife urged him to "curse God, and die" (2:9). Job's response is one of the book's most powerful confessions: "What? shall we receive good at the hand of God, and shall we not receive evil?" (2:10). "The LORD gave, and the LORD hath taken away; blessed be the name of the LORD" (1:21).

This prologue lets readers see what Job could not see -- his suffering was not God's punishment but God's trust in him. The hardest part of suffering is not knowing the reason.`,
  },
  {
    title_zh: `二、三个朋友的辩论：因果报应的神学（3-31章）`,
    title_en: `II. The Three Friends' Debate: Theology of Retribution (Ch. 3-31)`,
    content_zh: `约伯的三个朋友——以利法、比勒达、琐法——来安慰他。他们起初七天默默地陪伴（2:13），这是他们做得最好的事。但开口之后，他们的"安慰"成了更沉重的重担。

三人的神学可以总结为一句话：受苦是因为犯罪，受苦是神的惩罚。"谁无辜而灭亡呢？正直人在哪里被剪除呢？"（4:7）——意思很清楚：约伯一定是犯了什么罪。

约伯拒绝接受这个简单化的因果论。他承认自己不是完全的，但他坚持自己的遭遇与他的罪不相称。他渴望能与神面对面辩论（13:3）："我必在他面前陈明我的道"（13:15）——在极大的痛苦中，他仍然信任神比信任朋友更多。

朋友们的错误不在于他们相信神的公义，而在于他们把神的公义简化为人能理解的算法，以为苦难与罪恶必然正比。神最后称赞约伯的质疑而责备三个朋友（42:7）——直率的挣扎比虚假的正统更蒙神悦纳。`,
    content_en: `Job's three friends -- Eliphaz, Bildad, and Zophar -- came to comfort him. Their first seven days of silent presence (2:13) was the best thing they did. But when they opened their mouths, their "comfort" became a heavier burden.

Their theology can be summarized in one sentence: suffering is caused by sin; suffering is God's punishment. "Who ever perished, being innocent? or where were the righteous cut off?" (4:7) -- the implication is clear: Job must have sinned.

Job refused to accept this simplistic causation. He acknowledged he was not perfect, but insisted his suffering was disproportionate to his sin. He longed to argue his case before God directly (13:3): "Though he slay me, yet will I trust in him: but I will maintain mine own ways before him" (13:15) -- even in great pain, he trusted God more than his friends.

The friends' error was not believing in God's justice but reducing it to a human-comprehensible algorithm, assuming suffering and sin must be proportional. God ultimately commended Job's questioning and rebuked the three friends (42:7) -- honest wrestling is more acceptable to God than false orthodoxy.`,
  },
  {
    title_zh: `三、以利户的挑战：苦难是神的教导（32-37章）`,
    title_en: `III. Elihu's Challenge: Suffering as God's Instruction (Ch. 32-37)`,
    content_zh: `在三个朋友辩论结束后，年轻的以利户出场。他等到长者说完才开口——这本身就是智慧。他不同意朋友们的简单因果论，也不同意约伯的自义。

以利户指出一个关键："神借着困苦救拔困苦人，趁他们受欺压开通他们的耳朵"（36:15）。苦难不一定是惩罚，可能是神在预备人听他的声音。这比三个朋友的神学更接近真理。

然而以利户也有不足——他用人的理性分析神的作为，而没有等候神自己的启示。他的演讲为耶和华的亲自显现做了铺垫。最好的神学论证也不能代替神亲自说话。约伯需要的不是更好的解释，而是遇见神本身。`,
    content_en: `After the three friends' debate ends, young Elihu steps forward. He waited until the elders finished before speaking -- in itself a mark of wisdom. He disagreed with both the friends' simplistic retribution theology and Job's self-righteousness.

Elihu raised a key insight: "He delivereth the poor in his affliction, and openeth their ears in oppression" (36:15). Suffering is not necessarily punishment; it may be God preparing a person to hear His voice. This is closer to the truth than the three friends' theology.

Yet Elihu was also insufficient -- he analyzed God's ways with human reason rather than waiting for God's own revelation. His speeches prepare the way for the LORD's personal appearance. Even the best theological argument cannot substitute for God speaking in person. What Job needed was not a better explanation but an encounter with God Himself.`,
  },
  {
    title_zh: `四、耶和华从旋风中说话（38-42章）`,
    title_en: `IV. The LORD Speaks from the Whirlwind (Ch. 38-42)`,
    content_zh: `在以利户的演讲之后，耶和华亲自从旋风中向约伯说话。神没有回答"你为什么受苦"的问题——他问了一连串关于创造的问题："我立大地根基的时候，你在哪里呢？"（38:4）"你能系住昴星的结吗？能解开参星的带吗？"（38:31）

神的回应本质上是说：约伯，你连自然界都无法理解和掌控，你怎么能要求理解我治理万有的方式？这不是回避问题，而是将问题提升到更高的层次。

约伯的回应是敬拜："我从前风闻有你，现在亲眼看见你"（42:5）。约伯没有得到苦难的答案，但他得到了比答案更好的东西——他遇见了神。神最终称赞约伯（42:7），双倍归还他所失去的（42:10-12）。然而书中真正的祝福不是加倍的财富，而是那句话："现在亲眼看见你"。`,
    content_en: `After Elihu's speeches, the LORD personally speaks to Job from the whirlwind. God does not answer "why do you suffer" -- He asks a series of questions about creation: "Where wast thou when I laid the foundations of the earth?" (38:4). "Canst thou bind the sweet influences of Pleiades, or loose the bands of Orion?" (38:31).

God's response essentially says: Job, you cannot understand or control even the natural world; how can you demand to understand My governance of all things? This is not evading the question but elevating it to a higher plane.

Job's response is worship: "I have heard of thee by the hearing of the ear: but now mine eye seeth thee" (42:5). Job received no answer to his suffering, but something better -- he encountered God. God ultimately commended Job (42:7) and restored double what he had lost (42:10-12). Yet the book's true blessing is not doubled wealth but those words: "now mine eye seeth thee."`,
  },
  {
    title_zh: `五、约伯记的神学遗产：苦难中的信心`,
    title_en: `V. Job's Theological Legacy: Faith in Suffering`,
    content_zh: `约伯记的核心教导不是"为什么好人受苦"的答案——因为神从未给出这个答案。它教导的是：在没有答案的时候，信心仍然可以站立。

约伯在苦难最深处说出了旧约最伟大的信仰告白之一："我知道我的救赎主活着，末了必站立在地上……我必亲眼见他"（19:25-27）。他不理解苦难的原因，但他确信一件事——神活着，最终会为他辩白。

约伯记也挑战了"成功神学"的根基。撒但的控告——"约伯敬畏神岂是无故呢？"——代表了世界对宗教的看法：信仰不过是交换条件。约伯的坚持证明：真信心不是交易，而是在失去一切时仍然说"耶和华的名是应当称颂的"。这样的信心，比任何神学论证都更有力地见证了神的荣耀。`,
    content_en: `Job's core teaching is not an answer to "why do good people suffer" -- for God never gives that answer. It teaches that in the absence of answers, faith can still stand.

In the depths of suffering, Job uttered one of the Old Testament's greatest confessions: "I know that my redeemer liveth, and that he shall stand at the latter day upon the earth... yet in my flesh shall I see God" (19:25-27). He did not understand the reason for his suffering, but was certain of one thing -- God lives and would ultimately vindicate him.

Job also challenges the foundation of prosperity theology. Satan's accusation -- "Doth Job fear God for nought?" -- represents the world's view of religion: faith is merely conditional exchange. Job's endurance proves: true faith is not a transaction but saying "blessed be the name of the LORD" even when everything is lost. Such faith witnesses to God's glory more powerfully than any theological argument.`,
  },
]

const overview = {
  zh: `约伯记是圣经中最古老的书卷之一（可能早于摩西五经），也是人类文学史上最深刻的苦难神学作品。全书42章以散文序幕（1-2章）和尾声（42:7-17）包裹诗体辩论（3-42:6），探讨一个永恒的问题：义人为何受苦？

约伯记不是给出一个简单答案，而是将问题带到神面前。三个朋友代表传统的报应神学（因果报应），约伯代表真实的信心挣扎（质疑却不离弃），最终神亲自从旋风中启示自己——不是解释苦难的原因，而是启示自己的伟大。约伯记教导我们：在苦难中，我们需要的不是答案，而是神自己。`,
  en: `Job is one of the oldest books of the Bible (possibly predating the Pentateuch) and the most profound work on the theology of suffering in human literary history. Its 42 chapters wrap poetic dialogues (ch. 3–42:6) between a prose prologue (ch. 1–2) and epilogue (42:7–17), exploring an eternal question: Why do the righteous suffer?

Job does not offer a simple answer but brings the question before God. The three friends represent traditional retribution theology; Job represents authentic faith struggling (questioning yet not abandoning); finally God reveals Himself from the whirlwind — not explaining suffering's cause but revealing His own greatness. Job teaches: in suffering, we need not answers but God Himself.`,
};

const outline = [
  ["1-2章", "天上的法庭与约伯的试炼", "Ch. 1–2", "Heavenly Court; Job's Trial"],
  ["3章", "约伯的哀歌", "Ch. 3", "Job's Lament"],
  ["4-14章", "第一轮辩论", "Ch. 4–14", "First Cycle of Debate"],
  ["15-21章", "第二轮辩论", "Ch. 15–21", "Second Cycle of Debate"],
  ["22-31章", "第三轮辩论", "Ch. 22–31", "Third Cycle of Debate"],
  ["28章", "智慧之诗", "Ch. 28", "Poem on Wisdom"],
  ["29-31章", "约伯的终辩", "Ch. 29–31", "Job's Final Defense"],
  ["32-37章", "以利户的演讲", "Ch. 32–37", "Elihu's Speeches"],
  ["38-41章", "耶和华从旋风中说话", "Ch. 38–41", "God Speaks from the Whirlwind"],
  ["42:1-6", "约伯的悔改", "Ch. 42:1–6", "Job's Repentance"],
  ["42:7-17", "约伯的复兴", "Ch. 42:7–17", "Job's Restoration"],
];

const keyVerse = {
  zh: `"我从前风闻有你，现在亲眼看见你。"（约伯记 42:5）`,
  en: `"I have heard of thee by the hearing of the ear: but now mine eye seeth thee." (Job 42:5)`,
};

const info = { nameZh: `约伯记`, nameEn: `Job`, author: `不详（可能是约伯本人或摩西）`, date: `族长时期（约公元前2000-1800年）`, chapters: `42章`, backHref: `/old-testament/poetry`, backLabel: `诗歌智慧书`, bibleId: `JOB` };

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