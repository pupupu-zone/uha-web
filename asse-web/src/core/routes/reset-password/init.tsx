import { createFileRoute } from '@tanstack/react-router';

import InitializePasswordResetPage from '@pages/id/reset-flow/init-reset';

export const Route = createFileRoute('/reset-password/init')({
	component: InitializePasswordResetPage
});
