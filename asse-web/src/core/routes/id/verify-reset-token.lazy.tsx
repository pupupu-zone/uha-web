import React from 'react';
import { createLazyFileRoute } from '@tanstack/react-router';

import VerifyResetTokenUnit from '@pages/id/verify-reset-token';

type SearchParams = {
	token: string;
};

export const Route = createLazyFileRoute('/id/verify-reset-token')({
	component: () => <VerifyResetToken />
});

const VerifyResetToken = () => {
	const { token } = Route.useSearch<SearchParams>();

	return <VerifyResetTokenUnit token={token} />;
};
