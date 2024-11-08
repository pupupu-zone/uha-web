import { useForm } from '@tanstack/react-form';
import { yupValidator } from '@tanstack/yup-form-adapter';
import yup from '@yup';

import { useLazyInitiateRecoveryQuery } from '@pages/auth-flows/reset-flow/_api';

const formSchema = yup.object({
	email: yup.string().email('Please use pattern "name@domain.tld"').required('Mandatory Field')
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
		onSubmit: ({ value }) => {
			request(value);
		}
	});

	return { form, result };
};

export default useResetPassword;
