import { createFileRoute } from '@tanstack/react-router';

import ProfilePage from '@src/pages/profile';

export const Route = createFileRoute('/_auth/profile')({
	component: ProfilePage
});
