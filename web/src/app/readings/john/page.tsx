import ReadingClient from '@/components/ReadingClient';

const johnConfig = {
  bookId: 'john',
  bookZh: '约翰福音',
  bookEn: 'John',
  bibleId: 'JHN',
  totalChapters: 21,
  unitZh: '章',
  emoji: '🕊️',
  authorZh: '约翰',
  authorEn: 'John',
  introZh: '约翰福音是使徒约翰所写的第四卷福音书，以神学深度和独特视角著称。约翰自称为"主所爱的门徒"，在耶稣的胸膛前倚靠过，亲眼见证了道成肉身的荣耀。这卷书以"太初有道"开篇，以复活后的使命结束，邀请每一位读者认识那位"道路、真理、生命"的基督。',
  introEn: 'The Gospel of John, written by the Apostle John, is the fourth Gospel, renowned for its theological depth and unique perspective. John called himself "the disciple whom Jesus loved," the one who reclined against Jesus\x27 chest, witnessing firsthand the glory of the Word made flesh. This book opens with "In the beginning was the Word" and closes with the risen Lord\x27s commission, inviting every reader to know Christ who is "the way, the truth, and the life."',
  isTopicBased: false,
};

export default function JohnReadingsPage() {
  return <ReadingClient config={johnConfig} />;
}

export function generateStaticParams() {
  return [];
}

export const metadata = {
  title: '约翰福音伴读 | Gospel of John Companion Reading',
  description: '跟随使徒约翰，认识道成肉身的基督 | Follow Apostle John to know the incarnate Christ',
};
