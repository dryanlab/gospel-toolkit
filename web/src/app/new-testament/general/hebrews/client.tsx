'use client';
import Link from 'next/link';
import SpeakButton from '@/components/SpeakButton';
import { useState } from 'react';

const sections = [
    {
      title_zh: '基督超越一切：先知、天使、摩西、亚伦',
      title_en: 'Christ Above All: Prophets, Angels, Moses, Aaron',
      content_zh: `希伯来书的核心论证是：耶稣基督超越旧约的一切中保和制度。作者面对的是有回归犹太教危险的希伯来信徒，他们在逼迫下动摇，开始怀念旧约礼仪的熟悉感。作者的回应是：你们回头就是退步，因为基督远超旧约的一切影儿。

"神既在古时藉着众先知多次多方地晓谕列祖，就在这末世藉着他儿子晓谕我们；又早已立他为承受万有的，也曾藉着他创造诸世界。他是神荣耀所发的光辉，是神本体的真像，常用他权能的命令托住万有。"（希伯来书 1:1-3）

"God, who at sundry times and in divers manners spake in time past unto the fathers by the prophets, Hath in these last days spoken unto us by his Son, whom he hath appointed heir of all things, by whom also he made the worlds; Who being the brightness of his glory, and the express image of his person, and upholding all things by the word of his power." (Hebrews 1:1-3, KJV)

这是整个圣经中对基督神性最高贵的描述之一。接下来作者逐一论证：基督比天使更尊贵（1-2章），比摩西更尊贵（3章），比旧约大祭司更尊贵（4-10章）。旧约的一切都指向他，他是那"实体"，旧约只是"影儿"。`,
      content_en: `The central argument of Hebrews is that Jesus Christ surpasses all of the Old Testament's mediators and institutions. The author addressed Hebrew believers in danger of returning to Judaism, who were wavering under persecution and growing nostalgic for Old Testament ritual familiarity. The response: turning back is regression, for Christ infinitely surpasses all the Old Testament's shadows.

"God, who at sundry times and in divers manners spake in time past unto the fathers by the prophets, Hath in these last days spoken unto us by his Son, whom he hath appointed heir of all things, by whom also he made the worlds; Who being the brightness of his glory, and the express image of his person, and upholding all things by the word of his power." (Hebrews 1:1-3, KJV)

This is one of the most majestic descriptions of Christ's divinity in all of Scripture. The author then argues systematically: Christ is greater than angels (chs. 1-2), greater than Moses (ch. 3), greater than the Old Testament high priest (chs. 4-10). All of the Old Testament pointed to Him; He is the "body," while the Old Testament was merely the "shadow."`
    },
    {
      title_zh: '大祭司的心肠：我们的软弱他都体恤',
      title_en: 'The High Priest\'s Heart: He Sympathizes with Our Weakness',
      content_zh: `希伯来书最独特的贡献之一，是将基督描绘为我们的大祭司——不是遥远的神圣存在，而是亲历人间疾苦的代求者。

"因我们的大祭司并非不能体恤我们的软弱。他也曾凡事受过试探，与我们一样，只是他没有犯罪。所以我们只管坦然无惧地来到施恩的宝座前，为要得怜恤，蒙恩惠，作随时的帮助。"（希伯来书 4:15-16）

"For we have not an high priest which cannot be touched with the feeling of our infirmities; but was in all points tempted like as we are, yet without sin. Let us therefore come boldly unto the throne of grace, that we may obtain mercy, and find grace to help in time of need." (Hebrews 4:15-16, KJV)

"体恤我们的软弱"——这个希腊词含义是与人同感、感同身受。基督不是袖手旁观的法官，而是亲自经历过试探、软弱、痛苦的大祭司。他哭过（约11:35），他疲倦过，他在客西马尼园"极其悲伤"（太26:38）。正因如此，他能"体恤"我们。

我们可以"坦然无惧地"来到施恩的宝座前——不是战战兢兢，不是自觉不配，而是因为有这样的大祭司为我们代求，我们可以放胆来到神的面前。`,
      content_en: `One of Hebrews' most distinctive contributions is portraying Christ as our High Priest — not a distant divine being but an intercessor who personally experienced human suffering.

"For we have not an high priest which cannot be touched with the feeling of our infirmities; but was in all points tempted like as we are, yet without sin. Let us therefore come boldly unto the throne of grace, that we may obtain mercy, and find grace to help in time of need." (Hebrews 4:15-16, KJV)

"Touched with the feeling of our infirmities' — the Greek word means to sympathize, to feel along with. Christ is not a detached judge but a High Priest who personally experienced temptation, weakness, and pain. He wept (John 11:35), He was tired, He was "exceeding sorrowful' in Gethsemane (Matt 26:38). This is precisely why He can "sympathize' with us.

We may come "boldly' to the throne of grace — not fearfully, not feeling unworthy, but because we have such a High Priest interceding for us, enabling us to approach God with confidence.`
    },
    {
      title_zh: '信心的英雄与更美的家乡',
      title_en: 'The Heroes of Faith and a Better Country',
      content_zh: `第十一章是圣经中最著名的章节之一，被称为"信心名人堂"。

"信就是所望之事的实底，是未见之事的确据。"（希伯来书 11:1）

"Now faith is the substance of things hoped for, the evidence of things not seen." (Hebrews 11:1, KJV)

从亚伯到亚伯拉罕，从摩西到拉哈甫，这些信心英雄们有一个共同点——他们都是"在世上是客旅，是寄居的"（11:13），他们"都是存着信心死的，并没有得着所应许的"（11:13），却"等候那座有根基的城，就是神所经营所建造的"（11:10）。

"这些人都是存着信心死的，并没有得着所应许的，却从远处望见，且欢喜迎接，又承认自己在世上是客旅，是寄居的。"（希伯来书 11:13）

"These all died in faith, not having received the promises, but having seen them afar off, and were persuaded of them, and embraced them, and confessed that they were strangers and pilgrims on the earth." (Hebrews 11:13, KJV)

作者在十二章继续：我们"有这许多的见证人，如同云彩围着我们，就当放下各样的重担，脱去容易缠累我们的罪，存心忍耐，奔那摆在我们前头的路程，仰望为我们信心创始成终的耶稣"（12:1-2）。那些已经去世的信心英雄们，成为我们的"见证人"，激励我们继续奔跑。`,
      content_en: `Chapter 11 is one of the most famous chapters in Scripture, known as the "Hall of Faith."

"Now faith is the substance of things hoped for, the evidence of things not seen." (Hebrews 11:1, KJV)

From Abel to Abraham, from Moses to Rahab, these heroes of faith share one thing in common — they were all "strangers and pilgrims on the earth' (11:13), they "all died in faith, not having received the promises' (11:13), yet they "looked for a city which hath foundations, whose builder and maker is God' (11:10).

"These all died in faith, not having received the promises, but having seen them afar off, and were persuaded of them, and embraced them, and confessed that they were strangers and pilgrims on the earth." (Hebrews 11:13, KJV)

The author continues in chapter 12: "seeing we also are compassed about with so great a cloud of witnesses, let us lay aside every weight, and the sin which doth so easily beset us, and let us run with patience the race that is set before us, Looking unto Jesus the author and finisher of our faith' (12:1-2). Those heroes of faith who have gone before become our "witnesses," urging us to keep running.`
    }
  ,
{
    title_zh: `四、信心的"名人堂"与忍耐的呼召（11-13章）`,
    title_en: `IV. The Hall of Faith and the Call to Endurance (Ch. 11-13)`,
    content_zh: `第11章是圣经中最著名的"信心名人堂"——亚伯、以诺、挪亚、亚伯拉罕、撒拉、摩西、喇合……一个接一个的名字，每一个都以"因着信"开始。"信就是所望之事的实底，是未见之事的确据"（11:1）。

这些人"都是存着信心死的，并没有得着所应许的"（11:13）——他们看见了应许的远景，却在今生没有得到。然而他们仍然相信。这种超越可见世界的信心，是希伯来书对每一代信徒的呼召。

第12章的劝勉紧随其后："我们既有这许多的见证人，如同云彩围着我们，就当放下各样的重担，脱去容易缠累我们的罪，存心忍耐，奔那摆在我们前头的路程，仰望为我们信心创始成终的耶稣"（12:1-2）。信心的终极榜样不是第11章的任何一位，而是耶稣——他"因那摆在前面的喜乐，就轻看羞辱，忍受了十字架的苦难"（12:2）。`,
    content_en: `Chapter 11 is Scripture's most famous "Hall of Faith" -- Abel, Enoch, Noah, Abraham, Sarah, Moses, Rahab... name after name, each beginning with "by faith." "Faith is the substance of things hoped for, the evidence of things not seen" (11:1).

These all "died in faith, not having received the promises" (11:13) -- they glimpsed the distant fulfillment but did not receive it in this life. Yet they still believed. This faith transcending the visible world is Hebrews' call to every generation of believers.

Chapter 12's exhortation follows immediately: "Seeing we also are compassed about with so great a cloud of witnesses, let us lay aside every weight, and the sin which doth so easily beset us, and let us run with patience the race that is set before us, Looking unto Jesus the author and finisher of our faith" (12:1-2). Faith's ultimate model is not anyone in chapter 11 but Jesus -- who "for the joy that was set before him endured the cross, despising the shame" (12:2).`,
  }
];

const overview = {
  zh: `希伯来书是新约神学最深邃的书卷之一，其核心主题是基督的超越性——他超越旧约的一切中保制度，是"更美"的。作者对象是面临逼迫、有回归犹太教危险的希伯来基督徒，以系统的释经论证劝勉他们：基督是大祭司，一次献上的祭永远有效，旧约的祭司制度已经完成了它指向基督的使命。不要退后，要持守。`,
  en: `Hebrews is one of the most theologically profound books in the New Testament. Its central theme is the supremacy of Christ — He surpasses all of the Old Testament's mediatorial institutions, being "better." Written to Hebrew Christians facing persecution and in danger of returning to Judaism, the letter argues systematically: Christ is the High Priest whose once-for-all sacrifice is eternally effective, and the Old Testament's priestly system has fulfilled its mission of pointing to Christ. Do not fall back — hold fast.`,
};

const outline = [
  ["1章", `神子的超越：比天使更尊贵`, "Ch. 1", `The Son's Supremacy: Greater Than Angels`],
  ["2章", `道成肉身与受苦的救主`, "Ch. 2", `The Incarnation and the Suffering Savior`],
  ["3章", `比摩西更尊贵；不可心里刚硬`, "Ch. 3", `Greater Than Moses; Do Not Harden Your Hearts`],
  ["4章", `进入安息的应许与大祭司的体恤`, "Ch. 4", `The Promise of Rest and the Sympathetic High Priest`],
  ["5章", `照麦基洗德的等次`, "Ch. 5", `According to the Order of Melchisedec`],
  ["6章", `成熟的劝勉与不变的应许`, "Ch. 6", `A Call to Maturity and an Unchangeable Promise`],
  ["7章", `麦基洗德与永远的祭司职分`, "Ch. 7", `Melchisedec and the Eternal Priesthood`],
  ["8章", `更美的约与更美的中保`, "Ch. 8", `A Better Covenant and a Better Mediator`],
  ["9章", `旧约的预表与基督的血`, "Ch. 9", `Old Testament Types and the Blood of Christ`],
  ["10章", `一次献上的祭与坚守信心`, "Ch. 10", `The Once-for-All Sacrifice and Holding Fast to Faith`],
  ["11章", `信心名人堂`, "Ch. 11", `The Hall of Faith`],
  ["12章", `仰望耶稣，奔跑路程`, "Ch. 12", `Looking to Jesus, Running the Race`],
  ["13章", `实践的劝勉与最终祝福`, "Ch. 13", `Practical Exhortations and Final Blessing`],
];

const keyVerse = {
  zh: `"因我们的大祭司并非不能体恤我们的软弱。他也曾凡事受过试探，与我们一样，只是他没有犯罪。"（希伯来书 4:15）`,
  en: `"For we have not an high priest which cannot be touched with the feeling of our infirmities; but was in all points tempted like as we are, yet without sin." (Hebrews 4:15, KJV)`,
};

const info = { nameZh: `希伯来书`, nameEn: `Hebrews`, author: `不详（传统归于保罗）`, date: `约公元60-70年`, chapters: `13章`, backHref: `/new-testament/general`, backLabel: `普通书信`, bibleId: `HEB` };

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
