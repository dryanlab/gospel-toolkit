'use client';
import Link from 'next/link';
import SpeakButton from '@/components/SpeakButton';
import { useState } from 'react';

const sections = [
  {
    title_zh: `一、八个夜间异象（1-6章）`,
    title_en: `I. Eight Night Visions (Ch. 1–6)`,
    content_zh: `撒迦利亚书前半部分记载了先知在一夜之间看到的八个异象，每个异象都有天使解释其含义。

第一个异象（1:7-17）是骑红马的人站在洼地中的番石榴树中间——天使巡行全地，报告"全地都安息平静"，但耶和华说祂仍"为耶路撒冷为锡安心里极其火热"（1:14）。

第三个异象（2章）是一个人拿准绳量耶路撒冷——但天使说不需要城墙，"耶和华说：我要作耶路撒冷四围的火城，并要作其中的荣耀"（2:5）。神自己就是城墙和荣耀。

第四个异象（3章）最具神学意义——大祭司约书亚站在耶和华的使者面前，撒但在他右边控告他。约书亚穿着污秽的衣服（象征罪），但耶和华的使者说："你们要脱去他污秽的衣服。"又对约书亚说："我使你脱离罪孽，要给你穿上华美的衣服"（3:4）。这是因信称义最生动的旧约图画——不是约书亚自己洁净自己，而是神为他脱去污秽、穿上华美。

第五个异象（4章）是金灯台和两棵橄榄树——"不是倚靠势力，不是倚靠才能，乃是倚靠我的灵方能成事"（4:6）。这是对所罗巴伯重建圣殿的鼓励，也是一切属灵事工的原则。`,
    content_en: `The first half of Zechariah records eight visions the prophet saw in one night, each interpreted by an angel.

The first vision (1:7–17): a man riding a red horse among myrtle trees in a valley — angels patrol the earth, reporting "all the earth sitteth still, and is at rest," but the LORD declares He is "jealous for Jerusalem and for Zion with a great jealousy" (1:14).

The third vision (ch. 2): a man with a measuring line to measure Jerusalem — but the angel says no walls are needed, "For I, saith the LORD, will be unto her a wall of fire round about, and will be the glory in the midst of her" (2:5). God Himself is both wall and glory.

The fourth vision (ch. 3) is the most theologically significant — high priest Joshua standing before the Angel of the LORD, with Satan at his right hand accusing. Joshua wore filthy garments (symbolizing sin), but the Angel said: "Take away the filthy garments from him." And to Joshua: "I have caused thine iniquity to pass from thee, and I will clothe thee with change of raiment" (3:4). This is justification by faith's most vivid Old Testament portrait — Joshua does not cleanse himself; God removes the filth and clothes him in splendor.

The fifth vision (ch. 4): a golden lampstand and two olive trees — "Not by might, nor by power, but by my spirit, saith the LORD of hosts" (4:6). Encouragement for Zerubbabel's temple-building and a principle for all spiritual work.`,
  },
  {
    title_zh: `二、弥赛亚的预言（9-11章）`,
    title_en: `II. Messianic Prophecies (Ch. 9–11)`,
    content_zh: `第九章包含了旧约中最精确的弥赛亚预言之一——"锡安的民哪，应当大大喜乐；耶路撒冷的民哪，应当欢呼。看哪，你的王来到你这里！他是公义的，并且施行拯救，谦谦和和地骑着驴，就是骑着驴的驹子"（9:9）。

这个预言在棕枝主日精确应验——耶稣骑着驴驹进入耶路撒冷（太21:1-9）。弥赛亚不是骑着战马来的征服者，而是骑着驴驹来的和平之君——这颠覆了以色列人对弥赛亚的一切期待。

第十一章描绘了被弃绝的牧人——"我就取那称为'荣美'的杖，砍断它，以废弃我与万民所立的约"（11:10）。牧人的工价是三十块银子——"耶和华对我说：'要把众人所估定美好的价值丢给窑户。'我便将这三十块钱，在耶和华的殿中丢给窑户了"（11:13）。

三十块银子——这正是犹大出卖耶稣的价钱（太26:15）。钱被"丢在殿里"，然后用来买了窑户的田（太27:3-10）。撒迦利亚在基督被卖前五百多年就预言了这个细节。`,
    content_en: `Chapter 9 contains one of the Old Testament's most precise messianic prophecies — "Rejoice greatly, O daughter of Zion; shout, O daughter of Jerusalem: behold, thy King cometh unto thee: he is just, and having salvation; lowly, and riding upon an ass, and upon a colt the foal of an ass" (9:9).

This prophecy was precisely fulfilled on Palm Sunday — Jesus rode a donkey's colt into Jerusalem (Matt 21:1–9). The Messiah came not as a conqueror on a war horse but as a Prince of Peace on a donkey's colt — overturning all of Israel's messianic expectations.

Chapter 11 depicts the rejected shepherd — "And I took my staff, even Beauty, and cut it asunder, that I might break my covenant which I had made with all the people" (11:10). The shepherd's wages were thirty pieces of silver — "And the LORD said unto me, Cast it unto the potter: a goodly price that I was prised at of them. And I took the thirty pieces of silver, and cast them to the potter in the house of the LORD" (11:13).

Thirty pieces of silver — the exact price Judas received for betraying Jesus (Matt 26:15). The money was "cast down in the temple," then used to buy a potter's field (Matt 27:3–10). Zechariah prophesied this detail over 500 years before Christ's betrayal.`,
  },
  {
    title_zh: `三、受苦与得胜的弥赛亚（12-14章）`,
    title_en: `III. The Suffering and Triumphant Messiah (Ch. 12–14)`,
    content_zh: `最后三章的弥赛亚预言更加直接。"他们必仰望我，就是他们所扎的；必为我悲哀，如丧独生子，又为我愁苦，如丧长子"（12:10）。"仰望他们所扎的"——约翰福音19:37在十字架下引用此节，指向被钉的基督。

"万军之耶和华说：'刀剑哪，应当兴起，攻击我的牧人和我的同伴。击打牧人，羊就分散'\"（13:7）。耶稣在客西马尼园被捕前亲自引用这节经文（太26:31）——祂就是那位被击打的牧人，门徒就是分散的羊。

第十四章是全书的高潮——耶和华的日子。"他的脚必站在耶路撒冷前面朝东的橄榄山上。这山必从中间分裂"（14:4）。"耶和华必作全地的王。那日耶和华必为独一无二的，他的名也是独一无二的"（14:9）。

撒迦利亚书从被掳归回的小群体开始，以万王之王治理全地结束——这是圣经中最宏大的救赎叙事之一。`,
    content_en: `The final three chapters' messianic prophecies are even more direct. "And they shall look upon me whom they have pierced, and they shall mourn for him, as one mourneth for his only son, and shall be in bitterness for him, as one that is in bitterness for his firstborn" (12:10). "Look upon him whom they pierced" — John 19:37 cites this verse at the cross, pointing to the crucified Christ.

"Awake, O sword, against my shepherd, and against the man that is my fellow, saith the LORD of hosts: smite the shepherd, and the sheep shall be scattered" (13:7). Jesus quoted this verse Himself before His arrest in Gethsemane (Matt 26:31) — He is the smitten Shepherd; the disciples, the scattered sheep.

Chapter 14 is the book's climax — the Day of the LORD. "And his feet shall stand in that day upon the mount of Olives, which is before Jerusalem on the east, and the mount of Olives shall cleave in the midst thereof" (14:4). "And the LORD shall be king over all the earth: in that day shall there be one LORD, and his name one" (14:9).

Zechariah begins with a small remnant returned from exile and ends with the King of kings ruling all the earth — one of Scripture's grandest redemptive narratives.`,
  },

{
    title_zh: `四、弥赛亚的预言与末世异象（9-14章）`,
    title_en: `IV. Messianic Prophecies and Eschatological Visions (Ch. 9-14)`,
    content_zh: `撒迦利亚书后半部包含旧约最密集的弥赛亚预言。"锡安的民哪，应当大大喜乐！你的王来到你这里！他是公义的，并且施行拯救，谦谦和和地骑着驴"（9:9）——耶稣荣耀入城时完全应验了这预言。

"他们必仰望我，就是他们所扎的"（12:10）——约翰福音19:37在十字架场景中引用了这节。"三十块钱"（11:12-13）的预言指向犹大出卖耶稣的价格。"击打牧人，羊就分散了"（13:7）——耶稣在客西马尼园引用此话预言门徒的逃散。

第14章描绘了末日的场景——耶和华的日子、橄榄山裂开、活水从耶路撒冷流出、"耶和华必作全地的王"（14:9）。撒迦利亚书是旧约与新约之间的桥梁，把先知的预言和基督的应验紧密相连。`,
    content_en: `The second half of Zechariah contains the Old Testament's densest cluster of Messianic prophecies. "Rejoice greatly, O daughter of Zion; shout, O daughter of Jerusalem: behold, thy King cometh unto thee: he is just, and having salvation; lowly, and riding upon an ass" (9:9) -- perfectly fulfilled at Jesus' triumphal entry.

"They shall look upon me whom they have pierced" (12:10) -- John 19:37 quotes this at the crucifixion scene. "Thirty pieces of silver" (11:12-13) foreshadows the price of Judas' betrayal. "Smite the shepherd, and the sheep shall be scattered" (13:7) -- Jesus quoted this in Gethsemane predicting the disciples' flight.

Chapter 14 depicts the end-time scene -- the Day of the LORD, the Mount of Olives splitting, living waters flowing from Jerusalem, and "the LORD shall be king over all the earth" (14:9). Zechariah is the bridge between Old and New Testaments, tightly linking prophetic prediction to Christ's fulfillment.`,
  }
];

const overview = {
  zh: `撒迦利亚书（14章）是小先知书中最长的一卷，也是弥赛亚预言最丰富的旧约书卷之一。撒迦利亚与哈该同时事奉（公元前520年起），都呼吁百姓重建圣殿，但撒迦利亚的视野远超圣殿——他看到了弥赛亚的来临、受苦、被弃和最终的得胜。

全书分为两大部分：异象篇（1-8章，八个夜间异象+禁食问答）和预言篇（9-14章，弥赛亚的来临与末后的日子）。新约引用撒迦利亚书超过四十次，仅次于以赛亚书和诗篇。`,
  en: `Zechariah (14 chapters) is the longest Minor Prophet and among the Old Testament's richest messianic prophecy books. Zechariah served alongside Haggai from 520 BC, both urging temple reconstruction, but Zechariah's vision extended far beyond the temple — he foresaw the Messiah's coming, suffering, rejection, and ultimate triumph.

The book divides into two parts: visions (ch. 1–8, eight night visions + fasting dialogue) and prophecies (ch. 9–14, Messiah's advent and the last days). The New Testament cites Zechariah over forty times, exceeded only by Isaiah and Psalms.`,
};

const outline = [
  ["1-6章", "八个夜间异象", "Ch. 1–6", "Eight Night Visions"],
  ["7-8章", "禁食与公义", "Ch. 7–8", "Fasting and Justice"],
  ["9章", "弥赛亚骑驴而来", "Ch. 9", "Messiah Comes on a Donkey"],
  ["10-11章", "牧人被弃与三十块银子", "Ch. 10–11", "Rejected Shepherd; Thirty Pieces of Silver"],
  ["12-13章", "仰望被扎的那位", "Ch. 12–13", "Looking on Him Whom They Pierced"],
  ["14章", "耶和华作全地的王", "Ch. 14", "The LORD King Over All the Earth"],
];

const keyVerse = {
  zh: `"锡安的民哪，应当大大喜乐；耶路撒冷的民哪，应当欢呼。看哪，你的王来到你这里！他是公义的，并且施行拯救，谦谦和和地骑着驴，就是骑着驴的驹子。"（撒迦利亚书 9:9）`,
  en: `"Rejoice greatly, O daughter of Zion; shout, O daughter of Jerusalem: behold, thy King cometh unto thee: he is just, and having salvation; lowly, and riding upon an ass, and upon a colt the foal of an ass." (Zechariah 9:9)`,
};

const info = { nameZh: `撒迦利亚书`, nameEn: `Zechariah`, author: `撒迦利亚`, date: `约公元前520-480年`, chapters: `14章`, backHref: `/old-testament/minor-prophets`, backLabel: `小先知书`, bibleId: `ZEC` };

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