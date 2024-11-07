import React from 'react';
import { createLazyFileRoute } from '@tanstack/react-router';

import SendEmailAgain from '@pages/id/register-flow/new-token';

export const Route = createLazyFileRoute('/id/new-token')({
	component: () => <SendEmailAgain />
});
