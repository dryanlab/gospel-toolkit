'use client';
import Link from 'next/link';
import SpeakButton from '@/components/SpeakButton';
import { useState } from 'react';

const sections = [
    {
      title_zh: '一、神是光：在光明中行走（1-2章）',
      title_en: `I. God Is Light: Walking in the Light`,
      content_zh: `约翰一书是约翰在晚年写给爱弗所附近教会的书信，回应当时兴起的幻影说（认为基督没有真实的肉身）。约翰以"从起初"就亲眼所见的见证开篇，强调道成肉身的真实性。

"神就是光，在他毫无黑暗。这是我们从主所听见、又报给你们的信息。我们若说是与神相交，却仍在黑暗里行，就是说谎话，不行真理了。我们若在光明中行，如同神在光明中，就彼此相交，他儿子耶稣的血也洗净我们一切的罪。"（约翰一书 1:5-7）

"This then is the message which we have heard of him, and declare unto you, that God is light, and in him is no darkness at all. If we say that we have fellowship with him, and walk in darkness, we lie, and do not the truth: But if we walk in the light, as he is in the light, we have fellowship one with another, and the blood of Jesus Christ his Son cleanseth us from all sin." (1 John 1:5-7, KJV)

"神是光"——光和黑暗没有中间地带。与神相交不可能同时活在罪中。约翰紧接着说，若承认自己的罪，神是信实公义的，必要赦免我们的罪（1:9）——不是不认罪，而是在光中认罪，在光中被洁净。`,
      content_en: `First John was written by the elderly John to churches near Ephesus, responding to the emerging Docetism (the belief that Christ did not have a real physical body). John opens with eyewitness testimony "from the beginning," emphasizing the reality of the incarnation.

"This then is the message which we have heard of him, and declare unto you, that God is light, and in him is no darkness at all. If we say that we have fellowship with him, and walk in darkness, we lie, and do not the truth: But if we walk in the light, as he is in the light, we have fellowship one with another, and the blood of Jesus Christ his Son cleanseth us from all sin." (1 John 1:5-7, KJV)

"God is light' — there is no middle ground between light and darkness. Having fellowship with God is incompatible with living in sin. John immediately adds that if we confess our sins, He is faithful and just to forgive us (1:9) — not that we deny sin, but that we confess it in the light and are cleansed in the light.`
    },
    {
      title_zh: '二、爱神与爱弟兄：不可分割（3章）',
      title_en: `II. Loving God and Loving Brothers: Inseparable`,
      content_zh: `约翰一书最著名的主题是爱——神的爱与我们对弟兄的爱是不可分割的。

"亲爱的弟兄啊，我们应当彼此相爱，因为爱是从神来的。凡有爱心的，都是由神而生，并且认识神。没有爱心的，就不认识神，因为神就是爱。"（约翰一书 4:7-8）

"Beloved, let us love one another: for love is of God; and every one that loveth is born of God, and knoweth God. He that loveth not knoweth not God; for God is love." (1 John 4:7-8, KJV)

"神就是爱"——这不是说爱就是神，而是说神的本质是爱。神爱的明证是："神差他独生子到世间来，使我们藉着他得生，神爱我们的心在此就显明了"（4:9）。我们爱，因为他先爱了我们（4:19）。

约翰进一步说："人若说我爱神，却恨他的弟兄，就是说谎话的；不爱他所看见的弟兄，就不能爱没有看见的神"（4:20）。爱神和爱弟兄是一体的，不可分割。声称爱神却恨弟兄是自欺欺人。`,
      content_en: `First John's most celebrated theme is love — God's love for us and our love for brothers are inseparable.

"Beloved, let us love one another: for love is of God; and every one that loveth is born of God, and knoweth God. He that loveth not knoweth not God; for God is love." (1 John 4:7-8, KJV)

"God is love' — this does not mean love is God, but that love is the very nature of God. The proof of God's love: "God sent his only begotten Son into the world, that we might live through him. Herein is love' (4:9). We love because He first loved us (4:19).

John further says: "If a man say, I love God, and hateth his brother, he is a liar: for he that loveth not his brother whom he hath seen, how can he love God whom he hath not seen?" (4:20). Loving God and loving brothers are one — they cannot be separated. Claiming to love God while hating brothers is self-deception.`
    },
    {
      title_zh: '三、得胜世界的信心（5章）',
      title_en: `III. The Faith That Overcomes the World`,
      content_zh: `约翰一书的结尾充满了确据——知道自己有永生是可以的，信心是得胜世界的武器。

"因为凡从神生的，就胜过世界；使我们胜了世界的，就是我们的信心。胜过世界的是谁呢？不是那信耶稣是神儿子的吗？"（约翰一书 5:4-5）

"For whatsoever is born of God overcometh the world: and this is the victory that overcometh the world, even our faith. Who is he that overcometh the world, but he that believeth that Jesus is the Son of God?" (1 John 5:4-5, KJV)

"胜过世界的……就是我们的信心"——信心不是一种感觉，而是一种确据，是抓住了耶稣是神儿子这一真理的信心。约翰说，这信心的果实是：神赐给我们永生，这永生是在他儿子里面的（5:11）。

约翰一书的最后是一句珍贵的承诺："我将这些话写给你们信奉神儿子之名的人，要叫你们知道自己有永生"（5:13）。永生不是死后才知道的，而是现在就可以知道。这是约翰一书写作的目的——让信徒有确据。`,
      content_en: `First John ends with assurance — knowing that we have eternal life is possible, and faith is the weapon that overcomes the world.

"For whatsoever is born of God overcometh the world: and this is the victory that overcometh the world, even our faith. Who is he that overcometh the world, but he that believeth that Jesus is the Son of God?" (1 John 5:4-5, KJV)

"The victory that overcometh the world, even our faith' — faith is not a feeling but a certainty, a faith that grasps the truth that Jesus is the Son of God. John says the fruit of this faith: God has given us eternal life, and this life is in His Son (5:11).

First John ends with a precious promise: "These things have I written unto you that believe on the name of the Son of God; that ye may know that ye have eternal life" (5:13). Eternal life is not something we only know after death — we can know it now. This is the purpose of First John: to give believers assurance.`
    },
    {
      title_zh: `四、试验真假先知与爱的完全（4章）`,
      title_en: `IV. Testing Spirits and the Perfection of Love (Ch. 4)`,
      content_zh: `第四章开门见山地要求信徒"不要信一切的灵，总要试验那些灵是否出于神"（4:1）。试验的标准是：承认耶稣基督是道成了肉身来的，那灵就是出于神的；凡不承认耶稣的，那灵不是出于神（4:2-3）。这个神学测试在约翰时代针对幻影说，在今日同样适用于一切否认基督真人真神的异端。

然后约翰进入全书最深刻的神学宣告："神就是爱"（4:8）。这不只是说神有爱，而是说爱是神的本性。神的爱如何显明？"不是我们爱神，乃是神爱我们，差他的儿子为我们的罪作了挽回祭，这就是爱了"（4:10）。

爱的逻辑产生了爱的义务："亲爱的弟兄啊，神既是这样爱我们，我们也当彼此相爱"（4:11）。我们爱，因为他先爱我们（4:19）——这是恩典伦理学的精华。爱达到完全的标志是"在审判的日子可以坦然无惧"（4:17）——因为爱里没有惧怕，完全的爱把惧怕除去。`,
      content_en: `Chapter 4 immediately calls believers to "believe not every spirit, but try the spirits whether they are of God" (4:1). The test is: every spirit that confesses Christ has come in the flesh is of God; every spirit that does not confess Jesus is not of God (4:2-3). This theological test addressed Docetism in John's time and applies equally today to any heresy denying Christ's true humanity and divinity.

John then arrives at the book's deepest theological declaration: "God is love" (4:8). This does not merely say God possesses love — love is God's very nature. How is God's love manifested? "Not that we loved God, but that he loved us, and sent his Son to be the propitiation for our sins" (4:10).

Love's logic produces love's obligation: "Beloved, if God so loved us, we ought also to love one another" (4:11). "We love him, because he first loved us" (4:19) — this is the essence of grace ethics. The mark of love made perfect is "boldness in the day of judgment" (4:17) — for there is no fear in love; perfect love casts out fear.`
    }
  ];

const overview = {
  zh: `约翰一书是使徒约翰晚年所写，主要对象是小亚细亚的教会。约翰面对两大威胁：幻影说（否认基督真实的人性）和道德上的放纵主义。书信围绕三个核心主题：神是光（1-2章）、神是爱（3-4章）、神是生命（5章）。约翰用三重测试帮助信徒确认真信仰：神学的（承认基督道成肉身）、道德的（遵守命令）、社会的（爱弟兄）。`,
  en: `First John was written by the apostle John in his later years, addressed primarily to churches in Asia Minor. John faced two major threats: Docetism (denying Christ's true humanity) and moral libertinism. The letter centers on three themes: God is light (chs. 1-2), God is love (chs. 3-4), and God is life (ch. 5). John provides three tests to help believers confirm genuine faith: theological (acknowledging Christ's incarnation), moral (keeping the commandments), and social (loving brothers).`,
};

const outline = [
  ["1章", `道成肉身的见证与在光中行走`, "Ch. 1", `Witness to the Incarnation and Walking in the Light`],
  ["2章", `不爱世界与认识基督的记号`, "Ch. 2", `Not Loving the World and the Tests of Knowing Christ`],
  ["3章", `神的儿女的记号：爱与圣洁`, "Ch. 3", `Marks of God's Children: Love and Holiness`],
  ["4章", `神就是爱：爱的根源与实践`, "Ch. 4", `God Is Love: The Source and Practice of Love`],
  ["5章", `得胜的信心与永生的确据`, "Ch. 5", `Overcoming Faith and the Assurance of Eternal Life`],
];

const keyVerse = {
  zh: `"没有爱心的，就不认识神，因为神就是爱。"（约翰一书 4:8）`,
  en: `"He that loveth not knoweth not God; for God is love." (1 John 4:8, KJV)`,
};

const info = { nameZh: `约翰一书`, nameEn: `1 John`, author: `使徒约翰`, date: `约公元85-95年`, chapters: `5章`, backHref: `/new-testament/general`, backLabel: `普通书信`, bibleId: `1JO` };

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
