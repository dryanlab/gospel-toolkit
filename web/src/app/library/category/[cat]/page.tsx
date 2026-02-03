import { bookCategories } from '@/lib/data';
import CategoryClient from './client';

export function generateStaticParams() {
  return bookCategories.map(([cat]) => ({ cat: encodeURIComponent(cat) }));
}

export default function CategoryPage({ params }: { params: Promise<{ cat: string }> }) {
  return <CategoryClient paramsPromise={params} />;
}
