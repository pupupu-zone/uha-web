import { useForm } from '@tanstack/react-form';
import { yupValidator } from '@tanstack/yup-form-adapter';

import yup from '@yup';
import useGetInitialCategory from './use-get-initial-category';

const formSchema = yup.object({
	name: yup.string().min(2, 'Minimum 2 characters').required('Mandatory Field'),
	emoji: yup.string().min(1, 'Minimum 1 character').required('Mandatory Field'),
	color: yup.string().hex('Use HEX').required('Mandatory Field')
});

const useAddCategory = () => {
	const initialCategory = useGetInitialCategory();

	const form = useForm({
		validatorAdapter: yupValidator(),
		validators: {
			onChange: formSchema
		},
		defaultValues: initialCategory,
		onSubmit: ({ value }) => {
			console.log('SUBMIT:', value);
		}
	});

	return { form };
};

export default useAddCategory;
