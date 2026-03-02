'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import { books, bookCategories } from '@/lib/data';

const categoryInfo: Record<string, { icon: string; en: string; description_zh: string }> = {
  '系统神学': { icon: '⛪', en: 'Systematic Theology', description_zh: '探讨上帝的属性、救恩论、基督论、圣灵论、末世论等核心教义的系统性著作。' },
  '圣经研究': { icon: '📖', en: 'Biblical Studies', description_zh: '深入研究圣经文本、历史背景、释经方法，以及新旧约各卷的注释与分析。' },
  '护教学': { icon: '🛡️', en: 'Apologetics', description_zh: '为基督教信仰的合理性提供理性辩护，回应怀疑论和无神论的挑战。' },
  '哲学与思想': { icon: '🧠', en: 'Philosophy', description_zh: '从哲学角度探讨上帝的存在、意识、道德基础、知识论等根本问题。' },
  '基督徒生活': { icon: '🌿', en: 'Christian Living', description_zh: '帮助信徒在日常生活中活出信仰，包括门徒训练、教会生活、传福音等。' },
  '伦理与文化': { icon: '⚖️', en: 'Ethics & Culture', description_zh: '从基督教世界观审视当代伦理议题、社会正义、科技发展与文化冲突。' },
  '科学与信仰': { icon: '🔬', en: 'Science & Faith', description_zh: '探讨科学与基督教信仰的关系，包括创造论、智慧设计、宇宙微调等课题。' },
  '灵修与生活': { icon: '🙏', en: 'Devotional Life', description_zh: '培养属灵生命的经典著作，涵盖祷告、灵修、恩典、苦难中的成长。' },
  '灵修': { icon: '🕊️', en: 'Devotional', description_zh: '培养与神亲密关系的灵修经典，帮助信徒在内在生命中成长。' },
  '祷告': { icon: '🙏', en: 'Prayer', description_zh: '关于祷告的教导与操练，学习与神交通的艺术。' },
  '比较宗教': { icon: '🌍', en: 'Comparative Religion', description_zh: '比较基督教与伊斯兰教、佛教、印度教等其他宗教的核心教义差异。' },
  '异端辨别': { icon: '🚨', en: 'Cult Discernment', description_zh: '辨别和回应异端邪教，包括耶和华见证人、摩门教、新天地等组织。' },
  '教会历史': { icon: '🏛️', en: 'Church History', description_zh: '基督教两千年历史中的重要人物、事件和思想发展。' },
  '古典著作': { icon: '📜', en: 'Classical Works', description_zh: '教父时期至宗教改革的基督教经典著作，见证信仰的历史传承。' },
  '文学': { icon: '✍️', en: 'Literature', description_zh: '以文学形式表达基督教真理的经典作品，寓教于乐，启发思考。' },
  '见证': { icon: '💡', en: 'Testimonies', description_zh: '真实的信仰见证，记录个人认识基督、生命改变的感人经历。' },
  '传记': { icon: '👤', en: 'Biography', description_zh: '信仰伟人的生平记录，激励后人效法他们的信心与委身。' },
  '世界观': { icon: '🌐', en: 'Worldview', description_zh: '帮助建立整全的基督教世界观，理解和评估不同的世界观体系。' },
  '讲道': { icon: '🎤', en: 'Sermons', description_zh: '历代名牧的讲道精选，学习如何传讲神的话语。' },
  '历史': { icon: '📚', en: 'History', description_zh: '与基督教相关的历史著作，包括犹太历史、宗教改革史等。' },
  '书信': { icon: '✉️', en: 'Letters', description_zh: '历代圣徒的书信集，充满牧养智慧和属灵洞见。' },
  '释经': { icon: '🔍', en: 'Exegesis', description_zh: '圣经注释与释经著作，帮助深入理解经文含义。' },
  '教牧': { icon: '🐑', en: 'Pastoral', description_zh: '关于牧养、讲道、教会治理的实用著作。' },
  '福音': { icon: '✝️', en: 'Gospel', description_zh: '传讲福音的经典著作，帮助人认识救恩。' },
  '圣经论': { icon: '📕', en: 'Bibliology', description_zh: '关于圣经的本质、权威、默示和无误的教义。' },
  '历史文献': { icon: '📃', en: 'Historical Documents', description_zh: '影响基督教历史的重要文献。' },
  '神学': { icon: '📚', en: 'Theology', description_zh: '神学研究与教义探讨。' },
};

const categoryGradients = [
  'from-indigo-600 to-blue-700',
  'from-amber-600 to-yellow-700',
  'from-red-600 to-rose-700',
  'from-purple-600 to-violet-700',
  'from-teal-600 to-cyan-700',
  'from-green-600 to-emerald-700',
  'from-orange-600 to-red-700',
  'from-pink-600 to-fuchsia-700',
  'from-sky-600 to-blue-700',
  'from-rose-600 to-red-700',
  'from-slate-600 to-gray-700',
  'from-lime-600 to-green-700',
  'from-yellow-600 to-amber-700',
  'from-cyan-600 to-teal-700',
];

function normalize(str: string): string {
  return str.toLowerCase().replace(/[\s·．・]/g, '');
}

export default function LibraryPage() {
  const [search, setSearch] = useState('');

  const searchResults = useMemo(() => {
    if (!search.trim()) return null;
    const q = normalize(search);
    return books.filter(b =>
      normalize(b.title_zh).includes(q) ||
      normalize(b.title_en).includes(q) ||
      normalize(b.author_zh).includes(q) ||
      normalize(b.author_en).includes(q)
    );
  }, [search]);

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <div className="text-center mb-6">
        <h1 className="font-serif-cn text-3xl font-bold text-[var(--color-primary)] dark:text-[var(--color-accent)] mb-2">📚 圣经·书库</h1>
        <p className="text-[var(--color-text-secondary)]">Library</p>
        <p className="text-sm text-[var(--color-text-secondary)] mt-2 max-w-lg mx-auto">你的话是我脚前的灯，是我路上的光。— 诗篇 119:105</p>
        <p className="text-xs text-[var(--color-text-secondary)] mt-1 max-w-lg mx-auto italic">Your word is a lamp for my feet, a light on my path. — Psalm 119:105</p>
      </div>

      {/* Bible Entry */}
      <Link href="/bible" className="block mb-6 p-5 rounded-2xl bg-gradient-to-r from-amber-600 to-yellow-700 text-white hover:from-amber-500 hover:to-yellow-600 transition-all shadow-lg">
        <div className="flex items-center gap-4">
          <span className="text-4xl">📖</span>
          <div>
            <div className="text-xl font-bold">圣经 / Holy Bible</div>
            <div className="text-amber-100 text-sm mt-0.5">和合本 · King James Version — 66卷 1189章</div>
          </div>
          <span className="ml-auto text-2xl">→</span>
        </div>
      </Link>

      {/* Search */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="搜索书名或作者 Search by title or author..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)] placeholder:text-[var(--color-text-secondary)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/40"
        />
      </div>

      {/* Quick links */}
      <div className="mb-6 flex flex-wrap gap-3">
        <Link href="/library/readable" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--color-accent)]/10 text-[var(--color-accent)] hover:bg-[var(--color-accent)]/20 transition-colors text-sm font-medium">
          📖 可阅读全文的书籍（{books.filter(b => b.full_epub_filename).length}本公版经典）
        </Link>
        <a href="/library/author" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--color-accent)]/10 text-[var(--color-accent)] hover:bg-[var(--color-accent)]/20 transition-colors text-sm font-medium">
          ✍️ 按作者浏览
        </a>
        <Link href="/library/audience" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--color-accent)]/10 text-[var(--color-accent)] hover:bg-[var(--color-accent)]/20 transition-colors text-sm font-medium">
          👥 按适合人群浏览
        </Link>
      </div>

      {/* Search results */}
      {searchResults !== null ? (
        <div>
          <p className="text-sm text-[var(--color-text-secondary)] mb-4">
            {searchResults.length === 0 ? '没有找到匹配的书籍' : `找到 ${searchResults.length} 本书`}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {searchResults.map((book, i) => (
              <Link key={book.id} href={`/library/${book.id}`} className="block group">
                <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-0.5">
                  <div className={`bg-gradient-to-br ${['from-indigo-600 to-blue-800','from-emerald-600 to-teal-800','from-purple-600 to-violet-800'][i % 3]} p-5 aspect-[3/4] flex flex-col justify-between text-white relative`}>
                    {book.full_epub_filename && (
                      <div className="absolute top-3 right-3 bg-white/30 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                        📖 可阅读
                      </div>
                    )}
                    <span className="text-xs opacity-60 uppercase tracking-wider line-clamp-1">{book.author_en}</span>
                    <div>
                      <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full mb-2 inline-block">{(book as any).category}</span>
                      <h3 className="font-serif-cn text-xl font-bold mb-1">{book.title_zh}</h3>
                      <p className="text-white/70 text-sm italic line-clamp-1">{book.title_en}</p>
                      <p className="text-white/60 text-xs mt-1">{book.author_zh}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ) : (

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {bookCategories.map(([cat, count], i) => {
          const info = categoryInfo[cat] || { icon: '📘', en: cat, description_zh: '' };
          return (
            <Link key={cat} href={`/library/category/${encodeURIComponent(cat)}`} className="block group">
              <div className={`rounded-2xl bg-gradient-to-br ${categoryGradients[i % categoryGradients.length]} p-6 text-white shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 h-full`}>
                <div className="flex items-start justify-between mb-4">
                  <div className="text-3xl">{info.icon}</div>
                  <div className="text-xs bg-white/25 px-2 py-1 rounded-full">
                    {count}
                  </div>
                </div>

                <h3 className="font-serif-cn font-bold text-xl mb-2">{cat}</h3>
                <p className="text-white/80 text-sm italic mb-3">{info.en}</p>
                <p className="text-white/90 text-sm leading-relaxed mb-4">{info.description_zh}</p>

                <div className="flex items-center justify-between pt-2 border-t border-white/20">
                  <span className="text-xs text-white/70">点击进入</span>
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <span className="text-sm">→</span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      )}
    </div>
  );
}
