import { useEffect } from 'react';
import { useForm } from '@tanstack/react-form';
import { yupValidator } from '@tanstack/yup-form-adapter';
import yup from '@yup';

import { useLazyInitiateRecoveryQuery } from '@pages/auth-flows/reset-flow/_api';

const formSchema = yup.object({
	email: yup.string().email('E-mail is invalid').required('E-mail is required')
});

const useResetPassword = () => {
	const [request, result] = useLazyInitiateRecoveryQuery();

	const form = useForm({
		validatorAdapter: yupValidator(),
		validators: {
			onChange: formSchema
		},
		defaultValues: {
			email: ''
		},
		onSubmit: async ({ value }) => {
			await request(value);
		}
	});

	useEffect(() => {
		if (!result.isSuccess || !result.data) return;

		console.log('[ID]: Password Change:', result.data);
	}, [result.isSuccess, result.data]);

	return form;
};

export default useResetPassword;
