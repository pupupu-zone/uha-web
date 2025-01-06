import { useMemo } from 'react';
import { DateFormatter } from '@internationalized/date';

import { useLocale } from '@utils/hooks';

const useFormatters = () => {
	const locale = useLocale();

	const [fullFormatter, shortFormatter] = useMemo(() => {
		const full = new DateFormatter(locale, {
			day: '2-digit',
			month: 'long',
			year: 'numeric'
		});

		const short = new DateFormatter(locale, {
			day: '2-digit',
			month: 'long'
		});

		return [full, short];
	}, [locale]);

	return [fullFormatter, shortFormatter];
};

export default useFormatters;
