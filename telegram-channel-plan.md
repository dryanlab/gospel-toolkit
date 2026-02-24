# 真理磐石 Telegram 频道方案

## 频道信息

- **频道名称**: 真理磐石 Rock of Truth
- **频道用户名**: @rockoftruth (建议)
- **频道描述**: 改革宗每日灵修 | 圣经伴读 · 家庭祭坛 · 圣徒来信
- **频道头像**: 使用网站 Logo
- **网站**: https://rockoftruth.sudoem.org

## 创建步骤（需主人手动操作）

1. **创建 Telegram Bot**
   - 在 Telegram 中找 @BotFather
   - 发送 `/newbot`
   - 名称：`真理磐石推送` / Username: `rockoftruth_bot`
   - 记录 Bot Token

2. **创建频道**
   - Telegram → 新建频道
   - 名称：真理磐石 Rock of Truth
   - 描述：改革宗每日灵修 | 圣经伴读 · 家庭祭坛 · 圣徒来信
   - 设为公开频道，用户名 `rockoftruth`

3. **将 Bot 加为频道管理员**
   - 频道设置 → 管理员 → 添加 Bot
   - 权限：发送消息

4. **配置环境变量**
   ```bash
   export TELEGRAM_BOT_TOKEN="your_bot_token_here"
   export TELEGRAM_CHANNEL_ID="@rockoftruth"  # 或频道数字ID
   ```

## 推送内容格式

### 📖 每日伴读 (周一至周五 6:00 AM EST)

```
📖 每日伴读 | 2026年2月21日

*创世记第一章：起初神创造天地*

📜 今日经文
> 起初，神创造天地。地是空虚混沌，渊面黑暗；神的灵运行在水面上。
> — 创世记 1:1-2

✍️ 导读
神在永恒中定意创造，这不是出于需要，而是出于祂丰盛的爱与荣耀……

🔗 阅读全文：https://rockoftruth.sudoem.org/readings/SLUG
```

### ✉️ 圣徒来信 (周六 8:00 AM EST)

```
✉️ 圣徒来信 | 2026年2月21日

*论基督徒的喜乐*
✍️ 作者：司布真

摘要：真正的喜乐不在于环境的顺利，而在于我们与基督的联合……

🔗 阅读全文：https://rockoftruth.sudoem.org/letters/SLUG
```

### 🏠 家庭祭坛 (随伴读一同推送)

```
🏠 家庭祭坛 | 2026年2月21日

*今日主题：神的创造*

📜 经文：创世记 1:1-31
🙏 祷告方向：为神创造的奇妙感恩

🔗 阅读全文：https://rockoftruth.sudoem.org/family-altar/SLUG
```

## 推送时间表

| 内容 | 时间 | 频率 |
|------|------|------|
| 每日伴读 | 周一至周五 6:00 AM EST | 每工作日 |
| 家庭祭坛 | 周一至周五 6:05 AM EST | 每工作日 |
| 圣徒来信 | 周六 8:00 AM EST | 每周 |

## D1 API 端点

- 基础URL: `https://rockoftruth-api.suyanuiuc.workers.dev`
- 伴读列表: `/api/readings`
- 来信列表: `/api/letters`
- 家庭祭坛: `/api/family-altar`

> **注意**: API 端点需要确认实际路由。如果 API 尚未就绪，脚本支持从网站直接抓取。

## OpenClaw Cron 定时推送

在 OpenClaw 中设置定时任务：

### 方法1: OpenClaw Scheduled Tasks

在 Peter 的配置中添加 cron 任务：

```yaml
# 在 Peter 的 agent 配置中
scheduled:
  - name: "daily-reading-push"
    cron: "0 6 * * 1-5"  # 周一至周五 6:00 AM EST
    timezone: "America/New_York"
    task: "运行 /Users/suyan/agents/shared/projects/gospel-app/scripts/generate-daily-post.js readings"

  - name: "family-altar-push"
    cron: "5 6 * * 1-5"  # 周一至周五 6:05 AM EST
    timezone: "America/New_York"
    task: "运行 /Users/suyan/agents/shared/projects/gospel-app/scripts/generate-daily-post.js family-altar"

  - name: "weekly-letter-push"
    cron: "0 8 * * 6"  # 周六 8:00 AM EST
    timezone: "America/New_York"
    task: "运行 /Users/suyan/agents/shared/projects/gospel-app/scripts/generate-daily-post.js letters"
```

### 方法2: 系统 Crontab

```bash
# crontab -e
# 每日伴读 (周一至周五 6AM EST)
0 6 * * 1-5 cd /Users/suyan/agents/shared/projects/gospel-app && node scripts/generate-daily-post.js readings

# 家庭祭坛 (周一至周五 6:05AM EST)
5 6 * * 1-5 cd /Users/suyan/agents/shared/projects/gospel-app && node scripts/generate-daily-post.js family-altar

# 圣徒来信 (周六 8AM EST)
0 8 * * 6 cd /Users/suyan/agents/shared/projects/gospel-app && node scripts/generate-daily-post.js letters
```

## 文件清单

| 文件 | 用途 |
|------|------|
| `telegram-channel-plan.md` | 本方案文档 |
| `scripts/telegram-push.sh` | Telegram Bot API 推送脚本 |
| `scripts/generate-daily-post.js` | 内容获取 + 格式化 + 推送 |
