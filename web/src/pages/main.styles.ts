import styled from 'styled-components';

export const Navigation = styled.div`
	display: grid;
	grid-auto-flow: row;
	grid-auto-rows: repeat(3, min-content);
	position: fixed;
	right: 0;
	top: 50%;
	transform: translateY(-50%);
	box-shadow: 0 0 10px 0 rgba(0 0 0 / 0.05);
	background-color: var(--popup-bg);
	border-top-left-radius: 10px;
	border-bottom-left-radius: 10px;
`;

export default styled.div`
	display: grid;
	grid-auto-flow: row;
	width: 100%;
	height: 100%;
`;
