import { useMemo } from 'react';

const PREDEFINED_METHODS = [
	{ emoji: '🍎', name: '', color: '#487eb0', comment: '' },
	{ emoji: '📱', name: '', color: '#9c88ff', comment: '' },
	{ emoji: '💳', name: '', color: '#dcdde1', comment: '' },
	{ emoji: '🤖', name: '', color: '#20bf6b', comment: '' }
];

const useGetInitialPayment = () => {
	const category = useMemo(() => {
		return PREDEFINED_METHODS[Math.floor(Math.random() * PREDEFINED_METHODS.length)];
	}, []);

	return category;
};

export default useGetInitialPayment;
