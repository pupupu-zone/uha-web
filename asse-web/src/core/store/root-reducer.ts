import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
// import { createWhitelistFilter } from 'redux-persist-transform-filter';
import createIdbStorage from '@piotr-cz/redux-persist-idb-storage';

import API from '@api';
import healthCheckReducer from '@features/healthcheck/gearbox';

const persistConfig = {
	key: 'root',
	version: 1,
	storage: createIdbStorage({ name: 'subsawwy.com', storeName: 'keyval' }),
	whitelist: ['health_check'],
	blacklist: [API.reducerPath, 'health_check']
	// transforms: [createWhitelistFilter('organizations', ['activeOrganizationId'])]
};

const rootReducer = combineReducers({
	health_check: healthCheckReducer,
	[API.reducerPath]: API.reducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
