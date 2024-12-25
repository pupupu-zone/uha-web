import { useMemo } from 'react';
import getTextColor from '../get-text-color';

const useIsTextDark = (color: string, opacity: number = 1) => {
	const isDarkColor = useMemo(() => getTextColor(color, opacity) === 'black', [color, opacity]);

	return isDarkColor;
};

export default useIsTextDark;
