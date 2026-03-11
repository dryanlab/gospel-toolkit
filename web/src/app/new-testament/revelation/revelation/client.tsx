'use client';
import Link from 'next/link';
import SpeakButton from '@/components/SpeakButton';
import { useState } from 'react';

const sections = [
    {
      title_zh: '一、荣耀中的基督与七教会的书信（1-3章）',
      title_en: 'I. Christ in Glory and the Letters to the Seven Churches (Ch. 1-3)',
      content_zh: `启示录以约翰在拔摩海岛上看见荣耀的基督开始。这不再是加利利湖边温柔的教师，而是审判世界的万王之王。

"我转过身来，要看是谁发声与我说话；既转过来，就看见七个金灯台。灯台中间有一位好像人子，身穿长衣，直垂到脚，胸间束着金带。他的头与发皆白，如白羊毛，如雪；眼目如同火焰；脚好像在炉中锻炼光明的铜；声音如同众水的声音。"（启示录 1:12-15）

"And I turned to see the voice that spake with me. And being turned, I saw seven golden candlesticks; And in the midst of the seven candlesticks one like unto the Son of man, clothed with a garment down to the foot, and girt about the paps with a golden girdle. His head and his hairs were white like wool, as white as snow; and his eyes were as a flame of fire; And his feet like unto fine brass, as if they burned in a furnace; and his voice as the sound of many waters." (Revelation 1:12-15, KJV)

约翰见到基督的荣耀后"仆倒在他脚前，像死了一样"（1:17）——当年倚靠在主胸前的门徒，如今见到荣耀中的基督，只能俯伏。但基督说："不要惧怕！我是首先的，我是末后的，又是那存活的；我曾死过，现在又活了，直活到永永远远"（1:17-18）。第二至三章给七教会的信，是基督对教会最真实的评价——有赞扬、有责备、有呼召悔改。`,
      content_en: `Revelation opens with John on the island of Patmos beholding Christ in glory. This is no longer the gentle teacher by the Sea of Galilee, but the King of Kings who judges the world.

"And I turned to see the voice that spake with me. And being turned, I saw seven golden candlesticks; And in the midst of the seven candlesticks one like unto the Son of man, clothed with a garment down to the foot, and girt about the paps with a golden girdle. His head and his hairs were white like wool, as white as snow; and his eyes were as a flame of fire; And his feet like unto fine brass, as if they burned in a furnace; and his voice as the sound of many waters." (Revelation 1:12-15, KJV)

When John saw Christ's glory he "fell at his feet as dead' (1:17) — the disciple who once leaned on the Lord's breast, seeing Christ in glory, could only fall prostrate. But Christ said: "Fear not; I am the first and the last: I am he that liveth, and was dead; and, behold, I am alive for evermore' (1:17-18). The letters to the seven churches in chapters 2-3 are Christ's honest assessment of His church — with praise, rebuke, and calls to repentance.`
    },
    {
      title_zh: '二、天上的敬拜与被杀的羔羊（4-5章）',
      title_en: 'II. Heavenly Worship and the Slain Lamb (Ch. 4-5)',
      content_zh: `从第四章开始，约翰被提到天上看见了最壮观的异象——天上的宝座和不停止的敬拜。

"他们昼夜不住地说：圣哉！圣哉！圣哉！主神是昔在、今在、以后永在的全能者。"（启示录 4:8）

"And they rest not day and night, saying, Holy, holy, holy, Lord God Almighty, which was, and is, and is to come." (Revelation 4:8, KJV)

然后约翰看见一卷用七印封严的书卷，没有人能展开。约翰就大哭，直到长老安慰他："犹大支派中的狮子，大卫的根，他已得胜，能以展开那书卷"（5:5）。但约翰转头看见的不是狮子，而是"有羔羊站立，像是被杀过的"（5:6）——得胜的狮子，以受死的羔羊的形象出现。这是启示录最深刻的神学意象：基督的得胜是通过受苦和牺牲实现的。

天上的歌声唱道："你配拿书卷，配揭开七印；因为你曾被杀，用自己的血从各族、各方、各民、各国中买了人来，叫他们归于神。"（5:9）`,
      content_en: `From chapter 4, John is caught up to heaven and sees the most magnificent vision — the heavenly throne and ceaseless worship.

"And they rest not day and night, saying, Holy, holy, holy, Lord God Almighty, which was, and is, and is to come." (Revelation 4:8, KJV)

Then John sees a scroll sealed with seven seals that no one can open. John weeps greatly until an elder comforts him: "the Lion of the tribe of Juda, the Root of David, hath prevailed to open the book' (5:5). But when John turns to look, he sees not a lion but "a Lamb as it had been slain' (5:6) — the conquering Lion appears as a slaughtered Lamb. This is Revelation's most profound theological image: Christ's victory is achieved through suffering and sacrifice.

The heavenly song declares: "Thou art worthy to take the book, and to open the seals thereof: for thou wast slain, and hast redeemed us to God by thy blood out of every kindred, and tongue, and people, and nation." (5:9)`
    },
    {
      title_zh: '三、审判的展开：七印、七号、七碗（6-18章）',
      title_en: 'III. The Unfolding of Judgment: Seven Seals, Seven Trumpets, Seven Bowls (Ch. 6-18)',
      content_zh: `启示录的中间部分（6-18章）是三组渐次加强的审判异象：七印（6-8:1）、七号（8:2-11:19）、七碗（15-16章），中间穿插着教会与邪恶势力争战的异象（12-14章）。

羔羊揭开七印，每一个印带来一种灾难——征服、战争、饥荒、死亡。第五印揭开时，殉道者的灵魂在祭坛下呼喊："圣洁真实的主啊，你不审判住在地上的人，给我们伸流血的冤，要等到几时呢？"（6:10）——这是受苦教会的呼声，也是整卷启示录的核心问题：公义何时到来？

第七印引出七号，第七号引出七碗——审判一波比一波严厉，一轮比一轮彻底。但审判的目的不是毁灭，而是呼唤悔改："其余未曾被这些灾所杀的人仍旧不悔改"（9:20）——即使在审判中，恩典仍在呼唤。

第12章的异象揭示了宇宙性的争战：妇人（代表神的子民）生了一个男孩子（基督），大红龙（撒但）企图吞吃他，却被击败。"弟兄胜过他，是因羔羊的血和自己所见证的道"（12:11）——信徒在这场宇宙争战中的武器不是刀剑而是基督的血和信仰的见证。

大巴比伦（17-18章）代表了一切敌对神的世俗权力和经济体系的总和。她的倾覆是历史的必然："巴比伦大城倾倒了！倾倒了！"（18:2）世上的君王、商人为她的毁灭哀哭，因为他们从她那里得利——但天上却欢呼，因为神伸了他仆人被杀之冤。`,
      content_en: `The central section of Revelation (ch. 6-18) consists of three progressively intensifying series of judgment visions: seven seals (6-8:1), seven trumpets (8:2-11:19), and seven bowls (15-16), interspersed with visions of the church battling evil forces (12-14).

The Lamb opens the seven seals, each bringing calamity — conquest, war, famine, death. When the fifth seal is opened, the souls of martyrs under the altar cry out: "How long, O Lord, holy and true, dost thou not judge and avenge our blood on them that dwell on the earth?" (6:10) — this is the cry of the suffering church and the core question of the entire book: when will justice come?

The seventh seal introduces the seven trumpets; the seventh trumpet introduces the seven bowls — each wave of judgment is more severe, each round more thorough. Yet the purpose of judgment is not destruction but a call to repentance: "And the rest of the men which were not killed by these plagues yet repented not" (9:20) — even amid judgment, grace still calls.

Chapter 12's vision reveals the cosmic conflict: a woman (representing God's people) bears a male child (Christ); the great red dragon (Satan) tries to devour him but is defeated. "And they overcame him by the blood of the Lamb, and by the word of their testimony" (12:11) — believers' weapons in this cosmic war are not swords but the blood of Christ and the witness of faith.

Great Babylon (ch. 17-18) represents the sum of all worldly powers and economic systems opposed to God. Her fall is historically inevitable: "Babylon the great is fallen, is fallen" (18:2). Earth's kings and merchants mourn her destruction because they profited from her — but heaven rejoices, for God has avenged the blood of His servants.`
    },
    {
      title_zh: '四、基督的最终得胜（19-20章）',
      title_en: 'IV. The Final Victory of Christ (Ch. 19-20)',
      content_zh: `巴比伦倾覆后，天上响起哈利路亚大合唱——这个词在新约中只出现在启示录19章。"哈利路亚！因为主我们的神、全能者作王了。我们要欢喜快乐，将荣耀归给他。因为羔羊婚娶的时候到了；新妇也自己预备好了"（19:6-7）。教会（新妇）等候了漫长的世代，如今终于迎来了与基督（新郎）永远联合的时刻。

第19章描绘了基督以万王之王的身份再来："我观看，见天开了。有一匹白马，骑在马上的称为诚信真实，他审判、争战都按着公义……在他衣服和大腿上有名写着说：万王之王，万主之主"（19:11, 16）。兽和假先知被擒拿，扔进烧着硫磺的火湖里（19:20）。

第20章论千年国度和最终审判。关于千年国度（20:1-6），改革宗传统中有不同的理解——前千禧年主义认为基督将在千年国度之前再来统治地上，无千禧年主义（amillennialism）认为千年象征基督从升天到再来之间的整个教会时代。无论哪种理解，核心真理是一致的：基督必要得胜，撒但必要被审判。

白色大宝座的审判（20:11-15）是历史的终审法庭。"死了的人都凭着这些案卷所记载的，照他们所行的受审判"（20:12）。"若有人名字没记在生命册上，他就被扔在火湖里"（20:15）。"生命册"——决定永恒命运的不是人的行为（行为只是审判的证据），而是名字是否在羔羊生命册上——这是恩典的主权。`,
      content_en: `After Babylon's fall, heaven erupts in a Hallelujah chorus — this word appears in the New Testament only in Revelation 19. "Alleluia: for the Lord God omnipotent reigneth. Let us be glad and rejoice, and give honour to him: for the marriage of the Lamb is come, and his wife hath made herself ready" (19:6-7). The church (the bride) has waited through long ages; now comes the moment of eternal union with Christ (the bridegroom).

Chapter 19 depicts Christ returning as King of kings: "And I saw heaven opened, and behold a white horse; and he that sat upon him was called Faithful and True, and in righteousness he doth judge and make war... And he hath on his vesture and on his thigh a name written, KING OF KINGS, AND LORD OF LORDS" (19:11, 16). The beast and the false prophet are captured and cast into the lake of fire burning with brimstone (19:20).

Chapter 20 addresses the millennial kingdom and the final judgment. Regarding the millennium (20:1-6), the Reformed tradition includes different views — premillennialism holds that Christ will return before the thousand years to reign on earth, while amillennialism understands the thousand years as symbolizing the entire church age from Christ's ascension to His return. Whichever interpretation, the core truth is the same: Christ will triumph, and Satan will be judged.

The great white throne judgment (20:11-15) is history's final court. "And the dead were judged out of those things which were written in the books, according to their works" (20:12). "And whosoever was not found written in the book of life was cast into the lake of fire" (20:15). The "book of life" — eternal destiny is determined not by human works (works are merely evidence at the judgment) but by whether one's name is in the Lamb's book of life — this is the sovereignty of grace.`
    },
    {
      title_zh: '五、新天新地：万物更新的盼望（21-22章）',
      title_en: 'V. New Heaven and New Earth: The Hope of All Things Made New (Ch. 21-22)',
      content_zh: `启示录最后两章是全部圣经最荣耀的异象——新天新地。

"我又看见一个新天新地；因为先前的天地已经过去了，海也不再有了。我又看见圣城新耶路撒冷由神那里从天而降，预备好了，就如新妇妆饰整齐，等候丈夫。我听见有大声音从宝座出来说：看哪，神的帐幕在人间。他要与人同住，他们要作他的子民。神要亲自与他们同在，作他们的神。神要擦去他们一切的眼泪；不再有死亡，也不再有悲哀、哭号、疼痛，因为以前的事都过去了。"（21:1-4）

"And I saw a new heaven and a new earth: for the first heaven and the first earth were passed away; and there was no more sea. And I John saw the holy city, new Jerusalem, coming down from God out of heaven, prepared as a bride adorned for her husband. And I heard a great voice out of heaven saying, Behold, the tabernacle of God is with men, and he will dwell with them, and they shall be his people, and God himself shall be with them, and be their God. And God shall wipe away all tears from their eyes; and there shall be no more death, neither sorrow, nor crying, neither shall there be any more pain: for the former things are passed away." (Revelation 21:1-4, KJV)

"神的帐幕在人间"——创世记中人因罪被赶出伊甸园、与神隔绝；启示录中神亲自来到人中间、永远同住。圣经以失去乐园开始，以得回乐园结束——但新的乐园不是回到伊甸，而是远超伊甸。新耶路撒冷里没有圣殿，"因主神全能者和羔羊为城的殿"（21:22）。不需要日月光照，"因有神的荣耀光照，又有羔羊为城的灯"（21:23）。生命河从神和羔羊的宝座流出，生命树每月结果，"树上的叶子乃为医治万民"（22:2）——创世记3章因罪失去的生命树，在这里永远向人敞开。

坐宝座的说："看哪，我将一切都更新了！"（21:5）——不是废弃旧造，而是更新一切。"更新"表明受造界不是被丢弃，而是被救赎和荣耀化。这与改革宗的创造神学一致：物质世界是好的（创1:31），罪使它堕落，但基督的救赎延伸到整个受造界（罗8:19-22），最终万物都要在基督里同归于一（弗1:10）。

全部圣经以最简短、最迫切的祷告结束："主耶稣啊，我愿你来！"（22:20）这不只是约翰个人的呼声，而是历世历代每一个蒙恩之人最深处的盼望——在这个充满眼泪、死亡和痛苦的世界里，我们盼望那一天的到来，"以前的事都过去了"。`,
      content_en: `The final two chapters of Revelation present the most glorious vision in all of Scripture — the new heaven and new earth.

"And I saw a new heaven and a new earth: for the first heaven and the first earth were passed away; and there was no more sea. And I John saw the holy city, new Jerusalem, coming down from God out of heaven, prepared as a bride adorned for her husband. And I heard a great voice out of heaven saying, Behold, the tabernacle of God is with men, and he will dwell with them, and they shall be his people, and God himself shall be with them, and be their God. And God shall wipe away all tears from their eyes; and there shall be no more death, neither sorrow, nor crying, neither shall there be any more pain: for the former things are passed away." (Revelation 21:1-4, KJV)

"The tabernacle of God is with men" — in Genesis, humanity was expelled from Eden and separated from God because of sin; in Revelation, God Himself comes to dwell among men forever. The Bible begins with Paradise lost and ends with Paradise regained — but the new Paradise is not a return to Eden but far beyond it. The New Jerusalem has no temple, "for the Lord God Almighty and the Lamb are the temple of it" (21:22). No sun or moon is needed, "for the glory of God did lighten it, and the Lamb is the light thereof" (21:23). The river of life flows from the throne of God and of the Lamb, the tree of life bears fruit every month, and "the leaves of the tree were for the healing of the nations" (22:2) — the tree of life lost in Genesis 3 because of sin is here forever open to humanity.

He that sat upon the throne said, "Behold, I make all things new" (21:5) — not discarding the old creation but renewing all things. "New" indicates that the created order is not abandoned but redeemed and glorified. This aligns with Reformed creation theology: the material world is good (Gen. 1:31), sin caused its fall, but Christ's redemption extends to the entire created order (Rom. 8:19-22), and ultimately all things are summed up in Christ (Eph. 1:10).

All of Scripture concludes with the shortest, most urgent prayer: "Even so, come, Lord Jesus" (22:20). This is not merely John's personal cry but the deepest hope of every person saved by grace in every age — in this world full of tears, death, and pain, we long for that day when "the former things are passed away."`
    }
  ];

const overview = {
  zh: `启示录是圣经的最后一卷书，也是新约唯一的启示文学。使徒约翰因信仰被流放到拔摩海岛，在那里领受了关于基督最终得胜的异象。全书的核心信息是：基督已经得胜，正在得胜，将来必要完全得胜。历史不是循环往复的，而是向着一个目标前进——新天新地，神与人永远同在。对于正在受苦的教会，启示录说：忍耐到底的必得冠冕。`,
  en: `Revelation is the last book of the Bible and the only apocalyptic literature in the New Testament. The apostle John, exiled to the island of Patmos for his faith, received visions of Christ's ultimate victory. The central message: Christ has conquered, is conquering, and will completely conquer. History is not cyclical but progresses toward one goal — a new heaven and new earth, where God dwells with humanity forever. To the suffering church, Revelation declares: those who endure to the end will receive the crown.`,
};

const outline = [
  ["1章", `基督的荣耀显现`, "Ch. 1", `The Glorious Appearing of Christ`],
  ["2-3章", `给七教会的信`, "Ch. 2–3", `Letters to the Seven Churches`],
  ["4-5章", `天上的宝座与羔羊`, "Ch. 4–5", `The Throne in Heaven and the Lamb`],
  ["6章", `六印：审判开始`, "Ch. 6", `The Six Seals: Judgment Begins`],
  ["7章", `十四万四千人受印`, "Ch. 7", `The 144,000 Sealed`],
  ["8-9章", `七号：更深的审判`, "Ch. 8–9", `The Seven Trumpets: Deeper Judgment`],
  ["10-11章", `小书卷与两个见证人`, "Ch. 10–11", `The Little Scroll and Two Witnesses`],
  ["12章", `妇人与龙`, "Ch. 12", `The Woman and the Dragon`],
  ["13章", `两个兽`, "Ch. 13", `The Two Beasts`],
  ["14章", `羔羊与收割`, "Ch. 14", `The Lamb and the Harvest`],
  ["15-16章", `七碗：最后的灾`, "Ch. 15–16", `The Seven Bowls: Final Plagues`],
  ["17-18章", `大巴比伦的倾覆`, "Ch. 17–18", `The Fall of Babylon the Great`],
  ["19章", `基督再来与最终得胜`, "Ch. 19", `Christ's Return and Final Victory`],
  ["20章", `千年国度与最后审判`, "Ch. 20", `The Millennial Kingdom and Final Judgment`],
  ["21-22章", `新天新地与新耶路撒冷`, "Ch. 21–22", `The New Heaven, New Earth, and New Jerusalem`],
];


const keyVerse = {
  zh: `"看哪，神的帐幕在人间。他要与人同住，他们要作他的子民。神要亲自与他们同在，作他们的神。"（启示录 21:3）`,
  en: `"Behold, the tabernacle of God is with men, and he will dwell with them, and they shall be his people, and God himself shall be with them, and be their God." (Revelation 21:3, KJV)`,
};

const info = { nameZh: `启示录`, nameEn: `Revelation`, author: `使徒约翰`, date: `约公元95年`, chapters: `22章`, backHref: `/new-testament/revelation`, backLabel: `启示文学`, bibleId: `REV` };

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
