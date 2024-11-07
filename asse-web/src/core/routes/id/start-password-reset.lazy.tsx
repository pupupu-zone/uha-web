import React from 'react';
import { createLazyFileRoute } from '@tanstack/react-router';

import StartResetPasswordUnit from '@pages/id/reset-flow/start-password-reset';

export const Route = createLazyFileRoute('/id/start-password-reset')({
	component: () => <StartResetPasswordUnit />
});
