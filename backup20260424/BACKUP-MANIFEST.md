# BACKUP 2026-04-24 (Pre .md schema migration)

## 备份原因
即将执行 readings.ts → content/readings/*.md 反向同步（68 个文件）
+ letters.ts → content/letters/*.md 反向同步
+ 扩展 .md schema (新增 4 个导读 sections + subtitle 字段)

## 备份内容
- web-src-data/readings.ts (37,160 行) - 网站真数据源
- web-src-data/letters.ts - 来信真数据源
- web-src-data/bible-books.ts, books.json
- content/readings/ (11 本书所有 .md)
- content/letters/ (17 封信 .md)
- content/guides/ (导读 .md)
- REVIEW-CHECKLIST.md

## 恢复方法
若同步出错，从这里覆盖回去：
  cp backup20260424/web-src-data/readings.ts web/src/data/
  cp -r backup20260424/content/readings/* content/readings/
  cp backup20260424/REVIEW-CHECKLIST.md ./
  git checkout HEAD -- web/src/data/readings.ts  # 或者用 git 也行
