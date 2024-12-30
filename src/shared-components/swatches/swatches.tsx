import React, { useState } from 'react';

import { HexColorPicker } from 'react-colorful';
import { Icon, Button, Drawer, useDrawer } from '@ui';
import { Button as AriaButton } from 'react-aria-components';
import Root, { DrawerContent, SwatchesList, Swatch, ReactColorful } from './swatches.styles';

import useSwatches from './use-swatches';
import type { Props } from './swatches.d';

const Swatches = ({ maxRows, onChange }: Props) => {
	const drawer = useDrawer();
	const swatches = useSwatches(maxRows);
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
