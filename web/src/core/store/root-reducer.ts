import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
// import { createWhitelistFilter } from 'redux-persist-transform-filter';
import createIdbStorage from '@piotr-cz/redux-persist-idb-storage';

import API from '@api';
import authReducer from '@pages/auth-flows/_redux';
import userReducer from '@data/user';
import settingsReducer from '@data/settings';
import categoriesReducer from '@data/categories';
import applicationsReducer from '@data/applications';
import paymentsReducer from '@data/payments';

const persistConfig = {
	key: 'root',
	version: 1,
	storage: createIdbStorage({ name: 'subsawwy.com', storeName: 'keyval' }),
	whitelist: ['auth', 'user', 'settings', 'categories', 'applications', 'payments'],
	blacklist: [API.reducerPath]
	// transforms: [createWhitelistFilter('organizations', ['activeOrganizationId'])]
};

const combinedReducer = combineReducers({
	[API.reducerPath]: API.reducer,
	auth: authReducer,
	user: userReducer,
	settings: settingsReducer,
	categories: categoriesReducer,
	applications: applicationsReducer,
	payments: paymentsReducer
});

const rootReducer = (state, action) => {
	if (action.type === 'RESET') {
		state = {};
	}

	return combinedReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
