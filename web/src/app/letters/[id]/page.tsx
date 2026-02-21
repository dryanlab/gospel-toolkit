import { letters } from '@/data/letters';
import LetterClient from './client';
import type { Metadata } from 'next';

export function generateStaticParams() {
  return letters.map(l => ({ id: l.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const letter = letters.find(l => l.id === id);
  if (!letter) return {};
  const title = `${letter.title_zh} | 真理磐石`;
  const description = letter.summary_zh || letter.title_zh;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      url: `https://rockoftruth.net/letters/${id}`,
      siteName: '真理磐石 Rock of Truth',
      images: [{ url: '/og-default.jpg', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og-default.jpg'],
    },
  };
}

export default async function LetterPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <LetterClient id={id} />;
}
