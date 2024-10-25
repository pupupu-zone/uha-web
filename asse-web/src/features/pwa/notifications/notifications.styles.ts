import styled from 'styled-components';

export const Actions = styled.div`
	display: grid;
	grid-gap: 16px;
	grid-template-columns: repeat(2, 1fr);
	margin-top: 16px;
`;

export default styled.div`
	position: fixed;
	top: 36px;
	right: 36px;
	padding: 24px;
	background-color: #f8faff;
	border-radius: 8px;
	box-shadow: rgba(0 0 0 / 0.24) 0 3px 8px;
`;
