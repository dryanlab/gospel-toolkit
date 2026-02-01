import qaData from '@/data/qa_questions.json';
import catechismData from '@/data/catechism_wsc.json';
import apologeticsData from '@/data/apologetics.json';
import booksData from '@/data/books.json';
import type { QAQuestion, CatechismQuestion, ApologeticsTopic, Book } from './types';

export const qaQuestions: QAQuestion[] = qaData as QAQuestion[];
export const catechismQuestions: CatechismQuestion[] = catechismData as CatechismQuestion[];
export const apologeticsTopics: ApologeticsTopic[] = apologeticsData as ApologeticsTopic[];
export const books: Book[] = booksData as Book[];

export function getQAById(id: string): QAQuestion | undefined {
  return qaQuestions.find(q => q.id === id);
}

export function getCatechismById(id: string): CatechismQuestion | undefined {
  return catechismQuestions.find(q => q.id === id);
}

export function getCatechismByNumber(num: number): CatechismQuestion | undefined {
  return catechismQuestions.find(q => q.number === num);
}

export function getApologeticsById(id: string): ApologeticsTopic | undefined {
  return apologeticsTopics.find(t => t.id === id);
}

export function getBookById(id: string): Book | undefined {
  return books.find(b => b.id === id);
}

export function searchAll(query: string) {
  const q = query.toLowerCase();
  return {
    qa: qaQuestions.filter(item => 
      item.question_zh.toLowerCase().includes(q) ||
      item.question_en.toLowerCase().includes(q) ||
      item.short_answer_zh.toLowerCase().includes(q) ||
      item.short_answer_en.toLowerCase().includes(q)
    ),
    catechism: catechismQuestions.filter(item =>
      item.question_zh.toLowerCase().includes(q) ||
      item.question_en.toLowerCase().includes(q) ||
      item.answer_zh.toLowerCase().includes(q) ||
      item.answer_en.toLowerCase().includes(q)
    ),
    apologetics: apologeticsTopics.filter(item =>
      item.topic_zh.toLowerCase().includes(q) ||
      item.topic_en.toLowerCase().includes(q) ||
      item.core_argument_zh.toLowerCase().includes(q) ||
      item.core_argument_en.toLowerCase().includes(q)
    ),
    books: books.filter(item =>
      item.title_zh.toLowerCase().includes(q) ||
      item.title_en.toLowerCase().includes(q) ||
      item.author_zh.toLowerCase().includes(q) ||
      item.author_en.toLowerCase().includes(q) ||
      item.summary_zh.toLowerCase().includes(q) ||
      item.summary_en.toLowerCase().includes(q)
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
};

export const worldviewLabels: Record<string, { zh: string; en: string }> = {
  all: { zh: '全部', en: 'All' },
  atheism: { zh: '无神论', en: 'Atheism' },
  islam: { zh: '伊斯兰教', en: 'Islam' },
  buddhism: { zh: '佛教', en: 'Buddhism' },
  cults: { zh: '异端', en: 'Cults' },
  secularism: { zh: '世俗主义', en: 'Secularism' },
};
