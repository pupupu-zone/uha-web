import { createLazyFileRoute } from '@tanstack/react-router';

import { InitResetPage } from '@pages/auth-flows/reset-flow';

export const Route = createLazyFileRoute('/_id/reset-password/init')({
	component: InitResetPage
});
