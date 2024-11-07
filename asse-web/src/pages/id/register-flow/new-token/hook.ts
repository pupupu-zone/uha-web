import { useEffect } from 'react';
import { useForm } from '@tanstack/react-form';
import { yupValidator } from '@tanstack/yup-form-adapter';
import yup from '@yup';

import { useLazyNewTokenQuery } from '@pages/id/register-flow/_api';

const formSchema = yup.object({
	email: yup.string().email('E-mail is invalid').required('E-mail is required')
});

const useNewToken = () => {
	const [request, result] = useLazyNewTokenQuery();

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

		console.log('[ID]: New Token:', result.data);
	}, [result.isSuccess, result.data]);

	return form;
};

export default useNewToken;
