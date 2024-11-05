import React from 'react';
import styled from 'styled-components';
import { Outlet, Link } from '@tanstack/react-router';

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
	return (
		<Root>
			<Header>AUTH PAGE</Header>

			<Outlet />

			<Wrap>
				<Route as={Link} to="/">
					Index
				</Route>
				<Route as={Link} to="/id/login">
					Login
				</Route>
				<Route as={Link} to="/id/logout">
					Logout
				</Route>
				<Route as={Link} to="/id/register">
					Register
				</Route>
				<Route as={Link} to="/id/reset-password">
					Reset Password
				</Route>
				<Route as={Link} to="/id/set-new-password">
					Set New Password
				</Route>
				<Route as={Link} to="/id/new-token">
					Token Regeneration
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
			</Wrap>
		</Root>
	);
};

export default AuthPage;
