import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import ROUTES from '@routes';
import { FontStyles, ResetStyles, GeneralStyles } from '@core/styles';

const MainPage = React.lazy(() => import('@pages/main'));

const Root = () => (
	<>
		<ResetStyles />
		<FontStyles />
		<GeneralStyles />

		<BrowserRouter>
			<React.Suspense fallback={<>...</>}>
				<Routes>
					<Route path={ROUTES.ROOT} element={<MainPage />} />

					<Route path="*" element={<Navigate to={ROUTES.ROOT} replace />} />
				</Routes>
			</React.Suspense>
		</BrowserRouter>
	</>
);

export default Root;
