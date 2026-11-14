const fs = require('fs');
const content = fs.readFileSync('C:/Users/vedan/.gemini/antigravity/scratch/acesutra-website/App.tsx', 'utf8');
const lines = content.split('\n');
console.log('Total lines:', lines.length);
console.log('Total characters:', content.length);
