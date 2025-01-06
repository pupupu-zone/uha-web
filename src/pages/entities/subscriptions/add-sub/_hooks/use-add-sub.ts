import { today, getLocalTimeZone } from '@internationalized/date';

import { useForm } from '@tanstack/react-form';
import { yupValidator } from '@tanstack/yup-form-adapter';

import yup from '@yup';

const timezone = getLocalTimeZone();

const formSchema = yup.object({
	name: yup.string().min(2).required(),
	category_id: yup.string().required(),
	app_id: yup.string().required(),
	payment_method_id: yup.string().required(),
	interval_value: yup.number().required(),
	interval_type: yup.string().required(),
	price: yup.number().required(),
	currency: yup.string().required(),
	first_payment: yup.string().required(),
	next_payment: yup.string().required()
});

const useAddApp = () => {
	const form = useForm({
		validatorAdapter: yupValidator(),
		validators: {
			onChange: formSchema
		},
		defaultValues: {
			name: '',
			category_id: '',
			app_id: '',
			payment_method_id: '',
			interval_value: 1,
			interval_type: 'month',
			price: undefined,
			currency: 'USD',
			first_payment: today(timezone),
			next_payment: today(timezone).add({ months: 1 })
		},
		onSubmit: ({ value }) => {
			console.log('SUBMIT:', value);
		}
	});

	return { form };
};

export default useAddApp;
