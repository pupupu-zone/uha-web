import styled from 'styled-components';

export const FieldCaption = styled.h3<{ $isTextDark: boolean }>`
	margin-bottom: 6px;
	font-variant: all-small-caps;
	opacity: 0.8;
	margin-left: -4px;
	font-weight: 700;
	font-size: 18px;
	font-family: 'Nunito Sans', sans-serif;
	line-height: 22px;
	text-align: left;
	color: ${({ $isTextDark }) => ($isTextDark ? 'var(--primary-text)' : 'var(--bg-color)')};
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
