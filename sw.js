const itemsCached = [
    './dashboard.html', 
    './css/dashboard.css', 
    './javascript/dashboard.js', 
    './images/logo192.png', 
    './css/imagesforcss/varanasiMobile.jpg', 
    './images/health2.png',
    './images/cityTour2.png',
    './images/tourists2.png',
    './images/shopping2.png',
    './images/food2.png'
]

self.addEventListener('install', e => {
    e.waitUntil(
        caches.open("c1").then(cache => {
            return cache.addAll(itemsCached)
        })
    )

})


self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request)
        })
    )
})