import { Application } from '@pages/add';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/_auth-guard/_add/app')({
	component: Application
});
