const CACHE_NAME = 'calc-tool-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './sw.js',
  './icon-192.png',
  './icon-512.png'
];

// インストール時にキャッシュ
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

// ネットが無くてもキャッシュから返す
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});