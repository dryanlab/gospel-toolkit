import BookList from '@/components/BookList';
import type { BibleBook } from '@/components/BookList';

export const metadata = {
  title: '普通书信 - 新约导读 - 真理磐石',
  description: '普通书信导读：希伯来书、雅各书、彼得前后书、约翰一二三书、犹大书。',
};

const books: BibleBook[] = [
  {
    id: 'hebrews',
    name_zh: '希伯来书',
    name_en: 'Hebrews',
    author_zh: '未知（传统认为可能是保罗、巴拿巴或亚波罗）',
    author_en: 'Unknown (traditionally Paul, Barnabas, or Apollos)',
    date: '约公元65年',
    date_en: 'c. AD 65',
    theme_zh: '基督超越一切——更美的大祭司与新约',
    theme_en: 'Christ Is Superior — A Better High Priest and a New Covenant',
    summary_zh: '希伯来书向面临逼迫的犹太裔信徒证明基督远超天使、摩西、旧约祭司制度和一切旧约预表。第11章的"信心英雄榜"激励历代圣徒奔跑天路。',
    summary_en: 'Hebrews demonstrates to persecuted Jewish believers that Christ is far superior to angels, Moses, the Old Testament priesthood, and all Old Testament types. The "hall of faith" in Chapter 11 inspires the saints to run the race.',
    keyVerse_zh: '我们既有这许多的见证人，如同云彩围着我们，就当放下各样的重担，脱去容易缠累我们的罪，存心忍耐，奔那摆在我们前头的路程。',
    keyVerse_en: 'Therefore, since we are surrounded by so great a cloud of witnesses, let us also lay aside every weight, and sin which clings so closely, and let us run with endurance the race that is set before us.',
    keyRef: '希伯来书 12:1 / Hebrews 12:1',
  },
  {
    id: 'james',
    name_zh: '雅各书',
    name_en: 'James',
    author_zh: '主的兄弟雅各',
    author_en: 'James, brother of Jesus',
    date: '约公元45-49年',
    date_en: 'c. AD 45–49',
    theme_zh: '活出来的信仰——信心与行为',
    theme_en: 'Living Faith — Faith and Works',
    summary_zh: '雅各书被称为"新约的箴言"，以实际的教导帮助信徒将信仰活出来：控制舌头、照顾穷人、在试炼中忍耐、以行为证明真信心。',
    summary_en: 'James, called "the Proverbs of the New Testament," gives practical teaching on living out the faith: taming the tongue, caring for the poor, enduring trials, and demonstrating true faith through works.',
    keyVerse_zh: '身体没有灵魂是死的，信心没有行为也是死的。',
    keyVerse_en: 'For as the body apart from the spirit is dead, so also faith apart from works is dead.',
    keyRef: '雅各书 2:26 / James 2:26',
  },
  {
    id: '1peter',
    name_zh: '彼得前书',
    name_en: '1 Peter',
    author_zh: '使徒彼得',
    author_en: 'Apostle Peter',
    date: '约公元62-64年',
    date_en: 'c. AD 62–64',
    theme_zh: '在苦难中的活泼盼望',
    theme_en: 'Living Hope in the Midst of Suffering',
    summary_zh: '彼得写给正在遭受逼迫的信徒，鼓励他们在苦难中持守活泼的盼望。信徒是"被拣选的族类，是有君尊的祭司"，当以圣洁和顺服见证基督。',
    summary_en: 'Peter writes to believers under persecution, encouraging them to hold fast to their living hope. Believers are "a chosen race, a royal priesthood," called to witness through holiness and submission.',
    keyVerse_zh: '愿颂赞归与我们主耶稣基督的父神！祂曾照自己的大怜悯，藉耶稣基督从死里复活，重生了我们，叫我们有活泼的盼望。',
    keyVerse_en: 'Blessed be the God and Father of our Lord Jesus Christ! According to his great mercy, he has caused us to be born again to a living hope through the resurrection of Jesus Christ from the dead.',
    keyRef: '彼得前书 1:3 / 1 Peter 1:3',
  },
  {
    id: '2peter',
    name_zh: '彼得后书',
    name_en: '2 Peter',
    author_zh: '使徒彼得',
    author_en: 'Apostle Peter',
    date: '约公元65-67年',
    date_en: 'c. AD 65–67',
    theme_zh: '警戒假教师，持守真道',
    theme_en: 'Warning against False Teachers, Holding to the Truth',
    summary_zh: '彼得在殉道前写下这封遗书，警告假教师的危害，呼吁信徒在恩典和知识上长进。末章关于主再来的教导提醒我们当儆醒等候。',
    summary_en: 'Peter\'s farewell letter before martyrdom warns of false teachers and urges believers to grow in grace and knowledge. The final chapter on Christ\'s return reminds us to be watchful.',
    keyVerse_zh: '你们却要在我们主救主耶稣基督的恩典和知识上有长进。',
    keyVerse_en: 'But grow in the grace and knowledge of our Lord and Savior Jesus Christ.',
    keyRef: '彼得后书 3:18 / 2 Peter 3:18',
  },
  {
    id: '1john',
    name_zh: '约翰一书',
    name_en: '1 John',
    author_zh: '使徒约翰',
    author_en: 'Apostle John',
    date: '约公元85-95年',
    date_en: 'c. AD 85–95',
    theme_zh: '神就是爱——真信仰的测验',
    theme_en: 'God Is Love — Tests of True Faith',
    summary_zh: '约翰提供了三个测验来辨别真信仰：教义的测验（相信耶稣是道成肉身的基督）、道德的测验（遵行神的命令）和社会的测验（彼此相爱）。',
    summary_en: 'John provides three tests of true faith: the doctrinal test (believing Jesus is the Christ come in the flesh), the moral test (obeying God\'s commands), and the social test (loving one another).',
    keyVerse_zh: '神就是爱；住在爱里面的，就是住在神里面，神也住在他里面。',
    keyVerse_en: 'God is love, and whoever abides in love abides in God, and God abides in him.',
    keyRef: '约翰一书 4:16 / 1 John 4:16',
  },
  {
    id: '2john',
    name_zh: '约翰二书',
    name_en: '2 John',
    author_zh: '使徒约翰',
    author_en: 'Apostle John',
    date: '约公元85-95年',
    date_en: 'c. AD 85–95',
    theme_zh: '在真理中行走，防备假教师',
    theme_en: 'Walking in Truth, Guarding against False Teachers',
    summary_zh: '约翰二书是写给"蒙拣选的太太"的短信，劝勉信徒在真理和爱中行走，警告不可接待否认基督道成肉身的假教师。',
    summary_en: 'A short letter to "the elect lady," urging believers to walk in truth and love while warning against receiving false teachers who deny that Christ came in the flesh.',
    keyVerse_zh: '我们大家要彼此相爱，这并不是我写一条新命令给你，乃是我们从起初所受的命令。',
    keyVerse_en: 'And now I ask you, dear lady—not as though I were writing you a new commandment, but the one we have had from the beginning—that we love one another.',
    keyRef: '约翰二书 1:5 / 2 John 1:5',
  },
  {
    id: '3john',
    name_zh: '约翰三书',
    name_en: '3 John',
    author_zh: '使徒约翰',
    author_en: 'Apostle John',
    date: '约公元85-95年',
    date_en: 'c. AD 85–95',
    theme_zh: '在真理中的款待与忠心',
    theme_en: 'Hospitality and Faithfulness in the Truth',
    summary_zh: '约翰三书称赞该犹的忠心接待，批评丢特腓的骄傲专权，鼓励信徒效法良善、在真理中行走并接待传道人。',
    summary_en: 'Third John commends Gaius for faithful hospitality, condemns Diotrephes\' arrogant power-grabbing, and encourages believers to imitate good, walk in truth, and welcome gospel workers.',
    keyVerse_zh: '亲爱的兄弟啊，不要效法恶，只要效法善。行善的属乎神；行恶的未曾见过神。',
    keyVerse_en: 'Beloved, do not imitate evil but imitate good. Whoever does good is from God; whoever does evil has not seen God.',
    keyRef: '约翰三书 1:11 / 3 John 1:11',
  },
  {
    id: 'jude',
    name_zh: '犹大书',
    name_en: 'Jude',
    author_zh: '主的兄弟犹大',
    author_en: 'Jude, brother of Jesus',
    date: '约公元65-80年',
    date_en: 'c. AD 65–80',
    theme_zh: '为真道竭力争辩',
    theme_en: 'Contend Earnestly for the Faith',
    summary_zh: '犹大书紧急呼吁信徒为从前一次交付圣徒的真道竭力争辩，揭露混入教会的假教师，以旧约的审判为鉴戒，末了以伟大的颂赞作结。',
    summary_en: 'Jude urgently calls believers to contend for the faith once delivered to the saints, exposing false teachers who crept into the church, using Old Testament judgments as warnings, and closing with a magnificent doxology.',
    keyVerse_zh: '亲爱的弟兄啊，你们要在至圣的真道上造就自己，在圣灵里祷告。',
    keyVerse_en: 'But you, beloved, building yourselves up in your most holy faith and praying in the Holy Spirit.',
    keyRef: '犹大书 1:20 / Jude 1:20',
  },
];

export default function GeneralEpistlesPage() {
  return (
    <BookList
      icon="📨"
      title_zh="普通书信"
      title_en="General Epistles"
      desc_zh="普通书信是其他使徒写给众教会的书信，涵盖基督的超越、活泼的信心、苦难中的盼望、防备假教师等丰富主题，教导信徒在各样环境中持守真道。"
      desc_en="The General Epistles, written by various apostles to the wider Church, cover Christ's supremacy, living faith, hope in suffering, and guarding against false teachers — equipping believers to hold fast in every circumstance."
      gradient="from-purple-600 to-violet-800"
      books={books}
      backHref="/new-testament"
      backLabel="返回新约导读 Back to New Testament"
    />
  );
}
