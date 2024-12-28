import styled, { css, createGlobalStyle } from 'styled-components';

const swatchesCommon = css`
	width: 36px;
	height: 36px;
	aspect-ratio: 1;
	padding: 0;
	border: none;
	border-radius: 50%;
	transition: transform 100ms ease-in;
	user-select: none;
	will-change: transform;

	&:active,
	&:focus-visible {
		transform: scale(0.95);
	}
`;

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
	${swatchesCommon}
	background-color: ${(props) => props.$color};
`;

export const OwnSwatch = styled.button<{ $color: string; $isTextDark: boolean }>`
	${swatchesCommon}
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${(props) => (props.$isTextDark ? '#333' : '#fff')};
	background-color: ${(props) => props.$color};
	transition: color 100ms ease-in;
	will-change: color;
`;

export const Swatches = styled.div`
	display: grid;
	grid-auto-columns: min-content;
	grid-auto-flow: column;
	gap: 12px;
	padding: 12px 24px;
`;

export const Label = styled.label<{ $color: string }>`
	padding: 12px;
	color: var(--label);
	font-weight: 500;
	font-size: 16px;
	line-height: 1;
	background-color: var(--input-border);
	background-image: linear-gradient(45deg, transparent 50%, ${(props) => props.$color} 50%);
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
`;

export default styled.div`
	display: grid;
	grid-auto-flow: row;
	background-color: var(--input-bg);
	border: 1px solid transparent;
	border-color: var(--input-border);
	border-radius: 8px;
`;
