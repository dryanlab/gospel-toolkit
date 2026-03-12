'use client';
import Link from 'next/link';
import SpeakButton from '@/components/SpeakButton';
import { useState } from 'react';

const sections = [
    {
      title_zh: '一、基督的超越与丰盛（1章）',
      title_en: 'I. The Supremacy and Fullness of Christ (Ch. 1)',
      content_zh: `保罗在狱中写下这封书信，目的是对抗歌罗西教会中兴起的异端。这些假教师混合犹太律法主义、希腊哲学和东方神秘主义，企图在基督之外另立得救之路。保罗的回应直截了当：基督就是一切的丰盛。

"爱子是那不能看见之神的像，是首生的，在一切被造的以先。因为万有都是靠他造的，无论是天上的，地上的；能看见的，不能看见的；或是有位的，主治的，执政的，掌权的；一切都是藉着他造的，又是为他造的。"（歌罗西书 1:15-16）

"首生的"不是说基督是被造物，而是说他在万有之上拥有长子的权柄和尊荣。万有因他而造、靠他而立、为他而存——这是何等荣耀的宣告！在他里面，神本性一切的丰盛都有形有体地居住（2:9）。任何在基督之外寻找智慧、能力或拯救的尝试，都是对这丰盛的否定。`,
      content_en: `Paul wrote this letter from prison to combat heresy rising in the Colossian church. False teachers blended Jewish legalism, Greek philosophy, and Eastern mysticism, attempting to establish paths to salvation apart from Christ. Paul's response is unequivocal: Christ is the fullness of everything.

"He is the image of the invisible God, the firstborn of every creature: For by him were all things created, that are in heaven, and that are in earth, visible and invisible, whether they be thrones, or dominions, or principalities, or powers: all things were created by him, and for him." (Colossians 1:15-16, KJV)

"Firstborn' does not mean Christ is a created being, but that He holds the authority and honor of the firstborn over all creation. All things were created by Him, through Him, and for Him — what a glorious declaration! In Him dwells all the fullness of the Godhead bodily (2:9). Any attempt to seek wisdom, power, or salvation apart from Christ is a denial of this fullness.`
    },
    {
      title_zh: '二、对抗异端：不要被虚空妄言掳去（2章）',
      title_en: 'II. Against Heresy: Beware Lest Any Man Spoil You (Ch. 2)',
      content_zh: `歌罗西的异端具有极大的迷惑性，因为它披着"智慧"和"谦虚"的外衣。保罗一针见血地揭露：

"你们要谨慎，恐怕有人用他的理学和虚空的妄言，不照着基督，乃照人间的遗传和世上的小学就把你们掳去。"（歌罗西书 2:8）

这些异端要求信徒遵守饮食规条、守节期、敬拜天使、追求神秘的异象体验。保罗指出，这一切"是将来事的影儿；那形体却是基督"（2:17）。影儿已经过去，实体已经来到。基督在十字架上已经"将一切执政的、掌权的掳来，明显给众人看，就仗着十字架夸胜"（2:15）。既然基督已经得胜，我们还需要靠人的规条得救吗？

保罗的警告在今天依然适用：任何在"唯独基督"之外添加条件的教导，无论看起来多么属灵，本质上都是"虚空的妄言"。`,
      content_en: `The Colossian heresy was highly deceptive because it wore the cloak of "wisdom' and "humility." Paul exposed it with piercing clarity:

"Beware lest any man spoil you through philosophy and vain deceit, after the tradition of men, after the rudiments of the world, and not after Christ." (Colossians 2:8, KJV)

These heretics demanded believers observe dietary regulations, keep festivals, worship angels, and pursue mystical visions. Paul declared that all these "are a shadow of things to come; but the body is of Christ' (2:17). The shadow has passed; the substance has arrived. Christ on the cross "having spoiled principalities and powers, he made a shew of them openly, triumphing over them in it' (2:15). Since Christ has already triumphed, do we still need human regulations for salvation?

Paul's warning remains relevant today: any teaching that adds conditions beyond "Christ alone," no matter how spiritual it appears, is essentially "philosophy and vain deceit."`
    },
    {
      title_zh: '三、在基督里的新生活（3章）',
      title_en: 'III. The New Life in Christ (Ch. 3)',
      content_zh: `从第三章开始，保罗从教义转向实践。信仰不只是头脑中的知识，更是生命的更新。

"所以，你们若真与基督一同复活，就当求在上面的事；那里有基督坐在神的右边。你们要思念上面的事，不要思念地上的事。因为你们已经死了，你们的生命与基督一同藏在神里面。"（歌罗西书 3:1-3）

"与基督一同藏在神里面"——这是何等安全的位置！我们的生命不再属于自己，乃是藏在基督里，被神的大能保守。因此保罗劝勉信徒脱去旧人、穿上新人：要除去恼恨、忿怒、恶毒、毁谤、污秽的言语（3:8），要存怜悯、恩慈、谦虚、温柔、忍耐的心（3:12）。这不是靠自己的努力，而是因为我们已经在基督里被更新了。

保罗特别论到家庭关系：妻子顺服丈夫、丈夫爱妻子、儿女顺从父母、父亲不惹儿女的气（3:18-21）。基督徒的信仰不是只在教会里的，更要活在家庭的每个角落。`,
      content_en: `From chapter 3 onward, Paul transitions from doctrine to practice. Faith is not merely intellectual knowledge but life transformation.

"If ye then be risen with Christ, seek those things which are above, where Christ sitteth on the right hand of God. Set your affection on things above, not on things on the earth. For ye are dead, and your life is hid with Christ in God." (Colossians 3:1-3, KJV)

"Hid with Christ in God' — what a secure position! Our lives no longer belong to ourselves but are hidden in Christ, kept by the power of God. Therefore Paul exhorts believers to put off the old man and put on the new: removing anger, wrath, malice, blasphemy, filthy communication (3:8), and putting on mercy, kindness, humbleness of mind, meekness, longsuffering (3:12). This is not by our own effort but because we have already been renewed in Christ.

Paul specifically addresses household relationships: wives submitting to husbands, husbands loving wives, children obeying parents, fathers not provoking children (3:18-21). The Christian faith is not confined to the church building — it must be lived in every corner of the home.`
    },
    {
      title_zh: `四、在恩典中劝勉同工与结语（4章）`,
      title_en: `IV. Exhorting Co-workers and Closing in Grace (Ch. 4)`,
      content_zh: `第四章保罗嘱咐信徒要"恒切祷告，在此儆醒感恩"（4:2），又要"用智慧与外人交往，要把握机会，用盐调和你们的言语，就可知道该怎样回答各人"（4:5-6）。盐的比喻生动地描绘了基督徒言语的品质：不乏味、不腐烂、有调味的功效——即有益、有趣、有建树。

保罗在结语中提到了一连串的同工名字，展现了初代教会同工相爱的真实图景：提摩太、阿里达古、马可（那个曾经让保罗失望、后来被保罗称为"有益于我"的马可）、以巴弗……以巴弗"为你们在祷告上时刻争战，愿你们在神一切的旨意上得以站立完全"（4:12）——这是一个多么美丽的牧者形象。

歌罗西书以最简短却最有力的嘱咐作结："你要留心，尽你所受的职分"（4:17）——写给亚基布，也写给每一个信徒。神对每个人都有托付，"尽你的职分"就是对这托付最好的回应。从基督的超越（1章）到日常生活的实践（4章），歌罗西书以基督为中心，重新定义了信仰的高度和广度。`,
      content_en: `Chapter 4 instructs believers to "continue in prayer, and watch in the same with thanksgiving" (4:2), and to "walk in wisdom toward them that are without, redeeming the time. Let your speech be alway with grace, seasoned with salt, that ye may know how ye ought to answer every man" (4:5-6, KJV). The salt metaphor vividly describes the quality of Christian speech: not tasteless, not corrupting, but seasoning — beneficial, engaging, and edifying.

Paul closes with a string of co-worker names, revealing the authentic portrait of early church fellowship: Timothy, Aristarchus, Mark (the same Mark who once disappointed Paul, later called "profitable to me"), Epaphras... Epaphras, "always labouring fervently for you in prayers, that ye may stand perfect and complete in all the will of God" (4:12, KJV) — what a beautiful image of a pastor.

Colossians ends with the briefest yet most powerful exhortation: "Take heed to the ministry which thou hast received in the Lord, that thou fulfil it" (4:17, KJV) — written to Archippus, and to every believer. God has a commission for each person; "fulfill your ministry" is the best response to that commission. From Christ's supremacy (ch. 1) to daily life's practice (ch. 4), Colossians, centered on Christ, redefines the height and breadth of faith.`
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

const theology = {
  title_zh: `核心神学：基督的至高超越与一切的丰盛`,
  title_en: `Core Theology: The Supreme Preeminence of Christ and All Fullness`,
  content_zh: `歌罗西书是保罗对基督超越性最集中的宣告——面对歌罗西教会受到的异端威胁，保罗的回应不是逐条反驳，而是高举基督。

第一，万有都是靠祂造的。"爱子是那不能看见之神的像，是首生的，在一切被造的以先。因为万有都是靠祂造的，无论是天上的、地上的……一概都是藉着祂造的，又是为祂造的"（1:15-16）。这是全新约最崇高的基督论宣告——基督不是受造物中的第一个，而是创造万有的那一位。"在祂以先"不是时间的先后，而是本体的超越。

第二，神本性一切的丰盛都有形有体地居住在基督里面。"因为神本性一切的丰盛都有形有体地居住在基督里面，你们在祂里面也得了丰盛"（2:9-10）。歌罗西的假教师暗示基督不够——需要加上天使崇拜、禁欲主义、神秘知识。保罗的回答是：基督里面有神的一切丰盛，你在基督里已经"得了丰盛"——不需要加任何东西。

第三，与基督同死同活的实际生活。"你们若真与基督一同复活，就当求在上面的事"（3:1）。"脱去旧人和旧人的行为，穿上了新人"（3:9-10）——基督徒的伦理生活不是靠规条约束，而是出于新生命的自然流露。家庭伦理（3:18-4:1）在基督里被更新——丈夫爱妻子、妻子顺服丈夫、父亲不惹儿女的气，都是"在主里面"的新关系。`,
  content_en: `Colossians is Paul's most concentrated declaration of Christ's supremacy — facing heretical threats to the Colossian church, Paul's response was not point-by-point refutation but the exaltation of Christ.

First, all things were created by Him. "Who is the image of the invisible God, the firstborn of every creature: For by him were all things created, that are in heaven, and that are in earth... all things were created by him, and for him" (1:15-16). This is the New Testament's most exalted Christological declaration — Christ is not the first created being but the One who created all things. "Firstborn" denotes not temporal sequence but ontological preeminence.

Second, in Him dwells all the fullness of the Godhead bodily. "For in him dwelleth all the fulness of the Godhead bodily. And ye are complete in him" (2:9-10). Colossian false teachers implied Christ was insufficient — needing angel worship, asceticism, and mystical knowledge. Paul's answer: all the fullness of God dwells in Christ, and you are already "complete in him" — nothing needs to be added.

Third, the practical life of dying and rising with Christ. "If ye then be risen with Christ, seek those things which are above" (3:1). "Put off the old man with his deeds; and put on the new man" (3:9-10) — Christian ethics are not externally imposed rules but the natural outflow of new life. Family ethics (3:18-4:1) are renewed in Christ — husbands loving wives, wives submitting to husbands, fathers not provoking children — all are new relationships "in the Lord.`,
};

const keyVerse = {
  zh: `"因为神本性一切的丰盛都有形有体地居住在基督里面，你们在他里面也得了丰盛。他是各样执政掌权者的元首。"（歌罗西书 2:9-10）`,
  en: `"For in him dwelleth all the fulness of the Godhead bodily. And ye are complete in him, which is the head of all principality and power." (Colossians 2:9-10, KJV)`,
};

const info = { nameZh: `歌罗西书`, nameEn: `Colossians`, author: `使徒保罗`, date: `约公元60-62年`, chapters: `4章`, backHref: `/new-testament/pauline`, backLabel: `保罗书信`, bibleId: `COL` };


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
