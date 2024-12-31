import { useMemo } from 'react';

import gradients from '../gradients';
import useInitials from './use-initials';

const createHash = (text: string = '') => {
	let hash = 0;
	for (let i = 0; i < text.length; i++) {
		hash = text.charCodeAt(i) + ((hash << 5) - hash);
	}
	return Math.abs(hash);
};

const useGradientId = (name: string = '') => {
	const initials = useInitials(name);

	const gradientId = useMemo(() => {
		return createHash(initials || '') % gradients.length;
	}, [initials]);

	return gradientId;
};

export default useGradientId;
