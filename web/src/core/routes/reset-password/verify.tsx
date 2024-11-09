import React from 'react';
import { createFileRoute } from '@tanstack/react-router';

import { VerifyResetPage } from '@src/pages/auth-flows/reset-flow';

type SearchParams = {
	token: string;
};

export const Route = createFileRoute('/reset-password/verify')({
	component: () => <VerifyReset />
});

const VerifyReset = () => {
	const { token } = Route.useSearch<SearchParams>();

	return <VerifyResetPage token={token} />;
};
