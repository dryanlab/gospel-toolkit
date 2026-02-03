import { bookCategories } from '@/lib/data';
import CategoryClient from './client';

export function generateStaticParams() {
  return bookCategories.map(([cat]) => ({ cat: encodeURIComponent(cat) }));
}

export default async function CategoryPage({ params }: { params: Promise<{ cat: string }> }) {
  const { cat: rawCat } = await params;
  // generateStaticParams encodes once, Next.js encodes again → double decode
  let cat = rawCat;
  try { cat = decodeURIComponent(cat); } catch {}
  try { cat = decodeURIComponent(cat); } catch {}
  return <CategoryClient cat={cat} />;
}
