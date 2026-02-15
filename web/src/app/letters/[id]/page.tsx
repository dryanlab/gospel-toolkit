import { letters } from '@/data/letters';
import LetterClient from './client';

export function generateStaticParams() {
  return letters.map(l => ({ id: l.id }));
}

export default async function LetterPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <LetterClient id={id} />;
}
