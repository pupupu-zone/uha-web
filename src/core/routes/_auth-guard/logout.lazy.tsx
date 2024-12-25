import { createLazyFileRoute } from '@tanstack/react-router';

import { LogoutPage } from '@pages/auth-flows/logout-flow';

export const Route = createLazyFileRoute('/_auth-guard/logout')({
	component: LogoutPage
});
