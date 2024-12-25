import styled, { createGlobalStyle } from 'styled-components';

export const StopScroll = createGlobalStyle`
	html {
		overflow: hidden;
	}
`;

export const Background = styled.div`
	position: fixed;
	z-index: 999;
	inset: 0;
	background-color: rgba(0 0 0 / 0.5);
`;

export const NewItem = styled.div`
	background-color: var(--popup-bg);
	border-radius: 8px;
	box-shadow: 0 0 10px 0 rgba(0 0 0 / 0.05);
`;

export const Items = styled.div``;

export default styled.div`
	position: fixed;
	right: calc(env(safe-area-inset-right) + 12px);
	bottom: calc(env(safe-area-inset-bottom) + 12px);
	left: calc(env(safe-area-inset-left) + 12px);
	z-index: 1000;
`;
