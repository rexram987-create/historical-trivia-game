const CACHE_NAME = 'historical-trivia-v3';
const APP_SHELL = [
  './',
  './index.html',
  './style.css?v=5',
  './script.js?v=10',
  './manifest.webmanifest',
  './icon.svg',
  './images/napoleon.jpg',
  './images/suleiman.jpg',
  './images/herzl.jpg',
  './images/lincoln.jpg',
  './images/washington.jpg',
  './images/victoria.jpg',
  './images/curie.jpg',
  './images/newton.jpg',
  './images/elizabeth1.jpg',
  './images/caesar.jpg',
  './images/darwin.jpg',
  './images/bell.jpg',
  './images/nightingale.jpg',
  './images/bengurion.jpg',
  './images/golda.jpg',
  './images/peter.jpg',
  './images/socrates.jpg',
  './images/plato.png',
  './images/galileo.jpg',
  './images/tesla.jpg',
  './images/leonardo.jpg',
  './images/louis14.jpg',
  './images/catherine.jpg',
  './images/augustus.jpg',
  './images/aurelius.png',
  './images/bismarck.jpg',
  './images/gandhi.jpg',
  './images/joan.jpg',
  './images/einstein.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;

      return fetch(event.request).then(response => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
        return response;
      }).catch(() => caches.match('./index.html'));
    })
  );
});
