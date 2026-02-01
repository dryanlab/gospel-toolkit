import { apologeticsTopics } from '@/lib/data';
import ApologeticsDetailClient from './client';

export function generateStaticParams() {
  return apologeticsTopics.map(t => ({ id: t.id }));
}

export default function ApologeticsDetailPage({ params }: { params: Promise<{ id: string }> }) {
  return <ApologeticsDetailClient paramsPromise={params} />;
}
