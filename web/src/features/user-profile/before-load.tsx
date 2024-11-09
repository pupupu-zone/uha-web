import { useEffect } from 'react';

import { useLazyGetProfileQuery } from './_api';

const BeforeLoad = () => {
	const [request, result] = useLazyGetProfileQuery();

	useEffect(() => {
		request();
	}, []);

	console.log('result:', result);

	return null;
};

export default BeforeLoad;
