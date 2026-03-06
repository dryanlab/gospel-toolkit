import { Suspense } from 'react';
import { readings } from '@/data/readings';
import ReadingClient, { type BookConfig } from '@/components/ReadingClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '罗马书伴读 | Romans Companion Reading',
  description: '跟随保罗，深入因信称义的福音奥秘 | Follow Paul into the depths of justification by faith',
};

const romansConfig: BookConfig = {
  bookId: 'romans',
  bookZh: '罗马书',
  bookEn: 'Romans',
  bibleId: 'ROM',
  totalChapters: 16,
  unitZh: '章',
  emoji: '📜',
  authorZh: '保罗',
  authorEn: 'Paul',
  introZh: '罗马书是保罗神学的巅峰之作，系统阐述了因信称义的福音。从人的普遍罪性，到基督的救赎恩典，从成圣的挣扎到神主权的拣选，最终以实际的基督徒生活为结语，这封书信是整本圣经中最完整、最深刻的福音论述。',
  introEn: 'Romans is Paul\'s theological masterpiece, systematically expounding the gospel of justification by faith. From universal sinfulness to Christ\'s redemptive grace, from sanctification\'s struggle to God\'s sovereign election, this epistle is the Bible\'s most complete and profound gospel exposition.',
  isTopicBased: false,
};

export default function RomansReadingsPage() {
  const chapters = readings.filter(r => r.book === 'romans');
  return (
    <Suspense fallback={<div className="max-w-3xl mx-auto px-4 py-8 text-center">加载中...</div>}>
      <ReadingClient config={romansConfig} chapters={chapters} />
    </Suspense>
  );
}
