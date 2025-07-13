'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "06c4bcdb2bdcf3de08c7013a7e6ca7d5",
"version.json": "d9af103e104f366487753a8033faac5f",
"index.html": "21515433ce34dc71bb6df744ae71fbfa",
"/": "21515433ce34dc71bb6df744ae71fbfa",
"main.dart.js": "7b00fb45884f06159f491560ad140fe9",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "ed645a51fe21de79aedbedc652f11d81",
"assets/AssetManifest.json": "7936109db7d1fc4ff39188d6e299bcb8",
"assets/NOTICES": "a3cfcc9d51c2156c2072b0be19cd79e9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "5376a63d5a7832c1b5ebba2ca2c747fd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/lib/assets/messages.json": "02d98a696b97093c4616394d58c044e6",
"assets/lib/assets/home_page.png": "ff7fefda6ac2c9f519cab9467adf0cfc",
"assets/AssetManifest.bin": "0b68a7943af775424fd4c25300170118",
"assets/fonts/MaterialIcons-Regular.otf": "958c9e468e8d0b66ac58b6d0f51d7c7b",
"assets/assets/audio/0.23.mp3": "a9f1f1922bad012ed154d253911e6889",
"assets/assets/audio/0.37.mp3": "6ce2be996b0c24c0cb3f4881b1c46cc6",
"assets/assets/audio/0.36.mp3": "9cd81c64fda54d65c5a58eca6e86921b",
"assets/assets/audio/0.22.mp3": "bec4d1cc819187dd0d519f4eb653a47e",
"assets/assets/audio/0.34.mp3": "03e6f211207626257eb85ccbfffeea6d",
"assets/assets/audio/0.21.mp3": "8be8858fdfd0662908a3c563e0fb99d4",
"assets/assets/audio/0.35.mp3": "ea00987fac315cb3e21c5267de6c5e3e",
"assets/assets/audio/0.19.mp3": "6bd4896f9c1a85f2ed54f5d57b548829",
"assets/assets/audio/0.31.mp3": "4dbc768caaad7039973c148bd6a15746",
"assets/assets/audio/0.25.mp3": "9a94e71ba6884e247dd60397c9a8569f",
"assets/assets/audio/0.18.mp3": "2b143d123e03eacbd4bf592b1756c325",
"assets/assets/audio/0.26.mp3": "ce59e872d42946c94a8e6df66ed6f49a",
"assets/assets/audio/0.32.mp3": "091abfcd39f19e2e6f47890b548ac42e",
"assets/assets/audio/0.33.mp3": "6b5a0a3a0c6b4dda85858fc56003ac79",
"assets/assets/audio/0.27.mp3": "2a734559f7ec1059212712aa5f31f3a2",
"assets/assets/audio/0.68.mp3": "b849caf335ed88ca5adf9d83ba13b46c",
"assets/assets/audio/0.83.mp3": "fadf2753f1cdd10b9f35da514557129e",
"assets/assets/audio/0.97.mp3": "346e8fa26201be25ad5555d06e115db8",
"assets/assets/audio/0.96.mp3": "9cd81c64fda54d65c5a58eca6e86921b",
"assets/assets/audio/0.82.mp3": "d162ed977f817b4101cdbb89368caf81",
"assets/assets/audio/0.69.mp3": "093cff9070efd1c8b7b1d2438d151f10",
"assets/assets/audio/0.55.mp3": "0b4b0e5d6d8890440fe43a672aa7d1d2",
"assets/assets/audio/0.41.mp3": "8ff8acf3bd8e7f2faf86344e83e176b2",
"assets/assets/audio/0.57.mp3": "97b6d702fd0d006c507f0c9b14bf3aba",
"assets/assets/audio/0.43.mp3": "093cff9070efd1c8b7b1d2438d151f10",
"assets/assets/audio/0.80.mp3": "093cff9070efd1c8b7b1d2438d151f10",
"assets/assets/audio/0.81.mp3": "011a7b530ed609b7d1713c8df65e6d65",
"assets/assets/audio/0.95.mp3": "447b8a1e5bdf1690bf8d01631299bd94",
"assets/assets/audio/0.42.mp3": "01b872b5f1d00ccdfc5adce02a59a910",
"assets/assets/audio/0.56.mp3": "efb88c8b15deb69950d8cc6643e87a1b",
"assets/assets/audio/0.52.mp3": "b849caf335ed88ca5adf9d83ba13b46c",
"assets/assets/audio/0.46.mp3": "3118a8803fbd0fc712b9d5dbee521b79",
"assets/assets/audio/0.85.mp3": "44eb24db35c7d8422fff12d1b291376f",
"assets/assets/audio/0.84.mp3": "fd905fa3f12761a40f54c1d5fc380b43",
"assets/assets/audio/0.90.mp3": "1acf84675f504a06aea2dccfdca77fbe",
"assets/assets/audio/0.47.mp3": "7931b390150cd11239a78a2f8b1603a3",
"assets/assets/audio/0.53.mp3": "3800de7cea27aabedd9f6ad806adc2d9",
"assets/assets/audio/0.4.2.mp3": "bc347512f2d8ebcb6d429ec01502755a",
"assets/assets/audio/0.79.mp3": "093cff9070efd1c8b7b1d2438d151f10",
"assets/assets/audio/0.45.mp3": "34cd226af595362fac210bddf0fa3616",
"assets/assets/audio/0.51.mp3": "69dfb535932ff2ec1c4350dcae408d56",
"assets/assets/audio/0.86.mp3": "7fcaaf4f1fa502c5a65af3ac8ee35797",
"assets/assets/audio/0.92.mp3": "3bff3a20421859c533b6ad9c61a384b8",
"assets/assets/audio/0.93.mp3": "eea9d760317ef610b78150b50a4537f4",
"assets/assets/audio/0.87.mp3": "e3e518a3ff52a8e359357a9fe17efcfc",
"assets/assets/audio/0.50.mp3": "51943e42221c3aba99a64183914c028c",
"assets/assets/audio/0.44.mp3": "093cff9070efd1c8b7b1d2438d151f10",
"assets/assets/audio/0.78.mp3": "69dfb535932ff2ec1c4350dcae408d56",
"assets/assets/audio/0.9.mp3": "4378c6f3938fe4ed5210fe85120cecbb",
"assets/assets/audio/0.4.1.mp3": "ab2bb9c329ce84f752549fea1a9d15ba",
"assets/assets/audio/0.61.mp3": "b849caf335ed88ca5adf9d83ba13b46c",
"assets/assets/audio/0.75.mp3": "c85335de3513c8d6c958e8663e9845af",
"assets/assets/audio/0.49.mp3": "a0f789384311dd20ef00663360be0600",
"assets/assets/audio/0.60.mp3": "9cd81c64fda54d65c5a58eca6e86921b",
"assets/assets/audio/0.5.mp3": "0fbc4906095a2fd49913b5bf0ff0c640",
"assets/assets/audio/0.7.mp3": "917325d42f7069a6a57c45b44c62ed4e",
"assets/assets/audio/0.76.mp3": "b849caf335ed88ca5adf9d83ba13b46c",
"assets/assets/audio/0.62.mp3": "093cff9070efd1c8b7b1d2438d151f10",
"assets/assets/audio/0.88.mp3": "4707ac5938c869a3766fd5e843f961ab",
"assets/assets/audio/0.63.mp3": "093cff9070efd1c8b7b1d2438d151f10",
"assets/assets/audio/0.77.mp3": "89c911bd131fd6be8f327a6f20964941",
"assets/assets/audio/0.6.mp3": "98034d974323ac603b9d1a38a2a48745",
"assets/assets/audio/0.2.mp3": "f76f56eabf3fe9933db915e7603cebc5",
"assets/assets/audio/0.73.mp3": "cb35b8cb0c325ae1d68446da97217fdb",
"assets/assets/audio/0.67.mp3": "bce12e130ca42e8bab9659d44e22265d",
"assets/assets/audio/0.98.mp3": "070e03c3ebda8cb82c08ae5bec287f86",
"assets/assets/audio/0.99.mp3": "ba61917c413482467e0297c253341d59",
"assets/assets/audio/0.66.mp3": "e70b751966afae05712d9c2e101b43b0",
"assets/assets/audio/0.72.mp3": "5ff039bac355cd72cba7ab80a596ef57",
"assets/assets/audio/0.3.mp3": "45123bc08e0c86c6e34fd5923c7fdfb6",
"assets/assets/audio/0.1.mp3": "7a58d1fdd12921a6bb24341810a168a1",
"assets/assets/audio/0.64.mp3": "1e08cb23d9f538e4b711b6eebc6a54d5",
"assets/assets/audio/0.70.mp3": "093cff9070efd1c8b7b1d2438d151f10",
"assets/assets/audio/0.71.mp3": "b50e1c6339c62d3c255e811ca3771227",
"assets/assets/audio/0.65.mp3": "faea298b2ba1072198ae927967a8900e",
"assets/assets/audio/0.59.mp3": "6ee30cd3da487f1aa69f6a3a15e60f47",
"assets/assets/audio/0.16.mp3": "59ff60689dcad263df95ff310c6b8a99",
"assets/assets/audio/0.17.mp3": "12cf72e33fccbd6a0212a72ab2ac964e",
"assets/assets/audio/0.15.mp3": "db8a957acb4d91fc06d011628bd39f8c",
"assets/assets/audio/0.29.mp3": "a8b65469f3d4f21a90e1b28c4edeb141",
"assets/assets/audio/0.28.mp3": "a79fd3c0b1734de01312997cbee6796f",
"assets/assets/audio/0.14.mp3": "44fa27114b2ad1675494ab96392677dd",
"assets/assets/audio/1.1.mp3": "35fddc3ca228f0ceb7a9eb52cd0cbf89",
"assets/assets/audio/0.38.mp3": "9cd81c64fda54d65c5a58eca6e86921b",
"assets/assets/audio/0.10.mp3": "5c90368dd8225535f51fa4a296dd6ff8",
"assets/assets/audio/0.11.mp3": "4b0c94b27bd0a94e927a03117609d91a",
"assets/assets/audio/0.39.mp3": "8258d950db2d71d5b545270ebb63f5fb",
"assets/assets/audio/1.0.mp3": "5015bf8a4e9a63997a03369e1e5c5135",
"assets/assets/audio/1.2.mp3": "6525b71aaca6366b86040764b2d4b4e2",
"assets/assets/audio/0.13.mp3": "3837356872c6f0d0aa88aa721eadfca3",
"assets/assets/audio/0.12.mp3": "1d2a64de3bf313c2fbe87191744415ba",
"assets/assets/audio/1.3.mp3": "6525b71aaca6366b86040764b2d4b4e2",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93"};
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
