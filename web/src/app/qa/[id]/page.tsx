import { qaQuestions } from '@/lib/data';
import QADetailClient from './client';

export function generateStaticParams() {
  return qaQuestions.map(q => ({ id: q.id }));
}

export default function QADetailPage({ params }: { params: Promise<{ id: string }> }) {
  return <QADetailClient paramsPromise={params} />;
}
