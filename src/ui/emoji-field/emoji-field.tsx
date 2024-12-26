import React from 'react';

import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import TextField from '../text-field';

const EmojiField = () => {
	return (
		<div>
			<TextField type="text" placeholder="emoji" />
			<Picker data={data} onEmojiSelect={console.log} noCountryFlags theme="light" />;
		</div>
	);
};

export default EmojiField;
