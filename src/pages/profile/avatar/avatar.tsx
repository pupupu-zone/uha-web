import React, { useEffect, useMemo, useRef } from 'react';
import { useSelector } from 'react-redux';

import { useBrokenImg } from '@hooks';
import { useStore } from '@tanstack/react-form';
import { useInitials, useGradientId, useUpdateAvatar } from './hooks';

import { selectors as userSelectors } from '@data/user';

import { Icon } from '@ui';
import Root, { ImageWrap, ImageSelector, Initials, Image, Edit } from './avatar.styles';

const Avatar = () => {
	const { form, result } = useUpdateAvatar();
	const avatarInputRef = useRef<HTMLInputElement>(null);

	const userData = useSelector(userSelectors.userSelector);
	const avatar = useStore(form.store, (store) => store.values.avatar);
	const isValid = useStore(form.store, (store) => {
		return store.isValid && !store.isPristine;
	});

	const initials = useInitials();
	const gradientId = useGradientId();
	const { imageRef, isImageBroken, isImageLoading } = useBrokenImg();

	useEffect(() => {
		if (!isValid) return;

		form.handleSubmit();
	}, [isValid]);

	const avatarUrl = useMemo(() => {
		if (typeof avatar === 'string') return avatar;
		if (userData.avatar_url) return userData.avatar_url;

		return avatar ? URL.createObjectURL(avatar) : undefined;
	}, [avatar]);

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				e.stopPropagation();
				form.handleSubmit();
			}}
			noValidate
		>
			<Root>
				<form.Field name="avatar">
					{(field) => (
						<ImageSelector
							ref={avatarInputRef}
							id={field.name}
							name={field.name}
							type="file"
							hidden
							onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
								if (!e.target.files) return;

								field.setValue(e.target.files[0]);
							}}
						/>
					)}
				</form.Field>

				<ImageWrap $gradientId={gradientId}>
					{avatarUrl && !isImageBroken && <Image ref={imageRef} src={avatarUrl} alt={userData.name} />}
					{(!avatarUrl || isImageLoading) && <Initials>{initials}</Initials>}

					<Edit
						$withAvatar={Boolean(avatarUrl) && isValid}
						onPress={() => {
							avatarInputRef.current?.click();
						}}
					>
						{() => {
							if (result.isError) {
								return <Icon name="stop" width={36} height={36} />;
							}

							if (result.isFetching) {
								return <Icon name="infinity" width={36} height={36} />;
							}

							return 'Update';
						}}
					</Edit>
				</ImageWrap>
			</Root>
		</form>
	);
};
export default Avatar;
