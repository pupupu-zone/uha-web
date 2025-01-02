import { useForm } from '@tanstack/react-form';
import { yupValidator } from '@tanstack/yup-form-adapter';

import yup from '@yup';
import { blobUrlToFile } from '@utils';
import useGetInitialApp from './use-get-initial-app';

const formSchema = yup.object({
	name: yup.string().min(2).required(),
	color: yup.string().hex().required(),
	avatar: yup.string(),
	category_id: yup.string().required(),
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
		onSubmit: async ({ value }) => {
			const formData = new FormData();
			const avatar = await blobUrlToFile(value.avatar, 'logo');

			if (avatar) {
				formData.append('avatar', avatar);
			}

			formData.append('name', value.name);
			formData.append('color', value.color);
			formData.append('category_id', value.category_id);
			formData.append('aliases', JSON.stringify(value.aliases));

			console.log('formData', Array.from(formData));
		}
	});

	return { form };
};

export default useAddApp;
