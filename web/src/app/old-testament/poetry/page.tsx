import BookList from '@/components/BookList';
import type { BibleBook } from '@/components/BookList';

export const metadata = {
  title: '诗歌智慧书 - 旧约导读 - 真理磐石',
  description: '诗歌智慧书导读：约伯记、诗篇、箴言、传道书、雅歌。',
};

const books: BibleBook[] = [
  {
    id: 'job',
    name_zh: '约伯记',
    name_en: 'Job',
    author_zh: '佚名',
    author_en: 'Anonymous',
    date: '不详（可能为族长时期）',
    date_en: 'Unknown (possibly Patriarchal era)',
    theme_zh: '苦难中的信心与神的主权',
    theme_en: 'Faith in Suffering and God\'s Sovereignty',
    summary_zh: '约伯记探讨义人受苦的奥秘。约伯失去一切却持守信心，最终神亲自从旋风中回答他，彰显神的主权超越人的理解，呼召人在苦难中信靠神。',
    summary_en: 'Job explores the mystery of righteous suffering. Job loses everything yet holds to faith. God answers him from the whirlwind, revealing His sovereignty beyond human understanding and calling us to trust Him in suffering.',
    keyVerse_zh: '我从前风闻有你，现在亲眼看见你。',
    keyVerse_en: 'I had heard of you by the hearing of the ear, but now my eye sees you.',
    keyRef: '约伯记 42:5 / Job 42:5',
  },
  {
    id: 'psalms',
    name_zh: '诗篇',
    name_en: 'Psalms',
    author_zh: '大卫等',
    author_en: 'David and others',
    date: '约公元前1000-400年',
    date_en: 'c. 1000–400 BC',
    theme_zh: '敬拜、祷告与颂赞的诗歌',
    theme_en: 'Songs of Worship, Prayer, and Praise',
    summary_zh: '诗篇是以色列的诗歌集，包含150篇涵盖赞美、哀叹、感恩、忏悔、智慧等主题的诗歌。它是圣徒在一切境遇中向神倾心吐意的指南。',
    summary_en: 'The Psalms are Israel\'s hymnal, containing 150 songs of praise, lament, thanksgiving, repentance, and wisdom. They guide believers in pouring out their hearts to God in every circumstance.',
    keyVerse_zh: '耶和华是我的牧者，我必不至缺乏。',
    keyVerse_en: 'The LORD is my shepherd; I shall not want.',
    keyRef: '诗篇 23:1 / Psalm 23:1',
  },
  {
    id: 'proverbs',
    name_zh: '箴言',
    name_en: 'Proverbs',
    author_zh: '所罗门等',
    author_en: 'Solomon and others',
    date: '约公元前970-700年',
    date_en: 'c. 970–700 BC',
    theme_zh: '敬畏耶和华是智慧的开端',
    theme_en: 'The Fear of the LORD Is the Beginning of Wisdom',
    summary_zh: '箴言是实际生活智慧的汇集，教导人如何在家庭、工作、人际关系中活出敬虔。智慧不仅是聪明，更是以敬畏神为根基的生活方式。',
    summary_en: 'Proverbs is a collection of practical wisdom for daily life — family, work, and relationships. Wisdom is not mere cleverness but a way of life rooted in the fear of the LORD.',
    keyVerse_zh: '敬畏耶和华是知识的开端；愚妄人藐视智慧和训诲。',
    keyVerse_en: 'The fear of the LORD is the beginning of knowledge; fools despise wisdom and instruction.',
    keyRef: '箴言 1:7 / Proverbs 1:7',
  },
  {
    id: 'ecclesiastes',
    name_zh: '传道书',
    name_en: 'Ecclesiastes',
    author_zh: '所罗门',
    author_en: 'Solomon',
    date: '约公元前940年',
    date_en: 'c. 940 BC',
    theme_zh: '日光之下的虚空与日光之上的意义',
    theme_en: 'Vanity under the Sun and Meaning above It',
    summary_zh: '传道书以"虚空的虚空"开始，探索人生在日光之下的意义。一切劳碌和追求若离开神都是捕风。全书最终指向敬畏神、谨守祂的诫命才是人的本分。',
    summary_en: 'Ecclesiastes begins with "vanity of vanities," exploring life\'s meaning under the sun. All toil apart from God is chasing after wind. The conclusion: fear God and keep His commandments, for this is the whole duty of man.',
    keyVerse_zh: '这些事都已听见了，总意就是：敬畏神，谨守祂的诫命，这是人所当尽的本分。',
    keyVerse_en: 'The end of the matter; all has been heard. Fear God and keep his commandments, for this is the whole duty of man.',
    keyRef: '传道书 12:13 / Ecclesiastes 12:13',
  },
  {
    id: 'songofsolomon',
    name_zh: '雅歌',
    name_en: 'Song of Solomon',
    author_zh: '所罗门',
    author_en: 'Solomon',
    date: '约公元前960年',
    date_en: 'c. 960 BC',
    theme_zh: '爱情的颂歌——基督与教会的预表',
    theme_en: 'A Song of Love — Foreshadowing Christ and the Church',
    summary_zh: '雅歌以优美的诗歌颂扬婚姻中忠贞的爱情，同时在更深的层面预表基督对教会深切的爱。爱情众水不能熄灭，大水也不能淹没。',
    summary_en: 'The Song of Solomon celebrates faithful love in marriage through beautiful poetry, while on a deeper level it foreshadows Christ\'s ardent love for His Church. Many waters cannot quench love.',
    keyVerse_zh: '求你将我放在你心上如印记，带在你臂上如戳记。因为爱情如死之坚强。',
    keyVerse_en: 'Set me as a seal upon your heart, as a seal upon your arm, for love is strong as death.',
    keyRef: '雅歌 8:6 / Song of Solomon 8:6',
  },
];

export default function PoetryPage() {
  return (
    <BookList
      icon="🎵"
      title_zh="诗歌智慧书"
      title_en="Poetry & Wisdom"
      desc_zh="诗歌智慧书是以色列人灵性生活的精华，以诗歌和箴言的形式表达对神的敬拜、对苦难的思索、对智慧的追寻和对爱情的颂赞。"
      desc_en="The Poetry and Wisdom books are the crown of Israel's spiritual life, expressing worship, reflection on suffering, the pursuit of wisdom, and the celebration of love through poetry and proverbs."
      gradient="from-purple-600 to-violet-800"
      books={books}
      backHref="/old-testament"
      backLabel="返回旧约导读 Back to Old Testament"
    />
  );
}
