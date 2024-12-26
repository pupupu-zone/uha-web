import { createLazyFileRoute } from '@tanstack/react-router';
import { AddSubscription } from '@pages/entities/subscriptions';

export const Route = createLazyFileRoute('/_auth-guard/entities/subscriptions/add')({
	component: AddSubscription
});
