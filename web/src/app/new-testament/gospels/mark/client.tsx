'use client';
import Link from 'next/link';
import SpeakButton from '@/components/SpeakButton';
import { useState } from 'react';

const sections = [
  {
    title_zh: `一、弥赛亚的权柄：神迹与呼召（1-3章）`,
    title_en: `I. The Messiah's Authority: Miracles and Calling (Ch. 1-3)`,
    content_zh: `马可福音以急促的节奏开始——没有家谱，没有降生叙事，直接进入耶稣的受洗和旷野试探。"日期满了，神的国近了。你们当悔改，信福音"（1:15）——这是全书的主题宣言。

耶稣立刻展示了他的权柄：赶出污鬼（1:25-26），医治彼得的岳母（1:31），洁净长大麻风的（1:41），赦免瘫子的罪（2:5）。每一个神迹都在宣告：神的国已经在你们中间了。马可常用"立刻"（euthys）一词——出现超过40次——描绘一位行动迅速、满有能力的弥赛亚。

呼召门徒同样迅速果断："来跟从我"（1:17），他们就立刻舍了网跟从他。耶稣设立十二个人，"要他们常和自己同在，也要差他们去传道"（3:14）。与主同在和被主差遣，是门徒身份的两个核心。`,
    content_en: `Mark begins at a breakneck pace -- no genealogy, no birth narrative, plunging straight into Jesus' baptism and wilderness temptation. "The time is fulfilled, and the kingdom of God is at hand: repent ye, and believe the gospel" (1:15) -- this is the book's thesis statement.

Jesus immediately demonstrates His authority: casting out demons (1:25-26), healing Peter's mother-in-law (1:31), cleansing a leper (1:41), forgiving the paralytic's sins (2:5). Each miracle declares: the kingdom of God is in your midst. Mark's frequent use of "immediately" (euthys) -- over 40 times -- portrays a Messiah of swift action and power.

The calling of the disciples is equally decisive: "Come ye after me" (1:17), and straightway they left their nets and followed Him. Jesus appointed twelve "that they should be with him, and that he might send them forth to preach" (3:14). Being with the Lord and being sent by Him -- these are the two pillars of discipleship.`,
  },
  {
    title_zh: `二、比喻的奥秘与大能的作为（4-8:26）`,
    title_en: `II. Parables of Mystery and Mighty Works (Ch. 4-8:26)`,
    content_zh: `从第4章开始，耶稣用比喻教导天国的奥秘。撒种的比喻（4:1-20）揭示了人心对福音的四种反应——路旁、石头地、荆棘里、好土。只有"好土"结出果实，因为他们"听道，又领受，并且结实"（4:20）。

这段经文中穿插着震撼人心的神迹：平静风和海（4:39）、赶出群鬼（5:1-13）、医治血漏妇人（5:25-34）、使睚鲁的女儿复活（5:35-43）、五饼二鱼喂饱五千人（6:41-44）、在海面上行走（6:48-49）。每一个神迹都指向一个问题：这人到底是谁？

然而门徒仍然不明白。"你们还不省悟，还不明白吗？你们的心还是愚顽吗？"（8:17）伯赛大瞎子的两段式医治（8:22-26）——先模糊后清晰——正是门徒灵性状态的写照：他们看见了，却还看不清楚。`,
    content_en: `Beginning in chapter 4, Jesus teaches the mysteries of the kingdom through parables. The parable of the sower (4:1-20) reveals four responses of the human heart to the gospel -- wayside, stony ground, thorns, and good soil. Only the "good ground" bears fruit, for they "hear the word, and receive it, and bring forth fruit" (4:20).

Interspersed are astonishing miracles: calming the storm (4:39), casting out Legion (5:1-13), healing the woman with the issue of blood (5:25-34), raising Jairus' daughter (5:35-43), feeding five thousand with five loaves and two fish (6:41-44), walking on the sea (6:48-49). Each miracle presses one question: Who is this man?

Yet the disciples still do not understand. "Perceive ye not yet, neither understand? have ye your heart yet hardened?" (8:17). The two-stage healing of the blind man at Bethsaida (8:22-26) -- first blurred, then clear -- is a portrait of the disciples' spiritual condition: they see, but not yet clearly.`,
  },
  {
    title_zh: `三、走向十字架的道路（8:27-10:52）`,
    title_en: `III. The Way to the Cross (8:27-10:52)`,
    content_zh: `彼得的认信（8:29）是全书的转折点："你是基督。"但他立刻误解了弥赛亚的含义——他不能接受基督必须受苦。耶稣严厉责备他："撒但，退我后边去吧！因为你不体贴神的意思，只体贴人的意思"（8:33）。

从这里开始，耶稣三次预言自己的受难（8:31, 9:31, 10:33-34），每次预言后门徒都表现出误解：彼得拦阻他、门徒争论谁最大、雅各约翰求高位。耶稣用同一个真理回应："若有人要跟从我，就当舍己，背起他的十字架来跟从我"（8:34）。

登山变像（9:2-8）在苦难预言的中间闪耀出荣耀的光芒——摩西和以利亚与耶稣说话，天父的声音宣告："这是我的爱子，你们要听他。"受苦与荣耀不是矛盾的，而是十字架道路的两面。巴底买的呼喊（10:47-48）结束了这一段——瞎眼的乞丐比门徒看得更清楚。`,
    content_en: `Peter's confession (8:29) is the book's turning point: "Thou art the Christ." But he immediately misunderstands what Messiah means -- he cannot accept that Christ must suffer. Jesus rebukes him sharply: "Get thee behind me, Satan: for thou savourest not the things that be of God, but the things that be of men" (8:33).

From here Jesus predicts His passion three times (8:31, 9:31, 10:33-34), and after each prediction the disciples display misunderstanding: Peter rebukes Him, the disciples argue who is greatest, James and John seek positions of honor. Jesus responds each time with the same truth: "Whosoever will come after me, let him deny himself, and take up his cross, and follow me" (8:34).

The Transfiguration (9:2-8) flashes with glory amid the suffering predictions -- Moses and Elijah speak with Jesus, the Father's voice declares: "This is my beloved Son: hear him." Suffering and glory are not contradictions but two sides of the way of the cross. Bartimaeus' cry (10:47-48) closes this section -- the blind beggar sees more clearly than the disciples.`,
  },
  {
    title_zh: `四、受难与复活：仆人的终极使命（11-16章）`,
    title_en: `IV. Passion and Resurrection: The Servant's Ultimate Mission (Ch. 11-16)`,
    content_zh: `马可福音的最后六章聚焦于耶稣在耶路撒冷的最后一周。洁净圣殿宣告了旧制度的终结（11:15-17），橄榄山讲论预言了将来的审判与再来（13章），客西马尼园的祷告显出仆人完全的顺服："不要从我的意思，只要从你的意思"（14:36）。

被卖、被审、被钉——马可的叙述简洁而有力。十字架上的黑暗中，耶稣喊出："我的神！我的神！为什么离弃我？"（15:34）这是全书最震撼的一刻。百夫长的告白——"这人真是神的儿子！"（15:39）——正是马可福音从第一节就要读者明白的真理。

空坟墓的信息简短却有力：他已经复活了，不在这里（16:6）。仆人的使命完成了，但门徒的使命才刚刚开始。

马可福音有一条贯穿全书的暗线：门徒的迟钝与失败。耶稣平静风和海，他们惧怕（4:40）；五千人吃饱后他们仍不明白（6:52）；在客西马尼园他们睡着了（14:37）；最后都逃跑了（14:50）。然而复活后天使特别说："去告诉他的门徒和彼得"（16:7）——连三次不认主的彼得也包括在内。恩典大过失败，这是马可福音给每一个软弱信徒的安慰。`,
    content_en: `The final six chapters of Mark focus on Jesus' last week in Jerusalem. The cleansing of the temple proclaimed the end of the old system (11:15-17), the Olivet Discourse prophesied coming judgment and return (ch. 13), and Gethsemane revealed the Servant's complete obedience: "not what I will, but what thou wilt" (14:36).

Betrayed, tried, crucified -- Mark's narrative is concise yet powerful. In the darkness on the cross, Jesus cried out: "My God, my God, why hast thou forsaken me?" (15:34). This is the most staggering moment of the entire book. The centurion's confession -- "Truly this man was the Son of God" (15:39) -- is the very truth Mark has proclaimed since verse one.

The empty tomb message is brief but mighty: He is risen; he is not here (16:6). The Servant's mission is accomplished, but the disciples' mission has just begun.

Mark weaves a thread throughout the Gospel: the disciples' dullness and failure. Jesus calms the storm and they are afraid (4:40); after feeding five thousand they still do not understand (6:52); in Gethsemane they fall asleep (14:37); finally all forsake Him and flee (14:50). Yet after the resurrection the angel specifically says: "tell his disciples and Peter" (16:7) -- even Peter who denied Him three times is included. Grace is greater than failure. This is Mark's comfort to every weak believer.`,
  },
]

const overview = {
  zh: `马可福音（16章）是四福音书中最短、写作最早的一卷（约公元65-70年），传统认为作者约翰·马可记录了使徒彼得的讲道内容。马可福音面向罗马读者，强调耶稣是行动的神子和受苦的仆人。

马可的叙事风格紧凑急促——几乎不收录长篇讲道（只有第13章橄榄山讲论），而是用密集的神迹和事件展示耶稣的权柄。然后在8:27之后急转向十字架——整卷书的后半部分都笼罩在受难的阴影下。"弥赛亚的秘密"是马可的一大主题：耶稣多次吩咐人不要公开祂的身份，直到十字架揭示了弥赛亚的真正含义。`,
  en: `Mark (16 chapters) is the shortest and earliest Gospel (c. AD 65–70), traditionally recording the apostle Peter's preaching by John Mark. Written for Roman readers, Mark emphasizes Jesus as the Son of God in action and the Suffering Servant.

Mark's narrative style is compact and urgent — virtually no long discourses (only the Olivet Discourse in ch. 13), instead using dense miracles and events to display Jesus' authority. Then after 8:27 it turns sharply toward the cross — the entire second half is shadowed by the Passion. The "Messianic Secret" is a major theme: Jesus repeatedly commands silence about His identity until the cross reveals what Messiah truly means.`,
};

const outline = [
  ["1:1-13", "开端：施洗约翰、受洗、试探", "1:1–13", "Beginning: John, Baptism, Temptation"],
  ["1:14-3:6", "加利利早期事工", "1:14–3:6", "Early Galilean Ministry"],
  ["3:7-6:6", "比喻与神迹", "3:7–6:6", "Parables and Miracles"],
  ["6:7-8:26", "门徒训练", "6:7–8:26", "Discipleship Training"],
  ["8:27-10:52", "走向十字架", "8:27–10:52", "Road to the Cross"],
  ["11-13章", "耶路撒冷最后一周", "Ch. 11–13", "Final Week in Jerusalem"],
  ["14-15章", "受难", "Ch. 14–15", "The Passion"],
  ["16章", "复活", "Ch. 16", "Resurrection"],
];

const keyVerse = {
  zh: `"因为人子来，并不是要受人的服侍，乃是要服侍人，并且要舍命作多人的赎价。"（马可福音 10:45）`,
  en: `"For even the Son of man came not to be ministered unto, but to minister, and to give his life a ransom for many." (Mark 10:45)`,
};

const info = { nameZh: `马可福音`, nameEn: `Mark`, author: `约翰·马可`, date: `约公元65-70年`, chapters: `16章`, backHref: `/new-testament/gospels`, backLabel: `四福音书`, bibleId: `MRK` };

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