'use client';
import Link from 'next/link';
import SpeakButton from '@/components/SpeakButton';
import { useState } from 'react';

const sections = [
  {
    title_zh: `一、天国之王的来临与教导（1-7章）`,
    title_en: `I. The Coming of the King and His Teaching (Ch. 1-7)`,
    content_zh: `马太福音以家谱开始——从亚伯拉罕到大卫到基督（1:1-17），证明耶稣是应许的弥赛亚。东方博士的朝拜（2:1-12）和希律的屠杀（2:16-18）预示了这位王将经历的荣耀与苦难。

登山宝训（5-7章）是天国的宪章。八福（5:3-12）颠覆了世人的价值观：虚心的、哀恸的、温柔的、饥渴慕义的才是有福的。"你们是世上的盐……你们是世上的光"（5:13-14）——天国子民在世上有独特的使命。

耶稣不是废掉律法，乃是成全（5:17）。他将律法的要求从外在的行为深入到内心的动机——不仅不可杀人，连恨人也是罪；不仅不可奸淫，连动淫念也不可。天国的义超过法利赛人的义（5:20）。`,
    content_en: `Matthew begins with a genealogy -- from Abraham through David to Christ (1:1-17), proving Jesus is the promised Messiah. The Magi's worship (2:1-12) and Herod's massacre (2:16-18) foreshadow the glory and suffering this King would experience.

The Sermon on the Mount (ch. 5-7) is the charter of the Kingdom. The Beatitudes (5:3-12) overturn worldly values: the poor in spirit, mourners, meek, and those hungering for righteousness are the blessed. "Ye are the salt of the earth... Ye are the light of the world" (5:13-14) -- Kingdom citizens have a unique mission in the world.

Jesus did not come to destroy the law but to fulfil it (5:17). He deepened the law's demands from outward action to inward motive -- not only thou shalt not kill, but anger itself is sin; not only no adultery, but lustful intent is forbidden. The Kingdom's righteousness exceeds that of the Pharisees (5:20).`,
  },
  {
    title_zh: `二、天国的比喻与弥赛亚的权柄（8-13章）`,
    title_en: `II. Kingdom Parables and the Messiah's Authority (Ch. 8-13)`,
    content_zh: `马太以十个神迹（8-9章）展示了天国之王的权柄——医病、赶鬼、平静风海、使死人复活。差遣十二门徒（10章）是权柄的延伸："你们白白地得来，也要白白地舍去"（10:8）。

天国的比喻（13章）是马太福音五大讲章中的第三篇。撒种的比喻（13:3-9）、稗子的比喻（13:24-30）、芥菜种的比喻（13:31-32）——天国在世上的存在是隐秘的、渐进的，但终必覆盖全地。

面对法利赛人的拒绝，耶稣说："凡劳苦担重担的人，可以到我这里来，我就使你们得安息"（11:28）。天国向聪明通达的人隐藏，却向婴孩显出来（11:25）。这是天国的悖论：最谦卑的人离天国最近。`,
    content_en: `Matthew presents ten miracles (ch. 8-9) demonstrating the King's authority -- healing, exorcism, calming the sea, raising the dead. Sending the twelve (ch. 10) extends this authority: "Freely ye have received, freely give" (10:8).

The Kingdom parables (ch. 13) form Matthew's third great discourse. The sower (13:3-9), the tares (13:24-30), the mustard seed (13:31-32) -- the Kingdom's presence in the world is hidden and gradual, yet will ultimately cover the earth.

Facing the Pharisees' rejection, Jesus declares: "Come unto me, all ye that labour and are heavy laden, and I will give you rest" (11:28). The Kingdom is hidden from the wise and revealed to babes (11:25). This is the Kingdom's paradox: the humblest are nearest the Kingdom.`,
  },
  {
    title_zh: `三、教会的建立与通往耶路撒冷（14-25章）`,
    title_en: `III. Building the Church and the Journey to Jerusalem (Ch. 14-25)`,
    content_zh: `彼得的认信是转折点："你是基督，是永生神的儿子"（16:16）。耶稣回应："你是彼得，我要把我的教会建造在这磐石上"（16:18）。这是"教会"一词在福音书中首次出现。从此耶稣开始宣告他必须上耶路撒冷受难。

第18章是教会纪律的教导——弟兄之间的饶恕不是七次，乃是"七十个七次"（18:22）。天国好像一个主人免了仆人一千万银子的债（18:23-35）——被饶恕的人若不饶恕，是对恩典最大的践踏。

橄榄山讲论（24-25章）预言了耶路撒冷的毁灭和末日的来临。十个童女的比喻（25:1-13）呼召警醒，才干的比喻（25:14-30）要求忠心，绵羊山羊的审判（25:31-46）定义了真信仰："做在我这弟兄中一个最小的身上，就是做在我身上了"（25:40）。`,
    content_en: `Peter's confession is the turning point: "Thou art the Christ, the Son of the living God" (16:16). Jesus responds: "Thou art Peter, and upon this rock I will build my church" (16:18). This is the first use of "church" in the Gospels. From here Jesus begins declaring He must go to Jerusalem to suffer.

Chapter 18 teaches church discipline -- forgiveness between brethren is not seven times but "seventy times seven" (18:22). The Kingdom is like a king who forgave his servant ten thousand talents (18:23-35) -- the forgiven who refuse to forgive trample grace itself.

The Olivet Discourse (ch. 24-25) prophesies the destruction of Jerusalem and the end times. The ten virgins (25:1-13) call for watchfulness, the talents (25:14-30) demand faithfulness, the sheep and goats judgment (25:31-46) defines true faith: "Inasmuch as ye have done it unto one of the least of these my brethren, ye have done it unto me" (25:40).`,
  },
  {
    title_zh: `四、十字架与大使命：天国之王的得胜（26-28章）`,
    title_en: `IV. The Cross and the Great Commission: The King's Victory (Ch. 26-28)`,
    content_zh: `马太福音的高潮是天国之王走向十字架。客西马尼园中耶稣祷告说"不要照我的意思，只要照你的意思"（26:39）——王的顺服超越一切人间的君王。犹大的出卖、彼得的否认、门徒的逃散——人全部失败了，但神的计划没有失败。

十字架上的黑暗（27:45）和圣殿幔子从上到下裂为两半（27:51）——这两个记号宣告了旧约时代的结束和新约时代的开启。通往至圣所的路打开了，不再需要中间人。

复活后的大使命（28:18-20）是全书的总结："天上地下所有的权柄都赐给我了。所以，你们要去使万民作我的门徒。"天国不局限于以色列——万民都被呼召进入这个国度。"我就常与你们同在，直到世界的末了"——王永远与他的子民同在。`,
    content_en: `The climax of Matthew is the King of Heaven going to the cross. In Gethsemane Jesus prayed, "not as I will, but as thou wilt" (26:39) -- the King's obedience surpasses all earthly monarchs. Judas' betrayal, Peter's denial, the disciples' flight -- every human failed, but God's plan did not.

The darkness at the cross (27:45) and the temple veil torn from top to bottom (27:51) -- these two signs proclaimed the end of the old covenant era and the dawn of the new. The way to the Holy of Holies was opened; no more intermediaries needed.

The post-resurrection Great Commission (28:18-20) summarizes the entire book: "All power is given unto me in heaven and in earth. Go ye therefore, and teach all nations." The Kingdom is not limited to Israel -- all nations are called into this Kingdom. "Lo, I am with you alway, even unto the end of the world" -- the King is forever with His people.`,
  },
]

const overview = {
  zh: `马太福音（28章）是新约的第一卷书，由税吏出身的使徒马太所写，主要面向犹太读者。全书的核心主题是：耶稣就是旧约预言的弥赛亚，天国的君王。

马太福音包含五大讲论——登山宝训（5-7章）、差遣讲论（10章）、天国比喻（13章）、教会讲论（18章）和末世讲论（24-25章）——对应摩西五经，暗示耶稣是比摩西更大的那一位。"应验"一词在马太福音中出现超过十次，每次都将耶稣的生平事件连接回旧约预言。`,
  en: `Matthew (28 chapters) is the New Testament's first book, written by the apostle Matthew (a former tax collector), primarily for Jewish readers. Its core theme: Jesus is the Messiah prophesied in the Old Testament, the King of the Kingdom.

Matthew contains five great discourses — Sermon on the Mount (ch. 5–7), Mission Discourse (ch. 10), Kingdom Parables (ch. 13), Church Discourse (ch. 18), and Olivet Discourse (ch. 24–25) — paralleling the Pentateuch, implying Jesus is greater than Moses. "Fulfilled" appears over ten times, each connecting Jesus' life events back to Old Testament prophecy.`,
};

const outline = [
  ["1-2章", "降生与童年", "Ch. 1–2", "Birth and Childhood"],
  ["3-4章", "洗礼与试探", "Ch. 3–4", "Baptism and Temptation"],
  ["5-7章", "登山宝训", "Ch. 5–7", "Sermon on the Mount"],
  ["8-9章", "十个神迹", "Ch. 8–9", "Ten Miracles"],
  ["10章", "差遣十二门徒", "Ch. 10", "Commissioning the Twelve"],
  ["11-12章", "反对与争论", "Ch. 11–12", "Opposition and Controversy"],
  ["13章", "天国的比喻", "Ch. 13", "Parables of the Kingdom"],
  ["14-17章", "门徒训练", "Ch. 14–17", "Discipleship Training"],
  ["18章", "教会生活讲论", "Ch. 18", "Discourse on Church Life"],
  ["19-23章", "进入耶路撒冷", "Ch. 19–23", "Journey to Jerusalem"],
  ["24-25章", "末世讲论", "Ch. 24–25", "Olivet Discourse"],
  ["26-28章", "受难与复活", "Ch. 26–28", "Passion and Resurrection"],
];

const keyVerse = {
  zh: `"所以，你们要去，使万民作我的门徒，奉父、子、圣灵的名给他们施洗。凡我所吩咐你们的，都教训他们遵守，我就常与你们同在，直到世界的末了。"（马太福音 28:19-20）`,
  en: `"Go ye therefore, and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost: Teaching them to observe all things whatsoever I have commanded you: and, lo, I am with you alway, even unto the end of the world." (Matthew 28:19–20)`,
};

const info = { nameZh: `马太福音`, nameEn: `Matthew`, author: `使徒马太`, date: `约公元50-70年`, chapters: `28章`, backHref: `/new-testament/gospels`, backLabel: `四福音书`, bibleId: `MAT` };

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