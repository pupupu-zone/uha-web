import React, { useState } from 'react';

import { useRequestPermissions, useCheckApiAvailability } from './hooks';

import { H3, SmallText } from '@ui';
import { Button } from 'react-aria-components';
import Root, { Actions } from './notifications.styles';

const Notifications = () => {
	const [isActionPerformed, setIsActionPerformed] = useState(false);
	const [isHidden, setIsHidden] = useState(false);
	const isApiAvailable = useCheckApiAvailability();
	const { requestPermissions, isPermissionGranted, isPermissionDenied } = useRequestPermissions();

	const begForPermissions = () => {
		setIsActionPerformed(true);
		requestPermissions();
	};

	if (isActionPerformed && isPermissionDenied && !isHidden) {
		return (
			<Root>
				<H3>Вы отказались от уведомлений</H3>
				<SmallText>Включить их можно в настройках браузера</SmallText>

				<Actions>
					<Button onPress={() => setIsHidden(true)}>Хорошо</Button>
				</Actions>
			</Root>
		);
	}

	if (isPermissionGranted || isPermissionDenied || isHidden || typeof isApiAvailable !== 'boolean' || !isApiAvailable) {
		return null;
	}

	return (
		<Root>
			<H3>Push-уведомления</H3>
			<SmallText>Показывает новые сообщения родным для ОС методом</SmallText>

			<Actions>
				<Button onPress={begForPermissions}>Включить</Button>

				<Button onPress={() => setIsHidden(true)}>Потом решу</Button>
			</Actions>
		</Root>
	);
};

export default Notifications;
