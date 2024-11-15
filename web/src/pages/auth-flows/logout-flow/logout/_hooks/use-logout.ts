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
	}, []);

	useEffect(() => {
		if (!result.isSuccess || result.isFetching) return;

		dispatch(authActions.authLogout());
	}, [result.isSuccess, result.isFetching]);

	useEffect(() => {
		if (isAuthorized) return;

		navigate({ to: '/login' });
		window.location.reload();
	}, [isAuthorized]);
};

export default useLogout;
