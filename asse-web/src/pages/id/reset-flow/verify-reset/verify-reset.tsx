import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from '@tanstack/react-router';
import { useLazyVerifyRecoveryQuery } from '@pages/id/reset-flow/_api';

const Route = styled.div`
	display: flex;
	padding: 10px 20px;

	border: 1px solid black;
	border-radius: 5px;
`;

type Props = {
	token: string;
};

const VerifyResetToken = ({ token }: Props) => {
	const [request, result] = useLazyVerifyRecoveryQuery();

	useEffect(() => {
		if (!token) return;

		request({ token });
	}, [token]);

	useEffect(() => {
		if (!result.isSuccess || !result.data) return;

		console.log('[ID]: Verify Recovery Token:', result.data);
	}, [result.isSuccess, result.data]);

	if (result.isSuccess) {
		return (
			<div>
				Success <br />
				<Route
					as={Link}
					to="/reset-password/set"
					search={{
						token: result?.data?.data?.token ?? ''
					}}
				>
					Set New Password
				</Route>
			</div>
		);
	}

	if (result.isError) {
		return <div>error</div>;
	}

	return <div>{token ? 'Verifying...' : 'No token provided'}</div>;
};

export default VerifyResetToken;
