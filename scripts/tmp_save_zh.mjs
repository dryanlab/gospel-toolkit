// Read JSON from stdin and save to file
import { writeFileSync } from 'fs';
let data = '';
process.stdin.on('data', chunk => data += chunk);
process.stdin.on('end', () => {
  writeFileSync('tmp_zh_all.json', data);
  const parsed = JSON.parse(data);
  console.log('Saved', parsed.length, 'items');
});
