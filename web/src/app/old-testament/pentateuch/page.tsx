import BookList from '@/components/BookList';
import type { BibleBook } from '@/components/BookList';

export const metadata = {
  title: '摩西五经 - 旧约导读 - 真理磐石',
  description: '摩西五经导读：创世记、出埃及记、利未记、民数记、申命记。',
};

const books: BibleBook[] = [
  {
    id: 'genesis',
    name_zh: '创世记',
    name_en: 'Genesis',
    guideHref: '/old-testament/pentateuch/genesis',
    author_zh: '摩西',
    author_en: 'Moses',
    date: '约公元前1446-1406年',
    date_en: 'c. 1446–1406 BC',
    theme_zh: '万物的起源与神的拣选',
    theme_en: 'The Origin of All Things and God\'s Election',
    summary_zh: '创世记记载了天地万物的创造、人类的堕落、洪水的审判，以及神拣选亚伯拉罕及其后裔，开始了救赎的历史。全书奠定了圣经神学的根基。',
    summary_en: 'Genesis records the creation of all things, the fall of humanity, the judgment of the flood, and God\'s election of Abraham and his descendants, beginning the history of redemption. It lays the foundation of all biblical theology.',
    keyVerse_zh: '起初，神创造天地。',
    keyVerse_en: 'In the beginning, God created the heavens and the earth.',
    keyRef: '创世记 1:1 / Genesis 1:1',
  },
  {
    id: 'exodus',
    guideHref: '/old-testament/pentateuch/exodus',
    name_zh: '出埃及记',
    name_en: 'Exodus',
    author_zh: '摩西',
    author_en: 'Moses',
    date: '约公元前1446-1406年',
    date_en: 'c. 1446–1406 BC',
    theme_zh: '救赎与立约——神拯救祂的百姓',
    theme_en: 'Redemption and Covenant — God Delivers His People',
    summary_zh: '出埃及记记载以色列人从埃及为奴之地被拯救出来，神在西奈山与百姓立约，并指示建造会幕。逾越节的羔羊预表基督的救赎。',
    summary_en: 'Exodus records Israel\'s deliverance from slavery in Egypt, God\'s covenant with His people at Sinai, and instructions for the tabernacle. The Passover lamb foreshadows the redemption in Christ.',
    keyVerse_zh: '我是耶和华你的神，曾将你从埃及地为奴之家领出来。',
    keyVerse_en: 'I am the LORD your God, who brought you out of the land of Egypt, out of the house of slavery.',
    keyRef: '出埃及记 20:2 / Exodus 20:2',
  },
  {
    id: 'leviticus',
    guideHref: '/old-testament/pentateuch/leviticus',
    name_zh: '利未记',
    name_en: 'Leviticus',
    author_zh: '摩西',
    author_en: 'Moses',
    date: '约公元前1446-1406年',
    date_en: 'c. 1446–1406 BC',
    theme_zh: '圣洁——你们要圣洁，因为我是圣洁的',
    theme_en: 'Holiness — Be Holy, for I Am Holy',
    summary_zh: '利未记详细规定了献祭制度、洁净条例和节期，教导以色列人如何以圣洁的生活来亲近圣洁的神。一切祭祀都指向基督一次永远的献祭。',
    summary_en: 'Leviticus details the sacrificial system, purity laws, and festivals, teaching Israel how to approach a holy God through holy living. All sacrifices point to Christ\'s once-for-all offering.',
    keyVerse_zh: '你们要圣洁，因为我耶和华你们的神是圣洁的。',
    keyVerse_en: 'You shall be holy, for I the LORD your God am holy.',
    keyRef: '利未记 19:2 / Leviticus 19:2',
  },
  {
    id: 'numbers',
    guideHref: '/old-testament/pentateuch/numbers',
    name_zh: '民数记',
    name_en: 'Numbers',
    author_zh: '摩西',
    author_en: 'Moses',
    date: '约公元前1446-1406年',
    date_en: 'c. 1446–1406 BC',
    theme_zh: '旷野中的信心与不信',
    theme_en: 'Faith and Unbelief in the Wilderness',
    summary_zh: '民数记记载以色列人在旷野漂流四十年的历史，百姓反复悖逆与神信实的带领形成鲜明对比。旷野的经历警戒我们不可硬着心不信。',
    summary_en: 'Numbers records Israel\'s forty years of wilderness wandering, contrasting the people\'s repeated rebellion with God\'s faithful guidance. The wilderness experience warns us not to harden our hearts in unbelief.',
    keyVerse_zh: '耶和华不轻易发怒，并有丰盛的慈爱，赦免罪孽和过犯。',
    keyVerse_en: 'The LORD is slow to anger and abounding in steadfast love, forgiving iniquity and transgression.',
    keyRef: '民数记 14:18 / Numbers 14:18',
  },
  {
    id: 'deuteronomy',
    guideHref: '/old-testament/pentateuch/deuteronomy',
    name_zh: '申命记',
    name_en: 'Deuteronomy',
    author_zh: '摩西',
    author_en: 'Moses',
    date: '约公元前1406年',
    date_en: 'c. 1406 BC',
    theme_zh: '重申盟约——爱神、守约、蒙福',
    theme_en: 'Covenant Renewal — Love God, Keep Covenant, Be Blessed',
    summary_zh: '申命记是摩西在约旦河东对新一代以色列人重申律法与盟约的讲章，核心是全心全意爱神。这卷书也是耶稣在旷野受试探时三次引用的经卷。',
    summary_en: 'Deuteronomy is Moses\' farewell address to the new generation, renewing the law and covenant east of the Jordan. Its core is wholehearted love for God. Jesus quoted this book three times when tempted in the wilderness.',
    keyVerse_zh: '以色列啊，你要听！耶和华我们神是独一的主。你要尽心、尽性、尽力爱耶和华你的神。',
    keyVerse_en: 'Hear, O Israel: The LORD our God, the LORD is one. You shall love the LORD your God with all your heart and with all your soul and with all your might.',
    keyRef: '申命记 6:4-5 / Deuteronomy 6:4–5',
  },
];

export default function PentateuchPage() {
  return (
    <BookList
      icon="📜"
      title_zh="摩西五经"
      title_en="The Pentateuch"
      desc_zh="摩西五经是圣经的开篇，记载了神创造万物、人类堕落、洪水审判、列祖蒙召、出埃及、立约赐律法的历史，奠定了整本圣经的神学根基。"
      desc_en="The Pentateuch opens the Bible, recording creation, the fall, the flood, the calling of the patriarchs, the Exodus, and the giving of the Law — laying the theological foundation for all of Scripture."
      gradient="from-amber-600 to-yellow-800"
      books={books}
      backHref="/old-testament"
      backLabel="返回旧约导读 Back to Old Testament"
    />
  );
}
