// Every page this site used to have (/docs/intro, /docs/drivers/..., the
// contributor docs, ...) is gone (see docusaurus.config.js). Rather than a
// dead end, any unknown URL, including those old links from bookmarks,
// search results and other sites, sends the visitor to
// https://github.com/robotiq, the reference for Robotiq software tools now.
// GitHub Pages serves this as 404.html, so the redirect runs client-side;
// replace() keeps the dead URL out of the browser history. Production
// builds only: under `npm start`, a mistyped local URL shows this page
// instead of leaving for github.com, so broken routes stay visible.
import React, {useEffect} from 'react';

const TARGET = 'https://github.com/robotiq';

export default function NotFoundContent() {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') window.location.replace(TARGET);
  }, []);

  return (
    <main className="container margin-vert--xl">
      <p>
        This page has moved to <a href={TARGET}>github.com/robotiq</a>.
      </p>
    </main>
  );
}
