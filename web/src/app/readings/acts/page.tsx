import ReadingClient from '@/components/ReadingClient';
import { BookConfig } from '@/components/ReadingClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '使徒行传伴读 | Acts Companion Reading',
  description: '路加视角的使徒行传伴读导读，改革宗释经传统',
};

const config: BookConfig = {
  bookId: 'acts',
  bookZh: '使徒行传',
  bookEn: 'Acts',
  bibleId: 'ACT',
  totalChapters: 28,
  unitZh: '章',
  emoji: '🔥',
  authorZh: '路加',
  authorEn: 'Luke',
  introZh: '路加——医生、保罗的同工、教会历史的执笔者。从耶路撒冷到罗马，我亲眼见证了福音如何从一间小小的阁楼，燃烧到帝国的心脏。圣灵降临的那一天，教会诞生了；从那天起，没有任何力量能拦阻这福音的脚步。',
  introEn: 'Luke—physician, co-worker of Paul, recorder of church history. From Jerusalem to Rome, I witnessed firsthand how the gospel spread from a small upper room to the heart of the empire. On the day the Spirit descended, the church was born; from that day forth, no power could hinder the advance of this gospel.',
};

export default function ActsReadingPage() {
  return <ReadingClient config={config} />;
}
