'use client';
import Link from 'next/link';
import SpeakButton from '@/components/SpeakButton';
import { useState } from 'react';

const sections = [
  {
    title_zh: `一、逃跑与风暴（第1章）`,
    title_en: `I. Flight and Storm (Ch. 1)`,
    content_zh: `约拿书以最独特的先知故事开始——神差遣约拿去尼尼微城传讲审判，约拿却往相反的方向逃跑。他下到约帕港口，"上了他施的船，要与耶和华的面背道而驰"（1:3直译）。

神使海上起了大风暴。水手们各人哀求自己的神，约拿却在船底睡觉。当掣签掣出约拿时，他坦白承认是自己的缘故。约拿说："你们将我抬起来，抛在海中，海就平静了"（1:12）。水手们不愿意这样做，但最终无奈将约拿抛入海中——风浪果然平静。

这些外邦水手的表现令人感动——他们比约拿更有良知。他们"大大敬畏耶和华，向耶和华献祭，并且许愿"（1:16）。讽刺的是，约拿逃避传道，却无意中使一船外邦人归向了神。`,
    content_en: `Jonah opens with the most unique prophetic story — God sent Jonah to proclaim judgment against Nineveh, but Jonah fled in the opposite direction. He went to Joppa, "and found a ship going to Tarshish: so he paid the fare thereof, and went down into it, to go with them unto Tarshish from the presence of the LORD" (1:3).

God hurled a great storm upon the sea. The sailors each cried to their own gods while Jonah slept below deck. When lots fell on Jonah, he confessed it was his fault. Jonah said: "Take me up, and cast me forth into the sea; so shall the sea be calm unto you" (1:12). The sailors were reluctant but finally cast Jonah overboard — and the storm immediately ceased.

These pagan sailors' behavior is deeply moving — they showed more conscience than Jonah. They "feared the LORD exceedingly, and offered a sacrifice unto the LORD, and made vows" (1:16). Ironically, Jonah avoided preaching yet inadvertently brought a whole ship of Gentiles to God.`,
  },
  {
    title_zh: `二、鱼腹中的祷告与尼尼微的悔改（第2-3章）`,
    title_en: `II. Prayer from the Fish and Nineveh's Repentance (Ch. 2–3)`,
    content_zh: `"耶和华安排一条大鱼吞了约拿，他在鱼腹中三日三夜"（1:17）。耶稣亲自将此事作为祂死而复活的预表："约拿三日三夜在大鱼肚腹中，人子也要这样三日三夜在地里头"（太12:40）。

约拿在鱼腹中的祷告（2章）是一首感恩诗，不是求救诗——他在绝境中已经经历了神的拯救。"我从你眼前虽被驱逐，我仍要仰望你的圣殿"（2:4）。"救恩出于耶和华"（2:9）——这是全书最核心的神学宣告。

第三章约拿终于去了尼尼微。他的信息极简："再等四十日，尼尼微必倾覆了！"（3:4）结果整个城市从王到百姓都悔改了——"尼尼微人信服神，便宣告禁食，从最大的到至小的都穿麻衣"（3:5）。王甚至从宝座上下来，坐在灰中。

这是旧约中最大规模的悔改事件。一个异教大城的全城悔改——而以色列民听了无数先知的呼吁却始终不悔改。这个对比是约拿书最尖锐的讽刺。`,
    content_en: `"Now the LORD had prepared a great fish to swallow up Jonah. And Jonah was in the belly of the fish three days and three nights" (1:17). Jesus Himself made this a type of His death and resurrection: "For as Jonas was three days and three nights in the whale's belly; so shall the Son of man be three days and three nights in the heart of the earth' (Matt 12:40).

Jonah's prayer from the fish (ch. 2) is a thanksgiving psalm, not a rescue plea — in extremity he had already experienced God's deliverance. "I am cast out of thy sight; yet I will look again toward thy holy temple" (2:4). "Salvation is of the LORD" (2:9) — this is the book's most central theological declaration.

In chapter 3, Jonah finally went to Nineveh. His message was minimal: "Yet forty days, and Nineveh shall be overthrown" (3:4). The entire city repented, from king to commoners — "So the people of Nineveh believed God, and proclaimed a fast, and put on sackcloth, from the greatest of them even to the least of them" (3:5). The king even came down from his throne to sit in ashes.

This is the Old Testament's largest-scale repentance event. An entire pagan metropolis repented — while Israel heard countless prophets' appeals yet never truly repented. This contrast is Jonah's sharpest irony.`,
  },
  {
    title_zh: `三、约拿的愤怒与神的怜悯（第4章）`,
    title_en: `III. Jonah's Anger and God's Compassion (Ch. 4)`,
    content_zh: `第四章揭示了约拿逃跑的真正原因——不是因为害怕，而是因为他知道神会怜悯尼尼微人，而他不想让仇敌得救。"耶和华啊，我在本国的时候岂不是这样说吗？我知道你是有恩典、有怜悯的神，不轻易发怒，有丰盛的慈爱，并且后悔不降所说的灾，所以我急速逃往他施去"（4:2）。

约拿宁愿死也不愿看见尼尼微人得救——"我死了比活着还好"（4:3）。他坐在城外等着看尼尼微被毁——他盼望审判，不盼望怜悯。

神用一棵蓖麻树来教导约拿。蓖麻一夜长起来给约拿遮荫，约拿因此"大大喜乐"（4:6）。第二天虫子咬了蓖麻，蓖麻枯萎，约拿被烈日曝晒，再次求死。

然后神说出了全书最重要的话："你因这棵蓖麻发怒合乎理吗？"约拿说合理。神回答："这蓖麻不是你栽种的，也不是你培养的，一夜发生，一夜干死，你尚且爱惜；何况这尼尼微大城，其中不能分辨左手右手的有十二万多人，并有许多牲畜，我岂能不爱惜呢？"（4:10-11）

全书以一个问号结束——神的问题没有记录约拿的回答。这个开放式结尾是给每一位读者的——你会怎么回答？你愿意神怜悯你的仇敌吗？`,
    content_en: `Chapter 4 reveals the real reason Jonah fled — not fear but because he knew God would have mercy on the Ninevites, and he did not want his enemies saved. "O LORD, was not this my saying, when I was yet in my country? Therefore I fled before unto Tarshish: for I knew that thou art a gracious God, and merciful, slow to anger, and of great kindness, and repentest thee of the evil" (4:2).

Jonah preferred death to seeing Nineveh saved — "it is better for me to die than to live" (4:3). He sat outside the city waiting to watch Nineveh's destruction — he longed for judgment, not mercy.

God used a gourd plant to teach Jonah. The gourd grew overnight to shade him, and Jonah "was exceeding glad of the gourd" (4:6). The next day a worm killed the plant; exposed to scorching sun, Jonah again wished for death.

Then God spoke the book's most important words: "Doest thou well to be angry for the gourd?" Jonah said he did. God replied: "Thou hast had pity on the gourd, for the which thou hast not laboured, neither madest it grow; which came up in a night, and perished in a night: And should not I spare Nineveh, that great city, wherein are more than sixscore thousand persons that cannot discern between their right hand and their left hand; and also much cattle?" (4:10–11)

The book ends with a question mark — God's question with no recorded answer from Jonah. This open ending is for every reader — how would you answer? Are you willing for God to show mercy to your enemies?`,
  },
];

const overview = {
  zh: `约拿书（4章）是小先知书中最独特的一卷——它不是先知的讲道集，而是一个完整的叙事故事。主角约拿是以色列先知（列王纪下14:25提到他），但这卷书的焦点不是他的预言，而是他与神之间关于怜悯的争论。

约拿书的核心问题是：神的怜悯应该有边界吗？约拿认为应该——仇敌不配得救。神认为不应该——十二万不能分辨左手右手的人，难道不值得怜悯？这个问题至今仍在拷问每一个信徒。`,
  en: `Jonah (4 chapters) is the most unique Minor Prophet — not a collection of prophetic speeches but a complete narrative story. The protagonist Jonah was an Israelite prophet (mentioned in 2 Kings 14:25), but the book's focus is not his prophecy but his argument with God about mercy.

Jonah's central question: Should God's mercy have limits? Jonah thought yes — enemies don't deserve salvation. God said no — are more than 120,000 people who cannot tell their right from their left not worth compassion? This question still challenges every believer today.`,
};

const outline = [
  ["1章", "约拿逃跑与风暴", "Ch. 1", "Jonah's Flight and the Storm"],
  ["2章", "鱼腹中的祷告", "Ch. 2", "Prayer from the Fish"],
  ["3章", "尼尼微的悔改", "Ch. 3", "Nineveh's Repentance"],
  ["4章", "约拿的愤怒与神的怜悯", "Ch. 4", "Jonah's Anger; God's Compassion"],
];

const theology = {
  title_zh: `核心神学：神的怜悯超越民族边界`,
  title_en: `Core Theology: God's Mercy Transcends National Boundaries`,
  content_zh: `约拿书不是一个关于大鱼的故事，而是一个关于神的怜悯和先知的偏见的深刻神学叙事。

第一，神的怜悯不受民族限制。约拿逃跑的原因不是惧怕，而是偏见——他不愿意尼尼微人（亚述人，以色列的仇敌）悔改得救。"我知道你是有恩典、有怜悯的神，不轻易发怒，有丰盛的慈爱，并且后悔不降所说的灾"（4:2）。约拿知道神的属性，但他不喜欢神把这属性应用在外邦人身上。这预表了犹太人对外邦人归信的抗拒——使徒行传中彼得和保罗都面对同样的挑战。

第二，真正的悔改。尼尼微全城的悔改是旧约中最戏剧性的归正记录——从王到百姓，连牲畜都披上麻布（3:8）。耶稣引用尼尼微人的悔改来责备祂那个时代的人："尼尼微人……听了约拿所传的就悔改了。看哪，在这里有一人比约拿更大"（太12:41）。如果异教徒的尼尼微能悔改，听到基督福音的人更没有借口不悔改。

第三，约拿作为基督的预表。"约拿三日三夜在大鱼肚腹中，人子也要这样三日三夜在地里头"（太12:40）。耶稣亲自将约拿的经历解释为祂死亡和复活的预表。大鱼不是故事的重点——它指向的是基督从死亡中复活的大能。

第四，蓖麻的教训。神最后用一棵蓖麻教导约拿："你为这蓖麻发怒合乎理吗？"（4:9）。约拿为一棵植物的枯萎发怒，却不怜悯十二万不能分辨左右手的尼尼微人。这是对一切宗教偏见最尖锐的批判——我们常常关心自己的舒适胜过他人的灵魂。`,
  content_en: `Jonah is not a story about a great fish but a profound theological narrative about God's mercy and a prophet's prejudice.

First, God's mercy is not limited by nationality. Jonah fled not from fear but from prejudice — he did not want the Ninevites (Assyrians, Israel's enemies) to repent and be saved. "I knew that thou art a gracious God, and merciful, slow to anger, and of great kindness, and repentest thee of the evil" (4:2). Jonah knew God's attributes but disliked God applying them to Gentiles. This prefigures Jewish resistance to Gentile conversion — Peter and Paul faced the same challenge in Acts.

Second, genuine repentance. Nineveh's city-wide repentance is the most dramatic conversion in the Old Testament — from the king to the common people, even the livestock were covered with sackcloth (3:8). Jesus cited Nineveh's repentance to rebuke His own generation: "The men of Nineveh... repented at the preaching of Jonas; and, behold, a greater than Jonas is here" (Matt 12:41). If pagan Nineveh could repent, those who hear Christ's gospel have even less excuse.

Third, Jonah as a type of Christ. "As Jonas was three days and three nights in the whale's belly; so shall the Son of man be three days and three nights in the heart of the earth" (Matt 12:40). Jesus Himself interpreted Jonah's experience as a type of His death and resurrection. The great fish is not the story's point — it points to Christ's power over death.

Fourth, the lesson of the gourd. God taught Jonah through a plant: "Doest thou well to be angry for the gourd?" (4:9). Jonah was angry over a withered plant yet had no compassion for 120,000 Ninevites who "cannot discern between their right hand and their left hand." This is the sharpest critique of all religious prejudice — we often care more about our own comfort than others' souls.`,
};

const keyVerse = {
  zh: `"这尼尼微大城，其中不能分辨左手右手的有十二万多人，并有许多牲畜，我岂能不爱惜呢？"（约拿书 4:11）`,
  en: `"And should not I spare Nineveh, that great city, wherein are more than sixscore thousand persons that cannot discern between their right hand and their left hand; and also much cattle?" (Jonah 4:11)`,
};

const info = { nameZh: `约拿书`, nameEn: `Jonah`, author: `约拿（或后人记述）`, date: `约公元前8世纪`, chapters: `4章`, backHref: `/old-testament/minor-prophets`, backLabel: `小先知书`, bibleId: `JON` };


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