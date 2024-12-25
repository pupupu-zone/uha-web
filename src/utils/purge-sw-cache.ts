const purgeServiceWorker = async (): Promise<boolean> => {
	try {
		if (!('caches' in window)) {
			throw new Error('Cache API not supported');
		}

		const cacheKeys = await caches.keys();

		for (const key of cacheKeys) {
			await caches.delete(key);
		}

		if ('serviceWorker' in navigator) {
			const registrations = await navigator.serviceWorker.getRegistrations();

			await Promise.all(registrations.map((registration) => registration.unregister()));
		}

		return true;
	} catch (error) {
		return false;
	}
};

export default purgeServiceWorker;
