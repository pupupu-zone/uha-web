import React from 'react';
import { createFileRoute } from '@tanstack/react-router';

type SearchParams = {
	action?: 'view' | 'edit' | 'delete';
};

function TargetComponent({ action, appId }: SearchParams) {
	return `Hello /_auth-guard/entities/apps/$appId! (${action}) (${appId})`;
}

const Crossroad = () => {
	const { action } = Route.useSearch();
	const { appId } = Route.useParams();

	return <TargetComponent action={action} appId={appId} />;
};

export const Route = createFileRoute('/_auth-guard/entities/apps/$appId')({
	component: Crossroad,
	validateSearch: (search: SearchParams) => {
		if (!('action' in search)) {
			search.action = 'view';
		}

		return search;
	}
});
