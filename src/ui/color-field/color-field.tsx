import React, { useState } from 'react';

import TextField from '../text-field';
import { HexColorPicker } from 'react-colorful';

const ColorField = () => {
	const [color, setColor] = useState('#aabbcc');

	return (
		<div>
			<TextField type="text" placeholder="color" value={color} readOnly />
			<HexColorPicker color={color} onChange={setColor} />
		</div>
	);
};

export default ColorField;
