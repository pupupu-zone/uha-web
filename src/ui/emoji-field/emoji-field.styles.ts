import styled from 'styled-components';

export const PickerWrap = styled.div`
	& em-emoji-picker {
		width: 100%;

		--border-radius: 0 0 8px 8px;
		--shadow: none;
		--rgb-background: 247, 247, 248;
	}
`;

export const PredefinedEmoji = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 42px;
	min-width: 42px;
	max-width: 42px;
	height: 42px;
	min-height: 42px;
	max-height: 42px;
	font-size: 24px;
	line-height: 42px;
	aspect-ratio: 1;
	background-color: var(--input-border);
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

export const EmojiSuggestions = styled.div`
	display: grid;
	grid-auto-columns: min-content;
	grid-auto-flow: column;
	gap: 12px;
	padding: 12px 24px;
`;

export const Emoji = styled.p`
	position: absolute;
	top: 50%;
	right: 12px;
	font-size: 24px;
	transform: translateY(-50%);
`;

export const Label = styled.label`
	position: relative;
	padding: 12px;
	color: #333;
	font-weight: 500;
	font-size: 16px;
	line-height: 1;
	background-color: var(--input-border);
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
