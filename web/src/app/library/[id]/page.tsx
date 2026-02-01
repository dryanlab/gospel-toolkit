import { books } from '@/lib/data';
import BookDetailClient from './client';

export function generateStaticParams() {
  return books.map(b => ({ id: b.id }));
}

export default function BookDetailPage({ params }: { params: Promise<{ id: string }> }) {
  return <BookDetailClient paramsPromise={params} />;
}
