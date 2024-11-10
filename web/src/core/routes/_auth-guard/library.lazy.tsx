import { createLazyFileRoute } from '@tanstack/react-router';

import LibraryPage from '@src/pages/library';

export const Route = createLazyFileRoute('/_auth-guard/library')({
	component: LibraryPage
});
