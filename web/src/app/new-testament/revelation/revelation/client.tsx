'use client';
import Link from 'next/link';
import SpeakButton from '@/components/SpeakButton';
import { useState } from 'react';

const sections = [
    {
      title_zh: '荣耀中的基督：七教会的主',
      title_en: 'Christ in Glory: Lord of the Seven Churches',
      content_zh: `启示录以约翰在拔摩海岛上看见荣耀的基督开始。这不再是加利利湖边温柔的教师，而是审判世界的万王之王。

"我转过身来，要看是谁发声与我说话；既转过来，就看见七个金灯台。灯台中间有一位好像人子，身穿长衣，直垂到脚，胸间束着金带。他的头与发皆白，如白羊毛，如雪；眼目如同火焰；脚好像在炉中锻炼光明的铜；声音如同众水的声音。"（启示录 1:12-15）

"And I turned to see the voice that spake with me. And being turned, I saw seven golden candlesticks; And in the midst of the seven candlesticks one like unto the Son of man, clothed with a garment down to the foot, and girt about the paps with a golden girdle. His head and his hairs were white like wool, as white as snow; and his eyes were as a flame of fire; And his feet like unto fine brass, as if they burned in a furnace; and his voice as the sound of many waters." (Revelation 1:12-15, KJV)

约翰见到基督的荣耀后"仆倒在他脚前，像死了一样"（1:17）——当年倚靠在主胸前的门徒，如今见到荣耀中的基督，只能俯伏。但基督说："不要惧怕！我是首先的，我是末后的，又是那存活的；我曾死过，现在又活了，直活到永永远远"（1:17-18）。第二至三章给七教会的信，是基督对教会最真实的评价——有赞扬、有责备、有呼召悔改。`,
      content_en: `Revelation opens with John on the island of Patmos beholding Christ in glory. This is no longer the gentle teacher by the Sea of Galilee, but the King of Kings who judges the world.

"And I turned to see the voice that spake with me. And being turned, I saw seven golden candlesticks; And in the midst of the seven candlesticks one like unto the Son of man, clothed with a garment down to the foot, and girt about the paps with a golden girdle. His head and his hairs were white like wool, as white as snow; and his eyes were as a flame of fire; And his feet like unto fine brass, as if they burned in a furnace; and his voice as the sound of many waters." (Revelation 1:12-15, KJV)

When John saw Christ's glory he "fell at his feet as dead' (1:17) — the disciple who once leaned on the Lord's breast, seeing Christ in glory, could only fall prostrate. But Christ said: "Fear not; I am the first and the last: I am he that liveth, and was dead; and, behold, I am alive for evermore' (1:17-18). The letters to the seven churches in chapters 2-3 are Christ's honest assessment of His church — with praise, rebuke, and calls to repentance.`
    },
    {
      title_zh: '天上的敬拜与羔羊的得胜',
      title_en: 'Heavenly Worship and the Lamb\'s Victory',
      content_zh: `从第四章开始，约翰被提到天上看见了最壮观的异象——天上的宝座和不停止的敬拜。

"他们昼夜不住地说：圣哉！圣哉！圣哉！主神是昔在、今在、以后永在的全能者。"（启示录 4:8）

"And they rest not day and night, saying, Holy, holy, holy, Lord God Almighty, which was, and is, and is to come." (Revelation 4:8, KJV)

然后约翰看见一卷用七印封严的书卷，没有人能展开。约翰就大哭，直到长老安慰他："犹大支派中的狮子，大卫的根，他已得胜，能以展开那书卷"（5:5）。但约翰转头看见的不是狮子，而是"有羔羊站立，像是被杀过的"（5:6）——得胜的狮子，以受死的羔羊的形象出现。这是启示录最深刻的神学意象：基督的得胜是通过受苦和牺牲实现的。

天上的歌声唱道："你配拿书卷，配揭开七印；因为你曾被杀，用自己的血从各族、各方、各民、各国中买了人来，叫他们归于神。"（5:9）`,
      content_en: `From chapter 4, John is caught up to heaven and sees the most magnificent vision — the heavenly throne and ceaseless worship.

"And they rest not day and night, saying, Holy, holy, holy, Lord God Almighty, which was, and is, and is to come." (Revelation 4:8, KJV)

Then John sees a scroll sealed with seven seals that no one can open. John weeps greatly until an elder comforts him: "the Lion of the tribe of Juda, the Root of David, hath prevailed to open the book' (5:5). But when John turns to look, he sees not a lion but "a Lamb as it had been slain' (5:6) — the conquering Lion appears as a slaughtered Lamb. This is Revelation's most profound theological image: Christ's victory is achieved through suffering and sacrifice.

The heavenly song declares: "Thou art worthy to take the book, and to open the seals thereof: for thou wast slain, and hast redeemed us to God by thy blood out of every kindred, and tongue, and people, and nation." (5:9)`
    },
    {
      title_zh: '新天新地：一切都更新了',
      title_en: 'New Heaven and New Earth: All Things Made New',
      content_zh: `经过审判的系列异象（七印、七号、七碗），巴比伦倾覆，兽与假先知被扔进火湖，撒但被捆绑——最后，约翰看见了全部圣经最终极的盼望。

"我又看见一个新天新地，因为先前的天地已经过去了，海也不再有了。我又看见圣城新耶路撒冷由神那里从天而降，预备好了，就如新妇妆饰整齐，等候丈夫。我听见有大声音从宝座出来说：看哪，神的帐幕在人间。他要与人同住，他们要作他的子民。神要亲自与他们同在，作他们的神。神要擦去他们一切的眼泪；不再有死亡，也不再有悲哀、哭号、疼痛，因为以前的事都过去了。"（启示录 21:1-4）

"And I saw a new heaven and a new earth: for the first heaven and the first earth were passed away; and there was no more sea. And I John saw the holy city, new Jerusalem, coming down from God out of heaven, prepared as a bride adorned for her husband. And I heard a great voice out of heaven saying, Behold, the tabernacle of God is with men, and he will dwell with them, and they shall be his people, and God himself shall be with them, and be their God. And God shall wipe away all tears from their eyes; and there shall be no more death, neither sorrow, nor crying, neither shall there be any more pain: for the former things are passed away." (Revelation 21:1-4, KJV)

"神的帐幕在人间"——创世记中人因罪被赶出伊甸园、与神隔绝；启示录中神亲自来到人中间、永远同住。圣经以失去乐园开始，以得回乐园结束。那里没有眼泪、没有死亡、没有悲哀——不是因为这些从未存在，而是因为基督已经为此付了代价，"以前的事都过去了"。

全部圣经以最简短、最迫切的祷告结束："主耶稣啊，我愿你来！"（22:20）这是每一个蒙恩之人最深处的盼望。`,
      content_en: `After the series of judgment visions (seven seals, seven trumpets, seven bowls), Babylon's fall, the beast and false prophet cast into the lake of fire, and Satan bound — finally, John sees the ultimate hope of all Scripture.

"And I saw a new heaven and a new earth: for the first heaven and the first earth were passed away; and there was no more sea. And I John saw the holy city, new Jerusalem, coming down from God out of heaven, prepared as a bride adorned for her husband. And I heard a great voice out of heaven saying, Behold, the tabernacle of God is with men, and he will dwell with them, and they shall be his people, and God himself shall be with them, and be their God. And God shall wipe away all tears from their eyes; and there shall be no more death, neither sorrow, nor crying, neither shall there be any more pain: for the former things are passed away." (Revelation 21:1-4, KJV)

"The tabernacle of God is with men' — in Genesis, humanity was expelled from Eden and separated from God because of sin; in Revelation, God Himself comes to dwell among men forever. The Bible begins with Paradise lost and ends with Paradise regained. No tears, no death, no sorrow — not because these never existed, but because Christ paid the price for it all, and "the former things are passed away."

All of Scripture concludes with the shortest, most urgent prayer: "Even so, come, Lord Jesus' (22:20). This is the deepest hope of every person saved by grace.`
    }
,
  {
    title_zh: `四、新天新地：万物更新的盼望（21-22章）`,
    title_en: `IV. New Heaven and New Earth: The Hope of All Things Made New (Ch. 21-22)`,
    content_zh: `启示录最后两章是全圣经最荣耀的异象——新天新地。"我又看见一个新天新地；因为先前的天地已经过去了"（21:1）。新耶路撒冷从天而降，"如同新妇妆饰整齐，等候丈夫"（21:2）。

最动人的应许是："神要擦去他们一切的眼泪；不再有死亡，也不再有悲哀、哭号、疼痛，因为以前的事都过去了"（21:4）。这不是逃避现实的幻想，而是基于基督复活的确切盼望。

新城里没有圣殿，"因主神全能者和羔羊为城的殿"（21:22）。也不需要日月，"因有神的荣耀光照，又有羔羊为城的灯"（21:23）。生命河从宝座流出，生命树每月结果（22:1-2）——伊甸园失去的一切都在这里恢复，且更加荣耀。

全书以呼唤结束："主耶稣啊，我愿你来！"（22:20）这是历世历代教会的盼望，也是我们今天的祷告。`,
    content_en: `The final two chapters of Revelation present the Bible's most glorious vision -- the new heaven and new earth. "I saw a new heaven and a new earth: for the first heaven and the first earth were passed away" (21:1). The New Jerusalem descends from heaven, "prepared as a bride adorned for her husband" (21:2).

The most moving promise: "God shall wipe away all tears from their eyes; and there shall be no more death, neither sorrow, nor crying, neither shall there be any more pain: for the former things are passed away" (21:4). This is not escapist fantasy but certain hope grounded in Christ's resurrection.

The city has no temple, "for the Lord God Almighty and the Lamb are the temple of it" (21:22). No sun or moon needed, "for the glory of God did lighten it, and the Lamb is the light thereof" (21:23). The river of life flows from the throne, and the tree of life bears fruit each month (22:1-2) -- everything lost in Eden is restored here, in even greater glory.

The book closes with a cry: "Even so, come, Lord Jesus" (22:20). This is the hope of the church through all ages, and our prayer today.`,
  }
  ];

const overview = {
  zh: `启示录是圣经的最后一卷书，也是新约唯一的启示文学。使徒约翰因信仰被流放到拔摩海岛，在那里领受了关于基督最终得胜的异象。全书的核心信息是：基督已经得胜，正在得胜，将来必要完全得胜。历史不是循环往复的，而是向着一个目标前进——新天新地，神与人永远同在。对于正在受苦的教会，启示录说：忍耐到底的必得冠冕。`,
  en: `Revelation is the last book of the Bible and the only apocalyptic literature in the New Testament. The apostle John, exiled to the island of Patmos for his faith, received visions of Christ's ultimate victory. The central message: Christ has conquered, is conquering, and will completely conquer. History is not cyclical but progresses toward one goal — a new heaven and new earth, where God dwells with humanity forever. To the suffering church, Revelation declares: those who endure to the end will receive the crown.`,
};

const outline = [
  ["1章", `基督的荣耀显现`, "Ch. 1", `The Glorious Appearing of Christ`],
  ["2-3章", `给七教会的信`, "Ch. 2–3", `Letters to the Seven Churches`],
  ["4-5章", `天上的宝座与羔羊`, "Ch. 4–5", `The Throne in Heaven and the Lamb`],
  ["6章", `六印：审判开始`, "Ch. 6", `The Six Seals: Judgment Begins`],
  ["7章", `十四万四千人受印`, "Ch. 7", `The 144,000 Sealed`],
  ["8-9章", `七号：更深的审判`, "Ch. 8–9", `The Seven Trumpets: Deeper Judgment`],
  ["10-11章", `小书卷与两个见证人`, "Ch. 10–11", `The Little Scroll and Two Witnesses`],
  ["12章", `妇人与龙`, "Ch. 12", `The Woman and the Dragon`],
  ["13章", `两个兽`, "Ch. 13", `The Two Beasts`],
  ["14章", `羔羊与收割`, "Ch. 14", `The Lamb and the Harvest`],
  ["15-16章", `七碗：最后的灾`, "Ch. 15–16", `The Seven Bowls: Final Plagues`],
  ["17-18章", `大巴比伦的倾覆`, "Ch. 17–18", `The Fall of Babylon the Great`],
  ["19章", `基督再来与最终得胜`, "Ch. 19", `Christ's Return and Final Victory`],
  ["20章", `千年国度与最后审判`, "Ch. 20", `The Millennial Kingdom and Final Judgment`],
  ["21-22章", `新天新地与新耶路撒冷`, "Ch. 21–22", `The New Heaven, New Earth, and New Jerusalem`],
];


const keyVerse = {
  zh: `"看哪，神的帐幕在人间。他要与人同住，他们要作他的子民。神要亲自与他们同在，作他们的神。"（启示录 21:3）`,
  en: `"Behold, the tabernacle of God is with men, and he will dwell with them, and they shall be his people, and God himself shall be with them, and be their God." (Revelation 21:3, KJV)`,
};

const info = { nameZh: `启示录`, nameEn: `Revelation`, author: `使徒约翰`, date: `约公元95年`, chapters: `22章`, backHref: `/new-testament/revelation`, backLabel: `启示文学`, bibleId: `REV` };

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
