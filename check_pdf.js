const fs = require('fs');
// Let's search raw buffer for phone or email strings in PDF
const buf = fs.readFileSync('C:/Users/vedan/.gemini/antigravity/brain/2927c879-78ef-4dce-8810-f3430ea19b8f/.user_uploaded/media_1794651463746_e52ccf3f.pdf');
const str = buf.toString('latin1');
const emails = str.match(/[\w.-]+@[\w.-]+\.\w+/g);
const phones = str.match(/(?:\+91|91)?\s?[6-9]\d{9}/g);
console.log('Emails:', emails);
console.log('Phones:', phones);
