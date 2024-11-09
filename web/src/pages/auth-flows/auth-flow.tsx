import React from 'react';

import { Link } from '@tanstack/react-router';
import Root, { PageRoot, TagLine, HighTag, LowTag, Header, PageName } from './auth-flow.styles';

const AuthFlow = ({ children }: React.PropsWithChildren<unknown>) => (
	<Root>
		<TagLine>
			<HighTag>TRACK YOUR SUBSCRIPTIONS</HighTag>
			<LowTag>DOWN!</LowTag>
		</TagLine>

		<PageRoot>
			<Header>
				<div>
					<PageName as={Link} to="/login">
						Login
					</PageName>
				</div>

				<div>
					<PageName as={Link} to="/register">
						Register
					</PageName>
				</div>

				<div>
					<PageName as={Link} to="/reset-password">
						Restore
					</PageName>
				</div>
			</Header>

			{children}
		</PageRoot>
	</Root>
);

export default AuthFlow;
