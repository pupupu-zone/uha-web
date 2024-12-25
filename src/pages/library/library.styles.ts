import styled from 'styled-components';

export const Previews = styled.div`
	/* stylelint-disable order/properties-order */
	/* stylelint-disable declaration-block-no-redundant-longhand-properties */

	display: grid;
	grid-auto-columns: min-content;
	grid-auto-flow: column;
	gap: 24px;
	width: 100%;
	padding-top: 4px;
	overflow-x: auto;
	scroll-snap-type: x mandatory;

	/* Prevent grid blowout */
	margin-bottom: -16px; /* Compensate for padding */
	padding-bottom: 16px; /* Space for potential scrollbar */

	/* Hide scrollbar */
	scrollbar-width: none; /* Firefox */
	-ms-overflow-style: none;

	&::-webkit-scrollbar {
		display: none;
	}

	/* Better touch scrolling */
	scroll-behavior: smooth;
	-webkit-overflow-scrolling: touch;

	/* Prevent text selection while scrolling */
	user-select: none;

	/* Add padding to allow for overscroll bounce */
	padding-right: 1px;
	padding-left: 1px;
	margin-left: -1px;
	margin-right: -1px;
`;

// Also modify Category component or its container to support snap
export const CategoryContainer = styled.div`
	scroll-snap-align: start; /* for snappy scrolling */
	width: 100%;
	min-width: 200px; /* Match the minmax first value */
`;

export const Head = styled.h3`
	display: inline-flex;
	align-items: center;
	justify-content: flex-start;
	color: var(--primary-text);
	font-weight: 600;
	font-size: 18px;
	margin-bottom: 6px;
	margin-left: 12px;
	font-variant: all-small-caps;
`;

export const Section = styled.div`
	display: grid;
	grid-auto-flow: row;
	grid-template-rows: min-content min-content;
	grid-template-columns: 1fr;
	gap: 16px;
	width: calc(100vw - 48px);
	place-self: center;

	& + & {
		margin-top: 48px;
	}
`;

export const Title = styled.h1`
	display: inline-flex;
	gap: 4px;
	align-items: center;
	justify-content: flex-start;
	color: var(--primary-text);
	font-weight: 700;
	font-size: 16px;
	text-transform: uppercase;
`;

export const FeaturedApps = styled.div`
	place-self: center;
	width: 100%;
	margin-bottom: 48px;
`;

export default styled.div<{ $shouldFill: boolean }>`
	padding-top: calc(env(safe-area-inset-top) + 24px);
	padding-right: calc(env(safe-area-inset-right) + 24px);
	padding-bottom: calc(env(safe-area-inset-bottom) + ${({ $shouldFill }) => ($shouldFill ? '120px' : '48px')});
	padding-left: calc(env(safe-area-inset-left) + 24px);
`;
