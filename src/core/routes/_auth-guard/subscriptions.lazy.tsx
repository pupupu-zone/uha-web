import React from 'react';
import { createLazyFileRoute } from '@tanstack/react-router';

import SubsListPage from '@src/pages/subscriptions';

export const Route = createLazyFileRoute('/_auth-guard/subscriptions')({
	component: () => <SubsList />
});

const SubsList = () => {
	const { view, action } = Route.useSearch();

	return <SubsListPage view={view} action={action} />;
};
