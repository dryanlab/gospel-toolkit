import ReadingClient from '@/components/ReadingClient';

const romansConfig = {
  bookId: 'romans',
  bookZh: '罗马书',
  bookEn: 'Romans',
  bibleId: 'ROM',
  totalChapters: 16,
  unitZh: '章',
  emoji: '📜',
  authorZh: '保罗',
  authorEn: 'Paul',
  introZh: '罗马书是使徒保罗写给罗马教会的书信，被称为"基督教神学的宪章"。从人类普遍的罪到因信称义的恩典，从成圣的挣扎到在基督里得胜的确据，从以色列的命运到基督徒生活的实践——保罗以严密的逻辑和燃烧的热情，将福音的全貌展现在我们面前。这卷书改变了奥古斯丁、路德、加尔文，也必将改变每一位认真阅读它的人。',
  introEn: 'The Epistle to the Romans, written by the Apostle Paul to the church in Rome, has been called "the charter of Christian theology." From the universality of human sin to justification by faith, from the struggle of sanctification to the assurance of victory in Christ, from Israel\'s destiny to the practice of Christian living — Paul presents the full picture of the Gospel with rigorous logic and burning passion. This book transformed Augustine, Luther, and Calvin, and it will transform every soul who reads it earnestly.',
  isTopicBased: false,
};

export default function RomansReadingsPage() {
  return <ReadingClient config={romansConfig} />;
}

export function generateStaticParams() {
  return [];
}

export const metadata = {
  title: '罗马书伴读 | Romans Companion Reading',
  description: '跟随使徒保罗，认识因信称义的福音 | Follow Apostle Paul to understand the Gospel of justification by faith',
};
