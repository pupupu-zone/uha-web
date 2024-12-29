import { useMemo } from 'react';

const PREDEFINED_COLORS = [
	'#f3a683',
	'#f19066',
	'#f7d794',
	'#f5cd79',
	'#778beb',
	'#546de5',
	'#e77f67',
	'#e15f41',
	'#cf6a87',
	'#c44569',
	'#786fa6',
	'#574b90',
	'#f8a5c2',
	'#f78fb3',
	'#63cdda',
	'#3dc1d3',
	'#ea8685',
	'#e66767'
];

const GAP = 12;
const SWATCH_WIDTH = 72;
const OUTER_PADDING = 48;

const useSwatches = (maxRows: number = 4) => {
	const maxSwatches = useMemo(() => {
		const maxInRow = Math.floor((window.innerWidth - OUTER_PADDING - GAP) / (SWATCH_WIDTH + GAP / 2));
		const rows = Math.min(Math.floor(PREDEFINED_COLORS.length / maxInRow), maxRows);

		return rows * maxInRow - 1; // 1 for custom color
	}, []);

	const swatches = useMemo(() => {
		return maxSwatches ? PREDEFINED_COLORS.slice(0, maxSwatches) : PREDEFINED_COLORS;
	}, [maxSwatches]);

	return swatches;
};

export default useSwatches;
