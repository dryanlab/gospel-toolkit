import { Suspense } from 'react';
import { readings } from '@/data/readings';
import ReadingClient, { type BookConfig } from '@/components/ReadingClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '创世记伴读 | 真理磐石',
  description: '创世记逐章伴读，改革宗视角解读圣经第一卷书',
  openGraph: {
    title: '创世记伴读 | 真理磐石',
    description: '创世记逐章伴读，改革宗视角解读圣经第一卷书',
    type: 'article',
    images: [{ url: '/og-default.jpg', width: 1200, height: 630 }],
  },
};

const config: BookConfig = {
  bookId: 'genesis',
  bookZh: '创世记',
  bookEn: 'Genesis',
  bibleId: 'GEN',
  totalChapters: 50,
  unitZh: '章',
  emoji: '🌍',
  authorZh: '摩西',
  authorEn: 'Moses',
  introZh: '弟兄姐妹，我是摩西，耶和华的仆人。这卷书是我在西奈旷野写下的，要让你们知道——万物从何而来，又是谁的手托住这一切。',
  introEn: 'Brothers and sisters, I am Moses, servant of the LORD. I wrote this book in the wilderness of Sinai, so you would know -- where all things come from, and whose hand upholds them all.',
};

export default function GenesisPage() {
  const chapters = readings.filter(r => r.bookEn === 'Genesis');
  return (
    <Suspense fallback={<div className="max-w-3xl mx-auto px-4 py-8 text-center">加载中...</div>}>
      <ReadingClient config={config} chapters={chapters} />
    </Suspense>
  );
}
