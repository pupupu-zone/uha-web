import React from 'react';
import { createFileRoute } from '@tanstack/react-router';

type SearchParams = {
	action?: 'view' | 'edit' | 'delete';
};

function TargetComponent({ action, paymentId }: SearchParams) {
	return `Hello /_auth-guard/entities/apps/$paymentId! (${action}) (${paymentId})`;
}

const PaymentCrossroad = () => {
	const { action } = Route.useSearch();
	const { paymentId } = Route.useParams();

	return <TargetComponent action={action} paymentId={paymentId} />;
};

export const Route = createFileRoute('/_auth-guard/entities/payments/$paymentId')({
	component: PaymentCrossroad,
	validateSearch: (search: SearchParams) => {
		if (!('action' in search)) {
			search.action = 'view';
		}

		return search;
	}
});
