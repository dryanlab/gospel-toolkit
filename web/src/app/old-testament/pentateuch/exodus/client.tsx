'use client';
import Link from 'next/link';
import SpeakButton from '@/components/SpeakButton';
import { useState } from 'react';

const sections = [
  {
    title_zh: `一、在埃及的奴役与摩西蒙召（1-4章）`,
    title_en: `I. Slavery in Egypt and the Calling of Moses (Ch. 1–4)`,
    content_zh: `出埃及记开篇与创世记结尾遥遥呼应。以色列人在埃及生养众多，新法老起来"不认识约瑟"，开始残酷压迫以色列人。收生婆的忠心、摩西的出生与蒙保守，都彰显神在暗处的护理之工。

摩西在法老王宫长大四十年，在米甸旷野牧羊四十年，到八十岁时才被神呼召。荆棘火焰的异象是关键时刻——荆棘被火烧却没有烧毁，预表以色列虽在苦难中却不被灭绝，因为神与他们同在。神在此启示了自己的名"我是自有永有的"（3:14），这是旧约神学最核心的自我启示。

摩西的推辞（"我是什么人？""他们必不信我""我本是拙口笨舌的"）与神的回应（"我必与你同在""我必以大能的手"），教导我们：蒙召的确据不在于人的能力，而在于呼召者的信实。`,
    content_en: `Exodus opens in direct continuity with the end of Genesis. The Israelites multiplied greatly in Egypt, but a new Pharaoh arose who "knew not Joseph" and began cruelly oppressing Israel. The faithfulness of the midwives, Moses' birth and preservation, all reveal God's providential care working in the shadows.

Moses grew up in Pharaoh's palace for forty years, shepherded in Midian for forty years, and was not called by God until age eighty. The vision of the burning bush was the pivotal moment — the bush burned with fire yet was not consumed, foreshadowing Israel suffering yet not destroyed, because God was with them. Here God revealed His name: "I AM THAT I AM" (3:14), the most central self-revelation in Old Testament theology.

Moses' objections ("Who am I?" "They will not believe me" "I am slow of speech") and God's replies ("Certainly I will be with thee" "I will stretch out my hand") teach us that the assurance of calling rests not in human ability but in the faithfulness of the One who calls.`,
  },
  {
    title_zh: `二、十灾与逾越节（5-13章）`,
    title_en: `II. The Ten Plagues and the Passover (Ch. 5–13)`,
    content_zh: `十灾不仅是神对法老刚硬之心的审判，更是对埃及众神的审判（12:12"又要败坏埃及一切的神。我是耶和华"）。尼罗河变血（针对河神哈比）、蛙灾（针对蛙神赫凯特）、黑暗之灾（针对太阳神拉）——每一灾都宣告耶和华是独一真神。

十灾的高潮是第十灾：击杀长子。以色列人必须宰杀逾越节的羔羊，将血涂在门框上，神看见血就越过那家。"因为耶和华巡行击杀埃及人的时候，看见门楣上和左右门框上有血，就必越过那门"（12:23）。这是整本圣经最重要的预表之一——逾越节的羔羊预表基督。保罗明说："我们逾越节的羔羊基督，已经被杀献祭了"（林前5:7）。

除酵节紧随逾越节，教导以色列人除去旧酵——罪的洁净与分别为圣。头生的归耶和华、不可空手出去，这些条例都将救赎的记忆刻进日常生活。`,
    content_en: `The ten plagues were not merely judgment upon Pharaoh's hardened heart but judgment upon all the gods of Egypt (12:12, "against all the gods of Egypt I will execute judgment"). The Nile turned to blood (against the river god Hapi), frogs (against the frog goddess Heqet), darkness (against the sun god Ra) — each plague declared that the LORD alone is the true God.

The climax of the plagues was the tenth: the death of the firstborn. Israel had to slay the Passover lamb and apply its blood to the doorposts; when God saw the blood, He would pass over that house. "For the LORD will pass through to smite the Egyptians; and when he seeth the blood upon the lintel, and on the two side posts, the LORD will pass over the door" (12:23). This is one of the most important types in all of Scripture — the Passover lamb foreshadows Christ. Paul states explicitly: "For even Christ our passover is sacrificed for us" (1 Cor 5:7).

The Feast of Unleavened Bread followed the Passover, teaching Israel to purge out the old leaven — the cleansing of sin and consecration. The firstborn belonging to the LORD, not departing empty-handed — these ordinances inscribed the memory of redemption into daily life.`,
  },
  {
    title_zh: `三、过红海与旷野之歌（14-18章）`,
    title_en: `III. Crossing the Red Sea and Songs of the Wilderness (Ch. 14–18)`,
    content_zh: `红海的分开是旧约最伟大的救赎事件。以色列人前有大海、后有追兵，陷入绝望。但神说："你们只管站住！看耶和华今天向你们所要施行的救恩"（14:13）。海水分开、以色列人走干地过去、法老军队被淹没——这是洗礼的预表（林前10:1-2），也是基督胜过死亡的预表。

摩西之歌（15章）是圣经中最古老的颂歌之一："耶和华是我的力量、我的诗歌，也成了我的拯救。"米利暗带领妇女击鼓跳舞回应，这是敬拜的原始形式——用全人回应神的大能作为。

但旷野中的试验随即开始。玛拉的苦水（15章）、汛的旷野中百姓发怨言（16章）、利非订的磐石出水（17章）——神一次次供应，百姓一次次抱怨。吗哪的供应教导"人活着，不是单靠食物"（申8:3），磐石出水预表基督："那磐石就是基督"（林前10:4）。叶忒罗的到访（18章）带来行政智慧，也见证外邦人对耶和华的敬畏。`,
    content_en: `The parting of the Red Sea is the greatest redemptive event in the Old Testament. With the sea before them and Pharaoh's army behind, Israel was trapped in despair. But God said: "Stand still, and see the salvation of the LORD, which he will shew to you to day" (14:13). The waters divided, Israel walked on dry ground, and Pharaoh's army was overwhelmed — a type of baptism (1 Cor 10:1–2) and a foreshadowing of Christ's victory over death.

The Song of Moses (ch. 15) is one of the oldest hymns in Scripture: "The LORD is my strength and song, and he is become my salvation." Miriam led the women with timbrels and dancing — worship in its primal form, responding to God's mighty acts with one's whole being.

Yet the wilderness testing began immediately. The bitter waters of Marah (ch. 15), complaining in the Wilderness of Sin (ch. 16), water from the rock at Rephidim (ch. 17) — God provided again and again; the people complained again and again. The manna taught that "man doth not live by bread only" (Deut 8:3); the rock that gave water foreshadowed Christ: "that Rock was Christ" (1 Cor 10:4). Jethro's visit (ch. 18) brought administrative wisdom and testified to a Gentile's reverence for the LORD.`,
  },
  {
    title_zh: `四、西奈之约与十诫（19-24章）`,
    title_en: `IV. The Sinai Covenant and the Ten Commandments (Ch. 19–24)`,
    content_zh: `西奈山是出埃及记的神学中心。神对以色列说："你们若实在听从我的话，遵守我的约，就要在万民中作属我的子民，因为全地都是我的。你们要归我作祭司的国度，为圣洁的国民"（19:5-6）。这段话奠定了以色列的国家身份和使命。

十诫（20章）是神律法的核心总纲。前四诫关乎与神的关系（不可有别神、不可拜偶像、不可妄称神名、守安息日），后六诫关乎人际关系（孝敬父母、不可杀人、不可奸淫、不可偷盗、不可作假见证、不可贪恋）。韦敏斯德小要理问答将十诫的解释展开为问答42-81，是改革宗伦理的基石。

典章（21-23章）将十诫的原则应用于具体的社会生活——奴仆条例、伤害赔偿、财产保护、节期守则。神的律法不是抽象的道德教条，而是塑造整个社会的生活方式。第二十四章记载立约仪式：摩西将血洒在百姓身上说"这是立约的血"，预表基督在最后晚餐所说的话（太26:28）。`,
    content_en: `Mount Sinai is the theological center of Exodus. God told Israel: "Now therefore, if ye will obey my voice indeed, and keep my covenant, then ye shall be a peculiar treasure unto me above all people: for all the earth is mine: And ye shall be unto me a kingdom of priests, and an holy nation" (19:5–6). This passage established Israel's national identity and mission.

The Ten Commandments (ch. 20) are the core summary of God's law. The first four concern our relationship with God (no other gods, no graven images, not taking God's name in vain, keeping the Sabbath); the latter six concern human relationships (honoring parents, no murder, no adultery, no stealing, no false witness, no coveting). The Westminster Shorter Catechism expands the exposition of the Ten Commandments across Q&A 42–81, forming the cornerstone of Reformed ethics.

The ordinances (ch. 21–23) apply the principles of the Ten Commandments to concrete social life — laws concerning servants, compensation for injury, protection of property, and festival regulations. God's law is not abstract moral doctrine but a way of life shaping an entire society. Chapter 24 records the covenant ceremony: Moses sprinkled blood upon the people saying "Behold the blood of the covenant," foreshadowing Christ's words at the Last Supper (Matt 26:28).`,
  },
  {
    title_zh: `五、会幕——神与人同住（25-40章）`,
    title_en: `V. The Tabernacle — God Dwelling with Man (Ch. 25–40)`,
    content_zh: `出埃及记后半部分大量篇幅给了会幕的建造指示（25-31章）和实际建造（35-40章），中间插入金牛犊事件（32-34章）。这个结构深富神学意义：神渴望住在百姓中间，但人的罪使这成为不可能——除非有赎罪的途径。

会幕的每一个细节都预表基督。约柜上的施恩座是神与人相会之处（25:22），预表基督是我们的挽回祭（罗3:25）。幔子分隔至圣所与圣所，预表基督的身体（来10:20）——基督死时殿里的幔子从上到下裂为两半。金灯台是世界的光，陈设饼是生命的粮，香坛是代祷的馨香。大祭司胸牌上十二支派的名字，预表基督将祂子民的名字放在心上。

金牛犊事件（32章）是出埃及记最黑暗的时刻。百姓在西奈山下造偶像，正当神在山上将律法赐给摩西之时。摩西的代求（32:32"倘或你肯赦免他们的罪……不然，求你从你所写的册上涂抹我的名"）预表基督的代求。神宣告自己的名："耶和华，耶和华，是有怜悯有恩典的神，不轻易发怒，并有丰盛的慈爱和诚实"（34:6），这是旧约中神最完整的自我描述。

全书以神的荣光充满会幕作为结尾（40:34-35），呼应创世记中神与人同行的主题——罪将人与神隔开，但神开辟了一条回归之路。`,
    content_en: `The latter half of Exodus devotes extensive space to the tabernacle's construction instructions (ch. 25–31) and actual building (ch. 35–40), with the golden calf incident (ch. 32–34) in between. This structure is deeply theological: God desires to dwell among His people, but human sin makes this impossible — unless there is a means of atonement.

Every detail of the tabernacle foreshadows Christ. The mercy seat upon the ark is where God meets man (25:22), foreshadowing Christ as our propitiation (Rom 3:25). The veil separating the Holy of Holies from the Holy Place foreshadows Christ's body (Heb 10:20) — when Christ died, the temple veil was torn from top to bottom. The golden lampstand is the light of the world, the showbread is the bread of life, the altar of incense is the fragrance of intercession. The names of the twelve tribes on the high priest's breastplate foreshadow Christ bearing His people's names upon His heart.

The golden calf incident (ch. 32) is the darkest moment in Exodus. The people made an idol at the foot of Sinai while God was giving the law to Moses on the mountain. Moses' intercession (32:32, "if not, blot me, I pray thee, out of thy book which thou hast written") foreshadows Christ's intercession. God proclaimed His own name: "The LORD, The LORD God, merciful and gracious, longsuffering, and abundant in goodness and truth" (34:6) — the most complete self-description of God in the Old Testament.

The book closes with God's glory filling the tabernacle (40:34–35), echoing the theme from Genesis of God walking with man — sin separated man from God, but God has opened a way of return.`,
  },
];

const overview = {
  zh: `出埃及记（希伯来文 שְׁמוֹת，意为"名字"）记载了以色列人从埃及为奴之地被拯救出来的伟大历史。如果说创世记是"起源之书"，出埃及记就是"救赎之书"——这里有旧约最核心的救赎事件（逾越节与过红海）、最核心的律法启示（十诫）、以及最核心的敬拜制度（会幕）。

全书40章可分为三大段落：从埃及到西奈的旅程（1-18章）、西奈之约（19-24章）、会幕的建造（25-40章）。改革宗神学强调出埃及记的约论意义：神不仅拯救百姓脱离奴役，更与他们立约，使他们成为"祭司的国度、圣洁的国民"。逾越节的羔羊、摩西的中保角色、会幕的每一细节，都指向那位将要来的基督。`,
  en: `Exodus (Hebrew שְׁמוֹת, meaning "names") records the great history of Israel's deliverance from slavery in Egypt. If Genesis is the "book of origins," Exodus is the "book of redemption" — containing the Old Testament's most central redemptive events (Passover and the Red Sea crossing), most central legal revelation (the Ten Commandments), and most central worship system (the tabernacle).

The book's 40 chapters divide into three major sections: the journey from Egypt to Sinai (ch. 1–18), the Sinai covenant (ch. 19–24), and the building of the tabernacle (ch. 25–40). Reformed theology emphasizes Exodus's covenantal significance: God not only delivers His people from bondage but enters into covenant with them, making them "a kingdom of priests, and an holy nation." The Passover lamb, Moses" mediatorial role, and every detail of the tabernacle all point to the Christ who was to come.`,
};

const outline = [
  ["1-2章", "以色列受压迫与摩西出生", "Ch. 1–2", "Israel Oppressed; Moses Born"],
  ["3-4章", "荆棘火焰与摩西蒙召", "Ch. 3–4", "The Burning Bush; Moses Called"],
  ["5-6章", "法老加重劳役与神的应许", "Ch. 5–6", "Pharaoh's Hardness; God's Promise"],
  ["7-11章", "十灾", "Ch. 7–11", "The Ten Plagues"],
  ["12-13章", "逾越节与除酵节", "Ch. 12–13", "Passover and Unleavened Bread"],
  ["14-15章", "过红海与摩西之歌", "Ch. 14–15", "Red Sea Crossing; Song of Moses"],
  ["16-18章", "旷野供应：吗哪、磐石出水", "Ch. 16–18", "Wilderness Provision: Manna, Water from Rock"],
  ["19-20章", "西奈之约与十诫", "Ch. 19–20", "Sinai Covenant and Ten Commandments"],
  ["21-23章", "约书与典章", "Ch. 21–23", "The Book of the Covenant"],
  ["24章", "立约仪式", "Ch. 24", "Covenant Ratification Ceremony"],
  ["25-27章", "会幕建造指示", "Ch. 25–27", "Tabernacle Instructions"],
  ["28-31章", "祭司制度与安息日", "Ch. 28–31", "Priesthood and Sabbath"],
  ["32-34章", "金牛犊与约的更新", "Ch. 32–34", "Golden Calf and Covenant Renewal"],
  ["35-40章", "会幕建成与神的荣光", "Ch. 35–40", "Tabernacle Built; God's Glory"],
];

const theology = {
  title_zh: `核心神学：救赎与神的同在`,
  title_en: `Core Theology: Redemption and the Presence of God`,
  content_zh: `出埃及记是圣经中"救赎"概念的原型。以色列出埃及的事件，不仅是一次历史性的解放，更是全部救赎神学的范式——基督救赎祂子民的预演。

第一，逾越节羔羊与基督的救赎。"你们要取一只无残疾的羊羔……把血涂在门楣和左右门框上"（12:5-7）。保罗直接指出："我们逾越节的羔羊基督已经被杀献祭了"（林前5:7）。羔羊的血不是因为它自身有什么能力，而是因为神说"我一见这血，就越过你们去"（12:13）——救赎的根基是神的应许，不是人的行为。

第二，神的名字"耶和华"（יהוה）。在燃烧的荆棘前，神向摩西启示了自己的名："我是自有永有的"（3:14，希伯来文 אֶהְיֶה אֲשֶׁר אֶהְיֶה）。这个名字启示了神的自存性、不变性和信实——祂是那位"昔在、今在、以后永在"的神。韦敏斯德小要理问答第四问论神的属性："神是个灵，祂的存在、智慧、权能、圣洁、公义、良善和信实，都是无限无量、永恒不变的"——根基就在出埃及记的神的自我启示中。

第三，律法与盟约。十诫不是得救的条件，而是已被救赎之民的生活准则。神先说"我是耶和华你的神，曾将你从埃及地为奴之家领出来"（20:2），然后才颁布诫命——先有恩典，后有律法。律法的功用是显明神圣洁的标准，暴露人的罪，引人归向基督（加3:24"律法是我们训蒙的师傅，引我们到基督那里"）。

第四，会幕——以马内利的预表。出埃及记最后16章都在讲会幕的建造。"又当为我造圣所，使我可以住在他们中间"（25:8）。会幕是神与人同住的具体表达，预表道成肉身——"道成了肉身，住在（原文：支搭帐幕）我们中间"（约1:14）。会幕的每一个细节——约柜、陈设饼、金灯台、香坛——都指向基督。`,
  content_en: `Exodus is the archetype of "redemption" in the Bible. Israel's departure from Egypt was not merely a historical liberation but the paradigm for all redemptive theology — a rehearsal of Christ's redemption of His people.

First, the Passover lamb and Christ's redemption. "Your lamb shall be without blemish... and they shall take of the blood, and strike it on the two side posts and on the upper door post" (12:5-7). Paul states directly: "Christ our passover is sacrificed for us" (1 Cor 5:7). The blood of the lamb had no inherent power; rather, God said, "when I see the blood, I will pass over you" (12:13) — the foundation of redemption is God's promise, not human works.

Second, the divine name "Yahweh" (יהוה). Before the burning bush, God revealed His name to Moses: "I AM THAT I AM" (3:14, Hebrew אֶהְיֶה אֲשֶׁר אֶהְיֶה). This name reveals God's self-existence, immutability, and faithfulness — He is the One "which is, and which was, and which is to come." The Westminster Shorter Catechism Q4 on God's attributes — "God is a Spirit, infinite, eternal, and unchangeable, in his being, wisdom, power, holiness, justice, goodness, and truth" — is rooted in Exodus's divine self-revelation.

Third, law and covenant. The Ten Commandments are not conditions for salvation but the living standard for an already-redeemed people. God first said "I am the LORD thy God, which have brought thee out of the land of Egypt, out of the house of bondage" (20:2), and only then issued the commandments — grace precedes law. The function of the law is to reveal God's holy standard, expose human sin, and lead people to Christ (Gal 3:24, "the law was our schoolmaster to bring us unto Christ").

Fourth, the tabernacle — a type of Immanuel. The final sixteen chapters of Exodus are devoted to the tabernacle's construction. "Let them make me a sanctuary; that I may dwell among them" (25:8). The tabernacle was the concrete expression of God dwelling with man, prefiguring the incarnation — "the Word was made flesh, and dwelt [literally: tabernacled] among us" (John 1:14). Every detail of the tabernacle — the ark, the showbread, the golden lampstand, the altar of incense — points to Christ.`,
};

const keyVerse = {
  zh: `"我是耶和华你的神，曾将你从埃及地为奴之家领出来。"（出埃及记 20:2）`,
  en: `"I am the LORD thy God, which have brought thee out of the land of Egypt, out of the house of bondage." (Exodus 20:2)`,
};

const info = {
  nameZh: `出埃及记`,
  nameEn: `Exodus`,
  author: `摩西 (Moses)`,
  date: `约公元前1446-1406年`,
  chapters: `40章`,
  backHref: `/old-testament/pentateuch`,
  backLabel: `摩西五经`,
  bibleId: `EXO`,
};


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
      <div className="text-center mb-10">
        <span className="text-5xl mb-4 block">📖</span>
        <h1 className="font-serif-cn text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-2">{info.nameZh}导读</h1>
        <p className="text-base text-[var(--color-text-secondary)] italic mb-4">A Guide to the Book of {info.nameEn}</p>
        <div className="flex justify-center gap-4 text-xs text-[var(--color-text-secondary)]">
          <span>✍️ 作者：{info.author}</span>
          <span>📅 {info.date}</span>
          <span>📄 {info.chapters}</span>
        </div>
      </div>
      <div className="mb-10 p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)]">
        <h2 className="font-serif-cn text-lg font-bold text-[var(--color-text)] mb-3">📋 全书概览</h2>
        <div className="flex items-start gap-2 mb-3"><SpeakButton text={overview.zh} lang="zh" /><p className="text-sm text-[var(--color-text)] leading-relaxed font-serif-cn">{renderText(overview.zh)}</p></div>
        <div className="flex items-start gap-2"><SpeakButton text={overview.en} lang="en" /><p className="text-xs text-[var(--color-text-secondary)] italic leading-relaxed">{renderText(overview.en)}</p></div>
      </div>
      <div className="mb-10 p-5 rounded-xl bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border border-amber-200 dark:border-amber-800">
        <p className="text-sm font-bold text-amber-800 dark:text-amber-300 mb-1">🔑 金句 Key Verse</p>
        <p className="font-serif-cn text-base text-[var(--color-text)] font-bold leading-relaxed">{keyVerse.zh}</p>
        <p className="text-sm text-[var(--color-text-secondary)] italic mt-1">{keyVerse.en}</p>
      </div>
      <div className="mb-6">
        <h2 className="font-serif-cn text-xl font-bold text-[var(--color-text)] mb-1">📚 分段导读</h2>
        <p className="text-xs text-[var(--color-text-secondary)] italic mb-4">Section-by-Section Guide</p>
      </div>
      <div className="space-y-4">
        {sections.map((sec, i) => (
          <div key={i} className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] overflow-hidden">
            <button onClick={() => setExpandedIdx(expandedIdx === i ? null : i)}
              className="w-full flex items-center justify-between px-6 py-4 text-left cursor-pointer hover:bg-[var(--color-accent)]/5 transition-colors">
              <div>
                <h3 className="font-serif-cn text-base font-bold text-[var(--color-text)]">{sec.title_zh}</h3>
                <p className="text-xs text-[var(--color-text-secondary)] italic">{sec.title_en}</p>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                className={`w-5 h-5 text-[var(--color-text-secondary)] transition-transform ${expandedIdx === i ? 'rotate-180' : ''}`}>
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </button>
            {expandedIdx === i && (
              <div className="px-6 pb-5 border-t border-[var(--color-border)]">
                <div className="flex items-start gap-2 mt-4 mb-4"><SpeakButton text={sec.content_zh} lang="zh" /><p className="text-sm text-[var(--color-text)] leading-relaxed font-serif-cn whitespace-pre-line">{renderText(sec.content_zh)}</p></div>
                <div className="flex items-start gap-2"><SpeakButton text={sec.content_en} lang="en" /><p className="text-xs text-[var(--color-text-secondary)] italic leading-relaxed whitespace-pre-line">{renderText(sec.content_en)}</p></div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-10 p-6 rounded-2xl border border-amber-200 dark:border-amber-800 bg-gradient-to-br from-amber-50/50 to-orange-50/50 dark:from-amber-900/10 dark:to-orange-900/10"><h2 className="font-serif-cn text-lg font-bold text-[var(--color-text)] mb-1">⛪ {theology.title_zh}</h2><p className="text-xs text-[var(--color-text-secondary)] italic mb-4">{theology.title_en}</p><div className="flex items-start gap-2 mb-4"><SpeakButton text={theology.content_zh} lang="zh" /><p className="text-sm text-[var(--color-text)] leading-relaxed font-serif-cn whitespace-pre-line">{renderText(theology.content_zh)}</p></div><div className="flex items-start gap-2"><SpeakButton text={theology.content_en} lang="en" /><p className="text-xs text-[var(--color-text-secondary)] italic leading-relaxed whitespace-pre-line">{renderText(theology.content_en)}</p></div></div>
      <div className="mt-10 p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)]">
        <h2 className="font-serif-cn text-lg font-bold text-[var(--color-text)] mb-4">🗂️ 章节大纲</h2>
        {(() => {
          const half = Math.ceil(outline.length / 2);
          const col1 = outline.slice(0, half);
          const col2 = outline.slice(half);
          const renderItem = ([zh, desc, chEn, descEn]: string[], i: number) => (
            <div key={i} className="py-1.5 border-b border-[var(--color-border)]/30 last:border-b-0">
              <div className="flex items-baseline gap-2">
                <span className="font-bold text-[var(--color-accent)] min-w-[65px] shrink-0">{zh}</span>
                <span className="text-[var(--color-text)]">{desc}</span>
              </div>
              <div className="flex items-baseline gap-2 mt-0.5">
                <span className="text-[var(--color-text-secondary)] text-xs italic min-w-[65px] shrink-0">{chEn}</span>
                <span className="text-[var(--color-text-secondary)] text-xs italic">{descEn}</span>
              </div>
            </div>
          );
          return (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 text-sm">
              <div>{col1.map((item, i) => renderItem(item, i))}</div>
              <div>{col2.map((item, i) => renderItem(item, i + half))}</div>
            </div>
          );
        })()}
      </div>
      <div className="mt-8 text-center">
        <Link href={`/bible/${info.bibleId}`} className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--color-accent)] text-white font-bold hover:opacity-90 transition-opacity">
          📖 阅读{info.nameZh} Read {info.nameEn}
        </Link>
      </div>
    </div>
  );
}