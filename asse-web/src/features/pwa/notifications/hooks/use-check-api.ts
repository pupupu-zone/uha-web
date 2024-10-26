import { useEffect, useState } from 'react';

const useCheckApiAvailability = () => {
	const [isAvailable, setAvailability] = useState<boolean | null>();

	useEffect(() => {
		if (
			typeof navigator === 'undefined' ||
			!navigator.permissions ||
			!('Notification' in window) ||
			!('PushManager' in window) ||
			!('serviceWorker' in navigator)
		) {
			setAvailability(false);
		} else {
			setAvailability(true);
		}
	}, []);

	return isAvailable;
};

export default useCheckApiAvailability;
