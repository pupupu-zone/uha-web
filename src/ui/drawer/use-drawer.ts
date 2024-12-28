import { useState } from 'react';
import { useSpring } from '@react-spring/web';

const useDrawer = (height: number = 450) => {
	const [isOpen, setIsOpen] = useState(false);
	const [{ y }, api] = useSpring(() => ({ y: height }));

	const backdropSpring = useSpring({
		opacity: isOpen ? 1 : 0,
		config: { tension: 180, friction: 20 }
	});

	const openDrawer = () => {
		setIsOpen(true);
		api.start({ y: 0, immediate: false });
	};

	const closeDrawer = () => {
		api.start({ y: height, immediate: false });
		window.setTimeout(() => setIsOpen(false), 300);
	};

	return { isOpen, openDrawer, closeDrawer, y, backdropSpring };
};

export default useDrawer;
