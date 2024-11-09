import { createFileRoute } from '@tanstack/react-router';

import LibraryPage from '@src/pages/library';

export const Route = createFileRoute('/_auth-guard/library')({
	component: LibraryPage
});
