import qaData from '@/data/qa_questions.json';
import catechismData from '@/data/catechism_wsc.json';
import catechismWlcData from '@/data/catechism_wlc.json';
import apologeticsData from '@/data/apologetics.json';
import booksData from '@/data/books.json';
import youthData from '@/data/youth.json';
import type { QAQuestion, CatechismQuestion, ApologeticsTopic, Book, YouthItem } from './types';
import { normalizeSearch } from './search-utils';

export const qaQuestions: QAQuestion[] = qaData as QAQuestion[];
export const catechismQuestions: CatechismQuestion[] = catechismData as CatechismQuestion[];
export const catechismWlcQuestions: CatechismQuestion[] = catechismWlcData as CatechismQuestion[];
export const allCatechismQuestions: CatechismQuestion[] = [...catechismQuestions, ...catechismWlcQuestions];
export const apologeticsTopics: ApologeticsTopic[] = apologeticsData as ApologeticsTopic[];
export const books: Book[] = booksData as Book[];
export const youthItems: YouthItem[] = youthData as YouthItem[];

export function getQAById(id: string): QAQuestion | undefined {
  return qaQuestions.find(q => q.id === id);
}

export function getCatechismById(id: string): CatechismQuestion | undefined {
  return allCatechismQuestions.find(q => q.id === id);
}

export function getCatechismByNumber(num: number, catechism?: string): CatechismQuestion | undefined {
  const list = catechism === 'westminster_larger' ? catechismWlcQuestions : catechismQuestions;
  return list.find(q => q.number === num);
}

export function getApologeticsById(id: string): ApologeticsTopic | undefined {
  return apologeticsTopics.find(t => t.id === id);
}

export function getBookById(id: string): Book | undefined {
  return books.find(b => b.id === id);
}

export const bookCategories = (() => {
  const cats: Record<string, number> = {};
  books.forEach(b => {
    const cat = (b as any).category || '其他';
    cats[cat] = (cats[cat] || 0) + 1;
  });
  return Object.entries(cats).sort((a, b) => b[1] - a[1]);
})();

export function getBooksByCategory(category: string): Book[] {
  return books.filter(b => (b as any).category === category);
}

export function getYouthById(id: string): YouthItem | undefined {
  return youthItems.find(y => y.id === id);
}

export function getYouthBySection(section: string): YouthItem[] {
  return youthItems
    .filter(item => item.section === section)
    .sort((a, b) => a.id.localeCompare(b.id));
}

// 使用 OpenCC 进行完整的简繁转换，见 search-utils.ts
const normalize = normalizeSearch;

export function searchAll(query: string) {
  const q = normalize(query);
  const { songs } = require('@/app/worship/data');
  return {
    qa: qaQuestions.filter(item => 
      normalize(item.question_zh).includes(q) ||
      normalize(item.question_en).includes(q) ||
      normalize(item.short_answer_zh).includes(q) ||
      normalize(item.short_answer_en).includes(q)
    ),
    catechism: allCatechismQuestions.filter(item =>
      normalize(item.question_zh).includes(q) ||
      normalize(item.question_en).includes(q) ||
      normalize(item.answer_zh).includes(q) ||
      normalize(item.answer_en).includes(q)
    ),
    apologetics: apologeticsTopics.filter(item =>
      normalize(item.topic_zh).includes(q) ||
      normalize(item.topic_en).includes(q) ||
      normalize(item.core_argument_zh).includes(q) ||
      normalize(item.core_argument_en).includes(q)
    ),
    books: books.filter(item =>
      normalize(item.title_zh).includes(q) ||
      normalize(item.title_en).includes(q) ||
      normalize(item.author_zh).includes(q) ||
      normalize(item.author_en).includes(q) ||
      normalize(item.summary_zh).includes(q) ||
      normalize(item.summary_en).includes(q)
    ),
    youth: youthItems.filter(item =>
      normalize(item.title_zh).includes(q) ||
      normalize(item.title_en).includes(q) ||
      normalize(item.content_zh).includes(q) ||
      normalize(item.content_en).includes(q)
    ),
    worship: (songs as any[]).filter((item: any) =>
      normalize(item.title).includes(q) ||
      normalize(item.subtitle || '').includes(q) ||
      normalize(item.artist).includes(q)
    ),
  };
}

export const categoryLabels: Record<string, { zh: string; en: string }> = {
  all: { zh: '全部', en: 'All' },
  existence_of_god: { zh: '上帝存在', en: 'Existence of God' },
  problem_of_evil: { zh: '苦难问题', en: 'Problem of Evil' },
  bible_reliability: { zh: '圣经可靠', en: 'Bible Reliability' },
  science_and_faith: { zh: '科学与信仰', en: 'Science & Faith' },
  uniqueness_of_jesus: { zh: '耶稣独特性', en: 'Uniqueness of Jesus' },
  sin_and_salvation: { zh: '罪与救恩', en: 'Sin & Salvation' },
  life_after_death: { zh: '死后生命', en: 'Life After Death' },
  moral_foundation: { zh: '道德基础', en: 'Moral Foundation' },
  authority_of_scripture: { zh: '圣经权威', en: 'Authority of Scripture' },
  church: { zh: '教会生活', en: 'Church Life' },
  eschatology: { zh: '末世与永恒', en: 'Eschatology' },
  holy_spirit: { zh: '圣灵', en: 'Holy Spirit' },
  original_sin: { zh: '原罪', en: 'Original Sin' },
  prayer: { zh: '祷告', en: 'Prayer' },
  predestination: { zh: '预定论', en: 'Predestination' },
  sacraments: { zh: '圣礼', en: 'Sacraments' },
  trinity: { zh: '三位一体', en: 'Trinity' },
  two_natures_of_christ: { zh: '基督二性', en: 'Two Natures of Christ' },
  faith_and_works: { zh: '信心与行为', en: 'Faith & Works' },
  heaven_and_hell: { zh: '天堂与地狱', en: 'Heaven & Hell' },
  '上帝存在': { zh: '上帝存在', en: 'Existence of God' },
  '圣经权威': { zh: '圣经权威', en: 'Authority of Scripture' },
  '罪与救恩': { zh: '罪与救恩', en: 'Sin & Salvation' },
  '基督的独特性': { zh: '基督的独特性', en: 'Uniqueness of Christ' },
  '苦难与邪恶': { zh: '苦难与邪恶', en: 'Problem of Evil' },
  '信仰与科学': { zh: '信仰与科学', en: 'Science & Faith' },
  '教会生活': { zh: '教会生活', en: 'Church Life' },
  '末世与永恒': { zh: '末世与永恒', en: 'Eschatology' },
  '实践信仰': { zh: '实践信仰', en: 'Practical Faith' },
  '偶像与异教': { zh: '偶像与异教', en: 'Idolatry & Cults' },
  '道德与伦理': { zh: '道德与伦理', en: 'Morality & Ethics' },
  '圣灵': { zh: '圣灵', en: 'Holy Spirit' },
};

export const youthCategoryLabels: Record<string, { zh: string; en: string }> = {
  all: { zh: '全部', en: 'All' },
  '信仰基础': { zh: '信仰基础', en: 'Faith Basics' },
  '校园生活': { zh: '校园生活', en: 'Campus Life' },
  '成长挑战': { zh: '成长挑战', en: 'Growth Challenges' },
  '门训材料': { zh: '门训材料', en: 'Discipleship' },
};

export const youthSectionLabels: Record<string, { zh: string; en: string; icon: string; description_zh: string; description_en: string }> = {
  'faith-basics': { 
    zh: '信仰基础', 
    en: 'Faith Basics',
    icon: '✝️',
    description_zh: '福音核心、基本教义、救恩确据',
    description_en: 'Gospel core, basic doctrine, assurance of salvation'
  },
  'bible-guide': { 
    zh: '圣经导读', 
    en: 'Bible Guide',
    icon: '📖',
    description_zh: '带领青少年读经导引，每卷书简介+关键经文',
    description_en: 'Guide young people in Bible reading, book introductions and key verses'
  },
  'campus': { 
    zh: '校园生活', 
    en: 'Campus Life',
    icon: '🎒',
    description_zh: '同伴压力、考试焦虑、社交媒体、校园传福音',
    description_en: 'Peer pressure, exam stress, social media, campus evangelism'
  },
  'growth': { 
    zh: '成长挑战', 
    en: 'Growth Challenges',
    icon: '💪',
    description_zh: '情绪管理、身份认同、恋爱观、与父母关系',
    description_en: 'Emotional management, identity, relationships, family dynamics'
  },
  'faith-science': { 
    zh: '信仰与科学', 
    en: 'Faith & Science',
    icon: '🔬',
    description_zh: '创造vs进化、AI伦理、科学家信仰故事',
    description_en: 'Creation vs evolution, AI ethics, stories of Christian scientists'
  },
  'devotion': { 
    zh: '灵修操练', 
    en: 'Spiritual Disciplines',
    icon: '🙏',
    description_zh: '祷告指南、灵修方法、属灵日记、禁食入门',
    description_en: 'Prayer guide, devotional methods, spiritual journaling, fasting basics'
  },
  'discipleship': { 
    zh: '门训材料', 
    en: 'Discipleship',
    icon: '🌱',
    description_zh: '系统门训课程（适合小组使用），含讨论题',
    description_en: 'Systematic discipleship courses (for small groups) with discussion questions'
  },
  'heroes': { 
    zh: '信仰英雄', 
    en: 'Faith Heroes',
    icon: '⭐',
    description_zh: '历史人物故事：改教家、宣教士、殉道者',
    description_en: 'Stories of reformers, missionaries, and martyrs throughout history'
  },
};

export function getApologeticsBySection(section: string): ApologeticsTopic[] {
  return apologeticsTopics
    .filter(item => item.section === section)
    .sort((a, b) => a.id.localeCompare(b.id));
}

export function getApologeticsSectionCount(section: string): number {
  return apologeticsTopics.filter(item => item.section === section).length;
}

export const apologeticsSectionLabels: Record<string, { zh: string; en: string; icon: string; description_zh: string; description_en: string }> = {
  'foundations': {
    zh: '信仰根基', en: 'Foundations',
    icon: '🏛️',
    description_zh: '上帝存在的经典论证：宇宙论、目的论、道德论、意识论',
    description_en: 'Classical arguments for God\'s existence'
  },
  'scripture': {
    zh: '圣经可信', en: 'Scripture',
    icon: '📜',
    description_zh: '圣经的可靠性、权威性与历史印证',
    description_en: 'Reliability, authority and historical evidence for the Bible'
  },
  'gospel-evidence': {
    zh: '基督真相', en: 'Gospel Evidence',
    icon: '✝️',
    description_zh: '耶稣的神性、复活与福音的历史证据',
    description_en: 'Historical evidence for Jesus, the resurrection and the gospel'
  },
  'presuppositional': {
    zh: '前设护教', en: 'Presuppositional',
    icon: '🧠',
    description_zh: '世界观层面的护教：理性、逻辑与信仰前设',
    description_en: 'Worldview-level apologetics: reason, logic and presuppositions'
  },
  'objections': {
    zh: '回应质疑', en: 'Objections',
    icon: '💬',
    description_zh: '苦难、恶、地狱、奇迹等常见反对的回应',
    description_en: 'Responses to common objections: evil, suffering, hell, miracles'
  },
  'faith-culture': {
    zh: '信仰与文化', en: 'Faith & Culture',
    icon: '🔬',
    description_zh: '科学与信仰、人生意义、当代文化议题',
    description_en: 'Science and faith, meaning of life, contemporary cultural issues'
  },
  'comparative': {
    zh: '比较宗教', en: 'Comparative Religion',
    icon: '⚔️',
    description_zh: '回应伊斯兰、佛教、印度教等其他宗教',
    description_en: 'Engaging Islam, Buddhism, Hinduism and other religions'
  },
  'discernment': {
    zh: '辨别异端', en: 'Discernment',
    icon: '🚨',
    description_zh: '识别和回应异端邪教，持守纯正信仰',
    description_en: 'Identifying and responding to cults, holding to sound doctrine'
  },
};

export const apologeticsSections: string[] = ['foundations', 'scripture', 'gospel-evidence', 'presuppositional', 'objections', 'faith-culture', 'comparative', 'discernment'];

export const worldviewLabels: Record<string, { zh: string; en: string }> = {
  all: { zh: '全部', en: 'All' },
  atheism: { zh: '无神论', en: 'Atheism' },
  islam: { zh: '伊斯兰教', en: 'Islam' },
  buddhism: { zh: '佛教', en: 'Buddhism' },
  cults: { zh: '异端', en: 'Cults' },
  secularism: { zh: '世俗主义', en: 'Secularism' },
  general: { zh: '通用', en: 'General' },
  hinduism: { zh: '印度教', en: 'Hinduism' },
  judaism: { zh: '犹太教', en: 'Judaism' },
};
