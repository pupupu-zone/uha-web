import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Outlet, Link, useNavigate } from '@tanstack/react-router';

const Wrap = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
`;

const Route = styled.div`
	display: flex;
	padding: 10px 20px;

	border: 1px solid black;
	border-radius: 5px;
`;

const Root = styled.div`
	display: grid;
	grid-auto-flow: row;
	grid-auto-rows: min-content;
	gap: 60px;
	padding: 60px;
	min-height: 100vh;
`;

const Header = styled.h1`
	font-size: 2rem;
	font-weight: bold;
`;

const AuthPage = () => {
	const navigate = useNavigate();

	useEffect(() => {
		navigate({ to: '/id/login' });
	}, []);

	return <Outlet />;
	return (
		<Root>
			<Header>AUTH PAGE</Header>

			<Outlet />

			<Wrap>
				<Route as={Link} to="/">
					Index
				</Route>

				<Route as={Link} to="/id/register">
					Register
				</Route>
				<Route
					as={Link}
					to="/id/verify-email"
					search={{
						token: 'hello'
					}}
				>
					Verify Email
				</Route>

				<Route as={Link} to="/id/login">
					Login
				</Route>
				<Route as={Link} to="/id/new-token">
					Send E-Mail once again
				</Route>

				<Route as={Link} to="/id/start-password-reset">
					Init Reset Password
				</Route>
				<Route as={Link} to="/id/verify-reset-token">
					Verify Reset Password Token
				</Route>

				<Route as={Link} to="/id/logout">
					Logout
				</Route>
			</Wrap>
		</Root>
	);
};

export default AuthPage;
