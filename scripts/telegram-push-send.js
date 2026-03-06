#!/usr/bin/env node
// Telegram push sender — pure Node, no LLM dependency
// Called by telegram-smart-push.sh
// Usage: node telegram-push-send.js <bot_token> <channel> <type> [args...]

const https = require('https');
const { execSync } = require('child_process');
const path = require('path');

const [,, botToken, channel, type, ...args] = process.argv;

if (!botToken || !channel || !type) {
  console.error('Usage: node telegram-push-send.js <bot_token> <channel> <type> [args...]');
  process.exit(1);
}

const scriptsDir = path.dirname(process.argv[1]);
const genScript = path.join(scriptsDir, 'generate-push-text.js');

// Generate push text
let result;
try {
  const cmd = ['node', JSON.stringify(genScript), type, ...args].join(' ');
  const out = execSync(cmd, { encoding: 'utf8', timeout: 30000 });
  result = JSON.parse(out.trim());
} catch (e) {
  console.error('❌ Failed to generate', type, 'push text:', e.message);
  process.exit(1);
}

const text = result.text;
const url = result.url || '';

if (!text) {
  console.error('❌ Empty push text for', type);
  process.exit(1);
}

// Build request
const params = new URLSearchParams({
  chat_id: channel,
  parse_mode: 'HTML',
  text: text
});

if (url) {
  let buttonText = '📖 阅读 Read';
  if (type === 'altar') buttonText = '🕯️ 今日祭坛 Today\'s Altar';
  if (type === 'letter') buttonText = '✉️ 阅读来信 Read Letter';
  params.append('reply_markup', JSON.stringify({
    inline_keyboard: [[{ text: buttonText, url }]]
  }));
}

const body = params.toString();

const req = https.request({
  hostname: 'api.telegram.org',
  path: `/bot${botToken}/sendMessage`,
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': Buffer.byteLength(body)
  }
}, res => {
  let d = '';
  res.on('data', c => d += c);
  res.on('end', () => {
    try {
      const r = JSON.parse(d);
      if (r.ok) {
        console.log(`✅ ${type} sent to ${channel}`);
      } else {
        console.error('❌ Telegram API error:', r.description);
        process.exit(1);
      }
    } catch (e) {
      console.error('❌ Parse error:', d);
      process.exit(1);
    }
  });
});

req.on('error', e => {
  console.error('❌ Network error:', e.message);
  process.exit(1);
});

req.write(body);
req.end();
