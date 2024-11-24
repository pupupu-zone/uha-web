/// <reference lib="webworker" />
import { cleanupOutdatedCaches, createHandlerBoundToURL, precacheAndRoute } from 'workbox-precaching';
import { clientsClaim } from 'workbox-core';
import { NavigationRoute, registerRoute } from 'workbox-routing';

declare let self: ServiceWorkerGlobalScope;

/**
 * self.__WB_MANIFEST is the default injection point
 */
precacheAndRoute(self.__WB_MANIFEST);

// clean old assets
cleanupOutdatedCaches();

let allowlist: RegExp[] | undefined;
// in dev mode, we disable precaching to avoid caching issues
if (import.meta.env.DEV) allowlist = [/^\/$/];

// to allow work offline
registerRoute(new NavigationRoute(createHandlerBoundToURL('index.html'), { allowlist }));

self.skipWaiting();
clientsClaim();

// Init Event
self.addEventListener('activate', async () => {
	console.log('[SW]: Activate');
});

self.addEventListener('fetch', (event) => {
	if (event.request.url.endsWith('/sw/health')) {
		console.log(`[SW]: It's alive (${import.meta.env.VITE_BUILD_TIME})`);

		event.respondWith(new Response({ status: 200 }));
	}
});
