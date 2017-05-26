self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('airhorner').then(function(cache) {
     return cache.addAll([
       '/',
       '/index.html',
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
  console.log('Fetch - cache first');
  // If a match isn't found in the cache, the response

  // will look like a connection error
  event.respondWith(caches.match(event.request));
});
