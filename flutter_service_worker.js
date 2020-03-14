'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "b96e990a54681abf134800df8f0f3a18",
"/main.dart.js": "2cd1c25dcf263862a2707e8668317824",
"/icons/safari-icon.svg": "5a55a267965e405626e1411672503c4d",
"/icons/ogp.png": "25c4c0b8c614fc6460e0ba3c2fbf5b8c",
"/icons/mstile-144x144.png": "21afa91728f922eb34d5b41f1b835ab5",
"/icons/favicon.ico": "2c42ff5cc4d3b0062958ed6d0cd1105c",
"/icons/android-chrome-192x192.png": "ff96ff8f8b075a629d7d5315721739d5",
"/icons/apple-touch-icon-180x180.png": "9e153ca4312a0c4774a34dc7fb9b267d",
"/icons/android-chrome-512x512.png": "2186f6538a1d110a5fe9c1aaf9b39f62",
"/manifest.json": "629d4227d151f73b1d4e8f90db4fe229",
"/assets/LICENSE": "1a80be6c5724a31e6f9c9e06dba53b63",
"/assets/AssetManifest.json": "28d4a33467bfc044c45b04ff1e159398",
"/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/assets/images/ogp.png": "25c4c0b8c614fc6460e0ba3c2fbf5b8c",
"/assets/assets/images/good.png": "a2e2185fe47ec94f235601e9620185ef",
"/assets/assets/images/study.png": "6b657a19a763154f6ecc1da0c03b2905",
"/assets/assets/images/fighat.png": "bc70aedb1cd1648820cf3641d345db00"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request, {
          credentials: 'include'
        });
      })
  );
});
