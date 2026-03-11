'use client';
import Link from 'next/link';
import SpeakButton from '@/components/SpeakButton';
import { useState } from 'react';

const sections = [
  {
    title_zh: `一、神的爱与祭司的败坏（1:1-2:9）`,
    title_en: `I. God's Love and the Priests' Corruption (1:1–2:9)`,
    content_zh: `玛拉基书以神对以色列爱的宣告开始——"耶和华说：'我曾爱你们。'你们却说：'你在何事上爱我们呢？'\"（1:2）。百姓质疑神的爱——这是信心冷淡的标志。神用以扫和雅各的历史来回应：祂拣选了雅各，这本身就是爱的证据。

但祭司们辜负了这份爱。他们献上瞎眼的、瘸腿的、有病的牲畜——那些他们不敢送给省长的次品，却拿来献给万军之耶和华。"你们将瞎眼的献为祭物，这不为恶吗？将瘸腿的、有病的献上，这不为恶吗？你献给你的省长，他岂喜悦你，岂能看你的情面吗？"（1:8）

神宁可祭司关上殿门，也不要这种侮辱性的敬拜——"甚愿你们中间有一人关上殿门，免得你们徒然在我坛上烧火"（1:10）。然后是一个惊人的宣告："从日出之地到日落之处，我的名在外邦中必尊为大"（1:11）——当以色列的祭司轻慢神时，外邦人反而会尊崇祂的名。`,
    content_en: `Malachi opens with God's declaration of love — "I have loved you, saith the LORD. Yet ye say, Wherein hast thou loved us?"  (1:2). The people questioning God's love is a sign of spiritual coldness. God responds with the history of Esau and Jacob: His choosing Jacob was itself proof of love.

But the priests had squandered this love. They offered blind, lame, and sick animals — rejects they would never dare present to the governor, yet brought before the LORD of hosts. "And if ye offer the blind for sacrifice, is it not evil? and if ye offer the lame and sick, is it not evil? offer it now unto thy governor; will he be pleased with thee, or accept thy person?" (1:8)

God would rather priests shut the temple doors than continue this insulting worship — "Who is there even among you that would shut the doors for nought? neither do ye kindle fire on mine altar for nought" (1:10). Then a stunning declaration: "For from the rising of the sun even unto the going down of the same my name shall be great among the Gentiles" (1:11) — while Israel's priests despised God, the Gentiles would honor His name.`,
  },
  {
    title_zh: `二、婚约的背叛与公义的呼求（2:10-3:5）`,
    title_en: `II. Covenant Betrayal and the Call for Justice (2:10–3:5)`,
    content_zh: `第二章后半转向百姓的婚姻问题——犹大人休掉自己的妻子，娶外邦女子。"虽然神有灵的余力能造多人，他不是单造一人吗？为何只造一人呢？乃是他愿人得虔诚的后裔。所以当谨守你们的心，谁也不可以诡诈待幼年所娶的妻"（2:15）。

然后是那句著名的宣告——"耶和华以色列的神说：'休妻的事和以强暴待妻的人都是我所恨恶的。'所以当谨守你们的心，不可行诡诈。这是万军之耶和华说的"（2:16）。

百姓还用言语烦琐耶和华——"你们用言语烦琐耶和华，你们还说：'我们在何事上烦琐他呢？'因为你们说：'凡行恶的，耶和华眼看为善，并且他喜悦他们'；或说：'公义的神在哪里呢？'\"（2:17）

神的回答是：审判要来。"万军之耶和华说：'我要差遣我的使者在我前面预备道路。你们所寻求的主必忽然进入他的殿'\"（3:1上）。这是对施洗约翰和基督来临的预言。"他来的日子，谁能当得起呢？他显现的时候，谁能立得住呢？因为他如炼金之人的火，如漂布之人的碱"（3:2）。`,
    content_en: `The second half of chapter 2 turns to the people's marriage issues — Judah's men divorced their wives to marry foreign women. "And did not he make one? Yet had he the residue of the spirit. And wherefore one? That he might seek a godly seed. Therefore take heed to your spirit, and let none deal treacherously against the wife of his youth" (2:15).

Then the famous declaration — "For the LORD, the God of Israel, saith that he hateth putting away: for one covereth violence with his garment, saith the LORD of hosts: therefore take heed to your spirit, that ye deal not treacherously" (2:16).

The people also wearied God with words — "Ye have wearied the LORD with your words. Yet ye say, Wherein have we wearied him? When ye say, Every one that doeth evil is good in the sight of the LORD, and he delighteth in them; or, Where is the God of judgment?" (2:17)

God's answer: judgment is coming. "Behold, I will send my messenger, and he shall prepare the way before me: and the Lord, whom ye seek, shall suddenly come to his temple" (3:1). This prophesies John the Baptist and Christ's coming. "But who may abide the day of his coming? and who shall stand when he appeareth? for he is like a refiner's fire, and like fullers' soap' (3:2).`,
  },
  {
    title_zh: `三、十一奉献与最终的应许（3:6-4:6）`,
    title_en: `III. Tithes and the Final Promise (3:6–4:6)`,
    content_zh: `第三章第八节是旧约中关于奉献最著名的经文——"人岂可夺取神之物呢？你们竟夺取我的供物。你们却说：'我们在何事上夺取你的供物呢？'就是你们在当纳的十分之一和当献的供物上"（3:8）。

然后是旧约中唯一一处神邀请人"试验"祂的经文——"万军之耶和华说：你们要将当纳的十分之一全然送入仓库，使我家有粮，以此试试我，是否为你们敞开天上的窗户，倾福与你们，甚至无处可容"（3:10）。

第三章第十六节描绘了敬畏神之人的美丽画面——"那时，敬畏耶和华的彼此谈论，耶和华侧耳而听，且有纪念册在他面前，记录那敬畏耶和华、思念他名的人"（3:16）。神不仅听祂百姓的祷告，祂还侧耳听他们之间关于祂的谈论，并且记录下来。

旧约以最后两节结束——预言以利亚要在"耶和华大而可畏之日"来到之前来（4:5）。耶稣指明这就是施洗约翰（太11:14）。旧约最后的声音指向新约的第一个声音——施洗约翰在旷野的呼喊。`,
    content_en: `Chapter 3:8 is the Old Testament's most famous verse on giving — "Will a man rob God? Yet ye have robbed me. But ye say, Wherein have we robbed thee? In tithes and offerings" (3:8).

Then the Old Testament's only passage where God invites humans to "test" Him — "Bring ye all the tithes into the storehouse, that there may be meat in mine house, and prove me now herewith, saith the LORD of hosts, if I will not open you the windows of heaven, and pour you out a blessing, that there shall not be room enough to receive it" (3:10).

Chapter 3:16 paints a beautiful picture of God-fearing people — "Then they that feared the LORD spake often one to another: and the LORD hearkened, and heard it, and a book of remembrance was written before him for them that feared the LORD, and that thought upon his name" (3:16). God not only hears His people's prayers; He listens to their conversations about Him and records them.

The Old Testament ends with its final two verses — prophesying Elijah's coming before "the great and dreadful day of the LORD" (4:5). Jesus identified this as John the Baptist (Matt 11:14). The Old Testament's last voice points to the New Testament's first voice — John the Baptist crying in the wilderness.`,
  },
  {
    title_zh: `四、四百年沉默与旧约的完结`,
    title_en: `IV. Four Hundred Years of Silence and the Old Testament's Close`,
    content_zh: `玛拉基书不仅是旧约最后一卷书，也是旧约最后的声音。书末以"以利亚"的预言结束："我差以利亚先知在耶和华大而可畏之日未到以前、预先来到你们这里"（4:5）。然后是四百年的沉默——没有先知，没有新的启示，没有天使显现。

这四百年（约公元前430年到公元前4年施洗约翰出现）在神学上被称为"两约之间"。圣经没有记载这段时期，但不是什么都没发生——正是在这段时间里，希腊化运动席卷中东，马加比家族带领犹太人反抗塞流古帝国，罗马帝国崛起……神在历史的幕后为弥赛亚的到来准备舞台。

当施洗约翰终于在旷野呼喊"天国近了，你们应当悔改！"（太3:2），他就是玛拉基所预言的以利亚，旧约最后的声音由此得到回应。玛拉基书以"咒诅"结尾——"恐怕我来用咒诅击打这地"（4:6）——这是旧约对人类罪性最后的提醒。而新约的第一句话——"亚伯拉罕的后裔、大卫的子孙耶稣基督的家谱"（太1:1）——正是神对这咒诅的回答：弥赛亚来了，借着祂，咒诅被逆转，祝福临到万族。

玛拉基书是旧约的终曲，也是新约序幕的最后一幕。整本旧约以"等待"结束，整本新约以"应验"开始。神的故事没有结束，只是进入了最高潮。`,
    content_en: `Malachi is not only the Old Testament's last book but its final voice. It ends with the Elijah prophecy: "Behold, I will send you Elijah the prophet before the coming of the great and dreadful day of the LORD" (4:5, KJV). Then four hundred years of silence — no prophets, no new revelation, no angelic appearances.

These four hundred years (c. 430 BC to the appearance of John the Baptist c. 4 BC) are theologically called the "intertestamental period." The Bible does not record this era, but it was not without event: Hellenization swept the Middle East, the Maccabees led the Jews against the Seleucid Empire, Rome rose to power — God behind history's curtain was preparing the stage for the Messiah's arrival.

When John the Baptist finally cried in the wilderness, "Repent ye: for the kingdom of heaven is at hand" (Matt 3:2, KJV), he was the Elijah Malachi had prophesied, and the Old Testament's final voice received its answer. Malachi ends with "curse" — "lest I come and smite the earth with a curse" (4:6, KJV) — humanity's sin's last warning in the Old Testament. And the New Testament's first sentence — "The book of the generation of Jesus Christ, the son of David, the son of Abraham" (Matt 1:1, KJV) — is God's answer to that curse: the Messiah has come, and through Him the curse is reversed, blessing flowing to all nations.

Malachi is the Old Testament's finale and the New Testament prologue's final act. The entire Old Testament ends with "waiting"; the entire New Testament begins with "fulfillment." God's story has not ended — it has entered its greatest climax.`,
  },
];

const overview = {
  zh: `玛拉基书（4章）是旧约的最后一卷书，写于约公元前460-430年，圣殿已经重建完成，但百姓的灵性再次衰退。玛拉基的名字意为"我的使者"，他用独特的"问答体"（disputation）写作——神说一句，百姓反问一句，神再回答。

玛拉基书是旧约与新约之间的桥梁。它的最后预言——以利亚的到来——在四百年的沉默之后由施洗约翰应验。旧约以审判的警告和盼望的应许同时结束，等待弥赛亚的来临。`,
  en: `Malachi (4 chapters) is the Old Testament's final book, written c. 460–430 BC. The temple had been rebuilt, but the people's spiritual life had declined again. Malachi means "my messenger"; he writes in a unique disputation style — God states, people challenge, God responds.

Malachi bridges Old and New Testaments. Its final prophecy — Elijah's coming — was fulfilled by John the Baptist after 400 years of silence. The Old Testament ends with judgment's warning and hope's promise simultaneously, awaiting the Messiah's advent.`,
};

const outline = [
  ["1:1-5", "神对以色列的爱", "1:1–5", "God's Love for Israel"],
  ["1:6-2:9", "祭司的败坏", "1:6–2:9", "The Priests' Corruption"],
  ["2:10-16", "婚约的背叛", "2:10–16", "Covenant Betrayal in Marriage"],
  ["2:17-3:5", "公义之神必来审判", "2:17–3:5", "God of Justice Will Come"],
  ["3:6-12", "十一奉献的挑战", "3:6–12", "The Tithe Challenge"],
  ["3:13-4:3", "敬畏神者的纪念册", "3:13–4:3", "Book of Remembrance for the God-Fearing"],
  ["4:4-6", "以利亚的预言", "4:4–6", "Prophecy of Elijah"],
];

const keyVerse = {
  zh: `"万军之耶和华说：你们要将当纳的十分之一全然送入仓库，使我家有粮，以此试试我，是否为你们敞开天上的窗户，倾福与你们，甚至无处可容。"（玛拉基书 3:10）`,
  en: `"Bring ye all the tithes into the storehouse, that there may be meat in mine house, and prove me now herewith, saith the LORD of hosts, if I will not open you the windows of heaven, and pour you out a blessing, that there shall not be room enough to receive it." (Malachi 3:10)`,
};

const info = { nameZh: `玛拉基书`, nameEn: `Malachi`, author: `玛拉基`, date: `约公元前460-430年`, chapters: `4章`, backHref: `/old-testament/minor-prophets`, backLabel: `小先知书`, bibleId: `MAL` };

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