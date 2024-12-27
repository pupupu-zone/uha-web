import React from 'react';

import { H2, Button, TextField, EmojiField, ColorField } from '@ui';
import Root, { Main } from './add-category.styles';

const AddCategory = () => {
	const [color, setColor] = React.useState<string>('#efe1e1');

	return (
		<Root>
			<H2>New Category</H2>

			<Main>
				{/* <TextField type="text" placeholder="name" /> */}
				<ColorField value={color} onChange={setColor} />
				{/* <EmojiField /> */}

				<Button>Create</Button>
			</Main>
		</Root>
	);
};

export default AddCategory;