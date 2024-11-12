import styled, { css } from 'styled-components';
import { H1, H2, Text } from '@ui';

const gap = 12;

export const CalendarBody = styled.div`
	display: grid;
	grid-auto-rows: max-content;
	grid-auto-columns: max-content;
	grid-auto-flow: row;
	gap: ${gap}px;
	justify-content: center;

	& + & {
		margin-top: 36px;
	}
`;

export const WeekDay = styled(Text)`
	width: calc((100vw - 48px - (${gap}px * 7)) / 7);
	min-width: calc((100vw - 48px - (${gap}px * 7)) / 7);
	opacity: 0.6;
	justify-content: center;
	align-items: center;
	display: grid;
`;

export const Calendar = styled.div`
	display: grid;
	grid-auto-rows: max-content;
	grid-auto-columns: max-content;
	grid-auto-flow: row;
	gap: ${gap}px;
	justify-content: center;
`;

export const Day = styled(H2)<{ $isActiveDay: boolean }>`
	display: flex;
	align-items: center;
	justify-content: center;
	width: calc((100vw - 48px - (${gap}px * 7)) / 7);
	min-width: calc((100vw - 48px - (${gap}px * 7)) / 7);
	height: calc((100vw - 48px - (${gap}px * 7)) / 7);
	min-height: calc((100vw - 48px - (${gap}px * 7)) / 7);
	color: var(--primary-text);
	border-radius: 8px;

	${({ $isActiveDay }) =>
		$isActiveDay &&
		css`
			color: var(--primary-button-text);
			background-color: oklch(var(--primary-button) / 1);
		`}

	&:hover {
		color: var(--primary-button-text);
		background-color: oklch(var(--primary-button-hover) / 1);
	}
`;

export const Week = styled.div`
	display: grid;
	grid-auto-columns: max-content;
	grid-auto-flow: column;
	gap: ${gap}px;
	justify-content: flex-start;
`;

export const WeekDays = styled(Week)`
	justify-content: space-between;
`;

export const NavLink = styled(H1)`
	color: var(--primary-text);
`;

export const Titles = styled.div`
	display: grid;
	grid-auto-columns: max-content;
	grid-auto-flow: column;
	gap: 24px;
	justify-content: flex-start;
	padding: 12px;
`;

export default styled.div`
	color: #333;
`;
