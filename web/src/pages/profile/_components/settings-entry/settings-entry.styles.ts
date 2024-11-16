import styled from 'styled-components';
import { Button as AdobeButton } from 'react-aria-components';

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
	opacity: 0.6;

	& > h3 {
		max-width: 75%;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
`;

export default styled(AdobeButton)`
	display: grid;
	grid-auto-rows: max-content;
	grid-auto-columns: 1fr 1fr;
	grid-auto-flow: column;
	justify-content: space-between;
	width: calc(100% + 24px);
	margin-right: -12px;
	margin-left: -12px;
	padding: 12px;
	color: var(--primary-text);
	background: none;
	border: none;

	&:focus-visible,
	&:focus,
	&[data-pressed],
	&:active,
	&:hover {
		background-color: var(--card-hover);
		box-shadow: none;
	}
`;
