import { useState, useEffect, useRef } from 'react';

const useBrokenImg = () => {
	const avatarRef = useRef<HTMLImageElement>(null);
	const [isImageBroken, setIsImageBroken] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		if (!avatarRef.current) return;

		avatarRef.current.onerror = () => {
			setIsImageBroken(true);
		};

		avatarRef.current.onload = () => {
			setIsLoading(false);
		};
	}, []);

	return { avatarRef, isImageBroken, isImageLoading: isLoading };
};

export default useBrokenImg;
