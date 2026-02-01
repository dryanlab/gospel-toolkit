import { catechismQuestions } from '@/lib/data';
import CatechismDetailClient from './client';

export function generateStaticParams() {
  return catechismQuestions.map(q => ({ id: q.id }));
}

export default function CatechismDetailPage({ params }: { params: Promise<{ id: string }> }) {
  return <CatechismDetailClient paramsPromise={params} />;
}
