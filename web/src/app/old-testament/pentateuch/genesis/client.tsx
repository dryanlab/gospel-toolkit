'use client';
import Link from 'next/link';
import SpeakButton from '@/components/SpeakButton';
import { useState } from 'react';

const sections = [
  {
    title_zh: `一、创造（1-2章）`,
    title_en: `I. Creation (Ch. 1–2)`,
    content_zh: `创世记以"起初，神创造天地"开篇，这是全部圣经的根基。第一章以庄严的节奏记载六日创造：光、穹苍、旱地与植物、日月星辰、飞鸟鱼类、走兽与人。每一日的创造都以"神看着是好的"结束，第六日造人后更宣告"甚好"。人是按照神的形像被造的，这赋予人独特的尊严与使命——治理全地，荣耀神。

第二章则聚焦伊甸园中的细节：神用地上的尘土造人，将生气吹在他鼻孔里；又为亚当设立园子，使他修理看守；取亚当的肋骨造了夏娃，设立了婚姻。"二人成为一体"，这是神对家庭的原初设计。韦敏斯德小要理问答第10问："神怎样造人？"答："神照着自己的形像，在知识、公义、圣洁中造人，使人管理一切受造之物。"`,
    content_en: `Genesis opens with "In the beginning God created the heaven and the earth" — the foundation of all Scripture. Chapter 1 records the six days of creation in solemn cadence: light, firmament, dry land and vegetation, sun, moon and stars, birds and fish, beasts and man. Each day concludes with "God saw that it was good," and after creating man on the sixth day, He declared it "very good." Humanity is made in God's image, granting unique dignity and purpose — to have dominion over the earth and glorify God.

Chapter 2 focuses on the details in Eden: God formed man from the dust of the ground and breathed into his nostrils the breath of life; He planted a garden for Adam to tend and keep; He took a rib from Adam to make Eve, establishing marriage. "They shall be one flesh" — this is God's original design for the family. WSC Q10: "How did God create man?" A: "God created man male and female, after his own image, in knowledge, righteousness, and holiness, with dominion over the creatures."`,
  },
  {
    title_zh: `二、堕落与应许（3-5章）`,
    title_en: `II. The Fall and the Promise (Ch. 3–5)`,
    content_zh: `第三章是人类历史的转折。蛇引诱夏娃怀疑神的话："神岂是真说？"夏娃先吃了禁果，又给丈夫吃。他们的眼睛就明亮了——不是得到智慧，而是认识了羞耻。神来寻找他们："你在哪里？"这不是神不知道，而是恩典的呼唤。

审判之中藏着福音：神对蛇说"女人的后裔要伤你的头"（3:15），这是圣经中第一个弥赛亚预言（原始福音，Protoevangelium）。神又用皮子给亚当夏娃作衣服——第一次流血的献祭，预表基督的代赎。

第四章记载该隐杀亚伯——罪从悖逆发展为凶杀。第五章的家谱中反复出现"就死了"，提醒我们罪的工价乃是死。唯独以诺"与神同行，神将他取去"，成为黑暗世代中信心的亮光。`,
    content_en: `Chapter 3 is the turning point of human history. The serpent tempted Eve to doubt God's word: "Yea, hath God said?" Eve ate the forbidden fruit and gave to her husband. Their eyes were opened — not to gain wisdom, but to know shame. God came seeking them: "Where art thou?" This was not ignorance but a call of grace.

Within judgment lies the gospel: God told the serpent, "her seed shall bruise thy head" (3:15) — the first messianic prophecy in Scripture (the Protoevangelium). God also made coats of skins for Adam and Eve — the first blood sacrifice, foreshadowing Christ's substitutionary atonement.

Chapter 4 records Cain killing Abel — sin escalates from disobedience to murder. Chapter 5's genealogy repeats "and he died," reminding us that the wages of sin is death. Only Enoch "walked with God: and he was not; for God took him," a light of faith in a dark generation.`,
  },
  {
    title_zh: `三、洪水与挪亚之约（6-11章）`,
    title_en: `III. The Flood and Noah's Covenant (Ch. 6–11)`,
    content_zh: `罪在地上蔓延，"耶和华见人在地上罪恶很大，终日所思想的尽都是恶"（6:5）。神决定用洪水审判全地，却"恩待"挪亚。挪亚遵照神的吩咐建造方舟，一家八口得救——方舟预表基督：只有进入基督里面，才能逃脱神的审判。

洪水之后，神与挪亚立约，以彩虹为记号，应许不再用洪水毁灭全地。第九章也设立了人类政府的权柄："凡流人血的，他的血也必被人所流。"

但人心未变。第十一章巴别塔事件中，人类企图"传扬我们的名"，与神"荣耀神的名"的旨意完全对立。神变乱他们的口音，分散全地。万族分散的结局，恰恰为下一章神拣选亚伯拉罕"使万族得福"铺平了道路。`,
    content_en: `Sin spread across the earth: "God saw that the wickedness of man was great in the earth, and that every imagination of the thoughts of his heart was only evil continually" (6:5). God determined to judge the earth by flood, yet "Noah found grace in the eyes of the LORD." Noah obeyed God's command to build the ark, and his family of eight was saved — the ark foreshadows Christ: only by being in Christ can one escape God's judgment.

After the flood, God established a covenant with Noah, setting the rainbow as its sign, promising never again to destroy the earth by flood. Chapter 9 also established governmental authority: "Whoso sheddeth man's blood, by man shall his blood be shed."

Yet the human heart remained unchanged. In the Tower of Babel incident (ch. 11), humanity sought to "make us a name" — directly opposing God's purpose to glorify His own name. God confused their language and scattered them abroad. This scattering of the nations precisely prepares the way for God's election of Abraham in the next chapter — to bless all nations.`,
  },
  {
    title_zh: `四、亚伯拉罕——信心之父（12-25章上）`,
    title_en: `IV. Abraham — Father of Faith (Ch. 12–25a)`,
    content_zh: `第十二章是创世记乃至整本圣经的关键转折。神呼召亚伯兰（后改名亚伯拉罕）离开本地、本族、父家，往神所指示的地去，并给他三重应许：大国、大名、万族因你得福。这就是亚伯拉罕之约，是恩典之约在旧约中的核心展开。

亚伯拉罕的一生是信心的旅程，也充满软弱：他曾两次谎称妻子是妹妹（12章、20章），自作主张娶夏甲（16章），但神始终信实。第十五章是神学的高峰——"亚伯兰信耶和华，耶和华就以此为他的义"（15:6），这是因信称义的旧约根基，保罗在罗马书和加拉太书中反复引用。

第二十二章记载亚伯拉罕献以撒，是全书最震撼的叙事。亚伯拉罕对以撒说"神必自己预备作燔祭的羊羔"——这预言在两千年后的各各他成就了。摩利亚山上的以撒背柴上山，预表基督背十字架走向髑髅地。`,
    content_en: `Chapter 12 is the pivotal turning point of Genesis and indeed all of Scripture. God called Abram (later renamed Abraham) to leave his country, kindred, and father's house for a land God would show him, giving him a threefold promise: a great nation, a great name, and through him all families of the earth would be blessed. This is the Abrahamic covenant — the core unfolding of the covenant of grace in the Old Testament.

Abraham's life was a journey of faith mixed with weakness: he twice lied about his wife being his sister (ch. 12, 20), took Hagar by his own plan (ch. 16), yet God remained faithful. Chapter 15 is a theological summit — "And he believed in the LORD; and he counted it to him for righteousness" (15:6), the Old Testament foundation of justification by faith, repeatedly cited by Paul in Romans and Galatians.

Chapter 22 records Abraham offering Isaac — the most staggering narrative in the book. Abraham told Isaac, "God will provide himself a lamb for a burnt offering" — a prophecy fulfilled two thousand years later at Calvary. Isaac carrying wood up Mount Moriah foreshadows Christ bearing the cross to Golgotha.`,
  },
  {
    title_zh: `五、以撒与雅各——约的传承（25-36章）`,
    title_en: `V. Isaac and Jacob — Covenant Succession (Ch. 25–36)`,
    content_zh: `以撒是过渡人物，但他的故事彰显了约的延续性。神对以撒说"我必坚定我向你父亚伯拉罕所起的誓"（26:3）。以撒重蹈父亲的覆辙，谎称妻子是妹妹——原罪的代际传递令人警醒。

雅各的故事更加跌宕。他用红豆汤买了以扫的长子名分，又以欺骗获得父亲的祝福。在逃往哈兰途中，伯特利的梦中天梯向他显现——那天梯预表基督，是天地之间唯一的中保（约1:51）。在拉班家二十年，雅各经历欺骗与被骗、劳苦与恩典。

第三十二章是雅各生命的转折：雅博渡口与神摔跤，"你的名不要再叫雅各，要叫以色列"。大腿窝被扭伤的雅各从此一瘸一拐行走——这是蒙恩之人的记号：靠自己的力量被打碎，才学会倚靠神。第三十五章雅各回到伯特利，除去外邦偶像，回归纯正的敬拜。`,
    content_en: `Isaac is a transitional figure, yet his story demonstrates covenant continuity. God told Isaac, "I will establish the oath which I sware unto Abraham thy father" (26:3). Isaac repeated his father's sin, lying about his wife being his sister — the intergenerational transmission of original sin is sobering.

Jacob's story is far more dramatic. He bought Esau's birthright for a mess of pottage, then deceitfully obtained his father's blessing. Fleeing to Haran, the ladder in his dream at Bethel appeared to him — that ladder foreshadows Christ, the sole mediator between heaven and earth (John 1:51). Through twenty years with Laban, Jacob experienced deceiving and being deceived, toil and grace.

Chapter 32 is the turning point of Jacob's life: wrestling with God at the ford of Jabbok. "Thy name shall be called no more Jacob, but Israel." Jacob's hip was put out of joint, and he walked with a limp ever after — the mark of a redeemed man: broken in self-reliance, learning to depend on God. In chapter 35, Jacob returned to Bethel, put away foreign idols, and returned to pure worship.`,
  },
  {
    title_zh: `六、约瑟——苦难中的救赎（37-50章）`,
    title_en: `VI. Joseph — Redemption Through Suffering (Ch. 37–50)`,
    content_zh: `约瑟的故事是创世记最长的连续叙事，占了近三分之一的篇幅。被兄弟出卖、被波提乏之妻诬陷、被下到监狱——约瑟的苦难一层深过一层。但"耶和华与约瑟同在"是反复出现的主题。

从监狱到宰相，约瑟的一生是"神的意思原是好的"（50:20）的最佳诠释。他预表基督多个层面：被自己人弃绝、受苦而被高升、在外邦人中掌权、成为拯救全家的粮食供应者。

第四十五章约瑟与弟兄相认，是旧约最感人的场面之一。约瑟说"不是你们把我送到这里来的，乃是神"——这是神护理之工的神学宣告。第五十章的结语"你们的意思是要害我，但神的意思原是好的"（50:20），总结了创世记的核心信息：人类的罪恶无法拦阻神救赎的计划。

创世记以约瑟的棺材停在埃及作为结尾，遥望出埃及的应许——救赎的故事远未结束。`,
    content_en: `Joseph's story is the longest continuous narrative in Genesis, occupying nearly one-third of the book. Sold by his brothers, falsely accused by Potiphar's wife, cast into prison — Joseph's suffering deepened layer upon layer. Yet "the LORD was with Joseph" is a recurring theme.

From prison to prime minister, Joseph's life is the supreme illustration of "God meant it unto good" (50:20). He foreshadows Christ on multiple levels: rejected by his own people, exalted through suffering, ruling among the Gentiles, becoming the provider of bread who saves his entire family.

Chapter 45, where Joseph revealed himself to his brothers, is one of the most moving scenes in the Old Testament. Joseph said, "It was not you that sent me hither, but God" — a theological declaration of divine providence. The closing statement of chapter 50, "ye thought evil against me; but God meant it unto good" (50:20), summarizes the core message of Genesis: human sin cannot thwart God's plan of redemption.

Genesis ends with Joseph's coffin resting in Egypt, looking toward the promise of the Exodus — the story of redemption is far from over.`,
  },
];

const overview = {
  zh: `创世记是圣经的第一卷书，记载了从创造天地到约瑟在埃及去世的历史。全书50章涵盖了人类最根本的问题：万物从何而来？人为何存在？罪恶如何进入世界？神如何展开他的救赎计划？摩西在西奈旷野写下此书，为刚出埃及的以色列人建立信仰根基——认识独一的创造主，明白他拣选亚伯拉罕后裔的恩典之约。`,
  en: `Genesis is the first book of the Bible, recording history from the creation of heaven and earth to the death of Joseph in Egypt. Its 50 chapters address humanity's most fundamental questions: Where did all things come from? Why do humans exist? How did sin enter the world? How did God unfold His plan of redemption? Moses wrote this book in the Sinai wilderness to establish a foundation of faith for the Israelites who had just left Egypt — to know the one Creator and to understand His covenant of grace with Abraham's descendants.`,
};



const outline = [
  ["1-2章", `创造与伊甸`, "Ch. 1–2", `Creation and Eden`],
  ["3章", `堕落`, "Ch. 3", `The Fall`],
  ["4-5章", `该隐与塞特的后裔`, "Ch. 4–5", `Cain and Seth's Lines`],
  ["6-9章", `洪水与挪亚之约`, "Ch. 6–9", `The Flood and Noah's Covenant`],
  ["10-11章", `万国表与巴别塔`, "Ch. 10–11", `Table of Nations and Babel`],
  ["12-20章", `亚伯拉罕的蒙召与信心`, "Ch. 12–20", `Abraham's Call and Faith`],
  ["21-25章", `以撒的出生与亚伯拉罕之死`, "Ch. 21–25", `Isaac's Birth and Abraham's Death`],
  ["25-36章", `雅各的故事`, "Ch. 25–36", `The Story of Jacob`],
  ["37-50章", `约瑟的故事`, "Ch. 37–50", `The Story of Joseph`],
];

const keyVerse = {
  zh: `"起初，神创造天地。"（创世记 1:1）`,
  en: `"In the beginning God created the heaven and the earth." (Genesis 1:1, KJV)`,
};

const info = { nameZh: `创世记`, nameEn: `Genesis`, author: `摩西`, date: `约公元前1446-1406年`, chapters: `50章`, backHref: `/old-testament/pentateuch`, backLabel: `摩西五经`, bibleId: `GEN` };

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
