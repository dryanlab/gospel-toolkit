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
];

const overview = {
  zh: `约伯记是圣经中最古老的智慧文学之一，可能写于族长时期。全书42章以散文序言（1-2章）和散文结尾（42:7-17）包裹着一场漫长的诗歌辩论（3-41章）。

核心人物有约伯（义人受苦者）、以利法、比勒达、琐法（三个朋友）、以利户（年轻人），以及最终从旋风中说话的耶和华。全书探讨的终极问题不是"为什么受苦"，而是"在苦难中如何认识神"。`,
  en: `Job is one of the oldest wisdom texts in the Bible, likely written during the patriarchal era. Its 42 chapters feature a prose prologue (ch. 1-2) and epilogue (42:7-17) enclosing a lengthy poetic dialogue (ch. 3-41).

The central figures are Job (the righteous sufferer), Eliphaz, Bildad, and Zophar (three friends), Elihu (the young man), and the LORD who speaks from the whirlwind. The book's ultimate question is not "why suffering" but "how to know God through suffering."`,
};

const outline = [
  ["1-2章", "天上的法庭与约伯的苦难", "Ch. 1–2", "The Heavenly Court; Job's Suffering"],
  ["3章", "约伯的哀叹", "Ch. 3", "Job's Lament"],
  ["4-14章", "第一轮辩论", "Ch. 4–14", "First Cycle of Speeches"],
  ["15-21章", "第二轮辩论", "Ch. 15–21", "Second Cycle of Speeches"],
  ["22-31章", "第三轮辩论与约伯的最后陈词", "Ch. 22–31", "Third Cycle; Job's Final Defense"],
  ["32-37章", "以利户的发言", "Ch. 32–37", "Elihu's Speeches"],
  ["38-41章", "耶和华从旋风中说话", "Ch. 38–41", "The LORD Speaks from the Whirlwind"],
  ["42章", "约伯的悔改与神的恢复", "Ch. 42", "Job's Repentance; Restoration"],
];

const theology = {
  title_zh: `核心神学：苦难中的信心与神的主权`,
  title_en: `Core Theology: Faith in Suffering and the Sovereignty of God`,
  content_zh: `约伯记是圣经中最古老的智慧文学，直面人类最深的困惑：义人为何受苦？神是否公平？

第一，因果报应神学的破产。约伯三个朋友的核心论点是"受苦因为犯罪"——这是古代近东普遍的宗教逻辑。但约伯的遭遇彻底粉碎了这个框架：他是"完全正直、敬畏神、远离恶事"的人（1:1），神自己为他作证。改革宗神学区分"一般恩典"和"特殊恩典"，拒绝将今生的祸福与个人的义行简单挂钩——约伯记是这个教义的叙事基础。

第二，神的主权超越人的理解。神在旋风中的回答（38-41章）没有解释约伯受苦的原因，而是用一连串的质问展示祂创造和治理万物的主权："我立大地根基的时候，你在哪里呢？"（38:4）。神的回答不是冷漠的，而是深刻的：你不需要理解我的每一个决定，你需要信靠我的品格。韦敏斯德信条5.2说："虽然就神的预知和命定而言，万事的发生都是不变而有效的，然而神借着同一护理，使万事按各自因果的本性，或必然、或自由、或按条件地发生。"

第三，中保的渴望。约伯在痛苦中多次呼喊需要一位"仲裁者"（9:33）、"辩护者"（16:19）、"救赎主"（19:25）。"我知道我的救赎主活着，末了必站立在地上"（19:25）——这是旧约中对基督最震撼的预言之一。约伯在最深的黑暗中抓住了盼望——他不知道这位救赎主是谁，但他知道祂存在。基督正是约伯所渴望的那位完美中保："在神和人中间，只有一位中保，乃是降世为人的基督耶稣"（提前2:5）。

第四，从"风闻"到"亲眼看见"。"我从前风闻有你，现在亲眼看见你。因此我厌恶自己，在尘土和炉灰中懊悔"（42:5-6）。苦难的终极目的不是惩罚，而是让人更深地认识神。约伯在苦难之前对神是"风闻"——二手的知识；经过苦难之后，他对神有了"亲眼看见"——直接的经历。这是灵命成长最痛苦也最真实的路径。`,
  content_en: `Job is the oldest wisdom literature in the Bible, confronting humanity's deepest perplexity: Why do the righteous suffer? Is God fair?

First, the bankruptcy of retribution theology. The core argument of Job's three friends is "suffering results from sin" — the common religious logic of the ancient Near East. But Job's experience utterly shatters this framework: he was "perfect and upright, and one that feared God, and eschewed evil" (1:1), and God Himself testified on his behalf. Reformed theology distinguishes "common grace" from "special grace" and refuses to simplistically link present fortune or misfortune with personal righteousness — Job is the narrative foundation of this doctrine.

Second, God's sovereignty transcends human understanding. God's answer from the whirlwind (ch. 38-41) does not explain why Job suffered but instead displays His sovereignty over creation through a barrage of questions: "Where wast thou when I laid the foundations of the earth?" (38:4). God's answer is not cold but profound: you do not need to understand My every decision; you need to trust My character. The Westminster Confession 5.2 states: "Although, in relation to the foreknowledge and decree of God, the first Cause, all things come to pass immutably, and infallibly; yet, by the same providence, He ordereth them to fall out, according to the nature of second causes, either necessarily, freely, or contingently."

Third, the longing for a mediator. In his agony, Job repeatedly cried out for an "daysman" (9:33), an "advocate" (16:19), a "redeemer" (19:25). "I know that my redeemer liveth, and that he shall stand at the latter day upon the earth" (19:25) — this is one of the most stunning Old Testament prophecies of Christ. In his deepest darkness, Job seized upon hope — he did not know who this Redeemer was, but he knew He existed. Christ is the perfect Mediator Job longed for: "there is one mediator between God and men, the man Christ Jesus" (1 Tim 2:5).

Fourth, from "hearing" to "seeing." "I have heard of thee by the hearing of the ear: but now mine eye seeth thee. Wherefore I abhor myself, and repent in dust and ashes" (42:5-6). The ultimate purpose of suffering is not punishment but deeper knowledge of God. Before his suffering, Job knew God by "hearing" — secondhand knowledge; after suffering, he knew God by "seeing" — direct experience. This is the most painful yet most authentic path of spiritual growth.`,
};

const keyVerse = {
  zh: `"我从前风闻有你，现在亲眼看见你。"（约伯记 42:5）`,
  en: `"I have heard of thee by the hearing of the ear: but now mine eye seeth thee." (Job 42:5)`,
};

const info = { nameZh: `约伯记`, nameEn: `Job`, author: `不详（可能是约伯本人或摩西）`, date: `族长时期（约公元前2000-1800年）`, chapters: `42章`, backHref: `/old-testament/poetry`, backLabel: `诗歌智慧书`, bibleId: `JOB` };


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