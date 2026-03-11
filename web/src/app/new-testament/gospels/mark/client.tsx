'use client';
import Link from 'next/link';
import SpeakButton from '@/components/SpeakButton';
import { useState } from 'react';

const sections = [
  {
    title_zh: `一、弥赛亚的权柄：神迹与呼召（1-3章）`,
    title_en: `I. The Messiah's Authority: Miracles and Calling (Ch. 1-3)`,
    content_zh: `马可福音以急促的节奏开始——没有家谱，没有降生叙事，直接进入耶稣的受洗和旷野试探。"日期满了，神的国近了。你们当悔改，信福音"（1:15）——这是全书的主题宣言。

耶稣立刻展示了他的权柄：赶出污鬼（1:25-26），医治彼得的岳母（1:31），洁净长大麻风的（1:41），赦免瘫子的罪（2:5）。每一个神迹都在宣告：神的国已经在你们中间了。马可常用"立刻"（euthys）一词——出现超过40次——描绘一位行动迅速、满有能力的弥赛亚。

呼召门徒同样迅速果断："来跟从我"（1:17），他们就立刻舍了网跟从他。耶稣设立十二个人，"要他们常和自己同在，也要差他们去传道"（3:14）。与主同在和被主差遣，是门徒身份的两个核心。`,
    content_en: `Mark begins at a breakneck pace -- no genealogy, no birth narrative, plunging straight into Jesus' baptism and wilderness temptation. "The time is fulfilled, and the kingdom of God is at hand: repent ye, and believe the gospel" (1:15) -- this is the book's thesis statement.

Jesus immediately demonstrates His authority: casting out demons (1:25-26), healing Peter's mother-in-law (1:31), cleansing a leper (1:41), forgiving the paralytic's sins (2:5). Each miracle declares: the kingdom of God is in your midst. Mark's frequent use of "immediately" (euthys) -- over 40 times -- portrays a Messiah of swift action and power.

The calling of the disciples is equally decisive: "Come ye after me" (1:17), and straightway they left their nets and followed Him. Jesus appointed twelve "that they should be with him, and that he might send them forth to preach" (3:14). Being with the Lord and being sent by Him -- these are the two pillars of discipleship.`,
  },
  {
    title_zh: `二、比喻的奥秘与大能的作为（4-8:26）`,
    title_en: `II. Parables of Mystery and Mighty Works (Ch. 4-8:26)`,
    content_zh: `从第4章开始，耶稣用比喻教导天国的奥秘。撒种的比喻（4:1-20）揭示了人心对福音的四种反应——路旁、石头地、荆棘里、好土。只有"好土"结出果实，因为他们"听道，又领受，并且结实"（4:20）。

这段经文中穿插着震撼人心的神迹：平静风和海（4:39）、赶出群鬼（5:1-13）、医治血漏妇人（5:25-34）、使睚鲁的女儿复活（5:35-43）、五饼二鱼喂饱五千人（6:41-44）、在海面上行走（6:48-49）。每一个神迹都指向一个问题：这人到底是谁？

然而门徒仍然不明白。"你们还不省悟，还不明白吗？你们的心还是愚顽吗？"（8:17）伯赛大瞎子的两段式医治（8:22-26）——先模糊后清晰——正是门徒灵性状态的写照：他们看见了，却还看不清楚。`,
    content_en: `Beginning in chapter 4, Jesus teaches the mysteries of the kingdom through parables. The parable of the sower (4:1-20) reveals four responses of the human heart to the gospel -- wayside, stony ground, thorns, and good soil. Only the "good ground" bears fruit, for they "hear the word, and receive it, and bring forth fruit" (4:20).

Interspersed are astonishing miracles: calming the storm (4:39), casting out Legion (5:1-13), healing the woman with the issue of blood (5:25-34), raising Jairus' daughter (5:35-43), feeding five thousand with five loaves and two fish (6:41-44), walking on the sea (6:48-49). Each miracle presses one question: Who is this man?

Yet the disciples still do not understand. "Perceive ye not yet, neither understand? have ye your heart yet hardened?" (8:17). The two-stage healing of the blind man at Bethsaida (8:22-26) -- first blurred, then clear -- is a portrait of the disciples' spiritual condition: they see, but not yet clearly.`,
  },
  {
    title_zh: `三、走向十字架的道路（8:27-10:52）`,
    title_en: `III. The Way to the Cross (8:27-10:52)`,
    content_zh: `彼得的认信（8:29）是全书的转折点："你是基督。"但他立刻误解了弥赛亚的含义——他不能接受基督必须受苦。耶稣严厉责备他："撒但，退我后边去吧！因为你不体贴神的意思，只体贴人的意思"（8:33）。

从这里开始，耶稣三次预言自己的受难（8:31, 9:31, 10:33-34），每次预言后门徒都表现出误解：彼得拦阻他、门徒争论谁最大、雅各约翰求高位。耶稣用同一个真理回应："若有人要跟从我，就当舍己，背起他的十字架来跟从我"（8:34）。

登山变像（9:2-8）在苦难预言的中间闪耀出荣耀的光芒——摩西和以利亚与耶稣说话，天父的声音宣告："这是我的爱子，你们要听他。"受苦与荣耀不是矛盾的，而是十字架道路的两面。巴底买的呼喊（10:47-48）结束了这一段——瞎眼的乞丐比门徒看得更清楚。`,
    content_en: `Peter's confession (8:29) is the book's turning point: "Thou art the Christ." But he immediately misunderstands what Messiah means -- he cannot accept that Christ must suffer. Jesus rebukes him sharply: "Get thee behind me, Satan: for thou savourest not the things that be of God, but the things that be of men" (8:33).

From here Jesus predicts His passion three times (8:31, 9:31, 10:33-34), and after each prediction the disciples display misunderstanding: Peter rebukes Him, the disciples argue who is greatest, James and John seek positions of honor. Jesus responds each time with the same truth: "Whosoever will come after me, let him deny himself, and take up his cross, and follow me" (8:34).

The Transfiguration (9:2-8) flashes with glory amid the suffering predictions -- Moses and Elijah speak with Jesus, the Father's voice declares: "This is my beloved Son: hear him." Suffering and glory are not contradictions but two sides of the way of the cross. Bartimaeus' cry (10:47-48) closes this section -- the blind beggar sees more clearly than the disciples.`,
  },
  {
    title_zh: `四、耶路撒冷的最后一周：冲突与教导（11-13章）`,
    title_en: `IV. The Final Week in Jerusalem: Conflict and Teaching (Ch. 11-13)`,
    content_zh: `耶稣进入耶路撒冷标志着马可福音的高潮展开。骑驴进城（11:1-10）应验了撒迦利亚书9:9的预言，群众高呼"和散那"——但马可的读者知道，这欢呼很快将变成"钉他十字架"。

洁净圣殿（11:15-17）不是一时的愤怒，而是先知性的审判。马可将此事夹在无花果树的咒诅之间（11:12-14, 20-21）——枯干的无花果树象征着以色列徒有宗教外表却没有果子。"我的殿必称为万国祷告的殿。你们倒使它成为贼窝了"（11:17）。圣殿本应是万族敬拜神的地方，宗教领袖却将其变成了牟利工具。

第12章记录了一系列论战。纳税给凯撒的问题（12:13-17）、复活的争论（12:18-27）、最大的诫命（12:28-34），每一次耶稣都以超越人的智慧回答，令对手无言以对。寡妇的两个小钱（12:41-44）是这段的结尾——在宗教领袖用权力和金钱装饰自己的对比下，一个贫穷的寡妇投上了她"一切养生的"。神看的不是数目，而是心。

橄榄山讲论（13章）是马可记录的耶稣唯一一次长篇讲道。耶路撒冷的毁灭（主后70年应验）和末日的再来交织在一起。核心信息是警醒："但那日子，那时辰，没有人知道……你们要谨慎，警醒祈祷，因为你们不晓得那日期几时来到"（13:32-33）。`,
    content_en: `Jesus' entry into Jerusalem marks the unfolding of Mark's climax. Riding a donkey into the city (11:1-10) fulfills Zechariah 9:9; the crowds shout "Hosanna" — but Mark's readers know this acclaim will soon become "Crucify him."

The cleansing of the Temple (11:15-17) is not a fit of anger but a prophetic judgment. Mark sandwiches this event between the cursing of the fig tree (11:12-14, 20-21) — the withered tree symbolizes Israel's religious show without fruit. "My house shall be called of all nations the house of prayer; but ye have made it a den of thieves" (11:17). The Temple was meant to be a place for all nations to worship God, but the religious leaders turned it into a profit center.

Chapter 12 records a series of confrontations. The question of tribute to Caesar (12:13-17), the debate on the resurrection (12:18-27), the greatest commandment (12:28-34) — each time Jesus answers with wisdom beyond man's, silencing His opponents. The widow's two mites (12:41-44) closes this section — against the backdrop of religious leaders adorning themselves with power and money, a poor widow contributes "all her living." God sees not the amount but the heart.

The Olivet Discourse (ch. 13) is the only long discourse Mark records from Jesus. The destruction of Jerusalem (fulfilled in AD 70) and the end-times return are interwoven. The core message is vigilance: "But of that day and that hour knoweth no man... Take ye heed, watch and pray: for ye know not when the time is" (13:32-33).`,
  },
  {
    title_zh: `五、受难与复活：仆人君王的得胜（14-16章）`,
    title_en: `V. Passion and Resurrection: The Servant King's Victory (Ch. 14-16)`,
    content_zh: `伯大尼的女人用至贵的真哪达香膏膏耶稣（14:3-9），耶稣说这是"为我安葬的事把香膏预先浇在我身上"，并宣告"普天之下，无论在什么地方传这福音，也要述说这女人所做的，以为记念"（14:9）。这是仆人君王受死前最温柔的一幕。

最后的晚餐上（14:22-25），耶稣设立了新约的圣餐。"这是我立约的血，为多人流出来的"（14:24）。"多人"呼应以赛亚书53:12仆人之歌——受苦的仆人"担当多人的罪"。

客西马尼园的祷告（14:32-42）是马可福音最沉重的段落。"他就惊恐起来，极其难过"（14:33）——马可毫不隐讳耶稣人性的真实挣扎。"阿爸！父啊！在你凡事都能。求你将这杯撤去。然而，不要从我的意思，只要从你的意思"（14:36）。"阿爸"是亚拉姆语中孩子对父亲最亲密的称呼——在极度的痛苦中，耶稣仍然信靠父。门徒却三次睡着了（14:37, 40, 41）——人的软弱与主的顺服形成了鲜明对比。

被卖、被审、被弃。犹大亲嘴出卖（14:45），彼得三次不认主（14:66-72），门徒全部逃散（14:50）——甚至有一个少年人丢下麻布光身逃跑（14:51-52），这个细节只有马可记录，可能就是马可本人。

十字架上从午正到申初遍地都黑暗（15:33）。耶稣大声喊着说"以罗伊！以罗伊！拉马撒巴各大尼？"就是说"我的神！我的神！为什么离弃我？"（15:34）。这是诗篇22:1的呼喊——无罪的仆人承担了我们的罪，经历了与父完全隔绝的恐怖。圣殿的幔子从上到下裂为两半（15:38），百夫长看见耶稣断气的样子就说："这人真是神的儿子！"（15:39）。马可福音的第一句是"神的儿子耶稣基督福音的起头"（1:1），最后认出这真理的却是一个罗马军人——福音从犹太传向万民的缩影。

空坟墓的信息简短有力："他已经复活了，不在这里"（16:6）。天使特别说"去告诉他的门徒和彼得"（16:7）——"和彼得"三个字蕴含了无限恩典：那个三次否认主的人没有被排除在外。马可福音贯穿一条暗线：门徒的迟钝、误解、跌倒、逃散——然而复活的主仍然接纳他们、恢复他们、差遣他们。恩典大过一切失败。这是马可留给每一个软弱信徒的安慰：你的跌倒不是终点，因为仆人君王已经为你胜过了一切。`,
    content_en: `The woman at Bethany anoints Jesus with costly spikenard (14:3-9). Jesus says she has "come aforehand to anoint my body to the burying," and declares, "Wheresoever this gospel shall be preached throughout the whole world, this also that she hath done shall be spoken of for a memorial of her" (14:9). This is the tenderest scene before the Servant King's death.

At the Last Supper (14:22-25), Jesus institutes the new covenant sacrament. "This is my blood of the new testament, which is shed for many" (14:24). "For many" echoes the Servant Song of Isaiah 53:12 — the suffering servant "bare the sin of many."

Gethsemane (14:32-42) is Mark's heaviest passage. "He began to be sore amazed, and to be very heavy" (14:33) — Mark does not conceal Jesus' genuine human anguish. "Abba, Father, all things are possible unto thee; take away this cup from me: nevertheless not what I will, but what thou wilt" (14:36). "Abba" is a child's most intimate Aramaic address to a father — in the extremity of anguish, Jesus still trusts the Father. Yet the disciples fall asleep three times (14:37, 40, 41) — human weakness stands in stark contrast to the Lord's obedience.

Betrayed, tried, abandoned. Judas betrays with a kiss (14:45), Peter denies three times (14:66-72), all disciples forsake Him and flee (14:50) — even a young man runs away naked, leaving his linen cloth behind (14:51-52), a detail only Mark records, possibly Mark himself.

From the sixth to the ninth hour darkness covered the land (15:33). Jesus cried with a loud voice, "Eloi, Eloi, lama sabachthani?" — "My God, my God, why hast thou forsaken me?" (15:34). This is the cry of Psalm 22:1 — the sinless Servant bore our sins and experienced the horror of complete separation from the Father. The Temple veil was torn from top to bottom (15:38), and the centurion, seeing how Jesus breathed His last, said: "Truly this man was the Son of God" (15:39). Mark's opening line is "The beginning of the gospel of Jesus Christ, the Son of God" (1:1); the one who finally recognizes this truth is a Roman soldier — a microcosm of the gospel spreading from the Jews to all nations.

The empty tomb message is brief yet mighty: "He is risen; he is not here" (16:6). The angel specifically says, "Go your way, tell his disciples and Peter" (16:7) — those three words "and Peter" contain infinite grace: the man who denied the Lord three times is not excluded. A thread runs through the entire Gospel: the disciples' dullness, misunderstanding, stumbling, and flight — yet the risen Lord still receives them, restores them, and sends them. Grace is greater than all failure. This is Mark's comfort to every weak believer: your fall is not the end, for the Servant King has already triumphed over all.`,
  },
]

const overview = {
  zh: `马可福音（16章）是四福音书中最短、写作最早的一卷（约公元65-70年），传统认为作者约翰·马可记录了使徒彼得的讲道内容。马可福音面向罗马读者，强调耶稣是行动的神子和受苦的仆人。

马可的叙事风格紧凑急促——几乎不收录长篇讲道（只有第13章橄榄山讲论），而是用密集的神迹和事件展示耶稣的权柄。然后在8:27之后急转向十字架——整卷书的后半部分都笼罩在受难的阴影下。"弥赛亚的秘密"是马可的一大主题：耶稣多次吩咐人不要公开祂的身份，直到十字架揭示了弥赛亚的真正含义。`,
  en: `Mark (16 chapters) is the shortest and earliest Gospel (c. AD 65–70), traditionally recording the apostle Peter's preaching by John Mark. Written for Roman readers, Mark emphasizes Jesus as the Son of God in action and the Suffering Servant.

Mark's narrative style is compact and urgent — virtually no long discourses (only the Olivet Discourse in ch. 13), instead using dense miracles and events to display Jesus' authority. Then after 8:27 it turns sharply toward the cross — the entire second half is shadowed by the Passion. The "Messianic Secret" is a major theme: Jesus repeatedly commands silence about His identity until the cross reveals what Messiah truly means.`,
};

const outline = [
  ["1:1-13", "开端：施洗约翰、受洗、试探", "1:1–13", "Beginning: John, Baptism, Temptation"],
  ["1:14-3:6", "加利利早期事工", "1:14–3:6", "Early Galilean Ministry"],
  ["3:7-6:6", "比喻与神迹", "3:7–6:6", "Parables and Miracles"],
  ["6:7-8:26", "门徒训练", "6:7–8:26", "Discipleship Training"],
  ["8:27-10:52", "走向十字架", "8:27–10:52", "Road to the Cross"],
  ["11-13章", "耶路撒冷最后一周", "Ch. 11–13", "Final Week in Jerusalem"],
  ["14-15章", "受难", "Ch. 14–15", "The Passion"],
  ["16章", "复活", "Ch. 16", "Resurrection"],
];

const keyVerse = {
  zh: `"因为人子来，并不是要受人的服侍，乃是要服侍人，并且要舍命作多人的赎价。"（马可福音 10:45）`,
  en: `"For even the Son of man came not to be ministered unto, but to minister, and to give his life a ransom for many." (Mark 10:45)`,
};

const info = { nameZh: `马可福音`, nameEn: `Mark`, author: `约翰·马可`, date: `约公元65-70年`, chapters: `16章`, backHref: `/new-testament/gospels`, backLabel: `四福音书`, bibleId: `MRK` };

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