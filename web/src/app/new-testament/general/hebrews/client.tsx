'use client';
import Link from 'next/link';
import SpeakButton from '@/components/SpeakButton';
import { useState } from 'react';

const sections = [
    {
      title_zh: '一、基督的超越：比先知、天使、摩西更尊贵（1-4章）',
      title_en: 'I. The Supremacy of Christ: Greater Than Prophets, Angels, and Moses (Ch. 1-4)',
      content_zh: `希伯来书开篇即宣告全书主题——基督超越旧约的一切：

"神既在古时藉着众先知多次多方地晓谕列祖，就在这末世藉着他儿子晓谕我们；又早已立他为承受万有的，也曾藉着他创造诸世界。他是神荣耀所发的光辉，是神本体的真像，常用他权能的命令托住万有。他洗净了人的罪，就坐在高天至大者的右边。"（希伯来书 1:1-3）

这三节经文是全圣经中对基督位格最庄严的描述之一。七个描述层层递进：被立为万有的承受者、创造的中保、神荣耀的光辉、神本体的真像、以权能托住万有、洗净人的罪、坐在至大者右边。韦敏斯德信条第八章"论中保基督"的圣经根基正在这里。

作者面对的是有回归犹太教危险的希伯来信徒——他们在逼迫下动摇，开始怀念旧约礼仪的熟悉感。作者的论证策略是逐一比较：基督比天使更尊贵——"他所承受的名，既比天使的名更尊贵，就远超过天使"（1:4）；但基督也取了人性——"他并不救拔天使，乃是救拔亚伯拉罕的后裔。所以他凡事该与他的弟兄相同"（2:16-17）。

基督比摩西更尊贵——摩西在神的全家忠心是作仆人，"但基督为儿子，治理神的家"（3:5-6）。仆人忠于别人的家，儿子拥有自己的家。然后第三四章插入严厉的警告：不要像旷野中的以色列人那样，因不信而不得进入安息。"今日你们若听他的话，就不可硬着心"（3:15）。

"因我们的大祭司并非不能体恤我们的软弱。他也曾凡事受过试探，与我们一样，只是他没有犯罪。所以我们只管坦然无惧地来到施恩的宝座前"（4:15-16）——基督不是遥远的神，而是亲历人间疾苦的大祭司。我们可以放胆来到他面前。`,
      content_en: `Hebrews opens by declaring its thesis — Christ surpasses everything in the Old Testament:

"God, who at sundry times and in divers manners spake in time past unto the fathers by the prophets, Hath in these last days spoken unto us by his Son, whom he hath appointed heir of all things, by whom also he made the worlds; Who being the brightness of his glory, and the express image of his person, and upholding all things by the word of his power, when he had by himself purged our sins, sat down on the right hand of the Majesty on high." (Hebrews 1:1-3, KJV)

These three verses are among the most majestic descriptions of Christ's person in all of Scripture. Seven attributes build progressively: appointed heir of all things, mediator of creation, brightness of God's glory, express image of His person, upholding all things by His word, purging sins, seated at the right hand of the Majesty on high. The Westminster Confession chapter 8, "Of Christ the Mediator," finds its biblical ground here.

The author addressed Hebrew believers in danger of returning to Judaism — wavering under persecution and growing nostalgic for Old Testament ritual. His strategy is systematic comparison: Christ is greater than angels — "Being made so much better than the angels, as he hath by inheritance obtained a more excellent name than they" (1:4); yet Christ also took human nature — "For verily he took not on him the nature of angels; but he took on him the seed of Abraham. Wherefore in all things it behoved him to be made like unto his brethren" (2:16-17).

Christ is greater than Moses — Moses was faithful as a servant in God's house, "but Christ as a son over his own house" (3:5-6). A servant is faithful in another's house; a Son rules His own. Then chapters 3-4 interject a stern warning: do not be like Israel in the wilderness who through unbelief failed to enter rest. "To day if ye will hear his voice, harden not your hearts" (3:15).

"For we have not an high priest which cannot be touched with the feeling of our infirmities; but was in all points tempted like as we are, yet without sin. Let us therefore come boldly unto the throne of grace" (4:15-16) — Christ is not a distant God but a High Priest who personally experienced human suffering. We may approach Him with confidence.`
    },
    {
      title_zh: '二、照着麦基洗德的等次永远为祭司（5-7章）',
      title_en: 'II. A Priest Forever After the Order of Melchizedek (Ch. 5-7)',
      content_zh: `希伯来书最独特的神学贡献是麦基洗德等次的祭司论。旧约的利未祭司按亚伦的等次，世代交替，需要天天献祭——先为自己的罪，再为百姓的罪。但基督是按另一个等次——麦基洗德的等次为祭司。

麦基洗德在创世记14:18-20中突然出现又消失：他是撒冷王、至高神的祭司，亚伯拉罕向他献上十分之一。希伯来书的作者从他身上看到了基督的预表："他无父，无母，无族谱，无生之始，无命之终，乃是与神的儿子相似"（7:3）。这不是说麦基洗德真的没有父母，而是说圣经刻意不记载他的家谱——因为他预表的是一位不需要家谱来证明资格的永恒祭司。

亚伯拉罕向麦基洗德献十分之一，证明麦基洗德的地位高于亚伯拉罕；而利未族是亚伯拉罕的后裔——"那还未生的利未，也可以说是藉着亚伯拉罕纳了十分之一"（7:9-10）。所以麦基洗德的等次高于利未的等次，基督的祭司职分高于亚伦的祭司职分。

"从前百姓在利未人祭司职任以下受律法，倘若藉这职任能得完全，又何用另外兴起一位祭司，照麦基洗德的等次，不照亚伦的等次呢？"（7:11）如果旧约的制度是完全的，就不需要新的了。基督的出现本身就证明旧约制度的不完全。

"他是长远活着，替他们祈求。像这样圣洁、无邪恶、无玷污、远离罪人、高过诸天的大祭司，原是与我们合宜的。他不像那些大祭司，每日必须先为自己的罪，后为百姓的罪献祭；因为他只一次将自己献上，就把这事成全了"（7:25-27）。基督的献祭一次完成，永远有效。`,
      content_en: `Hebrews' most distinctive theological contribution is its Melchizedekian priesthood theology. Old Testament Levitical priests served according to Aaron's order — succeeding one another generationally, needing to offer sacrifices daily, first for their own sins and then for the people's. But Christ is a priest of another order — the order of Melchizedek.

Melchizedek appears and disappears suddenly in Genesis 14:18-20: king of Salem, priest of the most high God; Abraham gave him tithes. The author of Hebrews sees in him a type of Christ: "Without father, without mother, without descent, having neither beginning of days, nor end of life; but made like unto the Son of God" (7:3). This does not mean Melchizedek literally had no parents, but that Scripture deliberately omits his genealogy — because he typifies an eternal priest who needs no genealogy to qualify.

Abraham tithed to Melchizedek, proving Melchizedek's rank above Abraham; Levi descended from Abraham — "Levi also, who receiveth tithes, payed tithes in Abraham" (7:9-10). Therefore Melchizedek's order is greater than Levi's, and Christ's priesthood is greater than Aaron's.

"If therefore perfection were by the Levitical priesthood, (for under it the people received the law,) what further need was there that another priest should rise after the order of Melchisedec, and not be called after the order of Aaron?" (7:11) If the old system were perfect, a new one would not be needed. Christ's very appearance proves the old system's incompleteness.

"He ever liveth to make intercession for them. For such an high priest became us, who is holy, harmless, undefiled, separate from sinners, and made higher than the heavens; Who needeth not daily, as those high priests, to offer up sacrifice, first for his own sins, and then for the people's: for this he did once, when he offered up himself" (7:25-27). Christ's sacrifice was made once and is effective forever.`
    },
    {
      title_zh: '三、更美的约、更美的祭、更美的路（8-10章）',
      title_en: 'III. A Better Covenant, a Better Sacrifice, a Better Way (Ch. 8-10)',
      content_zh: `希伯来书8-10章是全书神学论证的高峰。"更美"（kreitton）是关键词——更美的约、更美的应许、更美的祭物、更美的盼望。

"但如今耶稣所得的职任是更美的，正如他作更美之约的中保；这约原是凭更美之应许立的"（8:6）。作者引用耶利米书31:31-34的新约预言——神说"我要将我的律法放在他们里面，写在他们心上"（8:10）。旧约写在石版上，新约写在心上；旧约要求人遵守，新约是神亲自改变人心。

旧约的帐幕和祭物"不过是天上事的形状和影像"（8:5）。地上的至圣所是天上真帐幕的复制品，大祭司每年一次进入至圣所献血是基督一次进入天上的预表。"公牛和山羊的血断不能除罪"（10:4）——旧约的祭物只能暂时遮盖罪，不能真正除去罪。

"但基督献了一次永远的赎罪祭，就在神的右边坐下了"（10:12）。"坐下"是关键动作——旧约祭司从不坐下，因为他们的工作永远没完；基督坐下了，因为救赎的工作已经完成。"因为他一次献祭，便叫那得以成圣的人永远完全"（10:14）。

这引出了全书最重要的实际应用："弟兄们，我们既因耶稣的血得以坦然进入至圣所，是藉着他给我们开了一条又新又活的路，从幔子经过，这幔子就是他的身体"（10:19-20）。旧约只有大祭司一年一次能进至圣所，如今每个信徒都可以随时坦然进入。三个"我们应当"紧接其后：存着诚心和充足的信心来到神面前（10:22）、坚守所承认的指望（10:23）、彼此相顾激发爱心和善行（10:24）。`,
      content_en: `Hebrews 8-10 is the theological summit of the entire book. "Better" (kreitton) is the key word — a better covenant, better promises, a better sacrifice, a better hope.

"But now hath he obtained a more excellent ministry, by how much also he is the mediator of a better covenant, which was established upon better promises" (8:6). The author quotes Jeremiah 31:31-34's new covenant prophecy — God says, "I will put my laws into their mind, and write them in their hearts" (8:10). The old covenant was written on stone tablets, the new on hearts; the old required human obedience, the new is God Himself transforming the heart.

The old tabernacle and its sacrifices were merely "the example and shadow of heavenly things" (8:5). The earthly Holy of Holies was a copy of the true heavenly tabernacle; the high priest entering once a year with blood foreshadowed Christ's once-for-all entry into heaven itself. "For it is not possible that the blood of bulls and of goats should take away sins" (10:4) — Old Testament sacrifices could only temporarily cover sin, not truly remove it.

"But this man, after he had offered one sacrifice for sins for ever, sat down on the right hand of God" (10:12). "Sat down" is the key action — Old Testament priests never sat down because their work was never finished; Christ sat down because the work of redemption is complete. "For by one offering he hath perfected for ever them that are sanctified" (10:14).

This leads to the book's most important practical application: "Having therefore, brethren, boldness to enter into the holiest by the blood of Jesus, By a new and living way, which he hath consecrated for us, through the veil, that is to say, his flesh" (10:19-20). Under the old covenant only the high priest could enter the Holy of Holies once a year; now every believer may enter boldly at any time. Three "let us" exhortations follow: draw near with a true heart in full assurance of faith (10:22), hold fast the profession of hope (10:23), consider one another to provoke unto love and good works (10:24).`
    },
    {
      title_zh: '四、信心的名人堂：从亚伯到基督（11章）',
      title_en: 'IV. The Hall of Faith: From Abel to Christ (Ch. 11)',
      content_zh: `第11章是全圣经最著名的章节之一，被称为"信心名人堂"。开篇给出了信心的定义：

"信就是所望之事的实底，是未见之事的确据。"（11:1）

信心不是盲目的乐观，而是对看不见之事的确信——因为应许的那位是信实的。作者接着列举了一长串以"因着信"开头的见证：亚伯因着信献上更美的祭物（11:4）；以诺因着信被接去不至见死（11:5）；挪亚因着信造方舟（11:7）；亚伯拉罕因着信出去，"还不知往哪里去"（11:8）；摩西因着信离开埃及，"看为基督受的凌辱比埃及的财物更宝贵"（11:26）。

最令人动容的是11:13-16："这些人都是存着信心死的，并没有得着所应许的，却从远处望见，且欢喜迎接，又承认自己在世上是客旅，是寄居的……他们却羡慕一个更美的家乡，就是在天上的。所以神被称为他们的神，并不以为耻，因为他已经给他们预备了一座城。"他们在今生没有看见应许的实现，却仍然相信。这种超越可见世界的信心——不以地上的成就为满足，而以天上的家乡为盼望——是希伯来书对每一代信徒的呼召。

11:35-38的转折尤其震撼：信心不总是带来胜利，有人"忍受严刑，不肯苟且得释放"，有人"受戏弄、鞭打、捆锁、监禁"，有人"被石头打死，被锯锯死"。"本是世界不配有的人"——信心有时意味着在世上失去一切，却在永恒中得着一切。`,
      content_en: `Chapter 11 is one of the most famous in all of Scripture, known as the "Hall of Faith." It opens with faith's definition:

"Now faith is the substance of things hoped for, the evidence of things not seen." (Hebrews 11:1, KJV)

Faith is not blind optimism but conviction about unseen things — because the One who promised is faithful. The author then lists a long procession of witnesses, each beginning with "by faith": Abel by faith offered a more excellent sacrifice (11:4); Enoch by faith was translated that he should not see death (11:5); Noah by faith prepared an ark (11:7); Abraham by faith went out, "not knowing whither he went" (11:8); Moses by faith forsook Egypt, "esteeming the reproach of Christ greater riches than the treasures in Egypt" (11:26).

Most moving are 11:13-16: "These all died in faith, not having received the promises, but having seen them afar off, and were persuaded of them, and embraced them, and confessed that they were strangers and pilgrims on the earth... But now they desire a better country, that is, an heavenly: wherefore God is not ashamed to be called their God: for he hath prepared for them a city." They did not see the promise fulfilled in this life, yet they still believed. This faith that transcends the visible world — unsatisfied by earthly accomplishments, hoping for a heavenly homeland — is Hebrews' call to every generation of believers.

The turn in 11:35-38 is especially sobering: faith does not always bring victory. Some "were tortured, not accepting deliverance"; some "had trial of cruel mockings and scourgings, yea, moreover of bonds and imprisonment"; some "were stoned, they were sawn asunder." "Of whom the world was not worthy" — faith sometimes means losing everything in this world yet gaining everything in eternity.`
    },
    {
      title_zh: '五、仰望耶稣奔跑前程（12-13章）',
      title_en: 'V. Looking unto Jesus and Running the Race (Ch. 12-13)',
      content_zh: `第12章将信心名人堂的论述推向高潮——所有信心英雄都指向一个终极的榜样：

"我们既有这许多的见证人，如同云彩围着我们，就当放下各样的重担，脱去容易缠累我们的罪，存心忍耐，奔那摆在我们前头的路程，仰望为我们信心创始成终的耶稣。他因那摆在前面的喜乐，就轻看羞辱，忍受了十字架的苦难，便坐在神宝座的右边了。"（12:1-2）

信心的终极榜样不是11章的任何一位，而是耶稣——他是信心的"创始成终者"。"创始"意味着他开辟了信心之路，"成终"意味着他使信心达到完美。他因"摆在前面的喜乐"——就是拯救他的子民、与他们永远同在的喜乐——忍受了十字架。

12:4-11论神的管教。"主所爱的，他必管教"（12:6）。管教不是惩罚（基督已经承担了我们的刑罚），而是训练——像父亲训练儿子一样。"凡管教的事，当时不觉得快乐，反觉得愁苦；后来却为那经练过的人结出平安的果子，就是义"（12:11）。改革宗神学区分管教（discipline，为了成圣）和刑罚（punishment，为了公义）——基督徒所受的苦难是前者不是后者。

13章是实际的劝勉：弟兄相爱（13:1）、接待客旅（13:2）、婚姻圣洁（13:4）、不贪财（13:5）。"耶稣基督昨日、今日、一直到永远，是一样的"（13:8）——这位永不改变的基督是我们一切信心和盼望的根基。

全书以一个美丽的祝祷结束："但愿赐平安的神……在各样善事上成全你们，叫你们遵行他的旨意；又藉着耶稣基督在你们心里行他所喜悦的事。愿荣耀归给他，直到永永远远。阿们！"（13:20-21）`,
      content_en: `Chapter 12 brings the Hall of Faith to its climax — all the faith heroes point to one ultimate model:

"Wherefore seeing we also are compassed about with so great a cloud of witnesses, let us lay aside every weight, and the sin which doth so easily beset us, and let us run with patience the race that is set before us, Looking unto Jesus the author and finisher of our faith; who for the joy that was set before him endured the cross, despising the shame, and is set down at the right hand of the throne of God." (Hebrews 12:1-2, KJV)

Faith's ultimate model is not anyone in chapter 11 but Jesus — He is the "author and finisher" of faith. "Author" means He pioneered the way of faith; "finisher" means He brought faith to perfection. He endured the cross for "the joy that was set before him" — the joy of saving His people and being with them forever.

12:4-11 discusses God's discipline. "For whom the Lord loveth he chasteneth" (12:6). Discipline is not punishment (Christ already bore our penalty) but training — as a father trains his son. "Now no chastening for the present seemeth to be joyous, but grievous: nevertheless afterward it yieldeth the peaceable fruit of righteousness unto them which are exercised thereby" (12:11). Reformed theology distinguishes discipline (for sanctification) from punishment (for justice) — the Christian's suffering is the former, not the latter.

Chapter 13 offers practical exhortations: brotherly love (13:1), hospitality (13:2), marital purity (13:4), freedom from covetousness (13:5). "Jesus Christ the same yesterday, and to day, and for ever" (13:8) — this unchanging Christ is the foundation of all our faith and hope.

The book closes with a beautiful benediction: "Now the God of peace... Make you perfect in every good work to do his will, working in you that which is wellpleasing in his sight, through Jesus Christ; to whom be glory for ever and ever. Amen." (13:20-21)`
    }
  ];

const overview = {
  zh: `希伯来书是新约神学最深邃的书卷之一，其核心主题是基督的超越性——他超越旧约的一切中保制度，是"更美"的。作者对象是面临逼迫、有回归犹太教危险的希伯来基督徒，以系统的释经论证劝勉他们：基督是大祭司，一次献上的祭永远有效，旧约的祭司制度已经完成了它指向基督的使命。不要退后，要持守。`,
  en: `Hebrews is one of the most theologically profound books in the New Testament. Its central theme is the supremacy of Christ — He surpasses all of the Old Testament's mediatorial institutions, being "better." Written to Hebrew Christians facing persecution and in danger of returning to Judaism, the letter argues systematically: Christ is the High Priest whose once-for-all sacrifice is eternally effective, and the Old Testament's priestly system has fulfilled its mission of pointing to Christ. Do not fall back — hold fast.`,
};

const outline = [
  ["1章", `神子的超越：比天使更尊贵`, "Ch. 1", `The Son's Supremacy: Greater Than Angels`],
  ["2章", `道成肉身与受苦的救主`, "Ch. 2", `The Incarnation and the Suffering Savior`],
  ["3章", `比摩西更尊贵；不可心里刚硬`, "Ch. 3", `Greater Than Moses; Do Not Harden Your Hearts`],
  ["4章", `进入安息的应许与大祭司的体恤`, "Ch. 4", `The Promise of Rest and the Sympathetic High Priest`],
  ["5章", `照麦基洗德的等次`, "Ch. 5", `According to the Order of Melchisedec`],
  ["6章", `成熟的劝勉与不变的应许`, "Ch. 6", `A Call to Maturity and an Unchangeable Promise`],
  ["7章", `麦基洗德与永远的祭司职分`, "Ch. 7", `Melchisedec and the Eternal Priesthood`],
  ["8章", `更美的约与更美的中保`, "Ch. 8", `A Better Covenant and a Better Mediator`],
  ["9章", `旧约的预表与基督的血`, "Ch. 9", `Old Testament Types and the Blood of Christ`],
  ["10章", `一次献上的祭与坚守信心`, "Ch. 10", `The Once-for-All Sacrifice and Holding Fast to Faith`],
  ["11章", `信心名人堂`, "Ch. 11", `The Hall of Faith`],
  ["12章", `仰望耶稣，奔跑路程`, "Ch. 12", `Looking to Jesus, Running the Race`],
  ["13章", `实践的劝勉与最终祝福`, "Ch. 13", `Practical Exhortations and Final Blessing`],
];

const keyVerse = {
  zh: `"因我们的大祭司并非不能体恤我们的软弱。他也曾凡事受过试探，与我们一样，只是他没有犯罪。"（希伯来书 4:15）`,
  en: `"For we have not an high priest which cannot be touched with the feeling of our infirmities; but was in all points tempted like as we are, yet without sin." (Hebrews 4:15, KJV)`,
};

const info = { nameZh: `希伯来书`, nameEn: `Hebrews`, author: `不详（传统归于保罗）`, date: `约公元60-70年`, chapters: `13章`, backHref: `/new-testament/general`, backLabel: `普通书信`, bibleId: `HEB` };

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
