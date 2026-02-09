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
  { id: 'zhe-yi-sheng-1', title: '這一生最美的祝福（完整版）', artist: '讚美之泉', youtubeId: 'RTSTh4_mKnA', category: '赞美诗歌' },
  { id: 'zhe-yi-sheng-2', title: '這一生最美的祝福（短版）', subtitle: 'The Gift of Knowing You', artist: '讚美之泉', youtubeId: 'tPf7Ig1ebL4', category: '赞美诗歌' },
  { id: 'ru-ying-zhan-chi', title: '如鹰展翅上腾', subtitle: 'Soar on Wings Like an Eagle', artist: '讚美之泉', youtubeId: 'mFbmgTlIYG8', category: '赞美诗歌' },
  { id: 'medley-praise-1', title: '感謝天父 / 謝謝祢 / 自由地歌唱 / 恩典之路 / 新耶路撒冷', artist: '讚美之泉', youtubeId: 'teqg6ZIkuwk', category: '赞美诗歌' },
  { id: 'medley-praise-2', title: '將天敞開 / 行神蹟的神 / 一生敬拜祢 / 這是聖潔之地', artist: '讚美之泉', youtubeId: 'kxGQ7LV4DKQ', category: '赞美诗歌' },
  { id: 'ni-shi-pei-de', title: '祢是配得', subtitle: 'You Are Worthy', artist: '讚美之泉', youtubeId: 'xdoIC_M8EmY', category: '赞美诗歌' },
  { id: 'jiao-wo-tai-qi-tou', title: '叫我抬起頭的神 / 尊貴全能神', artist: '讚美之泉', youtubeId: 'ouG12IsjTNU', category: '赞美诗歌' },
  { id: 'shi-jia-de-ai', title: '十架的愛', subtitle: 'Great Is Your Love', artist: '讚美之泉', youtubeId: 'npXSsd_TO4A', category: '赞美诗歌' },
  { id: 'xiang-zhu-huan-hu', title: '向主欢呼', subtitle: 'Shout to the Lord', artist: '讚美之泉', youtubeId: 'ln2grj_HKis', category: '赞美诗歌' },
  { id: 'huo-zhe-wei-yao', title: '活著為要敬拜祢', subtitle: 'I Live To Worship You', artist: '讚美之泉', youtubeId: '7PBF9DzHVQU', category: '赞美诗歌' },
  { id: 'zhu-ni-shi-wo-li-liang', title: '主祢是我力量', subtitle: 'You Are My Strength', artist: '讚美之泉', youtubeId: 'OvsUvEI029E', category: '赞美诗歌' },
  { id: 'ri-ri-ye-ye', title: '日日夜夜', subtitle: 'Day And Night', artist: '讚美之泉', youtubeId: '1Xhf1fJDNmk', category: '赞美诗歌' },
  { id: 'wo-yao-xiang-gaoshan', title: '我要向高山舉目', subtitle: 'Lift My Eyes to the Hills', artist: '讚美之泉', youtubeId: 'bhS0D7Gd-Ek', category: '赞美诗歌' },
  { id: 'ni-zuo-zhe-wei-wang', title: '你坐著為王', artist: '約書亞樂團', youtubeId: 'nuK3oi7-YoM', category: '赞美诗歌' },
  { id: 'ye-su-ni-yi-de-sheng', title: '耶穌祢已得勝', artist: '天韻合唱團', youtubeId: 'cwURDf2TJj4', category: '赞美诗歌' },
  { id: 'fu-xing-wo', title: '復興我', subtitle: 'Redeem Me', artist: '基恩敬拜', youtubeId: 'R5lI1X1kyQE', category: '赞美诗歌' },
  { id: 'zhan-kai-shu-tian', title: '展開屬天的翅膀', artist: '以斯拉', youtubeId: '6gP6-g_BbWA', category: '赞美诗歌' },
  { id: 'chang-yi-shou-tian-shang', title: '唱一首天上的歌', artist: '迦南詩歌', youtubeId: 'ZSOYluQXi5o', category: '赞美诗歌' },
  { id: 'yi-shou-zan-mei', title: '一首讚美的詩歌', artist: '讚美之泉', youtubeId: 'b2ikeCRKTwQ', category: '赞美诗歌' },
  { id: 'you-yi-wei-shen', title: '有一位神', subtitle: 'There Is A God', artist: '讚美之泉', youtubeId: 'b3oivk4W7EY', category: '赞美诗歌' },
  { id: 'ye-he-hua-ni-shi-wo-de-shen', title: '耶和華祢是我的神', subtitle: 'Jehovah You Are My God', artist: '讚美之泉', youtubeId: 'y3QzV2WE-qw', category: '赞美诗歌' },
  { id: 'zan-mei-zhi-quan', title: '讚美之泉', subtitle: 'Stream of Praise', artist: '讚美之泉', youtubeId: 'x-DysGdCg4k', category: '赞美诗歌' },
  { id: 'ye-he-hua-ni-zhen-wei-da', title: '耶和華祢真偉大', subtitle: 'Jehovah How Great You Are', artist: '泥土音樂', youtubeId: 'vw1g-32Po6I', category: '赞美诗歌' },
  { id: 'man-you-neng-li', title: '滿有能力', subtitle: 'I Am Strengthened in Him', artist: '讚美之泉', youtubeId: 'uTGPl8f-reQ', category: '赞美诗歌' },
  { id: 'fu-xing-sheng-jie', title: '復興聖潔', subtitle: 'Revive Holiness', artist: '讚美之泉', youtubeId: 'K3ibf2AjR3U', category: '赞美诗歌' },
  { id: 'ben-pao-bu-fang-qi', title: '奔跑不放棄', subtitle: "Won't Give Up", artist: '讚美之泉', youtubeId: '3tNKXsR-H_E', category: '赞美诗歌' },
  { id: 'quan-ran-xiang-ni', title: '全然向祢', subtitle: 'All For You', artist: '讚美之泉', youtubeId: 'fE0pVMc5kQQ', category: '赞美诗歌' },
  { id: 'huo-chu-ai', title: '活出愛', artist: '讚美之泉', youtubeId: 'ZRcKyGg2Lpg', category: '赞美诗歌' },
  { id: 'shen-bu-jian-di-de-ai', title: '深不見底的愛', subtitle: 'Endless Love', artist: '讚美之泉', youtubeId: 'H4MeSR_ilyY', category: '赞美诗歌' },
  { id: 'ruan-ruo-de-wo', title: '軟弱的我變剛強', artist: '讚美之泉', youtubeId: 'faexCo8lTqk', category: '赞美诗歌' },
  { id: 'yan-guang', title: '眼光', artist: '天韻合唱團', youtubeId: 'SPGvl3ZwlxE', category: '赞美诗歌' },

  // ============================================
  // 敬拜诗歌 (Worship) — slower devotional, intimate worship
  // ============================================
  { id: 'medley-worship-1', title: '寶貴十架 / 我知誰掌管明天 / 住在你裡面 / 煉淨我', artist: '讚美之泉', youtubeId: 'q5lFordsl9Y', category: '敬拜诗歌' },
  { id: 'yuan-ni-de-hua', title: '願你的話 / 在你同在裡', artist: '讚美之泉', youtubeId: 'KLayUbTJLAw', category: '敬拜诗歌' },
  { id: 'bao-gui-shi-jia', title: '寶貴十架', subtitle: 'Precious Cross', artist: '讚美之泉', youtubeId: 'T7SrzqlV9NY', category: '敬拜诗歌' },
  { id: 'he-deng-en-dian', title: '何等恩典', subtitle: 'How Could It Be', artist: '讚美之泉', youtubeId: 'i4gBjSJGkOA', category: '敬拜诗歌' },
  { id: 'neng-bu-neng', title: '能不能', subtitle: 'Let Me Stay', artist: '讚美之泉', youtubeId: 'AA-KeICAUGA', category: '敬拜诗歌' },
  { id: 'wo-de-sheng-ming', title: '我的生命獻給祢', subtitle: 'I Will Offer You My Life', artist: '讚美之泉', youtubeId: 'RSDdykHp-Wc', category: '敬拜诗歌' },
  { id: 'wo-de-shen-wo-jing-bai', title: '我的神我敬拜祢', subtitle: 'My Lord I Worship You', artist: '讚美之泉', youtubeId: 'kdPRftyhEVc', category: '敬拜诗歌' },
  { id: 'qing-qing-ting', title: '輕輕聽', artist: '讚美之泉', youtubeId: 'aXIMuC0Y08U', category: '敬拜诗歌' },
  { id: 'zhen-guang', title: '真光', artist: '讚美之泉', youtubeId: 'l4Dx0hxxAHs', category: '敬拜诗歌' },
  { id: 'quan-ran-wei-ni-1', title: '全然為祢', subtitle: 'All For You Lord', artist: '生命河', youtubeId: 'xSAN85jWzOQ', category: '敬拜诗歌' },
  { id: 'quan-ran-wei-ni-2', title: '全然為你', artist: '生命河', youtubeId: 'FcEwLmR78jQ', category: '敬拜诗歌' },
  { id: 'ni-de-ai-bu-li-bu-qi', title: '你的愛不離不棄', artist: '生命河', youtubeId: 'LfDwY3xU94E', category: '敬拜诗歌' },
  { id: 'yu-jian-ni', title: '遇見你', subtitle: 'Here In Your Presence', artist: '生命河', youtubeId: 'XdXopI_eld4', category: '敬拜诗歌' },
  { id: 'wo-an-ran-ju-zhu', title: '我安然居住', subtitle: 'Dwelling In Peace', artist: '約書亞樂團', youtubeId: 'kNOuWvdPgiA', category: '敬拜诗歌' },
  { id: 'xiang-qi-ni', title: '想起祢', subtitle: 'When I Think of You', artist: '泥土音樂', youtubeId: 'AE7RhcMjgWA', category: '敬拜诗歌' },
  { id: 'wo-xiang-ni-dao-gao', title: '我向祢禱告', artist: 'SON Music', youtubeId: '-IVXs-rBonc', category: '敬拜诗歌' },
  { id: 'ni-shi-wo-de-yi-qie', title: '祢是我的一切', subtitle: 'You Are My All In All', artist: '讚美之泉', youtubeId: 'Qc6vnPPM-JE', category: '敬拜诗歌' },
  { id: 'qing-jian-gu-wo', title: '請堅固我', subtitle: 'Lord Please Strengthen Me', artist: '基恩敬拜', youtubeId: 's0h93HvF3aY', category: '敬拜诗歌' },
  { id: 'ci-wo-li-liang', title: '賜我力量', subtitle: 'Give Me Strength', artist: '基恩敬拜', youtubeId: '-1hotIathug', category: '敬拜诗歌' },
  { id: 'you-ni-tong-xing', title: '有祢同行', subtitle: 'With You By My Side', artist: '基恩敬拜', youtubeId: '2KM6F_vQSD0', category: '敬拜诗歌' },
  { id: 'ai-zai-ruan-ruo-zhong', title: '愛在軟弱中盛放', artist: '基恩敬拜', youtubeId: '7zxCBrAH1bE', category: '敬拜诗歌' },
  { id: 'wo-de-ling-zan-mei-ni', title: '我的灵赞美祢', subtitle: '10000 Reasons', artist: '讚美之泉', youtubeId: 'X53Yz6nJjSk', category: '敬拜诗歌' },
  { id: '10000-reasons-en', title: '10,000 Reasons (Bless the Lord)', subtitle: '一萬個理由', artist: 'Matt Redman', youtubeId: 'XtwIT8JjddM', category: '敬拜诗歌' },
  { id: 'pei-wo-zou-guo', title: '陪我走過春夏秋冬', artist: '小羊詩歌', youtubeId: 'WoXD_VzfKAk', category: '敬拜诗歌' },
  { id: 'yi-sheng-yi-shi', title: '一生一世', artist: '我心旋律', youtubeId: 'dJ3vwSLf940', category: '敬拜诗歌' },
  { id: 'kong-gu-de-hui-yin', title: '空谷的回音', artist: '雅歌', youtubeId: '6QkIgITa33U', category: '敬拜诗歌' },
  { id: 'wo-zai-zhe-li-jing-bai', title: '我在這裡敬拜', subtitle: 'Here I Am to Worship', artist: '讚美之泉', youtubeId: '8wo_DqKGmwM', category: '敬拜诗歌' },
  { id: 'ai-ni-dao-di', title: '愛祢到底', subtitle: 'Love You til The End', artist: '泥土音樂', youtubeId: 'vR8q7WUGjHQ', category: '敬拜诗歌' },
  { id: 'wo-de-yi-sheng-zai-ni-shou-zhong', title: '我的一生在你手中', artist: '讚美之泉', youtubeId: 'W9bhn7NrXdQ', category: '敬拜诗歌' },
  { id: 'yi-zhi-yao-you-ni', title: '只要有祢在我左右', subtitle: 'If My God Is With Me', artist: '讚美之泉', youtubeId: 'ULWAelqzXgo', category: '敬拜诗歌' },
  { id: 'qian-wo-de-shou', title: '牽我的手', artist: '讚美之泉', youtubeId: 'u8JMcFjT1tY', category: '敬拜诗歌' },
  { id: 'wei-he-dui-wo-zhe-me-hao', title: '為何對我這麼好', artist: '讚美之泉', youtubeId: 'dYghBJb9rDM', category: '敬拜诗歌' },
  { id: 'zhu-dao-wen', title: '主禱文', subtitle: "The Lord's Prayer", artist: '讚美之泉', youtubeId: 'WSzdU3hZw2c', category: '敬拜诗歌' },
  { id: 'yi-gan-en-wei-ji', title: '以感恩為祭', artist: '團契遊樂園', youtubeId: 'ozRtnVOvYvM', category: '敬拜诗歌' },
  { id: 'yi-zhi-de-ai', title: '醫治的愛', subtitle: 'Healing Love', artist: '泥土音樂', youtubeId: 'zdGb_4lziwc', category: '敬拜诗歌' },
  { id: 'en-dian-gou-yong', title: '恩典夠用', subtitle: 'Sufficient Grace', artist: '泥土音樂', youtubeId: 'p2feIz0Rprg', category: '敬拜诗歌' },
  { id: 'yuan-wo-de-pan-shi', title: '願我的磐石被人稱頌', subtitle: 'Praise the Lord My Rock', artist: '生命河', youtubeId: 'Eja65j7SOUo', category: '敬拜诗歌' },
  { id: 'wu-jia-zhi-bao', title: '無價至寶', subtitle: 'Priceless', artist: '約書亞樂團', youtubeId: 'ymKB9XqkQuE', category: '敬拜诗歌' },
  { id: 'an-jing', title: '安靜', subtitle: 'Be Still', artist: '讚美之泉', youtubeId: 'Za9UdGa-P6g', category: '敬拜诗歌' },

  // ============================================
  // 福音诗歌 (Gospel Songs) — evangelistic, testimony, faith journey
  // ============================================
  { id: 'wo-men-cheng-wei-yi-jia-ren', title: '我們成為一家人', artist: '有情天音樂', youtubeId: 'B_EkHGfZeKc', category: '福音诗歌' },
  { id: 'ye-he-hua-de-xin', title: '耶和華的心', artist: '有情天音樂', youtubeId: 'dkPgc6rAMBU', category: '福音诗歌' },
  { id: 'fan-shi-du-you', title: '凡事都有神的美意', artist: '讚美之泉', youtubeId: 'e9KiGgpdM9M', category: '福音诗歌' },
  { id: 'jin-sheng-gen-sui', title: '今生跟随主耶稣', artist: '讚美之泉', youtubeId: 'BhLeSQeg_is', category: '福音诗歌' },
  { id: 'gan-xie-yi-sheng', title: '感謝一生有祢', subtitle: 'Thank You For Being In My Life', artist: '讚美之泉', youtubeId: 'g05K8bV7I2Y', category: '福音诗歌' },
  { id: 'yu-hou-de-tian-kong', title: '雨後的天空', subtitle: 'After the Rain', artist: '泥土音樂', youtubeId: 'ksANigSjZ-4', category: '福音诗歌' },
  { id: 'jiao-bu', title: '腳步', subtitle: 'Footsteps', artist: '泥土音樂', youtubeId: 'Iz9Gr1ATrDo', category: '福音诗歌' },
  { id: 'zui-zhi-xin-de-peng-you', title: '最知心的朋友', subtitle: 'My Dearest Friend', artist: '小敏', youtubeId: 'hpXn8646wA8', category: '福音诗歌' },
  { id: 'en-dian-de-ji-hao', title: '恩典的記號', artist: '盛曉玫', youtubeId: '5TlA9Ylalj4', category: '福音诗歌' },
  { id: 'you-yi-tian', title: '有一天', artist: '泥土音樂', youtubeId: 'Pbkdfl43Oxc', category: '福音诗歌' },
  { id: 'en-dian-tai-mei-li', title: '恩典太美麗', artist: '讚美之泉', youtubeId: 'oQcAo3vRIvU', category: '福音诗歌' },
  { id: 'yi-ran-ai-wo', title: '依然愛我', subtitle: 'You Still Love Me', artist: '泥土音樂', youtubeId: 'uSHI-9s4dTU', category: '福音诗歌' },
  { id: 'xing-fu', title: '幸福', subtitle: 'Blessed', artist: '泥土音樂', youtubeId: 'Q3m-in8i6FU', category: '福音诗歌' },
  { id: 'shi-jia-xi-sheng-de-ai', title: '十架犧牲的愛', artist: '讚美之泉', youtubeId: 'Sh4wV3nsNPs', category: '福音诗歌' },
  { id: 'jia-lue-shan-de-ai', title: '加略山的爱', artist: '讚美之泉', youtubeId: 'IXeq6tpn5SU', category: '福音诗歌' },
  { id: 'yin-zhe-xin', title: '因著信', artist: '角聲使團', youtubeId: 'qNndl7K3z3k', category: '福音诗歌' },
  { id: 'shei-ceng-ying-xu', title: '誰曾應許', artist: '團契遊樂園', youtubeId: 'McixlPUGPzI', category: '福音诗歌' },
  { id: 'shi-zi-jia-chuan-da-zhe', title: '十字架的傳達者', artist: '以斯拉', youtubeId: 'mpugTxcAXn0', category: '福音诗歌' },
  { id: 'ye-su-wo-gan-xie-ni', title: '耶穌我感謝你', artist: '玻璃海樂團', youtubeId: '123L18Fq8S8', category: '福音诗歌' },
  { id: 'zhen-ai', title: '真爱', artist: 'Kelvin Soh', youtubeId: 'oDCNQjGbJzA', category: '福音诗歌' },
  { id: 'wo-de-shi-jie-bu-ji-mo', title: '我的世界不寂寞', subtitle: 'I Am Not Alone', artist: '泥土音樂', youtubeId: 'QLbI_hf7sn4', category: '福音诗歌' },
  { id: 'ruo-shi-you-ni', title: '若是有你在我生命中', artist: '福建詩歌', youtubeId: 'L74nyq-_lHk', category: '福音诗歌' },
  { id: 'ci-ai-de-shang-di', title: '慈爱的上帝 & 信主的人真有福', artist: '福音詩歌', youtubeId: 'IbrNypkMxeQ', category: '福音诗歌' },
  { id: 'shen-de-dao-lu', title: '神的道路', artist: '天韻合唱團', youtubeId: 'xb8O_XoTlHw', category: '福音诗歌' },
  { id: 'you-raise-me-up', title: '你鼓舞了我', subtitle: 'You Raise Me Up', artist: '福音版', youtubeId: 'JzW4m1iMsaQ', category: '福音诗歌' },
  { id: 'ai-de-zhen-di', title: '爱的真谛', subtitle: 'The Essence of Love', artist: '讚美之泉', youtubeId: 'I5ARkI-R560', category: '福音诗歌' },

  // ============================================
  // 经典圣诗 (Classic Hymns) — classic/traditional hymns, compilations
  // ============================================
  { id: 'ji-du-jiao-ge-qu', title: '基督教歌曲大全', artist: '九酷福音网', youtubeId: 'UPUG4trs1e4', category: '经典圣诗' },
  { id: 'o-holy-night', title: '哦！圣善夜', subtitle: 'O Holy Night', artist: '经典圣诗', youtubeId: 'VxUR_bn8Kao', category: '经典圣诗' },
  { id: 'wo-zhi-shei-zhang-guan', title: '我知誰掌管明天', artist: '史茵茵', youtubeId: 'nmd0bLtRqu8', category: '经典圣诗' },
  { id: 'qi-yi-en-dian-1', title: '奇异恩典', subtitle: 'Amazing Grace', artist: '经典圣诗', youtubeId: 'eJgRuy6FeMA', category: '经典圣诗' },
  { id: 'xian-shang-gan-en', title: '献上感恩的心', subtitle: 'Give Thanks', artist: '经典圣诗', youtubeId: 'hrRKEk2FEDc', category: '经典圣诗' },
  { id: 'zai-ji-du-li', title: '在基督里', subtitle: 'In Christ Alone', artist: '经典圣诗', youtubeId: 'yod-VoVC0-U', category: '经典圣诗' },
  { id: 'ye-he-hua-shi-ai', title: '耶和华是爱', subtitle: 'Lord is Love', artist: '经典圣诗', youtubeId: 'QrFW_1ijY5M', category: '经典圣诗' },
  { id: 'qi-yi-en-dian-2', title: '奇異恩典', subtitle: 'Amazing Grace My Chains Are Gone', artist: '巫啟賢', youtubeId: 'v6EoqZB58f8', category: '经典圣诗' },
  { id: 'yu-zhu-geng-qin-jin', title: '与主更亲近', subtitle: 'Nearer My God to Thee', artist: '经典圣诗', youtubeId: 'jN4OCL94ITc', category: '经典圣诗' },
  { id: 'sheng-xiao-mei-jing-xuan', title: '盛曉玫詩歌精選', subtitle: '陪伴系列 45分鐘', artist: '泥土音樂', youtubeId: '3nTLcz8E5uw', category: '经典圣诗' },
  { id: 'zan-mei-zhi-quan-he-ji', title: '赞美之泉热门合辑', subtitle: '一小时敬拜', artist: '讚美之泉', youtubeId: '6LfGdoZMbaE', category: '经典圣诗' },
  { id: 'zan-mei-zhi-quan-man-ge', title: '讚美之泉敬拜慢歌精選', subtitle: '2小時', artist: '讚美之泉', youtubeId: 'HTG59P9I14I', category: '经典圣诗' },
  { id: 'yi-qie-quan-xian-shang', title: '一切全献上', subtitle: 'I Surrender All', artist: '经典圣诗', youtubeId: 'eBU66O-NTQU', category: '经典圣诗' },
  { id: 'wo-de-xin-qie-qie-ke-mu-ni', title: '我的心切切渴慕你', artist: '敬拜诗歌', youtubeId: 'ygElrkZ0X9U', category: '敬拜诗歌' },
  { id: 'amazing-grace-english', title: 'Amazing Grace', subtitle: '英文版', artist: 'Classic Hymn', youtubeId: 'gWz4feHp0ko', category: '经典圣诗' },
];
