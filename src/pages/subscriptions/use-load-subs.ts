import { useEffect } from 'react';
import { useAppDispatch } from '@store';

import { actions as subsActs } from '@data/subscriptions';
import { useLazyGetAllSubsQuery } from '@data/subscriptions/api';

const useLoadSubs = () => {
	const dispatch = useAppDispatch();
	const [request, result] = useLazyGetAllSubsQuery();

	useEffect(() => {
		request();
	}, []);

	useEffect(() => {
		if (!result.isSuccess || result.isFetching) return;

		dispatch(subsActs.addSubscriptions(result.data));
	}, [result.isSuccess, result.isFetching]);

	return result;
};

export default useLoadSubs;
