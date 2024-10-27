import React from 'react';
import { createRoute } from '@tanstack/react-router';

import AuthIdPage from '@pages/auth-id';
import LoginUnit from '@pages/auth-id/login';
import TwoFactorUnit from '@pages/auth-id/two-factor';
import RegisterUnit from '@pages/auth-id/register';
import VerifyEmailUnit from '@pages/auth-id/verify-email';
import ResetPasswordUnit from '@pages/auth-id/reset-password';
import SetNewPasswordUnit from '@pages/auth-id/set-new-password';
import LogoutUnit from '@pages/auth-id/logout';

import { rootRoute } from './root.tsx';

const authIdRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/id',
	component: () => <AuthIdPage />
});

export const loginRoute = createRoute({
	getParentRoute: () => authIdRoute,
	path: '/login',
	component: () => <LoginUnit />
});

export const twoFactorRoute = createRoute({
	getParentRoute: () => authIdRoute,
	path: '/2fa',
	component: () => <TwoFactorUnit />
});

export const registerRoute = createRoute({
	getParentRoute: () => authIdRoute,
	path: '/register',
	component: () => <RegisterUnit />
});

export const verifyEmailRoute = createRoute({
	getParentRoute: () => authIdRoute,
	path: '/verify-email',
	component: () => <VerifyEmailUnit />
});

export const resetPasswordRoute = createRoute({
	getParentRoute: () => authIdRoute,
	path: '/reset-password',
	component: () => <ResetPasswordUnit />
});

export const setNewPasswordRoute = createRoute({
	getParentRoute: () => authIdRoute,
	path: '/set-new-password',
	component: () => <SetNewPasswordUnit />
});

export const logoutRoute = createRoute({
	getParentRoute: () => authIdRoute,
	path: '/logout',
	component: () => <LogoutUnit />
});

export default authIdRoute;
