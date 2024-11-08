import styled from 'styled-components';
import { Link } from '@tanstack/react-router';

import { PageForm, Actions, PageRoot as Some } from '@pages/auth-flows/common.styles';

export { PageForm, Actions };

export const PseudoLogo = styled.div`
	padding: 20px;
	display: flex;
	flex-direction: column;
	align-content: center;
	align-items: center;
	justify-content: center;
`;

export const LinkBtn = styled(Link)`
	font-weight: 500;
	color: var(--primary-text);
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
	background-color: #fff;
	border-top-left-radius: 36px;
	border-top-right-radius: 36px;
`;

export default styled.div`
	display: grid;
	grid-auto-rows: 1fr min-content;
	grid-auto-columns: 1fr;
	grid-auto-flow: row;
`;
