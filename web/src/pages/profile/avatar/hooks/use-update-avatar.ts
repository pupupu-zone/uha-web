import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useAppDispatch } from '@store';

import yup from '@yup';
import { useForm } from '@tanstack/react-form';
import { yupValidator } from '@tanstack/yup-form-adapter';

import { useLazyUpdateUserQuery } from '@data/user/api';
import { actions as userActions } from '@data/user';

const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/jfif', 'image/png'];

const formSchema = yup.object({
	avatar: yup
		.mixed<File>()
		.required()
		.test('fileSize', 'File too large. Maximum size is 5MB.', (value) => {
			return value && value.size <= 5 * 1024 * 1024; // 5MB
		})
		.test('fileFormat', 'Unsupported Format. Allowed formats: JPG, JPEG, GIF, PNG.', (value) => {
			return value && SUPPORTED_FORMATS.includes(value.type);
		})
});

const useUpdateAvatar = () => {
	const dispatch = useAppDispatch();
	const [request, result] = useLazyUpdateUserQuery();

	const form = useForm({
		validatorAdapter: yupValidator(),
		validators: {
			onChange: formSchema
		},
		defaultValues: {
			avatar: undefined
		},
		onSubmit: ({ value }) => {
			const formData = new FormData();

			if (value.avatar) {
				formData.append('avatar', value.avatar);
			}

			request(formData);
		}
	});

	const errors = form.useStore((store) => store.errors);

	useEffect(() => {
		if (!result.isSuccess || result.isFetching) return;

		dispatch(userActions.editUser(result.data.data));
		form.reset();
	}, [result.isSuccess, result.isFetching]);

	useEffect(() => {
		if (!errors.length) return;

		errors.forEach(toast.error);
	}, [errors]);

	return { form, result };
};

export default useUpdateAvatar;
