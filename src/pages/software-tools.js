// Renders robotiq/.github's profile/README.md (the https://github.com/robotiq
// org landing page). Shows the build-time snapshot from
// scripts/fetch-profile-readme.js straight away (and in the static HTML that
// search engines index), then fetches the current version from GitHub in the
// browser and swaps it in, so a README change appears without rebuilding
// this site. If that fetch fails (offline, GitHub's 60 requests/hour limit
// for unauthenticated visitors, ...) the snapshot simply stays.
//
// The HTML is GitHub's own rendering of a README in Robotiq's org, already
// sanitized by GitHub, which is why injecting it as-is is acceptable here.
import React, {useEffect, useState} from 'react';
import Layout from '@theme/Layout';
import snapshot from '@site/src/generated/profile-readme.json';

export default function SoftwareTools() {
  const [html, setHtml] = useState(snapshot.html);

  useEffect(() => {
    const controller = new AbortController();
    fetch(snapshot.apiUrl, {
      headers: {Accept: 'application/vnd.github.html'},
      signal: controller.signal,
    })
      .then((res) => (res.ok ? res.text() : Promise.reject(new Error(String(res.status)))))
      .then((latest) => {
        if (latest.trim()) setHtml(latest.trim());
      })
      .catch(() => {});
    return () => controller.abort();
  }, []);

  return (
    <Layout
      title="Software Tools"
      description="Open-source software tools for developing with Robotiq products.">
      <main className="container margin-vert--lg">
        <div className="profile-readme" dangerouslySetInnerHTML={{__html: html}} />
        <p className="profile-readme__source">
          Source: <a href={snapshot.sourceUrl}>robotiq/.github — profile/README.md</a>
        </p>
      </main>
    </Layout>
  );
}
