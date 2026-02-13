// Family Altar (家庭祭坛) — 25 themes, 375 devotional units for a full year
// A-type: doctrinal themes | B-type: biblical book/narrative themes
// Alternating A-B pattern for variety

export interface Scripture {
  ref_zh: string;
  ref_en: string;
  text_zh: string;
  text_en: string;
}

export interface BilingualText {
  zh: string;
  en: string;
}

export interface DevotionalUnit {
  scripture: Scripture;
  reflection: BilingualText;
  question: BilingualText;
  prayer: BilingualText;
}

export interface AltarTheme {
  id: string;
  name_zh: string;
  name_en: string;
  icon: string;
  devotionals: DevotionalUnit[];
  hymnKeywords: string[];
}

// Import theme chunks
import { themesA1 } from './family-altar-themes-a1';    // A1 Faith, A2 Prayer
import { themesA3 } from './family-altar-themes-a3';    // A3 Gratitude, A4 God's Love
import { themesA5 } from './family-altar-themes-a5';    // A5 Holiness, A6 Hope, A7 Family, A8 Service
import { themesA9 } from './family-altar-themes-a9';    // A9 Repentance, A10 Faithfulness, A11 Obedience, A12 Evangelism
import { themesB1 } from './family-altar-themes-b1';    // B1 Creation
import { themesB2 } from './family-altar-themes-b2';    // B2 Parables
import { themesB3 } from './family-altar-themes-b3';    // B3 Acts, B4 Wisdom
import { themesB5 } from './family-altar-themes-b5';    // B5 OT Heroes, B6 Cross
import { themesB7 } from './family-altar-themes-b7';    // B7 Spirit, B8 Psalms
import { themesB9 } from './family-altar-themes-b9';    // B9 Sermon on Mount, B10 I Am
import { themesB11 } from './family-altar-themes-b11';  // B11 Exodus, B12 Ephesians
import { themesB13 } from './family-altar-themes-b13';  // B13 Advent

// Extract individual themes by index
const A1 = themesA1[0]; // Faith
const A2 = themesA1[1]; // Prayer
const A3 = themesA3[0]; // Gratitude
const A4 = themesA3[1]; // God's Love
const A5 = (themesA5 as unknown as AltarTheme[])[0]; // Holiness
const A6 = (themesA5 as unknown as AltarTheme[])[1]; // Hope
const A7 = (themesA5 as unknown as AltarTheme[])[2]; // Family
const A8 = (themesA5 as unknown as AltarTheme[])[3]; // Service
const A9 = themesA9[0];  // Repentance
const A10 = themesA9[1]; // Faithfulness
const A11 = themesA9[2]; // Obedience
const A12 = themesA9[3]; // Evangelism

const B1 = themesB1[0];  // Creation
const B2 = themesB2[0];  // Parables
const B3 = themesB3[0];  // Acts
const B4 = themesB3[1];  // Wisdom
const B5 = themesB5[0];  // OT Heroes
const B6 = themesB5[1];  // Cross
const B7 = themesB7[0];  // Spirit
const B8 = themesB7[1];  // Psalms
const B9 = themesB9[0];  // Sermon on Mount
const B10 = themesB9[1]; // I Am
const B11 = themesB11[0]; // Exodus
const B12 = themesB11[1]; // Ephesians
const B13 = themesB13[0]; // Advent

// A-B alternating order: 25 themes × 15 days = 375 days (full year+)
export const themes: AltarTheme[] = [
  A1,   // Faith
  B1,   // Creation
  A2,   // Prayer
  B2,   // Parables
  A3,   // Gratitude
  B3,   // Acts
  A4,   // God's Love
  B4,   // Wisdom
  A5,   // Holiness
  B5,   // OT Heroes
  A6,   // Hope
  B6,   // Cross
  A7,   // Family
  B7,   // Spirit
  A8,   // Service
  B8,   // Psalms
  A9,   // Repentance
  B9,   // Sermon on Mount
  A10,  // Faithfulness
  B10,  // I Am
  A11,  // Obedience
  B11,  // Exodus
  A12,  // Evangelism
  B12,  // Ephesians
  B13,  // Advent
];

// 30 meal prayers
export const mealPrayers: BilingualText[] = [
  { zh: '天父，感谢你赐给我们今天的饮食。求你祝福这食物，也祝福预备食物的人。奉耶稣的名祷告，阿们。', en: 'Heavenly Father, thank You for today\'s food. Bless this meal and those who prepared it. In Jesus\' name, amen.' },
  { zh: '主啊，感谢你每日的供应。你是信实的神，从不缺少。奉耶稣的名祷告，阿们。', en: 'Lord, thank You for Your daily provision. You are a faithful God who never fails. In Jesus\' name, amen.' },
  { zh: '天父，我们为这丰盛的食物感谢你。求你也喂养我们的灵魂，使我们靠你的话语而活。阿们。', en: 'Father, we thank You for this abundant food. Feed our souls also, that we may live by Your Word. Amen.' },
  { zh: '主耶稣，你是生命的粮。感谢你不仅供应我们身体的需要，更赐给我们永生的盼望。阿们。', en: 'Lord Jesus, You are the bread of life. Thank You for providing not only for our bodies but giving us the hope of eternal life. Amen.' },
  { zh: '天父，感谢你使我们全家能坐在一起用餐。求你保守我们的身体健康，心灵强壮。阿们。', en: 'Father, thank You for our family being able to share this meal together. Keep us healthy in body and strong in spirit. Amen.' },
  { zh: '感谢慈爱的天父赐下这顿饭。愿我们吃了得力量，好好服事你。奉耶稣的名祷告，阿们。', en: 'Thank You, loving Father, for this meal. May we eat and gain strength to serve You well. In Jesus\' name, amen.' },
  { zh: '主啊，世上还有许多人饥饿缺乏。我们为你的供应感恩，也求你怜悯那些缺乏的人。阿们。', en: 'Lord, many in this world go hungry. We thank You for Your provision and ask You to have mercy on those in need. Amen.' },
  { zh: '天父，愿这顿饭成为我们家庭团契的时光。求你帮助我们在餐桌上也彼此相爱、分享喜乐。阿们。', en: 'Father, may this meal be a time of family fellowship. Help us love one another and share joy at this table. Amen.' },
  { zh: '感谢天父从天降下各样美善的恩赐。这食物是你恩典的明证。奉耶稣的名祷告，阿们。', en: 'Thank You, Father, for every good and perfect gift from above. This food is evidence of Your grace. In Jesus\' name, amen.' },
  { zh: '主啊，感谢你应许我们日用的饮食今日赐给我们。你从不失信。阿们。', en: 'Lord, thank You for promising to give us our daily bread. You never break Your promises. Amen.' },
  { zh: '天父，感谢你用各样的食物养育我们。愿我们因着身体得饱足，更加有力量荣耀你。阿们。', en: 'Father, thank You for nourishing us with all kinds of food. May our bodies be satisfied so we can better glorify You. Amen.' },
  { zh: '主啊，你张手就使有生气的都随愿饱足。感谢你对我们的眷顾。奉耶稣的名祷告，阿们。', en: 'Lord, You open Your hand and satisfy the desire of every living thing. Thank You for Your care for us. In Jesus\' name, amen.' },
  { zh: '天父，感谢你让我们不缺吃穿。求你帮助我们做好管家，也与他人分享你的恩赐。阿们。', en: 'Father, thank You that we lack neither food nor clothing. Help us be good stewards and share Your gifts with others. Amen.' },
  { zh: '主啊，五千人吃饱的神迹提醒我们，在你没有难成的事。感谢你供应我们一切所需。阿们。', en: 'Lord, the miracle of feeding the five thousand reminds us that nothing is impossible for You. Thank You for supplying all our needs. Amen.' },
  { zh: '天父，感谢你赐下食物使我们的心欢喜。愿我们用欢喜的心领受，并以感恩回报。阿们。', en: 'Father, thank You for food that gladdens our hearts. May we receive it with joyful hearts and respond with gratitude. Amen.' },
  { zh: '感谢主赐下这顿饭。愿我们在吃的时候也思想你的恩典，并为明天的需要信靠你。阿们。', en: 'Thank You, Lord, for this meal. As we eat, may we think of Your grace and trust You for tomorrow\'s needs. Amen.' },
  { zh: '天父，感谢你是全家人的供应者。愿你的恩典如这食物一样充足，永不断绝。阿们。', en: 'Father, thank You for being our family\'s provider. May Your grace be as abundant as this food, never ceasing. Amen.' },
  { zh: '主耶稣，你曾在以马忤斯路上与门徒擘饼。求你也在这餐桌上与我们同在。阿们。', en: 'Lord Jesus, You broke bread with the disciples at Emmaus. Be present with us at this table too. Amen.' },
  { zh: '天父，你用吗哪喂养旷野中的以色列人，今天你也照样供应我们。你的信实何等伟大！阿们。', en: 'Father, You fed Israel with manna in the wilderness, and You provide for us in the same way today. How great is Your faithfulness! Amen.' },
  { zh: '主啊，这饭菜虽然简单，但你的恩典丰富。帮助我们学会在小事上感恩。阿们。', en: 'Lord, though this meal is simple, Your grace is abundant. Help us learn to be thankful in small things. Amen.' },
  { zh: '天父，感谢你让我们今天能吃饱。求你也填满我们灵魂的饥渴，以你的话语和圣灵。阿们。', en: 'Father, thank You for satisfying our hunger today. Fill the hunger of our souls too, with Your Word and Spirit. Amen.' },
  { zh: '主啊，每一餐都提醒我们完全依赖你。离了你，我们什么都不能做。感谢你的供应。阿们。', en: 'Lord, every meal reminds us of our total dependence on You. Apart from You we can do nothing. Thank You for Your provision. Amen.' },
  { zh: '天父，你使五谷丰登、百果累累。感谢你创造的丰富和大地的出产。奉耶稣的名祷告，阿们。', en: 'Father, You make grain grow and fruit abound. Thank You for the richness of creation and the produce of the earth. In Jesus\' name, amen.' },
  { zh: '主啊，我们不是单靠食物活着，乃是靠你口里所出的一切话。求你也用你的话语喂养我们。阿们。', en: 'Lord, we do not live by bread alone, but by every word that comes from Your mouth. Feed us with Your Word too. Amen.' },
  { zh: '天父，感谢你的恩典够我们用的。无论丰富或缺乏，我们都要感谢你。阿们。', en: 'Father, thank You that Your grace is sufficient for us. Whether in plenty or in want, we give You thanks. Amen.' },
  { zh: '感谢主在新的一天赐给我们力量和食物。愿我们今天所做的一切都荣耀你。阿们。', en: 'Thank You, Lord, for strength and food for this new day. May everything we do today glorify You. Amen.' },
  { zh: '主啊，感谢你的慈爱每早晨都是新的。你的信实极其广大。奉耶稣的名祷告，阿们。', en: 'Lord, thank You that Your mercies are new every morning. Great is Your faithfulness. In Jesus\' name, amen.' },
  { zh: '天父，这食物是你手所赐。愿我们享用时也思想你对我们永恒的爱和计划。阿们。', en: 'Father, this food comes from Your hand. As we enjoy it, may we also reflect on Your eternal love and purposes for us. Amen.' },
  { zh: '主啊，感谢你不仅赐给我们食物，还赐给我们彼此。愿这餐桌上充满爱、笑声和你的平安。阿们。', en: 'Lord, thank You for giving us not only food, but each other. May this table be filled with love, laughter, and Your peace. Amen.' },
  { zh: '天父，愿我们因这食物得力量，出去做你的工。一切感谢、荣耀都归给你！阿们。', en: 'Father, may this food give us strength to go and do Your work. All thanks and glory be to You! Amen.' },
];
