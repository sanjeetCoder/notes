// Set Cache 

let cacheData = "appV1";
this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheData).then((cache) => {
      cache.addAll([
        "/static/js/main.chunk.js",
        "/static/js/1.chunk.js",
        "/static/js/bundle.js",
        "/index.html",
        "/",
        "/user",
      ]);
    })
  );
});

// Get Cache 

this.addEventListener("fetch", (event) => {
  if (!navigator.onLine) {
    event.respondWith(
      caches.match(event.request).then((resp) => {
        if (resp) {
          return resp;
        }
        let requestUrl=event.request.clone()
        fetch(requestUrl)
      })
    );
  }

});
