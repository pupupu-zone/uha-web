import { useEffect } from 'react';
import { useForm } from '@tanstack/react-form';
import { yupValidator } from '@tanstack/yup-form-adapter';
import yup from '@yup';

import { useLazyRegisterQuery } from '@pages/auth-flows/register-flow/_api';
import { generateRandomName } from '@utils';

const formSchema = yup.object({
	name: yup.string().min(2).required('Required'),
	email: yup.string().email('E-mail is invalid').required('Required'),
	password: yup.string().min(8, 'Minimum 8 chars').required('Required')
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
