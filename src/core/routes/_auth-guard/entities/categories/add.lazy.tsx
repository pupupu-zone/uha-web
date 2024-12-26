import { createLazyFileRoute } from '@tanstack/react-router';
import { AddCategory } from '@pages/entities/categories';

export const Route = createLazyFileRoute('/_auth-guard/entities/categories/add')({
	component: AddCategory
});
