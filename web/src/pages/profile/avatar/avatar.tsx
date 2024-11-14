import React, { useEffect, useMemo, useRef } from 'react';
import { useSelector } from 'react-redux';

import { selectors as userSelectors } from '@data/user';
import { useInitials, useBrokenImg, useGradientId, useUpdateAvatar } from './hooks';

import { Icon } from '@ui';
import Root, { ImageWrap, ImageSelector, Initials, Image, Edit } from './avatar.styles';

const Avatar = () => {
	const avatarInputRef = useRef<HTMLInputElement>(null);
	const { form, result } = useUpdateAvatar();
	const userData = useSelector(userSelectors.userDataSelector);
	const avatar = form.useStore((store) => store.values.avatar);
	const isValid = form.useStore((store) => store.isValid && !store.isPristine);

	const initials = useInitials();
	const gradientId = useGradientId();
	const { avatarRef, isImageBroken, isImageLoading } = useBrokenImg();

	useEffect(() => {
		if (!isValid) return;

		form.handleSubmit();
	}, [isValid]);

	const avatarUrl = useMemo(() => {
		if (typeof avatar === 'string') return avatar;

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
					{avatarUrl && !isImageBroken && <Image ref={avatarRef} src={avatarUrl} alt={userData.name} />}
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
