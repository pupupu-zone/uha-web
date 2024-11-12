import React from 'react';
import { createLazyFileRoute } from '@tanstack/react-router';

import { VerifyResetPage } from '@src/pages/auth-flows/reset-flow';

type SearchParams = {
	token: string;
};

export const Route = createLazyFileRoute('/_id/reset-password/verify')({
	component: () => <VerifyReset />
});

const VerifyReset = () => {
	const { token } = Route.useSearch() as SearchParams;

	return <VerifyResetPage token={token} />;
};
