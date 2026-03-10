'use client';
import Link from 'next/link';
import SpeakButton from '@/components/SpeakButton';
import { useState } from 'react';

const sections = [
    {
      title_zh: '活泼的盼望：苦难中的平安',
      title_en: 'A Living Hope: Peace in Suffering',
      content_zh: `彼得前书的背景是罗马帝国对基督徒的逼迫，收信人是散居各地的信徒。彼得以他亲身经历的失败与恢复，写下了关于苦难中盼望最真实的见证。

"愿颂赞归与我们主耶稣基督的父神！他曾照自己的大怜悯，藉耶稣基督从死里复活，重生了我们，叫我们有活泼的盼望，可以得着不能朽坏、不能玷污、不能衰残、为你们存留在天上的基业。"（彼得前书 1:3-4）

"Blessed be the God and Father of our Lord Jesus Christ, which according to his abundant mercy hath begotten us again unto a lively hope by the resurrection of Jesus Christ from the dead, To an inheritance incorruptible, and undefiled, and that fadeth not away, reserved in heaven for you." (1 Peter 1:3-4, KJV)

"活泼的盼望"——不是消极等待，而是活生生、有生命力的盼望。这盼望的根基是"耶稣基督从死里复活"。因为他复活了，我们的盼望不是幻想，而是确据。那在天上为我们存留的基业是三重的："不能朽坏"（不会腐烂）、"不能玷污"（不会被污染）、"不能衰残"（不会褪色）。这就是我们在苦难中仍能喜乐的原因。`,
      content_en: `First Peter was written against the backdrop of Roman persecution of Christians, addressed to believers scattered throughout various regions. Peter, drawing on his own personal experience of failure and restoration, wrote the most authentic testimony about hope in suffering.

"Blessed be the God and Father of our Lord Jesus Christ, which according to his abundant mercy hath begotten us again unto a lively hope by the resurrection of Jesus Christ from the dead, To an inheritance incorruptible, and undefiled, and that fadeth not away, reserved in heaven for you." (1 Peter 1:3-4, KJV)

"A lively hope' — not passive waiting but hope that is alive and vital. The foundation of this hope is "the resurrection of Jesus Christ from the dead." Because He rose, our hope is not wishful thinking but certainty. The inheritance reserved for us in heaven is threefold: "incorruptible' (will not decay), "undefiled' (cannot be contaminated), "fadeth not away' (will not fade). This is why we can rejoice even in suffering.`
    },
    {
      title_zh: '选民、圣洁的国度：教会的身份',
      title_en: 'A Chosen Generation, A Holy Nation: The Church\'s Identity',
      content_zh: `彼得书信中最著名的段落之一，描述了基督徒在神眼中的身份——这是每一个在苦难中迷失方向的信徒需要回归的根基。

"惟有你们是被拣选的族类，是有君尊的祭司，是圣洁的国度，是属神的子民，要叫你们宣扬那召你们出黑暗入奇妙光明者的美德。"（彼得前书 2:9）

"But ye are a chosen generation, a royal priesthood, an holy nation, a peculiar people; that ye should shew forth the praises of him who hath called you out of darkness into his marvellous light." (1 Peter 2:9, KJV)

四重身份：被拣选的族类（神主权的拣选）、有君尊的祭司（每个信徒都可直接到神面前）、圣洁的国度（分别为圣的群体）、属神的子民（字面是"为自己所得的子民"）。这一切的目的是什么？"宣扬那召你们出黑暗入奇妙光明者的美德"——宣扬神的美德，这是教会存在的使命。

你是谁？不是被社会定义、被苦难限制的人，而是被神拣选、被神宝贝的人。`,
      content_en: `One of the most celebrated passages in Peter's letters, describing believers' identity in God's eyes — the foundation to which every believer lost in suffering must return.

"But ye are a chosen generation, a royal priesthood, an holy nation, a peculiar people; that ye should shew forth the praises of him who hath called you out of darkness into his marvellous light." (1 Peter 2:9, KJV)

Four-fold identity: a chosen generation (God's sovereign election), a royal priesthood (every believer may approach God directly), a holy nation (a community set apart), a peculiar people (literally "a people for God's own possession'). What is the purpose of all this? To "shew forth the praises of him who hath called you out of darkness' — proclaiming God's excellence is the church's mission.

Who are you? Not someone defined by society or limited by suffering, but someone chosen by God and treasured by God.`
    },
    {
      title_zh: '在苦难中效法基督的脚踪',
      title_en: 'Following Christ\'s Steps Through Suffering',
      content_zh: `彼得书信关于苦难的教导，来自他亲眼目睹基督受苦的经历。他是在客西马尼园逃跑的那个人，是在大祭司院子里三次不认主的那个人——他对苦难与恐惧有切身的体验。

"你们蒙召原是为此；因基督也为你们受过苦，给你们留下榜样，叫你们跟随他的脚踪行。他并没有犯罪，口里也没有诡诈；他被骂不还口；受害不说威吓的话，只将自己交托那按公义审判人的主。"（彼得前书 2:21-23）

"For even hereunto were ye called: because Christ also suffered for us, leaving us an example, that ye should follow his steps: Who did no sin, neither was guile found in his mouth: Who, when he was reviled, reviled not again; when he suffered, he threatened not; but committed himself to him that judgeth righteously." (1 Peter 2:21-23, KJV)

"给你们留下榜样"——基督的受苦不只是赎罪，也是我们的榜样。他"被骂不还口，受害不说威吓的话"，而是"将自己交托那按公义审判人的主"——这是真正的信心：在不公义中不试图自救，而是将自己托付给公义的神。

彼得在5章还有一句话出自他最深的体验："你们要将一切的忧虑卸给神，因为他顾念你们"（5:7）。`,
      content_en: `Peter's teaching on suffering came from his personal witness of Christ's passion. He was the one who fled in Gethsemane, the one who denied the Lord three times in the high priest's courtyard — he had intimate personal experience of suffering and fear.

"For even hereunto were ye called: because Christ also suffered for us, leaving us an example, that ye should follow his steps: Who did no sin, neither was guile found in his mouth: Who, when he was reviled, reviled not again; when he suffered, he threatened not; but committed himself to him that judgeth righteously." (1 Peter 2:21-23, KJV)

"Leaving us an example' — Christ's suffering was not only atoning but also exemplary. He "when he was reviled, reviled not again; when he suffered, he threatened not," but instead "committed himself to him that judgeth righteously' — this is true faith: not attempting self-rescue in injustice, but entrusting oneself to the just God.

Peter also wrote from his deepest experience in chapter 5: "Casting all your care upon him; for he careth for you' (5:7).`
    }
  ];

const overview = {
  zh: `彼得前书写于罗马（书信中称为"巴比伦"），收信人是散居本都、加拉太等地的信徒。彼得面对的处境是尼禄皇帝迫害基督徒期间，信徒正在经历苦难和逼迫。这封书信的主题是苦难中的盼望——如何在试炼中持守信心、效法基督、活出圣洁的见证。彼得以自己三次不认主又蒙恢复的经历，写出了最真实的牧者关怀。`,
  en: `First Peter was written from Rome (called "Babylon' in the letter) to believers scattered throughout Pontus, Galatia, and other regions. Peter wrote during the time of Emperor Nero's persecution of Christians, when believers were experiencing suffering and hardship. The letter's theme is hope in suffering — how to hold fast to faith in trials, follow the example of Christ, and live out a holy testimony. Drawing on his own experience of denying the Lord three times and being restored, Peter wrote with the most authentic pastoral care.`,
};

const outline = [
  ["1章", `活泼的盼望与圣洁的呼召`, "Ch. 1", `A Living Hope and the Call to Holiness`],
  ["2章", `活石与选民、客旅的生活`, "Ch. 2", `Living Stones, Chosen People, Life as Strangers`],
  ["3章", `婚姻关系与苦难中的答辩`, "Ch. 3", `Marriage Relations and Defense in Suffering`],
  ["4章", `效法基督受苦与末日的警醒`, "Ch. 4", `Following Christ's Suffering and End-Time Alertness`],
  ["5章", `长老的牧养与谦卑顺服`, "Ch. 5", `Elders' Shepherding and Humble Submission`],
];

const keyVerse = {
  zh: `"惟有你们是被拣选的族类，是有君尊的祭司，是圣洁的国度，是属神的子民，要叫你们宣扬那召你们出黑暗入奇妙光明者的美德。"（彼得前书 2:9）`,
  en: `"But ye are a chosen generation, a royal priesthood, an holy nation, a peculiar people; that ye should shew forth the praises of him who hath called you out of darkness into his marvellous light." (1 Peter 2:9, KJV)`,
};

const info = { nameZh: `彼得前书`, nameEn: `1 Peter`, author: `使徒彼得`, date: `约公元62-64年`, chapters: `5章`, backHref: `/new-testament/general`, backLabel: `普通书信`, bibleId: `1PE` };

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
