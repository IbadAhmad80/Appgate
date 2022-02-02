const staticCacheName = "site-static-v2";
const dynamicCacheName = "site-dynamic-v1";

const self = this;

const assets = [
  "/",
  "/manifest.json",
  "/favicon.ico",
  "/index.html",
  "/serviceWorker.js",
  "/static/media/sdb_overview.0b1c5a6f2a50d3d023ed.mp4",
  "/static/media/landing_gif.b393c8c29ca5350abbbe.mp4",
  "/static/media/ani_background.b2cd75c9dd51a9a13549.mp4",
  "/static/css/main.3ecfec01.css",
  "/static/css/main.3ecfec01.css.map",
  "/static/media/Gibson-Bold.9bcb57722e5d934618d7.ttf",
  "/static/media/Gibson-SemiBold.ce999240875def201c9d.ttf",
  "/static/media/Gibson-Light.951603b4bb1681a1e47b.ttf",
  "/static/media/main.0eb143d8.js",
  "/static/media/main.0eb143d8.js.map",
  "https://fonts.googleapis.com/css?family=Montserrat:400,500,700|Noto+Sans+JP:400,500,700|Noto+Sans+KR:400,500,700|Roboto:400,500,700&display=swap",
];

// install event
self.addEventListener("install", (evt) => {
  // console.log("service worker installed");
  evt.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      // cache.addAll(assets);
    })
  );
});

// activate event
self.addEventListener("activate", (evt) => {
  // console.log("service worker activated");
  evt.waitUntil(
    caches.keys().then((keys) => {
      //console.log(keys);
      return Promise.all(
        keys
          .filter((key) => key !== staticCacheName && key !== dynamicCacheName)
          .map((key) => caches.delete(key))
      );
    })
  );
});

// fetch event
self.addEventListener("fetch", (evt) => {
  // self.addEventListener("fetch", (evt) => {
  //   console.log("fetch event", evt);
  //   evt.respondWith(
  //     caches.match(evt.request).then((cacheRes) => {
  //       return (
  //         cacheRes ||
  //         fetch(evt.request).then((fetchRes) => {
  //           return caches.open(dynamicCacheName).then((cache) => {
  //             cache.put(evt.request.url, fetchRes.clone());
  //             return fetchRes;
  //           });
  //         })
  //       );
  //     })
  //   );
  // });
});
