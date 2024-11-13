import React, { useEffect } from 'react';
import { useAppDispatch } from '@store';
import { useLocation } from '@tanstack/react-router';
import { Button } from '@ui';

import { useLazyObtainUserQuery } from '@data/user/api';
import { actions as userActions } from '@data/user';

import Avatar from './avatar';
import UserName from './username';
import SettingsBlock from './settings-block';
import Root from './profile.styles';

const Profile = () => {
	const location = useLocation();
	const dispatch = useAppDispatch();
	const [request, result] = useLazyObtainUserQuery();

	useEffect(() => {
		const { abort } = request();

		return () => {
			if (abort) abort();
		};
	}, []);

	useEffect(() => {
		if (!result.isSuccess) return;

		dispatch(userActions.addUser(result.data));
	}, [result.isSuccess]);

	return (
		<Root>
			<Avatar />

			<UserName />

			<SettingsBlock title="Common">Something</SettingsBlock>
			<SettingsBlock title="Theming">Something</SettingsBlock>
			<SettingsBlock title="About">Something</SettingsBlock>

			<Button
				to="/logout"
				search={{
					from: location
				}}
				isFullWidth
			>
				Sign Out
			</Button>
		</Root>
	);
};

export default Profile;
