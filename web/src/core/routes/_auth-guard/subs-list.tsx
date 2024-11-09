import { createFileRoute } from '@tanstack/react-router';

import SubsListPage from '@src/pages/subs-list';

export const Route = createFileRoute('/_auth-guard/subs-list')({
	component: SubsListPage
});
