import { useMemo } from 'react';

const PREDEFINED_EMOJIS = [
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

const INNER_PADDINGS = 48;
const OUTER_PADDINGS = 48;
const ITEM_WIDTH = 42;
const ITEM_GAP = 12;

const calcItemsLength = (maxLength: number) => {
	const ENTRY_WIDTH = ITEM_WIDTH + ITEM_GAP;
	const width = (window.innerWidth - OUTER_PADDINGS - INNER_PADDINGS - ENTRY_WIDTH * 2) / ENTRY_WIDTH;

	return Math.min(width, maxLength);
};

const useGetEmojis = () => {
	const emojis = useMemo(() => {
		const _emojis = new Set();
		const length = calcItemsLength(PREDEFINED_EMOJIS.length);

		while (_emojis.size < length) {
			const randomColor = PREDEFINED_EMOJIS[Math.floor(Math.random() * PREDEFINED_EMOJIS.length)];

			_emojis.add(randomColor);
		}

		return Array.from(_emojis) as string[];
	}, []);

	return emojis;
};

export default useGetEmojis;
