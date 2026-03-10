'use client';
import Link from 'next/link';
import SpeakButton from '@/components/SpeakButton';
import { useState } from 'react';

const sections = [
  {
    title_zh: `一、五旬节与耶路撒冷教会（1-7章）`,
    title_en: `I. Pentecost and the Jerusalem Church (Ch. 1-7)`,
    content_zh: `使徒行传以耶稣升天的命令开始："但圣灵降临在你们身上，你们就必得着能力，并要在耶路撒冷、犹太全地，和撒玛利亚，直到地极，作我的见证"（1:8）。这节经文是全书的大纲。

五旬节圣灵降临（2章）改变了一切。彼得——那个三次不认主的渔夫——大有能力地讲道，三千人悔改受洗（2:41）。初代教会"恒心遵守使徒的教训，彼此交接，擘饼，祈祷"（2:42），凡物公用（2:44-45）。

然而教会立刻面对逼迫。使徒被抓、被打（4-5章），司提反成为第一位殉道者（7章）。他的祷告——"主啊，不要将这罪归于他们"（7:60）——像极了十字架上的耶稣。逼迫没有消灭教会，反而使福音向外扩散。`,
    content_en: `Acts begins with Jesus' ascension command: "Ye shall receive power, after that the Holy Ghost is come upon you: and ye shall be witnesses unto me both in Jerusalem, and in all Judaea, and in Samaria, and unto the uttermost part of the earth" (1:8). This verse is the book's outline.

The Holy Spirit's descent at Pentecost (ch. 2) changed everything. Peter -- the fisherman who denied Christ three times -- preached with power; three thousand repented and were baptized (2:41). The early church "continued stedfastly in the apostles' doctrine and fellowship, and in breaking of bread, and in prayers" (2:42), holding all things common (2:44-45).

Yet persecution came immediately. Apostles were arrested and beaten (ch. 4-5); Stephen became the first martyr (ch. 7). His prayer -- "Lord, lay not this sin to their charge" (7:60) -- echoed Jesus on the cross. Persecution did not destroy the church but scattered the gospel outward.`,
  },
  {
    title_zh: `二、福音的扩展：撒玛利亚与外邦人（8-12章）`,
    title_en: `II. The Gospel Expands: Samaria and the Gentiles (Ch. 8-12)`,
    content_zh: `司提反殉道后，腓利把福音带到撒玛利亚（8:5），又向埃塞俄比亚太监传福音（8:26-39）——地理和种族的藩篱开始被打破。

保罗在大马色路上的归信（9章）是教会历史最重大的转折之一。逼迫教会的人变成了最伟大的宣教士。然而使徒行传最具突破性的事件是彼得在哥尼流家的经历（10章）——神以异象教导彼得："神所洁净的，你不可当作俗物"（10:15）。圣灵降在外邦人身上，犹太信徒惊讶不已（10:44-45）。

耶路撒冷大会（15章虽在后面，但10章的原则为其奠基）宣告了福音的普世性。安提阿教会成为第一个以"基督徒"为名的群体（11:26），也成为宣教的基地。`,
    content_en: `After Stephen's martyrdom, Philip brought the gospel to Samaria (8:5) and to the Ethiopian eunuch (8:26-39) -- geographical and ethnic barriers began falling.

Paul's conversion on the Damascus road (ch. 9) is one of church history's most momentous turning points. The persecutor became the greatest missionary. Yet Acts' most groundbreaking event is Peter's experience at Cornelius' house (ch. 10) -- God taught Peter through a vision: "What God hath cleansed, that call not thou common" (10:15). The Holy Spirit fell upon Gentiles, and Jewish believers were astonished (10:44-45).

The Jerusalem Council (ch. 15 comes later but ch. 10 established the principle) declared the gospel's universality. Antioch became the first community called "Christians" (11:26) and the base for missionary expansion.`,
  },
  {
    title_zh: `三、保罗的宣教旅程（13-21章）`,
    title_en: `III. Paul's Missionary Journeys (Ch. 13-21)`,
    content_zh: `从安提阿教会出发，保罗进行了三次宣教旅程，把福音从亚洲带到欧洲。第一次旅程（13-14章）以彼西底安提阿的讲道为核心（13:16-41）。耶路撒冷大会（15章）确立了外邦信徒不需受割礼的原则。

第二次旅程（15:36-18:22）是最具戏剧性的——圣灵阻止他们去亚细亚，引导他们到马其顿（16:6-10）。福音进入欧洲。腓立比的狱卒问"我当怎样行才可以得救"（16:30），保罗回答："当信主耶稣，你和你一家都必得救"（16:31）。

在雅典的讲道（17:22-31）是基督教与希腊哲学对话的典范。在以弗所的告别（20:17-38）展现了牧者的心肠："我凡事给你们作榜样，叫你们知道应当这样劳苦，扶助软弱的人"（20:35）。`,
    content_en: `From Antioch Paul embarked on three missionary journeys, carrying the gospel from Asia to Europe. The first journey (ch. 13-14) centered on the sermon at Pisidian Antioch (13:16-41). The Jerusalem Council (ch. 15) established that Gentile converts need not be circumcised.

The second journey (15:36-18:22) was the most dramatic -- the Spirit prevented them from going to Asia and directed them to Macedonia (16:6-10). The gospel entered Europe. The Philippian jailer asked "What must I do to be saved?" (16:30); Paul answered: "Believe on the Lord Jesus Christ, and thou shalt be saved, and thy house" (16:31).

The Athens sermon (17:22-31) is a model of Christian engagement with philosophy. The Ephesus farewell (20:17-38) reveals a pastor's heart: "I have shewed you all things, how that so labouring ye ought to support the weak" (20:35).`,
  },
  {
    title_zh: `四、被捕、审判与抵达罗马（22-28章）`,
    title_en: `IV. Arrest, Trials, and Arrival in Rome (Ch. 22-28)`,
    content_zh: `保罗在耶路撒冷被捕后，在各级法庭申诉（22-26章），向大祭司、总督腓力斯、非斯都、亚基帕王作见证。每一次审判都成为传福音的机会——福音不怕公开审查。

保罗向亚基帕王的辩词（26章）是全书最有力的讲道之一："亚基帕王啊，你信先知吗？我知道你是信的"（26:27）。亚基帕的回应令人心碎："你想少微一劝，便叫我作基督徒啊"（26:28）——如此接近，却未跨过。

最后的海上风暴和船难（27章）不是意外，而是神的护理。保罗对同船的人说："你们应当放心"（27:25），因为神的应许比风暴更可靠。使徒行传以保罗在罗马"放胆传讲神国的道"结束（28:31）——没有完结，因为福音的故事仍在继续。`,
    content_en: `After Paul's arrest in Jerusalem, he testified before successive courts (ch. 22-26) -- the high priest, Governor Felix, Festus, and King Agrippa. Each trial became an opportunity for the gospel -- the gospel does not fear open scrutiny.

Paul's defense before Agrippa (ch. 26) is one of the book's most powerful sermons: "King Agrippa, believest thou the prophets? I know that thou believest" (26:27). Agrippa's response is heartbreaking: "Almost thou persuadest me to be a Christian" (26:28) -- so close, yet not crossing over.

The storm and shipwreck (ch. 27) were not accidents but divine providence. Paul told his shipmates, "Be of good cheer" (27:25), for God's promise is more reliable than any storm. Acts ends with Paul in Rome "preaching the kingdom of God... with all confidence" (28:31) -- unfinished, because the story of the gospel continues.`,
  },
]

const overview = {
  zh: `使徒行传（28章）是路加的第二卷书，记载了从五旬节到保罗抵达罗马（约公元30-62年）的教会历史。全书的结构按照耶稣的命令展开："在耶路撒冷、犹太全地，和撒玛利亚，直到地极，作我的见证"（1:8）。

圣灵是全书真正的主角。从圣灵降临（2章）到圣灵推进每一个重大突破，使徒行传教导：教会的增长不靠人的策略，乃靠神的灵。`,
  en: `Acts (28 chapters) is Luke's second volume, recording church history from Pentecost to Paul's arrival in Rome (c. AD 30–62). The structure follows Jesus' commission: "ye shall be witnesses unto me both in Jerusalem, and in all Judaea, and in Samaria, and unto the uttermost part of the earth" (1:8).

The Holy Spirit is the book's true protagonist. From Pentecost (ch. 2) through every major breakthrough, Acts teaches: church growth depends not on human strategy but on God's Spirit.`,
};

const outline = [
  ["1-2章", "升天、五旬节、教会诞生", "Ch. 1–2", "Ascension, Pentecost, Church Birth"],
  ["3-7章", "耶路撒冷教会与司提反殉道", "Ch. 3–7", "Jerusalem Church; Stephen's Martyrdom"],
  ["8-9章", "撒玛利亚与保罗归信", "Ch. 8–9", "Samaria and Paul's Conversion"],
  ["10-12章", "外邦人进入教会", "Ch. 10–12", "Gentiles Enter the Church"],
  ["13-15章", "第一次行程与耶路撒冷大会", "Ch. 13–15", "First Journey and Jerusalem Council"],
  ["16-18章", "第二次行程：腓立比、雅典、哥林多", "Ch. 16–18", "Second Journey"],
  ["19-21章", "第三次行程与回耶路撒冷", "Ch. 19–21", "Third Journey"],
  ["22-28章", "被捕、审判、航行罗马", "Ch. 22–28", "Arrest, Trials, Voyage to Rome"],
];

const keyVerse = {
  zh: `"但圣灵降临在你们身上，你们就必得着能力，并要在耶路撒冷、犹太全地，和撒玛利亚，直到地极，作我的见证。"（使徒行传 1:8）`,
  en: `"But ye shall receive power, after that the Holy Ghost is come upon you: and ye shall be witnesses unto me both in Jerusalem, and in all Judaea, and in Samaria, and unto the uttermost part of the earth." (Acts 1:8)`,
};

const info = { nameZh: `使徒行传`, nameEn: `Acts`, author: `路加医生`, date: `约公元62-80年`, chapters: `28章`, backHref: `/new-testament/gospels`, backLabel: `四福音书与历史`, bibleId: `ACT` };

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