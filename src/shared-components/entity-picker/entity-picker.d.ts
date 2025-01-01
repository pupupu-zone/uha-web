import type { Category } from '@data/categories/categories.d';
import type { Application } from '@data/applications/applications.d';
import type { Payment } from '@data/payments/payments.d';

export type EntityT = Category | Application | Payment;

export type Props = {
	entity: 'categories' | 'apps' | 'payment_methods';
	entityId: string;
	onChange: (entityId: string) => void;
	isTextDark?: boolean;
};
