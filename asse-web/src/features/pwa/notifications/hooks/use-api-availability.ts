import { useEffect, useState } from 'react';

const useCheckApiAvailability = () => {
	const [noErrors, setWithError] = useState<boolean | null>();

	useEffect(() => {
		try {
			if (!('serviceWorker' in navigator)) {
				throw new Error('No support for service worker!');
			}

			if (!('Notification' in window)) {
				throw new Error('No support for notification API');
			}

			if (!('PushManager' in window)) {
				throw new Error('No support for Push API');
			}

			setWithError(true);
		} catch (e) {
			setWithError(false);

			console.error(e);
		}
	}, []);

	return noErrors;
};

export default useCheckApiAvailability;
