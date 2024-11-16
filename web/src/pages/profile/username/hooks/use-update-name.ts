import { useEffect } from 'react';
import { useAppDispatch } from '@store';
import { useSelector } from 'react-redux';

import yup from '@yup';
import { useForm } from '@tanstack/react-form';
import { yupValidator } from '@tanstack/yup-form-adapter';

import { actions as settingsActions } from '@data/settings';
import { actions as userActions } from '@data/user';
import { selectors as userSelectors } from '@data/user';
import { useLazyUpdateUserQuery } from '@data/user/api';

const formSchema = yup.object({
	name: yup.string().required()
});

const useUpdateName = () => {
	const dispatch = useAppDispatch();
	const [request, result] = useLazyUpdateUserQuery();
	const userData = useSelector(userSelectors.userSelector);

	const form = useForm({
		validatorAdapter: yupValidator(),
		validators: {
			onChange: formSchema
		},
		defaultValues: {
			name: userData.name
		},
		onSubmit: ({ value }) => {
			if (userData.name === value.name?.trim()) return;
			const formData = new FormData();

			if (value.name) {
				formData.append('name', value.name);
			}

			request(formData);
		}
	});

	useEffect(() => {
		if (!result.isSuccess || result.isFetching) return;

		dispatch(userActions.updateUser(result.data));
		dispatch(settingsActions.setSettings(result.data));

		form.reset();
	}, [result.isSuccess, result.isFetching]);

	return { form, result };
};

export default useUpdateName;
