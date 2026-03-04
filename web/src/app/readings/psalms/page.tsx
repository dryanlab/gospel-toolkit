import { Suspense } from 'react';
import { readings } from '@/data/readings';
import ReadingClient, { type BookConfig } from '@/components/ReadingClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '诗篇伴读 | 真理磐石',
  description: '诗篇主题伴读，在诗人的祷告中遇见基督',
  openGraph: {
    title: '诗篇伴读 | 真理磐石',
    description: '诗篇主题伴读，在诗人的祷告中遇见基督',
    type: 'article',
    images: [{ url: '/og-default.jpg', width: 1200, height: 630 }],
  },
};

const config: BookConfig = {
  bookId: 'psalms',
  bookZh: '诗篇',
  bookEn: 'Psalms',
  bibleId: 'PSA',
  totalChapters: 150,
  unitZh: '篇',
  emoji: '🎵',
  authorZh: '大卫',
  authorEn: 'David',
  introZh: '弟兄姐妹，我是大卫，犹大支派耶西的儿子。这些诗歌是我在青草地上、在旷野逃亡中、在王宫宝座前写下的——每一首都是向耶和华的倾心吐意。',
  introEn: 'Brothers and sisters, I am David, son of Jesse, of the tribe of Judah. These songs were written on green pastures, in the wilderness as a fugitive, and from the throne of a king -- every one of them a pouring out of heart before the LORD.',
  isTopicBased: true,
};

export default function PsalmsPage() {
  const chapters = readings.filter(r => r.bookEn === 'Psalms');
  return (
    <Suspense fallback={<div className="max-w-3xl mx-auto px-4 py-8 text-center">加载中...</div>}>
      <ReadingClient config={config} chapters={chapters} />
    </Suspense>
  );
}
