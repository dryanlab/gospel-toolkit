'use client';
import Link from 'next/link';
import SpeakButton from '@/components/SpeakButton';
import { useState } from 'react';

const sections = [
  {
    title_zh: `一、爱的渴慕与初遇（1-3章）`,
    title_en: `I. Love's Longing and First Encounter (Ch. 1–3)`,
    content_zh: `雅歌以新妇热切的渴望开始："愿他用口与我亲嘴，因你的爱情比酒更美"（1:2）。这是一种毫不掩饰的爱的表达——圣经从不认为爱情本身是可耻的，相反，神所设立的婚姻之爱是美好的。

新妇虽自觉卑微——"我虽然黑，却是秀美"（1:5），但良人对她的爱不因外貌而改变。这指向一个深层的属灵真理：教会虽然在罪中被玷污，基督的爱却不改变。

第二章有雅歌最著名的诗句之一："我的佳偶，我的美人，起来！与我同去！因为冬天已往，雨水止住过去了。地上百花开放，百鸟鸣叫的时候已经来到"（2:10-12）。这段春天的描写充满生命的盼望——爱的季节来临了。

第三章新妇在夜间寻找良人——"我夜间躺卧在床上，寻找我心所爱的，我寻找他却寻不见"（3:1）。爱不总是甜蜜的同在，有时也经历寻找和等候的痛苦。这预表信徒在属灵黑夜中寻找基督的经历。`,
    content_en: `The Song opens with the bride's ardent desire: "Let him kiss me with the kisses of his mouth: for thy love is better than wine" (1:2). This is an unashamed expression of love — Scripture never considers love itself shameful; rather, marital love as God designed it is beautiful.

Though the bride feels lowly — "I am black, but comely" (1:5) — the beloved's love does not change based on appearance. This points to a deeper spiritual truth: though the church is stained by sin, Christ's love remains constant.

Chapter 2 contains one of the Song's most famous passages: "Rise up, my love, my fair one, and come away. For, lo, the winter is past, the rain is over and gone; The flowers appear on the earth; the time of the singing of birds is come" (2:10–12). This depiction of spring overflows with life's hope — the season of love has arrived.

In chapter 3, the bride searches for her beloved at night — "By night on my bed I sought him whom my soul loveth: I sought him, but I found him not" (3:1). Love is not always sweet presence; sometimes it involves the pain of searching and waiting. This foreshadows the believer's experience of seeking Christ in spiritual darkness.`,
  },
  {
    title_zh: `二、爱的盟约与赞美（4-6章）`,
    title_en: `II. Love's Covenant and Praise (Ch. 4–6)`,
    content_zh: `第四章是良人对新妇之美的详细赞美——从头到脚的描述在古代近东婚礼诗歌（wasf）中很常见。良人说："我的佳偶，你全然美丽，毫无瑕疵！"（4:7）在神学层面上，这预表基督对教会的宣告——"毫无瑕疵"不是因为教会本身完美，而是因为基督的爱使她完全。

"关锁的园，禁闭的井，封闭的泉源"（4:12）——新妇的纯洁以园子的封闭来比喻。当新妇开放她的园子，她说"愿我的良人进入自己园里，吃他佳美的果子"（4:16）。婚姻中的亲密是神所赐的礼物。

第五章出现了第二次"寻而不见"的经历（5:6）。新妇向耶路撒冷的众女子描述良人之美——"我的良人白而且红，超乎万人之上"（5:10）。这段描述在教父解经中被理解为对基督荣美的描绘——白代表神性的纯洁，红代表受难的宝血。

"我属我的良人，我的良人也属我"（6:3）——这是圣约关系最简洁的表达。在婚姻中是夫妻的委身，在属灵层面是信徒与基督的联合。`,
    content_en: `Chapter 4 is the beloved's detailed praise of the bride's beauty — head-to-toe descriptions common in ancient Near Eastern wedding poetry (wasf). The beloved declares: "Thou art all fair, my love; there is no spot in thee" (4:7). Theologically, this foreshadows Christ's declaration over the church — "no spot" not because the church is inherently perfect but because Christ's love makes her complete.

"A garden inclosed is my sister, my spouse; a spring shut up, a fountain sealed" (4:12) — the bride's purity is compared to a sealed garden. When the bride opens her garden, she says: "Let my beloved come into his garden, and eat his pleasant fruits" (4:16). Marital intimacy is a gift from God.

Chapter 5 presents a second "sought but found not" experience (5:6). The bride describes the beloved's beauty to the daughters of Jerusalem — "My beloved is white and ruddy, the chiefest among ten thousand" (5:10). Church fathers understood this as depicting Christ's glory — white for divine purity, ruddy for the blood of suffering.

"I am my beloved's, and my beloved is mine' (6:3) — the most concise expression of covenant relationship. In marriage, it speaks of spousal commitment; spiritually, of the believer's union with Christ.`,
  },
  {
    title_zh: `三、爱的力量——众水不能熄灭（7-8章）`,
    title_en: `III. Love's Power — Many Waters Cannot Quench It (Ch. 7–8)`,
    content_zh: `雅歌的最后两章达到全书的高潮。第七章继续赞美新妇之美，良人说"你何其美好！何其可悦！"（7:6）。

第八章包含了雅歌最深刻的神学宣告："求你将我放在心上如印记，带在你臂上如戳记。因为爱情如死之坚强，嫉恨如阴间之残忍；所发的电光是火焰的电光，是耶和华的烈焰。爱情，众水不能息灭，大水也不能淹没"（8:6-7上）。

"耶和华的烈焰"——这是全书唯一直接提到神名的地方。爱情的火焰不是人自己点燃的，而是来自耶和华。这把火如死一样不可抗拒，如阴间一样不肯放手，连众水也不能熄灭。在改革宗传统中，这被理解为指向基督对教会不可摧毁的爱——连死亡也不能将我们与基督的爱隔绝（罗8:38-39）。

雅歌以"快来！我的良人哪"（8:14概意）作结——爱的渴望永不止息。这呼应了启示录最后的祷告："主耶稣啊，我愿你来！"（启22:20）。从旧约的爱情诗到新约的终末盼望，贯穿的是同一个渴望：与良人永远同在。`,
    content_en: `The final two chapters reach the book's climax. Chapter 7 continues praising the bride's beauty: "How fair and how pleasant art thou, O love, for delights!" (7:6).

Chapter 8 contains the Song's most profound theological declaration: "Set me as a seal upon thine heart, as a seal upon thine arm: for love is strong as death; jealousy is cruel as the grave: the coals thereof are coals of fire, which hath a most vehement flame. Many waters cannot quench love, neither can the floods drown it" (8:6–7).

"A most vehement flame" — in Hebrew literally "the flame of the LORD" (šalhebetyāh). This is the only place in the book where God's name appears directly. Love's fire is not kindled by humans but comes from the LORD. This fire is as irresistible as death, as unyielding as the grave, unquenchable even by many waters. In the Reformed tradition, this points to Christ's indestructible love for the church — not even death can separate us from the love of Christ (Rom 8:38–39).

The Song concludes with "Make haste, my beloved" (8:14) — love's longing never ceases. This echoes Revelation's final prayer: "Even so, come, Lord Jesus" (Rev 22:20). From the Old Testament love poem to the New Testament's eschatological hope, the same longing runs through: to be forever with the Beloved.`,
  }
];

const overview = {
  zh: `雅歌（希伯来文"歌中之歌"，即最美的歌）是所罗门写的爱情诗歌，描绘了良人与新妇之间热烈、纯洁的爱情。全书8章没有明显的叙事结构，而是以对话和独白的形式展开。

历代解经传统对雅歌有两种主要理解：（一）字面意义上赞美婚姻之爱，肯定神所设立的男女之爱的美好；（二）寓意上预表基督与教会的关系（弗5:25-32）。改革宗传统认为两者并行不悖——雅歌既是对婚姻的赞美，也是对基督之爱的预表。雅歌教导我们：爱是神最伟大的礼物之一，而人间最深的爱也不过是永恒之爱的影子。`,
  en: `The Song of Solomon (Hebrew "Song of Songs," i.e., the greatest song) is Solomon's love poem depicting the ardent, pure love between the beloved and the bride. Its 8 chapters lack a clear narrative structure, unfolding through dialogue and monologue.

Two main interpretive traditions exist: (1) literally praising marital love, affirming the beauty of the love between man and woman as God designed it; (2) allegorically foreshadowing Christ's relationship with the church (Eph 5:25–32). The Reformed tradition holds both together — the Song is both a celebration of marriage and a type of Christ's love. It teaches: love is one of God's greatest gifts, and the deepest human love is but a shadow of eternal love.`,
};

const outline = [
  ["1:1-2:7", "新妇的渴慕与初遇", "Ch. 1:1–2:7", "Bride's Longing; First Meeting"],
  ["2:8-3:5", "春天的邀约与夜间寻找", "Ch. 2:8–3:5", "Spring's Invitation; Night Search"],
  ["3:6-5:1", "婚礼与新婚之夜", "Ch. 3:6–5:1", "Wedding and Wedding Night"],
  ["5:2-6:3", "第二次寻找与赞美", "Ch. 5:2–6:3", "Second Search and Praise"],
  ["6:4-8:4", "爱的赞美与渴望", "Ch. 6:4–8:4", "Love's Praise and Desire"],
  ["8:5-14", "爱的力量与永恒", "Ch. 8:5–14", "Love's Power and Eternity"],
];

const theology = {
  title_zh: `核心神学：盟约之爱的颂歌`,
  title_en: `Core Theology: A Song of Covenant Love`,
  content_zh: `雅歌是圣经中最独特的书卷——一首纯粹的爱情诗，没有律法、没有先知预言、没有历史叙事。它的存在本身就是一个神学宣告：爱情是神创造的美好礼物，值得被歌颂。

第一，爱情的神圣性。在一个将灵与肉对立的宗教文化中，雅歌大胆地肯定了身体之爱的美善。"我属我的良人，他也恋慕我"（7:10）——这是创世记2:24"二人成为一体"的诗意回响。改革宗传统反对灵肉二元论，肯定婚姻中的亲密关系是神所设立的——韦敏斯德信条24章论婚姻："婚姻是为了夫妻间彼此的帮助……并为了繁殖具有纯洁后裔的人类。"雅歌证明婚姻之爱不是"必要之恶"，而是创造之善。

第二，基督与教会的预表。犹太传统将雅歌解读为耶和华与以色列之间的爱情；基督教传统进一步将它解读为基督与教会的关系。以弗所书5:25-32保罗将婚姻关系直接比喻为"基督爱教会"。"我的佳偶，你全然美丽，毫无瑕疵"（4:7）——基督看祂的教会正是如此：不是因为教会自身完美，而是因为基督的义遮盖了她的一切瑕疵。

第三，爱情的排他性与忠贞。"求你将我放在你心上如印记，带在你臂上如戳记；因为爱情如死之坚强"（8:6）。雅歌的爱情不是浪漫主义的多情，而是排他的、全然委身的、至死不渝的。这正是盟约之爱的本质——神对祂子民的爱是排他的（"除我以外你不可有别的神"），也是至死不渝的（"我总不撇下你，也不丢弃你"，来13:5）。

第四，爱的不可购买。"若有人拿家中所有的财宝要换爱情，就全被藐视"（8:7）。真正的爱不是交易——它不能被金钱、权力或任何外在条件购买。这是恩典的本质：救恩不是靠功德换来的，而是神白白的赐予。"你们得救是本乎恩，也因着信；这并不是出于自己，乃是神所赐的"（弗2:8）。`,
  content_en: `The Song of Solomon is the most unique book in the Bible — a pure love poem with no law, no prophecy, no historical narrative. Its very existence is a theological declaration: romantic love is a good gift from God, worthy of celebration.

First, the sacredness of love. In a religious culture that pits spirit against flesh, the Song boldly affirms the goodness of bodily love. "I am my beloved's, and his desire is toward me" (7:10) — this is the poetic echo of Genesis 2:24, "they shall be one flesh." The Reformed tradition opposes spirit-flesh dualism and affirms that intimacy within marriage is God-ordained — the Westminster Confession chapter 24 on marriage: "Marriage was ordained for the mutual help of husband and wife... and for the increase of mankind with legitimate issue." The Song proves that marital love is not a "necessary evil" but a creational good.

Second, a type of Christ and the church. Jewish tradition reads the Song as the love between the LORD and Israel; Christian tradition further reads it as the relationship between Christ and His church. In Ephesians 5:25-32, Paul directly compares the marriage relationship to "Christ loved the church." "Thou art all fair, my love; there is no spot in thee" (4:7) — this is exactly how Christ sees His church: not because the church is inherently perfect, but because Christ's righteousness covers all her blemishes.

Third, the exclusivity and faithfulness of love. "Set me as a seal upon thine heart, as a seal upon thine arm: for love is strong as death" (8:6). The Song's love is not romantic fickleness but exclusive, fully committed, and faithful unto death. This is the very nature of covenant love — God's love for His people is exclusive ("Thou shalt have no other gods before me") and faithful unto death ("I will never leave thee, nor forsake thee," Heb 13:5).

Fourth, love cannot be purchased. "If a man would give all the substance of his house for love, it would utterly be contemned" (8:7). True love is not a transaction — it cannot be bought with money, power, or any external condition. This is the nature of grace: salvation is not earned by merit but freely given by God. "By grace are ye saved through faith; and that not of yourselves: it is the gift of God" (Eph 2:8).`,
};

const keyVerse = {
  zh: `"求你将我放在你心上如印记，带在你臂上如戳记。因为爱情如死之坚强，嫉恨如阴间之残忍。所发的电光是火焰的电光，是耶和华的烈焰。"（雅歌 8:6）`,
  en: `"Set me as a seal upon thine heart, as a seal upon thine arm: for love is strong as death; jealousy is cruel as the grave: the coals thereof are coals of fire, which hath a most vehement flame." (Song of Solomon 8:6)`,
};

const info = { nameZh: `雅歌`, nameEn: `Song of Solomon`, author: `所罗门`, date: `约公元前960年`, chapters: `8章`, backHref: `/old-testament/poetry`, backLabel: `诗歌智慧书`, bibleId: `SNG` };


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