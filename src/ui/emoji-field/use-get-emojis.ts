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

const useGetEmojis = () => {
	const emojis = useMemo(() => {
		const _emojis = new Set();
		const length = Math.min(Math.floor(window.innerWidth / 80), PREDEFINED_EMOJIS.length);

		while (_emojis.size < length) {
			const randomColor = PREDEFINED_EMOJIS[Math.floor(Math.random() * PREDEFINED_EMOJIS.length)];

			_emojis.add(randomColor);
		}

		return Array.from(_emojis) as string[];
	}, []);

	return emojis;
};

export default useGetEmojis;
