import { useState } from 'react';

const useRequestPermissions = () => {
	const [permission, setPermission] = useState(Notification.permission);

	const requestPermissions = async () => {
		const permission = await Notification.requestPermission();

		setPermission(permission);
	};

	return {
		requestPermissions,
		isPermissionGranted: permission === 'granted',
		isPermissionDenied: permission === 'denied'
	};
};

export default useRequestPermissions;
