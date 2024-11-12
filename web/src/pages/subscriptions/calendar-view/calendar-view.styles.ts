import styled from 'styled-components';
import { H1 } from '@ui';

export const NavLink = styled(H1)`
	color: var(--primary-text);
`;

export const Titles = styled.div`
	display: grid;
	grid-auto-flow: column;
	gap: 24px;
	grid-auto-columns: max-content;
	justify-content: flex-start;
	overflow-y: hidden;
	overflow-x: scroll;
	padding: 12px;
`;

export default styled.div`
	color: #333;
`;
