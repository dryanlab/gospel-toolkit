// This script will be used to save ZH data from browser batches
import { writeFileSync, readFileSync, existsSync } from 'fs';

// Read batch files and combine
const batches = [];
for (let i = 1; i <= 4; i++) {
  const f = `tmp_zh_batch${i}.json`;
  if (existsSync(f)) {
    const data = JSON.parse(readFileSync(f, 'utf8'));
    batches.push(...data);
  }
}
console.log(`Total items: ${batches.length}`);
if (batches.length === 196) {
  writeFileSync('tmp_zh_all.json', JSON.stringify(batches, null, 2));
  console.log('Saved tmp_zh_all.json');
}
