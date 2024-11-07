import { useEffect } from 'react';
import { useForm } from '@tanstack/react-form';
import { useRouter, useNavigate } from '@tanstack/react-router';
import { yupValidator } from '@tanstack/yup-form-adapter';
import yup from '@yup';

import { useAuth } from '@core/auth';
import { useLazyLoginQuery } from '@pages/id/login-flow/_api';
import { sleep } from '@src/utils';

const formSchema = yup.object({
	email: yup.string().email('E-mail is invalid').required('Mandatory Field'),
	password: yup.string().required('Mandatory Field')
});

const useLogin = () => {
	const auth = useAuth();
	const router = useRouter();
	const navigate = useNavigate();
	const [request, result] = useLazyLoginQuery();

	const form = useForm({
		validatorAdapter: yupValidator(),
		validators: {
			onChange: formSchema
		},
		defaultValues: {
			email: '',
			password: ''
		},
		onSubmit: async ({ value }) => {
			await request(value);
		}
	});

	useEffect(() => {
		if (!result.isSuccess || !result.data) return;

		test();

		console.log('[ID]: Login:', result.data);
	}, [result.isSuccess, result.data]);

	// HACK HACK HACK HACKS
	const test = async () => {
		await auth.login('TEST_USER');

		await router.invalidate();

		await sleep(2000);

		await navigate({ to: '/subs-list' });
	};

	return form;
};

export default useLogin;
