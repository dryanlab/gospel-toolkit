import ReadingClient from '@/components/ReadingClient'
import { readings } from '@/data/readings'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '民数记伴读 | 真理磐石',
  description: '改革宗视角的民数记逐章导读',
}

const config = {
  bookId: 'numbers' as const,
  bookZh: '民数记',
  bookEn: 'Numbers',
  bibleId: 'NUM',
  totalChapters: 36,
  unitZh: '章',
  emoji: '🏕️',
  authorZh: '摩西',
  authorEn: 'Moses',
  introZh: '民数记记载以色列人在旷野四十年的漂泊——从西奈山出发到约旦河东。数点人口、旷野试探、叛逆与审判、信心与应许交织其中。',
  introEn: 'Numbers records Israel\'s forty years of wilderness wandering—from Sinai to the eastern bank of Jordan. Census-taking, wilderness testing, rebellion and judgment, faith and promise are interwoven throughout.',
  isTopicBased: false,
}

export default function NumbersReadingPage() {
  const chapters = readings.filter(r => r.book === '民数记')
  return <ReadingClient config={config} chapters={chapters} />
}
