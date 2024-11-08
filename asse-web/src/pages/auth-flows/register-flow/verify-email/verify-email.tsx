import React, { useEffect } from 'react';

import { LoaderImg, ErrorStateImg, SuccessStateImg } from '@images';
import { useLazyVerifyEmailQuery } from '@pages/auth-flows/register-flow/_api';

import { H1, Button, LargeText } from '@ui';
import Root, { Loader } from './verify-email.styles';

type Props = {
	token: string;
};

const VerifyEmailUnit = ({ token }: Props) => {
	const [request, result] = useLazyVerifyEmailQuery();

	useEffect(() => {
		if (!token) return;

		request({ token });
	}, [token]);

	return (
		<Root>
			<H1>E-Mail Verification</H1>

			<Loader>
				{(result.isFetching || result.isUninitialized) && token && (
					<>
						<LoaderImg width={150} height={150} />
					</>
				)}

				{(!token || result.isError) && (
					<>
						<ErrorStateImg width={150} height={150} />

						{!token && <LargeText>No token has been found</LargeText>}
						{token && <LargeText>Invalid token</LargeText>}

						<Button to="/register" size="medium" isFullWidth isSecondary>
							Try to Sign Up
						</Button>
					</>
				)}

				{result.isSuccess && (
					<>
						<SuccessStateImg width={150} height={150} />

						<Button to="/login" size="medium" isFullWidth isSecondary>
							Sign In
						</Button>
					</>
				)}
			</Loader>
		</Root>
	);
};

export default VerifyEmailUnit;
