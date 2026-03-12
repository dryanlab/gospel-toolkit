'use client';
import Link from 'next/link';
import SpeakButton from '@/components/SpeakButton';
import { useState } from 'react';

const sections = [
  {
    title_zh: `一、道成肉身：神进入卑微者的世界（1-4:13）`,
    title_en: `I. The Incarnation: God Enters the World of the Humble (1-4:13)`,
    content_zh: `路加福音以四福音中最详尽的降生叙事开始，而它的视角独特地聚焦于卑微者。天使报喜不是给君王或祭司，而是给一位拿撒勒的少女马利亚（1:26-38）。马利亚的尊主颂（1:46-55）是一首革命性的赞歌："他叫有权柄的失位，叫卑贱的升高；叫饥饿的得饱美食，叫富足的空手回去"（1:52-53）。天国的来临颠覆了世界的秩序。

婴孩耶稣被放在马槽里，"因为客店里没有地方"（2:7）——万王之王降生在牲口槽中。第一批听到喜讯的不是宗教领袖，而是旷野中看守羊群的牧羊人（2:8-14）——在当时社会中地位最低的职业之一。路加从第一章就在宣告：这位救主不属于宫殿和圣殿的精英，他属于穷人、卑微者和被忽略的人。

西面在圣殿中抱着婴孩祝福说："我的眼睛已经看见你的救恩，就是你在万民面前所预备的——是照亮外邦人的光，又是你民以色列的荣耀"（2:30-32）。"万民"和"外邦人"——路加从起初就强调救恩的普世性。但西面也预言了阴影："一把剑要刺透你自己的心"（2:35），救恩与苦难从一开始就交织在一起。

耶稣受洗后的家谱（3:23-38）一直追溯到"亚当……就是神的"——不像马太从亚伯拉罕开始强调犹太弥赛亚身份，路加追溯到全人类的始祖，强调耶稣是全人类的救主。旷野四十天的试探（4:1-13）中魔鬼以权力、荣耀和奇迹试探他，耶稣每次都以申命记的经文回应——他在以色列四十年旷野失败之处得胜了。路加特别记下"魔鬼用完了各样的试探，就暂时离开耶稣"（4:13），这个"暂时"预示着试探将在客西马尼园再次到来。`,
    content_en: `Luke opens with the most detailed birth narrative of the four Gospels, uniquely focused on the humble. The angel's announcement comes not to a king or priest but to a young woman of Nazareth, Mary (1:26-38). Mary's Magnificat (1:46-55) is a revolutionary hymn: "He hath put down the mighty from their seats, and exalted them of low degree. He hath filled the hungry with good things; and the rich he hath sent empty away" (1:52-53). The coming of the Kingdom overturns the world's order.

The infant Jesus was laid in a manger, "because there was no room for them in the inn" (2:7) — the King of kings born in an animal trough. The first to hear the glad tidings were not religious leaders but shepherds keeping watch over their flock by night (2:8-14) — among the lowest occupations in that society. From chapter one Luke declares: this Savior belongs not to the elites of palace and temple but to the poor, the humble, and the overlooked.

Simeon in the temple held the infant and blessed God: "Mine eyes have seen thy salvation, Which thou hast prepared before the face of all people; A light to lighten the Gentiles, and the glory of thy people Israel" (2:30-32). "All people" and "Gentiles" — from the beginning Luke emphasizes salvation's universality. But Simeon also prophesied a shadow: "a sword shall pierce through thy own soul also" (2:35); salvation and suffering are intertwined from the start.

Jesus' post-baptism genealogy (3:23-38) traces back to "Adam, which was the son of God" — unlike Matthew who begins with Abraham to emphasize Jewish messianic identity, Luke traces to the father of all humanity, stressing Jesus as Savior of all. In the forty-day wilderness temptation (4:1-13), the devil tempts with power, glory, and spectacle; Jesus answers each time with Deuteronomy — He triumphs where Israel failed during forty years in the wilderness. Luke specifically notes the devil "departed from him for a season" (4:13); this "for a season" foreshadows the temptation's return at Gethsemane.`,
  },
  {
    title_zh: `二、加利利的怜悯医生（4:14-9:50）`,
    title_en: `II. The Compassionate Physician of Galilee (4:14-9:50)`,
    content_zh: `耶稣在拿撒勒会堂宣读以赛亚书61章："主的灵在我身上，因为他用膏膏我，叫我传福音给贫穷的人；差遣我报告：被掳的得释放，瞎眼的得看见，叫那受压制的得自由，报告神悦纳人的禧年"（4:18-19）。然后他卷起书卷说："今天这经应验在你们耳中了"（4:21）。这是路加独有的"就职宣言"，定义了耶稣整个事工的方向：福音是给贫穷人的，释放是给被掳者的，医治是给瞎眼者的。

路加特别记载了许多只在他笔下出现的故事，几乎全部与社会边缘人有关：拿因城寡妇独子的复活（7:11-17）——耶稣"看见那寡妇就怜悯她"，这是神对丧子孤寡的主动怜悯；有罪的女人用眼泪湿了耶稣的脚，又用头发擦干，用嘴亲，用香膏抹（7:37-38）——法利赛人西门心里鄙视她，耶稣却说"她许多的罪都赦免了，因为她的爱多"（7:47）；用自己的财物供给耶稣和门徒的妇女们（8:1-3），其中包括抹大拉的马利亚和希律管家苦撒的妻子约亚拿——妇女在福音运动中的角色在路加笔下被正式记录。

路加是"穷人和妇女的福音"——他以医生的眼光看见那些被社会忽略的人，以历史学家的笔触记录他们的故事。"康健的人用不着医生，有病的人才用得着"（5:31）——这正是路加所描绘的耶稣画像：一位走进病房的医生，而不是坐在殿堂等人膜拜的君王。`,
    content_en: `Jesus read from Isaiah 61 in the Nazareth synagogue: "The Spirit of the Lord is upon me, because he hath anointed me to preach the gospel to the poor; he hath sent me to heal the brokenhearted, to preach deliverance to the captives, and recovering of sight to the blind, to set at liberty them that are bruised, To preach the acceptable year of the Lord" (4:18-19). Then He closed the book and said, "This day is this scripture fulfilled in your ears" (4:21). This is Luke's unique "inaugural declaration," defining the entire direction of Jesus' ministry: the gospel is for the poor, release for the captives, healing for the blind.

Luke uniquely records many stories found only in his Gospel, nearly all involving the marginalized: the raising of the widow's only son at Nain (7:11-17) — Jesus "had compassion on her," God's initiative of mercy toward the bereaved; a sinful woman who "washed his feet with tears, and did wipe them with the hairs of her head, and kissed his feet, and anointed them with the ointment" (7:37-38) — Simon the Pharisee despised her inwardly, but Jesus said, "Her sins, which are many, are forgiven; for she loved much" (7:47); the women who ministered to Jesus and the disciples from their own resources (8:1-3), including Mary Magdalene and Joanna wife of Chuza, Herod's steward — women's role in the gospel movement is formally recorded in Luke's pen.

Luke is the "Gospel of the poor and of women" — with a physician's eye he sees those society overlooks, and with a historian's pen he records their stories. "They that are whole need not a physician; but they that are sick" (5:31) — this is precisely the portrait of Jesus that Luke paints: a physician who enters the sickroom, not a king sitting in a palace awaiting homage.`,
  },
  {
    title_zh: `三、通往耶路撒冷：恩典的比喻（9:51-19:27）`,
    title_en: `III. Journey to Jerusalem: Parables of Grace (9:51-19:27)`,
    content_zh: `"耶稣被接上升的日子将到，他就定意向耶路撒冷去"（9:51）——"定意"原文是"坚定了脸面"（set his face），带着不可回头的决心。从这里开始是路加独特的"旅行叙事"，占全书最大的篇幅（近十章），包含了耶稣最著名的比喻和教导——几乎全是路加独有的材料。

好撒玛利亚人的比喻（10:25-37）挑战了犹太人"谁是我的邻舍"的排外心理。受伤的人倒在路边，祭司和利未人都绕道而过，反倒是被犹太人鄙视的撒玛利亚人动了慈心。耶稣反转了问题：不是"谁是我的邻舍"，而是"你要做谁的邻舍"。马大与马利亚的故事（10:38-42）紧接其后——"马利亚已经选择那上好的福分"（10:42），服事很好，但听主的话更好。

第15章是路加福音的核心——三个"失而复得"的比喻。失羊（15:3-7）、失钱（15:8-10）、浪子（15:11-32）。浪子的比喻是全圣经最感人的故事之一。小儿子挥霍一切后在猪圈中"醒悟过来"（15:17），回家时父亲"相离还远，他父亲看见，就动了慈心，跑去抱着他的颈项，连连与他亲嘴"（15:20）。父亲不是站在门口等候，而是跑过去——在中东文化中，尊贵的长者从不当众奔跑，但这位父亲为了迎接浪子打破了所有体面。

然而比喻的高潮不是小儿子的回归，而是大儿子的拒绝。大儿子生气不肯进去，抱怨说"我服侍你这多年，从来没有违背过你的命"（15:29）——他以为自己的顺服让他有资格得到奖赏。这正是法利赛人的心态：自义比放荡更危险，因为自义的人不觉得自己需要恩典。

财主与拉撒路（16:19-31）警告财富的危险；不义管家的比喻（16:1-9）教导智慧地使用钱财；法利赛人和税吏的祷告（18:9-14）——"神啊，开恩可怜我这个罪人！"——展示了真正蒙恩的姿态。

撒该的故事（19:1-10）是旅行叙事的完美结尾。最被人鄙视的税吏长爬上桑树要看耶稣，耶稣抬头说"撒该，快下来！今天我必住在你家里"（19:5）。不是撒该找到了耶稣，是耶稣找到了撒该。"人子来，为要寻找、拯救失丧的人"（19:10）——这是路加福音的主题句，也是整个旅行叙事的总结。`,
    content_en: `"And it came to pass, when the time was come that he should be received up, he stedfastly set his face to go to Jerusalem" (9:51) — "stedfastly set his face" carries an irreversible determination. Here begins Luke's unique "travel narrative," the Gospel's largest section (nearly ten chapters), containing Jesus' most famous parables and teachings — nearly all unique to Luke.

The Good Samaritan (10:25-37) challenges the Jewish exclusivism of "who is my neighbour?" A wounded man lay by the road; a priest and a Levite both passed by on the other side, but a Samaritan — despised by the Jews — had compassion. Jesus reversed the question: not "who is my neighbour?" but "whose neighbour will you be?" The story of Martha and Mary follows immediately (10:38-42) — "Mary hath chosen that good part" (10:42); serving is good, but hearing the Lord's word is better.

Chapter 15 is Luke's theological center — three "lost and found" parables. The lost sheep (15:3-7), the lost coin (15:8-10), the prodigal son (15:11-32). The Prodigal Son is one of the most moving stories in all of Scripture. The younger son, having squandered everything, "came to himself" in a pigsty (15:17); when he returned, "his father saw him, and had compassion, and ran, and fell on his neck, and kissed him" (15:20). The father did not stand at the door waiting but ran — in Middle Eastern culture, a dignified elder never runs in public, but this father broke every convention of propriety to welcome the prodigal.

Yet the parable's climax is not the younger son's return but the elder son's refusal. The elder son was angry and would not go in, complaining, "Lo, these many years do I serve thee, neither transgressed I at any time thy commandment" (15:29) — he thought his obedience entitled him to reward. This is precisely the Pharisaic mindset: self-righteousness is more dangerous than prodigality, because the self-righteous do not see their need for grace.

The Rich Man and Lazarus (16:19-31) warns of wealth's peril; the Unjust Steward (16:1-9) teaches wise use of money; the Pharisee and the Publican (18:9-14) — "God be merciful to me a sinner!" — displays the posture of one who truly receives grace.

Zacchaeus (19:1-10) is the perfect conclusion to the travel narrative. The most despised chief publican climbed a sycamore tree to see Jesus; Jesus looked up and said, "Zacchaeus, make haste, and come down; for to day I must abide at thy house" (19:5). Zacchaeus did not find Jesus; Jesus found Zacchaeus. "For the Son of man is come to seek and to save that which was lost" (19:10) — this is Luke's theme verse and the summary of the entire travel narrative.`,
  },
  {
    title_zh: `四、耶路撒冷的教导与受难（19:28-23:56）`,
    title_en: `IV. Teaching in Jerusalem and the Passion (19:28-23:56)`,
    content_zh: `耶稣骑驴进入耶路撒冷时，"将近耶路撒冷，看见城，就为它哀哭"（19:41）——这是路加独有的记载。耶稣不是以胜利者的姿态进城，而是以先知的悲悯为即将毁灭的圣城落泪。"巴不得你在这日子知道关系你平安的事，无奈这事现在是隐藏的，叫你的眼看不出来"（19:42）。

洁净圣殿后（19:45-46），宗教领袖加紧了对耶稣的敌意。20-21章记录了一系列论战和橄榄山讲论，但路加的独特之处在于他对受难叙事的细腻处理。

最后的晚餐上，耶稣设立新约的圣餐："这杯是用我血所立的新约，是为你们流出来的"（22:20）。路加独特地记录了门徒在这庄严时刻争论谁为大（22:24）——人性的软弱在最神圣的时刻暴露无遗。耶稣回应说："我在你们中间如同服事人的"（22:27）。

客西马尼园中，路加以医生的眼光记录了一个独特的细节："耶稣极其伤痛，祷告更加恳切，汗珠如大血点滴在地上"（22:44）——现代医学称之为"血汗症"（hematidrosis），极度精神压力下毛细血管破裂，血液渗入汗腺。有天使从天上显现，加添他的力量（22:43）——这也是路加独有的。

十字架上，路加记录了耶稣三句独有的话。第一句："父啊！赦免他们，因为他们所做的，他们不晓得"（23:34）——在被钉的痛苦中为仇敌祷告。第二句：对悔改的强盗说"我实在告诉你，今日你要同我在乐园里了"（23:43）——这是恩典最极端的彰显：一个临死的罪犯，没有受洗，没有行善，仅仅因为信就得了救。第三句："父啊！我将我的灵魂交在你手里"（23:46）——与马可/马太记录的"我的神为什么离弃我"不同，路加以信靠的祷告结束——仆人将一切交回父的手中。`,
    content_en: `As Jesus rode toward Jerusalem, "when he was come near, he beheld the city, and wept over it" (19:41) — unique to Luke. Jesus enters not as a triumphant conqueror but as a prophet weeping with compassion over the city's coming destruction. "If thou hadst known, even thou, at least in this thy day, the things which belong unto thy peace! but now they are hid from thine eyes" (19:42).

After the Temple cleansing (19:45-46), the religious leaders intensify their hostility. Chapters 20-21 record a series of confrontations and the Olivet Discourse, but Luke's distinction lies in his delicate treatment of the Passion narrative.

At the Last Supper, Jesus institutes the new covenant sacrament: "This cup is the new testament in my blood, which is shed for you" (22:20). Luke uniquely records the disciples arguing about who is greatest at this solemn moment (22:24) — human weakness exposed at the holiest hour. Jesus responds: "I am among you as he that serveth" (22:27).

In Gethsemane, Luke records with a physician's eye a unique detail: "Being in an agony he prayed more earnestly: and his sweat was as it were great drops of blood falling down to the ground" (22:44) — modern medicine calls this hematidrosis, capillary rupture under extreme mental distress allowing blood to seep into sweat glands. An angel appeared from heaven strengthening Him (22:43) — also unique to Luke.

On the cross, Luke records three sayings found only in his Gospel. First: "Father, forgive them; for they know not what they do" (23:34) — praying for His enemies while being nailed. Second: to the penitent thief, "Verily I say unto thee, To day shalt thou be with me in paradise" (23:43) — the most extreme display of grace: a dying criminal, unbaptized, having done no good works, saved by faith alone. Third: "Father, into thy hands I commend my spirit" (23:46) — unlike Mark and Matthew's record of "My God, why hast thou forsaken me," Luke closes with a prayer of trust — the Servant commits all back into the Father's hands.`,
  },
  {
    title_zh: `五、复活与升天：喜乐的开始（24章）`,
    title_en: `V. Resurrection and Ascension: The Beginning of Joy (Ch. 24)`,
    content_zh: `路加的复活叙事以妇女们清早来到空坟墓开始（24:1-12）。天使对她们说："为什么在死人中找活人呢？他不在这里，已经复活了"（24:5-6）。女性是复活的第一批见证人——在当时社会中女性不被接受为合法证人，路加的记录恰恰证明了这不是编造的故事（如果编造，绝不会选女性作第一见证人）。

以马忤斯路上的两个门徒（24:13-35）是路加最著名的复活记事，也是全圣经最温暖的场景之一。他们心里愁苦，耶稣与他们同行却不被认出。"于是从摩西和众先知起，凡经上所指着自己的话都给他们讲解明白了"（24:27）。这是历史上第一堂完整的基督论圣经课——复活的基督亲自教导：旧约的一切都指向他的受苦和荣耀。

到了以马忤斯，他们挽留耶稣。"到了坐席的时候，耶稣拿起饼来，祝谢了，擘开，递给他们。他们的眼睛明亮了，这才认出他来"（24:30-31）。在擘饼的动作中——与最后晚餐相同的动作——他们认出了主。然后耶稣忽然不见了。他们彼此说："在路上他和我们说话、给我们讲解圣经的时候，我们的心岂不是火热的吗？"（24:32）

复活的基督仍在路上与我们同行——在我们灰心绝望的时候，他走近我们；在圣经的讲解中，我们的心火热；在圣餐的擘饼中，我们认出他来。

最后耶稣带门徒到伯大尼附近，"就举手给他们祝福。正祝福的时候，他就离开他们，被带到天上去了"（24:50-51）。路加福音以祝福开始（撒迦利亚在圣殿中），也以祝福结束（耶稣在伯大尼升天）。门徒不是忧伤地看着主离去，而是"大大地欢喜，回耶路撒冷去，常在殿里称颂神"（24:52-53）。这不是结局，而是使徒行传的序幕——同一位作者路加将在那里继续讲述圣灵降临和教会扩展的故事。`,
    content_en: `Luke's resurrection narrative begins with the women arriving at the empty tomb early in the morning (24:1-12). The angels said to them: "Why seek ye the living among the dead? He is not here, but is risen" (24:5-6). Women are the first witnesses of the resurrection — in that society women were not accepted as legal witnesses, and Luke's record actually proves this is not a fabricated story (if fabricated, women would never have been chosen as first witnesses).

The two disciples on the Emmaus road (24:13-35) is Luke's most famous resurrection account and one of the warmest scenes in all of Scripture. They walked in sorrow; Jesus joined them but was not recognized. "And beginning at Moses and all the prophets, he expounded unto them in all the scriptures the things concerning himself" (24:27). This is history's first complete Christological Bible lesson — the risen Christ Himself teaches: all of the Old Testament points to His suffering and glory.

At Emmaus they urged Jesus to stay. "And it came to pass, as he sat at meat with them, he took bread, and blessed it, and brake, and gave to them. And their eyes were opened, and they knew him" (24:30-31). In the act of breaking bread — the same act as at the Last Supper — they recognized the Lord. Then He vanished. They said to each other: "Did not our heart burn within us, while he talked with us by the way, and while he opened to us the scriptures?" (24:32)

The risen Christ still walks with us on the road — when we are despairing, He draws near; in the exposition of Scripture, our hearts burn; in the breaking of bread at the Lord's Table, we recognize Him.

Finally Jesus led them to Bethany, "and he lifted up his hands, and blessed them. And it came to pass, while he blessed them, he was parted from them, and carried up into heaven" (24:50-51). Luke's Gospel begins with blessing (Zechariah in the Temple) and ends with blessing (Jesus ascending at Bethany). The disciples did not watch the Lord depart in sorrow but "returned to Jerusalem with great joy: And were continually in the temple, praising and blessing God" (24:52-53). This is not an ending but the prelude to Acts — the same author Luke will continue the story of the Spirit's descent and the church's expansion.`,
  },
]

const overview = {
  zh: `路加福音（24章）是四福音书中最长的一卷，由外邦医生路加写给提阿非罗（1:1-4）。路加的写作特点是历史精确、关注社会边缘群体——穷人、妇女、外邦人、罪人。全书可分为四部分：耶稣的降生与预备（1-4:13）、加利利事工（4:14-9:50）、通往耶路撒冷的旅程（9:51-21:38）、受难与复活（22-24章）。路加福音的主题是"人子来，为要寻找、拯救失丧的人"（19:10），展现了一位满有怜悯的救主。`,
  en: `The Gospel of Luke (24 chapters) is the longest of the four Gospels, written by the Gentile physician Luke to Theophilus (1:1-4). Luke's writing is marked by historical precision and attention to society's margins -- the poor, women, Gentiles, and sinners. The book divides into four parts: Jesus' birth and preparation (1-4:13), Galilean ministry (4:14-9:50), the journey to Jerusalem (9:51-21:38), and the Passion and Resurrection (ch. 22-24). Luke's theme is 'The Son of man is come to seek and to save that which was lost' (19:10), portraying a Savior full of compassion.`,
};

const outline = [
  ["1-2章", `降生叙事与童年`, "Ch. 1-2", `Birth Narrative and Childhood`],
  ["3-4章", `受洗、家谱与试探`, "Ch. 3-4", `Baptism, Genealogy, and Temptation`],
  ["5-9章", `加利利事工与门训`, "Ch. 5-9", `Galilean Ministry and Discipleship`],
  ["10-13章", `旅途中的比喻（上）`, "Ch. 10-13", `Parables on the Journey (Part 1)`],
  ["14-19章", `旅途中的比喻（下）`, "Ch. 14-19", `Parables on the Journey (Part 2)`],
  ["20-21章", `圣殿争论与末世讲论`, "Ch. 20-21", `Temple Controversies and Eschatological Discourse`],
  ["22-23章", `受难与十字架`, "Ch. 22-23", `The Passion and the Cross`],
  ["24章", `复活与升天`, "Ch. 24", `Resurrection and Ascension`]
];

const theology = {
  title_zh: `核心神学：普世的救恩与圣灵的大能`,
  title_en: `Core Theology: Universal Salvation and the Power of the Holy Spirit`,
  content_zh: `路加福音是四福音中最详尽的，由一位外邦医生写成，强调福音超越一切社会、种族和性别的界限。

第一，寻找失丧的人。路加福音15章的三个比喻——失羊、失钱、浪子——集中表达了耶稣使命的核心："人子来，为要寻找拯救失丧的人"（19:10）。法利赛人批评耶稣"接待罪人，又同他们吃饭"（15:2），耶稣用这三个比喻回应：天上为一个罪人悔改所有的欢喜，比为九十九个不用悔改的义人欢喜更大（15:7）。浪子的比喻不仅是关于浪子的悔改，更是关于父亲不计代价的爱——"相离还远，他父亲看见，就动了慈心，跑去抱着他的颈项，连连与他亲嘴"（15:20）。

第二，穷人、妇女和被边缘化的人。路加特别关注社会的边缘群体。马利亚的尊主颂宣告神的翻转："祂叫有权柄的失位，叫卑贱的升高；叫饥饿的得饱美食，叫富足的空手回去"（1:52-53）。耶稣在拿撒勒会堂宣读以赛亚书61章作为祂的"就职宣言"："主的灵在我身上，因为祂用膏膏我，叫我传福音给贫穷的人"（4:18）。税吏撒该、十字架上的强盗、好撒马利亚人——路加记录了那些被宗教体制排斥的人如何被基督接纳。

第三，圣灵的工作。路加福音比其他福音书更强调圣灵的角色。耶稣由圣灵感孕（1:35），受洗时圣灵降临（3:22），"被圣灵充满"进入旷野（4:1），"满有圣灵的能力"开始传道（4:14）。这预备了使徒行传中圣灵降临的叙事——路加-使徒行传是一个完整的两卷本作品，圣灵是贯穿两卷的主线。

第四，祷告的福音。路加记录了耶稣祷告的场景比任何其他福音书都多——受洗时祷告（3:21）、拣选十二门徒前整夜祷告（6:12）、登山变像时祷告（9:28-29）、教导门徒祷告（11:1-13）、在客西马尼园汗如血滴地祷告（22:44）。路加要告诉我们：即使是神的儿子，也在祷告中与父保持亲密的关系。祷告不是软弱的标志，而是能力的源头。`,
  content_en: `Luke is the most detailed of the four Gospels, written by a Gentile physician, emphasizing the gospel's transcendence of all social, ethnic, and gender boundaries.

First, seeking the lost. The three parables of Luke 15 — the lost sheep, the lost coin, the prodigal son — concentrate the core of Jesus's mission: "For the Son of man is come to seek and to save that which was lost" (19:10). The Pharisees criticized Jesus for receiving sinners and eating with them (15:2); Jesus responded with these parables: there is more joy in heaven over one sinner who repents than over ninety-nine righteous persons who need no repentance (15:7). The parable of the prodigal is not only about the son's repentance but about the father's reckless love — "when he was yet a great way off, his father saw him, and had compassion, and ran, and fell on his neck, and kissed him" (15:20).

Second, the poor, women, and the marginalized. Luke gives special attention to society's margins. Mary's Magnificat declares God's reversal: "He hath put down the mighty from their seats, and exalted them of low degree. He hath filled the hungry with good things; and the rich he hath sent empty away" (1:52-53). Jesus read Isaiah 61 in the Nazareth synagogue as His "inaugural address": "The Spirit of the Lord is upon me, because he hath anointed me to preach the gospel to the poor" (4:18). Zacchaeus the tax collector, the thief on the cross, the Good Samaritan — Luke records how those excluded by the religious establishment were received by Christ.

Third, the work of the Holy Spirit. Luke emphasizes the Spirit's role more than any other Gospel. Jesus was conceived by the Spirit (1:35), the Spirit descended at His baptism (3:22), He was "full of the Holy Ghost" entering the wilderness (4:1), and began His ministry "in the power of the Spirit" (4:14). This prepares for the Pentecost narrative in Acts — Luke-Acts is a complete two-volume work with the Holy Spirit as the thread running through both.

Fourth, the gospel of prayer. Luke records more scenes of Jesus praying than any other Gospel — praying at baptism (3:21), spending an entire night in prayer before choosing the Twelve (6:12), praying at the Transfiguration (9:28-29), teaching disciples to pray (11:1-13), praying in Gethsemane with sweat like drops of blood (22:44). Luke tells us: even the Son of God maintained intimate communion with the Father through prayer. Prayer is not a sign of weakness but the source of power.`,
};

const keyVerse = {
  zh: `"人子来，为要寻找、拯救失丧的人。"（路加福音 19:10）`,
  en: `"For the Son of man is come to seek and to save that which was lost." (Luke 19:10)`,
};

const info = { nameZh: `路加福音`, nameEn: `Luke`, author: `路加医生`, date: `约公元60-80年`, chapters: `24章`, backHref: `/new-testament/gospels`, backLabel: `四福音书`, bibleId: `LUK` };


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