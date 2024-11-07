import React from 'react';
import { createLazyFileRoute } from '@tanstack/react-router';

import SetNewPasswordUnit from '@pages/id/reset-flow/set-new-password';

type SearchParams = {
	token: string;
};

export const Route = createLazyFileRoute('/id/set-new-password')({
	component: () => <SetNewPassword />
});

const SetNewPassword = () => {
	const { token } = Route.useSearch<SearchParams>();

	return <SetNewPasswordUnit token={token} />;
};
