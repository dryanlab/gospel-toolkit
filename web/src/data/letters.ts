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
  category: 'testimony' | 'theology' | 'fellowship' | 'to-you';
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
    scriptureText_zh: '人子来，为要寻找，拯救失丧的人。',
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

**"今天救恩到了这家了，因为他也是亚伯拉罕的子孙。人子来，为要寻找，拯救失丧的人。"**

"他**也是**亚伯拉罕的子孙。"

你们知道这句话对我意味着什么吗？全耶利哥城都把我当外人——税吏不算以色列人，跟外邦人一样污秽。**但耶稣说我是亚伯拉罕的子孙。** 祂把我被拿走的身份还给了我。

**"人子来，为要寻找，拯救失丧的人。"**

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

*"人子来，为要寻找，拯救失丧的人。"（路加福音 19:10）*

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
    date: '2026-03-07',
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

第二天，我开始害怕。不是怕死，也不是怕失去以撒，而是怕自己做错了——怕我听错了神的声音，怕这是一个错误。但我回想我这一生神对我说的每一句话，每一次他说了都算数，每一次他应许了都实现。我凭什么这一次不信他？

第三天，我看见了那座山。我对仆人说："你们同驴在这里等候，我与童子往那里去拜一拜，就回到你们这里来。"我说"我们回来"，复数。不是一个人回来，是两个人回来。我不知道神怎么做，但我知道我们会一起回来。这不是盲目的乐观，这是基于认识神的确信。

你知道吗？路上以撒一定问了我很多问题。十几岁的孩子总是有问不完的问题。"父亲，我们去哪里？""父亲，这座山是什么山？""父亲，为什么要走这么远去献祭？"每一个问题都像刀子扎在我心上。我一边回答，一边在心里祷告：神啊，你真的要这样做吗？

但我没有回头。因为我认识这位神已经二十五年了。他应许我后裔如星辰，他赐给我以撒，他从来没有说谎。如果他现在命令我把以撒献上，那他一定有我看不见的计划。

---

**父亲哪，请看，火与柴都有了，但燔祭的羊羔在那里呢？**

以撒背着柴，我拿着火和刀，父子二人同行。

以撒说："父亲哪！"

我说："我儿，我在这里。"

"请看，火与柴都有了，但燔祭的羊羔在那里呢？"

弟兄姐妹，我无法告诉你那一刻我心里是什么感受。我的儿子，我等了二十五年的儿子，用他天真无邪的眼睛看着我问：羊羔在哪里？

我说："我儿，神必自己预备作燔祭的羊羔。"

这句话，我说的时候不知道它是否会成真。我只是把我仅有的信心，压缩成了这一句话。

> "他们到了神所指示的地方，亚伯拉罕在那里筑坛，把柴摆好，捆绑他的儿子以撒，放在坛的柴上。亚伯拉罕就伸手拿刀，要杀他的儿子。"（创世记 22:9-10）

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

*爱你的弟兄，亚伯拉罕*`,
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

> "When they came to the place of which God had told him, Abraham built the altar there and laid the wood in order and bound Isaac his son and laid him on the altar, on top of the wood. Then Abraham reached out his hand and took the knife to slaughter his son." (Genesis 22:9-10, ESV)

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
    scripture: '诗篇 51:1-19',
    scriptureText_zh: '神所要的祭就是忧伤的灵；神啊，忧伤痛悔的心，你必不轻看。',
    scriptureText_en: 'The sacrifices of God are a broken spirit; a broken and contrite heart, O God, you will not despise.',
    summary_zh: '拿单指着我说"你就是那人"之后，我在碎裂中写下了最真实的一首诗——不是最好的诗，却是从最深的破碎中流出来的。',
    summary_en: 'After Nathan pointed at me and said "You are the man," I wrote the most honest psalm of my life from the depths of brokenness — not my finest poetry, but my truest.',
    tags: ['悔改', '恩典', '赦免', '更新'],
    content_zh: `## 亲爱的弟兄姐妹

我是大卫，耶西的儿子，以色列的王。

你们中间许多人知道我的名字，知道我写的诗篇，知道我是那个用机弦甩石打死歌利亚的少年，知道我被称为"合神心意的人"。但今天我要告诉你们的，不是那些光彩的故事。今天我要告诉你们的，是我一生中最黑暗的日子，也是最真实的日子——就是我写诗篇51的那一天。

我必须把这件事完完全全地告诉你们，因为我知道你们中间有些人正活在我当时的光景中：你犯了罪，你以为可以藏住，你在神面前假装一切都没有发生。弟兄姐妹，我大卫要告诉你——**藏不住的。**

## 那个春天的黄昏

事情发生在春天。列王出战的时候，我本应该在前线带领以色列的军队，但那一年，我留在了耶路撒冷。我把约押派了出去，自己却留在王宫里。这是第一个错误。但当时我不觉得这是错误——我是王，我当然可以选择留下。

一天傍晚，我从床上起来，在王宫的平顶上散步。就在那时，我看见了一个妇人在沐浴。她非常美丽。

弟兄姐妹，我不会详细描述接下来发生的事。你们可以去读撒母耳记下第11章。我只要说：我差人打听那妇人是谁。有人告诉我说："他是以连的女儿，赫人乌利亚的妻拔示巴。"（撒母耳记下11:3）

**她是有丈夫的妇人。而且她的丈夫是我最忠心的勇士之一。**

我知道律法怎么说。我从少年时代就背诵妥拉。"不可贪恋人的妻子。"（申命记5:21）这诫命我背得滚瓜烂熟。但那一刻，律法的声音被另一个声音盖住了——那是欲望的声音，是权力的声音，是"我是王，谁能拦阻我？"的声音。

我差人去，将她接来。我与她犯了罪。

## 用一个罪遮盖另一个罪

事情若是到这里就停住了，已经够可怕了。但罪从来不会停在一个地方。罪是有惯性的，一个罪会生出另一个罪，直到你被自己编织的网完全缠住。

拔示巴怀孕了。她差人来告诉我说："我怀了孕。"（撒母耳记下11:5）

我的第一个反应不是悔改，而是**掩盖**。

我派人把乌利亚从前线叫回来，想让他回家与妻子同房，好叫人以为孩子是他的。但乌利亚——这个我亏欠至深的人——他比我更有荣誉感。他说："约柜和以色列与犹大兵都住在棚里，我主约押和我主的仆人都在田野安营，我岂可回家吃喝、与妻子同寝呢？我敢在王面前起誓：我决不行这事！"（撒母耳记下11:11）

你们听到了吗？乌利亚在为神的约柜和以色列军队牵挂，不肯享受安逸。而我这个王，却躲在王宫里犯罪。他的忠诚和正直，在那一刻照出了我的卑鄙和虚伪。

我试了两次让他回家，他都不肯。我甚至把他灌醉，他还是没有回家，而是睡在王宫门前。

我走投无路了。不——不是走投无路。我本可以在那一刻停下来，到神面前认罪。但我选择了更黑暗的道路。

我写了一封信给元帅约押，叫乌利亚自己带去。信上写着："要派乌利亚前进，到阵势极险之处，你们便退后，使他被杀。"（撒母耳记下11:15）

**我用忠心人自己的手递上了他的死刑判决书。**

弟兄姐妹，我写到这里的时候手在发抖。这是我一生中最大的耻辱。我不只是犯了不忠的罪——我成了一个杀人犯。我借着亚扪人的刀，杀了一个无辜的、忠心于我的人。

乌利亚死了。我把拔示巴接到王宫，娶她为妻。在外人看来，一切都安排妥当了。王娶了一个阵亡将士的遗孀——多么仁慈。

**但耶和华的眼睛从不闭上。**

圣经记着说："但大卫所行的这事，耶和华甚不喜悦。"（撒母耳记下11:27）

## 那将近一年的日子

从犯罪到拿单来见我，中间过了将近一年的时间。在这将近一年里，我过着什么样的日子？从外面看，我仍然是以色列的王，仍然坐在宝座上，仍然处理国事，仍然——或许——还在圣殿里敬拜。

但里面呢？

后来我在诗篇32篇里写道：

> "我闭口不认罪的时候，因终日唉哼而骨头枯干。黑夜白日，你的手在我身上沉重；我的精液耗尽，如同夏天的干旱。"（诗篇32:3-4）

**神的手在我身上沉重。** 不是因为神在惩罚我——虽然惩罚也来了——而是因为圣灵在我里面，不让我安宁。祂不容许我在罪中舒舒服服地活着。

我白天坐在宝座上审判百姓的案件，心里却知道自己是最该受审判的那个人。我夜里躺在床上，黑暗中乌利亚的面容在我眼前浮现。我听到他说："我决不行这事！"——他连回家睡一夜都不肯，而我夺了他的妻子、取了他的性命。

有些人以为，只要没被抓住，罪就不算什么。弟兄姐妹，我以亲身经历告诉你们：**被神的灵追赶，比被全世界的人追赶更可怕。** 因为你无处可逃。你可以骗过所有人，但你骗不过那位鉴察人心肺腑的神。

那将近一年，是我一生中最漫长的日子。每一天都像一年。

## "你就是那人！"

然后拿单来了。

先知拿单奉耶和华的差遣来到我面前。他没有直接指控我。他给我讲了一个故事——一个富人有许多牛羊，却夺了穷人唯一的小羊羔的故事。

我听了大怒，对拿单说："我指着永生的耶和华起誓，行这事的人该死！他必偿还羊羔四倍。"（撒母耳记下12:5-6）

**我用自己的口定了自己的罪。**

然后拿单看着我的眼睛，说出了那句话——那句像雷一样击穿我灵魂的话：

> "你就是那人！"（撒母耳记下12:7）

弟兄姐妹，我不知道该怎么向你们描述那一刻。那不只是一个人在指控我。那是永生神借着祂仆人的口，撕开了我伪装了将近一年的面具。那五个字——"你就是那人"——像一把刀，刺穿了我所有的借口、所有的伪装、所有的自我欺骗。

拿单继续说。耶和华如此说：我膏你作以色列的王，救你脱离扫罗的手。我将你主人的家业赐给你……你若还以为不足，我早就加倍地赐给你。你为什么藐视耶和华的命令，行祂眼中看为恶的事呢？

每一句话都像炭火落在我头上。神给了我一切——王位、权柄、财富、安全——**我却仍然不满足。** 我藐视了那位把一切赐给我的神。

那一刻，所有的伪装都碎了。王的尊严碎了。自我辩护碎了。将近一年来苦苦维持的假面碎了。

我只说了一句话："我得罪耶和华了！"（撒母耳记下12:13）

不是"我犯了一个错误"。不是"情况很复杂"。不是"这事也不能全怪我"。只是七个字：**我得罪耶和华了。**

拿单对我说："耶和华已经除掉你的罪，你必不至于死。"

弟兄姐妹，请注意——这不是因为我的悔改有多好、多深、多真诚。这完全是因为耶和华的恩典。是祂选择赦免。是祂除掉了我的罪。悔改是祂赐给我的礼物，赦免更是。

**但罪的后果并没有被免除。** 拿单告诉我，我与拔示巴所生的孩子必定要死。刀剑必永不离开我的家。这些都一一应验了。神赦免了我的罪，但祂没有免除罪的管教。这也是出于祂的爱——"因为主所爱的，他必管教。"（希伯来书12:6）

## 写诗篇51的那一天

拿单走后，我关上门，独自面对耶和华。

那是我一生中写得最慢的一首诗。每一个字都是从我碎裂的灵魂深处挤出来的，沾满了眼泪。

我没有用华丽的词藻。我没有像写其他诗篇那样精心设计结构和韵律。我只是跪在地上，把心里最真实的呼求倾倒在神面前。

我写下的第一句话是：

> "神啊，求你按你的慈爱怜恤我！按你丰盛的慈悲涂抹我的过犯！"（诗篇51:1）

注意，我没有说"按我的功劳怜恤我"。我没有说"看在我过去打败歌利亚的份上"。我没有说"因为我是合你心意的人"。**我唯一能呼求的根基，是神自己的慈爱和慈悲。**

> "求你将我的罪孽洗除净尽，并洁除我的罪！"（诗篇51:2）

"洗除净尽"——我用了一个洗衣服的词。就像妇人在河边使劲搓洗脏衣服一样。我的罪不是轻轻擦一下就能去掉的污点，那是渗透到纤维里的污秽，需要反反复复地洗、彻底地洗。

> "因为，我知道我的过犯；我的罪常在我面前。"（诗篇51:3）

将近一年来，我试图不去看我的罪。我假装它不存在。但现在面具碎了，我不再逃避。我的罪就在那里，**常在我面前**，每时每刻。

然后我写出了也许是整首诗中最让人困惑、却又最深刻的一句话：

> "我向你犯罪，惟独得罪了你；在你眼前行了这恶，以致你责备我的时候显为公义，判断我的时候显为清正。"（诗篇51:4）

"惟独得罪了你"——有人会问：大卫，你不是也得罪了拔示巴吗？不是也得罪了乌利亚吗？不是也得罪了整个以色列吗？

是的。我得罪了他们每一个人。但我在这里要说的是一个更深的真理：**一切罪的本质，都是得罪神。** 是祂的律法被违背了。是祂的形象被玷污了。是祂的圣洁被亵渎了。当我伤害拔示巴和乌利亚的时候，我伤害的是按照神形象被造的人。我所有的罪，最终都指向那位圣洁的神。

而且，我说"以致你责备我的时候显为公义"——我不是在为自己辩护，我是在说：**神啊，无论你怎么审判我，你都是对的。** 我完全接受你的判决。你若要灭我，你也是公义的。

> "我是在罪孽里生的，在我母亲怀胎的时候就有了罪。"（诗篇51:5）

这不是在怪我母亲。这是我终于认识到一个深刻的真理：我的问题不只是那一次犯罪，**我的问题是我整个人都是败坏的。** 从母腹中出来，我就带着罪性。我在王宫平顶上的跌倒，不是偶然的失足，而是我堕落本性的必然流露。

这就是为什么单靠自己的努力永远不够。改革不够。立志不够。发誓以后不再犯不够。**我需要的不是改良，而是重造。**

所以我写下了这首诗的核心：

> "神啊，求你为我造清洁的心，使我里面重新有正直的灵。"（诗篇51:10）

"造"——我用了创世记第一章的那个词。只有神能从无到有地创造。我需要的是一颗全新的心，不是修补过的旧心。只有那位说"要有光，就有了光"的神，才能在我黑暗的心里重新创造光明。

> "不要丢弃我，使我离开你的面；不要从我收回你的圣灵。"（诗篇51:11）

这是我最深的恐惧。不是怕失去王位——王位算什么？不是怕死——死也许是解脱。我最怕的是**失去神的同在**。我见过扫罗的下场。耶和华的灵离开了他，他就变成了另一个人——被恐惧和嫉妒吞噬。我跪在地上恳求：神啊，不要像离开扫罗一样离开我！

> "求你使我仍得救恩之乐，赐我乐意的灵扶持我。"（诗篇51:12）

"仍得"——说明我曾经有过。在犯罪之前，我心中有救恩的喜乐。在那些年少牧羊的日子里，我仰望星空赞美造物主，心中满是喜乐。在约柜前跳舞的那天，我有说不出的欢喜。但罪把这一切都夺走了。将近一年来，我的心像一片荒漠。现在我恳求神把那喜乐还给我。

> "神所要的祭就是忧伤的灵；神啊，忧伤痛悔的心，你必不轻看。"（诗篇51:17）

这是我在写这首诗时领悟到的最重要的真理，也是我最想告诉你们的话。

我是王。我可以献上成千上万的牛羊。我可以在圣殿里烧最昂贵的香。但神不需要这些。**神要的是碎裂的心。** 不是完美的宗教表演，不是华丽的敬拜仪式，不是一长串属灵的履历表。只是一颗在祂面前完全破碎、完全诚实、完全放弃自我辩护的心。

弟兄姐妹，这是给所有跌倒之人的盼望。你不需要先把自己修好再来到神面前。你不需要先攒够功德再来祈求赦免。**你只需要带着你那颗碎裂的、忧伤的、痛悔的心来——祂必不轻看。**

## 这不是故事的结局

我必须诚实地告诉你们：写完诗篇51并不意味着一切就好了。

罪被赦免了，但后果仍在。我与拔示巴所生的第一个孩子还是死了。我为他禁食祷告了七天，趴在地上求神留下这孩子的命。但孩子还是死了。

后来，我的家中发生了可怕的事——我的儿子暗嫩玷辱了他的妹妹他玛，我的儿子押沙龙杀了暗嫩，后来押沙龙又起来叛变，要夺我的王位。我赤脚逃出耶路撒冷，在橄榄山上一边走一边哭。

刀剑果然没有离开我的家。每一次家中的灾难，都让我想起拿单的话，想起我的罪。

但我也要告诉你们：**在这一切苦难中，神没有离开我。** 祂没有收回祂的圣灵。祂管教我，但祂没有丢弃我。祂用苦难磨炼我，使我更加认识自己的软弱和祂的恩典。

后来，神赐给我和拔示巴另一个儿子——所罗门。耶和华爱他，差遣先知拿单给他起名叫耶底底亚，意思是"耶和华所爱的"。你们看到了吗？**神在我最大的失败之处，赐下了最大的祝福。** 弥赛亚的家谱，就从所罗门这一脉传下去。这不是因为我配得，这完全是恩典。

## 给今天跌倒之人的话

弟兄姐妹，我知道你们中间有些人正在经历我所经历的。也许你犯了一个你以为自己永远不会犯的罪。也许你正在费尽心力地掩盖。也许你已经被拿住了，正在经历羞耻和绝望。也许你觉得自己再也没有脸来到神面前了。

我大卫对你说：**来吧。带着你碎裂的心来。**

不要像我一样浪费将近一年的时间在掩盖和自欺中。你越早来到神面前认罪，你越早得到释放。

不要以为你的罪太大，大到神不能赦免。我犯了奸淫，又犯了谋杀，神尚且赦免了我。不是因为我是大卫——是因为祂是耶和华，"有怜悯有恩典的神，不轻易发怒，并有丰盛的慈爱和诚实"（出埃及记34:6）。

不要以为你可以靠自己的努力修补。你需要的是被重造，不是被修补。只有圣灵能在你里面造清洁的心，重新赐给你正直的灵。

也不要以为悔改只是一时的情绪。真正的悔改是圣灵的工作。它不只是让你为后果感到害怕，而是让你为得罪了圣洁的神而忧伤。它不只是让你说"对不起"，而是让你的生命有真实的转变。

诗篇51不是我写过的最华丽的诗。它没有诗篇23的宁静之美，没有诗篇19的壮丽颂赞，没有诗篇8的宇宙视野。但它是我写过的**最真实的诗**。因为它是从最深的破碎中流出来的。

弟兄姐妹，请记住这句话：

> "神所要的祭就是忧伤的灵；神啊，忧伤痛悔的心，你必不轻看。"（诗篇51:17）

你那颗碎裂的心，在神眼中比千万只公羊、比万道江河的油更宝贵。因为碎裂的心是谦卑的心，是不再倚靠自己的心，是完全仰望恩典的心。

愿那位怜恤我的神，也同样怜恤你。愿祂为你造清洁的心，使你里面重新有正直的灵。愿祂不丢弃你，不收回祂的圣灵，使你仍得救恩之乐。

*愿恩惠平安归与你们——*

*爱你的弟兄，大卫*`,
    content_en: `## Dear Brothers and Sisters

I am David, son of Jesse, king of Israel.

Many of you know my name. You know the psalms I wrote, the giant I slew with a sling and a stone, and that I was called "a man after God's own heart." But what I must tell you today is not one of those glorious stories. Today I must tell you about the darkest day of my life — and the most honest — the day I wrote Psalm 51.

I must tell you this story in full, because I know some of you are living in the same condition I was in: you have sinned, you think you can hide it, and you are pretending before God that nothing has happened. Brothers and sisters, I, David, tell you — **it cannot be hidden.**

## That Spring Evening

It happened in the spring. At the time when kings go out to battle, I should have been at the front leading the armies of Israel. But that year, I stayed behind in Jerusalem. I sent Joab out and remained in the palace. This was the first mistake. But at the time, I did not see it as one — I was the king; surely I could choose to stay.

One evening I rose from my bed and walked on the roof of the palace. It was then that I saw a woman bathing. She was very beautiful.

Brothers and sisters, I will not describe in detail what happened next. You may read 2 Samuel chapter 11 for yourselves. I will say only this: I sent and inquired about the woman. And someone told me, "Is not this Bathsheba, the daughter of Eliam, the wife of Uriah the Hittite?" (2 Samuel 11:3)

**She was a married woman. And her husband was one of my most loyal warriors.**

I knew what the law said. I had memorized the Torah since my youth. "You shall not covet your neighbor's wife" (Deuteronomy 5:21). I knew this commandment by heart. But in that moment, the voice of the law was drowned out by another voice — the voice of desire, the voice of power, the voice that said, "I am the king; who can stop me?"

I sent messengers and took her. I sinned against her.

## Covering One Sin with Another

If things had stopped there, it would have been terrible enough. But sin never stays in one place. Sin has momentum — one sin begets another, until you are completely entangled in the web you yourself have woven.

Bathsheba became pregnant. She sent word to me: "I am pregnant" (2 Samuel 11:5).

My first response was not repentance, but **concealment**.

I called Uriah back from the front, hoping he would go home and lie with his wife, so that people would think the child was his. But Uriah — this man to whom I owed an immeasurable debt — had more honor than I did. He said, "The ark and Israel and Judah dwell in booths, and my lord Joab and the servants of my lord are camping in the open field. Shall I then go to my house, to eat and to drink and to lie with my wife? As you live, and as your soul lives, I will not do this thing" (2 Samuel 11:11).

Did you hear that? Uriah was concerned for the ark of God and the army of Israel, refusing to enjoy comfort. Meanwhile, I, the king, was hiding in my palace committing sin. His loyalty and integrity exposed my depravity and hypocrisy in that moment.

I tried twice to make him go home. He would not. I even got him drunk, and still he did not go home, but slept at the entrance of the palace.

I was desperate. No — I was not truly desperate. I could have stopped at that moment and confessed my sin before God. But I chose a darker path.

I wrote a letter to Joab, the commander of the army, and sent it by Uriah's own hand. The letter said: "Set Uriah in the forefront of the hardest fighting, and then draw back from him, that he may be struck down and die" (2 Samuel 11:15).

**I used a faithful man's own hand to deliver his death sentence.**

Brothers and sisters, my hand trembles as I write this. This is the greatest shame of my life. I was not merely guilty of unfaithfulness — I became a murderer. By the sword of the Ammonites, I killed an innocent man who was loyal to me.

Uriah died. I took Bathsheba into the palace and made her my wife. To the outside world, everything was neatly arranged. The king had married a fallen soldier's widow — how merciful.

**But the eyes of the LORD never close.**

Scripture records: "But the thing that David had done displeased the LORD" (2 Samuel 11:27).

## The Year That Followed

From the time of my sin until Nathan came to me, nearly a year passed. What kind of life did I live during that year? From the outside, I was still the king of Israel, still sitting on my throne, still governing the nation, still — perhaps — worshiping in the tabernacle.

But on the inside?

I later wrote in Psalm 32:

> "For when I kept silent, my bones wasted away through my groaning all day long. For day and night your hand was heavy upon me; my strength was dried up as by the heat of summer." (Psalm 32:3-4)

**The hand of God was heavy upon me.** Not because God was punishing me — though punishment did come — but because the Holy Spirit within me would not let me rest. He would not allow me to live comfortably in my sin.

By day I sat on my throne judging the cases of the people, knowing in my heart that I was the one who most deserved judgment. By night I lay on my bed, and in the darkness Uriah's face appeared before me. I heard him say, "I will not do this thing!" — he would not even go home to sleep for one night, and I had taken his wife and his life.

Some people think that if you are not caught, sin does not matter. Brothers and sisters, I tell you from personal experience: **being pursued by the Spirit of God is more terrifying than being pursued by the entire world.** For there is nowhere to flee. You can deceive everyone, but you cannot deceive the One who searches hearts and minds.

That year was the longest of my life. Every day felt like a year.

## "You Are the Man!"

Then Nathan came.

The prophet Nathan came to me, sent by the LORD. He did not accuse me directly. He told me a story — a rich man with many flocks and herds who took the only lamb of a poor man.

I burned with anger and said to Nathan, "As the LORD lives, the man who has done this deserves to die! He shall restore the lamb fourfold" (2 Samuel 12:5-6).

**With my own mouth, I condemned myself.**

Then Nathan looked me in the eyes and spoke the words that struck my soul like thunder:

> "You are the man!" (2 Samuel 12:7)

Brothers and sisters, I do not know how to describe that moment to you. It was not merely a man accusing me. It was the living God, through the mouth of His servant, tearing off the mask I had worn for nearly a year. Those four words — "You are the man" — were like a sword, piercing through all my excuses, all my pretenses, all my self-deception.

Nathan continued. Thus says the LORD, the God of Israel: I anointed you king over Israel, and I delivered you out of the hand of Saul. I gave you your master's house... And if this were too little, I would add to you as much more. Why have you despised the word of the LORD, to do what is evil in His sight?

Every word fell like burning coals upon my head. God had given me everything — the throne, authority, wealth, safety — **and still I was not satisfied.** I had despised the God who gave me all things.

In that moment, all pretense shattered. The king's dignity shattered. Self-justification shattered. The facade I had painstakingly maintained for nearly a year shattered.

I said only one thing: "I have sinned against the LORD" (2 Samuel 12:13).

Not "I made a mistake." Not "It's complicated." Not "It wasn't entirely my fault." Just six words: **I have sinned against the LORD.**

Nathan said to me, "The LORD also has put away your sin; you shall not die."

Brothers and sisters, please note — this was not because my repentance was so good, so deep, or so sincere. It was entirely because of the grace of the LORD. It was He who chose to forgive. It was He who put away my sin. Repentance was a gift He gave me, and forgiveness even more so.

**But the consequences of sin were not removed.** Nathan told me that the child born to me and Bathsheba would surely die. The sword would never depart from my house. These things all came to pass. God forgave my sin, but He did not remove its discipline. This too was from His love — "For the Lord disciplines the one he loves" (Hebrews 12:6).

## The Day I Wrote Psalm 51

After Nathan left, I shut the door and faced the LORD alone.

It was the slowest psalm I ever wrote. Every word was squeezed from the depths of my shattered soul, drenched in tears.

I did not use elegant language. I did not carefully design the structure and meter as I had with other psalms. I simply knelt on the ground and poured out the most honest cry of my heart before God.

The first words I wrote were:

> "Have mercy on me, O God, according to your steadfast love; according to your abundant mercy blot out my transgressions!" (Psalm 51:1)

Notice: I did not say "have mercy on me according to my merits." I did not say "for the sake of my killing Goliath." I did not say "because I am a man after your heart." **The only ground on which I could cry out was God's own steadfast love and mercy.**

> "Wash me thoroughly from my iniquity, and cleanse me from my sin!" (Psalm 51:2)

"Wash me thoroughly" — I used a word for laundering clothes, like a woman scrubbing dirty garments at the river. My sin was not a light stain that could be wiped away with a quick touch. It was filth soaked into the very fibers, requiring thorough, repeated washing.

> "For I know my transgressions, and my sin is ever before me." (Psalm 51:3)

For nearly a year I had tried not to look at my sin. I pretended it did not exist. But now the mask was shattered, and I fled no longer. My sin was right there — **ever before me** — every moment.

Then I wrote perhaps the most puzzling yet most profound line of the entire psalm:

> "Against you, you only, have I sinned and done what is evil in your sight, so that you may be justified in your words and blameless in your judgment." (Psalm 51:4)

"Against you only" — some will ask: David, did you not also sin against Bathsheba? Against Uriah? Against all Israel?

Yes. I sinned against every one of them. But what I am saying here is a deeper truth: **all sin, in its essence, is sin against God.** It is His law that was broken. It is His image that was defiled. It is His holiness that was profaned. When I harmed Bathsheba and Uriah, I harmed people made in God's image. All my sin ultimately points to the Holy God.

Moreover, when I said "so that you may be justified in your words" — I was not defending myself. I was saying: **God, however you judge me, you are right.** I fully accept your verdict. If you were to destroy me, you would be just.

> "Behold, I was brought forth in iniquity, and in sin did my mother conceive me." (Psalm 51:5)

This is not blaming my mother. This is my finally recognizing a profound truth: my problem was not just that one act of sin — **my problem is that my entire being is corrupt.** From my mother's womb I carried a sinful nature. My fall on the palace rooftop was not an accidental stumble but the inevitable expression of my fallen nature.

This is why self-effort will never be enough. Reform is not enough. Resolution is not enough. Swearing never to do it again is not enough. **What I need is not renovation, but re-creation.**

And so I wrote the heart of this psalm:

> "Create in me a clean heart, O God, and renew a right spirit within me." (Psalm 51:10)

"Create" — I used the same word from Genesis chapter 1. Only God can create something from nothing. What I need is an entirely new heart, not a patched-up old one. Only the One who said "Let there be light" and there was light can create light anew in my darkened heart.

> "Cast me not away from your presence, and take not your Holy Spirit from me." (Psalm 51:11)

This was my deepest fear. Not losing my throne — what is a throne? Not death — death might even be relief. What I feared most was **losing God's presence.** I had seen what happened to Saul. The Spirit of the LORD departed from him, and he became a different man — consumed by fear and jealousy. I knelt and pleaded: God, do not leave me as you left Saul!

> "Restore to me the joy of your salvation, and uphold me with a willing spirit." (Psalm 51:12)

"Restore" — meaning I once had it. Before my sin, I had the joy of salvation. In those youthful days of shepherding, I gazed at the stars and praised the Creator with a heart full of joy. On the day I danced before the ark, I had inexpressible gladness. But sin took it all away. For nearly a year my heart had been a desert. Now I pleaded with God to give that joy back to me.

> "The sacrifices of God are a broken spirit; a broken and contrite heart, O God, you will not despise." (Psalm 51:17)

This is the most important truth I grasped while writing this psalm, and the one I most want to share with you.

I am a king. I could offer thousands upon thousands of rams. I could burn the most expensive incense in the tabernacle. But God does not need these things. **What God desires is a broken heart.** Not a flawless religious performance, not a spectacular worship service, not a long résumé of spiritual accomplishments. Simply a heart that is completely broken before Him, completely honest, and has completely given up self-justification.

Brothers and sisters, this is the hope for all who have fallen. You do not need to fix yourself before coming to God. You do not need to accumulate enough merit before asking for forgiveness. **You need only bring your broken, sorrowful, contrite heart — He will not despise it.**

## This Is Not the End of the Story

I must be honest with you: writing Psalm 51 did not mean everything was suddenly fine.

The sin was forgiven, but the consequences remained. The first child born to me and Bathsheba still died. I fasted and prayed for him for seven days, lying on the ground, begging God to spare the child's life. But the child still died.

Later, terrible things happened in my house — my son Amnon violated his sister Tamar, my son Absalom killed Amnon, and then Absalom rose up in rebellion to seize my throne. I fled Jerusalem barefoot, weeping as I climbed the Mount of Olives.

The sword indeed never departed from my house. Every calamity within my family reminded me of Nathan's words, reminded me of my sin.

But I must also tell you: **through all this suffering, God did not leave me.** He did not take back His Holy Spirit. He disciplined me, but He did not cast me away. He refined me through suffering, causing me to know more deeply my own weakness and His grace.

Later, God gave Bathsheba and me another son — Solomon. The LORD loved him and sent the prophet Nathan to name him Jedidiah, meaning "beloved of the LORD." Do you see? **God bestowed His greatest blessing at the very site of my greatest failure.** The lineage of the Messiah would come down through Solomon. Not because I deserved it — this was pure grace.

## A Word to Those Who Have Fallen Today

Brothers and sisters, I know that some of you are experiencing what I experienced. Perhaps you have committed a sin you thought you would never commit. Perhaps you are exhausting every effort to cover it up. Perhaps you have already been found out and are now drowning in shame and despair. Perhaps you feel you can never again show your face before God.

I, David, say to you: **Come. Bring your broken heart and come.**

Do not waste nearly a year, as I did, in concealment and self-deception. The sooner you come before God to confess, the sooner you will find freedom.

Do not think your sin is too great for God to forgive. I committed adultery and murder, and God forgave even me. Not because I am David — but because He is the LORD, "a God merciful and gracious, slow to anger, and abounding in steadfast love and faithfulness" (Exodus 34:6).

Do not think you can repair things by your own effort. What you need is to be re-created, not repaired. Only the Holy Spirit can create a clean heart within you and renew a right spirit within you.

And do not think that repentance is merely a momentary emotion. True repentance is the work of the Holy Spirit. It does not merely make you afraid of consequences — it makes you grieve because you have offended a holy God. It does not merely make you say "I'm sorry" — it brings about genuine transformation in your life.

Psalm 51 is not the most beautiful psalm I ever wrote. It does not have the serene beauty of Psalm 23, or the majestic praise of Psalm 19, or the cosmic vision of Psalm 8. But it is the **most honest psalm** I ever wrote — because it flowed from the deepest brokenness.

Brothers and sisters, remember this verse:

> "The sacrifices of God are a broken spirit; a broken and contrite heart, O God, you will not despise." (Psalm 51:17)

Your broken heart is more precious in God's sight than ten thousand rams, than ten thousand rivers of oil. For a broken heart is a humble heart, a heart that no longer relies on itself, a heart that looks entirely to grace.

May the God who had mercy on me likewise have mercy on you. May He create in you a clean heart and renew a right spirit within you. May He not cast you away, nor take His Holy Spirit from you, and may He restore to you the joy of His salvation.

*Grace and peace be with you —*

*Your brother who loves you, David*`,
  },
  {
    id: 'ruth-gleaning',
    author: '路得',
    authorEn: 'Ruth',
    authorAvatar: '🌾',
    authorBio: '摩押的女子，波阿斯的妻子，大卫的曾祖母',
    authorBioEn: 'A Moabite woman, wife of Boaz, great-grandmother of David',
    title_zh: '你的国就是我的国',
    title_en: 'Your People Shall Be My People',
    date: '2026-03-21',
    category: 'testimony',
    scripture: '路得记 1:16-17',
    scriptureText_zh: '路得说：不要催我回去不跟随你。你往哪里去，我也往那里去；你在哪里住宿，我也在那里住宿；你的国就是我的国，你的神就是我的神。',
    scriptureText_en: `But Ruth said, Do not urge me to leave you or to return from following you. For where you go I will go, and where you lodge I will lodge. Your people shall be my people, and your God my God.`,
    summary_zh: `一个摩押外邦女子，因信离开故土跟随婆婆的神，经历恩典的拾穗、救赎者的遮盖，最终被纳入基督的家谱——证明神的恩典超越一切界限。`,
    summary_en: `A Moabite woman who by faith left her homeland to follow her mother-in-law's God, experienced grace in the gleaning fields and the covering of a kinsman-redeemer, and was ultimately grafted into the genealogy of Christ—proof that God's grace transcends every boundary.`,
    tags: ['testimony', 'redemption', 'faith', 'grace'],
    content_zh: `
## 你的国就是我的国

亲爱的弟兄姐妹：

我是路得，摩押的女子。你们或许听过我的名字，因为神的恩典，我的名字竟被记在那位弥赛亚的家谱之中。但在那之前，我不过是一个外邦的寡妇，一个按着律法被排除在耶和华会中的人。

> "亚扪人或是摩押人不可入耶和华的会；他们的子孙，虽过十代，也永不可入耶和华的会。"（申命记 23:3）

这就是律法对我民族的定论。十代，永不——这是何等决绝的话语。若有人告诉年轻时的我，说将来有一天，以色列的神会成为我的神，以色列的民会成为我的民，我一定以为那是痴人说梦。然而，恩典的奇妙正在于此——它不被人的功德所赚取，也不被人的出身所限制。恩典，是那位至高者白白赐下的礼物。

### 一、摩押地的岁月：在黑暗中的预备

我生在摩押地，那是一个拜基抹的地方。我们的祖先不认识耶和华，我从小所知道的，只有偶像和虚空的祭祀。那时候，从伯利恒来了一家人——以利米勒、拿俄米，和他们的两个儿子玛伦、基连。他们因为饥荒离开了犹大地，寄居在我们中间。

我嫁给了玛伦。那段日子虽然短暂，却是我第一次从拿俄米口中听见耶和华的名。她讲述的不是一个遥远的、冰冷的神明，而是一位与祂百姓立约的神，一位在旷野中引导他们、在红海中为他们开路的神。我心中有什么东西被触动了，虽然那时我还不能完全明白。

然而苦难接踵而至。先是以利米勒去世，接着玛伦和基连也死了。三个寡妇，在那个时代，几乎等同于三个没有盼望的人。拿俄米要回伯利恒去，她对我和俄珥巴说：

> "你们各人回娘家去罢。愿耶和华恩待你们，像你们恩待已死的人与我一样！"（路得记 1:8）

俄珥巴哭着亲嘴离去了。我不怪她。从人的角度看，她做了最理性的选择——回到自己的民族，回到自己的神明，回到或许还有重新嫁人之可能的地方。拿俄米也催促我跟着回去。

但我不能。

### 二、那条路上的抉择：信心的告白

弟兄姐妹，我要你们明白，那不是一时冲动的决定。我知道跟随拿俄米意味着什么——意味着离开我所认识的一切，去到一个陌生的国度，成为一个被人轻看的外邦寡妇。摩押女子在以色列人眼中算什么呢？律法明明写着，我们不可入耶和华的会。

可是，有一件事我比什么都确定：拿俄米所信的那位神，是又真又活的。不是基抹，不是摩押地那些用人手雕刻的偶像，而是那位创造天地、呼召亚伯拉罕、领以色列人出埃及的耶和华——祂才是真神。

所以我说了那句话，那句从我心灵最深处涌出来的话：

> "不要催我回去不跟随你。你往哪里去，我也往那里去；你在哪里住宿，我也在那里住宿；你的国就是我的国，你的神就是我的神。你在哪里死，我也在那里死，也葬在那里。除非死能使你我相离！不然，愿耶和华重重地降罚与我。"（路得记 1:16-17）

这不只是对婆婆的忠诚，这是一个信仰的告白。"你的神就是我的神"——我在那一刻，把自己完全交给了耶和华。我不知道前面的路会怎样，不知道伯利恒的人会怎样看我，不知道明天的饭食从哪里来。但我知道，这位神是信实的。

弟兄姐妹，信心从来不是在一切都确定之后才迈出的脚步。信心，是在看不见的时候仍然跟随。正如后来你们的使徒所写的：

> "信就是所望之事的实底，是未见之事的确据。"（希伯来书 11:1）

我那时不知道这句话，但我活出了它。

### 三、伯利恒的田间：恩典的拾穗

我们到了伯利恒，正是收割大麦的时候。拿俄米的心是苦的，她对那些认出她的妇人说：

> "不要叫我拿俄米，要叫我玛拉，因为全能者使我受了大苦。我满满地出去，耶和华使我空空地回来。"（路得记 1:20-21）

拿俄米的意思是"甜"，玛拉的意思是"苦"。她觉得神的手重重地压在她身上。弟兄姐妹，你们中间有没有人也经历过这样的时刻？觉得神似乎远离了，生活从甜变成了苦？我要告诉你们，拿俄米那时还不知道，神正在暗中为她编织一个何等奇妙的故事。苦难不是故事的结局，而是恩典的序曲。

为了活下去，我去田间拾穗。律法中有一条恩典的律例：

> "你在田间收割庄稼，若忘下一捆，不可回去再取，要留给寄居的与孤儿寡妇。"（申命记 24:19）

看哪，那同一部律法，一面说摩押人不可入耶和华的会，另一面却为寄居者和寡妇留下了恩典的余地。这岂不正显明了神的心意吗？律法显出人的罪和不配，恩典却为罪人开了一条路。

我"恰巧"到了波阿斯的田里——但在神的护理中，没有"恰巧"这回事。波阿斯是以利米勒的亲族，是一个大财主。他看见我，问起我的来历，然后对我说了这些话：

> "自从你丈夫死后，凡你向婆婆所行的，并你离开父母和本地，到素不认识的民中，这些事人全都告诉我了。愿耶和华照你所行的赏赐你。你来投靠耶和华─以色列神的翅膀下，愿你满得他的赏赐。"（路得记 2:11-12）

我俯伏在地，叩拜他，说：

> "我既是外邦人，怎么蒙你的恩，这样顾恤我呢？"（路得记 2:10）

弟兄姐妹，"我虽然不及你的一个使女"——这是我真实的感受。我什么都不是，一个摩押的寡妇，一个在田间捡别人剩下的麦穗的外邦人。但波阿斯没有轻看我。他吩咐仆人故意从捆中抽出一些来留给我，他让我与他的使女们同坐，蘸饼在醋里吃。他对我的好，远远超过律法所要求的。

这就是恩典。恩典不是给你你所配得的，恩典是给你你完全不配得的。

### 四、打谷场的夜晚：求救赎者的遮盖

拿俄米看出了波阿斯的善意，她告诉我，波阿斯是我们至近的亲属——希伯来语叫גֹּאֵל（go'el），就是那有权利也有责任赎回亲族产业、娶亲族寡妇的人。拿俄米教我去打谷场，等波阿斯吃喝完毕躺下后，掀开他脚上的被，躺在那里。

我知道，在你们听来这或许很大胆。那确实是我一生中最勇敢的举动。那天夜里，我洗浴、抹膏、换上衣服，悄悄去了打谷场。到了半夜，波阿斯惊醒了，发现脚边躺着一个女人。

他问："你是谁？"

我回答说：

> "我是你的婢女路得。求你用你的衣襟遮盖我，因为你是我一个至近的亲属。"（路得记 3:9）

"用你的衣襟遮盖我"——这句话的分量远比表面所见的更深。波阿斯曾祝福我来投靠耶和华的翅膀（כָּנָף，kanaph），如今我求他用他的衣襟（同一个词כָּנָף）遮盖我。我是在说：你就是神回应你自己祷告的方式。你祝福我投靠神的翅膀，如今求你成为那翅膀。

波阿斯怎样回答我呢？

> "女儿啊，愿你蒙耶和华赐福。你末后的恩比先前更大；因为少年人无论贫富，你都没有跟从。女儿啊，现在不要惧怕，凡你所说的，我必照着行；我本城的人都知道你是个贤德的女子。"（路得记 3:10-11）

### 五、城门口的救赎：恩典成就律法

但事情还有一个波折。还有一个比波阿斯更近的亲属，按律法他有优先赎买的权利。波阿斯第二天一早就坐在城门口，招聚了十个长老，当众处理这件事。

那位至近的亲属起初愿意赎买以利米勒的地，但当听说还要娶摩押女子路得、为死人留后的时候，他退缩了：

> "这样我就不能赎了，恐怕于我的产业有碍。你可以赎我所当赎的，我不能赎了。"（路得记 4:6）

他脱了鞋交给波阿斯，这是以色列人从前作证的规矩。于是波阿斯在众长老面前宣告：

> "你们今日作见证，凡属以利米勒和基连、玛伦的，我都从拿俄米手中置买了；又娶了玛伦的妻摩押女子路得为妻，好在死人的产业上存留他的名。"（路得记 4:9-10）

弟兄姐妹，你们看到了吗？那个不愿付代价的至近亲属，像不像律法本身？律法能指出问题——这地需要被赎，这寡妇需要被照顾——但律法没有能力完成救赎。律法退缩了，说"我不能赎了"。

但波阿斯站出来了。他甘愿付代价，甘愿承担一切，甘愿把一个摩押女子接纳为自己的妻子。弟兄姐妹，这岂不正是基督所做的吗？律法不能救你们，律法只能显出你们的罪。但基督来了，祂是那真正的至近亲属（גֹּאֵל），祂用自己的血赎买了你们。

> "因那使人成圣的和那些得以成圣的，都是出于一。所以，他称他们为弟兄也不以为耻。"（希伯来书 2:11）

那位不以外邦罪人为耻的，就是你们的救赎主。

### 六、俄备得的啼哭：从苦到甜的翻转

后来，耶和华使我怀孕，我生了一个儿子。邻舍的妇人们给他起名叫俄备得，意思是"服事者"。她们对拿俄米说：

> "耶和华是应当称颂的！因为今日没有撇下你，使你无至近的亲属。愿这孩子在以色列中得名声。他必提起你的精神，奉养你的老，因为是爱慕你的那儿妇所生的。有这儿妇比有七个儿子还好！"（路得记 4:14-15）

看哪，那位曾说"叫我玛拉"的拿俄米，如今把孩子抱在怀中，成了他的养母（路得记 4:16）。苦变成了甜，空虚变成了丰盛，哀哭变成了喜乐。这不是因为我们做了什么配得的事，而是因为耶和华的慈爱永远长存。

而这个孩子——俄备得——他生了耶西，耶西生了大卫王。弟兄姐妹，你们想一想：一个摩押女子的后裔，竟成了以色列最伟大的君王的祖母。而大卫的子孙中，那位万王之王、万主之主，道成肉身的基督耶稣降生了。

> "耶西生大卫王。大卫从乌利亚的妻子生所罗门……雅各生约瑟，就是马利亚的丈夫，那称为基督的耶稣，是从马利亚生的。"（马太福音 1:6, 16）

而在这家谱中，马太特别记载了：

> "撒门从喇合氏生波阿斯；波阿斯从路得氏生俄备得。"（马太福音 1:5）

我的名字在那里。一个摩押女子的名字，在弥赛亚的家谱中。这不是因为我有什么功劳，而是恩典，完全是恩典。

### 七、致今日的弟兄姐妹：恩典超越一切界限

亲爱的弟兄姐妹，我写这封信给你们，是要告诉你们一件事：没有任何人在恩典的门外。

你或许觉得自己像我一样，是一个"外邦人"——不够资格、不够圣洁、出身不对、过去太糟。律法可能定了你的罪，世人可能给你贴了标签。但那位至高的神，祂的恩典超越律法的界限。祂接纳了我这个摩押女子，祂岂不也要接纳你吗？

你们的使徒保罗后来写道：

> "你们从前远离神的人，如今却在基督耶稣里，靠着他的血，已经得亲近了。"（以弗所书 2:13）

这正是我的故事——从远离到亲近，从被排斥到被接纳，从拾穗的寡妇到君王的祖母。

但请你们记住：恩典不是廉价的。我必须离开摩押地，必须放下旧有的一切——我的家乡、我的民族、我的偶像。跟随耶和华，意味着彻底的转向。信心不是在嘴上说说，信心是迈出脚步、走上那条未知的路。

你们如今跟随基督，也是如此。你们被呼召离开旧我，背起十字架。前路或许不明，但那位呼召你们的是信实的。正如波阿斯在打谷场上对我说"不要惧怕"，你们的主也对你们说：

> "不要怕，只要信！"（马可福音 5:36）

最后，我要感谢你们今天还记得我的故事。我不过是神宏大救恩叙事中的一个小角色，但神用一个摩押女子的一生，向世人宣告了一个永恒的真理：

**恩典，不看你从哪里来，只看你往哪里去——往那位救赎主的怀抱中去。**

愿你们都能像我一样说出："你的国就是我的国，你的神就是我的神。"愿那位至近的亲属——我们的主基督耶稣——用祂的衣襟遮盖你们每一个人。

在基督的恩典中，

你们的姐妹，摩押女子路得
`,
    content_en: `
## Your People Shall Be My People

Dear brothers and sisters,

I am Ruth, a woman of Moab. Perhaps you have heard my name, for by the grace of God it was inscribed in the genealogy of the Messiah Himself. But before that, I was nothing more than a foreign widow—one whom the law explicitly excluded from the assembly of the LORD.

> "No Ammonite or Moabite may enter the assembly of the LORD. Even to the tenth generation, none of them may enter the assembly of the LORD forever." (Deuteronomy 23:3)

This was the law's verdict upon my people. Ten generations, forever—how absolute those words are. If someone had told me in my youth that one day the God of Israel would become my God and the people of Israel would become my people, I would have thought it a fool's dream. Yet this is precisely the wonder of grace—it is not earned by human merit, nor limited by human origin. Grace is the free gift of the Most High.

### I. The Years in Moab: Preparation in Darkness

I was born in the land of Moab, a land that worshiped Chemosh. Our ancestors did not know the LORD. All I knew from childhood were idols and empty sacrifices. Then a family came from Bethlehem—Elimelech, Naomi, and their two sons Mahlon and Chilion. They had left the land of Judah because of famine to sojourn among us.

I married Mahlon. Those days were brief, yet it was through Naomi that I first heard the name of the LORD. She spoke not of a distant, cold deity, but of a God who made a covenant with His people—who led them through the wilderness and parted the Red Sea before them. Something stirred within my heart, though I could not fully understand it then.

Yet sorrow followed upon sorrow. First Elimelech died, then Mahlon and Chilion. Three widows—in that era, virtually three people without hope. Naomi resolved to return to Bethlehem. She said to me and Orpah:

> "Go, return each of you to her mother's house. May the LORD deal kindly with you, as you have dealt with the dead and with me." (Ruth 1:8)

Orpah kissed her and departed weeping. I do not blame her. From a human perspective, she made the most rational choice—returning to her own people, her own gods, and the possibility of remarriage. Naomi urged me to follow.

But I could not.

### II. The Choice on the Road: A Confession of Faith

Brothers and sisters, I want you to understand—this was not an impulsive decision. I knew what following Naomi would mean: leaving everything familiar, going to a strange land, becoming a despised foreign widow. What was a Moabite woman in the eyes of Israel? The law plainly stated that we could not enter the assembly of the LORD.

Yet one thing I knew more certainly than anything else: the God whom Naomi worshiped was the living and true God. Not Chemosh, not the hand-carved idols of Moab, but the LORD who created heaven and earth, who called Abraham, who brought Israel out of Egypt—He alone was the true God.

And so I spoke those words that welled up from the deepest place in my soul:

> "Do not urge me to leave you or to return from following you. For where you go I will go, and where you lodge I will lodge. Your people shall be my people, and your God my God. Where you die I will die, and there will I be buried. May the LORD do so to me and more also if anything but death parts me from you." (Ruth 1:16–17)

This was not merely loyalty to my mother-in-law. This was a confession of faith. "Your God my God"—in that moment I surrendered myself entirely to the LORD. I did not know what the road ahead would hold, how the people of Bethlehem would regard me, or where tomorrow's bread would come from. But I knew this God was faithful.

Brothers and sisters, faith has never been a step taken only after everything is certain. Faith is following when you cannot see. As your apostle later wrote:

> "Now faith is the assurance of things hoped for, the conviction of things not seen." (Hebrews 11:1)

I did not know those words then, but I lived them.

### III. The Fields of Bethlehem: Gleaning Grace

We arrived in Bethlehem at the beginning of the barley harvest. Naomi's heart was bitter. She told the women who recognized her:

> "Do not call me Naomi; call me Mara, for the Almighty has dealt very bitterly with me. I went away full, and the LORD has brought me back empty." (Ruth 1:20–21)

Naomi means "pleasant"; Mara means "bitter." She felt the hand of God pressing heavily upon her. Brothers and sisters, have any of you known such a season—when God seems distant, when life turns from sweet to bitter? Let me tell you: Naomi did not yet know that God was secretly weaving the most marvelous story on her behalf. Suffering was not the end of the story; it was the prelude to grace.

To survive, I went to glean in the fields. The law contained a gracious provision:

> "When you reap your harvest in your field and forget a sheaf in the field, you shall not go back to get it. It shall be for the sojourner, the fatherless, and the widow." (Deuteronomy 24:19)

Behold—the same law that barred Moabites from the LORD's assembly also left room for grace toward sojourners and widows. Does this not reveal God's very heart? The law exposes sin and unworthiness; grace opens a way for sinners.

I "happened" to come to the field of Boaz—but in God's providence, nothing "happens" by chance. Boaz was a relative of Elimelech, a man of great wealth. He saw me, inquired about me, and said:

> "All that you have done for your mother-in-law since the death of your husband has been fully told to me, and how you left your father and mother and your native land and came to a people that you did not know before. The LORD repay you for what you have done, and a full reward be given you by the LORD, the God of Israel, under whose wings you have come to take refuge!" (Ruth 2:11–12)

I fell on my face, bowing to the ground, and said:

> "Why have I found favor in your eyes, that you should take notice of me, since I am a foreigner?" (Ruth 2:10)

Brothers and sisters, "though I am not one of your servants"—this was my true feeling. I was nothing: a Moabite widow, gleaning leftover grain in someone else's field. Yet Boaz did not despise me. He commanded his servants to deliberately pull stalks from the bundles and leave them for me. He invited me to sit with his workers, to dip my bread in vinegar. His kindness went far beyond what the law required.

This is grace. Grace does not give you what you deserve. Grace gives you what you could never deserve.

### IV. The Night on the Threshing Floor: Seeking the Redeemer's Covering

Naomi discerned the kindness of Boaz and told me he was our kinsman-redeemer—in Hebrew, גֹּאֵל (go'el)—one who had both the right and the responsibility to redeem a relative's property and marry a relative's widow. Naomi instructed me to go to the threshing floor, and after Boaz had finished eating and drinking and lay down, to uncover his feet and lie there.

I know this may sound bold to you. It was indeed the most courageous act of my life. That night I washed, anointed myself, put on my cloak, and went quietly to the threshing floor. At midnight Boaz awoke with a start and found a woman lying at his feet.

He asked, "Who are you?"

I answered:

> "I am Ruth, your servant. Spread your wings over your servant, for you are a redeemer." (Ruth 3:9)

"Spread your wings over me"—these words carry far more weight than appears on the surface. Boaz had blessed me for taking refuge under the LORD's wings (כָּנָף, kanaph). Now I asked him to spread his wing (the same word, כָּנָף) over me. I was saying: You are God's answer to your own prayer. You blessed me to take refuge under God's wings; now I ask you to become those wings.

How did Boaz respond?

> "May you be blessed by the LORD, my daughter. You have made this last kindness greater than the first in that you have not gone after young men, whether poor or rich. And now, my daughter, do not fear. I will do for you all that you ask, for all my fellow townsmen know that you are a worthy woman." (Ruth 3:10–11)

### V. Redemption at the City Gate: Grace Fulfills the Law

But there was a complication. There was a nearer kinsman than Boaz who had the prior right of redemption. The very next morning Boaz sat at the city gate, gathered ten elders, and settled the matter publicly.

The nearer kinsman was at first willing to redeem Elimelech's land, but when he heard that he must also marry Ruth the Moabitess to raise up offspring for the dead, he withdrew:

> "I cannot redeem it for myself, lest I impair my own inheritance. Take my right of redemption yourself, for I cannot redeem it." (Ruth 4:6)

He drew off his sandal and gave it to Boaz—the custom of attestation in Israel. Then Boaz declared before all the elders:

> "You are witnesses this day that I have bought from the hand of Naomi all that belonged to Elimelech and all that belonged to Chilion and to Mahlon. Also Ruth the Moabite, the widow of Mahlon, I have bought to be my wife, to perpetuate the name of the dead in his inheritance." (Ruth 4:9–10)

Brothers and sisters, do you see it? The nearer kinsman who would not pay the price—is he not like the law itself? The law can identify the problem—the land needs redeeming, the widow needs caring for—but the law has no power to accomplish redemption. The law withdrew, saying, "I cannot redeem."

But Boaz stepped forward. He willingly paid the price, bore the full cost, and took a Moabite woman as his wife. Brothers and sisters, is this not precisely what Christ has done? The law cannot save you; it can only reveal your sin. But Christ came—He is the true kinsman-redeemer (גֹּאֵל), and He redeemed you with His own blood.

> "For he who sanctifies and those who are sanctified all have one source. That is why he is not ashamed to call them brothers." (Hebrews 2:11)

He who is not ashamed of foreign sinners—He is your Redeemer.

### VI. The Cry of Obed: From Bitter to Sweet

Then the LORD enabled me to conceive, and I bore a son. The women of the neighborhood named him Obed, meaning "servant." They said to Naomi:

> "Blessed be the LORD, who has not left you this day without a redeemer, and may his name be renowned in Israel! He shall be to you a restorer of life and a nourisher of your old age, for your daughter-in-law who loves you, who is more to you than seven sons, has given birth to him." (Ruth 4:14–15)

Behold—she who had said "Call me Mara" now held the child in her arms and became his nurse (Ruth 4:16). Bitterness turned to sweetness, emptiness to fullness, mourning to joy. Not because we had done anything worthy, but because the steadfast love of the LORD endures forever.

And this child—Obed—fathered Jesse, and Jesse fathered King David. Brothers and sisters, consider this: the descendant of a Moabite woman became the grandmother of Israel's greatest king. And from David's line, the King of kings and Lord of lords, Christ Jesus, was born in the flesh.

> "And Jesse the father of David the king. And David was the father of Solomon by the wife of Uriah… and Jacob the father of Joseph the husband of Mary, of whom Jesus was born, who is called Christ." (Matthew 1:6, 16)

And in this genealogy, Matthew specifically recorded:

> "And Salmon the father of Boaz by Rahab, and Boaz the father of Obed by Ruth." (Matthew 1:5)

My name is there. A Moabite woman's name, in the genealogy of the Messiah. Not because of any merit of mine, but grace—entirely grace.

### VII. To Today's Brothers and Sisters: Grace Beyond Every Boundary

Dear brothers and sisters, I write to you to say one thing: no one stands beyond the reach of grace.

Perhaps you feel, as I once did, like an "outsider"—unqualified, unholy, wrong background, too broken a past. The law may have condemned you. The world may have labeled you. But the Most High God—His grace transcends the boundaries of the law. He received me, a Moabite woman. Will He not also receive you?

Your apostle Paul later wrote:

> "But now in Christ Jesus you who once were far off have been brought near by the blood of Christ." (Ephesians 2:13)

This is my story—from far off to near, from excluded to embraced, from a gleaning widow to the grandmother of a king.

But remember: grace is not cheap. I had to leave Moab. I had to lay down everything I had known—my homeland, my people, my idols. To follow the LORD meant a total turning. Faith is not words on the lips; faith is stepping out onto the unknown road.

You who follow Christ today face the same call. You are summoned to leave the old self and take up the cross. The road ahead may be unclear, but He who called you is faithful. Just as Boaz said to me on the threshing floor, "Do not fear," so your Lord says to you:

> "Do not fear, only believe." (Mark 5:36)

Finally, I thank you for remembering my story today. I am but a small part of God's grand narrative of redemption. Yet through one Moabite woman's life, God declared an eternal truth to the world:

**Grace does not ask where you come from; it only asks where you are going—into the arms of the Redeemer.**

May all of you be able to say, as I did: "Your people shall be my people, and your God my God." May the true kinsman-redeemer—our Lord Jesus Christ—spread His wings over every one of you.

In the grace of Christ,

Your sister, Ruth of Moab
`,
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
    date: '2026-03-28',
    category: 'to-you',
    scripture: '约翰一书 4:7-21 / 1 John 4:7-21',
    scriptureText_zh: '亲爱的弟兄阿，我们应当彼此相爱，因为爱是从神来的。凡有爱心的，都是由神而生，并且认识神。',
    scriptureText_en: 'Beloved, let us love one another, for love is from God, and whoever loves has been born of God and knows God.',
    summary_zh: '年迈的使徒约翰从拔摩海岛写给亲爱读者的最后书信，回忆与主同行的岁月，见证道成肉身的荣耀与爱。',
    summary_en: 'A final letter from the aged Apostle John on Patmos to beloved readers, recalling years walking with the Lord, bearing witness to the glory and love of the incarnate Word.',
    tags: ['testimony', 'love', 'light', 'incarnation'],
    content_zh: `亲爱的读者，愿恩惠、平安从那昔在、今在、以后永在的神归与你！

我是约翰，主耶稣所爱的那门徒。此刻，我正坐在拔摩海岛一块冰冷的岩石上，用颤抖的手写下这封信。海风呼啸，波浪拍打着礁石，发出低沉的轰鸣。这里是罗马帝国的流放之地，是囚禁政治犯和异端分子的监狱。我被流放到这里，不是因为犯了罪，乃是"为神的道、并为给耶稣作的见证"（启1:9）。

### 一、回忆主的同在

我已经是个老人了。岁月在我脸上刻下深深的皱纹，白发如霜覆盖我的头。我的手不再稳健，眼睛也渐渐模糊。但我的记忆依然清晰——我永远不会忘记那个改变我一生的日子。

那是在加利利海边。我和哥哥雅各正在补网，父亲西庇太在一旁。忽然，一个声音传来："来跟从我！我要叫你们得人如得鱼一样。"（太4:19）我抬起头，看见那双眼睛——深邃如海，却充满慈爱。那一刻，我知道：这就是我一生要跟随的主。

从那天起，我跟随他三年半。我见过他在迦拿的婚筵上变水为酒，见过他用五饼二鱼喂饱五千人，见过他平静风和海，见过他使死人复活。我亲耳听见他说："我就是道路、真理、生命；若不藉着我，没有人能到父那里去。"（约14:6）

我永远不会忘记变化山上的那一幕。主耶稣带着我、彼得和雅各上了高山。他的脸面明亮如日头，衣裳洁白如光。摩西和以利亚显现，与他谈论。我们吓得俯伏在地。然后，有声音从云彩里出来，说："这是我的爱子，我所喜悦的。你们要听他！"（太17:5）

那一刻，我明白了：这位拿撒勒的木匠，不仅仅是一位伟大的教师，不仅仅是一位行神迹的先知——他就是神的儿子，是万有的主！

### 二、十字架与空坟墓

> "他被挂在木头上，亲身担当了我们的罪，使我们既然在罪上死，就得以在义上活。因他受的鞭伤，你们便得了医治。"（彼得前书2:24）

但最痛苦的记忆，是各各他山上的那一天。

我站在十字架下，看着主耶稣被钉在木头上。他的手脚被粗大的钉子穿透，鲜血顺着十字架流下来。他的脸因痛苦而扭曲，嘴唇因干渴而龟裂。围观的人嘲笑他、辱骂他。兵丁拈阄分他的衣服。天地都黑暗了。

他看见我和他的母亲马利亚站在旁边，就对母亲说："母亲，看，你的儿子！"又对我说："看，你的母亲！"（约19:26-27）从那时起，我就把马利亚接到自己家里去了。

然后，他大声喊着说："成了！"就低下头，将灵魂交付神了（约19:30）。那一刻，我的心碎了。我以为一切都结束了，我以为所有的盼望都破灭了。

但第三天早晨，奇迹发生了！

抹大拉的马利亚跑来对我和彼得说："有人把主从坟墓里挪了去，我们不知道放在哪里。"我们就跑去。我跑得比彼得更快，先到了坟墓，低头往里看，就见细麻布还放在那里。彼得随后也到了，进坟墓里去，看见细麻布还放在那里，又看见耶稣的裹头巾没有和细麻布放在一处，是另在一处卷着。

我也进去，看见，就信了（约20:8）。

那天晚上，主向我们显现。他站在门徒中间，说："愿你们平安！"我们以为是魂，他却说："你们看我的手、我的脚，就知道实在是我了。魂无骨无肉，你们看，我是有的。"（路24:39）我伸手摸他肋旁的伤口——真的是他！他真的复活了！

### 三、五旬节与使徒的使命

> "但圣灵降临在你们身上，你们就必得着能力，并要在耶路撒冷、犹太全地和撒玛利亚，直到地极，作我的见证。"（使徒行传1:8）

主复活后四十天，升天了。他对我们说："你们要去，使万民作我的门徒。"（太28:19）我们回到耶路撒冷，在马可楼上恒切祷告。

五旬节那天，圣灵降临！大风吹过，火焰的舌头落在我们各人头上。我们就被圣灵充满，说起别国的话来。彼得站起来讲道，那天有三千人悔改受洗。

从那天起，教会诞生了。我们在圣殿里教训人，在家中擘饼，凡物公用，赒济穷人。主将得救的人天天加给我们。我们行了许多神迹奇事——瘸子能行走，瞎子能看见，鬼被赶出去。

但逼迫也随之而来。司提反被石头打死，成为第一位殉道者。我的哥哥雅各被希律王用刀杀了（徒12:2）。彼得被囚在监里。保罗在各处遭受患难、鞭打、石头打、监禁。许多弟兄姊妹为主的名殉道。

### 四、孤独的见证者

如今，他们几乎都走了。

彼得在罗马倒钉十字架殉道。保罗在罗马被斩首。雅各被石头打死。多马在印度传道时被刺死。安德烈在希腊被钉十字架。腓力在弗吕家被倒钉十字架。巴多罗买在亚美尼亚被剥皮而死。马太在埃塞俄比亚被刀杀。奋锐党的西门在波斯被钉十字架。

他们一个个离去，去见主的面。

我是最后一个了。我是唯一一个没有殉道的使徒，但我并非因为逃避。主曾对彼得说关于我的话："我若要他等到我来的时候，与你何干？"（约21:22）主留我在世上，是要我完成他的托付。

我在以弗所牧养教会多年。我教导真理，斥责假教师，安慰受苦的圣徒。我写了约翰福音，写了三封书信，为要让人知道："太初有道，道与神同在，道就是神。"（约1:1）也为要让人知道："神爱世人，甚至将他的独生子赐给他们，叫一切信他的，不至灭亡,反得永生。"（约3:16）

### 五、拔摩海岛的异象

> "我约翰就是你们的弟兄，和你们在耶稣的患难、国度、忍耐里一同有分，为神的道、并为给耶稣作的见证，曾在那名叫拔摩的海岛上。"（启示录1:9）

但如今，我被流放到这荒凉的海岛。罗马皇帝图密善疯狂逼迫基督徒，命令全帝国的人都要敬拜他的像，称他为"主和神"。我拒绝了，所以被流放到这里。

这里没有教会，没有弟兄姊妹，只有冰冷的岩石和咆哮的海浪。白天，烈日炙烤；夜晚，寒风刺骨。我的食物是粗糙的饼和咸鱼。我的床是坚硬的石头。我的伴侣是孤独。

但就在这里——在这最荒凉、最孤独的地方——主向我显现了！

那是主日。我被圣灵感动，听见身后有大声音如吹号，说："你所看见的当写在书上，达与以弗所、士每拿、别迦摩、推雅推喇、撒狄、非拉铁非、老底嘉那七个教会。"我转过身来，要看是谁发声与我说话。

我看见七个金灯台，灯台中间有一位好像人子，身穿长衣，直垂到脚，胸间束着金带。他的头与发皆白，如白羊毛、如雪，眼目如同火焰，脚好像在炉中锻炼光明的铜，声音如同众水的声音。他右手拿着七星，从他口中出来一把两刃的利剑，面貌如同烈日放光（启1:12-16）。

我一看见，就仆倒在他脚前，像死了一样。他用右手按着我，说："不要惧怕！我是首先的，我是末后的，又是那存活的；我曾死过，现在又活了，直活到永永远远；并且拿着死亡和阴间的钥匙。"（启1:17-18）

### 六、给你的信息

亲爱的读者，我将要见主的面了。我的日子不多了。但在离世之前，我要把这些话留给你：

**第一，要持守真道。** 这世界有许多假教师、假先知，他们歪曲福音，传讲"别的福音"（加1:6）。但你要记住：救恩唯独借着信靠基督，不是靠行为、不是靠遗传、不是靠神秘经验。"你们得救是本乎恩，也因着信；这并不是出于自己，乃是神所赐的"（弗2:8）。

**第二，要彼此相爱。** 主给我们的新命令是什么？"我赐给你们一条新命令，乃是叫你们彼此相爱；我怎样爱你们，你们也要怎样相爱。你们若有彼此相爱的心，众人因此就认出你们是我的门徒了。"（约13:34-35）不要恨你的弟兄，不要论断，不要分裂。要用爱心互相宽容,用和平彼此联络（弗4:2-3）。

**第三，不要爱世界。** "不要爱世界和世界上的事。人若爱世界，爱父的心就不在他里面了。因为凡世界上的事，就像肉体的情欲、眼目的情欲，并今生的骄傲，都不是从父来的，乃是从世界来的。这世界和其上的情欲都要过去，惟独遵行神旨意的，是永远常存。"（约一2:15-17）

**第四，要忍耐到底。** 我在拔摩海岛看见的异象中，主对得胜的人有何等的应许！"得胜的，必不受第二次死的害。""得胜的，我必将神乐园中生命树的果子赐给他吃。""得胜的，我要赐他坐在我宝座上。"（启2-3章）不要因逼迫、患难、贫穷就放弃信仰。"你务要至死忠心，我就赐给你那生命的冠冕。"（启2:10）

**第五，仰望主的再来。** 我所看见的最后异象是什么？"我又看见一个新天新地；因为先前的天地已经过去了，海也不再有了...神要擦去他们一切的眼泪；不再有死亡，也不再有悲哀、哭号、疼痛，因为以前的事都过去了。"（启21:1, 4）主说："是了，我必快来！"（启22:20）我们的回应是什么？"阿们！主耶稣啊，我愿你来！"

### 尾声

夜深了，海岛上的寒风更加刺骨。但我的心是火热的。因为我知道，这一切苦楚都是至暂至轻的，将来要显于我们的荣耀是极重无比、永远的（林后4:17）。

我曾亲眼看见主，亲手摸过他，亲耳听见他的话。这不是虚构的神话，乃是历史的事实。主真的道成肉身，真的死在十字架上，真的第三天复活了！凡信他的，就有永生。

我将要去见他的面了。但你还活着。你要选择——跟随这位复活的主,还是继续在世界的黑暗中行走？

> "我是世界的光。跟从我的，就不在黑暗里走，必要得着生命的光。"（约翰福音8:12）

愿主的恩与你同在！

约翰
拔摩海岛
主后95年`,
    content_en: `Dear reader, grace and peace to you from Him who is and who was and who is to come!

I am John, the disciple whom Jesus loved. At this moment, I sit on a cold rock on the Isle of Patmos, writing this letter with trembling hands. The sea wind howls, waves crash against the cliffs, sending up a low roar. This is a place of exile in the Roman Empire, a prison for political criminals and heretics. I was banished here, not for committing a crime, but "on account of the word of God and the testimony of Jesus" (Rev 1:9).

### I. Remembering the Lord's Presence

I am an old man now. Years have etched deep wrinkles on my face, white hair covers my head like frost. My hands are no longer steady, my eyes are gradually dimming. But my memory remains clear—I will never forget that day that changed my life forever.

It was by the Sea of Galilee. My brother James and I were mending nets, our father Zebedee nearby. Suddenly, a voice called out: "Follow me, and I will make you fishers of men" (Matt 4:19). I looked up and saw those eyes—deep as the sea, yet full of compassion. In that moment, I knew: This is the Lord I would follow all my life.

From that day, I followed Him for three and a half years. I saw Him turn water into wine at the wedding in Cana, saw Him feed five thousand with five loaves and two fish, saw Him calm the wind and sea, saw Him raise the dead. I heard Him say with my own ears, "I am the way, and the truth, and the life. No one comes to the Father except through me" (John 14:6).

I will never forget that scene on the Mount of Transfiguration. Jesus took me, Peter, and James up a high mountain. His face shone like the sun, and his clothes became white as light. Moses and Elijah appeared, talking with Him. We fell on our faces in terror. Then a voice from the cloud said, "This is my beloved Son, with whom I am well pleased; listen to him" (Matt 17:5).

In that moment, I understood: This carpenter from Nazareth was not merely a great teacher, not merely a miracle-working prophet—He is the Son of God, the Lord of all!

### II. The Cross and the Empty Tomb

> "He himself bore our sins in his body on the tree, that we might die to sin and live to righteousness. By his wounds you have been healed." (1 Peter 2:24)

But the most painful memory is that day on Golgotha.

I stood at the foot of the cross, watching Jesus being nailed to the wood. His hands and feet were pierced by huge nails, blood flowing down the cross. His face was twisted in agony, his lips cracked from thirst. The crowd mocked and insulted Him. Soldiers cast lots for His clothing. Heaven and earth went dark.

He saw me and His mother Mary standing nearby, and said to His mother, "Woman, behold, your son!" Then to me He said, "Behold, your mother!" (John 19:26-27). From that hour, I took Mary into my own home.

Then He cried out with a loud voice, "It is finished!" and bowed His head and gave up His spirit (John 19:30). In that moment, my heart broke. I thought everything was over, I thought all hope was lost.

But on the third day morning, a miracle happened!

Mary Magdalene ran to me and Peter saying, "They have taken the Lord out of the tomb, and we do not know where they have laid him." We ran to the tomb. I ran faster than Peter and arrived first, stooping to look in, I saw the linen cloths lying there. Then Peter arrived and went into the tomb. He saw the linen cloths lying there, and the face cloth that had been on Jesus' head, not lying with the linen cloths but folded up in a place by itself.

Then I went in, saw, and believed (John 20:8).

That evening, the Lord appeared to us. He stood among the disciples and said, "Peace be with you!" We thought it was a spirit, but He said, "See my hands and my feet, that it is I myself. Touch me, and see. For a spirit does not have flesh and bones as you see that I have" (Luke 24:39). I reached out and touched the wound in His side—it was really Him! He had truly risen!

### III. Pentecost and the Apostolic Mission

> "But you will receive power when the Holy Spirit has come upon you, and you will be my witnesses in Jerusalem and in all Judea and Samaria, and to the end of the earth." (Acts 1:8)

Forty days after His resurrection, the Lord ascended to heaven. He said to us, "Go therefore and make disciples of all nations" (Matt 28:19). We returned to Jerusalem and prayed constantly in the upper room.

On the day of Pentecost, the Holy Spirit descended! A mighty wind blew through, tongues of fire rested on each of us. We were filled with the Holy Spirit and began speaking in other languages. Peter stood up and preached, and three thousand people repented and were baptized that day.

From that day, the Church was born. We taught in the temple, broke bread in homes, shared all things in common, cared for the poor. The Lord added to our number daily those who were being saved. We performed many signs and wonders—the lame walked, the blind saw, demons were cast out.

But persecution followed. Stephen was stoned to death, becoming the first martyr. My brother James was killed by King Herod with the sword (Acts 12:2). Peter was imprisoned. Paul suffered afflictions, beatings, stonings, and imprisonments everywhere. Many brothers and sisters were martyred for the Lord's name.

### IV. The Solitary Witness

Now, they are nearly all gone.

Peter was crucified upside down in Rome. Paul was beheaded in Rome. James was stoned to death. Thomas was speared to death while preaching in India. Andrew was crucified in Greece. Philip was crucified upside down in Phrygia. Bartholomew was flayed alive in Armenia. Matthew was killed by the sword in Ethiopia. Simon the Zealot was crucified in Persia.

One by one they departed, to see the Lord's face.

I am the last one. I am the only apostle who did not die as a martyr, but not because I fled. The Lord once said to Peter concerning me, "If it is my will that he remain until I come, what is that to you?" (John 21:22). The Lord kept me in the world to complete His commission.

I shepherded the church in Ephesus for many years. I taught truth, rebuked false teachers, comforted suffering saints. I wrote the Gospel of John, wrote three epistles, that people might know: "In the beginning was the Word, and the Word was with God, and the Word was God" (John 1:1). And that they might know: "For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life" (John 3:16).

### V. The Vision on Patmos

> "I, John, your brother and partner in the tribulation and the kingdom and the patient endurance that are in Jesus, was on the island called Patmos on account of the word of God and the testimony of Jesus." (Revelation 1:9)

But now, I am exiled to this desolate island. The Roman Emperor Domitian persecutes Christians madly, commanding all in the empire to worship his image and call him "Lord and God." I refused, so I was exiled here.

There is no church here, no brothers and sisters, only cold rocks and roaring waves. By day, the scorching sun; by night, the biting wind. My food is coarse bread and salted fish. My bed is hard stone. My companion is loneliness.

But it is here—in this most desolate, most lonely place—that the Lord appeared to me!

It was the Lord's Day. I was in the Spirit, and I heard behind me a loud voice like a trumpet saying, "Write what you see in a book and send it to the seven churches, to Ephesus and to Smyrna and to Pergamum and to Thyatira and to Sardis and to Philadelphia and to Laodicea." I turned to see the voice that was speaking to me.

I saw seven golden lampstands, and in the midst of the lampstands one like a son of man, clothed with a long robe and with a golden sash around his chest. The hairs of his head were white, like white wool, like snow. His eyes were like a flame of fire, his feet were like burnished bronze, refined in a furnace, and his voice was like the roar of many waters. In his right hand he held seven stars, from his mouth came a sharp two-edged sword, and his face was like the sun shining in full strength (Rev 1:12-16).

When I saw him, I fell at his feet as though dead. But he laid his right hand on me, saying, "Fear not, I am the first and the last, and the living one. I died, and behold I am alive forevermore, and I have the keys of Death and Hades" (Rev 1:17-18).

### VI. A Message for You

Dear reader, I am about to see the Lord's face. My days are few. But before I depart, I want to leave these words for you:

**First, hold fast to the truth.** This world has many false teachers and false prophets who distort the gospel and preach "a different gospel" (Gal 1:6). But remember: salvation is only through faith in Christ, not by works, not by tradition, not by mystical experiences. "For by grace you have been saved through faith. And this is not your own doing; it is the gift of God" (Eph 2:8).

**Second, love one another.** What is the new commandment the Lord gave us? "A new commandment I give to you, that you love one another: just as I have loved you, you also are to love one another. By this all people will know that you are my disciples, if you have love for one another" (John 13:34-35). Do not hate your brother, do not judge, do not cause division. Bear with one another in love, eager to maintain the unity of the Spirit (Eph 4:2-3).

**Third, do not love the world.** "Do not love the world or the things in the world. If anyone loves the world, the love of the Father is not in him. For all that is in the world—the desires of the flesh and the desires of the eyes and pride of life—is not from the Father but is from the world. And the world is passing away along with its desires, but whoever does the will of God abides forever" (1 John 2:15-17).

**Fourth, persevere to the end.** In the vision I saw on Patmos, what promises does the Lord make to the one who conquers! "The one who conquers will not be hurt by the second death." "To the one who conquers I will grant to eat of the tree of life." "The one who conquers, I will grant him to sit with me on my throne" (Rev 2-3). Do not abandon your faith because of persecution, affliction, or poverty. "Be faithful unto death, and I will give you the crown of life" (Rev 2:10).

**Fifth, look forward to the Lord's return.** What is the final vision I saw? "Then I saw a new heaven and a new earth, for the first heaven and the first earth had passed away...He will wipe away every tear from their eyes, and death shall be no more, neither shall there be mourning, nor crying, nor pain anymore, for the former things have passed away" (Rev 21:1, 4). The Lord says, "Surely I am coming soon" (Rev 22:20). What is our response? "Amen. Come, Lord Jesus!"

### Epilogue

The night deepens, the cold wind on the island grows sharper. But my heart burns. For I know that these present sufferings are light and momentary, compared to the glory that will be revealed to us, which is eternal and far outweighs them all (2 Cor 4:17).

I have seen the Lord with my own eyes, touched Him with my own hands, heard His words with my own ears. This is not a fabricated myth but historical fact. The Lord truly became flesh, truly died on the cross, truly rose on the third day! Whoever believes in Him has eternal life.

I am about to see His face. But you are still alive. You must choose—will you follow this risen Lord, or continue walking in the darkness of the world?

> "I am the light of the world. Whoever follows me will not walk in darkness, but will have the light of life." (John 8:12)

May the Lord's grace be with you!

John
Isle of Patmos
AD 95`,
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
