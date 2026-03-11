'use client';
import Link from 'next/link';
import SpeakButton from '@/components/SpeakButton';
import { useState } from 'react';

const sections = [
  {
    title_zh: `一、大卫登基与统一王国（1-5章）`,
    title_en: `I. David's Enthronement and the United Kingdom (Ch. 1–5)`,
    content_zh: `撒母耳记下以大卫哀悼扫罗和约拿单开始。大卫的挽歌是希伯来文学的杰作："英雄何竟仆倒！"（1:19）大卫没有为仇敌的死亡欢喜——这是基督般的品格。

大卫先在希伯仑被犹大支派立为王（2章），统治了七年半。其间与扫罗家的伊施波设政权发生内战。经过漫长的等候，所有支派最终都来到希伯仑膏大卫为全以色列王（5章）。大卫攻取耶布斯人的堡垒——锡安城，建立耶路撒冷为首都。

大卫的等候值得深思：他在撒母耳记上16章就被膏立，到撒母耳记下5章才真正作全以色列的王——中间大约十五年。神的应许不是立刻兑现的，信心就是在等候中持守。`,
    content_en: `2 Samuel opens with David mourning Saul and Jonathan. David's lament is a masterpiece of Hebrew literature: "How are the mighty fallen!" (1:19). David did not rejoice over his enemy's death — a Christ-like character.

David was first made king over Judah at Hebron (ch. 2), ruling for seven and a half years. During this time, civil war raged with Ishbosheth's regime from the house of Saul. After a long wait, all the tribes finally came to Hebron to anoint David king over all Israel (ch. 5). David captured the Jebusite stronghold — the City of Zion — establishing Jerusalem as his capital.

David's waiting is worth pondering: he was anointed in 1 Samuel 16 but did not become king over all Israel until 2 Samuel 5 — roughly fifteen years between. God's promises are not always immediately fulfilled; faith is perseverance in waiting.`,
  },
  {
    title_zh: `二、大卫之约——永远的国度（6-7章）`,
    title_en: `II. The Davidic Covenant — An Everlasting Kingdom (Ch. 6–7)`,
    content_zh: `第六章大卫将约柜迎入耶路撒冷，"极力跳舞"——一个君王在约柜前脱去王袍、穿着细麻布以弗得在百姓面前舞蹈，这是何等的谦卑和喜乐。米甲（扫罗的女儿）因此轻视大卫，但大卫说："我也必更加卑微"（6:22）。真正的敬拜不在乎尊严，在乎心。

第七章是全书的神学高峰，也是旧约中最重要的约之一。大卫想为神建造殿宇，神却通过先知拿单告诉他：不是你为我建造，乃是我为你建立家室。"你的家和你的国必在我面前永远坚立。你的国位也必坚定，直到永远"（7:16）。

大卫之约是弥赛亚盼望的核心根基。以赛亚书、耶利米书、以西结书的弥赛亚预言都建立在此之上。天使对马利亚说"主神要把他祖大卫的位给他"（路1:32），直接引用大卫之约。基督是大卫的子孙，却是大卫的主（太22:41-46），祂的国度永远坚立——这就是大卫之约的终极成就。

大卫的祷告（7:18-29）是王的谦卑回应："主耶和华啊，我是谁？我的家算什么？你竟使我到这地步呢？"这是蒙恩者应有的态度：不是"我配得"，而是"我是谁"。`,
    content_en: `In chapter 6, David brought the ark into Jerusalem, "dancing before the LORD with all his might" — a king removing his royal robes, wearing a linen ephod, dancing before the people. What humility and joy! Michal (Saul's daughter) despised him, but David replied: "I will yet be more vile" (6:22). True worship cares not for dignity but for the heart.

Chapter 7 is the theological summit of the book and one of the most important covenants in the Old Testament. David wanted to build God a house; through the prophet Nathan, God told him: it is not you who will build for me, but I who will build a house for you. "And thine house and thy kingdom shall be established for ever before thee: thy throne shall be established for ever" (7:16).

The Davidic Covenant is the core foundation of messianic hope. The messianic prophecies of Isaiah, Jeremiah, and Ezekiel all build upon it. The angel told Mary: "the Lord God shall give unto him the throne of his father David" (Luke 1:32), directly citing the Davidic Covenant. Christ is David's son yet David's Lord (Matt 22:41–46); His kingdom stands forever — this is the ultimate fulfillment of the Davidic Covenant.

David's prayer (7:18–29) is a king's humble response: "Who am I, O Lord GOD? and what is my house, that thou hast brought me hitherto?" This is the proper attitude of one who has received grace: not "I deserve this" but "Who am I?"`,
  },
  {
    title_zh: `三、大卫的征战与恩慈（8-10章）`,
    title_en: `III. David's Conquests and Kindness (Ch. 8-10)`,
    content_zh: `第8章是大卫军事成就的总结——他击败了非利士人、摩押人、琐巴王、以东人，"大卫无论往哪里去，耶和华都使他得胜"（8:14）。大卫的国度达到以色列历史上最大的版图，实现了神对亚伯拉罕的应许（创15:18）。他"秉公行义"治理百姓（8:15），成为弥赛亚国度的预表。

然而最动人的是第9章——大卫寻找扫罗家中剩余的人，要"因约拿单的缘故"向他们施恩（9:1）。他找到约拿单的儿子米非波设——一个因惊惶跌倒而"两腿瘸了"的人。大卫恢复了他扫罗家一切的产业，并且让他"常与王同席吃饭"（9:13）。

米非波设自称"不过如死狗一般"（9:8），却被王接纳在王的筵席上。这正是福音的图画：我们本是属灵的瘸子和孤儿，却因基督（那位比约拿单更伟大的中保）的缘故，被天国的王接纳在恩典的筵席上。

第10章记载亚扪人对大卫善意使者的羞辱，引发了与亚扪人和亚兰人的战争。善意被拒绝不意味着善意是错误的——恩慈不保证被善待，但恩慈本身就是对的。`,
    content_en: `Chapter 8 summarizes David's military achievements — he defeated the Philistines, Moabites, Zobah, and Edomites; "the LORD preserved David whithersoever he went" (8:14). David's kingdom reached its greatest extent in Israel's history, fulfilling God's promise to Abraham (Gen. 15:18). He "executed judgment and justice unto all his people" (8:15), foreshadowing the Messianic kingdom.

Yet the most moving chapter is 9 — David sought any remaining from Saul's house to show kindness "for Jonathan's sake" (9:1). He found Jonathan's son Mephibosheth — lame in both feet from a childhood fall caused by panic. David restored all of Saul's estate and let him "eat at the king's table continually" (9:13).

Mephibosheth called himself "a dead dog" (9:8), yet was welcomed at the king's table. This is the very picture of the gospel: we are spiritual cripples and orphans, yet for the sake of Christ (a greater Mediator than Jonathan) we are welcomed by the King of heaven to the table of grace.

Chapter 10 records the Ammonites' humiliation of David's goodwill ambassadors, sparking war with Ammon and Aram. Kindness being rejected does not mean kindness was wrong — grace does not guarantee reciprocation, but grace itself is always right.`,
  },
  {
    title_zh: `四、大卫的罪与家庭的崩塌（11-20章）`,
    title_en: `III. David's Sin and the Collapse of His House (Ch. 11–20)`,
    content_zh: `第十一章是大卫一生的最大污点。"到了列王出战的时候，大卫差约押……大卫仍住在耶路撒冷"——他本该在战场上。从王宫屋顶看见拔示巴沐浴，大卫犯了奸淫，又谋杀了她的丈夫乌利亚——一位忠心的赫人勇士。

先知拿单来到大卫面前，用一个穷人小羊羔的比喻揭露大卫的罪（12章）。大卫的回应是真正的悔改："我得罪耶和华了"（12:13）——不是找借口，不是推卸，而是直面己罪。诗篇51就是大卫在此时写下的忏悔诗："神啊，求你为我造清洁的心，使我里面重新有正直的灵。"

但罪的后果是严重的。拿单预言"刀剑必永不离开你的家"（12:10），此后大卫的家族一连串的悲剧：暗嫩强暴他玛（13章）、押沙龙杀暗嫩后逃亡（13章）、押沙龙叛乱（15-18章）。大卫逃离耶路撒冷、赤脚上橄榄山哭泣的场面（15:30），预表基督在同一座山上的客西马尼之夜。

押沙龙死后，大卫的哀哭是圣经中最令人心碎的："我儿押沙龙啊！我儿，我儿押沙龙啊！我恨不得替你死"（18:33）。一个父亲的心碎——即使这个儿子叛逆了他。这里隐约可见天父对悖逆之子的心肠。`,
    content_en: `Chapter 11 is the darkest stain on David's life. "At the time when kings go forth to battle, David sent Joab... but David tarried still at Jerusalem" — he should have been on the battlefield. From the palace roof he saw Bathsheba bathing; David committed adultery and then murdered her husband Uriah — a faithful Hittite warrior.

The prophet Nathan came with a parable of a poor man's lamb to expose David's sin (ch. 12). David's response was true repentance: "I have sinned against the LORD" (12:13) — no excuses, no deflection, but confronting his own sin head-on. Psalm 51 was David's penitential psalm from this moment: "Create in me a clean heart, O God; and renew a right spirit within me."

Yet sin's consequences were severe. Nathan prophesied "the sword shall never depart from thine house" (12:10), and a cascade of family tragedies followed: Amnon violated Tamar (ch. 13), Absalom killed Amnon and fled (ch. 13), Absalom's rebellion (ch. 15–18). David fleeing Jerusalem, weeping barefoot up the Mount of Olives (15:30), foreshadows Christ on that same mountain on the night of Gethsemane.

After Absalom's death, David's lament is among the most heartbreaking in all of Scripture: "O my son Absalom, my son, my son Absalom! would God I had died for thee" (18:33). A father's heart shattered — even for a son who had rebelled against him. Here we glimpse faintly the heart of the heavenly Father toward His rebellious children.`,
  },
  {
    title_zh: `五、大卫的晚年与末了的诗歌（21-24章）`,
    title_en: `V. David's Later Years and Final Songs (Ch. 21–24)`,
    content_zh: `撒母耳记下最后四章构成一个文学上对称的附录。核心是大卫的两首诗歌（22章和23:1-7）。

第二十二章几乎与诗篇18完全相同，是一首宏伟的感恩诗——大卫回顾一生，宣告"耶和华是我的岩石、我的山寨、我的救主"。大卫末了的话（23:1-7）是弥赛亚预言："那以公义治理人民的，敬畏神执掌权柄，他必像日出的晨光"（23:3-4），预表基督是公义的王。

第二十四章记载大卫数点百姓——看似小事，却是信靠军事力量而非信靠神的表现。瘟疫止于耶布斯人亚劳拿的禾场（后来成为所罗门圣殿的地基）。大卫说出了一句深刻的话："我断不肯用白得之物作燔祭献给耶和华我的神"（24:24）——真正的奉献必须付出代价。

撒母耳记下以这个禾场结束，意义深远：审判止息之处，正是敬拜开始之处，也是未来圣殿的根基。这预表基督——审判与恩典在十字架上交汇，成为一切敬拜的根基。`,
    content_en: `The final four chapters of 2 Samuel form a literary chiastic appendix. At its center are David's two songs (ch. 22 and 23:1–7).

Chapter 22 is nearly identical to Psalm 18, a magnificent psalm of thanksgiving — David surveys his life and declares "The LORD is my rock, and my fortress, and my deliverer." David's last words (23:1–7) are messianic prophecy: "He that ruleth over men must be just, ruling in the fear of God. And he shall be as the light of the morning, when the sun riseth" (23:3–4), foreshadowing Christ as the righteous King.

Chapter 24 records David numbering the people — seemingly trivial but an act of relying on military strength rather than on God. The plague was stayed at the threshing floor of Araunah the Jebusite (later the site of Solomon's Temple). David spoke a profound word: "Neither will I offer burnt offerings unto the LORD my God of that which doth cost me nothing" (24:24) — true offering must cost something.

2 Samuel ends at this threshing floor, rich in significance: where judgment ceased, worship began, and the future temple's foundation was laid. This foreshadows Christ — judgment and grace converge at the cross, becoming the foundation of all worship.`,
  },
];

const overview = {
  zh: `撒母耳记下记载大卫四十年的王朝（约公元前1010-970年），是以色列历史的黄金时代，也是最痛苦的时代之一。大卫是"合神心意的人"，但他不是完美的人——他的伟大与失败同样深刻，他的悔改与苦难同样真实。

全书24章可分为四大段：大卫的兴盛（1-10章）、大卫的犯罪（11-12章）、大卫家的苦难（13-20章）、附录（21-24章）。撒母耳记下的核心是大卫之约（第7章）——神应许大卫的后裔将永远坐在宝座上。这个应许贯穿旧约先知书，最终在基督身上成就。`,
  en: `2 Samuel records David's forty-year reign (c. 1010–970 BC), Israel's golden age yet also one of its most painful. David was "a man after God's own heart," but he was not perfect — his greatness and his failure are equally profound, his repentance and suffering equally real.

Its 24 chapters divide into four sections: David's rise (ch. 1–10), David's sin (ch. 11–12), suffering in David's house (ch. 13–20), and an appendix (ch. 21–24). The core of 2 Samuel is the Davidic Covenant (ch. 7) — God's promise that David's offspring would sit on the throne forever. This promise runs through the prophetic books and finds its ultimate fulfillment in Christ.`,
};

const outline = [
  ["1章", "大卫哀悼扫罗和约拿单", "Ch. 1", "David Mourns Saul and Jonathan"],
  ["2-4章", "大卫在希伯仑作犹大王", "Ch. 2–4", "David King at Hebron"],
  ["5章", "大卫作全以色列王", "Ch. 5", "David King over All Israel"],
  ["6章", "约柜迎入耶路撒冷", "Ch. 6", "Ark Brought to Jerusalem"],
  ["7章", "大卫之约", "Ch. 7", "The Davidic Covenant"],
  ["8-10章", "大卫的军事胜利", "Ch. 8–10", "David's Military Victories"],
  ["11章", "大卫与拔示巴", "Ch. 11", "David and Bathsheba"],
  ["12章", "拿单的责备与悔改", "Ch. 12", "Nathan's Rebuke; Repentance"],
  ["13章", "暗嫩与他玛", "Ch. 13", "Amnon and Tamar"],
  ["14-18章", "押沙龙的叛乱", "Ch. 14–18", "Absalom's Rebellion"],
  ["19-20章", "大卫复位与示巴叛乱", "Ch. 19–20", "David's Restoration; Sheba's Revolt"],
  ["21章", "基遍人的报仇与勇士录", "Ch. 21", "Gibeonites' Vengeance; Mighty Men"],
  ["22章", "大卫的感恩诗", "Ch. 22", "David's Song of Thanksgiving"],
  ["23章", "大卫末了的话与勇士", "Ch. 23", "David's Last Words; His Warriors"],
  ["24章", "数点百姓与亚劳拿禾场", "Ch. 24", "Census; Araunah's Threshing Floor"],
];

const keyVerse = {
  zh: `"你的家和你的国必在我面前永远坚立。你的国位也必坚定，直到永远。"（撒母耳记下 7:16）`,
  en: `"And thine house and thy kingdom shall be established for ever before thee: thy throne shall be established for ever." (2 Samuel 7:16)`,
};

const info = { nameZh: `撒母耳记下`, nameEn: `2 Samuel`, author: `拿单、迦得`, date: `约公元前1010-970年`, chapters: `24章`, backHref: `/old-testament/historical`, backLabel: `历史书`, bibleId: `2SA` };

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