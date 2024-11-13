import styled, { css } from 'styled-components';
import { Text, H1, H2 } from '@ui';

const activeDay = css`
	color: var(--primary-button-text);
	background-color: oklch(var(--primary-button) / 1);
`;

const disabled = css`
	cursor: default;
	pointer-events: none;
`;

export const Title = styled(H1)``;

export const Day = styled(H2)<{ $isActiveDay: boolean; $isDisabled: boolean }>`
	display: flex;
	align-items: center;
	justify-content: center;
	width: var(--calendar-width);
	min-width: var(--calendar-width);
	height: var(--calendar-width);
	min-height: var(--calendar-width);
	color: var(--primary-text);
	border-radius: 8px;

	${({ $isActiveDay }) => $isActiveDay && activeDay}
	${({ $isDisabled }) => $isDisabled && disabled}
`;

export const Week = styled.div`
	display: grid;
	grid-auto-columns: max-content;
	grid-auto-flow: column;
	gap: 12px;
	justify-content: flex-start;
`;

export const Weeks = styled.div`
	display: grid;
	grid-auto-rows: max-content;
	grid-auto-columns: max-content;
	grid-auto-flow: row;
	gap: 12px;
	justify-content: center;
`;

export const WeekDay = styled(Text)`
	display: grid;
	align-items: center;
	justify-content: center;
	width: var(--calendar-width);
	min-width: var(--calendar-width);
	opacity: 0.6;
`;

export const WeekDays = styled.div`
	display: grid;
	grid-auto-columns: max-content;
	grid-auto-flow: column;
	gap: 12px;
	justify-content: space-between;
`;

export default styled.div`
	display: grid;
	grid-auto-rows: max-content;
	grid-auto-columns: 1fr;
	grid-auto-flow: row;
	gap: 12px;
	justify-content: center;
`;