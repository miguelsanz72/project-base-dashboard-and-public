const CACHE_STATIC_NAME = 'static-v9';
const CACHE_DINAMIC_NAME = 'dinamic-v9';
const CACHE_INMUTABLE_NAME = 'inmutable-v9';

const iconNoti = 'https://admin-sicrux-staging.s3-sa-east-1.amazonaws.com/sicrux-logo-icon.png';

// 2 Cache with network fallback, intenta leer enl cache, si no funciona busca en la red con limite de cache dinamico

async function cleanCache(cacheName, maxItems) {
    const cache = await caches.open(cacheName);
    cache.keys().then((keys) => {
        if (keys.length > maxItems) {
            cache.delete(keys[0]).then(cleanCache(cacheName, maxItems));
        }
    });
}

self.addEventListener('install', (e) => {
    console.log('instalando sw!');
    const cacheprom = caches.open(CACHE_STATIC_NAME).then((cache) => cache.addAll(['/offline.html']));

    const cacheInmutable = caches
        .open(CACHE_INMUTABLE_NAME)
        .then((cache) =>
            cache.addAll([
                'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;900&display=swap',
                'https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap',
                'https://fonts.googleapis.com/icon?family=Material+Icons',
                'https://apis.google.com/js/api.js',
            ])
        );
    const install = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('instalacion terminada');
            self.skipWaiting();
            resolve();
        }, 1000);
    });
    e.waitUntil(Promise.all([cacheprom, cacheInmutable, install]));
});

// cunado se activa el Sw

self.addEventListener('activate', (e) => {
    console.log('SW Activado!!');
    // Borramos los static cache viejos o que no se estan usando
    const respuesta = caches.keys().then((keys) => {
        keys.forEach((key) => {
            if (key !== CACHE_STATIC_NAME && key.includes('static')) {
                return caches.delete(key);
            }
        });
        keys.forEach((key) => {
            if (key !== CACHE_DINAMIC_NAME && key.includes('dinamic')) {
                return caches.delete(key);
            }
        });
        keys.forEach((key) => {
            if (key !== CACHE_INMUTABLE_NAME && key.includes('inmutable')) {
                return caches.delete(key);
            }
        });
    });

    e.waitUntil(respuesta);
});

// Listen Fetch

self.addEventListener('fetch', (e) => {
    const method = e.request.method;
    if (method !== 'GET') {
        return;
    }
    if (e.request.url.includes('.js')) {
        return;
    }
    if (e.request.url.includes('fonts.googleapis')) {
        return e.respondWith(caches.match(e.request));
    }
    if (e.request.url.includes('socket.io')) {
        return;
    }
    if (e.request.cache === 'only-if-cached' && e.request.mode !== 'same-origin') {
        return;
    }
    if (
        e.request.url.includes('.css') ||
        e.request.url.includes('.png') ||
        e.request.url.includes('.jpg') ||
        e.request.url.includes('.woff2') ||
        e.request.url.includes('.ttf')
    ) {
        const response = caches
            .match(e.request)
            .then((resp) => {
                // En cada recarga va a la web y actualiza el STATIC CACHE
                caches.open(CACHE_STATIC_NAME).then((cache) => {
                    fetch(e.request).then((newresp) => cache.put(e.request, newresp));
                });

                if (resp) return resp;

                // No existe el archivo
                // Va a la Web

                return fetch(e.request).then((newResp) => {
                    caches.open(CACHE_DINAMIC_NAME).then((cache) => {
                        cache.put(e.request, newResp);
                        cleanCache(CACHE_DINAMIC_NAME, 100);
                    });

                    return newResp.clone();
                });
            })
            .catch(() => {
                if (e.request.headers.get('accept').includes('text/html')) {
                    return caches.match('/offline.html');
                }
            });

        e.respondWith(response);
    } else {
        return;
    }
});

// Listen Push

self.addEventListener('push', (e) => {
    const data = JSON.parse(e.data.text());
    const title = data.title;
    const options = {
        body: data.message,
        icon: './favicon.ico',
        badge: iconNoti,
        image: '',
        vibrate: [75, 75, 75, 75, 75, 75, 75, 75, 150, 150, 150, 450, 75, 75, 75, 75, 75, 525],
        openUrl: '/',
        data: {
            url: '/',
        },
    };

    e.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclose', (e) => {
    console.log('Notificacion cerrada', e);
});

self.addEventListener('notificationclick', (e) => {
    const notification = e.notification;
    const action = e.action;

    console.log({ notification, action });

    const resp = clients.matchAll().then((clientes) => {
        let client = clientes.find((c) => {
            return c.visibilityState === 'visible';
        });
        if (client !== undefined) {
            client.navigate(notification.data.url);
            client.focus();
        } else {
            clients.openWindow(notification.data.url);
        }
        return notification.close();
    });

    e.waitUntil(resp);
});
