'use client';
import Link from 'next/link';
import SpeakButton from '@/components/SpeakButton';
import { useState } from 'react';

const sections = [
  {
    title_zh: `一、尼希米的异象与归回（1-2章）`,
    title_en: `I. Nehemiah's Vision and Return (Ch. 1–2)`,
    content_zh: `尼希米是波斯王亚达薛西的酒政——一个极其信任的职位。当他听见耶路撒冷城墙被拆毁、城门被火焚烧，他"坐下哭泣，悲哀几日，在天上的神面前禁食祈祷"（1:4）。尼希米的祷告（1:5-11）是旧约中最感人的代祷之一——他认罪、引用神的应许、求神施恩。

最值得注意的是尼希米的"箭祷"。当亚达薛西王问他为何面带愁容时，尼希米"默祷天上的神"（2:4），然后才回答王。这不是长篇大论的祷告，而是危急时刻的一声呼求——信心可以在一瞬间连接天上的宝座。

王准许尼希米回去重建。尼希米夜间骑马查看城墙废墟（2:12-16），先摸清实际状况，然后才召集百姓。他是一个兼具祷告和务实的领袖。`,
    content_en: `Nehemiah was cupbearer to King Artaxerxes of Persia — a position of extraordinary trust. When he heard that Jerusalem's walls were broken down and its gates burned, he "sat down and wept, and mourned certain days, and fasted, and prayed before the God of heaven" (1:4). Nehemiah's prayer (1:5–11) is one of the most moving intercessions in the Old Testament — confessing sin, citing God's promises, pleading for mercy.

Most notable is Nehemiah's "arrow prayer." When Artaxerxes asked why he looked sad, Nehemiah "prayed to the God of heaven" (2:4) before answering the king. This was no lengthy discourse but a cry in a critical moment — faith can connect to heaven's throne in an instant.

The king granted Nehemiah permission to return and rebuild. Nehemiah rode out at night to inspect the ruined walls (2:12–16), surveying the actual situation before rallying the people. He was a leader who combined prayer with pragmatism.`,
  },
  {
    title_zh: `二、城墙重建——一手做工一手拿兵器（3-7章）`,
    title_en: `II. Rebuilding the Wall — Working and Watching (Ch. 3–7)`,
    content_zh: `第三章详细列出了参与重建的各个家族和他们负责的城墙段落。这份名单看似枯燥，却蕴含宝贵的原则：每个人负责自己门前的那段城墙——在神的国度中，每个人都有自己的岗位。

重建遭遇激烈反对。参巴拉、多比雅和基善嗤笑、恐吓、阴谋暗杀。尼希米的回应是信心与警醒的结合："我们的神必为我们争战"（4:20），同时让百姓"一手做工，一手拿兵器"（4:17）。信靠神不等于放弃人的责任。

内部也有危机——富人向穷人放高利贷，趁国难发财。尼希米严厉斥责贵族和官长，自己也以身作则，十二年省长任期内从未取过省长的俸禄（5:14-18）。

五十二天城墙完工（6:15）。仇敌听见就惧怕，"因为见这工作完成是出乎我们的神"（6:16）。五十二天建成一座城的城墙——这在古代世界几乎是不可能的。但当全民同心合意，加上神的帮助，不可能变为可能。`,
    content_en: `Chapter 3 lists in detail the families who rebuilt and their assigned wall sections. This seemingly tedious list holds a precious principle: each family was responsible for the section in front of their own house — in God's kingdom, everyone has their post.

Rebuilding faced fierce opposition. Sanballat, Tobiah, and Geshem mocked, threatened, and plotted assassination. Nehemiah's response combined faith with vigilance: "Our God shall fight for us" (4:20), while the people worked "with one of his hands... and with the other hand held a weapon" (4:17). Trusting God does not mean abandoning human responsibility.

Internal crises also arose — the wealthy charged usury to the poor, profiting from national hardship. Nehemiah rebuked the nobles and officials sharply, and led by example: during his twelve-year governorship he never took the governor's allowance (5:14–18).

The wall was completed in fifty-two days (6:15). The enemies heard and were afraid, "for they perceived that this work was wrought of our God" (6:16). Building a city's walls in fifty-two days was nearly impossible in the ancient world. But when all the people worked with one accord, and God helped, the impossible became possible.`,
  },
  {
    title_zh: `三、律法的复兴与认罪（8-13章）`,
    title_en: `III. Revival of the Law and Confession (Ch. 8–13)`,
    content_zh: `城墙建好之后，以斯拉站在木台上，从清早到晌午向百姓宣读律法书（8:3）。利未人"使百姓明白所念的"（8:8）——他们翻译并讲解，因为被掳归回的百姓已经不太懂希伯来文，日常语言变成了亚兰文。

百姓听了律法就哭了——因为发现自己多年来违背了神的命令。但尼希米说："你们不要忧愁，因靠耶和华而得的喜乐是你们的力量"（8:10）。这是信仰生活的平衡：既有因罪而来的忧伤，也有因恩典而来的喜乐。

第九章是旧约中最长的祷告之一，利未人带领百姓回顾从亚伯拉罕到被掳的整个历史——是一部以祷告形式呈现的救赎简史。百姓认罪后重新立约（10章），承诺遵守安息日、缴纳什一、不与外邦人通婚。

尼希米第二次回耶路撒冷（13章）发现百姓再次堕落——安息日做买卖、与外邦人通婚、圣殿被滥用。他强力纠正，甚至"咒诅他们，打了他们几个人，拔了他们的头发"（13:25）。尼希米记以一个清醒的认识结束：外在的改革无法改变人的内心。以色列需要的不是更好的城墙或更严的律法，而是神应许的新约——"我要将我的律法放在他们里面，写在他们心上"（耶31:33）。`,
    content_en: `After the wall was completed, Ezra stood on a wooden platform and read the Book of the Law from morning until midday (8:3). The Levites "caused the people to understand the law" (8:8) — they translated and explained, for the returned exiles no longer fully understood Hebrew, having adopted Aramaic as their daily language.

The people wept when they heard the Law — realizing how long they had violated God's commands. But Nehemiah said: "Neither be ye sorry; for the joy of the LORD is your strength" (8:10). This is the balance of faithful living: both sorrow over sin and joy in grace.

Chapter 9 contains one of the longest prayers in the Old Testament, as the Levites led the people through a review of salvation history from Abraham to the exile — a redemptive history presented in prayer form. After confession, the people renewed their covenant (ch. 10), promising to keep the Sabbath, pay tithes, and not intermarry with foreigners.

Nehemiah's second visit to Jerusalem (ch. 13) found the people had fallen again — trading on the Sabbath, intermarrying, misusing the temple. He corrected them forcefully, even "cursed them, and smote certain of them, and plucked off their hair" (13:25). Nehemiah ends with a sobering realization: external reform cannot change the human heart. Israel needed not better walls or stricter laws but God's promised New Covenant — "I will put my law in their inward parts, and write it in their hearts" (Jer 31:33).`,
  },
  {
    title_zh: `四、尼希米的领袖风格：祷告先于行动`,
    title_en: `IV. Nehemiah's Leadership: Prayer Before Action`,
    content_zh: `尼希米书是整本圣经中对属灵领袖最生动的描绘之一。尼希米在面对每一个挑战时的第一反应总是祷告——从听见耶路撒冷城墙毁坏的消息到禁食祷告（1:4），从王后宫中回答王的询问前"默默地祷告天上的神"（2:4），到敌人威胁时的呼喊"我们的神啊，求你垂听"（4:4）。

尼希米的祷告有一个显著特点：简短而实际。"我在天上的神面前禁食祷告……我就祷告说……"（1:4-5）是深思熟虑的恳求；"求你坚固我的手"（6:9）是战场上的短呼。祷告不是脱离现实的仪式，而是贯穿行动始终的生命连接。

尼希米面对反对时也展示了领袖的勇气。当桑巴拉和多比雅一再嘲讽和威胁，他的回答是："我正做大工，不能下去。我若下去到你们那里，这工就必停废。"（6:3）专注于神所托付的使命，不被旁枝末节分散，这是领袖最难学会的功课。

尼希米书最后以他的短祷收尾——"我的神啊，求你记念我，施恩与我"（13:31）。这简单的七个字，是一个领袖一生侍奉之后，在神面前最诚实的倾诉。功绩不是他的骄傲，而是他在神面前摆上的，等候神的鉴察与记念。`,
    content_en: `The book of Nehemiah is one of Scripture's most vivid portraits of a spiritual leader. Nehemiah's first response to every challenge is always prayer — from hearing of Jerusalem's broken walls, fasting and praying for days (1:4), to "breath-praying" silently to God in the royal court before answering the king (2:4), to crying out under threat: "O God, strengthen my hands" (6:9).

Nehemiah's prayers have a distinctive character: brief and practical. The longer intercession (1:4-5) is deliberate pleading; "Now therefore, O God, strengthen my hands" (6:9) is a battlefield cry. Prayer is not a ritual disconnected from reality but a living connection running through all of action.

Nehemiah's courage in facing opposition is equally instructive. When Sanballat and Tobiah repeatedly mocked and threatened, his answer was: "I am doing a great work, so that I cannot come down: why should the work cease, whilst I leave it, and come down to you?" (6:3, KJV). Staying focused on God's entrusted mission, not distracted by peripheral conflicts, is the leader's hardest lesson.

The book ends with Nehemiah's short prayer: "Remember me, O my God, for good" (13:31, KJV). These simple words are a leader's most honest offering after a lifetime of service — not boasting in accomplishments but laying them before God, awaiting His scrutiny and remembrance.`,
  },
];

const overview = {
  zh: `尼希米记紧接以斯拉记，记载了城墙重建和信仰复兴的历史（约公元前445-430年）。尼希米——一位波斯宫廷的高级官员——蒙神感动回到耶路撒冷，带领百姓五十二天建成城墙，随后与以斯拉一同推动属灵复兴。

全书13章可分为三段：尼希米归回与城墙重建（1-7章）、律法的宣读与认罪（8-10章）、城墙奉献与后续改革（11-13章）。尼希米记的核心教训是：真正的重建不仅是砖石城墙，更是百姓对圣约的回归。外在建设与内在更新必须同步。`,
  en: `Nehemiah continues from Ezra, recording wall reconstruction and spiritual revival (c. 445–430 BC). Nehemiah — a high official in the Persian court — was moved by God to return to Jerusalem, leading the people to complete the wall in fifty-two days, then joining Ezra in spiritual renewal.

Its 13 chapters divide into: Nehemiah's return and wall rebuilding (ch. 1–7), public reading of the Law and confession (ch. 8–10), wall dedication and later reforms (ch. 11–13). The core lesson: true rebuilding is not merely brick and mortar but the people's return to the covenant. External construction and internal renewal must go together.`,
};

const outline = [
  ["1章", "尼希米的祷告", "Ch. 1", "Nehemiah's Prayer"],
  ["2章", "归回与夜间巡视", "Ch. 2", "Return and Night Inspection"],
  ["3章", "城墙分工", "Ch. 3", "Wall Assignments"],
  ["4章", "面对外部反对", "Ch. 4", "Facing External Opposition"],
  ["5章", "内部改革", "Ch. 5", "Internal Reform"],
  ["6章", "城墙完工", "Ch. 6", "Wall Completed"],
  ["7章", "归回者名单", "Ch. 7", "List of Returnees"],
  ["8章", "宣读律法", "Ch. 8", "Reading the Law"],
  ["9章", "认罪祷告", "Ch. 9", "Prayer of Confession"],
  ["10章", "重新立约", "Ch. 10", "Covenant Renewal"],
  ["11-12章", "居民分配与城墙奉献", "Ch. 11–12", "Settlement; Wall Dedication"],
  ["13章", "尼希米的最终改革", "Ch. 13", "Nehemiah's Final Reforms"],
];

const keyVerse = {
  zh: `"你们不要忧愁，因靠耶和华而得的喜乐是你们的力量。"（尼希米记 8:10）`,
  en: `"Neither be ye sorry; for the joy of the LORD is your strength." (Nehemiah 8:10)`,
};

const info = { nameZh: `尼希米记`, nameEn: `Nehemiah`, author: `尼希米`, date: `约公元前445-430年`, chapters: `13章`, backHref: `/old-testament/historical`, backLabel: `历史书`, bibleId: `NEH` };

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