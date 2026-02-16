-- Letters (articles)
CREATE TABLE IF NOT EXISTS letters (
  id          TEXT PRIMARY KEY,
  author      TEXT NOT NULL,
  author_en   TEXT NOT NULL,
  author_avatar TEXT NOT NULL DEFAULT '📜',
  author_bio  TEXT,
  author_bio_en TEXT,
  title_zh    TEXT NOT NULL,
  title_en    TEXT NOT NULL,
  date        TEXT NOT NULL,
  category    TEXT NOT NULL CHECK(category IN ('testimony','exposition','theology','fellowship','to-you')),
  scripture   TEXT,
  scripture_text_zh TEXT,
  scripture_text_en TEXT,
  summary_zh  TEXT,
  summary_en  TEXT,
  content_zh  TEXT NOT NULL,
  content_en  TEXT,
  tags        TEXT,  -- JSON array string
  status      TEXT NOT NULL DEFAULT 'draft' CHECK(status IN ('draft','published','archived')),
  created_at  TEXT DEFAULT (datetime('now')),
  updated_at  TEXT DEFAULT (datetime('now'))
);

-- Comments
CREATE TABLE IF NOT EXISTS comments (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  article_id  TEXT NOT NULL,
  name        TEXT NOT NULL,
  email       TEXT,
  city        TEXT,
  content     TEXT NOT NULL,
  allow_show  INTEGER DEFAULT 1,
  anonymous   INTEGER DEFAULT 0,
  status      TEXT DEFAULT 'pending' CHECK(status IN ('pending','approved','featured','rejected')),
  ip_hash     TEXT,
  created_at  TEXT DEFAULT (datetime('now')),
  reviewed_at TEXT
);
CREATE INDEX IF NOT EXISTS idx_comments_article ON comments(article_id, status);

-- Likes
CREATE TABLE IF NOT EXISTS likes (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  article_id  TEXT NOT NULL,
  ip_hash     TEXT NOT NULL,
  created_at  TEXT DEFAULT (datetime('now'))
);
CREATE UNIQUE INDEX IF NOT EXISTS idx_likes_unique ON likes(article_id, ip_hash);

-- Like counts (materialized for fast reads)
CREATE TABLE IF NOT EXISTS like_counts (
  article_id  TEXT PRIMARY KEY,
  count       INTEGER DEFAULT 0
);

-- Readings (chapter-by-chapter Bible readings)
CREATE TABLE IF NOT EXISTS readings (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  book        TEXT NOT NULL,
  book_en     TEXT NOT NULL,
  chapter     INTEGER NOT NULL,
  title       TEXT NOT NULL,
  title_en    TEXT NOT NULL,
  author      TEXT NOT NULL,
  author_en   TEXT NOT NULL,
  scripture   TEXT,
  content_zh  TEXT NOT NULL,
  content_en  TEXT,
  history_context_zh TEXT,
  history_context_en TEXT,
  structure_zh TEXT,
  structure_en TEXT,
  theology_zh TEXT,
  theology_en TEXT,
  christ_shadow_zh TEXT,
  christ_shadow_en TEXT,
  publish_date TEXT NOT NULL,
  status      TEXT NOT NULL DEFAULT 'draft' CHECK(status IN ('draft','published','archived')),
  created_at  TEXT DEFAULT (datetime('now')),
  updated_at  TEXT DEFAULT (datetime('now')),
  UNIQUE(book_en, chapter)
);
CREATE INDEX IF NOT EXISTS idx_readings_book ON readings(book_en, chapter);
CREATE INDEX IF NOT EXISTS idx_readings_publish ON readings(publish_date, status);
