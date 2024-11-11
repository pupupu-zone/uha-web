import { createLazyFileRoute } from '@tanstack/react-router';

import SubsListPage from '@src/pages/subscriptions';

export const Route = createLazyFileRoute('/_auth-guard/subscriptions')({
	component: SubsListPage
});
