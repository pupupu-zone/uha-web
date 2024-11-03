import { useEffect } from 'react';
import { useForm } from '@tanstack/react-form';
import { yupValidator } from '@tanstack/yup-form-adapter';
import yup from '@yup';

import API from '@api';

const userApi = API.injectEndpoints({
	endpoints: (build) => ({
		updateUser: build.query<unknown, unknown>({
			query: (body) => ({
				url: `/user/update`,
				method: 'PUT',
				credentials: 'include',
				body
			})
		})
	})
});

const { useLazyUpdateUserQuery } = userApi;

const formSchema = yup.object({
	name: yup.string().required(),
	avatar: yup.mixed().required()
});

const useUpdateUser = () => {
	const [request, result] = useLazyUpdateUserQuery();

	const form = useForm({
		validatorAdapter: yupValidator(),
		validators: {
			onChange: formSchema
		},
		defaultValues: {
			name: '',
			avatar: null
		},
		onSubmit: async ({ value }) => {
			const formData = new FormData();
			formData.append('avatar', value.avatar);
			formData.append('name', value.name);

			await request(formData);
		}
	});

	useEffect(() => {
		if (!result.isSuccess || !result.data) return;

		console.log('[User]: Update:', result.data);
	}, [result.isSuccess, result.data]);

	return form;
};

export default useUpdateUser;
