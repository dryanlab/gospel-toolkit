import { youthItems } from '@/lib/data';
import YouthDetailClient from './client';

export function generateStaticParams() {
  return youthItems.map(item => ({ id: item.id }));
}

export default function YouthDetailPage({ params }: { params: Promise<{ id: string }> }) {
  return <YouthDetailClient paramsPromise={params} />;
}