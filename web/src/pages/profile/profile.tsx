import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from '@tanstack/react-router';
import { useAppDispatch } from '@store';

import { actions as settingsActions } from '@data/settings';
import { actions as userActions } from '@data/user';
import { useLazyObtainUserQuery } from '@data/user/api';

import { Button } from '@ui';
import Avatar from './avatar';
import Currencies from './currencies';
import Personalization from './personalization';
import UserName from './username';
import { SettingsBlock } from './_components';
import Root from './profile.styles';

const Profile = () => {
	const location = useLocation();
	const dispatch = useAppDispatch();
	const rootRef = useRef<HTMLDivElement>(null);
	const [shouldFill, setShouldFill] = useState(false);
	const [request, result] = useLazyObtainUserQuery();

	useEffect(() => {
		const { abort } = request();

		if (rootRef.current) {
			const NAVBAR_HEIGHT = 120;
			const contentHeight = rootRef.current.offsetHeight;
			const viewportHeight = window.innerHeight + NAVBAR_HEIGHT;

			setShouldFill(contentHeight <= viewportHeight);
		}

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
		<Root ref={rootRef} $shouldFill={shouldFill}>
			<Avatar />

			<UserName />

			<Currencies />

			<Personalization />

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
				<Button isSecondary>50$</Button>
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
