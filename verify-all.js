const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const VERIFY = 'C:\\Users\\kakar\\AppData\\Roaming\\Claude\\local-agent-mode-sessions\\skills-plugin\\24990187-c30a-446e-aa39-d13d03f28d42\\d65e7ef0-d80b-4e7e-86a9-2d738ad4fbaf\\skills\\demo-website-builder-code\\scripts\\verify.js';
const REMNANTS = 'Hof & Handwerk,hovenier,Groenstraat,hofenhandwerk,tuingesprek,tuinontwerp';

const files = [];
files.push({ file: 'index.html', booking: false });
files.push({ file: 'over-ons.html', booking: false });
files.push({ file: 'afspraak.html', booking: true });
files.push({ file: 'privacy.html', booking: true });
files.push({ file: 'bedankt.html', booking: true });
for (const f of fs.readdirSync(path.join(__dirname, 'diensten'))) files.push({ file: `diensten/${f}`, booking: false });
for (const f of fs.readdirSync(path.join(__dirname, 'locaties'))) files.push({ file: `locaties/${f}`, booking: false });

let failCount = 0;
const summary = [];

for (const { file, booking } of files) {
  const args = [`"${VERIFY}"`, `"${file}"`, booking ? '--booking' : '', `--remnants "${REMNANTS}"`].filter(Boolean).join(' ');
  let out;
  try {
    out = execSync(`node ${args}`, { cwd: __dirname, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });
  } catch (e) {
    out = e.stdout; // verify.js exits 1 on failure but still prints JSON to stdout
  }
  try {
    const json = JSON.parse(out);
    // over-ons.html has no FAQ accordion by design; verify.js has no flag for
    // "skip only FAQ, still check sticky", so that one check is expected to read false here.
    const ignore = file === 'over-ons.html' ? ['faqAccordion'] : [];
    const relevant = Object.entries(json.results).filter(([k]) => !ignore.includes(k));
    const allPass = relevant.every(([, v]) => !v || v.pass !== false);
    summary.push({ file, allPass, results: json.results });
    if (!allPass) failCount++;
    console.log(`${allPass ? 'PASS' : 'FAIL'}  ${file}`);
    if (!allPass) {
      for (const [k, v] of relevant) {
        if (v && v.pass === false) console.log(`   - ${k}: ${JSON.stringify(v)}`);
      }
    }
  } catch (e) {
    failCount++;
    console.log(`ERROR ${file}: ${(out || e.message || '').slice(0, 400)}`);
    summary.push({ file, allPass: false, error: (out || e.message || '').slice(0, 500) });
  }
}

fs.writeFileSync(path.join(__dirname, 'verify-summary.json'), JSON.stringify(summary, null, 2));
console.log(`\n${files.length - failCount}/${files.length} pages passed.`);
process.exit(failCount ? 1 : 0);
