import styled from 'styled-components';

export default styled.textarea`
	width: 100%;
	margin: 0;
	padding: 12px 16px 12px 0;
	color: #000;
	font-size: 16px;
	font-family: 'Nunito Sans', sans-serif;
	line-height: 22px;
	background-color: transparent;
	border: none;
	border-radius: 8px;

	&:focus-visible {
		box-shadow: none;
	}
`;
