import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/_auth-guard/analyze')({
	component: RouteComponent
});

function RouteComponent() {
	return 'Hello /_auth-guard/analyze!';
}
