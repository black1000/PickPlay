const CACHE_NAME = 'pickplay-cache-v1';
const urlsToCache = [
  '/PickPlay/',
  '/PickPlay/index.html',
  '/PickPlay/style.css',
  '/PickPlay/main.js',
  '/PickPlay/images/favicon-96x96.png',
  '/PickPlay/images/favicon-48x48.png',
  '/PickPlay/images/apple-touch-icon.png',
  '/PickPlay/images/android-chrome-192x192.png',
  '/PickPlay/images/android-chrome-512x512.png',
  '/PickPlay/site.webmanifest'
];

// インストール時にキャッシュするファイルを登録
self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

// リクエストがあったとき、キャッシュがあれば返す
self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames =>
      Promise.all(
        cacheNames.filter(name => name !== CACHE_NAME)
                  .map(name => caches.delete(name))
      )
    )
  );
});
