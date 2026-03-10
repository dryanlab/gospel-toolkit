'use client';
import Link from 'next/link';
import SpeakButton from '@/components/SpeakButton';
import { useState } from 'react';

const sections = [
    {
      title_zh: '行在真理与爱中',
      title_en: 'Walking in Truth and Love',
      content_zh: `约翰二书是约翰写给"蒙拣选的太太和她儿女"的短信，可能是写给某位信主的妇女，也可能是教会的拟人化表达。全信只有13节，却包含了约翰信仰的核心：真理与爱不可分割。

"作长老的写信给蒙拣选的太太和她的儿女，就是我诚心所爱的；不但我爱，也是一切知道真理之人所爱的；因我们心里存着的真理，是永远与我们同在的。恩惠、怜悯、平安从父神并从父的儿子耶稣基督降与我们，在真理和爱心上常与我们同在。"（约翰二书 1:1-3）

"The elder unto the elect lady and her children, whom I love in the truth; and not I only, but also all they that have known the truth; For the truth's sake, which dwelleth in us, and shall be with us for ever. Grace be with you, mercy, and peace, from God the Father, and from the Lord Jesus Christ, the Son of the Father, in truth and in love." (2 John 1:1-3, KJV)

约翰"在真理里"爱这家人——爱不是感情用事，而是以真理为根基的爱。真理是我们共同持守的，爱是真理在关系中的表达。约翰听说她的儿女"照我们从父所受的命令，在真理中而行，我就甚喜乐"（1:4）——在真理中行走，是让牧者最喜乐的事。`,
      content_en: `Second John is a short letter from John to "the elect lady and her children," possibly written to a specific Christian woman or as a personification of a church. With only 13 verses, it contains the core of John's faith: truth and love are inseparable.

"The elder unto the elect lady and her children, whom I love in the truth; and not I only, but also all they that have known the truth; For the truth's sake, which dwelleth in us, and shall be with us for ever. Grace be with you, mercy, and peace, from God the Father, and from the Lord Jesus Christ, the Son of the Father, in truth and in love." (2 John 1:1-3, KJV)

John loves this household "in the truth' — love is not emotionalism but love grounded in truth. Truth is what we mutually hold fast to; love is truth expressed in relationship. John rejoiced to hear that her children "walk in truth, as we have received a commandment from the Father' (1:4) — walking in truth is what brings the greatest joy to a shepherd.`
    },
    {
      title_zh: '不可接待传异教的人',
      title_en: 'Do Not Receive Those Who Bring False Doctrine',
      content_zh: `约翰在短信中也发出了严肃的警告：真正的爱包含拒绝异端的勇气。

"凡越过基督的教训不常守着的，就没有神。常守这教训的，就有父又有子。若有人到你们那里，不是传这教训，不要接他到家里，也不要问他的安；因为问他安的，就在他的恶行上有份。"（约翰二书 1:9-11）

"Whosoever transgresseth, and abideth not in the doctrine of Christ, hath not God. He that abideth in the doctrine of Christ, he hath both the Father and the Son. If there come any unto you, and bring not this doctrine, receive him not into your house, neither bid him God speed: For he that biddeth him God speed is partaker of his evil deeds." (2 John 1:9-11, KJV)

约翰的立场看起来不近人情，但有其深刻的神学理由："连接他就在他的恶行上有份（原文）"。接待传假道的人，就是间接支持异端的传播，这不是爱，反而是害。在今天的处境中，这个原则同样适用：对异端的包容不是宽容，而是对真理的背叛，也是对将被异端误导之人的伤害。`,
      content_en: `John also issues a solemn warning in this brief letter: genuine love includes the courage to reject heresy.

"Whosoever transgresseth, and abideth not in the doctrine of Christ, hath not God. He that abideth in the doctrine of Christ, he hath both the Father and the Son. If there come any unto you, and bring not this doctrine, receive him not into your house, neither bid him God speed: For he that biddeth him God speed is partaker of his evil deeds." (2 John 1:9-11, KJV)

John's position may seem unkind, but it has deep theological grounding: welcoming a false teacher makes one "partaker of his evil deeds." Receiving someone who spreads false teaching is indirectly supporting the spread of heresy — this is not love but harm. In today's context, the same principle applies: tolerance of heresy is not tolerance but a betrayal of truth, and harm to those who will be led astray by it.`
    }
  ];

const overview = {
  zh: `约翰二书是新约最短的书信之一，只有13节。作者约翰以"长老"自称，写给"蒙拣选的太太和她儿女"。书信的两大主题：一是在真理和爱中行走的正面劝勉；二是对传异端者要警觉、不可接待的严肃警告。这封简短的信揭示了一个重要原则：真正的爱必须以真理为根基，而真理的维护有时需要有拒绝的勇气。`,
  en: `Second John is one of the shortest letters in the New Testament, with only 13 verses. The author John refers to himself as "the elder," writing to "the elect lady and her children." The letter has two major themes: the positive exhortation to walk in truth and love, and the solemn warning to be alert to false teachers and not receive them. This brief letter reveals an important principle: genuine love must be grounded in truth, and guarding truth sometimes requires the courage to refuse.`,
};

const keyVerse = {
  zh: `"凡越过基督的教训不常守着的，就没有神。常守这教训的，就有父又有子。"（约翰二书 1:9）`,
  en: `"Whosoever transgresseth, and abideth not in the doctrine of Christ, hath not God. He that abideth in the doctrine of Christ, he hath both the Father and the Son." (2 John 1:9, KJV)`,
};

const info = { nameZh: `约翰二书`, nameEn: `2 John`, author: `使徒约翰`, date: `约公元85-95年`, chapters: `1章`, backHref: `/new-testament/general`, backLabel: `普通书信`, bibleId: `2JO` };

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
      <div className="mt-8 text-center"><Link href={`/bible/${info.bibleId}`} className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--color-accent)] text-white font-bold hover:opacity-90 transition-opacity">📖 阅读{info.nameZh} Read {info.nameEn}</Link></div>
    </div>
  );
}
