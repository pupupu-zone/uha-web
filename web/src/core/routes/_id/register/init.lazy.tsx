import { createLazyFileRoute } from '@tanstack/react-router';

import { RegisterPage } from '@src/pages/auth-flows/register-flow';

export const Route = createLazyFileRoute('/_id/register/init')({
	component: RegisterPage
});
