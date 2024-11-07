import { useEffect } from 'react';
import { useRouter, useNavigate } from '@tanstack/react-router';

import { sleep } from '@utils';
import { useAuth } from '@core/auth';
import { useLazyLogoutQuery } from '@pages/id/logout-flow/_api';

const useLogout = () => {
	const auth = useAuth();
	const router = useRouter();
	const navigate = useNavigate();
	const [request, result] = useLazyLogoutQuery();

	useEffect(() => {
		request();
	}, []);

	useEffect(() => {
		if (!result.isSuccess || !result.data) return;

		if (result.isSuccess) {
			test();
		}
		console.log('[ID]: Logout:', result.data);
	}, [result.isSuccess, result.data]);

	const test = async () => {
		await auth.logout();
		await router.invalidate();
		await sleep(2000);
		await navigate({ to: '/subs-list' });
	};
};

export default useLogout;
