import { useEffect } from 'react';

import { useHealthSW } from './hooks';
import { useRegisterSW } from 'virtual:pwa-register/react';

const PWA = () => {
	useHealthSW();

	const {
		needRefresh: [needRefresh],
		updateServiceWorker
	} = useRegisterSW();

	useEffect(() => {
		if (needRefresh) {
			updateServiceWorker();
		}
	}, [needRefresh]);

	return null;
};

export default PWA;
