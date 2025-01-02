import styled, { css } from 'styled-components';
import { Input as AriaInput } from 'react-aria-components';

const h1Styles = css`
	padding: 0;
	font-weight: 700;
	font-size: 24px;
	font-family: 'Nunito Sans', sans-serif;
	line-height: 32px;
	text-align: left;
`;

export const Tag = styled.h1<{ $isTextDark: boolean }>`
	${h1Styles}
	color: ${({ $isTextDark }) => ($isTextDark ? 'var(--primary-text)' : 'var(--bg-color)')};
`;

export const Input = styled(AriaInput)<{ $isTextDark: boolean }>`
	${h1Styles}
	width: 100%;
	color: ${({ $isTextDark }) => ($isTextDark ? 'var(--primary-text)' : 'var(--bg-color)')};
	background-color: transparent;
	border: none;

	&:focus {
		box-shadow: none;
	}
`;

export const Tags = styled.div`
	white-space: nowrap;
`;

export default styled.div`
	display: grid;
	grid-auto-flow: row;
	gap: 18px;
`;
