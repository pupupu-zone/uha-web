import type { Payment } from '@data/payments';

export type Props = Payment;

export type UseLogoT = {
	emoji: Props['emoji'];
	name: Props['name'];
};
