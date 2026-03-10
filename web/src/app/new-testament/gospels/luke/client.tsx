'use client';
import Link from 'next/link';
import SpeakButton from '@/components/SpeakButton';
import { useState } from 'react';

const sections = [
  {
    title_zh: `一、道成肉身与早期事工（1-4:13）`,
    title_en: `I. The Incarnation and Early Ministry (1-4:13)`,
    content_zh: `路加福音以最详尽的降生叙事开始。马利亚的尊主颂（1:46-55）、撒迦利亚的预言（1:67-79）、牧羊人在旷野听见天使报信（2:8-14）——路加关注的是那些卑微的人。婴孩耶稣被放在马槽里，"因为客店里没有地方"（2:7）——天国之王降生在最卑微的地方。

西面在圣殿中抱着婴孩耶稣祝福说："我的眼睛已经看见你的救恩"（2:30），又预言"一把剑要刺透你自己的心"（2:35）——救恩与苦难从一开始就交织在一起。十二岁的耶稣在圣殿说"岂不知我应当以我父的事为念吗"（2:49），是路加独有的记载。

耶稣受洗后的家谱（3:23-38）一直追溯到亚当、到神——不像马太从亚伯拉罕开始，路加强调耶稣是全人类的救主。旷野试探（4:1-13）中魔鬼用权力、荣耀和安全来试探他，耶稣每次都以经文回应。`,
    content_en: `Luke begins with the most detailed birth narrative. Mary's Magnificat (1:46-55), Zechariah's prophecy (1:67-79), shepherds hearing angels in the fields (2:8-14) -- Luke focuses on the humble. The infant Jesus was laid in a manger, "because there was no room for them in the inn" (2:7) -- the King of Heaven born in the lowliest place.

Simeon in the temple held the infant Jesus and blessed God: "Mine eyes have seen thy salvation" (2:30), and prophesied "a sword shall pierce through thy own soul also" (2:35) -- salvation and suffering intertwined from the very start. Twelve-year-old Jesus in the temple saying "wist ye not that I must be about my Father's business?" (2:49) is unique to Luke.

Jesus' genealogy after His baptism (3:23-38) traces back to Adam, to God -- unlike Matthew who starts from Abraham, Luke emphasizes Jesus as Savior of all humanity. In the wilderness temptation (4:1-13), the devil tempted with power, glory, and safety; Jesus answered each time with Scripture.`,
  },
  {
    title_zh: `二、加利利事工：怜悯的医生（4:14-9:50）`,
    title_en: `II. Galilean Ministry: The Compassionate Physician (4:14-9:50)`,
    content_zh: `耶稣在拿撒勒会堂宣读以赛亚书："主的灵在我身上，因为他用膏膏我，叫我传福音给贫穷的人"（4:18），然后说"今天这经应验在你们耳中了"（4:21）。这是路加独有的"就职宣言"。

路加特别记载了许多只在他笔下出现的故事：拿因城寡妇之子的复活（7:11-17）、有罪女人用眼泪和香膏膏耶稣的脚（7:37-38）、服侍耶稣的妇女们（8:1-3）。路加是"穷人和妇女的福音"——他看见那些被社会忽略的人。

差遣七十人（10:1-16）也是路加独有的——不只十二使徒，更多的人被派出去。好撒玛利亚人的比喻（10:25-37）挑战犹太人的排外心理：你的邻舍不是你选的，是神放在你路上的。`,
    content_en: `Jesus read from Isaiah in the Nazareth synagogue: "The Spirit of the Lord is upon me, because he hath anointed me to preach the gospel to the poor" (4:18), then declared "This day is this scripture fulfilled in your ears" (4:21). This is Luke's unique "inaugural declaration."

Luke uniquely records many stories found only in his Gospel: the raising of the widow's son at Nain (7:11-17), the sinful woman washing Jesus' feet with tears and anointing them (7:37-38), the women who ministered to Jesus (8:1-3). Luke is the "Gospel of the poor and of women" -- he sees those society overlooks.

The sending of the seventy (10:1-16) is also unique to Luke -- not just the twelve apostles but a wider mission. The Good Samaritan (10:25-37) challenges Jewish exclusivism: your neighbour is not someone you choose, but someone God places in your path.`,
  },
  {
    title_zh: `三、通往耶路撒冷的旅程（9:51-21:38）`,
    title_en: `III. The Journey to Jerusalem (9:51-21:38)`,
    content_zh: `"耶稣被接上升的日子将到，他就定意向耶路撒冷去"（9:51）——从这里开始是路加独特的"旅行叙事"，占全书最大的篇幅，包含了最著名的比喻。

浪子的比喻（15:11-32）是全圣经最感人的故事之一。小儿子挥霍一切后回头，父亲"跑去抱着他的颈项，连连与他亲嘴"（15:20）。但大儿子的反应揭露了法利赛人的心态——自义比放荡更可怕。财主与拉撒路（16:19-31）、法利赛人和税吏的祷告（18:9-14）都在问同一个问题：谁是真正的义人？

"人子来，为要寻找、拯救失丧的人"（19:10）——这是路加福音的主题句。撒该的故事（19:1-10）完美诠释了这句话：最被人鄙视的税吏长，在主的爱中被改变。`,
    content_en: `"When the time was come that he should be received up, he stedfastly set his face to go to Jerusalem" (9:51) -- here begins Luke's unique "travel narrative," the Gospel's largest section, containing its most famous parables.

The Prodigal Son (15:11-32) is one of Scripture's most moving stories. The younger son squandered everything then returned; the father "ran, and fell on his neck, and kissed him" (15:20). But the elder son's reaction exposes the Pharisaic heart -- self-righteousness is more terrible than prodigality. The Rich Man and Lazarus (16:19-31), the Pharisee and the Publican (18:9-14) all ask the same question: Who is truly righteous?

"The Son of man is come to seek and to save that which was lost" (19:10) -- this is Luke's theme verse. Zacchaeus (19:1-10) perfectly illustrates it: the most despised chief publican is transformed by the Lord's love.`,
  },
  {
    title_zh: `四、受难、复活与升天（22-24章）`,
    title_en: `IV. The Passion, Resurrection, and Ascension (Ch. 22-24)`,
    content_zh: `逾越节晚餐中耶稣建立了新约的记号："这杯是用我血所立的新约，是为你们流出来的"（22:20）。路加独特地记录了门徒为谁最大的争论，和耶稣以服事者自比的教导。

在客西马尼园，路加记载天使来加添耶稣的力量，汗如大血点（22:43-44）——这是路加医生独特的细节。十字架上，耶稣两次祷告——"父啊，赦免他们，因为他们所作的，他们不晓得"（23:34），以及对被钉罪犯的应许："今日你要同我在乐园里了"（23:43）。

以马忤斯路上的两个门徒（24:13-35）是路加最著名的复活记事。他们心里灰心，耶稣与他们同行，从摩西和众先知讲解圣经。分饼的时候，他们认出了他。"我们的心岂不是火热的吗？"——复活的基督仍在路上与我们同行。最后耶稣带门徒到伯大尼，举手祝福他们升天（24:50-51）——路加福音以喜乐和赞美结束。`,
    content_en: `At Passover Jesus established the sign of the new covenant: "This cup is the new testament in my blood, which is shed for you" (22:20). Luke uniquely records the disciples' dispute about greatness, and Jesus' teaching that the greatest serves.

In Gethsemane, Luke records an angel strengthening Jesus, His sweat like great drops of blood (22:43-44) -- a physician's unique detail. On the cross, Jesus prayed twice -- "Father, forgive them; for they know not what they do" (23:34), and His promise to the crucified criminal: "To day shalt thou be with me in paradise" (23:43).

The Emmaus road encounter (24:13-35) is Luke's most beloved resurrection narrative. Two disciples walked in despair; Jesus joined them and from Moses and the prophets expounded the Scriptures. When He broke bread, they recognized Him. "Did not our heart burn within us?" -- the risen Christ still walks with us on the road. Finally Jesus led them to Bethany, blessed them, and ascended (24:50-51) -- Luke's Gospel ends with joy and praise.`,
  },
]

const overview = {
  zh: `路加福音（24章）是四福音书中最长的一卷，由外邦医生路加写给提阿非罗（1:1-4）。路加的写作特点是历史精确、关注社会边缘群体——穷人、妇女、外邦人、罪人。全书可分为四部分：耶稣的降生与预备（1-4:13）、加利利事工（4:14-9:50）、通往耶路撒冷的旅程（9:51-21:38）、受难与复活（22-24章）。路加福音的主题是"人子来，为要寻找、拯救失丧的人"（19:10），展现了一位满有怜悯的救主。`,
  en: `The Gospel of Luke (24 chapters) is the longest of the four Gospels, written by the Gentile physician Luke to Theophilus (1:1-4). Luke's writing is marked by historical precision and attention to society's margins -- the poor, women, Gentiles, and sinners. The book divides into four parts: Jesus' birth and preparation (1-4:13), Galilean ministry (4:14-9:50), the journey to Jerusalem (9:51-21:38), and the Passion and Resurrection (ch. 22-24). Luke's theme is 'The Son of man is come to seek and to save that which was lost' (19:10), portraying a Savior full of compassion.`,
};

const outline = [
  ["1-2章", `降生叙事与童年`, "Ch. 1-2", `Birth Narrative and Childhood`],
  ["3-4章", `受洗、家谱与试探`, "Ch. 3-4", `Baptism, Genealogy, and Temptation`],
  ["5-9章", `加利利事工与门训`, "Ch. 5-9", `Galilean Ministry and Discipleship`],
  ["10-13章", `旅途中的比喻（上）`, "Ch. 10-13", `Parables on the Journey (Part 1)`],
  ["14-19章", `旅途中的比喻（下）`, "Ch. 14-19", `Parables on the Journey (Part 2)`],
  ["20-21章", `圣殿争论与末世讲论`, "Ch. 20-21", `Temple Controversies and Eschatological Discourse`],
  ["22-23章", `受难与十字架`, "Ch. 22-23", `The Passion and the Cross`],
  ["24章", `复活与升天`, "Ch. 24", `Resurrection and Ascension`]
];

const keyVerse = {
  zh: `"人子来，为要寻找、拯救失丧的人。"（路加福音 19:10）`,
  en: `"For the Son of man is come to seek and to save that which was lost." (Luke 19:10)`,
};

const info = { nameZh: `路加福音`, nameEn: `Luke`, author: `路加医生`, date: `约公元60-80年`, chapters: `24章`, backHref: `/new-testament/gospels`, backLabel: `四福音书`, bibleId: `LUK` };

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