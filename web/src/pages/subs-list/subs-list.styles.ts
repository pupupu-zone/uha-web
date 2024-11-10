import styled from 'styled-components';

export const Stubs = styled.div`
	display: grid;
	grid-auto-flow: row;
	gap: 12px;
	padding-top: 24px;
	padding-right: calc(env(safe-area-inset-right) + 24px);
	padding-left: calc(env(safe-area-inset-left) + 24px);
	padding-bottom: calc(env(safe-area-inset-bottom) + 36px);
`;

export const StubBlock = styled.div`
	width: 100%;
	height: 80px;
	background-color: var(--popup-bg);
	border-radius: 18px;
`;

export default styled.div`
	display: grid;
	grid-auto-flow: row;
	grid-template-rows: auto 1fr;
	justify-content: center;
`;
