import styled, { createGlobalStyle } from 'styled-components';

export const ReactColorful = createGlobalStyle`
	.react-colorful {
		width: 100% !important;
	}
`;

export const Swatch = styled.button<{ $color: string }>`
	justify-self: center;
	height: 36px;
	aspect-ratio: 2/1;
	padding: 0;
	background-color: ${(props) => props.$color};
	border: none;
	border-radius: 50px;
	transition: transform 100ms ease-in;
	user-select: none;
	will-change: transform;

	&:active,
	&:focus-visible {
		transform: scale(0.95);
	}
`;

export const SwatchesList = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(72px, 1fr));
	gap: 12px;
`;

export default styled.div`
	position: relative;
	z-index: 1;
	width: 100%;
	isolation: isolate;
`;
