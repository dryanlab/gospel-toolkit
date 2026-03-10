'use client';
import Link from 'next/link';
import SpeakButton from '@/components/SpeakButton';
import { useState } from 'react';

const sections = [
  {
    title_zh: `一、五祭——亲近圣洁之神的途径（1-7章）`,
    title_en: `I. The Five Offerings — Approaching a Holy God (Ch. 1–7)`,
    content_zh: `利未记开篇就是五种祭的详细条例。燔祭（1章）是全然献上的祭，牲畜完全焚烧在坛上，预表基督完全顺服至死的奉献。素祭（2章）是献细面和油，代表日常生活中的感恩与奉献。平安祭（3章）是与神和好的宴席，献祭者可以吃祭肉，预表与神恢复团契的喜乐。

赎罪祭（4章）和赎愆祭（5-6章）专门处理罪的问题。赎罪祭的核心是"按手"与"流血"：献祭者按手在祭牲头上，象征罪的转移，然后祭牲被杀流血代替人死——这是代赎（substitutionary atonement）的旧约根基。韦敏斯德信条第八章论基督的中保之工："主耶稣……借着祂的顺服和受死，完全满足了天父的公义。"

这五种祭不是迷信的仪式，而是神设立的教育制度：每一次献祭都在提醒百姓——罪的代价是死，赦免必须通过流血。"若不流血，罪就不得赦免了"（来9:22）。这一切都指向基督一次永远的献祭。`,
    content_en: `Leviticus opens with detailed regulations for five offerings. The burnt offering (ch. 1) was wholly given — the animal completely consumed on the altar, foreshadowing Christ's total obedience unto death. The grain offering (ch. 2) of fine flour and oil represented daily gratitude and devotion. The peace offering (ch. 3) was a fellowship meal with God; the worshipper could eat the sacrificial meat, foreshadowing the joy of restored communion with God.

The sin offering (ch. 4) and guilt offering (ch. 5–6) dealt specifically with sin. The core of the sin offering was "laying on of hands" and "shedding of blood": the offerer placed his hand on the animal's head, symbolizing the transfer of sin, then the animal was slain and its blood shed in the person's place — the Old Testament foundation of substitutionary atonement. WCF Chapter 8 on Christ's work as Mediator: "The Lord Jesus... by His obedience and death, did fully satisfy the justice of His Father."

These five offerings were not superstitious rituals but a divinely instituted educational system: every sacrifice reminded the people that the penalty of sin is death and forgiveness requires the shedding of blood. "Without shedding of blood is no remission" (Heb 9:22). All these pointed to Christ's once-for-all sacrifice.`,
  },
  {
    title_zh: `二、祭司的职分（8-10章）`,
    title_en: `II. The Priestly Ministry (Ch. 8–10)`,
    content_zh: `第八至九章记载亚伦和他儿子被膏立为祭司。七天的圣别仪式、特定的祭司服饰、膏油的浇灌——每一个细节都庄严肃穆。祭司是神与人之间的中保，他们的职分预表基督的大祭司职分。

第十章记载了一个令人震惊的事件：亚伦的两个儿子拿答和亚比户"献上凡火"，就有火从耶和华面前出来烧灭他们。"凡火"就是未经授权的火——不是按照神所吩咐的方式敬拜。这一事件严厉地教导：敬拜必须按照神所启示的方式，而非出于人的创意或热情。改革宗神学称此为"敬拜的规范性原则"（Regulative Principle of Worship）。

亚伦在儿子被击杀后"就默默不言"（10:3），这不是冷漠，而是在审判面前顺服——即使心碎，仍承认神是圣洁的、公义的。`,
    content_en: `Chapters 8–9 record the ordination of Aaron and his sons as priests. Seven days of consecration, specific priestly garments, the pouring of anointing oil — every detail solemn and reverent. Priests served as mediators between God and man; their office foreshadowed Christ's role as our great High Priest.

Chapter 10 records a shocking event: Aaron's two sons Nadab and Abihu "offered strange fire before the LORD," and fire came out from the LORD and consumed them. "Strange fire" was unauthorized fire — worship not according to God's command. This event sternly teaches that worship must follow God's revealed pattern, not human creativity or enthusiasm. Reformed theology calls this the "Regulative Principle of Worship."

Aaron, after his sons were struck down, "held his peace" (10:3) — not indifference, but submission before judgment — even with a broken heart, acknowledging that God is holy and just.`,
  },
  {
    title_zh: `三、洁净条例——分别为圣的生活（11-15章）`,
    title_en: `III. Purity Laws — A Life Set Apart (Ch. 11–15)`,
    content_zh: `洁净条例涵盖饮食（11章）、产妇洁净（12章）、皮肤病（13-14章）和漏症（15章）。这些条例在今天看来似乎繁琐，但其神学意义深远。

饮食条例将动物分为洁净与不洁净，教导以色列人"分别"的概念——神的子民必须与周围列国不同。这不仅是卫生问题，更是身份标记：你吃什么、怎么吃，都在宣告你属于谁。新约中彼得在异象中看见大布降下（徒10章），神废除了饮食洁净的区分，宣告外邦人也可以进入恩典之约。

皮肤病（传统译为"大麻风"）的条例格外详尽，因为它是罪的外在象征——使人与社区隔离、不能进入圣所、必须呼喊"不洁净了！不洁净了！"（13:45）。耶稣触摸麻风病人使他洁净（太8:3），是宣告祂有权赦罪、恢复人与神和人与人的关系。`,
    content_en: `The purity laws cover diet (ch. 11), purification after childbirth (ch. 12), skin diseases (ch. 13–14), and bodily discharges (ch. 15). These regulations may seem tedious today, but their theological significance is profound.

Dietary laws divided animals into clean and unclean, teaching Israel the concept of "separation" — God's people must be distinct from surrounding nations. This was not merely about hygiene but about identity: what you eat and how you eat declares to whom you belong. In the New Testament, Peter's vision of the great sheet (Acts 10) records God abolishing the dietary distinctions, declaring that Gentiles too may enter the covenant of grace.

The regulations concerning skin diseases (traditionally rendered "leprosy") are especially detailed because they served as an outward symbol of sin — separating a person from the community, barring entry to the sanctuary, requiring the cry "Unclean, unclean!" (13:45). Jesus touching the leper and making him clean (Matt 8:3) declared His authority to forgive sin and restore both the divine-human and human-human relationship.`,
  },
  {
    title_zh: `四、赎罪日——一年一度的大赎罪（16章）`,
    title_en: `IV. The Day of Atonement — The Great Annual Atonement (Ch. 16)`,
    content_zh: `第十六章是利未记的神学高峰，也是旧约祭祀制度的中心。一年一次，大祭司独自进入至圣所，在施恩座前为全民赎罪。他必须先为自己的罪献祭，然后才能为百姓献祭——这说明旧约祭司本身也是罪人，需要赎罪。

赎罪日最独特的仪式是"两只公山羊"：一只被杀献为赎罪祭，血弹在施恩座上；另一只活的"归给阿撒泻勒"——大祭司按手在它头上，承认以色列众人的一切罪孽，然后送到旷野无人之地。第一只羊代表基督担当罪的刑罚（代赎），第二只羊代表罪被彻底移除、不再被纪念（赦免）。

希伯来书对此有精彩的解读：基督是更美的大祭司，"不用山羊和牛犊的血，乃用自己的血，只一次进入圣所，成了永远赎罪的事"（来9:12）。旧约的赎罪日年年重复，证明它不能真正除罪；基督只一次献上就永远完全了（来10:14）。`,
    content_en: `Chapter 16 is the theological summit of Leviticus and the center of the Old Testament sacrificial system. Once a year, the high priest entered the Holy of Holies alone, making atonement for the entire nation before the mercy seat. He had to first offer sacrifice for his own sins before offering for the people — demonstrating that Old Testament priests themselves were sinners in need of atonement.

The most distinctive ritual of the Day of Atonement involved "two goats": one was slain as a sin offering, its blood sprinkled on the mercy seat; the other, the live "scapegoat," had the high priest lay his hands upon its head confessing all the iniquities of Israel, then it was sent into the wilderness to an uninhabited land. The first goat represents Christ bearing sin's penalty (substitution); the second represents sin being utterly removed, remembered no more (forgiveness).

Hebrews provides a magnificent exposition: Christ is the greater High Priest who "neither by the blood of goats and calves, but by his own blood he entered in once into the holy place, having obtained eternal redemption for us" (Heb 9:12). The annual repetition of the Day of Atonement proved it could not truly remove sin; Christ, offered once, has perfected forever those who are sanctified (Heb 10:14).`,
  },
  {
    title_zh: `五、圣洁法典——"你们要圣洁"（17-27章）`,
    title_en: `V. The Holiness Code — "Ye Shall Be Holy" (Ch. 17–27)`,
    content_zh: `利未记后半部分被学者称为"圣洁法典"，核心经文是19:2——"你们要圣洁，因为我耶和华你们的神是圣洁的。"圣洁不是可选的附加品，而是神子民的根本身份。

这些条例涵盖生活的方方面面：血的禁令（17章）、性伦理（18章）、社会公义（19章，包括"爱人如己"的命令）、刑罚条例（20章）、祭司圣洁（21-22章）、节期历法（23章，安息日、逾越节、五旬节、赎罪日、住棚节）、圣物管理（24章）、安息年与禧年（25章）。

禧年（25章）每五十年一次，所有卖出的地要归还原主，所有奴仆要得释放。这不仅是社会制度，更是福音的预表——基督宣告："主的灵在我身上……叫我传福音给贫穷的人……报告被掳的得释放"（路4:18，引用赛61:1）。耶稣的事工就是属灵的禧年。

全书以祝福与咒诅（26章）和许愿条例（27章）结束，强调约的两面：顺服带来祝福，悖逆招致审判。但即使在咒诅中，神仍留下恢复的应许（26:44-45）——祂不会完全弃绝祂的子民。`,
    content_en: `The latter half of Leviticus is called by scholars the "Holiness Code," centered on 19:2: "Ye shall be holy: for I the LORD your God am holy." Holiness is not an optional addition but the fundamental identity of God's people.

These regulations cover every aspect of life: prohibition of blood consumption (ch. 17), sexual ethics (ch. 18), social justice (ch. 19, including the command to "love thy neighbour as thyself"), penalties (ch. 20), priestly holiness (ch. 21–22), the festival calendar (ch. 23 — Sabbath, Passover, Pentecost, Day of Atonement, Feast of Tabernacles), care of holy things (ch. 24), and the Sabbath and Jubilee years (ch. 25).

The Jubilee (ch. 25), occurring every fifty years, required all sold land to be returned to its original owner and all bondservants to be set free. This was not merely a social institution but a foreshadowing of the gospel — Christ proclaimed: "The Spirit of the Lord is upon me... to preach the gospel to the poor... to preach deliverance to the captives" (Luke 4:18, quoting Isa 61:1). Jesus' ministry was the spiritual Jubilee.

The book concludes with blessings and curses (ch. 26) and vow regulations (ch. 27), emphasizing the covenant's two sides: obedience brings blessing, rebellion brings judgment. Yet even within the curses, God leaves a promise of restoration (26:44–45) — He will not utterly cast off His people.`,
  },
];

const overview = {
  zh: `利未记（希伯来文 וַיִּקְרָא，意为"他呼叫"）是摩西五经中最常被忽略、却在神学上最丰富的一卷。全书27章围绕一个核心主题：圣洁的神如何与有罪的人同住？答案是：通过献祭、祭司中保和圣洁的生活。

利未记是"十字架的影子"——没有利未记，我们无法理解基督的死为何必要、为何有效。五祭预表基督的不同面向，赎罪日预表基督一次永远的献祭，洁净条例预表基督使不洁净的人成为圣洁。改革宗神学特别强调：旧约的祭祀不是靠仪式本身拯救人，而是指向基督的信心使人得救。`,
  en: `Leviticus (Hebrew וַיִּקְרָא, meaning "And He called") is the most frequently neglected yet theologically richest book of the Pentateuch. Its 27 chapters revolve around one central question: How can a holy God dwell among a sinful people? The answer: through sacrifice, priestly mediation, and holy living.

Leviticus is "the shadow of the cross" — without it, we cannot understand why Christ's death was necessary or effective. The five offerings foreshadow different aspects of Christ, the Day of Atonement foreshadows Christ's once-for-all sacrifice, and the purity laws foreshadow Christ making the unclean holy. Reformed theology especially emphasizes that Old Testament sacrifices did not save through ritual itself, but through faith pointing toward Christ.`,
};

const outline = [
  ["1章", "燔祭条例", "Ch. 1", "Burnt Offering"],
  ["2章", "素祭条例", "Ch. 2", "Grain Offering"],
  ["3章", "平安祭条例", "Ch. 3", "Peace Offering"],
  ["4-5章", "赎罪祭与赎愆祭", "Ch. 4–5", "Sin and Guilt Offerings"],
  ["6-7章", "祭的补充条例", "Ch. 6–7", "Additional Offering Laws"],
  ["8-9章", "亚伦受膏与就职", "Ch. 8–9", "Aaron's Ordination"],
  ["10章", "拿答亚比户之死", "Ch. 10", "Death of Nadab and Abihu"],
  ["11章", "洁净与不洁净的食物", "Ch. 11", "Clean and Unclean Foods"],
  ["12章", "产妇洁净条例", "Ch. 12", "Purification After Childbirth"],
  ["13-14章", "皮肤病条例", "Ch. 13–14", "Skin Disease Regulations"],
  ["15章", "漏症洁净条例", "Ch. 15", "Bodily Discharge Laws"],
  ["16章", "赎罪日", "Ch. 16", "Day of Atonement"],
  ["17-20章", "圣洁生活条例", "Ch. 17–20", "Holy Living Laws"],
  ["21-22章", "祭司圣洁条例", "Ch. 21–22", "Priestly Holiness"],
  ["23章", "节期历法", "Ch. 23", "Festival Calendar"],
  ["25章", "安息年与禧年", "Ch. 25", "Sabbath Year and Jubilee"],
  ["26章", "祝福与咒诅", "Ch. 26", "Blessings and Curses"],
  ["27章", "许愿与奉献条例", "Ch. 27", "Vows and Dedications"],
];

const keyVerse = {
  zh: `"你们要圣洁，因为我耶和华你们的神是圣洁的。"（利未记 19:2）`,
  en: `"Ye shall be holy: for I the LORD your God am holy." (Leviticus 19:2)`,
};

const info = {
  nameZh: `利未记`, nameEn: `Leviticus`, author: `摩西 (Moses)`,
  date: `约公元前1446-1406年`, chapters: `27章`,
  backHref: `/old-testament/pentateuch`, backLabel: `摩西五经`, bibleId: `LEV`,
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
        <div className="flex justify-center gap-4 text-xs text-[var(--color-text-secondary)]">
          <span>✍️ 作者：{info.author}</span><span>📅 {info.date}</span><span>📄 {info.chapters}</span>
        </div>
      </div>
      <div className="mb-10 p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)]">
        <h2 className="font-serif-cn text-lg font-bold text-[var(--color-text)] mb-3">📋 全书概览</h2>
        <div className="flex items-start gap-2 mb-3"><SpeakButton text={overview.zh} lang="zh" /><p className="text-sm text-[var(--color-text)] leading-relaxed font-serif-cn">{overview.zh}</p></div>
        <div className="flex items-start gap-2"><SpeakButton text={overview.en} lang="en" /><p className="text-xs text-[var(--color-text-secondary)] italic leading-relaxed">{overview.en}</p></div>
      </div>
      <div className="mb-10 p-5 rounded-xl bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border border-amber-200 dark:border-amber-800">
        <p className="text-sm font-bold text-amber-800 dark:text-amber-300 mb-1">🔑 金句 Key Verse</p>
        <p className="font-serif-cn text-base text-[var(--color-text)] font-bold leading-relaxed">{keyVerse.zh}</p>
        <p className="text-sm text-[var(--color-text-secondary)] italic mt-1">{keyVerse.en}</p>
      </div>
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