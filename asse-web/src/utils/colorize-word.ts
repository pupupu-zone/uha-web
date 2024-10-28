const colorizeWord = (word: string = 'honey') => {
	let hash = 0;
	for (let i = 0; i < word.length; i++) {
		hash = word.charCodeAt(i) + ((hash << 5) - hash);
	}

	// Convert the hash to bright RGB values
	const r = ((hash >> 16) & 0xff) | 0x80; // Ensure the color is at least 50% bright
	const g = ((hash >> 8) & 0xff) | 0x80;
	const b = (hash & 0xff) | 0x80;

	// Format as a hex color string
	return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
};

export default colorizeWord;
