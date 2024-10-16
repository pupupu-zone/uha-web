import { combineReducers, configureStore, ConfigureStoreOptions } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import api from '@api';

import healthCheckReducer from '@features/healthcheck/gearbox';

export const createStore = (options?: ConfigureStoreOptions['preloadedState'] | undefined) => {
	const rootReducer = combineReducers({
		health_check: healthCheckReducer,
		[api.reducerPath]: api.reducer
	});

	const configure = configureStore({
		reducer: rootReducer,
		middleware: (getDefaultMiddleware) => {
			const defaultMiddlewares = getDefaultMiddleware();

			return [...defaultMiddlewares, api.middleware];
		},
		...options
	});

	if (process.env.NODE_ENV !== 'production' && import.meta.hot) {
		import.meta.hot.accept('./reducers', () => store.replaceReducer(rootReducer));
	}

	return configure;
};

const store = createStore();

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
