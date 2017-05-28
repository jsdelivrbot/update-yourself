self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('airhorner').then(function(cache) {
     return cache.addAll([
       '/',
       '/manifest.json',
       '/css/materialize.min.css',
       '/css/style.css',
       '/js/init.js',
       '/js/jquery-2.1.1.min.js',
       '/js/materialize.js'
     ]);
   })
 );
});

self.addEventListener('fetch', function(event) { 
  event.respondWith(caches.match(event.request));
});
