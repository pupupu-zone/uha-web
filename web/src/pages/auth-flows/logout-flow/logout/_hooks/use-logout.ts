import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { purgeIndexedDB, purgeSWCache } from '@utils';

import { useAppDispatch } from '@store';
import { useLazyLogoutQuery } from '@pages/auth-flows/logout-flow';
import { isAuthorizedSelector } from '@pages/auth-flows/_redux/selectors';

const purgeAll = async (): Promise<void> => {
	await Promise.all([purgeIndexedDB(), purgeSWCache()]);

	localStorage.clear();
	sessionStorage.clear();

	window.setTimeout(() => {
		window.location.reload();
	}, 200);
};

const useLogout = () => {
	const dispatch = useAppDispatch();
	const [request, result] = useLazyLogoutQuery();
	const isAuthorized = useSelector(isAuthorizedSelector);
	const [isPurgeInitiated, setPurgeInitiated] = useState(false);

	useEffect(() => {
		request();
	}, []);

	useEffect(() => {
		if (!result.isSuccess) return;

		dispatch({ type: 'RESET' });
	}, [dispatch, result.isSuccess]);

	useEffect(() => {
		if ((!isAuthorized && !result.isFetching) || isPurgeInitiated) return;

		purgeAll();
		setPurgeInitiated(true);
	}, [isPurgeInitiated, isAuthorized, result.isFetching]);
};

export default useLogout;
