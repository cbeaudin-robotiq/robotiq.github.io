// Fetches robotiq/.github's profile/README.md (the org landing page at
// https://github.com/robotiq), rendered to HTML by GitHub itself, and saves
// it as src/generated/profile-readme.json: the build-time snapshot the
// Software Tools page (src/pages/software-tools.js) renders immediately and
// that search engines index. That page then fetches the same URL again in
// the visitor's browser and swaps in the latest version, so a README change
// shows up without rebuilding this site. The README stays the single source
// of truth: this output is gitignored and regenerated on every build (the
// `prebuild`/`prestart` hooks in package.json).
//
// Uses GitHub's own renderer (not Docusaurus's Markdown) so the snapshot and
// the browser refresh are identical markup — no visible change on swap —
// and the page looks exactly like https://github.com/robotiq. GitHub's
// output is already sanitized and has absolute links and proxied images.
//
// Set GITHUB_TOKEN to avoid the unauthenticated API rate limit (CI passes
// the workflow's own token). Fails the build if the fetch fails or comes
// back empty, rather than deploying a blank Software Tools page.
const fs = require('node:fs');
const path = require('node:path');

const API_URL = 'https://api.github.com/repos/robotiq/.github/contents/profile/README.md';
const SOURCE_URL = 'https://github.com/robotiq/.github/blob/main/profile/README.md';
const OUTPUT_PATH = path.join(__dirname, '..', 'src', 'generated', 'profile-readme.json');

function toSnapshot(html) {
  if (!html || !html.trim()) {
    throw new Error(`fetch-profile-readme.js: ${API_URL} returned no content — refusing to publish a blank Software Tools page`);
  }
  return { apiUrl: API_URL, sourceUrl: SOURCE_URL, html: html.trim() };
}

async function main() {
  const headers = {
    Accept: 'application/vnd.github.html',
    'User-Agent': 'robotiq.github.io-build',
  };
  if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

  const res = await fetch(API_URL, { headers });
  if (!res.ok) throw new Error(`fetch-profile-readme.js: ${API_URL} returned ${res.status} ${res.statusText}`);
  const snapshot = toSnapshot(await res.text());

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(snapshot, null, 2)}\n`, 'utf8');
  console.log(`fetch-profile-readme.js: wrote ${path.relative(process.cwd(), OUTPUT_PATH)} from ${API_URL}`);
}

if (require.main === module) {
  main().catch((err) => {
    console.error(err.message);
    process.exit(1);
  });
}

module.exports = { toSnapshot, API_URL };
