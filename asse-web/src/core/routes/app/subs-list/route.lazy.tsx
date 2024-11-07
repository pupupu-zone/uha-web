import React from 'react';
import { createLazyFileRoute } from '@tanstack/react-router';

import SubsListPage from '@pages/subs-list';

export const Route = createLazyFileRoute('/app/subs-list')({
	component: () => <SubsListPage />
});
