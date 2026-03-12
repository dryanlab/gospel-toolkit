'use client';
import Link from 'next/link';
import SpeakButton from '@/components/SpeakButton';
import { useState } from 'react';

const sections = [
    {
      title_zh: '一、使徒的遗嘱与信仰成长的阶梯（1章）',
      title_en: `I. The Apostle's Testament: Instructions Before Departing the Tent`,
      content_zh: `彼得后书是新约中最具遗嘱性质的书信。彼得明确知道自己即将殉道：

"因为知道我脱离这帐棚的时候快到了，正如我们主耶稣基督所指示我的。我也要尽心竭力，使你们在我去世以后时常记念这些事。"（彼得后书 1:13-15）

"脱离帐棚"是对死亡的美丽比喻——肉身如同帐棚，是暂时的居所，真正的家在天上。主耶稣曾预言彼得将以怎样的死来荣耀神（约翰福音21:18-19），彼得如今坦然面对。他不是恐惧地等死，而是迫切地做最后的交代——"尽心竭力"使信徒在他去世后仍能记住这些教导。

这给彼得后书的每一句话都赋予了千钧之重。一个即将离世的人不会说废话。彼得后书的三章涵盖了他最关切的三件事：信仰的成长（1章）、假教师的危害（2章）、主再来的盼望（3章）。这不仅是教导，更是一位老使徒倾注了毕生经历的属灵遗产。

彼得还特别强调他所传的不是"随从乖巧捏造的虚言"，而是"亲眼见过他的威荣"（1:16）——他是登山变像的见证人，亲耳听见天父的声音："这是我的爱子，我所喜悦的"（1:17）。使徒的见证不是神话传说，而是亲历的事实。`,
      content_en: `Second Peter is the most testamentary letter in the New Testament. Peter explicitly knows he is about to be martyred:

"Knowing that shortly I must put off this my tabernacle, even as our Lord Jesus Christ hath shewed me. Moreover I will endeavour that ye may be able after my decease to have these things always in remembrance." (2 Peter 1:13-15, KJV)

"Put off this my tabernacle' is a beautiful metaphor for death — the body is like a tent, a temporary dwelling; our true home is in heaven. The Lord Jesus had prophesied how Peter would die to glorify God (John 21:18-19), and Peter now faces it with composure. He does not await death in fear but urgently gives his final instructions — "endeavouring' that believers may remember these teachings after his departure.

This gives every sentence in Second Peter immense weight. A man about to leave the world does not waste words. The three chapters cover his three deepest concerns: growth in faith (ch. 1), the danger of false teachers (ch. 2), and the hope of the Lord's return (ch. 3). This is not merely teaching but the spiritual legacy of an aged apostle pouring out a lifetime of experience.

Peter also emphasizes that what he proclaimed was not "cunningly devised fables" but what he had "were eyewitnesses of his majesty' (1:16) — he was a witness of the Transfiguration, hearing with his own ears the Father's voice: "This is my beloved Son, in whom I am well pleased' (1:17). The apostolic witness is not myth but firsthand testimony.`
    },
  {
      title_zh: `二、警戒假教师：他们的结局必然败亡（2章）`,
      title_en: `II. Warning Against False Teachers: Their Certain Doom (Ch. 2)`,
      content_zh: `彼得后书第二章是新约中对假教师最严厉的警告之一。

"从前在百姓中有假先知起来，将来在你们中间也必有假师傅，私自引进陷害人的异端，连买他们的主他们也不承认，自取速速地灭亡。将有许多人随从他们邪淫的行为，便叫真道因他们的缘故被毁谤。"（彼得后书 2:1-2）

假先知的特征是"私自引进陷害人的异端"——不是公开反对基督，而是偷偷混入。他们"邪淫的行为"败坏了"真道的名声"，让世人误解基督教。彼得用三个历史例子说明神必审判假先知：堕落天使（2:4）、挪亚时代的洪水（2:5）、所多玛的火（2:6）——同时也必拯救义人。这是警戒，也是安慰。`,
      content_en: `Second Peter chapter 2 contains one of the New Testament's sternest warnings against false teachers.

"But there were false prophets also among the people, even as there shall be false teachers among you, who privily shall bring in damnable heresies, even denying the Lord that bought them, and bring upon themselves swift destruction. And many shall follow their pernicious ways; by reason of whom the way of truth shall be evil spoken of." (2 Peter 2:1-2, KJV)

The hallmark of false prophets is bringing in heresies "privily' — not openly opposing Christ but sneaking in secretly. Their "pernicious ways' bring evil reputation upon "the way of truth," causing the world to misunderstand Christianity. Peter uses three historical examples to show God will judge false prophets: fallen angels (2:4), Noah's flood (2:5), Sodom's fire (2:6) — yet He also delivers the righteous. This is both warning and comfort.`
    },
    {
      title_zh: `三、主再来是确实的：千年如一日（3章）`,
      title_en: `III. The Lord's Return Is Certain (Ch. 3)`,
      content_zh: `彼得后书最重要的神学贡献之一，是回应"主为什么还不来？"的质疑。

"主所应许的尚未成就，有人以为他是耽延，其实他是宽容你们，不愿有一人沉沦，乃愿人人都悔改。但主的日子要像贼来到一样；那日，天必大有响声废去，有形质的都要被烈火销化，地和其上的物都要烧尽了。"（彼得后书 3:9-10）

神的"耽延"不是无能，而是怜悯——他"不愿有一人沉沦，乃愿人人都悔改"。保罗在罗马书说神有"丰盛的恩慈、宽容、忍耐"等候罪人悔改（罗2:4）。当我们抱怨神为何还不施行公义时，其实我们自己也在蒙受他宽容的恩典。但"主的日子"必然来到，我们当如何回应？彼得的结语是："你们既盼望这些事，就当殷勤，使自己没有玷污，无可指摘，安然见主"（3:14）。`,
      content_en: `One of Second Peter's most important theological contributions is responding to the question: "Why hasn't the Lord come yet?"

"The Lord is not slack concerning his promise, as some men count slackness; but is longsuffering to us-ward, not willing that any should perish, but that all should come to repentance. But the day of the Lord will come as a thief in the night; in the which the heavens shall pass away with a great noise, and the elements shall melt with fervent heat, the earth also and the works that are therein shall be burned up." (2 Peter 3:9-10, KJV)

God's "delay' is not impotence but mercy — He is "not willing that any should perish, but that all should come to repentance." Paul in Romans speaks of God's "riches of goodness and forbearance and longsuffering' waiting for sinners to repent (Rom 2:4). When we complain that God has not yet executed justice, we ourselves are actually recipients of His patient grace. But "the day of the Lord' will certainly come. Peter's conclusion: "seeing that ye look for such things, be diligent that ye may be found of him in peace, without spot, and blameless' (3:14).`
    }
  ];

const overview = {
  zh: `彼得后书是使徒彼得的遗书，写于他殉道前不久。书信的三大主题：信仰的成长（第一章）、假师傅的危险（第二章）、主再来的确据（第三章）。彼得亲眼见过主的登山变像（1:16-18），以这见证为基础，呼吁信徒持守纯正真道，警戒假先知，在等候主再来中过圣洁的生活。这封书信是彼得一生的总结，也是他最后的牧者嘱托。`,
  en: `Second Peter is the apostle's farewell letter, written shortly before his martyrdom. Its three major themes: growth in faith (chapter 1), the danger of false teachers (chapter 2), and the certainty of the Lord's return (chapter 3). Peter was an eyewitness to the Lord's transfiguration (1:16-18) and, grounding his appeal in that testimony, calls believers to hold fast to sound doctrine, beware false prophets, and live holy lives in anticipation of the Lord's return. This letter is the summary of Peter's life and his final pastoral charge.`,
};

const outline = [
  ["1章", `信仰的增长与登山变像的见证`, "Ch. 1", `Growth in Faith and Witness of the Transfiguration`],
  ["2章", `假先知的危险与必然的审判`, "Ch. 2", `The Danger of False Prophets and Certain Judgment`],
  ["3章", `末日的来临与圣洁的等候`, "Ch. 3", `The Coming Day of the Lord and Holy Waiting`],
];

const theology = {
  title_zh: `核心神学：在真知识中长进与防备假教师`,
  title_en: `Core Theology: Growing in True Knowledge and Guarding Against False Teachers`,
  content_zh: `彼得后书是彼得的遗书——"知道我脱离这帐棚的时候快到了"（1:14）。他最后的嘱咐聚焦于两件事：在真理中成长，防备假教师。

第一，神的性情的有份者。"因此，祂已将又宝贵又极大的应许赐给我们，叫我们既脱离世上从情欲来的败坏，就得与神的性情有份"（1:4）。这是全新约中关于成圣最惊人的宣告——信徒不仅被赦免，更被呼召分享神的性情。这不是说人变成了神，而是说圣灵在信徒里面做更新的工作，使人越来越像基督。

第二，圣经的默示。"预言从来没有出于人意的，乃是人被圣灵感动，说出神的话来"（1:21）。彼得与保罗（提后3:16）一同见证了圣经的神圣来源——不是人的智慧，而是圣灵的感动。先知不是在写自己的想法，而是在传达神的信息。

第三，主的日子必要来到。"主的日子要像贼来到一样。那日，天必大有响声废去，有形质的都要被烈火销化"（3:10）。有人嘲笑说"主要降临的应许在哪里呢？"（3:4），彼得回答："主所应许的尚未成就，有人以为祂是耽延，其实不是耽延，乃是宽容你们，不愿有一人沉沦"（3:9）。神的"耽延"不是失信，而是恩典的延伸。`,
  content_en: `2 Peter is Peter's farewell letter — "knowing that shortly I must put off this my tabernacle" (1:14). His final charge focuses on two things: growing in truth and guarding against false teachers.

First, partakers of the divine nature. "Whereby are given unto us exceeding great and precious promises: that by these ye might be partakers of the divine nature, having escaped the corruption that is in the world through lust" (1:4). This is the New Testament's most astonishing statement about sanctification — believers are not merely forgiven but called to share in God's nature. This does not mean humans become God, but that the Spirit works renewal within believers, making them increasingly like Christ.

Second, the inspiration of Scripture. "Prophecy came not in old time by the will of man: but holy men of God spake as they were moved by the Holy Ghost" (1:21). Peter joins Paul (2 Tim 3:16) in testifying to Scripture's divine origin — not human wisdom but the Holy Spirit's moving. The prophets were not writing their own thoughts but delivering God's message.

Third, the Day of the Lord will surely come. "The day of the Lord will come as a thief in the night; in the which the heavens shall pass away with a great noise, and the elements shall melt with fervent heat" (3:10). Some scoff, "Where is the promise of his coming?" (3:4); Peter answers: "The Lord is not slack concerning his promise, as some men count slackness; but is longsuffering to us-ward, not willing that any should perish" (3:9). God's "delay" is not unfaithfulness but extended grace.`,
};

const keyVerse = {
  zh: `"主所应许的尚未成就，有人以为他是耽延，其实他是宽容你们，不愿有一人沉沦，乃愿人人都悔改。"（彼得后书 3:9）`,
  en: `"The Lord is not slack concerning his promise, as some men count slackness; but is longsuffering to us-ward, not willing that any should perish, but that all should come to repentance." (2 Peter 3:9, KJV)`,
};

const info = { nameZh: `彼得后书`, nameEn: `2 Peter`, author: `使徒彼得`, date: `约公元65-68年`, chapters: `3章`, backHref: `/new-testament/general`, backLabel: `普通书信`, bibleId: `2PE` };


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
