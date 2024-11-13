import React from 'react';
import { useSelector } from 'react-redux';

import { selectors as userSelectors } from '@data/user';

import { H1 } from '@ui';
import Root from './username.styles';

const UserName = () => {
	const userData = useSelector(userSelectors.userDataSelector);

	return (
		<Root>
			<H1>{userData.name}</H1>
		</Root>
	);
};
export default UserName;
