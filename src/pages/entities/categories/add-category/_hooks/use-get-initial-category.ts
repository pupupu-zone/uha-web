import { useMemo } from 'react';

const PREDEFINED_CATEGORIES = [
	{ emoji: '📺', name: 'Streaming', color: '#f3a683' },
	{ emoji: '🎮', name: 'Gaming', color: '#f19066' },
	{ emoji: '🎵', name: 'Music', color: '#f7d794' },
	{ emoji: '📚', name: 'Books', color: '#f5cd79' },
	{ emoji: '🎨', name: 'Art', color: '#778beb' },
	{ emoji: '💪', name: 'Fitness', color: '#546de5' },
	{ emoji: '🍳', name: 'Cooking', color: '#e77f67' },
	{ emoji: '🎓', name: 'Education', color: '#e15f41' },
	{ emoji: '📰', name: 'News', color: '#cf6a87' },
	{ emoji: '🎬', name: 'Movies', color: '#c44569' },
	{ emoji: '🛍️', name: 'Shopping', color: '#786fa6' },
	{ emoji: '🎙️', name: 'Podcasts', color: '#574b90' },
	{ emoji: '🎲', name: 'Games', color: '#f8a5c2' },
	{ emoji: '📱', name: 'Apps', color: '#f78fb3' },
	{ emoji: '☁️', name: 'Cloud Storage', color: '#63cdda' },
	{ emoji: '🔐', name: 'Security', color: '#3dc1d3' },
	{ emoji: '📦', name: 'Delivery', color: '#ea8685' },
	{ emoji: '🚗', name: 'Transportation', color: '#e66767' },
	{ emoji: '💄', name: 'Beauty', color: '#ff9ff3' },
	{ emoji: '👕', name: 'Fashion', color: '#cd84f1' },
	{ emoji: '🏠', name: 'Home', color: '#7bed9f' },
	{ emoji: '🎯', name: 'Productivity', color: '#2bcbba' },
	{ emoji: '💰', name: 'Finance', color: '#ffda79' },
	{ emoji: '📧', name: 'Email', color: '#4b7bec' }
];

const useGetInitialCategory = () => {
	const category = useMemo(() => {
		return PREDEFINED_CATEGORIES[Math.floor(Math.random() * PREDEFINED_CATEGORIES.length)];
	}, []);

	return category;
};

export default useGetInitialCategory;
