import { createFileRoute } from '@tanstack/react-router';

import { RegisterPage } from '@src/pages/auth-flows/register-flow';

export const Route = createFileRoute('/register/init')({
	component: RegisterPage
});
