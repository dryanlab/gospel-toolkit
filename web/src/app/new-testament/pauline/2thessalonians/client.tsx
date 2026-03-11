'use client';
import Link from 'next/link';
import SpeakButton from '@/components/SpeakButton';
import { useState } from 'react';

const sections = [
    {
      title_zh: '一、患难中的安慰与神公义的审判（1章）',
      title_en: 'Comfort in Affliction and God\'s Righteous Judgment',
      content_zh: `帖撒罗尼迦后书写于前书之后不久。教会仍在遭受逼迫，保罗首先安慰他们：苦难不是白受的，神公义的审判必要临到逼迫他们的人。

"我们在神的各教会里为你们夸口，都因你们在所受的一切逼迫患难中，仍旧存忍耐和信心。这正是神公义判断的明证，叫你们可算配得神的国；你们就是为这国受苦。"（帖撒罗尼迦后书 1:4-5）

"So that we ourselves glory in you in the churches of God for your patience and faith in all your persecutions and tribulations that ye endure: Which is a manifest token of the righteous judgment of God, that ye may be counted worthy of the kingdom of God, for which ye also suffer." (2 Thessalonians 1:4-5, KJV)

信徒在患难中的忍耐和信心，本身就是"神公义判断的明证"。这不是说我们靠受苦赚取天国，而是说真信心必然在苦难中显出真实。神看见他们的忍耐，必在主耶稣再来时施行公义的审判——"那时，主耶稣同他有能力的天使从天上在火焰中显现，要报应那不认识神和那不听从我主耶稣福音的人"（1:7-8）。`,
      content_en: `Second Thessalonians was written shortly after the first letter. The church was still suffering persecution, and Paul first comforted them: their suffering was not in vain — God's righteous judgment would come upon their persecutors.

"So that we ourselves glory in you in the churches of God for your patience and faith in all your persecutions and tribulations that ye endure: Which is a manifest token of the righteous judgment of God, that ye may be counted worthy of the kingdom of God, for which ye also suffer." (2 Thessalonians 1:4-5, KJV)

Believers' patience and faith in tribulation are themselves "a manifest token of the righteous judgment of God." This does not mean we earn heaven through suffering, but that true faith inevitably reveals its authenticity in adversity. God sees their endurance and will execute righteous judgment when the Lord Jesus returns — "when the Lord Jesus shall be revealed from heaven with his mighty angels, in flaming fire taking vengeance on them that know not God, and that obey not the gospel of our Lord Jesus Christ' (1:7-8).`
    },
    {
      title_zh: '二、大罪人的显露与主再来的次序（2章）',
      title_en: 'The Revelation of the Man of Sin and the Order of the Lord\'s Return',
      content_zh: `帖撒罗尼迦教会中有人传说"主的日子现在到了"，引起恐慌和混乱。保罗纠正这一错误，指出主再来之前必有两件事先发生。

"人不拘用什么法子，你们总不要被他诱惑；因为那日子以前，必有离道反教的事，并有那大罪人，就是沉沦之子，显露出来。他是抵挡主，高抬自己，超过一切称为神的和一切受人敬拜的，甚至坐在神的殿里，自称是神。"（帖撒罗尼迦后书 2:3-4）

"Let no man deceive you by any means: for that day shall not come, except there come a falling away first, and that man of sin be revealed, the son of perdition; Who opposeth and exalteth himself above all that is called God, or that is worshipped; so that he as God sitteth in the temple of God, shewing himself that he is God." (2 Thessalonians 2:3-4, KJV)

主再来之前，第一是"离道反教的事"——大规模的背道；第二是"大罪人"的显露。保罗说现在有一个拦阻的力量使这大罪人暂时不能显现（2:6-7）。但到了时候，主耶稣要用口中的气灭绝他，用降临的荣光废掉他（2:8）。教会不必恐慌——一切都在神主权的计划之中。`,
      content_en: `Someone in the Thessalonian church was spreading the word that "the day of the Lord is at hand," causing panic and confusion. Paul corrected this error, pointing out that two things must happen before the Lord's return.

"Let no man deceive you by any means: for that day shall not come, except there come a falling away first, and that man of sin be revealed, the son of perdition; Who opposeth and exalteth himself above all that is called God, or that is worshipped; so that he as God sitteth in the temple of God, shewing himself that he is God." (2 Thessalonians 2:3-4, KJV)

Before the Lord's return, first there must be "a falling away' — a great apostasy; second, "the man of sin' must be revealed. Paul says a restraining power currently prevents this man of sin from appearing (2:6-7). But when the time comes, the Lord Jesus "shall consume with the spirit of his mouth, and shall destroy with the brightness of his coming' (2:8). The church need not panic — everything is within God's sovereign plan.`
    },
    {
      title_zh: '三、不做工就不可吃饭：基督徒的勤劳（3章）',
      title_en: 'If Any Would Not Work, Neither Should He Eat',
      content_zh: `帖撒罗尼迦教会中有人借口"主快来了"就不再工作，成为游手好闲的人，甚至管别人的闲事。保罗严厉斥责这种行为。

"我们在你们那里的时候，曾吩咐你们说，若有人不肯做工，就不可吃饭。因我们听说，在你们中间有人不按规矩而行，什么工都不做，反倒专管闲事。我们靠主耶稣基督吩咐、劝戒这样的人，要安静做工，吃自己的饭。"（帖撒罗尼迦后书 3:10-12）

"For even when we were with you, this we commanded you, that if any would not work, neither should he eat. For we hear that there are some which walk among you disorderly, working not at all, but are busybodies. Now them that are such we command and exhort by our Lord Jesus Christ, that with quietness they work, and eat their own bread." (2 Thessalonians 3:10-12, KJV)

末世的盼望不是懒惰的借口。真正期待主再来的人，应该更加忠心地做好手中的工作，因为我们要向主交账。保罗自己就是榜样——他在帖撒罗尼迦时"辛苦劳碌，昼夜做工"（3:8），为的是不给任何人增添负担。基督徒的生活应当是勤劳、有秩序、自食其力的。`,
      content_en: `Some in the Thessalonian church used the excuse that "the Lord is coming soon' to stop working, becoming idle and meddlesome. Paul sharply rebuked this behavior.

"For even when we were with you, this we commanded you, that if any would not work, neither should he eat. For we hear that there are some which walk among you disorderly, working not at all, but are busybodies. Now them that are such we command and exhort by our Lord Jesus Christ, that with quietness they work, and eat their own bread." (2 Thessalonians 3:10-12, KJV)

The hope of the end times is no excuse for laziness. Those who truly expect the Lord's return should be even more faithful in their present work, for we must give account to the Lord. Paul himself was the example — he "laboured and wrought with labour night and day" (3:8) in Thessalonica, so as not to be a burden to anyone. The Christian life should be industrious, orderly, and self-sufficient.`
    },
    {
      title_zh: `四、愿主坚固你们的心（1-2章：患难与末世教导）`,
      title_en: `IV. May the Lord Establish Your Hearts (Ch. 1-2: Affliction and Last Things)`,
      content_zh: `第一章保罗明确宣告：神使那些患难信徒的仇敌"受患难"是公义的（1:6），而使受患难的信徒"得平安"（1:7）——苦难不是神的遗忘，而是神公义计划的一部分。"主耶稣同他有能力的天使从天上在火焰中显现，要报应那不认识神、和那不听从我主耶稣福音的人"（1:7-8）——末日的审判是确定的、公义的。

第二章是新约末世论中最神秘的一段，描述"不法的人"（敌基督）在主再来之前的显露："他是抵挡主、高抬自己、超过一切称为神的和一切受人敬拜的，甚至坐在神的殿里，自称是神"（2:4）。这位"不法的人"的来临要先有大背道（2:3）。在他显露之前，有一位"阻止者"在拦阻（2:7）——历代教会对这"阻止者"的身份有不同解释（圣灵、罗马政权、或使徒的事工等）。

但保罗的重点不在于满足人的好奇，而在于信徒的确据："主所爱的弟兄们，我们本当为你们常常感谢神；因为他从起初拣选了你们，叫你们因信真道、又被圣灵感动成为圣洁，能以得救"（2:13）。无论末世的细节如何，我们在神的拣选和保守中是安全的。`,
      content_en: `Chapter 1 clearly declares that it is righteous for God to "recompense tribulation to them that trouble you" (1:6), and to give rest to the troubled believers (1:7) — suffering is not God's forgetting but part of His just plan. "The Lord Jesus shall be revealed from heaven with his mighty angels, in flaming fire taking vengeance on them that know not God, and that obey not the gospel of our Lord Jesus Christ" (1:7-8, KJV) — final judgment is certain and just.

Chapter 2 is the most mysterious eschatological passage in the New Testament, describing the "man of sin" (Antichrist) who will be revealed before the Lord's return: "Who opposeth and exalteth himself above all that is called God, or that is worshipped; so that he as God sitteth in the temple of God, shewing himself that he is God" (2:4, KJV). His coming will be preceded by a great falling away (2:3). Before his full manifestation, "one who restrains" holds him back (2:7) — the church has offered various identifications: the Holy Spirit, Roman authority, or apostolic ministry.

But Paul's emphasis is not on satisfying curiosity about prophetic details but on believers' assurance: "But we are bound to give thanks alway to God for you, brethren beloved of the Lord, because God hath from the beginning chosen you to salvation through sanctification of the Spirit and belief of the truth" (2:13, KJV). Whatever the details of the last days, we are secure in God's election and keeping.`
    }
  ];

const overview = {
  zh: `帖撒罗尼迦后书紧接前书之后写成，回应教会面临的三个问题：持续的逼迫、关于主再来的错误教导、以及一些信徒的懒散闲荡。保罗安慰受苦的信徒，纠正末世论的偏差，并严厉劝勉不做工的人。这封简短的书信教导我们：真正的末世盼望产生的不是恐慌或懒惰，而是忍耐、忠心和勤劳。`,
  en: `Second Thessalonians was written shortly after the first letter, addressing three problems in the church: continued persecution, false teaching about the Lord's return, and idleness among some believers. Paul comforted the suffering, corrected eschatological errors, and firmly admonished the idle. This brief letter teaches us that true eschatological hope produces not panic or laziness, but patience, faithfulness, and diligence.`,
};

const outline = [
  ["1章", `患难中的安慰与末日的审判`, "Ch. 1", `Comfort in Affliction and Judgment at the Last Day`],
  ["2章", `大罪人的显露与真道的坚守`, "Ch. 2", `The Man of Sin Revealed and Standing Fast in Truth`],
  ["3章", `勤劳做工与教会纪律`, "Ch. 3", `Diligent Work and Church Discipline`],
];

const keyVerse = {
  zh: `"弟兄们，你们行善不可丧志。"（帖撒罗尼迦后书 3:13）`,
  en: `"But ye, brethren, be not weary in well doing." (2 Thessalonians 3:13, KJV)`,
};

const info = { nameZh: `帖撒罗尼迦后书`, nameEn: `2 Thessalonians`, author: `使徒保罗`, date: `约公元51-52年`, chapters: `3章`, backHref: `/new-testament/pauline`, backLabel: `保罗书信`, bibleId: `2TH` };

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
