import { qaQuestions, categoryLabels } from '@/lib/data';
import CategoryClient from './client';

export function generateStaticParams() {
  const cats = new Set(qaQuestions.map(q => q.category));
  return Array.from(cats).map(cat => ({ cat }));
}

export default function QACategoryPage({ params }: { params: Promise<{ cat: string }> }) {
  return <CategoryClient paramsPromise={params} />;
}
