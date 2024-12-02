import { useMatchRoute } from '@tanstack/react-router';

const useMatches = () => {
	const match = useMatchRoute();

	const isCategories = match({ to: '/library/categories' });
	const isApps = match({ to: '/library/applications' });
	const isPayments = match({ to: '/library/payments' });

	return {
		isCategories: Boolean(isCategories),
		isApps: Boolean(isApps),
		isPayments: Boolean(isPayments)
	};
};

export default useMatches;
