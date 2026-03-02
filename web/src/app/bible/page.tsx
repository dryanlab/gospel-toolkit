import BibleHome from './client';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '圣经 Holy Bible | 真理磐石',
  description: '和合本与KJV圣经全文阅读，66卷1189章，中英对照',
};

export default function BiblePage() {
  return <BibleHome />;
}
