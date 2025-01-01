import { useEffect } from 'react';

const useOnClickOutside = (refs: React.RefObject<HTMLElement>[], handler: (event: MouseEvent | TouchEvent) => void) => {
	useEffect(() => {
		const listener = (event: MouseEvent | TouchEvent) => {
			if (refs.some((ref) => !ref.current)) return;

			const isOutside = refs.every((ref) => {
				return !ref.current?.contains(event.target as Node);
			});

			if (!isOutside) return;

			handler(event);
		};

		document.addEventListener('mousedown', listener);
		document.addEventListener('touchstart', listener);

		return () => {
			document.removeEventListener('mousedown', listener);
			document.removeEventListener('touchstart', listener);
		};
	}, [refs, handler]);
};

export default useOnClickOutside;
