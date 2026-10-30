// Grimório offline: guarda só os arquivos do próprio app (nunca os seus PDFs).
// A versão abaixo é carimbada pelo build: todo deploy muda este arquivo, então o
// navegador instala o worker novo e a página avisa/recarrega.
const VERSION = '2026.10.29-213103';
const CACHE = 'grimorio-' + VERSION;
const APP = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './apple-touch-icon.png'];

self.addEventListener('install', e => {
  // cache:'reload' ignora o cache HTTP do navegador → guarda a versão que acabou de sair
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(APP.map(u => new Request(u, { cache:'reload' })))));
  self.skipWaiting();
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith('grimorio-') && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
// Rede primeiro (sempre conferindo com o servidor); sem internet, usa a cópia guardada.
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== location.origin) return;
  e.respondWith(fetch(e.request, { cache:'no-cache' }).then(r => {
    if (r.ok){ const copy = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); }
    return r;
  }).catch(() => caches.match(e.request, { ignoreSearch:true }).then(r => r || (e.request.mode === 'navigate' ? caches.match('./index.html') : undefined))
    .then(r => r || Response.error())));
});
