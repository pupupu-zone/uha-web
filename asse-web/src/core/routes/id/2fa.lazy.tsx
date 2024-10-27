import React from 'react';
import { createLazyFileRoute } from '@tanstack/react-router';

import TwoFactorUnit from '@pages/id/two-factor';

export const Route = createLazyFileRoute('/id/2fa')({
	component: () => <TwoFactorUnit />
});