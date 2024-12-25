function getTextColor(
	backgroundColor: string,
	opacity: number = 1,
	baseBackground: string = '#FFFFFF'
): 'black' | 'white' {
	// Remove the hash if present
	const hex = backgroundColor.replace('#', '');
	const baseHex = baseBackground.replace('#', '');

	// Convert hex to RGB
	const r = parseInt(hex.substring(0, 2), 16);
	const g = parseInt(hex.substring(2, 4), 16);
	const b = parseInt(hex.substring(4, 6), 16);

	// Convert base background hex to RGB
	const baseR = parseInt(baseHex.substring(0, 2), 16);
	const baseG = parseInt(baseHex.substring(2, 4), 16);
	const baseB = parseInt(baseHex.substring(4, 6), 16);

	// Blend colors based on opacity
	const blendChannel = (fg: number, bg: number, alpha: number) => Math.round(fg * alpha + bg * (1 - alpha));

	const finalR = blendChannel(r, baseR, opacity);
	const finalG = blendChannel(g, baseG, opacity);
	const finalB = blendChannel(b, baseB, opacity);

	// Calculate relative luminance using WCAG formula
	const toSRGB = (c: number): number => {
		c = c / 255;
		return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
	};

	const luminance = 0.2126 * toSRGB(finalR) + 0.7152 * toSRGB(finalG) + 0.0722 * toSRGB(finalB);

	// Use white text on dark backgrounds (luminance < 0.5)
	return luminance > 0.4 ? 'black' : 'white';
}

export default getTextColor;
