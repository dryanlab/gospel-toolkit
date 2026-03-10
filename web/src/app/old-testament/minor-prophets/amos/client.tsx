'use client';
import Link from 'next/link';
import SpeakButton from '@/components/SpeakButton';
import { useState } from 'react';

const sections = [
  {
    title_zh: `一、列国与犹大、以色列的审判（1-2章）`,
    title_en: `I. Judgment on Nations, Judah, and Israel (Ch. 1–2)`,
    content_zh: `阿摩司书以一种独特的修辞技巧开场——先宣告对以色列周边列国的审判：大马士革、迦萨、推罗、以东、亚扪、摩押，每次都用"为了三次的罪，甚至四次"（"三三四四"的公式，表示罪孽满盈）。听众可能觉得"说得好！审判这些外邦人！"

然后阿摩司话锋一转——审判犹大（2:4-5），再审判以色列（2:6-16）。以色列被控诉的罪具体而刺耳："他们为银子卖了义人，为一双鞋卖了穷人"（2:6下）。阿摩司是一位来自农村的先知，他的信息直接指向社会的不义——欺压穷人、剥削弱势群体。

这种"螺旋式收网"的修辞策略至今仍有力量——先让人认同对别人的批判，再把批判转向听众自己。`,
    content_en: `Amos opens with a distinctive rhetorical technique — first announcing judgment on Israel's neighbors: Damascus, Gaza, Tyre, Edom, Ammon, Moab, each using the formula "For three transgressions... and for four" (indicating sin overflowing). The audience likely thought, "Well said! Judge those nations!"

Then Amos pivots — judgment on Judah (2:4–5), then Israel (2:6–16). Israel's indictment is specific and sharp: "They sold the righteous for silver, and the poor for a pair of shoes" (2:6). Amos was a rural prophet; his message targets social injustice directly — oppressing the poor, exploiting the vulnerable.

This "spiral net" rhetorical strategy remains powerful today — first gaining agreement about judging others, then turning the judgment on the audience itself.`,
  },
  {
    title_zh: `二、对以色列的控诉——宗教与公义（3-6章）`,
    title_en: `II. Indictment of Israel — Religion and Justice (Ch. 3–6)`,
    content_zh: `阿摩司的核心信息在三到六章集中呈现。第三章以一个逻辑问题开始："二人若不同心，岂能同行呢？"（3:3）——神呼召了以色列，以色列的受判更重。"在地上万族中，我只认识你们，因此，我必追讨你们的一切罪孽"（3:2）。拣选不是特权，而是责任。

第四章充满讽刺——"巴珊的母牛"（4:1，指撒马利亚贵妇的讽称）压迫穷人、向丈夫要酒喝。神讽刺地邀请他们到伯特利和吉甲"犯罪"——"既然你们喜爱这样，就来吧"（4:4）。阿摩司对伯特利和吉甲的祭祀持批判态度——那些地方已经成了宗教腐败的中心。

第五章包含了全书最重要的信息之一："惟愿公平如大水滚滚，使公义如江河滔滔"（5:24）——马丁·路德·金在1963年的"我有一个梦想"演讲中引用了这句话。这是阿摩司的神学核心：神不要宗教仪式，神要社会公义。敬拜若与公义脱节，就是神所憎恶的。

"耶和华的日子"在五至六章成为审判的宣告——"想望耶和华日子来到的有祸了！你们为何想望耶和华的日子呢？那日黑暗没有光明"（5:18）。以色列以为神必保护自己，阿摩司说：神的日子对悖逆的以色列是审判，不是救恩。`,
    content_en: `Amos's core message is concentrated in chapters 3–6. Chapter 3 opens with a logical question: "Can two walk together, except they be agreed?" (3:3) — God called Israel; Israel's judgment is all the greater. "You only have I known of all the families of the earth: therefore I will punish you for all your iniquities" (3:2). Election is not privilege but responsibility.

Chapter 4 is full of irony — "ye kine of Bashan" (4:1, a sarcastic reference to Samaria's noblewomen) oppress the poor and demand wine from their husbands. God sarcastically invites them to Bethel and Gilgal to "transgress" — "Come to Bethel, and transgress; at Gilgal multiply transgression" (4:4). Amos is critical of Bethel and Gilgal's sacrifices — those places had become centers of religious corruption.

Chapter 5 contains the book's most important message: "But let judgment run down as waters, and righteousness as a mighty stream" (5:24) — Martin Luther King Jr. quoted this in his 1963 "I Have a Dream" speech. This is Amos's theological core: God does not want religious ritual; God demands social justice. Worship detached from justice is what God detests.

"The day of the LORD" in chapters 5–6 becomes a judgment declaration — "Woe unto you that desire the day of the LORD! to what end is it for you? the day of the LORD is darkness, and not light" (5:18). Israel assumed God would protect them; Amos says God's day means judgment on rebellious Israel, not salvation.`,
  },
  {
    title_zh: `三、五个异象与恢复的应许（7-9章）`,
    title_en: `III. Five Visions and the Promise of Restoration (Ch. 7–9)`,
    content_zh: `第七至九章包含五个审判异象：蝗虫（7:1-3）、火（7:4-6）、准绳（7:7-9）、夏天的果子（8:1-3）和坛旁的主（9:1-4）。每个异象都揭示神即将执行的审判。

阿摩司与伯特利的祭司亚玛谢之间的冲突（7:10-17）是整卷书的历史核心。亚玛谢要求阿摩司离开，回到犹大去靠讲道谋生。阿摩司回答：他原来不是先知，也不是先知的门徒，他是一个牧羊的和修理桑树的——神把他从羊群后召来。阿摩司的服事不是职业，而是神的差遣。

第八章的"夏天的果子"（希伯来文qayits）与"结局"（希伯来文qets）谐音——以色列已经成熟，可以被摘取了。"耶和华神说：那日，我必使日头在午间落下，使地在白昼黑暗"（8:9）——这预表末日的黑暗，也令人想到基督受难时从午正到申初的黑暗。

全书以令人惊喜的复兴应许结束："我必建立大卫倒塌的帐幕……我必将被掳的以色列人带回"（9:11,14）。使徒行传15:16-17在耶路撒冷会议上引用此段，支持外邦人进入教会。从审判到复兴——这是阿摩司书的弧线，也是整本圣经的弧线。`,
    content_en: `Chapters 7–9 contain five judgment visions: locusts (7:1–3), fire (7:4–6), a plumb line (7:7–9), summer fruit (8:1–3), and the Lord beside the altar (9:1–4). Each reveals the judgment God is about to execute.

The confrontation between Amos and Amaziah the priest of Bethel (7:10–17) is the book's historical core. Amaziah demanded Amos leave and return to Judah to earn his living by prophesying. Amos replied: he was no prophet, nor a prophet's son — he was a herdsman and tender of sycamore trees; God took him from behind the flock. Amos's ministry was not a profession but God's commission.

Chapter 8's "summer fruit" (Hebrew qayits) is a wordplay on "end" (Hebrew qets) — Israel was ripe for harvest. "And it shall come to pass in that day, saith the Lord GOD, that I will cause the sun to go down at noon, and I will darken the earth in the clear day" (8:9) — foreshadowing eschatological darkness and evoking the darkness at the crucifixion from the sixth to ninth hour.

The book ends with a surprising promise of restoration: "In that day will I raise up the tabernacle of David that is fallen... And I will bring again the captivity of my people of Israel" (9:11, 14). Acts 15:16–17 cited this passage at the Jerusalem Council to support Gentiles entering the church. From judgment to restoration — this is Amos's arc, and the arc of all Scripture.`,
  },

{
    title_zh: `四、五个异象与余民的盼望（7-9章）`,
    title_en: `IV. Five Visions and the Remnant's Hope (Ch. 7-9)`,
    content_zh: `阿摩司书最后三章包含五个异象：蝗虫（7:1-3）、火（7:4-6）、准绳（7:7-9）、夏天的果子（8:1-3）、祭坛被击打（9:1-4）。前两个异象中阿摩司代求，神就后悔不降灾（7:3, 6）——先知的代求能改变神的行动。后三个异象中审判已成定局。

"准绳"的异象意味着神要量以色列——看它是否合乎标准。答案是否定的。审判不是任意的，而是按照公义的标准衡量的结果。

然而全书以盼望结束。"到那日，我必建立大卫倒塌的帐幕"（9:11）——使徒行传15:16引用这节经文，宣告外邦人归入教会就是这预言的应验。阿摩司的信息是：公义的审判和恩典的恢复不是矛盾的，而是同一位神的两面。"你当预备迎见你的神"（4:12）——这既是警告，也是邀请。`,
    content_en: `The final three chapters of Amos contain five visions: locusts (7:1-3), fire (7:4-6), a plumb line (7:7-9), summer fruit (8:1-3), and the altar struck (9:1-4). In the first two visions Amos interceded and God relented (7:3, 6) -- prophetic intercession can alter God's action. In the last three, judgment is final.

The "plumb line" vision means God would measure Israel -- to see if it meets the standard. The answer was no. Judgment is not arbitrary but the result of measuring against a righteous standard.

Yet the book ends in hope. "In that day will I raise up the tabernacle of David that is fallen" (9:11) -- Acts 15:16 quotes this verse, declaring that Gentiles entering the church fulfills this prophecy. Amos' message: righteous judgment and gracious restoration are not contradictory but two faces of the same God. "Prepare to meet thy God" (4:12) -- this is both warning and invitation.`,
  }
];

const overview = {
  zh: `阿摩司书（9章）是北国以色列全盛时期（约公元前760年，耶罗波安二世统治）的先知书。阿摩司本是从犹大提哥亚来的牧羊人，神差遣他去北国传讲审判。

阿摩司书的核心主题是社会公义——神不容忍欺压穷人的富人，也不接受与不义共存的敬拜。阿摩司教导：真正的信仰必然表现在对社会公义的追求中；若敬拜与生活脱节，那敬拜就是神所憎恶的。`,
  en: `Amos (9 chapters) was written during Northern Israel's peak prosperity (c. 760 BC, under Jeroboam II). Amos was a shepherd from Tekoa in Judah whom God sent to the North to proclaim judgment.

Amos's central theme is social justice — God does not tolerate rich people oppressing the poor, nor worship coexisting with injustice. Amos teaches: genuine faith must manifest in the pursuit of social justice; worship detached from daily life is what God abhors.`,
};

const outline = [
  ["1-2章", "列国与以色列的审判", "Ch. 1–2", "Judgment on Nations and Israel"],
  ["3-4章", "控诉以色列的罪", "Ch. 3–4", "Israel's Sins Indicted"],
  ["5-6章", "公平如大水滚滚", "Ch. 5–6", "Justice Like a Mighty Stream"],
  ["7-8章", "四个审判异象", "Ch. 7–8", "Four Judgment Visions"],
  ["9章", "坛旁的主与复兴应许", "Ch. 9", "Lord by the Altar; Restoration"],
];

const keyVerse = {
  zh: `"惟愿公平如大水滚滚，使公义如江河滔滔。"（阿摩司书 5:24）`,
  en: `"But let judgment run down as waters, and righteousness as a mighty stream." (Amos 5:24)`,
};

const info = { nameZh: `阿摩司书`, nameEn: `Amos`, author: `阿摩司`, date: `约公元前760年`, chapters: `9章`, backHref: `/old-testament/minor-prophets`, backLabel: `小先知书`, bibleId: `AMO` };

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