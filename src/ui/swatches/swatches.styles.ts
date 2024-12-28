import styled, { createGlobalStyle } from 'styled-components';

export const ReactColorful = createGlobalStyle`
	/* stylelint-disable selector-class-pattern */
	.react-colorful {
		width: 100% !important;

		& .react-colorful__saturation {
			border-top-left-radius: 0;
			border-top-right-radius: 0;
		}
	}
`;

export const SwatchPreview = styled.button<{ $color: string }>`
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

export default styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(72px, 1fr));
	gap: 12px;
`;
