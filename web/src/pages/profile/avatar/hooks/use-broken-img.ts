import { useState, useEffect, useRef } from 'react';

const useBrokenImg = () => {
	const avatarRef = useRef<HTMLImageElement>(null);
	const [isImageBroken, setIsImageBroken] = useState(false);
	const [isImageLoading, setIsImageLoading] = useState(true);

	useEffect(() => {
		if (!avatarRef.current) return;

		avatarRef.current.onerror = () => {
			setIsImageBroken(true);
		};

		avatarRef.current.onload = () => {
			setIsImageLoading(false);
		};
	}, []);

	return { avatarRef, isImageBroken, isImageLoading };
};

export default useBrokenImg;
