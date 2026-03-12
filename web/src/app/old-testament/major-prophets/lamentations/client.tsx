'use client';
import Link from 'next/link';
import SpeakButton from '@/components/SpeakButton';
import { useState } from 'react';

const sections = [
  {
    title_zh: `一、耶路撒冷的荒凉（第1-2章）`,
    title_en: `I. Jerusalem's Desolation (Ch. 1–2)`,
    content_zh: `哀歌第一章以一声叹息开始："先前满有人民的城，现在何竟独坐！先前在列国中为大的，现在竟如寡妇"（1:1）。耶路撒冷被拟人化为一个被遗弃的妇人，在夜间痛哭，泪流满面（1:2）。

第一章的后半段是耶路撒冷自己的声音——她承认这苦难是因为自己的罪："耶和华是公义的，他这样待我，是因我违背他的命令"（1:18上）。哀歌没有把耶路撒冷描绘成无辜的受害者，而是让她在痛苦中认罪——这是真正的悔改。

第二章转为先知的视角，描绘神的审判之烈："主如仇敌吞灭以色列"（2:5上）。这是整卷书最令人震惊的表述——神自己成了敌人。圣殿被毁、节期停止、先知不再有异象。最惨烈的画面是："慈心的妇人，当我众民被毁灭的时候，亲手煮自己的儿女作为食物"（4:10）。

但即使在最深的黑暗中，先知仍然向神呼求："耶和华啊，求你观看，见你向谁这样行"（2:20）。哀歌教导我们：即使神是施行审判的那位，我们仍然只能向祂呼求——因为除祂以外，没有别的盼望。`,
    content_en: `The first chapter opens with a sigh: "How doth the city sit solitary, that was full of people! how is she become as a widow! she that was great among the nations" (1:1). Jerusalem is personified as a forsaken woman weeping in the night, her tears on her cheeks (1:2).

The latter half gives voice to Jerusalem herself — she acknowledges this suffering is due to her own sin: "The LORD is righteous; for I have rebelled against his commandment" (1:18). Lamentations does not portray Jerusalem as an innocent victim but has her confess in the midst of pain — this is true repentance.

Chapter 2 shifts to the prophet's perspective, depicting the ferocity of God's judgment: "The LORD was as an enemy: he hath swallowed up Israel" (2:5). This is the book's most shocking statement — God Himself became the enemy. The temple destroyed, festivals ceased, prophets received no more visions. The most harrowing image: "The hands of the pitiful women have sodden their own children: they were their meat in the destruction of the daughter of my people" (4:10).

Yet even in deepest darkness, the prophet still cries out to God: "Behold, O LORD, and consider to whom thou hast done this" (2:20). Lamentations teaches: even when God is the one executing judgment, we can still only cry out to Him — for apart from Him, there is no other hope.`,
  },
  {
    title_zh: `二、在绝望中的盼望（第3章）`,
    title_en: `II. Hope in the Midst of Despair (Ch. 3)`,
    content_zh: `第三章是哀歌的核心，也是全书的转折点。它是一首完整的三重字母离合诗（每个希伯来字母重复三节），共66节，是五首哀歌中最长的一首。

前段（3:1-18）是个人苦难的极致描绘："我是因耶和华忿怒的杖遭遇困苦的人"（3:1）。先知感到被围困、被黑暗笼罩、祷告被挡住。直到3:18他说："我的力量衰败；我在耶和华那里毫无指望。"

然后，在最深的绝望中，出现了旧约最著名的盼望宣告："我想起这事，心里就有指望。我们不致消灭，是出于耶和华诸般的慈爱；是因他的怜悯不致断绝。每早晨，这都是新的；你的诚实极其广大！我心里说：耶和华是我的份，因此，我要仰望他"（3:21-24）。

这段经文之所以震撼，正是因为它的上下文——不是在顺境中说"神真好"，而是在城被毁、民被掳、一切都完了的时候说"耶和华的慈爱不致断绝"。这才是真正的信心——不是基于环境，而是基于神不改变的本性。

先知接着教导等候的智慧："人仰望耶和华，静默等候他的救恩，这原是好的"（3:26）。"人在幼年负轭，这原是好的"（3:27）。苦难不是毫无意义的，而是神管教的方式——"因为主必不永远丢弃人。主虽使人忧愁，还要照他诸般的慈爱发怜悯"（3:31-32）。`,
    content_en: `Chapter 3 is the heart and turning point of Lamentations. It is a complete triple acrostic poem (each Hebrew letter repeated three verses), 66 verses total — the longest of the five laments.

The opening section (3:1–18) depicts the extreme of personal suffering: "I am the man that hath seen affliction by the rod of his wrath" (3:1). The prophet feels besieged, enveloped in darkness, his prayer shut out. By 3:18 he says: "My strength and my hope is perished from the LORD."

Then, in the deepest despair, comes the Old Testament's most famous declaration of hope: "This I recall to my mind, therefore have I hope. It is of the LORD's mercies that we are not consumed, because his compassions fail not. They are new every morning: great is thy faithfulness. The LORD is my portion, saith my soul; therefore will I hope in him' (3:21–24).

What makes this passage so powerful is precisely its context — not praising God's goodness in prosperity but declaring "the LORD's mercies never cease' when the city is destroyed, the people exiled, and everything lost. This is true faith — based not on circumstances but on God's unchanging nature.

The prophet then teaches the wisdom of waiting: "It is good that a man should both hope and quietly wait for the salvation of the LORD" (3:26). "It is good for a man that he bear the yoke in his youth" (3:27). Suffering is not meaningless but God's mode of discipline — "For the Lord will not cast off for ever: But though he cause grief, yet will he have compassion according to the multitude of his mercies" (3:31–32).`,
  },
  {
    title_zh: `三、记念与祈求（第4-5章）`,
    title_en: `III. Remembrance and Petition (Ch. 4–5)`,
    content_zh: `第四章回到对灾难的描绘，但语气从震惊转为沉痛的反思。先知将耶路撒冷昔日的荣耀与今日的凄凉对比："锡安的贵胄素来比雪纯净，比奶更白……现在他们的面貌比煤炭更黑"（4:7-8概意）。

第四章特别指出祭司和先知的责任——"这都因他先知的罪恶和祭司的罪孽"（4:13上）。耶路撒冷的毁灭不仅是百姓犯罪的后果，更是属灵领袖失职的结果。这对今天的教会领袖是严肃的警告。

第五章是全民的祷告——"耶和华啊，求你记念我们所遭遇的事，观看我们所受的凌辱"（5:1）。这首祷告承认罪是代际的——"我们列祖犯罪，而今不在了；我们担当他们的罪孽"（5:7）。

全书最后的祷告充满张力："耶和华啊，你存到永远；你的宝座存到万代。你为何永远忘记我们？为何许久离弃我们？耶和华啊，求你使我们向你回转，我们便得回转。求你复新我们的日子，好像古时一样"（5:19-21）。

然后全书以一个没有回答的问题结束："你竟全然弃绝我们，向我们大发烈怒？"（5:22）这个开放式结尾是有意的——哀歌不提供廉价的安慰，它让痛苦的问题悬在那里，等待神自己来回答。而那个回答，在历史中确实来了——被掳七十年后，神使百姓归回。更终极的回答是基督——祂在十字架上承担了一切的哀恸。`,
    content_en: `Chapter 4 returns to depicting disaster but shifts from shock to somber reflection. The prophet contrasts Jerusalem's former glory with present desolation: "Her Nazarites were purer than snow, they were whiter than milk... their visage is blacker than a coal" (4:7–8 paraphrased).

Chapter 4 specifically indicts priests and prophets — "For the sins of her prophets, and the iniquities of her priests" (4:13). Jerusalem's destruction resulted not only from the people's sin but from spiritual leaders' failure. This is a solemn warning to church leaders today.

Chapter 5 is a communal prayer — "Remember, O LORD, what is come upon us: consider, and behold our reproach" (5:1). This prayer acknowledges sin is generational — "Our fathers have sinned, and are not; and we have borne their iniquities" (5:7).

The book's final prayer is full of tension: "Thou, O LORD, remainest for ever; thy throne from generation to generation. Wherefore dost thou forget us for ever, and forsake us so long time? Turn thou us unto thee, O LORD, and we shall be turned; renew our days as of old" (5:19–21).

The book ends with an unanswered question: "But thou hast utterly rejected us; thou art very wroth against us" (5:22). This open ending is intentional — Lamentations offers no cheap comfort, leaving the painful question suspended, awaiting God's own answer. That answer did come in history — after seventy years of exile, God brought the people back. The ultimate answer is Christ — who bore all grief upon the cross.`,
  },
];

const overview = {
  zh: `耶利米哀歌是五首哀悼耶路撒冷毁灭（公元前586年）的诗歌，传统认为是耶利米所写。全书五章，其中四首是字母离合诗（按希伯来22个字母的顺序排列），体现了在混乱中寻求秩序的努力。

哀歌的核心信息是：即使在神最严厉的审判中，祂的慈爱仍然不断绝（3:22-23）。这卷书教导我们如何在灾难中哀哭、认罪、并仍然仰望神。哀歌不逃避痛苦，也不提供简单答案，而是在最深的黑暗中为信心留下空间。`,
  en: `Lamentations consists of five poems mourning Jerusalem's destruction (586 BC), traditionally attributed to Jeremiah. Its five chapters include four alphabetic acrostics (arranged by the 22 Hebrew letters), embodying the effort to find order amid chaos.

The core message: even in God's severest judgment, His mercies never cease (3:22–23). This book teaches how to weep, confess, and still look to God in catastrophe. Lamentations neither avoids pain nor offers simple answers but makes room for faith in the deepest darkness.`,
};

const outline = [
  ["1章", "耶路撒冷如寡妇哭泣", "Ch. 1", "Jerusalem Weeps Like a Widow"],
  ["2章", "主如仇敌吞灭以色列", "Ch. 2", "The Lord as Enemy"],
  ["3章", "盼望的转折——慈爱不断绝", "Ch. 3", "The Turning Point — Mercies Never Cease"],
  ["4章", "昔日荣耀与今日凄凉", "Ch. 4", "Former Glory, Present Ruin"],
  ["5章", "全民的祷告", "Ch. 5", "Communal Prayer"],
];

const theology = {
  title_zh: `核心神学：废墟中的盼望——神的信实永不断绝`,
  title_en: `Core Theology: Hope Amid Ruins — God's Faithfulness Never Ceases`,
  content_zh: `耶利米哀歌是圣经中最纯粹的悲伤之书，五首诗哀悼耶路撒冷的毁灭。但正是在这最深的黑暗中，诞生了全圣经最美的信心宣告之一。

第一，哀悼的合法性。哀歌的存在本身就是一个神学宣告：悲伤是合法的，哀哭不是缺乏信心。耶稣自己也哭过（约11:35），保罗说"与哀哭的人要同哭"（罗12:15）。哀歌教导教会：不要急于用"一切都是神的旨意"来堵住悲伤的出口——先陪伴，先哀哭，然后才是安慰。

第二，"每早晨都是新的"——废墟中的信心。"我们不至消灭，是出于耶和华诸般的慈爱，是因祂的怜悯不至断绝。每早晨，这都是新的；你的诚实极其广大！"（3:22-23）。这段经文出现在全书的正中央——不是在光明中写成的赞美，而是在瓦砾中挤出的信仰。诗人亲眼看见圣殿被焚、百姓被屠、城池被毁，却仍然宣告："耶和华是我的份！因此，我要仰望祂"（3:24）。这才是真正的信心——不是在顺境中的感恩（那太容易了），而是在废墟中仍然信靠神的信实。

第三，罪的后果是真实的。哀歌不回避一个事实：耶路撒冷的毁灭是犹大自己罪的后果。"耶和华因她许多的罪过使她受苦"（1:5）。哀歌不怪神不公平，而是承认审判是公义的——"耶和华是公义的；祂这样待我，是因我违背祂的命令"（1:18）。真正的悔改从承认神的公义开始，不是从抱怨神的不公开始。

第四，字母离合诗的秩序。哀歌前四首采用希伯来字母离合体（acrostic）——每节以希伯来字母表的下一个字母开头。这个文学形式本身就是神学性的：在混乱中寻找秩序，在悲伤中保持纪律。即使世界崩塌，语言的秩序——也就是神所赐的理性——仍然在运作。苦难不是混乱的终结，而是在秩序中被承载的。`,
  content_en: `Lamentations is the purest book of grief in the Bible — five poems mourning Jerusalem's destruction. Yet it is precisely in this deepest darkness that one of Scripture's most beautiful declarations of faith is born.

First, the legitimacy of mourning. The very existence of Lamentations is a theological declaration: grief is legitimate; weeping is not a lack of faith. Jesus Himself wept (John 11:35); Paul said "weep with them that weep" (Rom 12:15). Lamentations teaches the church: do not rush to silence grief with "it is all God's will" — first accompany, first weep, then comfort.

Second, "new every morning" — faith amid ruins. "It is of the LORD's mercies that we are not consumed, because his compassions fail not. They are new every morning: great is thy faithfulness!" (3:22-23). This passage appears at the exact center of the book — not praise written in sunshine but faith wrung from rubble. The poet witnessed the temple burned, the people slaughtered, the city destroyed, yet still declared: "The LORD is my portion, saith my soul; therefore will I hope in him" (3:24). This is true faith — not gratitude in prosperity (that is too easy) but trusting God's faithfulness while standing in the ruins.

Third, the consequences of sin are real. Lamentations does not evade a hard truth: Jerusalem's destruction was the consequence of Judah's own sin. "The LORD hath afflicted her for the multitude of her transgressions" (1:5). Lamentations does not blame God for injustice but acknowledges the judgment was righteous — "The LORD is righteous; for I have rebelled against his commandment" (1:18). True repentance begins by acknowledging God's justice, not by complaining of His unfairness.

Fourth, the order of the acrostic poem. The first four poems employ the Hebrew alphabetic acrostic — each verse beginning with the next letter of the Hebrew alphabet. This literary form is itself theological: seeking order in chaos, maintaining discipline in grief. Even as the world collapses, the order of language — that is, the rationality God has given — continues to function. Suffering is not the end of chaos but is borne within order.`,
};

const keyVerse = {
  zh: `"我们不致消灭，是出于耶和华诸般的慈爱；是因他的怜悯不致断绝。每早晨，这都是新的；你的诚实极其广大！"（耶利米哀歌 3:22-23）`,
  en: `"It is of the LORD's mercies that we are not consumed, because his compassions fail not. They are new every morning: great is thy faithfulness." (Lamentations 3:22–23)`,
};

const info = { nameZh: `耶利米哀歌`, nameEn: `Lamentations`, author: `耶利米（传统观点）`, date: `约公元前586-585年`, chapters: `5章`, backHref: `/old-testament/major-prophets`, backLabel: `大先知书`, bibleId: `LAM` };


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