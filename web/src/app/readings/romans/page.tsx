import ReadingClient from '@/components/ReadingClient';
import { BookConfig } from '@/components/ReadingClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '罗马书伴读 | Romans Companion Reading',
  description: '保罗视角的罗马书伴读导读，改革宗释经传统',
};

const config: BookConfig = {
  bookId: 'romans',
  bookZh: '罗马书',
  bookEn: 'Romans',
  bibleId: 'ROM',
  totalChapters: 16,
  unitZh: '章',
  emoji: '⚖️',
  authorZh: '保罗',
  authorEn: 'Paul',
  introZh: '保罗——曾是逼迫教会的法利赛人，后蒙主在大马色路上呼召，成为外邦人的使徒。罗马书是我最系统、最深刻的神学论述——从人的罪，到神的义，到因信称义，到在基督里的新生命。这卷书改变了奥古斯丁、路德、加尔文，也改变了整个教会历史。',
  introEn: 'Paul—once a Pharisee who persecuted the church, then called by the Lord on the Damascus road to become the apostle to the Gentiles. Romans is my most systematic and profound theological treatise—from human sin, to God\'s righteousness, to justification by faith, to new life in Christ. This epistle transformed Augustine, Luther, Calvin, and the entire course of church history.',
};

export default function RomansReadingPage() {
  return <ReadingClient config={config} />;
}
