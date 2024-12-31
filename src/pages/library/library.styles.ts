import styled from 'styled-components';

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
