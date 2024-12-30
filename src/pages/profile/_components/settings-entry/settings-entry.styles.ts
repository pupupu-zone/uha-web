import styled from 'styled-components';
import { Button as AriaButton } from 'react-aria-components';

export const LeftEntry = styled.div`
	display: flex;
	align-items: center;
	justify-content: start;
`;

export const RightEntry = styled.div`
	display: flex;
	gap: 4px;
	align-items: center;
	justify-content: end;
	opacity: 0.6; /* @TODO: Rewrite to actual color */

	& > h3 {
		max-width: 75%;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
`;

export default styled(AriaButton)`
	display: grid;
	grid-auto-rows: max-content;
	grid-auto-columns: 1fr 1fr;
	grid-auto-flow: column;
	justify-content: space-between;
	width: 100%;
	padding: 16px;
	color: var(--primary-text);
	background: none;
	border: none;
	cursor: pointer;
	transition: background-color 150ms ease-in-out;

	&[data-disabled] {
		cursor: not-allowed;
		opacity: 0.6;
		pointer-events: none;
	}

	&:focus-visible,
	&:focus,
	&[data-pressed],
	&:hover {
		background-color: var(--settings-hover);
		box-shadow: none;
	}
`;
