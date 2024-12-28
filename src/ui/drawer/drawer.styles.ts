import styled from 'styled-components';
import { animated } from '@react-spring/web';

export const Backdrop = styled(animated.div)`
	position: fixed;
	z-index: 9998;
	inset: 0;
	background-color: transparent;
	touch-action: none;
`;

export const DragHandle = styled.div`
	width: 40px;
	height: 4px;
	margin: 0 auto 20px;
	background-color: var(--light-text);
	border-radius: 2px;
`;

export const Animated = styled(animated.div)`
	position: fixed;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 9999;
	padding: 20px;
	padding-bottom: calc(env(safe-area-inset-bottom) + 20px);
	background-color: var(--popup-bg);
	border-top-left-radius: 16px;
	border-top-right-radius: 16px;
	box-shadow: 0 -2px 10px rgba(0 0 0 / 0.1);
	touch-action: none;
`;
