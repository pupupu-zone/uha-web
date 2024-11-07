import React from 'react';
import { createFileRoute } from '@tanstack/react-router';

import { SetNewPasswordPage } from '@src/pages/auth-flows/reset-flow';

type SearchParams = {
	token: string;
};

export const Route = createFileRoute('/reset-password/set')({
	component: () => <SetNewPassword />
});

const SetNewPassword = () => {
	const { token } = Route.useSearch<SearchParams>();

	return <SetNewPasswordPage token={token} />;
};
