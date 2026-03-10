'use client';
import Link from 'next/link';
import SpeakButton from '@/components/SpeakButton';
import { useState } from 'react';

const sections = [
  {
    title_zh: `一、以利沙的事工——恩典的先知（1-8章）`,
    title_en: `I. Elisha's Ministry — The Prophet of Grace (Ch. 1–8)`,
    content_zh: `列王纪下以以利亚被火车火马接升天开始（2章）。以利沙拾起以利亚的外衣，用它击打约旦河水——水就左右分开，证明"感动以利亚的灵感动以利沙了"（2:15）。以利沙求"感动你的灵加倍地感动我"（2:9），他的事工也确实比以利亚更多元、更广泛。

以利亚的事工以审判为主；以利沙的事工则充满恩典与怜悯。他使泉水变甜（2:21），帮助穷寡妇还债（4:1-7），使书念妇人的儿子复活（4:32-37），在饥荒中以二十个饼喂饱一百人（4:42-44）——这些神迹预表了基督的事工。

乃缦的故事（5章）是旧约最重要的信息之一。这位亚兰军长来到以利沙面前求医治大麻风。以利沙吩咐他"去在约旦河中沐浴七回"（5:10）。乃缦起初愤怒——他想要的是壮观的仪式，不是简单的顺服。但当他最终照做，"他的肉复原，好像小孩子的肉"（5:14）。救恩从来不在乎人的功劳或仪式的壮观，在乎顺服神的话语。而且这位得医治的不是以色列人，而是外邦人——恩典不受种族限制。`,
    content_en: `2 Kings opens with Elijah taken up to heaven by a chariot of fire (ch. 2). Elisha picked up Elijah's mantle and struck the waters of the Jordan — they parted, confirming that "the spirit of Elijah doth rest on Elisha" (2:15). Elisha had asked for "a double portion of thy spirit" (2:9), and his ministry was indeed more varied and extensive than Elijah's.

Elijah's ministry was primarily one of judgment; Elisha's overflowed with grace and mercy. He healed poisoned waters (2:21), helped a poor widow pay her debts (4:1–7), raised the Shunammite's son from the dead (4:32–37), and fed a hundred men with twenty loaves during famine (4:42–44) — these miracles foreshadowed Christ's ministry.

The story of Naaman (ch. 5) is one of the most significant in the Old Testament. This Syrian commander came to Elisha seeking healing from leprosy. Elisha told him to "Go and wash in Jordan seven times" (5:10). Naaman was furious — he wanted a spectacular ritual, not simple obedience. But when he finally obeyed, "his flesh came again like unto the flesh of a little child" (5:14). Salvation never depends on human merit or spectacular ceremony but on obedience to God's word. Moreover, the one healed was not an Israelite but a Gentile — grace knows no ethnic boundary.`,
  },
  {
    title_zh: `二、北国以色列的灭亡（9-17章）`,
    title_en: `II. The Fall of the Northern Kingdom (Ch. 9–17)`,
    content_zh: `以利沙膏立耶户为以色列王，耶户对亚哈家执行了彻底的审判（9-10章），应验了以利亚对亚哈的预言。耶洗别在窗口被推下摔死（9:33），耶户剿灭了巴力崇拜。然而耶户"不离开尼八的儿子耶罗波安使以色列人陷在罪里的那罪"（10:29）——政治改革不等于属灵更新。

此后北国经历了一连串的王朝更迭，多数王"行耶和华眼中看为恶的事"。约阿施修复圣殿（12章）和约拿单二世的繁荣（14:23-29）是少有的亮点，但整体走向衰落。

第十七章是北国的终曲。公元前722年，亚述王攻取撒马利亚，将以色列人掳去。经文给出了详细的神学原因："这是因以色列人得罪那领他们出埃及地脱离埃及王法老手的耶和华他们的神，去敬畏别神"（17:7）。北国从耶罗波安的金牛犊开始，走了约二百年的背约之路，最终被神弃绝。

十七章的总结是列王纪最重要的神学段落之一：不是亚述太强，而是以色列的罪太深。亡国不是政治的失败，而是约的审判。`,
    content_en: `Elisha anointed Jehu as king of Israel, who executed thorough judgment on Ahab's house (ch. 9–10), fulfilling Elijah's prophecy against Ahab. Jezebel was thrown from a window to her death (9:33); Jehu destroyed Baal worship. Yet Jehu "departed not from the sins of Jeroboam the son of Nebat, who made Israel to sin" (10:29) — political reform does not equal spiritual renewal.

The northern kingdom thereafter experienced a succession of dynasties, most of whose kings "did that which was evil in the sight of the LORD." Joash's temple repair (ch. 12) and Jeroboam II's prosperity (14:23–29) were rare bright spots, but the overall trajectory was decline.

Chapter 17 is the northern kingdom's requiem. In 722 BC, the king of Assyria captured Samaria and carried Israel away. Scripture gives a detailed theological explanation: "For so it was, that the children of Israel had sinned against the LORD their God, which had brought them up out of the land of Egypt, from under the hand of Pharaoh king of Egypt, and had feared other gods" (17:7). From Jeroboam's golden calves, the northern kingdom walked a path of covenant-breaking for about two hundred years, until God finally rejected them.

Chapter 17's summary is one of the most important theological passages in Kings: it was not that Assyria was too strong but that Israel's sin was too deep. National destruction was not political failure but covenantal judgment.`,
  },
  {
    title_zh: `三、南国犹大的末路（18-25章）`,
    title_en: `III. The Last Days of Judah (Ch. 18–25)`,
    content_zh: `北国灭亡后，南国犹大又延续了约135年。这段时期出了两位伟大的改革君王。

希西家（18-20章）是大卫之后最敬虔的王之一。亚述王西拿基立围困耶路撒冷时，希西家"将书信在耶和华面前展开"（19:14），祈求拯救。那夜，"耶和华的使者出去，在亚述营中杀了十八万五千人"（19:35）。希西家的信心是：最强大的军事力量在神面前如同虚无。

约西亚（22-23章）发现了律法书——可能是申命记——在圣殿中被遗忘多年。他撕裂衣服痛悔（22:11），随后展开了犹大历史上最彻底的宗教改革：拆毁邱坛、除掉偶像、恢复逾越节。然而，"耶和华向犹大所发猛烈的怒气仍不止息，是因玛拿西诸事惹动他"（23:26）——个人的悔改无法抵消国家积累的罪债。约西亚在米吉多战死，犹大的命运就此注定。

最后三章记载犹大末代诸王和巴比伦的三次入侵。公元前586年，尼布甲尼撒摧毁耶路撒冷和圣殿，百姓被掳到巴比伦。列王纪下在黑暗中以一线微光结束：约雅斤王在巴比伦被释放，"在巴比伦王面前吃饭"（25:29）——大卫的后裔虽在流亡中，却没有被灭绝。大卫之约的应许仍在，弥赛亚的盼望仍存。`,
    content_en: `After the northern kingdom's fall, Judah survived approximately 135 more years. This period produced two great reforming kings.

Hezekiah (ch. 18–20) was one of the most godly kings since David. When Sennacherib of Assyria besieged Jerusalem, Hezekiah "spread the letter before the LORD" (19:14) and prayed for deliverance. That night, "the angel of the LORD went out, and smote in the camp of the Assyrians an hundred fourscore and five thousand" (19:35). Hezekiah's faith demonstrates that the mightiest military force is nothing before God.

Josiah (ch. 22–23) discovered the Book of the Law — likely Deuteronomy — forgotten in the temple for years. He rent his clothes in grief (22:11) and launched the most thorough religious reform in Judah's history: destroying high places, removing idols, restoring Passover. Yet "the LORD turned not from the fierceness of his great wrath... because of all the provocations that Manasseh had provoked him withal" (23:26) — individual repentance could not cancel the accumulated national debt of sin. Josiah died at Megiddo, and Judah's fate was sealed.

The final chapters record Judah's last kings and Babylon's three invasions. In 586 BC, Nebuchadnezzar destroyed Jerusalem and the temple; the people were exiled to Babylon. 2 Kings ends in darkness with a sliver of light: King Jehoiachin was released in Babylon and "did eat bread continually before the king of Babylon" (25:29) — David's line, though in exile, was not extinguished. The Davidic Covenant's promise endured; messianic hope survived.`,
  },

{
    title_zh: `五、两个王国的终结：审判的应验（17-25章）`,
    title_en: `V. The End of Two Kingdoms: Judgment Fulfilled (Ch. 17-25)`,
    content_zh: `列王纪下后半部记录了两个王国先后灭亡的过程。北国以色列在公元前722年被亚述所灭（17章）——"这是因以色列人得罪了领他们出埃及地的耶和华"（17:7）。列王纪的作者用整整一章来解释亡国的原因：不是军事失败，而是属灵背叛。

南国犹大在约西亚王的改革中短暂复兴（22-23章）——他在圣殿中发现了被遗忘的律法书，撕裂衣服，带领全民立约。然而约西亚之后的诸王迅速回到恶行中。公元前586年，巴比伦攻破耶路撒冷，圣殿被焚，百姓被掳（25章）。

列王纪下最后的记事是约雅斤王在巴比伦被善待（25:27-30）——在绝望中的一丝盼望。大卫的后裔仍然活着，神的应许尚未终结。即使在审判最严厉的时刻，恩典的火苗没有熄灭。`,
    content_en: `The latter half of 2 Kings records the successive fall of both kingdoms. Northern Israel fell to Assyria in 722 BC (ch. 17) -- "For so it was, that the children of Israel had sinned against the LORD their God, which had brought them up out of the land of Egypt" (17:7). The author devotes an entire chapter to explaining why: not military failure but spiritual apostasy.

Southern Judah briefly revived under King Josiah's reforms (ch. 22-23) -- he discovered the forgotten Book of the Law in the temple, tore his garments, and led the people to renew the covenant. But the kings after Josiah quickly returned to evil. In 586 BC, Babylon breached Jerusalem, the temple was burned, and the people were exiled (ch. 25).

2 Kings' final note is Jehoiachin's favorable treatment in Babylon (25:27-30) -- a glimmer of hope in despair. David's heir still lives; God's promises are not yet finished. Even at judgment's severest moment, the flame of grace was not extinguished.`,
  }
];

const overview = {
  zh: `列王纪下（希伯来圣经中列王纪上下原为一卷）接续上卷，记载了从以利沙的事工到南北两国相继灭亡的历史（约公元前850-586年）。北国以色列在公元前722年被亚述灭亡，南国犹大在公元前586年被巴比伦灭亡——约四百年的君王历史以被掳告终。

全书25章可分为三大段：以利沙的事工（1-8章）、北国以色列的衰亡（9-17章）、南国犹大的末路（18-25章）。列王纪下的核心信息是严肃的警告：即使有敬虔的王如希西家和约西亚，积累的罪终将带来审判。但同时，大卫的后裔在被掳中存留，弥赛亚的盼望不曾熄灭。`,
  en: `2 Kings (originally one book with 1 Kings in the Hebrew Bible) continues the narrative from Elisha's ministry to the successive falls of both kingdoms (c. 850–586 BC). The northern kingdom of Israel fell to Assyria in 722 BC; the southern kingdom of Judah fell to Babylon in 586 BC — roughly four centuries of monarchic history ending in exile.

Its 25 chapters divide into three sections: Elisha's ministry (ch. 1–8), the decline and fall of northern Israel (ch. 9–17), and the last days of Judah (ch. 18–25). The core message is a solemn warning: even godly kings like Hezekiah and Josiah cannot reverse accumulated sin's consequences. Yet David's line survived exile, and messianic hope endured.`,
};

const outline = [
  ["1章", "以利亚的最后审判", "Ch. 1", "Elijah's Final Judgment"],
  ["2章", "以利亚升天、以利沙继任", "Ch. 2", "Elijah's Ascension; Elisha Succeeds"],
  ["3-4章", "以利沙的神迹", "Ch. 3–4", "Elisha's Miracles"],
  ["5章", "乃缦得洁净", "Ch. 5", "Naaman's Cleansing"],
  ["6-7章", "围城与解围", "Ch. 6–7", "Siege and Deliverance"],
  ["8章", "书念妇人与哈薛", "Ch. 8", "The Shunammite; Hazael"],
  ["9-10章", "耶户的革命", "Ch. 9–10", "Jehu's Revolution"],
  ["11-12章", "亚他利雅与约阿施", "Ch. 11–12", "Athaliah and Joash"],
  ["13-16章", "南北诸王", "Ch. 13–16", "Kings of Judah and Israel"],
  ["17章", "北国灭亡", "Ch. 17", "Fall of the Northern Kingdom"],
  ["18-20章", "希西家王", "Ch. 18–20", "King Hezekiah"],
  ["21章", "玛拿西与亚们", "Ch. 21", "Manasseh and Amon"],
  ["22-23章", "约西亚的改革", "Ch. 22–23", "Josiah's Reform"],
  ["24-25章", "犹大灭亡与被掳", "Ch. 24–25", "Fall of Judah; Exile"],
];

const keyVerse = {
  zh: `"这是因以色列人得罪那领他们出埃及地、脱离埃及王法老手的耶和华他们的神，去敬畏别神。"（列王纪下 17:7）`,
  en: `"For so it was, that the children of Israel had sinned against the LORD their God, which had brought them up out of the land of Egypt, from under the hand of Pharaoh king of Egypt, and had feared other gods." (2 Kings 17:7)`,
};

const info = { nameZh: `列王纪下`, nameEn: `2 Kings`, author: `传统认为耶利米`, date: `约公元前850-586年`, chapters: `25章`, backHref: `/old-testament/historical`, backLabel: `历史书`, bibleId: `2KI` };

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