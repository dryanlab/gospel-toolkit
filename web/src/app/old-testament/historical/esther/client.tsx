'use client';
import Link from 'next/link';
import SpeakButton from '@/components/SpeakButton';
import { useState } from 'react';

const sections = [
  {
    title_zh: `一、以斯帖成为王后（1-2章）`,
    title_en: `I. Esther Becomes Queen (Ch. 1–2)`,
    content_zh: `以斯帖记的背景是波斯帝国亚哈随鲁王（薛西斯一世）的宫廷。王后瓦实提因拒绝在宴席上展示美貌而被废（1章）。在全国选秀中，犹大人末底改的养女以斯帖被选为新王后（2章）。

以斯帖的犹大身份被隐藏——末底改嘱咐她不要透露（2:10）。这个安排在当时看似无关紧要，后来却成为拯救全族的关键。在神的护理中，每一个看似偶然的细节都有意义。

末底改偶然发现了两个太监阴谋刺杀王的计划，通过以斯帖报告了王，此事被记在历史书上（2:21-23）。这个"偶然"也在后来成为关键的转折点——神在暗中预备了拯救。`,
    content_en: `Esther is set in the court of King Ahasuerus (Xerxes I) of the Persian Empire. Queen Vashti was deposed for refusing to display her beauty at a banquet (ch. 1). In a kingdom-wide search, Esther — adopted daughter of the Jew Mordecai — was chosen as the new queen (ch. 2).

Esther's Jewish identity was concealed — Mordecai instructed her not to reveal it (2:10). This arrangement seemed insignificant at the time but became the key to saving the entire nation. In God's providence, every seemingly random detail carries meaning.

Mordecai happened to discover a plot by two eunuchs to assassinate the king; he reported it through Esther, and the matter was recorded in the royal chronicles (2:21–23). This "coincidence" would also become a pivotal turning point later — God was preparing deliverance behind the scenes.`,
  },
  {
    title_zh: `二、哈曼的阴谋与末底改的信心（3-5章）`,
    title_en: `II. Haman's Plot and Mordecai's Faith (Ch. 3–5)`,
    content_zh: `亚甲族人哈曼被擢升为百官之首。末底改拒绝向哈曼跪拜——这不仅是个人尊严的问题，更是信仰立场：哈曼是亚甲族人（亚玛力人的后裔），神曾命令完全灭绝亚玛力人（出17:14-16）。末底改作为犹大人，不向神的仇敌屈膝。

哈曼大怒，决定不仅杀末底改一人，而是灭绝波斯帝国境内所有犹大人。他在王面前诬告犹大人"不守王的律例"（3:8），说服王颁布灭族诏书，并掣"普珥"（签）定了日期（3:7）。

末底改得知后撕裂衣服，穿麻衣，要求以斯帖向王求情。以斯帖犹豫——未蒙召见就进王内院，按律当死。末底改说出了全书最关键的话："焉知你得了王后的位分不是为现今的机会吗？"（4:14）以斯帖回答："你当去招聚书珊城所有的犹大人，为我禁食三昼三夜。我和我的宫女也要这样禁食。然后我违例进去见王，我若死就死吧！"（4:16）

"我若死就死吧"——这是信心的至高表达。以斯帖不是不怕死，而是明白使命大于生命。`,
    content_en: `Haman the Agagite was promoted above all officials. Mordecai refused to bow to Haman — not merely a matter of personal dignity but of faith: Haman was an Agagite (descendant of the Amalekites), whom God had commanded to utterly destroy (Exod 17:14–16). As a Jew, Mordecai would not bow to God's enemy.

Haman was furious and resolved not merely to kill Mordecai but to annihilate all Jews throughout the Persian Empire. He slandered the Jews before the king, saying their "laws are diverse from all people; neither keep they the king's laws' (3:8), persuading the king to issue a decree of genocide and casting "Pur" (the lot) to determine the date (3:7).

When Mordecai learned of this, he tore his clothes and put on sackcloth, urging Esther to plead with the king. Esther hesitated — entering the inner court unsummoned was punishable by death. Mordecai spoke the book's most pivotal words: "Who knoweth whether thou art come to the kingdom for such a time as this?" (4:14). Esther replied: "Go, gather together all the Jews that are present in Shushan, and fast ye for me, and neither eat nor drink three days, night or day: I also and my maidens will fast likewise; and so will I go in unto the king, which is not according to the law: and if I perish, I perish" (4:16).

"If I perish, I perish" — the supreme expression of faith. Esther was not fearless but understood that mission outweighs life.`,
  },
  {
    title_zh: `三、逆转——从灭绝到拯救（6-10章）`,
    title_en: `III. Reversal — From Destruction to Deliverance (Ch. 6–10)`,
    content_zh: `以斯帖记后半部充满了戏剧性的"逆转"（peripeteia）。

第六章是全书最精妙的转折。王那夜失眠，命人读历史书给他听——"恰巧"读到末底改揭发谋杀的功劳。王问哈曼："王所喜悦尊荣的人，当如何待他呢？"哈曼以为说的是自己，建议了最隆重的尊荣仪式。结果王说："你速速将这衣服和马匹……都照你所说的，向坐在朝门那里的犹大人末底改去行"（6:10）。哈曼被迫亲手尊荣自己的仇敌——这是何等的讽刺！

以斯帖的两次宴席设计精妙。第二次宴席上她揭露哈曼的阴谋。哈曼被挂在自己预备给末底改的木架上（7:10）——"恶人掘了坑，自己反掉在其中"（诗7:15）。

犹大人不仅免于灭绝，还被赋予自卫的权利。普珥日（阿达月十四、十五日）成为犹大人的节期，纪念"转忧为喜、转悲为乐的吉日"（9:22）。

以斯帖记全书不提"神"的名字——这是圣经中唯一如此的书卷。但神的手无处不在：在"偶然"的失眠中、在"恰巧"的宣读中、在时机的安排中。以斯帖记教导我们：即使看不见神的名字，神的护理仍在掌管一切。`,
    content_en: `The second half of Esther is filled with dramatic reversals (peripeteia).

Chapter 6 is the book's most exquisite turning point. The king could not sleep that night and had the chronicles read to him — the passage "happened" to be about Mordecai's exposure of the assassination plot. The king asked Haman: "What shall be done unto the man whom the king delighteth to honour?" Haman, thinking the king meant him, suggested the most elaborate honors. Then the king said: "Make haste, and take the apparel and the horse, as thou hast said, and do even so to Mordecai the Jew, which sitteth at the king's gate' (6:10). Haman was forced to honor his own enemy — supreme irony!

Esther's two banquets were brilliantly designed. At the second, she exposed Haman's plot. Haman was hanged on the very gallows he had prepared for Mordecai (7:10) — "He made a pit, and digged it, and is fallen into the ditch which he made" (Ps 7:15).

The Jews were not only spared from annihilation but granted the right of self-defense. Purim (the 14th and 15th of Adar) became a Jewish festival, commemorating "the month which was turned unto them from sorrow to joy, and from mourning into a good day" (9:22).

Remarkably, Esther never mentions God's name — the only book of the Bible with this distinction. Yet God's hand is everywhere: in the "coincidental" insomnia, the "chance" reading, the timing of events. Esther teaches: even when God's name is unseen, His providence governs all.`,
  },
];

const overview = {
  zh: `以斯帖记是旧约中唯一不提及神名字的书卷，却是神护理（providence）最生动的见证。全书记载了波斯帝国时期犹大人面临灭族危机、最终得拯救的故事，时间约在公元前483-473年。

全书10章可分为三段：以斯帖被选为王后（1-2章）、哈曼的灭族阴谋（3-5章）、逆转与拯救（6-10章）。核心人物是以斯帖（勇敢的王后）、末底改（信仰坚定的犹大人）和哈曼（骄傲的仇敌）。普珥节（Purim）由此而来，至今仍是犹太人的重要节日。`,
  en: `Esther is the only Old Testament book that never mentions God's name, yet it is the most vivid testimony of God's providence. It records the story of Jews in the Persian Empire facing genocide and ultimate deliverance, set around 483–473 BC.

Its 10 chapters divide into: Esther chosen as queen (ch. 1–2), Haman's genocidal plot (ch. 3–5), and reversal and deliverance (ch. 6–10). The central characters are Esther (the courageous queen), Mordecai (the faithful Jew), and Haman (the proud enemy). The festival of Purim originates from this book and remains an important Jewish observance to this day.`,
};

const outline = [
  ["1章", "瓦实提被废", "Ch. 1", "Vashti's Removal"],
  ["2章", "以斯帖成为王后", "Ch. 2", "Esther Becomes Queen"],
  ["3章", "哈曼的灭族阴谋", "Ch. 3", "Haman's Plot"],
  ["4章", "末底改求以斯帖帮助", "Ch. 4", "Mordecai's Appeal to Esther"],
  ["5章", "以斯帖的第一次宴席", "Ch. 5", "Esther's First Banquet"],
  ["6章", "末底改被尊荣", "Ch. 6", "Mordecai Honored"],
  ["7章", "哈曼被挂木架", "Ch. 7", "Haman's Fall"],
  ["8章", "犹大人得自卫权", "Ch. 8", "Jews Granted Self-Defense"],
  ["9章", "普珥节的设立", "Ch. 9", "Feast of Purim Established"],
  ["10章", "末底改的尊荣", "Ch. 10", "Mordecai's Greatness"],
];

const theology = {
  title_zh: `核心神学：隐藏的神与看不见的护理`,
  title_en: `Core Theology: The Hidden God and Invisible Providence`,
  content_zh: `以斯帖记是圣经中唯一没有提到"神"这个名字的书卷。但正因如此，它对神的护理之工的教导反而更加深刻——神不需要被提及才能运作；祂在幕后掌管一切。

第一，没有神迹的神迹。全书没有红海分开、没有火从天降、没有异梦异象，只有一连串看似"巧合"的事件：瓦实提被废、以斯帖被选为王后、末底改偶然发现暗杀阴谋、亚哈随鲁王恰好那一夜失眠翻阅历史……每一个"巧合"都是神看不见之手的运作。韦敏斯德信条第五章论"护理"："神以祂至大的智慧、圣洁与权能，保护祂所造之万有及其一切行动，并加以管理。"以斯帖记就是这个教义最生动的叙事注释。

第二，"此时此刻"的呼召。末底改对以斯帖说的话是全书最著名的经文："焉知你得了王后的位分，不是为现今的机会吗？"（4:14）。每一个信徒都被神放在特定的时间、地点、角色中——不是偶然的，而是有目的的。以斯帖从一个普通的犹太孤女成为拯救全族的器皿，证明神能使用任何人，只要他们愿意在关键时刻站出来。

第三，"若你闭口不言"——人的责任与神的主权。末底改的下一句话同样重要："你若闭口不言，犹大人必从别处得解脱蒙拯救"（4:14）。这是一个深刻的神学声明：神的计划不依赖任何人，但神选择使用人来成就祂的旨意。以斯帖可以选择不行动，但神的救赎不会因此失败——"解脱必从别处来"。这完美地平衡了神的主权和人的责任。

第四，普珥节的逆转。哈曼掣签（普珥）选定灭绝犹太人的日子，结果那一天反而成了犹太人灭绝仇敌的日子。"签放在怀里，定事由耶和华"（箴16:33）。恶人的计谋在神手中被完全翻转——这是十字架的预演：人类最大的恶行（杀害神的儿子）成为神最大的善工（救赎全人类）。`,
  content_en: `Esther is the only book of the Bible that never mentions the name of God. Yet precisely for this reason, its teaching on divine providence is all the more profound — God does not need to be named to be at work; He governs all things from behind the scenes.

First, a miracle without miracles. The book contains no parting of the Red Sea, no fire from heaven, no visions or dreams — only a chain of seeming "coincidences": Vashti deposed, Esther chosen as queen, Mordecai happening to discover an assassination plot, the king happening to suffer insomnia that very night and reading the chronicles... Each "coincidence" is the operation of God's invisible hand. The Westminster Confession chapter 5 on providence: "God the great Creator of all things doth uphold, direct, dispose, and govern all creatures, actions, and things... by His most wise and holy providence." Esther is the most vivid narrative commentary on this doctrine.

Second, the call of "such a time as this." Mordecai's words to Esther are the book's most famous verse: "Who knoweth whether thou art come to the kingdom for such a time as this?" (4:14). Every believer is placed by God in a specific time, place, and role — not by accident but with purpose. Esther, from an ordinary Jewish orphan, became the instrument of her people's deliverance, proving God can use anyone willing to stand up at the critical moment.

Third, "if thou altogether holdest thy peace" — human responsibility and divine sovereignty. Mordecai's next words are equally important: "If thou altogether holdest thy peace at this time, then shall there enlargement and deliverance arise to the Jews from another place" (4:14). This is a profound theological statement: God's plan depends on no one, yet God chooses to use people to accomplish His purposes. Esther could choose inaction, but God's redemption would not fail — "deliverance shall arise from another place." This perfectly balances divine sovereignty and human responsibility.

Fourth, the reversal of Purim. Haman cast lots (pur) to choose the day for exterminating the Jews, but that very day became the day the Jews destroyed their enemies. "The lot is cast into the lap; but the whole disposing thereof is of the LORD" (Prov 16:33). The schemes of the wicked were completely reversed in God's hands — a rehearsal of the cross: humanity's greatest evil (killing the Son of God) became God's greatest good (redeeming all humanity).`,
};

const keyVerse = {
  zh: `"焉知你得了王后的位分不是为现今的机会吗？"（以斯帖记 4:14）`,
  en: `"Who knoweth whether thou art come to the kingdom for such a time as this?" (Esther 4:14)`,
};

const info = { nameZh: `以斯帖记`, nameEn: `Esther`, author: `传统认为末底改`, date: `约公元前483-473年`, chapters: `10章`, backHref: `/old-testament/historical`, backLabel: `历史书`, bibleId: `EST` };


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