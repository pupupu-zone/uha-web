/*
 * Prevents the user from zooming in or out on the page when using the PWA as a standalone app.
 */

import { useEffect } from 'react';

const isStandalone = () => {
	if ('standalone' in window.navigator) {
		return window.navigator.standalone === true;
	}

	return window.matchMedia('(display-mode: standalone)').matches;
};

const useBlockZoom = () => {
	useEffect(() => {
		const viewportMeta = document.querySelector('meta[name="viewport"]');

		if (isStandalone() && viewportMeta) {
			viewportMeta.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=noo');
		}
	}, []);
};

export default useBlockZoom;
