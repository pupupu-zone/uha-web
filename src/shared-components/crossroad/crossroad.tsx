import React, { useState } from 'react';
import { useTransition, animated } from '@react-spring/web';
import { useNavigate, useLocation } from '@tanstack/react-router';

import { H2, Icon } from '@ui';
import { Link } from '@tanstack/react-router';
import Root, { Background, ItemsWrap, AdderRoot, AddIcon } from './crossroad.styles';

import type { AdderProps } from './crossroad.d';

const AnimatedBackground = animated(Background);
const AnimatedItems = animated(ItemsWrap);

const Adder = ({ to, children, onBeforeNavigate }: AdderProps) => {
	const handleClick = (e: React.MouseEvent) => {
		e.preventDefault();
		onBeforeNavigate(to);
	};

	return (
		<AdderRoot as={Link} to={to} onClick={handleClick}>
			<AddIcon>
				<Icon name="add" width={28} height={28} />
			</AddIcon>

			<H2>{children}</H2>
		</AdderRoot>
	);
};

const Crossroad = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const [isVisible, setIsVisible] = useState(true);

	const backgroundTransition = useTransition(isVisible, {
		from: { opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
		config: { tension: 280, friction: 20 }
	});

	const itemsTransition = useTransition(isVisible, {
		from: { transform: 'translateY(100%)' },
		enter: { transform: 'translateY(0%)' },
		leave: { transform: 'translateY(100%)' },
		config: { tension: 280, friction: 24 }
	});

	const handleClose = (targetPath?: string) => {
		setIsVisible(false);

		window.setTimeout(() => {
			if (targetPath) {
				navigate({ to: targetPath });
			} else {
				const searchParams = location.search;
				delete searchParams['action'];

				navigate({
					to: location.pathname,
					search: searchParams
				});
			}
		}, 300);
	};

	const handleAdderClick = (to: string) => {
		handleClose(to);
	};

	return (
		<>
			{backgroundTransition((style, item) => {
				if (!item) return null;

				return <AnimatedBackground onClick={() => handleClose()} style={style} />;
			})}

			<Root>
				{itemsTransition((style, item) => {
					if (!item) return null;

					return (
						<AnimatedItems style={style}>
							<Adder to="/entities/subscriptions/add" onBeforeNavigate={handleAdderClick}>
								Subscription
							</Adder>

							<Adder to="/entities/categories/add" onBeforeNavigate={handleAdderClick}>
								Category
							</Adder>

							<Adder to="/entities/apps/add" onBeforeNavigate={handleAdderClick}>
								Application
							</Adder>

							<Adder to="/entities/payments/add" onBeforeNavigate={handleAdderClick}>
								Payment method
							</Adder>
						</AnimatedItems>
					);
				})}
			</Root>
		</>
	);
};

export default Crossroad;
