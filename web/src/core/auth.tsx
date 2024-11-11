import React from 'react';
import { useSelector } from 'react-redux';

import { isAuthorizedSelector } from '@pages/auth-flows/_redux/selectors';

export interface AuthContext {
	isAuthenticated: boolean;
}

const AuthContext = React.createContext<AuthContext | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const isAuthorized = useSelector(isAuthorizedSelector);

	return (
		<AuthContext.Provider
			value={{
				isAuthenticated: isAuthorized
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	const context = React.useContext(AuthContext);

	if (!context) {
		throw new Error('useAuth must be used within an AuthProvider');
	}

	return context;
};
