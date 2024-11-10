import { useEffect, useState } from 'react';

const useScrollDirection = () => {
	const [scrollDirection, setScrollDirection] = useState('up');
	const [lastScrollY, setLastScrollY] = useState(0);

	useEffect(() => {
		let isTicking = false;

		const updateScrollDirection = () => {
			const scrollY = window.scrollY;

			if (Math.abs(scrollY - lastScrollY) < 25) {
				// Ignore small scroll movements
				isTicking = false;
				return;
			}

			setScrollDirection(scrollY > lastScrollY ? 'down' : 'up');
			setLastScrollY(scrollY > 0 ? scrollY : 0);
			isTicking = false;
		};

		const onScroll = () => {
			if (!isTicking) {
				window.requestAnimationFrame(updateScrollDirection);
				isTicking = true;
			}
		};

		window.addEventListener('scroll', onScroll);

		return () => window.removeEventListener('scroll', onScroll);
	}, [lastScrollY]);

	return scrollDirection;
};

export default useScrollDirection;
