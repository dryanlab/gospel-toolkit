'use client';
import Link from 'next/link';
import SpeakButton from '@/components/SpeakButton';
import { useState } from 'react';

const sections = [
  {
    title_zh: `一、建殿的呼召（1章）`,
    title_en: `I. The Call to Build (Ch. 1)`,
    content_zh: `哈该在波斯王大利乌二年（公元前520年）事奉。被掳归回的犹太人已经回到耶路撒冷十六年，但圣殿的重建工程因外邦人的阻挠而停滞。百姓开始为自己建造"天花板的房屋"，却说"建造耶和华殿的时候尚未来到"（1:2）。

神通过哈该质问百姓的优先次序："这殿仍然荒凉，你们自己还住天花板的房屋吗？"（1:4）然后指出他们的经济困境正是因为忽略了圣殿——"你们撒的种多，收的却少；你们吃，却不得饱；喝，却不得足；穿衣服，却不得暖；得工钱的，将工钱装在破漏的囊中"（1:6）。

这不是说神需要一座建筑，而是说百姓的心已经偏离了正确的优先次序。先求神的国和神的义——这个原则从旧约到新约一脉相承（太6:33）。

哈该的呼召得到了立即的回应——省长所罗巴伯和大祭司约书亚带领百姓开工。"耶和华激动犹大省长撒拉铁的儿子所罗巴伯和约撒答的儿子大祭司约书亚，并剩下之百姓的心，他们就来为万军之耶和华他们神的殿做工"（1:14）。从神的话语到百姓的行动，只隔了二十三天。`,
    content_en: `Haggai ministered in the second year of King Darius (520 BC). The returned exiles had been back in Jerusalem for sixteen years, but temple reconstruction had stalled due to opposition. The people began building their own "cieled houses" while saying "The time is not come, the time that the LORD's house should be built' (1:2).

God through Haggai challenged their priorities: "Is it time for you, O ye, to dwell in your cieled houses, and this house lie waste?" (1:4). Then pointed out their economic hardship resulted from neglecting the temple — "Ye have sown much, and bring in little; ye eat, but ye have not enough; ye drink, but ye are not filled with drink; ye clothe you, but there is none warm; and he that earneth wages earneth wages to put it into a bag with holes" (1:6).

This is not that God needs a building, but that the people's hearts had shifted from right priorities. Seek first His kingdom and His righteousness — this principle runs from Old to New Testament (Matt 6:33).

Haggai's call received immediate response — governor Zerubbabel and high priest Joshua led the people to work. "And the LORD stirred up the spirit of Zerubbabel the son of Shealtiel, governor of Judah, and the spirit of Joshua the son of Josedech, the high priest, and the spirit of all the remnant of the people; and they came and did work in the house of the LORD of hosts, their God" (1:14). From God's word to the people's action — only twenty-three days.`,
  },
  {
    title_zh: `二、后来的荣耀与所罗巴伯的印记（2章）`,
    title_en: `II. The Latter Glory and Zerubbabel's Signet (Ch. 2)`,
    content_zh: `工程开始后，见过所罗门圣殿的老人们哭了——新殿太简陋了。神安慰他们："这殿后来的荣耀必大过先前的荣耀。在这地方我必赐平安"（2:9）。这不只是说第二圣殿会比第一圣殿辉煌——事实上它在外表上远不如——而是指向基督：耶稣亲自进入这殿，神的荣耀以道成肉身的方式充满了这殿。

第二章后半用两个祭司律法的比喻教导百姓：圣洁不会通过接触传递，但不洁会（2:12-13）。同样，外在的宗教行为不能使人成圣，但罪的污染却会蔓延。

全书以对所罗巴伯的特殊应许结束——"万军之耶和华说：我仆人撒拉铁的儿子所罗巴伯啊，到那日，我必以你为印，因我拣选了你"（2:23）。"印记"（signet ring）是君王权柄的象征。所罗巴伯的祖父约雅敬王曾被神"摘下"如印记（耶22:24），现在神要"重新戴上"所罗巴伯——大卫王室的盼望没有断绝。所罗巴伯出现在耶稣的家谱中（太1:12），这个应许最终在基督身上成全。`,
    content_en: `After work began, the elders who had seen Solomon's temple wept — the new temple was so modest. God comforted them: "The glory of this latter house shall be greater than of the former, saith the LORD of hosts: and in this place will I give peace" (2:9). This does not merely mean the Second Temple would outshine the First — it actually did not in appearance — but points to Christ: Jesus Himself entered this temple, and God's glory filled it in incarnate form.

The second half of chapter 2 uses two priestly law illustrations: holiness does not transfer by contact, but uncleanness does (2:12–13). Similarly, outward religious acts cannot sanctify, but sin's contamination spreads.

The book ends with a special promise to Zerubbabel — "In that day, saith the LORD of hosts, will I take thee, O Zerubbabel, my servant, the son of Shealtiel, saith the LORD, and will make thee as a signet: for I have chosen thee, saith the LORD of hosts" (2:23). A "signet ring" symbolizes royal authority. Zerubbabel's grandfather King Jehoiachin had been "pulled off" like a signet (Jer 22:24); now God would "put on" Zerubbabel again — David's royal hope was not extinguished. Zerubbabel appears in Jesus' genealogy (Matt 1:12); this promise was ultimately fulfilled in Christ.`,
  },
  {
    title_zh: `三、"万国所羡慕的必来到"——弥赛亚的应许（2:6-9, 20-23）`,
    title_en: `III. "The Desire of All Nations Shall Come" -- Messianic Promise (2:6-9, 20-23)`,
    content_zh: `哈该书虽短，却包含极重要的弥赛亚预言。"过不多时，我必再一次震动天地、沧海与旱地。我必震动万国；万国所羡慕的必来到，我就使这殿满了荣耀。这是万军之耶和华说的"（2:6-7）。

这殿后来的荣耀必大过先前的荣耀（2:9）——所罗门的圣殿金碧辉煌，所罗巴伯的圣殿远不能比。但神说后者的荣耀更大——因为基督将亲自踏入这殿。当耶稣在圣殿教训人时，这预言便应验了。

书末论到所罗巴伯——"我必以你为印，因我拣选了你"（2:23）。大卫后裔的王室血脉虽经被掳几乎断绝，神仍然保守了它，直到基督从这血脉中诞生。哈该的信息是：不要看眼前的卑微，要看神将来的荣耀。`,
    content_en: `Though brief, Haggai contains a vital Messianic prophecy. "Yet once, it is a little while, and I will shake the heavens, and the earth, and the sea, and the dry land; And I will shake all nations, and the desire of all nations shall come: and I will fill this house with glory, saith the LORD of hosts" (2:6-7).

"The glory of this latter house shall be greater than of the former" (2:9) -- Solomon's temple was magnificent and Zerubbabel's could not compare. Yet God said the latter would surpass it -- because Christ Himself would walk within its courts. When Jesus taught in the temple, this prophecy was fulfilled.

At the book's end, God speaks of Zerubbabel: "I will make thee as a signet: for I have chosen thee" (2:23). Though the royal line of David was nearly severed by exile, God preserved it until Christ was born from this lineage. Haggai's message: do not despise the day of small things, but look to God's coming glory.`,
  }
];

const overview = {
  zh: `哈该书（2章）是旧约中最短的书卷之一，也是最有日期记录的先知书——四篇信息都标明了精确日期（公元前520年8月至12月）。哈该与撒迦利亚同时事奉，呼吁归回的犹太人重建圣殿。

哈该书的核心信息是：正确的优先次序。当百姓把自己的舒适放在神的圣殿之前时，他们的生活反而更加困难。"你们要省察自己的行为"（1:5,7）——这句话在短短两章中出现了两次。`,
  en: `Haggai (2 chapters) is among the shortest Old Testament books and the most precisely dated prophetic book — all four messages carry exact dates (August to December 520 BC). Haggai served alongside Zechariah, urging returned exiles to rebuild the temple.

Haggai's core message: right priorities. When the people placed personal comfort before God's house, their lives grew harder. "Consider your ways" (1:5, 7) — this phrase appears twice in just two chapters.`,
};

const outline = [
  ["1:1-11", "建殿的呼召", "1:1–11", "The Call to Build"],
  ["1:12-15", "百姓的顺服", "1:12–15", "The People's Obedience"],
  ["2:1-9", "后来的荣耀更大", "2:1–9", "The Latter Glory Greater"],
  ["2:10-19", "洁净与祝福", "2:10–19", "Holiness and Blessing"],
  ["2:20-23", "所罗巴伯的印记", "2:20–23", "Zerubbabel's Signet"],
];

const keyVerse = {
  zh: `"这殿后来的荣耀必大过先前的荣耀。在这地方我必赐平安。这是万军之耶和华说的。"（哈该书 2:9）`,
  en: `"The glory of this latter house shall be greater than of the former, saith the LORD of hosts: and in this place will I give peace, saith the LORD of hosts." (Haggai 2:9)`,
};

const info = { nameZh: `哈该书`, nameEn: `Haggai`, author: `哈该`, date: `公元前520年`, chapters: `2章`, backHref: `/old-testament/minor-prophets`, backLabel: `小先知书`, bibleId: `HAG` };

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