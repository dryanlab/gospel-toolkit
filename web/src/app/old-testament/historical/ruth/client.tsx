'use client';
import Link from 'next/link';
import SpeakButton from '@/components/SpeakButton';
import { useState } from 'react';

const sections = [
  {
    title_zh: `一、离开与回归——拿俄米的苦楚（1章）`,
    title_en: `I. Departure and Return — Naomi's Bitterness (Ch. 1)`,
    content_zh: `路得记开篇是一幅素描：以利米勒带着妻子拿俄米和两个儿子从伯利恒去往摩押，因为迦南地有饥荒。在摩押，两个儿子分别娶了摩押女子俄珥巴和路得。然后丈夫死了，两个儿子也死了——拿俄米成了"三重寡妇"，在异乡，一无所有。

拿俄米决定回故乡伯利恒。她催促两个儿媳各自回娘家，俄珥巴流泪亲嘴回去了。但路得说出了圣经中最美的誓言之一："你往哪里去，我也往那里去；你在哪里住宿，我也在那里住宿；你的国就是我的国，你的神就是我的神；你在哪里死，我也在那里死，也葬在那里"（1:16-17）。

这不仅是儿媳对婆婆的忠心，更是一个外邦女子归依以色列神的信仰决志。路得抛下自己的过去、家人、国家、宗教，投靠了拿俄米的神——这是救恩的缩影：离开、跟随、全然委身。拿俄米回到伯利恒说"不要叫我拿俄米，要叫我玛拉（苦）"——她以为神忘记了她，却不知神的救赎已经在路上。`,
    content_en: `Ruth opens with a brief sketch: Elimelech took his wife Naomi and two sons from Bethlehem to Moab because of famine in Canaan. In Moab, the sons married Moabite women, Orpah and Ruth. Then the husband died, and both sons died — Naomi became a "triple widow," in a foreign land, with nothing.

Naomi decided to return to her homeland of Bethlehem. She urged her daughters-in-law to return to their own families; Orpah wept, kissed her, and went back. But Ruth spoke one of the most beautiful vows in all of Scripture: "Whither thou goest, I will go; and where thou lodgest, I will lodge: thy people shall be my people, and thy God my God: Where thou diest, will I die, and there will I be buried" (1:16–17).

This was not merely a daughter-in-law's loyalty to her mother-in-law but a Gentile woman's declaration of faith in Israel's God. Ruth abandoned her past, family, nation, and religion, casting herself upon Naomi's God — a picture of salvation: departure, following, total surrender. Naomi returned to Bethlehem saying "Call me not Naomi, call me Mara [bitter]" — she thought God had forgotten her, not knowing His redemption was already on the way.`,
  },
  {
    title_zh: `二、田间的相遇——神护理之工（2章）`,
    title_en: `II. Meeting in the Field — Divine Providence (Ch. 2)`,
    content_zh: `第二章充满了"恰好"：路得"恰好"到了拿俄米的丈夫以利米勒家族的波阿斯的那块地；波阿斯"恰好"从伯利恒来到田里；他们"恰好"相遇……圣经中的这些"恰好"是神护理之工的文学密码——没有什么是偶然的。

波阿斯是伯利恒一位德高望重的财主。他一来到田里就注意到路得，向仆人打听后，主动邀请路得在自己的田里拾穗、在少年人旁边紧跟，并吩咐工人特意留下一些麦穗让她拾取。他给路得水喝，请她与工人同桌吃饭，态度超越了律法的要求——他是真正的恩典。

路得回家将所发生的一切告诉拿俄米，拿俄米说了关键的话："这人是我们本族的人，是我们的至近亲属之一"（2:20）。"至近亲属"（希伯来文 גֹּאֵל，goel）是旧约中"救赎者"的法律概念：有责任为族人赎回土地、娶孤寡为妻、为被杀害的族人报仇。这为第三四章的高潮埋下伏笔。`,
    content_en: `Chapter 2 is filled with "happenings": Ruth "happened" to come to the portion of the field belonging to Boaz, of the family of Elimelech; Boaz "happened" to come from Bethlehem to the field; they "happened" to meet. These "happenings" in Scripture are literary codes for divine providence — nothing is accidental.

Boaz was a mighty man of wealth in Bethlehem, a man of great standing. He came to the field, noticed Ruth, inquired about her, and took the initiative to invite her to glean in his field, to stay close to his workers, and commanded his servants to deliberately leave stalks for her. He gave her water to drink and invited her to eat at his table — his actions exceeded what the law required. He was the embodiment of grace.

Ruth returned and told Naomi everything; Naomi said the key words: "The man is near of kin unto us, one of our next kinsmen" (2:20). "Next kinsman" (Hebrew גֹּאֵל, goel) is the legal concept of "redeemer" in the Old Testament: one obligated to redeem a kinsman's land, marry a widow of the family, and avenge a murdered kinsman. This sets the stage for the climax of chapters 3–4.`,
  },
  {
    title_zh: `三、打麦场与救赎——波阿斯迎娶路得（3-4章）`,
    title_en: `III. The Threshing Floor and Redemption — Boaz Marries Ruth (Ch. 3–4)`,
    content_zh: `第三章是最戏剧性的场景。拿俄米指导路得在打麦场上找到波阿斯，在他脚边躺下，以古代近东的方式提出结婚请求。波阿斯醒来见到路得说的话是整本书的精华："你的名声，我本城的人全知道，你是个贤德的女子"（3:11）。他愿意娶路得，但承认有一位比他更近的亲属必须先被询问。

第四章是法律程序：波阿斯在城门口（古代的法庭和商业中心）召集那位更近的亲属和十位长老。那人本来愿意赎地，但当他得知赎地必须同时娶路得为妻时，他拒绝了，摘下鞋子交给波阿斯（古代放弃权利的法律象征）。于是波阿斯公开宣告迎娶路得。

全书的神学高点在最后一节：路得和波阿斯所生的儿子俄备得，俄备得成为耶西的父亲，耶西是大卫的父亲。这位从摩押来的外邦寡妇，因她的忠心与信心，成了大卫的曾祖母，进入了弥赛亚的家谱（太1:5）。

波阿斯是基督的完美预表：他是至近亲属，有能力也有意愿救赎；他不计较路得的外邦人身份，接纳她进入以色列；他付出代价完成了救赎。正如基督成为我们的至近亲属（道成肉身），有能力和意愿救赎我们，不计代价将我们纳入神的家。`,
    content_en: `Chapter 3 contains the most dramatic scene. Naomi instructed Ruth to find Boaz on the threshing floor, lie at his feet, and by this ancient Near Eastern gesture request marriage. Boaz, awakening to find Ruth, said what is perhaps the most beautiful line in the book: "All the city of my people doth know that thou art a virtuous woman" (3:11). He was willing to marry Ruth but acknowledged there was a nearer kinsman who must be consulted first.

Chapter 4 is the legal proceeding: Boaz assembled the nearer kinsman and ten elders at the city gate (the ancient court and commercial center). The nearer kinsman was willing to redeem the land until he learned it required marrying Ruth, at which point he declined, removed his sandal and gave it to Boaz (the ancient legal symbol of relinquishing a right). Boaz then publicly proclaimed he would marry Ruth.

The theological climax of the book comes in the final verse: the son born to Ruth and Boaz was Obed, Obed became the father of Jesse, Jesse the father of David. This Gentile widow from Moab, through her faithfulness and faith, became David's great-grandmother and entered the messianic genealogy (Matt 1:5).

Boaz is a perfect type of Christ: he is the kinsman-redeemer with both the ability and the willingness to redeem; he did not hold Ruth's Gentile identity against her but received her into Israel; he paid the cost to complete the redemption — just as Christ became our kinsman-redeemer (through the incarnation), able and willing to redeem us regardless of cost, bringing us into God's family.`,
  },
  {
    title_zh: `四、路得书的核心神学：神的护理与忠诚之爱`,
    title_en: `IV. Core Theology of Ruth: Providence and Covenant Love`,
    content_zh: `路得书从未明确提到神的神迹或异象，但神的护理之手在每一页都清晰可见。路得"碰巧"拾穗在波阿斯的田间（2:3）——这个"碰巧"是希伯来文 מִקְרֶה (miqreh)，意为"偶然发生"，但作者用这词是带着讽刺意味的：在神的治理下，没有真正的偶然。

整卷书的关键词是 חֶסֶד (hesed)——通常译为"恩慈"或"慈爱"。拿俄米两次用这个词：一次称赞路得对婆婆的 hesed（1:8），一次赞美波阿斯对她们的 hesed（2:20）。这个词在旧约中既用于人与人之间的忠诚之爱，也用于神对以色列的盟约之爱。路得对拿俄米的忠心（"你往哪里去，我也往那里去"，1:16），是 hesed 在人际关系中最美丽的体现，也折射出神对祂子民那永不改变的盟约之爱。

路得书还承载着一个突破性的神学信息：救恩不限于以色列人。摩押女子路得——一个外邦人、一个寡妇、一个穷人——因着信心与忠心，不仅得到了接纳，更进入了弥赛亚的家谱。神的恩典没有种族边界。这预表了新约时代，借着基督，"并不分犹太人、希腊人，并不分为奴的、自主的，也不分男女，因为你们在基督耶稣里都成为一了"（加3:28）。`,
    content_en: `The book of Ruth never explicitly mentions a miracle or vision, yet God's providential hand is visible on every page. Ruth "happened to come" to the portion of the field belonging to Boaz (2:3) — this "happened" translates the Hebrew מִקְרֶה (miqreh), meaning "chance occurrence," but the author uses the word with irony: under God's governance, there is no true chance.

The book's keyword is חֶסֶד (hesed) — typically translated "lovingkindness" or "steadfast love." Naomi uses the word twice: once commending Ruth's hesed toward her mother-in-law (1:8), and once praising Boaz's hesed toward them (2:20). In the Old Testament this word describes both human loyal love and God's covenant love toward Israel. Ruth's faithfulness to Naomi ("whither thou goest, I will go," 1:16) is hesed's most beautiful human expression, reflecting God's own unchanging covenant love for His people.

Ruth also carries a breakthrough theological message: salvation is not limited to Israelites. Ruth the Moabite — a Gentile, a widow, a poor woman — through faith and faithfulness was not merely accepted but entered the Messianic genealogy. God's grace has no ethnic boundary. This prefigures the New Testament era: through Christ, "there is neither Jew nor Greek, there is neither bond nor free, there is neither male nor female: for ye are all one in Christ Jesus" (Gal 3:28, KJV).`,
  },
];

const overview = {
  zh: `路得记是旧约中最精美的短篇叙事之一，全书4章讲述了士师时代一个小人物的故事——却是整个救赎历史的缩影。它夹在士师记的黑暗与撒母耳记的王国之间，像一朵盛开在荒漠中的花，以忠心、慈爱（希伯来文 חֶסֶד，hesed）和神的护理为主题。

路得记的神学贡献在于：第一，彰显神的慈爱（hesed）不仅临到以色列人，也临到外邦人（路得是摩押人）。第二，呈现了"至近亲属救赎"（goel）的神学，预表基督的救赎。第三，路得进入大卫的家谱，证明救恩从来不是种族主义的——神拣选任何真心信靠祂的人。`,
  en: `Ruth is one of the most exquisitely crafted short narratives in the Old Testament — four chapters telling the story of an ordinary person in the time of the judges, yet a microcosm of the entire history of redemption. Sandwiched between the darkness of Judges and the kingdom of Samuel, it blooms like a flower in the desert, with the themes of faithfulness, lovingkindness (Hebrew חֶסֶד, hesed), and divine providence.

Ruth's theological contributions are threefold: first, it reveals that God's hesed extends not only to Israelites but to Gentiles (Ruth was a Moabite). Second, it presents the theology of "kinsman-redeemer" (goel), foreshadowing Christ's redemption. Third, Ruth's entry into David's genealogy proves that salvation has never been ethnic — God chooses anyone who truly trusts in Him.`,
};

const outline = [
  ["1:1-5", "以利米勒一家去摩押", "1:1–5", "Elimelech's Family Goes to Moab"],
  ["1:6-18", "拿俄米归回；路得的誓言", "1:6–18", "Naomi Returns; Ruth's Vow"],
  ["1:19-22", "回到伯利恒", "1:19–22", "Return to Bethlehem"],
  ["2:1-7", "路得在田间拾穗", "2:1–7", "Ruth Gleans in the Field"],
  ["2:8-16", "波阿斯的恩待", "2:8–16", "Boaz's Kindness to Ruth"],
  ["2:17-23", "路得回家告知拿俄米", "2:17–23", "Ruth Returns to Naomi"],
  ["3:1-9", "拿俄米的计划与打麦场", "3:1–9", "Naomi's Plan; The Threshing Floor"],
  ["3:10-18", "波阿斯的应允", "3:10–18", "Boaz's Promise"],
  ["4:1-12", "城门的救赎仪式", "4:1–12", "Redemption at the City Gate"],
  ["4:13-22", "路得生子与大卫家谱", "4:13–22", "Ruth's Son; David's Genealogy"],
];

const keyVerse = {
  zh: `"你往哪里去，我也往那里去；你在哪里住宿，我也在那里住宿；你的国就是我的国，你的神就是我的神。"（路得记 1:16）`,
  en: `"Whither thou goest, I will go... thy God my God." (Ruth 1:16)`,
};

const info = { nameZh: `路得记`, nameEn: `Ruth`, author: `撒母耳（传统）`, date: `约公元前1100年`, chapters: `4章`, backHref: `/old-testament/historical`, backLabel: `历史书`, bibleId: `RUT` };

export default function BookGuide() {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link href={info.backHref} className="inline-flex items-center gap-1 text-sm text-[var(--color-accent)] hover:underline mb-6">← {info.backLabel}</Link>
      <div className="text-center mb-10"><span className="text-5xl mb-4 block">📖</span><h1 className="font-serif-cn text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-2">{info.nameZh}导读</h1><p className="text-base text-[var(--color-text-secondary)] italic mb-4">A Guide to the Book of {info.nameEn}</p><div className="flex justify-center gap-4 text-xs text-[var(--color-text-secondary)]"><span>✍️ 作者：{info.author}</span><span>📅 {info.date}</span><span>📄 {info.chapters}</span></div></div>
      <div className="mb-10 p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)]"><h2 className="font-serif-cn text-lg font-bold text-[var(--color-text)] mb-3">📋 全书概览</h2><div className="flex items-start gap-2 mb-3"><SpeakButton text={overview.zh} lang="zh" /><p className="text-sm text-[var(--color-text)] leading-relaxed font-serif-cn">{overview.zh}</p></div><div className="flex items-start gap-2"><SpeakButton text={overview.en} lang="en" /><p className="text-xs text-[var(--color-text-secondary)] italic leading-relaxed">{overview.en}</p></div></div>
      <div className="mb-10 p-5 rounded-xl bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border border-amber-200 dark:border-amber-800"><p className="text-sm font-bold text-amber-800 dark:text-amber-300 mb-1">🔑 金句 Key Verse</p><p className="font-serif-cn text-base text-[var(--color-text)] font-bold leading-relaxed">{keyVerse.zh}</p><p className="text-sm text-[var(--color-text-secondary)] italic mt-1">{keyVerse.en}</p></div>
      <div className="mb-6"><h2 className="font-serif-cn text-xl font-bold text-[var(--color-text)] mb-1">📚 分段导读</h2><p className="text-xs text-[var(--color-text-secondary)] italic mb-4">Section-by-Section Guide</p></div>
      <div className="space-y-4">{sections.map((sec, i) => (<div key={i} className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] overflow-hidden"><button onClick={() => setExpandedIdx(expandedIdx === i ? null : i)} className="w-full flex items-center justify-between px-6 py-4 text-left cursor-pointer hover:bg-[var(--color-accent)]/5 transition-colors"><div><h3 className="font-serif-cn text-base font-bold text-[var(--color-text)]">{sec.title_zh}</h3><p className="text-xs text-[var(--color-text-secondary)] italic">{sec.title_en}</p></div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-5 h-5 text-[var(--color-text-secondary)] transition-transform ${expandedIdx === i ? 'rotate-180' : ''}`}><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" /></svg></button>{expandedIdx === i && (<div className="px-6 pb-5 border-t border-[var(--color-border)]"><div className="flex items-start gap-2 mt-4 mb-4"><SpeakButton text={sec.content_zh} lang="zh" /><p className="text-sm text-[var(--color-text)] leading-relaxed font-serif-cn whitespace-pre-line">{sec.content_zh}</p></div><div className="flex items-start gap-2"><SpeakButton text={sec.content_en} lang="en" /><p className="text-xs text-[var(--color-text-secondary)] italic leading-relaxed whitespace-pre-line">{sec.content_en}</p></div></div>)}</div>))}</div>
      <div className="mt-10 p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)]"><h2 className="font-serif-cn text-lg font-bold text-[var(--color-text)] mb-4">🗂️ 章节大纲</h2>{(() => { const half = Math.ceil(outline.length / 2); const col1 = outline.slice(0, half); const col2 = outline.slice(half); const renderItem = ([zh, desc, chEn, descEn]: string[], i: number) => (<div key={i} className="py-1.5 border-b border-[var(--color-border)]/30 last:border-b-0"><div className="flex items-baseline gap-2"><span className="font-bold text-[var(--color-accent)] min-w-[65px] shrink-0">{zh}</span><span className="text-[var(--color-text)]">{desc}</span></div><div className="flex items-baseline gap-2 mt-0.5"><span className="text-[var(--color-text-secondary)] text-xs italic min-w-[65px] shrink-0">{chEn}</span><span className="text-[var(--color-text-secondary)] text-xs italic">{descEn}</span></div></div>); return (<div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 text-sm"><div>{col1.map((item, i) => renderItem(item, i))}</div><div>{col2.map((item, i) => renderItem(item, i + half))}</div></div>); })()}</div>
      <div className="mt-8 text-center"><Link href={`/bible/${info.bibleId}`} className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--color-accent)] text-white font-bold hover:opacity-90 transition-opacity">📖 阅读{info.nameZh} Read {info.nameEn}</Link></div>
    </div>
  );
}