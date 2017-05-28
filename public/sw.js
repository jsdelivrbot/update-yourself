self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('airhorner').then(function(cache) {
     return cache.addAll([
       '/',
       '/manifest.json',
       '/css/materialize.min.css',
       '/css/style.css',
       '/main.js',
       '/js/init.js',
       '/js/jquery-2.1.1.min.js',
       '/js/materialize.js',
       '/fonts/roboto/Roboto-Bold.woff', 
       '/fonts/roboto/Roboto-Bold.woff2', 
       '/fonts/roboto/Roboto-Light.woff',
       '/fonts/roboto/Roboto-Light.woff2',
       '/fonts/roboto/Roboto-Medium.woff',
       '/fonts/roboto/Roboto-Medium.woff2',
       '/fonts/roboto/Roboto-Regular.woff',
       '/fonts/roboto/Roboto-Regular.woff2',
       '/fonts/roboto/Roboto-Thin.woff',
       '/fonts/roboto/Roboto-Thin.woff2' 
     ]);
   })
 );
});

self.addEventListener('fetch', function(event) { 
  event.respondWith(caches.match(event.request));
});
