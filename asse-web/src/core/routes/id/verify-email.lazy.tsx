import React from 'react';
import { createLazyFileRoute } from '@tanstack/react-router';

import VerifyEmailUnit from '@pages/auth-id/verify-email';

export const Route = createLazyFileRoute('/id/verify-email')({
	component: () => <VerifyEmailUnit />
});
