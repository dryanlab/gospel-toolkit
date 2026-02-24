#!/usr/bin/env node
/**
 * generate-daily-post.js — 从 D1 API 获取内容并推送到 Telegram 频道
 *
 * 用法: node generate-daily-post.js [readings|letters|family-altar]
 *
 * 环境变量:
 *   TELEGRAM_BOT_TOKEN  — Telegram Bot Token
 *   TELEGRAM_CHANNEL_ID — 频道 ID 或 @username
 */

const { execSync } = require("child_process");
const path = require("path");

const API_BASE = "https://rockoftruth-api.suyanuiuc.workers.dev";
const SITE_BASE = "https://rockoftruth.sudoem.org";

const contentType = process.argv[2] || "readings";

// MarkdownV2 转义
function escMd(text) {
  return text.replace(/([_*\[\]()~`>#+\-=|{}.!\\])/g, "\\$1");
}

// 获取今天的日期 (YYYY-MM-DD, EST)
function getTodayEST() {
  return new Date()
    .toLocaleDateString("en-CA", { timeZone: "America/New_York" })
    .slice(0, 10);
}

// 从 API 获取数据
async function fetchContent(type, date) {
  const endpoints = {
    readings: `/api/readings?date=${date}`,
    letters: `/api/letters?latest=1`,
    "family-altar": `/api/family-altar?date=${date}`,
  };

  const url = `${API_BASE}${endpoints[type]}`;
  console.log(`📡 Fetching: ${url}`);

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`API error: ${res.status} ${res.statusText}`);
  }
  return res.json();
}

// 格式化伴读消息
function formatReading(data) {
  const item = Array.isArray(data) ? data[0] : data;
  if (!item) return null;

  const date = escMd(item.date || getTodayEST());
  const title = escMd(item.title || "每日伴读");
  const verse = escMd(item.verse_text || item.scripture || "");
  const ref = escMd(item.verse_ref || item.reference || "");
  const intro = escMd(item.intro || item.summary || "");
  const slug = item.slug || item.id || "";
  const link = `${SITE_BASE}/readings/${slug}`;

  return [
    `📖 *每日伴读* \\| ${date}`,
    ``,
    `*${title}*`,
    ``,
    verse ? `📜 _今日经文_` : "",
    verse ? `> ${verse}` : "",
    ref ? `> — ${ref}` : "",
    ``,
    intro ? `✍️ ${intro}` : "",
    ``,
    `🔗 [阅读全文](${escMd(link)})`,
  ]
    .filter(Boolean)
    .join("\n");
}

// 格式化来信消息
function formatLetter(data) {
  const item = Array.isArray(data) ? data[0] : data;
  if (!item) return null;

  const date = escMd(item.date || getTodayEST());
  const title = escMd(item.title || "圣徒来信");
  const author = escMd(item.author || "");
  const summary = escMd(item.summary || item.intro || "");
  const slug = item.slug || item.id || "";
  const link = `${SITE_BASE}/letters/${slug}`;

  return [
    `✉️ *圣徒来信* \\| ${date}`,
    ``,
    `*${title}*`,
    author ? `✍️ 作者：${author}` : "",
    ``,
    summary ? summary : "",
    ``,
    `🔗 [阅读全文](${escMd(link)})`,
  ]
    .filter(Boolean)
    .join("\n");
}

// 格式化家庭祭坛消息
function formatFamilyAltar(data) {
  const item = Array.isArray(data) ? data[0] : data;
  if (!item) return null;

  const date = escMd(item.date || getTodayEST());
  const title = escMd(item.title || item.topic || "家庭祭坛");
  const scripture = escMd(item.scripture || item.reference || "");
  const slug = item.slug || item.id || "";
  const link = `${SITE_BASE}/family-altar/${slug}`;

  return [
    `🏠 *家庭祭坛* \\| ${date}`,
    ``,
    `*今日主题：${title}*`,
    ``,
    scripture ? `📜 经文：${scripture}` : "",
    `🙏 愿主的话语进入每个家庭`,
    ``,
    `🔗 [阅读全文](${escMd(link)})`,
  ]
    .filter(Boolean)
    .join("\n");
}

// 发送消息
function sendMessage(text) {
  const scriptPath = path.join(__dirname, "telegram-push.sh");
  try {
    const result = execSync(`bash "${scriptPath}" "${text.replace(/"/g, '\\"')}"`, {
      encoding: "utf-8",
      env: process.env,
    });
    console.log(result);
  } catch (err) {
    console.error("❌ 推送失败:", err.message);
    process.exit(1);
  }
}

// 主函数
async function main() {
  const today = getTodayEST();
  console.log(`📅 日期: ${today}, 类型: ${contentType}`);

  try {
    const data = await fetchContent(contentType, today);

    const formatters = {
      readings: formatReading,
      letters: formatLetter,
      "family-altar": formatFamilyAltar,
    };

    const formatter = formatters[contentType];
    if (!formatter) {
      console.error(`❌ 未知内容类型: ${contentType}`);
      process.exit(1);
    }

    const message = formatter(data);
    if (!message) {
      console.log("⚠️ 今日无内容，跳过推送");
      process.exit(0);
    }

    console.log("📝 生成消息:\n" + message + "\n");
    sendMessage(message);
  } catch (err) {
    console.error("❌ 错误:", err.message);
    process.exit(1);
  }
}

main();
