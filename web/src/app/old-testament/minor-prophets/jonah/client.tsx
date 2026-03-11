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
  {
    title_zh: `四、约拿书的弥赛亚预表与基督应验`,
    title_en: `IV. Jonah as Messianic Type and Christ's Fulfillment`,
    content_zh: `约拿书在新约中有明确的弥赛亚意义。耶稣亲自援引约拿为自己的预表："约拿三日三夜在大鱼肚腹中，人子也要这样三日三夜在地里头"（太12:40）。约拿在鱼腹中的经历预表了基督的死与复活——三天三夜之后，约拿从死亡边缘被释放，正如基督在第三天复活。

耶稣还提到"尼尼微人要在审判时与这世代同站，定这世代的罪；因为尼尼微人听了约拿所传的就悔改了，看哪！在这里有一人比约拿更大"（太12:41）。尼尼微人听了约拿的传道就悔改，而耶稣来了，传道更大，却有人不肯悔改——比较何其鲜明。

约拿书的神学意涵也是整本圣经的微缩：人的逃跑与神的追寻、人的自私与神的怜悯、局限的民族观与神无限的恩典。神的怜悯超越了约拿所能理解的边界——超越了犹太人与外邦人、朋友与仇敌的界限。这正是福音的核心："神爱世人，甚至将他的独生子赐给他们，叫一切信他的，不至灭亡，反得永生"（约3:16）——"世人"包括了每一个尼尼微城的罪人。`,
    content_en: `Jonah carries explicit Messianic significance in the New Testament. Jesus Himself cited Jonah as a type of Himself: "For as Jonas was three days and three nights in the whale's belly; so shall the Son of man be three days and three nights in the heart of the earth" (Matt 12:40, KJV). Jonah's time in the fish's belly prefigures Christ's death and resurrection — after three days, Jonah was released from the brink of death, just as Christ rose on the third day.

Jesus also said: "The men of Nineveh shall rise in judgment with this generation, and shall condemn it: because they repented at the preaching of Jonas; and, behold, a greater than Jonas is here" (Matt 12:41, KJV). The Ninevites repented at Jonah's preaching; Jesus came with greater preaching, yet some refused to repent — the contrast is pointed.

Jonah's theological significance is a miniature of the entire Bible: human flight and God's pursuit, human selfishness and God's compassion, narrow nationalism and God's limitless grace. God's mercy extends beyond what Jonah could comprehend — beyond the boundaries of Jew and Gentile, friend and enemy. This is the gospel's core: "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life" (John 3:16, KJV) — "the world" includes every sinner in Nineveh.`,
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

const keyVerse = {
  zh: `"这尼尼微大城，其中不能分辨左手右手的有十二万多人，并有许多牲畜，我岂能不爱惜呢？"（约拿书 4:11）`,
  en: `"And should not I spare Nineveh, that great city, wherein are more than sixscore thousand persons that cannot discern between their right hand and their left hand; and also much cattle?" (Jonah 4:11)`,
};

const info = { nameZh: `约拿书`, nameEn: `Jonah`, author: `约拿（或后人记述）`, date: `约公元前8世纪`, chapters: `4章`, backHref: `/old-testament/minor-prophets`, backLabel: `小先知书`, bibleId: `JNA` };

export default function BookGuide() {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link href={info.backHref} className="inline-flex items-center gap-1 text-sm text-[var(--color-accent)] hover:underline mb-6">← {info.backLabel}</Link>
      <div className="text-center mb-10"><span className="text-5xl mb-4 block">📖</span><h1 className="font-serif-cn text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-2">{info.nameZh}导读</h1><p className="text-base text-[var(--color-text-secondary)] italic mb-4">A Guide to {info.nameEn}</p><div className="flex justify-center gap-4 text-xs text-[var(--color-text-secondary)]"><span>✍️ 作者：{info.author}</span><span>📅 {info.date}</span><span>📄 {info.chapters}</span></div></div>
      <div className="mb-10 p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)]"><h2 className="font-serif-cn text-lg font-bold text-[var(--color-text)] mb-3">📋 全书概览</h2><div className="flex items-start gap-2 mb-3"><SpeakButton text={overview.zh} lang="zh" /><p className="text-sm text-[var(--color-text)] leading-relaxed font-serif-cn">{overview.zh}</p></div><div className="flex items-start gap-2"><SpeakButton text={overview.en} lang="en" /><p className="text-xs text-[var(--color-text-secondary)] italic leading-relaxed">{overview.en}</p></div></div>
      <div className="mb-10 p-5 rounded-xl bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border border-amber-200 dark:border-amber-800"><p className="text-sm font-bold text-amber-800 dark:text-amber-300 mb-1">🔑 金句 Key Verse</p><p className="font-serif-cn text-base text-[var(--color-text)] font-bold leading-relaxed">{keyVerse.zh}</p><p className="text-sm text-[var(--color-text-secondary)] italic mt-1">{keyVerse.en}</p></div>
      <div className="mb-6"><h2 className="font-serif-cn text-xl font-bold text-[var(--color-text)] mb-1">📚 分段导读</h2><p className="text-xs text-[var(--color-text-secondary)] italic mb-4">Section-by-Section Guide</p></div>
      <div className="space-y-4">{sections.map((sec, i) => (<div key={i} className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] overflow-hidden"><button onClick={() => setExpandedIdx(expandedIdx === i ? null : i)} className="w-full flex items-center justify-between px-6 py-4 text-left cursor-pointer hover:bg-[var(--color-accent)]/5 transition-colors"><div><h3 className="font-serif-cn text-base font-bold text-[var(--color-text)]">{sec.title_zh}</h3><p className="text-xs text-[var(--color-text-secondary)] italic">{sec.title_en}</p></div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-5 h-5 text-[var(--color-text-secondary)] transition-transform ${expandedIdx === i ? 'rotate-180' : ''}`}><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" /></svg></button>{expandedIdx === i && (<div className="px-6 pb-5 border-t border-[var(--color-border)]"><div className="flex items-start gap-2 mt-4 mb-4"><SpeakButton text={sec.content_zh} lang="zh" /><p className="text-sm text-[var(--color-text)] leading-relaxed font-serif-cn whitespace-pre-line">{sec.content_zh}</p></div><div className="flex items-start gap-2"><SpeakButton text={sec.content_en} lang="en" /><p className="text-xs text-[var(--color-text-secondary)] italic leading-relaxed whitespace-pre-line">{sec.content_en}</p></div></div>)}</div>))}</div>
      <div className="mt-10 p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)]"><h2 className="font-serif-cn text-lg font-bold text-[var(--color-text)] mb-4">🗂️ 章节大纲</h2>{(() => { const half = Math.ceil(outline.length / 2); const col1 = outline.slice(0, half); const col2 = outline.slice(half); const renderItem = ([zh, desc, chEn, descEn]: string[], i: number) => (<div key={i} className="py-1.5 border-b border-[var(--color-border)]/30 last:border-b-0"><div className="flex items-baseline gap-2"><span className="font-bold text-[var(--color-accent)] min-w-[65px] shrink-0">{zh}</span><span className="text-[var(--color-text)]">{desc}</span></div><div className="flex items-baseline gap-2 mt-0.5"><span className="text-[var(--color-text-secondary)] text-xs italic min-w-[65px] shrink-0">{chEn}</span><span className="text-[var(--color-text-secondary)] text-xs italic">{descEn}</span></div></div>); return (<div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 text-sm"><div>{col1.map((item, i) => renderItem(item, i))}</div><div>{col2.map((item, i) => renderItem(item, i + half))}</div></div>); })()}</div>
      <div className="mt-8 text-center"><Link href={`/bible/${info.bibleId}`} className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--color-accent)] text-white font-bold hover:opacity-90 transition-opacity">📖 阅读{info.nameZh} Read {info.nameEn}</Link></div>
    </div>
  );
}