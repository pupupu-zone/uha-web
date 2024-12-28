import { useMemo } from 'react';

const PREDEFINED_COLORS = [
	'#f19066',
	'#f5cd79',
	'#546de5',
	'#e15f41',
	'#c44569',
	'#574b90',
	'#f78fb3',
	'#3dc1d3',
	'#e66767'
];

const INNER_PADDINGS = 48;
const OUTER_PADDINGs = 48;
const ITEM_WIDTH = 36;
const ITEM_GAP = 12;

const calcItemsLength = (maxLength: number) => {
	const ENTRY_WIDTH = ITEM_WIDTH + ITEM_GAP;
	const width = (window.innerWidth - OUTER_PADDINGs - INNER_PADDINGS - ENTRY_WIDTH) / ENTRY_WIDTH;

	return Math.min(width, maxLength);
};

const useGetColors = () => {
	const colors = useMemo(() => {
		const _colors = new Set();
		const length = calcItemsLength(PREDEFINED_COLORS.length);

		while (_colors.size < length) {
			const randomColor = PREDEFINED_COLORS[Math.floor(Math.random() * PREDEFINED_COLORS.length)];

			_colors.add(randomColor);
		}

		return Array.from(_colors) as string[];
	}, []);

	return colors;
};

export default useGetColors;
