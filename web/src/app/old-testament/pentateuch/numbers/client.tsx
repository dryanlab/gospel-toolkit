'use client';
import Link from 'next/link';
import SpeakButton from '@/components/SpeakButton';
import { useState } from 'react';

const sections = [
  {
    title_zh: `一、第一次数点与出发预备（1-10章上）`,
    title_en: `I. The First Census and Preparation to March (Ch. 1–10a)`,
    content_zh: `民数记得名于两次人口普查（第1章和第26章），但全书的主题远不止数字。开篇的数点是军事普查——以色列不是一群逃难的乌合之众，而是耶和华的军队，有组织、有秩序地行进。十二支派各有旗号，利未人被分别出来专门服事会幕。

营地的布置本身就是神学的宣言：会幕居中，十二支派四面环绕。神住在百姓中间，百姓的生活以神为中心——这是约的具象化表达。利未人三大家族（革顺、哥辖、米拉利）各负责会幕不同部件的搬运，秩序井然。

第六章的拿细耳人之愿值得注意：这是普通以色列人自愿过分别为圣生活的途径，包括不喝酒、不剃头、不近死尸。亚伦的祝福词（6:24-26"愿耶和华赐福给你，保护你；愿耶和华使他的脸光照你，赐恩给你；愿耶和华向你仰脸，赐你平安"）至今仍是教会崇拜中最常用的祝福。`,
    content_en: `Numbers takes its name from two censuses (ch. 1 and 26), but the book's theme goes far beyond counting. The opening census was military — Israel was not a disorganized band of refugees but the army of the LORD, marching in order and structure. Twelve tribes each had their standard; the Levites were set apart specifically for tabernacle service.

The camp arrangement itself was a theological declaration: the tabernacle at the center, twelve tribes encamped around it on four sides. God dwelling in the midst of His people, their lives centered on Him — a tangible expression of the covenant. The three Levitical clans (Gershon, Kohath, Merari) each bore responsibility for different parts of the tabernacle, in perfect order.

Chapter 6's Nazirite vow deserves attention: it provided a path for ordinary Israelites to voluntarily live a consecrated life, including abstaining from wine, not cutting hair, and avoiding contact with the dead. The Aaronic blessing (6:24–26, "The LORD bless thee, and keep thee: The LORD make his face shine upon thee, and be gracious unto thee: The LORD lift up his countenance upon thee, and give thee peace") remains the most commonly used benediction in church worship to this day.`,
  },
  {
    title_zh: `二、从西奈到加低斯——悖逆与审判（10下-14章）`,
    title_en: `II. From Sinai to Kadesh — Rebellion and Judgment (Ch. 10b–14)`,
    content_zh: `银号一响，以色列起行离开西奈——然而悖逆几乎立即开始。百姓发怨言（11章"我们记得在埃及不花钱就吃鱼"）、米利暗和亚伦说摩西的毁谤话（12章）、十二探子窥探迦南（13-14章）——每一次危机都暴露了同一个问题：不信。

加低斯巴尼亚的十二探子事件是全书的转折点。十二人中只有约书亚和迦勒带回好消息："有耶和华与我们同在，不要怕他们！"（14:9）其余十人散布恶信，百姓哀号哭泣，甚至要拿石头打死摩西和迦勒。这不是小事——这是对神应许的根本否定。

神的审判严厉而公义：凡二十岁以上发怨言的人，必不能进入应许之地。他们要在旷野漂流四十年，一年顶一日，直到那一代人全部死去。只有约书亚和迦勒因"另有一个心志，专一跟从耶和华"（14:24）得以进入。希伯来书3-4章以此为鉴戒："你们今日若听他的话，就不可硬着心。"`,
    content_en: `The silver trumpets sounded and Israel departed from Sinai — yet rebellion began almost immediately. The people complained (ch. 11, "We remember the fish, which we did eat in Egypt freely"), Miriam and Aaron spoke against Moses (ch. 12), twelve spies scouted Canaan (ch. 13–14) — each crisis exposed the same root problem: unbelief.

The twelve spies incident at Kadesh-barnea is the book's turning point. Of twelve, only Joshua and Caleb brought a good report: "The LORD is with us: fear them not!" (14:9). The other ten spread an evil report; the people wept and wailed, even threatening to stone Moses and Caleb. This was no small matter — it was a fundamental denial of God's promise.

God's judgment was severe yet just: all who were twenty years and older who complained would not enter the Promised Land. They would wander in the wilderness for forty years, a year for each day, until that entire generation perished. Only Joshua and Caleb, because they "had another spirit" and "wholly followed the LORD" (14:24), would enter. Hebrews 3–4 draws this very lesson: "To day if ye will hear his voice, harden not your hearts."`,
  },
  {
    title_zh: `三、旷野漂流与可拉叛乱（15-19章）`,
    title_en: `III. Wilderness Wandering and Korah's Rebellion (Ch. 15–19)`,
    content_zh: `三十八年的旷野漂流被圣经几乎一笔略过——这段沉默本身就是审判的写照。在这期间记载的事件都指向同一主题：人的悖逆与神的圣洁。

可拉叛乱（16章）是最严重的内部危机。可拉联合大坍、亚比兰和二百五十个首领挑战摩西和亚伦的权柄："全会众个个既是圣洁的，耶和华也在他们中间，你们为什么自高，超过耶和华的会众呢？"表面是民主诉求，实质是否定神所设立的秩序。地开了口吞下可拉一党，火从耶和华面前出来烧灭了那二百五十人——这是对擅自僭越圣职的严厉审判。

第十七章亚伦发芽的杖印证了神拣选利未支派的旨意。第十九章红母牛的灰用来洁净接触死人的污秽，这一独特的洁净仪式被希伯来书9:13引用，指向基督的血能洁净我们的良心。`,
    content_en: `The thirty-eight years of wilderness wandering are nearly passed over in silence by Scripture — the silence itself portraying judgment. The events recorded during this period all point to one theme: human rebellion and divine holiness.

Korah's rebellion (ch. 16) was the most severe internal crisis. Korah, with Dathan, Abiram, and 250 leaders, challenged Moses and Aaron's authority: "Ye take too much upon you, seeing all the congregation are holy, every one of them, and the LORD is among them: wherefore then lift ye up yourselves above the congregation of the LORD?" Outwardly a democratic appeal, in substance a denial of God's established order. The earth opened and swallowed Korah's company; fire from the LORD consumed the 250 — a severe judgment upon those who presumptuously usurped the priestly office.

Chapter 17's budding of Aaron's rod confirmed God's choice of the tribe of Levi. Chapter 19's ashes of the red heifer for purifying those defiled by contact with the dead — this unique purification rite is cited in Hebrews 9:13, pointing to Christ's blood which cleanses our conscience.`,
  },
  {
    title_zh: `四、新一代的旅程与巴兰的预言（20-25章）`,
    title_en: `IV. The New Generation's Journey and Balaam's Prophecy (Ch. 20–25)`,
    content_zh: `第二十章标志着新一代的开始，但也记载了摩西的失败。在米利巴，百姓再次因没有水而发怨言，神吩咐摩西"吩咐"磐石出水，摩西却愤怒地用杖"击打"了磐石两下。因为这一次不信，摩西被禁止进入应许之地。这个审判看似严厉，但它教导一个深刻的功课：越是蒙神重用的仆人，越要谨慎遵行神的话。

巴兰的故事（22-24章）充满讽刺与深意。摩押王巴勒请巴兰来咒诅以色列，但巴兰每次开口都变成了祝福。最著名的预言在24:17："我看他却不在现时；我望他却不在近日。有星要出于雅各，有杖要兴于以色列"——这是弥赛亚预言，指向基督是"明亮的晨星"（启22:16）。

然而巴兰虽然说了正确的预言，他的心却不正——他后来教巴勒用摩押女子引诱以色列人犯淫乱和拜偶像（25章、31:16）。巴兰成了圣经中"知道却不行"的典型，彼得后书和犹大书都警戒"巴兰的道路"。`,
    content_en: `Chapter 20 marks the beginning of the new generation but also records Moses' failure. At Meribah, the people again complained about lack of water; God told Moses to "speak" to the rock, but Moses in anger "smote" the rock twice with his rod. Because of this act of unbelief, Moses was forbidden from entering the Promised Land. The judgment seems severe, but it teaches a profound lesson: the greater God's servant, the more carefully he must obey God's word.

The story of Balaam (ch. 22–24) is rich with irony and depth. Balak king of Moab hired Balaam to curse Israel, but every time Balaam opened his mouth, blessings came forth. The most famous prophecy is 24:17: "I shall see him, but not now: I shall behold him, but not nigh: there shall come a Star out of Jacob, and a Sceptre shall rise out of Israel" — a messianic prophecy pointing to Christ as "the bright and morning star" (Rev 22:16).

Yet though Balaam spoke true prophecy, his heart was corrupt — he later taught Balak to use Moabite women to seduce Israel into fornication and idolatry (ch. 25; 31:16). Balaam became Scripture's classic example of one who "knows yet does not do," and both 2 Peter and Jude warn against "the way of Balaam."`,
  },
  {
    title_zh: `五、第二次数点与进入应许之地的预备（26-36章）`,
    title_en: `V. The Second Census and Preparation to Enter the Land (Ch. 26–36)`,
    content_zh: `第二次数点（26章）统计的是新一代——旧一代已在旷野全部倒毙。总数与四十年前几乎相同（约六十万），说明神虽然审判了悖逆的一代，但祂的应许和计划从未改变。以色列的人数没有减少，神的信实在审判中得以彰显。

摩西的继承问题（27章）引出约书亚被按手设立为新领袖，这是权柄传承的旧约范例。西罗非哈女儿的继承权案（27、36章）表明神律法中对弱势群体的保护。

最后几章涵盖节期献祭条例（28-29章）、许愿条例（30章）、对米甸的圣战（31章）、约旦河东两个半支派的分地（32章）、旷野行程回顾（33章）、迦南地的边界（34章）、利未人的城邑与逃城（35章）。逃城制度尤其预表基督——误杀人的可以逃到逃城得庇护，正如罪人逃到基督里面得到保护。

民数记以以色列人在摩押平原安营结束，约旦河对岸就是应许之地。四十年的旷野漂流即将结束，新一代站在信心的门槛上。`,
    content_en: `The second census (ch. 26) counted the new generation — the old had all perished in the wilderness. The total was nearly identical to forty years earlier (about 600,000), demonstrating that though God judged the rebellious generation, His promise and plan never changed. Israel's numbers were not diminished; God's faithfulness was manifested even through judgment.

The question of Moses' succession (ch. 27) led to Joshua being commissioned as the new leader through the laying on of hands — an Old Testament paradigm for the transfer of authority. The inheritance case of Zelophehad's daughters (ch. 27, 36) reveals God's law protecting the vulnerable.

The final chapters cover festival offering regulations (ch. 28–29), vow laws (ch. 30), holy war against Midian (ch. 31), allotment of Transjordan land to two and a half tribes (ch. 32), a review of wilderness journeys (ch. 33), borders of Canaan (ch. 34), and Levitical cities and cities of refuge (ch. 35). The cities of refuge especially foreshadow Christ — one who killed accidentally could flee to a city of refuge for protection, just as sinners flee to Christ for shelter.

Numbers ends with Israel encamped on the plains of Moab, the Promised Land just across the Jordan. Forty years of wilderness wandering are about to end; a new generation stands on the threshold of faith.`,
  },
];

const overview = {
  zh: `民数记（希伯来文 בְּמִדְבַּר，意为"在旷野"）记载以色列人从西奈山到摩押平原约四十年的旷野历程。这不是一段光辉的历史，而是一面镜子——照出人心的顽梗不信，也照出神恩典的长阔高深。

全书36章可分为三大阶段：在西奈的最后预备（1-10章）、旷野漂流的三十八年（11-25章）、新一代在摩押平原的预备（26-36章）。民数记的核心信息是：不信必然带来审判，但神的应许不会因人的失败而落空。改革宗神学从民数记看到"约的延续性"——即使整整一代人因不信而灭亡，神仍然兴起新一代来承接应许。`,
  en: `Numbers (Hebrew בְּמִדְבַּר, meaning "in the wilderness") records Israel's roughly forty-year journey from Sinai to the plains of Moab. This is not a glorious history but a mirror — reflecting the stubbornness of the human heart and the breadth and depth of God's grace.

The book's 36 chapters divide into three major stages: final preparations at Sinai (ch. 1–10), thirty-eight years of wilderness wandering (ch. 11–25), and the new generation's preparation on the plains of Moab (ch. 26–36). The core message of Numbers is: unbelief inevitably brings judgment, but God's promises will not fail because of human failure. Reformed theology sees in Numbers the "continuity of the covenant" — even when an entire generation perishes through unbelief, God raises up a new generation to inherit the promise.`,
};

const outline = [
  ["1-4章", "第一次数点与利未人职责", "Ch. 1–4", "First Census and Levitical Duties"],
  ["5-6章", "营地洁净与拿细耳人", "Ch. 5–6", "Camp Purity and Nazirite Vow"],
  ["7-9章", "首领献礼与逾越节", "Ch. 7–9", "Leaders' Offerings and Passover"],
  ["10章", "从西奈起行", "Ch. 10", "Departure from Sinai"],
  ["11-12章", "百姓怨言与米利暗事件", "Ch. 11–12", "People's Complaints; Miriam's Leprosy"],
  ["13-14章", "十二探子与加低斯审判", "Ch. 13–14", "Twelve Spies and Kadesh Judgment"],
  ["15章", "补充条例", "Ch. 15", "Supplementary Laws"],
  ["16-17章", "可拉叛乱与亚伦的杖", "Ch. 16–17", "Korah's Rebellion; Aaron's Rod"],
  ["18-19章", "祭司条例与红母牛", "Ch. 18–19", "Priestly Laws and Red Heifer"],
  ["20章", "米利巴水与摩西受罚", "Ch. 20", "Meribah; Moses' Punishment"],
  ["21章", "铜蛇与行军胜利", "Ch. 21", "Bronze Serpent and Victories"],
  ["22-24章", "巴兰的预言", "Ch. 22–24", "Balaam's Prophecies"],
  ["25章", "什亭的罪与非尼哈", "Ch. 25", "Shittim's Sin; Phinehas"],
  ["26-27章", "第二次数点与约书亚", "Ch. 26–27", "Second Census; Joshua Commissioned"],
  ["28-30章", "节期与许愿条例", "Ch. 28–30", "Festivals and Vow Laws"],
  ["31-32章", "米甸之战与河东分地", "Ch. 31–32", "War on Midian; Transjordan Allotment"],
  ["33-34章", "旷野行程回顾与迦南边界", "Ch. 33–34", "Wilderness Itinerary; Canaan Borders"],
  ["35-36章", "逃城与产业条例", "Ch. 35–36", "Cities of Refuge; Inheritance Laws"],
];

const keyVerse = {
  zh: `"耶和华不轻易发怒，并有丰盛的慈爱，赦免罪孽和过犯。"（民数记 14:18）`,
  en: `"The LORD is longsuffering, and of great mercy, forgiving iniquity and transgression." (Numbers 14:18)`,
};

const info = {
  nameZh: `民数记`, nameEn: `Numbers`, author: `摩西 (Moses)`,
  date: `约公元前1406年`, chapters: `36章`,
  backHref: `/old-testament/pentateuch`, backLabel: `摩西五经`, bibleId: `NUM`,
};

export default function BookGuide() {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link href={info.backHref} className="inline-flex items-center gap-1 text-sm text-[var(--color-accent)] hover:underline mb-6">← {info.backLabel}</Link>
      <div className="text-center mb-10">
        <span className="text-5xl mb-4 block">📖</span>
        <h1 className="font-serif-cn text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-2">{info.nameZh}导读</h1>
        <p className="text-base text-[var(--color-text-secondary)] italic mb-4">A Guide to the Book of {info.nameEn}</p>
        <div className="flex justify-center gap-4 text-xs text-[var(--color-text-secondary)]"><span>✍️ 作者：{info.author}</span><span>📅 {info.date}</span><span>📄 {info.chapters}</span></div>
      </div>
      <div className="mb-10 p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)]"><h2 className="font-serif-cn text-lg font-bold text-[var(--color-text)] mb-3">📋 全书概览</h2><div className="flex items-start gap-2 mb-3"><SpeakButton text={overview.zh} lang="zh" /><p className="text-sm text-[var(--color-text)] leading-relaxed font-serif-cn">{overview.zh}</p></div><div className="flex items-start gap-2"><SpeakButton text={overview.en} lang="en" /><p className="text-xs text-[var(--color-text-secondary)] italic leading-relaxed">{overview.en}</p></div></div>
      <div className="mb-10 p-5 rounded-xl bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border border-amber-200 dark:border-amber-800"><p className="text-sm font-bold text-amber-800 dark:text-amber-300 mb-1">🔑 金句 Key Verse</p><p className="font-serif-cn text-base text-[var(--color-text)] font-bold leading-relaxed">{keyVerse.zh}</p><p className="text-sm text-[var(--color-text-secondary)] italic mt-1">{keyVerse.en}</p></div>
      <div className="mb-6"><h2 className="font-serif-cn text-xl font-bold text-[var(--color-text)] mb-1">📚 分段导读</h2><p className="text-xs text-[var(--color-text-secondary)] italic mb-4">Section-by-Section Guide</p></div>
      <div className="space-y-4">
        {sections.map((sec, i) => (
          <div key={i} className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] overflow-hidden">
            <button onClick={() => setExpandedIdx(expandedIdx === i ? null : i)} className="w-full flex items-center justify-between px-6 py-4 text-left cursor-pointer hover:bg-[var(--color-accent)]/5 transition-colors">
              <div><h3 className="font-serif-cn text-base font-bold text-[var(--color-text)]">{sec.title_zh}</h3><p className="text-xs text-[var(--color-text-secondary)] italic">{sec.title_en}</p></div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-5 h-5 text-[var(--color-text-secondary)] transition-transform ${expandedIdx === i ? 'rotate-180' : ''}`}><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" /></svg>
            </button>
            {expandedIdx === i && (<div className="px-6 pb-5 border-t border-[var(--color-border)]"><div className="flex items-start gap-2 mt-4 mb-4"><SpeakButton text={sec.content_zh} lang="zh" /><p className="text-sm text-[var(--color-text)] leading-relaxed font-serif-cn whitespace-pre-line">{sec.content_zh}</p></div><div className="flex items-start gap-2"><SpeakButton text={sec.content_en} lang="en" /><p className="text-xs text-[var(--color-text-secondary)] italic leading-relaxed whitespace-pre-line">{sec.content_en}</p></div></div>)}
          </div>
        ))}
      </div>
      <div className="mt-10 p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)]">
        <h2 className="font-serif-cn text-lg font-bold text-[var(--color-text)] mb-4">🗂️ 章节大纲</h2>
        {(() => { const half = Math.ceil(outline.length / 2); const col1 = outline.slice(0, half); const col2 = outline.slice(half);
          const renderItem = ([zh, desc, chEn, descEn]: string[], i: number) => (<div key={i} className="py-1.5 border-b border-[var(--color-border)]/30 last:border-b-0"><div className="flex items-baseline gap-2"><span className="font-bold text-[var(--color-accent)] min-w-[65px] shrink-0">{zh}</span><span className="text-[var(--color-text)]">{desc}</span></div><div className="flex items-baseline gap-2 mt-0.5"><span className="text-[var(--color-text-secondary)] text-xs italic min-w-[65px] shrink-0">{chEn}</span><span className="text-[var(--color-text-secondary)] text-xs italic">{descEn}</span></div></div>);
          return (<div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 text-sm"><div>{col1.map((item, i) => renderItem(item, i))}</div><div>{col2.map((item, i) => renderItem(item, i + half))}</div></div>);
        })()}
      </div>
      <div className="mt-8 text-center"><Link href={`/bible/${info.bibleId}`} className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--color-accent)] text-white font-bold hover:opacity-90 transition-opacity">📖 阅读{info.nameZh} Read {info.nameEn}</Link></div>
    </div>
  );
}