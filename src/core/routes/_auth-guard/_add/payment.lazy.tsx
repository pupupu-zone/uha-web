import { Payment } from '@pages/add';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/_auth-guard/_add/payment')({
	component: Payment
});
