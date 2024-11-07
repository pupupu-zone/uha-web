import { useEffect } from 'react';
import { useForm } from '@tanstack/react-form';
import { yupValidator } from '@tanstack/yup-form-adapter';

import yup from '@yup';
import { generateRandomName } from '@utils';
import { useLazyRegisterQuery } from '@pages/auth-flows/register-flow/_api';

const formSchema = yup.object({
	name: yup.string().min(2, 'Your name must be at least 2 characters long').required('Mandatory Field'),
	email: yup.string().email('Please use pattern "name@domain.tld"').required('Mandatory Field'),
	password: yup.string().min(8, 'Minimum 8 characters').required('Mandatory Field')
});

const useRegister = () => {
	const [request, result] = useLazyRegisterQuery();

	const form = useForm({
		validatorAdapter: yupValidator(),
		validators: {
			onChange: formSchema
		},
		defaultValues: {
			email: '',
			password: '',
			name: generateRandomName()
		},
		onSubmit: async ({ value }) => {
			await request(value);
		}
	});

	useEffect(() => {
		if (!result.isSuccess || !result.data) return;

		console.log('[ID]: Register:', result.data);
	}, [result.isSuccess, result.data]);

	return form;
};

export default useRegister;
