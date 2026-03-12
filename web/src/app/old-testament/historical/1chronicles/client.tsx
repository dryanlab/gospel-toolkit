'use client';
import Link from 'next/link';
import SpeakButton from '@/components/SpeakButton';
import { useState } from 'react';

const sections = [
  {
    title_zh: `一、从亚当到大卫的家谱（1-9章）`,
    title_en: `I. Genealogies from Adam to David (Ch. 1–9)`,
    content_zh: `历代志上前九章是圣经中最长的家谱段落。对现代读者来说可能枯燥，但对被掳归回的以色列人来说，这是身份的根基——你们是谁？你们从哪里来？家谱回答了这些根本问题。

家谱从亚当开始（1章），经挪亚、亚伯拉罕、以撒、雅各，到十二支派。犹大支派被放在最前面（2-4章），因为弥赛亚的应许属于犹大。利未支派的家谱（6章）特别详细，因为祭司和利未人是敬拜体系的核心。

值得注意的是雅比斯的祷告（4:10）："甚愿你赐福与我，扩张我的境界，你的手与我同在，保佑我不遭患难，不受艰苦。"经文说"神就应允他所求的。"在一长串名字中，这个小小的祷告闪闪发光——神记念每一个真心求告祂的人。

第九章记载被掳归回后重新定居耶路撒冷的家族，将读者从远古带到当下，连接过去和未来。`,
    content_en: `The first nine chapters of 1 Chronicles contain the Bible's longest genealogical section. Though perhaps tedious for modern readers, for the returned exiles these genealogies were foundational to identity — Who are you? Where do you come from? The genealogies answered these fundamental questions.

They begin with Adam (ch. 1), through Noah, Abraham, Isaac, and Jacob, to the twelve tribes. Judah's line is placed first (ch. 2–4) because the messianic promise belongs to Judah. The Levitical genealogy (ch. 6) is especially detailed, since priests and Levites formed the core of the worship system.

Notably, the prayer of Jabez appears (4:10): "Oh that thou wouldest bless me indeed, and enlarge my coast, and that thine hand might be with me, and that thou wouldest keep me from evil, that it may not grieve me!" Scripture says "God granted him that which he requested." Amid a long list of names, this small prayer shines — God remembers every soul who sincerely calls upon Him.

Chapter 9 records the families who resettled in Jerusalem after the exile, bridging the ancient past and the present, connecting history with hope.`,
  },
  {
    title_zh: `二、大卫的王朝——敬拜的君王（10-22章）`,
    title_en: `II. David's Reign — The Worshipping King (Ch. 10–22)`,
    content_zh: `历代志上对大卫的记载与撒母耳记有显著不同。历代志几乎略去了大卫所有的失败——拔示巴事件、押沙龙叛乱、与扫罗的争斗——而集中描写大卫作为敬拜领袖的角色。这不是"美化历史"，而是历代志作者的神学视角：他写给被掳归回的百姓，要他们效法的是大卫在敬拜上的榜样。

约柜迎入耶路撒冷（13-16章）是叙事的高潮。乌撒伸手扶约柜被击杀（13:10）的事件令大卫惊惧——神的圣洁不容轻慢，即使出于好意。三个月后大卫按照正确的方式迎接约柜，"大卫穿着细麻布的以弗得，在耶和华面前极力跳舞"（15:27）。

大卫之约在这里重述（17章），与撒母耳记下7章平行。大卫的祷告回应充满敬畏："耶和华啊，你所赐的福，是永远为福的"（17:27末句概意）。

最独特的是大卫为圣殿做的预备（22-29章）。虽然神不允许大卫建殿（因他"你流了多人的血"，22:8），大卫仍然竭尽全力预备材料和组织。他对所罗门说："你当刚强壮胆去行。不要惧怕，也不要惊惶。因为耶和华神就是我的神，与你同在"（28:20）。大卫不能做的事，他为下一代预备——这是属灵领袖的格局。`,
    content_en: `1 Chronicles' portrait of David differs markedly from Samuel's. Chronicles omits nearly all David's failures — Bathsheba, Absalom's rebellion, the conflict with Saul — focusing instead on David as worship leader. This is not "whitewashing history" but the Chronicler's theological perspective: writing for returned exiles, he held up David's example in worship.

The bringing of the ark to Jerusalem (ch. 13–16) is the narrative climax. Uzzah's death for touching the ark (13:10) filled David with awe — God's holiness tolerates no presumption, even well-intentioned. Three months later, David brought the ark properly, "dancing before God with all his might, wearing a robe of fine linen" (cf. 15:27).

The Davidic Covenant is restated here (ch. 17), paralleling 2 Samuel 7. David's prayer response overflows with reverence.

Most distinctive is David's preparation for the temple (ch. 22–29). Though God forbade David to build it (because "thou hast shed blood abundantly," 22:8), David poured all his effort into preparing materials and organization. He told Solomon: "Be strong and of good courage, and do it: fear not, nor be dismayed: for the LORD God, even my God, will be with thee" (28:20). What David could not do, he prepared for the next generation — this is the vision of a spiritual leader.`,
  },
  {
    title_zh: `三、利未人的职分与敬拜的秩序（23-27章）`,
    title_en: `III. The Levitical Ministry and the Order of Worship (Ch. 23–27)`,
    content_zh: `历代志上23-27章记载了大卫为圣殿敬拜所做的周详安排。这五章在列王纪中找不到——它们是历代志作者独有的材料，反映了被掳归回后犹太社区对敬拜秩序的高度重视。

大卫将利未人分为四类事奉（23:4-5）：管理圣殿事务的、作官长和士师的、守门的、用大卫所造之乐器颂赞耶和华的。音乐事奉占据了突出地位——亚萨、希幔、耶杜顿三大诗班的编排（25章）表明敬拜不是即兴的，而是有秩序、有组织、有传承的。

祭司被分为二十四个班次轮流供职（24章），这一制度一直延续到新约时代——路加福音1:5记载撒迦利亚属于"亚比雅班"。守门人的职分（26章）看似卑微，却是保护圣殿圣洁不可或缺的。军事和行政的组织（27章）表明大卫治理的智慧——敬拜的神也是秩序的神，"凡事都要规规矩矩地按着次序行"（林前14:40）。

这些章节提醒教会：敬拜需要周全的预备和忠心的事奉者。每一个看似不起眼的职分——守门、歌唱、管理——在神眼中都是神圣的事奉。`,
    content_en: `1 Chronicles 23-27 records David's thorough arrangements for temple worship. These five chapters have no parallel in Kings — they are unique to the Chronicler, reflecting the post-exilic community's deep concern for the order of worship.

David divided the Levites into four categories of service (23:4-5): overseeing the work of the temple, serving as officers and judges, gatekeepers, and praising the LORD with instruments David had made. Musical ministry held a prominent place — the organization of three great choirs under Asaph, Heman, and Jeduthun (ch. 25) shows that worship was not spontaneous but ordered, organized, and transmitted through generations.

The priests were divided into twenty-four courses serving in rotation (ch. 24), a system that continued into the New Testament era — Luke 1:5 records that Zechariah belonged to "the course of Abia." The gatekeepers' role (ch. 26), though seemingly humble, was indispensable for protecting the temple's holiness. The military and administrative organization (ch. 27) demonstrates David's governing wisdom — the God of worship is also the God of order: "Let all things be done decently and in order" (1 Cor 14:40).

These chapters remind the church: worship requires thorough preparation and faithful servants. Every seemingly insignificant role — gatekeeping, singing, administration — is sacred service in God's eyes.`,
  },
  {
    title_zh: `四、大卫的遗命与奉献（28-29章）`,
    title_en: `IV. David's Final Charge and Offering (Ch. 28–29)`,
    content_zh: `历代志上的最后两章是大卫一生的高潮与谢幕。第28章，大卫在全以色列会众面前将圣殿的蓝图交给所罗门，这蓝图是"耶和华用手画出来使我明白的"（28:19）——圣殿不是人的设计，而是神的启示。大卫勉励所罗门："你当刚强壮胆去行。不要惧怕，也不要惊惶，因为耶和华神，就是我的神，与你同在"（28:20）。

第29章记载了大卫和众领袖为圣殿的奉献。大卫首先以身作则，从自己的私产中拿出金银（29:3-4），然后众族长甘心乐意地奉献（29:6-8）。大卫的祷告（29:10-19）是全书的神学高潮："耶和华啊，尊大、能力、荣耀、强胜、威严都是你的……我算什么？我的民算什么？竟能如此乐意奉献？因为万物都从你而来，我们把从你而得的献给你"（29:11-14）。

"万物都从你而来，我们把从你而得的献给你"——这是圣经中关于奉献最深刻的定义。我们不是在给神什么祂没有的东西，而是将祂原本赐给我们的归还给祂。真正的奉献不是损失，而是感恩；不是义务，而是特权。历代志上以这个奉献的高潮结束，预示了一个比所罗门圣殿更伟大的殿——基督的身体（约2:21）。`,
    content_en: `The final two chapters of 1 Chronicles form the climax and curtain call of David's life. In chapter 28, David presented the temple blueprints to Solomon before all Israel — blueprints "made me understand in writing by his hand upon me" (28:19) — the temple was not a human design but a divine revelation. David encouraged Solomon: "Be strong and of good courage, and do it: fear not, nor be dismayed: for the LORD God, even my God, will be with thee" (28:20).

Chapter 29 records the offerings of David and the leaders for the temple. David led by example, contributing from his own private treasury (29:3-4); then the chief fathers gave willingly and joyfully (29:6-8). David's prayer (29:10-19) is the theological climax of the entire book: "Thine, O LORD, is the greatness, and the power, and the glory, and the victory, and the majesty... But who am I, and what is my people, that we should be able to offer so willingly after this sort? for all things come of thee, and of thine own have we given thee" (29:11-14).

"All things come of thee, and of thine own have we given thee" — this is Scripture's most profound definition of offering. We are not giving God something He lacks; we are returning what He originally gave us. True giving is not loss but gratitude; not obligation but privilege. 1 Chronicles concludes with this climax of offering, foreshadowing a temple greater than Solomon's — the body of Christ (John 2:21).`,
  },
];

const overview = {
  zh: `历代志上（希伯来圣经中历代志上下原为一卷）是被掳归回后写成的历史书，为重建中的以色列人提供属灵身份认同。全书29章从亚当的家谱开始，到大卫为圣殿做最后的预备结束。

与撒母耳记和列王纪不同，历代志从祭司和敬拜的角度重新讲述以色列历史。大卫不仅是军事统帅和政治领袖，更是敬拜的组织者和圣殿的预备者。历代志上的核心信息是：真正的国度建立在正确的敬拜之上。`,
  en: `1 Chronicles (originally one book with 2 Chronicles in the Hebrew Bible) was written after the exile, providing spiritual identity for the rebuilding nation. Its 29 chapters begin with genealogies from Adam and end with David's final preparations for the temple.

Unlike Samuel and Kings, Chronicles retells Israel's history from a priestly and liturgical perspective. David is presented not merely as military commander and political leader but as worship organizer and temple preparer. The core message: the true kingdom is built upon right worship.`,
};

const outline = [
  ["1章", "从亚当到以扫的家谱", "Ch. 1", "Genealogies: Adam to Esau"],
  ["2-4章", "犹大支派家谱", "Ch. 2–4", "Judah's Genealogy"],
  ["5章", "流便、迦得、半玛拿西", "Ch. 5", "Reuben, Gad, Half-Manasseh"],
  ["6章", "利未支派家谱", "Ch. 6", "Levi's Genealogy"],
  ["7-8章", "其余支派家谱", "Ch. 7–8", "Remaining Tribes"],
  ["9章", "归回后的居民", "Ch. 9", "Post-Exile Settlers"],
  ["10章", "扫罗之死", "Ch. 10", "Saul's Death"],
  ["11-12章", "大卫的勇士", "Ch. 11–12", "David's Warriors"],
  ["13-16章", "约柜迎入耶路撒冷", "Ch. 13–16", "Ark Brought to Jerusalem"],
  ["17章", "大卫之约", "Ch. 17", "The Davidic Covenant"],
  ["18-20章", "大卫的战争", "Ch. 18–20", "David's Wars"],
  ["21章", "大卫数点百姓", "Ch. 21", "David's Census"],
  ["22-27章", "圣殿预备与组织", "Ch. 22–27", "Temple Preparations"],
  ["28-29章", "大卫的遗训与奉献", "Ch. 28–29", "David's Charge and Offering"],
];

const theology = {
  title_zh: `核心神学：敬拜与大卫之约的延续`,
  title_en: `Core Theology: Worship and the Continuation of the Davidic Covenant`,
  content_zh: `历代志上是被掳归回后写成的，目的是向回归的犹太社区重新确认他们的身份：你们是大卫之约的继承人，敬拜的子民。

第一，家谱的神学意义。九章家谱不是无聊的名单，而是盟约延续的证明。从亚当到大卫的谱系（1-3章）表明：神从创世之初就有一条不断的线索，贯穿历史，指向弥赛亚。每一个名字都是神信实的见证——祂没有忘记祂的应许。马太福音1章耶稣的家谱正是历代志家谱的延续和成全。

第二，敬拜的核心地位。历代志上用了大量篇幅记载大卫为圣殿敬拜所做的预备：利未人的班次、诗班的设立、乐器的配置。大卫的感恩诗（16:8-36）是全书的神学高峰："要记念祂向以色列人所行的奇事……祂是耶和华我们的神"（16:12-14）。改革宗传统特别强调敬拜的"规范原则"——敬拜必须按照神的吩咐，不是人的发明。历代志为圣殿敬拜建立了详细的规范，预表新约教会的有序敬拜。

第三，大卫——不是无瑕的英雄，而是悔改的榜样。历代志省略了大卫与拔示巴的丑闻（撒下11-12章），但记录了数点民数的罪（21章）。大卫购买了阿珥楠的禾场建坛献祭——这正是日后圣殿的地点。"我不用你的东西白白献给耶和华"（21:24）——真正的奉献必须付出代价，这预表基督在各各他付出终极代价。

第四，神在历史中的主权。历代志的叙事视角始终是神学性的：战争的胜败、国王的兴衰，背后都是神的手在运作。"战争全在乎耶和华"（5:22）。被掳归回的社区需要知道：你们的历史不是偶然的，你们的未来掌握在信实之神的手中。`,
  content_en: `First Chronicles was written after the return from exile to reaffirm the identity of the restored Jewish community: you are heirs of the Davidic covenant and a people of worship.

First, the theological significance of genealogies. The nine chapters of genealogies are not tedious lists but proof of covenant continuity. The lineage from Adam to David (ch. 1-3) demonstrates that from creation God maintained an unbroken thread through history pointing to the Messiah. Each name is a witness to God's faithfulness — He has not forgotten His promise. The genealogy of Jesus in Matthew 1 is the continuation and fulfillment of Chronicles' genealogy.

Second, the centrality of worship. First Chronicles devotes extensive space to David's preparations for temple worship: the divisions of Levites, the establishment of choirs, the arrangement of instruments. David's psalm of thanksgiving (16:8-36) is the book's theological pinnacle: "Remember his marvellous works... He is the LORD our God" (16:12-14). The Reformed tradition particularly emphasizes the "regulative principle" of worship — worship must follow God's commands, not human invention. Chronicles establishes detailed norms for temple worship, prefiguring the ordered worship of the New Testament church.

Third, David — not a flawless hero but a model of repentance. Chronicles omits the Bathsheba scandal (2 Sam 11-12) but records the sin of the census (ch. 21). David purchased the threshing floor of Ornan and built an altar — the very site of the future temple. "I will not take that which is thine for the LORD, nor offer burnt offerings without cost" (21:24) — true offering must cost something, prefiguring Christ's ultimate cost at Calvary.

Fourth, God's sovereignty in history. Chronicles' narrative perspective is consistently theological: behind victories and defeats, the rise and fall of kings, God's hand is always at work. "The battle was of God" (5:22). The post-exilic community needed to know: your history is not accidental; your future is held in the hands of a faithful God.`,
};

const keyVerse = {
  zh: `"因为万物都从你而来，我们把从你而得的献给你。"（历代志上 29:14）`,
  en: `"For all things come of thee, and of thine own have we given thee." (1 Chronicles 29:14)`,
};

const info = { nameZh: `历代志上`, nameEn: `1 Chronicles`, author: `传统认为以斯拉`, date: `约公元前450-400年`, chapters: `29章`, backHref: `/old-testament/historical`, backLabel: `历史书`, bibleId: `1CH` };


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