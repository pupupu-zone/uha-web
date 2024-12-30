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
			const avatar = await blobUrlToFile(value.avatar, value.name || 'logo');

			console.log(avatar);
		}
	});

	return { form };
};

export default useAddApp;
