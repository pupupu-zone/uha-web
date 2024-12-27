import React, { useState } from 'react';

import useGetColors from './use-get-colors';
import { useIsTextDark } from '@hooks';

import Icon from '../icon';
import { Button as AriaButton } from 'react-aria-components';
import { HexColorPicker } from 'react-colorful';
import Root, { Swatches, SwatchPreview, OwnSwatch, Label, ReactColorful } from './color-field.styles';

import type { Props } from './color-field.d';

const ColorField = ({ value, onChange }: Props) => {
	const colors = useGetColors(6);
	const [isVisible, setIsVisible] = useState(false);
	const [customColor, setCustomColor] = useState(value || '#e0e0e0');
	const isTextDark = useIsTextDark(customColor, 1);

	const toggleColorful = () => {
		setIsVisible((prev) => !prev);
	};

	const selectCustomColor = (nextColor: string) => {
		onChange(nextColor);
		setCustomColor(nextColor);
	};

	return (
		<Root>
			<Label $color={value}>Color</Label>

			<Swatches>
				{colors.map((color) => {
					return <SwatchPreview as={AriaButton} key={color} $color={color} onPress={() => onChange(color)} />;
				})}

				<OwnSwatch as={AriaButton} onPress={toggleColorful} $color={customColor} $isTextDark={isTextDark}>
					<Icon name="add" />
				</OwnSwatch>
			</Swatches>

			{isVisible && (
				<>
					<ReactColorful />

					<HexColorPicker color={customColor} onChange={selectCustomColor} />
				</>
			)}
		</Root>
	);
};

export default ColorField;
