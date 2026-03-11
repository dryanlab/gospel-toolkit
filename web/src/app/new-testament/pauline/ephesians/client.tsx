'use client';
import Link from 'next/link';
import SpeakButton from '@/components/SpeakButton';
import { useState } from 'react';
const sections = [
  {
    title_zh: `一、在基督里的拣选与恩典的救恩（1-2章）`,
    title_en: `I. Election in Christ and Salvation by Grace (Ch. 1-2)`,
    content_zh: `以弗所书以新约中最荣耀的颂歌开始——一个长达12节的希腊文句子（1:3-14），保罗一口气颂赞三一神的救恩工作：

"愿颂赞归与我们主耶稣基督的父神！他在基督里曾赐给我们天上各样属灵的福气；就如神从创立世界以前，在基督里拣选了我们，使我们在他面前成为圣洁，无有瑕疵；又因爱我们，就按着自己的意旨所喜悦的，预定我们藉着耶稣基督得儿子的名分"（1:3-5）。

"Blessed be the God and Father of our Lord Jesus Christ, who hath blessed us with all spiritual blessings in heavenly places in Christ: According as he hath chosen us in him before the foundation of the world, that we should be holy and without blame before him in love: Having predestinated us unto the adoption of children by Jesus Christ to himself, according to the good pleasure of his will." (Ephesians 1:3-5, KJV)

"从创立世界以前"拣选——这不是事后的追认，而是在时间之前的永恒定旨。改革宗神学的"无条件的拣选"教义正植根于此：神拣选我们不是因为他预见我们会信，而是"按着自己的意旨所喜悦的"。接着是救赎（"我们藉这爱子的血得蒙救赎，过犯得以赦免"，1:7）、启示（"都是照他自己所预定的美意"，1:9）、继承（"我们也在他里面得了基业"，1:11）、印证（"你们既听见真理的道……信了基督，既然信他，就受了所应许的圣灵为印记"，1:13）。圣父拣选、圣子救赎、圣灵印证——三一神完美协作的救恩。

保罗的第一个代祷（1:15-23）求神赐下"智慧和启示的灵"，使信徒"真知道他"；认识"他的恩召有何等指望"、"他在圣徒中得的基业有何等丰盛的荣耀"、以及"他向我们这信的人所显的能力是何等浩大"——就是使基督从死里复活的同一大能（1:19-20）。

第2章展示了恩典救恩最精炼的表述。"你们死在过犯罪恶之中，他叫你们活过来"（2:1）——人在罪中不是"生病了"而是"死了"。死人不能自救，只能等候外来的复活大能。"然而，神既有丰富的怜悯，因他爱我们的大爱，当我们死在过犯中的时候，便叫我们与基督一同活过来。你们得救是本乎恩"（2:4-5）。

"你们得救是本乎恩，也因着信；这并不是出于自己，乃是神所赐的；也不是出于行为，免得有人自夸"（2:8-9）——改革宗"五个唯独"中"唯独恩典"和"唯独信心"的圣经基石。信心本身也是神的恩赐，不是人自己产生的。

2:11-22揭示了教会合一的奥秘：外邦人从前"与基督无关"、"在以色列国民以外"（2:12），如今在基督的十字架上"中间隔断的墙"被拆毁（2:14），犹太人和外邦人合为"一个新人"（2:15），同被建造成"神藉着圣灵居住的所在"（2:22）。`,
    content_en: `Ephesians opens with the New Testament's most glorious doxology — a single Greek sentence spanning twelve verses (1:3-14), Paul praising the Triune God's work of salvation in one breath:

"Blessed be the God and Father of our Lord Jesus Christ, who hath blessed us with all spiritual blessings in heavenly places in Christ: According as he hath chosen us in him before the foundation of the world, that we should be holy and without blame before him in love: Having predestinated us unto the adoption of children by Jesus Christ to himself, according to the good pleasure of his will." (Ephesians 1:3-5, KJV)

Chosen "before the foundation of the world" — not a retroactive endorsement but an eternal decree before time began. The Reformed doctrine of "unconditional election" is rooted precisely here: God chose us not because He foresaw our faith but "according to the good pleasure of his will." Then redemption ("In whom we have redemption through his blood, the forgiveness of sins," 1:7), revelation ("according to his good pleasure which he hath purposed in himself," 1:9), inheritance ("In whom also we have obtained an inheritance," 1:11), and sealing ("after that ye heard the word of truth... ye were sealed with that holy Spirit of promise," 1:13). The Father elects, the Son redeems, the Spirit seals — the Trinity's perfect cooperation in salvation.

Paul's first prayer (1:15-23) asks God for "the spirit of wisdom and revelation" that believers may "know him"; to know "what is the hope of his calling," "what the riches of the glory of his inheritance in the saints," and "what is the exceeding greatness of his power to us-ward who believe" — the very same power that raised Christ from the dead (1:19-20).

Chapter 2 presents salvation by grace in its most distilled form. "And you hath he quickened, who were dead in trespasses and sins" (2:1) — humanity in sin is not "sick" but "dead." The dead cannot save themselves; they can only await an external power of resurrection. "But God, who is rich in mercy, for his great love wherewith he loved us, Even when we were dead in sins, hath quickened us together with Christ, (by grace ye are saved)" (2:4-5).

"For by grace are ye saved through faith; and that not of yourselves: it is the gift of God: Not of works, lest any man should boast" (2:8-9) — the biblical cornerstone of the Reformed "Sola Gratia" and "Sola Fide." Faith itself is God's gift, not something humans produce.

2:11-22 reveals the mystery of church unity: Gentiles once "without Christ" and "aliens from the commonwealth of Israel" (2:12) now have the "middle wall of partition" broken down at Christ's cross (2:14). Jew and Gentile are made into "one new man" (2:15), built together as "an habitation of God through the Spirit" (2:22).`,
  },
  {
    title_zh: `二、教会的奥秘与保罗的祷告（3章）`,
    title_en: `II. The Mystery of the Church and Paul's Prayer (Ch. 3)`,
    content_zh: `第3章揭示了保罗所领受的"奥秘"——"这奥秘就是外邦人在基督耶稣里，藉着福音，得以同为后嗣，同为一体，同蒙应许"（3:6）。在旧约时代，这个奥秘是隐藏的；如今藉着使徒和先知被揭示出来。教会不是神的应急方案（plan B），而是"从万世以前"就预定的永恒计划（3:11）。

"为要藉着教会使天上执政的、掌权的，现在得知神百般的智慧"（3:10）——教会的存在本身就是对宇宙性属灵权势的宣告。当犹太人和外邦人、奴隶和自由人、男人和女人在基督里合一敬拜时，天使和执政掌权者看到了神智慧的彰显。

第3章以保罗第二个代祷结束——这是全圣经中最壮丽的祷告之一："求他按着他丰盛的荣耀，藉着他的灵，叫你们心里的力量刚强起来，使基督因你们的信，住在你们心里，叫你们的爱心有根有基，能以和众圣徒一同明白基督的爱是何等长阔高深，并知道这爱是过于人所能测度的，便叫神一切所充满的，充满了你们"（3:16-19）。基督的爱有四个维度——长、阔、高、深——却超越了所有维度，是"过于人所能测度的"。

颂荣词为前三章作结："神能照着运行在我们心里的大力充充足足地成就一切，超过我们所求所想的。但愿他在教会中，并在基督耶稣里，得着荣耀，直到世世代代，永永远远。阿们！"（3:20-21）`,
    content_en: `Chapter 3 reveals the "mystery" Paul received — "That the Gentiles should be fellowheirs, and of the same body, and partakers of his promise in Christ by the gospel" (3:6). In the Old Testament era this mystery was hidden; now it is revealed through apostles and prophets. The church is not God's backup plan but His eternal purpose "from the beginning of the world" (3:11).

"To the intent that now unto the principalities and powers in heavenly places might be known by the church the manifold wisdom of God" (3:10) — the church's very existence is a proclamation to cosmic spiritual powers. When Jews and Gentiles, slaves and free, men and women worship together in Christ, angels and principalities behold the display of God's wisdom.

Chapter 3 concludes with Paul's second prayer — one of Scripture's most magnificent: "That he would grant you, according to the riches of his glory, to be strengthened with might by his Spirit in the inner man; That Christ may dwell in your hearts by faith; that ye, being rooted and grounded in love, May be able to comprehend with all saints what is the breadth, and length, and depth, and height; And to know the love of Christ, which passeth knowledge, that ye might be filled with all the fulness of God" (3:16-19). Christ's love has four dimensions — breadth, length, depth, height — yet surpasses all dimensions, "passing knowledge."

The doxology concludes the first half: "Now unto him that is able to do exceeding abundantly above all that we ask or think, according to the power that worketh in us, Unto him be glory in the church by Christ Jesus throughout all ages, world without end. Amen." (3:20-21)`,
  },
  {
    title_zh: `三、合一的呼召与新人的生活（4:1-5:21）`,
    title_en: `II. The Call to Unity and the Life of the New Self (4:1-5:21)`,
    content_zh: `以弗所书的伟大"所以"——前三章是教义根基（神为我们做了什么），后三章是实践果实（我们当如何活）。"我为主被囚的劝你们：既然蒙召，行事为人就当与蒙召的恩相称"（4:1）。"相称"是关键——不是靠行为赚取地位，而是活出已经得到的地位。

合一的根基是七个"一"："身体只有一个，圣灵只有一个……一主，一信，一洗，一神，就是众人的父，超乎众人之上，贯乎众人之中，也住在众人之内"（4:4-6）。合一不是人造的和谐，而是三一神本身的合一在教会中的彰显。

基督升天后赐下五种恩赐："他所赐的，有使徒，有先知，有传福音的，有牧师和教师，为要成全圣徒，各尽其职，建立基督的身体"（4:11-12）。注意：恩赐的目的不是使领袖更出色，而是"成全圣徒"——使每个信徒都能服事。目标是"直等到我们众人在真道上同归于一，认识神的儿子，得以长大成人，满有基督长成的身量"（4:13）。

4:17-5:21是新人生活的具体描绘。"你们学了基督，却不是这样"（4:20）——基督教伦理不是抽象的规条，而是在基督里的新生命的自然表达。"就要脱去你们从前行为上的旧人……将你们的心志改换一新，并且穿上新人；这新人是照着神的形像造的，有真理的仁义和圣洁"（4:22-24）。

具体应用包括：弃绝谎言说诚实话（4:25）、生气却不犯罪（4:26）、不偷窃反倒劳力行善（4:28）、不说污秽的话只说造就人的好话（4:29）、"不要叫神的圣灵担忧"（4:30）、除掉苦毒和恼怒（4:31）。总原则是："要以恩慈相待，存怜悯的心，彼此饶恕，正如神在基督里饶恕了你们一样"（4:32）——饶恕的能力来自被饶恕的经历。

"从前你们是暗昧的，但如今在主里面是光明的，行事为人就当像光明的子女"（5:8）。"不要作糊涂人，要明白主的旨意如何。不要醉酒，酒能使人放荡；乃要被圣灵充满"（5:17-18）——被圣灵充满是新人生活的动力源泉。`,
    content_en: `Ephesians' great "therefore" — the first three chapters are doctrinal foundation (what God has done for us); the last three are practical fruit (how we should live). "I therefore, the prisoner of the Lord, beseech you that ye walk worthy of the vocation wherewith ye are called" (4:1). "Worthy" is key — not earning status by works but living out the status already given.

Unity's foundation is the sevenfold "one": "There is one body, and one Spirit... One Lord, one faith, one baptism, One God and Father of all, who is above all, and through all, and in you all" (4:4-6). Unity is not manufactured harmony but the manifestation of the Trinity's own unity in the church.

The ascended Christ gave five gifts: "And he gave some, apostles; and some, prophets; and some, evangelists; and some, pastors and teachers; For the perfecting of the saints, for the work of the ministry, for the edifying of the body of Christ" (4:11-12). Note: gifts' purpose is not to make leaders more impressive but to "perfect the saints" — equipping every believer for service. The goal is "Till we all come in the unity of the faith, and of the knowledge of the Son of God, unto a perfect man, unto the measure of the stature of the fulness of Christ" (4:13).

4:17-5:21 concretely depicts the new life. "But ye have not so learned Christ" (4:20) — Christian ethics are not abstract rules but the natural expression of new life in Christ. "That ye put off concerning the former conversation the old man... And be renewed in the spirit of your mind; And that ye put on the new man, which after God is created in righteousness and true holiness" (4:22-24).

Specific applications include: putting away lying and speaking truth (4:25), being angry without sinning (4:26), stealing no more but laboring to give (4:28), no corrupt talk but edifying words (4:29), "grieve not the holy Spirit of God" (4:30), putting away bitterness and wrath (4:31). The governing principle: "And be ye kind one to another, tenderhearted, forgiving one another, even as God for Christ's sake hath forgiven you" (4:32) — the power to forgive comes from the experience of being forgiven.

"For ye were sometimes darkness, but now are ye light in the Lord: walk as children of light" (5:8). "Be not unwise, but understanding what the will of the Lord is. And be not drunk with wine, wherein is excess; but be filled with the Spirit" (5:17-18) — being filled with the Spirit is the power source for the new life.`,
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