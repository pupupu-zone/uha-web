import React from 'react';
import { useSelector } from 'react-redux';

import { selectors as userSelectors } from '@data/user';
import { useInitials, useBrokenImg, useGradientId } from './hooks';

import Root, { Initials, Image } from './avatar.styles';

const Avatar = () => {
	const userData = useSelector(userSelectors.userDataSelector);

	const initials = useInitials();
	const gradientId = useGradientId();
	const { avatarRef, isImageBroken } = useBrokenImg();

	return (
		<Root $gradientId={gradientId}>
			{userData.avatar_url && !isImageBroken && <Image ref={avatarRef} src={userData.avatar_url} alt={userData.name} />}

			{!userData.avatar_url && <Initials>{initials}</Initials>}
		</Root>
	);
};
export default Avatar;
