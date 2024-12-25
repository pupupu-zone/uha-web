import { createLazyFileRoute } from '@tanstack/react-router';
import { Applications } from '@src/pages/library';

export const Route = createLazyFileRoute('/_auth-guard/library/applications')({
	component: Applications
});
