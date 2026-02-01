# 福音工具箱 (Gospel Toolkit) — PRD

> **Version:** 0.1 MVP
> **Author:** Zoe for Dr. Su Yan
> **Date:** 2026-02-01
> **Platform:** iOS (SwiftUI)

---

## 1. 产品愿景

为改革宗教会的弟兄姐妹提供一个随身福音工具，在传福音时能快速查阅护教内容、要理问答、经典著作摘要，提升传福音的信心和装备。

## 2. 目标用户

- 教会中参与传福音事工的弟兄姐妹
- 初信者想要系统学习信仰根基
- 神学爱好者日常灵修和学习

## 3. MVP 范围

### 3.1 模块一：福音问答 (Gospel Q&A)

**核心功能：**
- 按分类浏览常见福音问题
- 每个问题包含：简短回答、深入解释、相关经文、推荐阅读
- 搜索功能
- 收藏功能

**分类：**
- 上帝的存在 (Does God Exist?)
- 苦难问题 (Problem of Evil/Suffering)
- 圣经可靠性 (Reliability of the Bible)
- 科学与信仰 (Science & Faith)
- 耶稣的独特性 (Uniqueness of Jesus)
- 罪与救恩 (Sin & Salvation)
- 死后的生命 (Life After Death)
- 道德基础 (Moral Foundation)

**每个问题的数据结构：**
```json
{
  "id": "q001",
  "category": "existence_of_god",
  "question_zh": "如果看不见上帝，怎么能相信祂存在？",
  "question_en": "How can you believe in a God you can't see?",
  "short_answer_zh": "...",
  "short_answer_en": "...",
  "detailed_answer_zh": "...",
  "detailed_answer_en": "...",
  "bible_verses": ["Romans 1:20", "Psalm 19:1", "Hebrews 11:1"],
  "related_readings": ["Mere Christianity Ch.1-2", "R.C. Sproul - Defending Your Faith Ch.3"],
  "tags": ["apologetics", "atheism", "beginner"]
}
```

### 3.2 模块二：要理问答 (Catechisms)

**核心功能：**
- 威斯敏斯特小要理问答 (WSC) — 107问，中英对照
- 威斯敏斯特大要理问答 (WLC) — 196问，中英对照
- 海德堡要理问答 (HC) — 129问，中英对照
- 闪卡模式：显示问题，点击翻转看答案
- 每日一问推送 (Local Notification)
- 进度追踪：已学/未学/已记忆
- 搜索 & 收藏

**数据结构：**
```json
{
  "id": "wsc_001",
  "catechism": "westminster_shorter",
  "number": 1,
  "question_zh": "人的首要目的是什么？",
  "question_en": "What is the chief end of man?",
  "answer_zh": "人的首要目的就是荣耀上帝，并且永远以祂为乐。",
  "answer_en": "Man's chief end is to glorify God, and to enjoy him forever.",
  "proof_texts": ["1 Cor 10:31", "Ps 73:25-28", "Rom 11:36"],
  "notes_zh": "这是整个要理问答的基础...",
  "notes_en": "This is the foundation of the entire catechism..."
}
```

### 3.3 模块三：护教学 (Apologetics)

**核心功能：**
- 按对象分类浏览护教内容
- 每个话题包含：核心论点、常见反驳、如何回应、推荐资源
- 搜索 & 收藏

**分类：**

#### 无神论 / 不可知论 (Atheism / Agnosticism)
- 宇宙论论证 (Cosmological Argument)
- 目的论论证 (Teleological Argument)
- 道德论论证 (Moral Argument)
- 意识与心灵问题 (Consciousness & Mind)
- 新无神论回应 (Responding to New Atheism)

#### 伊斯兰教 (Islam)
- 三位一体 vs 真主独一
- 圣经 vs 古兰经的可靠性
- 耶稣的神性
- 恩典 vs 功德
- 对话指南

#### 佛教 / 东方宗教 (Buddhism / Eastern Religions)
- 罪 vs 苦 (Sin vs Suffering)
- 恩典 vs 业力 (Grace vs Karma)
- 位格神 vs 非位格 (Personal vs Impersonal)
- 创造 vs 轮回

#### 异端辨别 (Cults & Heresies)
- 摩门教 (Mormonism)
- 耶和华见证人 (Jehovah's Witnesses)
- 历史异端简介（亚流、伯拉纠等）

#### 世俗主义 / 相对主义 (Secularism / Relativism)
- 道德相对主义的自我矛盾
- 科学主义的局限
- 意义与目的问题

**数据结构：**
```json
{
  "id": "ap_atheism_001",
  "target_worldview": "atheism",
  "topic_zh": "宇宙论论证",
  "topic_en": "Cosmological Argument",
  "core_argument_zh": "...",
  "core_argument_en": "...",
  "common_objections": [
    {
      "objection_zh": "那谁创造了上帝？",
      "objection_en": "Then who created God?",
      "response_zh": "...",
      "response_en": "..."
    }
  ],
  "bible_verses": ["Gen 1:1", "Rom 1:20"],
  "recommended_resources": ["Kalam Cosmological Argument - William Lane Craig"],
  "tags": ["beginner", "street_evangelism"]
}
```

### 3.4 模块四：经典著作摘要 (Classic Works)

**MVP 收录：**

| 作者 | 著作 | 优先级 |
|------|------|--------|
| C.S. Lewis | Mere Christianity | P0 |
| C.S. Lewis | The Problem of Pain | P0 |
| C.S. Lewis | The Screwtape Letters | P1 |
| C.S. Lewis | Surprised by Joy | P1 |
| 加尔文 | 基督教要义 (精华摘录) | P0 |
| 奥古斯丁 | 忏悔录 | P1 |
| R.C. Sproul | Defending Your Faith | P0 |
| R.C. Sproul | The Holiness of God | P1 |
| Tim Keller | The Reason for God | P0 |
| Tim Keller | Making Sense of God | P1 |
| John Piper | Desiring God | P1 |

**每本书包含：**
- 简介 & 作者背景
- 章节摘要
- 金句摘录（中英对照）
- 与福音传播的关联
- 适合推荐给什么类型的慕道友

**数据结构：**
```json
{
  "id": "book_lewis_mc",
  "author_zh": "C.S. 路易斯",
  "author_en": "C.S. Lewis",
  "title_zh": "返璞归真",
  "title_en": "Mere Christianity",
  "summary_zh": "...",
  "summary_en": "...",
  "chapters": [
    {
      "number": 1,
      "title_zh": "...",
      "title_en": "...",
      "summary_zh": "...",
      "key_quotes": ["..."]
    }
  ],
  "recommend_for": ["atheists", "seekers", "new_believers"],
  "tags": ["apologetics", "foundational"]
}
```

## 4. 通用功能

### 4.1 搜索
- 全局搜索：跨所有模块搜索
- 支持中英文搜索
- 搜索结果按相关度排序

### 4.2 收藏
- 任何内容可收藏
- 收藏列表按模块分组
- 支持自定义标签

### 4.3 中英双语
- 所有内容中英对照
- 可设置默认语言
- 一键切换

### 4.4 离线可用
- 核心内容本地存储（JSON bundled in app）
- 无需网络即可使用所有基础功能

### 4.5 每日推送
- 每日一问（要理问答）
- Local Notification，用户可设置时间

## 5. 技术架构

### 5.1 技术栈
- **Language:** Swift 6
- **UI:** SwiftUI
- **Min iOS:** 17.0
- **Architecture:** MVVM
- **Data:** 本地 JSON 文件 bundled in app
- **Storage:** SwiftData（收藏、进度、设置）
- **Search:** 本地全文搜索

### 5.2 项目结构
```
GospelToolkit/
├── App/
│   └── GospelToolkitApp.swift
├── Models/
│   ├── Question.swift
│   ├── Catechism.swift
│   ├── ApologeticsTopic.swift
│   └── Book.swift
├── Views/
│   ├── Home/
│   │   └── HomeView.swift
│   ├── QA/
│   │   ├── QAListView.swift
│   │   └── QADetailView.swift
│   ├── Catechism/
│   │   ├── CatechismListView.swift
│   │   ├── CatechismDetailView.swift
│   │   └── FlashCardView.swift
│   ├── Apologetics/
│   │   ├── ApologeticsListView.swift
│   │   └── ApologeticsDetailView.swift
│   ├── Library/
│   │   ├── BookListView.swift
│   │   └── BookDetailView.swift
│   ├── Search/
│   │   └── SearchView.swift
│   └── Favorites/
│       └── FavoritesView.swift
├── ViewModels/
│   ├── QAViewModel.swift
│   ├── CatechismViewModel.swift
│   ├── ApologeticsViewModel.swift
│   └── LibraryViewModel.swift
├── Services/
│   ├── DataService.swift
│   ├── SearchService.swift
│   ├── FavoritesService.swift
│   └── NotificationService.swift
├── Data/
│   ├── qa_questions.json
│   ├── catechism_wsc.json
│   ├── catechism_wlc.json
│   ├── catechism_hc.json
│   ├── apologetics.json
│   └── books.json
└── Resources/
    └── Assets.xcassets
```

### 5.3 数据管理
- MVP阶段：所有内容以JSON文件形式打包在app内
- 未来：可接入后端API，支持内容更新和教会定制
- SwiftData用于用户数据（收藏、进度、设置）

## 6. UI/UX 设计方向

### 6.1 设计原则
- **简洁清晰** — 传福音时需要快速找到内容
- **阅读友好** — 大量文字内容，排版要舒适
- **深色模式** — 支持系统深色模式
- **无障碍** — 支持Dynamic Type

### 6.2 首页
- 四个模块入口（大卡片）
- 每日一问 widget
- 最近浏览
- 搜索栏

### 6.3 配色
- 主色：深蓝/靛蓝 — 庄重、可信
- 强调色：金色 — 福音、荣耀
- 背景：米白/暖灰

## 7. MVP 里程碑

### Phase 1: 基础框架 (Week 1-2)
- [ ] Xcode项目搭建
- [ ] 数据模型定义
- [ ] 首页UI
- [ ] 导航框架

### Phase 2: 福音问答 (Week 2-3)
- [ ] 问答数据准备（至少30个核心问题）
- [ ] 问答列表和详情页
- [ ] 搜索功能
- [ ] 收藏功能

### Phase 3: 要理问答 (Week 3-4)
- [ ] WSC 107问数据准备（中英对照）
- [ ] 列表和详情页
- [ ] 闪卡模式
- [ ] 每日推送

### Phase 4: 护教学 (Week 4-5)
- [ ] 护教内容数据准备（每个分类至少5个话题）
- [ ] 列表和详情页
- [ ] 按对象世界观分类浏览

### Phase 5: 经典著作 (Week 5-6)
- [ ] P0著作摘要准备
- [ ] 书籍列表和详情页
- [ ] 金句摘录

### Phase 6: 打磨 & 发布 (Week 6-8)
- [ ] UI打磨、动画
- [ ] 全局搜索优化
- [ ] TestFlight内测
- [ ] App Store提交

## 8. 未来规划 (Post-MVP)

- **AI辅助对话** — 输入慕道友的问题，基于改革宗神学生成建议回应
- **教会定制** — 各教会可添加自己的资源、见证
- **社区功能** — 弟兄姐妹分享传福音经历和心得
- **传福音记录** — 记录传福音对象、对话内容、代祷事项
- **音频内容** — 要理问答朗读、经典著作有声摘要
- **教会历史时间线** — 互动式教会历史浏览
- **系统神学模块** — 按主题系统学习神学
- **多平台** — Android版本、Web版本
- **多语言** — 西班牙语、韩语等

## 9. 内容版权注意

- 要理问答：公共领域，无版权问题
- 经典著作摘要：属于合理使用（fair use），摘录需控制比例
- 原创问答内容：教会自有版权
- 引用需标注出处

---

*"你们要常作准备，好回答那些问你们心中盼望缘由的人。" — 彼得前书 3:15*
