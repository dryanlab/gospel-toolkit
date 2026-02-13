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
  { id: 'zhe-yi-sheng-2', title: '這一生最美的祝福 The Gift of Knowing You', subtitle: 'The Gift of Knowing You', artist: '讚美之泉 Stream Of Praise Music Ministries', youtubeId: 'tPf7Ig1ebL4', category: '赞美诗歌' },
  { id: 'ru-ying-zhan-chi', title: '如鹰展翅上腾 Soar on Wings Like an Eagle', subtitle: 'Soar on Wings Like an Eagle', artist: 'zfljsophia', youtubeId: 'mFbmgTlIYG8', category: '赞美诗歌' },
  { id: 'medley-praise-1', title: '感謝天父/謝謝祢/自由地歌唱/恩典之路/新耶路撒冷', artist: '讚美之泉 Stream Of Praise Music Ministries', youtubeId: 'teqg6ZIkuwk', category: '赞美诗歌' },
  { id: 'medley-praise-2', title: '將天敞開/行神蹟的神/一生敬拜祢/這是聖潔之地', artist: '讚美之泉 Stream Of Praise Music Ministries', youtubeId: 'kxGQ7LV4DKQ', category: '赞美诗歌' },
  { id: 'ni-shi-pei-de', title: '祢是配得 You Are Worthy', subtitle: 'You Are Worthy', artist: '讚美之泉 Stream of Praise - Topic', youtubeId: 'xdoIC_M8EmY', category: '赞美诗歌' },
  { id: 'jiao-wo-tai-qi-tou', title: '叫我抬起頭的神 The Lifter of My Head', artist: '讚美之泉 Stream Of Praise Music Ministries', youtubeId: 'ouG12IsjTNU', category: '赞美诗歌' },
  { id: 'shi-jia-de-ai', title: '十架的愛 Great Is Your Love', subtitle: 'Great Is Your Love', artist: '讚美之泉 Stream of Praise - Topic', youtubeId: 'npXSsd_TO4A', category: '赞美诗歌' },
  { id: 'xiang-zhu-huan-hu', title: '向主欢呼 向主歡呼 Shout to the Lord', subtitle: 'Shout to the Lord', artist: 'Praise Pinyin', youtubeId: 'ln2grj_HKis', category: '赞美诗歌' },
  { id: 'huo-zhe-wei-yao', title: '活著為要敬拜祢 I Live To Worship You', subtitle: 'I Live To Worship You', artist: '讚美之泉 Stream of Praise - Topic', youtubeId: '7PBF9DzHVQU', category: '赞美诗歌' },
  { id: 'zhu-ni-shi-wo-li-liang', title: '主祢是我力量 You Are My Strength', subtitle: 'You Are My Strength', artist: '讚美之泉 Stream of Praise - Topic', youtubeId: 'OvsUvEI029E', category: '赞美诗歌' },
  { id: 'ri-ri-ye-ye', title: '日日夜夜 Day And Night', subtitle: 'Day And Night', artist: '讚美之泉 Stream of Praise - Topic', youtubeId: '1Xhf1fJDNmk', category: '赞美诗歌' },
  { id: 'wo-yao-xiang-gaoshan', title: '我要向高山舉目 Lift My Eyes to the Hills', subtitle: 'Lift My Eyes to the Hills', artist: '讚美之泉 Stream Of Praise Music Ministries', youtubeId: 'bhS0D7Gd-Ek', category: '赞美诗歌' },
  { id: 'ni-zuo-zhe-wei-wang', title: '你坐著為王', artist: '約書亞樂團', youtubeId: 'nuK3oi7-YoM', category: '赞美诗歌' },
  { id: 'ye-su-ni-yi-de-sheng', title: '耶穌祢已得勝', artist: '天韻合唱團 Heavenly Melody', youtubeId: 'cwURDf2TJj4', category: '赞美诗歌' },
  { id: 'fu-xing-wo', title: '《復興我》Redeem me', subtitle: 'Redeem Me', artist: '基恩敬拜 Amazing Grace Worship', youtubeId: 'R5lI1X1kyQE', category: '赞美诗歌' },
  { id: 'zhan-kai-shu-tian', title: '展開屬天的翅膀-以斯拉', artist: 'joehuang90', youtubeId: '6gP6-g_BbWA', category: '赞美诗歌' },
  { id: 'chang-yi-shou-tian-shang', title: '唱一首天上的歌', artist: 'Andrew Vlogs', youtubeId: 'ZSOYluQXi5o', category: '赞美诗歌' },
  { id: 'yi-shou-zan-mei', title: '一首讚美的詩歌', artist: '讚美之泉', youtubeId: 'b2ikeCRKTwQ', category: '赞美诗歌' },
  { id: 'you-yi-wei-shen', title: '有一位神 There Is A God', subtitle: 'There Is A God', artist: '讚美之泉 Stream Of Praise Music Ministries', youtubeId: 'b3oivk4W7EY', category: '赞美诗歌' },
  { id: 'ye-he-hua-ni-shi-wo-de-shen', title: '耶和華祢是我的神 Jehovah, You Are My God', subtitle: 'Jehovah You Are My God', artist: '讚美之泉 Stream Of Praise Music Ministries', youtubeId: 'y3QzV2WE-qw', category: '赞美诗歌' },
  { id: 'zan-mei-zhi-quan', title: '讚美之泉 Stream of Praise', subtitle: 'Stream of Praise', artist: '讚美之泉 Stream Of Praise Music Ministries', youtubeId: 'x-DysGdCg4k', category: '赞美诗歌' },
  { id: 'ye-he-hua-ni-zhen-wei-da', title: '耶和華祢真偉大 Jehovah how great you are', subtitle: 'Jehovah How Great You Are', artist: '泥土音樂Clay Music', youtubeId: 'vw1g-32Po6I', category: '赞美诗歌' },
  { id: 'man-you-neng-li', title: '滿有能力 I Am Strengthened in Him', subtitle: 'I Am Strengthened in Him', artist: '讚美之泉 Stream Of Praise Music Ministries', youtubeId: 'uTGPl8f-reQ', category: '赞美诗歌' },
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
  { id: 'medley-worship-1', title: '寶貴十架  我知誰掌管明天 住在你裡面 煉淨我', artist: '蘇江村Martin', youtubeId: 'q5lFordsl9Y', category: '敬拜诗歌' },
  { id: 'yuan-ni-de-hua', title: '願你的話／在你同在裡   mp4', artist: '愛敬拜', youtubeId: 'KLayUbTJLAw', category: '敬拜诗歌' },
  { id: 'bao-gui-shi-jia', title: '寶貴十架 Precious Cross', subtitle: 'Precious Cross', artist: '讚美之泉 Stream of Praise - Topic', youtubeId: 'T7SrzqlV9NY', category: '敬拜诗歌' },
  { id: 'he-deng-en-dian', title: '何等恩典 How Could It Be', subtitle: 'How Could It Be', artist: '讚美之泉 Stream of Praise - Topic', youtubeId: 'i4gBjSJGkOA', category: '敬拜诗歌' },
  { id: 'neng-bu-neng', title: '能不能 Let Me Stay', subtitle: 'Let Me Stay', artist: '讚美之泉 Stream of Praise - Topic', youtubeId: 'AA-KeICAUGA', category: '敬拜诗歌' },
  { id: 'wo-de-sheng-ming', title: '我的生命獻給祢 I Will Offer You My Life', subtitle: 'I Will Offer You My Life', artist: '讚美之泉 Stream of Praise - Topic', youtubeId: 'RSDdykHp-Wc', category: '敬拜诗歌' },
  { id: 'wo-de-shen-wo-jing-bai', title: '我的神我敬拜祢 My Lord, I Worship You', subtitle: 'My Lord I Worship You', artist: 'Praise Pinyin', youtubeId: 'kdPRftyhEVc', category: '敬拜诗歌' },
  { id: 'qing-qing-ting', title: '輕輕聽', artist: '讚美之泉', youtubeId: 'aXIMuC0Y08U', category: '敬拜诗歌' },
  { id: 'zhen-guang', title: '真光', artist: '讚美之泉', youtubeId: 'l4Dx0hxxAHs', category: '敬拜诗歌' },
  { id: 'quan-ran-wei-ni-1', title: '全然為祢 All For You, Lord', subtitle: 'All For You Lord', artist: 'Scarlett Wang', youtubeId: 'xSAN85jWzOQ', category: '敬拜诗歌' },
  { id: 'quan-ran-wei-ni-2', title: '全然為你', artist: '生命河', youtubeId: 'FcEwLmR78jQ', category: '敬拜诗歌' },
  { id: 'ni-de-ai-bu-li-bu-qi', title: '你的愛不離不棄', artist: '生命河', youtubeId: 'LfDwY3xU94E', category: '敬拜诗歌' },
  { id: 'yu-jian-ni', title: '遇見你 Here In Your Presence', subtitle: 'Here In Your Presence', artist: '生命河 ROLCCmedia', youtubeId: 'XdXopI_eld4', category: '敬拜诗歌' },
  { id: 'wo-an-ran-ju-zhu', title: '我安然居住 / Dwelling In Peace', subtitle: 'Dwelling In Peace', artist: 'Joshua Band 約書亞樂團', youtubeId: 'kNOuWvdPgiA', category: '敬拜诗歌' },
  { id: 'xiang-qi-ni', title: '想起祢/ When I Think of You,', subtitle: 'When I Think of You', artist: '泥土音樂Clay Music', youtubeId: 'AE7RhcMjgWA', category: '敬拜诗歌' },
  { id: 'wo-xiang-ni-dao-gao', title: '我向祢禱告', artist: 'Son Music 新音樂敬拜創作', youtubeId: '-IVXs-rBonc', category: '敬拜诗歌' },
  { id: 'ni-shi-wo-de-yi-qie', title: '祢是我的一切 You Are My All In All', subtitle: 'You Are My All In All', artist: 'Praise Pinyin', youtubeId: 'Qc6vnPPM-JE', category: '敬拜诗歌' },
  { id: 'qing-jian-gu-wo', title: '請堅固我', subtitle: 'Lord Please Strengthen Me', artist: '基恩敬拜 Amazing Grace Worship', youtubeId: 's0h93HvF3aY', category: '敬拜诗歌' },
  { id: 'ci-wo-li-liang', title: '《賜我力量》Give me strength', subtitle: 'Give Me Strength', artist: '基恩敬拜 Amazing Grace Worship', youtubeId: '-1hotIathug', category: '敬拜诗歌' },
  { id: 'you-ni-tong-xing', title: '《有祢同行》With You by my side', subtitle: 'With You By My Side', artist: '基恩敬拜 Amazing Grace Worship', youtubeId: '2KM6F_vQSD0', category: '敬拜诗歌' },
  { id: 'ai-zai-ruan-ruo-zhong', title: '愛在軟弱中盛放_以愛還愛', artist: 'Jennifer Poon', youtubeId: '7zxCBrAH1bE', category: '敬拜诗歌' },
  { id: 'wo-de-ling-zan-mei-ni', title: '我的灵赞美祢 我的靈讚美袮 10,000 Reasons', subtitle: '10000 Reasons', artist: 'Praise Pinyin', youtubeId: 'X53Yz6nJjSk', category: '敬拜诗歌' },
  { id: '10000-reasons-en', title: 'Matt Redman', subtitle: '一萬個理由', artist: 'MattRedmanVEVO', youtubeId: 'XtwIT8JjddM', category: '敬拜诗歌' },
  { id: 'pei-wo-zou-guo', title: '陪我走過春夏秋冬', artist: '小羊詩歌 - Topic', youtubeId: 'WoXD_VzfKAk', category: '敬拜诗歌' },
  { id: 'yi-sheng-yi-shi', title: '一生一世', artist: 'Grace Huang', youtubeId: 'dJ3vwSLf940', category: '敬拜诗歌' },
  { id: 'kong-gu-de-hui-yin', title: '《空谷的回音》 赞美诗、雅歌 Grace Music', artist: '神国赞美诗God\'s love', youtubeId: '6QkIgITa33U', category: '敬拜诗歌' },
  { id: 'wo-zai-zhe-li-jing-bai', title: '我在這裡敬拜  Here I am to Worship', subtitle: 'Here I Am to Worship', artist: 'JakeSD19', youtubeId: '8wo_DqKGmwM', category: '敬拜诗歌' },
  { id: 'ai-ni-dao-di', title: '愛祢到底', subtitle: 'Love You til The End', artist: '泥土音樂Clay Music', youtubeId: 'vR8q7WUGjHQ', category: '敬拜诗歌' },
  { id: 'wo-de-yi-sheng-zai-ni-shou-zhong', title: '我的一生在你手中', artist: '讚美之泉', youtubeId: 'W9bhn7NrXdQ', category: '敬拜诗歌' },
  { id: 'yi-zhi-yao-you-ni', title: '只要有祢在我左右 If My God Is With Me', subtitle: 'If My God Is With Me', artist: '讚美之泉 Stream of Praise - Topic', youtubeId: 'ULWAelqzXgo', category: '敬拜诗歌' },
  { id: 'qian-wo-de-shou', title: '牽我的手', artist: '讚美之泉', youtubeId: 'u8JMcFjT1tY', category: '敬拜诗歌' },
  { id: 'wei-he-dui-wo-zhe-me-hao', title: '為何對我這麼好', artist: '讚美之泉', youtubeId: 'dYghBJb9rDM', category: '敬拜诗歌' },
  { id: 'zhu-dao-wen', title: '主禱文 The Lord\'s Prayer', subtitle: "The Lord's Prayer", artist: 'HALLELUYA MEDIA', youtubeId: 'WSzdU3hZw2c', category: '敬拜诗歌' },
  { id: 'yi-gan-en-wei-ji', title: '『以感恩為祭 』 團契遊樂園5 應許', artist: 'm2kmusic', youtubeId: 'ozRtnVOvYvM', category: '敬拜诗歌' },
  { id: 'yi-zhi-de-ai', title: '醫治的愛', subtitle: 'Healing Love', artist: '泥土音樂Clay Music', youtubeId: 'zdGb_4lziwc', category: '敬拜诗歌' },
  { id: 'en-dian-gou-yong', title: '恩典夠用 Sufficient Grace', subtitle: 'Sufficient Grace', artist: '泥土音樂Clay Music', youtubeId: 'p2feIz0Rprg', category: '敬拜诗歌' },
  { id: 'yuan-wo-de-pan-shi', title: '願我的磐石被人稱頌 Praise the Lord My Rock', subtitle: 'Praise the Lord My Rock', artist: '生命河 ROLCCmedia', youtubeId: 'Eja65j7SOUo', category: '敬拜诗歌' },
  { id: 'wu-jia-zhi-bao', title: '無價至寶 Priceless [約書亞大衛帳幕的榮耀專輯', subtitle: 'Priceless', artist: 'beLoved144', youtubeId: 'ymKB9XqkQuE', category: '敬拜诗歌' },
  { id: 'an-jing', title: '安靜 Be Still', subtitle: 'Be Still', artist: '讚美之泉 Stream Of Praise Music Ministries', youtubeId: 'Za9UdGa-P6g', category: '敬拜诗歌' },

  // ============================================
  // 福音诗歌 (Gospel Songs) — evangelistic, testimony, faith journey
  // ============================================
  { id: 'wo-men-cheng-wei-yi-jia-ren', title: '我們成為一家人', artist: '橄欖枝', youtubeId: 'B_EkHGfZeKc', category: '福音诗歌' },
  { id: 'ye-he-hua-de-xin', title: '耶和华的心', artist: 'vw worship', youtubeId: 'dkPgc6rAMBU', category: '福音诗歌' },
  { id: 'fan-shi-du-you', title: '凡事都有神的美意', artist: '讚美之泉', youtubeId: 'e9KiGgpdM9M', category: '福音诗歌' },
  { id: 'jin-sheng-gen-sui', title: '今生跟随主耶稣', artist: '讚美之泉', youtubeId: 'BhLeSQeg_is', category: '福音诗歌' },
  { id: 'gan-xie-yi-sheng', title: '感謝一生有祢 Thank You For Being In My Life', subtitle: 'Thank You For Being In My Life', artist: '基恩敬拜 Amazing Grace Worship - Topic', youtubeId: 'g05K8bV7I2Y', category: '福音诗歌' },
  { id: 'yu-hou-de-tian-kong', title: '雨後的天空 After the rain', subtitle: 'After the Rain', artist: '泥土音樂Clay Music', youtubeId: 'ksANigSjZ-4', category: '福音诗歌' },
  { id: 'jiao-bu', title: '腳步 Footsteps', subtitle: 'Footsteps', artist: '泥土音樂Clay Music', youtubeId: 'Iz9Gr1ATrDo', category: '福音诗歌' },
  { id: 'zui-zhi-xin-de-peng-you', title: '最知心的朋友 My Dearest Friend 小敏', subtitle: 'My Dearest Friend', artist: '立約敬拜 Promise Worship', youtubeId: 'hpXn8646wA8', category: '福音诗歌' },
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
  { id: 'ruo-shi-you-ni', title: '若是有你在我生命中 If I have You in my life', artist: 'jossong', youtubeId: 'L74nyq-_lHk', category: '福音诗歌' },
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
  { id: 'wo-de-xin-qie-qie-ke-mu-ni', title: '我心切切渴慕祢 My Heart Shall Long For You', artist: '讚美之泉 Stream Of Praise Music Ministries', youtubeId: 'ygElrkZ0X9U', category: '敬拜诗歌' },
  { id: 'amazing-grace-english', title: 'Amazing Grace', subtitle: '英文版', artist: 'Gary Downey', youtubeId: 'CDdvReNKKuk', category: '经典圣诗' },

  // ============================================
  // 新增诗歌 — 覆盖缺失关键词
  // ============================================

  // 信心/信靠/faith/trust
  { id: 'xin-xin-de-lv-cheng', title: '信心的旅途', subtitle: 'Journey of Faith', artist: '天韻合唱團 Heavenly Melody', youtubeId: '7MfpK-fbF5Y', category: '福音诗歌' },
  { id: 'xin-kao-mei-yi-tian', title: '信靠每一句應許 Trusting in Your Promises', subtitle: 'Trust Day By Day', artist: '讚美之泉 Stream Of Praise Music Ministries', youtubeId: 'hQ6Uz6Uhesw', category: '敬拜诗歌' },
  { id: 'yong-xin-xin-zou', title: '《走在信心之路》福音詩歌2025', subtitle: 'Walk By Faith', artist: '恩典之歌 Songs of Grace', youtubeId: '5LyrF419eFw', category: '福音诗歌' },
  { id: 'xin-xin-de-dao-lu', title: '《信心之路》', subtitle: 'The Road of Faith', artist: '晨光恩典頌讚  Morning Grace Praise ', youtubeId: 'hYfSkObIJxw', category: '福音诗歌' },
  { id: 'wo-xin-kao-ni', title: '我信靠祢 / I Trust In You', subtitle: 'I Trust In You', artist: 'KUA GLOBAL 跨越', youtubeId: 'ZqxUPb3_phs', category: '敬拜诗歌' },

  // 创造/creation
  { id: 'chuang-zao-qi-miao', title: '美好的創造 Beautifully Made', subtitle: 'God of Wondrous Creation', artist: '讚美之泉 Stream Of Praise Music Ministries', youtubeId: '7mrMh_2tXCI', category: '赞美诗歌' },
  { id: 'da-zi-ran-song-zan', title: '大衛的豎琴療法', subtitle: 'Creation Sings', artist: '安然敬拜 Restful Worship For You', youtubeId: 'u9MHKjlp-8U', category: '赞美诗歌' },
  { id: 'how-great-thou-art', title: 'How Great Thou Art', subtitle: 'How Great Thou Art', artist: 'DrCheezyToe', youtubeId: 'Cc0QVWzCv9k', category: '经典圣诗' },
  { id: 'chuang-zao-zhu', title: '為榮耀的創造 Made For Your Glory', subtitle: 'Glorious Creator', artist: '讚美之泉 Stream Of Praise Music Ministries', youtubeId: 'q01p1cR7vQg', category: '赞美诗歌' },

  // 祈求
  { id: 'qi-qiu-sheng-ling', title: '懇求聖靈來 May Your Spirit Come', subtitle: 'Pray for the Spirit', artist: '新心音樂事工 New Heart Music Ministries', youtubeId: 'coE4rss9xYQ', category: '敬拜诗歌' },
  { id: 'qi-qiu-ni-jiang-lin', title: '這世代要呼求祢 Here We Stand', subtitle: 'Come Lord We Pray', artist: '讚美之泉 Stream Of Praise Music Ministries', youtubeId: '6wc9xUOO0HU', category: '敬拜诗歌' },
  { id: 'qian-cheng-qi-qiu', title: '台語詩歌 願  謝鴻文 專輯：願祢的國降臨', subtitle: 'Earnest Prayer', artist: 'Sean Tsai', youtubeId: 'sawuQJIIMtw', category: '敬拜诗歌' },

  // 天国/比喻/kingdom/parable
  { id: 'tian-guo-jin-le', title: '像極了天堂 / Just Like Heaven', subtitle: 'The Kingdom Is Near', artist: 'Joshua Band 約書亞樂團', youtubeId: '9vrMhDhATQ0', category: '福音诗歌' },
  { id: 'tian-guo-de-zi-min', title: '天國的子民 People of Heavenly Kingdom', subtitle: 'Citizens of the Kingdom', artist: '泥土音樂Clay Music', youtubeId: '_7tDHd3RqXU', category: '赞美诗歌' },
  { id: 'tian-guo-de-bi-yu', title: '天国的比喻', subtitle: 'Parables of the Kingdom', artist: '教委音乐', youtubeId: '-nU5PffoLOc', category: '福音诗歌' },
  { id: 'ba-fu', title: '八福 [Beatitudes]', subtitle: 'The Beatitudes', artist: '讚美之泉 Stream Of Praise Music Ministries', youtubeId: 'ED3-h7Cc_4s', category: '经典圣诗' },

  // 称谢
  { id: 'chen-xie-shang-zhu', title: '我要一心稱謝祢 Lord, I Praise with All of my Heart', subtitle: 'Give Thanks to the Lord', artist: '讚美之泉 Stream Of Praise Music Ministries', youtubeId: 'm3sn2txZ7EQ', category: '赞美诗歌' },
  { id: 'yi-gan-en-chen-xie', title: '當讚美進入祂的院', subtitle: 'Enter His Courts with Thanksgiving', artist: '基恩敬拜 Amazing Grace Worship', youtubeId: 'lO8q8JMjgxA', category: '赞美诗歌' },
  { id: 'dang-chen-xie-jin-ru', title: '当称谢进入他的门', subtitle: 'Come Into His Presence with Thanksgiving', artist: '基督教赞美诗-小草诗歌', youtubeId: 'yw1HBjtXw5M', category: '赞美诗歌' },

  // 圣灵/Spirit
  { id: 'sheng-ling-qin-zi-lai', title: '聖靈請祢來', subtitle: 'Holy Spirit Come', artist: '橄欖枝', youtubeId: 'ErFrK9nOTqc', category: '敬拜诗歌' },
  { id: 'sheng-ling-de-huo', title: '聖靈的火 Fire Come Down', subtitle: 'Fire of the Holy Spirit', artist: '讚美之泉 Stream Of Praise Music Ministries', youtubeId: 'pmSmBtZ9rNg', category: '赞美诗歌' },
  { id: 'sheng-ling-chong-man-wo', title: '聖靈充滿我', subtitle: 'Spirit Fill Me', artist: '橄欖枝', youtubeId: 'cpigl7Finfg', category: '敬拜诗歌' },
  { id: 'sheng-ling-yun-xing', title: '求聖靈運行', subtitle: 'Spirit Moving', artist: '祝瑞蓮 - 琴與爐敬拜 (神的帳幕團隊) Josie Chu - Naioth Ministries', youtubeId: 'WXytaQj5zfg', category: '敬拜诗歌' },
  { id: 'holy-spirit-en', title: '聖靈的江河 Holy Spirit, Come', subtitle: '聖靈', artist: '讚美之泉 Stream Of Praise Music Ministries', youtubeId: 'UqhiMn-LTxk', category: '敬拜诗歌' },

  // 教会/church
  { id: 'jiao-hui-yi-jia-ren', title: '一家人 One Family盛曉玫 Amy Sand', subtitle: 'Church Family', artist: '泥土音樂Clay Music', youtubeId: 'e9mm8AGCGZU', category: '福音诗歌' },
  { id: 'jiao-hui-gen-ji', title: '教會唯一的根基 The Church\'s One Foundation', subtitle: "The Church's One Foundation", artist: '新心音樂事工 New Heart Music Ministries', youtubeId: 'LIeUdvVO4t8', category: '经典圣诗' },
  { id: 'jian-li-jiao-hui', title: '興起建造', subtitle: 'Build Your Church', artist: '日光實驗室 Sunlight Lab', youtubeId: 'fh_VH_x1dgU', category: '赞美诗歌' },

  // 智慧/箴言/wisdom/proverb
  { id: 'zhi-hui-de-yuan-tou', title: '上帝的话·诗歌智慧书-上行的由来和操练', subtitle: 'Source of Wisdom', artist: ' Words of God 上帝的话', youtubeId: 'Q7aE2_T-asM', category: '福音诗歌' },
  { id: 'qiu-zhu-ci-zhi-hui', title: '人生的智慧', subtitle: 'Grant Me Wisdom Lord', artist: '天韻合唱團 Heavenly Melody', youtubeId: '3TtBuwndjCg', category: '敬拜诗歌' },
  { id: 'zhen-yan-jing-ju', title: '箴言 24:19 惡人終不得善報', subtitle: 'Proverbs in Song', artist: '金句詩歌 Bible Songs', youtubeId: 'qlxp1UFrLsA', category: '经典圣诗' },

  // 勇气/hero/courage
  { id: 'yong-qi', title: '基督教會歌曲《你得有心志有勇氣被成全》【詩歌MV】', subtitle: 'Courage', artist: '全能神教會', youtubeId: 'tfQ_bvQF9zI', category: '福音诗歌' },
  { id: 'zhu-shi-wo-de-yong-qi', title: '愛使我們勇敢 Love Can Make Us Brave', subtitle: 'Lord Is My Courage', artist: '讚美之泉 Stream Of Praise Music Ministries', youtubeId: 'Xokmm1h29w8', category: '福音诗歌' },
  { id: 'be-bold-be-strong', title: '勇敢走出去 Stepping Out', subtitle: 'Be Bold Be Strong', artist: '讚美之泉 Stream Of Praise Music Ministries', youtubeId: 'w43QIZ79YbY', category: '经典圣诗' },

  // 盼望/指望/hope/wait
  { id: 'pan-wang', title: '盼望/ Hope,', subtitle: 'Hope', artist: '泥土音樂Clay Music', youtubeId: 'sEUfnrbR_zo', category: '福音诗歌' },
  { id: 'huo-zhe-de-pan-wang', title: '永活盼望 / Living Hope', subtitle: 'A Living Hope', artist: 'KUA GLOBAL 跨越', youtubeId: 'KVDpKlkwDVc', category: '福音诗歌' },
  { id: 'zhi-wang-zai-yu-ni', title: '我的指望在乎祢 My Hope is in You', subtitle: 'My Hope Is In You', artist: '新心音樂事工 New Heart Music Ministries', youtubeId: '8r7BfF6fO7c', category: '敬拜诗歌' },
  { id: 'deng-hou-shen', title: '盛曉玫 泥土音樂 最適合安靜聆聽的詩歌 十首連續播放', subtitle: 'Wait Upon the Lord', artist: '泥土音樂Clay Music', youtubeId: '7j7I9Kmuo-4', category: '敬拜诗歌' },

  // 家庭/family
  { id: 'jia-ting-zhu-ai', title: '在主爱里曾欢然相聚', subtitle: 'Family In God\'s Love', artist: 'cai zi shi xuan', youtubeId: 'gopyfEhSL0w', category: '福音诗歌' },
  { id: 'ai-wo-jia-ting', title: '盛曉玫 詩歌默想 不變的愛  走出原生家庭的陰霾和過去的失敗', subtitle: 'Love My Family', artist: '泥土音樂Clay Music', youtubeId: '2X5UNRA_zxo', category: '福音诗歌' },
  { id: 'shen-ai-zhi-jia', title: '神的愛', subtitle: 'A Home of God\'s Love', artist: '全能神教會', youtubeId: 'cuIdRWARNRI', category: '福音诗歌' },

  // 保惠师/Comforter
  { id: 'bao-hui-shi', title: '保惠師（曲/詞：吳秉堅）', subtitle: 'The Comforter', artist: 'LCHS SF 路德會聖靈堂', youtubeId: 'CTIYqJbXtKo', category: '敬拜诗歌' },
  { id: 'sheng-ling-bao-hui-shi', title: '保惠師（曲/詞：吳秉堅）', subtitle: 'Come Holy Comforter', artist: 'LCHS SF 路德會聖靈堂', youtubeId: 'CTIYqJbXtKo', category: '敬拜诗歌' },
  { id: 'qiu-bao-hui-shi-lai', title: '保惠師已經來', subtitle: 'Come Comforter Spirit', artist: 'Teresa古今詩歌Hymns♬', youtubeId: 'XhZlxn0VdFs', category: '敬拜诗歌' },

  // 服事/事奉/serve/service
  { id: 'shi-feng-de-ren-sheng', title: '北820 大571 事奉乃是供应基督', subtitle: 'A Life of Service', artist: '生命诗歌享受学习', youtubeId: 'UNftQjf7d4w', category: '福音诗歌' },
  { id: 'fu-shi-ta', title: '事奉他越久越甘甜', subtitle: 'Serve Him', artist: '灵音之声 Voice of Spirit', youtubeId: 'eAmg1PWydTg', category: '赞美诗歌' },
  { id: 'yi-sheng-fu-shi-zhu', title: '《我要盡一生服事主》詩班獻詩- 紐約豐收靈糧堂', subtitle: 'Serve the Lord All My Life', artist: 'Harvest Church Of New York', youtubeId: '6k1U0irpbhk', category: '福音诗歌' },
  { id: 'le-yi-shi-feng', title: '當樂意事奉主', subtitle: 'Willing to Serve', artist: 'Century praise piano', youtubeId: '-2jGf_vtQa8', category: '福音诗歌' },

  // 诗篇/psalm
  { id: 'shi-pian-23', title: '詩篇二十三篇 Psalm 23', subtitle: 'Psalm 23 The Lord Is My Shepherd', artist: 'HALLELUYA MEDIA', youtubeId: 'OVJguY-A4LU', category: '经典圣诗' },
  { id: 'shi-pian-91', title: '詩篇91感動人心演唱', subtitle: 'Psalm 91', artist: 'Rachel Lee Prayers', youtubeId: 'lI5Qnc7LrSI', category: '经典圣诗' },
  { id: 'shi-pian-121', title: '青草原詩歌', subtitle: 'Psalm 121 I Lift Up My Eyes', artist: '基督徒青草原iGreenpastures', youtubeId: 'q913II9sHLA', category: '经典圣诗' },
  { id: 'shi-pian-100', title: '詩篇100 篇', subtitle: 'Psalm 100 Shout For Joy', artist: '葡萄樹音樂事工The Vine Music Ministry', youtubeId: 'pedTgAQT51Q', category: '经典圣诗' },

  // 悔改/饶恕/repent/forgive
  { id: 'hui-gai-de-xin', title: '精選詩歌', subtitle: 'A Repentant Heart', artist: 'C3靈修網路聖經學院', youtubeId: 'ub2XraD4h8c', category: '敬拜诗歌' },
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
  { id: 'zheng-jiu-de-shen', title: '基督教會歌曲《神拯救人的心不變》【詩歌MV】', subtitle: 'God Who Delivers', artist: '全能神教會', youtubeId: 'HsIFpLDkTYI', category: '赞美诗歌' },
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
  { id: 'because-he-lives', title: 'Because He Lives • Congregational', subtitle: 'Because He Lives', artist: 'Daniel Baptist', youtubeId: 'djsCLieky6o', category: '经典圣诗' },
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
  { id: 'quan-neng-de-shen', title: '基督教會歌曲《體貼神的心意就能盡好本分》【詩歌MV】', subtitle: 'Almighty God', artist: '全能神教會', youtubeId: '9AkkZYf3S-A', category: '赞美诗歌' },
  { id: 'almighty-god-hymn', title: 'Almighty God, Thy Word is Cast', subtitle: '全能真神', artist: 'Stan Duncan', youtubeId: 'IkAcEYX5Bd0', category: '经典圣诗' },

  // grateful
  { id: 'gan-en-de-lei', title: '《感恩的泪》唱出心声，甘愿跟随', subtitle: 'Grateful', artist: '约3:16', youtubeId: 'TPiw33QHeaQ', category: '敬拜诗歌' },
  { id: 'grateful-hymn', title: '感恩有你', subtitle: 'A Grateful Heart', artist: '神国赞美诗God\'s love', youtubeId: 'ndAaI1SaiIg', category: '福音诗歌' },

  // 洁净 / pure
  { id: 'jie-jing-wo', title: '煉淨我 Cleanse Me, Lord', subtitle: 'Purify Me', artist: '讚美之泉 Stream Of Praise Music Ministries', youtubeId: '7GppzVMPoEo', category: '敬拜诗歌' },
  { id: 'qiu-zhu-jie-jing-wo-xin', title: '求你為我造清潔的心', subtitle: 'Create in Me a Pure Heart', artist: 'Alex Liu', youtubeId: '7od8lXWEUek', category: '敬拜诗歌' },
  { id: 'pure-in-heart', title: '清心的人真有福 Blessed Are the Pure In Heart', subtitle: '清心的人有福了', artist: 'Mandarin Baptist Church Media', youtubeId: 'i_78PTNehCQ', category: '经典圣诗' },

  // hero / 勇气
  { id: 'shen-shi-wo-de-hero', title: '榮耀之聲--14', subtitle: 'God Is My Hero', artist: '榮耀之聲', youtubeId: 'fVoDwFhhHqo', category: '赞美诗歌' },
  { id: 'yong-gan-de-xin', title: '勇敢的心', subtitle: 'A Heart of Courage', artist: '音樂無國界 ---  Music Without Borders', youtubeId: 'MuvF0CtMghM', category: '福音诗歌' },

  // promise / 应许
  { id: 'shen-de-ying-xu', title: '神的應許 It’s God’s Promise  小組敬拜用', subtitle: 'Standing on the Promises', artist: '生命河 ROLCCmedia', youtubeId: '9Tr-0l2DDTE', category: '经典圣诗' },
  { id: 'standing-on-promises', title: '堅立在應許上', subtitle: '站在神的應許上', artist: 'Teresa古今詩歌Hymns♬', youtubeId: 'qvZcsU2p-nA', category: '经典圣诗' },

  // 我是 (I am) / Jesus
  { id: 'ye-su-wo-de-zhu', title: '耶穌，我的耶穌 Jesus, My Jesus', subtitle: 'Jesus You Are', artist: '讚美之泉 Stream Of Praise Music Ministries', youtubeId: 'VG8nE8Ttyrk', category: '敬拜诗歌' },
  { id: 'wo-shi-sheng-ming-de-liang', title: '我主耶穌是生命水 I Am Feeding on the Living Bread', subtitle: 'I Am the Bread of Life', artist: '愛恩詩歌 EFCI Choirs', youtubeId: 'J1pFg-eBKVY', category: '福音诗歌' },
  { id: 'jesus-loves-me', title: 'Jesus Loves Me', subtitle: '耶穌愛我', artist: 'Listener Kids', youtubeId: 'owx3ao42kwI', category: '经典圣诗' },

  // freedom / 自由
  { id: 'zhen-zi-you', title: '在基督裡的真自由', subtitle: 'True Freedom', artist: 'Bread of Life Christchurch基督城靈糧堂', youtubeId: 'aNqO6WI_vaA', category: '赞美诗歌' },
  { id: 'freedom-is-here', title: '自由 @ 約書亞樂團', subtitle: '自由在這裡', artist: 'Wave of worship', youtubeId: 'Z269XUO7n-k', category: '赞美诗歌' },

  // gospel
  { id: 'chuan-fu-yin', title: '傳福音 Share the Gospel', subtitle: 'Go Tell the Gospel', artist: 'Journey of Songs 人生旅行曲', youtubeId: 'PycnCBFz8ok', category: '福音诗歌' },
  { id: 'fu-yin-de-da-neng', title: '福音使一切改變／The Gospel Changes Everything', subtitle: 'Power of the Gospel', artist: 'KUA GLOBAL 跨越', youtubeId: '9iYJpAYfZVU', category: '福音诗歌' },

  // 祷告 (more)
  { id: 'jiao-wo-dao-gao', title: '赞美诗275: 教我祷告', subtitle: 'Teach Me to Pray', artist: '基督教長老會新山聖光堂Holy Light Presbyterian Church', youtubeId: 'mTqSXlItUhU', category: '敬拜诗歌' },
  { id: 'dao-gao-de-da-jun', title: '禱告的大軍 A Praying Army', subtitle: 'Army of Prayer', artist: '讚美之泉 Stream Of Praise Music Ministries', youtubeId: 'fOOeufJyFXw', category: '赞美诗歌' },

  // 得胜 / risen / 复活
  { id: 'de-sheng-de-zhu', title: '得勝的宣告 You Are My Victory', subtitle: 'Victorious Lord Is Risen', artist: '讚美之泉 Stream Of Praise Music Ministries', youtubeId: 'h5YPo_MmBds', category: '赞美诗歌' },
  { id: 'christ-is-risen', title: 'CHRIST IS ARISEN INDEED!"', subtitle: '基督已復活', artist: 'Christculture777', youtubeId: 'OIkheaMujik', category: '经典圣诗' },

  // 圣诞 / 降生 / Christmas / Immanuel (more)
  { id: 'sheng-dan-kuai-le', title: '兩小時【安靜聖誕純音樂】', subtitle: 'Merry Christmas', artist: '讚美之泉 Stream Of Praise Music Ministries', youtubeId: 'Hva7sHjuGb8', category: '福音诗歌' },
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
  { id: 'tian-guo-jin-le', title: '像極了天堂 / Just Like Heaven', subtitle: 'The Kingdom Is Near', artist: 'Joshua Band 約書亞樂團', youtubeId: 'b7-rdpiSOy4', category: '赞美诗歌' },
  { id: 'seek-ye-first', title: 'Seek Ye First', subtitle: '先求天國', artist: 'Worship Videos (Louange et Adoration)', youtubeId: 'EsBpM9IcBts', category: '经典圣诗' },

  // grateful (need +1)
  { id: 'xian-shang-gan-en-2', title: '[ 獻上感恩 Give Thanks ]', subtitle: 'With a Grateful Heart', artist: '內巷 | withinlane', youtubeId: 'KDA7SbhwrX0', category: '敬拜诗歌' },

  // 慈爱 (need +2)
  { id: 'zhu-de-ci-ai', title: '祢的慈愛 Unfailing Love', subtitle: 'Lovingkindness of the Lord', artist: '讚美之泉 Stream Of Praise Music Ministries', youtubeId: 'CtEmco5_7Ys', category: '敬拜诗歌' },
  { id: 'ci-ai-de-fu', title: '慈愛天父 God of Mercy', subtitle: 'Loving Father', artist: '讚美之泉 Stream Of Praise Music Ministries', youtubeId: 'dBee0GgPzrU', category: '敬拜诗歌' },
  { id: 'great-is-thy-faithfulness-ci-ai', title: '主的慈愛永不斷絕', subtitle: 'Your Lovingkindness Never Ceases', artist: 'Sparrow', youtubeId: 'scPfD1cDfMk', category: '经典圣诗' },

  // 智慧 / wisdom / 箴言 / proverb (need +2)
  { id: 'qiu-zhu-ci-zhi-hui', title: '人生的智慧', subtitle: 'Grant Me Wisdom Lord', artist: '天韻合唱團 Heavenly Melody', youtubeId: 'gJ25zfi39Zs', category: '敬拜诗歌' },
  { id: 'zhen-yan-de-jiao-dao', title: '箴言.詩歌：《箴言序曲》  ； 一字不漏背聖經', subtitle: 'Teaching from Proverbs', artist: '靈航道', youtubeId: 'OT8kDrJI32I', category: '福音诗歌' },
  { id: 'wisdom-song', title: '智慧 Wisdom', subtitle: '智慧之歌', artist: '福音电台 Fuyindiantai FYDT', youtubeId: 'NLkyyLj2vgA', category: '经典圣诗' },

  // 圣洁 / holy (already 2, need +1)
  { id: 'holy-holy-holy-2', title: 'Holy, Holy 聖潔榮耀主', subtitle: '聖哉聖哉聖哉', artist: '讚美之泉 Stream Of Praise Music Ministries', youtubeId: 'CEcmjFlQTMA', category: '经典圣诗' },

  // 勇气 / hero / courage (need +1)
  { id: 'be-strong-courageous', title: '剛強壯膽 / Courage, Surge Out', subtitle: 'Courage in the Lord', artist: 'Joshua Band 約書亞樂團', youtubeId: '9tcUVDY7F0I', category: '赞美诗歌' },

  // 盼望 / hope / 指望 / wait (need +2)
  { id: 'wo-de-pan-wang', title: '《盼望在乎祢》All my hope is in You', subtitle: 'My Hope Is in You', artist: '基恩敬拜 Amazing Grace Worship', youtubeId: 'ldT0EZcUYyo', category: '敬拜诗歌' },
  { id: 'deng-hou-shen', title: '盛曉玫 泥土音樂 最適合安靜聆聽的詩歌 十首連續播放', subtitle: 'Wait for the Lord', artist: '泥土音樂Clay Music', youtubeId: 'cLjXQsomj6k', category: '敬拜诗歌' },
  { id: 'my-hope-is-built', title: '堅固磐石My Hope Is Built on Nothing Less', subtitle: '我的指望在於主', artist: 'Teresa古今詩歌Hymns♬', youtubeId: 'dM7yInyQqkk', category: '经典圣诗' },

  // cross (need +1)
  { id: 'the-old-rugged-cross-2', title: 'Alan Jackson', subtitle: '古舊十架', artist: 'GaitherVEVO', youtubeId: '-JS9P8d2iOc', category: '经典圣诗' },

  // 家庭 / family / home (need +2)
  { id: 'jia-ting-ji-tan', title: '家庭祭坛', subtitle: 'Family Altar at Home', artist: '主爱颂歌 | Hymn of the Lord\'s Love', youtubeId: 'vuea_MT4bBo', category: '敬拜诗歌' },
  { id: 'jia-shi-ai-zhi-wo', title: '為愛而生 Born to Love', subtitle: 'Home Sweet Home', artist: '讚美之泉 Stream Of Praise Music Ministries', youtubeId: 'hSYtcWLUcI8', category: '福音诗歌' },
  { id: 'jian-li-ji-du-hua-jia-ting', title: '建立屬神的家庭', subtitle: 'Build a Christian Family Home', artist: '大衛的琴 - David\'s Harp', youtubeId: 'Df9EqQHNIw0', category: '福音诗歌' },

  // 服事 / 事奉 / serve / service (need +1)
  { id: 'here-i-am-send-me', title: 'Here I am Lord with lyrics', subtitle: '我在這裡請差遣我', artist: 'Eric Tom', youtubeId: 'EcxOkht8w7c', category: '经典圣诗' },

  // praise (need +1 for psalms theme)
  { id: 'praise-the-lord', title: '每一次我讚美主 Every Time I Praise the Lord', subtitle: '讚美耶和華', artist: '生命河 ROLCCmedia', youtubeId: 'TW236bfzXkA', category: '经典圣诗' },
  { id: 'shi-pian-zan-mei', title: '詩篇頌唱', subtitle: 'Praise from the Psalms', artist: '讚美之聲', youtubeId: 'MWj8Dijy39c', category: '敬拜诗歌' },

  // 悔改 / repent / 饶恕 / forgive (need +1)
  { id: 'hui-gai-gui-xiang-zhu', title: '真實的悔改 Turn My Life To You', subtitle: 'Repent and Return', artist: '讚美之泉 Stream Of Praise Music Ministries', youtubeId: 'nMJ7VXOVjdQ', category: '福音诗歌' },
  { id: 'rao-shu-de-en', title: '【饶恕】(第一张福音音乐专辑 "主爱颂歌")', subtitle: 'The Grace to Forgive', artist: '主爱颂歌 | Hymn of the Lord\'s Love', youtubeId: 'VUqdHTx5bDQ', category: '敬拜诗歌' },

  // 八福 / blessed (need +2)
  { id: 'ba-fu-ge', title: '跟随动态简谱学唱诗歌《八福》同步歌词字幕', subtitle: 'The Beatitudes Song', artist: '阿林Alin', youtubeId: 'xKv8j1zTHLU', category: '福音诗歌' },
  { id: 'blessed-be-your-name', title: '頌讚歸於祢 Blessed Be Your Name', subtitle: '尊貴祢名', artist: 'Scarlett Wang', youtubeId: 'fGG7PPbKYlM', category: '赞美诗歌' },

  // 信实 / faithful (need +1)
  { id: 'xin-shi-de-shen', title: '《以耶和華為樂》Let\'s Take Delight In God 基恩敬拜 AGWMM Official MV', subtitle: 'Faithful God', artist: '基恩敬拜 Amazing Grace Worship', youtubeId: 'c1EBHuZsqsU', category: '敬拜诗歌' },

  // promise / 应许 (need +1)
  { id: 'every-promise', title: '在祢每个应许上 Every Promise of Your Word', subtitle: '祢話語的每個應許', artist: '娴的音乐', youtubeId: 'NWNLDEdDYso', category: '经典圣诗' },

  // 我是 / I am (need +2)
  { id: 'wo-shi-pu-tao-shu', title: '我是葡萄树 你们是枝子', subtitle: 'Jesus Said I Am', artist: 'Kenneth Soh', youtubeId: '0QddWSa8msA', category: '福音诗歌' },
  { id: 'wo-shi-hao-mu-ren', title: 'Shepherd / 好牧人', subtitle: 'I Am the Good Shepherd', artist: 'Joshua Band 約書亞樂團', youtubeId: 'EgvIpKpDVh8', category: '福音诗歌' },

  // 顺服 / obey / 遵行 / follow (need +1)
  { id: 'zun-xing-zhu-dao', title: '敬畏神、遵行祂的道、愛祂、盡心盡性事奉祂', subtitle: 'Walk in Obedience', artist: '小Liu陪你讀聖經', youtubeId: 'UIJi58uCXD0', category: '敬拜诗歌' },
  { id: 'i-will-follow', title: '我定意跟從祢 I Will Follow', subtitle: '我願跟隨', artist: '新心音樂事工 New Heart Music Ministries', youtubeId: 'Zc1_c11Rjqo', category: '赞美诗歌' },

  // 拯救 / deliver / freedom (need +1)
  { id: 'mighty-to-save', title: 'Mighty to Save', subtitle: '大能拯救', artist: 'Hadleigh Baptist Church', youtubeId: 'iCZ3Kcl4uEQ', category: '赞美诗歌' },

  // 使命 / mission / gospel (need +1)
  { id: 'shi-ming-song', title: '為榮耀的創造 Made For Your Glory', subtitle: 'The Mission', artist: '讚美之泉 Stream Of Praise Music Ministries', youtubeId: 'q01p1cR7vQg', category: '福音诗歌' },
  { id: 'go-light-your-world', title: '特别诗歌：Go Light Your World', subtitle: '傳福音使命', artist: '独一真神中文事工One True God Chinese Ministry', youtubeId: '9pHKJ5t54f8', category: '福音诗歌' },

  // 受难 / passion (need +1)
  { id: 'at-the-cross', title: '在十字架歌', subtitle: '在十架前', artist: '小麻雀诗歌', youtubeId: 'NWZIOw_Kjcc', category: '经典圣诗' },

  // 圣诞 / Christmas / 降生 / Immanuel (need +1)
  { id: 'joy-to-the-world', title: '普世歡騰', subtitle: '普世歡騰', artist: '活水詩歌 LSH', youtubeId: 'X6cajlUMTqI', category: '经典圣诗' },
  { id: 'o-holy-night-2', title: 'Josh Groban', subtitle: '聖善夜（Josh Groban聖誕降生）', artist: 'Josh Groban', youtubeId: 'hJw-ey1DPRA', category: '经典圣诗' },
  { id: 'silent-night', title: 'Silent Night', subtitle: '平安夜（Christmas 聖誕）', artist: 'Julian', youtubeId: 'POcDlbYiF9c', category: '经典圣诗' },

  // 复活 / resurrection / risen / 得胜
  { id: 'fu-huo-de-qing-chen', title: '复活的清晨-【天福诗班】', subtitle: 'Resurrection Morning', artist: '卫理公会天福堂', youtubeId: 'm-NGgZULbF0', category: '赞美诗歌' },
  { id: 'because-he-lives', title: 'Because He Lives • Congregational', subtitle: '因祂活著', artist: 'Daniel Baptist', youtubeId: 'AMGoyT4TCSE', category: '经典圣诗' },
  { id: 'thine-is-the-glory', title: 'Thine Be The Glory', subtitle: '榮耀歸主', artist: 'St. Michael\'s Singers - Topic', youtubeId: '6qKfVuvG2SY', category: '经典圣诗' },
];
