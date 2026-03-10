'use client';
import Link from 'next/link';
import SpeakButton from '@/components/SpeakButton';
import { useState } from 'react';

const sections = [
  {
    title_zh: `一、在异邦中持守信仰（1-6章）`,
    title_en: `I. Maintaining Faith in a Foreign Land (Ch. 1–6)`,
    content_zh: `但以理书前六章是叙事文学，记载了但以理和三个朋友在巴比伦宫廷中如何在信仰与世俗权力之间抉择。

第一章设立了全书的基调——但以理"立志不以王的膳和王所饮的酒玷污自己"（1:8）。在被掳的环境中，信仰的持守从最小的生活选择开始。神赐给但以理和三位友人超越一切术士的智慧。

第三章的火窑故事至今震撼人心。尼布甲尼撒王立金像，要求所有人跪拜。沙得拉、米煞、亚伯尼歌拒绝跪拜，他们的回答是信心的经典宣告："我们所侍奉的神能将我们从烈火的窑中救出来……即或不然，王啊，你当知道我们决不侍奉你的神"（3:17-18）。"即或不然"——信心不是因为确定神会救我，而是即使神不救我，我也不妥协。他们被扔进火窑，但王看到有四个人在火中行走——第四位"好像神子"（3:25）。

第六章但以理在狮子坑中的经历同样展现了不妥协的信仰。波斯的大臣设计禁令，禁止向王以外的任何对象祈祷。但以理"一日三次，双膝跪在他神面前，祷告感谢，与素常一样"（6:10）。他被扔进狮子坑，但神封住了狮子的口。

这六章的信息是统一的：在强权面前，忠于神可能要付代价，但神能拯救忠心属祂的人——"即或不然"，忠心本身就是胜利。`,
    content_en: `The first six chapters are narrative literature recording how Daniel and three friends navigated faith and secular power in Babylon's court.

Chapter 1 sets the book's tone — Daniel "purposed in his heart that he would not defile himself with the portion of the king's meat, nor with the wine which he drank' (1:8). In exile, maintaining faith begins with the smallest life choices. God gave Daniel and his friends wisdom exceeding all the magicians.

Chapter 3's fiery furnace story remains powerful. Nebuchadnezzar erected a golden image demanding all worship it. Shadrach, Meshach, and Abednego refused, delivering faith's classic declaration: "Our God whom we serve is able to deliver us from the burning fiery furnace... But if not, be it known unto thee, O king, that we will not serve thy gods" (3:17–18). "But if not" — faith is not because I'm certain God will rescue me, but even if He does not, I will not compromise. They were cast into the furnace, but the king saw four men walking in the fire — the fourth "like the Son of God" (3:25).

Chapter 6's lion's den similarly demonstrates uncompromising faith. Persian officials engineered a decree forbidding prayer to anyone but the king. Daniel "kneeled upon his knees three times a day, and prayed, and gave thanks before his God, as he did aforetime" (6:10). He was cast into the lions' den, but God shut the lions' mouths.

These six chapters carry a unified message: before earthly powers, faithfulness to God may exact a cost, but God can deliver those faithful to Him — and "but if not," faithfulness itself is victory.`,
  },
  {
    title_zh: `二、异梦与异象——世界帝国的兴衰（2, 7-8章）`,
    title_en: `II. Dreams and Visions — Rise and Fall of World Empires (Ch. 2, 7–8)`,
    content_zh: `但以理书的预言核心始于第二章尼布甲尼撒的梦——一个大像，金头、银胸、铜腹、铁腿、半铁半泥的脚。但以理解释：四种金属代表四个相继的帝国。"当那列王在位的时候，天上的神必另立一国，永不败坏……打碎这一切国"（2:44）——一块非人手凿出来的石头打碎大像，变成大山充满全地。这块石头就是基督的国度。

第七章以另一种形式重述同一预言——四兽从海中上来：狮子、熊、豹和第四兽"甚是可怕"。然后异象转到天上的审判场景："亘古常在者"（Ancient of Days）坐在宝座上，案卷都展开了。"有一位像人子的，驾着天云而来"（7:13），被赐予永远的国度。耶稣最常用的自称"人子"正是来自这段预言。

第八章的公绵羊和公山羊异象更具体地预言了波斯帝国被希腊取代，以及安提阿古四世对圣殿的亵渎——这在马加比时代精确应验。`,
    content_en: `Daniel's prophetic core begins with chapter 2 — Nebuchadnezzar's dream of a great statue: gold head, silver chest, bronze belly, iron legs, feet of iron and clay. Daniel interpreted: four metals represent four successive empires. "In the days of these kings shall the God of heaven set up a kingdom, which shall never be destroyed... it shall break in pieces and consume all these kingdoms" (2:44) — a stone cut without hands smashed the statue and became a great mountain filling the earth. That stone is Christ's kingdom.

Chapter 7 retells the same prophecy in a different form — four beasts from the sea: lion, bear, leopard, and a fourth beast "dreadful and terrible." The vision shifts to heaven's judgment scene: "the Ancient of days did sit" on His throne, and books were opened. "One like the Son of man came with the clouds of heaven" (7:13), receiving an everlasting kingdom. Jesus' most frequent self-designation "Son of Man" comes from this very prophecy.

Chapter 8's ram and goat vision more specifically prophesies Persia's replacement by Greece and Antiochus IV's desecration of the temple — fulfilled with precision during the Maccabean period.`,
  },
  {
    title_zh: `三、七十个七与末世异象（9-12章）`,
    title_en: `III. The Seventy Weeks and End-Time Visions (Ch. 9–12)`,
    content_zh: `第九章是但以理书最重要的祷告和预言之一。但以理读耶利米的预言知道被掳要七十年，于是禁食祷告认罪。他的祷告是代求的典范——不说"他们犯了罪"，而说"我们犯了罪"（9:5）。

天使加百列带来"七十个七"的预言（9:24-27）——"为你本国之民和你圣城，已经定了七十个七。要止住罪过，除净罪恶，赎尽罪孽，引进永义，封住异象和预言，并膏至圣者"（9:24）。这个预言的时间框架从波斯王下令重建耶路撒冷开始，经过六十九个七，到"受膏者被剪除"——改革宗传统理解这指向基督的受难。第七十个七有不同的解释，但核心信息是：神掌管历史的时间表。

第十至十二章是但以理书最后的大异象。天使描述了波斯、希腊到安提阿古的详细历史预言（11章），然后转向末世："并且有大艰难，从有国以来直到此时，没有这样的。你本国的民中，凡名录在册上的，必得拯救。睡在尘埃中的，必有多人复醒。其中有得永生的，有受羞辱永远被憎恶的"（12:1-2）。这是旧约中最清晰的复活教义——不仅义人复活，恶人也将复活受审。

全书以安慰结束："你且去等候结局，因为你必安歇。到了末期，你必起来，享受你的福分"（12:13）。`,
    content_en: `Chapter 9 contains one of Daniel's most important prayers and prophecies. Daniel read Jeremiah's prophecy that exile would last seventy years, then fasted and prayed in confession. His prayer is a model of intercession — not "they have sinned" but "we have sinned" (9:5).

The angel Gabriel brought the "Seventy Weeks" prophecy (9:24–27) — "Seventy weeks are determined upon thy people and upon thy holy city, to finish the transgression, and to make an end of sins, and to make reconciliation for iniquity, and to bring in everlasting righteousness, and to seal up the vision and prophecy, and to anoint the most Holy" (9:24). The timeline runs from the Persian decree to rebuild Jerusalem through sixty-nine weeks to "Messiah be cut off" — Reformed tradition understands this as pointing to Christ's passion. The seventieth week has varied interpretations, but the core message: God controls history's timetable.

Chapters 10–12 present Daniel's final great vision. The angel describes detailed historical prophecy from Persia through Greece to Antiochus (ch. 11), then turns to the end times: "And there shall be a time of trouble, such as never was since there was a nation even to that same time: and at that time thy people shall be delivered, every one that shall be found written in the book. And many of them that sleep in the dust of the earth shall awake, some to everlasting life, and some to shame and everlasting contempt" (12:1–2). This is the Old Testament's clearest resurrection doctrine — not only the righteous but the wicked will also rise for judgment.

The book ends with comfort: "But go thou thy way till the end be: for thou shalt rest, and stand in thy lot at the end of the days" (12:13).`,
  },

{
    title_zh: `四、末世异象与永恒的国度（7-12章）`,
    title_en: `IV. Apocalyptic Visions and the Eternal Kingdom (Ch. 7-12)`,
    content_zh: `但以理书后半部（7-12章）转为启示文学。第7章的四兽异象——狮子、熊、豹、第四兽——代表世界帝国的更迭（巴比伦、波斯、希腊、罗马）。在一切帝国之上，"一位像人子的，驾着天云而来"（7:13），得了"永远的国"。这是旧约中"人子"称号最重要的来源，耶稣常以此自称。

第9章但以理的七十个七的预言（9:24-27）是旧约最精确的弥赛亚时间表，指向基督受膏和被剪除的时间。"那受膏者必被剪除，一无所有"（9:26）——十字架在数百年前就被精确预言。

但以理书的信息贯穿旧约：人间帝国终必过去，神的国永远长存。"非人手凿出来的一块石头"打碎世界的偶像（2:34-35），充满天下。这是基督教的历史观：历史不是循环的，而是朝着神的国度前进的。`,
    content_en: `The second half of Daniel (ch. 7-12) turns to apocalyptic literature. The four beasts of chapter 7 -- lion, bear, leopard, and a fourth beast -- represent successive world empires (Babylon, Persia, Greece, Rome). Above all empires, "one like the Son of man came with the clouds of heaven" (7:13) and received "an everlasting dominion." This is the most important Old Testament source of the "Son of Man" title Jesus frequently used of Himself.

Daniel's Seventy Weeks prophecy in chapter 9 (9:24-27) is the Old Testament's most precise Messianic timetable, pointing to the time of Christ's anointing and being "cut off." "Shall Messiah be cut off, but not for himself" (9:26) -- the cross was prophesied centuries in advance with remarkable precision.

Daniel's message runs through the Old Testament: human empires will pass; God's kingdom endures forever. "A stone was cut out without hands" that smashed the world's idol (2:34-35) and filled the whole earth. This is the Christian view of history: not cyclical but progressing toward God's kingdom.`,
  }
];

const overview = {
  zh: `但以理书是旧约启示文学的代表作（12章），记载了但以理在巴比伦和波斯宫廷中约七十年的经历和异象。全书分为两部分：叙事（1-6章）展现在异邦中持守信仰的榜样；异象（7-12章）揭示世界帝国的兴衰和神国的最终得胜。

但以理书的核心信息是神的至高主权——祂掌管列国的兴亡、历史的进程和末世的结局。无论在火窑中、狮子坑中还是帝国的更迭中，"天上的神"始终坐在宝座上。`,
  en: `Daniel is the representative work of Old Testament apocalyptic literature (12 chapters), recording Daniel's approximately seventy years of experience and visions in the Babylonian and Persian courts. The book divides into: narratives (ch. 1–6) showing examples of maintaining faith in a foreign land; visions (ch. 7–12) revealing the rise and fall of world empires and God's kingdom's ultimate triumph.

Daniel's core message is God's absolute sovereignty — He governs the rise and fall of nations, the course of history, and the end of the age. Whether in a fiery furnace, a lions' den, or amid empires' succession, "the God of heaven" remains on His throne.`,
};

const outline = [
  ["1章", "但以理立志不玷污自己", "Ch. 1", "Daniel's Resolve"],
  ["2章", "尼布甲尼撒的大像之梦", "Ch. 2", "Nebuchadnezzar's Dream Statue"],
  ["3章", "火窑中的三人", "Ch. 3", "Three Men in the Fiery Furnace"],
  ["4章", "尼布甲尼撒的疯狂与恢复", "Ch. 4", "Nebuchadnezzar's Madness"],
  ["5章", "伯沙撒的筵席与墙上的字", "Ch. 5", "Belshazzar's Feast"],
  ["6章", "但以理在狮子坑中", "Ch. 6", "Daniel in the Lions' Den"],
  ["7章", "四兽与人子的异象", "Ch. 7", "Four Beasts and Son of Man"],
  ["8章", "公绵羊与公山羊", "Ch. 8", "Ram and Goat"],
  ["9章", "七十个七的预言", "Ch. 9", "Seventy Weeks Prophecy"],
  ["10-12章", "末世大异象", "Ch. 10–12", "Final Great Vision"],
];

const keyVerse = {
  zh: `"当那列王在位的时候，天上的神必另立一国，永不败坏……打碎这一切国。"（但以理书 2:44）`,
  en: `"And in the days of these kings shall the God of heaven set up a kingdom, which shall never be destroyed... but it shall break in pieces and consume all these kingdoms." (Daniel 2:44)`,
};

const info = { nameZh: `但以理书`, nameEn: `Daniel`, author: `但以理`, date: `约公元前605-536年`, chapters: `12章`, backHref: `/old-testament/major-prophets`, backLabel: `大先知书`, bibleId: `DAN` };

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