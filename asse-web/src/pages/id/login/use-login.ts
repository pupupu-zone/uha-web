import { useForm } from '@tanstack/react-form';
import { yupValidator } from '@tanstack/yup-form-adapter';
import yup from '@yup';

import { useGetAsyncCheckQuery } from './use-async';

const formSchema = yup.object({
	email: yup.string().email('E-mail is invalid').required('E-mail is required'),
	password: yup.string().min(8).required('Password is required')
});

const useLogin = () => {
	const { data } = useGetAsyncCheckQuery();

	const form = useForm({
		validatorAdapter: yupValidator(),
		validators: {
			onChange: formSchema
		},
		defaultValues: {
			email: data?.email || '',
			password: data?.password || ''
		},
		onSubmit: async ({ value }) => {
			console.log(value);
		}
	});

	return form;
};

export default useLogin;
