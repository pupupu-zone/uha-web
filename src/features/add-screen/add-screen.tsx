import React, { useState } from 'react';
import { useTransition, animated } from '@react-spring/web';
import { useNavigate, useLocation } from '@tanstack/react-router';

import { H3, Icon } from '@ui';
import { Link } from '@tanstack/react-router';
import Root, { Background, ItemsWrap, AdderRoot, AddIcon } from './add-screen.styles';

import type { AdderProps } from './add-screen.d';

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

			<H3>{children}</H3>
		</AdderRoot>
	);
};

const AddScreen = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const [isVisible, setIsVisible] = useState(true);

	const backgroundTransition = useTransition(isVisible, {
		from: { opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
		config: { tension: 350, friction: 20 }
	});

	const itemsTransition = useTransition(isVisible, {
		from: { transform: 'translateY(100%)' },
		enter: { transform: 'translateY(0%)' },
		leave: { transform: 'translateY(100%)' },
		config: { tension: 350, friction: 24 }
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
		}, 150);
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
							<Adder to="/subscription" onBeforeNavigate={handleAdderClick}>
								Subscription
							</Adder>

							<Adder to="/category" onBeforeNavigate={handleAdderClick}>
								Category
							</Adder>

							<Adder to="/app" onBeforeNavigate={handleAdderClick}>
								Application
							</Adder>

							<Adder to="/payment" onBeforeNavigate={handleAdderClick}>
								Payment method
							</Adder>
						</AnimatedItems>
					);
				})}
			</Root>
		</>
	);
};

export default AddScreen;
