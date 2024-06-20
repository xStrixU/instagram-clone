import { useEffect, useRef } from 'react';

import type { RefObject } from 'react';

export const useOutsideClick = <T extends HTMLElement = HTMLElement>(
	callback: () => void,
	refs?: RefObject<HTMLElement | null>[],
) => {
	const ref = useRef<T | null>(null);

	useEffect(() => {
		const listener = ({ target }: MouseEvent | TouchEvent) => {
			if (
				!ref.current?.contains(target as Node) &&
				!refs?.every(ref => ref?.current?.contains(target as Node))
			) {
				callback();
			}
		};

		document.addEventListener('mousedown', listener);
		document.addEventListener('touchstart', listener);

		return () => {
			document.removeEventListener('mousedown', listener);
			document.removeEventListener('touchstart', listener);
		};
	}, [callback, refs]);

	return ref;
};
