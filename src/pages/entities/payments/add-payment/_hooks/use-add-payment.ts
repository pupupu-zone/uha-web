import { useForm } from '@tanstack/react-form';
import { yupValidator } from '@tanstack/yup-form-adapter';

import yup from '@yup';
import useGetInitialPayment from './use-get-initial-payment';

const formSchema = yup.object({
	name: yup.string().min(1, '').required('Mandatory Field'),
	emoji: yup.string().min(1, '').required('Mandatory Field'),
	color: yup.string().hex('Use HEX').required('Mandatory Field'),
	comment: yup.string()
});

const useAddPayment = () => {
	const initialPayment = useGetInitialPayment();

	const form = useForm({
		validatorAdapter: yupValidator(),
		validators: {
			onChange: formSchema
		},
		defaultValues: initialPayment,
		onSubmit: ({ value }) => {
			console.log('SUBMIT:', value);
		}
	});

	return { form };
};

export default useAddPayment;
