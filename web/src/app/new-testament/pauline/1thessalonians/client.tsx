'use client';
import Link from 'next/link';
import SpeakButton from '@/components/SpeakButton';
import { useState } from 'react';

const sections = [
    {
      title_zh: '信心的榜样：帖撒罗尼迦教会',
      title_en: 'A Model of Faith: The Thessalonian Church',
      content_zh: `帖撒罗尼迦前书是保罗最早的书信之一，写于他第二次宣教旅程期间。保罗在帖撒罗尼迦只待了短短几周就被迫离开（使徒行传17章），但这个年轻的教会在逼迫中显出惊人的信心。

"因为我们的福音传到你们那里，不独在乎言语，也在乎权能和圣灵，并充足的信心。你们在大难之中，蒙了圣灵所赐的喜乐，领受真道就效法我们，也效法了主。甚至你们作了马其顿和亚该亚所有信主之人的榜样。"（帖撒罗尼迦前书 1:5-7）

"For our gospel came not unto you in word only, but also in power, and in the Holy Ghost, and in much assurance. And ye became followers of us, and of the Lord, having received the word in much affliction, with joy of the Holy Ghost: So that ye were ensamples to all that believe in Macedonia and Achaia." (1 Thessalonians 1:5-7, KJV)

福音不只是言语的传递，更是圣灵大能的彰显。帖撒罗尼迦信徒在"大难之中"领受真道，却有"圣灵所赐的喜乐"——这正是真信心的标记。世界的苦难不能夺去圣灵赐下的喜乐，反而成为信心的试金石。`,
      content_en: `First Thessalonians is one of Paul's earliest letters, written during his second missionary journey. Paul stayed in Thessalonica only a few weeks before being forced to leave (Acts 17), yet this young church displayed remarkable faith under persecution.

"For our gospel came not unto you in word only, but also in power, and in the Holy Ghost, and in much assurance. And ye became followers of us, and of the Lord, having received the word in much affliction, with joy of the Holy Ghost: So that ye were ensamples to all that believe in Macedonia and Achaia." (1 Thessalonians 1:5-7, KJV)

The gospel is not merely the transmission of words but the manifestation of the Holy Spirit's power. The Thessalonian believers received the word "in much affliction' yet had "joy of the Holy Ghost' — this is the very mark of true faith. The world's sufferings cannot steal the joy given by the Holy Spirit; rather, they become the proving ground of faith.`
    },
    {
      title_zh: '牧者的心肠：保罗的牧养典范',
      title_en: 'A Pastor\'s Heart: Paul\'s Model of Shepherding',
      content_zh: `保罗在第二至三章展现了一个牧者最真挚的心肠。他不是为利、为名而传道，而是将自己的生命与信徒紧密相连。

"只在你们中间存心温柔，如同母亲乳养自己的孩子。我们既是这样爱你们，不但愿意将神的福音给你们，连自己的性命也愿意给你们，因你们是我们所疼爱的。"（帖撒罗尼迦前书 2:7-8）

"But we were gentle among you, even as a nurse cherisheth her children: So being affectionately desirous of you, we were willing to have imparted unto you, not the gospel of God only, but also our own souls, because ye were dear unto us." (1 Thessalonians 2:7-8, KJV)

保罗用"母亲乳养孩子"来形容他的服事，又说"好像父亲待自己的儿女一样"劝勉、安慰、嘱咐他们（2:11）。真正的牧养不只是讲台上的教导，更是生命对生命的倾注——"连自己的性命也愿意给你们"。这是每一个事奉神之人的标准。`,
      content_en: `In chapters 2-3, Paul reveals the most sincere heart of a pastor. He did not preach for profit or fame but bound his own life closely to his flock.

"But we were gentle among you, even as a nurse cherisheth her children: So being affectionately desirous of you, we were willing to have imparted unto you, not the gospel of God only, but also our own souls, because ye were dear unto us." (1 Thessalonians 2:7-8, KJV)

Paul used the image of "a nurse cherishing her children' to describe his ministry, and also said he exhorted, comforted, and charged them "as a father doth his children' (2:11). True shepherding is not only pulpit teaching but the pouring of life into life — "we were willing to have imparted unto you our own souls." This is the standard for everyone who serves God.`
    },
    {
      title_zh: '主的再来：活泼的盼望',
      title_en: 'The Lord\'s Return: A Living Hope',
      content_zh: `帖撒罗尼迦教会最关心的问题之一是：已经去世的信徒在主再来时会怎样？保罗给出了教会历史上最清晰的末世论教导之一。

"我们现在照主的话告诉你们一件事：我们这活着还存留到主降临的人，断不能在那已经睡了的人之先。因为主必亲自从天降临，有呼叫的声音和天使长的声音，又有神的号吹响；那在基督里死了的人必先复活。以后我们这活着还存留的人必和他们一同被提到云里，在空中与主相遇。这样，我们就要和主永远同在。"（帖撒罗尼迦前书 4:15-17）

"For this we say unto you by the word of the Lord, that we which are alive and remain unto the coming of the Lord shall not prevent them which are asleep. For the Lord himself shall descend from heaven with a shout, with the voice of the archangel, and with the trump of God: and the dead in Christ shall rise first: Then we which are alive and remain shall be caught up together with them in the clouds, to meet the Lord in the air: and so shall we ever be with the Lord." (1 Thessalonians 4:15-17, KJV)

"和主永远同在"——这是基督徒最终极的盼望。保罗说，你们当用这些话彼此劝慰（4:18）。面对死亡，我们不是没有盼望的人，因为主已经复活，那些在基督里睡了的人也必复活。这个盼望不是虚幻的愿望，而是建立在主复活之上的确据。`,
      content_en: `One of the Thessalonian church's greatest concerns was: what happens to believers who have already died when the Lord returns? Paul provided one of the clearest eschatological teachings in church history.

"For this we say unto you by the word of the Lord, that we which are alive and remain unto the coming of the Lord shall not prevent them which are asleep. For the Lord himself shall descend from heaven with a shout, with the voice of the archangel, and with the trump of God: and the dead in Christ shall rise first: Then we which are alive and remain shall be caught up together with them in the clouds, to meet the Lord in the air: and so shall we ever be with the Lord." (1 Thessalonians 4:15-17, KJV)

"So shall we ever be with the Lord' — this is the Christian's ultimate hope. Paul says to comfort one another with these words (4:18). In the face of death, we are not those without hope, because the Lord has risen, and those who sleep in Christ shall also rise. This hope is not a wishful dream but a certainty built upon the Lord's resurrection.`
    }
  ];

const overview = {
  zh: `帖撒罗尼迦前书是保罗书信中最早的一封，写于第二次宣教旅程中在哥林多期间。保罗因犹太人的逼迫被迫匆匆离开帖撒罗尼迦，他非常挂念这个年轻的教会。当提摩太带回好消息后，保罗满怀喜乐写下这封信，既安慰他们在逼迫中持守信心，也解答他们关于主再来和已故信徒命运的疑问。`,
  en: `First Thessalonians is the earliest of Paul's epistles, written during his second missionary journey while in Corinth. Paul was forced to leave Thessalonica hastily due to Jewish persecution, and he was deeply concerned about this young church. When Timothy brought back good news, Paul joyfully wrote this letter to encourage them to persevere in faith amid persecution and to answer their questions about the Lord's return and the fate of deceased believers.`,
};

const outline = [
  ["1章", `信心的榜样与福音的传播`, "Ch. 1", `The Model of Faith and the Spread of the Gospel`],
  ["2章", `保罗的牧养与使徒的心肠`, "Ch. 2", `Paul's Shepherding and the Apostle's Heart`],
  ["3章", `提摩太的差遣与信心的坚固`, "Ch. 3", `Timothy's Mission and the Strengthening of Faith`],
  ["4章", `圣洁的生活与主再来的盼望`, "Ch. 4", `Holy Living and the Hope of the Lord's Return`],
  ["5章", `儆醒等候与彼此建立`, "Ch. 5", `Watchfulness and Mutual Edification`],
];

const keyVerse = {
  zh: `"因为主必亲自从天降临，有呼叫的声音和天使长的声音，又有神的号吹响；那在基督里死了的人必先复活。"（帖撒罗尼迦前书 4:16）`,
  en: `"For the Lord himself shall descend from heaven with a shout, with the voice of the archangel, and with the trump of God: and the dead in Christ shall rise first." (1 Thessalonians 4:16, KJV)`,
};

const info = { nameZh: `帖撒罗尼迦前书`, nameEn: `1 Thessalonians`, author: `使徒保罗`, date: `约公元50-51年`, chapters: `5章`, backHref: `/new-testament/pauline`, backLabel: `保罗书信`, bibleId: `1TH` };

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
