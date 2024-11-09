import { useForm } from '@tanstack/react-form';
import { yupValidator } from '@tanstack/yup-form-adapter';
import yup from '@yup';

import { useLazySetNewPasswordQuery } from '@pages/auth-flows/reset-flow/_api';

const formSchema = yup.object({
	token: yup.string().required('Mandatory Field'),
	password: yup.string().min(8, 'Minimum 8 characters').required('Mandatory Field')
});

const useSetNewPassword = () => {
	const [request, result] = useLazySetNewPasswordQuery();

	const form = useForm({
		validatorAdapter: yupValidator(),
		validators: {
			onChange: formSchema
		},
		defaultValues: {
			token: '',
			password: ''
		},
		onSubmit: ({ value }) => {
			request(value);
		}
	});

	return { form, result };
};

export default useSetNewPassword;
