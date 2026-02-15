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
    date: '2026-02-22',
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

弟兄姐妹，你们知道这意味着什么吗？还四倍——这几乎是我全部的家产。

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

Brothers and sisters, do you know what that meant? Fourfold restitution — that was nearly everything I owned.

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
    date: '2026-03-01',
    category: 'testimony',
    scripture: '使徒行传 9:1-19',
    scriptureText_zh: '扫罗行路，将到大马色，忽然从天上发光，四面照着他。他就仆倒在地，听见有声音对他说："扫罗，扫罗，你为什么逼迫我？"',
    scriptureText_en: 'Now as he went on his way, he approached Damascus, and suddenly a light from heaven shone around him. And falling to the ground, he heard a voice saying to him, "Saul, Saul, why are you persecuting me?"',
    summary_zh: '我曾是最好的法利赛人，以为自己在为神大发热心。直到那道光让我瞎了眼——讽刺的是，瞎了眼之后我才真正"看见"了。',
    summary_en: 'I was the finest Pharisee, convinced I was burning with zeal for God. Then that light blinded me — and ironically, only after losing my sight did I truly "see."',
    tags: ['归信', '恩典', '呼召', '翻转'],
    content_zh: '（即将发布）',
    content_en: '(Coming soon)',
  },
  {
    id: 'abraham-moriah',
    author: '亚伯拉罕',
    authorEn: 'Abraham',
    authorAvatar: '⭐',
    authorBio: '信心之父，神与他立约，应许他的后裔如天上的星',
    authorBioEn: 'Father of faith, God made a covenant with him, promising descendants like the stars of heaven',
    title_zh: '摩利亚山上的三天路程',
    title_en: 'Three Days\' Journey to Mount Moriah',
    date: '2026-03-08',
    category: 'testimony',
    scripture: '创世记 22:1-14',
    scriptureText_zh: '以撒对他父亲亚伯拉罕说："父亲哪！"亚伯拉罕说："我儿，我在这里。"以撒说："请看，火与柴都有了，但燔祭的羊羔在哪里呢？"亚伯拉罕说："我儿，神必自己预备作燔祭的羊羔。"',
    scriptureText_en: 'And Isaac said to his father Abraham, "My father!" And he said, "Here I am, my son." He said, "Behold, the fire and the wood, but where is the lamb for a burnt offering?" Abraham said, "God will provide for himself the lamb for a burnt offering, my son."',
    summary_zh: '不写结局，只写从领受命令到举刀的那三天。每一步路在想什么？"神必自己预备"——这句话是信心还是绝望？',
    summary_en: 'Not about the ending, but about those three days from receiving the command to raising the knife. What was I thinking with every step? "God will provide" — was it faith or despair?',
    tags: ['信心', '顺服', '牺牲', '预表'],
    content_zh: '（即将发布）',
    content_en: '(Coming soon)',
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
    date: '2026-03-15',
    category: 'testimony',
    scripture: '诗篇 51:1-17',
    scriptureText_zh: '神啊，求你按你的慈爱怜恤我，按你丰盛的慈悲涂抹我的过犯……神所要的祭，就是忧伤的灵。神啊，忧伤痛悔的心，你必不轻看。',
    scriptureText_en: 'Have mercy on me, O God, according to your steadfast love; according to your abundant mercy blot out my transgressions... The sacrifices of God are a broken spirit; a broken and contrite heart, O God, you will not despise.',
    summary_zh: '拿单指着我说"你就是那人"之后的内心世界。一个合神心意的人，怎么走到了这一步？碎裂的灵魂里流出了这首诗。',
    summary_en: 'The inner world after Nathan pointed at me and said "You are the man." How did a man after God\'s own heart come to this? From a shattered soul flowed this psalm.',
    tags: ['悔改', '赦免', '恢复', '诚实'],
    content_zh: '（即将发布）',
    content_en: '(Coming soon)',
  },
];
