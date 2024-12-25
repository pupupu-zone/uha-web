import { useEffect } from 'react';

const useThemeColor = (color: string) => {
	useEffect(() => {
		const themeColorMetaTag = document.querySelector('meta[name="theme-color"]');

		if (themeColorMetaTag) {
			themeColorMetaTag.setAttribute('content', color);
		}
	}, []);
};

export default useThemeColor;
