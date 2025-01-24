const cacheName = "calculator-v1";
const assets = [
  "./",
  "./index.html",
  "./style.css",
  "./script.js",
  "./icon-192x192.png",
  "./icon-512x512.png",
];

// Install event: Caches assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      console.log("Caching assets");
      return cache.addAll(assets);
    })
  );
});

// Fetch event: Serves cached files when offline
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
