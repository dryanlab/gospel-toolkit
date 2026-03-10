import BookList from '@/components/BookList';
import type { BibleBook } from '@/components/BookList';

export const metadata = {
  title: '大先知书 - 旧约导读 - 真理磐石',
  description: '大先知书导读：以赛亚书、耶利米书、耶利米哀歌、以西结书、但以理书。',
};

const books: BibleBook[] = [
  {
    id: 'isaiah',
    guideHref: '/old-testament/major-prophets/isaiah',
    name_zh: '以赛亚书',
    name_en: 'Isaiah',
    author_zh: '以赛亚',
    author_en: 'Isaiah',
    date: '约公元前740-680年',
    date_en: 'c. 740–680 BC',
    theme_zh: '审判与救恩——弥赛亚的预言',
    theme_en: 'Judgment and Salvation — The Messianic Prophecy',
    summary_zh: '以赛亚书被称为"旧约的福音书"，前半部宣告神对罪的审判，后半部预言弥赛亚的来临与救恩。第53章的受苦仆人是对基督最清晰的预言。',
    summary_en: 'Isaiah is called "the Gospel of the Old Testament." The first half announces God\'s judgment on sin; the second half prophesies the Messiah\'s coming and salvation. Chapter 53\'s Suffering Servant is the clearest prophecy of Christ.',
    keyVerse_zh: '祂为我们的过犯受害，为我们的罪孽压伤。因祂受的刑罚，我们得平安；因祂受的鞭伤，我们得医治。',
    keyVerse_en: 'But he was pierced for our transgressions; he was crushed for our iniquities; upon him was the chastisement that brought us peace, and with his wounds we are healed.',
    keyRef: '以赛亚书 53:5 / Isaiah 53:5',
  },
  {
    id: 'jeremiah',
    guideHref: '/old-testament/major-prophets/jeremiah',
    name_zh: '耶利米书',
    name_en: 'Jeremiah',
    author_zh: '耶利米',
    author_en: 'Jeremiah',
    date: '约公元前626-586年',
    date_en: 'c. 626–586 BC',
    theme_zh: '审判的呼声与新约的应许',
    theme_en: 'The Call to Judgment and the Promise of a New Covenant',
    summary_zh: '耶利米被称为"流泪的先知"，在犹大灭亡前持续呼吁百姓悔改，却遭拒绝逼迫。他预言了新约的来临：神要将律法写在人的心上。',
    summary_en: 'Jeremiah, the "weeping prophet," persistently called Judah to repentance before its fall, yet was rejected and persecuted. He prophesied the New Covenant: God will write His law on people\'s hearts.',
    keyVerse_zh: '耶和华说：我要将我的律法放在他们里面，写在他们心上。我要作他们的神，他们要作我的子民。',
    keyVerse_en: 'I will put my law within them, and I will write it on their hearts. And I will be their God, and they shall be my people.',
    keyRef: '耶利米书 31:33 / Jeremiah 31:33',
  },
  {
    id: 'lamentations',
    guideHref: '/old-testament/major-prophets/lamentations',
    name_zh: '耶利米哀歌',
    name_en: 'Lamentations',
    author_zh: '耶利米',
    author_en: 'Jeremiah',
    date: '约公元前586年',
    date_en: 'c. 586 BC',
    theme_zh: '哀悼中的盼望——神的慈爱不断绝',
    theme_en: 'Hope in Mourning — God\'s Steadfast Love Never Ceases',
    summary_zh: '耶利米哀歌是对耶路撒冷被毁的哀悼诗。在极深的悲痛中，先知仍宣告神的慈爱每早晨都是新的，祂的信实极其广大。',
    summary_en: 'Lamentations is a series of funeral poems mourning Jerusalem\'s destruction. In the depths of grief, the prophet still declares that God\'s steadfast love is new every morning and His faithfulness is great.',
    keyVerse_zh: '我们不至消灭，是出于耶和华诸般的慈爱；是因祂的怜悯不至断绝。每早晨，这都是新的；你的诚实极其广大！',
    keyVerse_en: 'The steadfast love of the LORD never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.',
    keyRef: '耶利米哀歌 3:22-23 / Lamentations 3:22–23',
  },
  {
    id: 'ezekiel',
    guideHref: '/old-testament/major-prophets/ezekiel',
    name_zh: '以西结书',
    name_en: 'Ezekiel',
    author_zh: '以西结',
    author_en: 'Ezekiel',
    date: '约公元前593-571年',
    date_en: 'c. 593–571 BC',
    theme_zh: '神的荣耀与新心新灵',
    theme_en: 'God\'s Glory and a New Heart',
    summary_zh: '以西结在被掳巴比伦期间领受异象，见证神的荣耀离开圣殿又将归回。他预言神要赐百姓新心和新灵，枯骨要复苏，以色列要复兴。',
    summary_en: 'Ezekiel received visions in Babylonian exile, witnessing God\'s glory departing from and returning to the temple. He prophesied that God would give His people a new heart and spirit; dry bones would live and Israel would be restored.',
    keyVerse_zh: '我也要赐给你们一个新心，将新灵放在你们里面，又从你们的肉体中除掉石心，赐给你们肉心。',
    keyVerse_en: 'And I will give you a new heart, and a new spirit I will put within you. And I will remove the heart of stone from your flesh and give you a heart of flesh.',
    keyRef: '以西结书 36:26 / Ezekiel 36:26',
  },
  {
    id: 'daniel',
    guideHref: '/old-testament/major-prophets/daniel',
    name_zh: '但以理书',
    name_en: 'Daniel',
    author_zh: '但以理',
    author_en: 'Daniel',
    date: '约公元前536年',
    date_en: 'c. 536 BC',
    theme_zh: '神掌管万国——在异邦中持守信仰',
    theme_en: 'God Rules over Nations — Faithfulness in Exile',
    summary_zh: '但以理书记载但以理和三个朋友在巴比伦朝廷中持守信仰的见证，以及关于世界帝国更替和神国最终得胜的异象。神的国永不败坏。',
    summary_en: 'Daniel records the faithful witness of Daniel and his three friends in the Babylonian court, along with visions of the rise and fall of world empires and the ultimate triumph of God\'s kingdom, which shall never be destroyed.',
    keyVerse_zh: '当那列王在位的时候，天上的神必另立一国，永不败坏。',
    keyVerse_en: 'The God of heaven will set up a kingdom that shall never be destroyed.',
    keyRef: '但以理书 2:44 / Daniel 2:44',
  },
];

export default function MajorProphetsPage() {
  return (
    <BookList
      icon="🔥"
      title_zh="大先知书"
      title_en="Major Prophets"
      desc_zh="大先知书记录了神在以色列最黑暗的时期藉先知所发出的信息：审判罪恶、呼召悔改、应许救恩，并预言弥赛亚的来临。"
      desc_en="The Major Prophets record God's messages through His prophets in Israel's darkest hours: judgment on sin, calls to repentance, promises of salvation, and prophecies of the Messiah's coming."
      gradient="from-red-600 to-rose-800"
      books={books}
      backHref="/old-testament"
      backLabel="返回旧约导读 Back to Old Testament"
    />
  );
}
