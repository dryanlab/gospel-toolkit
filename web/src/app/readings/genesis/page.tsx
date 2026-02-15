import { Suspense } from 'react';
import { readings } from '@/data/readings';
import GenesisClient from './client';

export default function GenesisPage() {
  const chapters = readings.filter(r => r.bookEn === 'Genesis');
  return (
    <Suspense fallback={<div className="max-w-3xl mx-auto px-4 py-8 text-center">加载中...</div>}>
      <GenesisClient chapters={chapters} />
    </Suspense>
  );
}
