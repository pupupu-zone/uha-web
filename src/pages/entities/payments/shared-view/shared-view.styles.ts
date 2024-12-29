import styled from 'styled-components';

export const CommentInput = styled.input<{ $isTextDark: boolean }>`
	padding: 16px 20px;
	color: ${({ $isTextDark }) => ($isTextDark ? 'var(--primary-text)' : 'var(--bg-color)')};
	font-size: 20px;
	background-color: transparent;
	border: none;
	border-left: 1px solid ${({ $isTextDark }) => ($isTextDark ? 'var(--primary-text)' : 'var(--bg-color)')};
	border-radius: 0;

	&:focus-visible {
		box-shadow: none;
	}
`;

export const NameInput = styled.input<{ $isTextDark: boolean }>`
	color: ${({ $isTextDark }) => ($isTextDark ? 'var(--primary-text)' : 'var(--bg-color)')};
	font-weight: 700;
	font-size: 24px;
	font-family: 'Nunito Sans', sans-serif;
	line-height: 32px;
	text-align: center;
	background-color: transparent;
	border: none;
	border-radius: 12px;

	&:focus-visible {
		box-shadow: none;
	}
`;

export const EmojiPreview = styled.div<{ $color: string }>`
	display: flex;
	align-items: center;
	justify-content: center;
	justify-self: center;
	width: 128px;
	min-width: 128px;
	height: 128px;
	min-height: 128px;
	margin-top: 36px;
	overflow: hidden;
	font-size: 64px;
	background-color: ${({ $color }) => `color-mix(in srgb, ${$color}, var(--bg-color) 50%)`};
	clip-path: url('#squircle');
	aspect-ratio: 1;
`;

export const ColorPreview = styled.div<{ $color: string }>`
	position: fixed;
	inset: 0;
	background-color: ${(props) => props.$color};
`;

export const Main = styled.main`
	display: grid;
	grid-auto-flow: row;
	gap: 36px;
`;

export default styled.form`
	position: relative;
	z-index: 1;
	display: grid;
	grid-auto-rows: min-content min-content min-content 1fr;
	grid-auto-columns: 1fr;
	grid-auto-flow: row;
	gap: 24px;
	align-items: end;
	min-height: 100%;
`;
