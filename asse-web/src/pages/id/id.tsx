import React from 'react';
import { Outlet, Link } from '@tanstack/react-router';

// import RegisterUnit from './register';
// import ResetPasswordUnit from './reset-password';
// import SetNewPasswordUnit from './set-new-password';
// import TwoFactorUnit from './two-factor/two-factor';
// import VerifyEmailUnit from './verify-email';

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
