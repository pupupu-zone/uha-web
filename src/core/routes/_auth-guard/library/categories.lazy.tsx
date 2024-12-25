import { createLazyFileRoute } from '@tanstack/react-router';
import { Categories } from '@src/pages/library';

export const Route = createLazyFileRoute('/_auth-guard/library/categories')({
	component: Categories
});
