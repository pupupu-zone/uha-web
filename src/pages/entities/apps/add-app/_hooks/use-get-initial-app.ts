import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { allCategoriesSelector } from '@data/categories/selectors';

const APP_COLORS = ['#f19066', '#f5cd79', '#778beb', '#e77f67', '#cf6a87', '#c44569', '#786fa6', '#f78fb3'];

const useGetInitialCategory = () => {
	const categories = useSelector(allCategoriesSelector);

	const category = useMemo(() => {
		return {
			name: '',
			color: APP_COLORS[Math.floor(Math.random() * APP_COLORS.length)],
			avatar: '',
			aliases: [],
			category_id: (categories[0] || {}).id || ''
		};
	}, []);

	return category;
};

export default useGetInitialCategory;
