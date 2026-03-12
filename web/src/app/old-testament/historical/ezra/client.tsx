'use client';
import Link from 'next/link';
import SpeakButton from '@/components/SpeakButton';
import { useState } from 'react';

const sections = [
  {
    title_zh: `一、塞鲁士的命令与第一次归回（1-2章）`,
    title_en: `I. Cyrus' Decree and the First Return (Ch. 1-2)`,
    content_zh: `以斯拉书开篇以波斯王塞鲁士的命令开始——"耶和华神激动波斯王塞鲁士的心"（1:1），这正应验了以赛亚书135年前的预言（赛44:28）。神掌管历史，连外邦君王的心也在他手中。塞鲁士命令以色列人归回重建圣殿，并归还当年尼布甲尼撒掠夺的圣殿器皿。

第2章是归回者的名单——五万多人。这不是无聊的人口记录，而是每一个名字背后都是一个有血有肉的信心故事。他们离开了在巴比伦已经建立的家园和生活，回到一片废墟。信心总是需要离开舒适的代价。`,
    content_en: `Ezra opens with the Persian king Cyrus' decree -- "the LORD stirred up the spirit of Cyrus king of Persia" (1:1), fulfilling Isaiah's prophecy made 135 years earlier (Isaiah 44:28). God governs history; even the hearts of foreign kings are in His hand. Cyrus commanded Israel to return and rebuild the temple, returning the temple vessels Nebuchadnezzar had plundered.

Chapter 2 is the register of returnees -- over fifty thousand. This is not a tedious census but behind every name is a story of living faith. They left homes and livelihoods established in Babylon to return to ruins. Faith always requires the cost of leaving comfort.`,
  },
  {
    title_zh: `二、圣殿重建的属灵意义（3-6章）`,
    title_en: `II. The Spiritual Significance of Rebuilding the Temple (Ch. 3-6)`,
    content_zh: `归回的百姓首先重建祭坛、恢复献祭（3:2-3），然后开始建造圣殿。根基立好的那天，有两种声音交织在一起——年轻人欢呼，老年人哭泣（3:12-13），因为老人记得所罗门圣殿的荣耀。神的工作经常使人又哭又笑。

建殿遭遇外敌的阻挠（4章），工程停了十六年。先知哈该和撒迦利亚的激励使百姓重新动工（5:1-2），最终在大利乌王第六年完工（6:15）。"这殿后来的荣耀必大过先前的荣耀"（哈该书2:9）——这应许指向基督，他就是真正的圣殿（约翰福音2:21）。

阻挠与停工的16年教导我们：神的工程遭遇阻力是正常的，但神的旨意不会被永远阻拦。信心的考验在于是否在阻力中坚持到底。`,
    content_en: `The returned exiles first rebuilt the altar and restored sacrifices (3:2-3), then began constructing the temple. On the day the foundation was laid, two sounds mingled -- the young shouted for joy while the old wept (3:12-13), for the elders remembered Solomon's glory. God's work often brings both weeping and joy.

Building met opposition from enemies (ch. 4) and work stopped for sixteen years. Prophets Haggai and Zechariah stirred the people to resume (5:1-2), and the temple was completed in Darius' sixth year (6:15). "The glory of this latter house shall be greater than of the former" (Haggai 2:9) -- pointing to Christ, the true temple (John 2:21).

The sixteen years of opposition and stoppage teach us: encountering resistance in God's work is normal, but God's purposes cannot be permanently blocked. Faith is tested by whether we persevere through resistance.`,
  },
  {
    title_zh: `三、以斯拉的归来与信仰纯洁（7-8章）`,
    title_en: `III. Ezra's Return and the Purity of Faith (Ch. 7-8)`,
    content_zh: `第二次归回（约公元前458年）由以斯拉带领。以斯拉的身份独特："以斯拉定志考究遵行耶和华的律法，又将律例典章教训以色列人"（7:10）——他是祭司，也是文士，他的使命是把神的话带回给神的百姓。

亚达薛西王给以斯拉的授权书（7:12-26）是波斯历史上最宽容的宗教自由文件之一。神再次透过外邦君王成就他的旨意。以斯拉看见这份文件，"因为耶和华我们神施恩的手帮助我们，耶和华激动了王的心"（7:28）。

第8章记录了归回旅途的准备。以斯拉以禁食祷告代替向王求兵护卫（8:22-23），因为他已经向王夸口神的护理。信仰的一致性要求言行一致——说相信神保护，就不能靠人的护卫来"以防万一"。`,
    content_en: `The second return (c. 458 BC) was led by Ezra. Ezra's identity was unique: "Ezra had prepared his heart to seek the law of the LORD, and to do it, and to teach in Israel statutes and judgments" (7:10) -- he was both priest and scribe; his mission was to bring God's word back to God's people.

King Artaxerxes' letter of authorization to Ezra (7:12-26) is one of the most religiously tolerant documents in Persian history. God again accomplished His purposes through a foreign king. Ezra saw the letter and praised God: "the hand of the LORD my God was upon me, and I gathered together out of Israel chief men to go up with me" (7:28).

Chapter 8 records the preparations for the return journey. Ezra chose fasting and prayer rather than requesting military escort from the king (8:22-23), because he had already boasted to the king of God's protection. Integrity of faith requires consistency -- if you say you trust God's protection, you cannot rely on human escort "just in case."`,
  },
  {
    title_zh: `四、以斯拉的改革：分别为圣（9-10章）`,
    title_en: `IV. Ezra's Reform: Separation unto Holiness (Ch. 9-10)`,
    content_zh: `以斯拉到耶路撒冷后发现了一个严重的问题：百姓与外邦异族通婚（9:1-2）。这不仅是民族问题，更是信仰问题——他们在重蹈被掳前的覆辙，与拜偶像的民族混合，信仰的纯洁受到威胁。

以斯拉的反应极其震撼：撕裂衣服，拔头发和胡须，惊惧忧闷而坐（9:3）。他的认罪祷告（9:5-15）是圣经中最真诚的代祷之一："我们的罪孽灭顶，我们的罪恶滔天"（9:6）。他没有指责百姓，而是把自己包括在罪人中。

百姓被以斯拉的真诚感动，自愿悔改（10:1）。改革虽然痛苦，却是必要的——维护圣约的纯洁，是归回之民最重要的功课。以斯拉记教导：神的恢复是全面的，不只是外在的归回，更是内在的圣洁。`,
    content_en: `Upon arrival in Jerusalem, Ezra discovered a grave problem: the people had intermarried with foreign nations (9:1-2). This was not merely an ethnic issue but a matter of faith -- they were repeating the pre-exile sins, mixing with idol-worshipping peoples and threatening the purity of faith.

Ezra's response was stunning: he tore his garments, pulled out his hair and beard, and sat appalled (9:3). His confession prayer (9:5-15) is one of Scripture's most sincere intercessions: "Our iniquities are increased over our head, and our trespass is grown up unto the heavens" (9:6). He did not point fingers but included himself among the guilty.

The people were moved by Ezra's sincerity and willingly repented (10:1). Though painful, the reform was necessary -- preserving the purity of the covenant was the returnees' most vital lesson. Ezra teaches: God's restoration is comprehensive -- not just outward return but inward holiness.`,
  },
]

const overview = {
  zh: `以斯拉记记载了被掳巴比伦之后两次归回的历史。第一次（1-6章）由所罗巴伯带领，重建圣殿；第二次（7-10章）由以斯拉带领，恢复律法的教训。两次归回之间相隔约六十年。

以斯拉记的核心信息是：重建不仅是砖石的工程，更是信仰的工程。圣殿可以重建，但百姓的心若不归向神，一切外在的建设都是空的。以斯拉的使命——考究、遵行、教训神的律法——正是重建的属灵根基。`,
  en: `Ezra records two returns from Babylonian exile. The first (ch. 1–6), led by Zerubbabel, focused on rebuilding the temple; the second (ch. 7–10), led by Ezra, restored the teaching of the law. About sixty years separated the two returns.

The core message: rebuilding is not merely a project of bricks and mortar but of faith. The temple can be rebuilt, but if the people's hearts do not turn to God, all external construction is empty. Ezra's mission — to seek, to do, and to teach God's law — was the spiritual foundation of rebuilding.`,
};

const outline = [
  ["1章", "居鲁士诏书", "Ch. 1", "Cyrus's Edict"],
  ["2章", "归回者名单", "Ch. 2", "List of Returnees"],
  ["3章", "筑坛与立根基", "Ch. 3", "Altar Built; Foundation Laid"],
  ["4章", "敌人的阻挠", "Ch. 4", "Opposition"],
  ["5-6章", "圣殿建成", "Ch. 5–6", "Temple Completed"],
  ["7-8章", "以斯拉归回", "Ch. 7–8", "Ezra's Return"],
  ["9章", "以斯拉的祷告", "Ch. 9", "Ezra's Prayer"],
  ["10章", "百姓的悔改", "Ch. 10", "The People's Repentance"],
];

const theology = {
  title_zh: `核心神学：归回与重建——恩典的新起点`,
  title_en: `Core Theology: Return and Rebuilding — A New Beginning of Grace`,
  content_zh: `以斯拉记记载了被掳归回的历史——不是英雄凯旋的故事，而是一个被管教过的民族在恩典中重新起步。

第一，神掌管历史的走向。"耶和华为要应验借耶利米口所说的话，就激动波斯王古列的心"（1:1）。一个外邦帝国的皇帝下令释放犹太人归回，这不是政治巧合，而是神主权的运作。耶利米预言被掳七十年后必归回（耶25:11-12），而神正是用波斯帝国取代巴比伦来实现这预言。改革宗神学特别强调神的护理（providence）——"神从永远，按着祂自己旨意的智慧和美意的计划，自由不变地预定了将来所有要发生的事"（韦敏斯德信条3.1）。

第二，圣殿重建的优先性。归回的第一件事是重建圣殿，不是重建城墙或住宅。这表达了一个优先次序：敬拜先于一切。当仇敌阻挠建殿时，工程停顿了十六年（4:24）。但先知哈该和撒迦利亚起来鼓励百姓，神的话语成为重建的动力——"不是倚靠势力，不是倚靠才能，乃是倚靠我的灵方能成事"（亚4:6）。

第三，分别为圣的艰难抉择。以斯拉记最具争议性的段落是以斯拉要求百姓休掉外邦妻子（9-10章）。这不是种族歧视，而是盟约的忠诚——与外邦通婚的问题正是导致所罗门堕落和国度分裂的原因。以斯拉的祷告（9章）充满了代祷的谦卑："我的神啊，我抱愧蒙羞，不敢向我神仰面"——他把全民的罪当作自己的罪来认。

第四，话语的能力。以斯拉被描述为"敏捷的文士，通达耶和华以色列神所赐摩西的律法书"（7:6）。在一个没有圣殿（圣殿尚在重建）的时期，神的话语成为维系信仰的核心力量。以斯拉开创了犹太教"会堂传统"的先河——以诵读和解释律法为中心的聚会。这预表了改革宗传统对"讲道"的强调：教会的生命在于神话语的忠实传讲。`,
  content_en: `Ezra records the history of the return from exile — not a triumphant homecoming but a chastened people beginning anew under grace.

First, God directs the course of history. "That the word of the LORD by the mouth of Jeremiah might be fulfilled, the LORD stirred up the spirit of Cyrus king of Persia" (1:1). A Gentile emperor decreeing the release of the Jews was not a political coincidence but the operation of God's sovereignty. Jeremiah prophesied return after seventy years of exile (Jer 25:11-12), and God used Persia's overthrow of Babylon to fulfill this prophecy. Reformed theology particularly emphasizes divine providence — "God from all eternity, did, by the most wise and holy counsel of His own will, freely, and unchangeably ordain whatsoever comes to pass" (WCF 3.1).

Second, the priority of temple rebuilding. The first act upon return was rebuilding the temple — not the walls or homes. This expresses a clear priority: worship comes before everything. When enemies obstructed the work, construction halted for sixteen years (4:24). But the prophets Haggai and Zechariah arose to encourage the people, and God's word became the driving force of rebuilding — "Not by might, nor by power, but by my spirit, saith the LORD of hosts" (Zech 4:6).

Third, the painful choice of separation. Ezra's most controversial passage is his demand that the people put away their foreign wives (ch. 9-10). This was not racial discrimination but covenantal faithfulness — intermarriage with foreign peoples was precisely what caused Solomon's downfall and the kingdom's division. Ezra's prayer (ch. 9) overflows with intercessory humility: "O my God, I am ashamed and blush to lift up my face to thee" — he confessed the entire nation's sin as his own.

Fourth, the power of the Word. Ezra is described as "a ready scribe in the law of Moses, which the LORD God of Israel had given" (7:6). In a period without a functioning temple (it was still being rebuilt), God's Word became the core force sustaining faith. Ezra pioneered what would become the synagogue tradition — gatherings centered on reading and expounding the law. This prefigures the Reformed tradition's emphasis on preaching: the church's life depends on the faithful proclamation of God's Word.`,
};

const keyVerse = {
  zh: `"以斯拉定志考究遵行耶和华的律法，又将律例典章教训以色列人。"（以斯拉记 7:10）`,
  en: `"For Ezra had prepared his heart to seek the law of the LORD, and to do it, and to teach in Israel statutes and judgments." (Ezra 7:10)`,
};

const info = { nameZh: `以斯拉记`, nameEn: `Ezra`, author: `以斯拉`, date: `约公元前538-458年`, chapters: `10章`, backHref: `/old-testament/historical`, backLabel: `历史书`, bibleId: `EZR` };


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