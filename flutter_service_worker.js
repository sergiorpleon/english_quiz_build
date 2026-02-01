'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"version.json": "2173b83a02cdbf6f9e5999baec345c13",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"manifest.json": "2c1ef8e8c9c941903057efa0b2205471",
"main.dart.js": "7fc50d4b5f200ac714a924cc677a82ae",
"flutter_bootstrap.js": "a81f6cb18cbc5c0a12f29e780dfcde14",
"index.html": "09b9053891d34e7784d472daa319bb61",
"/": "09b9053891d34e7784d472daa319bb61",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.json": "0ebb017f99e24c7b07ed3b88ad85a55f",
"assets/fonts/MaterialIcons-Regular.otf": "85e8947325ccd7b4246360f454d45219",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin.json": "6bf9ea72d59f4a2cae62fda0894c58a7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "d7d83bd9ee909f8a9b348f56ca7b68c6",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/NOTICES": "808821f8e5bc3d3b524de84348c0985a",
"assets/AssetManifest.bin": "7e2d1f3d6eceecc910a9968515ca2164",
"assets/assets/images/icon-simple-black.png": "d643123ee9673d0d09ada1431e64c865",
"assets/assets/images/icontesting.png": "e4eff13385aa3ccc25f9adc9d2a1c8da",
"assets/assets/images/gifaudio.gif": "1703da4b5cedd5d2664be58c6c140fc9",
"assets/assets/images/icon-simple-white.png": "5b1e5af2d305ea063742ec955f96ab31",
"assets/assets/images/icon-listening-white.png": "0bb33aade71e8cd9d31c878daf36bdf5",
"assets/assets/images/icon-completa-white.png": "6ce08911b6cc78fdfd5718ed25e34331",
"assets/assets/images/icon-questions-white.png": "0d116657490344471bb92fe2817a3c28",
"assets/assets/images/icon-listening.png": "b661be5a8b9410c1ff9a5bfaaa52a72b",
"assets/assets/images/learn.png": "f4c54ef2024756d2c88cc955aa2bebfa",
"assets/assets/images/icon-voice.png": "8784387ce11fb64393f5ec371a261f05",
"assets/assets/images/icon-multiple-black.png": "988170648ab33fc8057beab7402885ca",
"assets/assets/images/icon-ordenar-white.png": "386c827f4d99176fcece9ab7c131bebc",
"assets/assets/images/icon-voice-white.png": "938d9a5bda830404d7b184931a875b30",
"assets/assets/images/icon-ordenar-black.png": "97c013318236859ccdf7960cfb664c79",
"assets/assets/images/icon-completa-black.png": "b30335378cd22b9518cc350f6e10c33e",
"assets/assets/images/icon-questions.png": "00c5e94d8d457ce5ee83793679afd70e",
"assets/assets/images/icon-multiple-white.png": "a7da3e968eee60e6d7dd928ae34937fa",
"assets/assets/videos/pastevent1.mp4": "c41c2b9da3fb2cb8326dc5d6c0509fdd",
"assets/assets/audios/pastevent1a5.mp3": "fb6a1a051772a01edc27cb941df4dcb9",
"assets/assets/audios/pastevent1a4.mp3": "44761a8082e537440e0301236d48d037",
"assets/assets/audios/pastevent1a3.mp3": "91390e8496e124b21daa737b4fc7c88a",
"assets/assets/audios/pastevent1a6.mp3": "de81e473a6d6a5b98f8384f72c5d9d9d",
"assets/assets/audios/pastevent1a2.mp3": "bbc133a1dd990fa5ef0fd758bf51f833",
"assets/assets/audios/pastevent1a1.mp3": "c194e9b6f99d1a7ee75a539ec04f75e4",
"assets/assets/audios/pastevent1a7.mp3": "e7f27ff0265b62eb624cdacddadc95e8",
"assets/assets/assets/images/gifaudio.gif": "1703da4b5cedd5d2664be58c6c140fc9"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
