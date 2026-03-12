'use client';
import Link from 'next/link';
import SpeakButton from '@/components/SpeakButton';
import { useState } from 'react';

const sections = [
    {
      title_zh: '一、试炼与智慧：信心的炼净（1章）',
      title_en: `I. Trials and Wisdom: The Purifying of Faith`,
      content_zh: `雅各书以一个出人意料的劝勉开始：要以试炼为大喜乐。这不是受苦主义，而是对试炼本质的深刻认识。

"我的弟兄们，你们落在百般试炼中，都要以为大喜乐；因为知道你们的信心经过试验，就生忍耐。但忍耐也当成功，使你们成全、完备，毫无缺欠。"（雅各书 1:2-4）

试炼的目的是"生忍耐"，忍耐的目的是"成全、完备"。这是神对信徒的心意：借着苦难塑造完全的品格。雅各接着说，在试炼中缺乏智慧的，可以向神祈求，"神是厚赐与众人，也不斥责人的"（1:5）。面对试炼的智慧，不是靠人的聪明，而是来自神的恩赐。`,
      content_en: `James opens with a surprising exhortation: count trials as great joy. This is not masochism but a profound understanding of what trials truly are.

"My brethren, count it all joy when ye fall into divers temptations; Knowing this, that the trying of your faith worketh patience. But let patience have her perfect work, that ye may be perfect and entire, wanting nothing." (James 1:2-4, KJV)

Trials produce patience; patience produces perfection and completeness. This is God's intention for believers: to shape complete character through suffering. James continues: those who lack wisdom in trials may ask God, who "giveth to all men liberally, and upbraideth not' (1:5). Wisdom in the face of trials comes not from human cleverness but from God's gracious gift.`
    },
    {
      title_zh: '二、信心与行为：真信心必结出果子（2章）',
      title_en: `II. Faith and Works: True Faith Bears Fruit`,
      content_zh: `雅各书最著名也最容易被误解的段落，是关于信心与行为的关系。马丁·路德曾称雅各书为"稻草的书信"，但这是误解了雅各的意思。

"我的弟兄们，若有人说自己有信心，却没有行为，有什么益处呢？这信心能救他吗？……这样，信心若没有行为就是死的。"（雅各书 2:14,17）

雅各攻击的不是保罗所说"因信称义"的信心，而是"口头信心"——只是说说而已、没有生命改变的虚假信心。保罗说我们靠信心得救，雅各说真信心会结出行为。两人说的不是矛盾，而是同一真理的两面：真正的信心必然产生行为，而没有行为的"信心"根本不是真信心。亚伯拉罕"信心是与他的行为并行，而且信心因着行为才得成全"（2:22）——信心和行为是合一的，不可分割。`,
      content_en: `The most famous and most easily misunderstood passage in James concerns the relationship between faith and works. Martin Luther once called James "an epistle of straw," but this misread James's intention.

"What doth it profit, my brethren, though a man say he hath faith, and have not works? can faith save him? … Even so faith, if it hath not works, is dead, being alone." (James 2:14,17, KJV)

James is not attacking the justifying faith Paul spoke of, but "verbal faith' — a false faith that consists only of words without life transformation. Paul says we are saved through faith; James says true faith produces works. The two are not contradictory but two sides of the same truth: genuine faith inevitably produces works, and "faith' without works is simply not true faith. Abraham's "faith wrought with his works, and by works was faith made perfect' (2:22) — faith and works are unified, inseparable.`
    },
    {
      title_zh: '三、舌头的力量与从上头来的智慧（3章）',
      title_en: `III. The Power of the Tongue and Wisdom from Above`,
      content_zh: `雅各书第三章用大量篇幅论及舌头——这小小的器官却有巨大的力量，可以建造也可以摧毁。

"这样，舌头在百体里也是最小的，却能说大话。看哪，最小的火能点着最大的树林。舌头就是火，在我们百体中，舌头是个罪恶的世界，能污秽全身，也能把生命的轮子点起来，并且是从地狱里点着的。"（雅各书 3:5-6）

舌头能用来"颂赞那为主、为父的神，又用它来咒诅那照着　神形像被造的人"（3:9）——同一个舌头，可以赞美神，也可以伤害人。雅各指出，真正的解决之道不是靠自己控制舌头（"没有人能制伏这舌头"，3:8），而是靠"从上头来的智慧"——这智慧是"纯洁的、和平的、温良的、柔顺的，满有怜悯、多结善果，没有偏见，没有假冒"（3:17）。`,
      content_en: `James chapter 3 devotes considerable space to the tongue — this small organ with tremendous power, capable of both building up and tearing down.

"Even so the tongue is a little member, and boasteth great things. Behold, how great a matter a little fire kindleth! And the tongue is a fire, a world of iniquity: so is the tongue among our members, that it defileth the whole body, and setteth on fire the course of nature; and it is set on fire of hell." (James 3:5-6, KJV)

The tongue is used "therewith bless we God, even the Father; and therewith curse we men, which are made after the similitude of God" (3:9) — the same tongue can praise God and wound people. James notes the true solution is not self-control of the tongue ("no man can tame the tongue," 3:8), but "wisdom from above" — wisdom that is "first pure, then peaceable, gentle, and easy to be intreated, full of mercy and good fruits, without partiality, and without hypocrisy" (3:17).`
    },
    {
      title_zh: `四、争战的根源与谦卑顺服（4章）`,
      title_en: `IV. The Root of Conflict and Humble Submission (Ch. 4)`,
      content_zh: `雅各第四章深入诊断教会争战的根源，他的诊断直截了当："你们中间的争战斗殴是从哪里来的呢？不是从你们百体中战斗之私欲来的吗？"（4:1）争战不从外部而来，从内心的私欲而来。祷告却没有得着，是因为"妄求，要浪费在你们的宴乐中"（4:3）——祷告的动机错了。

"你们这些淫乱的人哪，岂不知与世俗为友就是与神为敌吗？"（4:4）这是强烈的警告：信徒对这个世界系统的依附，是对神的属灵不贞。恩典的答案是谦卑："神阻挡骄傲的人，赐恩给谦卑的人。故此，你们要顺服神，务要抵挡魔鬼，魔鬼就必离开你们逃跑了。"（4:6-7）

雅各也严肃地提醒人生的短暂："你们的生命是什么呢？你们原来是一片云雾，出现少时就不见了。"（4:14）因此一切计划都要说"主若愿意，我们就可以活着，也可以做这事或那事"（4:15）。谦卑不只是对神的态度，也是对未来不确定性的诚实承认。`,
      content_en: `James chapter 4 diagnoses the root of conflict in the church with directness: "From whence come wars and fightings among you? come they not hence, even of your lusts that war in your members?" (4:1). Conflict does not come from outside but from inner desires. Prayers go unanswered because they are "asked amiss, that ye may consume it upon your lusts" (4:3) — the motivation for prayer is wrong.

"Ye adulterers and adulteresses, know ye not that the friendship of the world is enmity with God?" (4:4). This is a sharp warning: a believer's attachment to the world's system is spiritual unfaithfulness to God. The answer of grace is humility: "God resisteth the proud, but giveth grace unto the humble. Submit yourselves therefore to God. Resist the devil, and he will flee from you." (4:6-7).

James also solemnly reminds us of life's brevity: "For what is your life? It is even a vapour, that appeareth for a little time, and then vanisheth away." (4:14). Therefore all plans should be qualified with "If the Lord will, we shall live, and do this, or that" (4:15). Humility is not only an attitude toward God but an honest acknowledgment of our uncertain future.`
    },
    {
      title_zh: `五、对富人的警告与祷告的大能（5章）`,
      title_en: `V. Warning to the Rich and the Power of Prayer (Ch. 5)`,
      content_zh: `雅各书第五章以对不义富人的严厉警告开始——他们积存的金银会作见证，他们克扣工人的工价"达到万军之主的耳中"（5:4）。这不是对富裕本身的谴责，而是对靠不义手段积累财富、漠视穷人的罪的严肃控诉。

然后雅各转向受苦的信徒，用农夫等候雨水的例子呼吁忍耐（5:7）："你们也当忍耐，坚固你们的心，因为主来的日子近了。"（5:8）约伯的忍耐和主最终赐福给他，是信徒在苦难中的确据（5:11）。

全书以祷告的大能作结，是雅各书最著名的段落之一：

"你们中间有病了的呢，他就该请教会的长老来，他们可以奉主的名用油抹他，为他祷告；出于信心的祷告要救那病人，主必叫他起来；他若犯了罪，也必蒙赦免。"（雅各书 5:14-15）

以利亚是"与我们一样性情的人"（5:17），却能用祷告止住雨水三年半——这说明祷告的大能不在于祷告者的特殊地位，而在于那位听祷告的神。"义人祈祷所发的力是大有功效的"（5:16）——这是雅各书对每一位信徒的激励与邀请。`,
      content_en: `James chapter 5 opens with a sharp warning to unjust rich men — their stored gold and silver will testify against them, and the wages they withheld from workers "have entered into the ears of the Lord of sabaoth" (5:4). This is not a condemnation of wealth itself but a solemn indictment of the sin of unjustly acquiring riches and ignoring the poor.

James then turns to suffering believers, using the farmer's patient waiting for rain as an example: "Be ye also patient; stablish your hearts: for the coming of the Lord draweth nigh." (5:8). Job's endurance and the Lord's ultimate blessing upon him is the believer's assurance in suffering (5:11).

The book concludes with the power of prayer, one of James's most famous passages:

"Is any sick among you? let him call for the elders of the church; and let them pray over him, anointing him with oil in the name of the Lord: And the prayer of faith shall save the sick, and the Lord shall raise him up; and if he have committed sins, they shall be forgiven him." (James 5:14-15, KJV)

Elijah was "a man subject to like passions as we are" (5:17), yet through prayer stopped rain for three and a half years — this shows the power of prayer lies not in the prayer's special status but in the God who hears. "The effectual fervent prayer of a righteous man availeth much" (5:16) — this is James's encouragement and invitation to every believer.`
    }
  ];

const overview = {
  zh: `雅各书是新约最早期的书信之一，作者是主的兄弟雅各，写给流散在外的犹太基督徒。这封书信极具实践性，被比作新约的箴言书，着重论述信仰如何落实在日常生活中：如何面对试炼、如何对待穷人、信心与行为的关系、控制舌头、谦卑、祷告的力量。改革宗传统认为雅各书与保罗书信不冲突——两人强调的是信仰的不同方面。`,
  en: `James is one of the earliest New Testament letters, written by James the brother of the Lord to Jewish Christians scattered abroad. This intensely practical letter is often compared to the New Testament Proverbs, emphasizing how faith is lived out in daily life: handling trials, treating the poor, the relationship of faith and works, controlling the tongue, humility, and the power of prayer. The Reformed tradition holds that James does not contradict Paul — the two emphasize different aspects of the same faith.`,
};

const outline = [
  ["1章", `试炼、智慧与真道的实行者`, "Ch. 1", `Trials, Wisdom, and Doers of the Word`],
  ["2章", `不偏待人与信心行为的关系`, "Ch. 2", `Impartiality and the Relationship of Faith and Works`],
  ["3章", `舌头的制服与从上头来的智慧`, "Ch. 3", `Taming the Tongue and Wisdom from Above`],
  ["4章", `争战的根源与谦卑顺服神`, "Ch. 4", `The Root of Conflict and Humble Submission to God`],
  ["5章", `警告富人、忍耐苦难与祷告的力量`, "Ch. 5", `Warning to the Rich, Patience in Suffering, and the Power of Prayer`],
];

const theology = {
  title_zh: `核心神学：信心与行为——活的信心必结果子`,
  title_en: `Core Theology: Faith and Works — Living Faith Must Bear Fruit`,
  content_zh: `雅各书被路德称为"稻草书信"，但它与保罗的因信称义并不矛盾——雅各攻击的是没有行为的死信心，而非保罗所说的真信心。

第一，信心没有行为是死的。"信心若没有行为就是死的"（2:26）。雅各不是在说靠行为得救——他是在说，真信心必然产生行为。亚伯拉罕"把他儿子以撒献在坛上，岂不是因行为称义吗？"（2:21）——这里的"称义"不是法庭上的宣告（保罗的用法），而是在人面前的证明。保罗说信心使人在神面前称义；雅各说行为证明信心在人面前是真的。两者互补，不矛盾。

第二，舌头的能力。"舌头就是火，在我们百体中，舌头是个罪恶的世界"（3:6）。"舌头在百体里也是最小的，却能说大话"（3:5）。雅各对言语的警告在社交媒体时代尤其有力——一条推文可以毁掉一生的名誉。"颂赞和咒诅从一个口里出来。我的弟兄们，这是不应当的"（3:10）。

第三，听道行道。"只是你们要行道，不要单单听道"（1:22）。雅各是实践神学家——他关心的不是抽象的教义辩论，而是信仰如何落实在日常生活中。"在神我们的父面前，那清洁没有玷污的虔诚，就是看顾在患难中的孤儿寡妇"（1:27）。真正的敬虔不是在教会里表现属灵，而是在日常生活中活出爱。`,
  content_en: `James was called an "epistle of straw" by Luther, but it does not contradict Paul's justification by faith — James attacks dead faith without works, not the living faith Paul describes.

First, faith without works is dead. "Faith without works is dead" (2:26). James is not saying works save — he is saying true faith inevitably produces works. "Was not Abraham our father justified by works, when he had offered Isaac his son upon the altar?" (2:21) — "justified" here is not a courtroom verdict (Paul's usage) but a demonstration before people. Paul says faith justifies before God; James says works prove faith is genuine before men. The two are complementary, not contradictory.

Second, the power of the tongue. "The tongue is a fire, a world of iniquity" (3:6). "The tongue is a little member, and boasteth great things" (3:5). James's warning about speech is especially powerful in the social media age — one tweet can destroy a lifetime reputation. "Out of the same mouth proceedeth blessing and cursing. My brethren, these things ought not so to be" (3:10).

Third, be doers of the word. "Be ye doers of the word, and not hearers only" (1:22). James is a practical theologian — he cares not about abstract doctrinal debates but how faith is lived out in daily life. "Pure religion and undefiled before God and the Father is this, To visit the fatherless and widows in their affliction" (1:27). True godliness is not appearing spiritual in church but living out love in everyday life.`,
};

const keyVerse = {
  zh: `"这样，信心若没有行为就是死的。"（雅各书 2:17）`,
  en: `"Even so faith, if it hath not works, is dead, being alone." (James 2:17, KJV)`,
};

const info = { nameZh: `雅各书`, nameEn: `James`, author: `主的兄弟雅各`, date: `约公元45-49年`, chapters: `5章`, backHref: `/new-testament/general`, backLabel: `普通书信`, bibleId: `JAS` };


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
