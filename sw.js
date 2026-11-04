/* Hades — Boon Oracle service worker.
 * Cache-first with a full offline cache.
 * The app shell and every icon are stored on install, so the app
 * works offline after the first visit. Bump VERSION to re-cache. */
"use strict";

const VERSION = "v1";
const CACHE = "boon-oracle-" + VERSION;

// App shell + PWA icons.
const SHELL = [
  "./",
  "index.html",
  "style.css",
  "app.js",
  "data.js",
  "manifest.webmanifest",
  "icon-192.png",
  "icon-512.png",
  "icon-maskable-512.png",
  "apple-touch-icon.png",
];

// Every icon the app can show, listed from data.js.
function allIcons() {
  const out = new Set();
  for (const g of GODS) out.add("icons/" + g.symbol);
  for (const w of WEAPONS) out.add("icons/" + w.icon);
  for (const d of DAEDALA) out.add("icons/" + d.icon);
  for (const d of DUOS) out.add("icons/" + d.icon);
  for (const b of BOONS) out.add("icons/" + b.icon);
  return [...out];
}

self.addEventListener("install", (ev) => {
  ev.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE);
      await cache.addAll(SHELL);
      importScripts("data.js");
      // Store all icons. One missing icon must not break the install.
      await Promise.all(
        allIcons().map((url) =>
          fetch(url)
            .then((res) => (res.ok ? cache.put(url, res) : null))
            .catch(() => null)
        )
      );
      return self.skipWaiting();
    })()
  );
});

self.addEventListener("activate", (ev) => {
  ev.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys
          .filter((k) => k.startsWith("boon-oracle-") && k !== CACHE)
          .map((k) => caches.delete(k))
      );
      return self.clients.claim();
    })()
  );
});

self.addEventListener("fetch", (ev) => {
  const req = ev.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;

  // Page navigations: cached page first, network to update, cached
  // fallback when offline.
  if (req.mode === "navigate") {
    ev.respondWith(
      (async () => {
        const cached = await caches.match(req);
        if (cached) return cached;
        try {
          const res = await fetch(req);
          if (res.ok) {
            const cache = await caches.open(CACHE);
            cache.put(req, res.clone());
          }
          return res;
        } catch {
          return (await caches.match("index.html")) || (await caches.match("./"));
        }
      })()
    );
    return;
  }

  // Everything else (js, css, icons): cache-first, store on miss.
  ev.respondWith(
    (async () => {
      const cached = await caches.match(req);
      if (cached) return cached;
      try {
        const res = await fetch(req);
        if (res.ok && (res.type === "basic" || res.type === "cors")) {
          const cache = await caches.open(CACHE);
          cache.put(req, res.clone());
        }
        return res;
      } catch {
        // Offline and never cached: a blank image beats a broken one.
        if (req.destination === "image") {
          return new Response(
            '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><rect width="64" height="64" fill="#150a0c"/><circle cx="32" cy="32" r="14" fill="none" stroke="#8a6d3b" stroke-width="2"/></svg>',
            { status: 200, headers: { "content-type": "image/svg+xml" } }
          );
        }
        return new Response("Offline", { status: 503, statusText: "Offline" });
      }
    })()
  );
});
