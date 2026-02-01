export interface QAQuestion {
  id: string;
  category: string;
  question_zh: string;
  question_en: string;
  short_answer_zh: string;
  short_answer_en: string;
  detailed_answer_zh: string;
  detailed_answer_en: string;
  bible_verses: string[];
  related_readings: string[];
  tags: string[];
}

export interface CatechismQuestion {
  id: string;
  catechism: string;
  number: number;
  question_zh: string;
  question_en: string;
  answer_zh: string;
  answer_en: string;
  proof_texts: string[];
  notes_zh: string;
  notes_en: string;
}

export interface Objection {
  objection_zh: string;
  objection_en: string;
  response_zh: string;
  response_en: string;
}

export interface ApologeticsTopic {
  id: string;
  target_worldview: string;
  topic_zh: string;
  topic_en: string;
  core_argument_zh: string;
  core_argument_en: string;
  common_objections: Objection[];
  bible_verses: string[];
  recommended_resources: string[];
  tags: string[];
}

export interface BookChapter {
  number: number;
  title_zh: string;
  title_en: string;
  summary_zh: string;
  summary_en: string;
  key_quotes: string[];
}

export interface Book {
  id: string;
  author_zh: string;
  author_en: string;
  title_zh: string;
  title_en: string;
  summary_zh: string;
  summary_en: string;
  chapters: BookChapter[];
  recommend_for: string[];
  tags: string[];
  epub_filename: string | null;
  summary_epub_filename: string | null;
  full_epub_filename: string | null;
}

export type Language = 'zh' | 'en' | 'both';

export type WorldviewFilter = 'all' | 'atheism' | 'islam' | 'buddhism' | 'cults' | 'secularism';

export type QACategory = 'all' | 'existence_of_god' | 'problem_of_evil' | 'bible_reliability' | 'science_and_faith' | 'uniqueness_of_jesus' | 'sin_and_salvation' | 'life_after_death' | 'moral_foundation';
