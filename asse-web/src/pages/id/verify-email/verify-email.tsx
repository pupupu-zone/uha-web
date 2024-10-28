import React, { useEffect } from 'react';

import { useLazyVerifyEmailQuery } from '@pages/id/_api';

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

	if (result.isSuccess) {
		return <div>Success</div>;
	}

	if (result.isError) {
		return <div>error</div>;
	}

	return <div>{token ? 'Verifying...' : 'No token provided'}</div>;
};

export default VerifyEmailUnit;
