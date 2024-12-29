import { useMemo } from 'react';

const PREDEFINED_CATEGORIES = [
	{ emoji: '📺', name: '', color: '#f3a683' },
	{ emoji: '🎮', name: '', color: '#f19066' },
	{ emoji: '🎵', name: '', color: '#f7d794' },
	{ emoji: '📚', name: '', color: '#f5cd79' },
	{ emoji: '🎨', name: '', color: '#778beb' },
	{ emoji: '💪', name: '', color: '#546de5' },
	{ emoji: '🍳', name: '', color: '#e77f67' },
	{ emoji: '🎓', name: '', color: '#e15f41' },
	{ emoji: '📰', name: '', color: '#cf6a87' },
	{ emoji: '🎬', name: '', color: '#c44569' },
	{ emoji: '🛍️', name: '', color: '#786fa6' },
	{ emoji: '🎙️', name: '', color: '#574b90' },
	{ emoji: '🎲', name: '', color: '#f8a5c2' },
	{ emoji: '📱', name: '', color: '#f78fb3' },
	{ emoji: '☁️', name: '', color: '#63cdda' },
	{ emoji: '🔐', name: '', color: '#3dc1d3' },
	{ emoji: '📦', name: '', color: '#ea8685' },
	{ emoji: '🚗', name: '', color: '#e66767' },
	{ emoji: '💄', name: '', color: '#ff9ff3' },
	{ emoji: '👕', name: '', color: '#cd84f1' },
	{ emoji: '🏠', name: '', color: '#7bed9f' },
	{ emoji: '🎯', name: '', color: '#2bcbba' },
	{ emoji: '💰', name: '', color: '#ffda79' },
	{ emoji: '📧', name: '', color: '#4b7bec' }
];

const useGetInitialCategory = () => {
	const category = useMemo(() => {
		return PREDEFINED_CATEGORIES[Math.floor(Math.random() * PREDEFINED_CATEGORIES.length)];
	}, []);

	return category;
};

export default useGetInitialCategory;
