import React, { useEffect, useMemo } from 'react';

import { Button as AriaButton } from 'react-aria-components';
import Root, { SwatchPreview } from './swatches.styles';

import type { Props } from './swatches.d';

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

const OUTER_PADDING = 48;
const GAP = 12;

const useMaxSwatches = () => {
	const [maxSwatches, setMaxSwatches] = React.useState(0);

	useEffect(() => {
		const updateMaxSwatches = () => {
			const maxInRow = Math.floor((window.innerWidth - OUTER_PADDING - GAP) / (72 + GAP / 2));
			const maxRows = Math.floor(PREDEFINED_COLORS.length / maxInRow);

			setMaxSwatches(maxRows * maxInRow);
		};

		updateMaxSwatches();

		window.addEventListener('resize', updateMaxSwatches);

		return () => {
			window.removeEventListener('resize', updateMaxSwatches);
		};
	}, []);

	return maxSwatches;
};

const Swatches = ({ onChange }: Props) => {
	const maxSwatches = useMaxSwatches();
	console.log(maxSwatches);
	const swatches = useMemo(() => {
		return maxSwatches ? PREDEFINED_COLORS.slice(0, maxSwatches) : PREDEFINED_COLORS;
	}, [maxSwatches]);

	return (
		<Root>
			{swatches.map((color) => {
				return <SwatchPreview as={AriaButton} key={color} $color={color} onPress={() => onChange(color)} />;
			})}
		</Root>
	);
};

export default Swatches;
