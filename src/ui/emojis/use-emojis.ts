import { useMemo } from 'react';

const PREDEFINED_EMOJIS = [
	'📺',
	'🎮',
	'🎵',
	'📚',
	'🎨',
	'💪',
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

const GAP = 12;
const MAX_ROWS = 4;
const EMOJI_WIDTH = 48;
const OUTER_PADDING = 48;
const MINUS = import.meta.env.VITE_REACT_WITH_EMOJI_PICKER === 'true' ? 1 : 0; // 1 for custom emoji

const useEmojis = () => {
	const maxEmojis = useMemo(() => {
		const maxInRow = Math.floor((window.innerWidth - OUTER_PADDING - GAP) / (EMOJI_WIDTH + GAP / 2));
		const maxRows = Math.min(Math.floor(PREDEFINED_EMOJIS.length / maxInRow), MAX_ROWS);

		return maxRows * maxInRow - MINUS;
	}, []);

	const emojis = useMemo(() => {
		return maxEmojis ? PREDEFINED_EMOJIS.slice(0, maxEmojis) : PREDEFINED_EMOJIS;
	}, [maxEmojis]);

	return emojis;
};

export default useEmojis;
