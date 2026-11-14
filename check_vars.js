const fs = require('fs');
const code = fs.readFileSync('C:/Users/vedan/.gemini/antigravity/scratch/acesutra-website/App.tsx', 'utf8');

const identifiers = [
  'App',
  'activePage', 'setActivePage',
  'mobileMenuOpen', 'setMobileMenuOpen',
  'openFaq', 'setOpenFaq',
  'formName', 'setFormName',
  'formBusiness', 'setFormBusiness',
  'formPhone', 'setFormPhone',
  'formNeed', 'setFormNeed',
  'formSubmitted', 'setFormSubmitted',
  'toggleFaq',
  'handleNav',
  'handleFormSubmit',
  'WHATSAPP_URL',
  'faqs',
  'workSamples'
];

for (const id of identifiers) {
  const count = (code.match(new RegExp('\\b' + id + '\\b', 'g')) || []).length;
  console.log(id + ': ' + count);
  if (count <= 1) {
    console.error('ERROR: Identifier ' + id + ' is only declared once or not used!');
    process.exit(1);
  }
}
console.log('ALL IDENTIFIERS ARE ACTIVELY USED!');
