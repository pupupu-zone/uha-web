import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { selectors as userSelectors } from '@data/user';

const useInitials = () => {
	const userData = useSelector(userSelectors.userSelector);

	const initials = useMemo(() => {
		if (!userData.name) return '';

		const result = userData.name
			.trim()
			.split(' ')
			.filter(Boolean)
			.reduce((acc, item) => acc + item[0].toUpperCase(), '');

		return result;
	}, [userData.name]);

	return initials;
};

export default useInitials;
