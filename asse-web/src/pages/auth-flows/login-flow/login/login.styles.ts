import styled from 'styled-components';
import { Link } from '@tanstack/react-router';

import { H1 } from '@ui';
import { PageForm, Actions, PageRoot as Some } from '@pages/auth-flows/common.styles';

export { PageForm, Actions };

export const HighTag = styled(H1)`
	color: #a6749c;
	font-weight: 900;
	line-height: 1;
`;

export const LowTag = styled(H1)`
	color: #efa7a7;
	font-weight: 900;
	font-size: 98px;
	line-height: 1;
`;

export const TagLine = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	place-content: center;
	padding: 20px;
`;

export const LinkBtn = styled(Link)`
	color: var(--primary-text);
	font-weight: 500;
	text-decoration: underline;
`;

export const Header = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const PageRoot = styled(Some)`
	margin: 0;
	padding: 24px 32px;
	background-color: var(--popup-bg);
	border-top-left-radius: 36px;
	border-top-right-radius: 36px;
	box-shadow: 0 0 10px 0 rgba(0 0 0 / 0.05);
`;

export default styled.div`
	display: grid;
	grid-auto-rows: 1fr min-content;
	grid-auto-columns: 1fr;
	grid-auto-flow: row;
`;
