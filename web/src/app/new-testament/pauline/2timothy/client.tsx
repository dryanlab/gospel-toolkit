'use client';
import Link from 'next/link';
import SpeakButton from '@/components/SpeakButton';
import { useState } from 'react';

const sections = [
    {
      title_zh: '一、不以福音为耻：刚强的心（1章）',
      title_en: `I. Not Ashamed of the Gospel: A Spirit of Power`,
      content_zh: `提摩太后书是保罗生命中最后一封书信，写于罗马监狱，死亡近在眼前。在这样的处境中，保罗没有自怜，反而勉励提摩太刚强壮胆。

"因为神赐给我们，不是胆怯的心，乃是刚强、仁爱、谨守的心。你不要以给我们的主作见证为耻，也不要以我这为主被囚的为耻；总要按神的能力，与我为福音同受苦难。"（提摩太后书 1:7-8）

"刚强、仁爱、谨守"——这三个词概括了基督徒事奉的核心素质。不是出于人的血气，而是出于神所赐的灵。提摩太生性胆怯（林前16:10），但神的灵能使胆怯的人刚强。保罗自己就是榜样：身陷囹圄却不以福音为耻，反而呼召提摩太"同受苦难"。`,
      content_en: `Second Timothy is Paul's final letter, written from a Roman prison with death approaching. In such circumstances, Paul did not indulge in self-pity but rather encouraged Timothy to be strong and courageous.

"For God hath not given us the spirit of fear; but of power, and of love, and of a sound mind. Be not thou therefore ashamed of the testimony of our Lord, nor of me his prisoner: but be thou partaker of the afflictions of the gospel according to the power of God." (2 Timothy 1:7-8, KJV)

"Power, love, and a sound mind' — these three words summarize the core qualities of Christian ministry. Not from human passion, but from the Spirit God has given. Timothy was naturally timid (1 Cor 16:10), but God's Spirit can make the timid strong. Paul himself was the example: imprisoned yet not ashamed of the gospel, calling Timothy to "be partaker of the afflictions."`
    },
    {
      title_zh: '二、圣经的默示与充足（2章）',
      title_en: `II. The Inspiration and Sufficiency of Scripture`,
      content_zh: `保罗在这封遗书中留下了关于圣经最重要的宣告之一。

"圣经都是神所默示的，于教训、督责、使人归正、教导人学义都是有益的，叫属神的人得以完全，预备行各样的善事。"（提摩太后书 3:16-17）

"神所默示的"——原文是theopneustos，意思是"神所呼出的"。圣经不是人的作品加上神的认可，而是神自己呼出的话语，借着人的手写下。圣经的功用是四重的：教训（正确的信仰）、督责（指出错误）、使人归正（纠正行为）、教导人学义（建立品格）。最终目的是叫属神的人"得以完全，预备行各样的善事"。圣经是充足的——我们不需要在圣经之外寻找额外的启示。`,
      content_en: `In this farewell letter, Paul left one of the most important declarations about Scripture.

"All scripture is given by inspiration of God, and is profitable for doctrine, for reproof, for correction, for instruction in righteousness: That the man of God may be perfect, throughly furnished unto all good works." (2 Timothy 3:16-17, KJV)

"Given by inspiration of God' — the Greek is theopneustos, meaning "God-breathed." Scripture is not a human work with divine endorsement, but the very words breathed out by God, written through human hands. Scripture's function is fourfold: doctrine (correct belief), reproof (identifying error), correction (reforming behavior), and instruction in righteousness (building character). The ultimate purpose is that the man of God may be "perfect, throughly furnished unto all good works." Scripture is sufficient — we need seek no additional revelation beyond it.`
    },
    {
      title_zh: '三、末世的背道与保罗的遗言（3-4章）',
      title_en: `III. End-Times Apostasy and Paul's Final Words (Ch. 3–4)`,
      content_zh: `第三章是保罗对末世处境最清醒的描述，他预言"末世必有危险的日子来到"（3:1），人们将会"专爱自己、贪爱钱财、自夸、狂傲……爱宴乐，不爱神"（3:2-4）。这幅画像惊人地符合今日的文化景象。

对此，保罗的处方不是与文化妥协，而是回到圣经："圣经都是神所默示的，于教训、督责、使人归正、教导人学义都是有益的，叫属神的人得以完全，预备行各种善事"（3:16-17）。圣经足够了，在圣经之外寻求别的权威是不必要的。

在这背景下，保罗向提摩太发出最强烈的命令："务要传道；无论得时不得时，总要专心；并用百般的忍耐，各样的教训，责备人、警戒人、劝勉人"（4:2）。"得时不得时"意味着无论处境如何方便或困难，都要忠心传道。

第四章是保罗一生的总结，也是整本圣经中最感人的段落之一。"我现在被浇奠，我离世的时候到了。那美好的仗我已经打过了，当跑的路我已经跑尽了，所信的道我已经守住了。从此以后，有公义的冠冕为我存留"（4:6-8）。三个完成式动词——"打过了""跑尽了""守住了"——概括了保罗一生的事奉。

保罗最后提到"底马贪爱现今的世界，就离弃我"（4:10），只有路加仍与他同在。但他说："惟有主站在我旁边，加给我力量"（4:17）。当人都离弃时，主不离弃。`,
      content_en: `Chapter 3 is Paul's most lucid description of end-times conditions. He predicts "in the last days perilous times shall come" (3:1); people will be "lovers of their own selves, covetous, boasters, proud...lovers of pleasures more than lovers of God" (3:2-4). This portrait strikingly mirrors today's cultural landscape.

Paul's prescription is not cultural compromise but a return to Scripture: "All scripture is given by inspiration of God, and is profitable for doctrine, for reproof, for correction, for instruction in righteousness: That the man of God may be perfect, throughly furnished unto all good works" (3:16-17). Scripture is sufficient; seeking other authorities is unnecessary.

Against this backdrop, Paul issues his most urgent command to Timothy: "Preach the word; be instant in season, out of season; reprove, rebuke, exhort with all longsuffering and doctrine" (4:2). "In season, out of season" means faithful preaching regardless of whether circumstances are convenient or difficult.

Chapter 4 is Paul's life summary and one of the most moving passages in all of Scripture. "For I am now ready to be offered, and the time of my departure is at hand. I have fought a good fight, I have finished my course, I have kept the faith: Henceforth there is laid up for me a crown of righteousness" (4:6-8). Three perfect tense verbs — "fought," "finished," "kept" — summarize Paul's entire ministry.

Paul finally mentioned that "Demas hath forsaken me, having loved this present world" (4:10), and only Luke remained with him. But he said: "the Lord stood with me, and strengthened me" (4:17). When all others forsake, the Lord does not.`
    }
  ];

const overview = {
  zh: `提摩太后书是保罗的遗书——他最后的书信，写于第二次被囚在罗马监狱期间，不久之后便为主殉道。这封信充满了一位属灵父亲对儿子最深切的嘱托：要刚强壮胆、持守纯正的道、忍受苦难、忠心传道。保罗在生命的尽头回顾自己的一生，留下了"那美好的仗我已经打过了"这一千古传诵的见证。`,
  en: `Second Timothy is Paul's last will and testament — his final letter, written during his second imprisonment in Rome, shortly before his martyrdom. This letter overflows with the deepest charges of a spiritual father to his son: be strong and courageous, hold fast sound doctrine, endure hardship, and faithfully preach the word. At the end of his life, Paul looked back and left the timeless testimony: "I have fought a good fight."`,
};

const outline = [
  ["1章", `刚强壮胆与不以福音为耻`, "Ch. 1", `Be Strong and Not Ashamed of the Gospel`],
  ["2章", `基督的精兵与无愧的工人`, "Ch. 2", `A Good Soldier and an Unashamed Workman`],
  ["3章", `末世的危险与圣经的权威`, "Ch. 3", `Perilous Times and the Authority of Scripture`],
  ["4章", `保罗的遗嘱与公义的冠冕`, "Ch. 4", `Paul's Final Charge and the Crown of Righteousness`],
];

const theology = {
  title_zh: `核心神学：至死忠心——保罗的最后嘱托`,
  title_en: `Core Theology: Faithful unto Death — Paul's Final Charge`,
  content_zh: `提摩太后书是保罗的遗书——写于罗马监狱，即将殉道。字里行间透着一位老战士对年轻接班人的深情嘱托。

第一，圣经的权威。"圣经都是神所默示的，于教训、督责、使人归正、教导人学义都是有益的"（3:16）。"默示"（θεόπνευστος，theopneustos）原意是"神呼出的"——圣经不仅包含神的话，圣经本身就是神的话。这是改革宗"唯独圣经"原则的核心经文。

第二，无愧的工人。"你当竭力在神面前得蒙喜悦，作无愧的工人，按着正意分解真理的道"（2:15）。"按着正意分解"意味着准确地、忠实地解释圣经——不是断章取义，不是按自己的偏好选择性引用，而是让圣经自己说话。

第三，那美好的仗。"那美好的仗我已经打过了，当跑的路我已经跑尽了，所信的道我已经守住了。从此以后，有公义的冠冕为我存留"（4:7-8）。保罗面对死亡没有恐惧，而是平安——因为他的盼望不在今生，而在"那日"。这不是骄傲的自夸，而是对神信实的确信："我知道我所信的是谁"（1:12）。`,
  content_en: `2 Timothy is Paul's last will and testament — written from a Roman prison as he faced martyrdom. Every line breathes an old warrior's tender charge to his young successor.

First, the authority of Scripture. "All scripture is given by inspiration of God, and is profitable for doctrine, for reproof, for correction, for instruction in righteousness" (3:16). "Inspiration" (θεόπνευστος, theopneustos) literally means "God-breathed" — Scripture does not merely contain God's words; Scripture itself is God's Word. This is the core text for the Reformed principle of Sola Scriptura.

Second, an unashamed workman. "Study to shew thyself approved unto God, a workman that needeth not to be ashamed, rightly dividing the word of truth" (2:15). "Rightly dividing" means accurately and faithfully interpreting Scripture — not taking verses out of context, not selectively citing according to personal preference, but letting Scripture speak for itself.

Third, the good fight. "I have fought a good fight, I have finished my course, I have kept the faith: Henceforth there is laid up for me a crown of righteousness" (4:7-8). Paul faced death without fear but with peace — because his hope rested not in this life but in "that day." This is not proud boasting but confidence in God's faithfulness: "I know whom I have believed" (1:12).`,
};

const keyVerse = {
  zh: `"圣经都是神所默示的，于教训、督责、使人归正、教导人学义都是有益的。"（提摩太后书 3:16）`,
  en: `"All scripture is given by inspiration of God, and is profitable for doctrine, for reproof, for correction, for instruction in righteousness." (2 Timothy 3:16, KJV)`,
};

const info = { nameZh: `提摩太后书`, nameEn: `2 Timothy`, author: `使徒保罗`, date: `约公元66-67年`, chapters: `4章`, backHref: `/new-testament/pauline`, backLabel: `保罗书信`, bibleId: `2TI` };


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
