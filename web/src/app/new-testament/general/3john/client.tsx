'use client';
import Link from 'next/link';
import SpeakButton from '@/components/SpeakButton';
import { useState } from 'react';

const sections = [
    {
      title_zh: '一、接待传道人：盖犹的美好见证',
      title_en: `I. Welcoming Missionaries: The Good Example of Gaius`,
      content_zh: `约翰三书是写给盖犹的个人信件，全信只有14节，却在约翰二书"不可接待异端"之后，提供了一个正面的例子：当接待、支持传道人。

"亲爱的兄弟啊，凡你向作客旅之弟兄所行的都是忠心的。他们在教会面前证明了你的爱，你若配得过神，帮助他们往前行，这就好了。"（约翰三书 1:5-6）

盖犹接待了传道人，包括外来的陌生人，被称为"忠心的行事"。这是款待之道（hospitality）的圣经标准——不只接待相识的，也接待陌生的传道人。保罗在罗马书12:13说"客要一味地款待"，希伯来书13:2说"不可忘记用爱心接待客旅，因为曾有接待客旅的，不知不觉就接待了天使"。`,
      content_en: `Third John is a personal letter to Gaius, with only 14 verses. Following Second John's warning against receiving false teachers, it provides a positive example: believers should welcome and support missionaries.

"Beloved, thou doest faithfully whatsoever thou doest to the brethren, and to strangers; Which have borne witness of thy charity before the church: whom if thou bring forward on their journey after a godly sort, thou shalt do well." (3 John 1:5-6, KJV)

Gaius welcomed missionaries, including strangers, and was commended for "faithfully' doing so. This is the biblical standard of hospitality — not only welcoming acquaintances but also welcoming traveling missionaries. Paul in Romans 12:13 says to be "given to hospitality," and Hebrews 13:2 says "Be not forgetful to entertain strangers: for thereby some have entertained angels unawares."`
    },
    {
      title_zh: `二、为主名出外：宣教的神学根基`,
      title_en: `II. Going Forth for His Name: The Theological Foundation of Mission`,
      content_zh: `约翰在第7-8节给出了支持传道人的神学理由：

"因他们是为主的名出外，对于外邦人一无所取。所以我们应该接待这样的人，叫我们与他们一同为真理做工。"（约翰三书 1:7-8）

"为主的名出外"——宣教的动力不是个人抱负，而是主名的荣耀。"对于外邦人一无所取"——传道人不向未信者收取报酬，以保持福音的纯洁性，免得有人误解福音是可以买卖的。但这并不意味着传道人不需要供应——恰恰相反，约翰说信徒"应该接待这样的人"，这是信徒的本分。

最关键的是最后一句："叫我们与他们一同为真理做工。"支持传道人不只是行善，而是参与宣教。你或许不能亲自去传道，但你接待传道人、供应他们的需要，就与他们一同承担了福音的使命，一同成为"真理的同工"。这是保罗在腓立比书1:5所称的"同心合意地兴旺福音"。`,
      content_en: `In verses 7-8, John gives the theological reason for supporting missionaries:

"Because that for his name's sake they went forth, taking nothing of the Gentiles. We therefore ought to receive such, that we might be fellowhelpers to the truth." (3 John 1:7-8, KJV)

"For his name's sake they went forth' — the motivation for mission is not personal ambition but the glory of the Lord's name. "Taking nothing of the Gentiles' — missionaries did not accept payment from unbelievers, preserving the purity of the gospel lest anyone think the gospel can be bought and sold. But this does not mean missionaries need no provision — on the contrary, John says believers "ought to receive such," for it is their duty.

The crucial phrase is the last: "that we might be fellowhelpers to the truth." Supporting missionaries is not merely doing good but participating in mission. You may not be able to go preach personally, but by welcoming missionaries and supplying their needs, you share in the gospel mission, becoming "fellowhelpers to the truth." This is what Paul calls "fellowship in furtherance of the gospel" (Philippians 1:5).`
    },
    {
      title_zh: `三、爱权位的丢特腓与爱真理的低米丢`,
      title_en: `III. Power-Loving Diotrephes and Truth-Loving Demetrius`,
      content_zh: `约翰三书中两个人物的对比，是教会历史上关于领袖品格最早的案例记录。

"我曾略略地写信给教会，但那好为首的丢特腓不接待我们。所以我若去，必要提说他所行的事，就是他用恶言妄论我们。还不以此为足，他自己不接待弟兄，有人愿意接待，他也禁止，并且将那些人赶出教会。"（约翰三书 1:9-10）

"I wrote unto the church: but Diotrephes, who loveth to have the preeminence among them, receiveth us not. Wherefore, if I come, I will remember his deeds which he doeth, prating against us with malicious words: and not content therewith, neither doth he himself receive the brethren, and forbiddeth them that would, and casteth them out of the church." (3 John 1:9-10, KJV)

丢特腓的问题是"爱在教会中为首"——以权力为目标。他拒绝接受使徒约翰的权威，甚至将愿意接待传道人的信徒赶出教会。这是历史上有记录的早期教会权力滥用案例。与此对比，"低米丢被众人证明，又被真理本身证明"（1:12）——真正有属灵权柄的人，是被真理和群体共同印证的，不是靠排斥异己获得的。`,
      content_en: `The contrast between two figures in Third John is one of the earliest recorded case studies in church history on the character of leaders.

"I wrote unto the church: but Diotrephes, who loveth to have the preeminence among them, receiveth us not. Wherefore, if I come, I will remember his deeds which he doeth, prating against us with malicious words: and not content therewith, neither doth he himself receive the brethren, and forbiddeth them that would, and casteth them out of the church." (3 John 1:9-10, KJV)

Diotrephes's problem was that he "loveth to have the preeminence' — using power as his goal. He refused to accept the apostle John's authority and even cast out believers who wanted to welcome missionaries. This is a recorded early church case of leadership abuse. In contrast, "Demetrius hath good report of all men, and of the truth itself' (1:12) — those with true spiritual authority are confirmed by both truth and the community, not obtained by excluding others.`
    },
    {
      title_zh: `四、效法善不效法恶：从行为看信仰`,
      title_en: `IV. Follow Good, Not Evil: Faith Manifested in Conduct`,
      content_zh: `约翰在全信的高潮处写下了一句掷地有声的话：

"亲爱的兄弟啊，不要效法恶，只要效法善。行善的属乎神；行恶的未曾见过神。"（约翰三书 1:11）

这与约翰一书的主题完全一致：信仰必须有行为的印证。"行善的属乎神"不是说行善可以赚取救恩，而是说真正认识神的人必然结出善行的果子。反过来，"行恶的未曾见过神"——无论一个人口头的信仰告白多么正统，如果他的生活充满恶行（如丢特腓的霸权），就证明他并不真正认识神。

约翰三书虽然短小，却给我们留下了三个活生生的榜样和鉴戒：盖犹教我们忠心款待，丢特腓警告我们权力的腐蚀，低米丢展示了被真理和众人共同印证的生命。在教会生活中，我们每天都在选择——效法盖犹和低米丢，还是走丢特腓的路？愿主赐我们智慧分辨。`,
      content_en: `At the climax of his letter, John writes a resounding statement:

"Beloved, follow not that which is evil, but that which is good. He that doeth good is of God: but he that doeth evil hath not seen God." (3 John 1:11, KJV)

This is entirely consistent with the theme of First John: faith must be evidenced by conduct. "He that doeth good is of God' does not mean good works earn salvation, but that those who truly know God will inevitably bear the fruit of good deeds. Conversely, "he that doeth evil hath not seen God' — no matter how orthodox one's verbal confession, if one's life is filled with evil deeds (like Diotrephes's tyranny), it proves he does not truly know God.

Though Third John is brief, it leaves us three vivid examples and warnings: Gaius teaches us faithful hospitality, Diotrephes warns us of the corruption of power, and Demetrius displays a life confirmed by both truth and the community. In church life, we face this choice daily — follow Gaius and Demetrius, or walk the path of Diotrephes? May the Lord grant us wisdom to discern.`
    }
  ];

const overview = {
  zh: `约翰三书是新约最短的书信，是约翰写给朋友盖犹的私人信件。书信围绕三个人物展开：盖犹（忠心接待传道人的榜样）、丢特腓（爱权位、滥用权力的反面教材）、低米丢（被众人和真理印证的好见证）。这封小信提醒我们：教会中的款待之道、领袖的品格、以及真理与爱的实践，都是真信仰不可或缺的部分。`,
  en: `Third John is the shortest letter in the New Testament — a personal letter from John to his friend Gaius. It revolves around three figures: Gaius (a model of faithfully welcoming missionaries), Diotrephes (a negative example of power-seeking and authority abuse), and Demetrius (attested by many and by the truth itself). This brief letter reminds us that hospitality, leadership character, and the practice of truth and love are all indispensable parts of genuine faith.`,
};

const keyVerse = {
  zh: `"亲爱的兄弟啊，不要效法恶，只要效法善。行善的属乎神；行恶的未曾见过神。"（约翰三书 1:11）`,
  en: `"Beloved, follow not that which is evil, but that which is good. He that doeth good is of God: but he that doeth evil hath not seen God." (3 John 1:11, KJV)`,
};

const outline = [[`1-4节`,`问安：在真理中行走`,`vv. 1-4`,`Greeting: Walking in Truth`],[`5-8节`,`该犹的忠心接待`,`vv. 5-8`,`Gaius's Faithful Hospitality`],[`9-10节`,`丢特腓的骄傲霸权`,`vv. 9-10`,`Diotrephes's Arrogant Tyranny`],[`11-14节`,`低米丢的美好见证`,`vv. 11-14`,`Demetrius's Good Testimony`]];

const info = { nameZh: `约翰三书`, nameEn: `3 John`, author: `使徒约翰`, date: `约公元85-95年`, chapters: `1章`, backHref: `/new-testament/general`, backLabel: `普通书信`, bibleId: `3JO` };

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
