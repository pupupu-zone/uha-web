import React from 'react';
import { Outlet, Link } from '@tanstack/react-router';

const AuthPage = () => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				minHeight: '100vh',
				gap: '60px'
			}}
		>
			AUTH PAGE <Outlet />
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'space-between',
					gap: '20px'
				}}
			>
				<Link to="/id/login">Login</Link>
				<Link to="/id/logout">Logout</Link>
				<Link to="/id/register">Register</Link>
				<Link to="/id/reset-password">Reset Password</Link>
				<Link to="/id/set-new-password">Set New Password</Link>
				<Link to="/id/2fa">Two Factor</Link>
				<Link
					to="/id/verify-email"
					search={{
						token: 'hello'
					}}
				>
					Verify Email
				</Link>
			</div>
		</div>
	);
};

export default AuthPage;
