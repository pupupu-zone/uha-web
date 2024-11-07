import React from 'react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { RouterProvider } from '@tanstack/react-router';

import { PersistGate } from 'redux-persist/integration/react';

import ProgressiveUnit from '@features/pwa';
import { FontStyles, ResetStyles, GeneralStyles } from '@core/styles';

import type { AppRouter } from '@src/index.tsx';

import store from './store';
const persistor = persistStore(store);

type Props = {
	router: AppRouter;
};

const InnerApp = ({ router }: Props) => {
	const isAuthorized = true;

	return <RouterProvider router={router} context={{ isAuthorized }} />;
};

const Root = ({ router }: Props) => (
	<>
		<ResetStyles />
		<FontStyles />
		<GeneralStyles />

		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<InnerApp router={router} />

				<ProgressiveUnit />
			</PersistGate>
		</Provider>
	</>
);

export default Root;
