'use client';
import Link from 'next/link';
import SpeakButton from '@/components/SpeakButton';
import { useState } from 'react';

const sections = [
    {
      title_zh: '一、在真理与爱中行走（1-6节）',
      title_en: `I. Walking in Truth and Love (vv. 1–6)`,
      content_zh: `约翰二书是约翰写给"蒙拣选的太太和她儿女"的短信，可能是写给某位信主的妇女，也可能是教会的拟人化表达。全信只有13节，却包含了约翰信仰的核心：真理与爱不可分割。

"作长老的写信给蒙拣选的太太和她的儿女，就是我诚心所爱的；不但我爱，也是一切知道真理之人所爱的；因我们心里存着的真理，是永远与我们同在的。恩惠、怜悯、平安从父神并从父的儿子耶稣基督降与我们，在真理和爱心上常与我们同在。"（约翰二书 1:1-3）

约翰"在真理里"爱这家人——爱不是感情用事，而是以真理为根基的爱。真理是我们共同持守的，爱是真理在关系中的表达。约翰听说她的儿女"照我们从父所受的命令，在真理中而行，我就甚喜乐"（1:4）——在真理中行走，是让牧者最喜乐的事。`,
      content_en: `Second John is a short letter from John to "the elect lady and her children," possibly written to a specific Christian woman or as a personification of a church. With only 13 verses, it contains the core of John's faith: truth and love are inseparable.

"The elder unto the elect lady and her children, whom I love in the truth; and not I only, but also all they that have known the truth; For the truth's sake, which dwelleth in us, and shall be with us for ever. Grace be with you, mercy, and peace, from God the Father, and from the Lord Jesus Christ, the Son of the Father, in truth and in love." (2 John 1:1-3, KJV)

John loves this household "in the truth' — love is not emotionalism but love grounded in truth. Truth is what we mutually hold fast to; love is truth expressed in relationship. John rejoiced to hear that her children "walk in truth, as we have received a commandment from the Father' (1:4) — walking in truth is what brings the greatest joy to a shepherd.`
    },
    {
      title_zh: `二、警戒假教师与守护真道（7-13节）`,
      title_en: `II. Guarding Against False Teachers (vv. 7–13)`,
      content_zh: `约翰在第7节突然转向严肃的警告，揭露了威胁教会的具体异端：

"因为世上有许多迷惑人的出来，他们不认耶稣基督是成了肉身来的。这就是那迷惑人、敌基督的。"（约翰二书 1:7）

这里所指的异端很可能是早期诺斯底主义的一种形式——幻影说（Docetism），认为基督只是看起来有肉身，实际上并没有真正道成肉身。约翰在约翰一书4:2-3已经严厉驳斥了这种教导。否认道成肉身就是否认救赎的根基：如果基督没有取得真正的人性，他就不能代替我们死；如果他没有真正受苦，十字架就成了幻象。

约翰接着说："你们要小心自己，不要丢失你们所做的工，乃要得着满足的赏赐"（1:8）。这不是说信徒会失去救恩，而是警告：被异端迷惑会使你失去事奉的果效和赏赐。约翰用"敌基督"这个严厉的称呼来形容这些假教师——不是因为他们明目张胆地反对基督，而是因为他们以"属灵"的外衣暗中掏空了基督的位格与工作。`,
      content_en: `In verse 7, John pivots to a solemn warning, exposing the specific heresy threatening the church:

"For many deceivers are entered into the world, who confess not that Jesus Christ is come in the flesh. This is a deceiver and an antichrist." (2 John 1:7, KJV)

The heresy in view is likely an early form of Gnosticism known as Docetism, which held that Christ only appeared to have a physical body but did not truly become incarnate. John had already refuted this teaching severely in 1 John 4:2-3. To deny the incarnation is to deny the foundation of redemption: if Christ did not take on true human nature, He could not die in our place; if He did not truly suffer, the cross becomes an illusion.

John continues: "Look to yourselves, that we lose not those things which we have wrought, but that we receive a full reward" (1:8). This is not saying believers can lose salvation, but warning that being led astray by heresy can cause one to lose the fruit and reward of service. John uses the severe title "antichrist" for these false teachers — not because they openly oppose Christ, but because under a "spiritual" veneer they hollow out Christ's person and work.`
    },
];

const overview = {
  zh: `约翰二书是新约最短的书信之一，只有13节。作者约翰以"长老"自称，写给"蒙拣选的太太和她儿女"。书信的两大主题：一是在真理和爱中行走的正面劝勉；二是对传异端者要警觉、不可接待的严肃警告。这封简短的信揭示了一个重要原则：真正的爱必须以真理为根基，而真理的维护有时需要有拒绝的勇气。`,
  en: `Second John is one of the shortest letters in the New Testament, with only 13 verses. The author John refers to himself as "the elder," writing to "the elect lady and her children." The letter has two major themes: the positive exhortation to walk in truth and love, and the solemn warning to be alert to false teachers and not receive them. This brief letter reveals an important principle: genuine love must be grounded in truth, and guarding truth sometimes requires the courage to refuse.`,
};

const theology = {
  title_zh: `核心神学：真理中的爱与对假教师的警戒`,
  title_en: `Core Theology: Love in Truth and Vigilance Against False Teachers`,
  content_zh: `约翰二书只有13节，却精炼地表达了真理与爱的不可分割。

第一，在真理中彼此相爱。"我们大家要彼此相爱。这并不是我写一条新命令给你，乃是我们从起初所受的命令"（5节）。约翰所说的爱不是脱离真理的感情——"我们若照祂的命令行，这就是爱了"（6节）。真正的爱以真理为根基；离开真理的"爱"只是纵容。

第二，不可接待假教师。"若有人到你们那里，不是传这教训，不要接他到家里，也不要问他的安"（10节）。这在今天听起来很严厉，但约翰面对的是否认基督道成肉身的异端——这不是次要的神学分歧，而是对福音核心的颠覆。对真理的守护有时需要说"不"的勇气。`,
  content_en: `2 John has only 13 verses, yet it concisely expresses the inseparability of truth and love.

First, loving one another in truth. "That we love one another. And this is love, that we walk after his commandments" (vv. 5-6). The love John speaks of is not sentiment divorced from truth — "this is love, that we walk after his commandments" (v. 6). Genuine love is grounded in truth; "love" apart from truth is mere indulgence.

Second, do not receive false teachers. "If there come any unto you, and bring not this doctrine, receive him not into your house, neither bid him God speed" (v. 10). This sounds harsh today, but John faced heretics denying Christ's incarnation — not secondary theological disagreements but subversion of the gospel's core. Guarding truth sometimes requires the courage to say "no.`,
};

const keyVerse = {
  zh: `"凡越过基督的教训不常守着的，就没有神。常守这教训的，就有父又有子。"（约翰二书 1:9）`,
  en: `"Whosoever transgresseth, and abideth not in the doctrine of Christ, hath not God. He that abideth in the doctrine of Christ, he hath both the Father and the Son." (2 John 1:9, KJV)`,
};

const outline = [[`1-3节`,`问安：在真理和爱中`,`vv. 1-3`,`Greeting: In Truth and Love`],[`4-6节`,`行在真理中的喜乐`,`vv. 4-6`,`Joy of Walking in Truth`],[`7-11节`,`警惕假教师`,`vv. 7-11`,`Warning Against False Teachers`],[`12-13节`,`结语与问安`,`vv. 12-13`,`Closing and Greetings`]];

const info = { nameZh: `约翰二书`, nameEn: `2 John`, author: `使徒约翰`, date: `约公元85-95年`, chapters: `1章`, backHref: `/new-testament/general`, backLabel: `普通书信`, bibleId: `2JN` };


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
