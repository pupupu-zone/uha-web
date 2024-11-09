import { createFileRoute } from '@tanstack/react-router';

import { LogoutPage } from '@pages/auth-flows/logout-flow';

export const Route = createFileRoute('/_auth/logout')({
	component: LogoutPage
});
