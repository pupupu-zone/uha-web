import React from 'react';
import { useEffect } from 'react';

const LogoutUnit = () => {
	useEffect(() => {
		console.log('CLEAR DB, SESSIONS AND WHATEVER ELSE');
	}, []);

	return <div>Logging out...</div>;
};

export default LogoutUnit;
