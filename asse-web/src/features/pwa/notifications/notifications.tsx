import React, { useState } from 'react';

import { H3, SmallText } from '@ui';
import { Button } from 'react-aria-components';
import Root, { Actions } from './notifications.styles';

import { useNotificationPermission } from './hooks';

const Notifications = () => {
	const notification = useNotificationPermission();
	const [isHidden, setIsHidden] = useState(false);

	const begForPermissions = () => {
		notification.begForPermissions();
	};

	if (!notification.isApiAvailable) {
		<Root>
			<H3>Push-уведомления</H3>
			<SmallText>Ваш браузер не поддерживает push-уведомления</SmallText>

			<Actions>
				<Button onPress={notification.acceptFate}>Понятно</Button>
			</Actions>
		</Root>;
	}

	if (notification.status === 'prompt' && !isHidden) {
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
	}

	if (notification.status === 'denied' && !notification.isFateAccepted) {
		return (
			<Root>
				<H3>Вы отказались от уведомлений</H3>
				<SmallText>Включить их можно в настройках браузера</SmallText>

				<Actions>
					<Button onPress={notification.acceptFate}>Хорошо</Button>
				</Actions>
			</Root>
		);
	}

	return null;
};

export default Notifications;
