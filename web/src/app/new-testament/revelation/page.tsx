import BookList from '@/components/BookList';
import type { BibleBook } from '@/components/BookList';

export const metadata = {
  title: '启示录 - 新约导读 - 真理磐石',
  description: '启示录导读：基督的最终得胜与新天新地的异象。',
};

const books: BibleBook[] = [
  {
    id: 'revelation',
    guideHref: '/new-testament/revelation/revelation',
    name_zh: '启示录',
    name_en: 'Revelation',
    author_zh: '使徒约翰',
    author_en: 'Apostle John',
    date: '约公元95年',
    date_en: 'c. AD 95',
    theme_zh: '基督的最终得胜——万王之王',
    theme_en: 'The Final Victory of Christ — King of Kings',
    summary_zh: '启示录以异象的方式揭示了历史的终局：基督必要再来，审判罪恶，更新万有。受苦中的教会当坚守信仰，因为那位曾被杀的羔羊已经得胜，祂要擦去一切的眼泪。',
    summary_en: 'Revelation unveils the end of history through visions: Christ will return, judge evil, and make all things new. The suffering church must hold fast, for the Lamb who was slain has conquered, and He will wipe away every tear.',
    keyVerse_zh: '神要擦去他们一切的眼泪；不再有死亡，也不再有悲哀、哭号、疼痛，因为以前的事都过去了。',
    keyVerse_en: 'He will wipe away every tear from their eyes, and death shall be no more, neither shall there be mourning, nor crying, nor pain anymore, for the former things have passed away.',
    keyRef: '启示录 21:4 / Revelation 21:4',
  },
];

export default function RevelationPage() {
  return (
    <BookList
      icon="🌅"
      title_zh="启示文学：启示录"
      title_en="Apocalyptic: Revelation"
      desc_zh="启示录是新约的最后一卷书，以壮丽的异象揭示基督的最终得胜、罪恶的审判和新天新地的来临。它是整本圣经的荣耀终章。"
      desc_en="Revelation is the final book of the New Testament, unveiling through majestic visions Christ's ultimate victory, the judgment of evil, and the coming of the new heaven and new earth — the glorious conclusion of all Scripture."
      gradient="from-fuchsia-600 to-purple-800"
      books={books}
      backHref="/new-testament"
      backLabel="返回新约导读 Back to New Testament"
    />
  );
}
