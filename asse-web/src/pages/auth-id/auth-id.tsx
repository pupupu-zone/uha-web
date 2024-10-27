import React from 'react';
import { Outlet } from '@tanstack/react-router';

// import ROUTES from '@routes';

// import RegisterUnit from './register';
// import ResetPasswordUnit from './reset-password';
// import SetNewPasswordUnit from './set-new-password';
// import TwoFactorUnit from './two-factor/two-factor';
// import VerifyEmailUnit from './verify-email';

const AuthPage = () => {
	return (
		<div>
			AUTH PAGE <Outlet />
		</div>
	);
};

export default AuthPage;
