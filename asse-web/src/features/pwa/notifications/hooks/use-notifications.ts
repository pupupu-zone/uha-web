import { useEffect, useState } from 'react';

import useCheckApiAvailability from './use-check-api';
import useManageWebPushSubscription from './use-manage-webpush';

const useNotificationPermission = () => {
	const isApiAvailable = useCheckApiAvailability();
	const [permStatus, setPermStatus] = useState('');
	const [initialStatus, setInitialStatus] = useState('');
	const [isFateAccepted, setFaith] = useState(window.localStorage.getItem('fate_accepted') === 'true');
	const webpsuh = useManageWebPushSubscription();

	useEffect(() => {
		if (!isApiAvailable) return;

		getStatus();
	}, [isApiAvailable]);

	useEffect(() => {
		if (permStatus === 'prompt') {
			window.localStorage.removeItem('fate_accepted');
		} else if (permStatus === 'granted' && initialStatus !== permStatus) {
			webpsuh.createSubscription();
		} else if (permStatus === 'granted') {
			webpsuh.updateSubscription();
		}
	}, [permStatus, initialStatus]);

	const getStatus = async () => {
		const permissionStatus = await navigator.permissions.query({ name: 'notifications' });

		permissionStatus.onchange = (event) => {
			const target = event.target as PermissionStatus;

			setPermStatus(target.state);
		};

		setPermStatus(permissionStatus.state);
		setInitialStatus(permissionStatus.state);
	};

	const requestPermission = async () => {
		if (!isApiAvailable || Notification?.permission !== 'default' || permStatus !== 'prompt') return;

		const permission = await Notification.requestPermission();

		setPermStatus(permission);
	};

	const acceptFate = () => {
		window.localStorage.setItem('fate_accepted', 'true');
		setFaith(true);
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
