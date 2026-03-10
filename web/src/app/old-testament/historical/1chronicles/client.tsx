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
    title_zh: `三、大卫的奉献——一切都从你而来（29章）`,
    title_en: `III. David's Offering — All Things Come from Thee (Ch. 29)`,
    content_zh: `历代志上第29章是大卫生命的巅峰之一。大卫带头奉献自己的私产为圣殿预备，众首领也甘心乐意地奉献。大卫的祷告是旧约中最美的奉献祷告：

"耶和华我们的父啊，你是应当称颂的，从亘古直到永远……因为万物都从你而来，我们把从你而得的献给你。我们在你面前是客旅，是寄居的，与我们列祖一样。我们在世的日子如影儿，不能长存"（29:10-15）。

"万物都从你而来，我们把从你而得的献给你"——这一句话定义了基督徒奉献的本质。我们不是在给神什么，而是将从神手中领受的归还给祂。这驱除了一切骄傲和功劳感。

大卫的一生以敬拜结束。他不是以军事胜利或政治成就画上句号，而是以带领全会众敬拜为最后的形象。历代志上教导我们：人生最重要的不是你做了什么，而是你如何敬拜。`,
    content_en: `1 Chronicles 29 is one of the pinnacles of David's life. David led by offering his personal wealth for the temple; the leaders also gave willingly and joyfully. David's prayer is one of the most beautiful offertory prayers in the Old Testament:

"Blessed be thou, LORD God of Israel our father, for ever and ever... for all things come of thee, and of thine own have we given thee. For we are strangers before thee, and sojourners, as were all our fathers: our days on the earth are as a shadow, and there is none abiding" (29:10–15).

"All things come of thee, and of thine own have we given thee" — this one sentence defines the essence of Christian giving. We are not giving God something of ours but returning what we have received from His hand. This banishes all pride and merit.

David's life ended in worship. He is last seen not as a military victor or political achiever but as one leading the whole assembly in worship. 1 Chronicles teaches us: the most important thing in life is not what you accomplished but how you worshipped.`,
  },

{
    title_zh: `四、利未人的事奉与敬拜的秩序（23-27章）`,
    title_en: `IV. The Levites' Service and the Order of Worship (Ch. 23-27)`,
    content_zh: `历代志上用大量篇幅记录敬拜的秩序——利未人的班次（23章）、祭司的二十四班（24章）、歌唱者的编组（25章）、守门者和库管（26章）、军队和官员的编制（27章）。在其他历史书看来这是枯燥的行政细节，但在历代志的视角中，这是最重要的事。

为什么？因为历代志写给被掳归回的以色列人，他们最需要知道的是：如何正确地敬拜神。没有王权的荣耀，没有帝国的版图，但圣殿的敬拜可以恢复。秩序不是束缚，而是尊重——对神圣洁的尊重。

大卫亲自设立诗班（25章），亚萨、希幔、耶杜顿的名字反复出现在诗篇的标题中。音乐不是敬拜的装饰，而是敬拜的核心。大卫知道，最好的艺术应当献给最伟大的神。`,
    content_en: `1 Chronicles devotes extensive space to worship order -- Levitical divisions (ch. 23), the twenty-four priestly courses (ch. 24), singers' groups (ch. 25), gatekeepers and treasurers (ch. 26), military and civil officers (ch. 27). Other histories might view these as dry administrative details, but in Chronicles' perspective, this is what matters most.

Why? Because Chronicles was written for Israelites returned from exile, who most needed to know: how to worship God properly. Without royal glory or imperial territory, temple worship could still be restored. Order is not bondage but reverence -- respect for God's holiness.

David personally appointed the choir (ch. 25); the names Asaph, Heman, and Jeduthun appear repeatedly in Psalm superscriptions. Music is not worship's decoration but its core. David knew the finest art should be offered to the greatest God.`,
  }
,
{
    title_zh: `五、大卫的遗命与圣殿的预备（28-29章）`,
    title_en: `V. David's Final Charge and Temple Preparations (Ch. 28-29)`,
    content_zh: `历代志上最后两章是大卫的谢幕。他把圣殿的蓝图交给所罗门——"这一切工作的样式都是耶和华用手划出来使我明白的"（28:19）。圣殿不是大卫的设计，而是神的设计；大卫只是忠心的传递者。

大卫在众人面前的祷告是旧约最壮丽的颂赞之一："耶和华啊，尊大、能力、荣耀、强胜、威严都是你的；凡天上地下的都是你的；国度也是你的"（29:11）。紧接着他说："我算什么，我的民算什么，竟能如此乐意奉献？因为万物都从你而来，我们把从你而得的献给你"（29:14）。

这是一切奉献的神学基础——我们不是在给神什么，而是在还给他本来就属于他的。大卫以感恩和谦卑结束了他的一生。历代志上从家谱开始，以颂赞结束——整卷书的信息是：神在历史中做工，目的是在他的百姓中间建立永恒的敬拜。`,
    content_en: `The final two chapters of 1 Chronicles are David's farewell. He handed the temple blueprints to Solomon -- "All this, said David, the LORD made me understand in writing by his hand upon me" (28:19). The temple was not David's design but God's; David was merely the faithful transmitter.

David's prayer before the assembly is one of the Old Testament's most majestic praises: "Thine, O LORD, is the greatness, and the power, and the glory, and the victory, and the majesty: for all that is in the heaven and in the earth is thine; thine is the kingdom" (29:11). He continued: "But who am I, and what is my people, that we should be able to offer so willingly after this sort? for all things come of thee, and of thine own have we given thee" (29:14).

This is the theological foundation of all giving -- we are not giving God anything but returning what already belongs to Him. David ended his life with gratitude and humility. 1 Chronicles begins with genealogies and ends with praise -- the entire book's message: God works in history to establish eternal worship among His people.`,
  }
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

const keyVerse = {
  zh: `"因为万物都从你而来，我们把从你而得的献给你。"（历代志上 29:14）`,
  en: `"For all things come of thee, and of thine own have we given thee." (1 Chronicles 29:14)`,
};

const info = { nameZh: `历代志上`, nameEn: `1 Chronicles`, author: `传统认为以斯拉`, date: `约公元前450-400年`, chapters: `29章`, backHref: `/old-testament/historical`, backLabel: `历史书`, bibleId: `1CH` };

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