import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';
import styled from 'styled-components';
import { createPortal } from 'react-dom';

import Icon from '../icon';
import Button from '../button';
import { HexColorPicker } from 'react-colorful';
import { Button as AriaButton } from 'react-aria-components';
import Root, { SwatchesList, Swatch, ReactColorful } from './swatches.styles';

import useSwatches from './use-swatches';
import type { Props } from './swatches.d';

const DRAG_THRESHOLD = 50;

const Actions = styled.div`
	width: 100%;
	margin-top: 36px;
`;

const AnimatedDrawer = styled(animated.div)`
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	background: white;
	z-index: 9999;
	border-top-left-radius: 16px;
	border-top-right-radius: 16px;
	box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
	touch-action: none;
	padding: 20px;
	padding-bottom: calc(env(safe-area-inset-bottom) + 20px);
`;

const Backdrop = styled(animated.div)`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0);
	touch-action: none;
	z-index: 9998;
`;

const DragHandle = styled.div`
	width: 40px;
	height: 4px;
	background: #e0e0e0;
	border-radius: 2px;
	margin: 0 auto 20px;
`;

const ColorPickerContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	align-items: center;
`;

const DrawerPortal = ({ isOpen, onClose, children, woBackdrop }) => {
	if (!isOpen) return null;

	const drawerRoot = document.getElementById('drawers');
	if (!drawerRoot) return null;

	return createPortal(<>{children}</>, drawerRoot);
};

const Swatches = ({ onChange }: Props) => {
	const swatches = useSwatches();
	const [customColor, setCustomColor] = useState('#e0e0e0');
	const [isOpen, setIsOpen] = useState(false);

	const [{ y }, api] = useSpring(() => ({ y: 430 }));

	const bind = useDrag(
		({ movement: [, my], velocity: [, vy], direction: [, dy], cancel }) => {
			if (my < -70) cancel();

			if (my > DRAG_THRESHOLD && dy > 0) {
				closeDrawer();
				return;
			}

			if (vy > 0.5 && dy > 0) {
				closeDrawer();
				return;
			}

			api.start({ y: my > 0 ? my : 0, immediate: true });
		},
		{
			from: () => [0, y.get()],
			filterTaps: true,
			bounds: { top: 0 },
			rubberband: true
		}
	);

	const backdropSpring = useSpring({
		opacity: isOpen ? 1 : 0,
		config: { tension: 300, friction: 30 }
	});

	const openDrawer = () => {
		setIsOpen(true);
		api.start({ y: 0, immediate: false });
	};

	const closeDrawer = () => {
		api.start({ y: 430, immediate: false });
		window.setTimeout(() => setIsOpen(false), 300);
	};

	const selectCustomColor = (nextColor: string) => {
		onChange(nextColor);
		setCustomColor(nextColor);
	};

	return (
		<Root>
			<SwatchesList>
				{swatches.map((color) => {
					return <Swatch as={AriaButton} key={color} $color={color} onPress={() => onChange(color)} />;
				})}

				<Swatch as={AriaButton} $color="#fff" onPress={openDrawer}>
					<Icon name="add" />
				</Swatch>
			</SwatchesList>

			<DrawerPortal isOpen={isOpen}>
				<>
					<Backdrop style={backdropSpring} onClick={closeDrawer} />

					<AnimatedDrawer
						{...bind()}
						style={{
							y,
							touchAction: 'none'
						}}
					>
						<DragHandle />
						<ReactColorful />

						<ColorPickerContainer>
							<HexColorPicker color={customColor} onChange={selectCustomColor} />
						</ColorPickerContainer>

						<Actions>
							<Button isFullWidth onPress={closeDrawer}>
								Save Color
							</Button>
						</Actions>
					</AnimatedDrawer>
				</>
			</DrawerPortal>
		</Root>
	);
};

export default Swatches;
