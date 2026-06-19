/* ==========================================================================
   Frostwood Service Worker
   v1.0.4
   ========================================================================== */

const CACHE_NAME = "frostwood-v1-0-4";

self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE_NAME));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  );

  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  const request = event.request;
  const url = new URL(request.url);
  const cacheable = (
    request.destination === "image" ||
    request.destination === "style" ||
    request.destination === "script" ||
    /\.(css|js|svg|png|webp|jpg|jpeg|woff2)$/i.test(url.pathname)
  );

  if (!cacheable) {
    event.respondWith(fetch(request));
    return;
  }

  event.respondWith(
    fetch(request)
      .then((response) => {
        if (response && response.status === 200) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
        }
        return response;
      })
      .catch(() => caches.match(request))
  );
});
