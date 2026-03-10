'use client';
import Link from 'next/link';
import SpeakButton from '@/components/SpeakButton';
import { useState } from 'react';

const sections = [
    {
      title_zh: '基督的超越与丰盛',
      title_en: 'The Supremacy and Fullness of Christ',
      content_zh: `保罗在狱中写下这封书信，目的是对抗歌罗西教会中兴起的异端。这些假教师混合犹太律法主义、希腊哲学和东方神秘主义，企图在基督之外另立得救之路。保罗的回应直截了当：基督就是一切的丰盛。

"爱子是那不能看见之神的像，是首生的，在一切被造的以先。因为万有都是靠他造的，无论是天上的，地上的；能看见的，不能看见的；或是有位的，主治的，执政的，掌权的；一切都是藉着他造的，又是为他造的。"（歌罗西书 1:15-16）

"He is the image of the invisible God, the firstborn of every creature: For by him were all things created, that are in heaven, and that are in earth, visible and invisible, whether they be thrones, or dominions, or principalities, or powers: all things were created by him, and for him." (Colossians 1:15-16, KJV)

"首生的"不是说基督是被造物，而是说他在万有之上拥有长子的权柄和尊荣。万有因他而造、靠他而立、为他而存——这是何等荣耀的宣告！在他里面，神本性一切的丰盛都有形有体地居住（2:9）。任何在基督之外寻找智慧、能力或拯救的尝试，都是对这丰盛的否定。`,
      content_en: `Paul wrote this letter from prison to combat heresy rising in the Colossian church. False teachers blended Jewish legalism, Greek philosophy, and Eastern mysticism, attempting to establish paths to salvation apart from Christ. Paul's response is unequivocal: Christ is the fullness of everything.

"He is the image of the invisible God, the firstborn of every creature: For by him were all things created, that are in heaven, and that are in earth, visible and invisible, whether they be thrones, or dominions, or principalities, or powers: all things were created by him, and for him." (Colossians 1:15-16, KJV)

"Firstborn' does not mean Christ is a created being, but that He holds the authority and honor of the firstborn over all creation. All things were created by Him, through Him, and for Him — what a glorious declaration! In Him dwells all the fullness of the Godhead bodily (2:9). Any attempt to seek wisdom, power, or salvation apart from Christ is a denial of this fullness.`
    },
    {
      title_zh: '对抗异端：不要被人用虚空的妄言掳去',
      title_en: 'Against Heresy: Beware Lest Any Man Spoil You',
      content_zh: `歌罗西的异端具有极大的迷惑性，因为它披着"智慧"和"谦虚"的外衣。保罗一针见血地揭露：

"你们要谨慎，恐怕有人用他的理学和虚空的妄言，不照着基督，乃照人间的遗传和世上的小学就把你们掳去。"（歌罗西书 2:8）

"Beware lest any man spoil you through philosophy and vain deceit, after the tradition of men, after the rudiments of the world, and not after Christ." (Colossians 2:8, KJV)

这些异端要求信徒遵守饮食规条、守节期、敬拜天使、追求神秘的异象体验。保罗指出，这一切"是将来事的影儿；那形体却是基督"（2:17）。影儿已经过去，实体已经来到。基督在十字架上已经"将一切执政的、掌权的掳来，明显给众人看，就仗着十字架夸胜"（2:15）。既然基督已经得胜，我们还需要靠人的规条得救吗？

保罗的警告在今天依然适用：任何在"唯独基督"之外添加条件的教导，无论看起来多么属灵，本质上都是"虚空的妄言"。`,
      content_en: `The Colossian heresy was highly deceptive because it wore the cloak of "wisdom' and "humility." Paul exposed it with piercing clarity:

"Beware lest any man spoil you through philosophy and vain deceit, after the tradition of men, after the rudiments of the world, and not after Christ." (Colossians 2:8, KJV)

These heretics demanded believers observe dietary regulations, keep festivals, worship angels, and pursue mystical visions. Paul declared that all these "are a shadow of things to come; but the body is of Christ' (2:17). The shadow has passed; the substance has arrived. Christ on the cross "having spoiled principalities and powers, he made a shew of them openly, triumphing over them in it' (2:15). Since Christ has already triumphed, do we still need human regulations for salvation?

Paul's warning remains relevant today: any teaching that adds conditions beyond "Christ alone," no matter how spiritual it appears, is essentially "philosophy and vain deceit."`
    },
    {
      title_zh: '在基督里的新生活',
      title_en: 'The New Life in Christ',
      content_zh: `从第三章开始，保罗从教义转向实践。信仰不只是头脑中的知识，更是生命的更新。

"所以，你们若真与基督一同复活，就当求在上面的事；那里有基督坐在神的右边。你们要思念上面的事，不要思念地上的事。因为你们已经死了，你们的生命与基督一同藏在神里面。"（歌罗西书 3:1-3）

"If ye then be risen with Christ, seek those things which are above, where Christ sitteth on the right hand of God. Set your affection on things above, not on things on the earth. For ye are dead, and your life is hid with Christ in God." (Colossians 3:1-3, KJV)

"与基督一同藏在神里面"——这是何等安全的位置！我们的生命不再属于自己，乃是藏在基督里，被神的大能保守。因此保罗劝勉信徒脱去旧人、穿上新人：要除去恼恨、忿怒、恶毒、毁谤、污秽的言语（3:8），要存怜悯、恩慈、谦虚、温柔、忍耐的心（3:12）。这不是靠自己的努力，而是因为我们已经在基督里被更新了。

保罗特别论到家庭关系：妻子顺服丈夫、丈夫爱妻子、儿女顺从父母、父亲不惹儿女的气（3:18-21）。基督徒的信仰不是只在教会里的，更要活在家庭的每个角落。`,
      content_en: `From chapter 3 onward, Paul transitions from doctrine to practice. Faith is not merely intellectual knowledge but life transformation.

"If ye then be risen with Christ, seek those things which are above, where Christ sitteth on the right hand of God. Set your affection on things above, not on things on the earth. For ye are dead, and your life is hid with Christ in God." (Colossians 3:1-3, KJV)

"Hid with Christ in God' — what a secure position! Our lives no longer belong to ourselves but are hidden in Christ, kept by the power of God. Therefore Paul exhorts believers to put off the old man and put on the new: removing anger, wrath, malice, blasphemy, filthy communication (3:8), and putting on mercy, kindness, humbleness of mind, meekness, longsuffering (3:12). This is not by our own effort but because we have already been renewed in Christ.

Paul specifically addresses household relationships: wives submitting to husbands, husbands loving wives, children obeying parents, fathers not provoking children (3:18-21). The Christian faith is not confined to the church building — it must be lived in every corner of the home.`
    }
  ];

const overview = {
  zh: `歌罗西书是保罗在罗马坐监时写给歌罗西教会的书信。歌罗西教会并非保罗亲自建立，而是由他的同工以巴弗所创建。当异端侵入教会，以巴弗前来求助，保罗便写下这封书信。全书的核心信息只有一个：基督是一切的丰盛，在他之外别无拯救。`,
  en: `Colossians was written by Paul during his imprisonment in Rome to the church at Colossae. The church was not founded by Paul himself but by his fellow worker Epaphras. When heresy infiltrated the church, Epaphras sought Paul's help, prompting this letter. The central message is singular: Christ is the fullness of everything, and apart from Him there is no salvation.`,
};

const outline = [
  ["1章", `基督的超越与使徒的祷告`, "Ch. 1", `The Supremacy of Christ and the Apostle's Prayer`],
  ["2章", `对抗异端与基督里的丰盛`, "Ch. 2", `Against Heresy and Fullness in Christ`],
  ["3章", `新人的生活与家庭伦理`, "Ch. 3", `The New Life and Household Ethics`],
  ["4章", `祷告与同工的问安`, "Ch. 4", `Prayer and Greetings from Fellow Workers`],
];

const keyVerse = {
  zh: `"因为神本性一切的丰盛都有形有体地居住在基督里面，你们在他里面也得了丰盛。他是各样执政掌权者的元首。"（歌罗西书 2:9-10）`,
  en: `"For in him dwelleth all the fulness of the Godhead bodily. And ye are complete in him, which is the head of all principality and power." (Colossians 2:9-10, KJV)`,
};

const info = { nameZh: `歌罗西书`, nameEn: `Colossians`, author: `使徒保罗`, date: `约公元60-62年`, chapters: `4章`, backHref: `/new-testament/pauline`, backLabel: `保罗书信`, bibleId: `COL` };

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
