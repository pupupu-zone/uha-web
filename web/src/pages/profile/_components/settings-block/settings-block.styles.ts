import styled from 'styled-components';
import { H3 } from '@ui';

export const Main = styled.div`
	overflow: hidden;
	background-color: var(--settings-bg);
	border-radius: 12px;
`;

export const Header = styled(H3)`
	margin-bottom: 6px;
	margin-left: 12px;
	font-variant: all-small-caps;
	opacity: 0.8; /* @TODO: Rewrite to actual color */
`;

export default styled.div`
	display: grid;
	grid-auto-flow: row;
	grid-template-columns: 1fr;
`;
