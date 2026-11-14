const fs = require('fs');
const code = fs.readFileSync('C:/Users/vedan/.gemini/antigravity/scratch/acesutra-website/App.tsx', 'utf8');

// Check bracket balance
let parens = 0, braces = 0, brackets = 0;
for (let i = 0; i < code.length; i++) {
  const ch = code[i];
  if (ch === '(') parens++;
  else if (ch === ')') parens--;
  else if (ch === '{') braces++;
  else if (ch === '}') braces--;
  else if (ch === '[') brackets++;
  else if (ch === ']') brackets--;
  if (parens < 0) console.error('Negative parens at char ' + i);
  if (braces < 0) console.error('Negative braces at char ' + i);
  if (brackets < 0) console.error('Negative brackets at char ' + i);
}
console.log('Balance check:', { parens, braces, brackets });
if (parens === 0 && braces === 0 && brackets === 0) {
  console.log('Brackets and braces are perfectly balanced!');
} else {
  console.error('MISMATCH DETECTED!');
  process.exit(1);
}
