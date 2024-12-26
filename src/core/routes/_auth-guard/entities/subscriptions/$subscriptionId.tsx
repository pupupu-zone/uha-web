import React from 'react';
import { createFileRoute } from '@tanstack/react-router';

type SearchParams = {
	action?: 'view' | 'edit' | 'delete';
};

function TargetComponent({ action, subscriptionId }: SearchParams) {
	return `Hello /_auth-guard/entities/apps/$subscriptionId! (${action}) (${subscriptionId})`;
}

const Crossroad = () => {
	const { action } = Route.useSearch();
	const { subscriptionId } = Route.useParams();

	return <TargetComponent action={action} subscriptionId={subscriptionId} />;
};

export const Route = createFileRoute('/_auth-guard/entities/subscriptions/$subscriptionId')({
	component: Crossroad,
	validateSearch: (search: SearchParams) => {
		if (!('action' in search)) {
			search.action = 'view';
		}

		return search;
	}
});
