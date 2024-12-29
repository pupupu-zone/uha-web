import { useMemo } from 'react';
import { CATEGORY_SET, METHODS_SET } from './sets';

const GAP = 12;
const EMOJI_WIDTH = 48;
const OUTER_PADDING = 48;
const MINUS = import.meta.env.VITE_REACT_WITH_EMOJI_PICKER === 'true' ? 1 : 0; // 1 for custom emoji

const useEmojis = (set: 'categories' | 'methods', maxRows: number = 4) => {
	const PREDEFINED_SET = useMemo(() => {
		return set === 'categories' ? CATEGORY_SET : METHODS_SET;
	}, [set]);

	const maxEmojis = useMemo(() => {
		const maxInRow = Math.floor((window.innerWidth - OUTER_PADDING - GAP) / (EMOJI_WIDTH + GAP / 2));
		const rows = Math.min(Math.floor(PREDEFINED_SET.length / maxInRow), maxRows);

		return rows * maxInRow - MINUS;
	}, []);

	const emojis = useMemo(() => {
		return maxEmojis ? PREDEFINED_SET.slice(0, maxEmojis) : PREDEFINED_SET;
	}, [maxEmojis]);

	return emojis;
};

export default useEmojis;
