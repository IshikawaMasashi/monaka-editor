var CACHE_NAME = "monaka-editor-cache-v25";
var urlsToCache = [
  "https://ishikawamasashi.github.io/monaka-editor/",
  "https://ishikawamasashi.github.io/monaka-editor/index.html",

  // dist
  "https://ishikawamasashi.github.io/monaka-editor/dist/0.bundle.js",
  "https://ishikawamasashi.github.io/monaka-editor/dist/1.bundle.js",
  "https://ishikawamasashi.github.io/monaka-editor/dist/2.bundle.js",
  "https://ishikawamasashi.github.io/monaka-editor/dist/3.bundle.js",
  "https://ishikawamasashi.github.io/monaka-editor/dist/4.bundle.js",
  "https://ishikawamasashi.github.io/monaka-editor/dist/5.bundle.js",
  "https://ishikawamasashi.github.io/monaka-editor/dist/6.bundle.js",
  "https://ishikawamasashi.github.io/monaka-editor/dist/7.bundle.js",
  "https://ishikawamasashi.github.io/monaka-editor/dist/8.bundle.js",
  "https://ishikawamasashi.github.io/monaka-editor/dist/9.bundle.js",
  "https://ishikawamasashi.github.io/monaka-editor/dist/10.bundle.js",
  "https://ishikawamasashi.github.io/monaka-editor/dist/11.bundle.js",
  "https://ishikawamasashi.github.io/monaka-editor/dist/12.bundle.js",
  "https://ishikawamasashi.github.io/monaka-editor/dist/13.bundle.js",
  "https://ishikawamasashi.github.io/monaka-editor/dist/14.bundle.js",
  "https://ishikawamasashi.github.io/monaka-editor/dist/15.bundle.js",
  "https://ishikawamasashi.github.io/monaka-editor/dist/16.bundle.js",
  "https://ishikawamasashi.github.io/monaka-editor/dist/17.bundle.js",
  "https://ishikawamasashi.github.io/monaka-editor/dist/18.bundle.js",
  "https://ishikawamasashi.github.io/monaka-editor/dist/19.bundle.js",
  "https://ishikawamasashi.github.io/monaka-editor/dist/20.bundle.js",
  "https://ishikawamasashi.github.io/monaka-editor/dist/21.bundle.js",
  "https://ishikawamasashi.github.io/monaka-editor/dist/22.bundle.js",
  "https://ishikawamasashi.github.io/monaka-editor/dist/23.bundle.js",
  "https://ishikawamasashi.github.io/monaka-editor/dist/24.bundle.js",
  "https://ishikawamasashi.github.io/monaka-editor/dist/25.bundle.js",
  "https://ishikawamasashi.github.io/monaka-editor/dist/26.bundle.js",
  "https://ishikawamasashi.github.io/monaka-editor/dist/27.bundle.js",
  "https://ishikawamasashi.github.io/monaka-editor/dist/28.bundle.js",
  "https://ishikawamasashi.github.io/monaka-editor/dist/29.bundle.js",
  "https://ishikawamasashi.github.io/monaka-editor/dist/30.bundle.js",
  "https://ishikawamasashi.github.io/monaka-editor/dist/31.bundle.js",
  "https://ishikawamasashi.github.io/monaka-editor/dist/32.bundle.js",
  "https://ishikawamasashi.github.io/monaka-editor/dist/33.bundle.js",
  "https://ishikawamasashi.github.io/monaka-editor/dist/34.bundle.js",
  "https://ishikawamasashi.github.io/monaka-editor/dist/35.bundle.js",
  "https://ishikawamasashi.github.io/monaka-editor/dist/36.bundle.js",
  "https://ishikawamasashi.github.io/monaka-editor/dist/37.bundle.js",
  "https://ishikawamasashi.github.io/monaka-editor/dist/38.bundle.js",
  "https://ishikawamasashi.github.io/monaka-editor/dist/39.bundle.js",
  "https://ishikawamasashi.github.io/monaka-editor/dist/40.bundle.js",
  "https://ishikawamasashi.github.io/monaka-editor/dist/41.bundle.js",
  "https://ishikawamasashi.github.io/monaka-editor/dist/42.bundle.js",
  "https://ishikawamasashi.github.io/monaka-editor/dist/43.bundle.js",
  "https://ishikawamasashi.github.io/monaka-editor/dist/44.bundle.js",
  "https://ishikawamasashi.github.io/monaka-editor/dist/45.bundle.js",
  "https://ishikawamasashi.github.io/monaka-editor/dist/46.bundle.js",
  "https://ishikawamasashi.github.io/monaka-editor/dist/47.bundle.js",
  "https://ishikawamasashi.github.io/monaka-editor/dist/48.bundle.js",
  "https://ishikawamasashi.github.io/monaka-editor/dist/49.bundle.js",
  "https://ishikawamasashi.github.io/monaka-editor/dist/50.bundle.js",
  "https://ishikawamasashi.github.io/monaka-editor/dist/51.bundle.js",
  "https://ishikawamasashi.github.io/monaka-editor/dist/52.bundle.js",
  "https://ishikawamasashi.github.io/monaka-editor/dist/53.bundle.js",
  "https://ishikawamasashi.github.io/monaka-editor/dist/54.bundle.js",
  "https://ishikawamasashi.github.io/monaka-editor/dist/55.bundle.js",
  "https://ishikawamasashi.github.io/monaka-editor/dist/56.bundle.js",
  "https://ishikawamasashi.github.io/monaka-editor/dist/57.bundle.js",
  "https://ishikawamasashi.github.io/monaka-editor/dist/58.bundle.js",
  "https://ishikawamasashi.github.io/monaka-editor/dist/59.bundle.js",
  "https://ishikawamasashi.github.io/monaka-editor/dist/60.bundle.js",
  "https://ishikawamasashi.github.io/monaka-editor/dist/61.bundle.js",
  "https://ishikawamasashi.github.io/monaka-editor/dist/62.bundle.js",
  "https://ishikawamasashi.github.io/monaka-editor/dist/63.bundle.js",
  "https://ishikawamasashi.github.io/monaka-editor/dist/64.bundle.js",
  "https://ishikawamasashi.github.io/monaka-editor/dist/65.bundle.js",
  "https://ishikawamasashi.github.io/monaka-editor/dist/66.bundle.js",
  "https://ishikawamasashi.github.io/monaka-editor/dist/68.bundle.js",
  "https://ishikawamasashi.github.io/monaka-editor/dist/67.bundle.js",

  "https://ishikawamasashi.github.io/monaka-editor/dist/html.worker.js",
  "https://ishikawamasashi.github.io/monaka-editor/dist/main.bundle.js",
  // "https://ishikawamasashi.github.io/monaka-editor/dist/monaco-editor.bundle.js",
  "https://ishikawamasashi.github.io/monaka-editor/dist/syntax-highlighter.js",

  "https://ishikawamasashi.github.io/monaka-editor/dist/editor.worker.js",
  "https://ishikawamasashi.github.io/monaka-editor/dist/css.worker.js",
  "https://ishikawamasashi.github.io/monaka-editor/dist/json.worker.js",
  "https://ishikawamasashi.github.io/monaka-editor/dist/typescript.worker.js",

  // "https://ishikawamasashi.github.io/monaka-editor/dist/vendors~monaco-editor~monaco-languages.bundle.js",
  "https://ishikawamasashi.github.io/monaka-editor/dist/worker.bundle.js",
  // style
  "https://ishikawamasashi.github.io/monaka-editor/style/markdown.css",
  "https://ishikawamasashi.github.io/monaka-editor/style/ref.css",
  "https://ishikawamasashi.github.io/monaka-editor/style/split-pane.css",
  "https://ishikawamasashi.github.io/monaka-editor/style/theme.css",
  "https://ishikawamasashi.github.io/monaka-editor/style/global.css",

  "https://ishikawamasashi.github.io/monaka-editor/lib/typescript/typescript.min.js"
];

const CACHE_KEYS = [CACHE_NAME];

self.addEventListener("install", function(event) {
  event.waitUntil(
    caches
      .open(CACHE_NAME) // 上記で指定しているキャッシュ名
      .then(function(cache) {
        return cache.addAll(urlsToCache); // 指定したリソースをキャッシュへ追加
        // 1つでも失敗したらService Workerのインストールはスキップされる
      })
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys
          .filter(key => {
            return !CACHE_KEYS.includes(key);
          })
          .map(key => {
            // 不要なキャッシュを削除
            return caches.delete(key);
          })
      );
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) {
        return response;
      }

      // 重要：リクエストを clone する。リクエストは Stream なので
      // 一度しか処理できない。ここではキャッシュ用、fetch 用と2回
      // 必要なので、リクエストは clone しないといけない
      let fetchRequest = event.request.clone();

      return fetch(fetchRequest).then(response => {
        if (!response || response.status !== 200 || response.type !== "basic") {
          return response;
        }

        // 重要：レスポンスを clone する。レスポンスは Stream で
        // ブラウザ用とキャッシュ用の2回必要。なので clone して
        // 2つの Stream があるようにする
        let responseToCache = response.clone();

        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, responseToCache);
        });

        return response;
      });
    })
  );
});
