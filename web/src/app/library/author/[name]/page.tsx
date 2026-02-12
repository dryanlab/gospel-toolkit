import { books } from '@/lib/data';
import AuthorBooksClient from './client';

export function generateStaticParams() {
  const authors = new Set(books.map((b) => b.author_zh).filter(Boolean));
  return Array.from(authors).map((name) => ({ name: encodeURIComponent(name) }));
}

export default async function AuthorBooksPage({ params }: { params: Promise<{ name: string }> }) {
  const { name } = await params;
  return <AuthorBooksClient authorName={decodeURIComponent(name)} />;
}
