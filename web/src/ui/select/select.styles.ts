import styled, { createGlobalStyle } from 'styled-components';
import { animated } from '@react-spring/web';

export const StopScroll = createGlobalStyle`
	html {
		overflow: hidden;
	}
`;

export const Background = styled.div`
	position: fixed;
	z-index: 999;
	inset: 0;
	background-color: rgba(0 0 0 / 0.5);
`;

export const Cancel = styled.div`
	display: grid;
	z-index: 1000;
	grid-auto-rows: max-content;
	grid-auto-columns: 1fr;
	grid-auto-flow: row;
	background-color: var(--popup-bg);
	border-radius: 18px;
	padding: 18px;
	box-shadow: 0 0 10px 0 rgba(0 0 0 / 0.05);
	font-weight: 800;
	font-size: 20px;
	display: flex;
	width: auto;
	align-items: center;
	justify-content: center;
`;

export const Item = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: center;
	font-size: 18px;
	padding: 18px;

	& + & {
		border-top: 1px solid var(--border);
	}
`;

export const List = styled.div`
	display: grid;
	grid-auto-rows: max-content;
	grid-auto-columns: 1fr;
	grid-auto-flow: row;
	max-height: 60dvh;
	margin-bottom: 12px;
	overflow-y: auto;
	background-color: var(--popup-bg);
	border-radius: 18px;
	box-shadow: 0 0 10px 0 rgba(0 0 0 / 0.05);
`;

export const AnimatedRoot = styled(animated.div)`
	position: fixed;
	right: calc(env(safe-area-inset-right) + 12px);
	bottom: calc(env(safe-area-inset-bottom) + 12px);
	left: calc(env(safe-area-inset-left) + 12px);
	z-index: 1000;
`;
