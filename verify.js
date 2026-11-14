const fs = require('fs');
const code = fs.readFileSync('C:/Users/vedan/.gemini/antigravity/scratch/acesutra-website/App.tsx', 'utf8');

const match = code.match(/import\s*\{([^}]+)\}\s*from\s*'lucide-react'/);
console.log('--- Checking Imports ---');
if (match) {
  const icons = match[1].split(',').map(s => s.trim()).filter(Boolean);
  for (const icon of icons) {
    const count = (code.match(new RegExp('\\b' + icon + '\\b', 'g')) || []).length;
    console.log(icon + ': ' + count + ' occurrences');
    if (count <= 1) {
      console.error('ERROR: ' + icon + ' is declared but never used!');
      process.exit(1);
    }
  }
}

console.log('\n--- Checking State Variables ---');
const stateMatches = [...code.matchAll(/const\s+\[([a-zA-Z0-9]+),\s*([a-zA-Z0-9]+)\]\s*=/g)];
for (const m of stateMatches) {
  const getter = m[1];
  const setter = m[2];
  const countG = (code.match(new RegExp('\\b' + getter + '\\b', 'g')) || []).length;
  const countS = (code.match(new RegExp('\\b' + setter + '\\b', 'g')) || []).length;
  console.log(getter + ' (' + countG + '), ' + setter + ' (' + countS + ')');
  if (countG <= 1 || countS <= 1) {
    console.error('ERROR: State variable ' + getter + ' or ' + setter + ' is unused!');
    process.exit(1);
  }
}

console.log('\n--- SUCCESS: ALL IMPORTS AND VARIABLES ARE ACTIVELY USED! ---');
