import { useEffect } from 'react';
import { useForm } from '@tanstack/react-form';
import { yupValidator } from '@tanstack/yup-form-adapter';
import yup from '@yup';

import { useLazySetNewPasswordQuery } from '@pages/auth-flows/reset-flow/_api';

const formSchema = yup.object({
	password: yup.string().min(8).required('Password is required')
});

const useHook = (token: string) => {
	const [request, result] = useLazySetNewPasswordQuery();

	const form = useForm({
		validatorAdapter: yupValidator(),
		validators: {
			onChange: formSchema
		},
		defaultValues: {
			password: ''
		},
		onSubmit: ({ value }) => {
			request({
				password: value.password,
				token
			});
		}
	});

	useEffect(() => {
		if (!result.isSuccess || !result.data) return;

		console.log('[ID]: Password change:', result.data);
	}, [result.isSuccess, result.data]);

	return form;
};

export default useHook;
