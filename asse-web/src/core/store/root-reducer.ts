import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
// import { createWhitelistFilter } from 'redux-persist-transform-filter';
import createIdbStorage from '@piotr-cz/redux-persist-idb-storage';

import API from '@api';

const persistConfig = {
	key: 'root',
	version: 1,
	storage: createIdbStorage({ name: 'subsawwy.com', storeName: 'keyval' }),
	whitelist: [],
	blacklist: [API.reducerPath]
	// transforms: [createWhitelistFilter('organizations', ['activeOrganizationId'])]
};

const rootReducer = combineReducers({
	[API.reducerPath]: API.reducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
