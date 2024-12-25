import { createLazyFileRoute } from '@tanstack/react-router';

import ProfilePage from '@src/pages/profile';

export const Route = createLazyFileRoute('/_auth-guard/profile')({
	component: ProfilePage
});
