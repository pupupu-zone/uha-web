import styled from 'styled-components';
import { H1 } from '@ui';

export const LinkTo = styled(H1)`
	color: var(--primary-text);
	opacity: 0.5;

	&.active {
		opacity: 1;
	}
`;

export const ViewPicker = styled.div`
	display: grid;
	grid-auto-columns: min-content min-content;
	grid-auto-flow: column;
	gap: 4vw;
	justify-self: center;
	width: calc(100vw - 24px);
	padding: 24px 12px;
`;

export const ViewPort = styled.div``;

export default styled.div`
	display: grid;
	grid-auto-columns: 1fr;
	grid-auto-flow: row;
	grid-template-rows: auto min-content 1fr;
	justify-content: center;

	/* stylelint-disable declaration-block-no-redundant-longhand-properties */
	padding-top: env(safe-area-inset-top);
	padding-right: env(safe-area-inset-right);
	padding-bottom: env(safe-area-inset-bottom);
	padding-left: env(safe-area-inset-left);
`;
