import styled from 'styled-components';

export const Section = styled.div`
	display: grid;
	grid-auto-flow: row;
	grid-template-rows: min-content min-content;
	grid-template-columns: 1fr;
	width: calc(100vw - 48px);
	margin-top: 36px;
	place-self: center;
`;

export const Title = styled.h1`
	display: inline-flex;
	align-items: center;
	justify-content: flex-start;
	color: var(--primary-text);
	font-weight: 600;
	font-size: 24px;
`;

export const App = styled.div`
	display: grid;
	width: 100%;
	padding: 18px;
	background-color: var(--primary-text);
	border-radius: 18px;
`;

export const FeaturedApps = styled.div`
	place-self: center;
	width: calc(100vw - 48px);
	margin-top: 18px;
	margin-bottom: 36px;
`;

export default styled.div`
	/* stylelint-disable declaration-block-no-redundant-longhand-properties */
	padding-top: env(safe-area-inset-top);
	padding-right: env(safe-area-inset-right);
	padding-bottom: env(safe-area-inset-bottom);
	padding-left: env(safe-area-inset-left);
`;
