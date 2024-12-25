import { Subscription } from '@pages/add';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/_auth-guard/_add/subscription')({
	component: Subscription
});
