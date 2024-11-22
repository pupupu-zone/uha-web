import styled from 'styled-components';

export const Previews = styled.div`
	display: grid;
	grid-auto-flow: column;
	gap: 24px;
	padding-top: 4px;
	grid-auto-columns: min-content;
	width: 100%;
	overflow-x: auto;
	scroll-snap-type: x mandatory;
	-webkit-overflow-scrolling: touch;

	/* Hide scrollbar */
	scrollbar-width: none; /* Firefox */
	-ms-overflow-style: none;
	&::-webkit-scrollbar {
		display: none;
	}

	/* Prevent grid blowout */
	padding-bottom: 16px; /* Space for potential scrollbar */
	margin-bottom: -16px; /* Compensate for padding */

	/* Better touch scrolling */
	scroll-behavior: smooth;
	-webkit-overflow-scrolling: touch;

	/* Prevent text selection while scrolling */
	user-select: none;

	/* Add padding to allow for overscroll bounce */
	padding-left: 1px;
	padding-right: 1px;
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

export const Image = styled.div`
	display: grid;
	width: 64px;
	height: 64px;
	overflow: hidden;
	clip-path: url('#squircle');
	place-items: center;

	& > img {
		width: 100%;
	}
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
	align-items: center;
	justify-content: flex-start;
	color: var(--primary-text);
	font-size: 16px;
	font-weight: 700;
	text-transform: uppercase;
	gap: 4px;
`;

export const App = styled.div`
	display: grid;
	grid-auto-flow: column;
	grid-template-columns: 64px 1fr;
	gap: 24px;
	align-items: center;
	width: 100%;
	padding: 12px;
	background-color: var(--select-bg);
	border-top: 1px solid #e5e7eb;
	border-radius: 18px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	color: var(--primary-text);

	& h3 {
		color: #999;
	}
`;

export const FeaturedApps = styled.div`
	place-self: center;
	width: 100%;
	margin-bottom: 64px;
`;

export default styled.div`
	/* stylelint-disable declaration-block-no-redundant-longhand-properties */
	padding-top: calc(env(safe-area-inset-top) + 24px);
	padding-right: calc(env(safe-area-inset-right) + 24px);
	padding-bottom: calc(env(safe-area-inset-bottom) + ${({ $shouldFill }) => ($shouldFill ? '120px' : '48px')});
	padding-left: calc(env(safe-area-inset-left) + 24px);
`;
