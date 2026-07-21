const CACHE_NAME = 'baba-sitio-lopes-v2.1.1';
const ASSETS = ['./', './index.html', './manifest.json', './baba_do_sitio_lopes.png'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});