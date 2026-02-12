import BookList from '@/components/BookList';
import type { BibleBook } from '@/components/BookList';

export const metadata = {
  title: '福音书与使徒行传 - 新约导读 - 真理磐石',
  description: '福音书与使徒行传导读：马太福音、马可福音、路加福音、约翰福音、使徒行传。',
};

const books: BibleBook[] = [
  {
    id: 'matthew',
    name_zh: '马太福音',
    name_en: 'Matthew',
    author_zh: '使徒马太',
    author_en: 'Apostle Matthew',
    date: '约公元50-70年',
    date_en: 'c. AD 50–70',
    theme_zh: '耶稣是应许的弥赛亚君王',
    theme_en: 'Jesus Is the Promised Messianic King',
    summary_zh: '马太福音以犹太人为主要读者，从亚伯拉罕的家谱开始，证明耶稣就是旧约所应许的弥赛亚君王。登山宝训阐述了天国的伦理，大使命差遣门徒往普天下去。',
    summary_en: 'Matthew, written primarily for Jewish readers, begins with Abraham\'s genealogy to prove Jesus is the promised Messianic King. The Sermon on the Mount expounds kingdom ethics, and the Great Commission sends disciples to all nations.',
    keyVerse_zh: '所以，你们要去，使万民作我的门徒，奉父、子、圣灵的名给他们施洗。',
    keyVerse_en: 'Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit.',
    keyRef: '马太福音 28:19 / Matthew 28:19',
  },
  {
    id: 'mark',
    name_zh: '马可福音',
    name_en: 'Mark',
    author_zh: '约翰·马可',
    author_en: 'John Mark',
    date: '约公元55-65年',
    date_en: 'c. AD 55–65',
    theme_zh: '耶稣是受苦的仆人',
    theme_en: 'Jesus Is the Suffering Servant',
    summary_zh: '马可福音是最简短、最紧凑的福音书，以"立刻"的节奏描绘耶稣的行动和服事。耶稣不是来受人服事，乃是来服事人，并且要舍命作多人的赎价。',
    summary_en: 'Mark is the shortest and most fast-paced Gospel, portraying Jesus\' actions and ministry with urgency. The Son of Man came not to be served but to serve, and to give his life as a ransom for many.',
    keyVerse_zh: '因为人子来，并不是要受人的服事，乃是要服事人，并且要舍命作多人的赎价。',
    keyVerse_en: 'For even the Son of Man came not to be served but to serve, and to give his life as a ransom for many.',
    keyRef: '马可福音 10:45 / Mark 10:45',
  },
  {
    id: 'luke',
    name_zh: '路加福音',
    name_en: 'Luke',
    author_zh: '路加',
    author_en: 'Luke',
    date: '约公元60-62年',
    date_en: 'c. AD 60–62',
    theme_zh: '耶稣是全人类的救主',
    theme_en: 'Jesus Is the Savior of All People',
    summary_zh: '路加福音是历史最详尽的福音书，强调耶稣对边缘人——穷人、妇女、外邦人、罪人——的关怀。人子来，为要寻找、拯救失丧的人。',
    summary_en: 'Luke is the most historically detailed Gospel, emphasizing Jesus\' compassion for the marginalized — the poor, women, Gentiles, and sinners. The Son of Man came to seek and to save the lost.',
    keyVerse_zh: '人子来，为要寻找、拯救失丧的人。',
    keyVerse_en: 'For the Son of Man came to seek and to save the lost.',
    keyRef: '路加福音 19:10 / Luke 19:10',
  },
  {
    id: 'john',
    name_zh: '约翰福音',
    name_en: 'John',
    author_zh: '使徒约翰',
    author_en: 'Apostle John',
    date: '约公元85-95年',
    date_en: 'c. AD 85–95',
    theme_zh: '耶稣是神的儿子——道成肉身',
    theme_en: 'Jesus Is the Son of God — The Word Made Flesh',
    summary_zh: '约翰福音从永恒的"太初有道"开始，以七个神迹和七个"我是"宣告耶稣的神性。全书写作目的是叫人信耶稣是基督，是神的儿子，并因信祂的名得生命。',
    summary_en: 'John begins with the eternal "In the beginning was the Word," proclaiming Jesus\' deity through seven signs and seven "I am" statements. It was written so that you may believe that Jesus is the Christ, the Son of God, and have life in his name.',
    keyVerse_zh: '神爱世人，甚至将祂的独生子赐给他们，叫一切信祂的，不至灭亡，反得永生。',
    keyVerse_en: 'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.',
    keyRef: '约翰福音 3:16 / John 3:16',
  },
  {
    id: 'acts',
    name_zh: '使徒行传',
    name_en: 'Acts',
    author_zh: '路加',
    author_en: 'Luke',
    date: '约公元62-64年',
    date_en: 'c. AD 62–64',
    theme_zh: '圣灵的大能与教会的扩展',
    theme_en: 'The Power of the Spirit and the Expansion of the Church',
    summary_zh: '使徒行传记载圣灵降临后教会从耶路撒冷到罗马的扩展历程。五旬节圣灵浇灌，使徒大有能力传道，福音突破犹太人的界限传给万邦。',
    summary_en: 'Acts records the Church\'s expansion from Jerusalem to Rome after the Spirit\'s descent at Pentecost. The apostles preach with power, and the gospel breaks through Jewish boundaries to reach all nations.',
    keyVerse_zh: '但圣灵降临在你们身上，你们就必得着能力，并要在耶路撒冷、犹太全地，和撒玛利亚，直到地极，作我的见证。',
    keyVerse_en: 'But you will receive power when the Holy Spirit has come upon you, and you will be my witnesses in Jerusalem and in all Judea and Samaria, and to the end of the earth.',
    keyRef: '使徒行传 1:8 / Acts 1:8',
  },
];

export default function GospelsPage() {
  return (
    <BookList
      icon="✝️"
      title_zh="福音书与使徒行传"
      title_en="The Gospels & Acts"
      desc_zh="四福音书从不同角度见证耶稣基督的生平、教导、受死与复活，使徒行传则记载圣灵降临后教会从耶路撒冷到罗马的扩展历程。"
      desc_en="The four Gospels witness to the life, teaching, death, and resurrection of Jesus Christ from different perspectives, and Acts records the Church's expansion from Jerusalem to Rome after Pentecost."
      gradient="from-amber-600 to-orange-800"
      books={books}
      backHref="/new-testament"
      backLabel="返回新约导读 Back to New Testament"
    />
  );
}
