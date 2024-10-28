import React from 'react';
import { createFileRoute } from '@tanstack/react-router';

import VerifyEmailUnit from '@pages/id/verify-email';

type SearchParams = {
	token: string;
};

export const Route = createFileRoute('/id/verify-email')({
	component: (props) => <VerifyEmail />
});

const VerifyEmail = () => {
	const { token } = Route.useSearch<SearchParams>();

	return <VerifyEmailUnit token={token} />;
};
