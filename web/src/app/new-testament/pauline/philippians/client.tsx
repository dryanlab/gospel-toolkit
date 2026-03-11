'use client';
import Link from 'next/link';
import SpeakButton from '@/components/SpeakButton';
import { useState } from 'react';
const sections = [
  {
    title_zh: `一、喜乐中的感谢与监狱里的福音（1章）`,
    title_en: `I. Thanksgiving in Joy and the Gospel in Prison (Ch. 1)`,
    content_zh: `腓立比书是保罗从监狱写给他最亲爱教会的信。"我每逢想念你们，就感谢我的神"（1:3）——这封信从感谢开始，以喜乐贯穿全书，"喜乐"一词出现十六次。

监狱没有熄灭保罗的喜乐，反而使他在最不可能的环境中见证："我所遭遇的事更是叫福音兴旺"（1:12）。御营全军和其余的人因他的被囚都知道了他是为基督而被捆锁的（1:13）。困境成了见证的平台。

"在我活着就是基督，我死了就有益处"（1:21）——这句话只有在以基督为生命中心的人口中才是真实的。保罗不怕死，因为死是进入更深与基督相交的门；他也愿意活着，因为活着能为他们的益处结果子（1:22-24）。`,
    content_en: `Philippians is Paul's letter from prison to his most beloved church. "I thank my God upon every remembrance of you" (1:3) -- this letter begins with thanksgiving and is permeated with joy; the word "joy" or "rejoice" appears sixteen times.

Prison did not extinguish Paul's joy; rather, it became an opportunity for witness: "the things which happened unto me have fallen out rather unto the furtherance of the gospel" (1:12). The whole Praetorian guard and everyone else knew he was bound for Christ (1:13). Difficulty became a platform for testimony.

"For to me to live is Christ, and to die is gain" (1:21) -- these words can only be true on the lips of one whose life centers on Christ. Paul did not fear death, for death is the door to deeper fellowship with Christ; he also willingly lived, for life meant fruitful labor for their sake (1:22-24).`,
  },
  {
    title_zh: `二、以基督的心为心：谦卑与合一（2章）`,
    title_en: `II. Having the Mind of Christ: Humility and Unity (Ch. 2)`,
    content_zh: `第2章是保罗书信中神学最为密集的篇章之一。他从实际的教会生活问题出发——"凡事不可结党，不可贪图虚浮的荣耀；只要存心谦卑，各人看别人比自己强。各人不要单顾自己的事，也要顾别人的事"（2:3-4）——然后引出新约最伟大的基督论诗歌作为谦卑的终极榜样：

"你们当以基督耶稣的心为心：他本有神的形像，不以自己与神同等为强夺的；反倒虚己，取了奴仆的形像，成为人的样式；既有人的样子，就自己卑微，存心顺服，以至于死，且死在十字架上。所以，神将他升为至高，又赐给他那超乎万名之上的名，叫一切在天上的、地上的，和地底下的，因耶稣的名无不屈膝，无不口称耶稣基督为主，使荣耀归与父神。"（2:6-11）

这首诗歌描绘了一个巨大的"V"字形运动：从至高降到至卑（神的形像→奴仆的形像→十字架的死），再从至卑升到至高（被升为至高→万名之上→万膝跪拜）。"虚己"（kenosis）不是说基督放弃了神性，而是说他不以神性的特权为自己谋利——他自愿走向贫穷、软弱和死亡。韦敏斯德信条第八章论基督的"降卑"（humiliation）和"升高"（exaltation）正是基于这段经文。

这首诗歌的上下文是实践性的——"以基督的心为心"。教会中的合一、谦卑、看别人比自己强，不是道德说教，而是效法基督虚己的具体实践。

"就当恐惧战兢做成你们得救的工夫。因为你们立志行事都是神在你们心里运行，为要成就他的美意"（2:12-13）。这里并存着两个真理：人的责任（"做成你们得救的工夫"）和神的主权（"神在你们心里运行"）。改革宗神学不是把两者对立，而是同时持守。提摩太和以巴弗提（2:19-30）是这种舍己精神的活见证——以巴弗提"为做基督的工夫，几乎至死"（2:30）。`,
    content_en: `Chapter 2 is one of the most theologically dense passages in Paul's letters. He starts from practical church life — "Let nothing be done through strife or vainglory; but in lowliness of mind let each esteem other better than themselves. Look not every man on his own things, but every man also on the things of others" (2:3-4) — then introduces the New Testament's greatest Christological hymn as the ultimate model of humility:

"Let this mind be in you, which was also in Christ Jesus: Who, being in the form of God, thought it not robbery to be equal with God: But made himself of no reputation, and took upon him the form of a servant, and was made in the likeness of men: And being found in fashion as a man, he humbled himself, and became obedient unto death, even the death of the cross. Wherefore God also hath highly exalted him, and given him a name which is above every name: That at the name of Jesus every knee should bow, of things in heaven, and things in earth, and things under the earth; And that every tongue should confess that Jesus Christ is Lord, to the glory of God the Father." (2:6-11, KJV)

This hymn traces a great V-shaped movement: from highest to lowest (form of God → form of a servant → death on a cross), then from lowest to highest (highly exalted → name above every name → every knee bowing). "Kenosis" (self-emptying) does not mean Christ abandoned His divinity but that He did not exploit His divine privileges for His own benefit — He voluntarily embraced poverty, weakness, and death. Westminster Confession chapter 8 on Christ's "humiliation" and "exaltation" is grounded precisely in this passage.

The hymn's context is practical — "let this mind be in you." Church unity, humility, and esteeming others are not moral platitudes but concrete imitation of Christ's self-emptying.

"Work out your own salvation with fear and trembling. For it is God which worketh in you both to will and to do of his good pleasure" (2:12-13). Two truths coexist: human responsibility ("work out your salvation") and divine sovereignty ("God worketh in you"). Reformed theology does not oppose these but holds both simultaneously. Timothy and Epaphroditus (2:19-30) are living witnesses of this self-giving spirit — Epaphroditus "for the work of Christ was nigh unto death" (2:30).`,
  },
  {
    title_zh: `三、认识基督：舍弃一切的得着（3章）`,
    title_en: `III. Knowing Christ: Gaining by Losing All (Ch. 3)`,
    content_zh: `保罗的个人见证是第3章的核心。他列举了自己在律法和宗教上的丰厚资本——"割礼上受过的，以色列族，便雅悯支派，希伯来人所生的希伯来人，就律法说，我是法利赛人"（3:5）——然后宣告："只是我先前以为与我有益的，我现在因基督都当作有损的"（3:7）。

"我也将万事当作有损的，因我以认识我主基督耶稣为至宝"（3:8）——"至宝"原文是"超越的价值"。认识基督不是宗教功课，而是一切价值的最高点。

目标是"得着基督"、"效法他的死"、"得以从死里复活"（3:10-11）。保罗还没有达到终点，但他有一件事："忘记背后，努力面前的，向着标竿直跑"（3:13-14）。过去不能成为今天的重担，也不能成为骄傲；眼前的呼召才是前行的动力。`,
    content_en: `Paul's personal testimony is the heart of chapter 3. He lists his credentials in law and religion -- "circumcised the eighth day, of the stock of Israel, of the tribe of Benjamin, an Hebrew of the Hebrews; as touching the law, a Pharisee" (3:5) -- then declares: "But what things were gain to me, those I counted loss for Christ" (3:7).

"I count all things but loss for the excellency of the knowledge of Christ Jesus my Lord" (3:8) -- "excellency" means "surpassing value." Knowing Christ is not a religious duty but the highest point of all value.

The goal is to "win Christ," to know "the power of his resurrection, and the fellowship of his sufferings," to "attain unto the resurrection of the dead" (3:10-11). Paul has not yet arrived, but has one thing: "forgetting those things which are behind, and reaching forth unto those things which are before, I press toward the mark" (3:13-14). The past cannot be today's burden or pride; the calling ahead is the motive for pressing on.`,
  },
  {
    title_zh: `四、平安与满足：喜乐的秘诀（4章）`,
    title_en: `IV. Peace and Contentment: The Secret of Joy (Ch. 4)`,
    content_zh: `第4章是全书喜乐主题的高峰和结尾。"你们要靠主常常喜乐"（4:4）——不是命令感情，而是指向喜乐的根基：靠主。"应当一无挂虑，只要凡事藉着祷告、祈求，和感谢，将你们所要的告诉神"（4:6）。祷告不是向神发号施令，而是在神面前卸下重担。

"神所赐出人意外的平安，必在基督耶稣里保守你们的心怀意念"（4:7）——这是圣经中最著名的平安应许。平安不来自环境的改变，而来自神的保守。

保罗的满足宣言是全书的实践高峰："我学会了，无论在什么状态可以知足"（4:11）。满足是"学会的"，不是天生的。"我靠着那加给我力量的，凡事都能做"（4:13）——这句话不是成功学口号，而是在软弱中靠神的力量前行的信仰告白。`,
    content_en: `Chapter 4 is the climax and conclusion of the book's joy theme. "Rejoice in the Lord alway" (4:4) -- not commanding an emotion but pointing to joy's foundation: in the Lord. "Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God" (4:6). Prayer is not giving orders to God but laying down burdens before Him.

"The peace of God, which passeth all understanding, shall keep your hearts and minds through Christ Jesus" (4:7) -- Scripture's most famous promise of peace. Peace comes not from changed circumstances but from God's keeping.

Paul's declaration of contentment is the book's practical summit: "I have learned, in whatsoever state I am, therewith to be content" (4:11). Contentment is "learned," not innate. "I can do all things through Christ which strengtheneth me" (4:13) -- not a self-help slogan but a confession of faith: pressing forward in weakness through God's strength.`,
  },
]
const overview = { zh: `腓立比书（4章）是保罗在罗马监狱中写给腓立比教会的书信（约公元61年）。腓立比教会是保罗在欧洲建立的第一间教会（徒16章），与保罗关系最亲密。这封信的主题是喜乐——不是因为环境好，而是因为在基督里。保罗在监狱中写出了新约最喜乐的书信，证明喜乐不取决于环境。`, en: `Philippians (4 chapters) was written by Paul from a Roman prison to the Philippian church (c. AD 61). Philippi was the first European church Paul founded (Acts 16) and his closest congregation. The theme is joy — not because circumstances are good but because of being in Christ. Paul wrote the New Testament's most joyful letter from prison, proving joy does not depend on circumstances.` };
const outline = [[`1章`,`活着就是基督`,`Ch. 1`,`To Live Is Christ`],[`2章`,`基督的虚己`,`Ch. 2`,"Christ's Kenosis"],[`3章`,`以认识基督为至宝`,`Ch. 3`,`Knowing Christ as Supreme`],[`4章`,`靠主喜乐与知足`,`Ch. 4`,`Joy and Contentment in the Lord`]];
const keyVerse = { zh: `"我靠着那加给我力量的，凡事都能做。"（腓立比书 4:13）`, en: `"I can do all things through Christ which strengtheneth me." (Philippians 4:13)` };
const info = { nameZh: `腓立比书`, nameEn: `Philippians`, author: `使徒保罗`, date: `约公元61年`, chapters: `4章`, backHref: `/new-testament/pauline`, backLabel: `保罗书信`, bibleId: `PHP` };
export default function BookGuide() { const [expandedIdx, setExpandedIdx] = useState<number | null>(null); return (<div className="max-w-4xl mx-auto px-4 py-8"><Link href={info.backHref} className="inline-flex items-center gap-1 text-sm text-[var(--color-accent)] hover:underline mb-6">← {info.backLabel}</Link><div className="text-center mb-10"><span className="text-5xl mb-4 block">📖</span><h1 className="font-serif-cn text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-2">{info.nameZh}导读</h1><p className="text-base text-[var(--color-text-secondary)] italic mb-4">A Guide to {info.nameEn}</p><div className="flex justify-center gap-4 text-xs text-[var(--color-text-secondary)]"><span>✍️ 作者：{info.author}</span><span>📅 {info.date}</span><span>📄 {info.chapters}</span></div></div><div className="mb-10 p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)]"><h2 className="font-serif-cn text-lg font-bold text-[var(--color-text)] mb-3">📋 全书概览</h2><div className="flex items-start gap-2 mb-3"><SpeakButton text={overview.zh} lang="zh" /><p className="text-sm text-[var(--color-text)] leading-relaxed font-serif-cn">{overview.zh}</p></div><div className="flex items-start gap-2"><SpeakButton text={overview.en} lang="en" /><p className="text-xs text-[var(--color-text-secondary)] italic leading-relaxed">{overview.en}</p></div></div><div className="mb-10 p-5 rounded-xl bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border border-amber-200 dark:border-amber-800"><p className="text-sm font-bold text-amber-800 dark:text-amber-300 mb-1">🔑 金句 Key Verse</p><p className="font-serif-cn text-base text-[var(--color-text)] font-bold leading-relaxed">{keyVerse.zh}</p><p className="text-sm text-[var(--color-text-secondary)] italic mt-1">{keyVerse.en}</p></div><div className="mb-6"><h2 className="font-serif-cn text-xl font-bold text-[var(--color-text)] mb-1">📚 分段导读</h2><p className="text-xs text-[var(--color-text-secondary)] italic mb-4">Section-by-Section Guide</p></div><div className="space-y-4">{sections.map((sec, i) => (<div key={i} className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] overflow-hidden"><button onClick={() => setExpandedIdx(expandedIdx === i ? null : i)} className="w-full flex items-center justify-between px-6 py-4 text-left cursor-pointer hover:bg-[var(--color-accent)]/5 transition-colors"><div><h3 className="font-serif-cn text-base font-bold text-[var(--color-text)]">{sec.title_zh}</h3><p className="text-xs text-[var(--color-text-secondary)] italic">{sec.title_en}</p></div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-5 h-5 text-[var(--color-text-secondary)] transition-transform ${expandedIdx === i ? 'rotate-180' : ''}`}><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" /></svg></button>{expandedIdx === i && (<div className="px-6 pb-5 border-t border-[var(--color-border)]"><div className="flex items-start gap-2 mt-4 mb-4"><SpeakButton text={sec.content_zh} lang="zh" /><p className="text-sm text-[var(--color-text)] leading-relaxed font-serif-cn whitespace-pre-line">{sec.content_zh}</p></div><div className="flex items-start gap-2"><SpeakButton text={sec.content_en} lang="en" /><p className="text-xs text-[var(--color-text-secondary)] italic leading-relaxed whitespace-pre-line">{sec.content_en}</p></div></div>)}</div>))}</div><div className="mt-10 p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)]"><h2 className="font-serif-cn text-lg font-bold text-[var(--color-text)] mb-4">🗂️ 章节大纲</h2>{(() => { const half = Math.ceil(outline.length / 2); const col1 = outline.slice(0, half); const col2 = outline.slice(half); const renderItem = ([zh, desc, chEn, descEn]: string[], i: number) => (<div key={i} className="py-1.5 border-b border-[var(--color-border)]/30 last:border-b-0"><div className="flex items-baseline gap-2"><span className="font-bold text-[var(--color-accent)] min-w-[65px] shrink-0">{zh}</span><span className="text-[var(--color-text)]">{desc}</span></div><div className="flex items-baseline gap-2 mt-0.5"><span className="text-[var(--color-text-secondary)] text-xs italic min-w-[65px] shrink-0">{chEn}</span><span className="text-[var(--color-text-secondary)] text-xs italic">{descEn}</span></div></div>); return (<div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 text-sm"><div>{col1.map((item, i) => renderItem(item, i))}</div><div>{col2.map((item, i) => renderItem(item, i + half))}</div></div>); })()}</div><div className="mt-8 text-center"><Link href={`/bible/${info.bibleId}`} className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--color-accent)] text-white font-bold hover:opacity-90 transition-opacity">📖 阅读{info.nameZh} Read {info.nameEn}</Link></div></div>); }