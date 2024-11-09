import { createFileRoute } from '@tanstack/react-router';

import AuthFlow from '@pages/auth-flows';

export const Route = createFileRoute('/_id')({
	component: AuthFlow
});
