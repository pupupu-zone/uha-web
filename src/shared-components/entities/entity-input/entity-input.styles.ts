import styled from 'styled-components';
import { Input as AriaInput } from 'react-aria-components';

export default styled(AriaInput)<{ $isTextDark: boolean; $align: string }>`
	width: 100%;
	padding: 0;
	color: ${({ $isTextDark }) => ($isTextDark ? 'var(--primary-text)' : 'var(--bg-color)')};
	font-weight: 700;
	font-size: 24px;
	font-family: 'Nunito Sans', sans-serif;
	line-height: 32px;
	text-align: ${({ $align }) => $align};
	background-color: transparent;
	border: none;

	&:focus-visible {
		box-shadow: none;
	}
`;
