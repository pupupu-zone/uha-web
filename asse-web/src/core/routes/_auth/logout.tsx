import { createFileRoute } from '@tanstack/react-router';

import LogoutPage from '@pages/id/logout-flow/logout';

export const Route = createFileRoute('/_auth/logout')({
	component: LogoutPage
});
