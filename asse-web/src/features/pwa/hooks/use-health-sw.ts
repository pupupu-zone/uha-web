import { useEffect } from 'react';

const sendHealthEvent = () => fetch('/sw/health');

const useHealthSW = () => {
	useEffect(() => {
		sendHealthEvent();

		window.addEventListener('online', sendHealthEvent);

		return () => {
			window.removeEventListener('online', sendHealthEvent);
		};
	}, []);
};

export default useHealthSW;
