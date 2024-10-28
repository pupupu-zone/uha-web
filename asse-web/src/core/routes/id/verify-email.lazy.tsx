import React from 'react';
import { createLazyFileRoute } from '@tanstack/react-router';

import VerifyEmailUnit from '@pages/id/verify-email';

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
