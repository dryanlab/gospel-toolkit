'use client';
import Link from 'next/link';
import SpeakButton from '@/components/SpeakButton';
import { useState } from 'react';

const sections = [
  {
    title_zh: `一、审判的宣告（1-3章）`,
    title_en: `I. Announcement of Judgment (Ch. 1–3)`,
    content_zh: `弥迦以宇宙性的审判场景开场："万民哪，你们都要听！地和其上所有的，也都要侧耳而听！主耶和华从他的圣殿要见证你们的不是"（1:2）。神从天降临，山在祂面前融化，谷裂开——这是神显现的壮丽描写。

弥迦对撒马利亚和耶路撒冷同时宣告审判。撒马利亚将变为废墟，她的偶像必被打碎（1:6-7）。弥迦为此哀痛——"因此我必大声哀号，赤脚露体而行"（1:8）。真正的先知宣告审判时不是幸灾乐祸，而是与百姓一同痛哭。

第二至三章具体控诉以色列领袖的罪。贪婪的地主"图谋罪孽"，强夺人的田地（2:1-2）。假先知只讲人爱听的话——"若有人心存虚假，用谎言说：'我要向你们预言得清酒和浓酒'\"（2:11），这样的人反而受百姓欢迎。

第三章最严厉的控诉指向首领和先知："你们恶善好恶，从人身上剥皮，从人骨头上剔肉"（3:2）。弥迦宣告："锡安必被耕种像一块田，耶路撒冷必变为乱堆"（3:12）——这个预言在一百多年后被耶利米引用（耶26:18），也确实应验了。`,
    content_en: `Micah opens with a cosmic judgment scene: "Hear, all ye people; hearken, O earth, and all that therein is: and let the Lord GOD be witness against you, the Lord from his holy temple" (1:2). God descends from heaven; mountains melt before Him, valleys split — a magnificent theophany.

Micah pronounces judgment on both Samaria and Jerusalem. Samaria will become a heap of ruins, her idols shattered (1:6–7). Micah grieves — "Therefore I will wail and howl, I will go stripped and naked" (1:8). A true prophet announcing judgment does not gloat but weeps with the people.

Chapters 2–3 specifically indict Israel's leaders. Greedy landlords "devise iniquity" and seize fields (2:1–2). False prophets preach only what people want to hear — "If a man walking in the spirit and falsehood do lie, saying, I will prophesy unto thee of wine and of strong drink" (2:11) — such people are welcomed by the populace.

Chapter 3's harshest indictment targets rulers and prophets: "Who hate the good, and love the evil; who pluck off their skin from off them, and their flesh from off their bones" (3:2). Micah declares: "Therefore shall Zion for your sake be plowed as a field, and Jerusalem shall become heaps" (3:12) — this prophecy was cited by Jeremiah over a century later (Jer 26:18) and was indeed fulfilled.`,
  },
  {
    title_zh: `二、盼望与弥赛亚的应许（4-5章）`,
    title_en: `II. Hope and the Messianic Promise (Ch. 4–5)`,
    content_zh: `从第四章开始，基调从审判急转为盼望。弥迦描绘了末日的荣耀图景："末后的日子，耶和华殿的山必坚立，超乎诸山，高举过于万岭；万民都要流归这山"（4:1）。然后是著名的和平异象："他们要将刀打成犁头，把枪打成镰刀。这国不举刀攻击那国；他们也不再学习战事"（4:3）。

第五章包含了弥迦书最重要的预言——弥赛亚出生在伯利恒："伯利恒的以法他啊，你在犹大诸城中为小，将来必有一位从你那里出来，在以色列中为我作掌权的；他的根源从亘古，从太初就有"（5:2）。

这节经文在耶稣降生时被直接引用——希律王询问基督当生在何处，祭司长和文士引用此节回答"在犹大的伯利恒"（太2:5-6）。弥迦在基督降生前七百多年精确预言了祂的出生地。"他的根源从亘古，从太初就有"——这不只是预言一位人间君王，而是指向一位永恒的存在者。`,
    content_en: `From chapter 4, the tone shifts dramatically from judgment to hope. Micah paints an eschatological vision of glory: "But in the last days it shall come to pass, that the mountain of the house of the LORD shall be established in the top of the mountains, and it shall be exalted above the hills; and people shall flow unto it" (4:1). Then the famous peace vision: "And they shall beat their swords into plowshares, and their spears into pruninghooks: nation shall not lift up a sword against nation, neither shall they learn war any more" (4:3).

Chapter 5 contains Micah's most important prophecy — the Messiah's birth in Bethlehem: "But thou, Bethlehem Ephratah, though thou be little among the thousands of Judah, yet out of thee shall he come forth unto me that is to be ruler in Israel; whose goings forth have been from of old, from everlasting" (5:2).

This verse was directly cited at Jesus' birth — when Herod asked where the Christ was to be born, the chief priests and scribes quoted this passage: "In Bethlehem of Judaea" (Matt 2:5–6). Micah precisely predicted Christ's birthplace over 700 years before His birth. "Whose goings forth have been from of old, from everlasting" — this prophesies not merely a human king but an eternal Being.`,
  },
  {
    title_zh: `三、神的要求与最终的怜悯（6-7章）`,
    title_en: `III. God's Requirement and Final Mercy (Ch. 6–7)`,
    content_zh: `第六章以法庭场景展开——神与以色列打官司，山岭和磐石是见证人。神回顾自己对以色列的恩典：带他们出埃及、差遣摩西亚伦米利暗、拦阻巴兰咒诅他们。然后问："我的百姓啊，我向你做了什么？我在什么事上使你厌烦？你可以对我证明"（6:3）。

以色列人问该怎么回应——献千千的公羊？万万的油河？甚至献长子？（6:6-7）弥迦给出了旧约中最经典的总结："世人哪，耶和华已指示你何为善。他向你所要的是什么呢？只要你行公义，好怜悯，存谦卑的心，与你的神同行"（6:8）。

这不是说行为能代替恩典，而是说真正认识神的人必然活出公义、怜悯和谦卑。外在的宗教仪式若没有内在生命的改变，就毫无价值。

全书以信心的宣告结束——即使在黑暗中，弥迦仍然仰望神："至于我，我要仰望耶和华，要等候那救我的神；我的神必应允我"（7:7）。最后一段是对神怜悯的颂赞："神啊，有何神像你，赦免罪孽，饶恕你产业之余民的罪过，不永远怀怒，喜爱施恩？必再怜悯我们，将我们的罪孽踏在脚下，又将我们的一切罪投于深海"（7:18-19）。"弥迦"这个名字的意思正是"有何神像耶和华"——全书最后回到了先知名字的含义。`,
    content_en: `Chapter 6 opens as a courtroom scene — God takes Israel to court, with mountains and hills as witnesses. God recounts His grace: bringing them from Egypt, sending Moses, Aaron, and Miriam, preventing Balaam's curse. Then asks: "O my people, what have I done unto thee? and wherein have I wearied thee? testify against me" (6:3).

Israel asks how to respond — thousands of rams? Ten thousands of rivers of oil? Even their firstborn? (6:6–7) Micah gives the Old Testament's most classic summary: "He hath shewed thee, O man, what is good; and what doth the LORD require of thee, but to do justly, and to love mercy, and to walk humbly with thy God?" (6:8).

This does not mean works replace grace, but that those who truly know God inevitably live out justice, mercy, and humility. Outward religious ritual without inner life-change is worthless.

The book ends with a declaration of faith — even in darkness, Micah looks to God: "Therefore I will look unto the LORD; I will wait for the God of my salvation: my God will hear me" (7:7). The final passage praises God's mercy: "Who is a God like unto thee, that pardoneth iniquity, and passeth by the transgression of the remnant of his heritage? he retaineth not his anger for ever, because he delighteth in mercy. He will turn again, he will have compassion upon us; he will subdue our iniquities; and thou wilt cast all their sins into the depths of the sea" (7:18–19). "Micah" means "Who is like the LORD?" — the book's finale returns to the prophet's own name.`,
  }
];

const overview = {
  zh: `弥迦书（7章）是与以赛亚同时代的先知弥迦所写（约公元前735-700年），主要向犹大和撒马利亚传讲。弥迦来自犹大乡村摩利沙，他的信息结合了社会公义的控诉和弥赛亚盼望的宣告。

弥迦书最著名的三节经文分别是：弥赛亚降生在伯利恒的预言（5:2）、刀打成犁头的和平异象（4:3）、以及"行公义，好怜悯，存谦卑的心与神同行"的总结（6:8）。弥迦教导：审判与盼望并存，公义与怜悯不可分割。`,
  en: `Micah (7 chapters) was written by the prophet Micah, a contemporary of Isaiah (c. 735–700 BC), primarily addressing Judah and Samaria. Micah came from rural Moresheth; his message combines social justice indictment with messianic hope.

Micah's three most famous verses are: the Messiah's birth in Bethlehem (5:2), the peace vision of swords into plowshares (4:3), and the summary "do justly, love mercy, walk humbly with thy God" (6:8). Micah teaches: judgment and hope coexist; justice and mercy are inseparable.`,
};

const outline = [
  ["1章", "审判的宣告", "Ch. 1", "Judgment Announced"],
  ["2章", "贪婪者与假先知", "Ch. 2", "Greedy Leaders; False Prophets"],
  ["3章", "首领的罪与锡安被耕", "Ch. 3", "Leaders' Sin; Zion Plowed"],
  ["4章", "末后的荣耀与和平", "Ch. 4", "Future Glory and Peace"],
  ["5章", "伯利恒的弥赛亚", "Ch. 5", "Messiah from Bethlehem"],
  ["6章", "神的要求：公义怜悯谦卑", "Ch. 6", "God's Requirement: Justice, Mercy, Humility"],
  ["7章", "黑暗中的盼望与神的怜悯", "Ch. 7", "Hope in Darkness; Divine Mercy"],
];

const keyVerse = {
  zh: `"世人哪，耶和华已指示你何为善。他向你所要的是什么呢？只要你行公义，好怜悯，存谦卑的心，与你的神同行。"（弥迦书 6:8）`,
  en: `"He hath shewed thee, O man, what is good; and what doth the LORD require of thee, but to do justly, and to love mercy, and to walk humbly with thy God?" (Micah 6:8)`,
};

const info = { nameZh: `弥迦书`, nameEn: `Micah`, author: `弥迦`, date: `约公元前735-700年`, chapters: `7章`, backHref: `/old-testament/minor-prophets`, backLabel: `小先知书`, bibleId: `MIC` };

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