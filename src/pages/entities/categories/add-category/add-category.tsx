import React from 'react';

import { H1, Button, TextField, EmojiField, ColorField } from '@ui';
import Root, { Main } from './add-category.styles';

const PREDEFINED_CATEGORIES = [
	'Streaming',
	'Gaming',
	'Music',
	'Books',
	'Art',
	'Fitness',
	'Cooking',
	'Education',
	'News',
	'Movies',
	'Shopping',
	'Podcasts',
	'Games',
	'Apps',
	'Cloud Storage',
	'Security',
	'Delivery',
	'Transportation',
	'Beauty',
	'Fashion',
	'Home',
	'Productivity',
	'Finance',
	'E-Mail'
];

const RANDOM_CATEGORY = PREDEFINED_CATEGORIES[Math.floor(Math.random() * PREDEFINED_CATEGORIES.length)];

const AddCategory = () => {
	const [color, setColor] = React.useState<string>('');
	const [emoji, setEmoji] = React.useState<string>('');

	return (
		<Root>
			<H1>New Category</H1>

			<Main>
				<TextField label="Name" type="text" placeholder={RANDOM_CATEGORY} />
				<ColorField value={color} onChange={setColor} />
				<EmojiField value={emoji} onChange={setEmoji} />

				<Button isFullWidth>Create</Button>
			</Main>
		</Root>
	);
};

export default AddCategory;
