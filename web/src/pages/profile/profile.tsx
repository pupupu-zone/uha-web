import React, { useEffect } from 'react';
import { useLocation } from '@tanstack/react-router';
import { useAppDispatch } from '@store';

import { useShallFill } from '@hooks';

import { actions as settingsActions } from '@data/settings';
import { actions as userActions } from '@data/user';
import { useLazyObtainUserQuery } from '@data/user/api';

import { Button } from '@ui';
import Avatar from './avatar';
import About from './about';
import Donation from './donation';
import Currencies from './currencies';
import Personalization from './personalization';
import UserName from './username';
import Root from './profile.styles';

const Profile = () => {
	const location = useLocation();
	const dispatch = useAppDispatch();
	const [rootRef, shallFill] = useShallFill();

	const [request, result] = useLazyObtainUserQuery();

	useEffect(() => {
		const { abort } = request();

		return () => {
			if (abort) abort();
		};
	}, []);

	useEffect(() => {
		if (!result.isSuccess || result.isFetching) return;

		dispatch(userActions.updateUser(result.currentData || result.data));
		dispatch(settingsActions.setSettings(result.currentData || result.data));
	}, [result.isSuccess, result.isFetching]);

	return (
		<Root ref={rootRef} $shouldFill={shallFill}>
			<Avatar />
			<UserName />

			<Currencies />
			<Personalization />
			<Donation />
			<About />

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
