'use client';
import Link from 'next/link';
import SpeakButton from '@/components/SpeakButton';
import { useState } from 'react';

const sections = [
  {
    title_zh: `一、以东的骄傲与审判（1-9节）`,
    title_en: `I. Edom's Pride and Judgment (v. 1–9)`,
    content_zh: `俄巴底亚书开门见山宣告对以东的审判。以东人是以扫的后裔，住在西珥山的悬崖峭壁中——佩特拉古城所在之处。他们自恃地势险要，觉得无人能攻取。

神直接挑战以东的骄傲："住在磐石穴中、居所在高处的啊，你因心里骄傲，自己说：'谁能将我拉下地去呢？'你虽如大鹰高飞，在星宿之间搭窝，我必从那里拉下你来"（3-4节）。骄傲是以东的核心罪——这也是一切罪的根源。

审判是彻底的。连盟友和朋友都要背叛以东——"与你结盟的都送你上路，直到交界；与你和好的欺骗你，且胜过你"（7节）。以东引以为傲的智慧和勇士都将消灭——"以扫山的人都必被杀戮剪除"（9节）。`,
    content_en: `Obadiah opens with a direct pronouncement of judgment on Edom. The Edomites were Esau's descendants, dwelling in the cliffs of Mount Seir — the site of ancient Petra. They trusted in their fortified position, believing no one could conquer them.

God directly challenges Edom's pride: "The pride of thine heart hath deceived thee, thou that dwellest in the clefts of the rock, whose habitation is high; that saith in his heart, Who shall bring me down to the ground? Though thou exalt thyself as the eagle, and though thou set thy nest among the stars, thence will I bring thee down, saith the LORD" (v. 3–4). Pride is Edom's core sin — and the root of all sin.

Judgment is total. Even allies and friends will betray Edom — "All the men of thy confederacy have brought thee even to the border: the men that were at peace with thee have deceived thee, and prevailed against thee" (v. 7). Edom's famed wisdom and warriors shall perish — "thy mighty men, O Teman, shall be dismayed, to the end that every one of the mount of Esau may be cut off by slaughter" (v. 9).`,
  },
  {
    title_zh: `二、以东对兄弟的罪（10-14节）`,
    title_en: `II. Edom's Sin Against a Brother (v. 10–14)`,
    content_zh: `以东被审判的具体原因在第十至十四节——当巴比伦攻破耶路撒冷时，以东不但没有帮助自己的兄弟犹大，反而幸灾乐祸、趁火打劫。

"因你向兄弟雅各行强暴，羞愧必遮盖你，你也必永远断绝"（10节）。以扫和雅各虽然世代为仇，但血缘之约仍在——以东对犹大的态度违背了兄弟之义。

先知用八个"不应当"列出以东的罪状（12-14节）：不应当在兄弟遭难时瞪眼看，不应当在他们被灭时欢乐，不应当在他们遭难时说狂傲的话，不应当趁火打劫，不应当在岔路口拦截逃难者，不应当将他们交给仇敌。

这段经文的现代意义极为深刻——当别人遭难时，旁观者的冷漠和趁火打劫同样是罪。沉默不是中立，而是帮凶。`,
    content_en: `The specific reason for Edom's judgment appears in verses 10–14 — when Babylon breached Jerusalem, Edom not only failed to help brother Judah but gloated and plundered.

"For thy violence against thy brother Jacob shame shall cover thee, and thou shalt be cut off for ever" (v. 10). Though Esau and Jacob were rivals for generations, the bond of kinship remained — Edom's attitude toward Judah violated the obligation of brotherhood.

The prophet lists eight "thou shouldest not have" charges (v. 12–14): should not have looked on their calamity, should not have rejoiced over them in destruction, should not have spoken proudly in distress, should not have entered the gate to plunder, should not have stood in crossroads to cut off fugitives, should not have delivered up survivors to the enemy.

This passage's modern relevance is profound — when others suffer, bystanders' indifference and opportunistic plundering are equally sinful. Silence is not neutrality but complicity.`,
  },
  {
    title_zh: `三、耶和华的日子与锡安的得胜（15-21节）`,
    title_en: `III. The Day of the LORD and Zion's Victory (v. 15–21)`,
    content_zh: `全书最后七节将视野从以东扩展到万国——"耶和华降罚的日子临近万国。你怎样行，他也必照样向你行。你的报应必归到你头上"（15节）。这是旧约中"种什么收什么"最简洁的表述。

最后的应许是锡安的最终得胜——"在锡安山必有逃脱的人，那山也必成圣"（17节上）。雅各家必得回自己的产业，约瑟家如火焰，以扫家如碎秸——"国度就归耶和华了"（21节下）。

俄巴底亚书虽然只有一章二十一节，但涵盖了完整的神学结构：骄傲必被降卑，不义必受审判，神的国度必最终得胜。这卷最短的旧约书用最简洁的方式传递了最完整的信息。`,
    content_en: `The final seven verses expand the horizon from Edom to all nations — "For the day of the LORD is near upon all the heathen: as thou hast done, it shall be done unto thee: thy reward shall return upon thine own head" (v. 15). This is the Old Testament's most concise statement of "you reap what you sow."

The final promise is Zion's ultimate victory — "But upon mount Zion shall be deliverance, and there shall be holiness" (v. 17). The house of Jacob shall possess their inheritance, the house of Joseph a flame, the house of Esau stubble — "and the kingdom shall be the LORD's' (v. 21).

Though only one chapter of twenty-one verses, Obadiah encompasses a complete theological structure: pride will be humbled, injustice judged, God's kingdom ultimately triumphant. The shortest Old Testament book delivers the fullest message in the most concise form.`,
  },
  {
    title_zh: `四、以扫与雅各：历史背景与神学意义`,
    title_en: `IV. Esau and Jacob: Historical Background and Theological Significance`,
    content_zh: `要理解俄巴底亚书，必须了解以东与以色列之间绵延数百年的兄弟恩怨。以东人是以扫的后裔，以色列人是雅各的后裔——两人是双胞胎兄弟（创25:24-26）。以扫将长子名分卖给雅各（创25:29-34），后来又失去了父亲的祝福（创27章），从此两族之间结下了深仇。

以东人位于以色列南部的西珥山地，控制要道，对路过的旅行者征收过路费。公元前586年耶路撒冷被巴比伦攻陷时，以东人不仅幸灾乐祸，还积极协助巴比伦军队——"外邦人进他城门，为耶路撒冷拈阄，你也像他们中间的一个"（11节）。这是对"兄弟之邦"最深的背叛。

从神学角度，以东代表了"骄傲的肉体"——以自己的智慧（8节）、勇士（9节）、山势险峻（3-4节）为靠，却忘记了一切都在神的手中。俄巴底亚书是对每一个依靠自身优势而轻视他人的人的警告："你心里狂傲，自以为必没有人能将你拉下来"（3节）——而神的审判将证明这是虚妄的自信。`,
    content_en: `To understand Obadiah, one must know the centuries-long fraternal enmity between Edom and Israel. Edomites were descendants of Esau; Israelites of Jacob — twin brothers (Gen 25:24-26). Esau sold his birthright to Jacob (Gen 25:29-34) and later lost his father's blessing (Gen 27), from which point the two nations bore deep enmity.

Edom occupied the hill country of Seir south of Israel, controlling key trade routes and extracting tolls from travelers. When Jerusalem fell to Babylon in 586 BC, the Edomites not only rejoiced but actively assisted the Babylonian forces — "thou wast as one of them" who cast lots for Jerusalem (v. 11). This was the deepest betrayal of a "brother nation."

Theologically, Edom represents "the pride of the flesh" — trusting in their own wisdom (v. 8), warriors (v. 9), and mountain strongholds (vv. 3-4), forgetting that everything is in God's hands. Obadiah warns everyone who relies on their own advantages while despising others: "The pride of thine heart hath deceived thee, thou that dwellest in the clefts of the rock, whose habitation is high; that saith in his heart, Who shall bring me down to the ground?" (v. 3, KJV) — God's judgment will prove this confidence vain.`,
  },
];

const overview = {
  zh: `俄巴底亚书是旧约最短的书卷（仅1章21节），但信息极为集中——宣告对以东的审判。以东是以扫的后裔，与以色列（雅各的后裔）有血缘关系，但世代为仇。

写作时间可能在耶路撒冷陷落（公元前586年）之后不久，因为以东在犹大最危难的时刻幸灾乐祸、趁火打劫。俄巴底亚书教导：骄傲必被降卑，袖手旁观兄弟受难就是犯罪，而最终的国度属于耶和华。`,
  en: `Obadiah is the shortest Old Testament book (just 1 chapter, 21 verses), yet its message is intensely focused — judgment on Edom. Edom descended from Esau and shared kinship with Israel (Jacob's descendants) but was hostile for generations.

Written likely shortly after Jerusalem's fall (586 BC), when Edom gloated and plundered during Judah's darkest hour. Obadiah teaches: pride will be humbled, standing by while a brother suffers is sin, and the kingdom ultimately belongs to the LORD.`,
};

const outline = [
  ["1-4节", "以东的骄傲", "v. 1–4", "Edom's Pride"],
  ["5-9节", "审判的彻底", "v. 5–9", "Totality of Judgment"],
  ["10-14节", "对兄弟的罪", "v. 10–14", "Sin Against a Brother"],
  ["15-18节", "耶和华的日子", "v. 15–18", "Day of the LORD"],
  ["19-21节", "锡安得胜，国度归耶和华", "v. 19–21", "Zion's Victory; Kingdom Is the LORD's"],
];

const keyVerse = {
  zh: `"耶和华降罚的日子临近万国。你怎样行，他也必照样向你行。你的报应必归到你头上。"（俄巴底亚书 15节）`,
  en: `"For the day of the LORD is near upon all the heathen: as thou hast done, it shall be done unto thee: thy reward shall return upon thine own head." (Obadiah 15)`,
};

const info = { nameZh: `俄巴底亚书`, nameEn: `Obadiah`, author: `俄巴底亚`, date: `约公元前586年后`, chapters: `1章`, backHref: `/old-testament/minor-prophets`, backLabel: `小先知书`, bibleId: `OBA` };

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