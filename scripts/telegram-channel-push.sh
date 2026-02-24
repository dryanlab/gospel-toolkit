#!/bin/bash
# Telegram Channel Push Script for 真理磐石
# Usage: ./telegram-channel-push.sh <type> [id]
# Types: letter, reading, altar, custom
# Examples:
#   ./telegram-channel-push.sh letter peter-denial
#   ./telegram-channel-push.sh reading genesis/1
#   ./telegram-channel-push.sh altar
#   ./telegram-channel-push.sh custom "自定义消息内容"

BOT_TOKEN="${TELEGRAM_BOT_TOKEN:?请设置 TELEGRAM_BOT_TOKEN 环境变量}"
CHANNEL="@rock_of_truth"
SITE="https://rockoftruth.net"
API="https://api.telegram.org/bot${BOT_TOKEN}"

send_message() {
  local text="$1"
  local buttons="$2"
  
  if [ -n "$buttons" ]; then
    curl -s "${API}/sendMessage" \
      -d chat_id="${CHANNEL}" \
      -d text="${text}" \
      -d parse_mode="HTML" \
      -d reply_markup="${buttons}" > /dev/null
  else
    curl -s "${API}/sendMessage" \
      -d chat_id="${CHANNEL}" \
      -d text="${text}" \
      -d parse_mode="HTML" > /dev/null
  fi
  echo "✅ Message sent to ${CHANNEL}"
}

TYPE="$1"
ID="$2"

case "$TYPE" in
  letter)
    # Fetch letter data from D1 API
    DATA=$(curl -s "https://rockoftruth-api.suyanuiuc.workers.dev/letters/${ID}")
    TITLE_ZH=$(echo "$DATA" | python3 -c "import json,sys; d=json.load(sys.stdin); print(d.get('title_zh',''))")
    TITLE_EN=$(echo "$DATA" | python3 -c "import json,sys; d=json.load(sys.stdin); print(d.get('title_en',''))")
    AUTHOR=$(echo "$DATA" | python3 -c "import json,sys; d=json.load(sys.stdin); print(d.get('author',''))")
    SUMMARY=$(echo "$DATA" | python3 -c "import json,sys; d=json.load(sys.stdin); print(d.get('summary_zh',''))")
    SCRIPTURE=$(echo "$DATA" | python3 -c "import json,sys; d=json.load(sys.stdin); print(d.get('scripture',''))")
    
    TEXT="✉️ <b>圣徒来信 · New Letter</b>

📜 <b>${TITLE_ZH}</b>
<i>${TITLE_EN}</i>

✍️ ${AUTHOR}

${SUMMARY}

📖 ${SCRIPTURE}

🔗 <a href=\"${SITE}/letters/${ID}\">阅读全文 Read more</a>

—— 真理磐石 Rock of Truth"
    
    BUTTONS='{"inline_keyboard":[[{"text":"📖 阅读全文 Read","url":"'"${SITE}/letters/${ID}"'"}],[{"text":"🏠 访问网站","url":"'"${SITE}"'"}]]}'
    send_message "$TEXT" "$BUTTONS"
    ;;
    
  reading)
    # reading format: genesis/1
    BOOK=$(echo "$ID" | cut -d/ -f1)
    CH=$(echo "$ID" | cut -d/ -f2)
    
    TEXT="📖 <b>圣徒伴读 · Daily Reading</b>

📕 <b>创世记 Genesis 第${CH}章</b>

与圣徒同行，一起研读神的话语。
Walk with the saints through God's Word.

🔗 <a href=\"${SITE}/readings/${BOOK}?ch=${CH}\">开始阅读 Start Reading</a>

—— 真理磐石 Rock of Truth"
    
    BUTTONS='{"inline_keyboard":[[{"text":"📖 开始阅读 Read","url":"'"${SITE}/readings/${BOOK}?ch=${CH}"'"}]]}'
    send_message "$TEXT" "$BUTTONS"
    ;;
    
  altar)
    TEXT="🕯️ <b>家庭祭坛 · Family Altar</b>

今日灵修已更新！
Today's devotion is ready!

带领全家一起亲近神。
Lead your family closer to God.

🔗 <a href=\"${SITE}/family-altar\">今日灵修 Today's Devotion</a>

—— 真理磐石 Rock of Truth"
    
    BUTTONS='{"inline_keyboard":[[{"text":"🕯️ 今日灵修 Devotion","url":"'"${SITE}/family-altar"'"}]]}'
    send_message "$TEXT" "$BUTTONS"
    ;;
    
  custom)
    send_message "$ID"
    ;;
    
  *)
    echo "Usage: $0 <letter|reading|altar|custom> [id|message]"
    echo "Examples:"
    echo "  $0 letter peter-denial"
    echo "  $0 reading genesis/1"
    echo "  $0 altar"
    echo '  $0 custom "自定义消息"'
    exit 1
    ;;
esac
