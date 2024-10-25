import React, { useEffect } from 'react';

import { useHealthSW } from './hooks';
import { useRegisterSW } from 'virtual:pwa-register/react';

import BegForNotifications from './notifications';

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

	return (
		<>
			<BegForNotifications />
		</>
	);
};

export default PWA;
