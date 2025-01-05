import type { FormApi, Validator, ReactFormApi } from '@tanstack/react-form';
import yup from '@yup';

type Fields = {
	name: string;
	category_id: string;
	app_id: string;
	payment_method_id: string;
	interval_value: number;
	interval_type: string;
	price: number;
	currency: string;
	first_payment: Date;
	next_payment: Date;
};

export type Props = {
	form: FormApi<Fields, Validator<unknown, yup.AnySchema>> & ReactFormApi<Fields, Validator<unknown, yup.AnySchema>>;
};
