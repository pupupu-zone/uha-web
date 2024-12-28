import React from 'react';

import { Button as AriaButton } from 'react-aria-components';
import Root, { SwatchPreview } from './swatches.styles';

import useSwatches from './use-swatches';
import type { Props } from './swatches.d';

const Swatches = ({ onChange }: Props) => {
	const swatches = useSwatches();

	return (
		<Root>
			{swatches.map((color) => {
				return <SwatchPreview as={AriaButton} key={color} $color={color} onPress={() => onChange(color)} />;
			})}
		</Root>
	);
};

export default Swatches;
