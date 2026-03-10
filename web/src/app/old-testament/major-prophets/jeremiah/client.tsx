'use client';
import Link from 'next/link';
import SpeakButton from '@/components/SpeakButton';
import { useState } from 'react';

const sections = [
  {
    title_zh: `一、耶利米的呼召与早期信息（1-10章）`,
    title_en: `I. Jeremiah's Call and Early Messages (Ch. 1-10)`,
    content_zh: `耶利米在母腹中就被拣选和圣别（1:5）。他抗议说自己不会说话，神回答："你往我所差你去的人那里去，我所吩咐你说的话你都要说"（1:7）。使命先于感觉，呼召大过能力。"不要惧怕他们，因为我与你同在，要拯救你"（1:8）——神的同在是先知使命的唯一倚靠。

以色列的罪被定性为两件恶事："离弃我这活水的泉源，为自己凿了水池，是破裂不能存水的水池"（2:13）。偶像崇拜不只是宗教问题，更是属灵的背叛——离弃生命之源而去依靠无用的东西。

第7章的圣殿讲道（"圣殿门"讲章）直接挑战了以色列的宗教自满："这就是耶和华的殿，是耶和华的殿，是耶和华的殿"（7:4）——仅仅倚靠圣殿的存在不能带来拯救。这个信息使耶利米几乎丧命，却成为以色列需要听见的最重要信息。`,
    content_en: `Jeremiah was chosen and consecrated before birth (1:5). He protested that he could not speak; God responded: "Thou shalt go to all that I shall send thee, and whatsoever I command thee thou shalt speak" (1:7). Mission precedes feelings; calling exceeds ability. "Be not afraid of their faces: for I am with thee to deliver thee" (1:8) -- God's presence is the prophet's only support.

Israel's sin is defined as two evils: "They have forsaken me the fountain of living waters, and hewed them out cisterns, broken cisterns, that can hold no water" (2:13). Idolatry is not just a religious issue but spiritual betrayal -- forsaking the source of life for something useless.

The Temple Sermon in chapter 7 directly challenges Israel's religious complacency: "The temple of the LORD, The temple of the LORD, The temple of the LORD, are these" (7:4) -- merely relying on the temple's existence cannot bring salvation. This message nearly cost Jeremiah his life yet was the most vital message Israel needed to hear.`,
  },
  {
    title_zh: `二、"流泪的先知"：内心的挣扎（11-20章）`,
    title_en: `II. "The Weeping Prophet": Inner Struggles (Ch. 11-20)`,
    content_zh: `耶利米书的独特之处是它记录了先知内心的挣扎——"耶利米的哀叹"（11-20章穿插其中）。他控诉神："耶和华啊，我若与你争辩，你是公义的；我还要与你说理"（12:1）。神没有因此责备他，而是更深地向他启示。

第18章窑匠的比喻教导了神的主权。泥在窑匠手中随他的意思成形——神有权按他的旨意塑造历史和民族。这不是对公义的抹杀，而是对主权的宣告。

第20章是耶利米最深的绝望："我必不再提耶和华，也不再奉他的名说话"（20:9）——但他做不到，"他的话在我心里，如同烧着的火闭塞在我骨中"（20:9）。神的话语不能被压制。即使在最深的绝望中，先知也无法沉默。这是真正的先知使命——不是选择，而是被逼迫。`,
    content_en: `Jeremiah's uniqueness lies in its record of the prophet's inner struggles -- "Jeremiah's laments" woven throughout chapters 11-20. He contended with God: "Righteous art thou, O LORD, when I plead with thee: yet let me talk with thee of thy judgments" (12:1). God did not rebuke him but revealed deeper truths.

The potter's parable in chapter 18 teaches God's sovereignty. Clay is shaped in the potter's hands according to his will -- God has authority to shape history and nations as He purposes. This is not negating justice but declaring sovereignty.

Chapter 20 records Jeremiah's deepest despair: "I will not make mention of him, nor speak any more in his name" (20:9) -- but he could not stop, for "his word was in mine heart as a burning fire shut up in my bones" (20:9). God's word cannot be suppressed. Even in deepest despair, the prophet cannot be silent. This is the true prophetic calling -- not a choice but a compulsion.`,
  },
  {
    title_zh: `三、新约的应许与安慰之书（21-33章）`,
    title_en: `III. The Promise of the New Covenant and the Book of Consolation (Ch. 21-33)`,
    content_zh: `耶利米在审判之声中穿插了安慰的信息。第29章写给被掳者的信是全书最重要的牧灵章节之一："我知道我向你们所怀的意念是赐平安的意念，不是降灾祸的意念，要叫你们末后有指望"（29:11）。被掳不是神遗弃他们，而是神在更大计划中的安排。

30-33章被称为"安慰之书"——是全书最光明的段落。其中最荣耀的应许是新约："日子将到，我要与以色列家和犹大家另立新约……我要将我的律法放在他们里面，写在他们心上"（31:31-33）。

第32章记录了一个令人惊奇的象征行动：围城期间，耶利米花钱买地。耶路撒冷即将陷落，他却买地——因为"在这地必有人再买田地"（32:44）。他用金钱宣告了盼望：神的应许比眼前的绝望更真实。`,
    content_en: `Jeremiah interspersed consolation amid judgment. Chapter 29's letter to the exiles is one of the book's most important pastoral sections: "I know the thoughts that I think toward you, saith the LORD, thoughts of peace, and not of evil, to give you an expected end" (29:11). Exile was not God's abandonment but part of His larger plan.

Chapters 30-33, the "Book of Consolation," are the brightest section. The most glorious promise is the new covenant: "Behold, the days come, saith the LORD, that I will make a new covenant with the house of Israel... I will put my law in their inward parts, and write it in their hearts" (31:31-33).

Chapter 32 records a stunning symbolic act: during the siege, Jeremiah purchased land. Jerusalem was about to fall, yet he bought property -- "for houses and fields and vineyards shall be possessed again in this land" (32:44). He declared hope with money: God's promises are more real than present despair.`,
  },
  {
    title_zh: `四、陷落与后期信息：审判的应验（34-45章）`,
    title_en: `IV. The Fall and Later Messages: Judgment Fulfilled (Ch. 34-45)`,
    content_zh: `耶路撒冷陷落（587/586 BC）的前后是耶利米书最紧张的部分。西底家王一再向耶利米求神谕，耶利米一再说同样的话："降服巴比伦王，你们的城就不被烧毁"（38:17）——但王因惧怕大臣而无法顺从。

耶利米被丢在枯井中（38章），被大臣们视为叛国者。但神通过埃提阿伯人以伯米勒救了他。即使被自己的国家抛弃，神没有抛弃他。

城陷后，耶利米选择留在废墟中（40章），与贫穷的余民同在。犹大的官长基大利被暗杀后，余民逃往埃及，强迫耶利米同去（43章）。先知至死忠心传讲神的话，即使无人肯听。"忠心不保证成功，但保证神的同在"——这是耶利米最后的教导。`,
    content_en: `The period around Jerusalem's fall (587/586 BC) is Jeremiah's most intense section. King Zedekiah repeatedly sought divine oracles from Jeremiah; Jeremiah repeatedly gave the same answer: "If thou wilt assuredly go forth unto the king of Babylon's princes... this city shall not be burned with fire" (38:17). But the king, fearing his officials, could not obey.

Jeremiah was cast into a cistern (ch. 38), viewed as a traitor by the officials. Yet God saved him through the Ethiopian Ebed-Melech. Even abandoned by his own nation, God did not abandon him.

After the city fell, Jeremiah chose to remain in the ruins (ch. 40), with the poor remnant. After Governor Gedaliah's assassination, the remnant fled to Egypt, forcing Jeremiah to accompany them (ch. 43). The prophet faithfully proclaimed God's word until his death, even when no one would listen. "Faithfulness does not guarantee success, but guarantees God's presence" -- this is Jeremiah's final lesson.`,
  },
  {
    title_zh: `五、列国的预言与耶利米书的神学遗产（46-52章）`,
    title_en: `V. Oracles Against the Nations and Jeremiah's Theological Legacy (Ch. 46-52)`,
    content_zh: `最后七章是针对列国的预言——埃及（46章）、非利士（47章）、摩押（48章）、亚扪和以东（49章）、巴比伦（50-51章）。神不仅是以色列的神，更是万国的审判主。巴比伦虽然是神惩罚以色列的工具，终必也要受神的审判（51:56）。

耶路撒冷陷落的历史叙事（52章）以中性笔触结束，验证了耶利米一生预言的真实性——他所说的一切都应验了。约雅斤王在巴比伦被善待（52:31-34）是一丝盼望的尾声：大卫的后裔仍然存活，神的应许尚未完结。

耶利米书的神学遗产：(1)先知的忠心胜过成功；(2)神在审判中仍然怀着怜悯；(3)新约的应许——内心的改变，不是外在的守规——在基督里完全应验。耶利米是受苦先知，也是基督受苦形象的预表。`,
    content_en: `The final seven chapters contain oracles against the nations -- Egypt (ch. 46), Philistia (ch. 47), Moab (ch. 48), Ammon and Edom (ch. 49), Babylon (ch. 50-51). God is not only Israel's deity but the judge of all nations. Though Babylon was God's instrument for punishing Israel, it too would face God's judgment (51:56).

The historical account of Jerusalem's fall (ch. 52) ends with a neutral tone, verifying the truthfulness of Jeremiah's lifelong prophecies -- everything he said was fulfilled. King Jehoiachin's favorable treatment in Babylon (52:31-34) is a sliver of hope at the close: the Davidic heir still lives; God's promises are not yet finished.

Jeremiah's theological legacy: (1) prophetic faithfulness surpasses success; (2) God's mercy endures within judgment; (3) the new covenant promise -- inner transformation, not external rule-keeping -- was fully fulfilled in Christ. Jeremiah is the suffering prophet and a foreshadowing of Christ's suffering image.`,
  },
]

const overview = {
  zh: `耶利米书是旧约第二大先知书（52章），记载了先知耶利米约四十年的事奉（约公元前627-586年），从约西亚王到耶路撒冷陷落。耶利米被称为"流泪的先知"，因为他在宣告审判的同时深深地为百姓哀痛。

耶利米书不按时间顺序编排，而是将主题相关的信息组合在一起。核心信息是双重的：审判即将来临（因为犹大背约），但新约的应许更加荣耀（31:31-34）。耶利米书教导我们：忠于神的呼召可能意味着一生的孤独和苦难，但忠心的果效超越一个人的一生。`,
  en: `Jeremiah is the second longest prophetic book (52 chapters), recording the prophet's approximately forty-year ministry (c. 627–586 BC), from King Josiah to Jerusalem's fall. Jeremiah is called "the weeping prophet" because he deeply grieved for the people even while announcing judgment.

Jeremiah is not arranged chronologically but groups thematically related messages. Its dual message: judgment is imminent (because Judah broke the covenant), yet the New Covenant promise is even more glorious (31:31–34). Jeremiah teaches: faithfulness to God's calling may mean a lifetime of loneliness and suffering, but the fruit of faithfulness outlasts a single life.`,
};

const outline = [
  ["1章", "耶利米蒙召", "Ch. 1", "Jeremiah's Call"],
  ["2-6章", "犹大的背道", "Ch. 2–6", "Judah's Apostasy"],
  ["7-10章", "圣殿讲道与偶像批判", "Ch. 7–10", "Temple Sermon; Idolatry Critique"],
  ["11-20章", "约的咒诅与先知的挣扎", "Ch. 11–20", "Covenant Curses; Prophet's Laments"],
  ["21-29章", "对王与假先知的审判", "Ch. 21–29", "Judgment on Kings and False Prophets"],
  ["30-33章", "安慰之书与新约应许", "Ch. 30–33", "Book of Comfort; New Covenant"],
  ["34-39章", "围城与陷落", "Ch. 34–39", "Siege and Fall"],
  ["40-45章", "余民与逃往埃及", "Ch. 40–45", "Remnant; Flight to Egypt"],
  ["46-51章", "列国审判", "Ch. 46–51", "Oracles Against Nations"],
  ["52章", "耶路撒冷陷落与约雅斤获释", "Ch. 52", "Jerusalem's Fall; Jehoiachin Released"],
];

const keyVerse = {
  zh: `"我要将我的律法放在他们里面，写在他们心上。我要作他们的神，他们要作我的子民。"（耶利米书 31:33）`,
  en: `"I will put my law in their inward parts, and write it in their hearts; and will be their God, and they shall be my people." (Jeremiah 31:33)`,
};

const info = { nameZh: `耶利米书`, nameEn: `Jeremiah`, author: `耶利米（书记巴录）`, date: `约公元前627-586年`, chapters: `52章`, backHref: `/old-testament/major-prophets`, backLabel: `大先知书`, bibleId: `JER` };

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