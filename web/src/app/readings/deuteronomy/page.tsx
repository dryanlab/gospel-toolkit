import { Suspense } from 'react';
import { readings } from '@/data/readings';
import ReadingClient, { type BookConfig } from '@/components/ReadingClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '申命记伴读 | 真理磐石',
  description: '改革宗视角的申命记逐章导读',
  openGraph: {
    title: '申命记伴读 | 真理磐石',
    description: '改革宗视角的申命记逐章导读',
    type: 'article',
    images: [{ url: '/og-default.jpg', width: 1200, height: 630 }],
  },
};

const config: BookConfig = {
  bookId: 'deuteronomy',
  guideHref: '/old-testament/pentateuch/deuteronomy',
  bookZh: '申命记',
  bookEn: 'Deuteronomy',
  bibleId: 'DEU',
  totalChapters: 34,
  unitZh: '章',
  emoji: '📜',
  authorZh: '摩西',
  authorEn: 'Moses',
  introZh: '申命记是摩西的遗言——在约旦河东向新一代以色列人重申律法和盟约。这是旧约中最伟大的讲道集，从"以色列啊你要听"到摩西之死。',
  introEn: 'Deuteronomy is Moses\' farewell—reiterating law and covenant to the new generation east of the Jordan. It is the Old Testament\'s greatest sermon collection, from "Hear, O Israel" to Moses\' death.',
};

export default function DeuteronomyReadingPage() {
  const chapters = readings.filter(r => r.bookEn === 'Deuteronomy');
  return (
    <Suspense fallback={<div className="max-w-3xl mx-auto px-4 py-8 text-center">加载中...</div>}>
      <ReadingClient config={config} chapters={chapters} />
    </Suspense>
  );
}
