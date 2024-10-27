import React from 'react';
import { createLazyFileRoute } from '@tanstack/react-router';

import ResetPasswordUnit from '@pages/id/reset-password';

export const Route = createLazyFileRoute('/id/reset-password')({
	component: () => <ResetPasswordUnit />
});
