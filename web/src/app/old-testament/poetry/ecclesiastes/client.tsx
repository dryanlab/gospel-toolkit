'use client';
import Link from 'next/link';
import SpeakButton from '@/components/SpeakButton';
import { useState } from 'react';

const sections = [
  {
    title_zh: `一、虚空的虚空——日光之下的观察（1-6章）`,
    title_en: `I. Vanity of Vanities — Observations Under the Sun (Ch. 1–6)`,
    content_zh: `传道书以震撼的宣告开始："虚空的虚空，虚空的虚空，凡事都是虚空"（1:2）。希伯来文"הֶבֶל"（hevel）原意是"气息"、"蒸汽"——短暂、抓不住、转瞬即逝。传道者不是在说一切都没有意义，而是说一切都是短暂的、不可掌控的。

传道者以王的权力和财富做实验：他追求智慧（1:12-18），却发现"多有智慧，就多有愁烦"；他追求享乐（2:1-11），建造宫殿、种植园林、积蓄金银，最终发现"都是虚空，都是捕风"（2:11）；他观察劳碌（2:18-23），发现自己的一切积蓄都要留给未知的后人。

然而传道者并非全然消极。3:1-8的"凡事都有定期"是圣经最优美的诗之一："生有时，死有时……哭有时，笑有时……争战有时，和好有时。"人生的节奏不在人的掌控中，而在神的安排里——"神造万物，各按其时成为美好，又将永生安置在世人心里"（3:11）。

传道者观察到社会的不公义（4:1）、财富的空虚（5:10-12）和死亡的必然（6:12）。这一切不是让人绝望，而是让人转向日光之上的神。`,
    content_en: `Ecclesiastes opens with a stunning declaration: "Vanity of vanities, saith the Preacher, vanity of vanities; all is vanity" (1:2). The Hebrew "הֶבֶל" (hevel) originally means "breath," "vapor" — fleeting, ungraspable, transient. The Preacher is not saying everything is meaningless but that everything is brief and beyond our control.

The Preacher experimented with royal power and wealth: he pursued wisdom (1:12–18) but found "in much wisdom is much grief"; he pursued pleasure (2:1–11), building palaces and gardens, amassing gold and silver, concluding "all was vanity and vexation of spirit" (2:11); he observed labor (2:18–23), finding that all his accumulation would pass to an unknown heir.

Yet the Preacher is not entirely pessimistic. The poem in 3:1–8 — "To every thing there is a season" — is among Scripture's most beautiful: "A time to be born, and a time to die... a time to weep, and a time to laugh... a time of war, and a time of peace." Life's rhythms are not in human hands but in God's design — "He hath made every thing beautiful in his time: also he hath set the world in their heart" (3:11).

The Preacher observes social injustice (4:1), the emptiness of wealth (5:10–12), and the certainty of death (6:12). All this is meant not to bring despair but to turn our gaze from under the sun to the God above it.`,
  },
  {
    title_zh: `二、智慧的实践与人生的限度（7-11章）`,
    title_en: `II. Practical Wisdom and Life's Limits (Ch. 7–11)`,
    content_zh: `传道书的后半部转向更实际的智慧。传道者并没有因为"虚空"就放弃生活——恰恰相反，正因为人生短暂，更要在有限中活出智慧。

"往遭丧的家去，强如往宴乐的家去"（7:2）——面对死亡比逃避死亡更有智慧。"不要行义过分，也不要过于自逞智慧"（7:16）——这不是鼓励平庸，而是警告法利赛式的自义。传道者清醒地认识到人性的限度："时候、机会临到众人。原来人也不知道自己的定期"（9:11-12概意）。

第九章有一段看似矛盾却极为深刻的劝勉："你只管去欢欢喜喜吃你的饭，心中快乐喝你的酒，因为神已经悦纳你的作为"（9:7）。这不是享乐主义，而是信心的表达——在承认一切虚空之后，仍然感恩地享受神所赐的每一天。

"当将你的粮食撒在水面，因为日久必能得着"（11:1）——这是对慷慨和冒险的鼓励。人不知道哪种努力会成功，但不要因为不确定就停止行善。`,
    content_en: `The second half turns to more practical wisdom. The Preacher does not abandon life because of "vanity" — quite the opposite: precisely because life is short, one must live wisely within its limits.

"It is better to go to the house of mourning, than to go to the house of feasting" (7:2) — facing death is wiser than fleeing it. "Be not righteous over much; neither make thyself over wise" (7:16) — this is not encouraging mediocrity but warning against Pharisaic self-righteousness. The Preacher soberly recognizes human limits: "Time and chance happeneth to them all. For man also knoweth not his time" (9:11–12).

Chapter 9 contains a seemingly paradoxical yet profoundly wise exhortation: "Go thy way, eat thy bread with joy, and drink thy wine with a merry heart; for God now accepteth thy works" (9:7). This is not hedonism but an expression of faith — after acknowledging all is vanity, still gratefully enjoying each day God gives.

"Cast thy bread upon the waters: for thou shalt find it after many days" (11:1) — an encouragement toward generosity and risk. One does not know which effort will succeed, but uncertainty should not halt doing good.`,
  },
  {
    title_zh: `三、总结——敬畏神，谨守诫命（12章）`,
    title_en: `III. Conclusion — Fear God and Keep His Commandments (Ch. 12)`,
    content_zh: `传道书第十二章是全书的高潮和总结。传道者用一段壮美的诗歌描绘衰老和死亡："你趁着年幼，衰败的日子尚未来到，就是你所说，我毫无喜乐的那些年日未曾临近之先，当记念造你的主"（12:1）。

接下来的比喻描绘了身体的衰老：看守房屋的发颤（手抖）、推磨的稀少（牙齿脱落）、从窗户往外看的都昏暗（眼睛昏花）、街门关闭（耳朵失聪）——直到"银链折断，金罐破裂……尘土仍归于地，灵仍归于赐灵的神"（12:6-7）。

全书最后两节是传道书的终极信息，也是整本书的钥匙："这些事都已听见了，总意就是：敬畏神，谨守他的诫命，这是人所当尽的本分。因为人所做的事，连一切隐藏的事，无论是善是恶，神都必审问"（12:13-14）。

在经历了对虚空的彻底探索之后，传道者的结论不是虚无主义，而是敬畏。正因为日光之下一切虚空，日光之上的神就成了唯一的确据。传道书教导我们：承认人生的有限不是绝望的开始，而是敬畏神的开始。`,
    content_en: `Chapter 12 is the book's climax and conclusion. The Preacher paints a majestic poem depicting aging and death: "Remember now thy Creator in the days of thy youth, while the evil days come not, nor the years draw nigh, when thou shalt say, I have no pleasure in them" (12:1).

The following metaphors depict the body's decline: the keepers of the house trembling (shaking hands), the grinders ceasing because they are few (teeth falling), those looking out of the windows being darkened (dimming eyes), the doors shut in the streets (deafened ears) — until "the silver cord be loosed, or the golden bowl be broken... then shall the dust return to the earth as it was: and the spirit shall return unto God who gave it" (12:6–7).

The final two verses are Ecclesiastes' ultimate message and the key to the entire book: "Let us hear the conclusion of the whole matter: Fear God, and keep his commandments: for this is the whole duty of man. For God shall bring every work into judgment, with every secret thing, whether it be good, or whether it be evil" (12:13–14).

After a thorough exploration of vanity, the Preacher's conclusion is not nihilism but reverence. Precisely because all is vanity under the sun, God above the sun becomes the only certainty. Ecclesiastes teaches: acknowledging life's limitations is not the beginning of despair but the beginning of fearing God.`,
  }
];

const overview = {
  zh: `传道书（希伯来文Qoheleth，意为"在会中传道的人"）是旧约智慧文学中最独特的一卷，传统认为是所罗门晚年所写。全书12章以"虚空的虚空"开始，以"敬畏神，谨守诫命"结束——从人生的困惑走向信仰的确据。

传道书的关键词是"虚空"（hevel，出现38次）和"日光之下"（出现29次）。传道者从纯粹"日光之下"的视角观察人生——劳碌、享乐、智慧、财富——发现一切都抓不住。但这恰恰是他要传达的信息：离开了神，人生确实虚空；回到神面前，一切才有了意义。`,
  en: `Ecclesiastes (Hebrew Qoheleth, "the Preacher") is the most distinctive book of Old Testament wisdom literature, traditionally attributed to Solomon in his later years. Its 12 chapters begin with "Vanity of vanities" and end with "Fear God, and keep his commandments" — a journey from life's perplexity to faith's certainty.

The key words are "vanity" (hevel, appearing 38 times) and "under the sun" (appearing 29 times). The Preacher observes life from a purely "under the sun" perspective — labor, pleasure, wisdom, wealth — finding everything ungraspable. But this is precisely his message: apart from God, life truly is vanity; returning to God, everything gains meaning.`,
};

const outline = [
  ["1:1-11", "万事虚空与循环", "Ch. 1:1–11", "All Is Vanity; The Cycle"],
  ["1:12-2:26", "智慧与享乐的实验", "Ch. 1:12–2:26", "Experiments in Wisdom and Pleasure"],
  ["3章", "凡事都有定期", "Ch. 3", "A Time for Everything"],
  ["4-6章", "不公义、孤独与财富", "Ch. 4–6", "Injustice, Loneliness, Wealth"],
  ["7-8章", "智慧的实际忠告", "Ch. 7–8", "Practical Wisdom"],
  ["9-10章", "人生的不确定", "Ch. 9–10", "Life's Uncertainties"],
  ["11章", "趁年轻积极行善", "Ch. 11", "Act While Young"],
  ["12章", "记念造你的主", "Ch. 12", "Remember Your Creator"],
];

const keyVerse = {
  zh: `"这些事都已听见了，总意就是：敬畏神，谨守他的诫命，这是人所当尽的本分。"（传道书 12:13）`,
  en: `"Let us hear the conclusion of the whole matter: Fear God, and keep his commandments: for this is the whole duty of man." (Ecclesiastes 12:13)`,
};

const info = { nameZh: `传道书`, nameEn: `Ecclesiastes`, author: `所罗门（传统观点）`, date: `约公元前935年`, chapters: `12章`, backHref: `/old-testament/poetry`, backLabel: `诗歌智慧书`, bibleId: `ECC` };

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