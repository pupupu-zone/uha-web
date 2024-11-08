import React from 'react';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { persistStore } from 'redux-persist';
import { RouterProvider } from '@tanstack/react-router';

import { PersistGate } from 'redux-persist/integration/react';

import { CustomToaster } from '@ui';
import ProgressiveUnit from '@features/pwa';
import { AuthProvider, useAuth } from './auth';
import { FontStyles, ResetStyles, GeneralStyles } from '@core/styles';

import type { AppRouter } from '@src/index.tsx';

import store from './store';
const persistor = persistStore(store);

type Props = {
	router: AppRouter;
};

const InnerApp = ({ router }: Props) => {
	const auth = useAuth();

	return <RouterProvider router={router} context={{ auth }} />;
};

const Root = ({ router }: Props) => (
	<>
		<ResetStyles />
		<FontStyles />
		<GeneralStyles />

		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<Toaster
					containerStyle={{
						top: 64
					}}
					position="top-center"
					toastOptions={{
						duration: 4000
					}}
				>
					{/* @ts-ignore */}
					{(toast) => <CustomToaster {...toast} />}
				</Toaster>

				<AuthProvider>
					<InnerApp router={router} />
				</AuthProvider>

				<ProgressiveUnit />
			</PersistGate>
		</Provider>
	</>
);

export default Root;
