import { useState, useEffect, useRef } from 'react';

const useBrokenImg = () => {
	const avatarRef = useRef<HTMLImageElement>(null);
	const [isImageBroken, setIsImageBroken] = useState(false);

	useEffect(() => {
		if (!avatarRef.current) return;

		avatarRef.current.onerror = () => {
			setIsImageBroken(true);
		};
	}, []);

	return { avatarRef, isImageBroken };
};

export default useBrokenImg;
