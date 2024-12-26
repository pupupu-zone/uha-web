import React from 'react';
import { createFileRoute } from '@tanstack/react-router';

type SearchParams = {
	action?: 'view' | 'edit' | 'delete';
};

function TargetComponent({ action, categoryId }: SearchParams) {
	return `Hello /_auth-guard/entities/apps/$categoryId! (${action}) (${categoryId})`;
}

const Crossroad = () => {
	const { action } = Route.useSearch();
	const { categoryId } = Route.useParams();

	return <TargetComponent action={action} categoryId={categoryId} />;
};

export const Route = createFileRoute('/_auth-guard/entities/categories/$categoryId')({
	component: Crossroad,
	validateSearch: (search: SearchParams) => {
		if (!('action' in search)) {
			search.action = 'view';
		}

		return search;
	}
});
