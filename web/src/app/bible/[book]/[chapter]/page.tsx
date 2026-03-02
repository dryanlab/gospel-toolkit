import bibleIndex from '@/data/bible/index.json';
import ChapterClient from './client';
import type { Metadata } from 'next';

interface Book { id: string; name_en: string; name_zh: string; chapters: number; testament: string; }

export function generateStaticParams() {
  const params: { book: string; chapter: string }[] = [];
  for (const b of bibleIndex as Book[]) {
    for (let c = 1; c <= b.chapters; c++) {
      params.push({ book: b.id, chapter: String(c) });
    }
  }
  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ book: string; chapter: string }> }): Promise<Metadata> {
  const { book, chapter } = await params;
  const b = (bibleIndex as Book[]).find(x => x.id === book);
  if (!b) return {};
  return {
    title: `${b.name_zh} 第${chapter}章 | 圣经 | 真理磐石`,
    description: `${b.name_zh}（${b.name_en}）第${chapter}章 — 和合本与KJV中英对照阅读`,
  };
}

export default async function ChapterPage({ params }: { params: Promise<{ book: string; chapter: string }> }) {
  const { book, chapter } = await params;
  return <ChapterClient bookId={book} chapter={parseInt(chapter, 10)} />;
}
