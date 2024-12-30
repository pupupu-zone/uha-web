import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useAppDispatch } from '@store';
import { useSelector } from 'react-redux';
import { useStore } from '@tanstack/react-form';

import yup from '@yup';
import { blobUrlToFile } from '@utils';
import { useForm } from '@tanstack/react-form';
import { yupValidator } from '@tanstack/yup-form-adapter';

import { actions as settingsActions } from '@data/settings';
import { actions as userActions } from '@data/user';
import { selectors as userSelectors } from '@data/user';
import { useLazyUpdateUserQuery } from '@data/user/api';

const formSchema = yup.object({
	avatar: yup.string()
});

const useUpdateAvatar = () => {
	const dispatch = useAppDispatch();
	const [request, result] = useLazyUpdateUserQuery();
	const userData = useSelector(userSelectors.userSelector);

	const form = useForm({
		validatorAdapter: yupValidator(),
		validators: {
			onChange: formSchema
		},
		defaultValues: {
			avatar: userData.avatar_url || ''
		},
		onSubmit: async ({ value }) => {
			const formData = new FormData();
			const avatar = await blobUrlToFile(value.avatar, 'avatar');

			if (avatar) {
				formData.append('avatar', avatar);
				request(formData);
			}
		}
	});

	const errors = useStore(form.store, (store) => store.errors);

	useEffect(() => {
		if (!result.isSuccess || result.isFetching) return;

		dispatch(userActions.updateUser(result.data));
		dispatch(settingsActions.setSettings(result.data));

		form.reset();
	}, [result.isSuccess, result.isFetching]);

	useEffect(() => {
		if (!errors.length) return;

		errors.forEach((err) => {
			toast.error(err as string);
		});
	}, [errors]);

	return { form, result };
};

export default useUpdateAvatar;
