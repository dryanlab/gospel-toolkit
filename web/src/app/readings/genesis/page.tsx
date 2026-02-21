import { Suspense } from 'react';
import { readings } from '@/data/readings';
import GenesisClient from './client';
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

export default function GenesisPage() {
  const chapters = readings.filter(r => r.bookEn === 'Genesis');
  return (
    <Suspense fallback={<div className="max-w-3xl mx-auto px-4 py-8 text-center">加载中...</div>}>
      <GenesisClient chapters={chapters} />
    </Suspense>
  );
}
