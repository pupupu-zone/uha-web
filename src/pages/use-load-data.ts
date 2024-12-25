import { useEffect } from 'react';
import { useAppDispatch } from '@store';

import { actions as paymentsActs } from '@data/payments';
import { actions as categoriesActs } from '@data/categories';
import { actions as appsActs } from '@data/applications';

import { useGetAllPaymentsQuery } from '@data/payments/api';
import { useGetAllCategoriesQuery } from '@data/categories/api';
import { useGetAllApplicationsQuery } from '@data/applications/api';

const useLoadData = () => {
	const dispatch = useAppDispatch();

	const payments = useGetAllPaymentsQuery();
	const categories = useGetAllCategoriesQuery();
	const applications = useGetAllApplicationsQuery();

	useEffect(() => {
		if (!payments.isSuccess || payments.isFetching) return;

		dispatch(paymentsActs.addPayments(payments.data));
	}, [payments.isSuccess, payments.isFetching]);

	useEffect(() => {
		if (!categories.isSuccess || categories.isFetching) return;

		dispatch(categoriesActs.addCategories(categories.data));
	}, [categories.isSuccess, categories.isFetching]);

	useEffect(() => {
		if (!applications.isSuccess || applications.isFetching) return;

		dispatch(appsActs.addApps(applications.data));
	}, [applications.isSuccess, applications.isFetching]);

	return {
		isFetching: payments.isFetching || categories.isFetching || applications.isFetching
	};
};

export default useLoadData;
