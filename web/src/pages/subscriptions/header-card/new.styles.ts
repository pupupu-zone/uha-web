import styled from 'styled-components';
import { Button as AriaButton } from 'react-aria-components';

export const Interval = styled(AriaButton)`
	padding: 12px;
	color: #999;
	font-size: 18px;
	font-family: 'Nunito Sans', sans-serif;
	line-height: 25px;
	background-color: transparent;
	border: none;

	&:focus-visible {
		box-shadow: none;
	}
`;

export const Price = styled(AriaButton)`
	padding: 12px;
	color: #eee;
	font-weight: 700;
	font-size: 36px;
	background-color: transparent;
	border: none;

	&:focus-visible {
		box-shadow: none;
	}
`;

export default styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 180px;
	margin-bottom: 36px;
	background-color: var(--primary-text);
`;
