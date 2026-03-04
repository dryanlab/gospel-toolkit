import ReadingClient from '@/components/ReadingClient';

const actsConfig = {
  bookId: 'acts',
  bookZh: '使徒行传',
  bookEn: 'Acts',
  bibleId: 'ACT',
  totalChapters: 28,
  unitZh: '章',
  emoji: '🔥',
  authorZh: '路加',
  authorEn: 'Luke',
  introZh: '使徒行传是路加所写的初代教会历史，记载了圣灵降临后福音从耶路撒冷传到罗马的壮阔历程。从五旬节的三千人归主，到保罗锁链中在罗马传道，这卷书见证了一个不可阻挡的事实：复活的基督藉着圣灵，通过祂软弱却忠心的仆人，正在建造祂的教会，阴间的权柄不能胜过她。',
  introEn: 'The Book of Acts, written by Luke, records the history of the early church — the magnificent journey of the Gospel from Jerusalem to Rome after the coming of the Holy Spirit. From the three thousand converted at Pentecost to Paul preaching in chains in Rome, this book witnesses an unstoppable truth: the risen Christ, through His Spirit and His weak yet faithful servants, is building His church, and the gates of hell shall not prevail against it.',
  isTopicBased: false,
};

export default function ActsReadingsPage() {
  return <ReadingClient config={actsConfig} />;
}

export function generateStaticParams() {
  return [];
}

export const metadata = {
  title: '使徒行传伴读 | Acts Companion Reading',
  description: '跟随路加，见证圣灵引导下福音的扩展 | Follow Luke, witness the expansion of the Gospel under the Holy Spirit',
};
