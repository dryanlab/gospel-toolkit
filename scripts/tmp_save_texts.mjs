import { writeFileSync, readFileSync } from 'fs';

// Save EN text - extract from OPC fetch
const enRaw = readFileSync('/dev/stdin', 'utf-8');
writeFileSync('/Users/suyan/clawd/tmp_en_raw.txt', enRaw);
console.log('Saved EN raw text');
