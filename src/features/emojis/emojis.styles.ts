import styled from 'styled-components';

export const PickerWrap = styled.div`
	& em-emoji-picker {
		width: calc(100% + 24px);
		margin-right: -12px;
		margin-left: -12px;

		--border-radius: 0 0 8px 8px;
		--shadow: none;
	}
`;

export const Emoji = styled.div<{ $color: string }>`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 48px;
	min-width: 48px;
	height: 48px;
	min-height: 48px;
	padding: 0;
	overflow: hidden;
	font-size: 24px;
	line-height: 48px;
	background-color: ${({ $color }) => `color-mix(in srgb, ${$color}, var(--bg-color) 40%)`};
	border: none;
	aspect-ratio: 1;
	transition: transform 100ms ease-in;
	clip-path: url('#squircle');
	user-select: none;
	will-change: transform;

	&:active,
	&:focus-visible {
		transform: scale(0.95);
	}
`;

export default styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(48px, 1fr));
	gap: 12px;
`;
