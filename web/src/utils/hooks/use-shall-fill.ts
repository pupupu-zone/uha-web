// navbar scroll behavior for pages without scroll
import { useRef, useState, useEffect } from 'react';

const useShallFill = (condition?: Array<unknown>) => {
	const rootRef = useRef<HTMLDivElement>(null);
	const [shallFill, setShallFill] = useState(false);

	useEffect(() => {
		if (!rootRef.current) return;

		const NAVBAR_HEIGHT = 120;
		const contentHeight = rootRef.current.offsetHeight;
		const viewportHeight = window.innerHeight + NAVBAR_HEIGHT;

		setShallFill(contentHeight <= viewportHeight);
	}, condition || []);

	return [rootRef, shallFill];
};

export default useShallFill;
