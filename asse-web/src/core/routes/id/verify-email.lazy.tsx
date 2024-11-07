import React from 'react';
import { createLazyFileRoute } from '@tanstack/react-router';

import VerifyEmailUnit from '@pages/id/register-flow/verify-email';

type SearchParams = {
	token: string;
};

export const Route = createLazyFileRoute('/id/verify-email')({
	component: () => <VerifyEmail />
});

const VerifyEmail = () => {
	const { token } = Route.useSearch<SearchParams>();

	return <VerifyEmailUnit token={token} />;
};
