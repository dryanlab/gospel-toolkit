'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getDailyContent, type DailyContent } from '@/lib/family-altar';
import { themes as allThemes } from '@/data/family-altar-data';

function GuideSection() {
  const [open, setOpen] = useState(false);
  return (
    <div className="mb-8">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-5 py-3 text-left hover:bg-[var(--color-bg-secondary)]/80 transition-colors"
      >
        <span className="flex items-center gap-2 text-sm font-medium text-[var(--color-text)]">
          📘 关于家庭祭坛 · About Family Altar
        </span>
        <span className="text-[var(--color-text-secondary)] text-xs">{open ? '收起 ▲' : '展开 ▼'}</span>
      </button>
      {open && (
        <div className="mt-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-5 space-y-4 text-sm text-[var(--color-text)]">
          <div>
            <p className="font-medium mb-1">🎯 什么是家庭祭坛？</p>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              家庭祭坛是基督徒家庭的每日敬拜时间。全家人一起读经、默想、讨论、祷告和唱诗，在神的话语中建立属灵的根基。
            </p>
            <p className="font-medium mb-1 mt-3">🎯 What is Family Altar?</p>
            <p className="text-[var(--color-text-secondary)] leading-relaxed italic">
              Family Altar is a daily worship time for Christian families, reading Scripture, reflecting, discussing, praying, and singing together to build a spiritual foundation in God&apos;s Word.
            </p>
          </div>

          <div>
            <p className="font-medium mb-1">📋 每日内容包括：</p>
            <p className="text-[var(--color-text-secondary)] italic text-xs mb-2">Daily Content Includes:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[var(--color-text-secondary)]">
              <div className="flex items-start gap-2"><span>📖</span><span><strong>今日经文</strong>：中英双语经文<br/><span className="italic text-xs">Daily Scripture: Bilingual passage</span></span></div>
              <div className="flex items-start gap-2"><span>💭</span><span><strong>默想</strong>：经文要点<br/><span className="italic text-xs">Reflection: Key insights</span></span></div>
              <div className="flex items-start gap-2"><span>💬</span><span><strong>家庭讨论</strong>：讨论问题<br/><span className="italic text-xs">Discussion: Questions for the family</span></span></div>
              <div className="flex items-start gap-2"><span>🙏</span><span><strong>祷告引导</strong>：祷告方向<br/><span className="italic text-xs">Prayer Guide: Prayer direction</span></span></div>
              <div className="flex items-start gap-2"><span>🎵</span><span><strong>诗歌推荐</strong>：相关赞美诗<br/><span className="italic text-xs">Hymn Suggestion: Related hymn</span></span></div>
              <div className="flex items-start gap-2"><span>📚</span><span><strong>今日要理</strong>：韦敏斯德小要理问答（107题）＋大要理问答（196题），303天一轮<br/><span className="italic text-xs">Daily Catechism: WSC (107 Qs) + WLC (196 Qs), 303-day cycle</span></span></div>
              <div className="flex items-start gap-2"><span>🍞</span><span><strong>谢饭祷告</strong>：饭前祷词<br/><span className="italic text-xs">Meal Prayer: Grace before meals</span></span></div>
            </div>
          </div>

          <div>
            <p className="font-medium mb-1">⏱️ 如何使用？<br/><span className="text-xs font-normal italic text-[var(--color-text-secondary)]">How to Use?</span></p>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              每次 <strong>5-10 分钟</strong>即可。建议选一个固定时间（如晚餐前后），由一位家庭成员带领朗读经文，全家一起默想、讨论、祷告。不需要完成所有区块，选择适合你家庭的部分开始就好。
            </p>
            <p className="text-[var(--color-text-secondary)] leading-relaxed italic mt-1">
              Just <strong>5–10 minutes</strong> each time. Pick a regular time (e.g. before or after dinner), have one family member read the Scripture aloud, then reflect, discuss, and pray together. You don&apos;t have to cover every section, start with what works for your family.
            </p>
          </div>

          <div>
            <p className="font-medium mb-1">🔄 内容如何更新？<br/><span className="text-xs font-normal italic text-[var(--color-text-secondary)]">How Does Content Update?</span></p>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              每天自动更新。每 15 天围绕一个主题，教义主题与圣经经卷交替进行，主题内经文按顺序递进。全年共 27 个主题（含3个节期特辑）、404 天灵修内容。
            </p>
            <p className="text-[var(--color-text-secondary)] leading-relaxed italic mt-1">
              Content updates daily. Every 15 days focuses on one theme, alternating between doctrinal and biblical narrative themes. Scriptures progress sequentially within each theme. 27 themes (including 3 seasonal specials), 404 devotional days in total.
            </p>
          </div>

          <div>
            <p className="font-medium mb-1">🎄 节期特辑</p>
            <p className="text-xs font-normal italic text-[var(--color-text-secondary)] mb-2">Seasonal Specials</p>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              每年有三个节期会自动切换为对应的专题灵修，优先于常规主题轮转：
            </p>
            <p className="text-[var(--color-text-secondary)] leading-relaxed italic mt-1">
              Three seasonal specials automatically override the regular rotation each year:
            </p>
            <div className="mt-3 space-y-3 text-[var(--color-text-secondary)]">
              <div className="flex items-start gap-2 text-xs">
                <span className="text-sm">✝️</span>
                <div>
                  <p><strong>受难周</strong>, 复活节前15天（每年日期不同）</p>
                  <p className="italic">Passion Week, 15 days before Easter (date varies each year)</p>
                </div>
              </div>
              <div className="flex items-start gap-2 text-xs">
                <span className="text-sm">🌅</span>
                <div>
                  <p><strong>复活节</strong>, 复活节当天起15天（紧接受难周）</p>
                  <p className="italic">Easter &amp; Resurrection, 15 days from Easter Sunday (follows Passion Week)</p>
                </div>
              </div>
              <div className="flex items-start gap-2 text-xs">
                <span className="text-sm">⭐</span>
                <div>
                  <p><strong>将临期/圣诞</strong>, 每年12月10日-24日</p>
                  <p className="italic">Advent &amp; Christmas, December 10–24 each year</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="font-medium mb-1">📚 常规主题一览</p>
            <p className="text-xs font-normal italic text-[var(--color-text-secondary)] mb-3">Regular Themes</p>
            <div className="space-y-3">
              {(() => {
                const seasonalIds = new Set(['passion', 'resurrection', 'advent']);
                const regular = allThemes.filter(t => !seasonalIds.has(t.id));
                const doctrinal = regular.filter((_, i) => i % 2 === 0);
                const biblical = regular.filter((_, i) => i % 2 === 1);
                return (<>
                  <div>
                    <p className="text-xs font-medium text-[var(--color-accent)] mb-1">教义主题 ({doctrinal.length})</p>
                    <p className="text-[10px] italic text-[var(--color-text-secondary)] mb-2">Doctrinal Themes</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[var(--color-text-secondary)]">
                      {doctrinal.map((t) => (
                        <div key={t.id} className="flex items-start gap-1.5 text-xs">
                          <span>{t.icon}</span>
                          <div>
                            <p>{t.name_zh}</p>
                            <p className="italic text-[10px] opacity-70">{t.name_en}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-[var(--color-accent)] mb-1">圣经经卷主题 ({biblical.length})</p>
                    <p className="text-[10px] italic text-[var(--color-text-secondary)] mb-2">Biblical Narrative Themes</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[var(--color-text-secondary)]">
                      {biblical.map((t) => (
                        <div key={t.id} className="flex items-start gap-1.5 text-xs">
                          <span>{t.icon}</span>
                          <div>
                            <p>{t.name_zh}</p>
                            <p className="italic text-[10px] opacity-70">{t.name_en}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </>);
              })()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function parseLocalDate(s: string): Date {
  const [y, m, d] = s.split('-').map(Number);
  return new Date(y, m - 1, d);
}

function formatDate(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function shiftDate(date: Date, days: number): Date {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
}

type AgeMode = 'family' | 'kids' | 'teen';

const ageModes: { key: AgeMode; label: string; desc: string; emoji: string }[] = [
  { key: 'family', label: '全家版', desc: 'All Ages', emoji: '👨‍👩‍👧‍👦' },
  { key: 'kids', label: '少儿版', desc: '3-10 yrs', emoji: '🧒' },
  { key: 'teen', label: '青少年版', desc: '11+', emoji: '🧑' },
];

import SpeakButton from '@/components/SpeakButton';

// --- Check-in helpers ---
function getCheckinKey(dateStr: string) {
  return `fa_checkin_${dateStr}`;
}
function isCheckedIn(dateStr: string): boolean {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem(getCheckinKey(dateStr)) === '1';
}
function doCheckin(dateStr: string) {
  localStorage.setItem(getCheckinKey(dateStr), '1');
}
function getCheckinStats() {
  if (typeof window === 'undefined') return { streak: 0, monthCount: 0, monthTotal: 0 };
  const today = new Date();
  // Current month count
  const y = today.getFullYear();
  const m = today.getMonth();
  const daysInMonth = new Date(y, m + 1, 0).getDate();
  let monthCount = 0;
  for (let d = 1; d <= daysInMonth; d++) {
    const ds = `${y}-${String(m + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
    if (localStorage.getItem(`fa_checkin_${ds}`) === '1') monthCount++;
  }
  // Streak (consecutive days ending today or yesterday)
  let streak = 0;
  const check = new Date(today);
  // Allow streak to start from today
  for (let i = 0; i < 365; i++) {
    const ds = formatDate(check);
    if (localStorage.getItem(`fa_checkin_${ds}`) === '1') {
      streak++;
      check.setDate(check.getDate() - 1);
    } else if (i === 0) {
      // Today not checked in yet, try starting from yesterday
      check.setDate(check.getDate() - 1);
      continue;
    } else {
      break;
    }
  }
  return { streak, monthCount, monthTotal: daysInMonth };
}

export default function FamilyAltarPage() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [content, setContent] = useState<DailyContent | null>(null);
  const [ageMode, setAgeMode] = useState<AgeMode>('family');
  const [checkedIn, setCheckedIn] = useState(false);
  const [stats, setStats] = useState({ streak: 0, monthCount: 0, monthTotal: 0 });

  useEffect(() => {
    setContent(getDailyContent(selectedDate));
    setCheckedIn(isCheckedIn(formatDate(selectedDate)));
    setStats(getCheckinStats());
  }, [selectedDate]);

  const isToday = formatDate(selectedDate) === formatDate(new Date());

  // Show/hide sections based on age mode
  const showReflection = ageMode !== 'kids';
  const showCatechism = ageMode !== 'kids';
  const showEnglish = ageMode !== 'kids';

  if (!content) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-8 text-center">
        <p className="text-[var(--color-text-secondary)]">加载中...</p>
      </div>
    );
  }

  const { theme, scripture, reflection, question, prayer, catechism, mealPrayer, hymnKeywords } = content;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <span className="text-5xl mb-4 block">🏠</span>
        <h1 className="font-serif-cn text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-2">
          家庭祭坛
        </h1>
        <p className="text-base text-[var(--color-text-secondary)] mb-3">Family Altar</p>

        {/* Date Navigation */}
        <div className="flex items-center justify-center gap-3 mb-3">
          <button
            onClick={() => setSelectedDate(shiftDate(selectedDate, -1))}
            className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-3 py-1.5 text-sm text-[var(--color-text)] hover:bg-[var(--color-accent)]/10 transition-colors"
            title="前一天 Previous Day"
          >
            ← 前一天
          </button>
          <input
            type="date"
            value={formatDate(selectedDate)}
            onChange={(e) => {
              if (e.target.value) setSelectedDate(parseLocalDate(e.target.value));
            }}
            className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-3 py-1.5 text-sm text-[var(--color-text)] text-center"
          />
          <button
            onClick={() => setSelectedDate(shiftDate(selectedDate, 1))}
            className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-3 py-1.5 text-sm text-[var(--color-text)] hover:bg-[var(--color-accent)]/10 transition-colors"
            title="后一天 Next Day"
          >
            后一天 →
          </button>
        </div>

        {!isToday && (
          <button
            onClick={() => setSelectedDate(new Date())}
            className="text-xs text-[var(--color-accent)] hover:underline mb-2"
          >
            回到今天 Back to Today
          </button>
        )}

        <p className="text-sm text-[var(--color-text-secondary)]">
          {content.date} · 本期主题：
          <span className="text-[var(--color-accent)] font-medium">
            {theme.icon} {theme.name_zh} {theme.name_en}
          </span>
        </p>
        <p className="text-xs text-[var(--color-text-secondary)] mt-1">
          {content.isSeasonal && <span className="inline-block bg-[var(--color-accent)]/15 text-[var(--color-accent)] rounded px-1.5 py-0.5 text-[10px] font-medium mr-1">🎄 节期特辑 Seasonal</span>}
          第 {content.dayInTheme} / {content.totalDaysInTheme} 天 · Day {content.dayInTheme} of {content.totalDaysInTheme}
        </p>

        {/* Age Mode Selector */}
        <div className="flex items-center justify-center gap-2 mt-4">
          {ageModes.map((mode) => (
            <button
              key={mode.key}
              onClick={() => setAgeMode(mode.key)}
              className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                ageMode === mode.key
                  ? 'bg-[var(--color-accent)] text-white'
                  : 'border border-[var(--color-border)] bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)] hover:bg-[var(--color-accent)]/10'
              }`}
            >
              {mode.emoji} {mode.label}
              <span className="hidden sm:inline text-[10px] opacity-70 ml-1">({mode.desc})</span>
            </button>
          ))}
        </div>
        {ageMode === 'kids' && (
          <p className="text-[10px] text-[var(--color-text-secondary)] mt-1">
            🧒 少儿版：精简内容，只保留经文、讨论和祷告，字体加大
          </p>
        )}
        {ageMode === 'teen' && (
          <p className="text-[10px] text-[var(--color-text-secondary)] mt-1">
            🧑 青少年版：完整内容，适合独立阅读和思考
          </p>
        )}
      </div>

      {/* Guide */}
      <GuideSection />

      <div className="space-y-6">
        {/* 1. 今日经文 */}
        <section className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">📖</span>
              <h2 className="font-serif-cn text-xl font-bold text-[var(--color-text)]">今日经文</h2>
              <span className="text-xs text-[var(--color-text-secondary)]">Daily Scripture</span>
            </div>
            <div className="flex gap-2">
              <SpeakButton text={scripture.text_zh} lang="zh" />
              {showEnglish && <SpeakButton text={scripture.text_en} lang="en" />}
            </div>
          </div>
          <div className="rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] p-4">
            <p className={`text-[var(--color-text)] leading-relaxed mb-2 ${ageMode === 'kids' ? 'text-lg' : ''}`}>
              &ldquo;{scripture.text_zh}&rdquo;
            </p>
            {showEnglish && (
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed italic mb-3">
                &ldquo;{scripture.text_en}&rdquo;
              </p>
            )}
            <p className="text-xs text-[var(--color-accent)] font-medium">
             , {scripture.ref_zh}{showEnglish ? ` / ${scripture.ref_en}` : ''}
            </p>
          </div>
        </section>

        {/* 2. 默想 */}
        {showReflection && (
        <section className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">💭</span>
              <h2 className="font-serif-cn text-xl font-bold text-[var(--color-text)]">默想</h2>
              <span className="text-xs text-[var(--color-text-secondary)]">Reflection</span>
            </div>
            <div className="flex gap-2">
              <SpeakButton text={reflection.zh} lang="zh" />
              {showEnglish && <SpeakButton text={reflection.en} lang="en" />}
            </div>
          </div>
          <p className="text-[var(--color-text)] leading-relaxed mb-2">{reflection.zh}</p>
          {showEnglish && <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed italic">{reflection.en}</p>}
        </section>
        )}

        {/* 3. 讨论 */}
        <section className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">💬</span>
              <h2 className="font-serif-cn text-xl font-bold text-[var(--color-text)]">
                {ageMode === 'kids' ? '想一想' : '家庭讨论'}
              </h2>
              <span className="text-xs text-[var(--color-text-secondary)]">Discussion</span>
            </div>
            <div className="flex gap-2">
              <SpeakButton text={question.zh} lang="zh" />
              {showEnglish && <SpeakButton text={question.en} lang="en" />}
            </div>
          </div>
          <div className="rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] p-4">
            <p className={`text-[var(--color-text)] leading-relaxed mb-1 ${ageMode === 'kids' ? 'text-lg' : ''}`}>{question.zh}</p>
            {showEnglish && <p className="text-sm text-[var(--color-text-secondary)] italic">{question.en}</p>}
          </div>
        </section>

        {/* 4. 祷告 */}
        <section className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🙏</span>
              <h2 className="font-serif-cn text-xl font-bold text-[var(--color-text)]">
                {ageMode === 'kids' ? '一起祷告' : '祷告引导'}
              </h2>
              <span className="text-xs text-[var(--color-text-secondary)]">Prayer Guide</span>
            </div>
            <div className="flex gap-2">
              <SpeakButton text={prayer.zh} lang="zh" />
              {showEnglish && <SpeakButton text={prayer.en} lang="en" />}
            </div>
          </div>
          <p className={`text-[var(--color-text)] leading-relaxed mb-2 ${ageMode === 'kids' ? 'text-lg' : ''}`}>{prayer.zh}</p>
          {showEnglish && <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed italic">{prayer.en}</p>}
        </section>

        {/* 5. 诗歌推荐 */}
        <section className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">🎵</span>
            <h2 className="font-serif-cn text-xl font-bold text-[var(--color-text)]">诗歌推荐</h2>
            <span className="text-xs text-[var(--color-text-secondary)]">Hymn Suggestion</span>
          </div>
          <p className="text-sm text-[var(--color-text)] mb-3">
            今天的主题是<strong>{theme.name_zh}</strong>，推荐唱一首与此相关的诗歌：
          </p>
          <Link
            href={`/worship?q=${encodeURIComponent(hymnKeywords[0])}`}
            className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-accent)]/10 text-[var(--color-accent)] px-4 py-2 text-sm font-medium hover:bg-[var(--color-accent)]/20 transition-colors"
          >
            🎶 浏览「{hymnKeywords[0]}」相关诗歌 →
          </Link>
        </section>

        {/* 6. 今日要理 */}
        {showCatechism && (
        <section className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">📚</span>
              <h2 className="font-serif-cn text-xl font-bold text-[var(--color-text)]">今日要理</h2>
              <span className="text-xs text-[var(--color-text-secondary)]">
                {catechism.type === 'wsc' ? '韦敏斯德小要理问答 WSC' : '韦敏斯德大要理问答 WLC'}
              </span>
            </div>
            <div className="flex gap-2">
              <SpeakButton text={`第${catechism.number}问：${catechism.question_zh}`} lang="zh" />
              <SpeakButton text={`Question ${catechism.number}: ${catechism.question_en}`} lang="en" />
            </div>
          </div>
          <p className="text-[var(--color-text)] mb-1 font-medium">
            {catechism.type === 'wsc' ? '小要理' : '大要理'} Q{catechism.number}: {catechism.question_zh}
          </p>
          <p className="text-sm text-[var(--color-text-secondary)] italic mb-3">{catechism.question_en}</p>
          <Link
            href={`/catechism/${catechism.id}`}
            className="text-sm text-[var(--color-accent)] hover:underline font-medium"
          >
            查看答案 View Answer →
          </Link>
        </section>
        )}

        {/* 7. 谢饭祷告 */}
        <section className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🍞</span>
              <h2 className="font-serif-cn text-xl font-bold text-[var(--color-text)]">谢饭祷告</h2>
              <span className="text-xs text-[var(--color-text-secondary)]">Meal Prayer</span>
            </div>
            <div className="flex gap-2">
              <SpeakButton text={mealPrayer.zh} lang="zh" />
              <SpeakButton text={mealPrayer.en} lang="en" />
            </div>
          </div>
          <div className="rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] p-4">
            <p className="text-[var(--color-text)] leading-relaxed mb-2">{mealPrayer.zh}</p>
            <p className="text-sm text-[var(--color-text-secondary)] italic">{mealPrayer.en}</p>
          </div>
        </section>
      </div>

      {/* Check-in Section */}
      <div className="mt-8 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-6 text-center">
        {checkedIn ? (
          <div>
            <span className="text-4xl block mb-2">✅</span>
            <p className="text-[var(--color-text)] font-bold">今日已完成！</p>
            <p className="text-xs text-[var(--color-text-secondary)] italic">Today&apos;s devotion completed!</p>
          </div>
        ) : (
          <button
            onClick={() => {
              doCheckin(formatDate(selectedDate));
              setCheckedIn(true);
              setStats(getCheckinStats());
            }}
            className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-accent)] text-white px-8 py-3 text-base font-bold hover:opacity-90 transition-opacity"
          >
            ✅ 今日灵修已完成 · Done for Today
          </button>
        )}

        {/* Stats */}
        <div className="flex items-center justify-center gap-6 mt-4">
          <div>
            <p className="text-2xl font-bold text-[var(--color-accent)]">{stats.streak}</p>
            <p className="text-xs text-[var(--color-text-secondary)]">连续天数<br/><span className="italic">Streak</span></p>
          </div>
          <div className="w-px h-10 bg-[var(--color-border)]" />
          <div>
            <p className="text-2xl font-bold text-[var(--color-accent)]">{stats.monthCount}/{stats.monthTotal}</p>
            <p className="text-xs text-[var(--color-text-secondary)]">本月完成<br/><span className="italic">This Month</span></p>
          </div>
        </div>
      </div>

      {/* Footer tip */}
      <div className="mt-6 text-center text-xs text-[var(--color-text-secondary)]">
        <p>💡 建议每次家庭敬拜控制在 5-10 分钟，简短、实用、易坚持</p>
        <p className="italic">Tip: Keep each family worship session to 5–10 minutes, short, practical, and sustainable</p>
      </div>
    </div>
  );
}
