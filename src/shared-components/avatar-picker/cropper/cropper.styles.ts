import styled from 'styled-components';
import { Button as AriaButton } from 'react-aria-components';

export const Rotations = styled.div`
	display: grid;
	grid-auto-columns: min-content min-content;
	grid-auto-flow: column;
	gap: 24px;
	justify-content: center;
`;

export const RotateBtn = styled(AriaButton)`
	width: 64px;
	height: 64px;
	margin: 0;
	padding: 0;
	background-color: transparent;
	border: none;
	border-radius: 50px;
	transition: transform 100ms ease-in-out;

	&:focus-visible {
		transform: scale(0.9);
	}
`;

export const CropperWrap = styled.div`
	position: relative;
	width: 100%;
	aspect-ratio: 1 / 1;
`;

export const Actions = styled.div`
	display: grid;
	grid-auto-columns: 1fr 1fr;
	grid-auto-flow: column;
	gap: 24px;
`;

export default styled.div`
	display: grid;
	grid-auto-flow: row;
	gap: 24px;
`;
