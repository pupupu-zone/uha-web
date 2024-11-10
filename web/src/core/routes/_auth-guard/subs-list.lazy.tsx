import { createLazyFileRoute } from '@tanstack/react-router';

import SubsListPage from '@src/pages/subs-list';

export const Route = createLazyFileRoute('/_auth-guard/subs-list')({
	component: SubsListPage
});
