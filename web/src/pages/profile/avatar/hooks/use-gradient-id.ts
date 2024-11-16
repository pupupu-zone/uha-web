import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import useInitials from './use-initials';
import { selectors as userSelectors } from '@data/user';

import gradients from '../gradients';

const createHash = (text: string) => {
	let hash = 0;
	for (let i = 0; i < text.length; i++) {
		hash = text.charCodeAt(i) + ((hash << 5) - hash);
	}
	return Math.abs(hash);
};

const useGradientId = () => {
	const initials = useInitials();
	const userData = useSelector(userSelectors.userSelector);

	const gradientId = useMemo(() => {
		return (createHash(initials || '') + createHash(userData.avatar_url || '')) % gradients.length;
	}, [initials, userData.avatar_url]);

	return gradientId;
};

export default useGradientId;
