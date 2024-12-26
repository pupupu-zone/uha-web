import { createFileRoute } from '@tanstack/react-router';
import EntitiesPage from '@pages/entities';

export const Route = createFileRoute('/_auth-guard/entities')({
	component: EntitiesPage
});
