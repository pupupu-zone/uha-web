import { useMemo } from 'react';

const PREDEFINED_METHODS = [
	{ emoji: '🍎', name: 'Apple Pay', color: '#487eb0', comment: '*2080' },
	{ emoji: '📱', name: 'AppStore', color: '#9c88ff', comment: '' },
	{ emoji: '💳', name: 'Debit', color: '#dcdde1', comment: 'VISA Altyn' },
	{ emoji: '🤖', name: 'Google Play', color: '#4cd137', comment: '' }
];

const useGetInitialPayment = () => {
	const category = useMemo(() => {
		return PREDEFINED_METHODS[Math.floor(Math.random() * PREDEFINED_METHODS.length)];
	}, []);

	return category;
};

export default useGetInitialPayment;
