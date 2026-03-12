'use client';
import Link from 'next/link';
import SpeakButton from '@/components/SpeakButton';
import { useState } from 'react';

const sections = [
  {
    title_zh: `一、智慧的呼唤——敬畏耶和华是知识的开端（1-9章）`,
    title_en: `I. Wisdom's Call — The Fear of the LORD Is the Beginning of Knowledge (Ch. 1–9)`,
    content_zh: `箴言前九章是一位父亲对儿子的教导，也是智慧本身向世人的呼唤。全书的钥匙在1:7——"敬畏耶和华是知识的开端；愚妄人藐视智慧和训诲。"这不是说信神之后才能学知识，而是说：离开了对神的敬畏，一切知识都没有正确的根基。

智慧在第八章被拟人化为一位在街头呼喊的女子。她宣告自己在创世之前就已存在："在耶和华造化的起头，在太初创造万物之先，就有了我"（8:22）。早期教父们常将这段经文与约翰福音1章的"道"（Logos）联系起来——基督就是神的智慧（林前1:24）。

与智慧女子对比的是愚昧的妇人和淫妇（2、5、7章）。箴言用两条路的意象贯穿始终：智慧之路通向生命，愚昧之路通向死亡。第七章对淫妇引诱的描写极其生动——"他却不知道有死亡的阴影在那里"（7:27概意）。箴言的警告不是禁欲主义，而是对罪的真实后果的清醒认识。`,
    content_en: `The first nine chapters are a father's instruction to his son and Wisdom's own call to humanity. The key to the entire book is 1:7 — "The fear of the LORD is the beginning of knowledge: but fools despise wisdom and instruction." This does not mean one must believe in God before learning; rather, apart from reverence for God, all knowledge lacks its proper foundation.

In chapter 8, Wisdom is personified as a woman crying out in the streets. She declares her existence before creation: "The LORD possessed me in the beginning of his way, before his works of old" (8:22). Early church fathers often connected this passage with the "Word" (Logos) of John 1 — Christ is the wisdom of God (1 Cor 1:24).

Contrasting Lady Wisdom is the foolish woman and the adulteress (ch. 2, 5, 7). Proverbs uses the image of two paths throughout: the way of wisdom leads to life, the way of folly to death. Chapter 7's portrayal of the adulteress's seduction is vivid — the young man "knew not that it was for his life" (7:23, cf. 7:27). Proverbs' warnings are not asceticism but sober recognition of sin's real consequences.`,
  },
  {
    title_zh: `二、所罗门的箴言——对比的智慧（10:1-22:16）`,
    title_en: `II. Solomon's Proverbs — Antithetical Wisdom (10:1–22:16)`,
    content_zh: `从10:1开始，箴言进入最核心的部分——"所罗门的箴言"。这375条格言大多采用对比式平行体：上半句说义人/智慧人如何，下半句说恶人/愚妄人如何。

关于言语："回答柔和，使怒消退；言语暴戾，触动怒气"（15:1）。"生死在舌头的权下，喜爱它的，必吃它所结的果子"（18:21）。箴言对言语的教导在社交媒体时代尤为宝贵——一条推文可以造就人，也可以毁掉人。

关于勤劳与懒惰："手懒的，要受贫穷；手勤的，却要富足"（10:4）。"懒惰人哪，你要睡到几时呢？你何时睡醒呢？"（6:9）。箴言不是成功学，而是对神所设立的因果秩序的观察——勤劳通常带来丰盛，懒惰通常带来贫穷，但这不是绝对的保证，而是一般性的智慧原则。

关于谦卑："骄傲来，羞耻也来；谦逊人却有智慧"（11:2）。"败坏之先，人心骄傲；尊荣以前，必有谦卑"（18:12）。关于交友："滥交朋友的，自取败坏；但有一朋友比弟兄更亲密"（18:24）。

最深的智慧是认识到人的有限："人心筹算自己的道路，惟耶和华指引他的脚步"（16:9）。"人所行的，在自己眼中都看为正；惟有耶和华衡量人心"（21:2）。智慧不仅是聪明处世，更是在每一个选择中承认神的主权。`,
    content_en: `Beginning at 10:1, Proverbs enters its most essential section — "The proverbs of Solomon." These 375 maxims mostly employ antithetical parallelism: the first line describes the righteous/wise, the second the wicked/foolish.

On speech: "A soft answer turneth away wrath: but grievous words stir up anger" (15:1). "Death and life are in the power of the tongue: and they that love it shall eat the fruit thereof" (18:21). Proverbs' teaching on speech is especially precious in the social media age — one tweet can build up or destroy.

On diligence and laziness: "He becometh poor that dealeth with a slack hand: but the hand of the diligent maketh rich" (10:4). "How long wilt thou sleep, O sluggard? when wilt thou arise out of thy sleep?" (6:9). Proverbs is not a success manual but an observation of God's established order — diligence generally brings abundance and laziness poverty, not as absolute guarantees but as general wisdom principles.

On humility: "When pride cometh, then cometh shame: but with the lowly is wisdom" (11:2). "Before destruction the heart of man is haughty, and before honour is humility" (18:12). On friendship: "A man that hath friends must shew himself friendly: and there is a friend that sticketh closer than a brother" (18:24).

The deepest wisdom is recognizing human limitation: "A man's heart deviseth his way: but the LORD directeth his steps" (16:9). "Every way of a man is right in his own eyes: but the LORD pondereth the hearts" (21:2). Wisdom is not merely shrewd living but acknowledging God's sovereignty in every choice.`,
  },
  {
    title_zh: `三、智慧人的言语与希西家的收集（22:17-29章）`,
    title_en: `III. Words of the Wise and Hezekiah's Collection (22:17–Ch. 29)`,
    content_zh: `从22:17开始，箴言进入"智慧人的言语"部分（22:17-24:34），风格从简短的对比句变为较长的教训段落。"你不要挪移古时的地界，也不要侵入孤儿的田地"（23:10）——保护弱者的产业是敬畏神的具体表现。

这部分特别警告贪食醉酒："好饮酒的，好吃肉的，不要与他们来往"（23:20）。"谁有祸患？谁有忧愁？……就是那流连饮酒的人"（23:29-30）。"酒发红，在杯中闪烁……终久是咬你如蛇，刺你如毒蛇"（23:31-32）——对酒精危害的描写在三千年前就如此精准。

关于管教："不忍用杖打儿子的，是恨恶他；疼爱儿子的，随时管教"（13:24）。"教养孩童，使他走当行的道，就是到老他也不偏离"（22:6）。管教不是虐待，而是爱的表达——正如天父管教祂的儿女。

25-29章标注为"希西家的人所誊录的所罗门的箴言"——从所罗门到希西家约两百五十年。这说明智慧文学经过了漫长的传承和编辑，不是一蹴而就的，而是几代人在敬畏神中积累的结晶。这部分包含更多比较句和生动的比喻："冷水浇在困乏人身上，好消息从远方来也是这样"（25:25）。"铁磨铁，磨出刃来；朋友相感也是如此"（27:17）。`,
    content_en: `From 22:17, Proverbs enters the "Words of the Wise" section (22:17-24:34), shifting from brief antithetical couplets to longer instructional paragraphs. "Remove not the old landmark; and enter not into the fields of the fatherless" (23:10) — protecting the vulnerable's inheritance is a concrete expression of fearing God.

This section especially warns against gluttony and drunkenness: "Be not among winebibbers; among riotous eaters of flesh" (23:20). "Who hath woe? who hath sorrow?... They that tarry long at the wine" (23:29-30). "Look not thou upon the wine when it is red, when it giveth his colour in the cup... At the last it biteth like a serpent, and stingeth like an adder" (23:31-32) — a description of alcohol's harm remarkably precise for three thousand years ago.

On discipline: "He that spareth his rod hateth his son: but he that loveth him chasteneth him betimes" (13:24). "Train up a child in the way he should go: and when he is old, he will not depart from it" (22:6). Discipline is not abuse but an expression of love — just as the heavenly Father disciplines His children.

Chapters 25-29 are labeled "proverbs of Solomon, which the men of Hezekiah king of Judah copied out" — roughly 250 years from Solomon to Hezekiah. This shows wisdom literature underwent long transmission and editing, not produced overnight but crystallized across generations in the fear of God. This section features more comparative sayings and vivid metaphors: "As cold waters to a thirsty soul, so is good news from a far country" (25:25). "Iron sharpeneth iron; so a man sharpeneth the countenance of his friend" (27:17).`,
  },
  {
    title_zh: `四、亚古珥、利慕伊勒与才德的妇人（30-31章）`,
    title_en: `IV. Agur, Lemuel, and the Virtuous Woman (Ch. 30–31)`,
    content_zh: `第三十章是亚古珥的言语——一位非以色列人的智者。他的开场白充满谦卑："我比众人更蠢笨，也没有人的聪明"（30:2）。他提出了一个深刻的神学问题："谁升天又降下来？谁聚风在掌握中？谁包水在衣服里？谁立定地的四极？他名叫什么？他儿子名叫什么？你知道吗？"（30:4）——"他儿子名叫什么"在新约中得到了回答。亚古珥用数字格言（"有三样…连四样"）教导关于骄傲、贪婪和不知足的功课。

第三十一章前半段（31:1-9）是利慕伊勒王的母亲教训他的话——君王不可沉溺酒色，要为哑巴开口、为困苦人辩屈。这是王后对王子的政治伦理教育。

全书以"才德的妇人"（31:10-31）作为高潮结束。这是一首按希伯来22个字母顺序排列的离合诗，描绘了一位智慧、勤劳、慈善、敬畏神的女性形象。"才德的妇人谁能得着呢？她的价值远胜过珍珠"（31:10）。她不仅是理想的妻子，更是全书"智慧女子"形象的具体化——从第1章智慧在街头呼喊，到第31章智慧在家庭中活出来。

全书最后一句回到核心主题："艳丽是虚假的，美容是虚浮的，惟敬畏耶和华的妇女必得称赞"（31:30）。从1:7"敬畏耶和华是知识的开端"到31:30"敬畏耶和华的妇女必得称赞"——敬畏神是箴言的起点和终点。`,
    content_en: `Chapter 30 contains the words of Agur — a non-Israelite sage. His opening is remarkably humble: "Surely I am more brutish than any man, and have not the understanding of a man" (30:2). He poses a profound theological question: "Who hath ascended up into heaven, or descended? who hath gathered the wind in his fists? who hath bound the waters in a garment? who hath established all the ends of the earth? what is his name, and what is his son's name, if thou canst tell?" (30:4) — "what is his son's name?" receives its answer in the New Testament. Agur uses numerical sayings ("there be three things... yea, four") to teach about pride, greed, and discontent.

The first half of chapter 31 (31:1-9) records King Lemuel's mother's instruction — a king must not indulge in wine or women but must speak for the voiceless and defend the afflicted. This is a queen's political ethics education for her prince.

The book climaxes with the "virtuous woman" (31:10-31), an acrostic poem arranged by the 22 Hebrew letters, portraying a woman of wisdom, diligence, charity, and fear of God. "Who can find a virtuous woman? for her price is far above rubies" (31:10). She is not merely the ideal wife but the concrete embodiment of the book's "Lady Wisdom" — from chapter 1 where Wisdom cries in the streets, to chapter 31 where wisdom is lived out in the home.

The book's final verse returns to its core theme: "Favour is deceitful, and beauty is vain: but a woman that feareth the LORD, she shall be praised" (31:30). From 1:7 — "The fear of the LORD is the beginning of knowledge" — to 31:30 — "a woman that feareth the LORD, she shall be praised" — the fear of God is Proverbs' starting point and destination.`,
  },
]

const overview = {
  zh: `箴言是旧约智慧文学的核心，主要由所罗门所写（另有亚古珥和利慕伊勒的言语），收集了以色列数百年的智慧结晶。全书31章不是系统神学，而是生活智慧——如何在日常生活中按照神的秩序行事为人。

箴言的核心原则是"敬畏耶和华是知识的开端"（1:7）。全书可分为三段：智慧的呼唤（1-9章）、所罗门箴言集（10-29章）、附录（30-31章）。箴言教导我们：智慧不是抽象的哲学概念，而是在每天的选择中——言语、工作、人际关系、金钱——活出对神的敬畏。`,
  en: `Proverbs is the core of Old Testament wisdom literature, primarily written by Solomon (with contributions from Agur and Lemuel), collecting centuries of Israelite wisdom. Its 31 chapters are not systematic theology but life wisdom — how to live according to God's order in daily affairs.

The core principle is "The fear of the LORD is the beginning of knowledge" (1:7). The book divides into: Wisdom's call (ch. 1–9), Solomon's proverb collections (ch. 10–29), and appendices (ch. 30–31). Proverbs teaches: wisdom is not an abstract philosophical concept but living out reverence for God in daily choices — speech, work, relationships, money.`,
};

const outline = [
  ["1-9章", "智慧的呼唤", "Ch. 1–9", "The Call of Wisdom"],
  ["10-15章", "所罗门箴言（第一集）", "Ch. 10–15", "Solomon's Proverbs I"],
  ["16-22:16", "所罗门箴言（第二集）", "Ch. 16–22:16", "Solomon's Proverbs II"],
  ["22:17-24", "智慧人的言语", "Ch. 22:17–24", "Words of the Wise"],
  ["25-29章", "希西家誊录的箴言", "Ch. 25–29", "Hezekiah's Collection"],
  ["30章", "亚古珥的言语", "Ch. 30", "Words of Agur"],
  ["31:1-9", "利慕伊勒的言语", "Ch. 31:1–9", "Words of Lemuel"],
  ["31:10-31", "才德的妇人", "Ch. 31:10–31", "The Virtuous Woman"],
]

const theology = {
  title_zh: `核心神学：敬畏耶和华是智慧的开端`,
  title_en: `Core Theology: The Fear of the LORD Is the Beginning of Wisdom`,
  content_zh: `箴言不是世俗的人生格言集，而是建立在盟约神学基础上的智慧——一切智慧的前提是"敬畏耶和华"（1:7）。

第一，"敬畏耶和华是知识的开端"（1:7）。这句话是全书的神学纲领。"敬畏"（希伯来文 יִרְאַה，yir'ah）不是恐惧，而是对神的圣洁、主权和威严的尊崇与顺服。世俗智慧追求自主和独立——"我是自己命运的主人"；但圣经智慧从承认人的有限和神的全权开始。改革宗神学强调"全然败坏"意味着人的理性也受罪的影响——离开神的启示，人的智慧终将走向愚昧。箴言14:12说"有一条路，人以为正，至终成为死亡之路"——这是对人类自主理性最尖锐的警告。

第二，智慧的位格化与基督。箴言8章将"智慧"描绘为一个位格——"在耶和华造化的起头，在太初创造万物之先，就有了我"（8:22）。教父们和改革宗神学家普遍将这段经文理解为指向基督——"基督总为神的能力，神的智慧"（林前1:24）。歌罗西书1:16-17说万有都是"靠祂造的……万有也靠祂而立"——箴言8章的智慧正是道成肉身之前的基督。

第三，日常生活的神学。箴言涵盖了言语（"多言多语难免有过"，10:19）、金钱（"不义之财毫无益处"，10:2）、婚姻（"才德的妇人谁能得着呢？她的价值远胜过珍珠"，31:10）、工作（"手懒的要受贫穷"，10:4）、交友（"与智慧人同行的必得智慧"，13:20）等一切生活领域。这教导我们：没有"世俗"与"神圣"的二元对立——信仰渗透生活的每一个角落。

第四，智慧与愚昧——两条路。箴言的整体结构是两条路的对比：智慧之路与愚昧之路、义人之路与恶人之路、生命之路与死亡之路。"你要保守你心，胜过保守一切，因为一生的果效是由心发出"（4:23）。选择哪条路，取决于心——而心的改变只有靠神的恩典。`,
  content_en: `Proverbs is not a collection of secular maxims but wisdom built on the foundation of covenant theology — the prerequisite of all wisdom is "the fear of the LORD" (1:7).

First, "The fear of the LORD is the beginning of knowledge" (1:7). This sentence is the book's theological thesis. "Fear" (Hebrew יִרְאַה, yir'ah) is not terror but reverent awe and submission before God's holiness, sovereignty, and majesty. Secular wisdom pursues autonomy and independence — "I am the master of my fate"; but biblical wisdom begins by acknowledging human limitation and God's sovereignty. Reformed theology emphasizes that "total depravity" means human reason is also affected by sin — apart from God's revelation, human wisdom ultimately leads to folly. Proverbs 14:12 says "There is a way which seemeth right unto a man, but the end thereof are the ways of death" — the sharpest warning against autonomous human reason.

Second, the personification of Wisdom and Christ. Proverbs 8 portrays "Wisdom" as a person — "The LORD possessed me in the beginning of his way, before his works of old" (8:22). The church fathers and Reformed theologians generally understood this passage as pointing to Christ — "Christ the power of God, and the wisdom of God" (1 Cor 1:24). Colossians 1:16-17 says all things were created "by him... and by him all things consist" — the Wisdom of Proverbs 8 is Christ before the incarnation.

Third, the theology of daily life. Proverbs covers speech ("In the multitude of words there wanteth not sin," 10:19), money ("Treasures of wickedness profit nothing," 10:2), marriage ("Who can find a virtuous woman? for her price is far above rubies," 31:10), work ("He becometh poor that dealeth with a slack hand," 10:4), friendship ("He that walketh with wise men shall be wise," 13:20) — every area of life. This teaches us there is no sacred-secular divide; faith permeates every corner of life.

Fourth, wisdom and folly — two paths. Proverbs' overall structure contrasts two paths: the way of wisdom and the way of folly, the path of the righteous and the path of the wicked, the road of life and the road of death. "Keep thy heart with all diligence; for out of it are the issues of life" (4:23). Which path one chooses depends on the heart — and transformation of the heart comes only by God's grace.`,
};

const keyVerse = {
  zh: `"敬畏耶和华是知识的开端；愚妄人藐视智慧和训诲。"（箴言 1:7）`,
  en: `"The fear of the LORD is the beginning of knowledge: but fools despise wisdom and instruction." (Proverbs 1:7)`,
};

const info = { nameZh: `箴言`, nameEn: `Proverbs`, author: `所罗门、亚古珥、利慕伊勒`, date: `约公元前970-700年`, chapters: `31章`, backHref: `/old-testament/poetry`, backLabel: `诗歌智慧书`, bibleId: `PRO` };


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