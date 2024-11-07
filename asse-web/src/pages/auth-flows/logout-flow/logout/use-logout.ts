import { useEffect } from 'react';
import { useNavigate } from '@tanstack/react-router';

import { useAuth } from '@core/auth';
import { useLazyLogoutQuery } from '@pages/auth-flows/logout-flow';

const useLogout = () => {
	const auth = useAuth();
	const navigate = useNavigate();
	const [request, result] = useLazyLogoutQuery();

	useEffect(() => {
		request();
	}, []);

	useEffect(() => {
		if (auth.isAuthenticated) return;

		navigate({ to: '/login' });
	}, [navigate, auth.isAuthenticated]);

	useEffect(() => {
		if (!result.isSuccess || !result.data) return;

		auth.logout();
	}, [result.isSuccess, result.data]);
};

export default useLogout;
