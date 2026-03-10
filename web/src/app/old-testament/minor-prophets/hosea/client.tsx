'use client';
import Link from 'next/link';
import SpeakButton from '@/components/SpeakButton';
import { useState } from 'react';

const sections = [
  {
    title_zh: `一、何西阿的婚姻——神爱的活剧（1-3章）`,
    title_en: `I. Hosea's Marriage — A Living Drama of God's Love (Ch. 1–3)`,
    content_zh: `何西阿书以圣经中最惊人的命令开始："你去娶淫妇为妻，也收那从淫乱所生的儿女"（1:2）。神命令先知娶一个不忠的女子歌篾——这段婚姻本身就是预言，是神与以色列关系的活剧。

歌篾生了三个孩子，名字都是审判的宣告：耶斯列（神播种/报应）、罗路哈玛（不蒙怜悯）、罗阿米（非我民）。从"我的民"到"非我民"——约的关系破裂了。

然而第二章在最严厉的审判之后突然转向："我必聘你永远归我为妻，以仁义、公平、慈爱、怜悯聘你归我"（2:19）。罗路哈玛要被改名为路哈玛（蒙怜悯），罗阿米要被改名为阿米（我的民）。

第三章是最感人的一幕——神命令何西阿去把已经沦为奴隶（或沦落风尘）的歌篾买回来。"你再去爱一个淫妇……我便用银子十五舍客勒，大麦一贺梅珥半，买她归我"（3:1-2）。何西阿用钱把自己的妻子赎回——这是十字架最生动的旧约预表。神的爱不是因为我们可爱，而是在我们最不可爱的时候，祂付代价把我们赎回。`,
    content_en: `Hosea opens with Scripture's most startling command: "Go, take unto thee a wife of whoredoms and children of whoredoms" (1:2). God commanded the prophet to marry an unfaithful woman, Gomer — this marriage itself was prophecy, a living drama of God's relationship with Israel.

Gomer bore three children, each name a declaration of judgment: Jezreel (God sows/requites), Lo-ruhamah (not pitied), Lo-ammi (not my people). From "my people" to "not my people" — the covenant relationship was broken.

Yet chapter 2, after the severest judgment, suddenly turns: "I will betroth thee unto me for ever; yea, I will betroth thee unto me in righteousness, and in judgment, and in lovingkindness, and in mercies" (2:19). Lo-ruhamah would be renamed Ruhamah (pitied), Lo-ammi renamed Ammi (my people).

Chapter 3 is the most moving scene — God commanded Hosea to go buy back Gomer, who had become a slave (or fallen into prostitution). "Go yet, love a woman beloved of her friend, yet an adulteress... So I bought her to me for fifteen pieces of silver, and for an homer of barley, and an half homer of barley" (3:1–2). Hosea paid money to redeem his own wife — this is the most vivid Old Testament foreshadowing of the cross. God's love is not because we are lovable but because, at our most unlovable, He paid the price to redeem us.`,
  },
  {
    title_zh: `二、以色列的罪与审判（4-10章）`,
    title_en: `II. Israel's Sin and Judgment (Ch. 4–10)`,
    content_zh: `第四至十章是何西阿对北国以色列的控诉。以色列的罪被概括为三方面：没有诚实、没有良善、没有人认识神（4:1）。"认识"在希伯来文中不是知识上的了解，而是亲密的关系——如同丈夫认识妻子。以色列的根本问题不是不知道神存在，而是与神没有真实的关系。

"我的民因无知识而灭亡"（4:6）——这里的"知识"不是教育程度，而是对神的认识。何西阿接着把矛头指向祭司——"因为你弃掉知识，我也必弃掉你"（4:6下）。属灵领袖的失职导致全民的堕落。

何西阿用丰富的比喻描述以色列的罪：以色列像没有翻过的饼（7:8，一面烧焦一面生的），像愚蠢的鸽子（7:11，在大国之间飞来飞去寻求联盟），像早晨的云雾、速散的甘露、风前的糠秕（13:3）。

第六章有一句常被引用的话："来吧，我们归向耶和华！他撕裂我们，也必医治；他打伤我们，也必缠裹。过两天他必使我们苏醒，第三天他必使我们兴起"（6:1-2）。"第三天"的表述在新约中被理解为指向基督第三日的复活。

何西阿8:7概括了以色列的处境："他们所种的是风，所收的是暴风"——罪的后果总是比罪本身更大。`,
    content_en: `Chapters 4–10 are Hosea's indictment of the Northern Kingdom. Israel's sins are summarized threefold: no truth, no mercy, no knowledge of God (4:1). "Knowledge" in Hebrew is not intellectual awareness but intimate relationship — as a husband knows his wife. Israel's fundamental problem was not ignorance of God's existence but lack of genuine relationship with Him.

"My people are destroyed for lack of knowledge" (4:6) — "knowledge" here is not education but knowing God. Hosea then turns on the priests — "Because thou hast rejected knowledge, I will also reject thee" (4:6). Spiritual leaders' failure led to national collapse.

Hosea uses rich metaphors for Israel's sin: a cake not turned (7:8, burned on one side, raw on the other), a silly dove (7:11, flying between great powers seeking alliances), morning cloud, early dew, chaff driven by the wind (13:3).

Chapter 6 contains a frequently quoted passage: "Come, and let us return unto the LORD: for he hath torn, and he will heal us; he hath smitten, and he will bind us up. After two days will he revive us: in the third day he will raise us up" (6:1–2). "The third day" is understood in the New Testament as pointing to Christ's resurrection on the third day.

Hosea 8:7 summarizes Israel's condition: "For they have sown the wind, and they shall reap the whirlwind" — sin's consequences are always greater than the sin itself.`,
  },
  {
    title_zh: `三、不能放弃的爱（11-14章）`,
    title_en: `III. A Love That Cannot Let Go (Ch. 11–14)`,
    content_zh: `第十一章包含了旧约中最感人的神学表述之一——神以父亲的身份回忆以色列的幼年："以色列年幼的时候，我爱他，就从埃及召出我的儿子来"（11:1，马太福音2:15引用此节指向基督从埃及归来）。"我原教以法莲行走，用膀臂抱着他们……我用慈绳爱索牵引他们"（11:3-4概意）。

然后是旧约中最震撼的神学挣扎——神在审判与怜悯之间的"内心独白"："以法莲哪，我怎能舍弃你？以色列啊，我怎能弃绝你？……我回心转意，我的怜爱大大发动"（11:8）。全能的神在这里显出祂最柔软的一面——祂不是不能审判，而是不忍心。"因我是神，并非世人，是你们中间的圣者"（11:9）——正因为祂是神而非人，祂的爱才能超越人间的逻辑。

第十四章是全书的高潮——呼唤与应许："以色列啊，你要归向耶和华你的神……当归向耶和华，用言语祷告他说：求你除净罪孽，悦纳善行"（14:1-2）。神的回应是无条件的医治："我必医治他们背道的病，甘心爱他们"（14:4）。

全书以一句智慧文学式的结语结束："谁是智慧人，可以明白这些事？谁是通达人，可以知道这一切？因为耶和华的道是正直的；义人必在其中行走，罪人却在其上跌倒"（14:9）。`,
    content_en: `Chapter 11 contains one of the Old Testament's most moving theological expressions — God remembering Israel's childhood as a Father: "When Israel was a child, then I loved him, and called my son out of Egypt" (11:1; Matt 2:15 cites this as fulfilled in Christ's return from Egypt). "I taught Ephraim also to go, taking them by their arms... I drew them with cords of a man, with bands of love" (11:3–4).

Then comes the Old Testament's most stunning theological struggle — God's "inner monologue" between judgment and mercy: "How shall I give thee up, Ephraim? how shall I deliver thee, Israel?... mine heart is turned within me, my repentings are kindled together" (11:8). The Almighty God here reveals His tenderest side — not that He cannot judge but that He cannot bear to. "For I am God, and not man; the Holy One in the midst of thee" (11:9) — precisely because He is God and not man, His love transcends human logic.

Chapter 14 is the book's climax — call and promise: "O Israel, return unto the LORD thy God... Take with you words, and turn to the LORD: say unto him, Take away all iniquity, and receive us graciously" (14:1–2). God's response is unconditional healing: "I will heal their backsliding, I will love them freely" (14:4).

The book ends with a wisdom-literature-style conclusion: "Who is wise, and he shall understand these things? prudent, and he shall know them? for the ways of the LORD are right, and the just shall walk in them: but the transgressors shall fall therein" (14:9).`,
  },

{
    title_zh: `四、归回与复兴的应许（11-14章）`,
    title_en: `IV. The Promise of Return and Restoration (Ch. 11-14)`,
    content_zh: `何西阿书后半部从审判转向盼望。"以色列年幼的时候，我爱他，就从埃及召出我的儿子来"（11:1）——神对以色列的爱从一开始就是无条件的，如同父亲教导孩子走路。

"我怎能舍弃你？以法莲啊，我怎能弃绝你？以色列啊，我回心转意，我的怜爱大大发动"（11:8）。这是旧约中最深刻的神圣挣扎的描写——审判是公义的要求，怜悯是爱的本能。在神心中，怜悯胜了。

第14章是全书的高潮——归回的呼召和复兴的应许。"以色列啊，你要归向耶和华你的神……我必医治他们背道的病，甘心爱他们"（14:1, 4）。何西阿的婚姻不只是历史事件，更是福音的预表——基督就是那位爱不忠的新妇到底的丈夫，他的爱永远不放弃。`,
    content_en: `The latter half of Hosea turns from judgment to hope. "When Israel was a child, then I loved him, and called my son out of Egypt" (11:1) -- God's love for Israel was unconditional from the start, like a father teaching a child to walk.

"How shall I give thee up, Ephraim? how shall I deliver thee, Israel? mine heart is turned within me, my repentings are kindled together" (11:8). This is the Old Testament's most profound depiction of divine struggle -- judgment is what justice demands; mercy is love's instinct. In God's heart, mercy prevails.

Chapter 14 is the book's climax -- the call to return and the promise of restoration. "O Israel, return unto the LORD thy God... I will heal their backsliding, I will love them freely" (14:1, 4). Hosea's marriage is not merely historical but a gospel foreshadowing -- Christ is the husband who loves His unfaithful bride to the end; His love never gives up.`,
  }
];

const overview = {
  zh: `何西阿书是小先知书的第一卷（14章），先知何西阿在北国以色列末期（约公元前755-715年）事奉。全书以何西阿与不忠妻子歌篾的婚姻为核心比喻——神与以色列的关系就像丈夫与不忠妻子的关系。

何西阿书的核心是"חֶסֶד"（hesed，坚定的爱/慈爱）——神对不配之人的不离不弃。全书在审判与怜悯之间来回摆荡，最终怜悯得胜。何西阿教导我们：神的爱不是因为我们配得，而是因为祂就是爱。`,
  en: `Hosea is the first of the Minor Prophets (14 chapters). The prophet ministered in the Northern Kingdom during its final decades (c. 755–715 BC). The book's central metaphor is Hosea's marriage to unfaithful Gomer — God's relationship with Israel is like a husband's with an unfaithful wife.

Hosea's core is "חֶסֶד" (hesed, steadfast love/lovingkindness) — God's relentless love for the undeserving. The book oscillates between judgment and mercy, with mercy ultimately triumphant. Hosea teaches: God's love is not because we deserve it but because He is love.`,
};

const outline = [
  ["1-3章", "何西阿的婚姻与预言", "Ch. 1–3", "Hosea's Marriage and Prophecy"],
  ["4-5章", "控诉以色列与祭司", "Ch. 4–5", "Indictment of Israel and Priests"],
  ["6-7章", "虚假的悔改", "Ch. 6–7", "False Repentance"],
  ["8-10章", "种风收暴风", "Ch. 8–10", "Sow Wind, Reap Whirlwind"],
  ["11章", "神的父爱与挣扎", "Ch. 11", "God's Fatherly Love"],
  ["12-13章", "历史回顾与审判", "Ch. 12–13", "Historical Review and Judgment"],
  ["14章", "归回与医治的呼召", "Ch. 14", "Call to Return and Healing"],
];

const keyVerse = {
  zh: `"我必医治他们背道的病，甘心爱他们。"（何西阿书 14:4）`,
  en: `"I will heal their backsliding, I will love them freely." (Hosea 14:4)`,
};

const info = { nameZh: `何西阿书`, nameEn: `Hosea`, author: `何西阿`, date: `约公元前755-715年`, chapters: `14章`, backHref: `/old-testament/minor-prophets`, backLabel: `小先知书`, bibleId: `HOS` };

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