import styled from 'styled-components';
import { PageForm, Actions, PageRoot as Some } from '@pages/auth-flows/common.styles';

export { PageForm, Actions };

export const PageRoot = styled(Some)`
	position: fixed;
	right: 0;
	bottom: 0;
	left: 0;
	margin: 0;
	padding: 24px 32px;
	background-color: #fff;
	border-top-left-radius: 36px;
	border-top-right-radius: 36px;
`;

export default styled.div``;
