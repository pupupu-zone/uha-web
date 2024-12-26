import { createLazyFileRoute } from '@tanstack/react-router';
import { AddApp } from '@pages/entities/apps';

export const Route = createLazyFileRoute('/_auth-guard/entities/apps/add')({
	component: AddApp
});
