import React from 'react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import store from './store';
import ROUTES from '@routes';
import ProgressiveUnit from '@features/pwa';

const MainPage = React.lazy(() => import('@pages/main'));
import { FontStyles, ResetStyles, GeneralStyles } from '@core/styles';

const persistor = persistStore(store);

const Root = () => (
	<>
		<ResetStyles />
		<FontStyles />
		<GeneralStyles />

		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<BrowserRouter>
					<React.Suspense fallback={<>...</>}>
						<Routes>
							<Route path={ROUTES.ROOT} element={<MainPage />} />

							<Route path="*" element={<Navigate to={ROUTES.ROOT} replace />} />
						</Routes>

						<ProgressiveUnit />
					</React.Suspense>
				</BrowserRouter>
			</PersistGate>
		</Provider>
	</>
);

export default Root;
