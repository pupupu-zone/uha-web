import React from 'react';
import { createLazyFileRoute } from '@tanstack/react-router';

import { VerifyEmailPage } from '@pages/auth-flows/register-flow';

type SearchParams = {
	token: string;
};

export const Route = createLazyFileRoute('/_id/register/verify')({
	component: () => <VerifyEmail />
});

const VerifyEmail = () => {
	const { token } = Route.useSearch<SearchParams>();

	return <VerifyEmailPage token={token} />;
};
