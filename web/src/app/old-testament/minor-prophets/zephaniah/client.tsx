'use client';
import Link from 'next/link';
import SpeakButton from '@/components/SpeakButton';
import { useState } from 'react';

const sections = [
  {
    title_zh: `一、耶和华大日的审判（1:1-2:3）`,
    title_en: `I. Judgment of the Great Day of the LORD (1:1–2:3)`,
    content_zh: `西番雅书以最彻底的审判宣告开始——神要从地上除灭万物："耶和华说：'我必从地上除灭万类。我必除灭人和牲畜，与空中的鸟、海里的鱼，以及绊脚石和恶人；我必将人从地上剪除。'这是耶和华说的"（1:2-3）。这几乎是创造的逆转——神曾在六日创造万物，现在宣告要除灭万物。

西番雅特别针对犹大的偶像崇拜——拜巴力的、拜天上万象的、指着玛勒堪起誓的，以及"转去不跟从耶和华，不寻求耶和华，也不访问他的"（1:6）。最后这一类人——冷淡、无所谓——在神眼中与偶像崇拜者同罪。

"耶和华的大日临近，临近而且甚快"（1:14）。这段对耶和华大日的描述是旧约中最震撼的："那日是忿怒的日子，是急难困苦的日子，是荒废凄凉的日子，是黑暗幽冥、密云乌黑的日子"（1:15）。中世纪拉丁圣诗《末日经》(Dies Irae)就是以这段经文为灵感创作的。

然而审判之前仍有呼召——"世上遵守耶和华典章的谦卑人哪，你们都当寻求耶和华，当寻求公义谦卑，或者在耶和华发怒的日子可以隐藏"（2:3）。"或者"——不是确定的应许，而是紧迫的呼吁：趁还有机会，赶紧悔改。`,
    content_en: `Zephaniah opens with the most sweeping judgment pronouncement — God will destroy everything from the face of the earth: "I will utterly consume all things from off the land, saith the LORD. I will consume man and beast; I will consume the fowls of the heaven, and the fishes of the sea, and the stumblingblocks with the wicked; and I will cut off man from off the land, saith the LORD" (1:2–3). This is almost a reversal of creation — God made all things in six days, now He declares He will destroy all things.

Zephaniah specifically targets Judah's idolatry — Baal worshippers, those who worship the host of heaven, those who swear by Malcham, and "them that are turned back from the LORD; and those that have not sought the LORD, nor enquired for him" (1:6). This last group — the indifferent, the apathetic — is equally guilty in God's sight as idol worshippers.

"The great day of the LORD is near, it is near, and hasteth greatly" (1:14). This description of the Day of the LORD is the Old Testament's most terrifying: "That day is a day of wrath, a day of trouble and distress, a day of wasteness and desolation, a day of darkness and gloominess, a day of clouds and thick darkness" (1:15). The medieval Latin hymn Dies Irae was inspired by this passage.

Yet before judgment comes an appeal — "Seek ye the LORD, all ye meek of the earth, which have wrought his judgment; seek righteousness, seek meekness: it may be ye shall be hid in the day of the LORD's anger' (2:3). "It may be" — not a guaranteed promise but an urgent plea: while there is still time, repent.`,
  },
  {
    title_zh: `二、对列国的审判（2:4-3:8）`,
    title_en: `II. Judgment Against the Nations (2:4–3:8)`,
    content_zh: `第二章将审判扩展到四面八方的列国——西方的非利士（2:4-7）、东方的摩押和亚扪（2:8-11）、南方的古实（2:12）、北方的亚述（2:13-15）。审判是全方位的，没有人能逃脱。

对亚述首都尼尼微的预言尤其引人注目——这座"安然居住的城，心里说：'唯有我，除我以外再没有别的'\"（2:15），将变为荒场，"成为野兽躺卧之处"。骄傲的自我神化是一切帝国灭亡的根源。

第三章1-8节转回耶路撒冷——"这悖逆、污秽、欺压的城有祸了！她不听从命令，不领受训诲，不倚靠耶和华，不亲近她的神"（3:1-2）。耶路撒冷的罪比列国更重——她有律法、有先知、有圣殿，却仍然悖逆。审判从神的家开始（彼前4:17）。`,
    content_en: `Chapter 2 expands judgment to nations in all four directions — Philistia to the west (2:4–7), Moab and Ammon to the east (2:8–11), Ethiopia to the south (2:12), Assyria to the north (2:13–15). Judgment is comprehensive; none can escape.

The prophecy against Assyria's capital Nineveh is particularly striking — this city "that dwelt carelessly, that said in her heart, I am, and there is none beside me" (2:15) would become desolate, "a place for beasts to lie down in." Proud self-deification is the root cause of every empire's fall.

Chapter 3:1–8 turns back to Jerusalem — "Woe to her that is filthy and polluted, to the oppressing city! She obeyed not the voice; she received not correction; she trusted not in the LORD; she drew not near to her God" (3:1–2). Jerusalem's sin is greater than the nations' — she had the Law, the prophets, the Temple, yet still rebelled. Judgment begins at God's house (1 Pet 4:17).`,
  },
  {
    title_zh: `三、欢呼与复兴的应许（3:9-20）`,
    title_en: `III. Rejoicing and Promise of Restoration (3:9–20)`,
    content_zh: `全书最后十二节是小先知书中最温柔的复兴应许。基调从审判急转为喜乐——"锡安的民哪，应当歌唱！以色列啊，应当欢呼！耶路撒冷的民哪，应当满心欢喜快乐！"（3:14）

然后是旧约中最动人的经文之一——神自己也在歌唱："耶和华你的神是施行拯救、大有能力的主。他在你中间必因你欢欣喜乐，默然爱你，且因你喜乐而欢呼"（3:17）。

这节经文的画面令人震撼——全能的神，不只是接受祂百姓的赞美，祂自己也在为祂的百姓欢呼歌唱！"默然爱你"——有的学者翻译为"因爱你而安静"，像母亲抱着孩子时那种满足的沉默。然后祂又"因你喜乐而欢呼"——从安静的满足到大声的庆祝。

西番雅书从创造的逆转（1:2-3）到新创造的应许（3:17-20），从审判到歌唱，完成了一个完整的神学弧线。审判不是终点——复兴才是神的最终目的。`,
    content_en: `The book's final twelve verses are among the Minor Prophets' most tender restoration promises. The tone shifts dramatically from judgment to joy — "Sing, O daughter of Zion; shout, O Israel; be glad and rejoice with all the heart, O daughter of Jerusalem!" (3:14)

Then comes one of the Old Testament's most moving verses — God Himself singing: "The LORD thy God in the midst of thee is mighty; he will save, he will rejoice over thee with joy; he will rest in his love, he will joy over thee with singing" (3:17).

The imagery is stunning — Almighty God not only receiving His people's praise but Himself singing and rejoicing over His people! "He will rest in his love" — some scholars render this "quiet in His love," like a mother's contented silence holding her child. Then "He will joy over thee with singing" — from quiet contentment to loud celebration.

Zephaniah moves from creation's reversal (1:2–3) to new creation's promise (3:17–20), from judgment to singing, completing a full theological arc. Judgment is not the endpoint — restoration is God's ultimate purpose.`,
  },
];

const overview = {
  zh: `西番雅书（3章）写于约西亚王在位期间（约公元前640-609年），西番雅是犹大王族后裔（希西家的玄孙），在宗教改革前夕传讲审判与盼望。

西番雅书的结构是经典的先知模式：审判犹大→审判列国→复兴应许。它最独特的贡献是"耶和华的大日"这一末世主题的展开——从彻底的审判到神自己的欢唱，从创造的逆转到新创造的黎明。`,
  en: `Zephaniah (3 chapters) was written during King Josiah's reign (c. 640–609 BC). Zephaniah was of royal descent (great-great-grandson of Hezekiah), preaching judgment and hope on the eve of religious reform.

Zephaniah follows the classic prophetic structure: judgment on Judah → judgment on nations → restoration promise. Its unique contribution is developing the "Day of the LORD" eschatological theme — from total judgment to God's own singing, from creation's reversal to new creation's dawn.`,
};

const outline = [
  ["1:1-6", "犹大的偶像崇拜", "1:1–6", "Judah's Idolatry"],
  ["1:7-18", "耶和华的大日", "1:7–18", "The Great Day of the LORD"],
  ["2:1-3", "悔改的呼召", "2:1–3", "Call to Repentance"],
  ["2:4-15", "对列国的审判", "2:4–15", "Judgment on the Nations"],
  ["3:1-8", "耶路撒冷的罪", "3:1–8", "Jerusalem's Sin"],
  ["3:9-20", "复兴与欢呼", "3:9–20", "Restoration and Rejoicing"],
];

const theology = {
  title_zh: `核心神学：审判之日与余民的盼望`,
  title_en: `Core Theology: The Day of Judgment and the Hope of the Remnant`,
  content_zh: `西番雅书集中描绘了"耶和华的日子"——那将是普世性的审判，但也是余民被拯救的日子。

第一，普世审判。"我必从地面上除灭万类"（1:2）。西番雅的审判范围不限于以色列或任何一个民族，而是全地——呼应创世记洪水的审判。这预表了末日的普世审判（彼后3:10"主的日子要像贼来到一样，那日天必大有响声废去"）。没有人能逃脱神公义的审视。

第二，谦卑的余民。"你们应当寻求耶和华，你们地上谦卑守祂典章的人，应当寻求公义，寻求谦卑。或者在耶和华发怒的日子可以隐藏起来"（2:3）。在审判中幸存的不是强大的，而是谦卑的。"我必在你中间留下困苦贫寒的民，他们必投靠耶和华的名"（3:12）——这就是"余民"（remnant）神学的核心：神在每个时代都保守一群忠信的余民。

第三，神以歌声欢乐。"耶和华你的神是施行拯救、大有能力的主。祂在你中间必因你欢欣喜乐，默然爱你，且因你喜乐而欢呼"（3:17）。这是全旧约中最温柔的经文之一——宇宙的创造者因祂的子民而歌唱。审判不是最后的话语，爱才是。`,
  content_en: `Zephaniah concentrates on depicting "the Day of the LORD" — a day of universal judgment, but also a day when the remnant is saved.

First, universal judgment. "I will utterly consume all things from off the land" (1:2). Zephaniah's judgment is not limited to Israel or any single nation but encompasses the whole earth — echoing the flood judgment of Genesis. This prefigures the final universal judgment (2 Pet 3:10, "the day of the Lord will come as a thief in the night; in the which the heavens shall pass away with a great noise"). No one can escape God's righteous scrutiny.

Second, the humble remnant. "Seek ye the LORD, all ye meek of the earth, which have wrought his judgment; seek righteousness, seek meekness: it may be ye shall be hid in the day of the LORD's anger" (2:3). Those who survive judgment are not the powerful but the humble. "I will also leave in the midst of thee an afflicted and poor people, and they shall trust in the name of the LORD" (3:12) — this is the core of "remnant" theology: God preserves a faithful remnant in every generation.

Third, God rejoices with singing. "The LORD thy God in the midst of thee is mighty; he will save, he will rejoice over thee with joy; he will rest in his love, he will joy over thee with singing" (3:17). This is one of the tenderest verses in the entire Old Testament — the Creator of the universe sings over His people. Judgment is not the final word; love is.`,
};

const keyVerse = {
  zh: `"耶和华你的神是施行拯救、大有能力的主。他在你中间必因你欢欣喜乐，默然爱你，且因你喜乐而欢呼。"（西番雅书 3:17）`,
  en: `"The LORD thy God in the midst of thee is mighty; he will save, he will rejoice over thee with joy; he will rest in his love, he will joy over thee with singing." (Zephaniah 3:17)`,
};

const info = { nameZh: `西番雅书`, nameEn: `Zephaniah`, author: `西番雅`, date: `约公元前640-609年`, chapters: `3章`, backHref: `/old-testament/minor-prophets`, backLabel: `小先知书`, bibleId: `ZEP` };


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