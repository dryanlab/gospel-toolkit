import { Suspense } from 'react';
import { readings } from '@/data/readings';
import ReadingClient, { type BookConfig } from '@/components/ReadingClient';
import type { Metadata } from 'next';

const exodusConfig: BookConfig = {
  bookId: 'exodus',
  bookZh: '出埃及记',
  bookEn: 'Exodus',
  bibleId: 'EXO',
  totalChapters: 40,
  unitZh: '章',
  emoji: '🔥',
  authorZh: '摩西',
  authorEn: 'Moses',
  introZh: '出埃及记是摩西五经的第二卷，记载了以色列民从埃及为奴之家蒙神大能的手拯救、在西奈山与神立约、建造会幕的壮阔历史。这卷书的主题是救赎——神听见祂百姓的哀声，记念与亚伯拉罕所立的约，差遣摩西领他们出来，用逾越节羔羊的血拯救他们脱离死亡。出埃及的故事不仅是以色列的历史，更是每一位信徒灵魂经历的预表：我们都曾在罪的捆绑中为奴，都需要那真正的逾越节羔羊——耶稣基督——用祂的宝血将我们赎出来。',
  introEn: 'Exodus is the second book of the Pentateuch, recording the magnificent history of Israel\'s deliverance from slavery in Egypt by God\'s mighty hand, the covenant at Sinai, and the building of the tabernacle. The book\'s theme is redemption—God heard His people\'s cry, remembered His covenant with Abraham, sent Moses to lead them out, and saved them from death through the Passover lamb\'s blood. The Exodus story is not merely Israel\'s history but a type of every believer\'s spiritual experience: we were all enslaved in sin\'s bondage, and we all need the true Passover Lamb—Jesus Christ—to redeem us with His precious blood.',
  isTopicBased: false,
};

export default function ExodusReadingsPage() {
  const chapters = readings.filter(r => r.book === "出埃及记");
  return (
    <Suspense fallback={<div className="max-w-3xl mx-auto px-4 py-8 text-center">加载中...</div>}>
      <ReadingClient config={exodusConfig} chapters={chapters} />
    </Suspense>
  );
}


export const metadata = {
  title: '出埃及记伴读 | Exodus Companion Reading',
  description: '跟随摩西，见证神大能的救赎 | Follow Moses, witness God\'s mighty redemption',
};
