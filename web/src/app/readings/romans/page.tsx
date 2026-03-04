import ReadingClient from '@/components/ReadingClient';
import { BookConfig } from '@/components/ReadingClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '罗马书伴读 | Romans Companion Reading',
  description: '保罗视角的罗马书伴读导读，改革宗神学精粹',
};

const config: BookConfig = {
  bookId: 'romans',
  bookZh: '罗马书',
  bookEn: 'Romans',
  bibleId: 'ROM',
  totalChapters: 16,
  unitZh: '章',
  emoji: '📜',
  authorZh: '保罗',
  authorEn: 'Paul',
  introZh: '保罗——大数人，法利赛人，外邦人的使徒。我写这封信的时候，人在哥林多，心在罗马。这不只是一封信，这是我用毕生传道所积累的、关于福音的最完整的阐述。唯独因信称义——这是教会站立或跌倒的真理。',
  introEn: 'Paul—man of Tarsus, Pharisee, apostle to the Gentiles. When I wrote this letter I was in Corinth, with my heart set on Rome. This is not merely a letter; it is the fullest exposition of the gospel I have accumulated through a lifetime of ministry. Justification by faith alone—this is the article by which the church stands or falls.',
};

export default function RomansReadingPage() {
  return <ReadingClient config={config} />;
}
