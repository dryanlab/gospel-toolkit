'use client';
import Link from 'next/link';
import SpeakButton from '@/components/SpeakButton';
import { useState } from 'react';

const sections = [
  {
    title_zh: `一、所罗门与圣殿（1-9章）`,
    title_en: `I. Solomon and the Temple (Ch. 1–9)`,
    content_zh: `历代志下前九章聚焦所罗门建造圣殿的全过程。与列王纪上不同，历代志下几乎不提所罗门的堕落（仅一笔带过），而将重心完全放在圣殿——因为对被掳归回、正在重建第二圣殿的读者来说，这才是最需要学习的。

献殿礼（5-7章）是全书最辉煌的场景。当祭司们从至圣所出来，歌唱的利未人和一百二十个吹号的祭司一同发声赞美耶和华，"耶和华的荣光充满了神的殿"（5:14）。云彩充满殿到一个地步，祭司都不能站立供职。这是何等壮观的敬拜！

所罗门的献殿祷告后，神在夜间显现，说出了旧约中最著名的应许之一："这称为我名下的子民，若是自卑、祷告，寻求我的面，转离他们的恶行，我必从天上垂听，赦免他们的罪，医治他们的地"（7:14）。这节经文成为历代信徒复兴祷告的根基。

示巴女王来访（9章）证实了所罗门的荣耀。但读者知道，这一切辉煌将因背约而失去——第二圣殿的重建者更应珍惜与神立约的关系。`,
    content_en: `The first nine chapters of 2 Chronicles focus on Solomon's construction of the temple. Unlike 1 Kings, 2 Chronicles barely mentions Solomon's apostasy (only in passing), placing the weight entirely on the temple — for readers who had returned from exile and were rebuilding the Second Temple, this was the essential lesson.

The dedication ceremony (ch. 5–7) is the most magnificent scene in the book. When the priests came out of the Holy of Holies, the Levite singers and 120 priests with trumpets raised their voices together praising the LORD, and "the glory of the LORD had filled the house of God" (5:14). The cloud so filled the house that the priests could not stand to minister. What spectacular worship!

After Solomon's dedicatory prayer, God appeared to him at night, speaking one of the Old Testament's most famous promises: "If my people, which are called by my name, shall humble themselves, and pray, and seek my face, and turn from their wicked ways; then will I hear from heaven, and will forgive their sin, and will heal their land" (7:14). This verse has become the foundation of revival prayers through the ages.

The Queen of Sheba's visit (ch. 9) confirmed Solomon's glory. But readers know all this splendor would be lost through covenant-breaking — the builders of the Second Temple should all the more cherish their covenant relationship with God.`,
  },
  {
    title_zh: `二、王国分裂与早期诸王（10-16章）`,
    title_en: `II. The Kingdom Divided and Early Kings (Ch. 10–16)`,
    content_zh: `王国分裂后，历代志下只关注南国犹大（北国以色列几乎不被提及）。这几章记载了犹大最初几位君王的治理。

罗波安拒绝采纳长老的劝告，用严厉的话回应百姓，导致十个支派脱离（10章）。然而历代志的记载比列王纪更有恩典的色彩——罗波安虽然失去了北方，但当先知示玛雅宣告"这事出于我"时，他们就顺服了（11:4）。罗波安起初"行善"，"因他立定心意寻求耶和华"（12:14原文），但后来"离弃耶和华的律法"（12:1），遭到埃及示撒的入侵。

亚比雅（13章）虽然短暂在位，却在战场上发表了一篇精彩的神学演说，宣告犹大与耶和华的盟约关系，大胜耶罗波安的军队。

亚撒（14-16章）是早期的改革王。他向神祷告："耶和华啊，惟有你能帮助软弱的，胜过强盛的"（14:11），大胜古实百万军兵。他除去偶像，甚至废了太后玛迦的位（15:16）。但晚年他依靠亚兰王而非信靠神（16:7），先知哈拿尼责备他说"你这事行得愚昧"；亚撒竟将先知下在监里（16:10），甚至在病中也不求耶和华（16:12）。

亚撒的一生是全书主题的缩影：初行善而终行恶。起初的忠信不能保证终身的敬虔——"你务要至死忠心"（启2:10）。`,
    content_en: `After the kingdom divided, 2 Chronicles focuses exclusively on southern Judah (northern Israel is barely mentioned). These chapters record the reigns of Judah's earliest kings.

Rehoboam rejected the elders' counsel and answered the people harshly, causing ten tribes to secede (ch. 10). Yet the Chronicler's account has more grace than Kings — though Rehoboam lost the north, when the prophet Shemaiah declared "This thing is done of me," they obeyed (11:4). Rehoboam initially "did good," for he "prepared his heart to seek the LORD" (12:14), but later "forsook the law of the LORD" (12:1), suffering invasion by Shishak of Egypt.

Abijah (ch. 13), though briefly reigning, delivered a brilliant theological speech on the battlefield, declaring Judah's covenant relationship with the LORD, and won a great victory over Jeroboam's forces.

Asa (ch. 14–16) was an early reforming king. He prayed: "LORD, it is nothing with thee to help, whether with many, or with them that have no power" (14:11), winning a great victory over a million Cushite troops. He removed idols and even deposed the queen mother Maachah (15:16). Yet in later years he relied on the king of Aram rather than trusting God (16:7); the prophet Hanani rebuked him — "thou hast done foolishly" — and Asa threw the prophet in prison (16:10), and even in illness "sought not to the LORD" (16:12).

Asa's life epitomizes the book's theme: beginning well but ending poorly. Initial faithfulness does not guarantee lifelong godliness — "be thou faithful unto death" (Rev 2:10).`,
  },
  {
    title_zh: `三、复兴与背叛的交替——从约沙法到亚哈斯（17-28章）`,
    title_en: `III. Cycles of Revival and Apostasy — From Jehoshaphat to Ahaz (Ch. 17–28)`,
    content_zh: `历代志下10-28章覆盖了犹大国约三百年的历史，核心主题是寻求神与离弃神的交替循环。

约沙法"寻求他父亲大卫初行的道，不寻求巴力"（17:4），神使他国力强盛。但他与北国亚哈联姻、联军，几乎丧命（18章）——先知耶户责备他"帮助恶人，爱那恨恶耶和华的人"（19:2）。好王犯错时，神用先知纠正，而非直接毁灭——这是恩典中的管教。

约阿施在大祭司耶何耶大的辅导下行正道、修复圣殿（24章），但耶何耶大死后，他竟转去拜偶像，甚至杀死耶何耶大的儿子撒迦利亚（24:21-22）——"没有自己的信仰根基，靠别人的信仰活着"是最危险的灵性状态。

乌西雅王"定意寻求神，神就使他亨通"（26:5），但后来他心高气傲，擅自进殿烧香（只有祭司才能做的事），当场被神击打长了大麻风（26:19-20）。恩赐和成功不是骄傲的资本——反而是最大的试探。

亚哈斯则是犹大最恶的王之一，"效法以色列诸王的所行"，甚至使儿子经火（28:3）。在他治下，犹大国力衰微到极点。历代志的评判逻辑始终如一：寻求神→蒙福；离弃神→遭灾。`,
    content_en: `2 Chronicles 10-28 covers roughly three hundred years of Judah's history, centering on the alternating cycle of seeking and forsaking God.

Jehoshaphat "sought the LORD God of his father, and walked in his commandments, and not after the doings of Israel" (17:4), and God made his kingdom strong. Yet his alliance by marriage with Ahab of the north nearly cost him his life (ch. 18) — the prophet Jehu rebuked him: "Shouldest thou help the ungodly, and love them that hate the LORD?" (19:2). When a good king erred, God corrected through prophets rather than immediate destruction — discipline within grace.

Joash did right under the guidance of Jehoiada the priest and repaired the temple (ch. 24), but after Jehoiada's death he turned to idolatry and even murdered Jehoiada's son Zechariah (24:21-22) — "living off another person's faith without one's own root" is the most dangerous spiritual condition.

King Uzziah "sought God... and God made him to prosper" (26:5), but later his heart grew proud and he presumed to burn incense in the temple (a priestly prerogative); God immediately struck him with leprosy (26:19-20). Gifts and success are not grounds for pride — they are, in fact, the greatest temptation.

Ahaz was one of Judah's most wicked kings, who "walked in the ways of the kings of Israel" and even made his children pass through fire (28:3). Under his reign, Judah declined to its lowest point. The Chronicler's evaluative logic is always consistent: seeking God brings blessing; forsaking God brings disaster.`,
  },
  {
    title_zh: `四、希西家与约西亚——最后的复兴（29-35章）`,
    title_en: `IV. Hezekiah and Josiah — The Final Revivals (Ch. 29–35)`,
    content_zh: `历代志下用大量篇幅记载了两次伟大的复兴——希西家的复兴（29-32章）和约西亚的改革（34-35章）。这两位王是犹大最后的光明。

希西家登基的第一件事就是"开了耶和华殿的门，重新修理"（29:3）。他恢复了被亚哈斯废弃的圣殿敬拜，并举行了一次空前的逾越节（30章）——甚至邀请已经灭亡的北国残余百姓来参加。有些人来了，虽然"没有自洁"，希西家就为他们祷告："凡预备了心去寻求主耶和华……的，虽没有照着圣所洁净之礼自洁，求至善的耶和华也饶恕他"（30:18-19）。神悦纳了——因为神看重的是心，不是仪式的完美。

当亚述大军压境，西拿基立的使者嘲笑耶和华时（32章），希西家"和先知以赛亚祈祷呼求天"（32:20），耶和华差遣使者击杀了十八万五千亚述军——信靠神的人在最大的危难中也不至绝望。

约西亚八岁登基，十六岁开始寻求神，二十岁开始洁净犹大（34:3）。在修理圣殿时发现了失落的律法书（34:14-15），约西亚听见律法的话就"撕裂衣服"痛悔（34:19）——他不是被别人劝说才悔改，而是听见神的话就立刻行动。这是真正对神话语的敬畏。`,
    content_en: `2 Chronicles devotes extensive space to two great revivals — Hezekiah's restoration (ch. 29-32) and Josiah's reform (ch. 34-35). These two kings were Judah's final lights.

Hezekiah's first act upon ascending the throne was to "open the doors of the house of the LORD, and repair them" (29:3). He restored the temple worship abandoned under Ahaz and held an unprecedented Passover (ch. 30) — even inviting remnant northerners to participate. Some came without proper purification, so Hezekiah prayed: "The good LORD pardon every one that prepareth his heart to seek God, the LORD God of his fathers, though he be not cleansed according to the purification of the sanctuary" (30:18-19). God accepted them — because God values the heart, not ritual perfection.

When the Assyrian army threatened and Sennacherib's envoy mocked the LORD (ch. 32), Hezekiah "and the prophet Isaiah prayed and cried to heaven" (32:20), and the LORD sent an angel who struck down 185,000 Assyrian soldiers — those who trust God need not despair even in the greatest danger.

Josiah became king at eight, began seeking God at sixteen, and started purifying Judah at twenty (34:3). During temple repairs, the lost Book of the Law was discovered (34:14-15); upon hearing the law's words, Josiah "rent his clothes" in grief (34:19) — he did not need to be persuaded by others but acted immediately upon hearing God's word. This is true reverence for the Word of God.`,
  },
  {
    title_zh: `五、被掳与盼望——居鲁士的诏书（36章）`,
    title_en: `V. Exile and Hope — The Edict of Cyrus (Ch. 36)`,
    content_zh: `历代志下最后一章以令人窒息的速度记载了犹大最后四个王的更替和耶路撒冷的陷落。约哈斯在位三个月，约雅敬十一年，约雅斤三个月零十天，西底家十一年——一个比一个更"行耶和华眼中看为恶的事"（36:5, 9, 12）。

"耶和华他们列祖的神因为爱惜自己的民和祂的居所，从早起来差遣使者去警戒他们。他们却嘻笑神的使者，藐视祂的言语，讥诮祂的先知，以致耶和华的忿怒向祂的百姓发作，无法可救"（36:15-16）——这是全旧约中最沉痛的总结之一。神的忍耐是真实的（"从早起来"差遣先知），但忍耐有尽头。

然而，历代志下没有停留在毁灭。最后两节记载了波斯王居鲁士的诏书："耶和华天上的神已将天下万国赐给我，又嘱咐我在犹大的耶路撒冷为祂建造殿宇。你们中间凡作祂子民的，可以上去。愿耶和华他的神与他同在"（36:23）。旧约的最后一个音符不是哀歌，而是盼望——"可以上去"。神的审判是真实的，但神的恢复同样是确定的。从灰烬中必有新生。`,
    content_en: `The final chapter of 2 Chronicles records with breathtaking speed the succession of Judah's last four kings and the fall of Jerusalem. Jehoahaz reigned three months, Jehoiakim eleven years, Jehoiachin three months and ten days, Zedekiah eleven years — each "did that which was evil in the sight of the LORD" (36:5, 9, 12).

"And the LORD God of their fathers sent to them by his messengers, rising up betimes, and sending; because he had compassion on his people, and on his dwelling place: But they mocked the messengers of God, and despised his words, and misused his prophets, until the wrath of the LORD arose against his people, till there was no remedy" (36:15-16) — this is one of the most sorrowful summaries in the entire Old Testament. God's patience was real ("rising up betimes" to send prophets), but patience has its limit.

Yet 2 Chronicles does not end in destruction. The final two verses record the edict of Cyrus king of Persia: "The LORD God of heaven hath given me all the kingdoms of the earth; and he hath charged me to build him an house in Jerusalem, which is in Judah. Who is there among you of all his people? The LORD his God be with him, and let him go up" (36:23). The Old Testament's final note is not a dirge but hope — "let him go up." God's judgment is real, but God's restoration is equally certain. From ashes, new life shall arise.`,
  },
];

const overview = {
  zh: `历代志下记载了从所罗门到被掳巴比伦的历史（约公元前970-586年），但从祭司和敬拜的视角重新讲述。全书36章可分为三大段：所罗门与圣殿（1-9章）、犹大诸王（10-35章）、被掳与居鲁士诏书（36章）。

历代志下的核心信息可用代下7:14概括："若是自卑、祷告，寻求我的面，转离他们的恶行"——每一位犹大王的兴衰都在印证这个原则。敬虔的王带来祝福和复兴，悖逆的王招致审判和灾难。但即使在最黑暗的被掳中，神仍然信守祂的约，开启归回之路。`,
  en: `2 Chronicles records history from Solomon to the Babylonian exile (c. 970–586 BC), retold from a priestly and liturgical perspective. Its 36 chapters divide into: Solomon and the temple (ch. 1–9), Judah's kings (ch. 10–35), and exile with Cyrus's edict (ch. 36).

The core message is encapsulated in 2 Chronicles 7:14: "If my people shall humble themselves, and pray, and seek my face, and turn from their wicked ways." Every king's rise and fall confirms this principle. Godly kings bring blessing and revival; rebellious kings invite judgment. Yet even in the darkest exile, God remained faithful to His covenant, opening the way home.`,
};

const outline = [
  ["1章", "所罗门求智慧", "Ch. 1", "Solomon's Wisdom"],
  ["2-4章", "圣殿建造", "Ch. 2–4", "Building the Temple"],
  ["5-7章", "献殿礼与神的应许", "Ch. 5–7", "Dedication; God's Promise"],
  ["8-9章", "所罗门的荣耀", "Ch. 8–9", "Solomon's Glory"],
  ["10-12章", "王国分裂与罗波安", "Ch. 10–12", "Kingdom Divided; Rehoboam"],
  ["13-16章", "亚比雅与亚撒", "Ch. 13–16", "Abijah and Asa"],
  ["17-20章", "约沙法", "Ch. 17–20", "Jehoshaphat"],
  ["21-25章", "从约兰到亚玛谢", "Ch. 21–25", "Jehoram to Amaziah"],
  ["26-28章", "乌西雅、约坦、亚哈斯", "Ch. 26–28", "Uzziah, Jotham, Ahaz"],
  ["29-32章", "希西家的改革", "Ch. 29–32", "Hezekiah's Reform"],
  ["33章", "玛拿西的悔改", "Ch. 33", "Manasseh's Repentance"],
  ["34-35章", "约西亚的改革", "Ch. 34–35", "Josiah's Reform"],
  ["36章", "末代诸王与居鲁士诏书", "Ch. 36", "Last Kings; Edict of Cyrus"],
];

const theology = {
  title_zh: `核心神学：圣殿、复兴与被掳的教训`,
  title_en: `Core Theology: Temple, Revival, and the Lessons of Exile`,
  content_zh: `历代志下从所罗门建殿开始，到古列王下令归回结束，全书以圣殿为中心轴，展现了一个关键的神学真理：国家的兴衰取决于对神的忠心。

第一，代下7:14——复兴的应许。"这称为我名下的子民，若是自卑、祷告、寻求我的面、转离他们的恶行，我必从天上垂听，赦免他们的罪，医治他们的地"（7:14）。这是全书最著名的经文，也是所有复兴运动的圣经基础。注意四个条件：自卑、祷告、寻求、转离恶行——复兴不是情感的狂热，而是真实的悔改。

第二，改革宗王的模式。历代志下记录了四次重大改革：亚撒（14-16章）、约沙法（17-20章）、希西家（29-32章）、约西亚（34-35章）。每次改革都有共同要素：清除偶像、恢复律法、重建圣殿敬拜。但每次改革也都不持久——因为改革只触及制度和行为，没有触及人心深处。这证明了耶利米书31:33新约应许的必要性："我要将我的律法放在他们里面，写在他们心上。"

第三，约沙法的祷告——争战属于耶和华。面对摩押和亚扪的联军，约沙法的祷告是信心的典范："我们无力抵挡这来攻击我们的大军，我们也不知道怎样行，我们的眼目单仰望你"（20:12）。神的回答是："这次争战你们不用打仗，只要摆阵站着，看耶和华为你们施行拯救"（20:17）。这是福音的缩影——救恩完全是神的工作，我们只需信靠和仰望。

第四，全书的最后一节指向盼望。"波斯王古列如此说：耶和华天上的神已将天下万国赐给我，又嘱咐我在犹大的耶路撒冷为祂建造殿宇。你们中间凡作祂子民的，可以上去"（36:23）。被掳不是结局，归回是新的开始。甚至外邦王古列也成了神旨意的工具（赛45:1称古列为神的"受膏者"）——没有什么势力能拦阻神的救赎计划。`,
  content_en: `Second Chronicles begins with Solomon building the temple and ends with Cyrus's decree of return. The temple serves as the book's central axis, demonstrating a crucial theological truth: the rise and fall of nations depends on faithfulness to God.

First, 2 Chronicles 7:14 — the promise of revival. "If my people, which are called by my name, shall humble themselves, and pray, and seek my face, and turn from their wicked ways; then will I hear from heaven, and will forgive their sin, and will heal their land" (7:14). This is the book's most famous verse and the biblical foundation for every revival movement. Note the four conditions: humble, pray, seek, turn — revival is not emotional frenzy but genuine repentance.

Second, the pattern of reforming kings. Second Chronicles records four major reforms: Asa (ch. 14-16), Jehoshaphat (ch. 17-20), Hezekiah (ch. 29-32), and Josiah (ch. 34-35). Each reform shares common elements: removing idols, restoring the law, rebuilding temple worship. But each reform also proved impermanent — because reform only touches institutions and behavior, not the depths of the heart. This proves the necessity of the new covenant promise in Jeremiah 31:33: "I will put my law in their inward parts, and write it in their hearts."

Third, Jehoshaphat's prayer — the battle belongs to the LORD. Facing the combined armies of Moab and Ammon, Jehoshaphat's prayer is a model of faith: "We have no might against this great company that cometh against us; neither know we what to do: but our eyes are upon thee" (20:12). God's answer: "Ye shall not need to fight in this battle: set yourselves, stand ye still, and see the salvation of the LORD" (20:17). This is the gospel in miniature — salvation is entirely God's work; we need only trust and look.

Fourth, the book's final verse points to hope. "Thus saith Cyrus king of Persia, All the kingdoms of the earth hath the LORD God of heaven given me; and he hath charged me to build him an house in Jerusalem. Who is there among you of all his people? The LORD his God be with him, and let him go up" (36:23). Exile is not the end; return is a new beginning. Even the Gentile king Cyrus became an instrument of God's will (Isa 45:1 calls Cyrus God's "anointed") — no power can thwart God's redemptive plan.`,
};

const keyVerse = {
  zh: `"这称为我名下的子民，若是自卑、祷告，寻求我的面，转离他们的恶行，我必从天上垂听，赦免他们的罪，医治他们的地。"（历代志下 7:14）`,
  en: `"If my people, which are called by my name, shall humble themselves, and pray, and seek my face, and turn from their wicked ways; then will I hear from heaven, and will forgive their sin, and will heal their land." (2 Chronicles 7:14)`,
};

const info = { nameZh: `历代志下`, nameEn: `2 Chronicles`, author: `传统认为以斯拉`, date: `约公元前450-400年`, chapters: `36章`, backHref: `/old-testament/historical`, backLabel: `历史书`, bibleId: `2CH` };


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