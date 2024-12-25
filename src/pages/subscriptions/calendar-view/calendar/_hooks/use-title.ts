import { useMemo } from 'react';
import { DateTime } from 'luxon';

import type { Props } from '../calendar.d';

const useTitle = (month: Props['month'], year: Props['year']) => {
	const title = useMemo(() => {
		const now = DateTime.now();
		const date = DateTime.fromObject({ month, year });
		const format = date.year === now.year ? 'LLLL' : 'LLLL yyyy';

		return date.toFormat(format);
	}, [month, year]);

	return title;
};

export default useTitle;
