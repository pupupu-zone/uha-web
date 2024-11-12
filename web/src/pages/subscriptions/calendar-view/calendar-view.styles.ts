import styled, { css } from 'styled-components';
import { H1, H2 } from '@ui';

const gap = 12;

export const Calendar = styled.div`
	display: grid;
	grid-auto-flow: row;
	gap: ${gap}px;
	grid-auto-rows: max-content;
	justify-content: flex-start;
	grid-auto-columns: max-content;
	margin-top: 36px;
`;

export const Day = styled(H2)<{ $isActiveDay: boolean }>`
	min-width: calc((100vw - 48px - (${gap}px * 5)) / 7);
	min-height: calc((100vw - 48px - (${gap}px * 5)) / 7);
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 8px;
	width: calc((100vw - 48px - (${gap}px * 5)) / 7);
	height: calc((100vw - 48px - (${gap}px * 5)) / 7);
	color: var(--primary-text);

	${({ $isActiveDay }) =>
		$isActiveDay &&
		css`
			color: var(--primary-button-text);
			background-color: oklch(var(--primary-button) / 1);
		`}
`;

export const Week = styled.div`
	display: grid;
	grid-auto-flow: column;
	gap: ${gap}px;
	grid-auto-columns: max-content;
	justify-content: flex-start;
`;

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
