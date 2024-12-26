import styled from 'styled-components';

export default styled.div<{ $shouldFill: boolean }>`
	/* stylelint-disable declaration-block-no-redundant-longhand-properties */

	padding-top: calc(env(safe-area-inset-top) + 24px);
	padding-right: calc(env(safe-area-inset-right) + 24px);
	padding-bottom: calc(env(safe-area-inset-bottom) + ${({ $shouldFill }) => ($shouldFill ? '120px' : '48px')});
	padding-left: calc(env(safe-area-inset-left) + 24px);
`;
