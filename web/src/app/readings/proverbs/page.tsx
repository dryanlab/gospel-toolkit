import { Suspense } from 'react';
import { readings } from '@/data/readings';
import ReadingClient, { type BookConfig } from '@/components/ReadingClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '箴言伴读 | 真理磐石',
  description: '箴言主题伴读，在智慧的教导中认识敬畏耶和华的人生',
  openGraph: {
    title: '箴言伴读 | 真理磐石',
    description: '箴言主题伴读，在智慧的教导中认识敬畏耶和华的人生',
    type: 'article',
    images: [{ url: '/og-default.jpg', width: 1200, height: 630 }],
  },
};

const config: BookConfig = {
  bookId: 'proverbs',
  guideHref: '/old-testament/poetry/proverbs',
  bookZh: '箴言',
  bookEn: 'Proverbs',
  bibleId: 'PRO',
  totalChapters: 31,
  unitZh: '章',
  emoji: '💎',
  authorZh: '所罗门',
  authorEn: 'Solomon',
  introZh: '弟兄姐妹，我是所罗门，大卫的儿子。耶和华赐我智慧，胜过世上一切的人。但我要告诉你——智慧的开端不是聪明，而是敬畏耶和华。',
  introEn: 'Brothers and sisters, I am Solomon, son of David. The LORD granted me wisdom surpassing all on earth. But I must tell you -- the beginning of wisdom is not cleverness, but the fear of the LORD.',
  isTopicBased: true,
};

export default function ProverbsPage() {
  const chapters = readings.filter(r => r.bookEn === 'Proverbs');
  return (
    <Suspense fallback={<div className="max-w-3xl mx-auto px-4 py-8 text-center">加载中...</div>}>
      <ReadingClient config={config} chapters={chapters} />
    </Suspense>
  );
}
