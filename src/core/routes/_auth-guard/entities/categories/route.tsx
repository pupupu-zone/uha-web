import { Outlet } from '@tanstack/react-router';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_auth-guard/entities/categories')({
	component: Outlet
});
