import React from 'react';
import { createLazyFileRoute } from '@tanstack/react-router';

import RegisterUnit from '@pages/id/register';

export const Route = createLazyFileRoute('/id/register')({
	component: () => <RegisterUnit />
});
