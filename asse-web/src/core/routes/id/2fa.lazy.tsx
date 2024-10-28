import React from 'react';
import { createLazyFileRoute } from '@tanstack/react-router';

import TwoFactorUnit from '@pages/id/BACKEND_two-factor';

export const Route = createLazyFileRoute('/id/2fa')({
	component: () => <TwoFactorUnit />
});
