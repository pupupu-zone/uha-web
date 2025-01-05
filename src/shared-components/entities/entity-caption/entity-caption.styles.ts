import styled from 'styled-components';
import { H3 } from '@ui';

export default styled(H3)<{ $isTextDark: boolean }>`
	margin-left: -4px;
	color: ${({ $isTextDark }) => ($isTextDark ? 'var(--primary-text)' : 'var(--bg-color)')};
	font-variant: all-small-caps;
	text-align: left;
	opacity: 0.8;
`;
