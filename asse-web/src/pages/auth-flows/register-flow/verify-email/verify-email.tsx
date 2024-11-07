import React, { useEffect } from 'react';

import { LoaderImg, ErrorStateImg, SuccessStateImg } from '@images';
import { useLazyVerifyEmailQuery } from '@pages/auth-flows/register-flow/_api';

import { H1, Button } from '@ui';
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

	useEffect(() => {
		if (!result.isSuccess || !result.data) return;

		console.log('[ID]: Verify E-Mail:', result.data, result.originalArgs?.token);
	}, [result.isSuccess, result.data]);

	return (
		<Root>
			<H1>E-Mail Verification</H1>

			<Loader>
				{(result.isFetching || result.isUninitialized) && (
					<>
						<LoaderImg width={150} height={150} />
					</>
				)}

				{result.isError && (
					<>
						<ErrorStateImg width={150} height={150} />

						<Button to="/register" size="medium" isFullWidth isSecondary>
							Sign Up
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
