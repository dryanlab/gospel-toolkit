'use client';
import Link from 'next/link';
import SpeakButton from '@/components/SpeakButton';
import { useState } from 'react';

const sections = [
  {
    title_zh: `一、苦难中的安慰与使徒的心肠（1-2章）`,
    title_en: `I. Comfort in Suffering and the Apostle's Heart (Ch. 1-2)`,
    content_zh: `哥林多后书是保罗最私密的一封信——在这里我们看到的不是系统神学家，而是一个满身伤痕、心里流泪、却因神的安慰而刚强的牧者。

"愿颂赞归与我们的主耶稣基督的父神，就是发慈悲的父，赐各样安慰的神。我们在一切患难中，他就安慰我们，叫我们能用神所赐的安慰去安慰那遭各样患难的人"（1:3-4）。"安慰"（paraklesis）在开头的几节经文中出现了十次——保罗要告诉我们：安慰不是为了自己享受的，而是为了转给别人。你所经历的痛苦不是白受的，它使你成为安慰的管道。

保罗在亚细亚的苦难如此深重，"连活命的指望都绝了"（1:8）。但正是在绝望的深渊中，他学会了"不靠自己，只靠叫死人复活的神"（1:9）。这是十字架神学的核心体验：人的尽头是神的起头。韦敏斯德小要理问答第一问"人的首要目的是什么？"——答案是"荣耀神并永远以他为乐"——当人被剥夺了一切自足的资源后，才真正学会完全依靠神。

第2章揭示了保罗内心的挣扎：他写了一封"忧愁的信"给哥林多人（2:4），不是要叫他们忧愁，而是叫他们知道他格外的爱。那个犯了罪的人已经悔改了，保罗劝教会"倒不如赦免他、安慰他，免得他忧愁太过，甚至沉沦了"（2:7）。教会纪律的目的始终是恢复，不是定罪。赦免和管教是同一枚硬币的两面。`,
    content_en: `2 Corinthians is Paul's most personal letter — here we see not the systematic theologian but a wounded, weeping pastor made strong by God's comfort.

"Blessed be God, even the Father of our Lord Jesus Christ, the Father of mercies, and the God of all comfort; Who comforteth us in all our tribulation, that we may be able to comfort them which are in any trouble, by the comfort wherewith we ourselves are comforted of God" (1:3-4). "Comfort" (paraklesis) appears ten times in the opening verses — Paul is saying: comfort is not for your own enjoyment but for passing on. Your pain is not wasted; it makes you a channel of comfort.

Paul's suffering in Asia was so severe he "despaired even of life" (1:8). But in the abyss of despair, he learned to rely "not in ourselves, but in God which raiseth the dead" (1:9). This is the core experience of cross theology: man's extremity is God's opportunity. The Westminster Shorter Catechism Q1 asks "What is the chief end of man?" — "To glorify God and enjoy Him forever" — only when stripped of all self-sufficiency does one truly learn total dependence on God.

Chapter 2 reveals Paul's inner struggle: he wrote a "sorrowful letter" to the Corinthians (2:4), not to grieve them but to show his extraordinary love. The offender had repented, and Paul urges the church to "forgive him, and comfort him, lest perhaps such a one should be swallowed up with overmuch sorrow" (2:7). Church discipline always aims at restoration, not condemnation. Forgiveness and discipline are two sides of the same coin.`,
  },
  {
    title_zh: `二、新约职事的荣耀与瓦器中的宝贝（3-5章）`,
    title_en: `II. The Glory of the New Covenant Ministry and Treasure in Earthen Vessels (Ch. 3-5)`,
    content_zh: `第3-5章是保罗对新约职事最深刻的阐述。旧约的职事有荣光——摩西面上放光，以色列人不敢注视——但新约的职事有更大的荣光。"那字句是叫人死，精意是叫人活"（3:6）。律法定罪，圣灵赐生命；律法刻在石版上，圣灵写在心上。

"主就是那灵；主的灵在哪里，那里就得以自由。我们众人既然敞着脸得以看见主的荣光，好像从镜子里返照，就变成主的形状，荣上加荣，如同从主的灵变成的"（3:17-18）。旧约的帕子在基督里被除去了——信徒可以面对面注视神的荣耀，并且在注视中被改变。成圣不是靠人的努力挣扎，而是靠注视基督的荣耀而被圣灵渐渐更新。这是改革宗成圣观的核心：从"荣耀到荣耀"。

第4章引出了哥林多后书最伟大的意象之一："我们有这宝贝放在瓦器里，要显明这莫大的能力是出于神，不是出于我们"（4:7）。宝贝是福音的荣耀，瓦器是使徒软弱的身体。神故意将至高的宝贝放在至卑的容器里——这样任何人看到福音的大能就不会归功于传道人，而会归荣耀于神。"四面受敌，却不被困住；心里作难，却不至失望；遭逼迫，却不被丢弃；打倒了，却不至死亡"（4:8-9）。

"我们这至暂至轻的苦楚，要为我们成就极重无比、永远的荣耀"（4:17）。保罗把今生一切的苦难称为"至暂至轻"——不是因为苦难不真实，而是因为与永恒的荣耀相比，它轻如鸿毛。第5章以对永恒的盼望结束："我们原知道，我们这地上的帐棚若拆毁了，必得神所造，不是人手所造，在天上永存的房屋"（5:1）。`,
    content_en: `Chapters 3-5 contain Paul's most profound exposition of the new covenant ministry. The old covenant ministry had glory — Moses' face shone so brightly that the Israelites could not gaze upon it — but the new covenant's glory is far greater. "The letter killeth, but the spirit giveth life" (3:6). The law condemns; the Spirit gives life. The law was carved on stone tablets; the Spirit writes on hearts.

"Now the Lord is that Spirit: and where the Spirit of the Lord is, there is liberty. But we all, with open face beholding as in a glass the glory of the Lord, are changed into the same image from glory to glory, even as by the Spirit of the Lord" (3:17-18). The old covenant's veil is removed in Christ — believers can gaze directly upon God's glory and are transformed in the gazing. Sanctification comes not through human striving but through beholding Christ's glory and being gradually renewed by the Spirit. This is the heart of the Reformed view of sanctification: "from glory to glory."

Chapter 4 introduces one of 2 Corinthians' greatest images: "We have this treasure in earthen vessels, that the excellency of the power may be of God, and not of us" (4:7). The treasure is the gospel's glory; the earthen vessel is the apostle's weak body. God deliberately places the highest treasure in the lowest vessel — so that anyone seeing the gospel's power will credit not the preacher but God. "We are troubled on every side, yet not distressed; we are perplexed, but not in despair; Persecuted, but not forsaken; cast down, but not destroyed" (4:8-9).

"For our light affliction, which is but for a moment, worketh for us a far more exceeding and eternal weight of glory" (4:17). Paul calls all present suffering "light" and "momentary" — not because suffering is unreal but because compared to eternal glory it is featherweight. Chapter 5 concludes with the hope of eternity: "For we know that if our earthly house of this tabernacle were dissolved, we have a building of God, an house not made with hands, eternal in the heavens" (5:1).`,
  },
  {
    title_zh: `三、和好的使命与圣洁的分别（5:14-7章）`,
    title_en: `III. The Ministry of Reconciliation and Holy Separation (5:14-Ch. 7)`,
    content_zh: `从5:14开始，保罗展开了基督教最核心的教义之一——和好。"原来基督的爱激励我们；因我们想，一人既替众人死，众人就都死了；并且他替众人死，是叫那些活着的人不再为自己活，乃为替他们死而复活的主活"（5:14-15）。基督的死不只是替代性的赎罪，还改变了我们活着的方向——不再为自己，乃为基督。

"若有人在基督里，他就是新造的人，旧事已过，都变成新的了。一切都是出于神；他藉着基督使我们与他和好，又将劝人与他和好的职分赐给我们"（5:17-18）。"新造的人"——不是旧人的修补，而是全新的创造。这与改革宗的"重生"教义一致：圣灵的工作不是改良旧性情，而是赐给人一颗新心（结36:26）。

"神使那无罪的，替我们成为罪，好叫我们在他里面成为神的义"（5:21）——这是"归算的义"（imputed righteousness）最简洁有力的表述。基督没有犯罪，却承担了我们的罪；我们满身罪污，却在基督里被算为义。这种"伟大的交换"是福音的核心。

第6章保罗以自己的受苦为凭据——"以忍耐、患难、穷乏、困苦、鞭打、监禁"（6:4-5）服事。然后劝诫信徒过分别为圣的生活："你们和不信的原不相配，不要同负一轭"（6:14）。这不是要基督徒与世隔绝，而是保持信仰共同体的纯洁。

第7章是喜乐的章节——提多带来好消息，哥林多人真的悔改了。"依着神的意思忧愁，就生出没有后悔的懊悔来，以致得救；但世俗的忧愁是叫人死"（7:10）。世俗的忧愁（如犹大的后悔）只产生绝望；敬虔的忧愁（如彼得的痛哭）产生真正的悔改和生命的更新。`,
    content_en: `From 5:14 onward, Paul unfolds one of Christianity's most central doctrines — reconciliation. "For the love of Christ constraineth us; because we thus judge, that if one died for all, then were all dead: And that he died for all, that they which live should not henceforth live unto themselves, but unto him which died for them, and rose again" (5:14-15). Christ's death is not only substitutionary atonement but redirects how we live — no longer for ourselves but for Christ.

"Therefore if any man be in Christ, he is a new creature: old things are passed away; behold, all things are become new. And all things are of God, who hath reconciled us to himself by Jesus Christ, and hath given to us the ministry of reconciliation" (5:17-18). "New creature" — not a patched-up old person but an entirely new creation. This aligns with the Reformed doctrine of regeneration: the Spirit's work is not improving the old nature but giving a new heart (Ezek. 36:26).

"For he hath made him to be sin for us, who knew no sin; that we might be made the righteousness of God in him" (5:21) — this is the most concise and powerful statement of imputed righteousness. Christ never sinned yet bore our sin; we are stained with sin yet in Christ are counted righteous. This "great exchange" is the gospel's core.

In chapter 6 Paul presents his own suffering as credentials — serving "in much patience, in afflictions, in necessities, in distresses, In stripes, in imprisonments" (6:4-5). He then urges believers to live in holy separation: "Be ye not unequally yoked together with unbelievers" (6:14). This does not call Christians to withdraw from the world but to preserve the believing community's purity.

Chapter 7 is a chapter of joy — Titus brings good news that the Corinthians have truly repented. "For godly sorrow worketh repentance to salvation not to be repented of: but the sorrow of the world worketh death" (7:10). Worldly sorrow (like Judas's remorse) produces only despair; godly sorrow (like Peter's bitter weeping) produces true repentance and renewal of life.`,
  },
  {
    title_zh: `三、甘心乐意的奉献（8-9章）`,
    title_en: `III. Cheerful and Generous Giving (Ch. 8-9)`,
    content_zh: `第8-9章是全圣经中关于奉献最完整、最系统的教导。保罗为耶路撒冷贫困的圣徒募集捐款，却把这件实际的事情提升到了神学的高度。

他以马其顿教会为榜样——"就是他们在患难中受大试炼的时候，仍有满足的快乐，在极穷之间还格外显出他们乐捐的厚恩"（8:2）。他们不是富人装模作样的施舍，而是穷人从自己的缺乏中慷慨给予——"他们是按着力量，而且也过了力量，自己甘心乐意地捐助"（8:3）。更令人动容的是，他们不是不得已而为之，而是"再三地求我们，准他们在这供给圣徒的恩情上有份"（8:4）。把奉献当作特权而非义务——这颠覆了我们对给予的理解。

奉献的终极根基是基督的榜样："你们知道我们主耶稣基督的恩典：他本来富足，却为你们成了贫穷，叫你们因他的贫穷，可以成为富足"（8:9）。基督从天上的荣华降到马槽的卑微，从无限的富足走向十字架的贫穷——这不是勉强的牺牲，而是爱的自愿倾倒。当我们认识到自己领受了这样的恩典，奉献就不再是负担而是喜乐的回应。

核心原则是："各人要随本心所酌定的，不要作难，不要勉强，因为捐得乐意的人是神所喜爱的"（9:7）。这与旧约十一奉献的律法不同——保罗不规定比例，也不施加压力。奉献的动力不是律法的要求，而是恩典的涌流。"少种的少收，多种的多收"（9:6）——慷慨不会使人贫穷，因为"神能将各样的恩惠多多地加给你们，使你们凡事常常充足，能多行各样善事"（9:8）。`,
    content_en: `Chapters 8-9 contain the Bible's most complete and systematic teaching on giving. Paul is raising funds for impoverished saints in Jerusalem, yet elevates this practical matter to theological heights.

He holds up the Macedonian churches as an example — "How that in a great trial of affliction the abundance of their joy and their deep poverty abounded unto the riches of their liberality" (8:2). This was not wealthy people making token donations but poor people giving generously from their own need — "to their power, I bear record, yea, and beyond their power they were willing of themselves" (8:3). Even more remarkably, they did not give reluctantly but "Praying us with much intreaty that we would receive the gift" (8:4). Viewing giving as privilege rather than obligation — this overturns our understanding of generosity.

The ultimate foundation for giving is Christ's example: "For ye know the grace of our Lord Jesus Christ, that, though he was rich, yet for your sakes he became poor, that ye through his poverty might be rich" (8:9). Christ descended from heaven's glory to a manger's humility, from infinite riches to the poverty of the cross — not reluctant sacrifice but love's voluntary outpouring. When we recognize the grace we have received, giving becomes not a burden but a joyful response.

The core principle: "Every man according as he purposeth in his heart, so let him give; not grudgingly, or of necessity: for God loveth a cheerful giver" (9:7). Unlike Old Testament tithing law, Paul prescribes no percentage and applies no pressure. The motive for giving is not legal requirement but the overflow of grace. "He which soweth sparingly shall reap also sparingly; and he which soweth bountifully shall reap also bountifully" (9:6) — generosity does not impoverish, for "God is able to make all grace abound toward you; that ye, always having all sufficiency in all things, may abound to every good work" (9:8).`,
  },
  {
    title_zh: `四、保罗的使徒权柄与十字架的大能（10-13章）`,
    title_en: `IV. Paul's Apostolic Authority and the Power of the Cross (Ch. 10-13)`,
    content_zh: `哥林多后书最后四章是保罗最激烈的自我辩护——他面对的是渗入教会的假使徒，他们攻击保罗软弱、其貌不扬、言语粗俗（10:10）。保罗的回应令人意外：他不炫耀自己的才华，而是以软弱为夸口。

第10章保罗声明他争战的武器："我们争战的兵器本不是属血气的，乃是在神面前有能力，可以攻破坚固的营垒"（10:4）。第11章他被迫进行"愚妄的自夸"——但他夸口的不是成就而是苦难："被犹太人鞭打五次，每次四十减去一下；被棍打了三次；被石头打了一次；遭了三次船坏……又屡次行远路，遭江河的危险、盗贼的危险……受劳碌、受困苦，多次不得睡，又饥又渴"（11:24-27）。假使徒炫耀异象和才能，保罗炫耀伤疤和眼泪——这才是真使徒的凭据。

第12章是全书的高峰。保罗提到一个被提到"第三层天"、听见"隐秘的言语"的人（12:2-4）——大多数学者认为这就是保罗自己。但他不以此为荣，反而以身上的"刺"为荣。"又恐怕我因所得的启示甚大，就过于自高，所以有一根刺加在我肉体上，就是撒但的差役要攻击我，免得我过于自高"（12:7）。这根"刺"的具体性质圣经没有说明——可能是身体疾病、属灵争战或逼迫——但保罗三次求主把它拿走，主的回答改变了一切：

"他对我说：我的恩典够你用的，因为我的能力是在人的软弱上显得完全。所以，我更喜欢夸自己的软弱，好叫基督的能力覆庇我。我为基督的缘故，就以软弱、凌辱、急难、逼迫、困苦为可喜乐的；因我什么时候软弱，什么时候就刚强了"（12:9-10）。

"我什么时候软弱，什么时候就刚强了"——这句话颠覆了世界的价值观。世界说：刚强了才有用。福音说：承认软弱才是真正刚强的开始。最后的劝勉极其严肃："你们总要自己省察有信心没有，也要自己试验"（13:5）。真信仰不在口头的宣称，在于生命中是否有基督活着的实际。`,
    content_en: `The final four chapters are Paul's most intense self-defense — he faces false apostles who infiltrated the church and attacked him as weak, unimpressive, and rough in speech (10:10). Paul's response is unexpected: he boasts not in his talents but in his weakness.

In chapter 10 Paul declares his weapons of warfare: "For the weapons of our warfare are not carnal, but mighty through God to the pulling down of strong holds" (10:4). In chapter 11 he is compelled to engage in "foolish boasting" — but he boasts not of achievements but of sufferings: "Of the Jews five times received I forty stripes save one. Thrice was I beaten with rods, once was I stoned, thrice I suffered shipwreck... In journeyings often, in perils of waters, in perils of robbers... In weariness and painfulness, in watchings often, in hunger and thirst" (11:24-27). False apostles boast of visions and abilities; Paul boasts of scars and tears — these are a true apostle's credentials.

Chapter 12 is the book's climax. Paul mentions someone caught up to "the third heaven" who heard "unspeakable words" (12:2-4) — most scholars believe this was Paul himself. But he does not glory in this; instead he glories in his "thorn." "And lest I should be exalted above measure through the abundance of the revelations, there was given to me a thorn in the flesh, the messenger of Satan to buffet me, lest I should be exalted above measure" (12:7). The thorn's exact nature is unspecified — possibly physical illness, spiritual attack, or persecution — but Paul besought the Lord three times to remove it, and the Lord's answer changed everything:

"And he said unto me, My grace is sufficient for thee: for my strength is made perfect in weakness. Most gladly therefore will I rather glory in my infirmities, that the power of Christ may rest upon me. Therefore I take pleasure in infirmities, in reproaches, in necessities, in persecutions, in distresses for Christ's sake: for when I am weak, then am I strong" (12:9-10).

"When I am weak, then am I strong" — this overturns the world's values. The world says: be strong and you will be useful. The gospel says: acknowledging weakness is where true strength begins. The final exhortation is sobering: "Examine yourselves, whether ye be in the faith; prove your own selves" (13:5). True faith is not verbal profession but the living reality of Christ dwelling within.`,
  },
]

const overview = {
  zh: `哥林多后书（13章）是保罗最私密、最情感化的书信（约公元55-56年）。保罗在其中辩护自己的使徒职分，揭露假教师，并最深刻地阐述了十字架的神学——神的能力在人的软弱上显得完全。

这封信的核心悖论是：真正的属灵权柄不在于强大的外表，而在于甘愿为基督受苦的软弱。"瓦器里的宝贝"（4:7）和"我什么时候软弱，什么时候就刚强了"（12:10）是基督教最独特的力量观。`,
  en: `2 Corinthians (13 chapters) is Paul's most personal, emotional letter (c. AD 55–56). Paul defends his apostleship, exposes false teachers, and profoundly articulates cross theology — God's power made perfect in weakness.

The letter's core paradox: true spiritual authority lies not in outward strength but in willingness to suffer for Christ. "Treasure in earthen vessels" (4:7) and "when I am weak, then am I strong" (12:10) represent Christianity's most distinctive view of power.`,
};

const outline = [
  ["1-2章", "患难中的安慰与赦免", "Ch. 1–2", "Comfort in Affliction; Forgiveness"],
  ["3-5章", "新约的职事与永恒盼望", "Ch. 3–5", "New Covenant Ministry; Eternal Hope"],
  ["6-7章", "分别为圣与和好", "Ch. 6–7", "Separation and Reconciliation"],
  ["8-9章", "捐献的原则", "Ch. 8–9", "Principles of Giving"],
  ["10-13章", "使徒权柄与软弱中的刚强", "Ch. 10–13", "Apostolic Authority; Strength in Weakness"],
];

const theology = {
  title_zh: `核心神学：软弱中的能力与服事的荣耀`,
  title_en: `Core Theology: Power in Weakness and the Glory of Ministry`,
  content_zh: `哥林多后书是保罗最个人化的书信，揭示了他内心的挣扎、痛苦和在软弱中经历神能力的经验。

第一，软弱中的能力。"祂对我说：'我的恩典够你用的，因为我的能力是在人的软弱上显得完全。'所以，我更喜欢夸自己的软弱，好叫基督的能力覆庇我"（12:9）。这是保罗神学中最悖论性的真理——真正的属灵能力不是在刚强时彰显，而是在软弱时显明。保罗的"刺"（12:7）虽然未被拿走，却成为他经历恩典的渠道。

第二，新约的荣光。"那用字刻在石头上属死的职事尚且有荣光……何况那属灵的职事岂不更有荣光吗？"（3:7-8）。保罗将旧约律法的职事与新约福音的职事对比——摩西脸上的荣光会褪去，但新约的荣光永不褪色。"主就是那灵；主的灵在哪里，那里就得以自由"（3:17）。

第三，瓦器里的宝贝。"我们有这宝贝放在瓦器里，要显明这莫大的能力是出于神，不是出于我们"（4:7）。福音是宝贝，传福音的人是脆弱的瓦器——这是刻意的安排，好叫荣耀归于神而非人。"我们四面受敌，却不被困住；心里作难，却不至失望；遭逼迫，却不被丢弃；打倒了，却不至死亡"（4:8-9）。`,
  content_en: `2 Corinthians is Paul's most personal letter, revealing his inner struggles, pain, and experience of God's power through weakness.

First, power in weakness. "My grace is sufficient for thee: for my strength is made perfect in weakness. Most gladly therefore will I rather glory in my infirmities, that the power of Christ may rest upon me" (12:9). This is the most paradoxical truth in Pauline theology — true spiritual power is manifested not in strength but in weakness. Paul's "thorn" (12:7) was never removed, yet it became the channel through which he experienced grace.

Second, the glory of the new covenant. "If the ministration of death, written and engraven in stones, was glorious... How shall not the ministration of the spirit be rather glorious?" (3:7-8). Paul contrasts the old covenant ministry of the law with the new covenant ministry of the gospel — the glory on Moses's face faded, but the glory of the new covenant never fades. "Now the Lord is that Spirit: and where the Spirit of the Lord is, there is liberty" (3:17).

Third, treasure in earthen vessels. "We have this treasure in earthen vessels, that the excellency of the power may be of God, and not of us" (4:7). The gospel is the treasure; those who proclaim it are fragile clay pots — this is by design, so that glory belongs to God, not to men. "We are troubled on every side, yet not distressed; we are perplexed, but not in despair; Persecuted, but not forsaken; cast down, but not destroyed" (4:8-9).`,
};

const keyVerse = {
  zh: `"他对我说："我的恩典够你用的，因为我的能力是在人的软弱上显得完全。"所以，我更喜欢夸自己的软弱，好叫基督的能力覆庇我。"（哥林多后书 12:9）`,
  en: `"And he said unto me, My grace is sufficient for thee: for my strength is made perfect in weakness. Most gladly therefore will I rather glory in my infirmities, that the power of Christ may rest upon me." (2 Corinthians 12:9)`,
};

const info = { nameZh: `哥林多后书`, nameEn: `2 Corinthians`, author: `使徒保罗`, date: `约公元55-56年`, chapters: `13章`, backHref: `/new-testament/pauline`, backLabel: `保罗书信`, bibleId: `2CO` };


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