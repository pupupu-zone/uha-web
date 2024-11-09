import styled from 'styled-components';

export const Content = styled.main`
	padding: 30px 20px;
`;

export default styled.div`
	display: grid;
	grid-auto-flow: row;
	grid-template-rows: auto 1fr;
	justify-content: center;
`;
