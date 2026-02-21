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

// === Genesis 6-50 skeletons (content from D1) ===
readings.push({
  book: '创世记', bookEn: 'Genesis', chapter: 6,
  publishDate: '2026-02-23',
  title: '洪水前的世界', titleEn: 'The World Before the Flood',
  author: '摩西', authorEn: 'Moses',
  scripture: '创世记 6:1-22 / Genesis 6:1-22',
  content_zh: `弟兄姐妹，我要告诉你们一段让神心中忧伤的历史。

还记得第五章那份漫长的家谱吗？"他就死了……他就死了……他就死了"——罪的后果在每一代人身上盖下印记。但这还不是最可怕的。最可怕的是，到了第六章，罪不仅带来死亡，还带来了全面的败坏。

经文开头说："当人在世上多起来又生女儿的时候，神的儿子们看见人的女子美貌，就随意挑选，娶来为妻。"（创6:1-2）

关于"神的儿子们"是谁，有不同的解读。加尔文和大多数改革宗学者认为，这是指塞特的后裔——就是那条从亚当到挪亚的敬虔谱系——与该隐的后裔通婚。第四章和第五章分别记载了该隐的谱系和塞特的谱系，一条是远离神的路，一条是求告神名的路。现在这两条线混在一起了。

"随意挑选"这四个字暗示了问题的本质。他们选择配偶的标准不是敬虔，而是外貌。当信仰的界限被打破，当敬虔的一方不再以信仰为择偶的首要条件时，败坏就不可避免地蔓延了。这对今天的基督徒仍然是严肃的警告——保罗说"你们和不信的原不相配，不要同负一轭"（林后6:14），不是狭隘，而是保护。

这个原则不只适用于婚姻。在任何关系中，当我们在信仰上妥协——为了合群、为了利益、为了不被嘲笑——我们就在重复"神的儿子们"的错误。雅各书4:4说"与世俗为友就是与神为敌"。这不是说我们要与世界隔绝，而是说在核心的信仰立场上，不能让步。盐失了味，还有什么用呢？

然后，耶和华说了一句意味深长的话："人既属乎血气，我的灵就不永远住在他里面；然而他的日子还可到一百二十年。"（创6:3）这一百二十年是上帝给人类的宽限期——审判不是立刻降临的，上帝给了足够的时间让人悔改。彼得后来说上帝"宽容你们，不愿有一人沉沦，乃愿人人都悔改"（彼后3:9）。但宽容不是永远的。一百二十年的恩典之后，审判终将来到。

接下来是整章最沉重的经文：

"耶和华见人在地上罪恶很大，终日所思想的尽都是恶。"（创6:5）

请你们仔细看这句话的每一个词。"终日"——不是偶尔，是每时每刻。"所思想的"——不只是行为上的罪，是从思想的根源就败坏了。"尽都是恶"——没有例外，没有余地，全部是恶。这不是说人做了所有能做的坏事，而是说罪污染了人存在的每一个层面：理性、情感、意志、欲望，无一幸免。韦敏斯德信条第六章说，堕落之后，人"完全败坏，在一切灵魂和身体的官能和各部分上都污秽了"。这就是改革宗神学所说的"全然败坏"——人从内到外，从根到梢，都被罪浸透了。

你可能会想：有那么严重吗？看看我们周围，也有很多好人啊。是的，因为上帝的普遍恩典抑制了罪的完全发作。但如果拿掉这个恩典的约束，人心本来的面目就是创世记6:5所描述的。历史上每一次社会秩序崩溃——无论是战争、暴政还是种族屠杀——都在证实这一点。

然后经文说了一句让人心碎的话：

"耶和华就后悔造人在地上，心中忧伤。"（创6:6）

弟兄姐妹，请在这里停一停。造物主——那位说有就有、命立就立的全能者——心中忧伤。不是冷漠的愤怒，是一位父亲看着自己的孩子走向毁灭时的心碎。

"后悔"这个词需要解释。上帝会改变主意吗？撒母耳记上15:29说"以色列的大能者必不至说谎，也不至后悔，因为他迥非世人，决不后悔"。所以这里的"后悔"不是说上帝做错了决定，而是用人类的语言来表达上帝对罪的深切痛苦和审判的决心。上帝的旨意没有改变，但祂对罪有真实的情感回应——祂不是一块冰冷的石头，祂是活的、有情感的上帝。

在这片全面的黑暗中，经文突然转折：

"惟有挪亚在耶和华眼前蒙恩。"（创6:8）

这是圣经中第一次出现"恩"（hen，grace）这个词。在一个"终日所思想的尽都是恶"的世界里，挪亚蒙恩——不是因为他比别人好（虽然第9节说他是"义人"、"完全人"），而是因为恩典。恩典总是先于人的义行。上帝先拣选了挪亚，然后挪亚才成为"与上帝同行"的人。这是因果关系的次序：不是因为义所以蒙恩，而是因为蒙恩所以称义。

上帝吩咐挪亚造方舟——歌斐木做的，长三百肘、宽五十肘、高三十肘。方舟分三层，里外抹上松香（同一个希伯来词kaphar，后来被翻译为"赎罪"——方舟被"赎罪/遮盖"了）。这不是巧合，这是语言里的预表。

你想想那个画面：一个人在旱地上造一艘巨大的船。可能从来没有下过那么大的雨，从来没有人见过洪水。周围的人一定觉得他疯了。彼得后来说挪亚是"传义道的"（彼后2:5），意思是挪亚一边造船一边传讲悔改的信息。但没有人听。一百二十年，没有一个外人相信。

"挪亚就这样行。凡神所吩咐的，他都照样行了。"（创6:22）

这句话看似简单，却是整章最有力量的一句。在全世界都在作恶的时候，有一个人选择顺服。不是因为他看到了洪水的证据，不是因为周围有人支持他——只是因为上帝说了。希伯来书11:7说："挪亚因着信，既蒙神指示他未见的事，动了敬畏的心，预备了一只方舟，使他全家得救。"信心就是对未见之事的确信——别人看到的是旱地和晴天，挪亚看到的是上帝的话。

弟兄姐妹，方舟是基督最清晰的旧约预表之一。方舟是审判中唯一的避难所——在里面的就得救，在外面的就灭亡。基督就是我们的方舟。方舟只有一个门（创6:16），正如耶稣说"我就是门，凡从我进来的，必然得救"（约10:9）。方舟里外抹上"kaphar"（赎罪/遮盖），正如基督的宝血遮盖了我们一切的罪。

方舟的尺寸也值得深思。长三百肘、宽五十肘、高三十肘——大约相当于一艘现代货轮的大小。这不是一条小船，这是一座浮动的建筑。上帝给了非常具体的建造指令——材料、尺寸、结构、防水处理。上帝不是抛下一句"你自己想办法"就走了，祂是手把手地带领挪亚。弟兄姐妹，上帝的引导是具体的、实际的。祂不仅告诉你方向，也告诉你怎么走。

上帝给了挪亚时代的人一百二十年的警告期。他们有足够的时间悔改。但他们没有。耶稣后来说："挪亚的日子怎样，人子降临也要怎样。那时候的人又吃又喝，又娶又嫁，到挪亚进方舟的那日，不知不觉洪水来了，把他们全都冲去。"（太24:37-39）

今天的世界和挪亚的时代何其相似。人们照常生活，对审判毫不在意。但方舟的门还开着。基督还在呼召："凡劳苦担重担的人，可以到我这里来。"

你是在方舟里面，还是在方舟外面？`,
  content_en: `Brothers and sisters, I must tell you a history that grieved God's heart.

Remember the long genealogy of chapter 5? "And he died... and he died... and he died" — sin's consequences stamped on every generation. But that was not the worst of it. By chapter 6, sin brought not only death but total corruption.

The chapter opens: "When man began to multiply on the face of the land and daughters were born to them, the sons of God saw that the daughters of man were attractive. And they took as their wives any they chose." (Genesis 6:1-2)

Who are the "sons of God"? Calvin and most Reformed scholars understand them as Seth's descendants — the godly line from Adam to Noah — intermarrying with Cain's line. Chapters 4 and 5 trace two lineages: one departing from God, one calling upon His name. Now these two lines merged.

"Any they chose" — these words reveal the problem's essence. Their standard for choosing spouses was not godliness but beauty. When the boundary of faith is broken, when the godly no longer make faith the first criterion for marriage, corruption inevitably spreads. This remains a solemn warning for Christians today. Paul's words "do not be unequally yoked with unbelievers" (2 Corinthians 6:14) are not narrow-mindedness but protection.

This principle extends beyond marriage. In any relationship, when we compromise on faith — to fit in, for profit, to avoid ridicule — we repeat the "sons of God's" mistake. James 4:4 says "friendship with the world is enmity with God." Not that we isolate from the world, but on core matters of faith, we must not yield. If salt loses its taste, what good is it?

Then the LORD spoke a weighty word: "My Spirit shall not abide in man forever, for he is flesh: his days shall be 120 years." (Genesis 6:3) These 120 years were God's grace period. Judgment did not come immediately; God gave ample time for repentance. Peter later said God is "patient toward you, not wishing that any should perish, but that all should reach repentance" (2 Peter 3:9). But patience is not forever. After 120 years of grace, judgment would come.

Then comes the chapter's heaviest verse:

"The LORD saw that the wickedness of man was great in the earth, and that every intention of the thoughts of his heart was only evil continually." (Genesis 6:5)

Examine every word carefully. "Continually" — not occasionally, but every moment. "Intention of the thoughts" — not merely outward acts but corruption at thought's very root. "Only evil" — no exception, no remainder, entirely evil. This doesn't mean humans committed every possible evil, but that sin contaminated every dimension of human existence: reason, emotion, will, desire — none spared. The Westminster Confession chapter 6 states that after the fall, humanity is "wholly defiled in all the faculties and parts of soul and body." This is what Reformed theology calls "total depravity" — from inside out, from root to branch, humanity is saturated with sin.

You might wonder: is it really that serious? Many good people exist around us. Yes, because God's common grace restrains sin's full outbreak. But remove that gracious restraint, and the human heart's true face is exactly what Genesis 6:5 describes. Every societal collapse in history — war, tyranny, genocide — confirms this.

Then Scripture speaks a heart-rending word:

"And the LORD regretted that he had made man on the earth, and it grieved him to his heart." (Genesis 6:6)

Brothers and sisters, pause here. The Creator — the Almighty who speaks and it comes to be — was grieved to His heart. Not cold anger but a Father's heartbreak watching His children march toward destruction.

"Regretted" requires explanation. Does God change His mind? 1 Samuel 15:29 says "the Glory of Israel will not lie or have regret, for he is not a man, that he should have regret." So "regretted" here doesn't mean God made a wrong decision, but uses human language to express God's deep pain over sin and His resolve to judge. God's purposes haven't changed, but He has real emotional response to sin. He is not a cold stone but a living, feeling God.

In this total darkness, Scripture suddenly turns:

"But Noah found favor in the eyes of the LORD." (Genesis 6:8)

This is the first appearance of "favor" (hen, grace) in the Bible. In a world where "every intention was only evil continually," Noah found grace — not because he was better than others (though verse 9 calls him "righteous" and "blameless"), but because of grace. Grace always precedes human righteousness. God chose Noah first; then Noah became one who "walked with God." The causal order matters: not righteous therefore graced, but graced therefore counted righteous.

God commanded Noah to build an ark — gopher wood, 300 cubits long, 50 wide, 30 high. Three decks, covered inside and out with pitch (the same Hebrew word kaphar, later translated "atonement" — the ark was "atoned/covered"). No coincidence — this is typology embedded in language itself.

Picture it: one man building an enormous ship on dry land. Perhaps rain of that magnitude had never fallen; perhaps no one had ever seen a flood. Everyone must have thought him insane. Peter later calls Noah "a herald of righteousness" (2 Peter 2:5), meaning Noah preached repentance while building. But no one listened. A hundred and twenty years, and not one outsider believed.

"Noah did this; he did all that God commanded him." (Genesis 6:22)

This seemingly simple statement is the chapter's most powerful. When the entire world was doing evil, one man chose obedience. Not because he saw evidence of a flood, not because anyone supported him — simply because God had spoken. Hebrews 11:7 says: "By faith Noah, being warned by God concerning events as yet unseen, in reverent fear constructed an ark for the saving of his household." Faith is conviction about things unseen. Others saw dry ground and clear skies; Noah saw God's word.

Brothers and sisters, the ark is one of the clearest Old Testament types of Christ. The ark was the only refuge in judgment — those inside were saved, those outside perished. Christ is our ark. The ark had one door (Genesis 6:16), as Jesus said "I am the door. If anyone enters by me, he will be saved" (John 10:9). The ark was covered with kaphar (atonement/covering), as Christ's blood covers all our sin.

The ark's dimensions also deserve reflection. Three hundred cubits long, fifty wide, thirty high — approximately the size of a modern cargo ship. This was no small boat but a floating structure. God gave very specific building instructions — materials, dimensions, structure, waterproofing. God did not say "figure it out yourself" and walk away. He guided Noah step by step. Brothers and sisters, God's guidance is specific and practical. He tells you not only the direction but how to walk it.

God gave Noah's generation 120 years of warning. They had ample time to repent. They did not. Jesus later said: "As were the days of Noah, so will be the coming of the Son of Man. For as in those days before the flood they were eating and drinking, marrying and giving in marriage, until the day when Noah entered the ark, and they were unaware until the flood came and swept them all away." (Matthew 24:37-39)

Today's world is strikingly similar to Noah's day. People carry on as usual, utterly indifferent to judgment. But the ark's door remains open. Christ still calls: "Come to me, all who labor and are heavy laden."

Are you inside the ark, or outside it?`,
  historyContext_zh: `创世记第六章发生在人类早期历史中，从亚当到挪亚约有十代。经文提到"神的儿子们"与"人的女子们"通婚，关于"神的儿子"的身份，改革宗传统中有两种主要解读：一是指塞特的后裔（敬虔的谱系）与该隐的后裔（不敬虔的谱系）通婚，导致敬虔谱系的败坏；二是指堕落天使。加尔文和大多数改革宗学者持第一种观点。核心信息是：圣俗不分的混合导致了全面的道德败坏。`,
  historyContext_en: `Genesis 6 occurs in early human history, about ten generations from Adam to Noah. The text mentions "sons of God" marrying "daughters of man." Reformed tradition holds two main views: (1) Seth's line (godly) intermarrying with Cain's line (ungodly), corrupting the godly lineage — held by Calvin and most Reformed scholars; (2) fallen angels. The core message: the blurring of sacred and secular boundaries led to total moral corruption.`,
  structure_zh: `第六章分为三个部分：（1）1-4节：败坏的描述——"神的儿子们"与"人的女子们"通婚，上古英武人（拿非利人）；（2）5-8节：上帝的忧伤与审判决定——"终日所思想的尽都是恶"，但挪亚蒙恩；（3）9-22节：挪亚的蒙召与方舟的建造——详细的建造指令和挪亚的顺服。整章从全人类的败坏聚焦到一个蒙恩的家庭，展现了审判与恩典并行的主题。`,
  structure_en: `Chapter 6 has three sections: (1) vv.1-4: Description of corruption — "sons of God" marrying "daughters of man," the Nephilim; (2) vv.5-8: God's grief and judgment decision — "every intention... only evil continually," but Noah found favor; (3) vv.9-22: Noah's calling and the ark's construction — detailed building instructions and Noah's obedience. The chapter narrows from universal corruption to one family of grace, showing judgment and grace in parallel.`,
  theology_zh: `第六章揭示了几个重要的神学主题：（1）全然败坏：人的罪不是表面的行为问题，而是"终日所思想的尽都是恶"——从思想根源就被罪污染了，这是韦敏斯德信条第六章所教导的原罪教义的圣经基础；（2）上帝的忧伤：上帝不是冷漠的，他对罪有真实的情感回应，这与上帝的不变性并不矛盾——上帝的不变是指他的本性和旨意不变，但他确实与受造物有真实的关系；（3）恩典先于审判：在宣布毁灭之前，上帝先预备了拯救的途径；（4）挪亚的信心：希伯来书11:7说挪亚"因着信，既蒙神指示他未见的事，动了敬畏的心，预备了一只方舟"——信心是对未见之事的确信和顺服。`,
  theology_en: `Chapter 6 reveals several important theological themes: (1) Total depravity: sin is not superficial but "every intention... only evil continually" — corrupted from the root of thought, the biblical basis for original sin as taught in WCF ch.6; (2) God's grief: God is not impassive; He has real emotional response to sin, not contradicting divine immutability (His nature and purposes are unchanging, but He has genuine relationship with creation); (3) Grace precedes judgment: before announcing destruction, God prepared a way of salvation; (4) Noah's faith: Hebrews 11:7 says Noah "by faith... in reverent fear constructed an ark" — faith is conviction and obedience regarding things unseen.`,
  christShadow_zh: `方舟是基督最清晰的旧约预表之一。正如方舟是洪水审判中唯一的避难所，基督是末日审判中唯一的拯救。方舟只有一个门（创6:16），正如耶稣说"我就是门，凡从我进来的，必然得救"（约10:9）。上帝亲自关上方舟的门（创7:16），正如救恩的主权在上帝手中。挪亚一家八口靠着进入方舟而得救，正如我们靠着在基督里而得救。彼得后来明确将方舟与洗礼和基督的救恩联系起来（彼前3:20-21）。`,
  christShadow_en: `The ark is one of the clearest Old Testament types of Christ. As the ark was the only refuge in the flood judgment, Christ is the only salvation in final judgment. The ark had one door (Gen 6:16), as Jesus said "I am the door. If anyone enters by me, he will be saved" (John 10:9). God Himself shut the door (Gen 7:16), as salvation's sovereignty rests with God. Noah's family of eight was saved by entering the ark, as we are saved by being in Christ. Peter explicitly connects the ark with baptism and Christ's salvation (1 Peter 3:20-21).`,
});
readings.push({
  book: '创世记', bookEn: 'Genesis', chapter: 7,
  publishDate: '2026-02-24',
  title: '洪水', titleEn: 'The Flood',
  author: '摩西', authorEn: 'Moses',
  scripture: '创世记 7:1-24 / Genesis 7:1-24',
  content_zh: `弟兄姐妹，洪水来了。

上一章我们看到，上帝宣布了审判，吩咐挪亚造方舟。现在，一切准备就绪，上帝对挪亚说："你和你的全家都要进入方舟，因为在这世代中，我见你在我面前是义人。"（创7:1）

注意"你和你的全家"。上帝拯救的不是一个孤立的个人，而是一个家庭。这是圣约神学的核心原则之一——上帝的恩典是通过家庭和世代传递的。韦敏斯德信条说上帝"将约延及信徒的后裔"。挪亚一家八口——挪亚和妻子、三个儿子和他们的妻子——一同被带进方舟。后来彼得提到这件事时特意说"借着水得救的不多，只有八个人"（彼前3:20）。在整个世界中，只有八个人。恩典的门是窄的。

上帝吩咐挪亚带上各种动物："凡洁净的畜类，你要带七公七母；不洁净的畜类，你要带一公一母。"（创7:2）为什么洁净的畜类要多带？因为挪亚出方舟后要献祭（第八章），需要洁净的动物。上帝在审判之前就为敬拜预备了需要。这让你看到上帝的细致——祂不仅想着拯救，也想着拯救之后的感恩和敬拜。

"再过七天，我要降雨在地上四十昼夜。"（创7:4）

又是七天的等待。方舟造好了，动物进去了，人进去了，但洪水还没有来。想象那七天的感受——周围的人照常生活，可能在嘲笑方舟里的人："你们看，雨在哪里？"七天，没有一滴雨。这需要何等的信心！但挪亚没有打开门走出来。他信靠上帝的话。

然后，洪水来了。

"当挪亚六百岁，二月十七日那一天，大渊的泉源都裂开了，天上的窗户也敞开了。四十昼夜降大雨在地上。"（创7:11-12）

这不是一场普通的暴雨。"大渊的泉源都裂开了"——地底下的水喷涌而出。"天上的窗户也敞开了"——天上的水倾盆而下。你还记得创世记第一章吗？上帝在第二天把水分开，"将空气以上的水和空气以下的水分开了"。现在，上帝把这个分隔撤除了。上面的水和下面的水重新汇合——创造被逆转了。

这是一个极其重要的神学画面。创造是上帝把混沌整理成秩序——把光和暗分开，把水和旱地分开，把各类活物各从其类地安置好。洪水是这个过程的逆转——秩序退回混沌，创造退回虚空。罪的终极后果就是这样：它把上帝所造的美好秩序一点一点地拆毁，退回到"空虚混沌、渊面黑暗"的状态。

你看到了吗？罪不只是做了一件坏事——罪是对创造的拆毁，是对上帝秩序的背叛。

"水势在地上极其浩大，天下的高山都淹没了。水势比山高过十五肘。"（创7:19-20）

整个地面被水覆盖。没有高地可以逃跑，没有山顶可以避难。在上帝的审判面前，没有中间地带。你要么在方舟里，要么在水里。没有第三种选择。

"凡在旱地上、鼻孔有气息的生灵都死了。凡地上各类的活物，连人带牲畜、昆虫，以及空中的飞鸟，都从地上除灭了。只留下挪亚和那些与他同在方舟里的。"（创7:22-23）

这节经文极其沉重。每一个呼吸的生命——老人、年轻人、孩子、动物——全都在水中灭亡了。审判不是抽象的神学概念。它是真实的、具体的、不可逆转的。这就是罪的工价——死亡（罗6:23）。

你可能会问：上帝怎么可以这样？这么多人，包括无辜的孩子？

弟兄姐妹，这个问题的前提本身需要被质疑。"无辜"这个词，在上帝面前，没有人配得。"没有义人，连一个也没有"（罗3:10）。洪水不是过度的惩罚，而是罪应得的结果。真正让我们惊讶的不应该是"上帝为什么审判？"而应该是"上帝为什么还愿意拯救？"在一个终日思想尽都是恶的世界里，上帝竟然还预备了方舟，还给了一百二十年的悔改期——这才是真正让人惊叹的。

但在这片死亡的大水之上，方舟漂浮着。

"水势浩大，在地上共一百五十天。"（创7:24）

一百五十天。五个月。方舟在水上漂流，没有方向盘，没有引擎，没有导航——完全在上帝的手中。挪亚不知道要漂多久，不知道会停在哪里，不知道外面的世界变成了什么样。他唯一知道的是：上帝说的话是信实的。上帝把他关在方舟里，上帝会保守他到底。

这就是信心的本质。信心不是知道所有的答案，信心是在不知道答案的时候仍然信靠那位知道一切的上帝。"我虽然行过死荫的幽谷，也不怕遭害，因为你与我同在。"（诗23:4）

有人问：上帝为什么要用洪水？为什么不用别的方式？回到创世记第一章——上帝用水创造了世界（"神的灵运行在水面上"），现在上帝用水审判世界。水在圣经中有双重含义：它既是生命的源泉，也是死亡的力量。红海的水拯救了以色列人，淹没了埃及军队。约旦河的水让以色列进入应许之地。洗礼的水象征着与基督同死同复活。同样的水，对信的人是拯救的媒介，对不信的人是审判的工具。

还要注意一个细节：洪水持续了"四十"昼夜。四十在圣经中是一个有特殊含义的数字——摩西在山上四十天，以色列人在旷野四十年，耶稣在旷野受试探四十天。四十代表试炼和预备的时期。洪水的四十天是对旧世界的试炼和审判，也是为新世界的预备。

还有一个令人战栗的细节："水势浩大，在地上共一百五十天。"想象一下方舟外面的景象——曾经繁忙的城镇、热闹的市集、欢笑的家庭、骄傲的宁录式英雄——现在全部沉寂在水下。世人看为坚固的一切——财富、权力、地位、人际关系——在上帝的审判面前，没有一样站得住。"因为凡有血气的，尽都如草；他的美荣都像草上的花。草必枯干，花必凋谢；惟有主的道是永存的。"（彼前1:24-25）只有上帝的话语和进入方舟的信心，能在审判中存留。

弟兄姐妹，让我最后指出这一章中最容易被忽略、却最重要的一节经文：

"耶和华就把他关在方舟里头。"（创7:16）

不是挪亚自己关的门——是耶和华亲手把门关上。这意味着什么？第一，里面的人的安全由上帝负责，不是靠他们自己的力量。方舟在惊涛骇浪中不会沉没，不是因为方舟足够坚固，而是因为上帝的手在托着它。第二，门一旦关上，外面的人再怎么敲也进不去了。恩典的门是敞开的，但不是永远敞开的。总有一天，门会关上。

彼得说："当时的世界被水淹没就消灭了。但现在的天地还是凭着那命存留，直留到不敬虔之人受审判遭沉沦的日子，用火焚烧。"（彼后3:6-7）洪水是一个预兆——更大的审判还在前头。但对于在方舟里的人，对于在基督里的人，审判之水不能伤害你。

同样的水，承载了方舟，淹没了世界。对一些人是审判，对另一些人是拯救。基督的十字架也是如此——对不信的人是绊脚石，对信的人却是上帝的大能（林前1:18）。

你在哪一边？方舟的门今天还开着。`,
  content_en: `Brothers and sisters, the flood came.

In the previous chapter, God announced judgment and commanded Noah to build the ark. Now, everything was ready. God said to Noah: "Go into the ark, you and all your household, for I have seen that you are righteous before me in this generation." (Genesis 7:1)

Notice "you and all your household." God saved not an isolated individual but a family. This is one of covenant theology's core principles — God's grace is transmitted through families and generations. The Westminster Confession states that God "extends the covenant to believers' children." Noah's family of eight — Noah and his wife, three sons and their wives — were brought into the ark together. Peter later specifically noted "only eight persons were brought safely through water" (1 Peter 3:20). Out of the entire world, only eight. The gate of grace is narrow.

God commanded Noah to bring every kind of animal: "Take with you seven pairs of all clean animals, the male and his mate, and a pair of the animals that are not clean." (Genesis 7:2) Why more clean animals? Because Noah would sacrifice after leaving the ark (chapter 8) and needed clean animals. God prepared for worship before judgment even fell. This reveals God's meticulous care — He thinks not only about salvation but about the thanksgiving and worship that follows.

"For in seven days I will send rain on the earth forty days and forty nights." (Genesis 7:4)

Another seven days of waiting. The ark was built, the animals had entered, the people were inside, but no flood yet. Imagine those seven days — people outside carrying on as usual, perhaps mocking those in the ark: "Where is this rain of yours?" Seven days without a single drop. What faith this required! But Noah did not open the door and walk out. He trusted God's word.

Then the flood came.

"In the six hundredth year of Noah's life, in the second month, on the seventeenth day of the month, on that day all the fountains of the great deep burst forth, and the windows of the heavens were opened. And rain fell upon the earth forty days and forty nights." (Genesis 7:11-12)

This was no ordinary rainstorm. "All the fountains of the great deep burst forth" — water erupted from below the earth. "The windows of the heavens were opened" — water poured from above. Remember Genesis 1? On the second day God separated the waters, dividing "the waters that were under the expanse from the waters that were above the expanse." Now God removed that separation. The waters above and below reunited — creation was reversed.

This is a profoundly important theological picture. Creation was God ordering chaos — separating light from darkness, water from land, placing each creature in its kind. The flood reversed this process — order returned to chaos, creation to void. Sin's ultimate consequence works exactly this way: piece by piece, it dismantles the beautiful order God created, returning everything to "without form and void, darkness over the face of the deep."

Do you see? Sin is not merely doing a bad thing. Sin is the undoing of creation, rebellion against God's order.

"And the waters prevailed so mightily on the earth that all the high mountains under the whole heaven were covered. The waters prevailed above the mountains, covering them fifteen cubits deep." (Genesis 7:19-20)

The entire surface was submerged. No high ground to flee to, no mountaintop for refuge. Before God's judgment, there is no middle ground. You are either in the ark or in the water. There is no third option.

"Everything on the dry land in whose nostrils was the breath of life died. He blotted out every living thing that was on the face of the ground, man and animals and creeping things and birds of the heavens. They were blotted out from the earth. Only Noah was left, and those who were with him in the ark." (Genesis 7:22-23)

These verses carry immense weight. Every breathing creature — the elderly, the young, children, animals — all perished beneath the water. Judgment is not an abstract theological concept. It is real, concrete, and irreversible. This is the wages of sin — death (Romans 6:23).

You might ask: how could God do this? So many people, including innocent children?

Brothers and sisters, the premise of this question itself must be examined. The word "innocent" — before God, no one qualifies. "None is righteous, no, not one" (Romans 3:10). The flood was not excessive punishment but sin's deserved consequence. What should truly astonish us is not "Why does God judge?" but "Why is God still willing to save?" In a world where every intention was only evil continually, God still prepared an ark, still gave 120 years for repentance. That is what should astound us.

But above these waters of death, the ark floated.

"And the waters prevailed on the earth 150 days." (Genesis 7:24)

One hundred and fifty days. Five months. The ark drifted on the water with no steering wheel, no engine, no navigation — entirely in God's hands. Noah didn't know how long the drifting would last, where they would land, or what the outside world had become. The only thing he knew: God's word is faithful. God shut him in the ark; God would keep him to the end.

This is faith's essence. Faith is not knowing all the answers. Faith is trusting the One who knows everything when you don't know the answers. "Even though I walk through the valley of the shadow of death, I will fear no evil, for you are with me." (Psalm 23:4)

Some ask: why did God use a flood? Why not another method? Return to Genesis 1 — God used water to create the world ("the Spirit of God was hovering over the face of the waters"); now God used water to judge it. Water in Scripture carries dual significance: it is both the source of life and the instrument of death. The Red Sea's waters saved Israel and drowned Egypt's army. The Jordan's waters brought Israel into the Promised Land. Baptismal water symbolizes dying and rising with Christ. The same water is salvation's medium for believers and judgment's instrument for unbelievers.

Note another detail: the flood lasted "forty" days and nights. Forty is a significant number in Scripture — Moses spent forty days on the mountain, Israel wandered forty years in the wilderness, Jesus was tempted forty days in the desert. Forty represents a period of testing and preparation. The flood's forty days were both trial and judgment on the old world, and preparation for the new.

One more chilling detail: "the waters prevailed on the earth 150 days." Imagine the scene outside the ark — once-bustling towns, lively markets, laughing families, proud Nimrod-like heroes — now all silent beneath the water. Everything the world deemed secure — wealth, power, status, relationships — could not stand before God's judgment. "For all flesh is like grass and all its glory like the flower of grass. The grass withers, and the flower falls, but the word of the Lord remains forever." (1 Peter 1:24-25) Only God's word and the faith to enter the ark endure through judgment.

Brothers and sisters, let me finally point out this chapter's most easily overlooked yet most important verse:

"And the LORD shut him in." (Genesis 7:16)

Noah did not shut the door himself — the LORD shut it with His own hand. What does this mean? First, the safety of those inside was God's responsibility, not their own strength. The ark would not sink in the raging waves not because it was strong enough but because God's hand upheld it. Second, once the door was shut, no one outside could enter no matter how hard they knocked. The door of grace is open, but not forever. A day will come when the door shuts.

Peter writes: "The world that then existed was deluged with water and perished. But by the same word the heavens and earth that now exist are stored up for fire, being kept until the day of judgment and destruction of the ungodly." (2 Peter 3:6-7) The flood was a foreshadowing — greater judgment lies ahead. But for those in the ark, for those in Christ, the waters of judgment cannot harm you.

The same water carried the ark and drowned the world. For some it meant judgment; for others, salvation. Christ's cross is the same — to unbelievers a stumbling block, but to those who believe, the power of God (1 Corinthians 1:18).

Which side are you on? The ark's door is still open today.`,
  historyContext_zh: `创世记第七章记载了洪水的降临。根据经文，挪亚在600岁时洪水来到。洪水持续了40昼夜（创7:12），但水势浩大共150天（创7:24）。"大渊的泉源都裂开了，天上的窗户也敞开了"——这描述的不仅是降雨，还包括地下水的喷涌，暗示了一场全球性的大灾变。方舟的尺寸（长300肘、宽50肘、高30肘）约相当于一艘现代货轮的大小，足以容纳各类动物和一年的食物。`,
  historyContext_en: `Genesis 7 records the flood's arrival. According to the text, Noah was 600 years old when the flood came. Rain lasted 40 days and nights (7:12), but waters prevailed for 150 days (7:24). "All the fountains of the great deep burst forth, and the windows of the heavens were opened" — describing not just rain but underground water eruption, suggesting a global cataclysm. The ark's dimensions (300x50x30 cubits) approximate a modern cargo ship, sufficient for all animal kinds and a year's provisions.`,
  structure_zh: `第七章分为三个部分：（1）1-5节：上帝的最后吩咐——进入方舟的命令，洁净和不洁净的动物各取若干；（2）6-16节：洪水降临——挪亚一家和动物进入方舟，耶和华亲手关门；（3）17-24节：洪水的毁灭——水势极大，天下的高山都被淹没，凡有气息的生灵都死了，惟有方舟里的得以保全。`,
  structure_en: `Chapter 7 has three sections: (1) vv.1-5: God's final commands — enter the ark, take clean and unclean animals; (2) vv.6-16: The flood arrives — Noah's family and animals enter, the LORD shuts the door; (3) vv.17-24: The flood's destruction — waters prevailed greatly, all high mountains covered, all breathing creatures died, only those in the ark survived.`,
  theology_zh: `第七章的核心神学主题：（1）上帝审判的真实性：洪水不是神话，而是上帝对罪的真实回应。"凡有血气的人，他的尽头已经来到我面前"（创6:13）；（2）上帝主权的拯救："耶和华就把他关在方舟里头"（创7:16）——救恩从头到尾都是上帝的工作，连关门都是上帝亲手做的；（3）创造的逆转：洪水是对创世记第一章的有意逆转——上帝曾分开水使旱地出现，现在让水重新覆盖一切。罪的最终结局是将创造退回虚空。`,
  theology_en: `Chapter 7's core theological themes: (1) Reality of God's judgment: the flood is not myth but God's real response to sin; (2) Sovereign salvation: "the LORD shut him in" (7:16) — salvation is God's work from start to finish, even the door-closing was God's own act; (3) Creation in reverse: the flood intentionally reverses Genesis 1 — God had separated waters to reveal dry land, now waters cover everything again. Sin's ultimate consequence returns creation to void.`,
  christShadow_zh: `洪水的审判与拯救预表了基督里的审判与救恩。彼得明确说方舟中的水"这水所表明的洗礼，现在借着耶稣基督复活也拯救你们"（彼前3:21）。方舟经过水的审判而不被毁灭，正如基督经过十字架的审判而从死里复活。信徒在基督里，如同挪亚在方舟里——审判之水从四面围来，但不能伤害在方舟里面的人。"如今，那些在基督耶稣里的就不定罪了"（罗8:1）。`,
  christShadow_en: `The flood's judgment and salvation foreshadow judgment and salvation in Christ. Peter explicitly connects the ark: "Baptism, which corresponds to this, now saves you... through the resurrection of Jesus Christ" (1 Peter 3:21). The ark passed through the waters of judgment without destruction, as Christ passed through the cross and rose from death. Believers in Christ, like Noah in the ark — waters of judgment surround but cannot harm those inside. "There is therefore now no condemnation for those who are in Christ Jesus" (Romans 8:1).`,});
readings.push({
  book: '创世记', bookEn: 'Genesis', chapter: 8,
  publishDate: '2026-02-25',
  title: '新的开始', titleEn: 'A New Beginning',
  author: '摩西', authorEn: 'Moses',
  scripture: '创世记 8:1-22 / Genesis 8:1-22',
  content_zh: `弟兄姐妹，洪水退去了。但我要你们注意经文的第一句话。

"神记念挪亚和挪亚方舟里的一切走兽牲畜。神叫风吹地，水势渐落。"（创8:1）

"神记念"——这两个字是整章的钥匙。不是说上帝忘了挪亚，然后突然想起来了。圣经中"记念"是一个约的用语，意思是上帝开始主动行动，施行祂的应许。就像后来"神听见他们的哀声，就记念他与亚伯拉罕、以撒、雅各所立的约"（出2:24），然后差遣摩西去拯救以色列人。记念是恩典的行动，是约的信实。

在挪亚最黑暗的日子里——在水上漂了一百五十天，看不到陆地，看不到希望——上帝没有忘记他。弟兄姐妹，你是不是有时候也觉得上帝忘了你？试炼太长了，祷告好像没有回应，黑暗好像没有尽头？请记住：上帝记念祂的约。祂的时间表和你的不一样，但祂从来没有忘记过你。

上帝叫风吹地，水势渐落。方舟停在亚拉腊山上——就是现在土耳其东部的那座高山。然后挪亚做了一件有智慧的事：他先放出一只乌鸦。

乌鸦飞来飞去——不回来了。乌鸦是不洁净的鸟（利11:15），它可以停在漂浮的尸体上觅食，不需要干净的陆地。然后挪亚放出一只鸽子。鸽子是洁净的鸟，它不会停在不洁净的东西上。第一次，鸽子找不到落脚之处，飞回方舟——外面还没有预备好。

"他又等了七天，再把鸽子从方舟放出去。到了晚上，鸽子回到他那里，嘴里叼着一个新拧下来的橄榄叶子。挪亚就知道地上的水退了。"（创8:10-11）

一片橄榄叶子。在一百五十天的黑暗和等待之后，一片小小的绿色叶子。这是盼望的记号——生命没有完全消失，大地正在恢复，新的开始就要来了。橄榄树是极其顽强的树种，即使被水淹没相当长的时间，仍然可以重新发芽。在毁灭的世界里，生命顽强地冒出头来。

第三次放鸽子，鸽子不再回来了——新世界已经预备好了，鸽子找到了安息之所。

弟兄姐妹，你们看到这幅画面的属灵意义了吗？乌鸦代表属肉体的心——在污秽中也能安然自得。鸽子代表属灵的心——在罪的世界里找不到安息，只有回到方舟（回到基督里面）才有平安。而且鸽子是圣灵的象征——耶稣受洗时"圣灵仿佛鸽子降在他身上"（太3:16）。鸽子带回橄榄叶，宣告审判过后新生命的开始，正如圣灵向我们的心作见证，宣告基督的复活和新创造的开始。

"挪亚为耶和华筑了一座坛，拿各类洁净的牲畜、飞鸟献在坛上为燔祭。"（创8:20）

挪亚走出方舟做的第一件事不是为自己建房子，不是开垦土地，不是勘察新环境——是敬拜。他筑坛献祭。这是整本圣经中第一次明确记载的筑坛献祭。

想想这个画面：一个刚刚经历了毁灭性审判的世界，满目疮痍。挪亚一家站在空旷的大地上，四周是洪水退去后的荒凉。在这样的环境中，挪亚的第一个行动是——感恩。他没有抱怨一年多的漂泊之苦，没有担忧未来的艰难，他知道他能站在这里，完全是上帝的恩典。所以他的第一反应是敬拜。

弟兄姐妹，这教导我们一个重要的功课：无论环境多么艰难，敬拜应该是我们生命的第一优先。约伯在失去一切之后说"赏赐的是耶和华，收取的也是耶和华，耶和华的名是应当称颂的"（伯1:21）。感恩不取决于环境，取决于你认不认识那位掌管环境的上帝。

而且请注意，挪亚献上的是"各类洁净的牲畜、飞鸟"。方舟里洁净的畜类带了七对，不洁净的只带了一对——多出来的那些，就是为了献祭预备的。上帝在审判之前就计划好了：拯救之后，会有敬拜；敬拜之中，会有牺牲。这不是挪亚临时想出来的，是上帝早就安排好的。弟兄姐妹，你生命中的每一个"多出来的"祝福，都是上帝预备给你用来感恩和奉献的。

"耶和华闻那馨香之气，就心里说：'我不再因人的缘故咒诅地（人从小时心里怀着恶念），也不再按着我才行的灭各种的活物了。'"（创8:21）

这节经文包含了一个惊人的张力。请注意括号里的话："人从小时心里怀着恶念。"上帝决定不再用洪水毁灭世界，不是因为人变好了——人的本性一点都没有改变！洪水洗去了罪人，但洗不去罪性。挪亚是义人，但他仍然是罪人（下一章就会看到他醉酒的跌倒）。他的后代也会继续犯罪——巴别塔就是明证。

那上帝为什么不再审判？因为恩典。因为祭物。挪亚的燔祭发出"馨香之气"——这个希伯来词是nihoah，和"挪亚"（Noach）谐音。挪亚的名字意思是"安慰"，他的祭真的给上帝带来了安慰。但这祭物本身不能解决罪的问题——一只羊的死不能真正除去人心里的恶。这个祭只是影子，指向那真正的实体。

真正的"馨香之气"是基督。"也要凭爱心行事，正如基督爱我们，为我们舍了自己，当作馨香的供物和祭物献与神。"（弗5:2）基督在十字架上所献的，才是真正让上帝"心满意足"的祭——因为只有完美的神子的生命，才能真正赎回堕落的人类。

上帝因着基督（挪亚的祭所预表的），与全人类立了一个关于自然秩序的约：

"地还存留的时候，稼穑、寒暑、冬夏、昼夜就永不停息了。"（创8:22）

四季轮转，日升日落，播种收割——每一天的稳定秩序，都是上帝信实的证据。你今天早上醒来，太阳升起——这不是理所当然的。每一个春天的花开，每一个秋天的丰收，每一个冬天过后的回暖——都是上帝在向你宣告："我守我的约。"

这就是改革宗神学所说的"普遍恩典"。上帝赐给全人类——不分信与不信——稳定的自然秩序、维持生命的条件。不是因为我们配得，而是因为上帝的信实。阳光照好人也照歹人，降雨给义人也给不义的人（太5:45）。

这个"普遍恩典"的教义也提醒我们要谦卑。非基督徒能够做出善行、创造美好的文化和艺术、发现科学真理——这不是因为他们不需要福音，而是因为上帝的普遍恩典仍然在他们身上运行。加尔文说，如果我们因为真理出自非信徒之口就拒绝，那是在侮辱赐下一切真理的圣灵。普遍恩典让世界不至于完全沦为地狱，但它不能拯救灵魂——拯救需要特殊恩典，需要基督的福音。

弟兄姐妹，从洪水到十字架，从挪亚的祭到基督的祭，上帝的救赎计划是一条清晰的线。洪水审判了旧世界，方舟保全了一个家庭，挪亚的祭开启了新的开始。但这个"新开始"仍然不完美——因为人心没有改变。真正的新天新地，要等到基督再来的那一天。"但我们照他的应许，盼望新天新地，有义居在其中。"（彼后3:13）

在那一天来到之前，每一个日出，每一个四季轮回，都在提醒你：上帝是信实的，祂守祂的约。`,
  content_en: `Brothers and sisters, the floodwaters receded. But I want you to notice the chapter's very first words.

"But God remembered Noah and all the beasts and all the livestock that were with him in the ark. And God made a wind blow over the earth, and the waters subsided." (Genesis 8:1)

"God remembered" — these two words are the chapter's key. Not that God had forgotten Noah and suddenly recalled him. In Scripture, "remembered" is covenant language meaning God began actively fulfilling His promise. Just as later "God heard their groaning, and God remembered his covenant with Abraham, with Isaac, and with Jacob" (Exodus 2:24), then sent Moses to deliver Israel. Remembering is an act of grace, a demonstration of covenant faithfulness.

In Noah's darkest days — drifting on the water for 150 days, seeing no land, seeing no hope — God had not forgotten him. Brothers and sisters, do you sometimes feel God has forgotten you? The trial is too long, prayers seem unanswered, darkness seems endless? Remember: God remembers His covenant. His timetable differs from yours, but He has never forgotten you.

God made a wind blow over the earth, and the waters subsided. The ark came to rest on the mountains of Ararat — the high mountains in what is now eastern Turkey. Then Noah did something wise: he first sent out a raven.

The raven flew back and forth — it did not return. Ravens are unclean birds (Leviticus 11:15); they can perch on floating carcasses to feed, needing no clean ground. Then Noah sent out a dove. Doves are clean birds; they will not land on unclean things. The first time, the dove found no resting place and returned to the ark — the world outside was not yet ready.

"He waited another seven days, and again he sent forth the dove out of the ark. And the dove came back to him in the evening, and behold, in her mouth was a freshly plucked olive leaf. So Noah knew that the waters had subsided from the earth." (Genesis 8:10-11)

One olive leaf. After 150 days of darkness and waiting, one small green leaf. This is a token of hope — life had not completely vanished, the earth was recovering, a new beginning was imminent. Olive trees are remarkably resilient; even after prolonged submersion, they can sprout again. In a devastated world, life stubbornly pushes through.

The third time, the dove did not return — the new world was ready; the dove had found rest.

Brothers and sisters, do you see this picture's spiritual significance? The raven represents the carnal heart — at ease even in corruption. The dove represents the spiritual heart — finding no rest in a sinful world, returning only to the ark (to Christ) for peace. Moreover, the dove symbolizes the Holy Spirit — at Jesus's baptism "the Spirit of God descending like a dove" (Matthew 3:16). The dove bringing back an olive leaf, announcing new life after judgment, parallels the Spirit witnessing to our hearts, declaring Christ's resurrection and new creation's dawn.

"Then Noah built an altar to the LORD and took some of every clean animal and some of every clean bird and offered burnt offerings on the altar." (Genesis 8:20)

The first thing Noah did upon leaving the ark was not building a house, not tilling the ground, not surveying the new landscape — it was worship. He built an altar and sacrificed. This is the first explicitly recorded altar sacrifice in all of Scripture.

Picture the scene: a world just ravaged by devastating judgment, desolate in every direction. Noah's family standing on empty ground, surrounded by the barrenness left by receding floodwaters. In such circumstances, Noah's first act was gratitude. He did not complain about a year of drifting hardship or worry about future difficulties. He knew that standing here at all was entirely God's grace. So his first response was worship.

Brothers and sisters, this teaches an important lesson: no matter how difficult the circumstances, worship should be our life's first priority. Job, after losing everything, said "the LORD gave, and the LORD has taken away; blessed be the name of the LORD" (Job 1:21). Gratitude depends not on circumstances but on knowing the God who governs them.

Notice also that Noah offered "some of every clean animal and some of every clean bird." The ark carried seven pairs of clean animals but only one pair of unclean — the extra pairs were prepared for sacrifice. God planned before judgment: after salvation, there would be worship; within worship, there would be sacrifice. This was not Noah's improvisation but God's prior arrangement. Brothers and sisters, every "extra" blessing in your life is what God prepared for your gratitude and offering.

"And when the LORD smelled the pleasing aroma, the LORD said in his heart, 'I will never again curse the ground because of man, for the intention of man's heart is evil from his youth. Neither will I ever again strike down every living creature as I have done.'" (Genesis 8:21)

This verse contains an astonishing tension. Notice the parenthetical: "for the intention of man's heart is evil from his youth." God decided never again to destroy the world by flood, not because humanity had improved — human nature hadn't changed one bit! The flood washed away sinners but could not wash away the sin nature. Noah was righteous yet still a sinner (the next chapter reveals his drunken fall). His descendants would continue sinning — the Tower of Babel proves it.

Then why does God refrain from judgment? Because of grace. Because of the offering. Noah's burnt offering produced a "pleasing aroma" — the Hebrew word is nihoah, a wordplay on "Noah" (Noach). Noah's name means "comfort," and his sacrifice truly brought God comfort. But the offering itself could not solve the sin problem — one lamb's death cannot truly remove evil from the human heart. This sacrifice was only a shadow, pointing to the substance.

The true "pleasing aroma" is Christ. "Walk in love, as Christ loved us and gave himself up for us, a fragrant offering and sacrifice to God." (Ephesians 5:2) What Christ offered on the cross is what truly satisfies God — for only the perfect Son of God's life can truly redeem fallen humanity.

Because of Christ (foreshadowed by Noah's sacrifice), God established a covenant with all humanity regarding natural order:

"While the earth remains, seedtime and harvest, cold and heat, summer and winter, day and night, shall not cease." (Genesis 8:22)

The cycle of seasons, the rising and setting of the sun, sowing and reaping — every day's stable order is evidence of God's faithfulness. You woke up this morning and the sun rose. That is not to be taken for granted. Every spring's blossoming, every autumn's harvest, every warming after winter — all are God declaring to you: "I keep my covenant."

This is what Reformed theology calls "common grace." God gives all humanity — believer and unbeliever alike — stable natural order and conditions for life. Not because we deserve it, but because of God's faithfulness. "He makes his sun rise on the evil and on the good, and sends rain on the just and on the unjust" (Matthew 5:45).

This doctrine of common grace also calls us to humility. Non-Christians can perform good deeds, create beautiful culture and art, and discover scientific truth — not because they don't need the gospel, but because God's common grace still operates in them. Calvin said that if we reject truth simply because it comes from unbelievers, we insult the Holy Spirit who gives all truth. Common grace keeps the world from becoming hell on earth, but it cannot save souls — salvation requires special grace, requires the gospel of Christ.

Brothers and sisters, from the flood to the cross, from Noah's sacrifice to Christ's sacrifice, God's redemptive plan traces a clear line. The flood judged the old world, the ark preserved one family, Noah's sacrifice inaugurated a new beginning. But this "new beginning" remained imperfect — because the human heart was unchanged. The true new heavens and new earth await Christ's return. "But according to his promise we are waiting for new heavens and a new earth in which righteousness dwells." (2 Peter 3:13)

Until that day comes, every sunrise, every turn of seasons, reminds you: God is faithful; He keeps His covenant.`,
  historyContext_zh: `创世记第八章记载洪水退去和挪亚出方舟的过程。方舟停在亚拉腊山上（现今土耳其东部）。挪亚用乌鸦和鸽子来试探地面状况——这是古代航海者常用的方法。从洪水开始到挪亚出方舟，共经历了约一年零十天。挪亚出方舟后做的第一件事是筑坛献祭——这是圣经中第一次明确记载的筑坛献祭，预示了后来以色列整个祭祀体系的开端。`,
  historyContext_en: `Genesis 8 records the flood's recession and Noah's exit from the ark. The ark rested on the mountains of Ararat (modern eastern Turkey). Noah used a raven and dove to test ground conditions — a common ancient seafaring practice. From flood's start to Noah's exit, approximately one year and ten days passed. Noah's first act upon leaving was building an altar and sacrificing — the first explicitly recorded altar sacrifice in Scripture, foreshadowing Israel's entire sacrificial system.`,
  structure_zh: `第八章分为四个部分：（1）1-5节：上帝记念挪亚，水势渐落，方舟停在亚拉腊山上；（2）6-14节：挪亚放出乌鸦和鸽子试探地面——乌鸦飞来飞去，鸽子三次被放出（第一次回来，第二次带回橄榄叶，第三次不再回来）；（3）15-19节：上帝吩咐挪亚出方舟，一切活物也出来"在地上多多滋生，大大兴旺"；（4）20-22节：挪亚献祭，上帝应许不再用洪水毁灭全地。`,
  structure_en: `Chapter 8 has four sections: (1) vv.1-5: God remembers Noah, waters recede, ark rests on Ararat; (2) vv.6-14: Noah sends raven and dove to test ground — raven flies back and forth, dove sent three times (returns first, brings olive leaf second, doesn't return third); (3) vv.15-19: God commands Noah to leave the ark, all creatures to "be fruitful and multiply"; (4) vv.20-22: Noah sacrifices, God promises never again to destroy by flood.`,
  theology_zh: `第八章的神学主题：（1）上帝的信实："神记念挪亚"——上帝守约施慈爱，在审判中不忘祂的百姓；（2）新创造的开始：挪亚出方舟如同新的亚当，上帝重新赐下"生养众多"的祝福，但人的罪性没有改变（"人从小时心里怀着恶念"，创8:21）；（3）献祭与恩典：挪亚的燔祭是"馨香之气"，上帝因着祭物（不是因着人的改变）而赐下不再毁灭的应许——这预表了恩典之约的本质：上帝的怜悯不是基于人的表现；（4）普遍恩典：四季轮转、昼夜不息（创8:22）是上帝对全人类的普遍恩典——不只给信徒，也给所有人。`,
  theology_en: `Chapter 8's theological themes: (1) God's faithfulness: "God remembered Noah" — God keeps covenant love, not forgetting His people even in judgment; (2) New creation's beginning: Noah leaving the ark as a new Adam, God renewing the "be fruitful" blessing, yet human sin nature unchanged ("the intention of man's heart is evil from his youth," 8:21); (3) Sacrifice and grace: Noah's burnt offering as "pleasing aroma," God's promise based on the offering (not human improvement) — foreshadowing the covenant of grace: God's mercy isn't based on human performance; (4) Common grace: seasons and day-night cycles (8:22) are God's common grace to all humanity — not just believers.`,
  christShadow_zh: `挪亚的献祭预表了基督的十字架。挪亚的燔祭发出"馨香之气"（nihoah，与挪亚Noah谐音），上帝因此立约不再用洪水毁灭世界。基督"将自己献给神，当作馨香的供物和祭物"（弗5:2），上帝因基督的献祭而与我们立了新约。鸽子带回橄榄叶——和平与新生命的记号——预表了圣灵（鸽子的形象）带来基督复活的好消息和新生命的盼望。方舟中的旧世界逝去、新世界开始，正如在基督里"旧事已过，都变成新的了"（林后5:17）。`,
  christShadow_en: `Noah's sacrifice foreshadows Christ's cross. Noah's burnt offering produced a "pleasing aroma" (nihoah, a wordplay on Noah), prompting God's covenant never to flood the earth again. Christ "gave himself up for us, a fragrant offering and sacrifice to God" (Ephesians 5:2), and God through Christ's sacrifice established the new covenant with us. The dove bringing an olive leaf — symbol of peace and new life — foreshadows the Holy Spirit (in dove imagery) bringing news of Christ's resurrection and hope of new life. The old world passing and new world beginning in the ark parallels being in Christ: "The old has passed away; behold, the new has come" (2 Corinthians 5:17).`,});
readings.push({
  book: '创世记', bookEn: 'Genesis', chapter: 9,
  publishDate: '2026-02-26',
  title: '彩虹之约', titleEn: 'The Rainbow Covenant',
  author: '摩西', authorEn: 'Moses',
  scripture: '创世记 9:1-29 / Genesis 9:1-29',
  content_zh: `弟兄姐妹，洪水过后，上帝做了一件极其庄严的事——祂与挪亚立约。这是圣经中第一个明确使用"约"（berith）这个词的约，也是理解上帝整个救赎计划的重要基石。

"神赐福给挪亚和他的儿子，对他们说：'你们要生养众多，遍满了地。'"（创9:1）

这句话是不是很熟悉？和创世记1:28上帝对亚当说的几乎一样。这是有意的回响——上帝在重新开始。挪亚就像第二个亚当，从方舟走出来进入一个被洗净的世界，领受与第一个亚当相同的祝福和使命。但请记住：这个"新亚当"和第一个一样，也是罪人。新的开始并不意味着罪的问题已经解决了。

接下来，上帝设立了几个极其重要的律例。

第一，人可以吃肉了。"凡活着的动物，都可以作你们的食物，这一切我都赐给你们，如同菜蔬一样。"（创9:3）在洪水之前，人类只吃植物（创1:29）。现在上帝扩大了人类的食物范围。但紧接着加了一个限制：

"惟独肉带着血，那就是他的生命，你们不可吃。"（创9:4）

血代表生命，生命属于上帝。这个禁令贯穿整本圣经——利未记17:11说"因为活物的生命是在血中"；使徒行传15章的耶路撒冷会议仍然要求外邦信徒"禁戒血"。血之所以重要，是因为它最终指向基督的宝血——"基督的血岂不更能洗净你们的心"（来9:14）。每一次旧约中"不可吃血"的命令，都在提醒人们：生命是神圣的，赎罪需要流血，而那终极的赎罪之血还在将来。

第二，上帝设立了对人命的保护：

"流你们血、害你们命的，无论是兽是人，我必讨他的罪，就是向各人的弟兄也是如此。凡流人血的，他的血也必被人所流，因为神造人是照自己的形像造的。"（创9:5-6）

这段经文有极其深远的意义。上帝在这里设立了人类社会公义的基础——对杀人罪的惩罚。为什么杀人是如此严重的罪？不仅仅因为你伤害了另一个人，更因为你亵渎了上帝的形象。每一个人——无论种族、性别、年龄、社会地位——都是按上帝的形象造的。打击人就是打击上帝的形象。这是人权和人的尊严的终极根基——不是因为人类自己决定人命是宝贵的，而是因为造物主说人是按祂的形象造的。

改革宗传统从这段经文中看到了政府权柄的圣经根据。上帝赋予人类社会执行公义的权柄——"他的血也必被人所流"意味着上帝授权人类社会来惩罚罪恶。保罗在罗马书13章进一步阐述了这个原则："他是神的用人，是伸冤的，刑罚那作恶的"（罗13:4）。

然后，上帝赐下了彩虹之约——圣经中第一个明确的约。

"我与你们并你们的后裔立约，并与你们这里的一切活物——就是飞鸟、牲畜、走兽，凡从方舟里出来的活物——立约。我与你们立约，凡有血肉的，不再被洪水灭绝，也不再有洪水毁坏地了。"（创9:9-11）

请注意这个约的几个特点。第一，它是无条件的。上帝没有说"如果你们表现好，我就不再毁灭世界"。祂说"我与你们立约"——这是单方面的应许，不取决于人的行为。这是恩典之约的本质：上帝的信实不依赖人的回应。

第二，它是普世性的。不只是与挪亚和他的后裔，也是与"一切活物"。这是上帝对全受造界的承诺。上帝关心的不只是人类，也包括祂所创造的一切生命。

第三，上帝给了一个记号："我把虹放在云彩中，这就可作我与地立约的记号了。我使云彩盖地的时候，必有虹现在云彩中，我便记念我与你们和各样有血肉的活物所立的约。"（创9:13-15）

弟兄姐妹，每次你看到彩虹，那不是一个漂亮的天气现象，那是上帝的签名。有趣的是，希伯来文中"虹"（qesheth）和"弓"是同一个词——战弓。在古代近东文化中，挂起弓是停战的意思。上帝把祂的"战弓"挂在天上，弓背朝向天空（而不是朝向地面），象征着审判之战的结束，和平的开始。上帝不再向地面射箭了。这是何等温柔的画面。

但这一章的结尾出了一件让人尴尬的事。

"挪亚作起农夫来，栽了一个葡萄园。他喝了园中的酒便醉了，在帐棚里赤着身子。"（创9:20-21）

挪亚——这位在上帝面前被称为义人的人，这位刚刚被上帝从洪水中拯救出来的人——醉酒了，赤身露体。这个画面和亚当在伊甸园中犯罪后"知道自己赤身露体"何其相似！上帝给了人类一个新的开始，但人类再次跌倒。第一个亚当在园子里犯罪，第二个"亚当"（挪亚）也在园子里犯罪。

这告诉我们一个残酷的真相：洪水可以毁灭旧世界，但不能创造新人心。外部环境的改变不能解决内部罪性的问题。人类需要的不是一场洪水，不是一个新的环境，而是一颗新的心。先知以西结后来预言说："我也要赐给你们一个新心，将新灵放在你们里面。"（结36:26）只有上帝的灵才能做到洪水做不到的事——改变人心。

含的罪也值得仔细思考。"迦南的父亲含看见他父亲赤身，就到外边告诉他两个弟兄。"（创9:22）含的罪不只是看见了父亲的羞耻——那可能是无意的——而是出去公开传扬父亲的羞耻。他在父亲最脆弱的时刻，不是去遮盖，而是去宣扬。这是对父亲尊严的故意践踏。

相比之下，"闪和雅弗拿件衣服搭在肩上，倒退着进去，给他父亲盖上。他们背着脸就看不见父亲的赤身。"（创9:23）他们倒退着进去——不看父亲的羞耻，只管遮盖。这是何等尊贵的行为。

弟兄姐妹，"爱能遮掩许多的罪"（彼前4:8）。闪和雅弗用衣服遮盖父亲的羞耻，呼应了上帝用"皮子做衣服"给亚当夏娃遮体（创3:21），最终都指向基督的义袍遮盖我们一切的罪和羞耻。"你们受洗归入基督的都是披戴基督了"（加3:27）。在基督里，我们的羞耻被遮盖了，我们的赤身被穿上了荣耀的义袍。

挪亚醒来后，对三个儿子说了预言。他咒诅迦南（含的儿子），说他要作闪和雅弗的仆人。他祝福闪，说"耶和华闪的神是应当称颂的"——注意，他没有说"闪是应当称颂的"，而是说"闪的神"。祝福不在闪本身，而在闪的上帝。救赎的谱系将从闪的后裔中延续——从闪到亚伯拉罕到大卫到基督。

他又祝福雅弗，说"愿神使雅弗扩张，使他住在闪的帐棚里"（创9:27）。"住在闪的帐棚里"——这是一个福音的预言！雅弗的后裔（外邦人）将来要分享闪的后裔（以色列人）的属灵祝福。保罗后来说外邦人是被接在橄榄树上的野橄榄枝（罗11:17）。我们这些外邦信徒，正是"住在闪的帐棚里"的应验。

从挪亚的三个儿子到全地的万族，从第九章的预言到基督里的成全——上帝的计划一直是面向全人类的。`,
  content_en: `Brothers and sisters, after the flood, God did something profoundly solemn — He made a covenant with Noah. This is the first covenant in Scripture to explicitly use the word "covenant" (berith), and an essential foundation for understanding God's entire redemptive plan.

"And God blessed Noah and his sons and said to them, 'Be fruitful and multiply and fill the earth.'" (Genesis 9:1)

Sound familiar? It is nearly identical to what God told Adam in Genesis 1:28. This echo is deliberate — God was starting over. Noah is like a second Adam, stepping out of the ark into a cleansed world, receiving the same blessing and mandate as the first Adam. But remember: this "new Adam," like the first, was still a sinner. A fresh start did not mean the sin problem was solved.

God then established several critically important ordinances.

First, humans could now eat meat. "Every moving thing that lives shall be food for you. And as I gave you the green plants, I give you everything." (Genesis 9:3) Before the flood, humans ate only plants (Genesis 1:29). Now God expanded humanity's food. But immediately added a restriction:

"But you shall not eat flesh with its life, that is, its blood." (Genesis 9:4)

Blood represents life, and life belongs to God. This prohibition runs through all of Scripture — Leviticus 17:11 says "the life of the flesh is in the blood"; the Jerusalem Council in Acts 15 still required Gentile believers to "abstain from blood." Blood matters because it ultimately points to Christ's precious blood — "how much more will the blood of Christ... purify our conscience" (Hebrews 9:14). Every Old Testament command against eating blood reminded people: life is sacred, atonement requires blood, and the ultimate atoning blood was still to come.

Second, God established the protection of human life:

"And for your lifeblood I will require a reckoning: from every beast I will require it and from man. From his fellow man I will require a reckoning for the life of man. Whoever sheds the blood of man, by man shall his blood be shed, for God made man in his own image." (Genesis 9:5-6)

This passage has profound significance. God established the foundation of justice in human society — punishment for murder. Why is murder so grievous? Not merely because you harmed another person, but because you desecrated God's image. Every person — regardless of race, gender, age, or social status — is made in God's image. To strike a person is to strike God's image. This is the ultimate foundation of human rights and dignity — not because humanity decided human life is valuable, but because the Creator declared humans are made in His image.

The Reformed tradition finds here the biblical basis for governmental authority. God granted human society the authority to execute justice — "by man shall his blood be shed" means God authorized human society to punish evil. Paul further develops this in Romans 13: "he is the servant of God, an avenger who carries out God's wrath on the wrongdoer" (Romans 13:4).

Then God gave the rainbow covenant — Scripture's first explicit covenant.

"Behold, I establish my covenant with you and your offspring after you, and with every living creature that is with you... I establish my covenant with you, that never again shall all flesh be cut off by the waters of the flood, and never again shall there be a flood to destroy the earth." (Genesis 9:9-11)

Notice several features of this covenant. First, it is unconditional. God did not say "if you behave well, I will not destroy the world again." He said "I establish my covenant with you" — a unilateral promise independent of human behavior. This is the essence of the covenant of grace: God's faithfulness does not depend on human response.

Second, it is universal. Not only with Noah and his descendants but with "every living creature." This is God's commitment to all creation. God cares not only about humanity but about all life He created.

Third, God gave a sign: "I have set my bow in the cloud, and it shall be a sign of the covenant between me and the earth. When I bring clouds over the earth and the bow is seen in the clouds, I will remember my covenant." (Genesis 9:13-15)

Brothers and sisters, every time you see a rainbow, it is not a beautiful weather phenomenon — it is God's signature. Interestingly, the Hebrew word for "rainbow" (qesheth) is the same word for "war bow." In ancient Near Eastern culture, hanging up one's bow signified ceasefire. God hung His war bow in the sky, its back arching heavenward (not earthward), symbolizing the end of judgment's battle and the beginning of peace. God would no longer shoot arrows at the ground. What a tender image.

But the chapter ends with an embarrassing incident.

"Noah began to be a man of the soil, and he planted a vineyard. He drank of the wine and became drunk and lay uncovered in his tent." (Genesis 9:20-21)

Noah — declared righteous before God, just delivered from the flood — became drunk and lay naked. How this mirrors Adam's sin in the garden, after which he "knew that he was naked"! God gave humanity a new beginning, but humanity fell again. The first Adam sinned in a garden; the second "Adam" (Noah) sinned in a garden too.

This tells us a brutal truth: the flood could destroy the old world but could not create a new heart. Changing external circumstances cannot solve the internal sin nature. Humanity needs not a flood, not a new environment, but a new heart. The prophet Ezekiel later proclaimed: "I will give you a new heart, and a new spirit I will put within you." (Ezekiel 36:26) Only God's Spirit can accomplish what the flood could not — transforming the human heart.

Ham's sin warrants careful reflection. "And Ham, the father of Canaan, saw the nakedness of his father and told his two brothers outside." (Genesis 9:22) Ham's sin was not merely seeing his father's shame — that may have been inadvertent — but going outside to broadcast it publicly. At his father's most vulnerable moment, instead of covering, he announced. This was deliberate trampling of his father's dignity.

By contrast, "Shem and Japheth took a garment, laid it on both their shoulders, and walked backward and covered the nakedness of their father. Their faces were turned backward, and they did not see their father's nakedness." (Genesis 9:23) They walked backward — not looking at their father's shame, only covering it. What noble conduct.

Brothers and sisters, "love covers a multitude of sins" (1 Peter 4:8). Shem and Japheth covering their father's shame echoes God clothing Adam and Eve with garments of skin (Genesis 3:21), and both ultimately point to Christ's robe of righteousness covering all our sin and shame. "For as many of you as were baptized into Christ have put on Christ" (Galatians 3:27). In Christ, our shame is covered; our nakedness is clothed with a glorious robe of righteousness.

When Noah awoke, he spoke prophecy over his three sons. He cursed Canaan (Ham's son), saying he would serve Shem and Japheth. He blessed Shem: "Blessed be the LORD, the God of Shem" — notice, he did not say "blessed be Shem" but "blessed be the God of Shem." The blessing lay not in Shem himself but in Shem's God. The redemptive lineage would continue through Shem's descendants — from Shem to Abraham to David to Christ.

He also blessed Japheth: "May God enlarge Japheth, and let him dwell in the tents of Shem" (Genesis 9:27). "Dwell in the tents of Shem" — this is a gospel prophecy! Japheth's descendants (the Gentiles) would one day share the spiritual blessings of Shem's descendants (Israel). Paul later said Gentiles are wild olive branches grafted onto the olive tree (Romans 11:17). We Gentile believers are the very fulfillment of "dwelling in the tents of Shem."

From Noah's three sons to all the earth's peoples, from chapter 9's prophecy to its fulfillment in Christ — God's plan has always been for all humanity.`,
  historyContext_zh: `创世记第九章是洪水叙事的总结。上帝与挪亚立约是圣经中第一个明确使用"约"（berith）这个词的约。这个约不仅是与挪亚个人的，也是与"一切有血肉的活物"的（创9:15）——这是一个普世性的约。彩虹作为约的记号，在古代近东文化中，弓（qesheth）也是武器的意思——上帝把祂的"战弓"挂在天上，象征着战争（审判）的结束与和平的开始。挪亚醉酒和含的行为导致了对迦南的咒诅，这在后来以色列征服迦南地时有了历史性的应验。`,
  historyContext_en: `Genesis 9 concludes the flood narrative. God's covenant with Noah is the first to explicitly use the word "covenant" (berith). This covenant is not just with Noah but with "every living creature" (9:15) — a universal covenant. The rainbow as covenant sign: in ancient Near Eastern culture, the bow (qesheth) also means weapon — God hung His "war bow" in the sky, symbolizing the end of warfare (judgment) and beginning of peace. Noah's drunkenness and Ham's behavior led to the curse on Canaan, which found historical fulfillment when Israel later conquered Canaan.`,
  structure_zh: `第九章分为三个部分：（1）1-7节：上帝赐福挪亚并设立律例——生养众多的祝福、允许吃肉但禁止吃血、设立对人命的保护；（2）8-17节：彩虹之约——上帝与一切活物立约，不再用洪水毁灭全地，以彩虹为记号；（3）18-29节：挪亚醉酒——含看见父亲赤身并宣扬，闪和雅弗遮盖父亲，挪亚醒后咒诅迦南、祝福闪和雅弗。`,
  structure_en: `Chapter 9 has three sections: (1) vv.1-7: God blesses Noah and establishes ordinances — blessing of fruitfulness, permission to eat meat but not blood, protection of human life; (2) vv.8-17: The rainbow covenant — God covenants with all living creatures never to destroy by flood again, rainbow as sign; (3) vv.18-29: Noah's drunkenness — Ham sees his father's nakedness and tells others, Shem and Japheth cover their father, Noah curses Canaan and blesses Shem and Japheth.`,
  theology_zh: `第九章有几个重要神学主题：（1）挪亚之约的性质：这是一个无条件的恩典之约——上帝单方面承诺不再用洪水毁灭世界，不取决于人的行为。这显明了上帝恩典的本质；（2）上帝的形象与人命的尊严：杀人之所以是大罪，是因为人是按上帝的形象造的（创9:6）。这是人权和人的尊严的终极根基；（3）挪亚的跌倒：即使是蒙恩的义人也会犯罪，证明了洪水不能解决罪的根本问题。人类需要的不是外在环境的改变，而是内心的更新；（4）闪的祝福：挪亚说"耶和华闪的神是应当称颂的"（创9:26）——救赎之线从闪的后裔中延续，最终通向亚伯拉罕和基督。`,
  theology_en: `Chapter 9 contains several important theological themes: (1) Nature of the Noahic covenant: an unconditional covenant of grace — God unilaterally promises never to destroy by flood, independent of human behavior, revealing grace's nature; (2) God's image and human dignity: murder is grave because humans bear God's image (9:6), the ultimate foundation for human rights and dignity; (3) Noah's fall: even a righteous man saved by grace sins, proving the flood cannot solve sin's fundamental problem. Humanity needs not environmental change but heart renewal; (4) Shem's blessing: Noah says "Blessed be the LORD, the God of Shem" (9:26) — the redemption line continues through Shem's descendants, ultimately leading to Abraham and Christ.`,
  christShadow_zh: `挪亚之约是上帝救赎计划中的重要一环。彩虹提醒我们上帝的信实——每一道彩虹都在说"上帝守约"。这个约保证了自然秩序的延续，为救赎历史的展开提供了舞台。挪亚醉酒后的赤身与亚当犯罪后的赤身形成呼应——两个"亚当"都失败了，都需要遮盖。闪和雅弗用衣服遮盖父亲的羞耻，呼应了上帝用"皮子做衣服"给亚当遮体（创3:21），最终都指向基督的义袍遮盖我们一切的罪和羞耻。"你们受洗归入基督的都是披戴基督了"（加3:27）。`,
  christShadow_en: `The Noahic covenant is crucial in God's redemptive plan. The rainbow reminds us of God's faithfulness — every rainbow declares "God keeps His covenant." This covenant guarantees the continuation of natural order, providing the stage for redemptive history to unfold. Noah's nakedness after drunkenness echoes Adam's nakedness after sin — both "Adams" failed, both needed covering. Shem and Japheth covering their father's shame echoes God clothing Adam with garments of skin (Genesis 3:21), and both ultimately point to Christ's robe of righteousness covering all our sin and shame. "For as many of you as were baptized into Christ have put on Christ" (Galatians 3:27).`,});
readings.push({
  book: '创世记', bookEn: 'Genesis', chapter: 10,
  publishDate: '2026-02-27',
  title: '万国表', titleEn: 'The Table of Nations',
  author: '摩西', authorEn: 'Moses',
  scripture: '创世记 10:1-32 / Genesis 10:1-32',
  content_zh: `弟兄姐妹，我知道你们一看到又是一章家谱就想翻页了。但第十章这份家谱不一样——它被称为"万国表"（Table of Nations），是人类历史上最古老的民族志文献。整个人类文明的起源和分布，都浓缩在这短短的三十二节经文里。

"这是挪亚的儿子闪、含、雅弗的后代。洪水以后，他们都生了儿子。"（创10:1）

整个人类从这三个人开始重新繁衍。这一章列出了七十个民族——七十在圣经中是一个代表完全的数字（七乘以十）。这不是说全世界只有七十个民族，而是用一个完全的数字来表示"所有民族"。

让我带你们认识这三个家族：

雅弗的后裔（2-5节）分布在最北方和最西方——歌篾（可能是后来的西米里人，今天的高加索和欧洲地区）、玛各（以西结书38-39章中的末世敌人）、玛代（后来的玛代帝国，今天的伊朗北部）、雅完（希腊——"爱奥尼亚"就是雅完的希腊语形式）、土巴和米设（小亚细亚，今天的土耳其地区）。经文说"这些人的后裔将各国的地土、海岛分开居住，各随各的方言、宗族立国"（创10:5）——"海岛"在希伯来文中泛指地中海沿岸及远方的海岸地区。

如果你是欧洲或西亚血统的信徒，你的祖先在这里——你是雅弗的后裔。还记得挪亚的祝福吗？"愿神使雅弗扩张，使他住在闪的帐棚里。"你今天信靠闪的后裔耶稣基督，就是这个祝福的应验。

含的后裔（6-20节）分布在南方和东方——古实（今天的埃塞俄比亚和苏丹地区）、麦西（埃及——希伯来文中埃及就叫Mizraim/麦西）、弗（今天的利比亚地区）、迦南（后来的迦南地居民）。

在含的后裔中，有一个人被特别提出来：宁录。

"古实又生宁录，他为世上英雄之首。他在耶和华面前是个英勇的猎户。他国的起头是巴别、以力、亚甲、甲尼，都在示拿地。他从那地出来往亚述去，建造尼尼微、利河伯、迦拉，和尼尼微、迦拉中间的利鲜，这就是那大城。"（创10:8-12）

宁录建立了两座后来成为以色列最大敌人的城市：巴别（巴比伦帝国的首都）和尼尼微（亚述帝国的首都）。"他在耶和华面前是个英勇的猎户"——这句话在希伯来语中带有挑衅的意味，不是称赞。他是在上帝面前展示自己的强大——猎人追捕猎物，宁录"追捕"的是人的效忠和膜拜。他是第一个帝国建造者，第一个用权力和武力统治他人的人。巴别塔的故事（第十一章）就发生在他建立的示拿地。

含的后裔中还有迦南的子孙——赫人、耶布斯人、亚摩利人、革迦撒人、希未人等等（创10:15-18）。这些名字对后来读出埃及记和约书亚记的人来说非常熟悉——他们就是以色列人进入应许之地时要面对的居民。挪亚对迦南的咒诅在这里埋下了伏笔。

闪的后裔（21-31节）分布在中东和阿拉伯地区——以拦（今天的伊朗西南部）、亚述（今天的伊拉克北部）、亚法撒、路德、亚兰（今天的叙利亚——亚兰语后来成为耶稣时代的通用语言）。

在闪的后裔中，有一个名字极其重要：希伯（Eber）。"希伯来人"（Hebrews）这个名称就是从希伯来的。从希伯往下，经法勒到亚伯拉罕，这就是上帝拣选的救赎谱系。经文特意说闪是"希伯子孙之祖"（创10:21），提醒读者注意这条线——因为弥赛亚将从这条线中出来。

还有一个细节值得注意："法勒——那时人就分地居住"（创10:25，另译"因为那时天下人的口音言语都分开了"）。这暗示了第十一章巴别塔事件的时间——人类的分散就发生在法勒的时代。

弟兄姐妹，这份万国表的神学意义是深远的。

第一，全人类是一家人。所有民族都出自挪亚一家，无论肤色、语言、文化如何不同，我们都是一个家庭。使徒保罗在雅典的亚略巴古讲道时引用了这个真理："他从一本造出万族的人，住在全地上，并且预先定准他们的年限和所住的疆界。"（徒17:26）种族主义在圣经面前没有立足之地。上帝造了一个人类，不是多个人类。每一个人——不管来自哪个民族——都是按上帝的形象造的，都有同等的尊严和价值。

第二，上帝是万国的上帝。这份名单覆盖了古代世界已知的所有文明，从地中海到美索不达米亚到非洲。上帝不是某一个民族的部落神——祂是创造和掌管万国的主。"耶和华至高者将地业赐给列邦，将世人分开，就照以色列人的数目立定万民的疆界。"（申32:8）

第三，救赎的范围从一开始就是全球性的。上帝拣选闪的后裔不是为了偏爱一个民族，而是为了通过这个民族祝福万民。上帝后来呼召亚伯拉罕时说："地上的万族都要因你得福。"（创12:3）七十个民族散布全地——上帝的救赎计划要触及每一个。

这个全球性的画面在五旬节得到了荣耀的应验。当圣灵降临时，"从天下各国来"的犹太人和归入犹太教的人——帕提亚人、玛代人、以拦人、住在米所波大米亚的人……（徒2:5-11）——都听到使徒用他们自己的方言传讲福音。巴别塔的咒诅在五旬节被逆转了：语言曾经把人类分开，圣灵现在用福音把万民联合。

而在启示录中，使徒约翰看到了万国表的终极成全："此后，我观看，见有许多的人，没有人能数过来，是从各国、各族、各民、各方来的，站在宝座和羔羊面前，穿白衣，手拿棕树枝。"（启7:9）

第四，这份名单也揭示了罪的普世性。宁录的出现提醒我们，即使在洪水之后、在上帝重新赐福之后，人类的骄傲和野心仍然继续。从宁录到巴别塔到巴比伦帝国到亚述帝国——含的后裔中产生了一连串与上帝对抗的势力。但闪的后裔中也并非全是义人。罪的问题不是某一个民族的问题，是全人类的问题。保罗说"犹太人和希腊人都在罪恶之下，就如经上所记：没有义人，连一个也没有"（罗3:9-10）。万国需要的不是道德教育，而是一位救主。

第五，上帝掌管历史。经文反复说各民族"各随各的方言、宗族立国"——但这不是随机的自然过程，而是上帝主权的安排。申命记32:8说"耶和华至高者将地业赐给列邦"。每一个民族的兴衰、每一个帝国的起落，都在上帝的手中。即便是宁录那样悖逆上帝的人所建立的帝国，最终也要服务于上帝救赎的计划——巴比伦掳掠了犹大，但也成了但以理传扬上帝荣耀的舞台。

弟兄姐妹，创世记第十章的七十个民族，是这幅荣耀画面的起点。从三个家庭到七十个民族，从七十个民族到万民归向基督——上帝的计划何等宏大。

你的邻居，不管来自哪里——非洲、亚洲、欧洲、美洲——都在这份名单上。他们都是上帝所造、所爱、所要拯救的。"因为神差他的儿子降世，不是要定世人的罪，乃是要叫世人因他得救。"（约3:17）

上帝是万国的上帝。福音是给万民的福音。`,
  content_en: `Brothers and sisters, I know you see another genealogy chapter and want to skip ahead. But chapter 10 is different — it is called the "Table of Nations," the oldest ethnographic document in human history. The origin and distribution of all human civilization is condensed into these thirty-two verses.

"These are the generations of the sons of Noah, Shem, Ham, and Japheth. Sons were born to them after the flood." (Genesis 10:1)

All of humanity began repopulating from these three men. This chapter lists seventy nations — seventy being a number of completeness in Scripture (seven times ten). This doesn't mean only seventy nations existed, but uses a complete number to represent "all nations."

Let me introduce you to these three families:

Japheth's descendants (vv.2-5) spread to the north and west — Gomer (probably the Cimmerians, in today's Caucasus and Europe), Magog (the eschatological enemy of Ezekiel 38-39), Madai (the later Median Empire, today's northern Iran), Javan (Greece — "Ionia" is the Greek form of Javan), Tubal and Meshech (Asia Minor, today's Turkey). Scripture says they spread to "the coastland peoples" — the Mediterranean coastlands.

If you are a believer of European or West Asian heritage, your ancestors are here — you are Japheth's descendants. Remember Noah's blessing? "May God enlarge Japheth, and let him dwell in the tents of Shem." Your trusting today in Shem's descendant Jesus Christ is this blessing's fulfillment.

Ham's descendants (vv.6-20) spread to the south and east — Cush (today's Ethiopia and Sudan region), Mizraim (Egypt — in Hebrew, Egypt is called Mizraim), Put (today's Libya region), and Canaan (the later inhabitants of the Promised Land).

Among Ham's descendants, one figure is singled out: Nimrod.

"Cush fathered Nimrod; he was the first on earth to be a mighty man. He was a mighty hunter before the LORD. The beginning of his kingdom was Babel, Erech, Accad, and Calneh, in the land of Shinar. From that land he went into Assyria and built Nineveh, Rehoboth-Ir, Calah, and Resen between Nineveh and Calah; that is the great city." (Genesis 10:8-12)

Nimrod founded two cities that became Israel's greatest enemies: Babel (capital of the Babylonian Empire) and Nineveh (capital of the Assyrian Empire). "A mighty hunter before the LORD" — in Hebrew, this carries a confrontational nuance, not praise. He displayed his power before God. A hunter pursues prey; Nimrod pursued human allegiance and worship. He was the first empire builder, the first to rule others through power and force. The Tower of Babel story (chapter 11) occurs in the land of Shinar that he established.

Among Ham's descendants are also Canaan's children — the Hittites, Jebusites, Amorites, Girgashites, Hivites, and more (Genesis 10:15-18). These names are very familiar to later readers of Exodus and Joshua — they are the peoples Israel would face upon entering the Promised Land. Noah's curse on Canaan here foreshadows what was to come.

Shem's descendants (vv.21-31) spread across the Middle East and Arabia — Elam (today's southwestern Iran), Asshur (today's northern Iraq), Arpachshad, Lud, and Aram (today's Syria — Aramaic later became the common language of Jesus's time).

Among Shem's descendants, one name is critically important: Eber. The name "Hebrew" derives from Eber. From Eber through Peleg down to Abraham, this is God's chosen line of redemption. Scripture deliberately calls Shem "the father of all the children of Eber" (Genesis 10:21), directing readers' attention to this line — because the Messiah would come from it.

One more detail worth noting: "Peleg, for in his days the earth was divided" (Genesis 10:25). This alludes to the Tower of Babel event in chapter 11 — humanity's scattering occurred in Peleg's time.

Brothers and sisters, the Table of Nations' theological significance is profound.

First, all humanity is one family. All nations descend from Noah's family. Regardless of skin color, language, or culture, we are one family. The apostle Paul preached this truth at Athens's Areopagus: "He made from one man every nation of mankind to live on all the face of the earth, having determined allotted periods and the boundaries of their dwelling place." (Acts 17:26) Racism has no standing before Scripture. God made one humanity, not several. Every person — from every people group — is made in God's image, possessing equal dignity and worth.

Second, God is the God of all nations. This list covers every known civilization of the ancient world, from the Mediterranean to Mesopotamia to Africa. God is not some tribe's local deity — He is the Lord who created and governs all nations. "When the Most High gave to the nations their inheritance, when he divided all mankind, he fixed the borders of the peoples according to the number of the sons of Israel." (Deuteronomy 32:8)

Third, redemption's scope was global from the very beginning. God chose Shem's line not to favor one nation but to bless all nations through it. When God later called Abraham, He said: "In you all the families of the earth shall be blessed." (Genesis 12:3) Seventy nations scattered across the earth — God's redemptive plan would reach every one.

This global vision found glorious fulfillment at Pentecost. When the Spirit descended, devout Jews "from every nation under heaven" — Parthians, Medes, Elamites, residents of Mesopotamia... (Acts 2:5-11) — heard the apostles speaking the gospel in their own languages. Babel's curse was reversed at Pentecost: language once divided humanity; the Spirit now united all peoples through the gospel.

And in Revelation, the apostle John saw the Table of Nations' ultimate fulfillment: "After this I looked, and behold, a great multitude that no one could number, from every nation, from all tribes and peoples and languages, standing before the throne and before the Lamb, clothed in white robes, with palm branches in their hands." (Revelation 7:9)

Fourth, this genealogy reveals sin's universality. Nimrod's appearance reminds us that even after the flood, even after God's renewed blessing, human pride and ambition continued. From Nimrod to Babel to the Babylonian Empire to the Assyrian Empire — a succession of powers opposing God arose from Ham's line. But Shem's line was not entirely righteous either. Sin is not one nation's problem but all humanity's. Paul says "both Jews and Greeks are under sin, as it is written: None is righteous, no, not one" (Romans 3:9-10). All nations need not moral education but a Savior.

Fifth, God governs history. Scripture repeatedly says nations spread "each with his own language, by their clans" — but this was not random natural process but God's sovereign arrangement. Deuteronomy 32:8 says "When the Most High gave to the nations their inheritance." Every nation's rise and fall, every empire's ascent and decline, rests in God's hands. Even empires built by rebels like Nimrod ultimately served God's redemptive plan — Babylon exiled Judah yet also became the stage where Daniel proclaimed God's glory.

Brothers and sisters, Genesis 10's seventy nations are the starting point of that glorious vision. From three families to seventy nations, from seventy nations to all peoples turning to Christ — how vast is God's plan.

Your neighbor, wherever they come from — Africa, Asia, Europe, the Americas — is on this list. They are created by God, loved by God, and meant to be saved by God. "For God did not send his Son into the world to condemn the world, but in order that the world might be saved through him." (John 3:17)

God is the God of all nations. The gospel is a gospel for all peoples.`,
  historyContext_zh: `创世记第十章被称为"万国表"（Table of Nations），是人类历史上最古老的民族志文献。它列出了挪亚三个儿子的后裔所形成的七十个民族（七十在圣经中代表完全）。雅弗的后裔主要分布在地中海北岸和欧亚地区；含的后裔分布在非洲、迦南和美索不达米亚南部；闪的后裔分布在中东和阿拉伯地区。宁录是含的后裔中特别被提到的人物，他建立了巴别（巴比伦）和尼尼微（亚述首都），这两座城市后来成为以色列最大的敌人。`,
  historyContext_en: `Genesis 10, called the "Table of Nations," is the oldest ethnographic document in human history. It lists seventy nations descended from Noah's three sons (seventy symbolizing completeness in Scripture). Japheth's descendants spread across the northern Mediterranean and Eurasia; Ham's across Africa, Canaan, and southern Mesopotamia; Shem's across the Middle East and Arabia. Nimrod, among Ham's descendants, is specially noted for founding Babel (Babylon) and Nineveh (Assyrian capital) — cities that became Israel's greatest enemies.`,
  structure_zh: `第十章按挪亚的三个儿子分为三个部分：（1）2-5节：雅弗的后裔——歌篾、玛各、玛代、雅完、土巴、米设、提拉等，分布在"沿海的国民"（地中海沿岸）；（2）6-20节：含的后裔——古实、麦西（埃及）、弗、迦南等，特别提到宁录建立巴别和尼尼微，以及迦南的后裔（赫人、耶布斯人、亚摩利人等）；（3）21-31节：闪的后裔——以拦、亚述、亚法撒、路德、亚兰等，特别提到希伯（"希伯来人"的由来），谱系延续到亚伯拉罕。最后总结：这些民族"各随各的方言、宗族立国"（创10:31）。`,
  structure_en: `Chapter 10 divides into three sections by Noah's sons: (1) vv.2-5: Japheth's descendants — Gomer, Magog, Madai, Javan, Tubal, Meshech, Tiras, spreading to "coastland peoples" (Mediterranean); (2) vv.6-20: Ham's descendants — Cush, Mizraim (Egypt), Put, Canaan, notably Nimrod founding Babel and Nineveh, and Canaan's descendants (Hittites, Jebusites, Amorites, etc.); (3) vv.21-31: Shem's descendants — Elam, Asshur, Arpachshad, Lud, Aram, notably Eber (origin of "Hebrew"), lineage continuing to Abraham. Summary: these nations spread "each with his own language, by their clans, in their nations" (10:31).`,
  theology_zh: `第十章的神学意义：（1）人类的合一性：所有民族都出自挪亚一家，全人类是一个家庭。这是反对种族主义的圣经根基——"他从一本造出万族的人"（徒17:26）；（2）上帝的主权：万国的分布和疆界都在上帝的计划之中（申32:8）；（3）救赎的范围是全球性的：七十个民族代表"全地"，上帝的救赎计划从一开始就是面向万民的；（4）罪的普世性：宁录的出现（"英勇的猎户"，建立对抗上帝的城市）预示了人类堕落的普遍性——即使在洪水之后，人的骄傲和反叛仍然继续；（5）闪的谱系的重要性：救赎的线索从闪到希伯到亚伯拉罕，上帝在万民中拣选了一条特殊的谱系来成就祂的救赎计划。`,
  theology_en: `Chapter 10's theological significance: (1) Unity of humanity: all nations descend from Noah's family; all humanity is one family — the biblical basis against racism: "He made from one man every nation" (Acts 17:26); (2) God's sovereignty: nations' distribution and boundaries are within God's plan (Deut 32:8); (3) Global scope of redemption: seventy nations represent "all the earth," God's redemptive plan was global from the start; (4) Universality of sin: Nimrod's emergence ("mighty hunter," building cities opposing God) foreshadows humanity's universal fallenness — even after the flood, human pride and rebellion continue; (5) Importance of Shem's lineage: the redemption thread runs from Shem to Eber to Abraham; God chose a special lineage among all peoples to accomplish His redemptive plan.`,
  christShadow_zh: `万国表的福音意义在五旬节得到了彰显。当圣灵降临时，"从天下各国来"的人都听到了使徒用他们自己的语言传讲福音（徒2:5-11）——这是巴别塔语言混乱的逆转。耶稣升天前的大使命说"使万民作我的门徒"（太28:19），这个"万民"（ethne）回应的正是创世记第十章的万国。启示录的终极画面——"各国、各族、各民、各方"（启7:9）——是万国表的终极成全。从闪的后裔中出来的弥赛亚，最终要成为万国的救主。上帝从一开始就计划拯救全人类，不是只拯救一个民族。`,
  christShadow_en: `The Table of Nations' gospel significance was manifested at Pentecost. When the Spirit descended, people "from every nation under heaven" heard the apostles speaking in their own languages (Acts 2:5-11) — a reversal of Babel's confusion. Jesus's Great Commission says "make disciples of all nations" (Matt 28:19); this "nations" (ethne) echoes Genesis 10's peoples. Revelation's ultimate vision — "from every nation, from all tribes and peoples and languages" (Rev 7:9) — is the Table of Nations' ultimate fulfillment. The Messiah from Shem's line would become Savior of all nations. God planned from the beginning to save all humanity, not just one people.`,});
readings.push({
  book: '创世记', bookEn: 'Genesis', chapter: 11,
  publishDate: '2026-03-02',
  title: '巴别塔', titleEn: 'The Tower of Babel',
  author: '摩西', authorEn: 'Moses',
  scripture: '创世记 11:1 / Genesis 11:1',
  content_zh: '', content_en: '',
  historyContext_zh: '', historyContext_en: '',
  structure_zh: '', structure_en: '',
  theology_zh: '', theology_en: '',
  christShadow_zh: '', christShadow_en: '',
});
readings.push({
  book: '创世记', bookEn: 'Genesis', chapter: 12,
  publishDate: '2026-03-03',
  title: '蒙召', titleEn: 'The Call of Abram',
  author: '摩西', authorEn: 'Moses',
  scripture: '创世记 12:1 / Genesis 12:1',
  content_zh: '', content_en: '',
  historyContext_zh: '', historyContext_en: '',
  structure_zh: '', structure_en: '',
  theology_zh: '', theology_en: '',
  christShadow_zh: '', christShadow_en: '',
});
readings.push({
  book: '创世记', bookEn: 'Genesis', chapter: 13,
  publishDate: '2026-03-04',
  title: '分离', titleEn: 'Abram and Lot Separate',
  author: '摩西', authorEn: 'Moses',
  scripture: '创世记 13:1 / Genesis 13:1',
  content_zh: '', content_en: '',
  historyContext_zh: '', historyContext_en: '',
  structure_zh: '', structure_en: '',
  theology_zh: '', theology_en: '',
  christShadow_zh: '', christShadow_en: '',
});
readings.push({
  book: '创世记', bookEn: 'Genesis', chapter: 14,
  publishDate: '2026-03-05',
  title: '争战', titleEn: 'Abram Rescues Lot',
  author: '摩西', authorEn: 'Moses',
  scripture: '创世记 14:1 / Genesis 14:1',
  content_zh: '', content_en: '',
  historyContext_zh: '', historyContext_en: '',
  structure_zh: '', structure_en: '',
  theology_zh: '', theology_en: '',
  christShadow_zh: '', christShadow_en: '',
});
readings.push({
  book: '创世记', bookEn: 'Genesis', chapter: 15,
  publishDate: '2026-03-06',
  title: '立约', titleEn: 'The Covenant of the Stars',
  author: '摩西', authorEn: 'Moses',
  scripture: '创世记 15:1 / Genesis 15:1',
  content_zh: '', content_en: '',
  historyContext_zh: '', historyContext_en: '',
  structure_zh: '', structure_en: '',
  theology_zh: '', theology_en: '',
  christShadow_zh: '', christShadow_en: '',
});
readings.push({
  book: '创世记', bookEn: 'Genesis', chapter: 16,
  publishDate: '2026-03-09',
  title: '夏甲', titleEn: 'Hagar and Ishmael',
  author: '摩西', authorEn: 'Moses',
  scripture: '创世记 16:1 / Genesis 16:1',
  content_zh: '', content_en: '',
  historyContext_zh: '', historyContext_en: '',
  structure_zh: '', structure_en: '',
  theology_zh: '', theology_en: '',
  christShadow_zh: '', christShadow_en: '',
});
readings.push({
  book: '创世记', bookEn: 'Genesis', chapter: 17,
  publishDate: '2026-03-10',
  title: '割礼之约', titleEn: 'The Covenant of Circumcision',
  author: '摩西', authorEn: 'Moses',
  scripture: '创世记 17:1 / Genesis 17:1',
  content_zh: '', content_en: '',
  historyContext_zh: '', historyContext_en: '',
  structure_zh: '', structure_en: '',
  theology_zh: '', theology_en: '',
  christShadow_zh: '', christShadow_en: '',
});
readings.push({
  book: '创世记', bookEn: 'Genesis', chapter: 18,
  publishDate: '2026-03-11',
  title: '三位来客', titleEn: 'Three Visitors',
  author: '摩西', authorEn: 'Moses',
  scripture: '创世记 18:1 / Genesis 18:1',
  content_zh: '', content_en: '',
  historyContext_zh: '', historyContext_en: '',
  structure_zh: '', structure_en: '',
  theology_zh: '', theology_en: '',
  christShadow_zh: '', christShadow_en: '',
});
readings.push({
  book: '创世记', bookEn: 'Genesis', chapter: 19,
  publishDate: '2026-03-12',
  title: '所多玛', titleEn: 'The Destruction of Sodom',
  author: '摩西', authorEn: 'Moses',
  scripture: '创世记 19:1 / Genesis 19:1',
  content_zh: '', content_en: '',
  historyContext_zh: '', historyContext_en: '',
  structure_zh: '', structure_en: '',
  theology_zh: '', theology_en: '',
  christShadow_zh: '', christShadow_en: '',
});
readings.push({
  book: '创世记', bookEn: 'Genesis', chapter: 20,
  publishDate: '2026-03-13',
  title: '亚伯拉罕与亚比米勒', titleEn: 'Abraham and Abimelech',
  author: '摩西', authorEn: 'Moses',
  scripture: '创世记 20:1 / Genesis 20:1',
  content_zh: '', content_en: '',
  historyContext_zh: '', historyContext_en: '',
  structure_zh: '', structure_en: '',
  theology_zh: '', theology_en: '',
  christShadow_zh: '', christShadow_en: '',
});
readings.push({
  book: '创世记', bookEn: 'Genesis', chapter: 21,
  publishDate: '2026-03-16',
  title: '以撒出生', titleEn: 'The Birth of Isaac',
  author: '摩西', authorEn: 'Moses',
  scripture: '创世记 21:1 / Genesis 21:1',
  content_zh: '', content_en: '',
  historyContext_zh: '', historyContext_en: '',
  structure_zh: '', structure_en: '',
  theology_zh: '', theology_en: '',
  christShadow_zh: '', christShadow_en: '',
});
readings.push({
  book: '创世记', bookEn: 'Genesis', chapter: 22,
  publishDate: '2026-03-17',
  title: '献以撒', titleEn: 'The Binding of Isaac',
  author: '摩西', authorEn: 'Moses',
  scripture: '创世记 22:1 / Genesis 22:1',
  content_zh: '', content_en: '',
  historyContext_zh: '', historyContext_en: '',
  structure_zh: '', structure_en: '',
  theology_zh: '', theology_en: '',
  christShadow_zh: '', christShadow_en: '',
});
readings.push({
  book: '创世记', bookEn: 'Genesis', chapter: 23,
  publishDate: '2026-03-18',
  title: '撒拉之死', titleEn: 'The Death of Sarah',
  author: '摩西', authorEn: 'Moses',
  scripture: '创世记 23:1 / Genesis 23:1',
  content_zh: '', content_en: '',
  historyContext_zh: '', historyContext_en: '',
  structure_zh: '', structure_en: '',
  theology_zh: '', theology_en: '',
  christShadow_zh: '', christShadow_en: '',
});
readings.push({
  book: '创世记', bookEn: 'Genesis', chapter: 24,
  publishDate: '2026-03-19',
  title: '以撒的新娘', titleEn: 'A Bride for Isaac',
  author: '摩西', authorEn: 'Moses',
  scripture: '创世记 24:1 / Genesis 24:1',
  content_zh: '', content_en: '',
  historyContext_zh: '', historyContext_en: '',
  structure_zh: '', structure_en: '',
  theology_zh: '', theology_en: '',
  christShadow_zh: '', christShadow_en: '',
});
readings.push({
  book: '创世记', bookEn: 'Genesis', chapter: 25,
  publishDate: '2026-03-20',
  title: '以扫与雅各', titleEn: 'Esau and Jacob',
  author: '摩西', authorEn: 'Moses',
  scripture: '创世记 25:1 / Genesis 25:1',
  content_zh: '', content_en: '',
  historyContext_zh: '', historyContext_en: '',
  structure_zh: '', structure_en: '',
  theology_zh: '', theology_en: '',
  christShadow_zh: '', christShadow_en: '',
});
readings.push({
  book: '创世记', bookEn: 'Genesis', chapter: 26,
  publishDate: '2026-03-23',
  title: '以撒在基拉耳', titleEn: 'Isaac in Gerar',
  author: '摩西', authorEn: 'Moses',
  scripture: '创世记 26:1 / Genesis 26:1',
  content_zh: '', content_en: '',
  historyContext_zh: '', historyContext_en: '',
  structure_zh: '', structure_en: '',
  theology_zh: '', theology_en: '',
  christShadow_zh: '', christShadow_en: '',
});
readings.push({
  book: '创世记', bookEn: 'Genesis', chapter: 27,
  publishDate: '2026-03-24',
  title: '骗取祝福', titleEn: 'The Stolen Blessing',
  author: '摩西', authorEn: 'Moses',
  scripture: '创世记 27:1 / Genesis 27:1',
  content_zh: '', content_en: '',
  historyContext_zh: '', historyContext_en: '',
  structure_zh: '', structure_en: '',
  theology_zh: '', theology_en: '',
  christShadow_zh: '', christShadow_en: '',
});
readings.push({
  book: '创世记', bookEn: 'Genesis', chapter: 28,
  publishDate: '2026-03-25',
  title: '天梯', titleEn: 'Jacob\'s Ladder',
  author: '摩西', authorEn: 'Moses',
  scripture: '创世记 28:1 / Genesis 28:1',
  content_zh: '', content_en: '',
  historyContext_zh: '', historyContext_en: '',
  structure_zh: '', structure_en: '',
  theology_zh: '', theology_en: '',
  christShadow_zh: '', christShadow_en: '',
});
readings.push({
  book: '创世记', bookEn: 'Genesis', chapter: 29,
  publishDate: '2026-03-26',
  title: '拉结与利亚', titleEn: 'Rachel and Leah',
  author: '摩西', authorEn: 'Moses',
  scripture: '创世记 29:1 / Genesis 29:1',
  content_zh: '', content_en: '',
  historyContext_zh: '', historyContext_en: '',
  structure_zh: '', structure_en: '',
  theology_zh: '', theology_en: '',
  christShadow_zh: '', christShadow_en: '',
});
readings.push({
  book: '创世记', bookEn: 'Genesis', chapter: 30,
  publishDate: '2026-03-27',
  title: '儿女与羊群', titleEn: 'Children and Flocks',
  author: '摩西', authorEn: 'Moses',
  scripture: '创世记 30:1 / Genesis 30:1',
  content_zh: '', content_en: '',
  historyContext_zh: '', historyContext_en: '',
  structure_zh: '', structure_en: '',
  theology_zh: '', theology_en: '',
  christShadow_zh: '', christShadow_en: '',
});
readings.push({
  book: '创世记', bookEn: 'Genesis', chapter: 31,
  publishDate: '2026-03-30',
  title: '离开拉班', titleEn: 'Jacob Flees from Laban',
  author: '摩西', authorEn: 'Moses',
  scripture: '创世记 31:1 / Genesis 31:1',
  content_zh: '', content_en: '',
  historyContext_zh: '', historyContext_en: '',
  structure_zh: '', structure_en: '',
  theology_zh: '', theology_en: '',
  christShadow_zh: '', christShadow_en: '',
});
readings.push({
  book: '创世记', bookEn: 'Genesis', chapter: 32,
  publishDate: '2026-03-31',
  title: '摔跤', titleEn: 'Wrestling with God',
  author: '摩西', authorEn: 'Moses',
  scripture: '创世记 32:1 / Genesis 32:1',
  content_zh: '', content_en: '',
  historyContext_zh: '', historyContext_en: '',
  structure_zh: '', structure_en: '',
  theology_zh: '', theology_en: '',
  christShadow_zh: '', christShadow_en: '',
});
readings.push({
  book: '创世记', bookEn: 'Genesis', chapter: 33,
  publishDate: '2026-04-01',
  title: '兄弟重逢', titleEn: 'Jacob Meets Esau',
  author: '摩西', authorEn: 'Moses',
  scripture: '创世记 33:1 / Genesis 33:1',
  content_zh: '', content_en: '',
  historyContext_zh: '', historyContext_en: '',
  structure_zh: '', structure_en: '',
  theology_zh: '', theology_en: '',
  christShadow_zh: '', christShadow_en: '',
});
readings.push({
  book: '创世记', bookEn: 'Genesis', chapter: 34,
  publishDate: '2026-04-02',
  title: '底拿', titleEn: 'The Outrage at Shechem',
  author: '摩西', authorEn: 'Moses',
  scripture: '创世记 34:1 / Genesis 34:1',
  content_zh: '', content_en: '',
  historyContext_zh: '', historyContext_en: '',
  structure_zh: '', structure_en: '',
  theology_zh: '', theology_en: '',
  christShadow_zh: '', christShadow_en: '',
});
readings.push({
  book: '创世记', bookEn: 'Genesis', chapter: 35,
  publishDate: '2026-04-03',
  title: '回到伯特利', titleEn: 'Return to Bethel',
  author: '摩西', authorEn: 'Moses',
  scripture: '创世记 35:1 / Genesis 35:1',
  content_zh: '', content_en: '',
  historyContext_zh: '', historyContext_en: '',
  structure_zh: '', structure_en: '',
  theology_zh: '', theology_en: '',
  christShadow_zh: '', christShadow_en: '',
});
readings.push({
  book: '创世记', bookEn: 'Genesis', chapter: 36,
  publishDate: '2026-04-06',
  title: '以扫的后代', titleEn: 'Esau\'s Descendants',
  author: '摩西', authorEn: 'Moses',
  scripture: '创世记 36:1 / Genesis 36:1',
  content_zh: '', content_en: '',
  historyContext_zh: '', historyContext_en: '',
  structure_zh: '', structure_en: '',
  theology_zh: '', theology_en: '',
  christShadow_zh: '', christShadow_en: '',
});
readings.push({
  book: '创世记', bookEn: 'Genesis', chapter: 37,
  publishDate: '2026-04-07',
  title: '约瑟的梦', titleEn: 'Joseph\'s Dreams',
  author: '摩西', authorEn: 'Moses',
  scripture: '创世记 37:1 / Genesis 37:1',
  content_zh: '', content_en: '',
  historyContext_zh: '', historyContext_en: '',
  structure_zh: '', structure_en: '',
  theology_zh: '', theology_en: '',
  christShadow_zh: '', christShadow_en: '',
});
readings.push({
  book: '创世记', bookEn: 'Genesis', chapter: 38,
  publishDate: '2026-04-08',
  title: '犹大与他玛', titleEn: 'Judah and Tamar',
  author: '摩西', authorEn: 'Moses',
  scripture: '创世记 38:1 / Genesis 38:1',
  content_zh: '', content_en: '',
  historyContext_zh: '', historyContext_en: '',
  structure_zh: '', structure_en: '',
  theology_zh: '', theology_en: '',
  christShadow_zh: '', christShadow_en: '',
});
readings.push({
  book: '创世记', bookEn: 'Genesis', chapter: 39,
  publishDate: '2026-04-09',
  title: '在波提乏家', titleEn: 'Joseph in Potiphar\'s House',
  author: '摩西', authorEn: 'Moses',
  scripture: '创世记 39:1 / Genesis 39:1',
  content_zh: '', content_en: '',
  historyContext_zh: '', historyContext_en: '',
  structure_zh: '', structure_en: '',
  theology_zh: '', theology_en: '',
  christShadow_zh: '', christShadow_en: '',
});
readings.push({
  book: '创世记', bookEn: 'Genesis', chapter: 40,
  publishDate: '2026-04-10',
  title: '狱中解梦', titleEn: 'The Cupbearer and the Baker',
  author: '摩西', authorEn: 'Moses',
  scripture: '创世记 40:1 / Genesis 40:1',
  content_zh: '', content_en: '',
  historyContext_zh: '', historyContext_en: '',
  structure_zh: '', structure_en: '',
  theology_zh: '', theology_en: '',
  christShadow_zh: '', christShadow_en: '',
});
readings.push({
  book: '创世记', bookEn: 'Genesis', chapter: 41,
  publishDate: '2026-04-13',
  title: '法老的梦', titleEn: 'Pharaoh\'s Dreams',
  author: '摩西', authorEn: 'Moses',
  scripture: '创世记 41:1 / Genesis 41:1',
  content_zh: '', content_en: '',
  historyContext_zh: '', historyContext_en: '',
  structure_zh: '', structure_en: '',
  theology_zh: '', theology_en: '',
  christShadow_zh: '', christShadow_en: '',
});
readings.push({
  book: '创世记', bookEn: 'Genesis', chapter: 42,
  publishDate: '2026-04-14',
  title: '兄弟来到', titleEn: 'Joseph\'s Brothers in Egypt',
  author: '摩西', authorEn: 'Moses',
  scripture: '创世记 42:1 / Genesis 42:1',
  content_zh: '', content_en: '',
  historyContext_zh: '', historyContext_en: '',
  structure_zh: '', structure_en: '',
  theology_zh: '', theology_en: '',
  christShadow_zh: '', christShadow_en: '',
});
readings.push({
  book: '创世记', bookEn: 'Genesis', chapter: 43,
  publishDate: '2026-04-15',
  title: '再下埃及', titleEn: 'The Second Journey',
  author: '摩西', authorEn: 'Moses',
  scripture: '创世记 43:1 / Genesis 43:1',
  content_zh: '', content_en: '',
  historyContext_zh: '', historyContext_en: '',
  structure_zh: '', structure_en: '',
  theology_zh: '', theology_en: '',
  christShadow_zh: '', christShadow_en: '',
});
readings.push({
  book: '创世记', bookEn: 'Genesis', chapter: 44,
  publishDate: '2026-04-16',
  title: '银杯', titleEn: 'The Silver Cup',
  author: '摩西', authorEn: 'Moses',
  scripture: '创世记 44:1 / Genesis 44:1',
  content_zh: '', content_en: '',
  historyContext_zh: '', historyContext_en: '',
  structure_zh: '', structure_en: '',
  theology_zh: '', theology_en: '',
  christShadow_zh: '', christShadow_en: '',
});
readings.push({
  book: '创世记', bookEn: 'Genesis', chapter: 45,
  publishDate: '2026-04-17',
  title: '相认', titleEn: 'Joseph Reveals Himself',
  author: '摩西', authorEn: 'Moses',
  scripture: '创世记 45:1 / Genesis 45:1',
  content_zh: '', content_en: '',
  historyContext_zh: '', historyContext_en: '',
  structure_zh: '', structure_en: '',
  theology_zh: '', theology_en: '',
  christShadow_zh: '', christShadow_en: '',
});
readings.push({
  book: '创世记', bookEn: 'Genesis', chapter: 46,
  publishDate: '2026-04-20',
  title: '下到埃及', titleEn: 'Jacob Goes to Egypt',
  author: '摩西', authorEn: 'Moses',
  scripture: '创世记 46:1 / Genesis 46:1',
  content_zh: '', content_en: '',
  historyContext_zh: '', historyContext_en: '',
  structure_zh: '', structure_en: '',
  theology_zh: '', theology_en: '',
  christShadow_zh: '', christShadow_en: '',
});
readings.push({
  book: '创世记', bookEn: 'Genesis', chapter: 47,
  publishDate: '2026-04-21',
  title: '在歌珊地', titleEn: 'In the Land of Goshen',
  author: '摩西', authorEn: 'Moses',
  scripture: '创世记 47:1 / Genesis 47:1',
  content_zh: '', content_en: '',
  historyContext_zh: '', historyContext_en: '',
  structure_zh: '', structure_en: '',
  theology_zh: '', theology_en: '',
  christShadow_zh: '', christShadow_en: '',
});
readings.push({
  book: '创世记', bookEn: 'Genesis', chapter: 48,
  publishDate: '2026-04-22',
  title: '祝福以法莲', titleEn: 'Blessing Ephraim and Manasseh',
  author: '摩西', authorEn: 'Moses',
  scripture: '创世记 48:1 / Genesis 48:1',
  content_zh: '', content_en: '',
  historyContext_zh: '', historyContext_en: '',
  structure_zh: '', structure_en: '',
  theology_zh: '', theology_en: '',
  christShadow_zh: '', christShadow_en: '',
});
readings.push({
  book: '创世记', bookEn: 'Genesis', chapter: 49,
  publishDate: '2026-04-23',
  title: '雅各的遗言', titleEn: 'Jacob\'s Last Words',
  author: '摩西', authorEn: 'Moses',
  scripture: '创世记 49:1 / Genesis 49:1',
  content_zh: '', content_en: '',
  historyContext_zh: '', historyContext_en: '',
  structure_zh: '', structure_en: '',
  theology_zh: '', theology_en: '',
  christShadow_zh: '', christShadow_en: '',
});
readings.push({
  book: '创世记', bookEn: 'Genesis', chapter: 50,
  publishDate: '2026-04-24',
  title: '约瑟之死', titleEn: 'The Death of Joseph',
  author: '摩西', authorEn: 'Moses',
  scripture: '创世记 50:1 / Genesis 50:1',
  content_zh: '', content_en: '',
  historyContext_zh: '', historyContext_en: '',
  structure_zh: '', structure_en: '',
  theology_zh: '', theology_en: '',
  christShadow_zh: '', christShadow_en: '',
});
