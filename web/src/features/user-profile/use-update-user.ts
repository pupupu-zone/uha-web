import { useEffect, useState } from 'react';
import { useForm } from '@tanstack/react-form';
import { yupValidator } from '@tanstack/yup-form-adapter';
import yup from '@yup';
import { v4 as uuid } from 'uuid';

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
	name: yup.string(),
	avatar: yup.mixed()
});

const useUpdateUser = () => {
	const [request, result] = useLazyUpdateUserQuery();
	const [avatarUrl, setAvatarUrl] = useState('');

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
			if (value.avatar) {
				formData.append('avatar', value.avatar);
			}

			if (value.name) {
				formData.append('name', value.name);
			}

			await request(formData);
		}
	});

	useEffect(() => {
		if (!result.isSuccess || !result.data) return;

		console.log('[User]: Update:', result.data);

		setAvatarUrl(`${result.data.data.avatar_url}`);
	}, [result.isSuccess, result.data]);

	return { form, avatarUrl };
};

export default useUpdateUser;
