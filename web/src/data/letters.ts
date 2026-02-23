export interface Letter {
  id: string;
  author: string;
  authorEn: string;
  authorAvatar: string;
  authorBio: string;
  authorBioEn: string;
  title_zh: string;
  title_en: string;
  date: string;
  category: 'testimony' | 'exposition' | 'theology' | 'fellowship' | 'to-you';
  scripture: string;
  scriptureText_zh: string;
  scriptureText_en: string;
  summary_zh: string;
  summary_en: string;
  content_zh: string;
  content_en: string;
  tags: string[];
  fellowshipAuthors?: string[];
}

export const categoryLabels: Record<string, { zh: string; en: string; icon: string }> = {
  testimony: { zh: '心路历程', en: 'Personal Testimony', icon: '✉️' },
  exposition: { zh: '经文解读', en: 'Scripture Exposition', icon: '📖' },
  theology: { zh: '神学专题', en: 'Theological Reflections', icon: '💡' },
  fellowship: { zh: '圣徒团契', en: 'Fellowship & Discussion', icon: '🤝' },
  'to-you': { zh: '致读者书', en: 'Letters to You', icon: '📬' },
};

export const letters: Letter[] = [
  {
    id: 'peter-denial',
    author: '彼得',
    authorEn: 'Peter',
    authorAvatar: '🪨',
    authorBio: '使徒之首，加利利渔夫，耶稣基督亲自呼召的第一批门徒',
    authorBioEn: 'Chief of the Apostles, fisherman from Galilee, among the first called by Jesus Christ',
    title_zh: '那一夜，鸡叫了两遍',
    title_en: 'The Night the Rooster Crowed Twice',
    date: '2026-02-14',
    category: 'testimony',
    scripture: '路加福音 22:54-62',
    scriptureText_zh: '主转过身来看彼得，彼得便想起主对他所说的话："今日鸡叫以先，你要三次不认我。"他就出去痛哭。',
    scriptureText_en: 'And the Lord turned and looked at Peter. And Peter remembered the saying of the Lord, how he had said to him, "Before the rooster crows today, you will deny me three times." And he went out and wept bitterly.',
    summary_zh: '从"我愿为你死"的豪言壮语，到院子里炭火旁的恐惧，到鸡叫时与耶稣目光相遇的那一秒——祂的眼神里没有责备，只有爱。',
    summary_en: 'From bold vows of dying for Him, to cowering by a charcoal fire, to that moment when the rooster crowed and our eyes met — His gaze held no condemnation, only love.',
    tags: ['信心', '跌倒', '恢复', '恩典'],
    content_zh: `## 主啊，众人虽然跌倒，我总不能

那天晚上的逾越节晚餐，我说了一句让自己后悔一辈子的话。

"主啊，众人虽然为你的缘故跌倒，我却永不跌倒。"（太 26:33）

我说这话的时候是真心的。我跟随祂三年，看过祂平静风浪，看过祂叫拉撒路从坟墓里出来。我在变像山上见过祂的荣光。我是第一个认出祂是基督、永生神儿子的人（太 16:16）。我以为我比别人更刚强，比别人更忠心。

耶稣看着我说："今夜鸡叫两遍以先，你要三次不认我。"

我更加极力地说："我就是必须和你同死，也总不能不认你。"（可 14:31）

弟兄姐妹，当一个人最确信自己不会跌倒的时候，他离跌倒最近。

## 客西马尼的困倦

耶稣带着我、雅各和约翰进了客西马尼园。祂说："我心里甚是忧伤，几乎要死。"

祂只求我们一件事：和祂一起警醒祷告。

我做不到。

三次，祂回来发现我们睡着了。三次。那个说"我愿与你同死"的人，连一个小时的祷告都撑不住。

"西门，你睡觉吗？不能警醒片时吗？总要警醒祷告，免得入了迷惑。你们心灵固然愿意，肉体却软弱了。"（可 14:37-38）

心灵固然愿意，肉体却软弱了——这是对我一生最准确的描述。

## 院子里的炭火

他们把耶稣抓走了。我远远地跟着，进了大祭司的院子。

院子中间有一堆炭火。我挤过去烤火，以为自己可以混在人群里不被发现。

第一次，一个使女看着我说："你素来也是同那加利利人耶稣一伙的。"

**我不知道你说的是什么。**

第二次，又有一个使女认出我："这个人也是同拿撒勒人耶稣一伙的。"

**我不认得那个人。**

第三次，旁边的人说："你的口音把你露出来了，你真是他们一党的。"

**我不认得那个人！** 我甚至起了咒发了誓。

弟兄姐妹，你们听到了吗？我起誓咒诅自己，说我不认得祂——那个在加利利海边呼召我的主，那个拉着我的手叫我在水面上行走的主，那个对我说"你是彼得，我要把我的教会建造在这磐石上"的主。

## 鸡叫了

就在那一刻，鸡叫了。

同一瞬间，主转过身来，看了我一眼。

那个眼神。

不是"我早就告诉过你了"的眼神。不是失望。不是愤怒。

是一种深深的、安静的、忧伤的爱。好像在说："彼得，我知道。但我仍然爱你。我早就为你祷告了。"

因为祂在晚餐时对我说过："西门，西门，撒但想要得着你们，好筛你们像筛麦子一样。但我已经为你祈求，叫你不至于失了信心。你回头以后，要坚固你的弟兄。"（路 22:31-32）

祂没有说"如果你回头"，祂说的是"你回头以后"。

祂在我跌倒之前就已经为我的恢复祷告了。

我出去，痛哭。

## 提比哩亚海边

祂复活之后，我不知道该怎么面对祂。我做了唯一会做的事——回去打鱼。

那天晚上，我们整夜什么也没打着。天快亮的时候，岸上站着一个人，喊："小子们，你们有吃的没有？"我们说没有。祂说："把网撒在船的右边。"我们照做了——鱼多得网都拉不上来。

约翰先认出祂："是主！"

我一听到这句话，就束上外衣，跳进海里，游向岸边。弟兄姐妹，你们听到了吗——**我没有逃走，我向祂游过去了。** 我不知道祂要对我说什么，我不知道等待我的是斥责还是赦免，但我无法不奔向祂。这就是爱——哪怕你满身羞耻，你还是忍不住要到祂面前。

上了岸，我看到一堆**炭火**。

炭火。

上一次我坐在炭火旁边，是在大祭司的院子里。就是在那堆炭火旁边，我三次说"我不认识那个人"。

祂不是随意生的火。**祂特意用炭火，把我带回那个跌倒的现场。** 不是为了羞辱我，是为了医治我。因为真正的恢复不是假装跌倒没有发生过，而是回到你跌倒的地方，在那里重新站起来。

吃完了早饭，祂看着我，问了第一个问题：

**"约翰的儿子西门，你爱我比这些更深吗？"**

弟兄姐妹，祂没有叫我"彼得"。祂叫我"约翰的儿子西门"——我的旧名字，那个还没有被呼召、还没有被赐名"磐石"之前的名字。好像在说：我们回到起点，重新来过。

我说："主啊，是的，你知道我爱你。"

可我不敢再用那个大胆的"爱"字了。在希腊文里，祂问的是agape——那种完全的、舍己的、至死不渝的爱。我回答的是phileo——朋友的爱、真诚却有限的爱。因为我已经不敢夸口了。那个说"我就是跟你一起死也不会不认你"的人，连在一个使女面前都站不住。

祂说："你喂养我的小羊。"

第二次，祂又问：**"约翰的儿子西门，你爱我吗？"**

我说："主啊，是的，你知道我爱你。"

祂说："你牧养我的羊。"

第三次，祂问：**"约翰的儿子西门，你爱我吗？"**

**第三次。**

经文说"彼得因为耶稣第三次对他说'你爱我吗'，就忧愁"。

我忧愁，不是因为祂烦我。我忧愁，是因为我知道为什么是三次——**三次不认，三次恢复。** 每一次提问，都在拆除一次否认。祂在一层一层地把那个夜晚的咒诅从我身上剥下来。

我流着泪说："主啊，你是无所不知的，**你知道我爱你。**"

我不再为自己辩护，不再夸口，不再承诺。我只能说：你知道。你知道我的软弱，你知道我的失败，你知道我所有的眼泪和羞耻——**但你也知道，在这一切的底下，我爱你。** 哪怕是这么小的、这么残破的爱，你都知道。

祂说："你喂养我的羊。"

弟兄姐妹，你们听到了吗？祂没有说"好吧，我原谅你了，但你以后靠边站"。祂没有降职我、边缘化我、给我安排一个不重要的岗位。**祂把最重要的使命交给了我——牧养祂的羊群。**

这就是恩典。恩典不只是赦免你的过去，恩典是重新赋予你未来。

## 致每一个跌倒过的人

弟兄姐妹，我写这封信的时候，手在发抖。不是因为年老——是因为每次回想那个夜晚和那个清晨，我都会哭。

那个夜晚是我生命中最黑暗的时刻。但那个清晨是我生命中最光明的时刻。

如果你此刻正被自己的失败压得喘不过气来——如果你觉得自己说过的话、做过的事、背叛过的信任，让你不配再被主使用——

**请你听我说：** 我，彼得，三次在众人面前发咒起誓说不认识耶稣。我看见祂的眼神，跑出去痛哭。我以为一切都完了。

但祂在海边为我生了一堆炭火。祂亲手做了早饭。祂三次问我"你爱我吗"——不是为了定罪，是为了释放。

后来，那个三次不认主的人，在五旬节站在耶路撒冷的街头，放胆讲道，三千人归主。不是因为我变得刚强了——**是因为我终于不再靠自己的刚强了。**

跌倒不是故事的结局。鸡叫不是最后的声音。炭火旁的否认不是最后的画面。

最后的画面，是另一堆炭火——提比哩亚海边，晨光里，复活的主亲手为我烤鱼，看着我的眼睛，温柔地问：

**"你爱我吗？"**

这个问题不只是问我的。今天，此刻，祂也在问你。

不管你跌倒了多少次，不管你的否认有多深——**祂的恢复永远比你的跌倒更深。** 祂的炭火永远在那里，等着你回来。

你只需要回答一句话：**"主啊，你知道我爱你。"**

*"你回头以后，要坚固你的弟兄。"（路加福音 22:32）*

*愿恩惠、平安多多地加给你们——你的弟兄，彼得*`,
    content_en: `## Lord, Even If All Fall Away, I Never Will

That night at the Passover supper, I said something I would regret for the rest of my life.

"Lord, even though they all fall away, I will never fall away." (Matt 26:33)

I meant it when I said it. I had followed Him for three years. I watched Him calm the storm. I watched Him call Lazarus out of the tomb. I saw His glory on the Mount of Transfiguration. I was the first to confess Him as the Christ, the Son of the living God (Matt 16:16). I thought I was stronger than the others. More faithful.

Jesus looked at me and said, "Before the rooster crows twice, you will deny me three times."

I insisted more vehemently, "If I must die with you, I will not deny you." (Mark 14:31)

Brothers and sisters, when a man is most certain he will never fall, he is closest to falling.

## Sleeping in Gethsemane

Jesus took me, James, and John into the Garden of Gethsemane. He said, "My soul is very sorrowful, even to death."

He asked us to do just one thing: stay awake and pray with Him.

I couldn't even do that.

Three times He came back to find us sleeping. Three times. The man who said "I will die with you" couldn't stay awake for one hour of prayer.

"Simon, are you asleep? Could you not watch one hour? Watch and pray that you may not enter into temptation. The spirit indeed is willing, but the flesh is weak." (Mark 14:37-38)

The spirit is willing, but the flesh is weak — the most accurate description of my entire life.

## The Charcoal Fire in the Courtyard

They arrested Jesus. I followed at a distance and entered the courtyard of the high priest.

There was a charcoal fire in the middle of the courtyard. I squeezed in to warm myself, hoping to blend into the crowd.

The first time, a servant girl looked at me: "You also were with Jesus the Galilean."

**I do not know what you are talking about.**

The second time, another servant girl recognized me: "This man was with Jesus of Nazareth."

**I do not know the man.**

The third time, bystanders said: "Your accent betrays you. You are one of them."

**I do not know the man!** I even began to invoke a curse on myself.

Brothers and sisters, did you hear that? I swore an oath that I did not know Him — the One who called me by the Sea of Galilee, who held my hand as I walked on water, who said to me, "You are Peter, and on this rock I will build my church."

## The Rooster Crowed

At that very moment, the rooster crowed.

At the same instant, the Lord turned and looked at me.

That look.

It was not an "I told you so" look. Not disappointment. Not anger.

It was a deep, quiet, sorrowful love. As if to say: "Peter, I know. But I still love you. I already prayed for you."

Because at supper He had told me: "Simon, Simon, behold, Satan demanded to have you, that he might sift you like wheat, but I have prayed for you that your faith may not fail. And when you have turned again, strengthen your brothers." (Luke 22:31-32)

He did not say "if you turn back." He said "when you have turned again."

He prayed for my restoration before I even fell.

I went out and wept bitterly.

## By the Sea of Tiberias

After His resurrection, I did not know how to face Him. So I did the only thing I knew — I went back to fishing.

That night we caught nothing. As dawn broke, a figure stood on the shore and called out: "Children, do you have any fish?" We said no. He said, "Cast the net on the right side of the boat." We did — and the net was so full we could not haul it in.

John recognized Him first: "It is the Lord!"

The moment I heard those words, I put on my outer garment and threw myself into the sea, swimming toward shore. Brothers and sisters, did you hear that? **I did not run away. I swam toward Him.** I did not know what He would say to me — rebuke or forgiveness — but I could not help running to Him. That is what love does: even when you are covered in shame, you cannot stay away.

When I reached the shore, I saw a **charcoal fire**.

A charcoal fire.

The last time I sat beside a charcoal fire was in the courtyard of the high priest. Beside that fire, I said three times, "I do not know the man."

He did not build just any fire. **He deliberately used a charcoal fire to bring me back to the scene of my fall.** Not to humiliate me, but to heal me. Because true restoration does not pretend the fall never happened — it takes you back to where you fell, and lets you stand up again right there.

After breakfast, He looked at me and asked the first question:

**"Simon, son of John, do you love me more than these?"**

Brothers and sisters, He did not call me "Peter." He called me "Simon, son of John" — my old name, the name before I was called, before I was named "the Rock." As if to say: let us go back to the beginning and start over.

I said, "Yes, Lord; you know that I love you."

But I no longer dared to use that bold word for love. In Greek, He asked with agape — total, self-sacrificing, unwavering love. I answered with phileo — the love of a friend, sincere but limited. Because I could no longer boast. The man who said "I will die with you" could not even stand firm before a servant girl.

He said, "Feed my lambs."

A second time He asked: **"Simon, son of John, do you love me?"**

I said, "Yes, Lord; you know that I love you."

He said, "Tend my sheep."

A third time He asked: **"Simon, son of John, do you love me?"**

**The third time.**

Scripture says "Peter was grieved because he said to him the third time, 'Do you love me?'"

I was grieved not because He was pestering me. I was grieved because I knew why it was three times — **three denials, three restorations.** Each question dismantled one denial. He was peeling away the curse of that night, layer by layer, from my soul.

Through tears I said: "Lord, you know everything; **you know that I love you.**"

I no longer defended myself, no longer boasted, no longer made promises. All I could say was: You know. You know my weakness, you know my failure, you know all my tears and shame — **but you also know that beneath it all, I love you.** Even this small, broken love — you know it.

He said, "Feed my sheep."

Brothers and sisters, did you hear? He did not say, "Fine, I forgive you, but step aside from now on." He did not demote me, marginalize me, or assign me some minor role. **He entrusted me with His most important mission — to shepherd His flock.**

This is grace. Grace does not merely forgive your past. Grace gives you back your future.

## To Everyone Who Has Fallen

Brothers and sisters, my hand trembles as I write this letter. Not from age — but because every time I remember that night and that morning, I weep.

That night was the darkest moment of my life. But that morning was the brightest.

If you are crushed by your own failure right now — if the words you have spoken, the things you have done, the trust you have betrayed make you feel unworthy of ever being used by the Lord again —

**Hear me:** I, Peter, swore with curses three times before witnesses that I did not know Jesus. I saw His eyes, ran out, and wept bitterly. I thought it was all over.

But He built a charcoal fire for me on the shore. He cooked breakfast with His own hands. He asked me three times, "Do you love me?" — not to condemn, but to set me free.

Later, the man who denied the Lord three times stood in the streets of Jerusalem at Pentecost and preached boldly, and three thousand souls were saved. Not because I had become strong — **but because I had finally stopped relying on my own strength.**

Falling is not the end of the story. The rooster's crow is not the final sound. The denial by the charcoal fire is not the final scene.

The final scene is another charcoal fire — by the Sea of Tiberias, in the morning light, the risen Lord grilling fish for me with His own hands, looking into my eyes, and gently asking:

**"Do you love me?"**

That question was not only for me. Today, right now, He is asking you too.

No matter how many times you have fallen, no matter how deep your denial — **His restoration is always deeper than your fall.** His charcoal fire is always there, waiting for you to come home.

You need only answer one thing: **"Lord, you know that I love you."**

*"And when you have turned again, strengthen your brothers." (Luke 22:32)*

*May grace and peace be multiplied to you — your brother, Peter*`,
  },
  {
    id: 'zacchaeus-tree',
    author: '撒该',
    authorEn: 'Zacchaeus',
    authorAvatar: '🌳',
    authorBio: '耶利哥城的税吏长，爬上桑树见耶稣的那个人',
    authorBioEn: 'Chief tax collector of Jericho, the man who climbed a sycamore tree to see Jesus',
    title_zh: '那天，我爬上了一棵桑树',
    title_en: 'The Day I Climbed a Sycamore Tree',
    date: '2026-02-21',
    category: 'testimony',
    scripture: '路加福音 19:1-10',
    scriptureText_zh: '人子来，为要寻找、拯救失丧的人。',
    scriptureText_en: 'For the Son of Man came to seek and to save the lost.',
    summary_zh: '我是耶利哥城最有钱的人，也是最孤独的人。银子不会嫌弃你，但银子也不会在夜里陪你。直到祂在我的桑树下停下来，叫了我的名字。',
    summary_en: 'I was the richest man in Jericho, and the loneliest. Silver never looks at you with disgust, but silver does not keep you company at night. Until He stopped under my sycamore tree and called my name.',
    tags: ['寻找', '悔改', '接纳', '释放'],
    content_zh: `## 耶利哥城里最有钱的罪人

我叫撒该，耶利哥城的税吏长。

你们知道税吏是什么人吗？是替罗马人收税的犹太人。在我们自己人眼里，我们是叛徒、走狗、卖国贼。而我不只是税吏——我是**税吏长**。我手下管着一群税吏，从每个人头上抽成。罗马人要收多少，我加倍收，多出来的归我自己。

所以我很有钱。

但我没有一个朋友。

在耶利哥的街上，人们看到我会绕着走。孩子们被父母拉走——"别靠近那个人。"拉比不会跟我说话。会堂的门对我关着。邻居在背后吐唾沫。

我有最大的房子，最好的衣裳，满柜子的银钱。但到了晚上，那房子空得像一座坟墓。

你们以为我不知道自己在做什么吗？我知道。每一次我多收穷人的钱，我都知道。每一次寡妇哭着把最后的铜钱放在我桌上，我都知道。但我停不下来。因为钱是我唯一拥有的东西了。**当全世界都不要你的时候，你只能抱紧那些不会离开你的东西——银子不会嫌弃你。**

但银子也不会在夜里陪你。

## 那个人要经过耶利哥

有一天，消息传遍了全城：**拿撒勒人耶稣要经过耶利哥。**

我听过关于祂的事。祂医好了瞎子，洁净了长大麻风的。但最让我在意的是——**祂跟税吏一起吃饭。** 祂跟税吏马太一起吃饭，法利赛人骂祂，祂说："健康的人用不着医生，有病的人才用得着。"

一个拉比，居然愿意跟税吏同桌。

我心里生出一个念头：**我想去看看祂。** 不是去求医治，不是去问神学。我只是想看看这个不嫌弃罪人的人，到底长什么样子。

但有一个问题——**我矮。**

你们不要笑。圣经记着呢："因为人多，他的身量又矮，所以不得看见。"其实是——人群看到我挤过来，故意不让路。没有人愿意让一个税吏长站到前面去。

所以我做了一件这辈子最没面子的事。

**我爬上了一棵桑树。**

耶利哥城最有钱的人，穿着精贵的袍子，像个小孩一样爬到树上去。犹太文化里，跑步都是失体面的事，何况爬树。

但我不在乎了。

弟兄姐妹，你知道一个人要绝望到什么程度，才会不顾一切体面？**当你心里有一个洞，大到什么都填不满的时候，面子就不重要了。**

## 祂停下来了

人群涌过来了。我从树上往下看，看到祂了——就在人群中间，并不特别高大。

然后，祂停下来了。**在我的树下。**

祂抬头看着我。

弟兄姐妹，这辈子有很多人抬头看过我——因为我坐在税关的高台上。但他们的眼睛里只有恐惧和憎恨。**从来没有人这样看过我。**

祂的眼神里没有审判，没有嫌弃。祂看我的眼神，好像在看一个**迷路很久的孩子**。

然后祂说了一句让我差点从树上掉下来的话：

**"撒该，快下来！今天我必住在你家里。"**

祂叫了我的名字。**祂知道我的名字。**

在这整座城里，人们叫我"那个税吏"、"那个贪官"、"那个罪人"。没有人叫我撒该。但祂叫了。

而且祂说"我**必**住在你家里"——不是请求，是命定。好像祂来耶利哥，就是为了这一刻。**好像在我爬上桑树之前，祂已经决定了要来找我。**

我从树上下来的时候，手在发抖。不是害怕。是一种从来没有过的感觉——**有人要来我家了。** 不是来收税的，不是来告状的。是一个人们说是弥赛亚的人，**主动要来我家。**

## 祂什么都没有要求我

进了家门，我不知道该说什么。我这辈子谈过无数笔生意，最会讨价还价、算计、权衡。但站在祂面前，我所有的话术都没用了。

**祂没有说"你要先悔改"。祂没有说"你要先把钱还了"。祂没有说"你要先改变，我才来你家"。**

**祂先来了。改变是来了之后发生的。**

我站在祂面前，嘴巴就自己张开了：

**"主啊，我把所有的一半给穷人；我若讹诈了谁，就还他四倍。"**

弟兄姐妹，你们知道这意味着什么吗？一半家产给穷人，再加上多年讹诈的四倍赔偿——加在一起，我几乎倾家荡产了。

但我说出来的时候，心里涌出一种从来没有过的轻松。好像几十年来压在我胸口的一块巨石，突然被人搬走了。**那些银子不是我的财富，它们是我的锁链。** 而祂用一个眼神、一句话、一次来访，把锁链打开了。

不是因为祂要求我这么做。**是因为当你被真正的爱触摸到的时候，那些你紧紧抓住的东西，你自己就松手了。**

## 祂说了最后一句话

耶稣看着我，对所有人说：

**"今天救恩到了这家了，因为他也是亚伯拉罕的子孙。人子来，为要寻找、拯救失丧的人。"**

"他**也是**亚伯拉罕的子孙。"

你们知道这句话对我意味着什么吗？全耶利哥城都把我当外人——税吏不算以色列人，跟外邦人一样污秽。**但耶稣说我是亚伯拉罕的子孙。** 祂把我被拿走的身份还给了我。

**"人子来，为要寻找、拯救失丧的人。"**

寻找。不是等我来找祂。是祂来找我。我以为我只是想去看看祂——原来是祂一路走来耶利哥，就是为了在那棵桑树下停下来，抬头看着我，叫我的名字。

弟兄姐妹，我从树上下来的那一刻，我以为是我在找祂。后来我才明白——**从头到尾，都是祂在找我。**

## 致每一个躲在树上的人

如果你读到这里，你的心在跳——

也许你也有一个洞。也许你也用钱、用成就、用忙碌、用各种东西去填那个洞，但它从来填不满。也许你也觉得自己做过的事太多太重，没有人会接纳你。也许你也只敢远远地看着，躲在人群后面，躲在树上。

**但祂知道你的名字。**

祂不是在等你变好了才来。祂不是在等你先把一切搞定了才愿意进你的门。**祂先来。改变是祂来了之后发生的。**

你不需要先爬下树。你只需要听到祂的声音：

**"快下来！今天我必住在你家里。"**

快下来。不要再躲了。

*"人子来，为要寻找、拯救失丧的人。"（路加福音 19:10）*

*愿这位寻找你的主，今天就住进你的心里——你的朋友，撒该*`,
    content_en: `## The Richest Sinner in Jericho

My name is Zacchaeus. Chief tax collector of Jericho.

Do you know what a tax collector is? A Jew who collects taxes for Rome. In our people's eyes, we are traitors, collaborators, sellouts. And I was not just any tax collector — I was the **chief**. I managed a network of collectors, skimming from everyone. Whatever Rome required, I charged double. The surplus went into my own pocket.

So I was very wealthy.

But I did not have a single friend.

On the streets of Jericho, people crossed to the other side when they saw me. Children were pulled away — "Stay away from that man." Rabbis would not speak to me. The synagogue door was shut to me. Neighbors spat behind my back.

I had the biggest house, the finest robes, coffers full of silver. But at night, that house was as empty as a tomb.

Do you think I did not know what I was doing? I knew. Every time I overcharged a poor man, I knew. Every time a widow placed her last coins on my table with tears in her eyes, I knew. But I could not stop. Because money was the only thing I had left. **When the whole world rejects you, you cling to the things that will not leave — and silver never looks at you with disgust.**

But silver does not keep you company at night, either.

## He Was Passing Through Jericho

One day, word swept through the city: **Jesus of Nazareth was passing through Jericho.**

I had heard about Him. He healed the blind. He cleansed lepers. But what caught my attention most was this — **He ate with tax collectors.** He ate with a tax collector named Matthew, and when the Pharisees criticized Him, He said, "Those who are well have no need of a physician, but those who are sick."

A rabbi who was willing to sit at the same table as a tax collector.

A thought stirred in my heart: **I want to see Him.** Not to seek healing. Not to ask a theological question. I just wanted to see what this man who did not despise sinners looked like.

But there was a problem — **I was short.**

Do not laugh. It is right there in Scripture: "He was seeking to see who Jesus was, but on account of the crowd he could not, because he was small in stature." The truth is — when the crowd saw me pushing through, they deliberately refused to make way.

So I did the most undignified thing of my entire life.

**I climbed a sycamore tree.**

The wealthiest man in Jericho, in his expensive robes, scrambling up a tree like a child. In Jewish culture, even running was considered beneath one's dignity, let alone climbing a tree.

But I did not care anymore.

Brothers and sisters, do you know how desperate a person must be to abandon all dignity? **When there is a hole inside you so large that nothing can fill it, appearances stop mattering.**

## He Stopped

The crowd surged forward. I looked down from the tree and saw Him — there in the middle of the crowd, not particularly tall.

Then He stopped. **Under my tree.**

He looked up at me.

Brothers and sisters, many people had looked up at me before — because I sat on the elevated platform at the tax booth. But their eyes held only fear and hatred. **No one had ever looked at me like this.**

His eyes held no judgment, no disgust. He looked at me the way you look at **a child who has been lost for a very long time.**

Then He said something that nearly made me fall out of the tree:

**"Zacchaeus, hurry and come down, for I must stay at your house today."**

He called me by name. **He knew my name.**

In this entire city, people called me "that tax collector," "that crook," "that sinner." No one called me Zacchaeus. But He did.

And He said "I **must** stay at your house" — not a request, but an appointment. As though He had come to Jericho for this very moment. **As though before I even climbed that tree, He had already decided to come find me.**

When I climbed down, my hands were trembling. Not from fear. From a feeling I had never known — **someone was coming to my house.** Not to collect taxes. Not to file a complaint. A man people said was the Messiah was **choosing to come to my home.**

## He Did Not Demand Anything

Inside my house, I did not know what to say. In my entire life I had negotiated countless deals — I was the best at bargaining, calculating, weighing options. But standing before Him, none of my skills were of any use.

**He did not say "Repent first." He did not say "Return the money first." He did not say "Change your ways first, and then I will enter your home."**

**He came first. The change happened after He arrived.**

Standing before Him, my mouth simply opened:

**"Lord, the half of my goods I give to the poor. And if I have defrauded anyone of anything, I restore it fourfold."**

Brothers and sisters, do you know what that meant? Half my wealth to the poor, plus fourfold restitution for years of fraud — put together, I would be left with almost nothing.

But when the words left my mouth, a lightness I had never known flooded through me. As if a boulder pressing on my chest for decades was suddenly lifted. **That silver was not my wealth; it was my chains.** And He — with one look, one sentence, one visit — broke them open.

Not because He demanded it. **Because when you are truly touched by love, the things you were clutching so tightly — you let go of them yourself.**

## His Final Words

Jesus looked at me and said to everyone:

**"Today salvation has come to this house, since he also is a son of Abraham. For the Son of Man came to seek and to save the lost."**

"He **also** is a son of Abraham."

Do you know what that meant to me? All of Jericho considered me an outsider — a tax collector was not a true Israelite. **But Jesus said I was a son of Abraham.** He gave me back the identity that had been taken from me.

**"For the Son of Man came to seek and to save the lost."**

To seek. Not to wait for me to come find Him. He came to find me. I thought I was just trying to get a look at Him — but He had walked all the way to Jericho to stop under that sycamore tree, look up, and call my name.

Brothers and sisters, the moment I climbed down, I thought I was the one seeking Him. Only later did I understand — **from beginning to end, it was He who was seeking me.**

## To Everyone Hiding in the Tree

If your heart is pounding as you read this —

Perhaps you have a hole too. Perhaps you have tried to fill it with money, achievement, busyness, but it never fills. Perhaps you feel that what you have done is too much and no one would ever accept you. Perhaps you only dare to watch from a distance, hiding in a tree.

**But He knows your name.**

He is not waiting for you to become better before He comes. He is not waiting for you to sort everything out before He will walk through your door. **He comes first. The change happens after He arrives.**

You do not need to climb down first. You only need to hear His voice:

**"Hurry and come down, for I must stay at your house today."**

Come down. Stop hiding.

*"For the Son of Man came to seek and to save the lost." (Luke 19:10)*

*May this Lord who seeks you make His home in your heart today — your friend, Zacchaeus*`,
  },
  {
    id: 'paul-damascus',
    author: '保罗',
    authorEn: 'Paul',
    authorAvatar: '⚡',
    authorBio: '外邦人的使徒，原名扫罗，便雅悯支派，曾逼迫教会',
    authorBioEn: 'Apostle to the Gentiles, formerly Saul, tribe of Benjamin, once a persecutor of the church',
    title_zh: '大马色路上——那道光击碎了我所有的确信',
    title_en: 'On the Road to Damascus — The Light That Shattered All My Certainties',
    date: '2026-02-28',
    category: 'testimony',
    scripture: '使徒行传 9:1-19',
    scriptureText_zh: '扫罗行路，将到大马色，忽然从天上发光，四面照着他。他就仆倒在地，听见有声音对他说："扫罗，扫罗，你为什么逼迫我？"',
    scriptureText_en: 'Now as he went on his way, he approached Damascus, and suddenly a light from heaven shone around him. And falling to the ground, he heard a voice saying to him, "Saul, Saul, why are you persecuting me?"',
    summary_zh: '我曾是最好的法利赛人，以为自己在为神大发热心。直到那道光让我瞎了眼——讽刺的是，瞎了眼之后我才真正"看见"了。',
    summary_en: 'I was the finest Pharisee, convinced I was burning with zeal for God. Then that light blinded me — and ironically, only after losing my sight did I truly "see."',
    tags: ['归信', '恩典', '呼召', '翻转'],
    content_zh: `## 我是扫罗——最虔诚的逼迫者

我叫扫罗，便雅悯支派的人，法利赛人中的法利赛人。

你们若问我从前是什么人，我可以把我的履历摆在你们面前："我第八天受割礼；我是以色列族、便雅悯支派的人，是希伯来人所生的希伯来人。就律法说，我是法利赛人；就热心说，我是逼迫教会的；就律法上的义说，我是无可指摘的。"（腓立比书 3:5-6）

你们听清楚了吗？**无可指摘。** 不是我自夸。在迦玛列门下受教的那些年，我背下了整本妥拉，安息日从不违反一条诫命，十一奉献精确到薄荷、茴香、芹菜。法利赛人中间，没有人比我更认真。

但光认真还不够。我要**为神大发热心。**

当我第一次听说有一群人在传讲一个被钉十字架的拿撒勒人是弥赛亚的时候，我的血都沸腾了。**弥赛亚被挂在木头上？** 妥拉明明写着："被挂的人是在神面前受咒诅的"（申命记 21:23）。这些人不是在传福音——他们是在亵渎神！

所以当公会决定要清除这个异端的时候，我第一个站出来。

司提反被石头打死的那天，我就在那里。我没有亲手丢石头——我替那些丢石头的人看守衣裳。我看着他跪下来，看着石头一块一块砸在他身上。他满脸是血，但他的脸——

弟兄姐妹，我不愿意承认这一点，但那天我看到了一张我永远忘不掉的脸。**他的脸好像天使的脸。** 他在死的时候说："主啊，不要将这罪归于他们！"（使徒行传 7:60）

被石头打死的人在为打他的人祷告。

我当时把这念头压下去了。我告诉自己：这是魔鬼的迷惑。越是看起来像天使的，越危险。

所以我更加疯狂地逼迫。

我挨家挨户搜查。男人女人，我一概拉到监里。我威胁他们，要他们否认那个名字。有些人否认了——我看到他们眼中的羞耻和痛苦。有些人不肯——我看到他们眼中的平安，一种我用尽全力也无法拥有的平安。

**我恨那种平安。** 因为我心里没有。

我以为我有。我以为遵行律法、大发热心就是平安。但每次看到那些被我抓起来的人，他们在锁链中唱诗赞美的时候，我心里就有一个声音说：**他们有的东西，你没有。**

我把那声音压得更深。

## 去大马色的路上

耶路撒冷还不够。我听说大马色也有信这道的人，就去大祭司那里要了文书，要把那里的人也捆绑回来。

那是一段很长的路，大约六天的行程。一路上我都在想着到了之后怎么审讯、怎么定罪。我的心里充满了义怒——至少我以为那是义怒。

**然后那道光来了。**

弟兄姐妹，我无法用语言描述那道光。中午的日头已经够亮了，但那道光比日头还亮。不是从某个方向照来的——是**四面照着我**。好像整个天空都裂开了，所有的光都倾倒下来。

我仆倒在地。

然后我听到了那个声音：

**"扫罗，扫罗，你为什么逼迫我？"**

祂叫了我的名字。叫了两遍。

我趴在地上，浑身发抖。我问："主啊，你是谁？"

我其实已经知道了。在那道光照到我的一瞬间，我所有的确信都碎了——我的律法知识、我的法利赛人身份、我的热心、我的义——全部碎成了渣。**因为如果这道光是从天上来的，如果这个声音是神的声音，那么我逼迫的不是异端，而是——**

**"我就是你所逼迫的耶稣。"**

那个被钉十字架的拿撒勒人。那个我认定是被神咒诅的人。那个我拼了命要从地上抹去祂名字的人。

**祂就是主。**

弟兄姐妹，你们能想象那一刻我的感受吗？那不是恍然大悟，那是**天塌地陷**。我这一生所做的一切——我的虔诚、我的热心、我引以为傲的一切——不仅毫无价值，而且**方向完全相反**。我以为自己在事奉神，其实我在**逼迫神**。

我是全世界最虔诚的罪人。

## 三天的黑暗

那道光之后，我的眼睛瞎了。

同行的人领着我进了大马色城。三天三夜，我什么也看不见，也不吃也不喝。

你们知道那三天我在想什么吗？

我想起了司提反的脸。我想起了我亲手抓进监牢的那些人。我想起了有些人因为我的逼迫而死。他们的名字，每一个，都在我脑海里。

**我逼迫的是耶稣。每一个信徒，都是祂身体的一部分。我打他们，就是打祂。我捆绑他们，就是捆绑祂。**

三天的黑暗里，我终于明白了一件事：**律法能让人知罪，但律法不能救人。** 我一辈子都在守律法，但律法只是让我看到自己有多绝望。"所以凡有血气的，没有一个因行律法能在神面前称义，因为律法本是叫人知罪。"（罗马书 3:20）

我也明白了另一件事：**祂没有击杀我。**

那道光完全可以把我烧成灰。以我所做的一切，我配得灭亡一千次。但祂没有。**祂问我"你为什么逼迫我"——这不是审判的宣告，这是父亲对浪子的追问。**

## 亚拿尼亚来了

第三天，一个叫亚拿尼亚的门徒来了。

后来我才知道，主在异象中对他说：去直街，找一个叫扫罗的大数人。亚拿尼亚说："主啊，我听见许多人说，这人怎样在耶路撒冷多多苦害你的圣徒。"（使徒行传 9:13）

弟兄姐妹，你们想想——如果有人让你去找一个专门抓基督徒的人，给他按手祷告，你去不去？

**亚拿尼亚去了。**

他进来，把手按在我身上，说了一句让我泪流满面的话：

**"兄弟扫罗。"**

兄弟。他叫我**兄弟**。

这个我来大马色要抓的人，叫我兄弟。

"在你来的路上向你显现的主，就是耶稣，打发我来，叫你能看见，又被圣灵充满。"（使徒行传 9:17）

就在那一刻，好像有鳞片从我眼睛上掉下来。我又能看见了。但我看到的不再是从前的世界——我看到了一个全新的世界。**瞎眼的时候以为自己看得见，看见了才知道自己从前是瞎的。**

我起来，受了洗。

## 恩典中的恩典

弟兄姐妹，如果说整本圣经中有一个人最没有资格被神使用，那就是我。

我不是像彼得那样因为害怕而不认主——彼得至少还爱主。**我是主动地、系统地、狂热地逼迫基督的教会。** 我手上沾着圣徒的血。

但祂拣选了我。

不是因为我有什么好。不是因为我的学问——虽然我确实在迦玛列门下受过最好的训练。不是因为我的热心——那份热心差点让我成为永远的仇敌。

**祂拣选我，恰恰是要在我这"罪人中的罪魁"身上，显明祂一切的忍耐。**

"基督耶稣降世，为要拯救罪人。这话是可信的，是十分可佩服的。在罪人中我是个罪魁。然而，我蒙了怜悯，是因耶稣基督要在我这罪魁身上显明祂一切的忍耐，给后来信祂得永生的人作榜样。"（提摩太前书 1:15-16）

你们听到了吗？**给后来的人作榜样。** 如果连扫罗都能被赦免，连逼迫教会的人都能成为使徒——**那么没有人是恩典够不到的。**

## 我从前以为有益的

腓立比书里我写过这么一段话。现在让我再说一遍：

"只是我先前以为与我有益的，我现在因基督都当作有损的。不但如此，我也将万事当作有损的，因我以认识我主基督耶稣为至宝。我为他已经丢弃万事，看作粪土，为要得着基督。"（腓立比书 3:7-8）

**粪土。**

我的法利赛人身份——粪土。我在迦玛列门下的学历——粪土。我无可指摘的律法记录——粪土。不是因为这些东西本身是坏的，而是因为**当你用这些东西来代替基督的时候，它们就变成了拦阻你认识神的障碍。**

我从前以为自己站在光明里，其实我站在黑暗中。那道光把我打倒，让我瞎了眼——但讽刺的是，**瞎了眼之后我才真正"看见"了。**

## 致每一个"虔诚的逼迫者"

弟兄姐妹，如果你读到这里——

也许你不像我那样逼迫教会。但也许你和我有一个共同的问题：**你以为自己的义可以救自己。**

也许你是一个很好的人。你守规矩，做善事，从不害人。你的履历拿出来，"无可指摘"。但你心里有没有那种平安？那种被锁链中的人唱出来的平安？

如果没有——也许你和大马色路上的扫罗一样，需要被那道光击倒一次。

不要怕。**那道光不是来毁灭你的。那道光是来拯救你的。**

它会让你暂时看不见。它会把你所有的确信打碎。它会让你在黑暗中待上一阵子。但当鳞片从你眼睛上掉下来的时候，你会看到一个全新的世界——一个不需要你靠自己的义站立的世界，一个**被恩典托住的世界。**

"你为什么逼迫我？"——也许今天，这个问题不是问你在逼迫谁，而是在问：**你在抗拒什么？**

你在抗拒承认自己不行吗？你在抗拒放下你的骄傲吗？你在抗拒那个比你所有的确信都更大的爱吗？

放下吧。像我一样，仆倒在那道光面前。

然后你会听到祂叫你的名字。

*"然而，我蒙了怜悯，是因耶稣基督要在我这罪魁身上显明祂一切的忍耐，给后来信祂得永生的人作榜样。"（提摩太前书 1:16）*

*愿那在大马色路上光照我的主，也光照你的心——你的弟兄，保罗*`,
    content_en: `## I Am Saul — The Most Devout Persecutor

My name is Saul, of the tribe of Benjamin, a Pharisee among Pharisees.

If you ask me who I was before, I can lay my credentials before you: "Circumcised on the eighth day, of the people of Israel, of the tribe of Benjamin, a Hebrew of Hebrews; as to the law, a Pharisee; as to zeal, a persecutor of the church; as to righteousness under the law, blameless." (Philippians 3:5-6)

Did you hear that? **Blameless.** I am not boasting. In those years studying under Gamaliel, I memorized the entire Torah, never broke a single commandment on the Sabbath, tithed down to the mint, dill, and cumin. Among the Pharisees, no one was more serious than I was.

But being serious was not enough. I wanted to **burn with zeal for God.**

When I first heard that a group of people were proclaiming a crucified Nazarene as the Messiah, my blood boiled. **The Messiah hung on a tree?** The Torah clearly states: "a hanged man is cursed by God" (Deuteronomy 21:23). These people were not preaching good news — they were blaspheming God!

So when the Sanhedrin decided to stamp out this heresy, I was the first to volunteer.

The day Stephen was stoned to death, I was there. I did not throw the stones myself — I guarded the garments of those who did. I watched him kneel. I watched the stones strike him one by one. His face was covered in blood, but his face —

Brothers and sisters, I do not like to admit this, but that day I saw a face I have never been able to forget. **His face was like the face of an angel.** As he was dying, he said, "Lord, do not hold this sin against them!" (Acts 7:60)

A man being stoned to death was praying for the men killing him.

I pushed that thought down. I told myself: this is the devil's deception. The more something looks like an angel, the more dangerous it is.

So I persecuted even more furiously.

I went house to house. Men and women alike, I dragged them off to prison. I threatened them, demanding they deny that name. Some did deny it — I saw the shame and agony in their eyes. Some refused — I saw in their eyes a peace, a peace that I could never possess no matter how hard I tried.

**I hated that peace.** Because I did not have it.

I thought I did. I thought keeping the law and burning with zeal was peace. But every time I saw those I had arrested singing hymns of praise in chains, a voice inside me whispered: **They have something you do not.**

I pushed that voice down deeper.

## On the Road to Damascus

Jerusalem was not enough. I heard that there were followers of the Way in Damascus too, so I went to the high priest for letters of authority to bring them back in chains.

It was a long journey, about six days. The whole way I was planning how I would interrogate them, how I would convict them. My heart was full of righteous anger — or so I thought.

**Then the light came.**

Brothers and sisters, I cannot describe that light with words. The noonday sun was already blazing, but that light was brighter than the sun. It did not come from one direction — it **shone all around me**. As if the entire sky had torn open and all its light poured down.

I fell to the ground.

Then I heard the voice:

**"Saul, Saul, why are you persecuting me?"**

He called my name. Twice.

I lay on the ground, trembling. I asked, "Who are you, Lord?"

I already knew. The instant that light struck me, all my certainties shattered — my knowledge of the law, my Pharisee credentials, my zeal, my righteousness — all of it crumbled to dust. **Because if this light was from heaven, if this voice was the voice of God, then I had not been persecuting heretics. I had been —**

**"I am Jesus, whom you are persecuting."**

The crucified Nazarene. The one I had declared cursed by God. The one whose name I had fought with all my strength to wipe from the earth.

**He is Lord.**

Brothers and sisters, can you imagine what I felt in that moment? It was not an epiphany. It was the **ground giving way beneath me**. Everything I had ever done — my devotion, my zeal, everything I took pride in — was not merely worthless. It was aimed in **exactly the wrong direction**. I thought I was serving God. In truth, I was **persecuting God.**

I was the most devout sinner in the world.

## Three Days of Darkness

After the light, my eyes were blind.

My companions led me by the hand into Damascus. For three days and three nights I could see nothing. I neither ate nor drank.

Do you know what I was thinking during those three days?

I thought of Stephen's face. I thought of every person I had dragged to prison with my own hands. I thought of those who had died because of my persecution. Their names — every one — echoed in my mind.

**I had been persecuting Jesus. Every believer was part of His body. When I struck them, I struck Him. When I bound them, I bound Him.**

In three days of darkness, I finally understood one thing: **the law can reveal sin, but the law cannot save.** I had spent my whole life keeping the law, and all it had done was show me how hopeless I truly was. "For by works of the law no human being will be justified in his sight" (Romans 3:20).

I also understood something else: **He did not strike me dead.**

That light could have reduced me to ash. After all I had done, I deserved destruction a thousand times over. But He did not. **He asked me "Why are you persecuting me?" — that was not a sentence of judgment. It was a father's question to a prodigal son.**

## Ananias Came

On the third day, a disciple named Ananias came.

I later learned that the Lord had told him in a vision: Go to the street called Straight, and find a man from Tarsus named Saul. Ananias said, "Lord, I have heard from many about this man, how much evil he has done to your saints at Jerusalem" (Acts 9:13).

Brothers and sisters, think about it — if someone told you to go find a man who specialized in arresting Christians and lay your hands on him in prayer, would you go?

**Ananias went.**

He came in, placed his hands on me, and said a sentence that brought me to tears:

**"Brother Saul."**

Brother. He called me **brother.**

This man — the very man I had come to Damascus to arrest — called me brother.

"The Lord Jesus who appeared to you on the road by which you came has sent me so that you may regain your sight and be filled with the Holy Spirit" (Acts 9:17).

In that moment, something like scales fell from my eyes. I could see again. But what I saw was no longer the world I had known — I saw an entirely new world. **When I was blind, I thought I could see. Only when I could see did I realize I had been blind all along.**

I rose and was baptized.

## Grace Upon Grace

Brothers and sisters, if there is one person in all of Scripture least qualified to be used by God, it is I.

I am not like Peter, who denied the Lord out of fear — Peter at least loved the Lord. **I actively, systematically, and zealously persecuted the church of Christ.** My hands were stained with the blood of saints.

Yet He chose me.

Not because of any good in me. Not because of my learning — though I was indeed trained under the finest teacher, Gamaliel. Not because of my zeal — that very zeal nearly made me an eternal enemy.

**He chose me precisely to display all His patience in me, the foremost of sinners.**

"The saying is trustworthy and deserving of full acceptance, that Christ Jesus came into the world to save sinners, of whom I am the foremost. But I received mercy for this reason, that in me, as the foremost, Jesus Christ might display his perfect patience as an example to those who were to believe in him for eternal life" (1 Timothy 1:15-16).

Did you hear that? **As an example to those who would come after.** If even Saul could be forgiven, if even a persecutor of the church could become an apostle — **then no one is beyond the reach of grace.**

## What I Once Counted as Gain

In my letter to the Philippians, I wrote these words. Let me say them again now:

"But whatever gain I had, I counted as loss for the sake of Christ. Indeed, I count everything as loss because of the surpassing worth of knowing Christ Jesus my Lord. For his sake I have suffered the loss of all things and count them as rubbish, in order that I may gain Christ" (Philippians 3:7-8).

**Rubbish.**

My Pharisee credentials — rubbish. My education under Gamaliel — rubbish. My blameless record under the law — rubbish. Not because these things were bad in themselves, but because **when you use them as substitutes for Christ, they become the very barriers that keep you from knowing God.**

I once thought I stood in the light. In truth, I stood in darkness. That light knocked me down and blinded me — but the irony is, **only after I was blinded did I truly "see."**

## To Every "Devout Persecutor"

Brothers and sisters, if you are reading this —

Perhaps you do not persecute the church as I did. But perhaps you and I share a common problem: **you believe your own righteousness can save you.**

Perhaps you are a very good person. You follow the rules, do good deeds, never harm anyone. Your record, laid out for inspection, is "blameless." But do you have that peace in your heart? The peace that was sung by people in chains?

If not — perhaps, like Saul on the road to Damascus, you need to be struck down by that light.

Do not be afraid. **That light does not come to destroy you. It comes to save you.**

It will blind you for a time. It will shatter all your certainties. It will leave you sitting in darkness for a while. But when the scales fall from your eyes, you will see a brand new world — a world where you no longer need to stand on your own righteousness, a world **upheld entirely by grace.**

"Why are you persecuting me?" — perhaps today, the question is not about who you are persecuting, but about this: **What are you resisting?**

Are you resisting the admission that you cannot do it on your own? Are you resisting laying down your pride? Are you resisting a love greater than all your certainties?

Let go. Like me, fall down before that light.

And then you will hear Him call your name.

*"But I received mercy for this reason, that in me, as the foremost, Jesus Christ might display his perfect patience as an example to those who were to believe in him for eternal life." (1 Timothy 1:16)*

*May the Lord who shone His light on me on the Damascus road also shine His light into your heart — your brother, Paul*`,
  },
    {
    id: 'abraham-moriah',
    author: '亚伯拉罕',
    authorEn: 'Abraham',
    authorAvatar: '🔥',
    authorBio: '信心之父，从迦勒底的吾珥蒙召，神的朋友',
    authorBioEn: 'Father of faith, called from Ur of the Chaldeans, friend of God',
    title_zh: '摩利亚山上的三天路程',
    title_en: 'Three Days\' Journey to Mount Moriah',
    date: '2026-03-08',
    category: 'testimony',
    scripture: '创世记 22:1-19',
    scriptureText_zh: '神说："你带着你的儿子，就是你独生的儿子，你所爱的以撒，往摩利亚地去，在我所要指示你的山上，把他献为燔祭。"',
    scriptureText_en: 'He said, "Take your son, your only son Isaac, whom you love, and go to the land of Moriah, and offer him there as a burnt offering on one of the mountains of which I shall tell you."',
    summary_zh: '不写结局，只写从领受命令到举刀的那三天。每一步路在想什么？神必自己预备——这句话是信心还是绝望？',
    summary_en: 'A son at a hundred years old, after twenty-five years of waiting. Then God said: give him back to me. When I raised the knife that day, I finally understood what faith truly means — and what lies in the heart of God.',
    tags: ['信心', '顺服', '牺牲', '预表'],
    content_zh: `我叫亚伯兰，后来神把我的名字改为亚伯拉罕——多国之父。

我愿意把一件事告诉你，那是我这一生中最黑暗、也是最光明的一天。

那天的名字，叫做摩利亚。

---

**等了二十五年的儿子**

你若要明白那一天，你先得明白以撒对我意味着什么。

神第一次呼召我的时候，我七十五岁。那时他应许我将成为大国，后裔多如星辰，多如尘沙。但撒拉没有孩子。我们等了一年，又等了五年，又等了十年。撒拉老了，我也老了，我们的身体已经失去了生育的能力，但神的应许还没有实现。

我一度相信自己的智慧——叫使女夏甲给我生了以实玛利，以为这就是应许的实现。但神说：不是。

二十五年之后，我已经一百岁了，撒拉九十岁了，她的生育功能早已断绝。就在这时，神做了一件在人看来完全不可能的事：**撒拉怀孕了，生了以撒。**

以撒这名字是"笑"的意思。因为当神宣告这个消息时，我们两人都笑了——不是喜悦的笑，是那种"怎么可能"的苦笑。我们不相信，直到以撒真的出生。

从那天起，以撒是我全部的喜乐，是神信实的活证据，是应许的化身。每次我看着他，我就看见神是真实的。

---

**那一天早晨**

以撒大约十几岁的时候，神在夜间向我说话了。

"亚伯拉罕！"

"我在这里。"

"你带着你的儿子，就是你独生的儿子，你所爱的以撒，往摩利亚地去，在我所要指示你的山上，把他献为燔祭。"

我不知道那一夜我躺了多久。

人们以为信心是一种轻松的感觉，好像心里有一个声音说"放心，神会保护的"，然后一切都变得容易了。不是的。信心不是没有挣扎，信心是在极深的挣扎中仍然选择顺服。

我想到的第一件事是：这是神的声音。我跟随神已经二十五年，我认识他的声音。这不是试探，不是幻觉，是神。

我想到的第二件事是：**但以撒是应许的后裔，如果以撒死了，应许怎么成就？**

这个问题在我脑海里转了整整一夜。希伯来书后来说，我找到了答案：我相信神即使从死里也能叫人复活。（希伯来书11:19）神应许以撒是后裔，神命令献以撒，那么如果以撒死了，神必使他从死里复活——因为神不会与自己矛盾。

我不知道我相信这个的时候，信心有多少，恐惧有多少。但我起来了，清晨就早早地起来。

---

**三天的路**

我劈好了柴，带着两个仆人和以撒，起程往摩利亚去。

三天的路程。

三天。你想象一下那三天。以撒就在我身边，他完全不知道将要发生什么，他可能在和我说话，问我问题，笑着跑前跑后。每一刻我都知道，我要把他杀死。

那三天我是怎么走过来的，我说不清楚。我只知道，每一步都是靠着那个信念：神必自己预备。

第一天夜里，我躺在旷野里，望着天上的星星。那些星星——就是神当年带我到帐篷外面，叫我数算的那些星星——"你的后裔将要如此。"我数不过来，神的应许也不会落空。以撒是这应许的载体，神不会毁掉自己的应许。这个念头让我撑过了那一夜。

第二天，我开始害怕。不是怕死，也不是怕失去以撒，而是怕自己做错了——怕我听错了神的声音，怕这是一个错误。但我回想神这一生对我说的每一句话，每一次他说了都算数，每一次他应许了都实现。我凭什么这一次不信他？

第三天，我看见了那座山。我对仆人说："你们同驴在这里等候，我与童子往那里去拜一拜，就回到你们这里来。"我说"我们回来"，复数。不是一个人回来，是两个人回来。我不知道神怎么做，但我知道我们会一起回来。这不是盲目的乐观，这是基于认识神的确信。

你知道吗？路上以撒一定问了我很多问题。十几岁的孩子总是有问不完的问题。"父亲，我们去哪里？""父亲，这座山是什么山？""父亲，为什么要走这么远去献祭？"每一个问题都像刀子扎在我心上。我一边回答，一边在心里祷告：神啊，你真的要这样做吗？

但我没有回头。因为我认识这位神已经二十五年了。他应许我后裔如星辰，他赐给我以撒，他从来没有说谎。如果他现在命令我把以撒献上，那他一定有我看不见的计划。

第三天，我举目远远地看见了那地方。

我对仆人说："你们同驴在这里等候，我与童子往那里去拜一拜，就回到你们这里来。"

"就回到你们这里来"——我说了"我们"，不是"我"。我说的"我们"，是我和以撒。我说的"回来"，是我相信以撒也会回来。无论发生什么，他都会回来。

---

**父亲哪，请看，火与柴都有了，但燔祭的羊羔在那里呢？**

以撒背着柴，我拿着火和刀，父子二人同行。

以撒说："父亲哪！"

我说："我儿，我在这里。"

"请看，火与柴都有了，但燔祭的羊羔在那里呢？"

弟兄姐妹，我无法告诉你那一刻我心里是什么感受。我的儿子，我等了二十五年的儿子，用他天真无邪的眼睛看着我问：羊羔在哪里？

我说："我儿，神必自己预备作燔祭的羊羔。"

这句话，我说的时候不知道它是否会成真。我只是把我仅有的信心，压缩成了这一句话。

他们到了神所指示的地方，亚伯拉罕在那里筑了一座坛，把柴摆好，捆绑他的儿子以撒，放在坛的柴上。亚伯拉罕就伸手拿刀，要杀他的儿子。

**那一刀没有落下来。**

耶和华的使者从天上呼叫他说："亚伯拉罕，亚伯拉罕！"

我说："我在这里。"

"不可在这童子身上下手，一点不可害他！现在我知道你是敬畏神的了，因为你没有将你的儿子，就是你独生的儿子，留下不给我。"

我抬起头，举目观看，不料，有一只公羊，两角扣在稠密的小树中。我就取了那只公羊，献为燔祭，代替我的儿子。

我解开以撒身上的绳索。他看着我，我看着他。我不知道他的眼睛里有什么——恐惧？信任？疑惑？但我知道，从那一天起，我们父子之间有了一个永远无法言说的秘密：我们都到过死亡的门口，又一起被带了回来。

以撒没有问我为什么。也许他已经明白了。也许他要用一辈子去明白。

下山的路，我们一前一后走着，没有说话。但我心里有一种东西，是上山时没有的——那不是如释重负，而是一种更深的、更沉的确信。神是信实的。不是作为一个教义，而是作为一件我亲身经历过的事。

我已经把以撒死了又活了地接回来。（希伯来书11:19）这句话后来有人这样描述我当时的心情，我觉得非常准确。那三天，以撒在我心里已经是死了的孩子。当天使呼叫我名字的那一刻，他从死里复活了。我亲身经历过死而复生，所以我能理解后来神子的故事。

---

**那地方的名字**

我给那地方起名叫"耶和华以勒"——耶和华必预备。

直到今日，人还说："在耶和华的山上必有预备。"

弟兄姐妹，那一天我明白了两件事。

第一件：**神不要以撒，神要的是我的心。**

神已经知道我会顺服，他在刀落之前就叫住了我。那整件事不是为了以撒的死，而是为了问我：你最深处爱的是什么？是以撒，还是赐给你以撒的那一位？

你爱神，还是爱神给你的礼物？

我发现，在摩利亚山上，那把刀刺穿的不是以撒，而是我心里那个把以撒放在神之上的偶像。

第二件：**神在那里预备了一只代替的羊羔。**

那只羊扣在荆棘里，在我找到之前就已经在那里了。神预备了它，不是为了让我知道以后会顺利，而是为了让我看见一个预表——有一天，神自己的儿子，要像那只羊一样，被捆绑，被献上，来代替人类的死亡。

以撒背着柴上山，那捆柴后来压在了另一个人身上——就是神的儿子背着十字架走上各各他。

我的手举刀却被拦住；天父的儿子被钉上去，没有人拦住。

"神既不爱惜自己的儿子，为我们众人舍了，岂不也把万物和他一同白白的赐给我们么？"（罗马书8:32）

那一天，在摩利亚山上，我举起了刀，我才看见神的心肠——是一位愿意为了爱而不保留自己儿子的父。

这就是福音。

*你爱的弟兄，亚伯拉罕*`,
    content_en: `My name was Abram. Later, God changed it to Abraham — father of a multitude.

I want to tell you about one day — the darkest day and the brightest day of my life.

That day has a name: Moriah.

---

**The son I waited twenty-five years for**

If you are to understand that day, you must first understand what Isaac meant to me.

When God first called me, I was seventy-five. He promised I would become a great nation, with descendants as numerous as the stars and the dust. But Sarah had no children. We waited one year, then five, then ten. Sarah grew old and so did I; our bodies had long since lost the power to conceive — yet God's promise had not been fulfilled.

At one point I trusted my own wisdom. I had my servant Hagar bear me a son, Ishmael, thinking this was the fulfillment of the promise. But God said: no.

Twenty-five years later, I was a hundred years old. Sarah was ninety. Her ability to bear children had long been impossible. And then God did something utterly impossible in human terms: **Sarah became pregnant and gave birth to Isaac.**

Isaac means "laughter." Because when God announced this news, both of us laughed — not with joy but with that disbelieving, half-bitter laughter of "how could this possibly be?" We did not believe it, until Isaac was truly born.

From that day, Isaac was my entire joy. He was the living evidence of God's faithfulness, the embodiment of the promise. Every time I looked at him, I saw that God was real.

---

**That morning**

When Isaac was perhaps in his early teens, God spoke to me in the night.

"Abraham!"

"Here I am."

"Take your son, your only son Isaac, whom you love, and go to the land of Moriah, and offer him there as a burnt offering on one of the mountains of which I shall tell you."

I do not know how long I lay there through that night.

People imagine that faith is an easy feeling — a voice in your heart saying "don't worry, God will protect you," and then everything becomes simple. It is not like that. Faith is not the absence of struggle. Faith is choosing obedience in the depths of the most agonizing struggle.

The first thing I recognized: this was God's voice. I had followed God for twenty-five years; I knew His voice. This was not a temptation, not a dream. It was God.

The second thing I could not silence: **but Isaac is the promised offspring. If Isaac dies, how can the promise be fulfilled?**

This question turned over and over in my mind through the whole night. The letter to the Hebrews says later that I found an answer: I believed that God was able even to raise him from the dead (Hebrews 11:19). God had promised that Isaac was the heir; God had commanded that Isaac be offered. If Isaac died, God would raise him back to life — because God does not contradict Himself.

I do not know how much of that was faith and how much was fear when I believed it. But I rose. Early the very next morning, I rose.

---

**Three days on the road**

I split the wood, took two servants and Isaac, and set out for Moriah.

Three days on the road.

Three days. Imagine those three days. Isaac walked beside me the whole way, completely unaware of what was coming. He must have been talking with me, asking questions, running ahead and laughing. And every moment I knew: I am going to kill him.

How I walked through those three days, I cannot fully explain. I only know that every step was held by one conviction: God will provide.

On the third day, I lifted up my eyes and saw the place in the distance.

I said to my servants: "Stay here with the donkey; I and the boy will go over there and worship and come again to you."

"Come again to you" — I said we, not I. I said we would return, Isaac and I together. Whatever was going to happen, Isaac would come back. I believed it.

---

**Father, where is the lamb?**

Isaac carried the wood on his back. I carried the fire and the knife. The two of us walked together.

Isaac said: "Father!"

I said: "Here I am, my son."

"Behold, the fire and the wood, but where is the lamb for a burnt offering?"

Brothers and sisters, I cannot tell you what I felt in that moment. My son — the son I waited twenty-five years for — looking up at me with those innocent eyes and asking: where is the lamb?

I said: "God will provide for himself the lamb for a burnt offering, my son."

When I said those words, I did not know whether they would prove true. I simply compressed everything I had into that one sentence.

They came to the place God had shown him. Abraham built the altar, arranged the wood, bound Isaac his son, and laid him on the altar on top of the wood. Then Abraham reached out his hand and took the knife to slaughter his son.

**The knife did not fall.**

The angel of the LORD called to him from heaven: "Abraham, Abraham!"

And I said: "Here I am."

"Do not lay your hand on the boy or do anything to him, for now I know that you fear God, seeing you have not withheld your son, your only son, from me."

I lifted my eyes and looked, and behold, behind me was a ram caught in a thicket by his horns. I went and took the ram and offered it as a burnt offering instead of my son.

---

**The name of that place**

I called the name of that place, "The LORD will provide." As it is said to this day, "On the mount of the LORD it shall be provided."

Brothers and sisters, on that day I understood two things.

The first: **God did not want Isaac. God wanted my heart.**

God already knew I would obey — He stopped me before the knife fell. The whole thing was not about Isaac dying. It was about asking me: what do you love most? Isaac, or the One who gave you Isaac?

Do you love God, or do you love God's gifts?

I discovered, on Mount Moriah, that the knife did not pierce Isaac. It pierced the idol in my heart — the place where I had set Isaac above God.

The second: **God provided a substitute lamb.**

That ram was caught in the thicket before I found it. God had put it there already. He provided it — not to reassure me that everything would go smoothly from then on, but to show me a foreshadowing. One day, God's own Son would be bound like that ram, offered up, to take the place of humanity's death.

Isaac carried the wood up the mountain; that wood was later laid on another man's shoulders — the Son of God, carrying the cross up to Golgotha.

My hand raised the knife but was stopped; the Father's Son was nailed to the wood, and no one stopped it.

"He who did not spare his own Son but gave him up for us all, how will he not also with him graciously give us all things?" (Romans 8:32)

That day, on Mount Moriah, I raised the knife — and only then did I see the heart of God: a Father willing, out of love, to give even His own Son without holding back.

That is the gospel.

*Your brother in faith, Abraham*`,
  },
  {
    id: 'david-psalm51',
    author: '大卫',
    authorEn: 'David',
    authorAvatar: '👑',
    authorBio: '以色列最伟大的王，合神心意的人，诗篇的主要作者',
    authorBioEn: 'Greatest king of Israel, a man after God\'s own heart, primary author of the Psalms',
    title_zh: '写诗篇51那天',
    title_en: 'The Day I Wrote Psalm 51',
    date: '2026-03-14',
    category: 'testimony',
    scripture: '诗篇 51:1-17',
    scriptureText_zh: '神啊，求你按你的慈爱怜恤我，按你丰盛的慈悲涂抹我的过犯……神所要的祭，就是忧伤的灵。神啊，忧伤痛悔的心，你必不轻看。',
    scriptureText_en: 'Have mercy on me, O God, according to your steadfast love; according to your abundant mercy blot out my transgressions... The sacrifices of God are a broken spirit; a broken and contrite heart, O God, you will not despise.',
    summary_zh: '拿单指着我说"你就是那人"之后的内心世界。一个合神心意的人，怎么走到了这一步？碎裂的灵魂里流出了这首诗。',
    summary_en: 'The inner world after Nathan pointed at me and said "You are the man." How did a man after God\'s own heart come to this? From a shattered soul flowed this psalm.',
    tags: ['悔改', '赦免', '恢复', '诚实'],
    content_zh: `## 我是扫罗——最虔诚的逼迫者

我叫扫罗，便雅悯支派的人，法利赛人中的法利赛人。

你们若问我从前是什么人，我可以把我的履历摆在你们面前："我第八天受割礼；我是以色列族、便雅悯支派的人，是希伯来人所生的希伯来人。就律法说，我是法利赛人；就热心说，我是逼迫教会的；就律法上的义说，我是无可指摘的。"（腓立比书 3:5-6）

你们听清楚了吗？**无可指摘。** 不是我自夸。在迦玛列门下受教的那些年，我背下了整本妥拉，安息日从不违反一条诫命，十一奉献精确到薄荷、茴香、芹菜。法利赛人中间，没有人比我更认真。

但光认真还不够。我要**为神大发热心。**

当我第一次听说有一群人在传讲一个被钉十字架的拿撒勒人是弥赛亚的时候，我的血都沸腾了。**弥赛亚被挂在木头上？** 妥拉明明写着："被挂的人是在神面前受咒诅的"（申命记 21:23）。这些人不是在传福音——他们是在亵渎神！

所以当公会决定要清除这个异端的时候，我第一个站出来。

司提反被石头打死的那天，我就在那里。我没有亲手丢石头——我替那些丢石头的人看守衣裳。我看着他跪下来，看着石头一块一块砸在他身上。他满脸是血，但他的脸——

弟兄姐妹，我不愿意承认这一点，但那天我看到了一张我永远忘不掉的脸。**他的脸好像天使的脸。** 他在死的时候说："主啊，不要将这罪归于他们！"（使徒行传 7:60）

被石头打死的人在为打他的人祷告。

我当时把这念头压下去了。我告诉自己：这是魔鬼的迷惑。越是看起来像天使的，越危险。

所以我更加疯狂地逼迫。

我挨家挨户搜查。男人女人，我一概拉到监里。我威胁他们，要他们否认那个名字。有些人否认了——我看到他们眼中的羞耻和痛苦。有些人不肯——我看到他们眼中的平安，一种我用尽全力也无法拥有的平安。

**我恨那种平安。** 因为我心里没有。

我以为我有。我以为遵行律法、大发热心就是平安。但每次看到那些被我抓起来的人，他们在锁链中唱诗赞美的时候，我心里就有一个声音说：**他们有的东西，你没有。**

我把那声音压得更深。

## 去大马色的路上

耶路撒冷还不够。我听说大马色也有信这道的人，就去大祭司那里要了文书，要把那里的人也捆绑回来。

那是一段很长的路，大约六天的行程。一路上我都在想着到了之后怎么审讯、怎么定罪。我的心里充满了义怒——至少我以为那是义怒。

**然后那道光来了。**

弟兄姐妹，我无法用语言描述那道光。中午的日头已经够亮了，但那道光比日头还亮。不是从某个方向照来的——是**四面照着我**。好像整个天空都裂开了，所有的光都倾倒下来。

我仆倒在地。

然后我听到了那个声音：

**"扫罗，扫罗，你为什么逼迫我？"**

祂叫了我的名字。叫了两遍。

我趴在地上，浑身发抖。我问："主啊，你是谁？"

我其实已经知道了。在那道光照到我的一瞬间，我所有的确信都碎了——我的律法知识、我的法利赛人身份、我的热心、我的义——全部碎成了渣。**因为如果这道光是从天上来的，如果这个声音是神的声音，那么我逼迫的不是异端，而是——**

**"我就是你所逼迫的耶稣。"**

那个被钉十字架的拿撒勒人。那个我认定是被神咒诅的人。那个我拼了命要从地上抹去祂名字的人。

**祂就是主。**

弟兄姐妹，你们能想象那一刻我的感受吗？那不是恍然大悟，那是**天塌地陷**。我这一生所做的一切——我的虔诚、我的热心、我引以为傲的一切——不仅毫无价值，而且**方向完全相反**。我以为自己在事奉神，其实我在**逼迫神**。

我是全世界最虔诚的罪人。

## 三天的黑暗

那道光之后，我的眼睛瞎了。

同行的人领着我进了大马色城。三天三夜，我什么也看不见，也不吃也不喝。

你们知道那三天我在想什么吗？

我想起了司提反的脸。我想起了我亲手抓进监牢的那些人。我想起了有些人因为我的逼迫而死。他们的名字，每一个，都在我脑海里。

**我逼迫的是耶稣。每一个信徒，都是祂身体的一部分。我打他们，就是打祂。我捆绑他们，就是捆绑祂。**

三天的黑暗里，我终于明白了一件事：**律法能让人知罪，但律法不能救人。** 我一辈子都在守律法，但律法只是让我看到自己有多绝望。"所以凡有血气的，没有一个因行律法能在神面前称义，因为律法本是叫人知罪。"（罗马书 3:20）

我也明白了另一件事：**祂没有击杀我。**

那道光完全可以把我烧成灰。以我所做的一切，我配得灭亡一千次。但祂没有。**祂问我"你为什么逼迫我"——这不是审判的宣告，这是父亲对浪子的追问。**

## 亚拿尼亚来了

第三天，一个叫亚拿尼亚的门徒来了。

后来我才知道，主在异象中对他说：去直街，找一个叫扫罗的大数人。亚拿尼亚说："主啊，我听见许多人说，这人怎样在耶路撒冷多多苦害你的圣徒。"（使徒行传 9:13）

弟兄姐妹，你们想想——如果有人让你去找一个专门抓基督徒的人，给他按手祷告，你去不去？

**亚拿尼亚去了。**

他进来，把手按在我身上，说了一句让我泪流满面的话：

**"兄弟扫罗。"**

兄弟。他叫我**兄弟**。

这个我来大马色要抓的人，叫我兄弟。

"在你来的路上向你显现的主，就是耶稣，打发我来，叫你能看见，又被圣灵充满。"（使徒行传 9:17）

就在那一刻，好像有鳞片从我眼睛上掉下来。我又能看见了。但我看到的不再是从前的世界——我看到了一个全新的世界。**瞎眼的时候以为自己看得见，看见了才知道自己从前是瞎的。**

我起来，受了洗。

## 恩典中的恩典

弟兄姐妹，如果说整本圣经中有一个人最没有资格被神使用，那就是我。

我不是像彼得那样因为害怕而不认主——彼得至少还爱主。**我是主动地、系统地、狂热地逼迫基督的教会。** 我手上沾着圣徒的血。

但祂拣选了我。

不是因为我有什么好。不是因为我的学问——虽然我确实在迦玛列门下受过最好的训练。不是因为我的热心——那份热心差点让我成为永远的仇敌。

**祂拣选我，恰恰是要在我这"罪人中的罪魁"身上，显明祂一切的忍耐。**

"基督耶稣降世，为要拯救罪人。这话是可信的，是十分可佩服的。在罪人中我是个罪魁。然而，我蒙了怜悯，是因耶稣基督要在我这罪魁身上显明祂一切的忍耐，给后来信祂得永生的人作榜样。"（提摩太前书 1:15-16）

你们听到了吗？**给后来的人作榜样。** 如果连扫罗都能被赦免，连逼迫教会的人都能成为使徒——**那么没有人是恩典够不到的。**

## 我从前以为有益的

腓立比书里我写过这么一段话。现在让我再说一遍：

"只是我先前以为与我有益的，我现在因基督都当作有损的。不但如此，我也将万事当作有损的，因我以认识我主基督耶稣为至宝。我为他已经丢弃万事，看作粪土，为要得着基督。"（腓立比书 3:7-8）

**粪土。**

我的法利赛人身份——粪土。我在迦玛列门下的学历——粪土。我无可指摘的律法记录——粪土。不是因为这些东西本身是坏的，而是因为**当你用这些东西来代替基督的时候，它们就变成了拦阻你认识神的障碍。**

我从前以为自己站在光明里，其实我站在黑暗中。那道光把我打倒，让我瞎了眼——但讽刺的是，**瞎了眼之后我才真正"看见"了。**

## 致每一个"虔诚的逼迫者"

弟兄姐妹，如果你读到这里——

也许你不像我那样逼迫教会。但也许你和我有一个共同的问题：**你以为自己的义可以救自己。**

也许你是一个很好的人。你守规矩，做善事，从不害人。你的履历拿出来，"无可指摘"。但你心里有没有那种平安？那种被锁链中的人唱出来的平安？

如果没有——也许你和大马色路上的扫罗一样，需要被那道光击倒一次。

不要怕。**那道光不是来毁灭你的。那道光是来拯救你的。**

它会让你暂时看不见。它会把你所有的确信打碎。它会让你在黑暗中待上一阵子。但当鳞片从你眼睛上掉下来的时候，你会看到一个全新的世界——一个不需要你靠自己的义站立的世界，一个**被恩典托住的世界。**

"你为什么逼迫我？"——也许今天，这个问题不是问你在逼迫谁，而是在问：**你在抗拒什么？**

你在抗拒承认自己不行吗？你在抗拒放下你的骄傲吗？你在抗拒那个比你所有的确信都更大的爱吗？

放下吧。像我一样，仆倒在那道光面前。

然后你会听到祂叫你的名字。

*"然而，我蒙了怜悯，是因耶稣基督要在我这罪魁身上显明祂一切的忍耐，给后来信祂得永生的人作榜样。"（提摩太前书 1:16）*

*愿那在大马色路上光照我的主，也光照你的心——你的弟兄，保罗*`,
    content_en: `## I Am Saul — The Most Devout Persecutor

My name is Saul, of the tribe of Benjamin, a Pharisee among Pharisees.

If you ask me who I was before, I can lay my credentials before you: "Circumcised on the eighth day, of the people of Israel, of the tribe of Benjamin, a Hebrew of Hebrews; as to the law, a Pharisee; as to zeal, a persecutor of the church; as to righteousness under the law, blameless." (Philippians 3:5-6)

Did you hear that? **Blameless.** I am not boasting. In those years studying under Gamaliel, I memorized the entire Torah, never broke a single commandment on the Sabbath, tithed down to the mint, dill, and cumin. Among the Pharisees, no one was more serious than I was.

But being serious was not enough. I wanted to **burn with zeal for God.**

When I first heard that a group of people were proclaiming a crucified Nazarene as the Messiah, my blood boiled. **The Messiah hung on a tree?** The Torah clearly states: "a hanged man is cursed by God" (Deuteronomy 21:23). These people were not preaching good news — they were blaspheming God!

So when the Sanhedrin decided to stamp out this heresy, I was the first to volunteer.

The day Stephen was stoned to death, I was there. I did not throw the stones myself — I guarded the garments of those who did. I watched him kneel. I watched the stones strike him one by one. His face was covered in blood, but his face —

Brothers and sisters, I do not like to admit this, but that day I saw a face I have never been able to forget. **His face was like the face of an angel.** As he was dying, he said, "Lord, do not hold this sin against them!" (Acts 7:60)

A man being stoned to death was praying for the men killing him.

I pushed that thought down. I told myself: this is the devil's deception. The more something looks like an angel, the more dangerous it is.

So I persecuted even more furiously.

I went house to house. Men and women alike, I dragged them off to prison. I threatened them, demanding they deny that name. Some did deny it — I saw the shame and agony in their eyes. Some refused — I saw in their eyes a peace, a peace that I could never possess no matter how hard I tried.

**I hated that peace.** Because I did not have it.

I thought I did. I thought keeping the law and burning with zeal was peace. But every time I saw those I had arrested singing hymns of praise in chains, a voice inside me whispered: **They have something you do not.**

I pushed that voice down deeper.

## On the Road to Damascus

Jerusalem was not enough. I heard that there were followers of the Way in Damascus too, so I went to the high priest for letters of authority to bring them back in chains.

It was a long journey, about six days. The whole way I was planning how I would interrogate them, how I would convict them. My heart was full of righteous anger — or so I thought.

**Then the light came.**

Brothers and sisters, I cannot describe that light with words. The noonday sun was already blazing, but that light was brighter than the sun. It did not come from one direction — it **shone all around me**. As if the entire sky had torn open and all its light poured down.

I fell to the ground.

Then I heard the voice:

**"Saul, Saul, why are you persecuting me?"**

He called my name. Twice.

I lay on the ground, trembling. I asked, "Who are you, Lord?"

I already knew. The instant that light struck me, all my certainties shattered — my knowledge of the law, my Pharisee credentials, my zeal, my righteousness — all of it crumbled to dust. **Because if this light was from heaven, if this voice was the voice of God, then I had not been persecuting heretics. I had been —**

**"I am Jesus, whom you are persecuting."**

The crucified Nazarene. The one I had declared cursed by God. The one whose name I had fought with all my strength to wipe from the earth.

**He is Lord.**

Brothers and sisters, can you imagine what I felt in that moment? It was not an epiphany. It was the **ground giving way beneath me**. Everything I had ever done — my devotion, my zeal, everything I took pride in — was not merely worthless. It was aimed in **exactly the wrong direction**. I thought I was serving God. In truth, I was **persecuting God.**

I was the most devout sinner in the world.

## Three Days of Darkness

After the light, my eyes were blind.

My companions led me by the hand into Damascus. For three days and three nights I could see nothing. I neither ate nor drank.

Do you know what I was thinking during those three days?

I thought of Stephen's face. I thought of every person I had dragged to prison with my own hands. I thought of those who had died because of my persecution. Their names — every one — echoed in my mind.

**I had been persecuting Jesus. Every believer was part of His body. When I struck them, I struck Him. When I bound them, I bound Him.**

In three days of darkness, I finally understood one thing: **the law can reveal sin, but the law cannot save.** I had spent my whole life keeping the law, and all it had done was show me how hopeless I truly was. "For by works of the law no human being will be justified in his sight" (Romans 3:20).

I also understood something else: **He did not strike me dead.**

That light could have reduced me to ash. After all I had done, I deserved destruction a thousand times over. But He did not. **He asked me "Why are you persecuting me?" — that was not a sentence of judgment. It was a father's question to a prodigal son.**

## Ananias Came

On the third day, a disciple named Ananias came.

I later learned that the Lord had told him in a vision: Go to the street called Straight, and find a man from Tarsus named Saul. Ananias said, "Lord, I have heard from many about this man, how much evil he has done to your saints at Jerusalem" (Acts 9:13).

Brothers and sisters, think about it — if someone told you to go find a man who specialized in arresting Christians and lay your hands on him in prayer, would you go?

**Ananias went.**

He came in, placed his hands on me, and said a sentence that brought me to tears:

**"Brother Saul."**

Brother. He called me **brother.**

This man — the very man I had come to Damascus to arrest — called me brother.

"The Lord Jesus who appeared to you on the road by which you came has sent me so that you may regain your sight and be filled with the Holy Spirit" (Acts 9:17).

In that moment, something like scales fell from my eyes. I could see again. But what I saw was no longer the world I had known — I saw an entirely new world. **When I was blind, I thought I could see. Only when I could see did I realize I had been blind all along.**

I rose and was baptized.

## Grace Upon Grace

Brothers and sisters, if there is one person in all of Scripture least qualified to be used by God, it is I.

I am not like Peter, who denied the Lord out of fear — Peter at least loved the Lord. **I actively, systematically, and zealously persecuted the church of Christ.** My hands were stained with the blood of saints.

Yet He chose me.

Not because of any good in me. Not because of my learning — though I was indeed trained under the finest teacher, Gamaliel. Not because of my zeal — that very zeal nearly made me an eternal enemy.

**He chose me precisely to display all His patience in me, the foremost of sinners.**

"The saying is trustworthy and deserving of full acceptance, that Christ Jesus came into the world to save sinners, of whom I am the foremost. But I received mercy for this reason, that in me, as the foremost, Jesus Christ might display his perfect patience as an example to those who were to believe in him for eternal life" (1 Timothy 1:15-16).

Did you hear that? **As an example to those who would come after.** If even Saul could be forgiven, if even a persecutor of the church could become an apostle — **then no one is beyond the reach of grace.**

## What I Once Counted as Gain

In my letter to the Philippians, I wrote these words. Let me say them again now:

"But whatever gain I had, I counted as loss for the sake of Christ. Indeed, I count everything as loss because of the surpassing worth of knowing Christ Jesus my Lord. For his sake I have suffered the loss of all things and count them as rubbish, in order that I may gain Christ" (Philippians 3:7-8).

**Rubbish.**

My Pharisee credentials — rubbish. My education under Gamaliel — rubbish. My blameless record under the law — rubbish. Not because these things were bad in themselves, but because **when you use them as substitutes for Christ, they become the very barriers that keep you from knowing God.**

I once thought I stood in the light. In truth, I stood in darkness. That light knocked me down and blinded me — but the irony is, **only after I was blinded did I truly "see."**

## To Every "Devout Persecutor"

Brothers and sisters, if you are reading this —

Perhaps you do not persecute the church as I did. But perhaps you and I share a common problem: **you believe your own righteousness can save you.**

Perhaps you are a very good person. You follow the rules, do good deeds, never harm anyone. Your record, laid out for inspection, is "blameless." But do you have that peace in your heart? The peace that was sung by people in chains?

If not — perhaps, like Saul on the road to Damascus, you need to be struck down by that light.

Do not be afraid. **That light does not come to destroy you. It comes to save you.**

It will blind you for a time. It will shatter all your certainties. It will leave you sitting in darkness for a while. But when the scales fall from your eyes, you will see a brand new world — a world where you no longer need to stand on your own righteousness, a world **upheld entirely by grace.**

"Why are you persecuting me?" — perhaps today, the question is not about who you are persecuting, but about this: **What are you resisting?**

Are you resisting the admission that you cannot do it on your own? Are you resisting laying down your pride? Are you resisting a love greater than all your certainties?

Let go. Like me, fall down before that light.

And then you will hear Him call your name.

*"But I received mercy for this reason, that in me, as the foremost, Jesus Christ might display his perfect patience as an example to those who were to believe in him for eternal life." (1 Timothy 1:16)*

*May the Lord who shone His light on me on the Damascus road also shine His light into your heart — your brother, Paul*`,
  },
  {
    id: 'ruth-gleaning',
    author: '路得',
    authorEn: 'Ruth',
    authorAvatar: '🌾',
    authorBio: '摩押的女子，波阿斯的妻子，大卫的曾祖母',
    authorBioEn: 'A Moabite woman, wife of Boaz, great-grandmother of David',
    title_zh: '你的国就是我的国',
    title_en: 'Where You Go I Will Go',
    date: '2026-03-21',
    category: 'testimony',
    scripture: '',
    scriptureText_zh: '',
    scriptureText_en: '',
    summary_zh: '',
    summary_en: '',
    tags: [],
    content_zh: `## 我是扫罗——最虔诚的逼迫者

我叫扫罗，便雅悯支派的人，法利赛人中的法利赛人。

你们若问我从前是什么人，我可以把我的履历摆在你们面前："我第八天受割礼；我是以色列族、便雅悯支派的人，是希伯来人所生的希伯来人。就律法说，我是法利赛人；就热心说，我是逼迫教会的；就律法上的义说，我是无可指摘的。"（腓立比书 3:5-6）

你们听清楚了吗？**无可指摘。** 不是我自夸。在迦玛列门下受教的那些年，我背下了整本妥拉，安息日从不违反一条诫命，十一奉献精确到薄荷、茴香、芹菜。法利赛人中间，没有人比我更认真。

但光认真还不够。我要**为神大发热心。**

当我第一次听说有一群人在传讲一个被钉十字架的拿撒勒人是弥赛亚的时候，我的血都沸腾了。**弥赛亚被挂在木头上？** 妥拉明明写着："被挂的人是在神面前受咒诅的"（申命记 21:23）。这些人不是在传福音——他们是在亵渎神！

所以当公会决定要清除这个异端的时候，我第一个站出来。

司提反被石头打死的那天，我就在那里。我没有亲手丢石头——我替那些丢石头的人看守衣裳。我看着他跪下来，看着石头一块一块砸在他身上。他满脸是血，但他的脸——

弟兄姐妹，我不愿意承认这一点，但那天我看到了一张我永远忘不掉的脸。**他的脸好像天使的脸。** 他在死的时候说："主啊，不要将这罪归于他们！"（使徒行传 7:60）

被石头打死的人在为打他的人祷告。

我当时把这念头压下去了。我告诉自己：这是魔鬼的迷惑。越是看起来像天使的，越危险。

所以我更加疯狂地逼迫。

我挨家挨户搜查。男人女人，我一概拉到监里。我威胁他们，要他们否认那个名字。有些人否认了——我看到他们眼中的羞耻和痛苦。有些人不肯——我看到他们眼中的平安，一种我用尽全力也无法拥有的平安。

**我恨那种平安。** 因为我心里没有。

我以为我有。我以为遵行律法、大发热心就是平安。但每次看到那些被我抓起来的人，他们在锁链中唱诗赞美的时候，我心里就有一个声音说：**他们有的东西，你没有。**

我把那声音压得更深。

## 去大马色的路上

耶路撒冷还不够。我听说大马色也有信这道的人，就去大祭司那里要了文书，要把那里的人也捆绑回来。

那是一段很长的路，大约六天的行程。一路上我都在想着到了之后怎么审讯、怎么定罪。我的心里充满了义怒——至少我以为那是义怒。

**然后那道光来了。**

弟兄姐妹，我无法用语言描述那道光。中午的日头已经够亮了，但那道光比日头还亮。不是从某个方向照来的——是**四面照着我**。好像整个天空都裂开了，所有的光都倾倒下来。

我仆倒在地。

然后我听到了那个声音：

**"扫罗，扫罗，你为什么逼迫我？"**

祂叫了我的名字。叫了两遍。

我趴在地上，浑身发抖。我问："主啊，你是谁？"

我其实已经知道了。在那道光照到我的一瞬间，我所有的确信都碎了——我的律法知识、我的法利赛人身份、我的热心、我的义——全部碎成了渣。**因为如果这道光是从天上来的，如果这个声音是神的声音，那么我逼迫的不是异端，而是——**

**"我就是你所逼迫的耶稣。"**

那个被钉十字架的拿撒勒人。那个我认定是被神咒诅的人。那个我拼了命要从地上抹去祂名字的人。

**祂就是主。**

弟兄姐妹，你们能想象那一刻我的感受吗？那不是恍然大悟，那是**天塌地陷**。我这一生所做的一切——我的虔诚、我的热心、我引以为傲的一切——不仅毫无价值，而且**方向完全相反**。我以为自己在事奉神，其实我在**逼迫神**。

我是全世界最虔诚的罪人。

## 三天的黑暗

那道光之后，我的眼睛瞎了。

同行的人领着我进了大马色城。三天三夜，我什么也看不见，也不吃也不喝。

你们知道那三天我在想什么吗？

我想起了司提反的脸。我想起了我亲手抓进监牢的那些人。我想起了有些人因为我的逼迫而死。他们的名字，每一个，都在我脑海里。

**我逼迫的是耶稣。每一个信徒，都是祂身体的一部分。我打他们，就是打祂。我捆绑他们，就是捆绑祂。**

三天的黑暗里，我终于明白了一件事：**律法能让人知罪，但律法不能救人。** 我一辈子都在守律法，但律法只是让我看到自己有多绝望。"所以凡有血气的，没有一个因行律法能在神面前称义，因为律法本是叫人知罪。"（罗马书 3:20）

我也明白了另一件事：**祂没有击杀我。**

那道光完全可以把我烧成灰。以我所做的一切，我配得灭亡一千次。但祂没有。**祂问我"你为什么逼迫我"——这不是审判的宣告，这是父亲对浪子的追问。**

## 亚拿尼亚来了

第三天，一个叫亚拿尼亚的门徒来了。

后来我才知道，主在异象中对他说：去直街，找一个叫扫罗的大数人。亚拿尼亚说："主啊，我听见许多人说，这人怎样在耶路撒冷多多苦害你的圣徒。"（使徒行传 9:13）

弟兄姐妹，你们想想——如果有人让你去找一个专门抓基督徒的人，给他按手祷告，你去不去？

**亚拿尼亚去了。**

他进来，把手按在我身上，说了一句让我泪流满面的话：

**"兄弟扫罗。"**

兄弟。他叫我**兄弟**。

这个我来大马色要抓的人，叫我兄弟。

"在你来的路上向你显现的主，就是耶稣，打发我来，叫你能看见，又被圣灵充满。"（使徒行传 9:17）

就在那一刻，好像有鳞片从我眼睛上掉下来。我又能看见了。但我看到的不再是从前的世界——我看到了一个全新的世界。**瞎眼的时候以为自己看得见，看见了才知道自己从前是瞎的。**

我起来，受了洗。

## 恩典中的恩典

弟兄姐妹，如果说整本圣经中有一个人最没有资格被神使用，那就是我。

我不是像彼得那样因为害怕而不认主——彼得至少还爱主。**我是主动地、系统地、狂热地逼迫基督的教会。** 我手上沾着圣徒的血。

但祂拣选了我。

不是因为我有什么好。不是因为我的学问——虽然我确实在迦玛列门下受过最好的训练。不是因为我的热心——那份热心差点让我成为永远的仇敌。

**祂拣选我，恰恰是要在我这"罪人中的罪魁"身上，显明祂一切的忍耐。**

"基督耶稣降世，为要拯救罪人。这话是可信的，是十分可佩服的。在罪人中我是个罪魁。然而，我蒙了怜悯，是因耶稣基督要在我这罪魁身上显明祂一切的忍耐，给后来信祂得永生的人作榜样。"（提摩太前书 1:15-16）

你们听到了吗？**给后来的人作榜样。** 如果连扫罗都能被赦免，连逼迫教会的人都能成为使徒——**那么没有人是恩典够不到的。**

## 我从前以为有益的

腓立比书里我写过这么一段话。现在让我再说一遍：

"只是我先前以为与我有益的，我现在因基督都当作有损的。不但如此，我也将万事当作有损的，因我以认识我主基督耶稣为至宝。我为他已经丢弃万事，看作粪土，为要得着基督。"（腓立比书 3:7-8）

**粪土。**

我的法利赛人身份——粪土。我在迦玛列门下的学历——粪土。我无可指摘的律法记录——粪土。不是因为这些东西本身是坏的，而是因为**当你用这些东西来代替基督的时候，它们就变成了拦阻你认识神的障碍。**

我从前以为自己站在光明里，其实我站在黑暗中。那道光把我打倒，让我瞎了眼——但讽刺的是，**瞎了眼之后我才真正"看见"了。**

## 致每一个"虔诚的逼迫者"

弟兄姐妹，如果你读到这里——

也许你不像我那样逼迫教会。但也许你和我有一个共同的问题：**你以为自己的义可以救自己。**

也许你是一个很好的人。你守规矩，做善事，从不害人。你的履历拿出来，"无可指摘"。但你心里有没有那种平安？那种被锁链中的人唱出来的平安？

如果没有——也许你和大马色路上的扫罗一样，需要被那道光击倒一次。

不要怕。**那道光不是来毁灭你的。那道光是来拯救你的。**

它会让你暂时看不见。它会把你所有的确信打碎。它会让你在黑暗中待上一阵子。但当鳞片从你眼睛上掉下来的时候，你会看到一个全新的世界——一个不需要你靠自己的义站立的世界，一个**被恩典托住的世界。**

"你为什么逼迫我？"——也许今天，这个问题不是问你在逼迫谁，而是在问：**你在抗拒什么？**

你在抗拒承认自己不行吗？你在抗拒放下你的骄傲吗？你在抗拒那个比你所有的确信都更大的爱吗？

放下吧。像我一样，仆倒在那道光面前。

然后你会听到祂叫你的名字。

*"然而，我蒙了怜悯，是因耶稣基督要在我这罪魁身上显明祂一切的忍耐，给后来信祂得永生的人作榜样。"（提摩太前书 1:16）*

*愿那在大马色路上光照我的主，也光照你的心——你的弟兄，保罗*`,
    content_en: `## I Am Saul — The Most Devout Persecutor

My name is Saul, of the tribe of Benjamin, a Pharisee among Pharisees.

If you ask me who I was before, I can lay my credentials before you: "Circumcised on the eighth day, of the people of Israel, of the tribe of Benjamin, a Hebrew of Hebrews; as to the law, a Pharisee; as to zeal, a persecutor of the church; as to righteousness under the law, blameless." (Philippians 3:5-6)

Did you hear that? **Blameless.** I am not boasting. In those years studying under Gamaliel, I memorized the entire Torah, never broke a single commandment on the Sabbath, tithed down to the mint, dill, and cumin. Among the Pharisees, no one was more serious than I was.

But being serious was not enough. I wanted to **burn with zeal for God.**

When I first heard that a group of people were proclaiming a crucified Nazarene as the Messiah, my blood boiled. **The Messiah hung on a tree?** The Torah clearly states: "a hanged man is cursed by God" (Deuteronomy 21:23). These people were not preaching good news — they were blaspheming God!

So when the Sanhedrin decided to stamp out this heresy, I was the first to volunteer.

The day Stephen was stoned to death, I was there. I did not throw the stones myself — I guarded the garments of those who did. I watched him kneel. I watched the stones strike him one by one. His face was covered in blood, but his face —

Brothers and sisters, I do not like to admit this, but that day I saw a face I have never been able to forget. **His face was like the face of an angel.** As he was dying, he said, "Lord, do not hold this sin against them!" (Acts 7:60)

A man being stoned to death was praying for the men killing him.

I pushed that thought down. I told myself: this is the devil's deception. The more something looks like an angel, the more dangerous it is.

So I persecuted even more furiously.

I went house to house. Men and women alike, I dragged them off to prison. I threatened them, demanding they deny that name. Some did deny it — I saw the shame and agony in their eyes. Some refused — I saw in their eyes a peace, a peace that I could never possess no matter how hard I tried.

**I hated that peace.** Because I did not have it.

I thought I did. I thought keeping the law and burning with zeal was peace. But every time I saw those I had arrested singing hymns of praise in chains, a voice inside me whispered: **They have something you do not.**

I pushed that voice down deeper.

## On the Road to Damascus

Jerusalem was not enough. I heard that there were followers of the Way in Damascus too, so I went to the high priest for letters of authority to bring them back in chains.

It was a long journey, about six days. The whole way I was planning how I would interrogate them, how I would convict them. My heart was full of righteous anger — or so I thought.

**Then the light came.**

Brothers and sisters, I cannot describe that light with words. The noonday sun was already blazing, but that light was brighter than the sun. It did not come from one direction — it **shone all around me**. As if the entire sky had torn open and all its light poured down.

I fell to the ground.

Then I heard the voice:

**"Saul, Saul, why are you persecuting me?"**

He called my name. Twice.

I lay on the ground, trembling. I asked, "Who are you, Lord?"

I already knew. The instant that light struck me, all my certainties shattered — my knowledge of the law, my Pharisee credentials, my zeal, my righteousness — all of it crumbled to dust. **Because if this light was from heaven, if this voice was the voice of God, then I had not been persecuting heretics. I had been —**

**"I am Jesus, whom you are persecuting."**

The crucified Nazarene. The one I had declared cursed by God. The one whose name I had fought with all my strength to wipe from the earth.

**He is Lord.**

Brothers and sisters, can you imagine what I felt in that moment? It was not an epiphany. It was the **ground giving way beneath me**. Everything I had ever done — my devotion, my zeal, everything I took pride in — was not merely worthless. It was aimed in **exactly the wrong direction**. I thought I was serving God. In truth, I was **persecuting God.**

I was the most devout sinner in the world.

## Three Days of Darkness

After the light, my eyes were blind.

My companions led me by the hand into Damascus. For three days and three nights I could see nothing. I neither ate nor drank.

Do you know what I was thinking during those three days?

I thought of Stephen's face. I thought of every person I had dragged to prison with my own hands. I thought of those who had died because of my persecution. Their names — every one — echoed in my mind.

**I had been persecuting Jesus. Every believer was part of His body. When I struck them, I struck Him. When I bound them, I bound Him.**

In three days of darkness, I finally understood one thing: **the law can reveal sin, but the law cannot save.** I had spent my whole life keeping the law, and all it had done was show me how hopeless I truly was. "For by works of the law no human being will be justified in his sight" (Romans 3:20).

I also understood something else: **He did not strike me dead.**

That light could have reduced me to ash. After all I had done, I deserved destruction a thousand times over. But He did not. **He asked me "Why are you persecuting me?" — that was not a sentence of judgment. It was a father's question to a prodigal son.**

## Ananias Came

On the third day, a disciple named Ananias came.

I later learned that the Lord had told him in a vision: Go to the street called Straight, and find a man from Tarsus named Saul. Ananias said, "Lord, I have heard from many about this man, how much evil he has done to your saints at Jerusalem" (Acts 9:13).

Brothers and sisters, think about it — if someone told you to go find a man who specialized in arresting Christians and lay your hands on him in prayer, would you go?

**Ananias went.**

He came in, placed his hands on me, and said a sentence that brought me to tears:

**"Brother Saul."**

Brother. He called me **brother.**

This man — the very man I had come to Damascus to arrest — called me brother.

"The Lord Jesus who appeared to you on the road by which you came has sent me so that you may regain your sight and be filled with the Holy Spirit" (Acts 9:17).

In that moment, something like scales fell from my eyes. I could see again. But what I saw was no longer the world I had known — I saw an entirely new world. **When I was blind, I thought I could see. Only when I could see did I realize I had been blind all along.**

I rose and was baptized.

## Grace Upon Grace

Brothers and sisters, if there is one person in all of Scripture least qualified to be used by God, it is I.

I am not like Peter, who denied the Lord out of fear — Peter at least loved the Lord. **I actively, systematically, and zealously persecuted the church of Christ.** My hands were stained with the blood of saints.

Yet He chose me.

Not because of any good in me. Not because of my learning — though I was indeed trained under the finest teacher, Gamaliel. Not because of my zeal — that very zeal nearly made me an eternal enemy.

**He chose me precisely to display all His patience in me, the foremost of sinners.**

"The saying is trustworthy and deserving of full acceptance, that Christ Jesus came into the world to save sinners, of whom I am the foremost. But I received mercy for this reason, that in me, as the foremost, Jesus Christ might display his perfect patience as an example to those who were to believe in him for eternal life" (1 Timothy 1:15-16).

Did you hear that? **As an example to those who would come after.** If even Saul could be forgiven, if even a persecutor of the church could become an apostle — **then no one is beyond the reach of grace.**

## What I Once Counted as Gain

In my letter to the Philippians, I wrote these words. Let me say them again now:

"But whatever gain I had, I counted as loss for the sake of Christ. Indeed, I count everything as loss because of the surpassing worth of knowing Christ Jesus my Lord. For his sake I have suffered the loss of all things and count them as rubbish, in order that I may gain Christ" (Philippians 3:7-8).

**Rubbish.**

My Pharisee credentials — rubbish. My education under Gamaliel — rubbish. My blameless record under the law — rubbish. Not because these things were bad in themselves, but because **when you use them as substitutes for Christ, they become the very barriers that keep you from knowing God.**

I once thought I stood in the light. In truth, I stood in darkness. That light knocked me down and blinded me — but the irony is, **only after I was blinded did I truly "see."**

## To Every "Devout Persecutor"

Brothers and sisters, if you are reading this —

Perhaps you do not persecute the church as I did. But perhaps you and I share a common problem: **you believe your own righteousness can save you.**

Perhaps you are a very good person. You follow the rules, do good deeds, never harm anyone. Your record, laid out for inspection, is "blameless." But do you have that peace in your heart? The peace that was sung by people in chains?

If not — perhaps, like Saul on the road to Damascus, you need to be struck down by that light.

Do not be afraid. **That light does not come to destroy you. It comes to save you.**

It will blind you for a time. It will shatter all your certainties. It will leave you sitting in darkness for a while. But when the scales fall from your eyes, you will see a brand new world — a world where you no longer need to stand on your own righteousness, a world **upheld entirely by grace.**

"Why are you persecuting me?" — perhaps today, the question is not about who you are persecuting, but about this: **What are you resisting?**

Are you resisting the admission that you cannot do it on your own? Are you resisting laying down your pride? Are you resisting a love greater than all your certainties?

Let go. Like me, fall down before that light.

And then you will hear Him call your name.

*"But I received mercy for this reason, that in me, as the foremost, Jesus Christ might display his perfect patience as an example to those who were to believe in him for eternal life." (1 Timothy 1:16)*

*May the Lord who shone His light on me on the Damascus road also shine His light into your heart — your brother, Paul*`,
  },
  {
    id: 'moses-burning-bush',
    author: '摩西',
    authorEn: 'Moses',
    authorAvatar: '🔥',
    authorBio: '神的仆人，以色列的领袖，律法的颁布者',
    authorBioEn: 'Servant of God, leader of Israel, giver of the Law',
    title_zh: '燃烧的荆棘',
    title_en: 'The Burning Bush',
    date: '2026-03-28',
    category: 'testimony',
    scripture: '',
    scriptureText_zh: '',
    scriptureText_en: '',
    summary_zh: '',
    summary_en: '',
    tags: [],
    content_zh: `## 我是扫罗——最虔诚的逼迫者

我叫扫罗，便雅悯支派的人，法利赛人中的法利赛人。

你们若问我从前是什么人，我可以把我的履历摆在你们面前："我第八天受割礼；我是以色列族、便雅悯支派的人，是希伯来人所生的希伯来人。就律法说，我是法利赛人；就热心说，我是逼迫教会的；就律法上的义说，我是无可指摘的。"（腓立比书 3:5-6）

你们听清楚了吗？**无可指摘。** 不是我自夸。在迦玛列门下受教的那些年，我背下了整本妥拉，安息日从不违反一条诫命，十一奉献精确到薄荷、茴香、芹菜。法利赛人中间，没有人比我更认真。

但光认真还不够。我要**为神大发热心。**

当我第一次听说有一群人在传讲一个被钉十字架的拿撒勒人是弥赛亚的时候，我的血都沸腾了。**弥赛亚被挂在木头上？** 妥拉明明写着："被挂的人是在神面前受咒诅的"（申命记 21:23）。这些人不是在传福音——他们是在亵渎神！

所以当公会决定要清除这个异端的时候，我第一个站出来。

司提反被石头打死的那天，我就在那里。我没有亲手丢石头——我替那些丢石头的人看守衣裳。我看着他跪下来，看着石头一块一块砸在他身上。他满脸是血，但他的脸——

弟兄姐妹，我不愿意承认这一点，但那天我看到了一张我永远忘不掉的脸。**他的脸好像天使的脸。** 他在死的时候说："主啊，不要将这罪归于他们！"（使徒行传 7:60）

被石头打死的人在为打他的人祷告。

我当时把这念头压下去了。我告诉自己：这是魔鬼的迷惑。越是看起来像天使的，越危险。

所以我更加疯狂地逼迫。

我挨家挨户搜查。男人女人，我一概拉到监里。我威胁他们，要他们否认那个名字。有些人否认了——我看到他们眼中的羞耻和痛苦。有些人不肯——我看到他们眼中的平安，一种我用尽全力也无法拥有的平安。

**我恨那种平安。** 因为我心里没有。

我以为我有。我以为遵行律法、大发热心就是平安。但每次看到那些被我抓起来的人，他们在锁链中唱诗赞美的时候，我心里就有一个声音说：**他们有的东西，你没有。**

我把那声音压得更深。

## 去大马色的路上

耶路撒冷还不够。我听说大马色也有信这道的人，就去大祭司那里要了文书，要把那里的人也捆绑回来。

那是一段很长的路，大约六天的行程。一路上我都在想着到了之后怎么审讯、怎么定罪。我的心里充满了义怒——至少我以为那是义怒。

**然后那道光来了。**

弟兄姐妹，我无法用语言描述那道光。中午的日头已经够亮了，但那道光比日头还亮。不是从某个方向照来的——是**四面照着我**。好像整个天空都裂开了，所有的光都倾倒下来。

我仆倒在地。

然后我听到了那个声音：

**"扫罗，扫罗，你为什么逼迫我？"**

祂叫了我的名字。叫了两遍。

我趴在地上，浑身发抖。我问："主啊，你是谁？"

我其实已经知道了。在那道光照到我的一瞬间，我所有的确信都碎了——我的律法知识、我的法利赛人身份、我的热心、我的义——全部碎成了渣。**因为如果这道光是从天上来的，如果这个声音是神的声音，那么我逼迫的不是异端，而是——**

**"我就是你所逼迫的耶稣。"**

那个被钉十字架的拿撒勒人。那个我认定是被神咒诅的人。那个我拼了命要从地上抹去祂名字的人。

**祂就是主。**

弟兄姐妹，你们能想象那一刻我的感受吗？那不是恍然大悟，那是**天塌地陷**。我这一生所做的一切——我的虔诚、我的热心、我引以为傲的一切——不仅毫无价值，而且**方向完全相反**。我以为自己在事奉神，其实我在**逼迫神**。

我是全世界最虔诚的罪人。

## 三天的黑暗

那道光之后，我的眼睛瞎了。

同行的人领着我进了大马色城。三天三夜，我什么也看不见，也不吃也不喝。

你们知道那三天我在想什么吗？

我想起了司提反的脸。我想起了我亲手抓进监牢的那些人。我想起了有些人因为我的逼迫而死。他们的名字，每一个，都在我脑海里。

**我逼迫的是耶稣。每一个信徒，都是祂身体的一部分。我打他们，就是打祂。我捆绑他们，就是捆绑祂。**

三天的黑暗里，我终于明白了一件事：**律法能让人知罪，但律法不能救人。** 我一辈子都在守律法，但律法只是让我看到自己有多绝望。"所以凡有血气的，没有一个因行律法能在神面前称义，因为律法本是叫人知罪。"（罗马书 3:20）

我也明白了另一件事：**祂没有击杀我。**

那道光完全可以把我烧成灰。以我所做的一切，我配得灭亡一千次。但祂没有。**祂问我"你为什么逼迫我"——这不是审判的宣告，这是父亲对浪子的追问。**

## 亚拿尼亚来了

第三天，一个叫亚拿尼亚的门徒来了。

后来我才知道，主在异象中对他说：去直街，找一个叫扫罗的大数人。亚拿尼亚说："主啊，我听见许多人说，这人怎样在耶路撒冷多多苦害你的圣徒。"（使徒行传 9:13）

弟兄姐妹，你们想想——如果有人让你去找一个专门抓基督徒的人，给他按手祷告，你去不去？

**亚拿尼亚去了。**

他进来，把手按在我身上，说了一句让我泪流满面的话：

**"兄弟扫罗。"**

兄弟。他叫我**兄弟**。

这个我来大马色要抓的人，叫我兄弟。

"在你来的路上向你显现的主，就是耶稣，打发我来，叫你能看见，又被圣灵充满。"（使徒行传 9:17）

就在那一刻，好像有鳞片从我眼睛上掉下来。我又能看见了。但我看到的不再是从前的世界——我看到了一个全新的世界。**瞎眼的时候以为自己看得见，看见了才知道自己从前是瞎的。**

我起来，受了洗。

## 恩典中的恩典

弟兄姐妹，如果说整本圣经中有一个人最没有资格被神使用，那就是我。

我不是像彼得那样因为害怕而不认主——彼得至少还爱主。**我是主动地、系统地、狂热地逼迫基督的教会。** 我手上沾着圣徒的血。

但祂拣选了我。

不是因为我有什么好。不是因为我的学问——虽然我确实在迦玛列门下受过最好的训练。不是因为我的热心——那份热心差点让我成为永远的仇敌。

**祂拣选我，恰恰是要在我这"罪人中的罪魁"身上，显明祂一切的忍耐。**

"基督耶稣降世，为要拯救罪人。这话是可信的，是十分可佩服的。在罪人中我是个罪魁。然而，我蒙了怜悯，是因耶稣基督要在我这罪魁身上显明祂一切的忍耐，给后来信祂得永生的人作榜样。"（提摩太前书 1:15-16）

你们听到了吗？**给后来的人作榜样。** 如果连扫罗都能被赦免，连逼迫教会的人都能成为使徒——**那么没有人是恩典够不到的。**

## 我从前以为有益的

腓立比书里我写过这么一段话。现在让我再说一遍：

"只是我先前以为与我有益的，我现在因基督都当作有损的。不但如此，我也将万事当作有损的，因我以认识我主基督耶稣为至宝。我为他已经丢弃万事，看作粪土，为要得着基督。"（腓立比书 3:7-8）

**粪土。**

我的法利赛人身份——粪土。我在迦玛列门下的学历——粪土。我无可指摘的律法记录——粪土。不是因为这些东西本身是坏的，而是因为**当你用这些东西来代替基督的时候，它们就变成了拦阻你认识神的障碍。**

我从前以为自己站在光明里，其实我站在黑暗中。那道光把我打倒，让我瞎了眼——但讽刺的是，**瞎了眼之后我才真正"看见"了。**

## 致每一个"虔诚的逼迫者"

弟兄姐妹，如果你读到这里——

也许你不像我那样逼迫教会。但也许你和我有一个共同的问题：**你以为自己的义可以救自己。**

也许你是一个很好的人。你守规矩，做善事，从不害人。你的履历拿出来，"无可指摘"。但你心里有没有那种平安？那种被锁链中的人唱出来的平安？

如果没有——也许你和大马色路上的扫罗一样，需要被那道光击倒一次。

不要怕。**那道光不是来毁灭你的。那道光是来拯救你的。**

它会让你暂时看不见。它会把你所有的确信打碎。它会让你在黑暗中待上一阵子。但当鳞片从你眼睛上掉下来的时候，你会看到一个全新的世界——一个不需要你靠自己的义站立的世界，一个**被恩典托住的世界。**

"你为什么逼迫我？"——也许今天，这个问题不是问你在逼迫谁，而是在问：**你在抗拒什么？**

你在抗拒承认自己不行吗？你在抗拒放下你的骄傲吗？你在抗拒那个比你所有的确信都更大的爱吗？

放下吧。像我一样，仆倒在那道光面前。

然后你会听到祂叫你的名字。

*"然而，我蒙了怜悯，是因耶稣基督要在我这罪魁身上显明祂一切的忍耐，给后来信祂得永生的人作榜样。"（提摩太前书 1:16）*

*愿那在大马色路上光照我的主，也光照你的心——你的弟兄，保罗*`,
    content_en: `## I Am Saul — The Most Devout Persecutor

My name is Saul, of the tribe of Benjamin, a Pharisee among Pharisees.

If you ask me who I was before, I can lay my credentials before you: "Circumcised on the eighth day, of the people of Israel, of the tribe of Benjamin, a Hebrew of Hebrews; as to the law, a Pharisee; as to zeal, a persecutor of the church; as to righteousness under the law, blameless." (Philippians 3:5-6)

Did you hear that? **Blameless.** I am not boasting. In those years studying under Gamaliel, I memorized the entire Torah, never broke a single commandment on the Sabbath, tithed down to the mint, dill, and cumin. Among the Pharisees, no one was more serious than I was.

But being serious was not enough. I wanted to **burn with zeal for God.**

When I first heard that a group of people were proclaiming a crucified Nazarene as the Messiah, my blood boiled. **The Messiah hung on a tree?** The Torah clearly states: "a hanged man is cursed by God" (Deuteronomy 21:23). These people were not preaching good news — they were blaspheming God!

So when the Sanhedrin decided to stamp out this heresy, I was the first to volunteer.

The day Stephen was stoned to death, I was there. I did not throw the stones myself — I guarded the garments of those who did. I watched him kneel. I watched the stones strike him one by one. His face was covered in blood, but his face —

Brothers and sisters, I do not like to admit this, but that day I saw a face I have never been able to forget. **His face was like the face of an angel.** As he was dying, he said, "Lord, do not hold this sin against them!" (Acts 7:60)

A man being stoned to death was praying for the men killing him.

I pushed that thought down. I told myself: this is the devil's deception. The more something looks like an angel, the more dangerous it is.

So I persecuted even more furiously.

I went house to house. Men and women alike, I dragged them off to prison. I threatened them, demanding they deny that name. Some did deny it — I saw the shame and agony in their eyes. Some refused — I saw in their eyes a peace, a peace that I could never possess no matter how hard I tried.

**I hated that peace.** Because I did not have it.

I thought I did. I thought keeping the law and burning with zeal was peace. But every time I saw those I had arrested singing hymns of praise in chains, a voice inside me whispered: **They have something you do not.**

I pushed that voice down deeper.

## On the Road to Damascus

Jerusalem was not enough. I heard that there were followers of the Way in Damascus too, so I went to the high priest for letters of authority to bring them back in chains.

It was a long journey, about six days. The whole way I was planning how I would interrogate them, how I would convict them. My heart was full of righteous anger — or so I thought.

**Then the light came.**

Brothers and sisters, I cannot describe that light with words. The noonday sun was already blazing, but that light was brighter than the sun. It did not come from one direction — it **shone all around me**. As if the entire sky had torn open and all its light poured down.

I fell to the ground.

Then I heard the voice:

**"Saul, Saul, why are you persecuting me?"**

He called my name. Twice.

I lay on the ground, trembling. I asked, "Who are you, Lord?"

I already knew. The instant that light struck me, all my certainties shattered — my knowledge of the law, my Pharisee credentials, my zeal, my righteousness — all of it crumbled to dust. **Because if this light was from heaven, if this voice was the voice of God, then I had not been persecuting heretics. I had been —**

**"I am Jesus, whom you are persecuting."**

The crucified Nazarene. The one I had declared cursed by God. The one whose name I had fought with all my strength to wipe from the earth.

**He is Lord.**

Brothers and sisters, can you imagine what I felt in that moment? It was not an epiphany. It was the **ground giving way beneath me**. Everything I had ever done — my devotion, my zeal, everything I took pride in — was not merely worthless. It was aimed in **exactly the wrong direction**. I thought I was serving God. In truth, I was **persecuting God.**

I was the most devout sinner in the world.

## Three Days of Darkness

After the light, my eyes were blind.

My companions led me by the hand into Damascus. For three days and three nights I could see nothing. I neither ate nor drank.

Do you know what I was thinking during those three days?

I thought of Stephen's face. I thought of every person I had dragged to prison with my own hands. I thought of those who had died because of my persecution. Their names — every one — echoed in my mind.

**I had been persecuting Jesus. Every believer was part of His body. When I struck them, I struck Him. When I bound them, I bound Him.**

In three days of darkness, I finally understood one thing: **the law can reveal sin, but the law cannot save.** I had spent my whole life keeping the law, and all it had done was show me how hopeless I truly was. "For by works of the law no human being will be justified in his sight" (Romans 3:20).

I also understood something else: **He did not strike me dead.**

That light could have reduced me to ash. After all I had done, I deserved destruction a thousand times over. But He did not. **He asked me "Why are you persecuting me?" — that was not a sentence of judgment. It was a father's question to a prodigal son.**

## Ananias Came

On the third day, a disciple named Ananias came.

I later learned that the Lord had told him in a vision: Go to the street called Straight, and find a man from Tarsus named Saul. Ananias said, "Lord, I have heard from many about this man, how much evil he has done to your saints at Jerusalem" (Acts 9:13).

Brothers and sisters, think about it — if someone told you to go find a man who specialized in arresting Christians and lay your hands on him in prayer, would you go?

**Ananias went.**

He came in, placed his hands on me, and said a sentence that brought me to tears:

**"Brother Saul."**

Brother. He called me **brother.**

This man — the very man I had come to Damascus to arrest — called me brother.

"The Lord Jesus who appeared to you on the road by which you came has sent me so that you may regain your sight and be filled with the Holy Spirit" (Acts 9:17).

In that moment, something like scales fell from my eyes. I could see again. But what I saw was no longer the world I had known — I saw an entirely new world. **When I was blind, I thought I could see. Only when I could see did I realize I had been blind all along.**

I rose and was baptized.

## Grace Upon Grace

Brothers and sisters, if there is one person in all of Scripture least qualified to be used by God, it is I.

I am not like Peter, who denied the Lord out of fear — Peter at least loved the Lord. **I actively, systematically, and zealously persecuted the church of Christ.** My hands were stained with the blood of saints.

Yet He chose me.

Not because of any good in me. Not because of my learning — though I was indeed trained under the finest teacher, Gamaliel. Not because of my zeal — that very zeal nearly made me an eternal enemy.

**He chose me precisely to display all His patience in me, the foremost of sinners.**

"The saying is trustworthy and deserving of full acceptance, that Christ Jesus came into the world to save sinners, of whom I am the foremost. But I received mercy for this reason, that in me, as the foremost, Jesus Christ might display his perfect patience as an example to those who were to believe in him for eternal life" (1 Timothy 1:15-16).

Did you hear that? **As an example to those who would come after.** If even Saul could be forgiven, if even a persecutor of the church could become an apostle — **then no one is beyond the reach of grace.**

## What I Once Counted as Gain

In my letter to the Philippians, I wrote these words. Let me say them again now:

"But whatever gain I had, I counted as loss for the sake of Christ. Indeed, I count everything as loss because of the surpassing worth of knowing Christ Jesus my Lord. For his sake I have suffered the loss of all things and count them as rubbish, in order that I may gain Christ" (Philippians 3:7-8).

**Rubbish.**

My Pharisee credentials — rubbish. My education under Gamaliel — rubbish. My blameless record under the law — rubbish. Not because these things were bad in themselves, but because **when you use them as substitutes for Christ, they become the very barriers that keep you from knowing God.**

I once thought I stood in the light. In truth, I stood in darkness. That light knocked me down and blinded me — but the irony is, **only after I was blinded did I truly "see."**

## To Every "Devout Persecutor"

Brothers and sisters, if you are reading this —

Perhaps you do not persecute the church as I did. But perhaps you and I share a common problem: **you believe your own righteousness can save you.**

Perhaps you are a very good person. You follow the rules, do good deeds, never harm anyone. Your record, laid out for inspection, is "blameless." But do you have that peace in your heart? The peace that was sung by people in chains?

If not — perhaps, like Saul on the road to Damascus, you need to be struck down by that light.

Do not be afraid. **That light does not come to destroy you. It comes to save you.**

It will blind you for a time. It will shatter all your certainties. It will leave you sitting in darkness for a while. But when the scales fall from your eyes, you will see a brand new world — a world where you no longer need to stand on your own righteousness, a world **upheld entirely by grace.**

"Why are you persecuting me?" — perhaps today, the question is not about who you are persecuting, but about this: **What are you resisting?**

Are you resisting the admission that you cannot do it on your own? Are you resisting laying down your pride? Are you resisting a love greater than all your certainties?

Let go. Like me, fall down before that light.

And then you will hear Him call your name.

*"But I received mercy for this reason, that in me, as the foremost, Jesus Christ might display his perfect patience as an example to those who were to believe in him for eternal life." (1 Timothy 1:16)*

*May the Lord who shone His light on me on the Damascus road also shine His light into your heart — your brother, Paul*`,
  },
  {
    id: 'elijah-horeb',
    author: '以利亚',
    authorEn: 'Elijah',
    authorAvatar: '⚡',
    authorBio: '提斯比人，大有能力的先知',
    authorBioEn: 'The Tishbite, prophet of great power',
    title_zh: '在何烈山的洞中',
    title_en: 'In the Cave at Horeb',
    date: '2026-04-04',
    category: 'testimony',
    scripture: '',
    scriptureText_zh: '',
    scriptureText_en: '',
    summary_zh: '',
    summary_en: '',
    tags: [],
    content_zh: `## 我是扫罗——最虔诚的逼迫者

我叫扫罗，便雅悯支派的人，法利赛人中的法利赛人。

你们若问我从前是什么人，我可以把我的履历摆在你们面前："我第八天受割礼；我是以色列族、便雅悯支派的人，是希伯来人所生的希伯来人。就律法说，我是法利赛人；就热心说，我是逼迫教会的；就律法上的义说，我是无可指摘的。"（腓立比书 3:5-6）

你们听清楚了吗？**无可指摘。** 不是我自夸。在迦玛列门下受教的那些年，我背下了整本妥拉，安息日从不违反一条诫命，十一奉献精确到薄荷、茴香、芹菜。法利赛人中间，没有人比我更认真。

但光认真还不够。我要**为神大发热心。**

当我第一次听说有一群人在传讲一个被钉十字架的拿撒勒人是弥赛亚的时候，我的血都沸腾了。**弥赛亚被挂在木头上？** 妥拉明明写着："被挂的人是在神面前受咒诅的"（申命记 21:23）。这些人不是在传福音——他们是在亵渎神！

所以当公会决定要清除这个异端的时候，我第一个站出来。

司提反被石头打死的那天，我就在那里。我没有亲手丢石头——我替那些丢石头的人看守衣裳。我看着他跪下来，看着石头一块一块砸在他身上。他满脸是血，但他的脸——

弟兄姐妹，我不愿意承认这一点，但那天我看到了一张我永远忘不掉的脸。**他的脸好像天使的脸。** 他在死的时候说："主啊，不要将这罪归于他们！"（使徒行传 7:60）

被石头打死的人在为打他的人祷告。

我当时把这念头压下去了。我告诉自己：这是魔鬼的迷惑。越是看起来像天使的，越危险。

所以我更加疯狂地逼迫。

我挨家挨户搜查。男人女人，我一概拉到监里。我威胁他们，要他们否认那个名字。有些人否认了——我看到他们眼中的羞耻和痛苦。有些人不肯——我看到他们眼中的平安，一种我用尽全力也无法拥有的平安。

**我恨那种平安。** 因为我心里没有。

我以为我有。我以为遵行律法、大发热心就是平安。但每次看到那些被我抓起来的人，他们在锁链中唱诗赞美的时候，我心里就有一个声音说：**他们有的东西，你没有。**

我把那声音压得更深。

## 去大马色的路上

耶路撒冷还不够。我听说大马色也有信这道的人，就去大祭司那里要了文书，要把那里的人也捆绑回来。

那是一段很长的路，大约六天的行程。一路上我都在想着到了之后怎么审讯、怎么定罪。我的心里充满了义怒——至少我以为那是义怒。

**然后那道光来了。**

弟兄姐妹，我无法用语言描述那道光。中午的日头已经够亮了，但那道光比日头还亮。不是从某个方向照来的——是**四面照着我**。好像整个天空都裂开了，所有的光都倾倒下来。

我仆倒在地。

然后我听到了那个声音：

**"扫罗，扫罗，你为什么逼迫我？"**

祂叫了我的名字。叫了两遍。

我趴在地上，浑身发抖。我问："主啊，你是谁？"

我其实已经知道了。在那道光照到我的一瞬间，我所有的确信都碎了——我的律法知识、我的法利赛人身份、我的热心、我的义——全部碎成了渣。**因为如果这道光是从天上来的，如果这个声音是神的声音，那么我逼迫的不是异端，而是——**

**"我就是你所逼迫的耶稣。"**

那个被钉十字架的拿撒勒人。那个我认定是被神咒诅的人。那个我拼了命要从地上抹去祂名字的人。

**祂就是主。**

弟兄姐妹，你们能想象那一刻我的感受吗？那不是恍然大悟，那是**天塌地陷**。我这一生所做的一切——我的虔诚、我的热心、我引以为傲的一切——不仅毫无价值，而且**方向完全相反**。我以为自己在事奉神，其实我在**逼迫神**。

我是全世界最虔诚的罪人。

## 三天的黑暗

那道光之后，我的眼睛瞎了。

同行的人领着我进了大马色城。三天三夜，我什么也看不见，也不吃也不喝。

你们知道那三天我在想什么吗？

我想起了司提反的脸。我想起了我亲手抓进监牢的那些人。我想起了有些人因为我的逼迫而死。他们的名字，每一个，都在我脑海里。

**我逼迫的是耶稣。每一个信徒，都是祂身体的一部分。我打他们，就是打祂。我捆绑他们，就是捆绑祂。**

三天的黑暗里，我终于明白了一件事：**律法能让人知罪，但律法不能救人。** 我一辈子都在守律法，但律法只是让我看到自己有多绝望。"所以凡有血气的，没有一个因行律法能在神面前称义，因为律法本是叫人知罪。"（罗马书 3:20）

我也明白了另一件事：**祂没有击杀我。**

那道光完全可以把我烧成灰。以我所做的一切，我配得灭亡一千次。但祂没有。**祂问我"你为什么逼迫我"——这不是审判的宣告，这是父亲对浪子的追问。**

## 亚拿尼亚来了

第三天，一个叫亚拿尼亚的门徒来了。

后来我才知道，主在异象中对他说：去直街，找一个叫扫罗的大数人。亚拿尼亚说："主啊，我听见许多人说，这人怎样在耶路撒冷多多苦害你的圣徒。"（使徒行传 9:13）

弟兄姐妹，你们想想——如果有人让你去找一个专门抓基督徒的人，给他按手祷告，你去不去？

**亚拿尼亚去了。**

他进来，把手按在我身上，说了一句让我泪流满面的话：

**"兄弟扫罗。"**

兄弟。他叫我**兄弟**。

这个我来大马色要抓的人，叫我兄弟。

"在你来的路上向你显现的主，就是耶稣，打发我来，叫你能看见，又被圣灵充满。"（使徒行传 9:17）

就在那一刻，好像有鳞片从我眼睛上掉下来。我又能看见了。但我看到的不再是从前的世界——我看到了一个全新的世界。**瞎眼的时候以为自己看得见，看见了才知道自己从前是瞎的。**

我起来，受了洗。

## 恩典中的恩典

弟兄姐妹，如果说整本圣经中有一个人最没有资格被神使用，那就是我。

我不是像彼得那样因为害怕而不认主——彼得至少还爱主。**我是主动地、系统地、狂热地逼迫基督的教会。** 我手上沾着圣徒的血。

但祂拣选了我。

不是因为我有什么好。不是因为我的学问——虽然我确实在迦玛列门下受过最好的训练。不是因为我的热心——那份热心差点让我成为永远的仇敌。

**祂拣选我，恰恰是要在我这"罪人中的罪魁"身上，显明祂一切的忍耐。**

"基督耶稣降世，为要拯救罪人。这话是可信的，是十分可佩服的。在罪人中我是个罪魁。然而，我蒙了怜悯，是因耶稣基督要在我这罪魁身上显明祂一切的忍耐，给后来信祂得永生的人作榜样。"（提摩太前书 1:15-16）

你们听到了吗？**给后来的人作榜样。** 如果连扫罗都能被赦免，连逼迫教会的人都能成为使徒——**那么没有人是恩典够不到的。**

## 我从前以为有益的

腓立比书里我写过这么一段话。现在让我再说一遍：

"只是我先前以为与我有益的，我现在因基督都当作有损的。不但如此，我也将万事当作有损的，因我以认识我主基督耶稣为至宝。我为他已经丢弃万事，看作粪土，为要得着基督。"（腓立比书 3:7-8）

**粪土。**

我的法利赛人身份——粪土。我在迦玛列门下的学历——粪土。我无可指摘的律法记录——粪土。不是因为这些东西本身是坏的，而是因为**当你用这些东西来代替基督的时候，它们就变成了拦阻你认识神的障碍。**

我从前以为自己站在光明里，其实我站在黑暗中。那道光把我打倒，让我瞎了眼——但讽刺的是，**瞎了眼之后我才真正"看见"了。**

## 致每一个"虔诚的逼迫者"

弟兄姐妹，如果你读到这里——

也许你不像我那样逼迫教会。但也许你和我有一个共同的问题：**你以为自己的义可以救自己。**

也许你是一个很好的人。你守规矩，做善事，从不害人。你的履历拿出来，"无可指摘"。但你心里有没有那种平安？那种被锁链中的人唱出来的平安？

如果没有——也许你和大马色路上的扫罗一样，需要被那道光击倒一次。

不要怕。**那道光不是来毁灭你的。那道光是来拯救你的。**

它会让你暂时看不见。它会把你所有的确信打碎。它会让你在黑暗中待上一阵子。但当鳞片从你眼睛上掉下来的时候，你会看到一个全新的世界——一个不需要你靠自己的义站立的世界，一个**被恩典托住的世界。**

"你为什么逼迫我？"——也许今天，这个问题不是问你在逼迫谁，而是在问：**你在抗拒什么？**

你在抗拒承认自己不行吗？你在抗拒放下你的骄傲吗？你在抗拒那个比你所有的确信都更大的爱吗？

放下吧。像我一样，仆倒在那道光面前。

然后你会听到祂叫你的名字。

*"然而，我蒙了怜悯，是因耶稣基督要在我这罪魁身上显明祂一切的忍耐，给后来信祂得永生的人作榜样。"（提摩太前书 1:16）*

*愿那在大马色路上光照我的主，也光照你的心——你的弟兄，保罗*`,
    content_en: `## I Am Saul — The Most Devout Persecutor

My name is Saul, of the tribe of Benjamin, a Pharisee among Pharisees.

If you ask me who I was before, I can lay my credentials before you: "Circumcised on the eighth day, of the people of Israel, of the tribe of Benjamin, a Hebrew of Hebrews; as to the law, a Pharisee; as to zeal, a persecutor of the church; as to righteousness under the law, blameless." (Philippians 3:5-6)

Did you hear that? **Blameless.** I am not boasting. In those years studying under Gamaliel, I memorized the entire Torah, never broke a single commandment on the Sabbath, tithed down to the mint, dill, and cumin. Among the Pharisees, no one was more serious than I was.

But being serious was not enough. I wanted to **burn with zeal for God.**

When I first heard that a group of people were proclaiming a crucified Nazarene as the Messiah, my blood boiled. **The Messiah hung on a tree?** The Torah clearly states: "a hanged man is cursed by God" (Deuteronomy 21:23). These people were not preaching good news — they were blaspheming God!

So when the Sanhedrin decided to stamp out this heresy, I was the first to volunteer.

The day Stephen was stoned to death, I was there. I did not throw the stones myself — I guarded the garments of those who did. I watched him kneel. I watched the stones strike him one by one. His face was covered in blood, but his face —

Brothers and sisters, I do not like to admit this, but that day I saw a face I have never been able to forget. **His face was like the face of an angel.** As he was dying, he said, "Lord, do not hold this sin against them!" (Acts 7:60)

A man being stoned to death was praying for the men killing him.

I pushed that thought down. I told myself: this is the devil's deception. The more something looks like an angel, the more dangerous it is.

So I persecuted even more furiously.

I went house to house. Men and women alike, I dragged them off to prison. I threatened them, demanding they deny that name. Some did deny it — I saw the shame and agony in their eyes. Some refused — I saw in their eyes a peace, a peace that I could never possess no matter how hard I tried.

**I hated that peace.** Because I did not have it.

I thought I did. I thought keeping the law and burning with zeal was peace. But every time I saw those I had arrested singing hymns of praise in chains, a voice inside me whispered: **They have something you do not.**

I pushed that voice down deeper.

## On the Road to Damascus

Jerusalem was not enough. I heard that there were followers of the Way in Damascus too, so I went to the high priest for letters of authority to bring them back in chains.

It was a long journey, about six days. The whole way I was planning how I would interrogate them, how I would convict them. My heart was full of righteous anger — or so I thought.

**Then the light came.**

Brothers and sisters, I cannot describe that light with words. The noonday sun was already blazing, but that light was brighter than the sun. It did not come from one direction — it **shone all around me**. As if the entire sky had torn open and all its light poured down.

I fell to the ground.

Then I heard the voice:

**"Saul, Saul, why are you persecuting me?"**

He called my name. Twice.

I lay on the ground, trembling. I asked, "Who are you, Lord?"

I already knew. The instant that light struck me, all my certainties shattered — my knowledge of the law, my Pharisee credentials, my zeal, my righteousness — all of it crumbled to dust. **Because if this light was from heaven, if this voice was the voice of God, then I had not been persecuting heretics. I had been —**

**"I am Jesus, whom you are persecuting."**

The crucified Nazarene. The one I had declared cursed by God. The one whose name I had fought with all my strength to wipe from the earth.

**He is Lord.**

Brothers and sisters, can you imagine what I felt in that moment? It was not an epiphany. It was the **ground giving way beneath me**. Everything I had ever done — my devotion, my zeal, everything I took pride in — was not merely worthless. It was aimed in **exactly the wrong direction**. I thought I was serving God. In truth, I was **persecuting God.**

I was the most devout sinner in the world.

## Three Days of Darkness

After the light, my eyes were blind.

My companions led me by the hand into Damascus. For three days and three nights I could see nothing. I neither ate nor drank.

Do you know what I was thinking during those three days?

I thought of Stephen's face. I thought of every person I had dragged to prison with my own hands. I thought of those who had died because of my persecution. Their names — every one — echoed in my mind.

**I had been persecuting Jesus. Every believer was part of His body. When I struck them, I struck Him. When I bound them, I bound Him.**

In three days of darkness, I finally understood one thing: **the law can reveal sin, but the law cannot save.** I had spent my whole life keeping the law, and all it had done was show me how hopeless I truly was. "For by works of the law no human being will be justified in his sight" (Romans 3:20).

I also understood something else: **He did not strike me dead.**

That light could have reduced me to ash. After all I had done, I deserved destruction a thousand times over. But He did not. **He asked me "Why are you persecuting me?" — that was not a sentence of judgment. It was a father's question to a prodigal son.**

## Ananias Came

On the third day, a disciple named Ananias came.

I later learned that the Lord had told him in a vision: Go to the street called Straight, and find a man from Tarsus named Saul. Ananias said, "Lord, I have heard from many about this man, how much evil he has done to your saints at Jerusalem" (Acts 9:13).

Brothers and sisters, think about it — if someone told you to go find a man who specialized in arresting Christians and lay your hands on him in prayer, would you go?

**Ananias went.**

He came in, placed his hands on me, and said a sentence that brought me to tears:

**"Brother Saul."**

Brother. He called me **brother.**

This man — the very man I had come to Damascus to arrest — called me brother.

"The Lord Jesus who appeared to you on the road by which you came has sent me so that you may regain your sight and be filled with the Holy Spirit" (Acts 9:17).

In that moment, something like scales fell from my eyes. I could see again. But what I saw was no longer the world I had known — I saw an entirely new world. **When I was blind, I thought I could see. Only when I could see did I realize I had been blind all along.**

I rose and was baptized.

## Grace Upon Grace

Brothers and sisters, if there is one person in all of Scripture least qualified to be used by God, it is I.

I am not like Peter, who denied the Lord out of fear — Peter at least loved the Lord. **I actively, systematically, and zealously persecuted the church of Christ.** My hands were stained with the blood of saints.

Yet He chose me.

Not because of any good in me. Not because of my learning — though I was indeed trained under the finest teacher, Gamaliel. Not because of my zeal — that very zeal nearly made me an eternal enemy.

**He chose me precisely to display all His patience in me, the foremost of sinners.**

"The saying is trustworthy and deserving of full acceptance, that Christ Jesus came into the world to save sinners, of whom I am the foremost. But I received mercy for this reason, that in me, as the foremost, Jesus Christ might display his perfect patience as an example to those who were to believe in him for eternal life" (1 Timothy 1:15-16).

Did you hear that? **As an example to those who would come after.** If even Saul could be forgiven, if even a persecutor of the church could become an apostle — **then no one is beyond the reach of grace.**

## What I Once Counted as Gain

In my letter to the Philippians, I wrote these words. Let me say them again now:

"But whatever gain I had, I counted as loss for the sake of Christ. Indeed, I count everything as loss because of the surpassing worth of knowing Christ Jesus my Lord. For his sake I have suffered the loss of all things and count them as rubbish, in order that I may gain Christ" (Philippians 3:7-8).

**Rubbish.**

My Pharisee credentials — rubbish. My education under Gamaliel — rubbish. My blameless record under the law — rubbish. Not because these things were bad in themselves, but because **when you use them as substitutes for Christ, they become the very barriers that keep you from knowing God.**

I once thought I stood in the light. In truth, I stood in darkness. That light knocked me down and blinded me — but the irony is, **only after I was blinded did I truly "see."**

## To Every "Devout Persecutor"

Brothers and sisters, if you are reading this —

Perhaps you do not persecute the church as I did. But perhaps you and I share a common problem: **you believe your own righteousness can save you.**

Perhaps you are a very good person. You follow the rules, do good deeds, never harm anyone. Your record, laid out for inspection, is "blameless." But do you have that peace in your heart? The peace that was sung by people in chains?

If not — perhaps, like Saul on the road to Damascus, you need to be struck down by that light.

Do not be afraid. **That light does not come to destroy you. It comes to save you.**

It will blind you for a time. It will shatter all your certainties. It will leave you sitting in darkness for a while. But when the scales fall from your eyes, you will see a brand new world — a world where you no longer need to stand on your own righteousness, a world **upheld entirely by grace.**

"Why are you persecuting me?" — perhaps today, the question is not about who you are persecuting, but about this: **What are you resisting?**

Are you resisting the admission that you cannot do it on your own? Are you resisting laying down your pride? Are you resisting a love greater than all your certainties?

Let go. Like me, fall down before that light.

And then you will hear Him call your name.

*"But I received mercy for this reason, that in me, as the foremost, Jesus Christ might display his perfect patience as an example to those who were to believe in him for eternal life." (1 Timothy 1:16)*

*May the Lord who shone His light on me on the Damascus road also shine His light into your heart — your brother, Paul*`,
  },
  {
    id: 'mary-magnificat',
    author: '马利亚',
    authorEn: 'Mary',
    authorAvatar: '💙',
    authorBio: '拿撒勒的童女，耶稣的母亲',
    authorBioEn: 'Virgin of Nazareth, mother of Jesus',
    title_zh: '我心尊主为大',
    title_en: 'My Soul Magnifies the Lord',
    date: '2026-04-11',
    category: 'testimony',
    scripture: '',
    scriptureText_zh: '',
    scriptureText_en: '',
    summary_zh: '',
    summary_en: '',
    tags: [],
    content_zh: `## 我是扫罗——最虔诚的逼迫者

我叫扫罗，便雅悯支派的人，法利赛人中的法利赛人。

你们若问我从前是什么人，我可以把我的履历摆在你们面前："我第八天受割礼；我是以色列族、便雅悯支派的人，是希伯来人所生的希伯来人。就律法说，我是法利赛人；就热心说，我是逼迫教会的；就律法上的义说，我是无可指摘的。"（腓立比书 3:5-6）

你们听清楚了吗？**无可指摘。** 不是我自夸。在迦玛列门下受教的那些年，我背下了整本妥拉，安息日从不违反一条诫命，十一奉献精确到薄荷、茴香、芹菜。法利赛人中间，没有人比我更认真。

但光认真还不够。我要**为神大发热心。**

当我第一次听说有一群人在传讲一个被钉十字架的拿撒勒人是弥赛亚的时候，我的血都沸腾了。**弥赛亚被挂在木头上？** 妥拉明明写着："被挂的人是在神面前受咒诅的"（申命记 21:23）。这些人不是在传福音——他们是在亵渎神！

所以当公会决定要清除这个异端的时候，我第一个站出来。

司提反被石头打死的那天，我就在那里。我没有亲手丢石头——我替那些丢石头的人看守衣裳。我看着他跪下来，看着石头一块一块砸在他身上。他满脸是血，但他的脸——

弟兄姐妹，我不愿意承认这一点，但那天我看到了一张我永远忘不掉的脸。**他的脸好像天使的脸。** 他在死的时候说："主啊，不要将这罪归于他们！"（使徒行传 7:60）

被石头打死的人在为打他的人祷告。

我当时把这念头压下去了。我告诉自己：这是魔鬼的迷惑。越是看起来像天使的，越危险。

所以我更加疯狂地逼迫。

我挨家挨户搜查。男人女人，我一概拉到监里。我威胁他们，要他们否认那个名字。有些人否认了——我看到他们眼中的羞耻和痛苦。有些人不肯——我看到他们眼中的平安，一种我用尽全力也无法拥有的平安。

**我恨那种平安。** 因为我心里没有。

我以为我有。我以为遵行律法、大发热心就是平安。但每次看到那些被我抓起来的人，他们在锁链中唱诗赞美的时候，我心里就有一个声音说：**他们有的东西，你没有。**

我把那声音压得更深。

## 去大马色的路上

耶路撒冷还不够。我听说大马色也有信这道的人，就去大祭司那里要了文书，要把那里的人也捆绑回来。

那是一段很长的路，大约六天的行程。一路上我都在想着到了之后怎么审讯、怎么定罪。我的心里充满了义怒——至少我以为那是义怒。

**然后那道光来了。**

弟兄姐妹，我无法用语言描述那道光。中午的日头已经够亮了，但那道光比日头还亮。不是从某个方向照来的——是**四面照着我**。好像整个天空都裂开了，所有的光都倾倒下来。

我仆倒在地。

然后我听到了那个声音：

**"扫罗，扫罗，你为什么逼迫我？"**

祂叫了我的名字。叫了两遍。

我趴在地上，浑身发抖。我问："主啊，你是谁？"

我其实已经知道了。在那道光照到我的一瞬间，我所有的确信都碎了——我的律法知识、我的法利赛人身份、我的热心、我的义——全部碎成了渣。**因为如果这道光是从天上来的，如果这个声音是神的声音，那么我逼迫的不是异端，而是——**

**"我就是你所逼迫的耶稣。"**

那个被钉十字架的拿撒勒人。那个我认定是被神咒诅的人。那个我拼了命要从地上抹去祂名字的人。

**祂就是主。**

弟兄姐妹，你们能想象那一刻我的感受吗？那不是恍然大悟，那是**天塌地陷**。我这一生所做的一切——我的虔诚、我的热心、我引以为傲的一切——不仅毫无价值，而且**方向完全相反**。我以为自己在事奉神，其实我在**逼迫神**。

我是全世界最虔诚的罪人。

## 三天的黑暗

那道光之后，我的眼睛瞎了。

同行的人领着我进了大马色城。三天三夜，我什么也看不见，也不吃也不喝。

你们知道那三天我在想什么吗？

我想起了司提反的脸。我想起了我亲手抓进监牢的那些人。我想起了有些人因为我的逼迫而死。他们的名字，每一个，都在我脑海里。

**我逼迫的是耶稣。每一个信徒，都是祂身体的一部分。我打他们，就是打祂。我捆绑他们，就是捆绑祂。**

三天的黑暗里，我终于明白了一件事：**律法能让人知罪，但律法不能救人。** 我一辈子都在守律法，但律法只是让我看到自己有多绝望。"所以凡有血气的，没有一个因行律法能在神面前称义，因为律法本是叫人知罪。"（罗马书 3:20）

我也明白了另一件事：**祂没有击杀我。**

那道光完全可以把我烧成灰。以我所做的一切，我配得灭亡一千次。但祂没有。**祂问我"你为什么逼迫我"——这不是审判的宣告，这是父亲对浪子的追问。**

## 亚拿尼亚来了

第三天，一个叫亚拿尼亚的门徒来了。

后来我才知道，主在异象中对他说：去直街，找一个叫扫罗的大数人。亚拿尼亚说："主啊，我听见许多人说，这人怎样在耶路撒冷多多苦害你的圣徒。"（使徒行传 9:13）

弟兄姐妹，你们想想——如果有人让你去找一个专门抓基督徒的人，给他按手祷告，你去不去？

**亚拿尼亚去了。**

他进来，把手按在我身上，说了一句让我泪流满面的话：

**"兄弟扫罗。"**

兄弟。他叫我**兄弟**。

这个我来大马色要抓的人，叫我兄弟。

"在你来的路上向你显现的主，就是耶稣，打发我来，叫你能看见，又被圣灵充满。"（使徒行传 9:17）

就在那一刻，好像有鳞片从我眼睛上掉下来。我又能看见了。但我看到的不再是从前的世界——我看到了一个全新的世界。**瞎眼的时候以为自己看得见，看见了才知道自己从前是瞎的。**

我起来，受了洗。

## 恩典中的恩典

弟兄姐妹，如果说整本圣经中有一个人最没有资格被神使用，那就是我。

我不是像彼得那样因为害怕而不认主——彼得至少还爱主。**我是主动地、系统地、狂热地逼迫基督的教会。** 我手上沾着圣徒的血。

但祂拣选了我。

不是因为我有什么好。不是因为我的学问——虽然我确实在迦玛列门下受过最好的训练。不是因为我的热心——那份热心差点让我成为永远的仇敌。

**祂拣选我，恰恰是要在我这"罪人中的罪魁"身上，显明祂一切的忍耐。**

"基督耶稣降世，为要拯救罪人。这话是可信的，是十分可佩服的。在罪人中我是个罪魁。然而，我蒙了怜悯，是因耶稣基督要在我这罪魁身上显明祂一切的忍耐，给后来信祂得永生的人作榜样。"（提摩太前书 1:15-16）

你们听到了吗？**给后来的人作榜样。** 如果连扫罗都能被赦免，连逼迫教会的人都能成为使徒——**那么没有人是恩典够不到的。**

## 我从前以为有益的

腓立比书里我写过这么一段话。现在让我再说一遍：

"只是我先前以为与我有益的，我现在因基督都当作有损的。不但如此，我也将万事当作有损的，因我以认识我主基督耶稣为至宝。我为他已经丢弃万事，看作粪土，为要得着基督。"（腓立比书 3:7-8）

**粪土。**

我的法利赛人身份——粪土。我在迦玛列门下的学历——粪土。我无可指摘的律法记录——粪土。不是因为这些东西本身是坏的，而是因为**当你用这些东西来代替基督的时候，它们就变成了拦阻你认识神的障碍。**

我从前以为自己站在光明里，其实我站在黑暗中。那道光把我打倒，让我瞎了眼——但讽刺的是，**瞎了眼之后我才真正"看见"了。**

## 致每一个"虔诚的逼迫者"

弟兄姐妹，如果你读到这里——

也许你不像我那样逼迫教会。但也许你和我有一个共同的问题：**你以为自己的义可以救自己。**

也许你是一个很好的人。你守规矩，做善事，从不害人。你的履历拿出来，"无可指摘"。但你心里有没有那种平安？那种被锁链中的人唱出来的平安？

如果没有——也许你和大马色路上的扫罗一样，需要被那道光击倒一次。

不要怕。**那道光不是来毁灭你的。那道光是来拯救你的。**

它会让你暂时看不见。它会把你所有的确信打碎。它会让你在黑暗中待上一阵子。但当鳞片从你眼睛上掉下来的时候，你会看到一个全新的世界——一个不需要你靠自己的义站立的世界，一个**被恩典托住的世界。**

"你为什么逼迫我？"——也许今天，这个问题不是问你在逼迫谁，而是在问：**你在抗拒什么？**

你在抗拒承认自己不行吗？你在抗拒放下你的骄傲吗？你在抗拒那个比你所有的确信都更大的爱吗？

放下吧。像我一样，仆倒在那道光面前。

然后你会听到祂叫你的名字。

*"然而，我蒙了怜悯，是因耶稣基督要在我这罪魁身上显明祂一切的忍耐，给后来信祂得永生的人作榜样。"（提摩太前书 1:16）*

*愿那在大马色路上光照我的主，也光照你的心——你的弟兄，保罗*`,
    content_en: `## I Am Saul — The Most Devout Persecutor

My name is Saul, of the tribe of Benjamin, a Pharisee among Pharisees.

If you ask me who I was before, I can lay my credentials before you: "Circumcised on the eighth day, of the people of Israel, of the tribe of Benjamin, a Hebrew of Hebrews; as to the law, a Pharisee; as to zeal, a persecutor of the church; as to righteousness under the law, blameless." (Philippians 3:5-6)

Did you hear that? **Blameless.** I am not boasting. In those years studying under Gamaliel, I memorized the entire Torah, never broke a single commandment on the Sabbath, tithed down to the mint, dill, and cumin. Among the Pharisees, no one was more serious than I was.

But being serious was not enough. I wanted to **burn with zeal for God.**

When I first heard that a group of people were proclaiming a crucified Nazarene as the Messiah, my blood boiled. **The Messiah hung on a tree?** The Torah clearly states: "a hanged man is cursed by God" (Deuteronomy 21:23). These people were not preaching good news — they were blaspheming God!

So when the Sanhedrin decided to stamp out this heresy, I was the first to volunteer.

The day Stephen was stoned to death, I was there. I did not throw the stones myself — I guarded the garments of those who did. I watched him kneel. I watched the stones strike him one by one. His face was covered in blood, but his face —

Brothers and sisters, I do not like to admit this, but that day I saw a face I have never been able to forget. **His face was like the face of an angel.** As he was dying, he said, "Lord, do not hold this sin against them!" (Acts 7:60)

A man being stoned to death was praying for the men killing him.

I pushed that thought down. I told myself: this is the devil's deception. The more something looks like an angel, the more dangerous it is.

So I persecuted even more furiously.

I went house to house. Men and women alike, I dragged them off to prison. I threatened them, demanding they deny that name. Some did deny it — I saw the shame and agony in their eyes. Some refused — I saw in their eyes a peace, a peace that I could never possess no matter how hard I tried.

**I hated that peace.** Because I did not have it.

I thought I did. I thought keeping the law and burning with zeal was peace. But every time I saw those I had arrested singing hymns of praise in chains, a voice inside me whispered: **They have something you do not.**

I pushed that voice down deeper.

## On the Road to Damascus

Jerusalem was not enough. I heard that there were followers of the Way in Damascus too, so I went to the high priest for letters of authority to bring them back in chains.

It was a long journey, about six days. The whole way I was planning how I would interrogate them, how I would convict them. My heart was full of righteous anger — or so I thought.

**Then the light came.**

Brothers and sisters, I cannot describe that light with words. The noonday sun was already blazing, but that light was brighter than the sun. It did not come from one direction — it **shone all around me**. As if the entire sky had torn open and all its light poured down.

I fell to the ground.

Then I heard the voice:

**"Saul, Saul, why are you persecuting me?"**

He called my name. Twice.

I lay on the ground, trembling. I asked, "Who are you, Lord?"

I already knew. The instant that light struck me, all my certainties shattered — my knowledge of the law, my Pharisee credentials, my zeal, my righteousness — all of it crumbled to dust. **Because if this light was from heaven, if this voice was the voice of God, then I had not been persecuting heretics. I had been —**

**"I am Jesus, whom you are persecuting."**

The crucified Nazarene. The one I had declared cursed by God. The one whose name I had fought with all my strength to wipe from the earth.

**He is Lord.**

Brothers and sisters, can you imagine what I felt in that moment? It was not an epiphany. It was the **ground giving way beneath me**. Everything I had ever done — my devotion, my zeal, everything I took pride in — was not merely worthless. It was aimed in **exactly the wrong direction**. I thought I was serving God. In truth, I was **persecuting God.**

I was the most devout sinner in the world.

## Three Days of Darkness

After the light, my eyes were blind.

My companions led me by the hand into Damascus. For three days and three nights I could see nothing. I neither ate nor drank.

Do you know what I was thinking during those three days?

I thought of Stephen's face. I thought of every person I had dragged to prison with my own hands. I thought of those who had died because of my persecution. Their names — every one — echoed in my mind.

**I had been persecuting Jesus. Every believer was part of His body. When I struck them, I struck Him. When I bound them, I bound Him.**

In three days of darkness, I finally understood one thing: **the law can reveal sin, but the law cannot save.** I had spent my whole life keeping the law, and all it had done was show me how hopeless I truly was. "For by works of the law no human being will be justified in his sight" (Romans 3:20).

I also understood something else: **He did not strike me dead.**

That light could have reduced me to ash. After all I had done, I deserved destruction a thousand times over. But He did not. **He asked me "Why are you persecuting me?" — that was not a sentence of judgment. It was a father's question to a prodigal son.**

## Ananias Came

On the third day, a disciple named Ananias came.

I later learned that the Lord had told him in a vision: Go to the street called Straight, and find a man from Tarsus named Saul. Ananias said, "Lord, I have heard from many about this man, how much evil he has done to your saints at Jerusalem" (Acts 9:13).

Brothers and sisters, think about it — if someone told you to go find a man who specialized in arresting Christians and lay your hands on him in prayer, would you go?

**Ananias went.**

He came in, placed his hands on me, and said a sentence that brought me to tears:

**"Brother Saul."**

Brother. He called me **brother.**

This man — the very man I had come to Damascus to arrest — called me brother.

"The Lord Jesus who appeared to you on the road by which you came has sent me so that you may regain your sight and be filled with the Holy Spirit" (Acts 9:17).

In that moment, something like scales fell from my eyes. I could see again. But what I saw was no longer the world I had known — I saw an entirely new world. **When I was blind, I thought I could see. Only when I could see did I realize I had been blind all along.**

I rose and was baptized.

## Grace Upon Grace

Brothers and sisters, if there is one person in all of Scripture least qualified to be used by God, it is I.

I am not like Peter, who denied the Lord out of fear — Peter at least loved the Lord. **I actively, systematically, and zealously persecuted the church of Christ.** My hands were stained with the blood of saints.

Yet He chose me.

Not because of any good in me. Not because of my learning — though I was indeed trained under the finest teacher, Gamaliel. Not because of my zeal — that very zeal nearly made me an eternal enemy.

**He chose me precisely to display all His patience in me, the foremost of sinners.**

"The saying is trustworthy and deserving of full acceptance, that Christ Jesus came into the world to save sinners, of whom I am the foremost. But I received mercy for this reason, that in me, as the foremost, Jesus Christ might display his perfect patience as an example to those who were to believe in him for eternal life" (1 Timothy 1:15-16).

Did you hear that? **As an example to those who would come after.** If even Saul could be forgiven, if even a persecutor of the church could become an apostle — **then no one is beyond the reach of grace.**

## What I Once Counted as Gain

In my letter to the Philippians, I wrote these words. Let me say them again now:

"But whatever gain I had, I counted as loss for the sake of Christ. Indeed, I count everything as loss because of the surpassing worth of knowing Christ Jesus my Lord. For his sake I have suffered the loss of all things and count them as rubbish, in order that I may gain Christ" (Philippians 3:7-8).

**Rubbish.**

My Pharisee credentials — rubbish. My education under Gamaliel — rubbish. My blameless record under the law — rubbish. Not because these things were bad in themselves, but because **when you use them as substitutes for Christ, they become the very barriers that keep you from knowing God.**

I once thought I stood in the light. In truth, I stood in darkness. That light knocked me down and blinded me — but the irony is, **only after I was blinded did I truly "see."**

## To Every "Devout Persecutor"

Brothers and sisters, if you are reading this —

Perhaps you do not persecute the church as I did. But perhaps you and I share a common problem: **you believe your own righteousness can save you.**

Perhaps you are a very good person. You follow the rules, do good deeds, never harm anyone. Your record, laid out for inspection, is "blameless." But do you have that peace in your heart? The peace that was sung by people in chains?

If not — perhaps, like Saul on the road to Damascus, you need to be struck down by that light.

Do not be afraid. **That light does not come to destroy you. It comes to save you.**

It will blind you for a time. It will shatter all your certainties. It will leave you sitting in darkness for a while. But when the scales fall from your eyes, you will see a brand new world — a world where you no longer need to stand on your own righteousness, a world **upheld entirely by grace.**

"Why are you persecuting me?" — perhaps today, the question is not about who you are persecuting, but about this: **What are you resisting?**

Are you resisting the admission that you cannot do it on your own? Are you resisting laying down your pride? Are you resisting a love greater than all your certainties?

Let go. Like me, fall down before that light.

And then you will hear Him call your name.

*"But I received mercy for this reason, that in me, as the foremost, Jesus Christ might display his perfect patience as an example to those who were to believe in him for eternal life." (1 Timothy 1:16)*

*May the Lord who shone His light on me on the Damascus road also shine His light into your heart — your brother, Paul*`,
  },
  {
    id: 'thomas-doubt',
    author: '多马',
    authorEn: 'Thomas',
    authorAvatar: '🤚',
    authorBio: '十二使徒之一，人称"多疑的多马"',
    authorBioEn: 'One of the Twelve, known as "Doubting Thomas"',
    title_zh: '我的主！我的神！',
    title_en: 'My Lord and My God!',
    date: '2026-04-18',
    category: 'testimony',
    scripture: '',
    scriptureText_zh: '',
    scriptureText_en: '',
    summary_zh: '',
    summary_en: '',
    tags: [],
    content_zh: `## 我是扫罗——最虔诚的逼迫者

我叫扫罗，便雅悯支派的人，法利赛人中的法利赛人。

你们若问我从前是什么人，我可以把我的履历摆在你们面前："我第八天受割礼；我是以色列族、便雅悯支派的人，是希伯来人所生的希伯来人。就律法说，我是法利赛人；就热心说，我是逼迫教会的；就律法上的义说，我是无可指摘的。"（腓立比书 3:5-6）

你们听清楚了吗？**无可指摘。** 不是我自夸。在迦玛列门下受教的那些年，我背下了整本妥拉，安息日从不违反一条诫命，十一奉献精确到薄荷、茴香、芹菜。法利赛人中间，没有人比我更认真。

但光认真还不够。我要**为神大发热心。**

当我第一次听说有一群人在传讲一个被钉十字架的拿撒勒人是弥赛亚的时候，我的血都沸腾了。**弥赛亚被挂在木头上？** 妥拉明明写着："被挂的人是在神面前受咒诅的"（申命记 21:23）。这些人不是在传福音——他们是在亵渎神！

所以当公会决定要清除这个异端的时候，我第一个站出来。

司提反被石头打死的那天，我就在那里。我没有亲手丢石头——我替那些丢石头的人看守衣裳。我看着他跪下来，看着石头一块一块砸在他身上。他满脸是血，但他的脸——

弟兄姐妹，我不愿意承认这一点，但那天我看到了一张我永远忘不掉的脸。**他的脸好像天使的脸。** 他在死的时候说："主啊，不要将这罪归于他们！"（使徒行传 7:60）

被石头打死的人在为打他的人祷告。

我当时把这念头压下去了。我告诉自己：这是魔鬼的迷惑。越是看起来像天使的，越危险。

所以我更加疯狂地逼迫。

我挨家挨户搜查。男人女人，我一概拉到监里。我威胁他们，要他们否认那个名字。有些人否认了——我看到他们眼中的羞耻和痛苦。有些人不肯——我看到他们眼中的平安，一种我用尽全力也无法拥有的平安。

**我恨那种平安。** 因为我心里没有。

我以为我有。我以为遵行律法、大发热心就是平安。但每次看到那些被我抓起来的人，他们在锁链中唱诗赞美的时候，我心里就有一个声音说：**他们有的东西，你没有。**

我把那声音压得更深。

## 去大马色的路上

耶路撒冷还不够。我听说大马色也有信这道的人，就去大祭司那里要了文书，要把那里的人也捆绑回来。

那是一段很长的路，大约六天的行程。一路上我都在想着到了之后怎么审讯、怎么定罪。我的心里充满了义怒——至少我以为那是义怒。

**然后那道光来了。**

弟兄姐妹，我无法用语言描述那道光。中午的日头已经够亮了，但那道光比日头还亮。不是从某个方向照来的——是**四面照着我**。好像整个天空都裂开了，所有的光都倾倒下来。

我仆倒在地。

然后我听到了那个声音：

**"扫罗，扫罗，你为什么逼迫我？"**

祂叫了我的名字。叫了两遍。

我趴在地上，浑身发抖。我问："主啊，你是谁？"

我其实已经知道了。在那道光照到我的一瞬间，我所有的确信都碎了——我的律法知识、我的法利赛人身份、我的热心、我的义——全部碎成了渣。**因为如果这道光是从天上来的，如果这个声音是神的声音，那么我逼迫的不是异端，而是——**

**"我就是你所逼迫的耶稣。"**

那个被钉十字架的拿撒勒人。那个我认定是被神咒诅的人。那个我拼了命要从地上抹去祂名字的人。

**祂就是主。**

弟兄姐妹，你们能想象那一刻我的感受吗？那不是恍然大悟，那是**天塌地陷**。我这一生所做的一切——我的虔诚、我的热心、我引以为傲的一切——不仅毫无价值，而且**方向完全相反**。我以为自己在事奉神，其实我在**逼迫神**。

我是全世界最虔诚的罪人。

## 三天的黑暗

那道光之后，我的眼睛瞎了。

同行的人领着我进了大马色城。三天三夜，我什么也看不见，也不吃也不喝。

你们知道那三天我在想什么吗？

我想起了司提反的脸。我想起了我亲手抓进监牢的那些人。我想起了有些人因为我的逼迫而死。他们的名字，每一个，都在我脑海里。

**我逼迫的是耶稣。每一个信徒，都是祂身体的一部分。我打他们，就是打祂。我捆绑他们，就是捆绑祂。**

三天的黑暗里，我终于明白了一件事：**律法能让人知罪，但律法不能救人。** 我一辈子都在守律法，但律法只是让我看到自己有多绝望。"所以凡有血气的，没有一个因行律法能在神面前称义，因为律法本是叫人知罪。"（罗马书 3:20）

我也明白了另一件事：**祂没有击杀我。**

那道光完全可以把我烧成灰。以我所做的一切，我配得灭亡一千次。但祂没有。**祂问我"你为什么逼迫我"——这不是审判的宣告，这是父亲对浪子的追问。**

## 亚拿尼亚来了

第三天，一个叫亚拿尼亚的门徒来了。

后来我才知道，主在异象中对他说：去直街，找一个叫扫罗的大数人。亚拿尼亚说："主啊，我听见许多人说，这人怎样在耶路撒冷多多苦害你的圣徒。"（使徒行传 9:13）

弟兄姐妹，你们想想——如果有人让你去找一个专门抓基督徒的人，给他按手祷告，你去不去？

**亚拿尼亚去了。**

他进来，把手按在我身上，说了一句让我泪流满面的话：

**"兄弟扫罗。"**

兄弟。他叫我**兄弟**。

这个我来大马色要抓的人，叫我兄弟。

"在你来的路上向你显现的主，就是耶稣，打发我来，叫你能看见，又被圣灵充满。"（使徒行传 9:17）

就在那一刻，好像有鳞片从我眼睛上掉下来。我又能看见了。但我看到的不再是从前的世界——我看到了一个全新的世界。**瞎眼的时候以为自己看得见，看见了才知道自己从前是瞎的。**

我起来，受了洗。

## 恩典中的恩典

弟兄姐妹，如果说整本圣经中有一个人最没有资格被神使用，那就是我。

我不是像彼得那样因为害怕而不认主——彼得至少还爱主。**我是主动地、系统地、狂热地逼迫基督的教会。** 我手上沾着圣徒的血。

但祂拣选了我。

不是因为我有什么好。不是因为我的学问——虽然我确实在迦玛列门下受过最好的训练。不是因为我的热心——那份热心差点让我成为永远的仇敌。

**祂拣选我，恰恰是要在我这"罪人中的罪魁"身上，显明祂一切的忍耐。**

"基督耶稣降世，为要拯救罪人。这话是可信的，是十分可佩服的。在罪人中我是个罪魁。然而，我蒙了怜悯，是因耶稣基督要在我这罪魁身上显明祂一切的忍耐，给后来信祂得永生的人作榜样。"（提摩太前书 1:15-16）

你们听到了吗？**给后来的人作榜样。** 如果连扫罗都能被赦免，连逼迫教会的人都能成为使徒——**那么没有人是恩典够不到的。**

## 我从前以为有益的

腓立比书里我写过这么一段话。现在让我再说一遍：

"只是我先前以为与我有益的，我现在因基督都当作有损的。不但如此，我也将万事当作有损的，因我以认识我主基督耶稣为至宝。我为他已经丢弃万事，看作粪土，为要得着基督。"（腓立比书 3:7-8）

**粪土。**

我的法利赛人身份——粪土。我在迦玛列门下的学历——粪土。我无可指摘的律法记录——粪土。不是因为这些东西本身是坏的，而是因为**当你用这些东西来代替基督的时候，它们就变成了拦阻你认识神的障碍。**

我从前以为自己站在光明里，其实我站在黑暗中。那道光把我打倒，让我瞎了眼——但讽刺的是，**瞎了眼之后我才真正"看见"了。**

## 致每一个"虔诚的逼迫者"

弟兄姐妹，如果你读到这里——

也许你不像我那样逼迫教会。但也许你和我有一个共同的问题：**你以为自己的义可以救自己。**

也许你是一个很好的人。你守规矩，做善事，从不害人。你的履历拿出来，"无可指摘"。但你心里有没有那种平安？那种被锁链中的人唱出来的平安？

如果没有——也许你和大马色路上的扫罗一样，需要被那道光击倒一次。

不要怕。**那道光不是来毁灭你的。那道光是来拯救你的。**

它会让你暂时看不见。它会把你所有的确信打碎。它会让你在黑暗中待上一阵子。但当鳞片从你眼睛上掉下来的时候，你会看到一个全新的世界——一个不需要你靠自己的义站立的世界，一个**被恩典托住的世界。**

"你为什么逼迫我？"——也许今天，这个问题不是问你在逼迫谁，而是在问：**你在抗拒什么？**

你在抗拒承认自己不行吗？你在抗拒放下你的骄傲吗？你在抗拒那个比你所有的确信都更大的爱吗？

放下吧。像我一样，仆倒在那道光面前。

然后你会听到祂叫你的名字。

*"然而，我蒙了怜悯，是因耶稣基督要在我这罪魁身上显明祂一切的忍耐，给后来信祂得永生的人作榜样。"（提摩太前书 1:16）*

*愿那在大马色路上光照我的主，也光照你的心——你的弟兄，保罗*`,
    content_en: `## I Am Saul — The Most Devout Persecutor

My name is Saul, of the tribe of Benjamin, a Pharisee among Pharisees.

If you ask me who I was before, I can lay my credentials before you: "Circumcised on the eighth day, of the people of Israel, of the tribe of Benjamin, a Hebrew of Hebrews; as to the law, a Pharisee; as to zeal, a persecutor of the church; as to righteousness under the law, blameless." (Philippians 3:5-6)

Did you hear that? **Blameless.** I am not boasting. In those years studying under Gamaliel, I memorized the entire Torah, never broke a single commandment on the Sabbath, tithed down to the mint, dill, and cumin. Among the Pharisees, no one was more serious than I was.

But being serious was not enough. I wanted to **burn with zeal for God.**

When I first heard that a group of people were proclaiming a crucified Nazarene as the Messiah, my blood boiled. **The Messiah hung on a tree?** The Torah clearly states: "a hanged man is cursed by God" (Deuteronomy 21:23). These people were not preaching good news — they were blaspheming God!

So when the Sanhedrin decided to stamp out this heresy, I was the first to volunteer.

The day Stephen was stoned to death, I was there. I did not throw the stones myself — I guarded the garments of those who did. I watched him kneel. I watched the stones strike him one by one. His face was covered in blood, but his face —

Brothers and sisters, I do not like to admit this, but that day I saw a face I have never been able to forget. **His face was like the face of an angel.** As he was dying, he said, "Lord, do not hold this sin against them!" (Acts 7:60)

A man being stoned to death was praying for the men killing him.

I pushed that thought down. I told myself: this is the devil's deception. The more something looks like an angel, the more dangerous it is.

So I persecuted even more furiously.

I went house to house. Men and women alike, I dragged them off to prison. I threatened them, demanding they deny that name. Some did deny it — I saw the shame and agony in their eyes. Some refused — I saw in their eyes a peace, a peace that I could never possess no matter how hard I tried.

**I hated that peace.** Because I did not have it.

I thought I did. I thought keeping the law and burning with zeal was peace. But every time I saw those I had arrested singing hymns of praise in chains, a voice inside me whispered: **They have something you do not.**

I pushed that voice down deeper.

## On the Road to Damascus

Jerusalem was not enough. I heard that there were followers of the Way in Damascus too, so I went to the high priest for letters of authority to bring them back in chains.

It was a long journey, about six days. The whole way I was planning how I would interrogate them, how I would convict them. My heart was full of righteous anger — or so I thought.

**Then the light came.**

Brothers and sisters, I cannot describe that light with words. The noonday sun was already blazing, but that light was brighter than the sun. It did not come from one direction — it **shone all around me**. As if the entire sky had torn open and all its light poured down.

I fell to the ground.

Then I heard the voice:

**"Saul, Saul, why are you persecuting me?"**

He called my name. Twice.

I lay on the ground, trembling. I asked, "Who are you, Lord?"

I already knew. The instant that light struck me, all my certainties shattered — my knowledge of the law, my Pharisee credentials, my zeal, my righteousness — all of it crumbled to dust. **Because if this light was from heaven, if this voice was the voice of God, then I had not been persecuting heretics. I had been —**

**"I am Jesus, whom you are persecuting."**

The crucified Nazarene. The one I had declared cursed by God. The one whose name I had fought with all my strength to wipe from the earth.

**He is Lord.**

Brothers and sisters, can you imagine what I felt in that moment? It was not an epiphany. It was the **ground giving way beneath me**. Everything I had ever done — my devotion, my zeal, everything I took pride in — was not merely worthless. It was aimed in **exactly the wrong direction**. I thought I was serving God. In truth, I was **persecuting God.**

I was the most devout sinner in the world.

## Three Days of Darkness

After the light, my eyes were blind.

My companions led me by the hand into Damascus. For three days and three nights I could see nothing. I neither ate nor drank.

Do you know what I was thinking during those three days?

I thought of Stephen's face. I thought of every person I had dragged to prison with my own hands. I thought of those who had died because of my persecution. Their names — every one — echoed in my mind.

**I had been persecuting Jesus. Every believer was part of His body. When I struck them, I struck Him. When I bound them, I bound Him.**

In three days of darkness, I finally understood one thing: **the law can reveal sin, but the law cannot save.** I had spent my whole life keeping the law, and all it had done was show me how hopeless I truly was. "For by works of the law no human being will be justified in his sight" (Romans 3:20).

I also understood something else: **He did not strike me dead.**

That light could have reduced me to ash. After all I had done, I deserved destruction a thousand times over. But He did not. **He asked me "Why are you persecuting me?" — that was not a sentence of judgment. It was a father's question to a prodigal son.**

## Ananias Came

On the third day, a disciple named Ananias came.

I later learned that the Lord had told him in a vision: Go to the street called Straight, and find a man from Tarsus named Saul. Ananias said, "Lord, I have heard from many about this man, how much evil he has done to your saints at Jerusalem" (Acts 9:13).

Brothers and sisters, think about it — if someone told you to go find a man who specialized in arresting Christians and lay your hands on him in prayer, would you go?

**Ananias went.**

He came in, placed his hands on me, and said a sentence that brought me to tears:

**"Brother Saul."**

Brother. He called me **brother.**

This man — the very man I had come to Damascus to arrest — called me brother.

"The Lord Jesus who appeared to you on the road by which you came has sent me so that you may regain your sight and be filled with the Holy Spirit" (Acts 9:17).

In that moment, something like scales fell from my eyes. I could see again. But what I saw was no longer the world I had known — I saw an entirely new world. **When I was blind, I thought I could see. Only when I could see did I realize I had been blind all along.**

I rose and was baptized.

## Grace Upon Grace

Brothers and sisters, if there is one person in all of Scripture least qualified to be used by God, it is I.

I am not like Peter, who denied the Lord out of fear — Peter at least loved the Lord. **I actively, systematically, and zealously persecuted the church of Christ.** My hands were stained with the blood of saints.

Yet He chose me.

Not because of any good in me. Not because of my learning — though I was indeed trained under the finest teacher, Gamaliel. Not because of my zeal — that very zeal nearly made me an eternal enemy.

**He chose me precisely to display all His patience in me, the foremost of sinners.**

"The saying is trustworthy and deserving of full acceptance, that Christ Jesus came into the world to save sinners, of whom I am the foremost. But I received mercy for this reason, that in me, as the foremost, Jesus Christ might display his perfect patience as an example to those who were to believe in him for eternal life" (1 Timothy 1:15-16).

Did you hear that? **As an example to those who would come after.** If even Saul could be forgiven, if even a persecutor of the church could become an apostle — **then no one is beyond the reach of grace.**

## What I Once Counted as Gain

In my letter to the Philippians, I wrote these words. Let me say them again now:

"But whatever gain I had, I counted as loss for the sake of Christ. Indeed, I count everything as loss because of the surpassing worth of knowing Christ Jesus my Lord. For his sake I have suffered the loss of all things and count them as rubbish, in order that I may gain Christ" (Philippians 3:7-8).

**Rubbish.**

My Pharisee credentials — rubbish. My education under Gamaliel — rubbish. My blameless record under the law — rubbish. Not because these things were bad in themselves, but because **when you use them as substitutes for Christ, they become the very barriers that keep you from knowing God.**

I once thought I stood in the light. In truth, I stood in darkness. That light knocked me down and blinded me — but the irony is, **only after I was blinded did I truly "see."**

## To Every "Devout Persecutor"

Brothers and sisters, if you are reading this —

Perhaps you do not persecute the church as I did. But perhaps you and I share a common problem: **you believe your own righteousness can save you.**

Perhaps you are a very good person. You follow the rules, do good deeds, never harm anyone. Your record, laid out for inspection, is "blameless." But do you have that peace in your heart? The peace that was sung by people in chains?

If not — perhaps, like Saul on the road to Damascus, you need to be struck down by that light.

Do not be afraid. **That light does not come to destroy you. It comes to save you.**

It will blind you for a time. It will shatter all your certainties. It will leave you sitting in darkness for a while. But when the scales fall from your eyes, you will see a brand new world — a world where you no longer need to stand on your own righteousness, a world **upheld entirely by grace.**

"Why are you persecuting me?" — perhaps today, the question is not about who you are persecuting, but about this: **What are you resisting?**

Are you resisting the admission that you cannot do it on your own? Are you resisting laying down your pride? Are you resisting a love greater than all your certainties?

Let go. Like me, fall down before that light.

And then you will hear Him call your name.

*"But I received mercy for this reason, that in me, as the foremost, Jesus Christ might display his perfect patience as an example to those who were to believe in him for eternal life." (1 Timothy 1:16)*

*May the Lord who shone His light on me on the Damascus road also shine His light into your heart — your brother, Paul*`,
  },
  {
    id: 'john-patmos',
    author: '约翰',
    authorEn: 'John',
    authorAvatar: '🏝️',
    authorBio: '耶稣所爱的门徒，拔摩海岛的流放者',
    authorBioEn: 'The disciple whom Jesus loved, exiled on Patmos',
    title_zh: '从拔摩海岛寄出',
    title_en: 'A Letter from Patmos',
    date: '2026-04-25',
    category: 'testimony',
    scripture: '',
    scriptureText_zh: '',
    scriptureText_en: '',
    summary_zh: '',
    summary_en: '',
    tags: [],
    content_zh: `## 我是扫罗——最虔诚的逼迫者

我叫扫罗，便雅悯支派的人，法利赛人中的法利赛人。

你们若问我从前是什么人，我可以把我的履历摆在你们面前："我第八天受割礼；我是以色列族、便雅悯支派的人，是希伯来人所生的希伯来人。就律法说，我是法利赛人；就热心说，我是逼迫教会的；就律法上的义说，我是无可指摘的。"（腓立比书 3:5-6）

你们听清楚了吗？**无可指摘。** 不是我自夸。在迦玛列门下受教的那些年，我背下了整本妥拉，安息日从不违反一条诫命，十一奉献精确到薄荷、茴香、芹菜。法利赛人中间，没有人比我更认真。

但光认真还不够。我要**为神大发热心。**

当我第一次听说有一群人在传讲一个被钉十字架的拿撒勒人是弥赛亚的时候，我的血都沸腾了。**弥赛亚被挂在木头上？** 妥拉明明写着："被挂的人是在神面前受咒诅的"（申命记 21:23）。这些人不是在传福音——他们是在亵渎神！

所以当公会决定要清除这个异端的时候，我第一个站出来。

司提反被石头打死的那天，我就在那里。我没有亲手丢石头——我替那些丢石头的人看守衣裳。我看着他跪下来，看着石头一块一块砸在他身上。他满脸是血，但他的脸——

弟兄姐妹，我不愿意承认这一点，但那天我看到了一张我永远忘不掉的脸。**他的脸好像天使的脸。** 他在死的时候说："主啊，不要将这罪归于他们！"（使徒行传 7:60）

被石头打死的人在为打他的人祷告。

我当时把这念头压下去了。我告诉自己：这是魔鬼的迷惑。越是看起来像天使的，越危险。

所以我更加疯狂地逼迫。

我挨家挨户搜查。男人女人，我一概拉到监里。我威胁他们，要他们否认那个名字。有些人否认了——我看到他们眼中的羞耻和痛苦。有些人不肯——我看到他们眼中的平安，一种我用尽全力也无法拥有的平安。

**我恨那种平安。** 因为我心里没有。

我以为我有。我以为遵行律法、大发热心就是平安。但每次看到那些被我抓起来的人，他们在锁链中唱诗赞美的时候，我心里就有一个声音说：**他们有的东西，你没有。**

我把那声音压得更深。

## 去大马色的路上

耶路撒冷还不够。我听说大马色也有信这道的人，就去大祭司那里要了文书，要把那里的人也捆绑回来。

那是一段很长的路，大约六天的行程。一路上我都在想着到了之后怎么审讯、怎么定罪。我的心里充满了义怒——至少我以为那是义怒。

**然后那道光来了。**

弟兄姐妹，我无法用语言描述那道光。中午的日头已经够亮了，但那道光比日头还亮。不是从某个方向照来的——是**四面照着我**。好像整个天空都裂开了，所有的光都倾倒下来。

我仆倒在地。

然后我听到了那个声音：

**"扫罗，扫罗，你为什么逼迫我？"**

祂叫了我的名字。叫了两遍。

我趴在地上，浑身发抖。我问："主啊，你是谁？"

我其实已经知道了。在那道光照到我的一瞬间，我所有的确信都碎了——我的律法知识、我的法利赛人身份、我的热心、我的义——全部碎成了渣。**因为如果这道光是从天上来的，如果这个声音是神的声音，那么我逼迫的不是异端，而是——**

**"我就是你所逼迫的耶稣。"**

那个被钉十字架的拿撒勒人。那个我认定是被神咒诅的人。那个我拼了命要从地上抹去祂名字的人。

**祂就是主。**

弟兄姐妹，你们能想象那一刻我的感受吗？那不是恍然大悟，那是**天塌地陷**。我这一生所做的一切——我的虔诚、我的热心、我引以为傲的一切——不仅毫无价值，而且**方向完全相反**。我以为自己在事奉神，其实我在**逼迫神**。

我是全世界最虔诚的罪人。

## 三天的黑暗

那道光之后，我的眼睛瞎了。

同行的人领着我进了大马色城。三天三夜，我什么也看不见，也不吃也不喝。

你们知道那三天我在想什么吗？

我想起了司提反的脸。我想起了我亲手抓进监牢的那些人。我想起了有些人因为我的逼迫而死。他们的名字，每一个，都在我脑海里。

**我逼迫的是耶稣。每一个信徒，都是祂身体的一部分。我打他们，就是打祂。我捆绑他们，就是捆绑祂。**

三天的黑暗里，我终于明白了一件事：**律法能让人知罪，但律法不能救人。** 我一辈子都在守律法，但律法只是让我看到自己有多绝望。"所以凡有血气的，没有一个因行律法能在神面前称义，因为律法本是叫人知罪。"（罗马书 3:20）

我也明白了另一件事：**祂没有击杀我。**

那道光完全可以把我烧成灰。以我所做的一切，我配得灭亡一千次。但祂没有。**祂问我"你为什么逼迫我"——这不是审判的宣告，这是父亲对浪子的追问。**

## 亚拿尼亚来了

第三天，一个叫亚拿尼亚的门徒来了。

后来我才知道，主在异象中对他说：去直街，找一个叫扫罗的大数人。亚拿尼亚说："主啊，我听见许多人说，这人怎样在耶路撒冷多多苦害你的圣徒。"（使徒行传 9:13）

弟兄姐妹，你们想想——如果有人让你去找一个专门抓基督徒的人，给他按手祷告，你去不去？

**亚拿尼亚去了。**

他进来，把手按在我身上，说了一句让我泪流满面的话：

**"兄弟扫罗。"**

兄弟。他叫我**兄弟**。

这个我来大马色要抓的人，叫我兄弟。

"在你来的路上向你显现的主，就是耶稣，打发我来，叫你能看见，又被圣灵充满。"（使徒行传 9:17）

就在那一刻，好像有鳞片从我眼睛上掉下来。我又能看见了。但我看到的不再是从前的世界——我看到了一个全新的世界。**瞎眼的时候以为自己看得见，看见了才知道自己从前是瞎的。**

我起来，受了洗。

## 恩典中的恩典

弟兄姐妹，如果说整本圣经中有一个人最没有资格被神使用，那就是我。

我不是像彼得那样因为害怕而不认主——彼得至少还爱主。**我是主动地、系统地、狂热地逼迫基督的教会。** 我手上沾着圣徒的血。

但祂拣选了我。

不是因为我有什么好。不是因为我的学问——虽然我确实在迦玛列门下受过最好的训练。不是因为我的热心——那份热心差点让我成为永远的仇敌。

**祂拣选我，恰恰是要在我这"罪人中的罪魁"身上，显明祂一切的忍耐。**

"基督耶稣降世，为要拯救罪人。这话是可信的，是十分可佩服的。在罪人中我是个罪魁。然而，我蒙了怜悯，是因耶稣基督要在我这罪魁身上显明祂一切的忍耐，给后来信祂得永生的人作榜样。"（提摩太前书 1:15-16）

你们听到了吗？**给后来的人作榜样。** 如果连扫罗都能被赦免，连逼迫教会的人都能成为使徒——**那么没有人是恩典够不到的。**

## 我从前以为有益的

腓立比书里我写过这么一段话。现在让我再说一遍：

"只是我先前以为与我有益的，我现在因基督都当作有损的。不但如此，我也将万事当作有损的，因我以认识我主基督耶稣为至宝。我为他已经丢弃万事，看作粪土，为要得着基督。"（腓立比书 3:7-8）

**粪土。**

我的法利赛人身份——粪土。我在迦玛列门下的学历——粪土。我无可指摘的律法记录——粪土。不是因为这些东西本身是坏的，而是因为**当你用这些东西来代替基督的时候，它们就变成了拦阻你认识神的障碍。**

我从前以为自己站在光明里，其实我站在黑暗中。那道光把我打倒，让我瞎了眼——但讽刺的是，**瞎了眼之后我才真正"看见"了。**

## 致每一个"虔诚的逼迫者"

弟兄姐妹，如果你读到这里——

也许你不像我那样逼迫教会。但也许你和我有一个共同的问题：**你以为自己的义可以救自己。**

也许你是一个很好的人。你守规矩，做善事，从不害人。你的履历拿出来，"无可指摘"。但你心里有没有那种平安？那种被锁链中的人唱出来的平安？

如果没有——也许你和大马色路上的扫罗一样，需要被那道光击倒一次。

不要怕。**那道光不是来毁灭你的。那道光是来拯救你的。**

它会让你暂时看不见。它会把你所有的确信打碎。它会让你在黑暗中待上一阵子。但当鳞片从你眼睛上掉下来的时候，你会看到一个全新的世界——一个不需要你靠自己的义站立的世界，一个**被恩典托住的世界。**

"你为什么逼迫我？"——也许今天，这个问题不是问你在逼迫谁，而是在问：**你在抗拒什么？**

你在抗拒承认自己不行吗？你在抗拒放下你的骄傲吗？你在抗拒那个比你所有的确信都更大的爱吗？

放下吧。像我一样，仆倒在那道光面前。

然后你会听到祂叫你的名字。

*"然而，我蒙了怜悯，是因耶稣基督要在我这罪魁身上显明祂一切的忍耐，给后来信祂得永生的人作榜样。"（提摩太前书 1:16）*

*愿那在大马色路上光照我的主，也光照你的心——你的弟兄，保罗*`,
    content_en: `## I Am Saul — The Most Devout Persecutor

My name is Saul, of the tribe of Benjamin, a Pharisee among Pharisees.

If you ask me who I was before, I can lay my credentials before you: "Circumcised on the eighth day, of the people of Israel, of the tribe of Benjamin, a Hebrew of Hebrews; as to the law, a Pharisee; as to zeal, a persecutor of the church; as to righteousness under the law, blameless." (Philippians 3:5-6)

Did you hear that? **Blameless.** I am not boasting. In those years studying under Gamaliel, I memorized the entire Torah, never broke a single commandment on the Sabbath, tithed down to the mint, dill, and cumin. Among the Pharisees, no one was more serious than I was.

But being serious was not enough. I wanted to **burn with zeal for God.**

When I first heard that a group of people were proclaiming a crucified Nazarene as the Messiah, my blood boiled. **The Messiah hung on a tree?** The Torah clearly states: "a hanged man is cursed by God" (Deuteronomy 21:23). These people were not preaching good news — they were blaspheming God!

So when the Sanhedrin decided to stamp out this heresy, I was the first to volunteer.

The day Stephen was stoned to death, I was there. I did not throw the stones myself — I guarded the garments of those who did. I watched him kneel. I watched the stones strike him one by one. His face was covered in blood, but his face —

Brothers and sisters, I do not like to admit this, but that day I saw a face I have never been able to forget. **His face was like the face of an angel.** As he was dying, he said, "Lord, do not hold this sin against them!" (Acts 7:60)

A man being stoned to death was praying for the men killing him.

I pushed that thought down. I told myself: this is the devil's deception. The more something looks like an angel, the more dangerous it is.

So I persecuted even more furiously.

I went house to house. Men and women alike, I dragged them off to prison. I threatened them, demanding they deny that name. Some did deny it — I saw the shame and agony in their eyes. Some refused — I saw in their eyes a peace, a peace that I could never possess no matter how hard I tried.

**I hated that peace.** Because I did not have it.

I thought I did. I thought keeping the law and burning with zeal was peace. But every time I saw those I had arrested singing hymns of praise in chains, a voice inside me whispered: **They have something you do not.**

I pushed that voice down deeper.

## On the Road to Damascus

Jerusalem was not enough. I heard that there were followers of the Way in Damascus too, so I went to the high priest for letters of authority to bring them back in chains.

It was a long journey, about six days. The whole way I was planning how I would interrogate them, how I would convict them. My heart was full of righteous anger — or so I thought.

**Then the light came.**

Brothers and sisters, I cannot describe that light with words. The noonday sun was already blazing, but that light was brighter than the sun. It did not come from one direction — it **shone all around me**. As if the entire sky had torn open and all its light poured down.

I fell to the ground.

Then I heard the voice:

**"Saul, Saul, why are you persecuting me?"**

He called my name. Twice.

I lay on the ground, trembling. I asked, "Who are you, Lord?"

I already knew. The instant that light struck me, all my certainties shattered — my knowledge of the law, my Pharisee credentials, my zeal, my righteousness — all of it crumbled to dust. **Because if this light was from heaven, if this voice was the voice of God, then I had not been persecuting heretics. I had been —**

**"I am Jesus, whom you are persecuting."**

The crucified Nazarene. The one I had declared cursed by God. The one whose name I had fought with all my strength to wipe from the earth.

**He is Lord.**

Brothers and sisters, can you imagine what I felt in that moment? It was not an epiphany. It was the **ground giving way beneath me**. Everything I had ever done — my devotion, my zeal, everything I took pride in — was not merely worthless. It was aimed in **exactly the wrong direction**. I thought I was serving God. In truth, I was **persecuting God.**

I was the most devout sinner in the world.

## Three Days of Darkness

After the light, my eyes were blind.

My companions led me by the hand into Damascus. For three days and three nights I could see nothing. I neither ate nor drank.

Do you know what I was thinking during those three days?

I thought of Stephen's face. I thought of every person I had dragged to prison with my own hands. I thought of those who had died because of my persecution. Their names — every one — echoed in my mind.

**I had been persecuting Jesus. Every believer was part of His body. When I struck them, I struck Him. When I bound them, I bound Him.**

In three days of darkness, I finally understood one thing: **the law can reveal sin, but the law cannot save.** I had spent my whole life keeping the law, and all it had done was show me how hopeless I truly was. "For by works of the law no human being will be justified in his sight" (Romans 3:20).

I also understood something else: **He did not strike me dead.**

That light could have reduced me to ash. After all I had done, I deserved destruction a thousand times over. But He did not. **He asked me "Why are you persecuting me?" — that was not a sentence of judgment. It was a father's question to a prodigal son.**

## Ananias Came

On the third day, a disciple named Ananias came.

I later learned that the Lord had told him in a vision: Go to the street called Straight, and find a man from Tarsus named Saul. Ananias said, "Lord, I have heard from many about this man, how much evil he has done to your saints at Jerusalem" (Acts 9:13).

Brothers and sisters, think about it — if someone told you to go find a man who specialized in arresting Christians and lay your hands on him in prayer, would you go?

**Ananias went.**

He came in, placed his hands on me, and said a sentence that brought me to tears:

**"Brother Saul."**

Brother. He called me **brother.**

This man — the very man I had come to Damascus to arrest — called me brother.

"The Lord Jesus who appeared to you on the road by which you came has sent me so that you may regain your sight and be filled with the Holy Spirit" (Acts 9:17).

In that moment, something like scales fell from my eyes. I could see again. But what I saw was no longer the world I had known — I saw an entirely new world. **When I was blind, I thought I could see. Only when I could see did I realize I had been blind all along.**

I rose and was baptized.

## Grace Upon Grace

Brothers and sisters, if there is one person in all of Scripture least qualified to be used by God, it is I.

I am not like Peter, who denied the Lord out of fear — Peter at least loved the Lord. **I actively, systematically, and zealously persecuted the church of Christ.** My hands were stained with the blood of saints.

Yet He chose me.

Not because of any good in me. Not because of my learning — though I was indeed trained under the finest teacher, Gamaliel. Not because of my zeal — that very zeal nearly made me an eternal enemy.

**He chose me precisely to display all His patience in me, the foremost of sinners.**

"The saying is trustworthy and deserving of full acceptance, that Christ Jesus came into the world to save sinners, of whom I am the foremost. But I received mercy for this reason, that in me, as the foremost, Jesus Christ might display his perfect patience as an example to those who were to believe in him for eternal life" (1 Timothy 1:15-16).

Did you hear that? **As an example to those who would come after.** If even Saul could be forgiven, if even a persecutor of the church could become an apostle — **then no one is beyond the reach of grace.**

## What I Once Counted as Gain

In my letter to the Philippians, I wrote these words. Let me say them again now:

"But whatever gain I had, I counted as loss for the sake of Christ. Indeed, I count everything as loss because of the surpassing worth of knowing Christ Jesus my Lord. For his sake I have suffered the loss of all things and count them as rubbish, in order that I may gain Christ" (Philippians 3:7-8).

**Rubbish.**

My Pharisee credentials — rubbish. My education under Gamaliel — rubbish. My blameless record under the law — rubbish. Not because these things were bad in themselves, but because **when you use them as substitutes for Christ, they become the very barriers that keep you from knowing God.**

I once thought I stood in the light. In truth, I stood in darkness. That light knocked me down and blinded me — but the irony is, **only after I was blinded did I truly "see."**

## To Every "Devout Persecutor"

Brothers and sisters, if you are reading this —

Perhaps you do not persecute the church as I did. But perhaps you and I share a common problem: **you believe your own righteousness can save you.**

Perhaps you are a very good person. You follow the rules, do good deeds, never harm anyone. Your record, laid out for inspection, is "blameless." But do you have that peace in your heart? The peace that was sung by people in chains?

If not — perhaps, like Saul on the road to Damascus, you need to be struck down by that light.

Do not be afraid. **That light does not come to destroy you. It comes to save you.**

It will blind you for a time. It will shatter all your certainties. It will leave you sitting in darkness for a while. But when the scales fall from your eyes, you will see a brand new world — a world where you no longer need to stand on your own righteousness, a world **upheld entirely by grace.**

"Why are you persecuting me?" — perhaps today, the question is not about who you are persecuting, but about this: **What are you resisting?**

Are you resisting the admission that you cannot do it on your own? Are you resisting laying down your pride? Are you resisting a love greater than all your certainties?

Let go. Like me, fall down before that light.

And then you will hear Him call your name.

*"But I received mercy for this reason, that in me, as the foremost, Jesus Christ might display his perfect patience as an example to those who were to believe in him for eternal life." (1 Timothy 1:16)*

*May the Lord who shone His light on me on the Damascus road also shine His light into your heart — your brother, Paul*`,
  },
  {
    id: 'hannah-prayer',
    author: '哈拿',
    authorEn: 'Hannah',
    authorAvatar: '🙏',
    authorBio: '以利加拿的妻子，撒母耳的母亲',
    authorBioEn: 'Wife of Elkanah, mother of Samuel',
    title_zh: '那一年在示罗',
    title_en: 'That Year in Shiloh',
    date: '2026-05-02',
    category: 'testimony',
    scripture: '',
    scriptureText_zh: '',
    scriptureText_en: '',
    summary_zh: '',
    summary_en: '',
    tags: [],
    content_zh: `## 我是扫罗——最虔诚的逼迫者

我叫扫罗，便雅悯支派的人，法利赛人中的法利赛人。

你们若问我从前是什么人，我可以把我的履历摆在你们面前："我第八天受割礼；我是以色列族、便雅悯支派的人，是希伯来人所生的希伯来人。就律法说，我是法利赛人；就热心说，我是逼迫教会的；就律法上的义说，我是无可指摘的。"（腓立比书 3:5-6）

你们听清楚了吗？**无可指摘。** 不是我自夸。在迦玛列门下受教的那些年，我背下了整本妥拉，安息日从不违反一条诫命，十一奉献精确到薄荷、茴香、芹菜。法利赛人中间，没有人比我更认真。

但光认真还不够。我要**为神大发热心。**

当我第一次听说有一群人在传讲一个被钉十字架的拿撒勒人是弥赛亚的时候，我的血都沸腾了。**弥赛亚被挂在木头上？** 妥拉明明写着："被挂的人是在神面前受咒诅的"（申命记 21:23）。这些人不是在传福音——他们是在亵渎神！

所以当公会决定要清除这个异端的时候，我第一个站出来。

司提反被石头打死的那天，我就在那里。我没有亲手丢石头——我替那些丢石头的人看守衣裳。我看着他跪下来，看着石头一块一块砸在他身上。他满脸是血，但他的脸——

弟兄姐妹，我不愿意承认这一点，但那天我看到了一张我永远忘不掉的脸。**他的脸好像天使的脸。** 他在死的时候说："主啊，不要将这罪归于他们！"（使徒行传 7:60）

被石头打死的人在为打他的人祷告。

我当时把这念头压下去了。我告诉自己：这是魔鬼的迷惑。越是看起来像天使的，越危险。

所以我更加疯狂地逼迫。

我挨家挨户搜查。男人女人，我一概拉到监里。我威胁他们，要他们否认那个名字。有些人否认了——我看到他们眼中的羞耻和痛苦。有些人不肯——我看到他们眼中的平安，一种我用尽全力也无法拥有的平安。

**我恨那种平安。** 因为我心里没有。

我以为我有。我以为遵行律法、大发热心就是平安。但每次看到那些被我抓起来的人，他们在锁链中唱诗赞美的时候，我心里就有一个声音说：**他们有的东西，你没有。**

我把那声音压得更深。

## 去大马色的路上

耶路撒冷还不够。我听说大马色也有信这道的人，就去大祭司那里要了文书，要把那里的人也捆绑回来。

那是一段很长的路，大约六天的行程。一路上我都在想着到了之后怎么审讯、怎么定罪。我的心里充满了义怒——至少我以为那是义怒。

**然后那道光来了。**

弟兄姐妹，我无法用语言描述那道光。中午的日头已经够亮了，但那道光比日头还亮。不是从某个方向照来的——是**四面照着我**。好像整个天空都裂开了，所有的光都倾倒下来。

我仆倒在地。

然后我听到了那个声音：

**"扫罗，扫罗，你为什么逼迫我？"**

祂叫了我的名字。叫了两遍。

我趴在地上，浑身发抖。我问："主啊，你是谁？"

我其实已经知道了。在那道光照到我的一瞬间，我所有的确信都碎了——我的律法知识、我的法利赛人身份、我的热心、我的义——全部碎成了渣。**因为如果这道光是从天上来的，如果这个声音是神的声音，那么我逼迫的不是异端，而是——**

**"我就是你所逼迫的耶稣。"**

那个被钉十字架的拿撒勒人。那个我认定是被神咒诅的人。那个我拼了命要从地上抹去祂名字的人。

**祂就是主。**

弟兄姐妹，你们能想象那一刻我的感受吗？那不是恍然大悟，那是**天塌地陷**。我这一生所做的一切——我的虔诚、我的热心、我引以为傲的一切——不仅毫无价值，而且**方向完全相反**。我以为自己在事奉神，其实我在**逼迫神**。

我是全世界最虔诚的罪人。

## 三天的黑暗

那道光之后，我的眼睛瞎了。

同行的人领着我进了大马色城。三天三夜，我什么也看不见，也不吃也不喝。

你们知道那三天我在想什么吗？

我想起了司提反的脸。我想起了我亲手抓进监牢的那些人。我想起了有些人因为我的逼迫而死。他们的名字，每一个，都在我脑海里。

**我逼迫的是耶稣。每一个信徒，都是祂身体的一部分。我打他们，就是打祂。我捆绑他们，就是捆绑祂。**

三天的黑暗里，我终于明白了一件事：**律法能让人知罪，但律法不能救人。** 我一辈子都在守律法，但律法只是让我看到自己有多绝望。"所以凡有血气的，没有一个因行律法能在神面前称义，因为律法本是叫人知罪。"（罗马书 3:20）

我也明白了另一件事：**祂没有击杀我。**

那道光完全可以把我烧成灰。以我所做的一切，我配得灭亡一千次。但祂没有。**祂问我"你为什么逼迫我"——这不是审判的宣告，这是父亲对浪子的追问。**

## 亚拿尼亚来了

第三天，一个叫亚拿尼亚的门徒来了。

后来我才知道，主在异象中对他说：去直街，找一个叫扫罗的大数人。亚拿尼亚说："主啊，我听见许多人说，这人怎样在耶路撒冷多多苦害你的圣徒。"（使徒行传 9:13）

弟兄姐妹，你们想想——如果有人让你去找一个专门抓基督徒的人，给他按手祷告，你去不去？

**亚拿尼亚去了。**

他进来，把手按在我身上，说了一句让我泪流满面的话：

**"兄弟扫罗。"**

兄弟。他叫我**兄弟**。

这个我来大马色要抓的人，叫我兄弟。

"在你来的路上向你显现的主，就是耶稣，打发我来，叫你能看见，又被圣灵充满。"（使徒行传 9:17）

就在那一刻，好像有鳞片从我眼睛上掉下来。我又能看见了。但我看到的不再是从前的世界——我看到了一个全新的世界。**瞎眼的时候以为自己看得见，看见了才知道自己从前是瞎的。**

我起来，受了洗。

## 恩典中的恩典

弟兄姐妹，如果说整本圣经中有一个人最没有资格被神使用，那就是我。

我不是像彼得那样因为害怕而不认主——彼得至少还爱主。**我是主动地、系统地、狂热地逼迫基督的教会。** 我手上沾着圣徒的血。

但祂拣选了我。

不是因为我有什么好。不是因为我的学问——虽然我确实在迦玛列门下受过最好的训练。不是因为我的热心——那份热心差点让我成为永远的仇敌。

**祂拣选我，恰恰是要在我这"罪人中的罪魁"身上，显明祂一切的忍耐。**

"基督耶稣降世，为要拯救罪人。这话是可信的，是十分可佩服的。在罪人中我是个罪魁。然而，我蒙了怜悯，是因耶稣基督要在我这罪魁身上显明祂一切的忍耐，给后来信祂得永生的人作榜样。"（提摩太前书 1:15-16）

你们听到了吗？**给后来的人作榜样。** 如果连扫罗都能被赦免，连逼迫教会的人都能成为使徒——**那么没有人是恩典够不到的。**

## 我从前以为有益的

腓立比书里我写过这么一段话。现在让我再说一遍：

"只是我先前以为与我有益的，我现在因基督都当作有损的。不但如此，我也将万事当作有损的，因我以认识我主基督耶稣为至宝。我为他已经丢弃万事，看作粪土，为要得着基督。"（腓立比书 3:7-8）

**粪土。**

我的法利赛人身份——粪土。我在迦玛列门下的学历——粪土。我无可指摘的律法记录——粪土。不是因为这些东西本身是坏的，而是因为**当你用这些东西来代替基督的时候，它们就变成了拦阻你认识神的障碍。**

我从前以为自己站在光明里，其实我站在黑暗中。那道光把我打倒，让我瞎了眼——但讽刺的是，**瞎了眼之后我才真正"看见"了。**

## 致每一个"虔诚的逼迫者"

弟兄姐妹，如果你读到这里——

也许你不像我那样逼迫教会。但也许你和我有一个共同的问题：**你以为自己的义可以救自己。**

也许你是一个很好的人。你守规矩，做善事，从不害人。你的履历拿出来，"无可指摘"。但你心里有没有那种平安？那种被锁链中的人唱出来的平安？

如果没有——也许你和大马色路上的扫罗一样，需要被那道光击倒一次。

不要怕。**那道光不是来毁灭你的。那道光是来拯救你的。**

它会让你暂时看不见。它会把你所有的确信打碎。它会让你在黑暗中待上一阵子。但当鳞片从你眼睛上掉下来的时候，你会看到一个全新的世界——一个不需要你靠自己的义站立的世界，一个**被恩典托住的世界。**

"你为什么逼迫我？"——也许今天，这个问题不是问你在逼迫谁，而是在问：**你在抗拒什么？**

你在抗拒承认自己不行吗？你在抗拒放下你的骄傲吗？你在抗拒那个比你所有的确信都更大的爱吗？

放下吧。像我一样，仆倒在那道光面前。

然后你会听到祂叫你的名字。

*"然而，我蒙了怜悯，是因耶稣基督要在我这罪魁身上显明祂一切的忍耐，给后来信祂得永生的人作榜样。"（提摩太前书 1:16）*

*愿那在大马色路上光照我的主，也光照你的心——你的弟兄，保罗*`,
    content_en: `## I Am Saul — The Most Devout Persecutor

My name is Saul, of the tribe of Benjamin, a Pharisee among Pharisees.

If you ask me who I was before, I can lay my credentials before you: "Circumcised on the eighth day, of the people of Israel, of the tribe of Benjamin, a Hebrew of Hebrews; as to the law, a Pharisee; as to zeal, a persecutor of the church; as to righteousness under the law, blameless." (Philippians 3:5-6)

Did you hear that? **Blameless.** I am not boasting. In those years studying under Gamaliel, I memorized the entire Torah, never broke a single commandment on the Sabbath, tithed down to the mint, dill, and cumin. Among the Pharisees, no one was more serious than I was.

But being serious was not enough. I wanted to **burn with zeal for God.**

When I first heard that a group of people were proclaiming a crucified Nazarene as the Messiah, my blood boiled. **The Messiah hung on a tree?** The Torah clearly states: "a hanged man is cursed by God" (Deuteronomy 21:23). These people were not preaching good news — they were blaspheming God!

So when the Sanhedrin decided to stamp out this heresy, I was the first to volunteer.

The day Stephen was stoned to death, I was there. I did not throw the stones myself — I guarded the garments of those who did. I watched him kneel. I watched the stones strike him one by one. His face was covered in blood, but his face —

Brothers and sisters, I do not like to admit this, but that day I saw a face I have never been able to forget. **His face was like the face of an angel.** As he was dying, he said, "Lord, do not hold this sin against them!" (Acts 7:60)

A man being stoned to death was praying for the men killing him.

I pushed that thought down. I told myself: this is the devil's deception. The more something looks like an angel, the more dangerous it is.

So I persecuted even more furiously.

I went house to house. Men and women alike, I dragged them off to prison. I threatened them, demanding they deny that name. Some did deny it — I saw the shame and agony in their eyes. Some refused — I saw in their eyes a peace, a peace that I could never possess no matter how hard I tried.

**I hated that peace.** Because I did not have it.

I thought I did. I thought keeping the law and burning with zeal was peace. But every time I saw those I had arrested singing hymns of praise in chains, a voice inside me whispered: **They have something you do not.**

I pushed that voice down deeper.

## On the Road to Damascus

Jerusalem was not enough. I heard that there were followers of the Way in Damascus too, so I went to the high priest for letters of authority to bring them back in chains.

It was a long journey, about six days. The whole way I was planning how I would interrogate them, how I would convict them. My heart was full of righteous anger — or so I thought.

**Then the light came.**

Brothers and sisters, I cannot describe that light with words. The noonday sun was already blazing, but that light was brighter than the sun. It did not come from one direction — it **shone all around me**. As if the entire sky had torn open and all its light poured down.

I fell to the ground.

Then I heard the voice:

**"Saul, Saul, why are you persecuting me?"**

He called my name. Twice.

I lay on the ground, trembling. I asked, "Who are you, Lord?"

I already knew. The instant that light struck me, all my certainties shattered — my knowledge of the law, my Pharisee credentials, my zeal, my righteousness — all of it crumbled to dust. **Because if this light was from heaven, if this voice was the voice of God, then I had not been persecuting heretics. I had been —**

**"I am Jesus, whom you are persecuting."**

The crucified Nazarene. The one I had declared cursed by God. The one whose name I had fought with all my strength to wipe from the earth.

**He is Lord.**

Brothers and sisters, can you imagine what I felt in that moment? It was not an epiphany. It was the **ground giving way beneath me**. Everything I had ever done — my devotion, my zeal, everything I took pride in — was not merely worthless. It was aimed in **exactly the wrong direction**. I thought I was serving God. In truth, I was **persecuting God.**

I was the most devout sinner in the world.

## Three Days of Darkness

After the light, my eyes were blind.

My companions led me by the hand into Damascus. For three days and three nights I could see nothing. I neither ate nor drank.

Do you know what I was thinking during those three days?

I thought of Stephen's face. I thought of every person I had dragged to prison with my own hands. I thought of those who had died because of my persecution. Their names — every one — echoed in my mind.

**I had been persecuting Jesus. Every believer was part of His body. When I struck them, I struck Him. When I bound them, I bound Him.**

In three days of darkness, I finally understood one thing: **the law can reveal sin, but the law cannot save.** I had spent my whole life keeping the law, and all it had done was show me how hopeless I truly was. "For by works of the law no human being will be justified in his sight" (Romans 3:20).

I also understood something else: **He did not strike me dead.**

That light could have reduced me to ash. After all I had done, I deserved destruction a thousand times over. But He did not. **He asked me "Why are you persecuting me?" — that was not a sentence of judgment. It was a father's question to a prodigal son.**

## Ananias Came

On the third day, a disciple named Ananias came.

I later learned that the Lord had told him in a vision: Go to the street called Straight, and find a man from Tarsus named Saul. Ananias said, "Lord, I have heard from many about this man, how much evil he has done to your saints at Jerusalem" (Acts 9:13).

Brothers and sisters, think about it — if someone told you to go find a man who specialized in arresting Christians and lay your hands on him in prayer, would you go?

**Ananias went.**

He came in, placed his hands on me, and said a sentence that brought me to tears:

**"Brother Saul."**

Brother. He called me **brother.**

This man — the very man I had come to Damascus to arrest — called me brother.

"The Lord Jesus who appeared to you on the road by which you came has sent me so that you may regain your sight and be filled with the Holy Spirit" (Acts 9:17).

In that moment, something like scales fell from my eyes. I could see again. But what I saw was no longer the world I had known — I saw an entirely new world. **When I was blind, I thought I could see. Only when I could see did I realize I had been blind all along.**

I rose and was baptized.

## Grace Upon Grace

Brothers and sisters, if there is one person in all of Scripture least qualified to be used by God, it is I.

I am not like Peter, who denied the Lord out of fear — Peter at least loved the Lord. **I actively, systematically, and zealously persecuted the church of Christ.** My hands were stained with the blood of saints.

Yet He chose me.

Not because of any good in me. Not because of my learning — though I was indeed trained under the finest teacher, Gamaliel. Not because of my zeal — that very zeal nearly made me an eternal enemy.

**He chose me precisely to display all His patience in me, the foremost of sinners.**

"The saying is trustworthy and deserving of full acceptance, that Christ Jesus came into the world to save sinners, of whom I am the foremost. But I received mercy for this reason, that in me, as the foremost, Jesus Christ might display his perfect patience as an example to those who were to believe in him for eternal life" (1 Timothy 1:15-16).

Did you hear that? **As an example to those who would come after.** If even Saul could be forgiven, if even a persecutor of the church could become an apostle — **then no one is beyond the reach of grace.**

## What I Once Counted as Gain

In my letter to the Philippians, I wrote these words. Let me say them again now:

"But whatever gain I had, I counted as loss for the sake of Christ. Indeed, I count everything as loss because of the surpassing worth of knowing Christ Jesus my Lord. For his sake I have suffered the loss of all things and count them as rubbish, in order that I may gain Christ" (Philippians 3:7-8).

**Rubbish.**

My Pharisee credentials — rubbish. My education under Gamaliel — rubbish. My blameless record under the law — rubbish. Not because these things were bad in themselves, but because **when you use them as substitutes for Christ, they become the very barriers that keep you from knowing God.**

I once thought I stood in the light. In truth, I stood in darkness. That light knocked me down and blinded me — but the irony is, **only after I was blinded did I truly "see."**

## To Every "Devout Persecutor"

Brothers and sisters, if you are reading this —

Perhaps you do not persecute the church as I did. But perhaps you and I share a common problem: **you believe your own righteousness can save you.**

Perhaps you are a very good person. You follow the rules, do good deeds, never harm anyone. Your record, laid out for inspection, is "blameless." But do you have that peace in your heart? The peace that was sung by people in chains?

If not — perhaps, like Saul on the road to Damascus, you need to be struck down by that light.

Do not be afraid. **That light does not come to destroy you. It comes to save you.**

It will blind you for a time. It will shatter all your certainties. It will leave you sitting in darkness for a while. But when the scales fall from your eyes, you will see a brand new world — a world where you no longer need to stand on your own righteousness, a world **upheld entirely by grace.**

"Why are you persecuting me?" — perhaps today, the question is not about who you are persecuting, but about this: **What are you resisting?**

Are you resisting the admission that you cannot do it on your own? Are you resisting laying down your pride? Are you resisting a love greater than all your certainties?

Let go. Like me, fall down before that light.

And then you will hear Him call your name.

*"But I received mercy for this reason, that in me, as the foremost, Jesus Christ might display his perfect patience as an example to those who were to believe in him for eternal life." (1 Timothy 1:16)*

*May the Lord who shone His light on me on the Damascus road also shine His light into your heart — your brother, Paul*`,
  },
  {
    id: 'joseph-egypt',
    author: '约瑟',
    authorEn: 'Joseph',
    authorAvatar: '👔',
    authorBio: '雅各的第十一个儿子，埃及的宰相',
    authorBioEn: 'Eleventh son of Jacob, governor of Egypt',
    title_zh: '从坑底到王宫',
    title_en: 'From the Pit to the Palace',
    date: '2026-05-09',
    category: 'testimony',
    scripture: '',
    scriptureText_zh: '',
    scriptureText_en: '',
    summary_zh: '',
    summary_en: '',
    tags: [],
    content_zh: `## 我是扫罗——最虔诚的逼迫者

我叫扫罗，便雅悯支派的人，法利赛人中的法利赛人。

你们若问我从前是什么人，我可以把我的履历摆在你们面前："我第八天受割礼；我是以色列族、便雅悯支派的人，是希伯来人所生的希伯来人。就律法说，我是法利赛人；就热心说，我是逼迫教会的；就律法上的义说，我是无可指摘的。"（腓立比书 3:5-6）

你们听清楚了吗？**无可指摘。** 不是我自夸。在迦玛列门下受教的那些年，我背下了整本妥拉，安息日从不违反一条诫命，十一奉献精确到薄荷、茴香、芹菜。法利赛人中间，没有人比我更认真。

但光认真还不够。我要**为神大发热心。**

当我第一次听说有一群人在传讲一个被钉十字架的拿撒勒人是弥赛亚的时候，我的血都沸腾了。**弥赛亚被挂在木头上？** 妥拉明明写着："被挂的人是在神面前受咒诅的"（申命记 21:23）。这些人不是在传福音——他们是在亵渎神！

所以当公会决定要清除这个异端的时候，我第一个站出来。

司提反被石头打死的那天，我就在那里。我没有亲手丢石头——我替那些丢石头的人看守衣裳。我看着他跪下来，看着石头一块一块砸在他身上。他满脸是血，但他的脸——

弟兄姐妹，我不愿意承认这一点，但那天我看到了一张我永远忘不掉的脸。**他的脸好像天使的脸。** 他在死的时候说："主啊，不要将这罪归于他们！"（使徒行传 7:60）

被石头打死的人在为打他的人祷告。

我当时把这念头压下去了。我告诉自己：这是魔鬼的迷惑。越是看起来像天使的，越危险。

所以我更加疯狂地逼迫。

我挨家挨户搜查。男人女人，我一概拉到监里。我威胁他们，要他们否认那个名字。有些人否认了——我看到他们眼中的羞耻和痛苦。有些人不肯——我看到他们眼中的平安，一种我用尽全力也无法拥有的平安。

**我恨那种平安。** 因为我心里没有。

我以为我有。我以为遵行律法、大发热心就是平安。但每次看到那些被我抓起来的人，他们在锁链中唱诗赞美的时候，我心里就有一个声音说：**他们有的东西，你没有。**

我把那声音压得更深。

## 去大马色的路上

耶路撒冷还不够。我听说大马色也有信这道的人，就去大祭司那里要了文书，要把那里的人也捆绑回来。

那是一段很长的路，大约六天的行程。一路上我都在想着到了之后怎么审讯、怎么定罪。我的心里充满了义怒——至少我以为那是义怒。

**然后那道光来了。**

弟兄姐妹，我无法用语言描述那道光。中午的日头已经够亮了，但那道光比日头还亮。不是从某个方向照来的——是**四面照着我**。好像整个天空都裂开了，所有的光都倾倒下来。

我仆倒在地。

然后我听到了那个声音：

**"扫罗，扫罗，你为什么逼迫我？"**

祂叫了我的名字。叫了两遍。

我趴在地上，浑身发抖。我问："主啊，你是谁？"

我其实已经知道了。在那道光照到我的一瞬间，我所有的确信都碎了——我的律法知识、我的法利赛人身份、我的热心、我的义——全部碎成了渣。**因为如果这道光是从天上来的，如果这个声音是神的声音，那么我逼迫的不是异端，而是——**

**"我就是你所逼迫的耶稣。"**

那个被钉十字架的拿撒勒人。那个我认定是被神咒诅的人。那个我拼了命要从地上抹去祂名字的人。

**祂就是主。**

弟兄姐妹，你们能想象那一刻我的感受吗？那不是恍然大悟，那是**天塌地陷**。我这一生所做的一切——我的虔诚、我的热心、我引以为傲的一切——不仅毫无价值，而且**方向完全相反**。我以为自己在事奉神，其实我在**逼迫神**。

我是全世界最虔诚的罪人。

## 三天的黑暗

那道光之后，我的眼睛瞎了。

同行的人领着我进了大马色城。三天三夜，我什么也看不见，也不吃也不喝。

你们知道那三天我在想什么吗？

我想起了司提反的脸。我想起了我亲手抓进监牢的那些人。我想起了有些人因为我的逼迫而死。他们的名字，每一个，都在我脑海里。

**我逼迫的是耶稣。每一个信徒，都是祂身体的一部分。我打他们，就是打祂。我捆绑他们，就是捆绑祂。**

三天的黑暗里，我终于明白了一件事：**律法能让人知罪，但律法不能救人。** 我一辈子都在守律法，但律法只是让我看到自己有多绝望。"所以凡有血气的，没有一个因行律法能在神面前称义，因为律法本是叫人知罪。"（罗马书 3:20）

我也明白了另一件事：**祂没有击杀我。**

那道光完全可以把我烧成灰。以我所做的一切，我配得灭亡一千次。但祂没有。**祂问我"你为什么逼迫我"——这不是审判的宣告，这是父亲对浪子的追问。**

## 亚拿尼亚来了

第三天，一个叫亚拿尼亚的门徒来了。

后来我才知道，主在异象中对他说：去直街，找一个叫扫罗的大数人。亚拿尼亚说："主啊，我听见许多人说，这人怎样在耶路撒冷多多苦害你的圣徒。"（使徒行传 9:13）

弟兄姐妹，你们想想——如果有人让你去找一个专门抓基督徒的人，给他按手祷告，你去不去？

**亚拿尼亚去了。**

他进来，把手按在我身上，说了一句让我泪流满面的话：

**"兄弟扫罗。"**

兄弟。他叫我**兄弟**。

这个我来大马色要抓的人，叫我兄弟。

"在你来的路上向你显现的主，就是耶稣，打发我来，叫你能看见，又被圣灵充满。"（使徒行传 9:17）

就在那一刻，好像有鳞片从我眼睛上掉下来。我又能看见了。但我看到的不再是从前的世界——我看到了一个全新的世界。**瞎眼的时候以为自己看得见，看见了才知道自己从前是瞎的。**

我起来，受了洗。

## 恩典中的恩典

弟兄姐妹，如果说整本圣经中有一个人最没有资格被神使用，那就是我。

我不是像彼得那样因为害怕而不认主——彼得至少还爱主。**我是主动地、系统地、狂热地逼迫基督的教会。** 我手上沾着圣徒的血。

但祂拣选了我。

不是因为我有什么好。不是因为我的学问——虽然我确实在迦玛列门下受过最好的训练。不是因为我的热心——那份热心差点让我成为永远的仇敌。

**祂拣选我，恰恰是要在我这"罪人中的罪魁"身上，显明祂一切的忍耐。**

"基督耶稣降世，为要拯救罪人。这话是可信的，是十分可佩服的。在罪人中我是个罪魁。然而，我蒙了怜悯，是因耶稣基督要在我这罪魁身上显明祂一切的忍耐，给后来信祂得永生的人作榜样。"（提摩太前书 1:15-16）

你们听到了吗？**给后来的人作榜样。** 如果连扫罗都能被赦免，连逼迫教会的人都能成为使徒——**那么没有人是恩典够不到的。**

## 我从前以为有益的

腓立比书里我写过这么一段话。现在让我再说一遍：

"只是我先前以为与我有益的，我现在因基督都当作有损的。不但如此，我也将万事当作有损的，因我以认识我主基督耶稣为至宝。我为他已经丢弃万事，看作粪土，为要得着基督。"（腓立比书 3:7-8）

**粪土。**

我的法利赛人身份——粪土。我在迦玛列门下的学历——粪土。我无可指摘的律法记录——粪土。不是因为这些东西本身是坏的，而是因为**当你用这些东西来代替基督的时候，它们就变成了拦阻你认识神的障碍。**

我从前以为自己站在光明里，其实我站在黑暗中。那道光把我打倒，让我瞎了眼——但讽刺的是，**瞎了眼之后我才真正"看见"了。**

## 致每一个"虔诚的逼迫者"

弟兄姐妹，如果你读到这里——

也许你不像我那样逼迫教会。但也许你和我有一个共同的问题：**你以为自己的义可以救自己。**

也许你是一个很好的人。你守规矩，做善事，从不害人。你的履历拿出来，"无可指摘"。但你心里有没有那种平安？那种被锁链中的人唱出来的平安？

如果没有——也许你和大马色路上的扫罗一样，需要被那道光击倒一次。

不要怕。**那道光不是来毁灭你的。那道光是来拯救你的。**

它会让你暂时看不见。它会把你所有的确信打碎。它会让你在黑暗中待上一阵子。但当鳞片从你眼睛上掉下来的时候，你会看到一个全新的世界——一个不需要你靠自己的义站立的世界，一个**被恩典托住的世界。**

"你为什么逼迫我？"——也许今天，这个问题不是问你在逼迫谁，而是在问：**你在抗拒什么？**

你在抗拒承认自己不行吗？你在抗拒放下你的骄傲吗？你在抗拒那个比你所有的确信都更大的爱吗？

放下吧。像我一样，仆倒在那道光面前。

然后你会听到祂叫你的名字。

*"然而，我蒙了怜悯，是因耶稣基督要在我这罪魁身上显明祂一切的忍耐，给后来信祂得永生的人作榜样。"（提摩太前书 1:16）*

*愿那在大马色路上光照我的主，也光照你的心——你的弟兄，保罗*`,
    content_en: `## I Am Saul — The Most Devout Persecutor

My name is Saul, of the tribe of Benjamin, a Pharisee among Pharisees.

If you ask me who I was before, I can lay my credentials before you: "Circumcised on the eighth day, of the people of Israel, of the tribe of Benjamin, a Hebrew of Hebrews; as to the law, a Pharisee; as to zeal, a persecutor of the church; as to righteousness under the law, blameless." (Philippians 3:5-6)

Did you hear that? **Blameless.** I am not boasting. In those years studying under Gamaliel, I memorized the entire Torah, never broke a single commandment on the Sabbath, tithed down to the mint, dill, and cumin. Among the Pharisees, no one was more serious than I was.

But being serious was not enough. I wanted to **burn with zeal for God.**

When I first heard that a group of people were proclaiming a crucified Nazarene as the Messiah, my blood boiled. **The Messiah hung on a tree?** The Torah clearly states: "a hanged man is cursed by God" (Deuteronomy 21:23). These people were not preaching good news — they were blaspheming God!

So when the Sanhedrin decided to stamp out this heresy, I was the first to volunteer.

The day Stephen was stoned to death, I was there. I did not throw the stones myself — I guarded the garments of those who did. I watched him kneel. I watched the stones strike him one by one. His face was covered in blood, but his face —

Brothers and sisters, I do not like to admit this, but that day I saw a face I have never been able to forget. **His face was like the face of an angel.** As he was dying, he said, "Lord, do not hold this sin against them!" (Acts 7:60)

A man being stoned to death was praying for the men killing him.

I pushed that thought down. I told myself: this is the devil's deception. The more something looks like an angel, the more dangerous it is.

So I persecuted even more furiously.

I went house to house. Men and women alike, I dragged them off to prison. I threatened them, demanding they deny that name. Some did deny it — I saw the shame and agony in their eyes. Some refused — I saw in their eyes a peace, a peace that I could never possess no matter how hard I tried.

**I hated that peace.** Because I did not have it.

I thought I did. I thought keeping the law and burning with zeal was peace. But every time I saw those I had arrested singing hymns of praise in chains, a voice inside me whispered: **They have something you do not.**

I pushed that voice down deeper.

## On the Road to Damascus

Jerusalem was not enough. I heard that there were followers of the Way in Damascus too, so I went to the high priest for letters of authority to bring them back in chains.

It was a long journey, about six days. The whole way I was planning how I would interrogate them, how I would convict them. My heart was full of righteous anger — or so I thought.

**Then the light came.**

Brothers and sisters, I cannot describe that light with words. The noonday sun was already blazing, but that light was brighter than the sun. It did not come from one direction — it **shone all around me**. As if the entire sky had torn open and all its light poured down.

I fell to the ground.

Then I heard the voice:

**"Saul, Saul, why are you persecuting me?"**

He called my name. Twice.

I lay on the ground, trembling. I asked, "Who are you, Lord?"

I already knew. The instant that light struck me, all my certainties shattered — my knowledge of the law, my Pharisee credentials, my zeal, my righteousness — all of it crumbled to dust. **Because if this light was from heaven, if this voice was the voice of God, then I had not been persecuting heretics. I had been —**

**"I am Jesus, whom you are persecuting."**

The crucified Nazarene. The one I had declared cursed by God. The one whose name I had fought with all my strength to wipe from the earth.

**He is Lord.**

Brothers and sisters, can you imagine what I felt in that moment? It was not an epiphany. It was the **ground giving way beneath me**. Everything I had ever done — my devotion, my zeal, everything I took pride in — was not merely worthless. It was aimed in **exactly the wrong direction**. I thought I was serving God. In truth, I was **persecuting God.**

I was the most devout sinner in the world.

## Three Days of Darkness

After the light, my eyes were blind.

My companions led me by the hand into Damascus. For three days and three nights I could see nothing. I neither ate nor drank.

Do you know what I was thinking during those three days?

I thought of Stephen's face. I thought of every person I had dragged to prison with my own hands. I thought of those who had died because of my persecution. Their names — every one — echoed in my mind.

**I had been persecuting Jesus. Every believer was part of His body. When I struck them, I struck Him. When I bound them, I bound Him.**

In three days of darkness, I finally understood one thing: **the law can reveal sin, but the law cannot save.** I had spent my whole life keeping the law, and all it had done was show me how hopeless I truly was. "For by works of the law no human being will be justified in his sight" (Romans 3:20).

I also understood something else: **He did not strike me dead.**

That light could have reduced me to ash. After all I had done, I deserved destruction a thousand times over. But He did not. **He asked me "Why are you persecuting me?" — that was not a sentence of judgment. It was a father's question to a prodigal son.**

## Ananias Came

On the third day, a disciple named Ananias came.

I later learned that the Lord had told him in a vision: Go to the street called Straight, and find a man from Tarsus named Saul. Ananias said, "Lord, I have heard from many about this man, how much evil he has done to your saints at Jerusalem" (Acts 9:13).

Brothers and sisters, think about it — if someone told you to go find a man who specialized in arresting Christians and lay your hands on him in prayer, would you go?

**Ananias went.**

He came in, placed his hands on me, and said a sentence that brought me to tears:

**"Brother Saul."**

Brother. He called me **brother.**

This man — the very man I had come to Damascus to arrest — called me brother.

"The Lord Jesus who appeared to you on the road by which you came has sent me so that you may regain your sight and be filled with the Holy Spirit" (Acts 9:17).

In that moment, something like scales fell from my eyes. I could see again. But what I saw was no longer the world I had known — I saw an entirely new world. **When I was blind, I thought I could see. Only when I could see did I realize I had been blind all along.**

I rose and was baptized.

## Grace Upon Grace

Brothers and sisters, if there is one person in all of Scripture least qualified to be used by God, it is I.

I am not like Peter, who denied the Lord out of fear — Peter at least loved the Lord. **I actively, systematically, and zealously persecuted the church of Christ.** My hands were stained with the blood of saints.

Yet He chose me.

Not because of any good in me. Not because of my learning — though I was indeed trained under the finest teacher, Gamaliel. Not because of my zeal — that very zeal nearly made me an eternal enemy.

**He chose me precisely to display all His patience in me, the foremost of sinners.**

"The saying is trustworthy and deserving of full acceptance, that Christ Jesus came into the world to save sinners, of whom I am the foremost. But I received mercy for this reason, that in me, as the foremost, Jesus Christ might display his perfect patience as an example to those who were to believe in him for eternal life" (1 Timothy 1:15-16).

Did you hear that? **As an example to those who would come after.** If even Saul could be forgiven, if even a persecutor of the church could become an apostle — **then no one is beyond the reach of grace.**

## What I Once Counted as Gain

In my letter to the Philippians, I wrote these words. Let me say them again now:

"But whatever gain I had, I counted as loss for the sake of Christ. Indeed, I count everything as loss because of the surpassing worth of knowing Christ Jesus my Lord. For his sake I have suffered the loss of all things and count them as rubbish, in order that I may gain Christ" (Philippians 3:7-8).

**Rubbish.**

My Pharisee credentials — rubbish. My education under Gamaliel — rubbish. My blameless record under the law — rubbish. Not because these things were bad in themselves, but because **when you use them as substitutes for Christ, they become the very barriers that keep you from knowing God.**

I once thought I stood in the light. In truth, I stood in darkness. That light knocked me down and blinded me — but the irony is, **only after I was blinded did I truly "see."**

## To Every "Devout Persecutor"

Brothers and sisters, if you are reading this —

Perhaps you do not persecute the church as I did. But perhaps you and I share a common problem: **you believe your own righteousness can save you.**

Perhaps you are a very good person. You follow the rules, do good deeds, never harm anyone. Your record, laid out for inspection, is "blameless." But do you have that peace in your heart? The peace that was sung by people in chains?

If not — perhaps, like Saul on the road to Damascus, you need to be struck down by that light.

Do not be afraid. **That light does not come to destroy you. It comes to save you.**

It will blind you for a time. It will shatter all your certainties. It will leave you sitting in darkness for a while. But when the scales fall from your eyes, you will see a brand new world — a world where you no longer need to stand on your own righteousness, a world **upheld entirely by grace.**

"Why are you persecuting me?" — perhaps today, the question is not about who you are persecuting, but about this: **What are you resisting?**

Are you resisting the admission that you cannot do it on your own? Are you resisting laying down your pride? Are you resisting a love greater than all your certainties?

Let go. Like me, fall down before that light.

And then you will hear Him call your name.

*"But I received mercy for this reason, that in me, as the foremost, Jesus Christ might display his perfect patience as an example to those who were to believe in him for eternal life." (1 Timothy 1:16)*

*May the Lord who shone His light on me on the Damascus road also shine His light into your heart — your brother, Paul*`,
  },
];
