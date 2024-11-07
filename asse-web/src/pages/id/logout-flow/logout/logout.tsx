import React from 'react';
import { useEffect } from 'react';

import useLogout from './use-logout';

const LogoutUnit = () => {
	useLogout();

	useEffect(() => {
		console.log('CLEAR DB, SESSIONS AND WHATEVER ELSE');
	}, []);

	return <div>Logging out...</div>;
};

export default LogoutUnit;
