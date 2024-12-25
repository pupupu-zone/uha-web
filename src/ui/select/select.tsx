import React, { useState } from 'react';
import { useSpring } from '@react-spring/web';

import { Item, List, Cancel, StopScroll, Background, AnimatedRoot } from './select.styles';

const Select = ({ values, close, onSelect }) => {
	const [isClosing, setIsClosing] = useState(false);

	const animation = useSpring({
		from: { transform: 'translateY(100%)' },
		to: { transform: isClosing ? 'translateY(100%)' : 'translateY(0%)' },
		config: { tension: 250, friction: 25 },
		onRest: () => {
			if (isClosing) {
				close();
			}
		}
	});

	const handleClose = () => {
		setIsClosing(true);
	};

	return (
		<>
			<StopScroll />
			<Background onClick={handleClose} />

			<AnimatedRoot style={animation}>
				<List>
					{values.map((value) => (
						<Item
							key={value.value}
							onClick={() => {
								onSelect(value);
								handleClose();
							}}
						>
							{value.label}
						</Item>
					))}
				</List>

				<Cancel onClick={handleClose}>Cancel</Cancel>
			</AnimatedRoot>
		</>
	);
};

export default Select;
