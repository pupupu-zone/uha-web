import { useEffect } from 'react';

const sendHealthEvent = () => fetch('/sw/health');

const useHealthSW = () => {
	useEffect(() => {
		if (Notification.permission !== 'granted') return;

		sendHealthEvent();

		window.addEventListener('online', sendHealthEvent);

		return () => {
			window.removeEventListener('online', sendHealthEvent);
		};
	}, [Notification.permission]);
};

export default useHealthSW;
