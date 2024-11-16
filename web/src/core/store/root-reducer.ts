import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
// import { createWhitelistFilter } from 'redux-persist-transform-filter';
import createIdbStorage from '@piotr-cz/redux-persist-idb-storage';

import API from '@api';
import authReducer from '@pages/auth-flows/_redux';
import userReducer from '@data/user';
import settingsReducer from '@data/settings';

const persistConfig = {
	key: 'root',
	version: 1,
	storage: createIdbStorage({ name: 'subsawwy.com', storeName: 'keyval' }),
	whitelist: ['auth', 'user', 'settings'],
	blacklist: [API.reducerPath]
	// transforms: [createWhitelistFilter('organizations', ['activeOrganizationId'])]
};

const rootReducer = combineReducers({
	[API.reducerPath]: API.reducer,
	auth: authReducer,
	user: userReducer,
	settings: settingsReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
