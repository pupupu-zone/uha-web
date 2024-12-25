import { createLazyFileRoute } from '@tanstack/react-router';

import { Payments } from '@src/pages/library';

export const Route = createLazyFileRoute('/_auth-guard/library/payments')({
	component: Payments
});
