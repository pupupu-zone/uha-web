import mime from 'mime-types';
import { useForm } from '@tanstack/react-form';
import { yupValidator } from '@tanstack/yup-form-adapter';

import yup from '@yup';
import useGetInitialApp from './use-get-initial-app';

const blobUrlToFile = async (blobUrl: string, fileName = 'image') => {
	const response = await fetch(blobUrl);
	const blob = await response.blob();
	const extension = mime.extension(blob.type);

	return new File([blob], `${fileName}.${extension}`, { type: blob.type });
};

const formSchema = yup.object({
	name: yup.string().min(2, 'Minimum 2 characters').required('Mandatory Field'),
	color: yup.string().hex('Use HEX').required('Mandatory Field'),
	avatar: yup.string(), // avatar is internal and is blob url
	logo_url: yup.string(), // logo_url is external, not blob url
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
