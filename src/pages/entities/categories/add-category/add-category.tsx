import React from 'react';

import { H1, Button, TextField, EmojiField, ColorField } from '@ui';
import Root, { Main } from './add-category.styles';

const AddCategory = () => {
	const [color, setColor] = React.useState<string>('');
	const [emoji, setEmoji] = React.useState<string>('');

	return (
		<Root>
			<H1>New Category</H1>

			<Main>
				<TextField type="text" placeholder="name" />
				<ColorField value={color} onChange={setColor} />
				<EmojiField value={emoji} onChange={setEmoji} />

				<Button isFullWidth>Create</Button>
			</Main>
		</Root>
	);
};

export default AddCategory;
