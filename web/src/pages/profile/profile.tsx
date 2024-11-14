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
		if (!result.isSuccess || result.isFetching) return;

		dispatch(userActions.editUser(result.currentData || result.data));
	}, [result.isSuccess, result.isFetching]);

	return (
		<Root>
			<Avatar />

			<UserName />

			<SettingsBlock title="General">
				Primary Currency
				<br />
			</SettingsBlock>

			<SettingsBlock title="Personalization">
				Theme
				<br />
				Language
				<br />
				First Day of the Week
			</SettingsBlock>

			<SettingsBlock title="About">
				Terms of Use
				<br />
				Privacy Policy
			</SettingsBlock>

			<SettingsBlock title="Support">
				If you like the app, you can support me
				<br />
				<Button isSecondary>5$</Button>
				<Button isSecondary>10$</Button>
				<Button isSecondary>20$</Button>
				<hr />
				You can send your feedback to feedback@subsawwy.com
			</SettingsBlock>

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
