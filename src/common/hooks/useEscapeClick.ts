import { useEffect } from 'react';

export const useEscapeClick = (callback: () => void) => {
	useEffect(() => {
		const listener = ({ code }: KeyboardEvent) => {
			if (code === 'Escape') {
				callback();
			}
		};

		window.addEventListener('keydown', listener);

		return () => {
			window.removeEventListener('keydown', listener);
		};
	}, [callback]);
};
