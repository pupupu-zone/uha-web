import React, { useEffect } from 'react';

import { useLazyVerifyRecoveryQuery } from '@pages/auth-flows/reset-flow/_api';

import { H3, SmallText } from '@ui';
import { Loader } from './verify-reset.styles';
import { LoaderImg, ErrorStateImg } from '@images';
import { SetNewPassword } from '@pages/auth-flows/reset-flow';

import type { Props } from './verify-reset.d';

const VerifyResetToken = ({ token }: Props) => {
	const [verifyRequest, verifyResult] = useLazyVerifyRecoveryQuery();

	useEffect(() => {
		if (!token) return;

		verifyRequest({ token });
	}, [token]);

	return (
		<Loader>
			{(verifyResult.isFetching || verifyResult.isUninitialized) && token && (
				<>
					<LoaderImg width={150} height={150} />
				</>
			)}

			{(!token || verifyResult.isError) && (
				<>
					<ErrorStateImg width={150} height={150} />

					{!token && (
						<>
							<H3>No token has been found</H3>
							<SmallText>Please make sure you have correct link</SmallText>
						</>
					)}

					{token && (
						<>
							<H3>Invalid token</H3>
							<SmallText>Please make sure you have correct link</SmallText>
						</>
					)}
				</>
			)}

			{verifyResult.isSuccess && <SetNewPassword token={verifyResult.data.data.token} />}
		</Loader>
	);
};

export default VerifyResetToken;
