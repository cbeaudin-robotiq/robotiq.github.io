# robotiq.github.io

Source of https://robotiq.github.io/: a landing page, a License page, and
a **Software Tools** page that renders the Robotiq GitHub organization's
landing page,
[`robotiq/.github`'s `profile/README.md`](https://github.com/robotiq/.github/blob/main/profile/README.md),
which indexes the software tools available for Robotiq products.

**To change the Software Tools page, edit that README in `robotiq/.github`.**
Nothing in this repository needs to change. Each tool's own documentation
lives in its repository.

## How it works

- The Software Tools page (`src/pages/software-tools.js`) shows the README
  as rendered by GitHub. `scripts/fetch-profile-readme.js` saves a snapshot
  at build time (`src/generated/`, gitignored; it runs automatically before
  `npm start` and `npm run build`), so the page loads instantly and can be
  indexed. The page then fetches the latest version in the visitor's
  browser, so README changes appear without rebuilding this site.
- `.github/workflows/deploy.yml` rebuilds and redeploys the site on every
  push to `main` in this repository, and daily via
  `.github/workflows/rebuild-daily.yml`, which keeps the build-time copy of
  the README no more than a day old.
- The landing page is `src/pages/index.js` (with
  `src/components/HomepageFeatures`), the License page `src/pages/license.md`.
- Any other URL, including links to pages of the former documentation
  site, redirects to https://github.com/robotiq (`src/theme/NotFound/Content`).

## Local development

```bash
npm ci
npm start        # fetches the README, then serves the site at http://localhost:3000
npm run build    # fetches the README, then builds the static site into build/
```

CI (`.github/workflows/ci.yml`) builds the site on every pull request and
checks that no production dependency is under a copyleft license
(`scripts/check-dependency-licenses.js`).
