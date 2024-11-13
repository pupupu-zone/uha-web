import styled from 'styled-components';
import { H1 } from '@ui';

export const DaySubscriptions = styled.div`
	display: grid;
	grid-auto-flow: row;
	gap: 12px;
	margin-top: 12px;
	grid-auto-rows: min-content;
	grid-auto-columns: 1fr;
`;

export const SubsOfTheDay = styled.div`
	margin-top: 48px;
	margin-bottom: calc(env(safe-area-inset-bottom) + 36px);
`;

export const CalendarWrapper = styled.div``;

export const NavLink = styled(H1)`
	color: var(--primary-text);
`;

export const Titles = styled.div`
	display: grid;
	grid-auto-columns: max-content;
	grid-auto-flow: column;
	gap: 24px;
	justify-content: flex-start;
	padding: 12px 0;
`;

export default styled.div`
	padding: 0 12px;
	color: #333;
`;
