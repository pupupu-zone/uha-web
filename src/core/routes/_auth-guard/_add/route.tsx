import AddPage from '@pages/add';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_auth-guard/_add')({
	component: AddPage
});
