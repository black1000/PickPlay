const CACHE_NAME = "pickplay-cache-v2";

// scope配下（GitHub Pagesなら /PickPlay/ 、Codespacesなら / ）で動く相対パス
const URLS = [
  "./",
  "./index.html",
  "./style.css",
  "./main.js",
  "./site.webmanifest",
  "./images/favicon-96x96.png",
  "./images/favicon-48x48.png",
  "./images/apple-touch-icon.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);

    const results = await Promise.allSettled(URLS.map((u) => cache.add(u)));
    results.forEach((r, i) => {
      if (r.status === "rejected") {
        console.warn("Precache failed:", URLS[i], r.reason);
      }
    });

    self.skipWaiting();
  })());
});

self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    // 古いキャッシュ削除
    const names = await caches.keys();
    await Promise.all(names.filter((n) => n !== CACHE_NAME).map((n) => caches.delete(n)));
    await self.clients.claim();
  })());
});

// キャッシュ優先 → なければネット → ネット失敗ならキャッシュ
self.addEventListener("fetch", (event) => {
  event.respondWith((async () => {
    const cached = await caches.match(event.request);
    if (cached) return cached;

    try {
      const res = await fetch(event.request);
      return res;
    } catch (e) {
      return cached;
    }
  })());
});
