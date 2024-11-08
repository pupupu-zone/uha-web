import React, { useEffect } from 'react';

import { useLazyVerifyRecoveryQuery } from '@pages/auth-flows/reset-flow/_api';

import { H1, Button, LargeText } from '@ui';
import { LoaderImg, ErrorStateImg } from '@images';
import Root, { Loader } from './verify-reset.styles';
import { SetNewPassword } from '@pages/auth-flows/reset-flow';

import type { Props } from './verify-reset.d';

const VerifyResetToken = ({ token }: Props) => {
	const [verifyRequest, verifyResult] = useLazyVerifyRecoveryQuery();

	useEffect(() => {
		if (!token) return;

		verifyRequest({ token });
	}, [token]);

	return (
		<Root>
			<H1>Password Reset</H1>

			<Loader>
				{(verifyResult.isFetching || verifyResult.isUninitialized) && token && (
					<>
						<LoaderImg width={150} height={150} />
					</>
				)}

				{(!token || verifyResult.isError) && (
					<>
						<ErrorStateImg width={150} height={150} />

						{!token && <LargeText>No token has been found</LargeText>}
						{token && <LargeText>Invalid token</LargeText>}

						<Button to="/reset-password/init" size="medium" isFullWidth isSecondary>
							Try Again
						</Button>
					</>
				)}

				{verifyResult.isSuccess && <SetNewPassword token={verifyResult.data.data.token} />}
			</Loader>
		</Root>
	);
};

export default VerifyResetToken;
