import { useEffect } from 'react';
import { useForm } from '@tanstack/react-form';
import { useNavigate } from '@tanstack/react-router';
import { yupValidator } from '@tanstack/yup-form-adapter';

import yup from '@yup';
import { useAuth } from '@core/auth';
import { useLazyLoginQuery } from '@pages/auth-flows/login-flow';

const formSchema = yup.object({
	email: yup.string().email('E-mail is invalid').required('Mandatory Field'),
	password: yup.string().required('Mandatory Field')
});

const useLogin = () => {
	const auth = useAuth();
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
		onSubmit: ({ value }) => {
			request(value);
		}
	});

	useEffect(() => {
		if (!auth.isAuthenticated) return;

		navigate({ to: '/subs-list' });
	}, [auth.isAuthenticated, navigate]);

	useEffect(() => {
		if (!result.isSuccess || !result.data) return;

		auth.login(result.data.data.user_id || 'ANONYMOUS');
	}, [result.isSuccess, result.data]);

	return form;
};

export default useLogin;
