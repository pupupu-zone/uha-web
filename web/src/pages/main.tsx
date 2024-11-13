import React, { useEffect } from 'react';
import { useAppDispatch } from '@store';
import { useSelector } from 'react-redux';
import { useNavigate } from '@tanstack/react-router';

import { actions as userActions } from '@data/user';
import { useLazyObtainUserQuery } from '@data/user/api';
import { ScrollRestoration, Outlet } from '@tanstack/react-router';
import { isAuthorizedSelector } from '@pages/auth-flows/_redux/selectors';

import Navigation from '@features/navigation';
import Root from './main.styles';

const MainPage = () => {
	const dispatch = useAppDispatch();
	const isAuthorized = useSelector(isAuthorizedSelector);
	const [request, result] = useLazyObtainUserQuery();
	const navigate = useNavigate();

	useEffect(() => {
		if (!isAuthorized) return;

		request();
	}, [isAuthorized]);

	useEffect(() => {
		if (!result.isError) return;

		navigate({
			to: '/logout'
		});
	}, [navigate, result.isError]);

	useEffect(() => {
		if (!result.isSuccess || result.isFetching) return;

		dispatch(userActions.addUser(result.data));
	}, [result.isSuccess, result.isFetching]);

	return (
		<Root>
			<ScrollRestoration getKey={(location) => location.pathname} />
			<Outlet />

			<Navigation />
		</Root>
	);
};

export default MainPage;
