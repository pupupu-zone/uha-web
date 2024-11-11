import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from '@tanstack/react-router';

import { ScrollRestoration, Outlet } from '@tanstack/react-router';
import { useLazyObtainUserQuery } from '@features/user-profile/_api';
import { isAuthorizedSelector } from '@pages/auth-flows/_redux/selectors';

import Navigation from '@features/navigation';
import Root from './main.styles';

const MainPage = () => {
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

	return (
		<Root>
			<ScrollRestoration getKey={(location) => location.pathname} />
			<Outlet />

			<Navigation />
		</Root>
	);
};

export default MainPage;
