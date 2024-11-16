import styled from 'styled-components';
import { H3 } from '@ui';
import { Button as AdobeButton } from 'react-aria-components';

export const SettingsEntry = styled(AdobeButton)`
	display: grid;
	grid-auto-rows: max-content;
	grid-auto-columns: 1fr 1fr;
	grid-auto-flow: column;
	justify-content: space-between;
	width: calc(100% + 24px);
	margin-right: -12px;
	margin-left: -12px;
	padding: 12px;
	background: none;
	border: none;
	border-radius: 8px;

	&:focus-visible,
	&:focus,
	&[data-pressed],
	&:active,
	&:hover {
		background-color: var(--card-hover);
	}
`;

export const LeftEntry = styled(H3).attrs({ $weight: 400 })`
	display: flex;
	justify-content: start;
`;

export const RightEntry = styled(H3).attrs({ $weight: 400 })`
	display: flex;
	justify-content: end;
`;
