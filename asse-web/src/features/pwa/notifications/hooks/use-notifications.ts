import { useEffect, useState } from 'react';

const useCheckApiAvailability = () => {
	const [isAvailable, setAvailability] = useState<boolean | null>();

	useEffect(() => {
		if (typeof navigator === 'undefined' || !navigator.permissions) {
			setAvailability(false);
		} else {
			setAvailability(true);
		}
	}, []);

	return isAvailable;
};

const useNotificationPermission = () => {
	const isApiAvailable = useCheckApiAvailability();
	const [permStatus, setPermStatus] = useState('');
	const [isFateAccepted, setFaith] = useState(window.localStorage.getItem('fate_accepted') === 'true');

	useEffect(() => {
		if (!isApiAvailable) return;

		getStatus();
	}, [isApiAvailable]);

	useEffect(() => {
		if (permStatus === 'prompt') {
			window.localStorage.removeItem('fate_accepted');
		}
	}, [permStatus]);

	const getStatus = async () => {
		const permissionStatus = await navigator.permissions.query({ name: 'notifications' });

		permissionStatus.onchange = (event) => {
			const target = event.target as PermissionStatus;

			setPermStatus(target.state);
		};

		setPermStatus(permissionStatus.state);
	};

	const requestPermission = async () => {
		if (!isApiAvailable) return;

		const permission = await Notification.requestPermission();

		setPermStatus(permission);
	};

	const acceptFate = () => {
		setFaith(true);
		window.localStorage.setItem('fate_accepted', 'true');
	};

	return {
		isApiAvailable,
		status: permStatus,
		begForPermissions: requestPermission,

		// User was prompted to enable notifications and they declined it
		// After blocking notifications, toast was shown with info how to enable them back
		// So user have to accept fate by clicking the 'ok' button
		acceptFate,
		isFateAccepted
	};
};

export default useNotificationPermission;
