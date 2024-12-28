import React, { useState } from 'react';

import Icon from '../icon';
import Button from '../button';
import Drawer, { useDrawer } from '../drawer';
import { HexColorPicker } from 'react-colorful';
import { Button as AriaButton } from 'react-aria-components';
import Root, { DrawerContent, SwatchesList, Swatch, ReactColorful } from './swatches.styles';

import useSwatches from './use-swatches';
import type { Props } from './swatches.d';

const Swatches = ({ onChange }: Props) => {
	const drawer = useDrawer();
	const swatches = useSwatches();
	const [customColor, setCustomColor] = useState('#e0e0e0');

	const selectCustomColor = (nextColor: string) => {
		onChange(nextColor);
		setCustomColor(nextColor);
	};

	return (
		<Root>
			<SwatchesList>
				{swatches.map((color) => {
					return <Swatch as={AriaButton} key={color} $color={color} onPress={() => onChange(color)} />;
				})}

				<Swatch as={AriaButton} $color="#fff" onPress={drawer.openDrawer}>
					<Icon name="add" />
				</Swatch>
			</SwatchesList>

			<Drawer {...drawer}>
				<DrawerContent>
					<ReactColorful />

					<HexColorPicker color={customColor} onChange={selectCustomColor} />

					<Button isFullWidth onPress={drawer.closeDrawer}>
						Save Color
					</Button>
				</DrawerContent>
			</Drawer>
		</Root>
	);
};

export default Swatches;
