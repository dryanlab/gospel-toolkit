export interface ReadingChapter {
  book: string;
  bookEn: string;
  chapter: number;
  title: string;
  titleEn: string;
  author: string;
  authorEn: string;
  scripture: string;
  content_zh: string;
  content_en: string;
  historyContext_zh: string;
  historyContext_en: string;
  structure_zh: string;
  structure_en: string;
  theology_zh: string;
  theology_en: string;
  christShadow_zh: string;
  christShadow_en: string;
  publishDate: string;
}

export const readings: ReadingChapter[] = [];

readings.push({
  book: '创世记', bookEn: 'Genesis', chapter: 1,
  publishDate: '2026-02-16',
  title: '起初', titleEn: 'In the Beginning',
  author: '摩西', authorEn: 'Moses',
  scripture: '创世记 1:1-31 / Genesis 1:1-31',
  content_zh: `弟兄姐妹，我要从"起初"说起。

当我在西奈山下写这些话的时候，以色列人刚从埃及出来不久。四百年了——四百年在埃及为奴的日子。他们天天看埃及人拜太阳神拉，拜尼罗河神哈皮，拜法老。很多人心里已经分不清谁才是真神了。

所以耶和华对我说：**你要从头告诉他们。**

"起初，神创造天地。"

就这一句话，把埃及所有的假神都拆毁了。太阳不是神——第四天才被造出来的。尼罗河不是神——第三天水才被聚到一处。法老不是神——人是第六天按神的形象造的，法老也不过是被造之物。

你们注意"起初"这两个字。不是"很久很久以前"，不是"也许有一天"——是**起初**。斩钉截铁。在一切之先，神已经在那里了。不是混沌在先，不是黑暗在先，是神在先。

然后你看神怎么创造的——**神说**。他不需要争战，不需要从什么巨人的尸体上切割出天地来。埃及人的创世神话充满了打斗和血腥，但我们的神，他只需要开口说话。"神说要有光，就有了光。"权柄何等大，何等轻省。

六天的创造有一个精妙的结构，你们看：

- 第1日 造**光** ↔ 第4日 造**光体**（太阳月亮星辰）
- 第2日 分**天与水** ↔ 第5日 造**飞鸟与鱼**
- 第3日 现**旱地与植物** ↔ 第6日 造**动物与人**

前三天造"空间"，后三天填满"居民"。这不是随意的，这是一位有秩序的神在做工。

最后，到了第六天，神说了一句不同的话。前面都是"神说，要有……就有了"。但造人的时候，神说：**"我们要照着我们的形象，按着我们的样式造人。"**

"我们"——我写下这个词的时候，还不完全明白。但如今你们知道了，这是圣父、圣子、圣灵，三位一体的神在彼此商议。造山造海造星辰，神吩咐就成了；唯独造人，神停下来说"我们"。**你在神眼中何等尊贵，你知道吗？**

每造完一样，神都看着说"好的"。造完一切之后，神看着说"甚好"。不是"还行"，不是"凑合"——是**甚好**。这个世界从神手中出来的时候，没有死亡，没有眼泪，没有罪。一切都是甚好的。

你读完第一章，记住一件事：在一切之先，神已经在那里了。他说有就有，命立就立。这位创造天地的神，也是呼召你的神。`,
  content_en: `Brothers and sisters, I must begin at "the beginning."

When I wrote these words at the foot of Mount Sinai, the Israelites had just come out of Egypt. Four hundred years -- four hundred years of slavery. Every day they watched the Egyptians worship Ra the sun god, Hapi the river god, and Pharaoh himself. Many of them could no longer tell who the true God was.

So the LORD said to me: **Tell them from the very beginning.**

"In the beginning, God created the heavens and the earth."

That one sentence demolished every false god in Egypt. The sun is not God -- it was not created until the fourth day. The Nile is not God -- the waters were not gathered until the third day. Pharaoh is not God -- man was made on the sixth day in God's image, and Pharaoh is merely a creature like any other.

Notice the words "in the beginning." Not "once upon a time." Not "perhaps one day." It is **in the beginning** -- definitive, absolute. Before all things, God was already there. Not chaos first, not darkness first -- God first.

Then see how God creates -- **God said**. He does not need to battle. He does not carve the world from the corpse of some slain giant, as the Egyptian myths tell. Our God simply speaks. "God said, 'Let there be light,' and there was light." What authority. What effortless sovereignty.

The six days of creation reveal an exquisite structure:

- Day 1: **Light** -- Day 4: **Luminaries** (sun, moon, stars)
- Day 2: **Sky and waters** -- Day 5: **Birds and fish**
- Day 3: **Land and vegetation** -- Day 6: **Animals and man**

The first three days form the "spaces"; the last three days fill them with "inhabitants." This is not random -- this is a God of order at work.

Finally, on the sixth day, God said something different. Before, it was always "Let there be... and there was." But when creating man, God said: **"Let us make man in our image, after our likeness."**

"Let us" -- when I wrote those words, I did not fully understand them. But now you know: this is the Father, the Son, and the Holy Spirit -- the triune God in divine counsel. Mountains, seas, and stars were commanded into existence; but for man alone, God paused and said "let us." **Do you know how precious you are in God's sight?**

After each act of creation, God looked and said "it was good." After completing everything, God looked and said "it was **very good**." Not "acceptable." Not "adequate." **Very good.** When this world came from God's hand, there was no death, no tears, no sin. Everything was very good.

When you finish this first chapter, remember one thing: before all things, God was already there. He speaks and it is done; He commands and it stands firm. This God who created the heavens and the earth is the same God who calls you.`,
  historyContext_zh: '摩西约在公元前1446年带领以色列人出埃及后，在西奈旷野写下创世记。当时的以色列人深受埃及多神论影响，需要从根本上认识独一真神。',
  historyContext_en: 'Moses wrote Genesis in the Sinai wilderness around 1446 BC, after leading Israel out of Egypt. The Israelites were deeply influenced by Egyptian polytheism and needed to know the one true God from the very foundation.',
  structure_zh: '六日创造呈对称结构（forming - filling），第七日安息为高潮。"神说"出现十次，对应十诫的十句话。',
  structure_en: 'The six days of creation follow a symmetrical structure (forming - filling), with the seventh day of rest as the climax. "God said" appears ten times, echoing the Ten Commandments.',
  theology_zh: '神是独一的创造者（反对多神论）；创造出于神的话语，不是争战（反对异教神话）；人按神的形象被造，有独特尊严（反对人是神的奴隶）；物质世界是"甚好"的（反对诺斯替主义）。',
  theology_en: 'God is the sole Creator (against polytheism); creation comes from God\'s word, not conflict (against pagan myths); man is made in God\'s image with unique dignity (against the idea that humans are slaves of the gods); the material world is "very good" (against Gnosticism).',
  christShadow_zh: '"太初有道，道与神同在，道就是神。万物是借着他造的。"（约1:1-3）约翰用了和创世记一模一样的开头，告诉我们：那位说"要有光"的神，就是道成肉身的基督。',
  christShadow_en: '"In the beginning was the Word, and the Word was with God, and the Word was God. All things were made through him." (John 1:1-3) John deliberately echoes Genesis, telling us: the God who said "Let there be light" is the same Christ who became flesh.',
});

readings.push({
  book: '创世记', bookEn: 'Genesis', chapter: 2,
  publishDate: '2026-02-17',
  title: '伊甸', titleEn: 'Eden',
  author: '摩西', authorEn: 'Moses',
  scripture: '创世记 2:1-25 / Genesis 2:1-25',
  content_zh: `弟兄姐妹，第一章我给你们看了全景——六天创造的壮丽图画。现在我要把镜头拉近，让你们看看第六天到底发生了什么。

先说安息日。"到第七日，神造物的工已经完毕，就在第七日歇了他一切的工，安息了。"

你们不要误解——神不是累了。造天地对他来说毫不费力。他安息，是因为一切都**完成了**。这个安息是满足的安息，是一位艺术家看着自己完美的作品、放下画笔的安息。他定这一日为圣日，是给你们的——让你们知道，人活着不是只为了劳碌，你是被造来享受神的同在的。

现在让我告诉你们，神是怎么造人的。

他没有说"要有人"就有了人。不是的。**"耶和华神用地上的尘土造人，将生气吹在他鼻孔里，他就成了有灵的活人。"**

你听到了吗？尘土。你是从尘土来的。别以为自己多了不起——你的身体和脚下的泥土是同一种材料。但也别以为自己多卑微——因为那位创造宇宙的神，亲自用尘土造了你，又将他自己的生气吹进你的鼻孔。造星辰他只需说一句话，造你他却亲自动工。

**这不是工厂流水线，这是一位父亲在塑造他的孩子。**

然后耶和华在东方的伊甸立了一个园子，把人安置在里面。那个园子什么样？各样的树从地里长出来，可以悦人的眼目，其上的果子好作食物。还有一条河从伊甸流出来，滋润那园子。神把人放在丰盛里面，不是放在荒漠里面。

但园子中间有两棵特别的树：生命树，和分别善恶树。

耶和华吩咐那人说：**"园中各样树上的果子，你可以随意吃，只是分别善恶树上的果子，你不可吃，因为你吃的日子必定死。"**

你们想一想这个画面。整座园子的果子都是你的——随意吃。只有一棵树不可以。这不是苛刻，这是恩典中的界限。神是在说：我把一切都给你了，但你要记住一件事——**我是神，你不是。** 善恶的标准是我定的，不是你定的。这棵树不是试探，是提醒。

接着，神说了一句非常深的话：**"那人独居不好。"**

在一切都"甚好"的创造中，这是神第一次说"不好"。不是因为亚当有什么缺陷，而是因为神造人是为了关系——和神的关系，和人的关系。独居不好，因为人不是被设计来孤独的。

然后神让亚当给动物起名。一个一个来——牛、羊、鹰、鱼……但"那人没有遇见配偶帮助他"。神让亚当自己发现：动物不能填满心里那个位置。

**"耶和华神使他沉睡，他就睡了；于是取下他的一根肋骨，又把肉合起来。耶和华神就用那人身上所取的肋骨造成一个女人，领她到那人跟前。"**

不是从头取的——免得她辖管他。不是从脚取的——免得他践踏她。是从**肋旁**取的——在他心脏旁边，要他珍惜她、保护她。

亚当看见夏娃的时候，说了人类历史上第一句情话：**"这是我骨中的骨，肉中的肉。"** 这不是冷静的分类学报告——这是一个人终于遇见了另一个人时，心底涌出来的惊叹。

"因此，人要离开父母，与妻子连合，二人成为一体。"——婚姻不是人发明的制度，是神在伊甸园亲手设立的。

最后一节："当时夫妻二人赤身露体，并不羞耻。"

记住这句话。因为到了第三章，一切都变了。`,
  content_en: `Brothers and sisters, in the first chapter I showed you the panorama -- the magnificent canvas of six days of creation. Now I want to bring the lens closer, to show you what actually happened on the sixth day.

First, the Sabbath. "By the seventh day God had finished the work he had been doing; so on the seventh day he rested from all his work."

Do not misunderstand -- God was not tired. Creating the heavens and the earth cost him no effort. He rested because everything was **complete.** This is the rest of satisfaction, like an artist setting down his brush before a perfect masterpiece. He made this day holy as a gift to you -- so you would know that you were not made merely for toil. You were made to enjoy the presence of God.

Now let me tell you how God made man.

He did not simply say "Let there be man" and man appeared. No. **"The LORD God formed the man from the dust of the ground and breathed into his nostrils the breath of life, and the man became a living being."**

Did you hear that? Dust. You came from dust. Do not think too highly of yourself -- your body is made of the same material as the dirt beneath your feet. But do not think too little of yourself either -- because the God who created the universe personally formed you from dust and breathed his own breath of life into your nostrils. To make the stars, he merely spoke a word. To make you, he acted with his own hand.

**This was not an assembly line. This was a Father forming his child.**

Then the LORD planted a garden in Eden, in the east, and placed the man there. What was that garden like? Every tree that was pleasant to the sight and good for food grew from the ground. A river flowed from Eden to water the garden. God placed man in abundance, not in a wasteland.

But in the middle of the garden stood two remarkable trees: the tree of life, and the tree of the knowledge of good and evil.

The LORD commanded the man: **"You are free to eat from any tree in the garden; but you must not eat from the tree of the knowledge of good and evil, for when you eat of it you will certainly die."**

Consider this picture. Every fruit in the entire garden is yours -- eat freely. Only one tree is forbidden. This is not harsh -- this is a boundary within grace. God is saying: I have given you everything, but remember one thing -- **I am God, and you are not.** The standard of good and evil is mine to set, not yours. This tree is not a trap; it is a reminder.

Then God said something profoundly moving: **"It is not good for the man to be alone."**

In a creation where everything was "very good," this is the first time God says "not good." Not because Adam was defective, but because God made man for relationship -- with God and with others. It is not good to be alone, because man was not designed for solitude.

So God had Adam name the animals. One by one -- cattle, sheep, eagles, fish... but "for Adam no suitable helper was found." God let Adam discover for himself: animals cannot fill that place in the heart.

**"So the LORD God caused the man to fall into a deep sleep; and while he was sleeping, he took one of the man's ribs and then closed up the place with flesh. Then the LORD God made a woman from the rib he had taken out of the man, and he brought her to the man."**

Not from his head -- lest she rule over him. Not from his foot -- lest he trample her. From his **side** -- near his heart, so he would cherish and protect her.

When Adam saw Eve, he spoke the first love words in human history: **"This is now bone of my bones and flesh of my flesh."** This was not a calm taxonomic report -- this was the wonder that burst from a man who had finally found another like himself.

"That is why a man leaves his father and mother and is united to his wife, and they become one flesh." Marriage is not a human invention. It is an institution God himself established in Eden.

The final verse: "Adam and his wife were both naked, and they felt no shame."

Remember those words. Because in the next chapter, everything changes.`,
  historyContext_zh: '创世记第2章不是与第1章矛盾的"另一个创造故事"，而是对第六天的详细特写。古近东文学常用这种"概述+聚焦"的手法。',
  historyContext_en: 'Genesis 2 is not a contradictory "second creation account" but a detailed close-up of the sixth day. This "overview then zoom-in" technique is common in ancient Near Eastern literature.',
  structure_zh: '2:1-3 安息日 - 2:4-17 造人与伊甸 - 2:18-25 造女人与婚姻。从宇宙视角收窄到园子，再收窄到两个人的关系。',
  structure_en: '2:1-3 Sabbath - 2:4-17 Man and Eden - 2:18-25 Woman and marriage. The lens narrows from cosmos to garden to the relationship between two people.',
  theology_zh: '安息日是恩典，不是律法的重担——人被造来享受神；"用尘土造人"——人的卑微与尊贵并存；"独居不好"——人是为团契和关系被造的；婚姻是神设立的圣约，不是社会契约。',
  theology_en: 'The Sabbath is grace, not a legal burden -- man was made to enjoy God; "formed from dust" -- human humility and dignity coexist; "not good to be alone" -- man was made for fellowship and relationship; marriage is a divine covenant, not a social contract.',
  christShadow_zh: '亚当沉睡，肋旁被开，夏娃从中而出；基督在十字架上"睡了"，肋旁被枪扎，血和水流出来（约19:34），教会从中诞生。保罗说婚姻的奥秘"是指着基督和教会说的"（弗5:32）。亚当与夏娃的合一，预表基督与教会的永恒联合。',
  christShadow_en: 'Adam slept, his side was opened, and Eve came forth; Christ "slept" on the cross, his side was pierced, blood and water flowed out (John 19:34), and the Church was born. Paul says the mystery of marriage "refers to Christ and the church" (Eph 5:32). The union of Adam and Eve foreshadows the eternal union of Christ and his Church.',
});

readings.push({
  book: '创世记', bookEn: 'Genesis', chapter: 3,
  publishDate: '2026-02-18',
  title: '堕落', titleEn: 'The Fall',
  author: '摩西', authorEn: 'Moses',
  scripture: '创世记 3:1-24 / Genesis 3:1-24',
  content_zh: `弟兄姐妹，这是整本圣经最沉重的一章。

我每次写到这里，手都在发抖。因为从这一章开始，一切都碎了。

"耶和华神所造的，惟有蛇比田野一切的活物更狡猾。"

注意——蛇是"耶和华神所造的"。它不是什么独立的邪恶力量，不是跟神平起平坐的对手。它是被造之物。但它被那古蛇——魔鬼——附了。牠来到女人面前，没有直接说"去吃那果子"。不，牠比那狡猾得多。

牠问了一个问题：**"神岂是真说不许你们吃园中所有树上的果子吗？"**

你们看到了吗？牠做了三件事。第一，**歪曲神的话**——神明明说"各样树上的果子你可以随意吃"，蛇把它扭成了"不许你们吃所有的果子"，把一位慷慨的神变成了一个吝啬的暴君。第二，**用问句而不是陈述句**——牠不告诉你该怎么想，牠让你自己开始怀疑。第三，**牠不叫神的名字**——"神岂是真说"，不是"耶和华岂是真说"。牠把那位和你立约的、爱你的神，变成了一个遥远的、可疑的概念。

**这就是试探的本质：不是叫你做坏事，是叫你怀疑神的好。**

夏娃回答的时候，也出了问题。她说："惟有园当中那棵树上的果子，神曾说你们不可吃，**也不可摸**，免得你们死。"

神从来没有说"不可摸"。夏娃自己加上去的。她把神的命令变得比实际更苛刻——当你觉得神不合理的时候，你就离悖逆不远了。

然后蛇说了那句致命的话：**"你们不一定死。因为神知道，你们吃的日子眼睛就明亮了，你们便如神能知道善恶。"**

"你们便如神。"——这是一切罪的根源。不是偷窃，不是谋杀，不是淫乱。是**想要成为神**。想要自己定义善恶，自己做主，不再需要那位创造你的神。第一章里神说"我们要照着我们的形象造人"，到了第三章，人说"我要成为神"。从像神到想当神——一字之差，天壤之别。

**"于是女人见那棵树的果子好作食物，也悦人的眼目，且是可喜爱的，能使人有智慧，就摘下果子来吃了，又给她丈夫，她丈夫也吃了。"**

亚当在哪里？就在旁边。"她又给她丈夫，**她丈夫也吃了**。"他什么都没说。神让他看守这园子，保护这女人——他一言不发地站在那里，看着蛇欺骗他的妻子，然后接过果子就吃了。

亚当的沉默，和夏娃被骗一样严重。

**"他们二人的眼睛就明亮了，才知道自己是赤身露体，便拿无花果树的叶子为自己编做裙子。"**

上一章最后一句是什么？"赤身露体，并不羞耻。"现在呢？**羞耻来了。** 他们的身体没有变，变的是他们的心。罪进来之后，第一个反应不是疼痛，不是恐惧——是**羞耻**。他们开始遮盖自己。

然后他们听到神的声音——"天起了凉风，耶和华神在园中行走。"

以前，这是他们一天中最盼望的时刻。现在，他们藏了起来。

神呼唤那人，说：**"你在哪里？"**

这是圣经里最心碎的一个问题。神当然知道他们在哪里。这不是质问，这是一位父亲在找他走丢的孩子。**"你在哪里？"** 不是要定位，是要你回来。

亚当说："我听见你的声音，我就害怕。因为我赤身露体，我便藏了。"

然后互相推卸：亚当怪夏娃——"**你所赐给我**与我同居的女人"——你们听到了吗？他甚至在怪神。夏娃怪蛇："蛇引诱我，我就吃了。"

**罪的第二个特征：不肯承认。**

但接下来，是整本圣经最重要的一节经文之一。神对蛇说：

**"我又要叫你和女人彼此为仇；你的后裔和女人的后裔也彼此为仇。女人的后裔要伤你的头，你要伤他的脚跟。"**

弟兄姐妹，我写下这句话的时候，还不知道"女人的后裔"是谁。但如今你们知道了——**那就是耶稣基督。** 他在十字架上被蛇"伤了脚跟"——他受苦、流血、死了。但他"伤了蛇的头"——他从死里复活，彻底击碎了罪和死亡的权势。

在人犯罪的同一天，在审判的话语中间，神已经藏下了救赎的应许。**这就是恩典——你还在逃跑，他已经在追你了。**

然后神做了一件事："耶和华神为亚当和他妻子用**皮子**做衣服给他们穿。"

人自己用无花果树叶子遮盖——不够。神用皮子——这意味着有一只动物为他们死了。有血流出来了。**这是圣经里第一次献祭的影子。** 人的罪，需要代价。那只无名的动物，指向两千年后各各他山上那只"神的羔羊"。

最后，神把他们赶出了伊甸园，在园子东边安设基路伯和四面转动发火焰的剑，"要把守生命树的道路"。

回不去了。伊甸的门关上了。

但请你们记住——神没有说"永远关上了"。那条通往生命树的路，终有一天会重新打开。在圣经的最后一卷，约翰看见了："在河这边与那边有生命树，结十二样果子。"（启22:2）

从伊甸到新耶路撒冷，从被赶出去到被迎回来——**这就是整本圣经的故事。**`,
  content_en: `Brothers and sisters, this is the heaviest chapter in all of Scripture.

Every time I come to write it, my hand trembles. Because from this chapter onward, everything shatters.

"Now the serpent was more crafty than any of the wild animals the LORD God had made."

Notice -- the serpent is one "the LORD God had made." It is not some independent force of evil, not an adversary equal to God. It is a creature. But it was possessed by that ancient serpent -- the devil. It came to the woman, and it did not say directly, "Go eat the fruit." No, it was far more cunning than that.

It asked a question: **"Did God really say, 'You must not eat from any tree in the garden'?"**

Do you see what it did? Three things. First, **it distorted God's word** -- God clearly said "you are free to eat from any tree," but the serpent twisted it into "you must not eat from any tree," turning a generous God into a stingy tyrant. Second, **it used a question, not a statement** -- it does not tell you what to think; it makes you begin to doubt on your own. Third, **it did not use God's name** -- "Did God really say," not "Did the LORD really say." It turned the covenant God who loves you into a distant, suspicious concept.

**This is the essence of temptation: not to make you do evil, but to make you doubt God's goodness.**

Eve's reply was also flawed. She said: "God did say, 'You must not eat fruit from the tree that is in the middle of the garden, and **you must not touch it**, or you will die.'"

God never said "you must not touch it." Eve added that herself. She made God's command harsher than it actually was -- and when you begin to see God as unreasonable, you are not far from rebellion.

Then the serpent spoke its lethal words: **"You will not certainly die. For God knows that when you eat from it your eyes will be opened, and you will be like God, knowing good and evil."**

"You will be like God." This is the root of all sin. Not theft, not murder, not adultery. It is **wanting to be God.** Wanting to define good and evil for yourself, to be your own master, to no longer need the God who made you. In chapter one, God said "Let us make man in our image." In chapter three, man says "I will be like God." From being like God to wanting to be God -- a subtle shift, an infinite chasm.

**"When the woman saw that the fruit of the tree was good for food and pleasing to the eye, and also desirable for gaining wisdom, she took some and ate it. She also gave some to her husband, who was with her, and he ate it."**

Where was Adam? Right there. "She also gave some to her husband, **who was with her**, and he ate it." He said nothing. God had charged him to tend and guard the garden, to protect this woman -- and he stood there in silence, watching the serpent deceive his wife, then took the fruit and ate.

Adam's silence was as grave as Eve's deception.

**"Then the eyes of both of them were opened, and they realized they were naked; so they sewed fig leaves together and made coverings for themselves."**

What was the last verse of the previous chapter? "They were naked, and they felt no shame." And now? **Shame arrived.** Their bodies had not changed; their hearts had. When sin entered, the first response was not pain, not fear -- it was **shame**. They began to cover themselves.

Then they heard the sound of God -- "the LORD God walking in the garden in the cool of the day."

Once, this was the moment they longed for most each day. Now, they hid.

God called out to the man: **"Where are you?"**

This is the most heartbreaking question in all of Scripture. God certainly knew where they were. This was not an interrogation -- this was a Father searching for his lost child. **"Where are you?"** Not to locate, but to call you home.

Adam said: "I heard you in the garden, and I was afraid because I was naked; so I hid."

Then came the blame-shifting: Adam blamed Eve -- "**The woman you put here with me** -- she gave me some fruit" -- did you hear that? He was even blaming God. Eve blamed the serpent: "The serpent deceived me, and I ate."

**The second mark of sin: the refusal to own it.**

But then comes one of the most important verses in all of Scripture. God said to the serpent:

**"I will put enmity between you and the woman, and between your offspring and hers; he will crush your head, and you will strike his heel."**

Brothers and sisters, when I wrote these words, I did not yet know who "her offspring" would be. But now you know -- **it is Jesus Christ.** On the cross, the serpent "struck his heel" -- he suffered, bled, and died. But he "crushed the serpent's head" -- he rose from the dead and utterly destroyed the power of sin and death.

On the very day man sinned, embedded within the words of judgment, God had already hidden the promise of redemption. **This is grace -- while you were still running away, he was already pursuing you.**

Then God did something: "The LORD God made garments of **skin** for Adam and his wife and clothed them."

The fig leaves man made for himself were not enough. God used animal skins -- which means an animal died for them. Blood was shed. **This is the first shadow of sacrifice in Scripture.** Human sin requires a cost. That unnamed animal points forward to "the Lamb of God" on Golgotha two thousand years later.

Finally, God drove them out of the Garden of Eden, and at the east of the garden he placed cherubim and a flaming sword flashing back and forth to "guard the way to the tree of life."

There was no going back. The gate of Eden was shut.

But remember -- God never said it was shut forever. That path to the tree of life will one day reopen. In the last book of Scripture, John saw it: "On each side of the river stood the tree of life, bearing twelve crops of fruit." (Rev 22:2)

From Eden to the New Jerusalem, from exile to homecoming -- **this is the story of the entire Bible.**`,
  historyContext_zh: '创世记第3章被称为"原型福音"（Protoevangelium）所在之处。3:15被历代改革宗神学家视为圣经中第一个福音应许——基督要来击碎蛇的头。',
  historyContext_en: 'Genesis 3 contains what is known as the Protoevangelium. Verse 3:15 has been recognized by Reformed theologians throughout history as the first gospel promise in Scripture -- Christ will come to crush the serpent\'s head.',
  structure_zh: '3:1-5 试探 - 3:6-7 犯罪 - 3:8-13 审问 - 3:14-19 审判与应许 - 3:20-21 恩典的遮盖 - 3:22-24 逐出伊甸。从引诱到堕落到审判到福音，一气呵成。',
  structure_en: '3:1-5 Temptation - 3:6-7 The Fall - 3:8-13 Interrogation - 3:14-19 Judgment and Promise - 3:20-21 Grace-covering - 3:22-24 Exile from Eden. From enticement to fall to judgment to gospel, all in one breath.',
  theology_zh: '罪的本质是不信神的话、想要取代神（韦敏斯德小要理问答Q18）；亚当是全人类的代表，他的罪归算给所有后裔（罗5:12）；"你在哪里？"——神主动寻找罪人，不是罪人寻找神；皮衣遮盖——救恩是神预备的，不是人自己缝补的。',
  theology_en: 'The essence of sin is disbelief in God\'s word and the desire to replace God (WSC Q18); Adam is the representative of all humanity, his sin imputed to all descendants (Rom 5:12); "Where are you?" -- God actively seeks sinners, not sinners seeking God; the garments of skin -- salvation is provided by God, not patched together by man.',
  christShadow_zh: '"女人的后裔"（3:15）是圣经中第一个指向基督的应许——他由童贞女所生（赛7:14，加4:4），要来踩碎蛇的头。神用皮衣遮盖亚当和夏娃，意味着有动物为他们流血而死，这条献祭的线从这里开始，经过逾越节的羔羊，最终指向十字架上神的羔羊。亚当在园中面对试探而跌倒，基督却在旷野面对同样的试探而得胜（太4:1-11）——亚当失败之处，正是基督得胜之处。而神对亚当的呼唤"你在哪里？"贯穿了整本圣经，直到路加福音15章那位跑向浪子的父亲——神从未停止寻找失丧的人。',
  christShadow_en: '"Her offspring" (3:15) is the first promise in Scripture pointing to Christ -- born of a virgin (Isa 7:14, Gal 4:4), he would come to crush the serpent\'s head. God clothed Adam and Eve with garments of skin, meaning an animal died and shed blood for them. This thread of sacrifice begins here, runs through the Passover lamb, and reaches its fulfillment in the Lamb of God on the cross. Adam faced temptation in the garden and fell; Christ faced the same temptation in the wilderness and prevailed (Matt 4:1-11) -- where Adam failed, Christ triumphed. And God\'s call to Adam, "Where are you?" echoes throughout Scripture, all the way to the father running toward the prodigal son in Luke 15 -- God never stops seeking the lost.',
});

readings.push({
  book: '创世记', bookEn: 'Genesis', chapter: 4,
  publishDate: '2026-02-19',
  title: '兄弟', titleEn: 'Brothers',
  author: '摩西', authorEn: 'Moses',
  scripture: '创世记 4:1-26 / Genesis 4:1-26',
  content_zh: `弟兄姐妹，上一章亚当和夏娃被赶出伊甸园，门关上了。你以为故事会停下来喘口气吗？不。罪一旦进来，它就跑得比你想象的快。

夏娃生了该隐，说："耶和华使我得了一个男子。"她用了一个很特别的词——有些拉比认为她以为该隐就是神应许的那位"女人的后裔"，那位要来踩碎蛇头的。如果是这样，她错得有多离谱。这个她以为是拯救者的孩子，后来成了人类第一个杀人犯。

然后她又生了亚伯。"亚伯"这个名字的意思是"虚空"、"一口气"。不知道为什么她给第二个儿子起了这样的名字。也许她已经隐隐感觉到，伊甸之外的世界，一切都是虚空。

该隐种地，亚伯牧羊。到了献祭的时候——

**"该隐拿地里的出产为供物献给耶和华；亚伯也将他羊群中头生的和羊的脂油献上。耶和华看中了亚伯和他的供物，只是看不中该隐和他的供物。"**

这里很多人问：为什么神看中亚伯不看中该隐？是因为血祭比素祭好吗？

不完全是。希伯来书告诉我们："亚伯因着信，献祭与神，比该隐所献的更美。"（来11:4）关键不在祭物的种类，在于献祭之人的**心**。亚伯献的是**头生的**，是最好的，是带着敬畏和感恩的。而经文只说该隐拿了"地里的出产"——没有说是初熟的，没有说是最好的。**他在敷衍。**

你有没有过这样的经历？祷告的时候，嘴在动，心在想别的事。读经的时候，眼睛在看，脑子已经飘走了。去教会，人坐在那里，心却不知道在哪里。——**这就是该隐式的献祭。** 形式到了，心没到。

该隐的反应暴露了他的本性：**他大大发怒，变了脸色。**

他不是难过，不是反省——他愤怒。他觉得不公平。你看，罪人的逻辑永远是：不是我的问题，是你不公平。

耶和华对该隐说了一段极其重要的话：**"你为什么发怒呢？你为什么变了脸色呢？你若行得好，岂不蒙悦纳？你若行得不好，罪就伏在门前。它必恋慕你，你却要制伏它。"**

"罪就伏在门前"——这个画面何等生动。罪像一头野兽，蹲在你家门口，等你一开门就扑上来。**"它必恋慕你"**——用的是和3:16一模一样的词，像一种执着的、要吞噬你的渴望。**但神说：你要制伏它。**

神在警告他。神在给他机会。神甚至在教他怎么做——**制伏它。** 不是"你已经完了"，是"你还有机会，但你必须行动"。

**该隐不听。**

"该隐与他兄弟亚伯说话；二人正在田间，该隐起来打他兄弟亚伯，把他杀了。"

人类历史上第一桩谋杀。而且不是陌生人之间——是哥哥杀弟弟。罪从伊甸的果子，一代之内就升级到了流人血。

然后神来了：**"你兄弟亚伯在哪里？"**

和上一章"你在哪里"一样——神知道答案。他在给该隐机会认罪。

该隐说了那句千古名言：**"我不知道！我岂是看守我兄弟的吗？"**

两句话，两个谎言，一个推卸。他父亲亚当至少还试图解释："那女人给我的……"该隐连解释都懒得给——直接否认，然后反问神。**罪在一代之内就变得更硬、更傲慢了。**

神说："你兄弟的血有声音从地里向我哀告。"

**血会说话。** 无辜者的血不会沉默。这个世界上每一个被冤枉的、被欺压的、被杀害的——他们的血在向神呼喊。神听得见。

该隐被咒诅，成了流离飘荡的人。但即便如此，**神给他立了一个记号**，免得人杀他。审判中仍有怜悯。该隐不配，但神仍然保守他的性命。

这一章的后半部分，我们看到该隐的后代：他们建城，发明乐器，打造铜铁利器——文明在进步，但灵魂在堕落。拉麦娶了两个妻子（违背了神"二人成为一体"的设计），还写了一首杀人的炫耀之歌：**"壮年人伤我，我把他杀了；少年人损我，我把他杀了。若杀该隐，遭报七倍；杀拉麦，必遭报七十七倍。"**

从该隐的一次谋杀，到拉麦的嗜血炫耀——罪不是停留在原地的，**它会繁殖，会升级，会变本加厉。**

但这一章的结尾给了我们一线光明。亚当又生了一个儿子，叫塞特。塞特生了以挪士。

**"那时候，人才求告耶和华的名。"**

在该隐的后代越来越远离神的时候，塞特的后代开始求告神。一条线走向黑暗，一条线走向光明。整本圣经的故事，就是这两条线的交织——直到那位真正的"女人的后裔"来到。`,
  content_en: `Brothers and sisters, in the last chapter Adam and Eve were driven from Eden. The gate shut behind them. You might think the story would pause to catch its breath. It does not. Once sin enters, it moves faster than you imagine.

Eve bore Cain and said, "I have gotten a man with the help of the LORD." She used a remarkable expression -- some rabbis believe she thought Cain was the promised "offspring of the woman," the one who would crush the serpent's head. If so, how terribly wrong she was. The child she thought was a savior became humanity's first murderer.

Then she bore Abel. The name "Abel" means "breath" or "vanity." I do not know why she gave her second son such a name. Perhaps she already sensed that outside of Eden, everything is fleeting.

Cain worked the soil. Abel kept flocks. When the time came for offerings --

**"Cain brought some of the fruits of the soil as an offering to the LORD. And Abel also brought an offering -- fat portions from some of the firstborn of his flock. The LORD looked with favor on Abel and his offering, but on Cain and his offering he did not look with favor."**

Many ask: why did God accept Abel's offering but not Cain's? Was it because blood sacrifice is better than grain?

Not exactly. Hebrews tells us: "By faith Abel brought God a better offering than Cain did." (Heb 11:4) The issue was not the type of offering but the **heart** of the one offering it. Abel brought the **firstborn** -- the best, offered with reverence and gratitude. The text only says Cain brought "some of the fruits of the soil" -- not the firstfruits, not the best. **He was going through the motions.**

Have you ever had this experience? During prayer, your lips move while your mind wanders. During Bible reading, your eyes scan the page but your thoughts have drifted elsewhere. You sit in church, but your heart is not there. **That is a Cain-style offering.** The form is there; the heart is absent.

Cain's reaction revealed his true nature: **he was very angry, and his face fell.**

He was not grieved. He was not reflective. He was furious. He thought it was unfair. You see, the logic of sin is always the same: it is not my problem; you are being unfair.

The LORD said to Cain something of immense importance: **"Why are you angry? Why has your face fallen? If you do well, will you not be accepted? And if you do not do well, sin is crouching at the door. Its desire is contrary to you, but you must rule over it."**

"Sin is crouching at the door" -- what a vivid image. Sin is like a wild beast, crouching at your threshold, waiting to pounce the moment you open the door. **"Its desire is contrary to you"** -- the same Hebrew word used in 3:16, a consuming, devouring longing. **But God says: you must rule over it.**

God was warning him. God was giving him a chance. God was even teaching him what to do -- **rule over it.** Not "you are finished," but "you still have a chance, but you must act."

**Cain did not listen.**

"Cain spoke to Abel his brother. And when they were in the field, Cain rose up against his brother Abel and killed him."

The first murder in human history. And it was not between strangers -- a brother killed his brother. In a single generation, sin escalated from fruit in a garden to blood on the ground.

Then God came: **"Where is Abel your brother?"**

Just like "Where are you?" in the previous chapter -- God knew the answer. He was giving Cain a chance to confess.

Cain gave that infamous reply: **"I do not know; am I my brother's keeper?"**

Two sentences, two lies, one deflection. His father Adam at least tried to explain: "The woman you gave me..." Cain did not even bother to explain -- a flat denial, then a question thrown back at God. **In one generation, sin had become harder and more brazen.**

God said: "The voice of your brother's blood is crying to me from the ground."

**Blood speaks.** The blood of the innocent does not stay silent. Every person in this world who has been wronged, oppressed, or murdered -- their blood cries out to God. And God hears.

Cain was cursed, made a restless wanderer on the earth. Yet even so, **God put a mark on Cain** so that no one who found him would kill him. In the midst of judgment, there was still mercy. Cain did not deserve it, but God still preserved his life.

In the second half of this chapter, we see Cain's descendants: they built cities, invented musical instruments, forged tools of bronze and iron -- civilization advanced, but the soul was deteriorating. Lamech took two wives (violating God's design of "the two shall become one flesh") and composed a boastful song of killing: **"I have killed a man for wounding me, a young man for striking me. If Cain's revenge is sevenfold, then Lamech's is seventy-sevenfold."**

From Cain's single murder to Lamech's bloodthirsty boasting -- sin does not stay still. **It multiplies. It escalates. It grows worse.**

But the chapter ends with a glimmer of light. Adam fathered another son, named Seth. Seth fathered Enosh.

**"At that time people began to call upon the name of the LORD."**

While Cain's line drifted ever farther from God, Seth's line began to call on God's name. One line descends into darkness; the other reaches toward light. The story of the entire Bible is the interweaving of these two lines -- until the true "offspring of the woman" finally arrives.`,
  historyContext_zh: '该隐与亚伯的故事反映了古代近东的农耕与游牧冲突。但摩西的重点不在社会学，而在神学：罪如何从一个人传到下一代，从心里的嫉妒变成手上的血。',
  historyContext_en: 'The story of Cain and Abel reflects ancient Near Eastern tensions between farming and herding. But Moses\' focus is not sociological but theological: how sin passes from one generation to the next, from envy in the heart to blood on the hands.',
  structure_zh: '4:1-7 两种献祭 - 4:8-16 第一桩谋杀与审判 - 4:17-24 该隐后裔（文明与堕落并行）- 4:25-26 塞特的盼望之线。',
  structure_en: '4:1-7 Two offerings - 4:8-16 The first murder and judgment - 4:17-24 Cain\'s line (civilization and decay in parallel) - 4:25-26 Seth\'s line of hope.',
  theology_zh: '献祭的核心是心态，不只是形式（来11:4）；罪会"繁殖"——从嫉妒到谋杀只需一步；神在审判前总是先给悔改的机会；"我岂是看守我兄弟的吗？"——该隐用的"看守"正是神吩咐亚当"看守"伊甸园的同一个词（创2:15），他以为是反问，其实是自我定罪。答案当然是：是的，你是。"爱人如己"就是看守弟兄的正面表述。',
  theology_en: 'The heart of sacrifice is the heart, not just the form (Heb 11:4); sin "multiplies" -- from envy to murder in one step; God always offers a chance to repent before judgment; "Am I my brother\'s keeper?" -- the Hebrew "keeper" (shomer) is the same word God used when charging Adam to "keep" the garden (Gen 2:15). Cain meant it as a retort; it was a self-indictment. The answer is: yes, you are. "Love your neighbor as yourself" is the positive form of keeping your brother.',
  christShadow_zh: '亚伯是无辜受害的义人，预表基督——"从义人亚伯的血起"（太23:35）。但亚伯的血呼喊的是复仇，基督的血呼喊的是赦免："他的洒血比亚伯的血说的更美。"（来12:24）该隐流离飘荡，但神仍给他记号保全性命——审判中有怜悯，正如十字架上的强盗在临终得救。',
  christShadow_en: 'Abel is the innocent righteous sufferer who prefigures Christ -- "from the blood of righteous Abel" (Matt 23:35). But Abel\'s blood cried for vengeance; Christ\'s blood speaks a better word: "the sprinkled blood that speaks a better word than the blood of Abel" (Heb 12:24). Cain was a wanderer, yet God marked him to preserve his life -- mercy within judgment, just as the thief on the cross was saved at the very end.',
});

readings.push({
  book: '创世记', bookEn: 'Genesis', chapter: 5,
  publishDate: '2026-02-20',
  title: '家谱', titleEn: 'The Genealogy',
  author: '摩西', authorEn: 'Moses',
  scripture: '创世记 5:1-32 / Genesis 5:1-32',
  content_zh: `弟兄姐妹，我知道你们一看到家谱就想翻页。一堆名字，谁生了谁，活了多少岁，然后就死了。枯燥吗？

不。这是圣经里最震撼的一章之一。你只要学会听那个重复出现的鼓点。

"亚当活到一百三十岁，生了一个儿子……就给他起名叫塞特。"然后——"**就死了。**"
"塞特活到一百零五岁，生了以挪士。"然后——"**就死了。**"
"以挪士活到九十岁……"然后——"**就死了。**"

**就死了。就死了。就死了。**

整整一章，十代人，这三个字像丧钟一样反复敲响。不管你活了九百岁还是三百岁——**就死了。** 神在第二章说"你吃的日子必定死"，这一章就是那句话的回响。死亡进来了，没有人逃得掉。

你活了九百三十岁又怎样？**就死了。**
你儿孙满堂又怎样？**就死了。**
你在世上做了多少事又怎样？最后三个字还是一样的。

弟兄姐妹，这就是没有基督的人生写照。你可以活得很长，很成功，很充实——但如果最后的结局是"就死了"，那一切有什么意义？传道书说得对："虚空的虚空，凡事都是虚空。"

**但是。**

读到第五代的时候，突然出现了一个不同的名字：**以诺。**

"以诺活到六十五岁，生了玛土撒拉。以诺生玛土撒拉之后，与神同行三百年……以诺与神同行，**神将他取去，他就不在世了。**"

你们注意到了吗？所有人的结局都是"就死了"，唯独以诺——**"神将他取去，他就不在世了。"** 没有死。

在死亡的鼓点中，突然插进来一个不同的音符。在"就死了"的重复中，出现了一个"他就不在世了"。

以诺凭什么？希伯来书说："以诺因着信，被接去，不至于见死。"（来11:5）他做了什么惊天动地的大事吗？经文没有记载他建了什么城，发明了什么东西，打了什么仗。只说了四个字：**与神同行。**

不是偶尔去圣殿，不是只在安息日敬拜。是**同行**——日复一日，年复一年，三百年。像两个朋友一起走路，走着走着，神说：你离我家比你自己家近了，别回去了，跟我回家吧。

**与神同行——这就是胜过死亡的秘诀。** 不是长寿，不是成就，不是名声。是和神走在一起。

然后继续——"就死了，就死了，就死了"——一直到这一章的最后一个名字：**挪亚。**

"拉麦活到一百八十二岁，生了一个儿子，给他起名叫**挪亚**，说：**'这个儿子必为我们的操作和手中的劳苦安慰我们；这操作劳苦是因为耶和华咒诅地。'**"

"挪亚"的意思是"安慰"、"安息"。在死亡和咒诅的阴影下，拉麦给儿子起名叫"安慰"。这不是乐观主义——这是信心。他相信神不会让咒诅永远持续下去。

弟兄姐妹，这一章表面上是一份枯燥的家谱。但你仔细看——

它是一首关于**死亡**的挽歌：就死了，就死了，就死了。
它是一个关于**盼望**的见证：以诺与神同行，不至于死。
它是一个关于**应许**的伏笔：挪亚来了，安慰来了。

从亚当到挪亚，十代人，像一座桥，从伊甸的失落连到洪水的审判。但桥的两端都有恩典——伊甸那端有皮衣的遮盖，洪水那端有方舟的拯救。

你的人生也有一天会走到尽头。但问题不是"你活了多少年"，而是"你和谁同行"。

以诺的故事告诉你：**死亡不是最后一个字。与神同行的人，神会把他接回家。**`,
  content_en: `Brothers and sisters, I know that when you see a genealogy you want to turn the page. A list of names, who fathered whom, how many years they lived, and then they died. Boring?

No. This is one of the most staggering chapters in all of Scripture. You only need to learn to hear the drumbeat that keeps repeating.

"When Adam had lived 130 years, he fathered a son... and named him Seth." Then -- "**and he died.**"
"When Seth had lived 105 years, he fathered Enosh." Then -- "**and he died.**"
"When Enosh had lived 90 years..." Then -- "**and he died.**"

**And he died. And he died. And he died.**

Through an entire chapter, ten generations, those three words toll like a funeral bell. Whether you lived nine hundred years or three hundred -- **and he died.** God said in chapter two, "In the day that you eat of it you shall surely die." This chapter is the echo of that sentence. Death has entered, and no one escapes.

You lived to nine hundred and thirty? **And he died.**
Your children and grandchildren filled the earth? **And he died.**
However much you accomplished in your lifetime? The final three words are always the same.

Brothers and sisters, this is the portrait of life without Christ. You can live a long, successful, full life -- but if the last line is "and he died," what does any of it mean? Ecclesiastes says it well: "Vanity of vanities, all is vanity."

**But.**

When we reach the fifth generation, a different name suddenly appears: **Enoch.**

"When Enoch had lived 65 years, he fathered Methuselah. Enoch walked with God after he fathered Methuselah 300 years... Enoch walked with God, and **he was not, for God took him.**"

Did you notice? Everyone else's ending is "and he died." But Enoch alone -- **"he was not, for God took him."** He did not die.

In the drumbeat of death, a different note suddenly breaks in. In the repetition of "and he died," there appears one "he was not."

How did Enoch merit this? Hebrews tells us: "By faith Enoch was taken up so that he should not see death." (Heb 11:5) Did he do anything earth-shattering? Scripture records no city he built, no invention, no battle. It says only this: **he walked with God.**

Not an occasional visit to the temple. Not worship only on the Sabbath. He **walked** -- day after day, year after year, for three hundred years. Like two friends walking together, and after walking so long, God said: You are closer to my home than yours now. Do not go back. Come home with me.

**Walking with God -- this is the secret to overcoming death.** Not longevity, not achievement, not fame. It is walking with God.

Then the drumbeat continues -- "and he died, and he died, and he died" -- all the way to the last name in the chapter: **Noah.**

"When Lamech had lived 182 years, he fathered a son and called his name **Noah**, saying, **'Out of the ground that the LORD has cursed, this one shall bring us relief from our work and from the painful toil of our hands.'**"

"Noah" means "comfort" or "rest." Under the shadow of death and curse, Lamech named his son "Comfort." This is not optimism -- this is faith. He believed God would not let the curse last forever.

Brothers and sisters, on the surface this chapter is a dry genealogy. But look carefully --

It is a dirge about **death**: and he died, and he died, and he died.
It is a testimony of **hope**: Enoch walked with God and did not die.
It is a foreshadowing of **promise**: Noah has come; comfort has come.

From Adam to Noah, ten generations form a bridge from the loss of Eden to the judgment of the flood. But both ends of the bridge hold grace -- at the Eden end, garments of skin; at the flood end, an ark of salvation.

Your life, too, will one day reach its end. But the question is not "How many years did you live?" but "With whom did you walk?"

Enoch's story tells you: **death is not the final word. The one who walks with God -- God will take him home.**`,
  historyContext_zh: '创世记第5章的长寿记录（亚当930岁、玛土撒拉969岁等）在古代近东文献中有类似先例——苏美尔王表中的洪水前国王也有极长寿命。学者们对此有不同解读，但核心信息清晰：即使寿命极长，死亡仍是不可逃避的现实。',
  historyContext_en: 'The extreme lifespans in Genesis 5 (Adam at 930, Methuselah at 969, etc.) have parallels in ancient Near Eastern literature -- the Sumerian King List records similarly extraordinary pre-flood lifespans. Scholars debate the interpretation, but the core message is clear: even with extraordinary longevity, death remains inescapable.',
  structure_zh: '十代家谱呈固定格式（"活到X岁，生了Y，又活了Z年，就死了"），以诺打破格式（"神将他取去"），挪亚结尾开启新篇章。重复中的突变是作者的文学手法。',
  structure_en: 'Ten generations follow a fixed formula ("lived X years, fathered Y, lived Z more years, and he died"), Enoch breaks the formula ("God took him"), and Noah at the end opens a new chapter. The variation within repetition is a deliberate literary device.',
  theology_zh: '死亡是罪的工价（罗6:23），无人幸免；与神同行是信心的本质——不是一次性决定，是一生的旅程；以诺预示了复活的盼望——死亡不是人最终的结局；家谱显明神的信实——从亚当到挪亚，应许之线没有断。',
  theology_en: 'Death is the wages of sin (Rom 6:23), and no one is exempt; walking with God is the essence of faith -- not a one-time decision but a lifelong journey; Enoch foreshadows the hope of resurrection -- death is not humanity\'s final destiny; the genealogy shows God\'s faithfulness -- from Adam to Noah, the line of promise did not break.',
  christShadow_zh: '以诺不见死亡就被神接去，预表了基督的升天，也预表了信徒将来的被提（帖前4:17）。整章"就死了"的重复回响着保罗的话——"在亚当里众人都死了"（林前15:22），但基督来就是要打破这个死亡的循环，因为"在基督里众人也都要复活"。而这一章最后的名字"挪亚"意思是"安慰"，指向那位真正的安慰者——基督自己说："凡劳苦担重担的人，可以到我这里来，我就使你们得安息。"（太11:28）',
  christShadow_en: 'Enoch was taken by God without seeing death, prefiguring both Christ\'s ascension and the future catching up of believers (1 Thess 4:17). The relentless refrain "and he died" echoes Paul\'s words -- "in Adam all die" (1 Cor 15:22) -- but Christ came to break this cycle of death, for "in Christ shall all be made alive." And the last name in this chapter, Noah, means "comfort," pointing to the true Comforter -- Christ himself, who said: "Come to me, all who labor and are heavy laden, and I will give you rest." (Matt 11:28)',
});
