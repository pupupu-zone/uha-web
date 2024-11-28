/// <reference lib="webworker" />
import { cleanupOutdatedCaches, createHandlerBoundToURL, precacheAndRoute } from 'workbox-precaching';
import { clientsClaim } from 'workbox-core';
import { ExpirationPlugin } from 'workbox-expiration';
import { NetworkFirst, CacheFirst, StaleWhileRevalidate } from 'workbox-strategies';
import { NavigationRoute, registerRoute } from 'workbox-routing';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';

declare let self: ServiceWorkerGlobalScope;

self.__WB_DISABLE_DEV_LOGS = true;

const API_DOMAIN = 'api.subsawwy.com';

// Precache and cleanup
precacheAndRoute(self.__WB_MANIFEST);
cleanupOutdatedCaches();

// Development mode handling
let allowlist: RegExp[] | undefined;
if (import.meta.env.DEV) {
	allowlist = [/^\/$/];
}

// Navigation routes (for SPA)
registerRoute(new NavigationRoute(createHandlerBoundToURL('index.html'), { allowlist }));

// API routes
registerRoute(
	({ url }) => url.hostname === API_DOMAIN,
	new NetworkFirst({
		cacheName: 'api-cache-v1',
		plugins: [
			new ExpirationPlugin({
				maxEntries: 50,
				maxAgeSeconds: 60 // 1 min
			})
		],
		networkTimeoutSeconds: 15
	})
);

// Image caching - both from API domain and main app
const imageRegex = /\.(?:png|gif|jpg|jpeg|svg|webp)$/;
registerRoute(
	({ request, url }) => {
		const isImage = request.destination === 'image' || imageRegex.test(url.pathname);
		const isAllowedDomain = url.hostname === API_DOMAIN || url.hostname === self.location.hostname;

		if (isImage && isAllowedDomain) {
			return true;
		}

		return false;
	},
	new CacheFirst({
		cacheName: 'image-cache-v1',
		plugins: [
			new ExpirationPlugin({
				maxEntries: 60,
				maxAgeSeconds: 14 * 24 * 60 * 60, // 14 days
				purgeOnQuotaError: true
			}),
			new CacheableResponsePlugin({
				statuses: [0, 200]
			})
		],
		matchOptions: {
			ignoreSearch: true
		}
	})
);

// Static assets
registerRoute(
	({ request, url }) => {
		const isStatic =
			request.destination === 'style' || request.destination === 'script' || request.destination === 'font';
		const isMainDomain = url.hostname === self.location.hostname;

		return isStatic && isMainDomain;
	},
	new StaleWhileRevalidate({
		cacheName: 'static-cache-v1',
		plugins: [
			new CacheableResponsePlugin({
				statuses: [0, 200]
			})
		]
	})
);

// Service Worker Control
self.skipWaiting();
clientsClaim();

// Health Check
self.addEventListener('fetch', (event) => {
	if (event.request.url.endsWith('/sw/health')) {
		event.respondWith(
			new Response(
				JSON.stringify({
					status: 'healthy',
					buildTime: import.meta.env.VITE_BUILD_TIME,
					timestamp: new Date().toISOString(),
					apiDomain: API_DOMAIN
				}),
				{
					headers: { 'Content-Type': 'application/json' }
				}
			)
		);
	}
});

// Error handling
self.addEventListener('error', (event) => {
	console.error('[SW]: Error:', event.error);
});

self.addEventListener('unhandledrejection', (event) => {
	console.error('[SW]: Unhandled rejection:', event.reason);
});
