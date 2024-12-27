import { useEffect } from 'react';
import type { Props } from './emoji-field.d';

const DEFAULT_EMOJIS = [
	'📺',
	'🎮',
	'🎵',
	'📚',
	'🎨',
	'🍳',
	'🎓',
	'📰',
	'🎬',
	'🛍️',
	'🎙️',
	'🎲',
	'📱',
	'☁️',
	'🔐',
	'📦',
	'🚗',
	'💄',
	'👕',
	'🏠',
	'🎯',
	'💰',
	'📧'
];

const useDefaultEmoji = (value: Props['value'], onChange: Props['onChange']) => {
	useEffect(() => {
		if (value) return;

		const randomEmoji = DEFAULT_EMOJIS[Math.floor(Math.random() * DEFAULT_EMOJIS.length)];
		onChange(randomEmoji);
	}, [value]);
};

export default useDefaultEmoji;
