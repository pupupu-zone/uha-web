import React, { useEffect, useState } from 'react';
import { animated, useSpring } from '@react-spring/web';

import { Icon } from '@ui';
import { useScrollDirection } from '@hooks';
import { useLocation } from '@tanstack/react-router';
import Root, { AddButton, NavButton } from './navigation.styles';

const Navigation = () => {
	const location = useLocation();
	const scrollDirection = useScrollDirection();
	const [manualShow, setManualShow] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			setManualShow(false);
		};

		window.addEventListener('scroll', onScroll);

		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	const navBarAnimation = useSpring({
		transform: scrollDirection === 'down' && !manualShow ? 'translateY(100%)' : 'translateY(0%)',
		config: { tension: 210, friction: 20 }
	});

	const handleNavBarClick = () => {
		setManualShow(true);
	};

	return (
		<Root as={animated.div} style={navBarAnimation} onClick={handleNavBarClick}>
			<NavButton to="/subscriptions" search={{ view: 'list' }}>
				<Icon name="home" />
			</NavButton>

			<NavButton to="/analytics">
				<Icon name="analyze" />
			</NavButton>

			<AddButton to={location.pathname} search={{ action: 'add' }}>
				<Icon name="add" />
			</AddButton>

			<NavButton to="/library">
				<Icon name="library" />
			</NavButton>

			<NavButton to="/profile">
				<Icon name="profile" />
			</NavButton>
		</Root>
	);
};

export default Navigation;
