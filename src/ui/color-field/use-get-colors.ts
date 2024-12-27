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

const useGetColors = () => {
	const colors = useMemo(() => {
		const _colors = new Set();
		const length = Math.min(Math.floor(window.innerWidth / 70), PREDEFINED_COLORS.length);

		while (_colors.size < length) {
			const randomColor = PREDEFINED_COLORS[Math.floor(Math.random() * PREDEFINED_COLORS.length)];

			_colors.add(randomColor);
		}

		return Array.from(_colors) as string[];
	}, []);

	return colors;
};

export default useGetColors;
