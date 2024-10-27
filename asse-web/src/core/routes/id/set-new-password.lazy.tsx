import React from 'react';
import { createLazyFileRoute } from '@tanstack/react-router';

import SetNewPasswordUnit from '@pages/auth-id/set-new-password';

export const Route = createLazyFileRoute('/id/set-new-password')({
	component: () => <SetNewPasswordUnit />
});
