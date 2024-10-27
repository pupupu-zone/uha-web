import React from 'react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { Outlet } from '@tanstack/react-router';
import { PersistGate } from 'redux-persist/integration/react';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

import ProgressiveUnit from '@features/pwa';
import { FontStyles, ResetStyles, GeneralStyles } from '@core/styles';

import store from './store';
const persistor = persistStore(store);

const Root = () => (
	<>
		<ResetStyles />
		<FontStyles />
		<GeneralStyles />

		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<Outlet />

				<ProgressiveUnit />

				{import.meta.env.DEV && <TanStackRouterDevtools />}
			</PersistGate>
		</Provider>
	</>
);

export default Root;
