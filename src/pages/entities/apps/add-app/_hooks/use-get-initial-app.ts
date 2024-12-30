import { useMemo } from 'react';

const APP_COLORS = ['#f19066', '#f5cd79', '#778beb', '#e77f67', '#cf6a87', '#c44569', '#786fa6', '#f78fb3'];

const useGetInitialCategory = () => {
	const category = useMemo(() => {
		return {
			name: '',
			color: APP_COLORS[Math.floor(Math.random() * APP_COLORS.length)],
			avatar: '',
			// logo_url: '',
			logo_url: 'https://raw.githubusercontent.com/pupupu-zone/pupupu-assets/refs/heads/master/logotypes/adobe.webp',
			aliases: []
		};
	}, []);

	return category;
};

export default useGetInitialCategory;
