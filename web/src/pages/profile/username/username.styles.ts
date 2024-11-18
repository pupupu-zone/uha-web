import styled from 'styled-components';

export const NameInput = styled.input`
	font-weight: 700;
	font-size: 24px;
	font-family: 'Nunito Sans', sans-serif;
	line-height: 32px;
	text-align: center;
	background-color: transparent;
	border: none;
	border-radius: 12px;

	&:focus-visible {
		box-shadow: none;
	}
`;

export default styled.div`
	justify-self: center;
`;
