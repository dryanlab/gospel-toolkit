import ReadingClient from '@/components/ReadingClient'
import { readingsData } from '@/data/readings'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '申命记伴读 | 真理磐石',
  description: '改革宗视角的申命记逐章导读',
}

const config = {
  bookId: 'deuteronomy' as const,
  bookZh: '申命记',
  bookEn: 'Deuteronomy',
  bibleId: 'DEU',
  totalChapters: 34,
  unitZh: '章',
  emoji: '📜',
  authorZh: '摩西',
  authorEn: 'Moses',
  introZh: '申命记是摩西的遗言——在约旦河东向新一代以色列人重申律法和盟约。这是旧约中最伟大的讲道集，从"以色列啊你要听"到摩西之死。',
  introEn: 'Deuteronomy is Moses\' farewell—reiterating law and covenant to the new generation east of the Jordan. It is the Old Testament\'s greatest sermon collection, from "Hear, O Israel" to Moses\' death.',
  isTopicBased: false,
}

export default function DeuteronomyReadingPage() {
  const chapters = readingsData.filter(r => r.book === '申命记')
  return <ReadingClient config={config} chapters={chapters} />
}
