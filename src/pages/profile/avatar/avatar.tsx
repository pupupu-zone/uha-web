import React from 'react';
import { useSelector } from 'react-redux';

import { useUpdateAvatar } from './hooks';
import { userNameSelector } from '@data/user/selectors';

import AvatarPicker from '@shared/avatar-picker';
import Root from './avatar.styles';

const AvatarUpload = () => {
	const { form, result } = useUpdateAvatar();
	const userName = useSelector(userNameSelector);

	return (
		<Root as="form" noValidate>
			<form.Field name="avatar">
				{(field) => {
					const onAvatarChange = (newBlob: string = '') => {
						field.handleChange(newBlob);
						form.handleSubmit();
					};

					return (
						<AvatarPicker
							name={userName}
							url={field.state.value}
							onChange={onAvatarChange}
							withDelete={false}
							isFetching={result.isFetching}
						/>
					);
				}}
			</form.Field>
		</Root>
	);
};
export default AvatarUpload;
