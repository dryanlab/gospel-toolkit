'use client';
import Link from 'next/link';
import SpeakButton from '@/components/SpeakButton';
import { useState } from 'react';

const sections = [
  {
    title_zh: `一、神的忿怒与慈爱（第1章）`,
    title_en: `I. God's Wrath and Goodness (Ch. 1)`,
    content_zh: `那鸿书以一首半字母离合诗开始，宣告耶和华的本性。这段经文同时揭示了神的两个属性——审判与保护。

"耶和华是忌邪施报的神。耶和华施报大有忿怒；向他的敌人施报，向他的仇敌怀怒"（1:2）。神的忿怒不是失控的暴怒，而是对邪恶的圣洁回应。同一位神也"不轻易发怒，大有能力"（1:3上）——祂的忍耐已经给了亚述一百多年的机会（约拿时代亚述曾悔改，后来又回到罪中）。

然后是安慰的宣告："耶和华本为善，在患难的日子为人的保障，并且认得那些投靠他的人"（1:7）。这节经文是全书的神学平衡点——同一位审判亚述的神，也是保护祂百姓的避难所。

对犹大的好消息："看哪，有报好信传平安之人的脚登山。犹大啊，可以守你的节期，还你所许的愿吧！因为那恶人不再从你中间经过，他已灭绝净尽了"（1:15）。`,
    content_en: `Nahum opens with a partial alphabetic acrostic declaring the LORD's nature, revealing two divine attributes simultaneously — judgment and protection.

"God is jealous, and the LORD revengeth; the LORD revengeth, and is furious; the LORD will take vengeance on his adversaries, and he reserveth wrath for his enemies" (1:2). God's fury is not uncontrolled rage but a holy response to evil. This same God is also "slow to anger, and great in power" (1:3) — His patience had given Assyria over a century of opportunity (Assyria repented in Jonah's time but later returned to sin).

Then comes the comforting declaration: "The LORD is good, a strong hold in the day of trouble; and he knoweth them that trust in him" (1:7). This verse is the book's theological balance — the same God who judges Assyria is also the refuge protecting His people.

Good news for Judah: "Behold upon the mountains the feet of him that bringeth good tidings, that publisheth peace! O Judah, keep thy solemn feasts, perform thy vows: for the wicked shall no more pass through thee; he is utterly cut off" (1:15).`,
  },
  {
    title_zh: `二、尼尼微的陷落（第2-3章）`,
    title_en: `II. The Fall of Nineveh (Ch. 2–3)`,
    content_zh: `第二至三章是古代文学中对城市毁灭最生动的描绘之一。那鸿用急促的节奏和鲜明的画面描述尼尼微的攻破：

"盾牌发红，精兵衣服猩红。在他预备的日子，战车上的钢铁闪烁如火，柏木把的枪也抡起来了。车辆在街上急行，在宽阔处奔来奔去，形状如火把，飞跑如闪电"（2:3-4）。这段描写几乎像战地报道，充满动感和紧迫感。

"尼尼微自古以来充满人民，如同聚水的池子；现在居民却都逃跑"（2:8）。曾经不可一世的亚述帝国首都，现在一片狼藉。

第三章揭示尼尼微被毁的根本原因——不仅是军事暴力，更是道德败坏："祸哉！这流人血的城，充满谎诈和强暴"（3:1）。尼尼微被比作妓女——"因你淫行甚多，那美貌的妓女善用邪术，借淫行诱惑列国，用邪术诱惑多族"（3:4）。

那鸿问尼尼微一个修辞问题：底比斯（挪亚们，No-Amon）也是伟大的城市，有河流保护，有盟友支援，但照样被毁灭了——"尼尼微啊，你岂能比挪亚们还强吗？"（3:8）历史的教训是：没有帝国能永远站立。

公元前612年，巴比伦和玛代联军攻破尼尼微，应验了那鸿的预言。这座古代世界最强大的城市彻底毁灭，再也没有重建。`,
    content_en: `Chapters 2–3 contain one of ancient literature's most vivid depictions of a city's destruction. Nahum uses rapid rhythm and vivid imagery to describe Nineveh's fall:

"The shield of his mighty men is made red, the valiant men are in scarlet: the chariots shall be with flaming torches in the day of his preparation, and the fir trees shall be terribly shaken. The chariots shall rage in the streets, they shall justle one against another in the broad ways: they shall seem like torches, they shall run like the lightnings" (2:3–4). This reads almost like a battlefield report, full of action and urgency.

"But Nineveh is of old like a pool of water: yet they shall flee away" (2:8). The once-invincible capital of the Assyrian Empire now lies in ruin.

Chapter 3 reveals the root cause of Nineveh's destruction — not merely military violence but moral corruption: "Woe to the bloody city! it is all full of lies and robbery" (3:1). Nineveh is compared to a harlot — "Because of the multitude of the whoredoms of the wellfavoured harlot, the mistress of witchcrafts, that selleth nations through her whoredoms, and families through her witchcrafts" (3:4).

Nahum poses a rhetorical question: Thebes (No-Amon) was also a great city with river defenses and allies, yet it too was destroyed — "Art thou better than populous No?" (3:8). History's lesson: no empire stands forever.

In 612 BC, Babylonian and Median forces captured Nineveh, fulfilling Nahum's prophecy. This most powerful city of the ancient world was utterly destroyed, never to be rebuilt.`,
  }

,
];

const overview = {
  zh: `那鸿书（3章）是专门针对亚述帝国首都尼尼微的审判预言，写于约公元前663-612年之间（底比斯陷落之后、尼尼微陷落之前）。那鸿的名字意为"安慰"——对被亚述压迫了一百多年的犹大来说，尼尼微的毁灭就是安慰。

那鸿书与约拿书形成对比——约拿时代尼尼微悔改得救，那鸿时代尼尼微罪恶满盈必被审判。神的忍耐是真实的，但不是无限的。那鸿教导：神既是慈爱的避难所，也是公义的审判者。`,
  en: `Nahum (3 chapters) is a judgment prophecy specifically against Nineveh, capital of the Assyrian Empire, written between c. 663–612 BC (after Thebes' fall, before Nineveh's). Nahum's name means "comfort" — for Judah, oppressed by Assyria for over a century, Nineveh's destruction was comfort.

Nahum contrasts with Jonah — in Jonah's time Nineveh repented and was saved; in Nahum's time its sin was full and judgment certain. God's patience is real but not infinite. Nahum teaches: God is both a loving refuge and a righteous judge.`,
};

const outline = [
  ["1章", "耶和华的忿怒与慈爱", "Ch. 1", "The LORD's Wrath and Goodness"],
  ["2章", "尼尼微攻城战", "Ch. 2", "Nineveh's Siege"],
  ["3章", "流血之城的结局", "Ch. 3", "End of the Bloody City"],
];

const theology = {
  title_zh: `核心神学：神的公义审判与受压迫者的安慰`,
  title_en: `Core Theology: God's Righteous Judgment and Comfort for the Oppressed`,
  content_zh: `那鸿书是对亚述帝国首都尼尼微毁灭的预言。约拿书中尼尼微曾悔改得救，但他们的悔改没有持续——一百多年后，尼尼微重归残暴。

第一，神是公义的审判者。"耶和华不轻易发怒，大有能力，万不以有罪的为无罪"（1:3）。那鸿书提醒我们：神的忍耐不是纵容。祂"不轻易发怒"——但终究会发怒。亚述帝国以残暴闻名——活剥战俘皮肤、堆叠头颅——神最终追讨了这一切。"伸冤在我，我必报应"（罗12:19）不是空洞的承诺，而是确定的事实。

第二，受压迫者的福音。"看哪，有报好信传平安之人的脚登山"（1:15）。对被亚述欺压了数百年的犹大来说，尼尼微的毁灭就是好消息——压迫者终于被审判了。保罗在罗马书10:15引用类似的经文（赛52:7）指向福音的传播。审判恶人和拯救义人是同一枚硬币的两面。

第三，帝国的兴亡在神手中。亚述帝国曾横扫整个近东，似乎不可战胜。但在公元前612年，尼尼微在巴比伦和玛代的联军面前倒塌——那鸿的预言精确应验。任何帝国，无论多么强大，都不能超越神的审判。`,
  content_en: `Nahum prophesies the destruction of Nineveh, the Assyrian capital. In Jonah, Nineveh repented and was spared, but their repentance did not endure — over a century later, Nineveh returned to cruelty.

First, God is a righteous judge. "The LORD is slow to anger, and great in power, and will not at all acquit the wicked" (1:3). Nahum reminds us: God's patience is not permissiveness. He is "slow to anger" — but will eventually be angry. The Assyrian empire was notorious for brutality — flaying prisoners alive, piling skulls — and God ultimately held them accountable. "Vengeance is mine; I will repay, saith the Lord" (Rom 12:19) is not an empty promise but a certain fact.

Second, gospel for the oppressed. "Behold upon the mountains the feet of him that bringeth good tidings, that publisheth peace" (1:15). For Judah, oppressed by Assyria for centuries, Nineveh's destruction was good news — the oppressor was finally judged. Paul in Romans 10:15 cites a similar verse (Isa 52:7) pointing to gospel proclamation. Judging the wicked and delivering the righteous are two sides of the same coin.

Third, the rise and fall of empires is in God's hands. The Assyrian empire swept across the entire Near East, seemingly invincible. Yet in 612 BC, Nineveh fell before the combined forces of Babylon and Media — Nahum's prophecy precisely fulfilled. No empire, however powerful, can transcend God's judgment.`,
};

const keyVerse = {
  zh: `"耶和华本为善，在患难的日子为人的保障，并且认得那些投靠他的人。"（那鸿书 1:7）`,
  en: `"The LORD is good, a strong hold in the day of trouble; and he knoweth them that trust in him." (Nahum 1:7)`,
};

const info = { nameZh: `那鸿书`, nameEn: `Nahum`, author: `那鸿`, date: `约公元前663-612年`, chapters: `3章`, backHref: `/old-testament/minor-prophets`, backLabel: `小先知书`, bibleId: `NAH` };


function renderText(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

export default function BookGuide() {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link href={info.backHref} className="inline-flex items-center gap-1 text-sm text-[var(--color-accent)] hover:underline mb-6">← {info.backLabel}</Link>
      <div className="text-center mb-10"><span className="text-5xl mb-4 block">📖</span><h1 className="font-serif-cn text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-2">{info.nameZh}导读</h1><p className="text-base text-[var(--color-text-secondary)] italic mb-4">A Guide to {info.nameEn}</p><div className="flex justify-center gap-4 text-xs text-[var(--color-text-secondary)]"><span>✍️ 作者：{info.author}</span><span>📅 {info.date}</span><span>📄 {info.chapters}</span></div></div>
      <div className="mb-10 p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)]"><h2 className="font-serif-cn text-lg font-bold text-[var(--color-text)] mb-3">📋 全书概览</h2><div className="flex items-start gap-2 mb-3"><SpeakButton text={overview.zh} lang="zh" /><p className="text-sm text-[var(--color-text)] leading-relaxed font-serif-cn">{renderText(overview.zh)}</p></div><div className="flex items-start gap-2"><SpeakButton text={overview.en} lang="en" /><p className="text-xs text-[var(--color-text-secondary)] italic leading-relaxed">{renderText(overview.en)}</p></div></div>
      <div className="mb-10 p-5 rounded-xl bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border border-amber-200 dark:border-amber-800"><p className="text-sm font-bold text-amber-800 dark:text-amber-300 mb-1">🔑 金句 Key Verse</p><p className="font-serif-cn text-base text-[var(--color-text)] font-bold leading-relaxed">{keyVerse.zh}</p><p className="text-sm text-[var(--color-text-secondary)] italic mt-1">{keyVerse.en}</p></div>
      <div className="mb-6"><h2 className="font-serif-cn text-xl font-bold text-[var(--color-text)] mb-1">📚 分段导读</h2><p className="text-xs text-[var(--color-text-secondary)] italic mb-4">Section-by-Section Guide</p></div>
      <div className="space-y-4">{sections.map((sec, i) => (<div key={i} className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] overflow-hidden"><button onClick={() => setExpandedIdx(expandedIdx === i ? null : i)} className="w-full flex items-center justify-between px-6 py-4 text-left cursor-pointer hover:bg-[var(--color-accent)]/5 transition-colors"><div><h3 className="font-serif-cn text-base font-bold text-[var(--color-text)]">{sec.title_zh}</h3><p className="text-xs text-[var(--color-text-secondary)] italic">{sec.title_en}</p></div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-5 h-5 text-[var(--color-text-secondary)] transition-transform ${expandedIdx === i ? 'rotate-180' : ''}`}><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" /></svg></button>{expandedIdx === i && (<div className="px-6 pb-5 border-t border-[var(--color-border)]"><div className="flex items-start gap-2 mt-4 mb-4"><SpeakButton text={sec.content_zh} lang="zh" /><p className="text-sm text-[var(--color-text)] leading-relaxed font-serif-cn whitespace-pre-line">{renderText(sec.content_zh)}</p></div><div className="flex items-start gap-2"><SpeakButton text={sec.content_en} lang="en" /><p className="text-xs text-[var(--color-text-secondary)] italic leading-relaxed whitespace-pre-line">{renderText(sec.content_en)}</p></div></div>)}</div>))}</div>
      <div className="mt-10 p-6 rounded-2xl border border-amber-200 dark:border-amber-800 bg-gradient-to-br from-amber-50/50 to-orange-50/50 dark:from-amber-900/10 dark:to-orange-900/10"><h2 className="font-serif-cn text-lg font-bold text-[var(--color-text)] mb-1">⛪ {theology.title_zh}</h2><p className="text-xs text-[var(--color-text-secondary)] italic mb-4">{theology.title_en}</p><div className="flex items-start gap-2 mb-4"><SpeakButton text={theology.content_zh} lang="zh" /><p className="text-sm text-[var(--color-text)] leading-relaxed font-serif-cn whitespace-pre-line">{renderText(theology.content_zh)}</p></div><div className="flex items-start gap-2"><SpeakButton text={theology.content_en} lang="en" /><p className="text-xs text-[var(--color-text-secondary)] italic leading-relaxed whitespace-pre-line">{renderText(theology.content_en)}</p></div></div>
      <div className="mt-10 p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)]"><h2 className="font-serif-cn text-lg font-bold text-[var(--color-text)] mb-4">🗂️ 章节大纲</h2>{(() => { const half = Math.ceil(outline.length / 2); const col1 = outline.slice(0, half); const col2 = outline.slice(half); const renderItem = ([zh, desc, chEn, descEn]: string[], i: number) => (<div key={i} className="py-1.5 border-b border-[var(--color-border)]/30 last:border-b-0"><div className="flex items-baseline gap-2"><span className="font-bold text-[var(--color-accent)] min-w-[65px] shrink-0">{zh}</span><span className="text-[var(--color-text)]">{desc}</span></div><div className="flex items-baseline gap-2 mt-0.5"><span className="text-[var(--color-text-secondary)] text-xs italic min-w-[65px] shrink-0">{chEn}</span><span className="text-[var(--color-text-secondary)] text-xs italic">{descEn}</span></div></div>); return (<div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 text-sm"><div>{col1.map((item, i) => renderItem(item, i))}</div><div>{col2.map((item, i) => renderItem(item, i + half))}</div></div>); })()}</div>
      <div className="mt-8 text-center"><Link href={`/bible/${info.bibleId}`} className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--color-accent)] text-white font-bold hover:opacity-90 transition-opacity">📖 阅读{info.nameZh} Read {info.nameEn}</Link></div>
    </div>
  );
}