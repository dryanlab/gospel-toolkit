'use client';
import Link from 'next/link';
import SpeakButton from '@/components/SpeakButton';
import { useState } from 'react';

const sections = [
  {
    title_zh: `一、先知的质问与神的回答（1章）`,
    title_en: `I. The Prophet's Question and God's Answer (Ch. 1)`,
    content_zh: `哈巴谷书以先知向神发出的坦率质问开始——"耶和华啊，我呼求你，你不应允，要到几时呢？我因强暴哀求你，你还不拯救"（1:2）。哈巴谷看到犹大社会的不公义——强暴、罪孽、奸恶、争端——却看不到神在做什么。

神的回答出人意料："我在你们中间行一件事，虽有人告诉你们，你们总是不信"（1:5）。神要兴起迦勒底人（巴比伦）来审判犹大——一个更邪恶的民族来惩罚以色列！

这引出了哈巴谷更深的困惑——第二个质问："你眼目清洁，不看邪僻，不看奸恶；行诡诈的，你为何看着不理呢？恶人吞灭比自己公义的，你为何静默不语呢？"（1:13）换句话说：用更坏的人来惩罚坏人，这算什么公义？

哈巴谷的质问是信仰中最深刻的问题之一——如果神是公义的，为什么世界如此不公？哈巴谷没有压抑自己的疑问，而是直接带到神面前——这本身就是信心的表现。`,
    content_en: `Habakkuk opens with the prophet's candid challenge to God — "O LORD, how long shall I cry, and thou wilt not hear! even cry out unto thee of violence, and thou wilt not save!" (1:2). Habakkuk saw Judah's social injustice — violence, iniquity, wickedness, strife — yet saw no divine response.

God's answer was unexpected: "Behold ye among the heathen, and regard, and wonder marvellously: for I will work a work in your days, which ye will not believe, though it be told you" (1:5). God would raise up the Chaldeans (Babylonians) to judge Judah — a more wicked nation to punish Israel!

This prompts Habakkuk's deeper perplexity — a second challenge: "Thou art of purer eyes than to behold evil, and canst not look on iniquity: wherefore lookest thou upon them that deal treacherously, and holdest thy tongue when the wicked devoureth the man that is more righteous than he?" (1:13). In other words: using worse people to punish bad people — how is that justice?

Habakkuk's challenge is one of faith's deepest questions — if God is just, why is the world so unjust? Habakkuk did not suppress his doubt but brought it directly to God — this itself is an expression of faith.`,
  },
  {
    title_zh: `二、义人必因信得生（2章）`,
    title_en: `II. The Just Shall Live by Faith (Ch. 2)`,
    content_zh: `第二章开头，哈巴谷说"我要站在守望所，立在望楼上观看，看耶和华对我说什么话"（2:1）。他不是怒气冲冲地离开，而是静候神的回答——这是成熟信仰的标志。

神的回答是全书最核心的一句话："迦勒底人自高自大，心不正直；惟义人因信得生"（2:4）。这短短一句话成为了新约神学的基石——保罗在罗马书1:17和加拉太书3:11引用它来阐述因信称义的教义；希伯来书10:38也引用此节鼓励信徒坚持信心。

"义人因信得生"不只是说信心使人称义（虽然这是保罗的应用），在原始语境中也包含：在看不见公义实现的时候，义人仍然凭信心活下去。信心不是在一切都合理时才相信，而是在一切都不合理时仍然信靠。

第二章接着宣布对巴比伦的五个"祸哉"——贪婪（2:6-8）、不义之财（2:9-11）、流血建城（2:12-14）、使邻邦醉酒（2:15-17）、偶像崇拜（2:18-19）。巴比伦虽被神使用，但它自己的罪也必受审判。

全章以庄严的宣告结束："惟耶和华在他的圣殿中；全地的人都当在他面前肃敬静默"（2:20）。当你不明白神在做什么的时候，当安静等候。`,
    content_en: `Chapter 2 opens with Habakkuk saying "I will stand upon my watch, and set me upon the tower, and will watch to see what he will say unto me" (2:1). He does not storm off in anger but waits quietly for God's answer — the mark of mature faith.

God's answer is the book's most central statement: "Behold, his soul which is lifted up is not upright in him: but the just shall live by his faith" (2:4). This single sentence became a cornerstone of New Testament theology — Paul cites it in Romans 1:17 and Galatians 3:11 to expound justification by faith; Hebrews 10:38 also quotes it to encourage believers' perseverance.

"The just shall live by faith" means not only that faith justifies (though that is Paul's application), but in its original context also: when justice is nowhere to be seen, the righteous still live by faith. Faith is not believing when everything makes sense but trusting when nothing does.

Chapter 2 then pronounces five "woes" against Babylon — greed (2:6–8), unjust gain (2:9–11), building a city with bloodshed (2:12–14), making neighbors drunk (2:15–17), and idolatry (2:18–19). Though God used Babylon, its own sins would also face judgment.

The chapter ends with a solemn declaration: "But the LORD is in his holy temple: let all the earth keep silence before him" (2:20). When you do not understand what God is doing — be still and wait.`,
  },
  {
    title_zh: `三、哈巴谷的祷告与信心之歌（3章）`,
    title_en: `III. Habakkuk's Prayer and Song of Faith (Ch. 3)`,
    content_zh: `第三章是一首壮丽的祷告诗歌，以音乐指示开始和结束（"流离歌"、"交与伶长"），说明它是为圣殿敬拜而写的。

哈巴谷回顾神在历史中的大能作为——从西奈而来的荣耀（3:3）、分开红海的神迹（3:15概意）。这不是逃避现实，而是用历史的经验来坚固当下的信心：过去拯救以色列的神，现在仍然掌权。

全书最高潮是最后三节——哈巴谷的信心宣告："虽然无花果树不发旺，葡萄树不结果，橄榄树也不效力，田地不出粮食，圈中绝了羊，棚内也没有牛；然而，我要因耶和华欢欣，因救我的神喜乐。主耶和华是我的力量；他使我的脚快如母鹿的蹄，又使我稳行在高处"（3:17-19）。

这是圣经中最伟大的信心宣告之一。无花果树不发旺、葡萄不结果、没有羊没有牛——物质上一无所有。"然而"——这个转折词承载了整卷书的信息。环境没有改变，问题没有解答，但先知的心已经从质疑转为敬拜。这就是信心：不是因为环境好所以赞美，而是虽然环境糟糕仍然赞美。`,
    content_en: `Chapter 3 is a magnificent prayer-psalm, bookended by musical notations ("upon Shigionoth," "to the chief singer"), indicating it was written for temple worship.

Habakkuk reviews God's mighty acts in history — the glory from Sinai (3:3), the parting of the Red Sea (3:15). This is not escapism but using historical experience to strengthen present faith: the God who saved Israel in the past still reigns now.

The book's climax is the final three verses — Habakkuk's declaration of faith: "Although the fig tree shall not blossom, neither shall fruit be in the vines; the labour of the olive shall fail, and the fields shall yield no meat; the flock shall be cut off from the fold, and there shall be no herd in the stalls: Yet I will rejoice in the LORD, I will joy in the God of my salvation. The Lord GOD is my strength, and he will make my feet like hinds" feet, and he will make me to walk upon mine high places' (3:17–19).

This is one of Scripture's greatest declarations of faith. Fig trees not blossoming, no grapes, no olives, no sheep, no cattle — materially nothing. "Yet" — this single conjunction carries the book's entire message. Circumstances unchanged, questions unanswered, yet the prophet's heart has moved from questioning to worship. This is faith: not praising because circumstances are good, but praising though circumstances are terrible.`,
  },
  {
    title_zh: `四、"义人因信得生"：哈巴谷与宗教改革`,
    title_en: `IV. "The Just Shall Live by Faith": Habakkuk and the Reformation`,
    content_zh: `哈巴谷书2:4——"义人因信得生"——是整个基督教历史上最具影响力的旧约经文之一。保罗在罗马书1:17、加拉太书3:11引用此节，希伯来书10:38也引用此节，赋予了这七个字以新约神学的核心地位。

马丁路德读到罗马书1:17对哈巴谷2:4的引用时，经历了属灵的突破——"义人因信得生"意味着人在神面前的义不是靠行为挣来的，而是因信得着的。这一洞见点燃了十六世纪的宗教改革，改变了整个西方的历史轨迹。一句来自小先知书的经文，借着保罗，借着路德，塑造了现代文明。

但哈巴谷的原初语境不可忽视：他是在问"神啊，你在哪里？你为什么沉默？"的处境下得到这个答案的。"义人因信得生"不只是称义的方式，更是苦难中持守的方式——当神的作为让人困惑，当公义看来迟迟不来，义人靠的是对那位不可见之神的信心，而不是眼前可见的证据。

这种"在黑暗中的信心"是哈巴谷书最宝贵的礼物。宗教改革拯救了称义教义，哈巴谷书则进一步教导我们：这信心不是在顺境中的理论，而是在苦难中的锚。"然而，我要因耶和华欢欣"（3:18）——这是基督徒最深处的信仰告白。`,
    content_en: `Habakkuk 2:4 — "the just shall live by his faith" — is one of the most influential Old Testament verses in all of Christian history. Paul quotes it in Romans 1:17 and Galatians 3:11; Hebrews 10:38 also cites it, giving these few words a central place in New Testament theology.

When Martin Luther read Romans 1:17's quotation of Habakkuk 2:4, he experienced a spiritual breakthrough: "the just shall live by faith" means that a person's righteousness before God is not earned by works but received through faith. This insight ignited the sixteenth-century Reformation, altering the entire trajectory of Western history. A single verse from a Minor Prophet, through Paul and through Luther, shaped modern civilization.

But Habakkuk's original context must not be overlooked: he received this answer while asking "God, where are you? Why are you silent?" "The just shall live by faith" is not only the means of justification but the means of persevering in suffering — when God's ways are perplexing and justice seems long delayed, the righteous live by faith in the unseen God rather than visible evidence.

This "faith in the dark" is Habakkuk's most precious gift. The Reformation rescued the doctrine of justification; Habakkuk further teaches us that this faith is not a fair-weather theory but an anchor in suffering. "Yet I will rejoice in the LORD" (3:18) — this is the Christian's deepest confession of faith.`,
  },
];

const overview = {
  zh: `哈巴谷书（3章）是小先知书中最独特的一卷——它不是先知对百姓讲道，而是先知与神之间的对话。哈巴谷大约在公元前609-605年事奉，正值犹大面临巴比伦威胁之际。

全书结构是：质问→回答→再质问→再回答→祷告赞美。哈巴谷教导我们：把疑问带到神面前不是不信，而是信心最真实的表达。"义人因信得生"（2:4）成为了整个基督教信仰的核心经文之一。`,
  en: `Habakkuk (3 chapters) is the most unique Minor Prophet — not a prophet preaching to people but a dialogue between prophet and God. Habakkuk ministered around 609–605 BC as Judah faced Babylonian threat.

The structure: question → answer → deeper question → answer → prayer of praise. Habakkuk teaches: bringing doubts before God is not unbelief but faith's most authentic expression. "The just shall live by his faith" (2:4) became one of Christianity's core verses.`,
};

const outline = [
  ["1:1-4", "第一次质问：为何不管犹大的罪？", "Ch. 1:1–4", "First Question: Why Tolerate Judah's Sin?"],
  ["1:5-11", "神的回答：兴起巴比伦", "Ch. 1:5–11", "God's Answer: Raising Babylon"],
  ["1:12-2:1", "第二次质问：为何用更恶的审判？", "Ch. 1:12–2:1", "Second Question: Why Use the More Wicked?"],
  ["2:2-20", "义人因信得生与五个祸哉", "Ch. 2:2–20", "The Just by Faith; Five Woes"],
  ["3章", "信心的祷告与赞美", "Ch. 3", "Prayer and Praise of Faith"],
];

const keyVerse = {
  zh: `"惟义人因信得生。"（哈巴谷书 2:4）`,
  en: `"The just shall live by his faith." (Habakkuk 2:4)`,
};

const info = { nameZh: `哈巴谷书`, nameEn: `Habakkuk`, author: `哈巴谷`, date: `约公元前609-605年`, chapters: `3章`, backHref: `/old-testament/minor-prophets`, backLabel: `小先知书`, bibleId: `HAB` };

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