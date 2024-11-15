import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from '@tanstack/react-router';

import { useAppDispatch } from '@store';
import { actions as authActions } from '@pages/auth-flows/_redux';
import { useLazyLogoutQuery } from '@pages/auth-flows/logout-flow';
import { isAuthorizedSelector } from '@pages/auth-flows/_redux/selectors';

const useLogout = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const [request, result] = useLazyLogoutQuery();
	const isAuthorized = useSelector(isAuthorizedSelector);

	useEffect(() => {
		request();
		dispatch(authActions.authLogout());
	}, []);

	useEffect(() => {
		if (isAuthorized || !result.isSuccess) return;

		navigate({ to: '/login' });

		window.setTimeout(() => {
			window.location.reload();
		}, 0);
	}, [navigate, isAuthorized, result.isSuccess]);
};

export default useLogout;
