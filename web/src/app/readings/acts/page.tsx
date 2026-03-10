import { Suspense } from 'react';
import { readings } from '@/data/readings';
import ReadingClient, { type BookConfig } from '@/components/ReadingClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '使徒行传伴读 | Acts Companion Reading',
  description: '跟随路加，见证圣灵引导下福音的扩展 | Follow Luke, witness the expansion of the Gospel under the Holy Spirit',
};

const actsConfig: BookConfig = {
  bookId: 'acts',
  guideHref: '/new-testament/gospels/acts',
  bookZh: '使徒行传',
  bookEn: 'Acts',
  bibleId: 'ACT',
  totalChapters: 28,
  unitZh: '章',
  emoji: '🔥',
  authorZh: '路加',
  authorEn: 'Luke',
  introZh: '使徒行传是路加所写的初代教会历史，记载了圣灵降临后福音从耶路撒冷传到罗马的壮阔历程。从五旬节的三千人归主，到保罗锁链中在罗马传道，这卷书见证了一个不可阻挡的事实：复活的基督藉着圣灵，通过祂软弱却忠心的仆人，正在建造祂的教会，阴间的权柄不能胜过她。',
  introEn: 'The Book of Acts, written by Luke, records the history of the early church — the magnificent journey of the Gospel from Jerusalem to Rome after the coming of the Holy Spirit.',
  isTopicBased: false,
};

export default function ActsReadingsPage() {
  const chapters = readings.filter(r => r.book === 'acts');
  return (
    <Suspense fallback={<div className="max-w-3xl mx-auto px-4 py-8 text-center">加载中...</div>}>
      <ReadingClient config={actsConfig} chapters={chapters} />
    </Suspense>
  );
}
