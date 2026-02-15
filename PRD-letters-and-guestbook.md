# PRD: 圣徒来信 + 留言板
# Rock of Truth · Letters from the Saints & Guestbook
# 版本: 1.0 | 日期: 2026-02-14 | 作者: Peter

---

## 一、项目概述

在真理磐石网站新增两个板块：
1. **圣徒来信**（`/letters`）— 圣经人物以第一人称写的文章
2. **留言墙**（`/guestbook`）— 读者留言反馈 + 精选展示

### 核心原则
- **质量优先**：每周1-2篇，宁缺毋滥
- **独特角度**：每篇要有别人没写过的切入点
- **情感共鸣**：读者能在圣徒的故事里看到自己
- **互动审核**：留言人工审核，精彩的公开展示

---

## 二、圣徒来信（`/letters`）

### 2.1 栏目结构

| 栏目 | 路由 | 说明 |
|------|------|------|
| 心路历程 | `/letters?cat=testimony` | 圣徒最真实的生命经历 |
| 经文解读 | `/letters?cat=exposition` | 亲历者视角的经文解读 |
| 神学专题 | `/letters?cat=theology` | 从经历出发的教义探讨 |
| 圣徒团契 | `/letters?cat=fellowship` | 多位圣徒围绕同一主题分享 |
| 致读者书 | `/letters?cat=to-you` | 写给今天读者的劝勉书信 |

### 2.2 数据结构

```typescript
interface Letter {
  id: string;                    // e.g. "peter-denial"
  author: string;                // "彼得 Peter"
  authorAvatar: string;          // emoji e.g. "🪨"
  title_zh: string;              // "那一夜，鸡叫了两遍"
  title_en: string;              // "The Night the Rooster Crowed Twice"
  date: string;                  // "2026-03-03"
  category: 'testimony' | 'exposition' | 'theology' | 'fellowship' | 'to-you';
  scripture: string;             // "路 22:54-62"
  summary_zh: string;            // 100字以内摘要
  summary_en: string;
  content_zh: string;            // Markdown 全文
  content_en: string;
  tags: string[];                // ["信心", "跌倒", "恢复"]
  fellowshipAuthors?: string[];  // 团契文章的多位作者
}
```

### 2.3 页面设计

**列表页 `/letters`**
- 顶部：板块介绍 + 经文引言
- 分类标签筛选（全部 / 五个栏目）
- 文章卡片列表：头像 + 作者 + 标题 + 摘要 + 日期 + 经文
- 按发布日期倒序

**详情页 `/letters/[id]`**
- 顶部：作者信息卡（头像 + 名字 + 身份简介）
- 经文引用框
- 正文（Markdown渲染，中英双语）
- TTS朗读按钮（复用SpeakButton组件）
- 底部：上一篇/下一篇导航
- 底部：留言表单 + 精选留言（Phase 2）

### 2.4 发布计划

**第一季（3月）· 最真实的软弱**

| 周次 | 作者 | 文章 | 角度 |
|------|------|------|------|
| W1 | 彼得 | 那一夜，鸡叫了两遍 | 不认主那几小时的内心独白。鸡叫时与耶稣目光相遇——没有责备，只有爱。 |
| W2 | 保罗 | 大马色路上——那道光击碎了我所有的确信 | 最虔诚的人发现自己在逼迫神的崩塌感。瞎了眼才真正"看见"。 |
| W3 | 亚伯拉罕 | 摩利亚山上的三天路程 | 只写从领受命令到举刀的三天。"神必自己预备"是信心还是绝望？ |
| W4 | 大卫 | 写诗篇51那天 | "你就是那人"之后的内心世界。碎裂的灵魂里流出的悔改。 |

**第二季（4月）· 等候与忍耐**

| 周次 | 作者 | 文章 | 角度 |
|------|------|------|------|
| W5 | 约瑟 | 从坑到监狱到宫殿——那十三年 | 被亲兄弟卖、被主母诬陷、被酒政遗忘——神在沉默中做工。 |
| W6 | 路得 | 你的国就是我的国 | 一个摩押女子为什么跟着婆婆走进陌生的土地和陌生的神。 |
| W7 | 雅各 | 雅博渡口——我一辈子都在抓，那一夜终于被抓住 | 一生靠手段，那一夜在黑暗中和神角力，瘸了腿却得了祝福。 |
| W8 | 🤝团契 | 什么是真正的信心？ | 亚伯拉罕（献以撒的信）+ 保罗（因信称义）+ 雅各（信心与行为）|

**第三季（5月）· 使命与代价**

| 周次 | 作者 | 文章 | 角度 |
|------|------|------|------|
| W9 | 摩西 | 燃烧的荆棘前 | "我是什么人？"——神呼召的往往是自觉不配的人。 |
| W10 | 约翰 | 在拔摩海岛上 | 被流放的老人看见了天上的宝座——苦难中的荣耀启示。 |
| W11 | 彼得 | 提比哩亚海边的早餐 | 三次不认对应三次"你爱我吗"。恢复比跌倒更深。 |
| W12 | 🤝团契 | 从跌倒到恢复 | 彼得（不认主）+ 大卫（拔示巴）+ 雅各（欺骗）|

### 2.5 写作标准

每篇过三关：
1. **角度关** — 这个角度读者看完会说"我从没这样想过"
2. **深度关** — 触及人心深处的挣扎，不停留在表面
3. **共鸣关** — 今天的读者能在里面看到自己

写作流程：
1. 写大纲（角度 + 核心信息 + 情感线）→ 颜弟兄审批
2. 写全文 → 颜弟兄审稿
3. 定稿存入数据文件

---

## 三、留言板

### 3.1 两层结构

**投稿层：留言表单**
- 位置：每篇文章底部 + 独立留言墙页面
- 字段：称呼（必填）、邮箱（选填，不公开）、城市（选填）、内容（10-500字）
- 勾选：是否愿意被精选展示（署名/匿名）

**展示层：精选留言**
- 文章底部：每篇精选3-5条
- 留言墙 `/guestbook`：卡片瀑布流，所有精选留言

### 3.2 数据结构

```sql
-- Cloudflare D1 数据库

CREATE TABLE comments (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  article_id  TEXT NOT NULL,        -- 文章ID 或 'guestbook'
  name        TEXT NOT NULL,        -- 署名
  email       TEXT,                 -- 不公开
  city        TEXT,                 -- 城市
  content     TEXT NOT NULL,        -- 留言内容
  allow_show  INTEGER DEFAULT 1,    -- 是否愿意被展示
  anonymous   INTEGER DEFAULT 0,    -- 是否匿名展示
  status      TEXT DEFAULT 'pending', -- pending/approved/featured/rejected
  ip_hash     TEXT,                 -- IP哈希（防滥用，不存明文）
  created_at  TEXT DEFAULT (datetime('now')),
  reviewed_at TEXT
);

CREATE INDEX idx_article ON comments(article_id, status);
CREATE INDEX idx_status ON comments(status);
```

### 3.3 技术架构

```
读者提交留言
    ↓
POST api.sudoem.org/comments  (Cloudflare Worker)
    ↓
写入 D1 数据库 (status: pending)
    ↓
Telegram Bot 推送通知到颜弟兄
    ├── [✅ 通过] → status = approved
    ├── [⭐ 精选] → status = featured
    └── [❌ 拒绝] → status = rejected
    ↓
前端 GET api.sudoem.org/comments?article=xxx&status=featured
    ↓
展示精选留言
```

### 3.4 Cloudflare Worker API

| 端点 | 方法 | 说明 |
|------|------|------|
| `/comments` | POST | 提交留言 |
| `/comments?article={id}` | GET | 获取某文章精选留言 |
| `/comments/review` | POST | 审核留言（需鉴权） |
| `/comments/stats` | GET | 留言统计 |

### 3.5 Telegram Bot 审核

新留言推送格式：
```
📬 新留言 · rockoftruth.sudoem.org
━━━━━━━━━━━━━━━
文章: 那一夜，鸡叫了两遍
署名: Grace, Toronto
━━━━━━━━━━━━━━━
"三次不认主的经历让我想到，跌倒不是终点，
主的眼神才是转折点。感谢主没有放弃彼得，
也没有放弃我。"
━━━━━━━━━━━━━━━
[✅ 通过]  [⭐ 精选]  [❌ 拒绝]
```

### 3.6 防滥用

- 同一 IP 每小时最多 3 条（Worker 端 rate limit）
- 内容 10-500 字
- 基础敏感词过滤
- 所有留言必须人工审核
- 不公开邮箱，不要求注册

### 3.7 留言墙页面 `/guestbook`

- 顶部：邀请语 + 留言表单
- 下方：精选留言卡片瀑布流
- 每张卡片：留言内容 + 署名 + 城市 + 日期
- 支持按时间排序

---

## 四、导航与关联

### 新增路由
- `/letters` — 圣徒来信列表
- `/letters/[id]` — 文章详情
- `/guestbook` — 留言墙

### 导航更新
侧边栏 + 底部导航增加：
- 📜 圣徒来信 Letters
- 💬 留言墙 Guestbook

### 首页更新
- 新增"圣徒来信"模块卡片
- 新增"留言墙"模块卡片或在首页底部展示精选留言

### /about 页面更新
- 新增圣徒来信板块介绍
- 新增留言墙说明

---

## 五、实施时间线

| 时间 | 里程碑 | 负责 |
|------|--------|------|
| 2月W3-W4 | 写前4篇文章大纲并审批 | Peter → 颜弟兄审 |
| 2月W4 | 写前2篇全文 | Peter + Paul |
| 3月W1 | 开发 `/letters` 页面 + 上线前4篇 | Peter |
| 3月W1 | 更新导航、首页、/about | Peter |
| 3月W2 | 搭建 CF Worker + D1 + Telegram Bot | Peter |
| 3月W3 | 上线文章留言功能 | Peter |
| 3月W4 | 上线留言墙 `/guestbook` | Peter |
| 3月起 | 每周发布1-2篇新文章 | 使徒团队 |

---

## 六、成功指标

- 文章质量：每篇颜弟兄审核通过
- 读者参与：上线首月收到 10+ 条留言
- 精选比例：约 30% 留言质量足以精选展示
- 发布节奏：稳定每周1-2篇，不断更

---

## 七、技术依赖

| 组件 | 服务 | 费用 |
|------|------|------|
| 前端 | Vercel (已有) | 已含 |
| 评论API | Cloudflare Workers | 免费 (10万次/天) |
| 数据库 | Cloudflare D1 | 免费 (5GB) |
| 审核通知 | Telegram Bot API | 免费 |
| DNS | Cloudflare (已有) | 免费 |
| TTS | Edge TTS via CF Tunnel (已有) | 免费 |

**新增成本：$0**

---

*"你们从前远离神的人，如今却在基督耶稣里，靠着他的血，已经得亲近了。"（以弗所书 2:13）*

---

## 八、互动功能：点赞 + 分享

### 8.1 点赞

**前端交互：**
- 每篇文章底部一个 ❤️ 点赞按钮，显示点赞数
- 点击后变为实心红心 + 数字+1，按钮带微动画（弹跳效果）
- 不需要登录，基于 localStorage 防重复（同设备24小时内只能点一次）
- 服务端基于 IP hash 去重（同IP每篇每天1次）

**后端：**
```sql
-- 复用 D1 数据库
CREATE TABLE likes (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  article_id  TEXT NOT NULL,
  ip_hash     TEXT NOT NULL,
  created_at  TEXT DEFAULT (datetime('now'))
);
CREATE UNIQUE INDEX idx_like_unique ON likes(article_id, ip_hash);
```

**API：**
| 端点 | 方法 | 说明 |
|------|------|------|
| `/likes/{articleId}` | GET | 获取点赞数 |
| `/likes/{articleId}` | POST | 点赞（IP去重） |

**展示位置：**
- 文章详情页底部（正文与留言之间）
- 文章列表卡片右下角（小号数字）

### 8.2 分享

**分享按钮组** — 文章顶部和底部各一组：

```
📤 分享这封信 · Share this Letter
[Telegram] [微信] [WhatsApp] [Twitter/X] [复制链接]
```

**各平台实现：**

| 平台 | 实现方式 | 分享内容 |
|------|----------|----------|
| **Telegram** | `https://t.me/share/url?url={url}&text={text}` | 标题 + 摘要 + 链接 |
| **微信** | 两步：① 生成带二维码的分享卡片图片 ② 点击弹出"长按保存图片，发送给朋友" | 精美卡片图（标题+经文+二维码） |
| **WhatsApp** | `https://wa.me/?text={text+url}` | 标题 + 摘要 + 链接 |
| **Twitter/X** | `https://twitter.com/intent/tweet?url={url}&text={text}` | 标题 + 经文 + 链接 |
| **复制链接** | `navigator.clipboard.writeText(url)` | 复制成功提示 ✓ |

**微信分享卡片设计：**
```
┌─────────────────────────┐
│  ⛪ 真理磐石 · 圣徒来信  │
│                          │
│  📜 那一夜，鸡叫了两遍   │
│  The Night the Rooster   │
│  Crowed Twice            │
│                          │
│  "耶稣转过身来看彼得，   │
│   彼得便出去痛哭。"      │
│        — 路加福音 22:61   │
│                          │
│      [QR Code]           │
│  rockoftruth.sudoem.org  │
└─────────────────────────┘
```

- 用 Canvas API 在前端动态生成图片
- 点击微信按钮 → 弹出模态框显示卡片图 → "长按保存，分享给朋友"
- 卡片风格与网站一致（深色/浅色随主题）

**Open Graph 元数据（SEO + 社交媒体预览）：**
```html
<meta property="og:title" content="那一夜，鸡叫了两遍 · 圣徒来信" />
<meta property="og:description" content="彼得：从豪言壮语到院子里的恐惧，到鸡叫时与耶稣目光相遇..." />
<meta property="og:image" content="https://rockoftruth.sudoem.org/og/peter-denial.png" />
<meta property="og:url" content="https://rockoftruth.sudoem.org/letters/peter-denial" />
<meta property="og:type" content="article" />
```

- 每篇文章生成预览图（build时生成或用 CF Worker 动态生成）
- Telegram/WhatsApp/Twitter 分享链接时自动显示预览卡片

### 8.3 分享组件

```typescript
// src/components/ShareBar.tsx
interface ShareBarProps {
  url: string;
  title: string;
  summary: string;
  scripture: string;
}
```

- 提取为通用组件，未来其他板块（问答、家庭祭坛）也可复用
- 响应式：桌面端水平排列，手机端图标更大方便点击

### 8.4 统计（可选，Phase 2）

- 分享次数统计（每次点击分享按钮计数）
- 热门文章排行（按 点赞+分享+留言 综合排序）
- 展示在列表页侧边栏或 `/letters` 页面顶部

---

## 九、更新后的实施时间线

| 时间 | 里程碑 |
|------|--------|
| 2月W3-W4 | 写前4篇文章大纲并审批 |
| 2月W4 | 写前2篇全文 |
| 3月W1 | 开发 `/letters` 页面 + 点赞按钮 + 分享组件 + 上线 |
| 3月W1 | 更新导航、首页、/about |
| 3月W2 | 搭建 CF Worker + D1（点赞+留言API） |
| 3月W2 | 搭建 Telegram Bot 审核 |
| 3月W3 | 上线留言功能 + 微信分享卡片生成 |
| 3月W4 | 上线留言墙 `/guestbook` + OG预览图 |
| 3月起 | 每周1-2篇新文章 |

