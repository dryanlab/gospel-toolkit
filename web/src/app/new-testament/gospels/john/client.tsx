'use client';
import Link from 'next/link';
import SpeakButton from '@/components/SpeakButton';
import { useState } from 'react';

const sections = [
  {
    title_zh: `一、太初有道：道成肉身的启示（1-4章）`,
    title_en: `I. In the Beginning Was the Word: The Revelation of the Incarnation (Ch. 1-4)`,
    content_zh: `约翰福音以全圣经中最庄严的序言开始："太初有道，道与神同在，道就是神。这道太初与神同在。万物是藉着他造的；凡被造的，没有一样不是藉着他造的"（1:1-3）。没有家谱，没有降生叙事——约翰直接宣告耶稣是永恒的神、创造的中保。"太初"（en arche）呼应创世记1:1"起初"——在一切开始之前，道已经存在。韦敏斯德信条第二章论三位一体神的永恒性，其圣经根基正在于此。

"道成了肉身，住在我们中间，充充满满地有恩典有真理。我们也见过他的荣光，正是父独生子的荣光"（1:14）。"住在我们中间"原文是"支搭帐幕在我们中间"（eskenosen），呼应旧约的会幕——神的荣耀曾住在帐幕中，如今住在基督的人性中。道成肉身不是神暂时装扮成人，而是永恒的神完全地、永久地取了真实的人性。

迦拿的水变酒（2:1-11）是约翰记录的第一个"记号"（semeion）——约翰不用"神迹"而用"记号"，因为每个神迹都指向更深的真理。水变酒指向旧约的洁净之礼被福音的喜乐所取代。尼哥底母的夜访（3:1-21）引出全圣经最著名的经文："神爱世人，甚至将他的独生子赐给他们，叫一切信他的不至灭亡，反得永生"（3:16）。"重生"不是人的自我改良，而是"从灵生的"——圣灵主权的工作。

撒玛利亚妇人的故事（4章）打破了犹太人与撒玛利亚人之间的种族、性别和道德的三重藩篱。这个有过五个丈夫的女人，耶稣不但不拒绝她，反而向她启示了关于真正敬拜的最深真理："时候将到，如今就是了，那真正拜父的，要用心灵和诚实拜他，因为父要这样的人拜他"（4:23）。`,
    content_en: `John opens with the most solemn prologue in all of Scripture: "In the beginning was the Word, and the Word was with God, and the Word was God. The same was in the beginning with God. All things were made by him; and without him was not any thing made that was made." (1:1-3) No genealogy, no birth narrative — John directly proclaims Jesus as eternal God and mediator of creation. "In the beginning" (en arche) echoes Genesis 1:1 — before anything began, the Word already was. The Westminster Confession's chapter on the Trinity and God's eternality finds its biblical ground here.

"And the Word was made flesh, and dwelt among us, (and we beheld his glory, the glory as of the only begotten of the Father,) full of grace and truth." (1:14) "Dwelt among us" is literally "tabernacled among us" (eskenosen), echoing the Old Testament tabernacle — God's glory once dwelt in the tent, now it dwells in Christ's humanity. The Incarnation is not God temporarily disguising Himself as man but the eternal God fully and permanently assuming true human nature.

The water-to-wine at Cana (2:1-11) is John's first recorded "sign" (semeion) — John uses "sign" rather than "miracle" because each points to a deeper truth. Water-to-wine signifies the Old Testament rites of purification being replaced by the joy of the gospel. Nicodemus' night visit (3:1-21) produces Scripture's most famous verse: "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life" (3:16). Being "born again" is not human self-improvement but being "born of the Spirit" — the Spirit's sovereign work.

The Samaritan woman (ch. 4) breaks the triple barrier of race, gender, and morality between Jews and Samaritans. This woman who had five husbands — Jesus not only does not reject her but reveals to her the deepest truth about true worship: "The hour cometh, and now is, when the true worshippers shall worship the Father in spirit and in truth: for the Father seeketh such to worship him" (4:23).`,
  },
  {
    title_zh: `二、记号之书：七个神迹与七个"我是"（5-12章）`,
    title_en: `II. The Book of Signs: Seven Miracles and Seven "I AM" Declarations (Ch. 5-12)`,
    content_zh: `学者们将约翰福音1-12章称为"记号之书"（Book of Signs），因为约翰以七个精心挑选的神迹记号为骨架，每个记号都配合一段深刻的教导和一个"我是"宣告，揭示耶稣身份的不同面向。

五饼二鱼喂饱五千人（6:1-14）后，众人要强逼他作王，耶稣却退到山上。第二天他教导说："我就是生命的粮。到我这里来的，必定不饿；信我的，永远不渴"（6:35）。"生命的粮"不是物质的满足，而是属灵的喂养——他自己就是天上降下来的真粮。许多门徒听了就离去，耶稣问十二个人"你们也要去吗？"彼得回答："主啊，你有永生之道，我们还归从谁呢？"（6:68）

住棚节上耶稣宣告"我是世界的光"（8:12），又说出了最震撼犹太人的话："还没有亚伯拉罕就有了我"（8:58）。"就有了我"原文是ego eimi——"我是"，正是出埃及记3:14神向摩西启示的圣名。犹太人立刻拿石头要打他——他们完全明白他在宣称自己是神。

第9章的瞎子故事充满约翰式的讽刺（Johannine irony）：生来瞎眼的人经耶稣医治后看见了，法利赛人却越审问越"瞎"。瞎子从"那个人"到"先知"到"从神来的"最终到俯伏敬拜——信心是一个渐进的旅程。而法利赛人从"查问"到"不信"到"赶出教会"——拒绝也是渐进的。"你们若瞎了眼，就没有罪了；但如今你们说'我们能看见'，所以你们的罪还在"（9:41）。

"我是好牧人；好牧人为羊舍命"（10:11）。"我的羊听我的声音，我也认识他们，他们也跟着我。我又赐给他们永生；他们永不灭亡，谁也不能从我手里把他们夺去"（10:27-28）——这是改革宗"圣徒蒙保守"教义最有力的经文之一。

拉撒路的复活（11章）是七个记号中最伟大的——在坟墓前耶稣流泪（11:35，全圣经最短的一节），然后喊着说"拉撒路出来！"（11:43）死亡在他面前让步。但约翰紧接着记录：正是这个最大的记号促使公会决定杀害耶稣（11:53）——神迹不能强迫人信，反而可能加深人的敌意。`,
    content_en: `Scholars call John 1-12 the "Book of Signs," because John uses seven carefully selected miraculous signs as the framework, each paired with profound teaching and an "I AM" declaration revealing a different facet of Jesus' identity.

After feeding five thousand with five loaves and two fish (6:1-14), the crowd tried to make Him king by force, but Jesus withdrew to the mountain. The next day He taught: "I am the bread of life: he that cometh to me shall never hunger; and he that believeth on me shall never thirst" (6:35). The "bread of life" is not material satisfaction but spiritual nourishment — He Himself is the true bread come down from heaven. Many disciples left after hearing this; Jesus asked the twelve, "Will ye also go away?" Peter answered: "Lord, to whom shall we go? thou hast the words of eternal life" (6:68).

At the Feast of Tabernacles Jesus declared, "I am the light of the world" (8:12), and spoke the words most shocking to Jewish ears: "Before Abraham was, I am" (8:58). "I am" in Greek is ego eimi — the divine name God revealed to Moses in Exodus 3:14. The Jews immediately took up stones — they understood perfectly that He was claiming to be God.

The blind man story in chapter 9 is full of Johannine irony: the man born blind, healed by Jesus, now sees, while the Pharisees grow "blinder" with each interrogation. The blind man progresses from "that man" to "a prophet" to "from God" to worshipping — faith is a gradual journey. The Pharisees progress from "questioning" to "disbelief" to "casting out" — rejection is also gradual. "If ye were blind, ye should have no sin: but now ye say, We see; therefore your sin remaineth" (9:41).

"I am the good shepherd: the good shepherd giveth his life for the sheep" (10:11). "My sheep hear my voice, and I know them, and they follow me: And I give unto them eternal life; and they shall never perish, neither shall any man pluck them out of my hand" (10:27-28) — one of the most powerful texts for the Reformed doctrine of the perseverance of the saints.

The raising of Lazarus (ch. 11) is the greatest of the seven signs — at the tomb Jesus wept (11:35, the shortest verse in the Bible), then cried out, "Lazarus, come forth!" (11:43). Death yielded before Him. But John immediately records: it was this greatest sign that prompted the Sanhedrin to resolve to kill Jesus (11:53) — miracles cannot compel faith; they may even deepen hostility.`,
  },
  {
    title_zh: `三、临别讲论：圣灵的应许与葡萄树的生命（13-16章）`,
    title_en: `III. The Farewell Discourse: The Spirit's Promise and Life in the Vine (Ch. 13-16)`,
    content_zh: `约翰福音13-17章被称为"荣耀之书"（Book of Glory）的开篇。13-16章是耶稣对门徒的临别讲论——四福音中最亲密、最深刻的教导，完全是约翰独有的材料。

洗脚（13:1-17）设定了整段讲论的基调。逾越节晚餐前，"耶稣知道自己离世归父的时候到了"（13:1），他却起来为门徒洗脚。宇宙的主宰跪在地上洗人的脚——这不只是谦卑的榜样，更是他即将在十字架上所做之事的预演：降卑自己，为他人洗净罪污。"我是你们的主，你们的夫子，尚且洗你们的脚，你们也当彼此洗脚"（13:14）。

门徒忧愁，因为主说"我要去了"。耶稣连续给出安慰："你们心里不要忧愁……在我父的家里有许多住处"（14:1-2）。"我是道路、真理、生命；若不藉着我，没有人能到父那里去"（14:6）——这是基督教信仰排他性（exclusivity）的经典宣告，也是最温暖的应许：通往父的路已经打开了。

圣灵的应许贯穿14-16章。耶稣称圣灵为"保惠师"（parakletos，原意为"被呼唤到身边来的人"）。圣灵"要将一切的事指教你们，并且要叫你们想起我对你们所说的一切话"（14:26）；圣灵"来了，就要叫世人为罪、为义、为审判，自己责备自己"（16:8）；圣灵"要引导你们明白一切的真理"（16:13）。基督的离去不是损失，而是圣灵降临的前提——"我若不去，保惠师就不到你们这里来"（16:7）。

葡萄树的比喻（15:1-8）是基督徒生命最核心的教导。"我是真葡萄树，我父是栽培的人"（15:1）。"你们要常在我里面，我也常在你们里面。枝子若不常在葡萄树上，自己就不能结果子；你们若不常在我里面，也是这样"（15:4）。果子不是靠努力产生的，而是住在基督里的自然结果。"不常在我里面的人，就像枝子丢在外面枯干"（15:6）——离开基督，一切属灵生命都将枯竭。"常在"（menein）是约翰福音的核心动词，出现超过40次。`,
    content_en: `John 13-17 is called the opening of the "Book of Glory." Chapters 13-16 constitute Jesus' farewell discourse to the disciples — the most intimate and profound teaching in all four Gospels, entirely unique to John.

The foot-washing (13:1-17) sets the tone. Before the Passover supper, "Jesus knowing that his hour was come that he should depart out of this world unto the Father" (13:1), He rose and washed the disciples' feet. The Sovereign of the universe kneeling to wash human feet — this is not merely an example of humility but a preview of what He will do on the cross: humbling Himself to cleanse others from sin. "If I then, your Lord and Master, have washed your feet; ye also ought to wash one another's feet" (13:14).

The disciples were troubled because the Lord said, "I go away." Jesus gave repeated comfort: "Let not your heart be troubled... In my Father's house are many mansions" (14:1-2). "I am the way, the truth, and the life: no man cometh unto the Father, but by me" (14:6) — the classic declaration of Christianity's exclusivity, yet also the warmest promise: the way to the Father has been opened.

The promise of the Spirit runs through chapters 14-16. Jesus calls the Spirit the "Comforter" (parakletos, literally "one called alongside"). The Spirit "shall teach you all things, and bring all things to your remembrance, whatsoever I have said unto you" (14:26); when He comes, He "will reprove the world of sin, and of righteousness, and of judgment" (16:8); He "will guide you into all truth" (16:13). Christ's departure is not loss but the prerequisite for the Spirit's coming — "If I go not away, the Comforter will not come unto you" (16:7).

The vine parable (15:1-8) is the most essential teaching on the Christian life. "I am the true vine, and my Father is the husbandman" (15:1). "Abide in me, and I in you. As the branch cannot bear fruit of itself, except it abide in the vine; no more can ye, except ye abide in me" (15:4). Fruit is not produced by effort but is the natural result of abiding in Christ. "If a man abide not in me, he is cast forth as a branch, and is withered" (15:6) — apart from Christ, all spiritual life withers. "Abide" (menein) is John's key verb, appearing over 40 times in the Gospel.`,
  },
  {
    title_zh: `四、大祭司的祷告：三位一体的奥秘（17章）`,
    title_en: `IV. The High Priestly Prayer: The Mystery of the Trinity (Ch. 17)`,
    content_zh: `第17章是耶稣上十字架前最后的祷告，被称为"大祭司的祷告"——因为他是在代替他的子民向父祈求。这是圣经中我们能听到的圣子向圣父最直接的对话，让我们窥见三位一体神内部的关系。

耶稣先为自己祷告："父啊，时候到了，愿你荣耀你的儿子，使儿子也荣耀你"（17:1）。"认识你独一的真神，并且认识你所差来的耶稣基督，这就是永生"（17:3）——永生不是无尽的时间，而是与三位一体的神建立关系。"父啊，现在求你使我同你享荣耀，就是未有世界以先，我同你所有的荣耀"（17:5）——耶稣祈求恢复道成肉身之前的荣耀，证明他的先存。

然后为门徒祷告："我不求你叫他们离开世界，只求你保守他们脱离那恶者"（17:15）。"求你用真理使他们成圣；你的道就是真理"（17:17）。成圣的途径是真理——神的话语。

最后为所有信徒祷告："我不但为这些人祈求，也为那些因他们的话信我的人祈求，使他们都合而为一。正如你父在我里面，我在你里面，使他们也在我们里面"（17:20-21）。教会合一的模式不是组织上的统一，而是效法三位一体的合一——父与子的关系是合一的终极典范。合一不排除多样性，正如父、子、灵是三个位格却是一个本体。

"父啊，我在哪里，愿你所赐给我的人也同我在那里，叫他们看见你所赐给我的荣耀；因为创立世界以前，你已经爱我了"（17:24）——创世以前父就爱子，这是宇宙中最原始的爱。我们被邀请进入这份爱中——这是恩典的终极目的：不只是赦罪，而是进入三位一体神的团契。`,
    content_en: `Chapter 17 is Jesus' final prayer before the cross, called the "High Priestly Prayer" — because He intercedes for His people before the Father. This is the most direct conversation between the Son and the Father that Scripture allows us to hear, granting a glimpse into the inner life of the Trinity.

Jesus first prays for Himself: "Father, the hour is come; glorify thy Son, that thy Son also may glorify thee" (17:1). "And this is life eternal, that they might know thee the only true God, and Jesus Christ, whom thou hast sent" (17:3) — eternal life is not endless time but a relationship with the Triune God. "And now, O Father, glorify thou me with thine own self with the glory which I had with thee before the world was" (17:5) — Jesus prays to resume His pre-incarnate glory, proving His pre-existence.

Then He prays for the disciples: "I pray not that thou shouldest take them out of the world, but that thou shouldest keep them from the evil" (17:15). "Sanctify them through thy truth: thy word is truth" (17:17). The means of sanctification is truth — God's Word.

Finally He prays for all believers: "Neither pray I for these alone, but for them also which shall believe on me through their word; That they all may be one; as thou, Father, art in me, and I in thee, that they also may be one in us" (17:20-21). The model of church unity is not organizational uniformity but emulation of Trinitarian unity — the Father-Son relationship is the ultimate paradigm of oneness. Unity does not exclude diversity, just as Father, Son, and Spirit are three persons yet one essence.

"Father, I will that they also, whom thou hast given me, be with me where I am; that they may behold my glory, which thou hast given me: for thou lovedst me before the foundation of the world" (17:24) — the Father loved the Son before creation, the most primordial love in the universe. We are invited into this love — this is the ultimate purpose of grace: not merely forgiveness but entrance into the fellowship of the Triune God.`,
  },
  {
    title_zh: `五、十字架与复活：荣耀的时刻（18-21章）`,
    title_en: `V. The Cross and Resurrection: The Hour of Glory (Ch. 18-21)`,
    content_zh: `在约翰福音中，十字架不是悲剧而是"荣耀的时刻"。耶稣多次说"我的时候还没有到"（2:4, 7:30, 8:20），直到12:23他宣告："人子得荣耀的时候到了。"十字架是荣耀，因为正是在那里，神的爱被最完全地彰显。

在客西马尼园，当兵丁来抓耶稣，他问"你们找谁？"他们说"找拿撒勒人耶稣"。耶稣说"我就是"（ego eimi, 18:5）——他们就退后倒在地上。即使在被捕的时刻，耶稣仍掌握主权。在彼拉多面前，耶稣宣告"我的国不属这世界"（18:36），又说"我为此而生，也为此来到世间，特为给真理作见证"（18:37）。彼拉多问"真理是什么？"——历史上最悲剧性的问题，因为真理就站在他面前。

"成了！"（tetelestai, 19:30）是约翰福音的高峰——不是失败的呻吟，而是胜利的宣告。这个希腊词在商业文件中意为"债已付清"。基督在十字架上付清了我们所有的罪债。约翰特别记录了"兵丁拿枪扎他的肋旁，随即有血和水流出来"（19:34），并特别强调"看见这事的那人就作见证——他的见证也是真的"（19:35）。

复活清晨，抹大拉的马利亚在空坟墓前哭泣。她以为耶稣的身体被挪走了。直到耶稣呼唤她的名字——"马利亚"（20:16）——她才认出复活的主。"我的羊听我的声音，我也认识他们"（10:27）在这里得到了最温柔的实现。多马要求看见才信，耶稣满足了他，多马发出最高的告白："我的主！我的神！"（20:28）——这是约翰福音基督论的巅峰。耶稣说："你因看见了我才信；那没有看见就信的有福了"（20:29）——这句话是对历代教会所有信徒说的。

第21章是附录，却包含了最感人的恢复场景。提比哩亚海边，耶稣三次问彼得"你爱我吗？"——对应三次不认主。每一次回答都跟着"你牧养我的羊"。彼得的三次否认被三次恢复覆盖。失败不是终点；在恩典中被恢复的人有更大的使命。"你跟从我吧"（21:22）——这是约翰福音最后的呼召，也是对每一个读者的呼召。`,
    content_en: `In John's Gospel, the cross is not tragedy but "the hour of glory." Jesus repeatedly said, "Mine hour is not yet come" (2:4, 7:30, 8:20), until 12:23 when He declared: "The hour is come, that the Son of man should be glorified." The cross is glory because it is there that God's love is most fully displayed.

In Gethsemane, when soldiers came to arrest Jesus, He asked, "Whom seek ye?" They answered, "Jesus of Nazareth." Jesus said, "I am he" (ego eimi, 18:5) — and they fell to the ground. Even at the moment of arrest, Jesus remained sovereign. Before Pilate, Jesus declared, "My kingdom is not of this world" (18:36), and "To this end was I born, and for this cause came I into the world, that I should bear witness unto the truth" (18:37). Pilate asked, "What is truth?" — history's most tragic question, for Truth was standing right before him.

"It is finished!" (tetelestai, 19:30) is John's climax — not a groan of defeat but a cry of victory. This Greek word in commercial documents meant "the debt is paid in full." Christ on the cross paid the full debt of all our sins. John specifically records that "one of the soldiers with a spear pierced his side, and forthwith came there out blood and water" (19:34), and emphatically adds, "he that saw it bare record, and his record is true" (19:35).

On the resurrection morning, Mary Magdalene wept at the empty tomb, thinking the body had been removed. Not until Jesus called her name — "Mary" (20:16) — did she recognize the risen Lord. "My sheep hear my voice, and I know them" (10:27) finds its tenderest fulfillment here. Thomas demanded to see before believing; Jesus granted it, and Thomas uttered the highest confession: "My Lord and my God!" (20:28) — the pinnacle of Johannine Christology. Jesus said, "Thomas, because thou hast seen me, thou hast believed: blessed are they that have not seen, and yet have believed" (20:29) — this word is spoken to all believers in every age.

Chapter 21 is an epilogue yet contains the most moving scene of restoration. At the Sea of Tiberias, Jesus asked Peter three times, "Lovest thou me?" — corresponding to three denials. Each answer was followed by "Feed my sheep." Peter's three denials are covered by three restorations. Failure is not the end; those restored by grace receive a greater commission. "Follow thou me" (21:22) — John's final call, and the call to every reader.`,
  },
]

const overview = {
  zh: `约翰福音（21章）是四福音书中最独特的一卷，约90%的内容不见于其他三卷。使徒约翰在晚年（约公元85-95年）写成，目的是"要叫你们信耶稣是基督，是　神的儿子，并且叫你们信了他，就可以因他的名得生命"（20:31）。全书以七个神迹记号和七个"我是"宣告为结构，从"太初有道"的宇宙性宣告开始，以复活后海边的恢复结束。约翰福音的核心信息是：耶稣是神的独生子，信他的人有永生。`,
  en: `The Gospel of John (21 chapters) is the most distinctive of the four Gospels, with approximately 90% of its content unique. Written by the apostle John in his later years (c. AD 85-95), its purpose is stated clearly: 'that ye might believe that Jesus is the Christ, the Son of God; and that believing ye might have life through his name' (20:31). Structured around seven miraculous signs and seven 'I AM' declarations, it moves from the cosmic opening 'In the beginning was the Word' to the post-resurrection restoration by the sea. John's central message: Jesus is God's only begotten Son; whoever believes in Him has eternal life.`,
};

const outline = [
  ["1-2章", `道成肉身与迦拿婚宴`, "Ch. 1-2", `The Word Made Flesh and the Wedding at Cana`],
  ["3-4章", `尼哥底母与撒玛利亚妇人`, "Ch. 3-4", `Nicodemus and the Samaritan Woman`],
  ["5-6章", `医好瘫子与五饼二鱼`, "Ch. 5-6", `Healing the Paralytic and Feeding Five Thousand`],
  ["7-8章", `住棚节与世界的光`, "Ch. 7-8", `Feast of Tabernacles and the Light of the World`],
  ["9-10章", `医好瞎子与好牧人`, "Ch. 9-10", `Healing the Blind Man and the Good Shepherd`],
  ["11-12章", `拉撒路复活与荣耀入城`, "Ch. 11-12", `Raising Lazarus and the Triumphal Entry`],
  ["13-17章", `临别讲论与大祭司祷告`, "Ch. 13-17", `Farewell Discourse and High Priestly Prayer`],
  ["18-21章", `受难、复活与海边恢复`, "Ch. 18-21", `Passion, Resurrection, and Lakeside Restoration`]
];

const theology = {
  title_zh: `核心神学：道成肉身——永恒之神进入时间`,
  title_en: `Core Theology: The Word Made Flesh — The Eternal God Enters Time`,
  content_zh: `约翰福音与前三卷福音截然不同——它不是从人的角度讲述耶稣的生平，而是从永恒的角度揭示基督的神性。

第一，太初有道。"太初有道，道与神同在，道就是神"（1:1）。约翰福音的序言是全圣经最深邃的神学宣告之一。"道"（希腊文λόγος，logos）不仅是话语，更是神的理性、智慧和自我表达。"道与神同在"——道是一个独立的位格；"道就是神"——道拥有完全的神性。这三句话奠定了三位一体教义的圣经基础。"道成了肉身，住在我们中间"（1:14）——永恒的神进入了时间，无限者取了有限的人性。这是基督教信仰最核心的奥秘：道成肉身（Incarnation）。

第二，七个"我是"。耶稣用七个"我是"（ἐγώ εἰμι）宣告来揭示自己的身份："我是生命的粮"（6:35）、"我是世界的光"（8:12）、"我是羊的门"（10:7）、"我是好牧人"（10:11）、"我是复活，是生命"（11:25）、"我是道路、真理、生命"（14:6）、"我是真葡萄树"（15:1）。"我是"（ἐγώ εἰμι）直接呼应出埃及记3:14神对摩西的自我启示"我是自有永有的"——耶稣在宣告祂就是耶和华。犹太人听懂了，所以"拿石头要打祂"（8:59）。

第三，信与生命。约翰福音的写作目的明确宣告："但记这些事要叫你们信耶稣是基督，是神的儿子，并且叫你们信了祂，就可以因祂的名得生命"（20:31）。"信"（πιστεύω）一词在约翰福音中出现近一百次。约翰福音3:16是全圣经最著名的经文："神爱世人，甚至将祂的独生子赐给他们，叫一切信祂的不至灭亡，反得永生。"信不是智力上的同意，而是将全部的信靠投注在基督身上。

第四，圣灵保惠师。约翰福音14-16章的"离别讲论"是关于圣灵最丰富的教导。耶稣称圣灵为"保惠师"（παράκλητος，parakletos，意为劝慰者、辩护者）："我要求父，父就另外赐给你们一位保惠师，叫祂永远与你们同在，就是真理的圣灵"（14:16-17）。圣灵的工作是"引导你们明白一切的真理"（16:13）、"为我作见证"（15:26）、"叫世人为罪、为义、为审判，自己责备自己"（16:8）。基督升天后，圣灵延续基督在地上的工作——教会不是孤儿，而是有保惠师同在的群体。`,
  content_en: `John's Gospel is radically different from the Synoptics — it reveals Christ's divinity not from a human perspective but from the vantage point of eternity.

First, In the beginning was the Word. "In the beginning was the Word, and the Word was with God, and the Word was God" (1:1). John's prologue is one of the most profound theological declarations in all Scripture. The "Word" (Greek λόγος, logos) is not merely speech but God's reason, wisdom, and self-expression. "The Word was with God" — the Word is a distinct person; "the Word was God" — the Word possesses full deity. These three clauses lay the biblical foundation for the doctrine of the Trinity. "And the Word was made flesh, and dwelt among us" (1:14) — the eternal God entered time; the infinite took on finite humanity. This is the most central mystery of the Christian faith: the Incarnation.

Second, the seven "I AM" statements. Jesus reveals His identity through seven "I AM" (ἐγώ εἰμι) declarations: "I am the bread of life" (6:35), "I am the light of the world" (8:12), "I am the door of the sheep" (10:7), "I am the good shepherd" (10:11), "I am the resurrection, and the life" (11:25), "I am the way, the truth, and the life" (14:6), "I am the true vine" (15:1). "I AM" (ἐγώ εἰμι) directly echoes God's self-revelation to Moses in Exodus 3:14, "I AM THAT I AM" — Jesus is declaring that He is the LORD. The Jews understood, which is why they "took up stones to cast at him" (8:59).

Third, faith and life. John's purpose is explicitly stated: "But these are written, that ye might believe that Jesus is the Christ, the Son of God; and that believing ye might have life through his name" (20:31). The word "believe" (πιστεύω) appears nearly one hundred times in John. John 3:16 is the most famous verse in all of Scripture: "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life." Faith is not intellectual assent but entrusting one's entire being to Christ.

Fourth, the Holy Spirit as Comforter. John 14-16, the "Farewell Discourse," contains the richest teaching on the Holy Spirit. Jesus calls the Spirit the "Comforter" (παράκλητος, parakletos, meaning advocate, counselor): "I will pray the Father, and he shall give you another Comforter, that he may abide with you for ever; Even the Spirit of truth" (14:16-17). The Spirit's work is to "guide you into all truth" (16:13), "testify of me" (15:26), and "reprove the world of sin, and of righteousness, and of judgment" (16:8). After Christ's ascension, the Spirit continues Christ's work on earth — the church is not orphaned but a community accompanied by the Comforter.`,
};

const keyVerse = {
  zh: `"神爱世人，甚至将他的独生子赐给他们，叫一切信他的，不至灭亡，反得永生。"（约翰福音 3:16）`,
  en: `"For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life." (John 3:16)`,
};

const info = { nameZh: `约翰福音`, nameEn: `John`, author: `使徒约翰`, date: `约公元85-95年`, chapters: `21章`, backHref: `/new-testament/gospels`, backLabel: `四福音书`, bibleId: `JHN` };


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