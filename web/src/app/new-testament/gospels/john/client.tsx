'use client';
import Link from 'next/link';
import SpeakButton from '@/components/SpeakButton';
import { useState } from 'react';

const sections = [
  {
    title_zh: `一、太初有道：神子的启示（1-4章）`,
    title_en: `I. In the Beginning Was the Word: Revelation of the Son (Ch. 1-4)`,
    content_zh: `约翰福音以宇宙性的宣告开始："太初有道，道与神同在，道就是神"（1:1）。没有家谱，没有降生叙事——约翰直接宣告耶稣的神性。"道成了肉身，住在我们中间"（1:14），这是基督教信仰最核心的教义：永恒的神进入了时间。

开篇的"七个见证"（施洗约翰、安得烈、腓力、拿但业等）和迦拿婚宴的水变酒（2:1-11）——约翰称之为"记号"（semeion），每个神迹都指向更深的真理。洁净圣殿（2:13-22）宣告了耶稣的权柄，尼哥底母的夜访（3:1-21）引出了最著名的经文："神爱世人，甚至将他的独生子赐给他们"（3:16）。

撒玛利亚妇人的故事（4章）打破了犹太人与撒玛利亚人之间的一切藩篱。"你们拜父，也不在这山上，也不在耶路撒冷"（4:21）——真正的敬拜不在乎地点，在乎"用心灵和诚实"（4:24）。`,
    content_en: `John's Gospel begins with a cosmic declaration: "In the beginning was the Word, and the Word was with God, and the Word was God" (1:1). No genealogy, no birth narrative -- John directly proclaims Jesus' deity. "The Word was made flesh, and dwelt among us" (1:14) is Christianity's most central doctrine: the eternal God entered time.

The opening "seven witnesses" (John the Baptist, Andrew, Philip, Nathanael, etc.) and the water-to-wine at Cana (2:1-11) -- John calls them "signs" (semeion), each miracle pointing to deeper truth. Cleansing the temple (2:13-22) declared Jesus' authority; Nicodemus' night visit (3:1-21) produced Scripture's most famous verse: "God so loved the world, that he gave his only begotten Son" (3:16).

The Samaritan woman (ch. 4) breaks every barrier between Jews and Samaritans. "Neither in this mountain, nor yet at Jerusalem, shall ye worship the Father" (4:21) -- true worship is not about place but about "spirit and in truth" (4:24).`,
  },
  {
    title_zh: `二、七个记号与七个"我是"（5-12章）`,
    title_en: `II. Seven Signs and Seven "I AM" Declarations (Ch. 5-12)`,
    content_zh: `约翰福音以七个神迹记号和七个"我是"宣告为结构。医好瘫子（5章）、五饼二鱼（6章）、医好瞎子（9章）、使拉撒路复活（11章）——每个记号都伴随着深刻的教导。

"我是生命的粮"（6:35）、"我是世界的光"（8:12）、"我是好牧人"（10:11）、"我是复活，我是生命"（11:25）、"我是道路、真理、生命"（14:6）——每一个"我是"都呼应出埃及记3:14神对摩西启示的圣名。耶稣不仅行神迹，他本身就是神迹的意义所在。

第9章的瞎子故事充满讽刺：生来瞎眼的人看见了，自称看见的法利赛人反而瞎了。拉撒路的复活（11:38-44）是最伟大的记号——耶稣在死亡面前流泪（11:35），却拥有胜过死亡的权柄。`,
    content_en: `John's Gospel is structured around seven miraculous signs and seven "I AM" declarations. Healing the paralytic (ch. 5), feeding five thousand (ch. 6), healing the blind man (ch. 9), raising Lazarus (ch. 11) -- each sign is paired with profound teaching.

"I am the bread of life" (6:35), "I am the light of the world" (8:12), "I am the good shepherd" (10:11), "I am the resurrection, and the life" (11:25), "I am the way, the truth, and the life" (14:6) -- each "I AM" echoes the divine name revealed to Moses in Exodus 3:14. Jesus does not merely perform miracles; He Himself is the meaning of every miracle.

Chapter 9's blind man story is full of irony: the man born blind now sees while the Pharisees who claim sight are blind. The raising of Lazarus (11:38-44) is the greatest sign -- Jesus wept before death (11:35) yet holds authority over death itself.`,
  },
  {
    title_zh: `三、临别讲论与大祭司的祷告（13-17章）`,
    title_en: `III. The Farewell Discourse and the High Priestly Prayer (Ch. 13-17)`,
    content_zh: `约翰福音13-17章是耶稣与门徒最后的亲密时光——四福音中最深刻的教导。洗脚（13:1-17）是仆人领袖的榜样："我是你们的主，你们的夫子，尚且洗你们的脚，你们也当彼此洗脚"（13:14）。

"我去原是为你们预备地方去"（14:2）、"我不撇下你们为孤儿"（14:18）、"我留下平安给你们"（14:27）——每一句话都是安慰。圣灵的应许贯穿整段讲论：保惠师将来要引导你们明白一切的真理（16:13）。

葡萄树的比喻（15:1-8）是基督徒生命的核心："你们要常在我里面，我也常在你们里面"（15:4）。不是靠努力结果子，而是住在基督里自然结出果子。

第17章的大祭司祷告是圣经中最神圣的段落之一。耶稣为门徒的合一祷告："使他们都合而为一。正如你父在我里面，我在你里面"（17:21）——教会合一的根基是三位一体神的合一。`,
    content_en: `John 13-17 records Jesus' last intimate time with His disciples -- the deepest teaching in all four Gospels. Foot-washing (13:1-17) models servant leadership: "If I then, your Lord and Master, have washed your feet; ye also ought to wash one another's feet" (13:14).

"I go to prepare a place for you" (14:2), "I will not leave you comfortless" (14:18), "Peace I leave with you" (14:27) -- every word brings comfort. The promise of the Holy Spirit runs through the discourse: the Comforter "will guide you into all truth" (16:13).

The vine parable (15:1-8) is the core of Christian life: "Abide in me, and I in you" (15:4). Fruit is not produced by effort but by abiding in Christ.

The High Priestly Prayer in chapter 17 is one of Scripture's most sacred passages. Jesus prays for the disciples' unity: "That they all may be one; as thou, Father, art in me, and I in thee" (17:21) -- the church's unity is grounded in the unity of the Triune God.`,
  },
  {
    title_zh: `四、十字架与复活：荣耀的时刻（18-21章）`,
    title_en: `IV. The Cross and Resurrection: The Hour of Glory (Ch. 18-21)`,
    content_zh: `在约翰福音中，十字架不是悲剧而是"荣耀的时刻"——"人子得荣耀的时候到了"（12:23）。耶稣在彼拉多面前宣告："我的国不属这世界"（18:36）。"成了！"（19:30）是全书的高峰——不是失败的呻吟，而是胜利的宣告。

抹大拉的马利亚在园中哭泣，直到耶稣呼唤她的名字——"马利亚"（20:16）。多马怀疑，直到他亲眼见主伤处，然后发出最高的告白："我的主！我的神！"（20:28）约翰记录这些，是"要叫你们信耶稣是基督，是神的儿子，并且叫你们信了他，就可以因他的名得生命"（20:31）。

提比哩亚海边（21章）耶稣三次问彼得"你爱我吗"——对应三次不认主。每一次回答都跟着"牧养我的羊"。失败不是终点；被恢复的人有使命。"你跟从我吧"（21:22）——这是全书最后的呼召。`,
    content_en: `In John's Gospel, the cross is not tragedy but "the hour of glory" -- "The hour is come, that the Son of man should be glorified" (12:23). Before Pilate Jesus declared: "My kingdom is not of this world" (18:36). "It is finished!" (19:30) is the book's climax -- not a groan of defeat but a cry of victory.

Mary Magdalene wept in the garden until Jesus called her name -- "Mary" (20:16). Thomas doubted until he saw the Master's wounds, then confessed: "My Lord and my God!" (20:28). John records all this "that ye might believe that Jesus is the Christ, the Son of God; and that believing ye might have life through his name" (20:31).

At the Sea of Tiberias (ch. 21) Jesus asked Peter three times, "Lovest thou me?" -- corresponding to three denials. Each answer was followed by "Feed my sheep." Failure is not the end; the restored have a mission. "Follow thou me" (21:22) -- the book's final call.`,
  },
]

const overview = {
  zh: `约翰福音（21章）是四福音书中最独特的一卷，约90%的内容不见于其他三卷。使徒约翰在晚年（约公元85-95年）写成，目的是"要叫你们信耶稣是基督，是　神的儿子，并且叫你们信了他，就可以因他的名得生命"（20:31）。全书以七个神迹记号和七个"我是"宣告为结构，从"太初有道"的宇宙性宣告开始，以复活后海边的恢复结束。约翰福音的核心信息是：耶稣是神的独生子，信他的人有永生。`,
  en: `The Gospel of John (21 chapters) is the most distinctive of the four Gospels, with approximately 90% of its content unique. Written by the apostle John in his later years (c. AD 85-95), its purpose is stated clearly: 'that ye might believe that Jesus is the Christ, the Son of God; and that believing ye might have life through his name' (20:31). Structured around seven miraculous signs and seven 'I AM' declarations, it moves from the cosmic opening 'In the beginning was the Word' to the post-resurrection restoration by the sea. John's central message: Jesus is God's only begotten Son; whoever believes in Him has eternal life.`,
};

const outline = [
  ["1-2章", `道成肉身与迦拿婚宴`, "Ch. 1-2", `The Word Made Flesh and the Wedding at Cana`],
  ["3-4章", `尼哥底母与撒玛利亚妇人`, "Ch. 3-4", `Nicodemus and the Samaritan Woman`],
  ["5-6章", `医好瘫子与五饼二鱼`, "Ch. 5-6", `Healing the Paralytic and Feeding Five Thousand`],
  ["7-8章", `住棚节与世界的光`, "Ch. 7-8", `Feast of Tabernacles and the Light of the World`],
  ["9-10章", `医好瞎子与好牧人`, "Ch. 9-10", `Healing the Blind Man and the Good Shepherd`],
  ["11-12章", `拉撒路复活与荣耀入城`, "Ch. 11-12", `Raising Lazarus and the Triumphal Entry`],
  ["13-17章", `临别讲论与大祭司祷告`, "Ch. 13-17", `Farewell Discourse and High Priestly Prayer`],
  ["18-21章", `受难、复活与海边恢复`, "Ch. 18-21", `Passion, Resurrection, and Lakeside Restoration`]
];

const keyVerse = {
  zh: `"神爱世人，甚至将他的独生子赐给他们，叫一切信他的，不至灭亡，反得永生。"（约翰福音 3:16）`,
  en: `"For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life." (John 3:16)`,
};

const info = { nameZh: `约翰福音`, nameEn: `John`, author: `使徒约翰`, date: `约公元85-95年`, chapters: `21章`, backHref: `/new-testament/gospels`, backLabel: `四福音书`, bibleId: `JHN` };

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