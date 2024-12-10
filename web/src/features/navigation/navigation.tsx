import React, { useEffect, useState } from 'react';
import { animated, useSpring } from '@react-spring/web';
import { useSearch } from '@tanstack/react-router';

import { Link } from '@tanstack/react-router';
import { Icon } from '@ui';
import { useScrollDirection } from '@hooks';
import { useLocation } from '@tanstack/react-router';
import Root, { AddButton, NavButton } from './navigation.styles';

const Navigation = () => {
	const search = useSearch({ from: '/_auth-guard' });
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
			<Link to="/subscriptions" search={{ view: 'list', action: search.action }}>
				<NavButton>
					<Icon name="list" />
				</NavButton>
			</Link>

			<Link to="/subscriptions" search={{ view: 'calendar', action: search.action }}>
				<NavButton>
					<Icon name="calendar" />
				</NavButton>
			</Link>

			<Link to={location.pathname} search={{ action: 'add', view: search.view }}>
				<AddButton>
					<Icon name="add" />
				</AddButton>
			</Link>

			<Link to="/library">
				<NavButton>
					<Icon name="library" />
				</NavButton>
			</Link>

			<Link to="/profile">
				<NavButton>
					<Icon name="profile" />
				</NavButton>
			</Link>
		</Root>
	);
};

export default Navigation;
