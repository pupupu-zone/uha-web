import { createLazyFileRoute } from '@tanstack/react-router';
import { AddPayment } from '@pages/entities/payments';

export const Route = createLazyFileRoute('/_auth-guard/entities/payments/add')({
	component: AddPayment
});
