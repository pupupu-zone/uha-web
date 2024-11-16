import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from '@tanstack/react-router';
import { useAppDispatch } from '@store';

import { actions as userActions } from '@data/user';
import { useLazyObtainUserQuery } from '@data/user/api';

import { Button } from '@ui';
import Avatar from './avatar';
import UserName from './username';
import SettingsBlock from './settings-block';
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

		dispatch(userActions.editUser(result.currentData || result.data));
	}, [result.isSuccess, result.isFetching]);

	return (
		<Root ref={rootRef} $shouldFill={shouldFill}>
			<Avatar />

			<UserName />

			<SettingsBlock title="General">
				Primary Currency
				<br />
			</SettingsBlock>

			<SettingsBlock title="Personalization">
				Theme
				<br />
				{/* Language
				<br />
				First Day of the Week */}
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
