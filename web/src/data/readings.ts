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
  scripture: '创世记 11:1-9 / Genesis 11:1-9',
  content_zh: `弟兄姐妹，第十一章是一扇门。

进门之前，你看到的是洪水之后的世界——人类重新繁衍，遍布大地。进门之后，你将看到亚伯拉罕，神救赎计划的新起点。但在这两者之间，有一段插曲，叫做巴别。

那时"天下人的口音、言语都是一样"。人们聚集在示拿地，说："来罢！我们要建造一座城和一座塔，塔顶通天，为要传扬我们的名，免得我们分散在全地上。"

你听出来了吗？这里有三个"我们"，有一个"塔顶通天"，但整段话里，**没有神**。

这就是罪最典型的面目——不是恶贯满盈，而是把神排在括号外面。

还有一句话值得留意："免得我们分散在全地上。"这些人害怕分散。但你回头看第九章，神在洪水之后明明吩咐挪亚和他的儿子们："你们要生养众多，遍满了地。"（创世记9:1）神的心意是让人遍满全地，他们却说"免得我们分散"——他们在抗拒神的命令，用城墙和高塔把自己聚在一起，靠集体的力量建造安全感。

这让你想到什么？人总是害怕分散，害怕孤独，害怕没有归属。所以我们建造各种"巴别塔"——事业、财富、圈子、名声——来给自己一个身份，一个安全感。但这些塔，没有一个能真正通天。

我想带你仔细看这句话："为要传扬我们的名。"

这让我想起神呼召亚伯拉罕时说的话——就在下一章：**"我必使你的名为大。"** 人在巴别要自己建塔来扬名，神在亚伯拉罕那里白白赐名。这是两种生命之道的对比：一种是抓取，一种是领受；一种是自力，一种是恩典。

你注意那座塔的设计目标："塔顶通天。"

古代的人相信神住在高山之上，所以他们建造人工山——叫做"金字形神塔"（ziggurat）。这不是要爬到天上去碰神的脸，而是要**在地上建造一个神可以下来居住的房子**，同时也是彰显这座城市权力和荣耀的地标。

换句话说，他们要**驯化神，把神变成自己城市的守护神**。

这是人类历史上一个反复出现的冲动——不是要消灭神，而是要**利用神，把神变成自己目的的工具**。今天许多人拜神，不也是这个逻辑吗？我把神请进我的生活，我的生意会更好、我的孩子会更顺、我的日子会更安稳——神是我的护身符，神是我的工具。

但真正的神，不会住在人手所造的庙里，不会被人当工具使。

"诸天述说神的荣耀，穹苍传扬他的手段。"（诗篇19:1）天已经在述说神的荣耀了，你还需要造一座塔来"通天"吗？不是天太远，是人的心太硬，不肯谦卑下来听神已经在说的话。

示拿平原上的那群人，他们的问题不是缺乏能力——他们的砖烧得很好，他们的组织很高效，他们的意志很统一。他们的问题是方向错了。能力越大，方向错了，离神越远。

这让我想起以色列人后来在旷野造金牛犊的事。亚伦用金子铸了一个牛犊，百姓说："这是领你出埃及地的神。"（出埃及记32:4）他们不是不信神，他们是要一个自己能看见、能控制、能理解的神。巴别塔是同样的冲动——人要一个合自己尺寸的神。

然后你看神的反应，原文极有意思。人说"来罢，我们建造"；神说"来罢，我们下去"。人说"塔顶通天"；圣经说"耶和华降临，要看看世人所建造的城和塔"。

你看见那个反差吗？**人以为自己建了一座通天塔，神却要俯身"降临"才能看见它。**

然后神变乱了他们的口音，把他们分散在全地上。城就停工了。

这是惩罚，但这也是怜悯。

如果神任由人这样做下去，后果将会是什么？人类集体的骄傲、集体的自力更生、集体把神排除在外——历史一再证明，这条路通向毁灭。神打断这个工程，是在**阻止一场更大的灾难**。

你想一想，洪水之前的世界是什么样子的？"耶和华见人在地上罪恶很大，终日所思想的尽都是恶。"（创世记6:5）那时也是全人类联合在一起——联合在罪中。神用洪水审判了那个世界。现在洪水之后，人类又一次联合起来，又一次把神排除在外。如果不打断，历史将重演。

变乱语言，是神把人类的骄傲打碎成碎片，免得他们再一次走上毁灭的老路。分散，是保护。

而且你注意，神变乱语言之后，紧接着就是闪的后裔谱系（第10-32节）。在万族分散的名单中，圣经特意追踪了一条血脉——从闪到亚法撒，从亚法撒到沙拉，一路到他拉，到亚伯兰。在全人类被打散的混乱中，神的眼睛盯着一个人、一个家族、一条线索。他在预备。巴别不是结局，巴别是过渡——从全人类的失败，过渡到一个人的蒙召。

"巴别"这个名字，在希伯来文里意思是"变乱"。那里原来叫"巴比伦"，意思是"神的门"——多么讽刺。人要建神的门，结果建出了变乱。

但故事还没完。

你翻到使徒行传第二章，五旬节，圣灵降临。那里有一件奇事：门徒开口说话，各地来的人都用自己的方言听到了。帕提亚人、玛代人、以拦人、美索不达米亚人……一一列举，好像是在刻意还原巴别散去的名单。

**五旬节是巴别的反转。** 巴别是语言变乱、人心分散；五旬节是语言被圣灵统一、人心被福音聚拢。建造巴别塔的是人的骄傲；建造神教会的，是圣灵的作为。

人用砖，神用基督的身体；人建为自己扬名，神建为神的荣耀；人的工程土崩瓦解，神的教会永不败坏。

弟兄姐妹，你今天在建造什么？

你是在建造自己的巴别塔，还是在参与神正在建造的教会？你是在"传扬自己的名"，还是在传扬基督的名？你用来建造的材料，是砖和石漆——属世的智慧、人的努力、世界的标准——还是基督的话语和圣灵的引导？

巴别的教训很简单：**离了神，人建造的一切都会变乱。** 婚姻会变乱，家庭会变乱，教会会变乱，社会会变乱。不是因为人不够努力，而是因为地基错了。

但五旬节的应许也很清楚：**当圣灵来的时候，一切被巴别打碎的，都能被重新连接。** 语言的隔阂可以被超越，文化的差异可以被包容，人心的分散可以被聚拢——因为福音的大能胜过罪的咒诅。

"我要把我的教会建造在这磐石上，阴间的权柄不能胜过他。"（马太福音16:18）

巴别的工程停了。神的建造，永不停工。`,
  content_en: `Brothers and sisters, chapter eleven is a doorway.

Before this door, you see the world after the flood — humanity multiplying and spreading across the earth. Beyond this door, you will meet Abraham, the new starting point of God's redemptive plan. But between these two stands an interlude called Babel.

At that time, "the whole earth had one language and the same words." The people gathered on the plain of Shinar and said: "Come, let us build ourselves a city and a tower with its top in the heavens, and let us make a name for ourselves, lest we be dispersed over the face of the whole earth."

Do you hear it? Three times "let us," one "top in the heavens" — and through the whole speech, **no God**.

This is the most typical face of sin — not outrageous evil, but simply placing God in parentheses.

There is another phrase worth pausing on: "lest we be dispersed over the face of the whole earth." These people feared scattering. But look back at chapter nine — after the flood, God clearly commanded Noah and his sons: "Be fruitful and multiply and fill the earth." (Genesis 9:1) God's intention was for humanity to spread. Yet they said, "lest we be scattered" — actively resisting God's command, building security through collective human effort.

Does this sound familiar? People have always feared scattering, feared loneliness, feared not belonging. So we build our own towers — careers, wealth, social circles, reputation — to give ourselves an identity and a sense of security. But none of these towers can truly reach heaven.

Look carefully at those words: "let us make a name for ourselves."

This immediately reminds me of what God says when he calls Abraham — in the very next chapter: **"I will make your name great."** At Babel, humanity scrambles to build a tower to make a name for themselves; with Abraham, God freely gives a great name as a gift. Two ways of life stand in contrast: one grasps, one receives; one trusts in self, one trusts in grace.

Notice the tower's design goal: "its top in the heavens."

Ancient peoples believed the gods dwelt on high mountains, so they built artificial mountains — what archaeologists call "ziggurats." This was not about literally climbing up to touch God's face. It was about **building a house on earth where the gods could descend and dwell** — and simultaneously, a landmark displaying the city's power and glory.

In other words, they wanted to **domesticate God, to turn God into their city's patron deity**.

This is an impulse that recurs throughout human history — not to eliminate God, but to **use God, to turn God into a tool for human purposes**. Is this not how many people worship today? I invite God into my life so my business will prosper, my children will succeed, my days will be secure — God as talisman, God as utility.

But the true God will not dwell in a house made by human hands, and will not be anyone's tool.

"The heavens declare the glory of God, and the sky above proclaims his handiwork." (Psalm 19:1) The heavens are already proclaiming God's glory. The problem was never that heaven was too far — it was that human hearts were too hardened to humble themselves and hear what God was already saying.

The people on the plain of Shinar lacked nothing in ability — their bricks were well-fired, their organization efficient, their resolve united. The problem was direction. The greater the capability, the further from God you travel when the direction is wrong.

This reminds me of the golden calf Israel made in the wilderness. Aaron cast a calf of gold, and the people said: "These are your gods, O Israel, who brought you up out of the land of Egypt!" (Exodus 32:4) They had not stopped believing in God — they wanted a god they could see, control, and understand. The Tower of Babel springs from the same impulse: a god fitted to human dimensions.

Then see God's response. The original text is striking. The people say "Come, let us build"; God says "Come, let us go down." The people say "top in the heavens"; Scripture says "the LORD came down to see the city and the tower."

Do you see the contrast? **The people thought they had built a tower reaching heaven, yet God had to "come down" just to see it.**

Then God confused their languages and scattered them across the earth. The city stopped.

This is judgment — but it is also mercy.

If God had let them continue, where would it have led? Collective human pride, collective self-sufficiency, collective exclusion of God — history has shown repeatedly that this road leads to destruction. God interrupting the project was **preventing a far greater catastrophe**.

Think about what the world looked like before the flood: "The LORD saw that the wickedness of man was great in the earth, and that every intention of the thoughts of his heart was only evil continually." (Genesis 6:5) In that world too, all of humanity was united — united in sin. God judged that world with the flood. Now, after the flood, humanity is once again uniting, once again excluding God. Without interruption, history would repeat itself.

Confusing the languages was God shattering humanity's pride into fragments, preventing them from once again walking the road toward destruction. Scattering was protection.

And notice what comes immediately after God confuses the languages: the genealogy of Shem (verses 10–32). In the long list of scattered nations, Scripture deliberately traces a single bloodline — from Shem to Arphaxad, from Arphaxad to Shelah, all the way down to Terah, to Abram. In the chaos of a world broken apart, God's eyes were fixed on one man, one family, one thread. He was preparing. Babel was not the end — it was a passage: from the failure of all humanity, to the calling of one man.

"Babel" in Hebrew sounds like the word for "confusion." The city was originally called "Babylon," meaning "gate of God" — what bitter irony. People tried to build the gate of God and produced only confusion.

But the story is not finished.

Turn to Acts chapter two — Pentecost, the Holy Spirit descending. Something remarkable happens there: the disciples speak and people from every nation hear in their own language. Parthians, Medes, Elamites, residents of Mesopotamia — listed one by one, as if deliberately reversing the list of those scattered from Babel.

**Pentecost is Babel reversed.** Babel brought confusion of languages and the scattering of hearts; Pentecost brings unity through the Spirit and the gathering of hearts through the gospel. Babel was built by human pride; the church is built by the Spirit's work.

Humans used bricks; God uses the body of Christ. Humans built to make their own name great; God builds for His glory. Human projects crumble; God's church will never fail.

Brothers and sisters, what are you building today?

Are you building your own Tower of Babel, or are you joining what God is building — His church? Are you making a name for yourself, or proclaiming the name of Christ? Are the materials you are building with bricks and tar — worldly wisdom, human effort, the world's standards — or are they Christ's word and the Spirit's leading?

Babel's lesson is simple: **apart from God, everything humans build will end in confusion.** Marriages fall into confusion. Families fall into confusion. Churches fall into confusion. Societies fall into confusion. Not because people don't work hard enough, but because the foundation is wrong.

But Pentecost's promise is just as clear: **when the Spirit comes, everything Babel shattered can be reconnected.** Language barriers can be transcended. Cultural differences can be embraced. Scattered hearts can be gathered — because the power of the gospel surpasses the curse of sin.

"I will build my church, and the gates of hell shall not prevail against it." (Matthew 16:18)

Babel's construction stopped. God's building never will.`,
  historyContext_zh: `示拿平原即今日伊拉克境内的美索不达米亚平原。考古发现了多座古代"金字形神塔"（ziggurat），是苏美尔和巴比伦文明的宗教建筑，与圣经记载高度吻合。"巴别"音译自"巴比伦"，在希伯来文中被谐音为"变乱"。本章是创世记"原史"（1-11章）的最后一段——"原史"是圣经学者对创世记前段的专称，指人类起源、堕落、洪水、巴别等奠基性叙事，与后面的族长史（12章起）相对应。本章连接着挪亚后裔谱系，为亚伯拉罕的出场做铺垫。`,
  historyContext_en: `The plain of Shinar corresponds to modern-day Mesopotamia in Iraq. Archaeological discoveries of multiple ancient ziggurats — the religious towers of Sumerian and Babylonian civilization — closely match the biblical account. "Babel" is a Hebrew pun on "Babylon," reinterpreted to mean "confusion." This chapter is the final episode of Genesis's "primeval history" (chapters 1–11) — a term biblical scholars use for the foundational narratives of human origins, the fall, the flood, and Babel, in contrast to the patriarchal history that begins in chapter 12. It connects the genealogy of Noah's descendants and sets the stage for Abraham's appearance.`,
  structure_zh: `全章分两部分：1-9节是巴别塔事件，10-32节是闪的后裔谱系（特别标出亚伯兰一家的迁徙路线）。谱系不是装饰，是神视角的历史线索——在万族分散中，神在追踪一个特定的族谱，为应许的实现做预备。`,
  structure_en: `The chapter divides into two parts: verses 1–9, the Tower of Babel episode; verses 10–32, the genealogy of Shem (tracing the migration route of Abram's family). The genealogy is not decoration — it is God's historical thread. Amid the scattering of nations, God is tracking a specific lineage, preparing for the fulfillment of His promise.`,
  theology_zh: `人的骄傲是离神的核心；建塔象征人用集体力量自救/扬名；神变乱语言是审判也是怜悯（阻止更深的堕落）；民族分散是神治理历史的方式，为后来的救赎预备土壤。改革宗神学强调：罪不只是个人的，也是集体的、结构性的。`,
  theology_en: `Human pride is at the core of departure from God; the tower symbolizes humanity's collective effort at self-rescue and self-glorification; God confusing the languages is both judgment and mercy (arresting deeper moral collapse); the scattering of nations is God's governance of history, preparing the soil for future redemption. Reformed theology emphasizes that sin is not only personal but also collective and structural.`,
  christShadow_zh: `五旬节圣灵降临（使徒行传2章）是巴别的神圣逆转：语言不再变乱，而是超越语言的合一；教会是神亲自建造的"新巴别塔"，但这座塔的材料不是砖和沥青，而是基督的宝血和圣灵的工作。"叫世上各国各族各民各方的人"同唱一首新歌——启示录5:9。`,
  christShadow_en: `The descent of the Holy Spirit at Pentecost (Acts 2) is the divine reversal of Babel: language is no longer confused but transcended in unity. The church is the new "tower" God builds — but its materials are not brick and bitumen; they are the blood of Christ and the work of the Holy Spirit. "Every tribe and language and people and nation" will sing a new song together (Revelation 5:9).`,
});
readings.push({
  book: '创世记', bookEn: 'Genesis', chapter: 12,
  publishDate: '2026-03-03',
  title: '蒙召', titleEn: 'Called Out',
  author: '摩西', authorEn: 'Moses',
  scripture: '创世记 12:1-20 / Genesis 12:1-20',
  content_zh: `弟兄姐妹，第十二章是一道新的光。

巴别之后，全地分散，万族离神越来越远。黑暗好像越来越厚。然后神说话了——不是向全人类，而是向一个特定的人，一个住在迦勒底的吾珥、后来迁到哈兰的老人：**亚伯兰**。

"你要离开本地、本族、父家，往我所要指示你的地去。"

这一句话，改变了历史的走向。

我要请你注意神怎么呼召亚伯兰的。

神说："往我所要指示你的地去。"——不是"往某某地去"，而是"我要指示你的地"。也就是说，**目的地没有提前告诉他**。亚伯兰要上路，但他不知道要去哪里。使徒书信后来说他是"出去的时候，还不知往那里去"（希伯来书11:8）。

你想想这需要多大的信心。

亚伯兰当时已经七十五岁了。他在哈兰有房子、有家业、有亲族。神叫他离开的，是三件事：本地、本族、父家——这正是古代世界一个人全部的安全感、身份认同和社会支撑。神叫他放下的，是他所有的根。

而且撒拉没有生育，他没有儿子。

但神紧接着说了三重应许：

**"我必叫你成为大国，我必赐福给你，叫你的名为大。"**——你必有后裔，你必有名，你必有土地。

**"你也要叫别人得福。"**——你的存在将是别人的祝福，不是障碍。

**"地上的万族都要因你得福。"**——这个应许的范围扩到了全地，扩到了全人类。

你看这三重应许的结构：第一重是给亚伯兰个人的——大国、大名；第二重是关系性的——你要叫别人得福；第三重是普世性的——万族因你得福。从个人到群体到全人类，一层比一层大，一圈比一圈宽。神的心意从来不是只拯救一个人，神的心意是通过一个人去祝福万民。

这也是我们每一个信徒的呼召。神祝福你，不是让你独自享受祝福，而是让你成为祝福的管道。你被拣选，不是因为你比别人好，而是因为神要通过你去触摸那些还没有听过福音的人。

这第三重应许，是整本圣经里最重要的伏笔之一。**"地上的万族"。** 不是以色列，不是亚伯兰的后裔，而是地上的万族——所有民族，所有人。神在这里已经预告了：拯救不会只限于一个民族，福音要流向天下。

保罗在加拉太书3:8里直接说：**这就是预先传给亚伯拉罕的福音。** "地上万族因你得福"，这句话就是福音的预告，在创世记十二章就已经说出来了，比摩西律法早了四百多年。

然后你看亚伯兰的回应：**"亚伯兰就照着耶和华的吩咐去了。"**

没有讨价还价，没有反复询问，没有要求先看到证据。他起来，带着撒拉和侄儿罗得，带着所有的财物和在哈兰所得的人口，出发了。

信心不是感觉确定之后才迈步，信心是在不确定中仍然迈步。

你注意圣经怎么描写他出发的："亚伯兰将他妻子撒莱和侄儿罗得，连他们在哈兰所积蓄的财物、所得的人口，都带往迦南地去。"（创世记12:5）他不是一个人走的，他带着一大群人。这意味着他的决定不只影响自己——他的信心要为别人负责。很多时候我们以为信心是一个人的事，但真正的信心总是牵动一群人的命运。

七十五岁出发。不是年轻人的冲动，是老年人的决断。他已经活了大半辈子，在哈兰安居了许多年。神叫他离开的，不是一个陌生的地方，而是一个他已经习惯了的地方。有时候离开熟悉的安全，比进入未知的旷野更需要勇气。

亚伯兰到了迦南地。神向他显现，说："我要把这地赐给你的后裔。"亚伯兰在那里为向他显现的耶和华筑了一座坛。从那里他又迁到伯特利东边的山，支搭帐棚，西边是伯特利，东边是艾。他在那里又为耶和华筑了一座坛，求告耶和华的名。

**每到一处，筑一座坛。**

我在旷野四十年，带着以色列人走路，我太懂这意味着什么了。旷野里，祭坛是你的定锚；旷野里，祭坛是你对神说"我在这里，你也在这里"的方式。亚伯兰不是在征服迦南，他是在圣化迦南——把这片陌生的土地，一座坛一座坛地，献给耶和华。

在一个充满偶像崇拜的地方——迦南人拜巴力、拜亚舍拉——亚伯兰的祭坛是一个宣告：这地属于耶和华。他没有军队，没有城墙，没有政治力量，但他有祭坛。有时候，一座祭坛比一支军队更有力量，因为祭坛连接的是天上的权柄。

然后发生了一件让人有点困惑的事：饥荒来了，亚伯兰去了埃及，叫撒拉谎称是他的妹妹，害怕埃及人因为撒拉的美貌而杀他。

这是信心的软弱，要承认的。那个出迦南时百般顺服的亚伯兰，在饥荒面前撑不住了，用谎言来保护自己，却把妻子推入险境。

但神没有丢弃他。神降大灾在法老和他的家里，法老把撒拉还给了他。

弟兄姐妹，亚伯兰的故事告诉我们：神的呼召不是因为我们完美，神的拣选不是因为我们配得。他呼召软弱的人，他拣选会跌倒的人，然后他在他们的软弱中彰显他的信实。

我自己太明白这一点了。那个在米甸旷野逃亡四十年的摩西，那个在烧着荆棘前推辞说"我算什么人"的摩西，神没有丢弃我。他在何烈山的荆棘火焰中呼叫我的名字："摩西！摩西！"不是追究，是差遣。我的软弱是神恩典的舞台，不是神放弃我的理由。

亚伯兰在埃及的失败，和我当年在埃及人与希伯来人之间冲动出手、杀了那个埃及人的失败，本质是一样的——我们都在压力面前选择了用自己的方式解决问题，而不是等候神。但神的信实不因我们的不信实而改变。"我们纵然失信，他仍是可信的，因为他不能背乎自己。"（提摩太后书2:13）

弟兄姐妹，如果你正站在一个十字路口——神在呼召你离开某个舒适区，进入一个未知的领域，而你心里充满了恐惧和不确定——请记住亚伯兰的故事。他不是因为确定才出发的，他是因为信靠那位呼召他的神才出发的。

而那位呼召亚伯兰的神，也在呼召你。

神的应许不靠亚伯兰的表现来兑现，神的应许靠神自己来兑现。这就是恩典。`,
  content_en: `Brothers and sisters, chapter twelve is a new light breaking through.

After Babel, the nations had scattered and drifted further and further from God. The darkness seemed to thicken. Then God spoke — not to all of humanity, but to one specific man: an old man living in Ur of the Chaldeans, later resettled in Haran. **Abram.**

"Go from your country and your kindred and your father's house to the land that I will show you."

That one sentence changed the direction of history.

I want you to notice how God calls Abram.

God says, "to the land that I will show you" — not "to such-and-such land," but "the land I will show you." The destination is not revealed in advance. Abram must set out without knowing where he is going. The letter to the Hebrews later says that "he went out, not knowing where he was going" (Hebrews 11:8).

Think about how much faith that requires.

Abram was seventy-five years old. He had a house in Haran, a livelihood, kinsmen all around him. What God asked him to leave behind was threefold: his country, his kindred, his father's house — these were everything a person in the ancient world had for security, identity, and social belonging. God called him to lay down all his roots.

And Sarai had given him no children. He had no son.

Yet immediately God spoke three layers of promise:

**"I will make of you a great nation, and I will bless you and make your name great."** — You will have descendants; you will have a name; you will have a land.

**"So that you will be a blessing."** — Your existence will be a blessing to others, not a burden.

**"In you all the families of the earth shall be blessed."** — The scope expands to all the earth, to all of humanity.

Notice the structure of these three promises: the first concerns Abram personally — a great nation, a great name; the second is relational — "you will be a blessing" to others; the third is universal — all the families of the earth. The scope expands from individual to community to all of humanity, each layer larger than the last. God's intention was never merely to save one person — His intention was to bless all peoples through one person.

This is also the calling of every believer. God blesses you not so you can enjoy the blessing alone, but so that you might become a channel of blessing. You were chosen not because you are better than others, but because God intends to reach those who have not yet heard the gospel through you.

That third promise is one of the most important foreshadowings in all of Scripture. **"All the families of the earth."** Not Israel. Not Abram's descendants alone — all the families of the earth. Every nation, every people. God was already announcing here: salvation will not be confined to one people; the gospel will flow to all the world.

Paul says in Galatians 3:8 directly: **this is "the gospel preached beforehand to Abraham."** The words "in you all the nations shall be blessed" — that sentence is the advance proclamation of the gospel, spoken in Genesis chapter twelve, more than four hundred years before the Law of Moses.

Then look at Abram's response: **"So Abram went, as the LORD had told him."**

No bargaining. No repeated questioning. No demand to see evidence first. He rose, took Sarai and his nephew Lot, took all his possessions and the people he had gathered in Haran, and departed.

Faith is not waiting until you feel certain before taking a step. Faith is taking the step despite the uncertainty.

Notice how Scripture describes his departure: "Abram took Sarai his wife, and Lot his brother's son, and all their possessions that they had gathered, and the people that they had acquired in Haran, and they set out to go to the land of Canaan." (Genesis 12:5) He did not go alone — he brought a large company of people. His decision affected far more than himself. His faith bore responsibility for others. We often think of faith as a private matter, but true faith always draws others into its destiny.

Seventy-five years old when he set out — not a young man's impulse, but an old man's resolve. He had lived most of his life already, settled comfortably in Haran for many years. What God called him to leave was not something foreign, but a place he had grown accustomed to. Sometimes, leaving behind familiar security requires more courage than entering an unknown wilderness.

Abram arrived in Canaan. The LORD appeared to him and said, "To your offspring I will give this land." Abram built an altar there to the LORD who had appeared to him. From there he moved to the hill country east of Bethel and pitched his tent, with Bethel on the west and Ai on the east. And there he built an altar to the LORD and called upon the name of the LORD.

**At every place he stopped, he built an altar.**

In a land saturated with idolatry — the Canaanites worshipped Baal and Asherah — Abram's altars were a declaration: this land belongs to the LORD. He had no army, no city walls, no political power. But he had altars. Sometimes an altar is mightier than an army, because an altar connects you to the authority of heaven.

I spent forty years in the wilderness, walking with the people of Israel — I understand what this means. In the wilderness, an altar is your anchor. An altar is how you say to God: "I am here, and you are here." Abram was not conquering Canaan; he was consecrating it — dedicating this foreign land, altar by altar, to the LORD.

Then something slightly troubling happens: famine struck, and Abram went down to Egypt. He told Sarai to say she was his sister, fearing the Egyptians would kill him for the sake of her beauty.

This is a failure of faith — we must name it honestly. The Abram who had been so obedient on the journey to Canaan could not hold steady in the face of famine. He used deception to protect himself, while pushing his wife into danger.

But God did not abandon him. God afflicted Pharaoh and his household with great plagues; Pharaoh returned Sarai to him.

I know this from my own experience. Moses, who fled to the wilderness of Midian and spent forty years in exile after killing an Egyptian; Moses, who stood before the burning bush and said, "Who am I, that I should go?" — God did not abandon me. He called my name from the flame of the burning thornbush: "Moses! Moses!" Not accusation, but commission. My failure was not a reason for God to give up on me — it was the stage on which His grace was displayed.

Brothers and sisters, if you are standing at a crossroads today — God is calling you to leave a comfortable place and enter an unknown territory, and your heart is full of fear and uncertainty — remember Abram's story. He did not set out because he was certain. He set out because he trusted the God who called him.

And the God who called Abram is calling you.

Abram's failure in Egypt and my own failure — striking down the Egyptian in a moment of impulse, taking matters into my own hands instead of waiting on God — are the same at their root. Both of us, under pressure, chose our own way of solving the problem rather than trusting in God's timing. But God's faithfulness does not change because of our faithlessness. "If we are faithless, he remains faithful — for he cannot deny himself." (2 Timothy 2:13)

Brothers and sisters, Abram's story tells us this: God's calling is not because we are perfect; God's election is not because we deserve it. He calls the weak; He chooses those who will stumble — and then He displays His faithfulness through their weakness.

God's promises are not fulfilled on the basis of Abram's performance. They are fulfilled on the basis of God Himself. That is grace.`,
  historyContext_zh: `迦勒底的吾珥是当时中东最发达的城市之一，出土文物显示其文明高度发达。亚伯拉罕的呼召发生在公元前2100-2000年左右，属于中青铜时代。饥荒时下埃及避难是当时游牧民族的常见做法，有古埃及文献记载。亚伯兰经过的地点（示剑、伯特利、艾城之间）在后来以色列历史中反复出现，具有重要象征意义。`,
  historyContext_en: `Ur of the Chaldeans was one of the most advanced cities in the ancient Near East; archaeological finds reveal its high level of civilization. Abraham's call occurred around 2100–2000 BC, in the Middle Bronze Age. Seeking refuge in Egypt during famine was a common practice for seminomadic peoples, documented in ancient Egyptian records. The sites Abram passes through — Shechem, and the area between Bethel and Ai — recur repeatedly in later Israelite history and carry deep symbolic resonance.`,
  structure_zh: `三重结构：蒙召与应许（1-3节）→ 顺服与筑坛（4-9节）→ 信心软弱在埃及（10-20节）。应许是三层递进：个人（大国、大名）→ 关系性（叫别人得福）→ 普世（万族因你得福）。筑坛（7、8节）与撒谎（13节）形成鲜明对比，展示信心的真实面貌——不是完美无瑕，而是跌倒中仍被神保守。`,
  structure_en: `Three-part structure: the call and the promises (vv. 1–3) → obedience and altar-building (vv. 4–9) → failure of faith in Egypt (vv. 10–20). The promises are three concentric circles: personal (great nation, great name) → relational (a blessing to others) → universal (all families of the earth blessed). The altar-building (vv. 7, 8) and the deception (v. 13) form a sharp contrast, showing what faith really looks like — not flawless, but preserved by God even through falling.`,
  theology_zh: `神的主权呼召先于人的回应；信心是在不确定中的顺服；应许是无条件的（神应许，不附加亚伯兰的表现条件）；神在软弱者身上彰显恩典；普世宣教的根基早在创世记十二章就已奠定——改革宗神学称之为"亚伯拉罕之约"，是恩典之约的核心。`,
  theology_en: `God's sovereign call precedes human response; faith is obedience in uncertainty; the promises are unconditional (God promises without making Abram's obedience a condition); God displays grace through the weak; the foundation of world mission was already laid in Genesis 12 — what Reformed theology calls the "Abrahamic Covenant," the heart of the covenant of grace.`,
  christShadow_zh: `"地上的万族都要因你得福"（创12:3）——保罗明确说这就是"预先传给亚伯拉罕的福音"（加拉太书3:8）。那个"后裔"，单数，就是基督（加3:16）。神在十二章里播下的种子，在基督身上结出了果实：真正的大国，是来自万族的教会；真正的大名，是超乎万名之上的名（腓立比书2:9）；真正的万族得福，是因基督的赎罪。`,
  christShadow_en: `"In you all the families of the earth shall be blessed" (Gen 12:3) — Paul explicitly calls this "the gospel preached beforehand to Abraham" (Galatians 3:8). That "offspring" is singular — it is Christ (Galatians 3:16). The seed planted in chapter twelve bore fruit in Christ: the true great nation is the church gathered from every people; the truly great name is the name above every name (Philippians 2:9); the true blessing of all nations comes through Christ's atoning sacrifice.`,
});
readings.push({
  book: '创世记', bookEn: 'Genesis', chapter: 13,
  publishDate: '2026-03-04',
  title: '分离', titleEn: 'The Parting of Ways',
  author: '摩西', authorEn: 'Moses',
  scripture: '创世记 13:1-18 / Genesis 13:1-18',
  content_zh: `弟兄姐妹，有时候人与人之间不得不分离，不是因为仇恨，而是因为同行不下去了。

亚伯兰和他的侄儿罗得从埃及回来，财物极多，牛羊成群，帐篷无数，两人的牧人开始为草场和水源发生争竞。圣经说："那地容不下他们，因为他们的财物甚多，使他们不能同居。"

不是罪，是现实。但现实需要智慧来处理。

然后亚伯兰说了一段在我看来极为美丽的话。

"你我不可相争，你的牧人和我的牧人也不可相争，因为我们是骨肉（原文作弟兄）。遍地不都在你眼前么？请你离开我：你向左，我就向右；你向右，我就向左。"

在古代世界，长者有优先选择权。亚伯兰是叔叔，又是年长者，按照当时的习俗，**他本可以先选的**。

但他没有。他把选择权给了罗得。

这是什么精神？这是一个人不紧抓自己的权利，不计算自己的利益，宁可自己吃亏也不让关系破裂的精神。保罗后来写道："各人不要单顾自己的事，也要顾别人的事"（腓立比书2:4）。亚伯兰早就活出来了。

罗得举目一看——他"举目"，是圣经里一个值得注意的动作——"见约旦河的全平原，直到琐珥，都是滋润的，那地在耶和华未灭所多玛、蛾摩拉以先，如同耶和华的园子，也像埃及地。"

你看到这里有多少预警信号吗？

"如同耶和华的园子"——伊甸园？但伊甸园已经失去了。"像埃及地"——他们刚从埃及回来，那里差点发生了灾难。而且圣经特意注明："在耶和华未灭所多玛、蛾摩拉以先"——提醒你，这个地方将来会被毁灭。

罗得选了最好看的地，向东迁移，"各人分开了"。罗得"渐渐挪移帐篷，直到所多玛"。

一步一步，向所多玛走近。圣经说那里的人"罪大恶极，得罪了耶和华"。但罗得看到的是滋润的平原，不是罪恶的城市。

人常常是这样的——我们看见眼前利益的时候，不容易看见潜在的危险。我们举目，看见的是滋润，却没有看见那片滋润背后的腐败。

你留意到没有，罗得的堕落是一步一步的。第一步，他"看见"了约旦河平原。第二步，他"选择"了那块地。第三步，他"往东迁移"。第四步，他"渐渐挪移帐篷，直到所多玛"。第五步——到了十四章你就会看到——他已经"住在所多玛"了。第六步，到了十九章，他"坐在所多玛的城门口"——在那个时代，坐在城门口意味着你是这座城的长老，参与治理。

从"看见"到"坐在城门口"，罗得用了多久？圣经没有说。但每一步看起来都很小，每一步看起来都合理。这就是试探的本质——它不会一步把你推下悬崖，它一步一步地挪动你的帐篷，直到有一天你发现自己已经住在所多玛城里，而且还觉得挺舒服的。

罗得离开之后，神对亚伯兰说话了。

"从你所在的地方，你举目向东西南北观看。"——这里神也让亚伯兰"举目"，但亚伯兰举目，看的是神要赐给他的应许，不是自己要选择的最佳位置。

"你所看见的一切地，我都要赐给你和你的后裔，直到永远。我也要使你的后裔如同地上的尘沙那样多，人若能数算地上的尘沙，才能数算你的后裔。"

亚伯兰让出了优先选择权，神就把全部都给了他。罗得选了最好看的地，却也只得了那块地；亚伯兰什么都不争，神把天下都应许给他。

这不是因果报应的逻辑，这是恩典的逻辑。**让出的，神来补满。**

"你起来，纵横走遍这地，因为我必把这地赐给你。"

于是亚伯兰移居，来到希伯仑的幔利橡树那里居住，在那里为耶和华筑了一座坛。

希伯仑，意思是"联合"。亚伯兰让出了联合——与罗得分开——神却把他带到一个名叫"联合"的地方。这里面有一个深深的安慰：当你为了顺服神而失去某些关系的时候，神不会让你孤独。他会在新的地方给你新的联合——与他自己更深的联合。

希伯仑。这个地方后来将是多么重要——亚伯拉罕、以撒、雅各都埋葬在这里，以色列的先祖都在这里安息。大卫在成为以色列全国之王之前，先在希伯仑作了七年的王。

又是一座坛。在每一个他落脚的地方，亚伯兰都在说：**这里属于耶和华。**

你注意到一个对比吗？罗得走向所多玛的时候，圣经没有提到他在任何地方筑过坛。他有帐篷，有牛羊，但没有祭坛。而亚伯兰每到一处，第一件事就是筑坛。祭坛是一个人属灵生命的标记——你在哪里敬拜，你的心就在哪里。

罗得带着财物去了所多玛。亚伯兰带着祭坛来到希伯仑。二十年后，所多玛被火毁灭；希伯仑却成了以色列先祖永远的安息之所。

弟兄姐妹，这一章教导我们：信心有时候表现为舍得。

舍得放弃优先选择权，舍得相信神会预备，舍得在眼前的利益和长远的应许之间，选择应许。罗得选了眼前能看见的，亚伯兰选了神应许的。结果，历史记住的是亚伯兰，被称为信心之父的是亚伯兰，在神的救赎计划中被使用的是亚伯兰。

不是因为他更聪明，而是因为他信神。

弟兄姐妹，你今天面对的选择也许不是草场和水源。也许是一份薪水更高但需要妥协原则的工作，也许是一段看起来很好但会把你带离信仰的关系，也许是一个看起来很美但不合神心意的机会。

你会怎么选？举目看利益，还是举目看应许？

我记得主耶稣说过一句话："人若赚得全世界，赔上自己的生命，有什么益处呢？"（马太福音16:26）罗得选了约旦河平原，结果差点在所多玛的毁灭中丧命。亚伯兰让出了优先权，结果得着了神应许的全部。

让出的，神来补满。这不是交易，这是信心。`,
  content_en: `Brothers and sisters, sometimes people must part — not from hatred, but because they can no longer walk together.

Abram and his nephew Lot returned from Egypt with great wealth: vast herds, flocks, and tents. Their herdsmen began to quarrel over pastureland and water. Scripture says: "the land could not support both of them dwelling together, for their possessions were so great."

This was not sin — it was reality. But reality requires wisdom to navigate.

Then Abram said something I consider extraordinarily beautiful.

"Let there be no strife between you and me, and between your herdsmen and my herdsmen, for we are kinsmen. Is not the whole land before you? Separate yourself from me. If you take the left hand, then I will go to the right, or if you take the right hand, then I will go to the left."

In the ancient world, the elder had the right of first choice. Abram was the uncle, the elder — by the customs of the time, **he had every right to choose first**.

But he did not. He gave the choice to Lot.

What kind of spirit is this? It is the spirit of a person who does not cling to his own rights, who does not calculate his own advantage, who would rather absorb the loss himself than see the relationship break. Paul would later write: "Let each of you look not only to his own interests, but also to the interests of others" (Philippians 2:4). Abram was already living this out.

Lot "lifted up his eyes" — a gesture worth noting in Scripture — "and saw that the Jordan Valley was well watered everywhere like the garden of the LORD, like the land of Egypt, in the direction of Zoar. This was before the LORD destroyed Sodom and Gomorrah."

Can you see how many warning signals are embedded in those words?

"Like the garden of the LORD" — the Garden of Eden? But Eden was lost long ago. "Like the land of Egypt" — they had just come from Egypt, where catastrophe had nearly struck. And Scripture deliberately notes: "before the LORD destroyed Sodom and Gomorrah" — reminding you that this place will one day be annihilated.

Lot chose the most beautiful land, moved east, and the two men parted. Lot "gradually moved his tent as far as Sodom."

Step by step, drawing closer to Sodom. Scripture says the men of Sodom "were wicked, great sinners against the LORD." But what Lot saw was a well-watered plain, not a wicked city.

Do you notice Lot's descent, one step at a time? First, he "saw" the Jordan Valley. Second, he "chose" that territory. Third, he "moved eastward." Fourth, he "gradually moved his tent as far as Sodom." Fifth — by chapter fourteen — he was "dwelling in Sodom." Sixth, by chapter nineteen, he was "sitting in the gate of Sodom" — in that era, sitting at the gate meant serving as an elder in civic governance.

From "seeing" to "sitting in the gate" — how long did it take Lot? Scripture doesn't say. But each step seemed small; each step seemed reasonable. That is the nature of temptation: it never pushes you off a cliff in one move. It shifts your tent one step at a time, until one day you discover you are living in Sodom — and feeling quite at home there.

This is so often how we are — when we can see the immediate advantage, we find it hard to see the lurking danger. We lift our eyes and see the lushness, but not the corruption beneath it.

After Lot departed, God spoke to Abram.

"Lift up your eyes and look from the place where you are, northward and southward and eastward and westward." — God also tells Abram to "lift up his eyes," but Abram lifts his to see the promise God will give him — not the best location he can grab for himself.

"For all the land that you see I will give to you and to your offspring forever. I will make your offspring as the dust of the earth, so that if one can count the dust of the earth, your offspring also can be counted."

Abram gave up the right of first choice — and God gave him everything. Lot chose the finest-looking land and got that one piece of land; Abram grasped at nothing, and God promised him the whole earth.

This is not the logic of karma. This is the logic of grace. **What you release, God fills.**

"Arise, walk through the length and the breadth of the land, for I will give it to you."

So Abram moved his tent and settled by the oaks of Mamre at Hebron, and there he built an altar to the LORD.

Hebron — the name means "fellowship" or "union." Abram let go of union — he and Lot parted company — yet God led him to a place called "Union." There is a deep consolation in this: when you lose certain relationships in obedience to God, He does not leave you isolated. He will give you a new union in a new place — a deeper union with Himself.

Hebron. How significant this place would become — Abraham, Isaac, and Jacob would all be buried here; the patriarchs of Israel would all rest in this ground. Before David became king of all Israel, he reigned seven years in Hebron.

Another altar. At every place he set down his tent, Abram was declaring: **this place belongs to the LORD.**

Notice a contrast: when Lot walked toward Sodom, Scripture never once mentions him building an altar anywhere. He had tents and flocks — but no altar. Abram, by contrast, built an altar at every place he stopped. An altar is the mark of a soul's orientation: where you worship is where your heart is.

Lot brought his possessions to Sodom. Abram brought his altar to Hebron. Twenty years later, Sodom was consumed by fire; Hebron became the eternal resting place of Israel's patriarchs. What you carry into the future determines what you will find there.

Brothers and sisters, this chapter teaches us: faith sometimes looks like letting go.

Letting go of the right to choose first. Letting go in trust that God will provide. Choosing, when faced with visible present gain and distant unseen promise, to choose the promise. Lot chose what he could see; Abram chose what God had promised. And history remembers Abram — he is called the father of faith, the one used in God's redemptive plan.

Not because he was smarter. But because he trusted God.

Brothers and sisters, the choice you face today may not be about pastures and water. Perhaps it is a better-paying job that requires you to compromise your principles. Perhaps a relationship that looks attractive but would draw you away from your faith. Perhaps an opportunity that seems promising but does not align with God's purposes.

How will you choose? Lift your eyes to the immediate advantage, or to God's promise?

Jesus said: "For what does it profit a man to gain the whole world and forfeit his soul?" (Matthew 16:26) Lot chose the Jordan Valley — and barely escaped with his life when Sodom was destroyed. Abram yielded the right to choose first — and received all that God had promised.

What is yielded, God fills. This is not a bargain — this is faith.`,
  historyContext_zh: `约旦河平原（今约旦河谷）在古代确实土地肥沃，农业条件优越。所多玛和蛾摩拉的地理位置学界有争议，一般认为在死海南端。希伯仑（今以巴勒斯坦的希伯伦市）是迦南地重要城市，麦比拉洞就在此处，亚伯拉罕后来在此购地安葬撒拉（创23章）。`,
  historyContext_en: `The Jordan Valley (modern Jordan Rift Valley) was indeed fertile and agriculturally rich in antiquity. The location of Sodom and Gomorrah is debated by scholars, but most place it near the southern end of the Dead Sea. Hebron (modern-day Hebron in the West Bank) was a significant Canaanite city; the Cave of Machpelah is located there, where Abraham later purchased land to bury Sarah (Genesis 23).`,
  structure_zh: `全章结构：争竞危机（5-7节）→ 亚伯兰的宽让（8-9节）→ 罗得的选择（10-13节）→ 神对亚伯兰重申应许（14-17节）→ 亚伯兰在希伯仑安居筑坛（18节）。"举目"这个动作在13章出现两次，形成对比：罗得举目看利益，亚伯兰举目看应许。`,
  structure_en: `The chapter's structure: the crisis of conflict (vv. 5–7) → Abram's generous offer (vv. 8–9) → Lot's choice (vv. 10–13) → God's renewed promise to Abram (vv. 14–17) → Abram settled at Hebron and built an altar (v. 18). The action of "lifting up the eyes" appears twice in chapter 13, forming a contrast: Lot lifts his eyes toward gain, Abram lifts his toward promise.`,
  theology_zh: `神的应许在人的谦让中得以彰显；恩典之约是神主动的、无条件的；信心表现为在利益面前的舍让；神引导历史，使那些顺服的人进入应许；罗得的故事是一个反面教材：以外貌判断、以利益选择，最终陷入所多玛的毁灭中。`,
  theology_en: `God's promise is magnified through human humility; the covenant of grace is God's active, unconditional initiative; faith expresses itself in releasing what one could have seized; God governs history so that those who submit find their way into the promise. Lot's story is a cautionary tale: judging by appearance, choosing by self-interest, and ending up trapped in Sodom's destruction.`,
  christShadow_zh: `亚伯兰不争先、不抓取，是基督虚己精神的预表（腓立比书2:5-8）。更深处：神应许亚伯兰的后裔"如同地上的尘沙"，但希伯来书11:10说亚伯兰"等候那座有根基的城，就是神所经营所建造的"——他所盼望的，是一个超越物质土地的应许，那应许在新耶路撒冷中得到最终的成全。`,
  christShadow_en: `Abram refusing to grasp his right of precedence is a foreshadowing of Christ's self-emptying (Philippians 2:5–8). More deeply: God promises Abram that his descendants will be "as the dust of the earth," yet Hebrews 11:10 tells us that Abram "was looking forward to the city that has foundations, whose designer and builder is God" — what he truly hoped for was a promise transcending physical land, a promise finally fulfilled in the new Jerusalem.`,
});
readings.push({
  book: '创世记', bookEn: 'Genesis', chapter: 14,
  publishDate: '2026-03-05',
  title: '争战', titleEn: 'Battle and Blessing',
  author: '摩西', authorEn: 'Moses',
  scripture: '创世记 14:1-24 / Genesis 14:1-24',
  content_zh: `弟兄姐妹，第十四章是创世记里最像史诗的一章，也是神学上最深邃的一章之一。

故事开始得像一场古代的世界大战。

东方的四王联军与约旦河平原的五王在西订谷打了一仗，五王败北。获胜的军队抢夺所多玛和蛾摩拉的财物，也掳走了罗得和他的财物。

你还记得罗得吗？他就是那个举目看见约旦河平原、选了最好的地、一步步挪移帐篷直到所多玛的那个人。现在，他坐在了这场战争的中心，不是胜利者，而是战俘。

有逃跑的人来告诉亚伯兰。

亚伯兰的反应让人出乎意料。他本可以说："这是他自己的选择，他选了所多玛，这是所多玛的命运，与我无关。"但他没有。他立刻率领三百一十八名家丁，在夜间出击，追到但，大败敌军，追到大马色，把所有被掳的人和财物都夺回来了，罗得也救回来了。

亚伯兰，一个牧人，凭三百多人，击退了四国联军。这不是军事天才，这是神的保护。

这里有一个细节值得注意：圣经说他率领了"三百一十八"名家丁，都是在他家里生养的。这些人不是雇佣兵，是他自己家里长大的仆人。三百一十八个人，说明亚伯兰的家族已经相当庞大。神在应许"大国"之前，已经在悄悄地扩大他的家族了。神的应许常常是这样——你还没有看到完全的实现，但如果你仔细看，到处都有预兆。

还有一件事：亚伯兰为什么要去救罗得？罗得是自己选了所多玛的，是他自己走进了战争的中心。从世俗的角度来看，亚伯兰完全有理由不管。但他去了。因为他知道——骨肉就是骨肉，亲情不因对方的愚蠢而消失。这是恩典的影子：我们因为自己的选择陷入罪中，但神仍然来救我们，不是因为我们配得，而是因为他的爱。

打了胜仗回来，发生了一件极为神秘又极为重要的事。

"撒冷王麦基洗德带着饼和酒出来迎接；他是至高神的祭司。他为亚伯兰祝福说：'愿天地的主、至高的神赐福与亚伯兰！至高的神把敌人交在你手里，是应当称颂的。'亚伯兰就把所得的拿出十分之一给他。"

麦基洗德。这个名字在这里突然出现，没有来路，没有族谱，没有出生年月，没有死亡记录。他是撒冷王——撒冷，就是后来的耶路撒冷——他是至高神的祭司，他是王，他也是祭司。他拿出饼和酒来迎接亚伯兰，为他祝福。

弟兄姐妹，你知道一个祭司为人祝福，意味着什么吗？意味着他站在神与人之间的中保位置，把神的祝福传递给人。

亚伯兰把战利品的十分之一奉献给了麦基洗德。这不是税，不是礼物，这是**对属灵权柄的承认**。亚伯兰，神所应许的先祖，在麦基洗德面前俯首，承认他的属灵权柄高于自己。

然后发生了一个鲜明的对比。

所多玛王出来见亚伯兰，说："你把人口给我，财物你自己拿去罢。"

亚伯兰回答："我已经向天地的主、至高的神耶和华起誓：凡是你的东西，就是一根线、一根鞋带，我都不拿……免得你说'我使亚伯兰富足'。"

一边是麦基洗德，带来饼和酒，传达神的祝福；一边是所多玛王，要用财物换回人质。亚伯兰把十分之一给了麦基洗德，却一分钱不要所多玛王的。

这个选择同样是信心的宣告：**我的丰富来自至高神，不来自所多玛。**

你想一想：亚伯兰刚打了一场大胜仗，追敌军追到了大马色，夺回了所有的人口和财物。这个时候所多玛王来说"财物你拿去"——这是一笔巨大的战利品。从世俗的角度看，打了仗就该拿战利品，天经地义。但亚伯兰连一根线、一根鞋带都不要。

为什么？因为他不要让所多玛王有任何机会说"我使亚伯兰富足"。他要让全世界都知道：他的一切来自耶和华，不来自任何人。这不是清高，这是对神主权的坚定宣告。

当你拒绝来路不正的财物，当你拒绝靠妥协换来的好处，当你宁可少赚一点也要保持清洁——你就是在做亚伯兰做的事：向世界宣告，我的供应者是至高神，不是所多玛。

整章最深刻的主角，其实是那个谜一样的麦基洗德。

他带来饼和酒——这让人想到什么？

千年之后，在耶路撒冷的最后晚餐桌上，有人也拿起饼和酒说："这是我的身体，这是我立约的血。"

麦基洗德是王，也是祭司——在以色列历史上，这两种职份通常是严格分开的，你不能既是大卫的后裔又是亚伦的后裔。但麦基洗德是，而且他在先，在律法之前，在利未祭司制度之前。

希伯来书花了整整一章（第七章）来解释：麦基洗德是基督职份的预表。基督是"照着麦基洗德的等次"永远为祭司的——不是靠血统，不是靠律法的条文，而是靠那无穷的生命大能（希伯来书7:16）。

"他头一个名翻出来就是仁义王，他又名撒冷王，就是平安王的意思。他无父、无母、无族谱、无生之始、无命之终，乃是与神的儿子相似，照样永远为祭司。"（希伯来书7:2-3）

无始无终，无族谱，永远为祭司，仁义王，平安王——你看出来了吗？圣经不是说麦基洗德真的没有父母，而是说他的族谱没有被记录，**好像**他无始无终——这一切，都是为了预指那位真正无始无终的基督。

亚伯兰在麦基洗德面前俯首，是信心之父在更大的那位面前低头。

希伯来书的作者为什么要花整整一章来讲麦基洗德？因为他要证明一件事：基督的祭司职分不是从利未支派来的，是从一个更古老、更高的等次来的。利未还没有出生的时候，亚伯兰已经在向麦基洗德奉献十分之一了。"这样说来，那受十分之一的，倒是为那纳十分之一的祝福。"（希伯来书7:7）

这一章的两个选择——接受麦基洗德的祝福，拒绝所多玛王的财物——定义了亚伯兰的一生。他的丰富来自神，不来自世界。他的身份在至高神的祭司面前被确认，不在地上的君王面前被交易。

弟兄姐妹，你的丰富从哪里来？你的身份在谁面前被确认？`,
  content_en: `Brothers and sisters, chapter fourteen is the most epic chapter in Genesis, and one of its most theologically profound.

The story begins like an ancient world war.

A coalition of four kings from the east defeated five kings of the Jordan plain at the Valley of Siddim. The victorious army plundered the wealth of Sodom and Gomorrah, and took captive Lot and all his possessions.

Do you remember Lot? He is the one who lifted up his eyes at the Jordan Valley, chose the finest land, and moved his tent step by step until he reached Sodom. Now he sits at the center of this war — not as a victor, but as a prisoner.

A man who escaped came and told Abram.

Abram's response is surprising. He could have said: "This was his own choice. He chose Sodom; this is Sodom's fate. It has nothing to do with me." But he did not. He immediately rallied three hundred and eighteen trained men of his household, attacked under cover of night, routed the enemy as far as Dan, pursued them to Damascus, recovered all the captured people and possessions, and brought Lot back.

Abram — a herdsman — with three hundred men, turned back a coalition of four kings. This was not military genius. This was God's protection.

One detail is worth noting: Scripture says Abram led "318" trained men, all born in his household — not hired soldiers, but servants raised in his own family. Three hundred and eighteen means Abram's household had grown considerably. God was quietly expanding his family even before fully revealing the promise of a great nation. God's promises often work this way: you have not yet seen the full fulfillment, but the signs of it are quietly appearing all around you.

There is also a deeper question worth asking: why did Abram go at all? Lot had chosen Sodom of his own free will — he had walked himself into the center of that conflict. From any worldly standpoint, Abram had every reason to stay out of it. But he went — because blood is blood, and love does not evaporate because of another's poor choices. This is a foreshadowing of grace: we enter sin's captivity by our own choices, yet God comes to rescue us — not because we deserve it, but because of His love.

Coming back from victory, something mysterious and supremely important took place.

"And Melchizedek king of Salem brought out bread and wine. He was priest of God Most High. And he blessed him and said, 'Blessed be Abram by God Most High, Possessor of heaven and earth; and blessed be God Most High, who has delivered your enemies into your hand!' And Abram gave him a tenth of everything."

Melchizedek. This name appears here without warning — no family origin, no genealogy, no birth record, no record of death. He is king of Salem — Salem, which would later become Jerusalem — and he is priest of God Most High. He is both king and priest. He brings out bread and wine to meet Abram, and he blesses him.

Brothers and sisters, do you understand what it means for a priest to bless someone? It means standing in the position of mediator between God and man, conveying God's blessing to human hands.

Abram gave a tenth of everything to Melchizedek. This was not a tax, not a gift — it was **an acknowledgment of spiritual authority**. Abram, the patriarch of God's promise, bowed before Melchizedek, recognizing his spiritual authority as greater than his own.

Then a sharp contrast unfolds.

The king of Sodom came out to meet Abram and said, "Give me the persons, but take the goods for yourself."

Abram replied: "I have lifted my hand to the LORD, God Most High, Possessor of heaven and earth, that I would not take a thread or a sandal strap or anything that is yours... lest you should say, 'I have made Abram rich.'"

On one side: Melchizedek, bringing bread and wine, conveying God's blessing. On the other: the king of Sodom, offering to exchange goods for the return of his people. Abram gave a tenth to Melchizedek, but refused to take a single coin from the king of Sodom.

This choice was itself a declaration of faith: **My abundance comes from God Most High — not from Sodom.**

Consider the context: Abram had just won a tremendous victory — he had chased the enemy all the way to Damascus, recovering all the people and goods. Now the king of Sodom offers him "take the goods for yourself" — a vast spoil of war. From any worldly standpoint, taking war plunder after battle is completely natural. Yet Abram would not take a thread or a sandal strap.

Why? Because he would not give the king of Sodom any opportunity to say "I have made Abram rich." He wanted the whole world to know: everything he had came from the LORD — not from any human being.

When you refuse money that came through dishonest means, when you refuse the benefits of compromise, when you are willing to earn a little less in order to remain clean before God — you are doing exactly what Abram did: declaring to the world that your provider is God Most High, not Sodom.

The deepest protagonist in this chapter is that mysterious figure, Melchizedek.

He brings bread and wine — what does that bring to mind?

A thousand years later, at a last supper table in Jerusalem, someone else took bread and wine and said: "This is my body. This is the blood of my covenant."

Melchizedek is both king and priest — in Israelite history, these two offices were kept strictly separate; you could not be both from David's line and from Aaron's line. But Melchizedek was, and he came before all of that — before the Law, before the Levitical priesthood.

The letter to the Hebrews devotes an entire chapter (chapter seven) to explaining: Melchizedek is the foreshadowing of Christ's office. Christ is a priest forever "after the order of Melchizedek" — not by genealogy, not by legal requirement, but "by the power of an indestructible life" (Hebrews 7:16).

"He is first, by translation of his name, king of righteousness, and then he is also king of Salem, that is, king of peace. He is without father or mother or genealogy, having neither beginning of days nor end of life, but resembling the Son of God he continues a priest forever." (Hebrews 7:2-3)

No beginning, no end, no genealogy, forever a priest, king of righteousness, king of peace — do you see it? Scripture is not saying that Melchizedek literally had no parents. It is saying that his genealogy is not recorded, as if he had no beginning or end — all of this to point forward to the one who truly has no beginning or end.

Abram bowing before Melchizedek is the father of faith lowering his head before one who is greater.

Why does the author of Hebrews devote an entire chapter to Melchizedek? Because he is proving something: Christ's priestly office does not descend from the tribe of Levi — it comes from an older, higher order. Before Levi was even born, Abram was already giving tithes to Melchizedek. "It is beyond dispute that the inferior is blessed by the superior." (Hebrews 7:7) Christ's priesthood is not inherited through bloodline — it belongs to Melchizedek's order: eternal, indestructible.

The two choices in this chapter — receiving Melchizedek's blessing and refusing Sodom's wealth — define the arc of Abram's life. His abundance comes from God, not the world. His identity is confirmed before the priest of the Most High, not traded away before earthly kings.

Brothers and sisters, where does your abundance come from? Before whom is your identity confirmed?`,
  historyContext_zh: `本章记载的"四王伐五王"是圣经中记录的最早的一场国际战争，历史学家对各国的具体身份仍有讨论。"撒冷"通常被认为是耶路撒冷的早期名称（诗篇76:2有"神在撒冷"）。"麦基洗德"这个名字意为"我的王是公义的"或"仁义之王"。古代近东文献中有祭司王合一的制度，但在以色列历史中，祭司职与王职严格分离。`,
  historyContext_en: `The "war of four kings against five" is the earliest recorded international conflict in Scripture; scholars continue to debate the precise identification of the various nations. "Salem" is generally understood to be an early name for Jerusalem (Psalm 76:2 says "His abode has been established in Salem"). "Melchizedek" means "my king is righteousness" or "king of righteousness." Ancient Near Eastern texts document the combining of priestly and royal roles in one person, though in Israelite history the two were kept strictly separate.`,
  structure_zh: `叙事结构：战争报道（1-12节）→ 亚伯兰出战救罗得（13-16节）→ 麦基洗德祝福亚伯兰（17-20节）→ 亚伯兰拒绝所多玛王（21-24节）。两个见面（麦基洗德vs所多玛王）形成神学对比：神的祝福与世界的利益，两种恩赐，亚伯兰做出了明确的选择。`,
  structure_en: `Narrative structure: war report (vv. 1–12) → Abram goes to battle and rescues Lot (vv. 13–16) → Melchizedek blesses Abram (vv. 17–20) → Abram refuses the king of Sodom (vv. 21–24). Two encounters (Melchizedek vs. the king of Sodom) form a theological contrast: God's blessing versus worldly profit, two kinds of offer, and Abram's clear choice between them.`,
  theology_zh: `战争中神保护他的子民；麦基洗德展示了王兼祭司的双重职分（预指基督）；饼和酒的意象连结圣餐；十分之一奉献是对属灵权柄的承认；亚伯兰拒绝所多玛王的财物，宣告他的丰富来自神——这是信心的行动宣言。`,
  theology_en: `In warfare, God protects His people; Melchizedek displays the dual office of king and priest (foreshadowing Christ); the imagery of bread and wine connects to the Lord's Supper; the tithe is an acknowledgment of spiritual authority; Abram's refusal of the king of Sodom's wealth is a declaration that his abundance comes from God — a living confession of faith.`,
  christShadow_zh: `麦基洗德是整本圣经中最明确的基督预表之一（希伯来书7章）。他是王，也是祭司，无族谱，无始终，在亚伯兰胜利归来时拿出饼和酒为他祝福。这与基督完全对应：基督是大卫的后裔（王）且是永远的大祭司（祭司），他在最后晚餐拿起饼和酒设立新约，他的祭司职分不靠律法而靠无穷的生命大能，他永远活着，永远代祷。`,
  christShadow_en: `Melchizedek is one of the clearest and most explicit foreshadowings of Christ in all of Scripture (Hebrews 7). He is king and priest, without genealogy or limits of time; he meets Abram returning from victory with bread and wine and blesses him. This corresponds exactly to Christ: David's royal descendant (king) and eternal high priest (priest); taking bread and wine at the Last Supper to establish the new covenant; a priesthood not through law but through the power of an indestructible life; always living to make intercession.`,
});
readings.push({
  book: '创世记', bookEn: 'Genesis', chapter: 15,
  publishDate: '2026-03-06',
  title: '立约', titleEn: 'The Covenant of Grace',
  author: '摩西', authorEn: 'Moses',
  scripture: '创世记 15:1-21 / Genesis 15:1-21',
  content_zh: `弟兄姐妹，第十五章是创世记的心脏，也是整本圣经的一个基础。

这里有一句话，保罗在罗马书引用，马丁路德读了之后被改变，成为宗教改革的导火索，也是你我得救的基础：

**"亚伯兰信耶和华，耶和华就以此为他的义。"**

但我们要从头说起。

那时耶和华在异象中对亚伯兰说："亚伯兰，你不要惧怕，我是你的盾牌，必大大的赏赐你。"

亚伯兰回答，说了一句让人心疼的话："主耶和华啊，我既无子，你还赐我甚么呢？……你没有给我儿子；那生在我家中的人就是我的后嗣了。"

这时的亚伯兰应该已经接近八十五岁了。他等了十年。神当年应许的是大国，是多如尘沙的后裔，但撒拉的肚子还是平的。十年是很长的等待，足够磨蚀一个人的信心。

他没有埋怨神——他只是把心里的困惑和疲乏说出来。这是真实的信心，不是表演的敬虔。

神没有责怪他，而是把他带到帐篷外面，说："你向天观看，数算众星，能数得过来吗？……你的后裔将要如此。"

**然后就是那句关键的话。**

"亚伯兰信耶和华，耶和华就以此为他的义。"

注意这里用的是"信"——不是"行为"，不是"守律法"，不是"值得"。亚伯兰没有做任何事来赚取神的义，他只是**信**。他相信神说的是真的，虽然他的身体已经老迈，虽然撒拉的肚子还是空的，虽然他等了十年没有看见任何迹象。他相信。

这就是改革宗神学的核心：**因信称义**。人被神称为义，不是因为行为，而是因为信心——不是信心这个行为本身，而是信心所指向的那一位。亚伯兰因信被称为义，是因为他信了那位必成就他所说之话的神。

请注意顺序。不是亚伯兰先做了什么好事，然后神奖赏他。不是亚伯兰先证明了自己的忠心，然后神承认他。是亚伯兰**只是信了**，神就**算**他为义。"算"——这个词在希伯来文里是一个会计术语，意思是"记在账上"。神把义记在了亚伯兰的账上，就像把一笔钱存进了他的户头，而这笔钱不是他赚来的。

马丁路德读到这句话的时候，整个人被翻转了。他发现，中世纪教会教了一千年的"靠行为得救"是错的。保罗在罗马书4:3说："亚伯拉罕信神，这就算为他的义。"又在加拉太书3:6说同样的话。这不是新约的发明——这是创世记十五章就有的真理。因信称义比摩西律法早了四百多年。

然后神做了一件古代立约的仪式。

神叫亚伯兰把各种牲畜、一只斑鸠和一只雏鸽取来，亚伯兰把牲畜劈开，分成两半，相对地摆列，鸟却没有劈开。这是古代近东世界立约的方式——双方在被劈开的牲畜尸体之间来回走过，象征说：**如果我违背这个约，愿我像这些牲畜一样被劈开。** 这是用死亡起誓。

日落时分，亚伯兰沉沉地睡着了，然后一阵大而可怕的黑暗临到他。在这片黑暗中，神对他说了一段沉重的预言：你的后裔将在一个不属于他们的地方寄居四百年，受苦受役使；但到时候，神要审判那欺压他们的国，带着许多财物出来。

然后——

**神自己穿过那些劈开的动物之间。**

"有冒烟的炉并烧着的火把从那些肉块中经过。"

冒烟的炉和烧着的火把——这是神的临在象征，就像以后在西奈山上的云柱火柱。

但是亚伯兰没有走。**只有神走过去了。**

这就是这个约最震撼的地方。

在古代，立约是双向的，双方都要走过去，双方都承担违约就被劈开的咒诅。但在这里，**神叫亚伯兰睡着，然后独自走过去**。

这意味着：这个约的成立，**不依靠亚伯兰的表现，只依靠神自己**。神不是说"如果你做到，我就做到"——神是说"无论你做什么，我都要成就这个应许"。神把立约双方的责任都承担在自己身上，包括违约的咒诅。

这就是恩典之约的本质。**单方面的，无条件的，神主动担保的。**

你能想象吗？在人类所有的条约中，没有一个是这样的。人类的合同总是双方签字、双方负责。但神说：你睡着吧，我一个人走。你不需要做任何事，我来担保这一切。

这是整本圣经中最温柔、也最可怕的一幕。温柔，因为神对亚伯兰的爱如此深沉，他愿意一个人承担一切。可怕，因为神知道人一定会违约——而他仍然走了过去，知道将来有一天，他要为人类的违约付出代价。

这里有一个深不可测的奥秘：如果神承担了两方的责任，包括违约的咒诅，那么将来如果人违约了，神怎么办？

神要自己承担违约的后果。

弟兄姐妹，你看见了吗？在那个旷野的黄昏，在那堆劈开的肉块之间，神就已经预告了加略山。预告了神自己的儿子将会被"劈开"，被咒诅，被死亡所击打，来担当人类违约的代价。

"基督既为我们受了咒诅，就赎出我们脱离律法的咒诅。"（加拉太书3:13）

亚伯兰立约那天所看见的冒烟的炉和烧着的火把，是十字架的先声。

弟兄姐妹，如果你今天觉得自己的信心太小，不够资格被神接纳——请回到创世记十五章。看看亚伯兰：他也困惑，他也疲乏，他也问"你还赐我甚么呢"。但神没有嫌弃他的软弱，反而把他带到星空下面，给他看更大的图景。

然后看看那个约的仪式：神叫亚伯兰睡着，自己一个人走过去。这个约不是建立在你的表现上的，是建立在神自己的信实上的。你的信心会软弱，但神的约不会废弃。你会跌倒，但神已经预先承担了你跌倒的代价。

这就是福音。不是你走向神，是神走向你——穿过那些劈开的肉块，穿过十字架的苦难，走到你面前说：**这约是我立的，我来成全。**`,
  content_en: `Brothers and sisters, chapter fifteen is the heart of Genesis, and one of the foundations of the entire Bible.

Here is a sentence that Paul quotes in Romans, that Martin Luther read and was transformed by — the spark that ignited the Reformation, and the basis of your salvation and mine:

**"And he believed the LORD, and he counted it to him as righteousness."**

But let us begin at the beginning.

The word of the LORD came to Abram in a vision: "Fear not, Abram, I am your shield; your reward shall be very great."

Abram answered with words that are quietly heartbreaking: "O Lord GOD, what will you give me, for I continue childless?... You have given me no offspring, and a member of my household will be my heir."

Abram must have been close to eighty-five years old at this point. He had been waiting for ten years. God had promised a great nation, descendants as numerous as the dust — yet Sarai's womb remained empty. Ten years is a long time to wait, long enough to wear away a person's faith.

He did not accuse God. He simply spoke what was weary and confused within him. This is genuine faith, not performed piety.

God did not rebuke him. Instead, He brought him outside and said: "Look toward heaven and number the stars, if you are able to number them... So shall your offspring be."

**And then came those decisive words.**

"And he believed the LORD, and he counted it to him as righteousness."

Notice what is said here: **believed** — not "performed," not "kept the law," not "earned it." Abram did nothing to earn God's righteousness. He simply trusted. He believed God's word was true — though his body was worn with age, though Sarai's womb was still empty, though he had waited ten years with no visible sign. He believed.

This is the heart of Reformed theology: **justification by faith alone**. God declares a person righteous not on the basis of works but on the basis of faith — not faith as a meritorious act in itself, but faith pointing to the One whom it trusts. Abram was counted righteous because he trusted the God who would bring to pass what He had promised.

Notice the sequence carefully. It is not that Abram first did something good, and God rewarded him. It is not that Abram first proved his faithfulness, and God acknowledged him. Abram **simply believed** — and God **counted** it to him as righteousness. "Counted" is an accounting term: to credit to an account. God credited righteousness to Abram's account — a deposit Abram had not earned.

When Martin Luther read this verse, his whole world was overturned. He discovered that the medieval church had been teaching salvation by works for a thousand years — and it was wrong. Paul quotes this passage in Romans 4:3 and again in Galatians 3:6. Justification by faith was not a New Testament invention — it was already in Genesis fifteen, more than four hundred years before the Law of Moses.

Then God performed an ancient covenant ritual.

God instructed Abram to bring various animals — a heifer, a goat, a ram, a turtledove, and a young pigeon — and cut them in two, placing the halves across from each other. This was how covenants were made in the ancient Near East: both parties walked between the slaughtered animals, declaring by the gesture: **If I break this covenant, may I be cut apart like these animals.** It was an oath sworn by death.

At sunset, a deep sleep fell upon Abram, and a great, terrifying darkness came over him. In that darkness, God spoke a weighty prophecy: your offspring will be strangers in a land not their own, enslaved and afflicted for four hundred years; but in due time, God will judge that nation and they will come out with great possessions.

And then —

**God passed through the pieces alone.**

"Behold, a smoking fire pot and a flaming torch passed between these pieces."

A smoking fire pot and a flaming torch — these are symbols of God's presence, like the pillar of cloud and fire that would later lead Israel through the wilderness.

But Abram did not walk through. **God alone passed through.**

This is the most stunning thing about this covenant.

In the ancient world, a covenant was bilateral — both parties walked through, both parties bore the curse of being "cut apart" if they violated the agreement. But here, **God caused Abram to sleep, then passed through alone**.

This means: the fulfillment of this covenant **does not depend on Abram's performance — it depends on God alone**. God was not saying "if you do your part, I will do mine." God was saying: "Whatever you do, I will fulfill this promise." God took upon Himself both parties' obligations — including the curse for violation.

This is the essence of the covenant of grace: **unilateral, unconditional, guaranteed by God Himself.**

Can you imagine this? In all of human history, there is no contract like it. Every human agreement requires both parties to sign, both parties to be accountable. But God said: you sleep — I will walk through alone. You do not need to do anything. I will guarantee everything.

This is the most tender — and the most fearsome — scene in all of Scripture. Tender, because God's love for Abram ran so deep that He was willing to bear everything alone. Fearsome, because God already knew that humanity would break the covenant — and He still walked through, knowing that one day He would have to pay the price for humanity's breach.

Here lies an unfathomable mystery: if God has taken on the responsibility of both parties — including the curse for violation — then if humans break the covenant, what must God do?

God must bear the consequences of the violation Himself.

Brothers and sisters, do you see it? On that wilderness evening, between those slaughtered pieces of flesh, God was already announcing Calvary. Announcing that His own Son would be "cut apart," cursed, struck by death — to bear the price of humanity's covenant-breaking.

"Christ redeemed us from the curse of the law by becoming a curse for us." (Galatians 3:13)

The smoking fire pot and the flaming torch that Abram saw on the day of the covenant — these were the harbinger of the cross.

Brothers and sisters, if today you feel your faith is too small — too small to deserve God's acceptance — come back to Genesis fifteen. Look at Abram: he was confused, he was weary, he said "what will you give me?" Yet God did not despise his weakness. Instead, He led him out under the stars and opened a larger horizon.

Then look at the covenant ritual: God put Abram to sleep and walked through alone. This covenant is not built on your performance — it is built on God's own faithfulness. Your faith will waver, but God's covenant will not be revoked. You will stumble, but God has already borne the cost of your stumbling in advance.

This is the gospel. It is not you walking toward God — it is God walking toward you. Through the divided pieces of flesh, through the suffering of the cross, walking to where you stand and saying: **This covenant is mine. I will fulfill it.**`,
  historyContext_zh: `"劈牲立约"是古代近东世界正式盟约的常见形式，在古叙利亚和美索不达米亚文献中都有记载（如阿马纳文书时期的条约）。希伯来文"立约"(kārat bĕrît)字面意思是"劈约"，反映这一仪式。第十五章预言的四百年奴役后来在出埃及记中应验。`,
  historyContext_en: `The "covenant by cutting animals" (covenant rite of passage) was a formal treaty practice common in the ancient Near East, attested in Syro-Mesopotamian texts such as the Alalakh tablets. The Hebrew phrase for "making a covenant" (kārat bĕrît) literally means "to cut a covenant," reflecting this ritual. The four-hundred-year prophecy in chapter fifteen was fulfilled in the Exodus account.`,
  structure_zh: `全章分两部分：1-6节（应许与信心）；7-21节（约的仪式）。两部分的枢纽是第6节"亚伯兰信耶和华，耶和华就以此为他的义"——先是因信称义，再是约的确立。这个顺序极为重要：义是先赐下的，约是后确认的，不是靠行为赚来的。`,
  structure_en: `The chapter divides into two parts: verses 1–6 (the promise and faith); verses 7–21 (the covenant ceremony). The pivot is verse 6 — "And he believed the LORD, and he counted it to him as righteousness" — first comes justification by faith, then the covenant is formally ratified. The sequence is crucial: righteousness is granted first; the covenant confirms it afterward. It is not earned by performance.`,
  theology_zh: `因信称义（第6节）是改革宗神学的基础，保罗在罗马书4:3和加拉太书3:6两次直接引用；神独自走过——单方面恩典约；应许优先于律法四百多年（加3:17）；神的主权拣选与人的信心回应并存，不矛盾；预告四百年苦难是神对历史的预知和掌管。`,
  theology_en: `Justification by faith (v. 6) is the cornerstone of Reformed theology; Paul quotes it twice — in Romans 4:3 and Galatians 3:6; God passing through alone signifies unilateral grace; the promise precedes the Mosaic law by more than four hundred years (Galatians 3:17); God's sovereign election and human faith coexist without contradiction; the prophecy of four hundred years of suffering reveals God's foreknowledge and governance of history.`,
  christShadow_zh: `神独自穿过劈开的牲畜，承担双方的约责，这直接预指十字架：基督担当了人类违约的咒诅，"被挂在木头上"（申21:23，加3:13）。约的担保者变成了被"劈开"者——这就是福音最深的奥秘：神用自己来成全自己的约。"他为立这约作中保，使蒙召之人得着所应许永远的产业。"（希伯来书9:15）`,
  christShadow_en: `God passing alone through the divided animals — bearing both parties' covenant obligations — directly foreshadows the cross: Christ bore the curse of humanity's covenant-breaking, being "hanged on a tree" (Deuteronomy 21:23; Galatians 3:13). The guarantor of the covenant became the one who was "cut apart" — this is the deepest mystery of the gospel: God fulfills His own covenant by giving Himself. "Therefore he is the mediator of a new covenant, so that those who are called may receive the promised eternal inheritance." (Hebrews 9:15)`,
});
readings.push({
  book: '创世记', bookEn: 'Genesis', chapter: 16,
  publishDate: '2026-03-09',
  title: '夏甲', titleEn: 'Hagar and Ishmael',
  author: '摩西', authorEn: 'Moses',
  scripture: '创世记 16:1-16 / Genesis 16:1-16',
  content_zh: `弟兄姐妹，第十六章是一个关于等待的故事——关于人在等不下去的时候，用自己的方法来"帮助"神成就应许。

亚伯兰的妻子撒莱不给他生儿女。撒莱有一个使女，名叫夏甲，是埃及人。

请注意这个细节：夏甲是埃及人。她很可能是当初亚伯兰下埃及时，法老赐给他的仆婢之一（创世记12:16）。那次下埃及本身就是一次信心的失败——亚伯兰因为饥荒离开了神应许的迦南地，去了埃及，还称妻为妹。如今，那次失败的"遗产"又回来了，成了新一轮试探的工具。

罪的后果从来不是一次性的。一个错误的决定，会在多年以后以意想不到的方式重新浮现。

撒莱对亚伯兰说："耶和华使我不能生育。求你和我的使女同房，或者我可以因她得孩子。"亚伯兰听从了撒莱的话。

这句"亚伯兰听从了撒莱的话"让人心惊。你还记得伊甸园吗？"亚当……听从了妻子的话，吃了那果子。"（创世记3:17）这不是说妻子的话不能听——而是说，当妻子的建议与神的旨意相悖时，丈夫不能以"顺从妻子"为借口放弃属灵的责任。亚伯兰知道神的应许是要撒莱生子，但他选择了一条看起来更"现实"的路。

于是亚伯兰的妻子撒莱将使女埃及人夏甲给了丈夫为妾；那时亚伯兰在迦南已经住了十年。

十年。从蒙召到现在已经十年了，应许的儿子还没有来。十年的等待，足够消磨一个人的耐心。撒莱的提议在当时的文化中是完全合法的——古代近东的法律（如努兹文书和汉谟拉比法典）都允许不育的妻子将使女给丈夫，所生的孩子归妻子名下。撒莱并没有做任何违反当时社会规范的事。

但问题不在于文化是否允许，而在于神是否如此说。

神的应许是明确的：你的后裔将从你而出（创世记15:4）。神没有提到过夏甲，没有提到过使女，没有给出任何替代方案。神说的是："你本身所生的才成为你的后嗣。"

弟兄姐妹，这是信仰生活中最大的试探之一：**用人的方法来完成神的应许。** 目标是对的——要一个后嗣；但方法是错的——不是按照神的方式，而是按照人的智慧。

这种试探在每一代信徒中都会出现。教会想要增长，就用世俗的营销策略代替祷告和传道。个人想要成功，就用妥协和捷径代替忍耐和等候。我们太容易把"结果正确"当作"方法正确"的证据。但圣经从来不这样看。**在神的国里，方法和目标同样重要。**

亚伯兰与夏甲同房，夏甲就怀了孕；她见自己有孕，就小看她的主母。

怀孕之后，夏甲的态度立刻变了。在那个文化中，能生育是女性最大的荣耀，不能生育是最大的羞辱。夏甲怀孕了，撒莱没有——权力关系在瞬间逆转。

撒莱对亚伯兰说："我因你受屈。我将我的使女放在你怀中，她见自己有了孕，就小看我。愿耶和华在你我中间判断。"

这里的痛苦是多层的。撒莱是整件事的发起者，但她现在却因为结果而痛苦。她把责任推给亚伯兰——"我因你受屈"——但事实上是她自己提出的这个方案。罪的一个特征就是：当后果来临时，我们总是想找别人负责。

亚伯兰的回应同样令人失望。他说："使女在你手下，你可以随意待她。"他完全退出了这件事，把责任推回给撒莱。作为一家之主，他不愿意承担决定的后果，也不愿意保护夏甲——一个在他权柄之下的弱者。

撒莱苦待夏甲，夏甲就从撒莱面前逃走了。

**然后，全章最动人的一幕出现了。**

耶和华的使者在旷野书珥路上的水泉旁遇见她，对她说："撒莱的使女夏甲，你从哪里来？要往哪里去？"

这是圣经中"耶和华的使者"第一次出现。许多改革宗神学家认为，"耶和华的使者"就是道成肉身之前的基督——因为在第13节，夏甲称他为"看顾人的神"，而天使是不能被称为神的。

但更重要的是神问的那个问题："你从哪里来？要往哪里去？"

这让我想起神在伊甸园对亚当说的话："你在哪里？"（创世记3:9）神不是不知道答案——他是要让夏甲面对自己的处境。你从哪里来？从一个破碎的家庭关系中逃出来。你要往哪里去？你不知道。你一个怀孕的女奴，独自在旷野中，走在通往埃及的路上，前方是什么你完全不知道。

夏甲回答："我从我的主母撒莱面前逃出来。"

耶和华的使者对她说了三件事：第一，"你回到你主母那里，服在她手下"——这是一个艰难的命令，但也是保护：一个孕妇独自在旷野中无法存活。第二，"我必使你的后裔极其繁多，甚至不可胜数"——这是恩典的应许，与给亚伯兰的应许相呼应。第三，"你如今怀孕要生一个儿子，可以给他起名叫以实玛利，因为耶和华听见了你的苦情。"

以实玛利——"神听见"的意思。

弟兄姐妹，这个名字是整个故事的转折点。在一个没有人听她说话的世界里——撒莱苦待她，亚伯兰不管她——**神听见了。** 一个埃及女奴的哭泣，天地的主宰听见了。

夏甲就称那对她说话的耶和华为"看顾人的神"。因而说："在这里我也看见那看顾我的么？"所以这井名叫庇耳拉海莱——"那看顾我的永活者之井"。

夏甲是圣经中第一个给神起名字的人。不是亚伯拉罕，不是族长，而是一个埃及女奴。她说：你是"看顾人的神"——El Roi，"看见我的神"。

在古代世界，奴隶是不被看见的。她们是财产，不是人。但神看见了夏甲。神看见了她的痛苦，听见了她的哭泣，在旷野中亲自来寻找她。

这就是我们的神。他不是只看顾尊贵人的神，他是看顾所有受苦之人的神。诗篇34:18说："耶和华靠近伤心的人，拯救灵性痛悔的人。"

后来夏甲给亚伯兰生了一个儿子；亚伯兰给他起名叫以实玛利。夏甲给亚伯兰生以实玛利的时候，亚伯兰年八十六岁。

以实玛利出生了。但他不是应许之子。他是人的计划的产物，不是神的应许的实现。从以实玛利到以撒，还要再等十四年。

保罗后来在加拉太书4:22-26中用这个故事做了一个深刻的比喻：夏甲代表律法之约，是凭血气生的；撒拉代表恩典之约，是凭应许生的。"弟兄们，我们是凭着应许作儿女，如同以撒一样。"（加拉太书4:28）

弟兄姐妹，如果你今天正在等候神的应许，如果你已经等了很久，如果你开始想要用自己的方法来"帮助"神——请停下来。看看以实玛利。人的方法可以产生结果，但那个结果会带来几千年的冲突和痛苦。神的时间表不是你的时间表，但神的时间表永远是最好的。

同时，如果你觉得自己被忽略、被遗忘、不被看见——请记住夏甲的神。他是El Roi，看见你的神。他听见你的苦情，他在旷野中寻找你，他为你的眼泪起了一个名字——以实玛利，"神听见"。

你不是无人看顾的。永活的神看见你了。`,
  content_en: `Brothers and sisters, chapter sixteen is a story about waiting — about what happens when people can no longer wait and try to "help" God fulfill His promise through their own methods.

Now Sarai, Abram's wife, had borne him no children. She had a female Egyptian servant whose name was Hagar.

Notice this detail: Hagar was Egyptian. She was most likely one of the servants Pharaoh gave Abram when he went down to Egypt (Genesis 12:16). That trip to Egypt was itself a failure of faith — Abram left the promised land of Canaan because of famine and called his wife his sister. Now the "legacy" of that failure has returned, becoming the instrument of a new temptation.

The consequences of sin are never one-time events. A wrong decision can resurface years later in unexpected ways.

And Sarai said to Abram, "Behold now, the LORD has prevented me from bearing children. Go in to my servant; it may be that I shall obtain children by her." And Abram listened to the voice of Sarai.

This phrase — "Abram listened to the voice of Sarai" — is startling. Do you remember the Garden of Eden? "Adam... listened to the voice of his wife and ate the fruit" (Genesis 3:17). This is not to say a husband should never listen to his wife — but when a wife's suggestion contradicts God's will, the husband cannot use "submission to his wife" as an excuse to abandon spiritual responsibility. Abram knew God's promise was for Sarai to bear a child, but he chose a path that seemed more "realistic."

So, after Abram had lived ten years in the land of Canaan, Sarai, Abram's wife, took Hagar the Egyptian, her servant, and gave her to Abram her husband as a wife.

Ten years. It had been ten years since the calling, and the promised son had not come. Ten years of waiting is enough to wear away anyone's patience. Sarai's proposal was entirely legal in their culture — ancient Near Eastern laws (such as the Nuzi tablets and the Code of Hammurabi) permitted a barren wife to give her servant to her husband, and the child would be credited to the wife.

But the issue is not whether culture permits it, but whether God has spoken thus.

God's promise was clear: your offspring shall come from your own body (Genesis 15:4). God never mentioned Hagar, never mentioned a servant, never offered an alternative plan. God said: "Your very own son shall be your heir."

Brothers and sisters, this is one of the greatest temptations in the life of faith: **using human methods to fulfill God's promises.** The goal is right — to have an heir; but the method is wrong — not according to God's way, but according to human wisdom.

This temptation appears in every generation of believers. A church wants to grow, so it substitutes secular marketing strategies for prayer and preaching. An individual wants success, so he substitutes compromise and shortcuts for patience and waiting. We too easily treat "correct results" as evidence of "correct methods." But Scripture never sees it that way. **In God's kingdom, the method matters as much as the goal.**

And he went in to Hagar, and she conceived. And when she saw that she had conceived, she looked with contempt on her mistress.

Once pregnant, Hagar's attitude immediately changed. In that culture, fertility was a woman's greatest honor, and barrenness was the greatest shame. Hagar was pregnant; Sarai was not — the power dynamic reversed in an instant.

And Sarai said to Abram, "May the wrong done to me be on you! I gave my servant to your embrace, and when she saw that she had conceived, she looked on me with contempt. May the LORD judge between you and me!"

The pain here is multi-layered. Sarai initiated the whole arrangement, yet she now suffers from its consequences. She shifts the blame to Abram — "May the wrong done to me be on you!" — when in fact she herself proposed the plan. One characteristic of sin is this: when consequences arrive, we always want someone else to take responsibility.

Abram's response is equally disappointing. He said: "Behold, your servant is in your power; do to her as you please." He completely withdrew, pushing responsibility back to Sarai. As head of the household, he was unwilling to bear the consequences of the decision, nor was he willing to protect Hagar — a vulnerable person under his authority.

Then Sarai dealt harshly with her, and she fled from her.

**And then came the most moving scene of the entire chapter.**

The angel of the LORD found her by a spring of water in the wilderness, the spring on the way to Shur. And he said, "Hagar, servant of Sarai, where have you come from and where are you going?"

This is the first appearance of "the angel of the LORD" in Scripture. Many Reformed theologians believe the angel of the LORD is the pre-incarnate Christ — because in verse 13, Hagar calls him "a God of seeing," and no mere angel can be called God.

But more important is the question God asked: "Where have you come from and where are you going?"

This reminds me of what God said to Adam in the Garden of Eden: "Where are you?" (Genesis 3:9). God did not lack the answer — He wanted Hagar to face her own situation. Where have you come from? From a broken household relationship. Where are you going? You don't know. You are a pregnant slave woman, alone in the wilderness, walking toward Egypt, with no idea what lies ahead.

Hagar answered: "I am fleeing from my mistress Sarai."

The angel of the LORD told her three things. First: "Return to your mistress and submit to her" — a difficult command, but also protection: a pregnant woman alone in the wilderness could not survive. Second: "I will surely multiply your offspring so that they cannot be numbered for multitude" — a gracious promise, echoing the promise given to Abram. Third: "Behold, you are pregnant and shall bear a son. You shall call his name Ishmael, because the LORD has listened to your affliction."

Ishmael — meaning "God hears."

Brothers and sisters, this name is the turning point of the entire story. In a world where no one listened to her — Sarai oppressed her, Abram ignored her — **God heard.** The cry of an Egyptian slave woman reached the ears of the Lord of heaven and earth.

So she called the name of the LORD who spoke to her, "You are a God of seeing," for she said, "Truly here I have seen him who looks after me." Therefore the well was called Beer-lahai-roi — "the well of the Living One who sees me."

Hagar was the first person in Scripture to give God a name. Not Abraham, not the patriarchs — but an Egyptian slave woman. She said: You are El Roi — "the God who sees me."

In the ancient world, slaves were unseen. They were property, not persons. But God saw Hagar. God saw her pain, heard her weeping, and personally came to seek her in the wilderness.

This is our God. He is not a God who only looks after the noble; He is a God who looks after all who suffer. Psalm 34:18 says: "The LORD is near to the brokenhearted and saves the crushed in spirit."

And Hagar bore Abram a son, and Abram called the name of his son, whom Hagar bore, Ishmael. Abram was eighty-six years old when Hagar bore Ishmael to Abram.

Ishmael was born. But he was not the son of promise. He was the product of human planning, not the fulfillment of God's promise. From Ishmael to Isaac, there would be another fourteen years of waiting.

Paul later used this story in Galatians 4:22-26 as a profound allegory: Hagar represents the covenant of law, born according to the flesh; Sarah represents the covenant of grace, born according to promise. "Now you, brothers, like Isaac, are children of promise." (Galatians 4:28)

Brothers and sisters, if today you are waiting for God's promise, if you have been waiting a long time, if you are beginning to think about "helping" God with your own methods — please stop. Look at Ishmael. Human methods can produce results, but those results will bring millennia of conflict and pain. God's timetable is not your timetable, but God's timetable is always the best.

At the same time, if you feel overlooked, forgotten, unseen — remember Hagar's God. He is El Roi, the God who sees you. He hears your affliction, He seeks you in the wilderness, He has given a name to your tears — Ishmael, "God hears."

You are not uncared for. The living God sees you.`,
  historyContext_zh: `撒莱将使女给丈夫为妾的做法，在古代近东法律中有据可循。努兹文书（约公元前1500年）明确规定：不育的妻子应为丈夫提供一个使女来生育后嗣。汉谟拉比法典第146条也有类似规定。"书珥路"是从迦南到埃及的商路，说明夏甲逃跑的方向是回埃及老家。庇耳拉海莱井位于加低斯和巴列之间，即今天的内盖夫沙漠地区。`,
  historyContext_en: `Sarai's practice of giving her servant to her husband was well attested in ancient Near Eastern law. The Nuzi tablets (c. 1500 BC) explicitly stipulate that a barren wife should provide a servant to bear an heir for her husband. The Code of Hammurabi (Law 146) contains similar provisions. The "way to Shur" was the trade route from Canaan to Egypt, indicating Hagar was heading back toward her homeland. Beer-lahai-roi was located between Kadesh and Bered, in the area of today's Negev desert.`,
  structure_zh: `全章分三段：1-6节（人的计划——撒莱给夏甲）；7-14节（神的介入——耶和华的使者寻找夏甲）；15-16节（结果——以实玛利出生）。核心转折在第7节"耶和华的使者遇见她"——从人的失败转向神的怜悯。两个命名构成首尾呼应：以实玛利（"神听见"）和庇耳拉海莱（"看顾我的永活者之井"），突出神既听见又看见。`,
  structure_en: `The chapter divides into three sections: verses 1-6 (human planning — Sarai gives Hagar); verses 7-14 (divine intervention — the angel of the LORD finds Hagar); verses 15-16 (the outcome — Ishmael's birth). The pivotal turn comes at verse 7, "The angel of the LORD found her" — shifting from human failure to divine mercy. Two namings form an inclusio: Ishmael ("God hears") and Beer-lahai-roi ("the well of the Living One who sees me"), highlighting that God both hears and sees.`,
  theology_zh: `人的方法不能成就神的应许——以实玛利是血气之子，非应许之子（加4:23）；神的主权怜悯超越人的等级——他看顾一个埃及女奴；耶和华的使者是旧约中基督的显现（Christophany）；神在人的失败中仍然掌权，将人的错误纳入他更大的计划；等候神的时间是信心的核心操练。`,
  theology_en: `Human methods cannot fulfill God's promises — Ishmael is the child of the flesh, not of promise (Galatians 4:23); God's sovereign mercy transcends human hierarchy — He cares for an Egyptian slave; the angel of the LORD is a Christophany in the Old Testament; God remains sovereign even in human failure, incorporating human errors into His larger plan; waiting on God's timing is a core exercise of faith.`,
  christShadow_zh: `耶和华的使者在旷野寻找逃亡的夏甲，这是基督寻找失丧之人的预表——"人子来，为要寻找，拯救失丧的人"（路加福音19:10）。神主动到旷野中寻找一个被遗弃的女奴，正如基督来到世间寻找被罪遗弃的罪人。以实玛利的名字"神听见"也预指基督的代求职分——"他是长远活着，替他们祈求"（希伯来书7:25）。`,
  christShadow_en: `The angel of the LORD seeking the fleeing Hagar in the wilderness foreshadows Christ seeking the lost — "For the Son of Man came to seek and to save the lost" (Luke 19:10). God went into the wilderness to find an abandoned slave woman, just as Christ came into the world to find sinners abandoned by sin. Ishmael's name, "God hears," also prefigures Christ's intercessory office — "He always lives to make intercession for them" (Hebrews 7:25).`,
});
readings.push({
  book: '创世记', bookEn: 'Genesis', chapter: 17,
  publishDate: '2026-03-10',
  title: '割礼之约', titleEn: 'The Covenant of Circumcision',
  author: '摩西', authorEn: 'Moses',
  scripture: '创世记 17:1-27 / Genesis 17:1-27',
  content_zh: `弟兄姐妹，从第十六章到第十七章之间，有十三年的沉默。

亚伯兰八十六岁生了以实玛利，九十九岁时耶和华才再次向他显现。十三年，神没有说话。十三年里，亚伯兰大概以为以实玛利就是应许之子了。他用自己的方法"帮"了神一把，似乎也得到了结果。日子一天天过去，以实玛利渐渐长大，亚伯兰也许已经安于现状了。

但神的沉默不是遗忘。神的等待有他的时间。

亚伯兰年九十九岁的时候，耶和华向他显现，对他说："我是全能的神。你当在我面前作完全人。"

"全能的神"——希伯来文是El Shaddai。这是神第一次用这个名字启示自己。El Shaddai，全能者，意思是：没有任何事超出我的能力。你的妻子九十岁不能生育？在El Shaddai面前，这不是问题。你的身体已经如同死人？在全能者面前，死人也能复活。

"你当在我面前作完全人"——这里的"完全"不是无罪完美，而是全心全意、毫无保留的委身。神的意思是：不要再用自己的方法了。不要再靠夏甲了。完全信靠我。

然后神宣布了一系列改变一切的事情。

第一，改名。"从此以后，你的名不再叫亚伯兰，要叫亚伯拉罕，因为我已立你作多国的父。"

亚伯兰（Abram）的意思是"尊贵的父"；亚伯拉罕（Abraham）的意思是"多国的父"。想象一下这个场景：一个九十九岁的老人，只有一个儿子（还是使女生的），神却要他从今天开始叫"多国的父"。每次有人叫他的名字，都是在提醒他一个尚未实现的应许。

在古代近东世界，改名意味着身份的根本转变。神不是给亚伯兰一个外号，而是重新定义他的身份。你不再是你自己了。你是我所命名的人。你的身份从今天开始由我的应许来定义，不是由你的现实来定义。

弟兄姐妹，这也是每一个基督徒的经历。当你信主的那一刻，你的身份就被重新定义了。你不再是罪人，你是圣徒。你不再是孤儿，你是神的儿女。世界看你还是老样子，但神已经给你起了新名字。

第二，立约。"我要与你并你世世代代的后裔坚立我的约，作永远的约，是要作你和你后裔的神。"

注意这句话的核心："是要作你和你后裔的神。"这是整本圣经中恩典之约的公式。从亚伯拉罕开始，一直到新约，神反复说的就是这句话："我要作他们的神，他们要作我的子民。"（耶利米书31:33；希伯来书8:10）这不仅仅是一个法律条文，这是一个关系的宣告——全能的神要作你的神，亲自与你同在，亲自负责你的一切。

第三，赐地。"我要将你现在寄居的地，就是迦南全地，赐给你和你的后裔永远为业。"

第四，也是最令人瞩目的：割礼。

"你们所有的男子都要受割礼；这就是我与你并你的后裔所立的约，是你们所当遵守的。你们都要受割礼；这是我与你们立约的证据。"

割礼是什么？从外在来说，它是在男性身体上做一个永久的记号。从神学意义上说，它是约的记号和印证——就像后来的洗礼一样。

韦敏斯德信条教导我们：旧约的割礼和新约的洗礼，在本质上是同一个属灵实际的不同记号。割礼指向的是"心的割礼"——除去罪的污秽，与神立约归属于他。保罗在罗马书4:11说，割礼是亚伯拉罕"未受割礼的时候因信称义的印证"——注意，亚伯拉罕是先因信称义（创世记15:6），后来才受割礼。信在先，记号在后。割礼不能使人称义，正如洗礼不能使人得救——唯独信心才是与神立约的根基。

"生下来第八日，都要受割礼。"第八天——在圣经的数字象征中，八代表新的开始（七是完全，八是超越完全的新起点）。基督在七日的第一日复活，开启了新创造。割礼在第八天，指向那个新的开始。

然后神又做了一件事。

"你的妻子撒莱不可再叫撒莱，她的名要叫撒拉。"

撒莱（Sarai）和撒拉（Sarah）都是"公主"的意思，但形式不同。神给撒拉也改了名，因为应许不只是关于亚伯拉罕，也是关于撒拉。"我必赐福给她，也要使你从她得一个儿子。我要赐福给她，她也要作多国之母；必有百姓的君王从她而出。"

亚伯拉罕就俯伏在地喜笑，心里说："一百岁的人还能得孩子么？撒拉已经九十岁了，还能生养么？"

亚伯拉罕笑了。这个笑是什么意思？有人说是不信的笑，有人说是惊喜的笑。我更倾向于后者——因为紧接着他说的话不是质疑神，而是为以实玛利求情："但愿以实玛利活在你面前。"

他不是说"我不信"，他是说"那以实玛利怎么办？"他已经爱了以实玛利十三年了。他是一个父亲，他不愿意放弃自己的儿子。

神的回答很清楚："不然，你妻子撒拉要给你生一个儿子，你要给他起名叫以撒。"以撒——Yitzhak——"他笑了"。神用亚伯拉罕的笑声来命名应许之子。每次叫以撒的名字，都在说：当初你笑了，但看看神做了什么。

但神也没有抛弃以实玛利："至于以实玛利，我也应允你：我必赐福给他，使他昌盛，极其繁多。他必生十二个族长；我也要使他成为大国。"

这里有一个重要的区分：以实玛利有神的祝福，但没有约的应许。应许之约只与以撒坚定。神爱以实玛利，但拣选的线路经过以撒。这不是因为以撒比以实玛利好，而是因为神的主权拣选。"双子还没有生下来，善恶还没有做出来，只因要显明神拣选人的旨意，不在乎人的行为，乃在乎召人的主。"（罗马书9:11-12）

正当那日，亚伯拉罕遵着神的命，给他的儿子以实玛利和家里的一切男子都行了割礼。亚伯拉罕受割礼的时候年九十九岁。

九十九岁接受割礼。这需要多大的信心和顺服。一个近百岁的老人，当天就执行了神的命令——不是等到明天，不是先想一想，而是"正当那日"。

弟兄姐妹，第十七章教导我们几件极其重要的事。

第一，神的应许不会因为人的失败而改变。亚伯拉罕在第十六章用了人的方法，生了以实玛利——但神没有因此废弃他的应许。十三年的沉默之后，神回来了，而且带来了更大、更明确的应许。你的失败不能阻止神的计划。

第二，神给他的子民新的身份。改名不是形式，是实质。你是谁，由神说了算，不是由你的过去说了算。

第三，约有记号。割礼是旧约的记号，洗礼是新约的记号。记号不是约的本身，但记号是约的可见证据。韦敏斯德小要理问答第94问教导我们，洗礼是"表明和印证我们被接在恩典之约里面"的圣礼。

第四，神的拣选是主权的。以撒被拣选不是因为他的功德，而是因为神的旨意。这是改革宗神学的核心：救恩从始至终都是神的恩典，不是人的功劳。

弟兄姐妹，如果你今天觉得自己的过去太破碎、太多失败——请听神对亚伯拉罕说的话："我是全能的神。"El Shaddai。没有什么事在他是做不到的。他能让九十九岁的老人改名，能让九十岁的妇人生子，能让你的废墟变成新的开始。

他已经给了你新名字。你是他的儿女。`,
  content_en: `Brothers and sisters, between chapter sixteen and chapter seventeen, there are thirteen years of silence.

Abram was eighty-six when Ishmael was born. He was ninety-nine when the LORD appeared to him again. Thirteen years in which God did not speak. During those thirteen years, Abram probably assumed Ishmael was the child of promise. He had "helped" God with his own methods and seemed to have gotten results. Days passed, Ishmael grew up, and Abram may have settled into the status quo.

But God's silence is not forgetfulness. God's waiting has His own timing.

When Abram was ninety-nine years old the LORD appeared to Abram and said to him, "I am God Almighty; walk before me, and be blameless."

"God Almighty" — in Hebrew, El Shaddai. This is the first time God reveals Himself by this name. El Shaddai, the Almighty, meaning: nothing is beyond My power. Your wife is ninety and cannot bear children? Before El Shaddai, this is not a problem. Your body is as good as dead? Before the Almighty, even the dead can rise.

"Walk before me, and be blameless" — "blameless" here does not mean sinless perfection, but wholehearted, unreserved commitment. God is saying: stop using your own methods. Stop relying on Hagar. Trust Me completely.

Then God announced a series of things that would change everything.

First, a new name. "No longer shall your name be called Abram, but your name shall be Abraham, for I have made you the father of a multitude of nations."

Abram means "exalted father"; Abraham means "father of a multitude." Imagine the scene: a ninety-nine-year-old man with only one son (born of a servant), yet God tells him to be called "father of a multitude" from this day forward. Every time someone calls his name, it reminds him of a promise not yet fulfilled.

In the ancient Near East, renaming signified a fundamental transformation of identity. God was not giving Abram a nickname — He was redefining who he was. You are no longer who you were. You are the one I have named. From today, your identity is defined by My promise, not by your reality.

Brothers and sisters, this is the experience of every Christian. The moment you believed, your identity was redefined. You are no longer a sinner; you are a saint. You are no longer an orphan; you are a child of God. The world still sees you as you were, but God has already given you a new name.

Second, the covenant. "And I will establish my covenant between me and you and your offspring after you throughout their generations for an everlasting covenant, to be God to you and to your offspring after you."

Notice the heart of this statement: "to be God to you and to your offspring." This is the covenant formula of the entire Bible. From Abraham onward, through the New Testament, God repeatedly says this: "I will be their God, and they shall be my people" (Jeremiah 31:33; Hebrews 8:10). This is not merely a legal provision — it is a relational declaration. The Almighty God will be your God, personally present with you, personally responsible for all your needs.

Third, the land. "And I will give to you and to your offspring after you the land of your sojournings, all the land of Canaan, for an everlasting possession."

Fourth, and most striking of all: circumcision.

"Every male among you shall be circumcised. You shall be circumcised in the flesh of your foreskins, and it shall be a sign of the covenant between me and you."

What is circumcision? Outwardly, it is a permanent mark on the male body. Theologically, it is the sign and seal of the covenant — just as baptism would later become.

The Westminster Confession teaches us that Old Testament circumcision and New Testament baptism are, in essence, different signs of the same spiritual reality. Circumcision points to "circumcision of the heart" — the removal of sin's defilement, and covenant belonging to God. Paul says in Romans 4:11 that circumcision was a "seal of the righteousness that [Abraham] had by faith while he was still uncircumcised" — note carefully: Abraham was justified by faith first (Genesis 15:6) and circumcised later. Faith comes first; the sign follows. Circumcision could not make anyone righteous, just as baptism cannot save anyone — faith alone is the foundation of our covenant relationship with God.

"Every male throughout your generations... whether born in your house or bought with your money... He who is eight days old among you shall be circumcised." The eighth day — in biblical numerology, eight represents new beginning (seven is completion; eight is the new start beyond completion). Christ rose on the first day of the week, inaugurating the new creation. Circumcision on the eighth day points to that new beginning.

Then God did one more thing.

"As for Sarai your wife, you shall not call her name Sarai, but Sarah shall be her name."

Sarai and Sarah both mean "princess," but in different forms. God renamed Sarah too, because the promise concerned not only Abraham but also Sarah. "I will bless her, and moreover, I will give you a son by her. I will bless her, and she shall become nations. Kings of peoples shall come from her."

Then Abraham fell on his face and laughed and said to himself, "Shall a child be born to a man who is a hundred years old? Shall Sarah, who is ninety years old, bear a child?"

Abraham laughed. What did this laughter mean? Some say it was the laugh of unbelief; others say it was the laugh of astonished joy. I lean toward the latter — because what he said next was not a challenge to God but a plea for Ishmael: "Oh that Ishmael might live before you!"

He was not saying "I don't believe." He was saying "What about Ishmael?" He had loved Ishmael for thirteen years. He was a father; he could not abandon his son.

God's answer was clear: "No, but Sarah your wife shall bear you a son, and you shall call his name Isaac." Isaac — Yitzhak — "he laughs." God named the son of promise after Abraham's laughter. Every time Isaac's name was spoken, it said: you laughed then, but look what God has done.

Yet God did not abandon Ishmael: "As for Ishmael, I have heard you; behold, I have blessed him and will make him fruitful and multiply him greatly. He shall father twelve princes, and I will make him into a great nation."

Here is a crucial distinction: Ishmael received God's blessing but not the covenant promise. The covenant promise was established with Isaac alone. God loved Ishmael, but the line of election ran through Isaac. This was not because Isaac was better than Ishmael, but because of God's sovereign election. "Though they were not yet born and had done nothing either good or bad — in order that God's purpose of election might continue, not because of works but because of him who calls." (Romans 9:11-12)

That very day Abraham took Ishmael his son and all those born in his house and circumcised them. Abraham was ninety-nine years old when he was circumcised.

Circumcised at ninety-nine. Think of the faith and obedience this required. A man nearly a hundred years old, and he carried out God's command on the same day — not the next day, not after thinking it over, but "that very day."

Brothers and sisters, chapter seventeen teaches us several supremely important truths.

First, God's promises do not change because of human failure. Abraham used human methods in chapter sixteen and fathered Ishmael — but God did not revoke His promise. After thirteen years of silence, God returned with an even greater, even more explicit promise. Your failures cannot stop God's plan.

Second, God gives His people a new identity. Renaming is not a formality — it is substance. Who you are is determined by God's word, not by your past.

Third, the covenant has a sign. Circumcision was the sign of the old covenant; baptism is the sign of the new. The sign is not the covenant itself, but it is the visible evidence of the covenant. Westminster Shorter Catechism Q94 teaches that baptism is a sacrament "signifying and sealing our ingrafting into Christ."

Fourth, God's election is sovereign. Isaac was chosen not for his merit but according to God's purpose. This is the heart of Reformed theology: salvation from first to last is God's grace, not human achievement.

Brothers and sisters, if today you feel your past is too broken, too full of failures — hear what God said to Abraham: "I am God Almighty." El Shaddai. Nothing is impossible for Him. He can rename a ninety-nine-year-old man, He can give a ninety-year-old woman a son, He can turn your ruins into a new beginning.

He has already given you a new name. You are His child.`,
  historyContext_zh: `El Shaddai（全能的神）是神在族长时期的主要称呼（出埃及记6:3）。割礼在古代近东并非以色列独有——埃及人也行割礼——但以色列的割礼独特之处在于它的约的含义：不是成年礼，而是婴儿出生第八天就施行的约的记号。亚伯拉罕时代的迦南地处于埃及和美索不达米亚两大文明之间的走廊地带，改名仪式在古代条约中常见，代表宗主对附庸的主权宣告。`,
  historyContext_en: `El Shaddai ("God Almighty") was God's primary self-designation during the patriarchal period (Exodus 6:3). Circumcision was not unique to Israel in the ancient Near East — Egyptians also practiced it — but Israelite circumcision was distinctive in its covenantal meaning: not a rite of passage into adulthood, but a covenant sign administered on the eighth day of a male infant's life. Canaan in Abraham's time lay along the corridor between the two great civilizations of Egypt and Mesopotamia. Renaming ceremonies were common in ancient treaties, representing a suzerain's sovereign claim over a vassal.`,
  structure_zh: `全章结构：1-8节（约的宣告——改名、应许后裔和土地）；9-14节（约的记号——割礼的命令）；15-22节（约的具体化——撒拉改名、应许以撒、以实玛利的祝福）；23-27节（约的执行——当日即行割礼）。核心经文是第7节"作永远的约，是要作你和你后裔的神"——这是圣经恩典之约的标准公式。`,
  structure_en: `The chapter's structure: verses 1-8 (covenant announcement — renaming, promise of offspring and land); verses 9-14 (covenant sign — the command of circumcision); verses 15-22 (covenant specification — Sarah renamed, Isaac promised, Ishmael blessed); verses 23-27 (covenant execution — circumcision performed that very day). The core verse is v. 7: "an everlasting covenant, to be God to you and to your offspring" — this is the standard formula of the biblical covenant of grace.`,
  theology_zh: `割礼是恩典之约的记号和印证，对应新约的洗礼（西2:11-12）；神的主权拣选——以撒被拣选不因功德（罗9:11-12）；约的公式"作你的神"贯穿两约（耶31:33，来8:10）；信心先于记号——亚伯拉罕先因信称义后受割礼（罗4:11）；神的应许不因人的失败而废弃（罗11:29）。韦敏斯德信条第28章论洗礼：洗礼是新约中恩典之约的圣礼，代替了旧约中的割礼。`,
  theology_en: `Circumcision is the sign and seal of the covenant of grace, corresponding to baptism in the New Testament (Colossians 2:11-12); God's sovereign election — Isaac was chosen not by merit (Romans 9:11-12); the covenant formula "to be your God" runs through both Testaments (Jeremiah 31:33; Hebrews 8:10); faith precedes the sign — Abraham was justified by faith before circumcision (Romans 4:11); God's promises are not nullified by human failure (Romans 11:29). Westminster Confession chapter 28 on baptism: baptism is the New Testament sacrament of the covenant of grace, replacing Old Testament circumcision.`,
  christShadow_zh: `割礼指向"心的割礼"——基督借着圣灵在信徒心中除去罪的权势（罗2:29，西2:11）。亚伯拉罕改名预表信徒在基督里得新身份——"若有人在基督里，他就是新造的人"（林后5:17）。"作你和你后裔的神"这个应许，最终在基督里实现——"你们既属乎基督，就是亚伯拉罕的后裔，是照着应许承受产业的了"（加3:29）。以撒的名字"他笑了"预表福音的喜乐——在人看来不可能的事，神成就了。`,
  christShadow_en: `Circumcision points to "circumcision of the heart" — Christ, through the Holy Spirit, removes the dominion of sin in believers (Romans 2:29; Colossians 2:11). Abraham's renaming foreshadows the new identity believers receive in Christ — "If anyone is in Christ, he is a new creation" (2 Corinthians 5:17). The promise "to be God to you and your offspring" finds ultimate fulfillment in Christ — "And if you are Christ's, then you are Abraham's offspring, heirs according to promise" (Galatians 3:29). Isaac's name, "he laughs," prefigures the joy of the gospel — what seems impossible to man, God accomplishes.`,
});
readings.push({
  book: '创世记', bookEn: 'Genesis', chapter: 18,
  publishDate: '2026-03-11',
  title: '三位来客', titleEn: 'Three Visitors',
  author: '摩西', authorEn: 'Moses',
  scripture: '创世记 18:1-33 / Genesis 18:1-33',
  content_zh: `弟兄姐妹，第十八章是创世记中最奇妙的一章之一。在这里，永恒的神坐在一棵橡树下，吃了一顿人间的饭。

耶和华在幔利橡树那里向亚伯拉罕显现出来。那时正热，亚伯拉罕坐在帐棚门口，举目观看，见有三个人在对面站着。

请注意经文的写法：先说"耶和华向亚伯拉罕显现"，然后说亚伯拉罕看见"三个人"。这不是矛盾——这是启示的层次。亚伯拉罕的肉眼看见的是三个旅客，但信心的眼睛看见的是耶和华自己。

他一见，就从帐棚门口跑去迎接他们，俯伏在地，说："我主，我若在你眼前蒙恩，求你不要离开仆人往前去。"

一个九十九岁的老人，在中午最热的时候，看见三个陌生人——然后他跑过去。跑。希伯来文用的是"奔跑"。在古代近东的文化中，年长者是不跑的，跑是不体面的事。但亚伯拉罕跑了。

他说："容我拿点水来，你们洗洗脚，在树下歇息歇息。我再拿一点饼来，你们可以加添心力。"

然后经文告诉我们他实际做了什么：他急忙进帐棚见撒拉，说"你速速拿三细亚细面调和做饼"——三细亚大约相当于二十多公斤的面粉，这可不是"一点饼"。然后他又跑到牛群里，牵了一只又嫩又好的牛犊来，交给仆人预备。最后他又取了奶油和奶。

亚伯拉罕说的是"一点饼"，做的是一顿盛宴。这就是真正的好客之道——不是口头上的客气，而是行动上的慷慨。希伯来书13:2说："不可忘记用爱心接待客旅；因为曾有接待客旅的，不知不觉就接待了天使。"这节经文直接引用的就是亚伯拉罕的故事。

亚伯拉罕又取了奶油和奶，并预备好的牛犊来，摆在他们面前，自己在树下站在旁边，他们就吃了。

自己站在旁边——他没有和客人一起坐下来吃。在古代近东，这是最高规格的接待：主人亲自站立侍候，像仆人一样服务客人。

弟兄姐妹，想一想这个画面：全能的神，天地的创造者，坐在一棵橡树下面，吃着奶油和牛犊。这不是神需要吃饭——这是神俯就人的恩典。他愿意以人的方式来到人中间，吃人的食物，在人的帐棚下歇息。这预表了什么？道成肉身。"道成了肉身，住在我们中间。"（约翰福音1:14）神不是遥不可及的——他来了，来到你的帐棚门口。

然后，他们问："你妻子撒拉在哪里？"

注意：他们知道撒拉的名字。亚伯拉罕没有告诉他们——但他们知道。这已经不是普通的旅客了。

三人中有一位说："到明年这时候，我必要回到你这里；你的妻子撒拉必生一个儿子。"

撒拉在那人后边的帐棚门口也听见了这话。亚伯拉罕和撒拉年纪老迈，撒拉的月经已断绝了。

撒拉心里暗笑，说："我既已衰败，我主也老迈，岂能有这喜事呢？"

撒拉笑了——是心里暗笑，不是出声。没有人看见她笑。但耶和华说："撒拉为什么暗笑，说：'我既已年老，果真能生养么？'"

这句话暴露了说话者的身份。能读人心中隐秘思想的，只有神。"耶和华岂有难成的事么？"

这是整章——也许是整卷创世记——最重要的一句话。**"耶和华岂有难成的事么？"** 希伯来文的原文更有力："对耶和华来说，有什么事太奇妙么？"

这个问题不需要回答，因为答案是显而易见的：没有。没有任何事对耶和华来说太难。九十岁的妇人生子？不难。死人复活？不难。罪人称义？不难。你觉得你的处境无解？"耶和华岂有难成的事么？"

撒拉就害怕，不承认，说："我没有笑。"那位说："不然，你实在笑了。"

撒拉否认了。但神没有因此惩罚她。他只是温和地纠正："不然，你实在笑了。"神知道我们的软弱。他知道信心的成长需要时间。一年之后，撒拉会再次笑——但那次是喜乐的笑。

**然后故事转入了一个完全不同的方向。**

三人起行，向所多玛观看，亚伯拉罕也与他们同行。耶和华说："我所要作的事岂可瞒着亚伯拉罕呢？"

这句话揭示了亚伯拉罕的特殊地位。神不是必须告诉亚伯拉罕——但他选择告诉他。"耶和华与敬畏他的人亲密；他必将自己的约指示他们。"（诗篇25:14）亚伯拉罕不仅仅是一个蒙应许的人，他是神的朋友（雅各书2:23）。朋友之间不隐瞒。

耶和华说："所多玛和蛾摩拉的罪恶甚重，声闻于我。我现在要下去，察看他们所行的，果然尽像那达到我耳中的声音一样么？若是不然，我也必知道。"

二人转身离开那里，向所多玛去——注意，是两个人走了，留下的那一位是耶和华。

**亚伯拉罕仍旧站在耶和华面前。**

然后开始了圣经中最大胆、最感人的一段代祷。

亚伯拉罕近前来，说："无论善恶，你都要剿灭么？假若那城里有五十个义人，你还剿灭那地方么？不为城里这五十个义人饶恕其中的人么？将义人与恶人同杀，将义人与恶人一样看待，这断不是你所行的。审判全地的主岂不行公义么？"

**"审判全地的主岂不行公义么？"** 这是整本圣经中对神公义最深刻的宣告之一。亚伯拉罕不是在质疑神——他是在诉诸神自己的本性。他知道神是公义的，所以他有信心向神求情。

然后他从五十个义人开始，一路求到十个。每一次，他都说："求主不要动怒。"每一次，神都答应了。

五十个？行。四十五个？行。四十个？行。三十个？行。二十个？行。十个？行。

亚伯拉罕停在了十个。他没有继续问下去。也许他以为，罗得一家加上女婿们，至少有十个义人吧。

但事实是：所多玛连十个义人都没有。

弟兄姐妹，这段代祷教导我们什么？

第一，祷告是与神对话，不是向一堵墙说话。神不仅听，他还回应。他愿意和亚伯拉罕反复商量——不是因为神需要被说服，而是因为神喜悦他儿女的祷告。

第二，代祷的基础是神的公义，不是人的功劳。亚伯拉罕没有说"看在我的份上"，他说的是"审判全地的主岂不行公义么"。真正的代祷是诉诸神自己的性情。

第三，即便是代祷也有极限。亚伯拉罕求到了十个义人，但所多玛连十个都没有。然而，神仍然在审判中记念了亚伯拉罕——第十九章29节说："当神毁灭平原诸城的时候，他记念亚伯拉罕，正在倾覆罗得所住之城的时候，就打发罗得从倾覆之中出来。"

亚伯拉罕的代祷"失败"了吗？没有。虽然所多玛没有被赦免，但罗得被救了出来——因为神记念亚伯拉罕的代求。代祷的果效可能不是你期望的形式，但代祷永远不会落空。

弟兄姐妹，这一章的两个场景——幔利橡树下的盛宴和为所多玛的代求——看似不相关，实则有深刻的联系。在盛宴中，我们看见神俯就到人的层面来；在代祷中，我们看见人被提升到与神对话的层面。这就是恩典的双向运动：神下来，人上去。

而这一切，最终在基督里完全实现。基督是真正从天上下来与人同吃同住的神（约翰福音1:14）。基督也是那位真正的代求者——"他是长远活着，替他们祈求"（希伯来书7:25）。亚伯拉罕为所多玛求到十个义人就停了，但基督为全世界的罪人代求，而且他的代求永不止息。

"耶和华岂有难成的事么？"

没有。绝对没有。`,
  content_en: `Brothers and sisters, chapter eighteen is one of the most wondrous chapters in all of Genesis. Here, the eternal God sat beneath an oak tree and ate a human meal.

The LORD appeared to Abraham by the oaks of Mamre, as he sat at the door of his tent in the heat of the day. He lifted up his eyes and looked, and behold, three men were standing in front of him.

Notice how the text is written: it first says "The LORD appeared to Abraham," then says Abraham saw "three men." This is not a contradiction — it is layers of revelation. Abraham's physical eyes saw three travelers, but the eyes of faith saw the LORD Himself.

When he saw them, he ran from the tent door to meet them and bowed himself to the earth and said, "O Lord, if I have found favor in your sight, do not pass by your servant."

A ninety-nine-year-old man, in the heat of midday, sees three strangers — and he runs. Runs. The Hebrew uses the word for "rushing." In ancient Near Eastern culture, an elder does not run — running was undignified. But Abraham ran.

He said: "Let a little water be brought, and wash your feet, and rest yourselves under the tree, while I bring a morsel of bread, that you may refresh yourselves."

Then the text tells us what he actually did: he hurried into the tent and told Sarah, "Quick! Three seahs of fine flour! Knead it, and make cakes" — three seahs amounts to over twenty kilograms of flour. That is no "morsel of bread." Then he ran to the herd and took a calf, tender and good, and gave it to a young man to prepare. And he took curds and milk as well.

Abraham said "a morsel of bread" but prepared a feast. This is true hospitality — not verbal politeness, but generous action. Hebrews 13:2 says: "Do not neglect to show hospitality to strangers, for thereby some have entertained angels unawares." This verse directly references Abraham's story.

Then he took curds and milk and the calf that he had prepared, and set it before them. And he stood by them under the tree while they ate.

He stood by them — he did not sit down to eat with his guests. In the ancient Near East, this was the highest form of hospitality: the host standing in personal attendance, serving the guests as a servant would.

Brothers and sisters, picture this scene: Almighty God, Creator of heaven and earth, sitting under an oak tree, eating curds and veal. This is not because God needed food — this is the grace of God condescending to humanity. He was willing to come among people in human fashion, eat human food, rest under a human tent. What does this foreshadow? The incarnation. "And the Word became flesh and dwelt among us." (John 1:14) God is not remote and unreachable — He came, right to your tent door.

Then they asked: "Where is Sarah your wife?"

Notice: they knew Sarah's name. Abraham had not told them — yet they knew. These were no ordinary travelers.

One of them said, "I will surely return to you about this time next year, and Sarah your wife shall have a son."

Sarah was listening at the tent door behind him. Now Abraham and Sarah were old, advanced in years. The way of women had ceased to be with Sarah.

So Sarah laughed to herself, saying, "After I am worn out, and my lord is old, shall I have pleasure?"

Sarah laughed — silently, inwardly. No one saw her laugh. But the LORD said: "Why did Sarah laugh and say, 'Shall I indeed bear a child, now that I am old?'"

This statement revealed the speaker's identity. Only God can read the secret thoughts of the heart. "Is anything too hard for the LORD?"

This is the most important sentence in the entire chapter — perhaps in the entire book of Genesis. **"Is anything too hard for the LORD?"** The Hebrew is even more forceful: "Is any matter too wonderful for the LORD?"

This question needs no answer, because the answer is self-evident: No. Nothing is too hard for the LORD. A ninety-year-old woman bearing a child? Not too hard. The dead rising? Not too hard. Sinners justified? Not too hard. You think your situation is unsolvable? "Is anything too hard for the LORD?"

Sarah was afraid and denied it, saying, "I did not laugh." He said, "No, but you did laugh."

Sarah denied it. But God did not punish her for it. He simply corrected her gently: "No, but you did laugh." God knows our weakness. He knows that the growth of faith takes time. A year later, Sarah would laugh again — but that time it would be the laughter of joy.

**Then the story pivoted in an entirely different direction.**

The men set out from there and looked down toward Sodom. And Abraham went with them to set them on their way. The LORD said, "Shall I hide from Abraham what I am about to do?"

This statement reveals Abraham's special standing. God was not obligated to tell Abraham — but He chose to. "The friendship of the LORD is for those who fear him, and he makes known to them his covenant." (Psalm 25:14) Abraham was not merely a man of promise; he was God's friend (James 2:23). Friends do not hide things from each other.

Then the LORD said, "Because the outcry against Sodom and Gomorrah is great and their sin is very grave, I will go down to see whether they have done altogether according to the outcry that has come to me. And if not, I will know."

So the men turned from there and went toward Sodom — notice: two men left; the one who remained was the LORD.

**But Abraham still stood before the LORD.**

Then began the boldest and most moving intercession in all of Scripture.

Abraham drew near and said, "Will you indeed sweep away the righteous with the wicked? Suppose there are fifty righteous within the city. Will you then sweep away the place and not spare it for the fifty righteous who are in it? Far be it from you to do such a thing, to put the righteous to death with the wicked, so that the righteous fare as the wicked! Far be that from you! Shall not the Judge of all the earth do what is just?"

**"Shall not the Judge of all the earth do what is just?"** This is one of the most profound declarations of God's justice in all of Scripture. Abraham was not questioning God — he was appealing to God's own nature. He knew God was just, and therefore he had confidence to plead.

Then he negotiated down from fifty to ten. Each time he said, "Oh let not the Lord be angry." Each time, God agreed.

Fifty? Yes. Forty-five? Yes. Forty? Yes. Thirty? Yes. Twenty? Yes. Ten? Yes.

Abraham stopped at ten. He did not continue further. Perhaps he assumed that Lot's household plus his sons-in-law would total at least ten righteous persons.

But the truth was: Sodom did not even have ten righteous people.

Brothers and sisters, what does this intercession teach us?

First, prayer is a conversation with God, not speaking to a wall. God not only listens — He responds. He was willing to go back and forth with Abraham — not because God needed persuading, but because God delights in the prayers of His children.

Second, the foundation of intercession is God's justice, not human merit. Abraham did not say "for my sake"; he said "Shall not the Judge of all the earth do what is just?" True intercession appeals to God's own character.

Third, even intercession has its limits. Abraham pleaded down to ten righteous, but Sodom did not even have ten. Yet God still remembered Abraham amid the judgment — Genesis 19:29 says: "So it was that, when God destroyed the cities of the valley, God remembered Abraham and sent Lot out of the midst of the overthrow."

Did Abraham's intercession "fail"? No. Though Sodom was not spared, Lot was rescued — because God remembered Abraham's plea. The fruit of intercession may not take the form you expect, but intercession is never in vain.

Brothers and sisters, the two scenes in this chapter — the feast under the oaks and the intercession for Sodom — seem unrelated but are profoundly connected. At the feast, we see God condescending to the human level; in the intercession, we see a human elevated to the level of dialogue with God. This is the two-directional movement of grace: God comes down; man is lifted up.

And all of this finds its ultimate fulfillment in Christ. Christ is the true God who came down from heaven to eat and dwell with people (John 1:14). Christ is also the true Intercessor — "He always lives to make intercession for them" (Hebrews 7:25). Abraham interceded for Sodom and stopped at ten righteous; but Christ intercedes for sinners throughout the world, and His intercession never ceases.

"Is anything too hard for the LORD?"

No. Absolutely not.`,
  historyContext_zh: `幔利橡树位于今天的希伯仑附近，是亚伯拉罕长期居住之地。古代近东的待客之道被视为神圣义务——拒绝接待旅客是严重的道德过失。三细亚细面约合22升，足够做大量饼，远超三人所需，显示亚伯拉罕的慷慨。所多玛位于死海南端，考古学发现该地区确有被火与硫磺毁灭的痕迹（约公元前2000年的毁灭层）。`,
  historyContext_en: `The oaks of Mamre were near present-day Hebron, where Abraham resided for an extended period. Hospitality in the ancient Near East was regarded as a sacred obligation — refusing to host travelers was a serious moral failure. Three seahs of fine flour amounts to approximately 22 liters, enough to make a large quantity of bread, far more than three guests required, displaying Abraham's generosity. Sodom was located near the southern end of the Dead Sea; archaeological evidence suggests the region experienced destruction by fire and brimstone (destruction layers dating to approximately 2000 BC).`,
  structure_zh: `全章分两大段：1-15节（幔利橡树下的显现——接待、应许以撒、撒拉笑）；16-33节（为所多玛代求）。两段由第14节"耶和华岂有难成的事么"连接——前半段论神的大能（使不能生育的生育），后半段论神的公义（审判罪恶之城）。代求从五十递减到十，形成六轮对话的递进结构。`,
  structure_en: `The chapter has two major sections: verses 1-15 (the theophany at Mamre — hospitality, promise of Isaac, Sarah's laughter); verses 16-33 (intercession for Sodom). The two sections are linked by verse 14, "Is anything too hard for the LORD?" — the first half concerns God's power (enabling the barren to bear), the second concerns God's justice (judging a sinful city). The intercession descends from fifty to ten in six rounds of dialogue, creating a progressive structure.`,
  theology_zh: `神的亲近与俯就——全能者以人的形态来访，预表道成肉身；"耶和华岂有难成的事么"宣告神的全能；代祷的基础是神的公义本性（"审判全地的主岂不行公义么"）；神喜悦人的祷告，并在审判中记念代求者；公义与怜悯的张力在十字架上最终解决。`,
  theology_en: `God's nearness and condescension — the Almighty visits in human form, foreshadowing the incarnation; "Is anything too hard for the LORD?" declares God's omnipotence; the basis of intercession is God's just character ("Shall not the Judge of all the earth do what is just?"); God delights in human prayer and remembers the intercessor even amid judgment; the tension between justice and mercy finds its ultimate resolution at the cross.`,
  christShadow_zh: `耶和华以人的样式显现，与人同坐同吃，是道成肉身最清晰的旧约预表之一（约1:14）。亚伯拉罕为所多玛代求，预表基督为罪人的代求——但亚伯拉罕停在十个义人就停了，基督的代求却是永不止息的（来7:25）。"审判全地的主岂不行公义么"——这个公义最终在十字架上成全：神既是公义的，又是称信耶稣之人为义的（罗3:26）。`,
  christShadow_en: `The LORD appearing in human form, sitting and eating with people, is one of the clearest Old Testament foreshadowings of the incarnation (John 1:14). Abraham's intercession for Sodom foreshadows Christ's intercession for sinners — but Abraham stopped at ten righteous; Christ's intercession never ceases (Hebrews 7:25). "Shall not the Judge of all the earth do what is just?" — this justice was ultimately fulfilled at the cross: God is both just and the justifier of the one who has faith in Jesus (Romans 3:26).`,
});
readings.push({
  book: '创世记', bookEn: 'Genesis', chapter: 19,
  publishDate: '2026-03-12',
  title: '所多玛', titleEn: 'The Destruction of Sodom',
  author: '摩西', authorEn: 'Moses',
  scripture: '创世记 19:1-38 / Genesis 19:1-38',
  content_zh: `弟兄姐妹，第十九章是圣经中最黑暗的章节之一。它记载了一座城市的毁灭，一个家庭的崩塌，以及神审判的可怕现实。但即便在这样的黑暗中，恩典的光仍然照射进来。

那两个天使晚上到了所多玛；罗得正坐在所多玛城门口，看见他们，就起来迎接，脸伏于地下拜。

"坐在城门口"——在古代近东，城门口是审判和交易的地方，相当于今天的市政厅或法庭。坐在城门口意味着罗得已经成了所多玛的要人，参与城市的公共事务。彼得后书2:7-8说罗得是个义人，因所多玛人的淫行忧伤——但他仍然坐在那里。他一边忧伤，一边留在那个罪恶之城。

这是罗得一生的悲剧：他知道什么是对的，但他选择了什么是舒适的。在第十三章，当亚伯拉罕让他先选的时候，他举目观看，看见约旦河的全平原"如同耶和华的园子"，就选了那里。他一步步靠近所多玛——先是"渐渐挪移帐棚，直到所多玛"（创世记13:12），然后是住在所多玛城里，最后是坐在城门口。从远远观望到深度融入，每一步看起来都很小，但累积起来就是一个完全不同的人生方向。

罗得接待了天使，为他们预备筵席，烤无酵饼。但那天晚上发生了可怕的事：所多玛城里各处的人，连老带少，都来围住那房子，要求罗得把客人交出来。

经文说"连老带少"——这不是少数人的罪，是全城的罪。这个城市已经彻底败坏了，从年轻人到老年人，无一例外。

罗得出来，试图阻止他们。他的方法令人震惊——他提出把自己的两个女儿交给众人。这个提议无论如何都是错误的。罗得在所多玛住久了，他的道德判断已经被扭曲。他还保留着保护客人的古代荣誉感，但他保护客人的方式却是牺牲自己的女儿。在一个败坏的环境中生活太久，人的道德底线会在不知不觉中下移。

众人拒绝了，而且变本加厉："这个人来寄居，还想要作官哪！现在我们要害你比害他们更甚。"

这时天使出手了。他们把罗得拉进屋去，使门外的人眼都昏迷。

天使对罗得说："你这里还有什么人么？无论是女婿是儿女，和这城中一切属你的人，你都要将他们从这地方带出去。我们要毁灭这地方。"

罗得去告诉他的女婿们。但他女婿们却以为他说的是戏言。

弟兄姐妹，这是这个故事中最让人心碎的细节之一。罗得在所多玛住了这么多年，他的见证已经完全失去了可信度。当他说"耶和华要毁灭这城"的时候，连他自己的女婿都觉得他在开玩笑。一个在属灵上没有影响力的人，在关键时刻无法带领自己的家人。

天明了，天使催逼罗得说："起来！带着你的妻子和你在这里的两个女儿出去，免得你因这城里的罪恶同被剿灭。"

**但罗得迟延不走。**

这四个字是整章最令人痛心的。天使说"快走"，罗得却"迟延不走"。审判就在眼前，他还舍不得离开。他在所多玛有房子，有地位，有产业——他舍不得。

二人因为耶和华怜恤罗得，就拉着他的手和他妻子的手，并他两个女儿的手，把他们领出来，安置在城外。

注意：不是罗得跑出来的，是天使"拉着他的手"把他拉出来的。这是纯粹的恩典。罗得不配被救——他迟延，他舍不得，他的道德判断已经混乱——但神怜恤他。不是因为他好，而是因为"神记念亚伯拉罕"（第29节）。

天使说："逃命吧！不可回头看，也不可在平原站住。要往山上逃跑，免得你被剿灭。"

但罗得甚至在逃命的时候还在讨价还价！他说他不能逃到山上去，求天使容他逃到一个小城——琐珥。即使在恩典的紧急时刻，罗得仍然在按自己的意思来。

罗得到了琐珥，日头已经出来了。当时，**耶和华将硫磺与火从天上耶和华那里降与所多玛和蛾摩拉**，把那些城和全平原，并城里所有的居民，连地上生长的，都毁灭了。

请注意经文的用词："耶和华将硫磺与火从天上耶和华那里降下。"有些学者注意到这里提到了两次"耶和华"——一个在地上（与亚伯拉罕说话的那位），一个在天上（降下审判的那位）。这被一些教父和改革宗神学家视为三位一体的暗示。

**罗得的妻子在后边回头一看，就变成了一根盐柱。**

耶稣在路加福音17:32说："你们要回想罗得的妻子。"

为什么回头一看就变成盐柱？因为回头不只是一个物理动作——回头是心的方向。天使明确说了"不可回头看"。回头看意味着她的心还在所多玛，她还眷恋那个被审判的城市，她还舍不得离开。

罗得的妻子的身体出来了，但她的心没有出来。

这对我们每一个基督徒都是严肃的警告。蒙恩得救不只是身体离开罪的环境——是心要离开。如果你的手离开了罪，但你的心还在回望，你并没有真正离开。"手扶着犁向后看的，不配进神的国。"（路加福音9:62）

然后是这个故事最黑暗的结尾。

罗得带着两个女儿住在山洞里。大女儿对小女儿说："我们的父亲老了，地上又无人按着世上的常规进到我们这里。来！我们可以叫父亲喝酒，与他同寝。这样，我们好从他存留后裔。"

她们这样做了。大女儿生了摩押——摩押人的始祖。小女儿生了便亚米——亚扪人的始祖。

这段记载令人不忍卒读。但圣经没有遮掩它，因为圣经从不美化人性。罗得的女儿们在所多玛长大，所多玛的道德观已经渗透了她们的思想。她们的动机——存留后裔——在她们看来也许是合理的，但方法是完全错误的。

然而，即使在这样的黑暗中，神的恩典仍然令人惊叹。摩押人的后代中出了一个叫路得的女子——路得最终成为大卫王的曾祖母，进入了弥赛亚的家谱（马太福音1:5）。神能从最黑暗的罪中带出他救赎计划的线索。

亚伯拉罕清早起来，到了他从前站在耶和华面前的地方，向所多玛和蛾摩拉与平原的全地观看，不料，那地方烟气上腾，如同烧窑一般。

这是亚伯拉罕看到的景象。他昨天还在为这座城代求——今天它已经变成了灰烬。但经文紧接着说了一句极其重要的话："当神毁灭平原诸城的时候，他记念亚伯拉罕，正在倾覆罗得所住之城的时候，就打发罗得从倾覆之中出来。"

**神记念亚伯拉罕。**

弟兄姐妹，第十九章教导我们几件沉重的事。

第一，罪的后果是真实的、可怕的。所多玛不是一个寓言——它是神审判的历史事件。彼得后书2:6说神"判定所多玛、蛾摩拉，将二城倾覆，焚烧成灰，作为后世不敬虔人的鉴戒"。

第二，环境会塑造人。罗得在所多玛住久了，他的道德判断、他的属灵影响力、甚至他妻子和女儿的价值观，都被那个环境侵蚀了。"滥交是败坏善行"（哥林多前书15:33）。

第三，恩典在审判中仍然运作。罗得不配被救，但神记念亚伯拉罕。代祷的果效是真实的——即使你看不见立即的结果。

第四，离开罪要彻底。不可回头看。罗得的妻子的悲剧提醒我们：半心半意的悔改不是真悔改。

弟兄姐妹，如果你今天正在一个不该待的地方——不一定是一座城市，也许是一段关系，一个习惯，一种生活方式——请听天使的话："逃命吧！不可回头看。"不要像罗得一样迟延不走。不要像罗得的妻子一样身体出来了心还留在那里。

神今天仍然在拉你的手。就像天使拉着罗得的手一样——那是怜恤的手，是恩典的手。抓住它。不要回头。`,
  content_en: `Brothers and sisters, chapter nineteen is one of the darkest chapters in all of Scripture. It records the destruction of a city, the collapse of a family, and the terrible reality of God's judgment. Yet even in such darkness, the light of grace still shines through.

The two angels came to Sodom in the evening, and Lot was sitting in the gate of Sodom. When Lot saw them, he rose to meet them and bowed himself with his face to the earth.

"Sitting in the gate" — in the ancient Near East, the city gate was the place of judgment and commerce, the equivalent of a modern city hall or courthouse. Sitting in the gate meant Lot had become a prominent figure in Sodom, participating in the city's civic affairs. Second Peter 2:7-8 tells us Lot was a righteous man, distressed by the depraved conduct of the lawless — yet he still sat there. He was distressed, yet he remained in that wicked city.

This is the tragedy of Lot's life: he knew what was right, but he chose what was comfortable. In chapter thirteen, when Abraham let him choose first, he "lifted up his eyes" and saw the Jordan Valley — "well watered everywhere like the garden of the LORD" — and chose it. He moved closer to Sodom step by step — first "he moved his tent as far as Sodom" (Genesis 13:12), then he lived inside Sodom, and finally he sat in the gate. From distant observation to deep integration, each step seemed small, but cumulatively they added up to an entirely different life direction.

Lot hosted the angels, prepared a feast, and baked unleavened bread. But that night something terrible happened: the men of Sodom, from every quarter, both young and old, surrounded the house and demanded Lot hand over his guests.

The text says "both young and old" — this was not the sin of a few; it was the sin of the entire city. The city was thoroughly corrupt, from its youngest to its oldest, without exception.

Lot went out and tried to stop them. His method was shocking — he offered to give them his two virgin daughters. This proposal was wrong no matter how you look at it. Lot had lived in Sodom so long that his moral judgment had become distorted. He still retained the ancient honor code of protecting guests, but his method of protecting them was to sacrifice his own daughters. Living too long in a corrupt environment causes a person's moral baseline to shift downward, almost imperceptibly.

The crowd refused and grew more violent: "This fellow came to sojourn, and he has become the judge! Now we will deal worse with you than with them."

Then the angels intervened. They pulled Lot inside, shut the door, and struck the men outside with blindness.

The angels said to Lot: "Have you anyone else here? Sons-in-law, sons, daughters, or anyone you have in the city, bring them out of the place. For we are about to destroy this place."

Lot went out and told his sons-in-law. But his sons-in-law thought he was jesting.

Brothers and sisters, this is one of the most heartbreaking details in the story. Lot had lived in Sodom for so many years that his testimony had lost all credibility. When he said "The LORD is about to destroy this city," even his own sons-in-law thought he was joking. A person without spiritual influence cannot lead his own family in the moment of crisis.

When morning dawned, the angels urged Lot, saying, "Up! Take your wife and your two daughters who are here, lest you be swept away in the punishment of the city."

**But he lingered.**

These two words are the most heartbreaking in the entire chapter. The angels said "hurry"; Lot lingered. Judgment was imminent, yet he could not bring himself to leave. He had a house in Sodom, a position, possessions — he could not let go.

So the men seized him and his wife and his two daughters by the hand, the LORD being merciful to him, and they brought him out and set him outside the city.

Notice: Lot did not run out on his own. The angels "seized him by the hand" and pulled him out. This is pure grace. Lot did not deserve to be saved — he lingered, he could not let go, his moral compass was broken — but God had mercy on him. Not because Lot was good, but because "God remembered Abraham" (v. 29).

The angels said: "Escape for your life. Do not look back or stop anywhere in the valley. Escape to the hills, lest you be swept away."

But even while fleeing for his life, Lot was still negotiating! He said he could not escape to the hills and asked permission to flee to a small city — Zoar. Even in grace's most urgent moment, Lot was still doing things his own way.

When Lot reached Zoar, the sun had risen. Then **the LORD rained on Sodom and Gomorrah sulfur and fire from the LORD out of heaven.** And he overthrew those cities, and all the valley, and all the inhabitants of the cities, and what grew on the ground.

Notice the wording: "The LORD rained sulfur and fire from the LORD out of heaven." Some scholars note that "the LORD" appears twice — one on earth (the one who spoke with Abraham), one in heaven (the one who sent down judgment). Some church fathers and Reformed theologians have seen this as a hint of the Trinity.

**But Lot's wife, behind him, looked back, and she became a pillar of salt.**

Jesus said in Luke 17:32: "Remember Lot's wife."

Why did looking back turn her into a pillar of salt? Because looking back was not merely a physical action — it was the direction of her heart. The angels had explicitly said, "Do not look back." Looking back meant her heart was still in Sodom, she still longed for that city under judgment, she could not let go.

Lot's wife left Sodom in body, but her heart never left.

This is a solemn warning for every Christian. Salvation by grace is not just physically leaving the environment of sin — the heart must leave as well. If your hands have left sin but your heart keeps looking back, you have not truly departed. "No one who puts his hand to the plow and looks back is fit for the kingdom of God." (Luke 9:62)

Then came the story's darkest conclusion.

Lot went up from Zoar with his two daughters and lived in a cave. The firstborn said to the younger, "Our father is old, and there is not a man on earth to come in to us after the manner of all the earth. Come, let us make our father drink wine, and we will lie with him, that we may preserve offspring from our father."

They did so. The firstborn bore Moab — the ancestor of the Moabites. The younger bore Ben-ammi — the ancestor of the Ammonites.

This passage is painful to read. But Scripture does not conceal it, because Scripture never beautifies human nature. Lot's daughters grew up in Sodom, and Sodom's moral framework had pervaded their thinking. Their motive — preserving offspring — may have seemed reasonable to them, but the method was utterly wrong.

Yet even in such darkness, God's grace is astonishing. From the Moabite line came a woman named Ruth — who ultimately became the great-grandmother of King David and entered the genealogy of the Messiah (Matthew 1:5). God can draw the threads of His redemptive plan from the darkest of sins.

Abraham went early in the morning to the place where he had stood before the LORD. And he looked down toward Sodom and Gomorrah and toward all the land of the valley, and he looked and, behold, the smoke of the land went up like the smoke of a furnace.

This is what Abraham saw. Just yesterday he had been interceding for this city — today it was ashes. But the text immediately adds a supremely important statement: "So it was that, when God destroyed the cities of the valley, God remembered Abraham and sent Lot out of the midst of the overthrow."

**God remembered Abraham.**

Brothers and sisters, chapter nineteen teaches us several weighty truths.

First, the consequences of sin are real and terrible. Sodom is not an allegory — it is a historical event of divine judgment. Second Peter 2:6 says God "condemned the cities of Sodom and Gomorrah by burning them to ashes, making them an example of what is going to happen to the ungodly."

Second, environment shapes people. Lot lived in Sodom so long that his moral judgment, his spiritual influence, and even the values of his wife and daughters were corroded by that environment. "Bad company ruins good morals" (1 Corinthians 15:33).

Third, grace operates even within judgment. Lot did not deserve to be saved, but God remembered Abraham. The fruit of intercession is real — even when you cannot see immediate results.

Fourth, departure from sin must be thorough. Do not look back. The tragedy of Lot's wife reminds us: half-hearted repentance is not true repentance.

Brothers and sisters, if today you are in a place where you should not be — not necessarily a city, perhaps a relationship, a habit, a lifestyle — hear the angels' words: "Escape for your life. Do not look back." Do not linger like Lot. Do not be like Lot's wife, whose body left but whose heart stayed behind.

God is still taking you by the hand today. Just as the angels seized Lot's hand — that was the hand of mercy, the hand of grace. Take hold of it. Do not look back.`,
  historyContext_zh: `所多玛和蛾摩拉位于死海南端的西丁谷。考古学在该地区发现了被高温毁灭的遗迹（Tall el-Hammam遗址），年代约在公元前1650年前后，与圣经记载的毁灭方式高度吻合——硫磺与火从天降。死海地区至今富含沥青和矿物盐，"盐柱"在该地区的地质构造中并不罕见。摩押和亚扪后来分别建立了约旦河东的王国，在以色列历史中反复出现。`,
  historyContext_en: `Sodom and Gomorrah were located in the Valley of Siddim at the southern end of the Dead Sea. Archaeology at the site of Tall el-Hammam has uncovered remains of high-temperature destruction dating to approximately 1650 BC, closely matching the biblical account of sulfur and fire from heaven. The Dead Sea region to this day is rich in bitumen and mineral salts; "salt pillars" are not uncommon geological formations in the area. Moab and Ammon later established kingdoms east of the Jordan, appearing repeatedly throughout Israel's history.`,
  structure_zh: `全章分四段：1-11节（天使到所多玛，城民的罪恶暴露）；12-22节（紧急撤离——罗得的迟延与神的怜恤）；23-29节（毁灭——硫磺与火降下，罗得妻子回头）；30-38节（黑暗的结局——罗得与女儿们）。全章形成一个从光明到黑暗的递降结构，与第十八章的温暖场景形成鲜明对比。`,
  structure_en: `The chapter divides into four sections: verses 1-11 (the angels arrive in Sodom; the city's sin exposed); verses 12-22 (urgent evacuation — Lot's lingering and God's mercy); verses 23-29 (destruction — sulfur and fire, Lot's wife looks back); verses 30-38 (the dark conclusion — Lot and his daughters). The chapter forms a descending structure from light to darkness, in stark contrast to the warm scene of chapter eighteen.`,
  theology_zh: `神的审判是真实的——所多玛的毁灭是"后世不敬虔人的鉴戒"（彼后2:6）；恩典在审判中运作——神因记念亚伯拉罕而救罗得；环境对信徒有塑造力——罗得在所多玛的长期居住侵蚀了他全家的道德判断；悔改必须彻底——"不可回头看"；代祷的果效超出代祷者的预期——亚伯拉罕的祷告虽未能救所多玛，却救了罗得。`,
  theology_en: `God's judgment is real — Sodom's destruction is "an example of what is going to happen to the ungodly" (2 Peter 2:6); grace operates within judgment — God saved Lot because He remembered Abraham; environment shapes believers — Lot's prolonged residence in Sodom corroded his entire family's moral judgment; repentance must be thorough — "do not look back"; the fruit of intercession exceeds the intercessor's expectations — Abraham's prayer did not save Sodom, yet it saved Lot.`,
  christShadow_zh: `天使拉着罗得的手将他从毁灭中救出，预表基督从罪的审判中拯救信徒——"他救了我们脱离黑暗的权势，把我们迁到他爱子的国里"（西1:13）。所多玛的硫磺之火预表末日的审判（路17:28-30）。从摩押后裔中出了路得，进入弥赛亚家谱——这表明基督的救赎能从最深的罪中带出恩典的果子。罗得的迟延与基督的催促形成对比："你们今日若听他的话，就不可硬着心"（来3:15）。`,
  christShadow_en: `The angels seizing Lot's hand and rescuing him from destruction foreshadows Christ saving believers from the judgment of sin — "He has delivered us from the domain of darkness and transferred us to the kingdom of his beloved Son" (Colossians 1:13). The sulfur and fire upon Sodom foreshadow the final judgment (Luke 17:28-30). From Moab's line came Ruth, who entered the Messiah's genealogy — showing that Christ's redemption can bring the fruit of grace from the deepest sin. Lot's lingering contrasts with Christ's urgency: "Today, if you hear his voice, do not harden your hearts" (Hebrews 3:15).`,
});
readings.push({
  book: '创世记', bookEn: 'Genesis', chapter: 20,
  publishDate: '2026-03-13',
  title: '亚伯拉罕与亚比米勒', titleEn: 'Abraham and Abimelech',
  author: '摩西', authorEn: 'Moses',
  scripture: '创世记 20:1-18 / Genesis 20:1-18',
  content_zh: `弟兄姐妹，第二十章记载了一件令人难以置信的事：亚伯拉罕又犯了同样的罪。

亚伯拉罕从那里向南地迁去，寄居在加低斯和书珥中间的基拉耳。亚伯拉罕称他的妻撒拉为妹子，基拉耳王亚比米勒差人把撒拉取了去。

还记得创世记第十二章吗？亚伯拉罕因为饥荒下到埃及，害怕法老会因为撒拉的美貌而杀他，就对撒拉说："求你说你是我的妹子，使我因你得平安，我的命也因你存活。"那一次，法老把撒拉取进宫去，神降大灾在法老身上，法老才把撒拉还给亚伯拉罕。

现在，同样的事再次发生了。不同的地点，不同的王，同样的谎言。

这让我们震惊。这不是一个刚蒙召的新信徒——这是亚伯拉罕，那个因信称义的人，那个与神立约的人，那个刚刚为所多玛代求的人。他已经走过了这么长的信心之路，他已经经历了神那么多的信实——但他又犯了同样的错误。

弟兄姐妹，这告诉我们一个关于成圣的重要真理：**信心的成长不是线性的。** 你不会因为信主三十年就自动比信主三年的人更不容易犯罪。同一个软弱，同一个试探，可能在你人生的不同阶段反复出现。亚伯拉罕的"称妻为妹"不是一时冲动——第13节告诉我们，这是他从离开父家开始就和撒拉商量好的策略："当神叫我离开父家、飘流在外的时候，我对她说：'我们无论走到什么地方，你可以对人说：他是我的哥哥；这就是你待我的恩典了。'"

这意味着这个谎言是系统性的、预谋的、长期的。亚伯拉罕从蒙召的第一天起就准备好了这个谎言，作为他的"生存策略"。这不只是一次跌倒，这是一个根深蒂固的模式。

我们每个人都有这样的模式。可能是恐惧导致的谎言，可能是不安全感导致的控制欲，可能是骄傲导致的自我辩护。这些模式不会因为一次悔改就彻底消失——它们需要持续的、终生的对付。韦敏斯德信条第十三章论成圣说得很清楚："在今生仍有从败坏的残余所产生的、持续不断的、无法和解的争战。"

但是，在亚伯拉罕再次失败的同时，请看神做了什么。

但夜间，神来，在梦中对亚比米勒说："你是个死人哪！因为你取了那女人来；她原是别人的妻子。"

神没有等事情发展到不可收拾的地步。他直接介入了。在亚比米勒还没有亲近撒拉之前，神就出手了。

亚比米勒的回应很有意思。他说："主啊，连有义的国，你也要毁灭么？那人岂不是自己对我说'她是我的妹子'么？就是女人也自己说：'他是我的哥哥。'我作这事是心正手洁的。"

亚比米勒自辩说他是无辜的。神也承认了这一点："我知道你作这事是心中正直；我也拦阻了你，免得你得罪我，所以我不容你沾着她。"

这里有一个惊人的真理：**神保守了亚比米勒。** 不是亚比米勒自己有多正直——是神主动拦阻了他。"我也拦阻了你"——这是神的护理之工。神不仅保护了撒拉的纯洁，也保护了亚比米勒不至于犯下更大的罪。

弟兄姐妹，这是何等安慰的教义！当我们的软弱可能导致严重后果时，神在幕后运作，拦阻罪的蔓延。不是因为我们好，而是因为他的应许必须成就——撒拉必须生以撒，弥赛亚的家谱必须得到保护。**神的计划不会因为人的软弱而脱轨。**

然后神对亚比米勒说了一句让人意外的话："现在你把这人的妻子归还他；因为他是先知，他要为你祷告，使你存活。"

亚伯拉罕是先知？他刚刚撒了谎，陷一个异教王于大罪的边缘——神却称他为"先知"？

是的。因为亚伯拉罕的身份不取决于他的表现。他是先知，不是因为他完美，而是因为神呼召了他。神的呼召和恩赐是不会后悔的（罗马书11:29）。你的跌倒不会撤销神对你的呼召。彼得三次不认主——但主仍然说："你喂养我的羊。"

亚比米勒清早起来，召了亚伯拉罕来，对他说："你怎么向我这样行呢？我在什么事上得罪了你，你竟使我和我国里的人陷在大罪里？你向我行不当行的事了！"

注意这里的讽刺：一个异教王在责备信心之父。亚比米勒的指控完全正确——亚伯拉罕确实做了不当行的事。信徒的失败不仅伤害自己，也使不信的人有理由指控神的子民。保罗在罗马书2:24引用先知的话说："神的名在外邦人中，因你们受了亵渎。"

亚伯拉罕的解释暴露了他内心最深的恐惧："我以为这地方的人总不惧怕神，必为我妻子的缘故杀我。"

"我以为"——这是恐惧的声音，不是信心的声音。亚伯拉罕在对神的信靠和对人的恐惧之间摇摆。在帐棚里，面对神的应许，他是信心的伟人；在外面，面对可能的威胁，他又变回了那个害怕的人。

然后他补充说："况且她也实在是我的妹子；她与我是同父异母，后来作了我的妻子。"

半真半假的谎言，往往比完全的谎言更危险。撒拉确实是他同父异母的妹妹——但她更是他的妻子。亚伯拉罕用一个技术上正确的事实来掩盖一个关键的真相。这种"选择性真实"在今天也很常见：我们说的每一句话都是事实，但我们故意遗漏了最重要的那部分。

但故事的结局出人意料地美好。

亚比米勒把牛、羊、仆婢赐给亚伯拉罕，又把他的妻子撒拉归还他。亚比米勒又说："看哪，我的地都在你面前，你可以随意居住。"又对撒拉说："我给你哥哥一千银子，作为你在阖家人面前遮羞的，你就在众人面前没有不是了。"

亚比米勒不仅归还了撒拉，还给了亚伯拉罕大量财物和居住的自由。这个异教王的慷慨反衬了亚伯拉罕的怯懦。

然后经文以一个令人惊叹的反转结尾：**亚伯拉罕祷告神，神就医好了亚比米勒和他的妻子，并他的众女仆，他们便能生育。因耶和华为亚伯拉罕的妻子撒拉的缘故，已经使亚比米勒家中的妇人不能生育。**

那个刚刚失败的人，现在为别人祷告，而神听了他的祷告。那个自己还没有儿子的人（以撒尚未出生），为别人的生育祷告，神就医治了他们。

这是恩典最令人不可思议的地方：**神使用不完美的人。** 亚伯拉罕不是因为完美才被神使用——他是在自己的软弱和失败中被使用的。他的祷告有效，不是因为他的道德记录好，而是因为他所祷告的那位神是信实的。

弟兄姐妹，第二十章看起来是一个"小"故事——没有宇宙性的毁灭，没有震撼的异象。但它教导我们一些非常重要的功课。

第一，圣徒会反复跌倒在同一个地方。不要以为你胜过了一次就不会再犯。成圣是终生的争战。

第二，神保护他的应许超过保护你的面子。神让亚伯拉罕在亚比米勒面前丢了脸，但神保护了撒拉——因为以撒必须从撒拉生出来。你的面子在神眼中不如他的计划重要。

第三，神使用失败的人。你不需要等到"够好了"才能被神使用。亚伯拉罕刚撒完谎，神就差他去为亚比米勒祷告。你的资格不是来自你的表现，而是来自神的呼召。

第四，半真半假的话仍然是谎言。在神面前，选择性的真实就是不真实。

弟兄姐妹，如果你正在为自己反复犯同样的罪而绝望——请看亚伯拉罕。他是信心之父，但他也是一个会反复跌倒的人。神没有因为他的反复失败而抛弃他。神仍然叫他"先知"，仍然使用他的祷告，仍然要通过他成就弥赛亚的应许。

你的价值不取决于你的表现。你的呼召不取决于你的记录。你是属神的人——不是因为你做了什么，而是因为神做了什么。

"然而，神坚固的根基立住了；上面有这印记说：'主认识谁是他的人。'"（提摩太后书2:19）`,
  content_en: `Brothers and sisters, chapter twenty records something almost unbelievable: Abraham committed the same sin again.

Abraham journeyed toward the territory of the Negeb and lived between Kadesh and Shur; and he sojourned in Gerar. And Abraham said of Sarah his wife, "She is my sister." And Abimelech king of Gerar sent and took Sarah.

Do you remember Genesis chapter twelve? Abraham went down to Egypt because of famine, feared Pharaoh would kill him because of Sarah's beauty, and told Sarah: "Say you are my sister, that it may go well with me because of you, and that my life may be spared for your sake." That time, Pharaoh took Sarah into his palace, God struck Pharaoh's house with plagues, and Pharaoh returned Sarah to Abraham.

Now, the same thing happened again. Different place, different king, same lie.

This is astonishing. This is not a newly called novice — this is Abraham, the man justified by faith, the man who covenanted with God, the man who had just interceded for Sodom. He had walked so long on the road of faith, he had experienced so much of God's faithfulness — and yet he made the same mistake again.

Brothers and sisters, this teaches us an important truth about sanctification: **the growth of faith is not linear.** You will not automatically sin less simply because you have believed for thirty years rather than three. The same weakness, the same temptation, can resurface at different stages of your life. Abraham's "calling his wife his sister" was not an impulsive slip — verse 13 tells us it was a strategy he and Sarah had agreed upon from the very beginning: "When God caused me to wander from my father's house, I said to her, 'This is the kindness you must do me: at every place to which we come, say of me, "He is my brother."'"

This means the lie was systematic, premeditated, and long-standing. Abraham had prepared this lie from the first day of his calling as his "survival strategy." This was not a one-time stumble; it was a deeply ingrained pattern.

Each of us has such patterns. Perhaps fear leads to lies, insecurity leads to controlling behavior, pride leads to self-justification. These patterns do not vanish with a single repentance — they require ongoing, lifelong confrontation. The Westminster Confession, chapter 13 on sanctification, states clearly: "In this life there remain some remnants of corruption, which occasion a continual and irreconcilable war."

But while Abraham failed again, look at what God did.

But God came to Abimelech in a dream by night and said to him, "Behold, you are a dead man because of the woman whom you have taken, for she is a man's wife."

God did not wait for things to spiral out of control. He intervened directly. Before Abimelech had even approached Sarah, God acted.

Abimelech's response is telling. He said: "Lord, will you kill an innocent people? Did he not himself say to me, 'She is my sister'? And she herself said, 'He is my brother.' In the integrity of my heart and the innocence of my hands I have done this."

Abimelech pleaded his innocence. And God acknowledged it: "Yes, I know that you have done this in the integrity of your heart, and it was I who kept you from sinning against me. Therefore I did not let you touch her."

Here is a stunning truth: **God restrained Abimelech.** It was not Abimelech's own righteousness — it was God who actively held him back. "It was I who kept you" — this is God's work of providence. God protected not only Sarah's purity but also kept Abimelech from committing a greater sin.

Brothers and sisters, what a comforting doctrine this is! When our weaknesses could lead to catastrophic consequences, God works behind the scenes to restrain the spread of sin. Not because we are good, but because His promise must be fulfilled — Sarah must bear Isaac; the Messiah's lineage must be protected. **God's plan will not be derailed by human weakness.**

Then God said something surprising to Abimelech: "Now then, return the man's wife, for he is a prophet, and he will pray for you, and you shall live."

Abraham a prophet? He had just lied and nearly led a pagan king into grave sin — and God calls him "a prophet"?

Yes. Because Abraham's identity does not depend on his performance. He is a prophet not because he is perfect, but because God called him. "The gifts and the calling of God are irrevocable" (Romans 11:29). Your stumbling does not revoke God's calling upon your life. Peter denied the Lord three times — yet the Lord still said: "Feed my sheep."

So Abimelech rose early in the morning and called Abraham and said to him, "What have you done to us? And how have I sinned against you, that you have brought on me and my kingdom a great sin? You have done to me things that ought not to be done."

Note the irony: a pagan king is rebuking the father of faith. Abimelech's accusation was entirely justified — Abraham had indeed done what ought not to be done. A believer's failure not only harms himself but gives unbelievers grounds to accuse God's people. Paul quotes the prophet in Romans 2:24: "The name of God is blasphemed among the Gentiles because of you."

Abraham's explanation exposed his deepest fear: "I did it because I thought, 'There is no fear of God at all in this place, and they will kill me because of my wife.'"

"I thought" — this is the voice of fear, not of faith. Abraham oscillated between trust in God and fear of people. Inside his tent, facing God's promises, he was a giant of faith; outside, facing potential threats, he reverted to a frightened man.

Then he added: "Besides, she is indeed my sister, the daughter of my father though not the daughter of my mother, and she became my wife."

Half-truths are often more dangerous than outright lies. Sarah was indeed his half-sister — but she was first and foremost his wife. Abraham used a technically correct fact to conceal a crucial truth. This kind of "selective honesty" is common today: every word we say may be factual, yet we deliberately omit the most important part.

But the story's conclusion is unexpectedly beautiful.

Then Abimelech took sheep and oxen, and male servants and female servants, and gave them to Abraham, and returned Sarah his wife to him. And Abimelech said, "Behold, my land is before you; dwell where it pleases you." To Sarah he said, "Behold, I have given your brother a thousand pieces of silver. It is a sign of your innocence in the eyes of all who are with you, and before everyone you are vindicated."

Abimelech not only returned Sarah but also gave Abraham generous gifts and the freedom to settle anywhere. This pagan king's generosity stands in stark contrast to Abraham's cowardice.

Then the text closes with an astonishing reversal: **Abraham prayed to God, and God healed Abimelech and also his wife and female servants so that they bore children. For the LORD had closed all the wombs of the house of Abimelech because of Sarah, Abraham's wife.**

The man who had just failed was now praying for others, and God answered his prayer. The man who himself had no son yet (Isaac was not yet born) prayed for others' fertility, and God healed them.

This is the most incredible aspect of grace: **God uses imperfect people.** Abraham was not used by God because he was perfect — he was used in the midst of his own weakness and failure. His prayer was effective not because of his moral record, but because the God to whom he prayed is faithful.

Brothers and sisters, chapter twenty may seem like a "small" story — no cosmic destruction, no stunning visions. But it teaches us profoundly important lessons.

First, saints stumble repeatedly at the same point. Do not assume that overcoming a sin once means you will never fall again. Sanctification is a lifelong war.

Second, God protects His promise more than He protects your reputation. God allowed Abraham to lose face before Abimelech, but God protected Sarah — because Isaac had to be born from Sarah. Your reputation matters less to God than His plan.

Third, God uses failed people. You do not need to wait until you are "good enough" to be used by God. Abraham had just told a lie, and God sent him to pray for Abimelech. Your qualification comes not from your performance but from God's calling.

Fourth, half-truths are still lies. Before God, selective honesty is dishonesty.

Brothers and sisters, if you are despairing because you keep committing the same sin — look at Abraham. He is the father of faith, but he was also a man who stumbled repeatedly. God did not abandon him for his repeated failures. God still called him "prophet," still used his prayers, and still intended to fulfill the Messianic promise through him.

Your worth does not depend on your performance. Your calling does not depend on your record. You belong to God — not because of what you have done, but because of what God has done.

"But God's firm foundation stands, bearing this seal: 'The Lord knows those who are his.'" (2 Timothy 2:19)`,
  historyContext_zh: `基拉耳位于迦南地南部沿海平原，即今天的加沙地带附近，是非利士人的领地。"亚比米勒"可能是非利士王的王朝称号（类似"法老"），而非个人名字。一千银子在当时是巨额财富——相当于一个工人数十年的工资。古代近东的王室法律严格禁止取有夫之妇，违者可处死刑，这解释了亚比米勒的恐惧。撒拉同父异母妹妹的身份，反映了族长时期婚姻习俗与后来摩西律法（利18:9）的不同。`,
  historyContext_en: `Gerar was located in the southern coastal plain of Canaan, near present-day Gaza, in Philistine territory. "Abimelech" may have been a dynastic title for Philistine kings (similar to "Pharaoh") rather than a personal name. A thousand pieces of silver was an enormous sum — equivalent to decades of a laborer's wages. Ancient Near Eastern royal law strictly prohibited taking another man's wife, punishable by death, which explains Abimelech's fear. Sarah's status as Abraham's half-sister reflects the marriage customs of the patriarchal period, which differed from the later Mosaic law (Leviticus 18:9).`,
  structure_zh: `全章结构：1-2节（亚伯拉罕的谎言与亚比米勒取撒拉）；3-7节（神在梦中警告亚比米勒）；8-13节（亚比米勒与亚伯拉罕的对质）；14-18节（归还与医治）。高潮在第6节"我也拦阻了你"——神的护理是全章的枢纽。结尾形成一个讽刺性的反转：犯罪的先知为受害的异教王祷告。`,
  structure_en: `The chapter's structure: verses 1-2 (Abraham's lie and Abimelech takes Sarah); verses 3-7 (God warns Abimelech in a dream); verses 8-13 (Abimelech confronts Abraham); verses 14-18 (restoration and healing). The climax is verse 6, "it was I who kept you" — God's providence is the chapter's pivot. The ending forms an ironic reversal: the sinning prophet prays for the wronged pagan king.`,
  theology_zh: `成圣不是线性的——圣徒会反复跌倒在同一个地方（韦敏斯德信条13章）；神的护理保守他的应许——"我也拦阻了你"；神的呼召和恩赐是不会后悔的（罗11:29）——亚伯拉罕虽失败仍被称为先知；神使用不完美的器皿——亚伯拉罕为亚比米勒祷告带来医治；半真半假的话在神面前仍是谎言。`,
  theology_en: `Sanctification is not linear — saints stumble repeatedly at the same point (Westminster Confession ch. 13); God's providence guards His promise — "it was I who kept you"; God's gifts and calling are irrevocable (Romans 11:29) — Abraham was still called a prophet despite his failure; God uses imperfect vessels — Abraham's prayer for Abimelech brought healing; half-truths are still lies before God.`,
  christShadow_zh: `神保护撒拉不被玷污，是为了保护弥赛亚的血统——基督必须从亚伯拉罕和撒拉的后裔中出来。"我也拦阻了你"显示神在历史中主动护理救赎计划。亚伯拉罕虽然失败却仍被神使用为代祷者，预表基督——我们的大祭司"并非不能体恤我们的软弱"（来4:15），却"长远活着，替他们祈求"（来7:25）。神医治亚比米勒家的不育，而撒拉自己即将生育——施恩者的神同样要在施恩者身上行大事。`,
  christShadow_en: `God's protection of Sarah from defilement was to guard the Messianic line — Christ had to come from the offspring of Abraham and Sarah. "It was I who kept you" reveals God's active providence over the plan of redemption throughout history. Abraham, though he failed, was still used by God as an intercessor, foreshadowing Christ — our High Priest who "in every respect has been tempted as we are, yet without sin" (Hebrews 4:15), and who "always lives to make intercession" (Hebrews 7:25). God healed the barrenness of Abimelech's household while Sarah herself was about to conceive — the God who gives grace through His servant will also do great things for that servant.`,
});
readings.push({
  book: '创世记', bookEn: 'Genesis', chapter: 21,
  publishDate: '2026-03-16',
  title: '以撒出生', titleEn: 'The Birth of Isaac',
  author: '摩西', authorEn: 'Moses',
  scripture: '创世记 21:1-34 / Genesis 21:1-34',
  content_zh: `亲爱的读者，我是摩西，耶和华的仆人。今日我要向你述说亚伯拉罕一生中最荣耀也最痛苦的一章——应许之子以撒的出生，以及随之而来的家庭风暴。

经上记着说："耶和华按着先前的话眷顾撒拉，便照他所说的给撒拉成就。当亚伯拉罕年老的时候，撒拉怀了孕；到神所说的日期，就给亚伯拉罕生了一个儿子。"（创21:1-2）请你留意这几个字——"按着先前的话"、"照他所说的"、"到神所说的日期"。三重的强调，只为告诉你一件事：神的应许，一个字也不会落空。

从神第一次应许亚伯拉罕要有后裔（创12:2），到以撒出生，整整二十五年。二十五年的等候！你能想象吗？我自己在旷野带领以色列人四十年，我深知等候的煎熬。当百姓在加低斯巴尼亚退缩不前，当他们一次次发怨言要回埃及，我也曾在暗夜里问耶和华："你的应许何时成就？"但我从亚伯拉罕的经历中学到：神的时间表从不延误，只是常常超出我们的忍耐。

"亚伯拉罕给撒拉所生的儿子起名叫以撒。"（创21:3）以撒，意思是"他笑"。这名字是神亲自起的（创17:19）。想想看——全能的神给一个婴孩取了一个带着笑声的名字！这笑声里有什么呢？

撒拉说："神使我喜笑，凡听见的必与我一同喜笑。"又说："谁能预先对亚伯拉罕说'撒拉要乳养婴孩'呢？因为在他年老的时候，我给他生了一个儿子。"（创21:6-7）你还记得撒拉从前的笑吗？在幔利橡树那里，她躲在帐棚门后偷笑，心里说："我既已衰败，我主也老迈，岂能有这喜事呢？"（创18:12）那是不信的笑，是人以有限的理性嘲笑无限之神的笑。但如今，同一个撒拉，笑声却完全不同了——这是被恩典征服后喜极而泣的笑，是亲眼看见不可能变为可能的笑。

弟兄姊妹，从不信的笑到喜乐的笑，中间隔着什么？隔着神的信实。不是撒拉变得更有信心了，而是神按着自己的时候成就了他的话。我们的信心常常软弱，但神的应许从不落空。正如经上所说："我们纵然失信，他仍是可信的，因为他不能背乎自己。"（提后2:13）

然而，喜乐的宴席之后，紧接着就是一场撕裂人心的离别。

"当时，撒拉看见埃及人夏甲给亚伯拉罕所生的儿子戏笑，就对亚伯拉罕说：'你把这使女和他儿子赶出去！因为这使女的儿子不可与我的儿子以撒一同承受产业。'"（创21:9-10）

这事令亚伯拉罕极其忧愁，因为以实玛利毕竟是他的亲生骨肉。但神对亚伯拉罕说："你不必为这童子和你的使女忧愁。凡撒拉对你说的话，你都该听从；因为从以撒生的，才要称为你的后裔。至于使女的儿子，我也必使他的后裔成立一国，因为他是你所生的。"（创21:12-13）

我要你注意神话语中的温柔与坚定。神没有忽视亚伯拉罕作为父亲的心痛，他说"你不必忧愁"。但神也绝不妥协他拣选的旨意——"从以撒生的，才要称为你的后裔"。这不是血气的拣选，不是长幼的次序，乃是恩典的主权。使徒保罗后来引用这段经文说得极其清楚："肉身所生的儿女不是神的儿女，惟独那应许的儿女才算是后裔。"（罗9:8）

"亚伯拉罕清早起来，拿饼和一皮袋水，给了夏甲，搭在他的肩上，又把孩子交给他，打发他走。"（创21:14）清早起来——亚伯拉罕没有拖延，没有与神讨价还价。这让我想起我自己在尼波山上的经历。耶和华告诉我不能进入应许之地，我的心何等痛苦！但我顺服了。有时候，信心的顺服不是不痛，而是在痛中仍然相信神的旨意高过我的意愿。

夏甲在别是巴的旷野走迷了路，水也用尽了。她把孩子撇在小树底下，自己走开约有一箭之远，说："我不忍见孩子死。"就放声大哭。（创21:15-16）这是何等凄凉的画面！一个母亲，走投无路，眼看孩子将要渴死。

"神听见童子的声音；神的使者从天上呼叫夏甲说：夏甲，你为何这样呢？不要害怕，神已经听见童子的声音了。起来！把童子抱在怀中，我必使他的后裔成为大国。"（创21:17-18）神听见了。请注意，经文说神听见的是"童子的声音"，不是夏甲的哭声。这个被赶出家门的孩子，在旷野中向神呼求，神就回应了他。这再次证明：我们的神是听祷告的神，即便是在最荒凉的旷野，即便是在人看来无望的境地。

"神使夏甲的眼睛明亮，他就看见一口水井。"（创21:19）那口井一直在那里！不是神变出了一口新井，而是神开了夏甲的眼睛。弟兄姊妹，多少时候，神的供应就在我们眼前，只是我们被忧虑蒙蔽了眼睛看不见？

本章最后的段落转向亚伯拉罕与亚比米勒立约。亚比米勒看见"凡你所行的事都有神的保佑"（创21:22），就主动来寻求与亚伯拉罕立约。他们在别是巴起誓立约，亚伯拉罕在那里栽了一棵垂丝柳树，"又在那里求告耶和华永生神的名"（创21:33）。

"永生神"——El Olam。这个称呼在整本圣经中第一次出现。亚伯拉罕在经历了等候应许、送别以实玛利、与外邦王立约之后，他对神的认识更深了一层：这位神不仅是全能的（El Shaddai），更是永恒的。他的应许跨越世代，他的信实永不改变。

亲爱的读者，创世记第二十一章从一个婴孩的笑声开始，到一棵树下的敬拜结束。在笑声与眼泪之间，在应许与等候之间，在离别与立约之间，有一条金线贯穿始终：那就是神绝对的信实和他不可动摇的旨意。愿你在自己的"二十五年等候"中，紧紧抓住这位永生神的应许，因为他说的，他必成就。`,
  content_en: `Dear reader, I am Moses, servant of the LORD. Today I shall recount to you the most glorious and most painful chapter in Abraham's life—the birth of Isaac, the son of promise, and the family storm that followed.

It is written: "The LORD visited Sarah as he had said, and the LORD did to Sarah as he had promised. And Sarah conceived and bore Abraham a son in his old age at the time of which God had spoken to him." (Gen 21:1-2) Notice these phrases—"as he had said," "as he had promised," "at the time of which God had spoken." This threefold emphasis tells you one thing: not a single word of God's promise will fall to the ground.

From when God first promised Abraham offspring (Gen 12:2) to Isaac's birth, twenty-five full years passed. Twenty-five years of waiting! Can you fathom it? I myself led Israel through the wilderness for forty years, and I know well the agony of waiting. When the people shrank back at Kadesh-barnea, when they grumbled again and again to return to Egypt, I too asked the LORD in the dark of night: "When will your promise be fulfilled?" But from Abraham's experience I learned: God's timetable never delays—it simply exceeds our patience.

"Abraham called the name of his son who was born to him, whom Sarah bore him, Isaac." (Gen 21:3) Isaac means "he laughs." This name was given by God himself (Gen 17:19). Consider—the Almighty God gave an infant a name filled with laughter! What is contained in this laughter?

Sarah said, "God has made laughter for me; everyone who hears will laugh over me." And she said, "Who would have said to Abraham that Sarah would nurse children? Yet I have borne him a son in his old age." (Gen 21:6-7) Do you remember Sarah's earlier laughter? At the oaks of Mamre, she laughed behind the tent door, saying to herself, "After I am worn out, and my lord is old, shall I have pleasure?" (Gen 18:12) That was the laughter of unbelief—finite reason mocking the infinite God. But now, the same Sarah laughs with an entirely different sound—this is the laughter of one conquered by grace, weeping for joy at seeing the impossible become possible.

Brothers and sisters, what lies between the laughter of unbelief and the laughter of joy? God's faithfulness. It was not that Sarah grew more faithful, but that God fulfilled his word in his own time. Our faith often wavers, but God's promise never fails. As it is written: "If we are faithless, he remains faithful—for he cannot deny himself." (2 Tim 2:13)

Yet after the joyful feast came a heart-rending separation.

"But Sarah saw the son of Hagar the Egyptian, whom she had borne to Abraham, laughing. So she said to Abraham, 'Cast out this slave woman with her son, for the son of this slave woman shall not be heir with my son Isaac.'" (Gen 21:9-10)

This was very displeasing to Abraham, for Ishmael was his own flesh and blood. But God said to Abraham, "Be not displeased because of the boy and because of your slave woman. Whatever Sarah says to you, do as she tells you, for through Isaac shall your offspring be named. And I will make a nation of the son of the slave woman also, because he is your offspring." (Gen 21:12-13)

Notice the tenderness and firmness in God's words. God did not ignore Abraham's pain as a father—he said "Be not displeased." But neither did God compromise his elective purpose—"through Isaac shall your offspring be named." This is not selection by flesh, not by birth order, but by sovereign grace. The apostle Paul later cited this passage with utmost clarity: "This means that it is not the children of the flesh who are the children of God, but the children of the promise are counted as offspring." (Rom 9:8)

"So Abraham rose early in the morning and took bread and a skin of water and gave it to Hagar, putting it on her shoulder, along with the child, and sent her away." (Gen 21:14) He rose early—Abraham did not delay, did not bargain with God. This reminds me of my own experience on Mount Nebo. The LORD told me I could not enter the promised land, and how my heart ached! But I obeyed. Sometimes the obedience of faith is not painless—it is trusting God's will above our own in the midst of pain.

Hagar wandered in the wilderness of Beersheba. When the water was gone, she put the child under one of the bushes and went a good way off, about the distance of a bowshot, for she said, "Let me not look on the death of the child." And she lifted up her voice and wept. (Gen 21:15-16) What a desolate scene! A mother, with nowhere to turn, watching her child about to die of thirst.

"And God heard the voice of the boy, and the angel of God called to Hagar from heaven and said to her, 'What troubles you, Hagar? Fear not, for God has heard the voice of the boy where he is. Up! Lift up the boy, and hold him fast with your hand, for I will make him into a great nation.'" (Gen 21:17-18) God heard. Notice: the text says God heard "the voice of the boy," not Hagar's weeping. This child cast out from his home cried to God in the wilderness, and God answered. This proves once more: our God hears prayer, even in the most desolate wilderness, even in what seems a hopeless situation.

"Then God opened her eyes, and she saw a well of water." (Gen 21:19) That well had been there all along! God did not conjure a new well—he opened Hagar's eyes. Brothers and sisters, how often is God's provision right before us, yet our eyes are blinded by anxiety?

The final section of this chapter turns to Abraham's covenant with Abimelech. Abimelech saw that "God is with you in all that you do" (Gen 21:22) and came seeking a covenant with Abraham. They swore an oath at Beersheba, and Abraham planted a tamarisk tree there and "called there on the name of the LORD, the Everlasting God" (Gen 21:33).

"The Everlasting God"—El Olam. This title appears here for the first time in all of Scripture. After waiting for the promise, sending away Ishmael, and making a covenant with a foreign king, Abraham's knowledge of God deepened: this God is not only Almighty (El Shaddai) but Eternal. His promises span generations; his faithfulness never changes.

Dear reader, Genesis 21 begins with the laughter of a baby and ends with worship beneath a tree. Between laughter and tears, between promise and waiting, between parting and covenant-making, one golden thread runs throughout: God's absolute faithfulness and his unshakable purpose. May you, in your own "twenty-five years of waiting," hold fast to the promise of this Everlasting God—for what he has spoken, he will surely accomplish.`,
  historyContext_zh: `创世记第21章的历史背景约在主前2066年，地点在迦南地南部的基拉耳至别是巴一带。亚伯拉罕此时约一百岁，撒拉九十岁。以撒的出生是神在创世记12章、15章、17章、18章反复应许的最终成就。夏甲是埃及使女，以实玛利约十四岁。亚比米勒是基拉耳的非利士王（此处"非利士"为早期称呼，非后来的海上民族）。别是巴意为"盟誓的井"或"七口井"，位于内盖夫沙漠北缘，是重要的水源地和交通要道。本章所记之事发生在亚伯拉罕寄居基拉耳之后，正是创世记20章的延续。`,
  historyContext_en: `The historical setting of Genesis 21 is approximately 2066 BC, in the region from Gerar to Beersheba in southern Canaan. Abraham was about one hundred years old, and Sarah ninety. Isaac's birth was the ultimate fulfillment of God's repeated promises in Genesis 12, 15, 17, and 18. Hagar was an Egyptian servant, and Ishmael was about fourteen years old. Abimelech was the Philistine king of Gerar (here "Philistine" is an early designation, not the later Sea Peoples). Beersheba means "well of the oath" or "well of seven," located on the northern edge of the Negev desert—an important water source and crossroads. The events of this chapter follow Abraham's sojourn in Gerar, continuing directly from Genesis 20.`,
  structure_zh: `创世记第21章可分为三个段落：
一、以撒出生与命名（1-7节）：神按应许眷顾撒拉，以撒出生，亚伯拉罕行割礼，撒拉发出喜乐的笑声。
二、夏甲与以实玛利被逐（8-21节）：以撒断奶宴席上的冲突，撒拉要求赶逐夏甲母子，神安慰亚伯拉罕并确认应许的传承线，夏甲在旷野绝望中蒙神眷顾，神开她的眼看见水井。
三、亚伯拉罕与亚比米勒立约（22-34节）：外邦王认出神与亚伯拉罕同在，双方在别是巴立约，亚伯拉罕栽树敬拜永生神。`,
  structure_en: `Genesis 21 divides into three sections:
1. The Birth and Naming of Isaac (vv. 1-7): God visits Sarah as promised, Isaac is born, Abraham circumcises him, and Sarah utters her joyful laughter.
2. The Expulsion of Hagar and Ishmael (vv. 8-21): Conflict at Isaac's weaning feast, Sarah demands the removal of Hagar and her son, God comforts Abraham and confirms the line of promise, Hagar despairs in the wilderness yet is visited by God, who opens her eyes to see a well.
3. Abraham's Covenant with Abimelech (vv. 22-34): The foreign king recognizes that God is with Abraham, they swear a covenant at Beersheba, and Abraham plants a tree and worships the Everlasting God.`,
  theology_zh: `本章彰显了改革宗神学的核心教义。第一，神的主权与信实：以撒的出生完全出于神的应许和能力，不是出于人的血气。第二，拣选的恩典：神明确区分以撒与以实玛利——"从以撒生的，才要称为你的后裔"（创21:12），这不是根据行为或长幼，而是根据神拣选的旨意（罗9:7-13）。第三，恩典之约的延续：以撒是约的承受者，神的救赎计划通过这条应许之线一路传递直到基督。第四，神的护理：即使对约外的以实玛利，神也施以普遍恩典，保全他的性命并使他成为大国。第五，信心的顺服：亚伯拉罕虽然心痛，仍顺服神的命令，这是真信心的标记。`,
  theology_en: `This chapter displays core doctrines of Reformed theology. First, God's sovereignty and faithfulness: Isaac's birth was entirely from God's promise and power, not from human effort. Second, electing grace: God explicitly distinguishes Isaac from Ishmael—"through Isaac shall your offspring be named" (Gen 21:12)—not according to works or birth order, but according to God's purpose of election (Rom 9:7-13). Third, the continuity of the covenant of grace: Isaac is the covenant heir; God's redemptive plan passes through this line of promise all the way to Christ. Fourth, divine providence: even toward Ishmael, who is outside the covenant line, God extends common grace, preserving his life and making him a great nation. Fifth, the obedience of faith: though Abraham's heart ached, he obeyed God's command—this is the mark of true faith.`,
  christShadow_zh: `以撒是基督最清晰的预表之一。第一，以撒是应许之子，基督是那终极的应许之子——"及至时候满足，神就差遣他的儿子"（加4:4）。第二，以撒的出生超越自然律（老年得子），基督的降生更超越自然（童女怀孕）。第三，以撒的名字意为"喜笑"，基督的降临带来真正的大喜信息（路2:10）。第四，以实玛利被逐与以撒承受产业，预表了律法之约与恩典之约的对比——"属肉体的逼迫属圣灵的"（加4:29），惟有凭应许、凭恩典而生的才是真后裔。第五，神在旷野为夏甲开眼看见水井，预表基督是生命的活水（约4:14），即便在绝望的旷野，神的恩典也能寻到罪人。`,
  christShadow_en: `Isaac is one of the clearest types of Christ. First, Isaac is the son of promise; Christ is the ultimate Son of promise—"when the fullness of time had come, God sent forth his Son" (Gal 4:4). Second, Isaac's birth defied nature (born to aged parents); Christ's birth surpassed nature even more (born of a virgin). Third, Isaac's name means "laughter"; Christ's coming brought the true tidings of great joy (Luke 2:10). Fourth, the casting out of Ishmael and Isaac's inheritance foreshadow the contrast between the covenant of law and the covenant of grace—"the one who was born according to the flesh persecuted the one who was born according to the Spirit" (Gal 4:29); only those born by promise and grace are the true offspring. Fifth, God opening Hagar's eyes to see a well in the wilderness foreshadows Christ as the living water (John 4:14)—even in the wilderness of despair, God's grace finds the lost.`,
});
readings.push({
  book: '创世记', bookEn: 'Genesis', chapter: 22,
  publishDate: '2026-03-17',
  title: '献以撒', titleEn: 'The Binding of Isaac',
  author: '摩西', authorEn: 'Moses',
  scripture: '创世记 22:1-24 / Genesis 22:1-24',
  content_zh: `亲爱的读者，我是摩西，耶和华的仆人。我今日要向你讲述圣经中最震撼人心的一幕——神试验亚伯拉罕。当你读完这一章，你将看见，这不仅是一个信心的故事，更是一幅指向那位将要来的救赎主的伟大图画。

"这些事以后，神要试验亚伯拉罕，就呼叫他说：'亚伯拉罕！'他说：'我在这里。'"（创22:1）请注意，经文说的是"试验"，不是"试探"。雅各书告诉我们，神不试探人（雅1:13）。试验是为了显明信心，使信心如精金一般经过火炼而更加纯净。神是信实的，祂绝不会将祂的儿女推入毁灭，乃是要借着试炼坚固他们。

然后神说了那句令人心碎的话："你带着你的儿子，就是你独生的儿子，你所爱的以撒，往摩利亚地去，在我所要指示你的山上，把他献为燔祭。"（创22:2）请留意神说话的方式——"你的儿子"、"你独生的儿子"、"你所爱的"——每一个修饰词都像刀一样刺入亚伯拉罕的心。神并非不知道这命令的重量，祂乃是要亚伯拉罕清清楚楚地面对这个代价。以撒是应许之子，是亚伯拉罕等候了二十五年才得到的儿子，是神自己赐下的恩典。如今神竟要他把这恩典献上？

弟兄姊妹，这正是信心最深处的功课：你愿意将神所赐的最宝贵之物归还给神吗？

"亚伯拉罕清早起来，备上驴，带着两个仆人和他儿子以撒，也劈好了燔祭的柴，就起身往神所指示他的地方去了。"（创22:3）清早起来！亚伯拉罕没有拖延，没有讨价还价，没有像我后来在燃烧的荆棘前那样推三阻四。他的顺服是即刻的、彻底的。他劈好了柴——这意味着他亲手预备了将要焚烧自己儿子的燃料。每劈下一斧，他的心该是何等痛苦，但他的手没有停下。

三天的路程。三天！想想亚伯拉罕那三天的心境。从别是巴到摩利亚，大约六十英里的路。三天里，他有无数次机会回头，无数次机会说"我做不到"。但他一步一步地走向那座山。这三天的等候，仿佛死亡的阴影笼罩着父子二人——而三天之后，以撒从那祭坛上"复活"了。这三天，岂不正预表着我们的主在坟墓中的三天吗？

到了第三天，亚伯拉罕对仆人说了一句惊人的话："你们和驴在此等候，我与童子往那里去拜一拜，就回到你们这里来。"（创22:5）"就回到你们这里来"——他说的是"我们"回来，不是"我"回来。希伯来书的作者揭示了这信心的奥秘："他以为神还能叫人从死里复活；他也仿佛从死中得回他的儿子来。"（来11:19）亚伯拉罕相信，即便以撒死了，神也能使他复活，因为神的应许不能落空——"从以撒生的，才要称为你的后裔"（创21:12）。这是何等的信心！他不是不痛苦，乃是他对神应许的信靠胜过了眼前的苦难。

接下来的场景更加动人。"亚伯拉罕把燔祭的柴放在他儿子以撒身上，自己手里拿着火与刀；于是二人同行。"（创22:6）以撒背着柴走向献祭之地。我写下这一幕时，圣灵让我看见了远处的影子——千百年后，神的独生子将要背着自己的十字架，走向各各他山。以撒背柴上山，基督背架上山，何等奇妙的对应！

以撒开口了："父亲哪！……火与柴都有了，但燔祭的羊羔在那里呢？"（创22:7）这个问题穿透了亚伯拉罕的心。一个天真的孩子，信任着自己的父亲，却不知道自己就是那祭物。亚伯拉罕的回答成为了整本圣经中最伟大的预言之一："我儿，神必自己预备作燔祭的羊羔。"（创22:8）

"神必自己预备。"亚伯拉罕说出这句话时，他或许只是凭信心说出安慰的话。但这句话的意义远超他的想象。千百年后，在约旦河边，施洗约翰指着拿撒勒人耶稣喊道："看哪，神的羔羊，除去世人罪孽的！"（约1:29）神果然自己预备了那只羔羊——不是公羊，不是牛犊，乃是祂自己的独生爱子。

"他们到了神所指示的地方，亚伯拉罕在那里筑坛，把柴摆好，捆绑他的儿子以撒，放在坛的柴上。亚伯拉罕就伸手拿刀，要杀他的儿子。"（创22:9-10）经文记载以撒被捆绑却没有反抗。犹太传统认为以撒当时已是青年，完全有能力挣脱年迈的父亲。但他甘愿顺服，如羊在剪毛的人手下无声。这顺服的影子，指向那位"他被欺压，在受苦的时候却不开口"的受苦仆人（赛53:7）。

就在刀举起的那一刻——"耶和华的使者从天上呼叫他说：'亚伯拉罕！亚伯拉罕！'他说：'我在这里。'天使说：'你不可在这童子身上下手。一点不可害他！现在我知道你是敬畏神的了；因为你没有将你的儿子，就是你独生的儿子，留下不给我。'"（创22:11-12）

"亚伯拉罕举目观看，不料，有一只公羊，两角扣在稠密的小树中，亚伯拉罕就取了那只公羊来，献为燔祭，代替他的儿子。"（创22:13）"代替"——这是整本圣经救赎之道的核心。公羊代替以撒死，正如基督代替我们死。以撒本该死，公羊代替了他；我们本该死，基督代替了我们。这就是代赎，这就是福音的根基。

亚伯拉罕给那地方起名叫"耶和华以勒"，意思是"耶和华必预备"（创22:14）。这个名字成为世世代代信徒的安慰：在我们最绝望的时刻，在我们看不到出路的山上，耶和华必预备。祂预备的不是别的，乃是祂自己的儿子，作为赎罪的祭物。

最后，耶和华的使者第二次呼叫亚伯拉罕，重申了那伟大的应许："论福，我必赐大福给你；论子孙，我必叫你的子孙多起来，如同天上的星，海边的沙。你子孙必得着仇敌的城门，并且地上万国都必因你的后裔得福。"（创22:17-18）这"后裔"最终指向的，正是亚伯拉罕的那一位子孙——耶稣基督（加3:16）。

亲爱的弟兄姊妹，每当你读到这一章，求圣灵开你的眼睛，让你看见：摩利亚山上发生的一切，都是在预演各各他山上将要成就的救恩。亚伯拉罕没有留下他的独生子，但神却为了你，"不爱惜自己的儿子，为我们众人舍了"（罗8:32）。亚伯拉罕的以撒被救回来了，但神的以撒——耶稣基督——却真的死了，为要叫你活。这就是恩典，这就是爱，这就是我摩西所写下的一切历史的终极指向。`,
  content_en: `Dear reader, I am Moses, servant of the LORD. Today I shall recount to you one of the most staggering scenes in all of Scripture—God's testing of Abraham. When you have finished this chapter, you will see that this is not merely a story of faith, but a grand portrait pointing to the Redeemer who was to come.

"After these things God tested Abraham and said to him, 'Abraham!' And he said, 'Here I am.'" (Gen 22:1) Note carefully: the text says "tested," not "tempted." James tells us that God tempts no one (Jas 1:13). A test is meant to reveal and refine faith, as gold is purified through fire. God is faithful—He never pushes His children toward destruction, but strengthens them through trial.

Then God spoke those heart-rending words: "Take your son, your only son Isaac, whom you love, and go to the land of Moriah, and offer him there as a burnt offering on one of the mountains of which I shall tell you." (Gen 22:2) Notice how God spoke—"your son," "your only son," "whom you love"—each qualifier like a blade piercing Abraham's heart. God was not unaware of the weight of this command; He wanted Abraham to face the cost with full clarity. Isaac was the son of promise, the child Abraham waited twenty-five years to receive, the very gift of God's grace. And now God asked him to give that gift back?

Brothers and sisters, this is the deepest lesson of faith: are you willing to return to God the most precious thing He has given you?

"So Abraham rose early in the morning, saddled his donkey, and took two of his young men with him, and his son Isaac. And he cut the wood for the burnt offering and arose and went to the place of which God had told him." (Gen 22:3) Early in the morning! Abraham did not delay, did not bargain, did not make excuses as I myself did before the burning bush. His obedience was immediate and total. He cut the wood—meaning he prepared with his own hands the fuel that would burn his son. With every stroke of the axe, his heart must have been in agony, yet his hands did not stop.

Three days of travel. Three days! Consider Abraham's state of mind during those days. From Beersheba to Moriah, roughly sixty miles. For three days he had countless opportunities to turn back, countless chances to say, "I cannot do this." But he walked on, step by step, toward that mountain. Those three days were like a shadow of death over father and son—and after three days, Isaac was "raised" from that altar. Do not those three days foreshadow our Lord's three days in the tomb?

On the third day, Abraham said to his servants a stunning word: "Stay here with the donkey; I and the boy will go over there and worship and come again to you." (Gen 22:5) "Come again to you"—he said "we" will come back, not "I." The author of Hebrews reveals the mystery of this faith: "He considered that God was able even to raise him from the dead, from which, figuratively speaking, he did receive him back." (Heb 11:19) Abraham believed that even if Isaac died, God could raise him, for God's promise cannot fail—"Through Isaac shall your offspring be named" (Gen 21:12). What extraordinary faith! He was not without pain, but his trust in God's promise overcame the suffering before him.

What follows is even more moving. "And Abraham took the wood of the burnt offering and laid it on Isaac his son. And he took in his hand the fire and the knife. So they went both of them together." (Gen 22:6) Isaac carried the wood toward the place of sacrifice. As I wrote this scene, the Spirit showed me a shadow in the distance—centuries later, God's only Son would carry His own cross toward Golgotha. Isaac bearing wood up the mountain, Christ bearing the cross up the hill—what a wondrous parallel!

Isaac spoke: "My father! ... Behold, the fire and the wood, but where is the lamb for a burnt offering?" (Gen 22:7) This question pierced Abraham's heart. An innocent child, trusting his father, not knowing that he himself was the offering. Abraham's answer became one of the greatest prophecies in all of Scripture: "God will provide for himself the lamb for a burnt offering, my son." (Gen 22:8)

"God will provide." When Abraham spoke these words, perhaps he spoke only in faith, offering comfort. But the meaning of these words far exceeded his imagination. Centuries later, by the Jordan River, John the Baptist pointed at Jesus of Nazareth and cried: "Behold, the Lamb of God, who takes away the sin of the world!" (John 1:29) God indeed provided the Lamb—not a ram, not a bull, but His own beloved Son.

"When they came to the place of which God had told him, Abraham built the altar there and laid the wood in order and bound Isaac his son and laid him on the altar, on top of the wood. Then Abraham reached out his hand and took the knife to slaughter his son." (Gen 22:9-10) Scripture records that Isaac was bound yet did not resist. Jewish tradition holds that Isaac was by then a young man, fully capable of overpowering his aged father. Yet he willingly submitted, like a sheep silent before its shearers. This shadow of obedience points to the Suffering Servant who "was oppressed, and he was afflicted, yet he opened not his mouth" (Isa 53:7).

At the very moment the knife was raised—"the angel of the LORD called to him from heaven and said, 'Abraham, Abraham!' And he said, 'Here I am.' He said, 'Do not lay your hand on the boy or do anything to him, for now I know that you fear God, seeing you have not withheld your son, your only son, from me.'" (Gen 22:11-12)

"And Abraham lifted up his eyes and looked, and behold, behind him was a ram, caught in a thicket by his horns. And Abraham went and took the ram and offered it up as a burnt offering instead of his son." (Gen 22:13) "Instead of"—this is the very heart of the Bible's way of redemption. The ram died in Isaac's place, just as Christ died in ours. Isaac deserved death; the ram took his place. We deserved death; Christ took ours. This is substitutionary atonement. This is the foundation of the gospel.

Abraham called that place "The LORD will provide" (Gen 22:14). This name has comforted believers through every generation: in our most desperate hour, on the mountain where we see no way out, the LORD will provide. And what He provided was nothing less than His own Son, as the atoning sacrifice.

Finally, the angel of the LORD called to Abraham a second time, reaffirming the great promise: "I will surely bless you, and I will surely multiply your offspring as the stars of heaven and as the sand that is on the seashore. And your offspring shall possess the gate of his enemies, and in your offspring shall all the nations of the earth be blessed." (Gen 22:17-18) This "offspring" ultimately points to that one descendant of Abraham—Jesus Christ (Gal 3:16).

Dear brothers and sisters, whenever you read this chapter, may the Spirit open your eyes to see: everything that happened on Mount Moriah was a rehearsal for the salvation accomplished on Golgotha. Abraham did not withhold his only son—but God, for your sake, "did not spare his own Son but gave him up for us all" (Rom 8:32). Abraham's Isaac was returned alive, but God's Isaac—Jesus Christ—truly died, so that you might live. This is grace, this is love, and this is the ultimate destination of all the history I, Moses, was given to write.`,
  historyContext_zh: `创世记22章发生在以撒出生之后、撒拉去世之前。此时亚伯拉罕已定居别是巴（创21:34），以实玛利已被逐出（创21章）。以撒是亚伯拉罕唯一的应许之子，承载着神与亚伯拉罕所立之约的全部盼望。摩利亚地后来成为所罗门建造圣殿之处（代下3:1），这绝非偶然——神在历史的开端就标定了献祭与救赎的地点。亚伯拉罕所处的时代约为主前2000年，当时迦南地盛行将儿女献给偶像的恶俗，但神在此章中彻底否定了人祭，并指向祂自己将要预备的真正祭物。`,
  historyContext_en: `Genesis 22 takes place after Isaac's birth and before Sarah's death. Abraham had settled in Beersheba (Gen 21:34), and Ishmael had been sent away (Gen 21). Isaac was Abraham's sole son of promise, carrying the entire hope of God's covenant with Abraham. The land of Moriah later became the site where Solomon built the temple (2 Chr 3:1)—this was no coincidence. God marked the place of sacrifice and redemption from the very beginning of history. Abraham lived around 2000 BC, when child sacrifice to idols was common in Canaan. In this chapter, God decisively rejected human sacrifice and pointed forward to the true offering He Himself would provide.`,
  structure_zh: `本章结构清晰，可分为五段：（一）神的试验与命令（1-2节）——神呼召亚伯拉罕，发出献以撒为燔祭的命令；（二）顺服的行程（3-6节）——三天路程，父子同行上山；（三）信心的对话（7-8节）——以撒的提问与亚伯拉罕的预言性回答；（四）祭坛上的高潮（9-14节）——捆绑以撒、天使拦阻、公羊代替，命名"耶和华以勒"；（五）应许的重申与拓展（15-24节）——耶和华因亚伯拉罕的顺服再次坚立约中的应许，并以起誓加以确认。全章以试验开始，以祝福结束，显明真正的信心必带来真正的恩典。`,
  structure_en: `The chapter has a clear five-part structure: (1) God's test and command (vv. 1-2)—God calls Abraham and commands him to offer Isaac as a burnt offering; (2) The obedient journey (vv. 3-6)—three days of travel, father and son ascending together; (3) The dialogue of faith (vv. 7-8)—Isaac's question and Abraham's prophetic answer; (4) The climax at the altar (vv. 9-14)—the binding of Isaac, the angel's intervention, the ram as substitute, and the naming of "The LORD Will Provide"; (5) The reaffirmation and expansion of the promise (vv. 15-24)—the LORD reestablishes His covenant promise because of Abraham's obedience, confirmed with an oath. The chapter begins with testing and ends with blessing, demonstrating that true faith always leads to true grace.`,
  theology_zh: `本章的核心神学主题是信心与顺服的关系。亚伯拉罕的信心不是停留在口头的认信，乃是在最极端的试炼中以行动证明的真信心（雅2:21-22）。韦敏斯德信条教导我们，得救的信心不仅包括知识和赞同，更包括在基督里的信靠与交托。亚伯拉罕正是如此——他信靠神的应许不会落空，因此即便面对看似矛盾的命令，仍然顺服。本章也彰显了神的主权与信实：祂有权试验祂的子民，但祂绝不撇弃祂的应许。"耶和华以勒"这个名字宣告了一个永恒的真理：救恩从始至终都是神的预备，不是人的努力。`,
  theology_en: `The central theological theme of this chapter is the relationship between faith and obedience. Abraham's faith was not mere verbal profession but true faith demonstrated by action under the most extreme trial (Jas 2:21-22). The Westminster Confession teaches that saving faith includes not only knowledge and assent but trust and reliance upon Christ. Abraham exemplified this—he trusted that God's promise could not fail, and therefore obeyed even when the command seemed to contradict that promise. This chapter also displays God's sovereignty and faithfulness: He has the right to test His people, but He never abandons His promise. The name "The LORD Will Provide" proclaims an eternal truth: salvation from beginning to end is God's provision, not human effort.`,
  christShadow_zh: `创世记22章是旧约中最丰富、最清晰的基督预表。请看这些对应：

第一，以撒是基督的影子。神称以撒为"你的儿子，你独生的儿子，你所爱的"（创22:2），正对应天父论到基督："这是我的爱子，我所喜悦的"（太3:17）。以撒甘愿被捆绑在祭坛上，没有反抗，预表基督"存心顺服，以至于死，且死在十字架上"（腓2:8）。以撒背柴上摩利亚山，预表基督背十字架走向各各他（约19:17）。以撒三天后从"死亡"中被归还给亚伯拉罕（来11:19），预表基督三日后从死里复活。

第二，公羊代替以撒，是代赎的核心图画。以撒本当死，公羊"代替他的儿子"（创22:13）被献上——这正是以赛亚所预言的："耶和华使我们众人的罪孽都归在他身上……像羊羔被牵到宰杀之地"（赛53:6-7）。在摩利亚山上，是公羊代替人子；在各各他山上，是神的羔羊代替罪人。

第三，地点的奥秘。摩利亚山正是后来所罗门建圣殿之处（代下3:1），也在各各他山附近。神在亚伯拉罕的时代就拣选了这个地方，两千年后，祂的独生子就在这同一座山的周围，被钉在十字架上，成就了永远的赎罪祭。

第四，"神必自己预备作燔祭的羊羔"（创22:8）——这句话贯穿整本圣经的救赎历史。从创世记到启示录，从摩利亚山到各各他，从亚伯拉罕的口到施洗约翰的宣告"看哪，神的羔羊，除去世人罪孽的"（约1:29），神始终在预备那一位终极的祭物。

然而，预表终究不是实体。亚伯拉罕的以撒被救回来了，刀没有落下；但天父的独生子，却没有被救回——"神既不爱惜自己的儿子，为我们众人舍了"（罗8:32）。在摩利亚山上，有天使喊"住手"；在各各他山上，没有声音喊"住手"。这就是恩典最深处的奥秘：亚伯拉罕不必付出的代价，天父亲自付了。`,
  christShadow_en: `Genesis 22 is the richest and clearest typology of Christ in the entire Old Testament. Consider these parallels:

First, Isaac is a shadow of Christ. God called Isaac "your son, your only son, whom you love" (Gen 22:2), directly corresponding to the Father's words about Christ: "This is my beloved Son, with whom I am well pleased" (Matt 3:17). Isaac willingly submitted to being bound on the altar without resistance, foreshadowing Christ who "humbled himself by becoming obedient to the point of death, even death on a cross" (Phil 2:8). Isaac carried the wood up Mount Moriah, prefiguring Christ carrying His cross to Golgotha (John 19:17). Isaac was received back from "death" after three days (Heb 11:19), foreshadowing Christ's resurrection on the third day.

Second, the ram substituted for Isaac is the core image of substitutionary atonement. Isaac deserved to die; the ram was offered "instead of his son" (Gen 22:13)—this is precisely what Isaiah prophesied: "The LORD has laid on him the iniquity of us all... like a lamb that is led to the slaughter" (Isa 53:6-7). On Moriah, a ram took the place of the son; on Golgotha, the Lamb of God took the place of sinners.

Third, the mystery of the location. Mount Moriah is the very place where Solomon later built the temple (2 Chr 3:1), near Golgotha. God chose this place in Abraham's day, and two thousand years later, His only Son was crucified on this same mountain ridge, accomplishing the eternal atoning sacrifice.

Fourth, "God will provide for himself the lamb" (Gen 22:8)—this sentence threads through the entire redemptive history of Scripture. From Genesis to Revelation, from Moriah to Golgotha, from Abraham's lips to John the Baptist's declaration, "Behold, the Lamb of God, who takes away the sin of the world!" (John 1:29), God was always providing that one ultimate sacrifice.

Yet the type is not the reality. Abraham's Isaac was spared—the knife did not fall. But the Father's only Son was not spared—"He who did not spare his own Son but gave him up for us all" (Rom 8:32). On Moriah, an angel cried "Stop!" On Golgotha, no voice cried "Stop!" This is the deepest mystery of grace: the price Abraham did not have to pay, the heavenly Father paid Himself.`,
});
readings.push({
  book: '创世记', bookEn: 'Genesis', chapter: 23,
  publishDate: '2026-03-18',
  title: '撒拉之死', titleEn: 'The Death of Sarah',
  author: '摩西', authorEn: 'Moses',
  scripture: '创世记 23:1-20 / Genesis 23:1-20',
  content_zh: `
亲爱的弟兄姊妹，我是摩西。当耶和华感动我写下这卷书的时候，我在旷野已经年迈。我带领以色列人出了埃及，却尚未踏入那应许之地。正因如此，当我提笔写到亚伯拉罕在迦南地为撒拉买坟地的这一章时，我心中满了感触——信心的寄居者，如何在尚未得着应许的时候，仍然持守盼望？

撒拉的一生，是与亚伯拉罕同行信心之路的一生。经上记着说："撒拉享寿一百二十七岁，这是撒拉一生的岁数。撒拉死在迦南地的基列亚巴，就是希伯仑。亚伯拉罕为他哀恸哭号。"（创23:1-2）在整卷创世记中，撒拉是唯一被记下寿数的女子。耶和华如此记念她，因为她是应许之子以撒的母亲，是那信心家庭的柱石。她曾经笑过——在帐棚门口听见天使说她要生子的时候，她笑了（创18:12）；后来以撒出生，她又笑了，那是喜乐的笑（创21:6）。如今，那笑声归于寂静，信心的同路人走完了地上的旅程。

亚伯拉罕"为她哀恸哭号"——请注意，信心之父并非不悲伤。他哀哭，因为失去至亲是真实的痛苦；但他不像那些没有指望的人一样绝望（帖前4:13）。他的眼泪是真实的，他的盼望也是真实的。弟兄姊妹，当你面对丧失和哀伤的时候，不必压抑你的泪水——连亚伯拉罕都哭了。但要在哀哭中仰望那位使无变有、叫死人复活的神（罗4:17）。

接下来发生的事，在人看来不过是一桩地产交易，在神的眼中却是一篇信心的宣告。亚伯拉罕从死人面前起来，对赫人说："我在你们中间是外人，是寄居的。求你们在这里给我一块地，我好埋葬我的死人，使他不在我眼前。"（创23:3-4）

请留意亚伯拉罕如何称呼自己——"外人"、"寄居的"。他蒙神呼召离开吾珥，走遍迦南全地，神应许说："我要将你所看见的一切地都赐给你和你的后裔，直到永远。"（创13:15）然而直到撒拉去世，他在这片应许之地连立足之地都没有。他住帐棚，不是因为贫穷，乃是因为他"等候那座有根基的城，就是神所经营所建造的"（来11:10）。

赫人回答得很客气："我主请听。你在我们中间是一位尊大的王子，只管在我们最好的坟地里埋葬你的死人；我们没有一人不容你在他的坟地里埋葬你的死人。"（创23:5-6）他们愿意白白送给亚伯拉罕一块坟地。但亚伯拉罕拒绝了。他坚持要买，而且坚持要付足价银。他看中了麦比拉洞，就是以弗仑的那块田和洞。

以弗仑先是说要白送，后来又说出了价钱："值四百舍客勒银子的一块田，在你我中间还算甚么呢？只管埋葬你的死人罢！"（创23:15）亚伯拉罕没有讨价还价，"照着他在赫人面前所说的话，把买卖通用的银子平了四百舍客勒给以弗仑。"（创23:16）

弟兄姊妹，亚伯拉罕为何坚持付全价？因为这不仅仅是一桩交易——这是一个信心的行动。他要在法律上、在众人面前确确实实地拥有这块地。这是他在迦南地第一块合法拥有的产业。他一生寄居，从未拥有一亩应许之地的土地，如今却花重价买了一块坟地。这看似矛盾，实则深意无穷：他不是为活人买房屋，乃是为死人买坟墓——因为他相信，这片土地终将属于他的后裔，而他和撒拉虽然死了，却仍要在复活中承受这应许。

希伯来书的作者这样解释这些信心伟人："这些人都是存着信心死的，并没有得着所应许的；却从远处望见，且欢喜迎接，又承认自己在世上是客旅，是寄居的。说这样话的人是表明自己要找一个家乡。他们若想念所离开的家乡，还有可以回去的机会。他们却羡慕一个更美的家乡，就是在天上的。所以神被称为他们的神，并不以为耻，因为他已经给他们预备了一座城。"（来11:13-16）

亚伯拉罕把撒拉埋葬在麦比拉田间的洞里。后来，亚伯拉罕自己也埋葬在那里（创25:9），以撒和利百加埋在那里，雅各和利亚也埋在那里（创49:31）。这个洞穴成为了列祖信心的纪念碑——他们都死在应许之地，等候那更美的复活。

最后，让我说说亚伯拉罕在这笔交易中所表现的品格。他在赫人面前诚实守信、光明磊落。他不占便宜，不取白给之物，在异族面前活出了耶和华子民当有的见证。弟兄姊妹，我们在世上也是客旅，但我们在世人面前的行为，就是我们信仰的见证。保罗后来写道："你们行事为人与基督的福音相称。"（腓1:27）亚伯拉罕在四千年前就已经这样行了。

我写下这些事，是要你们知道：信心不是空洞的口号，信心是在看不见应许成就的时候，仍然凭着信心行事。亚伯拉罕买了一块坟地，把妻子的身体安放在应许之地的土里——这是何等的信心宣告：我相信神的应许必定成就，哪怕我今生看不见，我的后裔必要承受这地！

愿这位亚伯拉罕的神、以撒的神、雅各的神，也坚固你的信心，使你在寄居的日子里，持守那活泼的盼望，直到见主面的日子。阿们。
`,
  content_en: `
Dear brothers and sisters, I am Moses. When the LORD moved me to write this book, I was already aged in the wilderness. I had led Israel out of Egypt, yet had not set foot in the Promised Land. For this very reason, when I took up the pen to record Abraham purchasing a burial site in Canaan for Sarah, my heart was deeply stirred — how does a sojourner of faith hold fast to hope when the promise remains unfulfilled?

Sarah's life was one of walking the path of faith alongside Abraham. As it is written: "Sarah lived 127 years; these were the years of the life of Sarah. And Sarah died at Kiriath-arba (that is, Hebron) in the land of Canaan, and Abraham went in to mourn for Sarah and to weep for her." (Gen 23:1-2) In all of Genesis, Sarah is the only woman whose lifespan is recorded. The LORD remembered her so, for she was the mother of Isaac, the child of promise, and the pillar of that household of faith. She had once laughed — when she overheard the angel say she would bear a son (Gen 18:12); and she laughed again when Isaac was born, this time with joy (Gen 21:6). Now that laughter fell silent; the companion of faith had finished her earthly journey.

Abraham "went in to mourn for Sarah and to weep for her" — note well, the father of faith was not without grief. He wept because losing a beloved is real pain; yet he did not grieve as those who have no hope (1 Thess 4:13). His tears were real, and his hope was equally real. Brothers and sisters, when you face loss and sorrow, do not suppress your tears — even Abraham wept. But in your weeping, look to the God who gives life to the dead and calls into existence the things that do not exist (Rom 4:17).

What followed may appear to be merely a real estate transaction, but in God's eyes it was a declaration of faith. Abraham rose from before his dead and said to the Hittites, "I am a sojourner and foreigner among you; give me property among you for a burying place, that I may bury my dead out of my sight." (Gen 23:3-4)

Notice how Abraham identified himself — "a sojourner and foreigner." He had been called by God to leave Ur, had traversed the entire land of Canaan, and God had promised: "All the land that you see I will give to you and to your offspring forever." (Gen 13:15) Yet by the time Sarah died, he did not own a single plot in this promised land. He dwelt in tents, not because of poverty, but because "he was looking forward to the city that has foundations, whose designer and builder is God" (Heb 11:10).

The Hittites responded courteously: "Hear us, my lord; you are a prince of God among us. Bury your dead in the choicest of our tombs. None of us will withhold from you his tomb to hinder you from burying your dead." (Gen 23:5-6) They were willing to give Abraham a burial site for free. But Abraham refused. He insisted on purchasing it and paying the full price. He had set his heart on the cave of Machpelah, belonging to Ephron — the field and the cave within it.

Ephron first offered to give it freely, then named a price: "My lord, listen to me: a piece of land worth four hundred shekels of silver, what is that between you and me? Bury your dead." (Gen 23:15) Abraham did not bargain. He "weighed out for Ephron the silver that he had named in the hearing of the Hittites, four hundred shekels of silver, according to the weights current among the merchants." (Gen 23:16)

Brothers and sisters, why did Abraham insist on paying the full price? Because this was not merely a transaction — it was an act of faith. He wanted to possess this land legally and publicly, beyond any dispute. This was the first piece of property he legally owned in Canaan. He had sojourned his entire life without owning a single acre of the promised land, and now he paid a heavy price for a burial plot. This seems contradictory, yet its meaning is profound: he did not buy a house for the living but a tomb for the dead — because he believed this land would ultimately belong to his descendants, and that he and Sarah, though dead, would inherit the promise through resurrection.

The author of Hebrews explains these heroes of faith: "These all died in faith, not having received the things promised, but having seen them and greeted them from afar, and having acknowledged that they were strangers and exiles on the earth. For people who speak thus make it clear that they are seeking a homeland. If they had been thinking of that land from which they had gone out, they would have had opportunity to return. But as it is, they desire a better country, that is, a heavenly one. Therefore God is not ashamed to be called their God, for he has prepared for them a city." (Heb 11:13-16)

Abraham buried Sarah in the cave of the field of Machpelah. Later, Abraham himself was buried there (Gen 25:9), Isaac and Rebekah were buried there, and Jacob and Leah were buried there (Gen 49:31). This cave became a monument to the patriarchs' faith — they all died in the Promised Land, awaiting the better resurrection.

Finally, let me speak of the character Abraham displayed in this transaction. He was honest, upright, and transparent before the Hittites. He took no advantage, accepted nothing for free, and lived out the witness that the people of the LORD ought to bear before the nations. Brothers and sisters, we too are sojourners in this world, but our conduct before the watching world is the testimony of our faith. Paul later wrote: "Only let your manner of life be worthy of the gospel of Christ." (Phil 1:27) Abraham practiced this very thing four thousand years ago.

I wrote these things so that you may know: faith is not an empty slogan. Faith is acting in obedience when you cannot yet see the promise fulfilled. Abraham bought a burial plot and laid his wife's body in the soil of the Promised Land — what a declaration of faith: I believe God's promise will surely come to pass; though I may not see it in my lifetime, my offspring will possess this land!

May the God of Abraham, the God of Isaac, and the God of Jacob also strengthen your faith, so that in your days of sojourning you may hold fast to that living hope, until the day you see the Lord face to face. Amen.
`,
  historyContext_zh: `创世记23章的背景约在主前2000年左右。撒拉死时127岁，亚伯拉罕约137岁，以撒37岁。基列亚巴即希伯仑，位于迦南地南部山地，是当时赫人聚居之地。赫人（赫梯人）是古代近东的重要民族，亚伯拉罕与他们的交易遵循了当时通行的地产交易惯例——在城门口、在众人面前公开议价并称量银子。四百舍客勒银子在当时是一笔相当可观的费用（参耶利米花十七舍客勒买田，耶32:9），显示亚伯拉罕为确保合法拥有权而甘付高价。麦比拉洞后来成为列祖家族墓地，至今仍是希伯仑最重要的历史遗址。`,
  historyContext_en: `Genesis 23 is set around 2000 BC. Sarah died at 127, Abraham was about 137, and Isaac was 37. Kiriath-arba, that is Hebron, lies in the southern hill country of Canaan and was then inhabited by the Hittites. The Hittites were a significant ancient Near Eastern people, and Abraham's transaction with them followed the customary land-purchase protocol of the time — negotiating publicly at the city gate and weighing out silver before witnesses. Four hundred shekels of silver was a substantial sum (compare Jeremiah's purchase of a field for seventeen shekels, Jer 32:9), showing Abraham's willingness to pay a premium to secure undisputed legal ownership. The cave of Machpelah became the patriarchal family tomb and remains the most important historical site in Hebron to this day.`,
  structure_zh: `创世记23章结构清晰，可分为四段：（一）撒拉之死与亚伯拉罕的哀恸（1-2节）——全章的起因，记录撒拉寿数与去世地点；（二）亚伯拉罕向赫人求购坟地（3-6节）——自称"外人和寄居的"，赫人尊称他为"尊大的王子"；（三）具体交涉：麦比拉洞的购买过程（7-16节）——从请求以弗仑卖地，到以弗仑假意赠送，再到亚伯拉罕坚持付全价四百舍客勒，是全章的核心叙事；（四）产权确认与安葬（17-20节）——详细记录田地、洞穴、树木的产权转移，并以撒拉的安葬作结。全章以法律文书般的精确语言写成，强调产权的合法性与公开性。`,
  structure_en: `Genesis 23 has a clear four-part structure: (1) Sarah's death and Abraham's mourning (vv. 1-2) — the occasion of the chapter, recording Sarah's lifespan and place of death; (2) Abraham's request to the Hittites for a burial site (vv. 3-6) — he calls himself "a sojourner and foreigner," while they honor him as "a prince of God"; (3) The negotiation: purchasing the cave of Machpelah (vv. 7-16) — from the initial request to Ephron, to Ephron's ostensible offer of a gift, to Abraham's insistence on paying the full price of four hundred shekels — this is the core narrative; (4) Transfer of ownership and burial (vv. 17-20) — a precise legal record of the field, cave, and trees changing hands, concluding with Sarah's burial. The entire chapter reads with the precision of a legal document, emphasizing the legitimacy and public nature of the transaction.`,
  theology_zh: `本章蕴含丰富的改革宗神学要义。第一，寄居者的身份与天上的盼望：亚伯拉罕自称"外人和寄居的"（23:4），韦敏斯德大要理问答第87问教导，信徒在今世是客旅，等候灵魂与身体在末日完全得赎。第二，信心的确据：亚伯拉罕花重价买坟地，不是绝望之举，乃是信心的宣告——他相信神必将这地赐给他的后裔（创13:15），因此将亲人的骨骸安放在应许之地（来11:13-16）。第三，在哀恸中的盼望：亚伯拉罕哀哭但不绝望，这合乎保罗所教导的"恐怕你们忧伤，像那些没有指望的人一样"（帖前4:13）。第四，诚信的见证：亚伯拉罕在外邦人面前公义行事，不贪不占，彰显了神子民在世的见证。神的护理贯穿此事——这块地后来成为列祖的安息之所，也是神信实守约的明证。`,
  theology_en: `This chapter contains rich Reformed theological significance. First, the sojourner's identity and heavenly hope: Abraham called himself "a sojourner and foreigner" (23:4); Westminster Larger Catechism Q87 teaches that believers in this life are pilgrims, awaiting the full redemption of soul and body at the last day. Second, the assurance of faith: Abraham's costly purchase of a tomb was not an act of despair but a declaration of faith — he believed God would give this land to his offspring (Gen 13:15), and therefore laid his loved one's remains in the Promised Land (Heb 11:13-16). Third, hope amid grief: Abraham mourned but did not despair, consistent with Paul's instruction not to "grieve as others do who have no hope" (1 Thess 4:13). Fourth, the witness of integrity: Abraham dealt justly before the Gentiles, taking no advantage, displaying the testimony God's people ought to bear in the world. God's providence threads through this event — this plot of land became the patriarchal resting place and stands as proof of God's covenant faithfulness.`,
  christShadow_zh: `在这看似平凡的丧葬记事中，基督的影子若隐若现。第一，亚伯拉罕为安葬撒拉付出了"足价"——四百舍客勒银子，不接受白白赠送。这预表了基督为祂的新妇（教会）所付的代价：不是用能朽坏的金银，乃是用祂自己的宝血（彼前1:18-19）。祂付了完全的代价，买赎了属于祂的百姓。第二，麦比拉洞是死人安息之所，却也是复活盼望的记号。基督自己被埋葬在借来的坟墓中，第三天从死里复活，成为"睡了之人初熟的果子"（林前15:20）。列祖埋在麦比拉洞，等候的正是这位复活的基督。第三，亚伯拉罕在应许之地买坟地，是对神应许的信心回应；基督的复活则是神对所有应许的终极成全——"神的应许，不论有多少，在基督都是是的"（林后1:20）。`,
  christShadow_en: `In this seemingly ordinary burial account, the shadow of Christ appears. First, Abraham paid "full price" — four hundred shekels of silver — to bury Sarah, refusing a free gift. This foreshadows the price Christ paid for His bride, the Church: not with perishable silver or gold, but with His own precious blood (1 Pet 1:18-19). He paid the complete price to redeem a people for Himself. Second, the cave of Machpelah was a resting place for the dead, yet also a sign of resurrection hope. Christ Himself was buried in a borrowed tomb, and on the third day He rose from the dead, becoming "the firstfruits of those who have fallen asleep" (1 Cor 15:20). The patriarchs buried in Machpelah awaited this very risen Christ. Third, Abraham's purchase of a burial site in the Promised Land was a faith-response to God's promise; Christ's resurrection is God's ultimate fulfillment of all His promises — "For all the promises of God find their Yes in him" (2 Cor 1:20).`,
});
readings.push({
  book: '创世记', bookEn: 'Genesis', chapter: 24,
  publishDate: '2026-03-19',
  title: '以撒的新娘', titleEn: 'A Bride for Isaac',
  author: '摩西', authorEn: 'Moses',
  scripture: '创世记 24:1-67 / Genesis 24:1-67',
  content_zh: `亲爱的读者，我是摩西，耶和华的仆人。今天我要带你细读创世记第二十四章——这是创世记中最长的一章，共六十七节。为什么圣灵引导我用如此大的篇幅来记载一桩婚事？因为这不仅仅是一个婚姻的故事，这是一幅关乎救赎的荣耀图画。

**一、父亲的差遣（1-9节）**

"亚伯拉罕年纪老迈，向来在一切事上耶和华都赐福给他。"（创24:1）经文以这句话开篇，让我们看见一位蒙福的父亲。亚伯拉罕一生跟随耶和华，如今他最挂心的事，不是财产的分配，而是儿子以撒的婚姻。他叫了管理他全业最老的仆人来，郑重地嘱咐他："你要往我本地本族去，为我的儿子以撒娶一个妻子。"（创24:4）

亚伯拉罕为何如此坚持？因为他深知迦南人不敬畏耶和华。信仰的纯洁比地理的方便更为重要。他凭信心宣告："耶和华——天上的主……他必差遣使者在你面前，你就可以从那里为我儿子娶一个妻子。"（创24:7）这位年迈的族长，信心丝毫未减。

**二、仆人的祷告（10-14节）**

那仆人带了十匹骆驼和各样美物，起身往美索不达米亚去，到了拿鹤的城。他使骆驼跪在城外的水井旁。请留意，这位无名的仆人做了一件极其重要的事——他祷告了。

"耶和华——我主人亚伯拉罕的神阿，求你施恩给我主人亚伯拉罕，使我今日遇见好机会。"（创24:12）他没有倚靠自己的智慧去挑选，而是完全仰望神的引导。他甚至设定了一个具体的记号："我向哪一个女子说：'请你拿下水瓶来，给我水喝'，他若说：'请喝！我也给你的骆驼喝'，愿那女子就作你所预定给你仆人以撒的妻。"（创24:14）

这个记号绝非随意。一匹骆驼饮足需要约二十加仑的水，十匹就是两百加仑！愿意做这事的女子，必然有非凡的慷慨、勤劳和服事的心志。

**三、利百加在井旁（15-27节）**

"话还没有说完，不料，利百加肩头上扛着水瓶出来。"（创24:15）神的回应何等迅速！利百加不仅容貌俊美，更重要的是她心地善良。她对一个素不相识的旅人说："请喝！"又说："我再为你的骆驼打水，叫骆驼也喝足。"（创24:18-19）

经文特别记载："那人定睛看他，一句话也不说，要晓得耶和华赐他通达的道路没有。"（创24:21）仆人安静地观察，等候神的印证。当他确认这就是神所预备的，他便俯伏在地，敬拜耶和华，说："耶和华——我主人亚伯拉罕的神是应当称颂的，因他不断地以慈爱诚实待我主人。至于我，耶和华在路上引领我，直走到我主人的兄弟家里。"（创24:26-27）

**四、拉班家中的见证（28-53节）**

利百加跑回家告诉母亲，她哥哥拉班出来迎接仆人。仆人被请进家中，但他说："我不吃，等我说明白我的事情再吃。"（创24:33）他将亚伯拉罕的富足、以撒的尊贵、神一路的引导，都详细述说了。

拉班和彼土利回答说："这事乃出于耶和华，我们不能向你说好说歹。看哪，利百加在你面前，可以将他带去，照着耶和华所说的，给你主人的儿子为妻。"（创24:50-51）连这些还不完全认识耶和华的人，也不得不承认：这事出于神。

**五、利百加的信心："我去"（54-61节）**

第二天早晨，仆人说："请打发我回我主人那里去吧。"利百加的哥哥和母亲想留她多住几天，至少十天。但仆人坚持要走。于是他们叫了利百加来，问她："你和这人同去吗？"利百加说："我去。"（创24:58）

这两个字何等有力！利百加几乎不认识以撒，也从未见过迦南地。她只凭仆人的见证，就甘愿离开父家、离开本族，踏上一条完全未知的道路。这是信心，是对神引导的信靠。她的家人为她祝福说："我们的妹子阿，愿你作千万人的母！愿你的后裔得着仇敌的城门！"（创24:60）——这祝福遥遥呼应了神给亚伯拉罕的应许。

**六、在田间的相遇（62-67节）**

"以撒住在南地……天将晚，以撒出来在田间默想。"（创24:62,63）这位安静等候的新郎，举目远望，看见骆驼来了。利百加也举目看见以撒，就急忙下了骆驼。当她得知那人就是以撒，便拿帕子蒙上脸。

"以撒便领利百加进了他母亲撒拉的帐棚，娶了他为妻，并且爱他。以撒自从他母亲不在了，这才得了安慰。"（创24:67）一段美好的婚姻，始于父亲的安排，成于仆人的忠心，终于新郎与新妇在田间的相遇。

读者啊，当我写下这六十七节经文时，圣灵在我心中激荡。这不仅是以撒和利百加的故事。这是天父为祂独生爱子预备新妇的永恒计划的一个影子。求主开你的眼睛，在这古老的叙事中看见那将要来的基督，和祂用重价赎回的教会。`,
  content_en: `Dear reader, I am Moses, the servant of the LORD. Today I bring you through Genesis chapter 24—the longest chapter in all of Genesis, spanning sixty-seven verses. Why did the Holy Spirit lead me to devote such length to a marriage account? Because this is not merely a wedding story; it is a glorious portrait of redemption.

**I. The Father's Commission (vv. 1–9)**

"Now Abraham was old, well advanced in years. And the LORD had blessed Abraham in all things." (Gen 24:1) The chapter opens with a blessed father. Abraham had followed the LORD all his life, and now his greatest concern was not the distribution of wealth but his son Isaac's marriage. He summoned his oldest servant and solemnly charged him: "You will go to my country and to my kindred, and take a wife for my son Isaac." (Gen 24:4)

Why such insistence? Abraham knew that the Canaanites did not fear the LORD. Purity of faith mattered more than convenience of geography. In faith he declared: "The LORD, the God of heaven…will send his angel before you, and you shall take a wife for my son from there." (Gen 24:7) This aged patriarch's faith had not diminished one measure.

**II. The Servant's Prayer (vv. 10–14)**

The servant took ten camels and all manner of fine gifts, and set out for Mesopotamia, arriving at the city of Nahor. He made the camels kneel outside the city by the well of water. Note carefully: this unnamed servant did something of supreme importance—he prayed.

"O LORD, God of my master Abraham, please grant me success today and show steadfast love to my master Abraham." (Gen 24:12) He did not rely on his own wisdom to choose; he depended entirely on God's guidance. He even set a specific sign: "Let the young woman to whom I shall say, 'Please let down your jar that I may drink,' and who shall say, 'Drink, and I will water your camels'—let her be the one whom you have appointed for your servant Isaac." (Gen 24:14)

This sign was far from arbitrary. A single camel can drink roughly twenty gallons of water; ten camels would require two hundred gallons! A woman willing to do this must possess extraordinary generosity, diligence, and a servant's heart.

**III. Rebekah at the Well (vv. 15–27)**

"Before he had finished speaking, behold, Rebekah…came out with her water jar on her shoulder." (Gen 24:15) How swift was God's answer! Rebekah was not only beautiful in appearance; far more importantly, she was beautiful in heart. She said to a complete stranger, "Drink, my lord," and added, "I will draw water for your camels also, until they have finished drinking." (Gen 24:18–19)

Scripture records: "The man gazed at her in silence to learn whether the LORD had prospered his journey or not." (Gen 24:21) The servant watched quietly, awaiting God's confirmation. When he was convinced this was God's provision, he bowed his head and worshiped the LORD, saying: "Blessed be the LORD, the God of my master Abraham, who has not forsaken his steadfast love and his faithfulness toward my master. As for me, the LORD has led me in the way to the house of my master's kinsmen." (Gen 24:26–27)

**IV. Testimony in Laban's House (vv. 28–53)**

Rebekah ran home to tell her mother, and her brother Laban came out to welcome the servant. Though invited in, the servant said, "I will not eat until I have said what I have to say." (Gen 24:33) He recounted Abraham's wealth, Isaac's honor, and God's guidance along the entire journey.

Laban and Bethuel answered, "The thing has come from the LORD; we cannot speak to you bad or good. Behold, Rebekah is before you; take her and go, and let her be the wife of your master's son, as the LORD has spoken." (Gen 24:50–51) Even these people, who did not fully know the LORD, could not help but acknowledge: this thing was from God.

**V. Rebekah's Faith: "I Will Go" (vv. 54–61)**

The next morning, the servant said, "Send me away to my master." Rebekah's brother and mother wanted her to remain at least ten days. But the servant urged them not to delay. So they called Rebekah and asked her, "Will you go with this man?" Rebekah said, "I will go." (Gen 24:58)

What powerful words! Rebekah scarcely knew Isaac and had never seen the land of Canaan. Based solely on the servant's testimony, she was willing to leave her father's house, leave her kindred, and set out on a wholly unknown road. This was faith—trust in God's leading. Her family blessed her: "Our sister, may you become thousands of ten thousands, and may your offspring possess the gate of those who hate him!" (Gen 24:60)—a blessing that echoes God's promise to Abraham.

**VI. The Meeting in the Field (vv. 62–67)**

"Now Isaac…settled in the Negeb…And Isaac went out to meditate in the field toward evening." (Gen 24:62–63) This quiet, waiting bridegroom lifted up his eyes and saw the camels coming. Rebekah also lifted her eyes, and when she saw Isaac, she dismounted from the camel. When she learned who he was, she took her veil and covered herself.

"Then Isaac brought Rebekah into the tent of Sarah his mother and took Rebekah, and she became his wife, and he loved her. So Isaac was comforted after his mother's death." (Gen 24:67) A beautiful marriage—initiated by the father's plan, accomplished through the servant's faithfulness, and consummated in the bridegroom and bride's meeting in the field.

Reader, when I penned these sixty-seven verses, the Holy Spirit stirred within me. This is not merely the story of Isaac and Rebekah. It is a shadow of the Heavenly Father's eternal plan to prepare a bride for His only begotten Son. May the Lord open your eyes to see, within this ancient narrative, the Christ who was to come and the Church He purchased at great price.`,
  historyContext_zh: `创世记第24章的背景发生在亚伯拉罕晚年。撒拉已经去世（第23章），亚伯拉罕在希伯仑的麦比拉洞安葬了她。以撒约四十岁，尚未婚配。亚伯拉罕寄居在迦南地，周围是拜偶像的迦南人。按照古近东的习俗，父亲为儿子安排婚姻是庄重的责任。亚伯拉罕坚持不从迦南人中娶妻，而差仆人回到哈兰的亲族中去——这是信仰纯洁的考量。美索不达米亚的拿鹤城（今叙利亚东北部）是亚伯拉罕兄弟拿鹤的后裔所居之地，利百加正是拿鹤的孙女、彼土利的女儿。`,
  historyContext_en: `Genesis 24 is set in Abraham's old age. Sarah had already died (ch. 23), and Abraham buried her in the cave of Machpelah near Hebron. Isaac was about forty years old and still unmarried. Abraham sojourned in Canaan, surrounded by idol-worshiping Canaanites. In ancient Near Eastern custom, arranging a son's marriage was a father's solemn duty. Abraham's insistence on not taking a wife from the Canaanites but sending his servant back to his kindred in Haran was a matter of preserving covenant faith. The city of Nahor in Mesopotamia (modern northeastern Syria) was where the descendants of Abraham's brother Nahor dwelt; Rebekah was Nahor's granddaughter, the daughter of Bethuel.`,
  structure_zh: `创世记第24章可分为六个段落：
一、父亲的差遣（1-9节）——亚伯拉罕嘱咐仆人为以撒娶妻，立下誓约。
二、仆人的祷告（10-14节）——仆人到达井旁，向耶和华祈求明确的印证。
三、井旁的相遇（15-27节）——利百加慷慨打水，仆人确认神的引导，俯伏敬拜。
四、拉班家的见证（28-53节）——仆人述说神的作为，彼土利和拉班承认"这事出于耶和华"。
五、利百加的决定（54-61节）——面对挽留，利百加以信心回应"我去"，踏上未知之路。
六、田间的相遇（62-67节）——以撒在田间默想，利百加到来，二人结为夫妻。
全章以"神的引导"为主线，从祷告到成就，处处彰显耶和华的护理之工。`,
  structure_en: `Genesis 24 divides into six movements:
I. The Father's Commission (vv. 1–9) — Abraham charges his servant with an oath to find a wife for Isaac.
II. The Servant's Prayer (vv. 10–14) — The servant arrives at the well and asks the LORD for a clear sign.
III. The Meeting at the Well (vv. 15–27) — Rebekah generously draws water; the servant confirms God's guidance and worships.
IV. Testimony in Laban's House (vv. 28–53) — The servant recounts God's deeds; Bethuel and Laban acknowledge "this thing has come from the LORD."
V. Rebekah's Decision (vv. 54–61) — Faced with family's plea to delay, Rebekah responds in faith: "I will go," setting out on an unknown journey.
VI. The Meeting in the Field (vv. 62–67) — Isaac meditates in the field; Rebekah arrives; the two become husband and wife.
The entire chapter is threaded by the theme of divine guidance—from prayer to fulfillment—displaying the LORD's providential care at every turn.`,
  theology_zh: `本章最核心的神学主题是**神的护理（Providence）**。韦敏斯德小要理问答第11问教导我们："神的护理之工，就是祂用至极的圣洁、智慧和大能，保守并管理祂所造的万物，和他们一切的行动。"在整章中，仆人祷告、利百加出现、拉班同意、利百加甘愿前行——每一步都不是偶然，而是神主权的安排。

其次，本章彰显了**圣约的信实**。神应许亚伯拉罕"地上的万族都要因你得福"（创12:3），以撒的婚姻正是这应许延续的关键一环。神亲自护理这桩婚事，确保应许之子有应许的后裔。

第三，**信心的顺服**贯穿全章：亚伯拉罕凭信差遣，仆人凭信祷告，利百加凭信说"我去"。正如希伯来书11:8所言："亚伯拉罕因着信，蒙召的时候，就遵命出去。"利百加同样蒙召，凭信踏上未知的路。`,
  theology_en: `The central theological theme of this chapter is **God's Providence**. Westminster Shorter Catechism Q.11 teaches: "God's works of providence are his most holy, wise, and powerful preserving and governing all his creatures, and all their actions." Throughout the chapter—the servant's prayer, Rebekah's appearance, Laban's consent, Rebekah's willingness—every step is not coincidence but the sovereign arrangement of God.

Second, the chapter displays **covenant faithfulness**. God promised Abraham, "In you all the families of the earth shall be blessed" (Gen 12:3), and Isaac's marriage was a critical link in the continuation of that promise. God Himself superintended this union to ensure the son of promise would have promised offspring.

Third, **the obedience of faith** runs through the entire chapter: Abraham sends in faith, the servant prays in faith, and Rebekah says "I will go" in faith. As Hebrews 11:8 states, "By faith Abraham obeyed when he was called to go out." Rebekah was likewise called and set out by faith on an unknown road.`,
  christShadow_zh: `创世记第24章是圣经中最完整的基督与教会之预表之一。

**亚伯拉罕预表天父**——祂差遣仆人为爱子寻找新娘，正如天父在永恒中定意为基督预备教会（弗1:4-5）。**无名的仆人预表圣灵**——他不荣耀自己，只述说主人的富足和新郎的尊贵，引导新娘归向新郎。正如主耶稣所说："他（圣灵）要荣耀我，因为他要将受于我的告诉你们。"（约16:14）

**以撒预表基督**——他是父所爱的独生子，曾在摩利亚山上被献（创22章），如今在田间安静等候新娘的到来。基督也是如此，祂已成就了救赎之工，如今在天上等候祂的教会。

**利百加预表教会**——她原本不认识以撒，只凭仆人的见证就甘愿离开旧生活。信徒也是如此，"你们虽然没有见过他，却是爱他；如今虽不得看见，却因信他就有说不出来、满有荣光的大喜乐。"（彼前1:8）她那句"我去"，是每一个蒙召之人信心回应的缩影。

正如保罗所说："丈夫是妻子的头，如同基督是教会的头……基督爱教会，为教会舍己。"（弗5:23,25）这桩古老的婚事，遥指那终极的婚筵——羔羊的婚宴（启19:7-9）。`,
  christShadow_en: `Genesis 24 is one of Scripture's most complete typological portraits of Christ and the Church.

**Abraham typifies the Father** — He sends his servant to find a bride for his beloved son, just as the Heavenly Father purposed from eternity to prepare the Church for Christ (Eph 1:4–5). **The unnamed servant typifies the Holy Spirit** — he does not glorify himself but speaks of the master's riches and the bridegroom's honor, guiding the bride toward the groom. As the Lord Jesus said, "He [the Spirit] will glorify me, for he will take what is mine and declare it to you." (John 16:14)

**Isaac typifies Christ** — he is the beloved only son of the father, once offered on Mount Moriah (Gen 22), now quietly waiting in the field for his bride's arrival. So too Christ has accomplished the work of redemption and now waits in heaven for His Church.

**Rebekah typifies the Church** — she did not know Isaac personally; she was willing to leave her old life based solely on the servant's testimony. So it is with believers: "Though you have not seen him, you love him. Though you do not now see him, you believe in him and rejoice with joy that is inexpressible and filled with glory." (1 Pet 1:8) Her words "I will go" are an emblem of every called soul's response of faith.

As Paul wrote, "The husband is the head of the wife even as Christ is the head of the church…Christ loved the church and gave himself up for her." (Eph 5:23, 25) This ancient marriage points forward to the ultimate wedding feast — the marriage supper of the Lamb (Rev 19:7–9).`,
});
readings.push({
  book: '创世记', bookEn: 'Genesis', chapter: 25,
  publishDate: '2026-03-20',
  title: '以扫与雅各', titleEn: 'Esau and Jacob',
  author: '摩西', authorEn: 'Moses',
  scripture: '创世记 25:1-34 / Genesis 25:1-34',
  content_zh: `亲爱的读者，我是摩西，耶和华的仆人。今天我要带你走进创世记第二十五章——这一章记载了信心之父亚伯拉罕的落幕，也揭开了神在雅各身上拣选之恩的序幕。

一、亚伯拉罕的晚年与基土拉的后代（25:1-6）

撒拉去世之后，亚伯拉罕又娶了一个妻子，名叫基土拉。她给亚伯拉罕生了六个儿子：心兰、约珊、米但、米甸、伊施巴和书亚。你看，神应许亚伯拉罕要作"多国的父"（创17:4），这应许何等真实！然而，亚伯拉罕极其清醒——"亚伯拉罕将一切所有的都给了以撒"（创25:5）。至于其余众子，他趁着还在世的日子，打发他们往东方去，离开他的儿子以撒。这并非偏心，乃是信心的行动。亚伯拉罕深知，神的约、神的应许、弥赛亚的血脉，唯独通过以撒延续。他用行动分辨了应许之子与其余儿女的区别。

二、信心之父的安息（25:7-11）

"亚伯拉罕一生的年日是一百七十五岁。亚伯拉罕寿高年迈，气绝而死，归到他列祖那里"（创25:7-8）。请留意这句话——"归到他列祖那里"。这不仅仅是身体的死亡，更是灵魂归向神的安息。亚伯拉罕一生是信心的一生：他七十五岁蒙召离开本地本族父家，在迦南寄居如客旅，等候"那座有根基的城，就是神所经营所建造的"（来11:10）。如今，他终于安息了。

以撒和以实玛利一同来埋葬他们的父亲，把他安葬在麦比拉洞里，就是在撒拉的旁边。这幅画面令人动容——两个儿子，一个是应许之子，一个是使女之子，在父亲的墓前暂时放下一切，共同尽孝。"亚伯拉罕死后，神赐福给他的儿子以撒"（创25:11）。约的传承没有中断，恩典的河流继续奔涌。

三、以实玛利的后代（25:12-18）

我在此记录了以实玛利的十二个儿子，作十二族的族长。这正应验了神对亚伯拉罕的应许："至于以实玛利，我也应允你，我必赐福给他，使他昌盛，极其繁多。他必生十二个族长，我也要使他成为大国"（创17:20）。神是信实的，祂的每一句话都不落空。然而，以实玛利的约与以撒的约截然不同——前者是肉体的昌盛，后者是属灵的传承，是弥赛亚降临的管道。

四、利百加怀双子与神的预旨（25:19-23）

以撒四十岁娶了利百加，利百加却不能生育。以撒便为妻子祈求耶和华，"耶和华应允他的祈求"（创25:21）。然而怀孕之后，腹中的孩子彼此相争。利百加痛苦地说："若是这样，我为什么活着呢？"她就去求问耶和华。

耶和华对她说："两国在你腹内；两族要从你身上出来。这族必强于那族；将来大的要服事小的"（创25:23）。

这是何等令人震撼的宣告！孩子还未出生，还没有行善行恶，神就已经定意——大的要服事小的。使徒保罗后来引用这段经文，揭示了拣选的奥秘："双子还没有生下来，善恶还没有做出来，只因要显明神拣选人的旨意，不在乎人的行为，乃在乎召人的主。神就对利百加说：'将来大的要服事小的。'正如经上所记：'雅各是我所爱的；以扫是我所恶的'"（罗9:11-13）。

弟兄姊妹，拣选的教义是圣经中最深邃、最令人敬畏的真理之一。这不是关于人的功德或预见的信心，乃是神在创世以前，按着自己旨意所预定的（弗1:4-5）。韦敏斯德信条第三章宣告："神从永远，按照祂自己旨意的至智至圣的计划，自由不变地预定了将来所要发生的一切。"雅各的蒙拣选，不是因为他比以扫更好——他是个诡诈的人。但神的恩典不凭功德，唯独出于祂主权的美意。

五、以扫与雅各的出生（25:24-28）

生产的日子到了，"先产的身体发红，浑身有毛，如同皮衣，他们就给他起名叫以扫"（创25:25）。随后雅各出来，"手抓住以扫的脚跟"（创25:26），因此起名叫雅各，就是"抓住"的意思。以撒那时六十岁。

以扫善于打猎，常在田野；雅各为人安静，常住在帐棚里。以撒爱以扫，因为常吃他的野味；利百加却爱雅各。这个家庭的偏爱，日后将酿成许多痛苦和纷争。

六、长子名分的出卖（25:29-34）

有一天，雅各熬汤。以扫从田野回来，累昏了。以扫对雅各说："我累昏了，求你把这红汤给我喝。""雅各说：你今日把长子的名分卖给我罢"（创25:31）。以扫竟然说："我将要死，这长子的名分于我有什么益处呢？"他就起了誓，把长子的名分卖给雅各。"于是雅各将饼和红豆汤给了以扫，以扫吃了喝了，便起来走了。这就是以扫轻看了他长子的名分"（创25:34）。

长子的名分意味着什么？在族长时代，长子拥有祭司的职分，可以代表全家献祭敬拜神；长子享有双份的产业继承权；最重要的是，在亚伯拉罕家族中，长子名分承载着弥赛亚降临的应许血脉。以扫为了一碗红豆汤，就把这一切都卖了！希伯来书警告我们："恐怕有淫乱的，有贪恋世俗如以扫的，他因一点食物把自己长子的名分卖了。后来想要承受父所祝的福，竟被弃绝，虽然号哭切求，却得不着门路使他父亲的心意回转"（来12:16-17）。

以扫是属世之人的典型——他只看眼前的满足，不看永恒的价值。他轻看神的应许，如同轻看一件无用之物。而雅各虽然手段不正当，但他渴慕长子名分所代表的属灵祝福，这一点是蒙神悦纳的。

让我们在这一章中看见：神的拣选是主权的、无条件的、不可逆转的。祂的旨意不因人的行为而改变，祂的应许不因岁月而废弃。愿我们都像雅各一样，看重属灵的福分过于世上一切的享乐！`,
  content_en: `Dear reader, I am Moses, servant of the LORD. Today I will walk you through Genesis chapter 25—a chapter that records the final curtain of Abraham, the father of faith, and raises the curtain on God's electing grace in Jacob.

I. Abraham's Later Years and the Descendants of Keturah (25:1-6)

After Sarah's death, Abraham took another wife, whose name was Keturah. She bore him six sons: Zimran, Jokshan, Medan, Midian, Ishbak, and Shuah. Behold how true God's promise was—that Abraham would be "the father of a multitude of nations" (Gen 17:4)! Yet Abraham was remarkably clear-minded: "Abraham gave all he had to Isaac" (Gen 25:5). As for his other sons, while he was still living he sent them away eastward, away from his son Isaac. This was not favoritism but an act of faith. Abraham knew well that God's covenant, God's promise, and the Messianic line would continue solely through Isaac. By his actions he distinguished the child of promise from all the rest.

II. The Rest of the Father of Faith (25:7-11)

"These are the days of the years of Abraham's life, 175 years. Abraham breathed his last and died in a good old age, an old man and full of years, and was gathered to his people" (Gen 25:7-8). Note this phrase—"gathered to his people." This is not merely physical death but the soul's return to rest with God. Abraham's life was a life of faith: called at seventy-five to leave his country and kindred, he sojourned in Canaan as a stranger, looking forward to "the city that has foundations, whose designer and builder is God" (Heb 11:10). Now at last, he rested.

Isaac and Ishmael came together to bury their father, laying him in the cave of Machpelah, beside Sarah. What a moving scene—two sons, one the child of promise, the other born of a servant, setting aside everything at their father's grave to honor him together. "After the death of Abraham, God blessed Isaac his son" (Gen 25:11). The covenant's transmission was unbroken; the river of grace flowed on.

III. The Descendants of Ishmael (25:12-18)

Here I recorded Ishmael's twelve sons, who became twelve princes according to their tribes. This fulfilled exactly what God had promised Abraham: "As for Ishmael, I have heard you; behold, I have blessed him and will make him fruitful and multiply him greatly. He shall father twelve princes, and I will make him into a great nation" (Gen 17:20). God is faithful—not one of His words falls to the ground. Yet Ishmael's covenant differs entirely from Isaac's: the former is earthly prosperity, the latter is spiritual inheritance—the channel through which the Messiah would come.

IV. Rebekah's Twins and the Divine Decree (25:19-23)

Isaac was forty years old when he took Rebekah as his wife, but Rebekah was barren. Isaac prayed to the LORD for his wife, and "the LORD granted his prayer" (Gen 25:21). Yet after conceiving, the children struggled within her. In her anguish Rebekah cried, "If it is thus, why is this happening to me?" So she went to inquire of the LORD.

And the LORD said to her: "Two nations are in your womb, and two peoples from within you shall be divided; the one shall be stronger than the other, the older shall serve the younger" (Gen 25:23).

What a staggering declaration! Before the children were born, before they had done anything good or evil, God had already determined—the older shall serve the younger. The apostle Paul later cited this passage to reveal the mystery of election: "Though they were not yet born and had done nothing either good or bad—in order that God's purpose of election might continue, not because of works but because of him who calls—she was told, 'The older will serve the younger.' As it is written, 'Jacob I loved, but Esau I hated'" (Rom 9:11-13).

Brothers and sisters, the doctrine of election is one of the most profound and awe-inspiring truths in all of Scripture. It is not about human merit or foreseen faith, but about God's predestination before the foundation of the world, according to the purpose of His will (Eph 1:4-5). The Westminster Confession of Faith, Chapter 3, declares: "God from all eternity did, by the most wise and holy counsel of His own will, freely and unchangeably ordain whatsoever comes to pass." Jacob's election was not because he was better than Esau—he was a deceitful man. But God's grace is not earned; it flows solely from His sovereign good pleasure.

V. The Birth of Esau and Jacob (25:24-28)

When the time came to give birth, "the first came out red, all his body like a hairy cloak, so they called his name Esau" (Gen 25:25). Afterward his brother came out "with his hand holding Esau's heel" (Gen 25:26), so he was called Jacob, meaning "he grasps the heel." Isaac was sixty years old at their birth.

Esau was a skillful hunter, a man of the field, while Jacob was a quiet man, dwelling in tents. Isaac loved Esau because he ate of his game, but Rebekah loved Jacob. This parental favoritism would later breed much sorrow and strife.

VI. The Sale of the Birthright (25:29-34)

One day Jacob was cooking stew. Esau came in from the field exhausted and said to Jacob, "Let me eat some of that red stew, for I am exhausted!" "Jacob said, 'Sell me your birthright now'" (Gen 25:31). Esau replied, "I am about to die; of what use is a birthright to me?" So he swore an oath and sold his birthright to Jacob. "Then Jacob gave Esau bread and lentil stew, and he ate and drank and rose and went his way. Thus Esau despised his birthright" (Gen 25:34).

What did the birthright signify? In the patriarchal era, the firstborn held the priestly office, representing the entire family in sacrifice and worship before God; the firstborn received a double portion of the inheritance; and most importantly, within Abraham's family, the birthright carried the promised Messianic bloodline. Esau sold all of this for a single bowl of stew! Hebrews warns us: "that no one is sexually immoral or unholy like Esau, who sold his birthright for a single meal. For you know that afterward, when he desired to inherit the blessing, he was rejected, for he found no chance to repent, though he sought it with tears" (Heb 12:16-17).

Esau is the archetype of the worldly person—he saw only immediate gratification and was blind to eternal value. He despised God's promise as though it were a worthless thing. Jacob, though his methods were wrong, yearned for the spiritual blessing the birthright represented, and this desire found favor with God.

Let us see in this chapter: God's election is sovereign, unconditional, and irrevocable. His purposes do not change with human behavior; His promises do not expire with the passing of ages. May we all, like Jacob, prize spiritual blessings above every pleasure this world offers!`,
  historyContext_zh: `创世记第25章处于族长叙事的关键转折点。亚伯拉罕时代落幕（约主前2090年去世），以撒-雅各时代开启。当时近东地区，城邦文明蓬勃发展，长子继承制（primogeniture）是普遍的社会制度。长子名分不仅关乎经济利益（双份产业），更承载祭司职分和家族领袖权。基土拉所生的后裔——米甸人等——后来成为以色列历史中重要的邻族。以实玛利的十二族长则发展为阿拉伯诸部落的先祖。麦比拉洞是亚伯拉罕在迦南唯一合法购买的土地，成为族长家族的墓地，也是对迦南应许之地的信心宣告。`,
  historyContext_en: `Genesis 25 stands at a pivotal transition in the patriarchal narrative. The Abrahamic era closes (Abraham died ca. 2090 BC) and the Isaac-Jacob era begins. In the ancient Near East, city-state civilizations were flourishing, and primogeniture was a widespread social institution. The birthright entailed not only economic benefits (a double portion) but also the priestly office and family leadership. Keturah's descendants—including the Midianites—later became significant neighboring peoples in Israel's history. Ishmael's twelve princes developed into ancestors of various Arabian tribes. The cave of Machpelah was the only plot of land Abraham legally purchased in Canaan, serving as the patriarchal burial site and a declaration of faith in the promised land.`,
  structure_zh: `创世记25章分为六个段落：
1. 亚伯拉罕与基土拉的后代（1-6节）——产业归以撒
2. 亚伯拉罕之死与安葬（7-11节）——享寿175岁，归到列祖
3. 以实玛利的后代谱系（12-18节）——十二族长，应验17:20
4. 以撒的祈祷与利百加怀孕（19-23节）——"两国在你腹内"
5. 双子的出生与性格（24-28节）——以扫（猎人）与雅各（安静人）
6. 长子名分的出卖（29-34节）——以扫轻看长子名分

全章以"结束与开始"为主题：亚伯拉罕故事的收束，雅各故事的萌芽。神的应许在世代交替中持续向前。`,
  structure_en: `Genesis 25 divides into six sections:
1. Abraham and Keturah's descendants (vv. 1-6)—all possessions to Isaac
2. Abraham's death and burial (vv. 7-11)—175 years, gathered to his people
3. Ishmael's genealogy (vv. 12-18)—twelve princes, fulfilling 17:20
4. Isaac's prayer and Rebekah's conception (vv. 19-23)—"Two nations in your womb"
5. Birth and characters of the twins (vv. 24-28)—Esau (hunter) and Jacob (quiet man)
6. The sale of the birthright (vv. 29-34)—Esau despised his birthright

The overarching theme is "ending and beginning": the closing of Abraham's story and the budding of Jacob's. God's promise presses forward through the changing of generations.`,
  theology_zh: `本章最核心的神学主题是**神主权的拣选**。耶和华在双子未出生、未行善恶之前，就宣告"将来大的要服事小的"（创25:23）。保罗在罗马书9:10-13明确指出，这彰显的是"神拣选人的旨意，不在乎人的行为，乃在乎召人的主"。韦敏斯德信条第三章教导：神的预定是永恒的、自由的、不可改变的。其次，本章揭示了**长子名分的属灵重量**——它包含祭司职分、双份产业和弥赛亚血统的传承。以扫轻看这一切，暴露了属肉体之人的本质：只顾今生，不顾永恒。第三，亚伯拉罕的死展示了**信心完满的人生**——他至终持守信心，将产业归给应许之子，然后安然离世。这提醒我们：信徒的死不是终结，乃是"归到列祖那里"，进入永恒的安息。`,
  theology_en: `The central theological theme of this chapter is **God's sovereign election**. Before the twins were born or had done anything good or evil, the LORD declared, "The older shall serve the younger" (Gen 25:23). Paul in Romans 9:10-13 explicitly states that this demonstrates "God's purpose of election might continue, not because of works but because of him who calls." The Westminster Confession, Chapter 3, teaches that God's predestination is eternal, free, and unchangeable. Second, this chapter reveals the **spiritual weight of the birthright**—encompassing the priestly office, a double inheritance, and the transmission of the Messianic bloodline. Esau's contempt for all this exposed the nature of the carnal person: focused on the present, blind to eternity. Third, Abraham's death displays a **life of faith brought to fullness**—he held fast to faith to the end, gave his possessions to the son of promise, and departed in peace. This reminds us: a believer's death is not the end but being "gathered to his people," entering eternal rest.`,
  christShadow_zh: `在创世记25章中，基督的影子从多个角度浮现。首先，**以撒是基督的预表**——正如一切产业都归给以撒（25:5），天父也将万有赐给基督（约3:35）。以撒是独一的应许之子，基督是独一的神子。其次，**雅各的蒙拣选预表教会的蒙拣选**——不是因为我们配得，乃是神在创世以前的恩典（弗1:4）。第三，**长子名分的转移指向基督里的翻转**——在基督里，末后的成为在先的，外邦人得以进入亚伯拉罕的祝福。以扫轻看名分，正如以色列后来拒绝弥赛亚；雅各渴慕名分，正如外邦教会珍惜福音。最终，亚伯拉罕的一生——蒙召、信靠、等候——是每一位在基督里之人的信心旅程缩影：我们都是客旅，等候那座有根基的城。`,
  christShadow_en: `In Genesis 25, the shadow of Christ emerges from multiple angles. First, **Isaac is a type of Christ**—just as all possessions were given to Isaac (25:5), so the Father has given all things to Christ (John 3:35). Isaac is the sole son of promise; Christ is the only Son of God. Second, **Jacob's election foreshadows the election of the Church**—not because we deserve it, but by God's grace before the foundation of the world (Eph 1:4). Third, **the transfer of the birthright points to the reversal accomplished in Christ**—in Him, the last become first, and Gentiles are brought into Abraham's blessing. Esau's contempt for the birthright foreshadows Israel's later rejection of the Messiah; Jacob's desire for it mirrors the Gentile Church's treasuring of the Gospel. Finally, Abraham's entire life—called, trusting, waiting—is a miniature of the faith journey for everyone in Christ: we are all sojourners, looking for the city that has foundations.`,
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
