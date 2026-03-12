'use client';
import Link from 'next/link';
import SpeakButton from '@/components/SpeakButton';
import { useState } from 'react';

const sections = [
    {
      title_zh: '一、活泼的盼望：苦难中的平安（1章）',
      title_en: `I. A Living Hope: Peace in Suffering`,
      content_zh: `彼得前书的背景是罗马帝国对基督徒的逼迫，收信人是散居各地的信徒。彼得以他亲身经历的失败与恢复，写下了关于苦难中盼望最真实的见证。

"愿颂赞归与我们主耶稣基督的父神！他曾照自己的大怜悯，藉耶稣基督从死里复活，重生了我们，叫我们有活泼的盼望，可以得着不能朽坏、不能玷污、不能衰残、为你们存留在天上的基业。"（彼得前书 1:3-4）

"活泼的盼望"——不是消极等待，而是活生生、有生命力的盼望。这盼望的根基是"耶稣基督从死里复活"。因为他复活了，我们的盼望不是幻想，而是确据。那在天上为我们存留的基业是三重的："不能朽坏"（不会腐烂）、"不能玷污"（不会被污染）、"不能衰残"（不会褪色）。这就是我们在苦难中仍能喜乐的原因。`,
      content_en: `First Peter was written against the backdrop of Roman persecution of Christians, addressed to believers scattered throughout various regions. Peter, drawing on his own personal experience of failure and restoration, wrote the most authentic testimony about hope in suffering.

"Blessed be the God and Father of our Lord Jesus Christ, which according to his abundant mercy hath begotten us again unto a lively hope by the resurrection of Jesus Christ from the dead, To an inheritance incorruptible, and undefiled, and that fadeth not away, reserved in heaven for you." (1 Peter 1:3-4, KJV)

"A lively hope' — not passive waiting but hope that is alive and vital. The foundation of this hope is "the resurrection of Jesus Christ from the dead." Because He rose, our hope is not wishful thinking but certainty. The inheritance reserved for us in heaven is threefold: "incorruptible' (will not decay), "undefiled' (cannot be contaminated), "fadeth not away' (will not fade). This is why we can rejoice even in suffering.`
    },
    {
      title_zh: '二、选民、圣洁的国度：教会的身份（2章）',
      title_en: `II. A Chosen Generation, A Holy Nation: The Church's Identity`,
      content_zh: `彼得书信中最著名的段落之一，描述了基督徒在神眼中的身份——这是每一个在苦难中迷失方向的信徒需要回归的根基。

"惟有你们是被拣选的族类，是有君尊的祭司，是圣洁的国度，是属神的子民，要叫你们宣扬那召你们出黑暗入奇妙光明者的美德。"（彼得前书 2:9）

四重身份：被拣选的族类（神主权的拣选）、有君尊的祭司（每个信徒都可直接到神面前）、圣洁的国度（分别为圣的群体）、属神的子民（字面是"为自己所得的子民"）。这一切的目的是什么？"宣扬那召你们出黑暗入奇妙光明者的美德"——宣扬神的美德，这是教会存在的使命。

你是谁？不是被社会定义、被苦难限制的人，而是被神拣选、被神宝贝的人。`,
      content_en: `One of the most celebrated passages in Peter's letters, describing believers' identity in God's eyes — the foundation to which every believer lost in suffering must return.

"But ye are a chosen generation, a royal priesthood, an holy nation, a peculiar people; that ye should shew forth the praises of him who hath called you out of darkness into his marvellous light." (1 Peter 2:9, KJV)

Four-fold identity: a chosen generation (God's sovereign election), a royal priesthood (every believer may approach God directly), a holy nation (a community set apart), a peculiar people (literally "a people for God's own possession'). What is the purpose of all this? To "shew forth the praises of him who hath called you out of darkness' — proclaiming God's excellence is the church's mission.

Who are you? Not someone defined by society or limited by suffering, but someone chosen by God and treasured by God.`
    },
    {
      title_zh: '三、在苦难中效法基督的脚踪（3章）',
      title_en: `III. Following Christ's Steps Through Suffering`,
      content_zh: `彼得书信关于苦难的教导，来自他亲眼目睹基督受苦的经历。他是在客西马尼园逃跑的那个人，是在大祭司院子里三次不认主的那个人——他对苦难与恐惧有切身的体验。

"你们蒙召原是为此；因基督也为你们受过苦，给你们留下榜样，叫你们跟随他的脚踪行。他并没有犯罪，口里也没有诡诈；他被骂不还口；受害不说威吓的话，只将自己交托那按公义审判人的主。"（彼得前书 2:21-23）

"给你们留下榜样"——基督的受苦不只是赎罪，也是我们的榜样。他"被骂不还口，受害不说威吓的话"，而是"将自己交托那按公义审判人的主"——这是真正的信心：在不公义中不试图自救，而是将自己托付给公义的神。

彼得在5章还有一句话出自他最深的体验："你们要将一切的忧虑卸给神，因为他顾念你们"（5:7）。`,
      content_en: `Peter's teaching on suffering came from his personal witness of Christ's passion. He was the one who fled in Gethsemane, the one who denied the Lord three times in the high priest's courtyard — he had intimate personal experience of suffering and fear.

"For even hereunto were ye called: because Christ also suffered for us, leaving us an example, that ye should follow his steps: Who did no sin, neither was guile found in his mouth: Who, when he was reviled, reviled not again; when he suffered, he threatened not; but committed himself to him that judgeth righteously." (1 Peter 2:21-23, KJV)

"Leaving us an example' — Christ's suffering was not only atoning but also exemplary. He "when he was reviled, reviled not again; when he suffered, he threatened not," but instead "committed himself to him that judgeth righteously' — this is true faith: not attempting self-rescue in injustice, but entrusting oneself to the just God.

Peter also wrote from his deepest experience in chapter 5: "Casting all your care upon him; for he careth for you" (5:7).`
    },
    {
      title_zh: `四、牧者心肠与在苦难中的恩典（4-5章）`,
      title_en: `IV. A Shepherd's Heart and Grace in Suffering (Ch. 4-5)`,
      content_zh: `第四章命令信徒"既然基督在肉身受苦，你们也当将这样的心志作为兵器"（4:1）——苦难中的心志是基督徒的属灵武器。"为做基督徒受苦，却不要羞耻，倒要因这名归荣耀给神"（4:16）——苦难不是羞耻，是荣耀的标记。

第五章彼得以"同作长老的"自称，向教会长老发出牧养的呼召："务要牧养在你们中间神的群羊，按着神旨意照管他们；不是出于勉强，乃是出于甘心；也不是因为贪财，乃是出于乐意；也不是辖制所托付你们的，乃是作群羊的榜样。"（5:2-3）

这是彼得留给牧者最重要的遗言，来自一个曾三次不认主的人——正因为他知道失败，才知道牧养的意义：不是靠权威，而是靠榜样；不是靠恐惧，而是靠爱心。"到了牧长显现的时候，你们必得那永不衰残的荣耀冠冕"（5:4）。

"你们要谦卑，服在神大能的手下，到了时候，他必叫你们升高。你们要将一切的忧虑卸给神，因为他顾念你们。"（5:6-7）——这是苦难中最深的安慰：神的手托着我们，神的心记念我们。`,
      content_en: `Chapter 4 calls believers to arm themselves with Christ's attitude toward suffering: "Since Christ suffered in his body, arm yourselves also with the same attitude" (4:1). "If you suffer as a Christian, do not be ashamed, but praise God that you bear that name" (4:16) — suffering is not shame but a mark of glory.

In chapter 5, Peter calls himself "a fellow elder" and gives pastors their calling: "Feed the flock of God which is among you, taking the oversight thereof, not by constraint, but willingly; not for filthy lucre, but of a ready mind; neither as being lords over God's heritage, but being ensamples to the flock." (5:2-3, KJV)

This is Peter's most important legacy for pastors, from a man who denied the Lord three times — precisely because he knew failure, he understood the meaning of shepherding: not through authority but through example; not through fear but through love. "And when the chief Shepherd shall appear, ye shall receive a crown of glory that fadeth not away" (5:4, KJV).

"Humble yourselves therefore under the mighty hand of God, that he may exalt you in due time: Casting all your care upon him; for he careth for you." (5:6-7, KJV) — this is suffering's deepest comfort: God's hand sustains us, God's heart remembers us.`
    }
  ];

const overview = {
  zh: `彼得前书写于罗马（书信中称为"巴比伦"），收信人是散居本都、加拉太等地的信徒。彼得面对的处境是尼禄皇帝迫害基督徒期间，信徒正在经历苦难和逼迫。这封书信的主题是苦难中的盼望——如何在试炼中持守信心、效法基督、活出圣洁的见证。彼得以自己三次不认主又蒙恢复的经历，写出了最真实的牧者关怀。`,
  en: `First Peter was written from Rome (called "Babylon' in the letter) to believers scattered throughout Pontus, Galatia, and other regions. Peter wrote during the time of Emperor Nero's persecution of Christians, when believers were experiencing suffering and hardship. The letter's theme is hope in suffering — how to hold fast to faith in trials, follow the example of Christ, and live out a holy testimony. Drawing on his own experience of denying the Lord three times and being restored, Peter wrote with the most authentic pastoral care.`,
};

const outline = [
  ["1章", `活泼的盼望与圣洁的呼召`, "Ch. 1", `A Living Hope and the Call to Holiness`],
  ["2章", `活石与选民、客旅的生活`, "Ch. 2", `Living Stones, Chosen People, Life as Strangers`],
  ["3章", `婚姻关系与苦难中的答辩`, "Ch. 3", `Marriage Relations and Defense in Suffering`],
  ["4章", `效法基督受苦与末日的警醒`, "Ch. 4", `Following Christ's Suffering and End-Time Alertness`],
  ["5章", `长老的牧养与谦卑顺服`, "Ch. 5", `Elders' Shepherding and Humble Submission`],
];

const theology = {
  title_zh: `核心神学：在苦难中活泼的盼望`,
  title_en: `Core Theology: A Living Hope Amid Suffering`,
  content_zh: `彼得前书写给散居各地、正在受逼迫的基督徒，核心信息是：苦难不是信仰的失败，而是信心被炼净的过程。

第一，活泼的盼望。"愿颂赞归与我们主耶稣基督的父神！祂曾照自己的大怜悯，藉耶稣基督从死里复活，重生了我们，叫我们有活泼的盼望"（1:3）。这盼望是"活泼的"——不是死气沉沉的期盼，而是因基督复活而充满生命力的确信。这盼望"存留在天上"，"不能朽坏、不能玷污、不能衰残"（1:4）——它不受地上环境的影响。

第二，苦难中的信心如精金。"你们的信心既被试验，就比那被火试验仍然能坏的金子更显宝贵"（1:7）。火不是为了毁灭金子，而是为了除去渣滓。苦难不是神弃绝的标志，而是神炼净的工具。"你们是被拣选的族类，是有君尊的祭司，是圣洁的国度，是属神的子民"（2:9）——受苦的基督徒不是可怜的受害者，而是君尊的祭司。

第三，基督受苦的榜样。"祂被骂不还口；受害不说威吓的话，只将自己交托那按公义审判人的主"（2:23）。彼得亲眼见过基督的受苦——他的见证不是神学理论，而是亲历者的回忆。"基督也为你们受过苦，给你们留下榜样，叫你们跟随祂的脚踪行"（2:21）。`,
  content_en: `1 Peter was written to scattered Christians under persecution; its core message is: suffering is not the failure of faith but the process by which faith is refined.

First, a living hope. "Blessed be the God and Father of our Lord Jesus Christ, which according to his abundant mercy hath begotten us again unto a lively hope by the resurrection of Jesus Christ from the dead" (1:3). This hope is "living" — not a lifeless expectation but a conviction pulsing with life through Christ's resurrection. This hope is "reserved in heaven," "incorruptible, and undefiled, and that fadeth not away" (1:4) — it is unaffected by earthly circumstances.

Second, faith tested like gold in fire. "The trial of your faith, being much more precious than of gold that perisheth, though it be tried with fire" (1:7). Fire is not meant to destroy gold but to remove dross. Suffering is not a sign of God's abandonment but His refining tool. "Ye are a chosen generation, a royal priesthood, an holy nation, a peculiar people" (2:9) — suffering Christians are not pitiable victims but royal priests.

Third, Christ's example of suffering. "When he was reviled, reviled not again; when he suffered, he threatened not; but committed himself to him that judgeth righteously" (2:23). Peter had witnessed Christ's suffering firsthand — his testimony is not theological theory but eyewitness memory. "Christ also suffered for us, leaving us an example, that ye should follow his steps" (2:21).`,
};

const keyVerse = {
  zh: `"惟有你们是被拣选的族类，是有君尊的祭司，是圣洁的国度，是属神的子民，要叫你们宣扬那召你们出黑暗入奇妙光明者的美德。"（彼得前书 2:9）`,
  en: `"But ye are a chosen generation, a royal priesthood, an holy nation, a peculiar people; that ye should shew forth the praises of him who hath called you out of darkness into his marvellous light." (1 Peter 2:9, KJV)`,
};

const info = { nameZh: `彼得前书`, nameEn: `1 Peter`, author: `使徒彼得`, date: `约公元62-64年`, chapters: `5章`, backHref: `/new-testament/general`, backLabel: `普通书信`, bibleId: `1PE` };


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
