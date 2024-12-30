import { useForm } from '@tanstack/react-form';
import { yupValidator } from '@tanstack/yup-form-adapter';

import yup from '@yup';
import useGetInitialApp from './use-get-initial-app';

const formSchema = yup.object({
	name: yup.string().min(2, 'Minimum 2 characters').required('Mandatory Field'),
	color: yup.string().hex('Use HEX').required('Mandatory Field'),
	avatar: yup.mixed<File>(),
	logo_url: yup.string().url('Invalid URL'),
	aliases: yup.array().of(yup.string())
});

const useAddApp = () => {
	const initialApp = useGetInitialApp();

	const form = useForm({
		validatorAdapter: yupValidator(),
		validators: {
			onChange: formSchema
		},
		defaultValues: initialApp,
		onSubmit: ({ value }) => {
			console.log('SUBMIT:', value);
		}
	});

	return { form };
};

export default useAddApp;
