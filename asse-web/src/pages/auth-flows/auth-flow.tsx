import React from 'react';

import { H1 } from '@ui';
import Root, { PageRoot, TagLine, HighTag, LowTag, Header, LinkBtn } from './auth-flow.styles';

const AuthFlow = ({ header, link, linkTo, children }) => {
	return (
		<Root>
			<TagLine>
				<HighTag>TRACK YOUR SUBSCRIPTIONS</HighTag>
				<LowTag>DOWN!</LowTag>
			</TagLine>

			<PageRoot>
				<Header>
					<H1>{header}</H1>

					{linkTo && link && <LinkBtn to={linkTo}>{link}</LinkBtn>}
				</Header>

				{children}
			</PageRoot>
		</Root>
	);
};

export default AuthFlow;
