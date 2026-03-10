import { Suspense } from 'react';
import { readings } from '@/data/readings';
import ReadingClient, { type BookConfig } from '@/components/ReadingClient';
import type { Metadata } from 'next';

const leviticusConfig: BookConfig = {
  bookId: 'leviticus',
  guideHref: '/old-testament/pentateuch/leviticus',
  bookZh: '利未记',
  bookEn: 'Leviticus',
  bibleId: 'LEV',
  totalChapters: 27,
  unitZh: '章',
  emoji: '🕊️',
  authorZh: '摩西',
  authorEn: 'Moses',
  introZh: '利未记是摩西五经的第三卷，记载了耶和华在西奈山会幕中向摩西所晓谕的律法——献祭条例、洁净条例、赎罪日的设立和圣洁法典。这卷书的核心信息是："你们要圣洁，因为我耶和华你们的神是圣洁的。"利未记教导我们：圣洁的神不能容忍罪，但祂设立了献祭制度为罪人开了一条亲近祂的路。每一个祭物都指向那位终极的祭物——耶稣基督，祂一次献上自己，就成就了永远的赎罪。',
  introEn: 'Leviticus is the third book of the Pentateuch, recording the laws the LORD spoke to Moses from the tabernacle at Sinai—sacrificial regulations, cleanliness laws, the Day of Atonement, and the Holiness Code. The book\'s central message is: "You shall be holy, for I the LORD your God am holy." Leviticus teaches us that a holy God cannot tolerate sin, yet He established the sacrificial system to open a way for sinners to approach Him. Every offering points to the ultimate sacrifice—Jesus Christ, who offered Himself once for all and accomplished eternal atonement.',
  isTopicBased: false,
};

export default function LeviticusReadingsPage() {
  const chapters = readings.filter(r => r.book === "利未记");
  return (
    <Suspense fallback={<div className="max-w-3xl mx-auto px-4 py-8 text-center">加载中...</div>}>
      <ReadingClient config={leviticusConfig} chapters={chapters} />
    </Suspense>
  );
}


export const metadata = {
  title: '利未记伴读 | Leviticus Companion Reading',
  description: '跟随摩西，认识圣洁之神与献祭之路 | Follow Moses, know the Holy God and the way of sacrifice',
};
