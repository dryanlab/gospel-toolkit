'use client';
import Link from 'next/link';
import SpeakButton from '@/components/SpeakButton';
import { useState } from 'react';

const sections = [
  {
    title_zh: `一、撒母耳的诞生与事奉：先知的兴起（1-7章）`,
    title_en: `I. Samuel's Birth and Ministry: The Rise of a Prophet (Ch. 1-7)`,
    content_zh: `撒母耳记上以哈拿的祷告开始——一个不育妇人向耶和华哭求。"我心中倾吐，是在耶和华面前极其伤痛，哭了许久"（1:16）。神垂听了她的祷告，撒母耳出生。哈拿的感谢颂（2:1-10）与马利亚的尊主颂遥相呼应——神"使软弱的有力，使人多生育"（2:5）。

士师时代末期，"耶和华的言语稀少，不常有默示"（3:1）。童年撒母耳在夜中听见神的声音，学会了侧耳倾听的信仰姿态。从此他成为全以色列公认的先知，"他的言语没有一句落空"（3:19）。

以色列把约柜当作护身符带去打仗，结果约柜被夺，非利士人得胜（4章）。这是一个严肃的教训：神不能被人操控，神的同在不保证胜利，除非人心归向神。撒母耳最终带领以色列悔改回转，神赐以别以谢之地的胜利（7章）。`,
    content_en: `1 Samuel opens with Hannah's prayer -- a barren woman crying out to the LORD. "I have poured out my soul before the LORD... I have spoken hitherto out of the abundance of my complaint and grief" (1:15-16). God heard her prayer and Samuel was born. Hannah's song (2:1-10) echoes Mary's Magnificat -- God "maketh the barren woman to keep house" (Psalm 113:9).

At the end of the Judges era, "the word of the LORD was precious in those days; there was no open vision" (3:1). The child Samuel heard God's voice in the night and learned the posture of listening faith. He became the prophet acknowledged by all Israel; "the LORD let none of his words fall to the ground" (3:19).

Israel brought the ark as a lucky charm to battle, but the ark was captured and the Philistines won (ch. 4). This is a sobering lesson: God cannot be manipulated; His presence does not guarantee victory unless hearts turn to Him. Samuel finally led Israel to repent and God gave victory at Ebenezer (ch. 7).`,
  },
  {
    title_zh: `二、王权的开始：扫罗被膏（8-15章）`,
    title_en: `II. The Beginning of Kingship: Saul Anointed (Ch. 8-15)`,
    content_zh: `以色列求王的请求（8章）本质上是拒绝神作他们的王。"他们不是厌弃你，乃是厌弃我，不要我作他们的王"（8:7）。神答应了他们的请求，但这是神在审判中的宽容，不是神的喜悦。

扫罗高大英俊（9:2）、起初谦逊（9:21）——外表和起点都很好。然而他在战场上没有等候撒母耳就擅自献祭（13章），在与亚玛力人的战争中没有完全遵从神的命令（15章）。撒母耳的话揭示了问题的核心："听命胜于献祭，顺从胜于公羊的脂油"（15:22）。

扫罗的失败不是能力不足，而是顺服的缺失。"他抛弃耶和华的命令，耶和华也抛弃他，使他不作王"（15:23）。属灵的悖逆比外在的软弱更危险。`,
    content_en: `Israel's request for a king (ch. 8) was essentially a rejection of God as their King. "They have not rejected thee, but they have rejected me, that I should not reign over them" (8:7). God granted their request, but this was God's permissive will in judgment, not His delight.

Saul was tall and handsome (9:2), initially humble (9:21) -- good outward appearance and beginnings. Yet he presumed to offer sacrifice without waiting for Samuel (ch. 13) and failed to fully obey God's command against the Amalekites (ch. 15). Samuel's words reveal the core issue: "To obey is better than sacrifice, and to hearken than the fat of rams" (15:22).

Saul's failure was not lack of ability but lack of obedience. "Because thou hast rejected the word of the LORD, he hath also rejected thee from being king" (15:23). Spiritual rebellion is more dangerous than outward weakness.`,
  },
  {
    title_zh: `三、大卫被膏与约拿单的友谊（16-20章）`,
    title_en: `III. David Anointed and Jonathan's Friendship (Ch. 16-20)`,
    content_zh: `"耶和华不像人看人：人是看外貌；耶和华是看内心"（16:7）——神拣选了最不被期待的小儿子大卫。被膏后"耶和华的灵就大大感动大卫"（16:13），属灵的力量先于外在的权位。

大卫与歌利亚的故事（17章）不仅是勇气的故事，更是信心的故事。"我来攻击你，是靠着万军之耶和华的名"（17:45）——少年人的信心胜过巨人的力量，因为争战在乎耶和华，不在乎人。

大卫与约拿单的友谊（18-20章）是圣经最感人的人际关系之一。约拿单是王子，本应视大卫为威胁，却"约拿单的心与大卫的心深相契合，约拿单爱大卫如同爱自己的性命"（18:1）。他三次冒险保护大卫（19:2, 20:35-42），甘愿放弃王位继承权。这种超越利益的友谊，根基在"耶和华面前"（20:42）。`,
    content_en: `"The LORD seeth not as man seeth; for man looketh on the outward appearance, but the LORD looketh on the heart" (16:7) -- God chose the least expected, the youngest son David. After anointing, "the Spirit of the LORD came upon David from that day forward" (16:13); spiritual power precedes outward position.

David and Goliath (ch. 17) is not merely a story of courage but of faith. "I come to thee in the name of the LORD of hosts" (17:45) -- a youth's faith overcomes a giant's strength, for the battle belongs to the LORD, not to man.

The friendship of David and Jonathan (ch. 18-20) is Scripture's most moving relationship. Jonathan was the prince who should have seen David as a rival, yet "the soul of Jonathan was knit with the soul of David, and Jonathan loved him as his own soul" (18:1). He risked his life three times for David (19:2, 20:35-42), willingly surrendering his claim to the throne. This friendship transcending self-interest was grounded "before the LORD" (20:42).`,
  },
  {
    title_zh: `四、扫罗的衰落与大卫的等候（21-31章）`,
    title_en: `IV. Saul's Decline and David's Patient Waiting (Ch. 21-31)`,
    content_zh: `扫罗的嫉妒使他成为逼迫大卫的人（21-26章）。大卫在旷野漂流的岁月是等候神时间的学堂。他两次有机会杀死扫罗，却放手——"我在耶和华面前万不敢伸手害耶和华的受膏者"（26:11）。等候神的时间、不伸手夺权，是大卫最宝贵的品格。

大卫的软弱也在这段时期显现——他投靠非利士人（27章），欺骗盟友，在悲剧边缘徘徊。圣经对大卫的记载不是要树立完美英雄，而是展示神如何在有瑕疵的人身上成就旨意。

扫罗最终在基利波山阵亡（31章），死前求巫婆卜问撒母耳的鬼魂（28章）——这是属灵破产的最后图景。他的一生提醒我们：外在的成功不代表属灵的健康，而顺服神才是唯一的根基。`,
    content_en: `Saul's jealousy turned him into David's persecutor (ch. 21-26). David's years of wilderness wandering were school for learning to wait on God's timing. Twice he had opportunity to kill Saul yet spared him -- "The LORD forbid that I should stretch forth mine hand against the LORD's anointed" (26:11). Waiting on God's timing and refusing to seize power were David's most precious qualities.

David's weakness also appeared in this period -- he took refuge with the Philistines (ch. 27), deceived his allies, hovering near tragedy. Scripture's portrayal of David does not build a perfect hero but shows how God accomplishes His purposes through flawed people.

Saul died on Mount Gilboa (ch. 31), having first sought the spirit of Samuel through a medium (ch. 28) -- the final portrait of spiritual bankruptcy. His life reminds us: outward success does not indicate spiritual health; obedience to God is the only foundation.`,
  },
  {
    title_zh: `五、撒母耳记上的神学遗产`,
    title_en: `V. Theological Legacy of 1 Samuel`,
    content_zh: `撒母耳记上对比了两种王权：地上王权（扫罗）和属灵王权（大卫，预表基督）的根本差异。

神拣选的标准不是外表，而是内心（16:7）。争战的胜败不在人的力量，而在耶和华的名（17:45）。真正的权柄来自顺服，而非能力（15:22）。等候神的时间比抢夺权位更有价值（26:11）。

哈拿的祷告（2:1-10）预告了这一切的主题——神"使软弱的有力，叫跌倒的腰带力量"（2:4）。整卷书在讲一个真理：不是倚靠势力、不是倚靠才能，乃是倚靠神的灵（撒迦利亚书4:6）。大卫是预表——更大的大卫基督，用最软弱的方式（十字架）赢得了最伟大的胜利。`,
    content_en: `1 Samuel contrasts two kingships: the fundamental difference between earthly kingship (Saul) and spiritual kingship (David, a type of Christ).

God's standard of selection is the heart, not outward appearance (16:7). Victory in battle depends not on human strength but on the name of the LORD (17:45). True authority comes from obedience, not ability (15:22). Waiting on God's timing is more valuable than seizing power (26:11).

Hannah's prayer (2:1-10) prefigures all these themes -- God "giveth strength unto the weak" and "he that stumbled is girded with strength" (2:4). The entire book teaches one truth: not by might nor by power, but by God's Spirit (Zechariah 4:6). David is a type -- the greater David, Christ, won the greatest victory by the most seemingly weak means: the cross.`,
  },
]

const overview = {
  zh: `撒母耳记上（希伯来圣经中撒母耳记上下原为一卷）记载了以色列从士师时代过渡到君王时代的关键历史，涵盖三位核心人物：撒母耳（最后的士师兼先知）、扫罗（第一位王）和大卫（合神心意的王）。

全书31章可分为三大段：撒母耳的兴起（1-7章）、扫罗的王朝（8-15章）、大卫的崛起与扫罗的衰落（16-31章）。撒母耳记上的核心神学信息是：神的国度不在乎外在的权力和势力，而在乎内心对神的忠信顺服。扫罗的被弃绝与大卫的被拣选形成鲜明对比——"人是看外貌，耶和华是看内心"（16:7）。`,
  en: `1 Samuel (originally one book with 2 Samuel in the Hebrew Bible) records the crucial transition from the age of judges to the age of kings in Israel, centering on three figures: Samuel (the last judge and prophet), Saul (the first king), and David (the king after God's own heart).

Its 31 chapters divide into three sections: the rise of Samuel (ch. 1–7), Saul's reign (ch. 8–15), and the rise of David alongside the decline of Saul (ch. 16–31). The core theological message is: God's kingdom depends not on outward power and might but on inner faithfulness and obedience to God. Saul's rejection and David's election form a stark contrast — "man looketh on the outward appearance, but the LORD looketh on the heart" (16:7).`,
};

const outline = [
  ["1-2章", "哈拿的祷告与撒母耳的出生", "Ch. 1–2", "Hannah's Prayer; Samuel's Birth"],
  ["3章", "撒母耳蒙召", "Ch. 3", "Samuel's Calling"],
  ["4-6章", "约柜被掳与归回", "Ch. 4–6", "The Ark Captured and Returned"],
  ["7章", "米斯巴的复兴", "Ch. 7", "Revival at Mizpah"],
  ["8章", "以色列要求立王", "Ch. 8", "Israel Demands a King"],
  ["9-10章", "扫罗被膏立", "Ch. 9–10", "Saul's Anointing"],
  ["11-12章", "扫罗的初期胜利与撒母耳的告别", "Ch. 11–12", "Saul's Victory; Samuel's Farewell"],
  ["13-14章", "扫罗的糊涂事", "Ch. 13–14", "Saul's Foolishness"],
  ["15章", "扫罗被弃绝", "Ch. 15", "Saul's Rejection"],
  ["16章", "大卫被膏立", "Ch. 16", "David's Anointing"],
  ["17章", "大卫与歌利亚", "Ch. 17", "David and Goliath"],
  ["18-20章", "大卫与约拿单、扫罗的嫉妒", "Ch. 18–20", "David, Jonathan, Saul's Jealousy"],
  ["21-26章", "大卫逃亡", "Ch. 21–26", "David's Flight"],
  ["27-30章", "大卫在非利士", "Ch. 27–30", "David Among the Philistines"],
  ["31章", "扫罗之死", "Ch. 31", "Saul's Death"],
];

const keyVerse = {
  zh: `"耶和华不像人看人：人是看外貌；耶和华是看内心。"（撒母耳记上 16:7）`,
  en: `"The LORD seeth not as man seeth; for man looketh on the outward appearance, but the LORD looketh on the heart." (1 Samuel 16:7)`,
};

const info = { nameZh: `撒母耳记上`, nameEn: `1 Samuel`, author: `撒母耳、拿单、迦得`, date: `约公元前1050-1010年`, chapters: `31章`, backHref: `/old-testament/historical`, backLabel: `历史书`, bibleId: `1SA` };

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