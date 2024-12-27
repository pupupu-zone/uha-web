import { useMemo } from 'react';

const PREDEFINED_COLORS = [
	// '#f3a683',
	'#f19066',
	// '#f7d794',
	'#f5cd79',
	// '#778beb',
	'#546de5',
	// '#e77f67',
	'#e15f41',
	// '#cf6a87',
	'#c44569',
	// '#786fa6',
	'#574b90',
	// '#f8a5c2',
	'#f78fb3',
	// '#63cdda',
	'#3dc1d3',
	// '#ea8685',
	'#e66767'
];

const useGetColors = (length = 6) => {
	const colors = useMemo(() => {
		const _colors = new Set();

		while (_colors.size < length) {
			const randomColor = PREDEFINED_COLORS[Math.floor(Math.random() * PREDEFINED_COLORS.length)];

			_colors.add(randomColor);
		}

		return Array.from(_colors) as string[];
	}, [length]);

	return colors;
};

export default useGetColors;
