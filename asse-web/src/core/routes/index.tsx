import React from 'react';
import { createFileRoute } from '@tanstack/react-router';

import IndexPage from '@pages/main';

export const Route = createFileRoute('/')({
	component: () => <IndexPage />
});
