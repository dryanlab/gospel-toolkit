'use client';
import Link from 'next/link';
import SpeakButton from '@/components/SpeakButton';
import { useState } from 'react';

const sections = [
  {
    title_zh: `一、福音的主题与全人类的罪（1:1-3:20）`,
    title_en: `I. The Gospel's Theme and Universal Human Sin (1:1-3:20)`,
    content_zh: `罗马书开篇即宣告主题："这福音本是神的大能，要救一切相信的，先是犹太人，后是希腊人。因为神的义正在这福音上显明出来；这义是本于信，以至于信。如经上所记：义人必因信得生。"（1:16-17）这两节经文是整封书信的纲领，也是宗教改革的火种——马丁路德正是在这里发现了"因信称义"的真理，从此改变了教会历史的走向。

保罗的论证从诊断开始。他先审判外邦世界：人虽然认识神（从创造中可以看见神"永能和神性"，1:20），却不把他当作神荣耀他，反去拜偶像。神就"任凭"他们（这个词在1:24、26、28出现三次）——神的审判不只是将来的烈怒，也是现在的"撒手"，让人陷入自己罪的后果中。这段对人类堕落的描述（1:18-32）是保罗对人类文明最深刻的诊断。

然后保罗转向犹太人（2:1-3:8）。你有律法吗？"不是听律法的为义，乃是行律法的称义"（2:13）。割礼有用吗？"外面作犹太人的，不是真犹太人；外面肉身的割礼，也不是真割礼"（2:28）。犹太人的优越感被彻底击碎。

3:9-20是全人类的终审判决，保罗连续引用诗篇和以赛亚书的经文，如同检察官宣读罪状："没有义人，连一个也没有；没有明白的，没有寻求神的"（3:10-11）。"因为世人都犯了罪，亏缺了神的荣耀"（3:23）。韦敏斯德小要理问答第14问："罪是什么？"答："罪是不遵行或违犯神的律法。"保罗的论证让每一个人——无论犹太人还是外邦人——都闭口无言，等候神公义的审判。`,
    content_en: `Romans opens by declaring its theme: "For I am not ashamed of the gospel of Christ: for it is the power of God unto salvation to every one that believeth; to the Jew first, and also to the Greek. For therein is the righteousness of God revealed from faith to faith: as it is written, The just shall live by faith." (1:16-17) These two verses are the thesis of the entire epistle and the spark of the Reformation — it was here that Martin Luther discovered the truth of justification by faith, forever altering church history.

Paul's argument begins with diagnosis. He first indicts the Gentile world: though they knew God (His "eternal power and Godhead" visible through creation, 1:20), they did not glorify Him as God but turned to idols. God "gave them up" (this phrase appears three times in 1:24, 26, 28) — God's judgment is not only future wrath but also present abandonment, letting people sink into the consequences of their own sin. This description of human fallenness (1:18-32) is Paul's most profound diagnosis of human civilization.

Then Paul turns to the Jews (2:1-3:8). You have the law? "Not the hearers of the law are just before God, but the doers of the law shall be justified" (2:13). Circumcision avails? "He is not a Jew, which is one outwardly; neither is that circumcision, which is outward in the flesh" (2:28). Jewish privilege is utterly shattered.

3:9-20 is the final verdict on all humanity. Paul cites a chain of Old Testament texts from the Psalms and Isaiah, like a prosecutor reading an indictment: "There is none righteous, no, not one: There is none that understandeth, there is none that seeketh after God" (3:10-11). "For all have sinned, and come short of the glory of God" (3:23). WSC Q14: "What is sin?" A: "Sin is any want of conformity unto, or transgression of, the law of God." Paul's argument leaves every person — Jew and Gentile alike — speechless before God's righteous judgment.`,
  },
  {
    title_zh: `二、因信称义：白白的恩典（3:21-5:21）`,
    title_en: `II. Justification by Faith: Free Grace (3:21-5:21)`,
    content_zh: `在全人类被定罪之后，保罗写下了新约中最重要的转折："但如今，神的义在律法以外已经显明出来，有律法和先知为证：就是神的义，因信耶稣基督加给一切相信的人，并没有分别"（3:21-22）。这个"但如今"是整本圣经最荣耀的转折——从绝望到盼望，从定罪到称义。

"因为世人都犯了罪，亏缺了神的荣耀；如今却蒙神的恩典，因基督耶稣的救赎，就白白地称义"（3:23-24）。三个关键词：恩典（不是人赚取的）、救赎（基督付出代价）、白白地（完全免费）。"神设立耶稣作挽回祭，是凭着耶稣的血，藉着人的信"（3:25）——"挽回祭"意味着基督的死平息了神对罪的义怒，满足了神公义的要求。这是改革宗神学中"有限救赎"和"替代性赎罪"教义的圣经根基。

第4章以亚伯拉罕为案例研究。亚伯拉罕不是靠行为称义，而是因信称义："亚伯拉罕信神，这就算为他的义"（4:3，引用创世记15:6）。这发生在割礼和律法颁布之前几百年——证明信心之约先于律法之约。"做工的得工价，不算恩典，乃是该得的；惟有不做工的，只信称罪人为义的神，他的信就算为义"（4:4-5）。

第5章是称义的果实。"我们既因信称义，就藉着我们的主耶稣基督得与神相和"（5:1）。称义带来五样确定的福分：与神和好（5:1）、进入恩典中（5:2）、在患难中欢喜（5:3）、神的爱浇灌（5:5）、免去将来的忿怒（5:9）。

5:12-21的亚当与基督对比是保罗神学最深邃的段落之一。"因一人的悖逆，众人成为罪人；照样，因一人的顺从，众人也成为义了"（5:19）。亚当是全人类的代表——他的罪归给了所有后裔；基督是新人类的代表——他的义归给了所有信他的人。韦敏斯德信条将此称为"约的代表"（federal headship）。恩典不只是与罪相当，而是"过于"——"只是过犯不如恩赐……恩典也藉着义作王，叫人因我们的主耶稣基督得永生"（5:15, 21）。`,
    content_en: `After the whole human race stands condemned, Paul writes the New Testament's most important turning point: "But now the righteousness of God without the law is manifested, being witnessed by the law and the prophets; Even the righteousness of God which is by faith of Jesus Christ unto all and upon all them that believe: for there is no difference" (3:21-22). This "But now" is the most glorious turning point in all Scripture — from despair to hope, from condemnation to justification.

"For all have sinned, and come short of the glory of God; Being justified freely by his grace through the redemption that is in Christ Jesus" (3:23-24). Three key words: grace (not earned by man), redemption (Christ paid the price), freely (entirely without cost). "Whom God hath set forth to be a propitiation through faith in his blood" (3:25) — "propitiation" means Christ's death appeased God's righteous wrath against sin, satisfying the demands of divine justice. This is the biblical foundation of the Reformed doctrines of definite atonement and penal substitutionary atonement.

Chapter 4 uses Abraham as a case study. Abraham was justified not by works but by faith: "Abraham believed God, and it was counted unto him for righteousness" (4:3, citing Genesis 15:6). This occurred centuries before circumcision and the giving of the law — proving the covenant of faith precedes the covenant of law. "Now to him that worketh is the reward not reckoned of grace, but of debt. But to him that worketh not, but believeth on him that justifieth the ungodly, his faith is counted for righteousness" (4:4-5).

Chapter 5 presents the fruit of justification. "Therefore being justified by faith, we have peace with God through our Lord Jesus Christ" (5:1). Justification yields five sure blessings: peace with God (5:1), access to grace (5:2), rejoicing in tribulation (5:3), God's love poured out (5:5), and deliverance from future wrath (5:9).

The Adam-Christ parallel in 5:12-21 is one of Paul's most profound passages. "For as by one man's disobedience many were made sinners, so by the obedience of one shall many be made righteous" (5:19). Adam is the representative of all humanity — his sin is imputed to all his posterity; Christ is the representative of the new humanity — His righteousness is imputed to all who believe in Him. The Westminster Confession calls this "federal headship." Grace does not merely match sin but surpasses it — "But not as the offence, so also is the free gift... grace reign through righteousness unto eternal life by Jesus Christ our Lord" (5:15, 21).`,
  },
  {
    title_zh: `三、与基督联合：圣化与律法的挣扎（6-7章）`,
    title_en: `III. Union with Christ: Sanctification and the Struggle with the Law (Ch. 6-7)`,
    content_zh: `因信称义会不会导致放纵？这是保罗必须回答的问题："这样，怎么说呢？我们可以仍在罪中，叫恩典显多吗？断乎不可！"（6:1-2）

保罗的回答不是道德劝勉，而是神学陈述：你已经与基督联合了。"岂不知我们这受洗归入基督耶稣的人，是受洗归入他的死吗？所以我们藉着洗礼归入死，和他一同埋葬，原是叫我们一举一动有新生的样式，像基督藉着父的荣耀从死里复活一样"（6:3-4）。与基督联合不是比喻，而是属灵实际——旧人已经与基督同钉十字架了（6:6），罪的权势已经被打破了。"因为已死的人是脱离了罪的"（6:7）——死人不会再受诱惑。

这意味着基督徒与罪的关系发生了根本改变。不是"我必须努力不犯罪"，而是"我已经向罪死了"。"你们向罪也当看自己是死的；向神在基督耶稣里，却当看自己是活的"（6:11）。这个"看"不是自我催眠，而是认定一个已经发生的事实。

第7章是保罗对律法与罪之间关系最坦诚的剖析。律法本身是好的："律法是圣洁的，诫命也是圣洁、公义、良善的"（7:12）。但律法无法给人行善的力量——它只能诊断疾病，不能医治。"因为立志为善由得我，只是行出来由不得我。故此，我所愿意的善，我反不做；我所不愿意的恶，我倒去做"（7:18-19）。

这段被称为"罗马书第七章的挣扎"，自奥古斯丁以来改革宗传统一直认为这描述的是重生之人在成圣过程中的真实经历——不是未信者的光景，而是最成熟的基督徒在圣灵光照下对自身罪性的深刻认识。最终保罗喊出："我真是苦啊！谁能救我脱离这取死的身体呢？"答案在下一句："感谢神，靠着我们的主耶稣基督就能脱离了"（7:24-25）。`,
    content_en: `Does justification by faith lead to license? This is the question Paul must answer: "What shall we say then? Shall we continue in sin, that grace may abound? God forbid." (6:1-2)

Paul's answer is not moral exhortation but theological declaration: you are already united with Christ. "Know ye not, that so many of us as were baptized into Jesus Christ were baptized into his death? Therefore we are buried with him by baptism into death: that like as Christ was raised up from the dead by the glory of the Father, even so we also should walk in newness of life." (6:3-4) Union with Christ is not metaphor but spiritual reality — the old man has been crucified with Christ (6:6), the power of sin has been broken. "For he that is dead is freed from sin" (6:7) — the dead are no longer tempted.

This means the Christian's relationship to sin has fundamentally changed. Not "I must try hard not to sin," but "I have already died to sin." "Likewise reckon ye also yourselves to be dead indeed unto sin, but alive unto God through Jesus Christ our Lord" (6:11). This "reckoning" is not self-hypnosis but recognizing an accomplished fact.

Chapter 7 is Paul's most candid analysis of the relationship between law and sin. The law itself is good: "The law is holy, and the commandment holy, and just, and good" (7:12). But the law cannot empower one to do good — it can only diagnose the disease, not cure it. "For to will is present with me; but how to perform that which is good I find not. For the good that I would I do not: but the evil which I would not, that I do." (7:18-19)

This passage, known as "the struggle of Romans 7," has been understood in the Reformed tradition since Augustine as describing the genuine experience of the regenerate person in the process of sanctification — not the condition of an unbeliever but the deepest self-knowledge of even the most mature Christian under the Spirit's illumination. Finally Paul cries out: "O wretched man that I am! who shall deliver me from the body of this death?" The answer comes immediately: "I thank God through Jesus Christ our Lord" (7:24-25).`,
  },
  {
    title_zh: `四、圣灵中的生命：从不定罪到不分离（8章）`,
    title_en: `IV. Life in the Spirit: From No Condemnation to No Separation (Ch. 8)`,
    content_zh: `罗马书第8章是全书的高峰，也是许多基督徒最爱的圣经章节。它以"不定罪"开始，以"不分离"结束——这是福音确据的完整弧线。

"如今，那些在基督耶稣里的就不定罪了"（8:1）。这不是"可能不定罪"或"暂时不定罪"，而是绝对的、永远的宣告。为什么？"因为赐生命圣灵的律，在基督耶稣里释放了我，使我脱离罪和死的律了"（8:2）。律法做不到的（因为肉体的软弱），神差遣自己的儿子做到了——"在肉体中定了罪案"（8:3）。

圣灵的工作贯穿第8章。圣灵使我们"体贴圣灵的事"（8:5），使我们"治死身体的恶行"（8:13），使我们"呼叫：阿爸！父！"——圣灵与我们的心同证我们是神的儿女（8:15-16）。成为神的儿女不只是法律上的地位，更是关系上的亲密。

"我们晓得万事都互相效力，叫爱神的人得益处，就是按他旨意被召的人"（8:28）。这不是廉价的乐观主义。保罗没有说"万事都是好事"，而是说万事在神手中"互相效力"——包括苦难、逼迫、试炼——都在神的主权计划中服务于信徒最终的益处。

接着是改革宗神学中"恩典的金链"（Golden Chain of Redemption）的经典经文："因为他预先所知道的人，就预先定下效法他儿子的模样……预先所定下的人又召他们来；所召来的人又称他们为义；所称为义的人又叫他们得荣耀"（8:29-30）。从预知到预定到呼召到称义到得荣耀——每一个环节都是神主动的工作，没有一个是不确定的。注意"得荣耀"用的是过去时态——在神的视角中，我们的最终荣耀已经是确定的事实。

全章以保罗一生最壮丽的宣告结束："因为我深信无论是死，是生，是天使，是掌权的，是有能的，是现在的事，是将来的事，是高处的，是低处的，是别的受造之物，都不能叫我们与神的爱隔绝；这爱是在我们的主基督耶稣里的"（8:38-39）。保罗列举了十样东西——覆盖了时间（现在、将来）、空间（高处、低处）、属灵权势（天使、掌权的）、人生境遇（死、生）——没有任何受造之物能隔绝我们与神的爱。这是全圣经中最坚固的确据。`,
    content_en: `Romans 8 is the summit of the entire epistle and one of the most beloved chapters in all of Scripture. It begins with "no condemnation" and ends with "no separation" — the complete arc of gospel assurance.

"There is therefore now no condemnation to them which are in Christ Jesus." (8:1) This is not "possibly no condemnation" or "temporary no condemnation" but an absolute, eternal declaration. Why? "For the law of the Spirit of life in Christ Jesus hath made me free from the law of sin and death" (8:2). What the law could not do (weakened by the flesh), God did by sending His own Son — "condemned sin in the flesh" (8:3).

The Spirit's work pervades chapter 8. The Spirit causes us to "mind the things of the Spirit" (8:5), enables us to "mortify the deeds of the body" (8:13), moves us to cry "Abba, Father" — the Spirit bearing witness with our spirit that we are children of God (8:15-16). Being children of God is not merely legal status but relational intimacy.

"And we know that all things work together for good to them that love God, to them who are the called according to his purpose" (8:28). This is not cheap optimism. Paul does not say "all things are good" but that all things "work together" in God's hands — including suffering, persecution, and trial — all serving the believer's ultimate good within God's sovereign plan.

Next comes the classic text for the Reformed "Golden Chain of Redemption": "For whom he did foreknow, he also did predestinate to be conformed to the image of his Son... Moreover whom he did predestinate, them he also called: and whom he called, them he also justified: and whom he justified, them he also glorified." (8:29-30) From foreknowledge to predestination to calling to justification to glorification — every link is God's active work, and none is uncertain. Note that "glorified" is in the past tense — from God's perspective, our final glorification is already an accomplished fact.

The chapter concludes with the most magnificent declaration in all of Paul's writings: "For I am persuaded, that neither death, nor life, nor angels, nor principalities, nor powers, nor things present, nor things to come, Nor height, nor depth, nor any other creature, shall be able to separate us from the love of God, which is in Christ Jesus our Lord." (8:38-39) Paul lists ten things — spanning time (present, future), space (height, depth), spiritual powers (angels, principalities), and life circumstances (death, life) — and declares that no created thing can separate us from God's love. This is the most unshakable assurance in all of Scripture.`,
  },
  {
    title_zh: `五、神的主权与以色列的奥秘（9-11章）`,
    title_en: `V. God's Sovereignty and the Mystery of Israel (Ch. 9-11)`,
    content_zh: `如果因信称义是真的，为什么神的选民以色列大多数拒绝了弥赛亚？罗马书9-11章是保罗对这个痛苦问题最深入的思考。

保罗的心碎是真实的："我在基督里说真话……我是大有忧愁，心里时常伤痛；为我弟兄，我骨肉之亲，就是自己被咒诅，与基督分离，我也愿意"（9:1-3）。一个愿意为同胞下地狱的人——这不是冷冰冰的神学辩论，而是带着眼泪的沉思。

第9章直面神的主权拣选。"双子还没有生下来，善恶还没有做出来，只因要显明神拣选人的旨意，不在乎人的行为，乃在乎召人的主"（9:11）。雅各蒙爱以扫被弃，不是因为他们的行为，而是出于神主权的拣选。保罗预见人的不服："这样，神还有什么可指摘的呢？有谁抗拒他的旨意呢？"他回答说："你这个人哪，你是谁，竟敢向神强嘴呢？受造之物岂能对造他的说：你为什么这样造我呢？"（9:19-20）。窑匠有权从同一团泥中造贵重和卑贱的器皿——这是预定论最清晰的圣经表述之一。

第10章转向人的责任。"因为人心里相信，就可以称义；口里承认，就可以得救"（10:10）。"凡求告主名的就必得救"（10:13）。但人怎能求告未曾信的呢？怎能信未曾听见的呢？所以"信道是从听道来的，听道是从基督的话来的"（10:17）——这就是传福音的必要性。神的主权不排除人的责任；恰恰相反，神预定了目的（拣选），也预定了手段（传道）。

第11章揭示了奥秘。以色列被暂时"丢弃"不是终局，而是为了外邦人的得救。保罗用橄榄树的比喻说明：野橄榄枝（外邦人）被接在好橄榄树（亚伯拉罕之约）上，但原来的枝子（以色列）将来还要被接回去。"等到外邦人的数目添满了，于是以色列全家都要得救"（11:25-26）。

三章的沉思以宇宙性的颂赞结束："深哉，神丰富的智慧和知识！他的判断何其难测！他的踪迹何其难寻！……因为万有都是本于他，倚靠他，归于他。愿荣耀归给他，直到永远。阿们！"（11:33, 36）。在神的奥秘面前，最诚实的回应不是解释一切，而是敬拜。`,
    content_en: `If justification by faith is true, why have most of God's chosen people Israel rejected the Messiah? Romans 9-11 is Paul's most searching reflection on this agonizing question.

Paul's heartbreak is real: "I say the truth in Christ... that I have great heaviness and continual sorrow in my heart. For I could wish that myself were accursed from Christ for my brethren, my kinsmen according to the flesh" (9:1-3). A man willing to go to hell for his countrymen — this is not cold theological debate but tear-stained meditation.

Chapter 9 confronts God's sovereign election head-on. "For the children being not yet born, neither having done any good or evil, that the purpose of God according to election might stand, not of works, but of him that calleth" (9:11). Jacob was loved and Esau rejected not because of their deeds but by God's sovereign choice. Paul anticipates the objection: "Thou wilt say then unto me, Why doth he yet find fault? For who hath resisted his will?" He answers: "Nay but, O man, who art thou that repliest against God? Shall the thing formed say to him that formed it, Why hast thou made me thus?" (9:19-20). The potter has authority to make from the same lump vessels of honour and dishonour — one of the clearest biblical statements of the doctrine of predestination.

Chapter 10 turns to human responsibility. "For with the heart man believeth unto righteousness; and with the mouth confession is made unto salvation" (10:10). "For whosoever shall call upon the name of the Lord shall be saved" (10:13). But how shall they call on Him they have not believed? How believe without hearing? Thus "faith cometh by hearing, and hearing by the word of God" (10:17) — hence the necessity of preaching. God's sovereignty does not exclude human responsibility; rather, God ordains both the end (election) and the means (preaching).

Chapter 11 unveils the mystery. Israel's temporary "casting away" is not final but serves the salvation of the Gentiles. Paul uses the olive tree metaphor: wild branches (Gentiles) are grafted into the good olive tree (the Abrahamic covenant), but the original branches (Israel) will be grafted back. "And so all Israel shall be saved" when "the fulness of the Gentiles be come in" (11:25-26).

The three chapters of meditation conclude in cosmic doxology: "O the depth of the riches both of the wisdom and knowledge of God! how unsearchable are his judgments, and his ways past finding out!... For of him, and through him, and to him, are all things: to whom be glory for ever. Amen." (11:33, 36) Before God's mystery, the most honest response is not to explain everything but to worship.`,
  },
  {
    title_zh: `六、活祭的生活：因信称义的实践（12-16章）`,
    title_en: `VI. Living Sacrifice: The Practice of Justification by Faith (Ch. 12-16)`,
    content_zh: `"所以弟兄们，我以神的慈悲劝你们，将身体献上，当作活祭，是圣洁的，是神所喜悦的；你们如此侍奉乃是理所当然的。不要效法这个世界，只要心意更新而变化，叫你们察验何为神的善良、纯全、可喜悦的旨意"（12:1-2）。这个"所以"（therefore）连接了前11章的教义与后5章的实践——因为你已经因信称义了、与基督联合了、被圣灵内住了、在神的爱中永远安稳了，"所以"你应当将整个生命献给神。教义永远先于实践；恩典永远先于责任。

"活祭"是一个大胆的矛盾修辞——旧约的祭物是死的，基督徒的献祭却是活的。不是死后才奉献，而是活着的每一天都是献祭。"心意更新而变化"——改变从内到外，先是思想的更新，然后是生活的改变。

12:3-8论述恩赐的多样性——教会如同身体，各肢体功能不同但彼此需要。12:9-21是基督徒伦理的精华："爱人不可虚假……恶要厌恶，善要亲近"（12:9）；"逼迫你们的，要给他们祝福"（12:14）；"不要自己伸冤……你的仇敌若饿了，就给他吃"（12:19-20）。"你不可为恶所胜，反要以善胜恶"（12:21）——这是基督徒面对不公义时的最终原则。

第13章论基督徒与政府的关系："在上有权柄的，人人当顺服他，因为没有权柄不是出于神的"（13:1）。改革宗传统认为这不是对暴政的无条件服从，而是承认政府权柄的来源——神设立政府是为了赏善罚恶（13:3-4）。当政府违反其神圣职责时，信徒有权也有责任按良心行事。

第14-15章处理教会中"强者"与"弱者"的争论——吃不吃肉、守不守日。保罗的原则不是谁对谁错，而是爱："我们坚固的人应该担代不坚固人的软弱，不求自己的喜悦"（15:1）。"因为神的国不在乎吃喝，只在乎公义、和平并圣灵中的喜乐"（14:17）。在非本质的问题上包容，在本质的问题上坚持，在一切事上以爱相待——这是罗马书给教会留下的永恒智慧。`,
    content_en: `"I beseech you therefore, brethren, by the mercies of God, that ye present your bodies a living sacrifice, holy, acceptable unto God, which is your reasonable service. And be not conformed to this world: but be ye transformed by the renewing of your mind, that ye may prove what is that good, and acceptable, and perfect, will of God." (12:1-2) This "therefore" connects the doctrine of chapters 1-11 to the practice of chapters 12-16 — because you have been justified by faith, united with Christ, indwelt by the Spirit, and eternally secure in God's love, "therefore" you should offer your whole life to God. Doctrine always precedes practice; grace always precedes duty.

"Living sacrifice" is a bold oxymoron — Old Testament offerings were dead, but the Christian's sacrifice is alive. Not a posthumous offering but a daily sacrifice while living. "Be transformed by the renewing of your mind" — change moves from inside out, first the renewal of thinking, then the change of living.

12:3-8 discusses the diversity of spiritual gifts — the church is like a body, its members having different functions yet needing one another. 12:9-21 is the essence of Christian ethics: "Let love be without dissimulation... Abhor that which is evil; cleave to that which is good" (12:9); "Bless them which persecute you" (12:14); "Avenge not yourselves... if thine enemy hunger, feed him" (12:19-20). "Be not overcome of evil, but overcome evil with good" (12:21) — this is the ultimate principle for Christians facing injustice.

Chapter 13 addresses Christians and government: "Let every soul be subject unto the higher powers. For there is no power but of God" (13:1). The Reformed tradition holds that this is not unconditional obedience to tyranny but recognition of the source of governmental authority — God established government to reward good and punish evil (13:3-4). When government violates its divine mandate, believers have both the right and duty to act according to conscience.

Chapters 14-15 address disputes between "strong" and "weak" in the church — eating meat, observing days. Paul's principle is not who is right but love: "We then that are strong ought to bear the infirmities of the weak, and not to please ourselves" (15:1). "For the kingdom of God is not meat and drink; but righteousness, and peace, and joy in the Holy Ghost" (14:17). Tolerance in non-essentials, firmness in essentials, love in all things — this is the abiding wisdom Romans leaves for the church.`,
  },
]

const overview = {
  zh: `罗马书（16章）是保罗写给罗马教会的书信（约公元57年），公认为圣经中最系统的神学著作。马丁路德在罗马书中发现了"因信称义"的真理，引发了十六世纪的宗教改革；约翰卫斯理读罗马书时心里"奇异地暖热起来"，成为循道宗运动的起点。

全书论证的逻辑链条：所有人都是罪人（1-3章）→ 称义唯靠信心（3-5章）→ 圣化：在基督里的新生命（6-8章）→ 神的主权与以色列的将来（9-11章）→ 圣徒生活的实践（12-16章）。`,
  en: `Romans (16 chapters) is Paul's letter to the Roman church (c. AD 57), widely recognized as Scripture's most systematic theological work. Martin Luther discovered "justification by faith" in Romans, sparking the sixteenth-century Reformation; John Wesley's heart was "strangely warmed" reading Romans, launching the Methodist movement.

The book's logical chain: all are sinners (ch. 1–3) → justification by faith alone (ch. 3–5) → sanctification: new life in Christ (ch. 6–8) → God's sovereignty and Israel's future (ch. 9–11) → the saints' practical life (ch. 12–16).`,
};

const outline = [
  ["1:1-17", "福音的主题", "1:1–17", "Theme of the Gospel"],
  ["1:18-3:20", "全人类的罪与审判", "1:18–3:20", "Sin and Judgment of All Mankind"],
  ["3:21-5:21", "因信称义", "3:21–5:21", "Justification by Faith"],
  ["6-8章", "圣化与在基督里的生命", "Ch. 6–8", "Sanctification and Life in Christ"],
  ["9-11章", "以色列与神的主权", "Ch. 9–11", "Israel and God's Sovereignty"],
  ["12-16章", "圣徒的实践生活", "Ch. 12–16", "Practical Life of the Saints"],
];

const theology = {
  title_zh: `核心神学：因信称义——福音的系统阐述`,
  title_en: `Core Theology: Justification by Faith — A Systematic Exposition of the Gospel`,
  content_zh: `罗马书是保罗神学的巅峰之作，被路德称为"新约中最重要的书卷，最纯粹的福音"。

第一，人人都在罪中。罗马书1-3章是全圣经对人类罪性最系统的分析。外邦人的罪（1:18-32）："他们虽然知道神，却不当作神荣耀祂"；犹太人的罪（2:1-3:8）：有律法却不遵行。结论是毁灭性的："没有义人，连一个也没有"（3:10）。改革宗神学的"全然败坏"（Total Depravity）教义正是以此为基础——不是说人坏到极点，而是说罪污染了人的每一个层面。

第二，因信称义。"人称义是因着信，不在乎遵行律法"（3:28）。称义（δικαίωσις）不是"使人变义"，而是"宣告人为义"——法庭性的宣判，不是道德的改造。亚伯拉罕在受割礼之前就因信被称为义（4:9-12），证明称义不靠行为。"如今，那些在基督耶稣里的就不定罪了"（8:1）——这是基督徒最确定的安慰。

第三，在基督里的新生命。罗马书6-8章展开了称义之后的生活。"我们在罪上死了的人岂可仍在罪中活着呢？"（6:2）——称义不是犯罪的执照，而是新生命的开始。第7章坦诚地描述了信徒内心的挣扎："我所愿意的善，我反不做；我所不愿意的恶，我倒去做"（7:19）——这是每个真信徒的经历。第8章则以凯旋的宣告结束："谁能使我们与基督的爱隔绝呢？……都不能叫我们与神的爱隔绝"（8:35-39）。

第四，神的主权与人的责任。罗马书9-11章论述了神的拣选与以色列的命运——这是全圣经中关于预定论最集中的论述。"如今也是这样，照着拣选的恩典，还有所留的余数"（11:5）。但保罗同时坚持人的责任："凡求告主名的就必得救"（10:13）。神的主权和人的责任不是矛盾，而是奥秘中的和谐——"深哉，神丰富的智慧和知识！祂的判断何其难测！祂的踪迹何其难寻！"（11:33）。`,
  content_en: `Romans is the pinnacle of Pauline theology; Luther called it "the most important book in the New Testament, the purest gospel."

First, all are under sin. Romans 1-3 is Scripture's most systematic analysis of human sinfulness. Gentile sin (1:18-32): "when they knew God, they glorified him not as God"; Jewish sin (2:1-3:8): possessing the law but failing to keep it. The conclusion is devastating: "There is none righteous, no, not one" (3:10). The Reformed doctrine of Total Depravity is grounded here — not that humans are as bad as possible, but that sin contaminates every dimension of human existence.

Second, justification by faith. "A man is justified by faith without the deeds of the law" (3:28). Justification (δικαίωσις) is not "making righteous" but "declaring righteous" — a forensic verdict, not a moral transformation. Abraham was counted righteous by faith before circumcision (4:9-12), proving justification is not by works. "There is therefore now no condemnation to them which are in Christ Jesus" (8:1) — this is the Christian's most certain comfort.

Third, new life in Christ. Romans 6-8 unfolds life after justification. "Shall we continue in sin, that grace may abound? God forbid" (6:1-2) — justification is not a license to sin but the beginning of new life. Chapter 7 honestly describes the believer's inner struggle: "For the good that I would I do not: but the evil which I would not, that I do" (7:19) — the experience of every true believer. Chapter 8 concludes with triumphant declaration: "Who shall separate us from the love of Christ?... nor any other creature, shall be able to separate us from the love of God" (8:35-39).

Fourth, God's sovereignty and human responsibility. Romans 9-11 addresses divine election and Israel's destiny — the most concentrated discussion of predestination in all of Scripture. "Even so then at this present time also there is a remnant according to the election of grace" (11:5). Yet Paul simultaneously insists on human responsibility: "Whosoever shall call upon the name of the Lord shall be saved" (10:13). God's sovereignty and human responsibility are not contradictory but harmonious within mystery — "O the depth of the riches both of the wisdom and knowledge of God! how unsearchable are his judgments, and his ways past finding out!" (11:33).`,
};

const keyVerse = {
  zh: `"如今，那些在基督耶稣里的就不定罪了。"（罗马书 8:1）`,
  en: `"There is therefore now no condemnation to them which are in Christ Jesus." (Romans 8:1)`,
};

const info = { nameZh: `罗马书`, nameEn: `Romans`, author: `使徒保罗`, date: `约公元57年`, chapters: `16章`, backHref: `/new-testament/pauline`, backLabel: `保罗书信`, bibleId: `ROM` };


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