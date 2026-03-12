'use client';
import Link from 'next/link';
import SpeakButton from '@/components/SpeakButton';
import { useState } from 'react';

const sections = [
  {
    title_zh: `一、教会的纷争与十字架的智慧（1-4章）`,
    title_en: `I. Church Divisions and the Wisdom of the Cross (Ch. 1-4)`,
    content_zh: `哥林多教会的首要问题是分裂——"我是属保罗的、我是属亚波罗的、我是属矶法的"（1:12）。保罗的回应不是调解派系，而是指向十字架："十字架的道理，在那灭亡的人为愚拙；在我们得救的人，却为神的大能"（1:18）。

世人的智慧找不到神，因为"神的愚拙总比人智慧，神的软弱总比人强壮"（1:25）。哥林多人追求哲学辩才，保罗却只传"耶稣基督并他钉十字架"（2:2）。教会的根基只能是基督（3:11），不是任何人。

保罗自比为"基督的执事，为神奥秘事的管家"（4:1），不求人的夸奖，只求忠心。这是对所有教会领袖的提醒。`,
    content_en: `Corinth's foremost problem was division -- "I am of Paul; and I of Apollos; and I of Cephas" (1:12). Paul's response is not mediating factions but pointing to the cross: "The preaching of the cross is to them that perish foolishness; but unto us which are saved it is the power of God" (1:18).

Worldly wisdom cannot find God, for "the foolishness of God is wiser than men; and the weakness of God is stronger than men" (1:25). Corinthians pursued philosophical eloquence; Paul preached only "Jesus Christ, and him crucified" (2:2). The church's only foundation is Christ (3:11), not any man.

Paul calls himself "ministers of Christ, and stewards of the mysteries of God" (4:1), seeking not man's praise but faithfulness. This is a reminder for all church leaders.`,
  },
  {
    title_zh: `二、教会纪律与身体的圣洁（5-6章）`,
    title_en: `II. Church Discipline and Bodily Holiness (Ch. 5-6)`,
    content_zh: `哥林多教会不仅有分裂的问题，还有严重的道德败坏。第5章揭露了一个触目惊心的事实：教会中有人与继母同居，"这样的淫乱连外邦人中也没有"（5:1），教会却还"自高自大"，没有为此忧愁哀痛。保罗命令将这人"交给撒但，败坏他的肉体，使他的灵魂在主耶稣的日子可以得救"（5:5）——教会纪律的目的不是报复，而是挽回。

"岂不知一点面酵能使全团发起来吗？"（5:6）罪在教会中的影响如同面酵——如果不处理，就会蔓延到整个群体。"你们既是无酵的面，应当把旧酵除净"（5:7）。改革宗教会治理的三个标记之一正是正确的教会纪律——不是为了惩罚，而是为了保守教会的纯洁和帮助犯罪者悔改。

第6章处理两个问题。弟兄之间的诉讼（6:1-8）——信徒不应在不信的人面前彼此告状，"你们倒不如受欺呢？你们倒不如吃亏呢？"（6:7）。然后是对淫乱的严正警告："岂不知你们的身子就是圣灵的殿吗？这圣灵是从神而来……你们不是自己的人，因为你们是重价买来的。所以要在你们的身子上荣耀神"（6:19-20）。身体不是无关紧要的外壳——它是圣灵的殿。基督教信仰拒绝希腊式的灵肉二元论：身体和灵魂都属于主，都要荣耀他。`,
    content_en: `The Corinthian church had not only divisions but serious moral corruption. Chapter 5 reveals a shocking fact: a man in the church was living with his father's wife, "such fornication as is not so much as named among the Gentiles" (5:1), yet the church was "puffed up" rather than mourning. Paul commands to "deliver such an one unto Satan for the destruction of the flesh, that the spirit may be saved in the day of the Lord Jesus" (5:5) — church discipline aims not at revenge but at restoration.

"Know ye not that a little leaven leaveneth the whole lump?" (5:6) Sin's influence in the church is like leaven — left unaddressed, it spreads throughout the body. "Purge out therefore the old leaven, that ye may be a new lump" (5:7). One of the three marks of a true church in Reformed ecclesiology is the proper exercise of church discipline — not for punishment but for preserving the church's purity and helping the sinner repent.

Chapter 6 addresses two issues. Lawsuits between believers (6:1-8) — Christians should not take each other to court before unbelievers; "Why do ye not rather take wrong? why do ye not rather suffer yourselves to be defrauded?" (6:7). Then comes a solemn warning against sexual immorality: "Know ye not that your body is the temple of the Holy Ghost which is in you, which ye have of God... ye are not your own. For ye are bought with a price: therefore glorify God in your body" (6:19-20). The body is not an insignificant shell — it is the Holy Spirit's temple. Christianity rejects the Greek dualism of spirit and flesh: both body and soul belong to the Lord and must glorify Him.`,
  },
  {
    title_zh: `三、婚姻、自由与偶像：实际生活中的福音（7-10章）`,
    title_en: `III. Marriage, Freedom, and Idols: The Gospel in Practical Life (Ch. 7-10)`,
    content_zh: `第7章是新约中最详尽的婚姻教导。保罗肯定独身的恩赐（"我愿意众人像我一样"，7:7），也肯定婚姻的神圣（"丈夫当用合宜之分待妻子；妻子待丈夫也要如此"，7:3）。他的核心原则是："各人蒙召的时候是什么身分，仍要守住这身分"（7:20）——不要以为改变外在处境就能解决属灵问题。"你们是重价买来的，不要作人的奴仆"（7:23）。

8-10章围绕"祭偶像之物"展开，但真正讨论的是基督徒自由的原则和界限。保罗承认偶像算不了什么（"我们知道偶像在世上算不得什么"，8:4），信徒有自由吃任何食物。但自由不是最高原则——爱才是。"只是你们要谨慎，恐怕你们这自由竟成了那软弱人的绊脚石"（8:9）。"若食物叫我弟兄跌倒，我就永远不吃肉"（8:13）。

第9章保罗以自己为例：他有权利接受教会的供养，却主动放弃了——"向什么样的人，我就作什么样的人。无论如何，总要救些人"（9:22）。这是宣教处境化的圣经原则。

第10章以以色列人在旷野的失败为鉴戒："他们遭遇这些事都要作为鉴戒，并且写在经上，正是警戒我们这末世的人"（10:11）。最后给出总原则："凡事都可行，但不都有益处；凡事都可行，但不都造就人。无论做什么，都要为荣耀神而行"（10:23, 31）。`,
    content_en: `Chapter 7 is the New Testament's most extensive teaching on marriage. Paul affirms the gift of celibacy ("I would that all men were even as I myself," 7:7) and also affirms the sanctity of marriage ("Let the husband render unto the wife due benevolence: and likewise also the wife unto the husband," 7:3). His core principle: "Let every man abide in the same calling wherein he was called" (7:20) — do not assume that changing outward circumstances will solve spiritual problems. "Ye are bought with a price; be not ye the servants of men" (7:23).

Chapters 8-10 center on "food offered to idols," but the real discussion concerns the principles and limits of Christian freedom. Paul acknowledges that idols are nothing ("we know that an idol is nothing in the world," 8:4), and believers are free to eat anything. But freedom is not the highest principle — love is. "But take heed lest by any means this liberty of yours become a stumblingblock to them that are weak" (8:9). "If meat make my brother to offend, I will eat no flesh while the world standeth" (8:13).

In chapter 9, Paul uses himself as an example: he has the right to receive the church's support but voluntarily forfeited it — "I am made all things to all men, that I might by all means save some" (9:22). This is the biblical principle of missionary contextualization.

Chapter 10 uses Israel's wilderness failures as a warning: "Now all these things happened unto them for ensamples: and they are written for our admonition, upon whom the ends of the world are come" (10:11). The final principle: "All things are lawful for me, but all things are not expedient: all things are lawful for me, but all things edify not... Whether therefore ye eat, or drink, or whatsoever ye do, do all to the glory of God" (10:23, 31).`,
  },
  {
    title_zh: `三、敬拜秩序与属灵恩赐（11-14章）`,
    title_en: `III. Order of Worship and Spiritual Gifts (Ch. 11-14)`,
    content_zh: `保罗论述了敬拜聚会的秩序——主的晚餐（11:23-34）是最核心的问题。哥林多人在爱宴中制造社会等级的分裂——富人先吃饱喝醉，穷人到了却没有食物。保罗严厉警告："你们聚会的时候，算不得吃主的晚餐"（11:20）。他引用了主设立圣餐的话："这是我的身体，为你们舍的……这杯是用我的血所立的新约"（11:24-25），并警告说"人吃喝，若不分辨是主的身体，就是吃喝自己的罪了"（11:29）。"分辨主的身体"不只指认识到饼代表基督的身体，也指认出教会就是基督的身体——在圣餐中制造分裂就是践踏基督的身体。

属灵恩赐（12章）是保罗另一个重要贡献。"恩赐原有分别，圣灵却是一位"（12:4）。身体的比喻（12:12-27）教导多样性中的合一：眼不能对手说"我用不着你"，头也不能对脚说"我用不着你"。"身上肢体，人以为软弱的，更是不可少的"（12:22）——教会中最不起眼的成员往往最不可或缺。恩赐不是用来自我炫耀的，而是为了造就整个身体。

第13章——"爱的颂歌"——被保罗精心安插在恩赐讨论的中间。哥林多人追求说方言等壮观的恩赐，保罗说：没有爱，一切恩赐都毫无价值。"我若能说万人的方言，并天使的话语，却没有爱，我就成了鸣的锣、响的钹一般"（13:1）。爱是"恒久忍耐，又有恩慈；爱是不嫉妒，爱是不自夸，不张狂"（13:4）。"如今常存的有信，有望，有爱；这三样，其中最大的是爱"（13:13）。先知讲道之能终必归于无有，方言终必停止，知识也终必归于无有——唯有爱永远长存。

第14章进一步论述方言与先知讲道的关系。"说方言的是造就自己，作先知讲道的乃是造就教会"（14:4）。保罗不禁止方言（"我说方言比你们众人还多"，14:18），但强调先知讲道更重要，因为它造就全体。敬拜的总原则是："凡事都当造就人"（14:26）和"凡事都要规规矩矩地按着次序行"（14:40）。`,
    content_en: `Paul addresses the order of worship — the Lord's Supper (11:23-34) is the central issue. The Corinthians created social class divisions at their love feasts — the wealthy ate and drank to excess first, while the poor arrived to find nothing. Paul sternly warns: "When ye come together therefore into one place, this is not to eat the Lord's supper" (11:20). He quotes the Lord's institution of the Supper: "This is my body, which is broken for you... This cup is the new testament in my blood" (11:24-25), and warns that "he that eateth and drinketh unworthily, eateth and drinketh damnation to himself, not discerning the Lord's body" (11:29). "Discerning the Lord's body" means not only recognizing that the bread represents Christ's body but also recognizing that the church IS Christ's body — creating divisions at the Table is trampling Christ's body.

Spiritual gifts (ch. 12) are another major contribution. "Now there are diversities of gifts, but the same Spirit" (12:4). The body metaphor (12:12-27) teaches unity in diversity: the eye cannot say to the hand, "I have no need of thee," nor the head to the feet. "Those members of the body, which seem to be more feeble, are necessary" (12:22) — the most inconspicuous members of the church are often the most indispensable. Gifts are not for self-display but for building up the whole body.

Chapter 13 — the "hymn to love" — is deliberately placed by Paul in the middle of the gifts discussion. The Corinthians pursued spectacular gifts like tongues; Paul says: without love, all gifts are worthless. "Though I speak with the tongues of men and of angels, and have not charity, I am become as sounding brass, or a tinkling cymbal" (13:1). Love "suffereth long, and is kind; charity envieth not; charity vaunteth not itself, is not puffed up" (13:4). "And now abideth faith, hope, charity, these three; but the greatest of these is charity" (13:13). Prophecy will fail, tongues will cease, knowledge will vanish — only love endures forever.

Chapter 14 further discusses the relationship between tongues and prophecy. "He that speaketh in an unknown tongue edifieth himself; but he that prophesieth edifieth the church" (14:4). Paul does not forbid tongues ("I speak with tongues more than ye all," 14:18) but emphasizes prophecy's greater importance because it edifies all. The governing principle of worship: "Let all things be done unto edifying" (14:26) and "Let all things be done decently and in order" (14:40).`,
  },
  {
    title_zh: `四、复活的盼望与最后的劝勉（15-16章）`,
    title_en: `IV. The Hope of Resurrection and Final Exhortations (Ch. 15-16)`,
    content_zh: `第15章是新约对身体复活最完整、最系统的教导，也是基督教信仰最核心的章节之一。

保罗首先确立福音的事实："我当日所领受又传给你们的：第一，就是基督照圣经所说，为我们的罪死了，而且埋葬了；又照圣经所说，第三天复活了，并且显给矶法看，然后显给十二使徒看；后来一时显给五百多弟兄看，其中一大半到如今还在"（15:3-6）。五百多位目击证人——许多当时还活着，可以去询问——这是历史见证，不是传说。

然后保罗论证复活的必要性："若基督没有复活，我们所传的便是枉然，你们所信的也是枉然……你们仍在罪里……那些在基督里睡了的人也灭亡了。我们若靠基督只在今生有指望，就算比众人更可怜"（15:14, 17-19）。没有复活，一切都崩塌——传道无意义，信仰是幻觉，罪没有解决，死去的信徒永远消灭了。

"但基督已经从死里复活，成为睡了之人初熟的果子"（15:20）。"初熟的果子"意味着收割才刚开始——基督的复活保证了所有在他里面之人的复活。"在亚当里众人都死了；照样，在基督里众人也都要复活"（15:22）——这与罗马书5章的亚当-基督对比一脉相承。

15:35-49回答"死人怎样复活？带着什么身体来呢？"的问题。"所种的是必朽坏的，复活的是不朽坏的；所种的是羞辱的，复活的是荣耀的；所种的是软弱的，复活的是强壮的；所种的是血气的身体，复活的是灵性的身体"（15:42-44）。复活的身体不是非物质的灵魂，而是被荣耀化的、不朽坏的、真实的身体。

最后是凯旋的宣告："死啊！你得胜的权势在哪里？死啊！你的毒钩在哪里？死的毒钩就是罪，罪的权势就是律法。感谢神，使我们藉着我们的主耶稣基督得胜"（15:55-57）。

第16章以实际事务收尾——捐项安排、行程计划、同工推荐——提醒我们：伟大的复活神学不是脱离日常的冥想，而是激励我们在现实生活中忠心服事。"你们务要警醒，在真道上站立得稳，要作大丈夫，要刚强。凡你们所做的都要凭爱心而做"（16:13-14）。`,
    content_en: `Chapter 15 is the New Testament's most complete and systematic teaching on bodily resurrection, and one of the most central chapters in the Christian faith.

Paul first establishes the gospel facts: "For I delivered unto you first of all that which I also received, how that Christ died for our sins according to the scriptures; And that he was buried, and that he rose again the third day according to the scriptures: And that he was seen of Cephas, then of the twelve; After that, he was seen of above five hundred brethren at once; of whom the greater part remain unto this present" (15:3-6). Over five hundred eyewitnesses — most still alive at the time of writing, available for inquiry — this is historical testimony, not legend.

Then Paul argues the necessity of resurrection: "If Christ be not raised, then is our preaching vain, and your faith is also vain... ye are yet in your sins... Then they also which are fallen asleep in Christ are perished. If in this life only we have hope in Christ, we are of all men most miserable" (15:14, 17-19). Without the resurrection, everything collapses — preaching is meaningless, faith is an illusion, sin is unresolved, and departed believers are forever annihilated.

"But now is Christ risen from the dead, and become the firstfruits of them that slept" (15:20). "Firstfruits" means the harvest has only just begun — Christ's resurrection guarantees the resurrection of all who are in Him. "For as in Adam all die, even so in Christ shall all be made alive" (15:22) — consistent with the Adam-Christ parallel in Romans 5.

15:35-49 answers "How are the dead raised up? and with what body do they come?" "It is sown in corruption; it is raised in incorruption: It is sown in dishonour; it is raised in glory: it is sown in weakness; it is raised in power: It is sown a natural body; it is raised a spiritual body" (15:42-44). The resurrection body is not an immaterial soul but a glorified, incorruptible, real body.

Finally comes the triumphant declaration: "O death, where is thy sting? O grave, where is thy victory? The sting of death is sin; and the strength of sin is the law. But thanks be to God, which giveth us the victory through our Lord Jesus Christ" (15:55-57).

Chapter 16 closes with practical matters — the collection, travel plans, commendation of co-workers — reminding us that great resurrection theology is not detached meditation but fuel for faithful service in everyday life. "Watch ye, stand fast in the faith, quit you like men, be strong. Let all your things be done with charity" (16:13-14).`,
  },
]

const overview = {
  zh: `哥林多前书（16章）是保罗写给一个问题重重的教会的信（约公元55年）。哥林多是繁华的商业城市，教会深受世俗文化影响——分裂、淫乱、诉讼、偶像崇拜。保罗逐一回应这些问题，同时教导了关于主的晚餐、属灵恩赐、爱和复活的深刻真理。这封信展示了福音如何应用于教会生活的每一个层面。第13章的"爱的颂歌"和第15章的复活教导是全书最著名的段落。`,
  en: `1 Corinthians (16 chapters) is Paul's letter to a deeply troubled church (c. AD 55). Corinth was a prosperous commercial city, and its church was heavily influenced by secular culture -- divisions, immorality, lawsuits, idolatry. Paul addresses each issue while teaching profound truths about the Lord's Supper, spiritual gifts, love, and resurrection. This letter demonstrates how the gospel applies to every dimension of church life. The 'hymn to love' in chapter 13 and the resurrection teaching in chapter 15 are the book's most famous passages.`,
};

const outline = [
  ["1-4章", `分裂与十字架的智慧`, "Ch. 1-4", `Divisions and the Wisdom of the Cross`],
  ["5-6章", `教会纪律与圣洁`, "Ch. 5-6", `Church Discipline and Holiness`],
  ["7章", `婚姻与独身`, "Ch. 7", `Marriage and Celibacy`],
  ["8-10章", `祭偶像之物与自由`, "Ch. 8-10", `Food Offered to Idols and Freedom`],
  ["11章", `敬拜秩序与主的晚餐`, "Ch. 11", `Order of Worship and the Lord's Supper`],
  ["12-14章", `属灵恩赐与爱的颂歌`, "Ch. 12-14", `Spiritual Gifts and the Hymn to Love`],
  ["15章", `复活的盼望`, "Ch. 15", `The Hope of Resurrection`],
  ["16章", `捐项与问安`, "Ch. 16", `The Collection and Greetings`]
];

const theology = {
  title_zh: `核心神学：十字架的智慧与教会的秩序`,
  title_en: `Core Theology: The Wisdom of the Cross and the Order of the Church`,
  content_zh: `哥林多前书是保罗写给一个问题重重的教会的书信——分裂、淫乱、诉讼、恩赐滥用——但保罗用十字架的智慧和复活的盼望来回应每一个问题。

第一，十字架的愚拙就是神的智慧。"十字架的道理，在那灭亡的人为愚拙；在我们得救的人却为神的大能"（1:18）。哥林多人追求世俗的智慧和雄辩，保罗却宣告："我曾定了主意，在你们中间不知道别的，只知道耶稣基督并祂钉十字架"（2:2）。十字架翻转了世界的价值观——软弱中有能力，愚拙中有智慧，死亡中有生命。

第二，身体的圣洁。"岂不知你们的身子就是圣灵的殿吗？"（6:19）。保罗不是禁欲主义者——他肯定婚姻中的身体关系（7章）——但他坚决反对淫乱，因为信徒的身体已经被基督用重价买赎，属于神。"你们要在身子上荣耀神"（6:20）。

第三，爱的颂歌。"我若能说万人的方言，并天使的话语，却没有爱，我就成了鸣的锣、响的钹一般"（13:1）。哥林多前书13章不是婚礼上的浪漫诗——它是对恩赐争论的终极回答。哥林多人以说方言为荣，保罗说：没有爱，一切恩赐都是噪音。"爱是恒久忍耐，又有恩慈"（13:4）——这不是感觉，而是意志的选择和行动的坚持。

第四，复活的盼望。"基督若没有复活，你们的信便是徒然"（15:17）。第15章是全圣经关于身体复活最完整的论述。复活不是灵魂脱离身体，而是身体的改变——"这必朽坏的总要变成不朽坏的"（15:53）。"死啊！你得胜的权势在哪里？死啊！你的毒钩在哪里？"（15:55）——基督的复活是对死亡最终的胜利。`,
  content_en: `1 Corinthians is Paul's letter to a deeply troubled church — divisions, immorality, lawsuits, misuse of gifts — yet Paul addresses every problem with the wisdom of the cross and the hope of resurrection.

First, the foolishness of the cross is God's wisdom. "For the preaching of the cross is to them that perish foolishness; but unto us which are saved it is the power of God" (1:18). The Corinthians pursued worldly wisdom and eloquence; Paul declared: "I determined not to know any thing among you, save Jesus Christ, and him crucified" (2:2). The cross inverts the world's values — power in weakness, wisdom in foolishness, life in death.

Second, bodily holiness. "Know ye not that your body is the temple of the Holy Ghost?" (6:19). Paul is no ascetic — he affirms physical intimacy within marriage (ch. 7) — but he firmly opposes sexual immorality because the believer's body has been bought with a price and belongs to God. "Glorify God in your body" (6:20).

Third, the hymn of love. "Though I speak with the tongues of men and of angels, and have not charity, I am become as sounding brass, or a tinkling cymbal" (13:1). 1 Corinthians 13 is not a romantic wedding poem — it is the ultimate answer to the gifts debate. The Corinthians boasted of speaking in tongues; Paul says: without love, every gift is noise. "Charity suffereth long, and is kind" (13:4) — this is not a feeling but a choice of the will and persistence of action.

Fourth, the hope of resurrection. "If Christ be not raised, your faith is vain" (15:17). Chapter 15 is Scripture's most complete treatment of bodily resurrection. Resurrection is not the soul's escape from the body but the body's transformation — "this corruptible must put on incorruption" (15:53). "O death, where is thy sting? O grave, where is thy victory?" (15:55) — Christ's resurrection is death's ultimate defeat.`,
};

const keyVerse = {
  zh: `"如今常存的有信，有望，有爱，这三样，其中最大的是爱。"（哥林多前书 13:13）`,
  en: `"And now abideth faith, hope, charity, these three; but the greatest of these is charity." (1 Corinthians 13:13)`,
};

const info = { nameZh: `哥林多前书`, nameEn: `1 Corinthians`, author: `使徒保罗`, date: `约公元55年`, chapters: `16章`, backHref: `/new-testament/pauline`, backLabel: `保罗书信`, bibleId: `1CO` };


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