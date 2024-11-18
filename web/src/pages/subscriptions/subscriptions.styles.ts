import styled from 'styled-components';

export const ViewPort = styled.div<{ $shouldFill: boolean }>`
	justify-self: center;
	width: calc(100vw - 36px); /* 48px from header.styles - 12px from list-view.styles */
	padding-bottom: ${({ $shouldFill }) => ($shouldFill ? '72px' : '0')};
`;

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
