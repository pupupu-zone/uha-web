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
