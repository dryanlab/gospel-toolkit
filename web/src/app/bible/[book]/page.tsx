import bibleIndex from '@/data/bible/index.json';
import BookClient from './client';
import type { Metadata } from 'next';

interface Book { id: string; name_en: string; name_zh: string; chapters: number; testament: string; }

export function generateStaticParams() {
  return (bibleIndex as Book[]).map(b => ({ book: b.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ book: string }> }): Promise<Metadata> {
  const { book } = await params;
  const b = (bibleIndex as Book[]).find(x => x.id === book);
  if (!b) return {};
  return {
    title: `${b.name_zh} ${b.name_en} | 圣经 | 真理磐石`,
    description: `${b.name_zh}（${b.name_en}）共${b.chapters}章 — 和合本与KJV圣经阅读`,
  };
}

export default async function BookPage({ params }: { params: Promise<{ book: string }> }) {
  const { book } = await params;
  return <BookClient bookId={book} />;
}
