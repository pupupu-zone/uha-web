import { createFileRoute } from '@tanstack/react-router';

import SubsListPage from '@src/pages/subs-list';

export const Route = createFileRoute('/_auth/subs-list')({
	component: SubsListPage
});
