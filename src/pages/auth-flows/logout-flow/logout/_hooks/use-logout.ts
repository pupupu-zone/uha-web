import { useEffect } from 'react';

import { useLogoutMutation } from '@pages/auth-flows/logout-flow';

const useLogout = () => {
	const [request, result] = useLogoutMutation();

	console.log('result;', result);

	useEffect(() => {
		request();
	}, []);
};

export default useLogout;
