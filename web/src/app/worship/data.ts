export interface Song {
  id: string;
  title: string;
  subtitle?: string;
  artist: string;
  youtubeId: string;
  category: Category;
}

export type Category = '赞美诗歌' | '敬拜诗歌' | '福音诗歌' | '经典圣诗';

export const categories: { key: Category; label: string; labelEn: string }[] = [
  { key: '赞美诗歌', label: '赞美诗歌', labelEn: 'Praise' },
  { key: '敬拜诗歌', label: '敬拜诗歌', labelEn: 'Worship' },
  { key: '福音诗歌', label: '福音诗歌', labelEn: 'Gospel Songs' },
  { key: '经典圣诗', label: '经典圣诗', labelEn: 'Classic Hymns' },
];

export const songs: Song[] = [
  // ============================================
  // 赞美诗歌 (Praise) — upbeat praise, celebration songs
  // ============================================
  { id: 'zhe-yi-sheng-1', title: '這一生最美的祝福', artist: 'HALLELUYA MEDIA', youtubeId: 'RTSTh4_mKnA', category: '赞美诗歌' },
  { id: 'zhe-yi-sheng-2', title: '這一生最美的祝福', subtitle: 'The Gift of Knowing You', artist: '讚美之泉 Stream Of Praise Music Ministries', youtubeId: 'tPf7Ig1ebL4', category: '赞美诗歌' },
  { id: 'ru-ying-zhan-chi', title: '如鹰展翅上腾', subtitle: 'Soar on Wings Like an Eagle', artist: 'zfljsophia', youtubeId: 'mFbmgTlIYG8', category: '赞美诗歌' },
  { id: 'en-dian-zhi-lu', title: '恩典之路', subtitle: 'The Path of Grace', artist: '讚美之泉 Stream Of Praise Music Ministries', youtubeId: 'YaJ5gof0YNQ', category: '赞美诗歌' },
  { id: 'medley-praise-1', title: '感謝天父/謝謝祢/自由地歌唱/恩典之路/新耶路撒冷', artist: '讚美之泉 Stream Of Praise Music Ministries', youtubeId: 'teqg6ZIkuwk', category: '赞美诗歌' },
  { id: 'medley-praise-2', title: '將天敞開/行神蹟的神/一生敬拜祢/這是聖潔之地', artist: '讚美之泉 Stream Of Praise Music Ministries', youtubeId: 'kxGQ7LV4DKQ', category: '赞美诗歌' },
  { id: 'ni-shi-pei-de', title: '祢是配得 You Are Worthy', subtitle: 'You Are Worthy', artist: '讚美之泉 Stream of Praise - Topic', youtubeId: 'xdoIC_M8EmY', category: '赞美诗歌' },
  { id: 'jiao-wo-tai-qi-tou', title: '叫我抬起頭的神 The Lifter of My Head', artist: '讚美之泉 Stream Of Praise Music Ministries', youtubeId: 'ouG12IsjTNU', category: '赞美诗歌' },
  { id: 'shi-jia-de-ai', title: '十架的愛 Great Is Your Love', subtitle: 'Great Is Your Love', artist: '讚美之泉 Stream of Praise - Topic', youtubeId: 'npXSsd_TO4A', category: '赞美诗歌' },
  { id: 'xiang-zhu-huan-hu', title: '向主欢呼 向主歡呼', subtitle: 'Shout to the Lord', artist: 'Praise Pinyin', youtubeId: 'ln2grj_HKis', category: '赞美诗歌' },
  { id: 'huo-zhe-wei-yao', title: '活著為要敬拜祢', subtitle: 'I Live To Worship You', artist: '讚美之泉 Stream of Praise - Topic', youtubeId: '7PBF9DzHVQU', category: '赞美诗歌' },
  { id: 'zhu-ni-shi-wo-li-liang', title: '主祢是我力量', subtitle: 'You Are My Strength', artist: '讚美之泉 Stream of Praise - Topic', youtubeId: 'OvsUvEI029E', category: '赞美诗歌' },
  { id: 'ri-ri-ye-ye', title: '日日夜夜 Day And Night', subtitle: 'Day And Night', artist: '讚美之泉 Stream of Praise - Topic', youtubeId: '1Xhf1fJDNmk', category: '赞美诗歌' },
  { id: 'wo-yao-xiang-gaoshan', title: '我要向高山舉目', subtitle: 'Lift My Eyes to the Hills', artist: '讚美之泉 Stream Of Praise Music Ministries', youtubeId: 'bhS0D7Gd-Ek', category: '赞美诗歌' },
  { id: 'ni-zuo-zhe-wei-wang', title: '你坐著為王', artist: '約書亞樂團', youtubeId: 'nuK3oi7-YoM', category: '赞美诗歌' },
  { id: 'ye-su-ni-yi-de-sheng', title: '耶穌祢已得勝', artist: '天韻合唱團 Heavenly Melody', youtubeId: 'cwURDf2TJj4', category: '赞美诗歌' },
  { id: 'fu-xing-wo', title: '《復興我》Redeem me', subtitle: 'Redeem Me', artist: '基恩敬拜 Amazing Grace Worship', youtubeId: 'R5lI1X1kyQE', category: '赞美诗歌' },
  { id: 'zhan-kai-shu-tian', title: '展開屬天的翅膀-以斯拉', artist: 'joehuang90', youtubeId: '6gP6-g_BbWA', category: '赞美诗歌' },
  { id: 'chang-yi-shou-tian-shang', title: '唱一首天上的歌', artist: 'Andrew Vlogs', youtubeId: 'ZSOYluQXi5o', category: '赞美诗歌' },
  { id: 'yi-shou-zan-mei', title: '一首讚美的詩歌', artist: '讚美之泉', youtubeId: 'b2ikeCRKTwQ', category: '赞美诗歌' },
  { id: 'you-yi-wei-shen', title: '有一位神 There Is A God', subtitle: 'There Is A God', artist: '讚美之泉 Stream Of Praise Music Ministries', youtubeId: 'b3oivk4W7EY', category: '赞美诗歌' },
  { id: 'ye-he-hua-ni-shi-wo-de-shen', title: '耶和華祢是我的神', subtitle: 'Jehovah You Are My God', artist: '讚美之泉 Stream Of Praise Music Ministries', youtubeId: 'y3QzV2WE-qw', category: '赞美诗歌' },
  { id: 'zan-mei-zhi-quan', title: '讚美之泉 Stream of Praise', subtitle: 'Stream of Praise', artist: '讚美之泉 Stream Of Praise Music Ministries', youtubeId: 'x-DysGdCg4k', category: '赞美诗歌' },
  { id: 'ye-he-hua-ni-zhen-wei-da', title: '耶和華祢真偉大', subtitle: 'Jehovah How Great You Are', artist: '泥土音樂Clay Music', youtubeId: 'vw1g-32Po6I', category: '赞美诗歌' },
  { id: 'man-you-neng-li', title: '滿有能力', subtitle: 'I Am Strengthened in Him', artist: '讚美之泉 Stream Of Praise Music Ministries', youtubeId: 'uTGPl8f-reQ', category: '赞美诗歌' },
  { id: 'fu-xing-sheng-jie', title: '復興聖潔 Revive Holiness', subtitle: 'Revive Holiness', artist: '讚美之泉 Stream Of Praise Music Ministries', youtubeId: 'K3ibf2AjR3U', category: '赞美诗歌' },
  { id: 'ben-pao-bu-fang-qi', title: '【奔跑不放棄 Won\'t Give Up】官方歌詞版MV', subtitle: "Won't Give Up", artist: '讚美之泉 Stream Of Praise Music Ministries', youtubeId: '3tNKXsR-H_E', category: '赞美诗歌' },
  { id: 'quan-ran-xiang-ni', title: '全然向祢 All For You', subtitle: 'All For You', artist: '讚美之泉 Stream Of Praise Music Ministries', youtubeId: 'fE0pVMc5kQQ', category: '赞美诗歌' },
  { id: 'huo-chu-ai', title: '活出愛/泥娃娃', artist: '泥土音樂Clay Music', youtubeId: 'ZRcKyGg2Lpg', category: '赞美诗歌' },
  { id: 'shen-bu-jian-di-de-ai', title: '深不見底的愛 Endless Love', subtitle: 'Endless Love', artist: '讚美之泉 Stream Of Praise Music Ministries', youtubeId: 'H4MeSR_ilyY', category: '赞美诗歌' },
  { id: 'ruan-ruo-de-wo', title: '軟弱的我 變剛強', artist: '777Worship', youtubeId: 'faexCo8lTqk', category: '赞美诗歌' },
  { id: 'yan-guang', title: '【眼光】天韻合唱團 Official MV', artist: '天韻合唱團 Heavenly Melody', youtubeId: 'SPGvl3ZwlxE', category: '赞美诗歌' },

  // ============================================
  // 敬拜诗歌 (Worship) — slower devotional, intimate worship
  // ============================================
  { id: 'zhi-yuan-de-zhao-ni', title: '只願得著你', subtitle: 'Only You I Desire', artist: 'Alex Liu', youtubeId: 'rFcfmsTa3pI', category: '敬拜诗歌' },
  { id: 'medley-worship-1', title: '寶貴十架  我知誰掌管明天 住在你裡面 煉淨我', artist: '蘇江村Martin', youtubeId: 'q5lFordsl9Y', category: '敬拜诗歌' },
  { id: 'yuan-ni-de-hua', title: '願你的話／在你同在裡   mp4', artist: '愛敬拜', youtubeId: 'KLayUbTJLAw', category: '敬拜诗歌' },
  { id: 'bao-gui-shi-jia', title: '寶貴十架 Precious Cross', subtitle: 'Precious Cross', artist: '讚美之泉 Stream of Praise - Topic', youtubeId: 'T7SrzqlV9NY', category: '敬拜诗歌' },
  { id: 'he-deng-en-dian', title: '何等恩典 How Could It Be', subtitle: 'How Could It Be', artist: '讚美之泉 Stream of Praise - Topic', youtubeId: 'i4gBjSJGkOA', category: '敬拜诗歌' },
  { id: 'neng-bu-neng', title: '能不能 Let Me Stay', subtitle: 'Let Me Stay', artist: '讚美之泉 Stream of Praise - Topic', youtubeId: 'AA-KeICAUGA', category: '敬拜诗歌' },
  { id: 'wo-de-sheng-ming', title: '我的生命獻給祢', subtitle: 'I Will Offer You My Life', artist: '讚美之泉 Stream of Praise - Topic', youtubeId: 'RSDdykHp-Wc', category: '敬拜诗歌' },
  { id: 'wo-de-shen-wo-jing-bai', title: '我的神我敬拜祢', subtitle: 'My Lord I Worship You', artist: 'Praise Pinyin', youtubeId: 'kdPRftyhEVc', category: '敬拜诗歌' },
  { id: 'qing-qing-ting', title: '輕輕聽', artist: '讚美之泉', youtubeId: 'aXIMuC0Y08U', category: '敬拜诗歌' },
  { id: 'zhen-guang', title: '真光', artist: '讚美之泉', youtubeId: 'l4Dx0hxxAHs', category: '敬拜诗歌' },
  { id: 'quan-ran-wei-ni-1', title: '全然為祢 All For You, Lord', subtitle: 'All For You Lord', artist: 'Scarlett Wang', youtubeId: 'xSAN85jWzOQ', category: '敬拜诗歌' },
  { id: 'quan-ran-wei-ni-2', title: '全然為你', artist: '生命河', youtubeId: 'FcEwLmR78jQ', category: '敬拜诗歌' },
  { id: 'ni-de-ai-bu-li-bu-qi', title: '你的愛不離不棄', artist: '生命河', youtubeId: 'LfDwY3xU94E', category: '敬拜诗歌' },
  { id: 'yu-jian-ni', title: '遇見你 Here In Your Presence', subtitle: 'Here In Your Presence', artist: '生命河 ROLCCmedia', youtubeId: 'XdXopI_eld4', category: '敬拜诗歌' },
  { id: 'wo-an-ran-ju-zhu', title: '我安然居住 / Dwelling In Peace', subtitle: 'Dwelling In Peace', artist: 'Joshua Band 約書亞樂團', youtubeId: 'kNOuWvdPgiA', category: '敬拜诗歌' },
  { id: 'xiang-qi-ni', title: '想起祢/ When I Think of You,', subtitle: 'When I Think of You', artist: '泥土音樂Clay Music', youtubeId: 'AE7RhcMjgWA', category: '敬拜诗歌' },
  { id: 'wo-xiang-ni-dao-gao', title: '我向祢禱告', artist: 'Son Music 新音樂敬拜創作', youtubeId: '-IVXs-rBonc', category: '敬拜诗歌' },
  { id: 'ni-shi-wo-de-yi-qie', title: '祢是我的一切', subtitle: 'You Are My All In All', artist: 'Praise Pinyin', youtubeId: 'Qc6vnPPM-JE', category: '敬拜诗歌' },
  { id: 'qing-jian-gu-wo', title: '請堅固我', subtitle: 'Lord Please Strengthen Me', artist: '基恩敬拜 Amazing Grace Worship', youtubeId: 's0h93HvF3aY', category: '敬拜诗歌' },
  { id: 'ci-wo-li-liang', title: '《賜我力量》Give me strength', subtitle: 'Give Me Strength', artist: '基恩敬拜 Amazing Grace Worship', youtubeId: '-1hotIathug', category: '敬拜诗歌' },
  { id: 'you-ni-tong-xing', title: '《有祢同行》With You by my side', subtitle: 'With You By My Side', artist: '基恩敬拜 Amazing Grace Worship', youtubeId: '2KM6F_vQSD0', category: '敬拜诗歌' },
  { id: 'ai-zai-ruan-ruo-zhong', title: '愛在軟弱中盛放_以愛還愛', artist: 'Jennifer Poon', youtubeId: '7zxCBrAH1bE', category: '敬拜诗歌' },
  { id: 'wo-de-ling-zan-mei-ni', title: '我的灵赞美祢 我的靈讚美袮', subtitle: '10000 Reasons', artist: 'Praise Pinyin', youtubeId: 'X53Yz6nJjSk', category: '敬拜诗歌' },
  { id: '10000-reasons-en', title: '10,000 Reasons (Bless the Lord)', subtitle: '一萬個理由', artist: 'Matt Redman', youtubeId: 'XtwIT8JjddM', category: '敬拜诗歌' },
  { id: 'pei-wo-zou-guo', title: '陪我走過春夏秋冬', artist: '小羊詩歌 - Topic', youtubeId: 'WoXD_VzfKAk', category: '敬拜诗歌' },
  { id: 'yi-sheng-yi-shi', title: '一生一世', artist: 'Grace Huang', youtubeId: 'dJ3vwSLf940', category: '敬拜诗歌' },
  { id: 'kong-gu-de-hui-yin', title: '《空谷的回音》 赞美诗、雅歌 Grace Music', artist: '神国赞美诗God\'s love', youtubeId: '6QkIgITa33U', category: '敬拜诗歌' },
  { id: 'wo-zai-zhe-li-jing-bai', title: '我在這裡敬拜', subtitle: 'Here I Am to Worship', artist: 'JakeSD19', youtubeId: '8wo_DqKGmwM', category: '敬拜诗歌' },
  { id: 'ai-ni-dao-di', title: '愛祢到底', subtitle: 'Love You til The End', artist: '泥土音樂Clay Music', youtubeId: 'vR8q7WUGjHQ', category: '敬拜诗歌' },
  { id: 'wo-de-yi-sheng-zai-ni-shou-zhong', title: '我的一生在你手中', artist: '讚美之泉', youtubeId: 'W9bhn7NrXdQ', category: '敬拜诗歌' },
  { id: 'yi-zhi-yao-you-ni', title: '只要有祢在我左右', subtitle: 'If My God Is With Me', artist: '讚美之泉 Stream of Praise - Topic', youtubeId: 'ULWAelqzXgo', category: '敬拜诗歌' },
  { id: 'qian-wo-de-shou', title: '牽我的手', artist: '讚美之泉', youtubeId: 'u8JMcFjT1tY', category: '敬拜诗歌' },
  { id: 'wei-he-dui-wo-zhe-me-hao', title: '為何對我這麼好', artist: '讚美之泉', youtubeId: 'dYghBJb9rDM', category: '敬拜诗歌' },
  { id: 'zhu-dao-wen', title: '主禱文 The Lord\'s Prayer', subtitle: "The Lord's Prayer", artist: 'HALLELUYA MEDIA', youtubeId: 'WSzdU3hZw2c', category: '敬拜诗歌' },
  { id: 'yi-gan-en-wei-ji', title: '『以感恩為祭 』 團契遊樂園5 應許', artist: 'm2kmusic', youtubeId: 'ozRtnVOvYvM', category: '敬拜诗歌' },
  { id: 'yi-zhi-de-ai', title: '醫治的愛', subtitle: 'Healing Love', artist: '泥土音樂Clay Music', youtubeId: 'zdGb_4lziwc', category: '敬拜诗歌' },
  { id: 'en-dian-gou-yong', title: '恩典夠用 Sufficient Grace', subtitle: 'Sufficient Grace', artist: '泥土音樂Clay Music', youtubeId: 'p2feIz0Rprg', category: '敬拜诗歌' },
  { id: 'yuan-wo-de-pan-shi', title: '願我的磐石被人稱頌', subtitle: 'Praise the Lord My Rock', artist: '生命河 ROLCCmedia', youtubeId: 'Eja65j7SOUo', category: '敬拜诗歌' },
  { id: 'wu-jia-zhi-bao', title: '無價至寶 Priceless [約書亞大衛帳幕的榮耀專輯', subtitle: 'Priceless', artist: 'beLoved144', youtubeId: 'ymKB9XqkQuE', category: '敬拜诗歌' },
  { id: 'an-jing', title: '安靜 Be Still', subtitle: 'Be Still', artist: '讚美之泉 Stream Of Praise Music Ministries', youtubeId: 'Za9UdGa-P6g', category: '敬拜诗歌' },

  // ============================================
  // 福音诗歌 (Gospel Songs) — evangelistic, testimony, faith journey
  // ============================================
  { id: 'wo-men-cheng-wei-yi-jia-ren', title: '我們成為一家人', artist: '橄欖枝', youtubeId: 'B_EkHGfZeKc', category: '福音诗歌' },
  { id: 'ye-he-hua-de-xin', title: '耶和华的心', artist: 'vw worship', youtubeId: 'dkPgc6rAMBU', category: '福音诗歌' },
  { id: 'fan-shi-du-you', title: '凡事都有神的美意', artist: '讚美之泉', youtubeId: 'e9KiGgpdM9M', category: '福音诗歌' },
  { id: 'jin-sheng-gen-sui', title: '今生跟随主耶稣', artist: '讚美之泉', youtubeId: 'BhLeSQeg_is', category: '福音诗歌' },
  { id: 'gan-xie-yi-sheng', title: '感謝一生有祢', subtitle: 'Thank You For Being In My Life', artist: '基恩敬拜 Amazing Grace Worship - Topic', youtubeId: 'g05K8bV7I2Y', category: '福音诗歌' },
  { id: 'yu-hou-de-tian-kong', title: '雨後的天空 After the rain', subtitle: 'After the Rain', artist: '泥土音樂Clay Music', youtubeId: 'ksANigSjZ-4', category: '福音诗歌' },
  { id: 'jiao-bu', title: '腳步 Footsteps', subtitle: 'Footsteps', artist: '泥土音樂Clay Music', youtubeId: 'Iz9Gr1ATrDo', category: '福音诗歌' },
  { id: 'zui-zhi-xin-de-peng-you', title: '最知心的朋友', subtitle: 'My Dearest Friend', artist: '立約敬拜 Promise Worship', youtubeId: 'hpXn8646wA8', category: '福音诗歌' },
  { id: 'en-dian-de-ji-hao', title: '恩典的記號~ 盛曉玫 06- 幸福.wmv', artist: 'Aries822', youtubeId: '5TlA9Ylalj4', category: '福音诗歌' },
  { id: 'you-yi-tian', title: '有一天', artist: '泥土音樂', youtubeId: 'Pbkdfl43Oxc', category: '福音诗歌' },
  { id: 'en-dian-tai-mei-li', title: '恩典太美麗', artist: '讚美之泉', youtubeId: 'oQcAo3vRIvU', category: '福音诗歌' },
  { id: 'yi-ran-ai-wo', title: '依然愛我 You still love me', subtitle: 'You Still Love Me', artist: '泥土音樂Clay Music', youtubeId: 'uSHI-9s4dTU', category: '福音诗歌' },
  { id: 'xing-fu', title: '幸福/ Blessed,', subtitle: 'Blessed', artist: '泥土音樂Clay Music', youtubeId: 'Q3m-in8i6FU', category: '福音诗歌' },
  { id: 'shi-jia-xi-sheng-de-ai', title: '十架犧牲的愛', artist: '讚美之泉', youtubeId: 'Sh4wV3nsNPs', category: '福音诗歌' },
  { id: 'jia-lue-shan-de-ai', title: '加略山的爱 詞曲 陳昌良', artist: '立約敬拜 Promise Worship', youtubeId: 'IXeq6tpn5SU', category: '福音诗歌' },
  { id: 'yin-zhe-xin', title: '角聲使團 The Heralders《因著信》', artist: '角聲使團 The Heralders', youtubeId: 'qNndl7K3z3k', category: '福音诗歌' },
  { id: 'shei-ceng-ying-xu', title: '『誰曾應許 』 團契遊樂園5 應許', artist: 'm2kmusic', youtubeId: 'McixlPUGPzI', category: '福音诗歌' },
  { id: 'shi-zi-jia-chuan-da-zhe', title: '十字架的傳達者 以斯拉', artist: 'Christina Kumu Sava Lee', youtubeId: 'mpugTxcAXn0', category: '福音诗歌' },
  { id: 'ye-su-wo-gan-xie-ni', title: '耶穌我感謝你', artist: 'WN X 玻璃海樂團 X PHOTIC', youtubeId: '123L18Fq8S8', category: '福音诗歌' },
  { id: 'zhen-ai', title: '真爱 Kelvin Soh with lyrics', artist: 'Tommy Tang', youtubeId: 'oDCNQjGbJzA', category: '福音诗歌' },
  { id: 'wo-de-shi-jie-bu-ji-mo', title: '我的世界不寂寞', subtitle: 'I Am Not Alone', artist: '泥土音樂Clay Music', youtubeId: 'QLbI_hf7sn4', category: '福音诗歌' },
  { id: 'ruo-shi-you-ni', title: '若是有你在我生命中', artist: 'jossong', youtubeId: 'L74nyq-_lHk', category: '福音诗歌' },
  { id: 'ci-ai-de-shang-di', title: '慈爱的上帝 & 信主的人真有福', artist: '福音詩歌', youtubeId: 'IbrNypkMxeQ', category: '福音诗歌' },
  { id: 'shen-de-dao-lu', title: '神的道路', artist: '天韻合唱團 Heavenly Melody', youtubeId: 'xb8O_XoTlHw', category: '福音诗歌' },
  { id: 'you-raise-me-up', title: 'You Raise Me Up 你鼓舞了我', subtitle: 'You Raise Me Up', artist: '榮耀之聲', youtubeId: 'JzW4m1iMsaQ', category: '福音诗歌' },
  { id: 'ai-de-zhen-di', title: '爱的真谛 The Essence of Love', subtitle: 'The Essence of Love', artist: 'B. W.', youtubeId: 'I5ARkI-R560', category: '福音诗歌' },

  // ============================================
  // 经典圣诗 (Classic Hymns) — classic/traditional hymns, compilations
  // ============================================
  { id: 'ji-du-jiao-ge-qu', title: '基督教歌曲', artist: '好聽精選歌', youtubeId: 'UPUG4trs1e4', category: '经典圣诗' },
  { id: 'o-holy-night', title: '無伴奏合唱 Acapella', subtitle: 'O Holy Night', artist: '讚美之泉 Stream Of Praise Music Ministries', youtubeId: 'WiQbzG7Tew8', category: '经典圣诗' },
  { id: 'wo-zhi-shei-zhang-guan', title: '《我知誰掌管明天》史茵茵版', artist: '石偉晨', youtubeId: 'nmd0bLtRqu8', category: '经典圣诗' },
  { id: 'qi-yi-en-dian-1', title: '奇异恩典 奇異恩典 Amazing Grace', subtitle: 'Amazing Grace', artist: 'Praise Pinyin', youtubeId: 'eJgRuy6FeMA', category: '经典圣诗' },
  { id: 'xian-shang-gan-en', title: '献上感恩的心 獻上感恩的心 Give Thanks', subtitle: 'Give Thanks', artist: 'Praise Pinyin', youtubeId: 'hrRKEk2FEDc', category: '经典圣诗' },
  { id: 'zai-ji-du-li', title: '在基督里 在基督裡 In Christ Alone', subtitle: 'In Christ Alone', artist: 'Praise Pinyin', youtubeId: 'yod-VoVC0-U', category: '经典圣诗' },
  { id: 'ye-he-hua-shi-ai', title: '耶和华是爱  Lord is Love', subtitle: 'Lord is Love', artist: 'zfljsophia', youtubeId: 'QrFW_1ijY5M', category: '经典圣诗' },
  { id: 'qi-yi-en-dian-2', title: 'KUA MUSIC【奇異恩典 / Amazing Grace', subtitle: 'Amazing Grace My Chains Are Gone', artist: 'KUA GLOBAL 跨越', youtubeId: 'v6EoqZB58f8', category: '经典圣诗' },
  { id: 'yu-zhu-geng-qin-jin', title: 'Nearer  to Thee 与主更亲近', subtitle: 'Nearer My God to Thee', artist: '生命季刊CCLiFeTV', youtubeId: 'jN4OCL94ITc', category: '经典圣诗' },
  { id: 'sheng-xiao-mei-jing-xuan', title: '盛曉玫詩歌精選 2 陪伴系列 使你重新得力', subtitle: '陪伴系列 45分鐘', artist: '泥土音樂Clay Music', youtubeId: '3nTLcz8E5uw', category: '经典圣诗' },
  { id: 'zan-mei-zhi-quan-he-ji', title: '赞美之泉热门赞美诗合辑', subtitle: '一小时敬拜', artist: '赞美诗集', youtubeId: '6LfGdoZMbaE', category: '经典圣诗' },
  { id: 'zan-mei-zhi-quan-man-ge', title: '詩歌 讚美之泉', subtitle: '2小時', artist: '敬拜音樂 教學', youtubeId: 'HTG59P9I14I', category: '经典圣诗' },
  { id: 'yi-qie-quan-xian-shang', title: '「赞美诗」——《一切全獻上》', subtitle: 'I Surrender All', artist: '小麻雀诗歌', youtubeId: 'eBU66O-NTQU', category: '经典圣诗' },
  { id: 'wo-de-xin-qie-qie-ke-mu-ni', title: '我心切切渴慕祢', artist: '讚美之泉 Stream Of Praise Music Ministries', youtubeId: 'ygElrkZ0X9U', category: '敬拜诗歌' },
  { id: 'amazing-grace-english', title: 'Amazing Grace', subtitle: '英文版', artist: 'Gary Downey', youtubeId: 'CDdvReNKKuk', category: '经典圣诗' },

  // ============================================
  // 新增诗歌 — 覆盖缺失关键词
  // ============================================

  // 信心/信靠/faith/trust
  { id: 'xin-xin-de-lv-cheng', title: '信心的旅途', subtitle: 'Journey of Faith', artist: '天韻合唱團 Heavenly Melody', youtubeId: '7MfpK-fbF5Y', category: '福音诗歌' },
  { id: 'xin-kao-mei-yi-tian', title: '信靠每一句應許', subtitle: 'Trust Day By Day', artist: '讚美之泉 Stream Of Praise Music Ministries', youtubeId: 'hQ6Uz6Uhesw', category: '敬拜诗歌' },
  { id: 'yong-xin-xin-zou', title: '《走在信心之路》福音詩歌2025', subtitle: 'Walk By Faith', artist: '恩典之歌 Songs of Grace', youtubeId: '5LyrF419eFw', category: '福音诗歌' },
  { id: 'xin-xin-de-dao-lu', title: '《信心之路》', subtitle: 'The Road of Faith', artist: '晨光恩典頌讚  Morning Grace Praise ', youtubeId: 'hYfSkObIJxw', category: '福音诗歌' },
  { id: 'wo-xin-kao-ni', title: '我信靠祢 / I Trust In You', subtitle: 'I Trust In You', artist: 'KUA GLOBAL 跨越', youtubeId: 'ZqxUPb3_phs', category: '敬拜诗歌' },

  // 创造/creation
  { id: 'chuang-zao-qi-miao', title: '美好的創造 Beautifully Made', subtitle: 'God of Wondrous Creation', artist: '讚美之泉 Stream Of Praise Music Ministries', youtubeId: '7mrMh_2tXCI', category: '赞美诗歌' },
  { id: 'da-zi-ran-song-zan', title: '大衛的豎琴療法', subtitle: 'Creation Sings', artist: '安然敬拜 Restful Worship For You', youtubeId: 'u9MHKjlp-8U', category: '赞美诗歌' },
  { id: 'how-great-thou-art', title: 'How Great Thou Art', subtitle: 'How Great Thou Art', artist: 'DrCheezyToe', youtubeId: 'Cc0QVWzCv9k', category: '经典圣诗' },
  { id: 'chuang-zao-zhu', title: '為榮耀的創造', subtitle: 'Glorious Creator', artist: '讚美之泉 Stream Of Praise Music Ministries', youtubeId: 'q01p1cR7vQg', category: '赞美诗歌' },

  // 祈求
  { id: 'qi-qiu-sheng-ling', title: '懇求聖靈來', subtitle: 'Pray for the Spirit', artist: '新心音樂事工 New Heart Music Ministries', youtubeId: 'coE4rss9xYQ', category: '敬拜诗歌' },
  { id: 'qi-qiu-ni-jiang-lin', title: '這世代要呼求祢 Here We Stand', subtitle: 'Come Lord We Pray', artist: '讚美之泉 Stream Of Praise Music Ministries', youtubeId: '6wc9xUOO0HU', category: '敬拜诗歌' },
  { id: 'qian-cheng-qi-qiu', title: '台語詩歌 願  謝鴻文 專輯：願祢的國降臨', subtitle: 'Earnest Prayer', artist: 'Sean Tsai', youtubeId: 'sawuQJIIMtw', category: '敬拜诗歌' },

  // 天国/比喻/kingdom/parable
  { id: 'tian-guo-jin-le', title: '像極了天堂 / Just Like Heaven', subtitle: 'The Kingdom Is Near', artist: 'Joshua Band 約書亞樂團', youtubeId: '9vrMhDhATQ0', category: '福音诗歌' },
  { id: 'tian-guo-de-zi-min', title: '天國的子民', subtitle: 'Citizens of the Kingdom', artist: '泥土音樂Clay Music', youtubeId: '_7tDHd3RqXU', category: '赞美诗歌' },
  { id: 'ba-fu', title: '八福 [Beatitudes]', subtitle: 'The Beatitudes', artist: '讚美之泉 Stream Of Praise Music Ministries', youtubeId: 'ED3-h7Cc_4s', category: '经典圣诗' },

  // 称谢
  { id: 'chen-xie-shang-zhu', title: '我要一心稱謝祢', subtitle: 'Lord I Praise with All of My Heart', artist: '讚美之泉 Stream Of Praise Music Ministries', youtubeId: 'm3sn2txZ7EQ', category: '赞美诗歌' },
  { id: 'yi-gan-en-chen-xie', title: '當讚美進入祂的院', subtitle: 'Enter His Courts with Thanksgiving', artist: '基恩敬拜 Amazing Grace Worship', youtubeId: 'lO8q8JMjgxA', category: '赞美诗歌' },
  { id: 'dang-chen-xie-jin-ru', title: '当称谢进入他的门', subtitle: 'With Thanksgiving', artist: '基督教赞美诗-小草诗歌', youtubeId: 'yw1HBjtXw5M', category: '赞美诗歌' },

  // 圣灵/Spirit
  { id: 'sheng-ling-qin-zi-lai', title: '聖靈請祢來', subtitle: 'Holy Spirit Come', artist: '橄欖枝', youtubeId: 'ErFrK9nOTqc', category: '敬拜诗歌' },
  { id: 'sheng-ling-de-huo', title: '聖靈的火 Fire Come Down', subtitle: 'Fire of the Holy Spirit', artist: '讚美之泉 Stream Of Praise Music Ministries', youtubeId: 'pmSmBtZ9rNg', category: '赞美诗歌' },
  { id: 'sheng-ling-chong-man-wo', title: '聖靈充滿我', subtitle: 'Spirit Fill Me', artist: '橄欖枝', youtubeId: 'cpigl7Finfg', category: '敬拜诗歌' },
  { id: 'sheng-ling-yun-xing', title: '求聖靈運行', subtitle: 'Spirit Moving', artist: '祝瑞蓮 - 琴與爐敬拜 (神的帳幕團隊) Josie Chu - Naioth Ministries', youtubeId: 'WXytaQj5zfg', category: '敬拜诗歌' },
  { id: 'holy-spirit-en', title: '聖靈的江河 Holy Spirit, Come', subtitle: '聖靈', artist: '讚美之泉 Stream Of Praise Music Ministries', youtubeId: 'UqhiMn-LTxk', category: '敬拜诗歌' },

  // 教会/church
  { id: 'jiao-hui-yi-jia-ren', title: '一家人', subtitle: 'Church Family', artist: '泥土音樂Clay Music', youtubeId: 'e9mm8AGCGZU', category: '福音诗歌' },
  { id: 'jiao-hui-gen-ji', title: '教會唯一的根基 The Church\'s One Foundation', subtitle: "The Church's One Foundation", artist: '新心音樂事工 New Heart Music Ministries', youtubeId: 'LIeUdvVO4t8', category: '经典圣诗' },
  { id: 'jian-li-jiao-hui', title: '興起建造', subtitle: 'Build Your Church', artist: '日光實驗室 Sunlight Lab', youtubeId: 'fh_VH_x1dgU', category: '赞美诗歌' },

  // 智慧/箴言/wisdom/proverb
  { id: 'zhi-hui-de-yuan-tou', title: '上帝的话·诗歌智慧书-上行的由来和操练', subtitle: 'Source of Wisdom', artist: ' Words of God 上帝的话', youtubeId: 'Q7aE2_T-asM', category: '福音诗歌' },
  { id: 'qiu-zhu-ci-zhi-hui', title: '人生的智慧', subtitle: 'Grant Me Wisdom Lord', artist: '天韻合唱團 Heavenly Melody', youtubeId: '3TtBuwndjCg', category: '敬拜诗歌' },
  { id: 'zhen-yan-jing-ju', title: '箴言 24:19 惡人終不得善報', subtitle: 'Proverbs in Song', artist: '金句詩歌 Bible Songs', youtubeId: 'qlxp1UFrLsA', category: '经典圣诗' },

  // 勇气/hero/courage
  { id: 'zhu-shi-wo-de-yong-qi', title: '愛使我們勇敢', subtitle: 'Lord Is My Courage', artist: '讚美之泉 Stream Of Praise Music Ministries', youtubeId: 'Xokmm1h29w8', category: '福音诗歌' },
  { id: 'be-bold-be-strong', title: '勇敢走出去 Stepping Out', subtitle: 'Be Bold Be Strong', artist: '讚美之泉 Stream Of Praise Music Ministries', youtubeId: 'w43QIZ79YbY', category: '经典圣诗' },

  // 盼望/指望/hope/wait
  { id: 'pan-wang', title: '盼望/ Hope,', subtitle: 'Hope', artist: '泥土音樂Clay Music', youtubeId: 'sEUfnrbR_zo', category: '福音诗歌' },
  { id: 'huo-zhe-de-pan-wang', title: '永活盼望 / Living Hope', subtitle: 'A Living Hope', artist: 'KUA GLOBAL 跨越', youtubeId: 'KVDpKlkwDVc', category: '福音诗歌' },
  { id: 'zhi-wang-zai-yu-ni', title: '我的指望在乎祢 My Hope is in You', subtitle: 'My Hope Is In You', artist: '新心音樂事工 New Heart Music Ministries', youtubeId: '8r7BfF6fO7c', category: '敬拜诗歌' },
  { id: 'deng-hou-shen', title: '盛曉玫 泥土音樂 最適合安靜聆聽的詩歌 十首連續播放', subtitle: 'Wait Upon the Lord', artist: '泥土音樂Clay Music', youtubeId: '7j7I9Kmuo-4', category: '敬拜诗歌' },

  // 家庭/family
  { id: 'jia-ting-zhu-ai', title: '在主爱里曾欢然相聚', subtitle: 'Family In God\'s Love', artist: 'cai zi shi xuan', youtubeId: 'gopyfEhSL0w', category: '福音诗歌' },
  { id: 'ai-wo-jia-ting', title: '盛曉玫 詩歌默想 不變的愛  走出原生家庭的陰霾和過去的失敗', subtitle: 'Love My Family', artist: '泥土音樂Clay Music', youtubeId: '2X5UNRA_zxo', category: '福音诗歌' },

  // 保惠师/Comforter
  { id: 'bao-hui-shi', title: '保惠師（曲/詞：吳秉堅）', subtitle: 'The Comforter', artist: 'LCHS SF 路德會聖靈堂', youtubeId: 'CTIYqJbXtKo', category: '敬拜诗歌' },
  { id: 'qiu-bao-hui-shi-lai', title: '保惠師已經來', subtitle: 'Come Comforter Spirit', artist: 'Teresa古今詩歌Hymns♬', youtubeId: 'XhZlxn0VdFs', category: '敬拜诗歌' },

  // 服事/事奉/serve/service
  { id: 'shi-feng-de-ren-sheng', title: '北820 大571 事奉乃是供应基督', subtitle: 'A Life of Service', artist: '生命诗歌享受学习', youtubeId: 'UNftQjf7d4w', category: '福音诗歌' },
  { id: 'fu-shi-ta', title: '事奉他越久越甘甜', subtitle: 'Serve Him', artist: '灵音之声 Voice of Spirit', youtubeId: 'eAmg1PWydTg', category: '赞美诗歌' },
  { id: 'le-yi-shi-feng', title: '當樂意事奉主', subtitle: 'Willing to Serve', artist: 'Century praise piano', youtubeId: '-2jGf_vtQa8', category: '福音诗歌' },

  // 诗篇/psalm
  { id: 'shi-pian-23', title: '詩篇二十三篇 Psalm 23', subtitle: 'Psalm 23 The Lord Is My Shepherd', artist: 'HALLELUYA MEDIA', youtubeId: 'OVJguY-A4LU', category: '经典圣诗' },
  { id: 'shi-pian-91', title: '詩篇91感動人心演唱', subtitle: 'Psalm 91', artist: 'Rachel Lee Prayers', youtubeId: 'lI5Qnc7LrSI', category: '经典圣诗' },
  { id: 'shi-pian-121', title: '青草原詩歌', subtitle: 'Psalm 121 I Lift Up My Eyes', artist: '基督徒青草原iGreenpastures', youtubeId: 'q913II9sHLA', category: '经典圣诗' },
  { id: 'shi-pian-100', title: '詩篇100 篇', subtitle: 'Psalm 100 Shout For Joy', artist: '葡萄樹音樂事工The Vine Music Ministry', youtubeId: 'pedTgAQT51Q', category: '经典圣诗' },

  // 悔改/饶恕/repent/forgive
  { id: 'rao-shu-de-en', title: '【饶恕】(第一张福音音乐专辑 "主爱颂歌")', subtitle: 'Grace to Forgive', artist: '主爱颂歌 | Hymn of the Lord\'s Love', youtubeId: 'WxrAYIaLQOk', category: '福音诗歌' },
  { id: 'qiu-zhu-rao-shu', title: '求主饒恕', subtitle: 'Lord Forgive Me', artist: '基恩敬拜', youtubeId: 'JZeVdZJV6hE', category: '敬拜诗歌' },
  { id: 'hui-zhuan-gui-xiang-ni', title: '回轉歸向祢', subtitle: 'Turn Back and Repent', artist: '敬拜者WWW', youtubeId: 'kVVrGx88b34', category: '敬拜诗歌' },

  // 信实/faithful
  { id: 'xin-shi-de-shen', title: '以耶和華為樂 Let\'s Take Delight In God', subtitle: 'Faithful God', artist: '基恩敬拜 Amazing Grace Worship', youtubeId: 'L1Qu1uAVTS0', category: '赞美诗歌' },
  { id: 'great-is-thy-faithfulness', title: '祢的信實廣大', subtitle: 'Great Is Thy Faithfulness', artist: '聖詩共享 HymnShare', youtubeId: 'TH7gPe9T1Zs', category: '经典圣诗' },
  { id: 'zhu-ni-xin-shi', title: '主信實無變', subtitle: 'Lord You Are Faithful', artist: '您好ll', youtubeId: 'afzcBl2LjA4', category: '敬拜诗歌' },

  // 顺服/遵行/obey/follow
  { id: 'shun-fu-de-xin', title: '順服 I Surrender My All', subtitle: 'A Heart That Obeys', artist: '讚美之泉 Stream Of Praise Music Ministries', youtubeId: 'Zx1AMuYdykw', category: '敬拜诗歌' },
  { id: 'wo-yuan-shun-fu', title: '我要順服 I Will Obey', subtitle: 'I Will Obey', artist: '讚美之泉 Stream Of Praise Music Ministries', youtubeId: 'gmqXgffoVrI', category: '敬拜诗歌' },
  { id: 'zun-xing-zhu-dao', title: '敬畏神、遵行祂的道、愛祂、盡心盡性事奉祂', subtitle: 'Follow His Way', artist: '小Liu陪你讀聖經', youtubeId: 'gxw-I1NVuR8', category: '福音诗歌' },
  { id: 'gen-sui-wo', title: '跟隨到底 / Follow You to the End', subtitle: 'Come Follow Me', artist: 'KUA GLOBAL 跨越', youtubeId: 'z_S0WbgVfBQ', category: '福音诗歌' },

  // 拯救/deliver
  { id: 'da-neng-zheng-jiu', title: '大能拯救者 Mighty Savior', subtitle: 'Mighty to Save / Deliver', artist: '恩典之歌 Songs of Grace', youtubeId: 'TEQyG_GiE4Y', category: '赞美诗歌' },
  { id: 'mighty-to-save-en', title: '大能拯救 Mighty To Save', subtitle: '大能拯救', artist: 'beLoved144', youtubeId: 'los98Fyt7rY', category: '经典圣诗' },

  // 使命/mission
  { id: 'shi-ming', title: '使命 - 以斯拉', subtitle: 'Mission', artist: '橄欖枝', youtubeId: 'XEH1R84u1P8', category: '福音诗歌' },
  { id: 'xuan-jiao-de-shi-ming', title: '宣教的中國 China\'s Mission', subtitle: 'Mission of Proclamation', artist: '神国赞美诗God\'s love', youtubeId: 'iRZDbba6JBM', category: '福音诗歌' },
  { id: 'cha-qian-wo', title: '差遣我 Send Me, Lord', subtitle: 'Send Me on Your Mission', artist: '讚美之泉 Stream Of Praise Music Ministries', youtubeId: 'qJwNJjRg450', category: '福音诗歌' },

  // 圣诞/降生/Christmas/Immanuel
  { id: 'yi-ma-nei-li', title: '以馬內利 Emmanuel', subtitle: 'Immanuel God With Us', artist: '讚美之泉 Stream Of Praise Music Ministries', youtubeId: 'hWSaYRD6118', category: '经典圣诗' },
  { id: 'sheng-dan-kuai-le', title: '兩小時【安靜聖誕純音樂】', subtitle: 'Merry Christmas', artist: '讚美之泉 Stream Of Praise Music Ministries', youtubeId: 'Inq3D9qBvOQ', category: '经典圣诗' },
  { id: 'pu-shi-huan-teng', title: '076 普世欢腾 Joy To The World', subtitle: 'Joy to the World', artist: '喜樂之声 Voice of Rejoice', youtubeId: 'lUQPiFzBudE', category: '经典圣诗' },
  { id: 'ji-du-jiang-sheng', title: '基督降生', subtitle: 'Christ Is Born', artist: '台下十年功', youtubeId: 'E0Qyy_KHCHA', category: '经典圣诗' },
  { id: 'silent-night', title: 'Silent Night', subtitle: 'Silent Night', artist: 'Julian', youtubeId: 'sifQpiViCYM', category: '经典圣诗' },

  // 复活/resurrection/risen
  { id: 'fu-huo-de-zhu', title: '復活的主《The Risen Lord》【受難', subtitle: 'The Risen Lord', artist: '林玠模-James Music', youtubeId: '2ssOQIFMJtg', category: '赞美诗歌' },
  { id: 'ji-du-fu-huo', title: '復活的主 The Risen Lord', subtitle: 'Christ Is Risen', artist: '恩典之歌 Songs of Grace', youtubeId: 'AbFAWCG6Vg0', category: '经典圣诗' },
  { id: 'because-he-lives', title: 'Because He Lives', subtitle: 'Because He Lives', artist: 'Daniel Baptist', youtubeId: 'djsCLieky6o', category: '经典圣诗' },
  { id: 'fu-huo-de-da-neng', title: '复活的大能 Resurrection power', subtitle: 'Resurrection Power', artist: '发声音乐', youtubeId: 'ahkxteVGMSk', category: '赞美诗歌' },

  // 受难/passion
  { id: 'shou-nan-ji', title: '耶穌受難記：「禰是我永遠的救主」', subtitle: 'The Passion', artist: 'majorlee1956', youtubeId: 'P7PAnDl6uIU', category: '敬拜诗歌' },
  { id: 'shi-jia-ku-lu', title: '「赞美詩」——《苦路》', subtitle: 'Via Dolorosa', artist: '小麻雀诗歌', youtubeId: 'nO6qhwLYcV4', category: '经典圣诗' },
  { id: 'gu-jiu-shi-jia', title: '古舊十架 The Old Rugged Cross', subtitle: 'The Old Rugged Cross', artist: 'QQSUN', youtubeId: 'C9Iz8bliBwc', category: '经典圣诗' },
  { id: 'wei-le-wo', title: '本该是我 Should Have Been Me', subtitle: 'For Me', artist: 'JLSS Blessed', youtubeId: '1z-OxM19RfY', category: '敬拜诗歌' },

  // ============================================
  // 补充缺失关键词
  // ============================================

  // almighty / 全能
  { id: 'almighty-god-hymn', title: 'Almighty God, Thy Word is Cast', subtitle: '全能真神', artist: 'Stan Duncan', youtubeId: 'IkAcEYX5Bd0', category: '经典圣诗' },

  // grateful
  { id: 'gan-en-de-lei', title: '《感恩的泪》唱出心声，甘愿跟随', subtitle: 'Grateful', artist: '约3:16', youtubeId: 'TPiw33QHeaQ', category: '敬拜诗歌' },
  { id: 'grateful-hymn', title: '感恩有你', subtitle: 'A Grateful Heart', artist: '神国赞美诗God\'s love', youtubeId: 'ndAaI1SaiIg', category: '福音诗歌' },

  // 洁净 / pure
  { id: 'jie-jing-wo', title: '煉淨我 Cleanse Me, Lord', subtitle: 'Purify Me', artist: '讚美之泉 Stream Of Praise Music Ministries', youtubeId: '7GppzVMPoEo', category: '敬拜诗歌' },
  { id: 'qiu-zhu-jie-jing-wo-xin', title: '求你為我造清潔的心', subtitle: 'Create in Me a Pure Heart', artist: 'Alex Liu', youtubeId: '7od8lXWEUek', category: '敬拜诗歌' },
  { id: 'pure-in-heart', title: '清心的人真有福', subtitle: 'Blessed Are the Pure In Heart', artist: 'Mandarin Baptist Church Media', youtubeId: 'i_78PTNehCQ', category: '经典圣诗' },

  // hero / 勇气
  { id: 'shen-shi-wo-de-hero', title: '榮耀之聲--14', subtitle: 'God Is My Hero', artist: '榮耀之聲', youtubeId: 'fVoDwFhhHqo', category: '赞美诗歌' },
  { id: 'yong-gan-de-xin', title: '勇敢的心', subtitle: 'A Heart of Courage', artist: '音樂無國界 ---  Music Without Borders', youtubeId: 'MuvF0CtMghM', category: '福音诗歌' },

  // promise / 应许
  { id: 'shen-de-ying-xu', title: '神的應許 It’s God’s Promise  小組敬拜用', subtitle: 'Standing on the Promises', artist: '生命河 ROLCCmedia', youtubeId: '9Tr-0l2DDTE', category: '经典圣诗' },
  { id: 'standing-on-promises', title: '堅立在應許上', subtitle: '站在神的應許上', artist: 'Teresa古今詩歌Hymns♬', youtubeId: 'qvZcsU2p-nA', category: '经典圣诗' },

  // 我是 (I am) / Jesus
  { id: 'ye-su-wo-de-zhu', title: '耶穌，我的耶穌 Jesus, My Jesus', subtitle: 'Jesus You Are', artist: '讚美之泉 Stream Of Praise Music Ministries', youtubeId: 'VG8nE8Ttyrk', category: '敬拜诗歌' },
  { id: 'wo-shi-sheng-ming-de-liang', title: '我主耶穌是生命水', subtitle: 'I Am Feeding on the Living Bread', artist: '愛恩詩歌 EFCI Choirs', youtubeId: 'J1pFg-eBKVY', category: '福音诗歌' },
  { id: 'jesus-loves-me', title: 'Jesus Loves Me', subtitle: '耶穌愛我', artist: 'Listener Kids', youtubeId: 'owx3ao42kwI', category: '经典圣诗' },

  // freedom / 自由
  { id: 'freedom-is-here', title: '自由 @ 約書亞樂團', subtitle: '自由在這裡', artist: 'Wave of worship', youtubeId: 'Z269XUO7n-k', category: '赞美诗歌' },

  // gospel
  { id: 'chuan-fu-yin', title: '傳福音 Share the Gospel', subtitle: 'Go Tell the Gospel', artist: 'Journey of Songs 人生旅行曲', youtubeId: 'PycnCBFz8ok', category: '福音诗歌' },
  { id: 'fu-yin-de-da-neng', title: '福音使一切改變', subtitle: 'The Gospel Changes Everything', artist: 'KUA GLOBAL 跨越', youtubeId: '9iYJpAYfZVU', category: '福音诗歌' },

  // 祷告 (more)
  { id: 'jiao-wo-dao-gao', title: '赞美诗275: 教我祷告', subtitle: 'Teach Me to Pray', artist: '基督教長老會新山聖光堂Holy Light Presbyterian Church', youtubeId: 'mTqSXlItUhU', category: '敬拜诗歌' },
  { id: 'dao-gao-de-da-jun', title: '禱告的大軍 A Praying Army', subtitle: 'Army of Prayer', artist: '讚美之泉 Stream Of Praise Music Ministries', youtubeId: 'fOOeufJyFXw', category: '赞美诗歌' },

  // 得胜 / risen / 复活
  { id: 'de-sheng-de-zhu', title: '得勝的宣告 You Are My Victory', subtitle: 'Victorious Lord Is Risen', artist: '讚美之泉 Stream Of Praise Music Ministries', youtubeId: 'h5YPo_MmBds', category: '赞美诗歌' },
  { id: 'christ-is-risen', title: 'CHRIST IS ARISEN INDEED!"', subtitle: '基督已復活', artist: 'Christculture777', youtubeId: 'OIkheaMujik', category: '经典圣诗' },

  // 圣诞 / 降生 / Christmas / Immanuel (more)
  { id: 'yi-ma-nei-li-2', title: 'O Come, O Come Emmanuel', subtitle: 'O Come O Come Immanuel', artist: 'smittysmee', youtubeId: '7xtpJ4Q_Q-4', category: '经典圣诗' },

  // ============================================
  // 第三轮补充 — 确保每主题至少3首
  // ============================================

  // 信靠 / trust (need +1)
  { id: 'trust-in-the-lord', title: '要信靠主 Trust In The Lord', subtitle: '信靠主', artist: 'LWEC Choir (Naperville)', youtubeId: 'W88ae_4dhVk', category: '经典圣诗' },
  { id: 'yi-sheng-xin-kao-ni', title: '一生有祢 With You for Life', subtitle: 'Trust You All My Life', artist: '恩典之歌 Songs of Grace', youtubeId: 'rUzvU-9DTYQ', category: '敬拜诗歌' },

  // creation / 创造 (need +1)
  { id: 'how-great-thou-art-2', title: 'Carrie Underwood', subtitle: '你真偉大', artist: 'carrieunderwoodVEVO', youtubeId: 'Yf6C0L_7-CA', category: '经典圣诗' },
  { id: 'chuang-zao-qi-gong', title: '創造奇功', subtitle: 'Wondrous Creation', artist: '天韻合唱團', youtubeId: 'xtsFplo7CNU', category: '赞美诗歌' },

  // 比喻 / parable / 天国 / kingdom (need +2)
  { id: 'tian-guo-de-bi-yu', title: '天国的比喻', subtitle: 'Parables of the Kingdom', artist: '教委音乐', youtubeId: '-nU5PffoLOc', category: '福音诗歌' },
  { id: 'seek-ye-first', title: 'Seek Ye First', subtitle: '先求天國', artist: 'Worship Videos (Louange et Adoration)', youtubeId: 'EsBpM9IcBts', category: '经典圣诗' },

  // grateful (need +1)
  { id: 'xian-shang-gan-en-2', title: '[ 獻上感恩 Give Thanks ]', subtitle: 'With a Grateful Heart', artist: '內巷 | withinlane', youtubeId: 'KDA7SbhwrX0', category: '敬拜诗歌' },

  // 慈爱 (need +2)
  { id: 'zhu-de-ci-ai', title: '祢的慈愛 Unfailing Love', subtitle: 'Lovingkindness of the Lord', artist: '讚美之泉 Stream Of Praise Music Ministries', youtubeId: 'CtEmco5_7Ys', category: '敬拜诗歌' },
  { id: 'ci-ai-de-fu', title: '慈愛天父 God of Mercy', subtitle: 'Loving Father', artist: '讚美之泉 Stream Of Praise Music Ministries', youtubeId: 'dBee0GgPzrU', category: '敬拜诗歌' },
  { id: 'great-is-thy-faithfulness-ci-ai', title: '主的慈愛永不斷絕', subtitle: 'Your Lovingkindness Never Ceases', artist: 'Sparrow', youtubeId: 'scPfD1cDfMk', category: '经典圣诗' },

  // 智慧 / wisdom / 箴言 / proverb (need +2)
  { id: 'zhen-yan-de-jiao-dao', title: '箴言.詩歌：《箴言序曲》  ； 一字不漏背聖經', subtitle: 'Teaching from Proverbs', artist: '靈航道', youtubeId: 'OT8kDrJI32I', category: '福音诗歌' },
  { id: 'wisdom-song', title: '智慧 Wisdom', subtitle: '智慧之歌', artist: '福音电台 Fuyindiantai FYDT', youtubeId: 'NLkyyLj2vgA', category: '经典圣诗' },

  // 圣洁 / holy (already 2, need +1)
  { id: 'holy-holy-holy-2', title: 'Holy, Holy 聖潔榮耀主', subtitle: '聖哉聖哉聖哉', artist: '讚美之泉 Stream Of Praise Music Ministries', youtubeId: 'CEcmjFlQTMA', category: '经典圣诗' },

  // 勇气 / hero / courage (need +1)
  { id: 'be-strong-courageous', title: '剛強壯膽 / Courage, Surge Out', subtitle: 'Courage in the Lord', artist: 'Joshua Band 約書亞樂團', youtubeId: '9tcUVDY7F0I', category: '赞美诗歌' },

  // 盼望 / hope / 指望 / wait (need +2)
  { id: 'wo-de-pan-wang', title: '《盼望在乎祢》', subtitle: 'My Hope Is in You', artist: '基恩敬拜 Amazing Grace Worship', youtubeId: 'ldT0EZcUYyo', category: '敬拜诗歌' },
  { id: 'my-hope-is-built', title: '堅固磐石', subtitle: 'My Hope Is Built on Nothing Less', artist: 'Teresa古今詩歌Hymns♬', youtubeId: 'dM7yInyQqkk', category: '经典圣诗' },

  // cross (need +1)
  { id: 'the-old-rugged-cross-2', title: 'Alan Jackson', subtitle: '古舊十架', artist: 'GaitherVEVO', youtubeId: '-JS9P8d2iOc', category: '经典圣诗' },

  // 家庭 / family / home (need +2)
  { id: 'jia-ting-ji-tan', title: '家庭祭坛', subtitle: 'Family Altar at Home', artist: '主爱颂歌 | Hymn of the Lord\'s Love', youtubeId: 'vuea_MT4bBo', category: '敬拜诗歌' },
  { id: 'jia-shi-ai-zhi-wo', title: '為愛而生 Born to Love', subtitle: 'Home Sweet Home', artist: '讚美之泉 Stream Of Praise Music Ministries', youtubeId: 'hSYtcWLUcI8', category: '福音诗歌' },
  { id: 'jian-li-ji-du-hua-jia-ting', title: '建立屬神的家庭', subtitle: 'Build a Christian Family Home', artist: '大衛的琴 - David\'s Harp', youtubeId: 'Df9EqQHNIw0', category: '福音诗歌' },

  // 服事 / 事奉 / serve / service (need +1)
  { id: 'here-i-am-send-me', title: 'Here I am Lord with lyrics', subtitle: '我在這裡請差遣我', artist: 'Eric Tom', youtubeId: 'EcxOkht8w7c', category: '经典圣诗' },

  // praise (need +1 for psalms theme)
  { id: 'praise-the-lord', title: '每一次我讚美主', subtitle: 'Every Time I Praise the Lord', artist: '生命河 ROLCCmedia', youtubeId: 'TW236bfzXkA', category: '经典圣诗' },
  { id: 'shi-pian-zan-mei', title: '詩篇頌唱', subtitle: 'Praise from the Psalms', artist: '讚美之聲', youtubeId: 'MWj8Dijy39c', category: '敬拜诗歌' },

  // 悔改 / repent / 饶恕 / forgive (need +1)
  { id: 'hui-gai-gui-xiang-zhu', title: '真實的悔改 Turn My Life To You', subtitle: 'Repent and Return', artist: '讚美之泉 Stream Of Praise Music Ministries', youtubeId: 'nMJ7VXOVjdQ', category: '福音诗歌' },

  // 八福 / blessed (need +2)
  { id: 'ba-fu-ge', title: '跟随动态简谱学唱诗歌《八福》同步歌词字幕', subtitle: 'The Beatitudes Song', artist: '阿林Alin', youtubeId: 'xKv8j1zTHLU', category: '福音诗歌' },
  { id: 'blessed-be-your-name', title: '頌讚歸於祢', subtitle: '尊貴祢名', artist: 'Scarlett Wang', youtubeId: 'fGG7PPbKYlM', category: '赞美诗歌' },

  // 信实 / faithful (need +1)

  // promise / 应许 (need +1)
  { id: 'every-promise', title: '在祢每个应许上', subtitle: '祢話語的每個應許', artist: '娴的音乐', youtubeId: 'NWNLDEdDYso', category: '经典圣诗' },

  // 我是 / I am (need +2)
  { id: 'wo-shi-pu-tao-shu', title: '我是葡萄树 你们是枝子', subtitle: 'Jesus Said I Am', artist: 'Kenneth Soh', youtubeId: '0QddWSa8msA', category: '福音诗歌' },
  { id: 'wo-shi-hao-mu-ren', title: 'Shepherd / 好牧人', subtitle: 'I Am the Good Shepherd', artist: 'Joshua Band 約書亞樂團', youtubeId: 'EgvIpKpDVh8', category: '福音诗歌' },

  // 顺服 / obey / 遵行 / follow (need +1)
  { id: 'i-will-follow', title: '我定意跟從祢 I Will Follow', subtitle: '我願跟隨', artist: '新心音樂事工 New Heart Music Ministries', youtubeId: 'Zc1_c11Rjqo', category: '赞美诗歌' },

  // 拯救 / deliver / freedom (need +1)
  { id: 'mighty-to-save', title: 'Mighty to Save', subtitle: '大能拯救', artist: 'Hadleigh Baptist Church', youtubeId: 'iCZ3Kcl4uEQ', category: '赞美诗歌' },

  // 使命 / mission / gospel (need +1)
  { id: 'go-light-your-world', title: '特别诗歌：Go Light Your World', subtitle: '傳福音使命', artist: '独一真神中文事工One True God Chinese Ministry', youtubeId: '9pHKJ5t54f8', category: '福音诗歌' },

  // 受难 / passion (need +1)
  { id: 'at-the-cross', title: '在十字架歌', subtitle: '在十架前', artist: '小麻雀诗歌', youtubeId: 'NWZIOw_Kjcc', category: '经典圣诗' },

  // 圣诞 / Christmas / 降生 / Immanuel (need +1)
  { id: 'joy-to-the-world', title: '普世歡騰', subtitle: '普世歡騰', artist: '活水詩歌 LSH', youtubeId: 'X6cajlUMTqI', category: '经典圣诗' },
  { id: 'o-holy-night-2', title: 'Josh Groban', subtitle: '聖善夜（Josh Groban聖誕降生）', artist: 'Josh Groban', youtubeId: 'hJw-ey1DPRA', category: '经典圣诗' },

  // 复活 / resurrection / risen / 得胜
  { id: 'fu-huo-de-qing-chen', title: '复活的清晨-【天福诗班】', subtitle: 'Resurrection Morning', artist: '卫理公会天福堂', youtubeId: 'm-NGgZULbF0', category: '赞美诗歌' },
  { id: 'thine-is-the-glory', title: 'Thine Be The Glory', subtitle: '榮耀歸主', artist: 'St. Michael\'s Singers - Topic', youtubeId: '6qKfVuvG2SY', category: '经典圣诗' },
  { id: 'what-a-friend-en', title: 'What a Friend We Have in Jesus', subtitle: '耶穌恩友', artist: 'Lydia Walker', youtubeId: 'TAyaXdvvbGU', category: '经典圣诗' },
  { id: 'rock-of-ages-en', title: 'Rock of Ages', subtitle: '万古磐石', artist: 'SE Samonte', youtubeId: 'gM7gt_cSxjw', category: '经典圣诗' },
  { id: 'holy-holy-holy-en', title: 'Holy Holy Holy', subtitle: '圣哉三一', artist: 'Chet Valley Hymns and Songs', youtubeId: 'zzM9P_Gqw-s', category: '经典圣诗' },
  { id: 'turn-your-eyes-en', title: 'Turn Your Eyes Upon Jesus', subtitle: '当转眼仰望耶稣', artist: 'Jack Carrasquillo', youtubeId: 'j5qc0EcNgqw', category: '经典圣诗' },
  { id: 'jesus-coming-again-en', title: 'Jesus Is Coming Again', subtitle: '主耶稣再临', artist: 'Daniel Baptist', youtubeId: 'LOSoWxszbE0', category: '经典圣诗' },
  { id: 'doxology-en', title: 'Doxology', subtitle: '荣耀颂', artist: 'Anthem Lights', youtubeId: 'tQUTvMtUhw4', category: '经典圣诗' },
  { id: 'i-know-who-holds-tomorrow-en', title: 'I Know Who Holds Tomorrow', subtitle: '我知谁掌管明天', artist: 'Hymns of the Heart', youtubeId: 'dNN1Z342Iao', category: '经典圣诗' },
  { id: 'trust-and-obey-en', title: 'Trust and Obey', subtitle: '信靠顺服', artist: 'VagleBrothers', youtubeId: 'KB4KcleYiWM', category: '经典圣诗' },
  { id: 'chong-man-wo', title: '充滿我', subtitle: 'Fill Me', artist: '777Worship', youtubeId: 'SqDQCGxP3pk', category: '敬拜诗歌' },
  { id: 'fill-me-now-en', title: 'Fill Me Now', subtitle: '求主充满我', artist: 'West Kenya Union Conference', youtubeId: 'RRwGQMXvKWQ', category: '敬拜诗歌' },
  { id: 'in-the-garden-en', title: 'In the Garden', subtitle: '在花园里', artist: 'Extended Life Worship', youtubeId: 'EQJrvGJe4Yc', category: '经典圣诗' },
  { id: 'love-of-god-en', title: 'The Love of God', subtitle: '主爱有多少', artist: 'TheSelahVideos', youtubeId: 'Fqp27IvdbSo', category: '经典圣诗' },
  { id: 'by-grace-alone-en', title: 'By Grace Alone', subtitle: '靠恩典', artist: 'soldaadooo', youtubeId: 'WEiCOlWrsVo', category: '福音诗歌' },
  { id: 'i-need-thee-en', title: 'I Need Thee Every Hour', subtitle: '我需要祢', artist: 'Rosemary Siemens', youtubeId: 'pTg86guC5GE', category: '经典圣诗' },
  { id: 'lord-is-my-strength-en', title: 'The Lord Is My Strength', subtitle: '主是我力量', artist: 'The Belonging Co', youtubeId: 'WYcpL6otp_Y', category: '敬拜诗歌' },
  { id: 'shout-to-the-lord-en', title: 'Shout to the Lord', subtitle: '向主歡呼', artist: 'Hillsong Worship', youtubeId: '5_aIauL2xKA', category: '敬拜诗歌' },
  { id: 'here-i-am-to-worship-en', title: 'Here I Am to Worship', subtitle: '我在這裡敬拜', artist: 'Integrity Music', youtubeId: 'b_KNvkk2G-Y', category: '敬拜诗歌' },
  { id: 'you-are-my-all-en', title: 'You Are My All In All', subtitle: '祢是我的一切', artist: 'Brentwood Baptist', youtubeId: 'lie1L61Qnos', category: '敬拜诗歌' },
  { id: 'you-raise-me-up-en', title: 'You Raise Me Up', subtitle: '你鼓舞了我', artist: 'Josh Groban', youtubeId: 'aJxrX42WcjQ', category: '赞美诗歌' },
  { id: 'be-still-en', title: 'Be Still', subtitle: '安靜', artist: 'CeCeWinansVEVO', youtubeId: 'pS0oj2p77sE', category: '敬拜诗歌' },
  { id: 'how-great-is-our-god-en', title: 'How Great Is Our God', subtitle: '我们的神何等伟大', artist: 'ChrisTomlinVEVO', youtubeId: 'KBD18rsVJHk', category: '赞美诗歌' },
  { id: 'blessed-assurance-en', title: 'Blessed Assurance', subtitle: '有福的确据', artist: 'Silent VoiceTV', youtubeId: 'rDeiy9-t2GE', category: '经典圣诗' },
  { id: 'it-is-well-en', title: 'It Is Well With My Soul', subtitle: '我心灵得安宁', artist: 'katiekatew', youtubeId: 'AHe_qmo3gX4', category: '经典圣诗' },
  { id: 'great-is-thy-faithfulness-en', title: 'Great Is Thy Faithfulness', subtitle: '你信实何广大', artist: 'Maranatha! Music', youtubeId: 'ErwiBz1QA4o', category: '经典圣诗' },
  { id: 'come-thou-fount-en', title: 'Come Thou Fount of Every Blessing', subtitle: '来赞美泉源', artist: 'Celtic Worship', youtubeId: 'XKOoeTbjSeI', category: '经典圣诗' },
  { id: 'all-hail-the-power-en', title: 'All Hail the Power of Jesus Name', subtitle: '万口欢唱', artist: 'Integrity Music', youtubeId: 'GKOVqFcdEgU', category: '经典圣诗' },
  { id: 'mighty-fortress-en', title: 'A Mighty Fortress Is Our God', subtitle: '上主是我坚固保障', artist: 'Christian Sermons and Audio Books', youtubeId: '8XUYZoguhEQ', category: '经典圣诗' },
  { id: 'abide-with-me-en', title: 'Abide With Me', subtitle: '求主同住', artist: 'Sunday 7pm Choir', youtubeId: 'PzmvagnGTYY', category: '经典圣诗' },
  { id: 'crown-him-en', title: 'Crown Him with Many Crowns', subtitle: '万冠来冠祂', artist: 'Martijn de Groot', youtubeId: 'If-svStcvS8', category: '经典圣诗' },
  { id: 'solid-rock-en', title: 'My Hope Is Built on Nothing Less', subtitle: '磐石稳固', artist: 'Parkway Worship Ministry', youtubeId: 'uhVwVHC6_n0', category: '经典圣诗' },
  { id: 'nearer-my-god-en', title: 'Nearer My God to Thee', subtitle: '更亲近主', artist: 'Rosemary Siemens', youtubeId: 'gWz4feHp0ko', category: '经典圣诗' },
  { id: 'to-god-be-the-glory-en', title: 'To God Be the Glory', subtitle: '荣耀归于真神', artist: 'Northern Baptist Association', youtubeId: '2CeBoSQsBR0', category: '经典圣诗' },
  { id: 'blessed-be-your-name-en', title: 'Blessed Be Your Name', subtitle: '尊贵你名', artist: 'Matt Redman', youtubeId: '0fudMFN9M8s', category: '敬拜诗歌' },
  { id: 'how-deep-the-fathers-love-en', title: 'How Deep the Fathers Love For Us', subtitle: '天父的慈爱何等深厚', artist: 'Austin Stone Worship', youtubeId: 'z65YxhqY0_E', category: '敬拜诗歌' },
  { id: 'oceans-en', title: 'Oceans (Where Feet May Fail)', subtitle: '海洋', artist: 'Hillsong UNITED', youtubeId: 'OP-00EwLdiU', category: '敬拜诗歌' },
  { id: 'beautiful-name-en', title: 'What A Beautiful Name', subtitle: '何等美妙的名', artist: 'Hillsong Worship', youtubeId: 'nQWFzMvCfLE', category: '敬拜诗歌' },
  { id: 'way-maker-en', title: 'Way Maker', subtitle: '开路者', artist: 'SINACH', youtubeId: 'QM8jQHE5AAk', category: '敬拜诗歌' },
  { id: 'goodness-of-god-en', title: 'Goodness of God', subtitle: '神的美善', artist: 'Bethel Music', youtubeId: 'n0FBb6hnwTo', category: '敬拜诗歌' },
  { id: 'reckless-love-en', title: 'Reckless Love', subtitle: '不计代价的爱', artist: 'Bethel Music', youtubeId: 'Sc6SSHuZvQE', category: '敬拜诗歌' },
  { id: 'king-of-kings-en', title: 'King of Kings', subtitle: '万王之王', artist: 'Hillsong Worship', youtubeId: 'dQl4izxPeNU', category: '敬拜诗歌' },
  { id: 'build-my-life-en', title: 'Build My Life', subtitle: '建造我生命', artist: 'Housefires', youtubeId: 'FYMjO9mL0Tw', category: '敬拜诗歌' },
  { id: 'great-are-you-lord-en', title: 'Great Are You Lord', subtitle: '主祢真伟大', artist: 'AllSonsDaughtersVEVO', youtubeId: 'r7V2Ja7LzWg', category: '敬拜诗歌' },
  { id: 'cornerstone-en', title: 'Cornerstone', subtitle: '房角石', artist: 'Hillsong Worship', youtubeId: 'izrk-erhDdk', category: '敬拜诗歌' },
  { id: 'who-you-say-i-am-en', title: 'Who You Say I Am', subtitle: '祢说我是谁', artist: 'Hillsong Worship', youtubeId: 'lKw6uqtGFfo', category: '敬拜诗歌' },
  { id: 'the-blessing-en', title: 'The Blessing', subtitle: '祝福', artist: 'Elevation Worship', youtubeId: 'Zp6aygmvzM4', category: '敬拜诗歌' },
  { id: 'o-praise-the-name-en', title: 'O Praise The Name', subtitle: '颂赞主圣名', artist: 'Hillsong Worship', youtubeId: 'LqBpifDpNKc', category: '赞美诗歌' },
  { id: 'lord-i-need-you-en', title: 'Lord I Need You', subtitle: '主我需要祢', artist: 'mattmaherVEVO', youtubeId: 'LuvfMDhTyMA', category: '敬拜诗歌' },
  { id: 'in-christ-alone-en', title: 'In Christ Alone', subtitle: '惟在基督里', artist: 'KeithandKristyn Getty', youtubeId: 'm_063OI38RQ', category: '经典圣诗' },
  { id: 'good-good-father-en', title: 'Good Good Father', subtitle: '好好天父', artist: 'ChrisTomlinVEVO', youtubeId: 'CqybaIesbuA', category: '敬拜诗歌' },
  { id: 'revelation-song-en', title: 'Revelation Song', subtitle: '启示之歌', artist: 'Integrity Music', youtubeId: '8-Gxjtd6Wp4', category: '敬拜诗歌' },
  { id: 'open-the-eyes-en', title: 'Open The Eyes Of My Heart', subtitle: '开我心眼', artist: 'Integrity Music', youtubeId: 'ViBNqNukgzE', category: '敬拜诗歌' },
  { id: 'forever-kari-jobe-en', title: 'Forever', subtitle: '永远', artist: 'KariJobeVEVO', youtubeId: 'huFra1mnIVE', category: '敬拜诗歌' },
  { id: 'no-longer-slaves-en', title: 'No Longer Slaves', subtitle: '不再是奴仆', artist: 'Bethel Music', youtubeId: 'f8TkUMJtK5k', category: '敬拜诗歌' },
  { id: 'battle-belongs-en', title: 'Battle Belongs', subtitle: '争战属于主', artist: 'PhilWickhamVEVO', youtubeId: 'qtvQNzPHn-w', category: '赞美诗歌' },
  { id: 'graves-into-gardens-en', title: 'Graves Into Gardens', subtitle: '坟墓变花园', artist: 'Elevation Worship', youtubeId: 'KwX1f2gYKZ4', category: '敬拜诗歌' },
  { id: 'do-it-again-en', title: 'Do It Again', subtitle: '再做一次', artist: 'Elevation Worship', youtubeId: 'ZOBIPb-6PTc', category: '敬拜诗歌' },
  { id: 'amazing-grace-phil-en', title: 'This Is Amazing Grace', subtitle: '何等奇异恩典', artist: 'PhilWickhamVEVO', youtubeId: 'XFRjr_x-yxU', category: '赞美诗歌' },
  { id: 'o-come-to-the-altar-en', title: 'O Come To The Altar', subtitle: '来到祭坛前', artist: 'Elevation Worship', youtubeId: 'rYQ5yXCc_CA', category: '敬拜诗歌' },
  { id: 'is-he-worthy-en', title: 'Is He Worthy', subtitle: '祂配得吗', artist: 'AndrewPetersonVEVO', youtubeId: 'OIahc83Kvp4', category: '敬拜诗歌' },
  { id: 'before-the-throne-en', title: 'Before The Throne Of God Above', subtitle: '在神宝座前', artist: 'SovereignGraceMusic', youtubeId: 'LULK2nZ6sCc', category: '经典圣诗' },
  { id: 'jesus-paid-it-all-en', title: 'Jesus Paid It All', subtitle: '耶稣已付清', artist: 'Babe Damulag', youtubeId: 'iaZbqDd33Yw', category: '经典圣诗' },
  { id: 'be-thou-my-vision-en', title: 'Be Thou My Vision', subtitle: '成为我异象', artist: 'NathanPachecoMusic', youtubeId: 'ihJAJA4ibEs', category: '经典圣诗' },
  { id: 'fairest-lord-jesus-en', title: 'Fairest Lord Jesus', subtitle: '美哉主耶稣', artist: 'Hymncharts', youtubeId: 'La3O7DU8GNU', category: '经典圣诗' },
  { id: 'amazing-grace-chains-en', title: 'Amazing Grace (My Chains Are Gone)', subtitle: '奇异恩典（锁链已断）', artist: 'ChrisTomlinVEVO', youtubeId: 'Y-4NFvI5U9w', category: '经典圣诗' },
  { id: 'i-can-only-imagine-en', title: 'I Can Only Imagine', subtitle: '我只能想象', artist: 'mercymeVEVO', youtubeId: 'N_lrrq_opng', category: '福音诗歌' },
  { id: 'worthy-is-the-lamb-en', title: 'Worthy Is The Lamb', subtitle: '羔羊配得', artist: 'Hillsong Worship', youtubeId: 'V-cd5prE4f0', category: '敬拜诗歌' },
  { id: 'hosanna-en', title: 'Hosanna', subtitle: '和散那', artist: 'Hillsong Worship', youtubeId: 'hnMevXQutyE', category: '赞美诗歌' },
  { id: 'still-hillsong-en', title: 'Still', subtitle: '安静等候', artist: 'Christian Lyrics', youtubeId: '_n6dfB2Z-Ko', category: '敬拜诗歌' },
  { id: 'i-surrender-en', title: 'I Surrender', subtitle: '我降服', artist: 'Hillsong Worship', youtubeId: 's7jXASBWwwI', category: '敬拜诗歌' },
  { id: 'broken-vessels-en', title: 'Broken Vessels', subtitle: '破碎的器皿', artist: 'Hillsong Worship', youtubeId: 'uz9xKtRhpjc', category: '敬拜诗歌' },
  { id: 'so-will-i-en', title: 'So Will I (100 Billion X)', subtitle: '我也愿意', artist: 'Hillsong Worship', youtubeId: 'GfVd5x9W1Xc', category: '赞美诗歌' },
  { id: 'even-so-come-en', title: 'Even So Come', subtitle: '主快再来', artist: 'PassionVEVO', youtubeId: 'fBHcvJhc6Pk', category: '敬拜诗歌' },
  { id: 'glorious-day-en', title: 'Glorious Day', subtitle: '荣耀之日', artist: 'PassionVEVO', youtubeId: 'LfzpfqrPUDo', category: '赞美诗歌' },
  { id: 'god-youre-so-good-en', title: 'God You\'re So Good', subtitle: '神祢真美好', artist: 'PassionVEVO', youtubeId: '7IIZIPtQuW8', category: '敬拜诗歌' },
  { id: 'raise-a-hallelujah-en', title: 'Raise A Hallelujah', subtitle: '扬声赞美', artist: 'Bethel Music', youtubeId: 'G2XtRuPfaAU', category: '赞美诗歌' },
  { id: 'stand-in-your-love-en', title: 'Stand In Your Love', subtitle: '站立在祢爱中', artist: 'Bethel Music', youtubeId: 'MHLEZzyAZrI', category: '敬拜诗歌' },
  { id: 'you-make-me-brave-en', title: 'You Make Me Brave', subtitle: '祢使我勇敢', artist: 'Bethel Music', youtubeId: '6Hi-VMxT6fc', category: '敬拜诗歌' },
  { id: 'living-hope-en', title: 'Living Hope', subtitle: '活泼的盼望', artist: 'PhilWickhamVEVO', youtubeId: 'u-1fwZtKJSM', category: '敬拜诗歌' },
  { id: 'house-of-the-lord-en', title: 'House of the Lord', subtitle: '主的殿', artist: 'PhilWickhamVEVO', youtubeId: 'h8uKldEUrPE', category: '赞美诗歌' },
  { id: 'jireh-en', title: 'Jireh', subtitle: '耶和华以勒', artist: 'Elevation Worship', youtubeId: 'mC-zw0zCCtg', category: '敬拜诗歌' },
  { id: 'firm-foundation-en', title: 'Firm Foundation', subtitle: '坚固根基', artist: 'TRIBL', youtubeId: 'uOP4s8fOEm0', category: '敬拜诗歌' },
  { id: 'run-to-the-father-en', title: 'Run To The Father', subtitle: '奔向天父', artist: 'Cody Carnes', youtubeId: 'HTHS4W1bPj8', category: '敬拜诗歌' },
  { id: 'nothing-else-en', title: 'Nothing Else', subtitle: '别无所求', artist: 'Cody Carnes', youtubeId: '4BhTAJ49MQ0', category: '敬拜诗歌' },
  { id: 'christ-be-magnified-en', title: 'Christ Be Magnified', subtitle: '愿基督被尊大', artist: 'Cody Carnes', youtubeId: 'jjGMlYywK9M', category: '敬拜诗歌' },
  { id: 'yet-not-i-en', title: 'Yet Not I But Through Christ In Me', subtitle: '不是我乃是基督', artist: 'CityAlight', youtubeId: 'hwc2d1Xt8gM', category: '经典圣诗' },
  { id: 'only-a-holy-god-en', title: 'Only A Holy God', subtitle: '唯独圣洁的神', artist: 'CityAlight', youtubeId: '7HSdeeCm8_g', category: '敬拜诗歌' },
  { id: 'his-mercy-is-more-en', title: 'His Mercy Is More', subtitle: '祂的怜悯更多', artist: 'KeithandKristyn Getty', youtubeId: 'I1GiZL60c80', category: '经典圣诗' },
  { id: 'ancient-of-days-en', title: 'Ancient of Days', subtitle: '亘古常在者', artist: 'CityAlight', youtubeId: 'PPpGphzScjA', category: '赞美诗歌' },
  { id: 'man-of-sorrows-en', title: 'Man of Sorrows', subtitle: '忧患之子', artist: 'Hillsong Worship', youtubeId: 'LZjBJuHgXPE', category: '经典圣诗' },
  { id: 'praise-elevation-en', title: 'Praise', subtitle: '赞美', artist: 'Elevation Worship', youtubeId: 'f2oxGYpuLkw', category: '赞美诗歌' },
  { id: 'see-a-victory-en', title: 'See A Victory', subtitle: '看见得胜', artist: 'Elevation Worship', youtubeId: 'YNd-PbVhnvA', category: '赞美诗歌' },
  { id: 'evidence-en', title: 'Evidence', subtitle: '凭据', artist: 'Bethel Music', youtubeId: 'Q6jD7N1HvbI', category: '敬拜诗歌' },
  { id: 'peace-be-still-en', title: 'Peace Be Still', subtitle: '风浪止息', artist: 'The Belonging Co', youtubeId: 'dUpKZz0Nm7c', category: '敬拜诗歌' },
  { id: 'defender-en', title: 'Defender', subtitle: '保卫者', artist: 'FrancescaBattistelli', youtubeId: 'ncYyDQW0L-A', category: '赞美诗歌' },
  { id: 'tremble-en', title: 'Tremble', subtitle: '颤抖', artist: 'Mosaic MSC', youtubeId: 'dL_d2mbNZNA', category: '敬拜诗歌' },
  { id: 'take-courage-en', title: 'Take Courage', subtitle: '放胆无惧', artist: 'Bethel Music', youtubeId: 'LJoABwNMzvM', category: '敬拜诗歌' },
  { id: 'champion-en', title: 'Champion', subtitle: '得胜者', artist: 'Bethel Music', youtubeId: 'BOK8F9caDic', category: '赞美诗歌' },
  { id: 'touch-of-heaven-en', title: 'Touch of Heaven', subtitle: '触摸天堂', artist: 'Hillsong Worship', youtubeId: 'nxxr47zEUxE', category: '敬拜诗歌' },
  { id: 'here-is-love-en', title: 'Here Is Love Vast As The Ocean', subtitle: '爱何广大无边', artist: 'KeithandKristyn Getty', youtubeId: 'ffnOZN6wXLo', category: '经典圣诗' },
  { id: 'leaning-everlasting-en', title: 'Leaning On The Everlasting Arms', subtitle: '倚靠永恒膀臂', artist: 'The Sovereign Word', youtubeId: 'EJ5cLiCCOao', category: '经典圣诗' },
  { id: 'tis-so-sweet-en', title: '\'Tis So Sweet To Trust In Jesus', subtitle: '信靠耶稣何等甜蜜', artist: 'tabcpastor', youtubeId: '-DdgkvnsHjM', category: '经典圣诗' },
  { id: 'praise-to-the-lord-en', title: 'Praise To The Lord The Almighty', subtitle: '赞美全能真神', artist: 'CelebratingHolidays', youtubeId: 'BNq0WtMSmIY', category: '经典圣诗' },
  { id: 'joyful-joyful-en', title: 'Joyful Joyful We Adore Thee', subtitle: '快乐崇拜', artist: 'Reawaken Hymns', youtubeId: '2yZVweZ2Cvg', category: '经典圣诗' },
  { id: 'thousand-tongues-en', title: 'O For A Thousand Tongues To Sing', subtitle: '千口万舌颂扬', artist: 'Martijn de Groot', youtubeId: 'nx0rCabJ16c', category: '经典圣诗' },
  { id: 'when-i-survey-en', title: 'When I Survey The Wondrous Cross', subtitle: '我每逢举目十架', artist: 'Northern Baptist Association', youtubeId: '4_fvFfPqjO4', category: '经典圣诗' },
  { id: 'guide-me-en', title: 'Guide Me O Thou Great Jehovah', subtitle: '引导我大能耶和华', artist: 'Martijn de Groot', youtubeId: 'K5uwi04ttjA', category: '经典圣诗' },
  { id: 'blessed-be-name-lord-en', title: 'Blessed Be The Name Of The Lord', subtitle: '主名当受赞美', artist: 'DonMoenTV', youtubeId: 'R-FeJoikiFs', category: '敬拜诗歌' },
  { id: 'what-a-day-en', title: 'What A Day That Will Be', subtitle: '那日何等美好', artist: 'Country Rebel', youtubeId: 'Dx2Kb2Nwq2Y', category: '经典圣诗' },
  { id: 'power-in-the-blood-en', title: 'There Is Power In The Blood', subtitle: '宝血权能', artist: 'Growing Deep And Strong', youtubeId: 'JucSDbEak2M', category: '经典圣诗' },
  { id: 'blessed-redeemer-en', title: 'Blessed Redeemer', subtitle: '荣耀救主', artist: 'Daniel Baptist', youtubeId: 'mcGaG7vPdCc', category: '经典圣诗' },
  { id: 'decided-follow-jesus-en', title: 'I Have Decided To Follow Jesus', subtitle: '我已决定跟随耶稣', artist: 'Lydia Walker', youtubeId: 'L7XHeCZB5KU', category: '福音诗歌' },
  { id: 'just-as-i-am-en', title: 'Just As I Am', subtitle: '照我本相', artist: 'VagleBrothers', youtubeId: '7lxqhPC1mNA', category: '福音诗歌' },
  { id: 'hallelujah-what-a-savior-en', title: 'Hallelujah What A Savior', subtitle: '哈利路亚何等救主', artist: 'SE Samonte', youtubeId: 'MWOvD06hJqM', category: '经典圣诗' },
  { id: 'rejoice-lord-is-king-en', title: 'Rejoice The Lord Is King', subtitle: '欢欣主为王', artist: 'Martijn de Groot', youtubeId: 'WFYMhF2GA4E', category: '经典圣诗' },
  { id: 'my-jesus-i-love-thee-en', title: 'My Jesus I Love Thee', subtitle: '我爱主耶稣', artist: 'Extended Life Worship', youtubeId: 'xvOpNk4jVis', category: '经典圣诗' },
  { id: 'immortal-invisible-en', title: 'Immortal Invisible God Only Wise', subtitle: '永生全能无形真神', artist: 'yes', youtubeId: 'PS3QinSmPHI', category: '经典圣诗' },
  { id: 'o-sacred-head-en', title: 'O Sacred Head Now Wounded', subtitle: '受伤的圣首', artist: 'Hymns of Grace', youtubeId: 'wcrS8rFWMXQ', category: '经典圣诗' },
  { id: 'christ-lord-risen-en', title: 'Christ The Lord Is Risen Today', subtitle: '基督今日已复活', artist: 'John JP Patterson', youtubeId: '15dmjnB8FZU', category: '经典圣诗' },
  { id: 'my-hope-is-built-en', title: 'My Hope Is Built', subtitle: '我望所建立', artist: 'First Presbyterian Church of Bordentown', youtubeId: 'nwfM6xLH-vQ', category: '经典圣诗' },
  { id: 'as-the-deer-en', title: 'As The Deer', subtitle: '如鹿渴慕溪水', artist: 'The Worship Initiative', youtubeId: 'sVoQjxVGy-0', category: '敬拜诗歌' },
  { id: 'he-leadeth-me-en', title: 'He Leadeth Me', subtitle: '主领我', artist: 'Rosemary Siemens', youtubeId: 'eARj8qKkV2E', category: '经典圣诗' },
  { id: 'softly-tenderly-en', title: 'Softly And Tenderly', subtitle: '柔声呼唤', artist: 'SE Samonte', youtubeId: 'Qf_glkmbNbQ', category: '福音诗歌' },
  { id: 'near-the-cross-en', title: 'Near The Cross', subtitle: '靠近十架', artist: 'CelebratingHolidays', youtubeId: 'Xrmlv806bGM', category: '经典圣诗' },
  { id: 'pass-me-not-en', title: 'Pass Me Not O Gentle Savior', subtitle: '莫把我弃掉', artist: 'Worship Video', youtubeId: 'Br8c0Kkx6vs', category: '经典圣诗' },
  { id: 'love-to-tell-story-en', title: 'I Love To Tell The Story', subtitle: '我爱传讲主故事', artist: 'GaitherVEVO', youtubeId: 'OrCpKa_xOcE', category: '经典圣诗' },
  { id: 'standing-on-promises-en', title: 'Standing On The Promises', subtitle: '站在应许上', artist: 'Neil and Lisa Music Ministry', youtubeId: 'QvBlrooUszQ', category: '经典圣诗' },
  { id: 'blessed-be-tie-en', title: 'Blessed Be The Tie That Binds', subtitle: '团契相爱歌', artist: 'Gryphon Hall', youtubeId: 'TQ0Epw1rwbc', category: '经典圣诗' },
  { id: 'love-divine-en', title: 'Love Divine All Loves Excelling', subtitle: '神圣大爱超凡爱', artist: 'Rowland H. Pritchard - Topic', youtubeId: 'TQrNMJrgbyM', category: '经典圣诗' },
  { id: 'deep-deep-love-en', title: 'O The Deep Deep Love Of Jesus', subtitle: '深哉主爱', artist: 'tiffanyrocket', youtubeId: 'dPXapfFfesA', category: '敬拜诗歌' },
  { id: 'children-of-god-en', title: 'Children of God', subtitle: '神的儿女', artist: 'PhilWickhamVEVO', youtubeId: 'eSzD0opaCwE', category: '敬拜诗歌' },
  { id: 'yes-i-will-en', title: 'Yes I Will', subtitle: '我愿意', artist: 'Vertical Worship', youtubeId: 'NrTv39-lG4M', category: '敬拜诗歌' },
  { id: 'thank-you-jesus-blood-en', title: 'Thank You Jesus For The Blood', subtitle: '感谢耶稣的宝血', artist: 'Charity Gayle', youtubeId: 'dhU-Omwg2rU', category: '敬拜诗歌' },
  { id: 'gratitude-en', title: 'Gratitude', subtitle: '感恩', artist: 'Brandon Lake', youtubeId: 'dQdfs5S6jyA', category: '赞美诗歌' },
  { id: 'holy-forever-en', title: 'Holy Forever', subtitle: '永远圣洁', artist: 'ChrisTomlinVEVO', youtubeId: 'IkHgxKemCRk', category: '敬拜诗歌' },
  { id: 'same-god-en', title: 'Same God', subtitle: '同一位神', artist: 'Elevation Worship', youtubeId: 'LawxIZE9ePE', category: '敬拜诗歌' },
  { id: 'ning-yuan-you-yesu', title: '我寧願有耶穌', subtitle: 'I\'d Rather Have Jesus', artist: '二人餘木', youtubeId: 'j90rRBg3-v8', category: '敬拜诗歌' },
  { id: 'shen-ni-zai-nali', title: '神啊你在哪裡', subtitle: 'God Where Are You', artist: '讚美之泉 Stream Of Praise Music Ministries', youtubeId: 'IKGazOdWmH4', category: '敬拜诗歌' },
  { id: 'zhu-wo-dao-ni-mianqian', title: '主啊我到你面前', subtitle: 'Lord I Come Before You', artist: 'TK Christian TV', youtubeId: 'Bvv3XiWrmsA', category: '敬拜诗歌' },
  { id: 'yi-sheng-ai-ni', title: '一生愛你', subtitle: 'Love You All My Life', artist: '讚美之泉 Stream Of Praise Music Ministries', youtubeId: 'fgHBHUPiaJI', category: '敬拜诗歌' },
  { id: 'zhankai-qingchen', title: '展開清晨的翅膀', subtitle: 'Spread the Wings of Morning', artist: '讚美之泉 Stream Of Praise Music Ministries', youtubeId: 'v2jhUrdN-dU', category: '赞美诗歌' },
  { id: 'wo-yao-xiang-shan-jumu', title: '我要向山舉目', subtitle: 'I Will Lift Up My Eyes', artist: '讚美之泉 Stream Of Praise Music Ministries', youtubeId: 'HfE3WNcdDTk', category: '赞美诗歌' },
  { id: 'yun-shang-taiyang', title: '雲上太陽', subtitle: 'Sun Above the Clouds', artist: '讚美之泉 Stream Of Praise Music Ministries', youtubeId: '61e4JlANH2Q', category: '赞美诗歌' },
  { id: 'gu-zhong-baihehua', title: '谷中百合花', subtitle: 'Lily of the Valley', artist: 'Roni Songbook', youtubeId: 'YofWQiepn18', category: '经典圣诗' },
  { id: 'yesu-qimiao-jiuen', title: '耶穌奇妙的救恩', subtitle: 'Wonderful Grace of Jesus', artist: '曾远山', youtubeId: 'UL9RmrjFyzA', category: '经典圣诗' },
  { id: 'zhu-dao-wen-sop', title: '主禱文', subtitle: 'The Lord\'s Prayer', artist: '讚美之泉 Stream Of Praise Music Ministries', youtubeId: 'L04ZzS43PRA', category: '敬拜诗歌' },
  { id: 'ganen-de-lei', title: '感恩的淚', subtitle: 'Tears of Gratitude', artist: 'vw worship', youtubeId: 'jtvr_P1jlrg', category: '敬拜诗歌' },
  { id: 'zhu-yongyuan-yu-wo-tongzai', title: '主你永遠與我同在', subtitle: 'Lord You Are With Me Forever', artist: 'Joshua Band 約書亞樂團', youtubeId: 'CROZvDdZ1FU', category: '敬拜诗歌' },
  { id: 'shi-wo-zuo-heping-zhizi', title: '使我作你和平之子', subtitle: 'Make Me a Channel of Your Peace', artist: 'Gear Up Studios Ltd', youtubeId: 'rpMxXhFFDr4', category: '敬拜诗歌' },
  { id: 'zhu-wo-yaoqing-ni', title: '主我邀請你', subtitle: 'Lord I Invite You', artist: '小羊詩歌', youtubeId: 'S3t5Y5_0BLU', category: '敬拜诗歌' },
  { id: 'quanxin-de-ni', title: '全新的你', subtitle: 'A Brand New You', artist: '讚美之泉 Stream Of Praise Music Ministries', youtubeId: 'T06B5lYsHV0', category: '福音诗歌' },
  { id: 'tiantang-jiushi-zheyang', title: '天堂就是這樣', subtitle: 'Heaven Is Like This', artist: '讚美之泉 Stream Of Praise Music Ministries', youtubeId: 'seeOiwBe6bs', category: '敬拜诗歌' },
  { id: 'weiyo-yesu-sop', title: '唯有耶穌', subtitle: 'Only Jesus', artist: '讚美之泉 Stream Of Praise Music Ministries', youtubeId: '4j8abyGAmj0', category: '敬拜诗歌' },
  { id: 'yimanuli-lalin', title: '以馬內利來臨', subtitle: 'O Come O Come Emmanuel', artist: '小麻雀诗歌', youtubeId: 'PkhEVZ-Cu2M', category: '经典圣诗' },
  { id: 'shangdi-nenggou', title: '上帝能夠', subtitle: 'God Is Able', artist: '泥土音樂Clay Music', youtubeId: '96no89q4Wik', category: '赞美诗歌' },
  { id: 'eternal-father-en', title: 'Eternal Father Strong to Save', subtitle: '永恒的父坚固拯救', artist: 'opatriamia', youtubeId: 'BjcSpCSUjdk', category: '经典圣诗' },
  { id: 'all-creatures-en', title: 'All Creatures of Our God and King', subtitle: '万物的主宰', artist: 'SovereignGraceMusic', youtubeId: 'MUZD0hgtSgE', category: '经典圣诗' },
  { id: 'how-firm-foundation-en', title: 'How Firm A Foundation', subtitle: '坚固根基', artist: 'Hymns of Grace', youtubeId: 'ZXjk9l-M9uU', category: '经典圣诗' },
  { id: 'o-worship-the-king-en', title: 'O Worship The King', subtitle: '敬拜尊崇大君王', artist: 'Martijn de Groot', youtubeId: 'u0a1Pq9avbg', category: '经典圣诗' },
  { id: 'o-god-our-help-en', title: 'O God Our Help In Ages Past', subtitle: '千古保障', artist: 'Martijn de Groot', youtubeId: 'yKP_XxCBDZY', category: '经典圣诗' },
  { id: 'for-all-the-saints-en', title: 'For All The Saints', subtitle: '万圣颂', artist: 'MetzgerMusic', youtubeId: 'm7X0ImfPLiQ', category: '经典圣诗' },
  { id: 'rather-have-jesus-en', title: 'I\'d Rather Have Jesus', subtitle: '我宁愿有耶稣', artist: 'VCB Home of Gospel Music', youtubeId: 'oHg-o2eGzM4', category: '经典圣诗' },
  { id: 'and-can-it-be-en', title: 'And Can It Be', subtitle: '奇哉此事怎能如此', artist: 'fabioramsay', youtubeId: 'sQeIGbKqiw8', category: '经典圣诗' },
  { id: 'take-my-life-en', title: 'Take My Life And Let It Be', subtitle: '献上我生命', artist: 'Islington Baptist Church', youtubeId: 'lQ93HVuYd5Y', category: '经典圣诗' },
  { id: 'i-am-thine-en', title: 'I Am Thine O Lord', subtitle: '亲近主', artist: 'Hayes Barton Baptist Church', youtubeId: 'EnPeMwO-iio', category: '经典圣诗' },
  { id: 'savior-shepherd-en', title: 'Savior Like a Shepherd Lead Us', subtitle: '慈牧领导', artist: 'Hymns of Grace', youtubeId: 'yJvtPgekH0o', category: '经典圣诗' },
  { id: 'day-by-day-en', title: 'Day By Day', subtitle: '日日更新', artist: 'Hymns AboutHIM', youtubeId: 'AzrhqjzQCi4', category: '经典圣诗' },
  { id: 'all-to-jesus-en', title: 'All To Jesus I Surrender', subtitle: '完全献上', artist: 'Praise Adonai', youtubeId: 'SW8EA7DEQ2M', category: '福音诗歌' },
  { id: 'fathers-world-en', title: 'This Is My Father\'s World', subtitle: '天父世界', artist: 'Hymns of Grace', youtubeId: '-y93uhtTibM', category: '经典圣诗' },
  { id: 'onward-christian-en', title: 'Onward Christian Soldiers', subtitle: '基督精兵前进', artist: 'Christian Sermons and Audio Books', youtubeId: 'RC1Pn4V2WDg', category: '经典圣诗' },
  { id: 'faith-looks-up-en', title: 'My Faith Looks Up To Thee', subtitle: '我信仰仰望你', artist: 'Martijn de Groot', youtubeId: 'jeMcpnYLwJg', category: '经典圣诗' },
  { id: 'lead-kindly-light-en', title: 'Lead Kindly Light', subtitle: '慈光引领', artist: 'Chet Valley Hymns and Songs', youtubeId: '1f4z1fnUqXM', category: '经典圣诗' },
  { id: 'face-to-face-en', title: 'Face To Face With Christ My Savior', subtitle: '面对面与基督同在', artist: 'SE Samonte', youtubeId: 'SuLig-W4wSU', category: '经典圣诗' },
];

// ============================================
// English Hymns / 英文经典圣诗
// ============================================
