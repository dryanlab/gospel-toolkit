'use client';
import Link from 'next/link';
import SpeakButton from '@/components/SpeakButton';
import { useState } from 'react';
const sections = [
  {
    title_zh: `一、在基督里的属灵福气（1-3章）`,
    title_en: `I. Spiritual Blessings in Christ (Ch. 1-3)`,
    content_zh: `以弗所书以荣耀的颂歌开始——"愿颂赞归与我们主耶稣基督的父神！他在基督里曾赐给我们天上各样属灵的福气"（1:3）。选召（1:4）、救赎（1:7）、产业（1:11）、圣灵的印记（1:13）——这是神赐给每一个信徒的丰富资产。

保罗的两个代祷（1:15-23, 3:14-21）是全书最高峰：祈求信徒有智慧和启示的灵，认识基督复活的大能；愿信徒被圣灵充满，使基督住在心里，"以爱心为根，以爱心为基"，能以和众圣徒一同明白基督的爱"是何等长阔高深"（3:18）。

第2章展示了恩典的奇妙——我们"本是死在过犯罪恶之中"（2:1），却"因着信，藉着恩得救"（2:8）。犹太人和外邦人在基督里同为"一个新人"（2:15），"同蒙应许"（3:6）——这是教会的奥秘。`,
    content_en: `Ephesians opens with a glorious doxology -- "Blessed be the God and Father of our Lord Jesus Christ, who hath blessed us with all spiritual blessings in heavenly places in Christ" (1:3). Election (1:4), redemption (1:7), inheritance (1:11), the seal of the Spirit (1:13) -- these are the riches given to every believer.

Paul's two prayers (1:15-23, 3:14-21) are the book's summits: asking that believers have the spirit of wisdom and revelation to know the power of Christ's resurrection; that believers be filled with the Spirit, Christ dwelling in their hearts, rooted and grounded in love, able to comprehend "what is the breadth, and length, and depth, and height" of Christ's love (3:18).

Chapter 2 displays the wonder of grace -- we "were dead in trespasses and sins" (2:1), yet saved "by grace through faith" (2:8). Jews and Gentiles are "one new man" in Christ (2:15), "fellowheirs" (3:6) -- this is the mystery of the church.`,
  },
  {
    title_zh: `二、合一的呼召与新人的生活（4:1-5:21）`,
    title_en: `II. The Call to Unity and the Life of the New Self (4:1-5:21)`,
    content_zh: `保罗以"所以"转入实践——"我为主被囚的劝你们：行事为人就当与蒙召的恩相称"（4:1）。合一的根基是七个"一"：一体、一灵、一望、一主、一信、一洗、一神（4:4-6）。

基督升天后赐下各样恩赐——使徒、先知、传福音的、牧师和教师——为要成全圣徒（4:11-12）。目标是"满有基督长成的身量"（4:13），这是教会共同追求的目标。

脱去旧人、穿上新人（4:22-24）是基督徒生活的核心。从此不再说谎、不再偷窃、不再苦毒——不是靠律法，而是因为我们已经是新造的人。"要以恩慈相待，存怜悯的心，彼此饶恕，正如神在基督里饶恕了你们一样"（4:32）。生命中的一切圣洁，都是恩典的果实。`,
    content_en: `Paul pivots to practice with "therefore" -- "I therefore, the prisoner of the Lord, beseech you that ye walk worthy of the vocation wherewith ye are called" (4:1). Unity is grounded in the sevenfold "one": one body, one Spirit, one hope, one Lord, one faith, one baptism, one God (4:4-6).

The ascended Christ gave diverse gifts -- apostles, prophets, evangelists, pastors and teachers -- for the perfecting of the saints (4:11-12). The goal is "the measure of the stature of the fulness of Christ" (4:13), the church's shared pursuit.

Putting off the old man and putting on the new (4:22-24) is the heart of Christian life. No more lying, stealing, or bitterness -- not by law but because we are new creatures. "Be ye kind one to another, tenderhearted, forgiving one another, even as God for Christ's sake hath forgiven you" (4:32). Every holiness in life is the fruit of grace.`,
  },
  {
    title_zh: `三、家庭关系的更新（5:22-6:9）`,
    title_en: `III. Renewal of Family Relationships (5:22-6:9)`,
    content_zh: `以弗所书5:22-6:9是圣经中关于家庭关系最完整的教导。丈夫与妻子的关系是基督与教会的影像（5:25-32）——丈夫当爱妻子"如同基督爱教会，为教会舍己"（5:25），这是最高的爱的标准。

父母与儿女的关系（6:1-4）：儿女当孝敬父母，父母当"不要惹儿女的气，只要照着主的教训和警戒养育他们"（6:4）。仆人与主人（6:5-9）的关系在基督里被更新——服务不是出于恐惧，而是"像是服事主，不像是服事人"（6:7）。

这段经文的根基是"圣灵充满"（5:18）。充满圣灵的人才能以神的爱来爱伴侣、教导儿女、尊重同事。家庭的圣洁不靠规则，靠圣灵的更新。`,
    content_en: `Ephesians 5:22-6:9 is Scripture's most complete teaching on family relationships. The husband-wife relationship mirrors Christ and the church (5:25-32) -- husbands are to love their wives "even as Christ also loved the church, and gave himself for it" (5:25), the highest standard of love.

Parent-child relationship (6:1-4): children are to honour parents; parents are not to "provoke your children to wrath: but bring them up in the nurture and admonition of the Lord" (6:4). The master-servant relationship (6:5-9) is renewed in Christ -- service not out of fear but "as unto Christ, and not unto men" (6:7).

The foundation of this section is being "filled with the Spirit" (5:18). Only Spirit-filled believers can love spouses with God's love, raise children, and respect colleagues. Family holiness depends not on rules but on the Spirit's renewal.`,
  },
  {
    title_zh: `四、全副军装与属灵争战（6:10-24）`,
    title_en: `IV. The Whole Armor of God and Spiritual Warfare (6:10-24)`,
    content_zh: `以弗所书以属灵争战的教导结束。"我们并不是与属血气的争战，乃是与那些执政的、掌权的、管辖这幽暗世界的，以及天空属灵气的恶魔争战"（6:12）。基督徒的真正敌人不是人，而是属灵黑暗的势力。

神为信徒预备了全副军装：真理的腰带、公义的护心镜、平安福音的鞋、信德的藤牌、救恩的头盔、圣灵的宝剑——就是神的道（6:14-17）。六件军装中五件是防御的，只有一件进攻——神的话语。这说明基督徒的属灵生活以保守为主，以神的话语积极推进。

最后的命令是"常常祷告"（6:18）。军装虽然齐全，没有祷告就无法运用。全副军装 + 祷告，这是神给每个信徒的完整装备。以弗所书从天上最高的神学（1-3章）落实到地上最实际的争战（6章），完整地描绘了基督徒生活的蓝图。`,
    content_en: `Ephesians closes with teaching on spiritual warfare. "We wrestle not against flesh and blood, but against principalities, against powers, against the rulers of the darkness of this world, against spiritual wickedness in high places" (6:12). The Christian's true enemies are not people but spiritual forces of darkness.

God provides the whole armor: belt of truth, breastplate of righteousness, shoes of the gospel of peace, shield of faith, helmet of salvation, sword of the Spirit -- the word of God (6:14-17). Five of the six pieces are defensive; only one is offensive -- God's word. This shows the Christian's spiritual life centers on protection, advancing actively through God's word.

The final command is to "pray always" (6:18). Full armor without prayer cannot be deployed. The whole armor + prayer: God's complete equipment for every believer. Ephesians moves from the highest heavenly theology (ch. 1-3) to the most practical earthly battle (ch. 6), fully depicting the Christian life's blueprint.`,
  },
]

const overview = { zh: `以弗所书（6章）是保罗在罗马监狱中写的"监狱书信"之一（约公元60-62年），被称为保罗神学最成熟的表达。前三章是教义（在基督里的福气），后三章是实践（在基督里的生活）。全书的核心词是"在基督里"——出现超过三十次。以弗所书教导：教会不是人间组织，而是基督的身体，是神永恒计划的中心。`, en: `Ephesians (6 chapters) is one of Paul's "prison epistles" (c. AD 60–62), considered his most mature theological expression. The first three chapters are doctrine (blessings in Christ); the last three are practice (life in Christ). The core phrase "in Christ" appears over thirty times. Ephesians teaches: the church is not a human organization but Christ's body, the center of God's eternal plan.` };
const outline = [[`1章`,`在基督里的属灵福气`,`Ch. 1`,`Spiritual Blessings in Christ`],[`2章`,`恩典救恩与合一`,`Ch. 2`,`Grace, Salvation, Unity`],[`3章`,`教会的奥秘`,`Ch. 3`,`Mystery of the Church`],[`4章`,`合一与新人`,`Ch. 4`,`Unity and the New Self`],[`5章`,`光明之子与婚姻`,`Ch. 5`,`Children of Light; Marriage`],[`6章`,`全副军装`,`Ch. 6`,`The Whole Armor of God`]];
const keyVerse = { zh: `"你们得救是本乎恩，也因着信；这并不是出于自己，乃是神所赐的。"（以弗所书 2:8）`, en: `"For by grace are ye saved through faith; and that not of yourselves: it is the gift of God." (Ephesians 2:8)` };
const info = { nameZh: `以弗所书`, nameEn: `Ephesians`, author: `使徒保罗`, date: `约公元60-62年`, chapters: `6章`, backHref: `/new-testament/pauline`, backLabel: `保罗书信`, bibleId: `EPH` };
export default function BookGuide() { const [expandedIdx, setExpandedIdx] = useState<number | null>(null); return (<div className="max-w-4xl mx-auto px-4 py-8"><Link href={info.backHref} className="inline-flex items-center gap-1 text-sm text-[var(--color-accent)] hover:underline mb-6">← {info.backLabel}</Link><div className="text-center mb-10"><span className="text-5xl mb-4 block">📖</span><h1 className="font-serif-cn text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-2">{info.nameZh}导读</h1><p className="text-base text-[var(--color-text-secondary)] italic mb-4">A Guide to {info.nameEn}</p><div className="flex justify-center gap-4 text-xs text-[var(--color-text-secondary)]"><span>✍️ 作者：{info.author}</span><span>📅 {info.date}</span><span>📄 {info.chapters}</span></div></div><div className="mb-10 p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)]"><h2 className="font-serif-cn text-lg font-bold text-[var(--color-text)] mb-3">📋 全书概览</h2><div className="flex items-start gap-2 mb-3"><SpeakButton text={overview.zh} lang="zh" /><p className="text-sm text-[var(--color-text)] leading-relaxed font-serif-cn">{overview.zh}</p></div><div className="flex items-start gap-2"><SpeakButton text={overview.en} lang="en" /><p className="text-xs text-[var(--color-text-secondary)] italic leading-relaxed">{overview.en}</p></div></div><div className="mb-10 p-5 rounded-xl bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border border-amber-200 dark:border-amber-800"><p className="text-sm font-bold text-amber-800 dark:text-amber-300 mb-1">🔑 金句 Key Verse</p><p className="font-serif-cn text-base text-[var(--color-text)] font-bold leading-relaxed">{keyVerse.zh}</p><p className="text-sm text-[var(--color-text-secondary)] italic mt-1">{keyVerse.en}</p></div><div className="mb-6"><h2 className="font-serif-cn text-xl font-bold text-[var(--color-text)] mb-1">📚 分段导读</h2><p className="text-xs text-[var(--color-text-secondary)] italic mb-4">Section-by-Section Guide</p></div><div className="space-y-4">{sections.map((sec, i) => (<div key={i} className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] overflow-hidden"><button onClick={() => setExpandedIdx(expandedIdx === i ? null : i)} className="w-full flex items-center justify-between px-6 py-4 text-left cursor-pointer hover:bg-[var(--color-accent)]/5 transition-colors"><div><h3 className="font-serif-cn text-base font-bold text-[var(--color-text)]">{sec.title_zh}</h3><p className="text-xs text-[var(--color-text-secondary)] italic">{sec.title_en}</p></div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-5 h-5 text-[var(--color-text-secondary)] transition-transform ${expandedIdx === i ? 'rotate-180' : ''}`}><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" /></svg></button>{expandedIdx === i && (<div className="px-6 pb-5 border-t border-[var(--color-border)]"><div className="flex items-start gap-2 mt-4 mb-4"><SpeakButton text={sec.content_zh} lang="zh" /><p className="text-sm text-[var(--color-text)] leading-relaxed font-serif-cn whitespace-pre-line">{sec.content_zh}</p></div><div className="flex items-start gap-2"><SpeakButton text={sec.content_en} lang="en" /><p className="text-xs text-[var(--color-text-secondary)] italic leading-relaxed whitespace-pre-line">{sec.content_en}</p></div></div>)}</div>))}</div><div className="mt-10 p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)]"><h2 className="font-serif-cn text-lg font-bold text-[var(--color-text)] mb-4">🗂️ 章节大纲</h2>{(() => { const half = Math.ceil(outline.length / 2); const col1 = outline.slice(0, half); const col2 = outline.slice(half); const renderItem = ([zh, desc, chEn, descEn]: string[], i: number) => (<div key={i} className="py-1.5 border-b border-[var(--color-border)]/30 last:border-b-0"><div className="flex items-baseline gap-2"><span className="font-bold text-[var(--color-accent)] min-w-[65px] shrink-0">{zh}</span><span className="text-[var(--color-text)]">{desc}</span></div><div className="flex items-baseline gap-2 mt-0.5"><span className="text-[var(--color-text-secondary)] text-xs italic min-w-[65px] shrink-0">{chEn}</span><span className="text-[var(--color-text-secondary)] text-xs italic">{descEn}</span></div></div>); return (<div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 text-sm"><div>{col1.map((item, i) => renderItem(item, i))}</div><div>{col2.map((item, i) => renderItem(item, i + half))}</div></div>); })()}</div><div className="mt-8 text-center"><Link href={`/bible/${info.bibleId}`} className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--color-accent)] text-white font-bold hover:opacity-90 transition-opacity">📖 阅读{info.nameZh} Read {info.nameEn}</Link></div></div>); }