import { useEffect } from 'react';
import { useLazyLogoutQuery } from '@pages/id/_api';

const useLogout = () => {
	const [request, result] = useLazyLogoutQuery();

	useEffect(() => {
		request();
	}, []);

	useEffect(() => {
		if (!result.isSuccess || !result.data) return;

		console.log('[ID]: Logout:', result.data);
	}, [result.isSuccess, result.data]);
};

export default useLogout;
