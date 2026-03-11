'use client';
import Link from 'next/link';
import SpeakButton from '@/components/SpeakButton';
import { useState } from 'react';

const sections = [
    {
      title_zh: '一、设立长老：教会根基的建造（1章）',
      title_en: `I. Appointing Elders: Building the Church's Foundation`,
      content_zh: `保罗留提多在克里特岛，是为了"将那没有办完的事都办整齐了，又照我所吩咐你的，在各城设立长老"（1:5）。克里特的文化背景是混乱和不敬虔的——连克里特人自己的先知都说"克里特人常说谎话，乃是恶兽，又馋又懒"（1:12）。在这样的环境中建立教会，设立合格的长老尤为重要。

"若有无可指责的人，只作一个妇人的丈夫，儿女也是信主的，没有人告他们是放荡不服约束的，就可以设立。监督既是神的管家，必须无可指责，不任性，不暴躁，不因酒滋事，不打人，不贪无义之财；乐意接待远人，好善，庄重，公平，圣洁，自持。坚守所教真实的道理，就能将纯正的教训劝化人，又能把争辩的人驳倒了。"（提多书 1:6-9）

"If any be blameless, the husband of one wife, having faithful children not accused of riot or unruly. For a bishop must be blameless, as the steward of God; not selfwilled, not soon angry, not given to wine, no striker, not given to filthy lucre; But a lover of hospitality, a lover of good men, sober, just, holy, temperate; Holding fast the faithful word as he hath been taught, that he may be able by sound doctrine both to exhort and to convince the gainsayers." (Titus 1:6-9, KJV)

保罗的标准与提摩太前书一致：品格在先，恩赐在后。特别强调"坚守所教真实的道理"——长老不仅要有好品格，更要有教导的能力，能用纯正教训劝勉人、驳倒异端。`,
      content_en: `Paul left Titus in Crete to "set in order the things that are wanting, and ordain elders in every city, as I had appointed thee' (1:5). The cultural context of Crete was chaotic and ungodly — even a Cretan prophet admitted "the Cretians are alway liars, evil beasts, slow bellies' (1:12). In such an environment, establishing qualified elders was critically important.

"If any be blameless, the husband of one wife, having faithful children not accused of riot or unruly. For a bishop must be blameless, as the steward of God; not selfwilled, not soon angry, not given to wine, no striker, not given to filthy lucre; But a lover of hospitality, a lover of good men, sober, just, holy, temperate; Holding fast the faithful word as he hath been taught, that he may be able by sound doctrine both to exhort and to convince the gainsayers." (Titus 1:6-9, KJV)

Paul's standards are consistent with First Timothy: character first, gifts second. Special emphasis is placed on "holding fast the faithful word' — elders must not only have good character but also the ability to teach, using sound doctrine to exhort and refute heresy.`
    },
    {
      title_zh: '二、神救众人的恩典（2章）',
      title_en: `II. The Grace of God That Bringeth Salvation`,
      content_zh: `提多书第二章包含了一段关于恩典最精炼的神学论述。

"因为神救众人的恩典已经显明出来，教训我们除去不敬虔的心和世俗的情欲，在今世自守、公义、敬虔度日，等候所盼望的福，并等候至大的神和我们救主耶稣基督的荣耀显现。"（提多书 2:11-13）

"For the grace of God that bringeth salvation hath appeared to all men, Teaching us that, denying ungodliness and worldly lusts, we should live soberly, righteously, and godly, in this present world; Looking for that blessed hope, and the glorious appearing of the great God and our Saviour Jesus Christ." (Titus 2:11-13, KJV)

恩典不只是赦罪的恩典，更是"教训我们"的恩典。真正领受恩典的人，必然活出不同的生命——"除去不敬虔的心和世俗的情欲"，转而"自守、公义、敬虔度日"。廉价的恩典是只要赦免不要改变，但圣经中的恩典是既赦免又更新。我们在"已然"（恩典已显明）与"未然"（等候荣耀显现）之间活出敬虔的生命。`,
      content_en: `Titus chapter 2 contains one of the most refined theological statements on grace.

"For the grace of God that bringeth salvation hath appeared to all men, Teaching us that, denying ungodliness and worldly lusts, we should live soberly, righteously, and godly, in this present world; Looking for that blessed hope, and the glorious appearing of the great God and our Saviour Jesus Christ." (Titus 2:11-13, KJV)

Grace is not merely pardoning grace but grace that "teaches us." Those who truly receive grace inevitably live transformed lives — "denying ungodliness and worldly lusts," turning instead to "live soberly, righteously, and godly." Cheap grace seeks forgiveness without transformation, but biblical grace both pardons and renews. We live godly lives between the "already' (grace has appeared) and the "not yet' (awaiting the glorious appearing).`
    },
    {
      title_zh: '三、重生的洗与圣灵的更新（3章）',
      title_en: `III. The Washing of Regeneration and Renewing of the Holy Ghost`,
      content_zh: `第三章进一步阐述救恩的本质——不是靠行为，而是靠神的怜悯。

"他便救了我们；并不是因我们自己所行的义，乃是照他的怜悯，藉着重生的洗和圣灵的更新。圣灵就是神藉着耶稣基督——我们救主厚厚浇灌在我们身上的，好叫我们因他的恩得称为义，可以凭着永生的盼望成为后嗣。"（提多书 3:5-7）

"Not by works of righteousness which we have done, but according to his mercy he saved us, by the washing of regeneration, and renewing of the Holy Ghost; Which he shed on us abundantly through Jesus Christ our Saviour; That being justified by his grace, we should be made heirs according to the hope of eternal life." (Titus 3:5-7, KJV)

"并不是因我们自己所行的义"——救恩完全出于神的怜悯。"重生的洗"指的不是外在的水礼本身，而是圣灵内在的更新工作——洗去旧人、生出新人。这与以西结书36:25-27的预言完全吻合：神要用清水洒在我们身上，赐给我们新心和新灵。保罗在此将三一神的救赎工作完美呈现：父的怜悯、子的代赎、灵的更新。`,
      content_en: `Chapter 3 further expounds the nature of salvation — not by works but by God's mercy.

"Not by works of righteousness which we have done, but according to his mercy he saved us, by the washing of regeneration, and renewing of the Holy Ghost; Which he shed on us abundantly through Jesus Christ our Saviour; That being justified by his grace, we should be made heirs according to the hope of eternal life." (Titus 3:5-7, KJV)

"Not by works of righteousness which we have done' — salvation is entirely from God's mercy. "The washing of regeneration' refers not to the outward rite of baptism itself but to the inward renewal by the Holy Spirit — washing away the old and birthing the new. This perfectly aligns with Ezekiel 36:25-27: God will sprinkle clean water upon us, giving us a new heart and a new spirit. Paul here perfectly presents the Trinitarian work of redemption: the Father's mercy, the Son's atonement, and the Spirit's renewal.`
    },
    {
      title_zh: `四、善行与无益的争论（3章续）`,
      title_en: `IV. Good Works and Avoiding Useless Controversies (Ch. 3 cont.)`,
      content_zh: `保罗在第三章后半部分发出了实践的命令：既然我们蒙了救恩，就当"多以行善为念"（3:8）。善行不是得救的条件，而是得救的果实——是"美好、有益于人的"（3:8）。

另一方面，保罗严肃地警告要"远避无知的辩论、家谱、纷争，和因律法起的争论，因为这都是虚空的，是无益的"（3:9）。教会中有些争论耗费大量精力却毫无属灵益处——保罗的建议是直接拒绝，"一、二次劝戒之后，就要弃绝"（3:10）。

提多书以问安作结，提到了亚基布和阿波罗等同工，最后嘱咐说"我们的人，也当学习做正经事业来补所不足，不要做不结果子的人"（3:14）。"不要做不结果子的人"——这是提多书留给每个信徒的最后呼召。知道真理，还要结出真理的果子；领受恩典，还要活出恩典的荣耀。`,
      content_en: `The latter part of chapter 3 gives practical commands: since we have received salvation, we should be "careful to maintain good works" (3:8). Good works are not conditions for salvation but its fruit — "these things are good and profitable unto men" (3:8).

On the other hand, Paul solemnly warns to "avoid foolish questions, and genealogies, and contentions, and strivings about the law; for they are unprofitable and vain" (3:9, KJV). Some church controversies consume enormous energy yet yield no spiritual benefit — Paul's advice is to simply reject them: "after the first and second admonition reject" (3:10, KJV).

Titus closes with greetings to Artemas, Tychicus, Apollos and others, ending with: "And let ours also learn to maintain good works for necessary uses, that they be not unfruitful" (3:14, KJV). "That they be not unfruitful" — this is Titus's final call to every believer. Knowing the truth must yield the fruit of truth; receiving grace must be lived out in grace's glory.`
    }
  ];

const overview = {
  zh: `提多书是保罗写给同工提多的教牧书信。提多被留在克里特岛，负责建立和治理当地教会。书信主题围绕三个核心：设立合格的教会领袖、教导各群体过敬虔的生活、以及持守纯正的救恩教义。这封简短的书信浓缩了教会治理和基督徒生活的精华，特别是关于恩典与善行关系的精辟论述。`,
  en: `Titus is Paul's pastoral letter to his co-worker Titus, who was left in Crete to establish and govern the local churches. The letter centers on three themes: appointing qualified church leaders, teaching various groups to live godly lives, and holding fast to sound salvation doctrine. This brief letter distills the essence of church governance and Christian living, with particularly brilliant exposition on the relationship between grace and good works.`,
};

const outline = [
  ["1章", `长老的资格与对抗异端`, "Ch. 1", `Qualifications of Elders and Opposing False Teachers`],
  ["2章", `各群体的教训与恩典的教导`, "Ch. 2", `Instructions for Various Groups and the Teaching of Grace`],
  ["3章", `救恩的根据与善行的实践`, "Ch. 3", `The Basis of Salvation and the Practice of Good Works`],
];

const keyVerse = {
  zh: `"他便救了我们；并不是因我们自己所行的义，乃是照他的怜悯，藉着重生的洗和圣灵的更新。"（提多书 3:5）`,
  en: `"Not by works of righteousness which we have done, but according to his mercy he saved us, by the washing of regeneration, and renewing of the Holy Ghost." (Titus 3:5, KJV)`,
};

const info = { nameZh: `提多书`, nameEn: `Titus`, author: `使徒保罗`, date: `约公元63-65年`, chapters: `3章`, backHref: `/new-testament/pauline`, backLabel: `保罗书信`, bibleId: `TIT` };

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
