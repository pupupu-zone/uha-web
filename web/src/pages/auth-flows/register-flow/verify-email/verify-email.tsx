import React, { useEffect } from 'react';

import { LoaderImg, ErrorStateImg, SuccessStateImg } from '@images';
import { useLazyVerifyEmailQuery } from '@pages/auth-flows/register-flow/_api';

import { H3, SmallText } from '@ui';
import AuthFlow from '@pages/auth-flows';
import { Loader } from './verify-email.styles';

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
		<AuthFlow>
			<Loader>
				{(result.isFetching || result.isUninitialized) && token && <LoaderImg width={150} height={150} />}

				{(!token || result.isError) && (
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

				{result.isSuccess && (
					<>
						<SuccessStateImg width={150} height={150} />
						<H3>You can now login</H3>
					</>
				)}
			</Loader>
		</AuthFlow>
	);
};

export default VerifyEmailUnit;
