const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const script = fs.readFileSync(path.join(__dirname, '..', 'script.js'), 'utf8');
const externalLinks = script.match(/<a\s+href="\$\{tool\.(?:github|website)\}"[^>]*>/g) || [];

assert.equal(externalLinks.length, 2, 'expected both external tool links to be rendered');
for (const link of externalLinks) {
  assert.match(link, /target="_blank"/);
  assert.match(link, /rel="noopener noreferrer"/);
}

console.log('computer-vision-tools security regression tests passed');
