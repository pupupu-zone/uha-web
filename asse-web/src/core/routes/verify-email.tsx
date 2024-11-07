import React from 'react';
import { createFileRoute } from '@tanstack/react-router';

import VerifyEmailPage from '@pages/id/register-flow/verify-email';

type SearchParams = {
	token: string;
};

export const Route = createFileRoute('/verify-email')({
	component: () => <VerifyEmail />
});

const VerifyEmail = () => {
	const { token } = Route.useSearch<SearchParams>();

	return <VerifyEmailPage token={token} />;
};
