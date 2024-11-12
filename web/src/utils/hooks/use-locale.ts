import { useMemo } from 'react';

const useLocale = () => {
	const locale = useMemo(() => {
		if (navigator.language) {
			return navigator.language;
		}

		return navigator.languages?.length ? navigator.languages[0] : 'en-US';
	}, []);

	return locale;
};

export default useLocale;
