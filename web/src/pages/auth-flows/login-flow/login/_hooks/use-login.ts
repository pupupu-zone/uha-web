import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from '@tanstack/react-router';
import { useForm } from '@tanstack/react-form';
import { yupValidator } from '@tanstack/yup-form-adapter';

import yup from '@yup';
import { useAppDispatch } from '@store';
import { actions as authActions } from '@pages/auth-flows/_redux';
import { isAuthorizedSelector } from '@pages/auth-flows/_redux/selectors';
import { useLazyLoginQuery } from '@pages/auth-flows/login-flow';

const formSchema = yup.object({
	login: yup.string().min(2, 'Minimum 2 characters').required('Mandatory Field'),
	password: yup.string().min(8, 'Minimum 8 characters').required('Mandatory Field')
});

const useLogin = () => {
	const isAuthorized = useSelector(isAuthorizedSelector);
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const [request, result] = useLazyLoginQuery();

	const form = useForm({
		validatorAdapter: yupValidator(),
		validators: {
			onChange: formSchema
		},
		defaultValues: {
			login: '',
			password: ''
		},
		onSubmit: ({ value }) => {
			request(value);
		}
	});

	useEffect(() => {
		if (!isAuthorized) return;

		navigate({ to: '/subscriptions' });
	}, [isAuthorized, navigate]);

	useEffect(() => {
		if (!result.isSuccess || result.isFetching) return;

		dispatch(authActions.authLogin());
	}, [result.isSuccess, result.isFetching]);

	return { form, result };
};

export default useLogin;
